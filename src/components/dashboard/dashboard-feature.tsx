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
    "xZNYcLDLUeNSJWFSpcdX8M2QK9yZvNGb9BSW5QtwBwQoFcZrwLCS2JLupHVwTCSVDz3wYRdmfjUvGAJSCFfhWPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xts49FejbWhPEmYV8pJBiBjVhfgNhytWYJ1kWNqFW4gyeyTyxTp6WAs47k9YEjXk16SqrZD2yE3Fm5JC6GUjnPg",
  "key1": "61pp92WK2WsULAKNfQTFu9DwSipUaySWYiekEYVaRMf1USuiHKBoUtGwEYtu5sQT4xzEDuaWLkEZ8x7mR2sQKMJq",
  "key2": "4AxnDE1StYiuDVRpEVWfeYywPqvRvdPiicsDoc7aEyBcD5Y3CPhF8A2Dq84JANxshYie36BPm2LTQTsPuCNmzRk4",
  "key3": "5pzFFqKEab6SRoxo8NDJr2imM7cqB29wSAW9pi4sTt3uMq4r28YN5aQh529VHmadrY1oFHReb72WZKtHmSYy3195",
  "key4": "2jL5qpWWM6Cuve35bf3VvEBe7WhDFW11ynrwZ6N9hh7BzHek6HRSZHsebWWdY2wor8AcWYtALhRXRo4jfmKR2B21",
  "key5": "5c5WD2ke8FcJc4dtQNPPgXDthe4RQpfFAXQwzEyAMYkBNgwSqXcF3DpeoCgGv53NdN82GXCYzWMLds8vfKtwG4Dp",
  "key6": "25XiQZdGgADn3AcmHW6YoeqnrjfmnLq6y88qgAEaSqwKP8cPn9GDPkBjuT6EhQ9br2pnMu7T5FeagTdSNo8jsyAb",
  "key7": "7KH424NtuNrB68JkpEK9pSMhRkQLK37AP89kuzaWZyyg9i3VjP1Q7LGfHxjLoT4wzfavFTbuejJqLkiZgieVnYP",
  "key8": "2ixmTBie61ALhFXE8m7aacB56kduGBJZy2AzkCnC8y8KWekEhcscHJDctnuU3fowiSqfbwMM1pPpUWMa3s7Z1oE1",
  "key9": "65JnLihDzeZPKbrkhCGN72wXwddqib7Wq5P2gtGRuCQi7p8qbzeqREFz9VYm2y7joFn6Yb9yrt9CDFRwRyGwtM93",
  "key10": "5eV8NipRx6DE9kh8m6kH4sNqbVdNEYJ5AvZ5CBgzci5JbEwZyv4cMCXQmrWuS1nFEtiX1coARTVdtepJi5ue14qx",
  "key11": "3b3e3S6zNxsPRFroAYAsB2h2FxJXgqqvPRWYWevmoTtD6CaaKVAHqS2TTEmEFvFUtdm8cADFgGf12dW1gmpCws4a",
  "key12": "49nUaXuZ72xZeu1ScPwMAHSHRwGPv39vsXupmNqCWVdbHcUL9TRJCCTH8hYEKB2D7ozV4tVBrZeKKSKMqAc8puBD",
  "key13": "Cd5GdajiE6aF9o8dps6f37q9dECcakcphR2NoLUWi45Bqn7gatHosMDZG6FjfgcR3MxpX5sRSrx6MvibcSprJ58",
  "key14": "5zM6cZWwiGHw2ERofpChyXjZMKhtYfeYKBuVjxs7F1fykPn5XyEdQbyWUbJsKKzp1PruCrvEnWvQV9L68bEKEt44",
  "key15": "5xbKuY1ZioJ6cAd8unqgqbXnkKvqxURTCjgvgCDM4joe8gJLhiMBN8igDJpyJ3euRpPiiovuDi1M1xkWUvZzhesY",
  "key16": "38JxirvYwCqTbigaNMUiyYmxTuf2jZ9reNtaXmdiQLnxHZPHF39T8aYEMcRFhE792ijPvnJaLA1Dkr839YToigj7",
  "key17": "2FHkcDpcEEogx4TuiazfysQ8ShAtQPYnQk23DcfvV74j826G4w9ky2RSvsuSzaF5jaQi3KbJTVcp58AaCTr9yxuW",
  "key18": "5kh7Gz8qc7DejYSEEaGSFSbyVamDoa4m2ZGYHstG5ouzSE1K5vTRLELWyvUk54Ko7W2tfooH1mRBW52uJRsMUyNZ",
  "key19": "x4BC7QqKJ13xQ5LKKBLmgprpti3VELnSNeU7cdGbKSNuT4f9DiUFA8nQqmdRKrYcvV8HKKaEzrjnVdJHYnvRsv9",
  "key20": "3r7ZumKnSHPfycZgEGr3PYZMwQU1YZFSZPiv6YQRVGZd4edNsDxE5cYk3oNZxuvbuvD3DRgWxJ2mVoLg5jJrBZ7n",
  "key21": "2bWeHZWFudgcvcw3fKL4a2xf18spRGQNNMGyKGh6qDCXqtJh7YQvrdvNuXEahZFPyx1LjyK9PmXxU6XbEk7YTMED",
  "key22": "4HFtju7GzsZR3XS7jMqrVqirhhrQf5Hz6NxYGb98QuvsWu5JK69nLpW8y5EEF2vDA12zxZMiqS4PzZ5QaDqw6kGg",
  "key23": "3kTVWXTX8zsuxUNG8Ka59A7oSFLKD8fpMzjYtaW35iva9vvTB3FumgVc4xNLqHM31y58q9nSVqDKExGaQanGW2qD",
  "key24": "3hZbuSFc3NLfKbvJw3zrRW3yZ4susqYgLWPjxmTBW1y19pCNaFMb1mCbtDCg8rLEmhET5ei3PY1jysFZAThzuM4E",
  "key25": "2GaxoQhuySAWNYAuYes2GXbb4CCTADq8nPKKaF2UFd5uA1AFx584jPeMAwobucxQWHrfLkFmXaA27czBbv5tQCGe",
  "key26": "5Jy4SUJok7LK5UDcaMonvrUjo7JjhRNQeBEgNu5AQfTV4wEo959y8ufmBBMRjLSCsSktuLurqUg2tQr97TndHy6b",
  "key27": "7ZkMGsP76T34XzYrUX2viuBMe3nWUjbnJNUz9xUneYmXbdU77JkWEFLMuVwRuAp38ncQreRUoH1ZWXAw7rmqMji",
  "key28": "5qUEcLhPnWSHZuR6sAYQSKf9tRn5DmG7QwzTkSMHvUqKRbH9yX1A955BHefJdGoUQNLXqpYGZFAMoUmB1CfxY2XB",
  "key29": "61FXoH2xRrPwZFCD6aYTyNvzHuhB8VgLjKdk1PjHxEcoyyY6zQWXVUba8wMsw9ne5p3euiyTySXyKS8ZPAWd9Ms4"
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
