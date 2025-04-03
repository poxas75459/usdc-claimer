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
    "2AssQxZPoYGY6z6YDNA6V2WinNDzkAX3t8ZJoJSKZ72Nrwu2C78U7am2ZAPPAP2oaf7whRWabptysuVj8KbSjczd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51e626QtDHmmbL3K9ZYVsMX2BT12eC2bScu13agnqBNybnV1nyamaQCxVt27v3UFrBe1FggBT497N9XcZdwhqE14",
  "key1": "LS3XZM23uheuqG4djA6LiCatHfrawuDUx3AVgbqmQyXmaN6uaE1Y2Gvo3ivgEdLQHFAqMsyJoZd34XGDzxsb15Q",
  "key2": "5WQcM7DYpPwVSgicMh6XNbY3dNGk3aNN4pzeAsKGgbJxitoHsxE9jfDhj6EH8D8UQgx8Euw5k9hiqRGByWEXT9s2",
  "key3": "44oEojf3hBUocAWvKbYq6QFvcX1GoJDnpr8EXwNDi6afv2KFRFRKxEHrscb8QX4R5MjPcYqaittiaXVjgiKHBoL1",
  "key4": "sSn7M71cEjzTWmpxKFuQzaTGjpSU7EQo9eEbU7J7z9L9crfzHA2Mp5BKqYX7HxFuP9gPkTj7e4RaHuBk3DgDjH4",
  "key5": "3YyC1szKoxBzzN1pX9741st5UjBS9xBd2A9kyvKrCXwatpd53RuNxHx3h5gjQyGwxrRwFc1zX3xhp6h7ot1snRP",
  "key6": "3swseKuYhT34EZRLevJ86in1jwjFh2HnWtUX4PHsNcJUDnaQnN75T5wXNvge6zLwNbgb4kDpMq1jPdXUJEmupLwv",
  "key7": "rrDhTQ1jh9mXMpTBSZVpufAvkk5TxB8GrEYghotVeCN8ocuCETWEEPrvDbgYjxGKaPmiRbwgYLXmfTsaUsBdDvp",
  "key8": "4mpMpqgeDLZkJo9TC4xAo2UR8QEH9cfnj5DHbZrzwy5r7EQaFMXMXHoDAuDrv7iykTXZY8cdHfvPBbExNf9yUN3q",
  "key9": "5UpAfXqAjCHwaxHa4i81WR2CHSAjg3XGT9VtKcbZAMoZDepJd38eFRfi2Ff2yhjrKsEgJFtMsToGWTPiK4Z67QbF",
  "key10": "3pUddrbgEStPjbQzySqgqfvT3Mw8XHrer55DNp63WewN4Qdub2umCfpVru62bgztC1a6RPAw4HK11KyXHAFNEQCZ",
  "key11": "RD6RovnT2NbFuDC2hV9m7qWG3tqkBjMwYAerW6Lgo82kzU3TvjXbYxxm9KHgfqFpXk1bWVZbCGE82M11qHoSFDN",
  "key12": "64qjeMZi5uvDJY7LHRrRbyr1sKegpVwzFzurSmHjY24S93KHZuLSghSKZVmLS2RofhxhfSf3ntPNDduijM6gAEFG",
  "key13": "2FV78BZMrq3F4gEt5BRMgzjTzLrSfrpW4fpjP4VjrMruSWQ8AwHXh1Bnb84uTDpWsfkGB6W6F2yjK9ctifGSa7Jn",
  "key14": "2R6TKWTPwgmFQBbsfvVRpscmQxw7UTVcXYXxCq9Wdg5M5rANnVptcTkVYTmHyurJQGNezVu6qsGbSsbAV61Zvyo8",
  "key15": "5QjDXmXrxynert1A888MgqujWfsiXseTEN41Y9cFcQ1bidMiTQxSk4S1Hr8aVZZYgCBjxwjuUSBf8LJUYqc3SryA",
  "key16": "5zKbgJbPwPnxZdDTutg1DAauv7Ujtpi9pC5xtYhUuUrtyhFFzsfXGwycqv5AcDWnLDig7NJuM4S5HRhFzH2onUZo",
  "key17": "igB6U81NhQkG2U1LGkbTogRXYXvG3w9FSewUZ9zMxtPzQsjySSXdEVaT6jeXGkRTdJ1Q2t4WC2H6kuLGoKyahM8",
  "key18": "ST8MWmSAjrVi9jCz4kYqGYdGguAyt7MY1aQim2gkLpVsiRYrbiwhH3KdhhjGdu2qA9jstWxuDGZnJpgCMRSPLpc",
  "key19": "55ShSbxUwCxYBMXZR1D8ru2DJTLxeemy7G7bmvFLtJFdUSVVkDKhGX5zveYPNLBFWUQ45ptop35HJFq68iRYZHDd",
  "key20": "4u4YHKcLHZTWBNQX6gd9N2Z6gzyhEtmqkJKB1h8EqqM7VbVQP8XJv6HGNTSbJdFeYbna8qHaRcpWCPx9D4BqUsLT",
  "key21": "2FB3HdrCVGWojkGZQLgrT82GE2J69yEwGR9mzGTs9f8EvUWChtvTwJmEYcRTDRopFtn2n6K6k4fSEAsZsRDSn236",
  "key22": "53GWVVoxcziTFKQSA3f4vBDYmCqkZfQXuMLfB66rptnaVuezSok6i8gV8Q8sW5SHAzLtYcPS756uZHxknNp4nujd",
  "key23": "4hnbhUPuwuCaT7Fxmo4s3fZ5soJanpSvx5nTqjWTVZdMYLPm21LfTYubLVxSrwCSZ6jtmMwuRzP7mZdDEQCGhk1X",
  "key24": "3kPXKvkrs8fHn9ezYGLUkAArfZeJf9Ujy6r31QzkUD8kWZtMP9vy4zgMNo3aFWXqMzsi8GEDUT1uK9kJ4K5WcXvL",
  "key25": "4E8GDRzwmK6kf9LMUD6UWQD9mog1EeJhXJAZ5Vbn8PyouofUiD6W91dAz6ZrAJWdNAxJoUPMDzqnGfusM1ofwLex",
  "key26": "23HwiB8ig3g7ntfLtFzDPrXqJrEmtwBdU1KWqxxTmCgrwi2wrvGs6AXRSqedox5MHaMeWx4G55MEcH3qa7qjg7yN",
  "key27": "61k65s2SCskDLjhuCUKWRfuiDxrvNcG1LB5hZibRcmYjHHZkbVTmAoXGzEwdj5t22Nak3td55rbon2Sx3eipJgDc",
  "key28": "sA2vMkNZP8tVZhXmAjLNbjwCFyUTKiaEAnc67wE3tbL1RxprejXByMKC51PeEbRcpntb8a1QAuFHz7LDVS1jVxB",
  "key29": "xzCkC9A2M1C3nZ77wH2zpXf9CYU2WCaoNWY6me2XKqkL11GJHD2EiZP2PmSiWMk6A4WU6yEDnWiexEXmYs8qgQT",
  "key30": "otTRV9g7mtVuir1zc3pwcSYip96acXDuuUVWbpxvWbF8RrG4EYMKBiFQDmqS3u26ppycztrtQS4dNVRZozaox36",
  "key31": "3i8bC3bcMfX9jBxhpeMnq52YoNVT77pSUhp2c2afYSGXscx8QtuHkxwVqY1nPyZKMZEh4TrVR3eKmFyRB2iqhnj3",
  "key32": "5n7gYxNWMsSam3EuJUNETs69z3zNb9EqZbrzaN8PBbpiynsTeUNc4VcJTbBNrkvVzMBgiL2ErfK71FCJWieK1cZ1",
  "key33": "4RZmS7VXqbdVQnDQ4jUQvcdVnv6wu3FBBJeACjMgFGZuWEQ99PCvZ4fMTL6WUVEg8vdoyURDPZeXHSRnDd3EMwhy",
  "key34": "5ELQEY5gMB4tCSCnz56kcMFEy9Py4sYD8odkcbtSw57pRcG43Mov2orMT3qcWgSmsAsQELYYpwyeyw7zszKwk83N",
  "key35": "QwLA1uEVjEmJiVXZ12zgC71ryqmNCV5e6qeCzphPP9GJbRQwuygSbyr22tfi9imHZA3kCMnATTYHx9ZL2rU1EHC",
  "key36": "9WGd7qJ1HV9Wb7VnPPmo3ZSFXdCsy7mg6So9WxD67Q4QFy4zXNrtawnzuwWQ4ziDvG1VK97huDkbeq5MFX63PxK",
  "key37": "2GEQeXLQtBjcX9VKzRiAkR87yFgpZkTxA4hLZd1zkepguTJ7LtxqWqvBmHNWVrQ5i4zV4mfwTaMfvuks327AXna2",
  "key38": "2KA2qzBvfoseaE6SHo4Vt9Q6mP71AnoTHZtF58Xex4QZ57X6qXbaNLR5Zom8CpfLb5bXgwRQhnEgd1f98mymArRL",
  "key39": "2pogtQjAjpW9P2SjzfFCqasX2zGdkGpgtZQAP4XtkJVK4YbiH22GtPQjH6QSgDDBVgpDcrKF1fTV3ACiE7BzgPyW",
  "key40": "2oTEKh1TMnHJrPEvEo7RjkhvUfSX2sjz4Nvp8Tzzy1YcBM9Q2JKCxu8wQuNBT2Bo6zCiHRwgpvW2KXzpJp9TWtnE",
  "key41": "3yPdQknbZs3tqaR27BQbL3arjXGyJCu1mF7EhnpmobKG6vSRrS8NhnoE3Tk1h8GTjs7Ap4bu7DjPru97YytB6Pqb",
  "key42": "rNzP7WvEyW1ci2BaxhvTKR1frPmsgFWzxwdKMszLmFDEqdrHuqmnCjZVA1fDfspNp6kg7Ju9VUZaqNPoyTrufbC"
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
