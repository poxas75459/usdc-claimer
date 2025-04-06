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
    "2rudrs8KsweV34ktDACcrSKaQnvtBpwJMo1d9r2Cae8FiEBVyGmFb4JuMGoUnv34YeAGXu7fnbWznSEea9dd1VuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eCSdo2bQrEq5d36Tj4FCa5bX7hKguBYpLecGCv8yK2wnhFiJ9ybFp4mxxgU4XqdzinVyf6Ra8Zv12FtMgGgon34",
  "key1": "4aeJzhmgHyMe9oJw3bG4fbAqcJ1t6P6wyG19Wd2rdES53zt88ek8WMXfBhVG7sREABUjqohp6tXGCeRhJQnkoVNy",
  "key2": "65p3Rvc2frZKaj9J1BUF7WHDAcA3S6Z3yzxRLDuzwmpihvDTVnjxNTjTTYyFSjTkK2pYvoU9nzpFtg12uLjWCvFM",
  "key3": "64kVGMneW1ecB222C6qx2byZFqxxgL58kJNKEdWAWLCYC2mjHBBbGLke4GUjGaeggr6fU44bhbNG7hSyqbxpSj1z",
  "key4": "4t2uiwyLWjKWP4J1UuxLRGXjybLdtKimvrQaFEN8cKzxWNam9G8kB2GVE1xW28gwehpeYUfWt3RkpTQZ5JwHR68L",
  "key5": "4egJNJJAJSqeGLsyB8xwMcbNBHFZcQQgCxngcdQNQ7dgvEQ2q23WjcSyAoxn6zZxemg7zTBjRH7RT1WsW6eyFTnz",
  "key6": "64rA21TUTLXAfpDAbBEJNaq9N1F9T3yqpRVMrVo4JZPgPokgVDenH9rbKVDtLs9GEH2Q251JE2WQzDoAmRbsxchZ",
  "key7": "2Pbo5efUUPoMCaH9qBeREiyRtsZL4U6PetPpnq6eVbQifaStRB4qLd51EupTrbjeNwY5F5kDxB9h8XSbwSTLyT3n",
  "key8": "5wsWGUcSG4cokUUvd8kHgq4DoJTf4Fa1BcVqttSbJgq18thQ4Ga5kaDBfab6KVLq6ogVXRBH9oEG4RssHY6359G1",
  "key9": "51DCwwdCWSCWXygCyCF5ddhioL1hTUDhWnD4gj2CJBEm1o4zEYAY6X6Q3t5KximcJqnZ5ipaoWVoGveHpRKpcVGv",
  "key10": "3eRBj55iZfthiSZf8kZTPoqzCoGHuYNcesmX81DHxG3WruBniHr5JfEhiWrXXK2aquC4MUFpNDZTzvDy7DFnqAyA",
  "key11": "y5P7SanwQ2KxopLqwiK56JNJRWtnyH1jN9pVcPU8cgwbrSQ3MxyeoULzGqcXfSkgB6FwkjfWCbFq6RU2XXoicZi",
  "key12": "QkxYBgrVC78QS2N6H7gGzG5vJ14RkcugWY3bLq3SfimBkABjVhFZbQWaiVrQ3JzSy3iU6ZFnZ7i6YUGktLMdVnE",
  "key13": "4NggnmGBzVAN5gFC9gqWxeZcXfMjfN4CUfRYb6pkvyc2ygTjP8Xau4BPSR9Yt2Y89tgphutwarYDZ3HX4xiNwhTL",
  "key14": "4vwAeQJFkYzr2mgaAUgNkrZHr4XMUBcH9G29o9FtHS5FC1cG7z8tN5ageNnFKKXxm1QowsVUJnYuewpAe813tgHy",
  "key15": "3BEfAXRodDYF33L3qPGxcMdvRwjDbAdJ4RusyZMP28xNG7Vym6DgiACVCwKRdzSmg8wg39JKHQM6xeLoiASxWjMb",
  "key16": "3kUABDzu8A1QywupXXPcgMNzcJSXAspkEzXuqHKtvoC2SC2ThAde6mKoyUvz952QJSHGUjPUUfc6iv2YRERqXs4",
  "key17": "5dziDvsUvHjv4L5qwwuivR61zWWHaBAmVBDwqD4FAmiS1SNEDuMdfo9dn2H8TkeRNeaoRHxw5aHE3bYajUqY8TT5",
  "key18": "2fDqZgbUzjt6jrzEBdyCXYH2sK5sXR74aG4g86rk5DeHL59NvhgfweWP6hQ1MfSWEw6cA3n93tMCvUAsJpb4BdsD",
  "key19": "zJKBb4mcdz9a1n7pp9Po9sj7ZnU55b786fYu4aYGoU7tTNJhGSEYdhWzJA1Sj47vmSpYWwKxWWMjydCNsb2biXq",
  "key20": "5JR7r5pAod7DWT57Knb1fqfwHvT6Kb5XpWQkvbtYKQWA7EFYBegBYALuxcVtTuDscTz72jyV7R4REdsicD2ZhcqZ",
  "key21": "3pZzZrqmubREv779ALNpdQezjigmsCigpmYPPrWr9qQJzB3hiDfcFWH5KXEdKJ6Mf9zscN8M7vZsMtKAqPXghSHd",
  "key22": "4VKLFq6nNhtHLovcgT59XjaH4zn32aZdAAUPR5PDwLYLotjMVmc44m9sPLihuYTGhM5Zki4Nes65xLZG1yykf5EM",
  "key23": "jzzys2rQMRAVSbSHAPgQP2tbAE2jg5UZrYpTySGSktpF2FHqEtyUmF6KKeh55WQxXpwE7GYQX4Bm56F8eufPe1p",
  "key24": "2Jd3DvXK7d7eCqDrfS2b9wfwrdSxSm4os9qsqknHzS2kYteAf9r6ar8EZZvSZ3krn2CakThQjqLvYEXBdvRGbZ15",
  "key25": "wK3J15ebxbwvZ73U6vgfjhotUwMjfrm8fTpqfCL2MMKdLMUpj2gJLdsbYQ3bPFUtaeFSWR9hEjBHFmgidzR65MB",
  "key26": "25MDJNNxxHmPStse1hV1qZVYDCPdPzMFSHCVhp2tD5f2A5DBgoJMYhLPoDTJ1V5tBhEGpLoJ9Au5RA3phwfDmrSY",
  "key27": "4uRNnf5JooH9xzMywGY7Qm1K5aEcjcLx5E4hhX5DckvGSmdQS27Mhfb8EhViQX8hNyuWGswLDsyCNSXFqgeHLiBQ",
  "key28": "dAYsZ7XQQbSQBHZ7tt8GaYvHfjr49WjVVG4N7vD5RjnR9PXhfbdNG6aHjbvz15cfynaXdYXSJUVYpLVUskqgetR",
  "key29": "3wot4z3XBUn5BRn1XACzyLcN7vfQ3r48r9mruQWjWQvTk5FsqzdK9vw2sCGfoDpRPsU6Bmjr5vQZ1RLajqeMmWB",
  "key30": "2xyS99N3goyrhodHXUznVzyLscQPycfYHLhrGLHZWErhhA1azQz6pZSHeArVoxknGvN6WPsZU7udtSqEuDkCQTqe",
  "key31": "TcKhuVvZtPEVpJutRYBjP2YkDrPDjWN4uHs2mMzqsufs7tedfQ1zQhuggqRCAKWXNDvKuSWU8wZhuRFbUzvZPZD",
  "key32": "2i2m1UcZvuRFVowfTd3Lcj4LhHm13UH3MF5YGC5rAihHLp5o8DqaXVrPUbWG4Z6vyLsfnGHEZFbz6tBwpUiYmRik",
  "key33": "zzvwNRGBkwZ8vwxdKJjzGoiR6tMqxZQ9ENVfM8QYJfQGivWxeGUegXmPoGGuzP7sQaGTCf6ef85Jtf6ftxSnSQa",
  "key34": "4TpwkbMVR3kpPmQB8BXeoUP9z94QtMrVHQFC1ZTB1EdNwnz3ngbs3ANy3NWi1PCNRksNWgDPCasbH7rdy9ouSJgH",
  "key35": "7osaTo9zy3XTLSPVhY8nFiefKaaZ6LiGq7uFjESDcjGUiExn4XGvgcD7o348fs7tp6XQAGbdEneJFUCJ65jMJjw",
  "key36": "3hoYDEXPBsfmrkdcokaNk6JCCAe3HWyNJv4ZiYAr7avekCGx1988aPYcrS625TWpZTuihGiNYWEaWKqYc5vgNB7m",
  "key37": "c3JmHY5LT3NeqKYZpvuMnTcH5FywzyVX9mTvQpPRTiP9TNU69yFHhRfLDbhPzyMVpKEz6aQLSkYUs298senooRM",
  "key38": "4nQc11KmiT91WkUG1MReSsTsVpbwr6bzLz5M4cDsiFL3DivzLhb7YcapmJxkX3x73wVafwyMNp2dFKDfuZvVLt4t",
  "key39": "35Rn4gUzGqzxNMP2pTQ7BRu2QmNLQwYgWw7aC1TFKdMhyc69oQqPtCrebsBd6fJpEZpjNXx4Fiw79SPwBZ3oMQoM",
  "key40": "V21qMnBnF4Upa4HmFiS6UjkXTpfcdWmVG1UTa4u6Hp4PAbvFs6uEDVA3hDxZvsxMGyyHb7AcKaKZBsQaeb9N2Ja",
  "key41": "wU2SxhUEzxkzUaxHZw4418TdXnnfD9E4LuRafBwo22QxjfjWn78uPwrTxShk8CzFGXRXiGM1KnFb6PCWVZR5P4e",
  "key42": "67iDkutj92fmsrJEdCEbKzckJFHVoawiK29SMD1t4ixhuhXBpoXkJrx8vJG98FkL7jn7ZWvCSLtB2kppx5PQ74Mq",
  "key43": "2SK5MJdTa11DdE7tx6xs7fBdnjtVDbbPM2KNBTsRVm2HUTsg4TpAfjBLsiWvSUoC66kZTjFoFvJHRi3vCXnbc99J",
  "key44": "2CdgJ4xZyXRZhh5hfXosvqRDtm3pyRtAAAfCW15YKXqXwdsA3DtLC44GDf3oGRtEV68LnNTQ9V7L9y8A7ybx2EDc",
  "key45": "3RLxrTNBDXPjSCeUBr89QobmVZctHicDCPonsxp2ntz6sqpkqtrYSRjncV9YebHAhVtK3kb9CX3AFbmayUfxKwRi",
  "key46": "35mtpMNWtLuhfyiXFNMnsdA1NaLAZm5GEXNt4nNBYwYejXPRxfGiEmNF5Vg9k24XmsLyssb3JBLAsMW3EGmiH63N",
  "key47": "fBphyCNKGhbjDS42FGEeX3DeRx83C32phedrbc1FwKr5cMNPjYJYLYmEexUyFkWoGqAttVwcj6aoPnxka57swnE"
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
