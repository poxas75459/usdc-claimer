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
    "4gKet1JxZhzTEuY9th9A56ja2BeTsvbR2jJbJ7qr9ZSK3qcBThH3ZTp7ZPfiar63HDQUm7RW8s4SKivAicMQ3PFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yUNL8sVZFUEnrz9KEuYc6UWh1GpgQnBoZ3C7JHLX1CCWxJrgeMpBrwB2Sotdb2apynG332p47ePtHaN6GpMNcDU",
  "key1": "KG8awUqzTBZ7bquMJcKtTfF36QFZ4YXnWXMYwU2ex42fpk9erkwhZfgweKxmMBsCytzZqD2uDUi4D2vES6xKM5N",
  "key2": "2bDFNrMoKFVRdkm1wvJhs2VntyaHsPrduHmqwfugQhbYpe85QN9hKDqu6W3Y2pt2YZhC7YCY3t1iWxzN7BP6vntZ",
  "key3": "ZPH6oCK9q78vtZxE2EqMstKp7HCTrQpLpLgLJSHBKCcvepYZbn4gbSbtouZ3DjYo4RW7opxULkkWdhw7fe7YLEx",
  "key4": "739ESsuWkWfcjhLzASQ6rTQAZgaVDtVNQGqEj4PTmXLWYNVbfw4cMKeeDQnvkDqUcGk3kcgxrSYoyRDaovQtgrR",
  "key5": "jXLpKTHMMywN2trpLySGiDo1PQWwERVKbZmzLZKXwkDzXRBsTCAXVuhCsoH7aWGcCsz78pn3LowMYrrqDzU4Xxu",
  "key6": "LcXe1tTZzPwRad1864Bne7XGSee1LbEUNaY2Jz4pgnMscRiKqdnuGogGxccHCsNK1uBqeXg7m7wAkfwJHXy4QSG",
  "key7": "23r4DbPJDVzWwxcfVaAJ8ReRcCaf85rjhGDHUU49cDtwjDwPbCsytiBRrmSWtaserMFBgYEcJj9wZVFGLNwjNWxW",
  "key8": "hzoa5SHi34agjhAWWcaJEbw7qQqszZ8PEexkpRSYK8TQ7MCwbPqtUiQAU8uU2Gy8BekH4yPaCX6HvGLRHHjYoKa",
  "key9": "2vjMKk61obtzqv42TQtvHx3zYCJ4ZLDaCePuYr94uHGRTXWceQotcPWXyXnZDeBwiQV63vs1EB6n7xUcFXjgVrFS",
  "key10": "DRg8Er8Ti55QVu92cGy2wYY2ajc56FJQiBdjFbMLYNMcQNGyh3jPDebmuG5uT3Nm47Gn2SgdciXfiwhejHTCsby",
  "key11": "5EcP5VcTfU7WKptS3kQFLzHRmTrP7roMYCPLsW8By5NNEW498rUj3t2jt2SoGG67NGWwFqv993vV5uu1Mhkbzhi3",
  "key12": "3FHyDYfyw4bDDcPKk6CeUDiVvsixfApzfkTUWbRcnzDsbFMgguxTPJmGCf3ECnYT9M3izBqGGuVzbiWfHfBG5oRc",
  "key13": "y16hKw4SU6A4J2jD1AVFSFXx6ydX1P57huwzmjHmDCSaWKcWMhUxYABzjhQA2DVyXfVu9vhzNnTxATtN7FpZAtL",
  "key14": "3AtRb4QeJEmQNa6xDBoebn6MwKGqGbqezjAKPkza96anxnfFhocajudu2JpqHFu4BCs1jvrWtczsLH8FyhdXUTEE",
  "key15": "4dF1yodD8PnN57wQUvXhGMTy4vTjzzaN6Cn4fnL3UDatneHwkm3wbRuX3YrPPVmRq3EcyNb8vHZTNS5SrQNadqhe",
  "key16": "5j8mtgAvPempEoJfCzg3mbHtbwmFzbmm27m4K19ecuzqiXCdWkbvVkYP7Cgn3nDtKFGaxjARFRnufq752S9WPh21",
  "key17": "3ryLKaBuj1BKyFfLnhjdTugUFRWvoNRUkSzMzDuniDCfUUBf63J9t4c6XieKnhpwoT4wpVHGDgYUH8tfozgGbWbB",
  "key18": "CCMHHFXq3bs33fbkMAAqRgprs4eHavSb2cKaEvQX48kQSb6RiWNSvkYsknkNpeUNZMocbG3q6WNBoPaePLhowSv",
  "key19": "5HS2eGbd6P76skss8EtrfccNZCyYxJ1bJGQFamhn9Ki5xvMWY6KHiHo6zctkqW3FFy2U9da4n43uV44aZRdrRxSC",
  "key20": "5dafeosHs5CG9ip5bW1JZBXmvzTbJJFNkG64m5EgvMU2aJ2DtJTv9MqvDLJwJAihwjo6n3Zj8E9jegnck5WP3KZN",
  "key21": "2uc4Q8yCWKcYobUMTy6temmLMpdt9Bpx1K57iRgzWSdxJn8o1jLEAejJcS4DZhSwStcX2gFSoQLVUfQMjeP5wrsY",
  "key22": "kGJGcPfW4aPMqjaEcdoYysgAC1Usf2sPs726uxMAtDGHtydVbmz7SBB1pqhp4Qve4DU95RkR2upFvR5zX7JPobU",
  "key23": "5XXB4jFa6ErYpPycBEt1QrrBZzKL74NNdHz6LZYWbnrXt4qE9j9nfRAj59uZ3qZVtfTYgvLW9VcQa5esGGc1SjvU",
  "key24": "b6DU7swskgfYiJwSETFkJ8bFomjXxPoAK4qnLWX3XC8NjFUYXAJR7wst8ixDrrEcp2uBL8FJmjPR1YdsCYrCaen",
  "key25": "2nMEhnaQHcbKUDCWhuo5wQ4YuW2gGZkN39FeDSuyTt6sm1a4aGgF3D8HESJvPQycKZf84LmyWvw19kX6qvhrVfRL",
  "key26": "22ianw2kz9GyMmMNS65FdbSkyZToLW4eSYnqhmpYfcqsVwqeWe7pfQAYAb1p6ZrCLs8WF7xNHAAXgas8JDLcP5KD",
  "key27": "4UWTjr9Yc3gLhFn6Heuy7isaGj7UwT9zabJZftywWh1RUgFhDFKwi8PHsxcZ9SYFVsDVzrwJ79wixW47YkCCZcJ8",
  "key28": "3BRsyrq6fH6nGR68J3WQHcLiAAPW3BcXUkAdaCdhXEztDK2dfdqUgYgD8nqXNgHN2cF7YQ7YpM5sSLLybWvzLw7L",
  "key29": "ELw43ejjBw6Sof4pQVwAmnxE2mdvppd9E6CEBAcY5NgJsyTmVrsLAV62bxNgRT235shwdBLBQm3cSQiiBo7ezt8",
  "key30": "2m5YKjDKKsBXDg76FMMaV556ZqgZp7bjtGUmcDqZzs6Ma1qLtJ8BF6Eugm4nMBVBjBjQuWa4a9R5A1ncz6EWiUwG",
  "key31": "3R59tX4SosAAnpAKopzaYBgyiSjNRXmH38iXdKjxdhzJAZhMzJnd83dGs1YbSZz6NKh3xsgwQqpqGXoaxnCNQ2YM",
  "key32": "2WLQeEMEXX48ZbdsceMex1jV5Rk6fFc3pUHqtrYkKroKmU7no5ixCzL9uQ1pszfp5BohikB6BZZCd6NQmjyQuQnz",
  "key33": "5cdm3YEMDVst9FFgTTvxpyyhYDMbu1ruhkKZHrAfWt9VZLfRYsWGB9y1nDQynEVQjt5JYPc2DcNx6QEp5xsFntoC",
  "key34": "4iz6C7pooePjbbaALkPcUo8tbnfVNJYa3L1EKBzHX6sSE1X4GLVEWwaHKdxShfF2rFgn3DyJhj6iRXjFKTJMGnxj",
  "key35": "4TpfvaVPYZbTXkTx5ZQKBpxNMcZxCAwdctxosiJwXFGoaSxmCQ1bVJCkEZnVcsaALi6qmtSyEFjqxDSG83kZJLJf",
  "key36": "3t2Te4oiSECNxQ5Lp7N3noGExyS5ugegz8dB81vEQ694EnLE31wfTQxBBgymoebguVNHtmUTfsD3NNtivYtzD1Kk",
  "key37": "5X54s1TaHo1vwKDqXCdEdSPanGVJNxKPorHfADPUXd9bj9RAWJUkrhwDUzrQYnLi6S8FASSB6yTFmND4NZo93dg6",
  "key38": "4hA8XWyavNdHpppsHytXyRyhxadVLSKRAVkVdULa7zxdMfaQW4XQ7aWV39e672HAk5QSyzLBusAQcnzWcGNvLoha",
  "key39": "673jmno7FcmeD1j89FB7WUc1VFjCwQmSpdkq1ouYf6i1eyXii2RjwALFz9Y11oSqN7zVcCQoYwxKh5qBfsj1KUXV",
  "key40": "bAFrFETDv4r9BCybUELFjNRs2ybEnvJDb3MCmxDprecK84SwpbuK3vm3U5yPx1evrAn4GWhfEjMtxZNTmAkkPDF"
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
