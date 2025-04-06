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
    "5CN8iDpo8TCyXy6wwwFXUZSxKGaEkwfS6KTvqvfMhX2SgYykLCzC7SsQYfM122P5vAA4jhgDh2khafqF11cH191L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43yvZFwafboXWdQ9t8oqAsHqLKgCmwbSyyjPjAYeyGYxu2BumTdvxzUWEw4MExoEnsH8zLu9HoKZ9rPqqPXcZEiD",
  "key1": "3AKYbtBWd1MwcgfzMaHSq1B4ch7uvZojQEYGLmeVEagRUxczhs2nDMxKW8w5fKKNBhNzN1ZHoEUM5R5yANo4595i",
  "key2": "WSaEnpp2igmwU61MLHbT9uqJ47x62GjdhEKfck34FJgFP7zm9tMpG2Yo9PKRkUQ4Wd7Crc9F4CiLduLx5Ve8hZY",
  "key3": "2YdpJRgY754a32rqJgbDokNK5xC4Be37sDoTNJ4h5cLKb2gcLzFy88xUp8mL4FTxmmk6MFRL33mszv5EyUG3qsDJ",
  "key4": "3v2gvDvqpAPf3EJAKxfXsrYVKCVZ9yJ1gzZST2NH1vfv4TicsBrYP5usRbfAi6KPpJMFrtJS2QJmg988Si3Zj332",
  "key5": "3FpSnshAK7ztfromf5ip6h7HWpQE1zHCLWJ5U7Ghm442xg7GmpuXT2WZ4wxuVSPaEbrqvcEYBLbPCYwDtjmExzzE",
  "key6": "4zJ8todgNJbkxkaziYkYvRUpHZ3UFxvE41AgSLfhBqe7qfrd6GRRdqCfSYJuZW89tysKRHwu919NkDWZqNaMyhbV",
  "key7": "5sQRYGxLPf7sHHWXY4Cp8qWU3i85f1wKQRXXTcDnAPaDQDqHvNHCK8M7ArsrxwccLJ5F23V4ay4DcJXnSAuePzaa",
  "key8": "2DApFKFnpiy5zCYpiZ3XGomHpUy9ZhhzYmfkdmqgGLcttyg6HtXovMNdjSvw6Zp28Go8rpETYpyPmWgEZm99NL1c",
  "key9": "5DEG48GtzNUxvGbC74MDXReKUbhd8rijvT3ePbW3s46HVVoLxfJXUJtwktUrGSUUSvHkpKhrtStHp8wNFomALXv6",
  "key10": "2pKnJUhMsoxPFHtfgnXnTDoe82hpsonfPchor2xgTS5gH8XbvAC9gexf8jCui9C6uSXFBJd5nKqGa9BoEhrpokKT",
  "key11": "dNr7eQuLbzFshu6JrEUqGEUqnq4fCGCWASL6SZVJQQcLb3duTaR31xvXEFzNqLB1S8XiMLTqD4WX1dq6QuHzbro",
  "key12": "4DmyUZFas2Rec6ssVvDatu2zhU5pPdiartQBfguJtHAZ69YCDyP6dYpGWjDwDaNnBb2q3pZdKe8MVVr25B787Pty",
  "key13": "4YJ2xDX4kt1wB365UP1QBAAtbofUaYA3ec1w3ZujuTZvYnZ9AqnZGev833CNa4uUToVBNJFP2rKnhvZSRecS9rFS",
  "key14": "4PPR7YX3yiLvhPmv9wTh4Q9gCxxhjRuaBWjc6spmTMr4ky8a3MdcmvgPtxrVQYt6ngWQCEN2eSGygkJfTaVWEAtR",
  "key15": "2UfmwvTEMT7Nb3o7Pf1tkeqiRoNvnV8qcDcqT9sE444UQ4Yc7cw7sQhbNSw5d8KQMxmWswxcAV5CW44YxpztxjUx",
  "key16": "4ThuTKhp996yK7i66FEXgySQL8vg6SKYTudWXt7CixnrT2J17e2GrrE2DuxuYLK3zHa85knQrJjnQWhU8pVdW3GA",
  "key17": "YWmxfH94vgsnEpFHg3zGvRyf2vWuEdxUi22GaQVkh1WW1tZRrnSAt94ZfrUAm4DS4kiVM2ziJ8gHaLNMWQ2qEa8",
  "key18": "Nc2cgUGLkVc6Nbtdz4KGS669cNWMkqFbrt3612Xo6UmDYkv7Jw2uy7Tq8ViXPFK5nkiAo9npebdfqXaTjmtqKpA",
  "key19": "3Mp9XRUy46jyJEgBcQAGc7BP8QGzScmvFiqGNrjRYbDUkqtDDTdsakWuYww3XpNRN4per11KMZ7GGbgD5v3B22UK",
  "key20": "518M6XZdHXi5EueDEPi1d9Ajy1eV6qTEgJr7Hi1tLhVttWCX6hwKxx3iqCur8VMqU1MCnazNbaEjCFiFo5BEY1Ej",
  "key21": "3Sodk4DWiMkoZAS1HtPSGV7e8Q2gmEfriostKNXwf3oiVjibwFChQbPWCZ9RxaWJyK98LhhMiPTTZMYkeWK3aeVL",
  "key22": "BFoFVXeqKAzSaDJEbkBtSgE79qVTK57w9T7uSP62V7QSHYCuDZKkoBacLQsP12q7ChqzM74DL23RzLU1GUYbKdN",
  "key23": "2oK4xPGRPSV9Y456oE9CNqq5qzZ91hjBndZP4DTbVukZfcKQXupn92YNPtG4NUgEkXpudRfq2qUbv3R8XiRah5wA",
  "key24": "5EpsycevHZsQGPcPyf99KQnYqweQdfhpvLzJzURqZJavw4423xNCG6NwrfHejphtckDpkE8NMcpL4Gqp1r65RSgA",
  "key25": "51L3LTCikA2SWdrjhqF7tj38W6nmKuSNBENnX7jzccaRCBN1dyjkt2HMtpgW3fRWuPTFNGtGB7KEmDtHTu9bUNYG",
  "key26": "5g4EQbyYrMxM1qHUpCyje4JryL7PBp4CynZcjwEqx7WYXiiRpMnyyUuTJgH8WSbj3uMxgnE6pNKZrtBtrgSTEbNt",
  "key27": "24yk1wB1RHtXzUV48HdUJ6mQbUk5cdWKriwY4GZRdfQbACvFeMPcmtNM4yDk4dy6vWFLiAFFQSQsxk33MBbMYtAw",
  "key28": "3bsrkZzJ7sELcTLZNSM5hfRKAo2BTn4CDVkWL7R4EqmEPj6o9XVDoRSBZUXWSERbNwHeHEVoJuTWJsuG4Vvu8YN1",
  "key29": "T8YxiGEy3dr4UWtX26KMS1DLpBdXvXdnqYPr6NhBHsUyM9jfhYN33LRCNv76yDm3BGf7JBadFD7t9DBbSHG7whY",
  "key30": "f29Q4vWcFQyyY8Zkau1iC2sw6x9AcwBDJ4niHayi8P8ZqPrySD589ZhjsfmR2jTEohNSosn9x4fGQzDSBPfQgXv",
  "key31": "yGEmpLfpQG3fJhbRQnZu1u52jqSvcYmR27BaMx2PuuQhobMZJzkib46L8rSX2eb2Afs3MdTyebz5mfXfqLnUr2c",
  "key32": "5KU8WdUhVuiaw7W97YrPwjekRgd5o9MqixCLjQXRgTqAc2rXdG76LVtoNrBM23KHBsoDTQ9vi3L8cRcrMKBycmba",
  "key33": "3QvL1BEeLUpcrrWXKWQRsvrRiAMQyRyCPYxcPNBXLA7ZEoquWyUswzDr37gL3Aw691aWLyvcs8G5u9dYzPyDstG5"
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
