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
    "516meWCURgFPmvu2ZqMqGwW6pFSfDdYGLa5xGf6My4mAHchPTop5aSts537csLfJ2Jt2QaYxDXzxePFouqcnPaLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tF4tkaWtCt9GjoWkbxG3paMd3rcGqrC37PenRwRDK2pMiNoZ3dv2Am3HAGjjME8r1KmTqsQhzBHbPDNU5JiWSM",
  "key1": "54xEDxLg9d89g28gke7gDH116HqcPBtPekWJ8dkkM7YU5kVSxqDZJcNHLFKdWs2jo3QUyExYq6a3pToqdocPTgsz",
  "key2": "C7zrsvoz5BuaFmj8iBau74uUpwSNMLxQ3xg1rduPogxLJ2v5WLkA6kdcq21urX6m3JfDuG8fLP59rWSEKpYbRU7",
  "key3": "3SgGgyTuwyRdznWToF9ejk4HzKzVEJ1hGVr5ffJSkzo9yGA7pAaAWmRFQzdcGtQALSTPDEeypt5YHstQ4DFSdzeF",
  "key4": "2XLuambvnKUzCFz3Zuvz3H2chx4muCP1stjZsqSdu99rdmmHmA6aCdnzGCVx1JyazE9Brxg8uZhQR8c6mRq3s8tn",
  "key5": "2rMgVyHPN3iVqF7oKRc626PNPbp63n3B5YLBTNhvXnUFF4Ag2P58JzXrBeTiSTVdE7ygcQDSFKM5QMfsm3ETYVfz",
  "key6": "34Fm3TA1gmtAmmu5KBEkWwRq8MDScmE8fju7Ax6NsGxj79RNkaNRnVfvc9ZQCvhEWf9t16n1rDwp9TEosSN2ZjZ4",
  "key7": "sTPJSsb91PxnQykQxLikhbvbkPCBMMEw9RbyectS6JVm4fRrFmprKRvKEomMSSdDcAewGHJaz4TdWKA9LeZNnv1",
  "key8": "3rxwV77YzndAf8AYbmamXHx5csR6ediozMY2exDPseFkZWLahy4dAuSUmvfVhtRMCq9ns98Q6ymZjL4xdrynPszd",
  "key9": "5HuUExcH176KVgEitRnZcYLu9tuMTsAzHLPgQMqVhXG3uo6i5cPGMPvMXe2JDmXsA485UHaKt5fULkc6VJSKs2yX",
  "key10": "63obaj7bbof6NcBVZTkr52B8RENExuJCLJYjFeuQyx89qyZrFRkCFcoxwf9gXU3iEWXL8urKwszkxpvvtacjdY9z",
  "key11": "2xrcVzCsqySRGUJGWLDc5s12JVJ64hBMt1tfMwtVQCLRPpqf3U1N4fU6QhqpyinVRsqWftzDGNA2YDH3tieeRbZ1",
  "key12": "3RMFqqoo9SJB8TPMSUYFmyV19NbPNUS8ykNHeQ5Uc3GLs5uk31QCmUFa7B7nevUQySP978F1Wyr7yV18K2nUzU5v",
  "key13": "3piSfhJAyREFt4kcTAup2mBKsMuhDHtJ2NUCFgQF4mVpDEc5ircWcApXKyZeUpqvxUPVVqHmvwF9gV73YUaSn2p",
  "key14": "7JguTbp29CQX8ywQXNbDFrvgZ6LbtJ2dxGirsaJyzEAN9rRbp7GpczAQq3SR7VGx8ku8tvYuYr49KZhA123mF9c",
  "key15": "3UqGAg6Yvs5LRZFCYYDxpvK7ZVMCsVjMqNS4QxHeN3oza3nk8aQSAcBuGzNwHAx8vUsDLiM8x8bWkGD5yCpxhJzx",
  "key16": "5ebFesXFWktgyBe5yux6QQ4MRwhBWVH9RnK8HTm78TcC5GpdsMHF9dHnT835BYevBa3kppDMZkLA9vXgcYBU8PTA",
  "key17": "CJ3psPbDk6DdLYstKQksysF7rP4njwcHRN7zfneDpp8ujRGdr81HsrGFcT3GwwNYfFqGDWbUdkBJNSLKgqUWYxD",
  "key18": "3uS8BnHDFzEfhb84daCqYJz9RxhrCtSu8mwM3oHy5fEVBwEVW5govu8UdW2qVe5qq4uYSZqSC4SeVXWUciDkfnev",
  "key19": "5wpeK9RmbgLfHPvoLB7ZsGwUDHsi3dKamrRAQQ2yY8HzXsw7cBg6Y6JzLBzR2bRkkedgEh21m3yxhvSYd7TQLRhB",
  "key20": "3kNVrQeSq8g3K8mvzf2RTBTe2JSPFWw9FYz7M1GSfFxaTBJy1RAyrz1ae5gG7RFDtmNgidUfaHdwwanRbixN7vNd",
  "key21": "5a9cQWjwAXxeXMpQMnaV1KCjJNTHQSYu7xWAmc8c2phg1D9ivfPh6zE923rMtxPqPBvD6aLp3iVuydvq1J37CB67",
  "key22": "2HkByyMmdNDTLXJoX5tTSWHGE71EhKV5CkoKGijveYHdd18wozuuFFM8JeNKjZTUqboKAVQwKScG8Lkh56d73fyQ",
  "key23": "5vU71hCEmjKNfViRYsvUM5ZLZPgjzgbsL5kPD4gUV6eHnWXUk12DtBy8g7LxdAgiFcgTfjpKCkYZNtgtjU64Tifr",
  "key24": "2iRQNNhrccbCoDLtvJ4wU6mSornDrpXV3gcFB4nassUoR18YXNB8yQ3JSEU6BpmWSRUjtFJptQaSfrL38cgUyKrn",
  "key25": "2VEgmvmBcsJnXCzihNTchJge5v748L3yn7FZ6eBxFJWmnvibAxNXmiwP9zVVudbdmpnr2scaqAe5iy1Gchy63mcp",
  "key26": "s5asECLw2gK2icKt49KzwtwYsxMvQ6HyR8FNiy8skdYabbpDqieSnZd4QGnFnm7wdkhgcsC9Ya2e8ZAMwaaMpjL",
  "key27": "3B9SzCe7bERNP7bKuSEy5JDcMza33S3iqMPm2baw7QGFfo2rQN47eUWX6WHCZZRP5ZZ4vv6cti4Q5Hsa9UVwTAJ8",
  "key28": "2JS8cuCWn1CNvANZ72pbN8mjf5TzXusvju7z3nu7QHj9bPdbpW4aqrEM7SPd3yL66PHoMLUdKQ6bqKdHnfX5ZdMp",
  "key29": "65pDwDaqvLtPqAcn2dVXJp7JvmX6R68Zj51jU7QY5QXsYwMPUDqGH9pa6ZyrHHUihPJYXfPHcTprd5ibyWj2RZAX",
  "key30": "2D335P1yzhjhQ1sPcRGgGAzg7LuecUrzKD2SD1TUbRd585YDHFonj4qPtB8rwy2jH5ngqgGBexLGHMSt37EY14J3",
  "key31": "3PPfbZNKv93GBd5UrKUxYNz3rzTJPGsYrMP1mV6i5g3kPbg8w3MBLtottyU1Kv6deHNF7kCrQy8zUgoeRabEEdhp",
  "key32": "5PLydqAoUxdG9B1cydzcqPkc5v4fxcTA1Qq3Hx2gWv4psk5dGsd38XGGszi8AKxs2SzKBz7UNJ9tKJtESMMVXcYf",
  "key33": "46QvBxi56V1924iQWYdEDgNpZvcXi51TpWH5gxrSoMuG79gjdEKeMen3Fd5kK2pEWMuwkhYoBjuxBKCGzXqeFFRC",
  "key34": "4QYQPvPcAf9J89RGHtAEWjrWPuoapiUPS55t5NwRLqEA6wHB2pXWyf5zvfCNM9TXvJUW3XLMxwcARE1pjKwmP8AQ",
  "key35": "4K2K6WfzSbwFee7F4oGKxsJhnZws9Gbrmg7Sds2nsjyZ9nrUzgDvK3NWNeRcB4JY5o3pTgyNGBG5nVvVQ8RW6pGz",
  "key36": "2fopr485aNiZxG9Vm6Gd27xKtxow6GJS54N5ZJjukfiYoWKDfFU1zWoCcFzKGYzs4nv9F3MGRussexe2PzpbTJ5e"
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
