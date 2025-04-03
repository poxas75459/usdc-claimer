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
    "4nx395n4XMmYFKAfCfBg8S2AKj85zm4EwDNkJPcdraCNRcLNZ8JcStmMKGqNv4FyP2NEnsyXCiGWt83viSA13FyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkoTmUShDH8u7YAcQmHdgcKwJzXcY94okEtsREgDt2J413oo4TnXE9389Y5ehfDSWktLuFUDk5vxN5Q9hkbitbK",
  "key1": "45zYofQcpaZ8USt7FbX7gKX6KjzaUBhjNQmywDtwnSvWQH87wartUovKjjRH465bQj48s5SDqUvUBJ77uh17QX3D",
  "key2": "5Mzz89xJeLTL3EpQxWWfzjrtDvXQSEVVAD9zv4cjUBS7h9mSxSddEoKSxdnh9xSx1L1mXkkoQ4Zs5tSKiMMSpVos",
  "key3": "3aumxT5H1FNcaZXQFBRSy9cthJUTHVEvCdewKxYqdn9D28Gnmi8TAHMxp5X2AtL3FwhnXkfDNh65wJPnZ1XSe2ds",
  "key4": "5LG4JYuhfvVBwU1WiBEEgNfVW4Smh86W3uEShMgofJ2VrCJCdrcYnsRTYTwtrLwXYET616DqZ9iphiVThjRtoJo8",
  "key5": "615iVsN46fgyfDyfLsSitWWt6TA5xaqvAmAhvZQgVGHpdoWTuiV4NxMfbS7qWPWMdc9LoaL4vFivvBfqidYsuCtB",
  "key6": "2o6LpTQbfHwscJ55hcLf2fS3s4WE5hCpAnuNVMGsUMQuzcvfAznXywnJyzyKhmedAt3Sak66sZQHpJZkARsPrbxD",
  "key7": "3jkhB6CbsKkeW1Xfk8KyhnvscanccW4X1G5e58M1shHPHDEWUpK6mXKArFcQhs8gPjweUmL7SXSVC8XnYRun7BHQ",
  "key8": "2xquqnZSr5rjNjkM7nGrpYVnjSqxtJ9Ws4KDRPGxHu9i5G6KeGge9VmTerBP8jTTnba1WUG7PuteYQF58WcfNPsz",
  "key9": "61DsfnuYXNr7W62a2T1jPcRKL32tVP6JD7KYWvA51TC6KZyWq4JctSQfDc5WPDP98fkHGMpbuFEkdkQ4iVtBRgm1",
  "key10": "45JeQGtdSwmDDgaZRwPfBK8cxYye6LrVmi2hU5HBsgsGbPHBr5rN345hU6PEY48KuRET3yxRtzYbaVuK6z1ggdLF",
  "key11": "23wnmuvhga7hkCnJNST6GvUHXQRTpnXnZMxDqZd5xsnVPAH85BEheHpXUmyWLSFay18YoyV7fRAaphCbLM9jVQSG",
  "key12": "5j6e8EkLDGBU3jwVeXCM2KtNaWHGiw1BP3bNKQct3S33UUdZWd4jSEa3QoaCG3GbMp7ks6GwPP59qxZANvbMEQvY",
  "key13": "5SGMrHPM9jwr1CFQ5J446fcWZYBA8WBUeiojE4s4W6RKPeMPamsu9KFmJNFjnN7G9oG9fwrPSMd67VaVwG4H2ZK4",
  "key14": "5LESCTg9CXMd6Tonu6VPJAJkXJKB4ryAsbx8WPSLRfR4yERUxTASBruziwv75hNbqy9wmDPQkBArjCY4PEQaB3af",
  "key15": "27H9trSTTd4EgUcBiMVocSY7Z585qCsAd8GdrVoG1D3Trv4iTnvWLNZQLby2PWpmiNmmko2xa2eAD7AjThFob8RU",
  "key16": "2C4R23skkUKuRUQjzFuoCiAVSTwaz9eK47f11RjPezbKQzvrLVmqa2rDkR9Ti9euTnoag76rk94RiNtRkpc2DBt5",
  "key17": "3KTniFyyRC2UaFRHxHCzMXVRo1TMcmXDWXd4effz7w6MrhbSQKX6kfMF3WBq8hk98hPudapBd2t6EdpfUtDyDK3S",
  "key18": "ZzbVreLbdU65UZn5roDghAHuNNkVY4QyUCR2N1e5dkECaLRfpQRtbkDa5y8JVafvDjDgaSwCJ9c8wvF1PFkzpQf",
  "key19": "5B9NrkGfKhiwLBooFqUnQvUgkipSyzFAHDYNoc3N99pTUEnDyJxokbgkamG1Kfk53pis78cgJMCCisB4rd4eiNWT",
  "key20": "23N8pEkLPa8qKs6AELDZe9urZxhoMZxcnRZeyrKDqeCqfNtz2rq3i7YV39MjAxCnVAgWEwXmN9Y1Hxt7pTTVEGSg",
  "key21": "49vLbnwZtppnYYhaJvY9JZfr84qiwWrmV3QA9Aaf3YBovbxXsMDGm6H4gBKDecfWESnbVNHRR98XM6jz9dM7WLiP",
  "key22": "5hg5uko6LCJA8RSAqQpsqrBirQb4vejq1cf7HryNGUxZZo4Kiu5mTuzgoPkfPr7sfxYUPNQeGQbkyiAJGfJAePUV",
  "key23": "3hUCLLTiHrAaaQfZGRzzuQCzqZATk6PvTbThgTCnzRiaxZcKwGWfbqn2YMJzH3SH1Pq3uraxCDnxPW5MzucPTkdY",
  "key24": "3DVgqAiixxSegUeDEa4wYz5jSApkVjP3Q1fxwPMwJJcVHHaAj7Np44et9Fek5a4Zk8tijnddLmhscAB8KymZ3uya",
  "key25": "3Ab4cwnUjuVQfw56jxibdGatc3WgSz6UY5vmmLpZQ6d8fJ53VpURAEzvU5me8hh4ruxxgSiEyYNEoATh5PXvEcLx"
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
