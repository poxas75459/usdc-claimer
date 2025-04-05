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
    "c8pyhQQrkGRZvE6Vpt9JSAapk98nV1HTz53qR4MhJ4ZAsSsU1EJkpeXNiAmc3FyZDVa5YczP5oKtArv8QuGMq16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqi7Ftn8Mz6N2GADYwTsrAcCowsFUThTqyes36dAfGF5UV6iGhRijnMm328wKCfw7AtcHpvV5n3LYtr1Pmqd46x",
  "key1": "oMfqRCaWH1iVj8swNjigBfJx6NeYmgJ62v1EKTKVWNWrEPXyWvM17i1YN491RbAqJG4YKSoUCUK6irvU2QNYfFy",
  "key2": "4v3vFGbJM99myZm7AXbLi9PaDxJDF9CAJ7LjkxGfK9CnUw5yNJ2VfSyqxiCqT8EEhwxvf1NMFJTXnqdtpupawJv9",
  "key3": "49MRq7PUw2comdVxhG2XYosj8KdjgPQZp9tiuUCXZF133sGMoQt32fYMAp844wFBpUyupXbS1DFbYehpfpp91AoQ",
  "key4": "5rAXoKtSYk12bpXTJbnBAcmNKVJgW6f8MahFtDpcHBoTksoa2wDr2R92zonxUaHF1rHcCRKjj8vnU7d4CJ8DCtZA",
  "key5": "2ii1KUR3cstgWRSjvJngmm4tq5JbhZKZFboyYk38ZSJvVVp5A2jhDXoUYsFo1z8FCDKVJsgnNyzhKbj73A344U1u",
  "key6": "4rsJVDfaTKJ5GqUWmbupjasTCZF29vDMT7pHPQPvYBaobZSAMLfSVC7ABBo52voX3m59LXjVBQbCyVKtS2YKHoes",
  "key7": "epVSedFBzHxwe7s7iHciqw6eSfyscQYJU9jYAoGmMcweNLXnpTW5mupDCmrXfuBY41LcTjXvhqCR3yxw9DqpV5g",
  "key8": "2Lk3perpQnyeyw7BRpxWVhdKw2PJHLQfFEfq39nbY1pjQFyBAweF2X1Bjt1vhy2K9RDbFRhKgsBRQB39aJXX47Xk",
  "key9": "38wtxYnmzV8kWyupTvrWiB85LAFDxEH3qKiMDykmWipyDHTTfzuB2nutiGLURH7fGyyGyWZFe6xRmT8qkgAwaenW",
  "key10": "D5Kg3kwrBvgyhibPsVwTCMTdUf4DFpGNkHFDaB3UsRhV94awuTkE6RbcP5FmyCUe5ZVDfzBYe5hpf7dt8EM2MPy",
  "key11": "56LY98GfZUq4ccTDh4K8UKNqi7aEiDDcYKQevkddxxu39yLqEHohRssA1FCyvYngXabuT7ynMV9E3GDzJX9RxNgW",
  "key12": "4H7kyRpQhwxEyzLjteyoJ3GAoNdxGPyCwvj9dx2DmbxUgAVvwKwDFoBhMB6NTBzyxnWnjCeoAdbco2PTPrthkgCK",
  "key13": "4UkjvvCnoHhKD7qRHrGJQeVCbEE94zCUiQSwoUzhx9wiQonZVqcCxWgk67p9B4wDjgYYbUBhNBnFJHAMzseka1PY",
  "key14": "QzwN6qZTbkNrZt9a7v1VffwU9KgcKV1NKarWsksgM7h8TXj147CZ4TaoPDw29vs5k93VXR6dG4pHxwDX75LN4PC",
  "key15": "5BvWyqEgBNNBGQZj7mH1JygC1DAuFQHfYYACkANcCMEDBJCHGdLCHnSbL4BGdT6mCrv7zRdXbUYcQxRx5u91oTfu",
  "key16": "3g79UUpUFcpxxsAV34cZ5SZ9S8HjWCPKiemtHf8WfMTWuKqcvkZgWRDkgTfGAhkabwHFUzMUvMUvL9DrFgkqP1RR",
  "key17": "4vLggYBaKA63pw2RXcH4PA4oAyf4mkogPp9QZcnuXPa9H11DcWQ6e45DjmAktxfZTRuP9m3mUo6zMEK4KZcYgqCA",
  "key18": "rHYXkkp3qHbrUJpzfkeq77cNH4qkTXPkbPEw9ifPARALQxx1EnvLTzMCFw1cDwiqrFUWXYfkMn6mwXiFV7STZ5V",
  "key19": "4zfheCHCX6kdnbU2th8VTL7ew3momEVVujEYqpVFPemW9BerkPovvbnCA6KWtDpWakUK1zKCUh7cPcQDkJSmERdS",
  "key20": "gYas1H1VG8oF8KfHLb7jBmPQw3SC3eUMGohBjexJgnBNVftjNzL9PYjTMTAKbeFEun85vEYB9GoWSMGgzDT6Esw",
  "key21": "z2Qy6wyYePLD8PvgxwPu4dNP3TeQ7Wt9MVeNy413PrvqsYoLRAPiXzdEoZvuXjPNut8oTucWekgQArAh2Y6ETJA",
  "key22": "2aP4CHPdULHjhkNQG6ze9n9JZRj2kbS18qy4G1Dc8pV5GbEwe1ZbcYtYjgNnNYdPR5hDUMo62TfP4in7FAiaiu4",
  "key23": "3FqN6H48cauB9CCfbbJyNE3AhJwDGLXXhnYT7Bvn579UweneHEHPyU1UtFK3XHjrohNZigAi9twBPXbe5cHPjsSk",
  "key24": "2YwiNrRxj2d9PUVxK9oVbKFXJRQqXbxH9WpCFxpw18riifyUMTSDWe77yhEobwViEfodjAFqJkV2BdivjgdPUxYW",
  "key25": "s6H5NxvjAd2LbHkhVoU3SNx2obY3Vd1t15RAc5JbgJjYpAvP9pUWaKRwPAH9w5msEe9NsepB3oZwrRdNY54X6UZ",
  "key26": "2L47pZhtZEXmzbrtyZdiCw22tCrZD1VRb1U2BCc9vPFvfNCAyhhwdocXYvzpV4TLZrLzA5Doy7sApMfkuNWYEUTN",
  "key27": "24bNdGK2jr4xQqv6AB765G1MErGNKuw5TypGaMrG1gJ2j9n1Y5UEXD8137kKaWSxZgXG1ptuKcd3ScXzMD6QVMNJ",
  "key28": "5YNuTiNzoGNaWiK9GFYD4KsWj1LA1d5amBPuws4jM849Qm6bkaRAnv9fb56dqZdQVhP29kwXnD75YYWgLX9ggZfq",
  "key29": "3QUZhFsKGY6MFirRDbAvetqGj7KSTh59PMYPnzYsTTi3tcXZrn8o1BqDgSfgb7ym8LZXWezYTWnknJum1pbAyFWt",
  "key30": "Gc6fWhh33aFBSw1obYai68V43WuwiSwZgcrSZTzt9eysLTBREavGxpessy2JB9BqycNrV67xN48BtkUngFwNbXQ",
  "key31": "2FWUEFD9hzWMbWxVdPRoRmKHRybj9PSVX1aiAGfm2WbXrdAmx7ySVCxmbs13ytyTDb5KVKkCMs21RZDSZRRUK78s",
  "key32": "5GhCqX4bNAF5rHURtqdB1PV1dAqAEa6M8Xns1LMzywVTWW6X85ZxcaqM2sbuydbXSTrH7MaVqzqbmUzku7VWMwWA",
  "key33": "3UhY4JnMJYqzcfgsNu8YCeFtynKfiBtT8w2PckLZ6SceVu4WgrmBKhe9Pinw4eqfd6ZoY9mwT8hnnGzdHvqbuQHd",
  "key34": "5G76QA6HSg5Vf4DfrhiXnXxRDSnpHS1UBGowjEaSyCqnJY4tsDY9bU4mu1Y6JDo1GUFpzcs78G5LR4Qg1GfW8EHr",
  "key35": "5ordQZQ3PmHHrZmBoX2D39R9m7raGSrjVb5SoHekSdU3TD19SSJbaFKm95tmT8mAHozQFbn5eveWreTnrvphSpXd",
  "key36": "2MHSMPvv5dKvS4WqReek6KQQd3q1MDecQPvv3D7ucndsSuVC7saG2XtGqfrrSeQ8shFUZT2WnektPqBUNWv6bo5p",
  "key37": "2BsRFtBMGNDqBP2XnjzUMjgSGjAsybKcZBtCTjAWQf2bP69Sw5uEXMR7v1QgpAhueMyVCo7DJoPvdGa2o3CK1xtx",
  "key38": "57DbEjrX5XFG2oTP8ud4hEnYwSNHwjnqiigSz66e79x9HBNMw1ZwJ69QA8FJE4SDZwK5Nweh34s1XFn7oEAYv7He",
  "key39": "xFUJMLmmgwcvL8Rx9XjanCWt1qiMEWB4EYsS9AUaDrAZat9x95FHBcfFgdZULMKoBT6DtNWxJzCdr7VMx3Rua9z",
  "key40": "3VLLWQw1pVVCGvFd6dWzdtts7GtEiAnGtmopVyq9kFS7P1Nu97RNdy3Fe5vfFJggzs4bStPtWbfjegqtWQiCasJP",
  "key41": "4qC5bYhwcvXm7beQJsBjoRsL5ivPUYVXCtUYanfHrSckir5hMLxyrtdnwDDGK9Q5HBaAYYs4YcCUkheVRwMiFGyc",
  "key42": "3wefivzMNWWPn1SzpfA3BrKMYVaR5HKHsyZstmHXGHB3PhPPPtuasnGu6CPaPjdewhnUaEKQ9QbEHyeDFc9o39kc",
  "key43": "uDiQDikbpYLD7FU58JfQJxCjsQVZa6imp4SJezVSu1mP5suLytm9NNcw8ai2kLAPPoe2eNJPXceo26Ga3Sa7nG8",
  "key44": "5t86MLmdGHyx5TreDbKnFG29XGN6onMnz22jsY8i23VKXnU42jDBjitEAPz2e9mLThgqroJTThuBRb3m8SYQRkGF",
  "key45": "34NxtqLoZfeKzUrtcHSZ2D3ZGx5iVeh3j1iWxY4Q3vj6ygbMnBWSxAMKX8iwSFNyZQNe8kWBNbEMgLMH8MsbMQJs",
  "key46": "bEdDiV7fZTb1ji1YTgMzfxxEahTw78grSjxpH3wBixUrcMv7pRWgkPToSx6A1TL3ZWMQv7TD2qZJXBD9jFTMUth",
  "key47": "64YckSVEXiFiFQ5AZNgdD9urRorS6HTKKB51p5Cv79X5Bo9ECVcfi1WxxzrQ3DUca4LS8n6KKk7YXXiNmjLTk8fp",
  "key48": "2B14S461KABmQNJDm2GMJqvdpBqNS21q4oDBUWkyiqZJ8voRmAXSd5YMG6H4ykLDFCizbbvfAaPGyQqgbxuswvZY",
  "key49": "5HX7xsrT5jY7Gmo3oYh2y8W8oengpk8f8SKaCfJhkgwitrb5vPy33Gjj9mGftmf9agR4wb91zHK8T5ozR9ftbvEQ"
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
