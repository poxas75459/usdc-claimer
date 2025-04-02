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
    "Xq21YG4LML8ooSynG3fV4Xy7tt7VXb1g3RK4is9ogrXkktJ9SAJBeWG5T5DvjY8ZnxP4TXGTondPWSTtZcs8sG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYDZrxU35w1rRFyMihwqu184Q4bD5sdfZBjAe787JS6ho9c378QktadR3z1Bt4DToWWJC8SKAXiz16Hwd8RQGWq",
  "key1": "3ACa2piBY4pDQX6eh7hBio8QBmy3iNJzNaazk1bmu6Vi5KCmPv9sLyMRD1EZ13JuqG7k111wAFa8PXnwSRfiAmmK",
  "key2": "2P9bc5NdrMJWWMYvb6PcabFJtvWpnNMEWM7KgkSjWf9yLWarey7Yg7kLDXvSpZcuDgrsRHyM4UiY5Ub4G4RvQFz1",
  "key3": "5bEAvgVsazeuJQPfTfQQbLEDRbcBf5Ls8p6hZdBvNixVqFaa2gsvM45DW9gW8C8KrG6zdrws4f3s3ZFeLDsVkNdW",
  "key4": "59MPF2o3bBzxb1C7v36KJuVaKU1EDPbWGtA3wgBTUFC82Qh3U5zFJR93CywbFavXY8QBEmjDcU5ryf942Tj9mGF",
  "key5": "2vDwVk2qm26L5nCdMaUEZad9zkh6t7wo8Dxhy8Z4KD93H6kP2uRyGKbPJkAkkgEj3f7e7hkzdJFzWLk3vvF8UJHe",
  "key6": "MGYN2fZDdq6wXuvpiFv8WZKDUczV6RaNu2u9RsjhrNwnqByWpjDp5FkrgzrJbKbAUo47j5ibLXC84E3VDUTb73i",
  "key7": "2Tx2VzfKWTpi2Zuw2PwDzyHut7SxuzLEDHDFCoRKjGaJtMgbNfHUqCVaDGYykXzWVXPF7ednh2Deg7y6hzLSo873",
  "key8": "28iwffWFcYFHTjxAP6rHQyPm5oCFQaYtR2Qf7nodsqk2fafgbyPxYCt8L8rFVABofnAje3WuVRoD38Ppc3Y91R8a",
  "key9": "2hVRebkPNFpVCQqs7R3v7UMWdEyXmV7PzEBbARq6qhvyTKqhMSVgUeLDFHh4DEfV7MHXNx169LxgmoZWNxyH7Pv4",
  "key10": "4XUQgyVWR4MBXNRQC74C8PC8Wfg82afmq75bh1JDKAYrzHq3Xmt8jjAeUr2XNHxcsbL5uaRrKSCwTKzAvg3KV5Vv",
  "key11": "36U6vqwsD2RHCq6gjr6ZFTCE7yoPN5zHv2arncQxnmjy78XPMyaaji6sNMRpNz6oJVkd97iwT4eoioKSbd4yTt8i",
  "key12": "3QQjKrnoHKs9J97fWxHa7Be5sDuCZNH64RBr3AfjrVzxTiCxMCkYV98ofSLz7ibonUR2WamszzBNthCTnZRn2Qrv",
  "key13": "4E6F15c5E5PQpA2UP5gqPGcAXffhShoY2bMQTedd9igFbhLhtPMTCBzoih5NquSpRxZ6P55soSZrTmVKgthQp3gH",
  "key14": "5fgKRq4CVJ4BYyAMkPwt93VGJ4t7tjXFVtHG7skKMTgnfY4BkCRqscwStQgtzP6WR1DWKx4kYaGLYXGqUNhnJDj4",
  "key15": "666JhfgYtmYaWjuZswGMPP4hGrUGeqJvQVZv6cELvP1GbkbrzvxyM9oSiitZ2w7xEhyNajn3nKznKjYn8imNeNKm",
  "key16": "61VBBeHUJUNwwHj1QALHv1EWcQKF6T6tMppaYbrPZtshXsfPz6FbScfowCyawyNVG3dW8t7BK1SmiNsJxYFE6Vtz",
  "key17": "3uQoSUb1AjArLxhq8rb1DGE1TY9KwmVHzW2GD6AA6cFFCZFGwVYWZSAbVKXHCeYLFoEhDP7hgbrDyGg73AXVz3dk",
  "key18": "5KpLnDQXVBfTmFuyMxrA8P5x8FsUEuaWGhMWmiuVJUbE5jCHt6Xxia5eQF81xhRqmSaDDHqD4vMS75J9NE3YPHMV",
  "key19": "5LBzXiGtdzkWveFnEX3zxWFw87pV4EoJMjKSNEF2mNRqPRm1S7vb9HLgXiNThJtMQvzoZXYHLfeQDi5j5Rt3tQBJ",
  "key20": "2sDwmERTAAtAiTzX1svPRLSrnCT5FSDVEyHDmTR4HgbxoQdmjuN4xDTpJdqp3cWfVz9x1GwgxZV2edK4Y6TZnuaf",
  "key21": "2t3P4fcdVGUYYosmmLtREYwW8zPazBeZ4s6icKjA4HK5j2pPM1cVjqMDJxZD51EAHtBvjU7MgSguAoF5LVNUTrvw",
  "key22": "5bHFZhkx443MZy9rY3ytFiP3yVn3NWp6yRTcKKpHztraspnwx4HnsqP8d4DtTB9gmdbohsBrS2b2Nu7Uwi1JVZKv",
  "key23": "3LMnPeCZCtVo1cn6FA9jQGSeG4gCRBkbhU3Dk6a7d9viLTKFjUZyGd8jyGHzxAc6G3NhxvcW9BgdvV2y3hgKRBji",
  "key24": "4LnTkvzVwb6ndmNqCAGyEVtaZyY455WnMudvhuyX34mJbi7XMe47CtKvqmK7Q84uAMszxqZVc1FdRy2cA2xBiTB1",
  "key25": "DaukWgdNri6F9mD2rmRhFaXSkSwuQrDpgs7jdca4cYUiCgWU5GFnfNNaSvuWWDpqwG4e1TiiRtW9cRmr6JwFfwU",
  "key26": "3MgiJ52mLENeKqHTFAZeghkBzs8fJnd5HT12h4trCaSWXaFiP564R8eUqgDnX7qbFkEhsjPqjZPUrhP2M3jyzt2F",
  "key27": "Bfjeov4R3riRzH1SR16fhisKjdHEfGaZZuGc7wZZbHP4JnHt7hCKML3NAVotFavcLQhu3eSr68W7qsws2xBkeok",
  "key28": "DH5Q3mNDY5CrhLPaFaYN4afgmwKtMAbamviuWDGopECYZoq3B47UCpML7Mck9RsPPj6fNPCCHJRjWwu5fv6zCxN",
  "key29": "3dD638f2KDqrafarWCu4RuTH4tyLFpgrZLQ3Xd155d7dQzbhYyvYzo5WpLPPR3vaLsUTJs9UxrTpvGzh3VQReGL2",
  "key30": "4S8LEueT36qiAbmDd24ZMNnpmx2wNjZApiAoEeMDtxssWvCJMY7iuWa7WQXgoWuXPJSbTQYzTxaM9B1KD1DnMyT",
  "key31": "4gcE1NDscqKfXZ2cJ3K2CRXVGy4TXQ68N3Jq6XEKAfUru7kLmehVEsEzXq31EVgg61AjnLSetkGN1o9HYryCBVvR"
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
