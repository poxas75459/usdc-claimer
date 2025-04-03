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
    "4LhU48MHZVWAGwndVSTwVapmKGgWNQcLk4tuJxvMSGcDsSvcktCSLosybNHqetuFSxar7U9TfRtEFQbeK3ZzzWD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUkTVmCKZphUVSAroPNay3Rzzgd9G97ZU9nsuzPG2msWi134svEw185mRoGym1YcWri2pXpRaK4o91jZNez9EJF",
  "key1": "2sdP6d54GNnzMEDGutwFi7mV3CT6ZE2AXpXJiw8m8Xzq2mWQXjTwMkxgHMYSR3MrHkiodGeGULhcNxYMBFftwkEv",
  "key2": "4P9hd5J2s2geFfusQCHpiBX36qDKifXTim2y5e47oeYgpiGEy6fynEj9TsidgmcvUBH3XJnAFhzAi7VMrmLA53NG",
  "key3": "3oJLtgidsGkY2Ttbj7Mh9K12a7dJZPwb8csfjbiK39oG2FUR7AkwGPqa3eEvZ1byoo5QM72LF9epAoX7JpDdUHCy",
  "key4": "5C3XqRpyqp4HDEqiHk6g4VGgajQkbynRbzokDW6fnR6SPLGmMdox5b1KBgTsLBvHfAfBivJfSrZFx4vr6X2yyEiY",
  "key5": "2z786At9vzEj7q2vUWJCzGg278UidG62wwDYh4J2JrXGyyr1EVSqAcRgUejGtbkVEKWssMqP8yW49JTh3PE2e99W",
  "key6": "96NjqxeRhs1gJ7sDkpUmqm96EjdWs17n6dUWjFWP7QnDGKoyuUESUZu9EncPdMuxoQa8hNNjtNveJ1gL8Nb8Va1",
  "key7": "5Vu6SAVLVBxM4h5oZPjuPEBP6JwYDFt6sFMvQN6Ctdb6erjqVi9BpGYmH5WgR6rpy2ZooAzbgQWKSee7sRw6Tgja",
  "key8": "3eUerVXPQfsSeUapBRaguv2h1tn6yai12zSxntFiiwSXuaxjnjAcNCu2VAwauxirs2QXuZWgQ1SHK1bpSkLcRWmV",
  "key9": "3LVMdbypu93t5535WS2xS181dgVz7iLRYLJkLi4ieMqVJm4S3gDmzboTocv9BecaFAAW18vFJNfY1Wrs9XbbVCRB",
  "key10": "x2oQofPFJUworvSjjb5UXdtbqQGr8soV5asffJGvpeH6m8TyReakdMbjSyHT8QB6vBJQQx5xRX4WjHyQAkddN9w",
  "key11": "2bvqRDrEx2hSEqhxkfSdhmZCBr9R331jLB3WaG4rDnZfYwKsQTK1c5Zk4Zhdf7vooYaxshHRJaWdNygmwVes7Rf7",
  "key12": "5ZjFyBodE4NsE4MAxiNMBivuYRhAU772bzDzaqscMcfkhtLrTGEEfEf5LS6CiNh4EuRTD2s2aCRKrSXet4fSAsUR",
  "key13": "4taiQnpgPGKuFaKJdz1wLF4RYozfFuVrVkVBjTtb91mm2J1iQLsWiFgfUmFtqdvP6rB1beQ4kmPmCML1nd4XQbdh",
  "key14": "121PAm7teGp1eYQuwjjTPdD5NxxGPVHyqPikkq8edXxa4XtozKbuVD38d1SpwHZAmZ6HPZnUEqd7pg5encm5Gfd7",
  "key15": "5UmxasxrCWbEZ9iqanQxJAY49yvYL6jojaMYi8XNc1cEUbeRM6Lcr5ntZPJjUHSmwxYppdsU7sz7JMQHW74EM3aZ",
  "key16": "3NeA2AVssuwLnUnbstbQVw5oVreEz1rXk1G5qYqdDjALEYbM47RPTxqfycFrHmFqbXDELG6KkP5rj4w3t4d6AN3w",
  "key17": "2GQ3Yr3SzfeM2N4GyLMtUSLCS4RP3yyjkYZssohtxFCSh8fGygEoeUkMf9pjg6iA6q3smU3J19s5pX1HfscW3LVN",
  "key18": "2vb8keW3vHp66YqEjLPa33N5j86JNzD7yadT5mgfFRAwmC8F43QaVYehY8BtKyZFdsoGjvQqMEq8hkGaWFP49Uif",
  "key19": "66CP7FGsxHe5GzP3H6zPFuVoPwS6R4q7s1NDFULDWL1dEC8XYN1fyYxXSCzjS3VcVDwWNHP9SP3KZ1vYKKmTYz2z",
  "key20": "mhmEjjZVC47gR96TLXByZfqQR11jQpGMDBYbE8g7hMk7o8xZSEQsrExXErkrkJtMu8WkeV2aay4VDnzCYknvKS3",
  "key21": "2dpNp2w3F6Hd91geHsZGSfctLpNVmRycA9p4fGCtbB5TyGEVzZ26cdaLCTkPH3DJR3eYLy6MdY24rvU5aDDYuPQV",
  "key22": "5dhYtZ9fWxL8QdmTHLFpASsBuqUUqMU75x68nEnQJ1XmzKfcqTf5YhhKVFDzVEiQe8ssaeAG57QxRxnzpdoerPQu",
  "key23": "3tjtSrJDcmDwpj1nFoLkBMph4y2gyiSGqTmWcmVSD6daRDrWwuMwMwgnvuQFfVNWeTWwPNxoEhxybvgz3i4ujwHa",
  "key24": "fcFM7ePEfimwTMeaYxoBkonsBDeRHQcsDpwQuVj1tKbeV7CvTa9WmXjN94zf8o8hcXjXtM3r6e9FrBZnZ3SorSe",
  "key25": "3ukivxyAziox8Aagap9FiG1GH32eVApsXfQQ4zjzsStMTUPxGaj2Am4YR3WPZvS98cD3CUFAUJU8fyCMbWUgz9Jf",
  "key26": "QodjvsP3VpE55Sm8KkJoA6nbwfwKchDt1zRSfxhvkFZZ2YFCcZetVgrAzrGeYtToP1sBRxvYnRDmh5MrHubeGnL",
  "key27": "2S8StZ7jQXbSmFUYPG5VQDd798vhicJBySzvKw81g8vDMMQCuznmEDa46A8uXToD2nX7Qp6HeqpeRKSuUBuqbbmE",
  "key28": "4GUY9EnqStoTgDw1SXFLTt4BAm4DTpiie9hHXDHR6aw2r8wXPaJMb8PCVgkXKZHjb4UJgB98ccmDHxM4r3a5SbRM",
  "key29": "kE2Zh4XNRuFnsQUdrgJa3tArWNHyWA9EMgb7vpFP5Je1QKTXfFBJcYiRVQ5Yb7u9Zq8eeckCQVfk8dVgnCFv3os",
  "key30": "4rPwfhcfvmLxfCDbjv55sGivgcuABmeoAayPxxdpmRxuEMQDWqfHByjibhGpggUUTGPjhkphnDFMBKsKPXZxxZvW",
  "key31": "36xuM4vTv18pKAnQT8tC4QA6xFGQBE671SVP6D5p2nCDYDVyd1XGcJHybLxMKfJ6Pn2peocL1yBAJx6dEB44yrwX",
  "key32": "5Ggi3jivwAyZEV1akpkTrgroridf1s8xxMMw9cozZ1p8ZopczB3NfE2uQs6qSPGUgAk3o5U23zFqR4gQyARefcS9",
  "key33": "2EHRscYjXs4rT7HAT1vL9sdW1eAwkqkhqFGSivwbWnNMaRpynquLwfD5dPNi6otQxmczA7xqDKs3HwD5dTtHwtxt",
  "key34": "2C9ifQrfZwRiiGcs1urxPAaSXnbfv6PeHRbrV177MGSxkhqjVUVGM3VqG45iPCVUbU1F9oV1sNnADKRGGnqABXXN",
  "key35": "4fkZZC9efsp9X2ifzis9cFLhBmQoReJi16z9FBbLh1XGvPis4uiAsUgygPbHK8QacxcsUuwnATZR6FQGuKHkgskN",
  "key36": "4vcuPwTuzXC4PfHDRrZCea4V1Kt3jtPPrKVh1tY62C7Pm1pRcsfeRnRTn9skG9ezgaugBRbVoyhxpc7TD5yH28Vp",
  "key37": "2gyqgpqrx3wVb8wqb5gvTL2PioqUeVziWDWkMYFKKDsMZego9FsmcoJUGXDx7gWFDuprfFeSasfnikzY7ZyCXWmd",
  "key38": "2EqFCMreewH3hMvMZrXgLFww4WqQMpV3KJ78anJBDp6zyf2Li9CRstFb4ik6QoM2hymbaZsWQ4TdM7bofmob4Vqn",
  "key39": "4rLLqk1cfy1LURBJ3VRhf5YRM2kBuJ3SKi4DdPE4s9vTeCHAruR6iMqJnSqeoj2dXmRSp2xxpfvbULrTQddrDP8y"
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
