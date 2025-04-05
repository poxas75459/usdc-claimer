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
    "5mVhx92b4gVrVa9vgVHpfmbuPwiEtyyVxV1U1nTA5CGhpe9GakboLUNqJZLiBs3qHK7NJz4MQH1VjvKmtuwFwDJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8GYXVJk8qNU8geYvKMrBZuwerXcZh7z1qMGYiQVhJssWnNExwePjbM519bDqgzQdWGNwYMg6jXoRaAh2Va1WPA",
  "key1": "ynpsGRqAYDEDN5z88aob2euCSbUC6iQawas3GpDuzsuShDuBeUfrjQUkhzxh1koK7i2tEZH3P66uWWMsuVTRCXM",
  "key2": "3YAjTyWeMxqi2H1th4pi4QWMSFxTc8HuSTf8mPUs6rcEhLg9hCVNKFm7fvPfCh9dgd36TcButEmhVY7kKJRTTPzQ",
  "key3": "5iKy1KKG15Ckem2AUddK6KRnjnQijuqgSfPrEEn4ySSyFHHyqhycGVizfa9JPa3j96R8BHS8R75A5qRyJSZxhUVP",
  "key4": "5jxGeX4UD54EL1Tp8B14pXH71e4PNY1rTo5rvxAjmLJv4SKSXKggpSiERczXafnpLNKyorC2SJANLvQska49XR9G",
  "key5": "4F7EWjAkefY4MPuxLxwWtZjcALKNbYbu6YeBKXpMZ84E1tsR86sMdygz5Fxgsx2AzZjnnRX5J8QzuoCCKGpnvgFX",
  "key6": "5v4tNWfBCbVipMmKks1NBHvUjXKzsqQzxGa3cWC2YCjhLf5K1YQ2xQsFZLdaPQ1pdocq4erSqXQzxrsuSana9Zcs",
  "key7": "5ktZncywMHsgRcNw2jVCHV3cZTUbBPwujuKUhMB34LGxa3dXSkjtjSwSpUFpiX85VYxFYe97rqahHyxBHtfxhLmd",
  "key8": "5EEY3SAZA6LDcYdhbx5qRuP8A5AM19BwMQ1jJfKorGHGwpG1Tv8ULBwtfuofyAUFjDHP4QQ5A3VGpkAwHL8d8yMy",
  "key9": "T5pz4PRdGMPoKXgSVf4hscTTp5NGnfV1qnacMedBUS9fN9z9jF1roMxLgGsUUMnmxnovEcx6pHMrHbssj7zkB5T",
  "key10": "3EBbb97UGyZVrHq5tZFbzyv3P82mtiGg1QTVbLpT4PiyvQJPncunPsQG5m3gaEhBgwCJKrRt1JqWNQhy181Pk2Md",
  "key11": "4fGcFY5RSDcMe2EvZc4hqdFvA3N3xQwBu323F9mBBEu3JziawAdvcRsW8psec7PK5fmwnWyede738NpAcyQGjhNk",
  "key12": "29Hpm2cukZ7ju6ijh7QQtaA6xQzSPCtWbzagET6akvhxVNiXirBm64J97LWtq4TxSszKm6sBJEhQNKkZmN1cpP7i",
  "key13": "XYxNXREyN2KWkn4W4SUkeoU3vcpw3oS3hL7ZZUcbR18J6BrTegG2rLri9RQy3nMPMYbwYesMuAtmZ4GzZY5kTUm",
  "key14": "DYyAyfHteumBaEGmN2DVmf7jADntDwMVGqUtJsUQeZ2ou6Dje2qsfGR3JX3cD11PJoGArom3CS2inKwUDURwwcV",
  "key15": "5R3u4nLtw2FwAzJ29Vy7C38PKzhRTPjXnZJUbV7XAwXBi8HVs6MqSR4KKRvwKCHiDWBa71ASkhhapX8yHZoyNWvs",
  "key16": "3WEoP6Vr2nF3xQZtLFPKfQprJNhTaRhZKzA6HKJz2V1HDKvgfqD6YepWRA5K3p2zeFHaNdF8hmrhSfY4UbBBudf9",
  "key17": "eFE7xiWkS5zJRsgHGt9zmxcRgTUYbofNxfJEbYJSxT3wihWDrqzza4oT39VgbWeQGLjoga3RtY79KvorNm5StjA",
  "key18": "kzQnJ1Ke68v58LPZSTdTZ6eM7sScphX5EvkVeo5bFJQNdPYAasUQ95LKeAH4MyprpT9rrXgaXyjmKAfwXsWsCg4",
  "key19": "NDHHuD9Lmg6oRb54gKU1mJA9FdhtgWu1xutQGSfsPbrtkLVM2cStG5UsoJDR2Y8D7BFaEgy7xzotaWYRTPrXSNr",
  "key20": "5KVYKBkDbhnv5wMrwJcuk7Ypcrc3RLSb4tGV7qmTtEgP2vrzF2cShxrEZjwMfeJ1FUvnakxbeDwfFsFEpbHut2kC",
  "key21": "CtTrHXMW5uphBpRT2Xv3Ykpkdw7DgqzMLaMCyL2VgCMHFzUaJvZ9C3C8YjJkxKouhtqLT19FGe4YsfKb5vxULJ2",
  "key22": "do3LRvbJQSAjKp9y5BVjqTifLajuog4399eFpVqX9U61YyPSxEERbZZ8cvMVwikh7im6YiHHt8afv6GqsTpERqu",
  "key23": "4ctpv4dkz6wSTV6w7uKREM3Chuj92UUd7AXfN3zWCE5MWCcVsj1YWH8ZJRMkbjR4R78GtMzPDbC2tXkzmwkHK2CW",
  "key24": "5R88qtrMLBGw6djf8JNJ1bMCig1H6CV1QdB3y4P93mDJK83PMPpKsKEcFVfaGTiPahU93XAaKRszkttFYzVBpfjG",
  "key25": "3bH182PvHvML5t4hLdTVcfUisbt3L4iTLQLpHrRPAh2kUri56ynd4HMJqxKeX8VTPgvLMBU5LReBJYuXsvqRf1kL",
  "key26": "4oPwenoCa8gN12QLvcaMWbhm53PV876j6aWmzBwqTwAym4QsXv26VuCg1HZsYLDh5bc8HrVMertjRnikMJAizc1M",
  "key27": "4ZzuWBsghwzmaiY7KaZyyeraNJi5KeNSwWdLLkaBZsPc6L9VVYF2XXKxKse3pzGyBEh8FJbAG1btZUDbL43CXkZW",
  "key28": "bAc5qnT9ZUUv1hLaJzUH8hGrZxL36Kz9B7fu7zbGskFHsjfuPSS6jGJ3VqdcSpAcNvubrEFGoHSKVkYULkELCxY",
  "key29": "5L9xqkfTEAF4ZU3kH31uVXyZ2bDoybqdXXjbXtnyeWR2EvHVeQq8Exb4c2Jhds4AcSg4QL2n9bwL1PxKh2E2kMCA",
  "key30": "3siSrwKfTyiuGXvu1T8VgyAJQu7NuL9M3grHij4jNRF3Kbog5FmFsFVw7LzDSEpGPbawprBUBxZR4hqX4djwcDLF"
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
