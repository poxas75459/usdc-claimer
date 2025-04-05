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
    "3oGd3eEB3LJXFLkgCm9mgWfhcf9DdEpSBZCg6ES1ZVg2WnoPfijbeXMqvmsUS7NzUvgmmGK8sLRSopavc3as6amm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8iG7ij78dUbwvnSuCVeGUf5xsiZ7qWLkNZpgzNKNTRcp1uTm2HehitEb3SQvfug3QXdx7D9qiGQPpcjzotWbd7",
  "key1": "2uBPsa1DrNRPYS5C9PEjmHjjV8wED7mP28SvDS8qvDnRsJduULiQ86rhDxXsn2n7MwsF7QCAwsPJFdRrKPu52SLU",
  "key2": "3mbLeQZSgFeCXppsW8bP8Q4bTAkd88aSHupx1Sw3QiqkC9qkTK7BqdhLrxcgAawvDB9jvvywn68ERnF1K7DxLwri",
  "key3": "26c9wW3bygZJ2xtKz5MGtpeiW98RJ8jESyejAgGNcnKxkJxdBuhF6xsNQ8XYQs62sV3FbDnnbJjXEgt2MpivTvo2",
  "key4": "3eSF2V3gZSdyTu1dNt4bnfD64rZnj5Q5CjqkBj31vLMd5LHAgidkDj7GSysAVgLRYMzSpCtTkQygtvkFhPXwoEYU",
  "key5": "2Qce328V2TdCyibe8LfyqatCN5Tnr6uaScV8jr5xn5sFHbYzfLgthcuqXJzw47RRfYBYa2JafdVavaJ2nHRRhzbc",
  "key6": "4fHUHSCcEy7cX8j9z1qTcxtsttZBZKRrj1g4XVAgZHaYqF3tsHeoUMgVHbA2pyaWAVkhqTbwGouzxt1BFmTo6s1s",
  "key7": "5Ecb7gnRuQ3swHPNR3uCUrjry9rn7szzwwU7sYBkxk6X9pWES4Dq5QX5sft55YB2HLutacyfvRAP6b5ubYuz5vhE",
  "key8": "2XDLnTS7hyBZJ7Mm5mV2PYXm47Zz6YR9DR1JZJaKsoi2V1PKkcn7gAjL15ng3Z4tbu5Sf4CeZtxmh32f7FhBvKQJ",
  "key9": "4TWEkgWCy8qfhKd9XJrFHmehbo28LpyRLdQY5kP9MtXSFczywzoNTPqiaLVJoFVPXxJoYgVUUKK8iPzre3bWmJc6",
  "key10": "ko3jFqDPXxfoqTcVdv8a7PVkhhxosxStcYV6oTG9CBn84FaRWkXkgRd5WQJKj4euA4cNX28rAVdnzcZDPevbZ4p",
  "key11": "5DPKQD5gfDde4u6NsxYQBJZF3TTFpkTjQkF4Bz5nYNNFmQLi4LFiPcXUHEomqePx62SELdwMs841x5GU7kmHGL6R",
  "key12": "5vfeZJ73zrTpNwbswjmpEbDggjNkQiRThU1hBPj3PX4Ai8vs8sAWPyCewZ781PUiV9tgATYRsJrh8HffmqZJg1Qw",
  "key13": "4PrDynsgRqAhcoWg5xz7WpjYXbYKs7GiNYcKmrJCpRjRTASJLAvKK2hQQ2ZjxPpab6JcnrphaBgPg9LruRGJhXiG",
  "key14": "3K3NT16wiXxLn3XSvq5eArezeogcq458c3TYg1MToySHo4Mmt42hV6B1fo87dNPT6VieNUw5pvsEjgTDj3nvhKvJ",
  "key15": "3U8By73NHHC6WWjVhuPacfxrEvtwMAF2hMFsiULu5JrivUwoKKw6vevBrLPKKBvt84E1rxaXT1937MVFHLPRrjnk",
  "key16": "36LsfNE2uANiYe4oRML92evNzbx8rwCYwgLitXmTRddLivwEhqbNt8yvBk1heAViFNvysvmePm7bmjozTBRxUwKi",
  "key17": "3GV7SUxsSwxnrRCd5pbdoxpAKsS51pcJAEuVh84VLoMs5JfP25bu1i8Ah3VdPLfQUNTBJPfgZ2zyobq2dMPw61EL",
  "key18": "4S1GH6nb72uYyM7utN2y3vXdqjrTguEgNAj7n16gzjoohjXevuujznqWkT2y8ibakG43g8u8qDe1jHdv33H1xPV",
  "key19": "2B1BWCHUxMdV3fKvy4qF8jSmmVYBouKmxu4kQ94ph4wRpf4UfKAMVEjghE76GabKdmQEw6u6aQ3ydcD69a2Bxjkd",
  "key20": "21zXsxEdW99w1SghQHSXMod5ENwexxXxSaM7UcgzHcDB5hWUfgGuq1wvGoob18EuAYTDutpRtUEv6pEX9S7EhGre",
  "key21": "2gv5Kvw6wp4amSzpQuA189cpSoymSp42YCmw5fM85VDMUWHEKrvGzUb6UXBoPtsoWgdPhtuyARB2KVr7mZbSnKpy",
  "key22": "4bVtMLmMFBtomF4YBmF4rFDtY5XmabCRBYxeJkADPYt7GJK98pyvrpaao83bxfG8y69yFaeFLE8A2dTxXpGZb6CX",
  "key23": "4ERQcXLkgyMtdnYJaMESqhcfZaPWZkLBLhUhPKbPzLSAYw6Cb4CdFQBYrKHUW87TpUn6mpa7xVoJ8226QyTvZEG9",
  "key24": "4cCv3esYrdUK5bTbhMdUVH66YmBQVwn5ZHenN578X7oh5qAnr6TnydXpYYWBQyUcCo1VizBaRFaWmTo1wukZyTR7",
  "key25": "5VSKcxpvr9mEDWUTCpA5pbqkF2D2MKswFhYJhxbUuDjBWpHsxZ9qemX2KBScn6bJPEYZ2YihPMkhKGrYk6NbKpQu",
  "key26": "4Roan6Xc52rNAFm9es1ja49qSv9KVBbtZ8sRvJdMt5gopfDttebKCGHQr5ksja3SVzpkjhaNFw5Zn4rqSQGjtdUJ",
  "key27": "4Bvk7SnGouAQwVSPWPpABFqFNDEviYS7s8pxhjRLKZSH52rxM1HK2rCZ1HBuXtqZA56zYYpFLLhbShAqNVTVnkE",
  "key28": "3hBQuAk9g3BdahyoVVfEmSunmuLXogy9o9jW4enpd6p2zcDL2ED3dieTC3aWukMqub62sqo5SjyT4R1t4rnCRUQG",
  "key29": "5SNoyXzkjv8MHLxD11Ajhb5aR6LfuqLBvrGWoycATYm92TLT5sVsTxGN3hYqQ73ErQoVTBV69hFnQbK93fRaBDzH",
  "key30": "5kYDBSzZJng7k7K1aTE4MoKFnnZ76S6HFZWDyMmfWYDNXceHK99AFhfDoEs5wruTwcmrfWyoYZc3dRL8LtDPsUEe",
  "key31": "481ozWAwN1FBgC6piouxf7WgfdXYrqQPUWLbac6Eg9zmTGvE5orHCwkwKZVEYwk2iZJvbFzzucmZX4DsLXQw4BMu",
  "key32": "5DY9dDiu1emrxQyNegWGnD15zFQqoAsnF6ELn7QyyC3czT1xXw8EMHTXuGNGhukWdWm6BXpfu41rpPL9pQdBVBW",
  "key33": "38JMr6Eh3weJmATWcbvBApMtAtyQJafyx21NDkX2LTG1a3TedUPwjDHTPyjEQKdyMGt8teubdTxxmtssx2PDhtKg",
  "key34": "2Jkvne9DH5uzXLusKa8qRabapmJ8Ks2epxmVvarGTLUX4WfH79wTQw9BD2PnnvNCPshHc4uhoNaJUMBWEhAehFgc",
  "key35": "4jbz6XE3cbP1CRZNkTBEsGsbguRf42aVYYKvkTvUaEU76uEP5rkVo9GjuLD41r8uPV7PLTzE3mJme9Lt7mUto8oz",
  "key36": "5hL1sHbURTSPgXfLWtEJ6ZsHLGNeU8QT1CuzeC76fRxtyhPTrAaddJHy37ekPATAjCrGajA8dQZw7PchNtBFGb6G",
  "key37": "4WiF3MYKz5rAeXQHfAyTikoYmbB9J2AvNiyRkiBL5cri355L24YF73DSZb5DpXV9PKs2EZhJyAAcgZM8Wb3xnaxx",
  "key38": "3KPJaKRFyjPGvx82srFox51v7QfKuNh85YfrJLCWyePW5emrYUwcHSnLZgwrb8TqGNoXNpfbxaVqZAhm9b4DvF8e",
  "key39": "6ZgAv75bTYGWQMecjmhuPNcmV3X6LY76pLwVoztEysEyFFjFQEQsNFZUJi9eEqe5zfnxEQp6pZekWLsQ8KDn49m",
  "key40": "4Ptm9mGtSrMpyCDtdzEZjwuAYXHBBnrA2SiWuTe9n4L7z5EYiHG7bHRkQQuKf3A8y3tBez6RABg2tZXcsQJwywry",
  "key41": "3zBpfjzimrrkrk142pKba8xeNaM1ySqdpeJ2zKDMMmNNJx1vNtcfJbRd2tnVZRomzLqNnhMttJu4h14gvu3bDMwv",
  "key42": "Mciy1gW6hynvJQ7nWhba1kKQe7ccJrRLu3UAoLMfdeTEXfds3kA3bjEHTfNxwAzuvkByVAqXnukmy6x1E9SfY4g",
  "key43": "4ZGTBvWnFSoWQSQQWW5EwotTGnswGTAw7h3RVa5r6cbGkrceien9z2GbueMBCn9amz2yT6RtmTurq8BKGhH6gfLP",
  "key44": "3bKfzYrdwq8pMCPNM1L86sS6k7HygrrpF5EJtiF8k8Xzf9u9iq8EoSYAGQhU9UczrmNYXkqrhrhYokXCxHRXtGhs",
  "key45": "HkAxF3wVAoLYBqESKUK4tQYwfiqViTT3gG625Y5CmHtvej4sRrBHnMQFYTWfiLZRtwbhZ7Nq2RXiK8cB5b7Psfx",
  "key46": "2LVZmCeyDb59SQv2eyuvWDqgW3ft9kVFCNLASEvGzKVBADfGcuQrG7cAH9NtRxX7cHEdBG52mBkpXmCMSzQDFkhW",
  "key47": "2zpoF1A7fznQAzbj1o741qcLo91ZNec67q5cZCUBAovoHXFzqrvq2Pr45aRzJ9cZKBkFRxVqN73J1mDTe6hksBXb"
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
