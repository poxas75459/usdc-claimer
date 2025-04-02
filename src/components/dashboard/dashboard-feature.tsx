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
    "2UuTuZ23JCpfP52TaU9bCXL9Kt8XvPwyoegBXEfzX3nARwtH614xTckJ3VQQmjPUzXFReyZQV2y6fhhzWnaAkovh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4in9c3hpgfMi9rgLD8dpoXG1Hj8HQTqB4UibHv1XXnSMTW88KxK1wuV6pPYDsqYJ2cYkdFBVNAJF2rjAgmJzNow2",
  "key1": "5TtatH2g5BqSutoKeFcQw1vHh7H4VT81gbcfGDPWGsPmNFPb7Cfr5XwkeGoeaSbTqw3o7XebGyrRWFryeDdThGXF",
  "key2": "W4U2wjn32LkCWVpUbLwRNS4xHdiWaTRqgJx9NfeJa3PU9ESXVujXQMVA1hDdFsSPdj9MjkhvBEY19mycUWqGLU5",
  "key3": "4tMyKo25MaecVKmL3P2G1Zq2ugFqkuTuc6VaNoQYzXjPeUFc2zcuVgeiwBXsUQbHL78xtUA4UW4TfPJt4VvaTJPj",
  "key4": "2kVM7ErxYet8X43X1fgT9jSZjmSjcfUZUQt9fwinze9M7ZxUhMkwMNaJBLaw3kKUZ9221a5C7fXHNXS5eHZ9BULu",
  "key5": "3mGGYfnh9qP55qMbi2YdDfQexY2K98CXkWF5HbDcRXm8LQgwe65PBFqe6hNmwcmtichMaVejgS23N6gUetZf8cmm",
  "key6": "5FXUC1UyEYc5Rg7NzbCPF3i2noiDQUDtWLghURnP5eDD39GLCXd1RZCrAfmaYUn2X2AYjc35GKCupRXhJtLHcnz3",
  "key7": "AdHYSgExsijMhrgspk6byYnDqLZENGGxApnLjesSUWeYLMh6RU6p6jmBVzcVArsCTFqoTVe5m1Ts77cHEPAKSQ9",
  "key8": "4WtK83UiVGhJfcUmFgj4tfQbKd1qfEzVVES7MmYqEreaBy5p6StyJmsHWNCiqr2tZZR7YX9KN8oUSRaSmQKHMPey",
  "key9": "4Db2z4a7pQoxd2qHcXqn5HNk2VB4vCoxLwDfo5GGU76TgQYtR6yq8dZbyt1HtLCjS4jNvJFofR7JM3FyiwAW9jN4",
  "key10": "32jxPwXE6txmjNtR7w1KJkgND1fiMm3CoXKzmwNmAHiSso9rftbPgzfWrGPCjoGXdArsVT3fV4W4t8cdk3eGZJcV",
  "key11": "YrcJWybKC1Km8rqRzHf9eP4aHUDmwqQbG4pQRj8gd9tsSuuWxKsHsn9ZVuJRx1mBdmph9Q8itJ7F9CVAEeCAiyV",
  "key12": "4pNaokcpDQyhPrqGVY2FG2tpVWmxYBYUEYC6UrDFk7U7gjHxcTcEyDNPLwZdgBupxHpd1UBErpYiWuw6YdJBe8m5",
  "key13": "5eV1go8H4jq86qXW1fniig9wmeP3dv69xYkQrCnB6HeDYGAnGd2FJN1TAPaZDxrsoCWrY6Ujos6HDNeVGGHG92vm",
  "key14": "4PQWJJFN7hY77D4BEzqGRSKA1uSEyJZ8n9TQULUYJfHV3KixDdYsiJjumRjFTu5Aj3m4zaNeCum2Nn5UgQcw6mtu",
  "key15": "M9tfpPzSsLGVY8mVvBEtpkbTPi8Cs2uLQtndzcA6mrTr4r1tvddGsLdpRaCzqZKsSeEudDdEx6uMNJTDYangpDb",
  "key16": "3jSGdLEdo61PeamNvAxPe984rnNHjQd523uiYrjVUSRbtSvtj35wnMKXqSsWSQpYbUzK6ujTWnDK6vNRuHhErAi3",
  "key17": "5qyhztZRfSxZZqkCP9TRYRHp9B35cHfztnjTBdWko3w6DwUF82h8JwzKzz77QA11C5KEP4fLMvY3YQxSnsG9Lr6b",
  "key18": "4PsnuthrRLHegusuAhWmAUZjyXYAYBsnQE8JjhTptUmxmpmAG4sHxZXgrCmyieppxE8qbooZwR8yhTJenerUisLP",
  "key19": "4bKU3UAEvKBtjuwaHrkHy97zkna5kQbYV46jfjTLWgn7Ny5xakPzswsK91WU2fAEFjRWjUsvcsaq667HSqPrJVME",
  "key20": "3LMPFBygyD34yesuG2B15R1fYCpfEgAKB67JJkA9MKwdw1Cs9RQJGCyh3T4WzKNGfptQbR7gNipbkeZr9iYELcAe",
  "key21": "3XATc2K1N4852PnJWqgTAjyNCfexsFnDxFvVa9bYgjTPpzQpQ9cwsCPG7w6MRhSgmcdZ2nRf2iwTK5goYnAMDgWn",
  "key22": "2x3whWGLUEnwB1bpjdehYpaTucWqME3voahrta3ghkzLFdbxMJBWJvpMCUNGEpVLKjKEShHkif33zuyMdNikJS1Q",
  "key23": "bCc6iqYujjrukWHVguCbJcgpoLmvLgTKbFmyEjp6tW2MEpYDuPbhYVcKPjpJcKKuBZAXwhdH6MZdp6hhCcmkqMV",
  "key24": "51tYMyKTYZJXPCPwwJ4VYsPThRzbHMsUFWiNYUgFa4pcDYLmAD3rZ2ubMeQdu4R4stL2ysABCvwfK45vKBdsVKcL",
  "key25": "5wZMT2MpnCgKqm8Wm5tECZNEPaLUS1GxN98tExf1Sh9g4YwNo8NUHQ32Enwy4SX4ANjynq4nJb6XqxrnL9oC9QEN",
  "key26": "3RD9z7t184LXQtD6N34hnDYyXxijPmPEjvrm7vN8Rf1wrg9BdwLShnMXiEbokaLp4cYoiaF6gd3CSkgvTyPMCNsF",
  "key27": "2R5ueBD2kGGwdo8xtnJNDtTA9rtu7WQPnknAwUPG6fTN51EQ6sGq4BCyqLNbby3G1zikLFs37Lvt3Ze6VHDER2hq",
  "key28": "2oUesnWXSMnPrkPKw92ro2k7tVEV2ueEDvrTer4Y79QwD5ezdDxbvUMLmZLHLoFCyykpjBerzJHaQbcsh36FrWCL",
  "key29": "39bmVihET5nzp738wTRL8F2x4Yh3CBMhhf5RshKZfeugx2HGAgnBcXSJDtZiVMteXTfV2hka5Au81RhVAeNv9KLb"
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
