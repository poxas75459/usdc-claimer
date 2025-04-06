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
    "47aa7fCQ97nUJiSXLmvj3vGczxoQyVUDhW5eLyHH59SxbBEwL1Th5rb8zYBCL9bj8kZASZpwSo9mJTfQxrSUMHMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDh3uGcRt6Zqgjq1RMd2terZ9DZKAZ7NDQzaAywRM5zg1ymaRJtUEZ8BNWiPJUKxZzKNDB9eNL8EEALP5rHiEPU",
  "key1": "3rYcXQhN1vRAv1yqfnc9LQfsMsDzRZpArjcgD4PeYa7bwpB2PsCxjWpjewqjrjD3php396nTMRJFvq8cZ2bjtm2k",
  "key2": "3a1ThotRuTtiKERwGFzonpP4zoRZNnRZsspEZg4SUDv9fbvkWcPvDC8TPFbAV7WNPd5aff3pgMFNURQ2rbVYV2qe",
  "key3": "2h6Wj91AVEqKh2QZ4Wq2wLyKZ7uda4P2mS5ELizQmaPikgX9ks6TpKchzBAim3jivP186iSU7ux7zrmqPrGDNwX1",
  "key4": "3zEN5B6eEqCRKBufccXj6sET9Nsk2qu3b5medNhyNEE5WDmL2eaVxSFJuGPPDFqtxgUYon3XK1Thuf1K5VUWC6Zy",
  "key5": "2wUxmdtrEAktzAwd5tjS1FhvCGc2kX95rXujyBm7p3qEEYLcDncXxcBUzG1Q1X7YbJ2po12Ne5UV3FW8ULsVTLpq",
  "key6": "4BUBWxXe7m6cj28JgVLyi1wDCXrMy4931v234qx8Xvb3gMN1taHmY7CV5Y1wC6942hYDKPbSY2BzxJfAYrMym58f",
  "key7": "5sx7uzufDUjg5T3NgzoSdUoMETGrpfWBf4bwBkGX4RHgmUjkMMnU5XyLmZWaKrfiqDigyaceGoEEAQZut4tyr3ZV",
  "key8": "48fSVWSEC8eYYmHaSiyr1aVnrAbQard8jz37eArrgmW8KraAh1vdsfWANRFzLWy3evQ25WRrTwvCMiDE8GdRhsLz",
  "key9": "3ZpdaDBD9UjT122KfNwE7g2mExm3ZDz4wUn6SWviZSwSkdBkiXeSw6Bx1CfE9LCV3nnFPNsfSNMCw7AU2grVjt22",
  "key10": "35zcqAhMLxV17JFb4rFqJSHXQmPMzfQpQtXDjC1ZHbaXyYPDUaE5YpYS7w3jgSu3xpm1jRAcwoGLYgtp5Evpr26z",
  "key11": "28NqeLqF4yAKL9oLTE4nVkvxXJPJkvq72TVVzpygY7FCETZq4CvoLz3W3QF7fkhafCKLEgwQTdRPyZi2P7DJKW4P",
  "key12": "iRaUsWXqHdTYxUSNtYLxEdpNMheoBV2hdAF9JUfWTMrVcK9tTW9t8o3gBaimNZMsvjKG4SaemkAuCPJBmQWFroH",
  "key13": "5o5e7JKYKARzWttggJuR1hBEdM3cxytCfDyWUhguKDzc82o9tVxavy9mvsJUfhSpddd1wG2AZoXaG77q6WYMCNnT",
  "key14": "3pJnrsUmzTQwqvry6uDXHAdY5oMCe9ehx9GcktM5mFxTmVEC1c2q36htNBaajUwY7fs3Hj5cURxMPhM9NCkoZho9",
  "key15": "4BDRcH2ox9E9Fd1MQdJ8ZmTu5YEsWjQThmEdcorauZjoiSx4ANhzd8jWEkkVC2NYzNyBebg88TMWSnuLBrLg1g9u",
  "key16": "38jQGCCdU3YuAkL2kxbz49vzkT1V787eGF4T488P77foLe9PmBfD64XUjmwxE5p4gJuCSpuvQMHZVBojanCuJipz",
  "key17": "ymJtLy9VDuiHCH7bwEcfzN6xGTrx5t7TiBjN6vfPSSV4ayrL2wFtNCdkzr6X4dxP8N91VqiU7c7jn6zwhFj4fBE",
  "key18": "46eqnkSXi2dGcGVTeiKyXWvvDcuY6VfbqWcjXDm766XzNLFkPn6NkVhKYtoPkq4dzyeiGUapUchCmkx3HGtdSeyj",
  "key19": "2RfDrpfPAeYvdxGRtvFipL42YuhpNMEfo2AsRnHfnPw23w54r6FBQUX49oCmMcLUnhxkT4g9SgdoNgEaxNB5AoU9",
  "key20": "4qRSYbMHm2oyT7YWNacAvjmCHgasVHnRo4ir2LbWRW6K2UDAHqdctHDsNTjYSC9sd8Psm3Sc9UCwAvsKEJ1JvZYY",
  "key21": "ftjyvpQpCtwDQQ6P6ZZ7BLRFi349UXWRunWbVv37FsUT3PngpwhnNS9TyxSjqucBGzvFdZjtEb4ctVhFZgXdw5B",
  "key22": "fBdEGQRUdBbRxiWkmDZm9VtdJFba4SvjRYPex4iSinLp5bK7PKad8qh7kmZAvAkbL7XLddgqowavQ5KzinV9YP2",
  "key23": "5qTWccctT9knmeoSjHRXngoqEaMkrGSd4GLULpwuxhCyWdU9yLjG7VxQQ6SRtUckMGC2UusgeYEP9VbrpJT45EfU",
  "key24": "atGJqjH8kUtFTU5xAxsHMfhVFDCeq66p84P5oWNk9b6QqREvyNjYycVohNZaP3QnYY1jEjUwtYHh5t4RWAWidFA",
  "key25": "4GfszXhfNz36zJrcYapj5tjGaMGL879br3MYq3sASkCp2W5CeZLp8QAmG6Fn1phWztofK1voQRosdFMyoffL6yP5",
  "key26": "3FdUNV6uJ6pYHiSgGKjCmfph75PqxEjgQcG2AD37hLnQvTQHvk3qqixb2Cho9iuZjPmxT9Nv2pY7T7zKYfMiNJVH",
  "key27": "4gKpQfraVhXWmZBv815qu51SBNg1aLsA1JdCkgKUsSYRrMEEssPVmAbmdAHNBPHMJxhhGW1JuwrXoqmc65x1J4hQ",
  "key28": "3jt7V4WoxhmMHYbqQxd3rhVcLZp6JHGh9madSRtjdh9akBz2j3gCBoSM75q2ad84CWKAyDm6fUir4y8XeMSSA9zP",
  "key29": "4deUioQfwXnvCEtCvaHGutBTU2W39yXebcxy4bzJS3oExAcPvdRQMBkpHLQHoEjJcnh4qFqfy5Ui8ZZ1bDA5tfdo",
  "key30": "55fpBa1JnDYG7jXwucaFvoHvcWLFqAwZizTY2afRcMdzsjCCyE3G3VT4ny8xsfNKnXKkCyGWq9Zp1kwggkUtn54J",
  "key31": "2BWusMQecEiGdv82rNdze125SshsT3PqF7bRZMnZvixHYo3KQQUqac9jitaNWNL4ky5v4Ss7LZpG5Zv2yFMQyYCk",
  "key32": "qdW6pPPYdni8MfgkQ2o5ZZ9dMPphrKMDS4jGMGyGxgfW7VsQHS9Rmtq1YE64bXaCbM4S4XAZf1WE5F43RvTsPJW",
  "key33": "4tP9bzGZvNfHDxTiFFh68zmtZy64vrv3aYDyDZbCZErNxQcafaegkrMVkZAPFtv4dj4ztW2TJuAbzPNEmojCWbd",
  "key34": "3iEmj4WcSkzU2tY2mfg1swHSFAX69zXZUkBVswXTgc37byRz9mHDvqrQanbaoj8F6gENBJ5bcaHd8yJi5rMgWrHo",
  "key35": "2xCDG9WZsFXRFViSXknemovkTsChAQsuW5igHEzsy68SDitRpiSLdERA1hoq6hq5okSg1oAzFRenTMyAQqJfdGXR",
  "key36": "XAMnpueh4FjKZ9nSmMy1Z7ybjxhb6t8G5xoRUdPUWqup1inFpoppzg6KwvNuqHSNRDCUw61BWjjDKyUjP677fFw",
  "key37": "45qb1GTaroAkoepRGbg5XLktE5SYSCFfSswMMB4Voj5BLGs4kyv3x28BQErkwDLqibiYb5ZLMRDLJ7VgS3cnMdrk",
  "key38": "wTgC48pq5RquyStsbzacHutqk9hBK5X78g3fXL4rR2Ntk9a37xfDhTo1JRdDXn8U17hXsb2MbtvudSd7z7WXjxB"
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
