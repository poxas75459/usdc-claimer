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
    "5c3gSJNMg8FcxHG9DVZk6c3oxiY1WSb8VdDo4vKyectyatWy8ZkUVrHEDJv1ApSfNGXcSghGjo9giqUEPzN93JLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLKh1nDNcEphkGWnZVcSKUwtkft1UaGzJy13RUpbdUKmQvGriKwcqM3L6653rn6KHsPSxpaimWubgXgvxGd5k2T",
  "key1": "5QDyyCs7pDGz1oGqvyRBs34MfA5Z8rZNg3x6tsA8DGhMPXmX8RpcNrXmgbtJ1ZKrdnivEhrQsuaTqAg2M5JkbD7C",
  "key2": "4TZ1NEUJAyX1LHVmjWRC5qRVA4dYYBtZ2scUwSngUFRgWtCR4u1Xkjp5dV8r8uwUqjvAE6euT6qAhfPqLwNR32nE",
  "key3": "4KJDPYJmdk76UgLDLr7GbEuwmMTpKaFp7WarMKaWNwJJZWXaAzY8JU3WLKnQS5s77eA2MnP3RkkxC9Pe4FFV5WYC",
  "key4": "5hZHo68TS8ZksaLzq5Ud5T2sNR9j9n727MfbXHgQesMoVgqpihS3BMjXPHNxYNrzg2onuf1GxK3HyBZYj4tweun3",
  "key5": "3GuGoMyH46yicB1LwMHgqyDCfk7RGo25UCcX6WPcBDGSCRLQ5CYCbT42wy14yRfaJR6M5WWjWSCDMpZUfbRMMDcF",
  "key6": "2XRrspV2T92H2eaMxwFruhc5XU8DbcumQpp4TfQPdYS9atPnjS1xmW3uh2Cnu3qFZj98SAxaQH3sk7SSckoqWsMp",
  "key7": "4VYgCDLprKBDRFdxJ12ULVq5SFneh3dUtTVAsk6TEFRwNjkdfXfXtBs11qKWWm9a5XvrEmqsgPeS39JN5QW3X1HE",
  "key8": "3gBJ2sPiRCXLhiJJQU9c7mBntpGAuSsct6YNfboYbVwWYJv9ZPigCsWwBez3cx5D4hU5GzY6XEHXbAC3QCddh685",
  "key9": "67KEvcBV6p47Ym5TCZAwsYmoMp5Sq2MFGnRjgekgK5Yd4zrsU4yEnC5Wtz6TG7bfYaixFyKYqyx99ggvKj9QuyrH",
  "key10": "5LFKniVfLpuidkTUeonPrPNfsJKnttNBkdGuR4jCq2VrSHKFtNBqhiYohmyPzGTScrfzMa6HYuJQ89xBCVT4FShP",
  "key11": "5LY2Nwbcm1L1gemqdj8nktakEa3xamzVdbguSYQLDkB3LgLV3vcv2CNV1bQqrsRzV5LiGGM4LECVnXSoWVq7Dsx2",
  "key12": "2xmjKpvAPRtwhQWKdXWx2amQseyYMvGobx44x7V7dLVFXtuQqRuXEBRsuTwdbBvaHmqA2xqVcGigtvXycCPW4XJJ",
  "key13": "36Yqx4rod77NoXb6dXe8ZYLN8uctNuxfEeqijVHKiP5Qu4JAzEmKTHiPF71My14ji8BaFTdtnosp3mGrNSqaRQCA",
  "key14": "2KMboEaGHJuSzDvfSQgqiBvyTWffWsvH5GnZ44bjohLvV7jhVQJCJXc36uhhrHdRevesLrJMmuGTqNtjGp1KCRDy",
  "key15": "5UZDbvzGYa6uUrBY6akBdzwAwrTDmVBi9fHXftnsqvKwS5k2fZMFk2XRGitaxWqDD4q4JEuMmmpmJuogNkaFShv2",
  "key16": "33yHbDiqdEyoResQmjCRFYufzwrKNeFFy8WJzQRpLJsj6oPe7GHWFyJPzqYFcvcDLTMAbzSHKKT9UevRU4ZZcXuq",
  "key17": "2psyRBnSoXoCBywCctAAyD5K4Ws49LsFBjZD2Cm6LGUGk53YSwYf4CFyzMkBbwr7S6wxbpE6YABdjWQn7r8TLDrV",
  "key18": "2zVJnM1VvVirEX4MZcjRDCb89PETBLHX1eyq1BPb6zENTNuVoF377wQxntW78EhfaZXNbFLYWSYC9dvQYApwYMnz",
  "key19": "66918qFzXDUtkMeDCJ64SeEyyj1ev84PKW4q634v8gsJbFVnAac9sDPnEHuNCXeTj7hGY6TF6RGtA7UmEUJy3b8U",
  "key20": "3FxEY47zCfDjBbLr1dGV32mnE8CF3uj8GGDb3abRuYJPPR2YGdUBU4MgsqrfNXT1LCWeP5cKbnzqn6h4fuyrQF9Y",
  "key21": "2UMeTPrWejMoN8BY6VmoWEAp6iLsgR5P7nGDusHYC1PvLUWhMjvMUGjTVwZq428tmqrBFDLhn89ujtRB2FQT3aaE",
  "key22": "4nD2K6VUCU3T8MApnVzFvJ2RRMSPsTxV6a3fe5nHyquVnmG93JGh7VeihWgoCyBeNBbk67La2pduvCVvFvKZLHhM",
  "key23": "RbAPy53rQ2jzEBC3joNtS1JFLoF6mSyekwx7CPdbrz3BpEMiT7NcYY4qWjdt3EqUmNH4cKBYMmAmfMgrYQt1qRg",
  "key24": "2mPwby2uf2LhuHT3atGe67RbfLc9fCiqfuvY4M1BgW2P6DXV8GMoZLBiqJvSDdCJMDnSwa52Cq4svcrQ9H5ktnxQ",
  "key25": "4yACxmTq8hAActSiMuBDmsojzkh2LiRyzwRyUGPj9cSdKTH5snXdMx4TzWsfd5wUuDGtkZMdUnRAx77sfvmA7ahC",
  "key26": "4SVvr6rqJttmg6Kmxp7QPGV5U3Y5FUtwPGJsMdsBuyzUHKir8CfV9uEF79z13cGK9fjXN8Nvrwp3aNfSzeoetzPu",
  "key27": "2Ahz8jkV5JsC5sb49qCaGVP8JwUA8GAEkbvoT8pfPamvcCEzQqdnyeYUZnJjJnA8cgamgKTwwhJXmFFjre9KfSQg",
  "key28": "2beRsnXZUyWi1R7BAmavCRp8BsthzTWSgN4oyUWHDtdoMLqQLECjRBomobazBx1ABKkJadXtvsTRdaQW3MB1xkRL",
  "key29": "2ytmkct2566tWgFtd8rS3YnuZSnCynBQVL6VeQqazM8xnhzmfYHvArLtW2uNHnHQXaLnVMKmGyqyPcMZuqScnqUG",
  "key30": "494F2BhoMH8Kr9sXKi6xAiSkAqQednY1qqY1YmBQtVXGW1xa5Ff9LvCCZkNRTmqWmgCBR7tX1r5qN1PJ2ushow41",
  "key31": "DZtCQraYwzSzb3LofjqhoVwSkQMt9DYE9jJ2gcrErJW9JvWamxutLctcYdLuYUbPgRP8L9VT6Jbgt7BnofU8zZa",
  "key32": "5FGf2bBx2NaCWjBnSumtPSWGr5xAQnUVhC4NjWDsrieSjb33WidsnSPmEZTgSicdv4dNmnCgmVGMRXSLFUGTFfcF"
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
