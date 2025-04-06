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
    "4UWsQy8WmwiqR6VkpPH2dqF35P1HAWsormzpe8aJfSWxJkhArsFD8zDqpyBZjq5CKSRppLxb5dcMDDFWtEB3JpPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8UW8VKNSYeFCoyr3n3hmkZzegk5oaVMiUKUgZa59i9XXDJ6U7CH3y3chSbxcA8VmqAqLAx9cBvaB8CbCsww6yD",
  "key1": "ympbKGkB2TTtREHmTtFy2NsGeJNAJ6o7Q4G49JN1y3TMg2Jr6DHfxE9KtypPDuuzvQCSFZq5T1nfVu8wXXqGsjm",
  "key2": "2TPLCCtoMQYvxr8fWsaPdQjJDgBWhJHk5k8NhixPEg7aSjcrvahwRg2oPV7erUGxwYcFe1pZHm4uVV2pvsNP3eX6",
  "key3": "saXRP4SUEQFskeYptujpQhVu7ZCGEHZXKJoU9MBqgBJ2Lbw9FLDSv4r3B5EYrLSfdJ2k2CWXhj9NLjb6Wg5XhK5",
  "key4": "54GRV1eAMJCLj3L5L4wqC7GWxGWKwze6rKRhor2yjRdhntDbQr4Xty3bi8kYPKy8iWjsRPSEKJbfk3U55vQjGMQP",
  "key5": "2sEfvtHSB1JEh4uZChJa7gex2U8cm3bPdFs5Z6oJ8bB6M2fjMeaRjsNKN9MyrQAJRQDZLrzj4R2XZcKTurBGAQFv",
  "key6": "2Aqv9jZ6XKp9ggRhHKvv84bAC9uDK6ZFa54Z1zxZZiHXuiPNoNZZnDDdPKR8B1ce3n4ArYUrUwCo7rtFujWSLzEk",
  "key7": "3BgodWG1dAzzuw8b58wr9E2Ya1HX8Mt2zGDdHpc165ptK7Gs97XqV4Uv5gxc2a9BSgx2TTHFuK8S85KRqHMUCeMf",
  "key8": "676VogYgnLbWKGafriAc7FcCNoZzz5bZ1F7VxMmUGBxu83W5J3zweWLmX5ZB53RUPbJuQXcvCwGiyJUDV7Nsa9KQ",
  "key9": "4xzUyGCF6MkGNb4B29eYpRw9qTzdH9Eyc3rBr1FBzCC299jSt1ZWR5HocvEJikZzQ845zfi3m7k8pJVDeNioA7yk",
  "key10": "2Xi12SgQti7fo6nzSUNAULefBWZBRprCQYHG8RAQL6oNqTUsJ8XAozjzRGeRfWHhYc2a4TX5vXe9DF3A3g8Zewdm",
  "key11": "3et3yjSRDm934CLywwF9uhumGekBfz6Uhyg4x9qDibr4vSZpdecDDuButByPdvWLA5D6FNGckSucdwzvv5pHEyFv",
  "key12": "5i9Fo6tSEHwmR3pTB7zcBSJrbUnDRxskrmAbFnPepxLZZH3bWEeAnosLBecyWukt6EfqsLqsVFXX2dzqPoKRgbzZ",
  "key13": "5KwaHT86XNqPPDicN1GHCqogqTcTyVZDCfKhqpf9Xuw4VxYCVVEMtAJ51LtcmRHJ1JoopaoSQyStgTrh6K11ZxAr",
  "key14": "5i68Zjru791FQNdoiPomDYfbaKcZemmmHycpGobGS9B8ahzPWY4YzmnakyVENiTpdVu83J344ERoEeNCEr9Crfgy",
  "key15": "25b9niAgx1MphQLerVgGihEdaD2ZgarP8AzR5Rtu8fhiETFhway6J9vUuyP5t4nCnT9Cr3JwVu1G5Z6FsJCGfr2X",
  "key16": "45LbME2wMq35bfE6rWnurKg2gbDKS7Syqoy13bDNGpUWZVumdYmLSZ7MxXw7KpChDs7M8zu7JsA33qDwRGfaCE7z",
  "key17": "2oVBLc2sYHFNhg5LGWbTcnMBEwBxZYxZkwXY9WccLNgjHW3zANxArX51uxvUybEiSHrAZBtBQD6SyqiwMS3vvMxA",
  "key18": "38WJqmvNzoAyASo961zuoMGM2FhDp9sSeS5PJ9Qwx3YtmZDJ2dJcC6YZJag1woEkvGuWbriLSzAESkfKfKWY9VL3",
  "key19": "CSrzqsEBo3EngW2LTdB8CXZndTV3fgSMSLATtyvWrSNahmrPAM4nEmePiS3zy5DfgD4eWm3EjmjqmZHTeFWkhGL",
  "key20": "SUaRyaBg8Yy9oqnt6nvPTQaJrpvwo43yjQm6D2n1GuJuFb2v2RVLkLEaxNeUep3uWcXKBY5V2hyC7zQe5Lu7Hix",
  "key21": "5pzTUqcaBTZv6oWHYd8rRxsY5Xo4ySg6ENRZmC1XJbD1vgT5sUmiqvwL9yimAU34Qf3tyJsGpKAdpuK1FDaoZYxs",
  "key22": "4YrNSYaY6NhuziCzoic8xN3Cch3rug7uiZwv8C8RSU8nd1WAdnkKh8cwScxAVHtUmzA5nxXRZjzPWkERWZCTr7SX",
  "key23": "4fsaNGqGC5nDGfRUt39e7t3x91gtsuqHJDWpK4YRHtCuicapFYz5GpUeURm7WFayyNFysz6mjVi41pw37XN4DjP5",
  "key24": "3wJiZSBaF2vFzG44yuGcPPAT3KBxjEY9gTjFEcRmqk9i729rMGNWYXSBABf2vHCHm23Uy3TpJizeMbLS8EtpD2Ch",
  "key25": "4drzBfamKuVyLj4rMxi3BJSQ7fZAsBzzpKyFU8gSHp9KJbh6JkqoXvqMHeEqn9vaoYDWNRVk4x42NxgoxWpbk899",
  "key26": "4ykvJRpp2V5Kba4JVbpfvC9ouTBPgBhTvHmKapYpUED42nzW4WGhmrTGj2thfjoanfR83ULwHmehmZ8pa2LiNtuH",
  "key27": "5G7576VVd2XvkmQPcFcWR88WgQx8TXnpFZcj5bu92dz6ew7fUn7wJk9gyL5ECXGDVsCfr1u49EHUzSnULGc6yCif",
  "key28": "4piPcmXx3zedAQjzmh62w8C5EB2aRRhtyUnotXb8V67qZzYXjGE2F4rWWvcku5pfXj7m6shTnjpmmLeq9rw17vMC",
  "key29": "4DkR5uokWYEuy3LGho3vdqXBNyPfodi1XSxHGajo98MHx8HmiKfUNkRBz8rP18ncGhAsH7jzfCgT3hecvRKpzzU7",
  "key30": "3hTJQovPLKPm7FvUa4P1f4K6np4J2Ag3XL1ui754myMnGQNBX5Gxhoy1oFjPN3S9WwZ9M1x5FAu2hB7W5KUyN6YE",
  "key31": "3cAzXAUcbJP6QHbZf8mCZpogsQvCAkhMLy9wWNDfJ3yHvPNcfvCWowPuVwfw4Hwh4UmWfid1TunN3gPPWhWePRCL",
  "key32": "5542FPZ5e1STzRpA2iWcK7fGHXP4kC7F9wYWWjhMRjhC14nMi9fjyEGBv6K4GUMnsHZbVkiR12PTfokZrra14ERF",
  "key33": "45pAULao4vwLfoh6FNSKkxqBZoEb9uE8bSjfrkyGacVkoonJu1gqKqxUN8ZACU25Ft5Zrqdm9pigbiRPUM4Qsr1x",
  "key34": "249s87ud6d72nUB81vwKnjKgqNVpessrJfZK5uEvRy4hVHGkUNvWGs2oBYk1rp6uQq1EoJVcTPptHtRhbuobeRDT",
  "key35": "25Wqyh4MdEJna4zrGYPu7Rt2sR9T4MojbpSQqPNC18DmJZnuYCMod75csyK2ydJPStGXe77t39XoEt8JUrrpYxoU",
  "key36": "3SGA4LKqUeE52yxo1VsjLKVPamCYxCfyAoAtAhaVoJ9Zw8UupwKSjoduz1djaE2FNhuVpErHN2DkpeYMUzkfrbBB",
  "key37": "3Ker1yd44c94mD6gekh495rn9hFYAuiKsiqG6EGM674TF8gvzkQugfWBjaCGyr8gzR3rvHQ1UTKsQShFruWtwD95",
  "key38": "4KnWHAR1v2n3fqZKeivBvHm3825cH4WYiKZ64VPuoieeFGPfwyHX6UCBE4nZXSrvAz9u6TdCnPyEmAB9oXqXduMb",
  "key39": "23EPu2csZd3vswQDPxNCJ7U49898GN8s9mdRdgnhR8oXd4jNPjc4PUrSnXJeHg6qMTXh6Y6qgwKeVphR7HDR1oaK",
  "key40": "3vHWmJgRZf2qByDzUMGZB8guCbR1cDsHJTvfHng5k2zxZKN9kUSRJtgW23ssCk2mNbKDZBwY6fHwNXPEjaZeMiCR",
  "key41": "4LXJwnrxURKNNhvEW3cSAuGZ7mwa4uDYbrE2LymqFqCq77L7VioHJMiUVPuNjykSZRE88TgAfgK7mBhh5Jth9BvZ",
  "key42": "3ZZh5XakV4BQG9E86oGQAWisby8JBGwDYjSkjRajq9bC5tR3vGDTRguCYy8E3GtumZtsqqwMYTPu4HCkKue7qrJt",
  "key43": "47Y8mhuLtasxFukfSFQvQ33t6jrqaBLeZ52nFyJdDLouze4yfYLgELkYRbtHjqPB1sJvvHCuNP1x3qhVgRFCf8hL",
  "key44": "hQwYfkyapZuJB5Yxbz4BYdx43T57He278pZmerfHGkzqSqFTGczXR7vLyB7z6b23LeT88MtvpzHbdvkEAofDpZy",
  "key45": "2LPEQRdqz6vG93FVjpaSaEY7eg36jVJcJ7LZyDX3wojqMuPQsZrRWYbn5dM8VibMEui4obXnfkevgwMqRvo1mDfN",
  "key46": "3DdkkDiW3hzR3vhr8zFU3P5jkLoTSVyaC3N1Muip7nA1UHP2LxT7gT52mAdYAa7qhGay39XPWqyg6zwXLErtetkw",
  "key47": "33VdgXWa7814Zr94zUkgyvq3nZ1UsRTv1rdwjMN1NdNmr9BZSf4kfWRjGasYxY832uJFRAbxHy5iDpNZXUuju6Pt",
  "key48": "3ZV4iijQXmj9QKtoMLPGCJcG8Z2k69V1EvgjjArsF64Fkkju6woWjNdj4WtSXSEp1Vtx1m5bGuAjo2QU9hY7VGuq"
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
