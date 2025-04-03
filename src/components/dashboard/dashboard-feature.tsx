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
    "617DZtERsAGU6zd1h8pdrCrFgnh4catTcMQ8paFYx5jWCUgk6we6U9HSL6rDsyswhnJasaq6gdXBwEy3MQJevW6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWh3TXmMHgzugZoE4YceS9BnnphpiiHSiEKPjAgxbDtsWSf9uyRnRoxxcYn2VGXjFvRoCvXg8P1chW9wU5Jreei",
  "key1": "ofBuHQgup824iVya7ymSfLfDZtuve3kywHEXV6U7aP6Kb5tjuoNFkuVPunAcirovD2YyLhTbokGAiKzavi5CLdM",
  "key2": "4rMoPfc4jCUC6dZwztJp6bWR3Kfb8HmndHx4pDvVLnXKYnDYseh8qHeGrvB3Fa8VDXD6K6nAB6f926REpD9wbPmG",
  "key3": "3fPVsEmU7FUvRzawyiNTdBfJ7v8SFWmFvhmH76oJJziPgrhmdthn7YjUKkWw1g83ptbuPpwLiafPe2hrtMFaZXMP",
  "key4": "5G9wKGxS5qe92jaCTRtqhcYEW4nxsNuu1iyjzzWniUZYhMadfbV1hSkHR8usVeXpDV3D7WMWfydqT5qR74VBEoXA",
  "key5": "4CmKkfCpyExAbZ8PL567VtYc3xbeXGg64ruhV5jxaDG1Tqmii1iBYyMV47WTUNXNNEVG22AYc3LrHxBQsRdHxstP",
  "key6": "5phFyQHLwuaERYPeTEDebMHfKmtKPG1ZkFLtUt1A1yftGt5HGt8twgkAMBctwWkjRVnhHYmZb3DBWs6EiC67jJ3D",
  "key7": "5GVC587PwJdP23CQjskDR2nKsHoXraJy2bzSXdvVEbgqyS6Jd6zpU51E8afRqDC6iE36bLZR89QDSz6C6v1w882U",
  "key8": "3Uf78J6xCC68M6nCDfobMHcBrFYib91eTtY4a78tyVvCsdXGcobQ9g1GH8mC6ZpP3BahYyVeP8BNGXvhYo1bXz9g",
  "key9": "5GPhYmMmCWMjGgUp1BA2APxj41SxQcAkD58319nj7ufCj73jr32JboAVAaWVjDLHikftd7JQL6KvW4EV1SuSU9Jr",
  "key10": "3xxANFNoiNaShWJNw65omSV3t7ZELTsPW7QHWi8Nx3Tfg4vYh25mRJeQ716LYnLq9mZfqiXd4tiP351Eh4QxPnQq",
  "key11": "UyNYKvMdNYJopiYEG48Wx6YY26AzoCWneJ8Mn8MtmKkqEKXvFUuGcENot891caHV4FnFYe2zak9jhn1LRFwoXJh",
  "key12": "RkTyQWXuRqDxNN8QWNyvLgLiUeccLdn5joqJjRehpVRzzc1HLXCroqafe5WR3jnc1WJjNHgV8XEty8jwvud2oB8",
  "key13": "3th5WujLi3dp2GJwncLZ898SbJQfEr2NPH4GduDcKoMn12roccmwUfXMJcDenxDDdDPt6CPnC6ucQHi7yvMQRQuo",
  "key14": "4YYuTZ5xnJmkp5raU6bfScyQpyZFG2Bj5J7U5S8QuhDfyeY1thctH2zWf5GsPZVX7KFWzKpY8kMV9ze4PvE2yLP4",
  "key15": "5UU4vsAuajqT1R9oRs7zAu46Ed281bprVuxLDvHvg2o9KWUPYB5Myzy9E4YYV8h8EP3yfw9PXRUXB6jUaSLVLL6s",
  "key16": "53tJQkGKz9qPcXWAchFt5wMvsYth81HoRKhs4QiWKhbfWWtP9WtXaqMkjmmq8d9eB4zsnf7UgxHHWXrZdkaUZUXi",
  "key17": "RCGu2YibKceNKe4aFNSurpnvEN9mrq8Ywj48r2XEN2hjrAzHKCGSZaFpuB7gaJgjS4iJVZDfr9qqeui696heQDy",
  "key18": "4U8V3bWzhBTNWjgJezXgDEP59FGenSV81X3tcGTnb3GJzZDTzXidmfZ6tEMhJwTAGb3js45VZgTjN8oCb24Kw7eG",
  "key19": "4WigD72ra9nBEyptNFtuXo8LR5cjCVfwaDGTV7PmZ1U3qLPsv15jLXgo1etZDNfN66kpq4BbPUqMxFMZFU6ZfRgd",
  "key20": "zFP5BkakFDBa3rKmSYkCef8GndZ3EweSphWNLrUtqQM88rQPdSVwyVCTFPxuNukb8weEgSgmbyrDyBMJZcZUX9z",
  "key21": "5eEZnmedeXWvcgEbw7bkj4pJpAsGZ5aQXgvVquRV2C1xCmbFYFg9S1EzkbMDWkgU9rvPPwC1C38eTyRBcMAVzCNs",
  "key22": "2Xovb4mABDSbBYhBKcRM4cpNSfbZGypzvhwug7Skkg14vn386nyrQihH3a9tJGUcNvtea2C217f27heBrwmWFXGX",
  "key23": "G1e3oS2HqiYrzDBRdg7yVWRHRvGrk72QePkCmCAuh2xmWKGcQbZ7CWWn5iVU5EYGwfdLUFpDBsErU2M2aJGbdEH",
  "key24": "5wFGyy6By5aTaCu7BT2KahUugKj23iwb2EKNnPWJDpUpqpdYSeFRbw4N1J9wjGSNQWx4AD9nwwgDJ79r9AC2js5d",
  "key25": "2W2tGivQRiTuS1jXCS1HxwXekeuDMD86ehz9Uu1iEvrb6tobGwHEa4bVwBcdECYp3R9PzMPDarn4jd1DL7AzrwZH",
  "key26": "2CQxTnjXeGLwj5xY7ohWUTBFnX6FMgPTo6ngysiBpB4AywL4Pe9AoTqi1GQ9aMnNpKKRU5J1S2xe1tXWRrYYRRXM",
  "key27": "394ETv1cwUAgtRxFWecwWY4xRMnm34bc7rDBRQiaX5KacRps8nyjApGDRcns8VrJwoEiP5ArH51ANhLaMtzoe84x"
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
