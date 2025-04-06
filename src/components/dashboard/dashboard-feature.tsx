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
    "QFS7vWF6ytXT3AZUjNW7mCk7RHBj7qr5LGubVm27Y4B6sgXMmoixhUNnFgZ72zAikLQdRn2SNswK6ir1CxtsF8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tv5iL5sYvHT7Raqir2NDaaiubVGmEfP7byXaNT9vyG3KjxVQ5vSY2WCDy9kqdgDT1zuJZmZA66WpJMuTsnyeMbP",
  "key1": "4gyHXzBvAnUjKLaUgEXxvF7D3i7WaCZ2SXVKKc88FMf5a1Y2UbheBBs1urkAVTXFsDzBgLv949asUEgdxMR8Pmey",
  "key2": "5Xnq37Tj3EyQwXZxfi7ftrRRU9v3uxvtEhyZxurhajb6Dhyge58UvxMaWQt8TcEsCNYb7YdyyU3wLUZZK9de3ToU",
  "key3": "5Eb3LGWQ6QqD2WoRkkmK3GsMdVFLBHk3QWtKw7p9X1V9oUo3PCxbzhCPvZbvLrrvSFdwiufxtSf1sKGPKMWcTiNx",
  "key4": "21dWkpsSBXtRkeZP42eDpoDrVPyEaLNFgWCa3odFLe1oqmsiZKaE6CwwQN9DV7pnJNmHk4KADQsFJh7tuHqDDLKj",
  "key5": "58w7aiduh5MN5FidJyFLD3pGR6WEi9A6p8V9U1ABYQLHJxfsjVvPHPMzVk6YBeZFsDZmxzbK88H6JWKMnxuSaAsN",
  "key6": "2rBsCckg5JK3vtb34XtYobkyUmAeb6RVLZq8cVECFfwY2BEUaEMwbvA3dq9bwhvGLXVFTwTAKz6hMQkndiw1jbFV",
  "key7": "4XuHw3BRKRKQH65r9JECZKQcj7i3du7t1hZQSFqj3oZoxPd3RTJ9no1E8BcSbHt3bFXEzHXpKzsa5W8pG3EgwYFs",
  "key8": "45PeYkgfDkp7gD7ruePzBJLBxVyJR6Ur8aVHKFLTTWe1va8aja7zSMFRqJJPzrpWxHEpqXxWdm48G6KcPoD3FkmG",
  "key9": "GWg1cv9mFiU6m6g4Lz5HY9sYstaidrfMwqzib3pDVAvyNgWNoyCpv6jE4FBe1owzT2ga9Axe6JpS5V2vzYQRuSE",
  "key10": "44tUz25x19PwYiHZiCuMb2AbnWSG6BWakmASDWjuvKgugotk7BSvumYEnwcnGTxMqPL1gJtYJH3V7djFYsVpQw7Y",
  "key11": "3xU32Sc8Eivty3s1HsPjZy8XcevAbLSSDym2rPDAu5SEdFGvtTQZGz21CKa9WctiRHxjgQz8AJzdPSnT8GbzC4Zh",
  "key12": "3PtYPDZEWgK3ZJYgQ6AvGRMcnvNbjLhwEFWn7XTPq1LpgF391PYrPzMVor6GBnGYE2UZLjjuqu8M1uMDMMttWWvg",
  "key13": "3pVL25qzw6CDcND1FvLiuCi2KVsPEvJCbwdqyS3mSe1xthNk2tGPk3V4DdmZr4bmigCJVXXfnEqEb22HxGDitr9N",
  "key14": "569XFJ6ta3wFHxi7rJ91DoC7oHkv3Xm4S6EBLGea9bZ6xGmj7Y9uuAW1sMdrDpbiLTAn6EN8WTcyifSfB76maBFY",
  "key15": "27i9z4aUSMSXBwzVCZjk1kJ37fzS6Z3BYJkM6ti9k32R8VFkidEDW6Qhnct9Qxi6pmMnkSReQZfChuTH8imSPkLe",
  "key16": "2JhE8m9buVNmcFZEVz5fSxCBcUghNrJEEhmxrcfeSCkmpmj4ciPGDNUCgQAhJqRN346Woas47nD4s1GHeUXwSn54",
  "key17": "5Cx5rbRydiHdUx2j3vFw1XHB6QpB8eqsq4S8UR4gYgHVWUE3acRJC8CYe19sx8xWwEcWwTeRov6RJ7XdptgvN1Q7",
  "key18": "XHqYSY6NmppATVAKMP8hEHHbbTpZ7yXLMW1QP1kZtjzGqWisX5Fr6zLXB11n4DWj3b5cnsVEVoegU4NUZsv3W1v",
  "key19": "4XD8aMeunFKsTAd29S2yHwUgsKfHJhzSRyBfFzUNX9iUVFmBG1CKFdr44jySd8Trxxb2uLTWPC6b4KpW58QsiRsR",
  "key20": "3eCK8AwmnaMND8VmB7BJyCj4A7zyHjdgxK4n5QAF2oQLVXVJ6UXR7AngBtRHQdRg8c47dntxWMddt8AnNcmkRMBT",
  "key21": "3evXduC9dKJg1zA8WuyyaZo9fpfGG7otjrunRimxk5JVJ8jHNwxyrL84MGTuwGw4bgAqC9b7UQBR3EZFscDL9nz2",
  "key22": "2fwpe8XoZcE9rN9xUNvBpneNNaFiFh8wsAMiUfaiKGzzLH9Dv5SZbpdcLyjqkHkVBX6QMTGwKXzNjFV9qNsBASv3",
  "key23": "yc9L8ZcgcohcX5pwV6VzzsB5FMeX1pG5yk2C37azzDUWs6HURAbXF61SrmyZSi9ZdhC57SApUfczSdVYdA18peE",
  "key24": "3Q7Qd14e5c13WUACfqe96MxoNFeyZaM9W7HgTLTj5NCmseVEabfiVyaBiodS6Bamauo1rRQUmYaxzvTJ15DaRmcH",
  "key25": "Ms53Ps1HiEGNMRxKgoxPkPjo5iyzMr3tMM7MSeKPaMScnzxTTWoKxmLgSf4tqfURU3pp1SkxgGTaRZuy1N44JtN",
  "key26": "31QscsGxqKmEzsweGM3o32j9iHG578spe6Au4dPFfnZobudtfLQATE9EBw2pVeH2a9XeDhBsznvSbU5xTgdwjU2h",
  "key27": "3u1b7WgfJW5S1kJJWipbvdjN5xuCs6PDsvHeFmjK4dTcd5QxBJhXqQnRdqnQMCv2cQs1sJwyftsBuduxSeHYQTto",
  "key28": "86cNTKEEyZoS9tKWW34CCGUg2N57yZbi7sowqCtHAv9pLLYCn4Uh4USWzwTEqvuFKx9YzKXJzT318CynDv8c3fs",
  "key29": "3gV5hz5eCBwtyroMwBm7DXGZZfr12cpCjRUCFn4RhncCWQn63diNucCdNYcgSmnhfVkohFt1UshGVk7fPMUKTEXg",
  "key30": "5msNbiSZPsCePtddXuLjY3tWkKifja8vEucJYdC5HQsp7p8LMg73taGNivzCSyN9JucfPTznJ1Q5kAUjHXQnmwwc",
  "key31": "pX8b9WXbB9ULEsUvomXxTTwYzDwEfRV7djN9XisFmAj8RY6fR78dynAdUvAC62UCT3bh9wEzmM51SDwKmqw8UNB",
  "key32": "4nfWdJTo1KsDDMJTkFurfGwe2nVMXMT24m8N5xUbmc3fZvCHhAnsn8P9VFkaCrPFxDb6CiWSyhehGs67kWzXzb1y",
  "key33": "3NGZCHpXKGst6ioeq5f1kdmXPejGbTgSBminCFUTxTZ4AG42T6zEaFmCUawbeRPRFszt56THDMM5Bs19MNMqQy4D",
  "key34": "5x7esDGpwnofup4ZYFMLr3adhQ6Mrd6ykv5t1KFd8Y2TxojsAXrSATrRnV7ygKgW4AcWaipg2uc3GcRbxaTqq94b",
  "key35": "2v3j6uotWN1vS83gz9KNcfuasnG9ZJU1VBZN8QgkJu6vPFKZGSErSZgtrU61KDpxHCoTavSDonj2mrEtvMLsSriC",
  "key36": "2VfSf7a7ahgjeEcxkiMNGGjBt2Mwzdu7Uz5pndfW8jtijwh2NFoHoRfAxCyrB1kaN99UmMTaPe54SyRGxvzJ44A5"
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
