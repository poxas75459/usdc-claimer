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
    "2wrmvUrYBct9VRbfECkmV546vC6c53qFK8UykBdgPF2snCpmQE8wfY5TwnLZW45S1K849EysD1mTUssMEyzBJC9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5juQ4mYr6ucc3LR81piPeezxiLDZy9s8oiCHUAst7CHWuQmwm6jAZymSuUMATzVqCsWNRMPUDdvasZLrPwkZGWoG",
  "key1": "49Ufhhv1TawDzYQwciPubThLFiZ7RBNFB3Pg7GMZWfvzHBgBrc21dcogJGtPDnFVvLUgwQiN4tM3fKLXzceL4Mr9",
  "key2": "2q21QVnunFDF9vYPhVaYhvXHgcnb1HDR77urUMhaeoBHsqZXgck47Mjqo9kqsgpBNgbp6GQaSXogowB6AXzrkEVc",
  "key3": "318UTrWTMjtMee3BH9Hz95PBN7MkRgPYk4DED3Bin8wCnFmsdrfzCFuUetx5xhESSDrigjcrJ8h1LGPq6esDjRWM",
  "key4": "3rvJLciEVotJvTpigvS5aGrmbsAnF5tWW9dVyQ6tFuE5xKemJqeTYK2PfAyJuSXDqQy39pRunBU2ePeS2eZLWnYo",
  "key5": "48UWonuHedTqnDAmowkDGao4i16oCfc3iup4kN2artpnHmfGzYKGcmQSWMXxSRdTu1BezdZnyp8rSChJ2fkGHuJx",
  "key6": "5s7F4PcirZ4GhBL7rKNpeUKN6MY9QpPcfspmTzkH1cEka3taVQe7WpvXrMM7cx1D61YLAd26MY2H5YykbBTj4jVc",
  "key7": "2u5dXExgZarWSna9ynutGRArGntUHdthh7czyekDqiYfGE5YhT1cNM772dLLKY6iLNkCwokApCNHxnX7jXGhhcwn",
  "key8": "4yNQfnrYjfkDFKK4ssNe6L76iir8i18U8gcCKMKk5NAxXh6QVwfkVrTKxzM2UUA18ykqTwMhpGFoS9yv1oU9Hntx",
  "key9": "5BGbZndhQRrCAhUb3D84Z3UUuRYn4HdUoJ7X7L671fyS3uYVKvH4pjsaZy1rr9kRTVyR4QAtUXiPVZZUifyJv8Kx",
  "key10": "4CSHnjZK2q552uZYQSBsSP92chfTCcXxiQFpKo8GLwmUQ2khsXEzKyd9wvGUwSdjTRzXsHLshFUSowCuNFs1MRcz",
  "key11": "3fQkh7oAzmdKmHYhFTWB62oBdQ9hMTTAfZBcBohn7UHroaEoPp1bAoGBeevJK8Xtg64iKjgwBvsJsGE8GEwkVDfL",
  "key12": "23Aubvr7isYGQVmuCVAy1i9o15QkUMq4A4x8AGAzarer5i3njjKhcAamP1JhaaFWdbA7fBQuvTRfQKLdocMxeaKB",
  "key13": "66h3UJXWr2UnyxZ7pxktHyumzEWPy8b9fkKddbQzvu4hTy3t7XXrpMxx86bNdf72pmUzkfaodGWF5f8ej3Yehs9o",
  "key14": "3d56uxXiDwNLMfsFfW3YBm6tNEVSzeqkt2FJce9jp7KawJ3Ss4QBnhhNRqLcCKtTwDZmgdJsBHCkEukLsXnL9tC4",
  "key15": "3XoXRMScdQ5LPw5PcmCvgWNR7CGQ8hVDEhrSNnxwDmA3FvRLS2H67WWrfj99rGhK5eThEwaG5nJxNV2vrQMQqMsR",
  "key16": "3tmc9uPZY2gjf1CxYz95sRC8nPt9HDBzNy3iyQqhHaLcschBZbgRiw8pzJxY6iotjxAGuy1NxHzU9co89aG8kWcy",
  "key17": "2WBws8UKpwocKp2Qu57BHbgfSKHv77x5ZQpYiQXHJn4GgRg6DhFp9qFDyLGbKwzwziEY8m2sqm1CRd7p8en8pgjh",
  "key18": "fw5o7JrjgnfJT87o9t7dQp9r3DJe9CrR3L3mBviTrV1h4rD52zEfUFszK6jqQyaznvgNsAVTq3azVaqMcddCtAi",
  "key19": "tfURaWmFWP6MrnrnMiRgzKb2ybdD6uiHrfR8B8QKxjFZL3Q15k1v95qucQPHrS15DkfjxDuEHLHoZmQirGFPniG",
  "key20": "5YJs2AtjPdxVxuRi9Jwk43QScAdgEsjm9q4DN1GYRk7AzEdrx4Q6AZqJU4Gx9XpoE4zA3PA4mnmiXKiFkCfDfAX3",
  "key21": "33buQHCQC2o7JDuDJiYGo5KkAUK6Y7YNMqTLp7rM2iBWcauQRa8tHs24Lk3U4FoFntTEduWuWMeBfkWpuCkAANUm",
  "key22": "4xPwtjYZVka62CQhrpqfw8MttYA7m8NaNdksqZhEMqcnpEHFp2LVW4LcgUAnDhPs3q4BDCZNbexbWQ2Acnf3JeVW",
  "key23": "n9kbZfmaNSuejmM5L9mEEyyz8qtEKyvNE2HRTA35Zu7S2am3fwVGr5Qjtayi2SQuH2jLcnWt2gUmwyBSYW5r31K",
  "key24": "4aTyHFaGMsbPWbiaFnQgmDdQg34K3xu4UmC7n4VJBpddQeaiF4WypbsVxi7BmW3ckNHxqoVyMHbTLWt7Ra2sEA5V",
  "key25": "2F5YETFu5c5P3tkexZaiyJdCvo5E7CZTg7r8FD9VC6ijNZ39VMfVmNHEqxFn2KiFCUnMm6JMUaz48JJa73NZYxhr",
  "key26": "8NddKvuhfwwN7wsZFMPKSw5ATp3c9vbEhETbEWfn4VgrW2UmDCa89FuRPwVSnBo9oq9yhwaoyLvHrbR87KNZrYe",
  "key27": "3BoMFmptT9SttHsfo7qYca3JfmwduDB2j8mARfKH5U62VVEyNyU6iXYZYhgk55LLDQNhGCuSRBu9Seyb79t5ATqp",
  "key28": "5U5e6qYVWdeXNM1R9fKkXZqTY5559d9dee6egjtSfKqbEvkFXy91B4D4ycJZde9roBBCcu7nZT7bCuoNVFRie5qp",
  "key29": "Kg4WXJaTQb7N94kz52gRXfurVpMZfnUtJE7i8SVVQcvb6kTkxqWALgkt94hasFH9N96NrHb26drLpT2G14YaDWt",
  "key30": "rSkU7tFZr2yxHCNVwn2nXtf6zRqcYgjUTqqUxU9MrSS3oD3dkUSgPK4uS1boJxqN22WjiZCWY3X17DDRufc8FxN",
  "key31": "2h1RDSWsAMcT5nQVNPoTrj3YTyQtXdLC54dSBfjmZxaW3JUA9jQBSTQzosyXbRShsw3hbmmzcaTNniaPPxE2AqBC",
  "key32": "5f2c4H3wAhVeySfj5tSoECg6c3ZTVv7etxJ2JBKqfWR6gFRczxSEksXpQA1AirH8FUyjEdKBuW9esQ7KE7AfgUxw",
  "key33": "47VQEpJeR7ZsVq1o94WCREU1Phqxk4TxgX7eybdE5dpyvCXYxGQnbFWc1UMWyGzaL59PqkwPB5kuvNe6Rs4NQvZE",
  "key34": "5d9m6s5GqeDCdiLMq5gfkXXXm67gNEsLuRKePma8KqzHZZ73K89JfwcQEQYCM3YbwLjfFjHhXZq77f9bcStWzjeH",
  "key35": "3U9koZnnwaByCZMnjdA3uQUjCQA7NodMJNXEPpL3BjFYahaPXqsDkAJz15mAJAVLcYcfR2T72YnoZTaG2UQzvbhj",
  "key36": "os8K77JzPEPEBCqqJeYQmqWLBizsHnmpPNkQptEBfW86EnHqZdskc2RZRXX9JGA6JkGFCVrKANiMnAXk9JVx61y",
  "key37": "2tZUgfjwGZPPyHCnGpofwV3trNvtia2fPfYidx48YE8vydma8Yd7H6D3yUFZ1B5bWfPqxXQr25z3hAeegXVdyh5E",
  "key38": "362srvyLWdaWK2XDZDdoRxxwACG74Mjery3MiDWG1GfSENML77CAamw3CarJhJAjWrBpKzK2ZXqrhxcgDpmJCvJ",
  "key39": "2gYBX8zkDYKcRumf2LUfrnMwNRrvtGUPwQEgvsN5nYyooNnJtEFuquG3hbAcgu6DFedY1cVZnTvdS2RPGqA9t8qK",
  "key40": "55SQ72i3TCpfmbQmQvJFgtHZ4vAP4bfJ19giKbESBTPtFZp6mhdAdN43f3gdknGEiQwqqaHZhS1sLamgGNPTR8VT",
  "key41": "57ri9W9bEQPJ6Ti6BumhyLe6VY39gqD3H5eJxjJSqtk6jxZs2SrCVW3a1hkZQkCGUGb7yZ5jK3Ui19ZVXyyyjhgC",
  "key42": "hCf1skEUJ5VH5MN6y6X55rdX4BwKeYsC34FZRVzsbefaaFWkx7KHWSBWyN2LJF95U2yYFJp44pDNb4tL1DRbQex",
  "key43": "ebDMjUzjNJ9jnRXR82RZit2spaEJLnq4REj5yeVCToWqTSTQFsFaii86854M8JukNuwwJM5td4reoCgiHkxiFuN",
  "key44": "4ubbnKLJ9VuKqdeUaDcD9JpwW5WTfWJ7SFQUr51hvz7qBSPn6j19baVGxZA87xwCxJZTMNey7kztyUazVcDAHib",
  "key45": "3spsyLcVEsJ72ssoXTYUH4bzMTU9CSYoCEWLn1LxdB4HMHbAydqxx3Qtog7qaCBRtkiN8rEJG5NHf3HtKUhVYJmc",
  "key46": "rC972e2B19j2iRV44DE4QZP7QFZ7opHMj44SvgrJry4SYxsceD5gzLdnttM6UcxDytvFU227Xs4NKxWSbDpBgum",
  "key47": "5Ya3VVvzzfJQm7kQ2fraX4WeXRfdb3VKosC3FXkGtqvDgxzypm7KLai2tMVkiJe9A9xuc7n6vUMQymXd4UJLRhws",
  "key48": "PLZnhiq18vTaoBbNWHoYxGNGhCy3vGW9dkorkJvkMNAddvjuzJM6jM8G37Dumr894d1chgbHPL2Baom3TZ5kgeG",
  "key49": "3gcWUyGz8hVf4VoTPmmUgrAN4RkcFpPDkcv4MM4z1RuqGVhir2iqH2KuKQrfwKV6FUEBxdQeagaLfzx8Yd99ztmz"
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
