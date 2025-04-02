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
    "3dyPDD6CrAinZCp43qDG6aiLT85LUWNB3Z3hVvyRcBzoQqgZ65hTT11MxnRdgFfL7PcyJYURK4rumeDiYWVuHCw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNurcNq7qgMvGd2DvMPbU4SFjrHhLSSwkpT36FuPWjDuxGbVgsGUQziMVz71E3c3nnJJRGE2pxTjz4qG8CkwPdb",
  "key1": "4kSiNXPV3oondGHhz5ZV7Zuu1dZtzso53P7x1xy5hsrsX9zvhT1mzhHaftcBqE4kc4ay746zLfxmqrrsMHXZN1J9",
  "key2": "32VpuHoSewNafroFczxrpfCRYaRVUikhF8VTYEzxdWFe745HAfzwHVNFbYtQBpnAhPgj7mHYydKB7SKNFakbvF8h",
  "key3": "5XP942YLEQmd8Unh5QBftZ8BenZCWM4N9uJvMgZqYgfa28bK6wkXfnYVrnrrZWFTtA2P7Emq8aLqEfdGEgqq62ff",
  "key4": "3pBCu8qyzgt27FBbAxvG28n3XvdyuLTfJfuaJdZ8hDtXPbgMe7tUPkaabrk7Y25KLeH3tt2qZ3vVsrentCsvrqzN",
  "key5": "3c42kt1TG83fzdf7MdVWMJqWE5abfqnr335bHPM5oaB4yCRJ6SRqHUXgYqo4rfk7rFUukHdZqrzf1aS1K6N8i2Uz",
  "key6": "4nYCoCsTP64EoqSFETBXFJKb7VULX8Kp241hwQt6zfXm82Y2ArC9MA9aCwXsNK3atsHYrkaBevfivT8dsfzG3Lxn",
  "key7": "4q4kcsVvcKn6KnDX2etBfvf8kFPoPuNCqe9PKUz9h61qcdd4ANjaAHkT48XyovAnZX138AKXT1Ei76S1AQxGdccv",
  "key8": "goZCk8qemCwVDy4hPuw3DJLQmbYRiG1fNdgfhY8KQ2wYQ91MbTTzZi3WcmQ4M7UMBLDJzdfENHkBka4Dsw6Rbfe",
  "key9": "4dbdCsvBs2z8LKkoHbA3WDqqMe4S3CCNji6pmvPjJ7iZjjnDmc7YitM1Q5mqUWNKxWZ5Ab9jFkr7binuoA4bE6Lm",
  "key10": "4AqKfjJWznqnqCX8r5P6QXYJq6AUtv8TmCCANPYCtQDathJrhPcYj5CyaApFL3NWNr8NyANTpx8DQXPT7cgA8LyW",
  "key11": "3NgR2Mth75crz4gptuZGz6CBSWGhVmEVQ2YneHCkg4o6i6HGnRTBFVKDzhRmLFJSW1zZ4FbqQLF7g8pAfoRLdM1H",
  "key12": "582MfqWUkBYAHStkbH4AUeKzBeVFiWmWQa7GdBPvYMGUsyVFWwEh6ghNZPSyeCB3XizYAx61zNn9fxhVb5NRnj7E",
  "key13": "5zuA1AkyEQrwtxMqgF88z1pcKKRUqbzeCkj1NCKhXuCvqLuwhgkMyVBSqy9rTSgN8K67ZCriyF7f2qQv4hL4j1tq",
  "key14": "2huFHKWdwG3pA8yJgPKTkGH7qzwGiKSJGRrdW8P8HrH2Zoi74rwAEWJZ37m22uRC6FisJZTf5Lkopck1H4TbwEsB",
  "key15": "3h7z71oj9uxPv3Mu4E2e5RFSo9321FoU5rPWejXbZPzgbfAkE3ZJ9WPP2ry54HcwDcxiExa7GjcMMjSCwa7UtMjT",
  "key16": "4r8JneAUB21vjLCicLMHFSzWWkW8BtRH6cxiZwBYnS96ih9jjqdtqZHdKwpw9aP9FGs2Fz9ZdB6F62Hso5LCNK6g",
  "key17": "4Qe3CzSV9uW8XstZvxRcsqWeCh381EyEJYKXtu6ug7rrJ4a2TvgdR8Q8foyESKCCdK6Pko2RLtYySrZsGZ7eyprT",
  "key18": "3S8VvwRFCPnSUASn9ujioMjEdbBkxB1WYWxZiTWGuZW7qtwtQDjUdifVjeKD7egQrBBWeZ53wNf3DAqw3HWaErhq",
  "key19": "o9sVj3eKsMiEb7erGkc2W4AY7LuBhrQCYRLwuRVUgRbVJFj2Lc56QjXx4vwL2KWcH9GCiwyqrAYqZiDxXfNT2qa",
  "key20": "2DmGtsdU6rzR5q84aFbxNafundRMTkc1riyJVts8U9o38PVuG2pN7FhN1PnhCir3s8zVSxtDQw3TYV1mALtqUrbh",
  "key21": "4jurohYejqVxbsrSnYwi86fvXbiMcmyiSbpUTAAUcknz1UEMLxFy7pAgoQegadHuNdvM9vJSChs2e5D9KTN9R2uT",
  "key22": "2UnwGeVvFH7Vk6ucrWVBKbR7gVLG1rfhCEU3eku8TXiGYY4TtkVGYQnAbRTGiQo7eMaGqotSzZV6YFknjNjL2YoQ",
  "key23": "3y7cPT2cDY7VcFSgrA2uZrhm95xER3ccyUksgeax6361VareFZ6H2vvEDC9QNGahJins7vB8LepYb4pnQ4Q55W21",
  "key24": "3xsnaMU9TNhqnfgpNnXbSDWCm7C48tZeV5DzZEFUUosCr9geCRbCQDYKxkRjk8u3pqpppRpdYrD5qTRec2k7yFK9",
  "key25": "672ky7GHVTBk4NnwxZjz9n8A655in4mBvPMEj3MCxUaUsSDzBaj6wrfEfvWW1pRS8V13Nrh3oQ5weZgq4gM5vtGx",
  "key26": "5PVgP5LPuR6qropqExQDJPGART2aSWxEF2AbWNNb4mAEnNwiftf7vrf6Ew16gLamVcTFVcwQdA2QV8QyLpDbSqgN"
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
