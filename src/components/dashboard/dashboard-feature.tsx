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
    "3KEbRAYZkZr1VSwNx8T7GdvyqE9QqpUo2mahHbq59QJBaRhQ2mtwCknvgnPGs7PdkJCyrbzkYRshKtoCEL61Sj5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yEKDi25cD4rRmJUDWJEEvakdVYAf1DSbFiwbeXQ43Gifaf2UaR7F8WoiY8vQEtrV1rdZoE7ec8Y9afyM6KzewJ9",
  "key1": "3sh9CVs4rTztGubd4uAhWAE6HMPHYzhz9VtwB4fMBu9vmiX4fY84aAyGuk7Ssvmc8QqjMLLew63ieSKkZrkiQ93L",
  "key2": "NC9mdfRqVDjRSUf33zBjDMhwk2ywgZFfhgiSgaLcwPgdZVpahW66cC2ALodZRCmMrEJ6wcV43KwUG9Dr1cywNhx",
  "key3": "5tDKsvidnmP1qeNQXxqkmc3frN38iQMwF9FUhvq7LoVbYLNQpEwB1LUSVp2vrUaiyzgAp2MW7aeMQZTUtQ5Bfvbp",
  "key4": "3aCYT1jbQGK6kFjy8XoEbUoNB2eAiAcY9U6YgiPW6nz3new9CuW8jnHW76ijE1kAgXdrYf1KuHBMry2QnK7anFUT",
  "key5": "2KFVY1w1du8n7FSfQYRJNDoTphWrjVzfWTPQWN1a2vGcpBQYpSnH81GQpjRdPccu2Eo9rq2frkUE9v68fVN8sXm5",
  "key6": "4CkMzRbocbanTeW3ryo14a8vHmnPiQhLZPxW5AD3JegVMUGYG2sjccuW2RGWZPSKqSSoiUbhrSUeFc6gJ8WXhW6L",
  "key7": "4UvJXCWpQqGVWga5KFRMqbKmc6m5njfNidYVXbYhLuGeBDQ1gdAJDTJzK5H3xwrXTjszooxifSwiJdXgZ3FVNDuv",
  "key8": "4P4wMoCh66qWpM4i8XG3czhzd17ABrNVui2yrQWDAnDjhUAdL88872V8B61imVHFdvix9JCJYZkhKiZmNfnnWMKW",
  "key9": "57JM2T8syZc4iStWFUnKMKqmpPnUyt6EWbapNPJDcn4Yid1ePdyKdRBbk8yYgVhfdu4M4KUsrzM9fVy2MgztVHtq",
  "key10": "3aaq6UJJ5pJQNwymSECx2JKNvy3pDhzDMJeKWQ4hTw4YbKPdMEzfAuihN8bG5e9WKLNQnGci9RCy8zqk5ExmxHuj",
  "key11": "28xetLUkrWLwSPneXG7rbP3qY1gDZeUnEonfccVjJjC3KMwaP9qsHsLgizMVfbrPmYXG9YotEnML5tH8BKBvLgyR",
  "key12": "4c9JsXamWoVCfq9qSBmCdJZrPwc9j8uEEAqrgvCBYEtw96T3G8MScT1k12JoKVKHcqeUnMDnU5PWoXUtkHxXT8cm",
  "key13": "YwhndnnpxxjiRN2ez2a5urHUXbMVJSFxMBjtXgKQfd8rtaQ4vKCvoezUBDM5YQjVXW9PUfP8Hswz2eS2A75cnRW",
  "key14": "3MaZ5VsChWgMcGaL4jD1RPYBiZ4Mx1jBBUH8vqwHuNa7qKb6pxDmQ9XeRSr4t6tYaAmYKCogsYLcXrUwTp5FP8WX",
  "key15": "5jmYCbDy5nkx5yXJai8fzrivCKGrGgzvTCN5aibTrNF1HhLUT5hLofVAg4RBYfgft68CdE23rS5dnaTs8SEM2BdZ",
  "key16": "4h1uy4Jha5LcBMjQUfmCok8wXApxa2q3qAu5WMdY3xxMUvZz2L1naTUqMwU74yZiYVBe8Yyb1SVfxx1TVnDzWw79",
  "key17": "3JAiLXBHCBbqnEZueLAfECEcGFC59Ap9CKsnTi9M9nXoDkbKg3nYGECxC3GKyqxKQvj1r8qvszjcHuHHT4BnH6Tm",
  "key18": "3dw7wQhAqa2gyLNYu6KFjVtyqsKYpCaeWaqc36vfvjADzXkTmZ8GtwFRBSRvnpkvNKK1HAE4eKyhNSVWEEgdXSSt",
  "key19": "2qA5gLxNKmdijrPFLuxtHy12LthGgCycphEPqmskfeujEShMHu4PzSabrM1eK8JQHmB2sowyrwi93jUor5BLyRqX",
  "key20": "23PCd5XUkk8tBv4cNj3yWGMcXEJjjd8Nak5Daebn7ey8VXV3w9wWsafAqm5foEUMrB71ENf1toMYMyWt1ZJj9R3a",
  "key21": "mWFTPZS2YcrPJ5LAm3pd3hnNrPrFPyeFehUDaHEfNYU6DgcYa8kfFKZuZASctSsgBqKvKqhKdfU6n1z5aGSmdde",
  "key22": "2ewc5R1KyrjShhZAipxpbgio9Zrzk4mE5uakJucha3bqmJFmQYX11whoobW2RqpDu6tJWwLudGgUS8gANKTeXiHG",
  "key23": "2eGNNPLBir88si33WWZRof1US1qrrS7a8w4XPj3oxTtnkD2iBwLAjVKjD5AafS7Q2DW8pZeLCGqcurZcKm5ea68P",
  "key24": "3PcXhjs78pcdEKLAoGWdPnx5kLNijb4wkndensmh7yDAJHJBWdBKJgazNtU6kRyDJFNKYgujDcCqztQUCDgJzRY4",
  "key25": "3ekbhgVT3GEsEpu5YqA4fzQKHWZUYziBV2zCKAtZb7HLDodGgDwkDQ2Ce5kWFq77AfLjvyeytAxu1dkZedG9AgXy",
  "key26": "2n3S8gaQ7emXrDWB7tBrGTfahPdzAA5qGkkP1S9vTc31ZJWhv3VSW9s2YeVuK3pt2kEFZQcQ45ezvjp91thtTYqs",
  "key27": "Lch9JihqmGgWGMBn6rPLHRyBbtyf5eNCoPZy51asNmwdVHqHL22GGssfiZgTroZrvhBe5xChCsQC6yWNXCvruZq",
  "key28": "4BSRffQsUxt55CPKt9DMvitp2C9XMMYVeXA3NtqUKiDbnDYNbYM6ygnFviczUaDP62H797k1KdjD1ikpGEktFgYB",
  "key29": "4i43cRCK5mhaEuXgBXLMwRHZcezEDpfgfoo8vpS36Ztf5sw43mwDj8tJXLVwYoMM6beFf7U5tRQemDR6TRcSPPBm",
  "key30": "CRNfM3eMaNU5yfrKWhy5XRaXrY7fj6qAJ9b8L1Uub8qacZ2QwvTnhNQ3ZdWAFcyoWtzvQdQWfjYf15kRUgw1UQX",
  "key31": "2c8RgrCSfin4EuBKS3kKydhpbPhc5ZbqJU48fud2b1kkiQdENiVmpoDURrNUeEqoRXXPZ3RNpYCoDwzx9w7iGrkx",
  "key32": "41XgKUequVRaK4kYSetf5CrTEYTmPB7ffyhZ748U8nF7qQBN5rAR3CDH62Jb6NYHFuM8Tr3kHsGJdVMySgoUKEuW",
  "key33": "5NsUvAX8xFeEsCmRfcFWkJRH4ekJYp8qyBKAK62dfrCXGNf738cyWQWaaQEMkR2dpAfvNfhLBScZPQQrZoKr4ffS"
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
