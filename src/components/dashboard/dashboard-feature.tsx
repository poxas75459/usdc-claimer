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
    "42XSJbwTtaNNizbTYRTrKqJKWwf8JbcrZYR41hWZH4KVDaCGmTGHojxC1vp4QawcFke24d1eeHaZza2FFrAFyumg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ttuWXex6UC2BPN5qHV38SfzAUnLk2u6aJXTXuXEHQZrFpNppGuu2czNGFW7j4kNeT3QPQN19c89XjuF7QzSTPRj",
  "key1": "32gi4XWPT6QaLS9xR8EuagvR9yjnqXS4erWfuXjqpAcRSGZGFtzWHSTv97QHa5sfr2JAQ8NTC2cRZZvs1tkNsSFr",
  "key2": "4ZQpywW4pJFqcKKqrygpVK3mscdTxiDFBhAFhwikW5G9MVhUEHfWrTpWv6vP65qMtD3y3aZDkwTcDfDkughiG88t",
  "key3": "3z1DY7p8kTUd4TbusqQQZj3KzxnEKyj6xZCmVchy2am6eBDxa1exHr6RghtynTtncM4YuqGH7cdHbrNAH4y9NJHh",
  "key4": "HYt9tGaMmLsTxvorEDhrAV5hM39UHJuvGs88w2KYcN8pYGpvHhbRJFeUgM9yd5suWKhZM9SMbdiLs3Cw7p59Hro",
  "key5": "3dQPRDjq5oWZ4qCft1XdqGhh8jSd5LdWh4AZhUCu4QgZpV6H38snw6F6rR51Jr8ppPHZXDpxzFaJt8pXQsWCyiA3",
  "key6": "2ZmU42LsYNfj1B34G8NA5VTdNCZ7oqmcMtzy7FhqxYxrNGkP63aSLBZCgVa33JCTchCvXKrgLJ97XJT4WAe3szPg",
  "key7": "57yoUURNpr67AD3xSq1Aw9paBtqam28JfumPvfD3EoBrs9AbjyPek8LSPrw1w99hZhb2hM5UsdEC75wTZzVziRq6",
  "key8": "4vcBc8AgMHfXoMAc7ChTEbqYHu3G4ugNuhSowXYBgce2mJscQkg8ia6xGwuDcENmSc38MyAZQnkK989jLf5TPweq",
  "key9": "QKcNRDjL1omQ2bFL5qeQQpeNpfBhTYTTdYFDTienXQ1rVLAXcb2mEZU6h59u6gUvBoaFJaQ2QdV7tGkXaaBeJUQ",
  "key10": "ChcdHyUjY9fMgMrPsKTfArF4qpUHUnnUaGUXqoZ4hWnEmpNoSaEttnAB2CVxHoaNdYLB7DCpjWLqVXjCsakWeZR",
  "key11": "45G1vvj1dAsKq57MtokMokmJHoQ463KVLWx8GFxxDK3qmdDCG1Hj4FEcNZ9ggJyRE7FWxHziJSZ9hS2dAx6ML6px",
  "key12": "rHgXCvBuZqo8UWXxxcKxQuShjRmHSpwGmaz4Bxs5dxm72LwRZwGrwLfZXGmctSu3Kg4RbaNzqeFUbhuzqfxqPwh",
  "key13": "5Voon5WasBrg1wLLFAZyR12oo4Vmod1foGVeNHHyYx9Anro5d6N99gnyUBvtwskSwrgxrUi5FoBeZAECW6ghfwpn",
  "key14": "5x49D19aMQ92ipQE7Ds4MHF3PAozdkg8m218fmethxku8dP3VEJhXYySx9PtLHkqJjguxReEofYqMzz9xsdm8FRU",
  "key15": "4tDLWjSRGTd7RPxhjRfybfDgXx7K65CtR2tmXrmVHYNFUaqg5FPcs1mTQAHmyjJfzFoVZ5iZkzKR4Rq2QGL6hBen",
  "key16": "4aG7nkX4qeCZZRc4i5vViwWScJ7j683x8GbgQbGX3kowYseuHnbDCwNGX3vp5Wj2F4nvZoHDhTFnggsMwf8SVfmD",
  "key17": "62vHjie1noeWazLe9CMUy9PFMUh7NFmGzfgym83iKZeA7e6Uwy4UhTK3D7n8Up8FWsWqUicYSZREhYp2Jusi71ft",
  "key18": "2e8HHq9vTyaonABZJi4HyVCGeLz3fD78qc2PhRUto5t5bj6HcyFsWRCaQb5npA2jP21G6jcsvarKKkyARnjmdRLi",
  "key19": "2Jx5kZz6yA5fX9mmjnLYfaqjVqWhoiXN1NHWMAamojwvCx6owtLJt53Y3uzGVMJ743HMNCz4HmwXzTB6NfaakR2v",
  "key20": "4S2Ya3A7QswM9hgv3Ao3wb9gnRAX8jDMYFenmb9J2kixiirTXMgikJ6Wc95JcwYrQYWfwyupcT2SKPYh1JQbtugr",
  "key21": "2aHN24VZvxf2f8Nue2sFo3ptkUkztZ4UAxJYukTgPKe66o2UbX8wF4t7xpcy3igUo62d4WGwbT1sUf1kERiDANbC",
  "key22": "92y3ZaPiVkLTAsg6etymgK5W45nSz2t6uTtKNeHTkuNqxZFXqZ6wojR6Txw7abyDZskyw21LD4PoGHkNF5DutNu",
  "key23": "4b8yHwh41iKwqSgHvLUNZJzJzpTXdzjtCbbWUipk5vUC2CP4a6hHEBf5CiDLS3r4V15K8thvgHT1MjV6CqEKqXKx",
  "key24": "29kQyFRLbqrKZ3BPYCQUNNZ9pE5ThoUZqW9C5EvX8Q4Yrkf2yZGEGUBgAQyx1fi9SuV8o7YHDREdAfwcyA3skNGR",
  "key25": "5YZGAq3dmSqCdyfPdAXkDH5JZ2Q4MhbzBmUGSfXjUB3sV1vXeyyHC9Tr4oQKbGfS4FZwKhY6GCZbK9rusVxMQhKu",
  "key26": "3qg2jTMFAyksFZLRUGL7QEFKMgSWypvUr8kkKV7zdzAt9A7kAf8nNCwAFN8Nsyf5KUqFcWNcDt61o6YfN25RhgUy",
  "key27": "3nANWiM6vZps7JWGvWnbYRmF2zTH1ep8WLrKoPGur4wxA2y5HTBwbCY72tDxZyaXrMerxMrQmHgHrYgq4RGmUQ2j",
  "key28": "5MUBhiX33CkNSZcHarzPup8SSXyNVePkbd9aCY84rJ4XZDaY2H3y88XfjfXURGHnCmVuwmPjHiPkbWosD3YQb1M",
  "key29": "VLseh6kT9kJjKy5xQx5CgG5Je5hUsxkkrTvRs1NgetvyAS3qKSCzepiyBxfKbNcdfMkLvTv9EYEHzMmZ5qRZq5J",
  "key30": "56ZwG9SzBBR2J3dQweC2ZBgYuTeUYYK8RYZKhpdFTbcvsfMj35D5KwBcC7wx3u9LuwCbMNigzEcm36uTHue6ZehP",
  "key31": "2feLeLYv3RpdXvnwbptgWCwuP2wngAPRQfeCD5deaHAjMypXHbW1QZh3NX6qd8rHNABnYQpaWhEMfivesE1phaF8",
  "key32": "UbcqoLbtJe5VCTbWLmoy3No374Rb52vw7PnQcDXsHZmUMTx8qgQB3EgyDKA4r6jH3Gf52YBqEAaBLjSN7HV1Dz1",
  "key33": "Y6ar8PuaQgwgZXPSc5pxkst5sbZswZFe5SnQaEfUF16A1xqEutMBmEtJFUKrwQi3qSfd1qrfoMfnpErtXUVMWDL",
  "key34": "4TR6fpwvkmMpR1MpUhXNTicTjuDvwTRUKEGtaCj9S9JW8CLuYwd2BLJjzSBNH2WwGAim7wEKjU9Ai1rwpdXPVu6X",
  "key35": "4K1VJ6txgVDyohEKsugm4Y28nZubranHZPoPav7aPGjdrff96mP86k7LoAhEbk1vEjjMWy2ihPiMLu6qhhv146qG",
  "key36": "2iXRH3XVJPWCJPmdaT28ksFKKjvBNpXdTmxaZquqvcz5yrygDbcit3vUiq1gXLXc2cGEyVW2kAdF2myemkFhWvJG",
  "key37": "23HQneGNJcuLVmpcKzikWXPDxPqVfGGMSS1KYU7zRWfNQQ4KzmebungA5Ykp8LWa9Cd5xKfgjAYjSeCuhH5HG1Hb",
  "key38": "5ybrQeorsssJrzXjcng2MqRYnqmMVordT4y1wQdBQ4AwdfCE3TQGe8tpqkLyxVhiiuSACTT8pYphcQv75L7u4BkM",
  "key39": "2W7mmgcdNydFuSur6XeajmT9iMnwiJFeEwoTQA2bu8rwu9ZKcWL5574crr53Uxn736vc7TwS2jtiTPjsQdh3FwTp",
  "key40": "4SdtM9U2vvyX3TV5FynNDTz7frz8fPaDvFfkzY58nHXDBhKJnAa9A1RS2kdvS6h766yTfYbs5PEj5BDLxua4BaXT",
  "key41": "5DLKqD9sxXzc9kMjogZMtzVeYtuxrXXULwdg92Lwrs1XhsPKgWKeM2VHBvgX974nE82W5SUfnEmGVpxooEqW2Bfk",
  "key42": "wjL6R7VmR7d5iq4odiUEmQ6pP4rmpgCJDhonVb5JqqFirB6qW1HUGDEsYuNgU1PbCg4LRSgqEdddCiB68kMbKsY",
  "key43": "4QgG8VU8LyLKe5hfs3FW5LafMKoX5doiV5QC81HiJYWTtWRXuTcf5o7g3WGP57zePGaupuyUZKLf3tswfiCmvKA9",
  "key44": "3msXEVaca8YU1rbFEMRw9iesihpMSz21qhYceJVxMtpa58Mg8xJykP32qURYSVfmedB5vxcA6Mc7j6aG3WkoGaoG",
  "key45": "4q4hWZgajHek9RQpHChH4LDnVeufjGaoYXXvxqqCE3NJbcFPRCAzNyMJWXn8YZndVKD8U6kXDhpZVBKaP22hWA3h",
  "key46": "2wbYgp2oqNwt8qvY2ErDwZ7Ft3UFtb4euWPEpFHffqFbwGWP5DaSF1GrnEAFYfttwzUk1RK5d1DZ5EoGmro1q2KE"
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
