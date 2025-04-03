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
    "2JmPVdAQULDEpqxyNtQttagBwCQCRqrL41a7txQuP6sXoyf2xkPqDSLyNuYKiWRNkhKaizKXjpGHcYBFPb2h4nMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NyhNkvyWrUeQYTo4nkzKqZ44aS9rThUSkE4hQxwjC8E5GmrZVTrGAkWL6YzFeBTdkcBqvLLg2xRQAhviybkcY3D",
  "key1": "2SaG5mUjtnvhsDJBPgiMjhgvqWUVZrLZ6YDtfZS3YyxEFLr6sMGattzerXqk9pocGNDBf8ZE94HQc5GYxXQetwpJ",
  "key2": "4VH6KpbtJunfT65x8ivgyuVsoHz62kvBcH5qoBUdAVLHXXEzeSwDPtHDRqu9XgJpiHZKkJwoBusDtHe1gvjMzYEe",
  "key3": "28bh5nzhegzXFCgZ2rJZy3Cvtj7LdWGCACdogHUzsZiQFZNyNZyxciG8yw9G9QhAXiSjMvD7LA4DDw8CVcETmPfL",
  "key4": "63nsU9FWc7sjneCio1LtFK58ZRfJacz7xemkmYTcbULT94aaBgKq3WFSwRANWhhcKh9ghBrcLz9FvLe7ek7MscgX",
  "key5": "25pgY2vgR4BKSyB6FKdFL3cM89XdMydXy4s3qFRubNNjVaru5CGfVxaLy7rMNxcCBegTXHKjKtQ4ugS1TpPeoJxd",
  "key6": "2VQR6vjQLRaNELrdQB6bUbxJ9o89QRkBRDkFKXH8FRo2LVLfWbpGTiNiKdzz4NnFcuY7uWhFJeuyCFqRnvjhLkUu",
  "key7": "3C9iqPDybJFux1HF1mYw3tgbBrQXC4PoxZuumB2ve8B72rRApVCW6zQkJ96Mr487he6sosjriXiio6KE41gNjox5",
  "key8": "2c9Aym3jJwAHjEwmp73BaFA1nzNn3o8Y6ENj2X2GahVWF1qzqGzAUyxiBcZ66kKX4o6U2YiMUi4ch73Pwpvu1ZMX",
  "key9": "2JWC35r3sViizsiE3ejDzjfAGzapMkSmvnn7ej9RoNSPA3NyS5iCrdEWj6MsAGQBPBdz3LatqUWRpGwzJCFxzYxZ",
  "key10": "4ow55YNUGXCoH3d7D6WDcJPcsJVF9iaMvhz3zQTJGmMDtYuguwwkwam8HtujjvMm1eqWH98BQmkPQejVZzmEsMDb",
  "key11": "2q2oG55DUi4ndiVfugHMqLc2Z438cfauPVJQaF6gZtZAYVqH1aC9qcvAL8wuGisZAG3Lh6qTcmzPrGVjw6zeTzFw",
  "key12": "41opPDD7Grm6Ars76KdoZjsDwS8YpBgsR8hZfePKaGe3s5HWttxRdYBmCXHmEN2Q8rckRax7jULtHGB8mCn7abKD",
  "key13": "3wXjka3GajTfjZ3itYatNP2kDnjSZ26L17A8XCDtLv7uDHd8y69RSm9a7PW9K1nD5g1o74mMDKNe71fbkXPKFHJx",
  "key14": "T4f9Nvs2982JHCWgt51xVkhgPMLDTbPTJte4kypMtTbs3dtMWKHnoXHCttYrQQFBLKCGmquzf34kBbnJfyQAiAn",
  "key15": "45Y5YTzm3YZhC4sDNpkkZmsUnAmr9PkXsoKFshoBiHDuhYuHKBXteZt3NiZpt7S3kHtyamfoxs4AymQab3nUvc5S",
  "key16": "66ikk8ME6i5QPjTrsQqFQ5QJbecK77vkZWDA7eoDVfVsKA5XTMcC2ABLutP28r1kk35nbq4eVTudyDrsMP5N1GdM",
  "key17": "48AgSSUispC65srhB4wuyoyNwVHWKXnnjGzZt9gjBdihFBR5w7QY24gKacV9nncvK4jDNjRGVMhbNhmPoiLCTbMi",
  "key18": "EcHFNmrTBypTzGu5LKZU57jy42RrLUXzwHHSXUv1bZDo8H9bm6Znm431KkBkekTMF4RPdnbYXWXB2Jn4ZFbf7wM",
  "key19": "5AN7WsgA4rvvv41Q7Jaar3a16FdosZEqS1J4QBgfQr6ZWy1imGULbZMmPrMifDJdNJnGwybkSBxm2neia2VFh97t",
  "key20": "5eDNqz7ka3XDP8esKwhpewvt5pDGtwnaXo4atapzYHzaGZuCQN7Z5CeN5TZchXmZFaHo7JSD5uPKsZyhBZMeC6Fq",
  "key21": "5yLLPG4jUcxGiDqgjJxYWJmBnmfmyBSdZnm5aGeDgz8KMWQTVhMArS2uQ56K8UaiWfTmAyPdsxrMW326DAsTj8sS",
  "key22": "5rnM5n6Qm7ypUpLHbN67XD24ky5sN4bSWms89rSrU7YJHyqVEhxfCbv84TJUoAfFwNfuN9Q6e3PPiEyR3RfegQSp",
  "key23": "5hLRutDkyuL6PFoVednPDGqdgRQFnJAtd5MKmeqCfmEM1onc5o4TUcZ6FvFxgZUEsmqwoK339CknHnhX9sgBcZVL",
  "key24": "5mzxkfd2Gz9GwExqtYAVdSZPUHwVzJbME6rt8RWYbGCiZGdSWuHYC3KsRJKvogGoi4hVYh4HXJi7nUXvVMBNutVY",
  "key25": "i3ZTf38gqFsC1eqxigz9Fh1W4C7R99zQ4dPeqXiLFtbPAwKrxXQnuy6ockNDbMSnEsBus1pr4QjqGJsaniCU3y4",
  "key26": "5zWWZLFRvBj3B3VeKgvMtjpXe6QJ3yrzV2RoQ7P7zQZRsKTQfXDHFGCgiiwvdrHMqxfcTNBQHgPUp88hzKCc9FqB",
  "key27": "3Y2bTQ2auUixJspnzQPWD2SsZBZ1XxxgKWpk3JqvpbAB16tcSvRbW4e12NMxQC9zMqUbzxwtPSxcD5z9kCazWGhm",
  "key28": "4HmpGPMkxfmNQH9QuAzxMgiK4xUToAdFywm3PEvjMA5uDeSGMMLVsAfEBjtiNXjT3ZLc9Lv6Wyjqo5TyFG6PfbdA",
  "key29": "8RMY9CvsNp8o8PBTpXy8Z8vJixQQ4dR1QfnRuvVYmNuMbmDaEPbqoG9CDwNBYGQMEUmH37xjASPpX3UkSaN6pK9",
  "key30": "FQjs6vn5qVoTTCXW84qMyBDt7ffdRTjT56cHAESScTKEjLx161HjFUyD86JP81stRE96q8Jk2Lfna4S9vMmRJz3",
  "key31": "3ZeCHAcMEnuTY3vKSjLENmvso7Sbgtmmc1Lq8xDQxSgrxCZ53A9V5FoqLcW6YqNDLGpugCQ14hk7r4U4ZkzrGyeV",
  "key32": "5pVQtyMkVoMct17AQgVz8D8h9pBQ8uTT6s2HGzDQDgAeU6zUaqrk1T59GhV6L847ysnpFicmpaNyx6kNS6uHdAte",
  "key33": "4v3WFng7U3MsDrfG7c7r5rMvCWM3UER7kLh3t9eGnekPzmUNAVvt8C1wN8j2k9EgC4ddmLUZT8mFovQzyavLEQRY",
  "key34": "4WGbFcx7BgUsxnTVc7fM6yBCAKkCNBhDTLtVtN5RtoktuvNVfYo972xi3Bd5YAihpTym4qQF1nrKo6d1ps211ecJ",
  "key35": "5XbkT9bmtD5CCXP5uj133oBZSwEJVe62d6m5DRVSzLfUUbFYTxZ4x6ovBaT8LtkA5MLX7YSvjf3y4K99qy8BWCpQ",
  "key36": "32HWdq432oUidMbuD3LeBWrMZzeoDLD7Fj5wmHoaLEsEdmkZtT1ujSw4iDHWTF7HpCRjk1mNhP7JiVcGH32Cbpgv"
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
