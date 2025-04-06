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
    "2vW1pvKa6CEQTmzYJVtjj4u9DYv1RCxfJEk2uGcrMUSkFgWQj3H2HEaBqBXXihqJNK6hUXUyGxiZz3J1CqPcsisA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6TFskhVBtxqitVCG5aEm7psKPR5unW9ijAKyKZZsaaesTPDEyqEehBpdsu5JDqUANpDVzJ99FQTkPmJNhBUjJM",
  "key1": "3XVV7KdBvCuGTEm2P5HR9TAXmUafEBeuVk7daPPHNmzDzss6KT1DDHLttS6Mgh5t1z2Qq4dXWgSN9PvQYrJ7TWaR",
  "key2": "538qEcem3BZGDyPAQ6K7EUYfVc5cnJ4rEzzDG6xdZPdaJfQKLHjoFTj4tZoVbWVJScntgYmVUEUkgXfhPN2LfahU",
  "key3": "EyHMHx9ijWAJhNjTC3szrfNJzDCRbimsFxQwwJpfJWGAwKLPJGAADXnsZwWprzarJaruf5GWXLyZvMTdKcoaJ9q",
  "key4": "67ZyU61PoBW8jrJp9dk57m8YdzWQQWhMv5gLPV2Ki9tPJ287kpEsWPUPjLsY5B4hAJdgJeUZc3353RnqkEj1iDCF",
  "key5": "5H1UZKHrdxiAr4hMEckUvjvnAX6z3gCqmuiWJBNVSvMDoMz2kJVcaCsFZn2R9ssnnH9rzx8ntLtw71AHU2Cc2g31",
  "key6": "4h6Fi7w3QBedKMdZGTERPUGUUN2tJtmYXpKCBzURSidsztAFnj8n5gBup7E2RZaY1xtimMgEpcRAoYfwMKRm7eGR",
  "key7": "4mG1YA2GQKUYsTREdEQCBB7qYCYZZCcYqagtSRkEqwkgWvN7dTk8o7pZfXiw8DytjjDu1xAgG8kB3pb4WgfrGVzF",
  "key8": "2ZeWRzXRcq4ND9fo2j4vka783FU4QvqcfvsRQby9hb1JESqWSmfra55Gz3rVFiyozu6GjiSdrKoco1jRt5z36VUv",
  "key9": "3xhd8h1DTY7WJVB7hgxNR99z7NC4cFaME57yjHTfPKEo4b6mp6uaKUkBbGstUoFW3tVTr8SLZkmfJfqcyfqSpKBD",
  "key10": "5kcdcUFecAGQFCjf2Es8njZCB7P8MDLQqkeWwdDuvXsMWvSHqiz6MFVS2svnvyDpSDKsd6XAuzU8gdTULr7uBsom",
  "key11": "5yJUsASnVHqrwaNGUsp8sUgk68w3M7bJViW6EvhS92H3WqxB8WGEmkqCzsLTisRQMjHwEUsCX3V4dZsah89jQLfg",
  "key12": "643sgucn4Zwu2srLrEqQDGNhhwFXZE94uh4ybXs8kvwtRyb96c93EPdNgR9NhQ7HMuswaEMUbqtzzoADRci8xuyG",
  "key13": "4zP9Ve2qv5o4UwcVyeP6CKst2oUgNYHrosS37QHmotY9otcUkhHqEr7yXBKyed6HscrstPBDVerCWGNZ7tYRYSmV",
  "key14": "5NhQqVQ1RwSmrPpDVwed36i665DNh5VJfpqkKMdR2yriu3MLFgpfGC3MaD7L7TPkBFzMFmNShMdhpSqxVEtVtdRo",
  "key15": "3NUsTDgV5rKhNmkgSPUU3a5u2bDdUHhLvTGLpx2GN4WgunLY1piBLCbJrF6rsFGFTsUHHPWnMrdzYcShPBY67oUV",
  "key16": "4AeaDwUQsVzSbXmm8vcAZKb8T3YVVNMiZ4Kxf7Z1PAkVVYDiHcRFo3fxqgTnjsD1rHkp8HZ3Z738MBDJsyBmWCfB",
  "key17": "PcqsWKELhgXaKkMD789P4uYiLYHB9azLoizLRUQdpN2EeMVeHmGn32djP4wba8GNdeFbfAXEMJ9dCChruQiSF36",
  "key18": "58dAk921b2B2dwB291h39cW2bkyCu7KzAvQLbgY18WSSLDe3auyEJSQEVAzmPL9gmStorN3b2MaPrMHNwdyRjwPU",
  "key19": "3bWz4qB9t3Qbcbt9AuHSTJbhpV5k23KLhdSrd1gDmqGsct4jHEgjV1QsBMAbhfmpGS8o3YCeeWMVbH7UodgMsuWv",
  "key20": "64sQWStV7sCnBJ6WRetGhx44fxMgBMARs66ktMt3rhRc98zj8XLDxuLY4JS1xFG45A4Eaj8SWdEdu3iUrWvTzpSa",
  "key21": "27HohseCVHU8tf25R3oSgXuL1Mq6pWojB5zYzCgLPLicQJszEkcZZbJ27YVbbdc5ihNCfhTKbTsvrQu6brcJjWvz",
  "key22": "gbiKEwtGuHMH1ZpjMJVXaPPjkyz38ewkK9niFCsMcGTQujFB6iSDLFauTzw2NBnWwGfUkzg7MWfchB8NPjb1oU8",
  "key23": "LiJK8CN5aANVFjKg8uWmbVm8STTaViA9zi4UyKixbPEMkCoVuZDoBuGDv99o1U4LSuWACYEW56gn75i78j9B4t9",
  "key24": "4nAnWX2JkpbSpMJnZS1eLoSAeBxMrYTZYR4aFBY6FtRGk1rJBmu7xV7n6Bzt1jqtNWbicBBZFbHCVQy1daAZnpqk",
  "key25": "5Rjau6TpA4uFqpiNmnRWYmMGSM8r7BedqPBfK2Vu7KTtYNZ4PzFeZ2U1vCNNVNaEhQLZWhdim4oD8nDR59VvPwQp",
  "key26": "3vPvAULiCQWFNkzRubDhHZTFh63YjXLsDiu6vdgg6BnRQsNRfepSimTx6rSGFoxexLVYRbD7FkxGQnku1Kfudwv4",
  "key27": "LDmg4YqfKCDQkCqySBoJUYdwpJSAKrjKJCH4SRPh18gyb2vgWb35bw6q5qCmVk9PKtjdNKNgv7VPRqMyMdvZmzy",
  "key28": "vsLHSP49sVRJ9KNY5bh4S5gxkmU7dEyzQicZGijg9CXJzu6zsQS2kpRk6VP62DXKB3igv4k5CLjU45fbZh2BY9X",
  "key29": "5qQqghmvf9kwqwmnDqadQYUUpNB6QHGy9sDMSnQ6eoFwUTRP2iQPEDUvp3jGoPxXnuWfrSXjSnhY8BZX42hz6jnC",
  "key30": "23r8BHFjWAtvgfRw138qYDYxAG9WBkBor5np1qnhSNX3AqS4r8qUSj3gEmCiU21MFDHCPcxvW2jATMUkPPZ6FcNi",
  "key31": "3HY6TUXewPv6pT9SbSngiz8KMFEz7H1JNhg3ucT3RaSTMeGaEPeh9YyYiyTNWiWMqf4AhFmXC8wWP8T18ZUGVjCy",
  "key32": "5WZwTk2arzkz2W8J3NgNwrmmaVeW2atP4uZRKcAJ1NR7LkkqdyAvuHdwEyMqP2nst6gMobdB1V9HedJfpZcf8GWK",
  "key33": "8A4uBf6EP4WGekuTpcKt69tgfMydQCrPragzSMpjsk2SyKsTzWsFS5QzKFovojUpMDry6g9aAss77wMAfY2sECM",
  "key34": "4zn1CnBHEgGMqTDkTeApRpgJkKvWJZBA8F7zcZ4r1cjAkMcmxL4cuFkE56d7DaAH6QqAN9cu1qHr8FvgptwENxpU",
  "key35": "SrYqeopCmv9226WupBJCC8pLAkjJZ7bayLozU7XuU3RzoeNgLaKhQfTJ6ECpqrqQ4BcMoTtQTTFB9fdWjo5KJB5",
  "key36": "2pW82bhVMLstf5oQSSDA282F9fqUVdTbhxfUQA2FTrKRo7AEtjQBBJCcX2t2FYRaAD5nbBUUH3jMUV8BA3EiDAvF",
  "key37": "KQfLwiLmuGcqDh4bEDhdKyosMSnBo2ChY4eFB5MtREq5Usiu9AhT1pkuYxWegSKjTZpgi1Lc2gTgeMsWVjV6yCm",
  "key38": "3nQrxvannhFVP26np1reEoED4zkCnfXGQZChrakeCAgeeschd8UgnRgowiKs3sAz1o97BUN3KV9XdhinFLP9pxKo",
  "key39": "3Sq7VSxvXLc9KiwFBMVGAV8ZHJ1tP9T8QXmXhGVpcq76YzoeWrApVxJmCFmspduYn3Nm8GfSmRt8ZtrdHpwbEGjf",
  "key40": "2MAUmPeYkRXbpGRW1aPNGYnhEYAmbgsGPrmDKqNgspncdBjosEkNdsNy6j7CsQsf5BHn3vzZA9zjAgAAnBdHu4bb",
  "key41": "2wortwUSujr8MUvKT2fX9b3BjqU5ga8888EdZPWaEkmwiT4iPfPCPauL9Lq62gd9siwDvmMWqQFkqZey7UtsBiYS"
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
