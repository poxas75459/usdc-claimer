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
    "5DwY4jhxvCzRQu7WX4ZsfdwtPTTPVTgPgod3Jo8BZu2TR2qfNPihhTWWBA3bPwjAYA511bCAKTNdmAgt4zvX3fhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2deMUrqvF7n6LmA51C99Nqd4DRmkGBAMW6xZZhUi2PQrS7iSj528AqMMgN9Dg2J9DghYLsmTCgca9S7e2Xb6YedA",
  "key1": "3YAMYtzRquiFFpLyTVMtNS8WDRwyL38k1Yuz2pEyNgBZMG5QhhgX5zrKCfKjUSo5v4VFU6CxW4vsA3AgPSLNRb16",
  "key2": "e9MyUuMva7DpzSzDE5ZPmYFvs2oSezbPUFftofKdYKVutAfWLLF3rHvUdgUk8PVeQDF3NAE4f34oGinYPCitFyk",
  "key3": "T68hW7eavcaZY9pribTyYFx6xWg8SwfZoqmbuuUwhveWUaQiyaLTDEu53bPfYoQFebLsZMBuuHMPFS4G58gNjRy",
  "key4": "2Yxg2Xh5FcE9nPXbzzJHUWRgc9XFjZRd5hprsVDqqV3xzdfKrtYJorXtphsyfsU8L1FJ4MeuFg4m1QgCZbnSuYeE",
  "key5": "SXpjrLDq8FDTqBMofXMpMNkeo74raeZgSxZx9NFuvP4MvJ2hTZp5BMtDpbAKUqsfKWzDiLuD2QJQ5sdWHcs1Cao",
  "key6": "J9y8HHRbcLwqnmB7g657zyNYA5FoceDssjd4gZxwnf46VvxriNkHKD6h6DfyZFXkuzcu9S3WN5auqPdkPa6RTJg",
  "key7": "9PAhJG4PprpzkTpoRXG92cj1KiEMQV4SsX9r6yoyyWG7WPNErY8VK8pfV5jwoLNJHtQ8b3jg2MW6D2usKw9Bn2v",
  "key8": "1FJEkc2AN78qYdR4NvXW2kxivQyJx6WoaJEswbvpaMRYGUnneyPtWjfd5BW7UfDhN9jP1gzAoLCCSUp6sTzDntV",
  "key9": "HYdqMaKDkqYta7G2kbXYfkZzetqZa55iu8y7Gzt5TH8QgWe7y18y9nFhG44LF5ZcVjYxuWnwju2bm33K1ubcU8C",
  "key10": "g1rGUEVhGJDfHBAVG4TRpMhRQ392Rre9qxFjsPNtw8a4w3WjPdzDEcmwWdsKktCubobfKmJG84XYmzU9us9VK5m",
  "key11": "vzNMjSeHowWychPM5NGvwK9bqvbeRr9Mp3raZFjfWMMaVN2r2mKXvpfZtytH9zCGdgYuBV83S6ERSZf6antrEbX",
  "key12": "2PVGrFzW674tpg5YKYNm5Rg1Zux7HyVvXrVM9zaSDaM1qaDZJBGZ8Ji934LfevA7p2DRCaQPXe87rfSTfft6cKrv",
  "key13": "65hL9TzvzxFZX4H1FAzCwU5U1JWrdtK1f1Tq3tyzdyyGu3xkPNhhhvtL54vidDGNNN7nX6yTEFpr5eZ1GsXE6Ci2",
  "key14": "RwcAFvbs2MinYTTWeojYFcbDu2kEERczpqsvzWJB7smVbKcPh4ofisCEYpV7rHvt3n3AbKLMCv8BvxRwhU4LZgE",
  "key15": "2KMZKRbD1nPZt8hD5QbBsLXFZ72urHBAZrKLeVkEv5MrUfhqLQGSBcB2umRPHbiMHJ2d2NzSu8XXhJ1K6Pqo6jSj",
  "key16": "5ntzir2yMNuUfciVZuUV5mQhbq5Eq3pE1apRkXreBJd47J6CAWKqYCHy312YhTFhTfzr2guBdWCpXKgqsWputWrJ",
  "key17": "ZA7jjFwm14L4ZgkCeXMw8gkywnPBTqUDWSp6fd6GEnpKTWLir29sue21kGnkwAtPXovNKEc8oTMVoAmgV99yzKS",
  "key18": "3atrBK1MVX4PATxXrxc4wJKDoVVkSprczTExmvrFwGzpqYHJSmSutEDXnYLmnkDLPvM8w3a7A4ofvnyAGeQVWzKQ",
  "key19": "5Tq4XZDnrPKgJPGSqKENPeFnW9s9MYqhX2pUwfSR1HerZetMoHWuf54cmGEFgkCJJTmaMb5nXA6Pju2g5HMFfnLU",
  "key20": "5vgevvUrZici1b61fBhnLkcXpgcvJ1vqfAt2aiEzZXcdohe6ARcxvXSAFmfpDyfdJcr14udm6F96QddSSfdvNTQq",
  "key21": "5bPEuHussf9NCNGr5k2VFHuups8NXK83TbAetvk5NGAwMhVMG1MjL9Bc5bvK67DrN782r7aGfTZ8zaEKkBKGWerf",
  "key22": "4fnrSiGAz6WDe2n6z3A9MVqeWTWRoiDq1GB3bd2REfaYMr1YLwLbEupwMjcrvRsCLjYTXzqTp1wqJhCBauRr6VY5",
  "key23": "3xqmUwX9sZnPa82FbNsGxQVyo13GMZhpfGn8jhQppRfh2eHt17h3rMZ3FMXRVh3boZAQE4oLRVPpSG74LmrPiBV9",
  "key24": "3SfragSN6UoUSaW9RHRPqcUZdALnwm1KVH2ssuKkvfqAs45bcrPvyy8V1kzgWzvo36tPJjw7mxKKxm6ZEJ3iWgyc",
  "key25": "3SDQ4oqCrNYLTrDtvJQr4zGwZwrVnBZtE5xnT7i1q97TZRbR7NsGJMMULWkh4woYagy714Z5havPX76NWHZFy35R",
  "key26": "4AenMrXNKARVxWHDWitLxvQhFEMzBFJNCRDLCAEzW6EvrVEwm8naHKw8wQHnjjnv4Z3iKJ1Pg1BcA9sguVHJUFvm",
  "key27": "gTAeQ9R9xBccrDqTUh3LTq38pUtFMC9oP77vY37qgN1gYNirCyb2HpEsnkM3CkfWv7caRWxQbf4HRn8C3wqycoK",
  "key28": "2AyEjeXmUeHknJXBYWmmUwnyNKMXY5cgXw546KX6jDB9BBV8qKhsGFhkTzJLJJrDYtFj96giTq4jTVWEpbuC9aAE",
  "key29": "LEq7Jja78jdyZRKCFaQA3dvdXNFKFLLaRrgjkntjtbTYHk6puHHyozsvzzkzi4iBWZ4zbR5XVACQPGroyBtsBaz",
  "key30": "raqFhmvS1fYMPRjrczc7BiShKWvbHaUHxspYBo6Ahv7TzerykoU8VL4QC4UKwdAeLpa5DVVsvNqWmjAScsLhwQ7",
  "key31": "55pwhwg4oszXumDiqa61gMswd5ik8BMnS3N27acrBod441R3rRm1wrtXV15Dt3L7BgFENDja9jcRpGQNcWqoaBAM",
  "key32": "27vdTp7aezrrSiuYeDmfdPA6g7WRY5WpP6JCBNanBRxmKgGaeG7p6DMVSGg7C8Jxva3wq5uoQVeQaXsFeAt4csFv",
  "key33": "3DAjqnoVvMxgHh3hz5pzDLJK3ghvhWQJK6rJpwTV8wchYjRYEboN9qfg2ezUrdTKsj8pwoYPZpxXsRHgvQYq1yCR",
  "key34": "3y6eNezyLoWt1yVtTKDeNrR4nwoPnDoxYqRtr2bjw7A1DtEfvHG6t4DuqXKnqECMMsjzfZ8H7pqC9EsKAFsrZTwj",
  "key35": "eV4xeSwK2G5kLWL4dVBXPnmUmeiQ5AidvdJBzH6AkiyCXWMsGbpM3yEV7scPVRkPZkdxmDf8YdGk8YWQXFP8fFx",
  "key36": "KGtqCybc37zUVKcSJ5TEZPMDtnqSPS8sqNNGwSoLMZSKdbz7yRz5RivoFpHubSAZEme77fmR3gciG11VS9sb966",
  "key37": "4Ract6LSZgPNWpKvJBjXpqquU6SJvSJtisKrgPjzUTEEaB2vt8SVT3TjTMP6LgiP3JTAZxsCVSsvukon14YYXwgW",
  "key38": "iXNDSnLTq1PHE3ES36Eyr7c3kJSqw1kwja9QeWx1exj7dpB22pVqfAoe4nkxqa9Cjy381HwMETfY1TE3C4A8QAZ",
  "key39": "4J692GiM4AqGYVPDBUG3gTKsxDNfXe7PuCM6Hs9xbVYzNF6QmpHioA9Kqg8GHdEo8ordFcUrBY5wmcVoJe7aeWie",
  "key40": "4PwhRttyzsW8VB2w5yjX3N8VyjvBoJUAG3Xwr8vWkexSSxD6sA4BCZERGoEVUCrvKMxsG68gi3eLmJg2BAgsiBMU",
  "key41": "48pbkxgVoeHVWRuvyqVxCmUvGjNdnDVo1wMz9rXt5NUdFq2QmtEaqwJEobG5v5uDVhWwGzdEZZ2oDkgubbAmjfVy",
  "key42": "4qFBX9hiKYDMCHrcsq5uWNGq13wdVskMpsauScjcsrhU7bLbwQvWRpKLpjo2uARFLfRcdfzAQMHocfduVt2PjNFc",
  "key43": "3XG3JgNRASXCWkS8iwbvGwApeehALyFsuAVzp6CrxU2rCUaAg4cG9vkLZp6APvC7o81Jf3Md9UZxv2mcks8axoPr"
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
