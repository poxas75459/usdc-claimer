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
    "4QUH7vjDJ4UEFHKZqNF9jXNEVbyEyQN1oJDbxK5cfWZcmGEs5Mc23Y3pDBANre7oGQBmci48pmno3JcezLixm2jJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUFsvdKjqjRL8Y16qMnnsXUDyjeaSccGfSoHBDTdNP6SEGrSoBCTs3tvoaNGKubQaXARqvBz5fmKc3WexbSbkVw",
  "key1": "5kh9tzHPvGZLeypM2ynFFaT16pvoZxbD1baPQCXJoNGGY96jmS8Kb2oorcy3HMtskT6DTLRNFGCqUHXYj2WKfXn6",
  "key2": "3UNKXUqWWjaRuGZ9zSnWp14wH6MnMbknMSLY9WKyjriMuy1PNnF7r58yHjb6GhfbdrF8PQRHxPyX15FcBnw19ZnE",
  "key3": "2pLQxfg4iYcKS11BZ83k997FmTi34k1gWqmSmYJXu5Uz9UzzcocCBsipPGZoN8s1CKyvtFJ7q84U9uHeMTufjFsa",
  "key4": "4Y6kT28keTtX4dGiQC32yf3wJ3vTuYhAKRt2eiWzeHeXtenuYtLNFefMDpVuNG1KvVWjxCxpLH4djBpGE8MJN2Bq",
  "key5": "4kTiMisZMT8yzMKndEfQdKrr5bYCQ2qXntyXs7JZVgrJ8UwSdZ6qFpV8Nsg6g5skDBRq1ZJXajXwG1hKks2p8vWq",
  "key6": "4Lb8SRaerwLxBzMSsGE422NTCGx13tw418yubvCtcgUzJi755Zvpgkcr8zyauX1iGQ3Du98b3ReNa1N5aStCMrU3",
  "key7": "sEVraQo7GY3Ftui7RfRxANvBD17C5vPFYP6Yc4RjW8UGLyjmyv34m9h2AxL8bzJPsaC2zcmFwBX4G192bZqusrt",
  "key8": "4hf9gHFsh6zugnA4SkqhtA2QkUUhDtb3Nw6fVwT4UELdoFHFmahDwdAfubdVegbUVGD2tQZMviTH4sBW8zNo49Tg",
  "key9": "4qXJ7PyobTiqueceSzZHA65irduPYkiPSvxjwALXSek8s5PWGJnBatMztaXKKfeeTyAz49A4jL5y5BYX5oRqw6GG",
  "key10": "3w2JQhEVikgrxT8KZ3RDUKxrX1FeazreiU4VZCYNr69vA3UzYg2A67iyrDeLpKefW6TpGFXiJLKn6eBBGCvbMWan",
  "key11": "PXyLKm1cCpeTv6TBPkAd19EHPFL64bboAD1scHSwnuQUkb3DYjVmm5i3mHR8ehwiBwWQ7E6C8DauvZHpFVCe1GE",
  "key12": "31Js8tMaqiwkbsKFaGFVKsmUrLWis3Bd7MpUUZTeoPeXZ327rrL9so8pztJ2u1MU8b4FH7wEFaEpUjrbe5kn7nge",
  "key13": "23GcgzwuoUvnr38kjJkjV1fmcwao8mXsXwVE536Wdw3avWGxubY4s843yae8XaGrzFzjcgF9NwkH9n9qiW32nCeL",
  "key14": "5K4xScK9RYZcpSUE4cERiAsNNvYuv7tcshX4RkH1Wt48GPSydrWr1jferRuNEubU3ytd8doSL492tCuYE7rA1jeq",
  "key15": "4j1ycmeBqQ2gBaeTt12uBFrTF6uHX46F3L4Z9s9JUyyUTxZKZe4m9kR6PY9jw7vK6px4HervysyEDyB3vSW2oErN",
  "key16": "21eY58UcZznnWSiiaQ1r4V4ttVZi2BiSU53hdfkZcrACAimtF8BA5DF1JMy47Zez2w3MGvbSU3c7u7cqtQBpXx6z",
  "key17": "4yLxDQQmKwXUTBRtvrwJnDBJVtDJ9ZZeLsGV88PFLWTQ8MWmk5kU892bmvrnXmKPsg99nSFWCumJxierJskXgzuw",
  "key18": "2djL9pSMYrrdVphhHticoDGn6ZWGxNvQQ3Pys7h7ku3zBjEwVKAySkGoeHYuLucZwYUcmTcYcMeWci3QJsip4qJs",
  "key19": "4xS8aJFUda7xbWXNWmTbcfwDEzrnmvhKmQBp7WKSfthX3HviaXWQFF99q4eKX97eQmnGyVbuvjZwTiJxKZxuT4pF",
  "key20": "38vEFVz9obmGRyJvcPNRo7UTSb7HbV3EK9ZNLbmTSxcZREYRnUdVNFfAzFBmvKX6v5gK2PNr51TmKXNY2ESp7j2q",
  "key21": "2AyS8tXcHmY4Hi1rRswESz2Mf43y89S1UtrkL9d6UyHdaxowdTEVCvKLtbTxS5CZKyxpvtGta7d2VZVwL6quQzJV",
  "key22": "Pen2umfD8bmD21ULWxwDPsL7VMfrBX8Y8AZ8n1mFGNUs1dpV8pTZtpYcEttsSnvw3xKut9TxhMgkFnfyp4WceJ6",
  "key23": "3EQthVAMv2hCL8H743M7oKG9hyff89F5oemw45kj4vkYJ1xhLyVwM88Lk22GNHxpG2FyVQ327x4DHvzcCqZx3nDQ",
  "key24": "AULnrpyxv1vVrgtKhmpt4khvwnb5caDUrskjneGs3HbHo9b9rcoFcgJovA4MqCoYoTaRafwe8ocGy8zD3AgixVu",
  "key25": "3wFwzYJmMioLaVAa6ZcdxAtkF5om2VfWCAJhBhpdCwG3rZMiXEhkmbMzLznqrKixoeKUCuJaCXRHWSjs7JR8EMMN",
  "key26": "5KbjaSkUZ9EbLtvjZn3KLpgdrdzB2qxLdiJqcMYxSkzjwg9mMqg7XWyKVPJAmcGBKbVS5tEBRrmKB2S7FkDWobE6",
  "key27": "5rprkBRSd92SCRskd9E5HDqtqPDcsB7mB5aBmCLJtBS6fZUJvN3f9cnwdSqFGfuPCL1dEpyWcYK2hquYdJ2S54R4",
  "key28": "5n9fzUjhfF7RFbPZrNRszkGhf79zzM6jsRNRXm7fdG6gFDCEuco5viU9vuhPADTaE5zDKyFBoXWsiVCwJPp1Km2v",
  "key29": "3VNjVhbRZAtb8TcLN9KC7PZFwP6ZT9mRHXKvRM94cMhjwmYELyyo9CS8ZoMpHU6EjnSUjNLiy2EbNo8T78mryXnk",
  "key30": "4abaBEqZ7ZSPE3YQoeRRGM5pPstzNzscALx8nt2bWCNWbctkLBZYmgNPCBGrBArs5rFNjNFdXcCnPnNo2J2u9pQr",
  "key31": "3kFdq1ZnSLYpnVRXdKaBANZCuuD5fTfVjVwXRziMgk9TTvFpkU2dksuXqWAx2nDh3vvoXTrHkSPKhUFZDW142bMG",
  "key32": "3in1q5D1psn9Z31Z1FNdrqcaCnm6DdybKPZjPPpnZ33GKD1PzrFFZEeYcJZBiPtTps3VKHjYALV1XGFAXcuUXfU1",
  "key33": "2jJoCjhc8SiBQzWDBfrcZ4r3K5UwB5XRbXLsQpdR9Wn55vUXzMezRJ8Sg1CBTEuugcQyemQ1igsVh8gMBmQVESyQ",
  "key34": "66B4PfczidRc4HNgkiBwiSi4ogtHaxYwxCzB8H2MybYbcwXDb5mKDqcASaBvYbdE4gXo1nKZUQ51xFawNrzNGhLo",
  "key35": "AXwWLheQnkxHpFvjNoja6eXZuTBWEdmA1A4PWXTXbnrYZZ2QaackZkE7GpQrq6g6MfTkoxj2wstQuVBPXhjsq7P",
  "key36": "4KE8QEquusmQPKpDf8joHoxq8MKF8veDS6TnCELUCqjeTk8LotPHJRm2rTiU6U8vsmfg6ywMP9CShBmZqVNjWXW7",
  "key37": "5vDuNnVK5t6rJByCawaxEKPXeh7mzKSfQPKcMibgFTmMu3VMZafBYWvg747sJbk7BkxbW5LUx714AjEyqMEkZ3mB",
  "key38": "3Hv83LSoarqBXtL4WdzYLqgWApfGZQMZBvSmaoyjRGYaR2cUvwwVUESESnqn4BSXsTV7tZz7YyJMe9nkjitRnMRV",
  "key39": "3daD12PgRnTxAKGrXyJCqT4Ga1CSxFVP19gt2jP3MkLSSARHuDQt5yHBh3f5jLFbmnGXuaMQCmbby5Jja6icmG1e",
  "key40": "4Dvgvo7xxkVCVmehHoUqSk54An9ysQs7YKVg56LezekxGCycv1Anij6ptLuz4hCJ78zBwu1w1LgvU2YEDSbQjLaJ"
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
