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
    "4AJEu8Jim68ABf4PjyXTZiaZkPFRZHCm67rsdBHxSSYH4YNe6bttQJhmL9h7ctGxQeuJkdZpFaEoodMQMAPDa1aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnv9X1jipPDnDbdKhmx7vCgHmws283inNYXDGMXihz4nHrUAJFiUY8ckas157pefdfUQHtYadZs9R4y4BGjquqb",
  "key1": "L2LsL4mUFfJ3NbHRxaUbTPLV384ebjfECuw4uCvj3C8uyvufbHGUyPvSSwQGhe33ViuWzHswa9A17uC4FJSva47",
  "key2": "4b9jCauZyG5zS7f71AtJJRmsBLCJvhfH9D8eKidch2shpiLmcTDEP782ZFiVw92dwy2npBrkFcxGKA19nR5DdQ2g",
  "key3": "4UM14cimzBKxEHXoSS7NY7cv2Dgi7TERhnVmuMLdLGpXALWHhjjXvbLdgePmNtwrQYTVVfimrT4Zs4YVY67JENYi",
  "key4": "36DqSo4hLXFDoJxTdJ1UjQruDQxaTKLfi8jvyvghvnZQnh1c8mD6NTdfzXVEc2pVHD1v5FSARkVKG9UYwhpP6Pxq",
  "key5": "23492cELYWrtafes4wG3PJPV38yb9TpEB4gKCWYZpmMA779un2VuF2m3hh3sekdTkez9gqG7dLdSjw7NAu9pywgu",
  "key6": "rdin62FxZGQPHX9QhyApRKpmmthGPY5BDHVA8Vpq2CsvLHoBBRMyvDCp6u2a22msKmiJ63JgRg146CNt5VPG4HC",
  "key7": "35888G1ZN1Uk6Fd5BijRZUCayAXvSweeE8WCiiTGM5nUduyTTmC8aQiwRqzFAfccysWX8jjDp6g3hUToNT6LzM3",
  "key8": "ZPC4E4nsXp2QhLuqMW4y5GW88Vv6tEtdSB53PWZsAiVC1HY4J7hSXNjNm5ZRQxaAgm8MSPUAg84y4rHrzVpPa1b",
  "key9": "CgKRNq1kt8ygqSRoT6eYEMadT2qALMbELHiy4jprhpqLjcYvRKXgKBT9wAo3DPwpbiaomPTQQ2hfsgRrZs8yUZR",
  "key10": "5Vuf5WJLXKYpciRcizdH5qriQ2So9JGZN6qxxKwHsDDEz8UDvPKFGzYDWXuXzjzHTEadF2BsiysPg9A3kGpBhG3K",
  "key11": "Db2viXheLWFPVh3Q2mmXDhMPsmguhD5mKbXeyeptM5C8sURVSx7qdfbeco2cJfr2tRkHXCrjB4GiZLzDvr9ZuLv",
  "key12": "2Gye6vJ1ZVVNh9CwGdxtdKB765fLMDgPjAJ6ZT6TZmQHSZ1GprLYsz5ZGxnfLXgrdi9qpYdGF7PA7StTYqsXAjf8",
  "key13": "5uZufoH7VbhD1NEDERhi8vQqK4L3sXKfSCzkaJo8pLAMdDdcFHtCcyNvu5JbTM9bnJ5Fj6BtVu6knDFQez9p2y4K",
  "key14": "498rd6aQhL6uVMziyTnjUVakHkVQBbd3fjjbyLAJGk2PknpQ8ttRuuXmU59GjvGyki3eUAfnzuCG3YwsjgNXMXyz",
  "key15": "2MSaGiBVWeJKsNnyrdWLyN4eAgSiuaZ1GLwvramxbyPztWS5BwA53h9NwwwgwhSFfbt6oFL4WxoCHL5NXoviAoKc",
  "key16": "539GwmLnx9BHHqfi7M3iM5kDc3pJooV4tocUnJRs5qxAVj5QFjGwFtDAuvxAMUrseMiHwXPXhQiud2upKe5wF7EF",
  "key17": "8Fqe9MrhYawQoBUqSnhv2TZcYP6cGiuiztSx33F5YjKgp4Eghv3xZMTH7DagzZLG4o8sh53D9qSHp4aAfxWR8a2",
  "key18": "4dnFKiGBJ32iqyMRNuhxtYBku5ENefP7E6qtXjDvFvyW1yNiC9SzPp9XAT7UraYX4EqgAPB5XNnychHVdt9nuYNm",
  "key19": "45KCuroarPpZCWFTUMxjwqjSnFLTvaqtiBDgFKmoRRMePYqyt34aHUc23Ab9jAzwo2iXoPdpqoWa5fKE4adshPDc",
  "key20": "3YXFeLp4WxbwvUVmK9ZekgtVi1Au15rzpXSYPNjvjT8LV2wwd4Mgps1cVbRQkSLCCLo471fLDq54B3uAvyvgWXge",
  "key21": "59TzUeCnYwvx4yz1JesHea1w4U1cjiDiD8SbSA14abJUyBT8VaeKEFivGDgEHeJRRWXxpqwjZc7fezrki8qKqWPK",
  "key22": "4byLz8S6B3AiFnXXK4o33jk7bVsPSGm7zMoDn6rB5E3qAmNND1euis8sLCvhdRcXthZ8xYorM2KMqZ1pDF8mnqqA",
  "key23": "5GDRHFnoMeXZMLSBxHCdZp7vsNwrTTxnZ8FbM7yFcHgnvEDrABX57526jQ5vDXHja1mTBiJS7g9v9qbE2DpP8MuX",
  "key24": "3wgbyMmBWUEL8BqTBE6BysRUkXFMcxRXdr7E7dwHG96vvrwk8QuiGKNDfcczd43gqDwZ7FHSbU97mRt7WzMZXw7A",
  "key25": "3HxzrRyXnzVx1JmTG8hoa24avfQYrC15cnb1nuc7H3HKCCmNWWhjE4V5g3DRZoZ8qeDwdYE5VXcQrtRhHbAWr7Fq",
  "key26": "4XQBVGq9Q3jnsfzBmmrnJTzWCY6i5ALygofnKWzVjcVwSCJQZHmHz5ADiJwJc79ckneooPXDVjFzuWAP5zPE112Q",
  "key27": "4Lu1T3c1bsD17QDz3srGV4LFi8ezupqvwVpgum41PM13mzLa5wbB8uutKS5RcaLXTgAC58ZB24MhHkVZk2UaZjUo",
  "key28": "2fCScssqmGw6aUYvdxoQi2TPwmuymwUJjSivMkNXVd7Eeuje5B85wghDmVLKEGBpmRJa9qFqgXXSk61YuRMCLN9V",
  "key29": "5JrMc6AGKpoxC8coMGAaTvGdTBBWA4aRSE44PiwX5E9pbX82vCmW7Xi4Pz5yxwWaznMdmToTvr6o4W1F6E9Av8Q2",
  "key30": "3b5m77XqZ9kNRSRbsKD4Nxy829T2v1P1Cjp2egVVuy5jk7wxujnn7dftoNgwTdRFsHfSgdtoyrmuEVSekddDCtTk",
  "key31": "XVVhqkyCmeZi85xrwUqwCEhX9wsmPrgeJMjMhqLsi2cCAejHHkgKQgNDGFdtgHuWFaa3P89z9WyVP1Va9asm4MP",
  "key32": "5m98YF65nvbWHqNc5JEm7i72SqpAW3tdfTYQysPeqrhPTMHXJv4mNva1mkFcQQzHhWEWe79k5XQgCKmshLpFvGpb",
  "key33": "38MUNQ1jwDEwhXECSJKMnLo73a8ae5y1jxp9yHr2EgrMvEtukbfFCZsJ3cmuGBfnBzksBnrz78GLsYZvgwJPotCZ",
  "key34": "23ztfemTyaNxwUpNKr4d7tsUUagbYLDzY1wzhsZcvSjfikrMKNsHw81HUv9Kro6Jy5MRUge56CEcFiBCEtu2AKWq",
  "key35": "6gmFNKy8eaFrxAmz1Zsk5cReQw44q4xmKGeV9gr1THdhD9Y3pzDSozM5nZ1MuVUS5cBP4D3KXbWhzbxJhkqrD94",
  "key36": "4LDHktaBNdHsN9QCsKJPdPWzzb7kBam93csNMG7BdSmfbLhUkPcdu2t2AqqPz462NpVwmfbDVXe5cPyvfn9ALdrd",
  "key37": "4ag7MtceGYjgPv9h8GB8zfX2nyXbpY3cork4oNhSd6nv2X7pinwxmb9L19fVpeD8tMeULBHgvaECzYmxWfSAiZv",
  "key38": "Xo9uq8YjQGHF8w5hPpqqZVSNG34HuSoeukDN6d3LEjjeqxBhWt9qz1de5c76Zrm6CWuE8cRv2CjXXGcyfCKeV1a",
  "key39": "3nbbmUhAdy4szu3MRWQpEKTvA7FLnzznEB1UTMZCgP5esP2YjktuSazDGZgx9Ycu3uLyz2j8M2wncZrGh6mQhbQP",
  "key40": "36i1kE4Gf8VHdptQYtvhoLC2yKj3b8jKNCBjVaAtdyU2YykuMY5RFxWjDJrY3EjVGiPAPkoMbDLQwoEgDo9CMfbN",
  "key41": "2JAsitT4CuksFXQYCpzUfxjEhA6UqcZTFFRw8HYLH82XyPzWXThXVCLCwHDfHJyahCMJvbsvfpCuTdqiDiJ9GeEx",
  "key42": "3VCZr62aRBmb1VgA9zW5tkM6hngHU6yhgTy4QSoSR1TAkyuX6YQnQwTYh2wsrZmX4LBRoM5a1KTAZeMEddRsjB8r",
  "key43": "49NSBw4GZS3qANrAp6LGgnffGonPXhtNxL11dQXA1nGEkLcTRFa7KNLCmPpq7vh73C8GV3b5geKXDZe7nSA4f17i",
  "key44": "312yGryoxhQCyVAe29QMs41QAC7VrU6Mdvyyg5fVMTAwtmJQ745eBCsLLUZSvEnMFwHwy8CA6XbxAoEcoS1n6aTa",
  "key45": "3hA27cAMjLaVAsyEy9cvxVjE2mfW9NZZoEQYG77dqh33opEnMcAkKPsoV98u6fwuKK6A1mzMTGPEzRabypezNowt",
  "key46": "28HYvXnx6PPu5CCFDqv3Zksj8rThGqvzj1xQjFuyeJVTRGQs9Bxys3w275wq3AiDezAcEJjXxAwD4WRNqcC6bWL5",
  "key47": "uvsCMPCC64VsTN3FBNfqx2dy95YXuZ7pejEMt5NcjSYZPRohxEEXttwmmse53x9y5sfPa2i6oPniRSRXo8oCA6T",
  "key48": "KTRawbn2Yjj1KhBxFBqUKRnXXiihBVF5rUWH4P63pQxhSptrmgU4S1G89VobXKdh3jJncAWEcYuQ4QX9qwb8RRV",
  "key49": "JHzm7PFq5TPf3iQuFZoRoVZZiEr9GadNz2nwW5vxjMx7ryd7NjYMdZjBkJx3ibFHBzZeJL9XVRKFJVK3yKcsjGa"
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
