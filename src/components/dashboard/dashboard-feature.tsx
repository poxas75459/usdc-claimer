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
    "zEHZRSZDpSaotEU7sSHTZRJCimwUwGNPAbsU6wLmUW7b5ZUcm1YSHzkcjWhYi2a6UDiCHHR5YvcPZRRiQ7aWweu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436GjDYxMcd9kKsSA4pdizfUKqx5KzDBd86zQQFkVt8LS5cc44TqkQwyajh2f3sraAEccKFphV5uhvbLVdd3oQqc",
  "key1": "4tQiZgaDaS5oaBA1nv8FYArMx7gXL5qHSS7Ts8baKFVsAQBTBRvRQc5CVr4uRUUeQpmJu79UsMBU6TUgVN35DEoZ",
  "key2": "2fssZqVxT8q5M6eQ9rFYJ1yjSDZvb8rZ8p2XGLEafDWpuwaWx9E33KR8q9ChVZLer63pitj6zzFwQUejYirrY4KH",
  "key3": "tp1v8xD8atQARfoXyxr9sSWVDs2oVApS8u5bVaaWrqJVTSP1VXpHKxcwxGHew7JgLGNraC6dS18B9CrL4fvSDvn",
  "key4": "mcaP13a2wnLDhXmhoGBNNHbXZY1QsDgVxRThTX7wpXpUwYgVQ8W8uY6mbn5qtXAEuuGWyqF2R92VY42djb62VXv",
  "key5": "oU6Yx77KTyC2CHmD9KBduuYNujzFjbpfBKfbZKpiZfNKY685fBamSVc9qcivcBWZv5a5KzA9VJJPcbb6FagppVV",
  "key6": "2Ki5eVxYNBMd8ATWjmrQwvNmXgNXyTTykf3BuRnRMu4V4Tb7b68dtNizC5CdFqUfUjeqbBrcrC8Tp6XSgL8XPVgv",
  "key7": "qJV5rsohmKpeAaQ5LiDytwoJ1sqKf68xbiWaUSQ5ZknWceeDYyjA4AcQ9viKnGitSAtEKCnUxNDdgBiazhd4jLE",
  "key8": "dsKFXYoFtkuUFAij9w1C3fz2iCyjM8h8JeuX8VRLP4W17Yr4mjUxvSvmJtGGymQwNvqdP8q3t92D5ZQMuLTXPPn",
  "key9": "sd98pYFJUsaDrbtscjrPhAEa27gB4GgZowtHcQvDy2EhAFw6ujpVveM2mQfn45qjCcYNDYtgNxRM3Xhk3WnzvKu",
  "key10": "5hB5UoT1kvzmUdDdiJYzeeZKKo3xVTB8Z26cTD1UAT3mnKLHueShuc9Qdt2dQtCoMP2AgYN6pFkjG85Fz79o4XcV",
  "key11": "26amEn1Y6SwqfkEh719b5GFBHEeVKxBtiKnsA7PD9JgnV1q7NFxk6doL6rUHiGL4i9CetnZNidBrLWgQtkhEDnfU",
  "key12": "3wgpjFpqc4Kn6N7SdXoDyaeozCVVetD1Nc2zRT5D6auzrV7iGHueh9iMZmK1DxZThgJFENVjEf6wgSPLWyYiU57K",
  "key13": "3uKMJ4k5ssF8jWhWUTvKaUgvZg95oNLSoSpF5QmHHhnFAPLqsU37GDzcZf1AyETTeoEYDYYgCcU7x8ixSkDofi5V",
  "key14": "29anuA6brwMRrh3q7FrpN8hLjw51z5U74CG6z2WXsndk2uUZgoebUt77nZrWH8ZYJFh2rKdEdo9TMQVib732hbLJ",
  "key15": "4xF7vMYP6PsUzTRpmkda2ZyymK74Hktq1Gj2dxyGKAUXcmGmDviPeN3cWyTVHnrYrcfpmY3Fz3f1QadEv1d7qQEN",
  "key16": "2ax4DhR6e6BB691hrSGznK2ewjdosJ8kGugzAXfh88tbT36irTcpv2wr2jPQPTQ3oh1rJFR1UoJ5TeCYJqnkayGK",
  "key17": "4rvhsDh6XrnsPQcn9DU9RsYjYrmLu1wUdoJsUWx77H9v3kJsmxYaW2CBN2TUSPvjfARdqQP4e83qyuUW9nqFCKxY",
  "key18": "3LmxCQzfoMfhFELdu5BjyWxCifNLy3dU3aUt6Rjdrt4BmWtp9TugjrvAdGkcYpr4v6x5ec4LebBNENYJRkNz7QCp",
  "key19": "21nxneFExEytA1cmkiFoZ7ijfDtzNay9LSfQqYVQK7ro8Fa84NxGEFcVJBSMH6V1jfXYzm4iU79dGnUVegmKA3WE",
  "key20": "9Uzv3dqCqkdyPr4bcK5MYQ7ctjdRS3nLcckZ9kr3x9EeQEu1dqHMarDde9ZV2oSnNEFtH1Ad6JX3BJCdXumaDFX",
  "key21": "3XQejcGUSD4uMBMD1vX9y4BJrhqPrK8ftpUipa9nSzcUFUehZcNdRELcxWhmvDHsNprQkubZpqS7yCuVFeoyMGQA",
  "key22": "3xCfnQeUUcw7x7VhupJNsTKpxemxM92KBJemkUTiXzLNJNFfvoM9X235WTHjXKCisTGagSbTJUmuzS1NK6WMVLPn",
  "key23": "4AKKrM11wuYF1Gua4FT4tZs2gsGyJBLHD3HSW5aAxmGqwUyWLczBEqeg4VQ6zrDBxEQnnDp6dQVN9PPiFzCWsQtc",
  "key24": "2P4ndoGXck8WywbavyA31FE7BVdyye7AQj6fP7vgrnGSz2CsYM6PEeAfdgg1Z5qaS3cL3MKzH8map68xXDiZwqqT",
  "key25": "tp1H1SFt4F7DBVa7JfjtQnzHdU1Edyqww5VS2jiQSdYcKw3boWRPUgxvo67hgkUsFoYxD7Zie1pZLoAiTn8d2GW",
  "key26": "3tJbS7ezbeX1RzzeperL6n1ybmRmbkXZhVYn3bpVTU1e5zpg6TV7eGjWPSfLenA3yrg3KLXbE8okFNnAvGHVGGSS"
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
