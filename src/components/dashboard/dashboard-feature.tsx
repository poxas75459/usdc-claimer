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
    "32edCueEgfGU4dwhrps2DAaSaTX3nmXNwVv2myWTqcC7fiQ4x1SYygR9dJg2TTHc5tPqbNBR9f7L3kmxGPfZWub2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YetgKK1WZaawmWwGYs3qHi1rjHR2Qt98MeG5Pj4tLnfHAjtpku7SLL7bErieC4Dy17JxAmzvwAh26J4By5g4qn4",
  "key1": "sipRSi5ABqLjw3umDMVudD1LsUKFzyvpovEAyoVGUs2ycB2knTHgWG2eDLg5HnXb3JwpZF9EiE7mFfDXnNBgJ6f",
  "key2": "5XyDvRE1TRBP2abg7QopReerwYbHnP3cBgtRgh8uMfqxN3PXWeStDhdLqy6iq4aMUJdqEydpzLW5bZnceFX8Ra9C",
  "key3": "5LThZiweYPkABFfcEjg685LmAmg5piq9mKjywtKYPK894HST5R3BHSbAfavUwDajLjUd1rtxRdygQqfNAyEdrAMH",
  "key4": "PPWP4LLMC8ss6BehcxPmwDdii6wpZHSyW4ws7B2EwyYrdnp2gQVzRkamp3mQgw1Nvu9jWxkXUt1BCas4tuYBJcC",
  "key5": "4Xd5oozC63CDVVmujNnXRTkPEXJT53QZC25ve5u3pKbCcC7UNQzc7LVTkeZdavV4kyiTaWsx1M1VuvCpiNXMnKHF",
  "key6": "fCKB45d3ZBthPZ1evuaPW31wat97oaK5daQA7zbQD6TjkCqsR8XsfJtngQN2jVRi9cFsoSwHEZ2eCeH3qGJkeKU",
  "key7": "3L5d11HYhTPfrpWpqqCsJbkRxsJGVKWTT2iPVea4tACXB6F1NpsyTNguf1mHvKfrhVJs8qCD18YfVrYomPi5NMRT",
  "key8": "3EQijPMs7PhZBKZMDfSHfKcvyEh4VhyzcX9pMwMNmLeqHQep9mgemtjJfdMDBaeUD9EiWWGZqoCqh1FSWLXrk9uh",
  "key9": "5oYY4X4rSkcFMifeg6MGSwwxtuTUAH11zKz5bb42K5akWtLbBcv2r3JghawrGX6aWXd1FFVbztTaDKWjMn83oviS",
  "key10": "3QVA1Rr25Yjec9av5yH1yVUFVdLL1swsubmLt1VfFS1EhvonERrx3enYkj5HRTSmeNsTkJv1jcWiatqbeUR5EjCQ",
  "key11": "4tfbYieHbc6RrCNQHF5DBXVjMoFQKD6cXCdCyJoMZWhiaBWgddBCoN4EUFn6bHe6ZEXT5GYRDNz25kGTTw3xG5Qo",
  "key12": "49UwvnAjjAHPdospy6ChrwpwEfAa33RdiqkykiiSQYFY9hWNA4Fo4GRGfLk7ouDhxArzMxWvJwXwdWpYVTrECrkj",
  "key13": "3EPtWkspoi2qwY56CupBhKJXMLFuJZEGEZwaGhof6NT8onRhfJiaQSuBi9pG7emSDr8oVdeR7sD2z4oTjymZtK8y",
  "key14": "2a1fEiGaiJG94b58HkhAxdTUuaCpHFFzB5wU1DAzmj6DmvUcEfJaaztug9LWyGVgAHrVriH1g4Qyqj3C3RihmYut",
  "key15": "4Y8XgJfK6WiFFtXncWjmV8r8bC5maVfyQAqykzB3MSQKKU4aWDZ548shtEWpWF7TYuiFfwURaz2iVXk1Pd7gUFVn",
  "key16": "2DVQzay64Hy3k8HdjriVirnr95fJoBZaNdoMB1GfmvTNxZpTr7mV8Q1FmSsZfdBMq4BV4rLPw2fhVwK7kHFyAQEN",
  "key17": "38MgCUGZk6LtujqqJk9gjdDN1gf28y2xSA7ecUKFEWJFVEzhBsddKy1pTSsg8ividk4cYj4dbi6m3ED6Nb2hy5H8",
  "key18": "5xWpx5Hv4FnPpwa5EEixL1GUc7HCBPvSfmADAnSqsh8feEAEt3MRDLC31hNv9dVaSLk9eDFH8nLfkRqnVf6X5frE",
  "key19": "2ufHasqzdJ1x1RqooQBJFBLUFEeKooePLU7Hjd654HzABUQpQHYaEdj3q8AHBMeGbayRtPSPnFcGhQEn3DcfXe5m",
  "key20": "4bJRXSqpwcazqohojqibVNVpvnANqRkyFs3V4NqSiKRPYXSKNi55aFj5d9a3Ca8z33JieTAXAwb4pXmNVL1b8qC2",
  "key21": "4ivUDcYmGFBHazmeNrRhYuDRcEtwzYzqtBofgN5fXp1ZzLE5rhLf5BPhXNao1sM7CTbHQDV9JN1GFe44GK1DRddb",
  "key22": "wVNcNYq8SrWE7UAZNJhvfS3bv7qPCFgZxG6tr18ikihzV3wxmd4WmA2t2udEAvMUWXZhQ3muEQmSEe5ymmBeR4r",
  "key23": "4g7xAfREsfxprSGHXcvQVQr6Tf3Dz3moWpnzFanpD2x6v6XEgQpxJXQuddMaBNDZ27Zp8sCHMDRLVU88jSf3cbji",
  "key24": "3UVzBp7tJxGPJJXScoyzRgoXsqig1gT512CBMroWQNBHyyqCu4eG7CjNWdLGDhbTgu4Q3qxmm88fujZyvoedWRsd",
  "key25": "4gudJhWGQg9TJjnpVeGzdBt1dJdsEMgLqYgGtUL4Uqtbh6m8B3B8JXZugeaZkCk1quzfRE3Pz74sBwrCra5Tf92Y",
  "key26": "muuZAnrSE6brXWV3Lf83sLK1rN6gqSTpr3oJHYyZnnvdfq1T5pPhkpG5VvR9gxFna4r2PdZufy9iHqwmy4891Xb",
  "key27": "4myJ3fTq75aDPwkHm7q28885Gk74J5ayBXh4K2f1g5evigY91ubkGvBLxMqihciSKjCUeN86tvXBwpXg8b3u5wsc",
  "key28": "2o2t91b6NkuA3X4MXwBy4NzQ7DmXr4f378VA7cgT3p1FszfBGBHgjwhXmmtc7E6Z7waNWABy2mpFbzMnrc959Ynx",
  "key29": "5vJoV7tvuAGk4wETkgjTFfXk7ngFm9dM7e3HY9kutcwhxS7spV9nZ9JUL5oQmV5vrnPD7jJiJUCdGrQCmRjJdaiT",
  "key30": "2oxpGQMchfmtuDsG8pX4FhPhX9p6dKoro1S2S68qpLphsuLWquFimRGvJjsQhnvBtwuJH2p9BGDzdxTLMSu41BTg",
  "key31": "2c4dU96nkQboT2eQjN2M551wm7V7QDmkQW5rmkwSPQ1tSoPC9AFYtSeDcZCx3S8GFw7Et7Jxhe5YWYnsSNFqxTLe",
  "key32": "3WJzZ8ZMaA3dkjLGUjxgZpNrafUrkExuCzpjs6qkgyTGu9n5gRAVJeypyyevWvGwja1PjHq8W7ECZUnn1RErkZDd",
  "key33": "42GKczLE2jNeb4T98DSmQwLpH5nWyYVx1w7y8WGZbkZiMURwxa7S1U7UwpCCxNaLKgFbsgns4Bob5SGBmWpsNytT",
  "key34": "66fnXqnxvCawTge678wCa6JTaNmjge4aK53M9zUG2su8awpoTMB42mwRjZRVfgR4Ew2s2xMqYUmsxNA9RwNw7FBh",
  "key35": "5jCZE53QgktK8AXvZG2os6sxDRAU7RreCQc9B27vkqXx4FAW2GwcigKtzE3zV48fwVQVG6hgMXYKDEXZNo61f2vx",
  "key36": "6355kzBMwFTANoVyH4dR1n3Y8AS5UDbdvXWHyhQsYzkqZZTQ66QWAMvpuNpghpUdTVUGB3pDzXtb2xUZSmFPuMvs",
  "key37": "3tNPgtELM6NYWoEmMtiaboTm1y1UaiKyYFuY8MxTbBYSCKBPMyQBBpgvRP5gTJswvsQb8eRcpCvXeXs6KuFxGMH8",
  "key38": "3rC1CqybK2jdCcyeaZXMS5fLYJhwFA3Q5aeXT17qGSPfXHATdFT44EzESc8F6zck66QeuFxoCEvKaVtpAEc1z3Sg",
  "key39": "5KZU6bq9FR7Vw79mZacryowCQenbrSVFy5sviC8YCnMNT1Re5EHn5F9LGeUPuxCiMSFJWTqRUQGyMqbQLc1G1ALx",
  "key40": "2eRDnTwrKLoXZFQ4x8uo12Po5QyJTAReRmCnn21BFeHdcjmQUDednZje3WHG3YdGGygZXFXDibiFGmUVfT6nce3f",
  "key41": "4CrJAxxdqZbbXv23GzXwkdRjXTNVZLiGLL5HtiQPkR5eCQnPZ3MiARcfKF6qc44QDd8ACfoVaJbMTUAi3V5NmF2e"
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
