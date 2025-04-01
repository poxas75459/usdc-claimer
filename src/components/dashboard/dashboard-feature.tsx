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
    "XGYevHbNdzZ5ht2cS9bGSPZRovx3rPdKaG2dMvB7jm9KQGFqwrA9i5eiXvfadPzDHu8HPXcvdD9qcD5KHU4HwqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzphY4oCNKMMBkkBqKZLL5pWtB8UeHKRAyghfCitjA1A3o4Asqf2cy2Yrs1aBKvrGDHEqSzygGGVBuBY8vNmqHv",
  "key1": "3bCno4hdtvX7E6kcFtNRwaH2gWK5QwiwvBsPnsD8YTJeQBw1WviR3thm5Dwj2meXQB2NNFUgXvNV3zdbM4qvSE8C",
  "key2": "55an6Yn38Sf2eyswHw71ybfEzTgYSQTcjQoRtjCgwMnYtN4KAYDf6sV9ZeE3QKvcg4mwfLz7HQMZszTwBpn4DGb6",
  "key3": "2pNbp6pqR2AFpHSbR4yu2qU8SLvTES9bKTuFFKHxyYn1xzyHXPoL7opfRZjyBL48FUJW4RZEXJ8w1MmXB7wRe625",
  "key4": "61V87u7GNXx9wKWQbV83CBraneyrLRWjnCNv45TbyGc52vr272Ue7kqjaGQz5bQDicEFAA1fsowFhawxtLKyhaFW",
  "key5": "4ZfDMiPgLLxMCR7KgmmeUtsoVR1RZegfmDb1Z1839a1V1PthPPJ6NuJFzigMnD5TtW1AoNXjA8HpF8ZXNaPHa6YP",
  "key6": "2rg6My6c7AyF8jmoBpcqjBQVF57btUDqEeD2DQogrqw3S2ybb1nrdgAPiStxA8HjKF7NEULEGUSHYWZDC2DZw6cC",
  "key7": "4xuBg2QsovYcF33fRBj4J5KXjnww36SM16BioDKHwfMjFicjRJ6qSKSfDrJwtcidjYBe8QpPUHbNkM5iDzv6UPm9",
  "key8": "25pR2RBEEq4s9iB51EQ1Miedoy1xNW3oqMWSqgxt4xE1d92KM55U6rg2TcAg1bFwe9ayNy2jEgEC9cw5cwXwAhfE",
  "key9": "32aH27e2mMWSwd7TLvH8zLEUjYASEHgPAXd26rfeW1skm4K9VXqpPQjP77gjGkHgeXN6jNNZ2CMurGkc2Keb5z6R",
  "key10": "4eQ1m4kHXuWUDchYHMqSRk79XTpTfLBxaeJGE7ur7BG76A74Np83SRhDcFoEPEsBsqCM8Y9oUXdUXhuvEnTbjFU",
  "key11": "esdem8BcqThSJoEV9VT5Cbft4KwDksRjRgW3ZboAuT3o9mczm1UHaQHu2zZdaHCAmJfshfNn3Ek9JoisejyCUfx",
  "key12": "58E6VXh2qurbEStowKto3rcSotEkzoBoTZFZuwWHqtMTVECtFNAiQJDyXcpqCqJKjZUkDmYxKkgRxGyFXBK6qM9H",
  "key13": "iUXh6AJ4pjTDhGyLtKeGiiGdL1mTCDm6aT56yTJ1sCH8fQkGMHihBUtDuNRrYD13PxQisWXpbS328DPEX7hJTY6",
  "key14": "o3NfjZs5Fq9M3mQCmeZVJ5nLFwtR7f4Q3qRLsrJBjzAXS4E4yYrWb9aJRLHk4DGrtbxLFfQJPKs6iKgNx3tizCZ",
  "key15": "5aAtogTvYsd5uziyni5ivwgxd7B3DgVtjAS9h3tMV7iVQw4Sw6yo14jToDjvq62tFiGWu2gqQMBf7uAjcTYea2KY",
  "key16": "jFPz8dp3aeRkEvZQ4oHpEVJtN5ftUiUkpHRR2C48yJxyb6EYhBwNwj8PqFP8Ru7FmQkzJScXsYrx8JRT7aXb82z",
  "key17": "5pyNhKPYevQSUjPfTK21itbX5QwgGiSarpwxJE4fWVBKawPExiP3zDn6GvDgtpykbsC49Nsrppiuy2F8sfLy4wNS",
  "key18": "2wDokqeL6GW56MKfYBuq48hzLmyYz2PJ9JcZM8dmpnpHP5nP3mvMSK5VByCxdnvwnc3KkowYnpnDbfp8oegCxrj5",
  "key19": "3kzJZb4W97gqUZ24Y4yrjqHZcBLUg4YYHUjbiGSCnhKGWaEmLG7C1h9jNTwcQpPKj4WV5S96ToZxx5dyjcx53Ref",
  "key20": "5kCYnRqJPEaYwkrDobBsMcpRs57VEeFxNSovdYEGtz67KYbRKrz6pngD4dbJojVABSePbVgpR4EgcAun18gru8Hv",
  "key21": "41QngiUY5vg7Fb2U3BkQnqdtag7ci9Bx9xRb2dKHWT5aL6gsng5jmT5vQxc4uQPBmLhrZDQPUn2KB5GYSgunYXyu",
  "key22": "2afSCEEVd3gNEZqJUXd4gAFdv8Mgp7zYTtddpfnBqGt5KAkVUvw71GFKxYGgzN8ZaxBqS2DsZdBUG8GwHpfP3kbY",
  "key23": "LywPJjCme9gfdRX69Ccm6Lnti1kQD5jwsNZdVNfLyx2YkipAjP19fv54Ki27kxeH8Q9Eessd9tquQR2DLbC9V9p",
  "key24": "3pubQTBjjdNjKV7b2qvQnspXGmXDtZpmFLS2NmWSmpQM6JTyQGYjUWrCGmvu1fCfv4wZc8K6TMjxpyyWGKTi85Ht",
  "key25": "UfcvYtiRU99SZzHBJoeBB3kzVRKR1sC1N4Jqb74UyP8idoYCzJpeyvJb3P2ZKo9ezEedEgqaKTD9rBrdrXAU1f6",
  "key26": "5Dwq3YEmEDxBXriLPVt4sivWuEpkgRLJmJVEw2cogVkvHSYXDE52GLgYk88bMyFTxzr88vnD8NtQAVJEk4J4feWC",
  "key27": "2yWXfae9iERYVh6Hn6gTdQYp7cVufTAJBSNsAmXua5yLKcf3TGHAo4X4dpzTjtYZdxeGkp9KjkUBiW9wc84SCE2E"
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
