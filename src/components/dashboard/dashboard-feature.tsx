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
    "ZAf35hu9Sk8Eq8f2uydo3Ec25YSfBK5QhcxAodYkHGDx89XFVkjAAHyRCBoAeVaPxLfvbMyMzYk94dCj8s2TRmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gabwneU9bkGJzKRJ9TQ71vWQsa632Sy5UVxxxooh7wfUQDujqtVW6Pz79ymyXw7P7NTY8qHF5jnhYiPJ5qej62T",
  "key1": "4Gs4LnSpKcGd1TfYfsBrB6p82aTK8BB11XYRyYRbCNyCvgmpdpKuMznV76szu4qLwg75ndV2f6FA5nzEVPc8ENzv",
  "key2": "4jKEPa2Gaq18FYqJLsd2VoBgdkXH4zuvTgpJjoqXKSLc2eFJbbGySo5FPU7ncFbNSvvDU2JWB7BPNRUbv8hZE9in",
  "key3": "jK1fEY7MLNQxe5DzsyxAJjRcLMD3E6ojuFrfkNQ9HT1NQuXVNM8SQ3D9VTJSyBFEzekCudoSZTwPd43Ms2Qi6bU",
  "key4": "4fCDNLh6uGBimhCjSTeCwfVKYpKfNnamrSh5VwUkBaFnb3xFHnamN9cPkiYJL6fk56rwb9oMY9E3uLi56pxj7NZr",
  "key5": "22n9dLdSCzSHZfk6NHRXjMsCb14fSn3AdpzCeH2aGN2uUeaN25gMkHPvbiEjgyeE3gwQQqMPo1g7HKTNWrnH9Df8",
  "key6": "3y8dDnurpKiRZs3bpKUFPVrhxHxFZLvT3qto9jfqsUyWfLXYCLzpuojMiSgdy7PEHsbcNxB7VWqSYkfuDeUvBwTN",
  "key7": "4mXccnrNBZo6cpjSLfpCGjb4EKZnedDLWYBH1fnn5WrC9K68AynCZYNZXvzBue5kYJy9KhCPEBuKByKyVC4YW7AW",
  "key8": "4jYC55hgdzEbXcDZiXKiEDcdEfxRyPh53nQkBdQ39Uwq2zZ4mc6Gf6YbGrz8Ut3H7AxoZ6gYb8ac8DdZBeR1v5gH",
  "key9": "4bCHaHA6s9w4pTw6nWS82hSNDg3E2F2RVenXkXFGCxeYuJftL9NR8Axv1mXXPK3qbJv7debH49owAum41VcqngeL",
  "key10": "ijijLTTpX9pFx2ZeRMzP7jJmfpgEFUeAhCWe7Up4mfxBhtrV6tm68vzV1XqSj1bHd9XV1drX9M5hionr7RaXmTE",
  "key11": "KQqSm6ACNoxBV6fTb8KvX1vfBoKPKcnmSAsGmoAdgwfdwjsGZzUpSm6QUqZdjhsk71YJCvarKU2wuGLsz2PRTMz",
  "key12": "2KBbYww1FDgzaAe9rGnWzw88DxUeLniY1GMEtk6jJqMXqpNPkZwExFnMs6zdeZwKMUU7tDN3ZHNKF81T8PFZWLaN",
  "key13": "7stmx9Rg4iQ2ha6ZtyuUQbDJfAp14Qw14g3Jz7Pw1odVGcsttdfDUstan7rQqUy716QyGwA7fSKY23sicffzU8p",
  "key14": "2ab9NxmQAfXV1yAbGvY7BpxinkhKmsuaj4CUGbBsB1uig5zCUzC5EgRJVQFGf4ZnqehGsehPjoN38fojZx1Drxxg",
  "key15": "4opGCXCz2XehigshhrvYPztHaiRE2W7yVfcWcSkvEbwLfWkuuFnkSxSsAHBpV1jCqBE5wHwbTGHs6t4gsSB3UQ71",
  "key16": "4kixudWqwSZ9Dh5iatQHkPq6YzrzY2dD4PSsFZdcusAczD4UGaggmK5b4ZeAKKuau9yqHbqGjRCKmnrGD3JqL9n2",
  "key17": "2rhJhr9Moo2hgh1CiYBrgBgBBQSUui2ABJdLv59ngA3VDjUdK9tRPqCo4eaityZKrP8DYxuBi65CEyZ22pRvQk3x",
  "key18": "5vtft3wMcY7ExD4dvaDYQvsXiCHbU4vdNvhc51sRTTVk5AnTugg4su7JjvBYzdTw4Mx5iwqNXsrdW6rN8JU8RdKH",
  "key19": "2GPG97RcpCDVGC34wKKy8F41fmK55AawjSEgMPfma6No2XgYid3bJs8ve28QhS8swR49ra7SDPxQbTAc3eftwwyH",
  "key20": "5B8PUae9pRAEQVz85N9T6rS3Zm3SFaJW6ZHZy7Njh8yDkcU1odYaiLsyrvwHMDsBGnDVX6vLHCcUY15Wn4y2qwNT",
  "key21": "2o4Ho2vxWQEr7eHnzJxogSRsnN1Rbjo8Gg3doti1BpNjnXZL4t8YZ1dPzMSuewJymkpcqHKfs1WZXQi5pQEUL2AE",
  "key22": "2GRSfSzAfb7C3Fo8ifbD31nVAHE42B9prBuG19AHHHu9rUSeLM9yMPNknt68dzK5G21fUrSZiFnLmEG7Rh6Az9z1",
  "key23": "RT7JvHu36a2bjM95D3FBAPXE2wLc4AXnU3sixQWLHZzqtDkL6qj2qdJdoGKXkn28hhNZndQ6dSuLHvHNUdzaLft",
  "key24": "2khyxgfVARofrdPNnPy5Fc155DGBpzrYDDmNg1SAf1kKsU2VRBAE8zyTfSt7mH3qE6f6SF9LDuHb4JqBM8FoAEPU",
  "key25": "4M6LJXoWWvrazD19r67aN8g53NCCnWkJxctYyRGNKJiaNHN8jVYTu1wTV3nUzXFbpEMwvx8qFM3YwtKXezNC6WBd",
  "key26": "5kBcKYmKbBikRvRSqeDWQXxsxaDo5gHeGjwaVRg9tHFrrFnQJQnJP1iSAAy9APMTn7XzSHXQ773npkDwaA8Lj5Li",
  "key27": "63ZdX3MyyhF1a9CEkr5Gjf2jnsVugi4evmp7wiiCprjsFgKLNL6sFJmzxaMjdbRk4nRjnmthoXYdfFrkm5fxpT3e",
  "key28": "51478HN5zHoWtJHENDNPcadejf7HxCrxyxxT6uarkUPgtSYE8Zg8PbyMpdEczBSk1xXxpRVhrQ8vpNQDuVWtS6U3",
  "key29": "3QnpogGF7ySBZyHDunESD6WsXE4Kwd9v8NubUK2dU8ERnSb5fM1gtunq8uzDFDG6nPi93zp2KCxdTy2FgXcw7knk",
  "key30": "35HrZKHPk3c4mbYewTZEZK1e9PKnxTLxejNi74ZUVHriejCT2ETiaDRs1J9mNbkBcs5wEHrsQafJpdd1VFHR43Un",
  "key31": "3v9LyqiGesuvkrkv2vefoGkW1fMTwAJ2nwmDeHX5tfiS1Ygz754HSW82HknZaY4vrFnCG3VS9nJDruTUm5bQ4B3r",
  "key32": "4N4WrRJe3VTeCuHb9bMXkRFzyjGdCFrasvMjBWyzkNm5QKkxxzpDspjkxXLW7VgUWtWMmm1VHn63tcLkBMYEFU9J",
  "key33": "3Wcg4fwL6y6VZPfqqgisHwEsZaGvesPpA8TqyZNQNw4svRozmnvzaw9y1ENvUwW5urTyARunrqp1Q8zyb38rxKcF",
  "key34": "52vNU8QwACdZKhdbZEmiNGuWkUSB8TtSY1yFtjq82Tewx5A7nnChbMa9nv6cXT493BSXEGdTStw8Nea8TSt2eUo8",
  "key35": "xJ6s9WWTtkzDz29d1HumQJgeAEEAnW1WDyLJFueKpKRkmM71rextnBAKJP64soAY99DRfB82CgsvuEKBRm3Mk7X",
  "key36": "3Hq1sNw9hR5LiKj5Wc7iYvXHtsGNMGDjZA8cYpJyrakyJxxeiWGhGuq5VKZ5fodV7f3YshzoHD2sPgaWcnsdtqbb",
  "key37": "57uoSZKeJwL4Q7Kd5rGwBAwfzvGjXsR8ezMW8Fme595rv35HaTMSGXY215mDFaFuVRpPpMCfXF6hufJi3EBbJVPa"
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
