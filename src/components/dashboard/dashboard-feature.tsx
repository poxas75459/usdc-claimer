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
    "3se1ZhV87x1YmXCuAoc2zbBApK4tMPc1he1RXSaZdzLw5jqDp9dCct213pN2mSABT8MnuZis5ZLFmsEeDjiDoPnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvmGUY1icj91FSjL1gqyjFeUPYkWyCmciv9h4FVdJAEU9BGqbEBYV71FCiNomF9k2CSds1SwcpqANFMVcGJVXBs",
  "key1": "3BQ7rQd66jQYcpdoJwYeebMtJomJz88cAP1BjpjeXBxYoX9GYNEWGQevgcHDTJ3yefUpUyoB5G5rtR8r1nHnJr64",
  "key2": "zHxqHiFmRTiNPVLRjKALPVTikef6wYHxHuCN5q3Z8kLzjsyzRvSq6o4VhfEFNPxSEqkCspDWqiaAqhharb4XCrL",
  "key3": "57uR5CBraRTgyVb4otRZv6Ld8Emj1h3RpSsFLcX4BJ6tocCZmBchMrqn4kNbgYcHsMzsKiKrR78VpuBdSnnY3u8q",
  "key4": "3dqofowqQiKSudXi6PC2Bk62CQn1V3RPuJxRRqW4Ka25Y2rMroeCgRo4gUJQfKKtgq2mB1vNPokCWoQrQDJnFsCT",
  "key5": "5gyKcfPLM9M4mcbARiPiMzciiSWH8tA8HVxNQbvq9t4qwhJeaw1eXKsswXvosGSQgT2QTFmPMLGnyDYkQBmJX7sN",
  "key6": "3UZeR6pGTvtcN5KRbZyKt4uV5qeBzCg7AkKBG5aQttuBqdQid2aqaVpKRLZccudw16Q4B4XDuEQoWwogebXHF4CC",
  "key7": "3Yfdh9Xk4qf8tWk1YHjumu5eryFp3mYfbdPrVyyVYWQhGzNLKPqveWiYKHgAXshG6y2WkVERdPaQMN7KWe5VRryt",
  "key8": "6h7EtyvAk4VmJUVqBGgtLDvGt5RVXnEEJt74hhTUcoJsmVpLRftJyyq3GgjEvmZUzknghGvZEuZQWdXwVkey4YH",
  "key9": "UZ3toDQTqdWk5WTuimtcuU4eN3H5qbWiDgfKRC8kodysudohx4mxftZfeQDfUX4gb5tS2WYycBZcNkKs6H41wNG",
  "key10": "42bNXbbtgoxpZjZHj3jvaN9tn68NXu3mXC96o7X6EWfKg3juuJm4HK8x16YHaKFAuZiDjsNe6wrR6pCGEbCb7UjB",
  "key11": "2HoCxPqKaHUMgvQ6vayM9ZwsFsRFTtwQ5HgRhsWye4a6WiWvw13jow7tEuobjVbiT2mPUdgWiXmkwqiRwiu7ot8n",
  "key12": "dAGHZA6MGAfLbriutW9ANK9uP9ETdBCRHxPPjMHBmbQKrg2K7ajFjcAFZ69PXPvRS9gUKbBPHN7iDFExvQyLkdo",
  "key13": "51wMsTJFNZE7L2hpQguRWG9gFpSLx8A94Svaazmd8SAZQoJ6qQEA5s3reDf4WjW19SZSKfo1AESe6ezkDa21uoGP",
  "key14": "5aqPwmPfgobdEVUhnq3RgoQtiGfbF1deJGhk186MKBSE8Cbv7KoxtqDC5sDwEdkUKb5maE5NFoZbeJYyUBwcEmik",
  "key15": "4u8JrCuzaCVdgs3NmUaDyYo1Eq87ScsD4uEUPngPjdQUM295aiYUsj6nPdmRgFEuc2A8iADJ79gjBZoGeCGpfgbN",
  "key16": "63XmyQ566Lt9MsJzSC35TcFpqpi9Bnguxqfx5PqxUpHcaGTupYpPf6P9Gf2g57s43qA24pPsSj4qfZcyurUniY3F",
  "key17": "3qbnRN7RRjUmAJ9Nad391BbiMfQKGKYzwg48ZTQ8WPfmZnuHPcJuTt3RUJ3pPhrsTpCEAr91AZhwPfvVhdb3EVS8",
  "key18": "5KQiFhuf6PBQZimEkvZ3fR4QFgqr8Tmz1w9wukx9Q8nCcNKvP4hqxc7uVeGnaCodvZZSJ23aUVohBBqL2NuhwDE4",
  "key19": "2UvYhZWvPPjHP1kWjseAms1ZCL4BjoaqkfVcN4pT6QZLtWXcjDE7j1FsZZMeawcoQdwixRK34VfcdHAmbV4KxUE6",
  "key20": "5MRtNtK7qhoGsMQbaxVE1dCqwzAw1ASQNMAHT6Fwss9qC5dBFCrUfEohVrpki4GUGGZKLYpRMPxRLE8rP4d2DXje",
  "key21": "321k3BkEFPjr51goBiD4GJFz2r67uUfue1KZvn1zUaLvQK7RCdSk4U4jMxG3NpNttiAoMduUapXZJasLuQguz4FV",
  "key22": "5rrfNaguBQ2BRpf9tboYozcjN8rUdX2P2UjzdJLzidQBvCno9Ce8bkQJ8zjjTttVsPgVLpw9EgKUNWotr66yLKME",
  "key23": "63t7ipEXLPxG5WU4Uo2q1wB3BLLBZzuENapQsnhKBW2KWnixxs2RD8vzZcgQU1oxQoHZ6dukfpVv4Ce23g2pTxeX",
  "key24": "52Tri4V8kcKUc1AaXqhiP9cLuFT16z7tV7uRAfzESfNumEgpCGKyFNrXE7QCg6urTwP1gd34usqJmapFzGxJvPMz",
  "key25": "3Y4azWDqq3Ktm8PrQT8hW48oxqqADQENZ9rNDqrKbNLmZbWiH6UU1zBBbAus8C64grCc2bzhiFfnaY1NiWpaxiWs",
  "key26": "5YmD1WLCqFPGYQ3b519CvNNiH5Yirex66LDEkqdeBaun3fgQMioLxF5Ab312FSARsGR8HX71huF6tdQgovbrN8vG",
  "key27": "3dJ9QVT1xvB89RPv28h6eu3GVaAdyrXDxxpArCEaEpHwjtN7Tr9zhfhg8rEP77uC2HqsB1e8LAXEhqMgr3Jtw35J",
  "key28": "Ns28XehERnuCggPMV2JdbGZTQLBCe6z6FcvGrpEiDgxzYtaqUVZxqgv288ApyfWC5ENccsd5XxFLY7NyAzACrg9",
  "key29": "tbwtAXfFerS2jmRMXjjDUKmWEEo4kwgqEpsNw3udEZ3KGA44TqS8ybuYqRHi9ndKrEktrcgAaJa49edGrcTEbts",
  "key30": "4QsaY1RaSx9EHA5tcibUHwMiQBvT21nJnLTah7pGnNpniwxTHbJpwrKN8L9tAHKgNc5QGaZt7aRtKBDNV8jkQCR7",
  "key31": "Waq11occPDAv7S7UDjFngDfCnxkP6GZkg14W31EqYCM4aNv2qUm2PRwTNrLL53sDtqg6kdBeZZDKNDLp1pT1Xaq",
  "key32": "3koA9Zb13jQwotvCP1PQuhaQvqX1AdHif7xj6y2eSB4BFzHeW9LMctdY5YGS4K4yxLPfR4hkXAnM8zhcJC37qSJD",
  "key33": "54fysP8oXSArQKJ6T6qTMzL7jubFokEJ12hVZSRRUJxH3k2GC43qQV6eb9sZyyftTV3GqzfMiuKKag343GzKUkAS",
  "key34": "55CweSXQMuTi8NycBFKfXGFuSC4kDXCwp4zjfVmtQYBJh5coRUSXprnWy697JWyekkYQjdey48CCpkQWPYiGZuBK",
  "key35": "2XesXQEX1ikTg7hVqygxEXxdkt3RCWR5mUf3ivu6uCmmS9qR25EC2AezqwVCac1f8CPoGe7E3FMkQZE3JP6B38Cb",
  "key36": "3aGRWtcRYLR1UKfA2TYa9UMxKr4Vhrg1KeUAmMhnMATEnRtQMRCpUQ9eLECDA9D22SjAujLQgX6GDFDdrzJffCnP",
  "key37": "nuqR3jQopDrrkBEqifLvxHBkpwLJPt3rGb4JMBmuYjuwxa9KDxRXf8DiykDDsG6Mo8NWCnFh3U1jEF3GjW3b691",
  "key38": "2oz1hKJ1B6BpvJmUMZmnAZqeoKrY5r7CUu74Np7quWggWeD4MhLqevH4vu6H13B7GEGQoGaiJ7jDRkRoj2ye2dZt",
  "key39": "542BgtWHaARePSu1kPM8UgFPvPHVBAekNAN3jom4BWaUzrW199QyTAVUc9LU3CnSAMZGSoUXEiD7tpbYKo6SKS72",
  "key40": "21QfdHFRfnthCX9QA4mTsRLdBjvHBQuiRJ5RoMjkwVhyALLXMYoJMGEN6PB5TEyGR6G7rC8vJbSDi6jAZAz6hLp4",
  "key41": "i1gMXEUKmk2FZtN11bHqvzRE9VBou6yyGbJu6rNMLNPwpqKzYeMRAw4DsuJNLJAjFShCZTRdcpSdNF7i6oQegnv",
  "key42": "37gj1iS8k9cpjjxFuE2eSUMhds2XJCWCrqYnz7hzMXfwwyX4ngEHzEqbqzrKvdraPjvLrX79e3AqsY7Mv4rk6Zro",
  "key43": "5noQgHjXTSdNmZPZJvQ2FpEebQgmuAjMb3Va7AWo1GPj2tSeTJHfWpFvNjNueYywZfvotZ89VxUwLb2hQoimcirQ",
  "key44": "3Yh2ZEWZxxi9vrBB6bGEN46k1VXLT7YXsnc2qBKtNSCjx2xXMsezMQ37NyF1iuZEitpkzV1ky6Wier9E1TN5x3CR",
  "key45": "2wwngX35yDpZE1yWJmpoExAFsbRUW194QR7Tmtvy3FS91xynSXw1GHygTrJWg6rUiyq3dyZATbvva9sPTWWzBiP1",
  "key46": "36qcacwvm8Y3MNYLsy7YGsMJpr2QxwzfGNCrrV41hbkLjFYcwVDoU9GQ85SmAMgzZ4wjXziJXVRkpjyQV9A8iUSu"
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
