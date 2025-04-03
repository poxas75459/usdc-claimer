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
    "QxbSuX5U9rhSStLw7J5BB7N8qthrgH6F8VXGfFpD5CrWbK57bpz2sA6vqdZZNzkJCeNfyrdShTXPdKm1eDff4dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTzqSL7dCDvmjUbbsf9n73JDg7cnJXwy9p3yM5nuGFTc4GMhuX3tzdT6eLNYo1aV4UiLiUfMKZcgAUUmmfbUM8G",
  "key1": "KMTfYLf5PwqrRtt5jaGfbHvMg929k34jb6Mi9MjoebcVayu8jLNYsGDnf8apug3LbNgXrV9rPmvqU6dgCzHwzPz",
  "key2": "5Z1NPAFFukQAf3KroimXWs8hisgcdYRBnWkne1UE1NaHZikmXwjP5xwC7sV4SZGUS3XhMJ8FjU4LQGQrEiosMqWW",
  "key3": "5CbknLQLm8KfQqa27iXC6arBGzBvAx5jDX69LxL7xeBhBdgjxcVz1NwCiHWemJeGS7FuNrNZw9ZaUzevsBENbh9P",
  "key4": "4zL8RcN3Vt32mE11MUDfhGCMzenTeWfMoE64TAG9W6ttNVTpJRXjai3x9UFdBsAxLFnGidBbV6ZpgLYqfo8h3sa4",
  "key5": "4KZkTQKNwBcVXRJXWVbJKQYE5dzLtG9ouLxW65HtQjH8mCja4Z99FWebRbs6K23ssfCsrkVtGdmBXGnF1Vxkz9nH",
  "key6": "54WEYcte5pkFxsZFGBtTyq2dZJZZzT6sGBE6SrQ9tyo9FiTja5hx62szcAyDnqHstKkXyULvn7toRePEgptm2zai",
  "key7": "29PoJvgF715Vk6yLiNY6Q2ENqfEBJB28PqG3A6i7UZZjj4Bj3GUUrv5MzTNYRLGYtqMM5gD973JYN6eJKXVMkXqY",
  "key8": "4WmvgmXJN3zdXh6HCgprqbBX7hzMLvnwe3DTikzjr1A4jtivBwHb7gyBFX8ML1vqt99sFoAgR8SwHi3QfJr3WGLZ",
  "key9": "3UTTJkbQ9hdAWRJkbXt1qftQzBudXR4Rp4rn5PMH5QAuGJss71nvnutgsuvjViN3KYg7MXHvpVciQtFxXj1VYBw7",
  "key10": "3HWPXb3HgkEArjDaXvWXEHpxqe3jbwixEDf11UJx9p4Xv66JYCUrhdUMofD71TmB7k57c7yxyowXraMQ1MHmkkNg",
  "key11": "398PLSCKsBjPm1Xcz5NwRAc5gobHacWN23d8GN8JXdguCa6Ex1LsaU1TJxmxPuyMQwV8y1H8nwG7iEcn3hb9Hch1",
  "key12": "65Np13odC4s2LLWnvy6WF2WkCZ5CkZGgzF4WSc5vjhvKMQ3NjmeeXY8e2dgr8DpM2uZugCzvYxKnH7znGJkJeug8",
  "key13": "3fLLfCvBNVTNeJ43gYK3Lj9vSbjzR9WUGcx7CWP3JFUdZbcWebwJA7kXVVtUR81oYP4SXnFndAyyXTYL1sZQaNGn",
  "key14": "4z3uqJhoHo2a7fBBy8FRH1GEvnZjeycYeUjYVkoypLAxaLTbGo4GcRuwtyNDgUbRLorjjEdsX6ga532dSBoVoP8m",
  "key15": "47n6JfdjGCpb1Pz5cBTYqsuwt2T8KvnJ3bWKd8FVjasERTcxwRj6DBMC6vodTx9CG92zvdKSF3ag53ikn3ZEvkZS",
  "key16": "4DMWcGZ1zRpMaWnkoRNeQAdxWyJEi3RxDVVYJCws7joUUkAkvxFUzWeQMCN6f7hiWzk2tfPVGaPRrhKgQQAzttWv",
  "key17": "4Rz7XtteCiak9SqZFDExNvWWLdi24B9HCidks46BZ5iGn91UGZuVKKuuoSgVR5yPw5boZnmXzjtR6jrpQnxd6Sh1",
  "key18": "32tvgdyqfSiNz46GnT4Qzc5M4vhVutQeAahqRhUtgJKmnV43HoJAKgLiicC6jK4Ke35mG4xhKuTDLDiRMNfUx9sp",
  "key19": "3TC7VDMuEfTjtGHcM9E6jjQT5bj1hMoC9zZ4aq4XukJZ6zfPLmcuLbwydehe5BefhFzreq3tm7fqvuJJmLqsfqy2",
  "key20": "3ddiLMxi3uz8qd2Wp6ULuBX31D7z6gGwL2R1rRXQct9Paw4D8F8nBDjSAekXV7PgNDBHjucNQ5WfCoE9YQ44DXTL",
  "key21": "3Aoa2Wtb9ipsiKW9A2bgt6ae4eh95cgh6HwjAkbbpdVx4GNdr8RDqvtxv6UmTEXo5NvknovsgYKfoDq6AKdv7tHW",
  "key22": "4Ah8HzfbZZqMjPEqgkQn7jzVxqwYL7uQhfxT8MCQExgr3nJRGfyeea8ngcK8TKqfn6u8spaZrn69f9miM5VL3p1Y",
  "key23": "5v5BigBeTZeEgpc51Cfyhc6rs5aDoikppjr33b7zV8cJ1P5r5V6Kj5qeVxiBpH13KdyVVoqWyEc36oAu3zyJtRQo",
  "key24": "5ZJrN3GpFm3LPJSZTsoHHH8BxeidhzH1qEvRnyNcw9vbw5DFyLh9s7NkVuWXJB7i4dHSdGbRLFXHgwGGFhB7PboP",
  "key25": "5Bqtv2jX9AgGNV3EQDMmzRvfH6A5mk9UrWKEQjYy66HuKM5EHNsiFdQj4E7i3xWHhtVXBUkWSnvEn9LUUB2MSeV4",
  "key26": "2jxasy3iqEFyTQrLzvhFR7UEDtz1NmW4CpvXTSyjGLURoYiZu9d48uLokoWBnKxELgyLWRMjWh9yXtHCdH26VznK",
  "key27": "sS7PVcYNVcHzpvBfTvZhtSDNdeixEYdLrueZbtjgYPJuzXci9NosdV8r1ubxfZThykxfA95FbivkWZ5hk5Cn7dV",
  "key28": "4ZGpHzkP1Qxi9kXxLFtFNcZVANFWtANKx7zoZorgFMyQMTMQCufcB92NAboiHKH5fBYViozMGygETqjFcFYC9yqh",
  "key29": "4K4NsMu3WNvs1sfETbqJP5b6vvnXvrJQfs5LuQ4ESAms6qDqNtMsmWYUz5vHFNb6d1u7MXmUqZAssASrikpfbhzP",
  "key30": "362oFFR5Mu1rLJwDShqMP3mMNcJUm7WaF8dPUNectc6qqZ7BqPWRRc53FrAEYoVaaXLAsFp1BbPxNk6sbfg7J5X8",
  "key31": "285Lmg8fuGW2uYhQFAnuP4WSkcdEEb1dhxJJ4b1xaC9rmoeDTWSEitgtisU8FZ7gWDjya6fhcQXrCScDqDm3zFbA",
  "key32": "3dMUVFaNfrR9pRsSkUCP6whbEoUhS1posHJgwG5gVVjuwbmTHYqjzxv9atMscuc1DuaUDN1k93U79eexdspYGmac",
  "key33": "29jTcB69U4pD72kbe7QSYeJWdKGvNw1Gdcgo4fceMcnHzk5XLwPS5vEyp4CyPijn52SEuxvd2uALmao2yjht1XhS",
  "key34": "4gKBeWnFbiFZs3Zxu7zWvYyg91kXgx8bDj3h2Cxwafyx69WpnDo5ovJMKtfX2GATGeaJ1NSTiv28sn5FEx4CW6eX",
  "key35": "3j8ES6CKNMsyWNCSZ9AT2Sw89j1xvXroskTDmqFmEjnD6dU6TEBHnmgG3kJfrpokyMR1yJNUw2k1jphExmop8x3H",
  "key36": "3LNu59mpvXa4GWbbrYcoXaMTpoxeEELVSSicztkFAG2MdQ2SLGAoYpbCsDyEAfKK4nn9ioM5HobxhmzZSG3HTBBS",
  "key37": "1s2PheGy2oTFoAfc1myAvXkAzPuPLdQVEWgwyhz4kAqEafEFDJXGaby3m52pZSgDwAHZuBBMNaQaQkbmHyGa969",
  "key38": "46CvTJ11vZ9GYf9Vg4HdMHFhw6TESamozioSvzwNNV7n9d8Bfpv7gQG9b1Stp9wM9GLrWFNUkhr4VAS2gRwbgVoK",
  "key39": "4yUuvBFeGygxaUy7RW1vNcTBpmNQ3NJ5zyATRVS9wj2zLMGJp4xqos5EnU24mkG1EwpLxU112rK7k6z6xDGF1bPP",
  "key40": "2EwJN9pBFZvvn2kTi2yL1q1ZhbmJn3bqMUS65sa7zcnukkSQK9vjpvFH5oUkQotxAHKgHzzzAHDmKtr385GDgGTR",
  "key41": "2KrQFpZynmgaQJcwrxDQgGV5DnCy8wQtEBbSgQ8GkMrJMmb7vk6vacRVFXaVBZ634naJHSY3MFSVdeZfGehcXzLc",
  "key42": "2epAz1HEFHrQ3ENaV9QzjDZZBMjV7KYyXtUSUr7ztccnjkx3ZCSAofj3kd9w3wFGG3FCShcAwrLddTKiW2CZY4y4",
  "key43": "2QRfQvxPsMBNTJz8vkFqZUYS7383nTDC5jBXoYxNcUMiosu7juWG3vDXt851f1kSGfe2fxukuPtHVA2G3EQSHhHi"
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
