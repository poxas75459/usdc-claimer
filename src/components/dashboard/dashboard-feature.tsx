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
    "2wrtsmvnR56NF4QU4aMfMKdvyQG1h4Z7h8a43g3QpMEikfysvG9Db98tNFNSXEK1hdGzY52v3b9aX7mYkH3p2nVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiktK5U3QCF831mmMX7tkASiuqcuY6X6t8sbyiK5AEa9n5brnwPYgNZS2GKK6XGexWLtr6b9phfDiD7x9fhTgcu",
  "key1": "5YNVTemaqsqjpTPzFinetRsD4JZ6EkHy1jdEzkZQiq8bewstRTeVDMb3LYcwci3oGm3m6t7CWfMBSwDAU3syAVE9",
  "key2": "2HHDHGNB4FTBVQvPnoBYAWWfBV9nD862Mc3KDL45YQNZto4x8ZWg5qnVdRyqJ9wzCNrBtKLzCxPT2PQQaAJPedNy",
  "key3": "5KbAyS4XqsKbJrGZk4NT5UT7QkA1vjVd2ykCDWAcBUsPkfcL15XQuUk7siHkDkWqYAsyS83tGHsn3WvSZNZsSLre",
  "key4": "3ZPsoAwXpz839BjLXGpzoVRm3qNcpqcyGfPByKtzs59PRnBPkcHhN5XozChkAbaq9zseGbt8RZyCEVKFzfwHYksk",
  "key5": "3prru5uCFtJL2yHyz5ky4mKyJSGDk8goV62AFFqmZRv2SghvkCXB1vak47e6SNVXTaUG7GRL1YiTkkeixkiS8adg",
  "key6": "fAUjPHNkP47UJ3V8S7CttSwy4c6Wn4eYTWTXHJbEhUmmJFbp3MGSDFM67ZmqoHyqNnoPg7yQ9ydf11qBQPH8Pzq",
  "key7": "P7as6V9QZ3SQCJtn47PH7GnPMZyGkKrrWA9y22p3PBGy8r5YaShBT3SQzrJjSGynN5DBSHsmWKxbnawty2iCuVt",
  "key8": "3D5xUqBvszw265qJbYsHAh2TMjrBVQraTRxG3XZcrzKS7tejUsyuNG31M6eUreZnJNxn3v8g4ZP9wVh7RBpyBomx",
  "key9": "4hxxJthtd4q8pVKQ54kXkyBqxGWfeS5w1Kz6gVKxDWGiAwaSK52QdhAM6q7kNKv5yi5MfRcmQ3UGEFzkDBM6GnD4",
  "key10": "2CHtCpEex2N5TpiajsfRgThtZJJtRBF8CCbiGUuGKYgpKgtFS5WAVNWdmxQnXE4Gap8rvdSTw3LcCEaR9nF9U7z7",
  "key11": "3pDWYC9ti2uXpgndZBgjgVrm3rPp1caYYeadS9k5ZXaZ2NTF723cAXW923vnhtwTfNL4q6uUtjQ6Jdk6gFosksMT",
  "key12": "3mT9WjzWckxo6MTE4Az159x2aR1pS25oTu8uNoEDNehFckWucNaBviHb4KKxEDkcQrA45ZkRpDVR2EaLcEqCUAeV",
  "key13": "Ki43GXZ6begMRpN89YQUM8MCVXcFW5ALQ95QspuJAmDsbeecovcTicn3p325M4i1j3JKu4ojNY4gAbZfP2kb1wx",
  "key14": "jMUmKoaMqVPV5e6ss9Gcp1ghNCgYTryT5NdMVS1HmPBLzi4U23EyiSHBPneFyFwSCwcrA2vmSdseJMkwQFSkvyw",
  "key15": "3UdzWBUZG4ymYY2H2nAFPR9xPc1G3SR4Ec645rLdQfAnAovHMHgJHiaxHaCRZwWjakAcsTdRFc5gJiCFW5TtgoAG",
  "key16": "5CagsKzVoZ1EiPL89ZLynLzHxT857AnzVCVgvz5jLLZz7y13w9dUbbUuD2SWmkVdyQTtsZAmey6hgUNZHVjFWzsZ",
  "key17": "4UfkJqp6LSZAEzh5zKhGyuaKEqWs6xSnmKpJBg3kgHMxPaozQ6WxGf1DpTmNsdSoZWgsMf73xaDYGUGsigBE6EaJ",
  "key18": "izLHTFHc9Xc3Tfb4zatL7GmznXzuioo3f6PLtDxfinLcTducftHGmJyxZrrVoqtJWA28UGAoB5uFMkm98nHgspc",
  "key19": "2A8YgNtenpUubFGo4XrErwp2NfNiiaLSYgn2vko3eqoFMEKhz2h9LPaG5ZWotVwyj51JpaDGMZBGL8KdQRvtsnKS",
  "key20": "LAnoyBzhfVR5e9ZsJuBWjfyHBvqF5NUdcbgSzqvM3RFiKhUgcZGh6FKDRdE2XNKkk4ZAk2Nu4PkJCVdDNnkooRe",
  "key21": "64rzpw5TMYpuCo5msVKMmTXxBeyDrUUGiQopB6Jumxb37ruK15YArxWYYMsUQfpnp4MwRWu8vAruTbYLdE3mm3JW",
  "key22": "2HTkgDdPc1PQ5bZeSDvqLeDd2ioUGiXotoGcXxWWRfNGJzsBL1bGH5ABSWerVcv4YBFyWq8dU1B2cyxDzej1Zngi",
  "key23": "9q6692S7zVNfh4mFsp21c51bFwLdv6em6zwQAuAz8q7KZi8JqwcfDruzjo2Gve3xhR24yJcocmXWx2s1piHFAcH",
  "key24": "49teVHS9c1589JgY9uicqMTw3u2DKGPsq5Kqjv7mcY9Hc4hSrWvi6RYehXQjdt6ooWhL81zQj3sM33Jzk5JDqumS",
  "key25": "ZggVnyu6Yhwu3YEjLEJD6cvGxKnXEH9HjZFgEYuZ6m3UL6cuXUJTYsZboVCPqobusGuhjGDbbf9o1LNLL7chN76",
  "key26": "H4dAuLV5t7jnXxmGKNkXL9iG1jpkUM5UEJfh1YgDZRNF4sV9dXWbV48xBAKJExC395D6jBFFB3ncVb6poLY1pqP"
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
