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
    "3Vuqn4FDLZRMwX9UTssKksAky2YU595FPg2BE77Ubh245b3mkaqKSVtwDLBdUWvKkuRFKMWgLo8nvHYXK9sMdkvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b7R4VqVUPuLZwbXsQtYX9ypmVAfga1b2TGdH3XgNUpFUXRXGq37M4fGAv5jZqMawER8nNtmc4TttcYHxct9uAyY",
  "key1": "59se19kSXL9XRK1wx1qycAVj396zMoq2dUaYumY7PowhqUJZdA36X43gdjQEHv1EfUeYgA95ps5HedBsYTVbESCn",
  "key2": "5gE1VxA8yGDCCLraM3bb14nFrCThoNiVU4QSp3QMHoCUoTwcokJwMX2wi49QbWoLnNmWyCWqFmjKkhDxLFmxeemx",
  "key3": "RM5oR9PeanvxTKhGD6WpSqjecZrourcrvdnPQKkeWFnTQLXzfAZQo1Bpkv89AkPx5A7P4oprjGvpe8pFDDN1pAc",
  "key4": "4vVgZA3Gwb3jG7wLHY16kgzAUaxV6A8HLtd89VYmsXV6cM9dVrxKUN5BveQSELDAe8iSznCFG4FzF1q96RPMWYn1",
  "key5": "4GUki7AzqLLbL6SERk1LqT8pyp4kErRmKvuHw43XF2ehnBH6Eqj86L8QBHMWEft5D8NDM5wiab9egULYnc8HpQ8D",
  "key6": "2CRigFmsA9xgCEjJgwwTHiPNiXSxL9m27ryBguJSRNdMn14uasrEz45v3mkwSpVQM2BqqTgaf2qNWZs8reM6hvC9",
  "key7": "4PqNJkaL4cuDet1VKyWY9rryNGJ2brDX9zBknycg1kzCzzi82RmYdnzNY65EC1X3i6Jyz4H7LdAY6B8YotAhRA3c",
  "key8": "65CBLXE56wYcy51K9zyPs2w9cN4Brfo8aXdpvGpUAwEarynCigdH7c3Cw7ABCW6WMX8RUQS4gXJmkJymYyS4Juav",
  "key9": "2vAsm1L5sbwEa1mWXtutaZzNVd5BjvR5LTodzJCeED2FJim4922Vjhv43gT6rTYUX6R9LoR5WXXSLTYc7uLfurzN",
  "key10": "4WXQeBaLTJo8LuL8uiN8GPVCPn4effCJaZD4MpxZgW2ZxHMxckeTSX8vzLTNATP7YPSo4JMh3t28b67soRDkYDdB",
  "key11": "3GrDE9xP7bAW7db7aN3w4AxVpkssMJfVUpSnTw81tpsdfQQcQiDdr3ZxFYyhtasvXKxjAXtWsNfGorvAwpnBFJ6a",
  "key12": "3U1dJQcmFjgULJPQ1uecgFwEtpFvkDEczDmHEHmZPNQsHup6pFrGL6bnsTBbGtiHFSQrFjNEaMAvoaQhZwr7cz5t",
  "key13": "5racsV7bo7WVNKa2KgWKCUsQYxf35aL9nbA2iUoAzpHh8bHbatBNFhuWiEkhoLNUo8hzCQ7H56xzDYqDamtpdMjs",
  "key14": "4VpidoSLAuFgrgmHB7Z9TBDTPDBwANBf9Wt4uxyyAdduk4gYdvcg2TzA8rRPQmafQZKLPbyEfrVp7u3DEVLn1yoG",
  "key15": "Fnwhqj6EkX7jKfCwbiekhtDmPaBov5L4hJR1w5Wxa3DEDeaCYE2XZ89ExNDuASNa22vupju5eSUfazz19vUDkgc",
  "key16": "E8Diyx5rgkXr5NpCq8At1nmSCUfELGTG9ZUXBykwUCHq9gBUkKhnUHwAgYvE3YwjYxDjTc55Rs7k4KnRQTzpit6",
  "key17": "2st55ARhCzhGf7L3VLyv957i9qGBdh3PcXErpeE3vkn1EyoumbZZkx474aTHYVxKFssNS1JW4o8wf1mEczW7BKZP",
  "key18": "4yNCkBJ9NMJLEQVxHDcV4zdi4mLYnAwpFwkAoR3S8ubkwYRaHAQeTDypASY9ayyQ1ur4JjjUCZDZS3gfWykLXXAQ",
  "key19": "3kSjT2wwS7QC1sN5n6JfY6F5kuKarNz5T5Z9WfUMDV92mZGZ6xXtyEFtGag4uFaBwdbceBi78y36MqQTnwsD2fVR",
  "key20": "p4QWerDgtw5Zj1ceDd8QX9VyTnE9AksvHYqKePHTJZXnkozgBZwN84FVd8hqN6treJd1RYa3CFXXfNgLcRKkyR1",
  "key21": "25jFhjRzrMueyxdqFjvpBVaqhDgTHq5b6dWxbAskBRJCPr1eNNmknqYTNXEgq8vBeUx1AJ7kqYWkyaKXREDiMvdc",
  "key22": "2S2TZPmsazsHgcRCGDTvRWp2zfrdNAxNo8YcPU9yAXBmGEkiqZ9qoua2B5YvWfNdwj3iafAT8jAJdGGffPYtZq5B",
  "key23": "2WPHnvJudwhTpzuxu4uF25s6PqNvfRSLFJEsYZRrLJCJmxanRVyKwBPRio4KYbdc8i4S4vNRz3R3iCT1nMrbzxLc",
  "key24": "LQe5Mbg4F4FTM1ijZ4yxkDAeb43oqZATB8WETw7tk6sSvxWjPsMKiUpWbn59WL18CrVBCfWdsbkpzR4Rr9KEPHL",
  "key25": "3f8ZGLBY4bZy9ZwFVEYPcZUMBZTUKgnH3GVe2kE1VNpQPARgwSUjbspEqhvT38GZ2hkZQNh5CJtxH5GBPphxy7Vx",
  "key26": "nkDcTZddos3xT9SbLb6j1xy4A8LMYYuGPVHZEyLSwtHxvjvektCoRdbkQyMrvxAbhSAkCDnhksNjtxjftxCU7Yb",
  "key27": "3U6bHgkchC1cMenufCAHQGBKKQ1id99QbVrZQ2MjscyvWBnesn1PLR87YVkbg5WQEdCPGbah91wkweU1M3jt4WeW",
  "key28": "4jW413nosUydA9wnvJeYJTnFnQe4MrAuxnR5iE8MoaYMGB1pbascZBQjfxR1DW73WKtkWjo6xifakzGHfGufUm6Q",
  "key29": "2aE56bKModTsewwmW3KwcqRATSso45XinzskeGuxacFLHoNKfQvry3GVYd3LHKSawX4GZUEhK3camsxHnJNY2bqF",
  "key30": "2P72mWeNUazMHTjuurcGhsjQt9DoTerstXSzUwTNLgLandefRBcUHCxWZXQEgeAdPwJvrum5iHX7bUPNQhAi4JGi",
  "key31": "5MkpHbCPFqz1MoaRuiCqWAobxARLTM4rZu9aEZpGMHSTkMcoqzN5u96feKPfiNaSiunEPVPqrfDVxUvfmEgrXiSG",
  "key32": "P8bvkPHFsHPGnkssCRxfa5UyN8pYP6cvAJ8pk8ErH9SaqQHmUeKjziGB9GzrgBT94KQZmnoXGNR7bW4KGvrxRF2",
  "key33": "3UWmiv5zFVG2CAAQK54NoYi4a96QWFBWenWtrcTXzzBehyi4cSDyB4kyWDxhuAQGmHVsvVxUwS2dYJnu2cG3Vv8K",
  "key34": "43RQumDM7zWsNeeFNzpRnGBTJUJ7iuFsaak9qVhou7KDJ1vUXmLUWnoBb26mYRzJkt5MTmCDiKg9crQ9vU9VNh7B",
  "key35": "fwkmBEPN1ac2hQJBRafhWj4e1y84mzDrqaky3dPxQjmkcPadGhehRJr2iPRM4XvDxtcmVfNSoai5NzS4tvPmuoT",
  "key36": "3axuyS2hYP1WG3YBrvLvdGD64UhHQf4sQyrmTDLhCYGVkbJtgd3bYq16yx3dqhuzzXSnPwUEDUpJj3anQGYby3p7",
  "key37": "66Pq3mPVc7rwmnnHHJ2ba9uARARLQkPdB2KN1QDxxvkzysd81iLp3nnrqychcad7fhpTq5QE3sVjqxWR8NN5trnv"
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
