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
    "41EFED1apyMszHx4zpnVE3xwKUynau5L1XcsuUUMosXtu2jC42PyCDf3HVq4dnepCV1U5jNaZoXigby9mzP6Jzy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFDdmNwAmbZKuD6chRNXGvzvc7Vokg7rrSuq9DQ1P58R4DnxwGmheSCjDhigChpc9HDwjputWeycunGkvj7F3xi",
  "key1": "3iLZvv2t27ra2rebEJa9VPWo8b7fxtFH46G5uZ7Zi3rtSdDrawwQvaG4soZmJxBPM9ZSirK5n7bqWxL2TAjHKbjX",
  "key2": "4v4JrVq1zMr7HdiabXWuK6BVKvNHdkimdmjwGwsvRkPSm6fhWeft7CB9LrL5DCjrfEAjtQK6r15XVMmwM6ztx6D8",
  "key3": "4RiCiQBYeptJePPxvpFdVwgsw5Z2uoPfN7PUkUiaj4raTvZS73byP5VTWSXnSYAakU5J43dpwrCkEm4H9v5Cv3a7",
  "key4": "2h1Ry8HqWqUYRCbS7Fq53mdyuirmxH74WSraF4nybCiXza6pNRu9M8Tskx1N1ykEhkJjexYsj7cVz8jdi8dH5nqX",
  "key5": "2d3rynu73Mntm5T4y8V4Q9njtAPWerbnYeEL5nJkm9cA8KvsJh72iBD2fiKXLGqc4pN3nW52JUBsQUMmP83MoJe6",
  "key6": "5kxN5DzYw9hPC7BEmffabqMhF5hiyndRKvFQZJM59k2T7P7w2afCQ6D9uV9xLNDzvYXYf9y3m2nRZCMtp1Art2o7",
  "key7": "2mCFafP5fgmiNwwDZU7TB9ZUUB41dk7YtkXWgKqdZycnwovFLVmQPXLdeHpPd63XLCvnXi1ntFJdGWviug72VU1z",
  "key8": "nW6wvKgkGnsKc4NCmksuEHUHsb9D1TxpjoRHGt3VQ5WFdKxfVktY87yLQnrKog543TBukupB2mkuH7ChADkEgXL",
  "key9": "3US627eEVCR4VKFSfLFwtsrDKmtS1VdHgF4ZKqtRUZ8P5dYx1MdKnDEYAYRJLJ6dFj9VRJsW1WkkC7SPNqpDmqQa",
  "key10": "5rYSbciWWtZ61c36DGRqjmSWPZZMcCoMLzSLYgxvhiDUMBb2Q5rA751onndfhCsdWm3kq2uPYPT6U9wHfRKPnQuW",
  "key11": "5RhnF7MRd7MFzVoybTQdKdVKwHCcfCBNXmD1Qcr1qdqm7Hc6g1XZ3dZaXfDuDBQLBMBkppWZJL6DYPGEKi8sFozt",
  "key12": "4GHgn5WMtVd7MfRZDpu8g7rSDVsSSBEXXy57N1oNLLr32QTfaTo3z3cexi5eLVK67yH3CpzgpdhT6fFzubzpR9uk",
  "key13": "5xx3dHcEpSTcd5QkDtCsnEhiRPTjzR46DsHS4uCLYhKQQUf2bLhHz9AREFviskAHyUxoSGX8AqKGmHG4UGnQQbaA",
  "key14": "4SdUxciP5Ms9aUdib8hgwdrTCC9prENsuzDwm1tX9f2rAk5xB1h9d71xgwwGnbBKFxZGdbGVu3c2MNkU51ZgMX7Z",
  "key15": "5dLWz1kBkt2ELV57HDVEjazTkVrAL4SjyaUqqgCqzhxWzXnMGYVYdqcHMLW9bdZPgsBj9E3MkvJ8rZtkqmuRYrER",
  "key16": "8MPpthAc2A8sPGAPJ8GA6Ns6jQQhLbimsaDRZNdeqY7puBfnPeoj3r2bSDBxa59GzKbUkL6PjzADnp53SRQpeZU",
  "key17": "5D3QHA3bwyu2mtWYZgzJRvDzgs4wy48GUvEAMFPuNCZXPNjHJZZQiUy2zDUaohZEfrJNo3QJdb7SUZbMjspj36gq",
  "key18": "4EUz1Wm5pa7ZvqmarvgPCBi6EHFAD8GXJ8L2qk9xER7vACC1HnRcJHjr5yBYF5UN97ZE6YwhEXdCJaAN5NhApht3",
  "key19": "NzzjRdZHn18QEHLKLW4C1P4nfMK4fpvZB31XqBi6jXNVDfbmQX7cnPUkC5zpxAckCJw7naW9ZSuFutrH56pVdkP",
  "key20": "HWWzJgYtxxUk9gw67xatFeRrpmrXokKCfCLcGLMJSLMSV1ug8sthsLsUg511TdAqCkJVPHCHVsjQTeaoZeBXF2o",
  "key21": "3qp7aSfGkd7vJnursmu6mz4txvEijJBnC5RH9XnhWzVaUadGabJVwrxWzQ2WQHaUJfKrASvgaXnRnxcdiCvUADv9",
  "key22": "45mhc331z4dCRS2LGAWJL9HCZejqp8bgou2rUaZGDZsAgy4NnFrDPm4bG2DTXDeewjGwAENxfEAHVDW4EqVF5xUb",
  "key23": "5hc9hBMWTfdDdyrfEm4r6s69WNJXntpGXXuckyAxvtYprGQDZS1ujRT4efcSbwMYqLMiJFB1xdV979KcPsHoucVo",
  "key24": "3U5pbE4vaUGq7iu2dcfWiLugNmKm6FGu6ZL8JXc7iL2KvECzSxiJ5VpN3VZoFbhRqpNDAX74aojxSvT6rVa5TFTQ",
  "key25": "PrS5nRSvDYpkb5oRLrAfKMMZ3ajfZC41si4dKvqzUj5GfCXi5RP8xFhNtpYvSbW7caCTXCKgEPXJM4CydYPeBie"
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
