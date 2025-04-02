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
    "y3ASdHSHcQAL7au762r3wmPbP7d1ntVBiJ3r5dEbiB8eKxr8vfFbaQAi6USY2e3utbUq43hXXBr7BZDRR7P71Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUKjkDUTzaEH4CqsTHyyAkRZyY7wC5TUh9qCtnMhb7zWgi9obcxvqasMswYTjsw8ANzcrXpYRFNZQsHXXKbD58h",
  "key1": "qBUT1J2cxvaLXuus9j97gJbtfoYLTXdrcAchHGZSmJtkuZWCbm2yPDRkxStDwmBgYMcrLkUVTWA5qzAmA9X7Stq",
  "key2": "4GuLduRjRn8a7UD5zQgAySsSeBBU5abfKK4QUr8tZoxEq74Aaq2sfXVHmFdG2cm6G1oWsQ5DFQphn6EHRiQwv92i",
  "key3": "yW8pib8QwD9NeThiUgV2hwEd7xwrB7qQQgG7wAkqWabZoLDuUvoYe1uWs3Wtm5ikRQh3QxmUNvLh3EockAagc9J",
  "key4": "2eMZACEhfbhcpSsEGeXWgPpRvZkNMKuNXCqxKCrCyS6KPwQY3UaCDWhtK2p8f8nJGD66TdYXZuAWTyrZGManD8Q3",
  "key5": "48u6oxmuxy6ekGK3vm3LfgPK2sZqJ8rHmDUymbJsJAbdi3ARtbdw1G6jYHSYungmP29Pq52qhF4273WF3CWh9vFG",
  "key6": "3KtCirVTGifarh4hfaGtJ3etLT9ESzXdGXL761TpAzAcEwUUPJjLPsD19dvjf8UX9AKS5S9xdz619bwMLwb2RHiy",
  "key7": "28a7e84J6SUcS3f1uJcAW3Hy29iefoKoDbiaSj6rdMQpucmEULTAHf1nRwKEJpfBAhUhq3oNU5L7Br3j7sENathY",
  "key8": "4avLhnUHq6qT2ZG3qixhLNwvT9ED9z76S4jhxiNVvV8fRJyNopHt616SidN5WfZyyaqQ9jtndKRp9eTCkMruSdV8",
  "key9": "GgkHoyiEwKh5uBZvigYRScdwwYfGjeiBbUL1ay6FtHGfwBqRcatdWt28QSLz1orvdmWdvgTPWUmdDoN6CKboQL6",
  "key10": "386aoiT42zXPNPzGABng7TUAcA1UURMnCm7UGrYk8rWrccy9TVm7y1Hknk3HvsyYAVt8N1XyUjuanNxz9pfSot3u",
  "key11": "5ALwWVJHKSd11X4ouJDmog8SsxAmtx6NrQUxm79tGhg9fi1v4389MZXJTVKjbLNNuVedUwBcy4Bb2ub8kBvJN9m9",
  "key12": "5YaZYKrP79sJeQAztm8vkBZTocq4WDXaCE1XEf8QPAKauME5x67w4yCthAYnMdhDX95YXeru3f5UfRwtr9CQ8pLK",
  "key13": "2etiPotUJhcKTATo1rgxXhE9gHuNh51irZH4qN5NhjuEKbRGSVstLvb4UFXCqR5ZqSgq3iwKgmZKz1THBzN7c8xw",
  "key14": "3PGbAPmjoY4j3Tz3vDFW7S7ygZqddAwk6MADYMDqgWkSjnvx4UAN4R4frjLJWdKffB7EqD2g1vEZMzbirWQ84YJA",
  "key15": "52zQw5Vh9m9a4FJBYoovv4LY4ZNbLWpPvTHm3DfSxxe34aQTWssVYL9difzNwg75q8AckfwAn7StQSPVBRMfYNRK",
  "key16": "5V2nkpCsMg8NUhPuKCA29kjiTLHbbYThfCKNSZ16guCojwyFhduCC2cY4NABPqQseSe8XCdhc3yXZVGZD6zvqyCE",
  "key17": "4YRuQ521DpWfvFeqsc7v5LcXjC8qTGJ1ZCioZZeTDNjnqucvEvkPxavjKBAP9CbUM1xk43aya1Y7Z7nQsmkdcJvb",
  "key18": "ZGCzrmJraYTMXi5eL7J9NVxBQpPWmiLkARTVUwZMr4ofx8jQnGRbXM2WFzBnARG1k2ubE6rhKPQzft5bRFdb5VL",
  "key19": "3bQphQrCuyyu9sXDnD1jTuHyrPwwfRoZbsBeTNBcLFjbmixmMsPC4PvWxy2K7ASyirQBRrL5yGQmJhZVYtWmfpH3",
  "key20": "2PqBGiVrPfKAauC5Wrte5PjJxEVgGvVQoR7KpWPq64ptBon4xtVmLuigYMrgmkkveucN8wFtsHK4bQPax4rFHPnh",
  "key21": "5nwbhHK8RLa8HnygLRo86x2oZZabUi8ihYaswnQbHp9bFynXubD6V5Fe1vpRS3a8ZTtcpduiDL194x1J8GMu2bjS",
  "key22": "ujpnrTF6f4Z7ftHTJUgpQxgG4QW3nQsLcM4r5w7mWvCmv8psJfZraCg1yaggXnoWntDp7njTe7rARXNH98CiTyc",
  "key23": "5vvQHz6A2Ht31AweLx2WmaCUe7xdK9JR4M6Y7spcgdkZoTwJf5gGFgQ2xu8Q6VXnQLJeATSpiQbSVDV4Rwg3ArMn",
  "key24": "jgaRMUM6c5DDKpXx9J9H1LG3DxrMPbQ9vZiVyK7D5BqahAY1wkGGNJ7RdbwkkJhEiqLEmNZrW9fyZ873jXvkQnh",
  "key25": "sJ3Udgpd147FfzZhb1zzWLiFWXgPjhbhf5qMD59aigdxDzwj9iAigm4p7LutJqUermcDsWx82bDbyrSPyJBrJtG",
  "key26": "2QF6NxAFpDfe7izkPrKZqXkr2ECv9SnN25W3eu1TZpsWKpBxL7pQ1iZ9mGkNDc8gxTQWPRRyhTpAoa4s8GTGeXAg",
  "key27": "2mom3HAW5eTkurxjKusdhXHpZgiLJuApExTTmX5mgfnWFwDEpUQpsHjRBBYFCxvTqpMToGAwED6qnm7MbAE8f5cU",
  "key28": "5KPvPUccY6JZpvex9u5wJboLXbtKDWgmb5md1agXZPa1mo48kv4QoykcRbsuytMQJmPzcLjhkNYMJDGmSnXKZEY8"
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
