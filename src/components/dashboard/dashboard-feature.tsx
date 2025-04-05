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
    "2DJyE3mewxhGBgZrkudQNYJEjbiEEQD1H5Aqb4xJRQ7nuiaCGSFXXJWui8gDnSiuo78z1YdBhzQSBjEorDxLEu4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqSPqZiQKvfy6yaShreoiAjGtp1kyFbTTVVnLbUMA25XBc5tMAB6LefYq6jsqJAmtPYcw4YK1yvz4QedXHD1h8N",
  "key1": "3KTW8HYLatFwhA7gU6UEaSfSgum5VKW4rJBXsdqGoPGcdiqPukq45DWwSxZvwyCajWRc3nS3kjkwDjBocKkADXWT",
  "key2": "3A5SCV6xNpJtxGiphCyM3j8sGa3SNMFk7iqTap8RCocEcMU9ACeNLTagLU4HxgEtJ4UHy5jF2Kyjyy83FKBN1Pu4",
  "key3": "4c9XV3UgeLjJaKwscyACZJMR7Ck6YFgFbvnNPC7Wh2hRvdTEXZyRi6cd1DGvXqCjiSnCq7WbJbyWRo5NUQ4wKyQo",
  "key4": "MvTBZu1sbACJnXdCJxscCCvSupTucE5ffdrtp3rcfgN1N62JLYr792Xvds7izQYTs8bY9EpvYyuC28k7fZeGDXm",
  "key5": "2F8RFD69mmCqCag8PMDsmYubjBgPYg85z6qeS8ZLyq7qMd3DwALYLNpuKzLjttmBYU2iE87veJfi5TJQheu4SQ3A",
  "key6": "4BRPeFmKJWDds5A8NHcSWv8uDKFSD2t4zjEoi1NrDCmNcCsaxVefjqN5EDXasVDxSPHLWnjP5sRvenPSSUrDj6Zz",
  "key7": "3rn9pAJBDdGoytiLnh4FWBpVu8gr63RacwJBvhmWf53avv3UpokrLuWKjtyN58pkAR7GjZaiQ7Dr31nnYwfUZesr",
  "key8": "2sMkLFYjme5hS7LXrbx9m3n1QeXXuPZiZJL9cS94oFaXvqzqDtoNh3Nv7JjP58zYXE2JdxA9B595YUzGhjGfZb5H",
  "key9": "5Drq5fdVpuq4FgzzCvadtigs8dULHjgJCJieg9XQBsepbNYrNTwCkZ37jrFN8qxN2tCxfW2xhfTmxXdRRdqYbmfd",
  "key10": "4kawv39RqcQk7VRjsyaN7SqaVoqJ72JRAhemxwru9XJDhnv8cM1NRJcaXxj64gRU9a8ufp5oc2A7eK5YfAt3Gd9p",
  "key11": "3d1qGtHtuSu9zpQej3iHWkfeFwbv8TNocmHv8SVB7EYhD5pbPYoBEiRemm3QzB5tBP2SvsUp8Q4KYsvm7USj2yUw",
  "key12": "4mfsJueiLV1vec4iDNGG1X5rcDE3FHuR6J7qjiYFyaYGZx5dzMz7AnJs5tyjtEUUhzQNjkxw1spAVQdU15dqAqB8",
  "key13": "3fs6iD3JYD9jTAwrmWVMaQohig4NxrGRd7hSh4Gobk21NPEkuBoPHdbFmiTBdgPr1N8C6887h7tJkACisnRM3VkC",
  "key14": "2NPW7q6D4HmsyPf1XXCMK2avBkXEMR7feN81ShYksrNumyRb5ojwFpGX53jaTyqRatSn6W6AosStNkx8gufWUMvG",
  "key15": "h7s7JWvX9eWH9njP4MptybQHR8ZxdPHRExhR1xPrN3u55nZVZqZuDLzG5UaNfi8UEBoiPdtNNEfCZm5EnoJQURd",
  "key16": "4gmXqsWRUaxBLeRg8qGjXPPQFekPLjoSb5XDMFrm4szVtVGHLJrgzp2oKSpvf3r5gGMtx26mWKN7WBHvGE6Et6oS",
  "key17": "431DsbjQ6tvixQc9GiFNanzf9ukpbJphgVm1ujya3gNxSB97cPB5RkRxXeyzx5cs1XBTGxtJaxszJyxm7m7WGqWW",
  "key18": "bChxJZa1XXUcYEHcEqPcjooaXvfhgrQAMbTWFKL6rMrrYLsCPNtfukAkPKG9hdrhB4Gbc9Pu3RK94YC57CvfpA3",
  "key19": "4DdBWDKtmL25WGc72aCxw9vyz9EdsNHWHL2Hh6FjqPTWhsCVpdFP3kncYrYgoxqaKXkgznkUQkHF44xMNN6BgKew",
  "key20": "4kj42amk9vSBKKyU2VFGT12737wtEhJjiwUbnmr7iUMykAtDwaGjKBVQYkXV2WCEujm4pBfmgXymaSpiv123bR9q",
  "key21": "3X8TGu9bACUwwY9JdK88nf1iZhx7LBEf6qSBk1nrbfJzRtSSAhKf2sUhevTx7wbsCRf6Lv27D9JTrFFrVDWD84c5",
  "key22": "61GZ6oGtdAEzTuuJhPJY29pu7xhtRawJQyeiM1zLysKGeqWvWgui57cC1bRWwqbK1NgGYgFFYU9AXC8NdTYT3qtn",
  "key23": "4UBwXgPBrRjxFgC5PQcLz53wyL7nSq38LARTaFLX2PNKTAUjBjr1VJ28e19eFWC9maLbdK9UZVeDprSaEnCcZuaE",
  "key24": "nBwFtRtKXgEfBCpcx6cHiY1J9QpC3sCdGjE7R8zn6mAANznRVdGCVcP8foxu3pwcjStSBP4d3SUu7Nd236MuF9n",
  "key25": "2Ut5hURzjC5twP1UTBUWajxe1rzpUB3zAiCh8anoAvz1pQvSbp2qJ2PsivXvL3ZKXZRNF2QEBivmoKiYy6f5Qxmk",
  "key26": "4SG8UBYqP3oHvQgWcmJZafsS9zc93DwAJW1kcs31xvs5zLUH6rN9KxHwsbUu5vivtqL4mvHnRZH5TSgKVo3tgfFi",
  "key27": "4Y1k7TPGwy6pecpLQvhsbi1ejDV66GxboBvcLbodkruzNJiBAEhhsgKpaczAVNUpx6BA4xb7BrNj7qGFcTQU7crc",
  "key28": "3FhMD9vok8vv11t14B4PYThuAuQabJxSdqH3e4fkwk8SBBKN11FmjR1B8DbBkq7xwBfPLS5ftfvC96k1zPDAfdR2",
  "key29": "4LkR2a7FRdBQ9NZWTkLE8g6MhUwtzEx4G8TgYkL2PjsFL6duHu78D3jci6WEiM9Lqm8qM9nXus8uZ3dHBANbCWHa",
  "key30": "3BB1x55CE9fb9i3JfMJYCvtM7V1yLHKXUbDwEoogGZDhxvyRtuGVWgtp7SkBmRWviKBWwD6GUECjZL1T8VchpKXd",
  "key31": "3JYSkuxxGk4JpQDWHJAhcUX1dWThJZ4gUrt6MDhJ2ZxGk3hxsz9sBYsGQrnrs81WX3T6iY7MHfQBZXkduJVdSiy3",
  "key32": "eTNVZZG2NBM2dZHf6bzTj6BG2h4kcmc1LpwtVh3CtpBWpWYFbuSLnzroMW9kVopVqag2VrqejFKY5nqQvJWYz2s",
  "key33": "4gq5nqn283w3qJHi9gKHrT5FxcTty2Wc6eyNWwAMRhRiFD4ZVe1ELoKGM2S5MM93JVLQgy8ARck4vjy7VtNFweaW"
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
