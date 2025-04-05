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
    "NLhSjHeGrsFrfjStdForpFgcH7Xvm74bKYM8ddKL7S6zqXQ6zoN4n6nVypnJFaKSzYKBpdipQr93av9Z1xRFi23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MuDtjBgGfvAR266sB5vCPF7vGMVjk4Z5DTRWtjhkPdwbLmLTjdbAL5mnaP3cb6PvtWVoKM1V2FjyWupSMCJS3uq",
  "key1": "912s32EiU4V7U2X29gFWHiA9mmcqP2qjk5Fcqgxq18WyjkNqRaNzwJcqPTiUJoGjDCM2cjnEoTFpX9PwcLkugX4",
  "key2": "gho3xoYsptyw9kM76bwkxR2g2fhzk9pDAF62CtBQ3zU1Lpx5kbqh4wcbBBPtPvesJEivVzZ1Mz3CVmuT4R69aDR",
  "key3": "FYQvdiz4fTSTqTdctje9YFNp1mUX79oEDNicP6rP2PNPzpaiJ2RaExJpnccgRGaJSbBwf6mjRiT4YMPA2T3qZ3k",
  "key4": "2kzDNS7QMqLk2JNJxAVH2xzWx64jrdcjwgRknKWjbFGACJAfnQChXYRQPfxUBnLXy9RJDvyNAq3y1xwez1uzWSgB",
  "key5": "4zCcSySCiGaeUQNUFJcDP2gXjQaAxSR8y3E5DGLN7cW4KXKiAQWmC2rZMfVrHgUpu5CtkvESgFwvNERARQCN1DP9",
  "key6": "388X3spEmFeDsktXGjKcmJhXDKDHs3vFUjnUq3ujX2mSFwoJLTiNw2fbP6hggqoHN54wHEoRCzqUWUSa4wY5oiHh",
  "key7": "66bfmkuqoBpb5et89weGs8Ya6VcrtHdPMyTQA5sELAy22ins181zA7uipzGxiZx6TxrqFAYCF7fUsgbRqTHxWmhR",
  "key8": "2EpxnjqVhxhCGNxrNLUxsjrWtv4CoEa9zYYKeYMAndXgThqQECysttQL2yBfM9b4PHshvFduw9YG3kCQcJZzSc5W",
  "key9": "bFuHWP2bxzi8NX1aZ3MJ2URoVTfV6couRLAXvqas5oumXFWpWms39ATkPHrAN1vQveoC6bZ8WohbXVXfmMgww4J",
  "key10": "5Aqm6kdFBkJVxE18ua3CqMJBtD4giWA7noE5bFDH7UnzF5o4PexfrnD5zEK5GwTi2FRtwB4NmGWebHaLbwKwR8c8",
  "key11": "wiaD9NpTgJ7Q3dqmcs5YqWJfNiuLowQBm3CPYYZJj39RrMryxKVCisvW4UwH3ZRXsEhtt41G4T76s5hDf97oGPG",
  "key12": "2CKEYSyS9Y3XY1LfB121Pznbb4dqUUJNeyqtWuEeTR8RdqdWxhBDcTmNx77sRHaQseKbV3ZnSESq7z3N11Hy3F1T",
  "key13": "2emLe9KZL8kwjDqn8UtWnShxniS9UnzXMnq6hrqHVUDvnzaejgRy1cJ2xvDFPu2YvseH3RvodCSoxdFapVWzh2p6",
  "key14": "322ekSUm3mcd9aedoKKAEHDmCh4AKib5GyBz16rKqwBHo56yr1AvSHsX4mTJM4vpLdVXWufMgRXzBfgf3AgeTsNd",
  "key15": "2dUFpnTDcDXEVwU6hZs6jbFcXcQ8v3poTGNcZvzNRptz2p7289aZpnkJMjgsVNz7wXTqvLYBqAmyfK9QAxv7CcTa",
  "key16": "4GznxdPaSRY5kzGE2172RJiBWEaaZJVXxJJbaDbW8f7KjMmYWRX6WvhEL96CjvkdNh2jC3dWGDxyBWRuRs1cUycx",
  "key17": "42w1myoLpSSEQ4ybiFohVzQkk3jAyVuBBYnvHRKC6FvzmAhid9eVCfnAgPQqv5PjbnHDzzV7RfsVBAiFpJVJ6RzJ",
  "key18": "nZgd7YGdahWDetqgHx29U8Ki1s5WnWDKuJbahMzfMFfDZsYTyhjwZirNmf9sgNXnuobe8vxssS2y4PMyHTstadD",
  "key19": "2RqYkZ5WZDehUsMZEyFZW95k2MthjM6Wt2Fa6dmp5ZoY1J6z5JkMpQcvcETHU78SNAD7U6Uj3Ck8m4z21CA65jhD",
  "key20": "WKRwv25PkRz4oPE3fAWSWVy4c9JEmB11y5Wiv4ap24Eu3WnWHy1pCMMfzGtHWNEjRmkSg1BB6a4N2a3Mt2ZA81i",
  "key21": "58ahVxoHKDCCznVDZkwmtysRWVRM1vV7e1eeKffLHkYLyWMa2i2VJGLjbjdacUUkLiAovgRB8XFSid6vwMPM2Wc6",
  "key22": "37bKaX2VWyrqQE5mk4Y2aFGUHThrB1rLZd7JqcVNPwcZCeDHobNVXxpEw4QuKhaYiTbfz6vsr5htBDi9A2j3LEKT",
  "key23": "5GeXwNuDEGC7vYcAmjHLjsAMti4XjVEDSUZiZr6t7KVsV537xPYgyVuD4ew6snPi7jzo3voTtpDN6GSHMyzgo168",
  "key24": "3LX6huETk87M1Ed5qi15fVKJCYtohfofMbt1rG7qGc6CpmXeWf7ianpKWWkn4jNA98DJT5ix7jXH69nmxGuFLmN5",
  "key25": "4ytbgStkU3bQH9DtN5Cmew2yT3iKwheB9kFwtfHUzaG4o6uZkiaq6oWMkR4Wc6cNSpNAy5dEiP3tNsUx3t7viKXF",
  "key26": "bcea9HJxFiqmVEzJ87jT7CsyPe39hugTJ67MNUbwA2sxvN4nvicJ5meLoyd79YYe3ttgQXcqoNW7CaFWsyLC2s9",
  "key27": "2Vt7euSwcxPe5yc6pMDohVD4g4MdXEQ9XRJ6n4FwSP3m1j9KqJUQ2L7bqmgAxfvz1NaqTJFQe9spYrv9urSBzJyV",
  "key28": "65w1tqMKtGYGUqixb2zjoJHqBdjXzq7xyPLUQV1nAhqWTM39dvsYEzuR9htK558nDDDPLd3D1yrvAvKJLnwPHgd2",
  "key29": "kPr189EHUkL1Q1iNsCACBA7sqXxwKcfoPXVGMEuQLoNfQz5e3PYek66zhaR1j2RjA8iN2CzfUDShkuAQjqtptnX",
  "key30": "G5vzBYNR8mA8uK78jaFQb7ihZhXXZNUoG3qAhU1mwLBZACZtB2mcvjdJWmQECYdV9qmfDsjrwYaRC7y2Uz2Hejm",
  "key31": "2ndRFgZ85naeVgUCKVq1FD8y5v4mJC9YJhvjbJpjK4VXDUud9Yh9Nt13CUqDUM9YPVAMHXTrQhp3B93XYTXkrPjR",
  "key32": "2EKB2Xxgj8JMrcvDT4HJfZFaUrWVbzguRa6sx9iRoMPja8UkpTcuFaY8RjEyx9E8vHN6q6p3VaHSixhPTMpBzdVq",
  "key33": "55RCq8FWC6q4WEEsN7ka3SQwTjj86UHvJXpmkMB74sziUp8YZ64GGnsG3vk6zKgQR5aKeEJNs9zCUEbEKW24DJnf",
  "key34": "54FMxvcbLbfLeWGWVdogJCD4dDm4i3GBiFArML8eq9B7AKVszmDshGkQSL2PDVh1M78VwJ5mMfArtGask5jxKZVc",
  "key35": "65wTBRmAAXT9WZ7czSi6QDcqCWEAG2s2rN9tcB1iBSEqXC2Tozs7AyCty6o5dFWFymQAVBivYVJ4uBb5jPTb6Upg",
  "key36": "2aktuH1JJX8NCYBigEBJbbAxQA3TcV963qCbZA7YDm1sUSH2sBZh6PvSGPQYUiQEjghtmP5tCZpVydZe1jJN1uLd",
  "key37": "3ZCfxPEGrYC134QFGdZemj1ScMmWbavumd1wKqq8kDPbTA5BScEFUyUXdFvszgjFD6SZSDxtJH3oTpLPZXD73enT",
  "key38": "4KvUpmy7WyNfYSBeneraFZT6LT1MZxce4A5nWBPBhToyPNe46yA9JHXBPCK2yfno2ZPNDP5RvKZmHjk71ujdHwBu",
  "key39": "53VQmX47QGsWh7YeVhGfNAWbnMP9m22pxLbCUYywtwY6hgSUBzFyPVmnvYM7sTa9gx3ZZD5p7iY3SV16uyH9tTp3",
  "key40": "2TpPdQb5sQ5hHopvmKwG5ozEL38uHJBJFMasFVghrzTPDvuwSVbauJNGJZNBczMNQ13GmpCDsckQdG2Gpo2QGPL2",
  "key41": "5py2woMzHG8FvC3DbaFTmQzcm7xjJXEpFTgSkGbpvhaw6ATrSirF5BskZBtiDrunEpMjZkKDhFBTbtJQnEnVaTYy",
  "key42": "ABDaabXz1hqZocnDLPeq3isLxhhx4FdSBCiBciA8sqZzTJGnVGucckF6pgkDkfLhGFXa58v9kmJJuB4i4pyfmUA",
  "key43": "3NKL3DgvxMnTTfgrnyc5SrpyqDkLBpjwY6ygtGUwaqaqWMHUcmnmfp9mr7zAgQV7aaiqG15VDNXq1QpsW8VLW8sx",
  "key44": "31syQ6W6924m6WW7W4vxy56ivtzyrQS7XdxCBjmD72D5vKM233V25q2Lk1jZgmvqvyfZjoq46tV6YpTcHeKFsQA2",
  "key45": "3DAzpLUBajwB8BwboqZ7tYvy4ZTbZHwgafaMVtgzZKP9heLUpQgBZtVwms9A9c3ecm3Huzi1XZh9zyKo8tswMBXR",
  "key46": "fEPqVbWBkavbGCSwocsETRmuToncepzHGMAqaedvLzpcf3gufBdhDkQQp5JBx3Utvs3KTidrr2wnp2kipg5tuC4",
  "key47": "WyQX8rQNqScHHiUMKSYNWXmuzbkhRSgA87uiHN6kpKJqh6XT523Pd5VMw1Kr8W9j1P9jukUGzvbnT7HnViUFMpf"
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
