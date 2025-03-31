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
    "3ZH3avK1F6C2ViWWhj7D85C9WveRz1VDdP72EF54fprFQTiHC5jJTgeNZFZLVHSQT9epNKz1UJiHm1EUWZ9bnZd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61okgFLxodmvnfCrVXuSCQ8mcrHNXvgqqQDGdAgzMAbpmqjQvZ1dsekih1oLy2AmnzMtLG5s692ByEESbApqTMKH",
  "key1": "36yqQbtMPV8Ac2qaf5NjZfZ6imcRCT4ocsvKoKaSjT81BazoJNyNjk4G2y2ja6JzjLLnwoTA7uV9wd2Wxy2uNdRW",
  "key2": "bXcJgN3Vt4joytUXTECyfKS8GRt6N1unhLr6FBZBHCkZBoXu3Sc4EV351TLohPUDaceghSHD6q61LHVFJ82tGAc",
  "key3": "KyUDoKhg1juiZJn3ekumJZL3piX97avWyyLEuaQfJuF6qTTcuT1RBdG9CXDf5fFKWDrzgX3REyxyZhFSHRSBQbm",
  "key4": "5EEqwZNvXy5FKreC7BYpjtoTN8TGNh4ZG9Mhr8x8HJaiDQobbFqjyj9cJNHWSpqsJRqotdSsfSyYu61cPQJoMaSH",
  "key5": "kBro9X1GuatARAojiY5q92SwidsAWF64qT3wbtjNszHnAiVyhodpWukTKGdkcWBYmwALCnu2p3vQX8ZD1Rj7sMX",
  "key6": "4bvrb7o6XYCfJ5GuQqwWJRxfZrL46DcoZfmmFXTdPePz3pZSQ4CwPoP3bLoAQmDub7c1GvzXzTXRoz6cZAA4aEMm",
  "key7": "2L5kGsqd96jAPMXF9Nzs35Ub1uS6d4RaP7Ucu3XrgYbKAJ7P62DViJEBz92wpGLgqFW3Qq6DugohsDqUuU6jugTX",
  "key8": "4XGqXF8p9V53JqoxVMLvWNrumRibjQVKp94akGArGdh3LSBkhgvMFUmCmKJuFiESNtXwyHYbbaje789KDKxz3b6n",
  "key9": "2MiUcJnx4RH7sCbas6X5QffdHp4yVF8J68xQ79oTkuHpKPtTgaqTGTRf5kwWfZTERXE1gmGxLYWUY3uMcJeXDwiJ",
  "key10": "65gRsBJZsBYvVMH6yT3PbSHxTUnDGQgWXQdLWRr2dz8KhAEwLJk4mDPBGDFsnxCocnnybD553CCybgupqCmAb79T",
  "key11": "3n1tFnTiYGctrUYf41rw2Eefhg81eEx3DXSNJAbnzn1ej39QG9CUvhSks87uR7KiP31B6jaFgiG99yUVfm56wcSp",
  "key12": "5t88BYhjcibhrqjhkc8czmPWZ31ASDKHWouZEkXeDPV1NtDChhk4rnTE5AdG7djcXRtczfW74gbke2Pyt41BQQN",
  "key13": "4RckEFsaG7kf4PiaR7MNq4HgVshDBgAkH6aTgaAM4BpQnaQ22BcUo8apymtGWxJM1F7NXiGBbQ5AvYPZNrUG3XvH",
  "key14": "4daeeyWbRMJkYKfkxTqo27PgbV4vVkAZdTr4Ax96rYgBh23ozWxyNRNKWiFHaCtXf3u9HNSuMp31LEDk4zB1scdf",
  "key15": "4ejevjvCZzEJ8ToRKskFhUhjWm5Zk6vEWMePuKkrn1o9hBJaEvJV6tfm3ACtwxA7PFkvBK8VxVheUERN6Pt79JjQ",
  "key16": "4hCoN9tgKfyFbPcEvAJp379dncEWfwtt8iT28gYRoRWrqHoVLXKGscjoPszknPrpkva6ZyQ9GRck8gtx6h8tbPze",
  "key17": "658CsBnWPAFJGUQP6R6mdy5mPv2r7EMRzs38Z46Gziu5BUanawbg62DtBe5THtTyyLczPfb2TvMtko7r8q9p7LP9",
  "key18": "3Ksn8giBKj54RzSfLVE2HACcMGCEifPY3CqkvRiVfA7GNyYWWXn7xrU1CurGNnD2t4X5m5zGoXfWci7VqxNZDEMf",
  "key19": "2qmSXkkkAGpmkbSiYWVgSZMdzKYNnhosyfQzJVT5bjL4VeyQTLFF9xeCKgo32pXzxW6UQpaRswkdiybDDdkhGyNu",
  "key20": "28dTmfQ99yt8QecxgqWwXvk91spfyFfCCDHYNF2mKsvBjDd9NSBh929RyK2fC9zcFPpoX9uN42eEySKd4Xy11HzF",
  "key21": "32kVvDMXrbhXo9DW2zmDmFNS5ncyDWz7wBpzskX9axF1KRqSp2XNu6jQ9Qi7xkUaNFkGnUCw9kXfi2bGMrzvQmw5",
  "key22": "28vsRKbhTnmdqo1p4W4dDgW25yQbZ8Aw41G9XnX5DGriEjgskDaCTgEAtMT9Lmn1dtWfYxGqm433dCevAHmGLNmb",
  "key23": "4FNVUpZyYcjTnnFsWg54uBms4oVbTcp8mvgGQrJZAiCvd8TN4orgM7BWv911ih5b7crAe3K8ZiHfy14PgQE29XVU",
  "key24": "2LnpEGNVDh1SuQkq6ubX2mnCBkkiHptmGDkgaVBdW95mx5o8Ya4cifDwzGGEejemhj8bZUBnWiVhHbxYL8g5kDFi",
  "key25": "45mdVU63XRVeu9HQYCrc9jU1ZLWqAezEZHn5FuGrCp1AAtQud7on6etNJKH1yNf8J3NSBFA1vNekkuR2J23MgagG",
  "key26": "59pizApTBSRBg9H2VTZZFUv3eSysgBbWzqxzuJzH9rqnrqEtktbJC6QczmPb94fwPcYTg4EopN8yLGGAZEse7m2v",
  "key27": "4qJRnTxihjPZY7JszCdpnW1APER8JnmhdkjHaFhMzmskTunnA2fP4jb5Fh6zEnuUWzmWUGsUsep6K8mqXyPTdkBU",
  "key28": "yE5kby2mtyhsbrDAoT1kb1oVVpHaeifRQoWhPhW6cw2QjgQkEAD4BXHn7zEQyvtE36UMbQkXTx2u1FbM8H4KKBm",
  "key29": "2D1TVXZC3UtQpKAaMTnz5UdFdWyad51tAHHFHMmXazVZHUTjMAh4ZUTfCmNnXH7977WnSvfdWvAjjYFxnUUL4sZ3",
  "key30": "2ubxNjBS4ocsdgKjPvMMDEPKWK7V9G2asQDEQTUTHxCEEUMLMv6KBKHDwLjCW1mZBKQgj2NoXkVtC79AS6k2LbrV",
  "key31": "uFwCeW4KkwcqsyZVkwLhKcga4BuGvACg6DP9rQ73Ee3QWeAFpvEoZSdGEZhpSnM1BvBFWbjziUVCcSupX9eeFn9",
  "key32": "37k4iWrBSMi1ifmAKMmJPhnVcqCfkzGE4ZuNKTtSoYQ5qHHi6kjjQA8MTyPJWwQiMnysKNfymMeEKMxUJuBw298j"
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
