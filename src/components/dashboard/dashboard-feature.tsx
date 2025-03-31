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
    "2fAhrhjofgXSuSMMJ564CDBoHrefnCSgygTY14q8Bvifj6UPPsBPtQFozgQHxB3xW5QzMpoUz9tf2DWj176LLj5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1YvmRniGhnWr778w8kdxM6x5QqtrTMxjfrBSibyzg9cvX8kuDaHP4wCRvFyUTQCaHPZYLS8DEqs23Ee1SFTqJs",
  "key1": "GVZvTpNaYJ1e2Le3NCFfUb8arrbyB75hxTd7LQLmPYnNeo4Matgh6sCy7Z1Dx3tsXMJNstYWH1PfRQhpUauWce5",
  "key2": "mspAFCp7wjzEE75JZ33r1VE56nrpJKLaztaNxA1hBjHVXsntRmxeu5ymuUR8uJkZtiis1hAZVFpCx8petFT8uJc",
  "key3": "hcqREUkFmbqZyEwBbNppZCbTXJAJM7gS7cAsYwVw3vbNoeYw5q1QozFKvp8DF8VTnwRQ81HLhf1VM6jyP3NipSi",
  "key4": "4EtFCyymyq5DNiifFPfmdue8EesgH5hsixhLapNRNkzf2HfQfBoPPxJHfyQyWsQVJLTBBk7CisUHHbRcEnMEYS1b",
  "key5": "3mytuTkHue9a3XpjQLaxabq2oEoV5au4Cxtw98BDGAcEPc4WTQ4oEPDhGdHVSMCM8e6qHqfx9n9RFjJM2HYFtAGv",
  "key6": "2eznA57f96zZmZBSpHCxwkRUxEyn8NE7UYuKwn3mHAf2E7Jf5jNDxWeYpjcF2uYFfdmcySgNihNJarkf5tLb7xTV",
  "key7": "3SJ1b9RY97Du6iyemKcKgvAkFoW7uCeBschraMo1j5HkV8x9zUucjKCoVtVg8HX46VQedh6D2vdSUhHQ3eov1M81",
  "key8": "2no1d1wmn2kUaNm9tMQ6VKizHWXfm8csed7TPj2B18XoHGAv7QVBJXuY4xa12GTfocrLsL1MprkkkJWsdzAPwa4w",
  "key9": "pHJUwMovCjNZfQ2zacLD5q9uYFCnhpcd73SVLWX93PkDriaLRNTsWkRKCxGVJeXRMmAJWmVwJfjJseCQeQG2vCE",
  "key10": "LiBC9mTKeZYTFc8Aeqp9PxRseAydKroLSg7HPzC1o3QXEwadCvFRijJxDxaWcAUK87X2ETVU9VKgeWhkJBudaNt",
  "key11": "4ovJYqPyMMtCR7u2rE5GE9JdEYpecrEFAKizfb5AYnipudM14y1kjdJ7jHXQ6QBPragFD2oeF6NLhASfh5vwukeN",
  "key12": "5JajPBF8j33sCsHxKkGZvBEvzjVTyRnpNtwV1AgaCPVLa5P7xUoEK3GogFnA41qrCCpbz3a1ss3rTK63ycXSDEgF",
  "key13": "dKNtb39eedqGCAm9Phw3keBUsdxKStak7PtDVZKkp81Wt14ChnvPK1mizq1KZradH2KZGxtSx9q1Rf4CX2TCrxk",
  "key14": "3JmrG5XdoMSqV4JhVTe3iURyzVM4qqDMa8Pv1hEUMuxFJ8gYaSDeLd9tmxH74txZtrjBmZMGoEuS2E72hhW47XUk",
  "key15": "4pdZztPNVj2tv1vragxHBvgLjWp34rpXfunjCkCGxUcc5YP2mMdsNd24Fg98DYnKsepp2cVmS6GeinnmsnvSxRSj",
  "key16": "5kMTCytUprFcvxTZftEDU7zLhr9HcTHMfeGphMLckP9s4YkRvPgVJPzjJexPLHHzyZc2Neg4AYZCDsCJFjGtpqRy",
  "key17": "2v37UKaXEiMsk1rMT5x8QJYzhMnf4TUBw5WG2eNsv3tdAUCdHab1wagMvt7Y8W9nTpEM747BQtosF4Km9ojS8JT6",
  "key18": "4UuYkbpy7Q54UJgm72Ft8UPEDeZrRPG36jYTqAcTAeNYTsEsb2CpxKed81kSpeKqgGSPNbTLAs8hh5WF791tK3bJ",
  "key19": "3AnA6RE4vDKPSPKUwhP4ZBbhzdMxHcDT4KzkSXWdwSkXVybb1TyBXuCuG5Qf5M54L7PptiwyDQjBo247yWM2NxSQ",
  "key20": "5jvqXsB6WpaEjcTZebetknBKJFsRnvUPkECEJFL5z4xbjRtfrrPqwShcayW8NrF3XkPF9CwPv12n1sGT3zTHk4GE",
  "key21": "4RakZhHTrctaC2VznzwosM4w9oFmssk2CMhDjSN3pfEx6r2tNjm8otwg8hLgc3ADumEUwUk7pM2x2aXHSiWqrg9Y",
  "key22": "55VL22QEAq9LaPxukKS6B4rrF3AdprLERyGeMAfF4CfbfySmm4kCNAqhLgHHnHtVAM7HQPGHCDT3CkoMtW8mF23C",
  "key23": "CTjNN1M5zopfJpv2aNxbo2SbhkB5j7kCsmz2aBoX2kbQSvgoqkSZGdJJVWDS9D4MY7pLDN8sXfZLwN2FHTBZWJR",
  "key24": "2THWbEV8VZDnxZjwg7aPPF7eqcNq9Y1215mqhvnj9B2DZscKwWt6LEWDXzZghoqp1FkK2621V5oV42sf4wG6bG69",
  "key25": "4L7FphpH2GjLezgszCHzg7pGJzHJsV9Rx66dshMmPdSCjnx6hQ31ydRdwqUfeCtBxV4iZDCT3muM6MAQTtpJKB39"
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
