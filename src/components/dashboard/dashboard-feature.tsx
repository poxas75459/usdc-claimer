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
    "4V1Y6RfmzHKPv2FNU49YcQUGBUd1swLHr9LfF3wNWEx3sqb6WnjW8MwAg85p52LHKbVJgHrxNakCMYNkMy5xgrL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6g884Deq92LzH7pRvqmrXr24CwynaXbKbYTe1ASeTeJoHLY4Kb5xGFVxJk54ef96xBtiDuNkMKfke1pCHn1EVo",
  "key1": "26gnvdS2Qpe33QUq3Uo9Mabneg6HvLHk7iH6B4vWSHLQkanvqTR8pNBc3eWcs8ZfkKkFy6ReFp3mhR26jfbjPbdm",
  "key2": "3PGPbP9x3Vo1xTtDfs6ABDJd6yMEbDHhjERA9mZ39PzF1LxFt8W1fec65ZP25jUGPJqo2NJjEJxeykQj84rV4h86",
  "key3": "3xmxRcHUkWgi2iasdD2NtMX1Li9aK7v4nCQRXHLAp9xZoSvmTX6GqD7zQvvkd8AegY4dqjHg7fZ6irPEpnzmbGhJ",
  "key4": "9E515ao4KNoattFnbcrNR7QivmgWVX6PHu9AvmHX3tH3jHYsD3PicF6UrgUQq8GfpetrekEkQ51PKZr9SXMQHq7",
  "key5": "tcLq8xnoqfuBtfbgKkGMUQ98PHP1dXTeMFcPMFeoE6nLWNSE8YZ5pwexZHaLnJb7w9zHfoCh4XkwWoFF5UhQn17",
  "key6": "5dtVedBirHBC9bTcXEr6g3a7hhfsj9pVGcZjMAnqGN3hZAKCzbyFaFwXka5tHMkY8E2TEjrogax4TRVxpktdiu3c",
  "key7": "2TfB34JVsNJfS2LcMi5nGayK3uEpwwsYdQFJraLKfrKakAHcpfUpUvcynGeQvvJfu1Nge7TbLq9DXAKZeehMwFix",
  "key8": "qtgz5s633RDjvFjscqMJ9ML1baJoVgZ1C5cDXYMv1UBBYFMJo5MeBzPoUwm8YzomML93V48Vyzy9y9f1SZ7Js2B",
  "key9": "3hF1L7pPY3yPUnWMpbkU4f8K13WJJZkV6ZpUxbMXtS2ZtpC3AvcooETkfTRJbkEzSDjm4cDcZdsx18ZGhQWZDZz1",
  "key10": "3e8BgCu9Pt7L3CepfW5YnvCwB69NYtAhEikxsARP8yNe6h8otWctJ5aeqjCZzwTCyH1bmTojXkLWvC6c5BwJUgnb",
  "key11": "3wUKaoS8JAaAtJHv2EYW9zGs591sGjY1tZaGqnerqhLHMyQFPqjWXm7Pi4x98J2ZiakHmpUJBhxxrWeZKTjzALmP",
  "key12": "4riLKAUq3Drj4AQK7BKcweqoCX9G5NnDrn8tbk9SJrg6KGqZjFoaacsgWdzk1TgDzf9gK3AFQwakfQEgCoayErbh",
  "key13": "4hsoESbZp3E13eTCZDSvshwwdZNpnH9aeXLtjNBjkRUJ1BB7DwNsPWVFNqJXTr4WCopWYqzLjMbFJ1RUNaedz3N6",
  "key14": "57pxAm5h3MAkgCfuse8U9h1H9R3QVmaez7uZxeu7W7kyTes7AMBXWYh2GNg48Ln2DViNpbznU2nVckHFUUefm6A1",
  "key15": "dBVAY5Dv14zHV1fWS2QEcDv6dGhLiiY5pGCgmdy2N91SDNcoTxsZzjGx6UEwGAJHFJZfHsRzTA2QiUcWVHyMBb7",
  "key16": "nE3MtkF5qJ72qwedFrh3qkodKVNCAcztRB9L7BeYM5ABZehvsDXoM9Yf397goRKxVBNLt14jJ8JvKDkAfLE2kxJ",
  "key17": "5oEDD1yKc9xwVzfWh5PFUAK5NMgnihkngvkWMKumN2xBUfnszPf6nR1DavMGeB1WtQJUXeGznZwj8P8qze64XgVj",
  "key18": "afdJLTvFpQAHcKGmM7KJqeUHWJtMByKHC6av9tvV7ahTSp4vkZD5swscRUjSE8LdL45CHtdr6fSodKYqnLpTr3c",
  "key19": "2dXeUvC2GFAmcXznJzWHdTobHPMxWMs1yCEtHYrDZrM3z7pBxH9avYnwoJgrJYFzR6gjnYBbY1xkXdcZTF9CDrCq",
  "key20": "4fphYP5DJ114Gd6SxXjEeAnVTpS8BdDRZ3mjAamaJ6rjo5BC9cLTdtTpWQChWyA72EYxff7A3Zo7EkKFw53yMYWS",
  "key21": "46mGvxmbsAKJb5pGLN3qPkSE84oF1Jf8fq1TDjcNEF2xJZ2AnrfcYQ3T7XcHqtP47gY57F71knwjWpZS9bKT87yF",
  "key22": "dpRMTxjppYSZB8VZiZkQ4smTUtZyQj3Vq685RHcoXiXfzkFezoWuH4Uz7Ng9ba2Eodmdhj2zHSqDTJtU4YXwxEX",
  "key23": "37ytdWcubCm2bVCJCM28DJTFFdcZRrqYPbDVWtnJoqsT8JB9iNqxUaEHmBqR77Wt9AZigZm46yAyVZT6cJVMu6yR",
  "key24": "36oRMyH7NAeEWnRSe7WUHLFemPLN9kx2r5zUBhQRebELZoEuQRG411h2RMuhDCe6TjxFKiEdancvTGKkR14nCnzm",
  "key25": "4Uuu11W3zcS879oidaQHG8QmSdgEk6JUVEthFhXmepJSCPJ3rCiPSQALJSBZD6pCVQRAJ7CUSZTTq1R2YmxMar2K",
  "key26": "2p64QM6La85Xb3So2s669FAJ2MJvnJpjdCkimB12icmeW22rMmiLK9brKnLxzhgBizwjzavGArQSHpwZtQSs8zDB",
  "key27": "5tvQ6CX5nLKejQ8MXjA2KGxMKXV9iUaxKP84tZT4qY8XkJw7hphrxcwYvdXt6hPkPcXwzsJFsvgiiaRkbJRyxfX1",
  "key28": "4BwZfzHhEfY5h77TkFAnfwhFFSJ6n2a3XufgkgT42fhpQ7oJ2fNB5PsoEZK5ERBMEAuzUcFNQGJRR8q7YRh7MGci",
  "key29": "5Xvtf1ALNpbUTsEyw2mVRPymEwY7FFQi3VQwv1mMHttpMj8LEKygwdZ7JC9b8eksG8XzBJNL9TSAQU7bWR8iskn4",
  "key30": "4ad6riaCeDrHpjTbo7oGoXfjT6jRrnxb5STMwa6LakdbVfnwwDGGQHE4u97RmCtP6Wy5tbhW6fcDoHpZ3bMwZP6x",
  "key31": "4YzAX3PRbiMhYVPD851qwg2ShUhtXZF18iTnvRXMsaUTvwVtEmNtUoyCPSo9KLhmjkVNM96TBykaDjZ5w11ngZRL",
  "key32": "54pqkgLyNT4MCuhUFDFfE3ot3uBeVNyiACS1KT2A3pqDWRtKJtDewXvEEmF5kYDap3YC8UwFG7gSt2fcApbKB94w",
  "key33": "3oP3MeKUAGa6oPZwt6ciZAn6qHgZNhr8igkWucwEEUrMTVv4tQAGX6psqzjQHf6xKcDKsjYv6ZgEx9WizFJUng5v",
  "key34": "3kyYSfCN33541j5B3rsBZ2fuKWcYW1xMpzv6warJKwVjBcTsW8XiULEqopu6vPuyU65nMmLMh6CdPtzmj8QfLUwa",
  "key35": "4sq3zoHXFAB9JZfPrkQ49bie56otmCvGRrZVSZJ2xcLKS5jTWdLBJCebkcyaoSjz4iDkovx627QimrDBDHYxJqok",
  "key36": "2Wi24hfBLewgCJaKTYC3ESuzM41TJzFKEJ8UscXDzyEzhsYbCyz8uEKx8YvYS7fGkeCvuVpibonWabch6w7CXHGJ",
  "key37": "5NeyY71ywBHXncv3QPNLrU2eRd3SMFWksAwWfaGoZiFtRen7x9GNjzH7t5hNAbwKAQSspYq28BvDNsxv1xnxm5YN",
  "key38": "5tqxmqccty3SNZB9zxMHw5tjzHoWSEVYrGVeXmjDNsQ9Li1cNL5E3wS2pVP2fNX1Zi5nbhHVF2VAMD2D3Q4T12g5",
  "key39": "PYAqGVoZ4kmSQ5kXv5ui3EB6VfG9E5845upNLpmejfDiaRka2uPAY88ignGX3afewY521eg79sGZtUmxjdXYQeK",
  "key40": "47CZuKUddj28ZAukEtSsLDndpCpDf8bTMtTiFQaJTFnSL39ykXNpZe4HtnArH75CFYy9K8ysKqWye5UMFjBNUtNZ",
  "key41": "3CKAHt5Tob6wPiFERfK61jrBPyTxBCCTbXvBGpi3U9ampn4XAx2HdzhZFUVYBZKeH2kySBDJZg9zCKFZ94tymNcE",
  "key42": "4yiZstto2k8qFSVkZw6efGHeKM4gHnort5MPuuoHWTmegsXVUiUNqUjiCfBivy8eGmuLhysq5suDTGq2mX3SKo28",
  "key43": "4uqe2nL92gx6AWiCnapPVJknnaqD1TqDn1VWAm5JYhqZfc2PvaE9sYUb8CxkpA12rCsJKyP2h78FLP81kxtoB55h",
  "key44": "3PK6DENt3Wjb3ZeXa6nc2fpGwfr1JjX4fiHrGZpq1RU7NpBrrQZmiAwjYGYeNmJdMDFArq2KvHwCndLxQu2DSJrJ",
  "key45": "WPLHx2d2wEX7szT7uPNkBRLYVdoatA879qDcNF61dXTczrHm5eEqvY81vHCHfir4JL43p1GrWkWCEz468zfb2cN",
  "key46": "3ULe178j27kxm7nGDx2Zww7sfP1iBrSkzBfx1nCTMsQo66jcMaZ8g7CwydjfvyWdKJboJVLAKSoBYpD6NGUPpUJ"
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
