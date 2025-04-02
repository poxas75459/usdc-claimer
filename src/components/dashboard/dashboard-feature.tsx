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
    "4cnDEs2oS59rs711j4P2MAHToNESRpCEKdDxtjKfPLwShKzzZFbEFPYQVJ8K4JRzfwDT2jSLpke9xGPSbabJwrPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xeLYtCzWWRDePSGvkLbDjKpuqj3xDHJQ9Dir5zLD7RACwP3x61RH1Ssqno7kBjjpoxvMgPNoQkCro762bRgSCWe",
  "key1": "4iDChnTLTQokA7wfSY49Ta7iKbMoVURqY9GcvesD48yzUKEfRioLDj7GTBBEdvGHW4LrXhrsQ4rtHYQd2z1hscBg",
  "key2": "kC3CemkYh1aBXeeMaio5z4qQBKJYMPDW1jARwM4Ve7vwvLhcLkNf8iMqQbBP9nCAZd6Qo6ezh3kmBfdchz8RkBJ",
  "key3": "4Ljb71kuhuhFPHgWEPGkVzfvqF71J1znrbRRZLFBUYjAQsm62mFCoNXoixvqHFfVpTLMc3BU5Sq5aPnAinAXmvDw",
  "key4": "283kKZeQi8b5bPrhyJuukBWLDv6tkEFG92qmLvgY9hN7xZcUHtnZf25J978UMCWajE6txyvzwYTH9tm9wL6VCQo2",
  "key5": "3fKHX4mApQhdCvFtJ93JWV7T3Gw16qiVLyWoTmu99nTaGrPAtTboH65S6CGac5GTxrVyT8REVxFNupNvyfX1Td8v",
  "key6": "63fuHMGBSQT2SMnbN2s4huSGZJCHDqCDcEWwLkNDt6PyYHikPevnmGTFoUea5QbJ4CWHhL94HExZGDbHnyNvnHqe",
  "key7": "4zb9nqvkLT8Jx64PvA1o8sbDNAWQKjphmkVUD1iiEVX2t5GieFcy3DsPGmDLSDPERXsiWA4U8PtDB4L1EDyE7ese",
  "key8": "4vpgiMhJiJrmEw1A6dd3gx3ZUH5i5XK1tpBSYvNHfx9TcuenW25FJhoGJaDUCPqVM94Ukx17Z2KCe1o6oGZtQ3ig",
  "key9": "3rkqeHiJtCcgjeJJU3Q4WFR8XhRoZt41siNFwurpgyXpf9i5ZzHKU1RryQ5LeKRLLzTt7yqQC7KUof1LZ1sx27qo",
  "key10": "5FZ3go6CH1g5VqgpR63csdQvv8zfNuimf4YouG8YgfYRjjRSCJSnTDmCfjFVFXWpf6HBu8Qdp9vDFnfHcdCHzWbJ",
  "key11": "3Mfdok9yhQmdCmsLVc1qCLsuykjq7uskJw87cXAerKAd1J6X6bvXMeQzVMNCnb1doSXdCZ9PGV9pXDt47yTnZL1W",
  "key12": "mRp8HDzpLKQgyF9q8iL4fsE9ZTaLTPxmCjEHD85bUgfyH5dhg5LgB6mBmpzzQvKUWYanPEcQQqb62cf3uMbrCPu",
  "key13": "4AETa1q3i6BDa4CRvtJuSXxcGExR2eD7VhV1T6vkyuxZ4VHVxFJPj9aRvscipEpH9kYUS6wKoBjURrWGuCAhGYvS",
  "key14": "2wm9D7NWKt4Ax9JuxPFwutHeWX2BKU8Mt8vPaAFowpJKKNWTCX4d8VXDtCRcnyyMpr1tVsikXo9MrJj3AEVyAu6V",
  "key15": "tn8fGr7C8CYT3kpTsK9j9TUpk3VafbSQFK8j3LdXNvJdpDVMmYPNjpbAi1T9PL2JgGc4dwuSaWKabZLZinyxJQ8",
  "key16": "4GZtngGf5kkTbRS3rANeGKXqzvuXT5bEJn9pZsqqYZoWadbDVdfNmbLsMDwwxXmwCFaB55zqbMJLQHKxwRHViabx",
  "key17": "5DirBtmvnRGakjpXbifZCneujL48aevEVT2Qasf8mYkuhPQtwdes1jsbHDLHC2KVgQwnKDeMHTdH1ubCnMQuBdAF",
  "key18": "2MU5DaWiR3DUu7pgpa3AztmENmokEp5fntrAtSZQe2u5418gPVUWFR7TvUMir5GawSFZaAtNWuQmrxuFmMT9oTof",
  "key19": "4dXWawmCQYwgxkovEXAPRQXaEZ8qYoqLEvAmduiyXaoCdvq8v5yJuxHycpmsib6sLy8FWfw9wc4ufmbfJ956xD6g",
  "key20": "EnRXNVcspf2ciwc1sk2Cy8ZRHMwQpB6tXyVHN2BQELGKqEVjFVPahWLeTBoWvbm7qMz26k1QzCch8ynTYrFTvHc",
  "key21": "2FnaDDqDKGeKXBJF2ukgv8kRu9fgNMeTYqNjKypmF5GfVTvxr2SLXTvsFanwufmy9ikT76LmDqXz4p53KuLo4sDu",
  "key22": "3rKisz53EekoQrXmXUtibea8ttFEtkGMpXRjDvQpi6RwC6RciqY6c5pcZvPGttrri67YLB7f3hnEdzDjMLU4rMZW",
  "key23": "2ifBqtsX2EbdkYjbq4VrxwhNGLy1zGK944aHWHCapAd9u5HwozdjkrzhAj7Se8ZMwjCWPaiWr7YQEuATs718Qhq2",
  "key24": "3w6UZvjqSS7A3NCsZb621KSQeLTByz4UF9YQNoSZb6qGhNvqWEtw2UFKG51aSZJuWktruuh1KUtrMpvRTx4Z1Hxy",
  "key25": "4CykR9s8DeCg1FcbZA4hraHQjT2L3c5RyCzYWxEhY7C1bLUGBViZWcsVpSUU1UahrreT4bA9e9Chxx7D1sUvFH1D",
  "key26": "25YFQdVYyU2Q11GzpubmkzKkJwJRdbAPpr4oVEEoCDCufjVEi8ZSq3jPxcvCWtm3diTPov8D32BLnzyzY7QGGpe3",
  "key27": "3A5SZxbaUzqibELhasKmRhvX1sMHv1MWimjR9K2HTwD6MJiYnHmC9BvBci22txxGoKtJg3UmjE1yhnVx4zphrURv",
  "key28": "5ixyJSMLwsZb7Tehs11QUJBDHM5xKVLQTGdW64kG3C33VGCQCfGkzvGe7omLWvy1L1eXej8NuSDymXaTgsDvzELW",
  "key29": "45fkZ3xYHvP8beYQUNeBEQeYpSZtAv1tNhHS4brWhJiEGpZgxcUTaZ4aXh39SrA1KimPBXoDP8A4PxKEmL1BFHMo",
  "key30": "oFPhNHGRhHHTFJtkHLsUZUCeGWQeEWvgegybN8CJnVEu9s1nQyMZfa9bR3GgTqKGe7H4sBGXoGNHxh2j893kBub",
  "key31": "5MSdzWUHvurKv8hoZdwCuxgD3Z8kUScS7wcudhnMpukkmFELo17zuXjzQcgcxYYSm7xXJWCWWjAUqHimTHaYFmTD",
  "key32": "3AvpxzNcTAtGM9D7MoEknjuHHAH3PDadVrYPJJhro3ArtiKM65gXGCe7ULYZzBF5QaQp761mUXcANvpcyxCRtj2H",
  "key33": "yC3aYUiYpcY6DmxTDdXveye5s2LgFxB3SZ9cz5xyLxoMUrNtsvPrnauAi2Pk1GK6AfZhAcpTcZafGWCpwJ1eQs9",
  "key34": "1aYs9RL4fq2oNzKHm1afiXymSXLbuEgbRuFW1AAfEfAXNqVjNjGASq7UgXLbqMSNb8Xy8t8uw7rqsHE8XaAeosK",
  "key35": "5i9p4oZptppd6mVRTCeVsp4mCVtRaNHquDXwWMHvKcZqedo8oaxxyMWfyNMopoFLzoUWfuQgxynyA2CfYE3RWhEp",
  "key36": "NB1U2W4jyPFpVhevchZFpgMK2wyMenr7HKu9tvGNeZAqx71iyZXQGgjwivGCK4f5ih9vhGku8MGf6ZxhWKTUz7k",
  "key37": "45VcJPtTNHP8SoB81sYBpHzhA2LVZ9ioHvYqkfvtLQDPAbD2vxBvDXm86inMt1F7wtcf4QtauE6cZnuMRrmPNrDq",
  "key38": "2sDq45KiWjnM9CgvqHgLuk3e4QYx38TGXn7sT5F6icZ2YsvyvbNj2miUeVNXNdg5R6ms6n7C2nvrX9zoVoiFWkPu",
  "key39": "5uASaWQGZMUzohHHRnxoyVa8diayb2Ze4NDtGXdWyVAcTsDtvELi1dM1niAiVT2m7ubddZe129AnFovyNUbDCSb7",
  "key40": "51h2DSiurSAYR3245SukopgH58UWsZtoria6RdQPas2PQyukzkHziGqaRYG6BTGnuw4jUyJbRw1Rw1jFXfNWiUNx",
  "key41": "4rBy6mZKa89rGaiijq64hcre4WhufgRcAzmxCGPZmQ1Rn7sentHJ6uUX8hoZSvmgUD6kPTf3u4BZkMHZ86azPiRy",
  "key42": "61dL7p9QvhWyjMSQpM8x1gBx5SV9XDvhAAbkqfTdXT9SsqS9VKfdZFMspiFimWbx6RwSuJUFqDL718Dh6b1KGqPM",
  "key43": "4qneR7FwvKUpKvnRmRR6b9T7MdYGNb1XAQaxA96mRQyTh5z2QR6KT8gDGBUPn7t8wWsMLMgvpNSxcnTZt119qTYH",
  "key44": "31eGmsYWvV3ykkEdnwSX1Yud8ftH9TqVRem3zmkSArv6ZtueqEfi7242bmPvGo2kKYyWxELvpLeYwoJ4rFNJS3jm",
  "key45": "4JnPAzfNTYc8Z5fTMGU8cw8cVQUBNcvDta5z1vto3LQ9xAw4uiNcTgd1rSVyXUXYoNgpYQhxT8Fn1X6GvFauYQko",
  "key46": "2nXKtzaCFYhzT2Knoi3kj2NWn9rVcuSJ1C6ZsfGG2iRj8MFMB4EPx88ZXu3EZXWk5vniC4foGgZYcPUN71RcuZVA"
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
