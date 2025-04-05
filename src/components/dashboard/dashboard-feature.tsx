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
    "XfrBUE36rmpi9owxhT71km2zbjPyT2UTCZQF3AQ5pgSwmxjsQf9ntmyqxMCnYAj1sjhxVPLMYjGKzxsd5WZKKbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yt7uDuGuj5hnUGDmk34Nyg6LV4Ua2qL3GSAWEHkdKmaXkdrBpDdHYsunJr69LrvgBRHkDyydMgzNFRfKMH1Db3n",
  "key1": "4hFH6L3AAg7sQwFsd4T5WMaXhmQFHjkHvByCREzJX3zYXybpd83YXzWvevVNMj1kK2MUwKZsyk6f4eBGUJqT55Rg",
  "key2": "5iSiZ17XLbceHx5x8TnQrENDVCLtg7Q1a7UBChh1pEG6fdbMCRs762tkdPgBnXC3wsMt6jDDkAsgewWMEFKy868j",
  "key3": "2waYBGPaBaMyhpiEBjQSoV66U4uWmZooDFRaQv4yCL2n1cfkCxduZ171K2Dbrthij9SRxxdGVdH7WTgpCQWK3GC4",
  "key4": "3zrTLagRNGZxcSYV9XNMWMPv6BxLgX2vJDspyCe4yhxc1fs5etZJ9UbVR69eZ3gb5HyiHwkHiB1LSy8c8FzGChfz",
  "key5": "5y5xKQL294DwY3xvYAPDyChQqpvK8NdQSiEBaxGTPezPp74zmjTeBjciXVgZXiFYrfoeDm9XY9d5w2RdN8umUiFz",
  "key6": "3SnUXtCiFUmBAUVnKwcyqUnGT68nLJstay8Yo3WZCyPUHtPRFXFXSF41ZmAVr1Bu6xDqXf4i5AUvw7QK4vsyZUCf",
  "key7": "47kW7yBsySWELMgajfSQXXCwGZsBiLpFAwUCSTV5YBrEwEcdhgh3uGopR35NjymxNVpk3RAkJepP8YMejfbhaNHm",
  "key8": "3QXZnmNTaGc2cvx9rbauvBeaFcTM8rUKdc4SBLRsNgwGEknLvAqJRrcnjmCj4sb41ASifzWLQLj5vw7L8bgtxNjQ",
  "key9": "4hhjNER3qJUXpAxqiZpn9zXs9Zsm7pfynYF3aRVmmUW8FxLgNhyQr5DJKN8zatrPbuqczs7d4J9Juw8WaFj1hvFZ",
  "key10": "53sTrcmR8JEPPbFyc7uJpJWv2giUDdG5qjUYCuWRPTdYvW6MDXYWrXgFWQuJxZ8HcsoXcAKR4ARhLz4a8FavEaDw",
  "key11": "5f1ivEUuMqYq7VhRGQKjdCdJDCQ9LVfjvbbeNUmvaq8QirGXeXrtwubKLvYuFAXf9Zq8KAZAQUKChYAsGhqV5pmv",
  "key12": "2ypsk8AnuVsCTnU7jc1j4gVwVGnF4zMNyDDGADcEE1HDTBfQ3yPR79zX5EDz3kuxckzuSFDJkJuVtm4mTDXGFupC",
  "key13": "55VFQSXXgHBvaa5ZEw9xWHYcrkr7ajfWa2m6j48SnatkZuCFAsvsvznkFpybWMWFMv2rTirrEb6bBDGK1L4Mr6wQ",
  "key14": "25R3vhzWEjzk7Gwx73YnyPqDNynUSh7GwqKxHCyY3TiHrHRW1gVLRqdhA7TKTryejuwyoQy9pnbdoFXEBDNKzhcs",
  "key15": "29YcYyrwzi6qo5uMfBmFbwtkuMmFkgyFKkQfZTyEfcdzM5CK1VyipQRN8q89dWF833ejvWUhzsoL2PoXeGwVCLWj",
  "key16": "3p3aLJKgBiKo5wm6mQzGSgnGWG6UAHu7MpYzcYGtvR4jPPVKiTAV7BG2pjV49jd3b7NsJu365fxa3TeRgEJDMF99",
  "key17": "58m8HKFFH6MJNLcQy1uSNRKNhAmbxnbRvJtnrBmhoWzEo8ww8FENv4mcRwdA7CqiVpwwa9g1x2dQVY9NdSAY8yDa",
  "key18": "4vWTy8Yg5G8zhS6NEbprVwxYHnLZyiWMTBLpNF5iKBfD8pLthQyv26oNqcgevUpPAcz692GTS19h2M5mc47E7B68",
  "key19": "2ic3FTBcic2JW1BfZZurXB9nNTFBwTTytCFnKjxTnEy3s4GHGh2infF5BjGnW1CY3No373jcWhxPjHrEj3No6Ywm",
  "key20": "2TfkTMKLGALSBsb9oQhie1wNMf9cMUdexwWKishoM3YvF4mNGvLdLmQtEv2H9kfaoCv1tmAmkLNWGvH1XegfkpXq",
  "key21": "5rezAZWtNM8yRNHQ6qRTkbjJujhhbJpmxMnbnSnncdQ7toAuQf683XVXs6keJQ8z2jv6YU3Y8ak3e1LKNDPmbigY",
  "key22": "3CsHtJfU8RjcqJTLXvnUvahUzEcq2XVEm5yT1ehrc4W5WXkFetBntbWhK56gVgJrScWL3oZMqceKLdZPMtQxueg",
  "key23": "64Syx7yRuzz1zeE1zCD1B2xX5GJzWjJXUZgRKPsJeUUKpFxynepXWPGXisEfB4gX84snKnU4ngmLWCgL4BpfGjSh",
  "key24": "ywmb9epqrNHMhemfrYi83bRvSVW2Avz9HfcjrS7UN4PZYDyFUv7ujcUjyKwybwrLJKo1od46gF5BkgXY6Pwgn9Y",
  "key25": "Gjt9u9xbGZ91veuVYZpjJ5mXGTBbubLWfhXZjCdJ9LSJ19vkNkpWe7vfajaCmLybFEUWKf7ziE5PE7gj7cDVLm3",
  "key26": "D4ZRvvMNGzxDT77r2vfRcEpxTLtHPWVceZpWDLdiFXxGKyGzJRv4Jsi2EjMoTgss7eAAALGFEEmxckwMMozp8U7",
  "key27": "2F12VvaNaaQnuP3sh6MpmnWSMj1qmCe1DyPzTrGbwwe2extSm2BebdrFSo8CA5pTyJzhaiuivrUn5ADn8fbgLoey",
  "key28": "gHUD1uQRNXD26d29tbxxrUBfyHZ3AnfdL3ZgaRjDa5GgpdLRsxmsXgRyva4TruaeZnN8Z9YVGZKAMPdEytcbACM",
  "key29": "4cTjZpMiPEW6myiDZdVcTpqtbQnbmShHpqBbnieY2PtBATh58q643GFAngYdvFyQAbW9i1woztU4g1we4n6MMNQE",
  "key30": "7E7Bodi7xasoKgov8xRj1mXVqCTf6MQyGS6hY4HPZkVdzqpzJwPbyhVfvGQwDUDbM1VdRNPGMh1hrnwXru1PWGf",
  "key31": "3sKph9fP7dQ7jt3iQ45fD1j4SVVJMjALJ2fZeQcsQcdsedFNbWERyd4D4Ga4CrRNdvdprYLLWS6VomgBsaCRF5y7",
  "key32": "5sEnZyyCrKbgdu55NVM8rb85LBNuVrHQpDFH9T2PfBnMwFKfdfaGUQWdjyafkwnnyiz4F1SJuVbq7mZ1kVBBU5Cm",
  "key33": "48x73uM1nPhR5mJPu5UKBiT96AHV1L2Lbp9j1NugwnSbmMGJFpNVbcqD1i4ZFzFM1xazyE85k76xfjkB9GeEeEcL",
  "key34": "4ANjXeWqZuZw8iVrQxEHesBaqnWDduXjEYuns8oHcf4y2EMgfm7QM7To4CBXfhnHgCFgfthw4xU9q3T2GiQnHdT",
  "key35": "5dgTHetT2uSpYDCzwMFNnbRWuuGPgvZMmx1EdeNemHABZsp6omV8sxW2rbbrVGbPjvwWGyYTUbSB836pHu9ZrFhQ"
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
