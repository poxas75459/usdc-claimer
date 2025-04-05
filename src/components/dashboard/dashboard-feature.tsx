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
    "3zj6k8PqoAxmVt9bYzuFRWdnn585pyM1hbxtwjrB8awFh974ujaedihx7VLAfdPPbELBuCC8rL8MtULBWW1SyEzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKK4k7jSNMcWoYmHaT2yagZzLzm76KYFjtmhD1PeLFaY6visdBhAUvkiLLjtPLGyy8LEF2ZkvAC1fNQYavTpAVw",
  "key1": "vzniRrU3UH29R3fom451yXySPrVE9FTKAatW7wqHXfpY1ABTUmfWfpPgqkPvDgt5SBXHJj7FoGC85fdHXRdyxUd",
  "key2": "4HbXzvQKVw3E3tB95FERSRivLudzdDSqWzvUaiLKHLzXjE4S5zmCHnfVhiRiJooNxuvvQZcw79MJFCnYtw8vvLuu",
  "key3": "5neGTWce59kUrULgXrPTG5uNoJhjV4EyXfpJQpZmYxirhk6Qe96pEz7mqq1BRGQCswMBFmd83woHUDBLDh9QBHjj",
  "key4": "4nTuJWQ6jbKBzfMoy9Dtr1tmF9jDbuaNxADrKKqYAWzne3wY1TEu44AHA585XX9PoS4qUDJywgXcy1oEVrvaykxC",
  "key5": "2SVsa7YSxB76Adr5xaY6UUakfRXXMXkpCwcKC7NdP2Axrw3PsWHSQuVArkQV9Gys6vj1pe3X2rhQMYzQt2ZjcSou",
  "key6": "5DFVuXYw2kVtdwsYmGnUEEejdBB8Gs5QFG6ZN1MSW4Es7sDosFCAFPLGxpEpRWdfCkpz9pxVy8syKTs4U5Ge2FNC",
  "key7": "Z9QF7iRwLYhivXQWwGzbq6JDndURAgS7uGKW2gt6ojdjRuJESzSpLjg7W6N1TBbdjxa4k5th1hBzNEnuUVxy4h3",
  "key8": "4XU2ArF6f6tv6g6ZSkPoNgb3Ho2Q8eFFxC1MekxkFfUBWUYmQFGiJNdqcQjFm32vL1e3UVigdsjCRU5cHBdVVKGc",
  "key9": "5snZiSuFX9a4RVQVRsi7JQ7wfughGz4NbrvKG36ruyqA1Gfu8NFvNUynhjcWyiXCrSeqZGq3L25nF7SCodhLAkxg",
  "key10": "5CDfFTtv5GTJBCzTBBLMhjrqbm3gomksdAkNsZfsxGGMk9p8AUruMcnagmWPr16URdC3mNjWWeNDRbUoptpqVXY5",
  "key11": "5UsHWRBeezCeFnvXDi5iW6VMTRr1fLLSdZJg7sePzQzpqNoJsVQsdqYydyrG6ohCK872mdby8eErviMB5P2oKPmZ",
  "key12": "4FjicY3DPEB3BwhN5cuzPAQdLCkP3aCViUoKt8jbXDtTENQXW8x35j9YKFZ5cKw5dbSnZpb32zBJYb5MpFVy4MKe",
  "key13": "2E2z39gwpqpHwyCdhpS8mhi1JZEkC697ugfji6ontjKF1RjEk3JDTRmjXzr5fiiqKMn56hGo1cSxNKgYWCrbC7Ad",
  "key14": "4c1Agyf7pjw9G88oL1bjDzxKx5ZhcY7Aq8TAUfWYJeT87tDRtUsMCpJhda7P33JdC8oZQcoTkLnsREytYgAZL1ou",
  "key15": "2LqEX2MHfXASyxQoWenXpv9mf6Sb4HevLUg2E7RqM4YJcn7wJ1bCrF3QFEba9FBrycCjZnQjfbjiuWg4ZzMmUcKp",
  "key16": "5iV3543i7J4qJ7A7Q37UDKcYsDk4GAeHfXf7EU8zEwRLB19WrmmxLsyYYfSBccR1GjzUqGtVipE7tuFfUcB88wz3",
  "key17": "Mhb5CWBX3Le4tCsQ98tTCVZPQJUfZ1aAKaimQ4fkkx4VKdRGEUFr8UkRgGrhmRCqEogbpxt38TdFDJ8jGtAjaRU",
  "key18": "pZwSpLQy2RaZagaJAjjCVw5XVW43RsjTPU7WeyYw1imCNGGEBfbuEKtazcoeUMCjPLFMFxKLgiASdo8QgSJpMqD",
  "key19": "481ce6HNvWCKMkrCZkRT8Tuz5UenmPQKxdk93WfEQKQ5yx7X5nSWfhPUE29CuGzrWtrEpgQkE5v6mn2WkF4stty2",
  "key20": "8aPQA2HLrqozyLXUByM92gMKAvbUfUogAj4X7D7LvufvLh26QZKtsVU5JWgEfEx1aTXK7wDyEADhrkxrdSU2aoe",
  "key21": "44HoJsorsvyGTaP9HCKxEPhGViVua3PJGC6Vobwi7nDE2ts8arzwu9JRo5mrqPkKDR88i2bt7fVvk3MFfoYmWDwL",
  "key22": "4pA8joaw3GKJBfvssjQJKy2MSs9UEeZawALW8NUZD6BuMyQX9szLeVHQHpQaRMpLar7oLmFBXb6dA3Vo1yweyiBb",
  "key23": "ZNfGmfvPRMkCSXX8GdauH65QXADYQR8LbC7eqgHi35vx4jCtuBM51X9zqudEwNNpHiQ6kpALzWnk1oYPP335fY6",
  "key24": "4SiyXCHd29C29zpr6CGzT1aPPcnnuQcSMsz9u3jP6mcYcXnpcrFVWg3cqQCELbRgEnJAKjVtpDjX1U9koU8uwQzf",
  "key25": "4Kd8ujymxSDK9x9BcLKXgGNjhgkaqmWqASJhQECA8Jmnw3wVoPd2YpBD6kDGYsEffmRaGPxag5hirvzbPsM6DNf",
  "key26": "5S8KMYoUffKTcoZ47oUHStU2VvyF2hR5hD4R24M9xe1qvXMhViJPU2adEbHdDtNuKFoAFpeUVemt7NiAMouzMizK",
  "key27": "PSgoZpT7NsDLFrdf7oeaMmSCsuctVhGtGLrNe6dBdsZY2D8RhhDQPTiNG8Uf1HDJivDmMYkeYnrCAL2SEb1bBnM",
  "key28": "5HjysLhbg4quq86GoWZxxnWh31hYubNu8Hcd7GtvY2Tp6dHkmfbkpf5Sx1CfZQQsn8hPE9aM5AM8StsUnjzpCJZW",
  "key29": "5Beh6qGRmb33WjP6c4XxDHNT1RvEks825hFkwyTKPPFzA1yj3np8SLxnbXTmZo5iYvjc5g7Xh7cFCZ79MhdEWU2Z",
  "key30": "2Ek1X5x2iWEWNHCDcY4JHgZHR9rLwAq75R1GXVS5FD6jarZMSviBGpXtwmHD2GWsT1rAu75ru5LcUaMUcD6bxdRb",
  "key31": "fRH6swEZrzNSypx5p7VRkTuy1A6ZDfEHaFSsbUdawRW6kNAFWg9WdxZxDi8cqLVBvc41TXhGVvswkbD8ph7DSmS",
  "key32": "4wokjJo3zkXiuzYeKWmTXH9rPAVCqjjds15BsjcAqpefFc3wBP37nuuJ9zh6CrxLp2dcuELKbZhwQf3iyMdwQNWe",
  "key33": "5LmdJe1SmY9oGxpEuGZq3vPKsJgLzzmGJxLph4kejLunP71K1YWd2G2ugWdXvjKMRj6ma9Ebyg9SrWrwLANBdptx",
  "key34": "2si3oLXcZTanU6DMrHrkdQAo2pNsrSJeZVmRbyu4ErVvph21XD5BUi1aw2hsTMHffzdv8Jd8woe6amSJCruqHnPD",
  "key35": "4pXBSEt9nUKtJJ4XmdmWSAztzb2o3zHMv9HWtY8h9r3J1UhvhB1A4QRA7MYdKQgTFou7G3fbj1SGt5e4NY12p2Km",
  "key36": "3Eyp3w6VH3FbSJSM73V5uGTctXULzxhL4BgqrYt9TgbuoqDFatnvsr14gGpzJTRByyKRax3mchvJGBkuchbVHSz",
  "key37": "4zoLU6MThUtPXanCTEQYtGZx8AvFHgyvuGoAcETFT1PCKGHRFHCZRCPLWm2f5GBGSjBhHtAhFm4tPjDKijjTbCoz",
  "key38": "4jot1fvubsEPLtV4XNHi34W2uDXpX7vr4M1YBxzuP7ev6czJiRc156nZUmwx7CC3uDidSDyeu6ZH2gb63bV2sTbN"
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
