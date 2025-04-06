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
    "2jsLP3UAUyWtpE5wMDTZad5je4vjoHJgRppt7LjggxsudMQ9ADt8neTqNTwBB45oHXRNuMd24tW95YPy2amCrVff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLGtZ6W8XBVm3xtuGeq2L8hYWi8KM1cjX6pKDbN9ukDty5SEn4T7iMyJS4CzSZxEfXCJgr5TbrauTAEkMLkWcHt",
  "key1": "4X513xcXqok3QFDWejXnmL1EmP5u8vFadkFxt2Zt4zKei1sspPboAgfwAedKSdtC21B9oU3CE9Ngc3fNjjxdNQEo",
  "key2": "3yH8C9WNaL8qY86EBuxJq8PJYxwudCSyjnccJKS6GAeYP5Xe5XWPZLzHNwPboD9dfdApQc6xUSnDPdvNkdJ92RyV",
  "key3": "67eJAN6N2nyitbPuQf7JVNpt8n9sBZjJyRgwX4g6N3fCFQvgPQkwQpd42NGaApEgTtnVSxCEAiKKJw1LACFwm4Bn",
  "key4": "3SLSVLExtZCbmbAthTKVQcz3oSawEJAYQsw16Diw5TxTMzP8y5s3qrkGVPNn2bmqHfBWKa2Aq8Q9SjNiXqCHDa3n",
  "key5": "4WQ4gcxe5JuzQJxtiejUrjwGk3cCsz4fmgadri9gCMMCMURXodGXAWnfGx2npKZTFLnKJVDi62j9dkQXh3iWgeTH",
  "key6": "4Sx11KZfuqHwjTas6VJc3DhDBnp9RGbL4LAh8HYFqcMSX466VwsHvsgozYWuwuQti4oCn8SCgH9MsXZjadVM5XS1",
  "key7": "3K7BXbyXBaLkBpjLktQjqUrvU9MD7rrTaePAbXaFJstzfuf6XfBLcMex1nrmhMxVCNwowjZjEskuXVkshEstMM17",
  "key8": "2TbwheutqjpWafcnGytZPR67JVKF32GQ4QcQqLKZf5LjjXnKsogWvNDzmy7HEYqf2oJ9G1RXHF4KctvpmHG6bwjC",
  "key9": "bAMmti9bZ4P5uR8YeRdGgtWiHqbeR31a4SnBjDFg951cjEf3UvySq2nFFCV57h1DgAE4ECHCAHutPpTtRjARcDM",
  "key10": "5pAxYWuYGAAkj3oK2aja5BYAT7tdzbRrXsjSSDQzz9GDxpV9yx6Khc4FFVaZ6AubryEVbmKLuL1FVLPAWf6H39Xp",
  "key11": "5faWbp72VAX3LRnfGAv2kafhxQU1st1sPwWQwCwbVfcpRD8P8yatSX1o1a5ArH5ZHtwfFqiHydzYH1Sb6rzv7AXP",
  "key12": "2id1rhqopFwchjJ2CiWhF4FoBNjaiyopNrHGwQVWxqek7hJcVbrFnoGTL4FTovASWRpPiwCqdpbxtzS1xGJ9jwdN",
  "key13": "5qk2Caw2UwUN9yWxtX46GC1ZceAoPtv5arNBGJ7UUxo6JD661thAmgd2PdTHpwZ1yvrPCKSKb9c6zzB9KLf72Jwd",
  "key14": "527xspL12mCyos2eCS6pnECNaCKehvNzqhpckfu8wfSYh42q54kSikcdh536KSZoV5TSjkaVBkQG9AqJNKuCqQH7",
  "key15": "SHbS7hkpWmEuKUdWXA1gp7r1CuLKpBsdkLb9RCiJt3G6ipQaqPceMeJCW7gF5SdbkM1RFRddxykDsprzf6FBVEK",
  "key16": "3SeCeACYa31yBGiuEZwnG8GFLWivMKcHF2HqqqusBM85Np6M5LviVnQbLuWoURXV6guF6Cfa8ntkFNdkLkWTjP9Z",
  "key17": "58tv1s3QBUJ3yYtzWA8R6eFTJCQDrL39Ljtsi6CjULZ6jqiAojZHvNAgwn9yB4EucREo5hq12H5DGWLa2v2qHuVR",
  "key18": "Kpytj3cY6UYr9EzLQW6mJy7dr1w8boWJJV2qfoZx1GyDZPtXtjKxnD1SJq3duX2FdgXRMMapijhxAU3K7mihCtg",
  "key19": "4MxFZ8eWUTrjUdacWBdsH8L3Nsh6fpVkjacbqBfHpZFbB75MJJRSTtNdVZDvz62PxWBbXeqR8R4jUQhtBsopNKKo",
  "key20": "283rsgZ3bVaejZwFczeyWD5kGUwf5sN4pf6rUr5ir3uFyEu3Ksv4Fn65x12ybBcQ8LQZM29SWAn9PSQcLRynUcno",
  "key21": "5PZYEpCGjDnLe2U3DSmgzG4oN88GevEk59t2DaXgYhwBkT7KawJ7DNGFMZGi87HA78mATLee3B5Gxv3vkrpNiHqA",
  "key22": "4NkYsvkVAXQ4ugdyua8nVuy1nNQ557cU694xWXamx5K9U5wFyFEHQZExsXL9vWbAACvB9DUocmArHcV4rJUBvU9n",
  "key23": "2tqfy9Tj8oqnKGZbU3uwjMxCAwdYvVSBdqHioHVXtuqP6dDdd7K3ZwKJnXreqnv45budT6tgYFph3PGXYZx77c25",
  "key24": "4fC2fDajMruQwxu3t7R7xx5k8WV14k9HCW4oJYKH4dP2PxQTQRv9rHuSCXsrH3j655nazgSFbSSuvdSS7ySdsdaZ",
  "key25": "5Ym3tHNkaaUznYAr7sN7uqHeSoZKU8ZL3vfyDhoyaSGfbzWN1qBMaXs8oJEmWujf7FSyBpxXAH5F1yAPdYQEuA8v",
  "key26": "2ZsmeiMZs29znDPrcMJQ39EhFidJcHEutcP899A3JqWiaEuDLjaPzpjUtJjQnig5AhwrZgguLtUGF1b7thFxEXBA",
  "key27": "3PGMZyUkrwwHohDFbGAAyQfhR24Y2Dx6XM6hwVLYE9BUWP3UXG81cA4yo1ahCvGUgYfU4tt3uB3L55fFR1d1ZQbV",
  "key28": "38FA9fyX3xEYN2vbKnQKzn4uDGCUfjuKkDGBS25afr3nm8uhrhAxabx6DxXiQJHETjW89ei7v6dH2MZToNxBULpD",
  "key29": "5tX829iYessaEzqpkHovP5NU1irQ5raLmpP88oo5niVg91fgUy9qYERhzCYNXJXkmLeEjBurCpvcz6agmr7tFUwe",
  "key30": "4pyRknq4NWmnetEgQWF5odHBb6T5x2yZ6vX7cLjZF5rqbVaemicWX56nXgriC1jFtH9VAFfi25yXxQcJwBJJmpkh",
  "key31": "4NyNyd6KXCUAjybyhvhv7VNFQmGfWDSxoFMRe7VUC5ZVr8WNSj16sWuNxk2kR8HP1D3SC8JxcHxXekK6UwvvrLXn",
  "key32": "34ds1n1ekyhqKcGvc1jjS5ufJUH5UhFPUvkoZXR8rFU5YnbADgAnadwrVN7Cbm7xafh1M6Qfv5t9tCqjZJzrcaPd",
  "key33": "3TosV3WZi7YQvbo3YujpuT8HXWZzhyYYh9GA41zBqyT9r9hxP4EvTm6szMbyZCb2UJvWpnBq1KRy9D8nGpPj4MRX",
  "key34": "2en4FhhAyzJC9zgSVvAAW4uQ15DSbNFBfFcvp1ZCWQ5t8gELj31CNw9jyd6zs3FWzRw6ejB5twWBxRr2zfBMhbER"
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
