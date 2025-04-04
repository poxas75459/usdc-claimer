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
    "2JWUVSjjFRqjKbtZsH9dKcneR3MvFt1wSyaU6fmVB49SFDx8rUAqe2AzFJ9mCuBSK6rvtKWGx6vhSojRq4XyEnP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEdMp8DQ3FFHFwKzrh56dJFWWkbeHPvSHzviSrbQ5w8oQpgKBbD4bHyP79uxrdyzbzNCmVqBZKHGnBaxNNWVQd8",
  "key1": "37UjuYpCRvgjJggmmYgjmTj364XpokZaRFZ3PUMfHJtYSTJNCkepqtK5yTY2GWAMRyPB9TMNGjm2E4U58gNFPCdX",
  "key2": "4XChzNuKsEYJkj16wmEJEw4UKe21HjvZVxbwdXJZ4iuHhZoMoTotgXAcRTbM7zXT1ngdDou2hZgq3yg2NBAN8ZPt",
  "key3": "22eDAaKtjBKVAm7RZirYMYANi3aSGYDxpX7HMVx99qDvzXifs5baSjMYwLVCnicir3WhPE1Dif7vjrHJ7ybzamgR",
  "key4": "FyTpWhCJYYgBQbL26SRRDoaZLfnd5f4447yFXrLuT5aeEb8nZAMMiS3W5gCAUVC6fVJQm9rY1DFNeyP332T1SsQ",
  "key5": "4MHC1uEEzn7iCVhKHsKs9zLQo931QFGsmHheaD9iz64Wfn7AqN6GtZSHDTsDM6EEgRE1YdBTZCoBv8tUrXSYhMD4",
  "key6": "2SHyH2hy5rStJdHyryNuLRD9zdokdu3NAFCnLk8uigB3CYQ4Hen5f5YzFS18oX3oCFv5T46Rb6w3SgUweTHij7N6",
  "key7": "4aTGN1GQUrQ7XzZK4m5czjxjU6WxeneKaoEAoE2HQ1jqFnaefWdHC8N7hGXz5ekMrgZEit3gw4vsNrq2wga3FATC",
  "key8": "35hXKDhgtZn7DqN3d8mnjWsSnZ4iyNauuWQFLySFiL5xXC1ym4q4pcpfjp4TdP4kQJTUgGitYtUBCsYu1vZegdhM",
  "key9": "3RxVZ1vqEEDg14LGDvFFCfvpiZckxizKQG8ZkwBiBjZL5qoiPFKA4pLPx9SdFkQoqBEkkwUwN99ofAfBTTUdypc9",
  "key10": "5LymYvDWPKrd4uDFNF7vChitXi9UhzS9HpdyjyiNcRzxUigkdRbMnDYUB3niaqNLFr3BWaCrbFgp9pP2Dz1iLzTX",
  "key11": "62CkLjNZRVpCWZtDNisTp8NZNgTL35WJi1wMriMEHi3UTRRD1sPc14VoXyizwrt7STF5yS34uKgqWW2xR1pG4hRX",
  "key12": "2iK5hXSSCSenPLie5VGfRrDfMNss5YwkZnphqpki7MwiS8nvZyfphuQqU4tWQ7KX2onAL64Q74YpFEDcLvVD3Avh",
  "key13": "4cQpBTeZ4fgyYsdtMuFeVSD6TmPSiuithT6Xof1r8WVYcyatNN6MWE9LmK6mYKPZzn8Q8vwXdpB1wPEJ3DoTWDXm",
  "key14": "5Tnnie5TAtk5q9PJphSmvg8dRjgtUHRWYa9a5665yiz53syMpf4wGmTTDuAXroJmWXH3J7mJAQmcM9RDo5puXjnj",
  "key15": "r5PPXdBLUAFHmYkZa2BKBCFTTsX2UtjDYPSN8r4GhPWmLrsZytk5J2Ebusckpt8ar3x5XuwzGBrzVzRSGxfo5E8",
  "key16": "3gUv4pu9AekWN1QmZdAjyS3GHCJ3SFFnzhmCqkJSf2mQtHdgdk4v1uCPFhbriu4LmokuUGu4sGQa8wt5Qe5gyM9R",
  "key17": "5YgngaE5FUmwTCR7ij1zTc5QXFD5vTyqnaGfo6Uht5YhSmnuq8CczofVAxG6eXW2g9rrn1xGa786PodpHDpuxCjs",
  "key18": "28633vWEeNeCGZx2ovevLbZtUt6QDaFTbRpd1qv77TZQqJ9Q632i1TPpyqogkBSdW2UR7PUdjWVXnYJ462JXXgC5",
  "key19": "2rqJYp9mvk1k1dF4xkRDZfQAdebfa31YkiXHoajqFqEoxfjYM7HKgu5dAQBcyA8pKodLLeyrUPixgsAaesg2SuWM",
  "key20": "4QXrVt94mc8qxnW5XGsp9wh4Ri3RH7kBNCQ2HhpNQMXJsPU9EcAztnqQChsMqHiBANuBEzzcYGDstrnTwRZiYU67",
  "key21": "36hL7ebfC67vBGgSzPRkq9Be7Bmuqe6skdoGk5fPuATCfoAsGTZVZUnCVKAKnaJLhRkDAaQr4RpsRY4SQwqt75Be",
  "key22": "t97exhQCKnVcjxz9GVLACYurV7PCmqm5pZb17PHu8yT3ZdFsEGQTaNY64fRnXrCjz1ScwBw5tmcChYLCoRKmZBT",
  "key23": "4kw3ZovbXi5ZjsB9xjhYDyJC6idqn12dNmBbnepFEQnfxsgGtECxEvZwhw6jkMFBp7xLoq9UzBKzR992NbnzqA7R",
  "key24": "zFN68GmiTzgg8Q85Ern8c7pdLc15McZ8u6c4gREWKYQrhGe6rdCH8zyuPZdspJ7AS8yocZPTkpx2MfitNMjhYU4",
  "key25": "jspegaYR4FPMDbryZMTc9x1BXLARM1ftseTq8Bq3WqjCSMefyxTHj84hBa4LSHhUVSaqQWjGm6YmnTSGDNHhz6r",
  "key26": "4KbYQ1J7V3AaKqktkYZYzHUuS63Y4tJARfNHZMQ1aRz6Lk6kGhkPshijV1XuvMeLHdsi7miRmmtWvsWpqjydVRoH",
  "key27": "2pWgj1nk5VUKNoWJDijJPjnzy5jT3k4ZiM3gLDsk7hqduhFRXr6gPPoRC9dWU1DwCH7Z5KFX51Qr1fyoQmu9EDjq",
  "key28": "62aa1qVHpacXSiP84mTpWdZcbLmESmJYyzdjodep5GkZGAQAKhxv9jbL5385q2HaBs6aXe6kjFxeGqg9fvZF6h22",
  "key29": "5w7VidTueM2FLQW3gs2joRwz5YdvzApF9xE5ZVnubsX51z4Gc2sYEuHWeeF454Tq8yXXxFxZUm5fQFfHtyGgQwid",
  "key30": "57pNTZaZDzMKY3aXJWfuqo5jcSVUdzd9bUU4jDAPoLQLLZFhg5RVfcteNgHuAk62oECGNbzSkcpqtWhkEgS8ewez",
  "key31": "3St1st4JuSwxWxGHpQLcPXbBX6rjEDDE7HqLhDYdGeyagV6fseWRwZh6CRZrXu2Qcn4Z95yAE4WMVfM5h1dd95Qt",
  "key32": "PUFSUjVfVMsk8642RrNC8vtoaThtVAedsQsysXLPDdcEd4FJ96MX1JDdujF5CFGo7Kqh5TYYKnUMHaCC13wjBbv"
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
