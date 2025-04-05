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
    "4aD2gZq4bQUwUQAghgunojQdUJtfXwQXLG455XPVppQm4mosAMU7ra4qw1rXcKEJaUVTefUKmLUVc2aEjnSPFGH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YS6q1ExCb3rHPayDvshRcU59kEy6zDHjSN7su9DgBTy3sre5xV73DAdUk1qUKeHc3rFrd4P4wD7D1mUWgGappW",
  "key1": "5pEUiew1jW1cwurHDCTY2LdYgra8khc2pK9rhb6auVytcGmWhjC8sXGngJD1vH9sZzat9myUxtY2G243E4hbiQ4m",
  "key2": "3peXZZpPuGZzGdqCbwqvs3CYVPshiqBsqwGhhvZsng4Eb5utNpMBAKm2s7yArkUcDh182YpBkWeLHEy1FrCrLvSR",
  "key3": "4vajtjBXWn8iSRVQnSAKGfhhHWbQd2U6vizx2iBvfmfHR7oduJyx44QLwvh5Dhf8xgbKhNTV8e1rexTSDZ98vCwK",
  "key4": "gcjr2TMQCQpHpPvvsDPX9HUVYf6xCyypfJPtRAajZdVzVgbiKzGQ87gNsaAyH4Qw6Mq7e1Jsp4RoEFWQEVVVZDE",
  "key5": "2eZVqStXDgFyKMN9Cfi5dmgBqTFwYWc8pPeSnSFzGTnvYcA5UFqKQqCm5WSdtVQryThBZfcmQynHZFmRVXXKFHD9",
  "key6": "5mtky8jEd8CpJxYi2U9fkPbXQ3ghDwowkxfUf8KaHyfx2C2wXoaHYktKDkpXpGWFHkSco1gZFdxxQ5bBFfFyv48x",
  "key7": "4MRsBXv8qSVRZ19nGFMjLKM9fNiGavbNmdAgK9JTKHuXJUAWtH6JEWUEYq4CJgFZhB9bthjLTB9j96kFoGKjbf7G",
  "key8": "4hWC5zqcmzb1tu8gwZXVKN99NBFbdYyG2n8rjS15m16LtKei69Fe82KB535XxcxtfRp56cgPB96ixs2xr6CPaihv",
  "key9": "3UqBAVm5fyJ9aMjWyoPpPSonExwa9fa5TGpnT5axu7CWNueNsShyst5W9kGa6LVygj7Qu82yH4EPgeeKZPSd5fGi",
  "key10": "2dYEDowEmLawDuHCPSGeNtYT9MPSko8iifigDe8qjhfwxCgWrrZB5MtsV9YQtwxkGcWTNPLeooxvPNiu9FFKqriL",
  "key11": "3BxtKaiYoMUDXMYrXerqrBfEnDQShskXX8RTnASm65irkYZZYBKUT8v4NuHviCoQa81P3GT6DLHEQ8FU82UnoNrk",
  "key12": "21xxHG4MN37JkFfPHH2erSRrsD9RqfzfsR5UhimjmvUVcS3Bt7wYFHRGrzjZFatRSKuUsG2auVh4keasQTszK36V",
  "key13": "4bzMoMkSgVe5uAwECqKxCARQgHBiZKXKFUMRnRpUenXvpvqJC14YeTMJ35pV2ThTJpMomj99c5Zky5gexyRjpE5b",
  "key14": "4YfAheTtkt31oWqsWikdoSt4Cd1cBffGFPNLwbo5qf3NvxDQvPxu8Zqxo8rH2y7KkVspTQLkokbbhSNqFsAKp4NH",
  "key15": "EoKdvuaabsR6LqApdjYoLHrZjkkb6m2wzJfngBaVnjuhRWM7mCQ21RnW5gLMCBs1rbhKnThy9Mtw7cbg5Y4TGsK",
  "key16": "xfFqw2FZfVvYkdTM86M3Zg2LS5aZRasGAuNinyyU4okdrStmRkXhmjTK7zdsCin8oT9a16bX7DArwiXY5D1vUqT",
  "key17": "3SAwZgUJKx8Ukd7nHTfYDwF6B1qD1DPNrS1Cm8Q3pJFdYzJRThoUaRA9eGMJH3zrzoJ1B6Fub7S2mz1aWjFDundD",
  "key18": "5vaHvwQPKXoUvLgEgRAakecfDsVYWjqVbZGRW9BeyfQSf9PjiSAf23LVNy8dELWaoDdtmnQtmUD6Fg8wnKt1dkd8",
  "key19": "3UFe8zVXTsrNaebvL1qkTSo8ZVVGZQ7yXsTJp7Y236UN43FbwcjZyWYrXsWkiprdyNMxihjDHjz7S9yfjJVnvxTA",
  "key20": "5z8a1KrgRt93setasLWbGNLmmo9kFQ3ebD7B9fTiRX7HvQMbBnoDnztU3oqZdJwdkE1Qccx5G7odoaMRg1r4w6g7",
  "key21": "h369kUqdkC7cXyp9vafnde6VkTEBKKVkrxt9Dc59crMrtFs4U6bJZXR9SjnSixky3HPaYLmEKx24Kb6baZMG1hk",
  "key22": "31HZ6TApHmXkgRtbrKk84sgRVmo84DgU5kDQLuT8MTEmCJJowpHMKjdNiFzoeGC7nBY359eKgePr5DyTwGYVC4o6",
  "key23": "2wdtj8DRLMMLdJVaK7XN1yuWRgvu7He2s3cGZ55DAfLcKJmx9vxCu5v4wdkF6bSVW6E4dfifzYCg5B3F6gFDa83W",
  "key24": "4GX26vuGQBC36eWkCeTrrXffz1XseoFfTPeBp8bipB8YiuSEX7zmE7t2qiZ83tTSHVBkt1n6KCkfgaAD3ZxswRhg",
  "key25": "4JWByJDWHT1pPRwHeQ4SFm4u1DHRrempot4mgRVbiG7mmiZvZDuZ32jGuKL7onGuoAg4gygPSwD26zjQKX2GxcXA",
  "key26": "53LKymtvw2tjC5TVucas6HTA6pNqmnE3oJ7zfeRtLA6aPhbQSSs7zXW94pmLuA7nJsw7jTqBCVqyHzSFmiFTgt8B",
  "key27": "58SDjYCoG4ihHBBJ9TRkh58TM3NMmy7qACsGmkQKyiN6GcaFGUxLstkCTHaCiZVowNszAZQHAj1MH5k8RsJbuevD",
  "key28": "RLGSUGJBPEEjbsmZUjrZ6ecxUbh7ki77WaZBrjdhDSR9mVRZzsCx6yJsAnrLiZpxjAu35xv9xBkZ4cV7ZWaf1kS",
  "key29": "56AZgatNRe6o2Ng1BsPaeZ3dpeQ1LaFposGfCpuFc1HLPHQEXS15PSgTCdzvQsaFSKB6U6zzCCBZuczM3u9y6CpM",
  "key30": "sLwcQFMw4NovJDKKtEQDrCU2Zc9Wj3SubhzsAie6L2BQApHAE6xiGLoDdM8CeVV5k3phdNXZwd8EYF13YNUphXM",
  "key31": "4xsDK7Bv1geMGMcpT7ssbyzCUg4uoRauuBppZtFDnUcH771RKZgrmEzJDBo1t5zyKcu4ByYzJSuWAtVqExS5atZD",
  "key32": "4GPmxN3GJ1F3rNmXwbfybPkoHE97XQdupKFyoRHaP1asYtfFpN93Mds9kyNg4u6eLKfZPozp2YibZyZz8rwoBU4Q",
  "key33": "5cWdT67x6pcGe328jECNBvh3Co7fwNcsCUuLL2D9zk4pesLpK7QxeKPDjAX4177ugdG4FuFpyh2CQuWMPF6Jw1jn",
  "key34": "5TvsTg3AVG3cWYrK7pKgnQwoSwTnXwmWRRoi71QCZnD76m3bdHG5sx4i8avTBbcQ9JeZpqkP4XGz2BJhrW64d58T",
  "key35": "4w3YA9eTF4XmodRusHwTqNNaAt736bkgxRYwxdoMWFxWUs2pBizCX9zVYuwowTEdgUGXtN3WTPK8uCq3sPSTbWhd",
  "key36": "5d4dNvS3FEeJKR6HAH7xL5wkWGV8PuMVxr5EfUP516vJQsSRRU6fgJoT65sQ2CUj8KPXCrpmH6gf5c2amAtJfvd7",
  "key37": "5XjQ594Npz7YCZCA16X5QjKB1c4EXWXxEQEkogiNJ8cULXA5wPDmFW2oCC8aPWE3DFNSQhouihXuDyWqkKe8EqPc",
  "key38": "i86V8Z52YZibzQS4sykEeZS6v1Cz9WCrHF2Y81sQZQRGj63xMUA3H8q5yQDLtvHGFZ8T6CzUtaJgsXgAKYUAp1S",
  "key39": "2ZLurM7EbwAKceSV7m3JnbZqNZxA65Q1N4YbMX83cgTzZ6GjxDMLnV2KF8F4EgeaKkQDQ8nyZ1WmV8ywpKQe2ZYV",
  "key40": "QyCuakgnNbZowfkQ5TAhxZVGn3uHBE9oXPi2fL3XEn5g7z2AYordrzcm37E9aa5TvgfTHrKrf4VTr5ZJUjLLrKS",
  "key41": "2CEk9yau6MoWVDi7PvK8sWTxJdE48idYXidWWT1JZwdD4mxb46gafcEq732gPKUPhaGxQjWW7C72wdnwn7zFHJ9x"
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
