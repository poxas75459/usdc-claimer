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
    "Q9NLf6B8LVY4DyBjtc2c3sESL57wnhPPp3ypS252SnSmNGHgrWjAY6dwjV9yG9QGWHzeFk9nrRvrJRd1UrSGEQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573aqbof7htpCiEGJZ5HTfzXGyEyUac8ZGu1AtRoUEWBhmAbC5jotVrwGjTYcsEAdaYQo2qempnLvpGq5TbgvkyG",
  "key1": "TcVVqTsCx6isUtQa1VY8QR7bWMcHGxDjzRspoEgoXeBqsDjxxT8DP8cHyHfXZhCeHdCp7c78tegcMxrVP9yRCsx",
  "key2": "2xXqpmSDSWX7Nx54XrMU4oD4FkcE8jnaQi6c9uLGgWFDn847APCLv8z9mZ9AAjxa1BaPtdBpZrAFWhwY8PBeWqqP",
  "key3": "4dwV7qroPtBHYGfxuD1JuiR8CwzdniASyRQA9ACkTN5Pz9u5299rcibxtgqhaq4XWhgcmcwREUMeEU2vXzQ3D8vY",
  "key4": "4DkPJbodLZAUCZPEHWB2gUHmfcpiGtWrAEGAGPfkzSsr6xyamQ1E7fZDMjUYu4NM9ao81GVfhx4SreXboEpamtSA",
  "key5": "5eziAM6Sq5PUA9tyinB2C1fHDXVMxAHur64xwYrZvtJ7YKVo5zuMgrEizYuoLVg1PDuHZJjm2eNdjGjX1pYTV9Uf",
  "key6": "38MZzykw4pP2DtwMjoGfqkknqp8snzcqRuFoo6uCGTDvGY23VtVGEcq4wEY57JPYMA5z5KvVqzUBSzCuJcBBBLU8",
  "key7": "4TA3xZ4fLaQsJqF14CqQ1yey67JvLQHCEPBEEVdmDX572UpPEBySaYGFTRnqf2vYoANUNB8yjD6KV9bYFKXuDFxE",
  "key8": "3XhGxqWnSCY6CSebB9wXHP5ManrLKM6qgoVAAk1EdHkx7rs2q4wyMEVw74yWcZkQM5LjoDuz9BXtS4aonCFX5DY3",
  "key9": "4shUpf6uPdutRhxZcv83TB2yNtXep8purX9Dtmf3cr6KgtFw4HFBLR4E8qGpeQKTza7bttZho5v95xH811CKdiZN",
  "key10": "3y1etTtqFZmLz1KfRe91Kjhn4vWvvLMkdACkWMRhQjxWPUAMb3fscpDPG1gQBnARNZqoZLyjKijYJBTgadkLrp5x",
  "key11": "rEniHELDG4V6TfjwJXH4oCxyn1LzM54dd96suceBrFev2XmWpCtLnCrd8ST33rcvZg2P2FcLtRv5wNsKpdq51hp",
  "key12": "2TVGVcVCyJGnHUDuXu5BMffu41MJYk4Q7Ai4qwGugo3tqcuav3bYxLTQKqwRC5GZjWn8nuD4FupUG61PpJJSX9ZC",
  "key13": "5zXQsU7e7EWmRd8mB8qPuyc8qXJhysiXoKDFvpwqkmufTgTMuTg7LcMb1rGk7BruShjpygorstBoFzvh3Kf6BqnE",
  "key14": "CaKicHhZANcg2zzJuwQEU6c6HumJyzY1YjQsQaR4XHPeRmRTfDByzZkVmo2ugmbGRibrxreHX8vQWUGvhp8gEYD",
  "key15": "2xks6eqnWvgKbJftTpURv52twosRUhT8V55GAmdoTDcauVjDaJhGATfNnrAVgStbb79qhFZhWDWx15PgFY9NC5Yf",
  "key16": "2a8iUaeY5RM3pXYqktChVaKMaGWdGfJhc6iVGeiYhEzoEFyvYryEHwy7dnUfs5kZsRCyzLQvZUwouzcMkkVkG1Qh",
  "key17": "4jbVQSfZG9jW9GVfpkfxDbYaTaAaYe9njqEiQRWv9LJ1q4jboz4fkx2oVc23zB9umJ61C4pjUFEgdEnjCw982pQQ",
  "key18": "3ChSYfpsKs1DH9xbrGed9E7cR4JC8Nw8Mb17hvschNtNbN6tx3PLqLT5jFuaMdeQY5CnWTKprAbuU9g5snLyb4ht",
  "key19": "4sFTZALpeoAQBxYt5cXmN9iWL3LeS5fDNYGjM6BMD2s5dWRRrvBJF6Jr2iFSySS26NzuHy1vWdPePo4fMxG5QWTM",
  "key20": "4gKyah32zEAytt2yCSMfNeLzqQsyrciUcPdZ49zC7CpV65MeSzxDprQXHJ3nMhoCKezmcoQ23gMhfD37c1uiwQhv",
  "key21": "4KshvaRo2CkLCkU8PtJD84WqE4pdHP12Dpx1fmCPziarv2a1bcY1it4AEwaJSaKeZWWBNNWXwAkSFb6dbPbXYYDF",
  "key22": "58xrrBRqajNibNwNZR1JW1efpXwEcLgpZ2Cuwh9wFMs1jLxw357YoNA2T3RCsgVyCogZruuYVphNoAXwp4s9VaNN",
  "key23": "5HTp3Kcm4toeVzvwHRja3n8pCAreg8W3GnFqiBaNxQev9JPngNNPecZEeVsc1ak4HLntWLa5CkE6khQUMnpNkFtK",
  "key24": "5DqhaXzKz1kkjqzyjSUQpGxLGEttPLpbpvxAMLKQHi4UgAkV8DwoL6BqhdVqF8A8K8jGXFe6ZT6pjEQ9n1Z5d7eb",
  "key25": "3ow1dJHFzRtZR2L7J7BmKqPbYxw1AGSbDza4nprPMV9ac6cu91VWvx445qTypAPpd7YeoceMX9Pb7sPpyDUVroLD",
  "key26": "b3Avsv1GLDoGL4iD1v56S5fXGYiBfKQFe3zsTXMN6bem6sNToj4nPEMtJRC18cry6kNufBYXz8wucWXr2wWT89Q",
  "key27": "4tQMyTT4SGaDxwovXSftUXSjDNLemvKHYHf9HDC1fQ3bFLVFrwLU3WUXsy5ADv8TdwumUByptYA9dhSu7wZECaNJ"
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
