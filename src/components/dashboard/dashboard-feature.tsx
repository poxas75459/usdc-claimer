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
    "5npTpNQZ2nctggbW7Zi2fRvNuG1f3z4kcftXsQZARz7pRRsgZZdJsersBqmRbesoArHWfzm7haYkaTJg8azDjiET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwGkK6qrqR3jqBFGz8oBXz2ZwDS18e7LcAmAsgUpbHDphKqVbqXVXTWwu6MqnpfayTgBmpaEWNZJTdjZASE3sSy",
  "key1": "4DAFcxKpi76F2MYh88QQgCNZ1zXHZ7HYDk7P3A2VuzrCKKrBBjvvWsAWCEBf5AcoMQU4Jhr1yFGAKuhBmubCVDYe",
  "key2": "4H8L6YPqbutNtThRKeRywWcxiwyKQTXerM378nfH6fDAyBPewVN2UwmCt6mUoZ8VKaxY943HX3AT1j9L41YhW3Hp",
  "key3": "5NPR8oXCip8YsLMdedcoHpU16e2tVn7LkxMhLeWqYbap7hgmieoRbjZg1UHKvfDGRacnAUmu9J7JjVMdGUJ6S1QB",
  "key4": "uS6QhXPnyKCHkB7FNzThGxvCtXhBV1nYmNAmYV8Vkb3mrYNvUAvSGF52qRLnfmzo77CCgmnAPo63T5BK1LJSxkx",
  "key5": "3GbRTmP6snb2b78n5r8gbB6r8JYDNRoqF15fKcJWHdAYe8zsae4E7RZUkDVEirRzvGkb73riLjSpBa5FV5FwK8hV",
  "key6": "2AWx436yznkzk5DeWrgpPbUFSApAQe1nghw8XnLKc8CpomwaUK7zCKDQ9W5wyShWCYJbDVCADdnFCSTp1vh269Ft",
  "key7": "dgH3QD2QjH4cDYZPbvDcb5sKhcSMv1iV2jew9A4kCvM83tARyYqxLZQG3p3wC4cVZwHDmZeqtMUETyAFEoPQj6w",
  "key8": "2hJaaiJYQNyy5oCUvcbVNYV8gNShQXsGN2WJvidJRQjdFr4wgFBJM6jH2w5yxBnLwRBZMm9yqYE7seXdgd72CNsF",
  "key9": "5bM6KiaZKM3d2JHU5psri4BAigStXuyvMpMay3FsEw5c5oFcTFTq49UrG2zLcJYxdxz8xc2ACA4p3ZH1WihkdJyd",
  "key10": "5999MJeQCB4ZgpJC2TkHihJ42wA279JiRvDCVJGHErKUVKpmCNA5foYYkEPwZ5SZ3cJbqux4deFgydBsti3FAX14",
  "key11": "2nXZdCx1FL9UnV3cnP2SF4Aj26X6UhbC1Gx5TowAXLaWS5axcVKRZ5a6PCY2Ez3TCnuHAsBAkg8YGVMMdaSd1Yo2",
  "key12": "maWhRS4yitnDWQ8L74BM5hEsshWWtfcRRy3sLy1eTwe9HmboJweHEqDBod6wDDqjGT2xc1Vd8FpeuttpnorXVdt",
  "key13": "3ixfTBicstZvP8KPKid1ubQVeooNcT73thbsJXhwq1s1aNE1gURG2Zbbq8vdPg2kUagFsLrrZQHWwQxsw6R7YRad",
  "key14": "u5AYE37h13gRSb7PVEWtA5dKcAHqy7boS7NTnjszULAmq5fUtnpUBYwzdaasLE1YLx817y7i9mM6ZLLuHjZD46U",
  "key15": "3G9x2GtA1ZAiSWdBipX3Hb3ZsmNG95bCwMmzUz4JXqtyt7N4BadTHAC3pYEmLQD5xZj41jj8ofMmxvmNJkB9Teoi",
  "key16": "3cGfvXM69fiH1uNnNUHjB9STv7wzLLgt5Pa5FUPQiFSbF78b9QuiNnZbcGqnSvcHG4i7x4s2QDSQQ4MUHScFAmUa",
  "key17": "3G4q5AvrXTCatm811LsXsi57FmzXpifQe9WiEXwzxhWLJ7eYMf6wVmBrh4VhAMnjTM86312aHqvG23m3JE4kUqUC",
  "key18": "3qhptkVbyJRZXgjsD2d1MeqarsjX7As3puENN1N2qauLo1Rv6rjqyuz8iPAVfuDrjFNNcSWQnKLMB6y9yA4ozDfL",
  "key19": "5dik8CQjsC5ucva3fqzpPAjiYYM8dMHxJXDGMXnURofF8qEnY4t2M2Q13hWVVQLCDX2Acq6eVDHHP5S9KGkCX74C",
  "key20": "3T54Mt6GJd1y3LRfPoQT5ZPjfngDbQC2s1Ge3MxQfsxvXo7pDRADxmrDbn3YVbBt3y9sdUSJa84XhC57SB7sKLoS",
  "key21": "MuMvwrNJKVTPYbuvmPK4iwM6SBhFztmuExXEG9ii5nU9Q9SDXLKdoojB6MsLfYu5E7g7vqzGGMGGSeN98hmEzuF",
  "key22": "4T6NDLJYgwEP1RdNyRXDL3z1RD5M5eKA6jR4GsZMxb11dMjuW9oKGY6f4DJ2YBL7bWGythSSXsEGLDQCs11PuX4h",
  "key23": "2aJX4wbmiSTG7TFQrqtVLA3TNzkfcKWrb6MKbGH747nsCZeEtn55cRkbVeq6grcgccLeXK6uwFZULy1pWwofmNGg",
  "key24": "4CdaaafdEcabg8n4CF17HjoBCJtEEzHiBuKy96tz9hEoQAm7BUdRuH28Qnas3TKD6DfRn7SirzxS4X41pJhCQ3nX",
  "key25": "4TR9XTvh3QR3e6VV3G18tiYRCXAntKQwUss39fkMxpWsrw7i7sJHHre9AXkBo5RW2aGfASM8ciBgjDXouwar87mH",
  "key26": "eJvDVrXrVHm67vUHa2jr9a4fNgoTv5idkDk2nfGpgEPnxKdiRDoQ5Vva4caFg41QJcDg3UERFLDwP7P5hQNs6qY",
  "key27": "4BGaU7ZEQGJpWGRvHwmaHB6EzmTsdQjPUBqP8SvrYrZoydwvizU2sBYsi33N6BxWkj7xYuQ9NS7zrmyNE1yFpyMj",
  "key28": "5Q8zyRcHtyzWKP9fwJGtC95zRQxbt7LGu4926xcbteosNX288oRReA9MtpdLWKYi76X99yJXD4TfeFJuoZQAod1b",
  "key29": "5QFQEDuEHQ472beeeibi27EHMXkMoeG4zJRpVNCvuAy43MuHHSm6kQPpoxtZBkXaGAoWi1DM9fdarFPE9VDqXCgz",
  "key30": "5RMjoFShXnqASzt5rotEhynEPmGgsZAqsCAPJLs93xsYBPx8d8rPwhU6GDEM4PZsuRWSAFykKFziVns5oVTjyE6i"
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
