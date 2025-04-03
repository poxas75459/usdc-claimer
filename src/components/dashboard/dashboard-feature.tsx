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
    "5CMyzD4A2VcMnUG6DtnDoq7rvg5nKEnVET3aTL9fYNLLsjMfGDnDm25VS9QaJipsgVXnzJtXzXBDkEdiEUQgt2bL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sg5bHC1y4oz5skrw21LRn3LxqDCNH7tkRevKfA5j1XSWmLGYzAXsnQkNaerqWYVsjxgrE13ufrstqZ1BM4wtUhE",
  "key1": "594hybZ4W1esn7pekTEs2TsDFvRcephAt6CN5FBkEZrSNc8aCkbiE5bqt3R2TtbWx3QJAqQtee5kZiNzgACAdxbG",
  "key2": "4Sp3frPPo3c4MMSdvZGg1wUYFFVAeYRxW82yxEui928pHREstdy6ieqrP4P5AXKoemp9Qt3std4j2eGJHdSKkA68",
  "key3": "5r7dZPqPthsJ1GK6rK3GFNdhC9KSVKn5pi4hrvEwUoqACL4ExJVs7novcadQKci3HTi1e4y7VFyQNhHBGKosZfag",
  "key4": "dTd4Y8yRuw2Xex1Nd9gvUf6H47XLtvybi5ASDE6SdsEqhkqAxNR5SyWn129eAjbBgoDATGAfpvR9YqzJwFAP51x",
  "key5": "xg3Ar7oB3SJpNxvnKtZbAk8nxCGupQzDCDWka33LbZzqqD6BHDdotb9zRXSQDAeY22NiGpTroEzfiqA99LDTvFf",
  "key6": "63fRPXGQMdh7HopDEd5MPopAsJeGR3a2fqFeVTKZAw62qkgfaqKv3fXTBZevpRfbyKkBWfU9dd6XNjBZVKWLfCq2",
  "key7": "2LdyDuDmnymvVmznMr5C9CMiUkg7oyQGmjA9t1YaHhfXmDc2XUcy1HdPAxf5fkf5hqd7bEsW1FQZ91WcyFW67gqq",
  "key8": "5MMadnyeeAejqnfsfRoKb6p8BjKjRLzjoZoQSNaEbyXrXWMYZwBacizP7QWmpFyr6xrHx59xi77ejJ9zeCE3HXRb",
  "key9": "5Ge9evyFA6pY59Z3g7p5JVYngNbdNVDhcdMRkmJ3DAWUuAC33hnn2pxMm1QkRxMvBRJkdQHt2pBrm84KEiHf1Yqp",
  "key10": "3w9omjeZeTbNMmBf7PJYbH4Khkztb4TuEhHH7P8gXBGnekeDTW7LRzSxD8KZTD2Rpc92dwQF7Vfprfd8jcvxxJSc",
  "key11": "3v1HcK1ETdGEwE5deN8Guht1D2xqRq7arKSdnPzDxnfnzJHprTQLfPcjmYGZSRZzrR8LUWW6MzNQkEM1cxSzCgLu",
  "key12": "434tUExeM2Eba5ShBhz62Hq55LdX6B3wXyUTEMjELQRrBU2NGAHzFMCpUyvcR85vRzakwNyiSSFQ9BBFWE9bLJTJ",
  "key13": "uUEXcL3s7G8mk8buE8dzde8SM3ugD7MfXFT96MNP9txroTSwcmhyL6AFcH3oE1HobuPmC64Pua2DoVuz7wqUc9E",
  "key14": "2JZ9bVEC4wsgNhbi5cb81R3rWvoP9TYVdzycK2tp2PE52Tj1Ls1ACq2oseyHpyBgdnsTDhqXZDJGWiQVr4MfErtj",
  "key15": "5CMHi5Jn2rvMdYPCyK2ZZ12MzRwwS4QvyjVoPGUWLmRRPqEdJmFwiBkEXtWqu7reDSFqV5gpin3SwXZSotUFdYnE",
  "key16": "2AnywHYntTQBkuirAjc8GsXCvZoufSZN1iBR7k48nw9kFTXspBi7kCMayVJfkoSNzcNF6TP4aPhfJUymWBMVcqHK",
  "key17": "5jc1p1bBEu1zC6uaws7gqP9PkvhuNZTEBZKwhhaYcdt8k1e96urnRtVD165s1RsRWAtXFqxWDNwwhYTx9GzrvuH",
  "key18": "2HsTguzgRty6dAoNzwGEwuYn911D9NrEKCA7Wyf5p9V6vA11o13PE2pzeJEPSSYdCBvPuCRFC64VAzETxwjmYEPv",
  "key19": "2wTvj5QUWPg8ggteUwd7yomKw9xtDVzECcksKTkGxiHQBxjkwE5wkS1yj5knUE1PdMx3Hh6EjqpMfUxX6b1zQ4GM",
  "key20": "2hhQbtHqVmoYMavdpZhizgfgvTufWzhs2G1cdT7BCSiBDKcgrFcKQ4A8msjSqQzo45ZzgYWtcA3ubd1qjWN7cGFk",
  "key21": "2AyoggufQgg53mAscrxw4UNAmphgRiGvDvnysUsv6MnxCRmCZAtUyucFdSYUMGoQtTy9qjVb3JmYfVCUHkg1YR4G",
  "key22": "4Z2tyT14DWapvR6nNKM1miBJwXboD4ygwaGUrhWusaoDM9nXqfFPQJi4yL7DWoA8P792BDkQPbLykkyJmsCpKZ7U",
  "key23": "3KSANzVp2Cxw6Sn8GTKtpFNSHr3t64tjL5RseYshGuw7sNsDgutpBqN1cv8xDCHg9xV45jM6DvdavEKATFoT2GmW",
  "key24": "4CbXukQsuy32wRSyR743EEYzNLVJZNsndgpYjnZZw16nnsLVD5cDbQ4ZpVypeQQ9mM9SeFwDpjJgY52rxoF41LC1"
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
