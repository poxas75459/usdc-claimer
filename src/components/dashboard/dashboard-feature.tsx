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
    "3gMjMdY5VueM5BDfqEbBnsBBonKw2ZR7G2uTrxKPgaBySLgmFufefbeUKgZDCJ7B7AwDyVoJPMmVf5wieRsauw3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crNbd3oh9P2iwNkaCRWXdpGfnNeKH7P695Fpr7f1YDpmtoNAZvM2u2MJVuHfTZNnNcrVaq2iFidCRg8PVJKQqPN",
  "key1": "3pjyvTLo7NEww9pMtePP56bhvSZTsRWVSqSHmLekAygvHVWoTocwZjQq4oY4HUhp2bJ2u4aFGpD4rULftvLR3vFq",
  "key2": "4fYsZZteUYQhhaL1DH5Y2fY61DYzjWdmsSh67j1fdFu2hiqHACE9RuzxwfB3VJDce3NdUe7DuSjUuTZY5i7oueKW",
  "key3": "5LgHH7TtF21w4tDREXct2hs4wf7JLxUEb5nddL8fgjGYfPJfwWDS3qNYLup8JyxxLGvKZresU1nXJHG8vxRCoycf",
  "key4": "4q9vxoyz87zbWSRqKZPXNkTZUDhEXArEw1Zck88yGCcHJV87Qgk3UjTqGxj7PBoi4gtJhKvEBA9f4xf4bbeYKWKT",
  "key5": "4AyqcQoXuoqDHiiL1L9mTrjy2ySK5LFJAEZKkvaSzsVh2BTvnBfaLpygo1DmbEdwHQ6wsGwrJqYyQMkHKpzzoUNE",
  "key6": "4x5fNA1bgApgRhTsrVJHZoG1nDxKSVeZVAfRxoV5LZrzLkzWkgqKPXAU5XUpwkoaDgiTug3wBvXDjbTBBxMWLavx",
  "key7": "341sHNN4uBN5cEVcwHXCn5K4AXsZVjHCzC7sPscaLBDZAGj4DykUgDe9jB2Dr2d3jXcwWigKuMN8nBRb4wHGExSq",
  "key8": "5drTATabXMKVzLFKPKo5Ng3HTffVwrdM3xguBZeJj7oYLe96VRXYJyRixAYFkioNr9m6iHXZReksGZvMRUBnLSGr",
  "key9": "3Wf2sktGjHtjErWjQ8zLYq79mxos5KhYAZM71aoywjXFBnaKxz4VJXpsiZs6JNwDnHKUSsTcKvKAyQd9dyeDQTDc",
  "key10": "2B5VK6fFvsVFtH9ZE4PfgXF2RJyHNwBkbSwRtTt8sseg8JikteEMxi2aUKPG54Ka28tfmP4uK57wjJXA4LYKXdph",
  "key11": "39n6ajwn7JBZ11jubCVL5BTKop5Zoh12e1YeAzSEr7fWu45SDYYorwWoxyPrMRNfiUaAH2Xyw8mTTkYH3XgYtDoK",
  "key12": "21aQbxkFGWeZ5ry6Y5WNvY66wX69kb88dHmQZYpT6VYi9rzcfUYorgs1Jsxva5y5dWgXNC2cybjxmhYVuAZau2QF",
  "key13": "64Gcog867BjzMnibB6PAXDCw2grGann6tQmatDappd27RcUM5wZMrjW5zJyiaqPmyj2UrvU4sN7HVmGuLBVQDJdy",
  "key14": "2MU9HQG7hkHU41nMNANrdKgxbrE2z7rtHpAmDrPQgmQrznT6vaXaJP7WWQL1sHDkfhxVz4pfU9zkNUrEqGDAhcmp",
  "key15": "MCddKWUb5tBu6JjcprQkuhy7DAJdynjiDjvE856A3PfzAk2uP1Fs3zVh9owoPiFhALTFxVQpvntxmmvqd82b5J4",
  "key16": "33c2aDg6a11Ptt9nmyvzMoR5NTmTNcJ3DHGLV5qY1B9QEsHNLPLbJJpmJhFbF1LEo613sRHcNpXJgQ15ZiiSfGDw",
  "key17": "2HiRA8MpK4R8oG5ArpqvhGeXbBdAiJVTSmaRL5YjCHGhPZXRbqP2cVX5qKPBRFUoX64pHZMSXxuLt29EeeRPxgoM",
  "key18": "3fPzfvVy5b6oafSWktLSt3P4MoACtJE5xdJivMZH1C7CJRQGubxW8w3x4aTwWf2GrEAN1ojVBPxQPL69EfBRFDDb",
  "key19": "49Mu6hj3cqLGY8HuUNmUbDgMHBih9z6uRJbVEnpJg91jFhRrWV1dDQXMUeHwLgHtw1nTe7Pb2tsSD3gAmZG4pC54",
  "key20": "5zKzMgJvaFTUZvo8CxhokdSXGdtAANjgEqFksQn6VDiCYCyuoRxDG4sh3MxWderin7vNqovDPeREKwFqyCcmUfTz",
  "key21": "2237oPcie2V23JWb1LHFj4bFQbi5KvMYiYHRvgRLHwxQNDJp1fscn4sRsQM7GCNqQHXufNVNtSdtsxhtV6d2dzWW",
  "key22": "2Zu2BbpQwBmBq6nSyZPPVwYqEznSMF5hAwaXLMhb4nnMpziPqfg8NZruFiSg9BmsyfnmA79hUdbphrvo7neYMkQ6",
  "key23": "4jopYTHYAMt8xBn8r9GATJEdwBdS19yVpypFqtk71D4StDsmEcXruGpYHZRPzxMTi7R4KmfcwVTWDtMTCab2RGhz",
  "key24": "3BTmC76jDMwdGE3Tb5JJZLuPZpJLnUfKXTjJ2KgS5ikvbYgeJjNDc9kMs3gwHqFwi1mG2ef86wxMz4vRcmdc5ofm",
  "key25": "QjgC5cQGiyiFYcq4tjycT1REiwhYhNF3M1cdmoACHMwewyp8VvgXoBqhnhUWNDJVVXpiE776hp6JPDsjxDVBiw2",
  "key26": "2ypXc1u3yRMTZouRWNRAkb9duFGcwSBHjuovLobWWPaDgRG1VSmf4iq4QWnxFb2q3FomMfedczCwwAwhYAZDPbjh"
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
