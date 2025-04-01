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
    "28wzSBgoHH7dpKzZ2fbhi6gqMjfdkSiQWawWaVYKCcbPHKG7ci4HjsMum2QfhoE7XaULLRPrW4y5zcAkTm5Lt4G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArqmSruussWjKTvKoWvyxEet5Uf5ywPovPpwFffR8wH4xJHPnPN3F2vk9SHTbHzXg938GmNeoysL2QjWZrAyFry",
  "key1": "9RKgg1FFKLJ7CVGfywhB3AWMFdQczN66PuJ8vWnt5miYWg8p94TaJquxb3wMxJn94RqFe4gCc3NFneXrhF16Urt",
  "key2": "5R35412KSHq4PVzizMjuqNYjeuWiDBFSVFbBjXXmd2cEkvVWfFyncRwgMu25Xarx9EVFhjHp17bY8uGeB7p8a3ab",
  "key3": "5R4PWWxNNH25dsYKBNcYitMwwmJtk4ouXXULEWcCHjEfvKGNXqpiZWt51vXTrLifSV44kM3y327oxqvPtpgRguvA",
  "key4": "2FBFYYj3SifupV8vbgRqJH69da1CvGz3mR3U9MvrtCCWJwtv26rSmhyngGB1aPnkCoKQok2WSAnxUphjXtzxstd8",
  "key5": "GTVsip4F1nKNR2781QqHvoQLUhjZY4H2v6tukfa7MRLMCPyFpZFWX8zyJ3z9qs7G9a2JVJUn427A47h7iARk4rn",
  "key6": "3BFk8pcsSAS5zkdbM8FxKqdKnVYNaF5y8dA9Srfpy9GcGKVFT8Qb3xmrhK177XH6wgCmnWdZ2A9PXbW3XXne4dxH",
  "key7": "v98JM3W9etzRT4fpLAA6KPYFMMSSCNRJHxfJrofdMYcVmJB4728riqqf1oSnc1vXMYDARtyKrR2wHY2bXNrQx3Q",
  "key8": "3Q1xPgy89jG7hg82jgY63iANEyw9c31vdkt7wURPXKVuVMrdQsuauqnmrRb6RQAe1bqF62KWah9s6gbPz1jPPomt",
  "key9": "4PyuAq42ifXdh2s7DgUKkZjE8PPNsfh7pgc89qhfPx4DTdZGxLrX9MqMYCDGZiFYgKzkgwiQERGctZwkF7dUn7Uo",
  "key10": "rrwNVVc9BSx3SrFMGQnuV5R7r7nAG4TVDnYuEvnaxGRaHvywexb14ESzRVhBt8rT1ewuMdeAGVRvHngAW1oHCLU",
  "key11": "2uryehq5kwLKoy9WKoRuBRf2YjUX55GieaAnHFFzqRwcunTf3Hd83aEWcxuVXan2ETCSdV12phSPnzTeXFb4mYbg",
  "key12": "5xd92n37Zy6AZJfp8wrCvV9edUS7CwxTL8YysSZTNzwVmL3Wd8yWUiPGHwT9YbC31DGTF81NLLDLpgXqAjLV9CE3",
  "key13": "5QZXyt3wtKQBw5MfgKQiVTWaL25ATaiXuDT5BaNJwdyWUop9F1YGAYCWiWup3wM71sUZp5PqfcVVqHUg75uxFAxX",
  "key14": "2ULFBqmKv7LxWZbPQtoeM4EVtLktRD1gG9EW8QQPboe3Z1ouWy74bUHR1mKp1frqC8kAg2SNzuQwpW6gbb2CLqMM",
  "key15": "52Tyf7UK2GjDKvZYznWWJD3Hq2zZRhm3z8r6cTJWtyQ2EkZEk1SNG7NvRZkpu58WBNKuL2HR2opgqgiLmrGCZA87",
  "key16": "5yWvytiT1q4cY8pnE6GjzYAeMd3QD3VXV4NghNVx3FZF8b8DkmcSg6vY9tsy1TGF6UsDFubK4sgGDrqmRd9uuwvN",
  "key17": "2YjAq4ssXXNF4xv8S2dJuEuY5iyjHXxDXo8Ewrk2qW7YGcQq9sMRw9h5TAoDMjw1wkXB7Sd1YVUTr3TsHVtnHTVY",
  "key18": "4ZHcMg7Tf19LUqgo9ioUa7dcpASBANLr2KZW8x3wyunq8dvQU68EfNYxa5114XGeLKQGKTVnru8jLM8cP27J2oFD",
  "key19": "4AFgwGfCe4tqciRDpiUJgkCx4ekETsY1YvrQ6g6Jbo42Lbch2YTb6APAgEDGAPnMSrrfBbbB5N1Pm3BtwWxEnfUr",
  "key20": "s238i1QknGY4a2N9tdHp2TLe6HhEkY6T1mo5iLJUkbziUGUsWqyGfmLDPhwKzQJp5NsPMv8xwPsuhjcxTe2q9cp",
  "key21": "4tqTMAgMBcMvomyjgFcNmSDQH2U7FAgx8pPgMBVYVYTb9mERSgBn5U6xFaAYbMwZeZLM1Nr8KScmJ1GE5Bggsrkp",
  "key22": "rePuha6AEdEFBcQeFDhFMkKnxBhBGosMk7TFanssjnPVqCeWS9L2nssjZb8Eho15vYzLxEcMEGfi6xLBacngNW7",
  "key23": "2BCKfdRbXjHA6Y7KpJKrxjLV7bDwuKH12GUmTqDGJQTN2wCeRiPn6oPjFMwiaf2K8kB61ee1s63EDgWTYto6eUZi",
  "key24": "29V9qdMz47UUbqVnK6ydt4r1ok6xKBdxEdjmWvEM8aKQ7Ez3FfQoN4nox47GYfNJUWUXhM7SwYiLkYPjp4jAtSpG"
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
