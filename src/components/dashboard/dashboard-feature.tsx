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
    "3XtNJt287s63sL4pqXgQWo35M37sMsjzM6BdJpg9jq8kRejFJPGsVCxmgu7dRoTWdr3NHau9MqGwQkNUuZojE7Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FZqEYYtvrxrnZPfDFTEwVWNm3T3jGAvm2SFnJZta6CKduhnkDRyvYib7C6pt3ktkswa5LgrNBYTc5NxqaugSUf",
  "key1": "4gtCnekxrmxKfr1p2T2vZHCb2ysiviQ3jHwsbTnqjWXyziGNGrbhPnoCCrC3zhvZRwUhh7Gcs66PmjkP3FLzivQ3",
  "key2": "Un48dUPDowWWDzoTBiJx6puTs7r2QLqLAicGySDEfrcFPqXfgvPcc3qG5V8A7ZvSSmotcBu1EJ91sFrAzf2aXJJ",
  "key3": "4EAQuvtVdmaNRknHLshzkkeHCjDVZUZtwtwNSGhWZvtAuZxBfSdKbin2emgVMpcXjxQaskciYDLAbUqTr1QJNAHh",
  "key4": "5i2ifaM8YZwdZ8HqgSuUcDvwHVGgArJW3MwUP5oz88qN77LcY4LVBzYFumrDHbYLzW9S8VYzdkq23JizjuFLXEoG",
  "key5": "5qroB3bcgi7nkbdNxgVvepzCaqTmufdGL5igEj9eTMV6YdtwDD1shFkavquAXLT3TMzgFqLwpwDqjrfwoFN4eoFK",
  "key6": "49K486QhSUDeuhYjgkw8txvoNqbmYjLBM3er1TYSUqbCYJYcaV625BPadHMuzK3RtCkTycBMaLaC1b1N9Txg3XKs",
  "key7": "58GM4NDzoahizV6eFEp9gdGvurAeM8yQa9ascNthSxc7NxBZmbxjR5qFddEE35ZwTEikk2ZcAR4N9tway4o2bcHi",
  "key8": "66bKKBWKHeA9RTRwjSndrjX5e2m3a13HLznjo3jwbsNJashY4BRMpfsyviZ86A4vW3TaizWvG5K6zg1t2TxCDNXC",
  "key9": "64ZFr6hoewbRX8SnEmTHFPYT17Q8zv1CD7zMBQWXrgvcz4o8Vtp4dTgQuCTSA9hnEae3wuQA8zSftqDpHYg6HrUD",
  "key10": "EjSJUaCfN7pTB4Z9DnBkgaDEVoPqnznL9ax3t5xVis1KJSPR6JiiDvWNLSziAxvzqKkYdbHar2NzaNJAMbDqyFM",
  "key11": "5pxpvNExEJ6ubtjCEZAvyfNzdPZegdn3fUQA4Qm44GCcHky1RoXJKDotH34f6oh8P5NGkYKgkipTCnnHWngUAKuq",
  "key12": "4AaD12crkh1A9EjoTpXoRzv7bbPUiXBhRjcGNm2nJ2zn65bKctxSjWWDTF3XDP88EMneanGgGJKsNZwHW3cZ2nRE",
  "key13": "3Yhd1U4vhrnrnoqbqPimE3dwxwTuc3PBYBq5FYsnJGMS6ANUkmVifVvDQyjBGwVivsCsheei3j8i26mmTcPC4xpC",
  "key14": "5s2HhuPzfVcpRdcMikVBnTAq1CR7Xnf6QXsdYJa7rjxgGsiadUhoNAhzN4qUc4hmF5Kv1K6UkzpAinhb9eT1crFd",
  "key15": "5Sp3Evc1Dex9smKmM9JAtx71V4uD2TK9hTbHNCoPUfdDGrhywRC64ZQUfBcQxT2iok3XZiEV7b4moaFMKG65YChm",
  "key16": "3KcAWu5qKM8RtWyDnPVWrxhyAHxL5AjdQJmaQYJWM5fTHzhHH4hHbYurLDAFHWumpKbvxjrvKA6C9scrUNqCfYZT",
  "key17": "3qgpd6eHyjn76qmgMCNWVtBdJ8hwQSC4nSyZQuqYsVjyvGbk4hTybSGqFLFz4tWSMkWDBCyKZegwTFbryLhTf4Bt",
  "key18": "245bgyvHM9zymBRjawB7EKukMBDe4SHyHiXPHwAdJY18Mm13eSq7ZytLrZ8usfcLYSB5Fud8vRNhBYsz7vutPKiE",
  "key19": "2QB4Di125zWWhRxRGiJ95JSCXRqYAZ9FSYtmQmKRUAj4CbTHzCw544Wf8dLSQP1PJaCuMmzffr6DupsE7zStBMD9",
  "key20": "3bZWfXkJU3G7z6PNVKjNi5bDc4xRzJJdjD3TUoknuzHHzo1dLuruEVfMViGbEMzoGVhqqyE2cKVn1aLGfjFkQzkE",
  "key21": "4sXJrfusYodazPxqm8HrDMjjvdpL6tuoDvUTZ195SyKGFMmPUHGEffNbfcMSfAzqLAvHMPwNDhJBi4d4VrKG8KnN",
  "key22": "x8KoZyRGcxCZZir4H6zTmaARj7JygdsGnDhYfzy5UJebMDZuhiPuS6YDgYtsWBGNH1CRAi9Mt3P2BkZ6F2KJsCk",
  "key23": "3DTT9nTBfUdQZNeDgxXas6xFPgoErGDPGm7GQcfqdFh469YuzQnfoUMQQpkoJg7RMVLi8whD6KAe5iQGkQYAze8j",
  "key24": "q6VqRLG87ZdAAeP9rBQKqLaAecvjCP4gyWyEsLe2FsYUMfmw7wq8K1X9uhgKDNHUtzLQzyrEXVHsSfLrjJq4Db1",
  "key25": "apMJnrmTcxtdguiLToFLkWUmZnS1KduFFDXHbUg2GmKFKFkb2jUXMsUuWQcYdvuoyHy19E7NkdbKcm9RkvppkXf",
  "key26": "5TzSqnTVTx8hxqRzhMC8nuPagU4vWNmiWzyKJgH3fMSHah6aN4ciUyzLZcjVxiNQP6nbeY9Hsd9P3fdgKH7xqcfX",
  "key27": "Tdh51JUzpsBRXznjYJamZHkznQTVHsxbEgQpsxLq9BRhnCoxygvQqk4TTPu4oMnszozH6vjfcBTTvjKeXkS935e",
  "key28": "3zX5EJaCJTEi3C9j4pa58wHM6aUMR6SGe4nG3xoc3VJvn7KHyPiYVCe3M5aPsNhXZqRPCQ4y52Ujf7kw1K5hthNk",
  "key29": "2wkfy59uPZk3BaabSCXaWvfSXqdRmB7dFdJNkYY2QdnB7vVcYvtajoMDX3YAf7yYBfQsHo7a31N7jkWWkhJyPaki",
  "key30": "55sHdpMP161CaqRxPqRNMQRECnoyWJuVk8QAo4d7NX5F9sW4b6wofhRcr2XWFYkVJZKEpQuPmaYChBySVMLrkFMk",
  "key31": "4i2XyA1ETeknhomBBv3ZWvhq2PoeyeCYin2Kxze223g9SmBS19PTyMfWVXC35aA1nCVzE2mt3MyVYnW1o7wWoGpt",
  "key32": "D5vN11RT3aMGTRqPppjruPo4nhBMrV1Uakvfhhb71EnpBpTvnxqndsbaeGu12c5YhUsiJTzPx3mrjm126ukUx3e",
  "key33": "4ewJQuY86UZ23AiticG1EyrZJntZDtV5eY1oi8bEu7ET8LPtFYbzj1kMWMZmgBbdZ6Lw7qRZmJSvSaXbPnK5qVFN",
  "key34": "2KJUQG8bSh8NTqND8CuHD3Xz15XmCJVnKPZYZ9yNxbqJfXVa4NLNH5pHA9gNKmkAvcKbNTVqoEQwH3fh3XyqqEyq"
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
