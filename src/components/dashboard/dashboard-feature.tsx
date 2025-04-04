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
    "5b96pUfp88eMDq2YQA2t4o5wHXBpfQBpffZ1ez4nkquMjUbww7CeRZUzJVMUcUDJJAHEZvay3JysnBpWGZUh4bXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbbFkpvwm993WHhZNPpsbRWRfmS5LqXM14RTCtSVcCSqXFSTMiYynwDobAFu14FaUfgCefa5RPTfkuc1gq9R4p8",
  "key1": "UHoWqBfk5AdZwEFqbrN67hEGernF1GqH8V5yQpt7SwuXvG8puw29U9KsBmrkw7mkJynrbqGxguGNZU2wnLpfpWv",
  "key2": "4K4agaCNZzcj8zrjSpesiiWWfYpxFfXKwtHarLqitLHs7QcDAWi3gkMAmo8i916p3L3xeJa2H7JTMDQtsLwpb6jh",
  "key3": "4QurTPnKD31Y57eRRWgzDoCgNugPFpy3j5d8NEi1NQ8LvmdSpna3gxQKTtW1JSxRh9ZCUA4CtHvd6j2ULeTMcuaT",
  "key4": "2X54RqcfyxHa73pKNXkXeEoGFXWGsF57uKY5syzDYNsEQ7PzRkD5RimQpNxGzsMgM1hfxT15ZtA4pqPHXGx3ttTM",
  "key5": "2ExAvxzfJR8UxedH8vKfDEWJ9tscPDioABmKxgnSqKT7Q2L57udkczVMvHrXjT7pN6xcqfwQGN8nao9ysEJoB2Xy",
  "key6": "43pM3QffV1QKHE5ByAbdheMZXTXXQqTQ6BQH82pfDa7ryZDiYHgrx293Ky2qgjAqQnNwof12XJhXLKEEUxDaGhxo",
  "key7": "386rm9sTdqukTRMk66DEfKVmmYo72HMfysseUhGX3HHwz9b79htcS4XHmnxdX6YAzvu5CrqneEepihDJjS2CYnAb",
  "key8": "4vJfk42wifgbiCK7bs7rHGRh7BLbV8W6KsNT5fr63ZtvSYHhCh7kL8YKhaAwyzYpJ5ZAZNywBy1StgJFobHYyoS7",
  "key9": "2nNpo3cwYDgVDpDA3J67xa9jvUoFv5cdBdRSyZAmK9HqviJkbcySfBaShJB7735BxmhBcyudSqudg9nk7uNePRn4",
  "key10": "318uRCyzfhjtrm8nhQ2gEuEGboyrvys73Sb7TaeahV1ySfL3H1txgYoHpEPuhnQSYJeJ3iH5KNQJd7f5KWPKfgRk",
  "key11": "4Nar2fLqwbCqtmfvqBppx59p9cf9x37m3UJDzWbTvnYMsqBgzc7NzQKQxRTKuvtzyaDFsMN5oBdFZKdqpwZMZJRa",
  "key12": "5DWVAQBZGzu3zk7tfeFXa2DRBjGQHmp5TxKLH1bmJsXKMWAn5fxk8MLZQTPwpSvGcBCthCtrN6ZEoJq6ZZB9WUjC",
  "key13": "xUwzV8t3wNAumvDYAtwEpV2fvPUiJhtCJs4LsfAwkq8xjpMR2JztiZFTqLvN7RuJ6UoF68fd2fHpyaHXcfap4Hx",
  "key14": "63qjuSfcHYTQkCrUN5g8ZceXZ8UZ2Ky5VyZnd4tzKbXNrFA4JQD6pbbCYXdAF8zAvLz648ip5ivLoAWVe3QL6aEq",
  "key15": "2UP5ns5BzQi179bMMrDhMuxgtJ9yDt6tnrJ8uBZ6T2cBK2yWGv7j9XtK4Qn96WiH3GrTfCWu5VjWhLHctEfhR2kR",
  "key16": "4r8wMdiqp1kdtiCiq9HNUrsDHC5c3Vj49Ha1TcoTBacS1idj5V5P7QT7p4tynRjcVAeCNQggsDuM4P7HbqvZtie6",
  "key17": "3LdSs4g22D8LrAdz7CDLhSEci6Ph6gDyhWDKk7AqTKEkqHc8pkjceNbBWWVqPW9pUtYLererVYVyag5yhcAEPYdF",
  "key18": "4Ai3cmbF3XYcGqoqXKotRjXQ5jfTDsNA2WWJm8rswavNAaMKSaxVGkowV9Br7twn9RYjhcxSNnnNupmevHBHue87",
  "key19": "CP8k3LQeAj8pJEzgeBr5VuTuxMUakjfosUbYyySmyawB39NiBSLv6R5cbJDn5iSXkd3GrEjg2hKmLeFqwwKRHTd",
  "key20": "3or4umDT19coCx24jkqhJMdzM5Kw9GJbEfqfEJbmFqaBvhsFMXPjKJVNgD7y7oMrSzF1JDuVLrECQtxaGMMpwyqo",
  "key21": "2Sd4h4H8nFzyaGvtFcLBbWsiJHbh4X9hAeAFtjcCFdGeuok4ZXGqnoSvNeKt1NkiH89y3uhYoCZmeYUHNyYKkCCt",
  "key22": "2cG2R9sfiqV5CoEm3Yb6ZFcBWykT8oFitRfVUseS8mpawu9iADzj8vt4ygfqqhe1vM4S3v8LVUqYyW4XHPmsP4P5",
  "key23": "2HsbsCP4Z4rkk73ndwoTnwptebM8aUSqvVEkpidDnJPizjSfd3TFb9aa3SLZuaKHgd6KzaxiiCw2DFYcTZ887BS5",
  "key24": "5S5T662tMwnSs1dR4TxrbkJVwnxbuXkistLguXS52tdo8ocHFSF4CdBmaNoPCsuek9UdQMdNafXAfcArw5sYUGDk",
  "key25": "3yuWmHtfZEXwb1zKXaGc4rx9QykY5zoKDDtUqfu9JStpwnENjfkfHXzMTp5qgXKTucgrizcZiBY69j1kSVoJUhpx",
  "key26": "4azdm5cXrT6DmyxbFBApjuirUhKjrzKweia8kU3QcdWfTTXcRDWB8QfH47gMbdKbXKi2gf6u28jSNg2ZF4UBCxWA",
  "key27": "jTkUNwoF4YR5iwLmaRVB4taxTGWJJTmTXWxaZAy2Z2mS5Kfdr8sRaphW6Qtf4L76CVSAm4tKKKxWf5xhB4oA811",
  "key28": "sugaUkNXm5ePWjLPukgvpJJZnvewi4PGHT9saB3ftR5od9Mo97EJZnUUCD6AMkoCVdHGmPPMEwZ9CtieQgt8P7C",
  "key29": "2Vj4dbQCaQYjT9VJZNY1cXKNNtppCwy94WzN77kbi4FaAsVsaaXeW7Gws51RLPwmSejNa1cLLk48pYKrbnUkePdr",
  "key30": "5gmwodvLSQM2cPcLLB41TScQkmLKWp3JKWxaFJit7H92CL88e859VpDZgYAER8TmKdta9q6PQHtD3zJateh7UqfU",
  "key31": "uHVmyeMaMdJxfcSym4BigfHvGkJh7yrGnFhrMcqZd7rq4eZNgfL2YwH89DPQ4HRzSMtf7yDWEVWKzhxdPdzaqZo",
  "key32": "evZ5aTmHMDNQzwPyR53Rvjs8qWhp7ZYPTmkXrixbg6vJB2pgBrgAMdLWQV3ZjrFmnG4ptUB5KRwVSW1woD3bFkC",
  "key33": "38L7WNjcC5cQUg8Bc58fuKHBXqreM7XH42igsEpg6vLRnRdGexxV4kk6Kw9mfkavmLSBk7Bw2LT5hUrCNST1259K",
  "key34": "4BivSC6GUuSXRjWHhR9QKc4cafxAvjS4XZHy4Bix387XMJRSfFNy1YjApASkphXx7YyNNYcATmBk3TWLz5TTboVK"
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
