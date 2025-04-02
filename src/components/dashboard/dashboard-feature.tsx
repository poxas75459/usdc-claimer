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
    "35vTWy8YtL4VonoDWeZxztzYqsXPAwdCFHtjda1sqruZXX4HtFrx1ZpRm61DLbbdaGvjUjqnjrLhji1QJPx9onMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPZAMLrUU65JdLn8Aarcb8BE9htG4sfM5RXivU26yY38pnfvrbMrH99f4xCUzLT8wPNszDK4YafazX8aneBkfYA",
  "key1": "RSKDxobSKNiawo2S7n569k319yQWgGop26fzqq3ziqeFMxDATW2yDA1Nhhm4cqoT4xVsVHGrCL1y1b8z4S1LS5A",
  "key2": "4Njxw66xj2kw6WZY1DVWTfV5e6PB8otzoF4pPmuPgABxAZGqgjJRRSaBj4S55zYx19hifMLtbwGKsoc6XQQvGy5v",
  "key3": "61JGw1kTZhT9kjvWNqRLWcWggY3hwwnfkaZJHLcMPUMdENeZfHY86VveoiPoLWL9s2yk74Rt8JSRRm6eFYNXiBpn",
  "key4": "2NA3PfkcqbD7MVcTPNs2HQecii9vQY7yhiB2Kvqwvp82U36CDjYcBjYnFJPoiYyAaZQBdYtedy7UozyjFfYP6S8i",
  "key5": "2FMygMsSynHHjqokVK6ur4cfnqnvVM8WMJrCSKrvDq1icjFfR15bHVdUWrjHtCQ6uc8mtBLupHzz71F478SiwQxX",
  "key6": "2AqfNWX8SMHTrWLH2Ev5i63ZmeQN36jptPJF2CUn7G7vNW6uP8mxNGDVUKLBgSb9K78LmPs4uTiCnV8zDRpYv5ZY",
  "key7": "BUsqU7oo3g2Ha8V66dFoKhN5irQNLqxKCmzDWuBBCfRJS9eWhM59rLNdikystN7E9H24W6UBo8Gj6T6t4zo5Evq",
  "key8": "65dPXf1eymMiLhDcmzGzdMaLXkssgArhUF6BSdLYhWpDhMLEDPuU6835LkCREJoPUNbxuTTgfFawhZbv65JaKwCf",
  "key9": "piZg6s5hE2EuNhZG9FpPQP5QLQ16212Zz36RjPZMaR5yQqvHzXxLzEwot7UBgfwk2Z1mNiySWrHhZFJn95wtSDa",
  "key10": "8SE2awoaJdQx6FM8FJi6UBcTFo39YpgjhDx3zsMQZgpWtyUE16pUBJ6vN1xQsH5bc7tQy8ey9VuQax9ZLNMiQcV",
  "key11": "5e7xerwaddviZQqv8iFvtjSXSxx9LHRBKLUZBbJQ5M1otfgkaCE5qzg1sWfeJkAoinxQmf1sPt3FMhDDT8KQLZuU",
  "key12": "5PvL8B41D9BwgnTQVsddwcWWKV9JSyAsXRAfHTSBiygyXwqRK3LaKPjzRWgE5Su8AGWNK2Rj9TxzJj9Ho3nVnXiS",
  "key13": "45i84FMABkHR6R59q5fPEMFKrBFox5UfZty7yAJ5fGKXkBJucyppn8zx5nzK2PKPMiWNwAhu9jVJF7XRkgmNdHQr",
  "key14": "3DKSUKXemYFBdvP3jCCaoU6TewF8KVLqe2jwcnGCB7Qf2mnx73FUAPjfjhg2LZMSBpYzyxSduMVWBPGT4Z5QGTyM",
  "key15": "51PFr1JmVC8GA7VPUdxV3CxaNAdkrmxwfCQZ2rwVvTrAaEavxzjghSoCiHiTdhSmEzkKBE9FTsgUsUWjs3zEqndi",
  "key16": "4kfDk2a21hdjbvCgmPBs2Wz2z6fjzWn58sYTKmcJyLSzakQCEws4AECXegj4zxCvH8ztRhLhTNnkqnQmB3pJXpLF",
  "key17": "g1xAiNFABr5tmyXxNEFZauuKaY7qLLksvWmuAPmQwbPTuuFLY2Wp4YwygLVH8QzU1gsC5yEinzngQSAMVsUTCbm",
  "key18": "2oVq5M1RGuvazWiyKKbnuniADtvsXiU2Gi4Dpi98r7QW8zvBZGmMhCYdYBzoWvVitCLfY5tyQPu81HrT6ZX9pEVJ",
  "key19": "3wL3vMpnecF15KSxgCHJccKUYViW39C9Gg5f1Ad3vHLmuR7WN93wDty5Qmb9bBMFeFw1RaWazNrxA4wrR776rim4",
  "key20": "5B946hLVJvgYzW2rYVDTVLKibNKaQPnEB5eNUHcxsmWvF5r5rHWLnSFQU27GwwLCF3413AFV9DBAE1fwe1EBzfuP",
  "key21": "5kVrh6ZkMWQxPN2yPwn6McU5yeeky5YEdMBFVGi16ZLx2kGwXFqES3UKrvCctH1t9haPQ2xBLLQPc58NQ5zm9eJs",
  "key22": "5UNGw3EPbM1UdqroWTqZwtyeZ9FeKgHwH8epcJmgvF17MMAhcfW7xEELyYm9kvs39T4UzicQgTBaWcaZUsRmpDyr",
  "key23": "2VnSbrMM2y4yWRWCDkmiBBnEC3qvAQ3dr8QhSG6hDAqX3LnHtwMeGSfusGhQo2XUFCtahDksYcW22oQuPAKrcDZU",
  "key24": "4sFqdesp9RFPuDfMnat914feg7H8BvemWia1bi5PEAUoWwrJdxFCpRdvadjto5JyiBKqYsRPGdvmCLRqRNh24Y2b",
  "key25": "4MxB428iFP1z4DwfQiN3npEHh52EaxZZ6PXfhVNq9NHJMjChm9KYC6RrLRqyP2zKAe6CDEreMesjyYG6fkDygu82",
  "key26": "4KhaLTwrbZH4YiNeNBjkZLkSxW7LWoyRT3Dv1ueauxSnV26yGDBctkbstNG8UbMSE9hV13YG1XMQBfAGBGvNznWX",
  "key27": "1DkaHsWXVuqjWKZv31WqhThSAfg3kdYFc5bnsJWfhY4gkQHRLSz5Sn8ZRovQ8QE7Tedh4MqNKhcrWXvaM1yJuDU",
  "key28": "2GATq3xT1vrEN5TAaBZ784GfzGkBYRVgX2BkLwLsPzgDLZV7kSssbGXHvWKCMGY9Ugey1dP963N3bm8DDCVmf4jP",
  "key29": "MUCaYktPRXGT3MTPyxTB83XEtYUk8YysAfQubVyLXsfppTmnqvmMLLMxWnTMwTc5PE99MqezHeskY3aP8NPLeTM",
  "key30": "5HUjCWSo8p5wj1iVbkN9vncZPLnApWxu6vYY3vZtmfQR6UehKz7tcdwTw1m84Fbe3mAHWenNDNboFxMeoEhFJCff",
  "key31": "3M1RiKKCX4sbTyAW8ztUm2oCWzjpD5eaotzdDHGhNsLV6zhBspS63cQmy9ghmDaL3rK5fcpgqMEErEkTFR3LPtV4",
  "key32": "y4tUnv1evyuB5VjBBp35JEQWPFHDmpA29v5oHjLKKQEZMKVRYruSv37ZP7tPWcbJ2WKKfsheHk9J4KJhiDxymAm",
  "key33": "2bZGTTSQFQgc86EkVhrMftVo9pJjbsbsMXW8gfcU3qUpY7k7T6s4JnGMuevaBAi971XKJ7sSq62ZFCjGwQsWHn6M",
  "key34": "2ns6ef2kRfCQMQyp3fCZmA4DLC7RdfzqswSGYfFQzvwoj7FEUfjeJzhpHDcsdSAqgDyXYXK3kiFt22PwPiRi7zeQ",
  "key35": "1eXfQETWWkF2XkBAD4USRLnW1XvkKb2pCJn25XduD2LjkRPz946iRntigNdxGYtGtGiUrBYZcWYxPUq5PTztVNp",
  "key36": "43WSUXKDDdmPDgyBHqqWkjxri9YQKTCnBNEFuiCbffmvP1ZR3wt6cnB7JvfSpgu5ks6EEdMUyNJ1G8rgxyjujAb7",
  "key37": "4AXsvd54SNEMCL42BDVQBwUedEmXt1kcAeUezrGUkkBry5pBwKvk6Ni9KLjr9vyb7WZArxqUv2P6fCYpbo62NeN1",
  "key38": "4tyZjgZ7Hhu57CDtCh2pGbM4YxRByHN2v1yEG7S1RntnmU4ahgjYHkFuqwVDXWjN6e4mCB74EFgMXa3sJg6vxLu3",
  "key39": "3mb8E78mNbokvkDkaGZJrUB8Ro4446AJKzfBtHXA9YL5tbbSo9gZYNTrsJz52TmJdifszrmKfakSSc9KFb7EA4yL",
  "key40": "3poNddkKSLQf74oqRRJcKUWFcwSTSorxeuHn75X2ggR2uRKZiDnFP1Dm3dHztQkTE74tH92eMJBdqsRPYq9LxXQE",
  "key41": "5on7Dz5LgnN88NRjVtQe4DeKosHudBh6JWacho8camYuDPUxu5K1miPuU7hD11NVisPeDaRHVoxmtNWZjtUWpDBb",
  "key42": "2jKsyy4ujLBEAGSUqZWyMeUJJdpXZCMAiEkeb97WrUEW1Rejimv46Rn4gX2eFASAWDedntX63AagE8Mr6Qssgwat",
  "key43": "38Jxyi2smw8wTat5GPFNnMZKVypVhTafKwWbPNCvwmGdPYfjdW5AUb5StPNnRNmFGvR5dntBMRD4yeNgjmSA6Agh",
  "key44": "3Y94XSZe86byikEEAp2tiXgs1cB8Wu2EtLBhJ5zsFvuKs3YBW21G2PRXLMg8Cj1iBNfJcbMzcv5jWPpZ6d5azS1o",
  "key45": "56EoWe8jX1cuXVxPN2owHZSnX9pwmLHzx5yXdK8Q2Ln9xH4UZJQZBRf6oiGQNzhvudZxKR7BX4WvQxMC9sEpmixg",
  "key46": "5eP5Zy2PpW2VFuvDDQuQ2yKpLGEDwUXohCr6MBXZPccPnRHHJGQus1s7kJNbZnGGKQogQNAk8S5YuU3vxcGaLcbF",
  "key47": "3MxHsW7P9ywj98HDW4BrXkszci2u5pZxSFrwjMNmzhSKY6w7S8F2iWWvb1AGhpwEkcW5Xr3YKaUZpoD4nmGmTmwP"
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
