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
    "3TYmbaRHbcJAH5APozw2KZnvAD3pfjU68sz6m5Du2Du4St1r9Zai42NZNuNexjvi34CDnX3pQRp4H7s4u1Q7MZNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TmqgAUVJTeEE5mN5iWRvA3STHJuq61Z1QEHjJ6ydzaiXhnafA2zYDDPRXoNUxBRQZS3KupVmHiG5JqFcDHj7ADo",
  "key1": "2s9TcTLxdcsbNP3KL263VeJvvALwApB7HGkLxbhtHmh7fcsGa9Qc941dyzDWsuS6GdGfP3bm3qdBcFv3dh5VxXEf",
  "key2": "487TdXf6m3XsUKC18jY8Y4LWBw9HgohJXbEvaBoZqMMciMoR5gGbvWApbEmzdk1XvwWFjoeTE71t4vuHQwwWRK3d",
  "key3": "2FYKq8JFztWuo7Wax5ryyGTciZAbGaW49WFwJREft2SjJC8A33VdRgE5iWPnkf3usxNeSCGWnYaityMqNd1BVVWH",
  "key4": "3s9PbJvwgQZtv3fK3ZNWrpcpqLHJwQWQrPVBTjemh8GMLcyp9Vpmmoz8PVeuCaZGe12CChYSnWB8anEMoFpYHRW4",
  "key5": "2vecpyRiVxGuUt9Adi1MVSBZUcKXdANTfhicgUBeHiNSbWtRUsu4QutoM4PX1ovDXGgq4cmgVKTGx9fHGy9cHf4o",
  "key6": "4bncPCPn3nXpJpCthEgJVUHxzik1hkyA51A5NS6zSGCD9151Qfbs1VDewYvC69bESw5rE8Txt61X3qH2gUJLmVBV",
  "key7": "2wyopVepHyDRLHUy3yeenFWkAYuzs8rgRmv9kmWQsKoLB2UJcbaaHeGuPKjV9nZos7UhJtxMWhcz4zXQw1cmaYMH",
  "key8": "2dmdaRwTb74cbqpFvmxe7te8znfHAnULr554FVtwzfipxAswppc2HVUVjPSaktL9xsrEHyUPKAmQAJftwdHekYhJ",
  "key9": "22Z2gSAbnXbth3H1fRjDvJbJkW4uW8eg9qrYVY2Rym3u4sBjVrNS8SgamhmrZiC1g8PC1PSUE7HvGwjvdzekw2m7",
  "key10": "58VCqv4A9GdF5hkCUnXtcWUfi5kvjLwDXeQ6fgsx67DcjRYj4hM8UXm9WGvz5ohD1dSwhejfcgJkCbPPhzVnWiqw",
  "key11": "5ML2pKvb4XewyAEJ8tLDDW4uf2Jw4xFEwAa1EVsZNBdybZwyd72zczmAVSHkHUNBzorBXVVwJ5vRVPzQGBh2oj6j",
  "key12": "66FyjfERPWF9Y8UPLFv38XLJCJ6cfWJLk6R2WCj9PkMNMAEETVNHcAcYhXN3reJU826K4J6WaDWP12KPt8epNdkC",
  "key13": "5ytbdNpqEik4AAbyUSHSJpyZ3wM5gRXz8NTVYNQD2S8bTmUa62yEmbRqPSR5GSfdPQyUFXyUejgzBGGYGZcnTqDZ",
  "key14": "4zhGpAMFUxqGNtBQDfZi4bAJvr5MYJvn9fWC45iqZsX7Nw5LwFQupmTYo8judPh5CW4qd6BsFVfXia7E2vH1FzD5",
  "key15": "GvBxxy5Q4JE56jdaiMsWQJ1xUoiTy6PjBH4ZTLZn5hAU71TsRupg2YXb1twh1Ms13z65xthuSgB6FgFoUTrn1wg",
  "key16": "4o435PJ2RkHDsyGW7Hv3bqBfj81i7nZP14h119F473Y6BxkPFKP2Qco5RYxXP7herTu2QZBNVc1UTUWGaascHj6Y",
  "key17": "25eTwZDnrZy3DhXHvyPV1FBdu9LydjBR4qSWKeTuUL1s1fsMQmND37yrUetCW6NWawPxPbJ6WtLP6LPQs4ZctVRV",
  "key18": "43ro1RGmYY34wR4aNc6RsTsQu1g3s688GbtHkRNvuinAX8tojjzDKKwfkq169CoyTpzjb8k5a5wi3j5NNHTj297C",
  "key19": "5w3CYufZJoskQTYqdNwSwUSic1ZP5EEHUU4zeZa74WHv5TTJexpXFzd6bpYKWQcY5TWLXvabJpNrFEWcL6qLRgpn",
  "key20": "4VDU2RTjBuPZXSwyJwhzH5xKPz5k7FKiER5Y6Cs3Vhoi7Vf2b9K2c1NTo6pXiMNhecXsU7xMA2zeSDStiQUDuf6y",
  "key21": "2iPkYmaRfKUuwQb9qoJwQEtrfUzWugq8pytUo9LaWqUSDJZAjbGLkE6qzMWS3WAu4x7dAbpi5wgEmBtEC1PuMqzM",
  "key22": "3CBn4fNdR6B1fLsAvwmE5Q3TRW9BnrrmnjDt1TXvqrJocUN6KJHNxhrtfZwfnnQLvn2iAXx3BkexMFPLrmHXoMEy",
  "key23": "5BJNDiJriv2nHSHoAXvhswopTkw8FeVTdnmqyxMQ82EWan7GAzyYTLSMaktU226Ryf4ECti5kQZFTzFhviWi3xow",
  "key24": "2TZX8wAopsSafPujLuNj81hJXzASyqk9S7fb1FU1T2gnqXe6R6nycAzR724Lhr1qepuW8ZraAwLiAo1AWPVnU5Le",
  "key25": "5mALjFFV2aMjMSyoEdfTKfw6hPt682dWasWvANfw8dAZqLAXRFnPfazmiGM6EgrxgQeAM5Hc5b3hmxUXiWaXvUVf",
  "key26": "45bRifoynatDAxHE1xaYM2aCeXfaohq8RqgopBLqxq5o6vHmz6eCGUR7rTXGLebRBFXa76D3jsNtDP6X7CwAPpJq",
  "key27": "mS9YHuNEuF9kuH5RRJdZshfS16DcvJ3zLdq62D8u6wySfYe4ZK4nFJ6NKvfNYBpxc2CNg2249ms685YXqib9nvi",
  "key28": "TFUsyzoTZAqyf6SDVgQpsPD51jJe542iYZUu6WJuqzyzW7YAg58g5fJd1WicJfoHQJWiFG4oXbga5gjY6AUW1fc",
  "key29": "2kB1YoVUN9kZvNEQhBy8ZcpoeE83McXDCsFruUDqq2oWptaZGYKFJixkd6aLJf4C1LsLyWAKxw8DcbSC6eY3HC1N",
  "key30": "3XoomQQ9Jar4ArrZMynFVhjViGEymtLYDnuWbFP7URbRgnRcQ1k3R42KUcNxCDvCie76A4WB9gcZzP5TFKZ8CxYD",
  "key31": "5Xkc3YbPM95hSJ2jumRXG9QvhUunwdTEBcSWnVrqXfrULdqrwZVrXi3ghBTFErGVaqTDKC1EbiVykou4N9hADBeq",
  "key32": "5U5Ngr87L4SHn3j4obFXSGMoMrNY5HAgbLuZ9bsvGedsnes1QBeP1cGJkmq3QqZCMMqpF4vyJCLVHAnaY7aWbVLW",
  "key33": "3BoXPEJHf8FboWZ3QHj5KhRBXSKCzNdCm8ESfTddRhBsRSdY8C1oQs4NgNcQT13V3AYCedEcpiCMJkAU2q6FQn3w",
  "key34": "dFXtdyEVbk7ZeFGgRsNMhtRD79Gto4uAudhUGy8zXU946VzLsDfpF2nbsLeT54YTtuJNGNFeecbyZCBrMfvKd53",
  "key35": "t6eMS2oBNKRqBzoqxHJCSphDro8RCeNi5avnTzJ6RZj73kManjdFz2CdkhW9uwcXRHqBdhEQZt5ygGSRb7m61ki",
  "key36": "5y5wLPszZwcoR2xsR4MmXiMHKoeFruTvY357ZRevwP8SzhGjgenSWdp16N4jaeBULDhQfc6bHtsTcGSN1bZ2EbEj",
  "key37": "2Qv5pSA3N8H28d3RbD5uCpEZzRdP2ZduGZFFezWao5r1r2B2m6MjiJjSzqPeYgPuYYsitZYqLZtpPa9cAJHCyLMs"
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
