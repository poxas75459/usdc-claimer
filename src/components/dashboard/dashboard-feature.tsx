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
    "45bLqzHyUrq589homoKpWAwFAWyHeS4RnNAJ2kewKTutH8Rr3nyRBTAQMtne9A122EBkdSFNAEDLbV1MSwdryW2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pHJp7HKCjEDPcpg2deLEg2ymcNYaSzia6r3oDAemHQ37WgvCVNwjrK1VPdbuyzkshGfJWgXNxz8uRpDicvyqeNz",
  "key1": "4HNS4LAScYHR9bcQxGHTXsuoeZXi8JSVgFyDWreN12Mg7xa8LTAAMpAxjBen6Kmeqw1HvBBuvzWTEE9WsXn1pNt4",
  "key2": "2GYvwhcrRqgMgL9YbdLZcSijRLyH8ChnvenoabHqkM1kXJ4DdZ6brKMpaVJSqCeMD7tLnzzvPcjLfZWc4KuZka8W",
  "key3": "f4Ri8HXhp5R27DXnJs7GqkTubd8tbpqHmq72ETfzmax5cskJ8foaFjeDQj2XwegLpc4MdimCzYFcUsbZrxec95h",
  "key4": "3k7PsvheZQDcGztRtr4gYMk4MpeAGEpqPsQ9qwRnWmPep5GNRtXB4EKdLpEPToaDPrCCvSLoj2524nTpXFTVTQHv",
  "key5": "3Whu4vD7e8bAN46ojw1y9NRWHLVgLmmVGQzVA9avy9XViD2FRZTZZsP2GQwMnfyq1tEcSM7ZjDPgigj4Qi6z76bb",
  "key6": "5eZZ48owGNPXZti1x75nvqpNZJK8yKeFprdTsh2hwfATMsKs8PijxjEwgiei9ZTkFDZ5NFUMHVdsL5AZozw5neeW",
  "key7": "4yLMe3UfzrJqpQZSwB93RTHJaS9Ckhggqp6S6QFV6gfPqnCPjPvgydyGSET2e6NWQuLR1yWfkRNzyRCUSVq9QH5P",
  "key8": "3iUcQV7q6pxhYDy32fckcJ3hX5f8ao34WzaY5hLdKadV67opoSqpyivVTctNpmjF1ZmNQGi8ABnvfhxv2mcaZKwJ",
  "key9": "5kW37ZYyBKVohMoRRVdytqUWNtkt1FQoiqQu4eosMzghvMFLXYiUHqWSJ35pRpFUqxHzbyqSq8VnaJwR55YVStdS",
  "key10": "483Ps3WU7h8b1KUnbmw3sZhRZ731Jx64n9JbKWmz3LnRgtE1hWPjxweVGRKK6usLqHpwXds5jZuEmF1n3E6KCyXx",
  "key11": "3GRG1N9QGVnJLYTs5hHrdwabMSKBxd89G4xmbgjxKAmimVEysNYpbezK3aHZkhCXr9MRYaSoHdN2BfGQiCSU7fnN",
  "key12": "2WKLKTPzSjarNsRBa9RgMkVpVawYUS8bmQEvjbh69VjMyQ3BiM6KBbyHfF4xWEmENknxzjD66GXX99dguQ7RvX7t",
  "key13": "4gw4srX5RreovLMhsk7JyvyGGMHWWB3Ye6eSf5dQGreUnEPFtvQTjQvTPPFgdouEncbB6bsGq2MhjeksjesSTgjf",
  "key14": "MhbyHcQbnQVbwSZHU8cxZ68w7bUiPoyRZazckf2M6Tm9ysMpeixRhp7SzGUz6tY7bTpCSSrc1qKGGBDjNnEiKJC",
  "key15": "5ytK9E7kYhze9crnfUnw1x7omndfQS7rWmYkqJz5Cxsz3saY6tdQt9E1ruxmwMn3AEupuEcCoh8r2gWrqtX74zmk",
  "key16": "3tvZhh5QWDxhW2tJX3UC149W8Ae4Y1arpgW24JAYZSJW42Xhc3LMNdotgKHou1mALZGtHULBEUmTX2t2wwWfv9xq",
  "key17": "5i1GPqy2VWs2R2QscD4bRtkU2MhP3sb4nq6S767KvXnwnsJyFmJmtCiyBG7RVHNfpgby62V49g3p9AZCV55PP8kJ",
  "key18": "26ugRSfqcEarNAe3UaHnwPJYYLpUt2nzyd3xo75i2NggbVyDpREMELUqp1JYqZQCcUNHvdkH7LQX7SXkvDvb7jfZ",
  "key19": "3PSs8WGnoy7ZrmbgHDpfMyaidjA1ypv5T7eGxan67oERPX6eDCHLheRQ8Xj6zQ21B36tbxBBuneevhrp2yNfML8f",
  "key20": "34dAJJWjwSeZA6RWfnbpenxhUMcz3gj2awEjHeAiJFo8aXY5kp3ngXWBUTb1m7MmMcWEXGmC4z2rzRdMb5kErKA4",
  "key21": "47KVt5kXnhauMBajAA62NESUFXKYntCPWYGNRrikLhcu8qcJKpHPDyuCoZt7uNwnGLmNCTj2UUwb5ddAgGvMZocZ",
  "key22": "2yJwVQQGfPUS8eRXADFVWXzCxfbPZefxEkRn5o5CQSSuuAZCdMfPySxgkB1dsLLLQo4WCbCj3RXWrqLrsCyVbZ4R",
  "key23": "5ehQG7Rt2CxaNULekPEJNsbbqve327R64LZHgHeJDTUe2kyycNkgv99UZtKXAe9txHptk2WTykCuVTQT2JJNHuV",
  "key24": "2hmjSZUn78xqpDZekDwTQsTCGoYPmWD5WcHifUEo6Ky6XY1ZHbYASikJoPcrkBVU6hiavFCbQ1Y4qafKBGFntXwp",
  "key25": "32oUbreFdp7JwwSRv7TfJ9AtVJkKYUsjcQQamZW34ZokhSD9J5uPyPxQw1PnqjekQ7iQsevJp5LGes27fBbFgdQG",
  "key26": "28uu2shWTgqMhWdiP3YzG1AvNzkNFyEvAmMECnNTydJi8D6jxzF5jKAeMCUNu5x2twhbaywZHqfK76k71LSJnUrj",
  "key27": "xkbhadQyiwbw3fLwpDk3wTB3XUnYMb89pHartFCDAX8wTu83gnjFanv8MkZaf3nB6HwGuZUebKGWr1unoJ7PUgC",
  "key28": "2Dauva1DPvvVWskhg4jQQPxmDBZqc2XVmR8RaFgRc9WkHa9HADEJkYXxqhQ1vvN7V5DdG9Si2oN6dpXcgDE2MA7k"
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
