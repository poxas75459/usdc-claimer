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
    "5xcbNjojYsTQHFV7xvfgSXEqG1QtQjGyXx7CMQzmipXefeXyVhWnvj9TcjnM8uqmnrMDessDfr1khuWmtqNTbuhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4PxVz7cqYKwoJxnqnSL5Bn8ZJ5p1HEpgXv6ZJuVmrhXGS1uTXMESpZEUWGB65QGRLM8HBrkLd443tUDgijAUPK",
  "key1": "2p4ao5SoEh9sF9JyLJeTmv9ajVH8FVinJhv9Pt3BqjkJw6vSmhmm1mmBe4pQRbgPsEsc1DEARXeBwicCWk5zbgDw",
  "key2": "3Aq6mYszahZ45CUqsVMTr4J11C2mCTF8fsgcBfr9WEeyuu793KCASVM3mBHkfH6wwbnrnfBgDJgdcfm7XEV5N9EY",
  "key3": "3wnFVGqmLCwrzXgJ9PBJcZfonR2ZjL233D9hhnE21CFwf5rbyd3pXwfS4xbgA4GqLu1u4h5mQRTCLRTt38MabZzA",
  "key4": "2MTUnMhm48uGvw4K91YPE2Sb74RWAV4KU5WKhYRxVUWn11HsQoVmRxrW6QTGipnJhRdNh6LETQm3zEcvQbB4Cpsb",
  "key5": "nqV7UUs9B8Wip1z7RXFWMb6MfVN4ZXrmnQmiZqVsVbCg3bUTD4UcFA5jJGn7A2KrxfhXhWdw9p75hQips2V781u",
  "key6": "cZPM4PwSdkkBvngYVJB7xyH45W6RiEDHyAKjvNtRvE9LW8WDyA6RRdiVjL79vvzor95MVvW2wd4ZWj243xwoWLu",
  "key7": "37X1teZEPj8DwPA6KuGLVdYSA2AcKQPNrabWqGULEhZEn4Fb5KHjdjVYYXjMKtMJ111Gms45qR7Vyu6JwXReRpBR",
  "key8": "2NXivDrgoG9ZtUF3sXcZNdH3m3CEy2G6b2voG1D7i26LXKNyJv83NRsMrRVKXAox6Y6eLa5tkhXVrpk6LTrsCTn3",
  "key9": "5zqGTMqTdf8DuKXqpPC4uSR1NqJMdWTrBfRaW6iVoSKpqfbhmcXpqV2ix5yV1VV9RQPMFfJ9S5ATReBE22ytFHtK",
  "key10": "4Bnkxaj1Jn2LL6PuT5cL5Bc7Cqcjpc2ocquJdTcSpEusWsrDDTwKMDkecJhSvvetsjwpUi24Vb9oswGPRiCW727R",
  "key11": "23CsctDdo8PVHAusyW3JMJMBmpWrDFE9uFPsS3oqWvvfor9cWktqR3USuoXkro3UQoFhPh6R3SwrDCY3GH6bY2gY",
  "key12": "28ZztJED2DZRwWkgrTcjs6FemKM91mx7b7V9WvYrDbmHKaEJc9EeHA5p4F2v169pH6ZShC71UQ5fgyKUZ1zR1xMk",
  "key13": "fpRFGKTGZ8ikGwcNroBr12wVkDJGTdJrAyVLL9oaQ1Fh3GG4baS9u8Q29JYNQTmw3PjCqt49q3uyUWWnEkGKAok",
  "key14": "3YsGNi28dKbdwSkD5sNmFigvMf4UTQ112N5bRZBPiFRi8KPZkjQn7SjKyJ5mHqVJqFfBgqAi7S5wybk6suHkJA8C",
  "key15": "4abda2vnpC3sDgqmEtRY9nbkqiduqYsvp3qMogtWZhBdsXEb9z7vTgVdCK51C4g13YTJp1Wye4HXQePfbaCiZCq1",
  "key16": "3uNuW4GQREUYQf5SkHjWV4UgV1zEX3gvZtiKuraYeQP4EiNUo4wS4bmNaNWhZeC4qVU1p976XvvoDD9gSPUPsSCJ",
  "key17": "3NfW6R8QwyxZsWSHZbACu6hNdu6HspqQAms9m5X7N98uNZMF92a6Tdt1BoxSmGc13VBcRNrsNSmYyHfzn6wCVXdg",
  "key18": "2gsyeUJLY1JoXAm3k1WfDP31JUVrsFomuvrXNYQ2oAXpAdXLhnzE7jSbA2mkREKFmwMexXzPxkiiSADywPJsJLBw",
  "key19": "5hhqTkZZ2uSRPtcFeQxzGSNw9KL78ir7tKDSJtoPLVKcsKfWSdmu8yprUvx4FLsAGpqZRQkNTbx54KKZFhRveH1v",
  "key20": "5jWiEnfqgVw9PCH8DtX2emJvZt9jvCSRGkmBHh3N2gwM4FSk6sizgfkuVQPVgmEAL7q8ajkx2CC2aYXYTSzAHYbz",
  "key21": "eSTsfP9ujBVgnTMhCcKdMq9GvhWT4j2McrX9LD7SR96CJd6RFYgUKhgHS5Rz8NyZV2JpdQkFoay8G1cYYRZiweU",
  "key22": "3Ug3z1rc2kiE9L8f67pPdpqaF2FDHLPFL1La5xWhyk5SkAvc58q7g6Tt2J4P9HhAVLWVCxG17V2h4YJx95qetCYw",
  "key23": "3TT3MfmDDCTdjgbUjRpsp7MVJFAzCkcLVPgNr6xbiGGkBTGYRdif5oaiq4rwh5zYaZ8AXLu34wqgYFJjeEkMwkBZ",
  "key24": "W6QiB2w3PFrrTbpuS5nkZeozzqeyYc16aC7sWT113kskxdxN3gTGYr2t5dggnao8s3eFGNNVFqvuzyRRpsVKuNN",
  "key25": "2JoDpaKkBkHEx4HTPZGhN97iuUrFGL7o9YH3iSyRRTsx9jzR4n7HACdruCkML2M9e7qUfFbyuvzuk3MyKjTY9za1",
  "key26": "2zZcmLTbaUvAs37SsVCMSBJoCp3XjAXm6NmnTCqCd5X6nMQWsb34viDNfQgXu6ThxcDs3Ycuhqqu5vwQRFspKNsa",
  "key27": "5xEEkFHb9CiLLJa1hNaQ5fENF2fLWUKZfCnjWsviWKcmUTJ3F2n7XyNWML9kW4NCmfxbRx3WacaMekxAJwc5cAc1",
  "key28": "3ncyMA9wpq3RN9puB9VmJryzr5CnNUxwHzDXPKbr4mk7BKvR8VgqcjCKUwpJGMmzGrHZL83JRvQxHS2wbfmQYjf"
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
