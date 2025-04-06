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
    "CdqzJLQewnVLr5NzsbF1A77BtWLEE419ZoPZ7N1DpXvyFncbZ3B9pGNcRyoMDVigbnSEksuG4SRc8jz2peAJvHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38PvoFSNQ5mi7B9okbNFeSmu6mBGvCmDynxcmPL3Xqjb1nZP7J9ydCShNf1YiszHJ9cCuz12kGYLYSQgKTdkQwjB",
  "key1": "22B6qmHcbm4FHQuRXFs498iucnFQ3d6rrXHh1236A4hDBgDtA2zjQvG5Bny8CpcLTjvbdNGpqbD8ubTcUuDrmf1E",
  "key2": "MsKKuoqgbEs4vq6zH6P3KcBrdhjdpLnSUe13Hnpn2kvAvyXaUrjcFFK3r8nqRdEghXC1xNKU26uRogUyU3JWGDt",
  "key3": "3phHxDK6HbavkwoEjzWTSbztuuqtwzqWeZrcx6oaht6zbj1qbgLpuULXNYLmCkSv6NABspUEXRXz8Y3bppAHDUbX",
  "key4": "3eQzH2BVJmZ6XrkST7EBSk7uF2EM1K8YwcN66gmoHY6MSHWxchUH7mR1QUuyk8EqUnJKtyDDp4FEwdTd29LriMTp",
  "key5": "4jPpErjavCRTwTrfePeQW1JVqA4sj7nLAYub5omCKH8NP3dn38iBtzdWzDczDTWLAAz3KoLUNq5EEtgo9xSn1ext",
  "key6": "2YB5XGaEs8nWWrsPPL6Mg6NT9fnkPKoHaHDQyXwNJMAUacfXdf6mGdEZHg4Y3Uv1UvESGaT5ck3sotnHdsnFatfW",
  "key7": "5ZmH6goWA8XhtNoZccX5B7BLepbm65JyYm9bdpQvAvYppK8Yx5EJWmzVcTv1xLE982aAMCY7j3M1P1S2MRoAAX3d",
  "key8": "564ZvR9dBsqndfBWGssQm6TgA1AS2EfCDxeEoXPER3Gg66jbyuzVNJUmL3r7mjJ82i9z2LTggKhpc6vfAo8u9Nh4",
  "key9": "dTyL3W2KAEoyDvppUSDeXfhjjfMnSPeMp8DadjMGtFrudRct616DTx89CmXq2XQfKQToccUeLQDB3VgBWjRJJSk",
  "key10": "5ipVL1MGLF5ks5PtKXmb1KbtjGG3nbxHFhyJ4xaiNKHr3Dk6CArC5oF2xtbcdVfxkfUiabvhDuPNBpEDmDbaZ9CJ",
  "key11": "dad5gdUqCK7tsGfJhzmsVuwzWwEuJR5W7xpMg3FDaKEhctArNDYWR3uERQKw9ed5U4dckTDwNRzApBHb6SadASm",
  "key12": "25Nhq1xj9FsKDpkrsixXj6tYJ4DVm8bfKaEYCb23mCDLxMzu8yokBkXzujL51odAV36cqEEN3uxwpE7m4yPUPSTw",
  "key13": "wy29pGU9GttKniJXsKfLpgzoRbivYQSxS6vLSrYfanXUgCQU9HB7xTCHKE5gZD9v8HJwWucfL8Fro9PspyGdMN8",
  "key14": "4Fxi7fPN3qACE65CwEqhjunCSCW8htT1azjo7UUB5HfP4ZQSaBKUp32nbmscam9XzBa2Cnt3r7BBQhPzaoXNe1fe",
  "key15": "5GhXNCnEMZ6frmw5syMCLTqKLPkHU6MwgDJiXbUeTkBcyq8Z1ZCSaAa5Z92Ws4sZcQVevXCziuxPUSd1Cqgn9aLs",
  "key16": "4jjuuqYdixLKWxFCwEWvTBoUxLQnp3ua5AJUTJLtd1K6kU8TyY3mGMp2AZeMsNBUz6ZqLeLcJ56B6tdiMiXQE9n4",
  "key17": "2oQxriAsCjbQkXx4XMYXy7d274dSQKqFQiCuq4CAUcnkmpehUBugUZzwwVr38isnzx2RaMBz5bcU7qV88ThjzsTE",
  "key18": "bKow5upM79vQkGmhCSgfYGxUtE5cQEyr2yvS6AEYnL1hTcvYbV5XvY4kLjSfohg2qTYi4WMceuPLXia4FZf9ADL",
  "key19": "2ZP9rBBtV8DNBHcozYfXaEErH4xvzyB6yVcGLbaoWeed1TPgoB8gHuNpEVnirzKYej6KA1g43jVG9PFn2F6nJCZ6",
  "key20": "4pagRTHZx69R8nS7TK3YyZ32E5htuv4Qiw3vmN1ZytAcDG4zLyXW6LCL4LKuz97rPyG2PpRsSNP9qEfSYegV1VN2",
  "key21": "3NN8oHNtbeBhJ6S6CMcBoKCYfh7yLzFRD8N6cvefKb15RT6auy2w95LCq3davNytXWbJhe2dTcdwYFpfhkQWWZDs",
  "key22": "4SVRPQDi65Mz85VWMaF42XLuCEKk6sLQtrohpbgdSvhd9DXtQ8AF2xyhKeAX6LSnf37CxPsKaCHhHVxa2UvnJB5L",
  "key23": "4H3KgsPmEtM5CBWvdHUBMtXXADee93V41k4jR8J7aRL5rmSmi4ByrUgh4QfxLTjXXSUURs2JYQbtWHx94GZHKJMX",
  "key24": "5nWmnDBAg2oSDVASy9op5CHY8gspuWDycStwFeq8NqFJWgxAPucdgMcue3QSHJARa7eVtPgT5hKcNSGYPSZDDfcq",
  "key25": "66skpz5mhhrrcFj31feUwcB4XvBj8KKwvWLVuhZVU2D38ZtpK8FhdFaw5TucKHjqVzZuzaBW1z393XCBndLFi5UB",
  "key26": "euqvaqbP1UyxnNV5NQfxRcVmnG8XoGBVrGBDRsHbYRuXH3pL3kTDTbiPFTLsADfp9WfpaVyH7qFxPUFhAwpH6XD",
  "key27": "2CsNUUtVEvZMNLuUk3DKg8THj5GJVcbAsJDiny82qtP3qMez5dfC1UVNX2fbVBYLSj58kythVuLAnExQsfQpqX1z",
  "key28": "2eS9zkxhftymuuF9YBzeF9sCEuZeDTjdttx414uUc9winK7muzpwMPcUtnhEwRnyRaCK9PTJd3vwxtjcuh77F8gq",
  "key29": "37QEHJSyv4sGQ7egnGgn5VzxoHhcgaTZmDkFHyhNPwpwXoiQAfSpyMnPkTw8YXn7i8sE1p4sds9n6Xxc61F2fNSA",
  "key30": "65rsNt6XCwVpj8RxwkCHj7RULxjuhiNUonrjt298Zbrg5ERUCoZWbkHaNRVyoxB4Gk9FHfPME4rgQX8CUad2DKXj",
  "key31": "4WdYkNjTUjhYw7wozXSCpSP3CUSidTTNGu1n9jqCa71BybavzZRyTq35cbPND92PU8GLMRLPaq3STBtn621X3TRn",
  "key32": "42WYf8GbpDNSDimvmScvFU3Hz76zjLGZqYTwqjS23eDKcTjgB4PVwADkhwapRtUA1v2yV3R9y19uQHGrEcwfd2Dr",
  "key33": "2pQSBwkdFatG4JZBAYt3fFY6LLdw18nWfLgXwj1vi4VvugoxqpcC7654WvLTerw4PMo4WuqPtAw1FVY3YJYKL9iK",
  "key34": "5RvrKqmsU7dYenvmUKMfMQQKfpWDh49W6T63m4tQjfbZAhZSaiYjPE6oJrXQVF4Xb8eZnsz4iDqn3KQHMCH9GQqn",
  "key35": "5zusaX92ELTACoPjngdxnugG7GQvJ3YJm43Ct9RmPGr37T2ujnUyHsfdLgJncDRKBiVibx8hi3PppGxWvJzc26Gz",
  "key36": "jMPwAVKLU7EqzR61fSgg3VmVJ8tsh7rvL6mnXFTehYxt2PSx3bBMRYCSZSiLi27N4iDzKLJmKPUpZqa9o2sjb3M",
  "key37": "4g85movpVEcQUydMkmwML9R35KTSDCFkkXWNqx5UrRAJsC94VpR2jwwSt8dh9htgFUsbogCFekRx9CsrZ6YYeQY8",
  "key38": "4oRZR9heKUocVxjgkKyvLEsMxNkRBCZN3bmPypEnUGt8Mh1HTLQi83q916RMUKExbLKiCvs8m5BszxeWwiCKMA1q",
  "key39": "3L6K5xw79V1BV2bmk5hPh1bKAstnnsERLMJxnyoimJCtYrAaUQxoci2UGDD9DEX6PLRkb7HffA9myiPAXCideBj7",
  "key40": "5zVRuwDmGJFwm9wx1w3x2ypy4fANt8Fb9L18C2T9Nii9EB1JzX6oPXMx3oSyFvjTNGY1ePmRJUuzjTwgUupgZi59"
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
