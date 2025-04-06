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
    "4gHJxaztRvT2i7dxSpFyBeBdLaGoojEDYzZuEC5unwfEaCQJqchUfSHs41Gd3DeLfAowbQh2SKb4zo72A1naGPdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F1EZikjZ3RjD4Qoyc1R9euWARw6hZ5M4LDK8sPWwfkuxu7tEx13wXHmx3eze4z7rcvbqmyjisiiCvkwnywmmhsU",
  "key1": "47GdT8gJE1nmbvFxrg7kQ5LZhVvx4M6HWD3RhWiehGAeYkQYUwoHQwA8CRUJhnytErqoXjmzJMuXWyi6eQyPJ6uZ",
  "key2": "5ExfxjPfamc7Qk43WH3wgDQ1os9bRhxPtKU23SEnuSMQrCFJRpzarA75BHC7LiELtuG7iHnH4Jj428CNysu18AYV",
  "key3": "2xtVYtioinnjokeqRWR1eQgnuoHjew3VKx5SWszYkCjajaot5U29AMKqr1xjBSf2DoxKP64tZzGS466NUcWsPCVs",
  "key4": "5xfBKY3m6gCvoXk5o834U9W3CzKm7BUzw4iucSBeZVFxE6TVUxNs5vDuaWW1wRfKxQbitfSGcD2r4gvQ8BKS8SWo",
  "key5": "2kkVrh3btmCHkwS7D9hW2torV5he7j9NbaePKyLa7z4saw881GUnna8HXBPBTeVoNW3LEHhmakU6hs2qEQsxD4wF",
  "key6": "2CiKGQ8wczNSZUwTj9WGnX9jzbdXPh9NdTtfsyr7rVQjeDDtwwh2KVpdip8fU1Hp7m18iEfKqCo6rez7qMkN8wxX",
  "key7": "4FQpWfUF8xauQACffTV5KzFiVrhg4mvQbdZbafcwBJmFzGmBC5xRJ4Cccoa8wKXLFgYFzgU5aXkbqXNeoGp1vEYa",
  "key8": "2CPrELASr8gHkNKi4w3gFuaTYdUBLmwnbJKXMGp2BFiNH1GyAwBMBYmw9b63pfb1RW6mZAwAsuscVnhFFTTCW8sT",
  "key9": "2zLEjPaMN5BVkqBmxyk43P8FjWy41pTB3a49zXaXc5B3w57BMZ5KE6GorXww8pUTTm8gfmXDLUBZLW1WStwFtUFg",
  "key10": "348oQHh71N7CJbqTrB2tXM9gBvQ8kHoCbfXATNTQ9sLevz35f9PJ4W5tiTHi9trgMcSsCz8yBikdG7o8yfryfLUD",
  "key11": "61VgDDit4ZSVcdvAXrtFs9tPgxFqRK7JjUKS41WsGAqMUtYATu4HLiFrwemakawJsV4xKB7ETYMUFLjuHFtucaLy",
  "key12": "3h8E9Yby1GMruWCAoKV5X1d3efKHWqfNpcEo1h9nN9mGYrf4UyrtDEFaBgaMnEmbefLbQqdhyscTezX3bFG8XevX",
  "key13": "2f1A8488CnC5NnvJk8kJJM4Q6eYRrbRwzsShH3d25iege7CmZJnH7QVgKPQ8nSL3UmKaKngjHsTohiWCYoHaoT1S",
  "key14": "5XdtG2Kku7VMvjz9NVZjs3mny5Z6hMWQSrec4EbwBYEMBiuBowKbZCcM1xWCYqcbpHpo7HUYb32KzrYHfiFRbVh2",
  "key15": "5JuQNjsnCZ3yxxK6v1yv2LHd6Re2CDcASNuoMQWFy6yV2B7Tw7qXKqW1r7DWbP2pUaJPXsjtJPbpaeWEjqTkP1Hu",
  "key16": "69MveATiDyTy1VvmTLGRiowEHfLXqAXEWdEnapFkP9qCU4c4tVvwM8HGgsnVk3QM2fGSoL4PPMYUr5fhgycjroP",
  "key17": "4x3ZXa8kSCH6V7YGAReg2Z52LuFWrUgoKcjBJFiThgJyEmW99PeCWF7cm5m59ZAmrXKsJpnFtCok4WEEtZXftnbd",
  "key18": "39ezbraEfTUrW8Y9G1xFSXAKSnddhopMNgfo8TphjkvzZqYk2HPCKnF8cX53kSWxZCXhBmAXQq9DtNhF8JNFQvQj",
  "key19": "4E7XNh9h9eB2NBYruRKCS3ou6JZizf1fmpndGEbVKtZwHGwcdCZ1tS3PvKToc1qos5c8D6QScvnHfsPkxdtJ69Q4",
  "key20": "66iXNz7Hhu9SN4PofQa9L1Jcj9ZKcrXsQUeTBVYY8woEFkskDqhkTtx6iU9fpKKtTEb8ZTxWhFHhFDXiZ9sPbtzU",
  "key21": "5WtadZxtzfCQd2tSxeis9ehrrFaxpyEYbkbhFrWtc8SHa7deYhRxg1Tj3FWq4vLT8Dua3H45uL7pAg8ywn17sbnM",
  "key22": "3gfT9Xof7bhXmwHxHHSyDR8VxVGhZbyEaYUUH1Uoo4FhSALKvJbbsajJBttdGp4N4wuvWcys7Yz8fZuRoA75GPuu",
  "key23": "dQMdZHCnFgPZ3TeQs997jRn9GESdd5W3k7RwZtYfJFfAD7urqPdA8U9PUakPwEVgFM3Zx8MYnYtPJBo7Ja1ix32",
  "key24": "3Xy11V3Rt7cvrwj4mSVosGtiKHoJJPHT86duv8LQJDtsbwpDFaXKVkKgoPaXpocKzmPdf77HenVbjEiyLWYGYz3Y",
  "key25": "5ALatFyNud6GQwpLyrTqybhYwuSySWe678szkxCXJqbvXAmvtUh2USb8A3TTtAZUH5YaEFkj3k2Yp2gFvgcjSo6Z",
  "key26": "2YvK1ry5hDpMFS8ydXVmkuzFvwMzgWeD8Mp73jqzdncDiS9KP7MfmMm3mgmcyauZeY9XnN5SdwFNLgiiqiNtDLzZ",
  "key27": "4Qc6f2UALBEPEP8DXGmsEhTrmDg9DYuojgbPfFuZtCo34KvFB3zjeRw1QyqHVeuhB8jS12iHnTqw6ni1e8zWanDH",
  "key28": "4YXMEjbsTyTxeM6q1QhS7e2rRNkBUzNYkZ7hbeYmSsVJJn1UvDTXyHPyj1xbqtjRR7r8pKzPPjTwMjbRK4zjMwSY",
  "key29": "3XwFo7FPg9qA1FRqJFrAjxaH9UwU9TKk1qhhsScuEBEZweyJtMi7aD3R1hbqwh2KPeawyiqbgtZwFxp1fzHkcZsr",
  "key30": "4aygquKnBBWaKzSPMyApcA8eSve5wkZ384bXFMkyyFs95aLkNvPK2MHpHc2hDvxdHTZGttYZexYd9rZJ3ERHgpZH",
  "key31": "XoSz9CB4WhfbhhSqn6ga5Ayu1KB8W2wvJiwoazuTFkessBjrBmADzddX67o1fWNAr9UUKCh3PwMVGu4jMRn2TLK",
  "key32": "59py1c3fQ8FRP8ek1m37mr1xmkKPrcnNucCRRM7gZJWW3AGhKB8SqHadJJmsZg77fPr3VP83v8zj24AiXDpMUkSX",
  "key33": "24TYuCEMnvqT23XiDukZ4qKQrifXvSHgF28myyxUYKq51WATYzgQMnZ85eMWqbfmRaKsusstqfqMA8i75QtTStY2",
  "key34": "5TJG7xXETRTr8dusBzYEuFjgBSc3XeeUcEhTMoidb23iiFbvgcaGqotVHq4LdBkC8U1rLoGA5UW57Pav76UhYwLe",
  "key35": "4q41po9Nb59bYva9d4S9YQjN5BUDywLdn6UU8PpTJDD7TEwuFSewEWAZbs8MKg9Leh6riE7PiMPcKs3goYm1o6JL"
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
