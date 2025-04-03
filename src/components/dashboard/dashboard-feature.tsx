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
    "39mZf3jt8oqBmU21oocx8WhbBgRoKRsu7iKkwyzDoogoxTtdh3eUi1Zb5KNyog619bpkVKNmjqYTNszJb1CJnPLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HvY1KGkmXmWmD9PrgBGnuGF9GqvVKMneLDhHWPC7r9jjteU97jfqNyTda6H9LkbCYxnMWy6gL5N7kMXT9mqopC",
  "key1": "p6xrgTMCXDAb7EdUC43SpUUCfFCAoMq4JzCh3octUJCpbe6Tyvx9fNgVxT3knzzpQyvx29HxURx41ets6GB6sdf",
  "key2": "5BZKoDiYn8TBV8YSN4W1FdM9DTf5d3oGnfAj2U6HPMzCo77WbuiovjguQwbMYynMsU4ZcF1n98tWMoU67ddj2pkP",
  "key3": "56AzV6FhHkvogtNc5PVDLsmypx7XMz26cjZjJFmQzmQwvBF14hLw5emrZL7pveeg8G5oKad1r4GUyJ15bufDjNE4",
  "key4": "52YxeqmcH7waymxS1fziHA3TtrDjbAwR3cusTn6FwZhZRJKp5GfMzGogp77HVMdqkVPpPC9g755ohKRCg759K2Y7",
  "key5": "SS6SE2ph8zsWVqpVQjJ6TTWXXidnzScoxfocT9WUWyuDnJ9D5CQQS8kiL1nW42tAEaWTas3fk1w4Ns8EJbPeCsB",
  "key6": "5LcMrGuWwCBnuTtgL8YBJrgr2pgkY4RmFtHudK7ayiGF3Aq4eFbvgBxSSAnEBYjcKKTfbWXUSDTGcuADiYi8qkVV",
  "key7": "3CBdQMAv4yZLm1nWe5jGBvDGLnp1DB6bupJCi3ZW9CZjUP3u5mH76KnstQ8asL7XxFYywyqzvuf4t7tK5LJ9qEV7",
  "key8": "7mLnSudw3zuNyViomAYQEqRTq1NcV6UKnBwX4VZ993aUrwHiSHjNN8stnaVdQmE9fE1N6DMj5DYhpb3s6bdzZMp",
  "key9": "64uTdG6nwKSwNg2TXE3mMpGNPgG3xpsa68iX6D6Wshi952HX4EPPMPkrSHWPSBzYX7LjGxPR3XLoE9BNLYuCiQU4",
  "key10": "3KkCNKhmhSrZiKWvziJdnP52N9acrbkf9c9j9fg7zCehXLNsgHiHs2XA5TtuiYDmR8Z7SLFpsqrSxRc5MA1e6cN4",
  "key11": "62XhKCPMARTBCQ1B5ipKYpc1WjBYA66BmrmgELAdSYRqGCaw4L8NUEFxeTXvFXR39T8DRNd9EHemJme1u2XJWUNp",
  "key12": "41LSG7RrYcN4TwHwF7ZFJT1b9YkTsvfuLRZkZCYw3abT4w8WVuxaekAUiSD9CC3d4jF9r22TkrFvZ1ki26jgKGsx",
  "key13": "22d3HNvxXmvv7QVius6d1eozBdtiSE5AWxM2PgCg1wvmVMLCqZi5m7eHjyNQw4xpuK5byR31Sz4RcnFw9C8pgC38",
  "key14": "3dzgdj5mZudJxZi92pqgvJvRv8dq7WaLDwiiVoJyv38tfta2R8hJVQjFtLf5ZJJaXVVehqvGWfqk7WRNosshD4yn",
  "key15": "5KC7xh82ZnW4QktYGrKB19Ke67MHMkzVoRLxVNPRf3MSK2UeEs5uAVbN4F7rWybixGrjs3QLRTDmrw4ofwbZunW4",
  "key16": "2vmMRcuw8X5aNcCyidZGgdNQ8a5a2oAqug28FDYQC6JAKYnKY5BjYuLSN8TmtP7oAy9EY4YSSFbFGQMtQVqbX46t",
  "key17": "3dv7UPagcTnzFGfeA6iMugn6gWhVJ6FZydo3CnWB4GmpJmxTnQNgXysDz1VC6myv2VVpf8NUd5n1APdGtbVgya69",
  "key18": "3Mk7eNNMYe2RbZcYeqzqX3Ldpj9Zp8qY8keoANfx14bDiNY3KjeYFfjMpoA5MpMtAwarwikYPsX9pBd2Q3LPgAYN",
  "key19": "5DaB4rjQ4oB43Gipyqzs9ZMUnQEoKV87Ud7Fb4WrNFwALXqwKKNuoJutxQHAiLtvT7uTemSHq56h8X7SAP4zYo6W",
  "key20": "5BNVsAXgyGBv7DC5xaZzQT6DKfP4VCKJrF1YbnYJR9WKXzc43xYFWNbjneqcggtd8D4z24b1RymgR5aWHp5Wcdg9",
  "key21": "2C56GsGoVPZrj41gC8C2qjymL647nAdD7Qoubpp4Beztih1U6S9amGiTevFExEHjU9HGi5s9Aawtt1YKHx2z6pMs",
  "key22": "4SVcfHkMrLd8WTTdxM47SGeqjDhHD36ALppPZG3ZpLRq9ksZp4MdiwuAY6xTNKWTbK7oM919BV7nauB9kpPEMsmp",
  "key23": "LnU2mfngT1hHctjpeqeErhQ9z3BAgxnG2exVt4ixSNQrqqWP5AGLhkFfskMmYzV8CwYECo1y65ihiUuYUeFArPY",
  "key24": "4hmLbndPsEPmJbqkomxSREQzjaNc5YPqKS7fLea3iPNvFPFLwHxNpiamKoJ12KQp4bbMoiFB2FP95YXXupTBFNva",
  "key25": "4tkr28TAtTZvaLM82t769KbrTCCzeCn6sBKSYJsTY6TL1PXotRY8JezFJYkKL7rpzJ9BWrEgkxWPC9tCtmFacHyu",
  "key26": "99UqPrB5MF52UwPM7awwfG7fS6UwcNGVViC4UNCtyWGtvHJ2NZszmQ7bfKFMCMvE4MYkFgyMqub1J43rh7RMGou",
  "key27": "5cHr3EtmXjM9qNxh6Qo1kn84zfFUtbX1a7SXhAY4TKGSTCyCKhQyVTwbF9fpujhMyyAEw5ggEFNMUo2ySpxgvhA6",
  "key28": "5aQtKkJzBdXn5Nivoz6dhwQTfhPukKGzZSZjPEFnBnmwaUcd7gTajVmxAxDREpY7TnShUoAA7Ja2Y5Uns5kh99zb",
  "key29": "4AcKGPuSTKEtodynJGW5B1U462tUCnKPEfqFBM6YE8ksiaxJ9bDmtbpUyQsSZc5ADeskHP87YqWetYg7dCmQahTm",
  "key30": "4EuskeDCU8wpukUPY7iV1RADJkuD31UQykeKW4XLnQ7FYwYfW7WjFSLkyWXozf2iopdNU4z4P1zv2GPApdfqCKuv",
  "key31": "xrpBXFq96L6oH7nJfWoWm3kzPxDzh7CCgxQi3chgicGsE5VXsP6KAYc4uECZwXmrMxrboyWLgcdXzJbj6Yxomz5",
  "key32": "nsWDSgvKLqBLbmbHEH7UgjcZzopw2qrG8LpifP7qDuSNCNVaKhkwyzZZj1Eqn5QdZH2Ppu6ZobcGpnU8FjCXVUt",
  "key33": "5sUpJ9inkQPFRSdLS1AegqC7D8a6tFfZLGf6WCYuSzDRyDLcEZdYH9Y7q1751iowFBWUFJEiYohyjDbf35n8WZns",
  "key34": "2txwM2qJv1PKFkkSb2NXpZfqgV1VEgsVtJVQXrHHNKf12ptpWoP73qo3gFzL9AHptWW2UFh8vr43Vv2pFbbhYuKP",
  "key35": "oubrgabZVU5fhzumv6yTwoB6usP2JLwz5dqCT5tLvr93y9tsiSWFYf7K8xtEWd69FJKNecuSn6FiJdkWz9iJbJa"
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
