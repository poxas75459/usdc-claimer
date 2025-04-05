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
    "3AAkaru8gFthPLzPrzQgA3JhEPSTg6xSWu8VZ3KnoTu7UjXjFa28QLL1wjTFRMcR4fCBeKqc6e4Z6MMzM618wMz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWWGYuVa6iDp9ycw95eLdTPDu1eboS6x55EniBr6mG8UEeZ3YpeuCW5wbxh4GU7zFmeUsFNUnEtzKESxy1Perc4",
  "key1": "4NUKTcAFtrQiesxTqX5mmeEaAojtZrNQDuBH2fXtq4r3fm7x9C3k18CHfNCcsw25HeETrL7AUyfBiM9vFqexhm3D",
  "key2": "JSh4nZw6oMe7oJgsRa15u1p8s6uRQdD26yshKffd8k2RPZsBFPHPY6g8Bqv5qQmHbrjbKE98x3RMpGShNcCTXWw",
  "key3": "4h25LQJsBrEwX5MxrA9EtXDUyaZGcQsoj8c6388npA7qbxbwhA7mJW8txRGNzTooftGPQSzEyVY6tC1f72PM4i2Y",
  "key4": "3fZHS9rDLvudyyHrRjmZrrVdg5x9vkGDnAnsmKVRE9GPC7MERM2Dz4j5TPnrn3dvf7goSTaoThCNrYFq7waTxCxn",
  "key5": "3H8JLRL9RZJubnrtJt71DFgDo9ZM1YuLJastBj6gmG8vT8xYTPLNpoMrGSZiHJw26ofkMtC7S23nQEQWV3xTrA8d",
  "key6": "3Fu4qnCGnQRMQ259TzNfsNrXHKzFnMRGVrm9ck2KC98om2AharMrXGwxfktmpz5Z6NRfC7tvVxejLAu5GSnt1pEj",
  "key7": "5MESkf4GiumnUdjUJ9JMMAPAudbrWSvcRibtuudwY9Sm1UHGSV13BmLkCJqH33MFoHojdmvuzYS6ERRhU7opzXpp",
  "key8": "329vacVQm6TSN5Pcju1FvKdqKCUEuPCcKTZy4vPknpPKWJAkzbX1STRnbnJJa5RAZe9PMeVVtgCLCgMZ9Sj7brXG",
  "key9": "39bU7AehUt85rMu8tgtZaAoF7eZ5Y1CyDTjUUamkFR7BQ7r5Zh5a3zR72S4fq5RUMeyWMoxhqFXbF3nnyv7tzvnW",
  "key10": "3pNKQ747Ru4AYQPE1Cc6P6sSd7daRaswjiWnGxzyAa4PU2d3Eeqf8DjR9oNETn5VtTkqMjZrZNT2TuZUPpL22rBZ",
  "key11": "3Kn7Xoay2XPhvAH9SeKtVngjXN3uDjgakthWxQ7vmgeu3deMqnoESpfD5M8uJudYFCodB8DBipBkB1JBLHyYLnhJ",
  "key12": "XuQkEp2PEektsC6j5udaKqPjKhruvJtsKPNhk51ZBv8twFndPQd8EYmeCfxj2dyzoNwrH44gYTWa9eNz53wJP8z",
  "key13": "2TmVYBkT7frS3z7Wknz6obKNcJQUZut8e29QJbhmoPnB8My5fDUDoUbz8S4rdcBieZL4mhRFEotafcKqGv2q4Pjd",
  "key14": "3sXBoDWnXNRxeGA2NzJnbZm4bLe7A6DfmTQgVgySq6qcUkhsSW9jPanowcview78mTYw9r6BwByKxENhzPT26KQC",
  "key15": "NiLGBaqGy49kJT6YRVn5DaBosUzwxCKjmGUvsEW2yZkFBv5zoL1JxMX29VN3nc2M4Ez2rawwnWahfAEZX4cHRm1",
  "key16": "4U6FWe88LMr7uB4NF14R1o8yeJy4jja9xPpgvH3XfNuWwW25NBzGoFsLkoMkRHYgHuCDgsYS2dxpRRbjQ2YgR5m6",
  "key17": "4duVybNTjoQKmX5Virfo6DzXhHwhd1XEUukhF2Log2JL1HQQhsGTjkscW7NRKnQz8SdK5u2Gb4f6gzmXdTQ72nKg",
  "key18": "27Zm5JzV2pfk7LLE8iApVyYiSAt9jvxU2qTnyzqfEzdmgjAh9JMJ7TnRC9bVW61KKHEoYRiBDtv2zbqNCLCxbBif",
  "key19": "3CJNT7JAQD1D2Q4dBqzW1MRN3YUtKxtbFVBFNja2We3yXuV1YvtVykhfTRhX2YFCZcNhFwtmtwbE51oSZfSeePkA",
  "key20": "5QfVSWwEVYw49QwpN41aqY8qp8DoTqh123UA3i1pMFQrEEMiNpxd1dDQFVe6esBN4UXsmivkWssS9f3UQZns1WWA",
  "key21": "H4u77qTFd8HrZnH6UkKvRNmP4QB5nx6E3CMdQ5kc7wBefYg5TmKFn7DqJZPcdsafddSTA5dLXh3ELTbcm3ABrKp",
  "key22": "4k3qG6ioK9wwHtjVUfdUK2KSz7i238H57tJuyyPh22sVoGg5vYyxDunBW9f9N92cfwwtWP3N2Jyn2U7nbzPb9heQ",
  "key23": "pgGdzz6MJkiLLXYwrqD2J3HFxGeX4X5t7k2ukMfLJsK6vfpE1pqPQXGv3o113QNW7PMk5Dfcext4WbGCxLxo6rT",
  "key24": "5XvN3jAn3pBC3GrdZeV7VLiYvKrcfvxjGVEMUaCfnxbimgcDcPYVP6etyW86iCN7opd2tbmQBx6eYLYcKebJ6b5T",
  "key25": "48szkTZPdzXYERbsom1c2mUuFTL1xBvZKCfdv8VyjzGzaG2K46DS2pLPvLkSWXfQAJVn8tL3D7LtNkw8AmuXUZsb",
  "key26": "5hKzcTYyjQQ8uQvJ4R8VjzXV5SPSWkjbU7YwHpoeVEDdF1doRQJWDgPQYGE2aS8ewXJEpH1vQzp8DjXSiYkWSGYi",
  "key27": "4ucECmZXsrMy8yfPCaRk9ugfweZ5J35XCAJCgEQN4YCWsnzPMADxVkqyZaZhYqPcHa84bXHbYkYRsxc5HMUmZb4c"
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
