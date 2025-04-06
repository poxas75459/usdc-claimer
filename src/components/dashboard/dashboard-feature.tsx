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
    "4C2CwdQUXT6tXUGtukbrCJDvkx3UwuxNxLtFfgC1RCYbVU2rXuXKPHZ1Km1HB6uxqSR9NdM44P7wBJHrqbjCMMnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLtjk2xFF9vM1tEsiCqaZmYX7C9XaLertCrnFHvCGTwL6DznAzodAQe33Ut5hUM7x8MQn5qw6f7tmca447oB65f",
  "key1": "2UiqtxRoMLJbNFZhCqCJiNR1nMCc2qPqQoiozR3veZGbzHxb7M7RaEmZZRAczGBZSfosdt1Atuw6YsCjDGkeb83L",
  "key2": "3c72dCCr9zJRfexJ2hMr1L3vqrz5WzEsYvpTBBViqsdDW4qpdUvLt3rX4T3JQMfFVtCFPkUMeQaysyXzs4v57gzU",
  "key3": "5VUmYT99ysEZd33V7tZq7t21w8yQoS8qqanNxuiBKJEvnFvMeRixAtgcZVTJVo3vSb24b63GirgXUsCt3RRVBxQj",
  "key4": "3e3yiiegR352zKTVSC9gjN2L5oJDmJQs6NtdHbdumCmcXCNr9UBkN6bQx3L5MVri2WeUWza56GaoXipNXH4rjDJR",
  "key5": "417FG9Xd4y4J6eguB9fYP28JqFP92TL83juvWC7cKZtvpUir5bbJr2c2iQS1zy77KcrwBLYrGFfsf52heyQExhrk",
  "key6": "5K15dEMRmKvqp4c7kzdmdxi4Nj9ZLGYSkCg5ptEJGQe3N5w2eTURhuT87MCy8XYtXE7EBkDrhXiaAM1rWRBijagf",
  "key7": "7zAkkX2Vq45SNS2EyC9q2n87n824uxKe4hUy6c7hvEmhnJGNEympjUHuksP2Qtam3bhHpJVa9SPuCwacc2JeH1A",
  "key8": "5KcjWdkWuN5Nq8ryzNrGbD74o6UCbKp8fbV1sF9oYCPzbgtuGyHpHUzmkwCKav4BAttEVLGg95RzUoyMMF4dwtYC",
  "key9": "5RPAudtEawQZgiUbFkP1aBEhcGeUu1DfPFstEoxHyU56emVkxWmrcuWTRMyJLC6YQZwgbEh4aWaQQiFMaXSL2cC9",
  "key10": "2MuwBTqeSn4AJvjgzsnZjf3PfNngRek9rQtCXecoAePCNXsWhGXpqCMbR3o3zXtkQ2pkQVznVEtizTqkfBUNbAMw",
  "key11": "kofBHdMA7jP4LB9xo3LVKJesquFVhxrzFL73497Wn1L45dBbrkgxq3LXA3Vc1qt9XhQKkeEAe8wGcB32ermTzey",
  "key12": "GVW3u1YeMPjToWR4ccX1kv8h9iRKKuWz4uhiRw8mvtgQPikUgBGf2U2gNXxYZPqGUWunX5k5JKwdUYWpbhU6sEb",
  "key13": "2DT8REBhJ3oGgRmksfT8sgqKoejUBKLZNRCSd6HA6NDy5bbmLsberqchykNei4xEDzujzCuPHEpmAc4fkMCWLGan",
  "key14": "2p7k9JaJEMcxnaVLqFr8BiE6dsJfgJfZq93VsaRvsU5XQCmENrfQEMPJ9RDu4Uv3pKTqpTeGHD9DUZvuoU2WGTU5",
  "key15": "3hmwb9ybf8jSfachGAWiw8bL3qVKKsndwswr2u3ALkxKLNc4jHn9mpk6D4QyzugTkTFMTuWYsqycgQT2nXAtuAuE",
  "key16": "4Tx7GnYLQ5sqHZsuTkB7KhAcap9TDyVFgnEimfdUFbZD5sya8F2FQWSm61dPowzmNaKFKPcy2Ww6FhL9Hjr4JCUi",
  "key17": "3L9Ea1VA2VaV9dtstcgYqLDWMuzY7Vbzd4wtDcy4LW7Lf4D1WEZmfUz6pJ3voCzuTe1FQXeLQGKjdjf2Nw7qHEEd",
  "key18": "zBgnRx7ER7uhxMUVkcjGKGDFmFoifD7oZjm4m9NmHSVzUZJNwcuwE6bGMv1ck4stKkLn3x3SDg5J4etrCjGZAFa",
  "key19": "5zCxrXjy61KwvNAx1HfQxpDuf7J9xwvFFpFV6GfJgDpKVTuWRXbLU8UEY9bpRMynwngtJLogNFaMjaMb2hyyQ2ae",
  "key20": "4rX71PPDWVHYHz6zrCKfYN3fdTWzNC6tYTthje7QKJGPn657EQsf3X9TXixmGdytFseAMeVQDgrzX5QY2Qm34oMM",
  "key21": "4TuMxvDtPo3iRFqrj8RA8bJi59Grpybr8W6X7e3sgHnZPTMZe3p5dTvyXSRtHbqwptJN8rx31Gop2k5LteBg2rjz",
  "key22": "44ZDzLRkAEWLqud58zEBnLS7KxSk458dvaLvA7C9qsF9kZXma5BcwoZhsT9VkT6wcE91EnfCgnbGXipCUW9u9vbb",
  "key23": "434tQ2gP4gr69vLpAN68b8MF5fJbKBSk4mtRV72QjEdr3EdJ2ndotwCs9hcL68zonST7G4RUGWeYKwmmYVgJrAAe",
  "key24": "BPuS2qRYhAbZEDFMvRgiHhnwKzY3N5gGNB9bbZE48fi7DaM96DNg1pKhm5ERXNhnpQ3jnzFLR5CZvXoM1vvTppN",
  "key25": "5sunidBFcipQHiVt8Rcih6FbQSfW7ntSM5bnfTHEwKNPk2WFeGHQNGek87dU8huLLxxoKdwKshxEdLT1LxtHzcPo",
  "key26": "2aZw5kyfEUsigy9wcZyFEcpve1QnewBRSUdqQ3iMM1K5w6PAMJo3A9nbfeM6ncppDC7yLRoTM2ojsJqejCJnoq5K",
  "key27": "4TK7oCzocPMBi2VHL2SNwNEHAQV21Nn1wwX5RQD7zGWoKJ9RTLn8ikZ34FLY4Vke2ypWLyybrCkZbqKfmmgcW4a9",
  "key28": "67DtLWmYozHc5KgRuWut6Vm3WrPTtaQPuKbiaiHFYGkTt537cZY6MSqMNvCntKoy7iuSFkTkeUVkx79kRU13MZhc",
  "key29": "41mA9SSrEBuUnMMktkt5t1QeHtT1YtVBCDNWL92gQne49h3eGCYmsiyWANKhgwwKmd5WUxkm2h8mFGLZywwav1vq",
  "key30": "gtMgE7SbdehrjUpSAJVxNnhwoEjaPjHKynUrq3tZVTu7SCn6zxiR6oksrsZDCwtJoxBh7DosLK9ue93mVMoSpko",
  "key31": "3yd7JcgdCxQZZzJ88J9ae7FBC7NmTPgEgWVrsDYzyZaZRG4zbwTwPLox3i2qe9pMKnCzYodJUmnYKSWCrXvMAqjy",
  "key32": "2WYAYdRDNUKT3vZXZC1Bqq9rXDJT41fzNvExCPUUXiNJABEdQsR4u24vpbjkQanHKtdErWaurguAjeTZWfd3iujp",
  "key33": "67BkkmSEMSB7a3czcZdH9mymLZ4jGr9jwj6brQV3YYe1zqNHrwWKStqNRenP1KDTasVRDaBN123cPwMMdXMQMoJ3",
  "key34": "5vWwTu3mn1TZhx3GdT3Hzbcjo3kpqeruVeGrcEnCa9VEqDoV712enfeSY7nff7jmsXPdp1K7zPUv4QA1W2rKaCrB",
  "key35": "Q5fL94yGXUkVA1wSDPj3VtjXExatTX5DjPa6oaoQgC7YTcSbVyGrR59KEmHRozukDLnesCAyMRdAPGiwp89uExj",
  "key36": "3ochKHDiQGnMQLGddG9LqEFNiSkn4ufcko6WZHfBcYm8CWMKBW1Dhj6gdPp5KVc9dJo5rT5Bec5bGM5yJ4wfGp9v",
  "key37": "2V9b5pJi6UdcnxGPMjEvb69Ch4NJSAZha9gasBWG19qMxi2jVr264jmv8FgNcFRHCcWFdoPDdo6dWdGDjRf1qyjt"
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
