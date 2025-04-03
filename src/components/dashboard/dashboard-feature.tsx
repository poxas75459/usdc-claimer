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
    "3pbzZKtxs1eQdBafeCvqHB8vPjaJeVBreqfQiTDExercgKSfRtcBei2ByoWfAskLJzyTvhrZmHGA8QmfhJhbnjcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WbnnmW4jitSmSHUNGsUNk1iqLuak49zb5ar9cfqtW2V5Raev1fbTPCsPmp6evCvYp7CH8tjD3Bvn7eBSVEwvqW4",
  "key1": "3H5dei8aEUsPRY7ZLGeKY5UKv6F3Er2TSiw5cvEsNr6aBBvA6eVc4XFowXeoeX2duVoUCmVP8b2GqXNgX1WQNieN",
  "key2": "5neqi4XwSqevRfS7vKiTKKMf22msm6rhDqwhyGtPm7yoLAngnaH2no2To8pN32VHxJ8RLCtgzT5sNr1KpDSozkQS",
  "key3": "3ttXULNUS8X62aWM6uejqLPo6QLGzaqT2cjubThvKg4pHoat6mifsijk8MmgFgMkisoT3gj2Es3e6P7NRgdtnec3",
  "key4": "2Y79YpnWCGikm8SXnYzbtw2Srcv3oDusuVdnEjK94ghL5nbyJZyFruwxrLizMzq7mi7PSFFgZQDaNVfwJEeBonPR",
  "key5": "3LHwpUciTzNFJhXrawa77vp9rsipXouKHYFPon3vXirpNdnkWTseQswE6QUCBKZJpksVH5psiKyqQ7YRUJG5yRbM",
  "key6": "LnU8pPDZZoJNPrzL5dwu7xygDeZmfYoveJSKmSyr1rDhWdb6P7AJsAAJyfGiLCjF9ZixSexjxv7W1rWJArZNdtL",
  "key7": "5mYFcbjdQNHQGtxiv6JVh6U5UDWqtB5DzAUYV7C9rByEUxKTSBWhD5duoxa9zgYhhs3828Fyfabr6jQdASTmTp7p",
  "key8": "41t2cKnSuH5AShZ8Ek6F4xAr8qUQNR1at192cfw1YyruvnS9GiwtJeDUncY2D4cqC2gEYtyNME8UzAhggCBmZRxh",
  "key9": "G37pXWWJpJpP5Er2ykEV2tP8AT4cYcDtTgF6X7Aq8dPEKovU9g1g69JVNaSV46B3mqvsyF5c38FFGswfWqZDKo5",
  "key10": "wTnbN5fUSJ33KEG5wfXvCRBpei3Eab2CEF6Nks4RdH94cJ46Rop7CJdzDdNQwn3eXR1DdWt2NSKypACEJbbCieU",
  "key11": "51y5qrcSRtXMUJYbasfKoZBDfCVygyp18NHqvfNDFNiui4mqdK6i8LsMvuTU15yAjV4Q8P3t7z1Ziqnvtna7T6uf",
  "key12": "5qYr1Hi9Dao9awvs1DY3kPdtFJKuxq3swCxFVSCcMHN8KvjoZNUY2wqigjK2EFcegRtXntjquZbDQ6KjeTNNk6rq",
  "key13": "jR2RZtA4feRUZAgJjzo7CC5yhWLm7qgZ7Nb8h5VXHfdWjwat1i1bEaxwSwvCT5jWXTviPjLgHqZVXwz7Uida5cP",
  "key14": "5f4V953yNCHfzMfkBWX7thrQG57emWdZ8qtmzedGqHwRrWMFCq9vK6SkQFHoAyUFUnA6SLJETCMXAhvBBxZwLg6Y",
  "key15": "3bFmqmgGBcA4aZE9VDVWGweAYgEAGMaMuWkcG4fNtBCdrUorAdn7aaupJZVWrt96Vfd6ZBr3tY62Bsyt7oYGyPGX",
  "key16": "49ku9NigwTNGDN6qqhmHr3vB1sxJuG589jVbnT1Lmn45P1a1J7tTPN2cmiJG5eZFSfHUvbstjw1YgAH3hsiGKpc3",
  "key17": "2CokRuHEzSUQN2DkhJVLrCB2dgxsUCy8NLeMHoJcThvpPUrt5UFsyHYB88iNUeduAQmdLX55cQMcWaxBwdsDswwU",
  "key18": "rqpib41ZcGyxQKBRnMjRvQbm4Tup7gFMktbaMM5csHrQq6VZuivyqExf7uYiRvRzd7Fcy3F6ouShzzdh9VF4aJP",
  "key19": "B65sb7DJVaUDBKM48iUU6UipdBiV5EKJRg5vf5WvRJTHi5Gr3WWBqRCiHPDTQzgh84fRjTh6sm3UpzNWW74GpA6",
  "key20": "4sngjcfEd5NYbJFVzNfkJQa4FywqRupeYocVpad7sYHCF9FVWyw9BCGXFXFmGmNX1TbJwA3fr2EiyBk48wqyWhQM",
  "key21": "NnoZ2xaG5QmGxYWMvQrMKCn7ZEsm4VJvAVg5RhKiin7sSocgyYorLdkJ2eBdMbaLeyp7sXc773UfSWkFqSzwK3U",
  "key22": "yvpPx16gFkLADSyrDHaRFD7TB7u6DA8eLBcTvne8qYf2YnjHrLpeATohFdJ7SvC741JhKcqBsaydHH8S2WcJ3fm",
  "key23": "n2L8U2AMdtoVg9W3Ay6maafFkePpj8dcKauUMuKAVAfPj1g6xAeW3GmzYu7d262YsVDUWX41SfKmqcfyjs2bXZD",
  "key24": "43t1cLxYZJC5kVsQ74BiXHrZEnhorszT7oyJ6r75KBchT2BJSm9J1sUjVibRdMyrtrtUkLHnAk9W2aCyJhFsKz5V",
  "key25": "5NqxDK7cw8F3nFrwDHxg4kmZkanpRHdfknF3NezmnPNXNEWMYUWdL1MJXxWng2ofLTC3xGSQcB66BTNZogA2xVM9",
  "key26": "PFi8z7kQGWUZeSNwvJkvc7sT27WYdkMoaxfVBQS9AgpWCfAaGx3zBafzBrxPUkMdtmAB2PNehXp6ub5RynM3bXg",
  "key27": "4qfp1WkQiD3jPGcwiRUqtjS68jM5TvodwtJbGrT519amQ4TWUASAKHnGSqmWGTX4JPeQetNMGxx9E3zn27qdhycU",
  "key28": "2Ajd1GCKf3PqrgBTvy1mqhPMmc61dxnqxZQ1auDCDp5Nrpmr73Ee6MUH3YXvLa55d8puEW1CSc5zTTBB5wnv5XAB",
  "key29": "5Z71xCdNytYtv1VgqFFQnrFzwegFPgbDCD3YA6CAadwLA7M5jhXriNK9CUpsuAnpez8fng8Zf3EXerXhmjCC2nM",
  "key30": "5uwwQSzpiy7pPB8ZUHsN71rLPp1Z5mPdP1bAWBCmLbfvTH2ANygRFGJmsCPJn8pGptuYZrahcYPDPtiHsDd5PU2r",
  "key31": "2nKB8rEhxRB8tpHnmvKoD1wXTx9vNCspZKWecJKhbDkskHoX7GfWVBPaKew1tpDxp6HhnWpu3oGWnoMqL6nppYj2",
  "key32": "6eJBU1LjygRdoVgTjBeMduemBug1P5i4AbZFSELHSfkegHhNs3DLfjGFtv9zjBZXA7CZaseCLuGJwSv3LyCEcda",
  "key33": "5q6JAFNmBAsRqgBbiWREhEHrmS4SgUeNuLxqBUsVXjBM8E62B7aMavhbAbZTSHk9pLro8eh3naoJYjM6mBbg3wV4",
  "key34": "4h4XTTZUYKCV1Ch16Zf7pJAeaSjSy9kNvjJJV2hj613tMLz68FewhQd6JTQGEpw5VK8v6R4UC9A84JdyCqx66SrX",
  "key35": "1yrDjwzMy7FU8B8qgZkrKJ4R5C8YRic4FoDXWpcbQoSrDXAGcYQmXHc3gdaKgtMwgTE4dNAqC8n7fH9amsvnFi",
  "key36": "5ZtdJtVR9oJe83YPahtFUWf3XNgvCX8iT5BiGWDUE8vEW7rwxijgjSnK7Mdg2L1N9m7qvDtafzsiHhPbKz3szzYN",
  "key37": "4fUoBvUvhhpcV5XjER4wcpUdBz2Q7fzBe5goSuEy2fLZnXjXrWHCYEBCRswKXiRLw837cMr6JmpfjD3D2fDo6DSF",
  "key38": "5FSamLeSSAA9EDJxgAgHZh4nzwd863eZWbRzbJ2KZezXUgWrTfobKUe11wBscxB55xEvSt4rzvfHGhbQttiX62bE",
  "key39": "5aWZ4XvQokP1b5bSac3VLPVFXzGXrbXtX2qkeP315bGkC5Syt4AnW1vBcWFTc1mrb9ZFk7zuukzfLKjfxz1z9KY3",
  "key40": "zGF3rPEa7L4HBFQqiSzd1qdg892DxLbio9itXEpnGMTRoWiS4REJsqVDBfPDs1binoYUshgQEaEBViU924Ep7zz",
  "key41": "5KSertyAayJxLh2UTf4DfpzZLQLBFi5jWwofz7kuRWcBp6a2TV33UWUwCs4RgsrLLv13K9C7RfvDgrT1pu3CcpGv",
  "key42": "5jt1U1farZqE2pUvJtGirgwkvut6xdDsFKuWbP6fNAM4V3baXzNqAauYVrorwhZfSDWitQ9ivgsJTpmCwwNWe1yC",
  "key43": "2Z2u4EzGm8GCrDPQJaUMSyto3ow5HpXKjCB4z3n2CXGgZwGspVythAu5es8WPEBvRrm9U4tpF4QUirNSoogjeSiH",
  "key44": "4QxVSwBUYrGbUy9oRmPa6wi3WMXALKWJ57pzYMKcweHyuEMibU4YhbS883fbnqATvoL55UA1HFzNJZ23UzjWKqfF",
  "key45": "2QA71mPvHSCmLtAC3mJTGKPEpcyb3vK5GBgWvwQxMUek5mFZJ8iyohmndhqwBfs8hda2sBMYZBSDZAM2GXh1FbzU",
  "key46": "3JrTnFtRFNwJ49qG8bt5e7H7WKKQBuLooJ9Kbpv2prLL2v6JvcnVGTg1A3Fb9YAiVdEGJQMvKo4B5s3RxTxaQpS5",
  "key47": "2e2RWXp4SXNK4vBF6p8dZw16mP1ZFGCiF1ZszaKXkDf9A6rudgychFBXToHkKaw9i4ZKcjJUeKkqb5hUEZTtRwne",
  "key48": "5FhKxGQaxsiEeSgQtQxyzBLAz6kWcyooCifk9Py38NNn9Gp9idzBKVRQGHEeh23drSmdfddsXqBz7d16Hbc9jnR2",
  "key49": "xKHExkxJUNEYdQmtZNFRiHmaqnUHvRpa3UcKkiZBQA8t3uKsXHWC9aRHyzeeFhV8rmdUaCHoM4EcUmu5S7XWEze"
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
