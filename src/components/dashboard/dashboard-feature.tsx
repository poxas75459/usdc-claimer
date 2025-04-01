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
    "62seagdAW4V47DXmRSu4BDCFbF44tHjJV8N29moRSy4JdWdYyd34ZKpiTgQdPPGuLVabxRD8net7ozM7cQFBGxY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQjh1Ac8eHhYWEX8rfxGSE4n6ND2t8sj7q7627qxtVEj8igU4jBvRRYwrnbsmsQFREbhj6kkSE4D5pV7MhHQa7k",
  "key1": "3RoiYsNi6zVPCDYhZMUnGHagsBB1kjvzPPnNDPv6rtogsZieJUf58amRmf6PG2PuF5TsSpooFF2oD9BhpiEgdFr1",
  "key2": "4WHySzBqH1oQLwu7qsVzeUKhKoQmii7KPZerk3FvSW2QCiEG3vAti7xxCEkit7im5TeTaa5wsfTuqHmGSpbD5NDF",
  "key3": "MsNJ7SngfuxguFk2em44oJWgB1VY1ggAcyd7kAn2g3wpJk9RvNogCoGFepmJ9bJNyuxbU157PK86cH9vPZXj3iw",
  "key4": "286ked33nivRvgrpdaqqoxrRozTohTFoNm2KXoNjiTgMvGo2y4Gv9Lbd1TWFpagf4dtojNDLvufvLvncrPrU6PaV",
  "key5": "5NmT5jwCtFKX9gk1ySyu36EG8ZAVnHVyigK9DQP7E5dHxzYYKtA3GcssDxCh5FX8ptD5WA6q9QwGbZYYcdbNH7MM",
  "key6": "2CbPQKHjUJDvCyYUFHtv1HeiYTFfF4Q65NzE2GYmTtLX3D4Phuxtot2M93rSc5YwX8REbMDDtD3t2M5YsYXBCEEV",
  "key7": "HoTCX8XeQHY2zxbA3M2uiN6dQH3owUKcj5bV4zHwm2W27dxxNaTrfmrVVnQFDckMAfufjGXGjenr8ShFwFeJMei",
  "key8": "2JMmdUoFpZv3QxdAM9bs8LERyYHvmr81W9LXMzGujueE3TijPPqb4zq2drTbhaFaHWo5BWun59KkuunE4dc6iMxY",
  "key9": "56G4U1UppkrAceuyasLiP24saEDQheNNujHm2uCVEGbFiSi4Q4JPFFdWLEWKCJTRi5ra5k7f967FoWeLgmVraGku",
  "key10": "4otySrawfsVqsrqkd6w4J3jVHsrK2DbM88WTrrdbRXHFgyAJLTT6tvQEAJHC1BhzZwApsQB8RaVzRKxxLCtRfLiL",
  "key11": "2zTZySVyyz9nAAg4aseczGZupoZaCqYd5ACST7NKibvJztmwZqG3SnGLRKPniA8us8sHsCKncWD4tCucbWA4D4Xp",
  "key12": "3TmrLomE1EPr1g1b4BzW4Ju92ob81eGKtsPqeM1D6sFFTKLsPEMKcSvbr8uCzuVg1yZpD3NJD62bfSEZXCp23JTv",
  "key13": "24ugkWgygQVWikJSxdJ7ekdK9pon3vUPjYqCMjckYdsNZj1k2z6pi2JKt6Ldg3yYFRUMUhTKfdQkgC3NWyT3wGmc",
  "key14": "5KTQtqNcn17qccNzE4WcoMyhD31k8oNo9zqrt6sFZ85A9R8QsJfMC6A1uyeqrfTYZf36hsKkejJ5GyX51zkN8pEN",
  "key15": "3w2BqrLtbKWeCfk3WydaN7U7FyVxZZWyMdT2rRnFH3ewwS9sU7yJJQkELN232uMTH4yZZe6k7pArbCZtuzjRQtUx",
  "key16": "46gkqdf4y64RvDYM47UaEqC2RyMdweskryTiHpo4Wfpgt2b6uRDxhzjNKSZkRW45bcjGcXfzcGveN2TQ3H29LNEJ",
  "key17": "3sXEyeo3QXJBXjDsLxnwkVbtv2T6SNJ7AXUGxy2cNj1Qdb5rsjpFBwFWP24Hx51FvNxFcT9c2a5MaCEtK9wcKUvu",
  "key18": "MTYwkn3tQtYZnrz9Mdezsktxd7g89HeddQdi2tyKEMfpwhR8MCMJZVz4qEaJtuhkSqMXwvwFcrLgPgz9GHuA8B3",
  "key19": "DyG1StK81Akb5vr7X1HGQX6h8qAzUxi7EZutmmxkCzWUGtFPTcjdmgDtdhNRYuWRtVe2ujZU9F6xgBZBshja7Pq",
  "key20": "3DRpVn2bM4WdZyEXQRegudRfpjLSDo5uyZGZZUrLXKmBSmp881A16qaAYFdHABhpMJaqk5bMoYDeRXoHPyLToLYo",
  "key21": "2ikRvBZbeLB5dypJFvDdwYyMbpXHerH3yckrgUEEjkW8RNb6W63JpLD7ocfvH7U5ZDsc9q7b8Hg8KzUYFMHqLhDf",
  "key22": "5dCwc5M5Eb7WCaVUTnLQTGRzf8smLCGjuzytgZ2pmS3cFVh5Ttt3rRLeMo6vDQ6V5J54TxNZX2vG4bwHh9Ds6k31",
  "key23": "4stdKjXjZ9522yJKSqMX8vjg9advLQnuNjhBxUmLeVUWe6EP3xbVLFcMNjr3iPCfvmtAm7gY1ouKsURqDe6UfWJC",
  "key24": "2Veiko1WaXrKzdSaWWBdxBPUeecXtZo4PqtLRzr98AfUij7wuWntZqXnRn6omAFTdGoUh2Z869cHvCHZpu5hXDor",
  "key25": "2yRYNzAiWnWfpywVuzTMsE7Din9ANQ5svrY2kGHPPwD3CCGghjRitRUgRbeQBXFPqKzuBucaXrbbucGHktyknvFr",
  "key26": "4oLPUkU99tfEHEnksRZbqvd4b7NUEUDJWPcPLbBDcDRTaoTCkVWif7amnDUuecNHSaFFmXNRHBRt5pHc6RAeH1CM",
  "key27": "32bLsXy6Z8wTi3xiG4j9NUUMB3vgrQhPrtn39u9P7AsGGPYfgyzgCPQXJ9tDjda2p6uycsPa4GxYGtsen4V7sfwr",
  "key28": "2JtGZwGA5QFj8NHWnGE3VRx257wC4D7QdjtAnMQyMQEE1jU1jcgBzQATAXyxf8RCMqAzMAcEmJqYx2nhQznLc2qz",
  "key29": "4PkYn2sXAWGAUCCEYy1EA3RwwSb3oivShBG91esgfpViwXk55A2xPvb8gTWi37rDDhZsBXd3hQfQEMb2khnEfg5r",
  "key30": "ShRYAjaZTYQptaipLWafn2tMHTahf5vNaz2gsUXXq1NRun5s8cDmdJcNgBV18mKUgmZGczAGSnC8bBnqXhJSrJd",
  "key31": "9JFE2FUrT3cb2SXqEFBPCdZ99w9PUPZCDPMzgqTkz8KhQ5iyKmKgm6dUU67gKAWU36r1HahaQuXYuWjChrxSpjt"
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
