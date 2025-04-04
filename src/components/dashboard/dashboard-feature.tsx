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
    "3LMU8W3ChNCWw1YsMhJMuq8faVwQq3cYepfYE7ZcpXqcgFdtqhR9U444c5jFvuRwA33vPgADxSNFaXxNHjQY3uYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQ6brDdeWBRbsGN6mDG8T2dWn6fJda6VtP2jyGWhC1XNGELSxMuovFtwtS7rPP8Ka8z5niavK9GrUTKCRDTqvLX",
  "key1": "5pwsmzoGEnnJV7q1Y6b5kRndDmmkg69bQyEVUUgpJFqvwRERPLeAVdEVXPCA62AsqTN6rBpMAu3BgdMGfStL2dtk",
  "key2": "22b71fyQwKoQGbZefHNiFz58tpJNPSan21RGhkCcCFAV2b8Ve5qtUgh6omFE3rXDVspu7H6m2rX9ZqdYjBYgoi56",
  "key3": "4inrNH29VXUKsXFZLBrjX33CEanENWiV7Mia9ta9QujpY1dQKaLXGEeYqsf6SyAFHzD6wcMNJ51byBiprYGfq8H",
  "key4": "5LZQtL8nNrqvLXhPiwtRoHL2svcHTZf2KnFTME7dauWJ3xhbruzonK2YDngj7DYG5xAEUBuQLE3TyFPdQFtLGH3j",
  "key5": "7eZFMRqfWtjNvdrBvgwyTti3AQJN3gY2UTyGBwRGjsZQMyLgWUY28g5RWCwG7DQq1GenEumR8MexJs6fxrmx44Q",
  "key6": "4czUWhvMaMUQvBJ52MuH8r4JjhRhBL87AQ3EiHfUrSP8KWwvZRNG5vjb7yTH1aewQWjuHBSdZ49ULuQETpYird1L",
  "key7": "2re3SkUVjonZZQHikx9eeeSrNonvNCjar2Mx7mfQ9P76m7gRJFzvgKMdWLtx6dwNaYLyCZ985jdMRpM2sJNg7hhc",
  "key8": "5uwnce8PqtXnKtTzJdevA6ghoB4zYJQjX4ZkSM2JxQtdoT5w7CPMfqxQd83UPAx7gNvE24PbhbMghRGUvaEZpqtH",
  "key9": "4tmXJ6wh9ZgcMrowfDXVJ9a12tqPKAeQHawEmMgyb3PjN6VnncXRYn4BCCHir6a5K3L3264ETSVHhhVyXERfkqYM",
  "key10": "4BYATADZUznVecj49UqXhpTXynXkMEXcRMngDTcMFM8bqgp5sn3P2sPdvVjJeKMoEmykMFr4CL2sQMQmyfBsfa2t",
  "key11": "3gsjH62DxJCgeSpGQB4K2dcfWKTiBSjCfeW9D73wtnWQ63WWs1FXgiYFeWdJUafctkyh2KuAwaUrixKLngx6Ee4j",
  "key12": "5AGeof7JSxNB93DYSomiosr8QbDs1LREHcru4MWyX6m1fXSKBHGymyaCpV1JsTFeX1rs45E2joM9NxtAcyGr8Tes",
  "key13": "2YRiHFaWy9ghZQamhLo1WJbyBGUuQKb8fNpwDuETNVVquYjdn7wYFmqo7VzVh3XzzUAfL2jPHJAU2sytz5V3qJqn",
  "key14": "ZRGiK2mXAmvEVn2S9YvWxbhT6kJu7DiB4CV3pH9yfKb8opXf5kJUsBvbLbZ3Yee9HD1pPqHYxvbCgyAyCMJ1Mun",
  "key15": "5oyufdPzgKFmSBmmMedxEb4u6n6Y1nhsHb175omA6b24aAhvy7n9dJquX7Rjfc1LmACmfVNG3PMJHGKSE2Y4cmvW",
  "key16": "3xzJobZrCcbDLiy9Cgmk7F2n5913jCUeWtMZ3FAysNkdruwzLCnr4Vf4LehNcAwB5ddezm5ccNnZK8u7TDf8WZr5",
  "key17": "5SJ1mQ1ugdigdQh6M8LHcZwHNvhtxyBU1FSqsU8cuZcZ5PqHXHtPqLB5z8BLMYveQAzRiX1HGr2PvEEVEVZf15VM",
  "key18": "4Y34JbrvgxuxpriLbFnLwyVHK4tk5eAbJwjzb7ei6xYznPZGjPA11fHSkhtasheAQvbZw3HHatnUSMEB27WhUbdL",
  "key19": "46WyaYNnxe2RJQ4WxvWRhPY8ffu1Bh8tuGwPiSYa1wjDff1mV6wACAnt6U39oQPFztWPgCghuaJaTr12cVNHDL5s",
  "key20": "25Knu8vG1vmRLdPaui14iTTN3L2RNCxoZxTMe4A8tosJSSkRAbRL1vujXGctM6CqyWaGuWb6VoN3ZitRLaRH9d8v",
  "key21": "5dc9djemRCoY848NnyZd6L4aeQuWa5nVCmor7MTjHB9SxPxshavko9KhjEWKP6m6dQ9XNEuL1MBKJpTMQm3WruBn",
  "key22": "3EyTWMnKkac4VDjAsEhupTkoYjezwpztAJc2zv8wsgEyxhDnt79EWNCi1J1vjeVM1BP8SCQBvrAp2Gw7DHkhphsD",
  "key23": "2Mcu59V3XX4B6CJngWzZuYxqYWyUF17skuPtaPdaRSUnnqfH19XUTysEhPwXHtjGbry267PQKPhcTX5bCpZZDRJ8",
  "key24": "3MPBzzVZ37S6aSd4ZXYDDNgAHvahJXuAmFvespWYQpCujRra9Cr6V6d8xLBm5j2oUB12MncJdErH523dAQ7wVYQy",
  "key25": "3eamqGAd3i4nmJKEHV22f6Gtd9ZKmS4VrxvtwEM66XfBcR6JWHxw2LpbnENW5sJYFDVrx4LntUyN3hfAb689huCv",
  "key26": "3FA52Wv62J17BCkiBM17z9PnkqrN3yd64HBxXmM1zeLdFqsgESQJ4HdrDYveVmes6qU4RvcaUmyuH4gHtf3BQge3",
  "key27": "5zosez1LridUqBLNVtDkVydhQofYhazknVXsfCr41PwUXGFsAecajAveujfeRhYBwLfVrJ2arsMsqYJfXji5UWBG",
  "key28": "48Ddcey7h6y9AXy51bdGku77dJB9tWmaEenvwLF3t6LqmhKgJsKr9ym5rXpMVCRedm4PdBeyqb5AmjLYWLFeDkPN",
  "key29": "2478mZQkUxsunhzYtvjoobetXdrRRr6UHkTGqSpueHG79Ufm3Dih8RGTNvprspt6eA1vXkwxVrA3CvZ6yTU87Aza",
  "key30": "58EsNiBNxzzBkU2Rt1pLc9pp1XhUqjd7TeByMUD6FNeYx6wh7xCDyk4qtgmBKH4wN7cwegiWty3Bmuh2gcSAYsen",
  "key31": "5mpCKvAgmvjNKEN2e3mptp4CTCy7ujLUren8oYLX1iet1xMnN4dRb55fFpht5vpWhd4g3a8owde9CrBtVdLSwM3F",
  "key32": "4X6R3NpRMvJURqRm7bRNRNyL86PoJEv26LwDH12WnVvwGXZ2W4kWVcRQsZCsV1gmjJHMTagmyi1X8xpZU6UoxrJV",
  "key33": "3jV5eSTP9c3pNr17Nj54F8MpfKXMWXSdSHYRCZGw9sxXVLTerEkwLdtHojBy1at4kfVbirRZshW8jymN1ErzFH7k"
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
