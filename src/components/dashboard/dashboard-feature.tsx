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
    "2PacSh3ueQPjYxKru6C3CyeDXRvPJEmbB56fMwXGRCdd5yBJKbvgooVE9r5vZb4kySLw2jqA1N6RUjwjPPQakBuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2FRT6jK5hhX41DaqGcb8yVG6TgqEozse6DagHS5kqZAefi3XzjiHYFNwvzdBCcHCthkmH5cjtdzwiWjpf4zAZz",
  "key1": "CMfyNWoaGkphzwQwXfiGFfsFsxaH1u4NMXTxfnTEzX7Y7fjkkk9JqBnmKsvvhkQBSb3CVxnSpiepr6jLkE8YuDC",
  "key2": "3txNq1du6k3FrVaPcLByr1RaLysVmZYuWSbNUgociujGRE3A1oUNnjMgmkNAJkDKEyUrKYXtmXegyUfpVb2NNboe",
  "key3": "5bW4vkUeQHJErcKEJbHDtxTXdP17oJTGUGui2ajjLFU1RcY6cYwh7eFu2LgxtukYGuCsZy11Wp2PbDU8TPF7iYjN",
  "key4": "3CFD1MLweSKu3JXeGjo3RmYgdqGssnH4XUYBE1iY2xXiJKY7M9KmEFGLCSWhNUDujxyTtrSwYc6cjNaMGvRmorC4",
  "key5": "5Sr2UasNtf9Ab5FZhhXqZcAVTKa5hcuhEeLpxm4mkxG6AWLuz3CuYLyRoPph3cbSGzvW1MDcsrM8QrJsfgUWrC7g",
  "key6": "5WSLRFyjabVmC2wndK7pP2a6vgY9zrZByWLHtaYx8G4tSzCX1JdetuX7c1FDbHDjC5JiNFMgym6iGaZtgS91RUE2",
  "key7": "2ZVtkevUiP6rtWq89CiYuGG3HEc17ZGe8pBv4nJrZK8SVPJ5KacATcYfYPFnwZyUMpkZNqptP1BEZ7UNm6o7uaMU",
  "key8": "4RTqpFZYx5dJtkTY7QiYEASZsetsjpKs7EZowEMqJSksYTYQtL1qZgcPau2SP4A6mypim11A28LdWAJ1bJFrQjf2",
  "key9": "5AFRyRPvmft68uQ8kUwWR5ZJ6hjT9ZQjk68u5fwbuSzzNurpxhDS8mYSx57cFGnXR78Fo3PdyRA3tLwMuozHP1x7",
  "key10": "4m8EZBfyXbWr74KfQ1hHTikuT8QHzRVRNAqQBfR9goWxSQXRyvKk55CnF3wwk7pSbsWNfohEci3YvmixN1dLcXRM",
  "key11": "MnZjbmUSCJCcL4nJ2FfunbW597xPPoiQZar51iHqHVJDNzc2MWmKf1AJZmxECsG7aNcsL4LokEN3tEwnygPfwR4",
  "key12": "5G5KCdsrkaA5fndrkTLDwf2ZenGiSv2krSkjp81QEsXjqHfNCid1FDWFkQCgaew6mQBVCoBCX8qfiivX5MXnNPQq",
  "key13": "2pJxVRJ3w8Qs8zAsE8M2WVE8U5QWvQ6x6cTKdaZDLVt8QhQz9QHav4VsP5HsxKV8Gev6kyizJLtnQkJj7iy2EEUW",
  "key14": "NfSHtjgjoZkwR7i9VGArY19jnQMmVJmrhzBG3izFSKza7VWJsEHCH1UmV4dBXu1rPY7MDRV3bUST4BKSbFPF58V",
  "key15": "3eDQ92e7feXTJgNAqLD6gWdgvN9GsAFyhViWwYyzKq1P69vfLDR9r2pkxb6fxxe3YiuhyYKGLfeZfzyw9EihrxnV",
  "key16": "52LcRNNTX2jv2dN2qx7iovzeRQtJ4LW5adeusvBwocX9zB3gKH1gQh5CFZTZcKVihXuBXcSFGoepBtnYvAuGHGL",
  "key17": "3UE4rqGfAzxai5gcQbrEEcqvC32CsrZaFHXGnYKnjvwLYrQyB8oS3CZuaQT12zpdotZ7oXZHARoouXDfRJaVwHAR",
  "key18": "4aAXayowpmS5puau8XTYhjaHoiYyVrNqXCipH9cdgKPtW5AouRhcH7GCStT5MFAwpqp7xnMbyrQ8cLMkhfRGdHVZ",
  "key19": "3mkjZpQty23YGSRVfpJUZU6sytBMkXaQ1Y9LPYLg48PMfkkNhHirqvB8TqqGKhiU3WdPDMy2nxs3rrxYqB2PmB7B",
  "key20": "5ANZnkXj9ajtxLah9Y7kFXLA1vW2Z4T2kEAHpyQm7DiuKmpgQGJ7S53Ddf4hpc5R12psAsi8UggDz7xmtxbVv8mo",
  "key21": "3brSBxdQguRgT7P7YHwrEJYZbx83VAgUfxpQoTPa1FyhLZQTaCnX6156iR22FrdPuW4WaHvVhnJQmmfwbgfDDy7q",
  "key22": "NqHAtT44iquUr1AjDKGQeax7LtkozKGkP9mMS9ACLiLYJXerSDRMKdETTajEjuwkXokbxVkALjHq3b83WF4bAdt",
  "key23": "4GYD8uXZmojv9XnuF9M3mPFVczcU9N9PSVsK8iY7ZPjZkojpV3hCSLhtspTYu7s18SfJSRz611TuSZBUuUQYLchw",
  "key24": "4UBFJBKS2Ye2uQ7mrNNQCoTLY5aUQRhs2WzJ4r8e99xxAPoF15gRRks51GEe57H3LQtMa2ukoDvfwZR3vp8U2io9",
  "key25": "23fJdSqAtyedBrBGueTz3dDU5WsdrkQp7XpWDt42pRKiEzc6Df9BohhTnGu9KMij1CSpeEiHMNMRECkyieuZZnMf",
  "key26": "Ld894dUNGi2dp42YFGK5VoJimgQay27fUqYN6P5NoHUzUgxK2Wax59KU9trAyLFk3gLpAL4oAmVrsRzFhUXdmqX"
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
