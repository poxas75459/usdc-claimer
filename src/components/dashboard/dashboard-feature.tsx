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
    "BmcWRaGMjUoBsgSMfbecwkxT9zYq6ZQt1CF8QufTkF8ysyF9hcL86Bubm3BkUYgL6DMKddJceKWi9j774CiRpcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYnWgyVweBz2QT5JsL7oJVao5H4TMuUD2E1orWBnuQfVjAtr172hzHX625iAN9qgehjLGgXzGg1Tf6qVmcYFpgB",
  "key1": "3fuHqxxadFQ7vqQfhhUAtT8TAiHMHDUYbu9SMCs1arHymi5JpTDUJzbjEDXYYQPKFu8usAHaBsKSqYQXUZyfLSqN",
  "key2": "2m4DUrZVu91D3cNfhi8T2be3BbAxVnb93PXQYjGon4UhChE82nrEvygJ9AzMEnutJ4pZJs3N9mU64DpzjAgZDYpx",
  "key3": "3zPsda54SMktbzoSiNHGJVKRYujANCEhx8g3L1iZzH7ktXAqHhTWxLShVvRmX2iHuGpgqaAh4sSdx3pK4nVi5aJ",
  "key4": "pRCbthgJRLtaCNxxEvwkP3ykAGCVTaFALB5bwDznZcfyaPVi9NAfWVxAG33xbkXHDtqsJxZcaSRU4UzMCtNNmUy",
  "key5": "3LQEEmiuWEHTaDLRo9Qa2CfS2pPELUMMbNGaxwG2LDC7YmJGfdApUjnWu6RG37wQUAW1Tig4PkyVjQgRzuV7XEJf",
  "key6": "65PVhHN1mUarQQZ6jC1BDWdtHrSWHGfM3SJHRJ62s7vvnkJJx2xrXvubxHrBXD6XzizACNjCxrDfkDL769SPfpyF",
  "key7": "5U7Rfsf4S3HMHgeCHXf7iUSdnosjLPbhZQWFXr88amhy1t8t2BSHp7My5kjXUZzoEfkQrHM9KZZHJkYHCwN1tDH1",
  "key8": "5UsHEHmFQot7J7mYLduB9Z19bFLwyFB56FXxtnbytP7g8b2mbZ9Y2pZWxiiPuccDMgUZGzP4KisNNDyKA16m1WXY",
  "key9": "38yoix4b9nKqMcP8TZnPjw9eMw9FL5cTUiwNNdVbxY8CPok56L78oDuWYu5WYaGDgu1JpA1prukLX7S5g1V3ZmW2",
  "key10": "2S5KQNM1JXR8Kne3oMpziCLaW22tX4CyvrZaJvt3z1CEQok54cApCZBB3NXUFbFqby8gKVx6w7sGEg5F18ENW4V5",
  "key11": "4uSZKizbSw6i7qZAVVj5Df2zzMkEKwFHVZ47XsRHdHG4CXY6mxww2auGoLgKDBEXXLGxBiX9u3qex5sUHYGqbZvA",
  "key12": "3HkxCxfRpMar2cYdZ523GSCvDuQC1WrjZdQXqhgohVTe9mG5q6X1WyFPUDSex1P1G959pru4WGWWsx115eHzTzMk",
  "key13": "3U85C5YzQ42SDA8TpQfS8shJawzsXXYwx4aKkybXAyoGE8Z3C7zepqh5ynrd3ZNDduvc9CuiW9Y2PTEkGhm9HcXX",
  "key14": "2rVNNQYPhCRCzLFWyDarJCpQFymkCxmz2U33xdBPaB4Bah5L4ZzjCDV1XviqUVkYAufCsaCiy7ZngHA1nyjsmPBq",
  "key15": "4j16N2RnH5nn7UNvzYeLgVm55zJNerFvdrtbhXL6WCWEHyAACy6kqMrrVTv5Ws5RH8J3w2MJd9nSGQP8TGDcwhrw",
  "key16": "3212VJsh2jue9JwSqj9CiAb5ajeqi19JEy4Lv7vcy8Vztv1tznM6dVbc3RLsjmFA23T1dKQhAftUhQnwJEwk9pev",
  "key17": "5Qacx7X9cHToJeURekDpCd9wjLFcJ8Z2ixJv9k3PNeVKuEpAUosRc3uNeCcDnyviEJuikXJ5qNBXX4iXYisnN7Ek",
  "key18": "5StcxTgsgtsKJwBHn6i993bNkGzz1pYUyMUeK8JWVXWcY7CZFWUyQUSnX1mLJxMhVdLeEEu6qrLkc85REhYZVL5v",
  "key19": "2E5Y2z1RkaLVTee9nqi7rPjtXJ2GV2FS3qNiLb3RKZYzFJkP2p8DoMXqgSxxwdxUghZgwqF9fduK85mi64irc8EH",
  "key20": "2DLAndJcu3UgLWqEivdwZXYkwmWKJLsQVsCeNPmYiABvw1sZwDfYQZt4Ndx66qLxGMGcK6go3fqxuokjS7nJ8c3F",
  "key21": "GN1AqobqnJ4e4KWtqXbi7myBBE1sYsMZPJuF8WMJfoDgx2wwn3DUiNWBNuXssz9rmtQ2yYzBY8oYL7NyjRtLPkK",
  "key22": "4bUiiJwpHqQqy563yWwkey7m6crmV4bTzsw5tXdtKJHYqydpMnaGW1EUvBnUFGy8ivyPvGXfemhEbK58a2qHf9mu",
  "key23": "5Z6c22MeC6PUG9M6p3Kknm8d2W7G3j9YQpjJReDVWE9VTZmFnEYy7wbkRrFPFr939QHeeWNqwXxuKKR3sQLfn2FE",
  "key24": "2wn2pmWkjuzZGu9vGo86JEJRxjsNU3sbErKo4yopYGG8KMfkM6Wd91HmFVtsetMEhurdHRVY7pFxxGh2veiPSmJd",
  "key25": "r7Lak7tXacP1zbKCEuvj5W3RvuNj5inHJxQLAJMnAgy2DiBURPcqkKdkxnhyrtKaoremfhqQewUg4WaGVGRmJPM",
  "key26": "2CofowBHemzxe484ZQnJ6QWjjygj8cvWCjWfLyawLzTFboMgEAAUr7mYFESz3tg1BHw7VzdzcPG1bnLziNFskHWp",
  "key27": "3cabdnaTjUbhe4zVhURBqSGRbqJhKmpjCxsVMCEc9apVEECp8m3o9rEXcdkb2ozeHWQNjpL7c6JzPvEZPZ4VyVvy",
  "key28": "32SRnhWCddZSKoyRkojoVZMu7in1xNboxaWwnemnNfVz6J8WfDjcY9hQiD2nYMhDDwaPHjzu1FpdywWJLSWU7qzH",
  "key29": "fhog2cG5b1KML2fThaTdNQ8DdBAaLSNVdYMev7n7Fd5A3jVXQidnLt63UKyswzFp3BhsWxxbfJ45Q378473iQ8Z",
  "key30": "2xGUdt6w1cQ4HsJ6ehjozRo3HVZwk5cChch5rP7ooEhUTDjUeVJYvoiEyox4F1CjJLekiqPcntPgdRtNKoaZSsf6",
  "key31": "4dhpGrbuxuPf2tMPhX4GLd8nPRyKfqHd9W2jrKHXScREKjZFhpZF4Q6VDBKRkSzGKeEafMKtmzWzVd1UuvHhruLP",
  "key32": "2KrkUHwGwiBuKpkpx5seBcfieWxwbZ4zHybTZT52CCwejW23eRof6TWeaY1vBoZuWJPjHGeEnUfdaRraHxJZ5oQp",
  "key33": "3HS8tR1u1DcwV4XQ37ff4PaS9Lgx1R1Ug9cvWVaNFQ3xEwh45cethbGuUpLJiRz4FnyETyabynW9KwhgdFepsz8A",
  "key34": "3PXWcwwdPMCtV75SFov1nbLiBmtMdF5892QF1EcdGcw1yEV9RGo27NUd23dJJQnWkaxX6VuEqyoaW7fvir5K3Dan",
  "key35": "2dBxg6HkwZzMCGKFxFn6SmzURnufxCh8Ykj2748WwzjVPEe1eN3ZEyr5Xk2LjycAigKEgfZjP9rHVwReRkNyUJEu",
  "key36": "jaLtfAqoWDnXtPAYDRg9nJeAEC6xqciSecu3WiJHBRFkUPgGHzovAMRhcwC2m1Tpzuc6xaxgsiWUWo2UR2b8vwG",
  "key37": "38aqaqhx88oKk5Zjsm96JAedheSFj6bqKSexQCPHQWQLCzDn6FJECpwG1ZWadCarBK6qqz8AV7C89a8rdy5Hc2FT",
  "key38": "3TrbcCoB3peKTT9BXyNGVPReQMRZnJYMtPzcq8BH5V5NpeFAVTwpd5R5sFXX5zQHUEMQSHsvCjn1bcnerw9LjJNb",
  "key39": "4pqidDJESR8KZ4Gu6VXn8oXyKV914dwADS84yypRbaBt51fPJL41LAsCqCRpARicSbHPcTJ3YcopTp6hXKDdgdUN",
  "key40": "cgiWw7MY2sRL7hSgwVF5oftQvpSj9XfbAeSS2hBxiKzEp6EoWNbhkCPYg2Fg2DXDN6bFKGwauYo7UU7bPrNURfJ",
  "key41": "2JHtPTjfRQCY6R2FQpcs2tJiAg91ujiXHyUCXv8nN72rvZG6Mbc7gPjKtaF7prXHoDSCTzs7ppvQkQv5WC9nS5iX",
  "key42": "JgNDnFFVjPk7hiahFoAmMLKA4yCmmGwiq1BAU42pwLcW2Zc1VMurrpHypvnQMrZshARLfAn9twZik9MYwoPfn4x",
  "key43": "3H1mBhXydWmppVS4Pv59EDGK5iXf2Zi6qb5H1XzQ9vghKrCgnJM4urnwhYKRQYa2tCuPCE6ykxbF8W5vuYuwiqmy",
  "key44": "4XhTChT2qanPMKMPaRoJYLS6T4n5RjFrdh72tQyzM4dQKVb1xCEqjsRCLUMF3UG7DUUWbww7JCVpMiEe1zkMbHnp",
  "key45": "4ZHV6evN2z5fdcVyurGMnjezC1sHN4uAvWC4GXy6SBSkhjZRDq2M12jEumeGbiBQ7tjosyDYqrku9RrtH5YrwEyF",
  "key46": "4JZ2EMsYXcu2B38bG4cbgfnuNfJdUP4Z8tfsKLVVdrVmkmb544J9uoRXWGVuW6uUhSLjSftLUkibomU2zSUzaYQh",
  "key47": "3DdFSht3uuKNN4SZcE6xfDejakb29yTmrVudcPsQUuFPp6X6gds2dUkPf7RSjvBodKmUKnThtDHpoVhiEd8K46wM"
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
