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
    "4JfNDgQjHuHV7Q2CsqBfWQbuvAGEfue74sgmrjeZAfjyPR2doybuZeBtfe1d5AYX7TYFS3Y8TSq2inM73rEVAyev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqNEiHh6hGxjEcCeurWpr41xFHRgapDqt5p5bpn56VthYfuQmqhaBuWk4rQzGKUnyQZcpMHsTbFCyhxzAaMQYBe",
  "key1": "pJJSL7hPn67vJWLvHXBM6gLEpqa6C5QUw1s3x352xwArLcadcVHqz3TA5dAVjeWaoxCdGfZG3GwXaLfEyuDtoBx",
  "key2": "32yGxVKoRxwNYPiE89p98ikniPfipf6Dh3HUHLpD7PVPWCBbLZ6cWekK1JmgaYUwRqMPa3Fuh8MdLmcbiE2CvBqc",
  "key3": "44SEWVXeZVRMt784XeF9Js5A5CPtH6p6VpEuTB1YZy5Pg28T3iBEq3sgEujSMsdLeaBhcrfYWhEiVNG7PMSUdeuk",
  "key4": "3AVhjQbdqhJ6USd5pRZ1UErnWunvAcGPsjmDZGR3fXG9ck8cQnF9xCaA4HTSoSNzLqC4KR1yujyFwxQnh21f9bXo",
  "key5": "4ytppjVJw7gEVUd2TVvHTEkeLDKbfQuEeC58cnMcDHj5yVcxJkhn9xnfxht2o9qcWz9PbYWvAVc7pfWwWGAmy81v",
  "key6": "5JHk3uZW6ERb2cGY3gea2QtTk6fXmfHqdPEWSqZxhTz6W6stQfz5fKNdWV1CpynZEGct2U2cSVqDCFZwG1vt2awp",
  "key7": "3raXrmoXUuFzXxoJXv9pCfoXj5qChwTnhkCqfJktMWZQT1AQgWJCxLLpxuXCUHJtfuXWFTcT1WYVvEWHS3eyvrLE",
  "key8": "36VdPkp1c5PfZx6FBwmYNNx6osufRwqocnqRPmbNwZceDfLbZAiJBmFiGSocoSGanPZWW5EUKMnpv4eA71SDyHsi",
  "key9": "5qeBbVH7pGYfuzcyj9UWunzfsnkaa4RnKmUv2G6X4ZJCnePvPvmqLJ9R5abPn6DrQLWFrFYspUGLoxWkd1NmBKYf",
  "key10": "5ktzjXaZt8WtNjx7C9LVwSgH1xeX4eNScxMAQxSHpWHGhFfUQTDihdePTifxJCiZ8x47w2q8XNBHXbZdhCoeFEUi",
  "key11": "31XL9Ce7e7Zo1BqbPKkvEyoxVL7iAbxq7gAWFU4nTiqbFFiccUgDPU8eP4Q6uSu7ShAmMXuxVqiEoYQkGdbWfH75",
  "key12": "2wrEWp6QPnRcFx2W8fSYEt8YDtq9UDY4yW7F8NavEwToGpWatzPqQrvQyGguY7E9NkRnkupFna6AFCAykFewKZnK",
  "key13": "5egfZSrFKPKrcAzDZo8LbwFgPPpckrVyJCaPAqjAbMdJiUjAuxLDhBB1fzEn4DahSxmDrBJbUB72yCNFY84X5opo",
  "key14": "3sgxctD2NVXYkAdDB5SgLyUG75Ec68LrnYZv1LuPzSnGVf553GmRBwhtGYRHShZoqytTfj8hncUXoTqX1W3nbDbX",
  "key15": "2Wzgu4JmYuU6ukf5qoXUMBUEtKf3np6BrWzF9hNTJMFYogBMkhionDVS6ScrBP7zUvMgDp7UhcRdkQmeAhb4dTC",
  "key16": "FMvfDLx5DMaT9oLPyr6ErSe33qLJv6Huv82WdSu6ktrixFbSqvmGbWqGcGZ43gCNsZLrQfxgrF3KayR3J6x2PxJ",
  "key17": "Yhs5uXzokTif4ZyvTCRKpBERXBDShNAsEuhqdmwBVpmguChF9pvqsdrcpjiCwvLgfwdmBbGAAE7er2V2sPbBqt2",
  "key18": "4rYACTR5mfZVPiTXNjkZmkJivizyT3izJyFyRcADbgvtxw1LyJ5FHryXt8vUtfQdovq7MyKPM2bGRDE5X4wxJDrj",
  "key19": "2ThqFBFNU4ZKWDy617xjqfoZ7TkRC6QdRKryvU93Wb7iSxhKkLn6NfwDQyhFUEzXX5NgA8dLJtsEKRaq6LrwtNvd",
  "key20": "MDBKCjiAf9u2fGrhDE4pnWY7r7VSevjCizhQWpBR3ULwbb2pQWZyfTbCbGSusgcd8nfbNqSNTMNGHBa5E1BKeYU",
  "key21": "4mH1GeE7Ro8YLA2TT7CXAs3YmAbPmRikVrDa2rfyzQG7NJaguhtxFFbprWSzrNVwBenFA3YuPUMuwQVijkk1s8YE",
  "key22": "5LVK7Xeq3BnTLeDvcywkFNFCS2RariGdRFr3iXcia9HjLnRKeWVrRYPFQXqbbkcbLtDDN1nbfNrU11XE4xNWdkTs",
  "key23": "Hbfo9MHxPugnghjQkvYhthEyZUrvGT9QNw5TyePBv7xPMQBSXuY3VrhMoxwJMDNHRgdFmQdGhwUiiZou95msha7",
  "key24": "3WgpeeqfRSF7RAGQcJcD1mYKEhykqCq88CKRRks5gSszGx2jAWuYrrCz6ydor2LzmJtF9XjvVgZMmJwZmdFHpRSM",
  "key25": "4C3txdBCSX95Rfp8EUhToMqkfdna5u5Q4UoCPgL9cfotdYUorsfbEd4prAScMi6uYU5tdReCYAacdQPfKgJfJ6Gw",
  "key26": "4oCSMgcGaxrKngx9aFz3CZxoNttkS2JmJwx1VPTtZiSVHpfQkdRGoERHGzWLkNuyiBxcuv6y2zmBkUiL2mHsHzXy",
  "key27": "5MUW8oFsEZKec9y5JVA2LXimGZGKYpm8DTCeEcV5395SS6y5JeRS5KonQnL9i1mTxErja5wxCojvWhoc6qWZPqYX",
  "key28": "59qiTwrsCjNVZ34SuUnbYRnMpqALg7EX1pcB9dXqmtZAMhGcZENcYbQLvXwZiWu9WkbyaJo8sqoeNqG2mzM3a4Nn",
  "key29": "5ByY6JTbDUtDfz77JkaSc7rhiLL2sc616zECk8MqU6QPd96ttH1xjUaaQzNEYGeg2dvF6hqBWJXoZUvjtdeNwLWV",
  "key30": "5jBRua3osBSJByxb8itHzzULqE8oaWCYrNCkMzEiScWqc3kr51Zt762DcGth6vqxkMb12WhvUKcAb2WhmtKcPP7p",
  "key31": "5UTUdPUgMooDC79BCgaT9Lc4n1KtjBMbZrQzPgdPy2Ek3EPCha5FitUh7Q4zyMnWVWXLgt877q147mLQHtssMuqx",
  "key32": "584G4hGEvwVFavEgLtaESpnhDxM49RzKxnT9xJgm8V9P7Bsg6h5m9oiVzKyqS66nDLqTZrUv1qwRSabXtdrFooaK",
  "key33": "4nJ7sf2DDDfubqKBU9X4KagcRkwb5daz8A3p876c4ZX7n8B27MkSq2nZ5rafVMvM2KJx7ShmKvnZpq7edhuwH2jb",
  "key34": "66RUzdk4BFUM5rmY2D6cmC7EemifNcYx88wX77PpUjmtcPRKSJ1Rq6z1h7MWNqDkL32E78iDHTU1tAs7qGu9aZjQ",
  "key35": "5Av6cFpf3BVHXkxcjxWm2x5PZ265FehoExXMBfWcTSMTRAVqzCYQfXqa6KfaWhcTwhh9A2XbRncCGKdpFLBsbBU9",
  "key36": "2kmiNX4ThtKxPEjWMz3Ejdo7M1HxDJdkayf361E2MccfqpafG54vh6bEr99fmkJcXWZXmdDxB8Z7PAD79bNBfvSZ",
  "key37": "3zZpqTMjTHyQYXSd98Z2k3SNpzeVnQgVjPAyvrR6NN92ueeQPATwKSiBQx49DAWqeE8ytQsT9DTJJKgAUt2FQcoT",
  "key38": "63ftNTaNEujxWhizLUviXAsCq6enh2fcP8L11pZa6ttehmFhZLaPh4RCzTLqSeQModeK7QJBFrtaAj9BCtYcQFhm",
  "key39": "5hFRjzPYM5x4ZYhw3iVBqNMPAdc5Ve935SpeKaxKgQBbpG9W7rh6Q57dcrLEmqwJwykyHT2K7SZbYE6B4St7n1iQ",
  "key40": "2WvUXUkEZsertj7b3JJzVN8cUafQGKCD23NBZRdDSZuJ9BoSqUr1PBU8gqsPtxkLowNBDiQLExRxXxgfFfmf7w33",
  "key41": "5T7eN9wvutt1Fs6VxGebBXBnFiqkNVtAz7HRoXLwevbtfV15xtsJdNLv46a5HnLZavVa263gw5UHazn88ZWFieY",
  "key42": "4Eqtj9T1rVwaYmDjSbu3mG1LxnsLXQFzn1aTkRrTjAMsVR4XDYegt4kTKnT6FfRscW8iYbCzvRN3wGM6kzjKbUpz",
  "key43": "3XreEQyX6y8Swd8WdAGSzFNCBzbVu3LW43PYgLBhZYA5eSa69ZyXu7mnuZNDytPaykfJ5dvYssBfr4nQYxNM3uxn",
  "key44": "5MiXzKtFN46efaXiFzps4SK8EgM9q62fPnDHZXc6X98yzU9fgN7hFUN3XUWU2KsxNgtnsefsrDVbKeVfQfchonUg",
  "key45": "4Umh4Q8Vaiz1aVKJrckD1qMvYgUeiT8DuQrwauYt1X6g45WjQNnGzTLFw6bhoWpusqNXU8Qejm5G2qVR1kcRbBg",
  "key46": "2bS7rCmCciMWuNqffDuzUGmKAgQ8FywM1thcrmB5N3vLBnn8UZ4vgFGW4dPRa2AajMb3eNa9GPveGjX7hUKwEzVY"
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
