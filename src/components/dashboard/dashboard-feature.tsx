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
    "4vvJe6ZgfqytQRgnx7qhxX5vHV2d8HBAg4uR5R2zh9FDt8AErvinD4DrAx2TXcF4CM7po6cxok42ZWZsqbFggZ19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYZEfFyKsNw3DvnpbYZWyvXykFCVuyYT1CBXVPzZwvrJqVXKHGCaauHN4sLB6GATvvVw43y7iGYMGefZ8giRffj",
  "key1": "5PCuguM9DZo2MDqJXaoNfFih4UxJtLZmFMraKykZb6AsvoSmcxD89tvdRe37uK1JbktPnDFDb9KDyJ5eojb7noXL",
  "key2": "5yKSCVB5dSAeddD9gWcuEa9JRp65aF44TDpEJJWLki9sQjeRWigmMMx8K6cAnkqQWD4WVs4LTtWFWZ7qFio6DjEj",
  "key3": "3Aw6eYA4FhXTRrcoxcAtBQHRw2JjArSGu4xpQv2864hbtxfjTwAXqiErznGRL7ntzqThJ8VZXALeXCWNCXAdJXbb",
  "key4": "GjYU68aXh5Xbk1cn95YZmYoJcqasFD9SosS3k6JPeBrudRHZvNzTM8CWVGf3bHC1txZ7EMNJwBvZ5u9znSKrxWT",
  "key5": "5FV1Vwpz4RurrYtXn94e6AwybuSYpZmV83cCaGktozRc3QgYWBESM7qmsZK4ZCwFUuwkTg8cjGXNgYxvYs78PKYe",
  "key6": "j2eVH87Gy2t3JXozujbrEzoVNzHjaARaj7Gnb97LSPGjCQh33xmtC7Z9sEfG3UWWDy8jJKoy9iSTRrqqUDNLrUR",
  "key7": "VRjQKGqMYjhnYfp9rNbNExG5EX1VYa8NhM3P35k53FjzSDAKUzdiJYth9ERfcnMWZBqazPaYZ382jidiJjVuonB",
  "key8": "4Np2LPVCQwgEXQFnWBSoFdMqg6Z1YiwE2nJG1YpJ2hVL9rooNEKehZDgfuqeSacnu8ay6pJe4ETkud8gDrqAGLcH",
  "key9": "TGLLxyj4HjrQawRnAmSubNRqZnvmZQiqqKCgT3brkS3ct3DTJaeK2HrKcSsKABj2bwXWtDjroyEnju53SmMs7AD",
  "key10": "DXsfeX5hAdKh1RoL4CT7WpXDU1pFqJ3f3SiwBfizsAWgK2xZaLJaGVEcL1KcuUx3ug3tUWcYhJLdzzAuvh9AtVi",
  "key11": "AzrhyCbbmeirrVWwqaicC5xiMd5wr4Zx3h1trg9RCDQ5VrPAkBv2WFqomMV3DB3Qx3PVQzSEtMDdQpwS2oCufJc",
  "key12": "345Xz9wjYjRLkGUTakZaRJkkp5sb39GfeU1NGX7PoVdx6PzVBPVbadyHMEDps3xL845K5HfbUj41KBuK3RHZNdMu",
  "key13": "vsrCpYxMUF9Bd9h9jLvDSTxNreRyuDAHuK348tKkbydr8eC2Uq1cuL3R1LgcjxUDERQvNm4gVnDgFnVzgUaABZx",
  "key14": "2eMP6D7MtrsnAsVYvag5A2BuA9DQn1Z9TuWS7oXzjQrSRYwSJNXYkufrsWZLvjf7EL4USVp8MVpCyFKCQ8myf1wc",
  "key15": "3ZPZFZMYGGqUdHQyqcq1i42YDd7xa6RxH8RCvW8DVZAtshm8ygFziKJPk9bAEt7dLjBFHq2rDrLpDHX1YZ2hAG8K",
  "key16": "ruZpm9gVvhxXnFB773WeWUPxYDyN3noAmgJeJ2gwLCfdNWff2uHUAZq3daTvqSrjtrET8srmbz96f72uWLUQuUk",
  "key17": "3fQxBYVjd8YpmZvnf8vEbUmNFm4cVMW5eSjwE4ZUVv7VZqvaUdHavfeNrpfRaxTSFnjhDhvd2uVGfc65o3syhTSk",
  "key18": "2SxmfuHPp8RcHtzaeE6jQLyvq7tTBEumqJMWXyLq1KHUhLjaPMr6FUKPyhatBAjwjBZ1oPLBKfHb6JEPANTuGTTy",
  "key19": "2k3VRSp1UFFPjBGbCWJFcszNgPSYRxLW3CFuZGgpNqPDXkFD2LPmM1TfbgkH6qaeSeh1nqejVsjSjVUSqbuDokE6",
  "key20": "28qLfBDzBC7UEajU9qzrGwzdvhKaAs5WcQemaWeSXmvGAcaJ7RxNzuFogZU496woq9hjQLqaNtZhAzYJaNkii8np",
  "key21": "4ixEY7gUWG3adEpsu8ECzLfG3Minj7cffsLTrCRfDpQieUZ5ibYaq8CXtwmNFNg5FfVjws6dDF6VmVRFTrhX5ivU",
  "key22": "611iz2UB3rcf8bgrgHTW6hCXPmdNxiR2uRbPYkm2DWUnjqCq8xN8z63oUjFasMBTtNdjPmMAHP836aD1HzHJDgkS",
  "key23": "52HHanNFjBX7PyQaR4MYUtjtpHZX1XytJCCAKy9mk7dqG2k2VhQRPdUuCZnui6mimaj1i7KuCUDEabk9DrjYqAH2",
  "key24": "3fu6qKnU4aerYMwkaYBVs2mAuiHSdTQd9BwWMAU48AVWvhny74CX7a3mQ7yX9YBGnqVABqp6VefGCsMp4L6C5J8g",
  "key25": "jvfoJV85HPWMuWAJqCxCeKJoFRmYD8XR8JavDoeUFpNwJnRczR9swQkNCbDDzqDLUHznz3turB6tgGwoAztf19F",
  "key26": "53bvwPurGGxJfSp48FGTa7bTM6ZwqxVsBUao5Fp7Lpo3sEmEKY4MmmoYtqFWcZfvBPT7jL7wa7MzZx69Tit1f6x6",
  "key27": "66tFNB6UJa1xCMjfYJcvec9jDJL8Vbdvz7669vEPabfmRto55D7Wm6hp3kNi5wxzq1DPaUapekCCXecNW1vjBRr4",
  "key28": "21LUWoujUP9wKRiL4Rp4h3kxcn2KEqgyBsJDoC5HKk875JMHXgWi2mgndwuFBqTr1RCbazk75f9w8M5ABv8y82iS",
  "key29": "4Yte7aLBfaJTf39docsTT5d6Lqoc4nCFT12FsKg4Q4J8ubPwPuaCU7r1nyyLquq1qRkAtemXJJ9VR5ehiSH4S1jL",
  "key30": "54Tax2MfijHRfY64U4PdoY1X7hpCTbX5H81CS6hDwgiDNewxxLT5t7A7i8hGMbb6831yzoMf5fb7Akevw9uCkF4p",
  "key31": "2LtgJA5ZMg9FWMZ595fk1yT6CVoGMHo5onDG7ohzGcGX8gASE7TJ2Eo9tmX8TtfEcEpMUiguZjvm9u1aCT738Kr7",
  "key32": "2o6uorBsWC6L95idfVtTB23NwwhXxx1BZVyoYdAKm4t9RuzXUib88diSPwtPNL7yttTcXSdLoa9pAfVqmpXawf2H",
  "key33": "4vTkmMttTBXb71BWs3ZjNSpcnedVoScVBZReJAFTyjMoNRRSxdahnFSBWQJUcfQWBg34g6XZoWvJA7UJFYVAtYUV",
  "key34": "2x7YLNpBKJJK5dCbMAASV3xpx7xVaHNsQgfCF5uPwr2PZFhKL3WPckY5fsXsYwP2azeWgbrsv9PAG8RVJvjX4ZC7",
  "key35": "Fe3emt5mWCLMkLUMRw7zDL8GejQRt32fFWA2iYgnL4SJo2GjiqShmQXPhYZ9je7ikhJBNdQbAXn1hw3Ezi4Dn7J",
  "key36": "4Pa6gcV3CQU5umna9xHuSQtkHJ64RtZaNDaCKSHT6dyP2L4Cwpefios2eTTva43sNhaor6PMcBKxc8sRj2SYAYqK",
  "key37": "5UTCXvqFZSKavKZwBSjejDAsxFXzQ28rGsJdaprz8dXpgi9xEaSuaoysB18ZGCykG5jaNa9XYBBKu8WmS1FHk79q",
  "key38": "4pjj9LhKcZsFkFCE1K3aZo4u7mhEbBEXhL9tXJihfhgv6f63pwSMQo3Xp9mqG88dqUcDDzCm8uFEueSa7NbFDgEd",
  "key39": "3YrQpqFU6tCbmkBPAuMSKUs2DXPVrF5kiPhcd9cgH3PecbC81aNcb2uWzxo6R827G95Bv7EbDznVGPVRBKYRTAnB"
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
