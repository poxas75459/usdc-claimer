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
    "5AKMBasxvER66DjrtqqnMCiseUqgVqKru1Bg9HKUpPTiHDWWxQNWhu4JanPDFKQUfbpaTbh7HMdM6uSAENoKJGQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QPo1YZYus1PVCYf3F4EiU5N4U6AdtWsswPwM1kB8HxHdYSRbadnAX369iA9CnmyC8MKy2RE7BKuYWiqDnGDFa1M",
  "key1": "2v5nBr7Ws6CmzEA6BKiSwEek4Zi4rxeFZVcQkDK6xKZ3HoLDS4t2JQBDzpmovE8fTbRGXkTh7y6bXZ6Lgm9jS9iM",
  "key2": "3Knct5q6xqZEL6gfHVAEuWos5k1A6vvCeoCL1aDejmfziFxhuZujxnap4tL1nf9p7nLYyA3mr4uTT3KM1bXBuQ6f",
  "key3": "3XLM615qdiUBzZSmRswgKoPADwqDv9Cqc15zpiTuXbqPVwg2ybB1X3xA5AGnDAen9BKXqTHvyaAs87XoBXCEKFwo",
  "key4": "3hgCTW37WF2VXkoxXqyKMCoVcePjeoqSBumnzNEHkj4LjkpVeN87KHqK7rnzv546DnjZYo8FFx1PW3ciPEg89GLP",
  "key5": "2VbNDTCC35TUCJXyYK2KM4PXj86wqBxc5pPk5q8cNurRi3c5LkQ82BBydCUXoDqENnvvu821KHoqbEQQRfUHdYum",
  "key6": "bi8jexHEKcaJppr8ixrEhH92r3k3veofeWdDxRnK6gp8k14S3YEocfrWosZrKWtaYDL4PfBWL89Jqtqk6LraLgn",
  "key7": "3PZJLJ9ftewaybPU59YUJsHSmBg6YHRzbLG3fd5HadUYbKXBK572uTViF5o7qLed8D3Ao26oEM5H37ZoJtZVvr6s",
  "key8": "2htYDZLRyGAj2SHvoZ2pHBSNHC7acTchobvGFVzKT7ho3UyFFMh8Yr7Ydz7onRKhmC6TtAXt9S7yzXQ1mvLjrSDz",
  "key9": "VQrL2t4nzxeagBWkQ5mizXG9maDSLMsqHVamKn3TMCpNfVGFv1Uy93fXfBtXcwaqjTDFEiQMw1rwLqpC3aTCPX2",
  "key10": "5qZTegxaPCZVwxgWnCCceS5qjM7pfQ9CPFUy8uieBUMMhNz72ADmHZ1Park1mG8v66WGAtj3vG5GKwvTzjFT7Lic",
  "key11": "3i9qpm5RkSjHpKt5YKKUPKeEAVBxwZ5BaPYkPF2FPXDQFRLjDuaEL6ZNpfkQWKgVsHb6QWKRrsodPCqbkFNHxWJ5",
  "key12": "3GoR2qKGhbYgsPrR3ZcMYmqPSgwKSgWoAkbHTeVrzSV7tqc4KaRDh42B7QxtBpJYq1hKmLGeC7vep2mt5D1o2Xzz",
  "key13": "5ULKSmDBLTv5wQShV81Smz3oDr39ULB93yxAhbrRyrXZ34MpuZH9yUdtVct3unTBMvvA3GoEAZPtxCaq3xDGkDTF",
  "key14": "4kv71iWZmHjkKvGnARJNBVDbhfdBYGtWMPwq67rjAJeWpVoGmf8nmrjULuovpLvkhB2LmrSSjYscjfzpHipxfA2h",
  "key15": "5dTMRrqVmeCM2ttVf4pmXhtyn2dSQpEm2FJyS9wxHZ6Q5u5vzwH7FGH3MuD1sMcztRYhaf6dSoudukhnsxvwTE3w",
  "key16": "517uuhyc8mcEzGcZsYjZeqjr9e5gXS2VUAceoLP1scQUqnu3J9BazYnSvPBKyvSr6VZpqWXkf117DGJZiEfkT9mR",
  "key17": "uAoQbt9nJwjG14CEpfLs8sVitMMd35xBwxdDL4xF1NRNvjKXJDn5kL5YKs54anA2FZmftYLZguGkpQVycszMAvW",
  "key18": "5XrmhhvDL8ua6MtUExg6x5GMH2sFj5A4qeadDu8pH4LXFkTzg7ojygAjxCLFon72tSHSoNf8RkpnTAg133oFbD57",
  "key19": "4fDN9Mv4eCdrNzpU7R8eMSxZHo8NLPW3iAkkxAHNYRpvFfGJwHzXuTZxGQAJrPdoxFELaQnGXhfx7yz9SBZEHVje",
  "key20": "3caonkQ1gXMFA2zn8EwFwTbWFkuekxwvYD51B2q5V5cUTPJYBLTH5CPvR7Ctsz3TPr2Cgpkm4BwiVe5KQ3itfDuP",
  "key21": "8f1A4Vay3KwuLb1vuBwN1szRsqvrCErkkBzC6PH8LeLuJacyBvHktaDgTHTwzgxjwQapikjUMkye8gvw8WpLTKg",
  "key22": "8hESeMHN1aiGPxabdXG3L1zHFVwqqimitaA63fYPGfeubhYGpQkb7qFWBYqgMKCZ9uWD24JyqZR4rLgZR3JBp7e",
  "key23": "3dEPLj9i4b5C7w7XD47QNgHjF4EVRrM8yuRAScbe9uP5uZHbKT7RbmRB7wLhdsr28SFxYkCmKMYauEjCbh4mwWdu",
  "key24": "53ynFqfp3LZTpFW74n9AbCFjZZXYrnL9gPZFYJNgq6ApCiY9EFrTB1cuEwvKh7ouT2PJx4DVA8xxVT2LunUackwi",
  "key25": "4r4FJn2TyHdSgwB5n1MZzgdVizR8RKPXmPuJKds16eqdzVLZ8SkMySjmWNwmjScgdP1AGEzT7gPQntKvyUtZuga4",
  "key26": "4Ab8SX87AEy9uzUf4ZLnq55YPRvpBEc1Jpj5cJQdf2rKKiaGK3YHYCS5xBvqGigxAjeXzQk119pioPDuqyLPBYeL",
  "key27": "2iRebtm7A3NsddVp6Rg6T6HE7nj2DtbWhMMua8X5J7TbHAXc77qokY8m9VmxiJez1iJRt3Ti6JfE939nezXbTYm8",
  "key28": "62RRSBFEMbHwe6Xj6gGEReYWwEhp3P8Sk4NknMa4NRzq9RPoAeD4x9ttonB84QxRwC9C1AhVgewMPfppYYVQcAmV",
  "key29": "53bEBWdEUzG8mXBkCWJxaAAWmXncnEUE1Q9RPmwxKezDhuPVbkXuAsDE651evpTWo2k7W1A88JauDVeWqTHM8MKk",
  "key30": "hKdbq1YKqdXHBz8vCDvYtpJv53HDVAgyePs1hvc9dEJW1bi1f5mzLX2PEWf5gBtHh79mbbma7X5gR3tccVGVLah",
  "key31": "3wsTg3gvz9dNtB9nLY2voYFHazcjAAhip51zNvc99jTek2pcakB5aEFc3H8gcEH7Njqk3Csxndc6SdVRotvN1JHs",
  "key32": "5VEJfdtE8whgjyYaAKTZf4aQ55xTZ67wxws89Rrr6gLt1LVjQQj2TZTv8q99NYCE7feiJeUugnJziUv3H8qfegPS",
  "key33": "4MqvAiYPzGWqNv5ToBaF6duxXaNj6zLyzXu938kwb97BBWwto8qwzjb8KCLdWUHrEbTmR1qv1tT38EwspnjoxETu",
  "key34": "2SmDYmgsSP4iNNewdYRjqMKLTLm1rcaLM8ur8gQpAYSJajmMrUkWoJkzdcgwggaGHcTBNGoSbNk8QfK4SUj1g49W",
  "key35": "56wdSB6QjhyZWjh4BPY7VcJb7HPpn2Dzh1FrePBDt7ur6wm8g8se4F3PyPUQzNtmrmsUVmZHm3zvfChHG6FUdo3d",
  "key36": "4mnrKTh4LwN7wAzzoNqUAJ7B4NvicnMd3eAu2aMJBGvTHt5JuDNyJNN4U79hd1shYcH1Ydh4pWwR2Yz2bcaHASMF"
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
