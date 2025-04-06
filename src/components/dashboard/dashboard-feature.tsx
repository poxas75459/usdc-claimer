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
    "59yx5njJbXToDANiqDmevbVst76u2aB5x9dum7YGxFgvcgynXjHbWWa8EmH2LfQhJJ9eSW3mNL1bMW1C9y55Mv3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wnDGA7CMkzHhKcSAmaV8VRWBJwTv9JsvJT5TZJpNZBMq5kMps5Rf86NKQdceE51NTHSYW6N1aSMzCwNh7TwfUb5",
  "key1": "EBGyg92ryYwyWRCC6iSjzDZJu8GSsprPspdEbkpAQVRQB17YQb9NfMQd9GWNtbDPD2SnMdNwwnrdDe8pxKJqQht",
  "key2": "2tRDRUy1t8swLwo24eErrVG7DsLrNLE3xWcKxPQDHGdcJf1j7M2KLvbZ3fSH371mHTcThA9iyBa3MdXhrJWswoAj",
  "key3": "5QkrtmC8yma9268sDCgUSZ45VakQZaQLvemruyvdaxag6wN7FkGizzCSP1BXqVpewgKE2iMH9zrTnVMHi9uzX8X6",
  "key4": "3DQKrPrnRckzLadFuKqJetRJ5jt5CBvUPYyH8Jg5dyvfF8FgzDaPBSihCBAiipTUSq6tA8V4hSxouGu8xYi1eT7H",
  "key5": "5WQDaGRrYbcp75eaxQZPbmXyxJ6xTTGfiytSoTbZZYK3zMKud1mRkjbEX1cweLi2yXuE7KuXCcAPrNBQkaSgwZQP",
  "key6": "4qmzqgatvgTMZdMskuxbRJP8wkDHoW8zJME2pBGigMRUMqLkA4PTwJHW3S8iyFb9srYQ1SpZwxSd2TS32pQ7jCy",
  "key7": "2sgXwb6qapSTwmaHGTnhCzHzEsyvuZ1r5kuiYjiXT8HEYj1d7zeBcg2QKVwVQLZTGD7anN3g5nf1SZYe7X2RRnjo",
  "key8": "uwWrfnnPBxUqhtefUhMh6asPQr27kwY8uup3cYU1xMM4bj7gSdZpEpUJiKX5PyAByQRV2SkUUa8DH5h9dgHxVom",
  "key9": "3EHsqxDovYjJ747dRN7U9vrB2H41DXjW7yufdA3WYqu9G62cgjbsHSmBF4HkoKHA55fUwCYu6PU8Y2bSZrVgxzx8",
  "key10": "TTk2Tbv9nfr6M4qqVs6QMj9y7jjTQZkwzYohYtQaNuRCgUCrWL85nPg6y9cf3F8WfpWCKsWLRSbtGK6N6d42xrW",
  "key11": "3eLm4DuKSUKp5vouHGi2WuMNj9L5K1ayqpCDVt4cwr1LDB6zAJFrBY6sa6KQmhQ4GgRWW2tvQasUP8pkeRxTBw9B",
  "key12": "5VUEcbSyW9P9J6dQF2uYePuuzwffD4TSCz3TidVNWwzDnLsnS9zUfooCzFHPgq6ti7Xb16fpJyErCDz1544xByUT",
  "key13": "4QGeEn3oRFyoshTL1GgHi5y4i92iwZZTHCctE6aBbXd5AhC5Zexapj2TTyLCo9GXcuCCk6GmxZz6e5LtuGEQ7Qy3",
  "key14": "5R36fXJ5ER1HtWhyZyJb5noguMJVkpVzRv588PuvFi3VBZf9eukiKhxVDZqpaZiHRFF2zdfik3SydZbu2zT19hrT",
  "key15": "5UXRMQ694KbASx9U3FEjBjwM47cf3w2ndCRC2dZMguVPeXtcLL5V93mJkD62EGzi1ivw3LzDrcZ4iEnj6c8SjZUK",
  "key16": "3rde9TT22BEYiGoXxFC8uiahB7Ckxt3Hs9BmosWnwXR55ojNdgMFXgFEwNjLAW9iUE1zw4YY63FHAdt4M4EhUj1t",
  "key17": "mqCiYHJWfES7ariYavGxhLecRZkLXknjCtKMYS32uCGyYMiEMsTK5VCoRsmCqextr1d9HkMUnpfSaDEz1yA8Xvn",
  "key18": "4BXuty3eNnyq1sBtJ8W86fiY8Qrp6my6th3jdixuxHmp3CxpomYi2czfYBDhzm3uCnJ5Zg2BHh7Pv4Xy1NrxeuK6",
  "key19": "NTaWuZqCY4s71tLe2k8XRrnsD6FUbreavLXcq3CJMws5Ew3PE5og8Hr6dJVLXYRqFE1zQGatqn3LANe1R9ySC8R",
  "key20": "3MqNEW6oNS5dPQt8UrH4rFDFE1WfJ6hVQXjTnbAGro9SrD7VsCWSwNBZ2xofdDp55c6ah4NSjFasgU9TYYWavKXp",
  "key21": "5WDiLnDEEyJqcF2pERUkm9VviZkGjYFSt6ajb9qjCcz8B5HbdpNy9MddakVxTCQzJafMdiAAMm8fCpHY6yeFKBZC",
  "key22": "2x8iFhMpSdZBtVbButsbVkUhndd6uDVaKxR3G2ThCxX4bmogW9TYQaUWSkkEiQJvTBF11QapbRPo8tvrT5TcRYqx",
  "key23": "4R1vJgNvfWjaYbcDyfK58F2ssCwAtb8KFxdSajZdssutCZniN6WRevMnHeWiGe9wyvFWdbefNpNKYVSrcLxbWkrp",
  "key24": "Q1tnHd1hTkXfmV2huSA2berHxp2tvUhFs9qUUMXk8h82rzhbYiXo3nnDk6poNPk5vEcP1fWFLrWU1Jzs53gKuP2",
  "key25": "4e31HdUVGx6PJ1qG23nBCLvYQqZY3dbugFDTia1KjaSKPVb7aYzUBLscQGnCEoKcELa6XARXcidzTxUU8StGtMpe",
  "key26": "2jB7fEKU5S6FX71rPLgYi7ve9esMTrRYbdap6zXwASukGFhLWwux2w4tpCtvSwzos62UwCFCkon6Xtq2BM8c1GQm",
  "key27": "5PyaxHAgD8rK44m2CBrG1t2P7UhFStrwDEffJY8KMs8xxfY4hn2Nu7bjgVTYumqKZURK3e2mCf7eiXfZcc3z9kLY"
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
