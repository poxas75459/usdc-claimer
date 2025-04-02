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
    "4zs4Q16rMbTpzZWz7crYWA6j1N5eV36bXDfWSjZ6KUiE5RyY5Et4gDCxxam9yduKAodsFMTc81nboCSUbgPEBfPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPBu6Nz8xUU16mMD2QH2zJwt2iKn5VaFjd8vE2TUQ49W4VJj4ZJjofjmczkJTTBuBeDtQDxj7k388WX4gRiSZvc",
  "key1": "YLK5V2FCvwJ34H8mbFALcJ8bwxLRh3HwEDXXjfu7j15y5BWtvTt1qP7hfBpWBg4iySVJJ84WiQMRLdUxWRchxzQ",
  "key2": "4ukGtKvhoH4CUvW1LXEbWRBcuBoG6snqCANH52La2CfF59wjfNbZ3Ac6CNmtzeNKupnXGLs7symMveYcfDxyuc84",
  "key3": "5F4GJnsNGy3KXmsRDWeogLfA89foiV6z42N6LQevUmXvaHx6Dtghh11nYQBnwpiUowXfuFpCepHkhmEFvSZtKgjt",
  "key4": "2JWHMs797CwcDjHXvA1GomT649XF5t65ZkpaMkE9sN4FZa671SDgPr4uDb4GKgC448ssx6gyLfCwYQYhq3TMen6K",
  "key5": "5XdJvdiJYG94diQ2TYHeyLgypK7Rw7aaKooGKDju1YJBWwV2G7dapxqveGnNKPawqwcMCsL1iHGTfajFpUkJmNv1",
  "key6": "CbKpEu277YNW9DzCc1b2kTSmQfSequhsMRUjfnbkRc4kSemkSkzhkPbjXodKYMbytCCXBX7BDHNLskmqajKZNB3",
  "key7": "4agQ5MjU4jPJjKqVP9zcBgVP5MCKd2Vcq44UxqfqTJQGArRwhRLmMw3ghEUcCK8kv3o1wWicV2NrGGzspcpuKA73",
  "key8": "5Uwy52wLLm5YHAS8BzyavwMHaekDtjA7t74ScrVpsN634ufPitNoQ6upfCwGUuMiRyrGvbovXXmjabegrBNKkmqj",
  "key9": "5MqEtF8DB3jgPRYobwSppFrsRZphj5GXAtqZoNdrJuJxuXmtsqY71cYbr2shg4Jc6YZo7XHg2Nu5XaKtaYWK3URr",
  "key10": "4kHA4J6LFMXhn2fYDJSanSNkLnyC34yjL1EjNhJ6n3L3iZvWz5DdsNGWk5EdsdAyFj9gWfQoVgeTGN4FQAZwuD4H",
  "key11": "5kmd1Ketmv5i9uqprpixXs4XZo7J77hX9iYQABxWcnpUFVvjqjKJBQHPUECc7kMn8CJJotrqoVBqWif4fk6Qbd7G",
  "key12": "2vUaRmsW7rHx4cVBFuc9tckqRCMSTNYjpypWy4axKgufDnxLP8ve8MXYjd7X5BvxhNKjTGjCeXTBNceYjnV6wd1x",
  "key13": "2vb3CM4a19TWtQQ29BDXi3GTeVve6GmFNcHJaKQbRiqeWKGkeTvnprwRj9cf5JPR2gUE68E5ETT3QSo63XC3wQpr",
  "key14": "ZSTtVWUSqfQhiKr5jcdiTjP9Vv2sW2PuzAbABNuBYik827WCYS5RGBN9oJYYQPXaaPTH8DfbCooFWHkCKJBWPEo",
  "key15": "2iYCbzmHYGUeZmKL2mbrNNcuyV5dcpaXEJbaMChqzfU5NDvAkcQAEP2UT3sovJAtBoQQEat5T7DsrmZAF8ZHxXdQ",
  "key16": "5AEuHUe3uiXQJuoVDR2NwAUVpCWnfJomjLkQZYzkKkrqheB1tdFjF3wMwCEjBJx9vtWF2ZGJNfJTDwX7EhjC2xFA",
  "key17": "4N2iUM4n37xhDLkKMMcxu5GHeEDLE9vV9y3KqU7KAycUHBCv4B1JMnPgenA2mHSizVBRDMSqCdGVsHYWToYj61jf",
  "key18": "56eqtDSLL84W3bLfd3VFkVQLb62UYxZMA3huz1FPK6me6Uref7oWzCWa3ShHA3WrRPbX5tMu2krw1gPEsxMf5Xbz",
  "key19": "3P2oUMvHeX2S2ekeSqPESVZP2dTQnfHHWKkGKCibo2Jn3PX4c5sjFfaQSs3HWaDSHRFvvwtWM486V59iMSVuG6Db",
  "key20": "27Mx37GBA2dsY98rdk2vZj6VzgYfzMtgBqA5t1oK4qsjVMywPjma7UAQnwGhVZRchPFWJ4r31TsDN535mrDQHZoY",
  "key21": "hDbpxmUF2UCZ7thMuVmHfaBPnpfsY4VFV9KUE3WFfqibQUi5LeCM8pnYd5osnmnjfUeh7PNdTiKZXzRiGStGP7c",
  "key22": "RfKCg7RK5Nf3vP4PVKGeRGPsbH85bPknjWqmc11AwuNs2cQQBn7A6TDCKVGyXCFFEaBPDXPDu66LsEvq38APu4t",
  "key23": "3q8UTkACNga15JxuxrQRHzZn1y9pA4pfRnHkWQFA1quVKxCW9jhrqjDYPrjVKXmsMLmQmnx1j39fetV9FFuoSQt5",
  "key24": "4BX1iGmA9EZ5jw9BJNK8fPuRr9kvSQoUtawoY9gSCt3xtbrjbPEd5DMSzethyRArkiriVdTstKPikgt7rzfSTPMw",
  "key25": "vb9HgZNA5375H3SUiAr6WwWYdNzUtaBfz345BgRTtHphXeGKAJSCrxcBpHVeoSJWdoojSjqVNkf7q2nzezvFpnD",
  "key26": "9VRV3dezWEAHin9eVq8Ehg8yuEYU4x1UrxRDPK5p8KPpjk1v8w5rYvYWisNJqderHM5GdngdN1tvrBfPF2hqXQR",
  "key27": "5MbUiXbgzFRdXFAdcuZYyA8JMp8Aa5MbACzw81cfeRe8FmsGQGwFhDRFmGMMH57wZTq8pwqnF2yk8R64rRt8cEj3"
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
