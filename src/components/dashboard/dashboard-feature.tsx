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
    "XUugTAPwrHNTAjxHB4rjajPhErnwQUmxT3xieTNGP3rw3B1JePbtC2iq4vL2YLXeoWovDSomUvN535HueKjM9MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnSMqY29TKd61n9gXxDgscMaGed7PYobkuaccKhSTXAGpWjC58cyRFMS7odUj4NHcYteTtWw5nC9ber3YCUGKhk",
  "key1": "5uArzNCxcJAmqWhJc7dWA9jCxWPUy5LQhgnm3R5ZhDsVQkzDj4EzJyvmYgdAfD4PSqgXhSLavw86FpkgAc2QDsiV",
  "key2": "2qmTkyGawGwhBdadpbHt3iz4GbxmiBt4XRuMwDcQfHyMxdgxmkobT4YKFUyga853cHrE6h9DxWswaxzQnicYNFQX",
  "key3": "4v5LBJyNnpVa6VWWdNGbp6vFmTWGSCVucKZ1cLsT6CwUxdKtUKKCK8J4nWAKGLhf6ZWw5BEvFvB1w4FeoJJZ9tcB",
  "key4": "3c9JFDPM4khsYUfyayw3XAkEopUcNRnBb1hLpZ1yeqhKZuViwvRTFXnL3GMEZnXnTyjWTGhaXTZS624c1na1kCfE",
  "key5": "5VaqzyZoB4GsPoYcwibZ2Pc9NjZtvW6xKwuxqom2NmCgfZBdaAzQJqNVh8K6pAcHaHfyvrBhu8wrK9G26kKZDr9W",
  "key6": "2AbCKnT6f2AsgGuj4fk24jqa8seDmx8B1Aopk1tvjkYg898ecH1t7BtHt6Afs93ZMHCbJXjn3GMiM92H5ECq2p6B",
  "key7": "4n8tpLcPksCZTa7T8fF17Vx2SGk7pjej6nyyC7qztynL173qM2vkENnYavJZ1CTkaV1xgbkLRxoodxYZPaakdaHV",
  "key8": "5pD2rLEm63HUuSbXL55cM7YuxxZ74bvdy6t1YhLHZbT5fFnHiDoTj2R8x53M2cuzAqQZpRQu7D3B1TZzTikXi6du",
  "key9": "3LcwyvTehuEws4zg34C8QXZbrq8xc9m72TWigb7K8gb41F66hzMpWJ9gi6Xpac1yLZ1zJeVHTPxzJVv98HMMwQN1",
  "key10": "4Xb8LWdC3ChQjCHquXho1n3CbWeyJGQoEUohvnrrdaG5vR8R9HRoXHBcXL7R68VK7Q9yPdRLucubgRHTeDxLUvi3",
  "key11": "2HSc9jAEWbgAP4isPGUiuNMUVzjobRaKoNTe1RNem7r7Vw6Bd2oEZEhMf6JqJtmTFu2NGK3yu6E5X3jSfYi5yBN6",
  "key12": "31cWmhpgmo2FcCDe1rRStbUPeVrSGkdk6LcgLzkfsMQPM6LwuxVApr7tjnWB9Rb4WLpBH12nqid7sv51JCYNhiZ6",
  "key13": "2BKtqQ7bdsp3Wt4CVNC2EkoV5Y8rU1BUcqmFB2cdqYSWhshdjgu4ezBUFC4B6zgjmuRtuVrPLma8BMhU1veQ2iXt",
  "key14": "2QpWPY5bYgfn7gwUaQkyy8jUTdZ51Ftq5fNPMusv3kg6ve7Pswhym6FXjKu8ZPbrJ3YZZbfE8dEVqp2KHa2FuFPD",
  "key15": "5NevHhGiytn4SXK686twWMvfC29zQnCMut1BerDYz8Lpv6kG35SMKqEqiKEveY1nWf1PeUBrfrkkQENxVYXDhCF6",
  "key16": "2SVVYnxgdpRpCPLjQiJMAgngK15QqPdUhxdwpY99HszrYUwctAj9LUx33HhvrPLyUCKGdNe9pskWoxzdcpYoxKjo",
  "key17": "5qkLedSiwbfyV9HDF3tvFGbZ3BXMLK39j41Tw6fs7iBoU9UJ5M37jixeDfJN8SbSorhpx6Wd5Zh35q6714TCyn8F",
  "key18": "HFsbJVY7z1G9GxzKNJV6yxYW9oB9iCsg6ci1K8SRbP3jwLh58AApKMJa6sBvfNpzSTFNdpdUHZdf9by5JUJkKQu",
  "key19": "2HbprTE6t8JjvgzHzuSQ7MbaUiHP34GTuW6wWP83ZL54Sm4eW8m2v8KA3ESRKibGaJQiFwBmJentaRQu9U6F5gCs",
  "key20": "4qNegPArWLLYPUDtn7SadWdPZpj9VtjTcLxKi7L3ntm6UZhgC2zosiWrVovC9PcRYyVipnFbadLnGNbYHWbc2R5F",
  "key21": "3Cw5Hc2YWTyNmxUD1hN5b3bsAZRT6U7ue4zR3ZeXQmnBxaDGq5VhQChGRYdjZsx17ZTdbcUf2ZUpsEDA8yivojBv",
  "key22": "5sqkYnSmFPEUK567T6UwJhxKQKV7MM8FBCoPBUdJZj2iqMoHamAESxdRRr1HiE42wo2f4LjN8GjPk2G77yZ9xBN3",
  "key23": "5sfRxdHYuRq4XcSZz6ou8vkynEteVPStepTomcpUJxiBNciqJQCrGaNSjkZNYWKc9AJ9KAV7BXGtY7DRBEX6jM2h",
  "key24": "3H2CAiJ7RaxCAvSve3AuDxUi9PFZZFnbT3ARNdfy3GXCTruMM1UBhBaFePmSFJc2Ce7P1g8v8DiGLa8s3dPRt4GX",
  "key25": "2K7CiLKFKvJKiwZQb3Q4bevXs7K3NHjsLPCUb1S9PzJ9NqwHVQjciURF4mfUR99sU4Dw8jhFXgvNpJM4DHnTFyjM",
  "key26": "2nfH4a4jrxRKdojpVBuKogt528r3tCSJtZsZD44TkDsxLB1SRyHqLSUu32uFY1tnFDWXfo2F2HiDsQPeTXP84gee",
  "key27": "3G74dNXfxjwKQ6Dn8xxgs2H22WZAV9uzZP7FasfUQJ5vABzpo6MmTQ8PXHwerUigCV36skbfux5p6s6vsd2PPdn7",
  "key28": "2BibiYomfhTaGgiK47Wc7vHsjd6Z1u8qiB5mS2K9f9psbmSYNR7ugNGxgsyxy7e2ZF2petK74pur1hmKTzwVPATu",
  "key29": "36J23YpUeqzAZdpayBquz96YwwA3bqjfGFmSEtEHAB5zBm7JjDkpZPnzTvhxxYW5LwVzAHxz35kS98mypPcaxs1a",
  "key30": "2j4i3x7C2K9UJLCHR7wG33QvcA1MxNNFkDrjmEjSwvHaamXxH6CmizBWYmrp8DC5rYH6tnyyBdH5UwKp1Q21kexu",
  "key31": "agPDhUADYTr2FqRioMZKjMc32nNSXhPuhYkPHVVxC6GXniwLWguc7VrcSzaoJsLjGntcMFiMy64ZxLdBtHSW4JV",
  "key32": "4DTsgboysWh9qhdhUuDoN8rMgCT9yJ7aWhWMy5MX4W1Jierh2GRpTjsT18W6xxNMGPaaPwhQfG2eqFxydoCHBVf5",
  "key33": "3dwTiqKx9tU5nVCjimzzVZuMdesW5iAdgZNprD6YKz8cEnmFURtTR7MUECVfqmbaFJmka6NoHZ3dUaXREg2k8n5t",
  "key34": "GXCvFRYnkyHB6sYWjCrgAjvoT5baTm1rD2srpvCmkz67aR3sXUausxsfkBLAHBH2Yd6DemY2AqPGXfb5Ht3jcxJ",
  "key35": "Yu9A2JFemcCZLd64YgJinFz5efjPjW4ziwbXrGRLZGmorhhvuvBxpdgTjpWWV9tgDSdwXW45Q1fUZhhmvLkHML5",
  "key36": "2cbm2Jy4Qa59AjNhzwFwY5JzW3NdJoZPXuszHbgGdGBcmkEyN5SyMRdUUh4gwaw7eVmGJUYTbfGafLwVcxjswjS2"
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
