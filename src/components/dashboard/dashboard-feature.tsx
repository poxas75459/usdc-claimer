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
    "nJ2DpQ5gBjN5W3PUXDfgvnM2dosCxdXZV4MST5CYYy6NaoQWaeR3mVWzG3PS8sDtCoPrputcuEVuWuJCXZem6Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttdAdfb5i5CUD2ux9qojTwAmcVmTNkHovRyiH71knYdVN7cFEVevhJ4UtMHHLEUvKvi5iYjESqa9nw5Ar5ULV2T",
  "key1": "Ua8nPPgAZm7XjUnnw2e8kMtntooWCJhJ5FSbM8sQZGbSeNHZJYAmdLXh9K6QQHBx3Zyf4nApZqVzgVYPPdeotmM",
  "key2": "3xTwJhUcJCMkTPmwBgnknjfdKsUAXTqcCNbdGHs3evzSeYD8WXhCyqv49YwoLmXT48x1jFChCzegim1RuThJ8JVr",
  "key3": "m37L7c5Zzm7wvvEkzbygQihEL7qtnXuTjBPbWPe5tAU5BH9Ft44W2RFeQ38aZYLMbhotKufaj6LvDqb4onvfebE",
  "key4": "K3g3zfbiavHM3xWwVPBSMwsQB7ka3EabogJZiovJnjHuqnq3n9G61FCEa35z2LZSGNhGvYmKaf4Egr27cSeHDGW",
  "key5": "2K1cL7yvFQmipnfgsVdEfiks2uAAB73WQkPimhDq9We3rps6JHBjkDxhHfP4aiZBF69fWanrkVGsSDMRTaxjGjXv",
  "key6": "43JJosZPJjWLtVyCTCurv1zkcSNdjFCeLQLqQkg976FzrQftf8QB555CrcmmYAC481G4sdyP7M1idgGoT5SLZ75K",
  "key7": "jn16NVZPQd8wRPnjutgsCMDRys15GX98FmuYF13GBuzYzLyQRYt8h5r7sUnKA4Qjhu49MQiB3QDhCNa2vzbfErP",
  "key8": "3vrNsXsWgk1P2bp7HhrTCGpWYSJoVjJHDn4w2VSpQ8rTWe2Y8q7nTR6hKAPDesQTEJ6dgCiciuY86PYFuZ7DHzxU",
  "key9": "4oSRC3fVjGe5Qv31M9Wub1Zxdr3iDxwb11rwRVSDoJ5j3Czq66KvSdJFaHnYJGrgERC4yVUJRSifQGkLdxGM7LYz",
  "key10": "3BXqFTwNaWbXuVPa9FsKwbAyP1hcGJZfZopiEiDq2PsbimFydjnB7iYiZu5tH78Pvt9CZizMNuvzykaDkwgrUvJR",
  "key11": "csdpN5wkXZ8UKp6NRtoPxfUqpESidtpMtnXe5oXo83H16itki55sVZTGrL5Sf3SUa94w9kPjfr5xJ199NZNF5nT",
  "key12": "ro3VzKaFR1watDbrxW8C4GPW9vYkpKXyWehSNS1Kzvbxz6stc3NFKFn1PRcoWvUnKoSiP8DSsz7A4MXuLmiqSxQ",
  "key13": "2YxMrKDyXF9KASoTUaShpWHLZYx5ZPtA2CmnJeGQcxEu15s9fgZNTZ6eejXme7vWNbX4YaQk8mzsXmdmk3nBRCZx",
  "key14": "3yp4qmuvijgvX7KSSHZ7bsVqeiJCE8DsdNbYBPSWtCS1WAU9T78Aj7XcGyy9g38PppRxUeX95ssfVWA5qyqPjTau",
  "key15": "5LgnGtCH6E2zv1qkS28oJabEnjtz1CByGBUjgEJxEFNFpL6PmEMK9RNCkiw2QuFZYwPz46HXSCfkBzKPUtFk2U9E",
  "key16": "aq4wkxzw6oVWh8CA3bjuPR1ueQCCwk7XnBVXkn9LghsS6NPNwYDDex9zdGpmMZtBJn3FVX8vUagdRCHo5yzPBbd",
  "key17": "3YHZcTj92L4eSTfvnu3a77dhxXiSdv3qErJwXVkMy8WmzURBfqTZdf8G5Veuh66bxShoeY9vSXnWD6ssWPfGx8Vr",
  "key18": "rBQxQLoqZ5dV2Gzx1Maf7QhUCXFRCJgiYJA58vS98DfZFpdDAMNx8wiSSKQPf9A929LiNNeAGnyzSqUTuFb87m8",
  "key19": "3744X7V1juDYXfjZpkNuRVZa7B8boj35G2qhoZX4MA3RxBVfUH4n29p5UTot3kiTEjb9fQTxGtztPwdGoi9tjbzD",
  "key20": "8DdxuXXmnA2TPTqSEY8JXec35JPonsy8t9xVfkbmqgKGfVwbnRYH5HHZ2k1pyKCxzQoeDUihw6eJTPWk5Xunoos",
  "key21": "4jfiwJwcWUXZivdkJxj9RquiYnBywXZ8EmdrejrgSCLMoZdKwrEcfd92Yk1s4diSNEY9p9XvSKw7sPxxnYVWLmix",
  "key22": "3yiEq7omAaCKn8pRSeEswTWHos3k8uuB4fCv46Rn4vVKtCVdfsGkpGcuZFMCHWVBMzfz2Y9fiaicgADuMz7sPZRD",
  "key23": "3hZQf4xmyuyfurtnD8HTfp1AEDAwJTjYcDaYrNwykkH4yUJL4HGpDgR2RejTNxNjnewTgNHJkVnKUuvy5PgYQWpk",
  "key24": "LvcUQo1Bv1ZYW58BbtfiLsEwzBCRnD6DKBMEpyWx5cw4CCLi3jidqtCoQ5MjZ5SEzHZSGeZ1dvzbQ62chUeczmV",
  "key25": "3q4oyoR2u9JFa2LbL99jZFi4fmvkLL9dJDQ4ntLwnTcAiQTJgSTMsevz93f2HFG3avzTAatyWtbPh3ZwqveiDLaW",
  "key26": "21T9sdpwRb6LCZ5bhqNNJ8VSabKW331nn6w4rUnTksYcsaZFVziMwCREm3wXCnK9Jpc1dJw6VhNK5ZYQ48VuTmyE",
  "key27": "3MBn4prH1QMSsH3n1iQHyG4Sg6gQmA8fymemzgMjw9t3gYZsTZPpN4gMEZoGNpWxs4D8Gw2B9o6zEauRefsDDMG",
  "key28": "4Tw5sD78GTwpRTks2biXoWW8g1Xsnto9v2bxZmHHhToXS4XnPxFHbii4D7CHuM3swVfWzNTaktUyuDJ16FZ12pEz",
  "key29": "53Y2vk5e9LcTDoQX9E6NH76QLbjLZPMF1rEcu3ZwqvW8wrTcbMq5rDZdY9tGA5vCiu63qeU3FS5YM2aPcb6r2AQg",
  "key30": "4AEuhomTz6CswcTTFf4Dh5PB7JkqEkqYDh5j65LoGRK16FQiUp3DBCCP4MgTas8CscLn8paV9a56bD5Eu1fsj18j",
  "key31": "2unhS2FhVW6PReRXQRUD9XKfZLYMaDTSg6DvoGfxrqVeUDuSadHXYn9q8RHXD1qDo5vUXsyD3QTDgAzB3h3UueMa",
  "key32": "4zLrDE1AEj13XWKRJdLU85CZqn61eTjwM6UWWq2YZL9Yem5rqNown824PhEaLzLyoFaJBHMFT61iXmvPjKDsfc2E",
  "key33": "VtYfppqKgrYZqxXM5GcrQg9CVdcxamw1tg6eaVVcsYaW3ohF8jDGvUjMiuyDQBDmV6TQKNhgZoFZ5T8TJiJSHK4",
  "key34": "5fcdoZ2GSSR1SPBcMuVTSri3TGY2Cv9Q75PJjZ2EuziCDXV8yZuPxdaeKAf4T1eVgMvhv1EEgiKUy9wt4Za6gUib",
  "key35": "3QvPVbmbtjswCygdo7JCJ34hwLf3yLRqQUYGxbVSBbiaikC2ASgLs6MHpSeZTCTuj6sp6ify9UTzaizJZpQxukJV",
  "key36": "5qp6YH2jf2VZgkTYSAxLif6rfhCPTzxATYkAe6LXNYnpJ5q5ajFeaaUHUCezGswETM2HWPwvH9JqMJ53ybTYYQEz",
  "key37": "zxrYkX1B2MgpkWnLrGPiDprurw2sKvaJ4qC97pEGiZZcdWEB1MzP7xH79JXptELZcvkn1GoDWCw3BBYkPcr4e1y",
  "key38": "4wCnc1qc4wZ17rzGemK7F9kbSWqmNosKVbpQA8vTogxLdx2h3MzdPnqmEdMxqXkBdqhK8ftVUPLDgK1c3trgUN6X",
  "key39": "62UZizjxvof859yDf7haHtmYtLCgv8FjeiBBnUjTiYbKC7aBd9bSpMoCUK4WwfpZ2QixFnKSMHUpWfr9YUmxtKC5",
  "key40": "3wtkCqanvyrnRNZAWQMtrivKcXb4YWXNSpwuXazNA7JFG23FRjYVR9mBsenhTytQsVbYdhBUDHEjzJAidaB8KaSE",
  "key41": "3oH3JEx3X9oPqBtiL7s4yyKEH1z5vwo8MQhNJvM77DJVDB3nVgQ9oczro3Hj4VAqvMDuNqmT8K3t55TDVwHLJCfk",
  "key42": "RxuKRYYy5HY13vwHqo7y5GEUHc2eBFrJYRsFWg7oYjVQzMCdWwFjdAaHtbL1EFuE2aMYKtaem8dGr1YpaBhZBYz",
  "key43": "38m1hhnWq3jFssDrf8inoier55Q6f6avRW7eJZDSjxWnsnfVJ2evBSW3mLYnenF3UitPy95J2P88uU8k4wxdMWjF",
  "key44": "3wNxkY3BL2uJ8asCvqRgyYqnFAYqAJ19KAFpgAnT9JaFpruEFuGN52TYwAnhNuEqkXsUp6iZgDjAeSUxmiMURt7P"
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
