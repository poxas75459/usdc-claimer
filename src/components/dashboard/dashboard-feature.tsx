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
    "4GdqTbKqXauk3cfQGL7UJS6ZyQqSnjJmhV2L6dof4b9y4xn9GYPgUsynLZDZEqQj5W7kcZJF5i8aZ8YLiKisFbPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqhsEjgp3eRsXbWunuxn7gPm1dLr75jAVyeDCBNuJDrgG2qqBF2NgTeRkfrqCLDYLSmXs8aRc9VC3StJ4KVNXr7",
  "key1": "2FATEDHRedumRh2UqZum3bWso4Xys5TYBgfva4MMwwtAdhaztkY8ioWpwX5a5TVm4sDQdAFLXmn1jXDFdsPeyHJD",
  "key2": "5btirhAyYxEPaVFKxPy7YDTm1E2761qbVVyVY1LeN6FG2w7C1dnmUkgZd5zfnj7LiQzh2iet9Lb6EgzSeqYQErvj",
  "key3": "2zRwt8kaTCgwXEBkspeA37bBcMHhMpqhpSCyZTTszMyM3zDPH8wueaKijWXvkVagw8EPvN2nFJby4bmwUa6isBhs",
  "key4": "2n14gAc6ES6Xmxd2YogmRGj5TQCD8wciDHQGTuDh4EscAKe9HkCjTmtDnSujs7YJGF5QWZrB1nizkK1s2k2DDMz7",
  "key5": "2itzczaoZ8eeEXAiRSvtGjMXihtLhfh9CJt9aoj3eAb8ApyosmgfCNS5ZrEZAPfPWn3MVHxKHhRtwaWsveWxP9nq",
  "key6": "3smpPUHG6VRGsPk26EhCMKUon4hGgiDSUKT5BNZzuk3t3ejfUQKpC5SRh9P69ZtW2b8DUWYaWbxXvQEddWBtGVsv",
  "key7": "2sb8bty96S7FDACVz1KqLLZmMKZXSnvfKGZCuHzq8fQh8FjdxsusRvsTNihf55jeECZam55YqtV8zrnUkU9xsk34",
  "key8": "5N84qauBR1JX3PyfUgTHZ39SYWLS8A85eqA7QWLPczsyHDQcHrMesvBcMjgQzDovL8jqkdhftRDVQKMqwo4kQkPv",
  "key9": "4s4eu2N3fiA4Eq8M2gjWfi4fQhs8t9mNSXDAKay2TNTmoEe8qXJJiEyeix835EGSdqZq1iTcwuKBXAS6PBsqmoe9",
  "key10": "4S7DGqii7pz8vaa4tQEwbn5QB6D2WyP8s8yTNx9ktxKQcuETWBCgmsWhTBVdcbBqgx42VB9U5xwwMY9dabHm7KKD",
  "key11": "2trmN2tbXMGbbuS5HKD446dgMDvwDcK2pHX5eXDXovdbKGsAMQ159Cb8JejANPybFRordH8MZLJxyXUrsGRYnPdP",
  "key12": "4LWry2vQQnibVWqcsHAzAHq6Pt5i6JLd7TxQnWFrUvtNXy7K8y8rnVHUbAvbHPWqFthq7c4Tf7bsnKxKw9Nkxp51",
  "key13": "BV39iASj1CpiuCqVhLfeh9Pt7bNNBHBZKtVGFbWDBCfmxKZnBT2cZTTNoQ4KhterYNAdPszob43q9uuWySzrHMX",
  "key14": "5MQeomuc4CP4EHWArnqkCBfrBCEEKHs2h9iCkLUeES3ax7sz6Vmxi7x2wZ57oVHyWH8USwEG2Em9xH7oWpMmVT4d",
  "key15": "dai9ubKJ6CycsJVrRwnMpESZAK2GSrM6hATnpxxRi6P6GJ5EQ8iXMigUFTYxCXjpie45YDh8jZxcZyqzaq7QAhq",
  "key16": "5LtjdyeFkucSwurv74Lkd5bzPRQY9Yd8RQeEjNnTTV6TWGf7KrvFYEGww4Vn73RECyREVw5G5qv6v6AVEz6ZkrPv",
  "key17": "s6gZ1p2e3efMKUGvK54uwoLWeSej47wdZpgweJFXtvXE5RcFNACLpMWgKa8bbSqhYd2VW6x37h9k15e9JB4iKxR",
  "key18": "5YLrjphPwrKLLHNnp5xTkatR76784wzVk9rRdXD41t9UgQcsYaTEKBjQH9iZ1QSPhMxJdAYm5tBmzzRVmk27deRf",
  "key19": "tHBaZEBDV4d1CKRLCGGdSjgcADxqcKGmAMpotY6qRwuaJerCcjg32WYADYfZatbP2DmY7ous8Epou3T43htDPCh",
  "key20": "4crPUBT7GVCEas3YXqzQCp8YdvJtxoqEfwfR6haLoC2XPziLzQUox1HLabgRSwTaABj3eWDyT9uSDStD1wWvF3jZ",
  "key21": "2MtQS6oEsBcNsa2WMSrfygHdYd3rdhPisVc2Kjuk2p48L7nJ3LVBXKzdWaDFGXBpRp79YA6fDXrnbDrnpXuzNE7U",
  "key22": "5MNfCR74vE2x39VkGqgPwts4Yhj7WVfr9rN8ZoC8jgemfvhyXkbZq3VGFLFTzKivxp4Kebpx2SpWrk1Gubw7ZCje",
  "key23": "Vtz6R8A3f29QcHR98MAgyRhDgVavTGbtwwwc9aQh3kBcHtBF6AZi357B7oqcqvYSxU6pMXippj23xY9eRZN91fX",
  "key24": "5Tvdb3Jms2ygheRuHZs8EuG6vwwA7fECbqq34Kcj3FQxvm5uZJ9ENPAMuaPgbjU84aKjmn1FGtpQZXZgoLpG5nuj",
  "key25": "54rcTQuG66xaRKzAKKeX2a4bU23QebSkTgfQrifJH6eWtWkzb8ji7Wszh6LreWZrMWCrbaNZAsGfPyBGXevSDDnU",
  "key26": "2RAAepj6QCU2yaiDJC21WmsDE21ZwwHGNFtAxb34vWEEYx9qTChgi6AYAHz6sFbxtxUgtdg9m8xfVRP55E782Dec",
  "key27": "3CY6xauVSYkCnfyvLMzrHGVEFfnB8kwFKqwzGGpfrcEwaUhCqFeDF8VuMjo35P2rruu85jXUGWWQr5CEaY8P4VYy",
  "key28": "2UUvcH5taWYRRZNme5gR6nxG8BkZsRAVuNJdLNmRMHM2iFhfUN7ULDEknTPDBKFZmPepYVXSn4yWqbBLA6CdUsfn",
  "key29": "4xEYbBvX4uAecan6hyNFcsoboPxhnrZzBttbqtox4pmMkoZvhZ2X7AKadL36GQsRL4KrgLQVFSCvtJQbrwFSX4K3",
  "key30": "5w9YHWqx5Fdko5BUX4EQimbUXGBZEHEWWqXfBd5j5QUwt5NrgqRYz1RCQfXi7xXrKeUznmEkMn9Yy3Gxaz5aNuf2",
  "key31": "5bH7APHEB3E5RzAnMgUut8Ln6w5qyFBwteG6nee3J9o2eNm5PrcWFRUGNHFSXrcFUVgZNPhVC3sd6WjGXjUpCHxZ",
  "key32": "2WCcUq6Wy6ightiSS2Dg7TdCxMNgAsBVUMaGrXxexdkfN3RnxGwWY7WjqNukCE18cT7caLeCHjd1N3RWRoMvR51a",
  "key33": "4TkpSop4VeWLqqhc7tBLSW15tGNUnHJn7GnTTfuBpCiqMXGhCgFfeE5EVscKhRfubeJYXFUAhn8tMEqiXymYYMSH",
  "key34": "4qjcCgLL8b8vk7JUf7S2NL8FcAWEf4e7AZEHqWhTvrPDt1Dyui8LKbbLWca3E8R8BoqRTcvAh4skdWgfTKMiE5Vw",
  "key35": "JmNYWp3JAPJMQqeevN5mu8oysobLtmboxhFcQVsPjhw7xbfA74bvme54vMq5X1oX5wxyKqdJ7UTSdyMYWKyypaF",
  "key36": "26itKre7KEc9rJRpZWi2KQ3PCcvZLRTFj3WSp3YbKHkMVqhL2XZXo23hwUjGvymRefiBkuVRkwS72ETGGbLw1Yq8",
  "key37": "2QaXmhuXTvXMo2GCEvwP7a5tiwPTuvoKDTR8k1txDE1X8w7mZRkU9dfHtKPagkvFDPMgWYWmaBDmJ2ktWhhjCmV1",
  "key38": "2J4hgyigWb3JhDRywGSh1Jvy8dWEQuEZvcJdWmahYHmbFTXqBh3nDm49iaWFoHjdw2kxyc3ip8WWQxteUAim77Vy",
  "key39": "2Sagv2ofWXLWrp3C74VZtCP16q1DjgJD19Wi3kXMR2sN4fhUkKbad5VeSzkNh19ARfHitRENQeFCzPv2LT2Bs8kA",
  "key40": "wyAzuTXt3kLpZTYp8hP9tHznxSPPzNNQgWcGmNbPiTd2EJvXqvfLDkt33Dw4o9Vs31n9vctdmY9B5cnzqzGTM38",
  "key41": "4ndRU5sWY1GpxuEtRtNgM2i2akTjfD74AqNQjr3dbi1KdeXd1JNpyNz5oFYZ9ZQT8nHHkEUQw3rqLADTX2hqSiKY",
  "key42": "326br3APu2JgvBsAXzNwj7ghsg5g8Y9CE1iXNayf2HrVH3kkfXhrtjCKBCDRhS1bnTq6CDaxPDqggBahYSiCiX86"
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
