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
    "zTjUJ6Mw2RYSyUeJD6NG2TWr3qL7zjehQKRTczWU8KS68gAGbXvogcKEvrgPhm4b5CoEd8NoDbu3cnTik6iXJUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGDpNujk7XxNS3wj8mE4pqC5ao1Tt5XDMvWZmjbB8ntdxuxSoS9YzJoPyN8eYBVHXVbfUheASokmtQDFGHHAeDt",
  "key1": "2WVm62VX5gvYLsYakbDm4f1pW2uGeh8yAiKgGZHXXRsiPUtXy7iSTwLkrtFVuRRioY7Do5ZXwUvE94rVfTtUWTnj",
  "key2": "5Hvp1rdJVVxzM6HdKswhjX81ZfecgZa9zCdBWBtMBjDffy2orZqN2JCPCobAPt1x68SAQzrDn27TcHHcjSaT4h5a",
  "key3": "5KQkokCTLrz9SLLtFKu5h3858cmyVApjCPsoRK7omsn1zKS1bCDs7kpFmJcYtYd3oox52ekgWkWezgH5xmf351uK",
  "key4": "2292VoUmxWA3xKHVHTpPnZLmghjckdDPBQeWB6yJ2iVEVrK8vBWmE3Pe1u6LbZxHU5Xi6cTgFWsiu1Lt5UzFP3tf",
  "key5": "3U99A8J4USL1A5GDJQDubTbJdKTN6ntDj6iw55KfTLAmi1wFqKpF1iiDAgiHPyybWGiBYGNDGE1hu5zeBhrYHXMU",
  "key6": "2xEX9acK8kE1BAz3StSDN6V885Q758JMaCZRzQwHzp2rnk7dhGPRU43o17S3Mn1FmvhP2BK3R9CT1eACYmiZh1hp",
  "key7": "SHZkJDNk5SjBTy5EyvvwLCybWowLvh3RJPFASTNreJxrshxSoza6gunaXTFKx9V6diP2EghzBmoFC8TkQ7TiMD5",
  "key8": "3jSCXZXkjR1GZ9YgnK3hfNpWPnNLGKJKJ5RaiHe3dLMjs2TAtEokgvPEK29QLm9atvN1JXF1xxwV1WaPDjkeq5wq",
  "key9": "5nEv4DGom4Pef51hf7m7DCNK2TxaHsq8cDwHLgbPTU7wYNEsTkMZuuzzjLxprR6snKBKYdgi2RYdGGiy3T1afX47",
  "key10": "2eLSViwkQ1crUpwBAz5hdmFec5jNddFWNw5q5anCSahu8gwUrVFBGnXtJxPuXKXioJL3321fk8mkPea5qVTn9N9Y",
  "key11": "D7wiHagpXqAboxEewnUXzGpwink1NmciKP147G8RWveHNRsm7UjTcqXXd7JZzV6hNfkPdokFKPpKBQQzMxfDYG8",
  "key12": "3DmEsP15FYyb5KUAnGRZo34rkkV1kufns2BLkbyqnEyFHYgGYpAkqRQy8ekNqaRWg8C1sNerMsmhhX9ZE4gBBzQF",
  "key13": "cY4qZ4KvGW7bSgbWe8vmr6dvDesoBSFc4jMTDRa4P8PJHdePQUC98qiFQ9ikM8CZQtkWtu4ksPsRAnYrHYidwHe",
  "key14": "4TjJSswYyGiaFbJuQnx9y1heUkJiCJNiPuLcjtCrYkBtGSTMBUF5anvdyVRos4UxB53grY9StZvAdyCUraBxksZE",
  "key15": "3Dt1TqQ1v11ZVP6ctzYx8jH7c13pLQ6G8FE8d6xnqqEcvqiJh6RYg4XJSHdLcZnjkGhrjkqvR2Tr9P1fREkzNG1w",
  "key16": "WVgD7SqGeG43yYNzrwJaU6FX3a7fAYmv5WjMWLq5MuqsLTH6Kjr4XKbD3xCyYHuGDqAaCHJ62uxrP5N5ddUtnYo",
  "key17": "2jcFDYyjoCKkQkeLYMKomv82ozLCApXFDQsJevLngCCRdD7rc9GyEybiH69ePJFw3rYi5mKNptZNHwyaydvSK5oX",
  "key18": "31QMAficriBKgeysq5PAStN3vEZsGT8SEkj1DACmUGciBGLCyntBvxeHCjPChtQey6xQwSaoMiK2QuHmvuM3x5xt",
  "key19": "gqbjVPdF3gC6GNQQYtdheKqYMUeu5uLdM21cxrRB5QnX5Gqb5nbg8d7U2tbZsxtVQKkfoMpTUYFpH2MoKd2BQzz",
  "key20": "2U8572tace66bi3sG7dvPoVUNh1BAp82BdFPVXqy9LCpbYhRtQxmJ25JjgRgijV5gMANqXu9HVo9yBsaAMhiovru",
  "key21": "37PoTTAYkHcoYJmYPkqNkivGqsRJCjJS5XWRhN9qJtjHxE8h1DZhH233JRVqUBkoMwvcmaf9JS1ngcGzgxFn5uC3",
  "key22": "4WswhLzGRusg2YsB6ptUtCYbfLFoCWjJYpirxZz4BB7jWjb6Wma7MsabJhhtpeb3LGwj5P8Lmxuxo9UuisryAttn",
  "key23": "5KeL3YpNRyJAd5egbxvmUUeRyRh3XwVKjpUD1QLNrv6LVo8s2Fo1Y9rGeeCQoegQZ34LytQiAPgqwwfonNWAnLXw",
  "key24": "4yU7DKV44L1GT9zYEeFgRp3RpLQUEvinLedFJxCMeeLjSCbRELPWqbzLNcW9S4rQXykRBYyF8FAN6wY9ecfcxCMK"
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
