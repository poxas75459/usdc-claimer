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
    "3RthXiPJKoJVcNEcxCyynMttPzaKefSEGRknkjqvuJKNPfwiqYMYDUrzf4daLxNdoZT2JyGCdvxyuUGpET7FnJ3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pFDkf9w8rJQmFgVCocHBQnQ5fd4x7YTgE5QUkxHHzCdpKUNsG9KeQZkHy9JssceDUm56PvXrwqH288TeoPxFR2",
  "key1": "4V229twPhh2y8EkbSbuDGJ3CRjpETANC8Ng7oCki9uvf6rg1vj5AJkbAmePHx6BnFNaVExaLx3HFKqG9ZUrLW9h6",
  "key2": "3nXoJh5UyZXEgamhWCsPR1wtpc9NU3r3kXuL1v2AAF3gRxyLo6iVpyejJvLh6tJQLXXx4BvKeuihS8LKx1hxYyCt",
  "key3": "2YiWtcb4iw6deCrKbMDcbYBinnv49pBMW3duL1tQQNjPcjcvzgCzdnhV5yL3hKZTM5gbbfyuc8Faecm6swhyktx1",
  "key4": "3ZkzdHzcHLzrSwS1mi92Hk4SzhveLoJi1gk8fKDyo6VNJLK6q2PMPVtzcmm4GR27xQpRWYbXpNPdeyRc2AcqSgqa",
  "key5": "42pEH4XDhcwfkCGyuQxwbJuvhV8zyL3c3KHbp6aeUmRYN38iKJ936PYSjqsz2mwgAAqwDKai77EWW7LwUoceqGYr",
  "key6": "2mrPirDMKjBTWLG3L7pNJr63Gkj4GhPB1fs3XBJY4LZRdReUn4dcGPq6UJD4eZVYX7SGZKKzNtqoWs3TYHM4gRbV",
  "key7": "3jdviMUWN4jmYG99ePXUH4o7ipN6jKTyHgfiZaefg21qNT7tg6kRhWFMonhnrnWdpmxEA2irtD4tkKvQbgdhX77D",
  "key8": "5gunmCwRL14rR1GmdQM5L9DBqcY6VSysk7mbM4BbwogjRs282Dvcjw64vWikE5vnL1JcPPe3L9s8ESsTXXnisjAx",
  "key9": "UvK5vM1oT1bzmbvFKwNu2pRiURjE2822RvFqJDaUAA6ezoYamnMbdtQb3fWSJAdkYV6f4gMg4u39HcYDuJo1wX9",
  "key10": "66g7pckBi3xvvQtQ9PJ1vbqgFM4s5kSKqwFWcWCnWghg6RXR7axFbBB3m5JHJsSi8RHGaurpyEWTAUyusAftLt7Z",
  "key11": "339KA2gMoGTcrXbe7oYSXLFsm4PbhFLmHMNWkYgWkHzqtRZtc9Ln3o4oxnHTQs5SLNhNuMePFoHe8q4yvxPLYohU",
  "key12": "3JFAcuydEf7PXDEoJVwjTYDFMEyCbAPtsbsps53tczECk6TEi24GEEXk1XHY6XJP9cUTMAiMavwksXmwUYFsUVf4",
  "key13": "513d898d15mSens8BQm66FKaoD1dQYVbutHfzXbjyvmwd2Gvf1zUzxwCVjQQmE6F6M31UeWYvufXPYhNoDLAWGP4",
  "key14": "4AF5wq5wcdew18htRwDHrTfBgndBvjRxToaNfKbh5ATGLzyhjVtj5BX8hQkEwZQToeTGepmbxdNMN4a6jA67kVkh",
  "key15": "W13QQezp86zVtVyDmcC8t55CLoNHjkaTehJNbYKQtaU55ZTWMLRA6rZQP4ggixpWaTfc8HVZ5kJr11QrkbC2EWg",
  "key16": "JU2oUnB2jGxkjD9PMW9z9bmTmrDZdvkty555aXWUJm5wiQ6XMHvGH9m8YAcZuRFJEDxcU1xgp4gnmrkXX2R2urE",
  "key17": "4tctNRiFuGGEC3EDCphsMuuXScHGzyo2FQGWwbyKbU8t9P2jhPTMEZXPYuqG6HS4rQnPTBdxVhBDekdNrQDJasfr",
  "key18": "4XvHBHkhYatw6nja7hMnZo9aBobxpRg4GQUHHRnhnFYQosfhjXvvVdNMjHdLpr2TKc9pfKaU7YqAdw6cunVZvLc1",
  "key19": "4E4NA8M3dpH4AW7RW2q35gEKu27zZNm16h72uC8S84yHdxqGLBzQ7aResLvYNkcwFSYBvfW3FkzRdh3nFh99w2Ra",
  "key20": "5ghTFDLeTN4e9P5efcwwg8TnYQsfWjWdHrG4tLjHG5KFKgoHyLAnQcUm2qb8HXaNUV2U27DgaPFnosh21Q8GUMxY",
  "key21": "51ySk2fUeLSjXeX866Xx3kKquHqwvNS1mQiwErRLjRS5yYGbJeARC9vckmhvuN4Kdtxiynf1hQuztJQRXH8JimqU",
  "key22": "2hqmyYV74P5mRmksBpYFdu2wXzbZQFY9eeZNXxcVXc7sPdCcen23K1oRDqZpsLtp71FXxnvh9LKo7aEjr7KBfm9a",
  "key23": "4YRqBmSqg71J6MaQHNfz7swqUFekQDV7dZTJ7PBoh6L7HKGWMSsQ62qdACx5VW4hmATMhjYChDGLtmSgJwEsjCqD",
  "key24": "2QnUthkvD7mAcfyeiCMm7ARQ6kfoaAKAxMScds9H5eZDNXEVD8fKiREv6GQGMdgBUXGuQcrgTSrWU7FCNDTFZRmD",
  "key25": "5K58bE3d1Dp8rMt4k1yjwWjjCHVXQjsSj4oTAhS2PcuYbUCdtMuFWFH9279tKmbg4LeZUiWAQGRKdFcgz6UfNZUn"
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
