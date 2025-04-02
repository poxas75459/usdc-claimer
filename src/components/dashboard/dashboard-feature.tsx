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
    "2mKg7oUesYqMCsQzzFN9WaXGuZTPDtbzxrdij3PfiVFRmotEZFNoezCmUJaxfXduLyo2thWbf9bQoZaAYDsDqHBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEMV9F1YHMfRPgoMsY67V8gDMFVfZCE94cy9fQgz9Q7TSmfan8VD6LMFPA27BjcmXfn8fPiU3Fg8V3T46scfvdD",
  "key1": "eUmFjycniPjwWPd3rJBq89ZPJoJArMMFrdK6AkKFkr22HMEfYyA8qnk8WvKpdcVh5sVx5FMi4UwDs3LwUPAr36G",
  "key2": "4L1UFQF8okceVrCSs9Dsqy1iFaCHaAVi68FEHNMyjikTRHzwAHM7zok12GK8w99cfgwqrG6zQquA1bRcGLRo2zSJ",
  "key3": "2XTaNmCPUh3jKusQFPyqN1Z2K699Mk8aPRZqVPjhhyFQbHhimDFKMb9oghgAyuDpz3TUu2n4F1UNk2dksmtv6DVQ",
  "key4": "Ps7qaKeP5SRz8P51xeGVHE7fdoNX8EJG8kpjUJUjgC5KrPAtce6VndSDwr7pHi6veMMnaSfNUJpNE31UFpP5P7B",
  "key5": "2dafnavAB8gyR1W9Jk5iLkdX1qaVJcJhXycNPVS1GrVfnwPrtk8fWLWWkEwozjY7NaDyLMYCkLDZqtDagsckcLEY",
  "key6": "3kznvLpdmb3T8muBWmMrm5W5TRP1ZP5zRUd1L7KJdgxaua1nwAYdHGxexmtdYgf7kyeFuArSJ2MUtyR9u8pFY4DT",
  "key7": "5ngAAEQxrom43XuwYPP7MCU7E9Eairyhj1WJAeeLVYxxQhYYmXkiQZJZEr8kimZhF4jxq8uhvDkZhzM61Uw9RX8t",
  "key8": "sJ3fY4nVrzYK9WPPYwhnY5LwrKWH1TBG8msLzr22hfcacEJacwgyBHEoLRNoGJwhNAsiWPgHhghFSqa2gZBihtq",
  "key9": "5RuSq36VAXTjhuRDTGDK8Gfu8CJ6FcMgr8VYqZkJaCfnoGZ3f7AfSdCPVxvLZRnBJJu3PHTMeN9q2d9J5cVAiXd3",
  "key10": "oVutTAGdhm8ijCfvcAfGzERMk32yws5hFz3aDrG9fzRU7nKqcYiiX5pCYHmaKP8C26a9Ydv1BNmmiuCbaFZPR8k",
  "key11": "5PcmRX6Awh8TTYJU4q1TYoYoK39ZHEJcN7C9jrfD4fx8yoj5agZu6P7VztBQWE7LE3TxDLUNqCFFGwo89vLsUeCQ",
  "key12": "dd9KSYKUUwBKMvuftSFWHFZUpHcJ94hNMf4RpWMEG1eb5QEwuiXe1UW1PPHpx1xFZ5u9VFP9EpLaB3t2U4VjQrz",
  "key13": "2EeBjExBDvJu63aQ2H5hAMZX4VDnv5gmL7bVdxDeZP9S9TgRMd3oiA2bTf1PJ5DqNDGJDm5LTQCAQL377dz9msjs",
  "key14": "5ypqPaJfyFrSNdF5BsKYHBi9u574TJ9TsGRUutvk9rz4LTKTcGbpVwoanLj7wjwqC86VH91ZWZAwiGnhkCpy1a8R",
  "key15": "2S7UdayiLgGexo2oWW5iDMoYy25qo6sLZnQM7Eu1SqaqGj4anUu5JRkVhiLNarAViGE4KkG2hiSQwvQKwFN8CaiJ",
  "key16": "29GHDvViBRUCPxtbxYAPbUdyQKhwfjQbZazXNVhfSh31PCJwnkZUxkj7NxGPQpuLh7afcUCT7nwwLSh8mnPTJnaW",
  "key17": "2iua4egD27xmsMwjtV8MGFtcsVc4AyUNsNnZGCMS6d1yUUcCN2mcDtCGDeUJtDvUAuEtHyhwi82rkVy95wcA3ex3",
  "key18": "2u8o9QhLYWXiKTFiTm4mXtJwUbgbjSdewJ1B1tazBYkKgAs1yUhBMRqtaTEw7cFbR3yDUbiXCMKCkvjJdBAHh7Kv",
  "key19": "2jjxeuuxap8TgxYiFmWGCZjjtT12DsT3h8ghjERs7Rsj9hzqR7Uv6RbzAJhrrnYkygMehVEZrQZ93L5rnABAbabL",
  "key20": "4eDqP5ZPxWrJ2LKKNwivbSTrBHxSo2BjBHuLsReLpM9aUxaW1d6rf7uHdxBJQ4wzpomrbCCPApBdF3eSPXfwkAnn",
  "key21": "2Y4suD5AfPjgFf3bi4E1LywEqoFTh3WdHmSnbznVSph99aFZTZdJewYaDsSp9EYacXon4zVZoUnkfQg4RFcg398q",
  "key22": "2MvpnnackX1qVrxQKHyJ29UyinafiQZVSdggHoEyKpxSRt65ErrdLswH4AcUYUhBxvzCgwD6Wgr7GSuRjPnXCn3u",
  "key23": "4WvbFfsSjQUX9hzsEo53yjJY1Jau4zu1AU2cozsaTunqJJ99KFRLUT74ZuWRizWre8k48m4tH67UdPbCdwWMdTZz",
  "key24": "4MT6y1NXRNKE8p6w9cehbCM8MwgUjbdbmZC8nyhgPkaX62EZ5B5RmwgoNSgGk94KjK5KpuuGCdZQ8YS8XTPtVBvg",
  "key25": "4rxU2Tpe5wA6rRf1KJXCBdXtRmdnfFur8JohKkXGEkJASf1GrxeY6JRpGV28pYDcm2BwXutZiGCTyJtmj9Fmpdwb",
  "key26": "4SmXmwES8RtdxQbLH4TMyeqNXbYkQDuzcT62fd3EP5eJajXt7KvmVm3iG5x95apKNYX4Tc5r7Asg4P3qppt1iUQU",
  "key27": "85u8GuxzdvutbZfwBX6RSU7txq4BZ6YYAZv8H2o8X93EJoNKDQwu2grBegYoguqHkb5SZuUvZNtH2DeLqryEmCB",
  "key28": "2kH8toAs41sqAfJQJVGxbCG21yjwiKwBH1QLhJiu2jnBERG38bpcaK5DfCz8geAYEyneLMmvoJcNgPZ3Ged7ybmz",
  "key29": "5qm52GC5i3SuxmQyynFrXHo5ksHnm2is8gprh7NBMpjT1sEKj6nSmCTksE9r9JpPS8z2pxqu6PpJXFnKbxo53xcv",
  "key30": "dD2SeXcMJ5TQXefC75hWG61DLn9z2KTRvk4H33AXEKMhC4gXSBHZSJPRReyWiRGT8toFojEaPMbKoYkprNXcP1B",
  "key31": "3Qir3PzESvS5ERw1EGwbMrMpJaSoiumFxFNzssRxVMqdvjg7zVfVp8dTwAiRTAqMaKRYRhGUKFePouLLHwugBHPR",
  "key32": "4BDwtMjo54VLCnoJ9sXqcRDeeLSWh5Xzb3dch4SByBrYR1uBKziNakeKQPH8sqJqCfyBaohu48JvuPhfFWqx5yVb",
  "key33": "ugnjmqDzs8VUQ6vCgLjt4NnoQSXTWeCyBVqZSgxesHr447n1LPcBczijiqH8ziAViXeYtBUJJwdGX8WmiN7R26Z",
  "key34": "2CLF39iaMnUNu8xWMQASkeNPznQZMhzQFxhZmVRBABkG9MmZMytj4bCDigYxA5M5FYxzvAUC1KZHYMEfLoLzt9JT",
  "key35": "4ivYD33KfYzSf14nHzLHeAG1RHsXC2E5pTU5eD3rdSK3F68E6mpJM1JjiUbtSgxS2kew8sqSpzujAqvKEqtbkpMi",
  "key36": "4dViaMtgo1yRh89ibFfqSWG6sdB49Rg5LZKc6bj4kDhPPYxavFrUKu6DGoRDrMZjVdeKcV6PgHy6Ans5kbzm9TyG",
  "key37": "38FaZgsN598E5CdyZUpjLZv1cLeg36LuTu3aH3msXvM7PwEU9zwzcLh2j9s8FFYRDrHxMydacdoaBTRT9TYQoFYe",
  "key38": "4VtPsenFykNUHfYPJWqsDo7wBxEXGWPouFGRZvayemmjXLxZiBpDkprmnC9xMmZTrhgqfSGmR9pYQ8Zph3XS4vHW",
  "key39": "4Eu9Rro5uQcMVGSkBXeF2igThBMqHZvu1ZPonKoRoZcmMgBW8LLafqPSSEDqeG4mxegUPrLnPQwmict7NCiJ1zaY",
  "key40": "2Zsy6f8w4ixG7Juxr3m1HHZAtmdhNT1xuf2x6VnQRe5WQeKiityPmY6w8XAzK4qHhvMMHp9ioe11xjBhekXFWiHy",
  "key41": "4DaiAdCFKdCMmLEvrghEwvncwZoBTXd8GFJ1DEkmAFPAU8KfgT9N9WTq48swyiEXcTzRMfgd1QbTRRyYGFMj95sx",
  "key42": "QPkYG44Kw1D6n6G1m69bK8vVNQ3er8wyw3THA1mFWJikJHws7n36hThAmeZLUGhb66bEhNJoZdyvqA2K5toX3ux"
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
