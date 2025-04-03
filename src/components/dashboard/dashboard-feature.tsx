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
    "5oNDytn9uUXtqd4Kac9pEYTZeUcbGLprAwjJMYJMDJnZHjZkHGYJ6UEYFuhikLAtewtM8jYPUDWRKsbdHt4majvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23iQRaX3Qxdg2PDvqRifbn489MU2FxU8CoKmMREuWtKaodKwNz5BJ4aa9EdmQoxVtSXqMrvLqmpcoNB76iuR3Jbq",
  "key1": "fR82hrBgcwdcpfDGMoy7VqZy74SxtsdzbGHiRRT6Hfw5tR3T7HE7BXn6iAkMXzgiup7aZGGafkfkDa1ZHscThgF",
  "key2": "5XUgbZKaK35iTLDdaE1kx8UhJLxdxBTjhXhG7T59raeKMLB193Ec7tzb29YZZKYYBrfZNMN1ocmPDjxWkJtaqoiY",
  "key3": "4rXbVwcR1wZVbY5D9DkCj5MeCrBFGiX168pHhaHUdwsf2qwgMpgncrf1K16dn3ozMma3ZF3J11aWWJ89fWQkykJb",
  "key4": "4ZV5uWwcG9Mygff7k26srt24XSykEXJMdZDeh18UJqUkMVX9i4f9R2pn86XDutTAEE5WPPXjncjjAbSq5qejadZf",
  "key5": "5h9byVX5JVjp1tytnNA6xbkWLqtGAVXkmVoKt1eXcjxa3TW4Q7YCmfDseHzQ9qqP8P1gn329QbmCj3KvkTd7TwSM",
  "key6": "3sybWCrQfUE3noCLCuDqvsv8PFJTVwkPdwET4KLAVmax5v96juo8awMrkDXgvnq65jnCYZNeyzykuKTb9KkvmZho",
  "key7": "4ArijrjKHf8BJ7aFLqLANJuojp1tgioTrJndQtsgXBZ4kYHLPbBBwR6mTSuyDv9sy6TfMeCQnWHxhm4tYk9f2pfR",
  "key8": "2aq6tk9c5vHULvMcsHV1yu5z3yf2kEJAPaMWZkjucjgYhK8g7agLywpANM4nYuDnB2Nxa4A4F7qJagHfv22e89Ub",
  "key9": "pUfYQpuwjWQykMjXHEjmoSC8pnoS9yih6N4NeBBEij2tCd5jxVupoYXK3B4HAk6s61pv6AMkYth7kWxzuQL5hq6",
  "key10": "Gkg1wgvMkdnzNvP3FSwUXARsLQnG7SrGHscBGczPLcfk3Una1arcCTxtXaNEP1uNkGWQx497FD2KgdFA2HkZKnC",
  "key11": "acfpDoMTCp7ZbzUjzDQSQSh67v6URDq7BpaL6LuJfxfUsNSm6HxJ8t9XFiMEJqn7JCz3Y7C3EpzjJ5hMphh9tkG",
  "key12": "5ViRpknRGhCSms8ScsoHAkTQetFG7Pmh2sB9uhkvUWzBvfpZ9U9NkrTNjrGNFXUAAkMaBdYEKFKMVwkM3HLBncbu",
  "key13": "zJv1RWoBS7Y11sET7QP1QS3p6E1AzCW4qmhMjXVMz4ADBgsF5AM7PPohu2zvXzTTQxtdiusRakvozCPXp8MbPwF",
  "key14": "5komuP8B9HNVRPMdUnFoZTCvG3dK29hthCHzwGFZNBXUnd1s3LUvR1v6VUv8DG3uJYW1wrQvN3ZTN4veMBiBpvTM",
  "key15": "589m34dTpZost9VZyq7NhJUVsj31hWE7vG4qf61L5UhJWdLMh9MdMGQx4F2uwLj5BnVY7sX3GPmrTqy16k9NqQby",
  "key16": "AneaC16qw44w8rKvHArbtxNZkCiqosShZW9371Acx2DuqpBiMibYLrRE5x1MUmZg1hE524amsrcz6pwkV1x7XNA",
  "key17": "2hLgVkouSr9Yy2sMCsZLhSzJYQ6w2b2up2qqrGUd5bJxF771BVQGvehQvvswPKEhjgjpAczGixgbLCtqkSYZ8NKp",
  "key18": "3fow2PuNWZxRTaLCqbgUwoukxNaGqBZYpfKwHbeii8xPfX1Krk3ZvbSnmXokB4VheTmBX1CsE5GyLniexvPSXjbW",
  "key19": "4r19a3pb9HdFgT5kD9fShPJALuFoxzTd3gUXY3ctbhb6iYP2SswkzU3sMi5pUbVJS66GMgSHSyPFN4RradkWRJeU",
  "key20": "5HdK1MUUMkRwT2vfHtxNsz3dPFDprhQLexKnWsggKVaCJAikYFS4PYPVmNL4DWAyfkgHsi8uhQBbPeDdjy8zHkvu",
  "key21": "5346zQC4S9zSy6tgGVYQTUHcHx1opXTYtKfaDZ8gwDiN28RYQAP3Kddmmxzm41KQAPuxRRsfPmTdt6KnAsbnYjbS",
  "key22": "5tPEDMGuE8a59ZgPUDsXfEjEPHRijB824FRs47wRgxo7Pv2fqbod5qgZiq8nXuSBtnmMVN2ZiP7HeBafCXY8EXAj",
  "key23": "SPU9V3G1aSMY8cWhyDKVbVMwP4BPfEUDLQBdUjPCSNWyYUQoDxD4dndw7Qu2QFAZc4nBq46j74Fy3vgXmfXzX7q",
  "key24": "4298Mq7Scu5YjEYEDJ9f9EpssXK5cy3fJxLWAtyS9K4gZfAxz5k1jiJkpMTQq9gWkFjqMkNxgCFoiTzvvSUWgfF9",
  "key25": "4djHhWKb3vwaARZfVHcGrHwDKEKvqZXNdNPYQTs3xyY3Ga9oji2hAYy8YzMZNiwhi4KhmG5JA9rQY3GexuvJZGEN",
  "key26": "4KGwvNDxbo8BZaBALKSZMA1p7ZUdZfsz71Xw6ADMWsPTjuZGgPqnfM7YicybaA9c5v2iweXwG9zDQPw3pUv3osAW",
  "key27": "4zXZ69Zv7VvTKgrAHvbvqEoBHTTRf4DF8ZsEcNFQD9iJBCktvVEoWPEcgJvXo2qN1b2bCvQyh8JXLza389vMFMYZ",
  "key28": "5Gw8cerHPxQRRBsgcVnvuXEfPdAnit3hdRUGMFQtFvp8x4qJAkK7Su4kQ1nYW4nsWRVVEnbNos2pAVSmroxQmuLT",
  "key29": "453K2VoYhhPUatCVeCUxJcdhCjgM8Veqr4Y5XgncW8tfnaftmen3pUJmVUqVzTtpJyKA6oby3gz58ySPgKUwdcJc",
  "key30": "2CNuPHUekw8tVuEXCg4RNJdRbL1VKTDjuwg2kxNhWy72PtjhHpgaMAFsrb8yQdjPscS6LP1XpgPkJbYFpZ6GqJdL",
  "key31": "2KiVfYAJ2R6dHJC52yJKy7T1fP3g1E2HCvUHEb4y8iqmscuSPU2XXr8T8pVoFZShnLPvgL6zXgFUZUw1PLvi3mpA",
  "key32": "5bgX53ei5qcSTuT3qkpL7qxMTUGFe8ssAoy8E4NNNuye86G4KFjg8r4S1YywX7ByQtdg8zL9QJpoPi5U5EGUwNVN",
  "key33": "2JdsQPgqa8Vv86gMNNhNdUbzikP2vKAgNQYyFHiPVMxe73Rw6dcDu14F4oveaSuXJvMC41UYHnQD9dHDvwguMGXo",
  "key34": "EVAm1A1MqCo3iKuXVnvyy8gRz2M5Eo2uet1qSSato5y1cGheGx8TgfcZgLXkKq7u9cVyRj4HBTW3A1eXUzxF5Wa",
  "key35": "mGfBnvbbeiCdt8LSd11JTLpB8MBGUZgTdUSA7M9EZtzFU9Dbah8YJw5QraGwAuuFbgEhCgMnFZ6ProG9TkhJqR3",
  "key36": "45tj5YenYgn91jrjMNcr91rbHGbtURiG6JKwrNuKujAi8vMouFiXj6xVHmt7cgYEEAHeucVJz8jJuNnunsCMH7uv",
  "key37": "5ckd3Ce6rTy2cCFcxhhGkwL9SULW55yQMnxoq2rk4vAULwG4UxyPyiR8Y8jCZuUPW6361ysQhHUrjBMhf2DvokLm",
  "key38": "qvi1VrtzR2D3bVumwwsisVx59rBZqCnyVoShCH7R7aGKaVN9qQiTam2x3L8xiNCqRJaC4u4MMwVmNQQyCwtBAbh",
  "key39": "5csg1pWe5A8UQnZWeqmhsJFCtzd5Ete2MHFJz2tGQfgtA3Mf4T485nVTjtMrYyfqgyPtcTWmzW5hQXoEhyV216rK",
  "key40": "567LmGQQ7ju7qP6SfTiqwHr6wc5f5njtctE62ZEmsiK5u9BZXA6NEpm9UQRtcJMstCjgzK4EoLGXB5oNAvafWAKK",
  "key41": "3MeezcFpRnUCHPDgEKBi2H7Zv6L64igRJwUunv4zSxQRxsJHcaSZBdiLsTCQ2eiEMEJEC2L7zbYrDtbJjPAP4sJ",
  "key42": "667TiPGgPSiap9N1XM1Gyqr2ybAbZW7zkroecwemrQkogFrGBuqjMm7GPgE469KFEov2pQd4vGMf6qXiryEADp6d",
  "key43": "5WTnmVYrpzhu7nkukjwdERTpjUzcQsY5AcZkwMKKXvfhHN3MUbDtP5KeiKBHKXPUKJzZit8khof2xUxFqigTwLw4",
  "key44": "VF1csvXiP5KcKqt8DwfmqbqnsHdRYoyXh3sHWmKBQYgWeKSbB8yG8LyhxrVQck7Tgr6JBcoWNuzb2YgrjsEZA6X",
  "key45": "3wRmEZgfJxq5MEchawn84mRC5thPARGKpiyF9XQtCGB9dqbhUV5KDtM63i4cuQPmMN13oZLGDhhne9QosFbRWf3U",
  "key46": "3UcyjzaE5PjNU5gZY46z9v3GqSuFp8vqgbWHWRvR5hXJUjCzsfgCZAFRThAsyh3fckAjnbSz3yFREKkb4DLBy3Ei",
  "key47": "3eAxXkSjjcaiXaUmYZ7gco3mv181VJMN2uKjWYbPgySZh2F9N9sbSkyGe7Gz2FepZzYRdcEqLvh6hGcBHVQ5RoZi"
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
