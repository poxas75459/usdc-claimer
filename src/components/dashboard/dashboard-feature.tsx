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
    "4Zm8wC1QuAvPtxorkaczdySUrJ18q9scwXR78pLVCHJtr4uDdMqqayF78fMEmfNZFqetN1TXmYAQ7eDeQNs7bTcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDFMgBaN3Ba5ET5F4T1bJ6sPmwaKPp5hykKUkKdD8JXuBDnoQ6MhrnevGFUmTnBS7EBFitoSZhjKPudt8DxdYJ4",
  "key1": "5BKgQmcshWM5WRGsLrkAbvAJjeAe1NJLSdmuRp2p1KQS7xnTNJ8RRvX249DnKzR3JrMjJVcyzFR5QJN8caqV8qhV",
  "key2": "59pxzDDdLzhG4gcBquqP3CCc9CPACNnxrgmWoquU1NADRta9RLQhcaosJxL4rR5BhqQieVvDVq76Mt45ppbAQxLU",
  "key3": "4wyYL5JQZ1eavBMNWxNW2ptvfWEw2CouEsz6qSbPBrEBcDapjNRMcYPtqH19iub2hRB8sNCg7spvXogNV4KguzNj",
  "key4": "5d3M3cfLntFZwFNphZzrC2tJeJeXMLVBch2gV55W4B1d9xMbf4KMHb9wtxck4XiCrcEjPuhEpHD26swBbabRmf3H",
  "key5": "3szUe5hSYtwKU2iQXbCoGM25hdc3sMscZHiP8vFB9p5bzrTTCboDnxrJbdTpi6CPNRBAamYtW1Y4woFzBjg441xV",
  "key6": "5MbXmTb9VT1H7AuLM7mJDYkZ4MGpQjW9eDirpLQ8tWHc2zkKEKg9fCx5TAjBGb2DSFvFYxYevnAkSbHMXxWXJjbC",
  "key7": "4j8jswGk6cLQqCs83CJ52mcvFh9PX2Tuqn4T74ZjiA6mA8GC3u5SvvRPgboPom6PqyDxqdwiMv1bymiz2gMzAeYk",
  "key8": "225PJcc1XkdJLNSVhDjBXFSZiFWkJEjgd6Ps7q2xXZbQBQFLiMRoKCc54hyRLPtqvmF91FdAEn6dfkUntT5Sifg7",
  "key9": "3jFjjbhYvcrXjx8gRowrSRxyB5KB8YJ8EhKrF4SRLEJca9drMk9NiVvuaeHydBLuVPyeB9yroxNgsh3v6Gx3fKyY",
  "key10": "2bvp1ejP9Zd93HAi65JMoQVps3HyJYnRWrd5eqXgJeJzCBy1obkvs6Wekohdy2YeNudbiHw3GufBA6ubVYFBubjp",
  "key11": "3LjrfnXe7rgs8S2P2m6qV4YuqfDJeLnbqSK86FKv34DGeUTHAxPPyiHbkyGNYQwbSrsDGKieDgJHqU48rUGg7PXf",
  "key12": "3wqZrRPAki4muV7XV2ByuCUw6zM9fs2nsoLamMd3cuLRL6StAyZNV2NgYDcT1Q2Q1g6TUnd1dZKoQtyA7FrUcmmX",
  "key13": "5SQCGkapeMMy7DEHnD76DM1SP3YRbPqoSxt9hF3C3VjyJde5CiAfRtGXSmZKJwmQYDy11ERZ985PEiYrTY2GtdQx",
  "key14": "4cineBZgR8AW7GSEDVY8QmAJY8HDAtA17ciFcW8AaqzVbqtrQqGz5fPUx9Zp5NDZPGDRHCoRXWryFNg8UTmSJgmb",
  "key15": "ZJHdQ9u1FuzjmzuTgmX75DGm5Sx4WjrT5BdNf8Ay5YAgS7DacVJYbQBhyf4w4VNyPf2DJDXGusPtbQtHsue1XLv",
  "key16": "mNDPhRYR63SNJnkivTTosqCfJ56ELAecMDj5vnKEH4LtDjPdxAzTNeqmL6wBHxDXpm24ni8Xi5KGUWv8wDQS7Be",
  "key17": "3b11Z1qvmwB8DtmFty2KA9KehCUTvHm3gBTmVWbe9rrkBAwCZ7roXkUEdwE2hdRnpmzpTk7q8YqNM4WsYqzyLcQN",
  "key18": "3EL1x292HBAQH5WwJDC5YTPEa8mTTatp1gEFHurJutzLvHiR6qCqbBmcToZhhzw2B4iPUtc4WycDrF9xw2EigaqS",
  "key19": "4zwvzLFV6GT4vbQCAFdcm2LQ9S2EjpbUH5DXmccjLRpPgLEHQH1rXgEKqByx5bYfh21vskUDB5hCNN5aDH8qsePn",
  "key20": "5LJAfLtEBo3oNj2VSwvsEXsoQxqUZrg9dvJXN5ZkccLZS6roo9DdejznYdq4caKAKJS4Lg2zzPBBaSg8ZeMQ9FRN",
  "key21": "3M7WvPU2BcH3z1XQpQ65NeUR7RAs5ncdcwqjVxrWbvf1EjFNP4XnJmMeryUXgYNJv9xtkEFfNiKfijRTxGdju1XT",
  "key22": "3zpo115iuUnAR6fpVXTVcKc6KRhKLkGSooz3Rc7bekvSFrK24UixiotMtcE6coWxZdnSXs2vayPKsT2Ex65edWYZ",
  "key23": "3CJFVkpHXptXDD8suxkSUbL8ot5nJaq35DdUNATGeBVDx5ntJemwbnehk7eGhe9LqjxWXwSDSnsTX1U94STSmRQY",
  "key24": "5TX1HzRRq6Wh1eLf3Sy73uFRf36WDBJeW6krKwqKDxi5BGVRbmfqaabMLzVryCgGcxH4SJgnsAepsS7o39yASyvP",
  "key25": "3eTLDJTsQjH8LP4zp8tzbqvS8nRhVurfTfgaoiEnruXDgnuQqUNq1qwC9grwsuXYgmxcuRvrjtbSkVHFeJA73yiw",
  "key26": "3XDanfNkTG6yyvnx2FU21Fx33NMxTCfHuASBaMTaSXMg7iUmbmNucqDSDvPvKzarHvnmGP8fokyK68s2fXsU9juY",
  "key27": "2xua6CNKzxQCWLiRxzwXBAizripzkwrnrwekroNkgERG3mdhXZTGDSTtb88YvQKthvKagiJAFngEVQBfKDrVDVFe",
  "key28": "22QVcbaMPK7b1KguKYPnCawEMnsJjoRK9LiBrw3eDJUadnXh3ThiXaMwHs1WseQ2Ro2SEYaarJP47586SdcN8ChR",
  "key29": "54sdgiibS2bH8hTwisfB9SGy2sbm7XoQvapDft3vUfPotSCs1DupHnKsdkTNcn763DNUWBNwwffnG3KNpXxFhjub",
  "key30": "4QTD2GqfUHw2kHE5Xnz1jvD4YGowm8YKbyQVhE2dMky59Z6ZzBM275NnHYNR5NVVeAdTvSZYE6FZPB8Uq9mttUGT",
  "key31": "5WmaE4Qhzign9RFtHHARJU4jwbHW743wEns5isnEamp7pmvFyXmotSZ3Edctkk1jQ8BRpEVA3nXao3idLtZqLpir",
  "key32": "3AjVHt8KH3q4PiJub5DdW8DN6L8KG37udkimjR3CpVr88nfdBRK7KgwJTdmPkM8C7NyuQjxZxtwtgxCxC5RqqwjW",
  "key33": "5cGmicqFs5uBw3Y3qEiDqFbEqhyJ4HDksqAq3VScVtDvmfTZVrHWTUtD5EiGvhyR8VMQB9iFUSkebSSwM5jsYAPY",
  "key34": "4z6V8MV8cgJJjjn41SdyL3XDD2saCnGGGkW1tzxt2Pod9MQp6yTSnvM6YnnQXugwDFoGjnaeAAP4UzmTSaEySDSA",
  "key35": "4SSMmu5hx3nBkptjqmfGvyEXg52d6X5crrsgjoHxZUvSzGqxsLuw2W6qRMqC6dxHXDtQeMAreCRwPmX3VmCmeBTV"
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
