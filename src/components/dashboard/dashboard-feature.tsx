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
    "3CJg8Cs3FxoVkCipsZR3RnMsez3EkahCysQoTXaA1dmjYz3znfy3MddH9pe39TgvJZVTk59fPaNAGAXEpQkWRkhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGYVBLPnLiUhJoi1aX3SWWtKV1fncdRox6Aumt6ktkwvwpkbTRJXKGqT4ZkUzT76gpdVBvk3sgpv5maU8K6XfWs",
  "key1": "GPeSm646Z8jRxRZWv1nGH8USiDphLGf8SCV5X3ZG7bHcutWqeYPFp1NkUWJqVzC3tTyuZRYz1bukV83kjqF2aqP",
  "key2": "3pm89LPnUaVtm7w4WYM9dqc1FLYvHcCHtToV4EkZeitTBhW2FqyMzepUk2FYzF1jGUhCKj7xxDVmWDwLzZ1xZXmd",
  "key3": "rkejXLQKvB53oLyWmJoSRjfxvooUWP9mfwgbp6K8NSbXVuhqMYQ14msZyzz6h5ctrM62jSpteGetAjSW89moXdz",
  "key4": "3tHw9jV21Kc5G5LS4bKCcBDePXypAwNPnkWSQHeCC3uJkHCDMfS6kJ6AysGjcoviYWUtGLXNnbY1k26sBTgwW4sn",
  "key5": "NnEev5yQYbXpwz6oRqmUpADZdA59xNv1QFJDbh9DwpBSbpr8x2fJzAVJr6iMdKZrq8FRibo4ex89aidySL884vB",
  "key6": "CZ9oDHS5F8yciti5LS2zXw9HiNUhfdvYqaWwRXAxsX35HUHBtP6fxMpLYZ7w87q3vkEw8sdbSF8WJRfPRjWTSVZ",
  "key7": "eeR86FRHUaf16ufm7Beyjv3QUjKwG3YvpcVGU22LCzvcgys71c3huMKczrwRiyPWq7NVBJUnj7tP6ab1TT4c71x",
  "key8": "5qNzfrhduWvYdKqAtS46xBcN8peR5iKYEewJsDdSzPKjPHoshBR4n6VCTXixVcLHi9hZYRQXseDZ4nCWwD5Et5dn",
  "key9": "2gMBzbN8TcbXWmq41Xjhdbys3SVPFmYtcEJnxg4J8dRaTyDFq9xd7Ah33S8DTHEpxQTKEivokvG8SQAw4AfkqxJp",
  "key10": "5Pye7xuVw7imshDqAKco9zZdpT1qSroNNGDAnRu8ga6uAtHFYnyWPT2PB3x2ptT11TEi64wW3QwJZauzbFdCbcxX",
  "key11": "4HNj9LRRbqAwgb9ejLbKb1MKkKayabsn1MAXBWz1wt3cQhUmH6oqXdm5NmLCMwpR3Zbz2G3xvimGrHNzoCritVmZ",
  "key12": "MBSQfFpddc7QsLXBySL6q7W1j1eNiZZbTZT6jzbUoNDXS3taL8R3HENCUtAq5jgndqiEMymCFA8zfk47xPUtM94",
  "key13": "61zEZ1N1rSiu6bYMZbv2t5h7Fc6A6HYvTcnQ5oGcunzUdJ69DaRvFXyxsx7dG7M5dup3UP4z4o21ksYCEh6t1G5K",
  "key14": "4Lxq5L72hHWK9rh7GPkHAvMoTDvjXAa4Xf9f26F7LEZJH6XaxBU9Fp8Xvg6nVutknDKWsBFj8JRuehksz1FajADv",
  "key15": "3C5GSfGGci5WViDJ1P3ZjMWJ7gQf946Y6agtBswHmMZCEhvDCAgNEgGXKQr1jDigXeDNAhVKZNDUh1a4zBY128Yz",
  "key16": "256omJpcZtaW7zNKnxHPfoLMyyz4JJ9JKBy9VxrV3xBPa1FBFvgvTd9NSkeqLN1iw6wmZHLvrFKgcQ17gz36icBS",
  "key17": "3oey8qEUqjQH6ZKnWfArLJnPhsBm3A76F65MFNHfxYe1vmkJAMwc8vM9Psh7shu3BVceN4KbDKiaw5XWWKozmUrU",
  "key18": "5VC8gXxRJWWRpdqjhnQLHoY7tPsWo2FNHp2k8Xkka5Ln4J7UrPUDCHUfYyKS77nBiCn6LC8FB2saE6MtXai2bDNF",
  "key19": "41ZTTWCij5aXA1yfdB6EXs9k1HZFmNG6cx1sGrTxBR1mVFE34wNcoiN5LmbyEvTWqrSox7ggcJGvthGkHRyBSiSv",
  "key20": "2Hi7WTPrZXEqFeKddJujz2UNH8QeyfHNhydY3sZmxcMncWzwmBs2NgN1KDyPU8WtAE1y4M42fXb8UUCxHBBVsMkS",
  "key21": "4EiVbC91pQ7G7HUW7gP4XJXbdySgXEGy6q3Ssp5LvDyJHxUMSxhAgUz48u7GCmtMfU7UgW6AaShQjpQKr5Wbqdr9",
  "key22": "2CZfAAu11QAVN2pbXazGJtn9HVYwYowddsgK4GpH8Rs3GiJ72w36uuto52XJUJyrENHms1aCb1ti2TCYprPXi2Xa",
  "key23": "2YEM2NFXN8b5Hiq9FnGx8B29z2cNKnwYMyep5afU1HvYz5HmssoHD21SqeubpnZjPQNFnuJ4ffde4pMYMKY7BnAK",
  "key24": "4DDGbMqcV2kjkriVaDSdpnRoBUgMARDXkidd9Q2vTCU24X6F8Hyn3HAjja7uCN6eMtBSQqB17guDuypbpjPmwhKj",
  "key25": "nWQn9DjMgqvnY62J8Hr5kP6b39vHdVT6CwR113qKhMNbuVFGZKxRQyp9FcoQmqFUBRDUEKNuqmuuwbFzYX3q2Gu",
  "key26": "4MUExKAjfknUJUa1uvkXiXLgnu7rS3vnoaUXcm6TWVT6MZkAZHZKHgWqw1pgAi4aPNPHN1yUR3gfe9DLJXofbMh1",
  "key27": "6eQanzCtsTrpjquhh24NCPTCZmVbRFjD3NZ5zkaDWLcrG7mq74h1xhWkSwyCrpwQUejrgXq1g92vgWb5SnmNm3s",
  "key28": "62isJ6mQggTyJKzwTwVh7NALWzMHLzQo52MhMs9B1krVcST4o1w3wT2cwfn5r76YxUxoPkSvUsKQY6uC45GUJqpd",
  "key29": "2x5pFS8j3LdFnUCpoB3JnrNsZxDiVpr5M8BQEgbLBF93PAMRyxMnCmJgCphTXmnsmAz7Doy73qZGHcyhxYKwVPRb",
  "key30": "61HnB9icQZ2YhLVjw62MH1Zsw8hjWPQ7Gok8XJuYc4i7ioj7nNLzJAWwga8DFu6ztL3s3BkncwiDDnHm8cm54eir",
  "key31": "5Cnw9BcmJ2BxzZxwVEx7z4J7FCTTtnYq3DKAsDjRWo3Qyda8bdoDgZ4CkksyLv7nhfLKLfDqyMNh72HUNfcfc3Hs",
  "key32": "4ghxg1ZmdrSiGGb79Kibt5sMkmzvuVGYP3wMomxwsimockAD5ojqpxsjYkU7FQcTGez2MYraQVZqVb82gx2Ww4KH",
  "key33": "5fDy6b2fWwoHyDSL41ftM9viaz6A5FzrnLk2r3nBVLw8i8nRBs96mcAeh27DDXchhUCzbd1Kd3NqtiDcxzjFzcnS",
  "key34": "3RHjdvnRvh4JqbBDaoPWguymAgmY5NcRWuQXF4RHPzUYhswbTt4gMv8vpZwPtVezPrwovHgMcrhsKqcuANL7PtGo",
  "key35": "3JTtB9dYWXjme34uFwtzkNwojvBKRL7D5rn1aFWm6V1PeeSYeJQzbAbsr5ELQkX8FzEvUjCGEhyX4STNTZQPd8k",
  "key36": "UirP46JK3cYFecRSsJtqxKHZ4BL6VNmBU6AqzoMCYmCARtdbzXpjdHmtDr871Y24oxLraGHFpht5sgrpjYNAR5d",
  "key37": "4HJ3ExRPpUstHen3oEP6D6ZDCcwgiKPJrirQv1YewEJF97VmiAncD9kNNRSiCdGyt4HNyXWb7eooWau1i9pDJh1P",
  "key38": "xh8SUdPF2dniHNctgKNdXcSxLKF2Sx3AuWxv5Udg98bB2yDUhS6oVG9dHAvmS6bkwwkfmsisi1nRKVCoVau6moQ",
  "key39": "3SuKnYWeTKgdrku6zSAbC34B5Co5W1meqneJ39Pzf6RLSmnfmkKfcw3FsmxxvrWQAdX28KauyLdq2HvNpa3p2pMX",
  "key40": "e3rQBWRW8jvX2dsDXgs5TNGZLMm5RQmx46KLUxWJAdEvfB4AsGqke4pXwXdk1fbeGVcG9d2SV5DC5FdWMxGF6E5",
  "key41": "5ivERAqeQzyanftvmhKQ2u5Jq9AU8D7UDUTBQXs1HYBtRMn1hYaFPdNFhXZWT4Vzbv9cLjdRy8pSjNrGZRfFaYbZ",
  "key42": "5jKveQyRvRq2NrtwohvyGVyWwxzuUw945XeQr4mshgbWXy3nPi4asYcXNzwipTUQqjhgbmTphvPy2mN7VXqCvsRx",
  "key43": "5KjzwBFQDWKD67cFWTUx1A7vVXgUk5kTX84VfoSTYRiRTpHUJzc5NMdEHL187FNjKDZ3zaqXYAE84Qp8CD4ShPmh",
  "key44": "2G9tssECxKvo66GyaZNg7hzX2UzRfNY9DTnHhWPrbuaSRFwCGcinF6U3fF9RyaJnSEx2T7ZrzE44qKKHBVY21wa6",
  "key45": "2jsw1tqDDEVaYZxhsLxez3fQoNaiq3EZG87Ks9jrziyJyofcHzSKLrvezSMkhDcQBhf7tHivHCNHRti3XAZ673oG",
  "key46": "NFfEyCdWZqrgtpySG8tH1SANGNBxGdrTKr78ydp2UUGJLrP1XDLCWRAuxEHcRVWLkPVPvtCgPY2w75G7SnBJLnB",
  "key47": "4x8sjwZsYLETK4M6VoAfMkkneZsnjMTUjUWCPYGauAuwKLyi1gvbygisEUHdx7C7JvaM1hEKfZueJPef8cZyDMRV",
  "key48": "NwMCKbSxSC8CNCF3TbeBbpKcdiquDvqPfr9fG15HQZXGvi3LxHG6janypuqVgEWpz1vwXmJZ5b6oRNkqjiMBk4K",
  "key49": "67YVnbi9qnCSNqRpr7QXayDgUEmDi9UgXs8UhnsNz2FhJt8pGyzVSjGNb6sGz5AbRLK3MVHLans7jTfuuZNRtjCG"
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
