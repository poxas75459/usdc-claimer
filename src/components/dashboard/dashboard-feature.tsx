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
    "3ruqiYxuLUZtn7vf1nKrZj4gwTGrnnUS9YG8gqhEBJtXVvgwfaWbmPEz5UynCC8FKZBRv1ohy2oEJeovMpusmb6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qv5ETRxEmdg1i5A5kQWgCPQYGDsotboaAF9qhxni5rPbWaMURQ87oVmpciNtgEHgxKRmCAR8p3VtzjyABqnaJSC",
  "key1": "ssPXeNNbGRTz6oD5c3aQeQzuzZFpbog4XtKoDTHeNXJSnCX8BipZ6Sy1pHyxcgaRphd19JtaXqkcD2HyenLAesn",
  "key2": "5J7u99rHGAGeRkDGEsHN9nWpTBChuNYoj8rfTmK7wANCQwmQoSsBKyKELNE8wGTFj9PHwMa4Ca2srSeMZEYykoHz",
  "key3": "24vn1aV5rsVVt3ZEJgPBTQV5fPBSZMKJ7ZPdtnwh5uRmEDdJ8wugR2xCMysPfKAym7hjMfV22dn1jpsNGZ8odTcn",
  "key4": "4bwbvYewK5VyaBXP2jiS2JYEEhpTE7pwgNSBzGbaqEKsenmyzL3CAzrs4ZgHVDhyVaR4KSqj33Hj7ehmh5SpftG3",
  "key5": "4YNrkCw1vmnmxVq9MFTL86FYbUzZAxbssjmP7nFh3fxeyj2uS1Hia8m5ABQ9ZDpBfsEVCvqqDZCCbt8KFwWbB9kq",
  "key6": "5zpuCA7kAU3kNhranHC6GYzc6Gc8Wtb6UndbtRMaXLGjDMjCFoyNYpWp76CiJ5RbCLfkGUZv24aZLobT5VZvH5yy",
  "key7": "4L18s7Pxvo2ytL6nfJmyTa3Qa4WZSbmm9Riwm7w4TAsxLHmgi8Ae2Nuz5J4F7XpLcERLJGw6HnPAucXKjc5cfjwX",
  "key8": "3b3siiFy1nj8mYc2YWS2w1Yen2q38Q9MZQvCM82h8t7ExSWoJnTgL9W9UPm7WhfdWim1QbDnc76ZFxzB54Q2aK5S",
  "key9": "W1iRY7jN8JWWJvS2SB6eyQYkfA4bQEQrJkPDznNK92q4CQf9SaGok8GVkfyrvLHs2JAdb2uS7DuVSZxAsM2q2y2",
  "key10": "2ZGnJCmi19xYsoS4TErHC3MMbFCCkeggVfP23ExbTLdrgZBwk2PtThzAdCxVFVEn4WWZ5yoXpjfJr9JBHKLGjqdF",
  "key11": "36jyjP1ueztCRaAQNjmkERfJCZNDGtPmcvEgghnqumzP4JxnKUMedPLd3BYuGyGn1bm8wAz4uSL94N95mqDsasaq",
  "key12": "4wa5SQgGELBypTy3nzFoTu1TdRqZjTapn49SG9QrhJjaNwaj716PuRjM9B7pdJyJjBW7RxLaYjFQipSxSupFbtPf",
  "key13": "4ByV8oAP8Wt7cqfbSe5BPzr4jZ7d7T6Gg7WwS7rTLzkZg8nAiHxQxv85eN3SZDimdjgCG1q8LAGZ5FYnWDkryBUr",
  "key14": "2MF9kYAYrK7pemNSen8GePGqHVEfLM1dUMJhtW3phczPwN7wAgH36vFum5kt3i7L5W69jzYRD3LrWqt81SdJehe1",
  "key15": "eAiLQ1b7yzve17dFhBnj93U28of5qtezmZTcgE43XwnforuEnP894rx3x7GqbnupiEiWrsESFobVqFivCW7eWKb",
  "key16": "5Hh2uFXZgM9W3Ysyq1mEqq67HcJd1gg7tYT5hnzzyDc39fTJpizfnzNYLhek4dpgTic3cfZddHgsA2iZdd5XyVed",
  "key17": "8qZxQ3VDsRvqRX8z81bkNHibXon4ugacSoWsc65DMFW9Wo8MmYQnp5XNuEVsfoaqRjYLfAuPyvsbfvCSKvSqPUu",
  "key18": "5DfzVxnvcURQBptyGX413Rg9pTZGfyyVgULgFjJhPUKRaQsQ8onVUvgUrumu7HGpuv3h91H7tSLmkBRS1Xc6XoHM",
  "key19": "5Vbj1QzgM37LoWXX1AyoQV1aFMqgTPYrFLK9Fg8h194zr9Fn6ZSsHJpEbB2DFxEgrjBmkRZR8qNNNrHUEgpBMovb",
  "key20": "nBwj2xwYt8eMYv4XWf1Frcv4XA4TCQHUYWgBHCRjDLadkJY3fQZY2JBtbJFQkA4xcZFAjge3A9fbB8waTpQ5xFA",
  "key21": "4vTguuUnob5pNExtELuPgLkLjBR3CvpAwcmuYkAU4SqimZCUFDLxYYa26m31Vd49AyFTtbAqfYYsC32izTDFfyiy",
  "key22": "5mfV6kSVynMwsr6Ro5qBiXsJ5arDx9UvfE8r9JbsAmwGqH1XUYTV66NkrA683vd9Vrt2gdVFJ1YvsYnowSFFbDBJ",
  "key23": "4bfpUZw499Vw81KvfChEx9WkAwLG6GWoRXE961LuB1Sch4SXHVMuiP6gipJ5u7DSLboVLvqabnyiDxXus8W69bss",
  "key24": "5T4fmtnRgvrZMtUqmCmvUHMcRBEacNsP41XUcRxMX5j9DEcnNipqvm8Kt3ZLJG5Bt6mhyLuSUw4f16k3m7ghnWTJ",
  "key25": "2fDXLKNQJhR3NQeyj33PCJqynhwemHV4MMzn81E3wMwAP5YsdNs3vDwU7uw275Y6FauT3PxKumgiUoDrcUjAVfaY",
  "key26": "28fc1F1vxvhkP58Bfohruv8dUa7NPjhaFRViyNRkdnySiUZLPdmesjVaShWqg69B6FsAqGEzgNekv7igTkUU7vss",
  "key27": "2DRy4kogsJqjN4iVTvZF7DTnqANzhu2unhsq7ghVmUmWzQw4aXxnTZWEMbWRGC4uD8Bgc2NAbqBibJhpPY21C4sb",
  "key28": "goM1c8jGKCuUQB44ri3nYs335nm9kaa1xVq7dU67LG8SHkUa2QK9VTejnD3uBEvLraZkk7TCTbwJrgaTV5xmwjT",
  "key29": "2VdJbjUMsheg95pgvmEw3SM2djBUTGCDvwaxp1sdV9FVFR4NPgF29AXvoxTfxX8ywzuTf3vVaq3MufYkpeYpWdXH",
  "key30": "4q7pkGYmhb9NsP4uDpLEcrbbv5ysaQEwLhsTok9TrnCi6R66Ee5NuvYc3zauPLc8kVyvTV9fW96KQi2Noow8HocA",
  "key31": "5gtj9M4muSL6kBKXQD5jfKEksJBtdC1aNRXVqhQ2mHiDT9fYLsMdCiZXmcPzbMdX5hqpGCZV5K8pgmNZccsLkQND",
  "key32": "4DPthfui9hfMmwi2vtL8tYk4nQzjDvBhzaASJWxAWBrh2LXy8xM6abWw7U8HpCiSBudRpCJavUs7hRe8qq4FdiXk",
  "key33": "64wcDXJEh2DRNkkXtEsGsMzBTgWsqvx1dxqZGwQmR5EiYxDKN5kcXhnTnpGgRqgUqVpFmiwphoDhkjU1ra288Jvi",
  "key34": "5hJwGGvvsHyrKL6hcr2MF6ZT2u57LQopQiiE3aGS9vZQHhE7RqYNHS1SKfEKJi1DDP8S6wHoPpE6sEkUhtCkS6pq",
  "key35": "2fPW5yrFDCrvZue93iY5vo7C1DdJJaKcPbEiabGdb7ZLKLChvUQbR7PXciqAPH7dRyGVeG1Fgn5Zw7hnW1KZLwPg",
  "key36": "3U4AKsSuARr7WVqWWyA1M1ZRqscP8MBARCbPuP8w15VjgDwJs2Ars24v5u4S2pAHNethZS4wcops2BYyRnYgHK1v",
  "key37": "4ut6dmrWZQqNKNRTdhu2w9VkwdBkhemFQjf5au7Q9DEJiuyjqJibP1JysStgQuJpks9Y8yEouDL9PEXkG3GoGUEc",
  "key38": "3vCoP8FXkrE38PP9tRQG22dSck6omGMxfezArs62BTvSXRQv7KcNrKPLvuW2KW7mwd4TAGNzrfeT1GhPcZjDkoYQ",
  "key39": "5cMq7DHdvrf4XByxiTXxcVLRiGrffDkEAhgwJxQqLVSrFP1nExc4bKMc5h748PYDzHdMKmnr7PnEFXgFoxda7tFv",
  "key40": "4H7XhJ8AUkdBqdks8jRPJ4zHDw1HfiGvtyUJiwXjUCvT1EpMwA2Mz3wE8jWfsUFAi4DSmwcLwxavteaoWYHJevg2",
  "key41": "6x23S53gu5Wfebju9BrbkDgid2twxUsLWpA7KFbue7xV1J6xR8X78oCSAnq4CM6xAKXrNf6UZfBFJ3rG2SHPRVm"
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
