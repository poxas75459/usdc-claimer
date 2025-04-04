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
    "4GsDhTddAKAM13bceZhWn7nUPwsUt7k4KHi92LVfkxaCakd2LL6Sz3Y85KbG4JRbx5jrGoVNdzkaDZKMMT8Wsaw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvzYLPNmCDwrmgQJEatQfJdy6dJan3YAnYD7DqLTpMxTRon6ZYwzRkbhXof7JkMNeMrZCseW4cRzmzgoHTffQ27",
  "key1": "kHDuk5SRXU3tXTsR96pgmmWg8ymJuGm6qt8q6ZoWkRX9F6JCMteuxKpuVr6TQEokZ7ydUG3NLZMoFeS59aUT1eC",
  "key2": "3iGqocreBKtuCMNWVMrqsvPhtxr5kJS3uWpmUmRjbFv5N7v7A29s2W9n9XsPACzpXG48taegCK6cTo6D2Wt1AUcL",
  "key3": "5YeTngNA31AUQyGkeELhYhX23guxfG71NvFHbkMyeR3YFyMrXerxX1tyf1EhRE1PrDumD8Q61rmpUFTm4nVMTGFL",
  "key4": "nr9c23iM6e2yssTVCqmceNbSSgAF6ywaTqaCHXQK2nC4jJMucANTcJp4Y4rD2JR8PTz2b22AEAFGG21EhhgZVA4",
  "key5": "3t1Wjf3EyiwqfERJ4vy6xcDyoxUVaDUjSNvgNKUb3eoB9XRrLjedpFU6aLy16zmeMAkgP8rhmwXAeo4a4cfGeRt1",
  "key6": "5qHsvcupZ5HYxFCyvbkH3pwuCvhvtmTroPnRdnHQBVVcDziZksawcyzBUPRYTz2qW7DmTt3ZZTZrqXbQrSN72Fu5",
  "key7": "X5kHf5i9s3tZJx8RqSmCZTt2ZXb3edTrZFuapxSfvJ2UjexEQ2RpKHJzm28nozLCfqVHYuqZkxPgNwmXex14Cid",
  "key8": "3wrSgs96RTAdb5RdNqvpGAHktpgfVcXfFFbhWXKNhUeDRNWW2zc3AGhkqRmP15nWCBGKmnqLEWLJD5Ys23ayjyrp",
  "key9": "5fquhnF5xBtpTtrT5eCM2TLALenwvyrnUq6amDqQKSNvFQ7bgqEDKznzR38ZE566UtRNXFu3DNQtYisTyq5AWBf1",
  "key10": "5B5HmXyMy4EdGeooPgj6pYEw5db572U37GY5QSoNjyMCKVhyheZFA2SeaVP41y7zrPVjEkFCJ3qJbL1ksTpTT99d",
  "key11": "3fBSNS641CNqaN7uNbJgHesS8zT2ryhwcRczFfy52AZwzdepAn2uw3B8J1yqGrHzf4K6N2YnP8ohT4DhSsX9BE1i",
  "key12": "2b2vqD6yUkA4yD3e9hWkpBQLMkmKT9yCVmrpNN8wxSRTQVXoQXC4axQtLbNG63iAmXj7kRmWBY8BPA1rBuvM8jMr",
  "key13": "5JHxE2ZuWTuHtykzspELkMxr7r139obEQsrPc2QxRePVPDzeDHiXzhyuPvZsy91FtftocJF5c1ZH6ngJ2iBx79rs",
  "key14": "5j3zApzCi4pdpV2nuiZ7LPb99ZHDGh88rKXfthv1jC4GZ12E66QEwVH8kWjgfvkK5DZD92WNMaqYwVuhk4PEeZ6L",
  "key15": "5zbhKDQcHsEER8siDJTiJcVaWUzcoMNKqtrmgqZsxqS3wgqGm7hAa4wSEhxJm1FJfhzoyjiCNZjKQdQ7kdoL6E4P",
  "key16": "7cHEcij5bs7tDttBfXBpYPzNkyiQzkz6MaKA2oacmaDc7kJPGTyQcNEv5QuM4K4xCaCkjt5n2qhfEs9eSz1MPev",
  "key17": "4QTtjrf9Z5vSncTKd7ivHmAocbSzdq8dY1jhfNfmdRK64BSzPkWpGtXD2c2AqSyx67KpoYKtMCGw4GeujS6PGzP6",
  "key18": "4C6HJrM9KRsB9jVC3sz3DWQuZxfU3CvB6uX1a1KcAjqsvDmWb9aFxBTD3LVeV5dnaLRWsegfTGqm35RCCVASbKPY",
  "key19": "4mYbbSxmgtA75GfVVzDm8Rh5MKWXxYAhZ43DpneYg953WDN8appZL6qdvuZDDVAhWwo8rj2MhRHvbXab9E6Ft4oc",
  "key20": "3Dhjt1QujHcHYQhS3LmkLhEDqdXp6x6T9rCpcxNAxnp1TBN4WJk3zgng94Gjj9oGV62jbRML6PJrsofY1US1h7tR",
  "key21": "4mcQXVmKqQ3pKVCcXRT5kQ3aSCBkzZbqJdi4bKGFV2kpvH5pQwunrQQNGUh4ybmtz4NYczqPAVgPR7YXM8Vj1HBc",
  "key22": "52QzeRiumnczd7VCDwLeKzVE3wVxD1yftzS19uFW8Aj6nE7R2iGwPkYxQKyvdprKucQFTL4dRMH7PiPSFKBW8VRs",
  "key23": "5YMaZA9tXaXEYXvQ44tpw9wwBUrdet5Rgwi8RnpvF97thbtPKyv4CgMrVNXNWP4nU74YFENG1Kku9Jc1n48n3Sfe",
  "key24": "3Gp6N35tuVvNwTTdrsQiiz4yjPFh4iWyDE13HVFVC4iSwe7GGXfDXuNc1F3bYTJYiGDJtc9GSmzhWKq76HKSRxRX",
  "key25": "37LQ5moKKqvndxMmKqaNGpLuT815SjNufpjUAPTh9GKWoga4RrEmK3JU9GmVVoAuE3sbj79EdgkS2fWaecYCNyR5",
  "key26": "5Cr4UZAHKKq72b3zmSqNZSqoBNPih7KJTwDzmLQm3mHUWgyNps5HECfL5SkjQjNDoSoot1AfuGLN95x7QFSXDbAF",
  "key27": "23xR98CjnvLsPC32YtvGnb38zH35U4tp56DDNBYphoWEcZMoVxFqx4TfLMyqiir84FSRRCtWvRumwJJiYkfcP1MW",
  "key28": "3gw7qpVtH8YGjZ9so7CQcYUzMbBrWUPcomtCRu11rC1MjmJcT4H4T7fYq91FMRvNxy6frqQbowdiMfZ7FVsVuQob",
  "key29": "47AShGvJJr73JtAzdqxNndRAtPVFTzJGqXsEvJvAJ9ccnZUC3M3v6zgTs9EzrKJ5jziBnaJa7Hg8wSXYJw3wKD3m",
  "key30": "2p1n3KCMSjoc4ySJT4rqSWtwR6VhVozAFaxsES84wJdRNp6MLcgiXzkddQTzSPgyUBg6Tr9837UAAU1RExNhueEC",
  "key31": "7vcWuC9sBWpyCQhuQeJkZa93N57tmaPhrNWjKV3avDNLkqTGHCwQ7HxqMyuVzJAi2gdao1Tgxn3F63a4PAi7zMN",
  "key32": "5yAqXjGBHjJGfts7MCqWaz8Vrgpwjdb2eV2pxxqQd5zXnvBcA5HrhNfrPYZbQv7sweG2dH1LRJNYsCdYLupFxMGa",
  "key33": "WPWWNBJdnyjfwrWJ1teUDEEouR2TDZuLFtSz8D75Y7twK6sBmrEQcibWf2fWGm6t6iBpQceEm6RczPbqv9bqyXr",
  "key34": "5YVwmf4HBHegXkWMrfk5GJU2cvmNdcFp2SWHutnvcFiubHURANr5bFPAkZqcWCK31ZECcmq9DZZ1yoa7Y6vCHne6",
  "key35": "53ppAc1riBJZshYUhMFnJNWKK1Hbyo8EvWRUhHY14HGbrYeKuWuFF6QRxqLthrwDfn6zKNqwU7vdAsUQi9txxkiM",
  "key36": "4Qoc4bCEUuswdsMDk7gB8vEV6hkPSEyupN4tUJiSSt3rfs1SjFfMGEd7Qfxb5a5SpcJncdPECEfc6o8eup24zt3t",
  "key37": "V6hXb5qyv6a7F7G72AASoVJjQSEibp8UgfGh7smCuwN8t8Tzan1cDDnuJjT85iiSdBJ2hWDB4r2AkXTQS279V9C",
  "key38": "3A7pjFRhJFkdymhvPMJYpsJcwmRXQPGhA1dUZc6WWovvTQ9MMXz9BgtMS72kV51qoJvCxmW2o88ABgrSowvPzBSP",
  "key39": "g5DchH6CSifDMTgKP7L3vP4tkxzBCDxKk56Y1gTdR71SgxcffjCSDhiATgKoGsG3tWXnoNF5rCX5kkucAeu8nY9"
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
