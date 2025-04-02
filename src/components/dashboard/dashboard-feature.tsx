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
    "5p9sDaeUoybfWLj1zYCEvPaqbjmhuLwrF7j7d5YhPRZ4jaitxMoiJbHDXdnMXoKAKC4aGLnncNd2cjJGFZCjhoFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A31oyKPEGjYhZ1PqN6dpCiT5dUvXME8Ek9kFqF8crdkiiLMetpiHQmP3NDh8LyvhNJUU6FNa9PETRs994CSenhs",
  "key1": "3iK5hKuUJPFdh21yESYbu5KqLTp6ZUQxJYwnKMKFGrnZ3zeYo8HxhWdVtVoochuon8N1AtYE6nez5a8RkgtLC64s",
  "key2": "g4fG2ijk7RWsFsXhLuVuSguhGANdHcxrjuPrK9LHCwaeDageeDw99ThGtiRkKg35dFpEuobKuq86Sdp8tMpdepz",
  "key3": "5GhgBzQi7rxLme8piGC4HZN6kLnHEbTiRv39CiacoPpNWDawCb4t3Kv3dUFGqhQa7wXsSrDqQ8cVjyuS7W9UNvnU",
  "key4": "5mvXrJ5XPKty9sBKe9GJGhoH79g5YGFNRNaQmh9Uga3aqqPQvLej8YsvmfuFB86cdEP9orVaLoA3n3hwguKZV78D",
  "key5": "56nAu2i31qmPbMBMj9r77eaaBynnkpg69rsAXnnTudUYCnooeRyFHtYCAmCte4n9J1rTKsAsWmd8wjAgbMaAxGiV",
  "key6": "44E2XczVrSQFpRrEBhGRV57AiDMCVS81poMHkfSgyGbjcLwKUvvWrtt8CUuWNTMuLiCqT9S7NDhjG2AMZmPTbHpM",
  "key7": "57b1FGFsRnZoPEEXBNhPNatvGhAizRkC2G7WziWapj49cmQ23yKJ4rfezxuBQSekdB2FZbVmrsK3ZWS5WTEWJqhH",
  "key8": "4cb5rej4NA7hnvZPdijyxkssvoAJRheXsiQ1xPrcR6DirUg1q1WrEGdxQ8enPXtLLCnwPkzT5kT3YM8821Exokk",
  "key9": "2x5DQFbmP5snEAi3MjXpVA492LyZff3SHDpqdGmuPiNmNdQYQnDi7DnADJwGT6x5TCGWfBVfg1jP4uvQronfE1eV",
  "key10": "2WEjv97BK15Ti1R3YwRAwFvpCmyDcyq6NZqLaYDNYGfBo3xuxb19uy8inWtp5MP2JaSq1PwkknzsgbUqMoyN64Fa",
  "key11": "3AAqqTvBUXymzHw69Lz5UwK9S7sCykuNqANUNQqyvJDqsKW5hnsWMA2i8uZ4hfVjR5ZjR6sdaeKCPtdNPW2dxY5H",
  "key12": "47cVW4iAoqMYsKaGAKc4FUeU2EpVWfXbSrMmns8nJ5tGnPeTKoG9XTLXY8hzohRGkfWv9SLnphjwfjg4u5FxqeWm",
  "key13": "5mUZLe5jbcYEEFk4ZTdRfEHDk3hVJMcF7VkToR8DvrsXtYw5yF48XQ3CdsDPbqGeDGdweuxp4SNZXftrQQRz2Kxr",
  "key14": "4Yse82hsiJT38btkmaKTWDGWSLtLUQfCBgmrKXdFHrmY1SKV7V9fLCWjMXE9HitrBiGhZosrjEKwhRo73XQm28SZ",
  "key15": "2GNxkBzhBWeUNWi2bvMj16nMF8k7QirBrVt5eepHTw1x4H8WhQaApuQnaC3btX33efoqcTXtU3ijuj7GcfXs8jp9",
  "key16": "24pbqFhWcJZkVeVEEy8KGTL54Tuh6AcfTGTkuwRYcGzhn2q2RHgjnX7Nfta1Q4WoJC9C8ar2s1MLzzawwKiPAWpe",
  "key17": "2Bk2MZu7z4VjaVN3ZZ3j6FV8Sh14Rknq5vGALyNhajah8SMcZmqMy5J9qVWPjpCRu7kUbFNz2MBgWPX4PTYd2338",
  "key18": "Scvohh5mSJuEwUocUijVoN74o7xRhRiU7psSjXfGryc5wJ5m5afqSnWMacxwP1FYFao4MAoSshMbSBetVmyBBmU",
  "key19": "32zcnbQNCNB3VPqU9UgA6HP955fjMBDSES7Z9EvQoxaTmrP4KeArCxWLfWMNyJJLrhshUAiQHqvi73LC3w454vGj",
  "key20": "4AmG8sxGsHro54msztQL6x2yzNY3RF4ShE5gbjLECzh6UPWpRrzxD7J2wXBAvDzAoCTQivW2pewUcL6hLjZKqzfG",
  "key21": "5s4DPsZD2CEHddHLxp4ptDc8kPMfdrUmehhanwAD43Tc1kRt2PBXuRJEGFdbsnWD313pF9f1qBkaPLZzd8kVuq9t",
  "key22": "3EeGm7DTvZwq1afCeQkDnzbpwFd1vcCaTd7ygqyfMpLNp14zqfRH5i24WyP17VfT9uJCADKw5TYLiTKJNh4Pvuek",
  "key23": "MMsk8MP3Be495dXqFhh7KaCmg7nwLspuNSYf9oZDKg5Y2vCqEQV5rzYSFsAAAdFtqDUZ8h96CTawvEk2YWhjjEm",
  "key24": "3X9aihQPVUhjbsJVxKkRVEFMdxvdNt347H4Z1fyXafvscWpV7TjgFtV2EnuMLRC5mR511GL6HWzmpZVfdSRHzqds",
  "key25": "26c9Yde6ttPCTuK1yfGP7fmCA5xjCHgaKxLczSJhx5YrmdSTZ7a5aNwUCrJYYrJ5aymya6gb7dHfiR4UWCU4M3Qp",
  "key26": "263hAXELeznSK1w6tFxrv9umsBvtXfXBVduGuz96nSR9nzQg4LMoqkSiPtbcq1JG7A3FA78ewtGkkkuFTySogwqB",
  "key27": "KgTuLnafz1xF4CsjeshQhebE5uUw6Rkz6hnbHQW9pd6XkwytRN3Qqy7DLBFTnwQTS7mrbFAQxYxHmNqt2fNrhkm",
  "key28": "5H1Efdfh9JjDB6zyfa1RZ2ipRUZtHkhAVyZA6fKCG16RgVGFP6BfgJd44gBbMyZC5uvZPKtfSSvpmtingXGKNYKy"
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
