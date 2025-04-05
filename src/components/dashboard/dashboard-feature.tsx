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
    "5cVc4AofLFh79FNPKdc5Jgio62zXZpc2GPejAtwzCdqtEXwcb48Xnn5VrttCeRLAuFC3fsXN8qpmp2kWAoXpshxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23h9vT8ECAA3c5bStFWo4svSj98Xpv4LbTY6EABuU8vvtppzGmVk2FHeHVwTnvNz11SuYNDXuvqWVprseFgDZgKM",
  "key1": "5Amj9oobtCH9fLdQrFRHRiXwYu6c2gXoaKbwkU2MEnxAQrgme4QprC96r3cY9c8fGhsuKkzFMy6ArmvYmyxAGTzz",
  "key2": "63XEu8B2qaiWdTGUEb4cRkQswvPFpCGzKVRxQKFV2QJyh3bRV7kPEmA7JRAqity4xmJF2vb21pRYdJTgUzkoiRt8",
  "key3": "5tZFRvmYK4gR8WnMy276CLfs3eCBMb4qGsQCTT8zHKcpjTqVmfgEqbshvds4QNHPLMwgXmZpet6z72M77KUWhakh",
  "key4": "Npafdhh2CX3AjRSm1s86ZPRgBm2KKMWH2Bef7tze9WxnqFibmiN4P63ThNqShQkkE4jvBqqChfpBXu6LrWLTJkM",
  "key5": "48LEcQVJ9uTpiGriXMd5MMDHqPxcbwf6Vf1Y6hiafLRsNQx573x6KeaKi8afYqctUxK89eE6R9xcSfhGguMAAS7U",
  "key6": "4vr7c4uJE4fNL9whZwqjq2sgCueHpURqBVas4DBB89MCkBsRZP77MzweDcCxNYgqRaoWYGcDvVHnntkdZxegpTn7",
  "key7": "UVNuwrdHdcgZpb1bnVJxn2pk44vL6fuoUFWHE9qUipBC5cWjUpFnWcUKCaac2fXaD48yvWxchxeQjRcAk6ZTgmq",
  "key8": "2qY16HgcrewzBKMC1ZzVwT99P2EYbYiSMANXrGXpqBbwG25Jyd4qesgM1bBsFWMQDKeQYnE7gLimCRukdNwjYQSB",
  "key9": "55H7ARvKSbhuevAaBNPpqv8ZYvmPkRAmM7JkyGALP7ckVQZvUtcRBBi52gKpjsx9RH7AoyfRdK59wo7bwDnRTyRY",
  "key10": "5xyLDRnskNxEGywfM3TdpBBEJBZ2do8GZZX88KqepXaPnmqspLpsuGvPr7ZvNzw5RWpNJABbiSdhBBCeDRpurSWj",
  "key11": "2Fy2HfPPuj8dTkhUgyZbQHQKrwrHDgBcM47w7ykJ3XdhRESPDh6yjD526LQCrarYeizsRLEvZFs9n7UGBEZhcfoc",
  "key12": "61uFx5xSZwTxEKCSHinLBPVZUzbBC3v1cD4rmMJBUuLM7Dt4yDxWueng8JUTtW78jxQ7WVrAGJnLRXiRRnrX6CCT",
  "key13": "5ugYq99uBLCNJd3kFYUSpwWKr2pQNeAfhkd5LfSwU3mXhm4MzL1X46pyoBWymXLot8rX3nJ8BqYRjJ8GURY2AzH2",
  "key14": "3T2Es7cvQypCxC4dWaEi3dGZgf34aU9QyFeVEnxFPn4PZ6pGo7akreMz7oTKAz5HA2UYS8Q5JBExGJzYR78Je9N9",
  "key15": "4oeuPC3Z9n1eQhtNNsZ1nniy4z5fEQ4f2jCSTpyMy6fs4eBW2ogktrt1kdJyneNeAASoRREk8wLiPXwXJBawpzSj",
  "key16": "5f3DgKoX5muH1MR1TRUn7gAsh3eYiekgcuEzgZEvxXntu43opAnrZna6AGDFQ5M6ncbNjT8ZwDMeBVgxzaN9PWhj",
  "key17": "v7G8yCDSGKjNdjRiG6c4LN13pr1boGbKYpCYBnPnhKhw4tRn7odn74HpQfMdNqF5jiUia6cGCoUtKt5MqETES2N",
  "key18": "2jdKCbdwi54akYxWRXBBbunHtgqMz9RybZSZEXeNMAgkZm3GRXRgPiFk2C35sJoPdFurjNoZFCsV7JSZd8prZUHJ",
  "key19": "38hjkJ462R6Eji61jaVMb6yNZZRFeXvtStBosf72oFGhh4xy4Po9CtYYPrZDUHMBjkTZb7d9KHArS1i14DgWGy7d",
  "key20": "3FKD2BTXaiNWNbHdmHTvZM4etZvHTgsscgLPmBDUKG1JKJCzZP3KPk5UXYgffvvfSz237JJBjRsGeJLqkVrVCH6C",
  "key21": "tHV6pNyWmjQh7UMG6MikXUc423WYcESHfCHb7B2QE1ttQ95saudqSxDXGBcYKePv4RsFd4AU48p9yZSVB9huuJP",
  "key22": "3GXByeXLSdZ8CbnKoDB8UAg4K68nUjPqESwDr26W5tvTNCSTjJRN5RGhUrXEQz61K4K5JEY37MktdGW1M61GwfAi",
  "key23": "5u3aCYm9YxbnNPhHyscm2jF26P7qcrS5B2gRTiAh9HtvSgUVd1GfnttncQ57fK9Lt2T1neBuTXLuHLpgHD8otV8b",
  "key24": "37PJkaRj4fozX9Hsbs55tk5TjwqXymiumnQWuTdGiAU4ygd7gBmkTz6ovq3MQMGpeDg3X2SeT2QUvxNrpatuvvgN",
  "key25": "EHs9TQkxu63vHu3DtbChg7osWTiL2hdngk8f9VM6QgyHzFjepGtvvs61n49kUxMLDqxsAnQfGryzEpFJeu7jymu",
  "key26": "2Xks51ALKkYSirrwFGPMocUnQZNgVcmwXFRv22N12yzdAhrjV36HXDqsSFvp3vCu1bGxJz6P4UwaDPqBhga2HtYe"
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
