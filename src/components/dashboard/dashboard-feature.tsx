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
    "5PnsBwdxk6qKE73WmzjoSZCCz44GuhFVNYBMUxFg1LUiD1AVmq7jTSGrdLYUvrs594cMaJ7JCDWDT3uA4AbT7dHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mR3NcunypshRrNZ3iLQqCBkQxb5HXm3Ty28jTRRwQ57VZgrNEDimoN2LXr5JMj6vpJg9m5woaBnYpZevtTw6YaV",
  "key1": "MJTMVdmXBNA9NeUX35EbcboFV6uZjmu5qriXw9pbmJ1fNKr9UwBBkSeXQcVwEf6pavuuqDNo8AwG2mZPva4UkCo",
  "key2": "5ocBCRbqykFinw37dAYxap25UzbUJGfQoTjruP65NvovM6V4PSamvXiqpUNcNxPXqiJymCuwXq2AgMPb3RSi632r",
  "key3": "27ePWwy6vuZKUg7LiWPRB9JcHmnRVC7YCsQnSc6sCqjTymiCEdkPkd38MKRXfkXMH9Sjzs4j1ZLyZDYyWkdB9F6m",
  "key4": "5MeM9hSvNFDouXYu9PXUETw6zz9TD7ZFjWTkC78rtxxcXVKpXVLqGRpzxEzWkZ9cYt6sGDqcr4PUj36wWCb77ujL",
  "key5": "DV3TJFUFT6HyyssbBZdc4wJdpimY2KmUenTV2ELGFzHCKUQgQZv8KmomxNvys7FqJGcCZ6194SXu6NsM3uUbqFG",
  "key6": "5tW1EXXchbscC7rVeMd39qAsBJyYCY17K1DgjZTBpiCh7FuRua64pMf49FgRVrAMxzxBR8dWzenchV1BuefwKGkB",
  "key7": "5AQDtQ7hHhLtphL4GusWL3gKAepkDt79w3KMapjum77jDnyoAymEZqk8zntZ8wc2n9jXbZmwCU3NCzkoHUUZ3WXN",
  "key8": "5RjLyLG3yqzrozFfnfi1gwq4RpQ5fcEkRP4zkLw99Ag82LMh9QQz2xtTVRFX7Q828GKfdW2FQAD69omZJyXKMkHX",
  "key9": "kkkCM3Q1eL8aHFSEGzBtLTQhs9ZZeE8QCuZYNt3teZukthwffXHC1VFS7cxMwDqqZwHMQXDymjSiNKNL9KjC5FZ",
  "key10": "4WaT46kACkPfchNiEAbrxiJ7y7t1jndF7q3sZ9QpjNqQUwdBvvjQaB7Yj6NeBst3mVhDt31HkWAqaS2A8veBJeJi",
  "key11": "3LWYowgvotgn6sB8bMpfToEq2jktupSZCjA96P7Asv8KnFz5dHREQitD8naBGWLRCXDZ4F3xjEUoTEQeK3tT4FUi",
  "key12": "5vgXftKovTANrM7jgyKRAGezUrREdKcXVjhZ5hqKtguQPK27wWTXGL6JcDQyccQFbJ1UxjRRK99o2eSnP8XJq6Zc",
  "key13": "75is85XLZNXbfFRy6QEgWjcTguYzM7Ju3YffXWx46UGudr3N57kNytBsqM2XUX3FzCJq3XEqDW4UXr3b4HN7F9o",
  "key14": "3cySKZFueb8YF661UQKvWP967nJJsFVD6ZrsoYtB5QRPYMvzDd3Qcvs1hd5dYFXEHAZ1LFe1XeD44ABEZT1LjFq8",
  "key15": "YF6zKV7DxrAgXNuCBP49yW779PxKVEbxFimAmrDHTYw284eiuhHkXa2G3vM3yzQsMnNye2Q4tHBsjaZm2swMy6z",
  "key16": "2sggUsT4QDKcDTLkjkwSj4N3PP4DeuyS7KVzSKU1d3rAew3LDEbXLZ1ABNEnEk5sYx2uwADjpweNtdGhkWWyVfhR",
  "key17": "5CnbVZYGF6X2JRBwm3ng1jCVLYtThQxxEzX6n3zDcqFQB7ebSxDGsXjx8hR4zLZMettKZsFNGKEbaDTkS7vfanWA",
  "key18": "NXpQpR2BUxgf9DzzVhUYhvnYn5KPi1VZvEXdnn8BYX9kv2Ne1Quuv4okXa5AZzHJTh4wgRXNgcqowDQPk4BDAii",
  "key19": "4bQuGL2nUw7aDmSANd6gwLfhYVQjqbKHaDWtz8TutqFs4FuPkZq5WqsL84F7CPXQvJsxsGE827v5MeTepshgTamM",
  "key20": "53s7MpgBeg1gRRZxnjEoz71aTejZHzCbUrjGPWGy5iF7FceWdcby3dUuQoH16qc3hhSUmUeYDNzHniG6tVHw9aJC",
  "key21": "44YeTvx9vXMeBo5FfyqpwLkiJjaAAJe2zMdiuNAFDnidnuEYfr3MpG7EcEpKqD5Ntet2s8yEaPvzTJLPMGkyzYgE",
  "key22": "314wVmFptLfiyi6WhoRNxBAVh1fnorrQTxWQGHNYhTQev5WEouzWcXVT5U3jUiygMShhU59n9gcPJL7cK6y7DSki",
  "key23": "54gPEMSFwKw7RuqDqN1PbRmcjWknabQ26DcifJnSeJ5XZSykzV7F6CfFhpxNGet8guoyHqhuq4FLW6ZB5vit4hUh",
  "key24": "5iJun1HzZarfB5sAHfnfAsVz5XUjQPAWUeQJuyCk3W4yfLQWwn2iz7Kw9WjH9efvgYgLX9Dw8gLwSuFNG9qJqNMW",
  "key25": "3fiVQsMqgcKxJJvnpFJZTYU8wEAwjhTXfbsTFVmNWAwTJiMKsFL46UzKH6c91G7yTbHYQAFKjCqbzVVdsX27XLmh",
  "key26": "K18D4K21UQhTA8E43CsRy2aq3AxPU7fbeerVzBt7jGuFDgXRY1TBJ45VVox5r2kJWSTTHjqaRXFm4rbiXnsz4fS",
  "key27": "28ZN35iy3DyidCULFjARkP49H3VHw5gyB2vyErEnUF4DTU7p9Q3oa5UQdVMCwx8P2FzgVNJZrwQXb5877uMGBDw4",
  "key28": "2Ds1uWPJ8tD3tWyWVMthkhq73twNLwWmKvLuDXioPye2HedB8do9221ZURp1oSU4GyuxfRp7k1zeavVS7UenKAiy",
  "key29": "4cgqxvNzrxtHntPbEszqDNiHom6QK79YJcAHMxZch34VkNCAswCkDp3mUgBqysyiPbzobXuRPgLiTMZ6pKmXG8JB",
  "key30": "4qWazeuGzpnnVjs8Q26GyoGXxhFHUjeMBW4BsTosLSV5b4PYyw94eL3xcehr6e2HppRATUPNfx5kLaz819kj2FZo",
  "key31": "R3FwKZeVWJPMYS4j5tLLzstXdR7Ut7wzHYboBz225ZCUvBU422iVx4UofsWm8xzvJCocBmYvaurHZqzueS1tCSL",
  "key32": "3mxHvnVTH71kwWmnTzA5wfDGXBQJ3UcDqzREbuhxv3EJngDNDpNNiZXF9H8vTWXacmF8ZyrDa5VdVUKC1BoTouiT",
  "key33": "4gHvnGrWkir2uL5vvfoQzHNWHqmoPYKADQgzxLfTp2wUGrWZZCxXpim3GL7HhpYnNRcgFm1TiVXfmNNDC6KTpbPk",
  "key34": "39EoVCotfdhv3ZB8yuUJDLcpd3SJsk5buadCgHjgFV8X9hk9g1Te2TTQctxm8766SN8CjFZRMEVUdshHRdPNHkHM",
  "key35": "23ydUVgrVkZJocHiDLNjJYcUACeV9dTLN8E2V3aFA6fvoQf1686ZDZVzg2YLhLZyPXWj1fnWWbPz9FMsHdzMd5sG",
  "key36": "3ar9aG9ekpehm7pXs9FVcNn4UhjTNDCvi3hkbGUZ8SxEJijaSWsgLDZDX4y6RfeuLcY8k4mDiVpRHhSSofkBWTam",
  "key37": "4D2swpbKYLx8pRLzW7F5o7jdYULP9DrF1o6n7tkUVtR4BAnStYM89sQsy8xKipsK2LmdtGUJ4bPXxL55AmeEozuf",
  "key38": "W4QFaQiGKD4sj29Fgfib2cdh4DNcRJnHauBkkHK5W3EfHBfmVkNxn1fSUNA1nbnLJXdaRs6q7QKrokEPcYAz1jP",
  "key39": "3jFFYt9DmAbhTiKqxq3wcTYkATxSWg2cP6ShYNgVAyaHagkQHVeMQVsv7XsBkv8RngpaPMXiamLXDjkpGR6PveDn",
  "key40": "4asLDgqJS3Swgvdqhnr3Sy2WYZPsHJerUGyjJ8gv4Hc9L1xiUtc73iyCTTDWJq3zDEqqfRDypEkmt7YTYTB9veuq",
  "key41": "4xgJm9qF3gndbxSSjHynT9Dg1ZzAT8dj8sN8ttCz3Fy5ujDWjtMqSiEC7hecDWEDFT2BTkLyvp7PZCvmkwAufCM9",
  "key42": "2cD4DdGSo44VXgWTi27wS89rVg1koUwgW139WuKHLfpuxaG39Ss2t46w91GELhahQ9wU9kvqbWVzRJiHTysRpYBy",
  "key43": "4pMG4kJyd3R32Qq6KJGAzqqvvAvtkhYohymERFmdqAJSPrKicagb6qutmr6jSzbnSWXeJnGjahUiD6R5kKKqx1YG",
  "key44": "5j6TeAKjRto7dkdAvWao1EyKarVJiNmR9ySVJx3oUhNNVrddqnLg66fjS9aNL4LH7VZWYy4ETcUL6cjNSKEqy5t7",
  "key45": "5DgM86ZLBTNTzD1KGo23MxPLtkjhTDgFPCLacwisSTtRGdWnUYBb4gg21PqvqP1tGj61P5TTHA44KVLVT8wLb64D",
  "key46": "3pj1xQNW9ud2h8QB7zamse1JhX3xQShGGeS8U6rYTuHcLtK7KMJ2nR7m5ppaFFYa6MZHQv3YHC3N3yp3zccGoivF",
  "key47": "WpNoCtoZmsjJqGwhQkD7SzfAKPuMVfN8BNYHAdXPNt2vcWwekLtS5vp8mNVULfUzAVfQDqj8tzVtmZFiQBTfxzq",
  "key48": "5CdVQcnM7ws9Hb1ho5RoLs1haYrs4VL3mSvkWRUp1SynpW3urDRmfC4B5766hRmJcnwoKnhyzvyVwfcUjC9cuGVn"
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
