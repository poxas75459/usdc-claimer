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
    "5mJkaKG6UAYA3JabDJgtZwMapeoan65tZBQjvf7KuLBx8MKVoGw31UTZmWhhBVdpBSeXgsneYfzcqRpvdA7eGUrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxceFRcHh3wysswydP4u9YydB7Y7rv6B4ashEymTrP3a6zFD9mM93xSExAxZZKnqA6N6aZ8PfYXXZHvEza53wm3",
  "key1": "AwPxySpKnbUGSgbuGmW6fHchgEmnpPySJBCgoF33VbdZ5bVk9cWrNBB2yzsmPx8x6xper8r7etRJn7bsRVkmmC2",
  "key2": "2S9bmFp9ZUwo8hjQUzpaJ8yb6N13QJGcqV4vcvbnTgv2ed9AjphFFMxKQ1M5ePhMe5SpKiGQ2Mz8KEafFrzDutu9",
  "key3": "uTg3YfhLQbuWRgB53vkwNAqtyJaxa9xxbxJNFeHU35J7mMVbMMCTZXh3fTtyvS74nAwVqrApJs2Ly78TPpvpSSZ",
  "key4": "3GE5qiZcyUL8cSdgmEX8snETaGXq6U5HHAkZPb7P5j7ip878gCGLNAPe3RyV3pmU6nXEfBFKyeShawgmE4ReWd4D",
  "key5": "49cobjaoEZhaK8rc9wBvmewqzJ1cZyL9zyEenaVi4cTrBd2Sg521JFkiiL7JpQ2R31k7t9G4zGPBimLDkEN2CEpE",
  "key6": "5FgZtA7KiWVRZ3n9W5eas9uaARC2txdcKFfEApTAKd4XyAvn6TvChgqbWYYrbfCjgKjefzKgB2RBLxLYcJMsSCNU",
  "key7": "4tAqow9cB1CMHr8TkQFrLixy4BVenvGjcauvqby5wsmhP641WGbjY7j99tsTgkN4CfL7545XCH4uVxQG14BrYiPn",
  "key8": "52nY1mEkCDbGU7naFaKzov5FtGgvVRcXyXvUqR2RMSyVr8xbgBB5UgQZHmkLWZm72VvsX536rQdXUAGwXsW7nasR",
  "key9": "3MHsMoB6uC5EKGwdq64Nb47igVfnFM9J9wD8GkQ3iY5rWWYVEhzPB1kGdcPsbExwA9T2t7T3pqcHciwgCcafGGse",
  "key10": "5uN6B7P6NkCzMvHuiRLijSZyrXJKe16BaLhDTiqTyBkJp5ARpitkmdWx2BHr1ypNmvWuU1GJQtkPYeLKRChkdMed",
  "key11": "5WuzksmSG2whtpwVXXfxP4HhnNChoh9gXK4xJYdM65m9jQd5h9XTuFxNr4vPMy7Q7fjsgM7CPjXQREo7bWgErQsj",
  "key12": "3Q66rEyqLoP3gfFrhLWsvEosiR5qvTPMucX3hRpa5FphmDc7zFxctGj1AAXvHL5pRDBAs5Fv3hTvBB29tumx6y4n",
  "key13": "h2rGovQ8FrtWVZES4gzW5ZBHVrqF9z5THrHgmRPoVSmaqTmxz1RmHumBABCf8jXwPcmeNHADGVo5cuiYEb4NUQM",
  "key14": "2JhyjQJuCa8HQCRnjHqAFawgqqSFUctRfzNk6pyfCew93nMnsoXNWjxKoLuwR6uPMV9JyUe3h6v7iUEcv2LiGJhF",
  "key15": "8StTNpQj7EaCg3JY59rCPVN1AB6TdtDRzvNAL588TcrfCkD125fMXo74iVMWaNtuNmafW1uWwJdh6cFrnxT5Mkg",
  "key16": "unpaiRPVtaB2dX2fyjKi8aYzop639yiStQD513seje5oeURf8fmYpJfxsQYvieKdHN53KzLphqkrLLzWREAHUiJ",
  "key17": "5zTBJxwdHpM2GpR9FG2MdTSRmFogBBiGbuKYdrrHfXNeWnCaheA3bKDEkF2oHys93Y2Z6YvqiAC8fQ1bjC7ZQSDD",
  "key18": "3tdTa6F2pCemJmGZWogiiC9PJ6SZeTdjkiSUYP5DuhjQB443yw3DwSMYxTpgVXqMdEdAZoLAnRHptQDnoZGRtNuV",
  "key19": "5H21D11m5tH9dYW9VurY7fJSTe5qbWLne8UC9dzfPnkCXJbzcxUgbP168huQv7FEqSChXfH31dKPebwpmquqzcBu",
  "key20": "3Z1AvtDE8AzMtps5CwSeyRuTn6eMJr843eKeBDSv3WVFfATbPkUV2ArdwWQnUjWthyef1TkjXafojRhJaWY6XSXo",
  "key21": "5XjEsV1vYrTDM1LxfA8rs6J8y9jHcqbFkBooznD86Q5Dk3inLBFFCfXcofV4QnQiXagX9meU1scR6DD8CDG4YSUF",
  "key22": "2JdqiWRJD6SsHdEDSXGWgEPVBgYnBAbhqGvXhZXpntYN9W97HNarcaFGu7yKBqi2Z1cwy87HeuAXv2D1HjMtc1z2",
  "key23": "4o28pmbz2xvWUL6ks4Z2USSedat7dgU7sTfFyFPLjMaF8XGHMrrHkwB1Vqiy9P4xkXykebcHi3ryE21vp1SaJ1NZ",
  "key24": "A1rGr7zaYRWWB28N5YRwofPhn9XnxbQg34c5LCLiPXQUc3x4fNrESA39GMh5uka2oJzJ4oZUJJEoQ1adf6xDGvX",
  "key25": "4BDDtfAZv8YRdqy9PTaW8L7RbrdhN5dBNWivbdTLw3GquVLwr1AkBKZrrEHejcv6eFVwBbB7bU9FAfEbNCJ1JbYz",
  "key26": "38LaT5vjiwJTaVoabatpqz8QuJghFSd7iZZc5cCQGrPuoPBsK2pKMsyWtZcAB99PU9XXsY2QenmPzSTm4nQsvogP",
  "key27": "2Xmxd875eJU7bcbMw3DKVNThutUALQdrnRFqfDotuhP3vJh6h3D1U9aerDPGJFrVZPGQtY4jzzzhvcqufuHUQtqv",
  "key28": "2NmyvuqMVc7xrj66PbXXFGv5oaUyhaF4G77s42RvCNjvjEWqigTKUyRGxd4RgrPcf1LbwQisAqnAyQj1AiwqcJMv",
  "key29": "vYgVdJNuyLoaDN7FzhPmCcrpfhaAE2EKytWKL7DEtQV3dWN7GrjcgHEzFhqAC84rENDvRqzYhtJwA2WoseMGH6j",
  "key30": "zcU9sEDKEUsz36vV336xuEbvFh7zcvBUEvBSaCVVArToDc3ygrxC1pZm4Qg7wLz4BYecVpqQ4QHR3hpa2Yrq2kN",
  "key31": "4oF5XHGMVJm1waTCMFyYwaH6zBZvQw8rYQpVpnRi3DZaQchamZ63VdcQd3P1Zgufqur8hAVC8RtbXbzFPe7Y26GH",
  "key32": "rQZXVFpCzyg7MhXYrpXsHekTsr3DPyoqrqMaraMT3qVj7mq82dm2krCJkopwhAGQPHwLsbn4Q4kk3M3Seciujbc",
  "key33": "3nPS57uCKJgyGPvNbKo3Mi3Av6DTRTD2LDMAtU28N2ZoSFFFVHGJBjDArv5KGHpV1yENnQtiBNbNHHbP87tSbUzd",
  "key34": "3Gax7zodsh6hLGZ9e48TXcoNEFbparrhuYSFQhUEwuf2oMGNhRkWTDFYN8x3Jr5usg5sXfNWxEMxWiDAE7wxGQvU",
  "key35": "4aZPMkGenypnzcjUEGSWwBWwCzm2KP1fDDFTJbbGKFbhyp2Jnduc4XyVWgcgNm97qi4xY9EnUzpGhUmdyKGPycmg",
  "key36": "2Cbt6g5CMkuj6AiiMwxmbkWgWKwqH65AqjE2muQhJFv6kfyvkU92rKd5CJiXBThaxbLGEmp3h39J8zuaa8dqhR8H",
  "key37": "3NqNfepz71mYY7AKQ87A9dhzuYUxg9o7y26foTknRRECtPnZ3SQ6QzJ1peYUy95jKKRX4fVktqMMqudJkbaA2hKd",
  "key38": "2VsMqC7RQ9E5A7Cr7Epy7GemGbWD3ztsLX9Xhww9wt1MrJWwPdmcroMavLJnu4yQbkgvromYcc3n64vwB39JGFnK",
  "key39": "5pDyRAxhG9Ab6iEBAHW8yktVUp8UqnJ5qYGYZmf12GoAQPzvvdfBNmv6ZTZKA4dCA6U5xtv5itx9S7t6ZS13ygxh",
  "key40": "49DntW11foH9vTwXPuz84wkJrFJc8hjKnmFAeZo57dDVZ1vFFFs8x1m1w5Gq7d2atWDxuoHxzdxJnkgDHwqvwGNW",
  "key41": "4T9of6AdpVZqc996aY3kTJQa32vtYm1xCmwpSuNkqH2LrAJh3J4Z7QpDnNkq8XR8UucpSz1LPvW6LDqetxXizN3",
  "key42": "VzTnStMVweqxLAu42pxmCP9K53NR9pYiuKepTLSfxbYa4784Z3pB1UB7pwuzMpePPBtfTQCXkvTBYQ8jGE3nsqz",
  "key43": "4fdYNNbYgaHnsj53YsxTrZ1EWj9gcxbNeScyu39DVxrUxZeZGd8uoPDPmwqKB3csEmVvxxpP35HEbcHfY8CKc8pm",
  "key44": "5Eo9GHXyXu8qPAXMqNMCxvbVtbUoNgRQ8HueTRss5RpfMkctqeVToGxkvW6S8R5ER4F9QkViMbAyQhNDzzUPMux9",
  "key45": "2XHn4bSkaHN28cSvWMChYFA6LqXQCoWWtY3wE61i9KjGc4MTEP2cfAYzQcC5TK49wHUD2UE86fqESKNBSureciLp",
  "key46": "2GCdxLghYPVS898KRqrB14vemmQREuvemSUnKQkJw6dNvUTgt7FaySvN4cybeGXdvm4hZ2DrUb8zdUjLZoTxEAjj",
  "key47": "5tCnnfiDMUSTFdpwDDZdS8xG69F7zPBT3g81GD7KUp1hUPjY8ZTznsPp3ucDwZ9sESquSQVFtcKQFDmJvtE6p7c9",
  "key48": "47UjFNyp86iu4S5BLpU7QKjPx4SkhLhGsmH8wsNpW7tgwMhG1htMnqTrLLmJgS7v2DFsb1WbfyP3sCgeSUqQTfuA",
  "key49": "3VM6Miniz1LWgoY4nHQHdYwYhrkNmimzaMuV688tegUuwacWXtQaJC365Z6zr95GZrwiVvyXdbt53XNiPbfPeVgH"
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
