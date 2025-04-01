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
    "3cBBvWWZz7RmhqZkSU8Rrc2pLebPft8vpPWnpgFf6k27U2oqHxjezmjycYMt6oSpbSR4QuQJi3sKgtg8XWrfWiFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbq4iUmJh3NmEpD1bugHUr7Uj4aBobvDCR3zgRNjYKYkqT3EF8ngXv418aeYS7hGqEseF6foF4uD5stQ2UoWEWz",
  "key1": "3i7KdNzxMEvfvWyongz6aHAPka6Nqr5x4Mdm8cSdu1etnuecgfgseuDBcSox5Ltzr5UXyjpr4xhYfYtmWex2RfqM",
  "key2": "aYjkS2VZNgLvZz5otrGTeDBVPRCetJQRn7t7ts2M2eSXXvVq2rw3FxVeevZ2aLBrQ8nSYoPNaTJyYmaY7yvNN5f",
  "key3": "519zHBJKiFqEp47TFcE6TEuNUGZJkwRFsAEz3tdummo7dRtiPW5kD82sQMKDEHmsDxwmGhH82wa7Jp4RVkpAw5XA",
  "key4": "43AxyvBzfxVRJnTPo6bbCy6dxwtWhTe1h4ndbTWiwAkKL9ZxgRb5Pc4RLgYMs1w2SR4DocWcFjEcaff349yCqu9u",
  "key5": "2Bsf1NYRyg7Wk7AQWDrzQkhb5su6EyPZ9SJn9xAiDKyqSYRo5iBxA9B5riCwdL84Fs1SV86m7aQpCD2cFyRYnDaE",
  "key6": "3xpUcg4RTQFWUhD7FwA8giCJ3uSSxQph1AZGYAToEdDTGiT3Ge5SeobraqkxC66nGSaZroCxjXmt2NQLt6nbNmZs",
  "key7": "n6j3W2y5Vb2RqvxfYmo3EMh3D3g18NZyxpFiWKzbbfuerWD4tHCPS2ZjUmKzx8oFYpBeN51E5tqoSfQoJ4aP6iA",
  "key8": "4ogACd24ZhFtjQuqfZctYhwohi5mVS17r9PnsXAFS2grBw9QHtsV9ZA7t2NvV5sJEymbXmtcowy6nCsVWdSVosyZ",
  "key9": "4QChbTZwxMYhieop4wkZvPJMQqL6Tw52SnM1h2BCvb71KqyjpvxUDcpfBhinhkgoNjMyEnuEivMv5VZqWhi7P3cm",
  "key10": "2CQtGCth31iGv8UgxHaHjy3JkT6TjbSsTHcaGaZBWjT8xDoHKKeLBDAdghKkCu55zqhb6an7zX3G3wmHcks5Luax",
  "key11": "cyG1epQXCiEPmNfyTvvux7m2pjP3fn8bP6CiUUUzGWqNJ1J8D3Tt6JKbrWAvs8WXJ3CT9FpdQGWHhZDJg8AgtCk",
  "key12": "24dhs4qRX24e6Gb8Ks8GhjFq4UQ4F3n1K59CCsHtg3DqJSMiZyZ92iBQqd7SR5CG86Ewb5a4fRuxMsrrh2xT1Fu1",
  "key13": "4vwTbCR9jCKC1Dc6TwYoFZXZ7kFe9RiFpB4gAV1z1daYjDBHvnrJzfQCe5HjjcZJ2pthqUebEQtXzDBqoLBnTRAP",
  "key14": "3R6iESNoi7qZCrSq7RzVSRrCZj65po6dDeDeSSL8rY4y2L2X1MyiTMCc6YhH3CdKa6zML2PCN1W5uhagRmP6L5FK",
  "key15": "2NEqSRfooUpXnBeWGrvvg5mMVP3X3XF9cjLnWxk89X5r7JW2JtSbpg7p7xaNBEYvGR91FMHzsgPCq7zcvyw8dFQo",
  "key16": "5Jshp2Moq6X3EXGNxUke4NzrLbmQNW5F5mzP1ziELPoFJwAtsxaR677zyonH6Pi3R6agLsKLLJsH6cEnaZDepya5",
  "key17": "2AMULWVAYsKb7XaCgvsjaKP7ptUGMXRqYcNgHyR6xu3Phpk2y9HnLsCmdcjKSypz8xiEQMy17aDpJPkBsWobDQaF",
  "key18": "5zKzpUgMmxW9DBwJaScbtQGMHXtgeCwZm7rrJQkT5dwQbKEMLZ7mkNJVvZJ6LKiKpgq1KrVw8PAUHPqEcGAmDoJo",
  "key19": "e8tfcgJ7dUSZRVJ9evQcyHDiZHA6giqf1hUZuQUKEdfE47HSHkwrbVYEU3Sxmzgg6okFE69NBCUVzSWkwSr7Bcb",
  "key20": "5WGcg5GT5tSigQKfZ8bdCdjK6f7Z5DTLQ1KD4mo1CAwWfFG54i82ipmekLigLEX5NuVv5kgSAfmf1tPdD9rFjLv5",
  "key21": "3sJtNBvKnZJCkA8aeYBfX2rfkRMNqLM9A9VcrC3ENFjKe2UtpoqoA77bdF2VEM6wxuLJdmpeAdzApYPyc7XaxtCr",
  "key22": "MyuaypiG7bXSVsYiGHzhnj9Tr12XezZEEqKn2JTv8nNxDtumSvXraosSoUgQQEmiMg8NqGpG394f8D9PfbNkEoc",
  "key23": "4VEXoPcit6cBZ4MnNwh8fkd2fPX254ejjiFEUo6ApuA5YwMqas9URb6Pi6GncH4UAdBVNen8YDmKve1bzaGkveXR",
  "key24": "3YjyZJkyzY1yhwZdMDmSts5cjtt2gdJT1hTYU7W3U951TFA3CebkAjDfjSazHfAxrQ754xB657KdKAXQtuVxy3Cd",
  "key25": "4jUL5R7KQWMF9WTsY9P1Jkm4yAYgTw6szKMjUuN1pxmWCzRoxu5reQJwBdpdc2ubRa1nmVNh2bxNQb9fD1qSbAGL",
  "key26": "3oNoTHKvtLWiSKhHVfCHu7GYWTn8SkjTfMJ43xFpkWCkvkuuBRwA9e3i9qysiD8BZspbNCPULpQ77rE1AB2mJKHd",
  "key27": "3YHawdGQn2icDY2HJ3XDGcaVTpNffV221QgqVniK7wM6qmxjhoUw6gLcTC9sLaTjvEtJSdheDzxb1k3bG7i42rnh",
  "key28": "4G7vJf2WhE6ErBngTiM5oFwiAST2AsAMZH7uEB25RVLrFLx6gjZuSeghPeaMsHLfrhrUqxPqqrZ7fYUjbGZg3zNd",
  "key29": "i6SdTQHVrDXusGHeHSsMERADZE6KNGHfLeTTHHoMWgnDePR8UjmMM12JHBJwry2enC3MhE7AT6XudgjpwP5fg3P",
  "key30": "MyxznpV7EK6mB9cyTxKMibKZA7MZDBYmvtVrJv62mWRK7qbn9RMuxKodY2ioEqTx5iZ62PKAHZWdkAN6oFp5Tsg",
  "key31": "5BFYEF7K9mudpPwm53bGf3Jdp5dPFSAq7m8mvSAhdD98DCfgdPQ8DHC6vMH7mZoEsz4fkZgFXtuu13zrGTuWTYu2",
  "key32": "jK69v7qNwzva4PWmcuKkK1KJUq51tiTLfsJPtXXuGFR7NM694G94YDp8edMpr93RKwk7Nqm3NSxSwrFwkYMSKdV",
  "key33": "4XUf593Dbhgvbr2KFesn2kiaajwjsLFh9MSgdGpBbeUzFiqBpWBU8T7XaFJa3beRMgRn8Tp3MXGcVqFT4LVBhovQ",
  "key34": "4AvuLJ8em9vssiimFk789DD46hx56QUnehfTmyC9TybTVgT8f5r5ofgefeH54MJ9GHarirmnFsSvXCgYxs3khdfX",
  "key35": "3p8KShGu894BTRHyRhCd8Vd2h2sNNJ1RHtyD47ynR339LDqCtYii8eaSN5Ani1KRGB9DfujdVbf86iPy9K7FBE3a",
  "key36": "347gWk8JpjG775TAmAQMYR4PjCicvZX94E3H5Q8auU91WLD3rx2gTt4NiuSk1DvTHW8etW9KVW3d5QVjow6joVWR",
  "key37": "3yY7j3ggo3htFZK81aovY5hMsgG2hyrHDh22DXVbeTinaTdXNVQyK49DJ4tZsuuxdq4bxdGnx1QSHzLtUJM5N1CF",
  "key38": "3VPe18GDDA6mvafqexCEnRbwsDykRmgQBJMsurGmej5H3ZzZoRk5N4giZ7WZgQJRW5GQ13ajVPXZPSWuj56Li9vz",
  "key39": "2x3cRSGUcTw46bYZ5d6LyoWHgc2AZAUvPVUXW3pXdRnURdM9jc1FiWue5JZ7Bt5kybpA5G7akNtB18Kzkw3TMe6c",
  "key40": "2bCqkvRSYQTENMha9gU6ysBj8n1JEWQ41i52EisvtkN8UwL6QqAdXCXBq6WhzcRRGB4gqiCTPQzhk3EuDZ2AuSZ4",
  "key41": "keEnLodtHRiF6n4G6T5Wt3DHv8ChgDhJvouKTqunRJ8LRpiuHZa7NR5sZcky8Uxe4kdpxH4Xhn7xdn3mRZBi5rh",
  "key42": "3bvMjuH2ScKqgToTJdohnhhsw2eRXt6RieZtJ11nGsVcfV41fr8CpFAWyztd4pvNcNpnzXjx5f84g9oP3RWEYRbw",
  "key43": "4iqwaukjNHJLAQtNYh7VWD5mVMUTcDLZWWRTsyNjzq9TmqkSDTBQzi1v6uHxcmGTa5jufQxvUdDLdKGuYCGcbPyY",
  "key44": "3LVPJPcYUmKNeoR5ciTgGwZzfqdhom1q6DdArfrQ3m6xi2Kit9NknHgch1DduHWDh2Uwz2AYQGcH5u498AGZDgh"
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
