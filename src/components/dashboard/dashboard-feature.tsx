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
    "C4mQ2aSzPXdbRst889GFw8mvpM1mh5iStYxKM5S4ziV4nLXHhKcf1VNHhSVhJTXqWpPAuuyU4usdwUwo33gQYYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGmhsSGQEicAGqnwdiP8fLYzxcMe4YhEdT4joLEWrUCsaB91coFNkoSx13qWbRHrSuaeuow7rKdP4dbE31dPvQ2",
  "key1": "2rMaRufDc8tS1NCFpQyir2imcu9n9pPBB8SQf9han4LtVKwaLMpP82oQchoXEVqtoSGipktaUgeBhjEKocQ5LGZW",
  "key2": "4fBRGdnRNzwyVWNcLCtteyhRa5YEvZLavS7geoETW7GNie8u6svmuVZLb2cDVvsxm1ENfqhd4C8ucwwnqywSJe91",
  "key3": "59WQNUcWsW4JLuqi6JVhxEWeb2kTktcPcAJzZWHT315EkX4ihFPttPfDpVejEjtSWUutNu4pAYERsc6Q1QcBy2sQ",
  "key4": "24Z8YNtMVaLRULn5PWRBn8gkUbn9SifL2WaK1Lzhu8PU5jsGD9nXuRAELD8dAvg5ZjkgHcgYwgFjDtyDBGadHoKX",
  "key5": "pmzyyuRfWWc8Uz2uBx2xtEVJPPBhqVb4R77U5ncNuzNzDKLPZC92PMGq1pF2Be7THLoki9o2gP1jejCQmLWRvXR",
  "key6": "4nMf5owS1fNbp1iGQmfLsE3ZGrE5Bk3kmLsmVah7VPTt1ZGZQeBvBxkTmD1cDkQSmFQRcHdgHU3FoSkmWNaQcpKK",
  "key7": "39DLupN6hEFs9SVNDVsr4d1tBtut6dep5MNoyENWVHC7H456sdqf16dhHQkpeV7BQiNd2vrYXasK9VSgDkKZcNaa",
  "key8": "TchRWR8RzUcwqf5bjHFVJGKZWma8sJgLaVjGZoh7Ve5Q7ifo7ABEVkxuV1WoVPFB3Zr4FYQw4nkzWQaJWCFPDkE",
  "key9": "2qwgAdcB1zqVRZsLKgwDrhxHvtMgDoNZENW6jWftTgPCWzc8sNxwigouXVMzmsaK41eTV7oEUEn39px3QqRrxQVd",
  "key10": "4KvMsafxvzxa4CuKZYMhMwQJACK7CnGBPqUUBdoFJBtrmARf9Lwa6dyhKAJ4o2NWuvEW2g72TYmRE7rZv2VcSnmb",
  "key11": "4ViyqvS4Ge7DFv1JigwxujGDqvEruJsb28WYhofXRnfUYMqG9Pvuh4WnHosxQkLDGa11uRGwKazc5VsipoDoYwoL",
  "key12": "48BzmejYnqbEkH5PKziJEdKCV3wi2wWxpQmecGcuu7Qy1LsB7nwqT5KuuCeLXK27yvWk9DHz1y1fomqZMrw4yqiT",
  "key13": "5bLeWnchsc55zbLwkLuWLFM1EjyEMrMgoyyGEJeooqsXjkzoCySY1g3oUyNkGhHDsr1ctrqe2AhAc7q4bnAUUhR5",
  "key14": "2XjE7HQnycHhuAsXYqqtcthdFeBEUWUN3X4v5axUm72Vs5PZABwMpE6sSWFcdHBAdeCa4Q8crnJqBqSW8vsxuBTe",
  "key15": "2YbSB5Uw3biAHhV4eC6opCnQLsttPorNSQXDwZZYa8FRyjSAhwJmjXWQpvH8UNiNkH2Nn4xGBKTRStdLcQ9rKJ7j",
  "key16": "5RMbEhNkq53etdGrWi1aTsAu1UkbfAcZUt4mT6dMqBcjYuV9yyo4aAysuDXFjQjtrCoqf9W7ZQafDug9YuiVRLj1",
  "key17": "ZwMjBEgBiRaERLEUextJHuneKaAEwrmTxPaKL8hb3eYVuxjMLGCz1GHuJCqsXKDjFSuncsam3V1U2vQvuYDTU18",
  "key18": "3Bpv97LVUSTeCdAprqVc4qeHJCJP1hEKiSFrtjbqDNvsVyyZCCt4r1oUUy1K83QUAwrhTFQKcHNWnSeeSgucthE5",
  "key19": "g1xe3dCZWsfjinVMPEa3T9vEdZYtqkAWbho6vyfv9Aufs1fQo1qDxLvYTUPaMi44Uj8N5a2cVNTeBrUexKe22Uj",
  "key20": "g5RK3XBnJ5oVAg8nUvWb3ZcNW7mQ8PkVsAue3UyJ3BWf6U6VscqfgLVgm76qSwP8EzLW9rdYAyVRqXhG972S5CP",
  "key21": "4A94BZFLnUac7hdSu6ipEzroUV8th2a9Tw8zkPzw7Uz1vqBthGmFDryLZChLFkQARtw87HogkRT4Ntmj7jANZ8iA",
  "key22": "2TwkmHwqFTK6WPLGUJN8Zf4df5QG1YhAkQaPmohomV9r6sYPoUDAsqnJ2Xr9RGj1o46ypyi1FCjvnjVHMk9tzG6g",
  "key23": "TB3KzDHJ59bBMmXsGFrwU7jy81vABBV68fMQiu39DFf2MtsrFKHJz9mjUHiyb4F89b4P7MkxXanazTt5NP5nGc8",
  "key24": "rW21SsYznoJTuQ3SpTYmfdmZyRUtyRW9hmYXJfKuRn3W4JcZ3HygzLjoLbHh1iKyeUAhfn3np5LtgMVGVer7kB8",
  "key25": "2JtUMdc2FqAuNvReqexvpCLTVJjgdxXFH7JeBVsaLCvmjjtbGPTqcfNuftBJi7CfRrWcG2rrsBJKkWeT8xxvtNtw",
  "key26": "oR8CdfwaTmdZN867dSKYKy7GMyHjo3fvUhTLwArCyQHmAjKydNGebgadwYP12yQPvcTdarqDM2z6LkmnqeF94by",
  "key27": "3TsfQRM2bGkkQcTafc9KjEuZgi1PCZPerPDR2uzGQpXdUArnGW1x1s1JWEtE9nYRXPE3LvSzxDxT4W8pXy4fjqg4",
  "key28": "3wLzrzYgucBKrRPgaj93PEJdxRHtcPj6C5tEh1PcsvrE8JsaC1VPeW42VQUV59ArqW73m6hmRfNjiwEhre5Ci7wa",
  "key29": "4Ed3hwnSQd77JR5ZNkReBoAtvThHjPzqGXKzquuEmQ8q3MoLfwLMmDtP5Q32zRZbELMFsiR4VVNaYH9bTJMDxRoq",
  "key30": "5M3pxyA6MYgEyYzFk6aiDzCbzR5hdCjrMm8x1qmzH89gxiyMddpxw9Qpr3tmnPt6cebAf1sbbA4QUy6VV8NTaUGB",
  "key31": "3mZe99m7fTXo8DuPv5DqBVAHmQ2Q78BN16UZJKfnaqANRDqcLVa9woxZSo7qLYxRTXJkdectrNXyBBnXpibDPh6R",
  "key32": "qrQtX7T6patLhts4Bh7XZUYdSLNDJEaaQK9aozKyJ3GwM1ZeS5wkMqsQtYrbgactReefNY25LrvGVZPAWcdpFp6",
  "key33": "46rpVd5424g45GkWrvaEsbH7cqa9r3FNnLbvJhniMfXSw4m3X1RvzpdJVPQ6ibxzJN4GW3JxEE8oAUbqv9edKgmZ",
  "key34": "4BQbmHzhFCgr9zb4zo2nAW17Upfs7inzkJtnMCjWEr9ZCsRaVXp66Txg78Nfzph1T5KFRM31nPVLTVinWBMuGN1f"
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
