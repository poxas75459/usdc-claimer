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
    "41yeCosaNP53mmGyhZhVWC59xHYw8gN3dDbMkUwtcjrz7BJUqsdPFnfFgtKwDk6uB5MuxTUuMW4yPAGJ7CeDXRaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqPiGph6sDMeDMxd68LJUrSonj41RjNFc3VsF1zLiKYB1iUX8aPpgvgg4Ufi1GMQk2qLd3J2rtfirbfpwe5izXC",
  "key1": "22MH3WUuQL8hL1QKGZVfcLgntHLoTrK9RXPGa2TYXN3NRS67ienqwC3FAiZpNo4xR2tDd77U6kEsWeTwCvwCd5nK",
  "key2": "2XH63RKvfm65EV2dxKdbsrqYx4x3SoKxgaWZGB13EskKzYyYsnJz3k3B7DpStiNjPoHpY7fVQXCYXbvbbtvSUgpN",
  "key3": "2qFYmCkkzhPdpZSKQsaQmSVtXuyxbQ68shH2WJ6STMxUkYbzkkrfAuMhhL6ck8okRD4ZY7LG9uMBLjGc4eoBk9dS",
  "key4": "WyqXcVQ8GuuyMAJ2c3hvLVqs3LLfWcPcQts5JVqk8K38zAQfJFw9EnRHeYH7cXWMjCrAUuLxgqMchSv6BcqcjEM",
  "key5": "5Yfcty1trXHvVnNgkY31uaQ8zNKcBUAQ7wbRehCF5bpuaijEcrwtNZ3tuseVZqFRHtABMdWyibzfqoV3qxDkTtQ3",
  "key6": "3NzMjEMBh6cxBC2Bm8sjCnjGUidPJbNEeYBL3RcAQUkxReoaK1c3qE2a4Fpq119jcjcRET69bTQbNFZDghsiaWzX",
  "key7": "2yB8n3KCMsYNqXRDmzMrfnqW8eczFkKQSZqD3BvAGyXb43k2fY32WhK1sJdpPYS3pjbb6gw21WCcnhoKoMNWFTq5",
  "key8": "D2FZhEZ4BbzsmJJL2zirLBhVfVYfcp7XCNkm8a7F9wF8stW545U4JcGsSPsx9UA5G4gT3fn6piamRCcAEJTJi81",
  "key9": "5rRXd6cqaJTctmSpeqYYt96E3X6kwsGLhefLVhfRVBVARuxJzZRh64zSATCXB4uysVySEePoRLQvn7LppmimS2wW",
  "key10": "3VqeQxuGf637WU8p5CTHiJMe7t1HMtEH4vyZwkA1CBohKigv15DCDmVpyMgJuBcbzhjoH8LRcGKwy2qxHCbUme8d",
  "key11": "2UQZexLF8MJFC1GQYBLxRx5SrnEacQ11c8Nq3Pv44KwR1B7UF3MdVzz1Cg2ZAn8EnjGVsTDr51ath5jvY165zzbi",
  "key12": "5C444L2UqotdCQ1JJVhLUFVU4892mxUg332MhU9y4sY5npzkxMgvLM58am68Mg6r9kW4xmyqgc7LPFBKHmEnGyNc",
  "key13": "375yLbocycCTHfWeSBVMFfRWSEib6URGmukHoMDy8NffXUV2YVb5Gx4RrZEaKS4B4vrj3Vh2vhFyTTJcFazVvYWh",
  "key14": "HhxX1tkDGqJmbsPygTZvsVMDaZumJt43jURiyAJE6aebGP4BjDtTxs5YFfHojvzB5RgR1yFCcJ9AnDJQcUor2oB",
  "key15": "2v4JF8UyFZcbvX4WkPnqLXPBzibHJqyF1Rtwv6MnX3QQWJThSkfSTJqF93Qhg8xViety3AyARdkzB13XZbmqc99d",
  "key16": "5rM3k6Kkpt8bYJ6Hy614ctfPYefFMPYcXiHmAYHH7LenSdGvf6TgyMPNp3Tj9Ay96gsdZZL4dsDLmJsKDxR9DNCo",
  "key17": "2d6HNLWZK3HtB2pyPo3yY9meVZ4NH92GxhXyV8RvBHtYnnymvhrxND7VhyJJomMRJkZBeZdFxirfogTEVfCzQHRD",
  "key18": "RZCGT7gvFm3N5onx9CygY6WRe2HDCEy5XHsZPJ2Vxyj53Wtv217SCxyiyF2JCThRU43Wzyj35KL3XcjmhwRYw8i",
  "key19": "4G5jMpdmmhoqZtJeZP8MjPBuSMJmeer3B8aK3yLPy5zgAYWWE4ysfQxD7AY2Xpg6FQfVMH1i8Brmf7aF1E5YwVqr",
  "key20": "4opEgyVmM8dZfsDegZaiH69i69SMXDS3HTagh9AdESdcdAVmbEqNxq6vvF8Mcdrwyv4cSvyH4a4ZGB4CJqC55b3t",
  "key21": "34WBWywfTAZTBAiUz3cP7d4vViJEuxjDZzmEyuraXtTnGyiS1FVMqfgj33zKPiT7Z4Tt1NBHarxMZmJ3cPUXXEmd",
  "key22": "kHagVD1GtHSsWZtqRJEuFBwue6J65U2j449Kjuh8uVKny4Tkua2FbxZV8UcU7TkEcg6n1UUwwP5tSepzUB1pCMj",
  "key23": "3CKYFu7XpsRGE6tURgbmtVSpSZLt1mdMqF8278FkZc6RiWnkfBmgaVJR5ZJ5Jv6MF2QL1Kh1pfrcDQWd2DP6ayoE",
  "key24": "5BmP6dux61ZFjRX9VG46QNenxpBQZRhACCEQZcQwm6NEBm4oiRjQh8bZaC6khUa3PD4MtSUsoFQ2FxoZVmWh8EbL",
  "key25": "3oQ1vGoaCsjdWpQwcmJE7AYDhTi4Fbi2exXJ7eqnWi3AVu7paGAjoJLKyxAauMQ5TdiApfVMb9U1pjuuo9w2Haxw"
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
