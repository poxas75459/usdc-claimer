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
    "ByCqrSMpeyaxLhn6iQPK4BgBswS1LCzRMAayNvN9Gu9o6tdHkm6y4vvQYcHzGYCUxejoxqEdMAXc4AAtUfQ3q3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31MF7wRnx87mkLcXAb6kMBsBRBTDj6MGD7wZKV2LwWHRVvBq8xbyJcyX43sDJvVDh9w6sikNUFLz8PtsFCTLxeYN",
  "key1": "nQaY4drsonhi6ZXW3NTVdRVR8qPzpgQ8p8REML3jihBbJ4LrvDv6ehG8kjoJn6CvjbwRT5qWdh7dtaGmgXytr7M",
  "key2": "3QZWjgeTDTpsx2k1Wi61LMdLABHmtpSyppHXCT766trkdUXER5iDjxTwN1nnt2S3Cvb1Yp2VDTUtSNT7p4gVxHHD",
  "key3": "4uqksdqSRSh8sSF8dHkH45KdeKfjypwRtWtmeRjW8bcvw3ZVoixjKi2wZ8jrntTspUfAop6vtZhrj4nxcV4JwGcN",
  "key4": "3RyNS4HysguqcWY3gogYtChyVNfqGFi6GtjkPMES77wfWYoRPWpTnzRk4dTA3uWFkgtQ4QsdyfECXFYffSU5vHh1",
  "key5": "43yoYSavLK2wT6rCfxYqnmCCmdR93biiCKCQUz5bBMX51NLA397d8H5d4ApvrYBxmWpaGM1HBzCg9fqwFjVpGBmN",
  "key6": "5U5Rd2pmutpgkcGH4TiER1SAoCBJdxBveAEqFgD1JhkeTZ3wz4LeZYGEkXs6bcXEw9q8D24vos8QweFzJxTN1Qk4",
  "key7": "4Tw6XYT2tdwesLrjVgV97vTZ4yzpnN7pXZAFy9DFRsbmtGQN8Htpf4W6MrVkjJvuSowj6gdpXYJEbwzV2echKt1Q",
  "key8": "5dsrgFcSJtfrGo649vK3w8q4WEW7Fiy2vpjpEKN9YgkYQto6HDoN12wtBbBEm3o58kShEjUcs8KDug55wXpQtdnX",
  "key9": "urrMftx2roE5H5Rt7UZ81TgjpQgaFN8iHbDBP4GEMs76eyxC2LKUZWD78R5cJx3H4xtwumMoWf8v42yW3ioo8UF",
  "key10": "56MJhuifQfh9tpFmXT3G8y1raBAZNQPmqVCRYNTQetaUtgmCANKBBJ6GT5cpFCF91umphK6uxYyHbweUFybkFS9E",
  "key11": "3CrG1d1oEFvXFdAr2QC3oDtwnaeDonYZrJDtFnhQ6BfURnwTAFGZbzo9keTuCyYypJTUZ42d7RQvViaAyaRf57je",
  "key12": "33ENZK4JLoLDuhiuKFMqKzb83tXrrWqZsvZoaCPSYXNXLuhBjwopmmEtygTfoei3Srf9YkZC7Dx2ntM4uuZVEXib",
  "key13": "4rWcZuHQbkUM5b34LTG2Xf62HBG2agZyqsZs16HJg5CENLyMMzVdWWegBBwthgRstV9nkTiKuL4ZTEHLXBbyPGbv",
  "key14": "2abfDXfeHTZLyDJnUZPBFqP79NdfJ7fV1hsDTpk4nFwHuYyThjuoMocPL7DQ7Rabdrt6fkQBjFPGHFrWkLFLjQvM",
  "key15": "WqA81rV1DE4EuEUEU4926SBy7L8xfLKhRSKbaFtf2kcGjjLH1CaFYR2bj8X3gv2XfvbYUSgoZpGyySjsRXor9Q7",
  "key16": "5QhEoTE2uiQk4X2NrgByTRi7s4BSLhp2AebYKFMdvpDi66DWzJEV294bfQ4YVbeNeVxGidmzeoL6uRtf5x4bZr5R",
  "key17": "3v6PEMhjCXLdq1AFMZ9NQfTMD1Z3cCU5EGVAJigouEFR5VTc2iFKPdkD7833CXkfgSh8zELqNtwpNzVeQZpZwwUs",
  "key18": "2tPdzd3ubBTrzWQmitBqYtZqKchhbJQbgtcbru1aYbhsmVYs47sm3HJdzQPVSwzAQFmm5SoneLGXLnATui3x1xZW",
  "key19": "3cq1neUrEVvm1FUuvJexQUwsX1a3Zwgv25xZHKRp6VzcYpY6jj6wvejcfvLtxVgM8QrbmjYFAhaJjrS8zuyZBHeg",
  "key20": "4GJfRizRLWE7ddJqRp4TjNpFRL9A66PvfbGWk8mQSPnVMQR97Jond8owrxvycmqpzdsTReZ9C5WDixG3YqwX1wbm",
  "key21": "2c5kou1v7NZxSN4zx4fg9J8zm3tYU6NxhWmJ6ybkHKXezJq8kKP9NuXtgawVfPvG4TVDb2eg7ySU2rpQbnUGZBXD",
  "key22": "5dmqyBMGF72UG8oWbLbusTdCtyYjiLC8i9EZS69CKKAKkPpFcZjbks5n8gdW32Wamms8fxkDxHkwv3uzGJPR4ZTz",
  "key23": "kASjhqmEfy5vKopRdULHtFw6tV8vHQfWo8yyw9QoVfvehNiWzzQgx8Q62gcePZZoksBSSF1y7iyeVMwrSLn3o6F",
  "key24": "5UD7Te2f9ciNDvUxBq6eRwgo86dp6jpQvEN9sRGkNNZ5TjUy9M4NinYN5B5sa4g1g55oDDLWryMUqqpagpg4q7xD"
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
