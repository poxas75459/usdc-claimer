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
    "2FooM2b87H1upvMcry3LaktfdALPEdSWL5vUpDMB5iXY8w7JTEGZ4ixxzsmVmSqP9pW8m4bfoVWNZhrc1L1KwwyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkWgop878LjwdCjRtVEkY53mRWo3JnDgRhkvN7tAunkeimu84NNXKMBKmi5o8sDWRFhJhyUTe7QPZEYibbMzC1q",
  "key1": "dDP9yWXd6fCPtSUMQo39qdXwhypiruXao9pu48f9wtcqoazMjWje94oPbaHgQJgjQ7eQdX1kBQ4UbBXBBhqx6h3",
  "key2": "3EP1RmUFjEkjAn5i39v72TzvoQwLgzBT4nDv3awqQK3DyANqHZWGqkJPXt2JF6xLmkF8cTrRmMoHq8oZoMoUP23Z",
  "key3": "4yiVPRt6P7f9mbytBYYqWqQFrWERe2tfHzSqUpaSoZUnotmPZbNE8K5gBsw8fHSJPyioUVaH2USNeYoWKtsqH994",
  "key4": "4iNzAxTehegTHUVvXmjc5R2FhrdmNAAuQp3bwto4C6LyR1Tjht86uh5UjkWMYouDQSWcrmoipGP7Tkg5hTio7RgF",
  "key5": "3mgmRrWXZ9n5eCkfmRDwYksH9KbFsnxCCBixvxEMjFUTGZbz2cRnrZrbtfjgCAGeUExCoRVYTByT7p3XhP9Wmt2s",
  "key6": "UsUF6LcxnjcUhzdtEyjKMnt4Aa1CygZSTtoVaWpNJM7GMZ1QzMRrBFy6jHnF7PzLPwZ3CdMZbykuBWV9XwotV5F",
  "key7": "3GBbNkiXWM7Uj13y4SQJVCZuWEWuYQzFhqTLiozqqiv5J8vFcKU21c747qKuggVZnsce65NuzYq8aaW84K8FMgvQ",
  "key8": "2qswQ8MMRzWz5du7MfjnDs1gfUFdvwW2UvKbWvVn16oBrRhPfANZNmvBtP3q4Vdn2XNZM2bX9qwmjWsjMW8TBbvV",
  "key9": "4WaSKfqX9jkBL8Whx7Hyuxo3TpXNcGvbe3PDG27KFJ2hm5mLy3wfGgtetvTbwqtVPUvUkHwNFag4WbdvDGM3ZkPq",
  "key10": "2a4ZwW5TsTw2fP8VVEo4HUopv1GmnmWQgDsnCnibGVBn6Yqj5gTSJqU2H4KYP9MBWsckK6LxXqGbDf8aEqiTRh4x",
  "key11": "2wPiPUNkhGmwaJGGxK1MuUnXxtYjtKq6k5UoyZrPM1SXYRBRcTu8BpkgbYrrBKBfN1w698TotBAMwBj29aF2uKvo",
  "key12": "4jp5ywCZVYz4FSShLjM56YPFD3EooNu48poVfeeKdLqvVzeUt4ugR59E5ZDvv8GaakoKHdEqbFtG3CE3eR43VSfx",
  "key13": "3NLPPMyWQ8begWicvc3aE8iFjngB2k7KoyNnwxAzkSDSfYq2ewSVXodr2TwzeyGt4D7ZVEiF3unVyvgcs5G34e5n",
  "key14": "P6LNGZPoM9jRRufU8sS2YyZjQZHnZXSFCx5JvbbGdZVbtcoLs2THRdUzVDqiZhSimC7RCYvGPFtC4yGgRkvikQd",
  "key15": "5du5ebaNnZpJ59VzevVHSY2xb99qDE7g7zj55dSgt9oyE2HmGXedMkpYVMuMRYb69cctnjiBqDyGT6RACjYRFtB6",
  "key16": "4sjUXFdXQmQ4Vx4uavjP61HmPUWDgToyXs6H9tqTL4eB4F2c8fJZxiQXsVt1Ar3USeK2j5eMGwv45D8a8W9aQmCr",
  "key17": "55DsRbAz9y9HHp35JecbRy3Uomk5yfHPYeVGSeb15GPN64Zq9eBZG5Wfmw1PuVCGhGvwa33oUdFHHtkaUeJpUWGh",
  "key18": "4BHd7DN91xby1HmthuaYP9qkLzGQNPVBTUM5qwxvAngoPVRQ4xMtSbL7tSVrtKazRs7Qc5uCKuyQnfPQhU7zfdJ8",
  "key19": "5mQME19W3rVi8kXwL5GU6ss4U2cqDHp3N8w4wb5nfBrpHNjTUkLR9rSsjBhRnCWT4yQhFP1YGNNu6tBekXGkwgqx",
  "key20": "5o3NTwHBYabQw8W2tZZot765qnhgnusJ78HxNFoZ3oMDCFC1nj5KL1sESjZAvBzPzWbA1nQsK6FLHX2jBjNFemyg",
  "key21": "5GXmcjXg2UWppAxDA5e3QwzQFc9Cj1p5pbVqKQnv2off2iKvstePuG9vftQVy5jtKfA1dN1XunLjLiNqozJNpv2s",
  "key22": "2fLXJNR9ZFQVZe2GrTGG98Qzfkhii4paBdrkn9np3ddwrvnfcpErSELbjau5YEDdzAgKvfpZGsWKu3YkVs9XuFQG",
  "key23": "2kVykWMi1tMcvMUgSuBvV5XFEdWhac5wYQNuFDkpsYQQ57FcxqiXieQxeoNTS8MmrutLEnjczjzrZf2kFfCSW8sQ",
  "key24": "gzTd1RX27QoTDugtgtqU6Zte2a3tbEpZBswRtYFAEQ4DYCCfrqWqJS4B4Gq7JLptpbdWsrspUq15nKHem6qGXUF",
  "key25": "2G7sEDsJezkwiDWk6EnnoAQ4Sja15dcu4gc1Vzet9Zauf3Aro34fD5XWccqhq6hqgnoGEr5MA8L98uVkHWMUw95N",
  "key26": "2zhFERBBDFp7FLubd5CYk127hVTfR1vkfghe6MToWpmEPwSGGVa8xG7E3n4snsFxuykPjT3dqGt6J8dz7646YbZj",
  "key27": "5wizqfqoG9gCZw97unw6CxLLhna3TbM6ZYaVmgrVjCv2FzdrPBJx759UMK68WA1SoNRqg7kvVCpahtNqeL4FBnFS",
  "key28": "5qfXERzsksuQUhZTmmaNgPRwa7Bv3fXs7mt5jzbhuCnKnTdKfJYguFSkvERmFtDwAJMQYh5JQErRv6NymVitDfEq",
  "key29": "3cDwQxmZhns3bNH1xPLAkCLpcSzWewfNR79wqmCwyEuKb6Vup9EvF5CNjcteYaDgMLkfjov7aEMgAyrvVFADVPx9",
  "key30": "zkFLiawoP4r7gRijsmJudn5KR2j23p3EV5qWdoQHb772KFZZWAei16KuutUJA6tBEMJZxkUDXYoZMXPPV3YQ4fo",
  "key31": "2jv2CvVp8regukzuN6g5GWVsbafHhbsmGqTMByxwgymgeyDHnfx3GH2mzfWuFom7FoZnGNjjjej3rx4iASNcn8dz",
  "key32": "2FrfjpQ5uK2m5acDEbRNUmy6ZGBwUFaDYsdCRZGaEx1QbUCPTE78TrskNqv8UeZCjp1LhTYprNv4ArK18bSmZ2bG",
  "key33": "3ykqsm4eV9fLoSC9wB6YaStE7nERdKaZVGRUzQcVCue39wojsJGdJy5WjmCeRveoaozXFB1Eu6hFD2BevXJ17GF9",
  "key34": "5Cr9m9rFyG5Y3D5RsQ736F7tr1LaxCUmJZQJEEcPnKuP1aBWRNzT1g3JcB2E2usP1wun4PmHoaESfpPAzhDJbXbD",
  "key35": "uKa41KnHFTWGEBABAeG9QBu9WSiyauAJ7PsTeMawqh127NmF9mtA4we41tMWY4iDEZPQJSR8ZCa82yCbKjsJhPL",
  "key36": "4zTuHuTn4CVv45KWxf8k9DgiibXKEVMRAHfC21qjsP3Z8Pv5YppUK7SeuRPkL3S9JXXssEF8xJy2ccWs1QEDjYkv",
  "key37": "uNn5Pf4KT9JCHyE143Qaw8rF5rAWNjmznU8onNCkGFet4xP8o9CAUXNFD5DczLimLHxGN4wjvdUgePmb6tRePYb",
  "key38": "3MtrWDcSqGZoCzBeD32K34UeBdRV21mERmVwh84MR51Lo5cVHnk8mQTP19kURvH4GKTSUxcfndEaMZXNTLtuqH1W",
  "key39": "4t2i1S1YGeCVMumaDDECU7XcHb12HpbhrsAo44rECPXfJocn7wiKu9BQdEbJSZNpC1AC3r4jyUsyXACYR6YdxkGd",
  "key40": "5d3kz3wEsBp3buZpzKPyt9vboCH9fVFBbp9eZffm1f3peRxkFEF5EmguaumCZYwrtLngs1sAKW97tz4guPiz34RV",
  "key41": "3txqQETH2BmBWUJFCfBDmkXkCiBivzAeUoGL3eno8Gai1E5LwwegRL8xmnXDaUjzoLfM42GcL9nmG77xKJFkBLvx"
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
