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
    "2weaZEno4niu1J48wGnFYSASvMy5GYz2dzuNEGZxhHQjZQMwZvBKbPCt1p4WW9DbfiVbkzG3N61BNjnLuXFjBa6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wEwvJepUSVUE7X4NHfQif27u6tudvwEkLbt7cmTGoZANs7bmNGGKPErR3HkaJhAPiU8RQt7QiN4E4e654gMmNZu",
  "key1": "3vFjxyg9S4R3qKsnWUjcD32PYMDe2qa9DNsBfY8Tzw5mEuAi7KstSho259SVResP8hEuv4L8vPDm33s59fyYMqaG",
  "key2": "5U7Vxbzt3DXHJSenPWGBJvKkrPNVooC98avFSwNWFewpyL3mJsjd97T1AgBUm8J8B3mUdFZvLhgAcqwcmTqvfCdm",
  "key3": "45HzWtWhw3Xg5raNLZy5rWPHWsZCY7Sqk2SvV6dNjNUxjbLR12fTP7wKLpdK4T1X7x6Edh5C78mSGKHohKFfGpNc",
  "key4": "KiDT5NVSdEdr6tRAAJZVTzFfiSfR8xhRaLpSo69AZFgx3VjSXSqvNK93jbcCg5Tubg26iwNnfyvv4gNh2t49SYV",
  "key5": "3ddJZKi8JwwW4AcBp7N3vdRpbD1a9g7S55awqsqdKBZgrHfjkS7czPRSVvXZP1de7cgkPcHXi495qucPtnaVzLMz",
  "key6": "oPewL6BXeXg8Bd8Y6YifNtrn1YmFgdv6C5AZC9yeaBckfqkJBp5xQEz8qGvGZiBsJwV7JzfKMSG6hvbDbeQyoN7",
  "key7": "tfq2H47zZaBfxd6eC2HgSfCd8CNUZ7qykqP598dES6Q6XnHGtJpmBgfj6Xf9n3CHPMjyLhvDK8Hp3ZuFrNg4QxT",
  "key8": "3ZnvS1ZgUzxJv3rRBvY7SDYznzyuStUeX7Pv1RTkbuJ6om22CBWAtUfRr8eFDmaH9zAqsJVKyYR3ZcL5THCZfQJK",
  "key9": "62eY2sBQjFZSfBaPJ2j77fjLCqLZzrdB5Rr1mL6YP3JBwWshSH8NNyN8zr3iw7zcQa5DMb7Lpm62yZG6WGfTaHnE",
  "key10": "123e9HZj6RXwbnWeve4G9xnkRDMaFYSafnAGgJhmtw19DTUdD531D21cQv7zjDiyPJ6XAyXSAxf98UcDEcJCQhhe",
  "key11": "25wvGS38UZ4v9bxxBgUgcZhnC9GJh6KvzMwF4VpaBTD5qxtZDdLRHDkqR9GjJHzNBJzM7E8SPFQrQKhqi9YkUMt4",
  "key12": "25Qspjib37W7FM7t4wZNjR1RsoSYhS69cacAS3hJ52FFw3sSZeVRc56Ey8s3ursb33AXfphjThF7sRGLQBMu2pyh",
  "key13": "2AdyS8H3e44jyZaS9wVffU5CUqRWuP9yf6RNwDrHvBJLb5QUwkCrq3kL6kA2Jyf7QhGY7dhaF5CESNQugpvcxtKP",
  "key14": "2dcSZ5mv2sy6FBeTDLDTms99BMpYmFYBG52GiX7ED5Ctoa14kyffhry9jjQm5NFnJobdRbKLRBWwQt9SmJqV9GR4",
  "key15": "3exgfb8CGBt9cbKa8B3NS8NSxoSEykZcskWZ556qCVYsmJDbZUEzkthvioS9Ku16MCDiovJYHG5uEkPhQM9ZLEVz",
  "key16": "3qcSCzie2Ky7KQUzoZa8yrGTao1Z2eAooarkr8U4WgqKJTgRGeQVRVroz5hgm7svPWqDVAMD6hiF4FdeFEjb8jSS",
  "key17": "4z4BQ42uFvL4i5mB9bm7hrMBnTuH1gnaYt8nWf9JeRp89n6fMcg9BJk3fUQLvfrMRfsVmVBRJVVYUArccMMmNAbF",
  "key18": "2xE4tX4kGbdjAzhea2by69Kevc4chwUp4mjRSnpWkqWVPNyQTtS9vMHH6ANeggPGK65qS1Ud9ihdXcWXv7YTdhpm",
  "key19": "3NsbpDVbPyGqMoT2aNDBMrvqq66qVrznbK8JhjRqTsG3WgTk8ruMPdQDpwD4Dmrz9fjfQbQEmLzASVbnR6eZxCqP",
  "key20": "4wYQbeKXm6yR8xSqJsQ4TE6twdDiu1iZJnJyZRrp5rrCGv1mYHRv45nbHke8hSQUQME3uL6XJGKUXf37tYWFXowj",
  "key21": "58Sucvt7r1ELBEsZ4kWJ6rst8DU7uQyHkxbk5NjQp4ckRPPK62f9z4NXGqpNdt7goiBH9XG4LvBK5RQ9kUtbh3qk",
  "key22": "62QJHTBh55ByrEjSW6SJSK5uEDEqBiiZv5WrT9wPSB6gEo6P97MeTRPkRJYGWFX1eMiV8UqvrLiHxXaCUVrc2q3H",
  "key23": "34KWcvxsA654vSxkbFquuATPV9fiPVv5ttnpjnQWkA2CumD2ESWttTTATyuy3q3z9E3KVJdNJdUBzpYDgU9kSxfD",
  "key24": "2Snqo3J4aEH1VBdNv3ZXQAsCaUtXjMtL5Mdzk9C57sExdn1iKnWcDR4Q6bjAB2FRen8P3zCPg17y5fascnL9NPmx",
  "key25": "47gN5WNWwFykGtR365Hnfsc1hLPPx1z3C7uznkxf5aQEeZsqd91KquqhwP9g35Z9aJKTYUBQ7KjgBcx642kSvtc2",
  "key26": "2NG4P8mcZtSEArLFx1r2pbmVuXHwoiprcry7NtxUCbs6yn9za2AWhoJj1Cq36y3rW5KXWBpUk3hvNuUZnrsXUM7W",
  "key27": "5T4KGEjcw8LYVXsoeAMBb5wy9DuysLjq6q6TLKDdiMMSPUqaTRvXFZ6nmRVVKiGY5356YA6K4CjGwrdn6KWdLkuF",
  "key28": "2NLGVJx5pQEA8SmyTZeeWLiB6L2Ai5bCrMAGGoPh7gcHBRV7iBagAejqceNLxjkeCmv23ickZSag7GbuXr9b5iwV",
  "key29": "3wdizVBpG2mwTXcMrE8q6Eehc48jcZwu65sigKxsdg5NjE6L7zHJdWCriDEgSbX3CnaVzAhSzq7f7ExTUv56tfuo",
  "key30": "5N2nskmkrHuriQ5nY67M1S1ndyXqesZGbwdnACEuqEcFuCRHpHghDfaVJvsB8nY6misgrHSaY1HmvGPpYTQfHfE8",
  "key31": "4m43C2BT5bQGjcqRgxcfiqf5XYuHeVEvARVsGkPYkXdW5FR6fehiLxfwM2aSNesPjR96qdMqtpUtAXiYAtcw3B76",
  "key32": "tozVqgfhf9xD5YpZmdZ4VQRsFv8T6dHFijrhip5NCdTT1MzMpH4QFmaFLqgFnMaWhUxGQ8iHBq6tkCeGTq9EWym",
  "key33": "4BA5SrsFnFjM2QQb8xZyXNSztuQFur9hP2y4AiSNdeKcr4qyfw8u7mkm6aC8sLWEzCn3VnWM1Vfq7sA1hiqeenG",
  "key34": "4z58qmpEiuFNCB2BCGAis4iYgbaScqZ5V2M2yjj6aeL4C1vdLf6vy5MrZGZ63s272vqTjCRKxfS2uSmUaeUyNP1s",
  "key35": "3ko3mpwzMwTg4P4hkVK8uQ31mz8s4aRUpmzL938QdkAtiuimcthj1jreUaPPDbyDtk2NLSF7nbsLT5K7TLayLMAb",
  "key36": "5JNoY5y34wtvUP5rg3HJdthUwAjwqjFgJ97ijiXHWGuBDCUMBidfLdtGLkgKjDhn75By3YmGceX3vn92cLk1t35G",
  "key37": "4VNpyP5mBYsYBjyuKkmCQMDRUgzZ3iZqvC9ZArbWnyQXMs9Zav3765TKosk68jayyr2gQbTuvJK26nwMsFpbNJb2",
  "key38": "2GDyje9vHxaUCcFider2EWwo5scvhtk8hTkFKJgVnBfQuaRk9fgZ72cnpsXt3aMvGuyaPoUn18CzswXCGFaeUVBt",
  "key39": "4XEc5aK1EqgyTbYK57eMfLCor6yS6gt13ALfA1M5RvuF8pY9dRiUrXRor1imftVdQ2AcXbHZCdaxj53Sh4MwqMVW",
  "key40": "5DDcbtFkPeaZnr1uK9QrcMp2WeFKrkW3z12ufVnE5jAiHKy5ycmLwKPAkBmucFRK4qnBks1KX5v1t7uCzbnhPEG8",
  "key41": "4qadauvkJygNK2ZaAr2aNXdF981MGvxUJfbdDHaVkQwTMaRZkxf7zPP9vYeNDDFR9wYAPZ94JhDCC9yT98jhewaz",
  "key42": "6gXBxbpvnHuogXG4YKbHwRUEnFmcwZGiMi3HsHZPZguNCkam9waz2dPb3YCUUz6EXe1jvDKHXSnx4mzbuo5G4Vn",
  "key43": "2UnSKqMP1EEqMU2fMh5SGgY8cfiX8gFvQiW6i2JFgL3SMUjE9KduitKmuRCw2RatNKuBLRwSpsossjh52DtSUWJD",
  "key44": "2tUrKLWUGZmbjyQ1hnWF5hex7YA48E4WGn41hjCW91izMjGtN7t7fHafH4veKZc8rg6wY3cEAuTSD5EPbwxXkZQt",
  "key45": "39eNJiv4rojJuUraoHcnPKdduS3YpE8iPgmYZTqemrU9K3ArUDWVfDuaXsUY7pAGesTHQpzUL78YAL3EYSNQyjf",
  "key46": "3e2EydYxUahu2VPRJpSuSf3KqXFbrLHvSV7XY5h3Jfsc1Ph8zwPYkTEGNbPbVnvJhS6Zr51YT2KhxZ8LNdgsXh23"
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
