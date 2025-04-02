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
    "61B4dvnjVFSJfmdWhFMv963W79vGgPWeZwc9JQKQR8ddHHFk6prQo4NYg7MvJa7GtyxwniktshsvwrDsoLK3PJCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiEZezEuVRphBiZt637ZPK9Xetz6vpmiVCENwbRQVKjs53gNhVacQ9MCUgT36JjJvY213JsHz8iW7C6WWeetJRZ",
  "key1": "5J3bb99f3LX7xWiRjbJZFfFaNTZ8zVSxxW5vWs27Dy9yjAFRAqanLys8Eb9Hhtgwj2rDVnM1aLXfZCPzRMFCnSSL",
  "key2": "4XoQnZRnMJSBdu9SJ7GbBgEsEpYjvsiGTWACRa6ZCzDQQ2e7tv3eVyzYKviifHZgVMDNr7S1yVQR6ezq2MDPXusr",
  "key3": "9AA5KXLMfkyLXaNh6MtyAXSnce4VKMZ5jZXzdZX91FeRJ6aE26NNU9Uyxj6psa17UMdUJ4rfMGk9QXvpCn7w1tk",
  "key4": "rBUAZiF2HzLNrCSdYg8Yp7dAfv2DvAJc7TweVXSCCxbb1uicjnfU1wwuFFT5ZUtL1aWkkVbz2M348hc7AxeKJgk",
  "key5": "4pTm3LuRgBgqR21S8SXMHQ28HSoGM9QSkocnkv9ULHPutMtmQpH4LxqrRdkJS3kKn9Xvre1a4ubnxehWwRVnpaHP",
  "key6": "5UujBnYWBSTNB6uEUcxWL367QzoSertGWtUDjRLga7uWZXmXDhEN7qiXNpRbN77Z5SWDfRkzw2PehZWVSuh8QH27",
  "key7": "3TfgorQcCU72JuXVstt7NVWZfJz4qdtdjKdQdxd9C7AoL6qb5gVVkAU19drKMXALyQqHXNSJX4d8vLkonyFXaCez",
  "key8": "2KVroysq8gnBWLZhZcxvuCAQNqob4Z25jct4cFwcpqHywCWdRNHYLDTJnSXucgwe36jjio8JABdAmGiWC5RkUFaY",
  "key9": "2qHRhVhcPmgSivstrMpkqeW1KmCDuZNtfuyYXFW3Ah8HbAnJkXCEi3viMsxMeaw1ChT5FP4N1HZhxXBXVgJtGNHo",
  "key10": "4ZtWijSNKurQ5ufUtDpjPZAc8qnvQ3nRi5PB53DaKnmMAyVxoBpnDufoPydZYvQNsW4xqFYwZrSr57L4tAxGoCgD",
  "key11": "wdTu78fDXR1q9LwqqrmxkdChama38TMG955NTxKPtRokx2akZg2RsPBVFs2NkFRp6QLuKxAN6JHnYuxL4g5SAnB",
  "key12": "2RdG6YxUvCQN6Cv5BYTiucK7JCQ8TbiVZApAdApJkr5SWZaNteEycEWsSCiHuqYNDHnQUbX5QkJjCSRA52reoXvm",
  "key13": "NzoGx7qf5LvcZuaUgEcUdJEafgU3ZWadMzGS4pqWDYLsiSLU5p9JRNY1CUXKssS96rCUC364og5172dQ4xJEqgs",
  "key14": "4n9hmTVBjRxx9tpQGnsQkZj9mGs8pZnMDR7LCD67qGgxejum8wG7XhQdJiSiFnaRGbSmJiMdboXcLPgnqmf9FzJg",
  "key15": "3gErZESjrmvjt9dRMXFNFbPMBkKvw45EyPWRGu4m56SSAY8V6TNqfeLrRtXiDNJPg2EzasJ5HWdGvgRtMAKpQGgU",
  "key16": "4XZJ9wP8cnxkS8si6u1YRQX9Hap968nHiJPZHLYnB5NM8zFLdQWFT22SQw9WsqcBxCYw8bXbBMy3L5HPG2YgLhCe",
  "key17": "uZU9iGKUxbvXdcj1YBGg8gcNcwaprnDR6SgZiLdsg3Fy5x9H7FotcFvM8d5o1XswPheMk9r4VPsj47p6iuMHGNK",
  "key18": "4aC5c2ybEJ2PsKURh5sHFF9yhRVg342T98nEJqKDpuLmugMXhhm3RQHpyDFgLE8u2GvVdfrsEDdQFP3AHGiaqAmr",
  "key19": "4fUtXoxH3QGkmSyRx7LgQPddTkypz9gfR3drV4tdcCfYkAyZtm38LHBNgQVFCUWnMsiqKQnoMaybhy3t94ouiea2",
  "key20": "2HZnmoKP51aXfwjwovVfmn1FjYw7Fpq52RRYLakJ6sCspF3LMbCtEUes4gAxVUcFod9g5FmpC9uDut3PTC7NHRLf",
  "key21": "6cpWujAEKUsNpxr2aSYPckpGWDymK5U4mRDVQWCGW1qr6rJh4uEhmwA7bxTuuvcsaAqDectw3Wehq6V6ZqSzGLK",
  "key22": "4VzsVPzkTWqE6Nava67y4mducmvKF8e14zVANVdkVCGSssPqdFSk9KxA1zAmFKfq2cvyZ5Xemv2bJReD9TJnVh6e",
  "key23": "4Se5u7WucjnYmZLkWftJ3M3oo4XpvBL8VSUv1yUpx89pN54Tg6dn3unm7RAKLZXZKjJHkkxqM3AoTozPooHfiXKs",
  "key24": "5fyzDTF5cbNACV48FtTbQkkFxxGZ9PDh9t4gqxWu9Y7VK4Uq4nwqDvoWr796HN1Aw2yvFYha4b5GoJA8J7eDyCT9",
  "key25": "3NSYmGkXPBYWbNDaT8HDnTqZnCcNdqCKGanMgDt9qhqgLaQ54nwU6ZBNC5eqwB63ptaRVZsx9aMPkGArnsRCt3Lf",
  "key26": "33d6iogmAc14dkcK8DTSFjmQLdA3hyo3eq9z3ZUspEDhVpveNKk9gyY69XesK7QKqbV7ZRAJq2JtqWSYAPXjXuMU",
  "key27": "2xa2Q8ZQpD2H7QmwJ1ZVWDZjUru6SPsjPipCxbxJrTyeYFT76RPVuE6iB8vbEW1LoECe5PaVwXe5jXsd834UXJXk",
  "key28": "T9Yo6bYEyNEPtG1dBsM5xnZ5hHPCG4Q9SQfTfzeQk71d4sXH4HX94GvPwNZxJ1f242zCxGbvP6Tm9sYHXbRKUqV",
  "key29": "CpZFmqNouCwyWmjiHSSC2GuuiBcpNecVgdNwN8ftoa3j8KoTztoupXYwiRrnvDmchKVS6cVxyKeFAHkAkgXvpVJ"
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
