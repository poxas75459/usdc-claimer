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
    "2usFjsAWfRKixredvg4CdHnb58n6o4aXHLfJFEHiUbzVFnkbPQdmR9Yhim7V5tikfRpr7R31KqzbwiymKkGY9B3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TttRXpEK4gTUh4kc4EpaXUKchPuwvDwVpYccACQuUSo9bbh2eaD4jVq8oZWEAxhRQBZv7yiX6aapd3wyviUS8Cg",
  "key1": "4EXSyf2KNqWu2ZRyJrcX7hiUSJCRivcVJaQ53KzDJJ56dWtgXWNZWmbrfXK2uF5EhSB2aHDaQPDbze5xYyGrvqkG",
  "key2": "5C1yu9V4o7i2cHekH8GQWTiHshgB13JoHFHzbSVDnnTaxCUJEoJqAw5mbPURPee2RA6z3tqFduqJ8KHF9HMfbiju",
  "key3": "ga9bNrpJhdqG97eSe1V5LbwrHqPHiGaYFE5YWurys9hu6Tm7Tw5gwiUTCU89LhtE3DXKC9jWgQKiVj6UJYHejwf",
  "key4": "4dKCShGzuY3A9VM9U959RdUAnZ9fc3cDaf452APaf2B5pqvmUWmzuTQ8Cdq5R3TkrituyWVBXWBnZzWSKN51nXZt",
  "key5": "59SUtQc8fj9ZtxSi14TRcasx75Dij9ZjLEajSzKThrqZJRorMx9UoaR5ezu6erXFPpaxhnDfzrZk9whWRcj56BZN",
  "key6": "3vmh79qwefvmGAa7H4tS5A3eRnCT1c8sdGgzJDJUMxT2VXyMGdVnkqtMRhhLw8tsxzTyFoHVGbniso85DtfA8DGf",
  "key7": "rHsYQ14ErGsF3o12MnkJYwcZ7dyp4B8yqsQVEQkj6jMkwpws4Mbn9eBEYuhhqHSaaFJ9QKXwWu6vbwruMuGqucw",
  "key8": "3Lzi7ADekNSyjopK7M5qqAR6ampzf7tGfrWnzzRAT6j8WRYJB9jeWGv64rnBTqfSPj3Gm69wpfLdpoqTeuq3DNxk",
  "key9": "X6d11C5qg244pJT2gkcAccqzMoJ46d6dTreD21ubPF84UrKe7eSNHf5PpqzvF5roYRAJA2apUVRoBMvwB1EPqJ4",
  "key10": "3jMwiGNaD5BTz8AVtkzUkEMD79GCrWC8L5snTWW7WYfPegrQYzKtTLmxC7C8vA1sVQ2JfM3GWRZYeUqD3bjbjgSC",
  "key11": "beyDMHoGMZ4LHLw47unALA22tk7Auk3hWQX6r49AgDewFkVt1HuxkZcLC5XvTqD2LY1cy98FYRu14pXrqk314Jw",
  "key12": "5TamFGsu1yybsqAzXKE84HiqCzTigV1KZZ7Y8xdwNaCKF2qUkzyn6RNmCF9GyK55X6A53YxJFNjEvURxHhAFDTvM",
  "key13": "3YxCqJecjMRvAPwrvbYeRKRza4VDdXcsHpHAozxy1hzmtDmSnKLzBvyxCYK4dNjjnv6CuHEULA3CQtQshwaBz1zr",
  "key14": "5QyQofUwT32ooGNjwkWf4VZdP145JtxcHLvn7BVveWfbgDztfRLjkujSGBLf3xHUPYkkxdBVmXcTBXvgZUmL5Aji",
  "key15": "5QRahaBChbMxkEtfKfJjZ7fWFUgMcsU5fmVivAPgK4UEXtYKhXMdcYTtpvYnCM4kX3LF4A2Qm6ckwLsCPx1EG2k2",
  "key16": "mVMzHMtv1uyyge4YhsxX8LNpZ6Lk3w4zJ1nqNfsKXsjEMX9bqASEvxTkaYUotZjKmGvwPzfC4mLM8juKawhPowD",
  "key17": "3Qg3MgTYYZLDskyeQTotiR9qUWNJF6mVL8uV4RUAK5dZfL9Fviq4MsiUxv5mdoLWNV534tCoY6jS37pRNiWtvbUf",
  "key18": "LytuezGqH3gKjSWccEuenyCmgjxjsFbYvXmEVQbbVECEJU6ikRy8Wxq4PeeCyfr9GBaoQ2GzAvzPQobRij3j8SR",
  "key19": "2wq5SWhhntc3ZfwckztxFfy1sJwCcnfogvqdxkMdEEG99uZduAPwHYbkbX1FoajXy586UDH6XThk1hmvmwzJkbzX",
  "key20": "2DNMRaZNusJMV8LiuzJiBQaxuBFn3xg7wHC1RzWmTpwDnMboX1FwoLcYdJgbAhfMBCTiAxk2Lk19qh2aDgfikuxQ",
  "key21": "4QPyAKxBm4nwx8Dqyu3re45YgjZyM6YHeGzgPT5o93RKHgkyixN85suqw1nrcCqbziKxAd7Yqx8wr2dsKoU8cQ6U",
  "key22": "4MvCFeNMEJXsNjdySh7U9stViu7U2YjtQUE3v8nQbiBG7usSqNsm9GqN7AMfUeReEUJhiqMbvXMk5Uc4wXkBdK9U",
  "key23": "4AmLwAShQzk7B9dvJ5bLHx172bcKJpXTggBDqCvu1xnYgV4AdNrxzkitVJn4EXTi1RjbNuCb1QwcZNcVKPmCNuZU",
  "key24": "3CUjSDuPS5MgdS6dn9cCLZ68Bc5UKA92EAffzNwuXw318qq18i5iyJeZ2N8MkFcX7nwMkum9omY6c1xHL6vNYjWr",
  "key25": "4G6Nk17U8RtcZbPDiUgGL72T1LfZN6zyiQ9Te9LJF8xDkseiRKSAMEkrxaiLhTFmBjSJGTJ8V8v6uTeD6f5gggR2",
  "key26": "4pZ62sHGUBBQXGaabuJccDydkG55Sz2FCvSuaSYtc4qsn3Qe9eqvuHNJzfwEJq4kigULjwbxFoy91T4NjCLG4QQa",
  "key27": "2AEQggz2gVpYU92196rSEMJyE6hpwoyPTmqH6EdpZW5SAmCMJDoVurSzPf1wUWGGGPxiFMp3UjHJbcFtFkcmP2Mu",
  "key28": "5czGsRVyeWuxbHHrZQMQ1HCvNeeGP6urKWwSsh73USjFhWjavy87cAWyKAucyToERSpS1AkaMwszSYGezhXU5NrJ",
  "key29": "54a2uYzg55MaLe89f2WzzBDJ8f9AoWXPQrTbnn5HRuEHwGrEsW3ZYDAUifHtiXpas9gBC9A6tqw5YGos5yS7Mdg6",
  "key30": "R62Lv3jkLDyXhpdq8qqw7VwvRdfPofwhkbiebnNJTN7ypRk8Cy2bCkjGmcW5JBPZReofgYEQbYLhSMsAUKg6gXY",
  "key31": "QTpBu3TpNzxaRML4VcvbFBN8PUuA9sC2MyZz1dZdcpJQS2G1PMaVtFN8xDeYA3tqKr9MN293kGA82NtEWz8TJ95",
  "key32": "3tU9TaKBhgZQhTcszKu1tawgQUPn8eW7ESxzmxWcEfQJirUw8kqGtQ1LujDA7xAuETeeScK5VqUn77E6MBQDdRB6",
  "key33": "8p6bGzB16eaef8z4dCGHT1fPVHaquB86v3gKBwzKXUoLU6HiW8nLELppgezQ6vDpVi2fRxHeJeDH7N3CV8Ldtkq",
  "key34": "5WNfbcPfxsNCvFH4kPeNt2gSYzphhKu5jFpE2QCZj3MLbfjxGhtT2E5duLLgoNcY44FWWGSJVmCEb8Mn5s3rhrY6",
  "key35": "5CYd74E6VyhaEYZPMPPNUsyKfdWNRbF4L5BL6wGgaQ3LXXn2Y49UUGAC831Rn3zpiJY46KsLzaMFygVM8rtU4qVK",
  "key36": "da6dHQVY6miyQtohHuBguc6aURwcvRX43MGgjmD9RVT2MRLjz7yvew1rhCYrN2v6L7Y2275dQQp3YbZC9KRJ9h2",
  "key37": "2zKPrq31CMiBThGXjDvkMiG7MeiHuiB4bhsowxXWfiiLyV5s1XNPi7wies7ATzZ54zNLgPQfhR8V62E85zSh7gHs",
  "key38": "5Ss7h2L4xxHpEyVycfDno51DEgcNsmVbTTkrbh4XuEWvdjowaNQ9QvhdrnBjeJcX98XJpVDyRmNRxt7ttwsQQKS",
  "key39": "62TrRmT2hkKTDzLGw7HGx6ukiNvMsHsSaQ3WjprzfJFKqJEdqnbfYQk17pgE1MJp8hgEgW389p28s1gAaNZ9tpNw",
  "key40": "TTMv6HogktHsXftmVJEyHM4dLJGJfMLTcvKZr9BV8QADh6y9tffwDUbHcd8f4k2rJAPNsH2CU77AfBncPtQZN5J",
  "key41": "2UXrRavNcSuYroUBRdp2kL3DMPXUEsLergEp69ktU4H2AG96JM2H4Prb7hyKBincrocLvDNDyegiyePvvU7eQowQ",
  "key42": "ZChXZmapAdD4fXcTHY2LMEDPwnFJySNfoatGtKpnGYJC5jpdHZVifDJYGvzN97PPGtAZH3tR14ztNTpog2ZUZGU",
  "key43": "5PTPbM2NKA8XcUXu8VJAtweSraq3C5m1jrTLPARZhzoTJdB5wcqWzmFtkLamKid6pdFhyVaWPNqo3dP2GR3sJKuz"
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
