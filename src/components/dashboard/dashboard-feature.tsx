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
    "2ME89F2DNrjsP2QUbpVQmUEXuEa6QmMTSepgSn5ts5RJ5BGMoMie3qQDhWhAA5S3U8LhGvUfCNC7bMtNNy5LSVsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWJCrFbS6iwbtekpsyPavVU62H2eKp4jehjQfnpu8hJKSwdVtz1muj5o7nWSESmC8yp7AHmCcVnLmvFkM1aQDjm",
  "key1": "5vsDzYBNAh13wEfDHH3GLY6hV3sK7PoWLbSeb11ekoCNqGFHCxQMQTa5LxwnSmn9HNSnD8abez924F6u32z1RWN6",
  "key2": "4cC2JBPXdcFeqDQxN6rcDWJpwXoASP1eCKPSWPK4DPB1mDcE4ku5huUnhx1AHHuJ4NkgPFeSiM6L7h4MgfsfCNS7",
  "key3": "3EHCWhH655h3JDpzwDJ6iRedJRc6obJtfbCN6mzdJfXizoPk5y4NAUJpFDNwWDp2Ap394nHMH4BmCxLcYu4vMJRe",
  "key4": "4eqn5qmhuRpDv1C8BqTq2iGxikVC2yJvRuoGyixtNPEwQZ2aoYX2UjHnzZxRz28b8MX3YVS2rg6PsqtgnfYTr1Wg",
  "key5": "RCHWwyhXyHy1SaB18UWfKSG1rf7osrhAXiK1sgSYF7NHzNMsH4CPiYyCJWpt9H3PD4xgEEzEwoiNZ4eG6avMd59",
  "key6": "3EZcnK8mrYHBHazrdoAt1K4ssZRU1dmvnpxiHcoBDyeCSQWb88thNfZL6GnbKyGhMaziXDYqeLS2rfv7sujcFwWh",
  "key7": "4AdvFFR4xBSFX6NygXT5rpW3dCvCLoMWg5n8v6FPoJhDBGaHH9acdXxUxSgGRs41Agdo2KYEK6bzsoBNjwCXvWuo",
  "key8": "24rAhBXX2rTdH1tC12LV3jV8BNJw4iLFNDNsoqTqihmDzYLSBGEfDBios1UDHYj25Z5HkwBeHPFkrG3rJTennkUY",
  "key9": "3Ltohj5wheN5zLZ7pFqTU6YiDiigpoSuazRCgbmuhcHSufJ3tmwS7C9qeJ3QbPAtaix8oiCdbAQeEtW2FSq9kXZk",
  "key10": "1uid9yA4kiw3EduhWCtSsBXTL2vWJCMMXBGai2DsmvuTQLizxQjSjD4DCpQhHjVrmYU8DmDtLRHuyWUzQ3cW3Sn",
  "key11": "4okN6KpLbnMBGUq54JSzLwYmFAQKkATvJmtyugFAdq9eHgDUAEn9QpdCBLbSk1ws4t8v95hMxoNC6Pc8MZTyPdoB",
  "key12": "QBr9MDbsWnhy1MoZ5Lmfq5yqvDk68jhBJm1hbNHNKRB5c4CBMqq8sxvHzCLUv3fN1945mtjQ19gCsFkZpgaCTke",
  "key13": "4vULHC8aqvhry5fSRPU3CoNsV9oSaKLRC6Pe6bMtPbas5AHcMLFf1NDmhYBuFYaj61oZxxfgDWc5ML5zquQe1GCx",
  "key14": "45JpgiZFCejzMdu8VuFfrbGzxKShUKwBibGG9qVEvVWXqXBpwveVS4Srcsegm8nMm7ov8SEUD44vmAMycxVUmbmZ",
  "key15": "5SSRyCJ1GG43Q2TXRKWzznGc6HZKWjiu4YSUuCVdJsnY8YzaNBJgymGk4mzXcyUHbVqsfzGyNmnH6xMUAkLXv4Ez",
  "key16": "4HXKPayfewUeQnK9KPfAxVvNokGxtazhS4Yp3aTmuQTZVPf7WpsjrCDxEiVZjUSwS2RfPEEZpTWJVcCXbXumudzf",
  "key17": "3VAkHsKLo1fxqHCpJTAmYympdiZao8oEhH6GECoESFizP2x5XbQwPM1mwH822m41oZcLA9kqHa9mL7V9cCBaVS2g",
  "key18": "21M8WaAKibtiMfj3iFR8s95mEhxQvfhWeQXhDmyjt1uzhnwDkGa2gD8LrE3EFgAd2qEE6zPusjhzfDtTRChJ3eui",
  "key19": "3f12nMwTXYzBhdk5tKzdUZHCqCohnzi4Ux3Hrzo1ziS3Fm2E4WSGaGFEKxV7fW36fwdyqns42QxrK5G8P96M1kci",
  "key20": "4C8ubLaWrYmnR17fSjtrKwPBp911QEVhPTe1YJNHvFziMpd6V9GmCnTsimgn4Ly99yJiYrW3RnaWhU8UqnyyAEH3",
  "key21": "3jy6cL5ogeR4Us34SaKKP5R2v1qUfAr9GQJHL4KTNQvwma8yfqFePgaJh1HfsorkuMm3tgY5jXBRpPtNT1mJXaWm",
  "key22": "2bGypA9bpWSoxLuR5h14B5XvhT2xCxdGPU86BB2hTLrFEkmD9CRSDUQdfmLc9QuTJGkzRRNvQ9G8GHsuUiCD6nWh",
  "key23": "msD9xEpVcVz1FtP8aSAnVAQy36hAYUuPF6YMupToSk3WsAgxAsicsqoCD8e7NN8vP8ZE4ucdcg388RnHo7X89GR",
  "key24": "5UFerktFL3XCaZ7SBv39zmPW6d8xZaWr9zMwa5sEh14o14hSDiVVhwTmsxJoXgv5HSoYSPCg6S6nt5bSca4W8fQ4",
  "key25": "3C4ywECW5JXLrf3UzNaapq3ceP21eLGLpXEr292epNiFuusCzqb9jE88wvJezs6teEtmNvo5Qt6FmUA5P4nZg2jq",
  "key26": "444hByMe9YGo7EEht2RMvY3ntuedgYq5Yfqu4bYLTM3xEYAUUCC9zG5Stwe7TnyoezCMue3xFThQXsxENKcDFdSK",
  "key27": "5LeS5vrAESx2wX1DEcU2SRnUmT7EZ1XoytmtPcXtj1y1fxFLZ41wa1XdahBLSW2hrcFArpvk9aYiw1b73UwPsQwx",
  "key28": "5EA8mS3hBwx9gNCmcQNGMy2BwVsKhvbNJupGXbaMCrrGfLbQW3NnWyEg197hztSSzuyXYg45pHvBrtTrtaob2nqW",
  "key29": "5UQDHJcdreHuXa7X9RTVKAEJKP2AG4JCbUofSkqbtpj3tGLWo3svhD4atf9bdSukq6Z6swDQVmvYzbRWAwBuw45b",
  "key30": "R8cDgEvBSMWRpZ2tGgtPEtNDGYZdU7T8ueeA1QwH3QBp7uP9J8DN4kFVJLwCssNA6bt2BGvLHXkP5vZ98mgbgvs"
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
