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
    "3TZXw7n4J3hSTAzxqQJVxuC8XBdgiBDc54g7f6c3TGQ92jqUcEUSX5t5jpTDFXMAmW2bZ3WKsgmH2ABtA1b8oRYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dTASfpjg8rsqFGRho5nemQfqGXqJmgtsakpFuECCNQrh1jVeg8xutRi6uD4YBWwm7DTJfgoh5FSYoSHynipFXNb",
  "key1": "3XyiAiprSCDtbJ3coNxdSWfCs7wBn5afnWZg8oPVx2PfCW3q5R95SUJo1Y7y47oAYAA6Y2QBm9VcNAxLPy8mAxem",
  "key2": "3cjpND3zn4PJzE9cefYuR6PdxFvsUZNSmNtgAJsuf5PoB8TCJmcNiCjZJXG8J4sjs8u6RJNhtu6fwkBKLbtgPZwa",
  "key3": "3dtuPDD3huSd2LdGgf9NrbQNYqRiJ7MJnqcgqpLjUtUgBzNGmwoytKu5wnTNsufbFiPVzBM6HjjtEaLQA1mR5bAx",
  "key4": "2dbKHCW8UsYZuDASzeUW23xFck6XGiiHf5fBtg87NGTJF8PZxh6TqRNhwa7AoApUuKPBixDpAGPx3bBdxsAoyJb",
  "key5": "ArnKod6jZrnopaNXSrrfxGKMd13EsmAiiyVo3dddqDMctKo2Nxps1b2nRR9nuzFkzvrTjLXwPZBtzBPc8kVfShP",
  "key6": "3DeB8mkc2G9qG5so571UouCbbno2EsUK6evTEazYhyNCdUiWkTZdRWVoFnhgYv6NPc1w8y8B9k4beSiLTmuaPVTH",
  "key7": "5Rw41Mm2cai6eM9yKx6LBNURHpECgHuLszu9pcupCWE51DfphpAMtJLssgfueSKMggXhDzZAFppmAbyn36XJ5U9r",
  "key8": "3347tEEquAjmEwDzbqHpgT7D9QRCtBKcVbRT7aXjXm6TUfCtemPNfH57ehfmyAU1bDVWD2jCkn8p9NWJKooN8Whz",
  "key9": "2LnejxhXy1nFcDLRSsfGLR9NvXdLsVWnGWeebYxKpV9jFnkJMZiCLfh9vkBYvx2avLfKfT97XroxXoww4jjR9bF9",
  "key10": "3BkuPWz72cbzBT8ePzK9fL92GrdvLt5GoRp63oYxXjJJVmKpxXuH95fNHQvdvndoiwJSP8LTevGRrctct596TpZj",
  "key11": "2sfritwiCy9mgghWmPPepMup5VNfWaJuPfsqmsKEALBHrNzirhA3ZbgxC77vefq5Jh1jQDCmLhayU3Sn4m6UaSaM",
  "key12": "5TqvSFvYXo3pgnuzodyeq7tiNdy1SVw61ZrDCNznM7Y574hFFcaRQnZrJigGU2Rr2ZHZq2fDNdpt3JuQzpkYd7bA",
  "key13": "5LoxMNXMNSnhW9W6UfoM3RsR3CarH2qUYphxSnFfJZZLMnN4cm9K6ovoFcpcFS7sRpG3zN8nrH4bxZe79yK4F91f",
  "key14": "5oXKVFvDso2zohQEzP18rT2y66TkGpffuVZAe9k54eUqhptw3vfyCbdkabLyiicJBzGtcykpAWY4hGXyFLWD6xGS",
  "key15": "41Yktao4akrvsJA9bGbd5hkTZT8KDa9GFAbsg4CDTA7MmuPe43R2fb3SHmP36KtabaXuyrqsMzbj1cfaV7ciBArY",
  "key16": "E8d3S3Fkzb51Pschgv6pugciq5Cz1kWR6HYvQJXsX37V41QJEM9gjK3qrnXCswZJ3SQXKiyqFnr78iDzdw4mpe8",
  "key17": "4vyZ847v7o4nBDBkxs2orhLfuAgLKM5BCFAxEM37RfzMu45nHSvodUNjMChc5712U8MbTWsvcED9R5Ly7Pj22pQS",
  "key18": "sHBLazrAdHxK11tWtSnZH8SEMZEpHRUbnMbwQvyEK467QmbwB6RARp1vrFrdk3ZJLRBDqx9HDrfNmqMSna8QT3f",
  "key19": "4m5LjsHiHVGutBqjwQfLyrHcr6c8B8Ke1JGHrmpUcUuXjPScGXWKqNbXPv6RKueSLW2F4Knfg3qn3S3k55hFDT64",
  "key20": "2Wb5Y6wyL6EaLnYNkvfur5BzLWqrdSqzQBrHxVQ4TPypgVksMGdoAPVC42yuCQHrvGeLdogdLFswRcs8xsrsoxTn",
  "key21": "5vpiwrjvBusiVGpNxGNnjxCeFQ2PZjdhmMjpzeBKuGx81bQuN9SiyFNbGbxGSHxoGP52LnCjd3w5c7qkjXkHcDxc",
  "key22": "2tK3ZJUayLHHkcD4acZxrShmqxDFQTPNmojFKp8k2XN9bCKWwhnHpeYb6UQUKJf9LA73vNX9t4NLBSLWTEqwXuEN",
  "key23": "5upS29RVuPMvN83aq7kkq1nGCGCM5bq3H2xv8tQHKkPQYCiLWZw1fTmGY7ExmavsyFLaeg1VZAwukUAAyFPG5yeM",
  "key24": "rfHRP8pt7Uikz78mJ6AQNaMfy1WgiwnVccmZonULKoms4dq4BMBxewrQqPRjemL9Kg6QJyyDgxZLy6y33SEC2F1",
  "key25": "5MwqAKwgRoz8AwDrnZciKYvkvwzDyshzZWDh9cLoNV8TBKANgGVNde4Y3ZVy6T1uqFnVXG1WoC6p4RwKNB2sdbeh",
  "key26": "4SvYo4Yj59qgxKTu6fRhzBsBVLtqAubALfjpu1HckNoZx9smNyCc4CguVrZ7Yr5JbkbmDUX9xX15o9MkhCBuhxP8",
  "key27": "nPEHBgQuJBEtSmv56FHu3BPF6swGXDjpu1XAhoSK3knJosEgBP4ysor4kU6R8RTsPXMy2pL516RFErmDGMvk1c6",
  "key28": "64E1645mpUHGT3sfMWZxkzoECKXoTrzn3ke5rTU2aispssBFfuAL33CTK9LCzSmaGekTQJYuutbSKMqL4WNAHL7X",
  "key29": "2FYoYaPeDLyVxuyW52GUVSUu6eT6UCKFjduBSAXwdA3EMgn7Z6ds5LuZHtduyC57odKzEw2qMGcCj3Vicafn2F4N",
  "key30": "3Fb3V7o53yDCmixuYbPhHRwb2gUhnMz2ttYNx1XFEnX6DEBJDBxAuvGMbTa4brtrRmyEy1JCe7kbKpvuBAPAV9Kb",
  "key31": "59WfciN2zDS8Z2qs3bXcNbvEZvGR3Bev8eKcfaqjpn6KKqRpKz893EMvHHeNuCVxrqtNV1eR5eSM47yKSUVSqgew",
  "key32": "ANQ6Ph32G2xQwfmk9fbspaddtXEJVFX9FQBjQJr4kV9UdPipesYvHjtQunSDmQjKy1VBW6MXVugvpYRomS7KFBg",
  "key33": "3vStznEkmTnfP2b4VpkymJPB2sCq7Z2M266dYt8yeUf65S84fbBjqJwGXRif8kbGoY5BMc8uiEiCBFfmMaAZkAy6",
  "key34": "4WvfcE7Q7y6etfZeWocEmDS6bZfgpJExcjMezvNdgRE778BA6qwFV657qAA4oQxsLEFJEsaqk28uqX2vua2UettY",
  "key35": "5bmuJs9XPbe7wZ5rzf12MGoRTBrav2YZjU2AVcXMLtWzwZ31GHkmSA7u3Xft3jDUETxDdXhFunzmEfX7tJ6a6u3a",
  "key36": "5ofsGDBWAqPKRSNq961RrD1UzjiQYg1tnP2k3Qh5EmGykxZ9Ah4YLmVpLm52Xqd6FsQeG4Byao2nDewAjSmavYqg",
  "key37": "3aiRLFB5cRMLPCvdmxhGgDvtbgcBPgQxtCwroaDZL2FfVhKoiY1jBXGHdq2QoSv98qP76wdQZu7cvynWvkSuB9hz"
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
