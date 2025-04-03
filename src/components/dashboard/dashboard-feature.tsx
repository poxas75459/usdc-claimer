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
    "4DkFZJwqzo4LMKc48xBuZB7ZK9CSQ2oaJS6gsTczFXeUdckLoC5rWTAKLPFUsPwQ7EEPvFzYNWPyStNvRekZctab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1XhAGtvRVDJSPX5CcTMiNw8Fhh6FgMR9LKzKA6xmZVPWZxt4Gy2B1TJsj1hxUZd5rgj8RvxvLafVemU7g3XdSr",
  "key1": "GKCmzMtRHdBdA4a79r5hAAwiSiWiLTF4vUTzVmA978dZL5Cw4ALTxxfkGyprRnmL56WepHUXgmSBm4ytJC6VjLW",
  "key2": "4LjC8zKyZmBVjUcTfzxE9wMWADBkzJstBnnLkYpHtfTEKuJZC6m8eTnPvS4kpiV1aouhMSwi3jhDqFDV7C2qNVFR",
  "key3": "5yXHjf4D7Zr8amUNAaeLLvAn8WBwUatF69bNTzWor11DGasgW8xSLfuHEvHZAwJLANNWxPo7HtH5gpgZmUNiu77N",
  "key4": "3ax7d5BsUSLteiidJgewavVvy1TbchQygHEiZ7U6KqLn7QiNW86ssTzrkJ1iQ2pH4FCQx9nZ92mmUeEFzb71ZGMX",
  "key5": "2cYzJGWWhtu3BfGXzzUwRnayokY64hKDkm4Fy47M59af1FAVpWSBP3agfaiJUCpTrrubq64hdVPuJrwNz9Xvzmtc",
  "key6": "2uBz2j1X2erqc8KSyKaTSwt9e3QHL1hC45BXovrCGERXeL4gJ2EY6QnNKW5UTwB8UkP9baC2rfu14SKr8JQw6wEd",
  "key7": "5dYaxCiND8KmCtVDnfL9L9j9d1kmbCnNVkhuhC3Atxgd6smdtu2VuQ8158iZnxrTcnr8dkotwuAHvxL74EPTUotJ",
  "key8": "52js9zuq8XqMr7Us4taZ8qYn8GsRckAWWrpXCMtrVoCL1dWw2EYbWHcTnESn7A6Yzd7Sixsg4d4uXBPWp93z3fyi",
  "key9": "5Ybffpt4TzywhgsX9cqGtjY7JTLerCUdP8DKcAKbibbtgwPU88ouQuap8LDZxNuop9m1uQ27dQJpLoCSYF9Ri3Tz",
  "key10": "651yMRUBEo39JDCursxE3Uf7c2VVGHfoaynStsK8wst7xBfaohpHofwe7bHxb3jbK2dwib9tChaK3uZYpZ4kbWG7",
  "key11": "5efp9mkgkJKNA7DQStnF3kmQnGgyn8M4ZhXUmA641xrca3j8vfu3dA6LEoYqCvECrTwEguUPSpLcacEfCdXpZjdn",
  "key12": "4Wincn16Gx6VpSMVE7WFTycPwm6pQx6Yo2JUuGoMd6vsaQWFPt68BW9kDWNRo5d2AEU4VyNKkAQwd9LgCiCtfa2L",
  "key13": "4p9rBvc6RPUfMkmxWJFDZiv3wHL5zatT78zARnLrDM5JofNmmt9CS5M4mnLhERgSJyXnD1FkCzdfoPjH3N3qo11k",
  "key14": "3AXRjkqcaUx6ejgJH7AopmSqLWfsXUgnDbAQEwctNu4UoXtoTiYCBTNCREBnkYdfJ1vwncyTctwqFK9vWP2js74Q",
  "key15": "vXK7pRZFTBKCCZHRLWS8EmUDnr9YkDQPRXKpb9VBzDreqAssT69mXEj7iJvYAKm9YhuKucSL6zqSBtgxKPNMaL3",
  "key16": "nVGBmnRDo4T2cPxoTLbsL5GTYbha7fF3wAemn2a3JuDE9Q8kQp1PUZKsuU9rzWibvX8HCEbcLvT66UY6CjHvjRV",
  "key17": "4oEH6ieFZYCKuR7dMMTyrTtSrvnWyxvDQLkbGMjVjr5skSEuGR1FCKZ2qEwpXw14CrWqCSUMHPVjrGmMkanbwqbL",
  "key18": "3cCVqUbtsKANZxokHoFMx6rfCMUWrK7rHZpS8ZBSof9czq1GqAAvDmGcZWSQxNjyA8uq7kozjbYstUCHARsGdKEb",
  "key19": "5cvEy75drC6kvhqkPCG2TxZbjhDyDW6GDcYcMASEUFptUnqtAvUngCmtB7JiPhzXx7z8H1X3y2zN9Wj574VsTq9o",
  "key20": "2oWdEzXMXZYV6LYh55VAHaxxuVuAPXzUvQoTwCh7Uf71G6gyetk9HXwqEivquPamzXJj9bCcEYtJPp58ePRCsisH",
  "key21": "3RzpFaB2s66b59GjpBBCK9V4qMs9E6AxKoLyew293wFptkCJ6h4ARvZYUA84aFk2xExzCnPqCmUJfBWE6BCHES49",
  "key22": "4UHKtViW4FpjgWcnpi1SwwiKrZUS8hrCBW2v2jeobsEWBVrthRNwLxBxmXyVnTUGXm2APfWmvuRuTJKnZ1XxWEmr",
  "key23": "2yAULRaYaz9wKQnbKAHM9ZqUX7U8ny3Ei8Lo4gd1KBTbkxJpdvH1FYVqrBo5T7gN4AtRBBFTrQyGtocLiBiufitU",
  "key24": "N8S5hnCh6NwyQ2QNdybSugLT9Z5cjXjUuzqbmPDDJunPyePAPhLvuwNZZxHsK32o9Z5nBYmwgPKutHwfyXsUueV",
  "key25": "5GnvqwygLXtzSSj4PtpT64FFoUVq18Vs1PmYrhQWftRCUE4D8Bf1TrFq82Myjc3qzV2oxAooRQkwprPDuTA36Y61",
  "key26": "exnSjKYrtSzDhcMDSSAKZdaRFgJbuoaZSV9vGzqj5cMWaRQdwgWhsmw4xFArNqm6An93xnjFCbqe9zAor9vi8ni",
  "key27": "BzRGreSmWjUazcuaHeuqEWXgPoyRMvaBYwjJiQYPTP5LTSpuzHA5aW9sWt2m42kJC2fco92CxvnaXW2npwTXWHZ",
  "key28": "5LbvQBfDvHx58zpBnMW5XxXppTkg5VLsAy7zLDu5ixJzWCmk2Jv4SKTf6CepBpDLjUUk7efhbPnpvc33WVKpMAqx",
  "key29": "2KWHyUaQ8JRBcmsBYeY93ZxSsnF1UG5BVakejNcDbXPo1xPuzTAx7RvxhJfw3K2nRbjM53SkwoDF2Wp7hfJ4iNGK",
  "key30": "3yLh8sPJQz8o3eWrbJ5qeKkaZycrjiujV5L8QiZcbEAiBq5dvtaGmjZ55tVq58m9zqbmr1kHnf7YQwT9DSR6sv7c",
  "key31": "2Ycm8FwRvkMZrYuwSutGGDX8PH77QcAnhmhw6hJRm1MFDVHrEzqrNFJyrfQvsngpnU7zDjtYwXrJkby9xpQGWMTD",
  "key32": "5zGVrQAsn5iEGR1wo3XpC676LhZmjWfixJZj2H5NbU14NzciDqwjbGUNEueynmjenuzUpbsF8UD1mX6FkQxusgtz",
  "key33": "2Jioj3XpWkGd3sJLd6ABxVipuFFExWwrFNVy4MXxFec6YxGtZhcRfwVb61nithJaxNvoacsLAfP396N9YHnYR7Lx",
  "key34": "3WwpMSPucLTa1uQnhmcdT4Q2AvC5VgcyGF8WQDJfwv9VhpkNJAnavxA93LuLc3YPSmNvBNcMuYYWWsoCNsyv3iU",
  "key35": "51JJf8ZiRebJeEFv2prqFAdCxne7x29bZLSdgQ512MMgXP1Hmo2gURsum358pVeT3WwaM2a3TAuCvkfCYurZUhK5",
  "key36": "Q8rEwxDnnxxoCj1WPPzjxNzB57RxmJtTWwS5FdAKMZi5Hxwp97joyHNwzbHXmddm25ouY6Q7d5t4wGs6DSNLxTZ",
  "key37": "BG9o6UdiBAXFtwrK3DJiJ4a2WtUH7kiGt1FH3CVW5QWZMPxYwb9Qaq9JbQW1PwLzxY5BSw53C27CXMRfGa7DE5t",
  "key38": "bMirWHpHucyp2XpzpvfSr9PSMLfSUaXWk7TEVtmpgcbfa5rb8VSC1GojZBNKft9JAWPBXVkcjrQUoC5yqBeWcRf",
  "key39": "3JTjfB6TovRv38EGtpQC4wrJSNQMwCmCHDcGgyuPzu1amXm5tvYGqfcmVDLh2jSUXBW1WZVT9ZAnH3iBkGVJnGmk",
  "key40": "5dUuqVeMuovKuyuPpXnRwaUCBfU5ePeirGNsMp555j5PTxQxm8CEGiScAgcdH6FR9YYksAuK9ee6cjbZcTegc8Cg",
  "key41": "5aUH9yN7wSvdstcznQEaphEGMnbLvcFdHWpgyLym8Q4y6iervQaHUx16naJWSBve8T25bgB3JW8brZGMsHLkvnWA",
  "key42": "61dsxp25PQ9MRsBe4csnXW5Y1pVxuXz2dTNG4R2YpEETJvQEEyhmTnbVAVUThFeigHHaDB1pT4fgWE9ZxcrYg9PB",
  "key43": "3Nw8AuSxiP8Uenut8bWhAomdRkkQSmKrDCZDNduSk7pvLRP3ZGgFxbmGWBGnHH6bKKYHKJs1m5B1sEnaT5dQTehm",
  "key44": "3jQyEC5TkGiMzPTiA4QwkEGAn36W5nEyL2DtHiJfA1hYxpeqqD6x8zPMPBcvbQd3ZovQNJHX9rMhe9piVxitD5zY",
  "key45": "3WpompDrnEUSFPZYzZFWwyJ8Vd5jPTzrGqMykZHDUtgwiMBGsa4kBZXKDMaEkFpCUMXwgdNHhAzdZGQw4tnqxSBv"
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
