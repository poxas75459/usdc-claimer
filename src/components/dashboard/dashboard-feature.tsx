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
    "67aQ5vH4RGS4bQF6vKsdsLkhwpn2gnhLVUuadr3sQU3EZewms4GAgeSWPRGGxKY2NgEz3i8PfMMAgGyCcDznnzp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MyoLXcaEb6Ty7yXxF19Q1nVJzzqZc2XKVN1LnJSsfYWSwzeejwzARVVsDhQYysGwENYg3heDgnzs7jnMs9oVuh",
  "key1": "4JmTbenUZUUDEEP9HzeCnHnk8ydBZBciPYAMNkc87NZQ6nDN1Q4rrtzuWi81pG8ju77KYTkPpUfTAdmS7QJp6j4u",
  "key2": "2Hu6pQ9vuCGeucxu8f7b6hes2PHUjXBKaN8Gn2zCh4aDMYcZeLAZogXNumgKxAG3CvGDiKewDiUCpTDzh67AvPpc",
  "key3": "TPFnxFZw7NZSVpmsFwCbYcfhy3jz8x4jAR6Yo6xHXb4SbVtWu2ehxmzPdjrsH3gdh3npwa86QCqeRqaFUnPNBZ8",
  "key4": "5vu3x1HC3jrMrZhRoKj96RpHTQJZWJ2as9xchE8jrkVagaoA4xshq82WpyevzECoFtFwiPcuLLCY4MBo5vZvw4ms",
  "key5": "5z3AvJuxqdQU2sCeRUHJ73brmGiDWWhkTi9741cBEwscevaXCFbxGbwVHEabdGGZGC3j3fLmjVtnxQ81Zvd9o3b3",
  "key6": "2Mk4PsCErRE7ycYY667guBQZ1iEcgqPoEmNJpxoPzJ6s1NvKPCA6iknS6WLvcPhbqM5255BZDVoiQYNRccpBjyHA",
  "key7": "U2JoV8pGGEPJVaCa6ph9Di9AhxqXsYQD32aSx8KkAeMVAqXgLbNALtzDREXuDke9s28yxPqj3Qpuci9Mtmt5Lsp",
  "key8": "4kq89ErSpDq6QrPEjbcyVZg1d7rAtZ8C7qaBvn1hMr3mTxazyQsFpMSSQoKdYkpjfXQBGasnEpduigEzq2BC5KjA",
  "key9": "3hE2pomz7KEPg6VhbhePLzvDwmrvy2RBwvLssPsm5jz3PN3Xh3WaZ8oBaZRnuEAU6fiVjnwkjT4ivb96976RErYk",
  "key10": "4AdZMxdnbbz3nmo5aN8fuhD75YCALMDJof7fRG2bCGa5fC8rSAVYzFQv4t8TCXaXGcJCaJnf95Bq18Ls8DNtBgZy",
  "key11": "MMYcrtq2CodjHzUaGdzbTwKHxjBb1JjuXpHnjVLBf8MGTJY9ycQ1nmLrJDHCeEhACijFmBjjNWuHya9tNyau9ei",
  "key12": "2AEAok4rAnWGttwy1eSdS2o9LZdCRiy9S7FV7ddtVN1FwmY9xBc3GBrhEd3u6jq3idGCN76TrsG5q5gZEKpBktcn",
  "key13": "iapJfEquzY8HKxvfFEM6TKru7V14b2e1SYDpX2jUCDFChXZbYd3dqjHLQQTA4LcBzVtQje38amXRfi93MeejHx7",
  "key14": "5TZUm9Tt6UqpUDP6wXw4rF64NXjQLxtBjPhyw2M3FktwCJ4mzLxpCxm54qQ4vjpWjzhjKq7PSx2gYA6QX4u7upYb",
  "key15": "cZgK1Tre9PGhaTtQv7R1tbbj3pt9VsV5HETjW67KqdeRPfzgHfMhhvDZMf5awKRAYi99sEC5hxMTE2Ays4p4oQM",
  "key16": "C7n3n4QVNBESGj886Zi286NQETRYoDtjZUtQ7DbredxuBNvNm8zM7bCqeRYmSasesfj9pZ3ogBMHLXFyDbctHU4",
  "key17": "2StxDF49arRtqJ6fTWPHG738ppt9wTEXL59bc4z12Q6CqX7n7s43sWjSZig7MKRT2xK9LmLoD7o28DEfUd4JX1HT",
  "key18": "JCtLTT7agXffVfpQTHACET2yF3RtAUGU2perFJE5MQoRZ3nhoL2UZ8kiZ28hxy1ehY2LDREC23iK93UAo9dKgqC",
  "key19": "m1UWrEMLZxToSgsWUdPNAZ9gr5xEB1AYjqTV9vUpn22MqqTEmFswgR75XAwCDpwGzfT6JrpSKNZyU39Z5otcEAF",
  "key20": "7dwLy3nyPBe2yp5YveiheyVs5wDsHedsrFCf1cXSP8qLc4G1an3DBqjPYR6e5x3UTf23qjDcVj998ExtpkrDp8s",
  "key21": "5dgnhuaRsLRC1Soycw7eiXJutdVHpprArkDqYKbdbih3uFNKP9zdpZi3UmUPgQ2kdYXwBc2QKGgJcrP3tvnCrPwv",
  "key22": "4izLbU6HP8rNiyFNMgD9bJugd2BP3i3Dug8GA3KRiStUsjyB2USZ2jip4MrRkSGuVLGDL2vPhsDoM8BPpxFWhr2z",
  "key23": "4uzzoFREak9GHsTu77rwnGpkcu9myyVAheeDp2K4TeqB117fNYSthadoy6iP14TpmAurFTjbWMKJCPVrQv64iygi",
  "key24": "2BmFHDJKeXY4d2dTyQmreP3tSrE8ZM7LSsj4Q5YWzzUCb8F2XknPAULHgzuYTV5jkwJaKFUTcXKH5reUjaQHDQmF",
  "key25": "5GssT5QZiErsEhvpq87cddyFTD5LgBS9J6mbMuLULD5rQX4FWuA8rrvhTGBoZD9NG7zsk2uHuKViyKUXgB11UtXY",
  "key26": "XH5PPfRD6qMeZosrtDWgHbuGERXJJVuFmbKkzSVqZpVatrDmodDCjKzKDfXVwM2uDTdd1a4x5HAqxneXwtZbCFa",
  "key27": "2m9YnDUTGBHvMAyyoNR9Y4qGANwDabR4CesENMrRi3VKh6sFWEbcNcuiwvcEKemxeXXX4vJ6LpKtTe6WweWJ31Qc",
  "key28": "2F2yRLMVb4S4CknaH9mAfQLZA5xLraXWJ9CbHNhUjrwNysU3nizsbnJL1qAFijFfnGv1rutDfXb8d751KVq4iVNm",
  "key29": "2c1RH8L8f2Zbg1Qz8nGeCSgfsZRpRCwfr6iMpGFf2DzWpfjQ1bdRfg6Ebg2XX5nF28QKGC4sYziP6Wj1om6jx99K",
  "key30": "31RnXzA4oxqKmK3GPfgr7Eheu27k4dUECEPBdPa4XNLc5q5CY3LmKbrHh75yKW323bdzUyYA2RtPc8uYawZ6xnpD",
  "key31": "5gXc22JET17EneuW1yXgTKEdzXQyUD5kMwk9WSP1dDrXPNkopLmTrAvSNBeqotLdk34K56ewrEcxi6arJeLe9rMH",
  "key32": "4yQFjwzGw2Z7mg8yMioQdnDb5Y9Ju3LkZzTvRRHw3ZXA3mUSJKtbL4Py2QMGmuMacR1J1HJGoehQ9mjUJPPp9VnR",
  "key33": "ZNZopH6niLRszuHc26q7GBU22nvRFrtZwHHozgRifTxRC3e3v7JmRiUK6MjsUoyj7u9ek6fNpeRnvuPx2C9c3fH",
  "key34": "3h1LxjYR7qx6oqyGsUHKRDC1yanwGQEYPVhE3Pvf8jd9vguTmfjuNgBvgLCwHQ88VoL7ABStFCGjsK18oq3ggtHN",
  "key35": "4LmurmjPGrvegyzZbYzqkbGkVpsYYm6a56vqPfYmgjynNN7soegoM7uhfLramm4uNYjekJKbjA5aCKfHmnVKKraB",
  "key36": "zGirc31j53Ff8ejZRyjfbBJisRZkLeTh7yhaV84RCeUetrA4Ks7g3rp7UyP3nCMjvsCjzrw7S8fJBgR6jWqEoRr",
  "key37": "5TtqwwsNNVQWV15ozn9oEo83iGfHcqF2txEy5ZV4nJTWeGwx81LAeTodZijchj8BLpayu5mJrCuwuSCVCASYhQqi",
  "key38": "5ukL9uacfmfBsA5XzpzZkVHPga5gxoKwRHctj5t4jisWt3pLQVT9m4bqo9UtAkqRCowLWAnzkopg96WVpNCxJ3CG",
  "key39": "HgCoK3FERvbeEUDmxrs5bR1xfm3RcVz92wZdkhAYc7Pu4bBmpJ4KMLMpjqySgs4Tjf5YLG4LMfydqeNeJUd66Ra",
  "key40": "4w35DxFwotAq8MmTuh9eCb6xwB4NDYttr6TE9dZ1ifD5aDVAwkCc12gALmsytG6797UUDTGZHfyzia3gjB1brKpX"
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
