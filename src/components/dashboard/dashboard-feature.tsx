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
    "3uUESjNu9wzokqPNHZ37hY6q3PXZLgqq1Xf1EZk5k1kf5fQmBaWvMofQ1tFeajy8rLNhm1T6AU6FEzfnhDjhTvco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhEQJAN6ER2f69KeAvnaPyFS9pBwRhvgPGjgdHZHTUHdXCZ8yez2AVWQgxzijLf6XcFqYYpiqN3HwrJP5eVQpWJ",
  "key1": "2qv9psyvLQqx7Cm1HMRMqk81GNEb6WquC1rcG1T5BqkpcfYqndh6aEr5uLhfrFVNKfznTG3yPR5GdEtYTMPVkY9x",
  "key2": "3qEeKfQkM6T5juXGKmBAynUZfTEHBNGjtNgxCaYZeLMreFfrs5Ya9iGkYABPLymBJutG7mzsGNvAXpVbVWPZtbrC",
  "key3": "3EtQScypyZhRwhoPBGT34dyN6ksS6UUwZMDxyak7kfSeWyuq7c1KMpvsux4XRAVpr1Z6xB5f42Z8rx1atSFc5Lkb",
  "key4": "2hyhzFz83iKQtqDTyAnQqF8V4QerJT8vLdAmbXb2n1QF5oLNufATQTzVbydhiFQ4B2QEuFyooA7W7pngR4CSmyg5",
  "key5": "5gjhj9SXuiPEhCNfjtdHsc5PwSfSdetQsWB86seFMpnxLkBQXeYJVPHh7w3yCN212618BXoRitunY6pv6uuJuopQ",
  "key6": "5dXM9uo1CXquodfpoNdTgaN3fV6uUwhpEJayDPxtigqg2Vtp9wbUFvRKTm2GwoQvTq8X3HerYHb1Xyo4CURBDJUL",
  "key7": "3sWirVD4E1QKKMdugHYbu66kSoyQEJ3tpCBEWBuwdFNjAkrJqoqC9gww2YAurzaqQ2Hf9bWPn4nkN6NG2vFdKhJa",
  "key8": "67NLk9WntJvKgcWPW2h8TZt1CKempwmjhMFPMtbAPZbSRDiP4wxxWyC94e2MfFihUbFCYwvfnp5DVGkApCJo7Rjo",
  "key9": "2DbBY7pNVhkVm7jQAUEmuoCYQntkFFUtcFDkwcU8mHZWutGeCLEHTHWHHK4iK7rUiiMVGEraYGQG6U1sukbja1GU",
  "key10": "VZQAxQ2E4zAXHB4HCqbhgU1Ya66Gi4hHo3oK7R8irGcykhzAZWpfP2CdtGw7JLSJ9XLw22J7avT4SRKktEM6Ph7",
  "key11": "3dhi77iifgZjX65Xy4ZPEiLt6kymdZHDp5rzLsWUhu1LxxmHPBFiLU2AqtBQVoN6BqGU4inatB9ckbjUTrwn4X7b",
  "key12": "5VFXxv9x3V7KS2gj67dA5KCZgcJwRmuuysuGohjwn9eUJP6yDsxNdqfEFxDVixuDYs2LvVQQgtJQT4z8yeFyuVDH",
  "key13": "5z6gAfkyjVur3fB3g8K1YtMSmDuShB73wwtvdJigqxN5auArC9M7N3VfMgNeuPYZDL6LoEjRag2VXqGC7T7itrh4",
  "key14": "rLrd3LuJb9dVR9Xj2XjkyasSPVyrYPujESbAmKEdrxxmA5WGv1ijAMusH88xVk4FJJ9U8hHpHDtEWqu1kU2Poqm",
  "key15": "49kB7fWXrPUmKNRuZfcE4LChAm9xe8VxH7bzwTUksZYo5W61EKRcxbWD8yA9hy7YZdo565XCWhthSCueVfPP2r12",
  "key16": "5LKZbW3FKYkn7p9AdaddkwmbPG17urVGiqdfSKG8hHR5nzB5XFrwLUae9MpjNcob3A2VhFr3cp7mJujyjSJTz3MV",
  "key17": "2hnsGv5CSHAfhM6hdsBc4Du8UweZt9Uw62p6fPhEj7RBueSsfG98iMWx9keGxpgwWvD3ryvA1pgEN1D4PHJvH5nz",
  "key18": "Et7itf5CjHGg1rkwvyCAZBwpLNC2M5P8Wd1HagwRdpA6cLVug6avQMv7uUJMrjpTyArVJdkrfcFpsRQgwKDYsuD",
  "key19": "4GWErdSBGLyK7U3NGnqEcG2Y5vDRAkuQM5CeA1LDYv4a6AZXqSD3yamTfTunjFf4kvmuB24BBgJBwgseDjXXqhiC",
  "key20": "5DJBzCPbFmAYdm3LNC4qjLvcWjh9rr4ArFSy1o4qxPRh77qVq33uQHbTMrnuPtTMv4rn5GmzDPq1Fx1jKkJsV3vL",
  "key21": "3fxS9wUrD4s6KLWw1rev5rNQmX4LKHqxEmgctm87x9him6AehQbybuAUAmZbdUdbbDDyjmsdkwzuEhmfp3PFHaHz",
  "key22": "C6o7kHNUGPrnEtVJhKHrFHCquiZA1Z3LRPezfDLmChnVMhu7mcgVp6AoWxsEUJkKwxVQfHoZe6tRWuZDEZnRQYN",
  "key23": "2hYEStVNDwZ7zNQGEVLnkQZHkc2jsu86wLPokeYtm6Q8Mdjzg3Se2wU1nTFirY8AiYWm3zpBpN9wDqNc6796dhpS",
  "key24": "28r24P4BVbE91eGqPCE33saN297LB9RNnmNrSvTiRSHb1ie6bfbupSXz3yCdcwkTBhYACuoqKoP8es4mTAFWuyNq",
  "key25": "Boc5nMtLHzRwCXta7PMjN1PdVSyuzaMMQuvkaouXSuExGftsQFDcptohGJNPoboTMz6sfVPzPNEmL77Dw5w7aiU",
  "key26": "56Z8R7E5XLL9y8qd3XfnFqTwe6ZFydqPeX83pbsuSPAKz7zzzrGsENGKeBWqvCqNcTiP77duediiMwJGQQi9vo37",
  "key27": "5Vgd19gEg8i4iRzWsx92Aw7Kf1iRXrEu5WB18ar2E25vUjkaArhv6DijokmPPKvCGsniNVYJjiVUWtBxJ681d7sN",
  "key28": "48Py1avgrALzHzherjscgytg595CRm5H3FfSLQGA5xuskwFATakFNyvknHctdv1jbDpMhVSd4K6ow2d3YbbHgGoQ",
  "key29": "5WiVP5VV2fsnHuHmpR8nrM9h4hUCJNFqBjBJMKg1p9BPXWAfoSs6mK12vtTmQYRLVmEct3gaX7rfV5nDCyXvYPCY",
  "key30": "3LJG5TPfvNSoodyRNrsLNp2PCfX3rALGnf1bC69te6Yq2ejYX1pnBy77JTuQz5Wfc6iHYmt6dhv2DR5W71RCRGrZ",
  "key31": "38YHYDnEkFG7pz4MQ2mqXQfG3TSidYxpopQJNdUVR1GRnNt5Laefw16waXPsXFX1D6TB2evUo3AqB1QyiXHy2QsK",
  "key32": "4bAForDzb8ATnwtaUt6BKR51qWExYG96y6amaUSQvFg2F34q1wXeWA414ArLqddHewpRR4nX4SMrv3df3bbhDpyv",
  "key33": "295n47hkjTD4rJ9qc1U7A6t3neXnguUnTwNpNeje8fe6AfExbHTbu4w7ATr4j3nNo995RCamiZtPMJzFCVR6K73R",
  "key34": "VgPDN5phmcaCW8AmrKnAfDoVHfYjbTYVXgcKAgnrPmDagGguhFTPXnqA6fX81WwCqQY7HsnuD1J9dDhWwzpsbGz",
  "key35": "3fiLQrZSB2w9Aw4i6BNim6xbufqjBSBWAtu4BZUMFqX2QsNm6eVqCty1LH74UTwFG8oVANv9iAWNPKgPYNtUcucA",
  "key36": "266i81Xe2PPG5XKPJbMEmAasAegVsciPT9BNsjDbUW6TxHN4ZaUZj7jENtneETHsePSfKKwbW5FuftCgr3Naw17H",
  "key37": "4PQPokVnCmnT5UcaPtYZUTdSLgTvFbSnzLWdhxDNzuNMnkzr7JwJEfpxUeBmAwjKSjoUkisoSWjV2JPdj7htTYQ5",
  "key38": "55KTxWquVbbXBjho4gbhf2CyQrZu5ziNKAG9gM35oAXQVt3p4d77LQBJqQ7TAegYsb7AKpxGD5wDoni7Xh5xdaPy",
  "key39": "2CJUCh1UbtS4NrWCcYE1f3timQdpSEoHqFWse8rRuGuQJUPB97tpe26m3Rsi8G3duvGqKaqjRiikv4ST2WnXK4Fi",
  "key40": "xy7KnkqYsRifZ5TraSrZe9FABj8oWaRbC76wJqiHe5JN6ioaSQ2EqpPiKxABGfZsHBTTwGHkCuz5CeU3J97iAfh",
  "key41": "34XZEPqCCnYuFS9GfCW9kmWFJpjReDxJ81EL5sKLoznZdFtm8rMQqH6HvabmeNBMgbTvsXX4nwHvXwEa44RXTzWH",
  "key42": "2DfqVwRcC6h2Gp2Rjwvf63SNfGWxLT54Lk1eXfAmoQgNz3omrG5ikdA3jNza885h2CjBDYJA6qz98UawEeWLRxKV",
  "key43": "2tT1bJxjoE9mw4WgRtfEmPJU5djBTas678PzkoXBv2oefp4MimRzdc4qS6KWeS2Wo7PpnyJB4DAjumk1s2PfWgjh",
  "key44": "5ESdjdQrkEVC19XktFcqpgaXqUwWPa9CDPDjmu5RFjrMWm59zzA2NW9MG67xJXJZoHR3YXuvorTMc5FKGhfEQLx",
  "key45": "4tL4F7t6wQWGXtDdJqgg2PQAYUCGTZomexgsGreC6RH6DNrfxHyGKDN9KHocmR4boKn9DXhL5XRHvpQtCuQMoYSG",
  "key46": "yigpvzL3yXvDYLBUqRuYQiHVyu3zrUMw3Uki6PZtn4PJJoysfrf6bNLvsQHjBtNWUv8mr8sn11rGw5VbpsHkZSk",
  "key47": "4PLgVxi3pWGj6rxYijgj1ebC5YfWgsa8mbc5BErrHETN9n4DihFUNXufk4E8BBTdHsudTjhy6jgvbh5gRPrAQTXR"
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
