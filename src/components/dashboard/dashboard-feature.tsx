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
    "5cFKPHaM94dsGbQNBmrWFyhunDnoa47TN5emYUopevsx7u7YTukdxT6Hnw6D8wbZVYBD8TiMJ31TKFDbmEEDwfAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4QjVxxPM1RQFyUqXzbXyTmjQ7ce4nLbTPGVoPiEQeRF7kFdTugjofNqE8gW7wMMPS7UYinpH3zbdBmvqMTfNGu",
  "key1": "5ys9kP9ZEqXE3MLQTAFgQWkeCXRGZCxweh9sMx2rQjoVU2cojG3HWBG53BFfri1DPZsfecCbLXp29PrvXVrC6aBv",
  "key2": "3WCzLiJgu3K5EVJhqSdT7tTbcL4cspGWj3kSSr5wCqPEWZDrufRRBuySX1FWPfeQ2CN9otGaS4A7QwUG11cFz3zf",
  "key3": "2Sp5ua9BkWpZ7gjoHX79dzxeJvo9P1nfRmY2ZmiUGuZEwkqiGR8NQgqa8qDhQabBKrvg6qJ66tnfTY3hiAjMVcsQ",
  "key4": "ZWQSwSBxGKCRiNdXfHSkohFGb7dHjtGch1frnxfjuMRHKkrSmsDbsun8JXBK3TuzkyBSCsdCzfa22sBBy9jCQx2",
  "key5": "rwhneR88HjX41SG2bvrVRJXeXdad4uFUUTCBw9NqEQ5BEL7tP8GaYJenr9pnsgb91gzb2qgzND96eufGmMKuPji",
  "key6": "4gb1FgiLY5sFkurHZGnPpFAYLjjcyyixPshon1fXxsnWFGUWGHn2wZHvGRdjmQTiFZH1c4bELoUfEk3Rciq9zBXT",
  "key7": "5j86dkx4BtsEzNDb79bwYWKFfL29U6GqfCE1FWaTjZSK99c1UfxMtpyUGnZU1QMJukfCQHeUTaSW8GQcWHvZdHLq",
  "key8": "mRXjnwPzy8n3XGvQfz2uge7fCU2vvxjMBTR3yM16kZH5TpNe9Gc1ij5rmpAhjjGJ2TjCe33PNjs3kNWna8K88uE",
  "key9": "2nzACAzveP8q2ttZNcRCSB6SCfLJb46cy7PRDkmrsgLBSh4vtRqSrbjRmURwfzniepNisymgGBG6iLKscxiZbzuP",
  "key10": "2poEhht2Nt7NqtmKD4UEFvRdQJzNjfdTmxUPBzewCWSg11GaoVoyGqGnFToJ6zGuiiCqUQztWeP43zLdLMD8LPLq",
  "key11": "4D3vfnsTx6wdHPpH4L2XSJcSfnHFogESsMJkpPU3y1tArFVkyNSsaVERXmstwEjvUwhex6fRUcss7uKnrzELLju6",
  "key12": "qTmTXFvLsbiV83zkmZzUsRR1upnKJX3F9zoErgtufRRZSTHR7jvRJK1uy3GULEJVe6mSheSVhMmcCkkLogC5PoY",
  "key13": "4V1gbsWHF6UHcA2AN9N1nPDqJhks82zi9KzpkKDunarUHfScGMWhhgQjgjwKE1apEeR1c1Ub6fFuRGhZHPVqy4be",
  "key14": "42FnuHXuo3pDfgBL5R3dWU7nQf8SWQYVEtJFdtB9Xt9mghKiY5SKSJj86dCjX1dSmBV4qX94ye49r9q9HYeTWpiP",
  "key15": "4Hcs24ff79LyZdBvi3NHnpALgxynzRkJv3R4UA2zg5EsGSStSQh38aDWkWxtrkp7KbtnvsVUHW9cey48NZ7jw6Zo",
  "key16": "4SE7smaqKZwBHvqky6RvevBsHCckY8rasin6a4T9WosSMWbkD9nRm7Hiy27DLcZFimuLGtQv7LxQmZFJMrhkeJHu",
  "key17": "ZMuzgM5MKoywtB6JtQEmPLf58E1qkBeda72239NHv2rPNUvhqXVYkBqRU6E79J8VLRX8kzQBEe9KEd7vwxqgEjN",
  "key18": "3j4GnLpmMpVw8SUfnXAC5b1G2V2vznKR2uPiuMtPiiUB2SCRBMffuiS63wuXrVWdVRwwZaAH8mbE59MXchJ7jvLy",
  "key19": "9HhM1cZyiv9JpDehHFhsHpHV4s6vnSfyzhVLHWBWJt6XkTwXpYPMu19vixctk1E5iw6pZKA9zvc6qMF1dg7w814",
  "key20": "2Ui6k5KVm2TVMuECaTFPuF1tYG2ZHRB5hBiugzTE59dsexCyaQ3KRjsZkqPXscXEJdznbcv3nTdCjFdFVPV2476S",
  "key21": "31F4YoV2wREbTSkC3L2Td3r9qMNv2nMMkKCZF9ZHp2BQrigEWzughdEJCuneuQ7ZvDPdC36xWnxrgKvDZSdYVjkC",
  "key22": "5uAQ3uZUFqCJvPQqo46SJ2UWtDC8rSdg5XHa8xosmcM57r13UW6robFF5uvZpAofcCsGaWkzuPf6a52LSGSfsxC9",
  "key23": "53HU7WXtpg7DZSkQwEt8W8MzWXuXKkh7XKscRfLw1B3LhqCLLdsMV3i3BuGCdzP9C8EBoxR46Wi8BjC6PyzzTHAk",
  "key24": "5kvHDuXDoUdaPw6ox87Dw9QVax4Zb4wEqFE5pwQvpgYR1Zw9cbwNgz8dD26phsYd5rALNtXmrkj3Fqve3yute9K8",
  "key25": "3rSMYW4WKfspzz18fLC8XJzHSeH3USh5xQcLLd1fgeJwdNiSukynnzP3Q6uUFRNwywNaeF9xn7q2eKwK5uadvbiZ",
  "key26": "33GbNvwY7wQ2fPX2vFz6DJoJU9CinRu1jZtAxyuhYhj3ey5JJKsSSASc4DSTe8CVsKndiHqUava1Mnxh6onkikVy",
  "key27": "55zyXwxLXwpSki9kvim9aVa1YwANq3Vx8NSngHZnZ2SAcWZv7NMUjDzSvJEkYsBp3egANPCFswJfuzXkwarrYiwd",
  "key28": "2kdhikjw264jhQxyLBZ3pbCT65HS8yac1VSvMcuzjcyh1akfPNhdqwhbJGEShoGNqhDBS8NXvjZgX2JEeRRzbsHX",
  "key29": "4aWHbPS31BxAo41v2dGrEbpdurS7D5wDnFGyVcv5KWu12Ex9snuPKRjRpkA59hGGQm2rP7qgYrp61A5jd72p6yM6",
  "key30": "gK5gcMJDui9WmrWeZMx8pnRenQ1DckbC4Dzni3nF4BCc6e2vuJAANToGTibmYeDCELKYxw25rDE6CpeScktxNYv",
  "key31": "2Yd2PeGMYE5PRJ4Pon8JRT9Neq2ktq8m5LQdDbmHuWHcCzHVNU4944PGhtxiq4DUfHvRRKY44MiUnsLbqp9kTRLj"
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
