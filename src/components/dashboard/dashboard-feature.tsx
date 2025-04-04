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
    "4pb3bHGykDVfyQ1HWrQhjoPHtUL3YfWg6EwWfx6yNDRnx4xWHtngpAAjgbetCvzyZei4R6NAjzdBxrcdqM2nYJjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "raAQohr4Jf3qE2U8poY7W3GY8Q1ATwn8PHPKYDndAqaxXuYRUkSwSZ8QsYKqyybSpo5A4nXUDWhAMirCbio71vN",
  "key1": "3APJPZUVpJBNdu144J4Ln4eeZvZdKrzjDm3JpvGwWPBj3yzRpgdFAqcpr2R1UE7rt2RFh1L2ZM3w7NnV59sXkPjk",
  "key2": "4YVW4efo4BBAY4KLaSek5o55umUgF6C3eC7UabijnZDpszKPrriuB21UQFtFwPqetUqDe1sTMnjBBYvFcwZBHWrV",
  "key3": "3rzXBQHa8k1uTFAtmB61aPef4BzMidKWu1uZ717QfmEr8SB3W7t9mcApVWHGS16JjRfjTTyWdb4XiHcsXdvpYxgD",
  "key4": "5bjcwh1E17R1eQQDrFUyWWCzc21QbbicdLBmEcpUMkLoNiXoUfH5PDQnaki1MVQc4N3W6f3au7Mwc4fDDt9Z6VJk",
  "key5": "42PUm8fDNKnvNnAR4nLVNKqJvCw3QgF1fGpTiA1nMf5M8MKnkpYJMa1pEiS2QdKRennHk1AD4xyRuh8H52BkLbeo",
  "key6": "2Cdp4TDash1oaF3Gqwi6KSBoefMRumoHpnv3SWGtfAFvCT5VYGZjmJuB3nCJuveW8UJEXPsbAeCyfLr48BsP97YK",
  "key7": "5JMXjtATfNj2LqTiAHufQmVBguhQwxVvdmjAZqe5MD8x3bTWCMDn5XjKeAr6HkZ8WVn4d23HDo1acsuPePMdPxgZ",
  "key8": "2zwC68j3jhXAvRw28EzmAetEftHkTELY3hhH1KR3PNWbhYApeNjGNMqXp8r143uVGc8dMQpPHuGfHSF2FKVi7cgq",
  "key9": "2zTuww36GZntTAe8FQpN32dzakdZUBMHfoPZ7nudSxMCu53Ecft958DE2cM3D65urDsTBvQPTee4YMcmvyUajic7",
  "key10": "2ycfxCMNNfJUvN7vEQE6aqYbnUGUyVEBLCoHjfw6SS3mpbAipAS7EKdcBtaxZyKmQwCSijQ2D13zo7SUDsUC16pD",
  "key11": "25rE4q7oPJRguFMrwyH5nxdVva7FyAZayAC63uuPCrNDE7z1q83WMsQCXRPSZPCcCv5oKx1T7VFWF3VARrWcGxTv",
  "key12": "4MACpQAGZYHoY3LznRRsx9WLnbZgXDCaQa6VyRbyPPS6g6fDi2RZkyHabznJuNpJmwSVBnukoZt3SS1t5onMGnFm",
  "key13": "3V3wk8GTxve4X2n7L2HcRRWScKzrRc3Tk4efRWnVTxQDoFp3ToYcrvpRyGdqHn4Qam6RkHTK9BP9yEoDyPCEu7yf",
  "key14": "DA61iQs9dpGCk5WWpZiL5iusrakKjsrDGjJErf5CR6h3gc4qVJBKbRtonBRqeg1Hu4NZ4aXUxHFFdGxHvnacyjz",
  "key15": "5VvMfCmFXnhUPvYj6R2GhDp728Ns3XSAuLZwMg4PfcWMfLMMoQYadbUUmdy6MoT5btz6k4K3x4NPDZwJDEcUGxVA",
  "key16": "4m1hEpjP5WFzM8DDtDcZniLt5XiuBzxG2xnm54SGRMHQG8na1nCj6ZTZNggZfLZfmmv4Yhf2kSiCqaeygqqQ5Tm",
  "key17": "48aTftqiA5Pf6JWZ4eicVcCS5HgUGi9vbBsv14Xru2z51531n5MoaSnJk8zuDMycjYUtVMSv2gxtX4dn5LhXyGam",
  "key18": "5oqsc3CnSXnf3XsL7wXNijZq4UNqhXaAsVyC1bvpGVhNZBr33VJpyfsKfogEXucc6tteJ1afJxiAUmBufyrRQ4jG",
  "key19": "CaubsWaKcmXGQYVpejaTLd6Na4dw91PNu34r6GwokHtYKAqdyYpe2SG47tgNnyRjSDW9PuUWqcJMJhiRE1uKzkK",
  "key20": "42BvjxAuJPHWJPQJHt7gzni7DG8uiErr5tW1HbNUEAjznZC8bE97kygY57KWCZBaTwHTg3QM4ecGxfhfrE5qdFxA",
  "key21": "fQBheXeBqoHcqK9NdwfUKRyx6B1tDPWdQVoKNWC4gTiuoRuqRByVD9yrjHCkg92eMgWkkNTZBCKJJdtLRziTeq5",
  "key22": "38d7Zu9eAndVRHWRCcNaoiFBp7F8Fc9HDue4ub9rvufGZqJWPNRLkMVBGumLpz8r3TvQ2GRjZqCJFMdNgZEJDte2",
  "key23": "4jFPkgEi59FSSQvNrk1WzK4HjmAsbw1jQzkKzdpdfckCJdnY3PaUTegm5R7xLe9xaLdBZNRiNzKpVhdiXxErW3YX",
  "key24": "64YBA2sEPekLGzVAP8q4qd6qtaqZ59WwBVe2b7i13AcDRBndG8Hb6aX1EEFfAXMVUvbC3V3LK79bMhDUgLmnkak9",
  "key25": "ijmuLYhZ3Dtu12ydPgK7pGXnV4WP2fsM8RoER4Ng6bgEHcc5cS4zzSz2K1wNsrK8PYLKhmMmxdw3Lr5VE15wHru",
  "key26": "398PsgYVrv4m4HaDFs98apWkZUn9R5DKcZjSD8CvFZ4zy4CZ98oveuqvVSctHbBzkMNGYLwCw8Jye2k5FLKfd1Uz"
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
