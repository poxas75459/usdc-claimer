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
    "mnnuLHbtfBhfL1NLPHYbKdUoTaTqjidimeciB8QTSgPbUsckrGQmQVS6qonGjajmPE6pgUmB9rCheNsGFWjbP4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFr31USKAec98f1rrqeWVYLxia61RVKbJvQBfwXRqve2tPuYsH23v5P54JKnfYT1ufp43EgKmWcvShuEzcdgZ5j",
  "key1": "2PMvS1eRK9L2owG6ndhKJvQdmhvaatsZxdQ8kSsCMfGENv1ZSrcdJZPWW3653vuMQESCdssCSLff9Dybfas8ZFgh",
  "key2": "5Ebc6nsMdsZH6c1XGQxjmLBukW5YPcfFfSHekCoagpEoksyu67o1b5kES2iaQkS4F2kFyxGPc8bhLizRS88VaUdg",
  "key3": "2hfhtaqvzyqw6Lziqea7WPiTsgry2tjYLW3msPNX9AbiuAHP9eQhoy2HiUob8cQB4kLyWHi1k3RqMvsip8zF1VkT",
  "key4": "4Z2EAfGP1i9zvHURxHEhnoG6D76XuAod7UE48BPX4bB8pPYtAGcAmbnrbMtqky2Lr9sKdHCMR8241Xh7d1YodoFh",
  "key5": "FMA1B2EHDnYfZFPkt8dqyTf79afFMccoPdR1tPA3xSY78RB9gDE1pw6Nihu2mT9oJVJLkyhE1Hjp2DW3Uwg4o15",
  "key6": "UYt9fxPS9asVK8vSCWsEVozk9qBbxp2HiXj2XWtHda13u4QQZuwtvQEnyrUTU6opECgHs2PeYEiqa2CKUJuQV5E",
  "key7": "3Mfa9n2cFNZHv45c2kM41Cr3dpgqbjELzVxXTRJEtdZ9nwvKLPRv8rt5KgziPrEEawDWyAHcAJJ13ip5c2dxS3Gp",
  "key8": "3vt7cdGR24vTkJRKXTfSxppTDWc7xFY74JwmDRnUo22ziPH9gpuJG6s627wFkLU3E8fDvJAbq6XjZUerZ6FyFYgg",
  "key9": "34W7WcBEXPmD7R7wjdrcLwwZpLSgXSvburMLdvmkMnFHPBwcRSK7YAZqAYFfJJYDuZsw5L7pRSmyLcuwcM6aZc9m",
  "key10": "3g27uHku8iQ7VrZVQyB51eo2jKhHK1JXXRqEj1P3Zexxwfv1TuLGTUuSsud39bxZAfTDZ5WUC6ZW8MCngEKJ9ss",
  "key11": "3i2YQDMdXhxzkngZ73ZpJyPAu4o5QXAWVZyBYd8GyiydVAq1XMWWoxEHSQjTDhEppbySy8Jbz1VHEyaKrvD1xDE7",
  "key12": "28ZgNLUdPvnZTXUk2kQqKk5f7jmRJqhTyKNYwnB3DfG6CcXZGCCzLPCkU6BRzJUJmiH6A6Q3b1wk4mX4gQntFbrq",
  "key13": "65zj646LYNizTTAsjuFn3fSutnXhjNEtJnyTXq1K8UkedQzbkyPAQ4ee1Rupv6GjZsxGr7pyaYSaVrAhNoDLnZsh",
  "key14": "5FRATwUe1tULx6VHiiLmU65LUVev8nwot4umzAfjXZeq8aKNJ9PZ8MN84jWUT1TkUhGaPYxhLr2iYSDCieeW1wnf",
  "key15": "4PaP8gRs24ey4ZhZZLmWJiiHwiAs6mw9HxQWyUKhAJqJeoVnrYKNZ3HmB8DVz5oEfVQKYzQUEN77Fvug2zRdEk48",
  "key16": "3YVGT4hW6vGwrTc3MLjKfbHDVB5EjbVAv6XzWgLqyj8FGKwfJ1BWpkzE7pPYzHUbGTe9XR5UGWqp6EqNLswJfHZw",
  "key17": "5zknvKCaBAmQZXYtDdhLpJCGJ7nFmSiMgJ6SixiKS6BdoNawPHoLTapQWSjpdDNW2jL6c18W4mjkftbwyz1aNova",
  "key18": "3RnHmYrBQ9atsDfqBEKvs3kf5Q8DQiHjcdRNuvyhTpdpZgQxa6wNYmxg6CpLzgjKvvzUBwyRCL2H8tm6sdS2aemT",
  "key19": "2PBwGDBghg8aX3kaXeYuh2Mspp7ErHstpU4maahHM9bpkC4VaswgJFJXefj54KpEc89EKFNwfXkWHEpAhqz1mXE7",
  "key20": "TRtGxfoKE2KfVQHcbzZkMBXoRpM9eeddBd56yA2a27yff279dFjrko5TyXvLavfPEsuJ5Sizv5RDgAKp8U5Z2s7",
  "key21": "4CvKJscp9oFcW279Cr7FW8JYS8PKxZXDtBMvA5DSy5LJPc2SpKowqRrWBssSNrU7UKVrbtRknjPmZq7hyWs9FG75",
  "key22": "5H79JuCyeUHqfpVyN6gDrE272aQPSDneWA9cmaVrfh1nhvtptW4hL68ppwnHAB6bYNZ1paZ5t5XMhiQjUfTUHy4t",
  "key23": "2hiqsFM86VWGQV3kQH4uMyBxfrmXD6XZuAMG17TqKmRAoRiobwnc6m6fu1cK2FJXT4D5RPQUfd4Tu1zE6jGGfEoc",
  "key24": "3pAhZPsUsJNc3GeiaAsACKuCRgNEs1VXQXMDf6zRSAVMC6SwEgXKTy4xqh5duHXbNTBEYuup6LA3ygiSej6e9PCL",
  "key25": "5NxXE2hbg54VH8UCGTDEKhAtX5dnKGR4pNSeyFmd7AXrkNpYW1YCxqvQxszajcrMUTQHCUXu5B3zuK7tRS8hDjQr",
  "key26": "2FxB9xFetXWCpWnsbJxKh4ADDuwRPXQFR8dDT6tYdyjjYEbFS7KY4V5othBWLxE7UgZiqiiFmeqeAkmVVfBWfA6f",
  "key27": "3vwWycVnk1XHZwyuGYRpikzSwxttGQS84LapAZzM4UJckKwKUuVa74Hiz5EpSh7EtzEZAYTX9o56Fsg5yMTMu5Cq",
  "key28": "CZAC2WMmpNeGns7NoHj2rzFfYqrmJib9CrKbCGXLwX2rebP3mwPZna8ntzFaocXsjvxg45YGsyo67pLWCV2f42w",
  "key29": "AXUfukZJsTmBS13sm3L8eGYtTewfRctH8ncSjzwv3gBaecw8ZLo6Tvm63MfbWWXVSY753gaSRsqgy1xGrupxNkm",
  "key30": "2kygPyTWqqWkGcQH95KeBDboFahfgY9icwqvDSXVi78EfzgWKR42yw1FuSxxQSTwx72QRuvms2asCesaeeGLky9g",
  "key31": "3cBNbE6NhoTd5HtRHZWhuzF7fZV4aLiHLGjvTVKuGqHz8xhZsBkkhhSWASidsRRwhDRTLHemsmvUxa1TgiBUaZwn",
  "key32": "4FpXawshJ2ms2ydQMsz6tVYFMkF5DNmtdjV12gersCSSuDmzpUPYxEEkxPpQntSW7EhxsLhzeTzGWBfLm2U9kcqU",
  "key33": "tcTAAJjiyoxTUKTN8ne4pc4TCB3eqNGBpMmsR3ZXL5wqY1kEj3ujn4fDGQ56J2m9Wmuia5Wt2DV3Qj5UfSrZ99C",
  "key34": "MyxvSRV37w7s5QrhYXNmr6ZMDBeztg8KQvhMfttJRhqRALjeG9FsMu7eFAZSfi85V1xEVcA54SMnEf6uqx4U9YE",
  "key35": "3x1syWtFXZsGsW96UHatgsh3xdEZyCzeGxKAPwf9cWJUeXo8dzp6gWwdGNyihxke9r9AYUD8PtNC6Uqv5kXmmtMR",
  "key36": "4i83JMRieMawUqsYkiuEWxvbZsBjsEqmi4F3xf3J8a9MNWGDdeqt4AM3K5sHLu3u5oxcJcPcc8SwjPBG11CZVKK6",
  "key37": "2xSF5vDKscSgJuphczA3s3thkC98PCRmyc9YY3aapPWby7VbbeCzRE8LBSF6anPWuaCT1APqSw9FctUTcPUGyJkW",
  "key38": "43QXc7m5zBrw2HWbYQMdhxWGKYwrqXW2WK8zYbHBQ8arzmGXTbdSShdkDoXh9vYa3bobQ4yS4QtcinBCAKhuvvxX",
  "key39": "3KVurhEqdAfAeKt7wQkrSFFA7L9C6Hh7a2fce9DrxV6b9Vu4An9FtrqTMnrcsvwKPK6KssDCGWnZ4Xdd2BkBB6Nd",
  "key40": "3CDUmq9FKMSRCgajUiw1t3HKf5VWDNtX1xoFAW4t2QQjMDL3Xev3VvzRRu8ujo2LzfREdXB6QocM5pb7fo68qNB"
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
