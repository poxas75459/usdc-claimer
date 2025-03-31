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
    "4MeX9FFMBQexisUpMQqwCzG5wmzaksD6VqbA5oLDvpemQ7eHabMmxD84UUBctoab6xxiXp75QDEARd7cLHQtY2mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APth8Fm5NnMjb87WkyaffK2FBzdUorZZA75s36fZbBUMtUvrgQ4bnNYKuqybx3jKRR37ntd6CzY7ek5fqsYgQNt",
  "key1": "ZfHbHAfRNfgVAVKCxcNWMPP5DdcsU7JVQchtqQnxSTcgDVbaT9qXxQKetzWvDnDhYUEjz1C2d6TNp9zBnFbRMAQ",
  "key2": "481aPmkVtNBZFAQeqeAry11hQHEPUQY12fsrTmt83jSksfRZqoydG6gw6JMjNiaz3FhR25nxkSU7pXhz8S9CXdJt",
  "key3": "5QAq2x9k7sEbyMqBT9p3Hjep9nvLdoTucgqYAy9R5qQTu8EKLH52Vs3MdF1QbXD5Yz2U82jshJx5yXceVnfuWQN",
  "key4": "5VSz4w2cWHisaQbvXp8NkSHrSQnn9Ui5LAo1949t5pTRuZhPN3w1nvCDY16YNHeCqfh2DQwPX75XAdXNCNgWWWx7",
  "key5": "3Rq4GuvwJ28dH2nNvDaofJsijbNtd2v3QJD9XjcqXzynkQrhj4cxx78V9M3gWEX3cYkMgMmoNUqYrLUAYFUponRP",
  "key6": "3e1P2r2AtiQahCeXy65cCiYEGqEcirj5Usd8mdwHHV9VNBvWtqmgRSMhfQ2jF6dpS8qyY4mgokDxJ6EyJAENuNBY",
  "key7": "BgqAGUjoiBkn72scjnH2rc59GhVmCSHytkARtjdnWUo4cAAxxM61tkaWPwMCJJ5Tj8S1XV5tNar9uKTkTWT4UVG",
  "key8": "rUFXyPcR71ADwfQkb14m3Gs6V8mTe28uxL6FawZT62BLQuPZjckTiBi9DpMtZvEktR7M1JbJCvAZ6Z4Ttncdrdj",
  "key9": "38ok3CMyKY8zYHcRJdYUSESTJ4gD6uZcegvbbNwKhartK46kKQpGHiQDGLDesc3q96mUMJGqX718QtFSahJojpSs",
  "key10": "37paPBaMhHm67kjbHv91pSYK3bDToE7QPCTbNVkYeupjGxmuia4aLPQPfmAuyHSQP5MvCmBjcsKUg7Q8PJhzEWpY",
  "key11": "5TcaMDQhZrq5byPqX82dEdbfV954LbNr2iW5akNsBPc1qmGSZHithjEjpx7ZdkAAc8PmkjPatk4oA6j4LsQTYywz",
  "key12": "5WtZbo3RZEwXga1YAJuNJKXURMrQgN3ghRp2metunqbGMuwJtspXpvXHXAjEjbF7BWPGBnWz2STF9E1hKMp9LMDU",
  "key13": "5fzCS3bazdXYs3YvajPUyxDMDD1VaLRQQi5g1weFJV7PjobmAtHywBvpuH5D1DoTQiXReZq7GdxHchHnUF6gAgEm",
  "key14": "5HPLfGTugemigJRrw5dy3HLZGBBjnHCcLYy5f7vUA23LXD2npfvD9USDe31LcT3imXFNPVjiSKpkUCny6pRrgfpF",
  "key15": "53JWdqf8M1vZLCpRXk3DX65NuQaTSHSpDMcpy5AytzGxWLNyAvrM5WktakxJzu78KpkGmX6ysCmRphPaQsu9QMMk",
  "key16": "r5tqNQLdyYTT6unY66rf1txKVhbAa6JA8e5pXy59orZStdwSS2ZotPbT4F1qHvmVNC7z3vPCKkHDKEqUgaEUUtp",
  "key17": "JAUQmx5tRhxvxMjvZGcWfznLqHLFHSFutuVnGVrwaxEBJo7GNvQn8rJ6g6KePb63gPKKstc35KgjteV9JusZB2T",
  "key18": "eDbueikKRjJVEnDLuQeFawb9pdAE2xgco9ua1ysNu42r6wvGsqgyfaPr3FQe1cF8Nr8ouzjS8obhQXLFpVihrwm",
  "key19": "KvEpRCEtmBS4zH5oyoRxA2jQixuYqWgH8Ew4bSs2XVY7GQbRDVgGw7BgbJAhvTj3rtepE6WFw1fKbipYX9QNHig",
  "key20": "ac85QEeUYx11EZcq7sX1qZzjnPTeKpr3r2TrkMfTwWaGTaWziYbffNHMhZMoBjHL2UTe51RH9a8oXGCKyZxBcPi",
  "key21": "59ZWy8zBRrNvBMybiofQ4eM1gzR9MtTaXxMX5PSdTEYCY3dXTxdUs3sUaCKFRC8zDfu5iNb8RhhFETdsmiwC3TG1",
  "key22": "3JzvTTRZC5z7aVwjPDx8wLKsrB2uFY4Tbbuv4dsFWnT56jjWNfDxcGCFtVAGuQgFDbdC7pWv5gy6LBhXdVTXwQVt",
  "key23": "3Uqjbb5jyuwwQHBGrZxB9Kz2moyi3BoPP451vtDHoCaj5AVXjyyeixEjHovhNa1LTp1KqbgXqE8HTtkyKtEpVGWU",
  "key24": "62bMAnEwCyLZY94y2vSnLQrCZzvJ8nvoNzVCA9DytyfTjiUfXe7yn7yVon9VJg1a968WXFB87ofnU3xm26SqExzV",
  "key25": "3zTuE1rTF3hfh86iehmBx15kLRyAg9A7arMgqZXT7UPCtjmNA2hpENifz37MuY4NkBiYqDUUggdSA8oD87J2TZBu",
  "key26": "5woi85BNWviG22ZRyUiYZb162KmK7RoqUjb8dZxtZtF42Ym8WGtDi4hNxLh1WVjaz33ZMY1esfMwitfZ2rCBZU1z",
  "key27": "2fpETNztGftkdpsp764uY2QthQcWJHaNxxjAb895k8Tte44CY1UphkLwNxzWzKzeBCMaemxtrxgrVSpCgfJGyV5E",
  "key28": "2yhs2Do6hqfgeC2GSnB1CfgpqS8UQFFoMkxfsGRK64T1N4rnv4hLrJUmZ9y3SHND33KbEARbGETJpwmcFUxkModw",
  "key29": "X1jQMajEcyeaRXBGqUwYSoGhGNjSjTYwgKJFhPJCZdH3VdZgBHophVHqXDUx4QsVpSfAs85ESbPS13gC3oj9QSL",
  "key30": "4x3V4ctzR7okFu7VSbVGKi4VPndKeU91AYJ5KRU1KWB56LAwokRVjZkP7eDLVFCkvYzL28ni5wW6VAytsKjEUcZA",
  "key31": "3vWH4wDTJS8orsWakWgzebZQx1pmjeiVdXK9kCFYng135X9LXjrMkeDtBCZQDweFpFRiCBBcG2KfT8ZZNhin4hj2",
  "key32": "3VoUvyXsA6nLhn3R9PVCKHgPriABQHycJGwtX2JvJZ7cv5roTT5cXoadCoqF8PkjLXLiUbHhbnvoREjLeSuY99za",
  "key33": "3dDPd8DHS9eYjEhZK46z1QrtrLFHPE4EdroZ1FRSzbJHS2XzcJ34CCcLBbGJL7dqrtFp6BrX5iQJZcKpntuicthJ",
  "key34": "5avwQnmTcwNtWMZmBbTmojAxiZEu8yP8VhH2xkE89qwJCjUcYSzR6Y5wKTg1bhq7gvesjWRvGHDjkpkdrYsRKT7i",
  "key35": "5G3eZLEKaYsvQwYPNeb9kNbYY7kBBj7872wUycwHZkS9Qcbp6RiHiXsgybv3VgjAugZHdmtrak5BByYMrve8yaQ7",
  "key36": "2oeid83emMu8ASLXAboCWKUQDbCqjhxBPYaDxpN1F8dworuzNhq2Az7Bj1KrK2c8CZNG9gP3VsFxU6bDK1eGistP",
  "key37": "a43aX5c8np4HyXX2yybDd9vCrzrSp9sEdmwWxeppz9Su1wKxTX9x3kgz4s6iwPMQ2hgEP94WpCBfYDNfwgifuRq",
  "key38": "2vQeT7JbfFpj8VxTAcm5Nn423SFMnRaL2EedDFXsHqgRgukmnxjYNQrqAdg9gWibgoSyAgQRzEgVwKYzpHNXbaVf",
  "key39": "48fLGgCwLssc6MdK5sGbxEdS2uF1J1hD4cwbtcgMDwNR63wJ9wGuyRtGne8aS76pcsgjcVxcuo2r7qECce5cZhbT",
  "key40": "5Paq1jZ73ZKeyZesnpVDnspHrgpEmkDSaBwR2teLoDSfDLFH92pft7A73gzQhRv13omRGre7PhW2RqQXjmb1dW8s",
  "key41": "3QRUpic33KMzzRHGeSeyXXwQibxSQwUhgFbvZPUDzXGo82dtUhV3H92hTnrCgCMtYXwa6WojVFbr3FVBSfx9g4sk",
  "key42": "zS31ts7YwXBHj8LS8MLEqseiiuf443gWHE64rh2TakweKBH1vtw6RDdgv6GYhrSHswBNeo8MbiECvFKd4EEeepH",
  "key43": "5TStco1BjXcq1bFv2PmBv8xjkDdsUZrBGXkGDYRku76KDFDyWQ2n3arEGAS55p8xFFpchFdE1HJbFomwVbvW9PoF",
  "key44": "4RDjbD52172ZqehD7KWJcDXbKSzzAmA9x6NfQU9sNS1bTgKZ6uudkeHEmLbyrjSfz4Auetoacek38fUx7EXDW2M7",
  "key45": "4U4h1tNYAnKdNCzhap1LAsn2z1RGEvNyxCrKnXMR9qgAyvjA6bsCgZmfTxXPoWu8bmzKq8QdLyWJGm9ApTBFp9ti",
  "key46": "NrJaHUd3SMYa5w6DT5b18zsYX3eaN7wf84HqBGwnSWf8QwAmpeAwY1Z9brwVV8Xk6qNW9vx3m7gs4SSLQ2LaJnY"
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
