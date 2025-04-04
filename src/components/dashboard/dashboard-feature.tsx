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
    "3PEwBcfVCJXHDkicApWbPu6eV13afKnbRVgDDeAoYDTBRXmJeZke6eD8jkFcmEbFuyM5sXRW1WVYaRoy5nYFV34z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzRFodyfgK3mZgsyx6EQJGoydAv2GEej16nWh9mmYy7cqRP8E7M1d9KvFbR2fuWK2ABwGe35oJvVF37tNw7ay4x",
  "key1": "XbthAHcHaPH12xwXNU7pis4efjVYBLa7mkdys2GvggmFNdxdro3LpCkbE5BYEHY6yr4gNSsta8YBk8uFrkShV5i",
  "key2": "3uisYjkxDfkLTPPGNiSALk8wDt8KSZgduUesym4bGELbX7pKG4hV2F3jRwjjXf4h5XhpYum5FBCm3piAoEpXMJuk",
  "key3": "caGeZ8Sh8m5E5D9kXfyEngz67j3AcfLt8SmW7XxRSMHRCwTr74AALbAkxWi5pgD1gdzqBkKTXrMJZ4LwmakgC96",
  "key4": "4R2Tb8apLRtkAixUg5KynuVkEivteEdvKEhsJo2RZGT8didGoV9mQyiRHXS9PsHVk58kBXYVAnB3CRzdLb4UBVaZ",
  "key5": "63X8dsD1miNa8skoAE9Jz5VQNgmsPvtsD213n2injtyeGwpy4dtvCisocXy1bKhS7iWqPKd5KuWThxXEcHiYrTv9",
  "key6": "3gh6gna9EyoZYpsHmMicQbwFma7AzVSpBuEsT1cTbRBY56w7VK3DQ5P57J9DdmomxrmEoFD4PP3UMUc1oBXrRoCo",
  "key7": "FoZYwkPNb9v194BotDcGPMVtP4cPVNzZM3osMzSuWSwvosi7N2obCUrStfLaGjU5NGJhNJg8BS9gXM7WzqyWSv3",
  "key8": "4kEkYB2BgGtf5hsrCP3gbariCVvBgn2XSsdR8Mnwn1nPgw5qbKkrNkPFdY7NUcFw4yWUvEMgTo6KMxByzzB9YngA",
  "key9": "Ux3o2ekbHSaFEr1UYAUgs6ZdChFngKwFiDkDpez397y3iHx3UU9Zq6T5SRVRdZzaAJcnsEzhUpCzgexhfz4pozs",
  "key10": "337p9oUr5d9SAF6BUKAr61uy1JmbN8vrTM3zvr5DXUsU2SXFphCPxdzp9uVAkfxeD4QxtnjrocKbPcnHgFKrSaQW",
  "key11": "5FAddJkb8GRzvkxS76LPKE1irdqq72TsscHSi9GNFDNy4Qf3X6fA4d5edm9mgmWeFuCy2jC5tfWey2Jt3aawtcMV",
  "key12": "2mUT9HxeFKJwdGpv6gfBK41GQgYJgeLHjSeQDRqcMJ59hfVQu5Q9HxQmyfzCkYNr9qBELAEwxNL9jW5PjcyLe6NA",
  "key13": "3SYvttNaohkgTCFYNoeWAdRdWWG5kQE7AnW3yJU8VT3XWaYq1iZWCyKUWatTPSjdTpPbficT3gbpTVem2iWjsakM",
  "key14": "63ED1QZCFqPjTgWRYvd228Fqdy2pbEYoutYjidPjBvpnCJVeQh3qZALPpzT9tSLH3Jan5L1R24ZxApRf3giHiyhP",
  "key15": "5hEH2ejWi2NQ8bMMyiDLcJcorN3cDqhcNDuLRsA2uCWFxohx1kVvz2cY4DcvqKBmtsuJmNv1ciCj7aKuissgiMVn",
  "key16": "5Mc67xkwdBK4PuHt2nfmb7Np8EjDJt7njqA7twRxBBuAZ4jVsb4DhVBPa8QpW1UfaGTcawxAd2J7LJxydMRcsxu2",
  "key17": "53HmBJ7q4NvE9fsaCK2Mc58pzyRrapo4eKAJU87zoFxvwnTLvvxsiQ9RgRchQMLnA7LPiwPBYEcea1zirmx9Eg84",
  "key18": "M1Gh8UV3AUrxWjtsRfwYLwCMWb2kxL9xceenjXBwLarkuqTWqPdgFbc2Dc9ge5cN78anaqHZbxVNkZyfRsfDRHc",
  "key19": "Lg1cfXB97fyDeC9WyTw81QDwnqFKMMfWF6ntSfPfdFKj8QRVFfXz9B7s7JCSn7bJbQeevRzYbhRbRZYfriCdKMU",
  "key20": "vihkEPDxKJAVHhuNmBo72ggd1sVyGQyQB5GaSet756dmvrNvSjQQoeFKHKpHLd4pbLYruKaqjEPc7ntctkCeeCu",
  "key21": "2sS6QpvH6Z7RVTD1pqD4KpJcqQJgNkb2Byg7Hcddc7qD4tdnuwj6ACDvfc99246aXPoBpu7F1ZbDc2nnfDj2xVrm",
  "key22": "4wR2PFGQppLM9SfkDsmADTovYfrRZTYnA3x7qJfa1KjRgYGRTK4bAwHGzXHa6tJg4w11KnB7EZBfgHA9C9fDiJnQ",
  "key23": "3G8ndeoY8GPftcaFbE3f22SA99NSqfESNFXpV2QkMUCKjdZkd6vTrsXLYFqH5t8pWzFSFQLaChHExJUh8TEcUPTz",
  "key24": "574Su4Sye5q9XoQ4tTsjBYQ2X5xESRiMjyP4JjdbhPnmW1GEmpv25dTzeq1RmkeieyMBtGFwwtv2MrcT2JqhroUZ",
  "key25": "4eBG5kJCfc2ybkqJW5a787jfj18Gje9SWQCyZV48dxAWnikKXwdC69dB7aMXQPzWRQq9SdrYom5LaA6AQaS1QGYD",
  "key26": "5BNe3NUL2TSb1YmqpcNG6bPCrReEUMzjFUTFycw42eZDviF53a6s97tNETQ6Hj2Y8MkWZWjSLLxfW7XNDzY9vzDH",
  "key27": "3hQMHbxn2SUXA1y56MfvFTuHtgWBAQuK3DPSNRmkNzwQBvktm98bBJaKDJk1jztzFa9wBUAxc1tapgRu5LceC8Gi",
  "key28": "6cgdobYr7Y62LzWw2oFQqc3Lqh4mEcGYVLZAhjoVXf3TtLKshDaG6Jge2Zo9unxUywkjj6niE7kdqp65VSNzvQA",
  "key29": "5TrGfeXJ2LUzA3K9df5PusaiLA71R6n9Yf8omE1U9xALhn6rvQ1ZwVJu86aYtjzNKc8mcRspggDrpA3nf199xkzi",
  "key30": "5euMo7giLNaCASjQu9UyY4yAcL52xRm3NhkJunripEYnLNkHdutCBTrfY8cgMoePEqpXXujVW7Z4aaxQH32DNcB7",
  "key31": "5bmZMp3mm8SYpexj17kbqeVLE3FXb6qFV7afZzdCcRG1QGbcrpRYQCQKkM2GKZdFmEYrqTkb8uyibp3PQNmKFiBA"
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
