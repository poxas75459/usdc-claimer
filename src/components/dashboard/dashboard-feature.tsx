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
    "anmS9zDMoHEfuoNBKqvHtAbinKZhPBFknuenmpaHtAtek5owawFnJynyMxFco8UZHX8F2w3uL32Xb2MXF7CYqJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28L2QYmByFsfhNtvVqwkvzHSsHQBUYnQHXpnekfVTW4meD1r5n5Cp6fpWWn2Wv2ZoDhGsb3GdtwXatSG3WZ7HMui",
  "key1": "5psMWuMh7zxoo7aALhWxMtf8Eoo3m5rCZzGybDnZMujZG6GBGQSxsvMHKVTmGRSFPNT9kwEB5NmNRhPmn9bxrn7Y",
  "key2": "49cwv2fftXFfgANV12awDhFPvg7J7rrQfuofVcxk6Uf5FsQYsHL85EeGPksC2hD87u2NEj9nDKERFdkVYMej29y5",
  "key3": "24q7HetprKodbLkmd3aaGVHpn6TTGgJ1Mvdu748jHzzgpCRrgSrzMEvCZrR1E5YUpcMQUZi2Hoz466cLNfiQ9faQ",
  "key4": "5MeRqhjNHspp75BTwDhToL8YsEgkP4wwDmzTQwSHxModDCbfoLMnSomBJfXkqhCW89YBbUyP6eNYr7gxKFZ8t1k2",
  "key5": "4amUU1sMGNw5f5LF8d1eCgx8boqFpchAjiyKygy74qcKuqKXDhW5JCEX3kkCZL2RFwrfTWAyhDG9ot8sZNF3Z5gs",
  "key6": "4omK8DVSFQthTYVXT7XH51P4Vsp999TbgU7Xt732h1vbjdf1ihj3GaG6QSDNdW6Jc7D9TrgvfGE2TgLn8r8y3DhS",
  "key7": "3hcR1kaL9t9ienZXTpNrcC8AuzCkLZztCQm8FFkt2tZAgkUpfWL5a4462scmRCZiogKx7EtY2ZVjU2uEDjmZQj7Z",
  "key8": "4m4tMp9qgF5hpeEx4tStrgvBHXHRxzJWezExV2N2dBC1QYt92E5Gqx7UvG1aR9LmhN38JG6J4bsSEQKttnm3pT1k",
  "key9": "4ZV3oe9zgTnF3WKdHCGh9xKiD5r1i3frh4rLmcYHopUiE2q8QS4TpQLm7r5vrPNxNZPZPogw3wGWmUrznZVLM3Po",
  "key10": "5oXFdJA4DZSnybRrNMPq1BU4MG5wFb1kVQvQPAXjyBMB7BdNBoa5z5bgBjngSLvTkXYciCCcVhyKmm42M98kUcVv",
  "key11": "48BGbqnpih9vjXc8UWGqJRHqYpoHRnJJbAhx66vRBDvV4s1PkVdNtqnrSqGNTZwAJ2FH5QdZ4B33kLBztcj4Y6R8",
  "key12": "2VL71fDGnhY3nFKtmpvP3ZFZ4ff9mtDnYmTTKb4xt7vokLDtwLdRYbxwbPx7GJYsxFh1D1HoW2pNAzeASwUnPK9N",
  "key13": "s86D14MYwhSxvbtLw4RFaH8vjkQF5sEqFrNQJtvM35ZS5HYSAEdT2w9q7dM48xTT9CnorqaWWMawepNagLvTqtU",
  "key14": "Jb9ZKVrBE1st6AgKpAG3qgjjqwRCDjnKX6VPPgUMWMmfdvPJUXz4bYAYzPYiYXk4uyYum6op6R6H7vyURS4VRj8",
  "key15": "UYaVsVM2JcLJiRoXGQtLyc8XxJSnQzU4mP7EsMzTYFMNTsaqSia7LF1TZA9jetkyCSbDpch9vXJu4DPaawyZb3D",
  "key16": "1MHHBFhbFDBDMwr9cRVnQ5USt7F8jTV7XqfLJQZLG8jeigDgSAujE5Gtij4GFYENt4k8n48kRKwuPNkpGbiuBGy",
  "key17": "asitv1FFFf2QjyzvD7tcdg6UrCBuB7xcHJ4ERhNQFd6mBBW9qakFKP7wcnjJFcNkN5zYMXBaWaxC7GSGE8M9qkJ",
  "key18": "VE9AZFhqNJLXCbxLuknwT5i4h9zQJdK4UFhTQ9spNGWheuVzNFiF5AspEwpMyiJrnRjpuFj5nDqJQujkjLE9CdD",
  "key19": "5npVMoTmWn6RCf2WEHcW6yB7ys2yd5TF4ohJRYZShubKAnemTHYiDdCVxwVowR1cYHC6XCCjzFbQaz2mn1by9gvN",
  "key20": "gpm5HWQiMLQtz1ukzEEKQUwr6ZukhAZ4Z8DGMSaP6RLAkK8cQtKJUjB26eimccneuUVJ8wZV1zDMT6Z6pjtHPyQ",
  "key21": "5naj85HZ2cDRRMCoDM5oAMUZyVFdjfdMsLAy5nQQGAZCcMG5cqQTBmTXhPnbicQw3p1FkzqCgnyfeexyTnZQrYAU",
  "key22": "2Q8KTC6CZrA5PeHnhHdWBo9LtzmEsmLAutCpW1tV9QpZtjoaXndwyTwVRLxPXQnUMX6yqou6PsX5yfhhdtMyYeFP",
  "key23": "46Y8tNNYVtWT62KgGjZajECwsVZw7PdwjDUXMBzD4FZbZ9SRgGvb9sQ5Fd9kD7FvE7AX7jonpxN52p2XBq9GUACX",
  "key24": "5Yn1GFV7i7H59ydiwnkCH3wsdQfWkg6mywbD4eZeMs7Q7Eoqbe9i6Ljj4P7GXQPY5T6HhcpULYRCGthmykqx9Uam",
  "key25": "yf3oEJ9LZP5A3xW2FbF7Xcpf8DAz6ti2mZDMrMC3qqeH7dWzynbPsKx8eNfoNx1igikfDXw2ohhbahdvo92gTHV",
  "key26": "3T3pJ5fh2CSQomK5ZQBeN5JowvrioL2FoJTwR63i84J9eRu1nu22xnvMCUcP4UVmwfyopkmhbcD74PkyttYytH3",
  "key27": "2XYjJue3ULGLwnQbZcz1779bsToCTid2PDYoCtmyF8v2DUHYcjFZNnqndVTCCJctYvnkQzyNgCAqTxTxEUcsrk8i",
  "key28": "32CihZXZnie4nQZmjj1xnkufvJVxpZpPe2zMCqtWrmVKAg4G96XV3JJ9Ym9B4RyXZBnrebgkT8Z72MA8Lx6FKiwT",
  "key29": "2ZsaZagGUw6mjZnLvZekLNZXwpKruBTp6RWvKLb8jE6JJtoWj4yVE1aFp2Jvwx9vfhrEEhjwcTU17PWusW1fiHG3",
  "key30": "4GbpPmhEpp4VvrwcRLNEvLhofg255RsheKDfHgdjGM5VBuDBSyQfdy119EkkgkzNsdZoiT1HbhhCVyhyhL6jqcj3",
  "key31": "2M2qh9twBNUyQoieBffCGMEK2WnKFgeBSrnsGx69mcRkDw1s9nxuuSPif9pTPW2cNCEcwkY4TycFvdpEVyWQkLw1",
  "key32": "57F4VcjAsqG6HEsyUyLGaTdov4yiBtBUbUJaGLpnT4znUw9nmBLyhzRLY6wFSEVqXsi5bJeXLgD5wfum5n1kzc8b",
  "key33": "6manJCN1eDiW7YhE2Fk9MjtuhEhQcSYCkDHJajAKdGGq7NAJ5SAJMLdfFP4TQ4vs5ydjvehVXXzLHUHRE2b9uFD",
  "key34": "4mur1FUZN6Q69nmVGyzaPH4j2BJsgnWaFrgPFLjN6wFj31v7QHtuB47qy5mCN5S1KftireptDCBBx7UWbnCVBHYY",
  "key35": "2Dk3M74vvRtUYthvmbsiEy53cimRrBctSQMwZJXvLWcKNVFqEdamfkLEcteEQEjKrdANa3SKzPR5YP2cP5YTX7rF",
  "key36": "2xnfDgd4bDwNwQW8WidMzJwRtxgEjPxxcirwMGiPK3JGNHFs5LRXWb5ysQu2nHEfBs1BN1k749LSaka4a9TVZzJu",
  "key37": "hpKcP7vZDckTdFjVwT41EwdG7afMEtu95AKT1KTAZZ7CSS8ZhgzGWnMLJsb6QtjJgax6fmSF5bwLRvWoFfSaBwR",
  "key38": "4mggLyRJNzh4Yepp13XigyVttFbx2vHVPqSj96fnEMnWbW7Gzth332syNLZroYXuchyp1xqod23fTQbo1Cx2Jvkb",
  "key39": "4748GMaDkMde3XaCCvvsLWvwWmMxhLVWKqTzXrYFcMXttnYxfp6WziWt8rBts7kGJaifPiZkoBobuz2yTED94fmx",
  "key40": "2HLiTv7xv5djEdK9p57moy8MVfAVn5KQMZgnRBKzN78dwtt31weHkLtD3ERhY7SkyjFh5Wffu4Kdc6G5R1EjxRYk",
  "key41": "57WLopvNhVp4yEWMZz2WhGtLht8TgYPMhpJYfDCCL8XNaox2wWDaPVYT1K5tjdD8t25o1MJE8ysGb8NDvea8gufp",
  "key42": "37YHLVsn36FGXykJzBCdRbVxtP8EBendK1GAgXVce6qRoZ3hEyrMM3ifxRHa8HL6TpgZKV4sCnCKsn1vaVqvq9hw",
  "key43": "3vXXtCKczKirG7MshPmdMnFbsgzMfRrJ3vvMdQy4XfZRi5nsugitdPLRUhmmVndn66r5d2Pcpmpx7N9nXdwAfZJX",
  "key44": "3auV7wqwNQZ3k6VmuxyKS9mn8oZzvqQBzpMjFUbpqPPhHLLxGAqE94dyxoaj1ZirHcficc7Dt9VyNrxfE8L7YgvX",
  "key45": "4DJYHLw6HoSnsTRvMLLG7w48xLiqqnA373BNoyp1EHxWEGKq3AXMcuUZLsPbaomBcZyCAkycdBVEGPg622zmwweQ",
  "key46": "48B9qWp6dTLYQYX23ZvcaU4hD5rbkoyyTJwYEh2SRVHYNk5S7p36vE14TUxeJoNdyBQKzJYVN2p377qDQ6jB3GhM",
  "key47": "4c3BSVJT9hmgbQTxEJGieze2p1BXjGu4huPa36pCUP8yLzToTEoGFDYePVXJFJAYCnZifBgKf9PexoNCyGKTEFTy"
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
