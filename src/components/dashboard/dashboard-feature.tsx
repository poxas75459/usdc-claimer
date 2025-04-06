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
    "5Cnb1ZdL9h3hri2G3RJBoGJdYvrMDCFkakHg9jHrXvt5rhVpZJGZL7RTMCaUpREc4WArk3wz5DFSCqDxVQdfUFMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTcRDtENxQ9Sh6iD9J1wwEAtFp45LDurPoZ1Bvpcw55kZ1npaDekbD2hQh95LpeqjoRU5JreMLsXy1uV2s7Wvos",
  "key1": "2YoHNpLqycMkZs7rNjzGpXRk53CHceu9zCqimEeny6R4PGwKDCv7aGdLzA5CepyQ4P67FxEqMrYx1WkaezmrDRwj",
  "key2": "2fDQiqc9WMmTyrTZNi3bCVbeyNPKDoW5RgondhhqFZwQw99FkFmQsezZeoizBXird4SGuDY9Nd4gxwVSByhtRJAv",
  "key3": "uFWzHa5CcWYqhv876jbNwq5TzYaytob4sZ3sbCWQfTDMrYHMDK1ZSJ7HsQbANEGDH5ZSz1JkShsbxFCVgi677Hf",
  "key4": "3PbUeCBPpof97GeqTrbLt5Pj4HcxhDjfvA8nhZqr3px4EitQPdgaq3uFyJkLDiG9ifd8VTD3mcKKaMFkqedGaufK",
  "key5": "21MW2x2pgfY2zTToigLmyhLcWXBAFjDX64cCini9aj5KtbRzYdhcD7ggnJVCo4QF5tmjspnkSHUY77A37QLrhwqy",
  "key6": "3zZEcHJVaQwtD5qRZLckMggbnX6c8X23xfbuD6vCX6u5bRFLRC2w9GMeHHhHRc3G9pE6DfvvTTNEGGj38PsRgHcf",
  "key7": "3BEoJM7DtRXHafnzPyxKidGVnUWRqqF8Yy9wGP6NNcaSVcbCNB2LwcEPaKuuC2GLVtL3amtVt6THuC2HjcwnnTcw",
  "key8": "3rSFjx3CiED9bwhUGtE4LMj6tmyAnMnDJHMVbJApJKe9CZ4YkKxNnhJzXrtdgiM8vc4VubosZ9A79KjoDtGGHc78",
  "key9": "4LVmZvtaJkd9GHWoQ6xACvTiuEbmmPvJzLkmS2Kocr8eXFiCkWixeLpcmEFdaK4c2WuULQJQvjWxPcxSrL6mwTR5",
  "key10": "P5wSAW39zNdQbydAknszFXquqVwi9uX9oAWQEJTohQ7EdV3EdhRgXyXPgh8vqC9kvFs7EtPbAPidqcEtEwLGAgZ",
  "key11": "5HSCxrRm1YyiKdjHH7zcW7eF4KcMWk7HJYMfvwKBJvAfrHb9md6FG1ST7mL55zCDHeTSL9KqnQMCGvVYcbqwXRFV",
  "key12": "nZCYaV4KNEyNarATa5rkFbvaAdTdGcUtXbmx3TDnzFkfU8b5DNnubKpreipaMMJPN5Q32nNxfE96EQn1bLA9PrV",
  "key13": "5xSeMeWSuVZV7SFgqEghAJLPd792RmX4P6RQSoVx8o1njTYGFSQZdVa5UnotAnFwkUiYqMTXZ2zW81QSvL3W8k68",
  "key14": "kdciszE189dGSKFqVbwRuDhkk4j4djt4XGvkpKse2uetj8sDX2heodpLJfp6RjiZUsdvfCRaTMiTzHzHfzRzmpB",
  "key15": "5NeHSy6yypTijt4JtRB46AFW6LxqDB1KNxWhbtoTMbVVGGmU3nsCQ9Xqa6BquNYmSRRtxowSFhrVnVExpa2PSjqb",
  "key16": "4v7WA1PCbzcsKk8DEF4XrM2nGStB5JWSEsFszgp3sdgNMhGrshHJarcGuQQDrPKrqbXdQpRBAbuhzh7JvcP5e2Vd",
  "key17": "2PjsuAdhnAfuggYUfxJLoGwsdnZnFD7hr8rkiWEf7WtUWwJvsoaLjaXY896g8g2z9HG7qVe4jCNZYy8N5gbxsDuu",
  "key18": "SEuAqmJpPmC5zKe34mTUAkokGJMmKyxNXGM2br7wnSbdM8vGYBWxf3DSv1J4axCnzCLWrcJvXGmpLkUkwRhHS3i",
  "key19": "C5LrSdoFFEafcKsuJiPyT7r3p3im6YVPFRqweQmZ1YXbyyQqYxY5CPd3dkuXfAXTUYPQU2UBTqhSA7eD2x2EMuf",
  "key20": "4PboMaASVAx7VQm9KsTqzPXPkNWs4Ldwt5iXMShbyErqSsxoEooWV1Kfkva71MisUR2AVdp5KoAJVDs59hSvMBvc",
  "key21": "5CY7AMUbBDDhkkwezANNVb2ZrLJHaKhsAexoH5reTvzBiQkUj2AyPfdc3ozdz4xz9jpC3wfhSVWJ4ZC9mbUBy8Cb",
  "key22": "QE4vjtCb8JFwQMUw8F1s7isqn7xQsjWEMfsSfChf87KFFrMDXJbs3qiWsX7ywcrtEF7GoHWXqqgjDAEwGyyjpGD",
  "key23": "6XjpSb8RPHnjDNwbmu2FsC4VDPiw7xL71g6EENQWyULcWVYqgXwoyN6m3iGzAcehzrJ6MwsAWNGArXv4VafLdEX",
  "key24": "5akw96xHtMZhSf5AcnnwXAdk2FZNR25RyJEtMpCsGj5CFk9G3nZqYL6qiFG7WTreCTau1azA1rPuz6FsWEXdcj4R",
  "key25": "426LDXEsfM4SxpUTBcBY9F3pkafaPx1Nih2YdcyDLzenWZ4S1HfqZfh1LGHRd3cbRe8dCxE1gaZxhQho6SgbWU9c",
  "key26": "5Hidde6nUoFNbrikaiyscP8AZxq1LdEpHfwFpp3kmpZRhXiRjpz5fQxzrjQ4s2WAg4zx7ZPvwRRZGYLZRKXeZ2S1",
  "key27": "2tpaaajdaXwAueCRbw6mdo1aiEBqYqE1wfxsfKTW8PT4M8DWuAkRFU8oZbf8Vanwm1z5hZ9k2zuMdgAtQnY7Lsww",
  "key28": "3G8qEnVPtWQYkqrrqZvG1coRc9JfmyHz3ovCkdijpHuDJggc1xC3n2gWzPARXgbc5t8WFHBSS3mXy9iyiFu9rzBx",
  "key29": "2XapCScVKuPeic7oNPiZUSayYe1Uk9PbiKEaugb6CKHwX2P9bep2juiqsoiCTkb5prqyzyCmm57LjxQNpeZWsrzz",
  "key30": "5FkcrZKvBHrwyNDyAxe4F2W4v9myHdLPjMNL9KLJttf8tsuQwBsVXXsDAeioT6enipQj1o6WuPwaZ9HQ2p71t1Ai",
  "key31": "65K4ud96xg2bcRpwKAGntYu2V4x57BwWr3R9jegcn7d4irBYtWFJi2Bar3jV89GDETN4fnp5zLS7ufLY7ejnJQPU",
  "key32": "5VoW5CBGFViAPSZc68cMJUHoFfTPXeuDuNwDnJmSkqxrJiQTVE9bRrWSQaawu3Pen4bCLvbGxHDaiRQfe6mS1nMo",
  "key33": "5SZq9pmKHjDTuKAMgVtw3o8L4oTd8qhhULgoLuvSNWDUTVUKTX4gaz3htfqpzCG47Hstu2Y4xF27yDd66LK9JehP",
  "key34": "2QwMAPTWPFnG2Quy4CoVP1esdSbVBFHZFBRzodX8tLB6YhAnArcousDmzQ5s8xov9swbSKFDnGtgzoHDGEwCdPu2",
  "key35": "55y8dYsm2kbzap3tGtsy3x239yvBEg4u3gj8Leq8NxhyqnRf5LruhMp6CsSNGDpSzng5XGLhsqRg8aecHhqHSMpG",
  "key36": "5nW1dia5Q9T4VrAcPWBsmvbRsE9nPZMfWiLKiW8mediFwrF1NFfoMR7136cbwzWSSFpBsPdA9k8q42diaTmYxTkS",
  "key37": "4Dobi2KrYmfX2bJLSpu9aiesRvyZ188AKXCrQqYSPGj36LrxsUbPuYn3f5Xt1Vc34z6SNVSqTVTz8YiuLaX3Hd7i",
  "key38": "3Qa9UDr4SUChfj8FNhDdyHh3YjmgVHUpu4Pe4Vz4TtRaZ9hPzuTBUb1EkjBP4mJQfPAnWCnT7g7RaeFrHUE7cK4H",
  "key39": "uiGA2JQVxv4koR17nbg2pfSqv3XvqML3MpcgXhVfWHWHAkdRXYExGZfUH8G57dLoDyGSngiJtufsGwkvo9Nc7mw",
  "key40": "5wT9PrmWPmTaN7kMKt15ntzdZYdpY1PBhza6mCoXFVTVn9xm9YvGifzQVxemwQp6MK7mhj1qKxo4RpYVGtC43edA",
  "key41": "4HpbJU9ZZtamkdKrQyoGF9Tf5bxF4sC6fuZS4yQr3d7nsRN5Z9TvGfZAxJyiUTpxQpK9DdbvEM1VEr8ReH389nNL",
  "key42": "2CPJwqPixaLWow2C2685X97VoZwnSH7bQgQCvFQAEcADCdrRD8BvohCUS8sFMCRidhVGeaWBX9mfBsZzogTHqG9n"
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
