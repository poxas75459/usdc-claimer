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
    "i75btgiV4khBJQC2meMG9PHVvRC3y46Wd9MzAxCpqBf2T5jADVrJmqS97Fs4VN3feUa2NXCMo2iF65chUWJ5veh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soULxavxikXKKv43V6w2518rGKMEVxi34F5ZpqPk8iR1jKYm2gGaw5AZbR7oGLXzxinwwr4BaMAAs2mjj717smT",
  "key1": "hdi3pXtKDbcksEb7tnLNEZMkt8BhaASasG4iZnzUfaDa3MB5CB1fMJf35jsKTryFXYQqAYhGkDMXZhngw2cE8gP",
  "key2": "3md4r8wVBTxbmCQUAKuSDayqegAAxo6PWS6Af3bftq2FeZtJwELTm2TgzuEWcw2HbM9KDaYGRoquGJoFikHgGAmJ",
  "key3": "4nBDGRuRvCQr8UAL8KiAep4YS1DSH73hYN3QZM4QHjkdSK7tCJqRTv4gFLdYpnEQs1SQ22WcByWMmASkYGXR8Z6S",
  "key4": "47d3bDsaZzapwrJ7swZgcGwvhaYtcU3Gkpha3HZNRGeqZi84rFt8KUuLrwfu1Ep146ZibWyFDKyCgFh286qGavJr",
  "key5": "2YdjYxZtueEAHAd9VPScVV1wVzZgZvAeekm2Ki6kNZKeArBDwk4F32yiLQbme6wSxK6geAYEXhUPjDLrfRm5J1j5",
  "key6": "hYtEJCfZvhzDxi8EtHFY1VpRt4yZESUcxiuKrUcmSX2PgKYzBSAS9K7kNgqFhgSiCetFZKTjmbs9mVa66d9dVnM",
  "key7": "57Mk5KVoTc7yWf7rAVU9G3CUfpqo6cYbmhaKGUjtJsr2YF6jSB1udCFpUitSK5X36MKtaLRXnWzpiDYe3Gy21d2S",
  "key8": "4gPrLjnByqywsQMyQ5uk6fee2WmHLU1q3f4WhWAEnX1wya443xFsoYK4SJ9zJJaLa1NLK9qhNxSM9LPAhUA5acX9",
  "key9": "2jAcRTWPfwbwZUQKU6MJCmwRUN6c3YQ5GKxJj5jVS9CmQPqh6AHJUtPfQ4QZ3GYfWKo6gM3ipMMDgecHJXmg4HQX",
  "key10": "2iDqexQ9rW9SxhZ3MNrrY8bUAQJR98QdSKeKAnHUsj6nG6qfrd9qCjDNe4u3vdZmPyqwe6EZk26JDy4Ah72grZUu",
  "key11": "3h96QjVf24ho7bGFRPVUELRguuxuEbGyK3iJsjEXBXBg9N7xZfGkd1xtKmedEDDUoUdJfV9u51747kC4rhsCQ4AA",
  "key12": "4KWDt1BzVsUbDNYMmabuy5GcCzkaHVsPbxTyJJzyLsCzYmRyCbpgasaqw5aFrSXmnu2Qe7S7sKuSAw8NbC48QbEC",
  "key13": "4sV9bo1MzSWU9bcrYD2HivaYBPUqevdS8T1cc2Se9ccFJtCNj5kRyZa8uGCrkMBYLHreqNJ8VW8fdc6Ra13zLoez",
  "key14": "5D455FtV6aCb6ut2TwyjJ9pYHZsQWF5GFdAecWm89ZNaBagoy3saS56SsTHqgbmBqPyD8UcxEG4vuD9ipwpCnR8m",
  "key15": "SusHnMa85uA8LuuavzeaAjVdX6R6uXMvfBV5CugtctvtTiubUpD5wLQavyXQZQxCY4gJetkERc9iWh8SD9c6yK9",
  "key16": "kmNRMAcDokuZq8ZtJrYY7j3A6C1NdpDDhU4wApjJnsGsYeMcu8j9sSAAdiZDWUMerc5kdYGEa6mKnS6iTjPMXEZ",
  "key17": "c2pUqWkMSMVE9uV167dGqxKk3bcrm9d6v3QHyRTRQbtKot9i4sKnwLi1g6qgjBcp5daJwkxyimkCvdL8reL41Nz",
  "key18": "4w4WmzbKvsVvZa946fPz1uiWnuBdAcCzZJtRsHnpDM4RNKa6F7WAcSymhcZr1Fhe2Bj8iUvctbEfvH2Pvhkn2vNE",
  "key19": "4BVWid1hPM1yTTynM46LDJfobVNwjoV3yZ863G2s7MxPABeFLD9GtSk5e3zV8q99RHWMgjZXFeAS4ekmJHqDgmSi",
  "key20": "2f3BT91oynJDqbhzgtuvgPCJvHie4zVSQXjcAMtA7EvuoyF7PDnqqCt357kFaDi8HGacvfb9RrANRJdnW4jDa1A6",
  "key21": "45CFUpd4QJa4PwoZU5Tf8LcAJn954mxviYs1oT5yg6gSPJNbH5EjaN4iaWuNRGC7gULhLbCfZwrHzxEWinvjP9xd",
  "key22": "5y7oBPn2KxKRF8g8Lg8wkC1WMYRjzgg5tidEEjp4VEkM9qvgkDk2yYcbYgh6fr42kyF4oiVqC2RDsQiv8sChUVn",
  "key23": "63ZrMUu7oBBTBBwLMHKCrhjLJDLiN9NsLEWNBQpggsr9AHoze1uZbZPqVqzt6DE2J4GSmLfPRmNLM1MDMiKXYgMq",
  "key24": "4QabAA5rihLn5Qy2BfqkJpf6RvAg2dtMcN5xvAxWnjBeoZvrRHvviHUgv6jUSz2ddjR3m8tyF3VEh81aQWKcTW6b",
  "key25": "i6FSr2Lb2s41R5HrzMKZYsM9SpSnzPpjesmD4w1J28SfKDREJTwQU6SwYbQJvEqEveveN5nEVf3VYNeKPDRB8MQ",
  "key26": "2vXoLZuRsFA23Sq6uxe4Xx7e5fLqxrk38sbEJRbxxmZFodbkP1u69HiRM4E1wXHRPMoc1qR1W4oCm25XoiRZpGTu",
  "key27": "4wW4i14geJJaCfaeVKWdV1W2LhsqZBmLy9cRr5kYhsUmeQYwtePzYHWQQR4iUYopNepY2SSjXEFBwPwqtmG4t9D2",
  "key28": "3pKDmgkRESLHpREYEf1TD8t8bGF9yhZMS4LegoKfWwLRaB91sNFDvyL3d3QUpG3PaNfGLngdwKUiS2Hk7dQBJdpn",
  "key29": "3jZBY7XcAZ4HmuqnZE3CsZiKNdAc7zckKLSuMf1TCU6CscwsnhMm9VbyeJWdCZhuxy9eynagb2qru9bFaySe4cbV",
  "key30": "4vyKjmgNu7a4d5A6sFPW6owp5F5zTiPZJWVipTR2kfiFieKKEQRNBvq4ovZ2iuxRrB1So5fzZJWwejLBgwtTLjrV",
  "key31": "3AZhbGvvKvWdC6SdTvHFcvJzEXGF5FjiZMfnvjrphq5ANf1H4eoF5VxBBjSeaZ3D8PFmQY9KaGMuqho59A498Md2",
  "key32": "zeyid16tDmzRECcgsQ1kmSjmLAFGwf6NUD3eFEm5j9DApytEjJeZWSQbt7Kug7hGabdroDTtkwBq6pWafWHLmLM",
  "key33": "nmAcVRigH2yUWEsEezAcPEHo217hPgRU7SoAZjfUEDnP5ge4dhvs92F7kUMfhMB3dKC2p1kUSnYGRd4utBdR2ca",
  "key34": "4SmNJRjEeTthkPauxmyNq3ZmdEwpNfk8agxZAeW2AhC9YMzV5qhXNzqcmQ7Vg9L8EGnSfZZfUfM5Mfmxye647sqa",
  "key35": "5KD9cQoT152v1pFZsD2WCtqror2n4mdikafhRNpojCqergMEcfn5mbGHp7Lv5u3AS3CFLqe3EUfKVTmjgLrtn59z",
  "key36": "4CgJFHmqUgzKN5o8652NQGQXsMN1ey38XdrU8iDLZbDoKkyZaP7FkNeCSXqWzJFY2CgBgbBTnDUayiyfZRCRuHHB",
  "key37": "4oG3NwbPQBecDB3mLK4d1K9tt2s6pES6us7DH9fcKJseSA8xLYEVRc4QcMwKuZARC1KoYpGsc5T61GxvsXhf6BVY",
  "key38": "2DrY7Vgbg5uDnaLNgsQhEbJcny8Zkxab2f2NPDGHawhyAqQRojNLazr6wT1Qoz5TYJmges9Kt6Qgwtarm9YKyFBT",
  "key39": "5p4FaPx4d1itSmjR3yPwhfhTKqbSd5fZ2TAhtKagBc4ycrRWs2QrJbuukLpAd7nRjY6KcK9gFjg2kpZUguXh8P5x",
  "key40": "2yV6Z59JKxUhNhkba9vdXrGxbNVu231HPVZCAaz7oMzjwGbWwZe9rAAXCYtju42LvgXD3UGpNu61UMkzdQ3aGTgz",
  "key41": "vffLhErbNxtrdJxRGZVuSGxW1HcuUoLxoEjtQPH7hzq1Vsj5EgyRpWKBpnZLWbeZD1cbgAVwVopRiZBzrhki8u5",
  "key42": "3E3VDpTCvs9urT3UkLQT4F4WDSD3Mvo5TqPjwueG4c2eLjpkZRfhDT6ybaX14LZVRjCrUHuUkSBhpaffVNBiJJVW",
  "key43": "FjNx3sJejUS54qaFpchoKrdf86tBdaiHjyXsu3qdC9pBtefVA9fnaZ3kMTDZ7zj8fN19DQxGKCCnNn6yDAt1fvv",
  "key44": "221usVsG5PicfyD9yoVFtp2MTYY9CRESbZyUJCNEyX2HmzQbmFcusEzKcLWJwCPxrRMwNX8K2mgUULdyAh3gu6ku",
  "key45": "3HenvF6qd2FVQ2dM325H9zV5VGtbPjGF7TK93xyM7mmjxLSDxJxcziyng38nNeWXTrMQtFY5jX7n5E9kdbdqwQKU"
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
