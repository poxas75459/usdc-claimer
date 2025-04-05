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
    "4KQRKwdknA192rkxknTuu7geSMvioV3tMqwHrTEooq5j2tkFRXrNHLmRenAK5iZkaY39FhVQr9hunNS3EGhwPDoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCRmuF425v6d5yrqSeQzCjaLbT1CjkQV841BQjzbCGQRrP7dod49s1E3t9HnLGFVdT8tD5SoZ7dZJZFi9uoSeNX",
  "key1": "4tc4gS4BXJy4hXcVuGDydgJBBFGgAhhPgGG34mft5GHYY2uraRhr9KHN7jpFpVt2qyo6Ep8kamWZJgLiXKnWiLCe",
  "key2": "mzSh6UCQgHRVMUhFBaGsig1VYQgFpe3WiTAHb8A5hfi9rs5ZQ7dSoXtbruV3fPK527PrYUsrdKquk2fUTiJwBBr",
  "key3": "8PpsAqjPDxjTg33LN7PsoLQ5qXtSyyEKbGwfBVuD58i5xHWBDCoMSEvVFM8LVWbKSbLzLzhbMGsVAKzyYWzT6DQ",
  "key4": "2ZWyisXpQqmkyqadDLm4zaFhrRQMiDfWW4MYXs4X5RQ4MtgKVnA3MfpcibfaHayECzqhpvXMWkmFog2vZeiKu3yq",
  "key5": "61fcMeP83Yp6atwrartNWXkdKC1hvg9Wkq2itEU89KHVhDJXQk9S6UVntqBQJiaqHxuuCf9sQ7K1q6eTx5nxC4fT",
  "key6": "5WuCH2ZRZiyCT9BEDrMmyhcCNcoosiBJjXT427Dko6RwpnDAK2nApH3DpuDWJFec6JFNN5PuwDG14tmcBSseBFow",
  "key7": "5KEBNeLFvyE8DrKTQHa2sEXVY8U225JFo5tdxH56B5CRUAZhFyrJRecPneXM3Lih7jV7cgpptDz9b9ANLnbxLF5s",
  "key8": "4WnaZtusNxo8L3BYzRRysPkoEAJEbafgvvPkqAEinbSxGZGZiAuCgkiH2qEkLZvHUziYbvyFL13scYddfrRsPWt7",
  "key9": "5YAhUwHNCPEFz97L9SKMhRR5KtnJRErmx2h3nmzqXJJfXWuggQB5tXzRoGCxowvtGkWQA583o2KBEZ2ZrbEfxd5d",
  "key10": "58bmcEb7616R8ZDH4uypyuWzJcqf8CrhbkkLckLkeUmBxqy5CiGBCjm3wHNwUHZpg6QDnJHPvKEWiNAsnQ8Kf7Zi",
  "key11": "ooVaUKhkxDdFa12zPnQqVMtkhPX9UBbZLyPQVddCsSJW1Xz1UGQFZfL7wKt53ZA5CaESNTrmWVUR5zpxeghuiXF",
  "key12": "3wJio9SDF5vfeFbMfoEAaQX7uDJTGCvcvyek1xs2sFYPKgTUSbSHUrwqyXfRmpEjNno7xfe4gZwtfuVXReraT7he",
  "key13": "2mx1H4odfHKrcSqUpyPKWN9weMQR3sj4bsz6Bg9fUq2DX8TYGXaXbPJCqrVWeHBJ5vWCUJMTa6mrx7JEkidxnQLr",
  "key14": "4E6VniNLUQuEmVQVpw3GaKHYNH749xvFVaXigjBC1E5TLg3fzvh6mybqY66idTDosaYf35djEwuKk4NGsKFpuvDQ",
  "key15": "4EAvsVjJYGirhYoD3i6ivwHUXMHBmu5PYXopf6SHtmzsUAz4XU1DS1wBUADtPCHSeb5BMfdQS3qB6xNCKUEbiZbS",
  "key16": "b5F7GmowLqxYMosGmzXvBfDuPDgQu4o6jumXV5Ys9hcTs7BPzhZbMtvbCN4MMUHeKFquSeZAr58E8w2jQerTHi6",
  "key17": "5ZzfGGUGEngZt2rwxWVdncnh89jGoQrbT1euuHmKcmUfqsL1iTVWyTEDkjks2o8FMNK54SGQs1tV1z7M6nJeszzD",
  "key18": "5NmV117RERqABw9Rc3g9mHPSwXTJDnBNhTky5qTqwNYPj64VzNveoTrWuWHoWGSTXAvcrHVBDgryZx2dcU8BY6KS",
  "key19": "42VmMzFKPWWUp8onDXiuAP7dc8het5T42Ng9EKqXEWsXptB8qe7keVEhYa2xoLE3NC7rMaaMfDmX8V9adnV7Ug5v",
  "key20": "3kAR9QyGrDCFLpq5JHxAEsdgq9UvdfiwJJg6uasohgDJSC4PFZh7tQwkVNtvk73ES947reSiRm5yivaaVZ7faHKx",
  "key21": "29jHngCdYwEkfBnHa3EEPN8ZQLdsSFkFbFSJmaAsw2V36d9zdjiZbU9JQGqzpQshmSHRtyKXY94e4JurG9SR3GRP",
  "key22": "MZLvRVTMzuxLonYFQWs93UsdCFqDMT47ZjwSNvaM7nRCrey8ZenbxKfTqsfZ7CF8cd6GeVjRU5BDDpjBKmutqgy",
  "key23": "SAyCCZsWf3vShi6o1gCufw6ZLaVzw1QQDCGcbaU29vthHxv9ScwCo1CUvK8zWcCmD7QeQieWPL31Pen9jipcTE2",
  "key24": "5GEhvvoTxu9sehq1siHVQJzGP6Kz5imk4wS9nykhRkXyoaTmWgc6fsAPv4L6mwNFPfYLGXDMwzn1ybfwjJA8h4rN",
  "key25": "DHy6T4r6TTNhUF9uJwoWY8naP18WmFUujrJpFTirxVqJxrT8UdYjBCwCpCZ8arZvKEJVoMt5Pfje5mCuMG4YNXi",
  "key26": "4YzBCJbr9XVWmoAJqLi7qmygk3x9azNwFJcc2UtCKjhpj2kDPNcTMwvc4MzerHCRkamRZZQa87WN2JKbhZc4Ktp7",
  "key27": "2apUtY9nMLWqfF6z4quXJX1PVyP6H3a33T6nV3SEHrUT9cpFGpoZTzfNUu7gzCMsTW4M1tST6ggUtVLgapijXinA",
  "key28": "5zqi8cGwtw8CgRq3PzMgwAqzgStsEusnY7Mje2FbACv9eeNVhhZqvzYwQQG4AN6t7RWTf9aREwEkd3VFwPzf39Tg",
  "key29": "3Jt99nK7ZNkEn1M19YDHaNQ6JZt5U32tZLoAGrrtivvfe7xqsCHK3FEsVrep9LiaX4cQ11yw3BoKrYsFeXVZVLaC",
  "key30": "4LDu9tvbpbcPgT5821wu7GjYjLgi1eo8se1SKSt1WzAhRrh7citB8iHWcYYqLwzj926Lwq728j8arUzQGurSr1mX",
  "key31": "c6CkvPkh6GT8CtNgoBYjVVCFRtwHyRpejJbxRNT7bGgGfZKvh1g7tDaKRwD4WdM1UvQQ6K4Z1SWNwgaP11j9RSo",
  "key32": "48JPV7J9eWPWSS38diQ9qfgG7NHnxGK2mWTNEjhMkYmgCMLyAPyynUKrv8ZqZMi48a6DDzYDo2qp1bGBMSXtYove",
  "key33": "3GQS3mjcgUbVmg5tE57ji9mTHVHrpoGyRSmQYyFfkMbTzqt7MdY71i6pMgz5DCu3fPmAh2tyUrB2pNnXTHoEUWW3",
  "key34": "4wN8p2Awsw7SPpxGUuyVC7QveFjRNamYaBthnSDUcoNnEqNKwQtci1zgziibdL4NzzktZ55oqDktpibyBXnXLj7F",
  "key35": "4gK5sxLVzBPuLeihSb3DCw2kzrok1FiQTeFHFkB35Qv4sQhsxhF3Bwa94TCgxtBRmdYXKvudY1zgzPPMRQqAHixf",
  "key36": "2LAWXQhACwhM45RPDM4wwhZUK3CWWti4ysiHZb9YzqatX9s6RqmfXjy9rpvh3ykNbKysyqUnDyfBYAagbEmg3avx",
  "key37": "5eiNVtbRZsVaF87Mh8gPeGDKUTD8jKNXrzXw7PmHnb7hpAN6H8SR7hwn2RNmYDB6nm73AZ3eu2aUc5RTqrJbHASx",
  "key38": "5JSBHajEssWixQd5npKavYY7sWXEyJXP9fNwBhEsjAMH5kdQdgWBiadbfSt9jddtf8byvakULKuNp16X2ihXw215",
  "key39": "5MqdQMMU1eB7SQgB65VnwgQuzXNUrfPxHdnVGbAJMiacfG2KGRTHg3EUgJPjtDyjcAoL35kCH1ctMJ6TpV6dTeW"
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
