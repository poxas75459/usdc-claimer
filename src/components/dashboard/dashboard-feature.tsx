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
    "2eYamZGPGoCLNkBn2kK48bGgk1Ls7HJgZvXy2LwxGNNrtDDiRZkgPPguanTFCpPRygkRhg8bzEPteBxQT5Lx49PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U8YkhMjvsgdaEwrMqriiPaumBF4P4gMFH1eFaLowhUgo5YtoESGyeSHDvexMrLwYTqGh6ULA8Mpc9tGeagx6mQn",
  "key1": "Xr5SJWUFLwL77H9Tj8bua4JMHk4e8o8K1WzKW8BkciwcZaAxz398Marji7ZEZcDLEwjYft5X9S8xua6rwZKn3q3",
  "key2": "5Zy9qtK6NL7MTKyhwPMCBZ53BLMNZvmRq9Ynqodfzitig5NjJHDk32KVnsEkJGLKvokUqc9XaiRDPHAFrVqeoBkd",
  "key3": "babU4ZCFKBNMHPmYtec7WEjrfaK4T7gnje7PN7V9f8U2nbNzy4GMoVWoebfHBdLPjJc8Kr2xfNqrHVzaoccq8d5",
  "key4": "51rymQrDmjS3ChvS5vWXefp93ypX1W2A2Z28D2eMk5CkvfpsciWyZqK1uT1a6LuvrgrPDrKTpHBiCyuXVFJFRhMc",
  "key5": "32YCAAFnUuqGZEq94njuCaJKicmCknhZUakRTmKu1txkPmGj8ZqtYEPHAN9tAZapyojEJExpspEzeZK8LLAGAezn",
  "key6": "3ds3dBucDLmas47moqsPu3VjfbtVJaDvythKaJdsZstuZyuLUEzHaw4hvow2Q685kNM7yPfGXV7gqah6UJ48TJFv",
  "key7": "uZcJt7NAqDBpPSthrfGcmsW7pvAfHYwkc6MHuYEhkM58zZNdzuB62PtPjoLQxeTWaC4JvL3w3fKQMEB6hm1YPsa",
  "key8": "25JboUMnbyzn77vT1RwggN4FApe23YPGYDfGbdii9u7WwFcvQeRKy2XQMKS2QQo67quFTTtb342rEUkuiZaMJQuN",
  "key9": "phxaLWcYCNuQRSkt3cRg8hDZngUxKquzNEvHmoN7poYdsZh7c7np3bdmnrHjghW33EWcaQnmvUg2mq28vrT2dMA",
  "key10": "5rhufgcPPVAidXVJuWmMiCwsTzHJZND9rTeyqW81gVyX3gwQFnGrhuwKZWsi89PTuwZ5oHGzqRtbcqSXUksQxn8s",
  "key11": "3WwKRGjuJPWnLK1w645dsLtWRa1MZgjP75ffvAgPTnPmrdUU9R9dLYxjKs26SsmVb4KQ86iYtC1VX4NiLfBbujZW",
  "key12": "5feCLsxV3Pt9E7tYJGpj4sBQtH9LfFpYM8ZaeXN2V68NytqA37bbifLXjGrqSPoJ33ZpvokGJsyikvoVw24ELsxt",
  "key13": "2wPXCWfNzzET3DyesfnC41Y66X1QDoVR9usTLHAX7XgbmM1oEPh5tJatqGxthCULbt6nA3kXiraeSt9gFPKxNGVU",
  "key14": "4dqVsvZoNxiMhEotLeK8JWYHrwHHbDun4mRgFiefbVyUdkgVbFNu2EeSNmZEudgayUqqKvB9PsnqpXUK83xuRR9y",
  "key15": "5oTgFXiUrY2evABJduwrRDBrtBRQKoWCB81Tq4NG9u7ifP5gL5knar5rPfnG7kBVKuvdgFeTHxRmToQYDgPEKpUQ",
  "key16": "33JDcovNaCknSGvNk5Fb6R6CDXMXyzcdEvFMgAx9hiUhEuZN6AGEt4ecPbtr1qdRX7sKnmsZa3FsVwLXcmCg33oH",
  "key17": "4n8SU793cKVgprAtg7tQfi8WXUiGodB2FDHZGwcLriN9Q4mpWscTeucPG5vkGDfvavPVp39gSGYZJBxRAmBfejH3",
  "key18": "63WrRhD5DtUotBAMHevcaqnd25vopng8RckXEBYAMbAxPDBaSGJmX3jLfaewtiDDi1XRQHqCicqKidN1JjfprEQy",
  "key19": "66VN9Dxr67QSAP3zHGzaXu6UhbikrQFjdLHN45TAGBXvc8RMsQz44GE5mwsTxih7hqGTmV9hYuxWJnVazLZ8uATo",
  "key20": "D51rx8emJey6kHjuGAQCuRgokiU59jEuc7KPu7ZT612z3Pf7k53uLQvUiYXWkQPmpE6epfjXvsY5AdCQuiP64jR",
  "key21": "ZHVoCwLhgnFFsRRQmiL2ZSacRfJz7PhxuiYhRGGVf3M4GPyZVH6dgeBBxqEwUQhturxfWrp8WbJWb1vWJVLuiMh",
  "key22": "2jne9EghADKDAoYv6mAneHXK9xcHJy6UY8J69EELT4ygj7ZXmBT1zfGZHi5QFXt2AwYhzcqKqanrbMBUGMDG4aN7",
  "key23": "3JHf22UGq91z5tp5e2LJbJpD2WQ77AxRubCQGaCMr6crzDAJ3jAmivgHXTS8o5HP9SdA7Qa5vTCAYjBDfibPbJDL",
  "key24": "5Qar6HAb7Ca1SMHqx9BNGXQZ4hagipABF7ZKAoQ7XiPPmNJkmcqLidjiKuEgnLHrWkGzLpG6bpGfF8jGherPk9Q4",
  "key25": "5WGd81m52KTWjXCVuR6y1Wjn3rmhPASkTek8ZpoNRkKV2KKA1KiSp1jLAWpQSUXb3RAsBRgG1mByjJ8wLiDZZwce",
  "key26": "3EGAGfdjfuC4MeXk1cjixRbxkjRuYQuDYn3NNgrZ2Qa8dYvgbmeYEP6LuGkvSmrtjiaKkJ6r9eA1Jbnu25X1nUEu"
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
