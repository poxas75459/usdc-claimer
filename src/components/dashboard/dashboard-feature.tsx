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
    "RZDKWKpYnY359MPteDo95rQdVxdgCQLyTgG7SNAjua731pMrwKuFbTkGLhq8Aezi35rD3kSynZZff7gw9YKp5qD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMyky16ZavoKL35R7n2QUiahMCQ9uouf81wbN4W1e6uR7kBrPQZfVD7krQ9TR8kkxshqdcPBxbcCoQRNYCvKyyK",
  "key1": "3DYJniuVXK8gVNZBLaCjWCzHKV4DDxdTxuLY1Ac1aCbHGnn6kUbdFo5cq9YTtqYpjB2LVGKCpKzkthJBi3uvtFU9",
  "key2": "tUnjjd5r6TnQ69m3yceGZk88tbch6zj1gk4rXnYEYvYkdxhjsQnURoXuyNYBQwfnwUdUfjthFLsaNVtRke61hLn",
  "key3": "35venYfeULcwqSZZa63t5AXDhQPV6Z83wnbGR3RhxtECC5uscjB1EwfohRiFzFLKaEhZwzZkPoZcqtinQtHDALAZ",
  "key4": "4w1cR8hSaJYFCesLxHfJ4g8hYphX2YHZD4aRXjoG1tdQsbJGA6YArKKCDgrA7hKVCGDojajDFD9qf9Sndsv6RDZP",
  "key5": "3XF72EniZKfhsDJteJFDM1FUfjktwynHKws2bPxVpVFn95bXHMivZk8PNsSDA4McCszc6FJu8NPg1eVuHrzMjkML",
  "key6": "drJ5RJK1MLj4nhT2tapaEvfEjeyHumTs66AfHS9TYpXchNCZkAfkQRusHunZ2zGGMyucgw756wm3P8K5juCjWXN",
  "key7": "5fmYvD7kBV7A5zZzKoPrtv58faS9HMg9TFa2VhMzG36agKbrdramavnwP1GD87ff8u7Pr8n3sZbqZ5L4Jb9Z9mcS",
  "key8": "3zDeh3J23Ky7r9XT4RXrrEjYe5nUi41oi1UhwspJdkcykUnsuH5TN39Y1k1qWJxeKxfzp4CayWBf3sAcTuiFaZ7p",
  "key9": "5dHPyhT19y1RUfyHyP23kUU9FKJceQdL1f5jCz2JkVeyq23d7JYqs4Q59p8BcRjrXGcYJttyzGghozSjypNF1rSK",
  "key10": "27F9QWKXT8Pfa5FiZUzT5rB141vdcm3VCrihMkLFYPRHQEJrRYyTLCc5EBHxjKMGb2qQDsLJWLQqaQpsNcQdsXvb",
  "key11": "5pvrGPp29oppdyxXduJ99nXyuCn2DxzghyCBQZ6P2LHWP7jD7HvSj6ZYdm8AVW7FnF3ht2uqdycK7X6HWkyE7qHd",
  "key12": "3wQHBRHLmNTNAqsRFeM1HFMQ8c31tjuuz1vymTMvhoJ71eK3q43wcPdkfsPAQLBpf3ReUzNsF77X2qH36kFckF5n",
  "key13": "3sNBcW63SQxjU9T5BydbAUxz7zTBzZVEhMfDr38YPxuRvL4rcrE65duTW5xEXvHwgGF7FKpczak2VWN5qHtZ6hop",
  "key14": "2hzLeRAUZoNg5fqwsEe94ZN1dtdAL1kbvTQBFsGQT8VcRMcJHWNUk39BwTnd2cQ6WwfqxXk6Q1emdxoYf7J37pm2",
  "key15": "ZoWJSYQrsuCW1QGdUYUXAFchwKoMUS56P3r5qL743dwBS2BFnnJQmUKZRVeeutrB5HiNJf97CuntCDRdmcuWdzW",
  "key16": "2oPxivDVDnQJVgsoxBLFoqMFuJRoDt1yc2fQb3jkCCSahsdzHhRTSSCJkLeCEERBSZPwL4aNTv5A2Mnx47V3LkKD",
  "key17": "mE9JmHaReM5qW7UuCiUtkKY2jimoLUKWJZ3LUFdf9Fs41qtRY4m2Cpmt8vSX5GycpK1Cgy58BuwHWuNLBrHACbx",
  "key18": "Mi8E9RUnoE8VRMSb3nnJAdbeFbFpxbwThYY6qEmkVA9JuW5VPCLiDvhz8jZwYYCiYqYboN5ZJ5eSje7defsy4ot",
  "key19": "5B3eVe9X8XHDBpdtrmjjURhuK6qXibyCd72B3Z7r12w9too9XtJwQJMHo8TaX7usLkdokS872KGSHRUdAdBSE9F9",
  "key20": "cqy4mK22vfh5C2bncTJXuAFmKFyqnpF5QGKTgxA1H2Lo7HaTU1VppaZX2XoQ23CMWzME6e6SyugnqZyPqPjsG3g",
  "key21": "3MGndif2Vcmx7sNgwbPsC9XmkQF1YvyR64SRuSnXNE4ZnW9thLoT3KspLQi8nW9PBb48GYAxvkS4GorZFV2DGAjy",
  "key22": "3Rmg7bZxowtb7gEWaVpp6fnGyvy24STMy4jyFdCPkUiEzBsfbaaSfcWwpJKPE5Pef1BbLvmhFdriqtuyKc2AhYQq",
  "key23": "5GhzYiZwAPvxTusfNZ7BB9zho47vMrEZ662x9R6zFW22X99NAFamoMy2WazAg8jkeW9wUt2B4Kj6p18qiy9KtvKL",
  "key24": "2b49HFsho2E3PGuntoN8V6qfJTdE2nJu5kmZrTdjkkGKvAnQkqK9dP8h5WztAe8BvpyBhwWqyci6CaxJXoKVjqww",
  "key25": "G3s6fCJzZB5JJScaMdsYXfdaSxxYZSKMi2oRvieqQ3MbcJi8Wwc5yoPCg3AmnMpzuy6wtyGqw6USPD8WW7NGXH7",
  "key26": "2vNxmKZcD7MBNDhfb6iN4asNVdvbmapUpRAEfLp742H3nthNi8N2euYGFNK9vzYjJ5YA7cNcb8zaZaL39KesqR75",
  "key27": "34KSDP3kKpETt8M2QuEkGUkh6VJDSxCRzg4RHRSd7DXDfPhAe8FW2GiH6Xmx6nW11QLgLYynCRgRSb3X6cuz6ChE",
  "key28": "VPL7NGP6oD7L7FGQccGfyWuVHGDuiVDKmHJSxWh4VFGTqFPXTfJUs9pgpuDc897a7Q2GK4eEQ6NsQbrSrKi7pNr",
  "key29": "3Y1B62WZZunEYdokaNmJHQGKQwo8mYW83BXmQvZHzSeyNCMxNuVcboTxDdgDNyLvzSjhfUcNcLRQGXMzNmsRkx2p",
  "key30": "5yXTMmFBe3wW8Pk3oWSJnVJsT5vUbUKp7DwezNUYpKoL6AaWwxMrEQSJzmhR7XRWa3wjYfMqL2us83bnC22koYtU",
  "key31": "3LWjzcCnF6Vvac2bDYMtX6tv4S3w7mNVvWKLLj36h2rQVUHjyb8zmCodXDWii1ksCNyHHSuaV9vKphaHRmNR5rcH",
  "key32": "5acaSwEMnmBKtpFBGkMXWgrzHpPEffgdPyAnhpaRe7YEYorxQii6NjgSKDbqfQxLiZLMyYb6B3j92gk6GVg3zfW2",
  "key33": "4dZTd5bgw46QZ2SP2Vf7W1t1sQLJt4fgcw5q8WASkA7vm1UwzjRRpBAC4JFTAqZ7Bgfepj1v2EUp9Q7MU1AraXLv",
  "key34": "5MChB3qQhqncbsmLm8HJEB5MC5TXXjKSdXgFcLi5hgy1YwGJowVo4MA7vnQrtvrLk5ZEEftPeSXjAkk1tgFg3WXD",
  "key35": "2Czwm4G3wup6H9d9xNuGtXbrCrbumfk1dZ4xB3hLmaEBkY6Tq7odGQJr7PRqcF48uKKCqVEGH9fFuJvz7nK3LqBY"
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
