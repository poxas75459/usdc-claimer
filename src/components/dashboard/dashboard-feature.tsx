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
    "22ahkkqRrPxngD1BxWYKZUFubxqqNzUeUvmzreaCpWp8Jf5cyeqx26Ko84gGeZxs6gQSMb9fj8MKNrafeypNx8hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vn1NK1byM7HJyFcaCVzPWxmAGNSmWZcxS2AgCyocF4MJPjq9BbMKyHG1RqohSSQ4EDFXgT893BzATsG2Ay5vZjo",
  "key1": "3LnTEnFZK911bGXrKk8LQup4N8cvtZnrSPYYYKa6KWkAT29xzfSaFjqszZFKxkMXSf1cCTwf9bdGuK74czJK3MJQ",
  "key2": "4YiKMTSAzvWZpQHmQcs2mJ9VnLYF8Nt2d9J8bpWvPwgd6WWLM5isPy3LbAekKaiKGrEq4F4v97FL45knLn8DQngY",
  "key3": "3qBgXLwS3XkJ8nMEqK9KaECxmxbunVS4726Dg1yXLfUUk9sTGYLePo5M4ZMRFpwoxgoCSiQqQwqau7oXMYAwHkfJ",
  "key4": "MypKNkTXnU1HDzxPvUv4FE3RBpy5HU1twyY7X1mFtT7VmCGpp1634tJWamgKmPknWEC8qUJWu4ksBUA719adooN",
  "key5": "qeokav6goPB8u9AgxdfHTEuFxFDFwvrx5xNpqbrgZ9AWrMWQJmEBybDzKLT96NBLnSjYLVnJ6ZxK69Qu3TYbtUb",
  "key6": "2CmSXgRNktPRdkdRM84ShP23xWLwn9px8NSkPPP5avgTE2v5Warp3yUsMBSTPdUqNazdGXJ2ZkdgPrbx6mkG613H",
  "key7": "2ZDWLB4m5mK1hra18ow2M87MPXpmrb4TXwDwWRfUSiqCZSi1Bg49wi4q8byQ8LVvZxcPnjqkesbdWgWW8etNsBSk",
  "key8": "5HVZ1sE4rv72dWnjzcKquu8ZYNJ57j589PGCqp6Eg1gXTgmTtM5Fm9fhmiVgMec7RQJkjd362nE1NMT7P63Eybkb",
  "key9": "yWwbUFdRbyznnWsdRoAzRifxE8hAxcsmqmD5oWSbRtUadRJxRHwmHcpG7cdgnNQTDCJyqz6Vze8fqJ5vr4PUkvQ",
  "key10": "4cfKS4ZUhRWxMxxHaZWXyCvLWuh7YibmJ9skrc1qkGNvPSRjMcdcvgX7JctsnND45qst9NX16Fe8xM8F1rGFDrvU",
  "key11": "3XQQbh4RcCie9TEV3xmcDHx1xHxc9woGmfku9p3EZvW3aHWRofve9ZuM3av6rS6yGPyv94HZDUf9AJeemQsMkrbR",
  "key12": "4cb7YbfWT4uYghwgCE43j23AobQaG1z3wspsueHYBAdkZC8v6w6ALvrG9WM2wF6kj2AA356m7aiFo1vgAZsP2WRc",
  "key13": "5HCEvabuttUW31MxAp8ge8Ko2hNqrExKY9PNLuDqWW6K2piJkBiTEHhd62RxqFzvz6HUqY7tbBvgsjmGQwTSsJhp",
  "key14": "5evHU4oqtL2FC2Na7hBKXneeGzGEBasPTb6AbV2FJHLn4L99464XbQ4KVdAmtKMzTMFQcJxoad629P8Mnrn7NRuC",
  "key15": "KGMUsRWGHDF6gMDFqYrDAUErhv2kSDBoJ6BkeVDBWPYnt95zSHSEXmeX942tWQTfDcNtUsJPr7RbFAbR3Q3wVjC",
  "key16": "3ceYtgcz7wrRVvb5B9nzFSgXgBevB97Gcj5BuzwVpnpB1t8i4bZFmezT7xgcTwsHGmWXTwbinkbBehwMu5gd4Zi1",
  "key17": "5GpNxmAk731Pg3gD3dENZ9pB8q5thAqwQaCfjjfyPrxmukAwFMRWVpiGKA35eqSw4phqw8zMpu422ndPwS6H9sfZ",
  "key18": "5QqXXyCLojdnYfX1GzsuqunE8bdDaUafGu8R3vsteXKNjiZyjRZz4c4LRPxfvHVnwY6Hjs84UhgCrtWoLWCsbS4w",
  "key19": "3212NewWXxR1GLSbd8GCspFWqpYMUfAGjLcpCDe8Z5XxLG9XJph89GTWxsqxUhntaTYSf1zHgUCc8fuXxyEiDQgJ",
  "key20": "5LJo9uBpexhDzW2GX59tkCtXtoFApgoTnWqE8PcoVnkzRg1N7UDu3rDAS7wUHdMmbyxh9sqWnodqZKTZxd3YEsHU",
  "key21": "3umccwKHBtNwDeahb5Da8gTHPC1ZvoGBrQPghaRsuwHKZtWSfWuhwkZpRCK1PhNLP81E2Fi7nruoTe9FMBP6TGJY",
  "key22": "5ckUPDqSVLpcMD514ct7cX91225DJHRJDTzob7hZrVwDvj1nWqopzGcskTViWETUuxS3t9jgaaTJ3ni5r1kTgiGg",
  "key23": "37S8Ud6so736A2Qzu4k1ybPVVF9MovpBgPharu6JszR1Etqy87t4eoqxMuLEsHDqvDeYRrTXH3T7zAFzaEnUhuFC",
  "key24": "5V8kzEywks7ztUmKoHh78q3ksJ8QF7cWbwnT8QuePXdBrDNmK9aVaBfx6QrSch8wKHMU2hjNmKcsHK8pwW9bvSR",
  "key25": "3uSaEhjU4K1dZF5SaenE1b8wMPJn78d9sLGFc59E4iSiHv7SWYEdHue8SXMSsVVRHgPBn3EKFDPPdU3XxjssVE4a",
  "key26": "3xperLqDWZ3JYoYrhjoDXqQ2qPVivFwBRw4HiJLmsDamsKBhcWs4f3D22WZ1fV2XyyiJikYgTiY7toNkQvBjDeYD",
  "key27": "5sQGeMThuHAKs9F6hbpbRejjFUMRoN8Viir3yqNpwGxq1K4ibAArGRKR33LeHunr1KaNohyj2pLWAzFXBqeNXaMw",
  "key28": "4i35SRoGe8cvzx2Viif7Yad2fr1RngmQt4QubJUngitJpXxj7SofBiABvWURv4kxXhwfpwfxLpBULS1hLafxGJ7G",
  "key29": "2Zs43XLnRGf9RpvWqxZ9gjzA7MQwG78xZERA9ZXjmhMXj8rh1fcRWWbYsJjNHt11aT65aurb7vDhUmnPpKGgyF7S",
  "key30": "2WSxbC9iUHAUKATGLBeCjMFJe9P65WTwtH28YLXfUrkRS6qdXCMdMGAd3tFYFqEqkw1eS19XSVwRJpnQEsaKW64k",
  "key31": "58dhY2LginvvfoEwPyBCXYTmxqJ3R6LQNdS4hN6MfUv8fmJxx9pRfP7XuhtrYoyQuzA9p3exyEEta69qFfsNAZsg",
  "key32": "PeuXcVxidCPa69UvptctjkL4hKG7m763yTYWZtrb6ecPpBhpcodKAeMm1DvqvNoi3WucF2Vkm4mnL55uiif1RGd",
  "key33": "4zRYXEGCZrqAV8b1yiHp92J6Fc4iKNGfS8347D2arjn96XzAHUV1dS8pzG3Npa4xWc3uYsM2GFy7ek8HR7NCtRBW",
  "key34": "C3puS3VEUjY5k9TxPVQCcjPsAWx3kq7Jt2MwR4n9HpujfWQgdNdEsCXYSUcctTMB96n52pWBTJKfCmpjwTTKG8o",
  "key35": "27MnXqHNQZnH7BCVyLBxdgQ9Yd2d2XtXk6ytUU1JbHcFZxCdzU22Y32Z7NiBwH41PCYWMdef3dBbiwmGwb7hEvXi",
  "key36": "3Abqx9sgvxFipNaMUadfhTwwHFVsagRbigXiD4mcaxbwP4N2oPn1gugLFXwAVgnZKxgQuqwUkAgSibXJw2fwC3wo",
  "key37": "2V9qa5YCXNkZC7aUKj8R7yCPXFnxRu35A9aWSseFVCiui1hzCVeMTVhUPPrqzSxoAMxtwdJpi4FXzzXWmdymTYtF"
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
