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
    "4Tbz8TPYeiX3ALv9yvjBLudEBaRH89CoVyeop57sNEsksopSzPc2yiHL1bsVxD9594XjkpupVhomgCU3LLgLm8pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBqZjNjLXYbEwZDyrAA3XBzVLoBiGgr2Uz7wgMEgHR6LV59ecECLiqdEPdYodi33HUvwQ98TcCD3pzsTdzcg5R7",
  "key1": "33AW7UaKABVUEQSvK62Qmr1FQckf39wbyLM8PUkQ7tLzwkB84QfGxhcH4BMyDjM91RbtgBSa9mCUdCCRePhu3RnH",
  "key2": "3VcdmKoP7ERAkCmzxVsr5RecPqdww1BdXwXkoq2bEUV4SRkz9QF2vwszVSxVYZb47w8hFRQvhhhfPyK7hLFGguqs",
  "key3": "2Eptnmi2zxBW5HQzWK1EA5Cg6TF8mKS7mMaXNL3o3MP1PFbJMF8GFcXsE3zFzD8zfJuc34vX4oDwNsqzKBNt61vH",
  "key4": "2p8jAP1t6DPhxB7tyq9onYtVevozVetfGCxW9ZJVpo5zduZonnC76b4Xy3rhNWiqki47Y4BnUd1ihjr7HFDTCoMA",
  "key5": "47YgCMcLjZPC762T6qA9wxcQTDGhyzPqa6YZFgJua2wsSTfKnsqcngCX2SnZjBfPHWAc8KEnovePEVYnyyFN5eQC",
  "key6": "5dQnrvDXGbHQXKfaB6ZwmDWgCT3dtCXAYRTSdevag7D7z5sbuW6YnBmJ7mjBKdUjVg1yZgrLM7f3k5xZkwX8Vpt",
  "key7": "4w9deCvZzUCWgFuATb2wSef7mHXnsHQcxF2KxYZVYB4NLoZE2MjPpvCEtQWyMFYrjcJEHKGB9npYJuuXjihfDtoA",
  "key8": "2Wqw1tndcFnhX5bp2xdGpaWe5EYB851YTsbf8ZW6kZspW47QhofA4uyXb5Ka37k8vXcWgsrZ3okLSDv9dqjShQ5d",
  "key9": "34osRjQrVasq2YkkdKmNca5uLQVXKFTbPi4FTiqDZnzoZ5u9Vs9KjtFXn3QLnWu3TUMFEfk5HpurvL5yNa4nU3sG",
  "key10": "31iuj6aovzDwUQB1Kx4eiB4GWJiBrNPHZtLC3rkEXPQifTW2QDjVn98uCX1tiZuCRWbGhQLfXdXbtk8pr5CMQWtM",
  "key11": "dGPoekcdLZkk5RAe3qszqetS1b8wJ4EH33EQ4b4mXP3vEW6oLMHqPwMaHDJR79QG5Vc4HhtpmmtmstB6bxoqsBf",
  "key12": "M8XtYZt3FaYzkwr32gDuuDoqTimgTBSUTD8Ljwmztr3no8kKym1bMY1VdY5y8MiE5wAy1FQtcx9w9A5uAh91s2N",
  "key13": "4e8UvkzPFvanW3CZVcGSbF9sFnrEHDV4yTMe4Gr9hDPSwU4R4ADmYraPYoNy6c1k6mwtYVDdQMeTL9miAzedxFhX",
  "key14": "4QFfQ4pWWJ2S9hGUSCEhqN9VpF4JqAFapf9Ybcb6ekyDDSo28TZkLdfeMwKx28CvCJ1xikDztzcjWFq3EkGqkwC5",
  "key15": "5RGKsP6FwnLwDhY1FcvaXjkw8BHxqVkR2MqfjSKDxN2sAYKVN2z1JMsacQgQt81hJ7hsKfeSggyvu73UTARbjtf",
  "key16": "mTyci6iCGCwUutE1gP9gdFwKmhxMKM77S4hwfS1AmXuSqJ9eRUjRoNdvm6qn6RGjwbU36suZM5Z3Twnswyf19xh",
  "key17": "2B9ptTEfijYQmbdgZyJhuYj9QnCwn1d5aqgaEZkM1JfiRj9bY9PuBn6NXVoFYgjX4yTTcRfk2zN3UBcNPbME65S9",
  "key18": "Ptnfbhupy2aYeNUguamGGnJxdn81c9ov9f7x3vNqQwcMn8Rjv5HpKWEJB9SfTSaN6P1eTAq14FXmeYCETkfH3m8",
  "key19": "5WRJQTmGBLRsbUX96Dk43NKFXFkMoVygiA9UGr3AHGkqH81UKxMAVyyKAfs4hNaRcFNGqWCckEQe4MmWGazXTqVh",
  "key20": "4GuWKs9YQVNV9WT1K9QRX6N6Hti4eH3nzRuzGtmgTSekd5CrhBuSANR4vzxuAZByy1QSJTX8qvLZgAssX6ArHhE7",
  "key21": "3WpGK6CzzsaC91kR8cFe8jabCRtdUWjeN4iGMw1zGJRcTpJJsGzJdqxg57gxtgwzCr4EVu2DVNVGtzjhrPUGjoMy",
  "key22": "zw8B9JDY59hpi2uJaw9vtzUocxnU7RyLjfhUmSVPSMxCzQkaeuETujT79DKBJ6rZn7UAygMmHmLXhFf42nqYPZ5",
  "key23": "524fpAijtBAB8gWUaqc1eKetQdxWHh4iWLf6wLjRekHtNJo5jEo6gRMP9qZicLQd9e8CNB2YvH3JuFbrpebTpJoh",
  "key24": "2qGiknY884AWf2nCA2ipsU648DM5bt8F7CMcypabGyEPH71iEfnK5Xvd5PGq8jYmsd9QMsf5jMiDWY6wEkNkxoXS",
  "key25": "3ExroxXX3V1HTPHHUkPtPc39y1unqg4qF7Tpbyk3pmj9pRb1UXR2c1NufuShBV1gBkyGCZZRjMdrPFZsnjkVEMoi",
  "key26": "7FvKTjYtDnG15iGvACXWwLzrozzMffv2LQZ8SgC6TTWDwkRiFao8e9bE2E5dTY84DEyJtt5frkeQLeUrEeCPWoH",
  "key27": "5X5RMDP2HsactVPYzUcioSTuut4nd1QPaGT8ssLbUDJ9Hrux5eayo2TAg8Kjvt7hijZi6aKwSHBBVb5n2nDKXV4f",
  "key28": "67EP4QGcNkXW4C46BBwHNNk1FU2FcMUbkmJNKCcM79J1hn9G3YpmSwuNJn1homy9CEwnWzETuFxaq29kYNWZBzz1",
  "key29": "5i51rGDeEh7JwmiQ4vu1vNumjKRUuHFC3obutuMLu9Qzf3Dt2KzKj2wSV8tSVt8rqAKfwdsREgRVDUmQFq2niGEx",
  "key30": "3gwaB4ReVRGpEmCoNL2pGxy9fSXfNEHbrNcnCSXnugEhXfp5VYy2EZfoasfbZTe4nCFX1mH9p1af8JTHGXucz8St",
  "key31": "2gPutgVi75csvjoCu7bR8A85o2UqMZJdwev5SwGwVcTkLroAosSqWSjAC9UivxYEeZQ8CwA3fiW4LJ1iFMe5FB21",
  "key32": "47sY7B2KWmHJYzc6CozkQ7pNX2yrwLB2dcvzKZFPa2m67LA6JRwrn1ou4wTkxjy7kMAheinyNAuGtRMk6t2gcLPx",
  "key33": "tJGtjWBVuzxgY5yrKnpACWc66DqCT9PVoarvraUYxrjtrd2nCDTg6Lfk8pt4fBc9rMxgqXZs77zmqTvYMgaonjC",
  "key34": "3wvKnLmbHmPNWptQgM12Mp11eeFXDEYfPugZhpi4vRRo7VLbxHfSTFyJtqTFuipghciq1RChzewWuLmx5iazocbF",
  "key35": "5s9NY3Lk9WaAjdDjaiswPuSRgTiHChMhG2aXaLZKRUFRqKtwWz2ZuVHLwicjcVdm5G1gVex65MeTDGNGoEoVKKPn",
  "key36": "4R9UMpnp2QWvZAD7AebyLzBVreerRSCTrzcLf3WdHmwmMTbKAP9iWxCZN3gKy8adDy25PSnZMS2yhH7nN82F8pos"
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
