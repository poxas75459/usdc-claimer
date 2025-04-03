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
    "3PwZZvSAexqVJankZ4YomV9GYQLAppWPzdvcysfoytKmUd7vCE2qCJxnHRnuuznK4XNyPCvPHTgKAXjN9otPKBEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oo8h7LjShajXN9MMpp6p1RdzdwEJ28RaRAz4Y8jTmFQ8czrxWdmmq8nR7pwcq61qvDWf31Ko4xUY9NWQduZJU1",
  "key1": "YQb3LxUdtQPTZSbGYnhgwpdJCPeLFjhoNxyXewKHc6txNvrfPwedbtEBNWsNR7JxQ18YB5EopirbsUaU92K7bYX",
  "key2": "336RkKLda6BHxS21tZhY3x2SXsK6YQJ6W42ioPD4Rytor7JXMLfGL8wKMPB8xWnyuX64vv7tCjnKYusu1av9WmSj",
  "key3": "Foddf5RAzQpEbCi2vXVqymbBMNApQr2GhxtoCK1avBnTau3zrdu8ANVEZYQdZrp3MspUjTn1KnPTdbd38w7wZFR",
  "key4": "5a1uPtec7n53zkCXfHQnNmvc2dmNSZwz82Bfxc9YCEBfx6uA9SX4wsXJdQ5Vzjjr13pPHEpoaTVcGSeKctqTxXNs",
  "key5": "4w6WMTSGFaUxXvAYxYv1dKkHmpeeobwMHug3BujbDSX2HwDjGPwkutefXK7QSKfoi7GhpLndoRgTyanBDL5fQsvT",
  "key6": "EVkr6NKHuEV5RwBHevwuqjRphEw1kG1ub1nBdUBNXqdUztQxJFTtJz59kmYqDofqdyagz7FPh5N1UFDMvS5hqyY",
  "key7": "63nN5c5EHUsd6r7yCPA5Uw4dWqdfUzo96kwU64yi9MWHbE2J26Dxoku6K8afeHyJoRNTnkbVbUV3KK2AChu12wdv",
  "key8": "4Eunk6hJAGbsXy5GGgwnznbBKeJzvfjcEdbUBVW8JCEtbmCpUpnzeZHajyq41UAL9U2psbzSXcaHMeaXk4zynnAS",
  "key9": "36Z1AJp1s19vj8kg5RrfZHoDUD1HYJshTx7x495es47YrnD7dpnvajYtrmDTeCgmzCrTPvfqrbrAzCzUDyZjyXuw",
  "key10": "46xPrUMNdSe1EdxJMfmgCUzNcaFJzWoebzh8Gxg9PXfnfaNTqzAH9oR7mWbVWYmPeyT6bWFnG31MJfryVwr7pagq",
  "key11": "3uqhGWa1TpwRaVNaE9jQMjiAkmTjhs2X2yHomMbBPnbVEayk9TTeUGRicpHLhrTEAZADcuTby7ffGpruKLZoqDgY",
  "key12": "FTeY1tyrJPCcLBYrwFtz8UQMutsUbMTsCHdtgfQhDEr4Mm1ky9wZL7boHW7aUvhNJUFgxq2bWT7AeQ1uZgH9ADL",
  "key13": "5hpVnuJaBZ3HWJbe2Tk6GWWdpAtp9rmDQaBuhRxC9Bx1FtmLBUNT7anu2nYpFoCvu1tsPrSqZjiMQaAnXNpEamPL",
  "key14": "2fexwbBE2FU4f8dfx2CtWWqdJauoDZe9vPVjS9sgYayNZavmX3pSWNbXL23jLGXgTxvWmSb5t4BZoffPW9AnGRoV",
  "key15": "3iumGpnaMcbRsLNVYyBftMBsnQBFUfCpmhDJnopurZj8gWUATR43WzF8xjs2fkAaPCBiRis9Raz5aPmLPoMR1MiY",
  "key16": "2dBnJoiZbCFMoMoMyqDRXuAucYmFF77V7B2LWtECM3qbUqWrRawtHFzXeXcTtK6RodwMHXWViNgBRpTwboNWSRSy",
  "key17": "5hw69DvQQTw7dSe7mw5shsCYd8smZpT3aZvrDbTC7JZQ7JvzUdMs2kSeiDQotNbbZbhqGcGHE9oSK2y6y4VHoYxW",
  "key18": "5EjTkuoULRQAFvjNisDaCq87uU3bVTASCZwNSH2QBSYABG729hgxphxEkf8Wbvw9egib4Z1dy3wpVA79NLZk4jQG",
  "key19": "4P4umC2h1gkPjv9LJFjL1puoqEwBtv19sbJ9EnhDwrUnwbPB63HmYas9NY2RWZnuU9uuFwc7i7Kz4hWBJiiXumik",
  "key20": "4sWhtkTCcPzXH4hUEdJfinFZSZCbs8Mx2VU8hLYvZQm9fmhRvy8DKtCqGwMTswd2vKDJJQjwFB3t11pmKFdHcmVu",
  "key21": "2yKvJ3DLAmcTpfsQMQ3DKvhTCptK8iDia4FYV2QWw9WrhtDVzRkYQ3XX8VDMbDM6iwk6743tMfZqYTk8jYig3mMM",
  "key22": "41CT4PdJv9sKfMR8vuaKJMbfTeR1whVHShLwj6dPk8ABG8YrosqYtzQTbqkGrtQoZWZuXnmm3fTCAD8w4uajaECn",
  "key23": "2tNr4oZwDxjwsPHMVioP8C4t4EmuzHVr6SfmB7xJqhPvGeN2DimJVb69eHC43Fq5hxkfs7VzhRK9s4hUNZNJtox",
  "key24": "5TuESGXuBuuqFBMbBpAXVc2RfHYDMvCLVnAV88XP4QbGKkxvcu2VVpG2c2xuQyFMX7w9vzfTwb5RbT2ddumqVUqW",
  "key25": "SuKHvPdK5t8nW1Eca6DewwkpiBjyA3XVKUAKAFNkCRh2f1Fkqrq7f5goCXm9dUhtBDC5fe5RW9smH3bqv6Ktjou",
  "key26": "5Wd4Vp6CtQmhL4FWmsF94Hrj32A11qbqpQYdVzgLRctnztnQ5Y1jbh8xh2ASVyhpDJj5ERdNJ3bE8yyj8R7G9Njh",
  "key27": "4cRv4UWogZSc7GxnbPqNEwy56uxktSi2d2FgZ91H2TS1Sjpykt78fsAx99bzhEAaygbXpv2Z1u8eqZRmrVWgX4tG",
  "key28": "4ocdUoHFz4S7jL19LgqcowRqWc7h61jvddX2utrZHiUJQ4YffntLupwQSmjruz2fCLgKLNs8SxdmJRYNTNgrxATB",
  "key29": "219zd3v9RFhwQ6v9WFRzCMAeMM6DmVBeaqAzj8Uo3Sw2SwJDq8tJXUm3jYoCW5zFtx4jSrsr71Ff3Wa3aXtBh2KN",
  "key30": "3XM5GJxBUSanTSBpFTeWf7k6x7qwLjP8UshrpBXUtwgJt4KmnDoXg8DwTac77TrLiqJnGi4XsoYBKUVgQRyBbhWn",
  "key31": "5vL2jCUeemsZgNxNzgBVESZfLoR9WFd3nYMhV4MPS6cdJUU5BXLfxg7onHeHt2bZKB8uJgiLhBuFsnEwxbjoTRrK",
  "key32": "4Po6NePKLHLivk5CUSBNf9K5ikvmMkR4zv5Wmbtj2h1NkYSBeonPUaYXjM5jC3snM9zrFN7gYX8nvE7CDfpt1NEK"
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
