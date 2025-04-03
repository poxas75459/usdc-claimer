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
    "5kXsLHCNL89uCbrXUXEA8GBVBD9g9F3N35QXUHLaviuACUsRKNDz6gmp7XectkbNaZL2KTRhFWS7kdZQgUrEU4kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfEy2KTQ4ZQiXyj4BUuKhKbKDRafSDeseWGrqtSGcYDTzzR6j5z3HF9zzWfcUYqTuVR67uGJycK7ZXFTAKSWVYc",
  "key1": "5kvz7KoPDcwDAteHkEtMHi87bK4BHavB4dkpHw8SffZFsY9bf9WGwZR4amiwRhnyB2MJw73g7MMETrqpLy86vSTc",
  "key2": "3nkkJCAs5tkCHdgdbkMcoKbwvnSMZuLaFmXErynHSuTxnctbeRnBvK5jLfEh6E33vbyhYURn76FhZio8NTsq9Aot",
  "key3": "2VAF3RHKFv4NYwDTVuwrZWpDN57vGK1MDfeaJXKD34QQNxhyzmBsDJ8RAHhoeNocUhsXCtWp2uxZKNG7RMR3DiZc",
  "key4": "521gfG8oRtn6W8GyLWSzVKedpRroffqZRxmys7qoM1LBDERqgMrhUCWnUwUvig3tJWwsX9djbJJPcxac9FAEo46s",
  "key5": "3LvSsmAs2CBFGmwR7jasub1nWAnARtogXdYW9Jeij6oKNsDxTsneEWFxyU3gZLJVL72uYRe45EwM1JccUeEeKRGt",
  "key6": "2hSdxR9771y2Vd4Jn57X2v7DLHCrNo4tLmSwEHHao7tf4wbgg6TR8hperkL7aSj4NDqBYzec2pijAAkcH7VWFyGg",
  "key7": "5RfsxiE43QGCCG8BywEnqY9WKFi3dzoHWYNaDLPKp3CnT4JLxHuxGEcj8ExWUJtw4TVeAtM2FFGGdSCbmsGFQdnn",
  "key8": "5oxQk1b4M2JcTJoZLH2TYW63axCaA7hN2V9JhyvXWtrsBriP49F83jaVC9qLa8UTweVP6n2RSwvUGpQvnXKMwR9z",
  "key9": "3emVzcuM2TVMVtifj4N3fVGKMeUiHKiTF4Nhnq4EpRLaUFzGZen1zSn5qF4GEsw57fLP9SJHoWYEf4PVF3iwmuXH",
  "key10": "34oxNigDiwuQ8MkjnyMa8gDMng2kzWBTZq6yKom1Pgi7zNmtkYWFVD5vzmcynwHMtLXjKPsY6u8UJqjuC6uAvHxz",
  "key11": "3QNh2PpGpxfPjvPog9Vyf7kvjuhSSQSUjU4rHn4VadVBjmtgKMAZ7HGggawZxpBuHpv7YDzhg3z8xMXVkdf9Qn2T",
  "key12": "5GV4FMsmqBA4K5JTaG2wNJFZp3ejP1d4yL4QV1WbUg3Sm9MaSKCcp6V9eo7gmnMZaZMnQmXM4wQXUg7kWLhTcZhF",
  "key13": "PS4vrLSLPsDSrBo24RN3AV1pyPJ65PUvuXubh4BWsYRfPkSWnZxNZPY78eDqDFDXtTm3YxrKATg4C3WTv2H2QW8",
  "key14": "5g3MH2Bwv6fGaXP7nHDovkAwqryLTqtqh3mkvc7NJRQjRb6B6dbvACBLrb1u4CpW7rZuVTZdcudQndELuHQiPRar",
  "key15": "5KQr5rE99ihQS7cawwhxarW6oNybbSzuEFH2WT8MTpW6rhAjZTQzrJbaNtdbfiqYUNh3npLFzXecPAqSreVYuf4u",
  "key16": "3i39ofbEBPWjnvznDbv8EcCYZPQ3sdzPu9Vdb2onskxGyPjSEkPR31KFMQ1HR3H2bM4o1RBVoYVEqmwjvUffjBrp",
  "key17": "61BaaCPoR5YtL6zwUCtto34fXUEUb9wB6YJKDAFULmb61gHhWSqXU6kWtZfcpdurecRLrdmuYFBVhhdmZeQGmjrQ",
  "key18": "5L5QSbWThZecJzg4uZdpW24LfHJaNuSVPZ9Et2QzTDqSiphYunwfmoN3sU1yKnj5hSM9cDeFpoRaQrM8PYGsV5rp",
  "key19": "5Fy49HX2U8H6z95fehHmLYtGF7G8exYw3a6iN6iDocBEm6dcdPcYn3z3NunjMC3MjWdwwShRTbJTUjjt5eJes46X",
  "key20": "5YNw6u9wjfr55bDtG1LqYNsiEEgtTgUzxh9UtJTtuZ4mbdVqfHNvGqFN3K37kB5ZqpKbruvfUc2qti72dLwyN7BW",
  "key21": "E1KuDRHy6uZLBw67M5tJ9KYww6pvYex7LYXvGxuwFSNHsziY1Cp1GwStGMHLnvRXWkpM1htf36QhTZbG69hKanB",
  "key22": "2uGde6DnMMD6Awnbm3cbb78ozaPuLkxewPnUkzwYQ7sYryQaEdGZKQuPbKi7dGFPn66qANoGVuvPA3Y9E4pSzFCX",
  "key23": "3eWYzQbwYFSbbw9pJozkrVSLJpHnUB9zmjZVhM62aJtUQiraboFLmaiy3NxNn9Naw4dkB3x3riXoYB9u7FZAeQML",
  "key24": "2fNjUM3qnqd3hVjStt2YZUnFVHySh7FDTXn4BMAbYeZGTKUJbq8hmobzy5nQiq9qvgxdseP74waGJR3HFRi8Uw9h",
  "key25": "3HgnHP79oas8su1gW7cnwWrsyMRzBVX2q8rAHa8XUtN9d5c4DxcMgMYoiN9KVRs47VbLGCGtfRNmz7GdmGd649rT"
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
