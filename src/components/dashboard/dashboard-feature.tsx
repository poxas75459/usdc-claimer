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
    "5b3L9CK4puJj5AyjE7ujsahHXGSrPjrNRTLuKLWGBG6k3TyAaZSr7ECmcGJ4eK9LtqR6ymFBpAK4TXUFvdNNiFD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3BfU5u1rmtDL41taVK9aCH7vsJLbjvRqGrsGc38TrwNyhwaSkxVC6sxmiewcsGa1yM5HaLS63Sfva5EAWyp7jC",
  "key1": "tViQveh5aK4iFrJAzveB8iZQnVhYLYqsazfrabdpr2E5BjbtbJ85WVZu8426AjiS1zk96UaW5KHfr7AVEzto6yp",
  "key2": "hvesqhzUfhee4d5j5Ysoochg3QZwZi6Jg7iNhca2LveZQUtJSXSsMDdysB7frM3gykzSgALvgojmeGkc8hqFoaU",
  "key3": "5fizHy3xs7kpGc9KXwNpp4N9fvarHLKH746gW8xLGUpzeGkChCM6uDSHTDewYGTypFWw7N1wazJiE45L4Q3KEa9n",
  "key4": "5vqrAXfmLsXXKzigA64c74aGP6rVheG3TxeJMRrrM6X7TaDHtjm5SEp8RD2yfMDeUhkA5epetm25mh4y43pWGrR5",
  "key5": "4qqoPkfsxLymckTpxUYgVrHchbvnS8gs461r61yDmTCtvwthPx6fkiCcPLE61imwDUXB8rfN8NMyfh99sv1k2rZG",
  "key6": "5d7VbohxTwNc4skSK9xZ1HpMa9yBMJs1ysGsDLotvrA3VAr4BTXUDuMRFaPJFCZb3FS9yUD4knjNdgCZshQDiJyo",
  "key7": "512SBzVeXVtaSpPCQvuTAmu3HfnbLqDpKBLkk9Yz7CrY4muXVpgfEL9EcyVaTBVw91sncYT3ZM3rc5cALfteSXZP",
  "key8": "4ZndfhyoSpUNP98cqpGPjbj8r1iGvwA524hY7dNyN9fuZbxZp8yeaje1jx6BK7fRJqYeDUvkCBXPCVXi6kQ44yDE",
  "key9": "j7DKaSBdinoPY5uRDu3Vreb1NHQ6Qo1noJXZ1e6aYe8c5NNsjq35phNUm5WoKmPpmw7aguCeQYV94FJbbWP9hvo",
  "key10": "3j7MpXosRHRDUbR51DXHhoFfnSSpXFoQwPP4jh4aKwyUWFFaaCJKyZtcLp4ocJ5A9yfqkCMuTVWpF3Mq9nHDo5ms",
  "key11": "2t3ceTbNG2HRdtVsMc45Q9Qo7333FAHafvntTtwnayLFyvLJXiBLrL9ZnGZFbgx8eWvBoGybmnCVnqkfNUHznNo4",
  "key12": "4kzFMS8fG3TLESqqEiwWfsLfLrnHVsSf9b4Lbn57e3kiq1gJx7ahWHjnuCsTPb9gjNJM96Bdks34FSBTrjf8Eo5K",
  "key13": "4d6EFvP5terXugQ6L2xAeN3Vi5vti1Ed6RMwnVzA737mmjznkHLXiCQNDcyAybWPMYrHcgY1bA65zvPrWQ93e1Wj",
  "key14": "5TcAEq6YsK8xdCYBg7ygGMhhxHSxeNAzLEKh8wbpkBeqovqX5buPcH9PqoppGDhU1PasqXdrQVswjjEWCZyLTrcB",
  "key15": "4ZwTdBi5qu2QNRbdBCinu6JKDLqC5dLjGeGNWQnW9ap2aubmJeiDQkRrZ8qjWLQg1GJngDmjUYNLCnaGnLcg3pgt",
  "key16": "4RpgFT1jQifj6RadKPjah3CgGfVjMoF36A55CFMh5dgrcai2pANNNFhFLXUNDoLkZE2NQs9THt9sexkwaK7eNAya",
  "key17": "345tbt7Eu3cPqSYzTVxmxPHcdjBLQoTAEtM5gFexcWttijCeNqqFavr5gTSGkV4cKbs3piAamseV33p8RTZfbxvg",
  "key18": "5iyMf4ktCV4X5hA7dpK2xsuE3AaaNbah5HehSF9JVq8MNKbHxvFnhPRHVWuLMg3JsBGoJXwjGG92NjiZJWA5Lxup",
  "key19": "5f4LyYubnScmFwHZ1vCyvv4UuGJe5QJ3afN2cs58Z7mpvjMdFc8deHKQNEkb6EoC4R8sABR9muCMWtiZP36TvajK",
  "key20": "3RE1YYVtAeFYvuTdeQifxMoEcXkQstFYTBKzxNhDs8k1YFnWpVoG9a6mLPCSPvLPjLz9USdKig8UN1U7RgKbRdtH",
  "key21": "5YqMr9cEyjSKmWyvxk6rLmQKzWKLrrw318v1SpugHgDPgSM92tfnbQ5vSk8oiWDamq5JYVTevZNtgNC5gVigJ753",
  "key22": "5ZG7BusMd3PumaYvjv9aZdCYc3p3axLyrPTgzJ417zS6UbEtkGeSHZQ4d6zQrNAjj8Mv4Fi6Nr9GMnFQB4AHTarZ",
  "key23": "4N3FWnLMWN5smkSAzQmTjju4vQkGagYnuW7om7BUaPP7KzpTSk9eMmtr2MZ3iWB5PvNtmN72dm8PS3PC5ih1kzdD",
  "key24": "2zviLfBBRsesBxNKwLcL8DkhjGkd3eLqk2p8V3iCFXjAnADjFKz5hEo4GfCy7N9ZQ4cd3YUrYswsgYYJnPq7btqE",
  "key25": "4Y6ATZMQpuQmkdSX4L2PH1BVY2Z6XoRrmuLgdFfZ22GBS3juiqQ8zPHP7n8HKX3c1RXirXx5bkbVES3PK8dGy5Ae",
  "key26": "2s76n5UnwdhSZxPBTcmo36HU5RmvTQT1yWLMgo7Wx5Caw5pQEekDjt8HwcrRscySAp9PG177GiNgnXugvp7zyPcX",
  "key27": "4vuWU3zxGpEY22jvBqQ9AVS2Vg5vF64BuGi4TaZraYnZjCGyonfUU2AyXXicoVQYjXFqjFUWHrWtydCiSZ5ipW9m",
  "key28": "wmRwjW966CDNuCqnKt6QUcy1AHtV5vBTRDHSWNAGSSEV4gqv5DepW4MMToDn38kxEPahVQVVXbs6gPbVHRA9qtE",
  "key29": "2EY8VdXrUKJM1m7purTyWBHpP1y9uUbeccgWpF4f6NooM6XKjuSnCvue2DE9Gm78ZYMWBUTuLics8J8Saamv6HmF",
  "key30": "2c23iPqryCnmkNwz9aoYheJ8FP6toXXmEy3kpRTZHvoRjmw6eNMXGJ1DGT2Jjy4WmF2nSxPCXqqBse5oBPaSRtfW",
  "key31": "3b1ubN9n6f3ZHAUXhxETdbqNZdpgRa3XzrDSYqrPqLQiGHccRe9RDrpXybnuzpZFKS7bHpWM1tgHM48XiMj8xVom",
  "key32": "3NAUDisJDzgBNfyJjGqnneisDKmx3tAv1H66JvNfYCr6VH8GGRnYFmVgqnJqXhGLyfQvcGqaVPLefNJmNQg6k4rh",
  "key33": "2apY9R9nQv1iVAfRARjHCSqxKPAvRfjZhtQCKMdwzJtUFd59ZrN4NWhg2r6z5jDtFww7gUWbRqRixRKqdJAygwDh",
  "key34": "5aRVMipdcX2tk1UV6TBoZGH8NRdw3LqfwkhZHjSQhXXHzhyvja3dnyLdN7mno1wCiZPoezrsfwRb91hFNegzSjZN",
  "key35": "aBo6XTJ3MaKVQvGbrR9P6Xhr4h14V82Pbn2ytzXTpMAhLoWdmFXUxiTCk5Mg4Zrk6UcMxWGh3XrDZSV1nZFvgqi",
  "key36": "5DBsYVdnhKNZNu9o1UC7P41Abv2R7hKd99j273igZ2TTKXJ7KSbybNV6sfwnc25x3cyLf9P83R3vpeN78cHkFQet",
  "key37": "vvYU83fTxsXJu6G2L1RRBDpQU9vpJa6m9c5s8M3DUAjSCVSgKv5iikPVegf5DKenJX2nuYruwCcKzfueUxBWmQ4",
  "key38": "3Lcq16Wa8UEZ8NzFGQNfXEpmAj2cHGd989k7Vv5iQTeiwoCT6kFUJJDoyfQZeNKT3v4JFBCUGL1T7oyYkJxX5xaT",
  "key39": "2UQjWvuBezb7NdpfUu89p2RerTWGn3FodM5RBcootd63KtfFmPkFQYM3DHPnPRCgFYeRjVLBqvvHi73J3otgCr2j",
  "key40": "gyhwPbenc9511fNoBUgspnNTdvX9NXBz3PigrA8m4BTC7QHbSWu55YejHsYivJ3nfedcHF2ZRQH7U6WBga2XhoQ",
  "key41": "3jF5Xwt2sxghctKvVgBmCyd4387RZbYuu2ehuV6kfnCGaWuiJpWmfQFciZ5AtS9n8axyenMQf1QMG4dfXAg1cri9",
  "key42": "5tLZmYnEX4H2uSU6m8DGuY3VvHt8pAZi3iXzbwguzZFbHSvdVh6BuJ1Sra5ZH7pgBnpcEAPTqNU1hnDZvEQjCguA",
  "key43": "KJCfxiD9Eu5oSj9bsi44hbE9eB9Be6jrurdypnD9vbhjJ89QZZHVxUoEX2RcQ3Yu2mhXnL952ZTrii9gNYcQBr4"
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
