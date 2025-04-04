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
    "4xi1cxYB9wPnEnuuXuAViMe8gAindtNStfbnWz8tRwqQ9LmkFpAEs3WJofSmH56i6RR6MZpDsqwWU6NT1s4i4aTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j12MrqqcgnMqhmWnKRR8dmXg5xYevC7onhUJcy1mh4RyL1rzoaqjDU1PFeokXw7YByqYCRtTs1iQEDbxsavwp6Y",
  "key1": "YHCDjBGuRpvNtKkv2XLXDvT8mqXRGLChegwrmCaUma3yuuArV4MAxVSayNDyUyw958vu1qD5fkifcs6PABJx2v9",
  "key2": "mbbzmurmMnSMEr4WpsU6YNTxxLRthDDqK6sa6K5JfKxEwrQ9fp3LdvtcyHwpH7LZAw9aWw7o15KV8eNLjHsK8mP",
  "key3": "5hbbuc5QTc46ZQGCDGRUTZBjjbHrPHhLrpA1BYvALxHdLqwUvxC7oL1rQzt25vKeHyuqhkdWTGVP7753gLoAN7XK",
  "key4": "26EPSjjXVmFEJGX6PhVa2fuzWVamK32er6DWtknp6fMtx9f6bZFXYxAifQSEeQWUjmqZQTUNuYwmr7BPPd8DNegN",
  "key5": "mhhjZfFEsQZF33FmUA3WnVM29Zaccqa2s2WfqfSeoFiN5ucfavNJta42UDbkyVJoJjz6WyD6V6XD9jcyiAjmEuC",
  "key6": "62NjsZscpjW6k2Ub9q7d23QjmbrMD8VKMx8pqZuf7HHJQazZXmW114ipmhzme2LxvWk5UC36pnrhrk5MHMnPa2Ss",
  "key7": "2ap5mcAbu6H53PcM9a4zu2YMksExbpNwcGjDkpHiPBBvZBb4Lk5enzXT6xw3cT9DoXCE9T9QcJ26scrotMNbo5X",
  "key8": "QJs2JAssBnr1EoFvu7MfDdL532ZAzTDaxRbLgGLfzrratYXZ6QfLZfA2Ns8kHFPkFi1EQ2UbJ3tCaJ6wBY8sSLS",
  "key9": "Zn5EVapGF6HJ93PhiAm8vxYohkrgfQwU5qVijwMrJXr2EekzXZrP6Nz6VRgWEFvWrjWPJsKLxkd1kkDLuXethJw",
  "key10": "233CNigo9yaTxfyDbNWFmxQrx1sveGrfmZHFfvgugRuRwTJ2nLrjXgJ6JtpNs2sFviwoJkmG4vh2ackEkzEi5M33",
  "key11": "25iphGtpC9AnxG3xmD3kKEzZ9dBE4kaqH5Z7T9jca4Gu89vfBsYHxpUN7CGvBWEzJBL7fQLvyMdezpwMWxzWU1qT",
  "key12": "4r46V9KhNiDTHqWP37Z6thXoXRnnthkQeTyvkbkMji5SkT6dnqdYRZBhGJW9bvTfs6Heiw7BsrWpLuCwqiZgAvKZ",
  "key13": "5ycNARq6a7YvNB4LbZiFjCBUHRxVgB3M7XZj94USFdq5czxumhvdtWhxawuDGKFKaL9whRgDZ1kz5Ktru2aovYra",
  "key14": "5vLtUcANkCavGAHquCHjyXazaV6LSUV9J2F1PV9jK2QX4dgZJv2bnK6ke3mXgeHA9Q33yEet1p9QWG8eW1f8842b",
  "key15": "3c7m97LeLPai8SJaA7evKMGxsgfFScxspvY5SCEJ1YVKuYHnLZ1gqh5EcKfRucrY3bdwb99p2QirX8Tnnz7qCJKj",
  "key16": "5JoKgKnx1dkhHVraczt22AdwQZiLJbdL1MBqGCbUmR96ubC3qEqxtnKcmz9T4LLMDhFMEGPKPFrvN8JhzvZrTPVo",
  "key17": "5eJ8NXMLzTh3PzNHBj1BGiEzey2Hu3ANHG18wDtgfeohyoeBj7FvzVwZvUF8nfcoYgCGKNKZrjA8LzFRZTCGE2hV",
  "key18": "2SJ5YLVHks8CTrG8mV4oYNgtKFDNFW4d12LWUD6Yp34AER339rMvxCSEkW9TNhKZCu7WXALrBKBahZq7Vb5XCv8r",
  "key19": "SGhE5SKgbiyBW9wycKHSxJYwBsjgvWvUncshtLCRjyA9QY86r2Bp19iK7ZJ8vmVXMasCSVxJwyUpzekUC7XDCeA",
  "key20": "2BaTT3xLj4j9nVgvxmdKezVpSgNopYjo5PMkQn9ofBzk6A1EW68sgdjcA9PmH7GAAnK9xngCsmEyuKPwGNT1fuEs",
  "key21": "k9kUc82oj2QGRnpjkhEVvUktwSynjQ8HpBzsop2FyqVQU7Gx94HEcGCpw82NHVf8uVDgChy3pnQNhou625NFjLo",
  "key22": "5kaQGh54kayyVpWTcXtemMs5VC9iN37gX1BdF35Mz32JQnNsUtQS1UGY98cyPyTvCb6sGV3sDnvL4qQ2CCcyVf4y",
  "key23": "2PfQLd2oGMtADHE7jL61kC3d4RWh7C8xqshQWz797Tth2ocktHFEVN7vEwuNmnmhCWx2hyQQLiNTua5FVtFKPbRt",
  "key24": "5QhVE1DndnpQsmzF6mwRZ1puZwzaMEN8G3m7zSEymBC2z9mnx3eWRXEa27QA68xoXEjotGFHz8ivBuPCEHzNBvtY",
  "key25": "44N3GkyC1vQTbwZ7LY315Su2wVasprn8RjuJETkmKuRWTF7FAXvFGmtsN2TBgSsX5FuaF1rMPsJhBQ85Nhkpn4tx",
  "key26": "474QxcFtFVhYeqZ21ym8vqDS4DY77ZohmSujFrHBhBT7PQywKBzZUYsLN5PCjPpUAXc35PutFxAQL2BBihE4vQ4B",
  "key27": "WE1SqAHE5LX71JAEKm83MM5QioomXiHM9Ac8paDJ8JQd4KXvoACwfXFWV3jYCWskBN1fw2Bmniewo91EoNkhdRr",
  "key28": "5QXK5FcC1TMcQFP5yvJWB5LncXdVGjKjKLahUHhBqFFhQNsfuHMAUPvboTDz5HKbbsmqouH3SZKWa4pw5W8FWqsU",
  "key29": "dy6heLugmPoa5MjcCRvYWPS5M6mi4WNZWFz1T6Ggx1hjijxq5Mg1L3C1rqyNFR8SUTku5ykjHGn6CtHYr69LPXR",
  "key30": "pnQLW7wp1Z8DPVF5xyTyHQkYzU6uD2oW9vnSkDDNQnYQzid4JcNHYLkMEgFr416ZponmDM4ywSB3LDUR5B95Sx3",
  "key31": "4RSNcXaavDHTHPvEtE4WAXStLoshQijxtUAWu65b2vJDcoqpqsWxwzGasFxXyLNs6YVHakXZQQpaXGw3k2UKj5LH"
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
