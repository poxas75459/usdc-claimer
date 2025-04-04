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
    "2YK6NiCvu3kXW9AhXm2itxmzTQnF4EjGXSCKrXHr1DQs86PhThAVi79yxdvo7PeiepiFpdk531bXgsWC5XEdkoQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7aPakeY9vZcXeYyzPfrt2h8qRdh59aMsdivJmxfH9N53gy54oGd1dVT6khrTQQ8VxtC1XAiRAUfzM3Uiu6hpKR",
  "key1": "5zXHnBC5aGmTvfouGBPJTxdzK2EDUMxRCPx6AoyQ4dY5t73e5sa2EbehjuwCVNkU1vDGdaNmLZasj2iCxD7J9N2w",
  "key2": "2o6EqDVurAQdncum3m4h4PutEthkHbasZ4JasmckPzf9uAnWHKfWfdq2uN1r8R8zAtp2bPwLNxnze5U3f8hmThSb",
  "key3": "WQuDjoZjMpRKihCSCXiCvU71Nz2FauxpuLSK4AJsksaTV4QYWVVCmNnH5a5s7QhnwbibrAntSdcp8yqZkg1uWk7",
  "key4": "34WJtSvyYNke4PaxfioUHktnLRysu4dR7Nc4Aq5KgSwGRticAezRMqrUZjgoznkiq5CGgxdyAk1qoymFLsXQMZ7e",
  "key5": "3a4cuYMcYExx795R766mJP6gKnfMeXVAuWEZS2GD7BB77j9aTsqgdj5rYEkNteMhYFAVvTG1Nbzw4fCno1H1W4oY",
  "key6": "2Xr2muoEeJRRt7xxNXnY6NdPLzqW9RefQU3ZWF5nxco4h2qKc4TcSb9o9pZbUAkTvZvey1i4MFU1oM1jg4GingJg",
  "key7": "3iqtccy5feHCzRGpRP4BUDZTMSQW3x8gX1iu1JehzN3tBzM5zNv6bcwE8CwSdTEPe3yXUbM5XvVzjgRVoKxiXgLe",
  "key8": "3EtNsJDqHCpZhzi1xX8hoefJBozhXxBp3ucijiDYu1ap9Pzyzyr6AmWX3nFS3tvK9eQp55tms3mAzqsjsd18V22p",
  "key9": "5FhVAK25VeezpQnHzXWuo6WcRqC7Qbs3ERZRc5rwChUca1zqwHJGpLPU2NJdueNgcymmzmm7aZ2HSd2ntRK1ZPLg",
  "key10": "dSJrdv2PrYzpHsYVCCnLsB5Y6AW9MDg79ZsGuT458d6GE2CX4DxFXDmBNGGTYH4vj8ymnXWnxa6ooPp9qmdz1F9",
  "key11": "VN2fBehm53FZHdkDnczxpaRSw5pBsrLDaeXegH2T5MDTzfisgJ4f7dCyfdRKjNjjvjD1tx4sEsdquHHBETiP1nd",
  "key12": "3isufaq6BZxEpAFVKkcVb1ixfGKC56mJachvkprmCp5yDkuUGTwisFscoj8rCvyBqCK9Z6sXypmrjjiXDRPYnZV",
  "key13": "2Z2jiQMC3Jd3zGDBC3RFFBwttB9tmq9wv9qNCQTxaUV2NMtkjqVmfCzBRpZzK7fj8QK1cp1japZubvG6nxBvnN71",
  "key14": "32ELRmwYQtf3ZpBmZY9ktP1L4nedTcaf4MKjHHDFKTRN5E3ozU5hwNha6JyRojBf3RaeTkfHk14L9yRdL946LMBU",
  "key15": "3nMN9Hmjfr84eNW7F2PmAD3JehjXNgNwqs9ATAafY5XD4P27YP2pWqGJRtUUBKLWQRpxEkoEQikqk8iSr9QY6jJq",
  "key16": "4pEW2tex8y1jhGye5KFgysFbYMVpyLo8T3kRdZQLWJPvxv2wV2DLeSPLuomB5iGHWUdzD5m5veFDkR2ZRxDFXtZv",
  "key17": "2f5EV8YoxpZjRoPeveLajepf3KZXw9rmAiYkiN4Vt9yYNENG3P8DCLUg7bDfgqqhJFBt4yegS57TSQMTCpBrY3kA",
  "key18": "PNaHwNJErqSg1th2vJrZ3B9BVz6Wibvm4JJE48VtKJVY47RVZVLqzraZfX1ePzTAqD4g6itPDgQdmGaqXr8MRaN",
  "key19": "47dQNvbsT7wcNebXy964VusMAhr7HLPmLiRKy2HhRrqzqArPt43W8WDDE4CQrtn2sKsrHqZmwf4gUfR68b9S8Y5U",
  "key20": "2v79EkAQa1bSnFby73DWwgafCuUj5Zu2jVTmS5jHBSRDLxUkx8BJLV8UPAQTQDYwqUrmdDSTxrX31veLA2VBd6hC",
  "key21": "Q1czmDPGtWSS9DksyafQHaLgaqFcaBY3oFcowbGgfsQLVeK1MJqNAJC5WhbaiqZvYtKgv3rqZtzbXG14ANN6kPM",
  "key22": "HxXrsZ3LnGNeMDKVKJLZJ4RMsJ6vFhV6dwSZAmmx2UUH197oa2TqWX1YtmYYQjGHh3Gp3XfgdHEB6ALWon5LtXM",
  "key23": "J7kMSqGXT9Tmw9JdhHNWvXTUfZUjWiNCZx87B4fVvoSjoVsaLG5Mi5P8x67cLUURnTk4bkAe38PFcp7LqfHKBEN",
  "key24": "iVn1tFBeC1Z9LEsHkvUMjMUypJvTu1qCLqxgeoz4fbqPBZn8bo3orHFj56px1rukvpAGxAo4mJauv4MnxHJJU6K",
  "key25": "uKsXutVaABc2BToGjSQizmhqxo4hC66RAEXVCsTBfVKBQZmUPmGHVS5DTPvX9JFwti6hdk8gFg4Tib8BK7THbvJ",
  "key26": "5QdrWA1yzuvJS6V9qEzWyGjj7BGffgK7XMMzS9WbWGFwYY2nqGMSfdrTzg6DyY4nNptt6Z5LxQjhtcuT6uZH3UBh",
  "key27": "4hrsPFMmRL5VTA7ncjFrZM8fYvGwVm32weuXd9V2PrmVNVjPg3zxdMdUpG9YRcxV4NxsTksynWMz5w6PhqfHQZT2",
  "key28": "3LfMmSegLUSeZXDdTzBxyYWMhaSR5rJSw5RyNA93YNqBsRr9xxekXpsjDyhZPokaPDRYijndrKjBFsmpcZs1BK77",
  "key29": "41j1vKVoSdfxZrfYTCpoX8FPZFtpswdBwVt5jUZhqMjPJKexBvdSL2DhsyaAo1qgxJfnvGciKPz2p7ZuzMcgN8Tt",
  "key30": "65SFdKmPcNAVUPTVKYK2LdHT7N4HtLJfFYtoUNLLDbogfhUvGqkTbXQpnqk38irRD6Dsbt59GvHvYxLkhi2H2ftJ",
  "key31": "5TPuvB9tbbnLegbs4MSz9qosXjSttTuDQWzMjYVyr52fBehEV5pEft5usAPx9q1KnpNug3pgxnRJc12X3m2apgXX",
  "key32": "3azA5uGbPQZprLvTMJeDYuiXWu1jdjQ47hZaTxoMvzN1Enrbd3zyCK1AGskLuSi59C1dwgsmtfHDQkWPYjN5ZqNv",
  "key33": "2SXXtqznG2zv6rpv4C3EWFoKyFPDaGvtKQM9cPddgAHY4YtvL21ei8miYVuwqHnM4jHgUQAK9CtoQqM2dRbNA1uv",
  "key34": "2pf6GHF86AyPtbah13S8e2FAUvvwKQBtkDyo9CJ5a7FoyuN4T4iKV12hTt84WY1CbFVQLEmMfnBEBmE8oWqHCdFL",
  "key35": "64WoY1N662mC1Tkc6VJRAnuSkRjSicVUwgSyHDDtFVVjDmvpCnss7GDu75eZvrZy3h7Bda9uf9vtxYfm19bBAdru",
  "key36": "3ZbvwGdxMo6SYsG9jnHjDEiQqZgV2H2GkuxDYesnXFPSZUW7abS6438tt323MDy9xGHv9rVkoHpFp4TcT78S15sJ"
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
