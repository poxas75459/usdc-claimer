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
    "4CcAHemN5p4UXS88LvTrFoGDq6c2diDGa2XS1jimoJvaGXHb2Jm52AcZfU8P5aN8CpuzYW79X5NMXmp8WCkhogR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtEVmf7maWDREnNA86m3SaD4Dv22ehUskZcshqZJLY3hSACH3aQYLs9SsaHN3EPLmEWVgUCN8Fk8rWwTUa4Ag4Z",
  "key1": "57sXfQ4wecbumpshiaAAoVU5xAXm1GUpF6pcXHpbGK1E7hfZBQR7aSqvm99PCQR6SHHmi5Vvd8nKK8ubmwR7DRcp",
  "key2": "3yfYe3oxi9JdVvkiDan8r8iHVsC9Lwd8arhWa4A9AWH4ZRqvNxMqdaGwCTscUdXLAA3Ym7amFvzVSXz5SPinEm3o",
  "key3": "MGqKh3zi2SRRGY6xGsqzX8qy9BKTfZEdnQt98iAF7WmU91Na5m6g4HiYAmEqSo6CCQSimMmTRG6NVHoPHdFZQR5",
  "key4": "4tNCsctoe2jaukxVkyLNv6MLAeP2YSk6W1hbBZgZ5WPGrs3Z8NdoGshGEXyEFAVE3e4P48ck8arfm8Jz9HAaRqdt",
  "key5": "2R5B3MaUnPktzF7nGVY94fLxEFSiq97jetwHVfWghfgfpfuY3XkiQ2ko7xxssYZXvKC557Lqv4kcDXUXMmXGhA8r",
  "key6": "yzmSjwR86Lh8UNtezaNDUZ28nRNJzF68mEkQcCsz2b18zHoF2y8TeTkvGapQcRQgUFsbpjJQA8yRbb1WqJxYRhT",
  "key7": "5TerxLs4BSQhNLhJjoYDwFivxu617FK6fVUHBCNowJLZeQHES7ohmu6RAzDxK9d5sMsp8EhYP6smtju68E6ejrP2",
  "key8": "PUXzcRKV6PpGDbjoFkyMQUKaC17cXx5qUuJPQYWb2z8zbK9BNECMbdQ1xDu9eh2a41FzfoMGbeU7Fdtj6Aw5eS4",
  "key9": "2uS775MmqGPdZ5hVW5NucLrruVRzkuv1c8TQnVq3uqyx7v5naRJkQ1L14Urpfm9sE8mppc1WzJNhsT5xYqdoJQck",
  "key10": "vvzaTjfMHSHeofueWurUzRbe8QYdg1zNUodHKZn6Eqd4mn9rFTJKT2Gap5n2XrXqnAfSSKZhVR7Jxo7wmMwXfLq",
  "key11": "3Zwd48EhAy45Ws8JXDTgByHqdZ7v8ChuFzHVKJxtttpMCqbdxyu5ZogCUg9p6QLKnvJW7Y3iRUdGmM3AmuEGTeNH",
  "key12": "2AeULzjWNgYp389tCcWtv68KysUCqWsLfRQJmUSakmjSzxfgSE84Rv95gZqLfUH7VWcH9LZwRB4mjEq1Kuw4hdTd",
  "key13": "TbZ2ZQ6F18NVYHWmaWzivzZVQ9B8TYiAu2AAbpqysN6JVf2MjK3ZydfunDJQ4ELP8vqkGXwj1Pr3p1XGrHczWRm",
  "key14": "5RbfV2ETLm17qZSi8jeMsckuVj6ZDSJFmnrh8t5aj3kbh3dxfoRPWJdAD56KmoJX5XGZ4fnWNaPuBZKsxQ5vKyrD",
  "key15": "3YxUbfymDJzAwxwjCYzNHRYRVpeWSy6EGNJq4uoUxPKinDNvvRuRsBus5MY9of6PqFxUCbUCr7kMzoXYc8YFbWe2",
  "key16": "4iH5Kek7c7Xuqma2KNEc4KeKqE5LoGzdN3eRWk1MLzbbXNrbJfRQwz8P4yhxNLT7SRhogihGZ81WqLi21XXtgnA",
  "key17": "2dy2CKQrXpVzvvBnzpvTwZuQeKevGSv2Gc61XLqiaKggmUDN8Tno5RpKNDciPF5n4XfGHvEerrt8XRhmBhwJD4eS",
  "key18": "5MEzS2yRb91SWCUcA89FVZQ2hCU3Hi2Cn7JFh4uav1LqqoMWc6iyM8evP4HYtpBK326gjBkRVmHQ1EJUutobY94m",
  "key19": "3EJQQXP9Uc5DdBAF17zR1BHaMWBEP8X9bE8PEKGD7YFyTQgSxg5NS7SkCir9gAd9d9B7iy4SL26eGLQxNr8iJ4Pi",
  "key20": "4HpShhkAG7Vi5Q5ghonGtf8qzZoNQYyV6XakSoeLaRJQNfmFAC6N1R7Xf9ytvRozg3iC16U3VDcJrRddJHQbhHEr",
  "key21": "2SwJMwYeQgxM12d4GazmTEJbabQ7zTimei3iBvw8Chb9HJecSDqAfSms1W59vPeFbxGTuGCpCad3nEMbjUtk4tYV",
  "key22": "5qAv8CHpPxgTm7hVbWfD53tfL4qpGN89rDBjD6eAP9r9GxwtyQpEBnPqVpXTqHCdNUpguUEEWUEw5wswyVZ1ViH5",
  "key23": "56Z7wa9BSsNvgkPmN4yj385kM5HJQnc6qEmu831hD7yDjRisqRDkxa8ugtD1nq6qez23v35FuZfEejqN1Vs9P3Eo",
  "key24": "3EhRmgx4NA56EXqUGSRVofDqoqCGLHNMUvFuu2CZheyU4LbqAJBhsJg2oTpYaHAYCXTUUQdZzkuuzFr2pgUSKNQW",
  "key25": "5SALChnSzBMV1XL4YHBPQFxkxubcaChgUVAJQPpxDKVjEK7zxH4RXPinVNdydhqtmf9EXYpviKfN4avH5bddNQt5",
  "key26": "5GHsbeyupa5YyXMJTk5GPHyMxYvrwFvAdi3UfaKPUJdULpZrXyBVivZLGdrxMFBgXHLNdiygVHX43hmoCWzndiCA",
  "key27": "3XYUp6S6QTgmCvNf4M99KAjgBMB7aL8mbi6QHn5bxNso7ApnRJqt1JNs6pQ72foiAsHzvonqAGVqpg5qs55Awode",
  "key28": "42BqYeDCWm9u98mjW9cNZX6kd84A2rFkh4Xn6opPzkm3eW9ofavdzoZx24Fsn51zTf7LuCy5gBGsMND59G4QaK93",
  "key29": "3MgxXyaDkronzUY7onRKytr2GkpUmwaDDApK5L5dXhC5bebMkXit5Q5pQEMJY2551qAky2n26htyvvNeHzQSZitj",
  "key30": "TikjbTstCo9Bq1JWchS7pRjc3TQev7va3rKJabJ9TJpbadgdYvRVQijSBQi7K3Ebw4XmqNZDSYALZbgC1mn6NF9",
  "key31": "2zGheo1XMyg2vetdnD3zg4pjEELByVgmUPkt42Lmki7PAy6DXRfGG9nU7QKhacUSqv7yjyyCAZXhXjWtaMpRgNor",
  "key32": "3EPL2xuFSUNgphG8Ukon2tp7L7onWD2BRgvGMPY6X5o6qhdG4bTiTXuA22eRi6P37JYcfLm5D4AxWHodTpc331KL",
  "key33": "24kfACaUhzzvEQTAHknuycZhFx6scj4sNkCQZNaA5Q1VfydcTcLSBJhv6midxnUt2qC75yAYibWJvM8F6iUtpxc4",
  "key34": "rchJ8vdyfPNmVjFpVdLsZxa6e9wXWXRYR2eRY9V4aQ79DuqRPWCnUH2588Tq4rQm9D6mSGJJBqap69qxiFrxWod",
  "key35": "3vKwh86AL2dQBYQ8U4NYFGmPYC7VXCajYSAQD71YLomTmBJ48Ezw5hPDvDVQ6nUs4dGuZ4MhrzV8SNtiomhTeAE3",
  "key36": "2puKTNiGvTrCQ7ffWTuVdceiayMKCbgWzobAVRispmbUn1uVZd3vM4QYiwGrMHZbTGaWKMYNU6fhLdvgpfxXZPga",
  "key37": "22pvnauvGgPppRnf1PH9utjJqMpVWT2jYpTVn1jp5oeWQXKt31FyaThw5U5VDzjWKBTYYrVpnokePpDEnGEMAkRr",
  "key38": "5qoA9rsoJcKGkBwXmUFk4nDYkdygrSEYLEkNKFRtUscpCGYuyzw5UuDGnqi4TPd8Tnn9kwNEXTwEZzaN1xqWGT95",
  "key39": "2f4YWxc7ryeTPxLB2q7cuRfYBbjFFPxWPPvbgUzXn4L3Js9AqrxXoFnDbKMryTQfTqKw7PwN4ZEvP4XF2feaq5LK",
  "key40": "56Mv8sWdwpHAf7BRaBys2FonAFBUskDx1KhV9pXZeNRFT6EZbKkGEvnE2kzcXh1meLKCXUqbDNQen3bURPQYkViq",
  "key41": "5YVBMxHoS821vDuMhTEWRpKe3W3zhATdLConH3dRM2DsvwLdkhgKif2f21a8kiPwQUgHNkgvEqU5Rv7eaMkFA7Q1",
  "key42": "22yQKBupwkm5z5MQrNQg9nqE3gLDDEQmTH1SYqkrZk4Rp95X5w1QSZCdYizwAHohiphx3CuwagjDAW5R4KdZnU3p",
  "key43": "4DgfdjHCRifxBrZZcqYMrF8714fH6qkHXeoaYMsfXnA9N2gfoXLpcWekf4rdskgk4UYPNdALRWddbQuZhouRoy66",
  "key44": "DxKgGmJebVFyLgf53KL7sR7pBbkRQ5QByMk3uK4evB6PSQZJsLyq5bAq4krasbDHk2iuZq2mbbQ3edEqER6b5p1",
  "key45": "4H2hKsgi44BqUhXLMSXLdbafUaW3Uwi9fyZjH1CTWLZLLxRPwLvvwYHrmyfnatMsbpLbjBCkKG8DrGPkfy6gsoVS",
  "key46": "3F53qy7qzgmtFLkfU7ctfQEwtMa1AS9KEgLPJEmtjagVvRDmiTioygoBV2xQu5TJ1DNQeHe4uv3YaDURN8xoxi6c",
  "key47": "36P3nN3ekbNx6pHmJB6WX8HRKRyp64QXHLBWDjtY5fM5tmZ3TP4jQHUBAayDtsz7r5opY5CpDx5f4kUcRno4zUAW"
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
