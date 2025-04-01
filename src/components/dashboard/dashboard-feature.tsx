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
    "23DMJYjE9jeYuNAq4Qt6368bnS8gXPNZuBzrnTxGBWJQsi4F7Zy33aoyRcFhpeBm8DccXCWKAcW1dbiwkF9Za78c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAq8o1gN6iYEhgna3TdJENvZWQT9pxHGNkDeUTBaoEkr1ijptJwsaGPNCiTU8xhd2PSEkWFh6dYqbnVi2yLBgKx",
  "key1": "tnP2Nus71jbUWRFsAAaSZezcMZaC6pRf3ntJBo58arRBUBHQK4iN1A93crh2vbvZhLrPDuCyvMS4cxkLhYNBxWq",
  "key2": "3VtrWDxgKuGvyhGaLPmSiaZqPKUsCVnHWLzMPqpSBqM8qTviVw7TshYQN6rcykGmHki9hYr7Avc6b9CCF4TkLfd2",
  "key3": "5NLAWeqFBjxWZ8dfMjYux7DwJY9HLb9hq497b9vjhAj9qxuPTx38JQXgFajLKVkQ7EpWUozmvEXCEodfXdJkqYS8",
  "key4": "5GL5Bb6nxh61CC7gaYQ73quVjDeKuQXZpjEU6yZjyca7nnfHGLDb5TL8K5GqWyH6CZsmpc64xYbVonfLypPyx8Kd",
  "key5": "5JRDNMd5ZvJdTqpQDBTizwSdi7oXe16g97s22JtEmoruypy265kYCWNzGHX7sidqeSDH6ARS8v6XeWY7rZQoJnc8",
  "key6": "AzDiV5GfmxNX8icXcxmgxK9zBrmkK4i7CmTc3PwBrAVfC2MZK5Z787PYVAgSVkJy8W18Ku2D8vunXYdyqrCBBGB",
  "key7": "3JWgAx6VNBe12a1Fhd98z9ixZDHF1LUEDtHrsW3X3oV95tKJxf6tX8tcjzsZmKZJxsj8BNkpnr1Q33mY7gKqZrpY",
  "key8": "42qTzQHkoryqz1BeoN68uNiamToaRXm9s58g5GAnBvVcUVE6cEA2G9uuhEJKvr51w6DMf7U4uMpHUpx3KgZu8PbG",
  "key9": "2wjWfZnMhfXuKZzqgetofzddoQe1qicHiuXdSz5f6VDHYfjzoz5UtWWBQzTZZzaLsoZBZ7vsdgRukA41NvdrjkSi",
  "key10": "3CUkVvRMkSYpkBthwFf1DquYXrHpNGuyD3oeb5gomsEzAKgvY4TuuD3cjXEQWZeNMS3bpvCj5M5pXBKt8xe2UCyd",
  "key11": "3UBJM9yPVkbq8e3LMc6Kv37xvWrrtEK11aQoNx6Eiye1GEvdSzeMEpDUENUXUc3MRJcrTN2R7gFXdPyFbsidQ3XB",
  "key12": "3esbFDcGHb7JkqDyD3ZPmyooK21fpUQQ14AC6NEccYT9scZoBms2emhZRBMK6hhwxXYHaiBL8qzf7fiTd37UHBJq",
  "key13": "4yhgFtLCMvcV5qvJVt7jx7RBfb8f2SWRz3qRJW4nagCo9cPpXcrhojyt3jHVufxZN9G8L45YeMHPqEi8Tvz2Afzq",
  "key14": "284WEVdKD2SV4wwetRH981WyegysFevAY9rxxDxsrGwNpRzdubVFd823p2whJYjrvzBLthGsZCC9nP6c5uH9xsYN",
  "key15": "5uGk6MUEmF5rxp6SLThFVnzHD7gs3y8yFdZJTQb4ggdtm4E7JpJv9UrvPAaAkDYiXjhRRosEoxBD7cVmBGvrHFdi",
  "key16": "4NhdbCZedm91b3iFCe5QDSLAfxZvf7Lpb4VdsgkDS9aHKPR7XQb7nVgSyQw6ZHdJGjjis3EYb9KtnEysey6Ye3PV",
  "key17": "3ukZibEtZykTz2bh4PmDEqqkkHkSFFfWvbfTzexGBjTRcsHbMm5cbSL8xmoLitpyQk9sg8sdex54Dgtc5eDfXh5j",
  "key18": "1MHcnvGGUZw4fGZbmY5BH8v64J1e1PCFggDfWUh8R9wcV3EdVNpAiypXGBWxzEUDG9yfhmyMfWgGWUbd3zGk2AB",
  "key19": "2iHSSGupu3FgjzfDHt5PKr69gVo1wUzM1XL62iUHf522RVrUt7fDp72NHG5ZKKG8ktWW7zn3Hh5zBSSdJZEm2dzQ",
  "key20": "5GjkWX9JKX5x2La4YoWVpv5ACpmczaXiwgmU9upda3ykAM8Qb38AY7eXfDCpmz1pE4npqxmyZNBGprimL6Db8ouu",
  "key21": "3gJRKdLD4nxgUSupYUGdMLJchQAK3AdiiiEnPopJyDqk9SrV1iutAVPQLWPTFLXTFeTnDcNrs8z3ZpEn9mYcDL5m",
  "key22": "3oz6cX84WimWg1oxWG3boGzVbfRzRhAEGjTVE7a6ed5eVWKac3bZy1pfHQZhgnYfxpCzNjEh28wVEwFkjnPH9reM",
  "key23": "qxVx1x1D15FjLs9CbkdrGrK2HnSHQwQaqkJjmzSC7caEeLYtsyeyoDEMEoXyNYQnHoimcWsqCryaFkfpuwwtwQC",
  "key24": "53nsvCihFc4VrBqsQjzAFfq5AbYQtw7gSh79ZmSZWJTL1oFzXT1Wzu6jA7Pwys4u6GbbXGzE3RHw3k8x7uJ4jxKN",
  "key25": "Hphe2oz57U7W3SrZg6W28BRYCSLZbZmS4vmKgShYyy6xYMyx1vRzCErPd11u7APynZ3TSg6nmFNxtviu7Hhno3k",
  "key26": "4FNuYdBaLfLGvyTUc6dyqJEKwCesKTPUX9BZ4VxhLF185bgSEvyJc8gzELcrUcUxjtw1ghjgjjX3gdb5yCv7dNe3",
  "key27": "2owFvnmLciC9j6A23DMBrsCr5VK15JWj6xejxAQNDnxUHoL93SzSaWkgQziK3DvMUgPfxDxqedsPKq1TgU2zFVdM",
  "key28": "4DtfR6LxWEHsh6VdrivggSWXSWChNh8thHrzCrkqJon7G4ZR6XKcrXR3CjP6MVBc9ifGojHwp8zJMemnjTCxfC9R",
  "key29": "32bVwnxM3EjZY1nmzEAVWsjZLtnFFQBGYpBXUCEinJX6mzUwwAUhHMkeB1PPqRVnNZL86R5QuGgJqkxVxX46Eb7a",
  "key30": "PJiUSNV3sGypc77hk7F21Gubap4cSk3qFjnvuJtQ6jdKBjpBwZK7opLXR2JMvYsxtGF2iJiPs5iF8cMGNwvgmgF",
  "key31": "25YThTnZ9xgsmaWPzXhoyLzBxG1Baxix2xTK5LeX6EdyPqhayced6EPTomo67kFZLLtxJbu4Yb3Y8if7HnmejEd2",
  "key32": "5JbL2iwsTb4LxtcusVqL637Xzxt6ndvqwzP5FWAhwRHQgqoAfub1oWTLQNub8hXjcGvhWMPdcwD8BFQd9fJNKDxU",
  "key33": "5VnZVhPd3CbHJ7EL897NwCy7kDGiXdmNvgQXkJsMsoGonUEXRZfDkTmJrr8DXzexrYSGYweQw1SNqFYRPKrV8uKx",
  "key34": "4mzJtuEzxrPWbJNztoDs6MPT3AN4vdbHVn5wX2x1B7eFcyHyLr5hWcrhH2xQFXTYipConqrf2r8Qw4x5LAjV7ocx",
  "key35": "2MQaDGL6rpbfXgJKL6AJpc9Tgp4nqcrPtKK9rNAAXrt68nurifbiugVPhNXEgZtscfLypirRHWoJTRxnrMcY9wre"
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
