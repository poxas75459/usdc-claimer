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
    "47UaKk3RWLedcgG9xSMrvyRC61f1TAfNFM1gk7SgYeD7eBjUfuY7xCJ2KBoetG9Aoquqf31QqPiU5zW2uwLWup6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBd4KNfxZV68negiGDHdCZz81qxL7EywWo47hvKiey5GV6CsDSyZ2vV2Z9f8Dvp96vfyMjuibrTSiw3eyTvkrMK",
  "key1": "cJpyR7fxgfptBXFHShHquKuFnt5po6af7ir3tpcKTmNCZaLm65WNQoSdwhwubzKQoKtiUbRiwwSqQXW51r37arr",
  "key2": "5SrYsKM9RdG7G2gUqW9imHnshrzyzNjbdFmEDvPKU9wVuHx6BSencnTntLTvh2gonARCr2nm4jDsDZbgZWbmLYMs",
  "key3": "38fbB65yHKzAdpHbCzVFqZEckcGD2at4rp8MoTiDHuZ9MRXn5kzSJNGhLL7rHBVo3GwnYgiWMuaYJxeQgxGDtsnJ",
  "key4": "CCHnwxho8GNnZWvxraDGCo8ruh5PLW7aaMJGaYMM5FvDywk96mqcj8bzGeQ49oFFdhCdZYvmwSkpNqgCBurX7rW",
  "key5": "TnK7seVGfQxti5hJiJd56doSgtsYV8FU5ebdBztbbLUXnyQBVrWjDBUjdFxZDeNSSMd86cFdARk9nowpPzUDkLb",
  "key6": "ES7artPob5aqEJZRnRjHpS9nzFbQz4A52DvDVuib3rjEYKYNjfXjNqPNR9Pva1zz4osLpDtFDE18WXGgxzXMJ9x",
  "key7": "Uhnha42R6UUNey58NHC7wij9om9AYBnmLn7EX5E9crVUpViZPxH6Www5cccb9Lf7QJeqy67GX95MyyRWpS48eMp",
  "key8": "5RdyoehrNMSZnoMy7mSejcm9c91DF8MGUyP1w4whNHLp7o8Fqm2n1EFGGqWVA9tBaqvf8JXEisa8g32Qrhqz9xfJ",
  "key9": "39RSgBStce2v6WTET3kjibcy8uKFD1xLbSA5bDpkGeb7RiiVpsaTgeA4ab1KU9QsfuBANj1gTS22qcHs8Ay2wDKk",
  "key10": "55bm5GWcGqq6hzjc2rJ2joW5MxaJTvgvydXoQu7dioLohPYAYWdanqr8ZJr2Fj5PL94nYwwPzXgSKQxadUWHWuyv",
  "key11": "65wPH5rYpXVBiWW9HTfJ2zFW6r1C6vzwqsWJ3NtohS5ypu38MXmWxq4M4ZUjnxP3Q15H6Zxcdiy7JSHftTHPVFC2",
  "key12": "kTHPCpcgHSfc46GHazdUnFM6kHSgYrZ276DCTy6evcgvHKVj7whQ2XRaVHMDBXQjWeChekgGbrLaYNkicbPdUWr",
  "key13": "3fcXLqBypALazn7tvY3EqrXZBMVSga4qHhQuDiwJ8PkzzNn7MxBR7GRGRFLUP53Atnitj24zfqgAKZQ8QRCezqKF",
  "key14": "63qUydaXVyB9BfL6yeaAnugcMatw21xuhwtyYC2HmmNZrXgEjxt92WraNn4ZD5h2BdANcxpJK7BUkYV32i1efC8o",
  "key15": "4CpovjXQkYLRyEeFdwWsxp4rDNi9dHwwfcXty2Sv2G5XqLNc5CtCXrpPCsQC3DFMDPVXXB363wew2kaNHWYhfxph",
  "key16": "edYj7AdqFpM6MhYdDnTzdY7fj4Er6xgZhbDCj6UghoHndAJSbZfPyUQx94GSHbLPFbJHqYKgRxVBdbgoF7R9Lc9",
  "key17": "2JCGkaXV5SiuUnaChpBfSNAk4DXN7k5LtBTwYgbSzHycRg6NcCukUBcejjNYxybXUJs69W6YHw5819cenvUUArQr",
  "key18": "4amzGR99Amrg3D7F5CGbrLJz5GkJiX8qKcB1pYAWyw9BJJDWGARWa6CsjuPspp5JVfaPnmq4NshPyA8LjqQUco6K",
  "key19": "2ZpwYTJY5nK3zfnpPRbMUZt6oMVqptsCDT32QgVH91sDFPninznUpUXAW2VK42W5RCycKqpbbPBWfMbc2fpjmD1L",
  "key20": "ekaJasss7rV1hvBjK1w1h6a7xfzLKRu2YJeYzQfATgFcFQXLC5HfcLXknqYiTa5DczbAQEhHGHDFTEoFw3WzNtb",
  "key21": "49CtLaar9vJHshLhz3Ganfte9BV7YTwm4RLtHCH4WBtCrPDJbqnHPi4gbb9p27yZiWeGw5LvqVr2yCMEHPCtbJv7",
  "key22": "2R8uK2E5ZFgMQMUyQfA7GMad61WZgz6VYJwVZG4eh9H1bjHu6MXGqzy5x2qkR7cnNZBivqMTXgMhCDfE47uQjVwv",
  "key23": "VKsnHzTbVZyoygskrfpxJ2sUY46YpZAjznut7xP56W94XQVFzS5seFZ7vVujNqRteysejTsWcbPjrtsnGQPd3ce",
  "key24": "5f432ki5EEtSmURixmvNUmrYV1C1GnygLz5Mivyk9RUk6qRZ7NC7tK9SxH2p3kGurkBVwfY3zUwpY8VBVtWhUQoh",
  "key25": "d669ueysBWxcxviUXJNedrKhaW1U5ks6ibGPiFL4jHNGDMQLxPu1Tmhs7nb1X83ALXdGffD7pFVMNQhCQJaLB3C",
  "key26": "jRp9Np7B5yJJBMg8GfPMp3CZQuTYowfXh4Zs26Y6WhMBTt1ekK1cCQPgcCMZPSZnaCbMfpXeVhYfrcsNFrVK7hW",
  "key27": "4JqW47W9QSVMoTKrqfuSjsPathoitPSjWxbmhYZJPC5smNoFLWkkD3RcfeqKzA4ALFRh1PbTtJswNjrwVeM9fqKc",
  "key28": "3TupafHuFdxkWsVeaacyNLUCRGjD9kSQnqUuJAqiKmKqJ9bbgXFzpHJpGALqsf7rKKMnVLtAut7psfhxRe42PW5k",
  "key29": "oBD4hXr4oQbgW3iTsHQqa9TmZDnGBRnrMn6wun9E7zSSVBUfCwCuVmLDw8JhLE28wTST2wFSZLBm8ysPfFniRZU",
  "key30": "37ha68G7ftAD6S5YrQRmEvoX8UDnvGWEoJmeVc2FQo7LpaGqfmk6JcxEY4rshynFqvsvvutHN7fM7k9he9ebJQvz",
  "key31": "2gWuXVJUiRBCFr5xktckT7GHi2Xm2jox258p8JvpkJ2a3NjdqCDbwSAaHzgB6TcTcskkGPo3fLxqEpzTnf7NvVRy",
  "key32": "3SyU2nTbZXvczt8N6gQvVb1qefaPhtYJEaNkTJ3tzMJZbwHy8y9vdR4i91ZKeexdxJ3YXWbqxzjqaeXcWmbMNPFz",
  "key33": "4MCrf5W9W1C5Jwx5P8yfdff3s4W1oQFr8U3tPWyT6Z4cq5FB57t1529kJFa63S2ynFNEAWWDhNQVqck8jc7zm2p4",
  "key34": "2sVDsRnczVifLjcYYjqSAEhwpJZWEVGCLXmEGRUuavvDP1YLnXTgb98kUKMhxzsiNmzrjquRcHczLmJmvDokErum",
  "key35": "oWg8qn1yNJgJQgF8zvCZBy4ur91Pxrj5QkpVQtCo7UGbWgqTsxHfKL2Axace4wTG2dpUticQujTMNd1t96b1tUN",
  "key36": "5hG4vojfbLAJB7wurvaeyk8qwqUzNfcmpfUaEHiYymeuPfCrUfEkoV4FRe1HLrxAfWKeYUZ9ic2BZ11rcrc4dT2r",
  "key37": "3VBhUvP3aJqW1D9Z27V6bsYVXDw8nDmD3EQH2Zwjxazt2h3mzkFrD4uPKGTahvG6cXVPMDpS62wkk1T6Ni26QXfs"
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
