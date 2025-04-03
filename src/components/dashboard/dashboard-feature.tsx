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
    "57RB92TbDnZhTyD3hgNf1cXLHrtSuBz2KyFC2eG9PhJv6fda9yNNimzw3NRqCSMJgBjqxZe1RMmn8Nxd4fnmPaxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHmdAqjYnk5uuYAczHJK6Z8LA7v7wUSh1dE2rddv9XyiXqdoJP14vsZKkLNALnJFm24HPCH9LvLBdiTYNBBX31j",
  "key1": "34PgNpuUbPrBVmP9J3RYeKDmeb2KTLL4DrjTBK4hLivL3cXCBjmmTjLYAEPsDsNtqwLf2mrjoamQPmFRS34P7EGb",
  "key2": "bHvc7xMx7Pc3hvvvAW4ghggTcsMW7wBxGNNUMBRkPMUmSC7kGkiyX7HQBmeKukNLMqXgDRSuWt5jAqJubmxFVSF",
  "key3": "ESxZVA3AqBkvgJABKfJtih1qh7wVPapKQgpj4WUpj1rbKF1FbWcAP6SNAALLt7hYoRrvgMrcLKGo928GJHQuFQw",
  "key4": "5rwHsATrjJmrjFnmtrQUh3DwzehsEEVoQAoWtpiUB6kuEvmCEd6JiAATVD6WhYGfDnHBajWugGSFon1VP7bT69JD",
  "key5": "45QoejJLgd7wAn6adzpFiQZU27nWLUQrGuAPKFHupzgdExnjRpWP2tKRdDuhB7mxMt35ksfxFWsR2vwHqKWfa53B",
  "key6": "3BUuaDYuZXNZGHx8gSRGkz7W2NV3fzpPSYKPUzp48ZxTZjvw2FYFtyHmfNGqz9tagRvuBh9iMkVxs43WX8771BTh",
  "key7": "4Ahmis7gGR433g4vvGdH7nyJqvSQqZNHrf2FMVUnMirGVTqq1a6wkhD939ZLDLgFu7aZ2CnHXruU6p7soQa4JNYM",
  "key8": "3mDcHserParxg9eMpLBznAHNDBoPBP6DNitrevcYdtsnjy6FVpExbPs5bfcY6DBoRgLbHPQXwJK3FzZz6hDWxMtM",
  "key9": "2CEYJm1oiWGCLb2rNwD3uzc6FYE87RbV11BaCoj5XKdVxkLNrnuo918SAVZsZNkAaYiGYR44RLkDYrQX5SuT72V",
  "key10": "2NM9pyvNJ6r9rsnCVbvho2w95zVxruQXV6BHZuoWpNjRucggay4fEhVSwLsJxfwLG2kT4krQ4DypDkDHWFVxQn1o",
  "key11": "5RVGaYT5r6DnCLEPbV8anMgAE3EEPNwzR8nXzgteR4mp5TbRfVZ6YsaoPqMvGWGUUL1ux7fDVbHurrPPmBHk5FYw",
  "key12": "3b3TCkEoNJSZJdrzojLoTNaNvP1N4QkZPPm6582WKWs6iZA5u41Zmqme9585cDJQG5AbLCRR7jeMB5tWRMxS4giQ",
  "key13": "214c3KSqNHJX6N5SYTVyxFx4BgHdBUij6EAmxtATXPptmMLzDSz6EQnmvvuzbNUgpEvs4tVsdiZyM3Qm6wkXRLXj",
  "key14": "5oXGU2NAutxX6aSvSZn4fdzmFXEEFy7xSmoJwkrbDtTRDExWr4Y6QCtJtQf8Ah24qdDt7YeV68GAwAX2SCeHF1QR",
  "key15": "5N73SjhWo8e6UaKHE59UvjabkG5WuBqXox6rMBDCG5oE1yozsJQY7MBVsedkYaw7b5WAJf4jUrUsUSY1ZRH7bu8H",
  "key16": "28pjVaGjNZ5iSYybyYizP6MqMJpVnqLbbGdxhHrC11NWBZceExdCvtr2FGrfSNAgwacUuh4i5syrABPu2n27Zyzu",
  "key17": "nk91u71d1wjTppRhhVGHH8NSLuPjdy9Ngy7pQEy3txzr7gie4DZXMBDRsPmF7GxRyS8RLmB5YtureRZ1ydRobG9",
  "key18": "2LJjcMDWPqGrWRJL9LnKEnULevVqZHPbovoD3QHDZR5HJ85JuGcNGK1CdBpDtbUcrjS65itVgkdw7UnV8AarVHcd",
  "key19": "2awrZZ5a2Fhn8R32zvWjbnbwG6f2ZyevJD7gLzCWcDPqEb3gX3Q8bZ4Vt6pKbz5RdDhDJNw7Cot53Sr2KXb69xF2",
  "key20": "q3kk6h2YWt4YHStHYnpphUScyPYL1oKk9y2BdeLMvRYYEwGk4DM8w9iRSxMRihbrK5Df7B8qDx8FiJtpiqG6ciY",
  "key21": "4AwQfwcjQESMcFCzpkrJntzr4nfNM5PzwRmov49kGJB5a2nDMQ5VYCHG1oKbQ84ZS8G9z2JGN5djyZcbzX6tb8fP",
  "key22": "5aaFhCD5BmG2ii4b2V3yRnbnVF3GuxvJ25ZPy91i8mVVG3F1hFgR2d24qe2jFjuY9SBBNmVbiFJoMDquFxYY4fVu",
  "key23": "2WRiegCNSBp5miUzPSMx4JrevqinaaRAx596NhYJLqJdVoi2uhfDwLDGGNoch34K1Dyxr6DFXGeFZbyv6HWJvTct",
  "key24": "471jQwgJaumUtrZcoHRASXafYmnRGuMLTg5AnjcbhigLZwhDhxk4gfxnihpGj8QdduGvsFm7E6B8NZnPL5kJJ9wj",
  "key25": "3vXRoXSA7tcUNQwN1iH9fXLELHYmoD8brEBSEugr9JQuofsHBJgMbHXorauc19T83mh3gEXjhSN1UWPMuFQxcGfn",
  "key26": "5cXpiGTnuj9hN91L3DPQcQ9nJGGVpKesdaF8LhrPux9nRjsUdT82YaMq43MoxjWwT8nYfh26E71dJNmvjWMpRSua",
  "key27": "3UcVd1e7JNSrMsYCUffxpeGsZTm3Q2Lj3kxsWDWa59nZm7NFJREVpzjrWZQnMrWNYp7HCETdJKcNBZzbkjX1DLM8",
  "key28": "4xWbMFjjQRLvuWS2ejNQFCQnDdrec2zCdAvUGbfE6ce4MhFa48U1bm5sVcfioNK7oa9PcGsN9P5oKcTjurnaFmGM",
  "key29": "5R7yHXbeQB95Jvg9yCShjRPLpiJqeVjoUdRHSVuCcP2TMH4kZjTPNcdhgyM5yw4JTYK3rF8nBACB8Zocdwo8y7bT",
  "key30": "2JtF9eJN2RXVPdBmTY7RPJ618kRTvpd9kx5Wg94dzUDoUXfozxwQsMJxm8TcAquYoHUttRqn4gZXghXG3w4CzfSd",
  "key31": "62mqyR1875kScjKonQaJNQVZCxB4RjVJ3siHjpgoMxc93hWw9B9x96a1mxyYfWcpHv23Vc6TwWnjW74X7sDuvZM",
  "key32": "5wffuHu319CgRkZnwxXpFm2qHt59PeP5umxBC2yRE88aeUyScyPX4TNgfYFTgQH3KoJXBtWms99oFbPwa16jYSkN",
  "key33": "3v2xgw5zy7Cg7rDhA5trDSRKLmRvdctTtGz95q8DpAapf2GNPKW5EqzncPAHn3nVZBn9VmQega3Mbc8NZWbx8t7b",
  "key34": "Uk9qNb5mwJJ2trRY1MBSBsCjRjNjRZbwhXdfYaDqbxo4FhASVLSi3AVpi15VmFyFCXoN9GYBKaWCfNzwGufTqsh",
  "key35": "UdJQMCKVHqPf3vhkgoMjndhPi5uZkJWBTaVKaah5FN8eb8TFKpvkvH2LZXtpuGAVYjvxR2CR2YNnvnmUzXyEAYk",
  "key36": "25KcooT85RTcsprNw3mLfdAPxea2M9HQtbBkvBT4nVHRbD3GGt4QKzMYG51j5qpYpg4TjBPtyFvBnpngsbW1BBN2",
  "key37": "3NyXpWbhHMrWo1s46qiBWULWNQSvJMzdo5QLkRShZyiqhhsf4FJxqoMdRUrP24Uo6C4EU21u8C2GzQ9BcKjwjP9V",
  "key38": "vKYJAhmuwoLziE4AxrZWerEQCTVK19A2bu3euTsf8UacxX5fsgoibUgYrJRTxjHiVCo38eUHciD8xJPp3Vv67zV",
  "key39": "54v2QC7aSnzUqqraEvcx6HGwTTaZHxTcT4D5osDwgNQZx1jmyJEEthQFZdcWoegaZk8hDnf1fvQACu3Qd1X1u7Y2",
  "key40": "22HuDCvUBbVr2oWf3P214faa8ranyECh7p5J3EJgQsaXzdsPDvuM8RvM1TG3a8cKgB4dm8AAYmNhHoDDsGuRHDhs",
  "key41": "4MYYLhHTsy1yfMQecxW6NPy3LAV1JKfg1kJ6Vf4WbFyADkLMnB1DkuQmgTBT36iWdj3336AnbG2FDVHJqNGWGGAt",
  "key42": "4hy4FB3AYYanPMjKqU8tCjfqhmvwvFfGEC6osUnnMBMwciXj5HisWwQ66x9GnxoxBKPNuntwvaw1BPAfMw7nE8MV",
  "key43": "wnmCwotHygwpn1eTe1gAkHaW6Wmax5Wyf8f5GKRPdrkekCBbGGr79RRPq6ZQHnL6kSztnxeERNho8PxC1ihLwsz",
  "key44": "58BYX7sTiwaukAvo4ujD5vsmift1oVkM98xjh2vEQpc2gVZvo2AZp494suzGDZR7VFGDR8WWoaHogDLSacLHfSCb",
  "key45": "5SdRXy2NbvsXfZeRGXLbmsq8aZZfPHCciuSaqxGX8gEvTh7RemXoZJsuiR3W512HwPRMCTniv4SzuJYLTtgi2wg",
  "key46": "58DLCxghKaTGoUayb26ipJzzrMEAoa32Se1a468WHJ6T5N7ZuJwhmiEGkYEmeJZJKYw6NZw8L3qxZM6PuWZZcpsT"
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
