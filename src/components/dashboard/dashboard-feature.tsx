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
    "4jvGJ2h11WxW1JYna2dEhcaP7mjxLv8KD4pAhZcQFDVjq1AT2Y4PWfetK5DzRv4f6tmmaxi7LJFd7Bw7xfqZZVp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbYTMeL9DdxA8RDWKbroTbxPcTJVD1CuWd5d5yPYhk1ctAkA6xpkZaNpTLsQLjwH6uGha2CafTPhxva7mBqijRH",
  "key1": "4edN7YSt84WyKrTVqh8RU6FX4kbQFahpZhutUYWBHnBhDuFpDSzPHxDTaJS8evu9tEwFFLip4bzXsLPQDdx2fDWR",
  "key2": "ZsYRTohSxZ5dfL1KMu4JCq8fjBVyWr9p8eLyX2wddsLW3W2UV92wiQbbS69i7PdPnUV2L2YWFJGhbmdqDMUAUoL",
  "key3": "5P5ArAqKi4epvogAj7j7kwhCXaZJZbdp1PQh6TTFakdVJhBVCMqgPkmkvLyeSgBrrdugkfvYohMubFAqFp1PccmW",
  "key4": "3bKoiXXZkLxq6a3TQv3zb6dH9fdAMoLLLW4eGr7wRWpB2RUALTMbC5Y9hmSfmftjtLWxfbh2rYBfDz6bPMz3nLzo",
  "key5": "3xvagWsWJaiWptotK6RYmMWinaFihy3GwcodKitH5mfgUjZwXTy9efhSEJw61nWqbEAPQY4gGeArxxDHsCGevUxP",
  "key6": "5fDz7tqR6oaTKbE6SupBKmCmWCwTEf7NAPE2u4gbvzJDdPC6Kc3ZmS1HtnireaDUYkUKXcAR2jTN1jsTvafwGUmq",
  "key7": "5KjkS6TKniBSV7AYtsAH1pSADF4RzxXZVAgSPqfFwigQGGL9hqp1pKFd8ptoyeEHJceSAt32ZMNoPm3VeMuFTwe3",
  "key8": "5C6s2P7jGy5xz3TC95QC69DpktqP1aR4arGXbJ6r9VaDaRtxeeYRVYS328HmcyRCC5wn1JVuZcRfn7GTGWoWreSh",
  "key9": "5c7czibDPK74vphwhEwsnkZ2FAHWn1gLTb44pb9LWLiXCqbb5BvihgHKemggTmGZwt9bE7Y91vLjYtES5BCk6aLZ",
  "key10": "2j3agmsD8TtW2LV2NUKJRmuy4onf4A1wuYjZi24ErVWkQ8zL5gQcbpW6sjNkuwgAm8A5H6vsoRxRFG8kwaEDhjZn",
  "key11": "37FMVo29nzejARuVkn3yTr2Y9UCp2PfAApfHyumZztDEvVYnYm2aFtEVaMmA3FshJTLkNJX57J2oeSR62U2myxZU",
  "key12": "kRvLqWvTQ4PxiC1Ak4Rv4cm2rC335S2mrndkyAc6kEkD8obzZ7CUhRHsgKLevH8ypzvXJh488eH1DuXRRUvfoKk",
  "key13": "2YksK2vFb2d1nzDnLAPebWQqWVriwQ1i3qAWmero8nmEh7TTkSpjzvUQge1q4jRiNqyRK36TQB682ogaAvGM2yhR",
  "key14": "X539TxaMMys9PfyasYTnKLZUxaHWSBJgQyd1UZFKcYZMuixwfRWR6G6GHf5VJX7uQkhXQGq9ziRxVmrzJVTsGKS",
  "key15": "axvzNhiP9GEFw6KAJZJ8uHLV8jouiEBVsyaho6DQeTG5eopArHMRJUEv5aoKwHEBN9qQAPbJGks3CKww4ztyCAH",
  "key16": "22Zu9jBkaQVD4MALbg7AmVb3qu1FtsqLZrPgAmejPtpf4WkrXXct578xSFyvCiLtRqmrz8ixEcFtofv1RsxwjM92",
  "key17": "2pNM5Hj5sU8DqeWYaYHvMUshf3QnC6uTRcXjRGhkjxP9jEMAVmb4iV3yUEzyRkx89cF9kr6JbnDPtCoZx8mmQL9F",
  "key18": "2VcoSPbGfihLNrMc1mnHfV46Hw4dCsun6kQEuFqun7ibYjmdDs9dJmT9FvTPCrndvVKqznZqwWDQ49cYyzHGW7aJ",
  "key19": "5ZNzpBZi7LsG1PZWygSuA2yDrdREjg11g2DihyBPSaPhQNXUm4kpW12tRHaTRvtfrTJti4wEf6YrtSp8CftJQbcq",
  "key20": "NUoFWNmAvDa2ia2gqUEeYRiHs4BbgTWW2jW923a6S2Fp7RYK1HJy7T6dstPUEsvQTpY5Lyu4odePYrdFae1hDQh",
  "key21": "268uKGarGXTRyCjfhs7aj5jUpMvfzL2VMwZcrQSx6yYyYbammtTFbrrNjKescswjWXdhwHfe1j4cVbgN3NPYJ1fR",
  "key22": "GHXTQPhJiNfZvt9T91zuKCYspsxTeDVEJQCyD645xZ5C8Fm7u3nx6ti8q78fENsqodDYSi62S1JgBS2HsZwNhFu",
  "key23": "4zTiruaMS75uUAprE7dtZrT7Mv7RVbSfbfujqP9UQ97FrXEFLPhHZ2jnoeZj4U3xex36WbUt3TTTMU2vZY3UuQoP",
  "key24": "4QU1xqp9kJqdUhbbS11WxfiX5zHmszaZoBQQWb3izuMCmBW7PdCnVY6cuKbkmbdYYJ8xHcTXxq1eyurtProh7eqN",
  "key25": "55vgu4EaAUQ2iacYDEvYWtkRnhdfQks6Q86oVRFegVkikJuPiAmSXETAcyqFKmx8E341GnwpJJvoyGvB47S2y8Xq",
  "key26": "3tCMTg18BGwRmTmSnW8E6ah2x2w7PMQYzYzLruhLsentZZrCYhaSPc4h1KVti937TCdP9qs6rX4Y2AqoaJ9DL1Uz",
  "key27": "3pVH2Cs9XRmNgngjbZiCEx5x1GGnG5WCoQitFPEDrASGxHXX2tPTzidrMHJNPHWadH6eQJbxXrQCTeJTm8YPVyfM",
  "key28": "BYK4HGWA8QRz3pvPqnKt1SYksc9mdLrbEqJ9hjhc4LB9X6qFUq9c8v59nSvRvScG6b4pncDpJ4bqXvX78qHwBmL",
  "key29": "5PREaeuhTF5HU4xenHtCTuEQipHdCG8mnrXNn5a6dj5G51BHSEcPfRYQwcVbPEYwebvwZos4nZZDZQ7R7tPV8pKm",
  "key30": "37hez7HnaeMqSoNFmCHhBoF3g4FsE7BcYHfo84yYT5iA5vAsE7qzDjBP5DT8uRFXySQ5BvZzW1SbEiG9HzoZY1dh",
  "key31": "4pAiYLjma8ZXhpsSnLuNEJtxaW4WkB5Rrqkt5BNEMbBMdVSiJuSKk7uzZ2TWARRfcmvMKzC2a6N1sniJ41mo1Z4g",
  "key32": "EwU4wt8q42Q9djVoenJQvpUEnjuRKSCWNDnbrm2kXeV68jUAMec32uaWqN9AGYC4s9Qbh9MXm7VDSY3je8KoGV9",
  "key33": "2TeXXhqWaFjMPNaQkDAog9Tb72UBzmaxD9gnXCLeGYdrdSAbZmFcy1Qb2YRRt9C8nhmgMD1kdm1Tbxj3vtayXxBf",
  "key34": "3ZBZSkq3EQGqsEFVY7wPKtLJzJ5aURWupAXhfY3y1Bqa3DtprDJ7oEtzhdWWN5vaqxLAyktrcbGtBY8iRnpKD39m",
  "key35": "2Vr8WmnvfsWzbtc9xaL1nR6rkHK9Pck1wNHCWt9nTMmZThHLNLbsSTmw5ZFuYaLbazmRs4mDGyezJgcNUtmwhZBs",
  "key36": "2UACfD6k429W3BZJU5QMCqdNxPTLf1R8kvC5e6WVT85YEy2hMBWeAxCK7FgzNugAeixEMYZgXRuNup66XkJnRg8b",
  "key37": "qFSYKCCR6XtjaMMPeym2LE7M4iTSzwoKa6sNxTXKkVVSMcrvhyWQpfz5uoGm16PLnnXffq5Y4HwQEa3Bbf8cAyP"
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
