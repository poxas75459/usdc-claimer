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
    "3D9LzsoXTrGXnxyzxmAPdzQqE51kCbrXriSvhe5nx6PKZs6GJny8CWSUWPSScR81xMd8e51bvcBmcJaLZZqvYXE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EPFKxpVJ6rCcrECAnzQ5ArEtfiSuceXXnpBCvTURqgymDvCzTqjAXM4EBFP8PnMne31yn75o71g6K3U9rZWBsv",
  "key1": "5AEAxv98AWBxVXSGbECCjWzgw92FDSroorL8cQqxu7MpcQ7AqDUa1f5cEnYrXZwqP13m3AiKLURecoGdiFBm15C3",
  "key2": "3cimYWXQRWAXrzdHacBDakPcNxhfuvK3T5NjziNtsFNitkTxCqjP1Nm2bmoq1DeRobXu25E8DshhNHgxMwr35jU9",
  "key3": "3QcmG2nRf6Dgv6TCKFeHAzMMPCMet7thUrQNff4cFFtt8TU5kuJKCzDqFxdN7DUHBNds6LjRprxqGkos9wTVHkQG",
  "key4": "3ev1xXFidD93EURkraqkrwWyGuEVsiLgrqMwJqTcWhfnANdYj45vi8FhqX4bVfL2i26LJNocw3y7aEgTLfRctVqE",
  "key5": "2UBM9p1rRBnAwpFSwsxZJAXSeHk3WruGjAQuNP1c8gqCq52sSvGhj9R2NyhYDKYiBaAXjo7Q3jryPzTJ4yvF637P",
  "key6": "5dKSAWs8uJSirMWRdSGFoRt9dzxe2HGi6JJokv1ZjWfhDPRek5TimnXbCDyyKVgA5PrC4CoUDhBHYJxajrxt4wC6",
  "key7": "5V8ZpE1D5RWoPkdM9wUjpYMJu46uehD7n4hjtexabep5nMCc8DaDUZN3SHLyGKAh9d3aNidk88JwFS9vZvT1jcUC",
  "key8": "i28qKAUEzJ8THbmt1B4wQDePaAWc5h2tK7KcKzGEJ8fE3FjvHCAz2ih8Hib2a8VHR8A8wpDAapMzWPVoihgNhim",
  "key9": "41besj9WAPu25wtrtcn6cTg17fZbvXgbLRJ5SPtvkY6zDJQo1CXDhSUkvD73nw1osnWgCTaePEUaxarWdCYyvD5n",
  "key10": "3ePgX6VjN7hGnxxap4fFpEnRh5pKZVzKvcHQbkK5a2faG6XD4kz91iZxZPAbfExn1xvLcewqkUoNNJC48mSbYoj8",
  "key11": "BX2YWBoERrTCophjQrDsGQjf2XMNu5xeTGXYdHuQU8CWsfcHFYDYmJ3KMitygZNVykxujTNHzb7DWU8imLbqF1S",
  "key12": "BLpRgu33EQK2wQLpdAxL6qZW2ZeR6yZ5XPnD5st3crs4EhFgaF9yBcYn19zV22Ws19AZoU4q59bCkCsRkUBQCzG",
  "key13": "4NAWp6vaNGGNsTK9pNTcwAG1Qh2ptYE4DBBhv7wCMXjrbk25XKPvaFPKFVyfuCWMFoBVNgzJtYx5GQnN7dJiTyew",
  "key14": "tfj6t9Qg5jqD6xAn5ouHzTCxsGcoKMDqgo3ynCmxXdLRizpuxgz3sYwSmAEkLyHy4HVbw29VLUG64uRQzJ1yb2S",
  "key15": "v83czg5mhWZA1uEhnjvmwpHpbF2bsw3RJD4DFY8Rmo9ws25zCiHEbwqh3wEDrz97FmVRf2DTfqVFdKavwm8QrDh",
  "key16": "2vrnydNPJGtuiydMoEN8tmKXq5Lx2sunk3fqcJsaCZJ6zRAmSfEc2yXSGBXYMkKgSVsdwjXUH2QYAxCFzqANmkTn",
  "key17": "fQJ7qpwwdF6S1PSsQDvT4UerAmrxX4wRDTKYFB3vEpUA5eoD8tvcHXQKvU13KivdMFdueq4ivgsFQriZKa57WKe",
  "key18": "4EEb5tXJLPwYUopKMZHiHfW24aR9sc5NAGXPVhZR1pzAWCJh6yvzR2kw5TUGbJqsv3ANEtr7pd5gnPpxzS3r7MWF",
  "key19": "2VAkuTrSTBa1ijodqY7Lovh6UqZ9KBQB9UxsvKXpMKXx6VWrVBZHzTvvHT7nL6nYPDKpnNYpKhB8cYNJyRxi4XMX",
  "key20": "47HMsVV94U21oY2o5w8aB6Hi3QaagE2skbx2BdwWbJCAuAknAV27HtEaxpnmoUpEsX4J1ziRMuahxUtCBHd1KSgd",
  "key21": "5gp2kiMbHv1WRSuzDsGivH8rrME45fPJLi9ARwujFh5cegYkrPQEVqq3EC7hjs6yWdXb5NMnzR5B5cCWtV5H2tA7",
  "key22": "3SDYudJGQi25ncJyACdeFkCfWCohwyoREZwS1pbRMY9NAK7m76pNTpjHnowyjjyqDqKHp4faynYyTu1hhvd3dyDF",
  "key23": "3HukLbFHwueeSETkFq1PohdX1h9RogMwNKjmjQmCoqKhdkEHZxVzuXr87RxfzwbyefmxqxojqdHbykzx7Dvf6PvN",
  "key24": "3zUAVNkqEUWAYPwTQD9oP88W253gsQyBfcdLywgJHQPwoRSPg1FTGdE6KX2TPovHcDAhJcj4vTU1DuYHPCb89oLP",
  "key25": "291Sedbiw1aMFU2RvSxzTkduAiRVHUUCyfBQyvTBFuZ2GJKeiZdfCu847GhnQQVcVzCjNAXS6LWoXs7MEoh8Xt3H",
  "key26": "K9h9pv56bMevrtGzyoFhCjyfBqYsGQQGeRYtSK6VqMz593oNRLjUVYjN1XNr6NoWoPmSH8XWi7DVWozQLb7Utwg",
  "key27": "NQ6CA6Sh9jTyWAFWM2j2k5ko5ADJRnxADLAdmKKqKwCWc9SFp6N7VHbUshX7wFU5Zj6zDSVUjz9m9DZDqN7cthC",
  "key28": "4D8jqViP77yKrz6Yc56GvQZ8JpQpFaj9CJZskny3rV8CKb9F7Xexh8sUEz63GZczSm7r8BPdcran6aicXiemEm4w",
  "key29": "JEnXNs436tAiFzfNegC8RphWufCyQeMCkNHLxJnYobr7s71KZv1Vtv3Xo56f5U1mU8CNjHXUZTzy2pTrAQeJhye",
  "key30": "61FEsZ5gsuPsjTXbbcsTgQdQUmwqgsdxRPK4PjxEhaoY5P33fQPF6n7eDS8N5iyZJXpqq7ZPiKtmzS9uQfR9Fu5K",
  "key31": "3WphwMhDPLr6BqGjRK5a3RthG5yC9vpux1BK57TzYphjyvDzoqS3idL8JyuvbSpix3NzrrRq6HYuRPQzTVntDQTE",
  "key32": "3FhwrJxi4HjGzJMcvGEa1ZftP4MyevfyQs65PFVEHhHyq7PqG2wYse1SG8JdHx3KpCanTVyepnAwWYFgZVpMDJcQ",
  "key33": "4Sm2xqLvmrzLdrCqyScaHQkk78y8RuDWiNREDzJyX4ohNovFPKMQEoDku8RjxohAdAkHsKZum3PBjRLszuSzCVW9",
  "key34": "38s5TNQBfF6zuBd9PL8Dgth66E39sKXfm5grp2MpxFrdMpo2yiTA7FHxcrerBNXBjpTxVkqqVqKD5MSfmMcg9rc9",
  "key35": "2GkgzpRoEUGdvsgRV9wDJ8khVpUbiSoKE6SMFTRn9YmkT6Z9jZ1ZnqCr7GjeU9J5hxpe191A6nFHWusnDYFXKpPj",
  "key36": "2iyuHSzkQjiE4XBnRTtqx147U3dL8dCFymYGz5gYm62mZBxuSeNmxSnyiV5fmVsHuvmXQmJM68Dg9U1pCBiRTpkG",
  "key37": "4ccuLDNE7r5gUZiwDQxqHSmQ5mKnUcN3YiU6EJWCQSLRTeAhUrYnUokT1Ys69fN1MRDWk8QbqdkPpDMAGcxxBet8",
  "key38": "2qLL9cnsBcMiQcVXEbDCfPsKuKMijinWAz49xdgsqja1USTbKFUpsaCNpJyktAjgVY8WpEhJoAbZKcm46TQVzEgD",
  "key39": "4TRBYhLPat1PgJEUbXoiW1X5qRSP6gsBtzU3KQSPXvxhjF3WsFJcu7MZ4zJdhHhUGtWC7iDnHoRExLQKwjkSt4wf",
  "key40": "4y1poQ7hXece85d2pE39mQMbHB8K9Hjxj3jiLMhsLs3kTxo6rDKsF4RF96XeMtDuPeGEQVgtH7BeG9b9HuTs2uxy",
  "key41": "qYaL49N3DTYGtQAhzvaq4kd1vT5CKkHj7bG5hVUorgebxoAhnnBVXy9amWdfwrkd33FfFTzebhjzkjT88oAqZZn",
  "key42": "32ZtBjkSQ2cAfKhb4wHcmMYPaMMy3ksaTmdGuQP6J8k15egXnmGeQrxWkzTUTNE35pmVZGjrCS1aAeJ8R5dUYW9H",
  "key43": "2CMAYzWQrmnjdq6NmpjxtkzXFbXs5BGsfoVmshqd8zHnTJZeYqhEWhCEepZcJeeMfqHfyiUHA4NpK3ZVBxii3YA8",
  "key44": "5wN74JC2xiXAmgYusaFH6cP6NFqtmcy9LR2xL4f7snWvDJXSyW2XuyVZCtJkXvGBfd1Qttz8QAx1yTTvAibFbr2g",
  "key45": "2JZvFejV3P6KazuEexW7PpW7vbsuQy1inzLzkWgPkwhuh1ow9SD1pUKZwfKGGnnK8ymkcjBR12ziXHngsgGmztfj",
  "key46": "4ogy2QsjmtGHiQFNeFeFK5qBk2YTDxHh9SxLMFAhwHner8c4RJrzbpYFdhMtDiVmqA4pmcNwQLWqkoG5fWXEv8Wv"
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
