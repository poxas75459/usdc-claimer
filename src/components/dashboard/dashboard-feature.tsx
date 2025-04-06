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
    "3gZBMjKi1wjJEzAHMTFhwuckSQGC3tzPP9LpkgQDh1UWE8nxrsqXZ6ZcC8oWyrwbc4zYxEPcNkjoz7vLrNWS4ViJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NkYgtCkehy9rC6TTnJEDuZFvznxVfcJrQ5a2637W2iA47EdJwQySqZFEkjPaWTgWYofRSfGo5yaajCTwy76o2S",
  "key1": "4zbmELcKjg6FXjFdTTxRva2Y1GrDSvuTL2GtP4ruhLU3fNfNLK9JUXyBrdNvHv6cnm3bXfJ35T6ngHK4xmkFuVYT",
  "key2": "5sJdD5emVnEqYBMa4rv6621rxY5kMvJor6ZiTCbtuc9BJjdPCrCLLmaCpQAmtn5bjAUjkjXcqm6iovMue5pppomF",
  "key3": "gez83Cp5DWLeRijEZ2GX6gKK6cQF7o9cc6fuL1brF4ho2ngLLrmpE3CcZtzbVaMbi1vfyyADxefPhA9CpMEEif2",
  "key4": "5Zz1jdnMNrWr5SeMQfntQ3ztz8BJDjPMLxs7ZdxoayarnzExFetqwnjMpBfqZTtBxM57t6jGwJN6HpjSJsq8RoBH",
  "key5": "52yXPqcpUmHbbxdWGpFswjUo2sTrmF9dwkNFgTjfqhzgGY2d9zGFqjpcfx7YNGtnSixKBRSSMPJ62DXcZrkqwydx",
  "key6": "5eZWDgxsKjN5vkVmQWmgG3ehReA4J51VNUiwrhn3BS6SGSUXPfMt99ab8KK8XK3R4AkHD1uNevX5K4xKJW1BfgyF",
  "key7": "r7fas9CGpHagWfzmV36Gn8zcv5wzdgp2oqwqYqEatVza5qM6axmATmcHNZhPohU7JFHtkp4kbTzizxT2DwoMPJC",
  "key8": "2RnJbR7nvtQVXZxrDSHYgr6WYLiTpUd2xs9tv732HrhjVCynnXNnuDcQvAZ5VrzZyzBYEZtYSuff2PSQX6o2Lie6",
  "key9": "4KPZ8VuRFZ2u1RTe7SRpaXfZECr1APxQkkwrRQMvtwQZbJgdm1pqZorWsGy497aBCjxppuFuR5BWBUhvhbg1Xmfw",
  "key10": "5int59WqgdWSYybB3cSxv22pj9u2TE1dUW11THXecZCg2bhPsnZxUDbMvww38jJxD4RHNViEvDZscGyP1bsZetvu",
  "key11": "61FeShpxFqaCDKHpz3jkcaJWJKZvAur3sGZgJsEv1vCzY2SRTBzJvifEpg6kSxDmZzoBVH5vaq3Cdx4Fsr9pmK1W",
  "key12": "ZF2H88mL2bS35NAgbA2toptFZtSphgfgkExv2Jo5tYs3cCeN3nbahGFELcCbK5QtWSuX6H75WhvWLfxat88zRvW",
  "key13": "3p8sAXBTiedDN4DRg4oiye5WPPbrCzkUhb3mZT7UWk9fTRexWMk79gVCPFKK9C2TjspYGTiweAFQhEAKBQZpiT1G",
  "key14": "34oYS9JBcj7wfQdEZD7LJtYUMvC99CDSaLgMe9CbMbfdHiBY9EiRTz6KGUvC4i9jhhpWNkyRQxP1D8GauMDG6Bqb",
  "key15": "35KQRoSUPQAMYkvgxeUM8wPRmJLDM4HoJHYeqQ8X5XtREm5NgkzntBi4CQA8eqpqKsGxtnx2K1s2tNp16DBLUL2g",
  "key16": "zTTfKfQdXHxeJ2r7cTL7DKE4Dk2wtooStggzcZfEDCECXVPXbQcGsyR5WuaA5FmchQr4xbahg6xHAa2teKh64tC",
  "key17": "3iQRooicP5jzKPgm98JXrnx9ZMdPAs6PXffHY2dXx8gxchokBLmnKsLjp5XqubmRF6HG1faGvHgmSGxXYu3qtwTW",
  "key18": "t5hK9TpRJhSMzccjXogSi22ftQU4q1aUL4FdTHsvt5T1vagMMULUh8nWQno9ecDyfsZqB632PLjExJPtS3GPu2S",
  "key19": "5fupEnbqvjuoK3HdwLnQ5KQP4c5PCwMfRAXExXgKjWj5yRZ2Uhrn5bDUak1CCyaKRVr82yMYPJWZH6uS5tMdUHv6",
  "key20": "3Br8f4m1pcFpj2NdGWSinyyTZdNdWHVjXcwjNhLEkE11MhezvvD1SgwmesVmaDGpGPZTS7ynJ7JpPymKy1U9LcGa",
  "key21": "4QTaWhWZwWHdp9MYZ8eUwEwLPHH8TANTHTa9eLpvG1EE8emAA9yGmt6GcbrhML5F7reurzfgU9Tmv77dVgwYQiB5",
  "key22": "24QVajsBs8xnBuRoE7jV6iehELJzL84GWM1TyaA1fRBgT4mRuwFsuRuzF93nFZspjrtgTWyFDSvegiZM7bZW6DGs",
  "key23": "4K9MdFZM7J9TcBnUXUhDjpe8rcnmqaqKowX7a75A7LSa1E1RixqHdFFHwVX5cGCzikuY25reSDpsCtHoWKpV6U3C",
  "key24": "3AuNfmheXuBCRDQryNUJutnEL4wAaThJZ5S4aoJfN2DsM9sU2SQzMu8nhZMPiJZifV5ADNg7e6g3rDmufLLyHBoA",
  "key25": "4gTgrNrCzMTN5D7QCM2bx8dJzJHM2PvnLyQo3o4ckYxtC2AqVmxizreuwuYNmfFr37g2NJMFXFw3LNyEQnBr1Hzt",
  "key26": "38dEZAdV7SYDrNQnr2YVRtUaEMdYeXazrX4J2i6BfuAS9sMsUUd4eU8KfzwFro5TefonzpoS3iYjTXX8ZvwJ15Kz",
  "key27": "3d3Cu7AqDbhsfrHyyhhiQ9hoak1jTrJdLqCrSeeg6Hd1rJxLJcWE6mzX2u28VjTju4qqHbja8pM6FyMbZkxJFss6",
  "key28": "24bFW59RuwZAq7JPLsEFc5oV4wmjYSsStdKNENXUA7ua5gfJNMq31LM9jcBp5dhA5j9MMQLkXKjUv5eXhTsHzgBX",
  "key29": "37iC2R7hRiSVXG8WCbTVef6quzuz2G9J8S34oU7T4BfcneuBEZTaUjkPbsa1jzUb6nYe65q4mL6aDB9kjKNsgRtT",
  "key30": "k7aJNXSVsFLJKc5uwRM8vyyFpZr5hQok3GmC9rkPyrbUgZK1YdpAyLV1DmfUNZ5igvWJgF8T6hoxvKCfJv5CU16",
  "key31": "4uXBcxA6D7WuXc9hw91jzq1B5e4pWxyFS4ac6X5Ybig2J1X1WgbsfXYcX3NnMoufKxGCmHZ2j8F7DFMjoft6FJa6",
  "key32": "5E7Q1b81eKFx7o8vMKUQhatkLNQMoSA1L3bWFiccSSmeVmwU1DMPvgkXWPyZVnUhQWGsrhbcnB8CgWfynPXR3Mk6",
  "key33": "2MbEfCnkAHWcaVbM8SBFmQpmy6ERuZJJ3eqhV5KZBFerCP22CAei2ctii9mcUri1E6XPsBsgqL6zUDK7rbYrVC4T",
  "key34": "4qKnieWjiApPTmPEmaeLBwExPY2oG5x537mWzG6wYTxZrDZ3NXYYTdNhF2URfvXQxpK9aUkPtmnkU14zT2vXQMtG"
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
