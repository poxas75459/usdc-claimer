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
    "4oRUkwXPDi8msyQRiewGNBP5ojRS4LBw8EfGBAuNxgMFo8J8x6qGEn6Ls64GH2ysMfLg1trsJHh5j693FoezAGmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbbW1UW2cE2bXA9NovT9pEQbqf9PAiDEUvx1UgE3m7QwuXZMv7KHeMm9ekdxtBBHFALRQitZyWhYB8a3cAhySb9",
  "key1": "4LbjprsSx2M8exTspwtXubcdWny61VkupxEYsB8BBkvUsjV22vGWiKVZVTfWFbEhFjXfEDbABJxnxhhC5gS2kRV8",
  "key2": "ZY3XMADGPdXevFoAYMk3hhGsHCAYuZSzDBYitemwyt3ddufo2msEMBcUAJBdnJrsSyE7mmBDtHWEfiX3RtcYJYQ",
  "key3": "4g3ieT3UN1VGcukD8T1vbnDjTyWD7NU5cbb7rwWpkEew7BjDiFFmdiS6nDZ7uCAScrV1FpqTYXqZ72sTEKU2YtyG",
  "key4": "4CCD4aX7bNpNGaSti32iNo8ZJnw1hoX1JjiZSpKBewzxHyJ5tPi27m1E7HngbQfYrxv6EQurwW4WGA9TpDF8wnDf",
  "key5": "4Kxe7x2Y5H12CtLCjCPyZndm8NZsHAMg9K8kAt8KYLFG5X7k9PDP5PPzbythp4Lj9A6ZVewMqSQ7cu8LMs6hg4Vu",
  "key6": "2bvyxL7rzT1bZTo3JWTmNrFcGakYT3XrVAVtGQ2VmYqvSXdPt42MKb1mbCFDwHviWvbZfNHAyKeYoqq594w7yUWx",
  "key7": "KhXr6vAUgpABwWHERT27hwwsAK7X1j3b3w7ZAWW9P9J3HUSyPtY9kGMonWbbKctLCzHUsxdwyfXSvmCPhkQUE4n",
  "key8": "3sYLpxm6RXm1xfbMXu2SrmRB7JtqhAA5gD3MPwA9aWBGKDjVMNT6jdG6kx3qEdAafb28fN9W21UnUyPCqFe1xLpq",
  "key9": "4DYbQ2T3nCr2KtvryGiqhMADs8yN4M5jnoPXjLPEsNdAdiPgSxr4358dLtw3iXgTUV8W4rrTN5qZfszxNgtfHMid",
  "key10": "5J8W4A6RVw6MZs4QFrSGpagyYPiTE1MFGbm3roecj3nehN5TpNSDfLJ2rH3t5bG1LjqjWhHYnsKHRT4cuzDZWymq",
  "key11": "4tTg8Qtc4KahSVowKqx2s8xjJhMkzxakH4akizWvV6kNGDgB2Rd7ypAgwQEQ2UjNryeAexF6gDKd3mLFy6Buqw2a",
  "key12": "2ArNQeToSPHSqkb5qHxaGysqx9J8D3czkpNgGPsMTeGNWnsof9bs4FUthmgJvjn9ieXPECZF58GwJuHB3biCa74R",
  "key13": "5R7wTSwxtWXnxdY3TK4PDPokrRFkSWkJQuLYrER7Q3vG4Xqo9VTnW9j1z21Cuojg7i5NsStsENLpgtVtBC65pDbu",
  "key14": "4A9BXQEJBZqyMYXgvjcNhtTQFXtTkqrigQN16TNb5XDATKoYMZYGeDCs4enThkhFJWUyXY6MrDT4fc61rywJYKwP",
  "key15": "2vrasq3vu1euzKfGatKLtwuh7HzBAGJoiigtS7gWfsF3uahY21GZXkdeZXrdEBG5RFE6vR2D2fxMD2GbQcdG7C9A",
  "key16": "5E7WtSfUxzmpPAZtwy8j6Z1gBVVDZL4S4wxAY4YypVoaDHGEcPMrWMZ1UtVrybQ8WfMckK92CLtx9cRsrXHkzVy7",
  "key17": "436G2PgjvfLPNe9dc8FmNrvmYBT3pztCiDpoN1d9uuUwXAiZMPfjiKNxMdv8Y3PCV1M5oppiuxAWkJREJw9159sv",
  "key18": "3s1B35WnccJyuCnNpyqZUDQpQDRNVk89weYxQkBXNYuXz2efzGSFQ2vXdXbv7UFeZ2yeaWRh3HDCn3CsMYe6tkBr",
  "key19": "22EZ6qjeFGNakk6pwTfcApqVab6szpKiyvZYvZNbDHL4xKeNHYxj2DtCiuBoofmsYhCjhsU1U4Cem47TFNFQ3e5w",
  "key20": "4eTZ8zJbNsMRZxSMWmseoJSogL4vELCMjDLU1wY5pE1xpCsJM4xxCAsx7333qzxzcdB7CJnQ5PkHKEWyn4CqS9sB",
  "key21": "5kckBKnTmtbzV3QmmGXnV4dyHak5BYAidpyY6p1ScpTMRVMBNtscYgkWYRGvyFrP4CjVHWt8RBA3pGxxjqWD86Tm",
  "key22": "5y9DFMMLiCu36rk3JehFoCsaYCwidmKKEw7rGM36rUtHXwqNA1Bz5Ggi288q471PrUpmc6WYq65WKdeAs3ZTMYn5",
  "key23": "XzErHt8KdPQvSceQVwXaZH5jJ7Zej4KAMkeHrEcyRNNwnsrmdUifEsRWcaRW8EyvECZnPqEhUTHg5TesLCgxezb",
  "key24": "3Xt8vgAQVJgEoJ7jr5ki85Bzbb6DqudLdRNER9pN3FGNTXkF2wrRmhgaouqW78y2DM9t9KVheXDEhmYMLMRVkqsa",
  "key25": "37SFm3JFr2AySBvjTS6PdeGqJ96j4En8SHWSwmAXKXxHvrHQLC3qJf7qxnaWprrCuP5AfVmxZAZbNRvnZe3PanTZ",
  "key26": "58XnLcu9XuovHi4X5JYfJsKTqhCrrKkeLk2TGb8nfxcZWFhwzX9Qu17KxWuCExrkqdK5iJeUro1Cnb3ckSuPpHTN",
  "key27": "5frA4qT3pkd2m3sRDu9W8S6pwnwxdcFMxNkBVA8aBbU9pn8YtRtFTueoit3fXuM7EkBPceymBiiRwCTuoneiQ9A",
  "key28": "4TCHVpnGpoGaAbQTm5sFQ2bCm55MAHJLjuwzWiBiDY8snnBRrqYRxetDids5PcZiRzX5b88f8ERGLohBedqJTdfD",
  "key29": "5mdoS5rg13NXqVF6wSAuwdyRvj4BFty1M1sUrZZ3xJZ8RijRrmvN2aXb5RJe7XK3Zfg95kA5ihBnKXiYk2ETSJAS",
  "key30": "5EkgiK6JtcQtfxFWkbY4LoamQ1YGJJDmp67P7Fd3QAuDH64LLPVH8QJmdLCR72wMjGt91zrR2Np9GnUeP3Gc8ZSo",
  "key31": "3XgwnWbqMnhkWnG8Ao2dBEuYAjt977fErfM9nnSNGWU5aZ8PP4d4YqxSD1VRhH7kJYv7iugkUxF5efCuAabeHdcg",
  "key32": "3EPDoQyMvHNWskn7w4SYnej5DVvzddS6TcoqZdfRorT5omkyuGxF1xMtQTExZxpya3KhG9CY9wLH6Z14BVUVCb5a",
  "key33": "3EWeoKkSV6eNdAFXZ8EGUYKHRrDzDuqwNq2xiebUwfmK6DTNcHZiMfaTKQSoPzJf8ogRMry27wmxuR4tTuQyZYFN",
  "key34": "2n2hUoa4b1QAXRRuqnbM1KufF5kMVAKcmorarrUG6Ly1fY5DRDnhq5hrWnxKrH9KAQF7t68GrRkWow9U8ZrHFJ75",
  "key35": "4aGaSGSDzd34WeV8oAnFmxQAMYLDfCX3XTtzHMoZ3hKAD6gLfUFKKAKjQpAjE9LJ3U1uDNM5JQhH9tnSuLyNjSSy"
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
