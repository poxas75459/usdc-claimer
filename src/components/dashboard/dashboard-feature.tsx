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
    "4KNRzmpZYQFJQJHGzrTt5muvBsGKUHQ9o8vixx2TtPz1zLqW5NymR7BLP2xteT5uVgXZjLXcKZWZDPswPrDFYtoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62iNWPjayKEouRMpiTwPR6kD5mKtEYgvxBBKqELg38meRx2phsuHVQydPGyvRf4d1aF5HyhMgAWv7Dvi16765F4M",
  "key1": "4yPQR4sB6daZphsyksfWxhbHzyjZVkbWAfTWFgTWCNW4z6HdUsaerpaJe6jKXVBTvPVhSMxiXQCx3GESL9nL7Rxa",
  "key2": "2CX4jyNhEEvJjNBN5Cfh1wmXBaScrPaCHbRHyptytqVH7a8jvFdscN31BmjpH2XwfLnMz6WnBTxujdfZTaYowGgF",
  "key3": "G6yHYyJMsLUAuyEqEjEygQ5MzWcAKVWKcuz6vX81PieKovaoM15mEQiCfBdsK6SSpgvpqCYYPJo5ASFvGSBikaE",
  "key4": "2xALZWAj8PrZ2tQnnJ2Pk4Z9Z7y3FKyQoRp6ebzdvfysAfb7ktMhSVfpHFpLiu14c1o88QXSeiN4nFG7vkPqoVYN",
  "key5": "5GoW37sQy2fLfb31ipxhhWpU4yX8k8yqL6Zy7PcKdjocBKhqDuZdvgmPa39eUMJn1cs2HzcVMP14PJAML6qWNjSp",
  "key6": "2wJ4xkH3RYPtcpZ1YA4BmvAcMhanJWE3VeK2UaW5D45VePjpmAHEg7E6i9Rzxsf4rbtHxLn61HjbdqF3FgupuR8o",
  "key7": "51nUYGWsA8KRExs3foB18nr79Kr9dfcpfVwPN3nDeST5RC5fPiA1AA7R8khA2dPtcTPTaLNFE48zNrtB2djpWxgF",
  "key8": "2HVrsYKJ2TX2LLipwjnjMo65LgpovAWP226NUqNXe3yRGDq1wc7pj8AQTcFHZVifJave37PLu965x9FuMyJjsrHN",
  "key9": "2suMoKduDKgnsjtEbN64ofv7J8DFUJxJWJ2vybwivDu4JJM1isdf7nCP5jMXX5Aw8E2BVERVRXzMZATB9C7Gw1xt",
  "key10": "2armxJftcgq5VrM15gs7vHaTjbME4g1JWbecnZdL3uyzVwkF27c7fPreRsTcE4guEQKei7fHcYu6UQmVnVgW4ab2",
  "key11": "5BKrrvAyZkCit7ym753tGz4Kgmhr7bYJvJudiEqtXThw7ig7yRchxQJ3D7bVscXYRRMjWNXwp9Q5J4tufFEfUGDw",
  "key12": "KShvceXApuNwSBjTz7fRXjUMjgzJNEbn3ZNgXoerzCUyifSHufE6QV9ndcBpUaFGyiJSW2U3Kdc9eg9wU9S88zF",
  "key13": "2443SLK2cy4EzV93Ae2Mz3YKna2tGs8Gk7gXRHDmdno6FYJU3VeBDnCz1LcRXWJaUrVRTYxi6e5HhVbKLEo72XZ7",
  "key14": "2KJVUPSvFAUwvKmmtNCwuDWBbiF2HyNfmSsUMuqkAso9hehgvCp5QAYfk6VjgTviczQxYG7wnEgGHtMPm3JGsKRo",
  "key15": "2MWDLhY4H6U34iWmW2o53VyrgHXNehy1eYncf1uZ8Se8AykdSkYpapdzGKwUb5S277TzFzGdc2Ypw324mRSCLnwy",
  "key16": "63ZKsSqKSjETuM3mYiNFA7T7TMY8BYRtFJyURHrTLsewbbmb49jzcvr9qma3i9At12uSNWXU6LDhEE8tEehwKpfF",
  "key17": "5o7XqWzUKYQohXvgm4FMnCQTZpRhCgkHCWojXpBZAJXmtN2AFuW4V4xr2dpD7UYk7L2xWjehWc5TdXJp6zYJKoNb",
  "key18": "51juWP1t1yL9QkK2qF5jfNZUT58iJqULUnsGHbvYcfrye9T7gjeY5ssp5oVfAMvJzzBdax3oMH4vEJecUrQ6QsVK",
  "key19": "3bYTQPj2FUr4ZhDURtUCxucNphc5cSvP9jvnN6bd2qC9acE4jWxFbdXgFASWcRfacDquYF6UoJgdhv7AjksSbUg2",
  "key20": "4CqepBYweacH1Vpt1J2VLqh283WTnMjLz3uWP86K8JUQ69E3zsUf33V64SX1Hp4ECPSzuqHDK19KAB6NmCLfmv88",
  "key21": "4iS7rKHKehoWcPQwUaYMYd9A6RMuGdsAkWH47eL7PytQ9vW969j3bCEMLai4ZeK3LXHgWg9HmuayFfn8guDbS8TU",
  "key22": "3TACnJp94BHGmEqggNaYsiPbjoAeto3WNUiDU2DpmzDobXWH9dG1GgFK9D3aBQQXATZbks9AoRiRupKmWybXjqKf",
  "key23": "5qcjcko3SDkBTRu7PFVrMEF9QJjX3w3H3HZveWQvMydUZwfVvB8oiyJqRXT9kCfx6osBuQsGM3hQYj3fvXZeE8qr",
  "key24": "kMiNd9cty4hEfWRsyjtFu9MnaNeuzx8Mpfu94fiRWUKPgmYUUyiaAy8Z9YhZJ8P3hLRKzosBUM5UeiG5Ltdrn4D",
  "key25": "4TjEi31LVmEjMt1RBE3gSjb6JcNabfY6yYWd8P4sgetAnvhknUeJsprU4yPfEQiC8xF6Ur9BzU2z79Qoem9JE5No",
  "key26": "KLtqfDZu5UUvFSqtMSAi42M7GcfCSMDBpHj4d62rvf4Vt9cAZc4oeHCGmm2wQzLiamBU4tnAktVbdmFbHUUS7PR",
  "key27": "3UUngbRgQcsYTsEmUGm8ExXof1gNDNs8MGUwFp7wN15Q9bWUDosuQzSjKm9GJpgMNuFWQ9ZXJqjVmtnG5oxM6s6q",
  "key28": "57T34f1ZLHiLa8AvrjiHSxnWbmyjE3nhRmhHv2a9jTzpsYgC9vEfSX2Y7oxASwS6gFSKQUn8hQyS79M2Kv8atxdz"
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
