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
    "4Ne9XZ9g3LKJ2bmCmZthQTkKXeSMByFkSimF28WjK4hAvqkVg8erfBr83FEfHepXtBXfbW495G3DFMdzDLcPdjPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EJwt3DDsFZXmYqZLYaSmxW2riGxqCtpGo6JJw9QJwUE32iemNAXX11Gdyrb9j9kSYExWoRAB4Jg7okqi9DKaVTy",
  "key1": "3Aroo3GS4x1FufxFBV2J2L4qTbdhqdids8TUKMfjxpA9qPpCB5U4PQ23AaNXrb6xbEXbEhjDxtcGy8apwLNRvRVP",
  "key2": "2BV7ehAvEuybfAT1USJ8Gqz8JukaNiwUmJiM5hCFWcomDwpcgP2kNwWkNEPuQWp4JmAQSA9hzAmEeWSQ4SRykRbd",
  "key3": "3bXEXgnRzVkx7o8U9aVhiVgGHZWMZpS3MTQ5hvCfHhzTasiaGGDAHZqm9fGStJUn7dUH8EHP7ChB7Y7GQeVh8g59",
  "key4": "3BaRNRG8ErYsosKdXcwo6nH6K9LzzeYc45q4WF753zZojSTLPHPUkqXPzmZyGR2Lq1tra894ZTw5CoxV68HYpNHU",
  "key5": "3WzVHHJtRU5VZm24L31ZGKVt69c1o9Xi42gGqvPbapJ9u64V9Z3gv6pKrX5AKEiEqK65GUUgb5eiGobAv7EzcRop",
  "key6": "YEKAoBwtTae7xxKNHnDKoucnFumuDVdjoxmNW6zAcsT9NaFmnsckxHA8HEA3C7Tq8ip3csNGpWQKvtiYQ235DDw",
  "key7": "4HPNR46Gs8P7xEXbneLmQofQ2AAzhLPspUpAQ9EiZNQRyKrVMj83uwdDqsfE8nJ2zn3kFza5oB1jBUvNTkJ5Xgh",
  "key8": "2cHQaNfW1CAFJqFmLkT7huwTVAn68XgL1k7PH1pcGd3Rfb3ZArmrTccxnjnZaqhHhicmHa56ocRmvFW9hYNaPkbu",
  "key9": "5mmDhYLw2Cr6WFbwbv1WnZYXq5iVaR4HXKQkHoN9viquJffzfVVQn7titoWb6peaALViktZAsRzZ3DnnfLPLTPNA",
  "key10": "2GUBXYdz2jK4p5SKV1F2RQe5ySv5qAxYGPd1PV9wt7uNPe3s1qc1Qgco5Vxd9RrkRAQESLVoCsLitZgUDSCwmfCG",
  "key11": "5UiBJChbwLbBz7hn9SUi3mGhpVCoS1FzWbg1agiDRGDxKzBEYDFRDPbdNgsSAAwi4TcUaZV1AKrE9fijaBga1K77",
  "key12": "GzbUmonFwJYXfX73H7L6ZdEz5LSgxxM7J2CZbJEfQvxbz2GJMwE3neovJepr1p9iTHHSLCX1bPTkQuBWy9VsQKR",
  "key13": "2zqLVLNh5kNdMjoWo3oxDGejhMrugx4wCdoY64o48BKegdweTQyeBSebRpqVSWFTSzVFeJByajpgRjChhyWPedCZ",
  "key14": "2aPuFz3LfgticwWbmB8Ho8SHs8bcNv2K5yzSbi4kDdVcb1QpAfCPnfBM1uUTxPCLw2r7eRm5P2rb3tSLm6scLn5Z",
  "key15": "2wCdEdyHDvB93Q8Bk4o8XmJGn2Tw5dDVFoo3icRZ17pqcmjJqBb88EJEpbkyYr3ydF2SW3bG8qSiUsucF1iLfm6t",
  "key16": "3zzWuBcjNMAPiyfGF1idJq2KMVHv7mtWRqNYufHGoWDVeF8U2NG6UmMqcVfstrJ1zRCCSkW4Znx5dX2wcBMSUmNm",
  "key17": "kij1qV31qEFfALjsXqqdDXMCCoBPDp4jDyxkqkdzSEkFYSPFDNfgmjQGdCkzswCh7mRDBBDNGWZ5Tytmc7wbriZ",
  "key18": "NLnA7zaV5Qp2akuT28SHbFobwJvBHV4cTUDXuwoxcG6JDa753xkDR1iiu2jUCQZLPycSn2z6gWftkLQcbtCQCwi",
  "key19": "DUePUtyxA37C1Wa3oxY321gWjvvT8DDefBK6yjRhoxeLoFYFyRRHGTL7eWj4NwFSZMBcAZEvL2xo9Yq661qYZjk",
  "key20": "3qPW1rjsbULr5mWxZFt4qVxYXfDR3Tbbt6RrXmsQC6u1zwaRJe7VfbZ5m84C4BsBM9m6oyurzmyXzVGUURWesPVb",
  "key21": "2ABoWtjAhqxEZM2988yQ5g5zdTQ3jSHZsPr7r8iXDxo9r4DLWYGLhqDeJDivDy9ZeAqZo1Ue7vnn4NeVQYWqhfP4",
  "key22": "649oNU1S1cLYMWEeNWQQ6zGBxtdKABArVai3jrH1GTPdhynERfjV4R9PvBXaZLkanzWHdbgHNZNvcSLkG3ysKrU",
  "key23": "34qW58XgC9g4bkgh3oddW1dKyqnhAoUAS6ns5DoTDUm42ZUPpvedxAowXZDDgKG4QNBTMqDwsFzbEPnpPrEFLCg8",
  "key24": "2NTbq6sD6n6fNHzhkCQ8whEp9CYcV9vy2RJ2e9e51gBTmYjx1Qz767c7zP389S3BwQQiN2gzWzgzPD3YBNRqssk3",
  "key25": "gicK4wgeuJmmpVvuAzjMGTQkooTNBzs6gyse8ze7A3zEpwJPThfB8NuNjp489jh9cgpRWZ4Lv9sDDSEyopZybsD",
  "key26": "4vx1a6dDrqXKU4UKcLxALtTPa6aWZeHkHyKEqWgMmeJmHeA8LnYR4tZdKn3GweGNFspX6ZYVt3fWb9A6rkMRKhtd",
  "key27": "63AJnDSdRstZpmEiSHHpYtcY2qRzjjKx4SSh3uayirS79kUMaY4eGy3QasrCS5rfr8qFejccZSaKxtJZMF2j8QHu"
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
