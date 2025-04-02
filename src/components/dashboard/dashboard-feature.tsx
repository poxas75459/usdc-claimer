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
    "2WqVqi6DjfubVGRidpozDjKX31q1pDDZKz5TeL57H5NrkpRtsoToNZbt8sYy88mZttHodxaSgW3W8FNXYp6t3sY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cuQxx6uc6dUAw2j95ZQNLD9HiFC1jumJZRKPz1zux7wTJqurfUYD7qKHLPYxxPxcZb4BTrNXMfuWFF9vd3SzmUL",
  "key1": "2MTPeUjK3hGFpZ5najBpcraCKSPTSAzstt6SweCdvHBRsp74yVjNgDfWEmUgm5ivN4rFizRUz5hHWBbzXBb4U2PT",
  "key2": "5RxJimcduxRPChzdgDhXRtgW5pdo5e1iNgoMmra3pQLZNv5NkPUrFk9KXAZ69rQ9a3omVk47GvFChbDTuMqr1LXT",
  "key3": "2uYZ2Yy7hFDPE2KeSzE4m6mrLpvnLWo55cXoKXkd7fQkf4x81UasPCEmLuWDpAJ42vPFCWVCsQ1nAfK2MjsFCa5n",
  "key4": "52aAactmJYvwTNFTG3gn4w6Q2EKiHPXekFSEtmryvJtjWMzgPjovqq4Y1x6W7p8HxTwbBrKHjetLcA8PUPfK4jBL",
  "key5": "35mPMCJ6jYdPGQAfmLQivTcrpqfpCHGX4Y5NJyuRK2aJkFFXJ4cXkJVDjghKdaxZxt41nzZ4iQpizX7qmXWysJhi",
  "key6": "3LCUUfXPjq8RAndmRsAWV4eJjkhN2cEc2q2AZtmirWMz8sVeCJnEwzu2ZGgiJYLUqvU8S6iDv3gYNvtiETeCbof4",
  "key7": "211TpbpBFMfpDMrRuU3nWdZNngXdqdj1F2UrUAvid6qXNyGaUUFMZFuWGh2s4BZrJK16c3kPfxcEfbzk7epvJX6q",
  "key8": "ZP8pwriR29ky5Ezk94mTSK9oK7TsW7QR1YonD8Se7oQvosp5CrGMozx4C73DTDjxKpNn4WDQEA61W3KB1n2FQ4e",
  "key9": "2fsngHECfgzUZ5E9sqd8MpSGsJsArxBSMJS5tvgUb2P3qE7WVR9y7d9xMErd48mnPJV3ujnThoECgFK7jD3Rx9jr",
  "key10": "2f36Er8zGiQA9QGQr8a4n9gaNbHEGoheqwfdYCVXhyj9aCm7RaHLERafLaEJXiLeAxPf14jqpnaqUdJynEL8HF14",
  "key11": "4QRzruBkHVKKLFn5dKzLod3DEWZ6MYsxdFCmutjGnmENShmi7gQW2LAuVFbNRF1YhLBAN5797J8X9AUYm1fzJxvR",
  "key12": "3BtSFS24s2jPk1JNEEay4pQG2Ap8XtUenPKvPskLQza9yh4d19dTB7z87hD8CkojJahqnDzsrFcV6s6beSKfeCt3",
  "key13": "vRexcepJczF9vXdBn6HauNEyjZz9pANAVWzp47qNnvBq6Q1WUDYBHw2R4HSmdqgkCCGuRc4hXGgPpxd6xJ5r2FL",
  "key14": "duN7AgVjPdnhCmnxbZN8J4dSJCSiBBkqXnuYFEmWcmQURjjyN6ztFZjK9ZkguwaXzraxyyHrMQnCgwVrKABTTF2",
  "key15": "2mLcW6zJaraQx4Zw89dVUZjV8ZbN2AtvYbiBY6fkiRsuZ4FJK5mN8pKDPB7ppseotbED4s7xu9iiGn9e67W1gUgf",
  "key16": "5vud5FWNUXzce48c9MdDSTQmQUGoEYhULQM18gWvgNaKJB1w5iMGYBUvhbzzwU1T8EHcxnYNoCvVbBPyuvteoYrR",
  "key17": "4JPdQ59FaDhNiCmDsYqaf2CVMcP44RE5MqEti7J54Weq9MpzqrjdMhy7na5wiAPJdddkgnYWh4oxzf3svPXj7iwA",
  "key18": "4fzqAXE1zdkkQafYgzf2vPhZ6UieuMSE9nDgmNYdH4eJ3fUhf5D8sWb57ap9keFPT2yrhkRjnHhBEMDhdicu7yJJ",
  "key19": "3hNdvKaMZBYN4BSKHyZZBu8UTc8AZ1ZRnf1pWawPvTs3rcrVFMUoz79fCRzC6CsmCgDVSoQUHLzMw8kcCts2yW9V",
  "key20": "5PsX8947FWKjS9Uiv6xWyf689RSygPBTm8k9DkDoiWVNJ1yFkCkkiMonhU4CmcYSFC8bAEKpYQ1AYedpUPDr9jcd",
  "key21": "4EMhSM8dsZmfUkSX4oLKFaXCLy2BC2SGoh858vfqZm1xMe8vzwAEpzkm1oszYuunJputvYkCTxpXmmN8dz58p5CQ",
  "key22": "5em6wcc8bECWhgZU71CpGNRsamgSzutPefAG2FUmhkcq2KdqFcJ9YoCDNdq9PREVzSoScC3rHj3RKVSJSzrR5rXe",
  "key23": "3tDH8fxSY3tzB392QFtZnJZoi3Xw4XAEjd5B14vyGWwboyuQxqgiN5ax7N5bpwkbH3fqm99s158c2KngK6mVd26m",
  "key24": "4rSoHTE5fyxbvNZ8S2oXXRmbVyc54AQj18BGvVPzoZNbpwyuhmWW9tdp9rm46R2BxPosNqzK1QRBeUpLzqxX1LmR",
  "key25": "EifDhCgSSSCemhieA8PSsR3HHQHToAZhTXQ3cPtU3N1tUEapxgJsqbFRJZxrZZv5he8Ny8rrHngAmvmJGUEbrR9",
  "key26": "5qTunBUzXJ83Tf7ckbRrqw5MuQ3zKYWQTZm24yMkmY9nyiAtGLworVs8HjSbNnfEBk2QBcPRFjD8iBUCEzhPoX4q",
  "key27": "5jtMmw3DBRZ13SdZe88wKHbHSZpBFGG1ptfncmDGe1mW42XjnqVRne3UYDA8oUcLeTjaTZf4o1jY4TtdzrDWSyJN",
  "key28": "5PVQ5giPA1wgHhvvVCfi98o76y97NFXiWinzb4hyjy4jrkKz2mwkQ8S85v8Dj387BA4tSTCW598FMbYY5FoNVWdc",
  "key29": "3iTcoh7mJJSRyhw7G7UEnCbYeC2NXjZTZpH53DQRRjLdXwozDH2F2oaLX9DDQPh1fy8LDBF3aHpjM8DbfEr1wRNY",
  "key30": "3uXyKHV3K7B1FbNCizbnAGTp3iv1D1nHn8pYvmFq9EJ4hbw1AMTmgfG4JhTyNm8V1ydfpu3E1bUoQCLSNWmVPLfM",
  "key31": "2xJEBGfNy6SK7jQWGUtNfhLvsgBuEWMmZSvydTKAfKv713hBLcxHSsXBw6U1md5CiYveGdnQavCzPZYQawz75UeZ",
  "key32": "FQgVzEoeTBfbFhqCwNd5xCm5J9MoPBKhgDDFLJAdV8vMhCRaLUHympsx3KLSr4tNrqNFkehyUv6vE3cGbAUduWU",
  "key33": "61ccVJExsomu6Ds7KzqVLxuWY1jHZz7uDuBG2wjo7hRA1boQqrDTxDc5NemdG5VrB8jHynF7ubHU2sYb12MjrYMT",
  "key34": "3VocaNyt6zWECuNhRC61qpuiRTeHf5bJhDh9vS9wy9p61SUDhuLy23onJb1kK8hg8EpAJPqzn4WJEtkVKBowgLQ4",
  "key35": "5otEQXpfatvggFBeT7anS22YNpZ4pajztQwCUtSNfAvwwrHnrJC4mteu7h1V5Z8BEgKzjPwF8v212w1CGzfFk7XP",
  "key36": "2eEXL1zFrXyTeTMGMRUX2DeUEzXdBh5qjQGygjodtSCddPbjGw64BqjLUUQzXxcHQvzDMxQf9fnX6wZaqjf2fkwD",
  "key37": "3wV2VW3teYnVT6atbTkLGHvXu7nX58hqUqNGLC6nnFxUvUAouPqtuXiSBAabRaLsPyDKcMnHbpdRZr3Rb5NKeAyt",
  "key38": "2qDTshhLe5m7u7ru7wEoJXHyJpPe71EauQX3bsao4PLxd3NmskLuvbcWNaTcFbViQe4jZ581ZH7Y2SsVUXQ23sK2",
  "key39": "3NCqd1N9YraTtT5BLkGZRbNxCcVxi7EJVaQJR4cgz8uNg1T2b8FcxQJYzRcsVCDvRETKdmYmYF7fdYZ6bsWWFbjR",
  "key40": "3FLDRYdam1Ct7Tcpr8PgA9G7HQHF4qzzZZvXPHAEDca39kmVaQpRqHUL9o1oFPLU22rCbEH5NK3n2kokteJPuycQ",
  "key41": "5Jx515tSEZJSnpM9MZS3fMnZ7KrGEL99L7Ds2Y27tSVMZbybA3cCFGCj7gACf8ntGMRmusK6e4EWjsqqPBftwRDa",
  "key42": "38CG2D8fjfSqEqRFUK7gQTwwArVCmAst8Ny1prfNFU6WZZkS1J8V82xj7HiAKbnHNhjPtFp2Z3NnmBUtjyXSqhxZ",
  "key43": "46qH5xdrRBEn48r82ceXi9guF9YHHCUGCTkzM6HibceCwtdtGf7ki7QQnon4tT2MGXMnX1FYY48RYB7FPFhYsk7Z",
  "key44": "3SPc3K6EDAHtkyLR8uMujjRJUSDdrsxA8hFCDaYzqjtfwGMT52NduRm7gfJxvsm3wucWC1RGsA6fVJQFj5xkNuAT",
  "key45": "2BcLzJhPn66vTxwk3YiH7z8MgrnCPceHf8BZxWnDxNagLtGNC8bQPD6taPaCLbDHKh62pKNzf4tHSdNiKth1Smtc"
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
