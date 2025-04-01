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
    "5PgB26WrS4bRhUbnkVaicvdWkDTakkaa1Lj8WNDwx5xMLbvmCAj4A58iM2gyPEesa8JPT52QgdQnNsvPkHey7fZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bKvXqtR5u6ZEcmnCpQo8iqZKJ1qKx66gfaY5q6uuWrHyVsFgf5rxqQrXLXNQzZk5Ft9ZkxrGNMBJrAa8J8xMVPc",
  "key1": "3XDorT6Kq8wF5YiEv1Pw1aPCgNZto6XrQtYv9uoEzwawWFSST4Tqc6LSqtfWwkfm4s312saEMnQbYGMnfmowiFfR",
  "key2": "63UdewK3MdVQVMp3wqSNE3rXEuCiY9U4CBNrk9kDNqhcpfoC1idvJUFaRdfhn8yFnbeDT41oj5AjhmS3ozC68tmJ",
  "key3": "4gayapE1uMtT8sswWFMD7D9Wt4QUX58DmQLkojbT623PsSYrG8LwHK7MWXWictm7eEL4kDAeWeJbW8Aug98JQFv1",
  "key4": "3WFeSds43rAt89YWPD4Mm6RTihY7WmjBdksq87gxFxdWYhofm5qwjVB5tHVUmLBj2tJ16q82xN9x5mAXbGKyGtzX",
  "key5": "fSLz9vzF5VbyLxHjDyMUBDao2x8kYeSWeb8BGQxAXkonD4TzCygqywqCb8PbMRAeK3JcqazrTejegY9TizHk5wN",
  "key6": "3rMfBKChKRzXZEWwZqf1gxmfV5TA8iu9nRJbzBZpgNqJivQ1EsPRNBas3S4kyH6S4qUQEcnA88JjrnFUpVj3tHny",
  "key7": "3Ktdjz6sZovdxGKSnQUevmshEYkSwH4mYXrtXHiYEnduw3EL3pKKT9cZLTQvuwthk95vwAsmN9cQmbDusCV84K66",
  "key8": "4HAact5xxLzfgZecYbhinEXiRhVJS2LXCgTg5eK23SB2zRF4ePhsiUoUmXuHLdUXWpYRGGfwVbimmAihZiF3BQTL",
  "key9": "4BJ8iWqpjL5dz6Q6wRpTSoWLKsnjqaoyRjSujT5B1bhXsDoGsbJJ2JtnPKTx8qXxVmEhCoREC4FEpmeJGARKYGUr",
  "key10": "3eKjKWYafJcsR4zb6TsZnccDmXpjFZZrGPbhnR9KKgkd9bpb3eDzoWAwa774sSVMKs2A9stoL9JavYLqVETxun7J",
  "key11": "2yNtZtEDvkWMMZcvu5Jr3zakA8GxN7vWEedaACnVS8HT167DmBhSq46aTyTRkLbXKaMaEhX2mqcGng3KDL4CYtWV",
  "key12": "55ZJVkQQdco2MxrUo1jzn8bYozLc49kUQoyJ6336tCT2Dz1MfcxXj84idhYc3jzUgM3GTi9sighivrkaDB79rEGm",
  "key13": "Xx7WarjKUnkZw9qNU5VeZaxKfcEQzm3o3RiW8nT9WTP6VxxWchoWmgCr8YjpZKR8yyJ6icgwW58iAgXddTjzQtB",
  "key14": "4Y8mM2aVRTSvRrW3oBqniJqmkGKEPLpkZP8bwJWtSZxAXcfqwjj9VLXPSaspo6nrMbfBxzMSAJkThxVTeTC35M8v",
  "key15": "2KQtSvWzHN9cvVbpaiE3FKHdbEMVUaZugZ8p32CKYCBvhkCZfY4YTg5s1SYXHijN3CCztbdFw1CpwD6QQJme9rJS",
  "key16": "2SBY6MMepx2KWKQkKYNgLH1xmTnFw3KT5cHaMsBJcZHK7Nbbd2UAsAQb9Cevd29dNAtJW53Had9CWn1Zn44wvXcm",
  "key17": "4aQkMjb2GrehuFVpuR2Q6MqPZQ4FZqRrwFD5uCWVnmM2VVQFEDPftMxQR1GK1gZUXP6cY8jPLqR8KFYj4ZKsWFZu",
  "key18": "3KHu6X6DtxYod6LgHRLx78cZGNqchMeKgWCMGadpDAAQQxRbMa47BcvahkxGyvve6qZRUv21HmUnwELtHLgmZK46",
  "key19": "3PWYiX2pceyRWR51UP688po8Tnt4MGMVtMyTB9KhBVskcWcccV5dnNF7fe4M6QKdHrwQ5nMeDD3oUgg1QX3EDkBf",
  "key20": "oCERRnDc5WsftKwtnf3ir56dZPAAUz4sS3wsWG9dquuWmbEFCLvpRbUJBrrzmJ8ZpkGvC4DZxyhvFnNYpMxdbB8",
  "key21": "5B7Cj1tCqz2K5KewyCtMGEfgABDaNSKr9h73uD6E3FVe4bYH23or2uVZvVNAaD5X2MHoJ77vJPTZBv3EeDsRLN2f",
  "key22": "3Vp29zJMPLk3DYqHnyhFdsS9ajoXSbGAAmvMLRDbXQVUPyEuXyWcjZfKu4tAcRpYVWhB8Bodh4t4NRgWyvbjYKZq",
  "key23": "3vLRoNTLTHenq9xht4GH9sEAcqk95trZLxo2jPXpeEyBtoXZibyJPJC31MCe2huRyjXFuzoKso7Smoqq8NC27Doz",
  "key24": "4tsobjaFnLC11nMBbpWnj42fjVvY7ZxqeFJidFm4iTkSV93Sgpgikbgjgc8DqwMMRtT2bjbofeaw7dUvawQgSH5c",
  "key25": "3C5ny5qUSKNxfuAEDtp4FTFvPXwy9drBDq1BGK5SfGS3Rq7R1AfU7V8cULogrEVUYxUotJSASEvrYSkQVNGTtGpY",
  "key26": "5WFobUt48iKzUdYfiY2XVpsuEhhK7aPxiDQaggaGaB4DUrDjTv3ByA1cUaowh1FonZVWS7GeAsPCMZk4RoWxAkcL",
  "key27": "4TqwJnTd3RDW2LbPMQTwRRee6hNbJz3xpmHwPT6P8Gs4K7wV87bfw2Ab2hjsMfypiACVh8HgbJTJ1uDMdPW46xHa",
  "key28": "2fjMcMiS8LD7om852Cw5Pb5bLT3tdGajFX9keEmQtV3xz1fkBEUaUhDEqPTQ4Sx3us8mG2ENro1v4MQLucWJP7nj",
  "key29": "3gznRLFbC8Fbex6KWkcpihwjEGwsZxMD1FZnwQxisbX9116hYDFTfFUxpws7SzBSkcxek4ZqL3WqmEDsyJUcZRQQ",
  "key30": "2u9cYMpZxFuPvrDMWWZawtT4QoypedqSacoZhdUrp6aCWH17FtGFenvEwkAT4rYxcXbm89YYEBbPnVKRVPoPDHnU",
  "key31": "2AUtXJ8s13svpjHHVEVJ5jMvxCv4aB14GNxYPkDLAiMWTe9kpCYuhnTQevk9hwYux1X1pbWVEmSC24brKK7kbkb4",
  "key32": "4kHXmcLwDhDsLj4uxCDxeQCpxpupBfrNrXKv9hqa3YKvP35AcsxwVvRLUqGzcWnHWbnixmcpvbwDLnVydisGpJmL",
  "key33": "5f5dBv5uGaWUkaeag3qa86w6yJExWJbuajdbs2KE3DbaCsVy6BoqC4gsPbPumg7uUYoxeZchbQh2fzch8gx9p6JA",
  "key34": "3z1ekLt1wycEWyXQCP2tjP1Ged4zikjuH2ar2S2arpnaZqvoMHb1QfAoKT59tPW1pNaFNCxERfkCKtrfK2HvDuHF",
  "key35": "3BWwtndzuT16WkuURBvNsCJCMgBVEfQSfozse9JmRbs1Pp5p6pAvumYvSL1aRQWgfohP7n96woknwjetNtbnTqUH"
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
