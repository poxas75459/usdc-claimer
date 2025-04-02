/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4DHWPrZ2HGwTGoJaRPPKmvS9h2W6azkaGWvFUVnwpbciEMbnUksAZHaTqPk1PBcQsCMQodvwcDnvWiNc4H9WqB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HF3iYywnfkUVQtBUCRviYVeWdjhM2jspeTTBhgn1wt1ZYQVZmWUPuzFGqEpGTngJ5E2bXryP9eiDYpB1yt7g3jE",
  "key1": "3Ppj9ZogQQpShvyJuNn4iFE64qSrnabS8kv6Sfmy7y81ubcm2NE7Jti8SzEymZYgfvsHT8jLSNsSmfjkvaGvwnh2",
  "key2": "3jFQKvHtXXF84habwAxZK78Pos8qCm8fdSdEuzgkcPCsondKirWzuVSJAEm1JtQDDXX3No9NLwfknCfu77yRqTsf",
  "key3": "4AFpnhvaPxSDfyorTAMCYM9NTeyxy53ViVrQn8VFoGQzjje87hgt74pAWfFwz5SYpKnBtQSQXb26E3beCeSpdC1h",
  "key4": "3VjVa21JiGxFKLhL95DCECVdoEk7r5fd8N6ZKPrhakKUX7mkt7sscG7k4H7nHnvxx2wuLRsJERSwEvYRXKPB2z2x",
  "key5": "2X7x2PkKM5WUaMs7dy1cEf19URuADa5XKm1QdwEgEj34vKuST4c9j9LCGpZ2Vycs4EvvweRJR8tyXSjrpL73GHLh",
  "key6": "33dBp3Dd47reeKEtc2NNZjVPFLeHBve81ZUkUbBxYgLf3NrzhXptk7Xi6qigApkhd43Xefa3tNdtXRP9EipZyH6s",
  "key7": "4qtnh316waEYnktD3vC5dJgYDj2jEwSdAhfQzgREsNfonHu2tD5bpSeRaMLQbnWz7qXfnA82gHzeDQjUpzhkivd3",
  "key8": "4fHyh4k3VXBxxSzxBM95kzkJ8n7TGfeQbY1iD9wtESFj6LpGLXm9FWjacVH6NqEeswKaZXYvedSHRUEHkaYPmRL5",
  "key9": "4rKoavgagiPsq7SqNerABwZUqspZWxvGAgY49DXUtDY3eRArySsNWRJsx9e2cXX3sCy3azsYoVHGApipBAMk71nM",
  "key10": "58WGuaBuHf7XLeFe17hND7b4kngodLDyhPm5ToePHsC4mGsQamBsxLcLQCq86S9xiafm6mTwoLDzNqrPkXuLe78m",
  "key11": "3CuBJx4WxQBaSfteufJYDFfzMXxskVoAQK5uHHPssGyE4SjGn9Q7EyxTGcSrxPJ3iLSvaqHKE2wHKuuBsYXzcZN3",
  "key12": "4TRJmUgBsQxAH5YAP6FVkC922ion8j8venhEJZQyH1s9CTKFPLin4zNHuePQFYHPjgXjorFfCPEacZkST3x9E644",
  "key13": "5xa8U9uYpfVmK4SX4PJKmey52LmPHwqGfCJNfFa2WxvMiwh8DvABNXuCS4MFef2JyXaveyjhJLZzP7mojLhn8LQj",
  "key14": "56zqBJpfezquDgg5nQu3xSwCToLsregEEWdvLbYBQJ715hBZSrzZseMoACi2HiWd4tWPw63kKeSMPEbgWrgCArF7",
  "key15": "5k52EAyJDs2kVp83YEpqsRkCBpCNV3FVdkyyQcp9XYJjwxidnCGChnJR9xD7gnPYZ8ETJ7VTA5VvdwdN2tqYzNcn",
  "key16": "e4QxJuRAcxyzhTGKuF3kdKRptqv31voUr6QbngPLBwRfSYpEsSP5RVRscCwAGAjMJyiyWDiw5EGvvz85LR8u4HK",
  "key17": "sQuKfF7JDvCHzezSfF13jgBLUwSPfbY6Rfrzk7f9QaVcGfXpv122A6fGFkqZEmMSRiwRxsNxNwDrU9CVQg2ar45",
  "key18": "5WsCcWLtJrS6hLeRg4XjQJiPBjokpuhbqUhtdkcuaV2dHBHBxfFTjFT2swJ2sJLWMK54Zuron4DNC4HbSC5B2Wa1",
  "key19": "4wqEqCpqBJYLtHLRYQQEsJDBv2DPmt46frL5i5y8oghFD9i84xBr7mqGVHrzz6ZBbzLcwsY5h92du5JESiYEtXZh",
  "key20": "QX6upGMgYTNhZbirm2o5gTtEhyvNS9bsL85ouuZK1BuYCT3Ewwxz2nrzCUn4ThqY5Ymbj1QsF3ovbV5zDg6QZ8t",
  "key21": "3nWMhP8pfZUAcy1YCiLocZxsgVqpGQQrCtFNxsfrkA1WEBJHCno7s3mN9qXJyTdaVrhttycAm63weaRrw8yf5X49",
  "key22": "3tE8dHYTUHH93QZecuNxr2ezViVSNRoZSxPwuZntDiWrTrPn4ibcKmgggS4Kg71rtAcpAWN1BZR5ShVf39BNj9DG",
  "key23": "wuHw4qNVgxBfJK4SSVhL4DJYHsDdjKESVVrkm9BbTVWydRdRMMFM3sfDmou5wgy8G9snrPYRiQGMdhR7iPfsSJB",
  "key24": "QWBRkJxBst9oMYeGWU2j67e7sFBKd2DE6UvX5pGZwuYGbTri1fn3sRiGWnjtPggRWMGbUZZsDXfnF6WwsBRqb4b",
  "key25": "5VLDPrEG842LxXfE1YCu2HJRdmgEYSGGmvRrxXP4H1Fdv6Js2Wo65zuACic4bLbgiRw3zaFhnMNzmrxwRu5i4tVA",
  "key26": "Nfg8uLrFqYg9UCEw2gCqBDgbt9BY6aSGgRUqh8g8f7D2XMnTc8GSokXMGURqtUn4o6aEsJAqAmCn36P4KWNQyAp",
  "key27": "34rP7o9i7uZ2Ljj94FGVMSXXn8CH4eDNPzeT8ECjN77JcCxoAmr2VG7p57nXgrgoThc6tA5184H8b42kJbjPhWvf"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
