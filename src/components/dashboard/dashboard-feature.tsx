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
    "4dkYEx6nQiUcPJMd7B4JL1X1c1FXY9JAGwBtpuFxNox4GYzQNR8qC3QgGdbirqLCtGQyaqSLXmNLsVSnRnKFeoWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CcWYgzKyfE2E8RpgAPX3cycq7RspQUaEUK55TfJfC4ARoaowD338AtzU3mtEqwsA8URAuUncnaUNh5o1cAARWDh",
  "key1": "49vWkJJCC3tZCaE1bfCvjJSuwEwtaqZSDrZpJjA5x3EXwNyuaAsdFKWuAr7QaJjSZBiq2vpQpXbjx7vEEUgLxuo3",
  "key2": "2pU3TkQW23vwWTVixUALhznY8CdpNbdAoJ2T1MEnfYQvw6YYochvuLx2xv8c6uMwUT2hBEXFq8tMyomT1BYaqaM6",
  "key3": "2CAqmeCNtUe9hLYW3pDAGCYni6yjNKW3UQD3GRXaDjUoikVwUKsDKuKeKEKkBUL6EnAjKNsYtwECPxoE6a5KBJ4a",
  "key4": "5M9ezCJY8HXeFwUHuoqMevZGcLTsub3UiLwd6Ka6newkPv9zgDwnmuXW2PNhWTmos2ZuY4GtnaXGsRztKTX5s1tE",
  "key5": "26ZXZqDyZBpUNX5VjDvwiGUkASsR92NBtXwSA4RJBKpjb6hiuUitug9ZLWF8C6azHhxhVdATkex5Tc7VHkVuAP47",
  "key6": "2wMKWWQXTdzvyUSVnCcpxg4Tyi3wmJT1AG6WEisQjhEFCgY7fH1jKuLUkaLdgFJxwMKJXXnq4BJsWXtTXsjs7R1k",
  "key7": "5d4ZQDQRNGzfSb8KBKtR3e4Wjz6XnxxGYGtT4t5anr43STRpyHQcoKEzecu7KMejQNGxNio9iKeb6T3x5cNUV7jB",
  "key8": "4Mohuspvh18pYUJCkD9Kx5ZscMmsj331gW55nZrGmW7EZ6VmcBXu2FYRJRLJ8BPGZMHjMMUjCtMwqiijj8VvcPcF",
  "key9": "22j8agbJVFtA9GVzeMkzxVCztzWe4n6WpoLcZrxKLuN4XTKEJatL3h98WhHdnk3KkmtzSh6vWWEJwVPKv4o8h7RH",
  "key10": "54KNYPB2D4y8Cv2nzFPZ8grGh8aXM9cgihanEWFhDG6BXSj4kDgA24yW68NaY181oyfq65VSkrk1sx79QjS3j7NP",
  "key11": "vBHH7ocSXh1ex5m619jqmmLQVST1dCX8YsmFxNFVmqodpnbtYG3cKtnhETYyxRz2G5uqSEozaJmFTB2YDfttxZ8",
  "key12": "ohqJ2oZrPT2AdkzoQpbXe5TWSTQ6e8bJHTiPWmsUCNMcodM86ThasxBDPbLooG7BVvfEuft8rRGwBEP95ndBaas",
  "key13": "2vpjwTPY5XFBfuxnS3WosPAr4S4svwitzWDP4uHhweNeEbdBiYKAUyC74BUbn9oAQADzRmKkCk9jpr76SVQJuoZv",
  "key14": "2aMPLV4qkYPkACsYYBFN7oopHBo1Upe3dHCoSZwMHX834stq3UjeNNYjFFYEjGqg1FSzPiZv693wgkAWcj8R8zcr",
  "key15": "4BxZw2tYLJ78jkrXwBdeEz11ok4XytcJjZUECaNpD6cDrdG7yDEQQh6dcy4BkXf8ytUZqGdWfFphy2oY8N99Nz38",
  "key16": "4YeptHQnW6vatLqR1h9k8pu1emQHA1vLit7awj48KHL4RmUSfDFSqst6miv3uNU8sWLi92BA6xTiiHmGE8sgNUkm",
  "key17": "rgUX3Dt3cuSn5JCj3FkjttwyEKp8YJCNG26fGHv5qx1t5xDRrGdn2ukZKXPtmyTybfRfHrPCD9SLdVXGfNfmDfA",
  "key18": "5YukEoqkCWYKMZ6qs8YZFKJGugLnLk9Cs83RzaBdpxDErMfEwzYQ2VzRk3J9XwZVnBVcYiqDhRD7eNaQ8qKcgoD8",
  "key19": "3W2z66Hsuu2LQaGaSX7rAyWfmxL5puQQ7ckuAVLb7mJ9MCZXu1rFcJU8AXBADTwYgm6E15V4U2b5VjXfM81t4KEJ",
  "key20": "42jbjwC5seFzstK2V9FkzWMG85Xs1eHmUQuPANTe1evK59hm4DSjK3W2Sa7tZZLiEhhpeor58hsTbRqktjyekxqT",
  "key21": "3YSfsbVqDRimbENxPgigAjfGDBdNbmNHPaGtAtT21M68zVJPzsJPvsBsMBP3qh2qmB7TfwQHkHe3MpkUVDjyZfDn",
  "key22": "2MbZmwNqHiEf7kdu1PCnG9gEhLq8HUD8E1dgV4kYFL7PCNqucSh2hqrNMRzzYtBbXVJVyCYYVQNa4M5aqnhjhVPm",
  "key23": "eiF4vVp9oAmjyCVde3XcmWsfRWBKZTBMEHob9fUnnonWsZMxS8CDHpgSS7zPeKPKncwY3KNudCptGR86op4ycSG",
  "key24": "3WrcTGFUL1x8zTSgsR2Hc2rfiHmVcek1pNoCge1haiCTKfZno12xsZBYoJeJuHTGgnBSRaEr3L1xzze3UVTRAY79",
  "key25": "2u8vtexukRGsytuNwQNsuXPnSjUZN1LstgXPf89P81ADPPvbNc4gG2mfgGc5xigXNRxrWZd54TgGavXp5CSa6e2m",
  "key26": "jjg15S5HbX6a7Wc7sypmx3eZzmH1a1229BZrHF7KD2LS35E9yNCUgg2LAE43yDNjDykwycKbZMaTeuSfZ8xoAHW",
  "key27": "5zc1ySFPaiwkkRRhK4spe572kJAAw2Sm6rk324VLSJ3YwjDN2bDiV4eJcKVsVdHdrjFVjcQqeWZcdno8Kyqzkx1R",
  "key28": "VPibdGdFU4ppioJXrqLLLpXSy2qNJskESM4hxMN2hqkssHiH8FPs9RsXb15uS6Tbouttowenb8Q9cHKQRgURKRR",
  "key29": "3QGU97p9bJXkNqwChHn6ZEHpANWBzMtrthywcbquN5ZYQJydcDffX5dKwzyZgDrtwgqvjiyFpX9Er83i2qkPK6do",
  "key30": "5tigkGtjfMnFuTqHB9LWYAKEDbg2u6ofrEg5iUHts1WG9T8j4BgpT5hwvwGsttCowiYBF4tYHT8hxpMTvUtpm9w",
  "key31": "3vs8hvvQ5PAMf5Gq3pmA1sJHEscPwQTY29L6Z7QzT5QxBA4qEvq2xV2iVnV3BMTpyBxZkmpRXzcBKH4hQ5EEpr2",
  "key32": "3M21YqkiNQwd3ZdcoZMYMjNmNMqE7MqVtTQCkDzDSSogLbSva8BJDNkDgu7yC2DsNCxf2dYhweC2YZUyBnHpK7ji",
  "key33": "473tcAsL38rDu2itZC1QigmHrZNzbLpPuZRPf2gA4MSEZ6SZZfJjbZkddZ13bbmiYHrG1hLpKHGh6eVrC7PZ7Urs",
  "key34": "4EQQL6n1rWJAsPmvNoqoJqS3pAsh2SL6SkrzkLbJEsPoQT9ayCHrUVXfTnnLZeSDDfeKA6b8i89od9JmJKgaoKJr",
  "key35": "sjiNsHNAYJqtZNGThfMsTu56C1DKF5Yur8raxmSwgudxY7yF3VokPpe5EhA7ZWuTizHf7rzxqFSBZhM7PCFXeoH",
  "key36": "2RDExmKqUJ7jWyYFhKuYT16xbSz4pNE7giQuqqRWkKrUjnVLBoeGyU16DJGReSp8A8u6qi37Zqs8b7j8SRhS71Hs",
  "key37": "4osLjCseGXeSo24QpjvC7TSaioiyRHewUMM7ynCux5mPuvRxsbiWRusDx6kMSmxbkFUkxFPqdE18U4BhmSm9KXU5",
  "key38": "39on4Qf9XPHdhSwYsCj1CbjG493756KqQAaTjQZos7sTuDDiY3X9hUaZX7dNEiTCdNB8nh9mGfdQZdtu9pmdkAV1",
  "key39": "3E2j3x6MWY8Z1aTqnoQBcfgDRFLor3vB46yuxN9dwhri7CMaJdxS3C1XNFZDJRMbTyNghj3YMc3VXJLjjcpJC9zM",
  "key40": "4Uz4vQKdjjWN42SN9xyDxFNygUrnxdXSdvucLFtoDn1a6kYpVq1VnfyjEStxnTwahNDVbCRkJ23VuUYhijJLeYfX",
  "key41": "4M7MNDzjYGmXf5TCnu2cebwqGtPHAf1kSnNt7Y7znfDH3B8SBvFzGnFs7RbKxjHDoMw98NafzLnZwHcwHxGzV51M",
  "key42": "vtHwpreXmRgwuJ6nU5JubxgFdVmaa9ggescDMqP7Q8fqiqixy51KutTLSw1rywVX8KizD4u5K9NpKMZ4Ci2t1Lw"
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
