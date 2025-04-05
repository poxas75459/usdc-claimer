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
    "yVtzW4C3XBZrKerFAJpXXcZadvT8EjC565s5mzCvp9bWdnv1DjG1zAH99DR48f4s7ECLKhka1n2vJie486nPE2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UPtdnPET8cMcujAkTYxaufhobrfhh8AbuiQQQQY79sxa7DZH6uMsKioJyeLcgehBB85AJF53FxSGoTT9JfcFRm",
  "key1": "3Eq3c23roJj2uFN37ZQ2WSmBZNTxTM3e41vA2JT8mBjoNhwDqr4sxxCHUAz1jzRoEGhQjC2JpQFqZ9ebMmBvmZnN",
  "key2": "ZE1vdAdLtgoKxbCGQAaE8m3BvWwB8mvMuhy1GpQSfFZYgnokHGfhXPfSYKhEVeWq5kEybzosYv9W3HEh5nTW8EV",
  "key3": "2XzSow6XBSuDxQY2fz3DWKmX6UvjEewWt4GkNDugYXCmLpcZx6dPQQ2hVGPU5zmQtyrcxCGzCwBYF5zhdRvNXTXd",
  "key4": "g1jTyD1jhzUKALaGBijziAM4M723SkxTmhgZ6xvEPoxbsQuDMpbGnEZkF73LcKRZgsFajriBqUU2mgaobLUCpFW",
  "key5": "4TeJS4riKUdQMMSvxX1kWWnaNZjyeyu1LXBkcbmuAJpJMo2Sps79jffyfdGVbdHoFS3P3SLjihR6i5pvycRkGPEn",
  "key6": "5FuPdBFP2Kr5JTyUSQ4th8JE8j1pa13Wguijf8VfgH94VEFxJR1YzkGNYyh6szGhBCAPbtYaXcTSkC3WQo7aZe7G",
  "key7": "4xdPViER4EWUMqDEAvEph8XMVaWTE51BDHWdrQmirZ38tPsrzJ4coDVVWanEMeCXj3ugM5Y97F2uLgz7yw1jUgKQ",
  "key8": "4iprdhqbCsFwW5u46bHNAFE4nEjhwSzTJe4vLyTzsZYe4EgGgBFuvfkYDKRyeisMjSLVJ9SjZikAoy2KPcFHPKcv",
  "key9": "4acXGxhZkVvkaVHNyGgW4VoPCcmejqtjoq8Bs22N4Ver45c6Mr6r7mDta8sCEYdUQywa1ZbyEfwQuAh5vXPZEQTi",
  "key10": "rT283B48zaFWuqMwcU9K4YUSxML36Xn2CaTjdSPRpD51XF1RoB6VVDSBnxmZMqdrXWdShoXcLUC95GY3yGxfj8H",
  "key11": "4t5HXNvWbTr9ACbjfT8zAaF8nVeWk19eDo8jrZbaAuctdYVreZVbjotpFjZDCWmuP2mYT1t7yAL3zd2FmbYvxpWB",
  "key12": "671mgVqW6NAaDCWGVBEr4FRDAFHyg6qGahFYfy7RAAUzJfptdGHah5YebGkiZ8DZzh3SaNiPHrbzVDw3bjhiVKmj",
  "key13": "4HZr84sSMM1gQvafUEqL7LNGyL3zADHg7CaPNVxHhZ8mNa6qzdH5Mkm4VkisZahh8vbj9dwELZ6ocHWiNir73Atk",
  "key14": "64yVPLtTjpQ2x81JamQRbgNZ35NR4xiWbKuuCdc4wrK6Mmwc6AJhnWVJytxWjx61cjxn6pYboqaMAYV3vTbEk6se",
  "key15": "5eRXPkw3ns5SQPyATcZ9CRYEaPYkp9ZFkBKvwWRfd3uwKTGSmuWV4xs4WKqiB6NZD1p2CamBkHU7f9NsKBFYfiXt",
  "key16": "5s8sackhciAwEqzr6RYtMeNUCzTL3GPTyCNZCjnLLzoTXhQYSfzjzCR17BUFyAMBQd7tjmTE24JSRSYwaAdX5YHc",
  "key17": "2hWcNkzppqZExj53XJBWDhi1LdjqzAJcJ4V1FqySYW46dSmxncAaAHdgd4wWyJYTJjHTTHpacHiFRs1BaJJs8SHd",
  "key18": "4J3W66a4jMW7FUM5cjJtz8YWdRFQMrF45mqskP55CphVor834V9CSotBkhhoJSkiXULxEVaqmaLwuYXomrUB3y2b",
  "key19": "5k32rX164viob7M36vDdruVuxsMy9bbQDmDhkwzhoApe87NzdRGcypxkYEZjyLDViVYkwXK1FY6VsfHA7XfvdFY4",
  "key20": "2eVsN9uy1nhFHgYuTaAv7gjRTY2W3LbiP4fgp3FQExDcrBr22ZWJNBacr9iyuZSH6FZCsBaAG7JfKbECw6eQBqsf",
  "key21": "2RHgpghjAP3Uqx3xhH4pDSGXsYV14JsgfGmyGYwbhgg2etwQgrjcHYB7DGUWzUALmoFhLDfEJ4zZvC9WKZUHYqrg",
  "key22": "4JeyPMNgk5fSAg2MgdRDJzJkbYn6TZ988ForheaY94hn6yZP8ZgojV8uV25aSdCaWwezzV8Xek5ZuHxrAhVLpBSr",
  "key23": "4P5pGzMsHyUnzZ1MNMyzDhvUYQkBeowgnhRanYsz8L4fHTeH44ePCQsxSV9BLEN6DwBuovpaxNFaMNABCu6fhQ8W",
  "key24": "C4J3ryL9ukecxvbpKMMBD3VuyqiZydHXyzxWZRohoJpNJvmQexYoDKaAHuR762gQJnZFaqA4M9VFBeS4ViJQ3ub",
  "key25": "5q2ytKdMLs5aNEuZoR8Gid92FmLVdthdGfpmA8CvZPrAf3GNLSFSzi2vGFvSuCtHwrK9dDd6pHKP4DCzumtTXmiG",
  "key26": "58mGs5WWPSEq8PpUBoqCEpnNNatYg8a3o9qWrf8BDrXGSq5m8QfhLUv6Gnkj1iJcRqGtaTGeiunfNR2YtvuTr9Av",
  "key27": "4kMkuv972u6qYSWyZ3TzVzQMYaRJoyNV3VAaszWrVSs8YWwaTr2EJGyy23gAr33TTfPNYKc1gwyGJtCn7E9HVtjV"
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
