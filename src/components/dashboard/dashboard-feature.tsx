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
    "3SG7rqHqeEU8v5qmLVmnEyY4BzXxKMmm1gozmgWSgxRVBR7PpRmg9L3gbrruK9sN9MmmZJt7c3ezaPsFi5TxE6cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KDR4SBPH54dtbkkbbjNBQCfiTn1CkMQ3nVgA1FnDDJQRnWF7azXSpJpsJq8Eh4i2t6sCS1sfvN8iHoLQcJsnFY9",
  "key1": "jHrs7MEdtAdFuf5bfDA7ZuiVyC3DUc84nUcEm3udHKRcAdEoH7aJDeav82ESaH1cQpumLbpF5wApYdQ3iDujHrs",
  "key2": "4e4mv2fqUpgY2yHbDvBfKFCaTEjA2uBsaxW99kRGpptcatTgjwc6fNuLfWHAEghxdgYpDVg87s6j9p7eZs572NK3",
  "key3": "3gxvnrMdF5sfrq3PPYoQPx8WwjZiYswWmz8xM3DnAcjJ6fi3rhfwveojB2rxij4jYrizqb1jASya71hvbCJSTnGP",
  "key4": "5iQv6pJ794kSrHUgMdPkLxgBWyaZJ8xCQ1878MDs7UVYN5MTSpzF3hhKt1V9G6Yr695RVgyjb4neQZsVzapKXMXY",
  "key5": "3ukaBvgTdxAEWz11fPHwXwQmaGY38F7WW5rthsrnZpoSV3U6T6bviaApueNybKYpq2x83cENhTPsGFKvCpjXzMji",
  "key6": "4oLtbdTRWwAU5WX9R7kcsLCVokJJNjEBSSQg2c2FmP74xFCg7nmA5wkpecisiveEbEsgBxYGMTJ9ZHAZhDi2xPuf",
  "key7": "4UKXyaPaVyW9QWvUVKuLmTVC4xViSbaW8Lgnma9DQ5HHEBbciUD4vB5vbCN9N8KxoBtrqCMyoMQDF78WGsnMnSmY",
  "key8": "5JK2ayeVcr9crk8onpP9i37NXgVJXtsvYopXom2h5HWdZjBBPKy8bWULo7PVkTEPq9LQYmhi42i4MktkFsfZ4Xt8",
  "key9": "4wRoPMZCpzBQivBspcmZFpZh11WgeRFmFHtvQUATTaxbGaNAgPQzBwugzP9i5YUr8sQ8XFgJxmRddEy6trHoKLax",
  "key10": "32kJpEJW6EKiH1YqzA1crNrYTJnCXzgYPWY1NnbEHWMLs9sJSstmH3vyPTTQZYvYVnY3ve7F4MUHPHaC2Ph42ekj",
  "key11": "4xCWwjNZUDtLkBV7TU87V7oodTNL9EZhmQ8ivdyK6FcKKB5JyRHRwMXNeozqYXSXpVGAzzXn5F7LRMqPGrua6g5u",
  "key12": "3nqD8fQ5BFk6PXsPoeFhZHe7Rqhmyaud6HdpHAcJP3dTtuuQxCpM5DD68spubwPNjYNofnnNr7vLezydcMpeAAiz",
  "key13": "4wVFj4Po83hVuwHvkR1rV6TdjJwpbaB7a3RoyRBYrssx4REZfe1WteZuj5shGoC9hgGck8YiaoqfqE2pUxMGUp7s",
  "key14": "2xXhdLEnw7SB9GJrUk1nejdA4z81vA3WuNjHgU7j5omK6PykiKqLzu6g4JrtiH62A2D5dETHb6JqSkM9a2qh2Uix",
  "key15": "3FQdBxvhK7BhKHmJGiLhoKThVDVyYXqXJwcdWwn1i6hCPh2nfPMeC1Fp97sy826Qg3AQ2agiTm41X9s2Za4mrmht",
  "key16": "4G4hoQ3xLVZ95yx95sqzZkon9jypj5Mq6jSwZ3gTBXj44dfLeEAy6zG98wV1naoAjdRH2n3S7Qto3YBqBT5ZJdfs",
  "key17": "NxLMgkzbjSTnWHAtuZGVhkVZBhzTzbqLE4onbvM3X9wca7iZ7KzPBwc2GAZFpZ3UC7ktChirphmQLmv8CKTMJUU",
  "key18": "2Kbpf2CVJPnoy9U5TFSiDwvaXoMSZA5QyQBWy1TntESuVXQXRqrMwr2xMmW39T8vSGM8pg6tDBx1fiK7ExgM3N82",
  "key19": "5V1oRkW5aiDT5DDyawiwhGfj2h997rk3mcv33qddid68p5GA3BNBqZb7sM34hYarJxQNqMq9GpbhhoV7o2Wa9NZD",
  "key20": "55spmuPEB8u8nf29CUu5RCiJ6WhnA6LngSXmm81GHWqgpPr1SRnL3YTyaVba5KhdXV6vSMpyGGK7KQMoGFiUPjKG",
  "key21": "66TRug7zwuxPrUgTZrqLYB8zogB7sU5hdj3puVNK6cLz74XgrdoTc6rWoUn48EgKAQrkqhovJimRgwJuk28USNkU",
  "key22": "3YYixkSQbdJLvGTLhN5ustuC3MDxiYberig1DsR1PQNHAuh2qjfwG9jnYCw3d6zesakbmzhmbkdMLoFAHhpHPdJX",
  "key23": "ry4abv6u8FMvpaoMJSDQbWoYLHuBWqBp8c7JBGDKQNkjpBFajL6jBuCvJBGhksBfetxWbVaZDWmwqJmgLmwaXgi",
  "key24": "5GLrkXWwBVg6tbFKgLTCLcSMk1M7YiRawyLdu1TKhhDDigf9SNUR3Db9L8AdoJKhoBU7s9TZSwkZdAKDisrDKzJ2",
  "key25": "437zWnnupZqdAVNQf1yF9e2RAeANYtPe7wUmxmfZZdDzPvVwPimFBDkja4iJK28ZwtTLiJgRbZtPScDwF5x3k3Qh"
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
