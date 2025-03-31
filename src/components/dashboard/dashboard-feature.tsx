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
    "3EYBRKNcodgvcXuq7mfzQbHaCgPwmmWeYk7Hoj2TphjuwZE4Cggnc9zZKdFGm7TmFu8MLTAk4j7ZrZy5ff2jyghP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zg9b9CpLhMDBdd51c1gBgRaaBMgyhZ9RJYqigaD5V1gavBpA34EGYQb4E3z44BR2inyqEs7Z5MoFwASDW7PLHHP",
  "key1": "4CoLbBLgMTxBPkJuVCSC4TG8LyvtHeVb5hjKZwSqdUMuxuvxiNh59VBd8ej6jmsFg5yUbf6gqnQzARV9Y6Pc5M1T",
  "key2": "5KKuKnNT5ZakGMLjofdd7eL68WWnLrjivmGoFpVrqise2LSjDNZkV4nKC6MLSfvPEWnDqcCK3LzsR3wERhEy1fTJ",
  "key3": "2J1CyjEHQYXWwxK5NGQ8ZudGtHRDnVJb89FGGSCkCJSJ9SyQCwb657p5bQs3v8yAnWkxzyiLQFAxxhtAmWtV7Y1X",
  "key4": "49QrFAiD3EPtfBA9sSopo96Y3oQzjgDZy1C1zQ3XRjsbr5ERKk9PDQqZr8Py3Mqo5Xiqft84YHy1nuh8fmR2Bu7S",
  "key5": "64Vdz6caESdiNneXz5FFkZHmDEGFTVFqSeJJhvgq47UVyPTu1chnS87yG3tmcfzz6DTkPj8rri5sLx6uZXT1xAF1",
  "key6": "32iFtvtQ8B86EM5SmN669RcxxuAMXZ7kofPVZTgcgYif7e4FC3guYjTDCVJTh8pRgvaeZEfnyRo6FPmJWzKQUD5X",
  "key7": "4ty5ymVX352WJCES2h9Nsx6uk3XqNBCicsBcEEzbTG3B4QE5Amga2pEyQt8uXcQM9h3WAEynrx9RLZNCskbQhZz2",
  "key8": "gvhyGhRmDVQVLwP8XKDRFDYBZwUAkMDfhbbYRSC8fXyRxUM5THPW83sBV9PbvUBzvZadUdgDpPno58MR5cNBUvh",
  "key9": "58hqcLDDh9HedHsbw6C92vZrS8NRZbcspEGQMizh9z6mrLf3VE6GVs8xgBeU4vXBVnsmw5S26vJpkfSwntoYwaDM",
  "key10": "VnSrJ3y4PC66DGDZFyTsSSMF1e8YQmY1HWgQxU24ts8ZH9F8Cpp8GFDkpceVZfPFAjyPWNFpcbGMSTaUADTmXWR",
  "key11": "2Nm3mEjqvWRKKVSLrcoRJuPvMmY2p3F5Fg7SHsmFET3ZyRFzJGkPpXhprGiowq9eaYCkdKk5CMLBjo1VsH255tLb",
  "key12": "8aB6fcBn3EeU2kWCSuMt4Eq7GCDYfAdFAQ2i9K2f9e7DVDNHE3Pk67EtFCUewhbAb2MXGedYMgExmB3QjbQ5zqX",
  "key13": "4HRqw8SdTPqopz94miVYQssVzZy3K2Kuh2ZfWKAxXi1vR6Y4T3TQJcm8HKoyyJhpQ6CBoBrM7J21PMQQGRzGVu55",
  "key14": "qD9LsKVKZjwoXzHhKqvhspKxFsuWEwH5bHDk8G7shy8SFr5mJ1pVDoRhFbs1tuV1DS5wxEK1NxwRVxsTRJhPWFe",
  "key15": "3u5QY52NDqj6XjP6WgQ6YCE1nEPcTujGxs3uC6fazaYVrqcTiNUrp8qWUNiPQqSoRRhd9toPKJCcGL2t5DoY2kQL",
  "key16": "61ebKqwRgZHoS6vGqe1fC3jUJvrcXgTR22YLGhkmH8GNgBxsr5mnfpfttseTRPhW75zafw1MRkvrtoxaS5wt8vdc",
  "key17": "3tgscsoQmHsfUyzR291P1Q8DwE4We9Ki5haKamqjnkTTxzX3magAKT3hVkQe6Moy5Nqjha9qrB4GdXqEd6XiuqPm",
  "key18": "3PJybrScTS7mJFAgpWX2zAiG2QwKbCUQ1qqTUVu4kKcv4UrPfEZUej9Z8L5nHenpsCG3rENrhXACtS8Q3YZ7pYuV",
  "key19": "3rY7W2znHWZBv4jPruv3qTdUiVEKP6CPZfWyaosQJu7xFGAJPk7DdvKR9XPedagUHnjigMopaeSSLTvyd3u9gWo5",
  "key20": "4PbZmZUhXzj32dWjx5ZhzHoJ8NTUnWoLRBy1SDm3fMm5am5h9W976gQ2FQHY4jhqYoxLcEv3WwxvDvoaua3tn86D",
  "key21": "55skCXzmTe3o7KoupEB6vDu2oGfajYTGyTFxKyKvJxGzrtfYApAcb5j6BQWau2cS3ExLsy8YU33ZtEz3F3vJPPwJ",
  "key22": "4Yaw5ryMs38SXfs9dziQ4ku54sNB2wXbgv1Bvrv9yEUwznqNzUeesYHradUf44cfEcA5eUa2mFtc2fNs9eDMVfga",
  "key23": "2wcDmsZGV1GZTUA8zqVyo9smc9KxKyhg2bKkmdSipTtj1SBmDyhd9YJ7tPP34pBpfvDaA47kx55fPi83zoMpUusU",
  "key24": "4RCVRgAtreJd5sPfj7ca1oNEeHEQzXTdTns8jUEQS4ybA3JWfoTfPwie5af89dwo58gCsuKq5EjAFeU3Xj9WAGD2",
  "key25": "5paLdFMSxxjhMDgmjRryDVAMkWSFzT8SXfJPRb6HbjpuTdomC2mQqPsi6F6phXZWxRJxVd9dbQf9MGLiT6fykeyZ",
  "key26": "58H4pRh2nLvY2E5hASx97MeGqqPqTmvTUpdr7CFukPeHVYeD4ad2ACP76PpSGkqRu3LxLKf9SsY88JjPW4vxPXUv",
  "key27": "7opkdunPskiw8JN6gai9ciYBCmCePjFU3J9cF6G91cZxdBpCLjJNR17h2Qkqyhn3BRiFuWJDmSs1nCy9etd72xm",
  "key28": "3oWpUipnt1MDTyVR8AiZoc5yh16nuesBJBNwmRCfS2GYwMZKFTBfwx1pDPzEUsn8KDtgfShCG6CsgnvfQQdhzWMz",
  "key29": "3AppBQws6oqrTVdbsRitU2fWdvDDEuxqVD97Jhnb5qgPNZx6zSmbPQHyFxGpLKnV4Gf16MFAuBcHxka4puB3XkRB",
  "key30": "5amWLpg8uA6PFoQfrcb1xmfK98jAagjnK2KUjhuDWbzyrkiTkzjF9XCc53g8mNsgMr7S1gpPdKnGo5SxfwD5MFHY",
  "key31": "38r8tQoSg4tSD5Bcq9voG7AbVRUnuvGoWYa52R1tMRsWYyyTZBzS4NJdD54oyt94PgXEdCxQRXiW7eiFsDNg4QWx",
  "key32": "5sUnNwKLoLzxNQEGfLpQtB1aKHjDxCjz3phpSxD9r9poik2YVmdYjqmdjAQZmemJ72yrbny1NGmUtnT9JgoZDeib",
  "key33": "51xjTobYsu72sQJXj62ZUPUjSST5F3TgEcsXAgz7nzrxwpTey7YfhY57gaB2UK2UHKom6YzuAqujAbgSACgJWwKZ",
  "key34": "5hmFP28BqJiEjDNPLAZZU4yJAbG38MRsTF4uhnt2ciLYUAfeBhD8Wxw6A4iDPFRJTwPu6LbajQRMjXyZqMYTMKYq",
  "key35": "4aiGvPmCqrzhh7pWrn7WestSfWVspmKn9pwKhrZwuJxAoPd1f3SK1ohLkv6e9vyLf5ZYnGXyVX8indsHZc6tsZc6",
  "key36": "3YKsQx2LsiMebjTUru2irQ46x7GkuwQwvZFuJXWaZdXD8CYfrw29qwsLLomkJAC3b7NWh1h8CjTMxAHuExHbn6PK",
  "key37": "3iFjNd5pcNgj16uQvdNEd9XuJCSDu4XAQ7hfALz3DpWj9U43NY3UZCz1yzo2nGna4kJ8cnjonmQXcd1vswoGjvp1",
  "key38": "4ZKbBxDf5FJyrK4p1gHKgqqBBFEjE7TJ5dPKnretKu4tzyzdvHP14rMuwW1rsBukRGoWdBQW5McYYp2WKYafGwmh",
  "key39": "4MN7dupQv4j3AVh6Rk9usZ4FH32FJHJQBN25KmQ2XfnNU3Jf5BZPYiG4RqJjfqznzwwQGp3Kn6jk2btdtxCjNMsy"
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
