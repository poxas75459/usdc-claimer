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
    "3oPQicheLeXTdf2VMeKP56MDJvSJVLzXVuLFsFQwxU9stUWtiQQ6oBhacztcogz45Hb4abfyDWKhUCiPGGuqJdB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYganVEu7oScAnZPAJBXPrEga3MdkZgAssUgJvZLG6VCz8sGXV5EwwN7qJprGfsw9yDFY4ytEU1ijS37LnUmtkE",
  "key1": "38H3pEr1DPzCvsKrRPkS8GESFHhFb7qQtDyrCRidhJkS2Z6imMoZ53rNkHPkAXSUqrNp5zakFCzdQ9kRUFJPnEME",
  "key2": "2PnLqa3AN881dTVp3L7nffJzai6AYPxPVJ7TPBxmFqKxXsmhEgr8p8A6szqvv4iJbwK5NMRYYxVGUrg3CC7NGhQh",
  "key3": "3sCRvxZA6rxPHdVLjK5J7rgNTf2ntfYCqGZpYnPQhU1TuQjZpv6tKpsP4CMmbNLcyu3mZGejxTRwvjsquLDgQeFG",
  "key4": "2c1yixSgZHXoxVzEjBR4irySjLA8G2qP6vN4pjL3F8GzXNDhoaPMvyQHc223DHc6FBH6Xgz6VHPqzQEHt4AV1Aca",
  "key5": "LSxKwyUL3fbuYYJZoc3ZgA3gxdRxjHPtkTnEkpEsu4zdauPWTWSFcH1bvYy8e7W8JMHCesvZA3xske9YUBp1iTm",
  "key6": "QRLyXvmMY9ufaJbNdDyWXTTVoQPggp2wp6LjXAw5hEpHAa1SNmrzQg3iaAWQjRcH6dynmXkd1wrjncKbDNxubXP",
  "key7": "Q4p3tgyGvM13PFZA5CFrLJdiufmksvZemuxdofYpYqHQ6drEEX6SbP5ETaH874zRh1915VUnEssFGuVGijoYZqm",
  "key8": "62217reWgoyHToMxbmXjdUPBMaa1e93gauErfqXb39xZ1fP4qLCDS4X1pBwTavZ8NTA6AcQ6gzQTNg4fjb5hURQR",
  "key9": "2q3jvvfvWkDtxjXFxBbonWac8AWyUeH4VBC9n8nukXBjzdsBcEzHSmvGizrVXDJQ13XKnRWngAtXH16YJyNzvJMH",
  "key10": "32bYCAB68LAweNW1hYm7ZtziqfhT2WmuVfjWdqDmmbpYPsPF58EVMC8hErnB73baoYDQj9PaaYmPaRjDygKJiMwT",
  "key11": "5xps6hHxppDyFWkMvQ9R4SBTLYU3ePWecCtdH2sXSoFgvNDABjJN9sNE9RYqbtyDFXyLRJEg8MAy6FB3oGU1zWxj",
  "key12": "qkSRxYRpY3KrYe4yAGeBNWLvPvsrXGNN8uYYy8ePqucdpTnTgKaZ24YoausAuisH1vjAcRAw3C3ZyXU5qwbtqKU",
  "key13": "5ufSvxMLjLmnM8Ab2JinvUL5TcSbPtxuJmVjtYYCVAwAt7iLkJStpfavDnM8V6bDw5VK9zMM62WHbwiJJkAydyKB",
  "key14": "2CEiGQLbTW3vpsoMQvBQVDTeDkGMVxxe1Vy2KifJ2ZY4hwhSK3Kjwn9EJUvMft52EzEcsMcBZTaSWF53mpXr4Kr2",
  "key15": "2U4FignpCDztHopse1Hf3e2Vz8w2aKJdrnWw3JvSEL6RuzEQQzFgoEfaKNcgtPhS5hJgkdZ1wN2y79UyHdEBiQr6",
  "key16": "3S9xDDU1B1neGTagzhrDw8EWfQgDq5gKVrPXuAULww7vk7hmmGtrhqbyRWu7W6RtA3hgDoqSNF5sD9hcGJWaGsG6",
  "key17": "RzvyP6eLZCWtBNsMZQnwa4FwhpvS8qtHmmdgG74FiRKbATfpn3veAMfnHmVrSsS6MeJ1QLtiNruNVSL7HZkYy6D",
  "key18": "5upfVUUTQ1dXLyx5HdfoQFreNDKJZ2cKDdg4FGyxzx6tjqqJ4FnYzSr5iQPfojK4outtvdmEhAAEHciDuG2dbqd8",
  "key19": "wn3GUD55ZZBSpbqRtvM8M7MyK1juqcivkqMUE2GhDcJLgZAcr9PiipXR38Sqyz9JzHfgzXgUCRRiB6fXnrTytWD",
  "key20": "4wUZcBCStQvCs31vMBrXSr3ZdZfivKu936VWcrSjhRK997hYs85h3BKk2KtkSosU5x6izsnrMxUq2o4k961THwRe",
  "key21": "2qWZbNBQ5h6hXWwfJbrJeqSdWXQgj1DhEMymGq5Sfp4y7mWHy6mL1Z2gpcEPfkuCC48EM2auwQj5M1oGrLzjB2J9",
  "key22": "cxqSDrokBkxH3qNSjSWTBFbzRKjUY4UU9y7HhcAFKZxXAbiQXhn3Lmh9X5f56UbjPS93yh9ZN5L2pUokafPq1aJ",
  "key23": "2Xr4RK9Hf6KPBXQKSYdiUTzQfYJf7guJDuPVBetyoHoRje7EXRc2PNpjL4x53QJhaSi7fQAcmT6YqipZBwikFfVK",
  "key24": "4Asr7sVF3awYpfxYf9hG1zp1AbDqEYHfYJPiRnzWGw79cKSj1SxTKaX6QQRFawfzQTrxcbVv4HwGzZkHCgaR2WYk",
  "key25": "3tY9VwRT9iJACnVCEPYfEqqQyj1Hg9iwk7x6zK7MTRVKH7hCfL1fjB59tEnX3FKYkmvftKPyLDRbQXcRAAzxhFU4",
  "key26": "5dTm1QenwSZVRURSuX4yFtzZw7k3C8ZcEL6BcMHSqE7r3jS71tFGUSgMrrDmrjFtvsD9nsuMXkeTYJgp2aFNTRXm",
  "key27": "4uPRZH8YYtmdasp3GRzFqJwjkxwRoGAKXH7kgs7UKGgqMC8TMeVCiYfungT1BeniChjjkyhPmBQGZMNTB89FUsXW",
  "key28": "3Y1REUaRU9sZ14RDwPJPKvgwvbQQmTx7AouycZfiAz85pp1Sx3x7B3at8jUbvFBjVKkrNr1YDwR1uANNw1as9sZT",
  "key29": "2PzCAg2R8pkYAQw7m2nyPZwzJCFobLCmUKNcBiAjrPXfcpjCVrdPMrWSZPfbB51gW7Eb5RFiDz7Nge2FhujvCDNX",
  "key30": "3jDWEzc6UxDaHRzwCsSdMq62suZqALxpA8YJh4Wv8CrPruVpRQ3shqF7VJiugok5NJ5F1Bo1pcnGLpfpNuzB9XUz",
  "key31": "5ihqF1J4MGCWQXqwtS7GcNf7QDCXsq3c7wLPYnEBbT39ZZDj3WJwSEjD9ZuetvaJHWzu1LpSFNFfFwCHVCML5wqq",
  "key32": "3KCdTB4j7217hb9Bv4W143MzzXkp9SZsr52mY7reBxPMeUQ986qivRZbNEDnmmaajjZANDWtmRaZLhWSCxh4ietL",
  "key33": "5JatSBYwxLPbGeHoiTwAsEjSTzDcbHv6MMy9b5dhcakNUMhJioRDegKyvmRxJe3ASP9k6svyARtXs5rcigUbQXAT",
  "key34": "3KT6vM1J9XTBk9aYchFtB4QaSyt2nU3V5Aejo39oFjCocTNkwPfJCpHQ5Da2nJGZ2vz4M1pDASKAgsYFXL2nxrm5",
  "key35": "3rVb4N3mP5NRRheTKyyaqv4DxxoscKZBT6d8mEe3E1KFfx2Tewh2WmqKK1bzQFu6qjRYHf982JW7DU7EiSApN8Ay",
  "key36": "21MxTcevgU2wZeeto16EeGS8h5FopdxJjG24pYEFRAgQtUFU8RXjuu4kF9Gr1QH6wnj4MLx4hm1XXtVyvH52ihee",
  "key37": "NePhyQUCnj7z78eVkZkbH3Y7HDEz7Ti1qH9Khpfbf7n8F3ouvgBtvEBBh8hu4KZSp5ez62QZWVCihh8NA8ffoaM",
  "key38": "2EVjDYDwKdjxDnMf3CXexUp3N8iqaUkursJKoBNaaHHzQ5y6NMMtNarhPxRezQqHG6gj7351anjxDinR437jrps1",
  "key39": "5KLxoEHCRZrVuPWKf8fQDLKKAGffMvBVoxRRGrvgu1kFwyLi5HnaUtWmupHLd2c4GKos7gdADYFkPSRJwsQuRAMM",
  "key40": "58Ac7c97NZdjhtz1qwzGPkTRKyU8ccu8FcAVkWcEBsJqtUiCiEMhXdhAgZ8HiLDVacvG8UnxtnZCi2MZmF1WU5xL"
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
