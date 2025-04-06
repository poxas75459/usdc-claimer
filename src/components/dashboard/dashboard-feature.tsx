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
    "4wQZZgG4LzdNeH84L7PPUnaC82XQgeHtXVrx7bSC5ppQAwhfw8f9kZj12cdS3T8enXCo997u37VVZSWEk8voQfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aJfuji7TuacC9rygoT4ucZhJJdG3F4STv2cb5fn1EJu6mdATyF4jTZWiaUyj2P4zH1SkbTCp691D9nRgx4GPXn",
  "key1": "3XsNQ3QPWBAZMSk2BohAvbed8eukZsjBeQMZttntMYWCFCm6CpMoXffQnuoEpCaWKq2DumSBoGTwCugpfAovHHrE",
  "key2": "2wBRUc2tWAEEVn7yiMQB3azjaw1JXzG1TnkmqA7qXXvLjrYyfgf9TWnfAr2yPN1ngjqhnJsGxfKNDfEsMiWgcUpF",
  "key3": "3GtPDz74VsqX6rBsL9qmUpdEV3aYswzpasWReUGNBocK6X94Xx2hexo6rpdM91ozcNJADPEnhFfqJSdZhSnpNWyC",
  "key4": "4VmMr5dzqnaAvbpPb3EsCwCibe4iNqSYMf2vcpjqBwUM6WCrEYBnTiAciWJj4T2i4DSB8qkbeoXmgVF7mXWHYz3L",
  "key5": "2FHkH52JpZiSS2CmBmp3cZsKPp3MrP8MKw8v2MrvCvXFkk4sB89xtE9NDZDrVjrcEShyjpZc9tUd2Q9RjnxeCHD4",
  "key6": "3tKqsPNXQPfDpDyZpeGD5v3rosAesJBN95nf5LYZbe5NtZ9CokbpLimqTsVEp1Ub1eHRVdzHtcofHGBXno38wJw8",
  "key7": "2fCs7rktUfwQEtjUvNp6ZwtBB54JFvLvDAPxHWsyrwq25UPypV14tXnfWrtNN4GXdW15ubwyar9b1ciB6nVXC7kW",
  "key8": "3mHFDA1LT1PUhEMqeyYUFNBAkvfPU5fQhGRNAvriaiKQguhwZej412yJRT9Jyez2e1wHKwGtkCMFXcQMmn7THd5z",
  "key9": "5R2bE1iMc6ocAm6jZqBDZMJTeevDdw4zcY1nSxAezv2GVy8en9PHevCkuyMu6RUaq8o4vpRfbsMUN3brCS5nwRSD",
  "key10": "5Kkvt1NFf3rqN3D8XX8jwqSuipWVZ8EthFd8JZyTstw4fxpefzLhovqHCkZ3JoBAg9bit5Kym7auVTMxi77m9xvk",
  "key11": "4PiKtRSFKgCFPGshj9NemKRXBBFqwem9jAKJhVgV413bPS3xtMr6f9GgVrMQh8tiKX23NcL2WUMsfdyZJns1UxoQ",
  "key12": "4Vpwve3acYMBYxnrTUmUEatenZpWe4Qfb5pYxGLNWNHnsStGjvCtZ37Qra9MNjXm1ddNtJeGHVXeNifPqa2kKsM6",
  "key13": "4fq7WdSqMDzBBgJzEgRZsnFEhveeWBmjYJaP17svhmeCUrUMzQ4VCejwbuSMLx1qj4fY9Pkm31qRcemKTSzn5Y2n",
  "key14": "PvJMHA4Yo1Qh1qjGxh2LPbm4PmGuk1hgdWTrNhbFm9qhqrqBCjEquqCGhmocYRtYzYUZhA8DJBovv5gUUEwGJfF",
  "key15": "uMfu4u2ivMfgaY4xoMJg9tu9jXdkbhBfSaNWdqkiMdPSW2qjVH5TcXVHW9f1x9roTCKk4YBeMd6xQ2qA5PJBd19",
  "key16": "5gjMhqZRQeoLBa1oiWBRCk1d7gvVJ8rYekzLa7QwVcFfDfcW2q1cWtGskT9Azw3DwqoP8SJNozu5GnJa16ZPz6B6",
  "key17": "5Nyr4sZXDaXAWSqHDS1nWi2kPXA6vo3Ny9J4MTabyM66mHL4AmCjtyButXADvYejFwqapfLataTwKJDUF4teRWbU",
  "key18": "4JeXhDHCnByTA6qrSbRtkPk3XLtpgybFTDtvFNTrMg6t2BX2ZsNm9GD3RqfzT7DPWc3P6RRdRCGNXLNkcgkiMSUw",
  "key19": "5MCGdhZ6rnz3Xii5PnUyoCDAx1PnwLYboKBq3GASXPKM4ZDW1vKDHH77PfujvqJ356piMJQZpR4ufLS3JtjSg1CE",
  "key20": "wtue7ZkN4LL4KYaE4RwEuLe4VvXVHFvMLhw1dgnHTzbRRZgXDUJzLfxeksPaAAHj36hzcmf7YoNXiysdrq5Rf2d",
  "key21": "3ReCuoF9tLh69DqpkPNv5c9PT68ybcbikR7WVqT1zgbdGUAc2xdLqiYSo6MJubasKh7eK1gcS6wdVxJUuXutXJS4",
  "key22": "2L33XBjUNF4So17tSAUXZZxCLmHboMoJeVyEf8Nsxpi26eX1y57p5eqtzWQk9E8bDmmiFJzct36o5QvEH3AY5NnQ",
  "key23": "tJgMwkwbkgL2Yx7yZV63qmGUdGjYgk2AXBCLSLykSzptMaVR5rZx7h9Yp28Ng5AXwVe114MVJxD7rZCqyfeUKK1",
  "key24": "2XytAxkWJgPwp7mMC4F1vjSkzjk4ex8AcQComoCa9W45L51Bn48Hn7exa2DiSgtgGGjmtxCqwnkiDwQrYyFkFnce",
  "key25": "rQrjKeuRHpKZ9EbSQvj71HCKp5MnqLLbq61iWgwBajgdkLs8YZjEj7doFy4nhULUmM7D5VjdkJwMgTzwaf9iidb",
  "key26": "4UzKEig5ZtMagZridUW9iH8JyVC9JBK7LkCufDZQuWhdtBappHubDed7GYAyjWXFekUewskLRRuVd9BcgrYYpLXN",
  "key27": "443QxAic4agiWYZ8NBfuNmiFYg1LQh4WV9CzxyLWfHQYeZxMqWyPPhkLZLL2KpDaaZuT6jrXp2mewufYdzjtkFdM",
  "key28": "48aKWyf9q7VTzftgdtYmUUh78go4SpA6e8vStDXZ5YieJwwsyqq2VpAw4k5XKJK8TeggMwXNY8paScR6WfgagU1Q"
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
