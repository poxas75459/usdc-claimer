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
    "2UUa9xwi5K886Mfg9okvFonMZgEnkM1QkrEgCvmUbHMmxzJkDjqJTBSPsh65x9eRfExntGpwmYHfE9vrS31Q1gKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WK1ubCvPCH7QRZBELfjy1wNd27cujMyXLCqgoA52aU4H7khFwGNiFv31CxVX7oeMKoXEZaT3o42VFwUnwsYvqo",
  "key1": "2887uPrSiNCXD2gvLtuMVAttaNapPCV2CC4BcKmsZMWZFnKK6s2fwgqLABwmjWJgBzutDQZbusekKmDwZGFFvEpC",
  "key2": "98stna9SGyL2WfugizXRX8BsyztjSJZmwvSHs4QMWF6cifivqpH3WdghfPmDAvtSgd7JQF7JxBExxB3jDyaaspz",
  "key3": "61h5NBdC6hiPne5KgNdxpA43KCbwD518qVEqix927BSPNXzc6g3QbQ8Z6zKSNe8GwExq16cMyxwpZKtTEQAa1Qct",
  "key4": "5GeLznu5CBaPgdcTM6BZPGPA3C4FM4J5fVP3YZS9AYXPadoCqnS8jBm4roQHUnLxmLF2cKZ7TFQKS6ndynFViMNu",
  "key5": "2T7bmh2mwmNyknrNXzhe9NyzmjJMitU1qcHmCLk3FdpaM7JtgJzDqQ7MiU5rfXHGKZFNAFsCfevsUsUU21pyeKxA",
  "key6": "MA4WqJNJmGkvNhCC77LrMjekkyQvD43mQ3FVN6qfEs44CxSqsU11ofEtW5WbL8AzxNhAoArzpZieQzq5hEfvN7y",
  "key7": "39WCjpqjcETRSoQNCzgSMJGA9mZ8BCXzBYrs99mJrD1LreWoJ4aZrS4DeqQpAgtk2pXJA6KUx3m5FhhSKxrQFcew",
  "key8": "3QSLaXK3m8WLW5tDLW4Z4CwhkRhkEH9mWsXYHxXvwa22zqYAJSptncafWnDfoATLUyyZXV3RPoS8SxwyhaWRrmPm",
  "key9": "5yDjgXbCn8Uw6nJzLAhDpSQxSK7BCP917vEGDDNyXnLPPXguNmYdxNVAtwLH2b5P7fmbbyKukAKbpYwWhUs2AudL",
  "key10": "xqwRrQx9T6UyvHvue9YvxgKEU1GnaFU59yBFq5myd4VTdnAbsweVodY8wyyzHFVJnUKCCvDCnPq9N45coQjZhyh",
  "key11": "4DfaUXJJQYgLGK7HGjNfS55UK92XGAiEvuUcPcjJLywuppjiuBG881XUaeXatfy2jXyVwugAotNF6h4eWnRdPXms",
  "key12": "238bHu6ja2sWnRrswmazkGJRzsNW9FXfaPsUq4D1MALBhgMeweCutPsf55QQQi2NFKaYAXSmfKoFiV4TZNkHMEo5",
  "key13": "MY3oJFSQQRGDHayeVYBeR477Wbo9itjrv3uTmzhJ542wyxrKN4eiVTCGqYxseiKb8YGqi38beV9vuRaiyNqtdic",
  "key14": "3BNpiRkPKBW37HXatfGCAj8aEX7CJicJ9qzjV2tgjzvR1szshdKkX1H6dacNrpWE7LngM9C76kLTC356zxoQeCWG",
  "key15": "JDp4AWHK7PxCK6bCVrMNFSujatfqr3oNzV47ezZbMu5GSxGV6eiSA9EyY3yKc6KNn2P3qNjjhNwEBpt4F8owQ8F",
  "key16": "5mX6Fxux62r8CVkBF3rBhkBRfrGwczhbXmfnznrvtcKcpTsoKrTvog1R6ybiXbPsEBiFw62SbQBHDWay3qdRt2ox",
  "key17": "4HnpAfK34cdgoukFiPL1Mkt5cL2T6Wm8UgNTYBXjiUFv4wvZhL3zgVbHvY1hWU76TmUvApMwwT5pwGtikQpDMoWy",
  "key18": "3dGprXanwef293CT88dpb1zbcSaetMgQGVhiS4Fhi1U9VhwMA8aPpJKig5tW2HxL7kPuY7RAdqYb5GmC6DtLbB4a",
  "key19": "26NqKJ38ikujrdybKjVwRS4dRf3Un4Y7NYnVmAR7x3fjTsxe1SFrybEbCk4BNw3hCZmoXUMUzoZazW4ZNLe1PiZV",
  "key20": "xD1hP7M8GiDyQntJQZbzB7bK8XwVTHpREb5tShzFPe9RKr2HnN1FGdTTB38U32MRh4NMx5YrtJMDXpvhVbt5JTX",
  "key21": "4w59E9MWJSTyDViN4rCKagmjxTZKAL3vtRo841j7Yptc2ZgTNV5uF5sDMCvLqHRZx1QtH11Yk4ydYBcPsBwH8Sd7",
  "key22": "2Dquz9A3idjVQtTF8Bz4RgCSBEKM3ZikC4HkqsQYeo3khWdwyYWtfxJbDoimjqfgHP7bgbgqNrWkDRR7xiJkk1Xx",
  "key23": "47XGvJN8gquLNS6xPkd4i2wpcTZ6N54nQhcfR82SAq4JdbfoF8FJirdFuULT9itCL1Tn7RprmHPifsSbv1fTYFyc",
  "key24": "4XPsTHVdtgPJRR5hEPY8ivXc1saPhrodffWuABNDcsvCRnm7EaRkKeeMNA2jzXBpLWS9o7kiay2rTUEn5V19m8ET",
  "key25": "vVpcjZtiLuBivMXbZTNwLg9GmaLdQdqRW2e525uBY2CDYcXmw51idypfxus489hFu8D16Y3zKq3f3uFWrGKUHKH",
  "key26": "2Qm9dpjEBnSJkxQq1ZPWqH4yEseNkyrcw2vDKocFLQ1z7caMVXD3T6Z5zv4CUJ8MVptfgdUzbfX2X4JdazjeH2xv",
  "key27": "2CQwfiSjppMZSZuoXznA3jEooL6nUWBubuiXH5Ydb7Fs8DEEXwRFe2gsUs8rvyyKV11jQNTgtUHLCMbF4QCGAkMT",
  "key28": "2PsbvVVQVhcd1EVe2eAVqLsfxE4xcxbsDVs9wKDLkTvVav86FZxVCM659LdH8VM9ErDzCqgQgFgzk6vm7JKMUQY3",
  "key29": "2VakFupkvxpGxsvuwuyNXEL9tHqfMaYt8Wwy2MjDQSFShawaPAZdLW255dDVoxxS8ryPLfszi8TzNf4TqbPNnTuJ",
  "key30": "uUXKbzJGdysia3dhDExhT9mV9bWrkSZsbENUT2JEpaYf3mXB2FqJ81AS8Y7ffTmpGswHxzggUcUBxGX3YJX3n7Q",
  "key31": "2yHL8Wm9yDwRaLjB6ChoMD7TxomVT9m7LpTTWm6b4uLUZKJqsbKojvfQwJ2drjHdEfn7qA8hKu76Xjoymb7spqHg",
  "key32": "5uXpsQvRzS92usxViCpYu4amjDy7wNaHLjPZRXuNLnGGXK3LgHrMvH3DcNovddT6pp6SHVmyBp1kxJGjmnRGxdWg",
  "key33": "5dkYgiGDSBrZTYUGgTXJwTebZJUmnKbsBJkuJBxQXVLhEWoHAipyPYdXp8pKFHjGDiCd8nBqx4tvVZ9kGJLyZhff",
  "key34": "BusVURj1FkGRbivaqmAxVA4Fi5DPwoSb5oHDrF9a2JoHP4Bgg1BFzktSAvs1oivMnT9XodHEP3D6TGMVH98fBoB",
  "key35": "2CRiELSfPswuTv9zw2TiXNr9Gyzhg1CpYKrNoPKxcjZ3x1NBwPXiTVRAi78UZ5qcoPEA6KvLnVRPWEtwCJzbqyt2",
  "key36": "wBKGB9pvWU9M9DvcaD4tzvvyJYxw9tFjubKabPnSwr9rPn1rio4rz9RL7cojxhs6cUxZGdRmnnquZhyXcANooTE",
  "key37": "2JnHVuhjJJYYEraZzeMJSDBc8PciKiZmLsdAppeRp89yyQhhiisS95Ama57FTCTRkGCYrvYKCckqet5yQY6N2kyS",
  "key38": "2gAHSCVjHgaMH9EaUdevdSpcbLodqxNYiVUGQaNRYDGjsTc9iZpbYBAbanmRD754GEveQqTN9GWGh1n9cXqMrXEA",
  "key39": "5SprXT2qwFZPHGN1pT6oS29Dqz2Q4ajv6EPXedCNNnz5okWo8gnDW4hC6eUmthH1jvmCNPqLvF6JY7vxjd7MbL7i",
  "key40": "3ZGrz5NtooKbCaRbJnr2Nfk5QXzWcJukLxP1CxtaToRJzoFqausviMoC2uxRxUKSLwD7Qkor3QB1AZr4hHqUaSrw",
  "key41": "3VyV6FkqeRP3Ba8drxqu5a3663bmuF2CWwtEPfeFZTq3B9HrJC94DXHh3546XNeqXTTr4GdswwGZdAGnf1tQyFJt",
  "key42": "4Nt8hPFp9jHExxdPQTZpySqZYFRyk8zZ2SxeTXt4MpW6TEsq3XWYrAwXTQ5YLDqvwgmQzzKR4eMuaBmV9yD4J5Gg",
  "key43": "36qPzcskxxxj6nSvzZiHKb6rikiwaPn9JUBY8wzpzCG1rqfHAPKBamKtgnq1vcdzjSLrWkRPnyFjzUvxPFpL9Uby",
  "key44": "2LzofYnudUhyvk1Qts58TNQcvLZZxEtrsBk8ZxJnar3shsqN1xJ2YXHstEMUFEGYQTNyfyR4EbSvww9QXLzmNLP8",
  "key45": "4Y2jCxDrLJFwsukQm2vjBMLxt5gciYvMqEi1sMnDhC9WEzHgqhcLaGzFBaPo3XVyJV2FR3eyvADjgtY8M69Smapr",
  "key46": "HnhLVCDV4iqVFNtTJUXJurBpujNpeNmX6wY95JPEjGyvtur419BS2JKKi6a25Tygieh4zqhBMjK8YiAcqeVxxVX"
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
