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
    "5Am5LpNupuSU4kQHDUtYqJGcL7Lefshx5xM7FAn9j44wPGrSPtaRaT6K2TLVuWva8LHzRVhMvRSaaPAiZ8XvA4Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ep858SyHfTzhKtiAoLcSvKijV57yc3nPr9yvHnSyj74dACZ2YmxN7LhrK9gQtbEvYGEroi7WD2m1bCnCr36sujt",
  "key1": "5dhxThAXbchpRdZHnhSXyXwbh6KF4fWugopoSsCDiJhWT6kYBtWKGJLo7mdURcmyxaX8iUAhV2K8f2EogxQaWLnm",
  "key2": "4E7VxH6ZaPFCtKvH2nYg2axGSbf9KvdDGrGzSmWBsdbhvnjSxe32mNf3vHwwAVP7AzPD8UtYat7iKSpeqd7D3yih",
  "key3": "524cuBgnEzhKQ88mzTY5zfdWtNCC1CC9LXAcrhcioYLQi99sPBxKX9STFAaUM963derwvH7AFT7AqssmyMXGixRV",
  "key4": "4ZYLN4gpDrquMHXWbKUgNkD1oezoMYaJeSsnx4mcEA5ftWzxcifgaVERBWBEZQ3VYJHeg5uacdFmC4CdytAdVUVy",
  "key5": "5aUSo7dCzM9b4iANYSTN48YtqmhdH87oeUiRfff7MMpGgrgayXoTXKMNPwA5JPVhSpfGDth6Bo7JZQ7TwMxD2SaC",
  "key6": "ZJ2PE6r4Lqo7SKhAkfxcHKwGr4FZeutbxhT5DMQwxhFyAQzz7DMY1KRXZSCCN3onGWKkV12xzpUBWB8cqFBiSfG",
  "key7": "2Tk8vkepxxS2jahKoWVr8gVXfYFoASpe27MnNLWXd4jNSgH7WDxktcjFB99GYuXmzAb5dLv3FGax9fQkzzpmS8PK",
  "key8": "5c4oMLCFpPctbu3P2EpXRsggT2LzfZsEvVNjgLsdtAxU6K53pygBPnFX8tH9v8AKw6PuoBdFps3tLjU3QAvfJtsB",
  "key9": "MwAs3fsSwEpyx46yHEdqQrWpg5S8QmVYX8NdEE2wpYDAtqJnpGEuEkLTLsBqJY86Xh2rGh9mbXRHQqVmGwiEnpz",
  "key10": "3toheDRCc3siSwEWYupEqXCwuN5AGq2YLVKbh3VWWzCQskSs3TKBNJEqDNphKPLHSr1rhzxYVWuYboe15EHWExRh",
  "key11": "3ceaz3KdUYR2UAwwXp5t3KT4Gkzw3nGUqu9Pwjvfc8J8hSwGzGM28txJm7jbVrmsHCJKpzY9eaYk47wroqEXNi5z",
  "key12": "FgjNrcqxV7P4dkEzUKmBNzqWAXxLG9cgugoU13ndmBMcGiZ5hjm69NMBEob8eVH61VHXNxdKAvRPzbx5HZJ3uDF",
  "key13": "2DrM2CwE55vkjHJppu8nvCjLnSv2SjDP5BPVVjj4deirS6aTXHKsGPYSqhdC2QNRVCnPAVMaDEbTZDHS6eDQmezw",
  "key14": "c6W88hWuqibNoRbaQxLj1fca87CqEMmifDv43pWitpcHDfube955gmm6gseQcqvXMnUtEd4hcJMX1LXDgrpEc4c",
  "key15": "3WwMDSofGdex4V2GSCNAcVvKNGcnzeTyXSGkGNkLDFnEEjLSppUUgf3uWbnaFuUyqpKPetovVUyJLBBfkLpFo5MM",
  "key16": "5gnpLd1PJy93kxu3bBhJjGohxDg3cmbLVmRnSyBSG4SsCRB49aWxqyAR43bobrfnVwsBTyGK76wzh99MPGfMEMMJ",
  "key17": "67B1wCyiYnVtxvLHKZWNUd9NXAXc6xnRGLLX4o73ezmKqPLuqAUHxr5hm4nauFDDMMZync6Xe6HzwHuaHziXZXB2",
  "key18": "3Su7kirxWAdu7BKsmoRX695zJLZKPh4XEMvkw7DbBWpQjMvPPgzntxeGMvUpyzDYmhCRPaBTwTPQQpTp6wF8RSzX",
  "key19": "64GLRnfSoYKz2iDr6T9iLnoZtADM1EURTmBZoUXP5kwwot9BbwW7wnTW5mxPmaxwgiideWHsfNz4AHGMyPC1tweM",
  "key20": "55YfAaL2tmvNzBXfuf4PXKTE8YgZjMDrSRkcfp2w2gYFVuSt4cmK6NzSHz8g8yiabGAPhh7QCCCr7eyjDxnm3s5",
  "key21": "2DDwk8bxVPNcYzr4hxCYTriPESsRyHhKTpjrzWxR86grvteAnV1VrdgPEkS2F5w3oMMLDrLD3ToSq7XtZEx9kcDf",
  "key22": "44DG3o4tMVXU8uMfSZ72mMKJdPDueyARAeRLmtunLr1BjYDcvt6GXu7kjjgbU3Cw1dysFdi3N73CNmzeiUaNDJFN",
  "key23": "2biRkzG7LbFSVQ9tivUJkisEnXPEVWX9RZAc5buY4ubigmFQNEwXNVds6g9Xq9DdMSF51Nk1Euy3xnjAFyBZVNQU",
  "key24": "5JiSgnc2M75YDwzPv9NNg3CFMLFjpgd9WDt5Rw16puuE6nGwFGYTiLgT5zE1tXxkAnjYhwjQdPgfcu6KzKdSpvKC"
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
