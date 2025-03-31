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
    "3hYo7kxpeRCGeZKroUwwHRmTGq9umT1EEwCPkaZA9F6XabGYSn3ftc6jxRZo2UGBSJjgpzggTWdSv4iyKGobZuFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CkjRSio6jqUz9zjGxYFn8uTLPPvAs2xtuNxWP5b2df6HjXa2fwp5R93kGN248pLzPUhZyum9xXWqmV2jmZbfgY8",
  "key1": "3H6wrJR7vNJNNWd9ydJ6BdTr5f4Nbvqo5XR5DRKfd7P6Zq8FRB4iiUQt8Qs9SETsde7VujL6dCU9vAyG9CmqA53s",
  "key2": "4yfqK3F5Nndh59HkRzzRjoHFPPJoXKfzccfJ5jdwNACN3KMFLH8rdgDmLN39Kd66uY6syjM9LYRyUwvsDGDtAJ67",
  "key3": "UVPoX4J1HREKNYLm89tBQyHWxeqKRtKdy66qBkvygmZMvj33Cb88U4xnvKoNvU7aVK7f1kimUHoBM3AWau9CwKt",
  "key4": "43rmffrYzLcsJDT4sxYgxu1hgeZRn5LzR8rLhax8HvSQgAb5vJsqNgxQk8tW5pZYjSnNfDfFnRyrNNaNRdkqMzhf",
  "key5": "3RSwughoqeyrKWf5VdiSS7dwowjMXR9u295pVDWSjuk4rz1gzN8jhsQxKoTYjDP4Uut9ip2qW77wKeJk6B6CyrzZ",
  "key6": "3Y4HtK1w59GHHKsVVPC8v8t8MgTrdwZApUfUQMqfDCrBgHWXjKQFFVWvY2ThVgoLc3yCiwkfKy4hpkUCrKdukxhd",
  "key7": "25UzeSvAsznH4VJabQL71a46Y68DNGqW9LtNgFXSWSemkyki7uhcD48nXDg5zACZqFzX8BWdnNJ6gmYcfMqYF3QY",
  "key8": "3Vy9xq4bFEVCZc9BDdwMwexdKFVwthjmg1ajQWEX2RFqK8RBRTDWNsn56oUgintxmr9o9X1re6L9LAAH2BLmNdpa",
  "key9": "3T6Poz1kk494gJtK28hMTUTs1YkDFxghNEbdJggvut5rX68hpd8nXNq3s22U4p6iRvZbk6bbA2o5bUX2yBFbpACE",
  "key10": "5uvwteCUo4VsQoCaJS6iYKm8xxnCZU4WcMgvrvsdhVnXFv8nmumA8Abgjr5wBiJ9QZTkVARwcZ93H44iT1DV1QyS",
  "key11": "5qJGxDmMrkXA4yLs9vPNuVVC1Wm2zg1A97emEURHuEi2dRTjq9TBVtTWsfeUKTRYZavNtwn8ftanyWCxU8RGXVed",
  "key12": "3K9Bj8mE7mf8vS6ZvtV7psCANfGWZKRmsRVGKiNgQnTeJvSBSoZxwSNa3QhQAKaXS9dhQQFkimZQU9W2HjnbDK8q",
  "key13": "4qMTo5VBxqLCG7j5gaQdRJ4FVAH7kH5SAdTd5Xpme6MCLtK3PS187m1dsArnRp3cP8Em7eDPV4oDqDfP3wDEPhLM",
  "key14": "4UPJd2QzJf687LY2oeY4iCqj7Xzoh4YZjE4NneUp75GqJWQsfVPuJKeBvXco1wrcWtXPxxvTKvfMDcyuWZHvgKF2",
  "key15": "32M6ekEmQGWKG7CDUP4QNPenUfX2Sz4Tv91cRJbxuBWhW59eoTFzpM5QQRbfQccSbpLv3zGqdEskVDVeXRFs4uS4",
  "key16": "2qWkWQvuAZh5DEc8hqRR5hMPVGeWvJdrnoeQ6fnrNpvHVESt3wLHQHnfNTQfvuNWrghHrAdgT5YBaycjviAE9v3R",
  "key17": "4MduYbQmvTi6pD5uDbQRoAmnPYc9sG9SZHLBWguH3Rf9fodqt4mDu9cZ8jJ3wEYLDyBRLgdTkYiEbP5zspdGENcx",
  "key18": "41FtiZKsWKqrhocFCZopXWHmmuMjgKe6Pcu8XGYbybqKjPUuZnmVfMSYtrUesVPedgtQajKfUtJMDiNj4A75ft3H",
  "key19": "4uTJzJYvtkgm18KPDdEwZvKretHdeRJt3kMerWZ8GxuYRdQ4D3YHSfPU1NfAqrCrHe5DTCBKQp1HbMnw7f97g24e",
  "key20": "wtX77Y7ojppLzDU5QAb5TUvZvsx3uEY5vrEr74NSM2Bxk9dUbgFn5gLeGKZ5nt6bXUWmWSWzjstWt9oNMvPTryT",
  "key21": "4UWiusRVk69D43kFHMXUWjsMJ8k8jUUNAq3yw1Y6AeN1T5pRsvQLB3WgU6QackRDyRSKRJeSo7jmsCR97kWxLDN4",
  "key22": "3MuTnmyUuK7hhDsEb2qm536D4RXSL2drPcvLVdN4HbamUPiPzwahvvS2arsptiB8XTBWUMevmEXL4pKthyqT7MeZ",
  "key23": "252WEsC4V8SadqPDwV4JE9mmQ5nTA2LoR6haFzAUKEYWBuDQ8dBQFCHsV1S73Trfcdis15jMpjauHgDeyzrdNbup",
  "key24": "5LYYVvQCEa5Zytur7twr3VFiM3ZMZSmcw3WxFLx2xCnhdQSAQPsbshRq2d63dNJ6DkKGrp1MNTFtmMRFmtHGSNPb",
  "key25": "FFq6AAikE6wqmT96FZg9KHoTmZpBNGiuQnxmVKTEjx2MqYtMfnNdYiv7Mmpnga6tuMjNcarCQcLiZH6zPZoVCWK",
  "key26": "3swwAM64vhV9vNpjhfdJ6MrRhvMZ7BBz1pMDVjJyir7Mh89qdy9NFvB7zybEGd66xgfbRfoTghnodvD5dcvzr5Am",
  "key27": "3wuuTypW4JZkv4Gxd8pZWFHQDTpvz67rDitZqhbdouj5uEsvhELUzcRJP5gSN2peFKWrcF2jg1pD8Bm3f4UgjSBS",
  "key28": "BLSSFDUaD8FMUnB4UFv3R5icDUGxApG4forWXd5gfW71gxT9hpdRnszhrekzKY8BjmiEE27KayTtDvAPngLomrA",
  "key29": "kFRh6hVhTGzidNgSxPwyVwG47qdFay5Rtj18M2R347aVcEx7k2bYrTvZfQVW8wUaZUVNhkqpF5zo6zwK2Mr51FS",
  "key30": "4i7h9uuFhpL3SHU5wh5NRftg4nU7KaMN4WufoDT5AzKuU8NwwZiYYgfAjiA2SzKCvi8JUUojW78sAQatkr5emTCL",
  "key31": "4DpEdRC3pqJhTbnENwp7aqM2YC7vRK67TGVAoCVTFjr8qJ5snqmtnm9kCsS4Nw5x3vxqxJ1WSZUwGgG3Q8j3W4s9",
  "key32": "5eYKNyhKy9thc22XynJ2epgRjcMPGZKHyedVb4VhNHNcKCMC1wETwK7kcmH4PerhBHDGnfR7WNXYLam55ar8BeiY",
  "key33": "4qKYuZPNLK5tMtMAwGmVS1ATWCQZD9tLhd7dV6aeTLwNke67XD29yho4b5Z8U6uzwTP7EGoMQDsjZDoEcXf9RwhU",
  "key34": "2yz7kzX5GUNjy7C7Na6AUjdzPyfyefoKZCiqzK4Dy5jw7KixvmuNCSujA8rGWNvxJ2vrMQGvWQRfw4ZoSbsxtcZd",
  "key35": "2gTkskD4ZwsSTDQ7HqNGk1hRrzXsoEnmarKP9htuGVFvLfCPenUZzQUanM4kpJh8ouR3ug2phfee2tZorJ8jEYBg",
  "key36": "5YjpwSxu6ENCs6x2sFW2e5gjLYYNu9GR3G7Qb65YuptKysV5KXcktAerfj3EWFWGQMRx34jJgaYXk2GH1SX3MmWo",
  "key37": "Ty81PjgSNvFnKZv14nMKaHh8dkPZKatZVVBVZZQA9BhLEwJpjW4PVcFmbGADXbUy5s97j5bevW2xeKNtLe4DDCL",
  "key38": "5Eg4fGXK4ow9h5ST3ARL7KpFdYHgcWAFgHEmgffigYSt5ZPB2CY4xoDFbEqVWp7o9Rv3yTp5jGp2ZkLf6wb9jn86",
  "key39": "3Vs3Z298CdqYFpaf19eT3TZBcq3FMa7Zkv58MdrQ8ex67zZnLBfGRS7P2QYCGD2GxwwULbcDib7x2DGinPcBiUt6",
  "key40": "3gR5ADWJ1ktsi8FuA9W17t2K8nLF9esWvdQPE4vENsz74KmGYXy65t9C4iok1HyVC2TLQmCbsADanTqzbTK3Hk5H",
  "key41": "66tePaT6ZbZucpaznyA5PcHNqSnJiVQWgioAZVZN2WNfMutHKrwcnE5PkUSaMZx3rvzR9ZYmawZqhcTuor63t6M",
  "key42": "4siEx3WHXWxkUfaEeRFXUWBnCnsCgjvg1tKozEW2tVYzjohPx3yU86AseEUY8f1hy1pKTYfPYusXk9R6ZA6BS1FL",
  "key43": "5fQKH2PqNjSYDEmNK1ToY1KeXzMqaFiGaJMLYRsFXWB9RJ9v8XKsau3HMpx4W2Us6XtrH3b2HcxMoHXKXao7SpkK",
  "key44": "3W3cjEhhyQq6iMFuC6JiockaYMZzydR1RqT7iqkxyLie4LysnfHNZVc5nTxinrrBEJR387jHG4HrtUKaRHNVvQRb"
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
