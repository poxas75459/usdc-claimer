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
    "3uwFne5Z89VCDUpL1A4HteK7jbPkHbuHFGBYUkvVH7xQ9g5NLwDBsuf3mW2mSepSTMmxFoP2EdF6zqYHVm1QNN7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UPNyqNwf4aUnL7TNAKL44JBQ8mEDnfKEwB8E3Mu6PEm1brD8vFzSU6B1KtaGuTpGUV6SdtnfdkYoVksRaWmyfvr",
  "key1": "2URaWrbcpX7SHN1hnXNtW6dEp56uEeQXHA5LziqEDx7NY4nacrQuAiZj8u3HJJjBYGPWz1ohoTDKMxB71pcWjucu",
  "key2": "3uzzeFCWsaBoge88DMH3RBNrtoKMcWkd5NWsnbxrxD1mWbAtFob2Edd4ts15bFUVe3toGQXzTW9wYtfnATfn4Wna",
  "key3": "2EAA9AmA1MDYWu6w38B7jxTP1eEExd1YAk1WZrm9ZuAtDgfbWF6evbPBegBGByhC7bLxty7op2twpdHDxZ2wNNzF",
  "key4": "4twLuFgCBfjEh1ih8AhqSd5tMds8K1m7tCu9e3ZNHzr63cpHobaWKjrHaawCh3NjqM9MhoKDKGwTDVmS2BnnF1oq",
  "key5": "3hocpmaL4RrmTJCezrYF7VPMNaUDdNwJstFcz9wDDeixFnBy4gXYzu19o84rsXk72M7YmUSkVAHjetYzTKmWEi6M",
  "key6": "NZNUm2zjwtB56sAv9Bf2ohyHeaTRtERGrUmP6CQoaejoQEo3VQSBRcAvpnpsesrDkz1R13noab99S9reir8CZ1U",
  "key7": "4EbKnWwHWbUSTSMffVB9fmXfS7SsPwiAsFLY4Pm2LdcfPqfkYP2Lmidz9rSTyJPmVwoNepshPK7TSzbMX5UuBPKE",
  "key8": "JqXY4vU7gyBGFNzDSS7NEvLHBxbGuGtTjdAMQPyE6wkVu7ugXAWiqRySMb2bNkUR21u1eRh2PSL4Nq18ksm7PWf",
  "key9": "3oA3V2SZ9tLcye5WZq7xLxuU52TwcXjCnWWs1A7oMaJZxQCP4zZku75BE7sXVfXgek5maGCpvjxYARg67zAK6v4q",
  "key10": "4PRYW6WRjCVoLyU1YTgJdCMZQALKPRCmBtxJB6WawHouwGaDWwAazgm3MLk3jxegFWTZW1hgvS246L6eEhz3Bukp",
  "key11": "431wFd8ZgCBzpf1SRC7faQJD2GusbMZ87KWamqZLkDFxdWnjSqZkuSdEkWKKY4T8oMTMDitTpcSteKGsKEgKSuDp",
  "key12": "2KgDtTbh9ZaQHx1RvnCkhxa546J1LC9FUxWMx78wQzJa6CqGUFu9YUsti3HV6WGGpKfhpQx1u3C2ognSu8Wvt46m",
  "key13": "2L13uf64AxBHvL6NSbB6uXkUGaER4JNVagkoDQaSjjFkNKEpWdVkdt8CrM19C9xYnRGyJftsk24j57a1rWMSQ2dn",
  "key14": "4ZYpBjGTRzwYGp2WQvdrqqLc995fvrXF8g8jWcrXLev1gVG3cRo2ikUeEHaXu559mkUCcqvf3MBJxNfpTpkkBmKK",
  "key15": "4iHwwYfviDxZy4EDwfBc9H7FCn4HseQyyue7pLQ6P4XRSuvp2brpL9f2tfu14tYw1h7SWH6JED7mUZMrBS1krm6R",
  "key16": "XsnJ2YcHmV4sAEHhsN5K4Tf8yKvTkY5hREU6YdzAyK7PT2sqb9rFswBneV6ijg2MicfB6KkRRbf2BCf7YpSstq6",
  "key17": "2mrCoNZMtamF8YZ8j9ah7X7eRNLMPFwHFYFhpQSSZ1gmwgykQPckz3FmHj8HTtJiY3AscxfZepXWJEfk4pkVyYgU",
  "key18": "2fKbATtjLyExc5ouD4dg1A84SE7Z63x5UiyBviWNsem2u2ixwsQu6fLUdjtYta5fBs3tSQhY8ZrpnPxe7iHQ8Qzo",
  "key19": "5TiRvj11r1jXVPyGPKRWs554c5fqbFEPnatoTFbE5BxfSX1ynYMy4DR8o2FSWKeo5GWxQApKUi3279Yikqx9kAmq",
  "key20": "j3LcLwBTcKBWJRrtwkEireKMLBQtaK1Pz4jQKxWEbrGHMMHXinRYHWTzNwr2Ry56pRSmvwh1YMdT534C3u6ULQb",
  "key21": "42oPvEnaFRVDEXycpH9G9uqRCJ8Awn5SpKSWdMRCKimjWNfcs9gBTWwp3ybGbkm4KSLx77XiLM9WqQ3bkvj42WKh",
  "key22": "3kEUGY7DBarPeqJen6hRK2Fxc1XfbTbPXDXCNb9Hc4b9LfWejbjAVPfV49RrrFBN54JdjUNqcM1Lwhnvq9epVTxa",
  "key23": "3nVwjQGvei5CMM4Y6q3e6KRc6HTNJzZffQzoYFAYGZtRNw4ufi9sAuZGmRMWEXv4An145iaMs92CN3K2KjSiWY3o",
  "key24": "643JMkd6EpWrKQww7sHSu7d1r9Wx1Q1dBtfB7JsL16TppQaYmmkaKcebYksfGVbqsQwLHXuTJfrGrKmHUe9MB6nr",
  "key25": "5JREAN1rXxSre4EojRc6ivk4LLk3UrrTFyuU1sW29CA4mxk476LoDi8WatDXucAhp6jGEKdwtD4aLyQCxFLhL7JE",
  "key26": "2maniekcjGcqN56kyjT2KMpcQX5wRm6zf5NkhnSTawpCCjn4XzqfA5qTgRMWTSAHKJqVuoeL2xu7p7NZi4ac3mR4",
  "key27": "2F7kUMZxmFbUi4KXaz5hvjpnsjwY5aGHuSriMDwBthh3QJjmxyxEQNpjLDRXYUNAV6U8T94tMgb2AiUWcukPDDoE",
  "key28": "2iiYW64KRvLGQpLjuSASSLs16mZN8LrpvBdF3zZ9qKd5f6STxzvGDos2STjpKMnmDJ13s4wrrqBtqTTQVycAFaxs",
  "key29": "2yJgieT23GHmKL7dhEE4LdzMAFvuGe9fJAT2qTVFZfB8pUGs5XhN8KXdCUNJKd6Qdj4Upd68XbcWaLMbmS3yL1pS",
  "key30": "2vx99AuNrhVmmBUanspfuo8Cc5obnHPMM4S4prGn3U3x6P3Ncyfuuq29pWxvcYZWhdDHojCKTs9mZYuUiGXM6FsJ",
  "key31": "2e8YhXEw8714kEfK5aNN44y9UzUxNzgyu2dyxR6r4RsMFxXw9ZNHL7Y4e8Yip2Fa6nLoh7Qj9mFcS4W97wHz5uz6"
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
