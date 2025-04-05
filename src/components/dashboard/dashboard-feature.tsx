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
    "5fWAfKv2pu2gD1dda4N5ChKdrLkhY7wbY1rYudKPESZwJX61o7V63A14HDsPLND4VVETa9VvLhGbPV17ZGzUXrNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43245eMu5X8SzgzoyXuMwKFvGsM6d54K6YAbp87mfFWKU1zCXYX7P7DRCPt3rUSNQCxrwWyoaxFHmCK6kEyPCk7J",
  "key1": "55En3RuVYCkgjL26vQmc6hvagYB3YE9okqXr82hh9tFDfL476QM4jkJdxoVAeJL5E9pZbFvjGff9Bi7om9uvVZqQ",
  "key2": "3e68qrwD9G45SSA2XJBR6BRSnn2R5kYWopt5dmBoxfCh5rkCvaCt7xFqX9nPRkh3wQfYhTgnr9dUaUtjiGfATndq",
  "key3": "6TR2J8Kt8FihNLEuKSAZA8GsQdce4nkGp7TDHxgAMhNseqAeQ28qHkZ1yDxTnpUoZ3V1AmXGVKrDqfixv1bzpm6",
  "key4": "4JZiEX9A2r4ydPkuj7B9WN8P63pwE8L1gdLFHA37ywtQWBXDMkuBhdihbbKmbNVEAD9U6WyBAqzZpgTUiXe1cD9E",
  "key5": "5kR2sMP1sZmNzdi5do2fw4A5GUJCEP4N3FxPjvUmiE3YYRNg2Ua2bV2TAmSWfd2XUcAGwsDzZS1fibC2Lg8K6Pkk",
  "key6": "2scuQLfHNCovCioW7LuSt77pHYh4yqJ6Q7YwxDxbCRiFgad67Um3cWTi1s15BHYrEGNJhHofew5ufYM9eeuYVe4T",
  "key7": "3UfqnaxpBurEkuBBK6JpM4fAK6ZjQS1MiGXBCYRnZZgbcxSmmY1dWhbjxDx4Yf2MxnFnnDMzu87L5rTcKpQytAKf",
  "key8": "59iuAKVGz3d9XkyJGNmXZuXvZy42BUB2PPcDJ5KcuVrDkW8a7NzK4uNy2f9PGFrFbgNShFz3uDScZ2Gfhn6Ke6xh",
  "key9": "5azSKYhoYbi4wjFq58nPcdLhoGpLzvRzcFhbcz4pfstx3HrNS3GB1x67panB87s1uZQ8Axq1urWSuddF3iwtfZPX",
  "key10": "5SNZpmug6H9kk2ZbhXt1k4xk9FrWVUyjxj5FZQ52BGxzkV5fSjqH2PjdhBMpoxyQdPA3NSLdzZdsYMnhTDfmwjxs",
  "key11": "3cKRHU7rjQw5RitH3c72hqUfhRtVWcgj2UGiEXqYdSkiQ31nf7kigwns91tiLZj5YEGja9mAZ8UZpkGjEShFC8bp",
  "key12": "4oFBoBLB6pQZk1XGwYorRaeWC52vJKFVaSL4qiDt5HYek4sobcWmxFDAfnvybujMcK3gUjYa3sVaHWpwkPxVZLmd",
  "key13": "39exoJVhAAi7QWnzBGELGvoPgWW6g8tyFZWi3uagUgHWJpFQXVizx3yUGTbQEnRAfi96XU89q97LdwAEWR5P96yY",
  "key14": "2z728KSqf1ShQVLXensf657D93QifuZ9dhibevQwZPCSS5NdCLLQAFCm1ZJtFWE6akpZD8unPWcWcw8NY9pagKNZ",
  "key15": "2EqFrhdVEkn8SoYZUq5XFpaSrUDy8FHvuZHC2xiB6FqAMKy4mpfmw1WHijUCrHM3722CfWfuiLYwaqph9kuERr75",
  "key16": "5ezy1ZaaqJ9syZ7hTQ9xgytw9wJf3HBBMYbchN8ka5PF448G1T1JmBzYhY2G4MxPWArRRupRTmbxDLVyFaUWjkUj",
  "key17": "5CR8DakPvxdxRL4GrEoFHBCrh6LjFsdgwJCHWWBLBv4NB2n54jLayduMUwWd3t1bMG7KhcbqfJ2DcWAzKq8bPCwf",
  "key18": "2AuSFsGYwCEfAZdQ8qBHGoPQEXBgYfpgSmszQxWBhpHp19GbewyQbTqiYyZxCJLBoYathvcPPJME9jN6iQoCxZnW",
  "key19": "2U5PkCMu4zxeQ227Cy8CfD4oTnta2GMN7jvmtj3YiZuQE4mcrWAoMB4oxtFw6WWavvqgE9xfcbkVVrxhFR7Qyjw",
  "key20": "5yb4SmGac1BK1GzFdGE3GLXg3ZEkXdHSJMq5pwAPYJg3TDwJ48FeTjh17jaCjocptyYq8kB99ykNe5tPsySfsynt",
  "key21": "2366KQKzRTBRQR3ZMwzfGiBNdbqz6EyqJgUgRbb362bLhWbuUU5NW4PtxdbX3vc9DMjvagUh6uk5XFwoXzmFu8hc",
  "key22": "5dcmRazhrSFZ8zeHHE2XaVzvFV1vg9znHFoXL4dkaUY4xo3C2wDaW3Jaeoo2nCfg5aaBsuYyWWPZ9avWdRBNjaUP",
  "key23": "xfo8fxDs4TdP7dVquFvaPrjGoVzeBXuRJUqcN1ZCiudoZozJpSkqGjXsJ84ymo48JdCWtyzzaZTnNPAQsa9oSrM",
  "key24": "3eoqwz1qnNRH277VNvJyj7t15nW5f4RPUDESSkgvoDK98t7BsBPVvxCkrPHGToDvy48h2DBTxY59mkEXXDnA2EN",
  "key25": "4fDmdw4LDr1Fne1N9Ldo8bUa65CLkKmZU16v9PedNRcJZFDSufZ7qMivGntXx7wT2Cz3KxqWsM3HvSHKRwba17nM",
  "key26": "4FUPPRDNm2D3EANSn817jihaLGedLM9mibK7NmYJUT4M9MJo7uxUXG28MvEZMdqAhDGzAhuWFnWgfaF9hTnfdZi3",
  "key27": "34nXcqPyNFwARmcxQLmUzomtHabhwqSMenRMeT14MLdKhgxnXMCDYhRxbLow9LDdhRvQ5QkdmTVJDEyrYVb9owp3",
  "key28": "4N5VbnK4D6H6CxDVGLkMLgApzpNeqLMPvWa3avFRxtRkCLFUCE5rY2QB3Dgj9uLhAWswyLs8jUTB6ozdHcU6bmwo",
  "key29": "3WqrQPp5iZRJqjrGLRMoueGE2DSvALPij7V9eNkAmKG3kkcKhNvTKFJFbWf1gFECr1ChKCEdw6vZjg5KzcCoRwYQ",
  "key30": "3MWZ6rScZ425A3XdNqdHjYdz7fnTm83r5Y1ZuurHchm3ZwkHsFmVnohZzjyWsdZHZovED4sds5RGppNm88Ru5UaP",
  "key31": "4gekfuK5XpwWuKFQn2CeJxmeti6F6RfYiGFJ4Bg7jjQkJFctDrSTAayBZPSF6pEjmeH4z8ukAaC4fBq4JTHQRyr1",
  "key32": "5TXGoWnJuaAn7LFk4j47Hxr4vs4Pnad15oZJ8EkG3ca4trNrcBmggF5dhpFK2uDqgZNvR5QAHp7axkwLL37yfsnv",
  "key33": "4JMPis42Cmz5QknrnvDythyFCqsEj42b7B1EAsw84rDukdQrFThp5SjDdtNhm5tnr9VwWeNAhqTrEJztikcruxxW",
  "key34": "2iCQMJq73j8byYZkwhF9MSoq51EYhjaMDzWgn4GViBXArAJboGN87doQC7GMmKT86gF7oofCA4gHM6iVrmhUbE1g",
  "key35": "3kBBANjHF6sZ1DXeY9yWcwJ9KSZAas6z5JiUFqCg6mT27HpNPNrSNSQDbLeo1F6N8G27V36KqoNEuEZ8X3Uza5vB",
  "key36": "42nHStVraLqkAn19jzegpYYJ6Naa5QCaEQ4xuwfPwivW9N2HWEVA79Hfk586z9Mnue8yGASPeW7wjocjxTNc1feG",
  "key37": "wZgZU3Lz2ngkuTxBvgmTvTaTEvdaRTH1TcBmXm14gUVUwCw2As9ottwSR9Yg1ij85L22cVAT21vkqB7bGxk4Xpu",
  "key38": "5TjadDcBYzfoEesetkFyxZzPvtbYBHHpwXRRxUJkRyxBzRadAXkeFtExUJLNarWfQNXJMSGowenmq3FRbwwQTayg",
  "key39": "5d6YVy4S5NFHiinG1cX5bKrcDNu6jMf6tsVTFyGanDE6KArsN2FM6MxgBg3exYSQcEd4zP4RGJDVgg8FS23rkJrH",
  "key40": "2wv9hL95XoHqGRNAR2UaxAw5T6rAXhjhk2DGpv8vM3rmxYy5AGDWjTxMMhNS8gxW43cRnuZb5PYXUtAqLQ3Tju5T",
  "key41": "4RbCRjprgTJtrTjxmuMXxG9Xa4Fpj9tWJecfyGiCyzXhxtBEq7G3xvEJFiVwZYEqVbnaFtNVUeMdadoSF5yjdfnj",
  "key42": "tLcGLQzg5ShR5FGtXeZMswVrh4YnWXVw7N8tAfLg24h3ptMrUHTChmcWdZZwdxFDJTXYfA73ajL7MFzmAsHTcCd"
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
