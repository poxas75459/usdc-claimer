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
    "4NKN4NNBfvhTH5qnxQhzYZo5F9c7UmEedhVrGRrYr5ZDLBbjQGUcSr1mNX6QShTMTGYsKne6j8FYKoHr2Mice1gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMaRxajYtSGZLn7xNydJuDcrcsdnA3WbvhG73ng6WKRTgzsyi19D7G2PjCypazK3CFPN6QybygRU6MuWAkodKHd",
  "key1": "2xL1CCnrLkcQikjzNLfT7WtA8GJbq5wSCwd6Fy2u8vCVBi9WnF9FhzPen9gcL5KQLPNTQ73vZCQx8LEezM4ECnRM",
  "key2": "678EexX3bgSTyGUhPU83cyULb5SrgULJcQuAeTm5b4dRMzokBkuVjLyjSwsZaaUGFkfaZJAY7D9Q4wwdVyAy53qb",
  "key3": "5jGkU7FUSJc3bpfZxbgCz3YAtMKuRaLQYKQrMXmX3K67dZmBu7dPX8c2biV1b7saEiLqmYwbJCr4XXB6btkfe8Bs",
  "key4": "p8xb4HjxEVgPcNWB34Tr6VVd56DZ3dV7xn24cETXb6gxgtA9yqVMez14Au1Poxme4pghLRE8iB9fmUqqWKibeCM",
  "key5": "597wzYLFQ3ysvJFk5e3j8Kd8fU7rgfGBcnfxTr5b1khhn7G87hCNcERRFNTDe6NKMNB7TmKHYoeGQLq5WAbyUk73",
  "key6": "4rA5SpcnGWt7SPa8dEBZwNhAFLQWWyQqrRhGkEuK194tAXVnKgRaiPk3zrkVgKmx2JMEkXd6jFoEqFLxWJXo9FpM",
  "key7": "3mxdBKLiFbuxd9eFs9PYs6WKxzFtHPz2NDwV7uQcsm63Tf37Y3TA5KhZvGJdZhitx7tHbK68tbRyAPL1o35xgAbW",
  "key8": "5YMRHsjafDvxcXQJZqw9bTaLmZ4Bk988GWwYoJmSHugJV3sivSadQVK4h2BTXsSuxwVw9o9T1aG7vTKiYEDarQi5",
  "key9": "ZgxDM6EUbCj5JZHmBxJx1jo94iBugdfHsq1sffH7y7oxJoW887ieYYK2hzFdKAVXs2DxLGrxNbodN96oH7S2iAV",
  "key10": "vWT3UDgbrYAtwkDYkD366fi4S2RYRcWCpuL15X1ZG3dckzGeNqx7gHTJR159D67L1f9Twb9pV44o4Zx6CwoD2yQ",
  "key11": "aCwTQsLkMg8ggvoWSZVoNf7Y3kmmtDnm5FqcwSxunDw6qxZ4zjkfXwf9XLHk1H67wMibF9Gkt1tZ6kZx8SsMKXw",
  "key12": "3dQzgfNfXaGNF7A4KhPG1Lc49SLF5jDrmNpgGnyV9mmiwZtDmiV3ZPd4x7dN9stP3mthzWVXVUAhZQmRSTMMLbrk",
  "key13": "4F8dhPjdozRfmvGzAdutJQUrB978Q53WyjunsHpHLG1Mao7kFWxgZzpnn3VWzFryftu5eQKQ1uV3dYCVHys2JqqV",
  "key14": "5vFGu7bfDYWcTo2QHQXRxD2YCCc4TAAPbUBaNkLPjp3XHAS2oyZe7EcPv16mXk8gzfr8XHCTjxn3Ge4LngeLG1fo",
  "key15": "2gajVV38szUkb8x2zk8DvANuTdSLyai96Tw85RDR8pncuTysErBStTQWx5cse11VJ7o97pC4u1L2caivaTg2sc9N",
  "key16": "66J1i95kN63ahniMvk7Sz8azCDjpoqGCzeKBmc3Cfaxe7qLSiJT3hubJt6aYEnveQ8DmkUgnTGGir4wF1JEwdn1q",
  "key17": "S2C69HVND3FRSDNc1ZG9WgfLU7hb2YWHeUA9L2B4Lu7FrYGsxfEu1zd7r5DAKg8DjsJQErsecX9kmCLoRfJYqWf",
  "key18": "XLwkR4aoa6KqmgQmaSCSiMvu5wJ5BCG7Gjg4VXaAutpeZg826oLn9mX7iAvBeyYSnH8v7928xLGwCYiJkRrGD9z",
  "key19": "3pz7X5ADnbUKRqR2skhifMnxgKVE5yf2536nR6cUjsnjqeZBdSBRXPPacGLYskCkvzrzh7UscwFcCXKMJ47sf1Wk",
  "key20": "2zY2jbp2F5Qr71UV2rPhG3k4VjBKhpAxHG76AUTWtjZiikWwaPq152dFsK7SFzSrShBfoVYGupfVFetUmVV3LduF",
  "key21": "UJCNaycF2eT6VFpFM1VNTDEk8yTivqpNf9T5DT15Nwtd3civNME1YLjUkMwRN23KWMjqZrKsfojwcA6PwM1qT3u",
  "key22": "42n9JssqDkDqELaGtMwjAJKx9dYn6c73KF6ncNH9w8Ctz7XzLUd49VfnzhgAqZcALbS6gZzqJhTa5f6uyRiLUech",
  "key23": "JSiMuXsXy8KN4soM7eh2uR9VdfM6EdUL14tpa8rzmiR3rrx2XbG41NZPTBr2B6vctcC6na6P3YKBh4porKYneaZ",
  "key24": "5fnqxcTHfNCQbDPED12z8pX2g3YN9NEv4o3zfWQiCFiGSkcPdjFm98TYt7J6uB2WXkYb18rVvdYoXRQU2QyY6Fxh",
  "key25": "3QGv9nBemE4b6zrnLHh17rzKM5KGjn8CJmFNP6pYE3vvqAjY2eeCrrTwZSfp8HvrSwtsHiPjVg31NzpCQCZskyMX",
  "key26": "56MNMmcRVrnwWdvkMXeSm8Kh3ZD4zm9EBwvyUk6pPQWnuv5Pgvcdet959BxHEoCMaJzjXex15Fv9uUpsLcbLWmA7",
  "key27": "HvE8oSDCumeUDYhjpi6eVaZUyQdtqTV8oCsqzrehTcUBpRLseN5WZoE24LxuBTMVrE7ZgPs6zDDeWam6nKnn1Wo"
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
