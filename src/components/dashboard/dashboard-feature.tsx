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
    "3kLr5c98ukW89L2X2AVhABYgoyvK8JYtwKLnXeGqyzQ5jqNUpgeECVTDww2udTiPbGNf1NU7zH73QGoZp5EBFjWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Wtd1srpDoHWzfvRA87aB4868327pb4nVYKX32oaexpGACZK64t2ntfnZgbXPaQDm6iuYptm9vi9qvwkBejuYqM",
  "key1": "28gSt8YUhMZWGKnZjMfEMv79YvbsTaK6dVvhyXVTEMg2qxYEMM1qLd3Ca4UNpfewoGtXWQazqoAqUkppicwqM1aY",
  "key2": "3rvTKU6AxhjoNm648pegtk4dijkZRDdkNygsRBa9NJSmu3SYSc25zVrSmD8Hzxgfh4TgXNZc9Gfu9jnrpk5Tc2A6",
  "key3": "3gqEFps5FTa8pr2tXVqzACYsb4hnj6wbbgexu4G59p2BYe9xB2aYkqGMiG17thofWBgEuofb15bKUPtBXDMGPyTx",
  "key4": "W1wEW9A82CR2cWTUN6pFeqh3kpWJooUuUD9NazyjJUxoz46PGK6WQXq6d7QgoNgi2s1Zgxe1CGb3vR5wbHdWRZm",
  "key5": "42keCunjctr6H8MMQTM8hkm58a1M1vNFaKTQRRWpY6DkqkobRciHSma1bkHxMEGPCKBrvgNPgZuHPtrnqpzJS7vq",
  "key6": "5o48ETRGtGnwPe5Dc9TYzK56RqzRAT1JeQjCEciaez3xAXNjBg5JdhohBW18KRsHZ7m6hBwznR9wZwqMw99t3hkT",
  "key7": "52U9Sag3hXpx7VHFTUz9PrH29fC2Wg9xu14h4zSoxQCD4tQkfL8VVB7pmSTZJHUB2ibcGmGKUWSg3jHDJuvMNAMZ",
  "key8": "6PKWgJWyNNQguNfZpcRMRS7PT9CiB58ikkNChfKSiBmHza486v5bLSx5aDUPVSEdy9oWhfWhcsDn2JMoaLgvSA6",
  "key9": "5RbYbSwGvDPUUD6XYuMdjgEUapSHAvh9yWPpjX4fNoSMZ8qRNm2dekrYLK8DKaYSw8GeZFikSfN7AWWbnhfBxUmu",
  "key10": "3RxkNzioQEqxwqVkekY16GJHWk7pDfyre7t8kx46gtdy97eUPFfTCQMGs5gKMuEuDDN7i95ES1ainCns2r3fRtMC",
  "key11": "yQdz4u3KzFqBkmdJRQpabiWtw1FVajLLPqAGPeQRfBcicjZvisNFaE6CmevMpHf8MyV491keRDinzf2u6QG3RgK",
  "key12": "3Lp4qHf8rYmvwKT1F2vnvfmnAo7t7HdyozpbF1ogzPbu5oMguxnMW3GtkgzLovAdLeSmVjroD8vPNk53anBwNGhD",
  "key13": "4YjWpWLzZPjAAfWcdiiPpLg7m7GwDbBJnVdMwvKnmSDW4i4fhsVvkpeEycaDWN6Txe5bh8TVcB2MPLUhMz657bwe",
  "key14": "4bBYN2Z7z3d8mFcKNSwziLTynBYuKbu5H7M87JwauwgMCMDaUYSuX7nqXLnADXF6QJ8HMsnjwxFftbJtpRQ7ZM5D",
  "key15": "4WEP5rUaxAinTCfu1eun9kVkn6L61jrLACeZoVUKSuYLBuY8zxXiYfchj3LnSG1BKw2Prt8JpxHatBX29zUUMZYg",
  "key16": "44iFzYJ4Ms37dACX2kz6jkx28jtVdevBToe8wgTU9bM2PcUos27bQFQZ1s1jqEomyL4feyQ5t3mzNAYt6unvgXUo",
  "key17": "3Z7aioybKSczfBEBvZhDJmkdKtx3gUieF1p9wxgjpyabYissTseiXHWXUo1UZ1tUQSEKPMuJbxphwppAJrkWopWh",
  "key18": "4wrcj6gB5RTH5ujhRx6BZJ9tqmwBByvhaEK3rpVtiWtKtaz8w8Bm7XVXgsWE8S1RNViD6mprAiEKxa1J9YmP1Nwo",
  "key19": "xakSW8g9v3Y6Gy11MR5tfFs6Mqsf1pskoKEtdw9nR6GMBdkSK2fKAgcWYBcPadxQSnjfJF3bhvzT7UnLifXuHeK",
  "key20": "GJuduLr74cndt1KecZSGh4Pd9WCHRNF5r1HYdZbDNBEUBHToeKaXAMaDC4RVrwHiAfxxFAiD1Lsd6gKy961L8MZ",
  "key21": "XzKzgeM7i5sJqjrxT43ndPLsVhPm9ez2ryDbSJZMcjuHoCuUu6GWB7yp2QgUkhrfFNcruLM2b5aBuiNdVxo52i1",
  "key22": "5Kovkt433qXoTWUGpQA5vdQUrW5GXYtCrbgPe7yMT5kvNGQbQXNvwEMdEEsGRw6VpmddwgZWSwR2egNARG5N19gW",
  "key23": "5WgkJuuhQSd57be8vKxvpqmL2n5eWBuN1Rmggu3q2ei9ceoxDXuh6a5wCBWG3JAQ7bnhiiqWQxTejtK6UZtboCYF",
  "key24": "54i697CnkS3qEpgj3zAXSumHoXWMpHTyY1am2VZqRdUpwQgwPkmaFyxq525W88ugpudS7rK3qTRPtsmskdi46NoE",
  "key25": "4cKyJ8NDNaLrY4CKGUkPrTZKp2okp4H3K8LC3GijQwQh4beowx6SzvSRBpqAGaxQSgZX1zcawJMWqCkJm7docLis",
  "key26": "4HyhpQyCoFHHvtpMrsRuAkiGqWPRHhmzkjHVCkYsFYujt7CKKNRofambXg1phPRZdwHT79944nBmAMUzEnF6x8xf",
  "key27": "3WdpEpWyVcHasuivhnrsigqC7rTaCMtav4pRzcZFfNZ6G62xA3LphmVAcvCZoKBdwfTpURm2T8wgVCk74NzJe6rC",
  "key28": "H3MvXgosTzaTtBHzrUqNoz6GxvzN71H4zZVStYEWvZjCKA39UN4PwNMu46F21ywQN4LofbDuGqWChwJAwkaiwdZ",
  "key29": "4URpp59TvrrvqoAaHoLKqFcnioEQxzkb497Y3PzhbieaEEQ3V8zgGxrDzJ4HAcf1Z6eQGxky8fTwYNP46mgJ3PZd",
  "key30": "5rDW78ZsETq8bytV5fYPj8UF5ZyERGfYseGjREE8oKLMdriX5BATzu7v5wRYouMVMM7wgMeB3aAKqMmreLh1hfbq",
  "key31": "3yStFgYnwZHNRvNGbYxx6gTh8UWHfsyGRafGZBakixUdbyKhDUDa93vCPPi65Kro31VqD9Q4DkQZcAuhDmtY4FQt",
  "key32": "4jgVj9Jn61S1Ku6eCNEYQqtJSeZYghhCuCecqC1Uii9RAjRbdBuiESHd5hHgjZcSB7n9ttJoAGNFRb6DHUtqTRU5",
  "key33": "4BtQ5Mc8yjNtpRnWKpTk6GhUVs1rJ5HvVnwsAVZ9xsVbKgCCctZ9opJMTwve2Ss5mLqgQfMm4MxvVjgY6TfNptam",
  "key34": "63rAQWhfoyCMTzePNmAp1arHJLQ56PWQEZXtcHMNWGN2Lt7APj1Rdp5k6Yu78dWordCdrGsCohtvDpT97gzwwKJU",
  "key35": "4WSz6bU4bDun6csXJobbZp89kftLV1kBo8P5cpUzuHmYDsi1YgAb5P7UjbtNz5K8oz1MSWghLbX3ou93TUEfUcje",
  "key36": "4kxBZfBASKYgnZkbZPih5AYZu1msZ1RDrZEgY7jSnLknJ5MkwUYpJzrEbctFPqvHVHx1kB5GxVwmqQpx7pzhmgaC",
  "key37": "2bBon4zsHstJ2MKd2gmbQGcYe8ZYh1L3Sb9cNb623GYD5kHMCs634hDDYo9sW8D1VeZzK6x5f36w9J4AXnvTbC85",
  "key38": "WZUjgBdn8SEroQLk8P5tXEifYxDm7XQoKPbGiCCLVVE8uyqTb9FdnJaVXix4Ya4ERmJTn8qesVRX3knZwxArTzk",
  "key39": "2U8VqiyDrGYvNNs2VLQKzitQPmsNvUcFgXZ1qLc8K7GeruDJyvTVLSP6B6XN5xdLUP2t3AtGHr83RSbadwQKf7zE",
  "key40": "5NQyfwTfDXNfCpdDXVTqVoHJpJ9e6rrcPVogGeKZbicQ2Jfvw5GanGdDWAwWcFRaseMyPRieXLTSsExnx35j6R1",
  "key41": "FWUwYvFxDfKGxV5pcPeFYnwv3J6UxGcASwF8tyAD9BRWd5BeK98yUyzxbxEAjZKQHRFtFDp3s2DbxAtXMzrVbuB",
  "key42": "5t3CaNczezWLjeA1y1x7WsrC6VFmWmfkeeoHcqE82DqYWFk2SwFkNsYqTpSqiMi8rXxHPiaaU1NXNASbMRJEeoWG",
  "key43": "5ZLbiJwnyUyvvXicjWhTkSBGJckR5K5DPt5Nq1y8eZDWQLY3srxEwm2xMZ98Yq86K1eEc6mtGU4Cjj5crodFTwCF",
  "key44": "3Ux3Jz7PfLcT7TcZaxL9UGxYi9s8stWTW8H54Bqb99zAPTPkhiD8kipTRhhyAUJfYNdyRphhxvnsHfTxz3DDspE1",
  "key45": "REGKh6ZyaxQjMxHYJG6nPR1A9y9hBpTHjVnuCc7eQ91e1CV8Egm6mntMjnCFxSisFqiU7m5wMvmVSnyBjHEZMHP",
  "key46": "4LaBR9cgU7dG91zinFrTGnbQXZqw76uCB5YMqQPc6NvNRm2ER4Th7WgAa3FijSfG5khwDYvUNMsDv7Y8aaFy8uNC"
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
