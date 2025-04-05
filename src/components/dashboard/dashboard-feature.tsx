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
    "3TVrTa7vKm1HhAnHnaZK6FqwvVkSjTjdJQWGJKcSnBvUAd5Rv4sB2TbHPBEwQ6kxYSVPRBanATdqwqVo1sgmymbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r87MEQKHZbCD3RKGmF6FUBLejUZ3nF45W9yd637onuAoVPbQnWPG33QFKkJZQDQdBpET6FBBcQcP79UUsvxJygY",
  "key1": "2wiiPpt2vDUFLN5dMiubFKi645fmnV6KNZEDEdQNHkbaaNp8NN1tdEn49HT9qfUS5iB3ZhBH5pzz4qCmRxu4neuU",
  "key2": "55FgNSkg9wXwsBzDshyCzhQ3vWroz4pHWao9aaYxcah9uBttB2s6AdokbygMyw7UJD1NZ1MPF57kkk1mWtqUSA4Y",
  "key3": "go8rxHCabZJ1jkJ5AwdcZpoVND4DALJ2NDsTpxeYMGBUooSWkcz1Hg8XufmVCw8icChAujqFs1NrUn3VEZXQuAc",
  "key4": "4GNXiG3tjFtsmkyG3MKNV21Wqa7oeN31AgxFYwJFvGXNXxcPc8hqXCYRLdAg6531UfMyt7d28RERtWZ8HuWJi5d6",
  "key5": "pRe6cAkHArG2KUQW4Ltsz2W9HuH961yu98zZKSMEUo6dACufBm4nDSgjUgUJPqWFm9fSZb4iQJmrnMKA5ejorU3",
  "key6": "2BxtXhXsYxc1Xj422RUJEbkuJr52XwgAGh5sF5kWi2zs29DbKep7qhdHF1y27ikBjpFVLgdKoSCNF47dE6LQzo41",
  "key7": "3NsfJkB2Mjsp5baeHJRDUEbfcP6eHDBbpEyjwXZh2fCcmvuZQ1Y5wCZRnKUjFsNS8zULPZSfjAi3AmTU1ws5XurF",
  "key8": "51BsVkTTiz4ZE6skvu4KLc8HjWbRP8gdb3ETTRgypjBG3q8PE4i6RV2z7v3riW1j22exD47fNuUw9feA1jVeJriS",
  "key9": "63xucQSbZXTXCKHUqrBHCMDNBBek7fHLuHJc5oTQmm12AB48zghz56GtrQ6SuuyCZY3FivuJjPZrXbfnnkGhqfbg",
  "key10": "434QEyqeyr3XFmtnJQZsvApbfth1N2pU2VVZNZ1zY6ujDuy8jFQDJSZeLue1QFQugjtqrr7qKt6UkAtrsMPBrHmm",
  "key11": "4VurCM1Z2GC9WfwYHBLHAXz4jYNVnDNZBkx3NjvUM78ieVtJYMLgh128WzTsNQQuXsaeSfr1QtwPkL4eJrwm91iP",
  "key12": "4betzDMmA2X5DVVYQZFv3nqHAjXuy9PtV5RXSdwWpgwVfY56x7pcCXXFt62iJKsovNLuVLh5FLnMRKRdeTGJi4sN",
  "key13": "3Nx8EHsWgp777jhczoSmDzxoAZRSRjhSVSoJa77uSKwQqLc5Avv3Hmf6REWJZveFeMzsdWfYdYCSCwcMYkvCAFez",
  "key14": "2tTV2A4XWykzsSGeJ21bZfVBFE24WLen8THYEs1tFGkuhCNPqLE67DVqF5rZZU6yiFzMzLEkvVXBTSj9kVgjS3ZX",
  "key15": "4WXnNTmGfibV7Nkj5ULYoGQgR9Bt825S5zRBRzHvBxSTugGvBSE7GjmwhRA2JLVVghD214K1kpMrxoQ6yfhPdVxV",
  "key16": "2Xd6w8d23u4j7w3emmTm5PbGcGEPZRyT35UsVpKCrc43nhpmycF9kmQA87XQ43HuHUi4oKGUYN67Zreas3xrvEi5",
  "key17": "41GZrVpcKkVsRUZjErAnoQHJxfqURdSm4A8CvyQJ93JL77ZR3B9kwcAc6xPEn4JK9oScb8VSRUmKS2Q4tkXsgztj",
  "key18": "26fpQyCJU6sDpxR2uRAZk633tpReTM6B5jD88Y4Lk6juLANKVvGMPFGJFrQH7QE7RnQ1Skbrib1yYrgswbSUx7pu",
  "key19": "KghVRGFuPumeKHckwCW5271kZ8scFLBGkk4wBhteNhzztCT6pXv4Jjp7YC7pyjiRjKPpYW4MAurK6m2Avh9frAH",
  "key20": "3DKHk6Sx6W1C5aqxvhPTQ6JPSEXtHexgr1y9k1cXb5D3eMJXKDov8QN7hsppCBpmHp8VXfDmjJNEspNJmrjLtctr",
  "key21": "3VkXv8xU3H4yGD9zwENoziTyqW541CmWFQQjFkzda5AdmEMVZgFUzyhEiyMhh6w79NeZpj3MJUL4kBSK84Fy9Cv4",
  "key22": "5deXgF2Ux8oUfNHoRhMn2RY4LYf7Yx3UL1fjeLKkeMU8ZjY2avfV6soZYjGS2AS9J7ZDLoS43EocJkKWWcFLUtRX",
  "key23": "3M5tfzPqj1DakSBGXd2oASpxbMBtQ9REsmkxQqkJTXm49hpmTsGPk3G4etPYEjEAXzpMPuoMEwQMrsmTbUZMaUog",
  "key24": "4kTyCgSGTAyEJLz7of92o9AdxMvtXPSW54JSivjRbfyxc2n54jM5qZE1PrDRA2xSq83p6wbUtAsq4C6yCwNQLphj",
  "key25": "qR8YrUWi2C6gjQhsL57p7iTMrfDxg4nx3sEVy2VwMLHuAFd8sBZJWcnjCftUXfnid2sxhsXKz1cVJvbkQo9Gvqn",
  "key26": "2qZCCvhZYAVksrJUcZdMqzJDSPf9RtH2YijDDiL1E2nwpQL1jFwRPrDQpiqRkJWekowVEjRXWkNHFVsyMTJE3LwD",
  "key27": "5bxUJh5SpU5eESS2mzUCp3vuy2cxMX5raCGMmR66xBL9GG12bBFPB1Ts683h8Pg8R1YCYKadNK2W7txJQ4nrbDte",
  "key28": "3QcD71v6ypHUKgqafDyP37k4uAgkfW3RQGsmiPtSJFJ26MKkhxanJ3k7BXETc4sAe1bE7ypchkdoWSrLVkdXYso3",
  "key29": "23wme4U971VACDcpzqdQPMZE7cFCDBCtkC8bmSGuPCVdeqL5vTYajAsaRdU9iUK2cyPbohAnxcoAAJyzWB6srNqU",
  "key30": "5WLpjFNQKLeZrTngmiwAnFVHAwLgmxfYQyEBznLfsGPQroT777kytcHU5MXyb5JTwz8ykYmvQxntP8yGMxz2MgjP",
  "key31": "42c3ZEA6bxm3XU1rddUzrzdU81C3aFHNUZxB7Xz14vPrwUabEFYefbCmh1zHn4T6U4f7CfFLaK3SBmKUGSAvTGr7"
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
