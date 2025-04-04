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
    "4zMQwxmkR4BWzwa53E4SG9T5n99cZRjYwG3VQaLAiXCcpNYg7dxH7sBC7qEmWYHC7SmEezzaksndFXnohqhxG2hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDGvov8daHBKkgvsRa3MSqPB849uo4qRj2ZPbF1kuAic5y4KjmjzwkfxQSbjdXWBgx6pQikuC7QLsKjsRL3bFcK",
  "key1": "3SXHH9z8FcTR536HEfofKD3DBGB3bUDP5TMmpk6L7fG8H5a3YQx1CtY2dDYFG11h9rTkNui4nQo3WhpWhDTHYgb8",
  "key2": "5fMVeFpqAsoA1EzXWq7MEZyTAHc48unUtzUVmuaZ9KYRgUgVdvDJetLKkp11saUazFx7GJ6x7X8S2jniRVGv3ygr",
  "key3": "5fXfQJ2YsX7pur5VnYnjcfkjFj24LgedtSUrETAD7VLpp6bBiNggrTmdBD7Wu2EtkTAF8YFdErYCh17MDdFWYF3H",
  "key4": "5mWFERfQKqpC1jA8a72ZkbwLVJem5Q2SNyP5PGTpULr5A3bCPVc434XrqmLSv12Tnb4DU3uzrwzQLNkn7CgxrDDA",
  "key5": "4nQCTKe2KzGsLPDsph2QqjcDXMKbxtpahWJ5ifAxvoVENi4ocWmSTDmAFarMjZnSygKYeFHRwVkJ8wdoQHEaYgm9",
  "key6": "n7PpP2XdyGxXc6FHFRdHv6WUibyuSmZN29XQAqsgsCvbrVLrnagyMyeJYEHKYzVe7TjWnTJ7TE32yMq2KgPfcHp",
  "key7": "7V3Q51tRaLxPHqDdriWgAM1fpuo8ntcNmpoUo4vcuc85oCQ8gnmPVwsbWpWrUnQwcsbMaS982aXCkpvu3Myj7c5",
  "key8": "NF1DizKUJa88yf6yTwJbhbQt4jkwyQzveZLkFTbvDpAra5zvMa7rYSLYQSWP7nSj6vhteKXDoneaao8p51HcVAU",
  "key9": "4bMWYG17UcNTmwLX1xaykfCpPWxNTAZLP3M3JW5S8LuGqTJap9Fooj7yJryvfdbD9C48cCDfFbS3wkxRKHNDFonD",
  "key10": "5AfWpg5GN4ToLkLzbPaXS4zYAvn87JCcRBz8iu6ur8ehLJbrQALGBh34E6KoQYpdVb5h3uodGkDrgSEqWa7H35QL",
  "key11": "2CUk1C5QTHqdDJ6iMJsKpvy9xcitmcwqZt6NuNWCysVW9ECQMKzREFRjkJbLzZNDQVzov3FWVow93tmi5dtcvivC",
  "key12": "63mVLGEFA4uf9LAbeetRRcBL5F91dKrzQK9g7M84NeLS7HpuTX2zZDsq8mJQgMccWyg78umBpFScKDqjG2NiY8ZM",
  "key13": "4dJNRjzfWCCmuJvsxNJTuwjoyqVtw9EXkRr5LJRKhMDqeuyW9pBEpkNtnv2pSQkG4e3XCtTRc4JbN6vLyb9PeSHz",
  "key14": "2tk8kWpmLMt7otwaRq7z3xLRtqgwkQ9QqaAwiJash4WrEAmwHPjfimkQipwq874UxDE1DWofbFM5pcRoY2Jp4AmT",
  "key15": "4s6GdEoQboPWV7NmLXkNVhvt7oH7gxoigeu1GHoHKHhoEaAxYwKEgQeCEYkjXp4EGJ9u99RZbbakdkvJX5HZH1fF",
  "key16": "3qc7LNbjHTVkA5s9jnYgjPVeV71yjrtt6Chocf1wePbBg2ZnsBuzvMz6xb8dJgvkWQLGijdWzHiyjedVF3n94fBs",
  "key17": "64WErvA9TrDmgp9XgQPhPgjsqVwYeqRb7YsAvpUwTkHefaa6wGPyRTHZjYsr7dzaqbjhkoeKzADTA4NBpyUL9Lxt",
  "key18": "4x74xJnaoP5cjuokYXHhnqU19At1YiSURHpfdgr1RynzjdN8aCPEfTiQKvQoHjZCCtPovTRrzwJxUdUP667qoTXw",
  "key19": "2BAbjm3iwNdccBQnWFBhW3vkQcz8udw7A2AHy3uoXBbq36afZrvVQQTksGx2dmaGkZ1kxVrE4nJx8oF1C2VdoEbK",
  "key20": "2aoKHqib1XaKrrkpodzPKrGK8a1YAe1CgAFXLdchWuV4YZX5LqwEaKd7jgQJ4817Nvc6htJPYJBB9HsdjzsGzhTw",
  "key21": "3CeCUvNWRsvDwRSkt4V9xGyNdfhbiWz8eMzcWpPD6GEKDvnX6Hp77XQcVacDGNmaVkgS2Vy7WuMTrF5Zp7cupA22",
  "key22": "5C9iF8SpXD2zkCrzrSSRSqZdc4yZNR17DYkZoPDiDNouzAjZw9ECHTWhLuQg5j73FY37E6eypLJAHi1y6nx73Vkw",
  "key23": "5EXR5LEwy5mxEUkgJQfCUqEfi397gJ6PKzxonq9semaFTo1bJiLT1dj5fxMdasKTkQTYDPP1FbP1bcwn4ChdqKzV",
  "key24": "61yb6QeUnwdnnpQbj4EuJvsNzKaZLz2Kd4dNEW3GYDtyjrvBLVmADQT6c5GBTTuWEi3nrieiGxKjfWYHHrrHtd6M",
  "key25": "mS1nH5zd1cGPUCDy4sMG6vzkaKrYjoKsCLY14D9q6hoUy9cxFL4VNasJhsMZZqqof355epri2XpdTLmqBPvQDD1"
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
