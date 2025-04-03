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
    "2uDNGbeSvN3DQGt8699BygAGkU2uHynt82vPQjXHhadHrJHegaDfu8M2A37fQtdNqyHpt3NVSHt8A7c6VVMLBGrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7qspwFPmU7LDLAG594kTiZV2HMXPk1qxjEjHfPJLxNqoCQmwEPgCLjeVCoe34h9HLKmd7WReSn3Xy7sB6ahNAB",
  "key1": "3KGC5RNFs7qVybq45pKbAAwW7X8WaxBqTpUrf9Lsp3ALQY3ZSf3E92ddyXo1CMm8M8ujQSSXBBB6zGbvbnYEX6SB",
  "key2": "2QUkCA3TJMonuvmWh7R1KjiS2yNj1cPSYjRCv5ckdyDKV5w1DMbVaWNTAXQAC9yPC2nuPB6Y5rhVdUB4nm5fptV1",
  "key3": "2FpDU8ZXA6RCrAeF5KjKRZbfLz3oPmjJMcgzuajyLoCueDsCtQ7r2nyTrL2GxWtwVfC8DuBsegZqoU2j5QCm14uS",
  "key4": "5t2zveJsDmPxSrsx9L8zfQ2GhKfzsNQssFMz8FwNjfeCmfrNFt1bkMUg2Bb9G9CC4pGAabzXHU7y8nD3hMWkahaY",
  "key5": "5SBqGCnaVXe9Gc6P6xLfJvevc2XYfmLW8aXhPonT7djE2Ryq1VjAyiQzzEqJkpWKmz9qgUdoLuBRgrLhbU2V3A9f",
  "key6": "3NfoLNY5Dnu9VJLCWGMtrwaHqv36qi5kJdkUXh1WKijrSFR1be251LKMeQ8FzupBXngCtBjZJKoP6pomJqvi6jka",
  "key7": "3Ym8SKgTwKJXLadNR94JpuG3F2NAFUKyr4J3ktbfdkaAiBqGPusVV4UB1LacrRVTcXH5NdhDEBEzdUSJi4bvS1aQ",
  "key8": "uFapyizsq4TSSmyFyVN8hTjRhojmKJaq83pn1GqH1ZXJBW3bUp4njiyGzivZkJWhFkL9fkcJS1Jui9EFxsdNVNT",
  "key9": "3FWa1NwrmfiEU33LQax4t337AaXE1s6HN48V6Cve3xKoNWcQp76oiEUwNPyXSoDQiDQxg34Ls8ALpj7j7QKKiah8",
  "key10": "5g5VeMRKFjtEGPrmgaKhibAkVV7Gq6DxyiojLbJcVcq1c3tMyiq5QiQbGZw3Z9YW9pexfjhi2ZLPyPopRcwXUqLo",
  "key11": "t8J31GHpp3XDETuU9JPvvdqtdrFMY6XhRCC3d6WQUdT7HuXHH2maweSNMtKFSHYqrPhGxXwJBYaCr8ao6WFQXqT",
  "key12": "yQ6fghPSSbxEk5ubJUeZQZXriC6vsVJA3kk5wxc8u9yVo34UyodzL6U8vezCEkqoZqRbXuovMbS8EPVN38KmUyx",
  "key13": "5BrPaRpmmhx4dj8oS9j5FZW1Q4SpK3Y6pQXMU3Y7trk3wqVwkycLNPDkyo9DRthufe7E1WwEoEqBzVsSU9CJJBZM",
  "key14": "2E8qgsZhT6p3yoSCBcHmazqtFGbwVgce5UQLu3Ays5PaYTnJLu1bLH1adq6gYcGKw86ufotPN4bUYibFXqpa8HbK",
  "key15": "42cjTwjYSW5Y9HkQ1zeCPNnESdagej1YVRghkgvjT4Zgtq9iLrGxfjyaAia2C8cuu2QDPnNzG4N1mqqD8vLMV3xG",
  "key16": "5QBcxB1raap8WvqFDubvbHr9HP9SUWwZgcBqk4oHzaykDQagRK6vtA1rBeSyyZXzD9FLAKvRZi3AZ65fAEFLgaP",
  "key17": "3g3PUBuQkRWd7xA3iHU6qA63eUKc6yPhQfDX3pYfokjJCTURs6BAcEywNB1oJjNR1PmGCD6QQkS83bsQWJwgPoqH",
  "key18": "26HK8hsZhdmxtMKnGEfDsYVCCQ8dqsaKgoQFjfB4sZ5PU8XcLVZA9WYnKPyYSitY1CAJn82Ra3ZQD6AUvfyeNfa2",
  "key19": "3Lw699RBwvfKcszZJfMtwPctc8gvTd16m7EaB8JUd1uSRg7EDQni4chyBvWD979odPrWPku1egt23cPD3UZrDyAD",
  "key20": "61SfJ9UjBAiaHJE8g9Lc31xXGXGe9ZZEYmEqu4mHKdkcvX5KquBmtS7D9Eeusd1xRjtiiNzKEQeWNVyYSk4HNhqp",
  "key21": "2T2BVfzKk61NdpHVudq5757DGbbQZ7L2TrF5QjNHJ76LsZoBPGpat58u3gQfjvBrMcxkYE135BMwhirrDcytFejN",
  "key22": "4V54kj7A4Wra2BGcMWEea8eJKV2n3RZg16NrCGonXYjec65KTsTrqMwrvjK5c8Ddqktn7xNJeMVqyXKYyWoPyHwc",
  "key23": "3kn9238psyheWsKipwGxMoneTg1DBnLuZuVhAL5Nv1BEJPKwR1CRfV2HwVS6kxmTB4sfjv5zSgjtP41WaHPuEPJW",
  "key24": "5v18hzjwh1ZMwoTg43eP9VxWzoDnqAov47CC6EsRvDkYvxdE6xJqfXnbY7qv4itYUvxBiH71bQqqjR8GaUcp641E",
  "key25": "5XTZF22voPpqqy7WYvWvq7QKSdUXYSuT1zzXyfDRLqYW7iCjDZPBpXKHdFYGa2jF8Dk9HPgA9nZ6K3EkWBmEtLXw",
  "key26": "3aGTKn2E1fJvUY9ggwHDo9z2LSiwBdBq2ghnnEkSNjrMkYhihbCfovwa2Pi3VwNEUeZ4MSzRgg7nEaVGsXACzEGk",
  "key27": "CFXTLkVwsPxKMZteDRHLejkkqXQq84ZDXwoh9kEftsXso2uUy2LwxQFfNSbozhCgdo97v8MXM4CnB8J31cZ9TUU"
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
