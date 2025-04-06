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
    "67hHdzTxTsn4KjBFxQU4xsrQGzdMinTPpm5XM24nFLU4byy455SjRZwHwcZkLsK8Rb7HZhm2wrfo2jNa389hajRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3E5GL4RaMpXixZKhbRkLbWqVjSA5C9FHMBs96j4Xyvf3dqck5szHKkwwBhimSmGRNXykuzy1nMKKB8PXLCd5qF",
  "key1": "5pZm1KAo2ecKkSfCFHSgXK6BWbK1r22fcfArin6MG6aQ8gDVDHcPzufVoMYsswbzbPQ4qhb4SWr1qXqL15guzAyW",
  "key2": "4qX7pVZTmBBCuV1DypRLkjCbLbJwyYvtc7swEK6DTmUZrtBu9mDTdxmser12GESsz5ZFBav6fYaMdf7XTmZBfMzN",
  "key3": "2YXSQ7WHsynt1LD2guqmuqgNs5CnB6j3ShdaAv4QCJ9LPAeQuaMQWhMyDriTkdMWoJouQEQMWajUgnTTYADhUgWE",
  "key4": "3hrQR7oDF71Av6VVfga6YotRBDYatNRXbsixXZdTMuzjNEuERXqFV69ham5cfAsdeFPdfZz84ZosQrsMG5nxJ7pS",
  "key5": "39aJua5Ysj9ZVBZGD88bagTuKA7G45BFwfNiuC11Cgtg8o25ufp8sEBrjruPKGmCZNeUZq5Cwhf4KaxtLhL6AdmL",
  "key6": "56xkYNzP5diH4FCxP1NEUAYLxQe2RmtvV52gfCejxW3QhwzRbWSVLkUJajY3KhgnxNuuAUgwQt439ybrG9AYkqo1",
  "key7": "64mty8eidFRiaDE4GnDn1ynpKu33cixR7HMVWD5J8qcSfxWLKSa62PxdLdHR1FzvQ8b3NP1sMSqvUiJVBJa96Cgr",
  "key8": "2EdFuhyidn1knPUDphfxpGPXH4nBc6jy1jwVunBfMgmMBdC4ppZLqWzfqHCw3MTEqL6esAY9AwnwfMFQdbwr5UsU",
  "key9": "5vyHqWMesxJHf2urGaxuiyiN5knsadoJciRP4kJN955J77PsjmFSR1yC9ouFhGVUXxCngTETeeHXqmgj1NZhLbKt",
  "key10": "Amn46NiGv2SeKzFfqC6SitHrx6dYZhTi5escFX8RrwuxD8cMbKPoBQSGvTiQMwRnsmkT5g6UWmD2Gt7iBqyUNUU",
  "key11": "5aNh5FmZJEN6Bf9Wgd1Vx664WzKeiNx75ACCbqA5vWyH3UpxytNSLoipYVku4abBBtbPYviWykakEnMwAEwPY3ME",
  "key12": "4Djj7E3WzZ8igdx9FrLPwpxcTTaR52GnnXVG4ga3KyRUnmQtTsJjwvujoWP4EGC8fgaX5ta3aZFwoxYp4Q2ss4Ju",
  "key13": "4gkNpKDxHqC3CyXZHc7STEfiQQsR7G7hKf9Q2nBj56qDogDVS1RqfbnniMGphiwHDFFZFCdAmxLwHf9M2vgzaJKF",
  "key14": "126FMz2n7F69wfhmjib9nxvDMtUF46qvL6hfbUrVYRGxG7x7bs36RmixSjHDiVkfyP1JJP6xroKRbJhriqsQcrHZ",
  "key15": "5QkXJbFjLv91UPGkkt2b8Q9wGeiewmeDy6saejF7nj9sibLXoc4YiHDs9arb9KdXAAVGUfM7Dmbcf6PLCp4Lpvu8",
  "key16": "3SNfXmXh7cR3ZFg7VPAuH9h2AXHzxTG2yEKvtxAv4w6oAcYuRsbRxMcYAvX9nK55TN2yBnwz26PgEKsvdaYkTn7H",
  "key17": "5dBL2bS9nqjaYWUfPiVpcP9iTP6psmiQcVoAqbPtSLAHqqU27zspCSosZk9QSwd8GZeft5x1i1n6yYoCDbkbZARt",
  "key18": "3EwcfcTpkFjbFerxaTGh7Qvcd2gLvRb7zuKNXchNFH2uq5SKGjyY26tZLWGP1PFz8CUENPmV5FbfxHqyuogtGsBU",
  "key19": "528TXD9Fx1iTwUVJkRugx1UaVJif1uuQRWikoMg3Rb6avGWGvxKnqZ3BnRLK6ikRmK3kdFxQ75F9xYxSw5C3Vajx",
  "key20": "GjiaPbNdTP826nP4fVTUc7hKjmNZWP6CgVgGMkLQS2njzYMRzSHzvvUYtAzS79TMqXV181sS14cMU1LMA3NWJpe",
  "key21": "3zKxnPjYLy59uD6ocS36NmyWMgtSnu3wQNpdmBZGEhmjLhwF63EKVPHm6ffdNL9b19PQptR74PUhezwPu9SZYwpL",
  "key22": "4JjirYLpHep7fxN7V8gotLrYkdYQEiTnzy9WrnpXtXQHk2QrcohcPomZaSgyjPaiNJrLGuTaKpk5asH1BxX6xBD7",
  "key23": "2gpzkvrap7okLiujCTepKDymRgNyZz1fsFzU7JYafbNp9YMZcUhF1kDHfwa9U5r4vQcd58M7Da8z5QFyW3fdvfDz",
  "key24": "5KfZDSd7xJ1uHNfhCpKxGz3xsP71qDAdPHRvRtFXy6dSrUD8xKvCD9aEXynsSaxGWcC7FtRFcPjnUUv9YLA9iane",
  "key25": "V6hfYgxyW7TxnD3XrVfF4WfZNe15YGG7Jxiiae2RFRWisNCNSjg1sSHJBBfqgBwY2Ug2FoqqVTyokqJ6oY1apn8",
  "key26": "185f5iuci4c1MQCtVEbN1bBbEff3iMyBGKpq1ANiXJfZ4PdeJHRZXcWLC7sS8v2Lu8BAmUPhnfXvvkRY1SVrzVT",
  "key27": "5hgB6sMjWi1RQWSdsXX4WYd2MFY26oLhRt1MpyCi39tVahqBLjZ1YYi1QQSniCMZ3iwUXkAHj9Wc6YAHRvtPLsXL",
  "key28": "297XTKyz4L469A5pgotVjQhChEhYGwcJJXC8CHdKrZWiRS5YVgzBTh1FEXpYUq5hToBZHcw4Qvrd7VNLGKabBXV6",
  "key29": "5NtbgshgLkaPrpB2MEiffajj7sbFZMMZq2p79UgA5DpPqPWA5pu1Xyrh6ZqNMiiJaLtzHt3xAhqxgMnEZrtzswqH",
  "key30": "4ar16Mc7PbvwWtFQzpJdmhxcwkKthZBpzTY673XJTTrpQkAcLXtpjALRSx45G1xhgoxSoWURe3i7CF9UQp652LVw",
  "key31": "2smvAEVBU3Ut1gE3oRESrGgmTWA5BGNBC8rx9EH5fDi7CWmJ8pG8UySHkhPYGpZAcfRWbzpTcqMipyHPxPn6Xqok",
  "key32": "5LHwxDfB5LL4qJokAbDpuBv3hkyRTykfHXGPozpPK7g9BpaPiXUuDAWQxdchAzJ4GhLnZCsnpdv23ULVP5N6BuQW",
  "key33": "249N6aUrL38msyLWTidbqnF4kQ3ExQdZBomxx8EhMdyvwB95pV2jfsVu7ysHd8T3ENPQEzH18oUv2n1ANfPxdwLZ",
  "key34": "FjziWk1YqsMrvjN6NrcNFi62mHkzVYWCZJCFjoR5rTcNGV3fknadpDAExVWKZKzmZvG1F2tfSia9Mu1MJEwYFes",
  "key35": "3yZNS97ZDruudcG3LrDdtgQ1Cwmzr3vwaUn8MUXvUveQ6TwZVEFXRrJEf8mo6aHK5yefgPCUtistri57d9v9u3y6",
  "key36": "3snjLA8daKbun83NNGLepFNxZaVywawgyRB41UqvGjzrrQo9qvAFbhyeMeaQp6fgxy55BndbdwLbeQZAUHeoELQb",
  "key37": "3ZrTQ23EjTMdtB3UFxR5xg6vQBxLEE3zyHqoCNGQ8qgP5gsN7wA6HTrGG5b3J4tB2zfeCdQR1HEQ3TpWoV25prAM",
  "key38": "22pr481HHwPmLFA62tDGfvJC5MXhfUNohRCmdpoQRma1maddNvxmpkPUEhWcHnoB2Dao7yTdyudtoLcNokJGiZHT",
  "key39": "5d1q6xhL8xJDfHewcTotXRdDhve2KfgxZAdKsG9YhdAAzpyEhGqJngtHxcrJhQZgJCvW2k1Ave3jfhmR7ChwuJPb",
  "key40": "36c5yvqQa3PBh28nEyFSN8phQvLS2GnmUNWZPc34gnbP4uj4kFbSAED7ydtxDkjN6nVUM1rZE8G67r8BxZSohfUF",
  "key41": "ASCgQM5SnaYgPqBT6L1AZvou6zcBs3VHvtjBSLVCsxTc2S8EAhM9tP5T84YgBzCJRHUEJidurtW9gb8nrbenZ7B",
  "key42": "648QfEqgeycUuZ9abNqL6UCTrXbMueVu8JNUQsPKfSZhCVjzN5H5ZmuLfMd4tR6JzfzJCWpNt6u7GXrwGQaQ9VUx",
  "key43": "5ishBsgk3iiE44BBbJzFzPMZRahBTmZNVGzs1eMKEjFntcv4DAZNrYKMD19ib6F9K64S7XCenE4WWRQ2Nfy7vNdy",
  "key44": "5ERFvLsQHZCHsEpUw7RsQ8QvU6CjAHkQ2np68BacqJtqin4YDXGhEyPjQherDseZcu8VS7Jrv2Lmt6XHeLAx4H7Y"
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
