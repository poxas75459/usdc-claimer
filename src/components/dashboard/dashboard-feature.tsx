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
    "5e3bbWFtSvditgZQEXP5wCoBr6nhpFCstuKExvtxa6cET1fUQzoeECx8QaA24ChXCoJ9rtSpxA5Ksx8f7GyfCUik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gWH8YcnbBcZozrpTDi5Z8BEdMwg4X8VK6VZpLrE8d4jx13FBXASzfKZrcPv291Js3vML7SzFSSvqhWkqar37gW",
  "key1": "5GykM9Woamq3S7yiQcuBowh1QwEJ6myBj3ANhgAt87EFgbKsyFs3es9kVEKwXYwccBHKCGVMeuGGJUxkBe67Ynin",
  "key2": "4DunLgG2uLWpwwNjMUSzkQoctcuswiADSDEs8Tuo2Bc7ZncJvXdsB4tKb7bSFs2WbQcNoWLPBEgFCvxi74aVX57p",
  "key3": "JWK7HsqrHRcoJFQE6pAKAucnDtEn11qRAMCnsQKThVBtGE2hSoUWx8V5un3EJGeq61HNiw9sELefjXo8riuvMLU",
  "key4": "4czQsKxCsRpi2BTku4c1X66ExRjcddvLDp1dwwApAy6h5ZkYPGtSGzXvZtdfrPcgS8rDDrCuf2rvBTcJbqCfa6qR",
  "key5": "2MRHq2PdxcsCsrFRwpb5fXzeBMsRvQFHerVDdbcoBia25c1wBm8sPHuwBsU51TJiAUqhTNZsGqKusjDVEvb8PT9n",
  "key6": "4fCYdzcaY5mXmH3mw2hirKKNxi1CqjQMeaUo5hh9ttv6WxRTneTnK8dfdZ5mjZMheev5eDahjLQ3fAZmDwvvPex7",
  "key7": "4N5WJC541aE7NckhEfYGN2A6uBFpuximeiYvjoDc4We4MpS7kSca2oKGPQLZ3aiS86chLq5BtCw6r4UKQ4RpWw2r",
  "key8": "5scQqztZphLLsYKUJw71oQzFWWDPVfxAFdHSLq61NVyPjTbYTDhqjGk9QodgXyM827puoTs8UXVFT52j8QoRdeB6",
  "key9": "44rQFiXbBcqByNEuQ8aKdab3Ssbz4Kns52JmD5aXdNQAEkbN8cXPT9wVuRaonaBWnMY23c9f2tvDyNinQWgzL6ys",
  "key10": "2CqYw8AUTU8MLzNSui24XTtTWPRdpxYuBV7irQ4KiQSX29Wz3TNhCRpvLqBWmV7Hgu52vBh9xCb5794U5edM6jnm",
  "key11": "2GQAsfunAouGDE6zjHoQ5kHQGhyhMd91Emfn1mFuknBUSxKEwVPE1c3F3Pm68fYoUMijWXhSRGbL1b3RS5khSPot",
  "key12": "2WXcbLe3iCawjE7gE1timWzNwSx23VgyZRrt5wnfY2saZZJaHBjTa2xnoYkASdkTYSWXx9kvWgVKNb2bvVU6uxBC",
  "key13": "24o945AiMGnrsyN6WkmP9aRXkFPXfnp5RRwUNsUzY4BU9TeiPXVWC8PqWMtiRUcAjLfjNAcfKnPmyDYr3RFcnzdB",
  "key14": "v8UjxXXh14WGY5dNo8qnZjHxYnYWUwMMn3N3WhCf961M4dnZCHhNKD3JD2t1WsTGqyFjf48mwFa7isv9XnVKnP7",
  "key15": "3Jt3HEmf4Da3CYKxXqYDuLNzpgpuiAXRE1SL1SBCxqYgmtGokm9ZPyHrTT42Xt2pDxDhF9t3ov3tRKMuDaGA9zCp",
  "key16": "4oSGj7CAbe8Uht2qGUBMCp8yepD8za4eXsN6pU29KmeNvQjfBZW9WpMS9fnVXy8D58czteoKMJ4LJyLrLvusyW3X",
  "key17": "4bto7yF4vdi97VQABsUJCKMzyEoajqPAfN2HBkXKrvr3N8p8ssJJLy5v1Takmfb4HZYHQKgu9MeArbpx7Jdkrqe1",
  "key18": "J44EHkatpEtKoPrHW8a96wjc1PSmnNj7QcVup23Ww6iuGHUTtSPGUfoUVuvm1zaBX5WyBH3fivB4WncWGwaXhku",
  "key19": "2W8QH1cfG6LZv65NLSGoSqDRT6bA1dWGD27aNByWZn8fe1nJB1TGuY3qApGxiDX1v5Atixg3Fieojs1aCaLWFMLF",
  "key20": "4Z3msL25ixG5PZhP84XhcVafDLANt5paQdd6pbB71wNB1X4afeDBLD5HBhu7ovhMHv9zRndqsv1SyGCxDoRjU2uh",
  "key21": "4azjYGj8RC3zPzg4Sf39qeiUWmVvTHKvnkPnEjakSvD1Mj6tVCE8JXpD6L951ByMYLt69FjmRTpoLnobnqrvgFL3",
  "key22": "4EsaZMz1paihZgHLk6gPLbkUdeaC1XerLS1PsLoxP2p2tHxjZPsZ8g6vCS3qYs5fjPKbKXTQUH9pHNQSdgWrnW4P",
  "key23": "4WKzeMxCKRbAjtD8pRa5ma29mA5SogXoWRYV79kwX52x8umpsU3U29w8pAhaxP4BXtRRQmvFKgKADquB3CUunpgi",
  "key24": "485cuK11agYUz952cLsy75BZ3mB7zwFW81RHWPK7eKACVUCMgN5mueaarit6jGiJUmM6bJJn7MfZEPJ9pS1dhTBh",
  "key25": "26bAGwEKGjfP6ZwmmcqzBReUAiRuqcAUR3a7AGYAZGycowvPi2GS289j3BsFyFhgHVSQDXNVEcYpp87f7pz7QL8G",
  "key26": "cUrcAkPSwYg5i3kXjhMFaKy4QiS8pzNor26basovSqr8faVr3XMwV9dbYgRd5iY3tfTDZ6Nkw5fun6WJsDPZKi5",
  "key27": "5z86HsdpPBgc2sn71BiHoqtFrDEYmq68KT2e1buqp7W1ESSSSHv5iamqrzn2SVvBzBv1URLQRxYphmyPd7PTiijm",
  "key28": "66VS5orUSvQkd6oiLEZ9wLPEvXa9CdNFLC84o6MMxFgBZMgTwY9eP4dueEEHyTdmpJ8B6BSK5FxB7Ubp7UFqDYQW",
  "key29": "4p4Z3knGKgBqLRm73DoSnqiGzuhYw62c9oXqHWXQGm5VkxL8L7VGq1CU5ya2ZR6i7NMSJm2dyBraN3Ec4dctQdFF",
  "key30": "AU3j5YNLnUovxkMsJ9ZE67uqUQ9SmqbtjwRjs1sAZBf2boLhESLzu5bAfEPTVKczQNTdAgXTUyZ6TCgiRdKKyzk",
  "key31": "5vqrxQpjmcsa3Dmuk5L8GUFzEZ6d9TbKyL8z8iWHzdd4ZbL7cWoLCMr1k6NL9gwZb1uKygWmNiRANq1zXL66UxTT"
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
