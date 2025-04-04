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
    "LVtHd5Y4R7SModRdJvzYFk8VYJf7CSBXtt324vT2ex37xJ2FT5MCYxuieFYnoiVT78iJwggRQ7KJUarMBwSLPbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SrPzYT6CAsqk5ucfe4UoCcscraciC2CMGSgmCnsqY9yBzNbpF73pPSEf8Qrv7X9ZpAttvHffEgZvLDxwoXSqnDn",
  "key1": "5kBTktDKqun4TimcVhdRrW6Ffj94Kp6oMtXxvGRD43Tn4TDCRc9sbjsDqvCQCLUAZPaphvR9V72p9LPyfJviHigd",
  "key2": "3qFZSzh7juFAUhfqBQtA9PG8NR4gCkB9pUSrLjqttXoqxdqdY9bsNhVxvPoQaWG3oYTY2ne345UTr78GcVradDWV",
  "key3": "4tD8dPKYfdaqex2ECcVsQ3o4mWJAMhEBwxmga1VwJ3CNBX5nk2KJcUVrwNvsDVbJM9qdocunrCXSGMLf4VtE6rnd",
  "key4": "2vt7EU48JeoLDNDUJh8vs3MjBWG6LniTPQ3SgyhyBaeWR9PjHmNPkiPpGiA46mQhF7nMVoFJuTNoPizyoU2Cz9zp",
  "key5": "2S9mQFCkaCBawSrAqBqqxhgCkSgpUZNMWrVgpr3L1oTgTY3t6hAEEvwMGxPcRXJfTaMFCxeuTkTdpg2f71j6k9J",
  "key6": "3eeYeWAa8ojGZsTXAe8K7Hdnnyjborve3iTosMcYYpZUp1pkWSTQcoGj2s9efFj6eqTYJQqB1uWVXDJiB1eL1hNe",
  "key7": "3FsA4HLc6iU1XvFYqXmyuSdEMWugiNys3TvXAVoSE3G6tf89pFWk62Gvpni1crj9tPv2qBCNFUoenLRD9KBimcTC",
  "key8": "3nXCdNAdKqx12jP5xgMeV4SFFcmJSKSui3aEnh2a15wJBHfncW6FGaAWxBa8vcrBatWQgio7ePeE1Uvzdkmp4eRr",
  "key9": "4njxbzQbosNnwazbNmFchy7hdNbwSJ55b7j98VnE7y3nC1gyGqfWaWtiVoFu6ACTxRWUiye7rxRR2GYQE3NMV4ye",
  "key10": "4k4zsArpSokQw8YgqL8PWk8Eifusr5Zfr8uovpid2YrmWxZyydHYkA7PMtyWXNhNQQ6vbCQiNuFFwLy1VTnhZHEX",
  "key11": "5AxmnTBpb3TmPhVwhDVa7aXnQPm3qcHEEm3z3eb7Nky5iAMVvFfAEvMTonfKrgz5eFuzS5zFjz8Ef9WpcVVMJbsV",
  "key12": "3HN3N9EGyfzwe9xgthcYKuqig7exw2pSFFTp8VzMPKA1PF4PsBzcXdJh592Yon5PHawgztmTqK8KAJkmNvqJkrwk",
  "key13": "5ZxVNgBw3KREMWXbr8cdJwNaKjY6h2LgvBsAM971Siy3fq4dcoceXwatSkAH5iDxL4MdL9AczkCjbjfScXfrqLGz",
  "key14": "4NPMQ95jBZbZo7S7hGzxJ693zo2GhN9T4eYZUxoxhQGofjhPjpAF5EPeXDtaSJZobUAjGUqwxcLaHdSJnHfFomqV",
  "key15": "2AbTj7SZZLdovb4k7Tij2iFHxzbqBcyFwtzGsRptRUVPj8m6j4RqRuEAKYABroMQNPr4u1qZQhCY6Qiyeq2i6oMa",
  "key16": "rkiDQqXC13CbavvdRPa3TgaNu8ikFyZ8AaSBVh9VvZwJ9qwG3FcBj8FdGVzJv64B2P8t5ctwQCLo5ZWiGCBXPVp",
  "key17": "45NpMjAYcW2gDo8ykXkWT1PeChDtrUrdHDBMWyHTqgR89GiJnqBaU8KEwc24mFRCwGWePrUmky4AaiRLowUbmwJm",
  "key18": "5bVxuXJ6evK9DeUzg5fCNgR8QeCn4PSygfFSwBw5AbtEL5ofNCrSGbkiAseB4iYivVtTbg7umsrJEtrKCuTH93ai",
  "key19": "5biktWbsTmNVzaJyM8Lj9NdJRn4uU3P67BRrMKFSEPtJMnAaoWqoGtJzbveM1nNGFE2uAp1pkqYVKyd1bftrYBmX",
  "key20": "2pa9jaVkcyhyQSKs94sWcsjXh1wwBtjnd3iqAycbsJ9UVrG2SR6UyXdD1JgWmeXRvM4F87hQY3Fcw5SH1NLqfuMD",
  "key21": "4jeXSrhk7skpSKDQC8CZgfeWtNFC4SgS97mmQGQ2rt3V6tjvYQJrTPFSed5fbyPhuEh7uCpFQyQaHr3Vywnxc4Zb",
  "key22": "otXDfnetwmh9NZozQQwHDpXkBFYhFMzGdQHhTYnTSVW314iLC4SrEN7u35WuahqxNBYs7ZgQ6bAc5oiBsMZsUWP",
  "key23": "3QfZ4j2nrQE34BcbWYAV4GrWhCYVPAizWceyVxrQv5YTg3dAyXYLQpngwMrGHoNLexhwCNRT3CNrk7gu24qYbhmq",
  "key24": "5xzvqAP3N48FF6agWrURdd6bEDwejQvzCQRJe8kAB5dt1XKmDd8pyjixJb1ADuYivPqSPdzVFnjs7W4Lw9b4XQzq",
  "key25": "59h75Wh2VmLAQMAYRsd4e8z1jpMxjvdG3yxNm2DRjWLeQpwuPezC1RScSDXxc6YC3ghu2d2cegF8WX5LAvTcvUwY",
  "key26": "2zcommDg5dwhREDphjT9u1YeK6YxkGQUN9YetajWAQx1SN6XP9P8aVEYQ6rvrJabDtdSYoZsNfMTWj2JRitMUv8U",
  "key27": "5Zjv16E1smNxG7toYD95d9a75z7QcLtqJWUxEhnzG92qwWqLShavktXGGf82vRoM4s6FEFcng72f1974WPvA3Hp9"
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
