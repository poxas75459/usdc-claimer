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
    "5jUqm19u59ceK22rKHaQc3DXgf8183sGj8hYoGmNXtzA912A65RoYuBgAqtVhygTCqswe25iK2pJ7qLR92D7Xguf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K6vC9Qnb4pXucj5xKFsnytKprC8TfnrGT61Kczyb39HzU238rTe8S4r9iWhC44Cm26kiKE7PsSnCNaW2ek9F2Z8",
  "key1": "5737UWPa5g8gqhRLssdEuGdAPGc6vN7Hub5HpdKFWxaubgQDZfyuE3FVVy5BQQ7nosXoRJVBW574VvMN5UchXmLb",
  "key2": "y3xyyU2s3itFTM4T7xbCoRwYPKGGCA8msEQDN5KEBEKzzixUZXmVc5XGzNVz7XxnBCGLPbMEBovYkRESUbsfM27",
  "key3": "2WqqcHaYMsT1zuNjnsBeo6MNjysV98WsZzHSdbHemKUDyJJD6iEQ6J6th8A63WbX3V7gX3ASk164q8iz2YR7YoGP",
  "key4": "44ZmTCTgc2ZsSixN4RNPukVF9u2PDs5WBtn8JzuxKnvMP5uWLBKhqF68uPb2vcGVy1anjivBgCWc96Ed1oQ5U9H4",
  "key5": "4gFXHYE5ThxmqoRzyQfWR1Fh4ntoo7XNH9EFivdk2Y2rHcPuu3urjMhBYL8bWX67rhRZPGV8DMBLZDvFHDPc1g46",
  "key6": "2tJCyhJDGmpKKgmo91xeo5AZZg1EdE9urZ7aGhjb6MrYWHtaakFCdjfeZeGLgzAPp9iGTHUcg14XJ5HKR3qXGGBU",
  "key7": "2MDtdGG4MsnDfg2Lfmur9ob1S97fHTtCVVnTN5iqYNsBquYUVcc76HJ1DxCEgejLPVpc913CQLJnqkV7JgHWQfBc",
  "key8": "2TNUUa6ecbPeMKSisqkM5pL6WEKn4WFAszhEd1CLiyo6Cf6NtywLkhpcm7tReHZJH4pozZaGEPgu97yWgpTEV4RG",
  "key9": "4d6Ai9ewrpaUXKMgcdZ6aFBTtbu4x78FbHUYH7Lq24qKToXC3gRw8KaGYhrUe6bR1juRM4vUn4h4EohFeLH35FMs",
  "key10": "5Q1e3qNgtFQmgEkfZzSMLwLg64eAX3vSAtqoqNbvF5mFBxYMs28Y7ywuV4i2VdaU6Xqn1aFtL7miqbN2HZe1qSgX",
  "key11": "3kJL7uMSVXpngBeZgVR3mum7USHZaqysWDneSipU9kJ1w2MpWwsr8X4ZD5t9ZMyTbSMiR1pSpQR2qW3LwGJuxUUC",
  "key12": "5LraSHCDyqdNLcRDLhkW5MaQZ5JhifdjEkw6ouF3X9bHt53hsij5XUywAMqZKZsy3FBjuVnUdZFntmRDBJPn1Wei",
  "key13": "51H1gPZAB4PgJBBqiey95mU9j8StDq8KCC2iHgr3X7hCvLRuYsBWwcek3hikYSnbtV4GTqWZnnj24GSgfKoxpSyz",
  "key14": "43D41eJm4uRXYwkC86JkKwpeLXgDNZeR6oa71bAeVzC2zzYNzpoPexJoBzvuDn13yRNvLgZweFzJsrXJfzbe1HRF",
  "key15": "siF92W8T1Qn6yVXsB6iPSysjBLYGK9FkQ69rDfbmvvqikknAGjju5unW1ZPBeuMxX5dnD9uBNSckVrAvKC2dXhZ",
  "key16": "NrJ7t2zGh4SpcAc32WTRi7fHxPar7M6m3qFSKY7bsNttALHXYZm93Fp2TYCU61iz6zPWZqsLBp3oycygQ2boTTe",
  "key17": "3yiYytZHQUcWKWiznvd8xaBjpEDeaUEwpGK6i2GF1WAW82dfGWmHkppoVN1wXrJ8yLcgEzFMGdzAfrkpRnST3ik6",
  "key18": "4PcA9N87bZbYButtVuUTSNwUu8FLTjBvpmpZnv5BEs832gFKaj32GvsdFagoDt1Gh4s6sX3M1GHTx6kuRBeGR7C7",
  "key19": "4cozVjPZcFNBbAjEcxKMgQwVCt1ryVLVqynBDWEVCYQ2smDygo8cGTc7qRV9nJTWStvm9ZWwyoPW2xdKfSfaKSPr",
  "key20": "ntHXxpdNYCZwZrodcBADiScyMWtPU8pWJMjCSumgRfoApZskEhrytRZDfA8BoSgGgjxpnvo9CjRizmscHAxUrdJ",
  "key21": "5zD45u7GocXZsjpxqRTxc7QssFqNDXN2QvZ5fzzDUfYdf3BmZKrGq8beuXZBQgkjyNuPjtXQdFYiNsvt81dBXRPz",
  "key22": "3WmKm2p4mFbd8hwHqXPubXeWSQat4GevNDvJdoF2p6bo3VrvYxHmorm1cfm3wRV7jBv1aWjUVN41HzZzpxrt7HsX",
  "key23": "4Z1RYwHX7FdsZ185XgmcJd1Ssn4AV4WuVjDuFG7Rc9rviCL4GXysoVhhzQfYwKYShxAULiRTk9HmetpNN8FvGne9",
  "key24": "3SLw6zwsava28nSou36x5ShHY5MexAkGmkhmEkZFYX64VYt8x4R3HM6k6QyACysCMhNfdfseBZKHtDa9k6uXx3ZD",
  "key25": "Lepbt4cfLoUR19tQqn725i7J8LhezehkREH1UBc9g7wbzrku9ZGBJuNX2tFqfvgDTatk4iXZ8LXwgrpLAkL59Aq"
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
