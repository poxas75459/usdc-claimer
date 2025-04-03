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
    "pCWoZNoYEnd7RRzFDxCm8ifheZrreqUzJaKiu9Ba9HRDpvRJYHWqR7GncGnFSnSzEHE26BjrDAvXshg9tu5UTMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxAPrn91NNHH4qDRpxZ1cnCmb1oXG5n3GqfqEbzSpQNQyqoVKejYz2no6wzgQtYkdS1KgwvaduFdNQww6cvY2WE",
  "key1": "AZ5zqVR21GHPidWDPdrQetUAK3iGuB4hpW9raGdtsj1KCVuMo2sYLKtZEWXgW87bRuExioVyt7kMZvrrRy8dYfg",
  "key2": "4v5NNCFBzHY5myKU8kmCJ9sbqDFBNn9c3demCGNpam8zmJH7hDiVACErU1YoZyfqujPGwuvyz7VRESkQLCWYyoEe",
  "key3": "2iGYqxMtmKKMhJx4FvSCyMZqFUSLT2EH4BK5Tk9zpN9UKJ54Kjp8sM2TieLXU7713YvDEhi5JHfSs3fLs1Bq7jrC",
  "key4": "2XVfBHZJnSTBsgi9Sm3wqNWwWp3TawZyiQqD2k8aa1CQAioV2Cu2ffLtiTbhUmTGhoiqBSgxqg3arbdhrM1U7d6f",
  "key5": "TwoCrrt6KXxv1kA6Z4DxhXMXCqAFeKnHqVbK8dT8esXCm5ESBREPxwvAiyDtn2LpwWWYReTS3Gprhmxx4KM6f3K",
  "key6": "46gyHyGk9rXPwXozMqjDdsfmj4GkGf29rU6yTJjSS4EVk4p8rr3o6uA2zDRnfsWhQeXYLowhYCnuvSCC6uPRjwmv",
  "key7": "3Q4QF6cBa7HNAh1gZoXDNJsYf521XGnynXFFjp3qCsQCFMbRqVHe9Ais6yJY4avxuNu2hjAATUHwLbzbtvsoWWMv",
  "key8": "5aHxkLt7Y7gBtS13vMnxdJAQQNg71gmBD2XQSe8fRAAQ8HJPgAoJ2ArwMzZ1WjY1K4no5UKs83XNBiavi19ERq7x",
  "key9": "5zfzUn87bHuDXyBwD9ud27UEhE77QTP8RMhPgJJvW5pmPXGzJ4LHXeJ5qb9Ja2FJL8md8oeZGxRzanZHpm83Hnib",
  "key10": "ds88p4MDVafhGeKWSqY2b4XKwqkT9CizBt8mdcu8ZkVfoHpwDE3GLNiw1rs4iL7YLjPN7NgdiHkfM4tvZ7SHVus",
  "key11": "3QmH4KJ339XyRm3s17BRWWZdXaXdZxD6Nhyj29ybLte3VEiXmpvQ1JJ9nHJ45rgw5qAtEubiB2bfeY7j43J6W3Jy",
  "key12": "2YueZi7MPBFMK6JD7Vtk7v7BPoQ7L4dfZpRBeS62xxQkX3qmbnKtkBRak2HRRQTu3orngaz4kfY8wBCSKnqJHzFe",
  "key13": "2mbtmMN5hrQEY3iaQV8PU8g1HVX93HqANbR7rm5vNjfErP9Pz835L1c9jzDwXVHbU6TNkpoQa7B2BCW2V1tpatY7",
  "key14": "5w6Lxx1ApvtABqy8XKx4jyMmdaGj4B7hE39Q9T2DuQUydgTmQ5BchHtHykHBQbuM84aWeMHqeXySszvMrKDkQqhd",
  "key15": "2MGVRPAfCctUwTtKQDJKEL3xDxJjpVSBYzpMhBXwJxvfEyZQpWg8wnR5yrGPtahpQk9dt6Yxd4ymLucCjHnUtaeA",
  "key16": "41zuTHe8dStQdEvZjeqfanKjXPWUX5NEAcRiJcZSp4qNgFPoSMX8GTzJddTVW9sN2mcMLezFsitEVz6xTPFUZnRc",
  "key17": "5NxUtaPw11PpdJkRBin3i1zYRkc7RKvAmMtzj9Cwd1NVxqzEV2EcpQdhd6KmxbucpUT8H4HGuz5PDNWuF84jwTA1",
  "key18": "VFJNSC6KS8BbaUAv3RcbG3ujeyKAmhbdNKTG8bzJuyfVq4kU3wRAuxEzNvhqrAgFRzJvey9YBBQ3FBSQQ7vZQHR",
  "key19": "4QP3zjcty4ZxMyKivMeiAwx6jivS4b9ZHxVqxtLqCP2Jw3AQCv5n2Jqr1YoUMpLx5KtxkdTsFubzX2YFGFKSWPAf",
  "key20": "5hNn6WginxnY9Gxs3YHnBQR2dmFmuH8XNXuuTxarRZzW8sujs82s2ovYnWz99ZjYTMzAUyzHJPW63NB4QxVUACYn",
  "key21": "4UVnVrEr7pRdL9MshXP9hSYZH4TnpqAg6C8hmwWDxW2P8ABZDRWt6mUjkYHcP4a4MW8ogir5s7uSBjDbgEta3zyT",
  "key22": "5MScbNkjJhNhSogjgx3ZqmyJYgA3zc8LgeSqZMNqceTjPsMzX6cpaXN6ACXWw99tYtCMAySve75s7apYkjg8T1bU",
  "key23": "2cBmRcbG1eJrC6dJAsphcDuEhRRHA8EVJEp3FDb9bDvYE3ga1ur7StBDYwC5n19i2EJRNtKY1verz1SgJsdcJ6jw",
  "key24": "5HRWosumEzHdFapBhyfEBwvW38aZidF3DmodWDu1t4hA4Jh3zDq9swGyEZc2fZEcsLgcxAtqa8m5scDeeyqT6Coy",
  "key25": "5cuDLcxjNtNJfoWc74T1xyKfTiYJuCQk1YXyi1mhDebF8Dwp3Cj4tGuhhscvch4zpCYP3L9truBNet8GomQuNies",
  "key26": "2upJ1GW84gHc6TxKguh4TL9DbcU2CMKPu9VtVVFJLrsHepqY2kjRpL6rdjanHSRVbhJx9u6u7t4k4M9mqmi8bh6u",
  "key27": "NyiHy1YfdTB2TSBbVgPXMukqTu6tuLK2e7Fk25NP6LsVnKSm3N7H3eqD9xnMtybmMizLFdw7q6Vqj8mer9qXgvo",
  "key28": "4LX4xCLJj2JoQ32B5a3GkaP7cDVX6DEannG91yYcy4SJ3oX3bJ2CeQ2YCWWL6BugJRxG29svxLyRe9huXU2ESzg6",
  "key29": "24Hj4CyW2K3umoGNRyhEzXEfsGwAgxUWSVzw7KeeRWRkA4yofKe8ZqW3PVMgESEqjCBCEDJ6SRcgXiPD2ZiwV2t2",
  "key30": "62hQFsP4vELdZWX9MobZDChUMJiWTATbc4ao1PuS16gENveNf4AVyVKoybVVBeSrtVDSFkpFWHQUwAGKiu5Y6vPa",
  "key31": "2PmWgiovDt4zctpu33m5eKX1irzjA3TUzBRoio2mrstHVTwngG4qJWyF7hoTv6NdXqPL1nGuXx3FdDqmLQHvQCcU",
  "key32": "4DywiCJR7Nda8bHs67kQjyQq8XEaRdu8ivZtp89UhqemdF1UtjdncgXbzzdmXqSmSrHkSxZGAuLaLz9xcMhKTk55",
  "key33": "nzyC7ASMbX6wK9jK2YytAWKpohYRqUrpUdFGepK1XTnUhyZnXtGjsCuXD3nFJA9cBdhsyotV85Lc5iHDbfczKPf",
  "key34": "4ZjWamq3oBH5qLnGMYN9p17WXY6FRSvUUC7cgVBRpqVptiwb26LkVu51XJrs55FyNRn71eQxsuRFGPuRwajcvCEr"
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
