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
    "XJWuZrX4B9TycPPo3AAfeHRkE3FpUd2txoFSYCrHT8F2EZ6iCH7cTj83QD5sL7UWe8BYfoQ7dmR9DUzEq6Z5YL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Djau2kbLtNzAs4fbPt2C52d3r46BRSW6JNGx5mJwQp85AB6C7sMkEXPctmjFa3EGWkG9EkXrJLt3ex5xhaFr1bB",
  "key1": "2RGipHaFuUwij8PhsHVcfQdnZgWRMLo4G82XCghpWrVmfERsdRG7yB728jFuZ7DNt487vryMwV3gdmmWi8g9Xpj7",
  "key2": "3GVB8zZiyYEoogAPzMpKRxjyZ3XCK2vYqjRhzUCy8iKTUxgMZQyzc59dFCL54qmxugZqZ317Qxd1FQL2srdbayZp",
  "key3": "4EJyt22DaD2q5btN8dLgzKH8AjYnDHNgw6MB3swSTLG3YzUPtjxKfNBNM594GFuo45Lhy4FRq9Jvrag2TQQKhN7F",
  "key4": "4aLc2UDwGcVV4yGm3LgH1ncrjU1psrMBCPMiVdEnUcNoEbVtSjK4r8PqubFcVtVQUhPUGp4DiDb1dxKqi9nM8ZY6",
  "key5": "RdMuQiGYbsAWLaCS16cnhKd2KgyJRauaTqFoihu4XRps9pU46ykjaroU3Tt2eo9PfbYJ3tYJqYNgn9n6RPCJcGw",
  "key6": "5r5x4MYkcZrjoY6ZJ7Budbso5rcKFc6WFzLjqxbrHCEQnYoc4GdsDNS25sWny4LsGo2DVZPQ9GejcQzLoJqKVnuF",
  "key7": "4L1k1xms2v9YuEuuod1Hj41VNxpXK5fJAxKQzrjEW6gHrSW57q4JLTb95WZ8K4zVSDEUoJT9xuNmwzvitnoPiqG9",
  "key8": "Y5t19XvfmUi5fCEws2uhU3dK3AcmAkfKRer5Uc2jHD2pubr5tBQmY12QPC4qhBNZT2coXZzynqPSndRhNF9Gp2d",
  "key9": "4kthSHzmBs8KsQnLQmcDs2HNtu417y3ctz2G6H9YhA5zZuhnc784TkLsX3jJwU9sYM5cBci8S1Ux5ysiLAbivyfs",
  "key10": "29gfpAW1djVvgXmmnEs9uKm6XX6F9xr7KPnvQcANWPyrE1LSYLR891UhR17a3bZxT8dFRxWgZ2gVnXmuJZDRxPaQ",
  "key11": "5d8GeEvK6GCnzN7LaNiMhSuytHmDXAG16DZoqVk1QgfhPJkXo2wDkxS3HNtNRaDKBcKDK9SuqFLkCGYbmwnADS9m",
  "key12": "2DL4qHH2E1gXpXh54HreYLue4NUWXbMafcKNJ1zZR3emLcYWQ5Br7DDiy2z3hDbzcC4HMdbEuzEh4AZ3KQnxgDSP",
  "key13": "5mYCxUYzkd2qJyuEZYjmFRer1UG4ooy6zQZKeZPvAyc62f9tmusfpxYyZ2yBHKPA1bzFjDbyQ8LBBCRuqzNNBW3P",
  "key14": "nicEtT4REgqjuf83qfTuxPJTExq6ic526AqGWZkxq98GfMak2d6BKBjApbUQJVPLieZL4YrM4dPw6Qi1G5UXixb",
  "key15": "4FA1R34xTuHeQS7UDGAGSt8bZokc5YMhTjrcQTgMB3wHq7cdnRmj58tiRnenAbNeUYBiZbFEa2bfdTTjhEdcE4xC",
  "key16": "56MnwUMq6PrWjV8N7vYTYhFyv3LS1dLJ15TvEVwy6fjYRXBERJvKzyVdTnaSd5NjKoDcVoVaeLUkgk6dUqNaf9yu",
  "key17": "3AqXTGj9N39rr1poebrBCBfyVWsfvTLk4p9BGnTHkxCPHqcQrh5AoAv1HvJwexXESG3HaUhAzQvuk5g7rhm3NEsM",
  "key18": "uqagrdqK1ghDTTms6PLCtAwr1qaWycdK8DZzXPM9Vqavp4f3sVs9QwqX5GrCLnwrf85Sw77t8ujttrpa8w9CjEH",
  "key19": "Upj79qRYwPMuXkAYHYSPrYstf9Nr4Cweg1SRiHLtknPpcQ6BbZ9UU4LoKShnwWfsmqyVZfHaXaNUi6hpraA5bcN",
  "key20": "psWYRPcyiV3LZTEU78phop3tS7R4WKMScsyerPwnY8JjxBn59ukmqC3h6gWjfdS57pMkPyUp45dSYRMuD1K2SmP",
  "key21": "5SH87jtShPZZC2imx3ZRQJVANCqs1KKrBnq4HR9K268KJMwsB3JuoS47Spv66w78rdwxnmLfXm2HRUiow8qm1KT7",
  "key22": "4QyzQ8AaHcQftaL7udRc6x1txwhC5xrnUyWUhKgf8Mbv6Fg6SFP72aLf8kZcsx3bTP8K5ecNx9eqHu6x9gRcXPiN",
  "key23": "2WMXTKrASiSAfwG1ppedUBvJAJhJycQjZR4xyVKzU2F1yafekjcQKezHfgHdEiJ3LCo3UogUwiRSP9s788Fe5mLD",
  "key24": "67JXCkR4ZKiRAePLPp4joJ2wG3GnqpLRM7WtjqzRMLCR56PRxjVuCgiRrCp3edw2WXiL48YUMwhK6crHqcabyy5t",
  "key25": "4D3zdVogMHevT7cPqGCDmq8DGRifu33647gfTE2rd2FFc3hjzEAPmQdnwFcpaeYwGJosaS3UgBzpo8a7hix94kuB",
  "key26": "2Mv5rYpcPgNognK4tp7hQdik6mQi7ZysRpNpcgkyYuLW5ARL5to5t1usDoSuvFneEwhPvCqnTtqf9hodHSCM6EFZ",
  "key27": "2z9UftYR4cgytNd52Tjh1xP1g7X1zM1bcAy66R5CwBR751hdkFbGXe2q5aXpRvE55UboLToLvcJZenZgBExCAtxP",
  "key28": "37TnpRsu8dTKPR7X3yUErkPjzrjm5Tae9Ez6Pp36BQtjZCvevGJ5CdxjhHPLQZxkjoWQV8ZPiJ7AYPz2MRPrpwKi",
  "key29": "5VRUsaa2LqceKogUDR7QRVyZ6yZFJW1GpQh425oZW9rDv5Z9tqj4avq3JurBdyHdRMiiVnC5Fcb8T9LDQnM7WB1H",
  "key30": "4nZXrSB34NogL5x2PS3Z6QSvWtLLgzHk7kpNk777tGh6UUEkhPRstPkMathCwgaAuvCvDa87op3zmB6R2ALoeTyX",
  "key31": "4DYzMB3WydjeZCvo2GzuaUxrofc3FDKqFtGq2LfvHgmfrJKNQ94bidbFppPoipM2YsharUBhvhFRUiJH1VvG8Yzo",
  "key32": "2pK7Xw98gHdpdYaaLVMzwcpWM8VcmxLgeDftMBiUbuaMcTSzsDsRf2VwFs4GDK9M9XfznixzQS8eBu1bo3kDa5Zr",
  "key33": "UDMKJ96tiuAKRK64PSyMWVUBqUyZBhNSZMyE8R6T5tH8Ht1c8n2GsJhqeXmBAV3q3XCEw4YsXU7rzaT7Eio92RU",
  "key34": "3DdczxPkEsJH3ELTsdP5DiQa53aQ3R2C7Las85zBaePxZ2NuFyZJPicGdQHQML52aXCVauXjGyRN637T9abqFsyL",
  "key35": "3sazyAZSZHQ6SeE3bacWDR27TNnZ7ZXv4ubNvC4QRNEAbUrBxpRHqi3N6HW2aaPVaq3ceA13iPbD8cCvowE8H799",
  "key36": "5fSvYPGbNJLYqx4AtTao2JBWMeEHQnWw1MZiLuVAfqE8uzZyTX5Jnng55yZyoFFsssoKXX1H4Gss8CiwN7q8Dh85",
  "key37": "3eLvGkaujLX966LqvmELx8212dzQtqWoJ3UmDSX4CEySkHMsbyNFysRiiYmXHtTpupyG8uJtnBAotrbn3K8KXHaf",
  "key38": "21ZsH7S93hD8YiwJxJh9E4v8SH5tbWQe17ykJ5Hy9ZDg16MWuPhL5cJvQ8SSPAc5P9TtcMwrJmCYGQAB9RAcQUcu",
  "key39": "GNqj33D5TU2J22qf6SnKY5DRcnsBhyAJWk8cZVDGnx4xyAUXxhHFSHi54exk1qejN7sTu79KLEs932K6BtjBVsF",
  "key40": "2xN6ZJCGreyVZNYs4Twi3sHE7T7GutyLxA4E3QLibzDQq5XCNZZyWjCyLhzZbpwBDh8MYSoa5QqGEZ2x9b9Ay1xG",
  "key41": "9um6b7w21EVPMxprvvNTtM3DA73MN23uJ814TzHdSLxXxfdqGmWjbmpVAMrMYDkReE3ufJTaL2CLMmDAQ5MhTNj",
  "key42": "5SZroaD3nX1pzxvjTYzzimzUkgtH9N2bYPu2NciY2LxsHpeUCqZpSuuhfqaKVRqt3qFq9x8BggvSpH2B3r8Uhs9H",
  "key43": "4cnLKZMvSCfsVL2e4qeMfTxuaFHYoWCAHiy992QPHGw5S4ni4Tj5p4vUfikjJsZfke7JyCcUrzRTZECwxkkuVg9o",
  "key44": "Pp99mQN77cEzebv4B3AxtY4rizfd8VnBgrAiHtUH2RPUt4eMxPhgKqKfnpNSbjKDGyLEPEugWkH2mNDjmbq2zZB",
  "key45": "3ajbWajdKn1DuVM7GPbEUprPzkdHtjKHvkS2hdyJjMncAXwcVwXw9RDX4fQpgBVGpSP9bzv9vFng2iZP8R3Lui9E",
  "key46": "3BgiQZqnL72XuQijshCMjeTjQUVKkLTJfZyRHCiS8ZdbLN2HyHXsnsBktupQ1XgjvJ7dhSFofSgEmoZMs2XFZ76L"
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
