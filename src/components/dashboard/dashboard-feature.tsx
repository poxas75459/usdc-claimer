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
    "4Z42rMudMsPMwsDrkh1oGM8GvXTymVtxXSVC6PGmefD13foszDXAhJUCG2hPQudrdkzbCGXzJejqtbuaWQnxJfYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LUcBJsFRdTGyq9Nzvdt1gUE9BT6YG6Jaq8vWfzYTMK3ExGkFE9DNV9S38JaYtsKJijxC8fDxjLQXJjFA7x9MZMU",
  "key1": "xXgoKCppdraVPWZbszQrLapKnWXxn4Qcw3wdGKPQPuxMNojfbE1Dn1jj7njXVRZW4mWvt6pvNbNhqbvDRJjHPz3",
  "key2": "3HE74xgWQu1qecyXpp9QKH27Vw2XrkHwWpkUuMiBTUmnXKzrToc4VofQH4t4fugvmZH2kFFgpatpvQksr56gYkqd",
  "key3": "47XAfLf65WxgRZoQKn4ZK68twcEdGDd77tLX51FR3EHZCmpPxoJgxBhESYJ5kTaR7nRM5MVCaRuSEGqqXWKksMoC",
  "key4": "4BHLANLS32jqfhZRKdA6rKSYDKm9adBksxwheFvQr7QS6ufp75t6FW4RHC3nG9tdeLPaL9xcP2jtYGq8XWwVWcsV",
  "key5": "4hMBeoxPVGctNWkJmYvxZjWpJ2punzUX22P87d6boG3HoLGJGSK7bGsZvGruHsSeL44SgKMjvfZ8zEKP1ea3tpgT",
  "key6": "4TUXouS3d1GeZvJVobj1htm7RYdL54o6kbveEwsMBN2qrLyh7wysBCs47hEabbhApVdS2DmDsUKCb3Zj9evwoX8S",
  "key7": "2wTntiASfjkjJTamgU9AppY4xrsSHfyp9N5nc9YA8A2b3EhioddCXvAq8iqq1x2Kaj2HtcFR8i1nYoFV4ief96Nn",
  "key8": "61SFDZhmF4d3MLJ14iEAVcKviMhMBHoLdduMGGV48pAcfuNyKo491L7sPaHfo5cGaAuabhnyhsi8Qv8q6FqFLdZ8",
  "key9": "6qwDfd8RWR5PNjPx2bgnczH5gxM684NYkKdueD3S4mRPX6gAJd9fZu86acJoPQzPok7Uu1wiDGapL5C7NG614iF",
  "key10": "5pEFQ9ca6zsRZKW9GE9aYFyhRwcP7efsZ2DmXr6LnpyR5ZPC5NsK64qABVFGDKV7TWU9ri61RjK2aA1Ns9n5fX2T",
  "key11": "3csDfvrStUBYxxzxMZjY3eWgBPwx2ftSNnoFVpmD9eroFpWn4sExFqxiNwZgh1ef3emEN9cupUVtqEgyy1kMb6it",
  "key12": "3o9G8wrz1d3dNAiURjF3Nc65FDdZtRd5S9LvAxnJLZM2bhfD5mFSR8a5eMMRLnsBG3kqxcLHARSsvoEk9iiMYiC9",
  "key13": "4DNgF2GqnJfkdvbv5dsd4phsAthHq3id91PpDfj6m6nHyjksbEDkbDKt1qpy6QEQC8SJUMQetfHQidkV9eTrCSLc",
  "key14": "3SGcmUfrEwk28vDcMvoadbE5qLYtPiiogZGDZrev2iZt3Hy9nALj79kcQfhyuhqkKVBLQFKbNB43erFmgWup5j6J",
  "key15": "4NVndowAF6QLTNpt6MQqevJ9QKWo9867MHN4vFgUXi1j1BeJwXgfQbwoMtXMMEppkmscKbsRAy6EaHmB8PWVDkZm",
  "key16": "2X4dLBK4BvTPjHmHQuNgfDoKnHdbWsKYGc28x5W98U897LxigRcE6HC3jawAU6GLZk8Lz4gzh9ZCrs9HiDuPSWtA",
  "key17": "4W6hfgSKyU74XqWjcpyewtcR8puoGbRi1CR5fU8c5vC3Yf27GgH6uFwU2WArACn4FjSZHaC3ZUeR5oHn4CVfeUe6",
  "key18": "5C9YD8BHfPe6qnk1KKVJYrywUpFUALMk3KYCQmtAWfpWtT9yzg5z32p82myRmk6SQQqHZCXxyRRKP8G6xH2VBh67",
  "key19": "2V7fyUPv5bQkfurmtaeNUm2CGRbfABCmjS9usXc4zgzh7ZLz2nVfzsgRR5wAAhaL5ssjLQuoMJP6zrwTMGkMePnh",
  "key20": "4drxaywYr78CicWhVD7YMWbEvimFM6uH6YXFfqdoFV5MyaMfDUNEGpGmpBY6di2KM1dVQq2Jjv9YZVdRcVzzAX5M",
  "key21": "59W1899JS8LhdSVNynKRAzi5jGXQ56fKhHJLzXYG9yjzvVD94yUuc8DmUwT52aP2xjPwrZK5S8nokzZgR8RZhQGr",
  "key22": "3t4EXoz1d6dQNvMVxZtp2VchF24BoBc2BiardzSqJBDB16S1sxty3ho71SWw6mCbtj4tg9HJVsFpSbUAq8ou9KP",
  "key23": "3DQEGHcyFgxKBonhSX2jkZFdwqYWuYBRY4CacsTbdTH7ZvHzgS4gTE3RfsLptK3wGT32tgXxToDFcLm2m92cRRz2",
  "key24": "3FwpQRuTjS2yMjSPwHmHUDr5pEMKbm9CjmjPghjPThgdum4gZmWDVcQPVBkDAoMz5ZrUoqXf2RAqtU26cDjJo7sV",
  "key25": "GZD8bfFnSjfbmnDcqYw82x6xrXKDWyGbTaFx2KLc5paSzoB2ZnbPH7XDS4xnX9DmJDF8QSjCarsGAqGKPhcoBXe",
  "key26": "2e4zfXRzksjzu7i6hfhLSi3DC7cgjmGunTehGWSdbf5UJDRsErsEmgWouJnauRGagbKw2tDreGGdcTXgMXYNksWg",
  "key27": "2xpokRki9JtuSak5QKBvZhcNsUacsywFpQ8VgvwezsrExDpytYU3m8kW55Q1q8wMBsrTNcVAPkYVJzLbdczxJYGV",
  "key28": "5RqT7FsPBcT8VR2Zfui5T5fkL4z3LJkVUBAEQPVnFn846JZPGe3V3d5rqhpXHdCBvpcJy7LPnA5cTRJzi9AVLjCH",
  "key29": "GFBFypMv4gRFUa4nwNs6iLkg5CbJqwDPMuhpzH52xYQKtgmFSzet6rgHFz4ANwrjzZfX7FbexxkwVYstBZtNqBN",
  "key30": "4g5j5FtN4xKqA2SLxB7CTBM6Uuq7UM1oEg75JQh1uA6nS7QY1WF6S2NysG7eqQnaqMG9ifakhP1P4PsSEKVcEFU9",
  "key31": "44QkmZ6UqHZM5ybmL6qDYwRsSdo3QYYMNzHF4HxDzPJafvmXNFKRgSLSCJnggUYmnLpBSp9B2t4Pwpy8r1EjhpKR",
  "key32": "2P7zSkrdu3HqykBgqV3HQDX3ARfyPw89oSZcs9cpAba6V6uBtnpSaeGNVL32Mb9f8iSgirvrvxh8YSSwQyhR7yM2",
  "key33": "5h4nLC3GwkkX6BQUAKRfQcguwZyMfvEY48VWLa3hSFCfchadSC3GkQ4Rakkjfmw3PocTKTarcjCuvwuMBJatQLwx",
  "key34": "513cWa2uALCSM5qnC5QbLg1hgfJZyNT2x7s1z6mjsMDYnTTwkjkXDrWGEVm8hZccRQ5mq9q6Q5bvJ6QLsJtWkey6",
  "key35": "5omksnZgSbYYtyuwR985t81wLp5yyZg7g4QF3w2vmwnwh6KFuvAjcttHQWJdR8UjebE2JmcjP2HXtPfVHhJnTdkQ",
  "key36": "4T891cLiLnRh3RDN9djQGrLXmVdvga6qNgqsiS6DawbDW5RxjzmbdDs3CDbJ35FNcvCkdgFBQiq6zZatoSQFZDCU",
  "key37": "5jKaAAhDyyVPcggriNrw89FqzoUbiDRXZQfhyKgcEdH4VZVAeYQE3kZC7kjfJ3mfv5skytQoSfgz4JjaBfgdaMue",
  "key38": "4agjFHNw2NX39ZhkU9NpDGzpas8WFdksmtcmNhk889bXzkEpgyK1ZLF8fbWfEtxYJyRHBprtNuP8o5oxK5ZA4u1W",
  "key39": "4MfJMvovBaMzocEPmonpPj1kFJR7grpZfRjsxu5iKSabR9T75o6nGvXpyFLnfin63nzgDAR9skMe3yuwsQs2aHk2",
  "key40": "26wsTx2suo3ozdnZ3yGibWjuiZDDCbW2A1PUjD1E1B5J5iqD3tRbpBcsZAunXAvhFTdj6wTGDkRdGDaxe4QLdYVi",
  "key41": "5PczHHSBRibNSqjXoMymzd1PUCcMLvzeuyaETDPJiCVLurTZp8zHDvnLQVbBAqiSXGfnfPx5cKWLuhSihpzxKtSJ",
  "key42": "64pEzaC3v7KffSyL2ppCbZNhN83Aw49R9YLY19qrBKvs4nnQRvvCDQQZDtU7cXNSYF79cCib8A2sSAJL4bRxYZdg",
  "key43": "5fYRkeCN73w91SXngBBP17NGinfWwkSGnwfWkZoeVsDccpG6xUe2KoRTU7JvdLPDJJYc8SEEZHAwCTNZjnpwuMGn",
  "key44": "3iuYk2vCV1HShPsWVhythnsT7gvuY1aVeHRqEm6MNhfFoqKgDWTd4Wrhvjvx3PpNZMAtxrcQcGQNiVUdy4YiHUuV",
  "key45": "4y5h5g8QiNFCCxp9emRtK1ToSHS5XHTVAHDxthhYgHwEsTJerDb89z8tEREMTsiBkGFBuVP3awTSKtkvLo6Foppx",
  "key46": "3Uo3RaTuQPPZDZKAL6ucaSVitYhdjpuwp1Ln1tz6syo1AjJMqdn8qAXr4HoPkmVFBxrP28Q1s8x96P3EX7mTAg4X",
  "key47": "5w6XwqzuyTxgm2oMQVAkpkbXuSw4tN4fyW1obNb3VNmeyYC8njWCCZsc2uhxHAStjwqtCaPNFZGvJUSGo5ENZFDQ",
  "key48": "31g9vcB7JDvwt6c5ExaWs9QWT22kffUsVekCbbsdVhjTcofJ33En9TLp49EBuFs4TgKzTR4yCP9e2g17gZFUzRDy"
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
