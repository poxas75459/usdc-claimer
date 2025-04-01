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
    "4bLzpLWdRsxgs82GijwBD64mWi6AotRcoxeK3VRfBiua4oRDvVLHuLzq3iVhQECNB6oSSucShc5XZDDZtiB8CxFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xiGHtwAfFcD1hHW34eXtSGDmNjb4J4Jdgb5QLr9AVpuhL7ai5hhZf7kfo725YCF2M9eAcdxuaZo84XqZMawkhAW",
  "key1": "3zZmDKZqh8HGx1mEKLvJnfsqaPgCPsfDCsMw3GqyrvWDZCpMVk6rh4kikdktTpAXd5MhS2dVBPiGrQNZypp9AVkN",
  "key2": "2dbrjyJXJYFbh2wYPJJAkhPAU8jdiKLGZr1QYssBx9BZxTQEy2vGvh21YyjWkeJjYEvua96FCLpQrrr4yy4ydYyN",
  "key3": "cdsUoL5BJoAGHU25F8XuUdDmaBB7bYBk2vBjWYVChVuraDtNSuAv5FKiiVL6vWX32bJ4R2oFruXG8m548wVFgLQ",
  "key4": "2YgJXvae4fyWBtDetvqyz8MGwV7bJaAbTPpCirv1fhAHm8WfjzxdrUihTFjXims1EHTkA4RLuwFdkbAfKb1ADdna",
  "key5": "7Vp2MzsdtYwkhnrLSYtAmjkfkDZkAykTsiZ4trma71NhHkEwLsdbK5XjcDq2TUvzTbAdycnZzUknp8VrNnySBeZ",
  "key6": "4zKkwBNDiCE9o4EUr3qNKt9KVDMQQGQRtfVbFLhxdwmVf4VfSyZ5KJzb3BeybZ8c84UcZo5aXgXNuHkAt626S7tu",
  "key7": "5zXnbUFwvNV3FEzc63sYXkH6pPEycZranMcJ6udkaQiNzmxbR2aqN5h1aufbWXWaqBaGJJUzGvffjpVBW6g79v2N",
  "key8": "4tcJmKXADJkctrP5qaMFwVYQvryGCbsbNC9xiwYKJyiun8YhA7kB4yLvJb9ZDBVcUsuThtrq5NQzBDVodJsc3des",
  "key9": "5FwggLa8rnHsMCzLcmNVmfHW3iypKDoyHb111f4RkRxzrfnTKVM7243b7o3rNwHwJf87QrdmrWugc2xcxyx7LFKU",
  "key10": "4Cgn6ZBwSL3Kb51FPvyUtdLJKvQP5TY3xH8FnoC5wAPEtvzdehewdDTvFRAQSh7i6TcfreLRPNNgauCC7dg2MC7n",
  "key11": "4YSvb2L7zPLcujb9m45Aw5vFPEGLkNXmZAMM9PfL1NxVCCqwcvZetdqDkptrzuwit9LFbeGsSEUsJ1pLK8sGpgX8",
  "key12": "3mAdQGw2tK5JaGUwGsdJXkBqwfbPT3p2H4RHsKLRyx4fNg6TWDv9d9kfyLmx7EWo6DhYohwvEsKGn8HvMAz1TkG4",
  "key13": "qem5MpcjqU2yRWzCquUigV4Gwqvmv4jTgCdmqypfZiQvbAc9aFu11mdpdk4ud2DmjaqA7rn1hZYN2pB3rDabtjc",
  "key14": "3gHprVLBqwmUg32jZdP6UBThazDkpvfG6AKuNApC1etuhmQHTCYHaREhb99q78gE2A6kpW7E4k15AxsbPa2zZJTr",
  "key15": "3Ub2YSYrt2c7DR2qeDKpdPuPQPurWrXbKGbbK5innTxwUAgdBTcsHyeDCvpwYM763t4dAegYXVYshjqwdp4aGtN4",
  "key16": "5cr6jPERvDEZvoMx2Mq84zTmpVTnhfwrzJsxoXFHF3D6j8trcHrd8jsHW7cJYZ52kfzDPvCNTw3GdGHwPSFFSFDF",
  "key17": "TdzW6fGD7ky3siXeiRSKGLFQsqtvfKjSUMYnrgFUmeY92TZM3S9TgLpRxT2XeBxpyF1F5eztNncaKymdqjCSTwn",
  "key18": "4XRmxT4Vsx4seVXusJbu43kSBKUFN42gZSMDpHvPihAWzZPbC8HrfCNAvkmXNbowazjYn1k9Vo6Fwa3rCvC9VpXY",
  "key19": "5J9ykNpbo5yhZ3BX23NXBrpfgo1LUM7HC6oKCxVHwYxhuannk5M3VLTiiwUxDWgwjYeBB6j6MJ3cKT2fBBu7JRmr",
  "key20": "ubzFxoDVAargb6SET7uCMSbhfQcQjybRs1rAMPXfbFAVnb5rdBx2uSCV9eC9rinRdyN9v5jdFWgRBFnFV5oY9L3",
  "key21": "3TjgvE5wqVkAthZvnGLp8TTRLAavdfDBFMJvcRicQ6R5iJLWQeoHg4SjKcNbMoBGSQGsGPbYEWZ3xDsNm1i5jdTn",
  "key22": "42KSDadCo9Jf2VVjmC4tfhwPWESvbSbtdUQeZtt6DGiq3RvNQGfQrZnLeZQyLfymG7xqJF6hogzcNgBg31YqYYVK",
  "key23": "2ZEr5crPheQRwtHvNa69htAFgcWcaS22g7TGSKUwAghVJsCaM3oZ9GmEnSeeowjFgEa2SK5kyWcRa9SZnWiM6SUi",
  "key24": "3H8frHQJ6h4qJx4sNxSzirrdQB68gmudMJvM5DFBjwymF3vQ7wzL8E7Lsqj5MaGxdEsKCPAZU7pxgiqq1QuwKp9k",
  "key25": "cKnkYicLV7uB6NZH1KzmjY9rBEu66cTnGrXswK7rJYfwUkTSFjh49KhAJja1fB64jHYhmWcTqhTL2E3KkhFd2oN"
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
