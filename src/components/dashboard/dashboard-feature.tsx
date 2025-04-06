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
    "tz45EX5KiYQXVvoxX4zt5uKzuYW7nyAgQNvJhyTnmJCQGnY4BmzFgPDbEHszh3a79gJx4G2jZpqAJVtQ4KVG8L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPXHcuUPcay1hrTseKkizvKKekxfwcrQiwjDEhV2P3GXftRm1p8LH86d3LvhtpK36tAoubo8rdm9aqLwCsDnp6n",
  "key1": "3tLuD3eBhe8b9YAeEoF93H6rW8mmw49WvDedmD5etzFNYiRpEi6pzE2Hbd8yh61WzRD2oDAcnBXkFPigcr7pKZih",
  "key2": "4gFFZNQ5qUiHcvLhq75nmPyGKSKvHhduBMAKddiCuSko7qw7W6UrHkUinxn7eWWHSMm5TEPYoymWPwHfThHc5Msg",
  "key3": "2YrvwkJBdxMrBNJ6DWtWr1G3nD8bfX3f7Kejdb6Nno2Ju8sgQAsip3cbA6shuxZfsiLa28aNFkeweu3KWWuwhU8w",
  "key4": "4Q8ebB4mq3bA5EGALQzHHsdteyC6usKryRFeSBRBUAfD3X4pQ8qXv3ZDk36Rt2ngGqcSRPdQ36gYiYpAtaxxEq8k",
  "key5": "2onzY1Gy3qcpk6jTsTsYt5zSi87pUJ93ffb8MTG3rEjjCRK51fi9cbRV5YdNCmdCtCe6iP12d7DN4TbmVbY5tKAE",
  "key6": "4GjmXGPjL6pmeab5EsMPnSfukc48NvU1SSTH2b2QzKQFkNXtKkw5zgCCeLGhZuvrQGTdFjM98KsYiTgGdz8WPAop",
  "key7": "2vbF9RXh3WAo7p1VWMVtvnofpbFr5Pb2jMTYB5ii1a527tMnd7SqiNg9rvWcbdXSrmtKq2Teh7drRBPPfw1Gx8DF",
  "key8": "58XKJGMsKfhwdZe55o6FgX924gtGMAGYG1eYVj6YWP5wBenT32JJJEGoGi3NyEw5Ws4S7G661zioYW1fqfHXp294",
  "key9": "5XNZpnvuQm3sCwDxd7c7VsW7FdKUBYwZdhbpKzxPgMFuGTqkukTEHF4Ejos68o1pRpEmrdWRU361AF49rEmWnfP",
  "key10": "4ZUbTMQ9vqPB3qCK5cYCd8DQ8MUtexvHyUn1gRJbFHckJdC7f5gsrXpfMdz2qs7AXxpP85rGuXuVZNfiLihP23wc",
  "key11": "5gzrbsLUeFVuK58NEcxwEApKQULq2rfKyG1zNrbhAsEbdrYSBaBJjhA75XBjpsN2y24hDHTLvLEo8VEjNJ4f7mNS",
  "key12": "3YcN1HdxUypcAhP6ZTBiphDQyEUMRRyimLYj9sAwK4bNfAeRq8Y7ELBsqVEKaSS9g8zWg8GxJLJw73nrdDZQogt1",
  "key13": "2XoakSVm7ucbWi8VUTvVRqAzAfKY2THbqDPotWG58L9uA4hndQZbMRxJLoYNoUsHgPveFAjW4vxESY1sH5sh6dH3",
  "key14": "27c4XZQC3pJ3N3JX8SEWtMLdv8zfVXS26XJ13wzhr5JkcwbL7upKYKQMUMNL8UzC7avvZojNY25n5MPD6VSBoatY",
  "key15": "43u1XuSPHyN3r7FxNu6cNErPhv6jfsCeGSySYhijoRTCFyamg7c3p9fq9zhELWHmRpoxyZr52UqSALydCKrLarEG",
  "key16": "4dWby6iEzALmDimXs5x5rDAeeECmAb9eEndHbYYwD1nNfKWYwMXmPuiKRtvdF9YCyhPUgnddXN7ADToYP5heLgd9",
  "key17": "22tkSpCS3MkoANYQCZXBmxQFuAeonjZisRhtPfC9AV1WdnYnPmjuDMwboBhrdCbxUzJ8wN63Mw9nk9uaq9mRZUyr",
  "key18": "2yDb63sVzRzyhTtkQZTt3cv6c8QGQ5mKqb8Vbpf6bTei4duRLRjShPEV75UDgRQRcaYF7DDAmKXvKrbzi7KnCCF9",
  "key19": "5fEb4g2Gz1bYBpxp1LmgoBh3dWiZSR2ZRq4fSabtqYwNCJmAR9kuxAFwBWVhGX49t3tpanS4o5VSySfwVi6DMpq9",
  "key20": "FG9My2GEqgzovR7hz9SnZAUnXasQisKSxJdn9gC9sduT2fLnRCu1WLDGTCQBrQtN3iRVi9UMmuVstR9Vj7dbwiY",
  "key21": "6561FBoFcWLMBJiwtN1zNcnhGyTzXs9RTnzcrHNZgmwZdeWKkbjbR2Pvro3Jhmkwp5TtJ8NwgDBZ7hzimf7kr55i",
  "key22": "46qsAse6qBRsUvXdiqP9ivhKn15kctiD2fSXkq7aSBn8mfiugd6z4KR3kCvMnWmrGHBVqVBnS1xCEfrZKTSDmiAb",
  "key23": "43MFK9P3z6Qzm8wujCTu1PRE7au5HTZbDjottzPd7RXhnsoEXZd6shodWHwQGpuZ53aM4mzEWrZAYcDbktPqthRn",
  "key24": "59mHXM21Vrvcxr1KasoLpcTfhfCb72Bsm9qRoojjqMrrcavWZDLnP2numWWX6Wtr3uhMAvhtCJAcu65kogdPsjiq",
  "key25": "ZQEY28uaoGSSwQMEFFkq2n3Q6tw8Anofhid4rsf3daMdmCqwr9Epd6Q7aqmYp5Un75HFosXFgYQDjXyFqoYMSPv",
  "key26": "4LcpqKp21SN7jGDPHarrjYaxWUk4YLDfrikXtH8APxMQa3LsTvoquBpqYNK4Kfi1dNnnoZmQ9NBwJzY9Jkw54LiY",
  "key27": "3yW9uZXoPyJLNcsXTEwqQZaJsv8ANMmuXrgp2YeLvDcDqSkrPSVwFDpqQXdQ6qRTTcBryBk6yxPmGqzMt6hxKMS1",
  "key28": "2ovjnpkLVL6ejqo3ZpM1su84hnyHGfqh7AMjDkAzKFHTpXSzM5QWDuHLNLgtWW66NCY532AkBX5T6NZXv7x4y5bz",
  "key29": "rVzprCDD4d6HPeRgUs2sHqgNBqQPUGrpVKxJHKiPjhbamApXEJsymAU3A7U2Uwhkuq97roepJZj4tBYbvs7J1Kx",
  "key30": "28doWuX563nm8qrpyGiSrS1optwoNAjwNreG4W5wg57szVMkddSveBt3krnCDbQhzBh51HCsocqKDV2nN1vMkH7q",
  "key31": "4XWyBYysSddXok5ULnG8GryaPHbqoWf3dQ8pH9zNucWr7dobWqMZYqoQ6uqau6VCLqXZknUp9mfKb8zHMHwYeuTz",
  "key32": "2bDb7iaHJSycUHCWpw6RHSQtuy4TgPvLx6YNhvSXAanQt5VPrbA9wouSgYVVhrx7aE4z9sey8fUNkP5F2jKJXDSX",
  "key33": "4fPVku5z3gic9R63U6CwdwEGY9NkRHcEr8b83TyqeiSJzBFaxdzu47VBfQy6mBAsjMHQQjcpeRSZ2TSrgBmSoziv",
  "key34": "edf1sGQafjbXGfFtDc612ycmkTCNajwc97vbyXB9383c2V7uiGhexwGM62CHiSJK8rMMKDNVX5nHsc1BCiLg2y4",
  "key35": "5RbFAs7rwzjdbpspmn2RtgVTTf21i9BRzSiziJCYzDVw41RgaTXbVho5WgS4QsAect9gSJeKATVbnRUNLvChdU68",
  "key36": "46yugtPHDx7WqtnkSipiEYdQJBZWAr7Y7Z3cH7EqPeQYhQ7z3Pb5REZorjxZwFSx5JpFrgNrSosJBjx3erkmvR6J"
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
