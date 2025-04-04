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
    "td2mm1EwXuC8HBa8dtdK7PNLvJ2DxJEoNUdm6pDgtTwBnVzgpo7S4yMZ82VPRWypUzJwPCN6Xhqf9dHfmGfX2DP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxe8ogBH86vr8sVhjH3fmvH7pm2yhNRVQMNddiBrSF5eUDbDmRhRvucQoqTFK5NMgs4VKSGVrZiooktSe7dhUpY",
  "key1": "3xbzrhvghDm92uwYzHVoXZ78mLCAXxnsjdfwDQwym4vWB6nf5Mpeqy9onUm3GmWAXehNnXvAEHKpKHK8BcnCWJVD",
  "key2": "34HjnqkHp3MaCieSkv1AZRdvvEQbnVGz2jtENGQvLqjbCxM1zh7ujob84nEguTBTCFk4cWnn5dj9wbBHnPjPU2SM",
  "key3": "2nH9qUw6JtNotPLpAZaT9Sca54DeFAqhXd71iDxKQ7iq3J1hDxRkN711nqRueaQ1KKB3owNpsaSNAgdJqYoda38r",
  "key4": "3obqfnKkkPRVEe9Cr39bDABnM3eMsCXHVzWfJL8sqy8Dch2zcFqxdqRnuEMK9sRAwfw2GzpC6i8qADrbthbKSrnD",
  "key5": "4vGqjaS1NsU1aJuNqAPCTAER1pXAUCR2dUGA5pf9paEDCPzi2VmGT5ktBBu962SLjnPU2S39oeSYCV55dtDNd1a8",
  "key6": "BZu2A7PFwTAfA7S5v1Srr7js7fb5uwmdq6XxwyNtzw7fqjqqbizoneoTohkVQV35CnQs1WxzvgCamLB5mMi6YrK",
  "key7": "2yTZANCeBfibjDgFvdajxGNTePJzbmLvMPYDBHprkRsww1wkFAAdsUMNotJFjskHyibUkMujthMwXMJptzAuNAeB",
  "key8": "4G8XkwjzXjTtaCfFqfv12U8t5MdSuvaRpX5Mbn6Ta1DX8NeJ5x59sHefGqBpy2mTm6NGNqMXV89i1fQHLRvnyF1N",
  "key9": "3on3DqEfNyeJEfPkyNj5kG76nhbwnKMy4wKxJdLbXDLkALcaL3P5YFZDR61PTLERBm7EgjCsbyPJNWmiQrjAr59p",
  "key10": "4KKo4sHboZ1Jojsk6tpwnuNPcQ85vXLEfPcjSGEADzLCoB26K5ZRoGZp3mqwzRtpJapuyuQM71DeA3guoZ45Kpmx",
  "key11": "4NNbvbuS3TbKtyVEqXv82rSauUkwfGSNqmMEsZ6wEbxSvLKAFDnd47CKwdw5MmXh1rZcu7xiECLCQM3VmypYrYXt",
  "key12": "A4RTgnTzh4dun7WX2tbSDt9XK6Ruc4Fvci3DfpXUgcDu5yrprnD1b5n9KK3wBy6ifgdvC4MKnj9Hf5K3e4mWAMX",
  "key13": "65wuHJQyxcjxRHzMuudxhEvJivc2YCEHmUgSsMMX3gLZukwjaXh3VvwC9QNkrJGpK3ANE9Exs2R1gBCgY6cN8QB2",
  "key14": "TCYWbD6cd4qaZfXhzvhUh6ErQ4xVb2ED7N4njuPtjmarqDT2cjEeUUmjBZW7fbRdanzgxfT6o4tSdeNfg5iZULr",
  "key15": "5HjFUWVWF6vWhh8tVF7VscrEk9DXDR22RDPiMkjmELz18dq4zveJjsiuK8ixmA1SGZtDUkxTc4R3LJ3p4NhBLwC6",
  "key16": "66sX8JCuf3hPHEFYHsy6mCaXfNud46XWqG7bzGa4joB66fCMZU8Ky6ukmaJjjwEUUAMQzoheJeRtK669qWn4yfmU",
  "key17": "5LM8ReNh4iR7NTXwFAK4HMJnsCxz4gpNimQcA6McEFkggR1yLStNt65C37gMkrodpaQWP5Xk2xNGE6C4fLCJ3KER",
  "key18": "5cyBQGyXemfir3eXwirVrhh7ewGikteZTNJsMLz9yE9MfTVD4MuraYZwUEu4RPpwursncCEMTtbHpqbYocC8Vabr",
  "key19": "3aZ6eApVdCtUWjAziS91PNpQS79HAJyYAj9ueGYwwTQcK1Qu3TuYur1Um2VayzBa9EN21J1MNMENsncgrdqv4zcw",
  "key20": "2Uy2z8BaqBkkWgxr8EG3hNzBzzzX3U4darW9MrX5nJqtNsuoyohi7QgQhxV9WVNPLiyexwBCTQuKCvAsWyTeFGmi",
  "key21": "48kJUeqUtgJwwYqiL1tNXmoQpVEV3FGRushTC76ZRoBiDM14Ttw5GoWongawzk3pDPRDfn3nUPxW2jAshFMhMY6b",
  "key22": "3z45tDzAHqHaonQomPF2t1uNe3eq9bU6Ycr8fCMjPRvKPoQAAY6q3LzJWZ4xn5cZafashEZJuQk7PC1D9noifPF5",
  "key23": "4nDMVeiR9WWDgULkLsaEjZqfXBM9yvXMjgmS7ZKB5stPjCrQij8zfxfdmK7Wz2r1eQtNqXmg1iNa3Cne3ob7EVc9",
  "key24": "39cf2xN2dvoqT32sZUbV6tjLN87Uh1F9j9MnwhS8CBqsU9JrKErqkjKuA5ci3H8H1jzapbHatJETwHM76YARa8mH",
  "key25": "VKe2w9Y1AQVkZTK3SZmAcnCcAG78NxEvmG2ESfGhb9G6J4nyJgBGts6gAbWV4MRe9Bm8r26ZStpuQFsukmiGf1m",
  "key26": "44GAjmEwkyL28tzohcPREk5sWwYdyk5gVxwxLtx87Foh3kku3LXUxDye9nw4WsQpXhW44WBZc287mM9d1acRLz1g",
  "key27": "GytPB3WDkHpAFv3LRif85ETfjPxfWeDQrhiFJKKjP2gZSgvsncMsV8CV494XtDDWJJndRdQYkB3kRT4QALFHcQg",
  "key28": "n7rFG2D9ErA6BTfEFb2LxiSsLdFHXjA21ZK8qBTMVozdr8RG8uDktBgxMjCz4nPhAja4DeciuWXFYDViPq9C2Y4",
  "key29": "59h6AxdvXoFECMRHajaKRS23xTHT3nmeUB6e46SCXcCE7ABGaZhmqvLdjb162gccZM587DjbcesXJGDvVi8Sj6td",
  "key30": "4SDrPG2nXADiKQbB6qPiVY9tWinSzDhMhivHaaXnoGQzhcdfcJ2WmwHE4nPDpRmktZXqVqXNkaF5mpSm899H6Gon",
  "key31": "3spaCrVyL4qtgspM1EArbNP2fnBVRjXoPwwfWr2xGG2Q5YCEu2gvpJM1FXuKHYcmVKFGYqXAaE4eSgdkWeGV25rk",
  "key32": "4qqx2H5mqCiUc4C19Z4QrB2da4UnRZv7zRftTyTEVngnF8Zph5moAPy7drBXvKM65ycopNf1rBgnfrw9aqdUmaxM"
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
