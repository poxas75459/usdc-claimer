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
    "59efCWmzz6kVqZv6axSodQQnWdATLK78cJHYLJWU2EJXKYzUVjB6SfkXzDbiD5No72UCg2w68Vuza2eE2kwUWSGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVmt6pTEtWRYbgtGm8fqGmbjJw1AYc2cX6qCp9fSUFtJDMHKb4V4TWEADhBkvaPT3tPDmEb9J1tQVLpxAGTGMh",
  "key1": "2VoWDSR5LyzJJdpdg1bbGizwKZX2iExhr5TFP3LFouYDRztMidVmn7uGTrYhuJ3D7XXtZzYQN5pJjAH2BKLM8jhy",
  "key2": "31KjQJwCDngQfc56ZiLKVuTc9Ar7zL5i7etbFxBbpGd5emZpe35yHGD9VNyEfHkjfod3VDvcnWW4cKAhooT7yzVq",
  "key3": "2WWJUhcagagimfKNKb6GpRX2WKKoWRATm875HsF92YAxaqsMLihTUmEXMM4MCxWkxxLJ6pBZfptGYdLCzp4PiWwd",
  "key4": "4dWUnCqx3kPqG6aTVez9jSLJhuKtM5paqK5cTQrFqbaoMavCZ5Eby2wcny61NyC6LUYQAqfgTxGuzCmYzR4GFTDU",
  "key5": "cnuCRwWYBy7HhxcvmopnR3mHJyNJQQqQDUuZZVdtp9z2b2u2sFe7UQYYPcXtLiPgFFX5PXoTKscY1MF5DmxfdU3",
  "key6": "JWusAHmwLXQDKtLrjvyFpnX2BwheWvRg2BR8fhhVwHxbVytKdnjV7jwP9eVUSxZmurScj9Zesbkaqacn59btuCB",
  "key7": "439mXKV3C3Lhq1DrwwcqNatFRAcsJBZgb7qSqnXQ3hgTKwJFhLx1MYStji35bWL2vTpoKHGtA9z8hA79zJFzhuSf",
  "key8": "5ecktpgVCejAAHZEqCqG7cs8tq91XZhgmmnWudRkXYGmvhrncGM2JbryjqeJHvGiCwfW2KcoD2cPtqW7iPXm6Jkm",
  "key9": "2n9gYMBgdEjc1cTgmnR7un7NQVXZWxMS9i1x8Ad2yx2nTtvTVVT4pWH5wzUMR7bC59jSsJo9W8WjgMYYdo94Nfy3",
  "key10": "3YL44E25JwFGykfvYy9iLbGC7CR4mnrmbwcTt5UkHaqnCGVqZdEn5QCnV5gkXiwZzJC1yVJf1C8WeD7qWh6qr8rR",
  "key11": "2ptV3gGsHrxKJESPT9mcpcjnT4hBGN2Gg7Sd4QRG4Bpn3nqjMbmTY9PQwCzni7XzcTmg5NXnsuGVSkKNHT4NKgqX",
  "key12": "5v28HwWoFAWfjqLkrp4CMPXEX73MUo7DXrfrEKGhJsj7MuvmRDw8NUADLQFVuR4YNXFNkH1wAoxM4RciperpvPBH",
  "key13": "5sTZURoC2ev2jPmB6JyZwKaTqwcbhzVWuM8u9PgiimYzdB8PvMtjWhy4587yv5JHVj37xrNcwCsAxVGWn5StbQie",
  "key14": "3XwybnUvweudu5GaqnpPrumD1FsUvUom2MBUUzwsZXQiSsAMVSNe1X69T8CAzwexcUqdpg69LytpXKduGuoxkDLY",
  "key15": "4h4Bg3xiph7DRi1wvtg7VpkAiBNguXpjL2NmNtkuowf7Yy4nDZ55Fwbq551HBSPFFCuqMWAiqm7jrDq9QXTaxbhf",
  "key16": "55oGZo2png93829RrfMfqkEcpPdTLSKVxEPsXXZnXYi8VZvkbp635U9aCN9jt7nsVZKrv2q2zNtjjoTiiY34Dcc7",
  "key17": "3T3EQgdW8zZzu9gV6U3Wi693fJG2mWGTNzcBeYwBi2eGtQbTkaXLedV2DgWmdkME6fPLcp1DzkZFPp9pWQcXVb9",
  "key18": "KZHmVmn7CT7ib9Ca7AtBT4fueyiHsRWnGfsM9sY5kPXu7CLy26FnRHxG2wToi3JwA8Mh6nMDQ94iRZeT2msrpmz",
  "key19": "4hKeLDU5qZvRZaawtht1UuCS7AhZgkLnqEYAZtDjrEDLXgSGqJUmsumUGFi3ZduYNFExojFvCFQRhnFvZPQ28jHV",
  "key20": "2jYi34u9orp1Lm9MXuLpr5BRmfa6vzV7k52ZSQSmXX95nhQMgYiSLxxTr1jUWopBzyuH491AgZdNd9qMuoGLGNzj",
  "key21": "WNJYPCvLfdSYAiHUoj26o35xve9bYpavtSwqs6rMh3bNaix98ADcgV2VELus4YkEXT5GcNyPbtoxbMf14cGX7yh",
  "key22": "2tmVD3aWsQWCJ3h6az8uccrcqasYhKQAZJWSPPUGf1MmnRMDXRzPwzvG1WYQB6vg8xMpXNcbsoLKoYqrwiPBFbwT",
  "key23": "2ecNMPmRidy8skvbzqJFAsi89n8SvaSQspAemntZEoxEUokZbdd6BvsZNv6xkyuw4HGuwmHe7KXGeUsofvyWfAeY",
  "key24": "hG26zPXdGuezXkPjxGGPCDZfJWbKCAdVYoCxqcMji3dBfvjE19p9da4kF2gioXnhS3x5ftJh265WAJSkmKr9WDd",
  "key25": "518LmuFPrQxSjaaZr4c7T1EAqJg1Q2tgDb3L7Vr1dZUPQhj9bHiFpf3EJd1QkzLsmh4BKJFfcNNDpM9B3LJpDVJ1",
  "key26": "TeR6MhpWeuNBQXabZsqUJixNbGBAsHqc73NKL2zFYYvffei24H5WucGA7zFZ4MJNf62u2ZCYKfgXmVThQ4pCnJ9",
  "key27": "33ySd87fFXMNJtksXAdfbXRyEW3i88PSP6nk71QxFpUyk5vqAvn1eMQ1Db569VSomqVfADfd5kLWrXVYJ2uPpr1w",
  "key28": "KLkRbdbh9m4fYqPEKfjjCVDQCakp49mPPJHsP6g1RkLZrHBx3dnyt4UqwqGNczNGBHs5YBSzCtDUHaVwvJfKVtj",
  "key29": "3858CsKS7C8SFuuhunRdrYD6zwHcmKRswK5uBhezJU92NJpYjwd8SVKxrmvFCK4YDbjRzuDJ4nb5YT7KGnXgZxy1",
  "key30": "U4QfnoiFSXpnkim8DQDhHmTm9ih3vyYn2dz7pLd27AvjMqrz6T6mPwDaWEALuioS9SYh83WWJeUD6C5iUQSGCBs",
  "key31": "5cyu6gtbqty6Jie1R14Q7vEkne4vYex9NTsU9G8eWC2YGSmSc1UAB5vTfqZQbsLHfy5HzouSCB8YGk7VYjJ9Ji53",
  "key32": "2MBEFV9GrhfJFniUPdtWUy7XhgJwYnAh2Ym3EnSm7gCx9nWpGSgmTaByLRPay9nfTwHCnqAfBiaX3mgsHbuN44uo",
  "key33": "3GJPK6mFt7qJig8e9s2yKQyx13uGCY9A46fVHfxvJn73VL3hCh5g3jrhuLqonbgJCAvXa5k5mLCwcZkTAuhYMj2E"
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
