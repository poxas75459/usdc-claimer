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
    "3cbF2cPNiXPUEXQHsZn4dJVF1MtBR97fhfYuPzFYvdnCu9eYRA27z1956a615iT4MaRMX4yaf2Rti1QowozPnTEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jgh4t1mQqvVpwsSEmzZgeVABNt9DjZn8hoyfqKGKNNx3qVMUpVZnat5Snr9xC1ZcR5sGRnDdeeeAXhzjoXGK5k5",
  "key1": "4HZEgEEsh8Fa7ydbYatTt4aGA6f8H7tFLKq5YRSrB6PwvekwXf4Py38do2gVJm6P99vh3G7zUdogjj3ryYEbuJxG",
  "key2": "4mn3gar8G3rm1Cosm9pMPzM4kBrEshG4GyQHmGAC6WecqKYc61uG7TqTMSi5jNPdGoYfFo9qaWP9yfYwyLayPAab",
  "key3": "3hdyBa5KA1P6ESzfLnGh3FxFUXP9QZHXA7QHeusF5Xuck1ndKcmxGpode23itCZeA7tK4uy16GhMN8V2tKFJXDkZ",
  "key4": "QM5SzZS7Efe5ug5XeDj57n8gDHfqEPcAps4asttiK14nyLzAG9yKkMQAqoQRL8n3JwbtFDQQ8SK2dTSVj25iR11",
  "key5": "4SoP6LDXNybrqaYKByRDgMN3VMSGXHrZSGqoV2ngAJU2yArjG5Cm7YJWd9ZUEANispsVZCfuPNMS4KsncJVqL4pH",
  "key6": "5fei18cZBhqMyQ8zma7BiT7GhfQV2b2dSrh88a3mFCt45Jn91fZjshbFRrZdBWkdiy7M5jXfs9jeowgqMcghPuKZ",
  "key7": "BSRNeSQ5ZvQ5JaYQj731UJbqsRfLsxy3vnuQSTZ7b54jG3htkAP69TUhsZrq2fBh1rn2owpzbgYeC2HojCJyL2h",
  "key8": "UUBupM6MG6LbGC5DmNE4LRMWQ3mXYbfAUk7rQyJ5mtcJw6K8eDPShLURir25C1LcusfLM3zFd99mPZAiJUy3APa",
  "key9": "4kxCsaMA2XUfjzWzg4zdWSPsmhLfQ8pSxhqG3xPdskmje3dxEaHMeMXXm7bsk26u79gFsTDdauXLV5x1DxFK9bxs",
  "key10": "4rSFxWskQkoEWtkRLrTRMcTyGWi4Yd4zgRZhLxBuKmosXPQTbX14M8KoxZzMoU3oyHHPo2sCtvaHLAMA9zDCTH3S",
  "key11": "5wB7WZrEVfHAVkp3JkQV4PNgceJb69oCxqQEj1HTrW5ztj4LVpaMXK9JZ7DpZKGMnPs7KuaAxPgooYeGGFnHqQQ7",
  "key12": "26BzoiRfStFTt33A1DeiiqawVaPGjkVbPPZmaFRxNPreY37Ye7WVbSpeq7eHtXabENLX65udseaxXfZ1vhPJ48Fq",
  "key13": "5onPf8TvA2pRUcQruRc1dg98KgSYkSB9U3q6S65ZksizpM8bcfGSBiTm54BzgxYiQGz9bPwtfu8TVGDCu6r7fop2",
  "key14": "264PRaCtWp4NAUmbhTjENmn7juwJVmueQnMRijtfeh4EVysjxioRCahUKsHryvSLaNNAiN1Pmphrq4VPmKSCBmuW",
  "key15": "Xi5DPs9K8A1pUqmenDdmHrejVvpSEdRV9sAp3frST5sTiUHAmoRT7Cot1V4Ewk5PKvRNBKH28JF4MomW5sHrB3L",
  "key16": "t73EamecZfgPJEuHaYR2TuwiWYEiGjgCYP3Jg52KF4oTz3MGrH6JQxGwYf4fwEkohACr1Zueu5PNWHKcfhhBnJc",
  "key17": "4wea34ZaACRMXmqqdvEepoHM6QBokkEx3fYTBMLEJtMDTdB2Y2EXJV2eegqHfNnr8X7uR1BvpuhEb2bddEwUoosY",
  "key18": "uHVR82D4WoRropghSze4SWtjJLgKqy9AmBHhK4u665PGcKBjdusZeRjHw1iCTRogmq4oZpxrQbsnMPGgfHApX82",
  "key19": "5GQpxRG3k3ZM11hz1ssBv4bAxosw1ngYrQFknWEHbAfAoZZtqVtAnGn7ivF9gWpY2Bb29NRWs97dgEBGwvRGchLC",
  "key20": "4GXK9p9Ye8aa1MagecbvcT94cRCZWJ8Bx3eKc8MRcymTLzeYcMud6RMjUxxUT8vGSYAqXoyh2ruFj3XaQz4s1VVX",
  "key21": "2yvqt7pSW46rvgbzhMkWpY9g9b7nrYBFs7Dgf3Tg2NpoYKARisKEy65c7K7j1FpNNmX6wzMCxcLSYvtk2srkHWha",
  "key22": "32UaryV6UYtgdBRiqsgWVR3zvn7uxfJGq6YApu2RCU8y71zWosSPuXTgy2pyWqP8PNyRgyQUtGpEVgQLHpNy543S",
  "key23": "HoVxhG9CGnXGNdYXvE1mSr2UBc2JjUAf4jpegd8r67bSyQZGvMjB2ixgFaxZCP3XS62eddKWptzUZyMbnzHog25",
  "key24": "4zkDNjmYuLY3Gp7fjRRUktjGYohtFfcw1ZMKyDTFYj9BvdFY99XH4hEiU2M1imv68BSLvo4PJzMuJfL5JYbKNut4",
  "key25": "w4N9rsVrC13BwxKESkMnDcMtUyB9fnmFwhFEk7HGY9MRzHNfhvnQzNS15LLcMoeFqTzgjefnGefvSyb22hMhFsa",
  "key26": "5wTTc65FD8b3QgLTcsxWkjKZnrJLpW5c9VQWoer4nQ4ycvsYwaBCESribnD1pCVbeAZrBxTaYCbCLchw9UjfVQvn"
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
