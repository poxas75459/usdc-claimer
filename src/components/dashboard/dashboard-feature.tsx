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
    "53uRK2xa2JvXVo3FZEa6renhNqm3TLKbeyP6odDxMT6wrPjgvgvYCyynZUGBWfzbjPnBmCUpkqPmp6fgyMdBi8Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQorTYQWbd53xboRpR1RQ6jwh7hBL5Tu91YS16hxEy6rXdp4R9c7mdBzwWjkSMkSKBjK8T8FNaR5ua3HMzE7yW4",
  "key1": "zTMCwrfocQxWkoewprrdu3Aozi8STwo3aP8WaD9witRDnqBoBunbvKTTsSqwcxSGK4mPFaV8pDUqQArNfwNV97R",
  "key2": "5x73iCujDdhv73S8eYEbP7zNv1mqBVx1afPz4o7E8tPujJ2KTaSavnSSQQEb76Afxh8geHV2wmFrCoJuofDaJKGT",
  "key3": "4Uu2Rdjx38FPmkMYbFsAPYw7F7W24eb5kdCo9ZRQ1zUzihwsDVYvHhu6P3Tis6AreC2ADEwYcKSm7ZqReG3M2x9k",
  "key4": "FYqk8Qeu5x21GNxkfE3JbBcARP7NAe2ji4hw9DKQzmmnwqvq1o6BxJmdb8X8pg1Lif4JTa6RfCCbaTGDPXtxAZE",
  "key5": "2vp77dwVtsQow4iUu4wYSRzxwopnR6C4pnTGE7S7BqkqPzrNdAm4cWmtBj6GkWe1k7sCTuUQEmYWsobe52ZGmFcV",
  "key6": "5vSLAmjs1gzjxpQNbBYcdf74SNCzWgmRaAFfZkUoRqS7bD6LBW7X2oyYPzyXJKsFtpDK6ZcqVAHZfiFC7Y5xnMLw",
  "key7": "3xcUfHyNvMH8aQSzi5csLQsL31mXR1pyjJ6mKBZHEwp3KFS6MkpmhNCwoXebgfFgDKC6M2783GEoPF9HEcrg5QXj",
  "key8": "3FbvaQs6WEqd9JLohuxWkGEvxofN2k1gFhz3ALYMWvTYhnZXLRZ4ByaZpfsPJjWS513s5XceZa4ikig9m7eyc2P8",
  "key9": "3P4uYAztcS5Y6AZFyYZHqD4FYuMz4hAfXKpAKpUAQqmQWbtybNv6hKZT3zPdy4Ubp2PjamAjVMUgfB6sWWPoGy4r",
  "key10": "zN5JaSMHdyvh5vbyDY7ZkYcXKv8cSa7NRL3cnqzdM7HJwhR1DTwDxR8gyzxk8FYEV5Q8FpjvGuYkoL1Y2JNs6M2",
  "key11": "4jEkTFNeb57cy8m83Qyp52hR41WoGf4rtDh9MYNKmVoWJHa17SbpQznmKnP84tCZzxoZTXUdLzfSVVdxQg63DA59",
  "key12": "3jReUNwBFeg2htBFppwA5AQReJDyXzifkD5fQe5Z1Se5ffvK8yWGPU3XrFxLSfrYAjbg9P96jT5U3f42HxY7ySnW",
  "key13": "5mHKca6Xu9mtefEcCeDpq4U5rYFQBfQn2YowctLRYJ743kizFqbNMwqCtfpQPwxr9xPx1akGJy4QH6rAgvYfUuNk",
  "key14": "2foxZrAadj992hXhMWVhhBKszUNBTcK2nm2LxFaHMA6q5S2zb6gzf7m9oPfLUw6WZbbhySgy5n7X3tsdeyCs69zN",
  "key15": "2dFn6CoEEUDqV99hUGfChSEnzGPjhEQkstgZbd6RxPa4ZUARxKz2Lj2X1VRfx5GsFNv7AxFnAjshLvewtWdkxZFF",
  "key16": "23goyvzteMhdTKLeCJTv8HaR5hHpiMNQgobxdNF2GiuAEmQ7vfWiqCDUxH9ijLvHUQpjRTURAiooeyNJLJWBEWid",
  "key17": "2agpvJo86bceDaM6a3HKvVEvE9SXb6nSbqiP8URAWAazi7vRKBRggco3ncr7scAZYtLwFTt6e8YnuGSe2KorXWMc",
  "key18": "3Sqs6aqKxehSgFYmkNdFi6G7ktiNiT2yvHXH1aMLkGjiA92EbzohktvJGqb3UQ4p8Db1PJWWrrf32TQvbfNH9BKG",
  "key19": "3dALqLyt5VkW6orTKT4uEHaNfdMgDNttaqNHguu5rtvwGmeugWjArBsDzghPm3Mo38euQDTAndRbCbiaSr8ap4w2",
  "key20": "21FxA5wbfNUMBabAVwZuieMAGBageewBNG9RiSZhTrdQUyGJJBW357zWWgYKUadCw8dfEpxDuYpXX47VAMLK8ZbE",
  "key21": "62jNTcahESrtyHLXJZ8YD7ov3XWcBw9D9pDMh48YQehEh1MaDywZmGtJKwtYDU6AtME82SX2qDZCL8vkUD3Xr9LK",
  "key22": "5dPrNSc4jEw5BhgxHx9ck3ZK3KF6WNC83CHVXaEtdrw1QP5jLPg5gtcXy5iDJBbjMwyxwoYsmnXCNZd7YBEvYK5A",
  "key23": "22p7YjYGaRkNJSNc3EvqMrdZ1DAyq5LJvkucWNxxtvPQPaU9ZWBJwrpXdnsYFYLF2H3HJKWK73gzDiXAegAJoVEa",
  "key24": "dLKQLBNrSkXEr8Xs7hvV2oUCRufSJv9duf3qxFTW2FsLT3gxZ3toj1v3KNpP1LdgBwCKL4AMZ4a3oEAgBoYmFqF",
  "key25": "5v7iB1r8wGx1pYkqBHGXBCCupvz5kCUZ6kmwNZwEXAo8Qghr5kuK5QLmYZ48vp6i64XngCDqaihYeYUWdi9HvTBT",
  "key26": "47tD8e4dYZLU1VtAAJmsA1MG7FUtU8CBin9h9iXDoZ6RirfURkkCacWHXS5PFmW7u4mG4MjUi2cMBS1bwLqjfBeW",
  "key27": "2RrSnnHjowv7Je2xbV48co1baBHhD8w87gf3fzPzwVGHGkSMDd5VMVUV9NKH6vfTCq6VPnP4YGvW5zrmiqYdEEY3",
  "key28": "QYKmqDSvQTrhvoNcQmekekQeG4r24J9jwYUWTAYDWwfm1mUiLrh8k1LFNupv1bQkrSKsBR9BnZ8w44vERsw3btR",
  "key29": "B91mvykwZa9P8B1cxrp4iMUJXuxGGyS3Ue2TCCs46wmynKscYexZLJCdoCKysk5SUMxuXrJ6Gxgw939GuL1UoLF",
  "key30": "5WDUXEBLvNUwnhkGGhR7qypB4WozhvubxirNZJK5im4pjrH3hYLWsG7EWwoT7mLHtSmkCzXJRGv1C54sRkFCeQY4",
  "key31": "5dHGMM7BWGbSu4vPvEFqc5LFaZqY3ouGCvjthwARanb6gi2r1vWF3gTHg5vjfFpd7vuMcwGVt6qHvet4SwUzBpV5",
  "key32": "5YXbxCJo9uLqPk4WuG1psBnsMJcTnucAsksN3kaQHEbaik6eU26xZMPE13hdaAaq7BTTT3T1e9GLTRjdqDKd5E8u",
  "key33": "3LCJTkokCea3jed3jQhEN48e2FR77JXBJ2kZHiadLidFCs497WWwb3c6eEbnb7a9pijpe4trRhexDQHV4s7HXXxq",
  "key34": "2MvbLvVsHSkF9CQNebaStcyoD36bkWabE529RyeWEnxLrfbVjnCv9M1vE1buPC3eUarzUfCe34ZJzcykSmnZzVXV",
  "key35": "3aBPvmBW7P2JN6dNVb7LR5DhWyqfAdUywh2SSDvxCZxg6dGgHrTMksM5f93Mh4dy567XK3hDtCuenUgSYX3uW5jH",
  "key36": "46aq1KfxKpoVJnztCdUKrmqFuJAvvE9D4M9LmuKtfSUFjYjH2VQDdkXNBP4pV1AqD9Acfdmg2UM1LSA3D2rCNh1b",
  "key37": "TWYob8Zn3bnCbfSEDqa1c7AFX5ZMCYEn9RP7KCJdzoEZKM8aZiD1Ls2AkguG3vGGGmbhSmyBHAaktoUDHeaoqbV",
  "key38": "Xq6yFTximnFM7hNCxZSvbGcJYemdiVDG72XEh4pH5GDTf4vhHCEgvHwBwQMPzEKbKJgro7B2nmnrAJJZgtUBPTi",
  "key39": "C3Er4j51JtEQ9ekh6AP3pMFsrHo8X2fxFCrvC1efi6VFL6kznGZbT5kEramse6QtxZ9p9dPhL9gKYBt7w7GjVa9",
  "key40": "4Tr5JDXgnbAZ4N6Eu6w3pcSBaaEi2ndQXGkoQHxWyNSNzfQ2L8rLbmCkXCYAbBjGTJJLFTpD8dAnXrX8pvb6KKnE",
  "key41": "JCK2jNJFhK7ceEp78xvux7eohxXzWDGD2irduCZCSXQiAR18NXm1rXruQcf4npyUs5wb1bTXucGarhNeDpVtspY",
  "key42": "3MDaQtTnzoPFLAS7Va6TNVXPG9QRdqsRDntauAJKZwi1V85wSWoJc7CygYborXqqEHebzeHqRFEkuiCxVdB9aHTJ",
  "key43": "3Qa8qgCVpG6uHDFZgiR54cgg6LP6haVUX9exdgS7Q7ywXiqV8k5XT6minak9bVGuHmYPq4rrLmEgpj8eJmY4HBg1",
  "key44": "2BX86fa7W2bJnyzKJxjZcV9BaFKfFaoupQKiXospE7PHPg6onVGcnTLek1AXSWPFZMEvebE1WqBktY6RfJHsobra",
  "key45": "33PPubvTRLwcgbTrbSs3Hs2nvEusgHeEkyizQ9oK64AzQp3peuufkAqeiynzYgfm82x8hyPFaAaqA6pe1oZMsDNR",
  "key46": "5zB6S3LVaa9kTkTjMAbBj7PxzC3uUCEUQWFyvmj6cR42C5Nzyz9RofBZqdoVUHg6r1GpAduLHycSotQWDbPt7JFg",
  "key47": "4dzBPzEnuinRE2kabwiEb1yPfBxUpBYxyB1gtaMVL7oYVenQQkd3gKm6Rjr4D8zjnfnBnCpDAXAU2GK9KvJwN7Bq"
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
