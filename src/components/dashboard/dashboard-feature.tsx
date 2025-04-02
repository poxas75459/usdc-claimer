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
    "4NcuiM2aWGVwDJkBnuLUCeYF4g1Qsz6Vtn8a6eEwoHLRbKTwhZFfhhKCM8KtycfGZVHQ8w869SohWSytUaJtJdn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sd5ZCW3Awiu5dSYSg8DJ4m2FcUf6YsjsFkLQmhQVgHYSXeqqCwoTt7YXUCxQiahM6ARtPPPQE7KC4KRigMcAMNM",
  "key1": "3EDCy74zhiqBarWKY3Xibrgz6dSMroBmHTtc1oQemz7HwTuJd7dLncGLwUWZp8snTGGdfFpUVgDVCyVLrS2TYLzE",
  "key2": "4pMSVV3uBNGDmXCwLd9ahTEitVxKGfDuJkwMVJChKEG5NHHB8oyZsKfyj7FdcAjDrPB39DQN1u5PVL2AHTjenbZj",
  "key3": "5TapKon2X2Upu9QY7oQZPF93cBhUbcm4aTaJwLsqqz8T6Ke1LpqfQrdJqQXxVDqzicBZSPMUfWtzKwe2RRVaiNsZ",
  "key4": "2jmHoEgzNmEyr1eXv6CUyvtxUXcTfkZ3EY9ATeJedvw8VuCBWKqMdT5umzGdAqrsYNmDaiLx5Cb9gmLTgGq2mSxP",
  "key5": "4PDqvr3bsU8r5YhQvxjNpyNR6ewLSpEdn8ygcNYGLhnL1Sh2DHwS34ERAq6MhPp2TwaZuejqjKSZiGjgSUm9R1f6",
  "key6": "2oXRwxspnmdmLzZ6VU8crncVjwNkv4P5AkM2h48Kmn2W8EXuxD7Sin74mG3GV4JCqJNz5J27JBpqWPAX5NySANY4",
  "key7": "5CtGPs8zEERXmxJ3XNSYNZhZT9sFmDe3QYcHrwGfHNrhBgSA5t1BDcpx1qAxpfEwcTGtAcVo12X3HhRMg81tnZTd",
  "key8": "3Ter8cmQtQVzc88UyQq8sN75fhv51ugpmghuJVceiSF1cYsbak4Q6SPVj8RGYTwsRJ5xME8uQiXq6Cc4EWpfCUz7",
  "key9": "sJmMYMQ4tvjJoAwJYWFxwQfztNfiTz7AAu98enVp6ja4Jo7FSNUAQRvS7hEyMEA2FNs4egwandi3YxeG2crNxDB",
  "key10": "2T8StGiXiiVb87Q6en84xSi2PrT6FciuWM3KGQvBYr9GNqRbEHdqt8r2dfmU11mqVdTo9hbqkw6V4D9Z6LKngiT6",
  "key11": "38LCBRanxtCUYeAFT5cVqjEJr5B9tdr838ddwYyWrgCTfthhGGN1KBvK4xqMCEzJZyVd7QF1YtDyrEfspQ6aowCR",
  "key12": "2fxmRsE4xPbHzZ6sFkQnRkhzY2r3e9W8ZoCJeC84mkvrqCcw6RXmZj8iXFcs7zyw88AzFEW5Mas6Xxp3K28DxmFk",
  "key13": "1deucEGH1UNqZGgmd2PDiVUNeKWvb7jMhTmDjMRyyw4nYeYAtxhduGsgqSYDZ2pD5vxyQHYAPgMyYMzzLttjw2u",
  "key14": "3mPbyZRgeAkRPvuzndMpLMseyhwZ26U5B4kTn9KQ6faT467T2S1fDhfYYJfwfDETEXyd5X2RTpxqnbqzvpShx6mK",
  "key15": "3eDejtHjyB32PNk4DthLgib9JF5dzDvEWdVyBiwiQxRnLJruf1uPWroUY4FBDkwB9QtNAfQnZ4KEnx4TE1FcnEwx",
  "key16": "32kRn1H4rMsbgWtHo8KgR8M6GQS5KrBDi7xjm7Z13vzuLsnqSx5jLvXfSCeAKmnWZBwxFMmZUeZbMnKSzCrP3mCm",
  "key17": "2A7uzpU3QWHjg1C8A9eBeXmQPSeNbVKtabxviP62sFLq42akvTZae4tiSzCj5SpjpBMs9gnGHRuwrTLFthm91uKj",
  "key18": "vApns3vsgfwcADJ9WpTbDCESFCBH5U1LsYvLU511jpn33YvcGDrX2q6gs5yHcw4ucTpLLE9sJXQYFPLxBPTqDTh",
  "key19": "bXsRWjLogLXiniysjR5oBWgh13HuPgbwc32CitFeTci7WPFPH4WCovi3SfTsBvuzFoy7qBXRoUVqecbMe8h8P4n",
  "key20": "63nsz7nTQ2oiZSP36y7F9G368mJXaJyummnx1CReztf1oaZxSBMApbJrQW8iBnD2td1kD7e8kTwB2W4VGpPyiBUm",
  "key21": "4hnC9XXnisEbmv4BcMHfKMvDLvkPEWk5LRvG48PM1HR4uwQ3giz4RYtAycNEceZRZKjb9EAsQgL5mHppccFdDyNJ",
  "key22": "5gUP8TaPjRqzxnMEEXmC8HT6wsYXQYbxm2qn2pEirQuA2c4c7dNpVQaiFc37wSq2WxxMGRDqf8fBDCnzZzvhhyK7",
  "key23": "51d9rgPuQPX9DozxfdmLuTrRATSJU6JteqF8QuojP4XrC19ipKbZDwJNbe9dkbSCFVJZJZ9PgRoEnQT1pwXeArLQ",
  "key24": "Pb9RKDdh8vdpPQ1GDhTaTjXthr2ZVSmhGgp6zfTP4zEkqrP4dw9V6gHkna4EKtFZXz85MN7Lr52TD7HSWb4oyue",
  "key25": "2EjKyyjevvd9VaMBgtiucP5HMVeXdX4vmfY2kyFadReSTS32zPFr66hDU14f8jFTQwfdtbGDPtAzbDyAh9zaBnpY",
  "key26": "5BJkWJEcbF4N8hQxGGRjXsj8hH2a6QHvzuvaX2LzwqArg9Cr6h8BDmHZ63miEEkdakaLHTaNyfwTLt2LmC9RJgUD",
  "key27": "2uyTwJJZNXrygtSGL5VdbyLZNTxgRvXigbk3ud4cMAWeEUz4H6Q7FEQDSxNWiiLisbactXgBvD49LFKSZDreykw",
  "key28": "3PfUVQhGHv8aGddV2aJKsRVDunRTBUNFfQsuhLhExQnFueHAe1hxGHo8w4uEK482ZmJtruoDVWhkWQEkmcA2DnMK",
  "key29": "csCUtpkoCQ4HY2dBZg9mjFDLirw7puRgJk3J9qKAag71SzoByj9nBtMzx4iz8jPmYkyP1Y9txwVsgUmqrUjxFEr",
  "key30": "Utrk9spa37fyuX88PbxDdbRQvMCo154hJtTBwoZYPwkuVGoYEcNuRydijFYREwvHgLoamicyxCcpDqrKoW8fVBG",
  "key31": "2ddDr6xbXNFBXk12Cq7ts2274Ge59P6AETQatKfZfD5LKqNWe55ZRQwoTFq4vAWWeNtkKmF4j756B6hu3zTFxrwQ",
  "key32": "ZMYnWpmrg6D9EfYoXTTcW4A8CQXTh4m7MazpXHxNEPUtoxkuJP4speDWwZWGjwWNBXYYm8HMRrZbyH6uCjcg6fQ",
  "key33": "cpkBGAFmBHUKSYqJHYvJdNQ4HxrSnhJ3ZEaydq2gYjNaL6DyRtPXU753fV67xm6RugJuMhLrNKkuJQpGpBFgv4E"
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
