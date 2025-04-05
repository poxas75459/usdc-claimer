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
    "2SEdD5AqSU9vQStJcUxnJcr94S4HoWXZVfEaZ8Yqc5tRxqfYUCoWAHidpSRrZWypeVWeiYvNf85HVrJVqKxZiz8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sohyuK7HufRQS274uV7Y6sV6c26VCexgiE7drqiQtEz6hGN4dNAJqwBFP9sHULFefTen6H6jGwSRxdEWChc8GBX",
  "key1": "3pBZFsxaYmRGehvdjheZvdTgfeyrFm7dfgPojCDTnyBwW91EW5ad8ryWD2PtSFmrGGp4AaYcpvSvS7gBRK33kTBY",
  "key2": "2Txzfp78smz1AuYt1BqxcwmkMfvS56UL39STqzHXxp3xxviU6B5WC1w3yNGcB2knhZbbLzbBTWHYjcaXpuiVRRv",
  "key3": "imyKUXUwShfiVxLu8tqCdKJvQy7Z8pxR4YuQJq8x8WMu4i6HgqyrfBr5M63J1rVLsR35WYCYJAQY44YhdB5xbrH",
  "key4": "3HEm5TznjZAxYDZqDyLA9hq1kpdjCsNtfnanfD5cgaWUgJDiincFMpQDAk3v694q4XxZc2YqbnfRB7zB3EibcGZT",
  "key5": "2z73axUmApUkaPRANgraTuiRdf4pr8SJeNHr8JiFq7pKi3eZWqFDxoCcGA8aUsPTkaTAJhpSv2s1Y1f8LzxunLnG",
  "key6": "3XHfy8XQQV3JweEpVpKg91uJARnCmrJZ8mDTxai7T2DhySw6w1SirNSBTsubkYy9YM4b7Yie9XRgewLM3ZWW4KP1",
  "key7": "47w6qMp6MFgoYetJsZeo2YNT1G68nKi2XmBsTnkdGV1r1zdSaD1jxzG9msGNjf9HhWYgYpU8MJ88rYwG5yveS8iz",
  "key8": "4YsxzX1qtCsXqU2wKTNoKcPzAj3qt4nkDQNr8ygoNdnAeGP7Fy4cU8dzwUt4z4VQjUbBhFowjamcVSF3xu2pUhV5",
  "key9": "sDECaiZmjy1giFPd7VAsfc4j7ghC8KviR4pgJ4hDkr5Rr6uXtWgmdR2reLQtJajz8U4NHL6Lq7JbKsLqA1waBh3",
  "key10": "VLK1HxrRbZSZxURj91aKHPtDn6dYxt3VkhtB33qHi5v3Qj2CZMiqvbEmcoE2YVhVgXWerafQASVXt8k9ApcHgXG",
  "key11": "5ZXqpc5qmWsFUCqXhaQc36HWvuLfMRnpgGNZSfe4t7MG3CuThg7T2PHRaULtsvR3fgvhDtmPVL4SZsPAh6vCy9fZ",
  "key12": "4ry4EEjNku6h8cBwDVDs4YDiJ5PTNeNbsNJdDpRkt3JfZKWs1Yms1Lm9LesVeZSbMzXd1QqRiZnNoAJxnheDELjz",
  "key13": "3cUDLmVjQcHvK5hYHw2RqMjyzQSq3wsJUX8qsupm7ef3RVvDmRMGbceLVjodw7JJeHjNcBJ8seV9qCptTNqdAY3J",
  "key14": "J3dDBiGYsbHA1emQ3T1sbyQiEtaWUtwdUN4LtgHxCnCyUhTSNj72utVxmKezNhEjUrghjqCE38skWY3sAdR5h5p",
  "key15": "Ab3Mk92s2GQhjPbJuzs5uzNSQLEtVdTHegwsWJCFPqQbEeSXLjJXZ1nhmRioAdkSdRgrsDz9L3fC4bJ1CtF9A8H",
  "key16": "H6aQPvhawS7xBaDKDBhGfjVLpy7giw3BqHmjjmjcHhpbLdmd3A76FvaqU6nAaEd77yfj8yZQp8yUs1r32RmTXBd",
  "key17": "MFE5QcQTKozgcSDGGo9BrAHdiw47ProxM3ZSecF1u2ZpDfQQvXwsyavWjCsEtmrmsbUAaphcv99kcd1HaN8ebhR",
  "key18": "2zRF2ceb2Gum7VKddT2iyC5fRYNifueY96MGpa4SznJVnkBoWe3zWaTWq1P3rUNbUvtb1REU78nFX9ChqobC4pqM",
  "key19": "35ZYT1QZFVgSKq1QGHy8TQZmh8Zop1xocuMwaJ7Gry72PAk2U5L6MpJjFHg4cUV2rJUKHbmqKvUefsCfHHDqZeN6",
  "key20": "5oTqVU1hEafqF996vVsk1u8k83XQkTfcGxHhfBsu8dw8ccQN3SrTVJpNuGdbchCAhhWPraT3BjyFYPgXhnBBMgKr",
  "key21": "Wi62MDzfFinF9GuKKhDKvjCPwdLDGmt9EjmyzayiqbxS5NiuZavGfUyWGPhacHdZmoqGpruiqURis8gxxDZXCqP",
  "key22": "2gvLuvAaNQGyuTtMDok46hdFC8w6uGGXhABeJwwVSXwbEgoeXNu8NMQ5AQLnJDYUWeH6vnVRohzqQcyDu9kjy5sk",
  "key23": "LHM169m6L4Qaqwu4t6KxArcP24RYGoFdZtkRZM7LXRJ4BmBcdc2x4oS5D46WA8F1VAedDKm7SHTXapBAb8x8rej",
  "key24": "ddWRWHALiEZzqiBEFR2d3mXR9U5DHzgAFHtcuNX5euDtLxfYm2jJTVEzi4rRbbdiygm9oMayktj5rdxLMP7mp83"
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
