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
    "3mkEfofSMb88NppY7EW22V4uriYJva4So9f11KpTWZC3NzYP7FxCnM69XnRbqpXWYrXjw2F1xZeFy4UQDDKfUdsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7wocJvy3EzxYZEwLLgRtAKj6jdm5FdcDnzf5GSLhMaXwaCxQxMzoy2AfJqibFnPjE9FiAnZ7YoZvfe2xrAMSiD",
  "key1": "rCtFr13VwEcXS8TB7poLxYWCSs8Jc3pzZdqxGiYW7KXvKP37WbrqkHKdXeVtz8w2jAV8zVmxcyDoac5JwzvhMyZ",
  "key2": "sQMAhdzrAWEwNQNF8f9cwwBoREqgtn1CYxQJVFjLcGYGhxpVyGANgzHmcAdKfYxQR3rtvwAweAUCBJ6VecszHRP",
  "key3": "2ZbEz6cYeb2ucV99Uy9joE4Ag12Rh8gMRwxLjS7ve4bcDRsfbntW71EUEW3YFR1zKFZq9wyuFYeeByhgVVZqVcDC",
  "key4": "M64rWRkaANgu8DU3btPhy5pMEhSN9WPY6CfYsj43oJy49ET5eQyFkNu5b8AFrPZgwjY8rGfTfoyCaYjmi8nUV39",
  "key5": "4dRfNsR88NqySccKqeF5yv2KstGWbZmSQ6bp9tJmcYQWJWytA9kbgjH8weYkJguzPvXEDseSD6AUhsFoumn2yFAZ",
  "key6": "5thR4usqBHmMwbJid7pu4gp8x9TytksDGcq1XvBeoXYujR42mExTbXxrXVWUR7GDUdDn1bynFPPezMQsCrEuC6WJ",
  "key7": "eNEWqL3ysqAY3whRq5WFoQEUybu6E4i1FMm7xkUbCQLmn1vW9RPNPvrwSkcz9Upfn2iczJUWFfomvt8rPds7eEi",
  "key8": "2B6Wf1nhy3tKF4a9bFNnMLEbDyjacWEzcpERUHBGhHQtRUyaK5dSXjmnEVTN2oA64dy6vXwKUd14yzjFNmDR627F",
  "key9": "2KPHQyGD89oGosyX1p1HMmbhzRuaq9V3meG1nrBjgVG5QQLgeLSZh5pF8LSHY4ytVuDEMg4W5xqoqdLdCdZR1de9",
  "key10": "2ypkHYAeLpwxQYz2YmJj5W72J6LBSVeCoMHZdemVt8CmBUeu3oea7Naqkscw7piwBBp4jS1EFQJmjg4yahbm7ksz",
  "key11": "5MP2WRmMsgc6FqTFWqZfuGwfJymbPZQiQqna7DoxCUZmiHRe8DJ5d1zvsaL7kPMuEEDQtzhJGuWxE7UhS5mVHmcu",
  "key12": "5ZRw9Svg74D6mo199Hfj2AitQSnZqLiCfz3bus3x4D2VReQjctQ3dnN2auAEWqaBsfMyA8segQPxLH5qJUFddN4x",
  "key13": "37pAA5uVYueJwTrjs5HMaNuHhQgAR8vMs5f98RCq7BznuJcBLPz9o4yT4j42xJXNCVzoGf5KtnauPQWKUqpGe3KE",
  "key14": "2pH8diK5pd9PPfiY3zd43VMcg2SzFR2AmAeeRDLc8HMsk5hjwoPTGDzMDWo8CwNuTSWZdSsFrZJfdv48Rn4fSDXD",
  "key15": "36v4a5DXAA2iGjTiSBFqg453e3i8KphU773vYpNB4d6nDAigE4NGTbVnG313jAYXFNipcy7Wx7vQ7WuyzhkQEujz",
  "key16": "5zznjjLFghbLCQUu1jZxyB8MbuSH1K1s3rZDJDmLJwfEdJcELWZDmaRuZ3GzLF7jbc8rZgVW5XQQJkrZ2z48CDJ9",
  "key17": "2r24r2j4VfumkUvJ6Fi9gej8FUxSkTn55EwVk7xbtiaekiY2MxA96kZMDA5g5Ejp5X7Xj1E7VTffjhLvM51tK333",
  "key18": "3Q3cEQgTrjwWNgKs4x9MKg3g68cCwfE95Spi1m5n6WjtSLqj9foudpiEGByXgeQq24QSVsX7zbvTtRA9gSBgNHaY",
  "key19": "3wuktroBthiGDpgvJjDnT8y3xT91JbR2JKPJrBvHm8wFPncJp2A4QydfTotErBybVvRzbJhafSQr8MuQauRWLfkp",
  "key20": "4ENuGq2Tikyq7Qm2Qu1KyjQs233QBSL6qfRJdHggxSLufRSUvHv5vWQYepzdF2L81qRz28NDq95gGchgqp2D1i3t",
  "key21": "2XEy3Z8F4yGY1qcjAshHETUDpLr6tRiibxyaCMFek9KrCMfbfXt1M9zab7mtJhGBPUbBNNws7T9uf5u5AGLtjmAE",
  "key22": "3oUqzG67m3sqbqYfFcdGvVaywvpH8PEgSzs1izdtWLDeB5djbzAn3Nq7RxwbEVAxzESC8sFEW548J1W2bbVamVwe",
  "key23": "29dYSMEDrPtpcpC7TFicXrGqvatEjHQQ3Viw2bdsFsxXxtevdikoRiB1iEjkDQnXgotkBAKfLcrhbWKZNkSmY4Qn",
  "key24": "3dCssUGMpNBALPkhCa3qzkvjmr8hrjeoeTFbYBqmmt3wtp9xWoBRD5MZqMhnFNGFFedLSzWdao9J37Xh2nbMKhGk",
  "key25": "3U8bkYj2p5au1kfJyGcpUKs33c6kkDHay6AQfRi6DtGmHjGMVaKisymzVDFgsgkYhXWDRoMWLBMUc9JfbE3ojM8t",
  "key26": "2YtCqd68fzr6uqMhcA4EvGiK2vzioMTKWKxXX8WJD7LxSgq2XKdcLnPfgvehvgrmr1HUYLmf7Y7WnjE3gAhZJeC3",
  "key27": "4876RPEeEzFpEMbJLc3gz7dENQxmg5S1rR9aJLyv9wTQvjcQj62xyc7WjCvrk23nXNxvmE3AZTtV6NFRPYsD5DXK",
  "key28": "4DVPDPgT4ui3VD56K1mDX2ryVKuygcme5YHW3NELRpDeftvJnDn3WSgxj4EwiP1EqmcVHJDc4SDwwpuZCzKNnK54",
  "key29": "sZsoDUGGVQxKqEZYx49vTTsQrjxc4hoRv2R1VdUzKdc42nxtYfAmRugvsStNiVqaUtZnVKdWtvJ9nmoP7ct6zAn",
  "key30": "yok4T9VqM4DwA2rQQXRgxkQRkW4gTRUXgZ1H4hFGUhbR345Fp874M3QNmN3DuVmfssh3cuUYAkaUtKb5XA5aSdw",
  "key31": "4rRyC1APT3wdV4uvoYM1x35T9KSk8nSix2oEXq23Ac2pAD6DT4GZEQCYyASE5DLREQKtu7h5uDpLy9nuNaYmgbwB",
  "key32": "5zE4bnb9bexNdH7MxkahnbepcqLGrWTM5susMkhNbEDYX3SDVJ1wBKbLrZNu2bA3XV8PRfe586HKud9n43oD9bdo",
  "key33": "4bn1Sz2Z7Xqu6W5AQcYxvHdo54cjeS5Q3sCcqTQZHauZPhNCkEqCNg3qJsJqTmay32w9jNdrnxmNUwuJGvhHpmiz",
  "key34": "5NyTLcpF8vn6LzhWfLv3XoLGruXhaVfnFqNPigya1m1qtesVKS7XSECzGiz56myN93dgBP7XgqYD17VmvQ8gxWwB",
  "key35": "5LudQUVcvhjHvJXRwByKM7K82fZHKsQAtJqRz9HQagCEibzMPFhuqqgXn7TtjXQ3kmXU1AbUeVFVtPNgvze5sDiX",
  "key36": "4f4vQjHQGRXMCUVX13jYrss71qLtsvJ9Y79HLxpfXKTjcFNd7Mz3euo6gfKxjNmjWwM93jFx1JT7j8yfCzQxHkgJ",
  "key37": "45hSCDQbmeDhs8V7u5tzQpmxVWeohTufpSdAvHivVyXf1YDCu7UUaP2Ux6HjP9VeMgAZoZ711Zn1RCHAfWKKadrN",
  "key38": "4kyDSMqGQiejzFucrp43HPk2f2PFkGdZiiF5b9AU1qfS6sXzMUAwHKpFxWEt7ysx5Jac19NoQ2aC2dHZyAihzHSp",
  "key39": "5FLanreDRnoMLmJSWnSFnbNmXfe3kHFEi2BB64qAstz8KAkZC5xafko17GsE5U5Z4xVffkcxhnbsARBLSs2T3ZDg",
  "key40": "2FkMNpYz4ZX4LRtVHR5f5GUz8fRyhxcpgjVRHCeHixmT3N3dacravtXBTQCXRECbdeUi91yC3QjPj6RtUYXWZ7L6",
  "key41": "YxfapYkzHzHeuBetNfBkRZR4ZPtrhd1VXV2uw8BzqtjKPhff1pcipYt8Jvy5Bj72NfsBtPA8A9VZhVPVg7gq3o5",
  "key42": "4oPrrBfqoFFKUjU314is9wfTUnC64NXWTtwzpa6bqwRYnHUcZVeZJf4LUgP6i3R3CStGQqJ2dZjfMHhy8Xfh8uHR",
  "key43": "5HWRcEmHYxLLoTsx92bU1BDHGedLoQWipCKazQW45G7KG5kFmQYgZMaFwktGU2rvn35veRJ7c54iZj9K9nFPGpRh",
  "key44": "idscaKdXv9qBjv1c1YRckTtsQgT7WB8iNs4mut6xzHoT4YBuMqmebyL2oeSbS72QCpu1qD4VYBFJt4qwMjKcs5T"
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
