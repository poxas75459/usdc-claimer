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
    "3uH8FpbJucvaUd7s3wusdD7XMZJyvbB5dAgbCfhiZCJGc5iekfxyeqcvg4Zt1kP18GUv4doz8aQE5LLpyTDqetk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvFn9rTDwBwFAJxcrMQa53Nmm3eKPXQUEcRkZW1xicyW4zFdVoqWWX1MdgpypXGzASJpLvycpsL9osVcs3qwrxf",
  "key1": "5Ky77pQ9EtWF6C2kLZHqHiUxSDq7KrizJxsLUxxyUwvZ4Rrw9PcstBNZimVA49xShiBhGNtvcPBnW53Kr4MQdxJU",
  "key2": "5LrqsTcjVgjvaPaza6C8dH9kWb2J9y3sijJJ6Hueq6LPRd7avaKg2msK1xBAUXiUgrFRpF2YF8qy6kNZDqAazwFK",
  "key3": "MbJZCfqyMM51yHykRT9MM6y3XveJzBqz2yJ5XZK9cB4dJbNR2Qj5sEpMwUWUW5huf6HdMyuE4QVWvRryyh53Dxx",
  "key4": "263iL9pA8SjRtgYRcBEW3TtSyekYfPRwtTk5VfVm8R85LUhFShRfgcWLBxo6NStf1erMxDKQxUtjuXeskF1kdJmF",
  "key5": "4dp9QUpDehrarxp3oLBhREwd3fKcbpHJB54zz6bjuNpsjgcmiPH2jPo4XpixYAcuasaM4HhjoYssFxB6skdUM3K7",
  "key6": "4E3Yquzdrv7VGQhSkQWkCkwczK7uW8vepEsqDgZWBGTaCbwVqFDGv9tRYAnYQKeQYqYPjV95xwx5XML4wQzeEz7g",
  "key7": "3ApxLjbF4ScVf1yMZCw4o18mMTfbZ1AsM9D1K6HSGT1VFuQn7CWXMrMcKq6VYKWthJHJEuimHTrxfvYrUC4FqBKD",
  "key8": "5Yw8LLzwHUpqUVgRmLPGgqDJ4sZss66fSkVeGZKgZYYD1SVuWU747CBX4XXomFkV34osuzGsi8v92MDqbQqGratz",
  "key9": "R7rJD1M2pnsdSeEx5M6M73k9g21dooq1EpfKB75Y4657dyEipybZzBtciJN4nodFYJAZraQz3deod9k9JQjYWyG",
  "key10": "5nLL81Ntzy1N6GiENEdDoHgJfPV1NsCyrMUDKS9zCozEHeWYjN9BRh8mmbD3Z5bqyS26CFXHQygrxh3VuXpYiN4a",
  "key11": "66HGqvZ6dJ7Luz55VLMzeAZ78mkWz9Vbna6sBUBPaTKCErcRVRT1x9XpUEQxzuqjhRieyCiLWWkfhQ6AUUuYshhV",
  "key12": "39tEqSbByL6WeeWUqwAXFeWQv2umtKDrtWrDGPBGwmBnJgtjssTc6X5bSsZA7JdDzCNM1TSh5e1Lp7dzs8AzMh4N",
  "key13": "28jwxJtxmgSpt2zTggCtDR33GuvhXBobJcLwLdFTpBCXWdq78j2F2Ktkqu53suywvgL25oM7KDcrTvvgKhRTEa99",
  "key14": "4644PdXy58XR6FYzGfB7y8rQ6wWQp6bV9Pjn949EMdF4SuS7XzMHgkCHJaeVLcT13PRFrmVW2jsfwmrvAYtHHTvB",
  "key15": "3TpLC8uevmUoQ1MXAYLbnKz1y8xFE7d3exoyiecfZbrM6jSN1vDtkkztgyP1YuZYbzoUppVCaSr1v26i8JvPEAh",
  "key16": "3RtQqoeF8dcxLLw8x18ZwZpXJLaJgMU9dc1napxRktyJ1MPN4LZzqa8kSFkktkAp5sdKvp6N8WjBaJaozzbFpSAE",
  "key17": "2xp6u9TfuaLb6JBTxDp6kqFCuymsFJuSuik7E8Y2LEwhzpe4EMvC2mmo4LcmqntLsTa2nqb1whkg2Yewj2AAHEBS",
  "key18": "2A9VqAuv5o9pgox1SqKxpPSa3bwafR23PwgCv95LdpDmxUwoKYgAoDzWGTG9ebKKGRiEJTDExt22g27tGZzStb9a",
  "key19": "5QvgJq6K65eZT6ouUxUMeurzWCcMdxktyo1pSD9naQSzw8TeX13zoxrE3gSh9scSPco3Xi8rLNu7J6j3Ea2m75YV",
  "key20": "61csRp83xPrJT5GUrEvEufxb5NsLh58AgJMjGGEx4j1Z51jJaW92q1FmD6b4fGmrSDE2J2LjmbgETVooi4ALkcrF",
  "key21": "LVNXhmGCvqhPsoBzyFzGW8VQAKKXvMqEmjz3xoBByazT6ZPtEDoP4XUJcFo4qFMRncGCzM6QAeUuXByy6SPW2Jk",
  "key22": "osSweQMAH42JjAUiTPWsj7EhJd5HiTtf1HqKKrbDGhmKTvt5jJii6LFAQaqLDBjWr8MSRGNL9W7eufi3Qsv3fsU",
  "key23": "5fkzgDpgzS4ikYAYeAdJELH2qtQEpwFzPsS77TvzPKVhhEaSddCAJJrn9tZuUGau2NAATMjcBZZ6ykxvKgghFD4B",
  "key24": "3r7Lqv2LCKb9eRNZXTaRDXRvFYs33kRiK2RSpRhWefM6tJyXc3mymiGkSydxUfVwJMTKa8yN5GoKNYjFCLcYvfkD",
  "key25": "e4uVUsSFLKLWQk7N6KTH8GeCzhyfZRAwtqwhZsh9ESqzAdyDjqDZ3cVtSR4QhnpknC5Mn3zXhJVZJLXcuUDbD8n",
  "key26": "4C2gsDb8Gy2baohMSEuaERmk5Ab2h7UhzuJr9ck2kQ4RoB9vHioAHTuLgLJtiRyJuNPSisk3H9bgkqwiSt4uirp",
  "key27": "3aPi78artyAoaTnRdi3VgWsKoECue9E7nNuwJGstR3gCEZejinzGH4gj1LgD6cF4PG7yTFkHyHyNVauC4qm3XrHX",
  "key28": "27N7G2ZMEfANCm34RcD1v7o5mR8nTGRoNNUFvkgQXg7uAsGNWMgvc5i5B26FwZT5pgEHFnLWHM4CB1fJcSe9iXhs",
  "key29": "3UwqesizzpzW2vnJr5PVHhbwjn75a4n78sSmWxAXgDzmzak2Hn9aVGaq6TSqKnVVqwYKkUs2qhHwCPPHEbcHctQ1",
  "key30": "wiVvM6m7s15cB1bztdhy2oB83QfwJbsWppW3WmWBnVbLt2Kn7KdYHaVn8yF3n6TQRxqxUQyJ8EP5xTwWyDLet8Z",
  "key31": "2J6PmsJtekdovUQVaCEkj3UuyPYHLuuUA9B2oFcsKTUKY68bFsa2ukP72FQfweptyt2ZFSgbTXKqswbUpTPT6hTe",
  "key32": "2Wk2zLSYijGfaNst614PndQH5pRQrfdGNNTxzqoo8ixqjdvxk7scnW6Zq3saLosJ85Fdsh93wT7KC6QB5Ttnfo3A",
  "key33": "4NqGk2uzNZNuPmiiHwFYkkpMtVscR5Xn3rVNKNnrQfE9dgb3cGCqQVVVR8f5eyqj2SP5AFD8asgAYufj1vY5e8LP",
  "key34": "2sBvsHmVZrt6LrRkhZGD3nyxq4Qt3kzJ2UTEvBaScA9mScGjCXkMb3Tyb7e1573ri2jWHMEKNLdok3uRCbiDQhRQ",
  "key35": "3Kn1Bt5CyqsxUQFwPCquUTF7ki7ftg4z2CeNC6UnW5L1EwKfaxw2FLatRaVqzaogezxGLJAwpvrxJFzXKCYfd4BK",
  "key36": "kt1hXoyUnRE1xgYiZY5mjUnCGQ5MR2wZhkGMBg8p9h1kpYnULCbUu1dZe5p6yone8E6dwrvoLoFEVLHmoPzxdtz",
  "key37": "2W6MxcXJoEQFkdcmttapadzuuPh5EF7xeaRqBzim7S2AeJfpLCB6VmaDfV7JNubGBEJ4uTJ82Y1N78sq3KzrDKzf",
  "key38": "9F6swGiPq4zkvRWM8sKnxskrG7nwGTJnbUJZVnuCWGBcVcVtB9EqGBkANZDLCc5eyGo1omdURpu16Va7Ewu9PPZ",
  "key39": "DcnPQwtnFqa59vZi9gm5edYUab9hkKyB7JaJpNzSxJsN2aSgWa4KLCL868zUsur8UcrzWaK71YEm6NBoqgu9HV6",
  "key40": "64aDm64Lz13uWH1Ww6MaEvnZ9yoFzizoEyNBVWQUkyVjZYFJds5hGfZJKzY7NrbeuMTsQ86k1wrJPLukzLqKHjrC",
  "key41": "5RtigyYzurzD5cwwURqPnpTtKDw34pA1J5HBCrCk4sUKVaGvvSNUeLUgc3F8Ns3nFFqVcHQH8FUCrGe93jLQveLZ",
  "key42": "4PA9UjcNYT1xa1UFakd8mZQK3c1hwevLD2ck9fgmbNRqXCqTvzrM6RtjPEQgsUNYXQqr6Kn7YKzMBqG7zZ79fFb",
  "key43": "5bXcDhaZahs1dfs2NLk5NaNG2dminY8PWjzkk8m51exdYvAVya5kbjS39EW5P7AYRi9T9bJt8N6JZ9NFv48A9v6y",
  "key44": "zdjtv1Qezc8282HFZkWkf6siXpmFPTQzipvmHWcoGJ9hYb1zwVM8brYetCfigFAcrWtidVNkvqmmvaA1P172RfS",
  "key45": "53QAV4QExdDYcrcBJtp3oHDxevDJVwbwNWPhbwvLtkGUsS1KnhMSBViFrJugGjYg93pGKtuQ8fpLE3sTMobCYeYi",
  "key46": "4i9z7fmdCzm57B8JEFqHHCV5jDPQjFVUGZcQqysPeGz9yB6zwQvobAMYiupLPo4yMQhz7XRoP6uzuMiggbDehzjQ",
  "key47": "53xJhFeB54MCgjAzoCne9XBe8MLpBk32vmAYQeUTdozhTEgk47RivYmKENyY9ouAZvbqD96s21f2Gn4PedtDHN9M",
  "key48": "4GwXn3uK1TDMsYWJ4gaKG3PPpjPVXiLMPnEBLmNxCgWwHmDqFpDX3vPgzjsLdeZjp5gyWv3pTNvauhcNwd9EnjNC"
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
