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
    "B9EnG6oh1khpn5JMBvmPvg2SQKz9vGuzQJLHbgTFPEAha9nmyXyu1uxHeCxw5D1ETFx4YKxxMajwvyP4PKCQyVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fsaNoC8jrVJadNx7N8UamGdccs1HxSg4gkni3myQrJb8VrmimREssd75Y6guS6o8mj69fs5euKfqZnPPZxNxbaF",
  "key1": "5M95DMNYvtBVc7rPc3tf9PDiKQi1T5GUNUgeiR7eUgJqcLKcVZtMd53YmjERrrZyhTuAuh8xEbpHE67Tn2gewXfa",
  "key2": "2yhgizMuuUC6o9D2bjfsM1UwKsFKM5LFx9JuMc1ZreJuetfZcZVhbWYfnKLytryFLvBmhPVfSpsZuM2xvPKCji8g",
  "key3": "5RhsA25cs7w9suVs3H767Ks2Tdi2DBt8HcKve66e8Vncn1bpKc37gAGH5gwaezkw7VBGwskFZpQaiiTPj7HHrDFX",
  "key4": "krwXeyMjTkVFWsMx8n4ngf9Bmk5kbykAqzmMDbYW3WJYMQCAVywDXfFa6TNNnfGio4jakMQH8tXPZxzqxfWcXqL",
  "key5": "5H66Pa5T4gLDym84svoTz6cNaE18CHVN351d5qVVvtSKyV1bnxsAA96sNaFr7JRJYq6zQ84gyrBsXEDgZDQa7Jiq",
  "key6": "5T4Kr1af75Dzh7xc58EkuyVVW4eALxrHmQ6pJyJssT4pdoYogMVDHPgarRsELSVZ1DxFPBGobp7Xo6rtsCbEjnwX",
  "key7": "aX2fSjzqNEdmpieii2Z2UFjadJWyZiUxhEiPiiB2P2Qayvs1jkB7Togn5iY92KH8rUFfucV5KRPbHE16ASJWa3d",
  "key8": "4zK13caQEmeqGzJuffKxNzSKfkGQNPp8MbKtbpSWiRT4VGn2g6n2dJFCJxQYvXUyR3s8xevtgadH5dBghog9tTcg",
  "key9": "25oT1rWxpHxfcexjtx8hgS8NiV45nj2PQkn7kBdxZVEZg1xEMJMfEXARpY9R1H3cQ55PYjgoiq4kGDAkokCh1DL3",
  "key10": "4nRTYPdj6Gk2iyskqJuhoFZbFBuNTWAb1G45FNXvxSmc7Skj8XytABfGxF5zLxD14tgeBvD4ryJyxzx9p7bafqdq",
  "key11": "3tuihegFbZaj12GjqoEYSbBxPEjwsFVNHsg4iGx3Sg3avzVjQgGQApmanZXVBCyXxK4NFTTnJpRLPGfRJnj2pLrj",
  "key12": "24UfXdPrx9A3r3zBjZLcxUd6drvDPa6BWhpGuXrBXSnkZ2qKqyh1iAD4avju431W8ZzmyJMPfJU1gbZ4sYpLNobE",
  "key13": "4nTvfvG95ASNgYrfoztF9CWrybMJmrzPhLzymXyU6mVdHQ117ttrbdCrgKo4Uxbxig8Rz5tz1MuH9L1iuc2uQKV1",
  "key14": "nXq88qwCpLs5BPPU3TJu8zE3d5TTNJzTwMLZEPNhCPqxCHD2gk6Rre5JKgc6RUBrmGTSzw2tKwcJN2RQrZ1EDU4",
  "key15": "2jVokZZ2asDhmRtGJWsmUeeFEWu4p4UeyHRRZtucjRniy9vmAdeDyqMW2uXYUrHPqViHcNCP24nFi7Vna412u5DH",
  "key16": "36DroR6nGwqvGFVebQWvo8jhhKDkqZpjCerBRQbdC6EMDqj1NGJnSRzMcSgC1RzZXE1uDMzUHu6Bdj2pvtdgWuce",
  "key17": "5ASmb9WrmYi3Ck31PqD5Uf2ATkyCRaqupZTZqZD3pevieksR9H8MJwp7qytN3TYUXfLBJRYAGVXPjMWvW3s6dv2Y",
  "key18": "423k3HFtDMiTMit7YgeWcDEFYny9pq6h1suR7hFKRk2ti2MPzqL258am71yDeciP6Ai8xBZn49qiPj2RoszNzE3T",
  "key19": "5G63HXJq78vu9XsrKfaBxrV1yJatQu3DsXYdRHMHgArwdfd9wykzZ8DHWybWsfarMmDAyPAs8jyqrBbTYQT2m3Co",
  "key20": "5jb4dyt2tvDqqZPWdYtQnCPqLUqQu8fvouF8QVZRc2vb8d7B5i2BAAmoDeLEtTUY44eAc8t4XJBKP5STpRMUB118",
  "key21": "2gNwhT2z1jYokzrUnzugsb8CXCaPjKEXASxSqt9Bh34iZthsmYZZt5KHzP51zTukE19NWGC2qXqgDLx5kzqBDY62",
  "key22": "5KxQvYZPXmPi5gNCX6dBPoiXgMUJJcY5siD1Wbqaxn3GCDb9BbPwg3yHKJLgYwfgbZVh6PCFuUVBU1D3hiX5Kndg",
  "key23": "4BmHeyUq6Wy9St7ZPR7sNe2jjnuzxyrRfcFfqbhCJPi2DFAyCfG7WxKQr23utB3D56Z7PKCawHSenc6kLaNxiRr7",
  "key24": "429iFk7XNv1F9Mz7SH4thwRn7ytj2XrmPK4TCAUprGFi72Ys61Hodt4iycVqs3xWh7mYhPED6pyJ9Pq8EBnTkpL5",
  "key25": "3iuBxJyXLB2Fwpp8jYaXCyvfGrJvAzZgqkk6rczQvVKEyGB6VCYWGrmuPjiksDVBBoB4uEDxiciYaSKUDcYhVSza",
  "key26": "5FPBzPQHxqkyiC3kyCY5bbTxFueGpeEPgAAawgxDFpqPJNhdq5ANrdRXw13JYfDmwjSSmCHdEHjPLTgKzSZdCHaj",
  "key27": "3ipeJdVoVJz2VoeBdtSvj1QzujWnb89ifBPVyP7qTdkQvBtYh2UiHzrVFFh6kSuRqzMuY49diMFpLCHpzWaefMsL",
  "key28": "2v3MGWyqAZSNrnC6QaoKWiPFDsEBGZkaWWn4rTFQcXaHL7DeKpXU5A9KM9GT1kTDJXuAo4yCEEqvVisMx7EnpXhZ",
  "key29": "4ySR4iY1qjaKLD2vRANo4aFbNwQFLSDcn9CeyLiPbjrpV5dB1o2QDqihNQg14RHw4C9DEU1UCDyS9cAaauNPxyCY",
  "key30": "5gbkK7BMAWUSrxgztR4sQui97er8SdQ7Jieby634ywhVgVQH2cpoa1GhQtc8kBKgDi3VvYuWMTCoFzACAqU315bx",
  "key31": "4iScyun8LKU8wRcMvvYtM5tyXB76fAHZaxTFtVGQYXWg63pwRu1HGcRzXW8oWniBuKkLuLZMg73eS1Pf2fXEcJP9",
  "key32": "296sS8HGWgruKuioy1brRfW9T33s8ru11H3dNVRyyF5edYUa4DC4fXSBCRugn2Upttyc2cBLAe2Et4TmTb22S1k9",
  "key33": "3T5KSP778th6Nt7KUF3JoUhPjcjrB66SSFP6oogFXS5RUMndekoFwin2MUG7znqY1TbeExGi8DL2RRVne9fCt2dy",
  "key34": "5KYmrKxWkuDpWKQV6T4xP7Bt6neT5keKk2aSZ2FeAUTW3LZTu1X2gMT8ZLW2tkYB3HTJ26VSYBVUoAwmTqNfZhDd",
  "key35": "5NAfKzTGXqXZX5f6TSFtsw6ntseF13c9dXgum2PLseWe9HL7tWv7T74SsCQjBV5rZiACyF7zfFyk5fAWvwzqR3Pm",
  "key36": "4L5472HZyfwWA8wc6LbzvyMLZ2JWcjanZ7KtRKQ5XYvHH4mKDJt9gm8ZCJy5MvA8yBv6JHg3GGCVLp35j779Jqhj",
  "key37": "3QXZZuTFjLxb8NmjtrakadaFpU7BeCbt4hqMYqdV6ErcAYELNU2wuiAUsNkfMcuyxNbAP8wyXiGdS9XcwbbjmksQ",
  "key38": "QB8TiPEZFY6Vadz77kfTgGu31bsj1vP9oSPSADxX4FfFfXRNAYD7GF4bjCJifKEafge5on333oubVexheUu2pKp",
  "key39": "HAnp4xQVJuksyFG85RtYdRxMMTFpjuE1xV9fs7xj5dn2NzVtQqXBkUTLrSRU3tfU1VbCY1DbgmmmSBLSqzgHBtQ",
  "key40": "54kfPnJuX6YmS4r5nBa4JCneYvnHm3cSXSW2Zqe4TCPXFBCKqMTSh4Jj2vCQzJBY3cyLuKwZVZ1Cz8mv5bSbd9Ns",
  "key41": "4PP3DizcRAbwwYWzDkvVBDNiG13pGBVwFV8MTNL2MtMfoP5pp3RCwHEaMCspKe6humzANg8XH6kndcyKVTcKGcM1",
  "key42": "4Dtps8BQ6VwgTLf5Cu8Fp3GqUmFNUe2xugAnQwcwZHQbSHebtCws5zbVfL9p5QfPRhVukHZQwp3rEt9FXBYpEfQe",
  "key43": "39G9ueYNoqA4SYmvSnZU7cmBopoiA2mHDzBEKAzDkkbNPZ4DQ1eMoPPiFRruNntHX34N3SH73LFW4mweShAFK3y1",
  "key44": "2GW8Lto2DFLLTpvsv48yjYLDhbFaDr3QnstWrVcJAzNz7wAfzVYjk7PuXFpR3Z6PMX4P9FrX2gZ5iYCTRKi1QxDU",
  "key45": "35mXyp65U4Q3kBeVcCyZhircjnqtoV12oNwL9A7xGQrXFDGxoVghuY1hH34RuXZBrTwXJfxt2iajpYqxE9Ry8eac",
  "key46": "33rqbmMmjuh73P8pKXKaa8UQRGSZTkd1i18pbCFYyRrrwv71e3MPUvdJyxLZjCwSBkvPxVU8pwAjeWFdkeQ2CiC6"
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
