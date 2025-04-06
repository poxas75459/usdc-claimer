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
    "4RMXmTjohVSFsPtknetLEpp2fF4gKNdd26VLoBBbC1FAhrdsrmizgSi3fAy2RYzxa69Z3CodijWS9SUTTgbdSGb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLMVc2Tv3B1mcCNPKbww1vZ3NRmaZQLNm7TvNYLgNDEDarkw7bEjVxanWywhX9DRg7eJir7Xya5keSgGSTudH9H",
  "key1": "2rKyz3WUpdb8UVbUvpRV6B7Bgq6bxbVfsdcsZeC6ARh5AHrwzm2LNq8FZf4uQP5o7XVdYAX7iPxv9eUyxZ4z3rup",
  "key2": "24rRuMyJQosQghxgLkG65wCLifpM25i9VZRtSXZQ9VohfBDRRfvGZYTaouWXGv4VTt2cgCegmLv8dRsDyduWLzTu",
  "key3": "3fpYgjs3ypf6NR7MVKN3RhpPbktgYdYBNtLGNdjuao7FM9uVezaLsUQzqACEoHkrBLnVDvjptqQUKu37aabvDmEH",
  "key4": "2nyAPQkbPEEWVXWVL5JKDURhWqFR4MstXxbCw3jb5Ggk3K9HE1GXx7sREJqbnYKuaW98CLoEBzUTZLDczQEeXehQ",
  "key5": "3sfTSrP8egpUhyUCmguUemj8UHWEe4bvGz1XneWnNGViL8JJf1ZMmdyd8dpgLGQVa5bKTPs8JYVpas6wn3QV26H7",
  "key6": "RR6Nx15CvWnM4YNyAhMrbJ2rRwe3vbyHXHtyQPYT2n4JSYGxp84SFAJLX5qDK3r6WUdXnENAVZnytQJw2JaUZ5P",
  "key7": "4VBkoMvts87ckX6DnyYCfdEdz6XJiP1gunzr4j1KUCHmr6pQXfDd7VPCxFTCpMrrXYUoLPLjddnUW3fwK3mZS5gH",
  "key8": "y574UPjgdYjWLEv6yt9g5UKLyqTHwLFchQTQc2ET45viJZQGPCW4LBgXbVqYNwwt3CV1uBtyByXwuw2YzcmcA45",
  "key9": "5n2X8uvCSsQAoJf1ci4YUwhKWKdxrsnAVK8zkm6FMsMspEuYYv3uwMwYvE1LBqsYkk3HmMwnpVSA2GE2EzF6oVCb",
  "key10": "4aNpTnKteGB6v4ZeqaJQ65ACJLW1iRXKK3t4zT1HdFQaF1TFwaMvHomgxEArE5ngm7zY8PKVFgpPp6sgg5MbqSPp",
  "key11": "5kgrG59CPLQXrbvGiG2SoXkfgzuPtmZqsHzxCsGpWbK5d3jwDsB4AgJvogjKoC8KhPKLvRwi5VyKr4wwh6a8GaR8",
  "key12": "2H3f91f3kc1Nk2PhQ37NZqNy62dMsZwHqCeL1AJhPGuhmTPVrGWBxm3PMgYSGx14HC6C3cW6rMXAjsZbWBQz8rw9",
  "key13": "5gE7E98rmiay4328yjjkcCg3d1tAWYmLaeX47WzjDZGHgLHBnPaDtuknXT24X2ytocKpjnXnaseqMK8s2nxGrgBd",
  "key14": "4zDvd3aX5DsmQ5nt5UbFYDzTpSRRgU6vf9xoqVjeizMA1iZaQs1wogFk9AtFeTvDQUpHHCNMHBUjPKMKVR6MiCdo",
  "key15": "4dDsA7oiXEN9Mg9QPYvuEyEYGCKxukecbnh9DrSYYC285mpx14Lfrpznd1KZHFaDQT91JGAXMxXm8a9VAnDS15QN",
  "key16": "3SMf2zbpstXK55qzbu6Yb1WcVPcHfae7jcu3U3BN1tcZ9WVrisJbR5cQW5TMZikRnR4Zu6v3gprX5Av4DXXgiAJJ",
  "key17": "wRoBphTspnCXgfNj3NndWzaxCh35iaYGtMqvrK8WkegNEJtaqnTVYd5s3xmY4igGpmLdo54hWEtHVDb7HenB7kX",
  "key18": "2TmrtKAHBMVX6dCJKbM3umrtYm8p9LgeN6q1TGinfuBFHzhsuhX92oWNx7cyJ5RVR5XMakoGGPwvbrJKqAGYiKgt",
  "key19": "By2zbvKoEgckUCUgXUyQgWWfD6MUoP6Jds8H9RDBoTmrymyfkWqR3o8pSqeVecU2z1r1LuNSi15wBgi6zJnNiZZ",
  "key20": "3TqYSMyr6KTHWGDM5vRiwBPR2q3in779GhUK7dg1vBkuq1hALxxyVUqjWZNwsgv8n6m5tLUpcxDQQrV6e3M1G41N",
  "key21": "NDh9jNtfAnT77hLAz9JtpZN23vngEWuEN7g8saWBfJZdEwkeeVQnXCFE13bBCxKYUjk4mU792pnEcsMxrzW1hpW",
  "key22": "2E1rAQ3c886E92bJyTbK8PvFNmTqLMuUuhVsXBabQhPKKpcDjGsGfGZnGGu5Nb3v3BaZbZURF55jMCKtVnnNWd3F",
  "key23": "5UWdhVQkeKXb5KYLTfSgKT14BpzSir3zBhYwF4WtvKvrGqxaoWxnAVy9Ui1ZGEX1BtHjYotjtftJFBtdsDmTKUUg",
  "key24": "5TrttLWY3vQjFz5nJEZu97Q1d5SCbfcPujJFC6KF3367ANsDd81HK8idkSN9UMmHVqoTjgZGXBvZYrNqmeR6KYJn",
  "key25": "22SMmMSW3a2PtK6r3QtF4k71PTPA4ufJ2sH5gDNpy9D5nz4TW6ShTP4dPizxkeGJWqnd5uEAeSGBVBpXi5wPvvEB",
  "key26": "4ZWbpc9zxwiJzqtUF9dTsU3kfkjZZvaN2ukgWvumFJ43Cw4kumKAbNGtwvqL5zjtL7HUhrWgx9RaNSosiwQuTweV"
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
