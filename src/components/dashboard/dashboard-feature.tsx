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
    "4BqREYnEDajgrKS214prbDqU1AfqUDEXE1CVqPN5rPp2wsjNa9pTuvqYQugSW8u9nhfLPabTsD4QtyZvRXWYW7GR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJxaFRMFynuruzijA3W5irMSWiKT97Zje2KfEVs79QtTbkJym1woS8tcGp2QWArGcLscLHTCAJ4zf7grLK6cCBF",
  "key1": "2ksrRVHQPV75s5oDhasae798pp4AeHrsKvkmceVfvs1ekGDXWQQDaNby2JWNCky4CVQNEf5SryX856VbbQLiEamN",
  "key2": "DDANj8v5a78WwsLBq4uAd6msA34g4cnz77KdWjc6s8VdAYa5NwRTz7siW5SUKMboNhD9erCekJhBGAF7VbzTqtd",
  "key3": "3wBvKvF8HF7fceD9Go3rAKgxD1qgX9cKHH4ZMhg85Gqifpz5gGFZWi95wobxMkzzgmDzViXSQ7t3YMKDE3D25Pg7",
  "key4": "4oqiFtPkHbEdHWW6S3aPEj1QFjxygKnh2Q2JtwTCcyFvT9oXd3LxAwMkBTUT7wSAhVtDpjWHrMWQZNtZsasWtgGr",
  "key5": "4NBg7cWogeoZD1ynAr9mrzNy1Ukn4nheZqT8TEBW7dSFHNVjMV1PKBHouTKoQJuCD7VZDrrGzkab9T4cfLQvVQC5",
  "key6": "4N45NvFrHoZ7aqtEedzQicK1Jg3W42Da43z6SbyZ83xmNfoxUd21CbAhUXPntYNgS24nF3DR4Eyw7oy8mS6qqu3u",
  "key7": "3QKoMhg39FDsY3NRzRu9DU2zzHNBkUBHyfmsrp5HanMku5CA5mxP1CY5rcysEbWLKEjJLKwYApZgr2rGotp9n4yL",
  "key8": "4rn97GxgyRj11HBdju8CooGTE8rLmDvgJBFL7uBCJg6C1rcFUSbUg5X2URPfvX2gXT9TL2mhgKxh2kVsqLrL7uRU",
  "key9": "5Y7kPzPvDf8esfZPh5aTxRNbTiAs7ziJEMsFJfJti5i8GFK2CDbHfgc71XQW6xBt7f6DhbuS3HiJ9ebo9gwWbK79",
  "key10": "417NP6x4tardJUwCwddtZSah2GTCEckbxYdBs6TQUREg7TSMbqUqRSyCFi1cnEM5tV8FzmJ5tZoSWPpfdBV2jxYD",
  "key11": "e1JTHRmwEkBAEotYm5q1AWTniDY7FA2N7YUCSgVitZf1y214pNknUSkCJxMBu1bLRZ2K5pTtWzzsxJiXGYD374F",
  "key12": "2BQEccNcYCrpw8Lsni4y36jDucgBuL9eajj6cBxaMtMvkdCqeBXaxFZeudonGoXg4KWetCSFHanniQeT9PG1S2xg",
  "key13": "4cMJ29UXGnDqACkrBCymuwSTHbQ41wmN2LMxWxDhnDKnqEoeRguCtY5UyadpZWP8933oDUhgMK8vhdy27mBhLfzR",
  "key14": "3jXeNUjrAg2FvVusQNqqufSka88oSpDtsX6xiAgfHusnsh2p2FgDoxLcidq3P1uNX31QdPSLaj7QvhB9NtKgcWGf",
  "key15": "5f4QhyDZeGdRNrBasJSY8CDMcf7TWDDLDt3KFUbogCD6ffothasK95LVCeMxzDp8Nqnaj2nYVyxm5svMsHd6xv4x",
  "key16": "47BNmZG9oVq9vkzNbNgKrAdmEw37yRqyuA881iATyXSs8bpcgTxHafXg3FpUQ6Fs8QDCnAn26nchK3qFzyFahgMC",
  "key17": "3L3g9oiTTHL1sY4mPHBbtaLuK9R3NuRAg1ceSm3EF4mUP7nuW6dnAQEaPyQUs6UTa4LpQAwcF7ATpyP93EPHvt9N",
  "key18": "38kdvrAZ37CVC6CCKtvoKsM7pAYLDyP5BxF8Re2QrbXHgV4z1YmViKpkHSKjrSQrhf73PPdXDP7gD9BNNQytoFxs",
  "key19": "32fS5jdcrV42MUg6hfe7KWgMaGeiBenLENvkyBqa1yJUyxMhk6xEx6pno9DMQXBdVayLJxMK62TY2kiMvnsNvDnK",
  "key20": "3ZVBMnmBm6WFGgVxzgjsZqvYiGL9hZAxgAyYcXAZasVS1cqj1TqzWqabBudQq3Cxp8zvc2hjmV6xsXqwe1KviUYs",
  "key21": "5n2cZKnB6Yp1bkFzaJkCvEDpvabhmfdxyCo5ZfbJN38ir4iDp6suySwcoVDq72gRU8WE7ydV9kwYjPsc3G72u75e",
  "key22": "5fXfUWtS6tkkNm1XfQZct2FsbQ563RSZJBDQhoaSx4H2L7PtgQ4BRdhV91cwdYbLUR6frApHJ3Ghn7fr1C1i8vjS",
  "key23": "2E1BFcbZx8hUtEyBGoPaCbVPiFLvt5PmKacZvGqvWfQTZeupcD9Y9hZ8ASRth7HXLU9hNmVwWDNQg1bN2cioixof",
  "key24": "kgbGeMWs6RGmWbqc9yzv9udW23YNZ6r7Q7twKWxpu6FdRgFzhaVuFpArEXtC9Nq37a1AJZiQYgzzxrQtGcVU5EJ",
  "key25": "2t6FP8JnNbZ9FM5edbjXsGSe9tPAUpTyPnbYmmzjxH2BY5W7iATjVckqcgaDZYoAXLi1TU4CiL1VpoMBEf4jUCTd",
  "key26": "5eURxpKN5QX2uDtvo7NcCb9RYRbLdaUqzVJo6NgtC1cFunM1DpqwzbA7NjUxd9TcA3NLA5je9MfxjtUsHJhmPMSb",
  "key27": "5syvjfYHDs2aVcYzDJx5pwZcAj15qNqHxm4dej9hnas6NzHgEVcwJZDe45qDcCG9E4peWSZVpD4gCYM8hTF26S9x",
  "key28": "4ZG4QMBQ6oW7VkJJrrtwPLwFNLYLdYoGxpRb5NAVYVfsPMsF8BTDYkR6aKtiA5fLKTWMPfCzKWwTdRzfXX7VQXMR",
  "key29": "5yz4gwsF7ACrigwB6qiBK8ycaRQgzb4Row7Fj6MyNA2h4iaafPTX4CoFAUZ1ryvjZHULFqaQeKZ4GuRZaWqt49ER",
  "key30": "29cucb2qPuf9ouhBnwuEPjug5cCv1qHCqANeC1RvkqS6V3Pnwv4vBianVfN86xXsFG65HdyT6TnFyLMtmi4e46CN",
  "key31": "pwAFdiKDv45rnBJ2s6cWK8Nmd1ph177Ndw8LuZp8BWk8V3apHtc8kb12kan33A16TLfKCtLcSxCVD2GwfbFRBrH",
  "key32": "3XkqdFB5sJMv4iLXr2d8Jzhwi8cRg5LGzFrWyVL4aMechNbKCCPYyTU2a3ZNdUeRvk7FMykeEfaJaNpfvnQ7zaS8",
  "key33": "3pcQVKbEHckDGYZQuUAVeeperVzMA9sXojyaJ1a9YobMiToQoUrhFKRK2y6vekXudwKZnAEH3pu5agT9AdaXThn3",
  "key34": "4cxvoFbnvzySEFVKkg76RV4GsQogVqb1KkHEegaQn7zc7T8mL3NekniJ6WfbYjgfa2CnSb5g56zUcdvfsCW7zjSt",
  "key35": "3zpcrQaqEPeB97RZEFataw1U7vdb1K1zm5B8BVgWZUxFqTkCFDxiv91PV4qrWMCAERzs5az2twAkMDwXQje8ua8s",
  "key36": "5rXa8PcjZ6bmt9LRoUqZ3f3uNf7D2paggMaTMhm5PJCjb5sxBuYe2ZEw4adheSKRwfWNVoYxWoD57xpsfyfNmska",
  "key37": "3FdUdRhYBa1qeakq8zEn6EwyaSnJHYVu7rW6oaPZkqYXRJM1QrNWBT7wonVvoU25q3Kq7Vm1zuYVJYijUVr6EyTB",
  "key38": "2edSSvzsPAhpSpq3kMj7Fj28gh3nTugncyAF7bpjHwzjcCthmM4BSFcSAZohJoZNs3ttFzum5qJ51Yya4J3F5Rr2"
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
