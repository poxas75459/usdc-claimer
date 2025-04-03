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
    "4DGh1vTwcKNDZaSyDi6SJp1kGogCBki7NZKQFpHdYkjNbM18wj2g2YYJtXrHmQTyLJBToy8RUdV4T7DRzVdCK46u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548BQcd2TUXc2MaAtB4VzQTrJHPyw353Su7dxxw17Dp1XMFrhbFPos3NgNM1yf8riNY7HpKJQjz7psSgPNVtNhzY",
  "key1": "4nhPTFquuKVMT18e3kPc27aVXMwFAG5CtAn8Ftb9NeeUrGmHVhSLmffgruQCSkrdydDAF2HZ2o8XGJTjf79GGsTt",
  "key2": "2MvBrNE7TNDfmL1HLndNvBDdRFsMRdzyBpneQicZxQCYjBGYuDYgG5jWEGhWqaN681SqouyavXbPyPg1avfdJDiN",
  "key3": "5wvbcacNMMbPiXFYdX5kKTWbgHVUGNUse5H4CiQNNEH5jY8CaRJ3DusrQeQ4QwvoXnWbkonGZHjpKR2AVVbf1Hvo",
  "key4": "yp5x51mrKBHbptWBV7CKHxESphTrN6kuYjvPSUcXTfsqXc6Rd7YNi1L5uYMrdEERLQX5EAUkYapewRiCSnYQT4q",
  "key5": "5uf6UShe9cGehS3aEcPMNPdQ9ezisgaQnPw4npL8n7B2p8pcGWa3jK7pxUked1iTQWGPDjy7fA9Z16THaJDEbiei",
  "key6": "49kv5DrsjMF9k8C11oWPJqvjf5152qKjt9QfuGbAWpdbLETdwEmZJ556R8jtt6yU24PZKE6x37biU4h4QEV9x2q",
  "key7": "5e4uBNUZAkTTca68tRuhe1vtyQq4V955AuznqfX25ryoEu7xsi1EJ5RtNjW5j2qRo3bFJ7WaN6ExboKmcHdQUyp9",
  "key8": "5Qmgk5HzqdizBz7qiRHaa5Uc51hqL1ftKTR4a3dcaUWx9VQj3TWiQRU8dKCBrUheoYt3xM5JZHPhoyRFrSpSwqez",
  "key9": "4GkLxiCW11eQciiVSNgd4S9RiryQS7tyvf6axt3C2KCgjkQeVNwBgA2HvEEW9AK6sxZtZbnGJkdap38DmVsjrP1A",
  "key10": "543Xf7TGCy2GEUfgLivpUhvxgoUhMHeZQcTUEihiSB6fbnYX7qXnnhGsZpafaXfWruaw8hvGjZ3pbAyN98o41p9d",
  "key11": "2qo8kVgvrCsu81b66d9udFpv5k6jcU5GpqmEBMmZp2Her12qz2iADGh1MwXneNxJ4hwYeDnRuwDVarq6UFeYnvWp",
  "key12": "49zuG1DwrkwHNB9nbSxGrjkMEqBf1yVE21MDnGsoruZNx93GQFDmG49BvT2UbgrD5uHsXSFaPyDjyHFykYagi7tU",
  "key13": "3xDthDwrMKNsB2bhHCRzHimpoPZtz5Eb2xEX74Gn8QEHYBhVTdE3UzUVPMpScbVHAV1XnoSYFbX2Fe6sRYfvSMEP",
  "key14": "4Baa1xMitKFv5TihBTWVHYoUEpmCgWjWTkj1TMK4jDPvKBJ8QTnYY5TMHKu4UcFLcqkhovPwPjYwv6SLfxrCFzJY",
  "key15": "4QEHNos8A793xnSJVpMWZjmg717CvQgJ4RKuHkoLgtyQ1yhPFushr3mEBGdzMtCY8Z1eK6FoCKTmH152Sz7E4PBK",
  "key16": "3Td6XKPfvYbWLecMiyNDMvXznqsKSqgWSTUqwKYaU6kp3BHpB2XG63Gvv9g2U88nHVtyx2CfU2WKvDX61xnrZcjE",
  "key17": "3bLnCF46keiv1NEguc75m3VvhyHrQkfHJms9xRPzFdKRSq8B3WUB3Jz6G4unAXmiM2SVBZ8xMwFLoBhbCmJYxHXm",
  "key18": "3onYYrRKnkj5MVDPd5WrFsfbJSJWZRVA3XJGjVi5YFEt3vZZ9mEkqvN9ngEwoowppkeeFPRazkm5j5F5h38eHYN6",
  "key19": "2PwEoWsmyd1s2Ei2jdUGThhkM27Wq4SYn63WiDgyyGNvus9XwMw1C2FPKoQrNycUJidjjURp3NKEZ5gRdwtwqRux",
  "key20": "2DvbjxKPGeQMdejqAimJB6DYm4ab5w2yVBrmef7YzpwHvVr3BCk34poBEYP58sbswpAggFJgfegbQhY1qYhuRaNy",
  "key21": "2vT8FAezjDztCMbm8soejnPuYGXRVmeBp7p99JiqfBJ2BJgCQbPbj8SrbVS8Yxag6jWkd7BrgfDD1VqKNMgjETry",
  "key22": "3wWdXatoK2t88yeQgRUkBTU6mjBfSiv7zZ6Z3Bi8haXPMHZBJFmAj7RAsui4kyz7y1SuDyHiL3ZPSdccF3N2ybSX",
  "key23": "2K4YKC9kyLkqaJuxAPVZZ7a2o7pmb3bdtjGqcqpjefFkSAcA1MjBtotiVa7tkayyH3MTu4vuHbN7j26Y4wAZccF8",
  "key24": "jSYFmoMUhbZxzv61s8dS6fLxnji3pP48D6u3nqcpP3CJXC7jjXdDMn9FitQZmGk65zv4oRoyJAxFdLx9zDX9cU2",
  "key25": "4bm5Rmr1GiKmKNgwUHkCAzD9bnkQCUnYv3vPZiNWdHTU7fUE4upJXiYtvcvoLKvvXNHuG8TMKnXBDJy5a12rLh3F",
  "key26": "5U6Yndxm96vQVwX62m3EkJg9ZZfFwqQvpXWmNHPT3Gsuf7GqaRyMi5VZ95DpSyjoiQ5Bd88sb93NMPNMaJNSije2",
  "key27": "5Q3XEqM57UYQeso4KwW2p82qZm1BkTK2EoTGEN1xoH3RELe7dqMGc6EwxCp7fQNgmPa3aTmCkj1hymSqpg4PDCHe",
  "key28": "393Z1Sp2cZ55HFyej3UM6Kk1sx3y1pjeadLsk45B1kFQZjdQxXdB88i5DB5ZxYAGdbdyEQzTuFtDDTULSNQKD1ku",
  "key29": "4gG3Q8z3xtxh3QaFigJwYJQWfcMviw6BfFUD6yhAUydRTm2XZnkvprEbraPWSTdBcsqGirQtU8WL35QAJGsuEAs",
  "key30": "2PVpcuFU3mEdHPTtJRmac4iNYVguzAQZfdbQvz5WTttjdxFqTrCXq1N94QgSXKC3iA6pAQk1WRTwWxfjzB1PyT8n",
  "key31": "49FJ9YzXFKosKJqJMEaP8eJ6niyXdLAR6UvxQdSaPeFA8vTv8GoEvnvj7e3eAUdNG86a1jnQ9qHHUF2uSXDDEjC",
  "key32": "4XStq5BoFFC5eG6mQLeqAgt7zfsniqf3jf11G28bMsUEFnrKkn3aq3a4Ny4SxdsnqHebTfbYz6scx63Vy7H6XAXf",
  "key33": "52Dhfn13o6gVB4aMiA83AqSAgpQuK3QPSTQ1jawq3yvhPUZug2WmaSN3kC7YDVyjVBYXgqummghr3uUy3dwnu7E",
  "key34": "2tUaPrCkFvuYQ68JhXehi3QgrwoaSxn7JVWdXkgCKrHSfD39zneDHQp1fJQ53y5u1fZwSN2qQHepWBZ6g5wZgk8K",
  "key35": "4PohJLpXXBZ9nJtZ6Nftw5vkdWP8ZrDPXw9jqCYCqfsVKg8uKk8Dxc2BhC9YHXFnDeyQCuuLPt6QvcYHZAKr8997",
  "key36": "48gSrZxp12sBxzkodKeQuvUZUgXregbdjRu9yKQr5iRqXDbDzmHkpF8CW3ehDeGvcmcxjSoZtunJpLtsMb6q7t6i",
  "key37": "2NnGuMZ3fLGWefvdWgPGtTjQYVumKAE5ShpJLHCWtxDRN8SQcBK2cdheCW5N3PLW7XuMdpQsBA2PkEBFiijsw76k",
  "key38": "ThmYRkCKN2mhGaRAmpsXJ5KrqGMGvGDkhV44kXXHYCgNFmiFT6HXk3kw3UEeyM3xLEeNMdmkvD1tbhtGcdGC6zS",
  "key39": "4hTNKqGbZWi9WXFmTMW1K8usWQmK9k1QZsuDA8pa2VNpUhtEmn1cYoNxcdndPfWgLd5zFzBxSZ7Va8M2dC6jwGT9",
  "key40": "5VBysZFefbykNTv8YRn5c3JbFe3zt5uHRgnTVheuXTXgDw17w98EXkFdQ5SpHws7LMLiypmwYz98a79exSrGU9wA",
  "key41": "5aPAfa4MibVuSBF5bTGeVQ9e2BZ5pzGzXw56KybRdmyzyvLb1eakX8MLYTR5iConGtmyX72vxCSVt79bPVk6Daf4",
  "key42": "5znfZrFfM6daZXwQbiAmPvf1VjntmXapMiksgknZ7SwedN4oVzyttMmmxBPbhzGTmRsjBu9neacdpe9MZeP4ufbe",
  "key43": "5aAofRoq3D8WpC9RXqYnqqvmuCfxi5N1HjKggtQn2wUDHeTSQtiAuVGkWE3N2WDTKUXf1RdfqL6hCG8Df89Kd4iD",
  "key44": "5yQGWanpCapuRTYwdrGubq34aSwXhtyAiZjWNecDxGq9LvvgrmCg5NW1xRP6td7Y16zHxgRRf5J8rFPpoWTWCXBD",
  "key45": "3TjS4HfA3fT6mNEdA4cAQDxzLFh3w1j3Puts1LEyauWfXxm7ebzwJeNf5zLaAx7CeAAPx9s9B3b2whfXaQi3otn9",
  "key46": "4K9zxVJ96cwfJ2YmsgTHR141YnasofLYJdfaoUXC7RwfD3UYpkJ9YAmTmr2kXXJCqiKtU4xbo6hFKRkudaV4ba59",
  "key47": "31B69LjdETEeQpsrbwY6D6BizjFYKAx8BjpQE4iAcMcrURmNSPLx8dUMrm8XyjjoRVQPRVPeVjP77EsLBoBU5GJk"
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
