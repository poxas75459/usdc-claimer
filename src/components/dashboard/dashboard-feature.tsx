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
    "5H7DszQDhbnnMqLnfgmjJRd1NxKYWH1s9zhWrtE1YyZacitbcADGMWDpnZq3Y27Z9D4nGCsrB5bvcjpwZgxexrN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JKFsaxrsGvzya86xXEYjqA9GG3VfSiXur4fft3e6rfmaMx5iLq1Fv58RsfuhZHPKrHUEu9ULm8etiRP3rf6ZEG8",
  "key1": "2UmLJqDeB6MV15tHz6vJLizB4axLUzxm2dRQhkkcBSccEavoxTM1S22uPFjMWtpS5uXTsYN4j7PY79P7ctdxgGYe",
  "key2": "5JfMgNfKk21mYB9YqBnnubbX92MxFDxGYfdUvByg9qEVN51VWa9YLKj1JyQdjqDuuZfiiNqMhmt5Yw5kMrTSSy9B",
  "key3": "269ToyqLHJmXq2caSSkqUsop5xsvjhNE5tStGSoJ83pD22RbjkVvx6huMiKNVA4c5Ko3hqAnBec9zN3yWJ2CCJxj",
  "key4": "48MzFY5vS9QWZ6Q1pEgMsph2bQgpJFD9Ks6t2ptDbPRreSDWvBYV1ea8zKSWAbMPfhEec1h8nK53rFS3t95VXGx6",
  "key5": "21q7UEVYBPVNugP7is38RU9SiNadEpawtxsGVqfiGCwrRByGCaYEvE3CS6F3V6W9qJZGCbmwgr81xGz1swvyDabm",
  "key6": "5zixV6SdciNR8kry7AnC9YjYooJFMNt1UEai7D59V77FTwtGMNA2My3GdoGc7L2EEBjYJ7SjpkK9gzDVGBgLf7Cv",
  "key7": "3NSY9f3pMfSf2jyjtznS7PXkDRwzH5CokaBinCkwZakPBH2dP6FNSA56xS7HA581RLPAEuXtHc9aSHpRESLe2H3V",
  "key8": "2frKHPRu227UZeZRZdjnuZeUXfKa6Yw7KCSdbmp7XfMRqVVwM442b2Q1aLnU19rRkxYAZGUC6R1dL2HnnA2CdKzJ",
  "key9": "MQn5YxmdkKCVqiFnqgViNLvUds3QpChjMxJuxPV8vC68hMvTP1zZAABVSD8HurtmEU8oh8543P5jtCrGMgdvAgZ",
  "key10": "4LNDzGVBGakJPGiSRyAzNpAy17DtE5GhDwCZEf4LMecxLXKDtwzFHQ9Z4rRgfy5Bek9GegF1tXHKuoLbz2a4uKug",
  "key11": "2W8wScopUBrA1sG52cphn5H6eUf63wMz1vgjxWqGZN9mnjRASvTy82etuD4GZJznSgWE8T9BRB7o5wyXFR7PDMog",
  "key12": "2CebfM3Fd8GzoBVqtut2DtcmAZV85d89Y23dJFczaTd4u8hN2ra3mqKzCUpKgk69W2VwxBdKHqD6wjeetSvNXucb",
  "key13": "5wzcWFRgFP8qN79Wn67nY4UL2ZfqYjuGdD7qdnwqDW4LAH5YzFm6zfUVuN4UGT2c8YuG5Jy6kkgXLojsRcrSbrg2",
  "key14": "imKA5oSTsQ9d4XUMjCzohD9KQeYzFFTXxvTsmkYGtkmAFVvK4cwgUYwmSxEzZA7x5VxdtzdbyAZaNvXdLTiD2j4",
  "key15": "4BqrLNKuGNqUr6qM4NuHPv9AmujALntz1qugaoPVfL447AFNheLBziS7G8R9MLusstFQp9Y4wVmj4fJwHo4cm3Xx",
  "key16": "43b9GGx6WFcf1wYXZeM3otryhwLNK6raDGN38AZ9rR8dTe1gG8VGPciW5HkfULxnsEnUiV5jGYV9SP2op5sZbp5G",
  "key17": "28GKUy5LFv72EwYPbJ5ot5KGUeZ8m3bXDohnkBN78Xp9Mc8Tpv6hdv9nRfXR2N4pE5fpgSZdvrRxfpxfe1ftn72X",
  "key18": "56WFKCpUt8QkDJfM9WNJEdVJcJp8XfXJ8Gm16k1THH5QECB5rKW1LdpY2GCQpBSsgdfcJJJTy6hdeLwkFKcamPQL",
  "key19": "65ZUU7cnCLXkqRHDC3UVe7ZpsLfVgpxsE2ETkwdWHyXy4gMeuZJt7KJ3uovrP9xYXr2mZQbLrcm2LCVoBQFDaZNX",
  "key20": "foEqP3zM3GPH7oiND7SEEXkQmEfkd2ooPx3hYgXxsJoLTV3qvSRg1GvWrvKkHJMcPVVWhBpnscovcFATzcfVC8E",
  "key21": "5rsruS1H5HkBoJYHsSf2vZ8rXiC2B1moKbbVosnf4VjRpcbWGgDzg5D1ZDkZ97fN2todzdDnW5Kti6Hr5eHnfcLk",
  "key22": "31SMkCNWhe8b9DWRVnS4bP7Ed8oKPA74FaSCacnM41EJFGQatwEi2qnmrfEGuzaRVVsjVENbSQojmMqCn6Q3Wrtj",
  "key23": "3Fr2PJ3AkiGK11oWA3ukdR9Kaj2etmt5YCDoJgvw3e2U5nyFY8vbuKv5bY26PKVBrFDKn1HY6MZaENT36BMwTfze",
  "key24": "3pZvu4iaC5daJ2JRMCenUeKB4P3rDRkfPAN6LQgyzBUsYJLTqV6Kqbj9JEobWPtg2aNHWBVMoagEAKRkkD5MtD2Q",
  "key25": "wNqhf3HVMnPiT8S2SVdchbU3hxUToWzSea3KhPiKmvd4zuyyqZ2cE7yoYesxAKwvbxuciXn7up44vffFkr8M8CK",
  "key26": "3tXyeSexaoQgkgNN466Q7QXn1w24XujSYjsuzTkCuhdD8FEkC756Vb8G5WXfHSbUbZqgxFuUC1gznCm5VfmAA6SA",
  "key27": "2nSU3QmAM33WytECjn87QQXbruC4oUfiSJS9WDmRr1b98bwEuMuSW926viDNxYqUztbfZdXW6FgZK7MbBveJz7L7",
  "key28": "5iJjJBNyytyZvy2nuTjcf74D1aVGrLp6TRTpgvFgAUegzhmpkv1pDeknThA1915HDzK914yec58Ugu3HbgxHwrGU",
  "key29": "UAnZq1p4xNjp5T6cNFpcgCCetf6fhQL6y1QpN89e8DNpw3nNbo45uie8zWVTqvwmxabswtLuSKkMFEGAfNSs6bb",
  "key30": "3qRs6TUwGSgqqMbQQy3K22qd5c5PHiydHc9tCcBLBdPMbPZ2z8i2yfwDzA1qqYeMEBqQz3LmojbF33yXG7q4SLgX",
  "key31": "5dcqFN3m8rQvqwG2bp7u9H5ebiSVvR1MRnKuKCk4SZJhJ4pszxq21qQ7aHS1JWLSMmTtWD8i5m48dY9Wsrb2iM3E",
  "key32": "2krHzgcHghZXeSkWZeQcEJ1Q2qbD2qpfdfigh1cD1g79wZ2dCQuFZrRQJXGygQNQvJScWaho4p4cjLt1aj17yxbA",
  "key33": "5h1XdY8KaopMU9UU8vV2yqsBRbHRkf78acdbRZBLUjc1mJh6GACvE4SptTosFapSp6N6SeWHv2WdmnLkcp37H165",
  "key34": "2johmR3fi396eTp7TBzhr5YJ5Xw3wkaqF3gHyHpuxMNwveCqxTTKsEdarkitozRLP7Svcq38NpeXb3rgX6VvWfw1",
  "key35": "2rEc3cTQwkjsM6g7EUEfbmtVsnxEUoBckJyRkS1L5Jrnd13oFhFJYR4D4VUUrjTftfNGu3VYNoWJsofMpMnWjjTH",
  "key36": "4Mbc94UtSmiZSeJnMvPazo2AT7KbuCLz6shUbCQa1wWSYWdqEkfeCtFwKkNTz7hZ9tSjEvdReuwAJ61DNNsdReAE"
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
