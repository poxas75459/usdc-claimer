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
    "aWJ8JuKQGBnpJtCK5uq6xnespWuwgd2pZo8PoQy9S8Tcpzt6N6hA2ccjrComhqQNL8ntFAjaPqzadxTtLaemVjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ERhfhmKyDCBgk9QynabfpYxWFYnnJosz9ouCU9KeAuvjjazuy6afGDBpcaHXhfqE9d9PJjTpYXZrMYPhsoNXni",
  "key1": "mCvuZdVz8dV8J7mdtYRV7Ecx3LDNW6LWp6vniJZPNudRKbi7N2AY3bieEgZzzSEpBvXB7eJKpzd8LSSudh3XNEM",
  "key2": "umERRs8Co3BFXUcQHmy2ihhamSMiowq4ShYY8gd9pdiUCGqUnULuHkjm68tPSwD3RQX6yeLc7P8x59L96SFeDvE",
  "key3": "3xGWUJuuMfLqX915c9LypmUDYpeMRWTUexxjjqugJGbjnEEUcxCMqGjDsZWUXR7rV8omEaZdVgS26xhB4NrfwWUN",
  "key4": "5M6EyoizHakeHEZouA5h2hNttzWWFqrYVKVDf4Xaf3rrFuh8bMroaNMpwwYDDksEWMvz3pUQ8YDTixu7cN4MiH86",
  "key5": "4qUhR7RUB49nyKsVbuxAnqm8SncjL1BfvfHbD8st1HC1R6Ev87CiN4EFPPUx4E8MmKuuAG4uzL1CKTEaz7UdSfvt",
  "key6": "29fyVj3quawGV4hS8PcYRQiQA4xivokuaLVgAiXM5ZnyasCLxrhZCkao67G46t5UiRMugHYxuMu6KHj3mRrbQFKN",
  "key7": "38qJtDpDXArLHmX7efMLzr9BTgrX8MEFXR1MfF1K6pz7CRRDZj7WWqFJcphscSvr1UcP2YCNzaYvAgqpiEFaU6u3",
  "key8": "3MWmKW4TicDXACWYma1NYJM72zwVvWmR6pzRADL4o98MFbdvpkq418DxsiMoPZPuy1ZUsveojX2zDajZTJnmFye7",
  "key9": "4iLvheP4svTNGjVSZZZR5zcf56Y9UZFX1Nzqj7gTyXUqpciV4rhAuJNZkbEN5rTvrhdwCLHViUXjHsNpxv5DcS1S",
  "key10": "4kTioZXvfNn5QadfqsnwdqziQm4W228bEgdYzbENWJ4TMBWxYShY225xKY3xEdLqcHVKfHCgDCMTaYZYZodizjJi",
  "key11": "3uvPyMkMZAKp9Z4TX6UVqPRHwF6Pzdv3TRR2UgY1AZaysSbBGrviYfNHifJZyLaZ7gPPJLjJJqYaVFUUy5k3L95i",
  "key12": "53KfchYCXSwBVFxWVboRikbm1YBdP8mU5wrjQCJrJhDVEtzXsoig3i8XBZ9ESPGknJW6L2sW7BCMHmrvCK9X6Xq7",
  "key13": "3oYADc1HA7honkakNcarg7unbDjBC4PnfvYefg26677ysoR8FBqayFXdN6u46UQD3KapKxFD6vB4wW9SZpkgfpSQ",
  "key14": "3yHTiC7mR5j3PRTdJt9TUEDofqo91W7YB4V6G4PbGAp8sdJfuEXT2MtH8dtwzbqCzdEFUsn4RzDF9mA2ckFcWG4z",
  "key15": "3Qa1RG6EznqmkNHLcMjpghnsKXdqyqCpZid4M9NjprNG8vhnBP7pKgYAEBMHS5PHuNCVbg6q52TtfeBfSDrf6khg",
  "key16": "4MRvJhFuzcR4L596bi9jVCPqSDoeehHm4FKqt2ivizzzNrUnEp4DymxnumtQc7iZcJhV3Ex48CabWZQB5JfXWNxh",
  "key17": "4NdZofWeaZJ5gZpPsGc1n4CEsZcmSdbEL8LBMTLBcazqUx1H5pUospTgecSgUxmUCpeptNpuSB3gUzEgGDYkjSSG",
  "key18": "X37QLCYfyoHap3FsXfi7aeZ12ie1YVU4XjQSWKH74cze5Bh11jVpur7TEnvwWTaGpex2T4ywoKJKxgAz1fBxtWS",
  "key19": "21zuB5BERLeXCGrHzZBMQAqRLkwgsCjNUvSsVfZu8ERYGbTZEUZ7t5NWuPzawbB9JfVNj6xSj2S5cuwJZafT1gHe",
  "key20": "3HVpwZyHhpweN9jYStkLVYsfEJxVJmSun7aBTnEsYJaTWppnoCVHJhe3ehZav3VccfWLCXf4dmHchJ5daRSh3gnQ",
  "key21": "3ZaM4Vnegb6LUqLjmQBM5HNgkZHY2s1hook45gps7WJYLgjKk3kvoEK7UCbzc9HKiA1qfpbA4fEgAJ8SfnPUZ28S",
  "key22": "34v2V47LRJZYxEuJ6wQ66aKz5LkDRe4L8sgqpwH472xAMMYqS6No5gEXSsQAX388mkXdzUBVSXQDrJgkd4pLty5b",
  "key23": "5h4k3wHJs7VXqT6QZqVoKkbMBjP3XpuzVi5DFoEzDmWkK5PUpMNaYa6UgvaP1UVXZsTDiGu2bEvUFLw8cfom9Eju",
  "key24": "23QpWPfHcpkg9DWtb4YjH8qtr54XshHKsHnMKkjG7KU8oZfcR5WRq7KHrYckkdxW9CyQL6JYsaWWuQQJBauf1qXQ",
  "key25": "5DV2J3s9dD9EnZqkdM4jL4Gsa2kML8jYFToKCJj7xTyoitSBTHDpkZgntrbTPLyBcgJNi7FskLLjssY12tANh7xD",
  "key26": "3aymPbbNMh4A79A4jfHaD6Hg7NJNiXKL8JHVzs3iwBV2pX5r2ss2meNY9fiWNqSwqHuUDQM7fHcFR3Yo5SZ96iJW",
  "key27": "5VxUvMWt2FjieAymP7PbUAdLPJzM6sRpVzQPA1KvRjFa3KfWUnRNpae3fASanTcPpSSxzA9gF1Xw6qQN2PxQAGTk",
  "key28": "4y359hfdvEFBwodzNfELpbNyr9BDQmzVmk7ghfJC9CaRF1VMj5HLxmHVowP9SSHhpdjAjZjDRprpbZo7XQ4wEis5",
  "key29": "3RwWf4JwPkoakJNw1Wt3nKzVFosTDHAv4uqb67XkN9hdjANt5iEYP6b1VjgYJUroK9RjgaUKGHVcciNVTPCQHD5Q",
  "key30": "22ECS3WHNZF6JWwQTtknYL1SYCgySfFrVwf4ubVnmA3EBv5E3CrRqyjVKjJvp9fEAYFUEdjBS2GrykPTF5nQwJXu",
  "key31": "5Kh12E51a88GLj1WBrY8Bs2uXLtSPqPPt2sSRKDxyKTdAyzv1Q3vPpXap9uYMWy1QoBBXqzpmHSu1xwBKjmGENhb",
  "key32": "4rpwEKMpU7bxJH2U7wuQXk7gddtBqMGwgVruqUER3baCuiqWrwtVV7hditYt4t5YrFcE5GJdscV4Xz1oBrhuCaJs",
  "key33": "oxTTtc9TfgXBUcP7gupMwYtVCg9N4MRmAXfTory7zSAEpyabvZ9HvgRKDpasFo4prLPgiCCYfDRwjKz3Xujqa5v",
  "key34": "v751wCmnjESrHsMGjzWmERHvuLF2hdaHuorXPsKEwMDSeD6EqXAEf2mghAW3Zr1p5GE7B8SKrnK8FFgG5qiPXfB",
  "key35": "5zuK5wcbmvqoScxnF9KokWvqpSwFTXQ5CQvpo1Zrb1V8cgQshA91mGbeUoYEXj1mAMYqrvMvvhN6h5BJ1fp2wD9q",
  "key36": "xfqTFNTYUKpLTJYMrLtBKiHvGFo3UZRh3w97ZAmnmrCJitceFRVADtsH7yjkMC5wqzzpoP6U9ZxqfKBxWkRwFWp",
  "key37": "4FAKCmbDRsL36pFL2sK9JDW2MpRmwHBPznPbqMBoatsWf3pCMthPxSJkxQNqyh1xs94L8nA4cvoURQ44Aoribcjz",
  "key38": "61ZT8zVFQYRADgfJrXf6D8AFuMouK2MhZYirVqSEWS6Hs3QnHj8Fyqxb4kvkxEskVey77tsEgzz8UYiaTVPuaMBP",
  "key39": "5fLMAb2x8FRahZ2ghVJmn3dkgnNP2MB3Zyf3u96ojeu4psxn5DNzAzEsJdky5zr39MMjiFvx4TbDKvRX8wGu44K3",
  "key40": "Su1E6SxPB8QV35hmupzYZv6mpmmbAyK9YzeF9aj4c96FBKyrKZ9GGkBGDnkvWhWFhTvffX47SZuZYDQ52WQWBN6"
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
