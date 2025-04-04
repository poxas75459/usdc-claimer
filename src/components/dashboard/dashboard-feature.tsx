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
    "2LdFRCHAF8Pddrb7kykE5vBoxdccxs7NjDoJYfTDzhkJ8Tzcgmys9N4cegHFSWz3Z4d14M3V9oiFckEPnHnNnpY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NXVHM8yU9kZ8desret4fi3ZHNfnTcCmfpidS2crPuxAUYzaLHPHjcQXhArwTMYi2VumfxnpFCZBXaXB1zRNWfM",
  "key1": "64exw17xd9K8xgBg62QQZjxjyLowjQ9Vi8n75QA6HyhzgDaq4KWWfsmVDVLQzdNZ9iLffXjcnLvnSy2cxqWrc2Af",
  "key2": "5Y9arNM8dw774oJUNTJCKEBfwYDGs9oB5czpdxmDpEDaaWfeke87Z45iZVgJBy23np595GzjugUPX2sdbxeNcuGD",
  "key3": "4Mwgkz9CZzh47vXb6b1uqFTFcuDiursxycXcfj5dWc8jPaSMRMBXywAWRfPe9GcTa1SGD62fokwsNH3KUWx8waN1",
  "key4": "5oHZws6SfFyqfMkGHcVwZHs7HVqgEAUmzbLEPGng1ktUYeLJBQ1RsFgraZ3XANwyJ3UFJHFM2rEiZMreGvUXicZo",
  "key5": "3kwGGvTTiBLvCkY4Hy9tB2U1DcntLrdUSgUkJpPCN37tFRnNztBYCkcE19P6U4KaSiwrSwFmzU7MYiQXpP9civ3E",
  "key6": "5Jsf76Z1w6ztTKU6PoFbSu3sf9DhaAPDKpq8FaW9W3Bb9Puaqs7F6wni6ZUChcqU8Wetauph3m6GmmvFHPMLoD4P",
  "key7": "5xmiwCHBYfWsYa3xu6QjtX1iPW45RGpbGrNNQZuCm9rNnoQJsMbNj8zdoUW9Uibu6feMDYeHH3v3mKd5y4n4f87T",
  "key8": "54Xpz1FpquNf2vVj3h1Nm4E5hBbd36t75WJMMHXSnqV4z4dc4SwdJKt1SPDqsPvqonptj5xBkcVdMLSzfEeQ8dPV",
  "key9": "mvMFErFv73UHSvJk8trEw7jhjVBiAbGtWbxV9uWvJuS6mYna3nhDfiXRR7Ay9YdaekAf4RZZpP1j8avXZvb2Zbi",
  "key10": "3TrifRNEcrCHNToBxfM4E6pZKZ8HQGEMFYnytJ7wx6xT8yhFgBG3jbWykRehXmH5z1coi8J18dPVfpZEZwxhBumZ",
  "key11": "4U4FpD2AH2WokLZdfozfoy8YpcRdsm7yeou3mhtu87Xo6kPiBzmUuyLLs74f8rnAdpY6MmyNpMMz9VzquXWSRhEs",
  "key12": "5zjFi325TYweD2cAfbcqzVEkzrf7hZgq2Y7QmeWi37jRyxVQzr4yJ2PWQFZbVQasfRZEALMu1etQk44o56HE8kYi",
  "key13": "31WNPz66r46xyH2pNv2X6wCnEJPsfX7xaWd4VpYuzT6xgygmszC3u83DoRxwmWmr5qxU22wXJELnm5gyFuBKTFtZ",
  "key14": "2xNQzewL1Q9Eh8WgJcs8xmZHP8iDBt98QziB2D3ovEsqXhfNuexbW5muQCrFXSEW6LG1yofupQUaXKFJKVAo71Dr",
  "key15": "5z8JsMPnTLXFqc7q2vnjmv8LjoVsX2hzQKRMcZfkYDF9HPf3aUvR44i6kot6WLuueYN2ZYnnRm61Px4L4xdLBd14",
  "key16": "5AeNQ3qL5Wzf411zA9fVgyR8FFcfCjwFZ84VAkfuQKopBk1rfcffbu7MBYhm3e5juwCpbq32ufCftaCt6AUA4za4",
  "key17": "4gxRYtYZPpoA6oEyxLwoo341yfVUNrzsLxQqyK3HDAHmopz9AwjzDXBxFGWVfUqnJ9aNBtpVfHmGJPk1RhPY1Ydr",
  "key18": "29T1kFXZ6GJLFuH2EXBHvCFaj4kyAAEhrPARhJLLsAMR3tGk2KvU9R6vEXF67fzovmfXMM4EE6ZW9LNZip4f6pGW",
  "key19": "3fwhQSc6SbLDmfFGs6tCKZDoyu76eV4gATM4vfxLXGxhKPEbgz2Dc1crmbN7UbfNgY4jFsaAU7D9R1Li7P5iuJCF",
  "key20": "65Du7k3ZLE7TT6qkN2t7LnqBqZJDPczQfVjzD1ty5KYiYXYYaij73VgR6sicMtarbf1di8ftYhXTVeVpbjP8EDzh",
  "key21": "3F6LKNtUvSSzm2Kh2az2nJnQ6qijRLVVSWbhBZpKukAbU7z64hxHKCgGfwR3xw2a3ugNeRkcyGzq7D8BKyrX7cPd",
  "key22": "2WorZ8PpEJhGhaMd4erUpvtQEZAmH4se8Gvyr75AsYnVXHQ7zkxvVeG7XCvLZSXQHrBWtXyHdLWxUHFyXP5jbuUT",
  "key23": "2rbeEmZ8cUVLzYFxmZgwFVKN9u7peCUrnhUssNJtp8B82Vwd7UwP8MnE8ZkT5bhmSxAZsJSWFXDisvVgiiiQoUiH",
  "key24": "5CGMUTkDHNb6fvzwhE3LiUvMkydocR9m2ppB6LSmds7eQ2g2CN4c2kmkyEsRC4meWuD5TRDeK4wM6cSsy8H6Xp3v",
  "key25": "TNbH3xrVtj8wxsXC3CZzaY6pRASscJyxUGCXuYdDVEBzghphGgbSM7tvtbe7u9iuJuJm11sEmeqfVSdyngsrfmC",
  "key26": "46aqNyBcHeXqdcqpCvQ27w3d6jBP15Z2K15RJJTUFo6tP3jMC47wjrYS5VhRGj7xnGNnUmFXeJnRZZv54ZKwpbyw",
  "key27": "48DcfAqZxccj74j8cKebEaiTtSiDK9qmGsvkz2wbDw16r6ejobcLVjfP7zpvd9yXtN1uioLgHunWQkoK5UKEm5mj",
  "key28": "5Pp51MB8gx7VL53YYEqYa72Vp68ABg2bbVsvkAqbCH38DM5CDzirKUp6hxVmYAFTxFeqxYy6HyGEEMypQZBsvWG2",
  "key29": "3uwqcBzEhLAnJErKsueUJZiatdiKoG2UnkrYeTQepo3E54U55yu4pHeUwa7VgAxirKX6JTHde83dmBDinEA2jdVD",
  "key30": "27H1FvQKA53KGjJg2Nj7wsRsXTgUFFbNBUWNSH7ewDqm5nMjCYYm9Z9acHtaNhvPncXbVN9CreJNJy5PqKuXapSh",
  "key31": "4sm2pwuTTHZhUBcG4f3BQjMRwzaNp7mUQxUbKwPgqTQTZv9PhWYmMnhYk7VoyWSeCUKhpQ1KoFoHReqw2CnWT8fH",
  "key32": "3oNHxcyY891YHB7AhLbojXBUbQYjfDkCgmkdLQKNjy6yVRqVkG4Jsc2kBLMvV6CiMxVw6dfe9MYkK3Mw723ERssa",
  "key33": "p4fNpNsuVBF1XmvtYfz6PtwGH38aUfPGXotfWkPFvhGqKw8cg5gx3XBPgDY6P8hT8hkDEcVH7JMzEwCmfGjtRj1",
  "key34": "3iAvMGYHqbQuFZZGgDrwYZ64UswrrTUUe5Rjb9w8wmbdAu9zqDsnmshJ48w4AKDmLgKtpYMPXhYxtrnAwDzv8ZRh",
  "key35": "4Yyz4oJgEqom8LsVFTpyxULafAh487JfXJ4nDQ2MqDRsNKQRAMZXb4EqTpVRt4gkr4zDRB1KtvrMKgpwvxY5YhH5",
  "key36": "4j6CEkwTt88P8TN8JcDZopgoJQfwsJzA68Hg1FMaxit7AAYRPSL5SgyUSnBtshpKt3ohd6L3Ai6GLVJVa6LhCf3z",
  "key37": "4T3ACgkNeTBZ3EKsCZeSogZwXVT7C5HBs79AefedP278cSyxKwLRjXYW5yXp12mW3czbjz3HoNfMLosQcRc6aiUz",
  "key38": "4Z4GRUoyhz3E8wf1paoKeSTGu3xDe2NEUCreHJEVH2hsNwwBBaqXDdc2YGPUJYU6cGHj94FJJEGo8CRrYtWQFxuq",
  "key39": "U1HxzC3J31dq8prumE7EJ1ftut1HLgQaH3JPscwrydG9R2Q2GXNJtVVcpopANiWN86Dgv3aMwmt3t7DnGiRR2aM",
  "key40": "4DivmuRuKrS8GA1TBvKZrezEvFoVhW71btcUyxfpVSmBoG2iYcTNs3RoU4yTgiwHtWwb798uCkRot6JznFJopEn1",
  "key41": "3PnAnfBeyrK2ondNvDG3p9JUHYdW34t1rAfuJywB6xRdrMA6fChhVqsLXVHMw6vodM4EAaN5cQW44W8nR485FH6u",
  "key42": "saH6b6dxt9V4WHSGL5PasCF62MsJqeadUo6r9a57jmUYWxMFCbnmMEp1fDtVX4uxqdjLjs6DpmFAq9cWptUAzyB",
  "key43": "616aYHGeUEoZ2ib5cq4GxZMjpuRW2NgVKX267CHonjSzwxvpq5gPxyKhbnyCSLpips7gbhpW9JXWdQAiy4ic7wdh",
  "key44": "4aY4iKjJaVyivzP1VyNFsXBPzh5PSvTt2zrVzhDwb3b127KF1mQMkR9eAZcDRgEwiLZj5Wxi1sq2PLKFmmAaA6FM",
  "key45": "2qUfr3SRZAjjxNeWaY7kMPV6EMU5wDE65F8Z7r3ru4tyjstCVTWcr6Dne9BESWFYvk2s5ym1Ye4ySdP4aUDuBca3",
  "key46": "3GhGeTYqsewnEhVthXxWcvzuWfZzSUHs3ByKJjvuBCLU5KkMAPUncQ53risSTxc27i5JpneqVFv3qTXHC4idZQJX",
  "key47": "2nx757kGg3UBHxwJzsBoxtJNsn6X7UhB2vfpUqvznht3nSKMsMys3j8zY8Yz33o35TUVe4yL4HXiGVMRUR9ZSRxb",
  "key48": "56Kdc3uZya7V5r8Eyn6rjSrUWFiKj58hWadjQMzwhp4hgPAmiTWm5Uh5S9bt9a6jTf3xnSydPL2aHmwwfrWEzEjp",
  "key49": "3y2mooSJyks9PHavMZgfkFFSsCusTV88s8uxSFpVkmyPF1kBAX4JNnnDbQDK8QSQVjriVPKg2GnNcax7tLDvUDq1"
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
