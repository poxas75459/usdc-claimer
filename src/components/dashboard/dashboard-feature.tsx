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
    "2beoiFLv3imYv7Vo9HJw4KAMMphTMgb3XVb5QDpdw7Wxqh8KDpXQYNgE57jmX3JiyGy7friaeYidbZrrdR2aubKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ySC67uhYTdFsRRXz9vTRLPzeQuiTas67tmBzajqr3JML7ApeZUNMFfmGYjvSHAqyuYzqCx3TU8ppakVg1QKHFHq",
  "key1": "64yatyC9pRmYBzzuDV8SyTgXSCZcqK45q7G9P7uJsHp7s15f2CoWxPxiaHCprMbw6LtZPHB7qaxooLKgP1SqsZaf",
  "key2": "46A4Lx5VYNJxbyvgkEa7iaPLeJabpNvhzEtQpnMqj1YC6bbfiMPtLLELiYgLdYg373SFjrzJjo3qXrRsKR5wW4vD",
  "key3": "3MbDBgLDhWVWMx7vi9ACV79PKbobViNioM3q2qHXLGmfBwFD3fa2DMgsdecC2prznCnnoVGZmaCDSbdguh9SJ9Jq",
  "key4": "3Y5ozoyyjbBs6SUAcqXuKzBoL6SHsJqLeZCTs3rdJuqbVpityUK8ABozN467HNzkUdRwaLcy7c8bQKidUF8NmCvS",
  "key5": "2Ppj7rZY4LWNU7XtWf5N87tX3QMTrDcw5j1eDwJJgiWwgrkMGwQnvf2Xp2oPBdET5QYvXPoJLVLkhP5Dt4YKPsUj",
  "key6": "hUACEZC7F2XuujEonPNr92jaYfVnQBVh9e5P9dwUU6wNGAwgPRMtXZzKF4ncwhmmkfWwjgruwzbuVic53gNt9NR",
  "key7": "4rzr28t7KcHJN2ZqeijVNnFrFT9kjevbNwLT8AK6QhqGtEMoHgFAn3gZV7j21WCC2XDg2LP573L4kZ5pAFjpNt6U",
  "key8": "3wgXaC1PtJFHYaPa9q5My11NKDzKrPTUexbmfpeuSahfy1s4cRxnNGxVAYBQSJgTJWXwVqypaQggKShd6rqKHGsh",
  "key9": "5L27WuPjTydu35Par74Aao6TArXYCqdBFXQsbXbmqwkwZCAi6ge6F6b1eqRLVcDW55mmxcGMiX4GepjTp8beV3qK",
  "key10": "4PmWGMPAJKv47mRv1sQHywNhgHsVZtvxv52GonJRAeCKBnf6A5q56kVUB6xDMGAPw1PzoLeExCbUCosjL93narKX",
  "key11": "4H7setvYhosYoZn5wXNU8rvYSipo8LkpvHrpK8VgccqQb2W7PE5e8q3ypbQfo3dTYizzt1xmCvBaU1bkYPCBtqgV",
  "key12": "2ET7erZiHrg2wqATfy1gaQkYHkeuvVwxYxDHwgLWiXC8eNo7Y8Mx1bHoz3fWipaVkTy7dEciJJu8bnegegy94RVv",
  "key13": "5DLjeKHniWQuVCQSyKt8Cvdmey5cQXkesJE1yFXowgmP6cTQiP6RWGdZFpA4JpiwuTP1QVn2Q9SCnQhxYKsNKStL",
  "key14": "9jzj1u6ZCNG9nDL3VQc5LW3v84r2FtDKtJpDNN4b7tfRNw6dvCztMBkGULZauq53gFRjWWhGmHuhPMJZzr7xQF2",
  "key15": "4nNxBwdaRkhX4scpkSzJFTfEcfqbMphGmyD9ZdAnJP7mi7WAZJ5bUyuE62jv1RzcuXWzya8nyiLWCdZrXiR8nKQk",
  "key16": "LiLGwgfE34aDdhmg3zBKLtkcjEoLZEfEqPvQkJyYqLhcY8AhaNkGMqtBfoKhUNqdFd3TAf2XZrRwRKUhNChPUS7",
  "key17": "2PjH7bAUsxtcyDGZTdhScHNu3ceqSs5oPQoPmSSFMjDfunYnsm6a92xfwhDM9phGmT313VC6jmKMAqKKTYVw9M9C",
  "key18": "3ke8a7GtJHdNhRhVLh44LmMQWSy1eBK14hqsivKn1KFkJkz55t2GiVvWNQPWu8KK8mrQF3cEVX4Rfgd4Teu6pRDK",
  "key19": "3Cugh68QuvEc2GrVz5SEqJyXeA2fsoi5HiwSVE9yow3gxrax6QsiEtBdWNv93pHzpYHLuCCtms18t7RJmpGzoDgN",
  "key20": "3gHg3XdVThqtVXrXAmaTDqqgQw7raaxYpb97hyCPsRHUitQsdPtkk9UDwRV7awXkWioY91NX2Z6PbwK9pGxGqWv2",
  "key21": "3zFmVMTibm3QmoYFN3fAhLRzuRvZpg3gfXRxb8cyjNSeXttdxLWZc2x8G2KCXHzRt756aVVp2WoB4eyZwAXxDZEB",
  "key22": "vHarpyhPzmKkSMF72oPF7YTPyT3zeBWqHgttkQCbovMgCcwynJj2X3xty4hYwwqiyVRhhchMpUgGX8PBNPu9RQM",
  "key23": "5dUinHQh1A7do8CuqzBcwmMDqKwm7ryvJhhj4XQp1GzoYa1LCseYaxcbJVs3aKJNgZLjti5GYtGGQ1rhL4JuuJ2w",
  "key24": "t1fMBgkYvHtGKbDon7aLMYsTCjWdM8bo7o5kd1H9811z16Pxg3yv8HXdfAJPD5ixXr6Auosjm6tHtGumkQaQoAt",
  "key25": "2nekfmEiAeZC77Pn27SastwVH6oyas6TPeEPH7KfEWUqMJRZrSnZUsbFhqopm5598yPBr7WQ33Dx6HtDAB84zQCn",
  "key26": "3kUxC9MWpUwzyzcqmV5NJaad7vTuySG96Fmhx5MzyTRj8L1vywMPZH8AsbxPTEiaqU7vJxDut85GJnb9Cn1B1PVc",
  "key27": "2iaw8EfibXSr8ig5vDh6ac4qvtq1rKgViM8dk3QxLmhGFFEPpw8FevfpLp3BxkWam9oV3bhE4SyVGZTV2Cvi9zFG",
  "key28": "5xtv7ufkaq1vjWLP9DFT1pS1yCxwWdCWtgY6kRERTGtKPCGXXHUX43DwTUWZKANhZPc1anXAz1KTM1UxXgWuLD6o",
  "key29": "4kjgdiq8qsSnWsLgSsipMXU1Wfh2DzqZA2cLBPoUmTXPKchFfe4b6Cn8ArtChg7999PKRvqbnJTsqtqiZqkBTspc",
  "key30": "2nMHdAZR5WSqVQEk3VcuH9Cjkbasb2hR8mKEkAhwK63KyuhF9Jk6gnf3rbjpUEfD2ZA3nK8zCL1DdBdgQB83ArFV",
  "key31": "LGXDFxwHxYLnM2XBUFVvMThVhyyoSP98k6D5kFZDVLX7wP1gZbKDwpihZSAUeeDDMhk9gy2j2jqJBC8fUpJq2xv",
  "key32": "5j8RaWZYNUQDHfYuhGZdKzvW7NPXZaB22bQ2mZbrSUDEMWpS8MKR1jQACoEwr4BQnvwDECT5MLwpkrvrJ9798jnw",
  "key33": "3jZ4gyxwFkkYxg6xtTciuoBwBa2YdpjKQ9e6nzjvCS2woxn1w3U57sCcffZMvveP1W2RbrF2e51XZGqy1BDXUURx",
  "key34": "2PcBA5dqgoNsRPRPykDDRh8xLPcJy1Eg3XdBrXu7qaNaZWu98ghPwV8DunpNw67uGMh4gKTdNjSYYHE2WnJ9geJu",
  "key35": "3KNkfHEEasXgoytimYgNkaKBW11yry7xKUpe2EV3WCFshSdE5hcvZLKXkwAiXiWHWYHXNxet5YVoCnL6G2tJpdnf",
  "key36": "2DCCXx28McweaLZSEWRrcP3YjZ8XCxt3a6JbBfLFT2TF3LB4b5nK7MX9NnEWm7xsoopHPhP33j9tpgYbHtjFv6ua"
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
