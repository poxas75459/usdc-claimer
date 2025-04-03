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
    "66P1fzpuJw34zJxD4jCERvJxrXfGHGTpZdVW1b1LLTPrWVXigsn92Po4VARhEDiXaARRpzPRHKTYh9jDuvdFbnB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKiHPvQM6XjcExVXra8yh6xWRaWhobhKWwGijZqaaY5ozM3myWxs9dPPwwwuNi3injTBaXwtLTswsUJBEYxiZkN",
  "key1": "4XnS2uU4tEFdUsy1fWyQ3kfkDW4QKoEcXS5k7SUEJbU1Wm5i6qXzsvNiHQFkMBdqnxVQDmazsebMLqpJZHeZRbLo",
  "key2": "4w3BMfPigRSMpR8Rk8xT3cSdbdSVHChxfDCdgB6zjcjQ55XEPas3goJCuGcy8PXbZCNLXbHF2Xhhad2tZRVRpZiX",
  "key3": "2XpeXCaNCgepSAjVE29vonNtFPjWZxJw12QFrDtSqTpBGqsdsxnBgCWTzgoEg153Qud71cbacssqqcZcuLKSC24U",
  "key4": "46j9PdKqPV4U2NHvyrRnKCtbkmNszVMV4bYaLeGHWTjdYtvJAUs7zDYztFJXgFDZR5mVHtMUraFuYRpPtuCdEJaH",
  "key5": "4RgSw23R7TaWWqBTByNVcVCYTEKHaNPbAuUAr5PfppoVrWGXoz8oD8Ziac4QaPjKg1W9UnuQ7XSFeg1ewChnRrgh",
  "key6": "2DeGYUKS9qpNpaWaDAZTgJHvxuvpyAFSsNjqqGYoRniaSNicdFTnMojRVwY9tnGFyqvHquaK3tysDfmj16FoXL8L",
  "key7": "2bemUnqnZAWUYSRcyhjfyuQ79gHtWtbqA9Z6bQnMP9SXVN4GsHn97QNtWmy5GTz3b5Xwqy4mRjJMJCtU9tZfLuvU",
  "key8": "2w2hENA2UvKkXSmf4xfUEhEJ5Xrg88Jt5gF5Lp3kxgy3dTVZA3tDhN52i8M6Eke2PU6gYVei1zAJxGBzNLqFuYCr",
  "key9": "4fqQtHe3pqR1Ni8vzSzLm3ssktaFLm9t91YkznG6GsLnbLfsGruVRpnLy22KvBYNGx9Ns5dUU2PyJiPEiY8DYKgM",
  "key10": "3TunLZB8Fm7iMiTG8hCHFjRfQr7T74Cp7knFg897aYnXHh62s7cZDTSCVgGR9Rs81kjwvvLe8xWcWoa3Yj2QpXeB",
  "key11": "3NuSt6n7PLiMftFCqHhvcQpr8o5nZP91QRR5fGQN3FkUeCWBpJ9rSa3QtrKkbznPp79BtUPjTXyBJFkkJDbUX4Ma",
  "key12": "2XGuN4m6ADgHEoSe949zTpW3tgboshi3vsUEzrKDPeEeHGZsRonVjbb5rZY1fafGxr7DbAVsEEStcysTiyybhzhn",
  "key13": "2wkzDBMCbx8hqmsmborHda7JLpNAR5VH7k5CUHaGDAHJdrnJLeZfWrjVLuKh4nuBiGajtS5ASJ7bFYqinDzBocAS",
  "key14": "2WFY5DYRKe1N5WwoR96qRGvJdPg92DZWdCckWywSeH55QoFj6LPoQ1WkzCDZvR6efnPtZS65tyYH3z7UV8iJVx74",
  "key15": "4L2xT4DAGYjAAPPcXcycMVVAA91c83166VUAE8xGyGxUi6Jxqm4a7NkZx9wUorsohXD5yFmogaqe8f6mEogEPZEQ",
  "key16": "3wxk7UDwXoMvacStndQLEk7Nn1FDJLzUo5ui6Vj1aaTbmNLhdThdakq3ZnQ3riRjghWvem9iuGp5JD2tXicBAbPa",
  "key17": "4Uf9fp1YyeGfBwZ79VgnfX7PCKfY9ctdzqvVoFBeucsxuMXxTDjfJ3VzQC8BvKFX3cKaLZfZMac3d1rUBxH836Pb",
  "key18": "2wVjaDuGTcpcSUTGrdt3QqaMJJmaJKCQW1LWAMFn36t3kd91zPtS2tW3r81CMoawmdsZrVwSst2haBAar4dTZ8dw",
  "key19": "4NFQ6U5TRurCB9a6RTF1eAwAzcvPMrxX33HSNZFPF6ME2KAAXGV4GrhvGFEtVDsyghiFFF2qqsLdy4msJAzn6xtf",
  "key20": "3CK2XCDqt9PAmDfoaJe4Pxsj7q85SZNjBppy9YPEnH1Ev2mC3Dhb2WmmVvN2DQEZgb1pL9KV9pL7QXMHf4T3rasc",
  "key21": "5L8ghxeaQm74yBJXxiQxsB14P91kez3FWWzzWg3p9q6UWyxjnUn3BU1k33QtsJabSL3jvUfHbk7Lr6qsXmjrsomv",
  "key22": "2aHtvrBLhcQLcYWBaNanxRGZbYWh3gzhSDNYMQYdVjaFPDGf8MED2mbJLSqQVcQBp82R4ejmUh9a92yPp6Ky8eUK",
  "key23": "4pjg8taKZyj8NDFqxEwKxcVTddsxzVEzJ4KoSj7ejLPZ23TJjPQ27AAtn9zPcjuLGoLKGtE5yq1SuBP4mqir147J",
  "key24": "rzi9UX6mffMfjY8Nz345vvdB213Ea5o8kDKXTHTrv3PZ61Dbp6tQJFZiuqtRdYSjX6d8QfNdAhwxm79V3K4byQ6"
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
