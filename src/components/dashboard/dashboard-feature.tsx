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
    "Jc472ccRxKtenEoFrEa1zQ9aCQ1Pr9jZ6rA3crECAf59VMc8ebuSsarHng2B6Rk7UsqYYWtY2RaWWmNf7EJqqpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Umahgi1PhogtTXdk5KPDyjeycaA1ETJLB6arxKV7t5WhaGdFGZyuMMbjuypBv8YKSGAN3oGEWwSyjosK4amTmQ",
  "key1": "4migSdRZqKecrNLX8ftdHwu3PeEWWgf78KDki6hr51MUN3Ld6gk3awngdNBVxiJFiezaRYLcVYhWd2aVuc5mAjLk",
  "key2": "3bVHu5ppdRs8vAWYFJwRxUSWukgWhw13T9SakUHM6p4gkrvvYonBYEz1uR4FmrdDSKJPSmWrjNc4Wa2paQHFEkqS",
  "key3": "cZiBtoJg6p1MiXBo9HxN82LX7ZyFT8JyT8CjXznsVNDxeRWJGFETVhny66P79BQ4U5ZqXYx5m94hU35NwPcWNUp",
  "key4": "Xr7iK4K2u69anGZAtXrUQUnKtmAzt3fjRhRPqhSqHc9uvh6JnChvsY1Zrb6P1g7CYRXGX8gDp29Zsyr7zf3RaTZ",
  "key5": "2qt4R8JWraRMnKMzHVPavLEDToS7xiE9SqJosqF6QvNh12p36inpa6d4FtFzorJfV4XmTG33eyLiJnZyvxgENHc1",
  "key6": "4cQzUzGyWfmj9dRukKjuehxiQUBHc9YM91sUKtmYYqFSAiFjVHTGevjkk8h9dNqM535SFe9tK3ov6XcipM5eArm4",
  "key7": "5k34Um3xMrQFo1i9h5GfVMHP6vTRp45GQ7HvTVXhMP8QRCvCQbRFqgyr4Nw6LVdhJATqRiVxsXbNe8PvtChZczdx",
  "key8": "5XNkkGz7SKfhZ6zR3WWqfU6sPtrG2Wx3kGDfJTY6uZon3iqtSv9GFttE1FkWn7zNr2a4x5tGoVf68jWAa2v6qB5A",
  "key9": "2PrSe7ybsc7Gbf6FNsy53E7mA8rKtemmyysXaBgZr3bSYSmSjA3XswRm1EbkkcPW77gcLpfunUzQuFpSKobkzhQp",
  "key10": "2kEwAaXZv8nFDokhqW4sD9c5pZQRXqmLytCxPGWoUtQxGpXpWU2UyDojwJfXcfpECbaRTvw55HtHVndWYYkVG3aY",
  "key11": "43fdncng6FbwaxpspcdKJZQBszotEEHPLGHhF51CEkUbwHjDJHKN7GpxQhV8YPZMnesEvxi5baeYocZV1UQVKPVZ",
  "key12": "5qFTRMfKCn678t7oHF3opCfbf3wwE3oxmCphH2cpUgFDDYuF6qJpHfMRgpPQJKyfcR4nb1W7G6XYF9YgMpxwNNkS",
  "key13": "3X43GJod2HdE4KTxfSHqvh3UKJyQCEWhizP9PyYb9aCUWv3zXuu2WL1PELnyCCrhdzyp7NzYaKWQLwcfG18z1W1h",
  "key14": "31qHjjN6LjwM5NuRLVCDdakBadfaiSbc8biXA7G8rPs1XmyLQRdHVUoVtVSHBBpDf47tCitXNU7U7MNb7Y3z7rb1",
  "key15": "3HMa1MzUXEeRMhA6dLyJkywcMgdYPx6hR3khtbpk5y74dZmQ7tHSBKndao6AQCswgEyNkkZRbyCnY41rGDTQumJz",
  "key16": "2VeBD3CAxikmmtQwM25jEksLzf9ChRLJi5CXkykWWMNzaAW122QWoEtrJ776ofuqYdzE8XHt63qyTvaPMjtJ9GEZ",
  "key17": "3vwFZr7QmxFa8iPsBsw1pLq9KB8zxqXUUT3qvwKRrAKwjstW7Exm65cwa1bEvPMUJftiwmRA7q2jeGySo3PdhXSG",
  "key18": "3cXdiMSDT7zAvWEGbYkrf5Y39Jdi8XAbFyh9nNGUDoJUsmzeZ4ZAa56iUcEQwSm4MMkMrBag3GPTxHbpFUgTcsqf",
  "key19": "2r8Vrgb6GUdHM1YGkSdrjMmL4UDt2N4DXpPQUKHrxsrmJryUVxhzMuvJJLq9R8jv6hqriv5Pn2xEvweTQfzLoFzz",
  "key20": "4hgDRBMt4Cddh5ftNvqKLk45jBdmg9PbFV1ghMhaKpo4iLzwrRNKvwr6c1TGjHiPmgj1wEB7Na7P4u84twTgYnrB",
  "key21": "5wSxDUCFsHko5KbkhoPLjf52Gmyh1BL7NvvhdP74oJWZZyHctTGNG1PvZQosYpow8oUgrKMLsWamtJLQAtZQ1ynk",
  "key22": "4KXtq7JPwCMUNqMVKm31KXvz9DKY3qVXiz3JuFsb9RcCDDd7fpqjjGdHFGkcDwTt4Vix1veAKB3yDmPoxq4S5mwi",
  "key23": "66NWsGkn5dVUEyDL4v7Qvtat46UoLUJzbMCayakrLruC7Vz1mzqk5KsMb4UAkfDjEcwuavrAgbxNeQAt9FLs8rUa",
  "key24": "ZPqR6nfmFMMQQQCTeYE6Rq6r5UarLVkcJU68tLs5sfoEzHoNjRsqG2jgA39HTPdzY8NMNygRWYMLPtC44u91Kh6",
  "key25": "2jTj9T9Bc5ixLyrw1DjcRJS7x6Nw8MfANq7EBvuEigJjiNz1NcJCZBtq3qTirHFJKXpGy5MBbxgJRYYrWPMQKwKT",
  "key26": "4YLVEoo7NSFaP8VKrxJJnU4TaocAL4xA6MLwUxfbUcp24vzZbJFwKmFbJAraJMWtbgCFZBs1NyiSeuCnCVBh2ken",
  "key27": "8qXFKtN6Lynz5aQrPyZ95KPMXGTxiaAVHkD5fAEBJwyTkXbeFpZna5vyr7CFS83wLar1vJkZmrTnFgG5sAfoHQf",
  "key28": "3JcfirSWaeejj9GNJ368vbskiDbZF95AzS2gZCWKsJNkD8LHAwSZRqgNufB58JQMYeagU9NYkWVCwCac7eEF5kGP",
  "key29": "2bBwRGNNntprubxeKEuvDMMoMLrvVApkB73unGb7wHMJGu9hwNQBTofn3EqfstWGpu6naAhfN87o1BCwGh9XnuRQ",
  "key30": "2jSf6EseeqmmXcwmWJ5mu3tjFwpsmpTx8pKkuRyeaysnyca6xR92qmVB8AE7XBb87sHVGVxwBanofkXvLAgxkbvH",
  "key31": "4a4g5SkkUhtsL1pGgkZ7vAYNG8MC5fRW6dBGtBHiNsrGL4yKMnz7ZKhfJvA2iAjykr3Vvoe7pyHQKWSecwTXWunK",
  "key32": "5Q1GJTwd47cPKhbTBQfwcpxdA9Ddx9343A6o8osb5uqMkqErKFg5aKYP17atEgGgk3XoEAPwUUJAzdqzjS6g55qg",
  "key33": "5uutSvtvKBPThGHUcxWJZdUVmxrXXgEkayJ8Njm1aGsuhQS6h9T7pSvqZYiiB7z2DqrFQ5J6zzcTS46h31feuCDY",
  "key34": "4zLFPVMauuiGwT4jHvQsD59aMe6jAbSXRZiTtF2aq6DKCLJiKUVqNuCKz8GW4ZaagtRJWKCTjaLDuw8yREXXMjVs",
  "key35": "57UcSx3kCCgRNRbbrrmyUeS3i3ynf3qcHnKoPiFU29MVDXyAaJ1pw55BrTxUKrSNghn8pdqoGcXKxoeD5ydAgP7L",
  "key36": "29N6DtSCn3e3cRaPuJphBRz7a26Ly6wWjyi13epu21DC7pXZ1U8uGFg8TCXbXfSZPjWkgQxoVZSjEW1ExrtopLye",
  "key37": "4gYsvrvEwRxHj8jyoK87EAzEoJ5LAMz82nUdUksrhzyfuKhWgJD13X3aP99hpb9CWa6R88efSmjjkPeveAByvb4h",
  "key38": "5ptAP8HpBCyLgQ73GpbozaF7z3cejR3CbC97n2n2MWs6vckWmMtxAG4PENMNHzJp1AkryGGiPHJRCXZgTx469HTi",
  "key39": "5VxP3j28XEM7TytEfoNvKBa4uyFu1mgv8MAhLakBR2NCyGijExrBGAWoqD6wQt1mFNMjf4deF2p9jMaMUPex28D9",
  "key40": "5L6K7dVeaTZLtN43DgBWDbGXjXh9vtnbcdS2jabzGrq15evMbzRo8qfzsXydfTW5u4fyU6UVHtTb8SJVWTdPu1wa",
  "key41": "63tYXUfQoSdikmAeAdtqe5UTwnjcniBvNPnoo88fgooQSmFUpQ2mCgBwhnCLME2PL8LMVs5sA7hFTBC8vJFkPYvM",
  "key42": "5zMi22bmgmmP1zL94K2WjQR6Fivjv12hsZFBRGbzXCXAYydv3XiXgvFL5byeY7gL3kUfR5YyvBfjHzD1fh48KuaT",
  "key43": "4ZAvxtmRwon2QWJBJsK4DazphjLatW1dXDNXisaKuNDjkGikHW4TwTGn7c6wvUeDYQVqHyWAMZRiwvy9B5hRDn4W",
  "key44": "4NYSKwpR5BKmwAps2mYZxFcM7Y8YDppq5jcgYTURVNxyBnLAsDbvBnQDTFCjENQs3xYr4C4M2aCZdu7nPcB4r7t6"
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
