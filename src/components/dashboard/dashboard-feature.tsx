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
    "56ajgzvVeJVAxcz2EvVM6JymDEBNkgPni95aZhLSWuFSqR2RHbhX68cNRBKJJZzBcUSkmNicfQVUkxiHcwRjH6W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjNnqab7hbGt22WKUWh659ao6S6xTeFa88REwPgY9C3ApywRcdpKorRpthtfQGJ9oqEi3StnZ6UJcARC5Bsma3R",
  "key1": "26SXWx9swSihHSEEP2SqHtNS2eQTTTYdvD7sX58edLFfkvfevibYZgvatNzYMsAvAKJe4WnvzUe8fWkVGoUtosGi",
  "key2": "32BxZo1xFuXo2Zuojkk9kgJYkwQjgJ26UPVDDicDdeThvEUXp1oZ4g1YiJg53NfMsKkWzrh2Xf6WWmA4HZkiq4Zq",
  "key3": "4HxtFMMM3cJWnJ1jWWJHKh4uT83ig2L6SqwF7GX5TdHNTokVV1UQU1UaDwG1Bri2k1e7RohJrYc84SKVprY7dyki",
  "key4": "3Wa9mVqjMfNYhkodssiWqhjnPxFoQU5uSPfaL7o81xqVUYDvbK8AAzWYJQZBogG7xuqqJ45RByLnFqLjPtupne8E",
  "key5": "5Gtc4abEqsJi6huHwKN38fTGeBZKTRnzEpsffUB56WHgmuN1Jc5CoTtep5yeKBwG1RMKrMrG7zqUB6nBk63zVzM7",
  "key6": "3ReR5usCvroQsqr7KodWxmZFsKz4HMMTrQjnSsKUFP717jDtsBCaojzufQzKU5J3Za9nNPbYQvYdSBuAwPn4G9Wj",
  "key7": "3WYSYLZsogEBHdqLRFr6W5ZnNdRUL8T77kWsvoVpev2TypXr1qRxWwXdzu6AFvhzZiicQSg38x5hPQvSkvswrnL4",
  "key8": "2Kymc3FWEJwQpJYTauywo9kNx5HKeUDZGqV76WzXeHAzeKjvoVK796fAtKeqn4PF97cZDdgzUhFaMGcygRM3i1Kn",
  "key9": "3cFHptW72pKUYMKm3NkaFfJxdjJRnBLfSLTRiFs99XzEUVUR7UHHiLXAPwrW7Exqm4dq4jBKAnnnRq6xkxJp9dh1",
  "key10": "3T4NuSe2KNqrNpqNVGCraFioqRy84fMqmEx2AHC7V3ykox2zUqF8dnVwYT1SJGy1qnSdtFRYpvBQKPrXJMf5GsFR",
  "key11": "5r9qCRe9LuSjpYi4Va8CpGAzdzbQdZB2t19c6cQWJSKpmZT7qRo8pPwAWTqAU2QrB6BJ4JLiVcW9pqRBD5eJB1MF",
  "key12": "58GqMCR68NR4vh1ZqxEwL7PDQHcoF2H7x4mzVic9Bky3NoDnUrNGLLhCVHKjqpUu8zrsAk34E4SvfKWJnoCBiGV3",
  "key13": "54tPaTiXGC6orBhcwWdqJMLhBCP3mj77hWM9XdmY3bb585jp2FquyAb7p4NDXerrvJfiTszvjqZ2XNUV5LEUBVLv",
  "key14": "2EYhR9ACLvTHSorWbQ9BfD3EfabWhgzhrDab8begAHKMfYXTFsTx5mjuYM5mcHCBisdvuDPMFUxZxMxRhq6FbaE",
  "key15": "5c7xtGaeESzs612R3NruKW1g6W43mtBzLmuvPSmtyWW6RA82rPy8aU1RdfETSeaDhHHdKyav5krNSw5Cx2ASsGtQ",
  "key16": "2T9htA7RF6zf6RG3LiTuKCybsHUspeKFmYNDumf51VqWiD99hAVSqK6WJ4YxzxKHnqZxi9GD59J4nHQM75VdAWWp",
  "key17": "4TeH7Srj6MaDtAF3ZrY2Nt1VgdSzYsxjgKQWakFchcbSUxXxQyneit98FgjM7Z8osgSGXvz1qNPWtuXhii5MM941",
  "key18": "2YzVh43gY1sGMyChWnjchYd1VyA5AVHwfSg6A14y1tXEhbPXMCgVPKnv5ZTURRZCSHTgg75JvheAGSxP4aT57nRy",
  "key19": "273K2f5HXF8FvmbhUhTYz1cW4io4k8N63GmkrZjVfweioddWTeDKQFdnQXWwzL9rjjW23d4SMFedJvEGpiPvee4d",
  "key20": "64Aa7KAnTaj9xUd7wuJUD2aeqqyQB9WFUt3LPTghvoiAroveKMyVGfTpsNg2Y7A7wJqWWJafY8wjsdXtFGvSvSyU",
  "key21": "LFYidnHGMdpM8wCpDBnFHR44ZTWHAaqPNhfmkEY3WJUFprkN7W5d7w3ejTwm748Fr1qK6bfYze23cMdH8YS1Bxw",
  "key22": "4g1AacTh4tWK8Qa5L1hEEr8vuoX5LK4NQeaMhCtpgpQyaxVYbW99aUkrGvpTafiT3XCECtc5NGdJ1DsmasSv7pkH",
  "key23": "2AdWYCTPWJwRjd27bHDqquS3cKUAAHZ7kmaeMCWsptxHE1qq6hiUbzvzmwZVZrpJUxsBZBivNUjzAuqY6J4eksDG",
  "key24": "kG6nUuhvkaYZvKnqt1m39FawTEEB4p86ZHaPACZ3rLmMyMQS3dE2zt7bP8EMZ1Ps8E5fjpT12zRuaB1cN9qCor6",
  "key25": "4rwoULhaJXMAwk7JunKAiQvzjn8bxmGmtUh59ZXJjbFnH2MrXZKq7N84vjv3jW7pAnvLrdzzmFWG1FATugpuDM7K",
  "key26": "4du5MtiFpy135Bbxa2jKPqzHPhdvMevDdA6FNBMaNujA7wNJK11iaSyzwgeZwo4JhyGiSR5z7MrK1KjkBKgcQAsY",
  "key27": "47mDSXRSDu7qoUa9ANV1y1aQwCx9hiMKQx38NAyCQ3Q7fDnSpCpKfNJQRJ9nm2iod8caqyxqiMtyEQmn3PJDa39n",
  "key28": "5n1PbWsJzfc1gd2W74JcH2VBJznxfvEH3Uxtb3P2pxKofhKXpCToFt9GsnKqVohYBCk3Dk1RdkR8BUCvCwocN8sz",
  "key29": "59GcwxFuekMMUAEcnwAyNfd6Agvdmio7fAf4qD743F7bQWKcDbFDC142LdYKgHZdd9uyTzhQj1nceKyiv1xsbu3g",
  "key30": "2AMtjbYZiWZwq4JX6fLD9L2pBnroZaVnQcrPnT1tmhwjwYdCZgWKE3mcmuBEc9gxaiBU1jLvknupgbhHEMBA7uwz",
  "key31": "R4qwYRKo9rx9UiAYewrrcpZynxdRdBU5n9cDkfkf69NbzNDtem85vszaM2ZZjUSCVdz7eoTLY87Eqgigrb2dLnk",
  "key32": "E2YkHG7mNcqZbKnYcBpvLY1eQEBPAy25UHVKCZHWxeReuP1uBURRLRHnDmsNTDqdsenaNcWtAdskt5rygF8d26R",
  "key33": "5WfQzGuwD37GQvzT9EKTzDUh8fB1cWVyuR2NKyW1ZBnk4jJ1pY9tP9NnwwTCKQmu8R5XHNH4cC3BFuufTTyW8wRw"
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
