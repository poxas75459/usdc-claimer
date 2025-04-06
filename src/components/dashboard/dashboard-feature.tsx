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
    "3yVfQoJPWX7Lw1Rcxd4aMbXGej27w8AjecYi3Qz7Z1AtHLYC9XoBCvJAc37VRon7Fv9m1A2LxSY1chtVT4Fq2rzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RbF8vPxbuA79dmojKbs5oWcX4xoQ6g9AvawRBTacdTzinTgqyfAZjcmbveCp5842KzE6rap77YsRZTn8cZpz5Lo",
  "key1": "4AWhS5umBTVwhcaeZXpdRuwXwvQN4Djv8JgAYaHh4AevTZ437eFnrkoYMKrBRZ7Xtym7ATLYAxMsLi7Q4LVnzknP",
  "key2": "46W9WiPrBTJf1UMrNseebCPzhsVxg2Kna9XQiHxdxhAxn1ie17SiGunSdNihNfdoPfssifd8P56dir47o7PkCPj5",
  "key3": "2s69eVeuC7PxFptddDWSCwhuqQAY42Wg5hJT4KcX3PtzhVcSnqyiLVSYsLJTkoEzex62az1ufJjpSMKQZZS6eSpA",
  "key4": "5pM99UcE8dtL7DsTSA5i4xvxe4oWFEZbTzrmEYeyveoNLbY8vEsbe6wxxzqs7DTweiU4xAUr9d5BZ2EfYVEH11aJ",
  "key5": "5S2i6NFqhtXRv8Mjkmv28hPWMhiRrgwf7QUx63DQ3HPLaEs6PLj8JThunQe2mC7JiRBNnqheadUqKTT78b42MQtG",
  "key6": "Y7JUxbcNTxQK25fMetKz15dwMU3E8KvH16mBoKNsK37zJ7vxEaK3CG59EzWqUxPXTYB5hji6Wq9ARWh3kNauZEi",
  "key7": "2fSVFzAJ8cj698TQwqEzcVHNzbtXrQ5XX1b34DNfQ5wqs1yQCwFWfepu5h3YCVEX6uM7grxD5rnuvmBevXUGGgSo",
  "key8": "5vgC2RXe3zjT128ZRffmEHKbJAfvibwxjrPnnFdJe621WQkYcfHT6QbxE9Rdmg73hynTfzFzfnkjDPFV6oYE29Gn",
  "key9": "3pWtiTy2bTJpAcDKABiezVfoPcjRrgBtKLbQ2T5DuHSaGisUHSoHJXqExdrsaxr2By1QCMtjqkywEsyLxdPbtQhH",
  "key10": "62E91FngfqWDreqUU3dQg41KyF9PfXbtL7dQrjW1KMpYfU967zr5UAfGrA9YszSc5nHf3VKxdAbsAJXn7EvLMK4X",
  "key11": "3boXgBQQv1MRHEpoisW6i5umtPV7ku1Ez3rnrZTprJRf7LfP6K5Bt3uZ1wNxWcFNzsxJeCWYaR6BCEso1QEGDJ7H",
  "key12": "27sWRC5tYQpgPRC9jCowhYXbXxLY9AA4diS2NeHfnzmNRbx18PqcGGrTDciT1FsYHaSaERve6H3sych5zpmjWDBA",
  "key13": "5UekJaQKq4r6h8H58uV4qaGnkhAFt4WriFUmJA3ZbxkjRrsFChxLCsEMV7w3f5nj4ScBbAE9oKfZXfFZ7ZBes8Ee",
  "key14": "48gD9DTa4oWwNjKpDmzmg6Tq6UVFLKzzV4bp2VTdWQmyZxYqfHAXfXg4LugjvZ1kux13c3Gzxoie1qSckHHEuGd8",
  "key15": "2GiuHrDKP1Sfuk3o3GWwm7f3xhAEyujFQQLyxuU21Uo6Cj5o9Pp2nU5ZT4sNfWVUEkauZkJ2qMUDmGsYt8Lwwu7s",
  "key16": "5i5uHFsrYYsf8sJUbJasbJavtnYuGR1C7G1fFWkhRWnGmpoK6xb78k8K7FF8SNAJLy8YyyRBLMpB8P13TS2ug7Li",
  "key17": "5GBjQNafH2fU2gojMidxayU8G6piBMPJS6DkoKVpVwhbr8khpsXrjcE5m3vd4M1HT78e2SJihjBELjrpFCqtUYjh",
  "key18": "5EVDTuQtzHws2LWXq21BJeqd2s755PWMuVrv9ZV5hwQFMxNJ8CJXwji85VdLpPDrGr1vJKBZKUvvoZeyDm9bASwm",
  "key19": "3Ht9uorjZMXgxyDreFdrhcKR3wBmQrj1zA1Ff3XNVtwKxPWW6ah5hZ2D1tc2ngGKKRNttaFYaZm7k8nc9qMGtzBp",
  "key20": "3smYqY94Ec3YPQ8oGcyozBuqrKmrcoP2uaLeTt3FFvV9ycm1fyBrVvwdadU2Vo5b6DMNdVS2XVCLXvtn6WqLG6qR",
  "key21": "5YHtJyuxVBvMGPYkGxMeK3ALWYV2ssuY6m4HtKBPvZLfhuJgYauG5rG7AzZ37FqLguks7jLZySUEbPfoj7LyXdnX",
  "key22": "5qyyyxfgAimjNwnNNtVtAYCA32PaatMtiZgnKyVjhkGKcyV9t9G2MrensxE3sbK21iY3BBry4STiBv1ZiXAJRCcS",
  "key23": "5TVCvszSVE7eSmVtt4PU8kgUdo67ZcdQaBoWPNzmoayBij52q16RqSBPi1a1Fb7PjWXh1p9RYBE2VH7MUmVGPQFG",
  "key24": "jGfKDzMexeyHkaXDiviJNTvYq4zLdovBshTqz89DPA6gfGbND9sfhdUk3RdmtxC33fGAkDGx5quUDnfrukHwqa7",
  "key25": "3r2dqEoYd972CRe66Fgna3mL6CuYaYBx5PgzsyYqFsPW8braYn6rCGhD8FXxpHgQLBCrid6Jo5SENXDn24z8XHWb",
  "key26": "5j7ZvNewCM1ioy7Z1ZiVE6kNHkTrPpcHh5TJCMGtuHBHBiC2vknV65TfRJpHvrWuyJPyoxb5Cx7NHXUPeerBz6yF",
  "key27": "jFUbHwiojFyZvnwfY1j84wf3j7Ljkpn6orw8A2oNdwx7jqrhUHyEqFAsbSwiHE5zqbLB8wvSEJu8ijrJRvVLJUc",
  "key28": "3V9ScSbJ7hKt4ZHZo9zwUwN6bf1bJoXeGRScqhx6CjpaHDgEeUnGG7JSKvzXpVfpyeMRLhXrMtcyWb1TfsLHyFj3",
  "key29": "3rUuQbsWW896bPSDppg3r6BwrEtcMD15ZuSutm751zXk33dFmj4PVJEZ6ZpuoQzaP2wdpXH5UrBi8toGbjP9Gaiz",
  "key30": "4Go19sDMWcY1Hrc6VcQsZYyddKMwJHhkNNtPHVizFTzJRePH3VyD4SyKidxwVdjaqQzgSPtp1o3VdD257o12mmMU",
  "key31": "d3w5iKEiZC2iT2Epg9rt6kJekvbGk8YFrgF91qq1utbde5mzTUoGEu86SjihZrpBxDjUczTFHnDRgQMv5GgFFSk",
  "key32": "K1NJv9s4opvFTdp4Bh1pJrSxrByNfkWw2DAF7e69oAPhKLug29L4wk49rCEpXxSEPnKYhYjJd4mTNeJe77TcpsM",
  "key33": "3vHbEY4dWTsuqNChYvsetqwUaam3NwSvnrukzWN9W343CWMbvRKhhSSeKpvoucwoTBXVQpnWqPgzcin9cQAwjL6P",
  "key34": "24bkYaqpQtPwAVi5py9ZcTboNYwZDfwPgPpF71S8WLkrrds53HG8yrsTXhWM4UEDbGC2Ez4Y7KKvchkvwv8Lyw7P",
  "key35": "3o1G2nZCB9cP5L7AZdGtA4Q1ywwZgvv8S4xXadajx8GEXqrELH3mTsFhksZczRHwJZLP4yH2eQcwLMff574JjMcG",
  "key36": "426H7HcKu9UCAE7ugpQn1ZyCQn55oc8uNz1fBWsrcmigLwdFittrT5wrMceCK92A2fQJEpQAxMdHLUqDgrChaAoX",
  "key37": "3z4yfQfGbxAw53xz1xoWXMcWnrvwxLpAA5jTguwGSNTCetdGExHDt1sKfmwN8GcQ9txpDqq2v4XVSRHra6jniwcn",
  "key38": "3Z2Z1Zi9cWRijMUJ41okeEsdY913CJB5CUHCzt9nebFuRB5m1oWpLBxKs4UrKqDx1XWxuUBL6sJmVMjraUFY2tLw",
  "key39": "5XWygHXY99XGgA1KFjUUCvokyuf5ekgk1C6KLKArbrCNkssK8WEuGfvNqZMVxyjnMQJP3xsyqefcaK9fZRE5aL9q",
  "key40": "3AHArYpRnEn8qHuS8j3jf55ozA9wEjmiu6rY5DBDCYjUWyEU8yRVLrT2jiLRJTFNAVJgkD47tChXBZAJTNPo9eph",
  "key41": "2onrDgvKmsPUTQjMXHW5g76s15nKTDhYp2W7wKwadJs1R9kMBMxT9m8aVheT3UAT76toqhQ4zQpeGjGybs4zJ6mA",
  "key42": "4XkqHWLfnPDnaWoyk6co5j3xya9aYQ8JK2uJW8SNSCRhSN5P1TPp4Uc8w6imp1KcSxQvhu2DZZQ1d51rQ2pWLug1"
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
