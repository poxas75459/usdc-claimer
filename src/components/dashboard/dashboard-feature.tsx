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
    "2gJ3SbTGTpr5e6t5JjkETJHS9i6MtphigvhW4wZCjuut14N7b3aREyhxmj53kLYAPnDuAAAJvrmfwJxwRXSzUAK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JoEEZWdfNyA8WACgbP9tdHKVLZ244CuEjfSRvoG3SscN2FkdHkPnLf7UQi2q7JLDWp9HfRmPciFxPQ871dQdHpH",
  "key1": "2FZErU5oYTrDAVXNWBematoxZYJJh5qucvVdxhiUDHv9uzJ4sTdj6Trtm2BMhN83bEd8gWUA7NJ36bid1uE1sebn",
  "key2": "5EWuZkw8acho3Y9ETjJtNkEipDTF63Uv3in7n5r3T9RyHEXeYeqNicJEMnsiDH4fNdto1p91HnSWMFumh8XBht7L",
  "key3": "5aCxQmBkyBLdpRG26VXTxPsXc6MBtNgLumdW8Ar81PDz8xYLTZpc7TrWWYaAPh6oim2vAmQF5azMixTBkCxnEYB3",
  "key4": "2fDtsM8NnDqh6RSKYHj4LwFRLchg6BZ9joQWq4rWbYTShVk4JcvZoBQDsXuCPJRgQa495AFij3WWYhf7trizwxY6",
  "key5": "3EXZeeGZE8H4QuJ7yehbRzKUPGwpzLgzmHx2CWMQVQWJzf4u9jeovw68q7uVh75Ubu1TQAP7JwzZYpGZPF6gcuhi",
  "key6": "goSJ71DKqNpkTNurmeoBk8eW1uREPYG6vCzpcDCMw3chGL8RdTEAgHERQGdMMTJ9M6rPsHCxLPhUM8qa8uHiP6x",
  "key7": "5EV6a2KCzr27197FmiiUPY5FRp4xGEuRPGyBBNfgr4ELGwGf1xveR3rhNbiCVrtLUs8E2f5K7kqxVQNsyn2HoBop",
  "key8": "2pKBugvxF1MPbHNWPao9sTXPJZLBmoEAqg182T1GVWAVqiDi6dpW2rECmyUa6RgfeCS7dDA6TNZVxaNFCLM34oSJ",
  "key9": "4N7uS4SFKmW6mkB9oVShu3TuR463xe5apT5k9HWQ82Lc4nWTKsQhiZZuZykb5ZDeW2mGj9CeABZkeg3PVfDePhfr",
  "key10": "5dHnuNaDk9ZTLg9TTiphVrm5Uj7EadN14uX7KYfH1r1VJj95g9W5TP8HPtsuYD1s2mJcaAC9Piwy65fSFZjG9YCi",
  "key11": "2f9iDtePApFtqcsjCZTYrXdrcDL8F9uB9V9NpvyrLg6rw8G7cPaTHV8Hi2kWVs8tLTt4EtwQzNTKE3d4mQKNSjwV",
  "key12": "2cwmo1Du42gYjxfUfhBqwU3ABPdqyr2DuPHGhxivaZ5brNVAPqn3tcuzBSDzu5L9qrLVoZTmNEsFaoPULNZkbKjW",
  "key13": "ijz4yFC78QdTQeGXq3HyYfRPTJL1UY4kovdFMA7VnbNaizYjK7cePTUV4tkhkmyP3BzkZFXuy6rrTQ3UZkZaiRr",
  "key14": "3Yr2GqwXXKgkbvuKPLycxanHfAuwA23uT6wTUfAF1J4JGzANwG92FpP7rWPUFUMFMjSdQcB4zSCF5HLhmrrYTcga",
  "key15": "3xPP6WpKgFQNdApvmV85izFBEEo2HFmu9Eo7yPfeyxfeFtpBzAMpnMxCr1ro2i6fpWeirFwYRWEMrdV8sFCbpJ18",
  "key16": "2DgdJijsLPHCovMMkhpBzHgpcFfqNFySrecgYaHyCcQTRMe6VvjsR1sFQTivjTobtc6TxmaxXSLFmxymNrBADFgz",
  "key17": "SUtzYEiV8HEEZg52nCkodxAsLbGjYK4GCUj7tUffiWHwhGxMzN71foaCnbJZk31j2NYefQoBmdNKdv3aXT4jenH",
  "key18": "31xuBeRXWLGCETKjzNpU2mBLJKmckQeYTiNNr1yNqAffvpVsiz77cDT5FhmA1Bw75DodEBkUaY2Vc1iqJa2itBr2",
  "key19": "5dn7YdEpHU8mBD6DwC24qvsbhyT6CkUU6AoyjEKtjb7r35YFo5xEgdi3pGBVcVvgpBAtC7EtmrUEZa9ze7tFUtLo",
  "key20": "2XEf8yWBa3JHggnvYEM4SHVrhu4CznH8J4adiiieaviN8GE4DAYFseNSyo3WXTGWCPCBJ1pqYfpG5mQimRduRRJc",
  "key21": "2TaU8BQ1LkTgfEBjMJSDheFc49wxR9FDdNtxQnYk9ZtmH1iFoiNbbn8WaV757aMoK8ickbW8cVHVojEHHaQ5GumB",
  "key22": "3ACyTBsQc1pFegBMQAz9SPPWAve5PtmaQCz1jsS8HVrqUuv9c4RbZ3ya4JyCbXNEh7h63k7n3jVFbw56Xk6kf6MD",
  "key23": "3Ymw4FnkhvBz89Ag6dAz7XcDN6vLigGKaM53cYPCKqrgoqTrGWxT35xGzwNsNMFEm8aQ4bFNs1pFVihbM7YaowAL",
  "key24": "4DHQpergrREJinnbFKSLLm5dJqZq8YT37H2MD81rtQJnUtiEPZE1rquj2S3VHvHbnXtxSMYEDEfB1KuzkWhCB7Mm",
  "key25": "2N2rTjidkjLzXjDsoeqy2KiR4huGRnF6J2vTg5vbZcpHtUmLmZnmN2N86D2nwrpJgfo6czEvKjZvWU3tZrotkE9U",
  "key26": "3WpKjmii8rhygh5kkudya1jA5uzHh3QaQUBgNYTJshF8xw4pLEFGBCdS6V8e4ztEgj7YojALANTEv9XVYQowj435",
  "key27": "3D3KKpGCA6sVqfgHKgMMMrryoVqTGWdFF2cHuBr5RmrcrMAiq8cCaawV7e94VkSz5K1kc1ZgkuFpp6smWW4YVVZt",
  "key28": "3rMeoae6hXFXYMWxuTzYrZPDKPSqoeKNxqkud1NzjrTCzgSTxafc8V3E5c2zXMQJPR3oQjgDUdTVucNcfDWi6bxf",
  "key29": "29qYPrNvk4joCcmB4brvfhzt3KzcpziX7w7ZxEYoRuwvYbvRGafgkm6KJZ98K1BtcWxQnZ3ifSvv1Qqbr7yCsMXU",
  "key30": "3bczgwekZB6PZRuxMnNNZ6ZAr2MBzLeKEkECHRnqJqs6cBTbdADbWPoDtGQiZ3LrtxzeERQq8zuqRfR42Zm9nfJh",
  "key31": "2G2MXny8SysuQbRJE6w4imrSBNd8crAohmnmkc9NUZv212RbHYrAW5QD8HhNRscpdR8Ws2oKNGHh9r7QvF1rvNUS",
  "key32": "3fwJPwsaCFPWyYwWmsJ8RP3WQT1mJJPmKKpydRQfTgPtYuaeFyKweQBLg8BeV6uAn5zLtwTS4KNDwn2GQGDEBgy9",
  "key33": "GNc1cxV5EE6nDte3Uxj7q5pobjPgS9psAp8UxDosU5hVkSDrkPCpPNUe6EpXT344bzhzmixJ2WjBshk1iHs8w9f",
  "key34": "369yC2PGJAW6ty6wiPSMB8ccMwLeocEmHWccsfGZtm7NxXJKvGScyiuRq4i6Gfrx5h77pmeKkvzMahNxJQ3SyFjZ",
  "key35": "5mwTpS2CGoAeiEsfBJgwjqCmAbVR8G5rHLoqAcrB47JPWwphYum886DiBAW8KXkHY5UzDFQbJT5zSWHy34A7tLKE"
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
