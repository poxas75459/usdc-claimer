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
    "5aUzo7wGE1LjgeH1LWefFiYpRZFXWvLooML5xRjpq5QAmwN87tmTqbVGjeYTjCVmibVcC5yumAeLn35UzwZsEH6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrUiLqHKUHqyeb59CN4i4NwvSmYUqe5aQY9c67CvT4prFMbZiXAosaNrRkXCugjBaQMwdzw1G1Yn5dbQErYd1Sp",
  "key1": "41uXLvVp2L4M26e7uAmCBJa5q78GT5abCW3zWdzpFf6PkK4VwCSNXBTjqEZTJmzjEK9iBoP4hjo96i6E3XanwHTh",
  "key2": "3nmaXePXkBfJgwpwiWeWJFs6qXGD27vdZAUfXBWeyJkwZgjU3iUbp3Y2aPjmtphg2eDhaPpxfQaKcmdcs5GLWAiw",
  "key3": "BM7SV6wsZUHAt1AhMXUJkJBEBxPGY7wRXW5iyf5JbShEFM3iCnZH6LTf9eTuY4vqEbcLroPJqB6E5oLnXGfanES",
  "key4": "3hMzj8fRAcagbv21NP97cpCMoVsTBZJ8LCptRCVprfZxH8HkwMamC6C3Laj7p8Lwd5ZSyUc5uYJpH4cfWkbFANqg",
  "key5": "3twNJF9EpZxPq9fsJzfbekXi2hPh9U3xc85TGG9uefwMoTuQrGsrxgYLuX9ZtcLtK1KSMn8rjBzScEvRVugNu6f5",
  "key6": "3pyedikfGZaWskjvu4vFx3NYwzNuNDVJZ1yykLADasjXpczKtNMLwT1aJejTXRtsVH4eTgDe2QY4rZEqBxuTwCia",
  "key7": "56zpZ4RtFGmHP98YaikSLfZfEy1dQgvPdGGE5S6pMLNEaneCJXGuC2a5DYJvKkNDGBDhqcsGMaA9HngRgLwMxGaX",
  "key8": "3AP2qFyndwJB7ANLWVRmJgYKpqYpXJ6ru9o1Gjikpkt4hQQEy9zAuM2bbT359qfTetzy9MKZ5DkZeafv5uAwvKPX",
  "key9": "3B3LcqzZiqrWEqbes4a3yov8bYVkShiBLsJePiH6CreULbvgyFTmapbiJrPJEPdwSaaY4MaRpJkGV8jcJ122P3yf",
  "key10": "3nEjvaCGA5PEHC4qCCyaJKDtXi7owm9osJXQAw3zbJYuVZ23syGU9yigv9z4dJGq8GZTcRGBZyAt2beE4sKbCZoy",
  "key11": "2KTkDjJzc58F7Vhw1FDE6KdnjW4BZVd3Z1Pxdeny9NFaE7wALzkn2RSECZTTtZn4oc4nGbJSizW1aZq8ht6cWejM",
  "key12": "2G8xMfSxPiRbfXNAUxQJqWx89mk1Vi11mq6bw72fbmkXjtZwYdPJk6yyeqJ6etc6LbdktZrq8nAKGHUresdZJaPx",
  "key13": "gUqeGQMeuobuWtHmidZXVqiiM4cHSZqwKct37xtvJiyaekZZF2rp8FpiqTYAktouHyEXc4ZFoUfqGvB2FaKhXS9",
  "key14": "4CLrNx9heq1JsaDLm2ena1cG4TjUsM4YbhNrsVJvPsuYDZSTXEe4syomuAXu9a662YegRc7VXksQEwFTPefkkcks",
  "key15": "3K9PejSgCnYjm7DzEehLfHyUtp5BwkZuyRryoSkHBeaARR2pss69srkEm52AsGsVy9C1uAGBSz65MzzWFkvj6WLU",
  "key16": "28ZyGmiQWNqJKTbsosozxxdG9dyH8KnWj3W11nK5wpkiWKDq33Jsn1zpcnhJbcFVJmxueWq1Phnz1n5urBHDVJxy",
  "key17": "3K5cENBVRH4EmC3nPukBehpPH4o5n4qwK23TDLpUqYucSzJ2vUNW8xoNHiDpF2fBXQTAdVxxNRavDmD7bYXeDZjK",
  "key18": "3kgtErZ3Nw4zooBnseyW13P67qem2uwNjaj5ws8YgKX82CTjA9K6VQNpzFGLLSSC1Z26zbzVUrimwn4xR4ES9bHT",
  "key19": "5rnsr5hWsivQeGUr2yGCxKjE3exPFA7D2uxXtVL37N1WVjuGEB5D8Q7MtRMiwz11169dffZ3EqSE5vKmJj8Yvm2B",
  "key20": "2MdncEWG7A13HDkJ1h7hPSuS34XtT9xXLbPHKHbBbv944M4VAybPs2o5uxfVQzG2kxZxGiE7JqwyUBM4zFqUwFmL",
  "key21": "3PCKQ5UrgtXneZw5U9YrBoCVTon4NMdRQenTw9VpKaKzaHcTG2QiKEL2jaQ9fprmJk5naEaFVuyLF6MjPfTuCXem",
  "key22": "4tktebvCXm4o37jzrf25rJGMLhqixFXFAUFxGQWAqdBFS6B8EgH5GhG2vLqsp1JjNYRjppxtxrvEygcaCpERZUpx",
  "key23": "3ijh26Ae3nxqb3DNFySKuyiH6LGNbtD6FvcvrJbojCHkxTreKfqodx3sUNEuFj8zVPZBmkAFWUqwvDY7iDoKi1Es",
  "key24": "4rEhHt5R9HxYrbEj1aEB6W34Hvh3ijqwgDianskXfibkT4PG7K19pirhFcNyW31GmaWGrkPvARstLtXtPDr9LP3q",
  "key25": "1mcRkWP5qcYmY9n43Vwiy2hq5JNHLY2dLfq9fcQHE7FshR4dvJUZG4oNNWvXbAJh5yDJaMQ16VSLQ8D5sECRwdx",
  "key26": "4NeMgbm9KaM1mcbxVdYsBxJcnViSBfLnHiwEau9CsQz2hWxU1EEhAhvdysDZBparuoaMkPYgKonLN8mSRoi7nGwA",
  "key27": "4dM8qbY4kibVz76GehkHasnhMRFbCP7pjC54cSDpbuMzaW9EqcSb7CdHaoor9JCDYrn74qBvN1gGpC2DhPWMZ7dD",
  "key28": "5wUuRCVmo3ANk81LmgLFjCpZVreTq1wRGyodnK7FyNZp36PRBgc9oxgspEXhXSdVjYrffvssY69yiQQ4AQ3jprEx",
  "key29": "4BFEgVuZgV49rfuc7US5uk24ycw6PyB2thXyEfUAAwYEsaxCeXmrNmWNbZuXwvJh82EQqnMH8muXitHrsuJjv4qZ",
  "key30": "427AzXccAR1SYRK8ZWz17rPsWJ1HpT47Cm35BxFJvKzCKAVn9tNU445WPgt4SLp2vxQVaXH6cTFtUxerLeDmZ7Sx",
  "key31": "39BAKx9RJErR8PyKhhYQe5Cnh1U5uDS9YTpp4ABw3VxxDa7NS6JZghZchsHqe82ctFwdZRbq7REyDcf14vrmGjyF",
  "key32": "5Ed94oAwQyyCepTZ9FSgy61U4JU8Ea6z2Pir7FAwHYTijD4pegMCwGBRMSjnmDwvxeAuqKbbor4KZWDovrBAeUtQ",
  "key33": "5EtRGDxF67MrqbYWzRLDcuYiPdy2ntecYx6PdqnoSiooLf1KzPGk27b8JJoejdTApYEgByUWXbRqQyYJQvkwPZ74",
  "key34": "2Rqc4Zeu1cVrDvUdXRBajK4heYxbQCk3b7qYc723EjW3HeEbbHuqDyjsKsEr3sPbpvY9tM6tBs6hp5Df7F5iZbaP",
  "key35": "5UQJYpzJs1NR81MkRKjkFBJ4TsG4EBGQaRMseLL9ERfqvWK5kKY8cJ63KcVph4Av9HeEZVWVsHtnKsJAR3buQerA",
  "key36": "vqvgHsrMEAvM3BEVrmfZzd5KewetD66VXgU4c4KtN5ZpNbBWTsxnDrRgchKRyymRM5nnX73ZVka8MVCCR7rbiCg",
  "key37": "2QSEibLGgur7NwHgdtndXXcCHUgbkKXsHydj1qkuLittsf65eyasuDg69MpLrsBTGo2JDpGVzxADS7JCn496CgPw",
  "key38": "5oofUjXkzTEfR6cbGxa1nQDW7dj8YDPgxVExHiCXVxxEEDqQCf9zicKCChZNDS44xcNdeXNpdNcXinH8TEr2nnVy",
  "key39": "5oyF5gzcZzmtJmSboswRjpjgVdAiFLU2Mex6dsiqJLKrJS6H99gyNcezhQEXFiQxcT36KtNoUpu1uCjp95SWEBZm",
  "key40": "3PX7wQu34xsZSQw9k4U3ZF819a8esXPLzopbYqVXQWGZ3SEySX9aMj93oQmaVsLDoJCMewZbjdzHwcxR6BEJJzt8",
  "key41": "47D3ajoad63bGcW2M3onNd29fKeZwBkBKPWcRhPCcyHFdJS4u4fhqzGu3v5Pc2NaMB4kLZJTKSvn21skPCnfgcqF"
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
