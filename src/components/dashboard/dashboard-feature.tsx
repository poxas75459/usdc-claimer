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
    "3caz4HgrW3uqeSNVfbu2Zpib2JzDrfkQGLuA11ivQhmxisfkWKR9T3uc6zZQuyjxXXduyzNuGqQSsAretRpYdkyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k7mZE11YFiJXEukyoCgyn9iroYQtTEMppmAUSfqzhpGYD86Ah7zMSRapuKi58zY3T55wXMQQLqdyAZX5MXyt47z",
  "key1": "34tRoUfAeEQDH4y81vHMnD6JK9Ht9f8MG56mF3WUw8ZkQzscXmxSmskg2Ujx8Sv2cfYPt1hD63HsZfToYJKJPMb6",
  "key2": "33vLLqkM5sPCS5jYRtKDf6KC8kpiJKefuo979FY3bn8nVYKdKoWokBCjppkFu8cYVRRENiGXyVoVrrBh2U5amuPr",
  "key3": "31JHjWJ5su52MApf1pW2LHBm3LWgUwo3fzXWsNTTs1o25sXZjbBkeHA7WTPiXuQeuvQUEoMk8fKYqLeLgLRkP7mE",
  "key4": "QJUtyVpALFDKiyftcywQEQ4dJGrqS9PVbPRznj2nsjqpV2QB1c8PPxjCN6nk25uwcLGV1bRcrDuJbiVCtbT6pte",
  "key5": "5jpxJqf2K9Eit8w96fjQarLEPvRJ4FWdvZ3pJ1B9NbwzFBjHpvY4QaGEb1tWpWngTv6doCQHxa3K36EjAAYcSjtn",
  "key6": "2CbTyaWPMVRwiw1j76Kf5STfptCnSuXaFzEi3o2e7x5hJ8SN5NBtNBydSqPq19DyD8Dt8f8ESey8dSaBfyD8Sg7c",
  "key7": "JbLgrz8nnYS8ngrysETtnW3YgFAyXvVgtar7iLX1ESa3epUSDphjr5fiRZT8gmHuH7AQiLAfwE3tEYXtcGbjiVX",
  "key8": "5ACHLZD9HqFwFZtuJXkB9qgP31xis2ySmzrgXZ1vjeLvwYjzdkeoTtNoVnmPuvBadgxtHJbe62mzPaydeE3Lsniv",
  "key9": "2FcXoGQ6V7jnFMCSz6ej74eCvjb2t5fC6B4gDdsBkqZATLGtmPYtNjNJAD8kRkeXyha8FMeMsBRCaHPpDes8pAVP",
  "key10": "KcnakxARBPb3g6jSun3awTnyWK3ndgRoBimas3CkrBoir1CGHKqdDVoo1p2mySebocxWQicCRjT1ByCmSvN11To",
  "key11": "3iQgzytrtcUeugchkfhdZxRs9SLNFc4scDHsn4UcrGkKuz6SAP8GCBYkypbkfbVz1y39otFPyZWFjCP9ENGZKe1X",
  "key12": "4brMUnhsL6qtt2t35tQLbQieKZ39QBaH3yxxTyAGNW7uLDxUvneMpNztciKZ9fXRMD9DzgvzcS93ZzWW87W89yTk",
  "key13": "2u3gSt4NzyNHYSHZLYt7ErqDcZ1sFPHCi6Z9qkCdA39ijHV8fRFKf6fbaG6vFmnyUbv8WkngpWsAEByjkfDSpBXk",
  "key14": "4jGfXhtekvMsWGtXNt7oj8niuV1hvwsMyZkgw9nA94nQ8WxQv7csLiL3Q759rySScEkPKNnDJDzBoDmSm2JorVyQ",
  "key15": "4PKYM8XCWaLMANVs7QgtVa5c3oN1RjDr1aiUVeBBDDvFkRoRuAVVYGg1p5qTMD3aMY5yuUrXzWTqRt6m1KdQL5EH",
  "key16": "5eCbwnLEmgWqJ893jRgkPj5F737DD8Hv4FNkMJR524tAvEFTCm4F3EukyryEA34hQ6Tx1D4GpT12C5MubRPjAs6F",
  "key17": "28R5f1RDrXXRefagB29GsVn2b6woL6MeKzMZ2dakS8EJK3j39ouqjH3tPzJx7zNXNzqmgED8EvDQDUTeVXT42KFA",
  "key18": "2YN2Z9rbspjcxGCRqWKtwe8YV8Hb27xszb5VZaB43NGck5vMRWi1a7zBmqGN92WxfcRs8SrzNfkbeG2587uvoAfN",
  "key19": "2N9tvcj8XgUUyQGkBsXZ7tQQ8kZ2o26jTEmdRAdXtvr3VCXTRnDRTKbBYvVXsCBQgFFa48zjaL5GwyHjskr4GfCE",
  "key20": "642ie2rU4YRBmsAWK2V9qLUx1pPqN9fMQvesbLdAu3rfTsuG9rTT8gQZ1ZbccV68WD3HDzuihUZfTtgHEpH3kkWg",
  "key21": "5hQFWf8BbYbjTpiue4tuHRPt1bby9cB1fCY6hqac27EPUV3VH78ETUcxBcuxAx9tH5ZaVAaS1eyuVKR3HmZgkZmp",
  "key22": "3AmvbBwiiLGTpA35M7Jj5o3rh2ATuEt2L6NBAEts4Qk93hP98Zc3zGsuc1R8PYW9PSduEiRF6HbzUYXojTQmtbLv",
  "key23": "4J1e9rFs6ME8XDRSKEXY6JWaPWL9VKSsNLkiiMGbucSGHUjb4H2tpmYJbtLBNSNCtJ3mptXfBFfkvnMNL9SCtaTt",
  "key24": "2CcPh88DAvzLLAmqWnbLLog9ZkkB3DKBU6hwDXNeTgA4ZNsr7XGC3qQodc6XhhWYzNGhNsVxFPwgmpEAqQo9LRdf"
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
