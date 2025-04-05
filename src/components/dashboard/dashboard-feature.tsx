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
    "2eWiJYNbPy1PdRSDmV2x3j6Xw8HXKw5KDh2KFS1R9qKNeAaZkvLGUgATKxCMPexaG6QL2CxPMRd1RBmPutFhqebM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XRpVGJtAbFqCa9PHZSNwbAZQnpaHbifNEenvBN8eBjVJdJytwMMcrWSMnf6B7JL1xsknhqrL2QsVVReXK2obg3P",
  "key1": "52RM7tTY8tNvhD4ddpiLjcYiYZ4XkDU8b7TA5cu4qiKphLNQsQXkh4xtexRAGSZDgadu6DwW2Hj2utZ9q2PhCxDi",
  "key2": "2pgoR9M8QLy6HtH4y6DEuvrtsg18ThRY5MLwuQi8maCttUskMX3hFC8a96Thn5Eu3crRmVn6i5peqZuRfNsX55FX",
  "key3": "yU2UBzEq3Za178TQqTjQuCUbDFW5rovzjfpjZU7VKtJnsAy7KZVFumynUpNK2oujEyx2EnELkEth1i5eYHqADWj",
  "key4": "5M8iqufXMD64GR9GRuj7sEehBUT4vgh1hE5jYtbvi8tZtQ3QHaPLiipyS3LZxVbW88sqTn8hubZgNDr54AHAPTWy",
  "key5": "QReb42W28N3HGYmaqeujNAD8A8uQsZsauUC8W9U5NfHeEtG8NCDNEpof57unPd1P5Hx8UUABBRpaTefvVmUE63N",
  "key6": "5qo5mxA48hDnN3EeTwH7DPeqRZRyyrV7nokAWXn5yNgffhr5GtpJGRjQgGvsLrAGvyByKKoHtEaamxAG5FA5aQmQ",
  "key7": "4rbEagBjpGoz9nGoTwJ9i7y1KdtGABcqG86NogpXpqrwiYG8KUG4Jp7yJQz1He5PnFqQNAeMQ5KykzpX3dBTbniz",
  "key8": "4GcNhwWQRF5RUVHxw9a5w1N7MMT3bbKzQ9P9TDQraJKePV58kvfzxnGGUi3wYmAku6ivHZiPmCbA7sGdAKwu6n3m",
  "key9": "SW9WGHHiwnMcJCex5oBjSBacPTXySd3yjgykedipgaFRQodAPdWW2sTYAk1LH1rdoiYA1tRDHG8tkZsTtSoqAyi",
  "key10": "zbxhmYGG9v75T6jdDuAcVhFYAbhJ2QTAcZTkJXC1SELk1oR7UjAkcxz1Bf6wCfoPBEstmNoFYmhi5JJKNBwNpYR",
  "key11": "4Ws7TxiUL5duM1AQi2JKjivixWxYSYWAY3pBiy2ui2oygLTH6wKPS8uiEuGFX4cyLaPwP9JKwPeum5EeavJJCBbs",
  "key12": "5hyugrjuY4MwM96Zg1on9RzSgRovrHc58tz26wtLLP4Q5My7xQ49vpev9TbFqHpnhh7dgVJmpTvLf9EoDR6Q1Ady",
  "key13": "2NnH9bZ7c3DVsJ4sShGADv8Zc7LSwRmeJVR2FgkYLymPaDYksdHgUJh6CxLWjxUqRi2roGvTcejoVyNaeY3V7hLr",
  "key14": "3gn3RoQR5Eih8jqr7mQQUaQfuBh5Znv8JH8QfgV761jYSP9YSNUz7ZRgyb2NeH3XBjX6ADtKXiFvqfTpbxBGAMP1",
  "key15": "QXe7X5sMUeB22MdAo9qyMy2RHxRtNhThv9Fsqnr8Dqxp7xdMaqjin41LhJwMdUA7yuycwiqzcw8ad3hmpEWuKqv",
  "key16": "32w8ZHmiV9dLEJgHG8HFKBxKQCG49QhzDYKoWYM6sc72dgab8rj8x4nTtGzQJiJAFahFL8ndaz8CiLEKdkz6jEME",
  "key17": "3FLnZLiXXhvE8CHfGvrrxABasiRv7hhHwHsBhwEyCrz1BeVuovwpVujmTq7eq8ET4vn6hNTToM4nJfkXYiguQLPA",
  "key18": "4sJ8doSEaJiiUkNrQp6oDv3rDGBHmXXxtU6b35Ny2iEdzT4gLf3v71rDhgSsTwaAF3P7inXBq3kbeJEgYGGMto9p",
  "key19": "7cJ3ieQMu28RHzzWzm9VVEuWraWeWhA1o8Ej4U7mx4CX9aow57rxDKRS1XXJ2VtgEVcn6FPUvbk9pgqDBB66c55",
  "key20": "4fCANuytZbnKScNYKbfQsZ6frG5W7ek3Qey1dVCfwDULygUxUjgiyGMEcmuKuX399jRi9FqfsEQdrncAhS1rU6am",
  "key21": "5DLV3ZXz35Fd3k6X5oQCaUgVXobkFijJbjxmUJZgEzLZ2EBMJz7RsJP6AVadLXqR18cunaort3XZN97RasXhqte7",
  "key22": "X4UUFrsCWfM4LvgSRPNC3F2CjeWYYwKpyi6P3A8CrKE4fEELN9p3kjLQB3vuqUuw77QRVhJnwo4V6CjvTrUZrvM",
  "key23": "5shKE5vD9zjjmzkujLySJ2sLoFywvvRgPRkdVyMtRL9SNmJunbQhnakbLjnN78Zjn16iiQGNgZMdoCULFXTzTarX",
  "key24": "54hPbTDhLk7EcVYdZ6d4PTUTBZSZAjKLvzsJxxBuNRobiv2eBdSEzDYyzvbFf7JvUzaUTMMDkbSx3XUEu7GwfGQT",
  "key25": "3v6bZgkiCdZ9x3XEU2KxNdxuBZbXGv1DyyZxxgxCPqWK3wFoANXChontLopCv9kz64Jh1VgSz6LK8nWyZRM1UAUM",
  "key26": "4YmyGV5EtQ1sfVNv3atZhKnzko8eZdGFmX687vi9aEPqNcBbto33rTmysWNDSHWYZjKnCbRiFA1dUgS9EJFhf77q",
  "key27": "3LrzwxKNZEMGjy5spoJ3ty7gVUkPvrBVCzAmg9dBx6hkBzRpmXP4X5o76NyEkjxMZZWbSBAqihXZLPNmcw1NvNL1",
  "key28": "XbJfx7JnQhVdNNjeZ6E8EfAsHiD3jpwF48gL3Nk2yuqPnW23HgRbicPki5kSjx1Aw3vXRRFMdgzKQa29HyzGi9q",
  "key29": "58sVug9VVpiy9EovCwx7R41v12W5k5pbh1Mqe6Azu3PiGWmaknQXgBrfDS8Wmt9oWadsEHTSGz7BENM4RoJXgejW",
  "key30": "411sTBV4MQV57eZAGjyuEVB1Ym1wGXqxnV1h5rHSLyrJWLXJaEYYKxMZB8V6CQo1gr1J6c7pEo8CchWoHHFPToDw",
  "key31": "5yZtqcinDGicmgREr6aQWq4dcN5SKemR2VETomjSY8j4kMgfXqu5oHGyjm3VUWpmoD9ToEcac6VdrU3VRLdvUx4s",
  "key32": "4WuoM7eHotScQ3sCtwvnsUqoTVasjfooCSUJMVdM8u9ZHrx2veFdXozTGVufb1PhZ9oJLTyn2WVdo3JRHpbYbSUz",
  "key33": "2Kn6DFQS63kdpGiCGEb4a7eSBGvjJFNfYQh3GPfNUR6XCMALu4MQbhGxQeR1rY9vGs5CDaSrhz6xtLU1wey2zUgz",
  "key34": "3ZsGeW1TuHPmDLtYhcM6am6foEFVw46AydLoN996nuzDsqBritequLRQXSby1cu6Q9HcaFwi2R3rjXHcSjUj5USq",
  "key35": "44peChWSW95pED7UFo1paNrkZDtQev2r4RwkLoKUCSxorAr73a5QVdCskQmvveFEP2hqhF2hGpz2Xf6NpUvh49Cg",
  "key36": "428dBCEPefeawz1DkYNKM5fMo81QHkDgHTv7Xm7Hx9CmJYEMxTEY7LnCQXehBHMpycJDktehgnsmNHVm8FzQ2kNJ",
  "key37": "4WetrC3UWdJbruubnJ6tx4AXBdqJApKuULzZYxR6YZnhxe1ueMDMMv6iNSSh7DU8uWz5ZBp5fmjQt8oGLVD9iHP2",
  "key38": "5tVjyHbF29M5spiJCo5viyaDrDNev1kmYLDgaGGzfkmEvrZV2wNnyYES6gK5KbZu87Vjsn43unpMYTgeaos6mYZQ",
  "key39": "5dL1nur4cK1vDqphVVBuP3CJd32jcwHjP8PszBt1LtHd6J9VSrZn6pMLuNGKn73tG6jR7Rs5YHxjxWHKvDiXzDva",
  "key40": "5rh8xMnKANHDcHRNxKWqUMhxBh6nmdJKuCtDGfo2MLn6MbndUs7Lb5dosCzjdyG9ZGLhME6LSi4bTVzh5Z8uiWrG",
  "key41": "r9HV2j5E9ppUDzkaNrziS1sMvHCudnNw8QopoUdfYirgWANzf27H8xxgAXF1Fusd9pFQKJ5o6zwuEDcDcZ1F6a7",
  "key42": "3HpYNxoLf4uBfskN3ZxQ7xaFRDUsSobzkV4Qx1BE5XJW7ULuzXP5sMrno6gRsNuvZwLPLqmggbb3MdA4Bko4AV42",
  "key43": "3k3XQjDM5CWw4qKF5z5rGxpCQiVEWJbJ2KNuJxouq3G75XXjyyYGXKyGwPQhc5iWtV8ivhkVaDXn5qH8J46M1nbr",
  "key44": "iTyhZDkuPmAr3F47c4L43Lnv4LLy7f1tH17466o5n4xqyveLCmi2mtwbnvibsmwCZDV9Sxzwf8kE6VbiiuvuQGs",
  "key45": "9AhzdYXki7f8mGHBm1xPoBoPCnyLcwExXtxMrExx7ZATRpZjPwVnh1wfANDg1uTVyvSm8rtp3eNeEDLMmwMk831",
  "key46": "51gr6y1nvsbR8s6RzTgHXySQSRuxgLURwePbxBqAferQ6uY21XUxC8Q3ypRJsGExTcgEqFE3g9Mn98oc1RuGVnec",
  "key47": "2MnBXwZmsP4A4pPYFj8HoUJtL1pwDo1zgqbsnCqwA6m4Cr5MM4nBgmnpaLoF5f2t1nqfNfgw92kGzfT1oozAU1Jf",
  "key48": "49oeCG1NZRKkHrexxFZCzKtDc2Ms64EgYJKsDEB8YVyHoE2HjwPuZ2SSUVStVmT3GcweVTfPG8KN3uWRtWzGiVR8",
  "key49": "2SxNukPJTAehoXZLGS4Yt8GTJhtidsW938tEBECW5CV8ig7Qd85247jEajTnLKUh5FApKm8NaN3FkKyKfPBosnbE"
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
