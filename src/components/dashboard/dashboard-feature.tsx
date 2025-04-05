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
    "4P1XS9jsaTfNXLVTeiB5NjpStLekAuiex1Ufb258tT2ajb2moW6RbN3VUwuqsvm4wKiAU3ucKJKr1TJZF85WET4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hgt5vjjngcNPSYC6vnEvuawUZioEhAajEf3oPL8LbcHuHcCUrEyXuvkdFSC9smneCSR5AaVxiB23XkLQFfNuiLq",
  "key1": "5XburGaUQwPdEcvL2MjGXDtVByNGXciWj1U34YhJmUpZ9Apn8CRJR47xQ3EQkBLPmaLAE6PzHHb5rXensFnevnmY",
  "key2": "4d7Co4QATcJhKZAi53MqHoMitPzptgUQfGjNQ2Jd9huomZ2WxgDAFxVnoVC9cxrJMtn9ZfGjp3Uvpgm7B4Hvfzzq",
  "key3": "dh2KAbwPjt34uy1UcdChY3hF59vMSt4H8MGY8fcadGQ4rAM7s38SgT7F2KSmGoGvDTo63U27zjHwRKKEstuES47",
  "key4": "zHV4BHHfSyvYjRKFikSnUr4rgRkKj31hPTH8Y4ZvV9c9BbdnMN9sHgSqCj4XPLzczbgUDomcrkpMuxW6uHADd3F",
  "key5": "5Rue1Qkm9Njjp5KSuZ5wr6JCF7K2QDbnGZb31v3hdBstLqjh3iXcfjrVWY8MtoNvLXYTDEMcn4TCFQUsCFq5bXdk",
  "key6": "57mkcAKqctw3G4fLnfSjWFQDFfRervQVqZPCL14boMfMKsAEg5XdkvwfZeNnBpYZPTAfgD3GsGHZhMUDwFo4fY2i",
  "key7": "3F5QYUwD5HUDdFk5iLCwGgPsLGPYToNahWa51TZyUqt8TvoFK7ggqK4LXqTuboo1kAM1zs6ELrMjZ1ZocMWh38Sg",
  "key8": "5W4gdDMKbdUoFuDQyzRPkZ76iChgJa8sY9835K7Qw4e2mWey2KJJEQX3KzA7j6EJVLWzhFZ4iHsx6K2sWodMHKoM",
  "key9": "3A2tvpXusf83P7g1BbN6c567e8EzaGdox8kfFLdeTkzrdgpjdvnro2GxayF8dQBR5bfA3mjZEYPH9jFizR7WkzrW",
  "key10": "5ect1s4yaUvEshUrVznQdNxdPGErnkwWgtbV1EyLsyxU9PX2tuTzjtiN3sodrEWp57tsNRrPUDL43vHEfJL7vHF6",
  "key11": "2bBwRmFKXu1WG4AMrm2p33yEs2qNFCdW6VyPmUXTDKE3yg9JWesjxBSe24aexuRu6DqZq5xWz9RZMjFJ5o3NM2yi",
  "key12": "5HqyDGipsxCvbJEEGZjUkhFDhTMfYwZYbzddmozdWrhAfAJjutz45jjqFPrPuF8Hairdfr2xvaWUH2oGsU8N5VQb",
  "key13": "3Byt7h6EizDkzd7N4qPKtgNTsdNLfWmFFKihcNGGHr9AGxa7KfADQY31P8f5GFAog7Douigthor1KudR77snnJjy",
  "key14": "57d3rbG9YKmENSPzpyLvHB3RiUsfEfQfCmMdHUfu6r7JtPYDL7sAXd7KiiRT4JA4KEAsvihdna3cvAMY7XStWqsB",
  "key15": "3wf5P3Su39pa8NytK69wjnrsXkBqZ4AK3Zgf4JzbGq3iuVQGX2KkPuddKjh6ZyZ5XhLPPVaWhzc6KVy6SBQPNimf",
  "key16": "5aMr74pkpAs23TaK6qeLDAq76Tywi6vcp32jthTeNQYZbesJBtrfqTJGKfd66rCs22e247ce5Xvrxy2UZeosXJ9F",
  "key17": "3yhJ3mD6hfQafKFisnDyGJ6nwdRHk82eMWtWEiSqkmrUkqHzfQGhLaxZTxWircuBjZ7wnyJUuVuZXYJEzST726RX",
  "key18": "4ZDqFvJUV8aHbapg2dwVWu9eJcNErYJhtSwxmddnmNePg83hGwRPTw1QTPmwKyePbBvMPpiY1VP9aVACaCjprtum",
  "key19": "43o8W6nzbzgSvMnHEKVSrHbLsjQQaXXo7XBgj3aq4gsTXtKVPWWkEVA2PQzM82UVdpqFvuMss1MBc76v7aM6oSHP",
  "key20": "3SiihPMNC2WEASubXAiCVGtJb74wiRyma7YiEAQg42pac8GQLSZzmoKzfRQ4uNGqie5pd118N85YuDUni62vM9TM",
  "key21": "4uhACzWqVsfHiYsQYJdgva4xKAVU7eY4AHvVDHuVj1MMbiY7u7WycqUArsGvTzEeDAYbFbCnfrDRvjPcxB8tie3R",
  "key22": "5qapWKgxrUbj1dL7mvicS3WyGVQeu87hzqnvzJCsBx4SrPEqLgL1EwChRMaVsKqsyZrP2WyD1NuwGQFQDsLZ9zEL",
  "key23": "5bvL4kDhfjKBGpyEksmzvz3ht4VizCx1jiRtvXwnajxeQmQ7PdkJjJ5iTYUo3tmTEvBjjfCt7s3R4ZqRKh2Km6ZQ",
  "key24": "5Yu7K8FkjE6wafB3wRbYnyhTDM4VZuCnWjcdGEsHSPic9WBFCV6Xbk7ZMMZVKyuN1rqtMSDUav4riuZjXUs1zo62",
  "key25": "rTxR5XnSCAC6NTqsWAjtjzZKZVvsSFp3fwY6q1pqBpcAVRN7GYeKPFP2smik7RPhPFPGbrCvWXNLPNkj4qkXbtg",
  "key26": "4Ah1dLBDd1ca31AdpRMVD8axgidix2PFmN4iMNWqs2wB9dgbpg13gca1HdyvpboqHR9fmPDGYWmwcbLHrhsH8MLg",
  "key27": "4G4VfRPqYRjxGvRN5mEqxJcBYenTpXgSJthKZbZGjLJg3bvoATpeKLm31BAu8X9Ly326UtPaPh6NGLhd3z4F1EQk",
  "key28": "5TPTADTvSdURNWxXvCu3ZM82i4dTcGJPciUNXHTBP3SajeJgmwaqABamoGs6sqh7yGD2XLJzKxFNJGKyby4ngWSG",
  "key29": "5ZWn5Z1U6ydjVND38mnPLuc7Ez8MQhM7aTxSAnp8aio1cCNXGgsUsbmpwwbLyNENk9jqoMSP1hqPMNyt229SHZGe",
  "key30": "4HuLuMRfmcLHDkCWmbuCziiq33oKnJa2pkM5pJa8RcpKA26Jz5bsBH9tUi1rh4Sa46JR8thwEGd7Bfb74h5i4EYT",
  "key31": "4LPY7EKZrDdkZTuLhTGbLqA2DWovM8W4X18kexKAbmzqDMRZd7dp413PbiW3SENq2Y9Ph7fmNeTmVwpm11JsfJUd",
  "key32": "3eqTQ3SRcTX8unE7DofWtx6eQByoWGMqV2xQwbqRfpfEjguQGci3JXsGSeQwuSYVa4Wjr3ieKyzd1CT1LviurY7P",
  "key33": "b5zvTZkGJ2ZZMsGb5WksPjFwDc4bUQv7SDqPAgDsJNqGQTDZBLwqYp8NCCEqjyMacbKAXSz6rgiKPCniLe1NLg3",
  "key34": "2A6VrNVmzA98RfDgYjzxuXzXnY8SREheAkDiTujXKDptFFrNqi4HXGKMgdM8dhZyyHgR5xRokLFwJf9zcZN2YVeT",
  "key35": "3FMqMnK31EDMed8iHMw1dACVL8r96yw93wpAaSinUkSjRQrUzrLAtJbhSTXt6BfQNsirMvDZaFi6CC74ep8989E1",
  "key36": "2hsofpnbeT9nRY2gPb2tHCWHvswah51fcnjGFdNdhAywX1jivHggkmogF5383HB9oFoLP181ND3GZ1mnDytv6q77",
  "key37": "22hMe8svq5g18RnYTBjrkxeDU8mP3gpr16nkyUcu2isMsxjmDXFdaAThxkABvjNkE7jnL2Lm7XQdYPogWM1tZiKk",
  "key38": "4SBT3SVWJFWUKdd9m8iwyURUapobcYGhaTvR8M8NLY7zG2gW3a8gYiGLbpvrRkJF8VNTfxBduZffP34pFrvC7G3N",
  "key39": "63uTxHgjTULhug22785bpPh4Du5w8QqzEGnEbqagxSsv2puU33u3YCDGBAqUnFPsVJoR9mNoiSaWsgH7r2QbCiUR",
  "key40": "43UGwnNQXctnWBCrECAaz8DtdXnzAVuwsWVBF5mXy57YgdAzMS35tHEemwdY2DgmCKBDG86RqxrUQwmzJNHqXwVh",
  "key41": "4Ep3ccmA57eeVUegDdB8ceJrvhdh6qNDBBdXgpNREJyZPCnz1PagBPHvKJWYb8wbnHXwEyW9iw6JAB9QH5w19ZLa",
  "key42": "4m8ZTpkVwUSHPVxzVWhKvKonrsH9874YucTZoZZXRNYPNZhDPADhQ8ZyqxYqPsoiupNvVVc4Yh6sLSbVD6uN3Dud",
  "key43": "5ZHWr5SiMh1KSEgZCPFfJniicVysA4YCDkfC2fu9v5HLnRtEZd4Z8pNPDt2Zrgb3iUi4mHk3iWAciSB6h8NvrKS4",
  "key44": "3u1McXyyFYNySxxMYbbLwAavENkZ43XM6npJQYYf973CptFmMutjEgHgJAW1vX8SPLhpRehTZotZGdJu4ayBHhWZ",
  "key45": "2PwSwgvwVaCQovZPnLff64BkaNCFGbpvT3uK9wsY94uXMCXfGoGTLkobZ3b3bCkb2q7Pk4oWqHudQNhEuDKdiSwr",
  "key46": "5Vh2bRjzTbNRVgjCjVEgE453Nx231zEEZWPnxeaABbLUDCKqUttKNPGBpPPpPMvCqgcgzJDf4x1GftnhvMcGYDM1",
  "key47": "oh3HsbkVtZaBGdB9UJRaMuLSZaiEYmvNVVigsRraZqgMtW9vX8bE4Hy9KBFU42Bd2Sk8J6AVVxW6bgnAuMDXoSE"
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
