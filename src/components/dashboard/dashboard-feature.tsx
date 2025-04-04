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
    "3P2whP3TNwj7YRhGyUCriYCNPj7C4eN9zFBqB6QPZkKXErTSBy6cFjjwfudcWRyo9ttuK7F7RuDpx91k2QTgY4b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gx38HfsDPmMEEdtfxiiAAc8wKTzLGJ2dUWJNkMccANKxxakCGAWhFrWbLrefzLWdQ39fJ1XBMPdkejVbNM7wVfi",
  "key1": "2mw9gMef3U3cYfN4FqDXxkW74LQEcJK8rCrAgtXwPVKYRXBb6wtb5nSy9pWKYKyQds5fnDEsMsCpizHFyW4X64M7",
  "key2": "2pC9vF6apEP5Y1FQgL2ytX348mshXNe25MYLBzizjtgRZHuqjvMSq4AhhFT6emhgUVGp7XLYgnhmjAW3gHZ476Um",
  "key3": "5B8YEXdpt2sr2XM2S7a8MyhZ8Wm1vzQym1C6FEWDbZNphw5r8os8EJ5fFLEzb8gmE6HCvZP1LXTGq3gCxwmoDGiV",
  "key4": "ugDRCmc6BxfoCuFr2BaSmLi8bX8DU9iW1k2xGYVF4ADU51fbyPN99Xgen82fAb6MAYdtxXnTcxnbJsVsgjSjnet",
  "key5": "4v73R1eLWNr3ciUCv1GraLDeqNTvzeNp3965a1Nirq524N5fM9VZ57HdX9zDB89EKebz42Voq9skN4HvQxiLDT4U",
  "key6": "M11a15keTrQkkJkavw3GjTj5trRBrKmLMJv4f5po1pQREtcNt6oXoKWA1wNiFhfCAonEVN8hhBAWtzo95NcmQo4",
  "key7": "4ZqvE8Q9FpSZknwPmXBop66HR1dvtFtCEci3jjmjMpPLtrrAW7htBwjiosiiDH7cEW2CnJ7WoAEhieE11xahNd6q",
  "key8": "55hpUf7NAtvzBzweTsS1QMeiDAPBqSn7f1J784A1MueVXbvnMtjLro6M53h8FJcM9wKJHzEHm67FTMfooF7pw7cy",
  "key9": "46NYMD3qpK5gqQrEbTYXBv36eFFtSSVaPxSawtrrqqCTn6HGqr8xxH6CvCmcG3a46TbqcnQyMuT2pka77c5XZo1e",
  "key10": "4TZ3fL25hTXfdqDjbwGhFWiFRNiVeofuVAXjYBzEV4NqL9X7TPqE9KaamsLcXuSDk8nmFNYJ6ot6NGbt1D4RgpdR",
  "key11": "3FpxyfT56R5pD39Vxj5itcWTZKCUPea5FtyFY3VRBEGV645qVdxu9Ccsr68oUHbnDf9Naq1NE2K7tpFrkhNYpUHC",
  "key12": "xZL4D4rNdUHCELdubiSN6gsaFN3df88Wd5kVSjaUK2bb82cY2iP7sZn2v5z17NMHZ41isjL2kUMu9mvsZQiGo43",
  "key13": "5HkbKCZDhykPcKskAitq8DncPbxF7ZGwEuoNM96MhjWc12pHzGwe9rodcaMbshovjGr6h1Quwj8pdLjYDmkHsyHX",
  "key14": "4EeDvVLZ8JHcmJ1zRXgPtRCbtnMdMGkjmsjsYFNEN3UvshcpsnXArhsNBAXNYJhZL5S9jxhCSe5GY2vcNqeiHF6u",
  "key15": "2o736Lqwiw2fh9M17q3T6F6W3JY6xnSiFERX8b8nHP4ZUD2W3rsJHUJey8wXBYK8DJerYF5dPoAVmf8YCx8m5to",
  "key16": "ejink1YhBpRxLyNpKdXW4LjkWd3CriA4eWQtJGAxDnyJn7S1VVtrdAz9e4zfuRxQj4CtNDB473kY8BEN5NQqQy6",
  "key17": "41Jtav6KngAeBPhD8Mks37VbMCwUuPtw8638nwNiauKBRbC5LCbGT1XDUQFD73eZZKkcgwndBVHzmwX4mEtJedWo",
  "key18": "2CGbNWt6ieemYEycqAMW7mR69yqJyCMqg4MVx1bRs1qnV3BD6zdDuoMEHtkewea8VhXYmt3YrjUqRz3oyK7vhKmw",
  "key19": "4RN1ZPSNrb5f91dcTMURNEJFnJQCLGL4P7BYDAuNnNzqZeH8DnjdjuuMxwfJnqjSqjSYDjbhjKBPJBhppkPrqyu4",
  "key20": "2qFhZakrtnuymEBCXyseQsv6w2pacopCBzjy7i4DT8KCkJfYd9EiZFhPWLYCNtn6Vv64zEaWn7ki2wmFzYZsHqBq",
  "key21": "g8JrPS9BGrZUcydUeLBqoXZYW4mA7UfH5twDccctz35BrTftMMfTmoyMBEpBofdJm9fZU6C9ueFntX6VUnVb9PX",
  "key22": "3Fe5iBnHs9UigGBdNLDB8ts4ZNSDsA2SZFK3iQkXgWhLUksnJzPUbfuRfd3Sdp7t9aE1ogxNZ3RGUfMQQne6CYYE",
  "key23": "MGPMnbicUdDymSNudN3gSNiaoRErbfApwfuS8wcra9bmKpZg31e8pszV3kS7DDs3XHn3LF8wyuyCXPsEsJVXRJo",
  "key24": "2HcZ9WrHvP9nTHwugSaKtt18pZALTfwEwuk2tevxLZd4ti8eWLUNRN1LGDbAfWcyWog74WNiU4CqqaZyw8E93SxU",
  "key25": "2nghDNTke1VC8vtsfAjCJgSjXveqwcr4PPG7SEAAxegTNeVuwNM6gYSb4FTYCcE8mURMNLzn8r1BwbN3iaHjNE1X",
  "key26": "2z8wkbGLfivJpvbAuxBH4Sh7xtycRmU5ZDV1GDRs8vp7cgTf1wUpnjEWzVWHwUViSNYcDEKojPo1GWg7DUPuEVhE",
  "key27": "3bt26TUj58D38Bs1CxnWNsnWpGqhcRVsbWbh6QxMjW1QNivKq9QTBYMtVrgpGsu3JGc5JwDQpGHkGRXg7YRpApff",
  "key28": "3kSeYMW1pveHsvzmsuqj4ZnSxBDvFKcJH4KwTMLfpN9oVJD4qdp2Kbv9ywoC966hxmBcEH55rSNmwSgQqUsfVcmK",
  "key29": "5S5PuJmtkmEygqiLwBuF5yN5id3BQNAxPGwzfSTXfmnAbTM3pUYS78gfETBuNSHGzdp9q7WHAE9LYxFoLsiWsnE8",
  "key30": "5RY2YXfaysH9e1fzLrUNm5Sev8BsN3eTF6ed9pdZrfjS1mXifFgcRo4p7FfMiVYC1LCq3J7RUWAQ5AASEwu2dpxw",
  "key31": "2pWBmUAPAeS6jCHjHbsHE2kqgkGKujcWru7rKpDWWqhT2SGyjzc8xHfi7pRrKMxghS2CsJc6YvAaNuY6jbWMVEZp",
  "key32": "2WJePJ5ReiuVZDJoAY6TT3wjXnMm4jBNXswZd8vjdNbnbVuCmSNBLsxv1esiDFSu3wmyX8ej4yED9Pz2x6vfKVyq",
  "key33": "41g9znfLVed56KhLpuNurvGsGPmBe8U6Mowsr4Gr2TZTMXNVs4UkJfXVZ9fEKVpf6BwJU37D8XyBFQV15CbXVJQc",
  "key34": "514ywqkr2f1Vu5riVkfq9uaiVzDMASsti7mEHYBRWZzavMChHm8UzcbyEVGYQ9Hq8wmjSvkXHpnP3mvKu2uxFb5y",
  "key35": "2YvAeZiFygAteDfY3Z6u39ktS4G4MnoyUKSYkdnhfJqU8uSAP5trJtBa4eikzocFVSdhSxrCFcSmu6ftukUpegc2"
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
