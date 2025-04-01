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
    "3AVqvEw8DiXpGse49AS92XCeMDwKBqFHsGrAubV7cmLhzbVtjNa1SFZdAk2WCFMwrU1rrsArBt3GcxeDB7e69moy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxCgrHWukx6CfzExrV1HH46qkw6xSaYXeLgK647DiyWGj9kzNtiCDAZUhkVHrHJcmsstE1iWDPP6AJKjWPRwiVc",
  "key1": "4jGhvSrXqydRhN7q1nYNXe8iMQkoVkfsgvoYmPA7MSWCHnn94QyJFGsGGV8zqPePwFFVqWoLP4Zbu2kFhTxk8UNq",
  "key2": "4fguKFcCiQnvmBkkM86UpRd9AgcGojGxa8SAzJfMfTUZhy4JTmF7n8EHxqQK7EjRmauJ11n7DZqXJbVkKaUayvh7",
  "key3": "3NEknxQQ3xQ63rFore158iPUM5vsGXCNsAwVCV2hTJhE4Zs17N76FFhUKjfpHWu1o6AhXbsSysPajK5BMoFG1dtk",
  "key4": "r9y3bgC9EBjdgtHseLEd4dgtsfwy6FZEmBgkx2HMuKSFiEPMQAsjmtL6LnMxGrwLjiDYWZK1nJhZPYf7Z1bDXye",
  "key5": "3Dee5YxUccbtKWUVUNnCDa8inGo6p69K4sS5pYFuDZtBS1UTMqZeUpe921r8gEN7n1N6Sg9u2FAC6iTnP3Gdhn7L",
  "key6": "4TwhTGVA9WtdMTJu5nbrtdPhbWNEcWkegH51sCihE5dJt5kTxSgUEcJVFTG6owHQz7Zxo9Rxtds3LRwKwCVjVGDX",
  "key7": "3wYXs5pbGvrEdYti9XvbtKQ6SMS8ZtFyT7KCr6AwUBFKCHD3GJbwH9aZfjepKk8odoB8CyJxGdh8ftmvEjkCwcQy",
  "key8": "2HTNDthaqQFjDjcw6iJXQpUFk57qSaSAcaRL1q3Gbwsb8N2bpsLKftxTxihsX35D5gpYWKg1YVj7ktYyveip4cM1",
  "key9": "4Yqjy9mSaBmvSUp6Eh2SqJzxw4HyvNYJjudanCgwSzmRLva8rF2gvWH2fZWN7vadQXZNXeCSwdeXDg4wHuxswDwB",
  "key10": "47vtgGWQYxA9X2uDkgXe9HPaWHH5P1G9SnmcNSUER13DExY126ii2Dk86gnvUiPeu7dwEydLbq9u39egcSM2TmfM",
  "key11": "2vnr959nMV73gtiu7HTz9BkrVMY2254Zps6K4LtzJcTbgzF7A824yHE5Fy72bQLqp44rFaRFZr38UfsXUza8SDWY",
  "key12": "61oJfc584zc9mjadaqCkXWcaYBUPTYBCTWXSJC4ZTyRqWguYBzh3hWKE46LHEMNx7UeuAhsEd23MNZRk9b4Y4iiL",
  "key13": "8SDzCdFFYfu2q8wbdjd8qrqVQ29JDkeXyvg1i8R6GHqzC2YFV75cUCgczSV8ikmE7BP8V8ErPhiZSWenMBfWaaS",
  "key14": "4WthGtjn2u8cSAnQsBBr6uTWdm7BEqQGkDyZDo7HDJSK2Zo6P56QMunSzhDjWmvfZ6xm9sRvdzLsFVE7SrgkcHTZ",
  "key15": "4JoUyZDbMahEbBa9h9scEYPjR2TGssmWQ8qQ2Qn1VNCeKKpTe679VVCgvDSm5Zu2pxxdsKPU32acYv9MTWj6J91f",
  "key16": "36q3LAkKCXPHJcSWnxoGSn67gkzBCuDYqqCSXbAcnXifFjiZbtZVUzH3Kimv7X45v7pyPmJLcm5qpnNpf1pFZCPe",
  "key17": "AaFBwSVTLmossMJ29YhuWiDDpPpjdxAS8rbyRQPgs2PPSPzNtGwEQYY7ENkifL2kXMQW9c4fWNsmAH9mjPnZ1m8",
  "key18": "653msAHtXJWc4n4Kf2NAoNcKTFb7gthqAyQnjyjq35C5J6nytynJBXbkBCtZCynDogrzCPoo673yYSncgPLk4pCy",
  "key19": "4qHCtR9s3kmB23ScHbNLPXvJfspBoYaUu6sMaR8Ne2spGxDbETQvQHbTQ9Kg5GiyghfgReiqJqkStZx5Qhymnan6",
  "key20": "fSHCFrhVBPwpbcKt5iVvbHebiDP8bamUrxzK26XA3JzhEENtKnAiz7nRA4P78NhrCjRs2eUeSdiW73Bx392jBi5",
  "key21": "2BMTPegHggpkCScD4PmCfsh8HyK9tWwB33NZwDXkwCvr17GvcB1SwFps73APVb1baxbTUMikg4Na8czs5kLVkSkJ",
  "key22": "3uuB4PkWeqVk8NX433rxHT31B36WdXn4QrvH2zUZ1PZ5vutXaxEeDHZ3qLuwZxykNvg6mQ2C5EFzhsWnV8jYScT5",
  "key23": "4u1w5umppxG1VwbJrfRnFTyUJrggu7E6v2jvsebpKdqJ8NaLZiQ2ByRTUkQMjfZpsLw4nnrbxHkzDoQwzbdyd1cu",
  "key24": "fbUveKZ73CMYXqhgUQZX8WXw2mWoM5nqwoWeJqgkb3RYZ1jVcMFYeFDvn9qfmZAgWjLbUpbnxJRyBUKbbLA7T1c",
  "key25": "Sv4Hu7ZKqwC5jioB7yvQUdhcfAwVJskzojF2wQ74Fk7XBzXG4TKPShWB3M41vKvTrV3AW9oFj15A11YXhHRFxXi",
  "key26": "4bu7Ynrrfif2FHjFnoWfg4JNvuADDrhqvC3iHNfsNkzueQhSyuv4ZDxmw2A2GRKuvvfeMk4eBEryfgR2btH42NEN",
  "key27": "3vUh7kVLhCFjnb7ppws3uT1qaJr71LExRSxGFJoC8yXc7JGTWtPAh4xvtp16vNn1hGgHJLxFTmPMMuBEr8ecs2FM",
  "key28": "9krE8JXfeAZpuQa6sW2np3GyFC2JEUXQjZRXmWXqHGs7JhDQBoQukWKoX8U9R36QiUY2pG8tLspdR6PLJ4Gxpix",
  "key29": "37MdzFaLNFdxmhhD56vkmL9LwmfD1b1NRjBV9SEVi7P4TQpSSBfxfHVWQvM7HjRC3gSK1VLV93zvPaRDsPrBH7eM",
  "key30": "JDV2ZZqeR37iJe1GjykhYPG9kcHKYEL8avyVPrYbMEXnHvUgTRvEtooRBgVFKU2sjnyb19QadDLWN3DEwW6ymG1",
  "key31": "56dhNCiaKJ7K819cxouQL27ou6GyiaawVQx86vmRpGQaNZjyrfkJ8s4KAJ9J8jtvzkbiisbaUU7kSFwwJSFSTsKU",
  "key32": "5wxjWWmYJrukRRjBHPpQ4FGJbmmNswjPuGfiVx4gw6NoiRqkNmD1bF1Epq6DsvM2hagQ7j4vw7s1pd9azebCZnRk",
  "key33": "4eGbxdVtJeHyi8Q3XoBNWWyuLNu8j4swFDFp5VF4ftmd95TZg1Ni4dnfMAuJkkwweXpi3pQHovGfbRyufYSsZt31",
  "key34": "4f8yA5ci911PEtsKf94CV2c9wdqkFBjRxwyf8wzx6dLv1N5z3NqwSwhffHHyERvXj1WVHmdEV5QKNnsKuxThN76D",
  "key35": "2jtbfkR6AdDCbpzVt48AKwzxTfSZjW1j19rMcUuB9gjEST4eWhVCEg3P4ERb2DPfys2b9YCcq5XMj6teiPQDxBSg"
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
