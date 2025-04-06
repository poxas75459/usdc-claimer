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
    "4pRFPgpSddxJUjyrzaSnSA2bcAXqcSwdyPxH4VN1eysqS1Ear6cueGRbDWX1ijqnB4YF8TQwyDpaXVW2g1PhadUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEbMYxvLGafCVMQRG6pBkqVWKG3X3p2EGfJ4HTWxTAza995rhBZG55sEGSm9vJfMtxLKjnu3hAGG2LpZvgqzG5H",
  "key1": "VEtZMkxoVzCyqV57c89W2FMjhYNoNT7mrZ71JvL5WXUycG6qTUaMesQvWqwsVsB6VFuooJywod1YomXLTY6m2uZ",
  "key2": "3XoXAyhuqEJeYHYvHq8JZg1fQsHG7rc1ZXMxLdt6doGM7y8hkHAh6PMvxezk8rQifeto7x2exm3bsXT5vdFMu4Ek",
  "key3": "izAcmaGR6agrS5ZfXPKhBKgwHm72JeTHG4oCEtH6sizKMjXw5Vs4zjGnX8sGKq9yr3MNXkkXXe8nSpL82hkREHX",
  "key4": "3c5DnvZzNBkixKWMRZWfmChcHLve9eyistotd5W7Dd6JQRWRTFFnndqXtzEDWNpzwFFkSns6xnjJ6N6zFcRWuvDD",
  "key5": "9jx2D4E6qTxvqsi3dhNnxjLbVqjgRwU8HVcpm9sPfgMKHzY6DtgGr8p7ZSfzXRfcWbCEdAjGrY8oLSzWtsiz5uc",
  "key6": "rQYE4qkiKNZBn8A1kxNcc2ejxfE9kSUvy3LG4CufLds27ZjHv2B8YLFxbGJjJHDTjeLyFyYS1W8b5WuoVDZkjMy",
  "key7": "4CNGSxDKKPVdYDf7bpKGyTNNhQm66EUNeVGhsoRunfhkxwdipmTFgwcaAMzS4txvhpvsNwyJuwEn4goWWBNqGn8M",
  "key8": "658C98MJb89P5wBGbsBoLaUTA347gqHdVfobRSmkyptAJtvmauAMJ6HuFk2ZmWpEcSt2cSUH9stdX5DfWo7zeRTK",
  "key9": "2LpWH5Qp5QRRrho6AzjPydrotY3bwmnvFuR3vw43NaYJ3qZAssXJJm8ZhqqDpT9z8QNNeLCz43HeANCzLCNcLMMu",
  "key10": "2a1FFguhe8AGmUt7haNWSbiHNLzdDKyePEBGJr4TcDEUPEfGt58t2BkvSXi93KkcaAkkZBBPNQhDLPdLmoXFLvVP",
  "key11": "2q3BZMbaLpyFKrcFbkcsPEEgE3nMZLn9T4gsPeqtnxiD5aWJW3B3qKpyXCo1dPFsRjyULR79bCmXnQNUbDoqS885",
  "key12": "3gtshsoJppL6kuandiwTJDD2GdYRKYgqSEmm4qgsWekB2TXkiXyvRPazaLyXefrwP3cNUTNaVporGQV1PqvU1dYS",
  "key13": "4JNc7N2S6BugXPuBp6TrRkFoNv6FUCvMSqNKR8cE87NENTDMNutZD2Hrvz7bqiZBvUH9Yen3qTW4r4VtSqLwmkgg",
  "key14": "3bUqBTLBVPmoQJq3BBec72yPJduVx8GCh4aP33tyrWdDxCyobiXPYXKT6aqXFRhQJnHjFXdFE8ihzQtK5G3wfz4x",
  "key15": "4aNjmG4o9hYT5i626aWpx3g385srARY1A6L1KRqzHizPCRLPvdWDsaL9gAGB2Y8w7aEfyjPqr3Nzywco3C1mUkZY",
  "key16": "2ban8coscd1mRFZKwhoLiAKAwfu7fiC5gWHdiBJoVTDAfT5aoRzq37ioiGQcExSupaGYxhX6JuhdyhcwZQsG8Upv",
  "key17": "4wUDBhQKQFXQfpdTu53Kcn5tFfmFWeC7tdYCWx8rT9Yh2qH8TerabCtqRtkJkxUmZnafS8KjT9yiXGuF7jpzTSVA",
  "key18": "5r6eL6SEr3wduxR4rtfhUfuszpS69ghqWqR2WyRz9HmMSnCENvrgoHQprcWSqnTFoFEvCw8LneKaHnxQuU5tQvJV",
  "key19": "ux3m8fNrJKa3HwYajgJDBZ3MVSEeHhvpLLd2k73R8Go1nJx9bPwEQ4fh5VqbPGbiFFJF4nVhqj8TNC1cNAQ2sB5",
  "key20": "MKHzB1nnm8q3kRkAuD3yNJiuxky6J9Uc5V9pDUaXv7YLwYkbUspUhk4ZoaBxN8k8hh6wTFP3fmhtNvf6rbN9Vjt",
  "key21": "57F6mZiqDLuuKgeQCqhef9PxBNJMqLpYbHToMQMZokgEhBvpodtCWrW9wr3Y1kp7YNpJn9eFE7zzyE6GKoipoWfK",
  "key22": "4MkGNWyBUzLKTKmt9Di5KZrJa8oTD5o5cyaaraogP97FtvVhsB55QBEdduYJGr8ZXp2uRpjXKQu7r5wN5zC6zSww",
  "key23": "5psTyyrsTJDLAEhcZKFW3v4uYSQ7xnoNjCz9K5MGwxrr6mhWZ8c5EWHocWW8HXYVScCzVGkw8DuFf4miYsrcthuJ",
  "key24": "3PKrr7yXgJzhDYe1rvnx5hnHMGLgykG52GCUNzbkQjQCNWWcvjd8tptFYpAqZEAYdxAuTsHmTDGhpoVLdmjGpoDX",
  "key25": "2KJH4Q5hBdBPVcx2NS4v15YPag8PRkkz4jowKMvjTTWmwXvWEgcQz2fCHBKZhjiAC35fTP9E6AK5JP7L9KMSXDPU",
  "key26": "3KWxaRwF219JusAW144XtX4JPagVaUGuspYDu8cpAZJfaBUz3Eai4H9z1XLrDAhhJjDvgFzMoUZCARMMREQtL4f3",
  "key27": "4q3CuS2szYxHMvTtBA4an3wqSQtoA2k3dhGBJo9BQ7fa69ABQzHxDqSXnnj4Nw2whXViZywcQaSuARESL95bHFKB",
  "key28": "2ywwUtwzMDhswUZjywqYfXKQVyV4BdXdfdhDM5Nk17NprLwWFrYbMRhG14uZw2HigR6yvSUXwwtc5nwYXhe8jrAJ",
  "key29": "3MnPPYhzCnb3vwJ8jUrUNL3Ya2cpZJs8A95fYKiEeDcL943ETUGiGFRPy9Tv2jh5o9sgSgLYgEbPMDpG3UtprRUj",
  "key30": "5Yf5jKtkjPB6Hghf7b3GCHJAM7nSHMpDJPdf1RWTWWWZdTPgFgaMm4CYeUxDmM6yWwDqfDvD3dx4X6fftxZtb2zm",
  "key31": "46f2TH3eWpHLbaqGTCdrCebmsgoHgH8YhVhULnMt4gQqvmzLtuVGRWsQ3QngkxsWhwCkKXvfXef6tcn7HvTHASv5",
  "key32": "rrmM7ARarA4A3JPKqDoUyJSnutvUa4rZWKmDBJ5CwbJGWKLAo2xGQgYmf8VZny1YS44xEZn15UaazfoDQopUuoG",
  "key33": "3fNVTCnmj22farhaC5HKLGDxswEgWxVpM1HEmVXU3uafYtTpBv2kQCJ2oQ9uyzKanWdALUddYjr5vUixJ7xKJqfY",
  "key34": "hyFTCXTWSSJC61U134UETFyc8gf2BgXXXwdUEUNKgeC5wRFhKgpWW2WsqbnPDWD1UnNnhkVyufnhoAjbiSjpQwu",
  "key35": "N6KiyZpWk1SUgipYhYEs5obdgdyx2M3NN8UjajqUb8RdCRFbmWqpf97aEV6Ug3UFGNTtd2FsRueeEPERfGLjSJr",
  "key36": "5etKqgP4TT2wytottJSSabuS8JMkcn6SNU24BP2YJzeGPPorfE2MHD9QrqjnWg63ThgJgurCTW16r7hJ4MUKvrqv",
  "key37": "5iDeLXNghycWou7BGuBqnkGhh3mXv7u9WfukUFoBkYXHZdFesfoYZd5LCyJr3MMP4xgbi7seeyAjUkt99b8sySrR",
  "key38": "5EYmyYmGNkRt4qz7uFQfNN9M11yWPwFEhq9oVpjc2qvq95iRQzjXuFXoB4wsWhNSSJhSVRxgA8MGe1qGgz4Vk1L9",
  "key39": "47un4d5EfHu5Lh1ivGH7uWdafEku7ADHeq8XbPGN5jeYs9oyEzvadavrCpDCNaWj8MDCancFuggevgw1mu5AZTK4",
  "key40": "65tCkwr77984LkZn43e4ncJzBLGzwKWa5J4eDK5kXNfgGtHozJmfptE9Frmgsq7o1xH31e2cuLyNRuWyXM39MWL9",
  "key41": "5SrrwEo2ZpRHDK95dXKCga1xx1qKhR6nW6L7JavcXeA4fVeFLQSwhNeVAfUmg7SCTdtGHBLuAxR8xGAmwwMYsHqz"
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
