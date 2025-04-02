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
    "5ppY98VaZ81WDyve97os69Fu6cSRMCuArabdz9zKkDZ7SRzSF6i5h41xsKTidYqazgFnbdK52yM8yNNHvAb8Ed7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQ1PU7RVscKMWn629gfQ9yWJvZsPpxKWQdeXN9A253WTPasW714NzFZoXkodt6e8uDxtbP8WZ3SAA3GD8xfpXTf",
  "key1": "32N5FFv7SwK8hjnmQnzVwyR9dDZJkmHpzkX1xXrFZiweW5pwMVDZ4eUVeyHq1SW91z4SNHQUVVj6XZfP59TeKG6L",
  "key2": "4b26w8kjgDj221dCmvZjYNB9JdmRmx81x4j3r5c6bdME1TQtMM2yG7r7DBDCHhVPz6L1Jpc1vMbZQ47YFrhfa8HS",
  "key3": "3zgvm2cNJ1fe5uyJLBQe8i38aKZVaxMQMj6RUWvytHJamEhyi9FUU9NoU4Tefcp2vLzYnA86rBY29DitVX1t7jNj",
  "key4": "4Z1JbRnXH9FAZDQpWe8p2awNE1vWpSd5phisBsiYtfg1z8XMKugdZB83WN7PTk6UPsHywSu6QAKvP4DYowBiY5vR",
  "key5": "5QEHcudTaR5kVw2cFDt5CuDrSHhW8fXUfHbBF1PpPVDruzPqtL6m6kQb34DCpwcHCj2Cs3GeuCAkDvtVGFEN79rC",
  "key6": "2eGexw9jsKc8dx1JcPgmDtgFtEFMfX4zYU2Af3J5ck9BgU4iPFwTtsaseoTwnuttQueFZRduJX1QsCJLec7UvLXE",
  "key7": "2G4C4wEg9CJ4htcd6iUfXopUzP8eLXZpeJRxcXHjc51kSKNYBVxLotHjd5BTKJtGxKwi2sxJcUy31ujgBxUG4B9X",
  "key8": "2jJ4XHks4e1hgYxk1d5CKrkr2HYKtvZ4gbt2kYmUPejkzdnFpZ4a84hvG5gbLjkeQve2gWWkJdNB1f5wmkQfuDi8",
  "key9": "3fs6hLL1KNKntw8MZsuk1wQJPMuH2Nu1zkUZDnBXUD2FsrzYFTvYnsmHHbf4923LN1me97RFfGQmqDxa2TDuTdwg",
  "key10": "241LiB5fcezDRfBAFgEbW9jgFf6M3tC1A8JM44U9f6h67tYyEV6wpyvsFCi9jgsBc9y4whL5VL6je288Eb4nKiiB",
  "key11": "2xMujrB3hm4PwC8fgDVNyMcc43hZ63mJKQbpe54sg7wp8NruQHsY1AFq2xCGYsEoUxqP1yo3C7tgmceG5TEqL6jQ",
  "key12": "7mCfuZw9hi5e2aQBPr1bujSuEnEmEHErJpWd6DV5TSd3J6R8TFJvKtFosNxKsa1yb41TD9xGofH1EQM9qEfHnBn",
  "key13": "3k1Km6zeuN3wvx4i5xWMEzvuzoZB4Arnwih5798JBwhGkxMaQa4XZcfdubP8kfvaPx9N1bQBHKxSyTcPTcpsTMhs",
  "key14": "3mHjqV9cWFUWRFBhAT7eYNprmv5jznYAGu2P6rKoTXXX42FCheenWbWdpbJdJ1ASVk6yGCqCwKKxNUnmCczDWLL4",
  "key15": "5gkuSp4JBgCnTgUZ73nhDqrBhAbdTrc7znb1NdgwL54fPmBYgvAVsMJctVnxUdLaUuuRdeh2iLzptGgWPq3SdMXY",
  "key16": "5sdfepiLM4LHQVLdbJBdQBVkf1UraF3bD3fRRoMD7ufPjnJ2jnHc9St77bPTZ7G91naPgyK7b5KFXs2EBgHLRnnc",
  "key17": "3cyMjHU4g27rN5eZN9GUnfgfr7rgX2bn581P4Csma2qhXgCUNBuS9HNvwbJmeBEXPFKAbw6pz3B8YXC27ApLhmrK",
  "key18": "51GJsvFbgpqEjAKH4Nzeugw5BLg6YejJ9BWuXkS1Mz4q1NpLYRayFe5HErsA1N9daxQEjztN4JRMSK9WyjEvCdGM",
  "key19": "2FsEZEa72YMUw9jMiZaXrA7UhHowXka1yw318VhVVwFF1VHymH4FQn1fHUihnHqbCGf4Y9sHbAihLczSiic6Wqdx",
  "key20": "4keoJEZHjbobnLmhXjxic5ze6ZP1RmaESa5cNEQaTRrskbUBc9b7KJs2NMRu5Sk3bHXsjZARPJG6KMxbiQfbyD9o",
  "key21": "24tZn7oaB7RkvkfhoT8UeAD3mUkyWCeSSbLk3ZF7bKpLzMyjuwT4yvn2P5jyKjXL6GKAzSPsvRR7oYfG2Hwaa9BJ",
  "key22": "5haQUFWa3iwTrCqw4EQ68dX6mToaveZJpjYGwrUy8SeqcNMGSv1a4dBKYbuV6Ze17njdCNygMLvSFkSR7SipWzTF",
  "key23": "3tKY9VwZinxUJvwwYb4xxn8Dqbex4hJ5Pjb4AS8Z8ZC8LJjkSXGw9kQgDEyuSjcuitq5kKJaj13TRzf7uUNqSbKw",
  "key24": "244peXfqrirYzj27VoRSrR3pQpzWzVNZ23d8p9Mzyof4CzXkciSSATxnxexmJdibWMo5tRrLAjtoq7HV3Emsw1xk",
  "key25": "2GLTKwgvJJmF2yBfmH4u3AxpLAzMQYYtq5K8ReizpuEeksUb7Y8DNcR3qgbPQrG3XR6TV9ezkFkkY6HtxvSNUkgk",
  "key26": "5D7MpFbr62Pu4fzvKQL5TwzktyYun1Mk2aecuooZcMW3x13rKDsAYzXrQazBKXYTnWr7XvHKjMX76mgRzTUW9i8s",
  "key27": "3YVLbktziPppcGDBrRY18c1wGTYnXKfB1y9gmFBYikS5zHZHcXjyUDs4fqsm9sgq1u2gmQvrj3YXvenJg13nGqL2",
  "key28": "4jMYTyfXWCStTAjKti7zsMJXa3gnfMdv5BUdCYZXSQpJyExxu38ygs7ppwPKUBpAxNEfENT91nVoC5QPVQE4MfAn",
  "key29": "5ffmyEAwpqX8KRtPVjtgam2UosGneFBJidTvZMqahZ4XGDm5UPc4bozjFdCW19Wau2rDm4XUMUQzMQaRT5Wh87Gh",
  "key30": "5zR1GHoQCWDtrkvpyUFxuWQgZwDyspcp6gdtVwMVcB4ddMK1iLDsDT8TbTi4yuwwiXZp5KDmZYijJpBfS6JypLAF",
  "key31": "3oC3WrkXgPTcnxzrRxTDvcvkSdZSb6HpUaprh8ps1KaxLeHUPvnB5SBvtwBY89xTmW1sttMyb9ou1rgP1Lpwv4HV",
  "key32": "S5pJD1UQn1YioFMbAmPW2aPXjPFdphFpJ9D4amvVrUJxYGgLLLYRb8BLbbdMe2ofddWsLadbkZyNfsFtDb81UMD",
  "key33": "4Wkp3reBuNoRJei8nEaon22Swo5kMzAxpZjoadarPr1WUKusFCTVp9zuBx9XKcjBPNVrzAvGh5AX4BD641npVhhS",
  "key34": "s3mYPC4xpqytAaeMWYo6TSjRZsRajnpp7wRdG69U6mvm9CXxzoitLLr75xCTCt77WQiKf2N2XZFu2oKWqygaA8G",
  "key35": "5K8GwJQAmoeHPrYEB7V9rPUgnTBvWkKrupoqGVfnDRkcuLFpC3czn9h8CEX27sLYRSVwpT7wbcXTZxRmmwECxsbP",
  "key36": "uwss71avgPrJjSDNEsNaxGGCEL2CYAfwiiAhtiNfS2UAUyS4UsasUFPm9LwS1BBJ65ZUDk2ZckvwyG6952vwePS",
  "key37": "3MgCo3A3CiRLtJcAF5NDeuyx2H3qo6mJcUhcR6sR4KT3SugzRyHwQGMK96fdKy9SRspmQphLAXwUwCEkXa5us9QY",
  "key38": "5DUYojF45VFUxZfEyAgUggG4hK9m9LJ99NniUGMrqJXWNioTcbZdAyDKXUjUjzhCnBoumvQ15QHdFd6BnMowwJt2",
  "key39": "2SWthrgzR81TkxkqscFKH5nPu26xC9jEoCboMFcn3atA16EBQxbyKgJswVkxCBzK1whyt7MosiLuq7R58T9uzTfP",
  "key40": "2KdH71mrQujVFx6Bo3zhZkmjVMkFmrNSMXS9ph5FuGoxr6AqPaaPtXEkfwSzK9hBWVbww76mfed89dKwebHgQxvR",
  "key41": "3yLEouBiWnP1UAVvvhz7yJme2f5Tf6BjCbaafD2gmfZ6hkKtD8Eo82wPfx9kTj4SfHj6j8t5yNJk4haW1tTfX65B",
  "key42": "4QKR5TGZgcR8CFSKJsLPRazAxXydo2esFkhnWwPYhhBQQ3yFgtou83mfWcRwuNjSvQyyEttDYjChWSVPPK7Qq8AA",
  "key43": "J6buKLKs18muWwoG43W2T8XUFcQVeLjWCP6MZnV2kvPF395ihECpEjHHuw8ZJwDwQARZs1oizMwuVQpAD88MKvq",
  "key44": "4Ne91FYZuGhydWdWnoDRXe8r3jomHD9LWRtkd4nez6H4zkCceegUn9ptNQvqhb8tcQCNzaYvEr8tuRgazWTTrc6E",
  "key45": "RnEujErhTYNNn6PZy7d4J8eBqdWgKcyhYsRdCgbKtCwT1KyPfztpSQa7Btoz6UbMJ1bvQGVuSnrGjGAUZBCqtLd"
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
