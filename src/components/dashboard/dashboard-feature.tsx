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
    "3pz1SSjTEVooiR77Zf7Akw2dhLSVpTKxXqNWLBwcWdWQ84nR8pXYjxZHPKuJey4v47oisB2GgReKGTCt8mZNY5Di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYaPq2L5uEdsmX23TUinRuEjVi2NFCd85XJjdAUAH8JpzUBQefrJyrx9csWn4wbSPD3cwsC1TRof4QEGuoisEeN",
  "key1": "4c6sB5wHrkuvRJp9swF4BG71XzJv5DnVGyQnSoA8hcCDKB2CwjUEzoJxAf6kdEtd7n3K5tohNBvE4sQSVnKSc8f9",
  "key2": "opRLfiwWNgdBt5AcDcsfVRRUNjachva7Zq6VDoc5Jo4hNM2QyVqQsFqhbhw9iybBASmii31wwcDN5sNJJsqqa62",
  "key3": "5K5sJdaqqXbg2ftVGnTTc1RT5oz8xfck3ppBR2FoH8AGEBnwsBzHMj3FWXsZPMcNbFvqbNQQbmya9BPuW3kKkEPr",
  "key4": "5tbKz64xJ7pGEJetSjnqbig5fjs5hxNGHcRRva3ERzY6B48hQoooiMzZ1vbCBZa2X3owAzAiXCCJSFP1LEtchyim",
  "key5": "5yRikTfC7viCsgB4xHZHBwFUMwKEHfbjHffeTNj7ZeiLmi8LWvPp6zL5LvoZyjrQhqGBn3ESERMMr6M32KMtDJSC",
  "key6": "4NSjJsJqgLangGQ21rr6eRMkb7cXaGKbZZ6oojh4cQF2G9YJTgGfehQ6x3fsN8nya8vSApwy4WEqKu4NE9JrNkzE",
  "key7": "FLRT2P6R3PA7PuV3QQ3DUCq2MXjaNR9fWzud7uWfdie4r7ihZzp1CXSUsKJhwHnV1LhH4Mp5LwoUED1bi4iSpUi",
  "key8": "HR8e8Py2Q745NGWwxCE75ZmWms241D6qgEBCdWLQ8QUwCMEzs5SJ3k4ES6ErBotWkcP2MYVMnMJe75DRrag9Ymx",
  "key9": "enHieNLBAPS54TM3aeVjYr7XaWPtFmzaiYYhKwmdfuNhekiP1S6MMWbCA4DFjqBvroxpeJ3k81QABPrbZg6aGZr",
  "key10": "bQDTvt4b6rdko9stYtGX6NRHRZJYjFuFz3w4zzErjrbY2rErt5HagP9VpMwfk4gwST3sWxY1C4EWKunQzA8cNDj",
  "key11": "5gt7ZKrDrhKxVQeaf9Ez9SrfMWtVXT3yRnoLZnWbaG2qKaY5SVCznJjRrtJqAEdh6JpUqoaM88mchYSuNZ3SSddY",
  "key12": "3fYx1noXtsHHLd2kBMgwSwzQU6F5H5xoaQXZWnpbzvrRoScRVeCb6mUjLW3QBcgojzMbLZuZrL6wtWxJVjf8L1Wq",
  "key13": "DzJSnM9RmT6j4yjRt3KMTK6T2jj5j2QxuwcqJCtp8SEXAdgGnUwnCr2gMPbSUcvbbYKq7PdYACQVM6WMQkXEb8d",
  "key14": "pjJDFqGRDmvASrLjvfzTtDDeVsEQVCAwTk5rFEfHYgHAj5iGV5uprVavPZJWvgvu89jYYVTDNawCeZ3SxdQdQMD",
  "key15": "2izVi4bSp3SbRLsz4TcGj5ABmydHw9ZaK9BygH7sUZXemP8rJddPxtgBtiCWMFEwrWvrC2kJTuzvgRCGB9t4WLGU",
  "key16": "3QwxTxotaJUWQdaCMmjn4ayckfisED6cTNwMCqxvto84Cqc3QLnQRZapVifAiFMbwZWm26xgrZXArAcQs7f4njGP",
  "key17": "48iDxt1wq7cnTtqBRmGaqsCGNLq7MEYvjWapqDGkn2KmketRmq2yBJ4akWjK6nefCoZWoHM11DEFz4ihf1GDgwq8",
  "key18": "5hSitqXaJDvsFsBUc378v5y38Cc1W82MTrBQ4ra7XfJN8auBGrDg9DqSxNUczKvQmkobvFneDbEJ6EBh9naCJvnB",
  "key19": "58gNEkf3AXzJdTxifZUafKuFkAE16JPPBLN9vZkp9cW14xa51E3dBhxd33mjH9zMeMqLvLdiPv3HncpWA2g6zEKK",
  "key20": "2PFBXQEA9njBqpbv2UkGx4Y5BaUQ4fpybr1jSQ7wgAn1q7pSvyWCCpFzuBEPXZkg4CkTsKv8vRom2RNeeEs1LrYr",
  "key21": "3mpM6K6bueZsrQMBPtnx6MqKRdApYdq8QjdyfWBe9KHdBfi5C9h9BczLrFZCeM96pQ1bc1AqipxxCZtSvVJfi2gb",
  "key22": "5CSbjxn4Mwiz3rMPPUxcUVPUPAhJgsqsHy1fzExbpbYbkC9pHTpLh314Kx9s5ywiNmyZmidC7zZAqTc8ptc6Tvtu",
  "key23": "2StUz4WTP65iNGTQo7bMGNS8NbXqu2njxqWd2RbEviBHJ96kCEMD6fUWxpBoj5JaMnASfV6Pz1CCh4C9eooo4QBQ",
  "key24": "5trhGMqZN22NRPqntZqgyzgsr7HJKZJYQ3EFRbdiU6VuSfWTJTajwxTf1Ftr9ixbToTbiR4Jgm8Nqvmheuu5w4Xm",
  "key25": "2XCBKPXWSUJkTWU371iiYkf7zpHtRh6w6X2Eri1nbgpUD9T38aLW2emrbMBemNVsiUSjbYR8UM9FTCaMKZraxoXd",
  "key26": "25ht15D3VJenVWKaqW9AL1NiwdF2RfnYS1XrauM7N5FpwfnEc9ANT6mWm2pJyo86PGaMhKhAEx14dGTaJh666sKW",
  "key27": "3BZS2E8MiyUWA5c1yDgSAZHoGcACNnrUZzQ7EXUwrVzyzTCAFuN5Vz4Ky7Z4fUsexE98CUctCph9MAVuQ379guZ3"
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
