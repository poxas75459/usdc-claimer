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
    "BXyEkvXAmg7N5dmXQ6shqHX6NcXX8DpMMATuwrTBjVVbQMFxW2nhqVsKuLh1oVnjtkMuonnvVx5GckdR9qLjkGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3biErYjY3Hp8vxEo9cGNSBhsxE3LDB8f5ZDQLuF7N1xSKRVJBWpLpxxBmjWv47jye7NUZfW6RSBPpTj3DTRGmB",
  "key1": "2inEkBn1nPutUxk8iUNNCb6hGuXfZ8pNyZnGJbdfZYxHuKySkkQp76Vc5FeBD8VaezhFvkPN3F4797X1NVa61gf8",
  "key2": "2HWDHh1rXv28mxDSDZiCBfhipCcKi9cq43WizRH6r7aDRFyHaM8ug5dmZcuPFeBd5ECmfREd9uV2m5JR82KPrHrK",
  "key3": "UAmJwzMAixvVGVeJ1Z923HEXwh1WRbSapyLDm85qgSTAoQTrewzGwfnBbGUA5taKvWU8N2Wa2UN3pMuLPysvngT",
  "key4": "5X2QmwjKWdAqqeP9LxwaDWwkL6haRVQND2z9SDZgvHxeFAcutfD23UeMcXoMYUtCqFqgEKnmnEAUaYM3VfBaKCi4",
  "key5": "292YcSFcGcY934xiVL5Fc53qjZ1HYbmcXydee212JLXCMXjW3xxUrKhXmKDGT3SLSTavhN5miCN82gNUXisDNK9S",
  "key6": "3JYMZ69GooPAQWQenLX2eK9caqoFEnBfUbXBZbkTNUAnVifxSH5HG9TWNXKUyNafQUDZcBnLidhaaEPsAPWZAtKv",
  "key7": "42CK77LnJKJyqh3Pg1TKXrVcLsGGCQChvKth1GhbQexA3Cn6MnEksh8Tzp7363yDUMF5FFdKAuWyqjAUyW4EtMjz",
  "key8": "54tKXhMvkb1GHhX7sgKYMm8wHJHKxErjcqFkcXHvV8Y2e5TsV1X64LNhoGyZFDiiVc4LVK49yLgneB9MHG8JAUfX",
  "key9": "215qgospeSVx9uXmTLUb6J97Kr7XhvAE4zpVVKvtR3CPTDtjoQakJGh2uY6nVJRYdX9cGeAWJEcRtUiEaBNqGumr",
  "key10": "5XfoFN2pxTJxm3sYRfj54EpNYJdo6WEhmaZ6A46AKRhRs3c2bRwBtr3BZDW4x56LsUoGaRhPSjLmzNtyHgis5JSH",
  "key11": "yX6HAJMCwQC4aFE62Ha5eArQsTktEvnjxPm2q5ijUFGSqSYoc3ey4Wt2Hgw3dKpdARv1qTUt4umU8gnyAdUscjo",
  "key12": "SzJFWM2YyYw7zpwaiyGmpGvVf7pFbTFR6EULRrPXtWvzbEo8s2ncuHXX3CXYdcuDTyfBw3gmVLYnj8LKigAtJ3m",
  "key13": "2Pzhjh2bKbkY11iakb4hMpCjqdqPPmiB7dvRbC6U5ZDbJ9LiNWxsJme1j5Uwa5tPo83CR1tru9p1XKbMerGTcNrL",
  "key14": "24cNkeZ3HcYmXqjbDA5mEVxhDVWKHZDYmLkFbGej5R5eZEB8SggAEMoJfX62BJMh9UsRwL76RjnYMvUnmgvkpTxP",
  "key15": "3p7CKzU6XDnCYKE42QckFrhimmkjJFjrDA1yEbZzvcGBHBQ3oKNAzxyEUoeE6m4CbzZcptjDafho44CopBaSGx1z",
  "key16": "3h8v6sLnDtd7FqoZMVLFbHvmDD7nGKcP5i2N16w8YPr9RLtGJ3mLvZv6VezX8EwJ4UviY9Y1pvr62mivy28Y2qHf",
  "key17": "4BsnwRdqSvRU8MZqhybnrvm3XSajmAhAowqV56DTDC3xpJrLKckJwoq2wti1p58b3MHH2Cw1oqqbRcYnw78h3fuY",
  "key18": "3u37rGXX4aGLBnPfnX37TZAca6azyLZadQcJQzv5YJusYTdoE3p1ZWvEczgaSPrXDQPcoikPBT1mkYAHzGwAymFG",
  "key19": "57G4FdiDWjLQDiqVb2LimGs76r3ZJRsgdkkZpymdeWajttiXbBWAcgoFUNQasSQUH9hV2Ac3wVem4aE4gF4hRmg3",
  "key20": "3sMtMLFETicCLvNjuYmJPfDB8tTGNzARRQSsZGk7MvTDxK2PTa1irFvHrPFTc6zJR4MCWbvEWb4zrQY36joGwgXa",
  "key21": "HVfyXhtHZGYiKxWkXph6zP7gxNCLc37TE573ZvCPnf1jFWytx43znD3kuruUnMTSSz4f7zFKCwWMxajLRCLtqqQ",
  "key22": "JBZxCQTHFYeE5MvLNuMQVW57z4qgdmX2EnrADuUxq6HAPJWzf24Ry9pDsadYyims7Daj46jRG4irW8r2ubuoKeL",
  "key23": "4djuvtFoXtkeQrJL6pBuysWLw5aTQK57TiNEKXHuSCoZ67QMYLmzLZ27RZyJR4NqXPWf3fhazBF8Ghis3bCWgdBR",
  "key24": "2V1kMTNYCivTiHjpb8taBe1L82gAE4UUqsAzmpYNL9MqQ6hXhLtkzzxt6VMcsCuNFPdcpswXwHExLnSCATnDCXRT",
  "key25": "5gapjCWgKa4evscfTVFkZtnbwYqdrAjactPafEoU5VKXhhWNRKosEwM362hfw1rAUp6XBRotodb2XPe48iNyUg5o",
  "key26": "5X9moQvuXaYzRDWdEpw7qtsSQNUYQ86rmSFxg9TszBVUp6dHokyAtkmJvrM7MoqfqtotiWTvDNaJL7jBV6WWhTb2",
  "key27": "2qSJ9zs5jnrPZRYz1AfTc35WY5SsT9AFvp5HhN5mpk77Q1cSv6mcmBbHVf7o89BQTS54wKUvVrEhz1wDUAngySUT",
  "key28": "4bb7fWqbMXvcX4QtLmwcpZ29WURgVwuJ6ae1gTB82gsm1LJ2ttDRrxGFEUVbFZrFPcaNaYvs8MLtc5v3BmnNuPjq",
  "key29": "5VA7ooqyrBGgBcke92zXKfkRGJbjDpDmxNfVGBoNovXFqwb34GF4zFfecr4dECQHoZg8HSUoh8bStawgVCjyL8GA",
  "key30": "gxFL5j4c8D8pJFTc4Cjg15U9mC7ZxGtT7cEvqfHDp9Pog7qBTXHtkEh1uFznd7T8E8utjEALHfEnZ6msGU6t3R2",
  "key31": "5c2r9sLKTqVfxFyn1wkegySyw3mbeiaQLzA8sPBcMzQr6FsskA7ButQK35JCRbowRFPJy1QaCBixp6umBCYsoUK3",
  "key32": "2futwWQcvtTkJMsBzYfXvNsp9UsLTyLJePpw3HQdsMtYiNKATRF3NEWNajwcWPRt6rkAJM595YGhMwwQEQMdNLzD",
  "key33": "3GQxdHrTF68GtTf8uAF7WXXF57sme2Ef8FAooXDocnvCmkNDRPqvfKvHgkpEtGpzF51oZqCVRWdJ9jv1WVTY4jhB",
  "key34": "3EnndnLcXGewEHCDGZvKWL1osFmSDeDqMSXpbPRjesuhphqZ58X1to8RjyQa6v2pj8vLeNmuFcjRmoh2xQU8yK1A",
  "key35": "2JFdagtS7J1ihsLWYXNkpyhs1ibhDpzs23RK8MteWk8vAvn3ToePLAGi2B4nFqsKmEKZ5RTv19iNGJcU9z4JCnuB",
  "key36": "2sPff4GhZVHTixsbs2rGkHzNEvSUF66XadWWfKtNoTfuTtKbcPP5wFZYkekWpduQV1uj7EpU76VnUKCho6RsGqmE",
  "key37": "3MfkNADDU7FkX3viRjgEUFPhXwKnC5VyeBMUBT8ho1zc7Wm7HUucTttUecrnHyTPXWwRBwTfqAbFFzd8RaieMjKt",
  "key38": "2ueuFysRJQGrDF4VbCpMeDCArLH35jKVN4P6Ff7Uw9Avh7Ej3ssZrtfzb5A5wXcKMeahAHxrohjQfLzy1Qr9Zi8z",
  "key39": "ru16g4aW1ZKpAubUsXK91XXcx1M5o3TeThQVAHnXHW7ah1X2ugCHLatvZ47XBpeSjiy9pxfvisWN1nsjnX9AENR",
  "key40": "4RF4H5QgGvp3kZ7J1nEg1ah2MnzvJK5sZzCso6mA74V6rEms1aLpbHQLYGVHr5MBwYAVcpiBrNapZHnZdJSL6PU6"
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
