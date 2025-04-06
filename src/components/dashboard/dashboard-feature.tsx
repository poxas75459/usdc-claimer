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
    "4WiP6LnK2U1sGjMoeTUd3XD6WxKNueTxmPtsZWcposY7FbHF2BiDk35tdAauhcFLyqom3iSyp5gXjfksESM5iAyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2EVm54Ao8SPGq7rFRzfhvSyfHfvoKDfjo5Fasdmt2LQeCxYR1mRbjduNgtEudPSCXwNCoYs1JX9zjGf9BK4U9d",
  "key1": "4DoS7Y6MGHG9nq1kLhPSbPtCn58RgtFTBRcQyVddVXebdNuqSTdnGg6BnW9RC2buLgmP7od1kzRum1jYGUxsYpkX",
  "key2": "5C2wKoCScMTxVRi4V4iy2enutRg1UjnFCoEp2KxyZ6yWMnwmDRZsq9ZEiHFEWhwQoniKxaDMFP433ng5Qpikrv6D",
  "key3": "37VybjGUdJdSvSc3hNcK8ZFiuP9XFdoDgpeyi8sDDcQEVRpHKWMt4Vf1N83jUgwVvQNvoG67MHH6KkhhQNCMncUs",
  "key4": "3gcGUgnvCUPfkdh8bZdGCVdFovD2dpiByCEG3USFDBa1q8D8mz5BiR8zsghohKYFyuEnp5BwBtXmppp6puD8Rc5m",
  "key5": "49G4web9dunqqvA8mK76ZD8f37qC4BUQYMHjtkDcdSh1RXr6fB631rryb6u2qGYLYYRnZTRjPpyHVbboa63SRNbN",
  "key6": "odbaXuMriEmQWCUE2EFuhS74CEExQLSgsGP6Ls4dAjG3MG76VckrMoxEM54dqn6hEj79ufUDLaaxNy4Se4vtgZE",
  "key7": "2Uk54zqi5rDXhrjHAiyLi1fTq5n8nnDzT62k7Fn1u7n6UPT5DZbcsyExPNgKNYLxshVHKLLFUd1Hw1tQgw8a27Wb",
  "key8": "2XGuTfwAvkgTTttPydieP9nBbs1AEFTgRUphiyU15coKWrVXMUPFjRjs7sEHqhvdo3ptygDz5oByAucCndhBsSiE",
  "key9": "Hmk5bAgXqKRJmJnANnaTGg2jgMvE9P5iia9nM8RXgaRLuD5tP9S3UyMYZasJPbKaLNWF9ugAFTh59arYZgdpfs3",
  "key10": "5tCVheUJGAhWP2HWQKhqgAn4oAiAqutu18Xgxm5bFjxnUxLuV16qz6rmSEagCxjZCaaDgNtxVNEH8iZPQByfdd4a",
  "key11": "2S5eL96xGZYi6vzr3KprZe4kXoezxoHYZUDrQSB2ZRq6sbpteiyTmWdEFEDvKqPCcyxKup6XHisnhMC4qYxtp2RS",
  "key12": "eai9jdC723FGMHE6gR47c6Z96u2V9e12SXJBiX9Ha6wtMmaThbw642fkSxjdGSPDYstY3xBxuMA4WrjH2zhbFqx",
  "key13": "44EBss44fuCeCoPFx37xZHoDR1PfUdzxGnk1uV9HdxzsTKYzCi3eEJio8yEfCHyKSZA3vgSjkmQQZLWmjBBCQgxD",
  "key14": "2yd9v3y1KAxZaP7brcuGdhNkAahiPppDHb5AqKMb7aR4647RgARF4u17mfeZejHRfSaMoapMirSCddPzhsjr2w4o",
  "key15": "KTX7yLtPMHrDhPnHhqhGNteEvp7gEZ1yTdCUdpq4okpXWrHhF4EnrywsMa4b8N5D2zU6Ex6jGAqCobpEY9ocARR",
  "key16": "5SnFAgPsimqSnecLuEdxh74BvhKM65bsKGNJsuasbUMgPH5SW9kFnPb2mt9XAXAMT6QirnGFSftdzpRXL73x9khm",
  "key17": "5mKEaQC46wpTUyRjGjSuzuJhLeU3S18aZY4PNRJPUkn8JvvvMfRMpHMe3XEZx9M5UsMaH5Mn4PU7XBxCVCHfAYtv",
  "key18": "5AuseMx3HhJ37gQunYgW1iEJ75kzwPNgnfk1cU8EwZVEm48tpe6bcHRd3NCHVNv36MiFjjXeQYE8oYQQBfaKpvhX",
  "key19": "foog3FuJfgE4ncyTSvEUM5vkjLY7DASQYPbqB8Lu6zzfssUZY11USyXKN4t9CB5o5zLT4HuHjyCZHYkdKi5uGdt",
  "key20": "62mQm4iiEcdYZ4WBebXnKwj3aAEKUJ6hFGeQ5mdyhCuGxtmuMvrqueJLTfLiD8kGKAAo7kdp4Z29R7CYmJHsdW8j",
  "key21": "4czGGF4iVxwUE2MXgCEJGT9fq7Xfhn6RtKns5manDxfmSsmK5yj3PFQEpxhnCPynSExyYHoqtK7HS1ZJSrnzgZXU",
  "key22": "qgFfxnUByU3ybWmkoNhLf9Tkv4etf3Z27MfLiDrSh44xPoq7d6UGz9ECN6xMkbYWbyAWq7SExQ9SyZqqD3yqnrG",
  "key23": "yZxGbqf7L87doLyH2WTp45E48Hm3HTsZfxT8boqvgUny4PARs1A5oXJF8qk2182GMJGbM4MhAaDFoioraB1t3Lb",
  "key24": "4GusCFWdmhganS1GUtqJ1QRnoh1e13XAQ7kqGLAohUA3BxSqxv2JBi1Pso23eQcNK2gH8223Y9HrzbgzSARMLfU1",
  "key25": "4NUFFL2aDq8a41jY6DE8J26n3JGuB8fL6BX7w3QLNzvFm3X3UcCgXtpxyY47joZYwEGWQxUfz7HwACdnaYKfWUTB",
  "key26": "31tJmFYDpaiyhNMWjm2c8HYEj1Sw4atzzQXe6d8XTo1NaUw3qyxQdo2SHyXqYCbsHAZod4RG8RjGSaaZRNtuoemy",
  "key27": "2ScsCPUzt84qa9qboLpfbfEsffbxBngNzMHgJYiFmsDZzNDEBeWVBjd1ciiQobsXxQXdU6Jm82sGd8BGBNd7YmGT",
  "key28": "2n5VUwq8oEsWvP6uXTbnRhUaCothGWfYiLbPTaydKhvYKyx9T57UYJDccDkcakoUDR57MpNJ9K51tvkCRvt3uLvJ",
  "key29": "queSaFL5pM5Th6nuaeGsFDf8Qa73RdCg6YE274BFQGaKNXw4H3LXP1C5zKQCmGmNdvm2rU3nKQ1Hi3sfR2Q2naR",
  "key30": "21ADh5HtcqSZsYP1NLNouEm4vNTmy5Wh3itpbwChLs8qigaVD64Wy8dPddK3ZNFoR4zp6ubMuvMAP63CQkzZpDSk",
  "key31": "3i2iSkZyp5GAxwsezJ2sL8BXcHxHuAxnbKczkusMBDAMYkjTpixC9ayGpGHdLJra93CETnRJfi1H8xNor8LmmPXt",
  "key32": "HTVh64ihVY2yac9o2RnNJDfSWN3CR7NryszkLnNNXAaEMoFe4KQpAkojuuke4gY3NJEpVVq98tv4etFw8r1FESC",
  "key33": "3e4PS1C5Vn5BXFkwxX6iAiWL9qcmK9WYPdRsecwbRcwekAQTWLmwKt8YWUgZoRcUSenVfv7L7G9Yofbu1PE6DyMQ",
  "key34": "3gJ5SQt8i1DZRTphga9HrUvRDxCgPH683mXuGNfFJMSRFumqAsoXtUcGyBhuKtYpXcwEyowyb7iBQtKYRQEZ4Bf7",
  "key35": "4mvWHs3x2c9JzYSUDQ3VC1DQJhxQMQzLPmdqFa8CJqxWJkLbz8L1nygRqL7zS57QfzF6FrUF6c7xFaQ48HyQdqv1",
  "key36": "58mucRy9TJacUvfk2ehG38Bak4rmiwTYryeVzuEkyqW4XaiaDpFThossBrW8pyTmWEYo5od9ZuvyLjiPzYzSGTkz",
  "key37": "3JBrndeDNp3iYWEQtio82JueyYDBvbq82TEwCqk2UG3GfaUGgAMifjPnxb2M2HcBj2Na59o3gk438xiVaaVoDogS",
  "key38": "pjPSZQKDJ6Mm6gDgAZNT45i6KEoWcm6ryT6J31V38rGTQcwZFj18vzK7mhNBQekvm1n3qXjBt4A26gQd4pXsACu",
  "key39": "2sQhWmDm4G4wueZAgMgayP4JML2Y6WYpMhTvfvAXBc47AYZZjyLhFnXcpSmx2EwoHP2mP8sE3dWPRCUFKsb3oGLd",
  "key40": "67XmcStT76JkLZYh7ajL5d9fpH94fZAAF1NWVcAGD9CT8bZB8e6eS35wsUrSucKisNErdXQqswnmD7QXjVNKzMM3",
  "key41": "4k1coGxXi2deEL67Mcf5RQiEJ2dnwH5Gm3gYPuhpVWmeUaBtqv6KDAVoLXdGfPMwrLtKyKX5SjvwNG3Kpkdo8X1K",
  "key42": "2f3qpo4Dsf6apEpY9Y9ZmSiCMeeLUV9nejEuampCtSLSmV2YWPxi63Nv85GXhwKbdDwdSy6uyL6P4Pzo7mueNk5B",
  "key43": "2PQ8hgpissrDLFkvLWZswNPPxqrxdJ7PjP677siVnBReJkiNgcRxesiSSV2YhKqVD6er1tbWtXmHJVqMUTvxQeni",
  "key44": "2m5TX5bQvdWm5tTrFHHYHE51biKkUEYXi2f469u38dPQLihPGpropba1mBatZtiYqgBu2jrqc5fttguET37CFhVM",
  "key45": "3ES6eJCo9LpVi1ZgFpdAfda671L1Q3aymp46LBwX2wZ64PdPxB15CMoavwSFKL3Bad3VX5g4J55ybJdibHUovzV2",
  "key46": "2yWg7ENUcC1Q2RiPf8XCn4eckFhMCCzXj5DDBdnk46Zvz8q3AQ2NVhd4CqMmRK59ZQYzSee5mX3PgNH1BGoP8mJR"
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
