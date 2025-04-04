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
    "1Hdrb7MaY12aqNBprv1uabMCZNJq2n7KKsrXXUjMTjJFfKoh4PxMYRByntYYdP9EzwVWwvMD5WWvf2W6p1CTJjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBmrG7Q2jibQUiQwf92wm5WqH14FVGdCcCBPBDVLonBDBEgs2d2HgmC5DeSyVQ9wZd59KZTZt2n13eV49a8o4AS",
  "key1": "2mW9sFeCqiKhcpM9nZdqEyaVRqPphr3etDthi57w3faGxg8pzt9dLaNst9Tp26bm514h5Cgx7pXzbtgr4t9k95eW",
  "key2": "5WDLKwkf9AN5oAYKeCSCGu28cT4wBy222VPHvvHscoWDZgxHLQTCLZJAVPVcqsXjiA7GSax8PAQaJ8AtCp7huD9w",
  "key3": "2Ur1X6HMHmcubbn86Nib8DrGdrESJjhzeWzd3TDq5jc2J6yjLpM4enwCckMn3sBuT3X1dBM8tFjT7YyGgkRk5G4h",
  "key4": "4eGjaYBzxiZEz2rh81xWqSvU2fy3kz7WKsZem895cFYJqSgSd9ayZeyiCLmDVvpMUhjnyXJjxu1Q2XuSiGEmjjxS",
  "key5": "ecsoUzXoKmdkAMjiMPgMbyUS2Yzbs9vELButAo5W6vvsZd7WSGiPNSbKEKL2BYhoU3fkSYMWfzqMNWeaoCM7kVV",
  "key6": "4Jms13RQPetofaXQHeaiPRxJ8HAyHunguPhgcRLQEYDTu4HQFSsiHZksT4NLxbFqx5w7L4Gd1HSTWRgiQ6A37SvY",
  "key7": "mrkPhp3yZRuru6FFbyyjG7hJvGhWbfEsjdk7uNFg2GfTL5p2g3a663FigHfFbZvfXhRLhuECw4PmAv29L3q7h9L",
  "key8": "2aaNogMCwQqVHFKBuoQCicKUrqTk3fnbuezXTYPDvnZRyiAF6FzhPM4E49QgxnhWtKXJChKGqDt1P4RaJreybCCQ",
  "key9": "4SBXJuMkfZMbaXWShEVXH6YLXyToFuptrvUesCRSYRBnJ6bprBWXszQ4Q1VkTbPnwPkxAozGrfab9HtXHUe43BXC",
  "key10": "2qVPpK4mQuvJf3VXnkzH9YHtonreDcMTWmRwaAgKChhBvJGAnFspQM8xcbXjCwCW9Nnd5UE2VfNJLNFuKKDSkTi4",
  "key11": "3xyWA85wzjk1BnRLUZV9ULqReQbSA6BmBCAiTLt9cxNhkd5K2LynmwYeByKkLE7AZxPe5MCajoVvnxcfgcX1ciX8",
  "key12": "2e7PpnmrdxvxJ87C7QkijN26HTvMVUAg9G1Vqp3ednC6vpF6XmnGKbsemnMKtoL2WgDbXTCuuyve22dAukMCffuF",
  "key13": "s39hpMuMxHmomqDaGM9aybmP3JM5miRTyWzse88xXYbbyeqnTWMrZsxZpCzGKLt9ZLR3Nz5tJ3N7wq9kit7Z2LW",
  "key14": "VQkxr3KVNtCWj4QsE8xExSo3udkcZ3UAnTszUE98vyL1JM1QuJWG4RUdVft6Dn52bQ1xttjFmqWidGpQR82k4HE",
  "key15": "5mddFKPPmAptZgzLLEidqeSRndsY9AdcbbJGhwK3fCgC1vWenEaa8an7Dw5iZUDVL3g2ijK8gUuLYrgyR3b9ar6i",
  "key16": "4yXb6RvpoBHYYX6jEsNpFfMSt8GCD5gN6sMi7YhdSrdPb6xJ6rxwf86cRgTzv6W9K17oKPoAV1ezQbdKQyi1mVJT",
  "key17": "2ik4wFK7chip88w4U1QCCb9SCvBbLCzjGJWnjgWMzphqSxWTVLbKrnmKzZGigEV7eTBmPM7nbRQaRrKQRdiNQRDo",
  "key18": "375As8sMJTokHCwdrq8DGFKpUbteFKztL7PMWwWDL11Bt8p4nLseRNcQ2V2iEp4jtVUUzxPL7ng9Z544mYRVyCV6",
  "key19": "3a7926cN67ZZB1aKx2nrpr35mK4Aa8hXQXjEYm2x9VchphBAjyygn1rb9V2BNPXfhGuPjAwFWMXcat9mWc7EJxvU",
  "key20": "5QDUS6DEq8XZXSMsvjpmh67HwEV4vdYB9uPkujXPBy5u7JgUd4v4PUnbHQ8RXTPStWWcDYBVBbEozqS1phGTNQ2P",
  "key21": "2PLbq3n4kN41X5H7SqoZgfngh8HEvXH7tfea32NjdYG8YATMJBSLwxzsd6sKzjQU7GpX7f8jBm1FMGAzdvrDBRPA",
  "key22": "5LLjj1RiDyCsUTYW5ZLPcPXnypKzWXdDTgecnma1q7HMHj7zD4Dpf7HBuZvkvk3xVtG7QEjBLMPreT1NEq6ri37A",
  "key23": "Yb7fWufBzaV5eB1DZMoZ6e4MYhxGuY6RkQFWyCb3VVT33KYvWWJ9RQFaN5ZRZiXLKSHd4i2dHUt5qf4nzzhf3Wk",
  "key24": "5GLuSmunxrESFMYnY4rAxamBGwLnnafkuifoZTqdg5tTpg7Bp1ZtuLecNbVM8Fcj6FhowFvLhgPvBKcMpNi9x6ct",
  "key25": "3CK4XyhpJxXJcnKeU5bnFMMbET5Acd6d2ysRcvMsmZAM6P2HwQDk9GwhiFi2MR1y8pMwpCKGWwhabhPEpWYagUn2",
  "key26": "jv5qVrNZh34U8jbYynnND7YQh4r994BrBPL2zahkLoxJEiKkhYT1t8GruCy4sZZSJMpcHiqPThoE2ESCCSURtiF"
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
