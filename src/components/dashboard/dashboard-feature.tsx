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
    "3PdPwRfci4rresTDDrYFaWvAr5gheDrtw2GF58JcXEDyeukdDoH7uH9eYPJpnQBk6P6btrhCL8TdnPinV8DiZSSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPj4TxdJZVa5QddP5TewbaqHSRmBLt9dcWgZdkJvo2xkhifJPQwoPYBgNy45zWXrJRQqTpzsjNLLadFrvtSgYPY",
  "key1": "wSdJq55pHTKRYKBWM1j1YQ13646ZNNDK75fSTaXZzgeU34CexeKonVzMNaEvC7G7M8y7cK5UM559KmCz38Ucb2V",
  "key2": "5L399iau6v3XptEApBJ1emuH2qbPYmqk8CT4dZWHQ8Cn7rBm1U5ykeSaUKCoe8cubxo5vHtuQ7KXRo99RoQ649WV",
  "key3": "FZniP5XoKm5cTaqWp4B9YjcdNKaKsLuT4adsHFbBXAddA7kchVMnBd1bdM91UUq1GGNAYAp3BgtNvppKRJxF2UM",
  "key4": "4cwxFRQUA24d3Zy982mzzRZoWb8mZtsvELJQHdJ4b1wYMrYfQvuxLqqJuoLTMqkuDmiTfV8XvVyYZVByEe9cAGmi",
  "key5": "5Ym7LSLGbX5jb5urxbgiX7RYPWk8GmPpuetpGNVnFXPuW4TTTptrQxTvRox9KJy5nurimfJfFY9hwXUUve4qTAUV",
  "key6": "4kFGduGWcduBq7Zui2rc7wKy4hYRkd6CmTsFk5fXZTSW9NZtdaNZr2zwbVCqBpshkYMc1Hkz3CT9T1U1A5CYfKt9",
  "key7": "28bi6zXz2ukZPePCCrJv3nyW8tznoFLKAQnfj7hx3mQ95tYQbrVZW1dsbCiaN8eJVWioNEHYPuU4Etawqy2MrY8s",
  "key8": "4PTk4WsKDBsTfiFYaAsuUFBfZihH3opzSRF8wLEqRV6UMvZeWvNFbtTTram3KqEU3iNDLe61cH1QK9SLQpUyYXGC",
  "key9": "5Zk9Z3a5VLZYNwUGVmz4E2qbPsXUXARV72rZriV5V6sB4u3MZryB9GDdRLXVYuCPq4bByYaDS4i71M2FXXhDr46Y",
  "key10": "3gZuduzT3LzWM2RKseXF9xqXSr5kpwtkSgp2hsRi1cps3Ne9DbEYDk2oeysvHXsgpqoPW1G7YA5uF9eTBDzwyvaE",
  "key11": "4SBqUzesqBumjWJUSnHfMiQFcNErfrEcbagnEGYsCfY27pskyMdT3qTghAezFKrvzokjh9ku7AddX5GGYrD1d5T",
  "key12": "3eJup9fMQeYJnbDvtJkujL5ucayM5HVusx7w3Y8B4WJzdb4g3udtHnrZu5fzcYtwDYnD5xnQftoVcmKtGUPbcoiW",
  "key13": "2aJPQu5xW5VnL5rFq4t5iqHeN5BfTksZ1zAq32enW2mD1EyAedZDssz5DZxeNfMhnJ8zPqb9w5W9ocXZEahE912w",
  "key14": "5H8fqh5m6hztMgjUUxj8xS4gGXQymoe38oja9TF7GBigB1T53xjWeC4hrUZKVcxC1tsrdYyjQmRp3bfp1MUc54TH",
  "key15": "262u8MYByREg1W9oZ5QcGkXVUrHR7j3ZVKXECQ8iagFFVmCHfNBzn6wWdZGW2dbCtM7svhkuoGKciTHfyLvT5jT5",
  "key16": "XaRiEvhpX7UnTyvpRiWLkoyHUJ8oPRMvZGhyq8qaC4x8ypqgDDeUNLAHuUVYPMVi9QKLKQkBuMS7TxvnPszskTA",
  "key17": "o9tQZAS28rPuhq1GA28BqUcQyYZEYbiRcEsKBzaSm9SpjZLAZipTGP6ee6APrjFwjKMpRnRYeFQxBmTkBXUrdk3",
  "key18": "49j685NpqFcmDXuCbhoGi4Pu1P5xaanFBgfvkhqz4adQYz8L4g6hMataZ75vLGjCydt3Ch8aoN16CyjTZdwsEB8W",
  "key19": "yh356hEoS8XuNPDwkE1gVb6aQGFrNHsNHLmtxRmDavLxctxcM9HcqZcBJSqFRDFP1tWiicM37NGHHNYTCRoDHyt",
  "key20": "5nrR3db2MjJxhkrcaAw7Sgp7nX3HQ5pn9f3XjPsxrppQtSsVYu5r4KU3Jwnx4wEL4MucFXBqKhEoELx5UYrjm72r",
  "key21": "3VpTsLwF2RNQVRQmyR5svSTZ47pBg6rbtr83DDFqfFmFfAKGzVNtLRXCib2py68Su1BaDwUEFtQPzEwNmFgCy2aN",
  "key22": "xnB4RPmtSTY6iWbBUUWoBiPULFf48JoeoR1XJTsn5ZxMjP3FsWg3G1rBhsUtA9EL39D5KQAfEUC344c9LpNaiPQ",
  "key23": "7ioQmSxRrRkEzN5HBZLM5kNaKqbqR81VAyVMtQ68uVtT63apDRHzj2CSw9HQjPm4A9GYS1v4wRetBB2mHfCscqC",
  "key24": "sRhz8rZ6C7yBZRfmJ3AiGKA2ejq6t5ZqHXLD4MaBczRLWR7PsViPD746ChCM44MfJvNubZECkVc2z2F78TMhUkd",
  "key25": "2SSX2QiDSheHEM4spMUUVm55HohkptzwN3MXyic45b1hbi6qyTw7Wk1G2BwLSaTphpHh21kHeUp5C3A7umcmhZcT",
  "key26": "6789iEKTQihPgC37UscFVYZAoEhfk2mMhBW8iCcRYMDGt4Q2HnUtXFRmRxocDUFjP89sdphVpVGFidwdRDV8WXHN",
  "key27": "4dT4AquCchCfWeSpHXkywsAnb5QaSomQuziUEHiA7dJXZQqxw5eEdm8uUNbnrMwGbvZ7o1SuUn5rdLMYfF4bS7Nf",
  "key28": "3ppJq6C55v8Jou7D2nGRMfevDyoRiRXnR5RMCp1jcYymGkznvK3Q8LoW9UHfn5QMKjA8bzYGNT2JWVvpF8G5waHc",
  "key29": "5ARbRyY15QunSFSXSSGpbYiu18TmkyqNVmyZ6VWWamNTrkfFKiAnD3BuWGnpyKnMDeRKCNM6bZtaW9HiAKYZ9gdR",
  "key30": "2jtbAuEcAj4pb1qBQzmwi2zh8sYywtz1afWV1jfJjcVFSPrGTWBi5Ma2LVhJ1ooowvMo9Gk2Jt2E6yYPU5LikKz8",
  "key31": "391RPFEcYvEw7XWJUvuYCqBh7uMrCNJK45M5hUQLiHwsaK8iMDaWaH5UH6r72qyuTnyzw8gwUhTFm3UMF7hnCXZD",
  "key32": "Gmyao7xDPCYqL1gjETPxdzqGW1BgoCjR8yE6yVZioFYGV2D1EDSjjsTw6eyuuKzUX5QviG2hSmyG9iqzwBpFzgt",
  "key33": "5RfGyFtKKL5J6YB46PBabT3fEyQmeCzcVd1k2tKYthGTDZDP1CExsAL2sLSrfN63ijmchekEkebUnm9AJ7oT2deU",
  "key34": "2j4CYTimcVh7LxHQkGcKz9UcgqU1Yu4SfQq8Z1a2HPZjhPu12312TiVad2RWANrqLEYvzFJs7NaRFBSy4pfKndK4",
  "key35": "5N5WzzCnwEZzZdJWRBLUGoFuPjFZfJ5JQuk6C1CGSaHKURDXi986FQVXmMdju5z62CCNs5ayXa5jvNpBYd8GJMRf",
  "key36": "4mtj5bBXT8HMMW2HQr6YPaLSUChUTHnbpfzcfTZvc6jBXpQanVJRhCrHwvL5qEyDKvectaGXXx19GSKrLFRd5jLR",
  "key37": "5VTZFsArqEWe8tZuT1HaUwJPNwabcn1FqaGuwkdNNL2341ftAmuDQo9YuWqpF2KfmD58FNnoCKknosdKwx7fEjr2",
  "key38": "3UqrAA2y2KSbwaA9uSE9Y8Xn4fN9frDzmHbay1zV5mw3ANdMSyPBY7qEnGHRfozvF3td9KewM7LcxviUnCm5vdZd"
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
