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
    "36mrvKanYjoMT53jSb8ctS7qKFQrGo3pFDGFvqxMoke4bGeQS46qDcPm4W1vF4MFLQHtox8VtPqggr1TKo9ctxBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atZVnhR8VA91WLcFWoQXZ5tmjtKJJiZ3hmVqoKBjpT4LpxFGfpoc1jrA1DYnEBEi1aBBgqRtwkMErXrNFoQinhc",
  "key1": "2eNsBrYKFJRRrQb924dME6rFSGCWVz5E3HCpEWe9D16jGNzTsSJcwKfqLVBLCdf7mQfFJXh4TrtkamUnm3RQtk7T",
  "key2": "3kEoUKMbGjSVdohgCNNpwHYTM38457ZNypRYx2gfDUyc3ReosX2nvJP16m4WgaZfuLY5BjmDiVocRkycxcCUanGx",
  "key3": "2inmtEx3QpLUyxoJEMdkU99VPpNLJEWd24jtSTH8Z7fH1qrVsags4uvwCsxkfnhVG4D36egf1q88Brqx4PSvZhZw",
  "key4": "2LZjFgi8UmVKcaZGpxFZH6PkUcEer3uW9XR9ucaDzU3zBn2bkiZXRwStPBAeSsCkdi3KqLy5rUKj6XgoVPaKnkgj",
  "key5": "hgmakzpLELmY7j1xKRAo627nE8RFbB9BBpJYaE5xvFgTTXVHjz8L24YDzLRXsbYhcVBjT352CLrQNqLbpZrrdpa",
  "key6": "DjhkBzX22iwCUNKnH9HrgShu6V99LchXjEH2TjupGLUGEDJXNibrdKtwZiPaxQ5fTVg8x1RE2y67Zd9zL797zeG",
  "key7": "7o6EWpRS1atvAUWdjVSAmjCzhBSbEHADhAwpVbrH9845bGy2CMrGVwj5dP2nYFV8vkBnZZABhUKFmWQNj62zMy2",
  "key8": "3bG1UtqiiYavGEwQtu1LVENhHBLTH77V4BYKzFZjYN3N2gbV3riFYHdrMGsbRgbaofVWsegLJaFDr339EBE5NsXD",
  "key9": "U7fYXDaE8R5wxLmWE1uinfW7DwbEHk1db5v7YpdfDK34YUYcUybPc4pCHat3kixyMKUFXkEd8MFMHAbwBZkNHLP",
  "key10": "5MXFLUeYG6CBRRVewAH2VnKcBzy9E7yF3Vu3z5HsSazDe6Auo14Wo34dQnNvTycRgausvKTYVwuYngqPWHgETGor",
  "key11": "28NEbPuKsTQk6a5EnVsuyNbu5DysQtdXYDzzZmp73Kp2PmieSLRkfubkDLS2Cs8G663zYrA9t3o47ywdqi1woyou",
  "key12": "o9VzCu35CDtq1YAfgaKhBdqR4uQF2tNS5Ta5xtc21N85Pjfxv39wQGBreTzb7NyzbTwJXr5nyYc3vPGvprvnwKb",
  "key13": "2ciMZjzMvvV67WvFFmtn9t71T4e2jCW98K8Xh1CuhJPTQrRNQHG7bav9y3EFot7HmCWF8wATheDhuExZJZuU2bPR",
  "key14": "4oFgJhPNqQKC99WAneqfS2bQcFsjdoh7DSpw5Lq5iSKru2tE7gD53AEoToeYTwkaGSSGbrASznWPw2SUmpEttJAZ",
  "key15": "4acPQNfZUFCp6rbtbj6hcXYgefhPKao8evXNCc23PAHuAmrj5296nfQraEDFrPyXo53Upyt87TLiPcs3fg4oEYc8",
  "key16": "2iL7jup6fR274mtgEbC9KFSKHBQ5AckytQCU8WpoHy9dG5CEDJkaVPWT6TuXfvTFtGm5pWLpam67mdEPr2H7Uzth",
  "key17": "2Vugiybe36jKo14Pb7Nj5B7AJLaM1ZvseJBFi3TpyRX1252dLqWxrXS5okmy8zDGPT6tr7mMsR4o7FFjqbjvbfWC",
  "key18": "64z17JRtiY98nBnVFGsXnjQtbmSFiVSDEFfJd2F27YswQMpTFkWVAvcGfLrZUJuwCFFjAkvLQussph5b1YZist5m",
  "key19": "2h9xbsRbaycGwANWNfXQa1eDgyDsqkfm3E9gNMuJvHYnnEHVx7dA3AAKNQAanRDro9BpREhgKgfvHrzLRUvb5Tg7",
  "key20": "2i315WHSUtUDwsXxVeJYB4FB1hogZuFqaixsdgzQqtdToHecxPRmtXhYMKtszjSZEv5ZsRN9bdRHv4gQGCodzQMa",
  "key21": "3Z6w9fdnpWYLJi3VCauDZcGH7DK5ak4HUdQHTXJu4QwhmerEwJwHCYPiuddedmcH7CCuYWV9Sh6bNbRXWHBQ5dsM",
  "key22": "2RMHEFwxzQt9BZttumLwhUHxz7kY6A2D3uHU33duGT3PSaTrv6CxuRk8FDMsMWoiKTytGx6kuHjCtSD88mkRWivV",
  "key23": "iBQ3UeCwJtAHucenjsX82DtjwakRpoJRi6QJKE5Zq7dpmEoiB3u6q9xFWX19cJmE13JrA2LoVMaWuA7v7Z4Nru4",
  "key24": "4MXsF7odrUPLJHaPX1M64VPTVUE1cDKKZddkUhcXKevo4hVkbT7h4TbByeyQizR4bMTfRpi9HKNLQoMtZRdYvD2Q",
  "key25": "6jpXA3BC7mffqhAz3K7zjwqFFXbK9foLd7uQcnp88SCZXRd5qxLULbKnimVdRVmffogx7SthvgbLFkd5iCXQoxL",
  "key26": "2MRLejGqUncc6Fm2Qxqbva8MGrWh5k1EBVJnsRU6Kp45zscMkdapaZe5zKzNXL9FSxF6E8UGTVnr8D8tpgkNXgr4",
  "key27": "47vE4XcG7dGAUwnDT5PqTs5ofQjqE5bY7AxYwbisNySqVPQPvZWcHV6Cn74fCqpUmwHn9hHi8UUCoEA3NyrrN5Uz",
  "key28": "4exJaG5pj1YiutY3paoMWQvjf9DsH4H6hi5hL4VVvwKPSXiwiw3hQyJZwtkrWPZiXWgEuMNcC5eVgcAdTwpeAWLB",
  "key29": "k3NCVQBZbuEEkVczzacyz3G8Tdkv6Y7xLwAvTHYV6752EkHZhkDDRbQ2NnCdWuZons84zHF1rwBYxoQQw8GHi1V",
  "key30": "94WuGBTLHkGKLEi7VQsfStj6Lzj2vxR3civf4EX8y8rrZ1UEx1KdJbTBKhwQTNdH17sEQ8qUqnkkgLYNsdGzevf"
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
