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
    "3Z9jMZ4A1Gh9G3dHPHY5DpFaa2YrJTaRa49KKYyrSQBY59oEarJv9VMYgrU2Hm9MBPzjX8e3K5MpW6teymrpJTmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAT2gVdarnZVRivK9VwVm5a3JpCp4E8NEj7KixMsHwb7VeJcZLKfFTMQNN1J9xZyhWFif5zcbKKK8Nqx88fQofP",
  "key1": "wV5FqX6RVJjvMbHcsESWs3v9k6A56j5oo7A1rm3hLg4i6VZCkH5A2dcdmFyH7vCgS3bQM5oscCY2BTqS9MND7H6",
  "key2": "3H3WK6aDjmCyXLACtV4mmxqrmPxqigR9vtiEYHzWHaJ51zAzSm8Wm7vhQYVnW15g9fW6Ybpamzx2GmWhhLJqAsZX",
  "key3": "4T5E6oJ5AfGV1qfQGZqvoSppg6rwYzh8qZtqN1QreuqV9jEtng9Z7u5KD18PamrZg1RJM6cF62nVBm3deaFF3KWg",
  "key4": "4ip7AUnWChTZ5dJx6ynfsVcv6nrFX7WZWtdg3yemRQiKjHfcGqmQzwZNa2G3gUUgQ2rW56qsDzax5PpMmKTkPxZ9",
  "key5": "5NaKrmUkycL2vnQmZzgL2a2Gi5B8AYscQTkS8FHsaSRvr8ot4dpgdmUz1idihxVff1xsKTSfRCgGnMuaZMDw4xmK",
  "key6": "2hH7WuUDZQkHUUpXkzQHJWLP8wwVG3xToW1t7b5c9ihnuaFwRwCTTVYs6eAG6xCtJrSjFgPQU2NaKsG2sYSqUGNt",
  "key7": "4EuzoAcccQLuTpF4Kn5592HDgft3EVrSrokdD9WXPvoXA6MdNCN3GZCChbUaBoBGLK5F9MqTw9ZpMKgtCCZoDFvX",
  "key8": "65N3ySR6rs7PsY5dXHAW3bKCzfFisAi2R8KQUo8E8i8wfkdSAPvWfamR2ZUo46zahSHzREKQDnqa7hFxgAr5fiuc",
  "key9": "Hhm7WP3cYUK6mQS4yqgHMGxY5bV216vnbe4FLRKSaKM6Qxvy6VNkFvFrNgfr8FciYnkx4XZDydVByNmqrMnCbRA",
  "key10": "wYPm3VdGgW2H8DXkn61pnXX4k3pEr7bpHYRtxxLuuS8QLEcfAhUpLooqXzZ9qAtigydFyn88bhXSCSTzyFy9VRN",
  "key11": "4SswwUQ3PYgn1G9N5b3TNNcvX98CkR7Ev3sZB8DPU3CA3CSsuJ1wgUpFrJGTuMMqiuby4Ju3WomPE4N2WkEkofcr",
  "key12": "27Mv4ARdYPdcaoNyAfFwpXuihn3UBgKAzw3oigXCmSJrpycv1M6b7zsPwPUjiD8eCrhyyM88jXw8P2NfcBsAPpBb",
  "key13": "2zmAJFhXaZ659gwU2hquPqWR3Q5Lad1SSb13Ln5RerCCgLdrS8R3iX3Mp12tTxkkbTwM4sbT31W9kvrbkNdoWAsK",
  "key14": "5DomdJYTWqjkYc1EsfkpgTgXAB5ZARPHmWa6EMfghWmRsmPWJSqvEfmR6xbqghJ3m7rCb1AtkMu7hoXRE1HsLQaZ",
  "key15": "BHebzu4dqMjqg1gic4NA2aNPbdNAp6WYswrMQxpkwy8pSXsMd2EZs2w72uVnc5L4yTPfWHx1qDHADp4mGQQuCKJ",
  "key16": "41i5PEAH94qS6NdKUfXEZd5DsS18CM9m1dUPAfQHvRG15kZhvrFA2Dd7iUpHPfxcG2maEYDvZ6H75k7XNZAz61m",
  "key17": "2GHaqVkefZrci57og6FF5mRELdhk72X8PpBCC5Mh4ZpJv8XF8NsoUGtmUeiPpFDWUxqPUrFfWMAoyhKEM71JH7Dd",
  "key18": "456BmABZ2hGTZehf3LDwBhgji8FkPAALmG1RP1r2f9xABx5eLedupprohkUxU2LeU8jqPGv2oZeTenpNHfBDX12B",
  "key19": "2RqMeEToeayWnv5JUfSZv5KHJRwnK8qVxRGozxaMjA5NQ7w3rwf4wGka5LmV77N8XvpCrFAi97HYrLdoE6itQtqA",
  "key20": "4ErZo5rCbXvZR58VLR3xJByEeRK78Fk1VfmsZs6xkEJafUwTQaJMZnQVowyDVv5DWVJKER2om3QpY4xfVVHDbn9o",
  "key21": "3Ez8QRARmMcN5T96Qi95yE36ajZWyg7ZmhbNrzJA8RLVQHchoQtFfXP4SQWic414uTtNT3RQPGPFEkqfxXHiNvVW",
  "key22": "PBSAskP6ttV2p1wBrkAD9ehoFodc291YYtFdEBWL7PcCEKKNihhP2yKf2kbvnCD1thBU5z2DyBHJ9AaZjRgdrix",
  "key23": "5w3PPyFqzhHWu4amXeKzoYLnkGdLmYengSHinhh4ABpsDwvtNevjJRPPkngVaaV62T5Bg2q58f4ERarujDThfidG",
  "key24": "4u4LsqQxBjYrYKVvX5trhV8jVfDePiQ221WJhqR9EEW94C9AiHNvQphywjgxWjFhHMMDwpqx9ueSqdGaqGUAenat",
  "key25": "8tLUmNAVHxM3aDA9rVzcdZGCH891BkTYPMghtccSn3rfHCgos3fqcrNhCMG26t37WoxyLx2uMisvGFpfyuf8V9x"
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
