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
    "3tdyGochEeiHH7Rpve3dcA1iC2yjGeCxc6XioMbpWYL1Vwrn7Ho5uQEovkxTohdVXaesh6aTcWCGrZptwTtEvsUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aXbB1Q6RjaZuQwqe8wxdE2v8ytFz4jjv4Yzk8Fv6JF7MVMWUHDhcoaTXbLQzSD2smex96qsVxYEFUBZt8bZqEb4",
  "key1": "4QErJVCCNAfXwzTiTKZTzyDrD5DaWfU826rJityWz4qjsB5F6FkspKEf7npeECfqttoprstnMyFbX5qi6dx454g9",
  "key2": "48fBzBKBJz7SAofcYfbLf8VzPCMcR4GdPxkiaQRR551QKnYo2iouyN7mpKSvHoFRMBh2Hygm9dEfyMYmPnd9wY6a",
  "key3": "4sFvWLpXE4MT76zNTsKfmGsFiQStNYRMwwPQC8PXm6PjUXdpnjaq9mLtYfgovHdaFDtt4YPY2crUBq28XnbYv8Ek",
  "key4": "66mwFeJAgoVdf6yZsVWwnoSos2G436VVnWQRAvgfGyYxvi14YJKsfDqmMHueAaKTzFWGf9AGioc9ZASTKAanG7n2",
  "key5": "2J1Pj2XY74DxSzNjqXSPBosE4PtTncuCH9QEakTHQcLpnss11XS8zyn55e6gpWFeqZwk68v8bP5VPagB8tqFUzAS",
  "key6": "5bobbfDfigav1DEjHFZ6x7WS8YNAH5KqGKcchfN5ikk6myVLP4kUmuK3t1NrM6BrxZYRkTZmzQF3cobYUq4tGFpb",
  "key7": "21RESRP5mGdGuRMXC6tM7qciZHrdEhBo8Xp6mxUXsXxnWkevQ1x9VnpQJpB77ZpjXVhisn21jGzMf7zKf2VAsY61",
  "key8": "4Wxqjrb8nrarUYB3zMbWmRxqT4QSy7Kh4byWfx8D4YXm7b3dZn4gq7Ltr2stNpV1oK16axZbgaZ3WdAAdpkvRdJ1",
  "key9": "5DnNkdntJonWP4k4DoQd1fsJNv5HcQYpypCcuk24BZ8WjGsZVMYHcAvrjmzDajADcoNSNSebhjpeMkBfsgShwqij",
  "key10": "VisGmL4PL5rFZ5ikcGH6waaqtrZTdzUvCUZ1oRv1WMddMF9ATuWBs1pxPQaEhft1makE2ejTYDxpbdXuB44vNRu",
  "key11": "3Qia9G7FLiBLUMERrtXGWxoB9fbPXvpUiZGjv6TUfJ3PZWp1V6gWXTAopy6wNZg5uqkiNsB5YJZqbnox5G66D7xP",
  "key12": "2FRhSKRUkzzPXV5qdido2wcFEkzqnKbFMF9pouaTXHSVb6XhcyqvGBV8MUw6v2fSNWt2w8DHufoZ84VvadzzwVtW",
  "key13": "4Rkg9ymxt58NFFxS5qFbrd1Xj1E9gVBF86B2UD2NNSE7G2uLnzXb8oTaQ6raFgsvFT8eRAgUJW51GVwcQgvqXSqY",
  "key14": "2ksrjBmMiQmPhdQQnuXbUmJ98Um2ynHEAdy14vGFvfk3dbfzrSFBEE7PXiQQasGvmXDrz3qPBksT69LWgEdY97HZ",
  "key15": "43guE1UWj3yocLwvE9zS74vZaDYdWNFSSiXowDakxvZ5YyBNW2KYbSH4oM1xZUgaQsb1K879RYkRDpzaTjQP3f7D",
  "key16": "5chXrWWqEdCJWZYNgqawg1DYB21i7Nd3FqXaYS7oLtwtGgt6saPBejtTdZ7f4qxWEHJyi6QNXhTQRcrAHRvMD4kK",
  "key17": "5iummgSG9YRvpygwfwXdBz5zeXxNKyL6Sqg9qzqd8X9UU3N9XUQ9pZvDtCrgJfTXXH1GMGiZpsVQe3EY6QNwjL9W",
  "key18": "2UL5fb6ENu5VNEaLP43XyT4YUcVJXL8ZJZvtYECPFdof1vyi3kGUwHFW9TR81AVYXqiV2riiSW3uZUAo7vbxMAAx",
  "key19": "2EZa9KsXe2SP9DJ2e5KM2zxukHkrYYxMLdDjCy72AhVYfmqwSKtajjYYSxMYi9Z8XGt79co3vhMnkCf79zMhy4ib",
  "key20": "3RWKMdQXWDPyqebybciUHGSTvo6ysJKZUsV77M5qjD9icpgdkn7CGmLaG3HVQrf8u8YC8AxpTbHR9ZgxpeAsHXxT",
  "key21": "5sXnDBfxNJuvky5KxsWh2UULE5sRCcDR8HD9rs7x7bbwVkErDtQbfcwZWPWyh2NiGtseBWUB1hpQBtYi65MEvcWG",
  "key22": "4PZ12Fy8rJ7rMFsKYapwXiVmScZ4dSFs8WAkfB45jm98fehCEYCyUhFurND62UN6G2roNcgfTDSHfGXsy2gGdugt",
  "key23": "NKLW2DEwekkAcHnPcM6NtPPmo4eHsETToironqKfK6Pk6jfmgdfTiakVRGyAYDbuZr3M5AKjyCUuqRPi9akhwEm",
  "key24": "3HCT9q8u6BW4KRd2fWAHbWKi7iuuV8UC6kVPfgc8fkGKkfdTBsDVQNa6uq9xnb7hhSKup6Ctx3ynHdyK36KPW1LS",
  "key25": "4PqVjbV7gWwcrtUQjqvMLpwYX3VjsraYRdxBJu7Rypzc619abHYF8DxHfQZLfU7CjVTq8QwdQT9smCsYYn4QaDN4",
  "key26": "25DddYTaG61H4MW5eS26g3hqEGH5Mg4rqULwSCa83aNcgWw2ReyeeHksxERJvHboUUrRCd1ZNEpDqDWrX5PJgYDN",
  "key27": "3jQTWkNhUW9sMin5dRzGgrQqz3AzfJZdfn7whhywuoFX6ntdSGD1mFXgJNSyfo92NuEogmJbLZsDmTZ1GqNpRxw1",
  "key28": "JEDNCu1yQ1JdaHENSVzEeb2iokpHVoZga7xtQWoZFswebnwN7xJ7U5TYnytkEa86qZDps9qBqjztRfkY3aewEWF",
  "key29": "3HFqLBcDZE3jbBeAZHcRgpsrjfTK5Cs2LkmEB8Fev4FQYCogqAhShBiAT6ftH8QYwNAwxengpSTEzpwsCCip6iDK",
  "key30": "1AdtmfSz625caZWnPqd4KgfstAnXNsMc6TiFGextkYN5m94oajbweW11zk1BLRtnfXJC7fKSscEmgU5EaqNuvBu",
  "key31": "3GZ89grZ14494hZyqgoyBYuafj6Eo2PN5iJinNKrT4guWV3LnCsAAW49c8C1W1ks1jjUBcn6mAUGAa5BfJs7eW9x",
  "key32": "2mBWy3UNZjQQXb9m2URC59aXbHmGYGULghfRG44kLQkxucnM1EuwkVqJCAyAy3sgiyTEEzbpHUHbYJqJuv79qtQs",
  "key33": "34fTgrGanmx2PoQZMbtWiFzp9zJTYPPk5snb6HJdKCWLd54gMQsK4zbqXWH4uW6dMxCVDDUJDQoxcdyK1h3rhRDV",
  "key34": "3hB3wfae7qGiMhnbMmbj6ndkGjEgmuEH3TXg1SDNWbeWxM5GvVPoGvHBhZWfocJwwEgihkytCL6mQFYH34sZNkFi",
  "key35": "2shLxfCmeJuN6BiN3QDgYjTyTPcDARS54y6qpNd8dC8bX9PjvupjpRqc6JeWzLHNCBHzn3bWnoBXpdNLqKqgn2oJ",
  "key36": "2VKgbAF9WYLxc5fMFTqwr8pSm8dxcUhpnNVB9NkTn2P8bMAwbjGefcBtSVRNoL95MzBu88ij3QeP1k9ZqyQGstsT",
  "key37": "54fcie1tRX1dP6ihYW56ECWeXy7UavGzBap2UGUS6q3pvaCLUdmTQ2aVZ5UWiiB8QqgYeUspaDeULXHc8qpwjy4E",
  "key38": "4mgSgZpNvEEZRz96mmRWv9EaBrmr4buLwU4u89zVrNAMGCSqVUkuGqubp5Po3gBSSHPVRUKNSxHYXDbCr6sLqqEU",
  "key39": "3BidckiUBqgs6rzUDaofJQ9D2DoV6TiDrAQ83wVrpsStSXEPVLQG62XYBBKM4cvE3XSfEbRVw3UBcVaPMPV7veaq",
  "key40": "5E97aqSXJmyuxXtN9gRCSHe3LyzetSF4ngyv3rnSvh6fVxueVH7m5143FcSoY59SxWTbESBw54kwe6E9RKGPKaRs",
  "key41": "65nL9D7Uwg5qunWrvANE3iwfekKqtDtVJMiT1jgo32A154bAzFHBSvujr7PQYVpPpGhqiB4jMdjDCjAZs7R3Eqdv",
  "key42": "3Q8SNH21yYgUvRYK51tooHnuEeBau2zkRoqLjSvxgVVhb3i4iQxNB54asgs48i7wVS5aMD9oZEHJWVDxjbKoyHM3",
  "key43": "WD8GBTzyToajD8MvyQu4fSvpMjBSaZxHJfo6qn5AFGbGS8d5VyYQbvfFugxeG2s4zvv7FAaYRSra5qxktoetzF1"
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
