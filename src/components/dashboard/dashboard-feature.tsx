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
    "4gAco9coFFNKd9tyYgXrRbxRtd92Zp1NNej5jhAWky66MzzaYgCt1xGoXy8rXbmTe65JrWNJghWAbhu5ohT3dUY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPCFfoVV66wETB83YEanud7PZxYcsDV62mtoqr5ghHLrhQHPKiHEuFpHEDBZzGLN1SA2ho3mD3CBpEHYru8z1hd",
  "key1": "eLQVDBf1T3anhcw3aujeCpBLW8WrSvC9x3Vbo8972UDq3G9hSxBiDeHVPVfeSJovqHb7GFrRjxW7VU95YWJ8EsS",
  "key2": "LPBufHTveUBf3rohQbaWACaHzqCsb4mfFXaL4cc1ZzByZPixNnDrH2b2bbbpfub7qU3jXto9uJ3oki5Za5m6MJN",
  "key3": "kUe6p6BZzSSCKP9zdCNNqdKBVoQtjcpiuXbnGxj42DyKHpx7zpgQeVosuuXRFNwTL3vyDSGMy1ZiNbonuiWeNxn",
  "key4": "3N4ad1RrcdrVEvqWecdbD7iN9RsSbMZVt1tNfcY78jfmSbPUgDAKVR7NbttkvcfCG3yYykKsHKprGrJzMMbWQg1D",
  "key5": "2sBpxy54hFdrKKa3CYuv4HcpjYF4nwHg6uT1k9KyP8DGE2v6cbQjHDMZGMp8QHuDwzZcEiJy98mGQMjJARyBz3Lg",
  "key6": "c3svnwRC6TgLnjHMDsk9CEbNA5vtZfbEYvGwn2QydSjUnMdQkQC1wf6KKUdPGUJRA38ze2wDcNSQcKLwspYngau",
  "key7": "4uYRcLiBdXfCEngKh82xfQUZYnpPS49hS7jvgXfomFQ2gW7L7dTuDxEXfeqAvM2gtghwTdXFKP88xcwY33V6noQ1",
  "key8": "5Dx2GBw6ACUy96B2ZkBJeVHRH91gyafS3F7WpyQxtgfGJVJDuHppuaeWkat3B1dxhMbaHUkijsRmwTq4KU5Tpovt",
  "key9": "3ncMh4XXUyuhFASzSjrsKcGs3Y7s41wSbbWZFHdwUxkCUHzuScoNDVpKvmwTevwm1Lu4cL2dhgJQE2ebxfYyYw9d",
  "key10": "4CoXXGXenVu7RQGHCeNEyA4urtFj9jpJ77fi7WjfRmKvkFRdDotfrqxLBFrLuQ8uRxEwKTMnNtKEKEUxBwBcjRGh",
  "key11": "23uEWQKJbDXLo3z7HBf2srQADUvrozGps4KkGJVt2yiRPMrajCht5KJWAcf7kRgcQ6HtVTa7qURV8VrN7L9RJNLY",
  "key12": "FWPpzG7dAnK5TNPUTfvYK43K8M8AdskjbLTi3VJQ1XmDhH6XZYbVuLytdPsCZ2E3dkBQNP7WebsD3kKAHUxhrNc",
  "key13": "4WLfDEWggxEVDdXHpe98nBidDmKP4Nq17HvX42VYic4tBuWWruuj1AG67AyunecMRqpecmoWAHxXz5SdXfuUFY6c",
  "key14": "jyZrmdG1sYuarywrsPVcgra9hvbvmuwoHwf3WtyR8gpe9Xvqs2sXzoVtjtroQfDHh5gWWYzjDC9zBRF8Z8HQsLh",
  "key15": "2gssGiFPFcWkN2HS2UCgg1HZAopWHinD65Z4RJFeSXHnSVZTZc52rNs959RosWcHpkuSkuCK8koN7yVLU5Zbj4hX",
  "key16": "33fMo7eWBRqiaXqcpXy9dACyc2tk1se19wyfTUcfPzT7SFmhQTjKFb4AXkTUS7tGbhBA93xNXqgLDK2QP6v2dDHE",
  "key17": "3vxqkXkC2KNHYbbFUdxcMNAhxFK7kHn4fsLFy8ZSfZLeXaraYnHNpzm1MN2Ydkg1BjTtXJc5nTyt5fqcAydaqg9A",
  "key18": "2cB61XHzPoWCNQnZ5SebA1LhC3e6wUWS6yXkT71tCAPV5CHGk6tBntUWcNUdoREBLZ5ypyypdvbQDE8evQCGyNFW",
  "key19": "2Xu44qz8TbZkKW4Wec9e2VheLmp5kJzXVtF2AbNqr18v53PABkSvESuEs1foCW62gwfVfPa1d4CfkWYvnNGcnYpB",
  "key20": "b3s5pZi1xzqPV9PuWskHHpHKLXEQFwkJJMoBteAoUZYydxR4WuLLhjSaVPWDgiaQHdvQY4C78c5cpgpZ7U9kUQ4",
  "key21": "2imNjYrHbfVmcrgKoc5S8GQK5J78UgYqotTAFTfKdtgHaD5CnyATFBKgruTXu4ajAaCcwZThstCoxWiJDBGKjYEf",
  "key22": "3ave81tSVkyLnwZQF13bDEB9P66q3vr5W26kvmiFjXwtA7ZFRr5MXN7bcnpNgyYHBdZeqzqy7jRSQ48SqhvyvCrr",
  "key23": "4ZBPsXw2RpE6Wr6KUiKFRoihG1UZdTXMvJnMyzmXVGf5VGcNThmKyinNUzn2Nb2Ww3mYj2WeCSb7AvpZkFVT3umW",
  "key24": "576TsA8RbXe9sJgwdhB9d33XHV7eMNWT1s57A7Qm5xb7ijVXAgezsiMTQchGC1h1ojq5x9P9Jye3tep3MYR7XNkv",
  "key25": "5JGDETPgPiwyVfpWiCXhwLBdNH62kizj6Fq73BcSidxXEDbNxE8J8NkZ7xBWnFnDVksxdCMj9wBRp163VZP4q3VG",
  "key26": "4vqVbm4b1TUXJefpT73572Eou6cjbSTbJaFvDTGMsZMgJLgCX4ZMAfUJL6ABNg7kaNFaER419vJ57LPqXtP4qfKw",
  "key27": "3SFmyPoAUiADP6XLecSpFPupRnjrPmaA39gRrX43EoidgenvwgXWvSgaWsbBt8MV5rhCwgZVzTioDQB8UM2A1Hvn",
  "key28": "3odH1TQMWX69a71ERsNMc5XSuK6TBHiAnzLJwEY97s69nrnU9my6Tq3WMpeHEKRkVvQbW4fhxhsjApv7riAYg8He",
  "key29": "3PXNqTBzE4EAFsGxtxsRYckEAQ8tZ1cbmQd6gEhsYZmdp4LiATT1Y5ca1GviqpwpPPPSEBRuTH85fwZsX6wCPFEu",
  "key30": "HSCVWXSo5jtB46JawcXHmQmjz5zRocr29MFcJ4Kbf8udeL2HVJrVFVjGR6nivyn1AWtaWjeRyh3QEyb6wvt4NKB",
  "key31": "2kiEeqQs4MtqH8ifHpD53ZoxkswYdnC2rbPaxLnNijkTjZZ5BVGNd3GcQ8jPUnYyy9Q5B8iJcKQ6iDU8GZ9vePMq",
  "key32": "2h4LphtEPJf3yC7hEBQNx47wDnCNJFkE7whL7F3a5Q5J8UR3jzJeLhL1d4TLAnG4DoyDeLLUGMd7JfTNfSfq9FUR"
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
