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
    "61vYQU2zoezVJhBQQzYd6AyiFqDCDAhaWgHCZvyYzpGEZpKGbVMESt2Q7hyabu8dJDRJH9WjGgTj9tfkohaYGDfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcVxdh1TJ4Qm7HHzGB9zZ5GsQ5Fa2cHNVCYC81SujDFeR5y8sJ8yGUZ9mMufrEWQ3V3HSKXcLWu4XvxtnmDryw5",
  "key1": "4FmSY7ad2cUXw8kTZe1mVDM2gc9gNhjSYzd4eFsqzUngzunh9rz22x3Nk6GfmGQNgKWh5Cg9SLnUkC1NPzTK81kP",
  "key2": "6QTTZUkcreaoV9t9pTiT1sjpTAFHb3fnaT2doQNKNqN6iEUbbBLspSx6iip69HBjLPH4F2yavJCgWgrBmZ16o6T",
  "key3": "5rS1xB597ADQK67a66jmnyzfNtAcXeJuLRb5vWkvsh2pdTqofhJWJLymBpUws25XpdQQ81A8s8241qz9xziPKwJw",
  "key4": "5TiyrcGiUMgYHiBvu4LcrvfESBkJndWyk6bfAiRmHNWQnxjWS44V1YmJPbDDqkhYMEoksXDJsqJjcvTNbhVqmNWM",
  "key5": "3AknrwzkZYGtPDzgvfzokZmqZU7bRdxJS9vEGY4vUu5WhV6BMyNtM71ydadWEVERdigHWnNwuAxjJyQiAQJcmtcM",
  "key6": "2rMYmqTgmQSc6QqZoDpz6cbAeLH4tQxXVJywxg6toegYxJfHTo7oxkJwCJptXe6D1s3LzYwKzgi6dh5keGFbdpyF",
  "key7": "5cdMJ33i8cirqvH9XH6aV1yoE7rBWmAffV3BJXTx8uBTZxh8jyibvB5WZSoMtDZqWFSBneCptyVvXoxd8kqXGHPe",
  "key8": "2We5jvPkfKxEPei3JjR8tEa8BQo9t91VNTWPTm9e9EFSZ2vP3rdfSad8Ky8ksoVrZNHy9K86TsqySTNjxmbj4drp",
  "key9": "3icTDDJdY6kKbCBXft5krRfvsPP2NCKsVBoDyUfVhGHmum4uBC3wKjJcZ9hWpgshd1JSW5qtgrat9yitQidf7DG8",
  "key10": "2SSC15cfJZJyxgrE7UooNeAvEuxEFvhZLVyc5699hzxpnGckXTmEUevNKgGHvNs8kwUAHzfEoCziTvPwX5d2BkXU",
  "key11": "31EK1tk4isxgE1eNxSpYSRPjxp31Jw3EpriSULo8evHkP4AoArtSHg115LwhiLZPhuDfEnn8dou8jwwrzQuPM7yL",
  "key12": "5Fcmh8j9wRBzxgtXf2eZemGPCvUTkjWoU8K1wBLP8QvDWn8FFeqrvRtjcWZni2LpF7mJXqd7ueL7jVaiH6fzgyop",
  "key13": "4yfvL43q2Wjtcbs6grr8xwEcXRjoJovhQgK6WQnHsscNyVcE1VV1nhPPL28LohQtnk1XYs45iVgeyyyv8btHdK9D",
  "key14": "zyC4wQTGFTKbPV8tQYj3bKLRNuSHYvDwcwCLC9azQh13eQhVMkpzPiKi8WxSS28NGhNEste1ooE7GH3TmxuZwxL",
  "key15": "3MPPDcq45VFVfEEoWR5qwYfVxW81NomwJTw3pcHCP3biPLVpVt4HCN2eXxvsp1V4vFik778NkMPvTCQCggD5eTDA",
  "key16": "3Mvwd7FvWDH4KfEH11VesZcKMGYPTTZVtdtPiDJCg4jMbRdXCYGvaG7TSuB2XpNTz9MdzTv4oZPErhsquorCBxX3",
  "key17": "3p7B1w36NraoScYr2t1GVAo7yHjtYYUmTeFBtwiHAdG9rqTfh1TwzKwYCwdHZ1GRSK47qEdfgUHBhBdWfDcrZBEC",
  "key18": "5H3sCevNjkAtFPywne3p4QsX7HXJqW27bS1ELjyNy52qN5uF2dqcdVdKC2mjZSi1P4nkFNPuK17peiGVKHpPpNpQ",
  "key19": "5Ty6NcuGJPSJ9ahbtw9sY5Kb4DmwedHjHSJShSdtLE5QJkn8zhKonyj3hWPUaccLt388hb2tdHiN7pb9TBuoRNnH",
  "key20": "cEzm3Q2SN6vWtT97mDdCcEXBKpCQVYHqVtWzVxsT9fwvDmGVU3h8T8EcbXGddzYGhKpv2eiupeJ8bNbGALu7kZF",
  "key21": "5Yzj6tvYAXYhx4G5oMYtmy7JpPRcY4Fa8r1LMsGJRwwoAj5UoAG4m2ESzLmH81gLyJfDSwkuFG7Erw7nQV8Z6zDJ",
  "key22": "4w7TVNBFnWatZkmd5wYVPrathak9CNo3G7N36j8sew6qfSwrZ3BSGzdcc4z5aJWbqXDvFzZRNUhT4nQWvoeeyCwi",
  "key23": "Gffn8npLGLcQfZbtLsKWh3gsvftXexXKsLtcj7L9ix911UxfGc744pZirMGLogi4gutvBnaHb2VPtrirRMtRVhf",
  "key24": "5AcK4nunE8n5mz7QfiUEkENZ1xyEXD4YViSTpThbDGg1XzVNB7D2M3uT98CtVpSaGgc9C6h38BCVfct6ceC7voUy",
  "key25": "5zqbWAA4iS3RQUV67bkhHYVg7WCvPY2KmzGAdF7FArYHmc36z5oc7Je3MvcGkCaKySjq2zXZi9FRxS68wPr2VN4"
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
