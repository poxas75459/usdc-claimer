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
    "5axNdpuW4Wnq8gVaDFfJnQt7WwCD8p7zoeNx1yq2eAhSE8UbnDkty9JnoT9bdHaYY4WG86SZ2wyPinCbseZStEGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CFTQonyS1BaL7p5EqhbpBPkxTFies7ZvHXXLu1WEuLsayEAhPubauczMv8r72bGDr25zM6SBNhS3wu7C3vcMVd",
  "key1": "5WUxnoCbAAEiZtmwkUw8gFpowkW3Nk1nxig8Y2dcYSEV1YWLe36xPs3uvZhFwNz38MpHNJGd8TvhJLBQw4Qiesu8",
  "key2": "3VdpmVyPKSMRjimMWdzmQ3vdsTgUvBSNbRH3xpeAfKSRjQMa8x99yJa7SQdarxETP8HWZ64nWKcCUaUqPqL4aBDN",
  "key3": "HS2aGXUMrX66mv9iMUfCzWXM6wuB8WiaZNrXXEamZHddtr8BnCorW36drK7QSmBRLWwSv7svMaBffXhnz22EjJQ",
  "key4": "Y8Ma2Th6ZEJPee1cgZKNNR2BkK9MCBXAALyCN6oiFdejNZ1JQnt5Td6hVKtK9EvBtCHiUP16Q87N1Gyb1We9sGy",
  "key5": "4zoCaCLjyK1ToN6VXig48p4b85Mhvxbk79pznd8253vm6EJtU6EXf1owbczEJkH68DZemvGGtpfH9ozuEAd4ZCd",
  "key6": "PNrSf6hZTnpFUiiEE3k6V9CYCkPwM7EXy6s5UaSNy2uqDpfh7TzpuLhQkjue5ut88UkP2EZST4beVu15qKrZ4iF",
  "key7": "2EXMUwg44eK9eF4fafVkR7Td2qFCE861D5m7bR3RKdRnN8fwDatPXEy4tLxvZLm3ew1NVixKD8fPhK4ynCkdm9Ts",
  "key8": "4izABiUYY2YwzSk2twKN2EamLd4oj34ykwkNgwXUPDWss7XFAyVxzehgqCMNNrJbr3JESuck1ML8nPqccNo4e5Qa",
  "key9": "4KuUDximpkS7JVGp3KLc43tzB3863yyBux8hqxfkub1upBRdFCwN9RKbnNhHqee6mYPjQtrqGRsTgAiUyJy4cUx",
  "key10": "2cMS22ouPj91nxrq8bnMGNR463y26ZYssUDpsqTGqKc62E8wNtPypfdJtqZLBd1GqkHivuKp5sB97EUrQ5uqnuTt",
  "key11": "4g7krMozYN6Rn4oA4vGNRScEjtCoFLpGkFhVFnehN5DwmQKf1oU655QZBkFpwWPGsBuRSMGpZ6ypHdwW1NBEFHGs",
  "key12": "fcviByAZcgmJNXDovhqEtZvqXNjMWzvpCps3jJPDccw4nBsiJgB7SXKBxhukkG62HKHwuRFwKNo4DBaqGHqfyS2",
  "key13": "4oS7z39WFV97pxUAj8fZn9gCfxj8BshaavFbewyfbwU77gGKFYHGxpKKw4X2rdPQ148eTehQw3TuKL2kMHR42kak",
  "key14": "gquHjr9HUy7s7s5ixmB3cRsWnCbwLCU7PE6us3suYPaa65WWRhf9hP8mQH31RoSAW3LsB3UWPYWpAxdXiWen51X",
  "key15": "4WPumjRg5dyEJDhP15CHifDK8ryL2t9sEFBATrGpVDGvDe2LJsQKbjMcWraiSnyg5yvZrXc7Za7N9XNWanRzDtJt",
  "key16": "59g7mNHRjbwipfdSM94znjTCpyJFaYhTbwN15XKbqxqgWAKGdiEB8xErWGftQHz674hBy4jTbdFWo37ffuPgVU1f",
  "key17": "5vexLG1VSQtvTF6xg6UJmwHhExH4M3Sh3fvzCvyuPxoTwAPoQZeePD3osg5aJkvTAo6azwPjQfmMphFEu7cg2eqn",
  "key18": "3y6pR2HxdfBugsGs4fQioeA9wBgpPAJFbH3S7CTmnr1aC9HjeTDB4cAUKzB1x3JmEKBdM3tj6rX7jdieYMqE19Pn",
  "key19": "2SW5Z9fkDUHWEVoSBwq5s7KLsv6xYaRe3jMFdMv6M7zyZTfHF3chQw7Hk3d5Y3zP8LzpHddEsnccAm6t6iVrkoDV",
  "key20": "2o3evwrfnipJwYsSwGv6G3f3USaszY94EV59bYrZnycuFVv9ZAr6LxqVUvYSBdhxHQrqdmoSoVhp8Rs4WLzNvcxp",
  "key21": "2ST1H3DF9aYBBhnnRxJPLXyn8gHsgNMpj6LQ4QHTVzP5hHsw7KqYkutjtt75FWjWJa2QzDshgczXgUyEHbEQGWK4",
  "key22": "4cqL8iQHvyjXfZ5j2YB9fawgHwdzetCFRGBtNmMU746536cRe8wKzU2K8JEEP3QETGtB61zkEEQhjRaR2Nw8CopB",
  "key23": "5b4QiNBgvMoyPzRex3QV5XnYWCacKUiG6fxNbzL3XgPHoKsQG1Lvz9GyZpcQgwihkiE5ctJS2ZUwxib3UYMQzPmG",
  "key24": "2eWibANoXL2Au7A534pm4E4gRkLpVXyju2kZM7AfvY1SemD7in399MUH9CytuPipLQcj5jrf4zP4cF5XDqCDAS3a",
  "key25": "3DAF21DVJYX1z3KTWvqjxbmgzxbXP8iEjN2qWWyZhHNyXupMKP8JMyEX7RBxU4TPrrjczD51qB4pwWJihTK6KU8q",
  "key26": "2wXDvPPbUEVDa2tgu9yoCW8BQcYuoqnwCGUyc2r825G4iQo8ox7vbWTEvYjmwJEU4yp3a1mUkxKJdWdW9oXfinio",
  "key27": "5JQUKKW9NcaqJyLrmBd5x2BhWxiYrf6mLh814Vxzh5rYWwZKTcmnuE4nHBFSpsqKJaU3BoUsfmKUexZedefCUdUy",
  "key28": "3ryeXpPxbSHhrUDWQJaZwWHdFCbLDyYQtGUjCSfgozfqszgyd6VUrNvNVKuKkH7642uRBr2SyEn48JvZYr66AABV",
  "key29": "3DHhmisaZeATVbT9w6ABqqUnC1HRZ2BgHBy8hFWNccP5cpPhoys74WEKBzfMopSJt7rzNfe42HpzUnRjFtv9z9PV",
  "key30": "2rkq7LHc2vaM7uhBCEfXZm16hcontKcTuusPGtQ9XLnopNj8mxQfv3KjkDiScpRmU5ZjAJccr9RxDgFwNNcVaFB9",
  "key31": "5yCe2f3KB6af8XGiuMC2cReRfzVzf6pD1VaEQKpEgJ4tsw83jDdKjD2aMmG1Z5yCZKd6kmHNeaXZZtiuU8ub9vZY"
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
