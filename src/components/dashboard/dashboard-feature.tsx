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
    "23ZDZA1mYapduUT2HqayU9N1Xdojrw3m62ooiuEB1ri7pA5422VP7wYpcX6aRVe6anEUTuGb7Z5f6gHR8iBgru9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMc49z4xjtRvCPjPvddN6ouSo3qxydXN8GGasFDF2NHgcBzYago3C2oJRUux9Dj7idMX5NT2L8tzwjSyeoNHUc",
  "key1": "meYv99bdgyMGFdAjjsFxYoSnt1BYoWJvskGRWkdRs6zaNTw22BRPSoi781yD2VycCAsX9grpZNjDM1QiQdDqu94",
  "key2": "8SNWtfRCb15RN31fQQ1X23QtBRsrEdxqnY12onKyLVdUzWfTNN7xRzuZ5WUUwhdBmuJeUQ7MC2SQGQWbLpCV3pH",
  "key3": "3rCNDp8iWi9a7X36qaBZ9Lpyht5oHq1bzq6mhey9uk2aF32ksZAa913Cq4Y83AUJ7Wvvma7tSjZLcMDCpgK4kyY4",
  "key4": "V1pbREjKF2TBHCUNB2fCVU6QGxTVhSCJHarEybZPeWm5iNN5vu3VPfqkaFNFEVWrXBU5P7F1wRdgLbH2w5E928u",
  "key5": "59uucLPB1ncLjSkNXbm8XsjzgmQCFiysNDhN59oZwMRxzHQjUnETHh29ze4R5MQakguXAYqUd37kt5EPtmkGz3SK",
  "key6": "2Gvu7znF4Yh214yCm7XBtMtNpLQP6CNLXfC84QrRTFuNNiBYmJSXiEBvLeLjLAw1nzJTUbyv1jQ6ozk6hR9EfAuU",
  "key7": "588n8s8PTVd3bZhzdofVvszg5kX6nKFEoHwS3yzgBoYTrPksU4ZD2sSoorDqZobYibsH9uQy625zcb7k94kPsVav",
  "key8": "513f32wenhsFJSFM7c1Mzh5VWWDWyj6CPgnFrAgXoxgnAjquLHB9tX97fXb3MhVYHbceUYb7gBegwCLH8u4tvBdp",
  "key9": "21KmaznBEXU1MDvchLkiExbpYatKXfJiqCYM1iZgKJDFvXHUvJ54PNyJkZ4BoYf9raDRqJT6KQvHcArRrJgzFEdD",
  "key10": "2RnmApNTJbAykJShSkPReUTzNLxccHeiPMi2Qn3rAEFvLdYchBu4cibAYpvbaKjN5i9om8fUSvJtY6zmyXzrAK1Y",
  "key11": "3TkSB9tJHK66CgEaSdnzABLTBW9MyEn4iD8XnAS7RpWzLTDaAEfimS9n3pvFik9Z2GPw2FN72dVG2kgELbzh3L87",
  "key12": "5AKmt3Qx83vGUdNWQq4do89xDAtonKkjLnXPnuXuLYA9EFmbdjEzPLQSesTa85nRdeLvRVFq8zvtLdwVxayKeNiy",
  "key13": "2hQcKKGcJc7Aud1GFAvY6j4ZFPWB6u3nFqHQ5snrcawus1FkH8JWZejNLYqtimvAetv22qvKPGeKXtvCQBF91RDs",
  "key14": "49z18chhRx4ZEQmnJWF9knLj4onfFGfMrcqrhzF6Hbyh6EiRSVrrLbwenYARGyEuJNGemV8wqJTA4VT7gNszU89c",
  "key15": "2ZceMyWgX3sixGzJurrWQAGee4kepboh65DkbmpsrKsfKeywAwdr1SB2Dns1zKoo8ubfFvmodAquFe453tgks6sz",
  "key16": "3XYeLiovx8YapUjxx5ntrwrx8kY7v4c4AfJJiPhjWRUNmhHPJbJBMhXDr2XqsyU8RK6ztkZpkLn5VGNG6RhRkkqU",
  "key17": "4AAAX6FsqAVwBrM44ZehxifPct7yV3YnVMvi9KmzabVmAM3aCiPRmKefZd34UGw3UQx1q75V2JmRA4coFQypG8eG",
  "key18": "49tRBXvgZHAJyvmXD58zpdo1hGzViXLEMUwW33toWKFKVid7k5B5ck3PHxVvPBiU6UgvSxf81nsLQnUTQLaSNotz",
  "key19": "223GKLk9kQ24Ucinjj8LpFpXFw2CfjFeBSaDoB9ZgbV1pk3yMTPhwvYWkPzMqA61j9StpywAYMFTBp1YV9hf7bR1",
  "key20": "9EzFNuW7bAJCeENMJvL9CXBLTKZ4cTf5P4o94zpqFFcyuzTkVsPm5gMLNdPNoZ18AnwDK6EZGMhkURaNSovxkch",
  "key21": "4jcFnSnRYvhuLrMcpQ7EP28CY55fk3ruWD56GBZDrjSQU3iGMdiCLREeVwDSia4PXpavDc48DrKMLAeMZBCYpCim",
  "key22": "2V6LUYp3UhmECS6jjDN56HbofGEaDzq7TEnAUhprnkfSopa5MjVXGrZvdsYfVi4vJhK1ShGUJaH6M7kRAouQXfYc",
  "key23": "3eoWCgrqbwCBAxZF64SLG1H3jCaXrJTvHeWgWb9xqyB1n9yM2PL5cY1Nj1QuWHdZ4MiscTTd3uEsK92cLsb3B4q9",
  "key24": "rok2zLXw6hgePmsqSBVsSBwPMvyNsvAPteWj5R6Kztu3U2iho1YK76zZ3qJzg8CYXEGF1gA44nfH4Ksv7paFkYr",
  "key25": "2vgRVk3hjPexaB64MevTmvtXgfn14cLjHGn98KnYgWK7v5S89BZmQQP5JuXvKFdKzXaH5PazD2Zr9BjPRtNeF5WA",
  "key26": "5ALrU46RtYQTa5tFwHZTFdp2X9G7dYmWjkt7ZesRAYWSjw5Rr3HVsAmgM1V2d1wZkfzSsd7YuSf9tK6txTfnd42b",
  "key27": "5azceDbHMBdn7awyk8FSvNsb46x8FaRqeEtuwYRx1uppsifqq1g3aN29UXqNa3p36He4n7shkSCmmi3uTAvmHmmy",
  "key28": "34YFoJHMvwC6pU7RRriuACo7HQbnUzEtFBmFaVxsWznSyVW5zmfpjux5FJt68QTHRtmdzJvC3NHQfyuAyQQ7MREq",
  "key29": "5xAFc4dgBVYjw6LpLxAks8pDVpqeNUACpTGAmp3kHxYPG1enLjEwUeEqPkAcCnzENqHtMPm2PCEjnbFmmPQKEpoA",
  "key30": "2uAv8jDpNsDMkdm9kAiAEuV7qfNhvyKuTwWiQEKTiRmrASaNNJZYqzRXr8tXCaNfNkz7huyLseexpkc8gvUhrxJg",
  "key31": "G2fMohZP4qDpCXQ1kX3LDVC2Z6rX19tmSY2iGMjyQz3gNcLhcKjoupHaXjozWGM14im9djank6YusUxFdorMBBN",
  "key32": "5uGw7uw9zk4Wt2Z8Zq5cWw1PddArwwTQndsbPfFDKbnsPaJ2vwDnfT129dcU9fnWBAuqQp19NNqasTe2wyrSbUja",
  "key33": "4TVdSyhboMTtS3LEUS35m3gijpLfA2LBRMHGco6aBA1KYuTq2BJXKzEPyvCvmHxi9mLpK89XqcP1z1HBvqyyrBcm",
  "key34": "Uruh1v9bcPdnmvkKCVgdyjmSF7sKFXdTAHtU6KjmjZFMLwp7FVSeo9g2mXYYpMibyz1fgX8Nphc8Zh2t8FzyXPP",
  "key35": "3wVnBATCmyaxpU9ytHAY4eWyEyzoReHFHtH2XY1JCEfRt3gepxFqbcCsVWc1pxTkCd6Hp5r1s3B3kfnc4Pup9Es3",
  "key36": "4cKpYHswYi4LPVUqzww1LkQcLqbtGcfGmeEcuPMFdt59FXncQuVwqtdwtW7iu72sDsDxaqMLyr8GU76VmDAjxbZH",
  "key37": "7P7UYhAZxT7zHVm6bSAcSmMsGvCyTfQGETe3dUioePnHwZB1rbdvQWF6YiKJymkPfvGim4sK2M6MFhwp388WZsL",
  "key38": "5JdbAHjDQvcmR5PrsMVsL2PrxGpa3W3mVQT39wVRBJV3d5KrKzP1PYLAsdb3ctckPVCaBVkcobX7Rjaif4esQ7ud",
  "key39": "3gF986gcF2AEaRFtR3wpDQFCCipu8c81ysHnLQj3S3XqC7urwJdKr3sNutynJk4rXj5ELpoqk1hyHgrg1PfZ8PYy",
  "key40": "518wyWNMBCJDgq2K5YJqSBgf62eRuWZtBKFb3MR8oQbsgXLyKKVjHaMnFWDJ3nLeqVka7f95y6YWDp4rGYgiMEPi"
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
