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
    "2cFJdhYWxC5foGSsN7MEeTh4cBnnzZ8UujgT3onxxUnumx9dJCmxLUKhfVcyfMqpLXGrXUrHp8VD7eodXCNCS1Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBtjYDqPoY8MvpN3iCKaHBBnBSe1D4fQDuNoh65M9UXWPK46ygHFn3UAw9rcEeTyTmVBR3VYFKEe2LZbPy1vF2x",
  "key1": "6476Mw7WGV8PfXuaJkatuimuqrd9QQYWVFYbfobBPWHgc4sKfTpKdYSZiuxyEVctFMEAgqkFyt7dvfE9hZKFE6tx",
  "key2": "aJ1nLTF3tqJwA62Ss52pqNa1VPr1U9aDYzB8F7tsecUS9nfuVGuMmMKyh6A1rrLi15WZgqf1faaAwPnLZaHQZmL",
  "key3": "5PGuLTwNZwcrLSBvpwUxhEgLZLaYtiYCjZ3AaQcgP3KxLJwodBKCfb9h4GMDasPV9bHVLyRBNXFE8mAe4EcCkVZV",
  "key4": "2Cgf1wTwegG1JFmX8ezigCYf2GK4pjzftLRuSEmF3yDTer1y5XobR62DHstytMLhNhorn9asB6oj8XQMVcffZ5CG",
  "key5": "5rJYvcqvUPyFS293xtxxHoDbjP4cbyxbtMBukykDkdZyw5esrXJRgDBEUHqQM24a1YyQjFXxM9KZcY4EiJR6Q6Ud",
  "key6": "5pmjpVKXAUcs3oouwTwyMKV2Fo1fddo2pN4w2B8Mwu7PZcXjjirzvxsrPHfNCiomCgsJey9WimSFn6V439uNpixE",
  "key7": "5LB3XFWLsMJcMs2Xps1dczC2yDg7xrr8KeonR4pjBpcMMMwkqRAejePb86WkHkZUSkEFpQZ79XHvVw4peFgAfpTV",
  "key8": "2fnhU8Na3JXLgJxr4KeN3gXL5rTaaaNphZ4cwTX5Yy5KdpbABT1UYnaWQai58MBvJQmzYHfStTkgZCqf8sAu8G7j",
  "key9": "5pdKfiP55SRxvMBzMAPHQ4HxwiTPhMfqVBX3G8S8MH9DPgh2mj1PV95gcybgsrQLSu8wLBEeH26WrjZv78dxnbBX",
  "key10": "4LD3qynAQtVunn6daLuydcuWdMs97p7LCNKVtSahKJXCXq12FrpDMDTpVuWnXLz7z5cK28DspLgCiqUT8ZygwjWC",
  "key11": "3EoHdLThVyCzHg6cYd6zaEaoD9fknpWELqFMLyc2bBCRByU2T1t7jznd7DUtAfK1nD12SyzpP4kzZ5o7RkKe7r13",
  "key12": "25EjXAkk1WEvi588P62wQrnuyS2QD8NhFyPNAzfAzFH5QbNpmv4U8gQp9ZsdPKqUxc93XHKFQDfkW2Xaxs6aLtKP",
  "key13": "3bbUkaDxAmjDgevfx2ss6HZ937o84jyniPUes7scWg4XRim9FTekwPu4f4kj62JAZhcQGUwWHrHwTbYkcnFVNeaY",
  "key14": "2KCzM1fLLSvz283rhWEBqzWAMZmeVQ1kWmLKC4K6kbgt5nezwAA52iwwcJw6uBdSRW2Ka3v46QvTAEWe46rmQvaR",
  "key15": "5AKwnK9vTkxzPvLe9xX2jBtyd3egedRAeXJQbuRdMKz4AVhnioEevV9yfRHjSDRGKad5LKzQZh4GVvV2EhDXce3q",
  "key16": "36NqnoyEwiwixBsYrW6jLNTPVYMwt6RrSCwySGHt3BQirpowQ5u93DXgkXPveXkXW2YaDd6jKwLTCcW94W6Jzat4",
  "key17": "2rVqEJR6c2F96A3UV7MvPT2x2makU3wGCUR4WHjWXvJ5mpU1GNEexZ5SXmEkkvPqmAePjAMRuYhYv4fn5NCHYDhU",
  "key18": "29fse2MdP1eT6PEox5dwK55szi7bzj82PfwX9MBYAxhBhcXgf4MJXaCCYEorvYWTyAezUV238VNS5eUuEWFDA4TR",
  "key19": "2tkvyooJUkLcXiqDu4Lw1Fc6nwumjhKxLXrySwk9oUq3Va8RdfXX1PAqBMkvzMJceuq3qQxW5S81xoKotpDvscLu",
  "key20": "44FGh4J4FMx8MaTHQqpVsm3Ry48HsYN5C4bbArNRn4n9SjqBARDmYcXhxetEVTdV8poQeEgKMwiBR2hAXnNfxSU",
  "key21": "4is2yR2aPpNWG5CfXRomVqF2TP1UoJMZJ6AHJnKfkrNQdZdot1RUue2Loe6AeFyckmj2Gfbip3YxkKoHZ4j73BBS",
  "key22": "PBZCjGCYHqpgBsT4RrD4cPbneU6jMu3GXjffKUV2jwrhX3VQc4E76K8fayo71ShcqhdCKBobVKTMwgZVEYk9VmK",
  "key23": "3LP2JFZHL2FJbmnZ22JtEUuWDSCAviH19Ncb6Pp2YpYpvznyEvoX6ZLPgKQwVo8E3KphpgfsiCQTmKSa7qgTSrSb",
  "key24": "4dKdGZERhpsovDPxB4jufRCN9gEArNQbGJKG4R6GpiE6GS7dZz8JgeZCSoUvcWERQMTd3wG36KiY9VbewYGD31dw",
  "key25": "5VeWTFBFkJuEGVNfuBRFiU4bdTR6wt6suMpKzVAjmgzdstvz5dgQWR32hWCt58ZTe36RY6zn1YT6QbV6S31u653o",
  "key26": "5ZSVPrpsUHPecmz6DDKuJL78KQzt9So7NP4bhN6ATLLNzaUEJwWzwGJFHthgRQe6z2AkhDvnj95BhGda5MMAsDQ",
  "key27": "rmuLPr3rAwxS3F6Q8eSsQdKnxAiRi2f41ULNHjxawhho6ZdnUCU9RQY8DSRPy2oHojCA7AodhfcaCH7BbijoDuS",
  "key28": "4uxgU3ERdcXd3Ywy3i2ypAJgThgQ4hP7PT7zufN2CDqxj5iJjFnBLnS5JUFS4mDh21i49xiAZbbZuSBMT2AxmJ55",
  "key29": "g5iE2np2fz5v2vUZgrtS2a26ShChheXUfeyfXFFKFgn9Fpz9izwn7WTiVjXNG1ZNiXMDEsmsf7o7SPESK3JYKHt",
  "key30": "4FMS5f6Wt4z8H61iHhbQw6bxg7ae4Cvi7e1U5hDiwHtPsgmLfn9xcycwr7yFR5DMTvpqUvAq3auEwECVYmLLvuQE",
  "key31": "2Hw21BHM3JvwgL39fYQRx8aeuF5s7oDwc5PFqHC9MdqUtTnAMCASWdEqEvGHUJ1kqWaMSch5Jnkq9FSVt2zaTkfj",
  "key32": "3Wejrhp9nF5qEpzmTAk2FQkmZrVEdVRBE6NWTrMMYGNQPJEvAiugpNAiyBgS6RbegwVFUN1CZqbSsCFRyhbn6Dn5"
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
