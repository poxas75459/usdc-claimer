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
    "3eHkhABhyBwUt2Q2iarZYuS2pkb89eFDNLTC2nDHd4u1vJuuAyCpWuzT7qC14jSnAaYNdocyx56K9wsa4ip6XxGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gUx7NitCTo6WuUbzZkTqU4KCWggQ5LREHdD2NZAy2WApNH8sc2yPbrBnLsTwKqcebpBF6ZuyKNXQYpjeQAT6ijs",
  "key1": "4cD6jvZd79PSctG9yeaA3nuVb36d5A52ayN2vAZC4WMqdrcrweLroyAZhjF1v7PeoMsWTjhjcgAmna2BXPz6nUZB",
  "key2": "qMm682jbpDE1XQfGWVUszgWNgamd182R5pMPA65MfXymdG7HefDXczpLxavvWdgxV9nqGVDyJmqoj1iDVFQzVMm",
  "key3": "UYYGCJ93oXLc1c56RPrduAutP2u3f2tK9iLQh5QQc1ztwZFSNSe5jvuo7iUicAan6HNscrcJKZ8KVV1fD78Br28",
  "key4": "4tQ7ycZEeV8XFmKT6LeHW6ZWScsq7MrZb8nLN4kaoXTjPaxF15oEm8NbJRLUtfUmRBmrxfnifqW5GsSrharaB2P3",
  "key5": "2cUCj1KpnpSY7vYkeFAwcZU9bAWKpzExfggCAx1Eyv8gk92hgs4gtnT3goWPs95ooUiqBAaDjZPJWeys8gFaJRmx",
  "key6": "2VtsqgK1iHCrj6nRAj1Aj7dVgoeitAawaiHCMhsxHr8EP1FffDyKmTaeZvUqHZqQC67fi11PfPWDn5q2Y6X4zXLk",
  "key7": "3pzgBWS2dnxeMg5bLRCkY51MrMBUHdvWuBHDxhEKb7C6hLKyDn2s8cz6eBGKge1vZwk8kqRcWMn7WYfTjzCdnMzi",
  "key8": "YPHui3AouGqbcsNTYr36FdhaeaRA7M9qgwYNEtMycLERJryJWS4uNh7Jvm3DavaQhmFKc9p3vwcTZcY5MNhipwx",
  "key9": "4J4nKH79xrZnRj3cKBaGeUBryUZpbc1GJ9anM2jfPsXwPwfodDLRV8dX7nUgUYdw2uwBqyy1e7uzdgmDYneVcBJu",
  "key10": "4hUuWngR5JcQsak6JSamKfB2MuGBCzpNkssqxs3MSjomsxGwQirjeY2esLyc46ofhU6dZAG3V3TAA5ZJFJtFe9Gr",
  "key11": "5hKPtaQ26VTJYWJwd6D3rGU8AUCs1s9m8Bpc1yvZJ42YnZfNExjo8bc4DAGjAEtVLnrM61xisu1SgSMWcZn51ARs",
  "key12": "4DnBJTxBcQA2vY5CRA3mTvVYmGU4FUCqT91XofS5tKcf4Zg2ED2r3t8EPuekTCcauxhKJmhD3BWED8hezFpL16hq",
  "key13": "3ibqSWxsq9Szbpv4uLqYvTkCa14WGHRD2CmRpQEpPx1HxwWhC73H7LbZWX79t9HvbFRVwJssa4GoTJHUgJ1u3sEn",
  "key14": "42MfT8xuvHDkZiXf1exurkQPxpmYC57XXuGgo7tWW9FbF8DRd8CEB3y5U2fHSaefyWTuMRvnuybdr7zEiomYVzVV",
  "key15": "o3HerF2DcDr1RH3Hw4DPXKr4sjkAGWHDvPcqh6hAzXyckqFdSrZGKo7Uened5Mkg3GR2rCHQx8rBmRVQqgTiBTH",
  "key16": "51uhvWiy8FpsF8AWArK3sKWosC3Aw46eYSYsH3jK9mnioFA744v3pQeGVDpMLrMWw8Q2cpLgkZExJK3Y7JM34Hoj",
  "key17": "2JrQDoC5q4jCkh9futQBp1MiiehhcAUndQhQjnESzvh48PNBQpM7UcKPJK7iRZUaGQXSVg64KSsWgJFjs7Cx27QJ",
  "key18": "3ug5LNubzqoBYQUsDmMrP9dvpeS3XjFu5LaQv8LhG28JWo6ALnByPU8UwjEwf48f93pZ9PuiJ1mvM8Egjb2hVrzi",
  "key19": "3mHqEVXvpFbbs2tCikotMxVQTakteNWpcBkGmhHqcd6tbgKWn4SmYdSqzboqsXZhcZSpexKN3E9g49tp3b34G29s",
  "key20": "46LU7mLVYSh5PNC29AD19UYt2EJrKRKe4qoVVapiid4iWcrL7kRz9eaXqzke3jcu26UECwiUKCCczq3nbkLgb4n5",
  "key21": "2qTJog9BAy4XuVbyYrQxydF4musUfGp3dzVUPfTv9fm2fSgb6Ps27HBJAhL5wTZCzvqSgQpTNnZWgR17ambCKPxN",
  "key22": "2742G3VAjLxE1UcrgHmdRCPe3KfGm2E29rhhewmKRpKERzNAUDg5uubJCzRACvM3mqwGSYVqQU4ieB7K4BxBc6gb",
  "key23": "Uopmyd4iBeRx1WtdNjf56R5zFTQLi819Q8kyj2Nf3bv3kWXmKmxYGRKhB1u5x54TiUc4EViHNdXoNdC2uBGL5oZ",
  "key24": "F68tbWUkRH9d9ivvLCEDox2z9JGXURFnFcHgBZNynpzrf5dNiNAQwRUjSevUc3sLfJJ2x7dCi2GEJHa6NNCFKBQ",
  "key25": "2fTeeC231d2vW4j38tt7LUUskpCyuQ6uGPoQ797YuAgLJ8axvixnLzLpUShavHgL2DD63r7LzrcNdMed8BSPGysR",
  "key26": "4UgUMPSKz5Ed8cbzcyDw6ZFY79LqjfodssrkucwpJCazf1GVwhFwQ6CWTevbVgZchN89e1mQyrCgmcXt7UsSbmui",
  "key27": "5xB5sy1XqdHNdrvaxZ3tzq5WeepptpYR3xsZTjzUD5nQCb1NxFF6vchQdZG7EFpKN1AiZEEum4pwaoeuSuzoBSbb",
  "key28": "BusD728drQaKYuJ1qww8ChVovETnMCu2brhG8ufvUNkmu1kWqCwMg8EJXQJofApowfHULja3UaJFZ8CiuzePPR7",
  "key29": "5BxGfJw57Depk2EdUxzWCi2ZNLMUCnnGKiLpcjiMwk8LuueGXC2zJAqcKgVqeazHMqBdUjn33jV26CrNRoU8J21Y",
  "key30": "5wo8FPKEUrAnFBZL1MXKbxFS41REBqssAKk5ySWafaHdvJuRzQfiaKTm3LzTva6UVG322KhABVhKyg6P4GE2ZnnF",
  "key31": "3NqU5kHSrtRJawa7K2dAqwA4H6M1W3cDjMe3YbaAwS5SfJwABRCruHBQMkxhcSerAKQwyyHgfVmF3Rnzcm8usbQG",
  "key32": "4M2K9fbZafMuWeLRpbkqZH7cSzW2rqP7dMcKdMABkJTooZY3QvNHzNY1gmujeNVThrrHompizR7V7jgjRhPbAaHU",
  "key33": "4yjdxysuPcnP9mwB8MSWVALkc2pLmMC4UdYtvDRHoFSKc18Ze54J6VYHM6LWRDWj9v6JEuweHtxJAZg3iNF8HrU4",
  "key34": "3wkhVbjMjYw9t85hxv28GiG8E4hZyfwLDGkRXPMEVae8ffg6i7EbyvSwuL41kYAKF4xmsTz8qY6WjXmUc54GjgU2"
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
