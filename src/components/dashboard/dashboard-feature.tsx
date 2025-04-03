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
    "66V75Ui27Wk7rzAjkrjtaE3vihwDoGfHLk1fMxnDZmUbVv7tbtu7qzzj3kGLLdzPCT8k2hfDRsLZpCC9jHcHeXc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5wX7K79GDyu2iUKhdB3UamBXj7k9oVXDD3ysK2r7LcnZRrBMXzwveRage2Gd29Tnve6Kagv7YjN59knr9yaLHf",
  "key1": "2qQfF3MGvys62o6jGL898cRhZQRFDVTaBaJ6nsu1hxKVdXuAXrWL7irQ5G81JS5UAAwVV1f7trtyJeBX9CYwrKqn",
  "key2": "5Jkag4jf8avyMeQPqWfKbw6F47R3pghG62fyN2cFWR3zaMk71fFB3xDMfoohV7wm2cBsq7JBFNCEqjA38Dqeu1LG",
  "key3": "KYQHvWcqchu6zgJY2YHNJbVrzZzNmq5fHfPFT7PnUjLQEAVAnKkcjs6ZG8orozw2fqtXrmuKgauyzfgWfjv1Nkd",
  "key4": "5VXPoZBNjGsqyLtkVejiZwnSAgQk6MYLok8WaNZUDZgw7LhQzKbKHCajAEywivPcFVJm3sj37HaFj5sCbhbPFRA2",
  "key5": "4LZE9Tyi9KbjoAjeao1LSNT9k92KjGBEvv1ooWjyZvXAJG3xeNwNdzTauk2cX4wJS62EdTtG9QZ5adY5CdiQpskQ",
  "key6": "326SxMNAF7ArZaXbhEMBpPoMqj32Pq6w4LvvvoDGcnRB427DbWZKDtPDN5Chm6g9AqYdY7XhwN3MbWECJTSx8qtZ",
  "key7": "3ZuunwDX39pKJ4LiwoEMPQrDBigD4UhCkTq7hrF1FUg6LgBCxvg5zwcZRiTjBow1qEm118jWSPJR8d6yCYAnRiAb",
  "key8": "27yvYxCRBHFigoo7uDHGh7ZUvsydMsNTMMWNWnvCEe8agKjkoH3gAz1VVxD8AyFhxUsfjwHnrBCek4V1ndLfUWSS",
  "key9": "5DmL9xEJKzhtG6jJQMEMQQd1cBQhDF2dGrXqRcu4KB1iGJ6tSHhbvZ5uYjiiPNPtN4cJ7tdUTte7ojBv25uGJ6ud",
  "key10": "24Tp5qxqdyzf6Mwhdmmeujz67H9jEgy6j6PQwUKX3KPQQgymvB5zboRjYHC8nxcbBwcrMyFGwNof2RB2tyvvpZN1",
  "key11": "4H5aKP2m1qNXjZhZyixRVGA2Xsyu6WTCXj2R6mf6jEjymK2AjuHYxbBs7zvi2JS5KdhotX3SwQbvKN81k2RYcyme",
  "key12": "4j2ExcbxWvNL1nwjEGsG8AvoyyWQXQMeERf5LBfdMeMneo8pykmMowxhAcPMsKTpGuQ8AWanExHqcWNp7ui7gbok",
  "key13": "kYMz1Vz1rxEbiiiXx6MQtcjhV8SEZPfFhkUEW43EqLuLcvGYwCJ9mbm4Zby6p2T8W7H9wXPB3ikCN4L7DoWcPNJ",
  "key14": "i5ZrdtqsNdAgDu2oEvXDZjhikVBVdTu49qvWhSKB3jVMMRFeHd2Rnmes85MH3L1zbfSEsnYuxKhxUan5TnvceRz",
  "key15": "paxjd9APWqpNmhQecAuNDfCYLUcWBpXKFJW2pBYF9ohUPYLxiUmCfb8rUtfP28DNLoHvCJJRx18B4uiQk4nhxAY",
  "key16": "5j5rPu94Et2q9AdMUpbF2mjq99C5Lox3dW16x7kFfZ168DdADaA97ww4cicmsPDV3RdZsqQasDQEQu2Fs9fN59rF",
  "key17": "3AMHs1Mha9524mejTg2kTjwhVDNYsRtH1e7xs1KnhPPcdj4UBcCJ2FVnSG2dDfENwmtow2HwRB7Er5TNtiBAoQwz",
  "key18": "aCgctvDvP6h8HAKktMkC4xvzet2BeDVYoNhiuZxhhGyJ5NmDdTZEhZxzZRKwsFfB6aMPAeaQu6VQAkdoHhsoHtb",
  "key19": "29vCwD9HVafrNWF6rLRkj618zFYBcrUqZFt1Px9n8a6vD9FjzcCUBsFpFz8trTii6u1VEgTGMs7Ek8Z11U5e6MY1",
  "key20": "2mcM4kyx6d7P4jN3xjJQzHo9XNtdA36EBXLEF7NWbfVBPd8MXxbffSErPMmxYpZNRKc6gFuSBzH1bKQxsXoKqKbu",
  "key21": "2hzB7uGKAzH5nBAhjKWMroiSgHhwafoLn4xrnvrxiNQQdspxpNxmBZhSz8X34WZzS77THayqmP5ktBtNtESQo7DG",
  "key22": "5EroBQJnWakiqWE2P7i2tQXb9kZwaKh3gw7p6b6K2iFnaVF7XLujNfwdDgJc2rdaHjULT3GTDdgDiSiNJgogz1Q2",
  "key23": "2oiFNGBhojjGTD1b8WAsa4ejYk5Rfgxz9bjEW5yiws6N31yVtGnwUhLTtAizySkCmSbyCAq9KRtN7hhbvj5Hs6Vy",
  "key24": "5n94QygcZcQtDFqqkd8WFUDNHvb89LAVMmtcZXeZQQBeK1fQ24rP4woYM1vCrq1UZB9fhNFjjrQT889iSQsdRqci",
  "key25": "4mGTCsLNH8yJGQPQMSkYnoBPMm2krDfdYijk2HpXfhoJPXDoy93hdc74AspzQXkSEf3QwngaouFCFASK9kqxQK43",
  "key26": "2SCptFJvsq6MsuYdjhU4foZ7P1oPGteLLny6mdV9TjWgf6BybH3ccNED8pbsd3qdriRMkBsJfASPpBuQta72MHB8",
  "key27": "4sbrNTkJ2qcrJKcMHJ6MAN7qm9uidYDnveUTdEukXdLFa1eVLik97QBSoai9VYmypBR5vSwp8i3jdhMqjxKVQhwE",
  "key28": "61fB9juGcpkrCjeSmdHi1p95y7epQUJTKyAFXrB5D4SXvJXUb8PmEsWZp8Jof1E4VshrYk65L9HXpgKwyRZNeoTP",
  "key29": "6DGa5sVSBH4bVUY9kfTJRjMWuHMM9PKLVfXBQnKGtNaseU1AEoTKcKZqWoDUSA6S8L9E8AbmVy5kwmka5NU6q3P",
  "key30": "4p4imgrpiP2uixuQekPs5vteph1LenCjTmZu29Su13jRcsY1nnCxxnfxv45hxR6YNLrF8zRDuVLDkpbzgunUDXHN",
  "key31": "M6fEwosSrGrc3TMhZ7hzqnLv1Bjqa24XDrwdccT7JVX5yMSeNFdeMeeLKUMrhEjxA35NNfCNwrKWXjAaY5d3v6U",
  "key32": "pbXY9CZuNVfNHuSdMzaYJ6k2Yv5PwZBtSa82Lfy7xPtGKRgbACJ6tLdYrQy5FiMMCMq3xHxfvBkpUTB9frWQnB1",
  "key33": "4E4vC8G1jK63s9CfdjZdweDZxCeCNPK5hP1PniZbw7Ywf1vSuiyPS9yLVguC6Aw1yWJR4pzsv8LwLmHBRVhyLYuB",
  "key34": "122G1GHBUrrRZmBQuVG1a444fMnHE1NPZWUJmdk6ENKC34DaYfHmKgT2iX1mNqS6x7A8JNqNV87JU97KSuNQbQQh",
  "key35": "uT378ERHqcQyHtYQiy7WWipQoCTVwQaNjvvPFF4Uoq8eteLwq2xA8ZuSsZhoWidJviPYwhGfjyPQC1RC2b6kPd2",
  "key36": "2nxXEQ4svnSjrVyNt2XbB6U2bQSz1KVpwrFrfn3xcFucuzMoeqrdQXrzhWBP5pCqrJ2VDg6CN92uicquw9K7UYcn",
  "key37": "4eRptktERshrabDREGVBn9KQsBRiaVuynbookE6rhAWEP8CPnhvyjKLashBb7yWcxEgXMtioT8o52kqLykuHB8PB",
  "key38": "rXECeYo8X6LzvfP3vCNN6A2cSCRTT6hetVsy3PzpHzsKtqLBnv2cz7zBMcMW5rvjshWThWy9i3dE3RHnN4QVE5w",
  "key39": "34pfabGyRx53jXnjZaewHgxB2cUSZKE6ARafGW8Wkp5W3Avbyi3QoPcPoU1w5WuPdNba74rpq8QnN4SrgGbrAcmM",
  "key40": "2W7qB8abH3d1UuEQHP5fRv4foo3JAeivCaViWroQTU5xKL47Msr7M3CbF1c5f2uewtctSrJRhsBtViYD6bExEWsd",
  "key41": "5ZdPm63e8eVE2PmUepfDs5FpM5DHAchBbfjHkcJzcXKd26ejsqKwRkQBLjq5obNrkHBtSnAwE7wncStfWxe4vhrS",
  "key42": "4V9UhNnnwvMSYBcju3UEgydBBhCgQHjmLpyEhx3fbqTDcYtCLdNHDE7aLctsrjtKCpNhHF3UDMmt9kEVSdXsU8qw",
  "key43": "4ZaWgsMsMcZ8mhAyfiC3CnVwSoq6Ypquvqmf4q3KpXeU8oc9wAXXvsfymTHxMzsL6mJQwwSsRh8NXtypeWPBaPgh",
  "key44": "2kBeL9W8Mxg7UsH93ajfo8Azo5Tqni1DRvas12ycqLvBJTkjkgfsgv8HjmyLC9pb6RpKcwq1GPQVcg7s2Etpoxvd",
  "key45": "5y7FvSE6nZ6QKrBmdKxcCECfNSL4iHNcqKY28uDU1rHdSj2JfqiH3XaQovj3n87FJ2zTAbpYH98pQFFUkSvNBX9d",
  "key46": "5zHzAWe9yLC9HwtvkXFr88FPiEzYbAwtuH1yuNYDc56tVFznKARC5m7GhPdvZTByt7ypBoystpLG1nJGXJ7iohcw"
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
