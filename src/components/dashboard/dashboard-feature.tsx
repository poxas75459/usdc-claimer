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
    "4iLK5LJUip9DaZpmXJsVvAndcyA8M4BX7GvP2QhznVSfEaeaTCgYswjM16p5AKwy9Nz8EQTzKsyH7PFE6ZymX97Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEWphCgL3fbnaGr41fuGz4o25oPEH3yd54hhHtTQG2nDGKPGuBkFXxvNtvNGYBdN8LLDssVKpQ3dw3gKeNBPWzL",
  "key1": "A5ay9TQdnJhLPZDUhjAsbo44zwLEZBe2G5fNfpsZD6YVNzRPTfYqcpL7uCvU9cEG6etComvGJ8ohtUUghjVDCAJ",
  "key2": "41t8XKQCNb5Q4ScVi2TPYyNq7Cz8BtRmUsBKtv1zhaCcoUn3BEPYiSgRCktRwawXM6BWJmRrU4ouayg36bGEAQE7",
  "key3": "3caJkYAaaV1u69hpsFn53P2kebNnUEEUVWjHWBN41zJ7toM9ifdVcnUyNh6L43z7355YCdb2qmYoFvLvo4Tn1nCM",
  "key4": "GLbADZSfxc8eZoKbY8PerdgidxMiDaMsfRo6B3cZH7UT4UWXi7QFrrez272LF83R146yu5LgBEyuHj9i3rdvD8e",
  "key5": "b1YpuHKYShEtyTcvfmx1XrSu991QNf1vKDBGrpbCV8s2UhYuHS4T5NRkCn7dMURaHrGgaa1RTD7NNzLwqmVJoKi",
  "key6": "3eyQCiFdoRwTGiX73gxT5UrhesnExPA6ZyacPavGeztXQgvcZbNW7PA8AbqHQANuV1RFoW5iaE5zSN6KDaaNmLBf",
  "key7": "3FUyC4kurR4Qys66wZDuvKSSwVnFo4QAeHkzVfHqtRYbkNzCBBGvsyecnXuF8E5CtX5kf7P2DcMU5opwReUguSVr",
  "key8": "2a2XE47mUdm9F3rwEzqVL8XnW6YWMTQJeN299zT9ybRKH9ywmWpfES5QVmkSH5yUXvWCAvbSC53vKHAycNMsCLAG",
  "key9": "256gfDuoYA1HnV3p72hBdnKBYUyMy7GhMVTjDVuJUK96dr979WwK6RAyBdQ42eeBNBnxqnK3N7gsKs1FVAjwcaNm",
  "key10": "3c6u2PLcWJDakgfnx3cy8H4aH2NWoe54En9C5Bh9DiF5TVm5B9y16ifTrFP74Nm44hCTqCy9ugwrRFuWtUDCZe5T",
  "key11": "5gyhHfrDipNBpwQhpUZkDHZZpSDyovH62uZgZsmNe78CXFs9rpRJunbany5ayaB2Zp9mUifPw6xpnfeBVraBGw3z",
  "key12": "3e5ysUqWnz7DoQBCbanGNPBBsbdcf4dPrFShDdHNjy9DSCHazBkMnnbdSCWKf7tS7Hgzb2G3iJUaNUgg4HN5Jig4",
  "key13": "4N8zsgSzJcjQg8Q4CAAo3eNpubBxrh4UXodLtC2PLUE4FXhY5N3xBJ9nQB11spUPZZUQasRet96Vnejed4gh3hZW",
  "key14": "5GqquGBmTSVvsjmB1zLiZ1CqZNBaBjDTcywPAJyJ5dEi6dXyQbPa6QFURTSfmjdWDstNXH47ebux2YVdxqAunr2S",
  "key15": "4mvkjx8b2xKZ6vFwDB5cPRZ3tMfdjyGJotMoPb1mQ2UbNVtABKaUptm21T98d77BZtqUd3GcXiBwii3CPbeQMQXt",
  "key16": "mt5Guoerjrimyd1sdX1RmYNRGVBYDm9xeh67XSTGgM3pxtX2ZdVjhvpmvFCPdSfe89QUVDA1NxBGmDJsiePQGKE",
  "key17": "4wezCfF6dVJZzhPQLNGyfUsF27UEJz8fihoeJkrfoqkgBgrcY9JgKJW1XwKJEiBC4hjhqTrm2BFECo7GN6s13C9j",
  "key18": "5D5KFokwUA27QGGqebiYCxv9DRqqEahuaKTjSTGpPcM6uxCemJ7KBcrYpaQKeHPYBXvQ8HToxSkdkk4FEBXzthr7",
  "key19": "jWUQZKZsoo1TN99zo9MH1YMTC346NN9nSyopXV2SdHrwU5nxixLo6E6h8TLXDqrKvbNUfKs8H7doF8qT1PV8REh",
  "key20": "4W8UwsZaZ6PyRQYimrb697bkP8r1ANFVwrFmbsYgz99TEJvK1Lwo1XD1t4fzkb5yCdF3fbsHdRA6qmYiRsQqKY9y",
  "key21": "2Y8kpVW1mcvmZ4B7mZAbgnLtkiRuTjbwefQb3n19EoWNPF3uicrTQAz2uQTsmxuFjvR6eWt18pU8vT6PLJgoVBv",
  "key22": "3iDY77pXVtHE3aBX1AJadvfzeebLDgjkMqitWSXE8GvKxpfMETZUWzoHYJDkUSg2Q9TJojd2Bys8X11goc8iD5ry",
  "key23": "2b8TofXKz7Zz8mDYHgWxeFtM3go2XTNKCUo1mgKfKE47d6jNYhhKpmBQxHv4jQK5hY1wgWmWvAFGK63cD2xvaYHL",
  "key24": "5kU3UpL442taJc5QE9AqMFFUScTB6zUDiHCGkXB8HifKSTqmrR26jBiArsVZQC5RBt7DLK98XkLCjVyxkUJtSrRS",
  "key25": "22FKGtp2mDrMQonBqL6MF6A89E6tSM1vwhpz3KR2mBkLHjFMBH5aEUA9x6ybZbjz4e8aSnc9kjE92TaUwyVyjkHP",
  "key26": "mc1NXnUdViFWf8ijUYXAmR8y5dgm7r6PBav5f7zsqjs7GT4fAAPm9AZNFbEreZ38Woj7arfjSpDeuKLCKZzYxVt",
  "key27": "3JNEcsWQBh9P8cUwhjGMTvarxd2tAeDipBqy4KDdiqtpfGR6YkfUJyiG4hAvdFpyJwUBgKMXB9MNmJhPyod6cssQ",
  "key28": "5iguZrUFJzhi711dSCueTT8RpU71MujrzHVQDnKTLxPprwY6wAfhaDZvh3rCmdiqFbCbajdcw2z11RnrHbs5XNNe",
  "key29": "3BSznAqzcQfEU4eG1o6fntg4CS9pxPvoYhEHQMMeDfKW5b8BbokRALtpfPyYwt78ryZEduRX9szB6CjumbDnsutR",
  "key30": "3MoscasDeiWQC2NZobxkRSoV4zFaGTzFVUzMEMrTS9hVSWxV1CmeJiEPYDu6R5rrcbpwjf1M6iVadY54U8KKFjqS",
  "key31": "3LybtpdBKAyD89b6HiajMiMkhEU593rs1Cv5BMEbuqvijmYDAmWqfKbiKm2pUhBkJbqnhAsBeciryGFxeGWcDKJ9",
  "key32": "4qXUM3zu1sZv123pAUALWJfg6TyCVwRcN67XFW2mzLJTrH6QcXhPmRHUuwNWayLqPdiDUhwm3mwRukjrymvU1nZZ",
  "key33": "22x17CzizCx4Z6GP5p1dhMGyobGafFHJFxLqjfNJiNTdD5599WbC8Vc3UvvT3v6anpYo25HC2Rm998RWWd9ogWHS",
  "key34": "3YGquR8vTRjqEDZpUbw4bWMND2h3qGVBMUuHbQdC11cjVmpPtjLp6dJDyGgntKXjpeDyBW3HMahpT65Uy59dUBt6",
  "key35": "3ycHaa2wtAg6Aixcz3XYLe4PvpLicfoSiDW3GRn3sSoSKFP1NYsS25byh5JGhRZwxmVLtHh8nZCK8XLrkoHWsWWi",
  "key36": "3jTpFR7dWZ3WBWBTj3ECyYGGv1tgCXBqj5oUru5FGTd5Wg8Ghsci87JboWCw8ySPuv6yN5bbk3uoAuQbNYaetxE8",
  "key37": "3Vtwsy2wZCxb7j9kxweMmd6M48hHXibH77Y4ZHKC9JR5PvUhx34N9GT6aB52iLLzEgyw44mmRw73LW6nqRvA7VyV",
  "key38": "v6udqSTo9eSrNDVN2DFocX12cYm4YxwA17xrVDafUBGie5ywQYcekyomBUf8sz2YUDcZ6oREQaUJRJvtvjF4N64",
  "key39": "4zWMaPhEFtUk76KYuvTN9oEZjubygbrzsTvVZ4swW5jqdraMP8upA2Li1xzgSNFam4HowGXP643q8dfDiqFR17AH",
  "key40": "22yLo1BWt2fidRW28m2cR9Vx2aHNR1vWL6yzNJfeTCnvp9eegfgKULdajcY1gxxxMUyTSW2VB3eRTuRNejKv8zJh",
  "key41": "bND12L682MrJEJ2vPkC4rGGd74sd4yKkQFst3p1hJQ6qKbsmRz4ivv8j8S2bNrqe6qqLcjLnC9Ur1BKzVejxjUR",
  "key42": "2ZTHjkzj3CCArY4kfa6Qfc45bPV3qM2wXi1AjPqAVViu8igj1Qe4miz7CrEcFqy9ZiB7xD4PA6V3ETd3DqCFoc31",
  "key43": "4nRBqCG7qQZoxhKNpVRy6Pf4MjyuyXKyTwTVkzDy9qQMLRJAsTwAmgUvJbMXQAqxJcHfzUTZwauuywcggktuhWTZ",
  "key44": "3JUzQJJqW3tsavfcLbf3zzT2hRq2a1apDwDwHjcUMCZUf79ekUijZfW3k7fszQ6zTE87s7sqoK887rLwE1JB2o74"
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
