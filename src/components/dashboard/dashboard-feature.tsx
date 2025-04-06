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
    "371ogg54sbvJwp4ES4BFYp8ARq9jYViwLKNb2igxAcX9mHJhJthsRFKBkWYg3LxH7vLNWR6SsBteHgGnkaJZ1ZkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qo4NVTZwEWbD4tqi8x32LzSpYbUWbdcDZ8k8ThTxPdPqLLDrV7cGzDW4pQPdqTKobjzohjSRMs4Zwci8VfPpCbt",
  "key1": "3R2Rui5Yi3RiJGZGFppqyUXtM5JMwenr5JE9GakiK8jLctEV5xBQWVKqED9xJmQ6Xx8qymvbkzUTCVy1yd86gkxb",
  "key2": "2VE715DYCQaHpypekYnFknygXSWFSzTCSPU5ahWzPBo3J5MV7arBc2M7ddm9jearrZxE5hQovK56paPwDmR3AFw4",
  "key3": "2nhZ9n7tHi57Ai3t4votC4kFttSaZp6HU4tXxzXNz18Qhq5JLt5B8DNZV2F2WW8G1pQ4wD3fWin7JTPY4tS9GLGy",
  "key4": "2wYzVuTpB3e9m672g4eqfiXSBMzxzYn7rgfGEGRJeWD3Gfd3eNb3gK33pUfjq6LEu23tPeWoVp5bCbMQp88oLVPu",
  "key5": "5E92rWrNHgRC5s5gt5GwspUX59QB8hnuEzz3xZb4bfJZchDbpraQbztWXXDKbBTEXv8NYD7bLV2atXfnDjy1JzNF",
  "key6": "5HJrgPk4bxEoZz7yrqyYd5rRuVjM6aYeu44CzapquXHUNXuxwT8eVUqsmB83PWuwfs2mbuQDeyvFDkSLhRZC7LRu",
  "key7": "56VMuWkRVoyrsviQhQ1JNVkEQ1qnXjBfPCLL7pF1s11DQsUVRBrQznabqxmmNex3M43hxY66vVyH6ACwYDeN7ouj",
  "key8": "UuMjeEANYNZqUimk8w6BcaQawb4XHyazaQHgheKqfL5wwThkWwNSVAUaBPeWTE7KyDEp2CyGweKLyLDu7bp8PZF",
  "key9": "4b9WxmEKpv2w6PZKyYUWTt8b5J9PYqiP4g2NjMG5jURHxuX9p1ckokBMTuhhtxvFRf65fhHrMSSRhD2pJDcAvzkX",
  "key10": "4Yn3tJvMmPV6PrjjCmYwxCSureNcHGrNw6PyTw7h3e5m66BhVZ1HSwzPqWNeEJoH811wi7kt2coZDWSDgFoLZhJs",
  "key11": "2khsPyFLQqBGDJcfEBrw5acExwv2AdMzrbLcoaqJ33TLFHghEu1baezhNpiXcdabSovMPYhcC5hyomqQJCiEu56N",
  "key12": "2KstL9uNhpdK4p341SesciWRe5oPHSGmqPcHt6PSPJqPZeAVfNS8KkMwUoCTup2nZqcMTVR1QKThEkivPViVWX6y",
  "key13": "3hFPeVCS5qGhwBdZaKdPUkKgM6tgB39Ysw6iJa2ZyvciSS8kqHriY8bq4enEF6Mucfs3YQ86dDE1F283ESSBoWqC",
  "key14": "2uYJUD375dnfxzFPuMkcS3QcGxdewRRsbkDicc5jwnzjKDehhry37R1SPfEZ9FRsZqhfch9oPFAKthrkCSFUENUg",
  "key15": "ACcHmKqbux2RW3SL9NYgJ5oXjVorVxUDw43VdFDARj8mWecYMGEikDFMuF3kR1T8x15M4RH72QrJUxNt3F7yg18",
  "key16": "5qUsFupvP33BdoFJAeP1oWf51WymxJXE6LV6VcMBhV96CCn44BUPPuyfEgYd3ch74bf8NdZ7kjSuERCw9XdWm5k7",
  "key17": "1u9ZazfG6SxoKKpB5JVUL17SBZXzyjzgDH2cqmUkWuRtPprANoSyWUqtpfAq8Dd5514Av66HnhNobRDipn53DWr",
  "key18": "3LdnQR7YAHcCe3VAhLeufFfzV24sUyk9gyodHQoDdqxk456KwcMcYpUGTAQ6TLKFAsLzKbfqoKVVCKHHkN6vy7qN",
  "key19": "4wkN6xsYkDqdexU2kXWjndRn3Cz69iSktFX7yxYz7syQ6G4kxAgAu4jgnNkwskhb1gpTriTJGMTfejeRiYJ54xV2",
  "key20": "TXTko6ZvMSUdY5vdPEKCZA3W2Lh7MRibwMAepmPjQoLXDaaKj8ma77kNyfMXsH4HQo1u9CYrAJhnoGSpMJioc5X",
  "key21": "5uNwAxzYPGDiwWCCLAgZ52ctwLjk8ujPoWW8va8xHa9k1WmfrYujfYrm58LWyq5ayiBsEUfWEBUwqg7FhJqRdfua",
  "key22": "2ZyBZDX9ZWtULyDvSpa7qFKKpQveEsRbiX2E6TwJoAfC4jhLwQwXRqhKct4zywZfykNES4vbLj71rik4diVjun5N",
  "key23": "iv3pfX4gDPj67uBh1i5NgDXQs94THpFN5811J9r7WYtdvYsP67GeZr2MG6ATi6Mxjy5XKySsewuRecebkz9sx1R",
  "key24": "5ZVoj6h2crScjPfZyzCL6VtChhEf7ZYKUvJKAgwPj8LArZkiwq4KzKtdBLcYU5pi7JEMTiXtNZ2GrSehjLAZju84",
  "key25": "2p9St2kztPaXhDLZJNmSpyHJA51Pd8EcER5bpkq8FmseWCrCfcdu8nFB4jmPTHH9pasohmtsHvzCFxHgCUE1tkfq",
  "key26": "2d5EW8G1Z9nLp8SNWK7iJjyJe92Uh2kMJYYrdbX1BPLkBY1keRv6eDiq1hSFydMmru5myGp3zLJYNJHRf9a6xDmb",
  "key27": "5M9Sek7cTqdDyQhcxgMgz9h1qCjm1KrTxgH634NUt6dy6dR3jppY2sN1XwXHCYw2k1LXTCLwJDdpYH6A5DJhMrmK",
  "key28": "5RWJ5RovuZthtM79t5h2PGNs5eDgBFDHGBTzFv5JoxNptdLWRkCNANPyZHMUevijguL2Noaqej2C2h9mR4uAZJEv",
  "key29": "5SiBmCme5tUrt3NGifFE3sHi31i5eXDfpdbKtQGzA3bLH4hjg9Ky2Qz41FKdkm93FFFTCMZuFGmfgP7yMNMCRNwK",
  "key30": "38NoPyQZYKh4nXU4qy84hm8ioeQHj7wPRig1NeYiGxiY9sgq1VGZmUDAcPCKMMwJa7z1HVbaoHPgGiz6yTRwkQeS",
  "key31": "5KA1dYyV2vPw9zA8XvmTgdxge5C9R1hQeHCNztkss6S2KD8iXXrLSbmuu8a6Qajduq82R7K5MG1NU3de6epbugMp",
  "key32": "385T3PMNraEWPwp91cPjAc4YGEj5LWFtdq1fHQbpKaWumDAKc5NqzyR2Unx1F6BwHbFKEH8YzUjrC1qyni6pXi1T",
  "key33": "3RFsBzt8BSmz74h9UAi5b9onagshr27bVz2VVe5XJdtdUoJVmdi4wecDbvGs1k5wWrSe92GZdjYNRUqjHtHkuZ5z",
  "key34": "1oPQrQXdrEZMXyBZRHLHz9a3bGhGM27qKZmUDWbuaU9hsW5A31wTYAmQVhr5meX5mH4Hix6wfpST8UEf6Yyuwyk",
  "key35": "3oMjzqmoi5WZ7JmYuBqv7DhbtVE4Wy5ySjfwUZkhsTP9w5WH1GZfgGPntC1oy2vG7NmqNmaH4qLUerVuzErqPz9P",
  "key36": "3D9edqzrehdtdNAtuW8grg8H42T6q7LLuASWEfSUV9SGdD4DhGuKgHBV39hq9MWTaFfJu8yBqaVz26P7EXiEf5pR",
  "key37": "4jKzEtbFKoFPQgJ7ePocEeVc6jQg7oxnDqH144eUtKkWCzAvP3rB3YBbS9NzhCBFVTFqdF87X3EEZuef2UdD3fLa",
  "key38": "5A6MK5YE1fNtCQUkeDRdQBRUq8G8Vf7P8DQBpxzHMm54cZemua2djVyV143gTbAUwt1P4prK2kfyEUzugtvVUoCW",
  "key39": "5H8nunhHoMvtdvfvU94Qb8fuddkRKcsavYk3RAUDuBA6JKkDwzib4ZB45evsmyhL7AB82NN1zkSKbRzx1kgTCguL",
  "key40": "1cG3D1gr9doFwmDAb95tkWQAnXviAufDQ4QsbLpJJJ5tkKNdC2Xm5xrq9cDfqoEfvpiUjyqAb6Sp7aPtZXpSqoR",
  "key41": "Nv6zGVWp7KmuFX142j14rvHpVvq5ydu4eZGaRBgDyEr5c84qoeYFCZrioEPg6jCkKEVcg21hxSzBmwkC1gK5Rmg",
  "key42": "4fFN2qNBn2qrEe1c8btrqpk9mQ2MuHWSduFXWtBigMP9PW55of4CKFbtEtSpPYWwA6wQXXMCjdfaVNJwKKRNoEBD",
  "key43": "3LmakuEEEJYzr3iN2jwwaQxpHFgThxpzyeJXfrgCc9Pfwv8jeQYGaEH5ZvgjHpF2WAyxvXr5c5Miv3DbVZbVBAEM",
  "key44": "4LLtaWg5mfdgs2gi5dG3hjqUNd1UFT2oLPSTbojBEXgTQEQcsPCQa2vsF7ExnWYnCYQwcV4BHiVkZ4WCyrse4WQ",
  "key45": "2z9YVRpMqzWk7L5v3zLk7pFAzkV1qPe1oGLZzdYT72G4Wrb6L88PQhbCAzjwxz2bTBFi1EQW1iSkMfrGTz6E4uC1"
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
