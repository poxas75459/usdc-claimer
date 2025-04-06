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
    "4ZgNrgZ4f2GHuYk8dSCAaJEjAAvU2s7TeKJ5KACaVQhm3t8LyJV7sK9MgsDCumX1sbd87mTTanfw83GKVBu4hSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42KwFZ3S6iA2F6si9Pkdsg4MamWhqWUjeVtrvqbtcsUSjcXu9xZWEqPgyxzYzTQh6Fj5FGdVU4UoEWYn1o38wnH8",
  "key1": "3BenrNTpws1mhp1GHq43FgfbTZA2iL8kwEKQ9GBCEaQ9zyVqNQugFtJS24pAaRQAegXw27WATpBXqRFRa6QgEBNx",
  "key2": "2n9XxCZAMkv3yRPs9xbbTYn9spAYEGkCCEUKncrj1jYBtuhRQJBFyHk8v7WCRz9ZMKWGLP2DQ7SFtMAEmC5rQ9pg",
  "key3": "qLkEDYWkM4rUNvcZXuCbp4oWpPJd1rKNNK1TRioFcTZF8Xt7eo6b9WR81FsZfWL3BBWvan1i6eNURT8pgJZvoED",
  "key4": "4P2qZTCkVN1d6TFiDDVwKezPU8fTaLgiUeCxeaoMLF4iGcpw2SxCLh1WRZBXe3EQiuj9aCTgrXGLVHUano2V7jGE",
  "key5": "2y3KFFff1w3wCmuxzPL6maiZEdw2eFXP6aKWsFANB8HV4tAZE1DqbV8Z6dSo1seoib5onFhSBdLWs3Qr1PAsAzjM",
  "key6": "bjuGP72NoCDQ9jRDMpPkW7GaJh6HoS9WvAo7zsAci7fTFo8Y9D1Uuw2HGfZTiwKS165272pyyShneDt76zUnumT",
  "key7": "dEsWzutdsRdoCByw72b1KZ8hFLTvsNHmCXBfypCmhzmDrFks7Mh4oEYVxUsGn7EsbMVdRGeME2kC7FeV3k52RLm",
  "key8": "5EnXoFyGVXqe3wD7RbYRhcr5NWzWBhCuCvJUkTYTbaLoXn88gNsMUQSdBGvqNS2fwqLwUsm3VpKDGg6g9oVzdAsd",
  "key9": "2yu4aqhekXnZz36qpTctoPpTejE19hYizBdecnowf4qpiAQeqP9SZN1uf29cMUJDnRpYyRGgeoQSF8J5ce7od69y",
  "key10": "5m31FrZhpPJSrP9pFVfwUHQuc8FdbagDp53kQmcheMejh9yK7G25AyxucDrWyUbeAJ6GNFiYwJLMaK772djhwYrx",
  "key11": "5QjVZ1uzv7NsuJGN83rLKzJrXNqyadCZxMPCyTf4NM6zPTTvoB2GiqoSedG81V9FDJ1WuPHQNTBaM4oeeRWtoV1S",
  "key12": "3LhxtEtsT1pCM8X4LNCDwYW3LV1qPBbhbp6PxYLXGs4sbJe6trUBaFy8q7vfaPFAhZyNL1389sPXT9CbDthJLguq",
  "key13": "55iBEBhiG3v9GTZpc8VP9rTyQb5ojECLZShZficvUdyPpEUe9Mxc7EAbr1p5GcRrrX4Zxejtr3sCY6woHduxkkkD",
  "key14": "5i8GgJeK5zwWMDz5ruTPFCbWhrDFTdk3QK4cWs6fSFeHpFgYwo7Vw7vAvY863AQUnajMuhRD94dcixd8AokmhjA9",
  "key15": "4RDngCYQe4yPEP7HhwFdxPo4Q9SxrLdyF7GEAeNecogDv32CcjTnjPxBbotLAxgWqZfrkxDRSjKy7sCePDEeC4XM",
  "key16": "LUqnbXVXqeywKKuPfJdLkxZ1GhUQ93MXiysLk8UHYiVY7fziTRAyyyjvbWVprj5FfasaVuZEZahcB6g44Ce6YqE",
  "key17": "3VGuaRvA5kN76GH9BYLs3uSXrcnRXPToWfJyjxJRXWpAqAiugzgxP42JyqNmar28s41EwiJtGrQbSf68zjBZXHWs",
  "key18": "5UP1TEi7vFu5bGdSF3tu2D6jhW1wWQJxPnumY1XgLZTWHgYRW4zeE3RFaFtSvaj6YsAApD2FhZ1WtYaKPr7J8u2H",
  "key19": "2ZWGSe9xwjZ8i8x1YigvXF9FfG46Pa4eRcZyAK77vDvZsU8kQsDwGmKBVRf8bK2TrtwBgo5pAMr3RCQ6UfG859mV",
  "key20": "WAs4gJeLsW8QY271MvxHChztm11fYnGB4wuszjbEVNTkZN7YNMGKz28E8ZjePBFPCQ9quLHBnpCma2JRDo7EDmN",
  "key21": "4FCz39PTHxttQxmJyRP4PpFMd2pLjsJvfJ9WyhbX3UHNhnWhADoUMy5tqxPsQrWyBvsCxgHe2szXjp7kgJY9sFys",
  "key22": "4WV5Pz486CbvcVickKa6nP9zw2HeR733yk8DPkuThvMcxnbivxMXttarfRHwhvyWbLf8ga7UzzgULvfpUeki57fS",
  "key23": "3J7o6mZRocscGaZoSvrd3JBy3PhzSG8UtSeTze1Za7E9xd82xJR4nsW2eRFyV8dnZfiDNKmMoCaKFpiWDpH5LRrS",
  "key24": "22HcwjnaFuPVckCLiDrzBACyezn7m8u5mphDgpnfFrPXhng4BvpmTuSDfTgfQqzsp21fhYTrerHXxsh3Nse9U3ec",
  "key25": "xSYN6oVzV7gJDg4kPJQRUZFLc5z6Vh2sSX5589Jb4AzpdFAGhXEachm83oXsqcXt4LbHMfiQHwGeKNwRwnSpvxN",
  "key26": "42WffZQcZA8B8dZPxbjz1nng43fTSZdu39V6xuQRMHHbqayHuEvtshvfZccxZ78yqUVGjLddo8qsoKvqmEipudvJ",
  "key27": "4maU5NiWgvKKXdWCDQtjV2HWVWoiXCCTBk32TCLmMgDbXwoD448pBj97ZFgr5Shd8jXcAeKcz1Xi9YPUenzu3bF7",
  "key28": "4nMWFnVTxfhe2Ux4eDagNgNGMqYvVYDeEH5sBWH2ymuzW4HwiJpq2k36Qoq1eYBTf98PZWQ8YdSMQbSMpcUvWgEk",
  "key29": "5s5YUzkYBniwcL1wh5ybf5HGEd1cJaTmvmccd5aWzpuUfE9Mabr77EGsnB8ptS4cugvnw8PdSHWT9Dvs4XuQmh4g",
  "key30": "5JEyThAQGasVPrfUNj9pvCSsG7ueNFSHuQSHLb98t3pHTwYMZsa883MDAwTWmSagVQYRGUjJfZGu8CKUST5C3W8d",
  "key31": "2RhsKZxwejKhMBz3wB1hzvjPmxPm6VHqRJGcDEGCDuYA1A1N3BBu27AW4XN5oMrsn2JY5SGVrcr2GwCAQgVng9Re",
  "key32": "4V4hAQCFEfFG9Vk7YvdiGAvcmTPhN5xXmZYnTpdB1qHsXGQvMAHNafSkKSpv6JEypxtHZcUW4QofeKi3pLKQTkRi",
  "key33": "3vsiDiVcpS2CVbetewXFkYeJAoZRyorQ2b6DBTVDnXJkT5CbihzjPAUWo6YGn3wJM4YhpygSAEmSUHTVDMAQPJqm",
  "key34": "2vgmwDcbCskkJZGGSBDCRCxcKT6jZqHpzeovi5vGHtdhk8xRSeNyjMHAJq5p9c7ne7iUdmxGquzPrD7PL34LNRBr",
  "key35": "28tv7pkmEYjaFPawhdZRQ9BagfA9DNv399dHe9e2cPGEQ3T3Z2SWz35cEMneYLskj2qS3aa4FFtwppa9yZjNo8zc",
  "key36": "57pGiXirGc5tMHuRH7kau6qVva6AesgU5JFNJuAHKrbpwByowZgGBshpTiijaBR7ri7ywyD6B42bJvWNzwd1CYoQ",
  "key37": "Eq7hUdUvtRMxDbuzGSoKYPymB6aEEfANFc69pyrw4amwRVnssa4k8dYwZi7D8LkN97v2qLh67J47pTyKcwcS7nG",
  "key38": "2sVXXGTge7bFxBpf2k4Ge9qDA1FRZu7jMfZNjZbdgYwdZkZ9aHEhxwXiCkjmLXyzYLwuAsQEoB4q9ZQU6bNBq1Rj",
  "key39": "43Bw7zMqh16g3cz2T2JPDCeoCwSZAAWq7wRKrgjJSHhz1vu6oQBtXsLZJEbd2ysvyZ7osoGwm8o4bmRQdjw5h5mo",
  "key40": "53ZUkQCZpQ6HUpnNLyXM1ngBiAW87EFQuyRhLTd696DEtTAhhp74j9BwtW3KkFhXaChSjCn2SHzhGaxVRTPAoLet",
  "key41": "55YjrssZTD9FVLxqdDRS3iWXDiRnedpwTnxm8c4xFbh2UCTwyb1bTqMZpAoihFPz7Wn87uxEVGUVNDLeLCdN3gHH",
  "key42": "4489TLcyanbGdTFMEKng2yoh2ZXWU5sN6MxVL3NdUSciuiv4VyGRi9XAprjjyGMPKsEKqBMqqrPp7E26xjGdvCjU",
  "key43": "5EMPyr4kU9UPk3wKm9WmipBRyVGg7Ay4snBbTUWNMvRDUqHaLU1omtuSeD3xcbnAineCAALB8cR8yzjQDN9tVVqd",
  "key44": "wbEFjJNDkH65AWiLpLTJhEuh6YVAALsz6etfaxjyznAd6F6kbBhzEuMGKrXrhZHpBTaVuPoHGpFVss5qwAqteqQ",
  "key45": "3ouv4bR5cxDySU8HdV1MJhrjQLTHwf7MDKCP2T7B9DutgTmCv5ukqsWsznQdKW24GinsfnvDCWnfNVZGZFpK9Q7m",
  "key46": "2J2AVUZ8XTHCsQ1jWFisijK5fmwmur6DnetbSqVXCj734raMKEPK5WSEBK9mxEKpxxEfiouaefGobZmj5DUpt81X",
  "key47": "QsyLh22R8BksZoU5wa5YjiiZZGu8GGjtb1WzsRpTsFxfQ7tMt9qScQN9et8dUUixizzDqJNKAvLNTZztVQyNSsf"
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
