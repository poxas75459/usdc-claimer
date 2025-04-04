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
    "5XWbGDUi1QU1Bo7r3N4AajpHbSD3QXPeeeFgqEUnJorcjM8rmCnRD1wKRqVJ8itkoccwwnRGcSiGLbkzaeiSaqer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHGN3wM25s16mN5NS1swT8iNBPnQtyQGPsg6SKFyAfsVdudcY7BE2iaEM1Cj4kvVBbrr9TSjG5sgC7jE4Xw6dY7",
  "key1": "3p9aJQBiD34paRsFcLrDyWSfZXjTswzHnScDbL4Bpjr13qAusbbvnhhQxkoCApLzamj7zh4cZJ2w6RXzbfn7c1YG",
  "key2": "4zyPR9B6Y7Pfna7D9mwTviw7asTFD2UjsYU88CN9mSRQSKgjPehAxGoQ1L4CgLPWc5ntFFF8nPEnhD52SVusqthC",
  "key3": "571KLLTHjLe3raft48F7pX5Q7F28mfCxgzU4tfhyQUDCaF7DCGrgA28kVJJihbgzXNix7SDiZ5HyRdNN5bkoNMKS",
  "key4": "1RaM4PqHBL5hoJCTo3wshJe7tCJHri8YEuh2zUULLPRLa7NCaQeQj8ZFcKAJURKqCu2EFxGpPwaq2dmHzmnBTmj",
  "key5": "4hD217VUtLQzpf4VTNeTrLER3A1jLoBwugGCbdnHXWeYAtNyGPABBRwFfitfz8iWypiAmcgRsGBLyyU8jgNnp3d",
  "key6": "5tGV5LS7ibhir6TeQvR2dGDjDnCBjCoszCYAMbvoffxWcxraZtMv7tAPr2JBTLZjC6z9wbgdEKwWnJSeaKXfcWVj",
  "key7": "5PWeQizVcGhbwqjfAtSi5Qy6TnQ2DPcGengsvDbV7kMvC4kn3HQHuoJngNzPFpTeK2W1wbd7rsJ8mEe7wXusUs9n",
  "key8": "h4MZ61BcvAN4td78HVZSZLKdbvagFyWfN2siapLqrAYuF7QvhFKcBRQyjoHabq1CgzoJcbPRAEeukgtSdp8CeSC",
  "key9": "42411Jc5YuffPytvjCkGtVx7FTFdJ3P8xemLXiaUs1UFheXLFWWnuaXpm81wFLQZjg3TCgDRk7QTdBEnRZK9QY3x",
  "key10": "3Kro4DvU7ENDPE6ddDzua9nZHhQeZashewCex3c88faFKqtdANLs6BsZknu4QGGeNYNUckDtj5TWp1eDuVu4ig6T",
  "key11": "5pYs1qbBymviPpeYafyB4Ap8sH5p7BkDZcrWs4vSivf34jxef4PrbtkPd9DouPJDVHYiEKQmUUdA6J4RaJdt79op",
  "key12": "2i7YHEUZRqG3u3bCv4ViJD8iaj4JDZkuQBmTr8mhGYNuB3mSBuYGubMX7y8P8kTPENjHigUkuYcPaaoy6ktLuYGG",
  "key13": "53genDvqoFTY9yPJ12LA8PoMJAiJZs4sB53Ros5nKfmasJouuibGxLEiXoXE2D4p1HVfzsweBA2HXb7qzNdLv8Ty",
  "key14": "sW8yuTjWQTbsRW9mn9iUUQt367uetqDrFSpKuFRvTCCNAQpVVBknAHCx3SD7fAQq8S3Hx93a2LQcidNDqFB1PVo",
  "key15": "7SfEFANaHTRvi1PPgMLehGK1VPaSYCkT19wnXxRD9cxmVXjXe32wTYstR7SmweQLvosjmD1ABk84tTgePahv7Dh",
  "key16": "4vmdWUb9f82N14J4MXAw1EkMrHwLdzEBA8K8pjNTHxAyYv6YBpeHhsoVSwW224363Guo5sqXG5yDijV8ZCakGKVB",
  "key17": "Yok1Ajz8HxqmJxY3i1UEi7pApgdLdXNg9gXHQQo9HCmT3xNgC1tjisx6kJfGwgphpTtC5SnbWaTXFaNNPdBNe4d",
  "key18": "WEguqqFaMrej3A8EpEZQupnrwSvDJZBbrTEjFg2Qj8jkALsxXw2BHmpoj7ddCKL7ojN6hzq58Ds3FWpo8gfdJnR",
  "key19": "3wQ1mLT9Lv6MLGfLmxQLzSdCtd3kM2w9Ksat1hscSdsAi2fwq5gWXrW21kKGDkN6xowoFNuu3jcC1efkLHpwzTtg",
  "key20": "3vVvzzLm2cziU4kx49WKJ8QFMtKivMk72Er6FsZka5hniCq92a1QHHcBBGprJndijPt33Z3FkwyEQStyStUMdxHs",
  "key21": "2VMdRkxdWHdfykHSZLysgdaUCDnfGbvjQTmCGwDBxxUB9Xi1HvRD1sHWrrt7ru1jkmerokZnP44qNWqbJS3N4bcS",
  "key22": "46psTRSPCX2AGN39AF3fMu6rMkPU4r4Mg7UaTreiudVNQKNdTD3vBQEMZLWLuwFEGNL2DZYfyw3t29DpFetQ3Ddg",
  "key23": "3w8hmFuK5ZAC3K7vcSeNkL1WjNxgSPnAfuRb3G4qGNxp7BFxLbbwqQkvVgXJt94Lcqd3kufG1uWMtoEeRcFNnUjs",
  "key24": "2viDmQi1ShMy61cM8GC9LVSMG7xNSP2z7owTNUup8itRtZNTTNJV9TPuZ1ye3k2HaQALF1GDPanYKmMzPZPPLCRa",
  "key25": "5MuhUW9EHTrYPhvSZmWvGC45p6f4PQwdqfB7gssqX2xqi6hjYUTyRCEVb6obCqJBpzF5foujgmLDoUtq5pL4ZriE",
  "key26": "UVY9S1DzDJU3gERQ1pSBSnyBPJiNqRnbG3q9Eog4M13ieXEfSgH1T6ecBKBtMM8YEd6gvuqKNv3MgDDRRQ3nfZw",
  "key27": "HD2x2hGYq75Fe966tDJVoexJ8uoTdofzFByLNCNHuagroReMu8G7dn7KcMAKLdn84tTbstEKzQ2Hdzgq6f6yjon",
  "key28": "5dSwpnAtUqDxV2FpbLoLHWxLCQoEmuWpigp7r2zESdDEgbRzVNXhyMGA3pnToBG29PmPXfkUbempkyUioCJ4enZb",
  "key29": "3YQ5g9Rr2DiQHSSbndrUmaeJ9rn9Y1fByYvbCYatSdZFfoNuD9zTciYxybCSshZ9EqPDHEoxk9VRsdm9F8ToYUNS",
  "key30": "2nnLtM94YC1Usv9XRguuCGWsMMjswshFAYHfYtc3yPZzL32nT3MU9S7Uc95y2QgcNQPBUZU8Ruzs17Prmj368T5L",
  "key31": "2GDFxWgjzxiDxSL6T9v74EvjV7Wea7UcR7esgGpJdqvMqcso9znno281qHSzXUvsMSZ9oW2xpe1H1nrEmBQz5hrh",
  "key32": "5seyQzLXYretXzthXy1GLXCF8GUP6eAxzDevhyTqsZoQMcmRzMgsf5CTDqGxpGzA3HkZAi4tuBuA5BsY1z2b7ifT",
  "key33": "4SuNvjxHnQsYvmP4uTMgYfa2BWtwfqm5PgC8WrjoydqEb688vxjvZbqSePEfw64a6TTYtuBDM8VjoSnpQjQUjkqB",
  "key34": "5LwPLvu8TfwUfC6drqyRCdkFdWdiG9KYXkLCDstCxaWZAUzqrXpRmwAinesHZ7n8wYMV4X74MC5UGJUmynr6FRn3",
  "key35": "2TbCr2b53ZNmK2FdAqa4UaMHKeJadbreNyEGRNUTwAHFCW9MyfjnQyRkHCyCWwEmPcr9rREphbMQpxyNhdCMmQge",
  "key36": "4v5pKuJZact53SctEqczkAC3QLCxdybgiUZLCyhXxdwoinm4HrZr1YqmPv8Y9zLr48Upp8GEfyAGpEefYVhXxJXX",
  "key37": "2wWh15f7aMQDsWzWpKvLrK1QYaRadKKPqaJsYRG58H7WZmpLXSX7MbsNSPF1xbXx5bVgoMoPzxnTBMeUfEfsCVhN",
  "key38": "2NDG1Y2A53ECvPWr7Tq4miCMMh5HWejBPvzAtKtsknPsL2SQLGekA3BhDs96urpB7zhbtuqjVN5bx4udaZ2FjtnK",
  "key39": "5MN5rpLk7Mm8bhM1nZJ9gXQzYHFKmCwQo2Y5diQH18f6syqok5YXsKoEx4DEhK6z6534wmgBh3uZnYbiEc5JB6H3",
  "key40": "5KevjsVq5c6JV4hLJSMWKnz1Qti6FgmuadbNtHpFu8fW8kMmv6sVddLgnkz9LfA5Daa85NaYLkfJsWAQ8pobcsQb",
  "key41": "4U4bkLTRcHsYf7UN1YVwWKWa12wN6pXVQvKPBUEUrXNL4HhnYbbQBwzfndnRBBYKkyMS8fUSmeQwoMhDJYQn9G1F",
  "key42": "DTkKcJxMjmYcw78bRv5uiT5hDc2iYRZKtKqwdDRS2Akjxa7Jw8JBKCrAkLidAarUFd21JRAaTretfFKoC3BERKm",
  "key43": "5Yazgw5GUrQFPDb21N1a4D9DxQ3EKG9jwuRZ9ZV93tQE2HfXz9BH8WkbjQW8KpuniQ2mxhczmmjJjPugkrJkrNZd",
  "key44": "dv4GYzrveKH31oq3renEwVjbMZiwKZsrraTDsdJatnRUPFGpjNWe4H3v4vhuyDmPhdW1mLadmMsEMnheryGycjk",
  "key45": "5281rMyq1tZQGK689iMngo898SooyKfC1aGg6Fh5dqNtkWLg2VfAULSsr4Wi88mpZ5GF6ZWHnhLVScJtWv3TYk7R",
  "key46": "3wifGkmMytxhy6YSo74C2RLBZu1Uz41sxJJvFBdp1Ko861JtoSXAbB64nh9ch6USZ8vZSvh6gv4ApX4TNGPMeKEy"
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
