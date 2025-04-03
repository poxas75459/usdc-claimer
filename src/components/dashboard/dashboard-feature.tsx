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
    "33np8hHPRmdsFUh8DSRFJD8iny9RyAfHvXTKLWxudB2Nqb1B5XB1FtyJYauKUboPv9CHtjuguYiTnnbM3hZWLsCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JxgAZJ7B8pkYyL1mRHdanXggKu5mCSzsjZwcWQdFyvCon1XWahbBQjatKwXgjdDwJtiAq7SgYTZCDHuhMVPsQsB",
  "key1": "27HwM3aWuZZwsEKurMXVBPxvSNFnaxLaFfmsYj5LLMv7ke8BGaQLbkj8Ge35ad63mHsgDSJA5j9zUbTUT7q922us",
  "key2": "4YvJFJLv2AkGwN7jRLGEWWGd5W6NAPtSzJhUnmPVMgyvT3d8Az9SeB2Fby7FCA7xZcgZh29uCvtRYc1U1GX5WgQj",
  "key3": "326a8NYXMAg71hjgUXjHCQPxTE3muCjT8SaMp81RwQiJGMSGCszSSvYc8nHtqvSEaQ6HZGytwQU5dfV34mdibimf",
  "key4": "5nPeuNJFE78afSjRPgKTkVDfokf3qbfExKjL1BopifNSwsyBk7pkJWRFyct7mDLnLc72ZXuZQmeJo52zjeMPzsS5",
  "key5": "3eHiJYJhyibXqA1sb468U6um28J1ZDn5uTsGS738dHwfNBqaoiiuGexK9BDc4NFoTSsMJQXKrKzNGV2YG8vdikk4",
  "key6": "4KWvrpGuEzDTf7ZUiaxbsqEXWmtRYyAJ9qbwdRkEQbjn7yKJjohtteP2H24LZX7DBkQ46LTbmfJSkoXhDjA8EwZ8",
  "key7": "25LPUdRYj4a1Hn7pRdVdE9RRA194BdP41CLxMa2G7GobFhendvaHMUgGoxA5QwsxooX6ZpMiZdqqH1ybhGpsPQ8e",
  "key8": "5wZVH2vr5mMGaduWBM8Y4wQSKrU79Ej6jJf1ATYwqabxQPNDrbcJR9ZM75ad9menV9j1pZB1BcuZcYofHzQNsdXe",
  "key9": "2yuoizhnnCAJvyzfxc76bkYJvRGF3C4ESePmukAQnt8wyAkZQHqQY5ecbyoCzdc88SYvW1hZ6tmD8jptqVCGqzdn",
  "key10": "33vKB3gX36b2yZUAimA5eh5p7MXmcxVSqcHe6ZP3eUNDvSwkKhDVH5B6xshMcZv6C6nbcH3Go3bFCDQQvLyS9dvi",
  "key11": "61jFangJQBQVmTUQ5aCAHSHQ2PLzw3n3oQ1BbpdJeHSc5Z7DhuaYayahc8CJVzFnmc6k1fS57NcmtgBp5b4pgpdi",
  "key12": "51yL4XUDBa6XRNmv5B3kdbRjZz6PVBrAph7r7mSq69M1u73MEFaCrMMdGdp94K2AokWNKmhuMdMVQgVm56jhkvCQ",
  "key13": "41q2CPGjHTPYLFHLDtS9utWPeBDk2UN36JAY3uGji3ADirvjVLEftpfCYqiFvkVFjPw8keR4CrwHeNwNvDzSHbt5",
  "key14": "fwutyNTJ4n72BmYUgPPCHE6qBbQ9Ay3n5U4gjRCqe97cnqWcjoo1fpSNpauaSWwqd143iSLraoVS3JEtUVjyJ8R",
  "key15": "5L3GZwavwvNgF8cJNxDrYniB7DMKZkvHHJ3QEVCkzpRWK8eZ4atr6hjmWT3LoQJbKvevwL2L4GJQm5ig8Y5M6g1h",
  "key16": "3UqPjhzGkUWAT1XfLkt8U7dZq4riSNPfpgfZbyWYe1xYWHJEcNzMx99TgTMmh4yQeronbyeTynTcgKnqf44NkbEb",
  "key17": "41p1F2zCQSywgZCHD8e8ZHvD6iE6BDL3qNBMHRKnE1ncw3nMjYo3DU4chG5UAscZTf2xcvFU4iVeHWzZKm8DyYNa",
  "key18": "275jsyrHbZDqFw7AivoRsrZJ8KqX2GY2atszz9a7tD8zoPbLekNygszk7eD6dotyUB1SVexg4hu48QDaDVJhdH6g",
  "key19": "4TUrJN7UdzPAxntvyxBHu88yFetQ6TVVM2zaFoSu5Es9jno8MzWZ94rd9w431ekdXLqvKvCthnKL1Xhsz4XaHN5C",
  "key20": "56EDqNDPoSCnhfT3Y7Y6bGe7Jvzt1DTEZjT1BX7eXXz2LoY7KHQ3GRZ41cJRrrCh6VCQgGDvtC7PpuKVyGQuHddf",
  "key21": "5sZ3n4SkK9arp3cUNTW6BZfjyomawqNBUsUFusowTCnTTYUdfFFRKGE5y2vFszuraHM8YHTCdzBMFfzpi8p9Lqrj",
  "key22": "3nNFG4gC9qDQr6QiVfWQGdahX4GNYm6zfJzzvWNh4wRNcEPQK5KvwdK3XZKgH3vqLcaExdwKwhQ8ngpntv6XCXNf",
  "key23": "4k9Nx6rcmPwUxPrENa4hgvCENDiTdHUeQ9xk6Vx3UM3qR2GQLJhqsP7aaG5sKVRDTxhBC1SjmpoYbnShEWdjA2DR",
  "key24": "3izw3UmMZDKUeWyz6iymtMszX22Z3QebmBi1tQX9Pfh2Gi34whcsYzeJmeBGLBy93N7A2bTtyTLPy4bsbk1B872Z",
  "key25": "5XbYyFaiDdoLTpLUyUD1zquuTexaVUCV9LXVwvxhPjvynpUic8kWik6RtqT3djABpviVRYsUWmzwcjKcQRBm8eMp",
  "key26": "2WY6tMxek9cLwTqEDyXwPoNGGQ6h6FE1rPJXv9JbvWuqCNLG8TBoFwNMToSetjhGpwwaMa5Lr127PU7eDqCGHTgJ",
  "key27": "FUnJ9WBf686fNcsBgwNgunhbhiQs4ttqwGWm6eCwM1wtoAG3aWwtxfeNKhwqD75kaAH9avudAJKqk9HWxx1gB5X",
  "key28": "5R3U9kwZ3XCGY29cwck1HSoJM9F69zEhKVzd3mredBahBooHpSdLcPmkSK7KWJ11yte3qYcR3HRCH1CBwAMmwLRu",
  "key29": "4jTFfj2ucYem16DJxxPRykyesdp4Fh7tNeY9YEtcABYNVVZzfoZ75sqG1VrAhJMq6gFE15rmHD2YMEzwk6FSB1yP",
  "key30": "3ndpptcme1GSGFAw65mtRLUzxYRPtkk1wrakRyZMXpTftcAERd7Pe4yMKZKiUpiHjzknXAZ26CwWFHUVf3YQt5v4",
  "key31": "5Si4iTU3ht17kKh89ae43eJbCQYjU3JRToUPChnzpmZqYi71TeXi5X9fVD9REGrFdUXzK7ct1D56WjTNshfksbwV",
  "key32": "2vSUJmaKDM82tzbST1kk6KxKWZtFqvQGKg6RycPeM64MHns6gpTWqgjJgnhnmXh9KddQh6GmtqaE66GecpYLD3WH"
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
