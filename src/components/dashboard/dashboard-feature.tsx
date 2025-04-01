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
    "2eS3a7XEfMgGsom2WKhjdvHhrEXWEFVhip4JgRJZCuPAwFYty6jvirRgYduPXEyNrphzcg12BtXRsRVJV5voCdsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mamefzGfZZogJTR1VigadADtMkeNs1AY7bwkCpqp9AAAASxQyGGqmwP3ANwHLUSS5bDiikRi4x9irkK4aomfR1n",
  "key1": "vXkbrD6p5NjEHmkdyzSQZHrBrTYP28rGKTyVcJ6RYmRuArFKF84uoMpZazrXFwSmquoL257ujqUf58G7FH4fQ1G",
  "key2": "45XRJya8gEh4PFpnEJvmMSeFXSqbfCQJ95w3qBUjKpGGEQnQ7dEmS6nJfZkDqoZuc25Zh88TEBnKRMGRFDoypx31",
  "key3": "2fNv9vkndgT6uR5gFqpduXhfw7opMpCdhYxbkRKcdmUiMJiK5z8SBsQHeGWzuYa8wTgiHyKt7xTj5UAfNaKzLjYa",
  "key4": "xAZRxGSm9FYL36nbDQWGgBM6ncYa3dfN6fXFNbptdV7uGK38Qrj4dmif4ScGaJoSYUcReDnnj74VaSR3XfpsM29",
  "key5": "HuHXSujmDHitX6iDXBkgQvRJ8wEVX9Vs7KZZLZa1FN8Wh3ABAkSa8hi2naQt5oNtJyFVWyvTnzD3yvLWg56a4Rs",
  "key6": "5AxGxrhRxyZMej3Pd21FrHiCkS3vHg4JQxESzmQgKF7miCS6tPZaRzwGUki8tuhvmePYyUhXA9dV1CJeQ6gSRqVV",
  "key7": "41RqbKqHXQkSQHqa29qVr3LsrY3zJKH83FsE847io1cB2KfVuZqqj8FGLW7PFtCbiu61zwPHtCxtNcurHrc2mLsK",
  "key8": "5xcHVbe78rSCRrxsusM79jcKzrdXLbkANem3xj7eAD9J8QuquCHSjWodVS6ffj7s7T2FqYxfN4UtanwogSjNKK8E",
  "key9": "4jFX2rn7ReuYSZusCkCKCesvfTTwFCHXSeJZqXoseV6QZHzdfopkdkSV7j29Yk32RMim9xt6wQD6oqtv3yW1wv1b",
  "key10": "s386PzntF8H3m4wBGLspNWUEZzVcQ9f4QBKVZ5SFbJLJVFiozsX4JsJjFWN4uzLoHDbeRZvhx2PPZDuKppQKvyf",
  "key11": "eKE9J4xzLA59gshJNzaW2vrXbGGYLpHVGjcJS6gYZk1vyCUYnNZi5N9n9qRGGPVctAyD4G9iD7EUzw2hjiNbCi3",
  "key12": "4XP2cPwYNckmpUPkQACR2FzuRxUy4y5zDe3zGZSkPGHmyjASy2aNxhoqTKQJwokYss3xaWTYhGaGkYPrQCsWZ5qd",
  "key13": "eYsoyZ9nSw3JHofJFqFYBdgiJyBwgWBUtwtszRysqFdbF6UJttNX7c6frarcJ2j1PJGNxd67Fmon9PiD4PkBk4b",
  "key14": "4pKT5s3t5reakGYgp3pN3Gg4sGwGG4aGMmbqra27roJdbJD3iBho3ZLoagF4YsMCFgM2shcmwanryJPJf7oXeQGZ",
  "key15": "2X7Rw71sgNvEdpWDMrv5BEyHuZSowhZ1UNqJdKgcJMoZmKUfLJtne6ad43FBTU6uVyvosZFcMnq8qJXavwgUFSVh",
  "key16": "2p9BPpLCxYXFz9Qrnj5VDgsQHzLhTnsnyYDZ8dx9WYwQUMtfRFW5YLkLysGWo5Xuj2kk452wSvtDhFXudtGUiJwx",
  "key17": "zLzdN1MWd2Xv2ooiDZHaCCcKoGd3Pa6kKdxXgp22VA9qn3q2q2NYebRWiAFaTQnC8w2EpuNSKhTsZUN73BhxyCo",
  "key18": "5HeoMXFpwPivPkQvbdbsMhq4uiqQ4heXTs625Pf6W7aYo11XY9RaLHGg64nNMG9KMgFhH9sf17ZPH2QtPDZLwdEC",
  "key19": "43HtQtjtDHBcakPSBT4NmbHdBEpZ3fbJCMX4UqKs5NXXukyMWMyfQfFV1NEn6CKYQURhrdfkBiTVgZFMkAx19NXc",
  "key20": "3ZNV5GTbxWKfRce4QSwWiKE2yUw9tjLP89KS2a5nkAhuqtfa1wBMw3vB2xkXDXtoiJ7TacQPJC8dVy51Sd5VGhej",
  "key21": "GcvRTZP7kxWM4emzRZNjn6AXtXaRECRBZGvtaAphFzakcj8tDzUysVA1RNKJT3qvkZWaWy2mjFLBrsSZbtF963g",
  "key22": "3NXkXUEwVm7ykJHBeKJY4ddZZYNrjFMTCBm3PYTneRWeAJ4z8ndJN574P9uJFRGRfRRxMAyKCvzy23qJXnrSd5X1",
  "key23": "5Yum8Aa7b1taQP82yBNbjUwncPCkgg1nqVjvZEwiAVNcwPQ3PzArjZ3AZsbwAxPry66WkwbFrhjMusoHwsbRX1r2",
  "key24": "igm3jZPg3ZTcHNFuHDcfV8PYzJWEVHqDRH3wYpDmqq75iAtRVmgj47zXHzyZPcT1ZbRDQV8G9NhsDxt1KNVFu6u",
  "key25": "3T9jP5dYZHqnQURAfmM8U2KVQtWurKdxbkHbvcjtJAZaH2gyT54znGeuzsokXtnu4sUcU5xTjm1JCtSijVhCzyn3",
  "key26": "53ogVxPz4xkCVuLyPpt4T4t1MHeYqfUy4ybtLx1APVhdpXVkovoMahcTwDcvCfw6ma73dMC3fjokzj1Drh7wNy4M",
  "key27": "3pjDLTXxW1cHX6Kjr8hBLJFhGhoRrimDJ9A8Zzicx9uqqRKyu2Ai3D188XKqfCtBcaPeRSfxJaCRmd9Uo9VNNvuZ",
  "key28": "3N6svtpFmnPoRSjZCQKHVXytGkPAk1vXQvGcw3mqB9vtuQyUYH7JwsBJ9BhnzzFJrBzF53tzTWParpJ8ERKPws1Q",
  "key29": "4HceNJ1aNWf3URcqj2jtDDumg3Hj9m5wFnC2M6GcYgPwjnyNpv9md2N3ytxsVngMPyX25yDnD4NToaTL5XmELGTE",
  "key30": "2EzkQDYYPFCmbcqBeTurASfRRRjoQ1EidM3xainHWE1Si4ZMU3y3ammGsGB2kocMFyLzwnvnjL6yYqFBhoqjji9n",
  "key31": "44RTBrDRUGntuYvQGfe1X4FmuuYhBEwjqdQDn3D2GHgyBATB6M2Spi42jrvbv4LvDAayvGM7wfEY4oJMTXPbWgpr",
  "key32": "2juZ3tKSCwKosZPp28nqVQen4BxQCs99HFhuijxQtRJaexwtfF8Cg78ZxKkLAxBf4MMnnLgKA3Xy3z3LLA1XhA1x",
  "key33": "2DpfxajF3tELjooeGWDT6wi7Pd5iU3DsUDXa7tj2KxspWYVpswEVVyYBeyE4NeiVjiaQuhj89jjuwSB98Q3J7wUA",
  "key34": "3r58tp1Dj52xfVeN4UuErc9qpXygxMb2bJz1vENauMPa9U3KhtNvte4ecNi36SkPupJ71pWZhgkgAFBYHB7yd6a1",
  "key35": "2KQ8JH3puzMPNNQfDaPAYFmJnSHT1qtAuXARV48Ee1CXbPv969ZqPtuC9pa1Wh2pd5csrd3CFsfVFpqpFi4eV3zx",
  "key36": "2Dx4gGCSspgNXcyn1J8QcWXC6LrwY3SKMgBkiU9FJiLGjtUcximmmnoXyq8hAw55zHKpHHjcokg8eyUTsMafW8ZJ",
  "key37": "37zxAak3nYJyGB3wCfBRRKaGXTpN3U3W1CUVDY5MsJPYvJdxTVe6j2rV8NSfzcrzpmJGo5nQWk9GtnJe5rVUhKzQ",
  "key38": "67FkQ8ECoYcd2YWC1JSyRgJzUF2Lggdz13za5dGrJ3ZMkBTyeG3Wzz9YTYqFWcSpJKdeoKEZF3LhXkuiU9wFRh7k",
  "key39": "5n9MMG1t2y2eQZgVhDhVCPypEuCrFZjGewc7JktNEQVz5qiX25TGiVstX288XYKc3XX64iM4NefoLZimCWeNbpGK",
  "key40": "2RxinXm11EPvatWhATsZUDRg4Sg84gj16T7UeN3hoU8rPmucWBvF9JjABPqVcwjy4wjTUUzj69ssbnDZkRurityy",
  "key41": "4r1mpa7CbhCKeiWsP86PSn3aJLE32KKUjhW2ZUXTtzsmqEZbff33ZrdbBk24Y9VAj7DSNDLMPHrXszJ31ephJnuq",
  "key42": "3dtTXkJwGpZk7K1fJLPG4FahtMAgZpKNp47eA6TRGZUfUGPQJXWXvPgCLfcwX8VQkyXY7r2jjQ1G2oBUvrB5ktGy",
  "key43": "5CH7yrPvLBt5jEXRNaMjtMuCbu9QghCZe13zUvxswwtyRvxzppipBUsPDMVUjWYxNxGDzBTkMhUykj8iqxWJCdGA",
  "key44": "zMWXsq7m32bxdozEnpf8QXqCE1DhL4iqdNcuNSH4DKQKgDRSfhizhiZaNCW9zbKEcNp3asmcP2i573cXK8tnipt",
  "key45": "4uwUAaDraGbMSgfgBPjK6vHw44ZbKmZjsXjz85RTyDXQqsLNbNtT9MVAokxrcRp83YkrUdxkUmv6tT6Pr582ZbRU",
  "key46": "Ncb13jGqZPQouSUZGeAWuJtK3HWcuP16aqyxw5m7vWitdRdASdgFeufNJo6PM1wyinUyU7doaXTTQKRvrZ9FLXh",
  "key47": "4DJ8k2fGp4q591PjhUpChaCLj46uGEUJoUgihL7SNf6pLN6DF9wjmiNpsdN58Jx4bibwv8E4MyH3HC5uiXrwWJMe"
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
