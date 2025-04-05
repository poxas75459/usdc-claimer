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
    "5HHHUEDFmDSjefpgcq92tuAk1DYEhbjFEF7k9y6o1ReMwcxEh4bwoN5Af7iZddAidGXbrMz4cYoLKbDXHzymmcx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbW6JRk7Kg5LG2nfZM1nq2r2TjHPVYxN8B7HptsaDcBZdRfwjgKR2gz8y7bJ5TQu1R3jXFDaX3dGTUsXggTF3o1",
  "key1": "3cJBr1TvSYyxrfztdk4SH49XANHhftxQJ5K1eyVZQn1TcHMdz7d5cZSBAYHuLWfqZMCGYncNwGU8XjvhszVpuwLU",
  "key2": "NqrSLTzydSNHSDUHQy7ehDTnb1FKPb2p1YQGTsLixZU9gZhN1vhvkbzSHtGsrxRWXxMfggqnEBkH4mgcRTa5cvk",
  "key3": "49D5xKMYcJf1mJVTyiwScQhdtG14obHQ8SdMxs93U89YFjrGZTGDqMzfJWV4Rq9r3MVV32x9quFFpWTrNDEeqi98",
  "key4": "2RJmhERR1FEDjUDsLKDxqLMKV3jNC9YbfiRzVBWjctZ3SS5fuZNM9yXkrykxkHoVCh7NDn9habgdYh7p4PsoQcH8",
  "key5": "3VgvJpEvT494KDpUJwMgtXrPmrhiACgkvAofP1ayK38s46W4H1mjPRzuiiF7q3oQui1M67hoBJrEAWrHnVWcVtqy",
  "key6": "3idxo51QxGX3UHcGPiCFQgCC6V9tWxGsA8ccDTVs7iXgEM7wovZogbjGQnjkd9UozhuGmcDDoxvm43t9Q2YbCXq4",
  "key7": "4bBRPYsMpgGHgoQtTAHC46LaDQjnpcN3LN7pdezrd9SY4b1PCosaAvSpAiStXFeRhiSELnkohjrKMZzr7Zy7SJkS",
  "key8": "4Mc5UgxgYmVJ19m9MZ4n3KvDjECgtYxfsmb9WKzVbkCMQ895cFmktk7s5zkvinh1MVakY2eL1qsM9FYD17RWnzZR",
  "key9": "dpgCiPrX3W2LweZexd7HjMNC3nRYzKGZybKE5CdLC4xv8xKdUwJCy8re3CQppNhR7j5pV8jT7zL1U3Sb6J82ta1",
  "key10": "3mMnCg3NwFcS2h6RMfr4o8DrLda9RQMw698jWG5AD1DhAtp6CUQeSiB3cow65eyhxn9yG24CT1NCp3fWmymMw6fG",
  "key11": "tKR741MHjoXVswHWmAuMR1KfURFqRLXLZUyV4KRwVCL9BEHk9YHerRLDNj1pDwhCqrfVivpgvvAtMYqyC4JhQaC",
  "key12": "7n14ZCX62w6R5qFJKcAVY2mZ7jP1gukzJ4NFBbXTAPgENhEK9EZbLxevh9hy9v7xcMPMRKC17Hze3TKuDsrygXf",
  "key13": "2odqBUJSwH4VuwDKbB5vH2wGHMdQzgGiuwy62RFiSyFqtUegXTryhh1Gragg4ZqAJWpHr8Py2z5JToiSKYZNAzYt",
  "key14": "46xvPaxr3HyMEu1XtmgJvNFrhpLa47Ce5nWqfASfdEkfJFTwotprSbnuvbwjwQRcEnB7FSKX3cnu1xa9z4VEXw9Q",
  "key15": "2DxfmbmByWzfCbnvoD6LThbBofkZ8PmHuLMtgJaYoSL4iaQRw2ueXbSRN6vX9iEqCPFgj9Lwg3vBq1y2DoFqGrjp",
  "key16": "23osixxbazcTKrJs5XR3oK9kjTsKLik3Wfu93WFCfcRnpdH3cmx8Y5kAX9SW9vXD1dX938LQoUiw2axBwRaZudTE",
  "key17": "41sS18xnWAh6s9rACMW2t7v3G8w9W8jdmCLahJ6vSnBUWrDTy75Lbxdvez2LV3xdhiVqZtoqAFXEuoFyhxywJbGA",
  "key18": "3RSCdQePamYC7TgjDob78abbtDYTzuGyGMKkUaNMXw6fbQEDq8jTgWzvaJf5Ewfwt72F8st9GgR65tQ9K4bNqhyh",
  "key19": "2cct9xYqA4kdCWRic5MzSLTudttRxnuojre6vSHyzQazQKqe9QKwTpMNBw29T6yDX5LqYJfYyC932tNjYQDYrVmw",
  "key20": "5teHF25qmXsR5GJB6anrtNf8iAKCfAo79Waxo5qoU6NoZdW5iYyfkoqxqT8KHBMo5BhuyvF2e7UKLti3gxrJKHWR",
  "key21": "4vwdXkkQ26Z9pgd7n5bprzWkAaUjJQcwAYVHqBrQxHpWmdzmDTdz4YiPvSzxfNScPnQMMKoDiC8HPgrsAqWw2Umb",
  "key22": "2VYxxpA6qL7QAuoHppnDAM2WL7uWN4wUagV62yqquFhUaTHKPKcYBUPLTtPSdVtTPuK4oeNswj5LiFTWmpyuonbY",
  "key23": "igRXHEUnm2UNqoLE3EmxW3CxP8JkCGeYn2pEKXJR24eruioLdimDsmSRsbB7xVS8pge5vHUs6snMr5VonPeZwHx",
  "key24": "5iv7eZN819etYDRVvgNBdvucsj98ysNHfnEhyW3Ppxvv8JzqWNqPaXe1HBfUGH5NibPchbJhLe5WEc5mvNChveRs"
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
