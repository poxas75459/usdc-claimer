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
    "zgRD2bXR8vLKuCcoMMyQom2VTMTPAZ9HBwaLzB1MSv1RMjFo5h7XKAGTCWHH2WnpmJbiqqo1N4oCKpPd1FUSArC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgKjVncjPbSAX7QBw65qBsquUq7MTpcJNpyWVVYxpAqLcDQvW6eeUiLfhypJuKBiB2ZRnbNAm9AcnUdnK6UNsK2",
  "key1": "2XK5kKRJqEo5RHYp3CMhhA1YFHNSWsAsgBxQsAAnTqigh3k51FCxW9FybffRcvRETUKUwbRrWjE9VZc2Uu5c1zFj",
  "key2": "4VSRP4B7KFRagyFpRvfoebgmi8ZJZmg5g9euHZK6PWCEgRRWEZuYgKkYoJdU32U2heAnALDG8wWNqth9b2VTfF7f",
  "key3": "9SbBCbBa1fFEZpukyZhaDWqp4MibtEcGKuDg3qV71BjNU5QaQKXMfX9tPg2wdtspdeMzkXcrexogbb5aokYzB8p",
  "key4": "2dis9tYuC2FbnjGxkkbBRUH2ikbrRLr3XHH6TmmMEnNr6sLgy49a2QqM9WYAieZdv8pbVrKrAXNpDrbzatNgSFjK",
  "key5": "R5cpR51zRVu7FCTMhFVr5Dv7rvGCRiZa2bm7GxijXQFVgVwxCGqohZeSVY4iCuVKHoQ4NPCj8JSmrRTxQ3wCcXE",
  "key6": "3q7WkV22pVY7J3TqevTmfpUC6GSN4mgR4SkCUqnWHz7Rj6kAVeXZTQ1F5o4e9JXupsLoF9JmKUMhy4hbctfX45Hn",
  "key7": "QG6JqTxYtpZdhYfUnzBvcfkHw58ghJ5e93obbmetugSZcG7bdo9WR5eY4ih5L8vyZ7Pxyg6fFRBbLnQGwQZAkEx",
  "key8": "228X5XsWJN15z8XAT1kwEvcnXwcTCLQGRxpTpuTYmtj7TdoY84Az2uCAuk9L3iVKwdW7skogCuEFwYts4nx4j21j",
  "key9": "4HK5Pw7sNRBNoQPrpe7tMc81Ucv5vMJtAD28pbWqhPN9JfQdDV1phZUzo3n5ErKgMRiLdWtZbh5RmAXWdn3bDtMM",
  "key10": "58EBxT5fUeB68xice4f6CnBncky8ZTfxmKBbxYWaa4f3gjMBfKXgqYzrJDYCHz2pAUrcbbx2wAjuSgPJGmrAKndM",
  "key11": "1ADPFdm36uh42GTBjp2KtKKeG19g7sD3hcQA3rgjLekwwaCj3Eusj38CrjHJyZnBw3ySH7dVvBKTGwicFwzfuHf",
  "key12": "3od4A5dkHGv9mwGRCQ7q1HoYe2nTPNx8GV4Q4weLbB47PwM78TyRpiW4TpWQ7w4d7BYjLpKPJqQpQUN6VpYMWLEH",
  "key13": "2WykzyKE1yXtHkYWXLz1ZPpgQxovFVCCW6ceX7kfEo2QbHDrrxUByD2QgZMy15fUb8r666P4eYG9St88v11rtw9U",
  "key14": "3rjV6VX1mPHunVjoVhrhA4WDp2Uv6UoSR3LCxGEHri53ahdeG8J8hNX5tKpiFcgRfCdCbxVFZVcB7EgJnkhVM3vv",
  "key15": "4fe9PZEJTVjC4B3vkHkchyAaGB9bLZPfZMai453quJer8sTcHR2RMfhvvfCo1VtKV4XVJETGHF6HneFjRf1ZX18e",
  "key16": "r4ZAwuMRHgPXHycbmRYfTs6TDe8DCa7FPF1Jt8nUg7XbFMzjws1aThGyLp8qNk9buAxaKQDor3VBTVgDVq8UAAN",
  "key17": "5qxuRks2j1NHSAe2c15FkNJ7LSNpNnNXrxJ7s5BTiYAPFLVhG9MH73AVpyB56EWycnGgzZz1YGr4S8EuVGKKgRL5",
  "key18": "9s4qdm6P6Df6Ut81SHcFLjSZ7SWvuyeQyETCv8KpV5BmPFdBFoXnF3nF5Dz8dRCwLzAvGSjhby4S83wWUeHpTJk",
  "key19": "2yLzgqXQwiTwzk42iv1SJnoeD3yuWFn9DraBWhnFq4VXkR1UH85FqXNy3ykDQbRjjjgMnvsAJUoEAzCFjLiLuhLv",
  "key20": "5mtSiK4zxLpG54Pr3KqNkMCLVHq3JwQZ4xBVWzy8NQ2AZxBabsqNTajnZMgnNZQaM3EXy4yjxyryZZWkfRxiEUpX",
  "key21": "3jJVzXrxAieDF3boHa2sGPN5fSfMtRQtwE5ELmCQsis6fkrBV54jXgTPyUyNDC7XWEFunps9eBJKk8vwzdWsdBtJ",
  "key22": "5GtyqP6q2kQUxL6zWSF4ihFMQyQhNsGHHy53QgovUv9zCfD6F1h53Yn9vaTzmhERTtFZ69b2bbPMTtbMfXZuFmoM",
  "key23": "3sh37AkK8SKcucMMfdwyhzksidEoZkUNrMowk15tbEpnZB91MPH1x6z449qiZygfhf3srt3xLT37TFLXNDtyhrpP",
  "key24": "5cfbrUjEEVA4wEzyFn1fehz6Kj9PGTVzid3MHfJGrXjqKk147hmo4frEGpd1UnqhHJCiFpUnmRKfYLAMS1bQKxAo",
  "key25": "5A6aSRbgjZsHhS35bjGFcpaRD5xCDef9Q8jwMBXrnTaHsJKSH7FiSkzqf6xnvcyxDpUkS1YAJ1moZzXzdAmkJyhB",
  "key26": "48N2TY42ZMaCZQkxnpfqMFuA73gNNjgcg7RsDCgiz8SBUNmJqa2qmu5v5k82uDzMipTiVpsU8vHhx6wSj5MFwcqS",
  "key27": "2gwXA7pHiR4oYuNwcLV7G7PABrAKZNde3hScHNCKNwPnjC9H1i8JJfcz6HuwNwH2sxYViAiz4R222EztbCvdV5By",
  "key28": "4QJdgYomgHTjEb99T81XUbu3ezqhghzarUxPcq56ZNYQxdqt7uhsoXJFmbcB8dZ6roMSH25A2XithJkg3AfBmy7J",
  "key29": "2bmek8WLdPuMYzB8gxxF8f5eLkMECxmCMKq2nCUGAns7srTVWGM5gtHTEQM2HsiqxS7WTqjf1UJVA1Taevq7VfZ2",
  "key30": "iKp1HCqMigK4yKR4qiWEjA6Hrhfb8gwXyRJewdm8QuUdgxsTZhXAr8xkXCyBhbc4GLjYY3yRi89PT1RKvaxHmC9",
  "key31": "2obrHeHUBg62PFDJCUqnQGZvb8M5ExnCLquEchUooWDkNWodbngBq8wDFfkatNgctwFNqLP1GNJq5x4Tzz2JV8YT",
  "key32": "29xKNttJCQvKjCjmn2A8nCaooaPfoHcyx3tTG6qBZZ2USi3VS9homTUf5rm58UeDMBT1ZSXahzrEBLHDbptui5MZ",
  "key33": "23s8JHbHDDiTbeLFbzb9TyNgPruBVZadAHh1tPisgs9xYxqEHBRUX3Q5KJj857rBzgz8aDY9Lf1spDoe3BttQzwi",
  "key34": "5wcYxkDj5Ug5XoBvB1XhQTC3yQ17ZR7btkEe1HGXfsKfzfhmspP9qa7PGR6Vi5h5aEgHogWGCz6ZwJxEki4qKaDA",
  "key35": "5rh5jq5Nod9AUrMcHPfmYPPpgEC5yZAJ6LJ5DMUwH8igatg9PoWYu1ZRoFHyMaPCLuQpusE4zk76Q4ZRrXjodPNL",
  "key36": "4VtphFSL24xBf8ZHGSuTokpgXHdRD4yfoYdoBs92RaZcKXfLJbPJxgXAJRnu1KQVrd4NCKCmwkCDPAKgeL4goran",
  "key37": "5cD24ZcyyHqeAki9r5s3wwSTW1Bp4NeEeSeRj9G4YN2VRBzvnxEfAi5JqkQPQCyFPJfvcF6LJMizbB3n8Fyc6tsg",
  "key38": "3VkJ2GKUM9TsLybHn984PKvyhATkFkinx25HD8PNahnziSMsj1omdpXbEWLiYaPEDTRxbVcwiQyPsAWZBxmyKQft",
  "key39": "3dcX6dJFWVDCPQQifmSyo6UFG5sAxyZF6dRJD9Jsc5fjSLw4D5uMUrNuz6otmrfYKcxmavLgeNGLGXiPxSp6pQFS",
  "key40": "pacbeE2C9XMDRTMtvD8iYCYLHBKan7qZsHPWTLzsVvRN8Hqy8xP357TbFdurkLSUoPDnHuAkWvij7fXQW41VESB",
  "key41": "2t3oy7ujXzNbpRykAyJwhKT4bXZWNfuQu48z5TsJCQEoShuvKqpP2Fs8VQdsABf96XvGtpZF3TLV4Um7E4Ef9AmP",
  "key42": "2Zia69MoPurFAS95auUN7XUwHzgQS1GdSkcrLYQkb1MFT1mkg64fXE54TNT7taqZBxcuZk2UihPXAamYDtumwDN4"
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
