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
    "2pcDrT5joQQe8GoGpQouUoFGnW8Rd7jp2DpTuhXJxAhZuk5KVD8MsUNMj6D1NbZCPxZ3ZyR6ABQMgRxy7iJXX9TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8nwGW4Xvmwh3Re6vaJUPMPrFVYUUAht4Ktb29Q6LK7HtwMENssjHHZomAr7wNBvTUg3D46p6EWqUaNW5RrKFNi",
  "key1": "5vZ5jkrspjn7AcgikuRpi1Rmi9J7xeCF2CBeMFXSJkjnu5pQe21D3q5iKFuvoA9xWc45oQqYEdPgpsLjMRMN65a3",
  "key2": "5bF8WuD7dzbEv7hhRXEMvM1gfQMWd98kHJrz6VKkoWcDGQRtx6qu69iYNgfGbwUzcXdGtU4yS32YMkYdwC86FccB",
  "key3": "mYTpTCpCCKRjyfm1CbgGkQiQ56ZfNUo5v4avdRwx2TrMErGnAUDVmANu5dTXimoWvqbWWCSEWNrpatGiY7mZAEc",
  "key4": "31KaJ4Xg3uAN8gT1TJr5T4Bi2ruwV4sNeHFzWxeqSdmDhviGtvKZQb5H8tLBtdHwRhx5rfaJYmcaoFE6VmY99PyX",
  "key5": "FAB3sistnMziBnBvNzx2beLBP8KR2m5CGpnko3twwKC393Y1q8rzJzaEtHJtFwxLw6mM2BFNW1o8tqheVSVrXNg",
  "key6": "4DBU1DSHH72WTF6fmPKUzRyeUVCffhA4opVg9rSxKXL5NgQKfDUsCqYNUr7KAnwuS992sjNKrWBqVbPxyygHxQFk",
  "key7": "63Vwja655Ndg4vthPAvXgBQ4tPZHKyqijpj4Hkj6vLGbdXRBHdjyE1fmGiBdW55zr8JWNy6YZC68guebJuK2DxJL",
  "key8": "5eN1xBpbY2ZVoZk5AVKPBRDD4KoBFsmY57YWpgXM41bMLWZZGFnvLqgAPgHdaaQRquN2ffdByuMnT97hqnyye8TA",
  "key9": "XTeBA1H9JPKzGi8WKz52WZsChTasmngu4NG7XgcwPJ4YMs7wydHZv8m4oHLpcatXrKk784jyubhh1Q3w9kvRBpk",
  "key10": "kiyqVnX65kybysjBMnUgYg9qJiP6hPH57vkCSwdTybG3N39HKynVjAMbc5u6hUbVVzWFkk6R3YcwvYnX6ccwyUQ",
  "key11": "3bsW7CNNuRHS4u9bt1VEdv313caYTNLpEd6joQKP32JBjhrXnYxu2kKy6v7aHz65fz3sMhkYe7WLcRX9uJUz5Pwd",
  "key12": "FJGA6XTdkVFipkgLm41LSt3bQwuxTq6SUNCNwXonBNkbDsTdo2pMiK9wnRj55JEoGBzuw6N3JjA3QeMLp2AK6aP",
  "key13": "2WQk3uMSicjaZNg1qeJ84pGH93RvG6HndA3AvHeNBif5iZusPHcrYzxw77ACaaQBG9htwp28mrWgsjK7dP1ggRTi",
  "key14": "3zXzMY664nRg25qvEDWxShEC2GdRkQYWd1TdbJv67BPh4g4DXVgQfn9XbywLa1pjte8XRvwF7WXRwVPGHezPBezy",
  "key15": "54NRuVxMpFDhq5nLWZ3tToxVJq5CEaGuoFb9MTWZra7rfvmsUDQsYfC4Ly9tAHV3MKEE8oAx3Tw9hNKXU8Mznuzj",
  "key16": "z6WnnS9KPrSPu6RmtAWrhfrYmwABUJLAhR6e7BiZGVEkKUgP4TVU64MgsJXLBSosfm4jxRg7QYJNBsjbM7bGHmc",
  "key17": "wqfHmrmHAUXws5ygxgshMmwyhgqxDLgmGib6BScQERMz6GmWuAWRpSm7rrdmjmvVCKTQ4Tr4rzTwLMW43BCYrWg",
  "key18": "2Ljr9XbRjpq3Lh8g4NafzHivmYsnupQan5t8Rf4LdHUNM6FLJ6wZ6jgoHHhYrrnEWYDcncC4Zwtf4YqJ5qwtQXUc",
  "key19": "54Cv1AGETr5L1KMLwSmwUoPHNreFL2k1cypboJMEzYTXoGSvEbBhMCBf3up7K9Gq9tvaJa3MtCACkKei8PGSr3a",
  "key20": "54gDrW1hYkJLNfCDAhSWuL2Yj2CYugvJua155MtRfhyrpR7u6e8waBFFug182ktQ2oMKpb1govBKNbUWJb4mhhbk",
  "key21": "4SsM65BcC3ecfbWzHubfTs2wLvvH2mGaaozH7QU9WGfCqfG7CGLtpfbfq8xNqzyd1MRBtNMuzmsqf2E7EVJs9fZT",
  "key22": "5JTDmEVUb6UewyZT2J4BZbojYc2nGhQK5F5Rc74yThZppGogUH1XijvgtjLFNWk62VuF2LQsaunUCvtTkAwhp5gh",
  "key23": "dpCxcLbkWUvk3GZfiMibTdV93pmY9ktZh3JGgKFHmiJL4ijHgVyonWzbjF8Zh3mBUt3MBCmQ8o3MTYqYAPgTZV6",
  "key24": "2tHELGHAVx9hcfr9nwihmq8jhePRy14vJnsj44UicJTQdhSmAbJz5RnDUUxdP1HcWZJ5Qzk2bnLxoejj52nfWQ48",
  "key25": "BGUhmxkzsUQq1FnbEepUDMpU5Mi3zKTF9aMXbgGjmVXnV1wfYbwBZr8mJNuhanPSf3vBQ1Q5qe8zVZ6Dh18Tb8z",
  "key26": "3HuTeErHDUqNZ8FUN6dLify5GL3JaRtSDSbVtVjSNtovYxr5aiNyK2cTd3RuNyryb3tUmou4ytqxY2boYMtNFWUn",
  "key27": "Z1mentUnxAHeNn41pUjDsvZzwgqiaqLe6KEDPNaexG8GKT4uyDg9SdpBaNqL8xnyfVn6Jmxvu5pvnwM1Ub4EWPT",
  "key28": "3ZKVLiD1J9Wv41aCusM2MyLjo2EcYQxYLQcbvrvnA3KSFaH74ezzJZ9G98EL6gCWceUnBh1S682ZoxeMiQyu4pvx",
  "key29": "3c2rzCcXA3zJnjBmZQXNibkeBhVQvcqfUXk2uePz9aPqJLJru9Z8q2g6heYJMFD5v1AntiWRu6UNUmczHHyW1iUK",
  "key30": "5SokV5JRuq2UAyJvcB9B129VxxVzrTLfLgkxUbf43ThQcL5nNcGpFn6zCjxP6vTU2qh5vPfi3rN3NdsTxxcC8Hdp",
  "key31": "3FdJePKbPXqSBRGgyc2Pfx36fugGDDpdCeKTbQNcRZ1DFi7k1VZFHW11PAAKGAj3qAdRHsZ8WTaBQw7tcyBzD3SQ",
  "key32": "3Lrdk1HkXusRYVyBPrcyzTjESrvYn73JWXNWzkLfcJ93DsjZgcqbdpVog3SLnMxomXC1D8soxdBMsEdMvwQzwg2U",
  "key33": "3vxTGt6keyyXMR5nGzFE9x6d6piY1c6i4ueiVZMvdD8mx8CPvy8RFseLKEaV37MVFi7M2xMR9Junx3QtxJ5H7ffF",
  "key34": "6g27WjMRwZ6aZNjCFvPwa2vP3JLx7vrT4oRV6djoZc9hqTAnzVjN1U8YU58WTsYaKKsbigvCFX1KNnzVMNpRGis",
  "key35": "2RE2v4UDttrw9CmS5kbo37pXCwVSTzJq38jWrAmbXpF3661N1ZVk1SuNB14orkXmBREgxKCbbe3Hh1RHKDcUrLCY",
  "key36": "2nGHEZJS4AhiPKQG2sK8uUsAd6X8NKVouWtPW1UHwD35TiFzM1hiyPfhRKvJSx34tkW6xLQqudfB5i2r21C3a1Hy",
  "key37": "4dhwCxSvqhuUXiDpYppgxJhY7Jxdt35iwPViK7SLCryrcWbZHJg2sBu68sEmSqVFiYnDMZV6qMDxdNhx3UGjJcKq",
  "key38": "SksfR9chH49XPoeZeEc3PYmc5JyPg3MyeKRwhUht68ySsvC4kFZCPkahXyMTPqd5B5KtrtbPNLruQb3DPJegd2N",
  "key39": "WanW5orzjfSa9MTu8KQxWktJwHbQGFBGQEVrrp4eRMQPYMyrEnMg5iRWL6k633b8hbmeJea96XiNatE3kC353B6",
  "key40": "57E2Na8m2FUUWXCzzMk7BugLkCMm3cm95aQFvaTS2HCNWmfkGM1prggsMXhhUDLiyQVyLku6QeDhZAjKFXvwvhc2",
  "key41": "3xr8xa4LzEKu9qWywm8DsYYSH7hziBBZL7d593k97ggb1cZfP6tHYK6ayizMwzyMx5h6F7fXdRKmC4PXqDmwGF2z",
  "key42": "2NDcgXkB7CH8kDmYx9YTYxaGrLgKEgh68DC1eQeVRUH2tbx6AdAot2XrkDU9uFj8UheGnL1SnkyRBXuANhbAjjAW",
  "key43": "yanT1yGBq6nJY6x3AZS7t1YZgwBBpsy13dLdZ8PC744HfcJbj5G3AFh8gaFrG6Uo9MFgzMrE2rvZFM2NETnbSyW",
  "key44": "FZecKqQPeWfjGn3h1RexjLq6yeiSFKvBwVAs1KJ27qBQaSBktCHNHZgoqW4CyxgyVmaZ6mSJVDWLKE7vHJJ95j8",
  "key45": "Hv9MRZW6gb3hGbBQ9R1fugu5etUP8gNvasiEbFPVu6iCbejZ2nwHgVMHsnLAaLQTMUYvzMKAyjchJTdeshnFDDn",
  "key46": "2n8zvsg4Hja4YH9qcZsKv6fNJPELPqqHDnNtLDKLeXvbPpAa3QoARsnHnWsHsXQwRW3e1AAERakE7CPEpv4y1ozw"
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
