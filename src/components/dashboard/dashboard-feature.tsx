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
    "5MsFhZZsDYyXPJKtNMWP2gWBLDhU4CAaGw9ZedWEYVDYjRJiBj4zAYCfTTtApQF5mkUbtTmBXuWZay9QewJ7Hmrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PPfRwHSbKe8PNQ1zqhbuM4m3Lw5WshXbRhSZbekXhRQG6EBgPksNH5WJHARmGs5yxto115fjmQtJNDgNHvgp1C6",
  "key1": "4wQcdM19GYqSHmFzLm2c4UoaynSCZhxQDfGGVpar8Uc4AFT4htBVDd4ro13kUbSgj7H2ePjBDk7F4mJcWxkdftmf",
  "key2": "3S7qHWuwtzxPhb67KnsZDZMzCzrAEFgY7apgaVDSTK7CpM9vcJ4Pd9MMSTunmhnNa91YMx3P5ZpmdTikMbZx6tEL",
  "key3": "3Tc8aW7SVDYze1EzsCwrXuWUB5QvCMA212PEsGXwi6VhYLmyvhMCTm3hsnWaPnCnR5xY5WmKvXLiBxbykcGn1NdD",
  "key4": "4qJ4Eeg6Y7yQsN9WuEw7Td8inZfcMAH2FD8Jg3YRVF8B19K8siGi68P71Gu9dDdjBnZr9dZEQ9mhn2bipjUBzHeg",
  "key5": "4i5Nc4BXSc8BVtL2WTiQRbeWJsHvtEXFceoJLQnfB8p5EU8CTGkiZMtdkLh5RL3doRaEPQYowkcijHMGZfiGFcgp",
  "key6": "3VjLvbFWvozJBYMAoroivXVHq4okV8bkEmGMK7X7t2iSs9DEFdRj1u4VxX2ZNq6BiyKFVXaKJYn4nSGpdWZhR6i4",
  "key7": "5AQYUB6XFPt3rTELuCoLwWTaFQ3EFptLso6W8XEw7JWwuGSB9pRNRovBPzodTDGkTo912kmQBKpvTrMqE8qW4pdA",
  "key8": "5MiaSJYUsRX7SoeamwrJd1oidBNeTBJes5EPnFCnwEEbtCUpZEL4zKtVXS2AZv5s5fPXheBEEm6tk15kksigP4vo",
  "key9": "Z1JR1cuJxDr9UJ92eR9F4z5yc1PpS9FEayAQVt6XXX46J8veRPXp35tCCKeEHYsUmkbMzPntsvhHDxokag6nhov",
  "key10": "4Hr3a9dJDWYPzqnaR4YsnP3ACtSiSFoWJVupDe7iFZeNZRLKkbvrSfyJR1k7aHQRzrfpsgdR6oZdg4ELJvQashyo",
  "key11": "EJwgdXxvQdNLZhWNr6zWmHP3E7EL64Q5txpTTSEpBS74EytfEiEtWtzMbQ1ut8BHsVRfvfjWMSVRbYsX3jihhWt",
  "key12": "19FvtVN3UiN97FML6YqKTsTLXYiAnsA9fKsFNT4mcqskExLdZUgEyRDX5bKRqhukoLLhTAPkRvK9AUt5hbiVyeN",
  "key13": "5hcyWKgw8oPQzw1hM47haJc1tXjAEZXA1vnrrvypqTnCAoYLyk4c2pXMguEa4hswPP9GcyoKiHpfT3wc6ZTYMqgs",
  "key14": "344i1uWRU1irfXmzurCzfrojPWJfeeQtfkFy61fRRywhZHM3WRwiAJjajhuPcHC5FQXbGsCrTfUhBqE4dXb69WNA",
  "key15": "49745QsXsQsygQyHzWAXuzEUUnwVy1NJa2hx63pJ4JqCZRmTaxd2CBSTp3YwsPPyjNX44ayYrV5iWoBT5FrTnXRJ",
  "key16": "nSj6VwY2pitvMvNCPNiqnkutw7fXZNEsr34xGG9kuh4yPTSd9MpXSjaFu1emcUiT4z77NvyW5W6s9oZdEk4WB6P",
  "key17": "5MZuXkmBTUzyee77SmSdP4SgNgufBPW41joUYxLqET1Kwoqhc2keizdQH1ogXEdSRxT4E1rChwqMQifqy5R8Z7ar",
  "key18": "3fs6haetNrouTXVeEHoqJ4U6hT5viKeT8Rx356LMvC6beNWfrHwz93sfPx4nqi6pYpyKo2XnPKpZPz8fR33CDC9D",
  "key19": "5ijbmnkLHdkvEHaxsXko1SXQf6ZPCJYT2qEVBH1aGJFJKrRxv78ss6DTcFAUfnQivcppAigEGDi22PxWRim569go",
  "key20": "22GJbigkrDfWtuJsAaXW1rsSNPjyicTfrTqs38Rshb1dy1jQ4fbhRsCUncs96rTzAjfxMGfeTkUyFckG8nrTZ1pv",
  "key21": "4g2ChNF8gwvagAsbP85oRn5KC1e1RTVwomNFCDXWXLPusS6xpMef2BxRrAiJpUSaa6j4xrMqBSq2PTs5yv53G51R",
  "key22": "M3deFuuRQCRX6oAN2uXHCCyTA3V6KUussY1A9prWQ4pU2964FoCN2S92HUnZnB4jF8fSaNoH5Bj8QPbFdrXCqAy",
  "key23": "59TYBYkrTnG5RXY5syoPQvzB55d73Y3m684JLggifiLievbm8QAp1cZXpeHcji9m12QcXBrEd3HaoxuLrFbrQ2jf",
  "key24": "3sNW6tFTHcTG6NAK7zsKjPQShi7u9VftpqTnzizy1aVuidDXrmViWuhBywo9bD7pVyWe1r9xqRP7TEAGxAkRZfv7",
  "key25": "VdEYEyw3Gw4nQnJXLsw1svYjkFpPxAVFfxx9Ghud2rKD6kwPD2M8j7qWacSiVu77vLo9xWq2jWB93MrdfcTQ5PV",
  "key26": "yY5pSNLinaHk6VdinTt5CSvXW7CJoTTeENTuY4pQVzuFHNyhcYoWsqft99VVJEtVJNbVAjcouxdLSK5CaBPnj19",
  "key27": "65tExS34RsYnCM1gdSFdpR6f7xmaGzkANtyZmcfcEqufuutVkADSFK6qJC7Rk9Jid71BQJ8aQdqjKSPzsxvP5B7D",
  "key28": "pUmzsr7xz51jqQmDPHbQsAg9HUg3YCcnSqa5L6dAdDtC3cwbAvedqi4hXkoRyHnWjdNV3crRp4TgvPzACU2varY",
  "key29": "2f6FA1GKqp2HW37BqsWfhxuh5j3MY42dYeix28bLRWLB4F1pmqG9mqQNQvAK6AknwG52pBo9qgB4MpziyJLSjZLk",
  "key30": "2aMuU4QFon4wYDgaVedN2USZvqyJiEWoU94JWCziFEv1qBKFEfniA7P7sCNfXzR5sZFvbS72xnRrhEnXEG7W19T",
  "key31": "2BRzPUDqvSEfeHqatLWLGYZyU9qQMCa2rZHZi5YBRm3n4MsgMZUno6X74HQ7mSnniQKZvJpFW6R27AJ8ecSsAqCJ",
  "key32": "ZzMxpPP4YLcfXDmj4MnRP9EbeYNcXcsMDn72BWqJffHGWrPyec9EXXSJXSp2a19kEwAvE1D3tEjDa3ZkuhMcoyN",
  "key33": "3QvDatY89XexuxEUj9xd52zbpNieUpVo3qaUxs8DDhSruYHQJQmustV459UL4TZsk4YHvvFnUasG88EYsP3Frct3",
  "key34": "54WR5SYLaGMgygAe7URfJpRUePMPmJ31Uv2tVgE77FELomcCTuhGqyBQwXGX4j46Qu7v5RFEgk2askpsoQVKhGVw",
  "key35": "3NBD5irHh71kFJY3mWjfBscX7JJR3TLjzwv2VVyyx2H2RhHbMoH68pNjvH6PYa3N1By92JHPCtt9DMHmueyfrVCB",
  "key36": "3ZC9iugryyppfQr1D5biWUXnCo9ARBZpifSfiAPnfvZFErcNWiUyY9QTQ8EjRPgA4hLF6ZKN3vvxRUVPbYb5x6bX",
  "key37": "2VWHopNFbKepvrjy91XginHwcLhu5KbWia9EzVY3CpakqzVfdFtX2YMnPmpVrpDUcZswvCH6Br9efK5iZpyjixdx",
  "key38": "5rGXmjAzWx3fHRjPAb4PZdvCzNLVDsS2jJSeAWdAQ2EE67q76Do26xFTbXLufucqRuQNxVwg85XFAqRMETy9LsHn",
  "key39": "5Jwc77bHFwFhYijV2p2pHyZdTVH2iN2TUXHHKCSjhk11W71iSp1DATJvtpH9ML8jjoSbpJqTmy7Zy4xQHy4dnSCZ",
  "key40": "4CTyZyL9JzRJoe3gHN2ZV5LL48i9uZ8yciLPDUXRR8fHNbMT5wrCMTMjVnr847Q8YjpRT8uGedheyq57yeekqyNV",
  "key41": "2CqdLZYDg9euX4wfgULPRzmxEF5H3RRJMqxU8SqmpdZz9LvFzNfnaTF8L5QnwKqYzwezWwQ7jiY1MYRnA5YXhvF4",
  "key42": "4mLSVhqbYvqsoAGzAtMhzerVDKYZqkbh9vNSoKy6pbJUP9iAhgSkUg3mRmPTfDok7ULQdyaQCwegctsqa4GwN44V"
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
