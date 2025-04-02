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
    "4qvx1N2YoSsEEPcVPcsQC33m5Di59YWyKzYRix3gpHnpxHGxkoaQYKiZnXpVRvAJfb7ezUMJo5NBe6faE8hMbLM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPCKFmVjgbJDhEg4C7ggo67nUzuNATERQqGLcFiDgJGPaJcW8YNexJWFTraHAmueYDVajUzQ6QFQY4BB9G1sNUn",
  "key1": "5h5HRgpewonwSpwTZM1S4dDEy82zgNnTFaUmEXbLboBxMTu7gtsmgGfNYNxWfRGeRJEFX4vzAPrvnSYzcCeAf6FT",
  "key2": "N4STCAwosAsthMC5gjYCKZRhtGAZdHgPb1jYdpbGNvTnFso93qPVHawTTwnVukRePsX1HvEJnfy6qTzBKepjCeB",
  "key3": "4Qm7gCu1f6yT6M1E5j4gavUBwARa8w64oKgqJRwSd84dQwqJQmRhCDmf7bjcDDuR7wnb2U6ToYxdfWjdGdkkNhVC",
  "key4": "NHGgH5ZMYGg7gsCzZ7uyJbTeu3Y3Sme2oofHKBrEKYYu1Dnc7PiuJciJHn2yCSHJkTEjdHx2UV6hgicSAfq62Ny",
  "key5": "Dp4xWxvqkJeGcxbgUsj6wYpqSbDxZc14JbgnkTitXp7hNn6oh9iXSsBKB3w78zRzGaFG1ZF8qMmxfA9MBEC5i1u",
  "key6": "4CYrJcAVwHb89j9E9XX5VLEr7CiVdJzH4E319FxdtL6vz9RacHKuGMBC7XcnGaMv5fiFyJNXAYVxLbUDAbbJzzvZ",
  "key7": "5HPG3e7vDtH5ouHxpNbyosiBxYZGmyt78u1AvbYi59fFN2ucuGCYbHNeazVXdaw4kUTe1CEeKgKcMmiESZC6Tn4Y",
  "key8": "4JEYhGVUmPhqKc841cQSXBTx2ftPncYzmNLsP7Usath4T1kpSr1voud8Bzt88eA1WwodLpaoG1DUPnU8Hj2aBNRz",
  "key9": "2Eyx2mQrEbvBjCPbq7kfwxaCc7o7bz9xNsMyex15JspJEwFfFMZmaMCALL9awVyM4XCgEAN7ooTiVnExSNGaqZ6P",
  "key10": "BxwY2NZpkAzEFFenpQ2LEGZAMHQXiMKityg11NkkCVJMfr7fZ2eXhMMRZsGmMbqFgN9kpQLSRtJUdhsyF73ojU9",
  "key11": "5kVryUXULiQgo81kLfk45jz9kQQ83UU78ob3UkKTwzPCMQ6JnCCwXh7wbqghgUYvLw1zGJsq44bWqWju5Pdy1M37",
  "key12": "o42ttWSgTDoqa1iHDWsqMD1qDRhDU2RxToe9coAdwwxRZmWunvaUFZ49Po2KfbKLB7gW7DPsp2nsLVwt235ByVo",
  "key13": "3oAoV6u3rKtNATgEbi9XZJz4cdgbGWWmTqH4absanZJWDc9SNoNgBp6FnVpGmmzutqpaoSibJqrNaidZWn2ctomd",
  "key14": "2jWLXv66c5ky8VK8W5MB8WCmXKs8MFxBgXub4kP3GU5naPN78YcQgfuy5oc6w7xYhUtRJebXYBx2friGDB43Pfx",
  "key15": "25nGhabyyvCYRD5DHUw8j6qcw4VsK5duAXC8yW83HkaPGDsKbrk7DGGQxBf7EGTEugW64GNUn7GoukwLwGMuqr4j",
  "key16": "4DrG9Yrw1WYJ9Lk6WcBQSapVP6a3RHYk59BN5PEqGkSeU1cxHBYZbH18dbmxvLJGhduYmsHWJKmTSGCDM1CPqAe5",
  "key17": "5HRfpBvqT5hNtX1a1TeLC1RujJnN4uhAzhMdFPNo5jrpaRs6GGjxykTaEvaYZekcS1uTc3SEEoFPXrT4BzTfudG1",
  "key18": "3CphRaw8HPpwJsCiqvbApZkHR2WNrMdbhKUMErfsVFoiu8tUqad3y6dnf55yfaJGDPkBj12nbYXg9qa4hv8GGi5k",
  "key19": "3yW8UzTSPWbo9NPWUkxKxMnvuKJFYRJ6nyCESMxZSZAhmMvJrYAqyeeFL9hRBWrkEiYycnf5QwLR5MwHXZK3NeDs",
  "key20": "5i9rxBHpuZqjYWnC3hqCaTanAdpR9cuVur68LmjoJCoGitkDA4gxjSw3eLb6RkmqhGnwT68463GtGzHxCLnVRYNF",
  "key21": "xBGf52422mqCoEZUvo5y3T7vdfWdUFb191HWvL6gEkc2wQcaDh2VXc3ExRFmcMzEVuB4UmdxTLSLD9RRnCBDByM",
  "key22": "27611F4u6P5rjqQhS4ZcAmLxvrmimqzY8UPViLdsG8pYFVPW4P6yxP1S1jD65JxMEsV2hUHGXemhCqh6n8D8fotf",
  "key23": "641n9oZQ3xnzNbPAkJ7ax27LJQSrnEoVSb71eupgymrVrDR6isaWTbbBF71E8Sx8hHZEvSYaoNPXX7DmSE91Wy49",
  "key24": "2xpVChpnfYJ97XRCu5Ufxfi2R4XrydqMTt7bWiB7kyL7z7D9cQXjcsGwWQqJuG3BJG14spJHG5Q2uSoneZ4bYo3J",
  "key25": "2ydcAofEzwLaYyDoam91JLmTFXswVdPZh5LX1N55r8dNCjgwtkj729J6tLwH3zFDcFLGKvWs6VGpbnrpDQMvvTeU",
  "key26": "4HhqC5n3mUkhRNEapNDFPWUbEDv1uuYi44M232XtskVpTB7rhK6SgLowctmGySKCH4vvEfpVCXS85hzWkaKm2JxB",
  "key27": "542nixPeqP5Y5wLnidSAo4rDhcBAZ94GRcA5ga3B2tcMRBjHxUVKQTXJLmKTfCNkeSumqbGGrfk1AXV5roPNoqSF",
  "key28": "5yK1XTHAj5k1vbUk5Stmwn9mfYq4tJnABbdRQAenU3FPzaBA5ZHGz6uP8kgRMv2iGKdmhmUE5ZRBeMPZYL7hL9Y9",
  "key29": "4ihCurWhuZvZbQyzLZrNyfRWS7a5ci2KzTCXxqLiLQm35Jz2mK4Uvki8zEoZpSfETyrWWpKhgb1NtxeKkezb1xnW",
  "key30": "27NYFioYKyJ81SkfYayiSK1StS2WP3ss17vRMzuK1nrmuFFGLDxqWTqAsMBUPytByD39pUj5nUViA8kSm1kwcZxh",
  "key31": "2RWEzUm4fU3xPVatV6xvwNULinMkop42Kv6MyYMHyTtPB5g31EhEzfYGgngX5bbcJ79pbghRfq5Fzi6zh8hdrDR",
  "key32": "2EntrRwLqLzrMAwmMkmQNisJ6cy4sThdZa91zWFEgsHj7DBpVJCYDrhrBXGTjTzEYri1EPvEzfj72LD25cgz7L6U",
  "key33": "2AuthRTesykuUega8gHaDZ5izfjVNZkQVRsW4ienHex4wqyAAy4PfE4syndXTnC3aK9MvpUuStVzCxzhQdNFTqQD",
  "key34": "5e7raoVR55Cd3hP48ePD1S7n8sxZYCHCdFXoUgkasWiCmd9BJhMpQsLtQQ4n5VuaV6Et7y31dJvaRjv7D5UR1URZ",
  "key35": "KgXGzTvS69wmZRRsKCPDWj8FaNBEbBMqY44GwqvjkdWMwnHoXgyvmExhZcnjez94JEr7V8kdSbG2hVij4Cf36JV",
  "key36": "5qJp1fbTPSUgBcDHG95cySy2QiJbe3AyqRahssarmcBdg5Lzs2tqeHmmBF5NA2RFiny32DKJ2Q8ubUDXCvMkcSKS",
  "key37": "5mrM7S2sqLRjSmjdttnvCjj8dYxHExVmN8YdPPbFaYrs9Yy8GByyZxBbp6oToeCp1oWHBquwQWstPM7CVikjfHQz",
  "key38": "2E1St8mNLPrkuXLYkcm27N7s3injMPJZM5AFsoioNwuUb3z1tQmmBjyi8pJKKoUj53RhFf5EKUidjq1XdTjajTLr",
  "key39": "4qxZLDbQbXtiDLGDHg4JU5Yv9m55GYJC1keoTbsAHs2zn2Ptth3t7dqW2giPiZN99HLcQgMLAL2urmMNaoJHHe1Q",
  "key40": "rzwoNaP9zwSH257EtkZcXCsdzXGPyYMiSr6oYrf2n4peCoiSLzQ1ru3uDNEkDpemNQh9NpjSdHgdeQ3ZuFUqPDu",
  "key41": "5CzgaCsJRcoBLvdtA5Y1MySgy2k4WRFfB1dmU1tAEpZDu2qschDRh6jspb8h7djN7euYUxE45DZbFVPBuaofC7iX",
  "key42": "8x1YdvaUWzzxHXcbwbDVckU6DuvQ6vUuwBiJrwqxAxwDRzb9J4ybA9BuBkof9bnQPJahFHg5PkhAvhSyBfJCrTf",
  "key43": "5Lcov213N1Yz6U6fJtM5WmXYcBECipfuepripfmDU1vhPjbWAvVQcoZL2ea2TkK5pPxkLRagPvrniHY4nWDZRnXr",
  "key44": "5XSF72hBp4sKtEQmo4FeqqpvyWjeMvB6PXAsCYh9b7B1begstFshAb1bDahJ232UNE5yx1tVABQE7Z5FqQVt7S9a",
  "key45": "5uhYihDswsWjZ2p7JTRep3fbSSfEjZAQVQvyaUWM2uiL72EtSrUe3URPh8BE9ztsYVAVm29UfZi6izWSFDSbNmKu",
  "key46": "QzH2VxPXu9EFPFV8ecanKKvRpgRoTHtnu9EuAssghooha4JodR9e4YvsvPTjyN5pEjqbnepX8NYrmfbCXvLBC9M",
  "key47": "2u8UudrRbUZ48aTmh7naC7pkdApxj9eNcRB2K79FEdRoLqR7xCEDdeq2RgJMFzMAWNXifqNNLQLB1Pp3rCoqT7au"
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
