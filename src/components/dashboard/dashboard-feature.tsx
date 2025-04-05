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
    "4qJuJEohVnTaR4WT9PD9m7PQrFvtTMWCyAhxivA7WkYJSbgmiLjP3oghzp4GAbiYsrrWp45myq8TnWMYxwxeEHzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WLsQdwFSvr1875MVUjTfaN3P1nFZ8zEpbAK8KeWgcuDb7W2h2FH4GUYyUS6v3dpLfGuhXKqoZYwEGWFLVDLNSY",
  "key1": "2u66jLKN9jjCS5Fpzsnzxv13MiyBJN5zKFucWwNqe1kzfXQzjVES7xxwhQtXGBgVuQvDwnTEZZcdHFkeeWTL67PV",
  "key2": "AUyDRchzQgSNn1Km6KWhx6YLRpbuvZGkvTVwiGHKa38xgX2toaj2w4zmZDzn6F8XmiUHktYPcEmZfvXbVMFKsB4",
  "key3": "2EuLW5SEKsUZLkjoVLdPQQMvmi4R2mQkvvgfA71Ta2Wqaz7hMhWTsoJTQrN9oqJN5LuiT8haQtgqm2U8W9RWvqan",
  "key4": "51TcMnDKhfr4RJWxnao7zmVofjmBFWQbykDMUKVMbm7F9vmcLEmmw8Qxdz5v8E4SfBxSW1mmHYxoFp2B63Cbus5V",
  "key5": "5iuKLm45rMBnxmzkz1b32o3VLeatyPT9rMjBX4imviD37PAFH7qUfXYXKiurKrh56jDYX2AmV4quJ77uRZouRJCa",
  "key6": "54xTENPp4dZq164pjiDg3pYwEJBBND1haY5rAiUD8tpm54izWB3csUwWm74CmMAbJQkEgmLgo9V55B1dgZx3KpQG",
  "key7": "ViVmBESiERMek4ezcDW488DVeeJGsDayN5d23U8dJKYANENkUnpCYU5hmsp9cjGLup1fPDHMQpgmJNP2pJhaTbY",
  "key8": "CAxSVHpsiZDhGaLf2e5Euh2vcCpvsJvwmRfGSeSxrvnMUowjouaRvJxNgkPXm2m1xMjXCsjqfZSoG2RuKA8R4oF",
  "key9": "5rcEnDJfPLZwkLHRAX58UCa28iVnJJDXXSxpHTn7ondK5cbEmv79XXvCJqzzyzcdNcbt8Fh82DFUibpAKHzHAKNi",
  "key10": "4HrXmAx3WJxC8PEeVqVXt4evW2diSqTCGLxu3LDk9DJ2fYcXKBNM1fjuTadYmif68UcEUh3NZRh29Qm3GM1koASQ",
  "key11": "XahzudhZbrkP5ypiwB2dsPhFBh6n8R7td8o3B4vKZ8sHLp6YZnxnJXRq3D4XQMnt898iA1DnKEuBPa6Fmwy7cvq",
  "key12": "iXNxoVysjPzinUEvM1xnSDan1W1Eejk3e6U4UhhMj7H7Fo2fia31hi6hk8KVPvQq5tW72Tr2JCpoxMnqE7LqAkE",
  "key13": "3VywhUa7Hn9LbiHvGwHpLUKofAnwGYceNUzFZfkjyoJUCZWtqKfdnMutmF3RU63Dbg5NCZRU9E6ZWMDzfq8kiRML",
  "key14": "2CWXy4dxfZsoa3xfHAjxFJbhDyD6xg1xm5iyC4gD3WmmqEQHjRHN3Q3RNJa3DQTNBHsYjPcB3DiH5nHT8fYmPtJ4",
  "key15": "4as8vQA5pK6MSXbweaPHL49LAQU82uz26jGpzoFZFGhdBynwPB322A7LCdfYFSzWCGANqbMupDH4MNXWNQBckmSn",
  "key16": "4etZuSQA45bDD8aeDaP6SAem7StXXDkK5J8HLxeBpNZHudqbQMjGeP3sAbXEqeHbjkaovVoskKA8b2Jnwq68pdqk",
  "key17": "3mgjwqdcTqPCBKTT5FLPEsuD2oULfQwqP4E8jNYJaALygYT9XbkzEfYCQS6qXMMk9D22rYft1bgxNyQRXMM6Lnti",
  "key18": "476Ph9X3ZtHHUfkGbqQhNefRyg9KntjxPg5h2n4DDU3dZVZXGUkD53x18ZUC3gV3SSQurH9iwQjccFBu712nj1ML",
  "key19": "4Dsr3jucCX13BznJ4b5PinBGZCqr58QNcRuH2V9cCvvdxtNKH4pbJD8rDSj7eDbnEDDpuJaLmqAkUmawnoHet1MJ",
  "key20": "4peWdTydtwppQ2JMoHR6Kgut3bd3sQ1zRrXmQaQJ7KCsXZqco9dGT19cQWCdxJtf2Y3ZZ1K19dR6gpuk1ovY2tXR",
  "key21": "5qonk7irpgUGw3dWzP5eeMQCN2UDamktMAJGwqWnaqAy9T8omfw7u9V8CG1URwxgWzsvXvVwfZuQaVY2SD6XXJV2",
  "key22": "4usm5XdKXggmgKz13VPH2XigKPuNE96zraB1NxAv2ARV3EriKT4a2LyhYYFk8zMHzTB4nK8UEzxX87ZijsqTAk95",
  "key23": "59fXqjE1sXtkfJvF1EkHizEZgMzxKEySvmo16ZUY9EK2qkHDHBWDR9ZTLn9rHrxNwpz5RDWfNn1prpSv84jCsMjH",
  "key24": "8ayVmuiXXKkGBax4wD6i2EutZmB9Bv7Z1wxdn1gmVkFJ2LKgniRkPVjLwiZFt3DCLWbCbhm61ApLRr7xiY3o72i",
  "key25": "3MkpTwZ7UGmdAE1R9DuhMXiUeQAWStBTNtULw3aCSFF87uxdNo2nRgVnTgxxiUzkfo7xAMrXV8Q175y9g6W1S878",
  "key26": "2xV7qhdmU1oKkMm8KrqLyhX8L9NfYECJyVDKtVCBWGXB2gjdNcFKfAc8sL8xqKSgU6CdR2obxCosaXpUw8Qd7juo",
  "key27": "58mR6oR8mTxLdTEr9yAFxzpviejSTT7mi9V3spaL3BUeYrRkvSjh7sjBkhHrfHA5BddXWu2zP3dj51YN1vcnKvai",
  "key28": "2Joo9F4yVuTHcmVRpkuTmSp7D18FWh1sSzVDGRG6qQkXTSGURTpiKbS8RaJ91ymP63Z8RfAANudXfxdb273yesSa",
  "key29": "4VZGyrsYcrPMLtnfwdJrFrJhHR5tYRBwJycuR6PGWhuc2bCLUQ6PqcW4HbhHJbaRUKFfZ3yPwU7rxJ4dv5aCVuHG",
  "key30": "5qoMo8HPPciFvCWzsYNsEgiEHvmhyhoq6eyUYT11a7AkLZ4b1AD14MRLVEG6wcYXWZDqiJTF3YbJ2zHfMgpc62Wn",
  "key31": "5MMuc9Pt7bZwNMRawphYSho4jnDdaajU51GxR9nv2sQbkcz7adzXyaTr4KZbZKMSSSGpfeYaeMPZV1Q7qve7Efft",
  "key32": "42MwFLXLziM7Tjbgs284hprniCVCzEdJCRrZunCjEj6CmwQjHHgjb2C1eaH1yk6LkRNUf3GdzxtMaJAPnFf6UrRt",
  "key33": "3vuvWesznqwrTdexMJEj88ABPtWCNRo8fVeduYsvCUHPhS13t6f4TQXHrG8oQjjW7n85jX5U8Qyd8qSxB6eqsZWD",
  "key34": "5o3JcJmi8DjXA6RiyqGAdxAwGifPPTSht8QvUFz57NW9LzwtdTV9XNjqkeBDD2p7QryR79KYf8x7Q9PovJyGRQJx",
  "key35": "64sE9svYejnCh42mGCgzmfjTDtmpmNJkpxEh26umbowoNxHdeS3BUqKzWnLd8DW9oBZ6geXQE8bdT7rKXud4FoS3",
  "key36": "q5MvjKYwPmVTjt3BY7RNLP5AUpvqfgcKZYpdChLVzN7aNrWufVxecceunMcqJtyfAsFZzQc3eGRTxhbqRxBDdmb",
  "key37": "3g5YuySXZacbGWaaPd5ecvxBffHgmyrmBHXBztG5TJyJCXdMs2gspvHRqZ6qaX4ThTv7xYZonMjCkKijcCUsjPtq",
  "key38": "4y5QE4DWWJAm1asWadvBtib31YjWZCp8BksXtqCjouxJcVewvAhUHiHz13EHNe5brBBUUDGFzVkAJqZdyLk5sxHT",
  "key39": "5LtH2ACHS5LkbRnKk8stBW1LY5KPsJJHeVATuDQ6yFZDE53hPu2yMnQBqyHKV8BjEyuBFBkdc5ar78LGtQQQq8We",
  "key40": "fWYAbfx5HETYVVSX25rMorvFcgf5AsBHNVFkwSiMeTdpEjxf7JXJ9hgDgrhbV3baYfPxXF111iy3JnwQDXqPZNh",
  "key41": "5mzudPKKdC4gMWLh9yNMrgU5kqp9S36U7CNfrrgFoJ36ZWVP1rr1WhiGyms7UxsyMafXgtpxFzjNJv6JLA8GDN39",
  "key42": "2V2cipsDfkoFchGuGERrD9fsa2xsLNuY7ghKEKaZ95udiCXVdSUqaifF3TPDxeeAjuxsRFWnpMwDeSy1HNbC31Pd",
  "key43": "2NcE1SnUqkcCRGvMsByFqC35SLV7R7prDNiek7PFetA6ieuyFAhBWKTGHH6SC9XvftnWaBDBzrhyeDxvEFu1WRsq",
  "key44": "2J2jNyEtUJPisuFggwgvJxL4hDhNN8YDfZpbqsDpFLP4o5esj72fdZDST3adw7WBRLiRGChjtFkDtjWCPU8jzvtd"
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
