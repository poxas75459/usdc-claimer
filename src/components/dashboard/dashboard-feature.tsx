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
    "5znJDPtBRgEoWeY5MZbj6oSKPD6EuHb12rYjez2UTKVF2QQp7rYpVGme675SSVXWkyu2WLYBJ29EcDbGZfAX99Av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQaywR921fDopfejYgcWpT7GbZZyjepZxQagAjtADKwYzEF9g5Sr9Tj8AesK4mYXKsdEvu4TmHbHceJ9nqq83Su",
  "key1": "3yHR8iS2Ew12LXUBeWVbU4gZap91inG1JvWTg5eHWG1MXGtmUoizHfDAg5mT5DCsEZYfX9ZvZLUVJCKiGKBCNTHT",
  "key2": "4Yvb5P82mge4ZBtvhnCr6vGeUoST9CuAz2m825Y4CFVCJ145be2s37cig64Qc18ucbZjfLNbWz5FEKHnJrvWHmLq",
  "key3": "3oNrPeHCXimEhCM7VyruPz7fw5pSGj98y8xyhAVz95rZzH7v6QqJMUaK4iWz8QvNCQacfKABE5suGU9XerH9D2NA",
  "key4": "3y9XuqGzYJmDk2TvuagEFrWyZVnc43a19UjPcUVZcXD9gLz3WZ8aEMfmtffpxkH9dkCgZY2EBgC4JV9Cte43oi9g",
  "key5": "42GGBiwdAo2D4uVwG5fxcTrc2Y7mPph4QpeVtmkE2xuzeuedi2GDBjS47mtVfFD3F67WGCYYv7hmwzu8WcYrBWms",
  "key6": "5VSTfi1zKoG6oSeJFKsyEoYs7rMBeNSKTPmPnYffFqgJW4A1Kq3mq6i81Hx8fCCY1pgipi9En5gHvUfMiduU5Ftp",
  "key7": "2xE32RfjikVnmM78THe7SQeciEENGJth5G5fJrt1LBuQiDp7U1RVMQDYs4Ldwg225jAZ3myiLtRT4tJgecRNcNv1",
  "key8": "5vXEGhEiTKiiEacF2W45SHoWumABkyjofQScGizcmnkvxjbVKggcCfAwqW9Sab4qN1zbeRq9xALZmVFdkPM5yMbe",
  "key9": "3gejVzNrQVyUPtKoid2vCMJzwbc6jsbHe17ira3jkSzdoLoio5eH1WqajYDwWf5jfoRpNix5BhAi8zMZWjZLULiQ",
  "key10": "xuUzca2nhH2ewdS3jNSFFUYb5Cdtf7Gx3CXd6kFoq574Eepo5aQfiLVyWkVPE5RFcE1se3ZMBdDpz7DGYjvJkRa",
  "key11": "4mqb7by7Qw72QYdzU4swm8V8Jvdrytu3jAL5e6avAcmRY6DWU7V3QCGwKEwAoSzwyQsfjYgVuWqw236NitZ88zNe",
  "key12": "2vgydSEdUVZ2ULX4BLZvAL7uSf7eNDxKH6dnuDAENowGjFhbBqAmmunUo92VWvENLZCCqx2ztz9NEgVV4jAappwg",
  "key13": "613MUjt88LseeKSJVdndGUvQKpMz5nUyFooii4n4NvZGvxQDgJJUYu16MyvJrpdoFiRbZgz8qZ8PNxReS6c4kRdY",
  "key14": "zg9mrJ3nfmQw2PwnMSYvqNKUHDNJzSgnraiuPoBkSuBgvscNKkLXdUV5qhqaRjQhnfFk6MSti4ghd3sz3dXXqmV",
  "key15": "2LMJzGhkGHpiZEU93ALwjkRTdRitg5iyXsKU6SMcCniuHZ54TjDf8U3CsyxhbPqAhzX5tXiumwz2oGMZnvUGQeJQ",
  "key16": "3iastPyp2MYAgbu48M6QTt6mK77WZHEUXKJLC3bZBXWXhin7R4e17TegGx1YxgBVTc2fkcpTGDrzKfqGBx1Juu23",
  "key17": "3vGhHwEU4swRTenpHUAhsr9fz2nK7mduGpqLJx7wwqzYGGmC1FTT9Aob8CpJack8be5gHSPhFPgjoPSuxakuks6h",
  "key18": "3owcXKoMet5qEtexF76aMPP499nuUVdronnNMPhhNnjWfFP5tdzgoJNewnHmp9KkeuMhAi5xdioxsoZbcY4WhC21",
  "key19": "3Kmnb9KXjFZVmkYmwtyYvX4a2JNouBCNzkCcXdf8vNbWYkufgvBDH6b1ztcSxygBaofq8wY65YNwGZmVopiu79PQ",
  "key20": "4h9NXVZBRFd6rJtrGTNgcys2UkxFH9KV7eyi1c41HLw8kJ2thSKi9zY6vxNGFWWZcFRhLpWjYnDMHxRMJvhrKMU7",
  "key21": "4kHbHaX6KFBrc19TwQnwtN8TVPVNbUTS8Zm1ahbwi7SkfrRP2mk4n7yvB1AbSc1AERdVT9RTkUoEX96k3CWg1BRp",
  "key22": "5Bw2NEimeoNKAVQ7bSb2rHY1MSDTGp5ffJ3iNpRiwnFgjLw2j4gnnGxfhGaxEp6V21NnLizwusNy7zq5Yg9HkSfi",
  "key23": "34EJinydoomrkm63RfTrCZJuk8oqFZW9GU2cr3atCWwLqugpU3PkXrqXFdps31KC1CP6PxDT1sXPEJ35wqAAmYQb",
  "key24": "5WTfcZSZgtcC96pgtuJMnXRXxRKHamSu5GEpktxgcGjBNEuvRjkxtgRHNyTcZXtGCjQ7vN6nTdhUEXHF4HFtiXFY",
  "key25": "66n9EmpMmpMx5YPZ7kZZjZLJzAHevAV4whjFbDtowZu2zY5wEoCPbMGSEvVTN4N7BfRL9vDQebgh2wSXjS2eg25B",
  "key26": "61wacQXzgjQhRXbxNkNde2bkgjCDqpvUeVHkscYVUic8m5CNG9KVoo4Auq15b7J4ppddc3bifgPwJmnL21JPoJK4",
  "key27": "2AR3jhDr5sGABQhGQ27mQ3dApu9Bw89S74r55DQJXPzZFYyoSgRtjzierbWrqrAMk2Ry8dhk7uzVpeUvQLqfS6qn",
  "key28": "2YG9XtmdEb3a8tHRgrg7CheAEiR8gQryLTocJykoRxM6A5Y74YU7qtvEX7TnQzbzYjrRVdWmrrUkNzhRc7kLKGfF",
  "key29": "2EFdPzXHYpVazpfthXTNMaX8pkUvC8W5ptVYbGN5SVdt7JswAeR2x6VNeQCpbUeKqHTzHWuWyDLexRgPo3iShmP9",
  "key30": "3Ymqq2TyPL8HzCBkcAA5zbjdc7hkMzzEByiiNCokCZfT58wVL32UzWJ3hYJmx2tpee5Ke2w8zJtjE5qSpXQMVt24",
  "key31": "7AMDSKc8VHEELrX8VLKHrivLM6UHSyTqsjAe4kLUGeQ4GyXcH2AgreRat66q3dw8P3WhMT9XWAPKDbYRXGoW2zd",
  "key32": "3RwFTTVNrkGKjMcRJTBRVREhpZYvQoR8dBAXwhbK1eVg15GTPZLaB3ZRy3UXP98B4JKKYqy4SC5hrrrdLwaD9D2m",
  "key33": "GK9vSssNeVodgFPGQxZiV3Ce1Rj11PtsiNDxrC2Vefcuf8DZ66Q18DUfUKtBDdMBdcwyf378F5cfupRgsccE7Ht",
  "key34": "2gf3ZDcyTYUrTkhtpdTfVSQfVUguboT62SnbxuguDH9o2Bq11vzpLNfHbNxnK1egEEak6P2fu1Bg1nG8m2yqED9v",
  "key35": "4zhewPY8J8Q4cKH3Jamowf7GeyFr4VE5bNXXmPSzLxxosrFw9N18oXJrH85HGKzCENooUAdgCbGtQcjjYCecMSae",
  "key36": "ygauBF1GaykzXK6wZ3VAjNp3NzJXDGmDXxtrf4B452aDui8K5c1BVhBobJuQZLjrC2RHTeQT5WvXaiJ43GY2pqj",
  "key37": "LxVPh54S5SMAaDz9NYa6EmP5qrATtkkdEgLW1XFyEnGGh3LE7J2vx6jhmULjLpba7urJx3TvnPvsVdnV1dYd5z9",
  "key38": "4puiSPNNZPHF6ubepaGRKuxYH5TASUzV1Ayyq7yoVW3g7N1BkKc3JytKwUz6YKRzQP75K2X1rceqmzUKiEubs3y8"
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
