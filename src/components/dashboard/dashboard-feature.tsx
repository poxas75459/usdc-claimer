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
    "2YotcwMKuJorxWH3micFjC5YnrE16m8nWUMdDAJyaAZLUF9WweKntuyBU8M8vkg6w3LqZJe9k1oS5rd4zSrxDAu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbX5BLczrHuwa4PtPg4eYpMbKoN1zFBNHErHAdCAAJcPczz6SQ1ygWsyzxsnMaKhnun32s4FtNWbt6aqG7e7kRQ",
  "key1": "iLQ6zq8eXDhCMQupaumwbKMdKBqKwDJCuHK64ukNV3zrvjboMDpS31uaxZ3mJcY1cAgRiXhguJmb1ewHJCXTrx3",
  "key2": "5KMuRS3BUjPAd9dGzFVNTYV6KUAA2v2fmNL786zKp8LcXDAjTV7vd1HbbtkyP1ng5Pw2QrVVuZUzNyiqLe4Vjf9o",
  "key3": "51T3DSzohbjeJgttuTUUAPAt4XpSMo8phuou7YdMroGnDmWQkSzwK9vWiXd7BK8EHtJD3oTaoyZp4VrLFbfHE2jx",
  "key4": "Vqm6eKjvyMbdK9wUDHcWFUT5r8tbk5GjsYf8AMSeexDPdBzWUzAoALqV2Jhy61KX1CaUutzFeCgYozM4N4R9FDY",
  "key5": "2cYzoLMNVfWTX1TdPg8mWMZCzYQpKTe5ocs4tGdhQKM9djA7PrhTaynYwUJtDUDPd6kpud5M8wuUUZCHvSn3gqC8",
  "key6": "3sNJogN7ABAqU2aiQTbjWmo3GbfikaPgaAttRQpCoPzRrCAdBiJXJecgSNR4fBtcaTV2bitQzEBWM5n4jAbhgMWN",
  "key7": "2TKss1bT4YBpeuSnaL7UbzMzHJi1JYwhCM57zHMp3xUKZbxuU8c9UqwhXmwNHZ6mXSaBYPAjZr89JpmPVSpREnSG",
  "key8": "5ULiTZpySjmgL5i2dGWnAvkmdTZdcGevmwLPofoJw1Gr1zWsbWi5JTi2UfrmPjjo86Ecx1WjwJQSZGZhf9sKJRQm",
  "key9": "3B5d95pTi8JsBeziAGfjXrj37Kx4SJGrxcFVzpvNrmH7dPjwT66SH2pfJxLdhgea55z4MPFJXTWfnkWpHKFcVUxv",
  "key10": "4KmWguZvi6b2L6sBMWNkcyXThSD8Vd9iEhXSTFJ4TisiTsHMSDG1z5UdhwDXX8NtUdomU29a9QxWsKcTksrXqm7u",
  "key11": "3NcjG86LFFyLEai48ekw8CJs2Vbt145LgybeCHPJDjFtigGgN8zdmMAP4akKDsCZkqfwXhiEBDQUQ7zSs5bJsfQd",
  "key12": "5M7j7Uyh7EmBixQ4P73Rh4oDL66a7UT8kT3zvYRUvPiU8wW4TtN2VxgPEKKsgeX8z8ZiQbfUtBKiBpLULfD3RkmL",
  "key13": "523EMPspRJAoz4BXLoUvC5GWHTiihh79UzbuArhup9itMwZyMwMVzZwA8cqoexNU75XebzYqQZHp2nE7fxAbrobr",
  "key14": "F8B718yL5QRR8qjLGqtpewciVQt4Nqh8TpZCvV77dAUJrepAn7jp64YEmRakmaDhYmT2XVWCBgP5B1Gk3nCC325",
  "key15": "5XTbpymZBQNrRndgrj5j9asFKGKtDj7PuGnJQB4jF3nYaz3fiiYixwaYKWQAfPYVB4x7JEsn2eqGodkrFeKWF5jP",
  "key16": "2TQsM1WfZhZe87v1rKPkuN8vRwReNtURSSDDttEh4HsMsv5QkELJTEfqxVQm7PfcdBr2goApr81Z8RWF25uxcRyd",
  "key17": "125S66RTeVgn2tmhiwpWkewt7yNtH7RAvCRxosS8Bg3JtDgiseL352NqrCV7Mtm6m4Qvo3jRGsGWFvBgg44L4CbR",
  "key18": "KNKvDREJg6Q61KwrqfrThYvyMEKyd5MnFWLrGdUaJS4UgHpv3hqVsEMTb3zYoztzf3sTEKFKnGtHxw8agt5YF6d",
  "key19": "5VpmbXhRcWqk1ALnTAqiiEgQH2C2HqXBxaidPL2NfSzVmVZYm6gM79qpp5Z3JTr4QyNojzMi2skzbhALXqHJGszH",
  "key20": "LBT7AAY18pYoTMMowWCt7vnNJW7L5L1i256c1mQaFG6U7agUPKNpyeWasSWco2cmqziwegXMaaX8MaKFMLPR9P5",
  "key21": "5fFcd6X5gH4mo1oKxEp5713cTSVwRHPn2MkpXWhzncmxfhvQ7P5waQ3xcwinwv1vPRizqZmPFxiJTQKYqWSmNzw4",
  "key22": "4SmqgMFcFHsBtuRK4eAsnRmWqT8xQQPF1kRmoKn3FhCTsZXVwzr1orNJiVdHYmnpf8EdGGCaBj69uqao88Se41rw",
  "key23": "4kHUbUZ1CXGBDkYUXwkoA2KGW98DEfKEdyQfxByXHFAhbdptHLqEJimfWTEx2aQobvWpnP15RA2eJ6EQGytLjBD8",
  "key24": "5UomwkJdbjv5r77AATH1dd1RBVRLFwE7wbbxitE2TCRrFcuZCrt3dUZNJTZZs9TjDWJe7fAbxUqPGLoC53TYDmF7",
  "key25": "3jPpfeKWnT1YegPiD4Fg5etBirKS7i2dwKfRSknQAE5H6sVqMdj7JEWiyDzbVcX47881jvoh4JBbCdN42N4QnQni",
  "key26": "4SEvqb8kfJLVzq8JVGQ3LFNSHsTgUBMiiggZ51HuxFtnUSWGHxoeJNFeMzksiG37dFiJ1tQ8LqNPx77r7kJAXt4b",
  "key27": "4fh7hnQeanMG8X9C8VSpasNywG5Ap4ePskacvnFuBqsFapRSFm8nJY3JA8YquMUkARiukN7CArDhxiJ2e5TxZEKn",
  "key28": "5ChXxeDTkFQhVYSj8iGxjXLjh1tLDDM1yJ53UbjHnZBwr1wufetLnhGrDW79LwRy5eFZuVyjiMewuVbC2rtvAPjc",
  "key29": "4nYN238xqgxRf4np2REDhPbEoaeztu6CDps1aiuqVE7g5hAmj64irYkVuaYssLAF8BMQwuaDkFLmYpzzTZG6vo7H",
  "key30": "VQKHWdp1iTWxuLoNqow835dr4ysf19j4451Gh3iyhV4HTjhqtRRoRHGXeeUxpNgHJ3HWLrBvhVkTAn4w2EfWqb1",
  "key31": "5QKpLBH2Z53E1HrSiyDXibYsqQ6CsGBMWPPyYV5XfMmwhoxdrZo27waWauw2wbdRuW2cjhQjcm54L3Uzymr39gbp"
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
