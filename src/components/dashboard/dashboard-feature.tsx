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
    "29a49TmxAoQrydc1kCKUZw5g3TccyNztXWUKee1XDg8jZzMbCgj47JQU7uYKGT641Fka8iohXYikWTFF1xax9YvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCXxc12epUM6pMQoNF5LNYxBPVuM8Ghh2Dn9s7Vz2UrT45HYNWhvVs9bgvvYcomSeo2xKi9rHCS7U7exTZXn5TU",
  "key1": "5oGXyxWyX4p2muS1UCiY3upXutSpMuMzJKTbyoQ14rJRUGgzc4bd7Um5F31pLBNNsaWuPMLStydKoQAp56nbwDZk",
  "key2": "2kriuEBVetkALq8rJ87hawpFY3cLpZ6DYpHrUEcdP2NJDH1HmqucLDi1RuhCs62E3HujBcwyRn8FQfsLFVoYfpdV",
  "key3": "3Kq13zd4BaTtHxx5JoZveBANvVDL1bA6zRUZveFfVHDc1bPMaFSrc1JAMcV9iWatVkoZKbgbNxaZiU5wEYredTGb",
  "key4": "3FhCL5ngdCXcSHgBikZMDWwRzrkNPp3iWSt8k2w1zfNVRz1EVFciybi2zv1J5MkGjviQ824UikUxjpK8bQ5FKzQr",
  "key5": "4fArk5BFjtxpbPAZ4J4QTo4btGat2wmzrVFKiPoNhC8Ug69fAsuLRPqEMBq7JDQnCFmQ1Tg14a9obVhQwKmA1y2E",
  "key6": "3LuYypkcmq5ZQDY4LU7EJaxwgPTd3QQuEKVgPy3TpLUarAhqCc1MkoMatdiPKkLrwSPG4hiB84NctPPM1UdAVenS",
  "key7": "4YYvGmpCmoGBGf3aqZ12rZnpqFEjMxDiyu3q6gE2cGU4wqFwF1aZjCMVUfNaAWM1tci1bdhsLegwUa9acNZggpYK",
  "key8": "54u9fi1ZKbfbZkZVovwZY2uZ7Hh3yonH7gphqoNu3D6VhayMbujWeEML1GEzkrziaH3XZe4QqPxZ4uvCzMVF344D",
  "key9": "3jzGSyGAQYuaDBwaoeVLaeTo5ZmpD9tXTXMW1UXcid93kGLe6kf2VVVFt7ysVPUNfwaeurvnEgMwA4gEUC2mhpKx",
  "key10": "2WDbKkpApTzsKV3aRaSFeK7sTGVZazSwn2yokXGkdPYNscxEn6CwoNP4YqSPp8TsDXXbK4deLEnYmifo6J6jrWMP",
  "key11": "3JxhZPkbbPiDuWCDc2YUMpSS3AfuCtwnrjDebmaoShaxchhb1HdB5D1BzDsonfQaYneJBE2iSjVF6eYHwEqoTemT",
  "key12": "3raq9rMV7TwQ1MLYyUtoesKQ94LrbZPR5P6gDSdK7UCszfXPiPukudAmNCeb2vQk5KG9cxNHUpuhwnZsrgRBVRCf",
  "key13": "2YyMwQXA4KwQdVw7gyvv7AiLqCnSe7bNQpdVTqjgbWAVqMzKvnng8P3fd8bmnoUYsQvAA1EePtmcjWwXC59vJNgb",
  "key14": "25xXb1Hq816o7wrise3XeXFoFxtZ4YL9LWcogtTLr94hGy65E2zwP1UAVsMwzjcM93ESwJbQQdzDaR79EiL7bZax",
  "key15": "59QKv4qmnGjhpRqGC32FziXQHVXXAv7GFRqQiF6gHWRbmCeTjX6vEguPrtEiPixKqCEqSgZRb3ghaQBsTy61p3hY",
  "key16": "3s4bVCQMPgt85HcktpgiSjf56eZvLkYRnGpofZXnH2tgX39kAcg4ychn51qKEiLJVVCsrqXVhsQpQaPMqUWpMzkE",
  "key17": "3K22nJEsCw7Kra2byYAo6pb3MGg9XvYpvwi4Fc7tYyAhv9vkvo4bo5mW79KvhEhAQEnQhyUWyEFUpEqThrJSGLgf",
  "key18": "3NgUxXMRPvi9mDEihttv9LzE75RA2NHPJrLq8uoHfMc82pL8fKCSHJSFBKWPcFGDzVUpcnsw7kD9BvJLLnSdy3Jz",
  "key19": "4cKWgb1TgqdbqR9j6tW5rp8tYYvBU8ngq1Lh8b9nLf9DxubU5un4WMc1MsFHphgNX87aAPSsb81XT3TTC39Gsspq",
  "key20": "3JvQB58tR1CPw12kRj6Rw2cTkosHQ9npjhQG7zMuBvmrxv4JAQ54HWSqnQvAEPUt2E9y7Z1ZzEyT5ozUA8UowTTq",
  "key21": "5W19piRMqsJsrGLNnZ1pBrHnDkSW2KpXrym1HKXEZ6nVStmc9iC9QaFtpQ8Unk6hjAMYVbCuXtTsV6ufAcycYN4v",
  "key22": "5KCSDxn6ffpe21skLTBMY3jNsZ1Xjz2KaBFtmF8CTd3p9pVFePa7bhuFU1LGi4Pdp2Q9j2bMSucGUSMFaMDADpoM",
  "key23": "3GNUBXdK2T17dFLMfX2W44t8LF5vwEr6ntwLNeaPgzy6kjX5ZYPBqCELqTHhbFgcFUdoXbJebjTYaCj3nRUxkipV",
  "key24": "4xt6kn2UVDNBbBAMF7XTc7RKe8rEBmoiCYu1RG1SizfpMd6ybeMBoPBHzVcz96pk4nKEft1CLgFBKDgeNKT6WgUy",
  "key25": "4AQpTPd9d1GKQWLSki3EJrXNPePELiactawJo3Udi17MwmudMGvUoJ8ehJVLhTJMScwydaC26R8p4GTbLj4UEy8o",
  "key26": "XtPCBo4m5Y9qNymuopcipSL6kLK4aU6w2yznLZfbQXnkVa5KZs3R3aWX647Y3ciMPZ9vg6396EF2puocE1u8jGF",
  "key27": "DCYHRyovApR6Gbcy32XED2mgErDQUcc2xMv9V7S2yjmc5ysGCavUE6upMt57LzibJ6EwgnrHsdXbeRiwTBQdMuL",
  "key28": "2MRk9jaYbK3zo8mbqYCe7n5TNx5nh93UY4CU7h8EaVTYdMVJZMUdDJ4fEJgANNSu6am4hxUPE6fyrc6FKmskCjP",
  "key29": "ssMsra9atU6su93BY8cTus4DRyev6MVGdWjf2nybB4d14jLB1GjP6vLv27KmnK4d6duDdp7VwNGCSiVgAfa93xL",
  "key30": "5cvtKaCYavXqfZaryu6AQmFiqj1Ruoez7JcGnR72nRo8stE66wXa1oRwrhu8taYU8wr8N1Hrp7iSnZtFDq3JNXif",
  "key31": "4D8B9dDpgBD5oSmux9UpjZ7vU8GMChXNpbYxbNLEpic8DupVVmVkyLfjo4xVgcVmCBxvgQvzxmNKv7Z2G5tFTZfb",
  "key32": "8evGCWuQ8SyTYoW3tCCui4gQJmDgb8xR2HJ4Nz1SkKtJ8irNpPfKhjueiNZYzZaoE9nixqZwSdkDeuQCnJEgsAr"
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
