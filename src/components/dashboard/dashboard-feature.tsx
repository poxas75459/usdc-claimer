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
    "jtVwdnGxBZ8wqUNN83NGwPs7RbXncQHtA3wrSWSeJRu7ojCR3xAVmsHsemWrBFHLMx5V8UP9mRsqBeJGcYvwRDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3XTVacuydCG8dCEXY4j3csBCMBoEffkVps6H29sUZMe113UaVLCDhWKchn7dkzYSDV9PNSyjEABAt9NPos2Wj8",
  "key1": "4RadYdkm9XGdFECzaiLakrXYtBkDVCqvCtqvSGHav7UMcUzjzNMAjKKUZjR9LW9ABTUmvgNre3rjz32YLwTBeiof",
  "key2": "5TX7g11692Zz95DvzN5JYNYzC5X5W28PkC5NSSCzg7UYqfdeRWgFAy6hS1e8JXbDuCgUDEvSKUSSgfk5rpgEkqC3",
  "key3": "5fLYHbRitsqbNRcDEkXNJCfPPZt7TY9XaKaMrVVgN2PVoG4wQ9FibE83zm4pQLmbV7syL9t6TrKwnaobS9X9z3AH",
  "key4": "3jtb4pRimYwo9dPSw8JpwBf32uXoqEeXuF2qkn7NcL9ABLsYAm6RL5Qos66UUjpMn6in5xfHyDceTCvAL56H5qMz",
  "key5": "HZwg8QmKvmAeNLqfTrH7af7dGe7iM5J7ywKppxmySRUfGLEEiu32VXUWTL4YohUL6W4jrkzRiopsA6ekWXRj5ke",
  "key6": "6aAyuvbwgwHXvK7iPNUEf38RP18xH3Qdrd8rsuNee9Sew2Bo5XPgr6hJBqUSvRg79oKcxwAX6CxCfav7p5sQxZY",
  "key7": "437crLh63Wqk7VrQaxdJFi4G5XQr7cLY75Wy4xEtzaRC79K26eHacocPKH3LFRNM4zi1jFkJp7eXiH4hcyBiqpnw",
  "key8": "4TTPXjWqcszwSLYsDFHnDixba5eRhfcDBxPWuwMAARMT6HuLzHvacah2sF964DwzQMWGiFhX6FjDB5ajZK1XdBSv",
  "key9": "3kQrESFAgkku7NpcRQehJyaRH79yPgtVMr7jSPXtrzpH9xWpAh2TH5tZQSKdBRwHEeejjeXrDVFmXsYh4AP5eMFJ",
  "key10": "7RQsoEfdcppBb22uV6B9nbYqiJYnxpwgShEdfTGYzKDL9hXmLPSNJGPA2zKihjkDXStFDGJ39QpcsBtbf2dfaSB",
  "key11": "2ScQYT1Jvaoke6acGdkMuzJfEtReuxtaSRg2vMJ8cTiXptzaMEtBVD7PfPHgRiyp1HatYHRryXSGvCvqcQFHuNxD",
  "key12": "3HGM31jkLBrB5o2nfYwema58QGUD8A36haDee7YDJYapJbGG9PrLPVA61T57efs1MLiH6LcrYuJAz7R74hpUiyFw",
  "key13": "NBPBTibVpXMvHrbYkq6nm2v3wxPj5Z2MyUfJxw2EmyehTXxhL45pcLzHQMRmzZMtGiCTehXXHRMTem6L2Jsp63r",
  "key14": "5STQq6XyBoXem9iG2ucDqH4Q2Uroo5CL8bnebjpJjgZEuw3fcVDo6J5reAWRPW7aQgf6vDS6W2GMfDXYfAkd2xcH",
  "key15": "3aezefRKuxkipCKUmr1fYAYJ3nw4VrgRFTcyzsd9HfHNXCSJpbQ3upZSsQyWaKMsYxptzjtSWAkBM4qGyqCpELJY",
  "key16": "4GYTb78d9qptrUGUa77QCMVK1vLky1vw4ZaBnZ9niZpqmos4wHE1ewEkCKGKKKhWeAQMTTord4FMrPyj5by8xaDN",
  "key17": "5QVo1DCKige6dCVhFyfBWkTeuwrnS1GVXP6h91FUa2WGYXCk8rNLxxLdYjH2VLBW39JV5ZpNhgtYvHQTqadNMArv",
  "key18": "31KfdYywq74fWGJgKiykjXQpzcUPxpz7N8uWDCDVsYDsiW5Q5BLsruhYP2EzhjnMtbnMNaY6m1FNsfrUuJH4Lk72",
  "key19": "NVFxdW1UBabhAyJo4qZ5m2jhoxfeXGBt9czsXAv5Aze5xTQn5BcFFPUeEj4E1S6tfmprATCQrd6Th1Se6MMpZ9Q",
  "key20": "5c2y636SD9MtThTRdwhx7U9bFptxKLewEZHdsLP3rkcKXbd4ryV57Qg3iwUFxNA5SVgUAWVVX1nNmMbNCLjvLB5f",
  "key21": "3LxFTTVM3487NJM3f7MB3jG9PHWVyg6p1zXdapHMXCubWRfJWiyULJBxdGGxWhW27RK3cwMVfyvHbzdUNgBdKSjt",
  "key22": "2P7r8qZExgLmpFBwGoyKv1JHGJLuEwh8CHL1tDZzsb5dkHujdJPVPAAqPekrgp1MfHsNGHroj9D3bFfejtnVUo8Z",
  "key23": "3ueopHiwqtL1QXByXyKkbmc2vw5y9dWNz5hbTkR34Pd8cJsx8tTR6QUeQKKbkn5gnTqjH5sKyLMKkduY1j8pNPp3",
  "key24": "2Hk4ZDG1iAVXXJjXA5jqi9Gzr4F7eK6sp3Bx7qf6mdTKGHGED6ERSSzr2maxufE2YimyLAN6TBRUHz2fcYzoRA4z",
  "key25": "5xijPugqdnhs51FHJ5xSus5XknkuN1Mm1zA8cuQ9bsHbHWZog7p3WiK1WxUHfMXDym9UmZmmgPj59Y6FjGgAzGX2",
  "key26": "3TA5VMvgwUvKEwKdH9J9YwiqgHMqf3ihiKvhmGTYpv693nf4Q7HwdyUoqzMt6vz4LsQKUnzTaKrvpsnC7A6jAdvx",
  "key27": "5vUTu8iX46YKhndFTLy2As7CWrqNvdkfL5F6mwchTTj6j5j6qpdugcYZfP91VhrsMDGsFFJSVpuWBo8nVDAQffgK",
  "key28": "5GcFKa8svnS2koKEb2i7YRpWp9j9uGqj4sxvjSTWgsqmrLHUVxrDuufuZjrpeMP9qBpmqBeatBBvUJjRUY2Bdy2B",
  "key29": "XQmrK9c5Yb6EPbyix7KzpTdgFngHDuQwHQSCEugjdUzmNn73kkBSC8fR4UGvRD4M35GLdfZoNL7G4gyjx6Nt1i3",
  "key30": "3hnGNJG4w3r1KLPPzewrX9RqkayzdELcCnBzmbXHZ2GWNDSDVQ9RtKVB7reoXE119UvYES8qa12kyHDMQzVxQawx",
  "key31": "3t2tBH3h89dSs4f5yTAh6ZR7WvmLbUW5XXqL2gzewbD19wRxRK1sJu8xyK4jRvhihb524tX1H6XfHwNHQzXQ3ABX",
  "key32": "3z5ZJwwGy37o2KWdCSUkjWnUxpxCQxQz8MDE73hd3zTW5pf3uyGnQFABKHwGkEanBqxDDCWxxJwhEGxFHV6mDssm",
  "key33": "58Qv77L1hpK7yCWBbQ7AXd8VMhszsgJ2YCn4mQKfWhm2PtoDZVKG9Ns1geC6HcFaYjFzdz5AnkcykK8sV57v3766",
  "key34": "2Suga34enE1wezifsxSPz9C7QZSyoWRq6WRbTtuTrpBPJTbViE4HBzvPxucvHC8TqoL59qLcePPp8M8JcuKgoBnZ",
  "key35": "26mFU5oG4N2QEmb7KApDfmj7TFdZLLG8Auan9RmFXx7ut4UtcoKVA9Y5bUso2DM6SGggVTwu9PqHZwv4e5wQDk3X",
  "key36": "4WDFEF81GJanUew6XhfkD88vPMahn5LoBeGYRnXfsz6adt71rwETy4XaFdv9XD2qkDKhREtfbf7kQKZRDJ43bd8K"
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
