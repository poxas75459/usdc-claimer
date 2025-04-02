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
    "2TYKmxVt81cS52CG4FWEXXgCupiFq9NiQbWoakx5EhZB2ETyTe4se9wb8S6H6cJCzutxKDsR4juzZfinJzEsApY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MxM3Qwg2ue5tZL5FmWcE7pHzDgiq6tkpWPmANP7sJH3dF3PEGiZnR7Vb7hg8ZvQvctWK8McJ6zxkVENg2JWkKNV",
  "key1": "2BBs17maWAj69bW1eT3oBFc1A2VVUWcfchoPdCoNc2GjZ4R2dby3hroE3fuMS47shZDwRoUA7J6Ft4ttVkkQNTLn",
  "key2": "3ieFUHYA9Zb14op1JUpj3xc96ZrxeiGUmHGLviZRP8hDxBmux7WWqSFPBWxyqvG8mSKrNd8VD7soYVdC6aYGB87X",
  "key3": "5iU2UA8nuSAadFMtsHRbGhcUHq47T8kRS6aWxvHthkmWocjrhSYFK7SYMnRaDdZDTMyoNpakFdVQE3ZR4pU5oTRT",
  "key4": "5oEwdVP1tgsmc2jv6P6nUkzH5N9XFnLgTAkPMDpaNrhxXWP4Kr3E1PgZmPzL1MuiZsT3LgVDFTpKdgt9GMcHR22N",
  "key5": "3LapF4VNGA2VHuZySqFewPTjQQ6crriUQ4xSV1p2ypkAwvDTxSSTNqfPC4bXGhUAwmWbxZUV5NQVtVuJU7WUoeUL",
  "key6": "5FydqevGMgndHBLCvQdH5vJj4BPEiBiFPifZw7EKEq5Bvjsb5wJBJxyD5aGef1SnfrwEz97PpnwH1ZkzGQTdFLNx",
  "key7": "4J5sgB8wbcyEgQJmSe8wNSgzbEyworDsLVdgdvnFqGvtaXwJyK3NbNhoWZWy9fcDcWhG5jm4YRrCVsNkq7KkzZh3",
  "key8": "3uKZWdpvGWCu95gtA12ewRUi4PqDXqw5NGHhuWJRNQ7SyBqemkErP11RpxKNXDroFUNzP9TEzbMr46AbjqVcAnYD",
  "key9": "EAQePAadsBQ9FWBULjC1VUzpTdY5KpeXRKD7Pki4pyiVYKT57jXvz7d22CSbMEavu8ZJtrfcD6Dho3zZL4nwuVD",
  "key10": "2qahfKGzUAfJTQyoqVcquaWnqyTruhXiQwoMsjEXYU1avD8VvYFba28xRoesDz6qaW49qBZTrNHUq4pR4zLeLchB",
  "key11": "3nHAnXVgKAznNt84vwhuEmwoSTqBbWM5KNDJfFpiUpRMcLoJkmk6GJ1QdEZDLWAZp2RdZcTrLoxaF5vkB21YT4GJ",
  "key12": "bt9LqYktv63jy9zAmKdzADfvQdThupRfVEkmodsmsHeVnRUwKgUDH71j6bLw5mTpv2NXc9gW57JUUzfLGCJF8XS",
  "key13": "55aLejkuNha9MMhwnGutWopiq8axEeggemGEpB8gPYYJWsNNdPJJ4xyAjGVrXXeuBipZzs3buGwVK9ABt8uEmsp9",
  "key14": "EL8zKe2CHm33SzvytA2t99KJ2vSa4VGEynngqdr6sqDXKzBX7LSySrVHSnV1CrHSveAgrQXB6QzadgQjmrvDdRj",
  "key15": "3NiNr3Di1n9L7Bpdz81yrZANiKUFumowRa1rNw4TNV3Q99Ko2FTrZUcSvsP2M8vgpLMETivrwNd57R1Z16JUkbgJ",
  "key16": "4xAVCtuWA9bHngzfU6cmja3oWbiht4UhGM9Coix2Bf4qF5EtugbSeV3WmnYJSYE5Zyx9AHYNhVbU1aG5h9YPgW8M",
  "key17": "2FaDYaJwaf7DQDnBiaw3k8QWH3UvTKpP8jipvnqxpLAKX3qYQZS8esCh9FSr6EQ3djDmGUsVX91GeGjEZ5nAiZhq",
  "key18": "3xvVCmQt28FxiEaYYsHVxWPPPf38KJ2ReobBBAuDfRiDgWgwnDHz3yTe8P3rAQMKQA2F9KFGujdoDeH2qC97BHxj",
  "key19": "4ZnrzbhKUn4tsmT2d1cqWXHqynf6jZeUU3dwf3SobupF5vCi4PCEw6gVW8rTw4VWiQwq42KUk6A9MHQCmKVWotKi",
  "key20": "2PTGtqQ49DJu4KBTR27ioLnrbQ6bQfYAeCutjUkZQizoANh38Pcu2cfoVPtRXys5AY7TrJdNgPacV488fAvYfVQs",
  "key21": "3pVKNCxtjYCHuCidca3mLdQoLEiyh8GUTUTcKquhULU1beDbqsQujZoEtkrRvA2kwELtFvphCxB9vedu9RhbN6G5",
  "key22": "51TKHpZiDTo3K8Lx6GMT71USwMUtgCAbtmcNw1u8gajCqE4LApCf6kqZNbk6BnQWBT463Ey2BhNBVdMxRse6RBRc",
  "key23": "5ChRZKvB5KUpaGoGMuxSVEnmyS8zHqmf4XdpBnM6GS2aygho123y9JvaZBz3nVJd4roQi4DFV1w7SGhYda5S1Lcv",
  "key24": "226dQ71RHDeVd7vRP1CjnJ7nPA55YZiRfEQDWwNLr5UXPuj3YPgXuG9vqMw92rodDEB7T4GefK2vQszM8EdytvqW",
  "key25": "3tfCK9dUe6U37AW6npVCRZ1iXce4KeNP3CjonfqMCvvgx3JuD7rxQNveotthNP5GWXRyNLtSLiahR8oNJWBXebE5",
  "key26": "2PxUf4sonugB5MvoEQtFg4J31fFAWiL5xZDf1n7iHeQbYEpum5fqwg7mw5iBkBCNbqz9kojvP5HoGeRkBmwZAccJ",
  "key27": "2tQFSDXWuzSPAxdMZZJLEB4AJSA6kVBQAEJTCEZfx4FEAA1nYdnfrLHUxR2Rcfj5gS6sMe1P7XgmhwvYFUesiFKU",
  "key28": "5X4iT6Dbn15xrBPCpxQC2LTMNEnpZ5mRw4uKgJLpo45uwbpsCkes7TvvH9Qp5F7M1YXM6rWSskqX4BQaxK4s6WfS",
  "key29": "2ixiZrSPE4RvziMRZAC7NEyLFw1ogSQ64yLqi8rs65hXkvVsXs7WYyVnEMPY9ioWF6nfqjc4rYNYP8qYGivKVfgU",
  "key30": "5b6AdGNhsrQE9wxQXHEU3NFhHQXUsejfW6iQCe33t4uFRcf66RaauuYoa2zjmPi8MuiuzKjBoKX3BeANnCg1M4jq",
  "key31": "qEmqYTfZqYLzBF3DULkx2iTVBkFdwSKTg3h56Mhmz1g2PtVvrwzYjjQFsfHtWTaiCDLmpy9N3wpvqaZJXDmqRmd",
  "key32": "3hvMUka1aAUKK3ii4bFpnKt4c8GaxaKKzx79oq2rTgVzvUviUNnqMSvKVkDac1M4qunArtkKS4M7hJLgBVZdjtSR",
  "key33": "4SvNAKkmLM5bv184cn2x4co1tNGVZNYdYNhup6mfcdkm7ZP3JpddpwAouay3UKbXMCgb63Ans1HPBjaUcwCaLfxS",
  "key34": "uad28poaqQH5ArvqsYErKUS8H7MXEJB1uDxow5XpuzJGc8kZtstHQRWS6VW4Va39qyk5WdFbCa6WuDD9sh3X2Tv",
  "key35": "5N77vmUi3C9D4AM169duSC93v6Atu3vKqXhd5akjXsoMYsWA4cUbM5Yx9tHBFN2HDDwCvvk53dnkx6NuTsGjPz6t",
  "key36": "3igetun6jVzTFRhLBa5DXWQbLeA3cgLjVqafAKdpUwiGfv3TZKnV3nVQYZRz22aVau1wTccL5WFMAzXqvToMo5fs",
  "key37": "5JjJcMeBAYg8sQVhBTrkMh2D4spCzXVAEX7Z1uskwvL6KTZkLQL21nKJsJP8rCsU1hfYuY16NAxmW3TdndVKt5xu",
  "key38": "5MCGkQJRySmJMGLQDfD5h2pLbgNrg9PoJBVvykNKLzhinHii988rmo4rMwc1QaRFSAAV6RuMy7zH9GLxQr7MA2sw",
  "key39": "3ibHF2HnFQKEzkuabs2VeVL16E9gMJBMhDdRjxsabG4ssV25Q48pZY4ihypRWh4NksPhMLBpQdbo9Hy14HspGg9G"
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
