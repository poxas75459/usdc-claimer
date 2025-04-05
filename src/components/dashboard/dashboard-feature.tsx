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
    "54moau4GWwKiyk92fH6JCLCkTdsizbmMhVxTZFxEjZcHEi3QevQMTJw6UWj37VaoFCM7ycSbUjiNuN21R7TEbKYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mD6dpaSuy2E5RcUtmoVyF7YjxsXkHobRSRw28S7d9pLqNNRnuCfBQXiFXZdV4ARkPAoTd9NYovmGvko3BFouPW9",
  "key1": "667FXudzpVogFMwoGPLDz9C2mQDqmh4ejjBCNS4za82e3RnCRg8c2bhxNwr2ynECoaoErzWyhuMRcRcKMwTBSDs9",
  "key2": "2FUDVsom6n21bET8Y5bZ85wa2HEdTVFzKFadCzZ1zvu2pQw2fxVg8q1PSgDKnhZ7MCmWv2ZANS6yqMY94Gz4xxVe",
  "key3": "3LaTcrB96RFehAGicz9KocbaxKGSo5xsMYnT4exbBKpaFtiZktDBSEKvz1SgW6xxxBezqPYjxtM5Knh73y4C32fu",
  "key4": "6RnKTbA3cALuX1oNJntYvXGz34vMScYmQsWdMRygvfs9HN6ZuNgr4ScvDzCWcZxL3pHzYcYKWackyzHtB9sYHsS",
  "key5": "65aeAkP8npFeUC6nbUoeUmzMVxHN62jUssy3owmft5oHJGsWFWDvcfsriLZpBgVAZue5oR8LkMio6eX1SHTzQneV",
  "key6": "5GBepX9hnXrk1XZHki3jYFSVLTFiLWEmy1pUVUXTunV1KjhVGXWYSPqVZQkMPyrzufWPYzyQywxvs4UEEA55HAiv",
  "key7": "4QFg2kSW6qPN8bxPaTMbavqHnn2Z33WLb8e39jujxkHbCBQcDmhCCSGsr4Vxjuk97WLu8akXgoCqedoNY1hUk5rG",
  "key8": "Wtw2J68GR9NJZ7ynHCW4M2rnDgAuRgVA21G7CEWDXP2cKzvFwziAiWbd7RQtPMnh3gA4GoMZbxtRVmuNg2GCWaX",
  "key9": "3iAL22LpFQhxXYqKicpvoDsrMPNvYFoh8N9KTJBR666AfMWniNw3TaZVURLVc4gGSovcszhKbvpQdb2kjm9y6jxb",
  "key10": "3i5LQ3spgnqZQJ5afPkUu6vjfZ4pmgrd1RLFqshfPCYT8N7RNCtV1mAJkgX17UFRzyGfCQE9NDrJiebcX4UBGc79",
  "key11": "4g1jQuzF9XCRZK6Xc9kFzC4RSPAHJMgRbNYBreQHijzLTFFhaNqtcHJy8hxmN2uq7QfnDGN6RuhVhLTubqiK5dkF",
  "key12": "3ZacXStBgkz42LF5Xknvz5XjKku3dwK4wtASH44G6WRJwpdkNNd7UnJMyz4rKAFtS3DH1ZTHb7bJvkEVWGq75qfP",
  "key13": "485Wc1KaycqYpmBj2Rdf43S2nPCiW44SxZb2xaZu8dNLSVruCuZLa8xLYzkFJameVKCa96EecpNRdTfe921SuZuK",
  "key14": "4aUMxfHKKJ9NNZHW8ZmTz9vqzCtgB91oWJ2xu2kU5CR1YcKdMbvKMsbXMyJPxRdn8Vb8vDhPANHFBi7jsCziVDAT",
  "key15": "bFsvpgE2FGVL6VSKuRHDjpPc9bsvLNKojRegWxacHxFtThK4y1bCTwKPc5jP52kmheQURAuv3xytZpPHfTtb2yC",
  "key16": "5YwCGfHwYFbeL7dPsspDQHBu1dW1mHq8bGYw1jtbBQca6W6AJ9W2whsGzgbFJh1eaZNaip4erCbyZvDMpnDDG8Zh",
  "key17": "5ET1WVLf9FwxgXDzXBM4Fsc3P812FjpqXiWZ4ZJe14UzEkdupv7CJSRTEdiPi74PtAZFt3Da4VHpY9ztoLoukaYy",
  "key18": "3ibNApaHF1Ho5pcHLPQB1EJdcT6BWqKAsLFAEQ9Mv2MzWeixSnbscCtvFKtWTQnVLskE2zroJ3w74BzHsipLGZhT",
  "key19": "2Z7n4RszscyMqvuLJc1LVc1hfzDgyUey6qkrMcQ7fd5vsg5zR3fS2EiYZPu4fevuF4q3AKiAGThjNgKX4wBCxTZ8",
  "key20": "32cJx5nLHA6q2HPawhmxFjp9m5sn1DFZZAVyd3uNV15KX5LRaM1v6wz2V9gHqBqKMDw1VWnmbA7KubzBYQCVHNwv",
  "key21": "2YHy3RtjSfDkEsAvtB1vNGdoeyYJ7EASm2yDN1hcUfSKBc6Vr74fQZzB5go9VU6Fd28Cy5Sxx6ifFUnJvaUY772U",
  "key22": "537xDpdvn8YZ1YkxMjCLnDMcn8NyxHXC7938ia1x5KmMi4eqrfwLggX8TZ1AravzmJHemwaU2Lrf6EdnUoMuvBSM",
  "key23": "4VMeGZ4hXUV7JyFgkmP6gxkQWNhMMYb11LoNgo7US8KX1cWyeRArwuQhvDKuSnpZKthRWZSVCS676NpqaPYWXE6G",
  "key24": "64q49bShEe57DcFWR4KFPQ9x9SuMGHpUMRNUXo11mgTD1VqFDgAiNa431PqH7XyVnzTx3aEtyf8Zsvm7aE8K9C7P",
  "key25": "5LoMqon6U7yvsD2QoP55QgDBet8jVfnbERVAFN2gaMRwPv1fQ4fLqaiXzsWVjH6S7tk11NrjupZLQzDcfZxbK2Pj",
  "key26": "5zbA3YvrBQPfAvaMLhogYf2Kz73dJMvFFAmU1EQB84p4rBPJN12KDw2NBG8ygJbn5BbeDMV5dkfv7Q7FPD5cWa6e",
  "key27": "4s6XFcjWqxUWPUkVJW8Eb7YjXNbqt75WmS5PL6339AdkPwmDFjJCYMXNDc4g9AoFdc1RuT7kCgAXrM9s2uaHWMnm",
  "key28": "44ug7UqjNRgyZnmAMveUm69V82rWUXwkMAEmr7giRQFHKxHChWm7D5fWTsjKxg5Di1fkHEtQBWBuSqLcDVcW4SBn",
  "key29": "i4BqrodDg1CqNqm4VLkQgH4UabiMbugJinDHg9DsUtYHkwbrgvUpxMx8JSytpVB4DbJ4GvNqarXBZ2AtLLQjFok",
  "key30": "2KN1iZqhXDJbZkvib1iFtxQEmXhh34efheAASyEbE37zx3vw8RREz2JqQ5Jkg9tbdFnedEHhhS32Ds38QPERtkfH",
  "key31": "3hvXJXMkxPR4mUfqs2m1BHyCJZCEQBVJptAmFuWGXCNNk38gZLdGRS7z14zEdmGbgkmddGUnBt1NiGzG1kAynUea",
  "key32": "2wGjRYTCmFxnBL9esWNisyPepYjWopR3ZaWCYVxQ28fMBMBasUAvhSNwUtcrRK2rWUUu1qRSh7Dz7y9ankuXVoy1",
  "key33": "Z7erMRcoybaVni97zaarAWf8PKtR5NZbuKham7D7dc2tx1otTu26XS9xAdPeo1wm788QMqcN5ZkcReKoZtjHD7e",
  "key34": "3DsMAJdLBKoRTVEEucYrxrTU9WT5gGrkoCcXZPUg2hWAzeMeYsp2FEyWQfchT9Y3D91Jff8icqfoZSrhmENvTwpU",
  "key35": "3SpGTTr36kHBSHtfopAHcqgJugtyhJkfo36B7Zi5P5XgSbsPgNz4ivBCmEHHpY9b6DiUmuTVuWvhDWRcP9FeiLrR",
  "key36": "5uYGGGyum2NMgbjwskDNxy5zYmXCPThMycV4nn2sdyU65z4TdqR5B36zEu2PWcJhTQSFR3PimMEqFFAqU6p9oT93",
  "key37": "5iLwZmccJyPaxBDmJamPcAb5EdKv7cfYn13WVqXzeb1rphSWYHYCpQApJUiDW7wtka7U3rE9PmT23AuWu8J5sXHQ",
  "key38": "2tk79ny42s5u1sqTaXUbY4G74pWmMgzLv3eASadtQR2EBXdbTEd9BTuN2yLgfWnheBnzxC8gypvWXDryGJ4AXSZH",
  "key39": "Y2LmBSqRScUze3L5yZLVnd9frdcoQQwjtSfmBfngxicm3WbQ1VwDfhp22MxQNPhUkQxTkgH51CYrwAi234VWJ9P",
  "key40": "4CpucovJwRhTRLwrCczkdsVyZbxh9T6m3dcRgU2Fnpn9vHm5pcNV98asPqQN9Mo8VfsFSt54JDZTn1J8XHjcB35b",
  "key41": "5N7r5BSxwhrEdWaBE2T9MwBrbfcYTPPjhLSgbLZ9KqceBdbyQi6CvTpSP3VJ8xgSoSjxfc9F2CT2ambUgyDdGC5o",
  "key42": "2LmLbGmFqmBsocgBfvGfNeLhdASuCdk4dLHzi9h9dQRBxcs6L4Ger2A8rwpquADZcxciuP9d18V4PypXZFUSJFAC",
  "key43": "4TJD3iR5sEYTRSVpdiYHb8vvQDF6dNLenUMQ5k3Fdg2oWH6TWc5nkzKHBSRRf1F7x1VsBprqx2ZpUxtoREgYToWo",
  "key44": "5MumJwDFauDu6Nf5U9hh3QAoGraNuBxRweLncmD4pCF2JH2QnZeSek4q2LtGVa4mzCYVTcv2gLiHtnNTPw7p6fj2",
  "key45": "4McCbpe14y9HJhGynp78W1YsfSsfmHDtTqjfCj1X4WnwE7KqeM6mCyzjHNF19hKoE9YkaTxvbUPCKze8AvPCiQXz",
  "key46": "2UFVAC7D8rK28SBCYGSDxda8FWNF2vx4djH2agiQCj9ncy9veMtTDbGoKr2rothL1dSaaegUNXJrER8VAWSwfUmh"
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
