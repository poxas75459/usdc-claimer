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
    "3nQbQqMvtrwoupH3mk8EEPTYxJaCfbiZR8e7WmBs7X7oru7GrKNnro3hPKtxUq6SEW76gGJWza3R3uKXxTwLeyyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fL544none3JaCUkBSBFN5qLU96QDPm1sLVqfCctbnwTSztGPQpsfwyGzoKL8TuczGtZ1vXrPUmDb2zDAoSoSiav",
  "key1": "51faYNo7q2GLWSqMHw2Lu2CJX44VVDWAxFasgG3FJ6ekBknrnJZ6E8ezU1R3qjzVE8CZcsLXwX1JW9DmJXQ2b79T",
  "key2": "3vNrAmkeEipJ1QrH9xTVpCN2rff2hrHg5Bhn8DFYQncybU9WTXfHuCZqsSvvV8UYpYBg5MPMh2XS53wipNyCNtTu",
  "key3": "14kMWUEgBGPGJBXHBrShZFaxBTgYZnHEqC7pVF4DRHajxozSwAUVVEKQ5ibgTAQY1Vj5D57q5Ytf81yhzjHi9Z9",
  "key4": "5LuWk4aVMqVij1FM4F4Tozi83vZR4vWbAfczHFyiQz2Y5n2XceYrV1eK4zHRZkut9pWuVsAGUwXie9GmSRucNkAq",
  "key5": "3kUSsopohzNvUBthPMpMhwtEagtoRh3hZMjTMPfuHNbdfBFfQq89VVqkQ9WCMsrKTtxe6e2LN4SzMVA2s5yGogwq",
  "key6": "wKavX2569zGqY1CoMfo1k8nB7sgocZjxNy3RycR5cMjvBLR5ZCxgHVTTo4wKijUNhy9LtwHQs1rEp5i482gdYd9",
  "key7": "5fxdzzQGnfi2BL4zGfhGBJTHNQRkVde7RW1Q7X82SkpcAw4qNK6NxDSX8zAi71CmeG1KYCAhf2jdzwsw81KyfKKp",
  "key8": "zWTJWcdrwNMYrczmHwaVpwmWFNC8NKfRCXsDwKsX53brjSKSauPvmFn7jrZVu6F7dQpDT1No7ktKgoEmq7EiiTo",
  "key9": "2e547T8cxjGWaQn9DZrtp8VAeisZHR1ZkVFFa18QnTURA4XqByCGMwnxpZ73bbAFRdWdK4WEC2kMLu5w2bACPFo1",
  "key10": "4XBZ3R8FsGDyZvy88GBiCfR4s2x9uZbmWtQU3GSaaMb28GAwciKknbkFJNRectYd66mKynS4eLkHqA3PbXMXTuR9",
  "key11": "4EHX6TtUDFBf6wEn2cZGaKhHPxS5HCVASWQurHaQRkzqW9wghMDLWt6cHj6xtRNq5QAfgoVtiQosMVZVMLMTe1kQ",
  "key12": "5biDPLSfciaosbUYqGTyHsNh9fAYDoFW71Xq2y8oFviD64H9oKnf1x4wdkSbrKS3hKaf4D4JDmVQaMj2B7ZsC7G",
  "key13": "5xVaxDLiaxL1f98xNQWguPWpdSPpVQpQ1GZ44TwpDyYRD2bD3ESZC7xE5CkQuisUNcBqnMVrubGMneDknxxEqtSA",
  "key14": "5GtjqbY7F5xxwrMmewA7qhPn8F5QwNcUeWMYLhp2kgTkA9mctENsqUhMRgPwFojmNwMe6y61Wa7FGZL1v3S8b5yD",
  "key15": "wWSodCTaouf7ym5nyjBPFGECSbCiBd45REn587V15AFjNzMgR4BeufEZvMrprhx9w7SRQWpdMAiyQUxn4Rg1nc9",
  "key16": "5F3G76CeZpXJAV5yJNjG4C38xFmgagR16eSGovb9QtePpcqSF28C6HJXPEhKdd64SzoXtDUiyyVkewJF97P5Yv21",
  "key17": "4oWXrEGiTMTZnPLNw6D7bc6nUnscMVM1kTSH6nrsuVqN6SJkWKdH6foayNEa4qyVS8N6bG2nkXsPrPQWXJfQarMk",
  "key18": "2MJedFmxv1wet1DzK7D7F3vNPM5BjdxRFT88PyztdiPTAoYPLdV3AVVEBvQXuN7kKxGEMNffixrXC9c55MgKRWas",
  "key19": "5hyonLpj9QEz5ks99LLENmKFQEf3N97NDZW6NBJevDKxVtu8CrmQAJwzEqh1N57t6QRxsEsCi6DxDhr1uVoJmjGG",
  "key20": "3ePk7b4F2h9a7aVRLAhrBHXgpT4gYZuzKmRghrqVFk4UwAGvxrwrzsw1vnzFD6dLA3ivrbw2wLKiz9cLwXPHDs2R",
  "key21": "4Hc9S3MasGoqrjASkEj8jqWjfvQab7hjuuk5NYygcdH92dtsudfqUHY3QoN5VZGjvbUaPH2JnrdqXoMpfzGkowXE",
  "key22": "3gQkcbYL3XJX6p1azgZonYzaWDswZtpNFUHNAP3efjzjKMcU4g1qaXG4wZNK6Bqzh6FsjkT9dV8ZwVKj32jCxXw9",
  "key23": "3NdVgKnAssAUrgTnyQnx2EgTvNCEiPEAx4fNM2ruJTkYcGJYGcPvomg927HeEpZFRD6ijAEzHvRmmkh4df8gaP1L",
  "key24": "5A8FPa3r1CDGmDjsE8GwL5tTDTczffqGZ6PD1yRTYgojHoQNc15oRyZhe8N5P9tXBTcZiqGShRthVgQTD9WxfP1Z",
  "key25": "3XBUd2pLr1xhodRDVcaQyBeuZbzNYy9ixv44Uq5mUH8rRzRJMRwjRNQe75vVcEB5RQHruD6T2X3G5ay3i8C6ejGD",
  "key26": "4ekPMuiVMfLaw4y7g1AGtPuY4JdH4ziPh5pTB6aJPbCg5FkDxo9GyFYuebTUUKm1ZidRD9pXyMC6STfGNteJ5wSB",
  "key27": "ZS3WQLhtEC81beChASd7vuf3uFfqRkpbLpYUFy9R7wjQx26oemvwmArBgLNuDQGaaQZD85Y3N15Qrabjg22qvFF"
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
