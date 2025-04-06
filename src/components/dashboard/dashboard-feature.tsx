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
    "6oeo5SbHyNnfHq1Y92KtiggmMYqEJsaDtWccdGrqD5V4LfciSkMe34DiRbieHGtNPHWCsNJJqVofRauwhK4g2FX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejioshGrtFdkz8yWdGfz9hghR6dn6nhbWT9yfMF7dNPv5tR7dEDAW5WT79LiGRPSHqdkQDmmQHSnfdFLofaub31",
  "key1": "587FrF4QgFcx73KrUXmTtFRdwDMmMDZyZRNe5rHdpZFPtmJayhvhv1AHKX2NbcJDSMRN6V9J6iSGwCpFxi5nETtv",
  "key2": "347YUfuQq9VMwjAmXUGGi2azxcC6aH5BU94nBiDMhJvCicYd1shpihjhk8e1W2Zrec5Jh2wv1o198t6KmfHfkYy1",
  "key3": "2BqMwDD2Vvhwj7yP4jYR1XodcV1kVteiEdvDrRAnjB4j3EfXAsPV1Qbwnb775c4KvAvnxcVrPnzKGGGXF7qnnrMc",
  "key4": "Vjh51R6YR3RKttxMwvwR7teznnd4e6fbdNq7hkuHQDb4yansfuWNn2azFkF3tFPGTAgoRrjsqyHoUabhi4WwwEz",
  "key5": "2AuW1EgirBBoEaQvSnknQxQ4vf91sPtJ5wyPv5hkYZqy7EaZxM7NSLQa2b6mwDQdRx61ZCiKGKVQwJn2tZzq6si8",
  "key6": "4TrXrBzLAQU5yfgFAkrmi4FzTbKo9fBJpZj6UhRi3KkDQp4y2Ly4n1VXYA1EdiJBjbx4f67FJ7Ly4gXpgTArK9g4",
  "key7": "4GqFuojty5e7ucDcQUhJWCvfSf4Hz1CVbwEL2MZfQiUcDrkFXs9V5NckhqxqkMHeh117p9rrmxFatCz4JZhfuGY5",
  "key8": "5c77bq3Dw6A3gKPvcQYrtwd7QrbnvKYhPc1dAuBzmcqmgpoQAkchfAxMmaCsCYpEJayjbWoRiDqWAwM1Nsb8926c",
  "key9": "2Q9yNepeA2j3Kh9C5QxFSgvjnH3SHfAGEPavB5TpKL6xR9sM9TawhHJhGkpuAXxaShm88owWNicjuHNdJNKE9hN5",
  "key10": "sLcDN1S7sLfxQfARev9tF541MRtmDWcFQaooE8p414EiHVwgtBZjfZjyA5wjae1cfJ4UgHUBJfpQwbLdBSrijaJ",
  "key11": "orcryHHLwwTYcvZuj6jMFLdmrDCvRs4GJp7nbLVJZ6BLVSAUEq64V3QE6MWMftrkb3iiTnHAWufiuMafkAXpXgp",
  "key12": "DjYuTD4gMP58NzUGaQLekakjSVoeLrKxkiG2kjNj5SSFY3tztdjut8zEGTaqKeG6RdYhvWMi2rzGaw6iowewQLT",
  "key13": "2PW2FwuByzQHsXeUuw9x3GtptcEqXtQXfyKysFMndfaZuCCcZKY9obTHwY8mtkwppu4w1t1ztA4nHpSVSS6b9rdV",
  "key14": "5mRSztguLmiwH73ssHMWsBB23wuGMgiBRBEVCNzPkb8TEYVAqHzvqyGKnqUZw4jkhWaKon7dt5LJJqqdCRoHonph",
  "key15": "5LuXwdh7L25EU6CtwVpqZKok1CTbzZZ6KycViwm2bZahiaiX1CbiNFQLrz1pyXzxnY6R16mJHkPGMbPp73tYrTFG",
  "key16": "Ycr1mfK1vwRn5X7GUAahK9tPVy45YNE6rcRyV2xerBvm3MEWZLW8FfJcuYaW4u6AwmzjeB92bhMcNRw4RkxAf1s",
  "key17": "LQ8v2UJSPCKR8TVjEx4mVz18LPX7zoGGW5TSuwQRvB4frbHKidLYtUYN7R8CCM6qBKSaCeLdDsMyNaZJj3QvFw4",
  "key18": "oE5pN2wbt1KVc6bzPmLQQ4sKMztBDfNBchD14idr43VHe9BAL2MF8EQMTcQbx69eTf4E6hdeeKkhmPcAjVdvxoP",
  "key19": "5wjGr82KchvE5MTUkmXV6fsmo3FPCKtBGW97hZpzyL7nC8MyyiexuWTE6VgVEW9D7ssL4QmaqHzGsM2x3r75ncgT",
  "key20": "66vv7NRLZ799hmKoDrBs31CsgzSfTiecjJm9nVJ5Vy7PcznJQdmbupcpwvQsT8rbdE3rSvGm51uzsAVox16d8Jyq",
  "key21": "29UuureE1t5hqHzmnhVDeFvYrefoXwtHZN8uDFnXijuaZR28XRGJJterXpM41H75FEUTapmR17Q6J6GUmbWA7yfW",
  "key22": "4f4cLMBbAhyYF5Z4VgzTt1QhjPUHUCNg6UjrH5ZKmcAHVTaKmsAzBaDK2pJQjsYaAz8YqPU3f32fMecwpRi8mXAA",
  "key23": "5vmGTUxYxB9FgduwK4Mg4xmSSYoKbkE4XDejqnh7UKfzZF1CtbBSN6nmCLsunyyWzGmVHThQ8ZYAEXaZvPGxjfma",
  "key24": "wH4L5fdh8XXf6Pm91c9k876oGArtb9P9qTBgJgUzoESfTTSn9LpjCNtgUR8bhA6mL38rHEkxXLAyr4PDZjSUwRB",
  "key25": "4K2hpY42BsXTgtqvvqT7iyPAfRrSH5nps4sE8DkeQXBuYhdPC6QjLG7niHeCahpW4Dg9Y446erKznEbokBPBhBVn",
  "key26": "3FfEFAto5KufamksTCXPKkLcPTPeeVqwu7LamAdG92q2AkjvBYmvAUjDyzn8rohTo5CzaXHzro5cqH8eJDndwcJX",
  "key27": "CgaU6WisCEgHFSP3HRMdJoMNrjZULnDu5sJeg8eDGHQbDywvLu8GsXngBLUw8rn6X7X8WAodzVcmnTkk1Gh1VV9",
  "key28": "3ZVXNFYQijXzpxqfZ9t8PsAFkeGJNfgJaQ4c8Dkzsh3e5jAtDEXWEWSWuvueT87D3DnTjx6Xn5Rxnjwsd5YDZ1cR",
  "key29": "5n4uL4fTPXrMTizzbqkqaVFQVfQTe8QXL6iRL2ypcgL9jMCSWpVbR8C7yNkESUButnoFycVzQciLkCKbkN8Vjh5n",
  "key30": "4G1M6LiAaBrsUxg4GmKB5ewHpAMi5QCyWncnxvDt7JqmRkibnJxJgoA5G5JWAVEsxaSePxGqSZdyYyH4Bqg85Lcu",
  "key31": "3rG4tuxsBVxyMQE5nYvRUtZ1gkC5bzHXJXa5btPitGRW2UsMob6VCbqVQ3H27KbvpJXjeqVMDmapUPj29e7rNdPv",
  "key32": "2wR39y4WvMw93A92yxGtw49z5UV1rNsxemA14Jj8YNAbJxZ7n7ScNWFPAGiSkH7K8NLXZP9m24C7wH78WuEMzLbp",
  "key33": "3ZCVp1HWEQCkkSUem3Nqndx9jX5Sxndrafp7evTZ7J9SYXa41E6FrVrzykYn559pACc4FPquHogsyGzgH3csmZaz",
  "key34": "DvRE7NccmMmCTzkU7i9FdQRsCH6YM87dfhUjSibXn7JjbMzhsMJHey9bMwHe2jgGoy1VcK9tEb2BpdSqy2RPZw6",
  "key35": "2sx8oJ235iEsxQa8EZL5551JJ2HfM2Bd6PQemZ4kA9PhkgiwhLmWCnsGuaEg9D4Xe6rJNHzEeMuQFzZALGxBJzEY",
  "key36": "2eZKXsuU9pt17RM5VEFZwNGcWSXG3zbhdfm8pR7FHn86inykpFG5Q62QM95czqjoPMYJKLy4kbC5WU2qgidoK6dN",
  "key37": "28JAqQGK5LARSaYVYfMyvt4SV5mFWRLCczXqjJVC6rkwcsbKufiMvHtj1sc7RzzhwmC4tx442CMM75Y2sQaTvqcn",
  "key38": "3HbhqtvoEWP2kfQkpxVHffGgrSbTyGqRWz68FTZR2xag1v8rzuFyWHCXQoAqdvBxHtd7cEqbXwYrU3QGF4ofa4FU",
  "key39": "5vxkKVLk2aqdzdAKC3crYzdfMCVFpBCkjioGgMD1pWPHuB5SHLx984WdoesSWewzdzGhrLnWjkdpWyDVT9xSKAmF",
  "key40": "4ut2e4WniLdWyAJzbB7gxNrAoSpqMPRJUBWe6QxJaC1LEcHv3k7vKbcVaU1wYok8scNWrnBhFX3KPzmR9cPwgxfX",
  "key41": "3wGVBSU8fxTLJHNDQUX4i5xhySCgLcBt24QQdkhTWpWo3zpoz5Y4QpJB5NKQbyt6TwgKQaAy8CqLm5aqHqBXQxpo",
  "key42": "5yYCXTtAsZwziHzC4xHZ5mx87Xd2959FMEkGJzKJBB1WibaFwNfpgZwHvpMbMa6CqSF4uMGPhNw6HD9kfbrKpcr5",
  "key43": "3ceP3NpEcJtr6jGv8HzPtEkhakW45s1PMpaZG4ixaCrVDaXWUzgE6DDhXX4a2kZobKVuwSpbXBobkaSewvQipPpE",
  "key44": "4NmVQcT7opQj5dazc7h2zLto3DEHLcoW5AkdSBuKXQiKBwohYLKQnCpbwBLgTo5TA9EnqhZbzC3G75LYUsU63fXK"
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
