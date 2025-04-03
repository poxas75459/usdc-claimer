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
    "33cd9L81y7ouSL5KWdVjRr6jb1FMheL8YHsHg7kuuah69DAwQVBreQo3EFkvj7iqU5zSpFq7CUN6zmgWiHAas4p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eh4shU4Q6DoXBJgGTRNkK7ANgZeCXEErpeoLjXwQhn9HnUk4sjTUnpcnXwhZVrjnuPe23zkVKmTqFeB41omMdoE",
  "key1": "1QZJ1W8CihN9QvJm4DhDBUP4yUsZSsiJwzNGkWWfVDEXbnwmBnWyBHqyQsucepF8akB1hMbdZvMd6i5VvHadXig",
  "key2": "4EdbpCnYst7qsk65Hpg3bgtkymE4AcGu18tCCNdx7AvxBbG7p39yh1evG2H8Zhrg5UNgTSmnyaG73rYQbU7ons5k",
  "key3": "5zfuCrp7Zeww1UbeSsht6DTB5WZN34CcM5sVBtVAg1zw6n4PVRnxvksstQUmpojX7rJzpZ5nembssw7Trt6HKJcT",
  "key4": "3bezNozAWeGrSZ5pze1sr661cVBVu7t8vBgznij1n13d13DUwGE22ULvcegyP2SSUsEbtCeDeHyXxRuUKUbh5iiQ",
  "key5": "2WADdPcVnLTSkyjJwKqRK4aH9wkLw51ARZ5Vh5CuRZC6ukb5E7UGbWuVWZXsgWfHDNUx695z1bDVjdB1t4LzaHiW",
  "key6": "4DAqi2WZBn9NzvrYYVwYAbetwMAEJMpNe2czSALCaSfocaiLrzKSUgCGzFiNkf5HibBaacmwwCVT3ULThYVLG2a7",
  "key7": "4Re1LJAEG4MSSBX8YmmB7JLVyGU4ApgwYcDxNRhoM7xuLmVK8UK8xoA3Vz7JzC81U5ezqvZDfL5w3Hy6ojvtr9VG",
  "key8": "WyHgUFiywTLGRbXdMpNCsjHKzaasXYsQ2FSDq7Dr9h7VGNMTCo5gudnps4e5bZz4anpxwao9gSJ66AFYnSdYZ42",
  "key9": "4UD1KBAL2cZxD6UJeAorWh1JnRS554nAMonxyf6f7FaYBhbrRHg1UhK5opemWq5pG64exTKHsWiQRDGYhbrAq247",
  "key10": "4LHbpjfoxMqs5TwKYR15iP3HEm8y2XdvuKg5cjzGx9NveKpQVoPqAkBDKds3zcmcDKS62uBNBvAgQsdpHnEB8YJo",
  "key11": "UZ3t2HVTgHf6nuA6o29QgRn36MvojF5aCnxqyNgzXzVedG8zDcp6JW5rZk9TpFjkntmjJSYsouApQzk4eAiZ7ab",
  "key12": "VgSv7YRsjJtv7wGojjiqhCUchuFbpZ5Nkrz8hiQb7KxrbN6Tyk3YFNi5vK2eVf6K5QdF9CeJ4NUiykPWy8MbMbF",
  "key13": "3csWibsYVYGhxyU62AiuDNjCGrGYcqUTR9LYUEyRKLuBmSahRx1eauQucapZ4uW5wAXKmQu3SRKnPFwhgynqTvDU",
  "key14": "5Q2xoW3uAeE679ZQXzsHrzzjyhjK1vvbCqzHxRHfJkyrTdfAY1H3G4oCFM51LXmWcZat1a98hLy1PkqQ1i8msvGr",
  "key15": "eSpSYLsAJpK6uxe95G6zgNoWJrnbsFahNGBGE4puD8quX4x9j1x78uLZ2HeHiK8LJpwi7WNUoN2KcFHRTHhcfn1",
  "key16": "4BBP8b88xkonsqtkKhtZGMXB4wkzHVRSgkd8F44Rc2zAoA61CX4Pv1HorHsdwM3ZgLEDkjfpJ2JREvDvR3r3Nykg",
  "key17": "3X2x851Gg2gJo1XhtEbPPUK3VmiMnw4q9K5H4rjHyHzM2YNCcEkd4rbLTY4bditiBZndWtcviQVbcMByd1ijLVM2",
  "key18": "2hPQQpg6ruMkbbVbm6SE2DR2PeBJfZabot1s9tqWpTbQyXrGskuSaBKoPkbAu5NNcJdwfiEGLDEGWmRg8wEmmoAu",
  "key19": "5wxfApdH6NVrx4ykT1RpCB7dwM89Z6FZ2y4ZUnm1v2SEU3SkejF6WoRRRXLvhbhZza5apd5Wceb1KWY6jWpXx5u4",
  "key20": "3EQCJHbm9G5TeRSb4gAPrFHrq6E33wCDqvRSSVptJbwD4K7KPBTfAgTHBcG5Gb5h8Y9w2L66qVGH4EVCgmx8S93H",
  "key21": "66cAonqj5bGsRZmsssU2JDfuY7T2G2rJeC3WhamW6RM5EfpG7XamiQUaR6SfEMFKrdTHZP515qLESqARQdd88hXa",
  "key22": "4CHq8c5G87X2YFMtPX72qXLoSjWP89Hq8DRDySTHe6JuFP6eYDYvpFT5YQ6AfqWCkspWTHSZAftZMDcfZTjC6Gkj",
  "key23": "5uVLVtcbnfkgmzpBV3CCSHzc8kFivPTwLLs4PAZF5qeQPZiUTBVKFTsVnnshPCP94fK6CVoMeHanxTm85xiVU3Ag",
  "key24": "RzcEeT978951989vfEDxv9HCeD1C9tv6ifnmQuf9r8ESPPFLk5MmNW1fcAQyWXDr35Rtv1VoeTD5ygLBV6y5HeW",
  "key25": "2FN3Fijj21Bjp5sULqaUMwhVaK1RZMiAv4UKzG5dh7ofpsmHM7kjtBALrvb4SFxy5pnzEDzPb5J92BjiNrgvKYvs",
  "key26": "RwThfdZYuZn8Jr6VAbcU5uMExEobdjGNSwETcX95Lipw65XaXpLDUt6Sn8NcsNzN8ET9FnC7AJjN4p6tj5Z934g",
  "key27": "4R7DvUosopir5PEvHr7MasDLx6LCwoQuK7AaBQf1T7BJH3riH6DDddRK26PV1eqBTJUhWF9dJja3wJnVwbtjoRuS",
  "key28": "4CNETKQ1o8JWWbyzRj1c3rNbu4wrXpbhccfG8kSCKaDgC2DzghvBoCgaqJw4dpmZmvtabpnPK9ZcQxWLCttTaceF",
  "key29": "2rtuofPoTHJYknD2R1UdN2iqzBu85ja6VGS857Kce19SpR5LKqrB6NefS9dggbUhfNLsfzUPTa6HscqhiqfjeApQ",
  "key30": "2vpJdrswTmnxTFJ77X5zRdBSDKbxipEEpqRDxH2sXEB5zXbJW3vfYmHLZ1k2gs8esJw8uvAf8aHfE2Gaj66GL9wy",
  "key31": "4wQGyKur3G3jg8Vm1f7DmhBmsHjB3352B9Nr6G6MYSJNs8cdCNLz4C1bzmYTtEwwoND4pbiNyJZb3QyeCXLaaUh1",
  "key32": "3K1vcYWjSnz47hQALkunhui8Pvd9n3D582PdtVt9J6HVaP1RePGuh4mC8h7WHVaj5Wm267f8bmidipYvLM9xb7h",
  "key33": "3Tj8ih4uEUpmojoLnr2Nj3u6KS7QpFsJFCN5hercZTybtiuV4CiefGa2p7j9RZaYXRijUMSHYYWYQXbCmNyYCQ13",
  "key34": "3oEMvZ9y4eErhnVaRXktYLxFyPTGYfAcAmu4zCGTB9vz9xaW6KwUZk1nTVEq16qXto5wYjaS94sRxthPXyaoaSk6",
  "key35": "3vdbq3t8SxVVKHyFXptVntR1UBwdW8bykorfHcgR1JEozsyJzyTgVkT71LpFY7jX7P8h93W7voo91oQ577dGRkgQ",
  "key36": "3QThPHddJ9qVWgccFsuiafELub8DUdTUh3dPWKRUAvTwAsLTothbyMiygp28qH3rdGqYExD9HHVW2x7P8tA1pBaW",
  "key37": "46JCV1TRQgNqCJZswkMBzsGWGL3FfS6Le45SqA6wtCJUbKBn9Ss6KJyUuTwsPgyK4oBJHkKThHqAVanZwTVZNWso",
  "key38": "2T38CrckSDgFJxaiUMf5gAYCRZFyPE9wtnkKoGKv46ts9cyuJeGbaWiSqawoFT3g4o2DkSteC2p7y3QP4Tr7UFvV",
  "key39": "mjtCFx8Ru8NiyJixQjcFrtnboN4UqnxM4gH2YM37i1HfxeLaqbEY3ommt9QCmQq4782x83i2uvEgirtV54vdAfs",
  "key40": "65MDsDGC9CWsayybhn66G5n4ZgUz5yqJrpzG2XfhyVU9HdNC8ApbNNGx8E44hSka2zPG7GEWeSVJFETA1cEbcoTW",
  "key41": "5zNPriTVbhYRvJtSKKBUF1LUHSc8pMtqvocy9jbRz4M5WZnK7ZuALbybcejvpusNPubHV27hcM2Noff2oHvNt19",
  "key42": "3ARFFnSv153KJFEW4VdjjkGwwSNiMAPCM8edbQTKwac9oXKKu81rni239VTNW1RFKkgvgE2hXaNBy2bHjm1aTXGg",
  "key43": "xdYYHZGM8vGw8fWPG3V6iUZmXLYWjai4z4zD3FvKJ6UhxYzkjTo71QYvPfWBJ1cnDnmxKCCdHrdLXuJzQN1AWad",
  "key44": "2GsMTxXLneeGGTCwthQGQDHdWfc44cfe57AiQDsRY46e8n7dHP5XV2jAgYg6S7dCNQDZWbErGKFQ4TcJg4CBifx4",
  "key45": "5s6B4GbSuTRA88P7p1bt1Jqsux7Pxk4tgC5D1Qtk47etWKdtYR5ZjXU8emRFWn7vrsTxjUcS1cu9f8yndJShfBsv"
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
