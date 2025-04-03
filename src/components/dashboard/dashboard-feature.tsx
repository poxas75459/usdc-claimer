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
    "vYbiNCFHwrSXT9Cm34dqPffQR1AN7jeuSCyScEhSZikuRpKw2apXKoXDRYXxV6pGbCUm5F41iwwCaQq8gt5U5Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DgRkVHi4RBUxEkyAVM8QxKGZhmGu5X7vJ3H8BB5zZ7bNgdZVwsca5kPC8cYT2ZvALmufw4yxm6DSJS6rmE5dYv2",
  "key1": "4qfUUpGcJbTR2XjYTjizgH4xtU5kWQypCGsD9Dgq6voj3TbUNVnkibCk7mgqC7jHfg3rN8XBkjQGPWWZipkoG4xF",
  "key2": "k3KYaQmwujtogYgkuMdFE7VjJn7sPhzjzrHrEtTLtmnr4mYz592fSDBhtckfP5XBop62veGsf9jc2fYEsyEBNxo",
  "key3": "4iqbSaiMsKy2cyx7AKvy7V3qWYF4UD5b9tjSdZALqc9LaoLF9cLSDHKW9GfcieEsGUxyyovAqZkAJ2KunJV24i5Y",
  "key4": "4iczYxRAXFWscvx44vq6XLyrbDM2DaCh1PUDjNc1tDpk5Xk5tzmmvnH1ztpABerkBqPFu9jsBdLM2e6mhoqotUui",
  "key5": "3MVaVXThgyUqNZKYTuJaEbVHZfuyKJE3EyqGufPsnZ6Bah1cgDgaiweKeAZ3RDuKqQTdk2cafqCcUpJWpPn9ysHw",
  "key6": "4BgiQ5tMfbnus2E7TGicT2fovv6fy3ABBA9ig6QyeVpBxEi1YEi4ihZvtV3UN6srV3MCw6PcMuUbvFp554swEKjd",
  "key7": "55adqkjKvaKzjcz45hNJGMUcn1rmfiXn1d8XjMvYEJPUXe76vCLEcpg8w69Dgw3x7LpyPLTKyq7mpSj55ZBNMc5j",
  "key8": "5qtHtZrzjJs18m4j9YQmP1snYVNmKMuov7MD23uCR39rnZRjVXTW4p7YtAP4tsgQQAE1pcKDPCYX7LtXdH6hFt8V",
  "key9": "3DhzHPjzjMityQLTPVb1uBQLg2QFRgudiN6YKhuhjDExvPE6zNVRA6HkW9HFXqdqb588yZABCETEthypXiXVYJoc",
  "key10": "5CjcuisyHAKURq7xgDv6NM2QWfnNzqwbz56Gy6XmamWnGmLUT54tUD2gX9P3yfWgC3r3oaR99n4LmQGCNJQ4efRe",
  "key11": "5N8VXh7t7yL7mhtqqGCBxfcMpfk414jHx3sViLWRg8GwhnPh8886zAcsXzNb5HRaj1MJgyuuLDVr21WxvCUqAVsA",
  "key12": "2mtyYQUQmGkEKRjnTbevKnqvLGn5WCCF26FHk2WtiGr6PRkPdnxUvw1SRvh4DibrbVMe9opHEEswhTBuHA5DfQqC",
  "key13": "22QskRWTUNDPymcp7X11zWKt2QnQQwh3ueewTB9xsZtbDopbqDVQm9Z2XPW1y52FXu3ShiBbxTLwmPAgaQs1RDiu",
  "key14": "24wc3T4ik8GBoBMbqEXGcYF4ygEkPNMbKvmDsCGQgXfwDV3v2Nn5oZmMxwWD2qz6K6Ddvq8wwHQYwzNNtgpoRU5q",
  "key15": "2f4tFmrrNpx9KUb79sQgvqCroKwpWnqkLt8RJJ1335EFb645G4bYMq2gQAsHBnnoagyDzr3Wz5dRQ3HbhFE4goQK",
  "key16": "3omY1k3Q86PMRUshXMtNq18p41RdnBKsWorxVvRWV6APvN1dab1DZRbv9kBoygWjdze3pXBKRrLxGyk8hdDfcPRV",
  "key17": "3AN5jCGgdahH4wypi3FRiYRMKf5CpCuzUYYQXdKWeScGZ8FWw3tWX711vmajfbfAEmUFG4zKH8FVnmcefJjPdRJx",
  "key18": "2jPRaeUBFjyu8LMVLhoY6nZZ1nQWRC1Ksn5jus6YjxrVSr4QiXi7VBMgAztvHYNq8iTiyHePfBpU9Tw45mxknxkJ",
  "key19": "49WwfXMDpUmQQJ3BGGBUK76iGXueG1xoCiKUrs5gXzDvcRShHe4EmBTD7pMEAXdiHRa6SC8hDhxShHifvQsJKNwG",
  "key20": "4K6SXkxhKmssdALvfmXSmwVbSF1duN5wrjAX1AK22HNmCJXVysZwXYehGHrpP1NrqDPXPYn6FjjZ8wXXcrhu6qdu",
  "key21": "4P2oxS7fkSCojSDxBnXPddYJCej5KoACBpNjbgyR3PQadKr6brGeM7mqKTFww5F5kmUJ4WtzkyAqL7Ns2GLnthKT",
  "key22": "biBKcs6YtMShwJhNwRqao1qg1BNcnzgdFgYZqAiPxSXyEqaBtQvrZJyUdjVB3fzBsj4WEFVALmxg6uBc3y1Rv8E",
  "key23": "5Fo6SSyhmz58z3NKKhgBb4zs5Ue8xCYTweeqbMpZLmgMEYSvsYJ6x8D8A8HsJc96kKHFBKYpqTx9rxxTumeRe63Q",
  "key24": "Z6c3pgX7x5H6PfqNeFS7UK5iWEr27mrzh1E8PYyRBtx1Arryjv74pQXsNXpL4acac6RGw8ynwTb3coXaTjc85By",
  "key25": "UJGxFVyNWEEw45df1eNE4R7JCEAqqJ5RXADdpNnY88EV7tweMyii4eusTukFk9STRxCbPq5LqDgZY7ESXgJgbMG",
  "key26": "8w8QTMvChbcsZSxPHGhs5cMg13dSuESJt9qZqwtUD9Ciew85qVxhVN65pzLNx5NM1BkLu8wKQzk4hUWGpyYGuHy",
  "key27": "37EKVmjVpddbiJG9eBhZwCCXUjRzTeaePJFYT5G43svZLf84EDWzaE3HXwFUgMeVMPXvacUN5wNtxCHv9NSTBYvz",
  "key28": "49iA7yvhCNTRGxcC8dYfh7qq53KjZCQeA6GfagFUwxyv9uY562d9nKKPqV5PbC2Jt3ScxMv8v6PpYdSy5e1qg6ay",
  "key29": "2RU4dTw2jRsf28rfr77nfA3c4kpVddW97MgHQKzAaiEZpPzQEyKWQk4CfWg8JyQSKukkDX2jxkhba3oLgCUkAt2X",
  "key30": "3n1EttghPC5q1bNoBGcFZW9nRgqCR9m4FgM199YFau42UnU68vw7V2BfG7EwjUxBpRs7hnWf47vN43hVvKj9VL8W",
  "key31": "3T3YxDZr3muqGkEuHSHoUSQjhNVMmFRLrBG4HLBRzhRh7wVDzAZbvQLZqv1NiJpQut2BMupQi8wvwQ74rVcDVmb2",
  "key32": "5FvJR4yAbVjH5MbgFE3aLH77qo8aXnWGazzxWNJ3bUEyttm4CXRVhWFjCLdXsBqpHHpYr8D59cjnKDBnHC9KbnnW",
  "key33": "kqLWfuUYJQhNmzeh9Nb2tcKD8FMERXQkZJZFpJD2QRCygGr4Gv2wEhhCMr4WRg1nHoVn6sNvNQxwJeZBS1TXdf1",
  "key34": "5hyEje3bvTi3YfTHCzdCpj5apDbaBc2uj8uTbdE8VaivMEoJjx4VEPkb8HBeT4x5DGXPSzjDLkvJX434XwwsEDJz",
  "key35": "33FsUA83Pg67b8TnVCn8iWByGx72M1t5UzmLsts4TwpVrt3WSnL3ahRpwAp7unEfbTYuRWYiJzaSi75JdhQrkcQe",
  "key36": "2otVCkeTnv5q8chimfYYbdVzGmd8Hjoj6wg76PLqw7unkYe6bz7iqZovYLoBe3M2TN8V4GdpjKEVUV4Ci7bEmKKT",
  "key37": "4C7KqNQQnasCsx22LEeqsEc8tTwEezgRSvSgXMoJpxygpm6TsnK1qP8JAjZFqE2xMxPkwe2RkooE2R1oraoRUQrK",
  "key38": "32g7JwXLBsDXVRuYToAhkzUuMPo5BQs32YByABUaxM1vB6Wns24G7iNAX8q84gaAJoAjGJyng4LcqeFPUJHkPDmR",
  "key39": "2ZeCBrmVvFDcf9KEfuGqkc8tZ55hjcpb67gDCnwHAGy4pu1Zm8SKkGDAUwZ7xTKDbxFcRHj3o6pMroYKqu457g2D",
  "key40": "3F5ziynbVQW71HAdv6aVubAzpgZRmkJueyD6WtnMwEsQAarnX9JvDD9C8aiiZc95bPymA73aQHwgL2vXFLwJyst"
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
