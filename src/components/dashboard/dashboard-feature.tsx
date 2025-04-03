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
    "sTS8yDsWodstrZU5tMxKwXusARhjaSK6VgVJrPAf42nCA9TgEetXSzyjqcrJcYeNxE8w8ivRtdYk4v6pLFFoNcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8KaRTRLEdV8NoN5J96Qb8yDewDsV4PdB6j4hfWotSFpVajWf7uNMEBPihh4n1y4QNkxr1ztP2e1LrcDeAN8163",
  "key1": "KmRqtfvArgDeBXLtRjdT8d6WYnEkx96wzEeGzehZEcQxAGmk6DNtesuRJdTkY6gmGCExebkrGxXmoRiNPEHSJPA",
  "key2": "2fXgLBgKumx7YrjAsDHhFDaeY8HbdajxKe6CquC4EfjVfKCQapNP7g1zc1naqhyy2zLUqVqPUUYkzHd1EqHUD4T6",
  "key3": "2anMYWk96M4LdCWVA8SRU7dCQTvNceSQkkUvbc4ETNHrVGbPZ7PVwoNvAmCQTFi1c9NCcTqUK2gc15T4dcYcRhgq",
  "key4": "5hLQvJ5KX6Z12yH3ATjrRKn7qsVJnNiK5pftarvgwvNwttuaTLTMvVT1KpjfiwhgUerGYEwpY9KACD8Qy7SxTrbf",
  "key5": "Njuy2cHbq8Nrt7wWzPTkMBpqo1r3Us2k4Z14w7p9snVKGTb5TnUtRQdzK5MMXVuu5tkYrXKJasDTuYShYTctYEi",
  "key6": "2co4RnfbWKenm3p62boNTMNaWdHBNwYxDiPFjtRJqppyLXAg2g1acAxSEQUdk1QtBWD6EhrNhqqQww5KQKhoSuBw",
  "key7": "3tRh2z7at68RqAKuAgmKiWTREhTrSAjtTmEexcuhgYw6NExJhvjQzcmEjB1JCqyqkcLRf2U4qNTAyEP2CcyU4fZh",
  "key8": "acQ1HEWQptwWm4WsBevSjY8vyKQVRasRfUjFrK56XBMkQNRdU1Pb8zQbMR9TH7cZhrZ1ctdvp5ZGHSGNptATeiR",
  "key9": "5fPtX2ictt5qz6MYUznisKTMrG4AB2gJ6Z5t8yCZhXvHvZLsBKMXSYJdtVthhjhjvsZSAkhDdtz7c1pzAP8pJBiJ",
  "key10": "yi9xiJsyAgLLfkJai3kWpymLRKLpWpAFCg9jWKYkhsMT6k5YZ2sTeH99pPsLtfmeAXiPznQG7Mibffhh8UQTAJU",
  "key11": "shnykSTgGFaSENzVkf9bNzxtcgpMyRAwoT4uNDqJuKHjYBLrzd715Z2RszN2UTgKd6yo5UdN9RaPo7U5qWkY1cR",
  "key12": "5YkLTdLfVUZLNknSCtUWZaSyt17c4mQ2WxMdeHLUtAKYbusUVJkJWe5wY4D5vSzsB2kyxsAMHqy9QwPFiNfBNiAN",
  "key13": "YMNUgdzHqRV7bokRU9gACkHWcZQ8NybukZPfkyp5dGe3Jq75JDFagBQcBq6xg3Jrxq2eP27NpRF4rpBEQGtqUpw",
  "key14": "EDNmqR95ck6SGLWHarnag73zbbTQXTXt3EdXjobrdaEkR5c1UpfG7krf8j77RMMvMWESRYPH56Faa4mK7Ws1ZY9",
  "key15": "3wTG4j65Rq5jyQNVpU2XpCefosjf8fcK6nBQHLDMqKvH1tjG2XKgSKSB8fRSmtChKZ1GpHqsJKoNmfWcZg7Vq13S",
  "key16": "GiGRL6LYtaiQi2BWMSUnDRVypBcgrUERBe6LXCAvxAXdCJeYJZVyjihQwmB6PdGHMfeWkXNGFPSPbSa5tfVBn5b",
  "key17": "45rBGkbMbmCpxjM6XM79Bd49FwUsP4yXdNWZv1K7eEfPfcK88YT4YRw6tapQCEv8DiJGdiWCikA7AVyoNgEDwKv4",
  "key18": "3sqPokbmm65M913CH8Srz7KoRgdy6ayMVeyHmCQCxrX7qvNYcHM5kDdu66JkHmXyDfcSAGTbArR9Gja5d7YYCiEF",
  "key19": "GWjkKTD4GZMzySCJxf8KYQTtkC8vYiT3hd7PS7psTkJReAW8HRpMQ9KMxRQuutvcYbSCKkrHdftDkDy45HTcA16",
  "key20": "4Np4eE7qmATfp2khuXVf7c5HjpJjuEbpiEykdH8ShSiCFm4VAMCcsHTetnNF4nQ5PBJvz2JhrQ2Gt6cF6x7PmskB",
  "key21": "5uStyQeNuMLAtB9cnXeXfWx3ZW1chacvzLw1kPNNZvcfgupwiM7fgc2Uc7bf1a2QDHtq3HRcSQS21ccX1MqHLUQ3",
  "key22": "24tfgaJgWnoK5fju7ppTsJYht3y781FuRkVf8RvXcK64vwHJRvF4EhWRFWSzoyXqr4SAk4air4rhEZhCoG3rZDae",
  "key23": "UwqMt8MryTHsy8c6FCbDZqmux9XSUJk78VvpsyFNaLLreHJ1EJtypoS4NLm6opFBVNWRoeNQaDJeiy4dvHgWDMt",
  "key24": "3cbw4rorbZuHPk3U4MJ1ktLJ8EmqpZX5Jc7r6mrnrx8n38PuBZQ2MLLZSLdryx4dUWWaSgvoUffmBvsmPpUukNrz",
  "key25": "4B8qdQxXWAypybH7rHmRpmMyr4YfWgQxC2n83NEFxsN3h1ryvHhSVTme6DoKL7gSjJ7JmW3rusnWzHDsYJDZPU2u",
  "key26": "2v6HL8mitBtPkJaZasR1UFWUmL3CAyzG9KkAqABFHfwVz7BfNwtbEmfMgvR5k79oefRBMSi7vdNHxCqitjs7QwDj",
  "key27": "3w7ZZrfqQE5V8LKr7jP3bnnsRRMyKWMhkRjsdmUUFWV2gE2nYaN9DytLsaoFF44jSDUkycyDha73AWjwnp1sCxo6",
  "key28": "4D51uvEqngPNnYhroEoNCP39K2upxL9pWfHs9fXc23hCCeiqzXTTVFBwsTuyWDKT1F68ZVrRhZs8ZWswEioAcaui",
  "key29": "4YgJqYmB6Q5wbExXGFSfDYgdcC4d1NFeXWBko8116uR5kLLHdkZv9JAznnnasubX1VQvyCfP9VzhJmHB11CEZXs9",
  "key30": "4Pfss6B8X8SiTpi1vN3CA5HeuEDJrHbB92mEKAnrPQBvk4SP45Y3moQTppv5oug4D2QmXPyrs8tifBPJFdRrNwPR",
  "key31": "3u9sA1Jx3H7UvLTEaUxqmwJwbSBCzQcDTFxXNHa6M1jTZB1g8pFkJavMQnFaXrzP4ezBLFdybyLEpVkuVeYCnRc6"
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
