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
    "4x1Ppnkcx7V97gZHBgW5NbBkfBpw5YvnAkyWw7NnR4GubdJ3FS7mP96GXDo1ji6GsbMmdr2zNRBdkpnWS26HoAcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aM3JjAw8Kx7A9m97rNPvZhr6kbJEXY2bvNdWNY1mmM8Svkc9d7CpM7HrXGzXk3QVbYv3SXi9LYg5juULeEEPnU",
  "key1": "2WXnPcFUuUH9psBGzjr3SgJ9RARmLGB7QNp7ScV4bSmZAeBd2zQAi1vmZ2TKnhNL7dZpN4TyDjeFTsxEpKQ5BF1Z",
  "key2": "Gx61wVdVfgm88CiCXh7wrk9sgwfx3PunbZxYB1a17HjcfZU2dcChs5AdviaY5PzgLSdFkAHyfVgKsEQs8XrVMMu",
  "key3": "3aZZ4wuyk4F5dMCRbN9NQfBmn2GHNB5xcHzzYc5fftAmECX8cGUUK4Boq4QGxfztB5G7TodVeCVFfV5vbsWVHpFz",
  "key4": "5o6YMYN23zNsojgHFBZDgMQrZXZyKZQwXgQQuH5YoYu5esubxRm2bnVb7Y6DdG2UdQUG3d1NV6y16RrSWqnvEgab",
  "key5": "5RZM7xrEuFe8mFUrW8BGqQyUhN9WbbjxVKC8MiyTL2mZaYbP2THmjeuqLLQ9EeYFtDdSy6FhW72VabweWnpQZChg",
  "key6": "4KBH4TjkzSsHt43FmWSUbvUybUaaJ16dTybxGBnnULXtC9oKJfkeMbmXuHYK1p3CvmYDU5EjVQUgJx4PfVB9Jsqs",
  "key7": "3GD3E7914ET1BUtto84DKRHJydcPCJdLSahNmPgfowdU25XeAxjCLn51kKTEahN2o73A91BNhUgcg8DK4xuN16A",
  "key8": "5xMbGAgpYyqm6cQZX8VsHumrFY373RWYtFh2oi32yKHnDfWoDnZDHf3eh2uQky21xhpLHrufDZX6jxb2v7na6QGv",
  "key9": "4mXEv8JCxLpTbbWgCkahjVAvNwhFfdr1WfuS8Rqh4JEKNYsyf9zLgeWS6ywMLGxQx2AYxysx3SBoWju7xPHPKZfL",
  "key10": "4WV4m16k2cnwvtoy5EvhKdtRpWvEr1bU51eLsuqXYBD8Adqegh8TRD2qP95nAsETdnoLb3N3hoHPfb8hJbPGvcKH",
  "key11": "svZzhNUE7AZFMZQeMqqCeQUFrL6pqxryE15nrPWaaDt2hnA6QRKP4ybwN1ssNnsKCYSHj1DBzdDS6W2s2HGsGtY",
  "key12": "36uHoAtd2pF6PRrbrcBEc4eXcVxkBnzLh3zAXCwsVYMuP5qoquKpSpFRiU47mkEtrpBJuWeHQm6Rs1vSfbcZamqJ",
  "key13": "r1SBXQTjwf2eqrSB7ad8foyCvMSrce8xL1nuhbm7U8J7UfBGuzXtWvbuYiwrVR4yh3cWpjxSrK9Xdg4W2gCYuLL",
  "key14": "5QaqC5BZazq3ScNv4g1rkYRtQrU2dZ2oq3SBYei1qXKoufu54x49zextmpdCRr8zVvE1LH8p3uA6mnXLPAuSQHKS",
  "key15": "3d2dduhykXfefYY9ggjkURL2EsxkjLcdgyrLawf4szNHXjxokChqvvUcLcAizmK1ZYjApjpFMQud9qEoE6AokecK",
  "key16": "29e9uBsfaggzk5xShh8i2vhtPWtNusveVruzWfnfnyCzPhLohr7MTb34Rnqh1hpFHxMUCtQsL7nK71jVBBfhQD3F",
  "key17": "Tt4DyuoQCWWs2qXfVBaDiiHpGgPd8N2k57mBPmFpxgSsbxnq5jKR2jspK8tP3bHXzNu9h4bS5KsZSzvvojzrKBS",
  "key18": "uP8Zbeimq92m16KgpSYM7G72ZoVTVdRKn2KTtSxwfH1yNWcTFt7iGDi3WjSGVuPdnNfbd8N4vbVfgZ9dH9e6MgX",
  "key19": "W4QXb7B25Abrbn6g5r39xhbW35G563vEbNtsS4EHhivKywEM6EMdGxQVSaFrUh7qjibJuDy5vJmkHPQ7t7XBRmS",
  "key20": "3ctJGNbH9NtaYZyw9ESMiriaFMeBj58yknKCV4MaYTejwGmvhxYN2WLyFWp2oQBexDcEbmx9ZDEx7Li8Q1BaRQnA",
  "key21": "oCvoaB45QDhDr3Phyb79n7WfVc8g59AzGyDgzParthZZK26apm6SftzFVLscUdy6kkmcnp9DXkeKiy7dKGAr43q",
  "key22": "2gEjuvANCpLw8Pu85iSgm8raqC7oorBzFrsNTmHfJ646ENo1QCDJ7MjhbiTUgzne3mdyNHG98zsGErCJmZDy7pVa",
  "key23": "3VtuXrTFbKXahA9Goqrd7jRkroNGpc7AQ17fM7MCXXcRUgMRmWPDCXuPBdftU8BYBimf9LL7K9RwZws34cuXQBe9",
  "key24": "36KAty8bT4kUgvQFFqgsPT8aFPTzpYeCAe8j1CXHUHkXvWSDKP3un626L31nc9vTTHehJGuvdGiy2eaWgcEsYd8W",
  "key25": "65FEW4HV88ZgQgr5kfMJQLtMEmvCCGRZ9NnsHHBGCsWaPP6hPHCoK1MhdhZWny3pb2Mdghro5mwq8S47Mrxs5nwS",
  "key26": "2duHFxb7yoJ35YRn6XaS3T8vUhEAhX54djPHv9yUuYKty1Ai9C2qfv63bHrr4ni1srGUJAQkTzNEji9RWjxPMv5a",
  "key27": "48Pg1pfmtaPbDySPfumSsMMPAXoBgFX8APT5f8D9hj3j4wCvaaHb6Yy13ZhBENs8Jti9zk7VzmtEtBMSTMM7SuVn",
  "key28": "3XFj4uiSW4y8anUYqnhJjuXAuU4cqnE62WSKFRruqDkWgRK1CvYVD56iApBTZQ45NL2Vq2s2fz2EBos71HvjPv86",
  "key29": "3BxvNvTjNyALbM9hGAdszzdtgpcT1bhzYbDpSuHC1A9sv9gYhL9ZQGewixn88vx6G3yvEAJHRLMgixUnirhf2cvd",
  "key30": "dw4NmGi6bCrd9TapFqGgJzv6cid8B6ZNQVxKZWcLhmCDF27LVB87N1aJ44ebsqXzDoT1zjJN8fBoJmv144WEGpz",
  "key31": "53CJNVPWKcEyfCmRunsD7cQfzBkfiDP98Hk3ip6QcMKkVTa67DybqDJnXDgx9hDJrYS8pFoL2hMpYXiWGaPk9MLc",
  "key32": "4rW7TCbw7Q8Be5HHS39HmnoJSrWAEcHGh2eud4NkDA5QgMiAxwN7eGUaXjQJNKPYNERVBGVSBpQKz9zDh1k1w7Bh",
  "key33": "3E1aJERzZejYdAU54YyCqUNP5921buAm9EsdwjPvv36qWeN7SRmmRkmcHRyBWuyXtz9uaiRB77fAd3ZgCtNXhF8N",
  "key34": "2y6bv1n4Vs1WmkPV3iAa9poCRP7iGWpxANqceHAb2hZN5H6czLduUAw8dnZdsGm325svr6ZZWm8SdN3mNeSicDeh",
  "key35": "4j4LKGFcfFhjCQgovBYb1LcfHQ28UgHYLbZAgyZY8weYPcESZcZDn9C1BLRkQYhvikGzPJDx15MD6Y3Mt7LioQ66",
  "key36": "TiueWhzeQWs81EefziTXHvYvarTP43HBmLKRzVhruvuzJ4omZdzqvDichn9K9V91684wcRtCzxbQ774qsGiVHNn",
  "key37": "3sVoZMLeCVLFCbzpdWf6wa9B2mdcVudeq9MMvLJvwY7aSegzdJgFeuoHyDDnqgqxqc1ZY79bSNnVLpfXxgWTgJE3",
  "key38": "3MUbHmAqJ6MpYmbonuxwbZ6wvKZXbQNip2YjXxkWKziASqrpjFVGir4fE7FPUttfM2r4xPknv7fprqw25n7XwNnA",
  "key39": "54ZZfmunYER72SQNWQ2Pzyx62ENKDSGNL9DRceBgmEDUggkCbRUBk4H1a9GPyRPw8gzCnZttpYQEP4dakgVaHKs2"
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
