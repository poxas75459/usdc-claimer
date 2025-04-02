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
    "3Lrfmd7bPNfjT3Kt4YvD2Zx4Sug5BEssxWN3FYaJQEG4wawaGMLiDJoD5i8sMTK1uaBgk5L7sHY6apSTHgcHFQNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgRFQg9EvMZ1Wf5JXf5We6A1NKZ9Fo3Ak3znxEm8FuHjpJ1goHQ9DNb4DLLBHgELCdVPbm8Wj6ZKXM1rpcKaQEy",
  "key1": "4A1Pds82y9GXdLRqohutGMD8hGSfh2bypSd3VKvtEQyiJu7zZF9CKsi6PBuQW8iCZzBMYLkQNCGBE2MgeBwzXk3y",
  "key2": "4sJmqmKjfoZ8LaKuEQCBk1q95oRDYnCv94rejTwnEQ2Tneoe8Fyv7FK397pyoPSwx5rKPvxBNjpQkSjMCMsVL8kL",
  "key3": "mtxV279NYGgbHR5a7spbzBv4ov5yppsdbXs3SxgM2btzLsUSJqLVVBy5opWP8w93uZDMXwnbrBAwAJadFstDpjL",
  "key4": "25nZFtRVXRTGQPUEPirJoeaue5WcxhiQDcWYL9VdLgnmaMxY8xABsF31QKyLe37PXSfsUGhs3oeSnNwGKhJqobb6",
  "key5": "4M8fS7kSbpUYFgiipoBZMdyDEyEDUmYNo6NF3Pujbhb4Nxsbu5kTHVmUv9agdDxEj5SwFhVUEfUoYZNevaLWRXv8",
  "key6": "37WSfy5EDhxKj8odeUBLm6YXbNVRQC1gMujuLrnUmJDnKAEkDd9VxsNmPr7QgkCUGodFkX8xm6djUw61BeYqUEe8",
  "key7": "29rYJyavE1qWSNRUDaVZfr4NHW8mJkGsKgmDQ2rmDRyfL6kDeguYh4aPkoJ7Pi1aPyHiZNAiuSBiJyWb12w1ACb1",
  "key8": "2SMkEzJtieV5bEdStoqYj7BrBxeeBsoLArX3ukczXcBh7Zw29FsyGS64e8XiBnje3uHjqVb9grtdHSkgBK5ChFJQ",
  "key9": "3vKop8EFUKwf4GCSsdixpPATGsHic1PtsVLqveog1ru9JCJiLGCkt3QZrnCsRGhb3sADbD8fndbcB4XYsPm82No7",
  "key10": "43bdpBWiZTBTCshV2oTDBCfqYFfKRW5TTk3CDbKcrySQuYqQ6SB7CkokqYXBjeycHiXM16n5BHB3RDdTpkote2Ho",
  "key11": "Q8GVgb16t49QDWZkyw149n6giJRQotG66W727GEBVJXN52T1sUmdme9yxCfx7WvHeUD4eMsm2CMpg2RE9zEcsoT",
  "key12": "4tPJpm3vFHS9t1zBgsqXtWHP46XLaE9Z9gvz3eYP99quKxrwoF7tH8gppwDk1DsA5E3Vc1CZddz2QVdR7PzVyMfx",
  "key13": "5L3XMzVgmsspJLNZTTq7qQxc56xufdjHCszEsw2G79CQwddN6SeQncsc9qR4ucdeK52K77cPDBhJQWLTV3RqRciU",
  "key14": "BpcGDvX32Rs9yiYE5dcMGkDaGEhuLD5xDy31acyCdr8DUkNpC42vHjYDCPNvq2SJzcGAJzf4T9TuiZjZj2HEh5H",
  "key15": "ahdZtwddk3skUGw1FQEBx3C7ysh1adX4e45NhJ4SWoRhaTkNzuoeWW8WsDEhmnPqbXcWNfU4uHh5rw3SgTbDG9f",
  "key16": "4CBnNHQsjc2FZ2PJngS39upYWGkUVjCH7LP9519ynj6FE23ezwrEtGYm5DCX8yTdCp7hLKrZhLGoheH3GvPNktqb",
  "key17": "nFsgeEszfW47dhKmiWcW3n1sWKRb9bj8sSEYT1gZ8PBDFx2ovqC2riFsmB44ZNjzXZbacQxmvBfhyDBiiQJWE3V",
  "key18": "484pPa5Myz5jb1vFeLxcnaDf3LFiwy9zNMA19WSiiNFd98G4SktP9FvfYzCHJJVk7ge1QADhhWvXKYKohdbK4hqj",
  "key19": "kKfA2Rcn1PnDbHLrQMP41TqWUpso6xdxkoRZ5BY8cWe8YFwHg9E7ZtrBhdLpkQNe69tC561CZXmNp8FGAULxQs1",
  "key20": "66DY62dJfZUXTZgxwf6hz7nP7bNtLSDoaMEEk9fzSiPQt2FY7yZLyyc8jMCq7jCuXzuLgcjU5zYk6aDm3Uun6h65",
  "key21": "5okVmYyLCMnyUhs2hMYhanqFUBDj9kDHB344b2puGMUXohk73rLNKYxCv6VR8Q3jDnF54JiBsEwn8Z8kPbfPQE34",
  "key22": "29apUGo5DGEzW7egEfs9fgdeJ7r4ejfFs4rwBtRKQrWfmUoyEpNudkUmCh7jrckf4qUZihNSqwUidMqSv8fYBC9z",
  "key23": "2yk4Hk4dKze2jHRHvRZmuv2YU7X6k5fD1rvhYXZKBHa8gVk7jnhiwkcv4qV55Zq9r6Hw1rbH79ukMdBhJ29gaRwf",
  "key24": "2z38b93HQzsuwaWmwcR57LY24Qy8eLB8wEExkm24yNweRaynitCq8zfzNADbGxyHS5bF33wHHMBFN1u6BzyuVRqq",
  "key25": "4iPHqs9m6ZXcG8aEikM453AfgAG9JpomCQCxjmdqjN4Wig85hBQjk8BgFWzAGNitBzmmbWkidxYzebV3wnZY5o2Y",
  "key26": "2RJjDinkut8bks2cLKPGokEWLpVH65XxYRNY548goY1X6zdDNQbfwxQjhZM2icAL5LzYzAHJn4AXh29Mg7FPt92T",
  "key27": "XeFfez3T2omFdc5mttZQUDV1Tsj9zLDRC39ChxXV9ep7RukNFFMXtTepUws73GZ9PWgDWfAmn9fH9zDCGGMSrBm",
  "key28": "3ym5HMHHwwSc5421BxoM3iXXxKfTBRuZywMPS1J8R6HqGsk4vwx4Zjfo2xTBrVftmzNDFFeGS1P1XUED1HBx1CjX",
  "key29": "3s4vx24YQwnQz1XwqtSMZ5YEhF18NCcASdbsba8FpfrAfMSQyrhvZUT4GZ2K6VLL5RvnPMngBdWccMb4u5vFYm7S",
  "key30": "QffhRzsY8iqqSQRpTEMEhbq9VpJWLoQ3R4X916PdYpJFMCxx5GSWBNg9ZLxpoJpfEYHXeDu1aUmZYYyX38VXS8T",
  "key31": "5cKPPjBZEfGHG1HyVXmTECaNHnWr8KV3hEMmWEoGaeFWBUCpDHsisFbMEUVzKhZDn1L1tUByCM1GcYmupXPQtpKj",
  "key32": "2BSPrcixU1EXikRRxuCuEWdCGj7TjoyVvJT1eBs8AhNrnWp7rCeMkRdXJbCDduUR5fdBjVB31AN6AYZKH8t72v8h",
  "key33": "433sEjJ4dof2FMrhHBo3xwVEtCdBsBXyDwfLQ7u1yN1QPhWupmVVp5zPSUSADF6otfEkHnYB5iTZkYcx3hzVwgQZ",
  "key34": "2t7xptSmU1vAkQvE1XqsABUa2wsddYHoCgQNsj7oFpbt73z3MeRJ1kCSUpHKpQNd7TLFhTs8mjGhD3Da4p1jSvM1",
  "key35": "2pAGpHBz5fURN43XhwoVCemugm1tyjZz91Evh2NhPpvYpFiz4JEcTXGk2VWQktS6hdtgabEgbjp8FUqXyxtcC69v",
  "key36": "4vopgNRjV2K8HNCUK3RQiHBCEuT9pKC8w2XFCxWqWD5UCx9yvGDxh6UsAaELbaiGYNVbavSg9fkYAENgm3oQss9H",
  "key37": "27gcLtVRUKxXtZuNKa1J9KwpMEXjBWB8Bsm5o8AYfoDWVBbz1R6PKgZoYJg3cquDehJcygejdcfParDR8w8gRPQL",
  "key38": "5JqQcBoCC4H5GCRSGXyH9vVD5FXa4bf26sCh8S2HsW1ajyqPF7JbVSAf4jtjRZbUsaPoenLd1LRzQfRiBBDb2Voh",
  "key39": "kx6LC3NN3oeMUk5HEa4RwXV5izbSettEknRRVi9dySozMNZCaT9xhMxG1ac4a9e2G3UjoqXa7w84DcvAddToh1r",
  "key40": "25fo8P39DSApq8RKZxBciEcn1n8WeYUWemLMSPCCb8LV6RZ64Y8kTcZW3VuCekNh8ZhrRyauBCR7xKmSQNnhV8Dz",
  "key41": "3jvAa9WMvFnmxD6p7oHXZk3zkJwYitELHeRPr1Q3dKjCh41drSJiRcSSsoBokacGLijtiMSyf5xk3qh8GUgs6Hv",
  "key42": "bMrYeBy641AUk4NKmNENXAsNRVroXQa7JkxxYDTNYhJe2m1RvMsNkz4qNP9zeVAAFYLyUpSTEf49wmKPwMT5wRP",
  "key43": "zCqcVPTfKGgK2QjsJhu2jTAo8aGXeduA3ZVMkuYPbb7XxoREWsCKuZQsN7shispW6151k7W16LvLnh3RXGwFTib",
  "key44": "3HXxVL5tQMXR5GQAYPb7bYRkPeqcZusH7qkcuAFWQcdRi9AX8vqWk7RnbcbR47WEEW4QXxnMdudLdACjtW54zVD",
  "key45": "4QHijb8uEyXHpgdSLw4Pp6kViL4QuW8vaCw6qZu3KayrdBi1y22aA8bivj13VzkJWHGjQF7R73qi1VDuhz6c1WyC"
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
