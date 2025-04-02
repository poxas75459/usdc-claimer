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
    "371wevceJHr2YJBcRyRjPTBJshfZ4CwE8kysxJ1TTLFeGR2i8cyokdXou5ERQsoJNeTSNS9pSEnK151d8b2A7t7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6ZpPgmemHCK7WY1328FY2skhdJLCj25KPoR8H6dXRUTUJr5z3dE2Nt3Uq4LX16yuFYpy12PaHhHv5H6uSvb4F9",
  "key1": "4xHntQJwwZ84FYbQGiMda5rfzFBiNnvwe7bHxbzFd6nP4PsCso1McPWK7AGLxyHwqSZCD9Ca5MSp2deQu9MnZBad",
  "key2": "5wFy8gE2PfEj8YU6S14qDDYhe8jKiQWCXiLsSVS4zrNkQYTLuqcPxiitcs3krjJigus1v5F5sNtSbUaUB21B57qv",
  "key3": "5szHqg1DummiM1JMYXRGich4sEVwdveuZKdicFXyxikqjZpLTAdrXNQC39wHoKHHcY7xTre6KViF7GLQaG3CAYC8",
  "key4": "3HjJ9y8PzpT9YY9xsSrF33UyqLSzMHZa6bPZ3TdPxWB14YeYgUPrRCtQdDSKyHzHH3fdoUsDXtWu85isMsmiy16K",
  "key5": "2Qp4gEYcU7UF3tFUW7JxUiVTMzhbNvb1HCeLikkzfkKfhAyfEG3TssXJR6xxT5hFmPDSxpXuxDvxMjL53Azf4adz",
  "key6": "3ZjQEfsjMZGAD7H2Z2u3SEpU2hhaMWQ2Lb4iZhymt7WYMsav6CoE4xHMJVJ8NjamHNYuXghvPenx8oSYzafv2QBM",
  "key7": "66dhZBbrDuhr65Kzfy2LQssRJ1tRCM7SrV1yPXSNSd1HY5YuHohmzQ4QEXqixFdsFT6ect89CC57qojKBEB6LrXC",
  "key8": "5HnPYx18dp6XCZ6EgfRQPwYiGd6SKqfDtRh6Sgir2ZviRiqgoMau7ivYPpREZNGAmUJqjMYxZ429MxnNhJef5D47",
  "key9": "62hjeY1koBH9P3MPf6o7uJ9HEdFpkKeJLtew8iUuSdw65sBMCHuWpgt7kaayabQYRTE4y1mRFdQ2XZQ8hZ391zcm",
  "key10": "5oZ1BTjkGMUNk3pxYUW5gZtAQddUmWDcrD8r4oszayhHBXj586D6B59ohmTp54qAEgFroRsvQ3ruiqA3CZuQcrua",
  "key11": "4D6LxpQHJrt9mS7PZ7xhqVk3WA1hepXqUD6ZhSx2TL9f5dQmQ6r7wFNZgWNbPxbnaqoH6m48wmmjRzgDVJ4M2saY",
  "key12": "Yny7H3VZBp1mapUHkyZgF1oEu26fCUAs4WLqhy3eK5P5bwa3DHv4xVUCko8GUhahSec65nZZWHWtrfRqdufRqBA",
  "key13": "5GxCQgWR3Z57bm6KYLMinb1kPQ4aPCFyin8xKwkn5PiXTkzqVaS63MFT1zzYXocsTdHkuyHSgchtNqJzoaAfz7wv",
  "key14": "3dBq5BHNXxiwds7Ax7VA7YBL8VoduTERELSvp1HRyhP9xsrfcXdvVxYvyy8JJYBAqLBZB8wYXcRDc58EWZT4YVAB",
  "key15": "338JgboQnboe47n1j7YQQqMtuZusiX5HH1NDv5eHisobAEDeXHoU6kenFuncARCt8wBgDQeSNXmh7ckjrvSDJNn",
  "key16": "3Bh2FcLFGWLQVL3GVqSYuixj9kf6QsReHC4dBo8FE4iAng18o71mfwriVurwVSof8JPWjvZ4nWz7VkEcUJCkiCga",
  "key17": "5cXWHLgE5yaeABEYm5oWrpUwWoMZRDbQwTAwSRmAZgV4FEHu7vCbXjKs5zG6ooGFmW3vbHaH67qLRbY41E2aV7uL",
  "key18": "HyTTmPzQc27ELEdrNLqWyLufeojtutvzim5wXGroBoKtuRbYJFnE7LuzhBfsu3e7xsSRh1hwz84RkqbMYsPAvtg",
  "key19": "2xhdEJZxczGe9tbYk47FnN6d3o2qf2hUCFhfDGDcBY5LP5pMZHx5Ys3ZqniqfXcDb9NZ3BVMvdbEF9h44j91nq3u",
  "key20": "zSpXS1NZh4MaG4EKc1XNtwVfoNxd7Z12hM8WAxcUjMniwFGf9oMcagxVygGCneW8Uh2Bh9Xwxtr7TCE2MmnrjDD",
  "key21": "5kJ2eAiQu2uF9VDJgkNUEy2fyCXiKoEBUBMF8UnPLEs6zFeLym5PJa9FX1faQqcagCsiHJA5i2ciag56yKN1fXEi",
  "key22": "xXqKd8crhWvSE6BXMgBf8KerjEuUkiMmASQ4TJRzTg7K9GmNz5Gf25BfR7GnvUoX5vjKrnqmGfC8inaSenCkWEB",
  "key23": "2QpcyHhjKUwdR4vmTruTYvYLWebjr6VNTRFfDtFtWD6d9CFgx8rmBmrm1fEi73QzEAJpsaShGLqAUjEwBBLSAURL",
  "key24": "a8EVe45HKp6rUQtktLu9Ca9fTjp5yJ4WzBoScHegEt599U88GrxyMBXwHNnHeJsi2hpKoaLfGC8V2RLLmuSRnLa",
  "key25": "3t6w46T2WUDn66FT9kq2Je7XezxJvAmEFfo4wcMeCaz3TyA5uPUVXAPLgVujG2Paa5P2B4w3Ruu5tB8BnNGWwKG",
  "key26": "4P1EEp6VDLbc67B95HrLuyhJRkSY6dZ5yXN434dzat4ZosVZqQvpZDzGD1qqqtSespiu3GJGQRwnnV4xkp7HiXxR",
  "key27": "2cWcBDHaYHc7W8aduPhrxv7FS1MNcGeah2yFpPhqZJzBYNbxyM5uZgk785Vf233zeCEkenAnvst7noKaAC1zsvwN",
  "key28": "3kBNumaTpNd8DpDiSVjDpt7k6BE63B7pRheEDkptpDH8Y4oy5CwG77i7aWYuycutHfi6cMVo8F1Cy6CaJ4RoAzNP"
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
