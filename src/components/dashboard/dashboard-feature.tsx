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
    "4nJsnrnQJMLJtX8Cwdh7jruQAdM7FamVJ9uqiNb2FkGVqLyM32E6tp9Yz4TgTHuEWvox76NYpKL2VtSLXAKqm1Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mX6YLi3mJ2KEnSqgn7PpMhhM4yNm7aUHeoMQke86vuFsRkwoUqxUhVazUQoSrYkZgrSngm7miA1Ru1tfeMrTf1j",
  "key1": "EruBBqizLMvskNCyfE6UKB3vmqZhAqJvQHndVfjyMuukHpPEuc7Fuc2tjDDkgnNxyFUuVAjFVq3wYtwoZHSUYox",
  "key2": "48LqLWqHeDSEUXPuqmydnCLTiHxTaC4e8hHuWujqYZTafdF4arADairUPuiysPVdbFRVy7pTPaZwYbaNRRi2YoK6",
  "key3": "4ofNB9s5JXDSYsDLG1PyYuPfq8ZtAbgHoUg1LddGWq2pUufrD45TvB6NzCgSLqQCXrpcAF7Js8HBTYoWxAfAN315",
  "key4": "HC4ZgNQBhoUKVThUBqczUGsY42a92SJSgB4BenX7Ciqp2X5G4qB3KBYxBJ7FgKxRG8kr6ZEnaBZQMESNtRUjiBX",
  "key5": "2TEPfaBydTffZ4mh3bsX6uGGqjGDkhNev6W2UQS1EpkLqn6yh7yrAhBjRQsgAaRdEtmCC8TDSE1nzaqTVvpEpqs3",
  "key6": "a4eUxfrY7cc6JdWLvykBFmuyD2T671JT6Gg68J13Qh5xegxHPVLjDzmaQZUT8ssdBxXgH5p83eyXC9x25zAJw5Y",
  "key7": "5ypRfueBbi5zBMiHptqeKz9jsvf2FfqpSfr8giQhjD3uob7Y8hMjPYSBmdrJPSiwaejbQamVB2uziaAaP9TMvjHC",
  "key8": "5XMw4QLNvfN1y93x3empwEuL4oaZBLdYrizKAa6x3qZK8tmkZQ1nEZ6LnSNdbYQYCkNX5yYUgz4c2mN4vXucKu72",
  "key9": "4R9fR14YZxjFg9oTYqPAbrhFfzBL8D6wGgsLHZRvsS61b5cmsYNHdw7c1hGR9jyCZG77woBKMQhiiZQxUTJd71sr",
  "key10": "sQfXcvcKkJXZPPkfVVj3Um4naeR1qx8x9MHwD7e9hkbFL1P54661DDeZUn5uXiXhXJ4srwyNyzPut1h2VVc9PQ1",
  "key11": "GfbFa6dapG8uhkjBL3bkq7zmsn1MMh7R2yHzLC1sWEAZ5FuxW1D5mXXf3ruxsg3Gd96o3bYMuaK7rtV8WRcWAXG",
  "key12": "61DwJQowNQibVupHBM8tBa1mY73F81Q46hBhhRKM9yDZk5sA5Di4KohhRgXcec6Pdz2zfsd5KmaA6dLJTni2tg2c",
  "key13": "3mvX8XvmMgc98KudX9cgz7coJfWLM2aBw8i5o2QQywF1eGTkQQBeMFftzCPxmxhMB3yKvdKuvRw4HG4D835weUfX",
  "key14": "3TcYcVniQcBWknKXAY82j34fuM4wj3PZHvFuh63Fyvc7wNuwcdoQxhbZVvXp8mYRhK2Y23ZuSKuaFKJz1XYjwsiT",
  "key15": "2ZZDP9tG3CuMN4qAFeThcYGXwuK1eJhYkRRk4qWkwbPTwCRe62FkPPgZx96mSCF9aoWNGaTMUJSnu7SWhHhSmmMY",
  "key16": "e7EwFxCC2iJRzYy8XxWswCVJgptL3ys5r5TQFynSXfVwzrA5YZZsjw77mTJf2W1yUBHnbmYeiv4bPxg5MBzmR2P",
  "key17": "4iFZDtGPBgZLh9SDUkhdK26k5o6R97PxWKb4j1nrfVRvi28zRibJDea7oeF5zNGS7q8jkxzjC7EVKpRhinD6hKMk",
  "key18": "427CKmqGd3MiPFgUsx5bZKXJLYocN8MQztC3qcQkckSNgkN1manLuXKxvH2HfFpZ8wkkZBwtTwMEsH9PLidPoQ6L",
  "key19": "3ESmai18MMeqBxnWgmwGDiZXs5GQNGREocmkAmUbz5dHCTLrPpyJgbiDaryQaW2ypnWCxc4mbuRZ4L9wTea1VpTt",
  "key20": "66oGVqcu5xDuMHyEncsnEgYM74EHpoS1A8PRYJp2AZiGvBqHprMCwXy24nS2fKtvb7g8k2W5CbcUvuXwBgf8ukit",
  "key21": "bV5wJS1vkUA1zgWJxVrsQY2atxvFHTeMeqzijGdsUHrs18aVMw3212t6mYYJ1TsVbudj9mbJmpyNUNufxadcT23",
  "key22": "38dDwy8QEtTAuTpjRZdf9knn5FaEWXqfffoCep2hLUvcgHTjfdtns2eCCspxL71NvDPHZDTix1N8jV6XxbbxVPCs",
  "key23": "2ETUW7HGJpcyL6RhvhA45GYcsSv9TxswE4wWFdUAo1xHL14SBBAhcRHxh965cbi6E1cttEeTYGptKWbJgogUwNJ3",
  "key24": "3EwypCrfxDJXLv3skBKXofJpJp1L3sq9TDLPsQ8PWMtrbrEp1JwEpytBediAPfnxepBWLCFfEBPVmYArxx61eBgn",
  "key25": "5tQrVbbxcFjyUFy8ouHRCSVt7zQ3fztZHgEs7h8Psw8DfZk9YsXnarQFs48bBBUrnLXuqTws1kE9w7j4QPyGgQXy",
  "key26": "3Kt6sdz6G6nnuNvDL2LbjkptCgWHJkuxPkhd3ke2VA5YCP4ZgfsFc4gu4du4dsazDxWN8ZUikXEgzu3fjdf3z3Ng",
  "key27": "NLSybuuxGz9sftwiKicBdL6q124KYFwv1EnTemqFZWBx2wk69T4YSep4cAzXEnh4Q8oWwqdzjiKFG3VkX3h79rj",
  "key28": "jwd7m77YK1ybkiHhbzFbpiJ2Ry62QaUNypVm8hmGm2Ca1haHZXE8w57y41rh8j6igk1NxopGkWGoP3vXKfv87QT",
  "key29": "UDP8Ej3UmMzmomRMGCRckgfdPi2WX8tpPadQL8ikHBRsQWZ29qZ942T99FD1bLQYAB5SoijrAJTKDzqkDVf8xkm",
  "key30": "THqV7VGPrPC5mD2PqkUNmUzHRHoB3PtXEjwZjmJYjUGnaDmmao33cXRJdBnbvo2gXRNYV5WUhh5HHkBNK5Y9xyH",
  "key31": "3owT3JjHg2j2RmtXnKG4uL8LKTj9kQZuKhb9TcyvS4fwzcHqJyMxXfZCTNaBUrYkXhwj64B3nDTm6bnXEk5j1rKr",
  "key32": "3DSgfUhwkbN9xZGxNv5nA5KJruVXjLC1H1sSnBpAHzfiN7yAueA3BvoAu8smpbkxebWUNRVsq9DCdFozSUaXS1oY",
  "key33": "XJgTCz9gk4Z3WygWiB9TBQWGL5BLPt9bGVMZtQ2P5dxHH7SDSKJ2o3VSSuFs59LNUEYXp9yGHTnFv8W7PpiB2g2",
  "key34": "pk6ChBiUAFJyfR9jtc1Qv7YiKwYNkcHGfxVU6aaZeMsA66xvqMTxU5vqTKtZFQcjkzuPUhU9M7Ji2fcJNJ5jzrx",
  "key35": "53j5LmUiomT95krLkWTPEt125JZkY2RDVQHeSD4ioJ4gm3Sri4k9LS9dk7sySS2oToFYNfV3iAThcXKAmM1JnQky",
  "key36": "4RFa7tff7VQty88PGKcvrpQzhzZgnGdrHfkvfe7tSUtA6eamsi211v6LLmE7ZT8HY1praXPND6px8id2bS7EyY62",
  "key37": "38nc4viT4wD5HBcN485qPWwBny8dYJ7uwMF7F2JgRwt8Vitk6ZNmaDSANodmJWk51Z364uE6nGwRuGDZdwN1z24b",
  "key38": "5tbSmZE93gDKZ9zY57VaLnh2ytkKeWJGUQEdL7cxP2DTheoFDkW3HTgXFAVwjHSp6rLv2fzpK31A4o2uDcjTczYN",
  "key39": "32GHebV6fYmV8kaiXw8WWMBpYQhzraV4egJd4dPMfFnWTSdfJo5MGWi5HCvEC6KKkKyyzy6EKKUVWH99FvZyAiBY",
  "key40": "3Vzca36H13xSuUKptaDa4iKfT315dqvhfiHXRtrfeW3wxwLYDpZooqpJTQa2JDGa7GFeytThGpfmdaWocN9yS6Da",
  "key41": "3tso19xiqSSq2YcPHxSCncu3npF8GXuCkdFkTrxz7762Ur2ykGjff79QKk1zgdtAGidUXkEFfMsVSkeyUSdezPp6",
  "key42": "49P3QFffGroLivpgQ7xwF6fkNABXHjg3aaekPuHYCt8uYjY1ic5RwFwmRSkKZhzgtSDuXJVFJKi24f9fLXanN8Jv",
  "key43": "5iizAyjxKpLN9iNtYEFw51GNvhcwhAgXzKDcbH9EHj1N3NirMoaT3zTC5YwP8PHRewywhVxkPvgMGsQo29zDfyJF",
  "key44": "R8pLFjGF3zbncyJAuKMdicUkLcoRanBwHxqEiGogDoRu4gRkDeTt1tDLEAzgyH4Wwq7jUrDQwoUynweyC8MdAAs",
  "key45": "43ULKBNkVSwWAvYLLzhcvqL4S4DPtNPoSWZ3KFrqFnfGx6SxTeuAHqzR4XHHrqA8kamfk8Sm76oAF8MFqRBoCFCp"
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
