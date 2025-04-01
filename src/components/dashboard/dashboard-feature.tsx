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
    "47o2h9ZUQQEP8zj9jkRcuvycKQTBM79aKbiYoxWbFeNyR9ZEqhuXiggTeVpgx3NHZgcwe4oqMPmTP5QfBryMKyHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v7UhGE5x6C7QSFexE5x7HUhuYURcrPhgkaZj5bPqEPBkBvspvCSmYRPBeBzDq8reiPEE7mLmB53WrRj2p4KGYA5",
  "key1": "iDzW2yFZev4jwNMjk9AR6BELPjUhTN1TT4BFmgfnwYrSBszb2qR2jrk2osoyEkt2Yd5s8AW4in7mpYSQmpCbEVr",
  "key2": "zAYn4o58LQuDivTcMhhQvnPLBVvHGePfJJHogh6LbdY7Atmo5QZ2Z86c8d6edcXAXrLUt4FvBn3DutCV85ebMzw",
  "key3": "2t6CzYjFtf28S5JbzbHbGr9XiseTMFDVkWSKJKcGpA7UQtoM4AaLPC2MfM7aPPrafMzJGmFahuaBUWubBXDx84kN",
  "key4": "3hMtLjzsX9KJZPNqr3y8miTYveBuWuNN7mGDVKBVpJLK1iv2VcNkzG4VY3M6U324zxk1fiE5K1SDQL3jbubzvt3w",
  "key5": "3xTMjJMe25YbDWAEKeS53Qspu8Kxv7Bh37dBTiQggx5E2d4nYQSAXnrQBF4D7Bsg2ZBS1cbffWMYTpHEQW67nm2J",
  "key6": "539p7mB8Jcwkm8rxwF8hSEpF6wBSMDpTUEBZyPrwrdkpF9Tid3K8pnFnzhGxuyAsLwfUHBDjTRxkUmMCv7jugRUS",
  "key7": "5a5e8Hods9fb8De34G1iH2Kygy5u7GDhr1E7sP4g6DsjsUTp4b6n6HQ34jnvocnVTastHjqG7eZshG7EF5Cs7Tyg",
  "key8": "278GWuj8mRaLjerzd6LMAqY8QW4WvrWgNZLrdnGiX1bwZcRDFdESUqMLpaqsX8SQoGeqr7wmMtvY9bzqtwthkXqk",
  "key9": "3gYXyx8MF5XRgi5GDBAywJ9xCHHg4gXbHkqcxbhJTWZaiSx67TDyAnkkGgK2nrbNFvGL6gLLTPBLAwFYvKFJKfw3",
  "key10": "4rs83afENPT9gvSNgjZ1arib5uJu61zC7iJWXdhYAR5w9Z2KAEsXxxsve2DBdzkgFk3Js4NXzpi9tXacqpcSxpEg",
  "key11": "5VFTmtn6vsbj7sUxyZyHY23wkgxQjXp13KL35R6qC3NUFEWeZfXCgVceDfdi16fHaCqtE1XBdAACdBRMbZfB5udb",
  "key12": "5dmUyyFRWoHzgkG31HS28xieNZF1XCKCGBX4dBFUCkGzRFZvv46qh19G8v2inHUumEHAPo3gZ25AjQBUmduWSbgq",
  "key13": "nvQKDAHrYt3QL2yXZgJzVqXe9wJrdufqdoxfUhKhnRaK7sCAjuE118fNATpWRXhYvEd274Hhgo51e8EeDwmAL6o",
  "key14": "5qsX2d9xVUu8xxG2NcDGP86T8U5roeBQsT8sKu9Hy1Hwsavryse38TJB9vS32zGskSe6hbwXSQfMQqqzSsSKdAKq",
  "key15": "3wKaqMUAy2v4Eh1wigC51uFeu1RdBuc9DpRVHdcinMT3bUzuoH9keGUzw46msmao2jtfx72Lvg9mzVqKVYzqPnFY",
  "key16": "64cazM2oheJTaa4dqM4pirkY7cRPByEqLnxfbAssWpuBibHVPed1qghAYoHFtf6yydMLDscXGCMpcdb67ex57Sum",
  "key17": "2iqUKy84nFqvxBzSgfrVCLcsxD7TPLSf9qqMZY1thfc87DcMUFeY2pqTQuTYkb1EHEQPZEo55yRiTDA4MCgMKG9k",
  "key18": "hPpuTCDYwJzjvUKNPymqUfwNkcSqfa9zYNeFA96QLNM5KLga97gCTHa9ejQytU6mcCNwoJYDZ8GTmMQDZb8VGvU",
  "key19": "XkfgopJycn2nJnpyh8t9Hi6Jiwoz7VKegT3WakWeePqzKCKYRcLAozBMhD2PuVBNvi59jd5JwnbEfMdeMx7kU75",
  "key20": "4rTEcUkfgB6WB4bUzRP5uRSd4cQRktG8bTkXWBxg75aGnJyqgrrzimxjehVtqxjckKmeN3L4TioVigWcdd3gMG75",
  "key21": "4BjegjQytcuktndxiVoRL3myesaiY8SqAhsZN8J3hgznb2uX4jBwCRrJrCgKVVKzV8k9BaBEeGLePUNipemprYJc",
  "key22": "4KV5bnCwtaQdcyrYnSfdqdLwwzBMbfyAdW4iMoGxxtsDJY7eBAMwowj8zZhpcPssicWZUs6ELPaZZzGxEArJoBjb",
  "key23": "yc7uvUYf1Wdg4kknsQtzuH7umFGBaXhZyaC92ED8XpEjwnPnuf6vfg5BShAL4QpQXc7kpWuZH49Rymae4JMSRaC",
  "key24": "66cY5QSCQxCDgvxU64oFuW3Nvh73afpQ1unsVAQvy7qXccFnn5jt8DvdomfSvqvFX9yWPtHSPbAjhJ7X1WcAbmyi",
  "key25": "3KPKH7qFmBT2ush4DpS4exCtJooVchXLyjrAPYN6VvRzwmS1kAkWEmUBWqVtGBmSm4tEn4yVKvTZWTupBLJbcRVs",
  "key26": "5Fhj5Y5SNyRzJUk8a4ZBhUnh8NWfAdag7j8GyPQQ8V7n5xjwGaZuy48MWRERu8N8EbW6peEgMNxDBZZiiDFVX3vA",
  "key27": "2EPbBTzkm2PgMWtRxLRocGJZAPiQwEnz3zKjieqiGg6Rx7JjPGUhazYWSHqUT2oxwF5AbXHiVV96HW7EAezREbNp",
  "key28": "55dEA8W74CP3KZU8aXZw3ShbagoRpxBmdWpfSdUWrSkYQLC6WauV2SWaYUmwrYB7jp4FN6LVfxss4FrC6Dwh5XKt",
  "key29": "37P57oZGAFZzZMSkxReTb9AD64VwcBkAkCuc4ZLokMSSErCZy3LfzyAgFUzTxPhpPyLxmMoG53uwVVJ4198ZJmio",
  "key30": "6eK8n1csr7WWHf4QqHNKQ1Xw9ZFf5eDHLjMwKS6mHhP5LYcBkGGgTgHEyDNnrL3JtxxA6ziBoCCdC3DDDEtxH7e",
  "key31": "5aHwwEbsH1KGHMJ6VbbwHwF9vVgpK2cV2iaq6NWvQ7bVNyoiWDSdcFYzHtxjbRbwrbMSWVgqrdJSpEism3nAobWT",
  "key32": "3h6gRGXdV13M4CPfNj2rdmdQf4ngmAjbBwNu9ygckuVWT8ET4FLPVWrmGTQvMRXdrXgn8XQW9ritUbCNcXkKmYPg",
  "key33": "3gWb29Eo7veirCa8XNi9MefbsfEXhFGwyKdSAQHgVivhn4mbeFD5w5QYhfbnmJhhgwdYycFjizfoSQ5ZpxkdxSLz",
  "key34": "3F3h3PCTCyBw1SFu75b5LptKQkogHX5VpY966ZyXHvNokEYGXkq8nJnLtkFCRWnZEXNzP2u4rd3UcYio6PGwvPwk",
  "key35": "2F5eht5aYp4jRYz9ZScYWVtmnqnbDYqRzQHVu9YTASTRFqkQRjJu8vXnpJnTbbKvDKKj9hDGh4D1n71iqJpgjDPx",
  "key36": "34VCJU1AvrEU8ajKeuWAjR8yJJiz2VyNNtQVxrjY81zbeg7vrzkvbzvFPtvFM319NqiAAsXJs4FVkt2igd88gBHZ"
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
