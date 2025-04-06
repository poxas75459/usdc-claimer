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
    "5P2ZHTBrH9LHoPEN7vhrYpFA2yzLmsPTgHZKnLjERntcLVumP3ARQkjyoxz6cn53di7xEA4m9rsaq6wPLERSap9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwNuERhVuseVLS7ND9PnLgX9FJ9vKJn9XjKMCxtfXSdc1uKaEwGmJqfKMG6qBNxaqD8h6STZx11wvM49S1Siw6v",
  "key1": "DHCzPivWapgYH8Yf7Mcw3fjhwE7G7dBxHR8zdzq7X4GhxcRdiGStvZVMYu7rzMagN7rivigoju9qTACpxG1ivso",
  "key2": "4XJ1GB6R6nsneTMc2ehBiZwCEKkXk99jtTBd1YfBeRj75NL19sHC8eog3iUWe6niQF2zWH29GvQnTX6FkdWAw7FQ",
  "key3": "fALPNTEuyj1JxueAjzZk9pbJKN2HKvnK86eLV9W47zZBESTYVtAZeDjXmGjfwrF8BJ4ekps2ttRp5xRrZjLWJaT",
  "key4": "4M935zCi6fxFo5BPip9KFAJiHMFT9iwCz3MKZMgnD7uYHYACUfVZwXwiQ3j4bh1fM6ECCbjT1dTFDfM3JgrGyy4t",
  "key5": "2QvRQBGXjgy8VmR7z9oRaPmVyNiLv2uoN2G1kXqbkFZziV6G8TAABhFvYqwUxkxxv5VXdsToRarBVqDqbdoCJ8G6",
  "key6": "2RwMZRcrgFbXY7362RbbdZkeEuMueKeGncwn6ALgSWU2psPrZKkyWaGhtTFRzEgHMbfPRaTHzdXbnFCYxucWbDTT",
  "key7": "5XCt23y4h4QGSruuYE1sVoUXP3e8WCQ4sLsKrkptuR17EsCvxzyt8ieDgo9qMYxScF1fDCyCe6n87L2wQG7az4vo",
  "key8": "3QeqqRCmarmVHsoaV6SL8SjCPtf8kV8Rr1waHSv7RKTnhMcsrAzFXvdjq4dt2gyYs9EZGKLKvURJKMBpf7dvppSM",
  "key9": "4jDgHSrJ7iAfCDGpW6ZWqPHQZZ2Zf9QMoypsvAtXPtbkq8h1cPyt87DQpP3eNQmoQdx3jgnGcvFUa5pprhdtEgrm",
  "key10": "3qpAChVcYUpSK2hkpmHyuw3jVuTUNkDmmrwZCv4D68im9Vj2ZP1LPwQvaBdmqwgASqSg53oms34vidkqmAKwHwKk",
  "key11": "4Gxj8JRXwaHBRrNRiseKijXswcbb89Fv3zbBiATKyK5DcMNpeQHs2xZz9jRQQyvG5dFMkMqXRk3ih71CE9DLif1H",
  "key12": "44V5YyKegCbAuYZpo841JGX1m62TYWJ5h5fVNFyq8WiMBLPzKf3QFa96QRoDr1XZne9ywi6pCuofrvx52GJjsiHG",
  "key13": "4CVt9rAsSo4YfM5Kwtu1f8pCJvtRwgvP9PCoZ1zHu14bJdESwvv8B4VQ4qzrEYbeBW1GhV863TRcATLDRcx7YG8q",
  "key14": "GXvzXk4jiB91s1D5MMYCXtjsRhSW7xJMasxRvB8c9Psb7Lq8hXWjSRJKbH6Bzd7sGfh5SXsLPwz3NeAKay5a5tv",
  "key15": "1pXcwmL13oaSasrue1ukAQoGMCLf1BdD41Ycuk5DhH9YyXQEfHWUgyUBEqVZRLDjeX1GSLFXpiDBbm7ppizhdzC",
  "key16": "9NcuN7qvkkxqjr2nn6o7kmyChqvMaBrgePWsxTVCxHEgrXrCiqj362tK9nbx4X6WLeYfrd7st5DEBGW9mf4bAUo",
  "key17": "4BPuXyCX2Pn4QaysyNeXL5PjT3oNfGz2YsPodKQesMWcEvmemAciwwBzWEyP4ppnZLmHKam7kzq228bgbBFw6g9h",
  "key18": "3WpfMa79777chi5hTZxpExPQTPSBECvYbXXLzY5Bzy1FEfbmKbS3Rgm1pCnDaEsBUVt1DGuM61SGRsG8kQXMvyEo",
  "key19": "2UjRdu5Kphrunt2VXmoX1VaqFqxgD7hpYFHvv8mFEmK3tBk3xTotfqw9tifp9tvessyxbez8xou5LaaBXVukTpbg",
  "key20": "iCcoqHAVb6Gn1F3LsJay8xBW4NhSTn6xxCJDt77pTfuZYd3nywWdJwyCQjavZHbVrC7hYyxRTaF3gqTe2KBL2Gd",
  "key21": "4uw3tyNNb1xAYBJZkBtPHTL2D1iDxG4RXxW8u6YLqeyXd47cdroU4fyqoYFrXFZ86QQ8z1aJPA9Q9moarkxPi4fF",
  "key22": "jCdMKW6R4X1ZagYjXo3nAWKJW3c1eVi1ia9HtK3vTnBic4Jwbmn1HHE4jpgVPuFefzZmXevv9U1MyB6NJ4QTbCp",
  "key23": "2mXVJpt2W15QUbqNbue6neczzGvRxGvf9y4QsuzZtsppVMWMdYEmKXcwhagdZvGsXzb967NastChNPkPEpKfZatF",
  "key24": "3xWg3W296rGSXY7oBxF77Dx8i2GsKZRo3qKvncBHr4fvJLoSp4izDB4rVbE5uqjMh5autjSkfCXPFs4j6dJsL1m1",
  "key25": "3ak4hYbrwaDboFqRuHW2b63PHAYof4sVZvroZdsecCJZdqh3M2on75c6Hp4mPP8y7WGvqoz7PCmbfXpSUaGfLApW",
  "key26": "oVwneKbFCaKVZx7bMh5QWwPNpqvTP5SCtKw63LU9aQGfcUBM6AXWvmdzuC8xNqy4R2AXHDoaZh9PmchQhKb7TSN",
  "key27": "61tLkMH8N6GvKh2LNfh8NwvgHCNUYeLYeiYzdnDGLx2jAXeo3oirYnJ2NpgohECcBS5eSFCVAf1XtJg9vvtU7UDB",
  "key28": "SYAnWd21RKDmpaiNtsGX8XG6BTTWi1UK85uDTMokGgzPvVtRK2zZt784VM5vjoJqvWLySMppUTZH4bi2okRYCg6",
  "key29": "5kzrMxYEevySRx4L23sgc5eTW5jUAUmrUhPSaCkr7b2cVRuRQ3JtAR6PViKvFccHf9b1oPeGEbXuS4jY9zhbd31Z"
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
