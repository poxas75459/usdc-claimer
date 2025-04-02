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
    "2a25kzrQMrNvst6RhkQ5bvMcfbzcMDYVUNvw626FsTNFx1xEmwattM7uRKsbwJEwBEw7yXNP3PrmixPD8CyLzUM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbwpXtrcvoXddp2sdQbMbGc4Mqko53gYZQ9YY3KvCqWF6PTNiT9xxSR9NAnt6cQCFA7aMRo1dTMrxACnLzKjKTp",
  "key1": "3pKigZJN2za2c4tqMvUPSJN7qZefs6ozDFr3UXVgtP3moyTuhkwS9fqxYgMcEyunbtGzStJv32coWT42ZTDNaoDx",
  "key2": "r3Ui3Vg5pXwEQx5bMJr6r2uf8JmvtMTb7ib5ETQFekKDsDjKWtwqLWu74MvGMmYyYMGC5yGThjCimYWY2i5Fa8D",
  "key3": "2WDh8nTiHmRSKkQtmouqyvNXu1tx3FmwBPbLmxaBeTUsdMsUuU1TWndEQtSZ7f2mzcShwXbsyC2dMm5KjbikrWK7",
  "key4": "42SwV3TmHwpvqp9NBHeQUbdxchkNWXy2NyATEVen31gJaeaMpFddGs33NG4TCr75UyggGG7aJ4jaL8NtrhR6VaQv",
  "key5": "ayawthGMM6cG8rjQ5JtfmhhhXfznKL8akAregJZHnzQnS4fi6LaL2VqWB2fsBma55ZqKSNCmJi7dG8PKF4CnaDy",
  "key6": "54D7yREWhtSn3kc27jvyqeivHoEi2a374R9VYu32aWJ23JFbF7U1eeSMyamj5aUTc2DzV6cXWurRaqvceaTrsQ6Z",
  "key7": "5F6iftdLB2ScShWc2wZM2Z77HNj3paDhJStZvV1LxxSG42NV6nrupTULtrNpe6jkEUfDQaMHYNF6ozGidanrqSp",
  "key8": "5zSfeNkN4SuZ7XuSinENoWnx3ZmF7b4YS4cpUBEdQ7cmGWjjEWafhzaRGRJpvAvjrBSAFxphSfAWCUeadVrc46zF",
  "key9": "4DCbcdv41sE3v5tUQPP7UJE4vU8v6zs1Vr9Pod2wotA3GwDtFkvNC1d1drG2ALKymorDbVfP4PKdP6bDLWQQuR2r",
  "key10": "5mcwW8aYoH9ycarkKQ8f1BAPHg9eVM7DtctRa7JCfJprh23aYsScY8hXehZWeii7DyVyEc3kf42dxzWMr5bTbtaf",
  "key11": "3LsrN36YqpT9fTrhpiuTEZ5aMAVk2fvN1rSMSwnmrHtEEVLbcBhs9czDLTCB7DHPa6UkG5MLxsRgxsqdEiR4inix",
  "key12": "2FiHGYGRAJqti7QLFmca4Rof7fxmfS9agft7kJrCRthKoN71MBtt6HHaVUCMCvHPwdyocEjiUhrabrVDLNvLN3nG",
  "key13": "2vRzX33xqzuEHfuHhrn7UAVfbPZai8qzk5T39mD3pUE2rVG8cm3PVZ9vXjQCegzuGFF1NgrXhztc9jrmyKEDaTV4",
  "key14": "5RGmcCq1XmVCou2Qkw28yM8Hua26ssW2DNpcf12yDypAgG4vugGfoTJgsEzsxQeSRWgrGvxzixMaP4q77VcoCzE3",
  "key15": "YPm34X6qEjbjVauhAgwBVoqVwM3VY1Si4WCGPqQgrMeK89hzCppSitM7PJqE3qydvUS9U3687hhGg2Vdu3813VC",
  "key16": "5HruqBzRAd7z9TxAaZZBkaRkzEPy7756uyTG4oSEwjNtxQeX25KGAzWZQiAUFLcbiNAZ1sHGpVDLDnUUMf3L7AFD",
  "key17": "67UuRpkyJcVaehp24y1qDyz1SCJBZ6uxcfhEbwXUiDfqZxrXoxjWkDSCNmU7U6FyTEizBSfYoBooTSPoTX564qUE",
  "key18": "5pGXEYNEDFoU7ArwrM3uwVwVNqjBcbXcoFfGoK4VGWZD2apZX1cHPRErV2FKfpnC9htpDhKEznmA71xcuPRWBPcb",
  "key19": "3663ikN9KVpeQY6G2TMwvnphAbLc6arcMyfL4D6xAm4687W8RsF3GGfTqphuCHh9FSCJGEzYw6X64DRLnPC8cy7w",
  "key20": "3X14PJinuMRocg6xJWvbFvnnRxnogUAu2tgTWJhoPm7VEZVn673hRvJbux9pYSN2daAQro9gw9dKagLU6t7zwAaV",
  "key21": "3gLYZtBep66UCGmsLmZJXAVnHbQ2779KZBDcBpSStuMEchi38TAPkr3ujrU1au2LAoosURWJorDiZQ1mncbkLTpZ",
  "key22": "53KS9EyzHBv8DkY1opvaugJ3L87nzF1K5VxY7G7vxpQLcvoVxRxKSouUBzpgbdyJCjnjDYKTT46SaFUMrCBqdKno",
  "key23": "4qwp4qGg365dSYPzgSNrGi9kiDHWoqhCep9As7JjagQekqjFaqzkj8pwCUkhBdbUVpV8djp1LwUBz6uuSRZXc2Z4",
  "key24": "3i9bZvxJchPTdwAFe8isKM45p5EJzEYZVsPuWxEUW44dYfvdoaJaGY3eEitrgE1pvr91CrmbNwPrZkYWZPjRgGHP",
  "key25": "3tkooajHHvzEndb7mb5cE6mhbmS39Ft2YXR7LddbY7JiLojsPkhUKhitrrW1wYGhwa4TsW6s3zkNwrRKWsHxjm1i",
  "key26": "3QvKTtmZPLmoxURNQuZ1gjk4gJm883rL7pKRMQkA4j6uzFMzcW5QUaiibjcH5WvdnDApZxWYDq5c2FaMoBY5v97k"
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
