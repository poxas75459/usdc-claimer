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
    "2bS2QJ536xmpxHBYTkc7dNn1vqicwFs9Lb3oZTTdymSHkKtUoBxiwcNHahxrrfEJP9WePXjxrMiRnhbKtrM644d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPNHRnkRv5knj5TxBStSLuVXby25XDaLc9XM8Luv9iaXJALByG9NbQWj59Rc3gKSM5qcvdaCg1zGpFdTwE6WDp9",
  "key1": "3Gu7NqdZdVvE2WXakSG827NDrZPM2WopZHoK8RNmafjC71rTavVcpBn5MntqTjiegCEWzkoAZcYBx5vduAK3WCcw",
  "key2": "52JKgjcq8GpeVd2FRbPGXom5kEk2BDr7xKDonwsi8Ehx5acubH9uqoBg2m29ct9LiZaPDkPJtgpFwevLM1RutLE3",
  "key3": "3qAvNFMmfmnZ4b67Vy9uX6uAmsAEP2dsMqAc2TxHRNUicjskmBoo4e5CnEtpcyrqALQ4nDHtdhFng7VYWUmrr7eq",
  "key4": "5BwJFycVZ6SfMcBK78ciuC6xTBZdxwm4HhbBuLh9YgSVkxxPtKHxB2f6a3R8rUff7fd49tXd4dkGiG9A7tBStT6n",
  "key5": "2f2t2ganhBY5WShVWoshmyGANDgjEkq9kGBZMUCVwQLtFjfxqEdGbdRJDnDKBmjXNC6XhQJ3Ckj677xuiC7DpRH7",
  "key6": "AtPrHiZkC64nGd1A2EzWiniuUX5aNCwTnpRSRdCzRb5ze9avUN5hTQkULuvhXTNtSi9FafKz2dzfisnCzYJ5ghz",
  "key7": "5tv2kFZff6VWhEbzwuVdSRPv9DXsTicwm4DukKin9HdMzxpi5sFrnSdQiKPBwEpXdbv8K7QbosJx77P8PprNv9N1",
  "key8": "5gnqkDggn47DCLxWYJga4FHUPVxypxfxuBGLxDhJSkVx1jADGeXUefw4Qn9Jsn1fvqGi5quwd4VJnb4meaXBmEVE",
  "key9": "24QN7X7HBHC11BzvHfyt4voH3ffYaiBPQ15rv1nR1jnSbx68M4XivotS9aHRCeZi4HTR9syPrvmJaeHTPw1ZyU9m",
  "key10": "2SViK6TWuB8zT2WQpDXu2p6XBHibL7SeXzpGFLLENKmyk7WF9H9CTY9F8hSdoimaNxQntZFLXk1iKVueGHd9rXJj",
  "key11": "32zJff2uyWuHPHK2ABmdm5zfmQuvfwwRDxm2G2vbHtiNX7vtRMbXC8bQBkKMaRnKF7qoyBqyJiEDcsvnbLbe5CrN",
  "key12": "34PZ2RCaN25mx1VmoWdJVAgbCVVbHba78hQDrx3JcktnDxPYxjHbAXBMFob5afPPaCz2GbDcoeZuq9oAeSba4uQy",
  "key13": "4Auyc2PQqE8GcfwAqN6bXD1qWiVFo8hQDVox6aJ42Dkghs68tUSwtv8e2d7618amo7tGiFZuAtgCpeQbwYfCsLBd",
  "key14": "3wFW4z2DD6yZVUnCr8oPY55geJaVCgPE8bbvKqR5iB2x5X777pDQjFpMSVBSog6f1mteLVZ21QDmnfouzETfGUNs",
  "key15": "jz7Uwv6zoCgUJ52DkSfHTGJhpTQxfendbzY49gUfDG7acFb1tck8PpKiSBZqqTw8vQBxzCQbyeAN2QwCjzS8jMe",
  "key16": "59rPpRVLjhz4V7ZYA1fQNFgyaTH4F85YBNGvmqjMTQD7pyKS6viKxd4XTzvevkgtVGtLBTrbrF1EgV5S5YU7yzap",
  "key17": "2rot1WEM5F8bpi6wwGZ21UP8N4boGqU2JqiBCxts9xuNvWUunhVxZWvZkLcwQskBgGocYkpV74jyEK8apRPpwDBq",
  "key18": "47bk97681jDD831DjzwRWgQY7uCnT8RFDez1qYifoCMsZRUyr99yH9aqtKXYs8kXBFT2sGMNg13ucdHXW36qNEAo",
  "key19": "212CJZ9UCuWEPgNgYXszNM3hgmySXDgUqPQcDDDpKu6gCjZY9MtpWJ937262xviP7AX1DMZTccH4ENNgehhbQvv5",
  "key20": "2VCdg1qSAi2QsR6s9VBTK7pQKAMLCsP5LYgM3LtPpx4MAxURsQfrUxYiUgs3qxdYAXdCcu29GjfHWn9H65NK1ygF",
  "key21": "4mZhAr2ZmDU9TxdsYVN26jg6NdHh7iPytWh3PyXEs3XQ1et8Pry9M8VFqnQGm9sgvmoRfFrhKSwMLQad2Rf93BRw",
  "key22": "3VHmCW4MWS8BgXE2hnT2SmbFK28ZMeB2gpeC8Uq36tj4hCw5yCV6GRFVPCj3XNwANCmmmyvF4JhNfQSMNxqx3BqP",
  "key23": "3QULQ7wgpddR3Wtbr8948xd7BAG7n73kJxXZz5XcCyKxMkK88gjv91p6NV4SHG9Bq1cvPZA2PQ6AKNpzW6kWy1H5",
  "key24": "31LPyu3bcGP6ka6Eq8DAGxvVxpVBeZzKo27MxvtbqTwDAMpym3s6hszjQnNFHZBhCFyciavJHe6hcmCFnBzntRRr",
  "key25": "4NjxJRP7DoGxBdm6wA4hHtVFrg1hUv8ehfQDcKSppDzo8iKbb8gkaGHwAGf5VgVNqgmnY9WXEYH1cQMu1zLfguMY"
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
