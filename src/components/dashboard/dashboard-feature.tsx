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
    "UPWeZFnTCvqFnhvCLzQy7jYuQ3Yi1LNiTYdnyaca44hE3rbaoqMvwsYu4D9j7NSKiSYc49k8XVakkQX3qHoWWEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dMnPXoqXT98hPqS2ivTxVaWftbwKuHM7rVtCrZu5oRfTGThh6GjT575TazvrT24q7AUyriFFYyHvBtcJmKC1Pcx",
  "key1": "wzKGoQkeYNoyfUwvck6HNHwX2QLEVDjCPy5S6rTDyn75KnJa4T75YGq68CHoi5kAwksHSWP5jvjpxsUyWJouB2L",
  "key2": "5JBjy1R9dHZjE4KRW2kYFZ5M6Rr4Bd4NSdcSBAZvpCvM2rQMHC5HsLNDQAJYAdQMWdgKGCpwgTrDvUxiB9yeekkn",
  "key3": "41NQNsKMDa2Fku9tQKrNHJrbDoXEdMbp2XCcB8mDamwQvuCvCDE9WbWAr4avzEsLHTo63cYgL9RhuUDCmRuJXYBW",
  "key4": "51F3TdKjS6QVmKSKZNujtK61nwT5oqNvmK7B4PV3vRhTCyUoTNMGVSLPnEvx1r6BNo5bYgeT3rtj8QDkJZkvDqWs",
  "key5": "3xkKRF7tES6RTkFkxxvbFuq5RsdGRgAiWKTxF2dpEKTzvcq8FFz8cw6Vr9yyo6CZ4AU3btwhQmEwcTQU78qp8VKX",
  "key6": "3XutGvLsNUYyghrkNiDKozXVuz2Ev3Y3b2Gq6qCkFcnpFSctTPpVxfuZat7cMsh9GnAJfPMPxZZWUubkWRbKx8Ly",
  "key7": "34UyUgSbNWuTmsLbTc1tzHHgBch4DA9rUNQwxRcG3Mkz7FGPy5QrAJ62AhYdtHUVzPFBn7dsm1QMLmtZ8UQhvY9b",
  "key8": "2X6SGyCx6icxuvYEHGJbADSiCg8mHdB283cxCuC3Nj42nmRAcfJgg6kQrgPo2Ld76Zfa53U2J9tWY9Ynk5yQ5iqQ",
  "key9": "2tSFK2V9DwdNkTXTrGs8wzi2A1TRFKNH6uwbUtJ2Km12MxKL17c3X35qH4T51nJB42AwJznLV8Cw1vRjbn77NJVW",
  "key10": "3NBhyr1zrL2Q9XiGBvdTaFfUVjehEARbh2g33vqCK6JrhxWQBzL4mgiLgUtqJNecdLDChZoCFBJJ3KsAg6R3N8MD",
  "key11": "5rGod1YAjdCMrkQC3LQC9CsmA5sQeTAgCBEMi9H9VibNdeMu3e1AG3Qc5X5mMx44ycSjLfs9T8hvSKNC7jArSoJp",
  "key12": "2ioZqMsxdMJ2ssWb1kDEZCKhXHXcB2DiUkVG5ayKKyyKvH7emZbAPcyhbahJcZgPDA7TPoqeR3T6qp14jvtiGJqo",
  "key13": "3QoPW1JZkkPJMfksjPDZGgAVByikHuQnFMubUngaA5hDLfHnEuywqiJB5RgQaM9V8u5Vfa6JFhTT1gC4gFUZaMBp",
  "key14": "4J8DwoYuuiTAe2acevwcB6mrTqDDP6Zb95RA4acGrjQcotY8txka2Ck6TKCuhFGWNDwbAo7oHy6BhDpBviDC6xc2",
  "key15": "3SkGxSBtKB6hniV6p4mCfR4YtWce41jc6xjE4YFSDNUdi5PLdXmdjnr4pqix7ZkBp58iKPKzfhSeRdC12ro2rb6E",
  "key16": "2k2C73xXeNaYKJDfXZcWeu2RrAEZWiNS2YEKQQpWDEgXtEN6ALSBewC2rFSoScVR8ACuYBqcyTz9LcVnWZEip3kP",
  "key17": "2mojM5oFTCZmCrqpKNUmp9NFCb9Y4xyhggvDdwMXfszDiqsb4AJ7CTADNxNxtjkfU87PxfNQteXBFHhzHDPEv6i9",
  "key18": "63NMtHm36t2z9XUomyFaRJvfmb3zfyo5oTBFoMEbkqU17jiqPSr3EYd8uBFHYTkdTWg8wCbWiJse8PAY6TfgQK3S",
  "key19": "5Z3YyptfATur2WaSyu7a53tHASZmMpWYzTmsp97h1AxjQn1Vr71LydMtnr767dKNAqBVR4yVdvrtbjAU5B8NqunM",
  "key20": "37Vrfia3nnisUeUVthi4cY8feHe548eWc71gk6WQsFtZjiBRxugMH9K5E8ikHrKZpFjz5oF3WKCCVLZUGVvkSdYj",
  "key21": "5pBvjFDzwe55JKR9DckoiXdnXZfuTcbp5DCwaHGKuw4Eosx9fk3uCtrsxyxJbnBg9ALuG59qVqhBm2B7U7T8dAED",
  "key22": "rYbotzr8TRRt91G4wcawkmMup8CDHFZk2oCGPTPYrFqnAya86EM3Nhj4TUpfYajPMi8cPrtXWjY5p7F368HdJP8",
  "key23": "2zaRaGTMsDb2WixLpNRqhEQ4asQemPA9JnG2dQzfoASYUHaHhbUZ8HKBrhiqoKyqrvX8G4DkMJCebVvXtU6VSNz7",
  "key24": "5Nj1afx5R1fu1x7oaEFnSL4wDM3BSEd2AqQ1aEr7BSMWsbud9sqoKoM5CBNvwALvBWk4fGUY1gkQtDmvz1pGcB9X",
  "key25": "2TSnVb4LAvejV2Xz2vboaCVUS4xsESHWo1Ayf9bwBqepK5K9r6D16C52QLhvQYWQXh6m8SBdChDDN8qCqDwWZzZx",
  "key26": "VTypVh85ZoSYSMAFj7xM7JBknxJSfDtfC4pL3B9aWL7MKQzT1PZcrzSsx8RjSYh5P9HEdQsmtWCEkg5dT8ipmuq",
  "key27": "XeJ26bBjYkJAAmYKbWx1SufkYSRFJQuZN1x1ZgtuQhSaqqgZCa6sk52DCY7KRqXNAFinRoLdQPgWzN7MYgqkkgF",
  "key28": "3AzqmnA8rMmayNp3F5ZddzvGXfGfRKjeZ8cA5XqgiZwa6k5SbMjYftYzMiNd6MBekFy7EzBKLPk4iJfy4k95gKHJ",
  "key29": "3ohoLgf5KNt6yMyXeys6pEWzKPJixRReuqqtM8QBc84jipjejxKn6H2t2ocVMpU8tqtmYVwFh27uJ691PvppRNuv",
  "key30": "5emSzb7bMGzrk8y3HsDQd2Jm3wzfYRkq2HAb2PKuanjMfKRbzqiCRKBKikQkkCDQvCThBUX3N5GfX6S8RoyTqe7m",
  "key31": "3kAZJqC4vXxc36BBnASyJBJ9wfC9t3sNdWhnZAqpxq2JcGsxwUhAFHWkRN7zzRDUAig8E9SMwJTUSWxRwNzo6ib4",
  "key32": "fooXwHjuEkcshWG3hwTKS42zVELNoNZUBQsSi7dZcyK5wc1HZMdWz2L2ZyuUTY2vsgaA81BveZ2aeetGXvopefm",
  "key33": "3deii7zMBJrdJZ5bmTLFzCUzZq4fLcsBjYSfYU2bsgvZLnZocMANfPtantmF17V4YSVFH2MjXQpk439tDJAV9McW",
  "key34": "3nfFMaFMLSoYdTxWvPEunevfZg59ct481iRLoV2tmJJbrvzQbb3akawQSksQEQtUuzrbmbCVXpF3bhc4Rk8Z8nEK",
  "key35": "4Y9emwDfLVY93jfQqsje8w7wFMQNd1XDRzvtjV7Y6sZ2M1JRbe6ioDRRTTMabrsPeKv4AxbjGd21P3zrJ5DcUpp4",
  "key36": "5Qne3Ycvy4vCxohMQysDTXM5WRKgZMCKFJRXTJxFEk6gh8Fx4ExtgVuKjFsAEjRDPHvkKV1HhLHv85r3eU7qin3f",
  "key37": "5NxMdwbjVbqgA8yxNjaCMPUcQ3gnf6Hqt8bjYiqX4s7h4STQpaZFYEyEUqRGdENNuWKEjaEuBXmZu5cNqBJ5NBgy",
  "key38": "wGDbVA8PZWVvCdUuYNpALCTofzPfXE8o4rhqLLStMiDep4zVN9XahqYJcYFP7VngL4jJ3AcZ5tiPaUESQacqxPA",
  "key39": "5jvLC7qkjbji3paZURekUfiMsyrsVPEXNFr2s3Yx1RYChZqZbX6KFZtvmnjmiiefg1o81bFcAd523xxnjXXvy4S7",
  "key40": "5HjSbyTJXgAf4VoTLChVDjJvKSRrBZfGot25So4GU54eLEeewze7w8QHdK5PxC4FsiutQDjHRYbkK9Lqg2BZPdkL",
  "key41": "62j5enqj6W5dydcKW7H9g9qUYZhWcN8HMeVG5TP9KyGiNBThvR6f88bZXFYEvLQSk7bEYtDPqLBcwYhmHDn4wL39",
  "key42": "iFiTVAAmRJiWsjyb3kLqKEu9AuGmz6i8YUZnHjGeaUTdjmKDB6tT7qfnryvbD8zWJY5sp4SLzAmh8vxevcLxEcg",
  "key43": "LYEhJg3a3fcvTjJP4n2QdLVwsMKX5vi1H63v5baARkeaPbLSXNxk4b6dXUnxi4RbwMDw3LxhRK9MGR5sjCpEDxX",
  "key44": "565YDfAj6W2fCS77WZrFV92Cud6tc58KHwdfvmJnzdFtndpsisRmcKy5HnKpbtHg1MFRZ1hHsFksdiHGpUqpxaim",
  "key45": "4skWLraYzhbgMTFGhENLKXjA61QJMgreV1zPow8GStmyUoTauuApdorsayxBUKBs4miyci7SA6ZKBKAFuaq2kXMD",
  "key46": "23CpRnaLApcYQQfkrvs1XHt18iY1tHqJtbnZck6J1XapwnCSebkFqy4U99reBnu4AWzdsfvHudDjaBz6tiXJhMvf",
  "key47": "2yhDUD7kD7JmZxkH5tstvYv94BCuZzKCvKrNa59tuCM4TND8s7KvHbTspDsXUjoGqv9oRouxRQr6ZiCZoDg3fukd",
  "key48": "wdgHV7h9DWXhcfRKLBPd1q4jYSD8p6e7QhCRiEiD9g2TCmeVQ4LfLseA5UeA8fKeKxWSykZp7mD94gYk2G5Py4K",
  "key49": "5Pbq76LmDd33UkB9XhLyLaABuw6M3rjaaWjpDvN9ZFHp2CNLp9Nqkqke3gmtgcdvTaKFoV8kPeN63BvtJUpm5Y8Q"
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
