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
    "3eLCbssAAkqTGigBnVkAmkidkq8PifViiJM1AFVpGw58sjWgGjr8PbJE8Mm8QDYrtGF3qvBRUfEb52AX52sF55yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A66c81b5mcQ1bHX6bmehSyqDyo5QYxRYGFPMLJN8Sa6NVSceWQd2w4EvCop6Zgx29Ph2e1mHc4Jv2X1XneFWTZq",
  "key1": "4PDpGatBcm8PYGrS4nFoPWxjdd5Fx9ap7gHVQbsokuNajXrekp1cBYeMQXGSgzkahcKJftvZrB96ury6CebooFEq",
  "key2": "5af5nH4xgA4WQ8qQCKsQ5Ho9FGS9r4wi2NaByzcoRBDRKiLfACntPQjmg9SJH6MZUcgsARi6jGFVDsnhVKw3Xjj",
  "key3": "4YpxFu4tNqhsSPvG81vLcndp26bWxWM9gMhK3o4aB8aUaaaEt5mZ5SopcfRnjWKdna4HoGsEzVpvdfEdrUrcZuaw",
  "key4": "wJiCN2wDQKePoi9yEnhpSMKRAaYw9qyPnnq2xJJCA2QV9mE4XRzaJHKZ7gMQtDVdU2M8548zJJhvPYspgqhbhfG",
  "key5": "EKeFktVvT7YUDDp232dvzGhhYtWcxUYNZCc12U6sNje57yY2o1zJrVjf3rxwBgEuu6pT6K2jUe5Cu8aUmzT6C2y",
  "key6": "54Pkm9HzLo9G5wXGxskrktZ9Hm5T4kuxUSEkT2ZcNTsfLp6EHMTfJxgmsQvGrQzwDUqgr3R8gMh5KgQRoFdxdPo8",
  "key7": "8u4rd3vodda1xuEdXnhoUwHEfG8sHkus6bkfzykbBMzUvwbxPs7RqBwRNYpRmddodkysxy4g2cHP225LaGAU2pY",
  "key8": "2vpGnQcPyUNaNWLmAmrHaTxnr3Sy9i45MEct2M4nofEnuVVNX8xg3T5SaV1NoXuXEThXru28qYACYvLjVMrijgu7",
  "key9": "22PZqqdtzm9CfnRPdeKZtaBWVDvefDNLd7M6E7RSdB1hLsUWCh4uZVu4BcWQTtk1ySMpoh6AUH7n5b5r9G3CaMVc",
  "key10": "3dQQ7TL9ayP5fhALG6cv7Ls27XK5wLzFMgftXjkiMxrcfNeHXaPNf1iJb4dqnw1SvoZQtQMgiMxVpVk9aH7CLUyX",
  "key11": "5YPgTttQN7EkjxMuRDXXErWn1Abfn4jJdqbezGAmfZ85c7vwBnjiS98t9uf6VbMoSUDerzBg7riUw2PoTSkaCpN1",
  "key12": "438h8huaxGoRyHJk8g4UEmc1GoiWrN87U5RPTJCn9DLQibTr4ex5DtHUtqH77MNczoMAnALoDii9scuLwhgRSRDn",
  "key13": "4wpi9VS8A3azptrDVJcrdForVMhcx83U8F4W7JzvHt7RS6kivbtRqgh1Z4jQDCSLVLUNn8vQHSY4MEPMDAb2JPPY",
  "key14": "goKcPDttgfqnAJz9CAHEuhcGJbVCwzMubUZeiWYTNCqTtCRCMEuCU2jMU3H2R5TCFvfKFoRjGnibHfHptq8vgjP",
  "key15": "3CRw6gAp72aj4C6rLeWFr42LAHrcxw1EBS1BJ5UCyw7YMHvzNp2g8S5qHtnBxY3LfHDzPZ7qD2ynkENbwXN3HLgD",
  "key16": "MJdBNdv27r8YFGcqaA7oKskiUYpmGCX6pS8qFsxCnS1FV1YBM7FSmLr778A7WjdeDheqsyCsZFytALLBn8v934T",
  "key17": "2RVxJtwZXgL14U7iNewQekcdFuAnm893ZTPiM71HUhuXzxEAB78Q89NhnngSXsLdWJMfcRLxue3Pmjbo8M4DREX9",
  "key18": "5FDkYsrZoqei1KAJ3wdveQETQzAyNtTYqaEb1kiirhJKTV1RdagF6DEw8fLCfmB4FxsfwoPwb6Tpr1Nir7BVWDng",
  "key19": "4BHj36brJadqbRTU9Frxkh36nBPgbjTRE9RbssSjzFTS7ZKvEJr6D5z3GqGWcKoWFoAL48FsrebKRSGvsdi4URxz",
  "key20": "3VMPurhur4GR3u59kCWnc2dkBZn2Khixd4FnfUMyYbmgSNG6SY2zimT193R9dPqk6vWX4q5goGSEeT9pT13bnEdT",
  "key21": "2i3qkLwuhRSc83MBAbxa2LjDikT57dxsFdu7aRyuZGLSaz2xResQYaJBQ3SjuAYg7UDSywGzQX8ENBYsNyQ3NCh",
  "key22": "9CeLzH9rgiFoNPHpu9ZK1YTkQXi9TidtQSZ654XMLj9oiFAiPtpG6uJfjMCfrMJNnizYABfLJTJ41P8dDbY35ts",
  "key23": "2ZxaSSpyWrogzkGpPXRDoz4GD4BZyWG8oyoht4hHCPu3GR8NDzegwaRsNVLXvxZzhkUpHkCzpBQ9cqBmRZvYoGeK",
  "key24": "AxXHK1y6K24ypXTxyvFMwMn363xgJgtZNxHEc2CTvfEJ8GArXixUNahzTaSFQwyA3bQwQbA9xEsDPam5fuQB7jL",
  "key25": "3eZxpAYvNq3HSF7kMwhbKDo8Gt3XaGpNc3rbtK2PuYzQxnnqp4Sx7PFjVBdQkNvo5td9N2eCW3fBXFSRd1w5Uyse",
  "key26": "8CSbKkzwVWaREMQnUhAoj3yjKuAZMq1J4WJj8SWhjWuYAWjtJsxkiTgnekjgergtyVt9uRMWgsLwdsSnwDNdtJ1",
  "key27": "AXQenQ3nbbCes7TeyX8im6LYDTTamSjsSdfyukMFvYVYYs3cTsSHfH6KwTHiYYMa98her2Boz8fQEX1vR6RVeb6",
  "key28": "JCFaHJRuXDCu2FEG7M1CbDTffKWjrEzvir8MQBPB3ecN5k8mYWmyS2UAfZh8CGCza3H6jzCpW9PPX8WKyR9MEgq",
  "key29": "2cnVToM2RvPsWD2U5WNZAUWsWi91r6bDzN5hPmDyX1xKyqpcL6gRt1QdQC4RgaC9TKihvSCkaRw9ZESzkbpMSLSB",
  "key30": "2snKpoEPxWhDmuqtSiJbjR6enKVHs8Li7HHs3agwBMnmpoNMdrL2FEkh5Ebf1VhXkockFiDHqbTj2VT6EPQigKbe",
  "key31": "367rEN3XVdTn4fitpCSV5whsJsVBGiSpEDbf96ena4K6k9etr4DBoW83TffxJNYows1uzbUwAfzPNzop8XjnPLRY",
  "key32": "3Hw8MNiT1eqcBRmSGhBpMe1BvwqUjTxBozFqjcVhrrdVKndMbGgP8cyFwLjovtoWTfC218J4q2wpbsFpWJbiUANH",
  "key33": "5Beev2g2hWcJuUPTDY5vS86dwe9KRWgRzR3YZyNqvxz8vcTbC1Uqa31wEXMKaDoimtjHkVX2inossniyJGYk5Pi6",
  "key34": "3Q1qqccoFbDhDVXYpuke5KSDmy5gZKmmhR9hktMCBPPDg6CeHDySiYDJ6pD8g2Kec8nLX5MhgQXhm8bbQ1oS3wBP",
  "key35": "3KYzHsMPjjinhFKwi4SNGADZQVzuq2jMVx4NXCF8kAkAbeJX3j1ekxYzCdRxFciTSiDn64YnXC9LkwWxx29Ao3hv",
  "key36": "3DjrsJCnSmeqH57bW2uJ48s6CHA28stZWuHNcQhdQnD8FRuegSRYRvMR8AvG22B4y71rjaEAjnz4kVG4kAXdm4Ws",
  "key37": "4k7BMCPWAmBPcbjma1DLn7BtGL7pcrVVMAo9QRGeJ8ncLdpDDcmi6QdeY535axE2wMuyhWE9iakdwvzteMyZJjZk",
  "key38": "2v8TtXMHjv4EUbFpzG9ZzHDMcrqwx7bkMVwpfi6bQSR4hC1BpqMF4iH2hVBzuDN8SkfctzhoZZbQ7wFhtr4KyWn3"
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
