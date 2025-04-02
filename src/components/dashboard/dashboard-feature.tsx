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
    "2pWb5nLgW9q9A6YRustZ7ZHqDG6P7jgArrX5BfGMZNgUCW6mn2JGt2JnhMtpuu5Xc3w1cyJGCDNr9dMCBHVHb3Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RWiWLLa6UbtXowQGsPjp2mZhKzLkx2HfigmoGkKYfovXaemoNXA1GFU2QS1rj14nybCohmkWGCmWJYiQvDEVNCz",
  "key1": "5Ep9QmnXCpqpkhddbRJaPUjc66HpAPapgFbyS251kJSyL5V6JFGcU3GCsfNZ4K752cvVXSLFeXcRcikbETCsVhEE",
  "key2": "5DDYFWzPjWVcpnEz5Ua5W4nZ6ASZHyyXuPeEE7HFoY22AQPe57c77BVShGg6RwpDdk5HPq6p2asb2HCY3acmHfh6",
  "key3": "5naMy1pmoFhNG6jevYByTBuLC3YBndz4Q1adgsbpZSmy7xHjzQEPTBUCLeCPTeRQSt7kYU1BoAh5MpFCyvbMbniQ",
  "key4": "33bxKM4Y2qkwfFpnxKZNaDdKbbu5wj5GojsBtfDr6t6Qc45tZiKVZAiDBp1YLz6K9BQwsH1KWKaeTzNSfN5GcbQB",
  "key5": "wQv4ZCYPzMXLxmKhbCbAQa21rHQiuogKTXzFgF9nQMxSgu9K7fTB2c1LdGayXq6CNwzsYjfhUdWDpF7ptawXCXN",
  "key6": "4xijAkToFcEkyGqqE1164mCzEZ1odfH3wGgNdFvZihJQKpeA9zsGraJiszwqtQVqzxUKQVrH7E5ckZE8cJ8HZ6a1",
  "key7": "LTeRA28CuBdkQXV6G1Rwvbr8a8PvEK7Q86YM2cHob1eNBJRzkNMr8qtzosdfhu5oxAfDsLJsyKLdGyNyyNH5itc",
  "key8": "RPVLzHKgnpeiuP4AvSVS16NvGhNg8bcp3KTSXd6u8t8ufgQ9LHJve7Yyv5QCK4saiCaCdcbiZkCbhAGDJJCxGsC",
  "key9": "29srQXwz1a8XwmygUbvVFhBZXLJCQZzApAGajeq56NLRK2ux5mW6mzQRKWzBYYnsenLKkhc7919ymz2ysoKcpSDr",
  "key10": "2LzzTbp1RbTBv1KeJwo9QX1EKK3Gz8TAK3BahfZykzy3bWwhKSqey9yGuiFwmy7Wv1mYkmvaD1egrgpSupY8RPaH",
  "key11": "2NMwsuGmb9VrKQzSGToCHEVcxwLav8mmb9wjevwpaHF7MP2RJSudpXKg8R77rCpBGMTd9LqERVE9px49oDdQpemQ",
  "key12": "3SGAzua7d3izCM2xkq3hx7t337UvcLHsHM9o68z5jAK49uL3F3KHXhA9QmP3QU7jNhadisJxKcu9YjVYKuZofzF6",
  "key13": "3Co9kCvkUcyFcM13rt8mLJJ3LxxNoQ8bBNDZj5v1f5kpTMSRce24vWGufsExqLW7xfbh5fyv9QsoaGdmTRVAAKqN",
  "key14": "4LzbFGLjPutckxNVxNv56JeyYfGoPnbD93QxChPMf31K1hrNjnPyC5eTqBywtGX8pLkZbfZBHxxcvqtLt9iJwsrR",
  "key15": "3hmorxNEcca98wBBDxF3TEBiSvDG6f4XwSSuQ7cPXu4jJpmgdrhFK9ztURay7DEXbqLaXng8MuSMHUrMePaCXd7M",
  "key16": "4u8rmbyrdwedDCPEuZBdxBNEoU5vmPtXxs573pYhr1Pd4GRZ6f78bNPpui1dVv3cgvRAktxXsQ9nhGmjCd6S7QUx",
  "key17": "3cBSePsQitsdq7SkaqSsboRybZNWQGjFxsaZJTuKpd5ymgAuWtYv3EXQ1eyVzuEChFwxyK4zWRQKzhSLoiwzpEJy",
  "key18": "61tW4N8XYXydY6Y53iNUHqUTALUt2wDunnzRcPjJ8npS62d4gHSQ91RjscJwVx3tqC5646qEUVZaStGjTBZa6Moe",
  "key19": "29C5cwLwBxc6GDHuqWZYaMkNdfisKdpiFBWGnLiDPGf7BFmU1ZnA8ThgASJuQHXwiu519LnbLjG3aMkim4RFbT5Z",
  "key20": "2DU1czb7VLZGQ2VF7yUcs4Y2JV1fvGN3aB1Hxc8oxKiMxRWd4qCCrSmTrhBzwmSv8kaGp93DCvaiPrjHy3dXKqXR",
  "key21": "Bitq4g5W8jtUf1kowCVsTF2ByS4yjy26mc9MkKgA2ifB597u1ZWbfpKK4m1j4ZhnfVwtELLDj9CMRxP2hcKF2sH",
  "key22": "2HxbjpVVJ5Fw41YPvr3dAp2KNBnV4c1pg8GVF22ifXhAtGaYH2c76Kwb4rjyNKL7N1xB6qwYjDcq1jaPEKcATS8q",
  "key23": "2DppEaKfybtnnKKrqsfY1Td8rDHM459uLsccCwwMY6hzY3ULDvemenURkBQGkkBbFc8ihZyWgBJt6K5x2oL4ZXv2",
  "key24": "tNfdokNvBGAAWhkdAZm4oHirx2jA15D2spZNDGYmTVtAMST6QLwk7PdryWm2LnoBQyZynZ9tbY6vTxPSNJVu33D"
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
