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
    "2gjbPnCoz9UAKHUYfneYtqQ5WX41kyDfEDLB9AEwbEu6dybhgFDUXofHSuxxEbzxh6QCq3D68c2mDc351kGaVFu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxgHS2ZZgmiJbDCup2fwNFYAk3ZbcFsDbeNGXLssiR4az1W4BgPZVyaYbPAwvPDhEhDciqW2quZL8BpdYLQzYu4",
  "key1": "5pKncVxmU7R2ucayWTMKqrTFptMBP6HKM9quhvWEYciE6Q6b6q3WAmwDTStCgdARPH8UVRLz6jJ459JFqcC29RLT",
  "key2": "4hG51nbN8CTjmog6RJMboCHaSGm8EBLRd6tdM9mwxJrb3kDiqeFuQ3QZiXAcNQD8WfXe6tr7sAQtPTx67iF6R443",
  "key3": "2WVweMY3yi66BLDQ8cmwHqcKXLRVEZWEG6XgjEtYtn86XYVcnXNwRSE1TGjSLnR9KzkTtXXmPanmxXroEyrgCk7D",
  "key4": "35Lk7s1JxWjJnygcsBNgP6EPTwcz2ry4oJ84eJQfKDadZGiWcyxCDVbKbdDuuXampQHohfgBHzMFuprFFhk1iNpz",
  "key5": "5eohdwyYJ7jdew9hmKTiUydzxHq6i2xCHAW9M64KqTypvUiD7uGv7F9cPQjAu3V1w93SHSGHG2zwEymSoR4kUQs7",
  "key6": "4YSoExC1Q5H3b6apvMQWXf1My9MxUAEw8m1kFicdspBrghPse8fBJH9RLSRn2TJcxysxSF2JbavYL3Kjv9Hxs55R",
  "key7": "2APsp5pqZmkEWwbfCTxPSiLvDvpzfhBNLssoicv6XTv8AYq5aB1U4EWdyiPzraSsvVQKCSfoYeYA9oZn56YdLUzU",
  "key8": "4tc6Ys1W3DcXwn441nhApeJrFj97rEe6gens9rybi299p9birkRUoZuginGRRiM6bUAqpFPGhepEuxBTfWkx58B8",
  "key9": "PHD7nj6v9vcupwd4ihjnLYC9Lq8VPoMN3ci5ysPgx4pZh6RH6cirAnhsCRk6s1L8BwszqHUzdT8N7UMWayzmP8j",
  "key10": "2qJmew6azzgJhESkczywpN7A5PPvesEbRhKpjDTZfyUX7kKvJdE4K4u2H4qhVsjQwpLCYN65DHr41knR7utFjv4Z",
  "key11": "ZbN3s2jJfMKjrz5SoMdSM35axEH4qbdnQpeSxAu6JXzhzuUBuHDcr37p7BBcUkyiv8EE3fvdkCoUYB7CzvhkW6f",
  "key12": "3iN8j15eXh18oMk8wSvocu23gbAap9Ck4T4NSC1m8jfj2FS9aUyWYsmy6pgMSyhjMR5793k1J5R7mrXcZtcbzZk8",
  "key13": "vKmXsaYa6VfFiecHswMm1z1HfUWep1Mf64rGnPizNPnp5bYgCpzQ24T6P9JSDYJqsBQjCP7z7UrAhmtBK4J6Hbw",
  "key14": "2kgcoRBn3NAnkSDNrFk1TNaki7JfyLsAEjU9FFXd2QUNjM47eUG3d2QqZZyfg6Wp7kLYsooXQXMQamJttz7iPeT5",
  "key15": "38H11mx58WnAgmsj2Wsb3DStNxgsZaT2y5LEyv6RmjGQzou9qDBbzMcnnxU1xLKfD1kAdJ7ANeE3BAyYiEdcHwz9",
  "key16": "4aJWe7mqSXmSSoat5mPvLZtxnz6N9pH9rJU5vNtjEyaN45hZ1emiUWqWtU62WwmEfCEB2crRD9YENZ8m2K3nCedW",
  "key17": "4i53rqjwB7pqzn3rka1cbjEPVmaHGU3cb4vCntiTZsQNvb5o21Vg9CEpdKSSMBtL92ttG3b7pJMKiPemRiGBoadj",
  "key18": "5swRbznjHBCEtm4tSU2YL7vMFtBkw8kTV1VKDGkEghEHtkJ3Tu2B1DUKCdPfACKtKBRnTL1qo2mixhGtx7rswip8",
  "key19": "4V3cAxNZhCiNsScCGZ9PWY95p4fXyYbPgPZsuqNZ7kixQkzWinjMKo6Lvm7V1186UfcKnsj9qYoD3isctpz52KeR",
  "key20": "24MvNuynhoDwYiDLbNFiVdWJxJWt4ucJQKsAfy3cjHSnbHdxbu6MngDNhMYyrHJRbViiFDrs56p8T9H8kynDwpUT",
  "key21": "2QYYUoDDi7C8MRbxfMqxtLvSsj6oJButLmvS96oXNJEuamBsaie6Qp4XHoFwSnxUpV2ov8mWhYbghWQruJwN1T9v",
  "key22": "2nTUWE8RSf4LiX6ApxfcUv7T1tAft4odKxFvAu6LomQ3YXd88USXP3dWMKoshESaMPhNv5sK9GJ9UwWmhTeXXqPa",
  "key23": "5jJwry6vAdcVgxTqR8hbKwYoqnDLNCWVcA28neRR3psD2CZxmym1XxQwujA4HyMh2vDjZdri1WtBCwdp8uK5Q8TC",
  "key24": "Epd5wcV24yiKhMa5ivKvuCVobea8wSiw6FmfmT95f23EYyvuKyxMRfUTPABqCAEdKwvGVmkp9SLp784Dm4CAr5F",
  "key25": "5tv11bnSKMcFTM5Ho6YMZhbuGA6RZ8hkmPAY3Zx8eDhMVnmQAnfzFxyg7Y2y6Noc3vLeGnv4sjiioArDbiVNbdW6",
  "key26": "2dCJA1DzBw1PvsH9Lk6aSWiPx49QQ72jxRto6YqJESv4Dh78WcP1sx5g6APLDpsfi7H75wKWkL2kYpcswqdeedkR",
  "key27": "2PZnt4XddAxpXxjFV7xYsPn1uD6MCZGJuMxGdvrdVLGfNXgQa31C28NzPnW1muEDa9RRbCfWXbkXqggFuehJ1bmR",
  "key28": "5CrHmDm5ncytrEEFkF41aaZsJ7HXALivrJVqWjSAPiiQUyLwvyCLmpiy4HHs8m58Hzor5BkhLHQJR2o25882VJm2",
  "key29": "8XSYR6JfRnoMmEYrR2xwxjzbNd881o5CNePp3gkX8XqHNKWfMZm7oW5345e235jQYqux5fKNdsJBohKqhTGhZ1h",
  "key30": "smtKJKYEXbECaWceJhMFAkUrg1LZ4NzaZAGEnzFznd2DEhNLyJHCLEsvaqxj8QZ69Z9kuiG33Ap2yA3QVgyvfAn",
  "key31": "2ZXTtmdTiqn8nV23NKwsdzsRHAfSMFxVo3HSFELSdhtmMx4XdTLhjELp9BYkrDu1C9SWJ9bKUvjRsTDRt8m4TfB4",
  "key32": "5yTUnsppZnCe7fNLvoRisbuWWih3q6wQFyjvDgu3u7E9KaQYj4vcejiW16PMsLJWHnmobivPpHFiTgE5Sy8Y3RrM",
  "key33": "dHwczTD9oMHWHnQvf3UUTK4DfjjzKF1eUyqPahbHorfUiwYUadr6JA2FZPjo4cFf4wPpHTM2j6h43RSK79bwrBr",
  "key34": "2NwefenuAgSH551E3gMXxqZ4FnS3tNgXFwNfnikbWnjLJGu7y5Ux4pFVfSxgGWknvVqMwb2raZ3CorBN4ibDoaBb",
  "key35": "54aTi5u564fpYkqqGXdiWAPbTEj2d8ZQdPZeygw9rjqvSLnXhMYzkC5ckFTpMTzenKj4nkeUgGs9W2YB9E4q8Ccv",
  "key36": "3AfuyabqkYYC1W5H7H1akUmsoJ7jvH4pYrWXZQNXTcXayAKk2sB6ztmLR1WqZgiuoSiY2CNgkdMhjUiZNEStDGT9",
  "key37": "2z7Gaj4HzsTbUbav3sNXQivYzHVNJL645fjs7TCivvK2yfrX4SLex9sCr1RGahrgQTjpxaMdU2idYkAf2xeoVCab",
  "key38": "3wqcMQ5ThieCm7erjpxRDNjE7ZQ8FcxvqhJjxofo9NxUxWfELUsv52uKcEbfMBz7VYMzaGph2YFSeuTJvhKpx92d",
  "key39": "2GaSs8KwhVnEkiHsStqS8NA2Q6F7SccL4FGxtvgpwNwJaGWjEFuLMabyT2mD5iW5tjDwUQrU57X2srAT8co3RRRb",
  "key40": "5tnW1SPjLY3bewXjQkCU4smYc8pxwg52z1TMDHwzuHNHGsoupwadLf9ptCJrEQvKWYJbXSvneW9GmbCLRbFBTXnq"
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
