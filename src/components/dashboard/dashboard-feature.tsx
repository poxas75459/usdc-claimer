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
    "3YnL5hppG8hosP6vV4shrHeHAkJGYouNnnseTD56sXkx6uNXra8ybf6zqMa8Sqn6cHH6B72h7ytmSLhjhPY9fbZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tt1gnniHvGysweaJKM9ZbA4ksQfqqSGLwtn51Gi1CFxmYDkHwePgpCWu7Xcdus9GzCBupN85yBV3vHUmodLEhWn",
  "key1": "DUmdCBaHQNmjNZoae6f18LWVxuNB8HmyhJ12phToQmv1BjRtc9BmbiGi5mZeY8dAEDmFLkBYg5pwXTvPmr2V4Xa",
  "key2": "2N9pMMJC651KPiEgGPobA3Bhh5xsBNwxVTsnWdzb8ACXxGsSdVbt2CkUJ6iCW3LQPkzkbh4R2Jiro3kXGQ3tW1nY",
  "key3": "5pEFnMoE644CkkHfqAQkuegS6cx68CTHWNr7GDFuBGDNKY84pu272zfGJ3Fgss25GTxCBRwZ8qfXtjqJDGZDbMo8",
  "key4": "2WMv9VyLMrNpSMqgbYjBJmTZCwzDPgJzZcBtb86mDEn5f3yZTitSpjyt2VCMqPxVTyEEJhpdHKHeCgzpowTK1u4E",
  "key5": "mLH4jdYq1epNCcFCF2AEWzbjNpGzNvtRcAhXi6N6W1z8ipbuPhUjtTQCyNiUMKvnyADwjPdKhY8Ny7x2Yt7M47E",
  "key6": "3YnRgcdBJLuzubTYpNzog57CgPJ4iujHTwKAjfifUNU1zHUr8xjJQKFWrNtN3gyDS4p6fhpDjyx6nsEqoyGpUdjJ",
  "key7": "5wrnUrqH2UqdMLPXdP2nffQ7YgYRPQQvhZuABK3931zARpjHQvMCRNDu1prFJKcMAZTSaSmzcHhEoNWjfJBr7i4b",
  "key8": "c7LVJPr5s3P7oPTLZotoDmjioSkUxp73av3hxRbjxBsJngJj6t64Z78pZ9hDmw1YeAy9UzcowYP2SrEEFLg3CiN",
  "key9": "2itdJYYvVpFdskpUbDM7ri7sUspukvHfKRauajcZDbzpkCwqDkjU5WGMA9VZBMujuyhs68SD2e7y2caVrdgnPk8P",
  "key10": "65eCtjRNPJ2aYW2HXR9ddfiNfZ6Toy1Am9gyjgo4hoXaoV1Tiw3DTePG71K7YBnxZoLoaTkMBmYdAWLTo1CRVGmT",
  "key11": "47WeR7XevG6nNMbm4wZ2VDHvFWfiPyrZWoC9i4pzMMHumQsL8RTpKtECovHZthf83eKTvYiMULHKNtqpgzitRzyQ",
  "key12": "2t6Ak2Q8XbTvLhqzzLbbozHtW1WX59byE8N7jgRZKkw4sXuNLn7ovbjUi9CKVomFacFUZExtLHRAK3KqQPqUqXB4",
  "key13": "2N5nTwHDrLJsGGjWxyEAkWC3wCbxJbMEQBemWTr9MBo1cibYP1MUHZC3Wd27yXxUSMJyKd6BbD7WDqLAAVsVTTvY",
  "key14": "3JGexyYL8YZAxtqncxSGV7FuGB8375v5PeWS6wZUPgtfxsQf4CnB8fwJXvoMYpVBcaPhoBp2H6ahC7KyrzinaLbC",
  "key15": "2SdzfzGT8Vm8DxB6jrhQsbdNhb2AAzcUeFzQnW1ztHK2uUMTwqq212qvYuUZQXvoPw1vYEBWn4Jx5zzSdjC2KEeM",
  "key16": "2AQcnwdoZkDMBdAKvNNSCgkyQ5PuXbgw2K8CvoxTSarcL4vbs2Z948PD4btKTPcogvyDwnYuenBZbmiDBniCFpmZ",
  "key17": "4NMWR1x1XfbkWhgEDtkzSxTNJ3C7GBjE9GVD6pmV5JWXKsanreJjRgpPWhhFYk7NGfRadX6LMcUH8SKngkdzfqgk",
  "key18": "4ikXsGuuBMjg5JrFafXcnUf3TjTk12BqUW2qKYX9ff9GSWnLQJmJVCfCVvbBxfS2ZC9xGbaPSNBei89CYfoG3fAs",
  "key19": "5JEkgVJVzXRppARreryKxt2wgu5ny3EqqrD1LWuhK4XRoiJmsr6NrV8Vh5fq9feHMi6rr4FF2qFjYTX1MbcgJwoQ",
  "key20": "3TRoHPutDcYRjf9f4Np8m3kqqx9ANmF3fKTBFZDeQn5Ak47XezKqWZQ4wugx9TrBgBmwGR9ygFBxE2MKQMgZ41V9",
  "key21": "3dbjeoDKjqgtSQ1qsFEPqiUX4RwBtNzRBJfvmn9WiutaSksmt5oKnTEoeQth7p9mnUGb9NfgeChGJqRjuHCrpDyJ",
  "key22": "47hgHs2cjvVxKTMx7Pc2WrCGswjLJiWfcMbGRPQinhucBQhrEWyT3Upmv2Z2emxicwB8buV3f1PCwe3T3hFK7Ue1",
  "key23": "3WwRyfTMhmSMjNgmd3Tm9ooL94syxdUSBxQnJJuktqd26R7JubZ7PRuboEbGB93cQbjH2HSE96TVszidSnJpNmqx",
  "key24": "2MJLCLMt7kQWfXRHpwz7GcjR2SAEsTVcDDkNTHdwFY8jktD17Wsg2Z8aMnymv6sHA562oA4ypNpeRPR9VvgepMTj",
  "key25": "3QJ7VbgVNmNhcipN6U5y2fBaToRp93cbArXzyxKyxNEKvCxktKeF9CekhGmmRot2PpgLXg3rtJhBPKnRhDAyNHTB",
  "key26": "67CSmgyLbJaNZcoKdSG5gt2SqgnVaku8ssJ46fgSLWe6CVW5tXxvrMPGcEQK6GMZDSCLD5Z9VyXiKHyGyMDvGAay",
  "key27": "dgNxZgkpUvv3yd2uPbkwNmNN7vBkmhS1FzQyTpGEJP4Jf6wDKoKWszn6W5bWQoS8FsMvuKBCAJ9SHsdJUubZEva",
  "key28": "3dkbZYWq8z86gcbcNGtmEWrtzyaG14xMeaWRwFPfwtULwk2Yh9pN7cexhGfJsTAeKSTJwxzV5VLXGQrKuAqL6cK9",
  "key29": "xkg1S9Zy5ZWM5GXTaei1b19SRx3YqJeLv7vcmx7YuPx9YByt1Ge8V2dbUrVnFmayuY7Dtaxochp4CdCaBgTefhg",
  "key30": "39YuQWYVo5rCVx3eQFZpXLg8eirXyZLtJXPizPtSfugxaHeo5wkAVKuXxLnaeor2rqg5dQ9n1pTwmNPEC61eMeQc",
  "key31": "3XxZjx6UGoEWtTZ4WUVZ7w4uPQeHQDPqVA8ERgfvWFbXo82fc3MFc1oWmX1FuS8wxNb2idNSbB7FQy3NU5gcFuEq",
  "key32": "KszdN8TSXgJoG5VidXKtZtPW4HpcwntjehxFJejPmTTxab6UcHj8Qmd27tEFeFj121EALbqLud1zjj96HJdR8VA",
  "key33": "36dWc6hsmcrgNSm21yYTrDR5SSDcy6Qe84hhBuR9tV18NEQoSaxy1XFLggKCqwJTW4MujTxeM1tp6F3mqFfYaCBr",
  "key34": "mPyZP6yZk9zxQhqTbHXKWRj8drMegzu27Q6H2kCAZvTXxcjs3nBz2y9jKbWPF7ARpaEWzx6ber2y51QCFRnKnmn",
  "key35": "3f8AUZdRw6TeeQVmxEcj9phAPvpcDsaX4fpg7NfqT6F6kkyU4W6vSvZBAf8wHWAT5eW3gjTbrwv2j3EDCGXxUMLV",
  "key36": "3RrQdtbYF8XbbFVN7hBhD6JrHU6ngusNGDRocPzc3eV3vnUBnsAC2Sw6T5D8hLFQT9rL3bn3fDss427iA22pjk8j",
  "key37": "Eswr6ZHJbc3jSbjP9FvwVFmJNDvAxgSdgAEY29BGj3GgncCw1uTF6WF5Gp3kgdVBwqweBytv3UxxLEk5M27bxKu",
  "key38": "2ysy3LfWcymsrqCUnpfD9NksVkXYSN3Ve4wJUiKVBfLjCKJA8LHFqJzGGXkyDGGV3XvcJDJUmCTJcgs45QFCYny7",
  "key39": "4upronfNPe7cpvpALqv6MFvAMKfHPwNoRncBcXPuukRp66QVR5JUqD2EqU6ySRQi1qrk1XXjy8pHfBjuVHVMcjYm",
  "key40": "3iXtxgMJRCFz4PWkTcc4HMP6dVJTRs3cJ85j5v1PacL99LFMjXh9jJsvHxKXLUESpWsimGwNBGDraUisactCsKNH",
  "key41": "2J8ywNPkTKb5oVuUrB1hLXu9uMVKVRJ8vWfFjgUeV3GPNccCNN3VDnFd3HjgPdMSSoAaAToN2RMXU38c1Pn9VWtT",
  "key42": "4Uuu1qsAQRZShxX3L8k3yBPmii256ns3e5wZAestmPNKqdRSYmddPXyDtbZYexdXiXBdD9R46qWoo6wgyQ7zGqi7",
  "key43": "56ceHjysscqv17p6b8gBqb8tuWfqC6UdNYtUj6yjgeqA27MaPH7bptWR8JsnoPHyQ6VFbwTthZirRjustrAm11Ks"
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
