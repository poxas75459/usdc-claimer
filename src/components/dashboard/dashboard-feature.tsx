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
    "2q2iC3rNnmcMTxXo9qpcGwdgFZRaR1fKtWnqKdo9VMLaQ3Q32rKhbBesjTXTs7PdWu3mZr26RtWDygMXF63gW9C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bvHcHmPXcrrvSy7c8LigwtJYaZAeKk1TyP6RMb9WoQHv6jxhY8vDyPrGv4jpMWPbQfSvfbwJgnrqvxgCRkGAhBQ",
  "key1": "2kYC4AcqKzmh57bYctFwx7QbUGSEaPHSt8r7dcZxB1BZQuVyMDZr6goyT33upjaBuigfytxXbt68LpxNKy38TLnH",
  "key2": "3MHAAX69SUD6ajRBarB9WFMs9MEnrEfoWyZHMv5Qxmwpf2hYjSXducxG395CtLr6Tyo1p7jsU4mmbeN8sXxWkkZx",
  "key3": "4nUooagz789bfed1HWVgvjGZc4bfTPQV8YNNSL5ff6aPemrZZFCmxssEDUrEy3irfaJE64rpSZcBhGxa6X17BWxr",
  "key4": "4959vTEhEhbNpEXL1DHC3XQuRVB1n6oAE2TkjgiqBeqLJftyPdpXAKMo8N3jPXnBMq2yibVnMfHHjDMVdkSe6f2x",
  "key5": "5RmNjnrHNvxt4TNM3Y1hNaKJGPk2BEdcqnphkWffHqXAhEKhFa7nr9VjAqAaspVWG9qShaD8RZrUBmXRfarLB6uC",
  "key6": "U1wBBh5ZQVQGh4BT4jiWLPNnXSqnizUkdDuN3wrj6z9UsTJTa8HMZtL8BXcahNJxwiD3NXcaEVn6SQRA4VWXMyn",
  "key7": "2WhX9vPsPrgYi7f8YAYgnaBjXoRkzN3wcMTH2mJFQMkpAsSrnDfMR7ChfWo7EkVqvLvijpkbAMftSfn87fkKUrLK",
  "key8": "3KG2BJcxM4tmFj7EQotYVPEfHnZwjG4gbJbnNBsHeFNHRkdP7hejoZGLyoNjXhnN2jMNkLCamQhw6Rjc9A14wcHX",
  "key9": "27ubmtYUenkzezi7Kcm14cpRcn834xjqV8K1eKDy8mHfu5yZN5hAHtSEQTcimcSmEmvmiGQtbLgzP2GohiEtxLBY",
  "key10": "spxtGWBqp97M73wQ3zzF84nFSLYEJCvuKricaBwmiV2cBCSZPmijGRu8z8erfiFtMSt9E2CCeHeF7GQxrq2DhtV",
  "key11": "2NLN4zQMRQmu6FCrhvBTuz84CQobG33QHZ3f53sNGirXXMdaT6kBegUDm7FxqZSjc83tHGpGcR8ezKFkYREinx8Y",
  "key12": "4sq8koDeodn5BjjgoN6Fhmdd6dC5UDE3P561HhobFdGUVJbCaFDam2a2sRMkqEriiJG8dL2CNYUCohEPqSJUijtp",
  "key13": "5JybKsti2CZfA3vBVyng6gSEfu14uLt3A8ku8WtQK7jD3dXpU6TW9sovrxG6Bwf9X6nfUK2Gu1tr7beVkutPDCaf",
  "key14": "JM5ar62TQ5LNr5ne5NYekHXQYJYp5wWm535nP6n55NWgC7tbZYvaLKDZo1SgCM7hgeRepLbnHucGFBjE1Xm9Wrh",
  "key15": "pxp7YbMphRj2ojUVZexVDaDyH34P5rQ9PoxgxMzaYSw3Dky4AQANtWsgWD55YRbMKCzJM18m9f6pWJJJF12ic25",
  "key16": "4cptvwbZ2cdbBAHZJkASvJvsNoStXHFFia7pyBnFi1CZbryKLJUnGeaws9V5okArxEXEGMWNKj4HDHryG7LQ8QuJ",
  "key17": "5pFstKvcUAxpBgcpTk9ZzksfGR7BNfMCiMNcYmgNAzEFcVE1nxhqSAEtuiRaqa4B9gmen78AtYHRopB7tFAo312Y",
  "key18": "4srTENz9NQTY8vJCsqFndSusuVnhokeNMrQ3DGybbWYfagSz2S8DfkvDP6FkJT2Fx8jKNDQGJwddMAJ7GWJ6RScs",
  "key19": "naedzisQQMtCnCNjQgQWsP6L4ezoTJbsUdqebkFkF16s1hX3rK5x28UnJwoXk2Sk22q3c2yJcKus3wCdEFDampY",
  "key20": "5BuDZSEGHZoXiNYZdRWE1nsfH7sHuJAw2kntmgwGqZrQhM57xHdjnZ3HKyxcrtPFsRzhcjNF9h6N5NSwmQhWaJbX",
  "key21": "3rMfL8srFudZtEhqq2uxnx7cdCZXa3d1AnSwesjNCjipPuFckp6Wnv5qN8fWqriYi28veiL3yGBTGZo9tVecCNfB",
  "key22": "2YdUUJ3B2CdVURJ9WQQ3MjzBMyzGq3CigVkWEoSHEYW4QLyY5u3iGV76F4bNHHsSY3ieJMoF6nZEY51SSSCLjfK4",
  "key23": "bWxjcnwjsDbsvx1RRgiTFm5g4iCTaRnSjiqSf8jPMCZqCGUSZ3yUuptJ7Dz1svjvGuJ6JbyiYHZgFjfg3PVupUg",
  "key24": "2onRLYLMsQPY1R9S8vsa5GTEgie5PjdghA5R9jwp6JmZqLnATaKJvgDjpU6D7ufsbNXsC27txgvudK7y2Rnw27Gk",
  "key25": "441oegoZ7sUB85P3sJFTvGeq17NsRrRFGX7b5hitAb1PHX7VMHWsScV2MZtGGBczr4CsJgpQg9feXpJA17VbS4tV",
  "key26": "5Ez7Hjxjwn33SgZxCwsiJTJ2jBrkCH9apgXDpCo2wmzfgRCemYjCe3ovvYzQ82t5fNbRj3XNafetxwsCQNZumCZZ",
  "key27": "2DjrH7J9gav4TwR25eyM5wNEaT5Xap5YsGyBqucYbE3yePCwK7szrsSSM9VtibFFLsBhrSNVM4gj3A4T9cNK4xed",
  "key28": "65vW871pAMfM2YMdogM21jcKyYTnpPrr7jk1vWDw13czRPHnCDVwDwCLMzNWRLhHT77Ut77YN2hSSbCfsmPEyL6P",
  "key29": "2JpbScK1qRqLPHVXJq1g3vP99QAm5gySWZRp4BdtFhM4tCDnmM64WwHBC9kxyDadHY4smG6bXMRrRYxuTojJnC4D",
  "key30": "2WpJqUPUMrygs5ZbVAwGiXB4MA1hzoX1GUKBGEmi8VziCz5MFhqAb4iaNH1fkd2U6FkUyfweGrT8aBb9dv2V8zcd",
  "key31": "2yqgfffFsN7NiXT1u3b94H5hu5FMBBWSbweio7Vp2Sp3JUadaJzY2nNXo5ziK5KeNsryYKNkgts867goeCHMfyZ9",
  "key32": "5Vg4hw9eVDVDT5u94gcTiVDC7VmEHFWGBK1Sup3cXZ8zaXvKaLZan1Lebc1GF3fFDyfZqX2KSgrGf5u8bsUeMKPx",
  "key33": "4XLb7aivjDZ6Hi5spjjSPyoFkTJH6JRZrq6oUZTKMa8tiHkq1KwBHGUMrrMKNTZZckdbxt9r3qCnuinxApLq3yyQ",
  "key34": "4s3xK8H4Ajmvhdr85xKdC5CGNbkv82uCcLMFxtFZ1up2cfMNb75Gs1cKFSg8dbSLqXPt82JjNkyfZJCPz424u7he",
  "key35": "KC4eMpbcZ2WTy1uP33ntAk4dcqupoNLkfdxDchaa4x9Yd2qM7ZsMy9ur164ejRRTCXH6KmVQJz3MwvQm3pFS876",
  "key36": "5JVJKi3pQ7nFEqbvLvJD7Jp9tFAw4p5XkbJxgWbQ9ouB7zkXdFLHdUeQKzx6JquToWCTJx6eh4sJ7Muaa2mXbi9G"
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
