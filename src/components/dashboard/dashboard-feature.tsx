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
    "5k6auryG7YA74fd2QbKFcDBe4k7FZ1UQQeVxk4MmeXkmbbot7EKqkGXB6BqiEBaXbkFoWcwmXEBdmJXTi6h3x6uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYe3rB8Bx1NKvBHq77P2seFtevH7hRjWT5FPNDUBzDTY93ttwDY8awXiGAWiCbLMKuzuYtzGCKBmGZnQTpJodim",
  "key1": "5CZmN8fEmPR4L6w1eKALEVmPgtYaJW9pi259t7uHDToCiN49k7oi4xCS1sL18oM56vWbexoruJnXWzKBbijfGRwG",
  "key2": "4i8yZVQZYov236svEzCC9cyoAbGRg8Bi93HHTvfVaGHjPUBnq28F4RCriMpkRyHcrBE3DQQJQd6p4vwkw3En4CMc",
  "key3": "5dxRXdKVaaGkbmpvB9dN4NYGqXQWHsGhVbwUTMZ7w2kSjiacqb9NFaPsEHqTdQ1ye8iAEdcaRXddh8sLody8Xeb",
  "key4": "5nL7fhdrztB5LSzYzxpEsakXq2G7xa8zNEEpG4Ts4tznDSir4RTqity2PvwA63JGYD4KAafmRUdwjWMp69mETjfd",
  "key5": "3rihLSr8RgN8ojoQyrZxFenMrNEdi3RvDTXoCKk8jJF5LRmPo1LhB5EGE9iEhgEssytNRMgg5ZtvaGAvANcmjLN9",
  "key6": "5aYomYMgVq1uW8Sa3cSq34jSuv6PqUaNpXiX5C5K4jaAX3mmiQ4LCjYZFComKE5raZcUV3XTRqtrZoZQjnpkU9bq",
  "key7": "5wyxxnUVZTqRQLHohrjxkNTAxN9AVQg1Tm5p4wATUGeuLnnYzz6wA8nQecdSJuohkQJd2tK1Lac8jMpZpcUMtWiS",
  "key8": "35JmRMYc4Wr6VwCwv5qUyRs8xKJf2Fksg5sQxUgK4CYFb3E1ppV82Qe2jGgkqKVGng9gCuDJfF9CukbD4yy1Et6Y",
  "key9": "3FcPq9tRCVuABS5ypfYkeQhX6729Fu4cV8phF5thjRK9YapDc6TC3p32tRubZP1r6mn8RUic61BB4h8w7YMAerJP",
  "key10": "3DirumjY3rRf3s9e4gnkWYzFLRT27WxvGwsd66u5PabnS7NWdGfb1ANcoJPABHow5uzNEJQ9fFguHKxpFDGLwZxJ",
  "key11": "4v1JUsohMine8etPigoKkScqrpbKmBGHBiN8vLTyFkWDLzLTJQzT4hh26KPcNgxiLzSceyA4MYuTGoTCrHfkBiyd",
  "key12": "41qB877nU7XTfprnvJJwE9cEjpQ9nRHMtWfu9rXfqaAgsNpfyS5K5X8vwB1LYKbCWCn6EhNKzsXDmGRjbovkYLsp",
  "key13": "5M9g156xUN6aajtUx6PZPxdQ49g3avaU1KxhzdLKjGFBAt6CUryeVFZesozabmgkcwG9b3GgqYXm4oKq2AqAhnEN",
  "key14": "3Do6WutJy9M2GaniBypEUqqnTntD4cfDvqNY9SGvUBNWGD2DNZvYuYacHYnm86R5XXZPh2xK1gJnAkpHSU4WwGm2",
  "key15": "yG4X6BUB4MHzVzt9swihL3r47BCnaQrT4oNHpdhgYpAEQdoLyKDfvEdMDJRKRzsVFDQgmZHdq1NyvXTBv8uoxPa",
  "key16": "5UTzNdt8n2HZrWzKCjLU7W42eLdNXTZ8SL9FsNM1jTncLD3vCDut2xzeKQwvLcNfSkNkX7HZ9EabVvDYRubbrcKH",
  "key17": "yTtQSvMfZNBe4YUUmsSuuiUUHcpzfbZSGDZtET2eu1JDQPCzqYgjdsKHJcXaUfaNPVh2UP8kdEqGHh9XTFhdpL9",
  "key18": "5ttQMg5WZG1YVLAYKtypAjAXteoX4ki1mQzEUgAn3wjK9tsFPkYN7pdfia2qLMzkXEeK1ngmZf9PWRCKEGBSPYFo",
  "key19": "5MgXRp4cumRu4JqNJVCRYWh5tQnBw6kGbP8e79PTmQE1WfNhudZHxAiPMTjgajnxN25HStj7UQFWYj4kppdvoSRP",
  "key20": "3Wn6YHFwFovpZUaCwpWm5SiZxrA8tpPchFwTZ4GnkcR8oPvuFNFBbFWnhBXriZDPJU6tpVZgeQTchZEkEa2z3xcq",
  "key21": "484PAd7XBFJrqGvXhgwT46EjwkzVQsn6ycUiiGHAr8PNDUvq1WFVN3aUT26eB5VXkhbuTiW3KaVMSR5Zr79kpovm",
  "key22": "5iJcREeaGhfJ4UJ4F8XbufSm6rvRscRCUfCPAm3qBHwo8SLG6UzSTsRawQRBuAsiNQ266RLbgFwuHh5Hs7LA3wsT",
  "key23": "3Dmupaqy53A2yeNu26TA6Awz2eTVEShvVHeqFXWXU6Bv8E4rsRMoc2xFPCpFZi763SjegDn1PuyNjK3JrtzGxjvQ",
  "key24": "5mC5Q9x94LUcQJCT66Guneo7gxi2waxaXSFC83m4WinQ2A4JFXUV72VodNQrz7mffKcSbNXPsWogEwqjGveDVJCP",
  "key25": "v9F3HvrnZfQePZkBPEnS14tkdgauqM3x7zAgUhNYo9Q9DwK66Dz9zUp8rjJYTBPFhk9JZNH4LnHCo7JCcVCWcPM",
  "key26": "SeHc28s7mANj27KZ3z84F5Ktgjf3wGjooHLm1MTTGJMWF6JX5o1rzBVt9AFR6g5wZS1K3PbRBryhPbuxeDgKTgB",
  "key27": "KDRzFwo8U2izVs5KjL9ZZotbR8aYETF8JMXBM32ydoqdRfgYemVBmHLrYmCkCnRihCidcf2xiq55WM7MYAwE2ic",
  "key28": "3jVn4ioudLiXRwsHqU6CdYsB2PwA4qg1XtkS9a4pdAUtba5BtM6XwzxaWEe2WuXpk7Cyu3fZsfZJckDcgckvDt7C",
  "key29": "5qU2j2TFPnsypyyMeTJNDTeyzDLGWsZHpJvoDSBB4LPnBSECF3qrJt6xJMcqLRXyAZMSvy7ZYzeYyRey3cqcHTk8"
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
