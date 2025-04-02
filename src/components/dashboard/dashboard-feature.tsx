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
    "451VbFc3dPcJLiVUzh1otCP7FvpmqjnnnrW7TuR9j1E5K7HQV8HUdmc2HYmt8X4dMRZyfimrTefHL24M2JH1WFYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3pTZSs1axNDpg1yTFfitEm6zbeAY6F9WYv672GdpjQvc1Kc7NNUYQM9YS85kkATR45zTprwxrHvLTycqXGYozt",
  "key1": "3iXtDes89rd3Muntq7wwjtv4b3Ap5Fid9fR23ZnTkNjgDp9DKauKRphnnEsLQjRnJJxMuCh8fnNGVUisUzEsyDnv",
  "key2": "2KU7ytudfn3rAErv84hTwY4NaLCTEvzmQyBz2BDcsHLddR89GEd22rdVhHM8RfSiq3YDRQwfQbS8mFTie8Sqqi6m",
  "key3": "4iWmpHddLmi2G1iGJomMrWDNVtBt47aFhd23ZzobLaYKhv2TB8NqoFfMoAcpk86RG9nZyxUxgjfgjFxbYjN9DG9e",
  "key4": "Spp5eDDyGdhUHNmheL3XHXAvcApk8vJ9Vhhk5UKYMNeTSBnQfFmhY5uhXp3LsYbhM28ZC7QKHSWY4rgUex578zJ",
  "key5": "2HR8iMM4ekRaR51cFJW4s8TGixLrJy69omNUPns1wDAFCVjVRSTGvNWeXR5xu2FvNJUQ1wSRuqHDpYYDo1CdMfiS",
  "key6": "NQrgJskMZAswnAJKbAD84doVNH2Yt6g9kSe4SG1tAgSuWfCbWdCbiXqUDJESPTzVahs4YDijbRuJqYhYfxxS8sD",
  "key7": "52pAFRKRHdsLfsnrDXqyzEeWFa5NUjbqpPrE3wMgKGGDUdqq3k9XFM9sYPKBWMJqfpVZsZ7nYQBiNdZE4TYwXWH4",
  "key8": "3fC2wzTfXnpYy7urQbuA2PJqwauUQmH3yG1PRS64h1jKf1y4LpHbijyMig5JdVsD8ZTUGETkaeCGm3f9iiHW5TCE",
  "key9": "3MWDRpM5akAPHbsdZ3wiCsmUfGrxZsvtR7wsRpSYXN5nsp885WdvX5kMAT7VKEXxGagSCVDs96LqLTegqWd1ttos",
  "key10": "2f9ovFdbUHEcpcb4ZEe4e7HjS7YazfJowjbbyfnEZtFnNndijk9g2G9ApqhKLhE14vWurx3rZXLKTmK9JzyohpAY",
  "key11": "3sX2GEcVXToHTHxoSF4FtxhSFbTY4ZBddPv4m4rnjkUfVX1bQoVhJfSxiJo4n77dwAC1Mv9n6V3h9z5DXn8hinYQ",
  "key12": "jBy8Y3P7kcRQ2JwMmgstv5XtNywsFzpnPLArR7aZCpkAvLbukaPLwqphuzXtd7H2eTJRjk7Rrqen3b7Lbp2JMci",
  "key13": "49ozwZpJttFYXoWHDeoUKUZygdWdPpHDUvmTdcTwNHs46do2gUQwD3pHk9bNXXJ9syrfA7gDtTzitgmLrxaZbZ7c",
  "key14": "4rJpuZtMAgDg7eDJHjATwvkVnKpCthBXtguzxbmaa1mEiMkiqAhHFLCah8iTJ44MxkbZmQjD6NZtMFcLJzHC4KPf",
  "key15": "QY67XsJfdQwSp11irCXdNSUXWrjhGFZLfC2QiaTVL2WjX8Pwce4p7X8SNiQr65WW2uoju3G3JmcnYYKjWWqjArG",
  "key16": "5Vfqe1AKXnSNq121X72H5h56Uff4HvgJxGdKxF4KAaJwusYsitPQYL5eBszJbZtSJKsGZhf1qsv7F574dZUnHbK9",
  "key17": "5ag67gbTwE2HALEjWZcyMSkFWqE314Cwv4nCxw9ypajCnWUScHY9beV77xjytfrkiAL8GQMiSDNsWS9QVMuYsKFn",
  "key18": "3fENwvSk5rTGtHDEinjidCPJ3npcFjiHZNd5e5ZXmkh6KFPwwAPr4e4uePrWVCUBT9Cz8Neb2vFi76XCiYKqjzyP",
  "key19": "3c23Efm6v8VsBUReQyGm7cx7fbYRezZaQ8mh86d8Lmt4vbBLQnV42Noc1jdSVK4PHbhv8wNhcvqoNmT1dvZP4sCs",
  "key20": "3s35EDFiqWsQHPLe6ZALc3H97UykQqhCJVwrAvV9dDgB4DjhTx1rqprifZ7jmFNJ3d92yLWhab2tfNQVkxdckwSq",
  "key21": "4BFa5jM9poxj8Dexfi8p6j8ypjdUghJpsGPw2W2ihgyMesGPt4qcr4rULoApjdWLGF69oJGm4Pr36yQKEjtSeur8",
  "key22": "2MHL5GuWeGLXNynJzCv3fGLKUhq8ZEnUo6UZ2rxTBQU7BfYvgu1mCkcKq5YH9BvMGeJCxyY2ywociCkoAXQ4ehKD",
  "key23": "4pAhGKNpWTpPpT9orQLp22i7CSjVkXAiZHSDKJbg68TBrwSznSzd9ERnQTSeb6c9U3hAenaFMChMTmhLs37Aa6Wm",
  "key24": "NcKquDA4GiUxh2P4rcKti8PB8SndTjQkLufg9t6t5KXYg7zArD8ubceiZmYuuo2t4SYNX9uk1Ek1yjCQqpV3xey",
  "key25": "83w2Bj3YRBbpGL6rqsqWJsJG11SViGrFpfGkAugFSjNZd1QJFPdisQQe1Qm81gv2vfvaUjjwy8fF6Q7sWL1ZoXH",
  "key26": "WtH8hx9EcZNz1DH1Dh5SD2XMbCDkoix9X5Bu9wKna139pyZQKqNwXGjGZo1B4f7RiXx2TE9EwhfCJwF4Wb3wdM2",
  "key27": "3ptaT8xuiYTpHvMniLynQbZ7Ym4nPXTUNQH2qpL2vSzAxMAa6KqeGHhusiBMQaXkkRFfhiQpVxTxeieG4JSNNRFw",
  "key28": "3VMnuuXz7ZhBKxSf7KJXD2MxejehNzYFHXJfqNoSDTNEWC9nei9BWNwUAFKwCZcTz6NQCiezEbPy5XPpCZhcvhav",
  "key29": "2f1n5veP9xdcMLV8JAzMXeT1ErzsEyiFyb1mhyiaLTadNW8orRNTskbXZ1eKmMsDHTPna59aAYGnc69TJu49MwN5",
  "key30": "3VL8XFLu28pqc5K8JJCwbk1mT1ErYWyY7Bg6rNb5tvbN6fSDxUqASpVwfT6ezTSZw7PKc1pZtrY2xDCzBeU3tSMj",
  "key31": "4VYRHi7BRX3ynx1Fofxt4TtXy2GrxiwCVDnKf7g4Hd5Xpuxc8KyP1z2Ezvoa662E6SPb9cuSJApmwojqtBtYpw7r",
  "key32": "3HNsR162fcKWsUGzmnwhoRZNogSVrYCETyDpe4AmptV9xyrgjn4UFoQNTd5hmWunCNhaS1TYBGTJPC4ECUGtyBEE",
  "key33": "5yCoGNRUiSj9yKpAu9Ea4Adp7ugbFi6F4UU1oQTRLkejiQupoAUpwWz7h3UecEDRUcB3RwH7kv9UPmfnrAhb8HJQ",
  "key34": "5TkXAmK6njGXbqbngXodPWv5Hy85vgco6ZqDEhpzX4F13oGLeJNYepPY6R68Bpdh9s73GbAJJHAJoGhHMckK9RtY",
  "key35": "2tV9JTjUNuEvMRXxvTA5Anhz8RcyqhvZ1CJUZ7owZnWR4TpbmEjd8fPHFJ1ijdVd5PkPttTvazcg9Zd9VJJsVZUP",
  "key36": "5AnH39SyJLXrvfptkYNvXkeWqRoJQZHnW7PctGizj9UP5XSJ6Qt9XiZ4yAMkHjD23cvHrKV78oeWZKf6dCQg7smL",
  "key37": "2GcwxPjVsPxFDewqx54xHLE7bofHGs421UQbcEv6M52aGWPM2zKPJFBGTpQBdyaCruwrUvsn5XD4UDZYCCWwZCJA",
  "key38": "4BTy2iRwkmGDTeqvYibvJjuaV2Zp74F3PZrP4B6f7jFawiKuNphyvasryau4FbksEMKsAcriEfSHDud9iomQHNY4",
  "key39": "5zpFGCBJFFn596CcaXpT6R7kweknh7djbnt4r89vGwLeYoLpvgTL7oBu5VksFy1Bsi2fsPC7CpoLo3HocY7jFJs3",
  "key40": "2PvUUNK6tywvWdXQ4V2eBoZom6iwsGCRRaZWE8VbqsdXg4kYcQs6ugYeRUEZvjpnMJqxbpFzPXGL9GKbKpi1zbTw",
  "key41": "sXvE4nugvYKCtAMBDWN6PekfYpNNaYb1dnEKUrQ5B18D5CY3nrb392G3ue4FR6Mv1LuEdGEASWkZx3dYV4nSrLD"
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
