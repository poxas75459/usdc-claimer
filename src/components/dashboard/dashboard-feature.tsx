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
    "QBfj9EGoUTqqsMeUsGU8p76psmxbEZyDs3gU4nJ8M7Eyb5SUoxoRMJtz3AW1W6UEzq7UzXbdEA6o8mpdCTeJ5dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Urf2aPumQa7my5BWykiyNq7A9C8Tci1UiufgQzTB9xHARgMu811NuopekQBgQWWGRYxA6hfD745ouEbPog6kZHe",
  "key1": "3G26ktatWe1GwkzVBqCYk4ZwtouLW43osoisAFGLk5eB19TYX3ju31wVHVDN6oDa5YscB8ZCwTAcjo3Nwg6hBgmd",
  "key2": "2Zcn7GjnC3qX2uZvrQG9Dxq2sQJant6AQJoaCo1nqt1U4KLy1mSDNPwCGBGmwYbEN6apivotKGjMNqmrqCoYnZ68",
  "key3": "3dD4jddR6UyJ28uVnoBf4DjYJZNzgSGTvj3sRxX9q7Vp8Le7HvgYq2XuCtKvx9GmFVDD5Qv9VYdyMM23n9wcAjYK",
  "key4": "2DyXFL6pprzSrXLUnhrzQnrRbbYzVVMG2mxALrQb5T7WgZJtJnMQkQM29eetFbRugXs5NH3eP5gUS3q8uQx88fTd",
  "key5": "3LfHqpCwayPYhtGRHzqmZRrjJm6c8ihUtTjcHbCyMqKpMTqLWgtdcUc9XLQDAHZve7VYgBXT6NNAqR7KwzQJg4UE",
  "key6": "33nmvq4dQHttjbxch8HdmC6st3c4FCtq8aG9PhMTkUUAHUKnhi4q2173YgoPAUW2cazHmJczvd7LPktKPmtCA8cr",
  "key7": "4eRhyFXwCa1V9nLuvXL936WSEuYTYnWzJVnm2Dgvzz4DEJK92Hm4ziRq5vxQCyUnnisJMAqhpos9vAJwdyxpc5vd",
  "key8": "2NycQe5e1PEb8mLrKMyPkA914j8pBbeLapkNZRnthkqfvy93yiLD7cHmYMcQEDLHWLi8Q4P524Lk7vkANdtGp88H",
  "key9": "ZcVW64r7Hx4vu9UZGoRyA4hGvWNvQUiR8HkZNaenvy7DFkWgDsJLRP6fSkPLuJyG2SRuTetXD4tmbPxFVGJBuUi",
  "key10": "5h1KCXCLqhSx6MzKbK6LsFcu3NT8Q2ZT9fsoE9Q7cgh4Xuj4s3VgmCNcsuzCpCWRooUJaBS4DVe8KCqwUTbHkGTY",
  "key11": "5e3sdbJ1ahaUEv6qbVq8gFpJhYSQkHdmDAYzBnAkKBH5v3QaXcqFnqoxhD9pWY6GaB7LdnN44dSbf6gGVFfYE8Kt",
  "key12": "5mDgRWKzZouC75srNTqHgKckLEMYHjjZdsBveboB12y2BKhUjr3gY2V9A5kMmebqeQKBGvFazbvMVdWzzPNSaGiG",
  "key13": "3bnBtbR9RgoZSyRKL3A1wRUCk1LhVVdKBnSq1c3LzieYG1ZUtycK4Zbe5d6ZXsLYMXtDX3z3svibA7vrWHAHugvo",
  "key14": "3UxV54V7mgyVwLwUHKs8PxHFFhRzN3Ahs2noqopzyYEcDNvdrsBpSLVGMYSJcTqa3oHrSCnGYbNEtn63Km1GkqCw",
  "key15": "52Bpmd1EDfQVtHPKJJ248uezNQjpBYWVspJJdVtFtYGsPhUy5oFwQN1ZYsLtZJKbsnnxNcUA7RC6W5jy2aKNVvY",
  "key16": "4HbuacuLX6Str5cP6U7Awbs6ybg4coAejqsjxJYiykAWJG3cc2DM7XVxsAk5wYwz8HhTDYh9mYiPfCvntKYaAmwf",
  "key17": "5KuwkDZXek2hB5LHrVAAhEB1XSs2niWR4pRpL6SwWoGcSjjaN41tYg8BRnXPZJtGUsva72Z64xwkTVNZyEJeKBbU",
  "key18": "4cq8DtfFDodCHZnZcK8xtLZ8tmFAeN9i8f24HKCCvL1QNXzE8rZ9aMBWjzP82N5FqHRuV9TypgDizeQaz9kLDNcy",
  "key19": "3jzH2XV9j5emHuDSzRBWUKHaShdFdpcrKerrMY3oEQntupg3tM6EtKqzZn8r5uD5yBuNNUyx5Z1yWrX96WDj96SA",
  "key20": "jMKmWpfvZBCWUoemCBuGUotU3b5ZFeC7NSk8tZPMkf8UGjLzojNxc63GucqDkfxK3c66CxinfwKM7iiU8X2x4d1",
  "key21": "5f4nxps5Du3HBXDc3na5xrqpe3jYbTe7ZubHWbvDB3Sizx42TRGN7riWPfj6Preh3faz7sQ6qQeqqDZbbvLo4viW",
  "key22": "3KfadA626oEF4hrNrMdGLr82CR6311bjACh6obehtUgeobzn6pi5kwXtmc6g9hr4cMPhpP9A5PfLFJMTtJ8JJmmq",
  "key23": "42FcyNna4AirfViFtqV1ZHhEFFpmiY1RrhhCnkBqV7uoJJWbUbQwTDs6aNBmn7sRpmqfz6ojJwxzXU9UT7hsX5Lt",
  "key24": "5Y1CQ7H6VEyFktUHEBMZajkFAUuwYDEy4WWG9cnpNDhQDjCaaAEThkZX5xj27vrXx3Pez67CWxVZ8DfL6yoquMv1",
  "key25": "4e4xkHEy3jZDQqzsAAER7NZGdUzmX5VzN6iAsSS2USpTutQ6E4HMBW6nfNXhj122hRt9PctzFczWGzzTch7Hfb3",
  "key26": "53SsgronocsbfJfyikb6jhBTnGgmr628nxokCHPbfwGmBVzbhqb1DXLkqskaecLgLYPii2Wv9ErHjhiMixJEncCg",
  "key27": "4au3yWnSnafFk5U8SErqnHQ2mAXcDujJ2g8v8PPmoSZd6ZNi88bXxu86gtSGeW3xr1soB7KBVuiTEXSVNHZULBjL",
  "key28": "2X6L5WWjGqw5fRcjCRPAkaLjBcS43eY16EpSpUmgwdbr2eiJh2mVQuRxm5Gv6mgY9nzzvL1kUARsGEPRBQpPfhbx",
  "key29": "21TRFfoAh4DMt8b3RLmRyUY4di3jsxvsaGqXDawh7ayqvN1Wct6CHFLaj2LLWCafqQj13npNKXWGt5eV5ojg339h",
  "key30": "5tcxU64g3t2Z8GxuN3qptvhzNJbYUuQgTgENArHEYEgg4AVRrtmExjRoD27JiAYdjzP2zqCAa9UAyLLEwibn38X8",
  "key31": "3B3TUTtettV2PFfYMRMunQXMJBjrkdcJBiavJY6JoFhQ3bgxCLZS1QpuB7ZVvmS73vhdgbPr8htFbJbWEt9yFECm",
  "key32": "5CJRpwW53MWbnLbczrJFMmSAq9yMXdgpZyi2FSrG7vSkAWxibxd5j84MDbhhkTdFBpvZynogauDDuJ977pj8A2yx",
  "key33": "2mXt121EDVUQU2cBHjVQBueTvFgas8gzuok5vknLbiJ1pU46wssSwqwQqVknSwY8D1oc67CY6S6ouXa6N8WiDVju",
  "key34": "63oGS4pqSBHLPsGUrPbmW5FqMWPoetcRwMFHTdT1VrgWHveKNzJym1CPfiVpAv5H7Bm3WdpXutQiHqoogtCZg1NG",
  "key35": "2Wxjk6CiSt8V4kmyRfx1nzrcx3eS9JZXwa3FcSS1sMUJ9Y8AXiCu1T42JF4BCCJHEZWstBfkRj8eK2LdJU8DfcCE",
  "key36": "G2ojTcvN2D5XQJyVYx2LC7yTUvkurE2qd57u9q4SkjEi8q36MumooXXD7SpiXDRqL4hUEPogcKsgSCcT1JULLM5",
  "key37": "2Qr4RJHJ1t2nfNxUQ8w6EKRrN9SNp9RmoLsWMRG5uab6ayPJBb8R6CtEHyhWev252beou2QEMH3A9TryJ3HR4i21",
  "key38": "5w44uYECUBMTxGsmExWXDz4WUG1enai6bt6do2TBxBeb3V93DdZ57vp7KSyxWcu2KtqmAtAaJPek5zQyhMuP7ScV",
  "key39": "ppgVHamW2kPeziqu1XeYaUNmatTzv4qiHwxyWTYfn56ecKTUjj2WuGQvFk2Q5GEU46X1hP3UzhsSNhTBPpwSrkb",
  "key40": "5KNm4E8NvGRzrJqzazx9eB7td54KzHYthfPMo3ipBgxwJ19weLjCdZ7JttY6LFXwMvy4CNNaLfGVrHE3PVUZ5kbU",
  "key41": "3WrEy5HxXf8tMZGkqbagHbKJ6evMLEC7hUHPCUfiRZxM8ZgfqrNWo5kkHS46sNYsirKVHW9h2qM8KLkRsFF8CLia",
  "key42": "3sJ2cEAEhpgGD6SuEfPLvSzYbcyJXJ9A9rBePbiZABqbKJsoHrD82rRPgW5fXdE8ZwkiAihkUbTZJK4Ua6DsGCz7",
  "key43": "5SsMpg7arNoY8QrpCPi5aNxJH33c6a7uitdW5dD3HK8GM4kYB5wbyn6hgPcd3KbJ9Qb28kTSKo4gzrwi9E7UnT3c",
  "key44": "2BShix7fspkzNmfiTBqQaieb5p1UbRhQsDafKfykHSbHD3SccbrgaB3mhhyW5n79tW67bkQgUK5eFkZpneRZ47qt",
  "key45": "61zUpwVTEV5zkUwaYF2LTQUXH7g4jvQmQ9y7Td6Rz1xgaTeAC2jT34xcsEy5FsDevSFNoQEgu2ct8tnoU4AT8JjQ",
  "key46": "52k1YWzoCa54HMYYBEtxsBHfifHzXYX4D2UxXCtZxCDk5hPEjmMzgmxadbJyfNRHqgfBHa8T9HJTrqxYU9opKrag",
  "key47": "384BsE3BGSpd7bjUssubRFvQftWZb55XtbKtYPeRYFZtQXXWE7HgM3W41m3guAyQj5TNoGWmTExBuxnkeuPrFJdZ"
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
