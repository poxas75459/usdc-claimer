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
    "5G1jGdWQxXCd1Sgdc8nhNBy2BmKCQPjymEdnFmV6uvXsSMbzAERnXEBA6UsKFUSht5uSx3xmxCD6G7vhYowxABGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PwrwYo5BupabL5SFtTHgKLGd7wyLgmCgQ6vHnePKEK3WGP91fq8nEG3rZwiZRx69R9FsLtEQ4izzPs353GtyYWU",
  "key1": "2YSwqSP1Q1QNBgZ9xnA875D8GGEE5aD835h8gLCDQE5xr4MXAgyzXMPDrxZcG3TJ9bwdt5jFEnP5TuwLjjT9Lqhp",
  "key2": "Zg17R6qe5bCkkxZ3gRCVtVQJ8t8SYi6YKLEzFhwezyeBVw7syRRar9CXpeR9v9tKMwYa8rHYyHN3zTHbZrwzH1j",
  "key3": "2pqhWhDLyA9s8zgz5kgVahiqoUn8MX5xvtDdSULE2Azjeg6AKL6wZtjR6xs6HAhtCvUjfscfDjevLhPXf68FsgWc",
  "key4": "4wo5MGZdkvr8NuzP64GSPLSZ9u1ejcdxDhDZ4iFrA65Dp2mHbyfGsEwtg6GhVcVo7xDFkJTqzMKna36KvNyf7HWk",
  "key5": "Sm96miBD1sYy9ws8rZt6oxZpbbZt9PCimRhP2udm1pDutvtALDqaiXU69E3zXoSJtvirAA3me9zVv1Ah7fEMAnK",
  "key6": "3WWmUimiJyYSwuvuB2oPNXBwWD3TRznYFBYxuT6PNYc2GeZa2X1iWPBqW3nos4TMVN5vzD7ku1AsJkeEKcmwsXH4",
  "key7": "5qufzPVykHrqabXY4CWUkvm6Phen5GscsT4tJ2MwPCuBp5AghwqPsGA9Pg9WZpAq7wodaxjxqzLpKkhoSCcHQMhB",
  "key8": "564UuvPt7KXxynKKaFjWx2CQU7ySYJyZA41PmrQro5K7ZR9STGzNyHMq4Jh8LNwSnkDjAxHRxBr1PPBEK3FcvXpt",
  "key9": "4MoLJ5TnE4fVPt4jBdK4WVWUbX3hKakTTaQ6SqbpHG8VJXpebkoJ8oQVzKaYq8YyxKGvniYScKjFhePSv2Pyv2bR",
  "key10": "4dJdWfUkF39gLP8eARy1RkMe6GB4f1872Mwe5PjihUPhuE8ejPUN7NbspDrS4LqhoR2wpmo5BcUAtDstmUtXV88T",
  "key11": "4q9DmZUWfzvY4fZSubYjpoAKqNgLi4aWxJC9VhCCnE37yXKzwJuWvGTsjSj7j9kdNgM92Uecq7H5oU5sJ5CFGGGX",
  "key12": "2Z9XEa1hubckQg6DYRsmv5oBmrQEjeNni2U8h45A2CiaT2XKf4mdaUF2VrH5CcbdayL3tSw1M9phGZPDqp5DUer7",
  "key13": "33cHFMDCngniP2dePkpY3Czo13acezAF5VsqSHQfDteayW8FZj1dvi2Ku1aZ5M9yfzXarTyRpFN9TznRs5hQCzAH",
  "key14": "2y4KxsYGuUpNVp5mwdvvG4GVGZxxRnz6Em12183Vv74SNDMxcYj2cg7Begmwak8qbUT6ckqzB8MmzdMTJfRZNNm4",
  "key15": "2DErZPQ6QUxSLhyDZ4AGe971D5g3iR7tY4a2s4xrdHCv4bTXUhiAB3suJQA5XYxT1HhotpPWSqqPQhiBgX9fXKhf",
  "key16": "4brH4HAFNmn4WVtLJYsPePqkzksb2JYSq153H2CPLAtKBTeasDy9N8qTg2pza3P1NdeuRtSUUsqwWxKQw7cDn1Ls",
  "key17": "46Xj6M9Tywgs2jewMjA34f6gTymeb9ZJMj9EeoPQAR3uS4uP1mjviL5LKXAQKjcrKXBJG9Ny3Ygnbpc59tLct5Z3",
  "key18": "3ZAxas7qQwkPSN86rH834hYZLGQ76dFnQfVm1JqRYVhHEuJ57EJNhfihkY3VFS8PXNsvTkiq43WgA4Vmox9JLcgb",
  "key19": "5gwvhzDwTuf4TQp7o5YxxM1vdW7F1ZAoXYJPbRtSGcQkhr9eHzSorqmToG9is9jiodtCnyZt6NU6yCnYCbmq8oLh",
  "key20": "p3jFn17MXWDyMuZH5w75gu1npnbne5aCqZnQHbxnARXwCW6zfExeXN8uypUjSpExtqKkMiieYxdCrBoZfKizAaC",
  "key21": "5qXhbhdAGsAeSoe68Nhjd4hWqwTV7Brj1Lb4jnzJeC2XZtcCDNzbJQZ7BqNPN2pnokmswFtHx7cP3WwtYupsDPGE",
  "key22": "WV5BYpXKQML44jNFfijoxDsSm2d5uN4UrmVnJ7ccdgwuB1SwxVNePRqbDNQCTytt62JjPMHGXfvXQa5RWjn5yjD",
  "key23": "49wdcyyUwog2KbuNhMuzeFSsdpio8MsJ8YqY8vPJ4RHakXAexNSdVBRJBHtXMvrt8MiroQoiqtem8LnqSTfFyyr3",
  "key24": "5sCsU18QxuRn5DPSS8ccm8XNzkewuTt1iA35d7DvTWPgp1K3f1CjbTg72FQUyyucCtuNK3KgiFMexa6upo2ppkyM",
  "key25": "LD3rxMqkRWqgfr5kkJZn49QYZF8vc1H1DXDnuiAsLbTst2a81DH9TAeXpKZKWr8A1Nh3YkouboG6Xh87rS97Phf",
  "key26": "4H4wLuBkmpJovCyvc4Fu5Exbe5Uwc4XSqmJ9rUSBYHhNPVyDQvVrM6hbG737D7KLyoSh5FAkLPKrd4BnVTtbZW1m",
  "key27": "HwjPvPpLmUU2WsR3MfUci432t5HFMZiUH1ZgTenfsgxtW3fHjUsnWnisiUGmJWeCkKqygUCMjTTxYUNzeniKdwj",
  "key28": "4zYmnjkdM8XWCUkqi95hk56D34HJEHKdARCg9S6XAHy988vc5M6wPhSNviisPvwmkhSygi79gr8vqHYxvfUgRecx",
  "key29": "4xdo9tT8ZtA4pct5Cer33Q6KR4vXzxiR8wFmJ4c81bKPDZLLx5ArXmEdSb7KbmyMtoJoWuUDguibJBoPX9uV3ea8",
  "key30": "TU7C8Z5su2dJugEhcSq1qeZQJG4eEBvVEiFHMNXVxezAHimrZGv4Ee1KwYnDWmoLN4B4UThnonXDC6DbUC21u3t",
  "key31": "5c5a8uNuxe3A9bsn8iLoiRddkhMDFx3sYtEXGwnb9Py79HE9vaTTDRZYLHkRjqrc2npfyPM3u5ErzoV4iHwmacNr",
  "key32": "4FYbGFvtnZMJHHYpGcHkTp9dJy1Mk14eRgfE39M2HwQZndAaiZ7A3diDgiUU5X56zghVowbgSWxcv776JfhWmDo8"
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
