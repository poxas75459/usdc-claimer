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
    "3Q4P2EHR15efUsjST3WP2CAfUPsZwoWr5nPKevnBCpXUxv4VAxnyB3GnJT3GoCLNPYqZakbbjNLWmSNihALWY3LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2W39P2v17Ez6ao6BBq1Ufjuqdd2ZkYh892Qr6RnigjncM6VB9UV6fYnGiYbJJxiivba7V9AVC2pyqeT1n2Kcf1",
  "key1": "4DTixbnYfefKuWn3xfX7fhV5HchY9CtbxeaZ2tUryrwRNfmroVquixmcMXyCYVSWYe7cjxySkYhCtbDcbqixfHnD",
  "key2": "65TJCHgh2Ypk6omHvGckRZA7U8syUukTK6NpKRXb5ZLhMrATnXUkgv54tGnuFEhCxbqH7x4QiMnHBaCgLdkyri8M",
  "key3": "2JLmDD9z8QNAAJtCDYzmN3HDFoRuD1uvfE6mqqZ2WiGEq6KGi33qnpExSvnmnnV9eq2a3uFPfHiyWhDzLBRou5FV",
  "key4": "4hbPqgqt5bpXdewySDa4Tju4XBaFvNZ41TE9PtKqR5QUvkVGQfKKXCLf5xCxNxutmnq45UcMi2mCnoUZesmprw7v",
  "key5": "4MdWtYzS8PLwMQXphahSRTqmGqsYSYXTUkxxQCzoUZC75AGUj5QWZrVrCuyDh58t6XWLfW2553mEuVwup2pKV4dX",
  "key6": "2ceTMnf6Z7NHLU2RHE1bZrvAZRB5Unsetnx4uKZ2KsTgErnA4ha9cZKXDntFn8VsN4419JuGpbVs3dsEKLVpu4KY",
  "key7": "459Mr5SgVusSu3rVm5sAhKLQiWAsC8tS19r83y4qX78dgwoLL2sREQztzuW1FTdjM6ELTPPALiKsyobvkzx8VNpZ",
  "key8": "2GA9bRDWMMYCwJSe2x7KfX2ieX4mYMhbUekzC3UpVHptz31Wt51WuMnsvpgh1ANxtJnnNgsH4ntJoA5dE8YfcGiJ",
  "key9": "gAJQd7VeNGhJwbjzjMmcAeDGHYqoXXRpxvHMLf3BUCvnqEjc9egcof1N8C8QQfrJ1QKDUbBdBgbmh3NUn89CbD5",
  "key10": "3vfp7d3ioZ5GTJa23znzAXtdNKPb7sUCpq7QMAk8oBvReL3jbM5cuHHE9xW64rzSJPZL9grP8YkgTjBs4cByNg8w",
  "key11": "3vmC3hMikh6qgURoQWsRuPSxP6eTEuL8dmg79v6z7hC934mEHybehMxpsfCMrqZeT2Lq9iz9rsGx7526XGzrth5a",
  "key12": "4ZNoVWjFgPK9PUQM2aAqPAFVdoNQXFxPWq53PpWSeYsRiQJ9jxR6qr6s7XouQmEt3zwJ6hZxadrspUxDrkUHyHjG",
  "key13": "4RNN3sBReQwC1AHi58h8b3XBs4A7aeDt4Aw4XoXUKVRmVBbFx6ezqQ5C45pV8xL9NvjwEubF71TetbkPVCLMxmTi",
  "key14": "bZSZwJFySuLJ3o7vETCwmYAhek1vPrzLvSSsXe6od7uQFqxZgJtVzvv4JEaLwdWrUtgKhseVEd4kbJ6tHG33BE8",
  "key15": "66HcvvChDwtVxX63nu2D5SzNcxKg61MfMVh2cTNmCt6tSzXM13citYPPdo2NDDDT1W8nXBjjoQEHYBgHLQ5bEi1u",
  "key16": "5NrmsaXXTfFWk1nXQz6TmuDykmin4sNMhQpAPxpnYaDMZNGnWVaEw5WUHZGY2e5HaYyCQkQbU1smN4xCBNKohupy",
  "key17": "2c2y29AuxJDVZox5er5Yr3fv3V9anPpRgWQNjRktkTUVL7hQ4rR8AvTe5ugtYetKWAA9BejkCwvPUgQrqJkE4m9N",
  "key18": "4zWM4x9xB4PBC4XeWw9C989yZMKB4dwHjUZrqSDtAGQfWJike99oV9eaZ9CYbjtRLGmZrFXVUSiL3E7C75iyFPyT",
  "key19": "4GmsvEKeigYwx4M8w2miVBrCA6SeLH2Pchb91Pkaxs4B34x7v9idpWNp1KC6rPRC4ufmxB1VvH6oHkRp7gbWLzCR",
  "key20": "3vponKekyNuwMxMDBgnWkUVZL5M69fNmcgosMbbzq2mFLnzMSCxAXtbynbJTFqr7CSQoKnHhm7nkNVgJiJWSPUr1",
  "key21": "2iqVjUzzyKmykGtm6akPVMsAoPdx8c2vs7MaedTDNs1PLzwwgUmv9MVhkKZuEhwJYNNybviyBPEpfY4LcKwaG7nK",
  "key22": "4zbTf17e5RTYBP81ntv7JLQK7TtNuByLXuqT1AgTMbMjjUyb6uBNkEw85utYP6K331oF19Sh64nb2y5WiHAmL6Bv",
  "key23": "4gkUPMGfz2rGN23p5TATckmgGXbn2A4upSUmVqU1g21bDmtK4eGLPHZs9PShAQ61d9rdjais52Su3d5hjWXdF141",
  "key24": "4vtpgRboufuxauB3B78iK1qXAz8ZUCvQG2obT79Ptuao7Y1VAcpARCDddruRVMrgRB1inS4whuujR8ogg6DUZVN5",
  "key25": "4i7bhY8UPt9PsPjUoSP8TsL2hekoUBy6zjfM3Txo2f4RCHsnTGpsaQWVCtZyjrufbKwTJQ3UP3sXyu8YBcTA6Xgq",
  "key26": "NjR5XsGqGSUYnauhHqxquPQL8Pi3Ncw24M74CEFyhLCtCL62MaHmEvSiSZ26uQLkUGW9hCq6Pu31GfAUegxYmqQ",
  "key27": "3Hp9ZwRNwJEFGtkhtVhNmqNH4b9yPWtaP9R3viYknyGTSMFpcb5BTXRYzswnxubtSJr2hJm7cg3Fwd9LdjKfPX3o",
  "key28": "2MhRLbFBwkBx8qromUmN9eHgDAFGhrj7nXddAttbZY6jwbSSwPfxZ2aEG1iNaTZuxkUc7J74uuuqjvsLdWm5fxRD"
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
