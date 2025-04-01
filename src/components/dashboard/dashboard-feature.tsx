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
    "RWK4fveGf5NUK2DYsA7rZYDTs3T9tV7A8s5nVVDND9yg2cM4hjovnA4HqmUgGmKELTPpjXxJuVConRM1gYXGRWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QC29rVe2VZZ5NuechVwDZBHVVUr3mWRALpitUera4BD836pMGD9q1sTRpdASj8gKF32hsv5f1ctX4vX7jmAhruv",
  "key1": "442rrfAsBWGuovXxPcM1G3yLDFseMcGr2gKHeyoukyZVTMXKCqKZKSpHYUiAnN7pU9n9GrhAqWjFXUxZchuiDxq7",
  "key2": "gGvGKKBEjUxAoW3qtqWCMV4xcDDE7NSP7ijJ3MZhBGf7gesL5jwkU1zhfJZ3jJF6rf4we2WvpZ4jgFn8kkvDUWU",
  "key3": "4ShFaGDcFFfXhL2tQGe114oa3kKdzHJJkybirsb8C8MekxcazvFUBdrJHr82uQTKZvr3Kg4KotUX1GvxasHgMBGQ",
  "key4": "jaJ6jMGUjzcBJaTRuGutpWD8GSKCVjTKao6ApzazweEks7VPvVw3VpkFayZTYZYH6PrLKpP2xhyHVZzdqZ1gpTB",
  "key5": "4VZfPLbdvMhZ6FSu23eGiu962QwqHAsKwUrJpeMzaqFq1SVLooyHs5BZ5SyCpdFkCv7mxM8zaie63W3zLrkqvyZL",
  "key6": "5BjH5zt5bGTKQ1TEHAppz4QHPhshvoP8MkNqDFmQYSmH6Qzw2bzGNXuWRUTMPUD8oLv6evAaikYJbHAvCEpoo2D1",
  "key7": "4p6FoK8RwkcG8jLWZiTdtx6U1xtNamd6qBe5VPq7UCYwrxN88CYFFLFdBQbE9Ka8Kcc3zrD9UBwGHR4ZiyjZRSGs",
  "key8": "tZLxTgGXdW6H4L2VUrLFNC5zJsAQ6aZEUTVMXDDe8JkW5ni12r7xnSDPzvoTFSbLnR2e3SCjaJfDbV4u8vHtVtu",
  "key9": "3i5cRofrGNzuxXN1siQGRNg1PUCZNhSysuPqCfysyfoFapcoq4CyVqVevDhKLdE6o7FMnMLDXQhu8LUqxtqT2rcc",
  "key10": "3AqZMgryYRgQbmxquJZqmjGCNbVYg5tQTcWYscrkbWV3Z6Dxxa4A21ZNdqTyxR6U3gq9vWqCfezeFaG5m1LPyoCD",
  "key11": "DNhpRUcmBaDbZs4SR3tfE7u3ehE5goGt7mycjmgF3kH2gYZzjwSAd5psASq8Fk7kawskCbvkbPNXzfM1J3raAQU",
  "key12": "66G9aADfxCT7yKFphnS1zpyuZo7dZuRL9J2krVDHDFKrgssexKGrxbUhf9UzeLvqg4knv1r1YvwvHWxAZJWVKQRK",
  "key13": "9iot1suUgc21mH1P2wsHMQosm3bNMusme6dTuWopNoTpLm34svMckgXVWCaivo4rYRoBbWTRHe7dvi3EyrMh1mr",
  "key14": "5QEihoGedKvVWVsMJUjxFwuhxrxAihS1ZyNULS7Jrbigirb2iE5UUSv2BFq28U9Dpk9brijqH76C8epS2xatCn2w",
  "key15": "49HdvqWn88aP8rQ7Do6YNAjFnvh77oXqvtwK5HWzeoS1cHW7XPsgbxc1CayE87hLW1jcDwuksUz8TtzVrNysjHr6",
  "key16": "2W54hVwdFRegSEXm2b8HEFuYCb8hcpBqypBVYX1cVyGRF9qzRKWS971jQSYUQ6wtnfkDos7fXnxRCBeQk5gtQYhH",
  "key17": "2LpGHAPqnY68mUUjxUCApvhRXqsZMsxCniLpydQ34ndxmTVCkzgRMc3CYvmN2L9nkTwLNE6MJWeHgnRe4QVdsexr",
  "key18": "5XJird8dNeucb1nyCPsHoQeoUb6ivGEoWx8nSVyBmERSnvtdwSJy8wg6bu3KyVqwRvBXDyvofEzf14DWcYdDEuQq",
  "key19": "57ZFepVZi1QK7YSG8Tr6YQgmbKoupej1Q9wRDgyAt52hYju6khwNdZfBQ2NHy1Loy2L1VoXJETyML3mh6cpvJjEN",
  "key20": "4n1pXtW5BVizgapjFoo6MhFnVfqWoy1BUwp8KeBQ951DeTyFd7gXhKpTgtu6tFpnZu78XgCGQ2ff4Qff55uX7b9K",
  "key21": "2jzsd2zJLJkxPLbD6FqQU3FKwWFEoDpj1xrNxNQhdxsSUGoZhhztnn7nCPo6Vp5AtNgnqB3XympBZJZZPBsjhD9E",
  "key22": "jND5UsEhzyK5LhKWncF1YdktaMVRxKLCLtrU3hBfAmDLR4k4Jk7Je8SAvheCJsQFakn71AtW5qUVg5HTd1X2Zdo",
  "key23": "2eLmbzi5bc8bUvT6U4QZBuuFMcoomSzHTt3BXJ6Li4PsRRuoGMajQckLxVFFkATC4rY1R7jm6hSKXNLu9a7b8vKR",
  "key24": "5MbMvT3FvbbEEXaGDtnyic7v6bjo6G8xmTDLZVy9ZNNjfXjrF5QsTkBrwo6WVdRhXvMrEVCqwVmmNwAHeSMZhNH7",
  "key25": "2hR7dAm5Ejpcgy9zLdk8AfbfsCbPdG7wN54Uo3TAKxpWxm5G9yjp6Va3cvB18ZjDtah1EKZpd75Bir5soa3NCzmf",
  "key26": "5tM2ExzjcsdnZMoYi1NPwLLztHoCzHCMkH2uTJbFcGqvyYc1Xn6be2KLDajfTr5NiWTdbQF56EHA3XaxKjVDkSA3"
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
