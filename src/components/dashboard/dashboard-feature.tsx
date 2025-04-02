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
    "3QHdtHMmwseXmJTdCJqC1Pb7SQ3MBWrvWZH4e9fXAxZp5zMt9EndNYgT9wAYCT4GJPtf5Jhh4NfvpU9hKbPezjuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qd4AXv7LUARRyjuahdqqATPKbXuS1ypjJy1mYS9hvApAdhjbL8fvNDawbwWeUwVZe6aohgwxnV9Jmm5rjedvpb8",
  "key1": "43eKEF1niSVNbSodwaCASPQPnQDwVXeks3341jFnwPqWEMSLgUS16c1xarjGHKa4Cq6WXZL9on8KbJBQtNHvoPMC",
  "key2": "4mTYexEwAd2NKmbu7JJkjYJp6J6rj14TJybZUTn8ayhR3brEcreft4pA4JxG5uyBueYJHnadZ6tpoosvyKpbdYf9",
  "key3": "2kvSGSTwDdLW8hJ6ymfP4t28XiagiHYcsVH5yJQ2DKdr6nMu6bzeskpnS7qUPj3NyDb8dvEmjhk23zfPGPj5BmdM",
  "key4": "2v3EKKrmXV5j8QBHWV6aJwrV8StvTkVqNNgzENCbtUH2KW3TVW554hjyMXWYbMAaLGVk2Rk7sREQt9k3488dtECw",
  "key5": "2UhsLdAi98kFzBcj7EqVE6FB2ajEFMoa1f2he1PYGoeRVhUUnLwCTVWhiPopdL3Vyawdxy2CtqPfW9ybkgWWcFG3",
  "key6": "5Ci1ejbAvatuoAm7KDtcBMwzg8gW5rzmRgvgudeazgLMx3UT6GfoYgqWdkmcsX4yiCbi2JF919ieb1BSch5hzWzE",
  "key7": "5XonhKn56eLsKqjq2Ue9nChswJ3y5peZW51NWvBP6KYr6H6yBtr2TgjQMum2XqExGy7nxB82XD4f7CVSoEVbXkNv",
  "key8": "3fF5doiha5VbQeauU2jZAwGFt9zryiDNbYHDc5LpsCB4tMk6V1TKbmHnYjobkg757ed94WRb6GeX6aNRQPssNrfq",
  "key9": "29NY4hu1tu1evhN1qw7Eg4jwTuALPdkWjiQ37skBU4B8YB3t1XAgrmc7QgwfJgEc9KDUvcDb1GjqC526EJYdoy6g",
  "key10": "muvGMsDtTMCkErMKZbZ8KuVZ4GqHA1NWthJx4DrF39J7VahJU9TrMnVUBz6XXBycm16YSLsgUWJWn8ZScDZSui4",
  "key11": "584UFUpA1aPdZC3rbgYS7DuWYjkrhDio3KDMdYEjUfKpesCMVMrFXBnMaMTThoFTwEwHF2QCZM28tu13raD344Xg",
  "key12": "QMAnGZd7bavDbP2hGeMKkdxYNTnRYQfRD5SNSjoCaAXEuMGEqsSTYUbkFb3kpvbGGAPGCNSoJuEgV79xSNfBA1p",
  "key13": "6B9TCiQfDoqfQTfUvBAcasmaZcQSog1D9Q17s9mAw66fFn6bGpoGY5w19r7AAcUhexgkhyuvzvRLjgPm6h884sG",
  "key14": "9HVgvdgVh4YTLKqkxKAZoYbrxaRJcZspM6PrdJfTm7P55Ur8tJpZrB6iwThbgBE9rHW9WWiStQgxm9QDhHr4Ek6",
  "key15": "3V6yNrB7oJK7AFtgySmnGCpCRQnWVfd9gEb3mozZaz3F1Ti7DoaFuG8jKdY2PA9Xi8qNijzqrkVnTYS156gh2L1x",
  "key16": "4xxEc64uQbrJXbwdBYTWVDqQAC9GniUHh7xKEXZkYA8dPScLjW7WBjeZ2DkLRkLHxNodg9SqNaWy9Zt7aNxyMRRH",
  "key17": "5ZfphwMpaKjbsjKknFHv96yGEe73VZqS4Bt1HSSGUPpnewz1equDmNcM4mJW1vHYEYHsEB2pSciHFoE88ZJzb4z8",
  "key18": "4H178rMrGJiUv6P2jybtibeeyM2BZ87HAD8ENQjES2DJiwhD7tfGQ54XJ2ZSKezvfEhG8GJmBgSGKKb44hT7MCV3",
  "key19": "3YYutrxgaAGWyZWNCzJTX2ZKQ3dn2QR8pcTHdJ8ipTBvAg8FBzffRLs134zJqbAMfVZkmgkSJRxY2fwYZx1pyAwE",
  "key20": "4QDZx5gRiu9cK1fKr1kPQQjh7zmf1E2Ep8biy36WxdWfNRcgeGeBD5Y58AXttm88pCjQBPNjLfuXcv5PWijNHcSq",
  "key21": "4UqCjy4pySgYa2E7kReCxW3HWQSVAzKnd3Hwfq5Uw3du4VwBAPiWeZSSu6ZTKgoXYbTQZysgHjhw9BWD32QRCfCo",
  "key22": "5AVARpi1hui492JWNTAmY4jCHGJWWcNXdXS3BaomgXYDTqNrHeQxJLNS4w8SBqpKtjA5VqKFhFqFHxaL3dLD314Z",
  "key23": "2NthWNpySbY8A1s6fHjGVXmXZtdi8KY9Z5qMpFxy5TJJP96PbW9QdNiq8a9LHFj3XBGXtr75biSqbEQSgMzbvdT1",
  "key24": "2cyta3cK2Zv3BqZZhsPg9te9UprL5DP3UGb2Ar985LMpuzektrZeLzBbkC37sTq47RTAKaZs9CZHukhEaYYcRnBc",
  "key25": "67TV7nw8DJaWew23kbpdBnLzjv1HhWFDUUVe2WVWe9Nvr7oKD51j8mayBZaS65vAgJviKfkDaPgduiYVrBe6Se7z",
  "key26": "4u7zapRWs3m91ZLqr9UA34pPXZiNP5tkhjwJF1jmtnfxtYBcw6n6qXHFcMPwq721MneUPsWR5wUXaNFWQFjc5sEU",
  "key27": "2ayrqcGJBnuvoyLfNY39QjE7o98Fjap2K59zs32vpQtaupMs6d6phJThKABxMpiMAzgc15DT2CBRGndMSfFPgEWo",
  "key28": "abhsrSK4akHXyNfvkN3NcQXsMMHHaeTxPUDX67tkAha6zq9GFdR2oVPAe8ZthG3PgKj54u5YALm8Ep4vxwTY3kM",
  "key29": "MRBqaMQVjNGzGWHnjL1C9qU5e68MxkCdr1nHFGckyHCJ8qb7yqCF9iQrMCFm3eh7Eg1VSRadNf68KJYJTskoC52",
  "key30": "3YXLEYPo7b8zHC7eKBqf2gYtAoF6wseNowrAukZHrSsTYAcJ7Z4G67BdBWK5pqo6ngLo6hNJxyrPQJjBm4HktBgu",
  "key31": "3hjTA4dwB29KnHCp882fxWJEH2xaqp96dtpwMbM5sD9KLT4xLHmz1k1RQ1f5GetK2caxTQrFvWuB5EtMmVQu5YLt",
  "key32": "5Qz52ThLdmZjKhtTJRSh7YC6fDUqUUAc9dHBBmY5iiChfAStWMMZkXpyD6SSwxbxkNXETvCUVCD9dQppUkLkGkLj",
  "key33": "4dGCksy7Vv9u1t5qtbNouSeFYboXfyt236c4vFeo6uCMbZPWCsgkG7VsuVQ2zYDQMH6QRGgme5rK3kJJym4rFdnL",
  "key34": "3ZvttPKx7zpdD1bFPGFJMvezSgKwwuFwfz8hNET64VhcMk35reVk8SzGU6zhxUSy1e3dfMSQ1q72DfiZjMK3Ya3L",
  "key35": "4X7noDdSmgQmwCp1U8z1cZZbahj3HfC4upXZFMzMMPEQpyacyb5YgweiGNEPNB87diJKBi74xHyz2vHreSwFFSrT",
  "key36": "3xudtjto1mpLHAyZHBNQaLzd59oUV8PZhPPe8DxK12FnxHzMYZuVXxLG4esar1rmCs4jXRqTapu2tgAGECXdApcg",
  "key37": "2Z1SDLtDLoKCEG7n6GrFFAcjgjcK1xRN6qhbUe5BHvJMvCZ4swGoSERp6z3mfe2jCrsYTLqkovkATDvdsrGp7mrM",
  "key38": "3gP88io3UB1UFX7sCtuhejirYURNqbS8sHUFstMhjKg8WWWqCTiUL3pUzhoBt33kJc6vFuTWf8C6tGV7Zhgb8db6",
  "key39": "5bFazuLgHWbSM3ZLkKkrvrV51TAxTdDGAaSNnKTG9yKR53zrmP24m3u4EpLiBGDKHWoMQzifePiXxvRnN4rPJaJb",
  "key40": "4DVw73XNJXBx92wZ3A2iKugXYsz8kBSBCbytWpWdaquahgmDSGtkddnf6KR59UHdCMxmsSJG1V6rhxrq4jDToFpz",
  "key41": "t7MnJoofhF9DnVJHDrVEqVTS6R1RrQg5pKv9J2Z6t1FXZHSbasg9Dfvd6xFWh957uDzW1bVFjeQztCbxjR577GR"
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
