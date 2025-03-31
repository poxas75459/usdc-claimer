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
    "464j2Axaph9N5djiFkjMQ2y6rk8fx5yiR1SF8nBgdsGyjKkA6sN16S2v4w7Gy1F5XXvoDQnRjraKsP66438FSnT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVAjt5xkEtrUiqbRPoKDQmnzP2NFqJoFFATMvN3o84jN4QdNLPvoBXnAnKuLsa1yfDDVCoF97ii6aFKyBFu6jDo",
  "key1": "YoxTm1hAvxWGhuYCi9h99syxcQaiwcRWPcTpqFRrCQoeEp1kDvFQGJwbTPni5iyxDMNQRsLdLeCWggspRxih2fd",
  "key2": "5MhcyRSstUhRrfhq1GCN6YdT8khDu4WPDM1Uyx3LvVvd9dx9pEkdzbEPeCwhUNDzDJgs1BaFZMabaSdbxeRsx59r",
  "key3": "4czWEz4Hb2PULdyDU2BaMk2DtJTpgQTHouS7Pe2Me7vyJTTWVfUxtDxnPpuoWi1erA2egqikVEqr7yJ2Rkxkd397",
  "key4": "4TV4qqa88SJLGaZ3QF1beaVs8qjAoGWJUYEraCVsrRS1ncL3rh42qS5cL2ArDR62MH4kEU6skJSB78vcP9jNzaia",
  "key5": "5nu1hLi9cWEpojWp8QzNj9Y58XFa4oDxVHGFY55yngALHzthgVEXdqJw8Gv3G9Yh8aR61ZkK6Awi99Ghw8diMs4j",
  "key6": "W6hNUo4haKZqKyQ7z5PRXyxGN18DaF56oGjnaHbDBR4DUNfLcX9NJkEVrHFAH33kW6zXtxn5P5K5KjWr9fdg2Fi",
  "key7": "5gBtQJ6B4x7qrgD1o2L9iiREHiYUVoot692Y1hYFqJ37WMua6o19SufZC36v7QH4xjcxu7gnwzgQERTZWn1V5vZy",
  "key8": "2NXxs2zDTn75ngUnyouK7oRxycPUe2eJAf7qBtMy8zs7zV2Y277qoTBmsDHYCu5WBkgCm8o4PRtHrvvxmy3L2zrh",
  "key9": "7NjRAQhMyzeE581XUJNGacJk6kSkpkwB2bjdPvVKiUvz1MMsVSrACcttQBWS9Jn8WYH1BFH1BoKvDU3XBoQDkjE",
  "key10": "3b4aTjTRb93GM8NK7jXmkmwxg1GYzH2acjXS8EifTpGZ5SbVijYs91pLKTpdYXcrvBpy1Kk6bgNPT2FBEEGkivdg",
  "key11": "544ZraeP8S9fkQuE6As4ZLqc4CjNqMd3k8ibu1LSvKpKzKSJFzZhiGej5gPLicZX5nQGLxT3J4LmJugymchMV4bf",
  "key12": "znaNEAAwRbErzTvGcKdmrZfnGFk1gNr1xpY5dnzTRgptR6BAnK5f22GnQfMhw54YtLbv4omN6EScaXsL1S3NqaJ",
  "key13": "2jqiAgd6QhXYTGCNSxiEWbJR7QNwb1RXwt2GvV6Exb8ByHtqe1RNcF1QWXJfAt6EoiJoBHbkbi4awaGt8UzZCEDY",
  "key14": "3y6nb2D6C5Bdbv9Gkw8jAw9KRzBYbGuvyTPLnEFKS9MpBEjr1SN6uiQQp4YmUBjTLhLCcjH1hcvy7BX44S8n2J9R",
  "key15": "4LpKB9Zgnsbz4qFbw5nfoY7mDQGRFVFU662Et5W4yEyiuAYNMy6tsHnowoRJp6s9sf3YKyZP3m5H2AsqLVRCXzS1",
  "key16": "bY4StFFEbAmBrS8TnVLPRjGuXfpbQGYK9QArvCtVkAedUxFQFaYZccLCh2wS4jijkkKgcY52GYpf3kLF8ygynFr",
  "key17": "2jFkpj3yS7hkHhJUgrDUx5DdNpuSkp5TsHTPDsJtmxsjyMnp91cYhEvzfQv1SSHS9jh8JgNb8qv1RwQBoikkr31Q",
  "key18": "2xNUVG9eFJL8o9V3rezZrcbQPLeF1S68tHh3mLwfDxq7Se21KsEQ57cTmnpXEDxxDWZzLYRUymRN9kPHBZoQP8fU",
  "key19": "5QtCEoJPTqmtKKAHDZ6Jrnd9KH2qCSZsHPW2xTZKYixz1qWp9N7ZRUqR25QtjAFgpnDHaaCFAUUV7Mav3H54q1BA",
  "key20": "4AUj9vpnTcK2ptMKPVtvakzFSXbgskvSzpuVWicy2nZAYDXtk6CEz5wVz8CGyyLUZ5xouprNeoe9P4fJVqSsodin",
  "key21": "NLzLzGtbdJUe6WCHSNTuVhiE9nngy49AKPBju8QhrVM29tKsbDgR2uYw1j3Npc8hXqBXoTr11P9wVM68ZF97YY1",
  "key22": "SWaHiQDVy3khM4S5PPd4rhR6cYvW7gPPYNWHSECZH9tNrhSR6NC68BDjVcsUztxDCm6ThJCHBbMj5ssTFgmsdPp",
  "key23": "4dgUHBaM8y8vQiQwkScSrr1eAoMRqF61EsVZpN4GZQEud3JwCkGAvpUXcoqoDpkENpf1v2dnegmybp2UugLHMaEb",
  "key24": "4HLWPvBepbrnUFokNVsFkUHQRbMz1ykVxdoh3kuaC16wmKvHkog4SyV2rE2Q4JSn5wFfAemSefnuYBFB3N7v66Vh",
  "key25": "29LXKD7V73zTJzMoYYfcM2euqFWSFPt8WWjKKir2zv9Mn6bWg95XhJMyuiv54Qbrw6zsrwTaH8ws6guMWBXgEmQj",
  "key26": "4Y8HhHisjKvTpKsGVqE727bwXAPkypWfogtvnrXevi8PjY6rPk8rzpVR3paEucJQCiyiMhiYgqrmsVJbYTCgtG4d",
  "key27": "5kEaueA2VuKQNSsPEk3nDLBTENsYcosnaLBkEa7HGjhBNCJ6qHePG2pqwBNeiES312dv5NPscj8Mo3qeP3wotMyk",
  "key28": "GxVVLGe1PJ2cP9XKGvXTxXv2vHEx8R6DdzL72C5yCHotNXQ5m4hZccvoU3NFBg6k6LphsmzFjB2qmHjkhTgbxRn",
  "key29": "5AHiA32qnKVaNv2Be38smtTABuuAcvRs81D1Xc99k4pEwa3pxMMUaWotCPa3PbHPkKRwuLQ8b5yv2hKhTbiKQzsZ",
  "key30": "4W9RF7Q31tpYbsZmEMff63MnJ6geKSj7Fk184Y9gRw8LekQa4tHJ5ZSCguiSSE5aKabC12brghd7pPvNAPxFiM25",
  "key31": "3jsxafr8AYetNj9HdeTM8eoqmkpARGMTPT7eBWv63zaSFLabnWHevvSY5emRXWctm7L349CtnT4zMR2qofGY6PyP",
  "key32": "67MzNfZcqirrbTaAAPth42uXWLnsrGHGveBJxk6bwY5YZSzfJfSCo5xJ7SASv9GYu9UxewAmACb4g32KrXPCiZYv",
  "key33": "414W1igTa5hvYra25qZvUFHvKFfG7i7HCwVDWrcWa45eDJ9WRfktJKDYvEXDMqYfbCASgg2ZUrxSNx1GTBHm3BfX",
  "key34": "3A8mJSkyfAkZSH84xABqNcdcma6Hevs6KEUNmTSvXMNVR91kPi6RQa2UJHZsAjxEeWS2YbuBUKbkp2UL12qafJE5",
  "key35": "3Aijsy9xgGcDKEYXPXB4yqXpveHZyXxE2tSdtdFgsoDVYcTcKgobUtinsDpvcBBcXzFbAXJ3UGJ2WA7D7NtwFr7X"
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
