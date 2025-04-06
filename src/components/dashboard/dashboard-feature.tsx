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
    "4cL247QS8dkFaAiFc5rvrYchckhU5KZs4tKjsF2nQhhzgDaf3qDhoySbM1wuDgtKqMVimLsvJRjfH1RsimXdB7fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Pns5BVBaNqnL7X1kdWX856RrmPfJTny1JpWnvZYpipafnqw1J98w251hNJ49MUzYEcPY3Bf4prrPuhpyu5Wguo",
  "key1": "4xB4LSo9NZDpiqBoMNqV17msP4ypzbUEdrwJTapBVUcdHwunn9SgxsjmjrmRK4wPZFTR6JVFaZ9KpWubU3TznuHx",
  "key2": "2PokLshb95wR5juLediE1CNxc5cpsU5WXxHTB5qhcafh2fMTics82dQhygDmqU76nsstHQdUpkUhXnPbwee5Z142",
  "key3": "2rwjZeXmSw3XqnYGPwanW7TGAjqNS1p2j9f68975tQzxofJ2EYYfX5Rw8ey91dPeLFULft2yznHDDG1yuXA9qrYe",
  "key4": "DXD1cHsSP5iaAejaFYKsY56pnN79mPYufzPDgQATD2MTrnepwRu4FBdaYXhg14sACjnprhHNQPnqAvRgMNYZmv9",
  "key5": "5pVsytdTX7sKPYvW9GtDEJtKAtT6sM1jLu98EWQASwwz6e8eY9RAdbe2XP8gkyrtBazndYGMSx2MiHtUpvN6nnn",
  "key6": "24iYWPn1zwXkDGTFeYf4f1jw59yRkuwbSp9msLtCntZddoVWZ8LG7wVXngFmHPw16WsMoC176HfpNi8i5bbp3gMj",
  "key7": "aHpBLPcTppSzZLCwwkCqLFA9mvN7ezJjxGub1oXvXdLqxP1r6b3sj3zpGns4R86Xpk9MXf7AxJ3fLaNgsJG6RUx",
  "key8": "BKrjKucQ6MFfQf6nKAiseQ3gFvwR2LM5cqcF8EbvK4J2S5GnAGcjzZ58qWNp73FCkJJyFb3B5pRxvEbEChV1wFM",
  "key9": "6LMs3iGEdsqDr8jC1kMRGwCASxmcfEgRxXuYrPcCD1jPTcn8x1vDUWQjQgXKEZgoNZQcaB4aFU5eFixbd1Hbyuf",
  "key10": "1nJBSsGN88nvHAaWUGQRusXVJD81BLMX62Bfve2SH5xGh5ExJfD8Xsk1mmfbQZQcFbSYXGo4gHVzcKro533t81",
  "key11": "4o1bpuFGHHAYqXxpACAqGoPX5mtknNKQ79J9qxKT8LqWEy1GxETQADJSsYj9CZAhvgxeKWDk8x8BtxPDMGVw65Cb",
  "key12": "HkWK4sqdAEwqTuwsWNYUuRnh6aVCDHiN3ySSh9gZVjCqRmYUdJh98xFrQiApDuE9vDGdbcvXM5NKBpgnXHnVYpi",
  "key13": "8n1SpyBiJounwpc8CG944Vyt1KWbvdJtfmUJXQATehf6EBvpZ4FMzWGKz1KLF6bon8y5Eqhkw6Sywe69gSR4qis",
  "key14": "3j1PJ5ZvhJDDQa2i4aSRcit33Zvt3nFcgWrob5MS98Y3nNU5ftBpahhcJVxeZPpy4oktt4XpZcDpUVAbYtZCo2tm",
  "key15": "3rCQGXzajUtHbdg9tMvZKV3KwCKKxMuKf6qeAcrtp5tX9g13WWG56jGJmy1bbJaLUZmRsdiSPBLQ7ppWz8P2E7ND",
  "key16": "26dbeW3WL9fJd6N17XDMJgTkP6zinPmsFMofLSnwaDDbrH2FuPCbi89j4azoUc85nxTMFG81bpiXvZq3QKYgPQ31",
  "key17": "5ifxdNxw1g9GZ7fErGuzxTrRyKi1HpCcfrZW8DyHXRHFRGLrPnEue68SwzY7BnWtZYapnGy5DEmeW595LWNdxC5j",
  "key18": "3AwWcgG3ZiV4r62CkNjLUUirSQpsJ8mrjrRUrnHRfsm4UD6iG8uB9gVD589skrgXaHt1BPZu98zQCEJbDxt3sBxu",
  "key19": "3t1J2UZiAAxem65kTmdcfk4KMbVEn1SGbBeVST8nLDhxVP477CtuSwXg5KbrMXEQFcVVqf8RcRQ2VfZLYfVvDkBT",
  "key20": "3SHYsynXm3kQYDUrqtiv5hY4PNSGXbFiHJZZBoNehi1uGs4SULqZ43mWaKxwaaTmyJFgZKAoPYYB11U4jMTvW2V3",
  "key21": "4VdQsLqAsRwYkFLaokycGFeu3awALjoRtonpo6ov4k6wsciuDnHE56WmrbWUvjtvxMqwrZk2FJqsNqysZMxqRQu1",
  "key22": "2iDaw7pBxrFkEgdNaut73f6nP5THDsSg7ixU7PchjdLfshUhETq346ZVxaGWqTxQHV25GpKQaDDaXHQuYbRkutLY",
  "key23": "5q4L3GtYLbbdPqxmgZunSipM15sFNXvA9qycTNSoMBcj7ukzuS8Nk9wZGP3SU7JCrGKW8Emuc6vVyh1m1c5C7qMh",
  "key24": "5AqgSVffsZLq13atXTVo7mMFz5wVGHdEubheaypbfFnEssB7ix46GDVz1SeRg2hdDauTb379ohPLvA5ypSyAcAZ4",
  "key25": "2KZoPN1uhbdKNJ7uAT4cTcu2DDztNb3HFJn736oeC9oCHuhNcTvsZrPh1eBR3Ju3i6r9CXyogYAhQDZTKYn78kxy",
  "key26": "3XNtiT7HhkESworpbTqZHZDTsTNCFUNhaextsU35HDjBF3JYr6pqHT3UtDLuBW2aKLZkvrQMSTqLcWd1CeL6in4E",
  "key27": "2hrQp9azj1sC7EbpJX8RmkTDBkpjvz7tQYKuc2vRh7dxZVFssACvdkAJr9FEwKy2cXG9djotegb9fXWACWvzKVts",
  "key28": "49iTxEZkZp7DdKwWTEQHGX8MHJUQDspjM4K9sYCkuS93ckHznSBzybof1we8PcqiZQs2Huxu5KnsY9VRf4uXJUuv",
  "key29": "3pCLtEGtfppEvW4a6i9BoRzNwb2LwfKbie2ri6qqP53yjbGjBKz8GzJ5etQSWgmEhEWJqHYSNKYNA2umitwGMwLw",
  "key30": "3eFvBoUdP4byxNWpC3PL51DDQBsqUzt8z8ZFLTvBAUZ8zjfj4brmfkJwyEP92aasjwvB3NMYdkRYoX1e3dgqkb3e",
  "key31": "2Vcgv4q2NhuNGceyTyFZ9vmifcBeSPqkYBcvusdxXtU4nXhwhSgvbiu673F1ikKfghxpbdoQB8VWbT8S8zBvuEGg",
  "key32": "dmcHBM2wqp95dMGmwR6B3yoZrPmhVyNYPG37XyUC1kpvpwbA8d4tQEdLoSorN2scK7FuMWrhEcUgMeahXmvGgLZ",
  "key33": "4Xrwhjgbaw3y51XeCfhTjh62FrEcTy6vg4toYGDn1B3RqJDbZUFsKHaziknUfCPXhWFEVHjWTpG271Njxy8v7o6t",
  "key34": "DybCZydhtpEfstcQPaAnJ7NsB59kXaRoT4t7nCpQ52zKKEFcYuerL4bfwFNzpPkGCfoWMM59v74odJA7AcV1vdb",
  "key35": "26YGKsrh8pP2Qfjyi2oFt5xQ4CHyke1DvKA6pQEAx2Lv6S7ePorTmMcKjEXusWeeWBccHRtcdqsCB14ZhxRam5gQ"
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
