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
    "5SWnEimezw6yrgpEs3r5H1YaTeDHFhvqocUE48JqNpD7fbiaBoc5Cucf5vC9R27J2JXcnZepKBGA4um8oxgBi8WB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMuaQkszYPAaCRRYZboNta9GpYzPsfvBsoC1PfXaQXtTmU4niiDeSKFS9MAYJS5qV11K32xDiD9dg7jyifT1P1F",
  "key1": "4Spx55ETLtyP7iMN2QvyaFCdYAQgUbtFCFUXgxg3AVAboiUx4aWQ2oZbBxjWtURz5sXZhTsbyYy1VCo4V2JEECcg",
  "key2": "4VeMfiv7tiSFdnzesCJQsFEtS38Z7LbSzeEVpkMwNW3WTuUnyyGpUxoCjQnTbeaM6YSht8SCrwuFsUvrfG9gjTSF",
  "key3": "4s3xMvRqaCR8s7LpBc4sEsa1bPGWsPdcai3cu8Mo6yirju41EvrAchoiKwMCDcj9nqN4UufjsXSvarCuDTGs1Mxx",
  "key4": "2ocxaXxJGR1uqypEM6sgtdchxcamAjvPS4FfcWThtNoET8bKxjVQBAa898SVb7mzkXTzBKMq4PgDHXX3q84vCmkd",
  "key5": "GzwCPbckqR6qFn7xvFEJeXBDifiDLho9q9P56sEnbbTWQUnwD5GhpR3JenLdgUCdQzCPPiKiHjZhr5uvWW3ULQu",
  "key6": "4oF44AxhraWSrFMUNDb6AJx8gWYx5qHH651tAdSxNXUb5GZA7Ta8EjNaeHo7Nt8VUUE5M73g9QLM9f89nzU1qyHE",
  "key7": "5DH2XsiYtyBvSUbxt9nMWrZ5x6RxjtV5NpWmRxJSAmJBPgivUrFRkesfDa8VNHjqqorKPDptdXKdspbBFhunvAgL",
  "key8": "34iEf6ZT1vca1Uhq2SUsN54kXKF7XKxtAYE44NXaDgsnr13Xq6wcczkcfi1ehvrtaKokWvcjNX391yysDNxoQ1uH",
  "key9": "5kvFAcGDqFaXS6H3bXhovDkguvSeA7MD8z1G16YmbCCeKm9zskwHXLrrtB7gawPKXvuon8PVE6Na3Gri1MTNWg3U",
  "key10": "3xhuQdHPjmNdCGa7jxMWPfqW5Cmn3t6Eh3XojMeMsxZKxYSn9f1w2h1sNc4jRmb1QVuhVvYkc7CB6C1L5z8bLX8Y",
  "key11": "5yfkBweiA4Ex6ZgWUqHy9d8DYTG1AzjhWSpwViFuuvC6bFw7wwMB7v2TgxSduzbKkLs8mENpHctkBxYZWf7riBUS",
  "key12": "4HGJSXpkk7R2tRVNcUG5ALtuMAKBaevY6RK2QfVHrnq14miX1FcZ7ehiz7Eb9VV1f1xhmFRnUZzX6a5gdruNpxXs",
  "key13": "9r69KLwf4aaNBjup8PiD5BUXCwqkrY9VJAxiVcboG5nJcZCEZCfPt8zxf51rZwP6rrbCLGizvvaFiZKxS4VC7mQ",
  "key14": "3XYp8CHdEXDh1MvJqM2Abvh6v7tMebtWVdHWw3sxuBeqvfygjgewNtJjg6yeQA64wPB8CEnGYbxgzTVrhbUBh71T",
  "key15": "2dpJqGiE7bRESC9WTApXfsPGkWJUwk22s5pMaETPNq5SLiEACAkE8LwhV6f3uQLt7EExM2Zbf85vCEjdJHaPsqZW",
  "key16": "2zBAAJcpgE5L8exrjZxYBFaVtYdaTfPFxkghJESuWAZ6EmQTEqjyqNuEs7gMkFSNvt8Vug1Zne5aohxW9a3HuY7X",
  "key17": "62zSaKLD3UCY5gtudEMpVyN12eR4Jw5eokjXtScHVuphZdKCnW6YXnQBEse2p7vJsqQdTRqZSemTR9so3PxM7RkV",
  "key18": "4NjpgXokposfFb3SfradoXz9ym89Vof5oSpdk8yjJPExruDaBWQp52bFGKvL8oDdPmFF7QE4A7Q2PCZVvUFr5f92",
  "key19": "5WK5DRGHJyrji7GztzTXhAoPzgcHjp53dxevbjzUog1eCZwGKTNAVvs446p7CcQprcEDtNoFzv2LCJhws7snWqiz",
  "key20": "5ouVhutjGCYTfsUo2M4CbiLS9bbqxNesJV2P4oQfRwWNz8D9jvxYjsjN94X1QkGVNAKiDJGFUQHDLZhVS2jDQq3H",
  "key21": "5fiQVirRUqapsWagmbEeWfrZssY4QqsNyNoC1JaM7xJaUaja4rAcT1G7Lk46YYaVmQ8eiHyY79tpRVLkYTJd7m5T",
  "key22": "Dh55ZrsjpnVFizxanpihrLTCP8t2qJTBc42mpDonaxmfRptdAUhMjznPe7KSBG8x9A97UJx5H97JUBFSSd5KbzX",
  "key23": "ehh2dRNDAcDzEQKHqJywzR5cD1GXknN2GSKFhFx2X2ZjepAPx8pfEi96AeXKmnH1PFHn9AY1JYmt5r4Cgkq4af8",
  "key24": "3pSnuCpPUeHAXoxfLywJhcmvNKpWfU7k7T7Pw13Uy7J5np27t7vYmvDkSYzRvdGAQa98m3d474vVQSPWtUjUn6B3",
  "key25": "kCpTi8Uub8BjnYjPWQYP6QG1hMfAGChkeEpDgNJzawMQCvp6DaRYdRqX6k1rd3CU9upLbigkXuoPAAwMhGDQEy6"
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
