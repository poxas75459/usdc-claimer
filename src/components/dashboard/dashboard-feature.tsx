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
    "5Hjg5bCTLLaG4TT6tcKvtEawEMhyjn487Kc9DnRyZuWVi49pmvoKbVfhDiiK9KdjEYyjPmmS8YuFmwSE9LdqV9Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kzZSArCk3gor8t9ZPCvdkZrk8qmQpcJMhABvExG8uSGSS5UR9TXoukAf6vDoPYfzvDaRzh1ya8uRCvX2Be7AiX6",
  "key1": "4i2mUZ4PVmmYKUUTge7F1AKZDuVj5GgaGxTfcFfJ9kirQcKKJTRX6xSfJSxJDcaAkYse3YBSJNAxxnXy3BnrTPyK",
  "key2": "4uBu14YVf2aHmDLtBy2i8EsL1SMbv9Vpu1jXzvJtEZNu3jAi4cZAbioNYCLdEzHgCsiNyfHivfCKnTRjsvzykfnB",
  "key3": "3DpfNufZjNx4tLytu1faLHhmm8hP3y1XjeQ3pXA8AcwiZpEUugR5bZVowDBiZXc6zXeBgXrLE1h7bKyJMawLdEpe",
  "key4": "63mtUiCYNp6iKG3mMBWMNWDABWLXp3WeFYqsKYnQwxUJ6BLb7LMSDXWG9tAVuyvHcqrjgF7X2PsrZUCFFPnmfCgR",
  "key5": "3WZrXMbmgYeoBF2cWLx3t4eaL6BWNN7b5sUQyNtQZfNy6p5xd53EuH71cY13deUCmEFBSQpDjCNUvB21oGQKn8JX",
  "key6": "4Fsc5gGVruqU1eb2xULFDwN36VAbwDnKpCoNcWNL7V7pq5KLUEGVTed8J1n5Jwsga5amJTbrAZGXAxKe27QBVo8D",
  "key7": "4bUReuRtC5H9QKpmtMPaEXZR9azB5aqN8mHZ1w54x1hECpfTQ93mNpReauGU8ncNounhMi6cik48v53csxg5ARHP",
  "key8": "3wjyTmUcee1ZAeiiwZLBZFv6CNiz4jqvdmcbYvM6noE22WudvSReFsmHmV6xn6tdaPWJwJnsWi8BQCdDN2LSY5V6",
  "key9": "3TUvipo37kbbTwAMw7RikdNrKRrk9CXNw8vDNyDH8CY78jZYiMbwoQh3F627paxLbzA4zBYhZey8oTCFPh364EgL",
  "key10": "4Mns8qPAWHYQSbN4AqyHc2NcZoJx8RP11zCk36ifwqVwfXds6abEkzEUwPYZdPafgotYt5RKKTyVgfn2DPANWYbX",
  "key11": "AuRoy5YRW5AxvCk7ZqH45HAZQpagVZmu6fB4ytAZxtGZ7X4Hk3RaNk1Hmaqe8qJdboK1o9QEze3FpQTJ4MQF6P7",
  "key12": "3dKkGhR1GmK3bWUF1G51xY6WcdNqjr1s2XnyCNS4mUVYvPA1ft4jzMZYeZcd2PCpCtuY3GK6dJX7DaxFK984CKTB",
  "key13": "5FsV7zNDv3dm8FFqE2NgVLLeKRSDLwH6KCVpoetx3Wcf3xCtG3wAy3TWYa2fz2nRGaWq4QDAgEgXL6GL2QEokwzu",
  "key14": "4Ewy31dMS62uKQCagUxoHigtTAQPpnbU7mVTgBCt9pA6vi96DPRho5KNBHG9PGa4ykWj8LVVkRDRerY1VdZ99yFX",
  "key15": "557UKD2SFBW97GqRnc8AQT1ikW5FPYTnEugkgzFwgtkz4dhafGyhG5f3Y52362MjEVHpmC4KHifd8rPnvR5cZQDi",
  "key16": "5XHAbsj4ggcfaPPzGHX7oYTXUeNn9zTc8jd7JXxe1DNQ1LQGUjgzFcbuWzjt9pQUHZ6sacoiH29y2hxLgPJV41ny",
  "key17": "65GRTGU6mELtSqcbjxsJ7XmoRjTzfA5Kf1yzofUmUnskt8dxZFGji3Qoxqq8TNtkbmrg8KCbhSUX1m6unqYqNACw",
  "key18": "2JJgGFRi8f8ZTWqtTsTQW9aq63PJdsRar85chgeaTTWuhFKpvQpHYp4xgQ8Hg3WpHzgpvVLar7mrUw3C6AVEN1fg",
  "key19": "2tfwAwJzEhUgc4vNcqxnvf7QB2twhYykviJVPjVPT37hsxQ45BGFhJWHR7TY86D88S9VDQLKkYW2SeNUDmFP71Li",
  "key20": "5cAjTjyJzyqaVx3AKhudiEFv6vsxbxambLYcYzzZ2yy7eoyUfhS8q36gJ2XCd4e4vDR2BruSXVemN7y89K9se72S",
  "key21": "4SF862c2uhgTfTkyXpbqrgZ22z8UbZKf5agPKdwpTFiMkCke5mzSDgAQu7sH7MeBZYLWCzVZC8X9MH4UnNxYXw4h",
  "key22": "2jMPU8A2XFyBDzsvyTbATRjw1vP3EEcpEnDY9C5ssDC7vwwk3f9QXGt8fCjpm9pVdJBvBRx3rqrmWhDK86Wr9XXf",
  "key23": "56qg86wG7KVdhVawSgNKgdDCEQYzeYPzmm7igsYMVHyGHs4EyzZVrXD9eev2HnoHVKWapYTJb4SAiV7DNfB7XSbN",
  "key24": "4UUn8GpQfjzb9dDJmzuLC4zegzPC7igqRfUDQ1YKXct4omSK7Pb6YmmnqRsPutpknGkmoG81doziyLuGuvfPZM8G",
  "key25": "yaf5tp4dT6YqhD9EFgpfpy3Uvhua8YWgcoYn8YAKWazAP7pA1kyxCND1mcEdmnQhrDbW3XL7GrE6f2DXuDA6Qtk"
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
