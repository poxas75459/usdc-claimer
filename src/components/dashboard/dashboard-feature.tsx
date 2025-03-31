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
    "4sXpKvLBw1y1RR5ZHNj3uXJPu5x1JMwmkDam2PkurH9VSUZHm2jcGRnWM2toQPT28S3TssZkeubXTkX9k7CzuFxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37RLBTKkbKSPH6dymhVLPdMU3UATT5eeojT1ca6bTULo3pU3RyzPCTxXMu28MMQSJtuigydwYXmJuZqruNF7Q89t",
  "key1": "27KBDPFWdKC5rrsFboQFcTh4wPQDSPAFeehw34nzzBpWJxHDeDnzCG8zfF7LR6Tu3yV4ARA6dey7MkNcHcfWDvEd",
  "key2": "3yqc3n7XWQrxaFm4QQ5tqj57HUBxfvBdkkMcQkdzAjsgx6V3PXixcSZimguHJyt6Wpo86mFENQ2PBPtmEUxPydja",
  "key3": "3tZNhLkK7uQBkiN8cvMaCnFAoXLCZHDQdt4zJuAzk4YHCST9ucARidAwy6u3o1HS1AjweAaWhBLo592nx7fJzTZg",
  "key4": "5ShtAUfrqoaQaVRh9bbDHUBY1sz2QZ88vsDbfkdiVCjXp2aHgHGMi78P4jZyRNNbTXMj8JtfdP5fvEpmyttjefZR",
  "key5": "3Uc5H8KRrEh86JgKmLUtXCibpnPXfg4RNDP6NZue5SmpdYh73A46DsFdCnk3Tc7DgA7GS56gtRNvvxYLCAjM33hU",
  "key6": "4WyUdtv3QNs1QvNu8X4VKREZK8ppFCGyRCqwYN26t85DKjrsa7WhixEEBavkKMtsemHbDQjkB2UXLsY7Gj1okpPZ",
  "key7": "5FZeg8TrVokjVkw7AYr3vSfEx2bbTibckfnqsW9byZZdLGZbQicEYddyF6ZAQLFjFmADmWkvSCbjgtqXVj1sVzFM",
  "key8": "5Ho6wGR3PRbjLFYZbj5fKrAVNWzV8f1pyweXXRfP55gSt3MqdtNEHPvD6BBb1h8wsAPxNDAnryGDpqfChHGsvZXZ",
  "key9": "28svYKmcw8YPVLUF9G2gNGSbgGCQnwwQzyRZxDh4nHTLQs4dPnukyFq58zDxXQW4QLuMprMLzkWVt3XvKS8NJAeX",
  "key10": "2F4un2MGPadf6JWKLBnDadP8PVrCCgZKMqcPK2JC1inVC2shn87NxVNq23mB3ZP1tE1tb8fbZJNo8tr8ghsgriDs",
  "key11": "2hARgsjGppGhFYVoheoTmKiwMAz9RLeWHY24kehdcSmnzvCqrYZcLCkn2PAQR2e4QAyqjhzYLcEWJhaUUSETWF3Y",
  "key12": "66dDGSxjBaJY5tUfH5gtuw8BpChFLQPZromDUeMwtomkfSSGenHmFLysMvvfs1re42Atj4bj4PRmutuZc33ihHXb",
  "key13": "h7fTzQYAwKDDJuNm5ed2Tb3aqFnan4aZJRFpvxy9ca8oXe9U1kPkXPo9EXEW8avvh57qfdFo6xmFxwKH343ZysZ",
  "key14": "4oMHEpDUTWjTQp7sC7yh9WtWXdNyXMcCNBjQuHBdN2YMGRg4jK36MHtY1g6Gv1rXFc225cZG5N8UHZh9FHBLC4iW",
  "key15": "2eW9GTWDH9skgR9zrojWn2uBRy6zF6xmEofX1c3HqMtBAb2woZrZVTXwEbdrheCycjvdGTru9MgCeVtbPwXdbCZw",
  "key16": "3nKpZokAEqVj5unqwWNo2qFD2JiaeKE2kE3CdGdRombwZHBEo9WpGJoXMgkLsaKVzW2FZuwB7ajn2T5hyiPKBNiJ",
  "key17": "A7guhuMugHHM9hgGv24oMJJ5unoUVGB9PiU4FcHACqVZUmKtUMhqg6Lj1QzFaR84LwcegbCzcBdBwWrt5T4kwGp",
  "key18": "3JBiPH6NDCMXtsAzJxhL5uvQxjnoxHWQjF2apvSdKrL9rEdopHunkApWmXxxCTuji1kansUru4bxZX68buiuMy3q",
  "key19": "2jFmh344vuwoxVj63eqFNPHyK6U9hnwqaw77J9J3SiZxrQPwygDJnZzD6mNiEGm8UfecqwGbjjJvrAAwJ9DphpEo",
  "key20": "3rqSgLqXSEZLWGQ6qHMqMMnhVwkTevcgEsZjdVaF41bDDesZTvecSDWe1kGDdtCB5fzi8VSJZ54Qpu6TgVyBue4b",
  "key21": "5M2k7Chi1HR5TGM43L6Rhv5fcjeCdkFvmSunWto2qGBDADpQnoMtVzgnji77gCUXypWC5mLYno9zSxG3x4ezSXcK",
  "key22": "65hE27MBu9MqJjbGXx9WmL2D5pejvWFEbHjjeF7D9cu1BD8Ye5MjgFdqCSPrtox6DbGbeZzkjzEk1H4cfzHntvEy",
  "key23": "2MDfjhebNoQLz9phVfRbtapLNb3QSZmu1zRt9xpx77Mpoo6sYXfxHXyp6pXYaXCZuJFAYUPjNcDTbQj3FTmwtk9H",
  "key24": "3FJFjmNKUHAiLjhAqAckZvcK3dcepiR4fPsuaWSfY2CnS4Hdr7hjF94min3aoxbq1MaXD5B2ieyniGd88M8X2JyJ",
  "key25": "5hhC9ArYH7PAGnaCgnAgJNZSwTopGvshr3YyPVb9z5hFHkm3V1vKJYcf32E7YNV79RXJ1C8oxQT1TWdb3Hs4P3fg",
  "key26": "2hf2Y2XT71hsFMipAYcvecB13UhAUTfCLNGEz1HVKS8zaQ8YNEYZgbY7Asyb3D4nWuiPhvNyB4BWmiwGo9MDoCAK",
  "key27": "4aFAxadnfafGPjjBLqMotp8YAq8eSTBBwjt6VLAjxM9yZCpK2vYFxfTzanhWYqZF8HYHnCA1Er7Wq8Sm6dkJmxrL",
  "key28": "252wsfcbkDJGJHLS4iVo4KrbM7fNSTSzDaEWPUbNGvzceAysTK34q9WNbD9dE9x5nuUeVWEXfzYqHRUfqjiC1iRP",
  "key29": "459wocEwbyW1ftV1tEaYWSktHWpKVvLvCRwpQFA8i8SWfV1tiBj2iKAs56zDWDFBL5rRRj9gvMf4jgqMU54YXR3U",
  "key30": "2Lw8GUWCCyhCBWo6cvVEXh99GncjnY7Vj2agiX68pSgtPA9ZTKt461AHsvYau9KAZSgvr4yAJ9JaUDNu7ee1nSVK",
  "key31": "4toJaRuQLfERzEQcHxPfX6yBUQbwcyt4FXrqtr8TjEn81oK7TXvV3N6c4jynGQm946DHcDL3rfa8m1qghQnj3pqu",
  "key32": "3sS2vT1kPyhgy3ejwbFGixtodj8xNLCwgU1PuAYrbkxWS2NdBzbP4MfKCNeAvB3qDGuY3fCf7CEAjd4cVKAEyRcX",
  "key33": "5gKgrHm7Se2dQv6qbpSmozmykWeskuF2bPf81WtreAhkpTTHUWrUFdbh4FRtXJLXttgQj6DeSruU5dbyLKEbZQ8j",
  "key34": "wNW4Db32TSj1EEHGzamurZ8GQgbyBWa7LF1RLUny9GEa8TnBRLkAvLdkxy6FqMC18h9189qzsXwoXWMDisFx8JM",
  "key35": "3MH4nnjLbFdSiFeBZ57hogFCo2JVwX1Ue7EHDpFPsfLoetTy2yRD7KsePJT9JCX2UrC2pNr1a2nsu14T4Pqr1NDp",
  "key36": "67NvvjPRZYnQSqzvae1g3RKqw8rZtbySSzD2hk44LtS5rumCcM9vDc5Mbxgsp7zs5G5g7JuuWSSCWQfWSiWreJDu"
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
