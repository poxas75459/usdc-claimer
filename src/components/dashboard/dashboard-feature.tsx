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
    "2YsJrpeYjJFFAomnvWUYnRgCcTdLJfrtfJjTVFaudxBHt7mp9fhttkezRScGTht5aZexdCQcoXuFAMmv62zPqd2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rvLEPD1gEnCigZBjca6h62QUGMVnEe4geDfTHx3VrSAuS1m1eWaYc8JriZtZVj7refBUMQ7vadGNngKCvbXuJE",
  "key1": "5HmbM64ruDRVjXtGvGsT3WqKWa4kA4mBhXHrd6yaL3QZaBeuaYiW2eqnMFtmUktqQLVycJZSRc4Bt1Zg1hw5DyCG",
  "key2": "5mkgwAgQZoTdjLaC7mEArJK76VFBwDG8DMn5YCQoBn7XGmTTdfJmLoKnPBs854Xk4ttKBSFg9KmGdcwhgYryujBQ",
  "key3": "2nBjh9q2s1sVbtYtmV64Ex4K7bBQwi27f2YKGJnchnbu41geBRKSFF5ofdtc7N9a8HWRewdi7EYb6YLcs28K2MUn",
  "key4": "3yENtRJ5N1SfTe1TTcnEwAicpZzDV3bDyTxoWTCVcR9eqqDKGwW6gdEknTYgAz2htGwWns1mbiZEkAYm2fj76E7R",
  "key5": "24XMzLcWybVTn45YnHQAYvPyEjgdqbJ41te6k8LS2SfMTc2GYUgDXuCLWtF7vSv8BtN3bRx8fU4sD4a6urBw3VfN",
  "key6": "21o8Lpxg2XZWNkpaYCZnKuokXZMoMiQPKeBMJdUpiRrS5R78w3ocsS7AwN9NmKFHyGEBuid69tQWds1CxXSbShd8",
  "key7": "W5jkTY4ToYPLQpSHfFxmjXHa8FWNqxTNqFczNoDjwxfSGqHyX6sPN8X8ZEXFymbCwgbZD5iw6zPj4Tbb6ceaz6T",
  "key8": "4tvrUWbJsjwiJF5kBjrgs6ASanRpEH9CVxJCugftyayNmM3V6ujkpaTgpt85RzDNZs1A1Evb8fykF4HhG2LbC2WQ",
  "key9": "3LDrA5jYkMtVeyMd3mY1c8GXhUqVS57gugSW7ckyRpgBstfeyvuxX2P7gJ3SX9DXGQpN1EgWNLhAMHmSNwiwxNxv",
  "key10": "5rB8qLyCA2iMPcpxas5L1rf8yBxkYFZHP6GMpUsAt1ZCbZmzUUujZqkuzk7JoeVExWM37fMCBkqpiRFLWCwohAg3",
  "key11": "Rxz8ffS839RJyUmDPTpaqg9qhRmow79c9qcMzHZTQDWCkhq4q6sddNLa9YvbRrDb3UjpEjXzPryuVFzENH65CSF",
  "key12": "2P4GksCHnMgXwcdaJQnJpBSqdnkRk4jESasqcvTUa6UDBMA4pBxYRJjit713iMHfcRqxctfJmcTtTdU7CyCZPMAT",
  "key13": "3Lqr7Gwwi3mrJqGL24sMZNmk5w2BzzEdijojGZ3M8aNtcZGkLH9uCgHjfksfV2YdH2DymQapDSH5hWt9KFuLnCKv",
  "key14": "611J6oE9S3pFZKv6BUZkHXiTj2v1svNEkZvd3ub2BC6azoU8bN9vGD9UQXZg9B1m9vruojjxXVutahMA7odm71Cv",
  "key15": "xM3iD3nEpN5dqFH3eNsZ5xDiJZPMRsgnwJEafm8YEZF4NrsD9aPRGTmeMLbZXTVzNfsTnBm2AMrykQDxsu76Zqk",
  "key16": "tcz1Lw2ANmdGSyG7jK6fxomNEjwBcnReWBQ2gCqjDzc6BbvC72Fu5BgvCZdpzPkNfwJAwySyTLbUHC5Xvy2tPmD",
  "key17": "cgRcbsuAnjjKaGNt4eBa8nxY6NFADHSJHPeWbSDiK3q57tkwjmzKFUfXRogA1xM9dx4Z6e3eon367htMszPMPV8",
  "key18": "2xC7SWqPvNbD8SKyS4E83oddMEYR8rek7oZ1RKjXgmK5F7z6SyhkCBvr5xPdPYyn1zMcWvaqeCnaQ2X7fW5syNUf",
  "key19": "3XLxLtSQ4mX7Yy3sK16YSha93od9jEw6AWagXtYskanfaE61fWANTgHqpVQmi7Hv9iTHXcc9R76EMV6AKxreKDR2",
  "key20": "4fBavats889dEiib68TDsmRiPtAMGFHddMfqarA2UvnKdxNVoQJthjwYoUpBpWcqR5VJ7kFRVBsRmLykkYFWUyCg",
  "key21": "58N45fPFmnvhjMHddWuv4kKYZp9JD4QRPSiWe3M31Vnb2o7vXb869mHZ3xjsRZE6CXAojQ3EukdzbhAKjkM45SCG",
  "key22": "9J156f4THYfWc5vkr9vaJDxHBX1KK983qXa4u4pwkbP4cpoKZKFeLv18qTYg1VMwCTgxHMY3C74trTR89MeZH3Z",
  "key23": "3TGMaxkjPdvRsKy8j5UtC5GXxgPTNJcNTNaeeUDJ1uftFfusCAssRsr1Cf3fjQ5V5EZZgYMtKK8wqkQYwYMjF72y",
  "key24": "55xVVKqHT26CEKD7qrvxcn8XGzbzKfyMTgjG5bw3r6ocwHDmtKAy1Jobwk5SGMsNJkzrkRWgp6GLS2W7ztqCaVev",
  "key25": "4H92hiYxWNJ8BaeFdkKzKEa8QW39PPTuxbKbdxboY1K6xceKFa58u9P13CT2pk2BfyXi2EVYAn34DU7jGHMu5KWJ",
  "key26": "65TFy4U7MywPcYf5LaNzk5ksDiatLBreJq2jWKk9gtbR79Bix9VVYQRPMhUvTZ9rGbMCBAL8v7fZtvHACm78sWJe",
  "key27": "wdrZeAuLZRpgFrg9eS97FTi6HuWmbryT8WURqNqCM3Qw1E1eWjNzPYgUfw5WViDUAXDdSwvwrtW7f2G9WpCCW3j",
  "key28": "38UB2HBQHkWHzXe1oczqjWU6mBCjGzjnE21xX3QUXqtNYCU6RKMFwzrKT8M2jAkXLyrWxdv5deVwV2igcnG9hdhw",
  "key29": "4fsQmh17Fce6iFuGMMzmpeGEtY3UDtQ84CCG9zuqW2XTuhqtMHJ6djj8DhPSVof2EcPJUVwKVnHPePe8CDnCZBhp",
  "key30": "37ferHtds6N3KoDT3wUPWkUDR3JU5Zz3VeqviSUY4N8mtZfyfSzRQyvzNBGCPfVZvLxjXqKjd6CMwwwRuSuZm5t2",
  "key31": "5jZ4dzKCXSDd6AavRRF9iN7FfFP2yvgYTRnqiEE8VSzEUg7wQKYWb7ZAjKrFtxmeMKsqvNbAUBXemW76ZVHcfw4P",
  "key32": "52NmCi7Asu27FH7fJBEuBXZZ3c32TmAr7PPHW4Wf58epVCKkaf41WnYjo6MipXEgWB87r1KU5aVSyNtzgZ9cz8ym",
  "key33": "2yU1Ciru7RbrLSbYZEhKKzSuZKvgDkDb1QGk3M7qi56hHriZoaNZmAnsqXcfUUWeSgKRFaZpQ12rs7ofFCMQ8ECe",
  "key34": "34wVa4pWtw8JU92HviMa2tjtU8Yt9A4LAHQVjkBQRauW631Syr5QeutuFwGZVfZyHE6rVJE4Ww7QCnAkfC7vezj5",
  "key35": "2jZT4oTB47EzDmyPRy7WMrgx7ZCppaqmuAt16pb1Vt73P7F6X4VwLUkuSDFuic6C5En7q2DpaLv7zjn2Tg3F8sgV",
  "key36": "53K1LrUaZXi7QiETQ7YeEaf6JhSVB4ofBDzdRJSibFzRGpNFGjYJzXsb44bagiNdWy3vTfnFWUYzzr31w3qNEqia",
  "key37": "5PoYPEs14es2fKbXcUut2PjXDzyWQ4r2e4N55vuJ11HDUtJ6TuSR8utDfczeBPDWpPs9GkHgQ3CjMQF27yiQxchR",
  "key38": "5KoVoAs5oJHz8Ez1yjodTFydqrAiNGxyDaMZsVa7vyDVMhGJ3xJRmrKY8Nz1EMEvc6tdZBpgf3vqurE9L1p1JZpm",
  "key39": "3k3sHrKiENB5zvcACbQjvmif5FsYoZhZtNZ186NTNwCMjRk3d5d6hXxyATtxvXjbAU7sKc6trMpBrZS7PQLb1828",
  "key40": "2d1JGxbKaiKt35j95oya2FNJEQtKm3DfafDLQnHtrruogLHStvWoZ7PkGY8sfDewi82TPS574TUywEikdo7UN7SX",
  "key41": "5joQpip9TDxkMCu12qsEcvevPfbiJtQTaVYxdYZNzXjrcyeBGu8uSS63nELWm3wbhirjbvRYeSEvQBhsusc8kDUQ",
  "key42": "5BZ6esS9mVfy7nRLNdKKfnRHMt7U1GhAjKMzxYtwckPbZSLc85VvHFRp3hqtDip36D9h5kU46wMViAjHLBWGvZd3",
  "key43": "4FXnZZ6CSeqia4aL7fc2e6hz6oqii5UbE5Xd76HFLJwV5XNrsJGFVYKhGWK9ecmCX3MdCCxiTjvvyByHYThi1auo"
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
