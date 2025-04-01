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
    "4ToQwaqQMQS19WEZUzenX2ZwdDE8z9GwT9Z1H17p4rvS224JJbNE5jDd23GWqgBLpV41f52UTRT53FDma2ZbmGCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9CJktQC6DVheE9aknRE67VujX2uZgV1tPc1hrfbHaWjnLqUtP1Do3KWsjwjPRMDREuoJ3NXh2nLp9a37SX4yLV",
  "key1": "36bBGNWuCzqVTMjs7GM2uzFscVR8U8ausfLxZR9XcAgadzFpr8ro2kE6dLLpaNUeBCuBgyB2a1vtJG3TnMQaxXix",
  "key2": "2cYUQAofWXfiMW3Aiur9pyDnUfhToyPciZL3FQAmyUbmzVnQdwh5pfwG3H6jk6djwFMkePGRzUniE5VqWnJ46vbj",
  "key3": "5iDFSbGF5Wp8iKg3o4bkpyFkwitKz5TQ4R8P2dp6ZSukKiYhB2MhcPQ7rtvuHcpr6NZhnHf9QinxDDJ8g5PWbAsk",
  "key4": "3vDK6B9uiw4LAzHGeGukp3G218XsMMEzC49nhZLHks9Cgg51x8bps1pHnA4w4jdXwdnxDmbDNiBmR6M9w6P6SVZR",
  "key5": "42CSdqjyXmMFUsixkWfWEvkF4SQ1vtKRneDoseU1hfxov5Kq2VhonUioPBgEYTyxm6kqw86Da6m5evuZVkQK3Yon",
  "key6": "5HXBvSqo3nSyunfcUa4bQ2KQwBHNo1Uq1JXDoBXGHprCk3ySMDCqdie6f5GJJFty4hjx1aimyZWDpJggZSro1UAJ",
  "key7": "3XwF8xQE2z2Uvw8wxpmpMi61AfM1rHjn6EYUZAbq6mkeT1GPF7N6rFPSEJUDJTHhXAtn2pycJPgYuT3NcKfRRweq",
  "key8": "2LocYKTe6tn8n9TLayybuEQeF9Kwf3TTFfxzfKKKg91g1XbMogmAVDbGhEFnabi4AdQbKgGyqAiAEw2CivARXLfD",
  "key9": "2vF5wYK3r6RCa25o1bm7DP6t6DRJCD45hbQefgVwnRttFm3oq5bdcYGuAmdkkVbiknV3e6quqRoeMHahtNshvvAH",
  "key10": "5NxVHfh9UdPnP97qzAGEYDTx4QyRTX2cK8yYke6cuikfpWLXKNuDTBB5rNbrmqH6JVB8aHijv7NVAMWtGwaexnQm",
  "key11": "5NTQBPv8DubkMCNq3wTEwthMK7tncbpga6t1oWhPXpF3a8q85SiEz419i7je9ai24njVNAG4ByPa7MjQeQEArHa7",
  "key12": "4CZ7FVr6zbkqN8QZNZvadubkk8ihphtCBX9C2izRoqgT2LYfmVUcVGTZyisDeGmyScxBZ3Vy77VQL68161eqxA9A",
  "key13": "wQUkn2uELBJzycFizhYfZrQFAaFQZqdVf8w5vrmJvBdNt8AmXuW8kW7oLW5eLwfGnEy2E13FDhZAWxUxj8mLMRL",
  "key14": "22dyq9EE8xZkudhRopMe6si2G5M6aYw95nUoDZ4TZXW1PcoiHYrZH9JdxCq4H4FojP5uGQTejSgkJYxM4Sf6hPUf",
  "key15": "3ws7cxNYE7xUfHXRFJD7fuFirp9SW4c9jzTRcWs2WX9NT9z3nrn7MsodVupZ1qGjXAYhhV3cyXxDKnAPd3kztYTD",
  "key16": "3fVd77Z9g4xFoi1jEbChsbbpKWg5yTFzbB2EboKsVPKXBR88ZbLoQesSsV6s9rk63pfKAGT5YNG1re5PCLg32gC8",
  "key17": "2bjAcEkCSo44TN8wo5WySgjiavmYNzUNxQF1WkZMGoyCFhKzbDYZFetzK5G8FM5h6jTT8zVK5aJ2fPpeB6VZ4Kb",
  "key18": "55q3CLKxwyu5jNpquHDFGY13aY9oFir54S5uMo8vcwTvA669bMzTGkd4pM8ZAfqV3wWxzqj3MRpEuJcvFx4oYX7x",
  "key19": "4dVhAyZcNxxd9iPYKwitvMoie8bfgPQybSB44LLf1dQsHYb2pffsUoHy2N9RnVysjpvoauGcnxMpJVRURWzJr5Fh",
  "key20": "fLPxVS25YkfZAvW9y8qBiGcuHugLj7dyHUKd5CKZGBUAqet67yKCpfK4Tn399BiXP9s2HbPBkDLuzD2pSDGLU4x",
  "key21": "2GdCZJKodeyydmRWQLE53NAbSv4HLrgmbfLHShRZyDH2guTFWCJKqzWLgyeP7A88KLV16aCN6i6k6fjtypceVkwd",
  "key22": "4nXdteubWCaDZYKUSAhfx5ADAytFuyb6JfrrXwWp1rYCdhRY2vKRqmPp4e2Dy2qEB3Q4bss4qVMjjukWx35t8s2B",
  "key23": "2QzNPsn567QEjMeTrk8ypwd6kWpAtJw8JoaETdEvACTeV9JiFxi3fE41NFDReD5q7N3tnCAjnNQwQsT6yMXwoqUQ",
  "key24": "cciheG2geBA6EuoFL3QkvYqSAr9azpbHpX7NyDPPLozYKtMzWLsdGZjt5myCjVJKrkZ4mfjJ36HuFd1ZeYs3KVu",
  "key25": "27bTitV3ogKBsxQVc19mHNYXN1v3KAd9wGZN3S9zgFkX82oT3yvhocy4M14Psng5KMHHqiVd5rcbjBsDFotNNHQi",
  "key26": "3EdZVitG85WRH52ktNVYhuy9K8VCVnqe84r2C7XNVtxHFJ4UqSLB3evfpLCYctp8DA7jtwBf64aYqJnaeGqsSDeJ",
  "key27": "2hoDDZyuoLS3ZWDXdA9XfyXMjZNq8arx7mX9E1m7EMZwbxCAsUPkT8VpVpdgQ3fvfB8JKA7RPMqgxyuiU37ifpxv",
  "key28": "3Dwb3K2i3BLMonmtY1fLtAmfvup3AZ59QhCMAB23Gztw8zWnwkEci9NfmmYdf1o92it22eweGsDsDjAKZnwJcYB4",
  "key29": "2zZHFtdqMQ3pwkDxt9HHRVJodDWieg3w6XJqZqcE9wteqX5mcNUYTaotTZ2FzZgPtRm5mjUhFs3V1cazZC6k3qyp",
  "key30": "5jAqBp95n51jRFhXgoR4Q1KsDhUGEENgM1xmTHc6yzvgEzFwV3ikjCTqfb8Rha421vru146wfjc8Yw4izme3kZiM",
  "key31": "3o5UVNmQu2MYUYWGbXvCwDAoopMc3LM4Q4Ci2TyS15RfnX6ft4sDEJGbqdA2cmGTsXYW6HkFUKrwLwiBoErBavxL",
  "key32": "27ecUW8YkLKJcpD99vTWtW146jvKPYeCMgYHnZmCNyRYE11nRq6QxrjT3WiKdpffYyACdPZ8Fg8wWzuVrgyQ6FjM",
  "key33": "5A4TgYgdfUN9fhxJQtRYCctgvbQyjskKNMKGZLv9xSmNJnJXUdM43DEckxh5ubgA34onEaFzZKsd2ybpYU9BVpVg",
  "key34": "32YXz6n43mfUc5pC7ciGkYYzsFBxWrXv38HCnSgdLmFk6ZrgciT4ZQEnRU36nLqkgHibRNxhGRGFSb2VSqDEp7zH",
  "key35": "3x7Ar2RJAgCMutrL4LJNHeyehTjCidQPNhbA8UV2mc7QHwNSWVsxNFKVTsVnG4JKUvUcSohv5A86GxnMoGenriVq",
  "key36": "5DiXCNYN1VRiUQRHbBWMLuQ31x6VPeejJWzefnqLU1mNbTibu18PfKNJM61WwzA1dgwonrJwK2kRXXJpwcfRtN5s",
  "key37": "4a3PjnFp1GPmqjk2gkZ3gNyRT61jFhBh7ajiLsCqZVEB3TBAky9CkCK2H7zp2vMD9JACHBrpYgVGBaGQ4CvexxyN",
  "key38": "xoSMRNaebcptTk1nr2LPtesDJX3AoD62s6vSS1HduJoHPQs4y7dAuY9ifTsYwV2owujPX5xYwNYzFHcvPxPKJEa",
  "key39": "YTtAGuAmXRwJZLFiQR9DxvP4xxb61JXWWPE7xLiWKpTLybZCFaxUvzMGwiauq5DMfoVtYJMVbHcNTZ6Qw6TBBGx",
  "key40": "wg45Rvepi97DwZWSxjkFNsMZQMHSXvaxwLXbr15AEAZLmKwFeomDu4ANHYugHV2RuBBJaETye9FwQQL2VsHFETT",
  "key41": "4vs2ReW5M9Ts4Z9hMT4yUpdyB5hdJ828HyRR1NWqHcg8bERhotgE3HFf8j1MJK7h33rJUdb7NrFP6bdK19yJafW8",
  "key42": "35KFLKwvWnLK3jVMmCV4hWnMgeG9Poitj4nkMAzGe58HRmicQkKUYxHFCDEt3MUXAEqP1Lrd149XmgkYHoaA8w9E",
  "key43": "2L9JC9P6axP1fqqmsEppDb2Au8L5Y3y8RonkUh1PABhbHMpJczEmpcZxupAj7hFZWGYAaBA2zgDPdyRJ2vdGVuD6",
  "key44": "233nRmESSN2NxZrb2FEomW3bQnoB15bafC1SBnVnycw9ne25ibB5LCwVLUtzH8CXNND4ZVaXwLtmxFKDwQJP6qp6",
  "key45": "2P2CFJZftxhEZGD8kEcYFTc2L28S1RHtDG5GKU3CtcH4BiFN7kKeSTh4vKCDoe8FiQ6Fj4L89oeGNLaJQAKVhc7",
  "key46": "4DB6aF6xKTa5icsPaz5uDNUqkTrvy84UDjtwzzsFSmPr6gkUYb9ACLAn8HJSVsvyg6J1tgNBmhRQYjWuoGXTyRnV",
  "key47": "K2ZDQ8c1hcLTbu3uD1gc8m67Lp5WDb6N1bxpMmkTFrHKjh47iL7hp4nvutyJxCDpAS7unGp5wbzLs6CCz6P1VqC",
  "key48": "2Po2WJobmXFt73YCjretKpy4kkgzDhy38uTbKKxdXyyaDjnftxm9jxowbQ2quWrtBbmZUGCL5XbGNfrg4B2trWSZ",
  "key49": "2w1haiv9N7MRdawCf33DbS7T8R4NA7vndfqcDBDSyeA8QkmN3REZQeKgFcW1jZEv2DJJ17RZgL3vykDFheAca4n2"
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
