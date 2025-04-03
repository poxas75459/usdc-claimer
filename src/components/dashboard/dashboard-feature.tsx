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
    "5EScdraSaiiwkCtNQ5EpHoeipZZYZeaS6Qx32tg8RqdWxpwSv1EXLky3ypjyoDcM8iMa47JbUKbw8F6FQHRjK7B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTJv1XdigMxQrNo1y2jkm2THyc7XBBFX1HnkkYA6x2eKK35xcxYJ95o6FNEm8tB625ggTQh7svEGy5pq2Sc4h8U",
  "key1": "5Dy9fXVeEgMaxJjJ8xU5RzfB5Nkycfs29XMbfDZpvuguEnM9J934JTcch4nugzNFF6gia9QGtmUoqcHdL7JiR3D5",
  "key2": "5QgPv5VN3kV8HVZdJJSHtS3gscV2KDrH3ZPHfzDfFdeWqVK95DoZZ5MJ3Cico2tHiAmdx5aaK8vkLcKDYTo9A4o3",
  "key3": "2G2x6LdEzZeHz9wdxgVzdc4AdEE6soJpW4ji5gg2voPCKbKa6Zb6zdBsReBSsuLsJvNCKUZNN9xSAAhj1gB295YN",
  "key4": "5gjg24d9NpRLfWStJibwBjphtqE5eimuvWUZuGuNQm5EPT7Az6KNgNCCR9zM6URjxRjUryixAyUikE7XAmkHEkcS",
  "key5": "47jJv8rn4vbNYrQPyrVAATFtxEH6TGizLFugvKrvVfQzoifxrumhGG9KoS2bfw7ZqGWJkrvEksGEGdwPR9H4rR4a",
  "key6": "5NvF4UKnptRRTy2pJnXmHoHj1UqLxgJvhz7Et4eVQwEt1LyLAi8LxCPJsDTLKwPfjrcQxJZiDrB1cBuWbBYZUtNE",
  "key7": "4SE5Tvr4fsUrcrcio9xXwA77yJ6z1JBm3sBaGAMQtZh359ZDqsX4PjUKwp6a8HJZnNSwnUU3Eb1bJWnkmL2gwzGz",
  "key8": "2upxvpxBLJPc3VEEmV1Kv64c4JKahR8aFebJZKoHKtkM56iuyvWBYtZDiSiXzjppfgXdiow7iad1UdKD3J1UngRM",
  "key9": "d4CTHawTM2xF7idn7HciQnNbzrJVsRVmDabrkc7p8QREKKTghCHsX3jbMUgQi2ibtgjMZWg5gQAqTLBx7QuXpYG",
  "key10": "F5boJAK2qkH18zkhWEETjXnwLT2mn3EdHnzJcU9ebUDcfLrx3CJSjsPS6hMkQYzvPvc6mv19DLuiXVkE6kE2wfD",
  "key11": "48QjH3vH46mSVe11wzuMFzReTeEjDcGkGivscmsfscsMavA55GVqbJr7eLBtQzR8TAEtHCCUbGVWeF62bsM6HEcr",
  "key12": "4cXD85PL8HaXBMrJzRy2Vh8h8XYWnjr16unB5zRTbWjZxsbJAT2kXu61NvbRUgd7KzYiMrFcH5bvBoFQWQ2cMYuZ",
  "key13": "4XUsBqTGtALgkXGTHC2u5ndSHtZwuVkCJeQhcUSLeeBtMAY7sqKBFP1Ziekamh2bSCvvgsjZBBTAK6MnREpdWNMw",
  "key14": "5PunCnv4Cr1SsAmGZerQhNK6aaN1QYk1tdKvacB7sTSyaoMjrvT7gJoK6hprRmi3H716n3AU682m14ykvCieEPNK",
  "key15": "49uzNr48uf5Q9gwC1kfvstvn5u9HXfLaTHK5YgBh3QWk1PqJz1GLPgZyvyqm9PCsyHwTcqKLysgdCp1yCtdGRiRT",
  "key16": "4UNxaix3Mu3mnEmpYW68UhF3wEuTm7N7jpag9mBDPX2HrD9x9PrQHXw5TbExfZkAVziqRAoRPFtowRH1GDvb6gTC",
  "key17": "2MpE5qFTP139W8amzs5eiSdT47CSER5rbx67mwxh3aXFXbcUyJaP3oLPXVuXkiizvPsrcEeh2YQ957vSERHzy88L",
  "key18": "Lk3W8WfXybVwRgehr9H3VeZJiNFuwTJG9vJQPLNnKqJaHp6PZ96Tc93aFZDjaTuk7a7pN6We3qCw5w89JrXpAfq",
  "key19": "3AP2VLdkjpniTchbq1pyw3oM7DYxPYhkb8Bep7uk2PkFTG1w79Y4L4bUVqFigEHvWvQ4gyRvcqEhXZ71mKzmNihi",
  "key20": "2SBxGRehCKXbVhwXCUGE8UMubgdLjc5MtiAB4cPtpFRAxvArYciP4p6hGMbDwt1dYJCep2g6hqVrvyXRyKKx2GQ",
  "key21": "4MKuZ3HbkdsJ5N1V2csCg3Q64v9ej3KMPn9rB63rXzBS6MAkKPmSmnyBVaC5YyyYtmtWca7yDz8A5tv6GdGL8x51",
  "key22": "23CRqSJhgJkov6HMSxaszND48opBUvSeeBgH3N5qLhqABnQkbuUbs1rWh38q19ALUxUQrc6hAs9cMMzFFRgXwPJQ",
  "key23": "31amJaP2UvWmGWueTN9cfahq3t7f5fgozQL8EJFwUKX9brM9RvoLbfQ2LEPMDm7kbVoMRxekw1qE55DzWgK8Gcgi",
  "key24": "2ha4r6uTHFBCJpDpSTuejgmbieWkfzffQsGFJQBy2VCeunftfasANpc38XQacrJ9WEKCp7qT8MZHjH49uLFHfEKE",
  "key25": "4RU1XTaqz3UD3L4hpW8VY7AcXt637CVjzxWtX2p8aUFMqG2HcicFLk1r74uVWdjtZuGq1FCug55389PHsz6TBUC5",
  "key26": "5aYBpRudjrZSuiAmu2myxLExy4JbkuZZda13yMRivaahZeuY3BanAUujJtsjb7RXWsW9nhzi3PPNooJr4GtFzPoJ",
  "key27": "5o9fRRJuid5dpxHEezQt6YoiW5VDScd1m2LSdKa1RCipisipzL3owfHcQ79vJWEVMEgsR2ZfpTfuUVkSoFhxhXPV",
  "key28": "37F3w7GrRFcwsTuRg13bA29pRB1raau5mWySci9Z7b8NjhBn62MQoZrKjUVE8xurgEAcPam19yZxtqEJK7PsvXNv",
  "key29": "3gMhh8zZWBsAVgxV3TFPtQbUKU54j3RK1ms9pCRVvA6BjQDrdJ2QpidVnnxtPnv3c7Tegdi3XaauvXzeJKEdRkUU"
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
