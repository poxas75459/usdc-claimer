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
    "47iPCWiTytpUcJCBkEM4cEvL2JsMELGsLvRgiuEGhsGuRo97ZYgB4N6Dixv1R1EbbSC3oByu4sGuWXoQTqkENg13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZdnAnxhQugx55y9bcx5deG55dhPMf8fPUAXFdPSo46tiDsWLruj7Za3txc5VNHz7twv935fH3r77bsa6GG4eaZ2",
  "key1": "4HCpaEHuJd3nZ6twB3oktwZKnkcxFhPkaT6bX6sFjCoiKDSB7XeHbFa8C8LtZJ6LdT73x3czRXCKzDqKS6iLrL1H",
  "key2": "4eKyjBs8MnQnCT7kgtmLQZAYxSkMFRFrUWNgPiqLZhLZDaXFUyB7o3BdSTWvrkyJ4NxB6VgjhNKChFoDGTz5de87",
  "key3": "5wszRP4R82GW7Xb3JrCksjC9881Vh5esjZZ19xd1e69AKS9tcVGgBkdzd1kxHNAi7sf14uttaohScxj4DTPyUBzC",
  "key4": "3saJ1AF4StdurhWxiv1scDeWXdKZtv3hCLHiCTmeHDxsBy5EGjNH3MXdEgiHXFp4K8Lskc9e2jSw25J6SoJEUWgy",
  "key5": "5qooHhY9ENV7DXADuYhD1BC6WndZBfLoDijfJwSwcdb5aRoVmptjCgEfADE4At85eCf21qS6bL871mJyaR9tkux5",
  "key6": "3BeQ1i4TWUB9BdpDehvNMwb5gRXLTZmAAFpPUBnydPtT2TXgXV8a13nA71XCUL22eRJLu8dkjXEFb6H4vVRv7q6p",
  "key7": "2nG7pwD9o4HFVCUhveykaBS4edFA8aTyC6ANi1PCDVenhRrQtZ1uLM8CPory1Fz7RAVgno8WJeyNgoyngV31psMX",
  "key8": "4yLWjfozDU6CCHXmmmzSXvtiMQGXYJrFALPTxGeGYXpFA9vdaviNTEC5LGpS9LHFus58FzVuK4WHv6LtrvVHYi2a",
  "key9": "5N4FmobSWgtgFE7LVTAPZ6W24wdFoL8T8DLFxz1Tw1QtjzuPtqnCW2s99TdcpfBDdmtzMg3XrdFjEXLboAQ2TXGV",
  "key10": "63iSSpAKGr5mb699BPSbQGojyodYACrhyBvFTwy4yY3j8vUT7Ro4hsnQsuiD2CiSogVL3MVrQjjA32rbZvWEHZ4G",
  "key11": "5CtcEf9Cs3EmVdbRZ47vVYZB4A3La3XoFTt5y8v8UfgmfunkGftpnNcXZHC1v8BMW4x6ii9uG1eXEzkvrJ7J2WEs",
  "key12": "21QGiHMHuN4xynNdVqVTuckBg3RTRqskUL8GruGQJ5DzWodJMNfjLHPJHyRuJSndRX1cuF2w1fmhdhsW419UKeeU",
  "key13": "2gD3sjB53Bg8TTXSVMKT5MdSUxfLnUP4PwMySMKe74dURa6ubffLeMzLyK3DbBmGTwAgqMNSnZCSepTsuXe3KMto",
  "key14": "4ErN5Z46U4njkXyisZkXm6CwnKXYAdPESTNwgN7gw2tqxRrihPHvd1EPqZiVBRpy4cXw2JivLVD8BVVnSSn9yiNR",
  "key15": "5VeviLxLN6NGAZnwUuLo5Rut1hg6QXxHZfvYEsSQMVcR1Ggzuww6dqb2ZmnFfi1XG9KZiVv6W9qDmhsvho26Q4t9",
  "key16": "3D4V6ShGMZQmTuXj49GhCso6MJBuu3vFYtqCpyjz8yh5eMWKGUuAVf7P2rJxhJgLaqXWaxv6dLAdpakz3hJTtjMN",
  "key17": "5Cotr6Evt1v6WNZzJ3CDyqLzHABLXs9kPNJiqCmDNnj1sj9thCqTTyT8tcJu25BakjANs4nifb17eQkdJUvVh1A4",
  "key18": "5tW7gA5gF4eEW2jaLNqNxaQ2Lzj3BbqEBFumc9ziNYmzJCsJrampqg5h3Dveeu6MHvaG4Unws9MaHsXvJCH1iiab",
  "key19": "4qvdkuwFQi8QmjHqXYkMfcs5TUTtefB7LLMWhoFz5bGUrBKJhFH13i6pmtie1tCRZzTizNEjLfZEGmSKevZ1CtSm",
  "key20": "5GJmk97uZoByTeVsWmdtQUP8hhekGVmaURET4TKbGiemMpsWTtPBJ1KvKajPNQwXkhD1p3GMtgbbQuBrZuRaGBDK",
  "key21": "4gFydJjDaGKqPrN5VRZH2k4RSFqtGn9hcXavAxobFD9WpreUvq3UVtMM8LhDtwQ6AMMnu1BBWtqhfbrqVDbUivhh",
  "key22": "4hj7WufUqTPivf4U11exaQUp3KmrbLvcYyT8CnBVm9pvawCrSQf6MQyMfyKietKY2VLGqwHPhgpg9kZN9MArP4NP",
  "key23": "65qSBnZvHC7DaHyXY59ERfYbdgUEQScPW7iD7orDr8hBqhh8wPcEJMr5RaoYKih8sE2KsGB4eyzpXRZWPBuXLp6m",
  "key24": "4Za3wsiHMbCmpuiAJA8tBHZax19cSj7cKe5N1iSWhTBizMZFMiE21gFQEVjvioXwZs58ie3CkPdxf678Qr6WpqKW",
  "key25": "KprQJTiv57h6Fm7vkeqFEZ14dyoHzDarGYPQBzwfy7DaLNPJC1cVxeoteAMXzyJdXTXXyMYBmw3kPs2ntPbNf5y",
  "key26": "2SezSpyn9Q1c6mGCjxiw5buDm6vMsmeuPHVJE6GeK3m3cLD3F7sZUKA7moUwHwL9rEUWEh5P5J41eTu87eCMW5V3",
  "key27": "4cU4QTqjQGYDKcy6Y5ZZKFXPr1fFBMrmLV2up5Xi3N5nXTVLsDp3cwNgkj68v3uWqdWxRKp2gvQUa9qu3vi1pCqB"
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
