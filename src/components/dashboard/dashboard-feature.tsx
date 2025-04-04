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
    "5iR6iMDkjDPP96uSyhGJHVbD5vtVNPdb1HN4z7n9km7vwonRXYXKFHUyhuCu86HPovkRnWFTbbdBuoux8tGZY11s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hfrAetuwrmGe3xn23ZBE5fghSRfeHU7LjuxJZQXvZBc3avcLSpvAApSjw5hamzEQzwjdMDrznBr7KeT498aQAN1",
  "key1": "24PCzDohu587gzcPxKYnvTXaJfWcUC3E2YHDzJ9N1qoRH45rffvFotkYL2CW7cGEREHJnftUqUQNqdDNDYHFD8vc",
  "key2": "56C7bpNBWwWtsEc8miKXPWvPUNEzABK6K8AVKUrx4EtPrcfdXtZ7d5ppVKrsjChGHpTaLXBmUefvZjPMrMKCisw5",
  "key3": "48ZqfHnQ87eA1kWfWdaafeytYChqVyAXF5QXyJEmu9tDLTtWuiGDoGMaUqovTdPWXJfVphpr1uhbVqiyEZvy1qtT",
  "key4": "4PTB2P8kGvb8UJuLVXg9FgA7J7s4NJDVVutCJbP2tghSsCxeDLXWDaYzDFzDr2hNXonvSA9yMuyyKVdpguzkj3Es",
  "key5": "467tcsHf7R6tCWsU8fkvy6XeTUgVueAwENrJVcMK9JQzwSNBLTJniAs6HCAPwQ7574pX4YcsGqyDFCCZQjcd2oHh",
  "key6": "5QRgXct7uEBV1gm6BtaYW28K4WSTCvAHRvDpGGpAodU8Qxq5tNU8GAAPWEAmaRptoPsBbvT6WS6sQhmiCo2Q5fv3",
  "key7": "3us66bj3kQaJWNKvtVUNVxbF7DiHjLotG1BUKcvZAtyx13F7VHqppfPo8KLb6Bbome7vjRvJWJ4de39nmGGMFDPC",
  "key8": "3HXERZVixKtQCoE7MB4pMYCiTkZqQV9J2xuBwXGUgai3WuQktYSXvAPmYsxQEwhnrY8Spejuu2NYYKkJvBiTvsXg",
  "key9": "4v6t2mkSoPV82CwdkqcstfmZ7djgUQaFpc4UxUY4J2f9sqKgjbJBqUemD1Dh3GfF3ySSgGkKaZVpq2ynXkG3D6xd",
  "key10": "26H9btR9U1kKfYcdeoUp72RAucSiDDNmXkZVg1PETZxZ22BNnxMfNViEWXEtDH4R1GtKFr6Dr6VgQTd7kRPu7jtt",
  "key11": "4VmVxnCoQ3ChB1PEqyN14iBacmLRN29FTUfd2cSrA6p5sULh4ooKXkCYQCrq5wYZP97K4wnmBsJn12NgP9cfWB24",
  "key12": "2sKSfsdDxxJ4kdwKf8k8jWU4c1XcLjRwAQ2w84PsDsXMcoE6TUcmmCPEhUvb12PMsED6Dd1N5qifBrYk2v33cx12",
  "key13": "5xt3MdnxnxzgPH5jvyvkejkaTbpSMU761RLduCGmMKEPqiutnMJp3YQDWHgNwLUVtgiu6hxm3AhGQ2zhhbMBhUZD",
  "key14": "3UQwYv7J6xsT1jJLY9afiXthCMacADiHdVvhHFVHb8Dcpfv96ySxoHJLHRRd2Vu1kWEengJ3UYq6gHSvaweibwWP",
  "key15": "5etBro2nDttEkUC3zcdAu7TAxMi6paxz3pjU6baLq7zwsyBbeyYqjR4ddbAySr8ktAm3THYEP8xd1vYVKjwjyV2G",
  "key16": "62n2rEHf8uYWQcG5hJ1jdk1QUhzScwyrk3nAvcfhy1SHJt46FYs36dXnCe1V93uguNcFexHYPRz2zNF9jaxi6qqv",
  "key17": "5AHpgE29ofqdJK6nZCipzVWrG7qfbi9MkXuPUuXqCKaqPi91FDNrSFN11UDymkAdkR5BUKPEqsGFiqjcUxk8pV87",
  "key18": "2eEfp3VCU939qPCT2JhmZ4oTpKCbQAMy2moFDQN3WVtxwubdQhX2Nrkhn1NjjZhoNGaEqVU4HW5PmWFUkZ6V297L",
  "key19": "3Txfnf4uDSHKHM4Xeo9vEaoAv9Xj9GQbkaKhEWzv8vQUvbPhWmWLQHDDhoNEb5VW8UUnuVeq6RhKkNnbCjRHn3PV",
  "key20": "5RWJQS1iNCzjBRhXG8yxfUH7hpsQj4mEFyJ7NjS5WQYJg3XgTucv7yGPozeRacuK55mPT3k3BZ9iPZCwTrWqzLaA",
  "key21": "9DxDMJsfFWACQdUstzTMVShABD1HM6WUNz2vuHqYqj5Tzs3EqBkfJ5dmHLSdri7G5KozM24gB5gBEDHpp7Zt8S7",
  "key22": "3bvQBMzk8VsDhKvy1HLVJC7dpwdU47qajqYXdpzrQCGw6e7L2vHEenkWtkvbMv7mipXjA2FqUf4BwsK78TJuAEjK",
  "key23": "5buZLbraycfNMDRFvA3rNZKSHSYSRSzPTQf9eSTTJTbqWTKVcEhF2Rttjr8SAGT3RE4CK4bSv4qTskLMWDrdpjv1",
  "key24": "5CmsLAA2DBTFekzvxdLJa3Wi6Y7MCeDnGyLuPDkFHZ5eKcm2Gjd7USt92MLaS6vNJEUYe6VuGv7p9yTggqbbyZ6Y",
  "key25": "3LPi2hDd1MCDWy2UXcp8TiFH3ocYSeBKo28YPZdXWRVcBovVekfRCZ7nfdTM1nrpEdTruK4G93Caf6vTwh52a75Y",
  "key26": "35779XGRLPbrdGDzKWGV1oyuBWrPp2ap6G6PJUJYibiA2GAKs5jgnMWZz2hueUcc8YcLVucb7AAZNbdQY5qXtaGM",
  "key27": "4HenXmZPCmHBJ8WKfUBvs8GDw8PKzkYxMthdgifkxKZ8oF4CHVPQY4PrJSVcgMt3nvHUPBRPVW8QTPMLHS1bT31Y",
  "key28": "QrHSeNttPUyua8fBjdyrK7F46GdaAjzkX2zC9eyFTknFNBzsSnxkdjj4ZvDNZ2KSwTa2SpuvGX2CDHrqAycrmu2",
  "key29": "3Le5rQz1JoeMtd7pTAoA66zKbyxq2eubN43Gc6yXkuukFHHUMPTZXtnGeTnhNcDKckeHiS6b3WPUJzhSMQvSocS4",
  "key30": "4vVqJhv4hWQRnvbg8CzpfmCFQHfPu7P9tF2hNgkHmQbhgRGSh9d9byHRXztpFyVfgVReRyfWzq7XoyWnNqvh2p9E",
  "key31": "yjTGwXi5WaVHVpjraq9xQWYUQnqjCAzjR4p5jdcqTC3HQyp9n1ChbPA6fRUvPcebFfdH99NEBJbqCZbG2EVhvEt",
  "key32": "4t5xgyWaBgoYYL1AfHaKeHMKkL8KvWu6yGpc8Z4TaykimjkCSKXVyfAaBaTKF6niKgMgtiGLD8kn34ytYkbECVwe",
  "key33": "6Q9LUoNrCvSteecftHyygtEZ4YUa9c7Z1yQmzyM4fvCyP5ztcfKVALkFHNoZk6qa6ecr5Ls6pLByoAiqjY4pmPJ",
  "key34": "AcuNUxYUzvVVeqQykrcfSjmDjs96HVeaJmmz41NmrXSFad54f1AL1exFM6MxuK6Kd1uga635yRMjWRsRs8JZvSx",
  "key35": "624LQEhFukE16M999F41ZGYVALB8BDKhAdrN81WZH6xTtcETQoidP97xVHhtXBDutmb2ytR4c6FrCiSNH5zXH5Zb",
  "key36": "2ZQFhnVJ1Ep1Zi8cDGRYX5xWvcq96X6XdYAuNRsWR9HsKvUngSfkqm5eQcyCi7u7pgdtNf7RwGmsJd7ZFHtEteQc",
  "key37": "4vdzDe1yNHGtARB4ptgLRMpxg3oZ7gxbx2HCw3UcaXd2AH5ohvYqGRgzTQxU3UpSdarpjiD2D8xey2WLYCq2CHM9",
  "key38": "5bHanjvjJBrtuT6MfjFAx3HTrDq7uVRrR9y28C4udKFyaWFtPTc8oB46BuAQD46VskaBdaooZs9D3qat7pFPss8i",
  "key39": "1hH2xVRSAT9HTLqBBQHRkZdKqBSDP1TWgDS1CFsKfhikN2Ew9TwAjCU3FeDYPgc2BKwLStfQDrhFvTTcP6MQfxd",
  "key40": "4ZqGnxi258MmoGFRTvXzUPgLXBbFug3C8gPaD8FXPPyXMa6M3BEutzALQKiJpHuT4GWARMf6MBAhMtuCQYGwV39x",
  "key41": "itKsqX7Umqr4jZZuvQxYDdT8qv9QjECPKFnEPgfefTksChGbGykCYfa668wCgnc6pW83HT8yPkwWJwxBa2MpFtd",
  "key42": "3L3Gca4b1LvGrrCXTizA2yeLsLCAN7sahCkv65owqYLNyzwJ7NzuJWhCE7XSBavsWruMrM7PcvzBRJFWCtTJfkJL"
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
