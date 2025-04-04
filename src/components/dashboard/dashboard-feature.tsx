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
    "wbSDwEmBC9dwCna67xvntwitmtCPf26fct9x3xmvNmNTpLq6aR27u1HGP8CUFJVcrfjwnGRwAvfmT6TT6wZBy4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "126UqEwMRJhkVsNSNUnSGBrs91EtPEfdkY7dfoozub7m7nLRs29ddSr7z6k2bDLQ5tiRGsYe8cQe38MwLa1TGEwE",
  "key1": "4FWYAUKBMHApZQ9uwf6okiptavacrAQZ457ejkNCK9jLgvFxPkn2NdHbPAQavKbhd5x5oCDuebRyX5J7GRfFLyEH",
  "key2": "3xz4c98eyAVSKifwu52ZTbfwTZhJ8s7od9jiyr9PPzs6i9UXZghzpmaAjjYBFn2HF6LJAk46XkYQ53WKkuiNGg47",
  "key3": "w57u2GJmHDYYnS5ywwX5huxiGznXdYa7WVBSpfKThncCfhrE8VNtv8f5nurn2LAm2MGWjyP1w7CjdD7Ub11cYYx",
  "key4": "5w682P3LAZ5g6WK1EEFPYmzqwLdGPGdUvKYQzxv2Ab8gQ45T1RbKBhjXicVP1FjrpC9EkZAVCQ4QsQK7kvAGPQ7m",
  "key5": "2mXNzSKeYPaj75Kgbr7mL4Jg2WxxtYkamgn5xjjKe9krH5UPw7yuDbSfWwFE1mE5d4a9G6aYTzbD7TVqyBQpLk35",
  "key6": "2Qgn65bz5M7dHczqJX6oUg2aqovZknZDF5rctc83nX6AX1pqjmxuWUrkxUDhntZrYMguAx1g7g2L2GCba6ehxDok",
  "key7": "5uPTrMZFLnb1gumEcDmdoi7zrnjQHMz54wprMuAQEQkcKe8ENC5X59szZkZ1NswmXU5Hx4bsfrSTN5cuLKzTC63B",
  "key8": "2H1G1xPXqUSgD4Qdkfx2kus3UVktTY6jYS2VWYP8ZLMbJY274nX3pGYVQtXdVsAkzhQ6Y2RMWpcukSHNGcFXTpD1",
  "key9": "4rZ4VgLupfLiJ8oCHJvCeeJbFtcuNBJToGdLaJXc82RsAEtChV8Fy2wdrJQ2EWx3ESgdA5sEz7JwWpoqFavLTSeX",
  "key10": "5sLY2GkVMVsDqe2XJ1E579uVJfFC9ktpQzVMrn9BdyeN2s7i2orZmURcD72t9dgcdqG6koKeMsMAK4oA6rnji5X9",
  "key11": "3CgYi9pcuQQM3xZyN9U41JbefbxXdQDp8K8fB4z5JZbW9jniuSdDcpN59j3xLAgkjust74XgpXZPYKP4auvZxjYA",
  "key12": "4cYXTyvzvM3r2p71Mev2nCi3VLgGmcxWWC5w7aefAy5MSNDFoXc1N1aDXDAxCKFZ9WZPG1eMtR7fNbhhGbM2ZGBs",
  "key13": "4g5y2wkCpEbUZNiyHSAFqPnTNoeiYc5XKg8R7uaAmcK8smaa7Ucv6HQHYXcd3dwBRKWFf3j4fw36BxxDxJ7zgeWx",
  "key14": "49jYFbnp85oKDCp8rZLMxtvUgJaEnAUvCwXKjzQc526mav5oLuYp8DJYYoL3YR3RfJJw8CTjAQYWTFXzJ5P2C9NT",
  "key15": "524ax865zeeEvTwpPotSemtdwz9k6VUQ2Zz1xD7xUyie7hXkc6GFH4fAqeSHsTUFGHxonbt3wpYgabaZ7NUmHQ2n",
  "key16": "5ZZVasn5sof2yQDkCZu4n1vY5wUQ4RDWWLRHjZY3tREXRHHTAqbXM9aqq4k25pwbKKAi2LvbV68N4xncA6frSPDN",
  "key17": "4GzCVhJEAEVmQ95qdmTwxs7MK5JUBSWWNzAaivFgZqvJLNxcHgBTZTj4a6A1b7BzWHJiXAQ2NHcfsgXoTMLTy1yZ",
  "key18": "58aCVuqUysPR18aK1JPvJwW96mDKK4S5U3dv92DXX7gJPFpWroNLusKxsHSh84rtivF2LR66J6Geu9ahnfMfN5vt",
  "key19": "64k4UYsUznSU7Bdm3D3NPwB2xSLNUTUx1oC9u8TWZVWX1cuRBWPL2eMNbwqwEcUS4WYFm7sm112PAwS874WUgJXR",
  "key20": "2DQQhNdPoZNUuUewQLsW5x31YzUSzQBJymiZE98wmfx6y2FebNkawoeMLDfdrTctwds8AZha2YkfW6xKG6HhtnSX",
  "key21": "5iC29CgP1Mufz7PWPaDm1FXuwm3MgxnKCmt7acJwZrraKCwJe3p8jD8XfKEzaLBFxP4ThRdLLHa9RPYznNA2xmkh",
  "key22": "qjcRkJXh6Q1fB1VrQ8JNJ9TWDUL2U879MxU6ix2VESHi7DtMVbzHfKsUizjmA3CXu3qQ12sxDqQhLJfTebYGPoA",
  "key23": "LEjKKe5watq9NfJ95xsbQxVAtPoCxbhMWLZqxhnQgw6H3FcEDa9UYdxfVTg2e7Z2Z5CooEggy3o332ERWMV9XSa",
  "key24": "3QFBnC4CGG5n8So5rnmEu1P291CCznBPY9hc8RypP2s1TQciadWu414G1JXa44iRpzqkEm14schwwpf4RX3tugRb",
  "key25": "3C4cKJrpjdYvZaK6FnVjta6LoEDZoDipScgAFx7wvLX4MwSVWG4j3ene4KTPqyLS1cdywacCraMS2escKUpXLzVH",
  "key26": "3usNScgAWEPTfUcsNcDW6S7ipKWe76D2v7ZMuLR28LfVybaD8VxReggTAWgAd9BGi4sepeREz2bqEgVBHQkDfSht",
  "key27": "4W4LDU2jcvhr59W7aYvhgt5aWrMVqpCwo4ABxgQrm4drSw4cqViXbYp9Jd8UGriu47ehAbMfQFNL69PnfUGs5Cdi",
  "key28": "5wosjmzHgEouxLwFJ24SgF6quszuJjkSu9rBZLyW2N4pfpb8crgQZXShUp25hqTPaRqJAmLeC2Yt2oCitpAUTz4a",
  "key29": "3cz5YgNhGrGT3JAErzUJ98mbeffgRScBhodNmvzcBFaBWrLNsG475FrBS4shWVhF2vYKnjJuXbDiv2krD9DryxRf",
  "key30": "4cvUhPTkaiwg9qG1wBneHKoymeo7sWsZHKHBUzJ7B7GzZ5xZH3Ae8tspUUkeeronv2NbMCkAW2MReyxQqKfbeFLW",
  "key31": "3V4jWCiURVm4ujXVWpW8bEMQYh5TkQUTdJqcipHo3rzmtJiHUriQnZEfP9F7fdHHiZiQsMMr2kTvn3dx2BzbhsDV",
  "key32": "4NaEeETfERWKyaXmxbTAWcC6Tmytbms9og56jwsoetFps16k7UWWVJUKwJSTLKTjjRxnwEBdPSteK6wJVLZT8NGq",
  "key33": "5jMJ3bqUkXxU2bjzGRr8NKdeqqSybxFiLXGpdg3TJrboUV4bcY9FXhdduekMaZETUEeMo8ydGrxDyQ4mHA4yvXXL",
  "key34": "3ZygnKnHjP6Rb8dhiWrNfLmaEVhaoBBHqngcUdimfv9jSuBgctZDXkbKNFCSqgCfwipDANrka3mCkH36nmp6usV6",
  "key35": "H3S4RYEmtoXBasaZFFWpjRkvB4inU7uDE6zhVePBQyBS2Cx19pjBjLoH31LsYFp7ugUaKpi69j4QH1DHgaFSgc4",
  "key36": "3nYtfB9TdXvStjq6JbrtKJ5WCi2q2piZBQLX7yjkhGuQ5awEQNmL7m3vAAaNbn2zY5TZma3wfrFAaXcXW5Xp4R8e",
  "key37": "5mbgEkkqG7rjKyKPMTJhnroy5Lya5fKq9BPgUbo3zMLtA8q4npRrP6Ns2nw8ALEhDbhsK4JxcrdnvJDW4pW7gXWb",
  "key38": "onXqHKxhER7odZRrS8GptBg6kbm8cKYF4mcptnhN94xNBi1j1NJ3Hbu8X6BDn76uis6zejkCxsByVEPk4HJvqmM"
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
