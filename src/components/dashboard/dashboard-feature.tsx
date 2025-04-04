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
    "57F6XaLiJVyGtmAhKunVhm9AHr2ZLSsRxTuG36PhN7mC8zUQs2f6vKaPk1PCz7fnRSbGRLnXPc7oFEhc9i6a6YFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zP1pMUYwbp8NBMin2ms9NtX9mRvmQYArix6wtDXx8sge9e53YHYdbq6UeGnx565skm9TPKjG44yZsfe2vP29fgz",
  "key1": "665e6Zs7AZPghHZAxvdraYtZyWVKGreSnUt8LzADJimcZjp7xHgLuLUqe6gPazkxsvbwrbsYUAssZDzeEZnJg7VV",
  "key2": "2wxtNy8uVMHKJzs6M2NGBxH9bTGNBpMjp3n2EqS6nnCKTXaHJ6Az9DfRAXuPxzGBtHK7r36EsxuAsxanmb5Nzm6o",
  "key3": "5Kd4DPdf6eKUvjd5eJRvK95UTwtH6NzaJ73PnBUxUYEuFhQurZJMii7djuRbHAQJCKQw2tLCH7oyPiqjbM4CsYU5",
  "key4": "AYkeu7unoTiRCeVzfmzJzAecB8J5QZ17bV4ufhFSMDFui6b1ZHX6Wg5KiLGxckew5csJKvGCrrrRkUfjsL2yscX",
  "key5": "2gNPAKnhh9mryrRhUupC4WC2i5Fsx97A1UkTMZu42Kh7b8rowjrnSAw5PytUuG1or9YRfxihUYpTnNSDSg8efd8B",
  "key6": "58VAhrmpwswEjDaZm2pfb2hNxhJN77iDLLxjtWVmqc9khCK67Ah6FJaiD1MsJmXZrRc6wRBjt2wtb2dYoLoSpJqe",
  "key7": "4pjq9QvJ775j3XAFCYSkSGESNYBC1aN6yd2NQkfDjudpn6a9QuCBVmFu5WoSg2id49JxenKZPTT2a8zKX83aM84Z",
  "key8": "4gScMqqZorU7iZ8aweFNTUBB7B3Aw9CQoA32ELc4EXs1HXDXiMnZksMMVSyk3nZvdY6bdZ4SF3sk5Y4JtHKJkUxK",
  "key9": "4un8aKcKRGR9cBj2QxTFMizBmaw32Yz4rUek4aNSzaA9gQcV9TgS47ju7QtcfcNTdPry5DnXc3mtFffu9NWgD5La",
  "key10": "4kcQYeeBA34djFZPb1oiiuqLd5ehqyBrV5PH6D2GWRWgKozmobLyb7BXn6VL3jBXZyJB6qXXnBgd4zcXWg7WDT2U",
  "key11": "3vy7yV96AviGiqzRTqLvgRnSF6yhPxbFkYun25yEKpnRkpsPjEgHCR2CFiBMQMXFQsU9q6XmMkbZMzpVED5nfZvw",
  "key12": "2hb4hKwBb3TXRzu2Ea9mPcfFimAUYnn9MKfVUaXyVU9iPTwLkXBvJHQcNG1Lj5TW86bY8dygZU6kuRzGkgdGvHir",
  "key13": "5wLHp17iyXU2gEuezAbh3SudUWsrR3ZVAuSdGE4Yhm4tiQykFamiac9BaouwcWt1rD2pGffpJkwYykizRExCDQJQ",
  "key14": "4S8BGdiBnsLCEDbuepX1yy7u5BxqvZKRFfMQvgGm74qYrSTN6kPJ5yJR2QiFSeNyC3GUAxAte66dwJyUidV2yMa9",
  "key15": "2UtQhqrazhQMKUqDRsZhFFw4x1VbHayc3DNEG5eUkvvpmEKEmiD2bK9XdDcis6esPnx7gYdHSCTxFZNE1n7HMG8X",
  "key16": "MEprdtz495nvbopbqbAqmhn3CDoyyTKs2KvoLSYDcFWjC2aYVipVD119n39G7Fn6UzjHQSHzLPaoy6M2Zk5JCvW",
  "key17": "24aTXLCuAQMeXD1x8zySdjN4JdusVu4k43DHxspWsVDH92m8v7eEFgBJsus9vW5Gc2LFx3xbg8s54SEzzV53xpfz",
  "key18": "2zUT499tBDY218zrcXb2TcqMjRjrKEJowFsS22mTjrVHXWL8jL8HZuQWC4b6F7RVk2Uxb9JTCRWYmgV6WcsvneaB",
  "key19": "6484jkbtUEdV29qAdjsAkJnmJmMsA3HUxb4hXKZoynuQ76eEkx4Hh5xoy6wCZpEyP9f4nt2HUWN2u9Wc3Cr4zsSJ",
  "key20": "4knzHxUcbuDZnxQ7sFaMKK536D2zpqCUpNTk3SU1GL854LDYb2vAb1h8hVu6V1i6KMPJMj6tPBoJcNxa8hHAAo2y",
  "key21": "ZFgupg5xYRNMKbzz6R2wR2HxXAvznLk4GVqKuw89mt9B7saU7neTjqtWkcFf6aYEWmPqo1tw77Qm8CFr364F3i2",
  "key22": "3iL9GZJWbSFBUFnLuGfMKGjuxY6HTd3fupoVW3wBCYqqtvDtBVh7vxmuqUQSiDFPpA64uQx1TxeETnXskPZxcu5o",
  "key23": "3i6DSwQmchaZEGC9yoEubzzVSvdQU1khNJpeBBFm4trm7NTw1FS3r6iMbJ4JsfmMKG2ZTz2s13Mf4YJpntYCRQcc",
  "key24": "4RXnqqvme9ugsqrtpNCh7oeBupiXPGunWC2jP6Wr731ZmrGA8skhqLJ9aWoSRXN2VJFK37xCo6s8PNHQYzXptyZC",
  "key25": "5ggPjCD6rrz8Z2n8dYZE8quaoskG2vuo6K17zfgZS1F9C5Tm5ABfoVzdySNZdT5xN5eRhx3fmuHUBShBnF22GLrc",
  "key26": "sYMQbN7A35qgk8DgDVdQCSXrhy8TaXBewYRHqd4CwZS1q87MzzdeCKn5G915nyRkwLqCtzhiBNXCqgx6X5MWMUd",
  "key27": "nu3MmcCXqbSpnRnKnap5bQk7hA2edsMpuefuNe6EzEjsHMkK5H9BdjbYLHHVPVhckS87C5eEnFqp7e6aCvyR8W9",
  "key28": "3uGWJG6FvbiJ1hQsmRNAdaoe8HTXdy7zMRy7MvFeMngKziXpt2MXfuAmmUUh2TVeggqnAjXiJqy87cbSZ1tSnmB1",
  "key29": "49EkaNdhcfHYF82vzyBJKt7tzwXT1ZqSN7jvCuZmGfkWer8d1fHBBuByMbn2W5PyCnnF62AHJUnDvrKeeNRVE2wX",
  "key30": "8QBJxfe9VQyfR866qMWe4fFDdM2NJHdZFbMDTBarGYKepBrPBo4799WgmMieCpi5zziQpM63RsLvnxiYvpsH28x",
  "key31": "5TpCmXAPnC1V8RjKyey7tvS8fUKGhpZLqWdm2iJZ1gbKVPvDbmUcgMPBbvYt92dY9BoYfctTEuPtWcXB2qMee6uy"
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
