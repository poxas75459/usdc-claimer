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
    "2nbhLWfbZrnBnm6vxH1ziijFYhFwBnkGWSHxNgpcZDF1ReFS1wNSkTXcVuMnuZ8Gnkeddu7Pi6Y4taZ4m46FB7Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PuD3FhKYU2aGRkfXw2DodbhiPEd3ZXqsHtesW8znUKYS69foifzeEEzYMdaPh8yufNNbhHn5ZrFKHMggJPKmycZ",
  "key1": "3bQACLTBv2rKMZEDHDbxfqkwDPCknXssQKo8rX9iRqthdpA99MdqLC7wHkUM6pRy5M8DLtTA9reRwcCSHtaoB2nA",
  "key2": "2WnYysNcmjfPkC81rvewNpqs3DzXoiJqP15ibB2SKQEY8bHUqwq9SqEGE84BBGgmgDhFutsg1x1FUM2rDwbTP6N5",
  "key3": "2rPvAC5R8cmfRv7rjhnDkQfAVcw2AzJ5eHmmact2zd9wjg9dHcNzS3NicW8YbLWjXwWMFTE4TvmVbv6yasV2PBU3",
  "key4": "52ihodU7fkG5mwZm2hHX3UzoUy3As7m194eSGqabixafYcnocQxfVScYnWJEb41MBvuZC91jSjZUWbZQcEqYBa5j",
  "key5": "32soB8RZuF6yjjXr1hGWK4Bn8FVpHB8bQCHTqR6Xy3WgEz5ycC8As8NYXyEouFnmLgGCNUDiFiWBLGiWEUi8w53R",
  "key6": "3tXL6G7qqbbvNNckR2YP7vpsEuVX93qzP2hXcmod23WyUXMY9nhRBbCGdbv64c5ApgPei2GMZ3rPbh4phs5KYgim",
  "key7": "4mvFihkoNDrvHTdUW3BdvTHipsGjoEQhMK4J3ebXvmTFG8Y413Ncwo5k9AztWJUHNptED2refgWSkTBA9SNbyxRE",
  "key8": "4rJGYkwUjQbhD67jxzf451piQHfKVncBDhtC1AYY9GtYauFX2a3oxqUZDsXvbauwAUAyCui8hgyVXoFnqJx8Cn6",
  "key9": "2nBCVcUp6QbwbG51kBrbSx8ZYncCZLsbSSrLBJJq3PuczJSfoS1SEUCwYCYYQTL86pE4Jnqajga3Va76BukLFesV",
  "key10": "2EX1cK1GqbiTwx1JPJXWV4obfxvDD4wZfFVmaHw49QdjeJaAXRk6DC4XPCvVSgWz2vM9GZsc1BzfvsEvztVp6NCz",
  "key11": "4myo8GF4837jSE1PwqNdiQ3MYHQbV2GWkqyr2H7arZ2UpoRZyKDbtqepnkZfdgNVnL8k1cLGvryG75Q6AQiyvwTK",
  "key12": "4DwUxvDBDuTKuM3KjHezHtpF3NVEEH9dCA39sy4tDonBZKxbXxTAMsWzWBwUyiDgiXadBe4cD5SRPKDw6HYLXHDK",
  "key13": "5g6HjCGnNJLpaQZ6CWeE3Yfb86rZ44XGw1FAhvqRjx28hvNCbu4XYcmz9eDaiP8urz1cnsBQMA1Mj8hSQAN69SWi",
  "key14": "2ZqJUtp9UpRo7LMZCPVDJg88WKWpNX4bFss5YuqeX66CNCZuC4bx1f1kNzZ3xEA4rDxMLLQG6ynud3jUZ19TWZqo",
  "key15": "2akSUeGpLF71Rq5PHjh3tmoMX98r6ZFe7CPHtMFiMLbVP7ctPh51azzXZo3EPriPFDtRJ6sqmqEGzFanvp1n7uqS",
  "key16": "4C3S4jKXpqPp8R75HuFd1jP2XAo7PxJu4ZVKPhChct65VK1ou327bvLL9zmQiCaESCBqDhqSTcCGKrhoshd2BPLf",
  "key17": "4MwN33kHmZLzd9SvtQQKnWrMn2xCFjt5UNMuyk3mYhZyGeah5nxViR8ZxqFrpehLiJgEGrTyS1scxru7uycNkjxv",
  "key18": "KexNiJbYCrKsazWAF8ACcmDJ8kyrQ1so1vc954E7ZrrZH34gkoWMeqrujoBoGNsFRit6ri1JYZoPZsM4PhJVmuf",
  "key19": "5uKa77SRKkkWoM3pZQ2myLGA8BUjaEiEAA9LjRP8dZ8ZHkMSoaJeEjBrLPNaJGQGn5hWvJCMgJQQiyoR695qPwVu",
  "key20": "3XQVZb1CP2ciKnDnTxBktdePtiYPN6z2VmRmdid1ib1cwmxKuHFRPqDu3DKukZPrJJpcUE1cZYgJhhnH4mGYBFj1",
  "key21": "617vpGaHEVMPqpzgdFDdK7eD6VzStnkhBZ32PSM1oPvZyrLvB5aKwXpaaFZzo2xGgPNLvdcqpPubexnd27HDZS9e",
  "key22": "3F6hAk9Dy9c7pkN4H1WK2vFGnRtVSgxTf2sbVPM39a2YrvUQVNMXbgoLQ7YoMkveTHFBeP5Q3fKJYv8DhVvVbwBi",
  "key23": "329ezbuPr6cc7WAhu1LZapzJSEegDgTigWGovnLVSQwUe6D4DS6uoQ72zmMo1ZRXG9NJjBZu6vjcqcEG6WweMu4W",
  "key24": "5EggAuGAFPhBvcedrwNBdbpXMC29tVHkwMMK7PV5VzGpU7z8MNoty4EieivrMsaD5GE4XQvH2ex1x3BVnMaZpMae",
  "key25": "RPgghHAQ5XGGpvDYzdYEeZHHJYv3kVEpQvQ9NAQiDtm1HZXTZfFs22uLTH3xqpYhnRNJZqG6TcgYz2yUYfEZX3U",
  "key26": "2ttokQk2pe8bNu7PnaXdiVhHKJHNmkgUJ2k3BdsCFuC7j4hWjdikDTrX3aC3WudZmb2Ewfo2KfeD1MojfjgJ798R",
  "key27": "4d4iKka2HNsqgSWGnVECCrBV9KdMktETTCPMVCX21LeRdLB2yfAMRCWVZpZs1Qn3zMCEV5CnqoBREN2ZkWN6V3sA",
  "key28": "gcKpNQdjgbENiFHKw2k9AqHqpMES1xr3xbfHmmaKXvEhG5R2bEhcTvEvQTm1syh4eoNBjZFMBiGemqr1UmnUDhd",
  "key29": "41qET5F2rDztxW3aHsj13SK9FkCkyVXbbNHhw14aypJA8vGUgcbf8sLDUNd1oksBNStcm4ZrKGL1szUay7WprA8P",
  "key30": "61QV4WvPcWyvQrkabgsxSsALn5x5NbKx4gTrd6PdUCu6VEZSpqas1xjZzoiuv9hdmiGV8kzEJfKH1YEwrS1jbZr5",
  "key31": "dyZrD1rwYaFGe8Jjt9LpKVA6BCVjYRhACykuqhzCudiZxyTi7TgkCq8tVBK3uckqaBFcr26ZR8TFDUfa3JoZ2Es",
  "key32": "54GBEZHgt8nPyfY9rcAEYaDTq2JjtM1A8yRtNDfmFCSXoFCDUa7AgiZcSEMKZJRbPaiFTu6SPrJ8faDkRgxL7j7c",
  "key33": "4owJs29K7tfMY4HFEZqu2MDzC6EJh7ictDpRHjfcZns46y3bdthXLmZih7jcgj2zs1CT5BDom8bsR5D5HKT6J8y1",
  "key34": "2uFLfpfqEMpcLGqzcYXYeUgQZZ6PY9JeB3gzsdZxkyeRuvfcWor5XVEL1RNbdCtuBu9Dp7hApdL1JM5BADgbwA7p",
  "key35": "2NT9CzZE51Q1kBpJ5C2zEh6paKLi4dm8ZD3XLp4efsT6tkKphxwwiiC4iZoKmkbdwZZHWEWvxU4HqN8LJbsXfoxU",
  "key36": "4FrUYb6Dydmw6nLbnwfsRT25uG7ct2FXEJdpmLUSbc2Zt58dkv2mteJgQCyLSHkAnSdStnj41pRAD3EGU4N8LZvr",
  "key37": "5oKziDydiPRtNHZw2FFxUBhPFsHom4K14E3T1bsEcfpY58mvBeNFYayFcmqod6xTToFpbUZTWNGmSbtSXRrWQnew",
  "key38": "5Dc4vfKY9DMVnZ7RWKCv6SFAf4rw2yp5XPNjK259kv9dqQxyx13mjLDfsEbGKDoYxe7GGSxwY8VUFLGMM6WPpSLM",
  "key39": "4YKrJb1LypuXZLKFrVWAYWq7UKyu8WXYD6N3LFRdXrEwGFekmbPzYiJCiyQHWB11kPqWL4ZTTLXef7fHA5EbmGhC",
  "key40": "4X9MZ1tcQE4tN1Uh214L8Vw2JL1pXX7yETcmUvScpQFYJWEUhNpcEQt9tzYXoRLXGG4VgYCkipQRqv1HB6FipNFj"
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
