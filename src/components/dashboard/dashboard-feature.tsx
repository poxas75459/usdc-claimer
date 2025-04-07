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
    "32M8JRACMiDzwBoZKV6bMiyHYwM39EC1MVrfXYRey2wYaYbGPEuEbZeN2d5ZRooNvqsBzh2SieEHAJJcK51GvNim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4xAq61iHUEHgqWEEUTuJHNxzvYbckNKe6QPNTWEXeF2bgR4qEgL5BcePmeZ5EfNNALSYB6kkn3oV3iMVnMeJHd",
  "key1": "hoEW645ea7R2C8H1X6Xrr3bd5X7ARd8KDsYZuSfkZkK92V9pDzzcJf92H7r1QFsP27ZNqTJUwMYjrQmokA5jwvn",
  "key2": "tFcuy492WGFqFUUKDZRfFdyxbmtgPR4MEdkeDVTYj4JtcLan1txhj6eNBkug8rGR1eNkmN5id3ndz6titksNehA",
  "key3": "4sR5RcaAfhGeddSZD8YNmepS3mGHeky2gemxZbrPZfMyJcpEhPwUnH37AZ8mmVdqrJddyWWvLLyURqjVBEbPkyc",
  "key4": "387Rfy23S6NJCodqW1K4r6U5df5wGupgmnWMpsoYiwqZYUvkfm11owEWjgk6X3raKyB3anZmNCJRiJYQYJj9rNh5",
  "key5": "5WP3sBSkguzovRc6aqTiKEGa4KFktUvRCXBiQJAJkAdf3RWN9ZszbFSPnsc5Apxuvxu5bzke2Sievj3Cm77ez7Zr",
  "key6": "4o49FrtR8x8jKsmUTpkPqTZ3shouvWxa4xLSkb3zKVffB7r4uVhPStwBAJYjoNyEqtu6m43mPnKjGGVSQ5EcUfBc",
  "key7": "2jTR8KfypcpQ3zjtdnotgGvYfxcVhW6xJVN2398C8DPhziToiMYRZMxMKZRuKx8T6gwUv13g15oE8rU7D5iD15b7",
  "key8": "Ex6MxHaJ77y1rVqofYgR6auGghJcsnphwpqfdM5mVvT3mLj5gC9f3dD1RoHwqie7Qeg6T2inBCvrE4EkwGmgK2r",
  "key9": "5jEQitUrtRYQia5TXmMVyv9R3TE5sfMafsFo8qJ3dvhjos1pffqRxBEphGkMvtAN8FMd1ekk3sSg5bL8UBB9Tkb7",
  "key10": "2azAVPDAGMsFobXJxRypxkJmA6oZCSp7H7gQzZeDopJNEuUAnigDhFjxc7bSoQu8fRDLCCPLkoADhs4uLyyW1F5d",
  "key11": "2Ryv4tpnduDAmuYWLirCZ7mdEJApSfpBNo11q6e7ztSEbCVgyNykkFvmVfNHtPBPhTufDd9rHkb2CKM9Ds5E31Cg",
  "key12": "5V2BKmu768ujXgCwjp8GDM5bGoWao12PjDHQ43dp94piDJCSxhLtMo8yxw9kiiYaxwPbzJySdoqoAhoRgq2bdcsw",
  "key13": "3Av5YJ9svNhjYMTwEY3X5b4o6dEpToHyR7sM8yB6otM3MdTzebKpPwcRJFCgMoJcb584auJAehGJ1c5UuhasREc4",
  "key14": "46hFSgeXakKo34Ct1vpkV7HrVJ2tY7Y3zm8frP3xJEXAxXwMUDvAUeWj6hsRcGTFDXqmdRY11PjwuEEnPBoWDyYe",
  "key15": "4b7AW86dZgQz5XdbTkZRsDRgJGsshcNnKsJVsUhwPVf8zGW2Ar7dqqXCEao47FdDC5YEjzjejcqHhXJ1SBJgSEMX",
  "key16": "2puMmdu7qtqFEyy3piYNPQMnRzc9cGrp9y7hqsYjHEDvD7s5e2F5XKqqHTwsXc8goDfSZ2EQXbD9WkTnBrXSE9Yp",
  "key17": "2oK16DprNcobzQfv4LpRvKiYhSfTFqw2VRcgPMx76NemXNSTc67GxRh5GBNFDfBKN2rAYXpd81gtctbbdzyzBzEx",
  "key18": "4bzAJqE8XNFLgHRWKQ71opZ9AAbFxcsrXRk8QFLrdijEDXPDrRbw61e4yJgEgZt8Tgzdn6eow8tF8eTu7CTBxHx4",
  "key19": "5DbzigmAH7smsWxV8PSYm9ZmzdkjcjdtrNHSU9uu8j67TFAPcgSSi44z1izSQnvJyPGPxaZE73g18kC7Nb1UPSUE",
  "key20": "25pTLHAJ9B6HTwHP2fi4qkDVoHcTfFU3m8o1dPwjeisaTiScsrnEF38dFaE8hkZqZqnCjKJg86oub8bD32rDmqme",
  "key21": "3vp7yy21qSRYQZixpnCNEpgLDanGCLVjHsm5qVpYM2c9EzbMxBzzLRqpLGEDCdSW66ewb8RMrz35QkhyisETwmvk",
  "key22": "jx88N5kW8KXCHxRadZ5VVZFsMMuyyJ33k6PBNa2XWMoyY2ezYV1YH4DMgv7Mbsy3mQxxxE9AXaYTRTy2j4kFA7H",
  "key23": "3uTQHvbbWor6Ae7T9ppqM1YmCNuh8KNoq6Ud2Kth1w8DJRcR7q7KhoBzfosnxS9TdYhscguzTf9MPtuSPnjhFsUQ",
  "key24": "3Pubu7RcwVqRLn6WjBJNhRG9ASfx5teCMrcYNpgtduoHBhaxqEw3Y8DFw97pddm3TmCqty7cX6cYoF1kVjN1AfWD",
  "key25": "5Ybbnp9aytSxvQmBJUmjLTU8DCs8fbYw2UN14aHQTgifdkDcm1JfxHW66JbduSsYSCgaH6qZV1oBCswL51Q9nFUD",
  "key26": "5sA6uBF7V6RnCFqr23JSzqS3vwUKHw8Jgp13oFw6qcVzjCs2pzfF4aRx8MNrq3j3DMCumk9hUy1d5KiEzxQXRrfy",
  "key27": "HqPACqDegz5Y63FPEWeoDnDqHh5DdEzAKHTWMEY3nhWnxNFN1xuuXb8Jf9RMAhjZyPED8ZNJC1rUtAKk894RnQC",
  "key28": "hVELL34yvbmEkVavz64Gh8nAwYhvtSLzpqGKnjhZrZBKqUs7kUJa2bw8yEdoYyhibgeG8b8sDdsY7EZk4sMb81E",
  "key29": "3faeRQVH6FvickJdzSezsA9fBop84GpreZeNcQdubpVYCk4HuStoVhac7D7bnGvtXZmkRuH9TkkLdum689tbZkDJ",
  "key30": "jcykQ8vDz1QcwhajauG6a5mAppftWeszaoeb5DPc4md5LMKXEHCzAeL2NmN4TxHa243KbJU9xLCRTc9vSeyX1sK",
  "key31": "Np1EMKoEyXvcKP3VP5f4acL13iyGJu25ekuPtyaCmjEYeRb9XTR2wC3gtnWJ93W1q1AV63ba1zqpezpNcNZx6zm",
  "key32": "5syJYkv4QcoEi5Qj2hGzf6YwQbjzQ3EREa54nwRFsg9Ekio8JuqNWo18gDE4yokPaHWtzGHACw4KojBe4i5nBGY6"
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
