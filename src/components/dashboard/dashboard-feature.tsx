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
    "5nkr8u8TFAzjrwjiXsgVsptnXz1pmAFWhak2FNxuyp5SPptzjZxCWKozp8TM25YQdS8ZwysNJFan8EKzXC4rD9HX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVjGdULnWHLQfHfRKbStjbryJfuaXsz53Wxd1jC7hY2YFwMJ5RQbMDKTXXmUkuBVvdgmmWCuEbpqMyF2P11izmP",
  "key1": "4GPLgwcnqxu33koM7hmPLCjaAZ7z2Dztq4ywQks9gkXNggbkMAQwWBEEZeBMprK9VhZR6ocjNW5PwT51nve4r1Mt",
  "key2": "484wWoaD4s5LTgDqokSz79RdidowHwiEdqVod46qg2hkLAnpyWd9sfwDyNP2QgAx4eNwDh66v6Ep5PCwP7u9ukjn",
  "key3": "3VppfBw27GgGtji86acHG5RPxCS76kfR7AX9sPuD6TqfEfZKfR4REh4HqSiwRMcC1J2kHR2i7NeD9CywHkptopAY",
  "key4": "jPAjqVbxb8jPAKEDRngQDyqi6myvSiZrEccNJxhDm6NjmuQ27hFX1HdaKG8YSA8v8j7Y4uyUSQqzyEanG4WdNTL",
  "key5": "39V95WqfeEedcMN4cFsPqrSbNSnMGKa5JAvbsjP1zcxVVEJQj8ZAbyaAGiVKvnPpci7xeHSj4jRDfA4j4cpmB9NR",
  "key6": "38h64GhdCgfhzT8AJozorJwiAaQEsRCwk69ZUFtbfPxiQP2pjLAbn7KGg8NAkAxnHhctd8ZYGyLRuGrYQBPHnjG",
  "key7": "2w573Ekqa966XE9eKB4x35LJs5qaYDZbcoZyQDhJ6XrXffcbWQr7khHb4fB6kFwB4pY2gnqZCitr3Lsf84buJUkz",
  "key8": "3frK4umPJ5xuKdVZGxVGu9u9h5HivP6Jb785ZSpwoYoH1pNTi84b5hWkSZBLN69E7ngDyFWq5ThFcDrRaFTd5ZzT",
  "key9": "wBhWBhDwWpZ8GApVsjQYscgc4XuyViwda9Uio64aMRKvcvN165Vicf5RJHZ9nUwLmoMrQDZmeUyh6i42ivKSHwN",
  "key10": "2q697NqQKwVwjNrtEUBYRYuFg7YszaX38rDwwwHC9nwpm715iaZEKZfF6q4kiQVWAbzA5eVPyMVcciC6n7vhoV3M",
  "key11": "kGzzPGTCmTS6GnQxZgDg6AtRHRbAvX5xuJzkWF14BwbqanpX57pquesB43yDwTriqgZAxAcrHoRSq4g6X6RwHLB",
  "key12": "49J5ahojwupgihfrkero8kwtHqRntGCGWEFXh6fspcM8tQKkkZjUKxTu4nmkZYcLPTKXYR6GXKEBxwGn4rLnZKqP",
  "key13": "2cAw65TEN7qFpufP8tN5zAME2xyEAM9fif72k1yPaZhqxzNjG3DyVteSHAPQpX8esN6NRiq8ZAd1JipJEzmAPWKZ",
  "key14": "4HrmYwQ87ZhWnVcd7mPuf633ij8KTGCuWikDohDUm9VYistG1YghPq8qMwuAfLK5yz5JgLKenCPz1nnVVR6X4Mej",
  "key15": "PzF3wRdaG1cMbU9F78pzB77GeUj9H5qC3L9sEXjNV8v63BuuxZXkvfdMmZnjZ3hmJG3a8KPtrnCAiHkLoMPvTWf",
  "key16": "5YfWppUy5qeBUnPAoY5GzzyG5ZLUyyHCfu1J5UiMt5iZi8FVsyYHRJ8MbGi4LRDNXYpwgeTe9erSX6RVBf9qdEZT",
  "key17": "yRd1c5SMfLLzwdfAuWciQJWJCRdNHQycSz7cQSG3q5DwxVv4CbTawfMvVfCZa5yt9JrmiDfAdVHQ26jNo8na1Ma",
  "key18": "A4VSKbfPgn2xwmESL7b2PVQEbJtyZsk3R9m4Fs5zeezEWonWY91QR1Qw7jPgU89RGeUa94co2UUSpkSZad3Xwpt",
  "key19": "3XYwik33XKEVc1n4ZiEsfQvQbFWVLB2Udi4ZMK5943Mv6arcUwb7Es2u2Kpsq6bgosLtarJUbaLRzxZAL85kgC7N",
  "key20": "2v6ccgVdQhagJLcqnaZuNk8cKmctXyCBvXiGPYGsfZkjmuYJzi85wbzM9mXBYLgrYTo3zpMxkAgLLGjfQHQLfZsH",
  "key21": "34sJWSuugCdy5ndoAkCurp3THueBesoqsNiLk8AUnuWw59MR7iygZxJvQC94NG137AD8BJYtGSgjvotkJxRCmXqY",
  "key22": "okuBppcwAADNzwYpXpfos3ANfGNrz8eZuP42DRsAQWfz2f7gkb2fHFtFCKZqUWjaQFzyBpW4w3Y39y8UWCMqjvq",
  "key23": "5RmuTiNHwLEwgC2T1Zx3NU9BP2LZ6WwYRiof9qCbhfirLVpU6FRx4wscsziDZvJHUFLxQZofiemsQfLhsgKQxuPt",
  "key24": "5hLTkWRDtV5h8dM2HjVs3zML3U8aGdi1U5gQVNH4SAYxit7bmhDgKu2HsuG361rpuNEf6ABAe2vfrrnrhXPbaVk4",
  "key25": "4cnvQgEEtSbKMhhaMLtQq4DuKf26PQRw2vd9uq5kdEjJSbiLZVqTmMfCioioHN3e42rJKasn5js6B2qsnBkMEBJJ",
  "key26": "4dvv6XbVoiZnQaJF7goLcFrULevYfk3XptP2UT7gqipWJgEvmzHXrQYimRGHTBHntuCpDNZekDFiwHgjxLdJH6vp",
  "key27": "3GEq3LkyBfQkRVbw4M3q9pa9PJKsV22uJQJ6Z8MeaNFbSpBoVc4c3k44kLSK1kJdwi9KkNBk5keJRHt9ZP8vE4e1",
  "key28": "3bujhTzm2abE63K9rM8y2krGgrbeyCZiX4oo8weVZNZXuF9yUuEHeSREJf4rQRCrpvfDk6QEzNWD9Bh59Eg7kpeu",
  "key29": "4DuVR3v78BZu7nkjQ5Mj53T34rP7W71btYPNxxpLGGbuKHwRgGmSscxgjSvEwmQiBwXunYDzKioyQqQaKg12V1er",
  "key30": "5UVMkzLBWiv3cbmjsfzS8scu9nLrkhM8ELPCC3SLuuU2jV5v1iwndGZCHeuiUUWruFnXiJhmAGhkzNTbKHNDeyfX",
  "key31": "3KHuEoCXbdRAC1Zm9wgBaYkthPFrM4pN3dgNVio1ABceBY87fEyN7ss7GAvkp7H3iNbyeVYqVHM2jmJkK8gJ6LSR",
  "key32": "3P167XpmEybcFkGfmZY6yaMJFM3W4GyRPfySAM8AafsoUJogstNhHRctvpPAJp6deMhidCdzDodAozWosAmhMJdy",
  "key33": "5jPRaUgM3rzHWQB5JQ8ZNPZ1V3Q5Vs5ptvawyDqXETBtrDABsE3k5Rd6sd2AcquYzKsi2HxRasWRub6oB6exCbJ7",
  "key34": "5KBrhtoKS7sPvEcCoEPuDRmFtKc7FxYZdCfAE41jyZDJq81jixADu2LF8urGcZH8JaNVoPq9v2xceH5ehD334axP",
  "key35": "4qkmJdMQEhWRtdhfrNrhpabEKvaFFoZt2QRZiEYFzKcQ75FpMy7VoHdjnSNtQnY8UBTuUdUKP26z9deaPs5HXUfU",
  "key36": "5PZxyPQgxbZcCECYv1gi5ANetaiwdvcMD8hPqryBtEeTjCF7Q49shVP5LRwybq3zJtAsuvBp8PBfeXSrEcpZh1Am",
  "key37": "276pSsag48zbHRWf3EppGgNPrcCDEfxWSmyHsNUQWEUeE412C6HvcoRf1fGAkmqXyBSMdQYACd432gTuNuMaDidR",
  "key38": "5G8KU827HQMjbSJ4aAtiLwFGoGzCy3PSDipXMmpnHcj7ksB73SvaiSL8tS6AfJx3yn4ebWLyJjThqNNDC2PzUNbw",
  "key39": "5vzxGj1LeVn1r51h9R3fmzqjVfntF2Q6iyY9wJSp3jMapoJcrtfQvt5HVrMX6i5qSKBcbY2wCVts1FVDLBSsuTMR",
  "key40": "5yJV5hZ6wMNNqCJ7ytmsQFApPiW2iaTNPE5eF2gbL3ca5Bxw5D8qPwZpMEN7eLg6J3Krs5kAXgyNhwdstpgFT7MS",
  "key41": "3HuYtq6vuDNbHgmBLuNUHLwumes6LJ8Y4ytx1scQVesc7YY7iins8a2PwszeUGz9PaKVcaWNKgRFDJsEhCPjsDnH",
  "key42": "5oTZM5HHdfPQJoavdUy32LUDnsS7SfT97BprZNNFssQwtR99P7oJtZDAiHK2vac1TUfnNpEoavwQDNCASP87jiTj"
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
