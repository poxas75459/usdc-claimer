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
    "2fLRuh6DSBgdNWb3Cn9ErydxrCafpcDPD7PWvioVSopV85WRnzxZGmLdCqtdKxk62pyvrePgfUY7xZbZCmG5Vngg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oM7htLNx88RPbpCaet7s1v6K3zJ4AUeZYizeureqN2PyUQoxYtSAfht9AoQPBFuRhW8FpSiZjNTr4nZVFJu3xy5",
  "key1": "4gvynM53gakPEb4uPffPZ3HVJFjeAKP7QokbxQ5imph5in6kyDr469NUytnbQyW3xpsjh3RawodwK6tFJbm5KpYJ",
  "key2": "3csratbYQXvfugJ1NQio8kpuVA1Wq1Uvjxd4k4Pn3i3mkSAYoV8kkg6zRxfQAxCna5mCxnyxFxLdqmCCFeostyLh",
  "key3": "uMm1H5zUPGXSbQH5Ptpw1MevcXzznyTsj1sa2KAW7joVUwdV3mizmtKLpfgyNpLb8rUuDKrUCy4LULgkDQhjPg5",
  "key4": "3UQ5PEQaAuqWkqXhjpHr2HTDDDCbFPx4u9nxoU8sip5L9aiawV28amuvtesViGu5Ckgo95Wa1W34ygJdkEZb2deF",
  "key5": "3R9LDNR8B7ZmQ4CRBnrz1ETQJf6nQ43kTCp6RVhTwqNSUv773zcViEJGntGabPP8txVYHaG6ayUZeD9bX9EyZkzy",
  "key6": "3fmo3k58EAW7ZKjN3GWYVVWDS3HgdgxgtF2GytYq479RwqFVAaz6rrRnEAX3Ns6bGFsju3uWgA9x2btcS9unfkcF",
  "key7": "5TCdKYrjmT5arQGfWoDnJhYKd9eokvFb8i3KfBMnbTHE8BiBPQxiHqBXyCB8qAaV9P6DAwokLaJmDNpbbzTi8Jex",
  "key8": "5a7UdxRNFrEu4shXgihVfB3uwsThf1ntxA3opcdd5sipV9wvDnP8w5A8baEy3Z2L2dCHhkRropxgiMKATMQiGA1W",
  "key9": "4R8nXH6PduEE3Dgp9g5DJPtds7JQQ7RKWBzg4YBmrNqXEAeNfSgbYnp1fQf3WTFr6jdn5QPPWoMRfiN1X8ac37Jf",
  "key10": "2KCL7xQQv2BzWy9158h2RYsu2DR9Yi7baCSwcHoew4xj26ThmfeZKgQvw5i4FAwqQfaUB9cV56ACjJEUsAWXqy4k",
  "key11": "2qwUjuqcFfu3ex6b76eLdGYMNxTFJc7kesM3L2qmTSrZYC7WJss8aN1j9wzP8Puof3cgiFK5HGDBfMufDh8yPRxz",
  "key12": "2TNmAz6eXdB9aocijhRMtzR926dQD5VmDiGzKWkCGsQQFKpZasCPJ79Pqfp8TasSKXyNwggaw3D61Kat8udFEpUL",
  "key13": "3xEwP26zY7agXnTYrerZH1oc6rwHEAiobf8iPAMASxcZRYvoB4rLL9L8BiGhBbffQeuaF1QDWgd1bdgejic4bT1",
  "key14": "2Y2TJrTxUMD515XMidiKS75QsjGNSXWydS7XydPVyRBvXyopiK1NtPQ5wumSuP49n3vtcZrXzSfaUSHt6MUNUpnv",
  "key15": "34enVBHMzkzVU2KpSv5uakLjEmHs7EsmrpJfP14Wj7TezmogbukKSc6zBa92BdZorPpHhevJEHKUt2ACncBR2bq9",
  "key16": "3x6oRUEUg8gCz4QzJufX9uggbGgeigQxpr2wXqf4pnMwFzku9yD71H6qwZxAJFCCSqCjaDD8rU6CN11PWLjijMbk",
  "key17": "2yduDwNnaWcGrrTdgptn3z5PqDmqiwyoX5WxGnjn66zRPvBx6XTE8XJXkfThjtsg9F9WuF62qLUaDLswEowBRpE",
  "key18": "4KHQH1TdtPJyBGpEAXikABapLmzff557nKnpvRCowoQnjNaPhjxBme3SrLiDBK8R7o1A4sNSMon9wYeQwTFtnHFu",
  "key19": "3LDp2ZhHoRYNJ7DrRWfEpeJmEno9Wt9DSV1YVkPDPCjHhhmSpA7DuttQMUcvkhzXzp2qBQWBZ3YPpSfeEJ4SWS5W",
  "key20": "2vQZPv4fdChLBQQKfcJZPhXM4MNAxp6Bz1bv5NzpiiXPfrza66TzrnuGa1Q8Gsoehj9xcNMcYwXgitVzVvJnPojk",
  "key21": "5T4WWyQyktzayxs6ZzMDAKK5TcBN4ntHC17tAVBqhB7edLGsfd8ixLtunr7qRTkgiC1qN7mkXdQmjViTPCUR4pzY",
  "key22": "3R5LsZo5G7YhnhomwG6BZ7gj7Th8AQXuV6kGvDX4moonuCs1Fk7FTzRKDe1DzD34vVKziMApGwee89MLHEJq8xds",
  "key23": "2vu9TokKADmSpmadyA7xmJnB1huKjVoCF17ppAJTEWmzw7wgVhEPEt8HztfHF9gZmmJ662AhjaQHoqchF944rQCo",
  "key24": "snEaS9zGN87mvLdRrP7ZFKSQGf2NQTMVgBTCEjYLotRFBWi25UrBUKTVMZ9gh3kRKahWcyGFABWQAdVL2QnsVfs",
  "key25": "2anRkUFcwy43noEPkLnGPMjjkJm6u66Lja5DyTxBiTf9SK2kuGVaxWkFtFJTtaxv41fD7vxxvWAfyGQLErNmoPRc",
  "key26": "3pMNxvffyjLp14c5k2sSR56zJdkrdkQvcjf8RtM1Fx4PwwKEbWeib4omVSN8XyYibFzNSmegMXuHKFR3daiFBex6",
  "key27": "2JcLUCuVqc9m9SQvDMgDayDTazXosuQVVDfZxXmKgV1LojPvWbJt431LQZeVSvoqgKy7nerKD3NatVNnaT5v6sXJ",
  "key28": "kPsmo6JqhTZBr8Dgtuvs34wjA3Y6brb8A2f4UbvQXDGkh13vJZrGybo7SkCKAruFGmx4YZyUGV2rF6NRkKtjwC3",
  "key29": "5rxfSbtgWaAcMq39VtwhBuuuZtzp2oSVWnQE3tDhpPr7u1x5v5cNxK2cu46R3Tv38bR4CdtRK8uvE9gKSn7vH6bh"
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
