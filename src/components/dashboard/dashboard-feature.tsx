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
    "mGbYFR6wdED83PvZyp2tyRub7s15WkQNakKbsAVDRJo85B1qo4z2RvMgusU5fw2pBGGik9cZw3k4UN7zhXi7pTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndfnJKyzg2sE7c11ZLthEbnVgkQMa32etzPHhLEzFnFNiEeAsNte6d3dFP5FwRpNR2NhmCGWPvwCfctXTPS53hd",
  "key1": "4WdwguSt7y6Aywy9eifxbMYfxKjdLS9kFQdkua5bM8pgd56eWFPtL7DUacpPsLfedDQ5PeoBUMyZw9scxqMqn4KE",
  "key2": "vM9vvddauDNzAhPuGb3NYr6kSCMKZ4zzPf2JVtQPrSbFqzLRAeZ7BMdQca86RMzePFe1jasHBNdduhMmm7wFxyc",
  "key3": "3w4fdTXEzGJrfGNefCcz3wCMGXfixmFSstzMXJUgK6i2g71MbQwmuthsKmYbTsc8bVEEbb4zyQdxqcBJss9JJ8R6",
  "key4": "5yH4zq4RPR1uk8SQiXzS6F4LGkXdirHSubLM6AmAgmyXuxR7BG9y4b8m9e9np7cai7YN8vAnHXJvNJS3Rf95smMc",
  "key5": "L9dwAYytBoWitmm8PLsstghdUinUyfHd1EqnHMcfW1i6VHX5DcX1gDkPgrZ1eyg4MsT3PkAcwdJyXy9oPduEeWn",
  "key6": "2PBtBZtLyBPNXdG8aoJTpg69rQJn1497edXVWS6DzN6hfPJjHc4KFQqoaZCS1KrR52ZmjV85FxgxfCaLW1GPLMAT",
  "key7": "ftPijNfpv1FNEd5UAtauvV8FGcSKyppkunx1GfTddK8gM2tN6QvdCiykvBNmn2wLosdbfqBov45BBtqow9aMSha",
  "key8": "27o6y3NKCR2jsouTQ3Ed94aQeDq1za7dpb2ZYtzej3PAdrQK6z9eiNFVnXZCqAWzYvTbNeVzx43HStd9xmiz2GGW",
  "key9": "3tzC8vZvD3UXDSwMa6nnx4v6LMsQMbdYmJyYU1Hme7fYCcwZjxSF78PunL71wmGL2JSPRdFTYcP6gksJsLLxVF5u",
  "key10": "3AGjkQsoSTyxTqmtr2vUkbyw3KgdHDqPH3uTa7MbgzNrT21DTajzmRHR2PqRkDZFGUYSJBKQ389sdkcFXbdtEdYN",
  "key11": "3KCBvqBmrd6Hgqhx1DTgkYvH5VaMzgXt1Q7nwLjGLTpHRSiMHFno68raYxMsueNVYXR3jEoh7Cs9yrEqy6GUUFB9",
  "key12": "jXUEKjVGEhhEPi6hi3E8GkF9sVg6DY5S9jm2MGd7uMd6cAuUMyKzjnZLS9wrszySpnLBx7ujD92f4f1BtufTBzo",
  "key13": "2WyXmvrGHS8W3WPmvg8KJDc5w8Z9gaUBaNz7m7ozh9CoBBsroyp1zqpqGmZmRs6ayNWTTcLa5rNarAPjLSNT4oyR",
  "key14": "3RymTNY8kt6yMLRYNhRwkmvLKQBjuPmCM7RFa8X4nA6Ah9HaEdRYQXPES2NAhAtL8APxJB4fBr1jk1bSHPPyH2rF",
  "key15": "2khR1T6nHxmh1EjfUXmjtJdeGxVx9UVvdD5ZsCfKqB12EkFjDsxEmSBb18amq1VuihFdaJbXs8vbdBCqV4d9GKn9",
  "key16": "22QYpfjjo9MSYXseAg92p9cKpt9yYujW4T4qBhBrM4TpGenwMpsTZ7RZ6puxFYjUQHqmQDNnEWy2ZyVJpLmLB3rZ",
  "key17": "LBjZHC2uCB7YTNbd3oy7rpTD6aLBKtVFTKgeaEU4j4L9HjtV8Zdi8cLcTFzGZh3eJKduAErfsDRhU4PP9Wd15Dv",
  "key18": "3Su4n3sjD2EqEZLLXBTMuFnBoYreTNVMbhrTg7kU8tsYc9cUsTtURBwbiR5BAXy9Ar9XCGAUqcuZ7EzfamzoHVGZ",
  "key19": "cjvi8KThfo7zaBjPU86LJoH88fE36BBUc7ejCnW5q5FgQL71iABz9dNc1tbNav29GjHSKdsSHeuJQDtjYqJ33Eb",
  "key20": "2fwH8W76iQJczDMgg2g1j3qF3EMfEZuZVtvUsGNesWy9Cg8VHcb2ktLj1HzJvvtmEGdjNU3sdVSujjJNpefChNXw",
  "key21": "3SP5nr7ksWCuGRn3m4sWQ6vqpVyBVe4jGMuQFWefPgXTzyaJCTby1g4bzBBjhWdtni5jw5J4AZ9G2dwLvQqU3fHh",
  "key22": "2KGBtmr1z8KKfZ2MvzbrZusRV4m2SMae8BfGBQDQNPThuphfXonVDTEXpvtSTqUaA9r6Wnozf3mnSy7dfR7cKqQe",
  "key23": "2Jiiy3JRhN4wLdVYrnoi4T7PAoHWpxMqMyFcApwSeUe3XLoYtH9SfCwwYbm3fAipGWT49VayzboAxYZpNrWQJKag",
  "key24": "35HxSP1Av9qhLishq3jS4QGPXYoFYt4GP5kjy75gHW8xFbR9Ko2z13nCZT43MP5DgQzXnXfUjg7XQLLJ2pweCd7Y",
  "key25": "4rZuNixA45KvWa3EtQfdxn9bJ68vqU7BYKX6GSpmMjjdf6dN3bWmqMMd2rZv33tQZ4hrcKgDrw8jVQ4e8SpkW4vg",
  "key26": "nrW2DC456mA26XxfdM4nhFoWsPStxbpGQCD4BR7cetgogedLMHqoLHhmbpXN2VQy1niiBwJGmd9p2iWtV4THm7E",
  "key27": "2qEGDBU2JaKKrYJGvU2tkXcqkWBPLspBW1NP3Udz6B8gEDVMrtuV7R8yyixYt2bQXtSS48ttYbQLym2j85MhFEzP",
  "key28": "23rjjhyYrGgnLqnkWne2cNTNar2pVghEFcWr8bFQbgj554m656JScdTLPezaxGE7pucA9BhN6si8zB7avWsiZ6vv",
  "key29": "3rXF7JTLjbyji8u9kjX8ioPqKG9fTBiFRBw6adPvjBCmb2w72uBgjfP3iX9NRzaZ7EbwyKAB2MF6QB4ZdgW4DmbQ",
  "key30": "3ry5qqmBQz1dbkK9NcXwgApDZ77qJtAcR2nE4BfJCs53SqMPKa8Bjwc2hAXWErvF58beALn3VmFB1UFaVSrjAMjB",
  "key31": "5mXQqHwBEN3VwJqxidwppbSdPvPFZKqMeTHrvUpsgiwmuye5AaQZcx1YWZBYWiT8LWMfNTv4UBAf2qupMxnRsats",
  "key32": "4XvvpDj2GixR47rRtkmAWE8AtWoCD5BSvqVMH3DSUsae6LbP3efT7Qds4tTjwrR1B16TgpYnbGA3LsoKXwWikr28",
  "key33": "5eRpu6fqhHX4RmYuyxbnrsQ65LjDT6VvS7TYQHsSjNRrxo6Cw3qdmymUEcterGUaf5KaBKEhKMuaoxF8bNaUKLwo",
  "key34": "54TnthzDPsPzymhnciPf1Mt2b4rpfXow8EeDusSJfC4zJDqkPjpfhgM2Km9W81wXNAsoaTrPMygDLbQPFjA53Thr",
  "key35": "EC798UTdZPejHZeEaSmRRn19CAWipqt7aaWgq1UWfhm1MVyqPckNWgGVubCmBC83JpvmTgUh9r6nibqM5EgKnVr",
  "key36": "2N69y2a9857ocHz9fUEZq7q8rzKMmWfGjfFAXjzUvo8KfaudoGJkifrzNQdmeuRVc6oe9pMPT6pjjq5PwmofMd9x",
  "key37": "4PcNFCfYSxFrLHWdtbVdPf4Tiz16jVusUxNH6hwvA7pGdVEUAJAAr1JkPk4zSReeWjTQkNmAKUuCvphwnBdxBvFm",
  "key38": "4qakDBtF7FuqH4JSY4NAWgRMjECkg2MxSwj73LTdvN7WhvEdg1SaX2Rhvons2VdMdosY5pBJCJ31GcWuadvZVTJj",
  "key39": "61TSj4KcknteUSUoYeNxGmTKoHksAuJKDpygNzMByUsaDo8KK2BoGvPKTijBhZh8AepGw75YJCbvBabadCvVMYpy",
  "key40": "5mMaRHoryCpcK7hFUMSTu1BGqkBY5kB4AJSAhVJybMydhJNxfGLDAP5UzpzxrdDw7jQ6avESKbNLRkfEhMkchf3R",
  "key41": "3N7QMpSB8UYuN6SM6JLpS835RgS7pKaggyQbHsDKMJy42KfxL2Uv3TAEsNp83oSR8e68XwBAX4pxFXPbgLsBPkvC",
  "key42": "5izsABkDGp5HtKkvTKJUSfs69KeKG7Wmc1xDPzNaDEjwTNC674tCzCM5ZuQprzsFvZptM5r31kEfjt9Uf17CfPgZ",
  "key43": "3RLeCrCD9erKCpzCiVK559PHg5a189e4kQw7h2boKqmrKjDfyDpjjvWz26vuBgvctFqkjC31QPwnUn76EAW4QXjy",
  "key44": "2zWPRVrYr6QevphRy4zX1XENNFvn3AEEbLWbwDG7WhtoCNCKysSPruVVA8p271awVxTgTrJSw6kK59gMKnKfqRDV",
  "key45": "2p7XHVzahBLxb8WqGT72Ck6rMSWPfFc3EdvM46zcLsGFowioVNfK5PvFjS7PKXRuejYZQQiU4NspNfhv3wjhprDe"
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
