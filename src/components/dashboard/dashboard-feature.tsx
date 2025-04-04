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
    "2MrPud2AYjiWZ8xBq3hoVDJN8M1dXSnJeM5yi89sub5tYVgQVkx7DZcQg3FtnvRH2hXenyMvCnAU1sybvgTzVfJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awYMG3CfRhMUnsrLQpimmxYTJaitAuPTDmkpdUKdtWX5Rs5vCnhCojmf6YftviPX1sNM6QBpChEgwxzUFNCjGsa",
  "key1": "38HTEF9YtQ9wEoGmkVYWWDEh2cfxnboz3Y7ixTssMLQGKVmgLcyKNRHEJefhu5634TaDvAsnvkoMpbjjAJFqEey8",
  "key2": "3pD3G4HSDLbCRWfXbV5rZyTVbqoPhhbxYRZxCALxac5iE1iPXsstHFpF35jwykGcDvHwVWa7oM5fsKvAse4jJNck",
  "key3": "3bEe5fu8rnLRWwQZjzSZeZfg4PEaPD1U5jfFM8YPGNAy4sYSpauSUxkiwrnM4q4m84oW11u1vkKJLGtZCr6tAdBD",
  "key4": "37HoRuwojVwkpJiAxChAFjSK3AZbrKZqaFfxZ7KDrKVcT7zH5xPiM1J2yEsqEvk5yhenknoF3ejcTcgATXGSEpYV",
  "key5": "5WYFNue8ipBuJDp3rgSivYYpdc3rByZ2nFUw5GpUHPsvMqr1ifqt23vLpmo2voHDrQPQ1zns7jU5vgjvvkReDWWp",
  "key6": "CWHMv5fwaPKndSMnfaCp1wHXsWPPpK7XZH57G3wJtXmZKJL6aSX8JSZzc5r5ehDmfS6dVMkPpqmSWhXeD8KLoaU",
  "key7": "4PBSqNWBgDyeCry1yP91qNWgBeqAF3ZA98mnwivateabNPanS4LrKTx8MmAQiYYrWkgcUhby4HifpDLfFKFjFi9Q",
  "key8": "53MSF2EAbPKZzfWEfbaayLymJQkh188xtuVYULf1B4cDcoeoReU9H42rcXGdGTyfn9gZUtA7RFAUAFSNn6NDoQy1",
  "key9": "wd6HwbaFrFQbRB4E6iyBYcdHzzVrNeA6yWqRbXY49Cxb3wTFnrAGpe493ve9uJFxQupFPDRXug4EBwMqGLpoC4P",
  "key10": "5c9kX7JFz2cDbVSLUPnEU8DH2ABanJ5BAkvjt1whDKvC5knovvr3p8GyoKYnXnpHepSGbYRpUqnNm3M67i4khaHt",
  "key11": "2RwCzwxEV1c1sJ7MiKtNVUU7hLqrs1LKGnveQKXzQzyKL2DChYUXXFrUtA3yCkuRaj9uG4YwfeiWqoYBopkLhgW7",
  "key12": "3hr8WvqmFPRhk6dE2H4oRRcrHVekqJoYhBH8nN872fUDhu3Up1WVkN6uxLgwrLiDrqvfkZzfsFWnc8zgeJL6qeF6",
  "key13": "4Sbv6XGmtWbahqbEqjhVNaRRWV8XEQ5VvoVuVnRXFpvLyvU6BY4UFD7z6qL7Lgdtgx8kBz2v7vcQWLVfh4cq1MQ4",
  "key14": "2hxD31bCqcBVQ28et3vw9Tyf9AVujnpCspaNG4BxfnnLvhX8oEBwwnv1MwyrNATdwncQ6YRFfgQL1ReH9EKLZV5W",
  "key15": "2prPMyUVSM8V7viHQD24QdADoDFo61dTXkVecyMEDgxRGPxLQyCqwnULKf4nRxw22AbZDnRJPTcejLAGbrWdamEq",
  "key16": "5ga15PGQDdgd7465NcUixxdn7HR8rwCRdcvxh5TauuC2b3ExV9jRkjWnP3iYe9UAQbi4XrSwTaA6vVxAKe3aRbZL",
  "key17": "mKoHtdzXny9yGH64Wj7Ah9bffaY1i4EEeZZfZXpYniWje1gYiac3DfgdJcMFnRiJbkEuTsbbbtKSsWNMFaC9jPU",
  "key18": "63Mx352ULkHuFr9tVR9UxEA8Xnftfv1m61rhxu2gUQ1SWU9ooYWWJLzLAuJZtBKA5DjMv5E1k6SW9xoU6Y2we11h",
  "key19": "5dDWVmsDssS577RYuY4Jx2Po56Y3VfcbVtzbx7atZTMzfXXnCq19yBczGpyGKaQvZXps8gpBoyVxUR7tWatRoKJH",
  "key20": "DjHamvT9Rgd6RfpydUVEnzT6s46QhZZFpw9e3LhUZSLqZ8T8PcTAR9Zf7e1gJWfrrXVa7FFQAuSPTfthkv71PwD",
  "key21": "B39Bjg45dX4MVKq5nL4Z41VrptL9LRczGhfGnBaZWthgn514HhE5MkqEPNArbHQ4DFY6sxHHokYxG6BmyCd7ZUX",
  "key22": "3kNoT8CyqcXzW6fbMEhS7NAsXvUKt29KJKrAJNT8MTxzz8WLGjpgcMKSe2gmyAGkVoTd8DE4C2x8Jp2xGF6yEWa9",
  "key23": "5LJHm2mChvjbPebW86sFFfR8ewkVvyJEAJXFtZqAESngPpV7cvVrh4ikwhrrtQ2d7pLMNYjM4exQG9M1rL433gFL",
  "key24": "3ZdUprWFcS8urt8tApzsdjK77fvUXGe73B6BPRA4RCi3dHHoMYV9wr98Y8KLKRR7fyiXkHezPqLZQht4inQPo6ZW",
  "key25": "2ESp5i4gMC7K7EzxNvK9YwmtTY1A3B97UwwZt7uFSdNhSfKbz1RLUNkaMdn74CPJY2FeMXXsPRtZtHEYziijAu1C",
  "key26": "5GPuGHVh61BgxH8FFcoq1NMgVLWzwUnkZ7kmjL9qA2UbF1mjf3c3HxjWUWr69Npfh9aacke62nAfEJi1SQGzPgJr",
  "key27": "5uUmaSz3NX3pVsrPzkDJgMTccxniJgRUD26QbdP8mLXdr86MmggWTTokhYzSKrQqfsXKexCAU9T7eL5X3W2HoSVv",
  "key28": "5aPRbp5NkueUfCbH3nWPt1DE6w7DvJjj3oUuhiK2QAFZJEq6UPsF76otfSvYAbi61CBcsWPbqdST9s3bKJRvubk8",
  "key29": "2TRMQBdHCGiqJggaiB4Acr9czyxJdhMGDvgHMyJLUdSPpj8mkhLy2XQm3715yGrjEcA4hJgs2NLUiNc5H3Cxsp14",
  "key30": "2Qnt9vNQQB6Fd2nka5jL74pcpw5dvhD8wXT55TRwbUxHjoG6HRFBuj8H1fNnUdBS8mipgwNTzGdTzQJsqUpoqbyk",
  "key31": "4wy7HcjQDTQ1HcADV8uerzTvWrtKwVJ6KCfyVyajCEiV2ZxMRDiH2ubJiWeAHr78zuxyCYosvc1Pd8xo7xPXZyqX",
  "key32": "4FQV3gVCgXYLhF4GoeNSxRxm3VUTULFoqfaxpiSDEbgKHpBHyFB3m8QEcvRA2SHggL9R5ZWAWeDyGh9uLdWgfW8b",
  "key33": "2ecqQPpsQPLGvs78pV1FRuiXP8N2ZUZjro6ot76eLwi4X4BSmcjYTa2FfbxzCUnWaaCUgoK9WpsDdJwYt2JM6B9c",
  "key34": "KhBunGNai9goiaoEVYUdkrHQS7HGrH2vqm9priJRCxHRrr2qzeD1j9btgHVLY1dgtwMRWXCK2gr6ujrSJksKt67",
  "key35": "3RZqzVNHueivhvByJdUHcbXmCyRgtjRghFDNkf3o9BMhBnjot6dBs5yFNq7K5JixrdfHx6BMiaGZzyTUAjdAw6Vz",
  "key36": "4tgvc868PJq5CTxfQWorqs34cNYAKbMA9SdfD2ZSW4GNA9FjnBVrJwkLBjGazAEA6m99BggPUY6SY1bWrFabDbnQ",
  "key37": "1M6QjB6A5swigQBt9YCbUAMHwEj3NYmXGGTxc5qeKcmpagihK5V6PPKA2m7QDqxinTS9u4Yq4yToVXtfwwMhzoQ",
  "key38": "27UtxpMFJWCTQTKQmE7KYB5drLCbvoEqZXyG8jVk6n87ympHP25VbNPQzg5yKJqmErfTK6Z1zx2jR4fQ5gZunBCr"
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
