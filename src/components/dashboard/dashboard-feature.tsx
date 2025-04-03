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
    "2bXyaP5xn3JztRP89W2q8qphDLqzvsch2KiMDBXdf4RKF5VZCWGmekAAwGpUPMTn88ba9fedhjcxhdkA4Jo5ttej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pc69WuB9p9Vm7uMdSgLeTLUZQycgBSfB64gtHYuwmhwAs89XPEzQckNAMT5W9KWAv57BFfDUH3PPFSfkkZrNhs9",
  "key1": "3yiXmweifR3EfdAqR1xRZc14KWzVPcNpXgRgAiVBDS8yognXvQPfN5V2QD9PuTpYBBswyL7EWkuDF3LAX9g9iBiU",
  "key2": "5XQwBZzbvMn1bFFLcDwf6M9ixit7PMBnNJuwGXcNppR4WcT9q26B71q2Efjv5oQoAnSKPLKvhwAbMFkvWhDofjzP",
  "key3": "2Upi2epjyr5kz5fy9wvJGYs3PbBnsj7GkjhPGTmzaxXQ664KpV48rmiV1ny1iitXETh2XfHUcuk5VoYuCKXf9MQX",
  "key4": "499QdBBTDQM4SrB4WqhXxDrBh15646YpcYXKHhrnjiq7TagaWnq2qbFfRZa46nds5qKiypu2x5etyo6b1s9A3GEt",
  "key5": "ePkc2Fg7CzVxNUsZErY1AnaKngVqQ1dtXvzHsRJvJgmyVXTMd7v9BqaX7R8u7DBZphNk1o6sGhoW6qmvj1UvxP3",
  "key6": "54Y25Xa2JphB67faovqVACz3ezdcz1yp3pv5ZQKXYc18wtaRuNcKAGvRS8uX7FFQ5tGEbgTL1MjTZKor3RpADuh2",
  "key7": "3r7axCepeZj1GDZsvM3HUG6Bc3XbVbjpp8VdguC3x6S3X6o73pGQww757i8Fj5a1aSGR1RkB3gWgr994AJ2T98fR",
  "key8": "4b3W3GbSjcdRrkkYmLgtp2RSf1dPpyYhGsF7FXuo8QY7G4NkZNm4EdLCtm4oyY6kSpFbc2XZehQLox3kUbbzpiQ",
  "key9": "3fmAA7i2tRF8o1Unho5amXcYVcq3RguV2jV6DCtLvFBEhT2CopWVwchHHAupnPTuQvEEXYciMQ52vdV8RjbiGHkj",
  "key10": "2NesJFMNnjef7D2wm6sYBG6LYfVETDFZmMZRwXQtJvbFpUgmxowZTn3kc9D5b9FvzP1zxUJy1fLEr3nv5Peh1Dzo",
  "key11": "4RhG6c7LjBP8LfrH62JnFKd4LVrpLEnpF559CByFVAKPLALYLd6esXP5qN788xsW4jYuBydZxbZwQ7vBK6pdBH1v",
  "key12": "31vsKvWXasmJyKtYtxVaypQS6zqkeP7wRyFBhsoLLovnaDPWoYmgSs1B4X25R3g9UcB6mj6RYtVUF4FBLVJi5pf7",
  "key13": "4thbNJc2anVCybtnmYjfcmpDupNJm7yqRD4wZBf2wj2rHQdjToqd3PM7ivebzK1evuUVEumqP6Pufdc3ztj8X5oy",
  "key14": "2u1dhpfagH2hFagipsaDbBut2KqzgjBa2KJqa5VQ3513CzUVtByipixuN1LNcoQqChWVHdWV9F2JzPwLH7AYYPCj",
  "key15": "oD2VwUosFfHRAFXc1ty2G7afCLGKvJaHS9gbsM15ueeZNvGzSMuQxJbDQXXXC9pfpUnNi7vfn6eepkojBbuftYg",
  "key16": "Ag3tDX951mZUeuJZ91VcQpY8VrmL7g9hqYe9qQRjcjM6er233NRMCkdakSyoKR7xgafhZs4YBbn6Hhpt6EpVNYZ",
  "key17": "5r4zWXgXpuSwAF3jE9QBDkrfSkpxQjCSNMgYiU5ujhy5bcGwG8GwY46Kuh5LC6voBKG7SHLRuoUp9c7153DYqeh5",
  "key18": "5WiXKCRJ6Hf3hAk8geV4N7nvNLXkkxzBAYR8KKvh7kyqBZwvCvB8Qs3c5EHcGGAKDdv3nNntx9nMZem3Hv7EbM1t",
  "key19": "3zauvEmKgqWHBawYjo9cC7XLN3Dzb3vNgNGx5bg1KozNyyFziwJiVYS43an5v3eQU3Q9mzXdRdBfe4ohwg3dKQ8M",
  "key20": "51NLuus5rLHHsD6rZnrTmroT6X4pNgJNq97vUHiut3HpsWEvjLShG1sXpxHEj2nmH9v545pDsxKrDQffkwqKKyt5",
  "key21": "yLRSY1HNTt7syr1uZN31U5fQFs3uroHwj5o5uMmEmbx9UeCqhuKZmBYQFCjmqf6jP1anBZ9UzKTLAiX4GRiWxYj",
  "key22": "5GSYVACTyLn9Aquk4uoe2mobvNxJs9iRMB4pnCE1bLuPH9uhd75ZhSDYaGPCZKwndzAffx8HTgJcyrhzaYNkcVTr",
  "key23": "4tGTgxsdREaeeDgCWY3sm7ugDHzpXcmkyS7SVBe7yWFmrMT91caVctNLcyu8jk72hrAoM7isJYDqjGheFYZREuwh",
  "key24": "FvsjNY8XxefwFVHgGZxjHn2h3Bzx4vkSzXK7dFZiVoTWFP1wo6VKnyujFbfsjM5vWtQ5QrkyirAwDQUDgTEtzXE",
  "key25": "58cQawfvyMwFHAW229EaU8htAZ812LgTn2yZFfpyxufZsJTXhNyxV9jGqPiGSZE2eQfZEEJU9jn2fzXpKNWP8Ust",
  "key26": "5sAQEkQdimRVDN6k3q3zvYSU3JivZt7Fnd6oPVgfLfDTmFV1yVtDL9u21GCNYDxxZCoZtiVgzAkRe48CtnAZp7dL",
  "key27": "Fbh9iSezGDZuGfXSsszQdZrXt2jwCsaGt4ZKJkwrkw35WfJGxMeYFFPnxMVEVuPghJMPkh8R5mLtPNtNbQmhug2",
  "key28": "278S5G2RNWsoN2sjrfaguAz3FEFh1Zehpdy1ByskrckCs8A2XQtyNxibWAM4pAJST23WmoDMpHT2dbx4htUyyLDB",
  "key29": "5HJVfeo2bGRhT5bkJj7HG68QNM1GSpnAYKjokn2139wtJmeG6r2h5VtZeXkhEuqXbEWP136adJKtrwSM6fsj2CZz",
  "key30": "53WvgU5ZoqEdRc2TATuTfcSk8x8i7itQ8MGACGP5Vvn2NwDhdKTga1CoBirgkiNUQVTCq61pSXPodoeXaLivnYmy",
  "key31": "4gneP2eJcxpq9HAh4TJa1Q58ifkRjAPs7zchmpdHExpHVpyEXtYoAHVCiYzAfPStETLiFc5fp53eGjZ5GWucxdN",
  "key32": "3jFS7HtFPfRs1KTJd7oiq2ZAQ4wgUJmmALXobFrBaUBjHxkc7KTrSBNVaMRddaf4jjk5XEWYgJWfi5i1K9QTqUWm",
  "key33": "5owwQeR9QTW67ckZFGHWNiUYYA8P4GURA144nRe3QvNbqyBngDGzR95HnADqzR5HrsDeMTPDe152AtWPmX2jcV1B"
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
