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
    "2SAKa319tsDyt3jT9scnwR8wPaqW5dUzHVKxL6oojX8WiVyAqPvWFWNHRF7dj15vCMB9RsYAHFjt7dwgfXXKh58e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzVCTegvF361hFJM9FGYiNvq3ueUw4MjLorXV5f2FNKXLJTQAjM93hUcmXTmkHBBYM4H5CnzM5RwjPEm8ufWqFN",
  "key1": "bZWxYFfm4XCAvRPtKq97e49MVZ4kuZTXRZuGJhGs3NMMqJGj9crohUrFrtnvKrHDifduwPCc7yBXUsxgCnvATgL",
  "key2": "58EHEepKzM3zznKF8pncit2jfVjcTaqJmixxoTfY7coYkdXyTMko8wjWzVFxdGfAHcHi3xygqbZqVFYoriAdNC5F",
  "key3": "THV1FrcoBCHezvQfm6PhFLcaa2ey4qqsewETHiTu1d2ooohLzTrLhMyMAQv3oPg5sEPh4qiquX4PMmx1cwMkWkQ",
  "key4": "5KRqGVzPpGwy3BArYKfGK78uH6u17TzRVSTfdUwmfVPcndgqg2xtkznksHkApwp77rhdeGr5QWot8YuNBmcSe4BH",
  "key5": "v5WgCHxB1tV2HNkWU5ajgDcKRPFAtmpkWFwHvAPfNZcxWvTsCVbqmDybuhMk5rWvVUgSpvPdB6AVXhsweATpsfJ",
  "key6": "QysaBCoJzCQLP9BZruiFNoy56nkBBk4whNfjbEqikfSTBzRTgF7NovpwujM8VCnAk3pRCoEgKPUbhx4ponh4KKF",
  "key7": "4216MxeXzK9VoHPgTwvwWoV76GDZZRjAAdL2JFG3AMyvJthmzwsDrjR36t74hvUb6fjyp54qmx9FA1MuvXxZJBKm",
  "key8": "21QXqMTeGEy1hhKNriJoW9yBps9KzSqKpgcp4KXdyuwRsTnbdu3tHFDokiNJXNQ99tTVcPGGN96g39msTmQUcT7C",
  "key9": "5kwcxzuRFV3gqUrJYd3mCSutgsWdeQF1AdAZGi4A4R1ZAJPaFDbYvWkXPvoRFCyupe5UNNFX4dQtKxznPMu176Ua",
  "key10": "EFAQTjMPDnDFc2cRqgPjd7NmzjRUgBCMjANyfXuJCaWvV3nZih3WemwGyqffyTkm8GmytRD2mf3waM7dsc6XWLr",
  "key11": "5qj3s6EoNEVfA4MFxAEk7uEFbsXR2zoo4yWexrHq47UJ3cdND5xXNowgpJsuykdYKezHpxvhV1PFQGmtjaA5ivsX",
  "key12": "61YKAMpRAmY8atpoATSTHCo1jP2aPwZcuUaXfBcp2tMeg49hik3t7d7ePHKKqkGrRD5ZdFRqvbQ9bY1DgFyweFru",
  "key13": "5FsY6zn7zAHv261UXrncDYD3xh5vR8ygacfhuMiMFFS9RsMRQxDA54fK33CdLzuhBvJYTt4dGB3JYpwueDMFiiiB",
  "key14": "4U6wwGBfbmPkPBp1X8fa8ULDB1Qkb4rP2K1bE7ZJUGRfuXfF9fqDXigRkqP44QGdqN9z5XCKcgHEeapo8SD8zNzP",
  "key15": "4RZDx32CLABQ2a9PnNTvyin4oCbyxLPBk5MUB2jR5AV9rqbGYBwqMV3FCG73TB7S1x1m3q1Ax7eaAavzqitCosj",
  "key16": "36QcdmsEDfTsrWgrFfKcsuoYWiTPiZvpGL1bwMAi7tbQ3BXQXyy4FTGi12nFqkFf1mg3vtma6LasXhoqNAdqJhgg",
  "key17": "tYNGY5UrttPWbgmzEfpZhEQfDRB4YpcK8JUiKjdVSmL3XawtkFjc3En5AN6pK5nFinfG9viq4hTPGS4mtyor6e4",
  "key18": "3aBf3UStzbUgESpLQJ6fLQTeTFZn42eoEJi9fkJWbCRjj2EeMZfi5HRRRgK9KqN8oSQURHvZYD374EL4zaJWf4mS",
  "key19": "2WfPnXQ6fL1dDWxtFBr9LrBKcbJiPWzWXobCf44DUXXjPm2sYD72GJsgZfDnWkzwErkxMpqS5kNdNgM5QM7Bkv47",
  "key20": "4UpUvK8LV1W8KCeW2h6gX6YA4PwbvuXX4bXPGTzax2yFXEe6Xn1UCEsrMmKAkMcFNkAcVUyiF4gGY1J944wYM3E1",
  "key21": "4qfonJH5yHHwmG4af6UU2B43DtDFrQNp8dVJVRiBBbBtGz8r53qVVjQ9Sxb3d4kJkUjmedCL2ezmBCU3aD7zMUoh",
  "key22": "3S6ARSqkzv4k7MiW8tmNWTJGWsPNadPjYnZK6tsAtKinEcdwrLiFDQPH7K4iPxD5hpR5PoNJFSngmFcAeeLUssud",
  "key23": "4qWyLDKTxvp4dWWrYHTWmEqDXrkYaeTrbjtjMHqEgGkg78q2bqkqizXW9wPv8jJBfr41nPAKMeW2fnaFUs5sNvYi",
  "key24": "4Z4xFs4Dv7i1BfBzZDVBD1BfKeUQetdYK3LeLX5i63BEHzWCQM1PgaWx3dpdq1eg9Yyuh5o3ZC6cfLDJS3VVz5oc",
  "key25": "5Y3XTbvNFkatjedeGS8vszDRquBdrwca4HTb8H4CAYJNta7ds7DhfXukoGErdG9mHfZ9tnUoE5unWQq21DFvJJs4",
  "key26": "6bjeEVVfwtLwqsz38iLACzr6L5z2QCsp7bbH9vGyJeUxfY31G23Zk8PGDLnX4qEZQ7mg2CbCXLNQEibLF3A7yDs",
  "key27": "5xofip2hwizB1RBkgs7bNA3cjpPgZKwFs6MhnpT5mHjQDbXpZbdpfSQsx6Gsq6PJU1ZtdNXwbYBLvpaKbQ5ecaQh",
  "key28": "5jXCAeLVMmQuqmqi3CeHq3KZop9SwgPBs3LbWoHFYtHamNrwF5bsDyno3Z9DU7rxDTzebc7HWZmwEAmg6NhQcJF4",
  "key29": "3N6fyNP69UdGcKyH1e5tqLXB6SDcxRYEw6Lr3hopao24cEHfBY2Y365jFBmVVtSDb7keZKmdnxFV5Ptkzdpj12eG",
  "key30": "5UcJzgKohQcz9Zqc24Zb4JdmX86a7empTit7u2cmhDkZRP3cVNmp5A5i11AJ8z5eQ99bWgJKYFya65tLRBqnafuq",
  "key31": "5L34ySHGTZknyx96JkqTFcrLbxiWXoiVB4XSFiZiLcRJGxkMTs6Rafa8iQqWF5XJXMFk189LDL7CHVxm8wFpCWgm",
  "key32": "2b7pm9BwnWS5j9bnH6iiDK6ddZcbaEq3Yko1kbza6HGrpiqrbUaGNNMUufsDzbpKxdqa3PfwDsDtSJGTk2BeZZcJ",
  "key33": "5PcnB4n4Pp6GMqrRWig22HEH2GhtxrUu8PTeHXsLss8MnmGnmQBEgDd7JhQJSSgwQXiGBv6utV51EvQrTwmHxPAT",
  "key34": "4XFJWVi5qkHZSkh4nrrT1LM3LrTAGh81G1sB9s3xC2pbe86FWnib5LeGmGQBchMd6y3vUJdwtV5pbWFsFuNH4aXH",
  "key35": "45DEnSaPoGB1hSW9QCiPTo2t2anUy86p4gtF4bbTZ8zS3tLF5qAE45u8An6EyopofGurBr6AEuzCZA2MxpCaCUdv",
  "key36": "jNgzrWig5Poi9ckez4a6LjZ12phjgvLWyPXNV79avNEQPffBpWRdGZi3Wduv19cmqUaQDHRcYrFhVFJPWK2sd21",
  "key37": "6Zp6P5XFCwvZTePiDs3sTdTpyxsVfydVHDfubVaVduLRnmCU1YLfC5YCF3ai4ut2yWayGKngrjpyW3sAHC3oyvL",
  "key38": "3NCLeJooqkncHcz12DksQp2RiTfS5Tg4spWi6G5vuE1qmn5RxZRMsc9HJKR5oV9uCy81ufdCeGPHcYz86xNWPPw2",
  "key39": "4tRQWHjDWXZmiu8arffKiuAQ6iBfuhMXpsTptMfs4WUFnNw4to4677Ld1kAFiK3Mx4LZ3ZBgiTUhq2FobRWehbMP"
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
