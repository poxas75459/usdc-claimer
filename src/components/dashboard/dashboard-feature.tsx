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
    "44FUCeVnvffe9sNA21imAnjX2HCLXDrL8pH6BQCqGiRnugHG8s9vdgXa3fm4RXFYJvP4B4vkXsaWLmr5215pHE7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWFq6mfM5DxjpMXsF8FXBWKafL7dVTQt9vcuQ7Lp3L7sM1Hm57Aichv4jiLRMMHjmqVCtR5Jjv7PpShyMa5nAjd",
  "key1": "61Xxkb8Aum1eGTHqbsW2Xa8vzB8cd8pdXU9XmScf9LoyGv2oASVkzjCPSQg2Srb4Ha843ASLi3hE6e7Y7Ki7x6Te",
  "key2": "QMmKnYKu96qPhkmVRmYHknKtgy5HNMpuqnHUDzGa48zS8vinDSWdmGfhg8RgTaNp5ZoBFTkp3QQVSnThKbYHEr7",
  "key3": "6eix1E53k8LpKJJgEwjcThLdzNrxCenByLAKtWwQAzDX6psTGm9YLWFjsCTXcTxHUnzi6AiJp13qGa7oeugpTrd",
  "key4": "3X6mfnp6mQ7RdnveS5nGHRr2TePH4jmTuzwLSUnuyYdSuB2pnfDPnaxaZrpiRxytSo6KjrRAK3HqfMTuCRMqH6Vm",
  "key5": "5Xb4PbZXKByM1SDnhkqh6LCdK2xLeZP82W4fwR2qy76GMVFquSxKe3GQ8QmAQi2Mpaj7Aqg7z9tqKQzb5Ci2RYfL",
  "key6": "YnpHcSGp81UfA8AomMn1FeWW8ruH4mCLedLoD9dr6BBd9SNzSYqdmbrY8ueDjv9TDzr3m4QdhN44cNTXPR1FQLp",
  "key7": "26tchQst3Ek1v4dTnz2gEqo99ffE8XX8mTNS9wFcQEy42vdGnHoZEieMq39bhxUrnEfVPQCULg79uYmTm1U6Toeo",
  "key8": "5KmsJ6iKw3rdRcn9ShREwAETfL975H9nq6NmUAPmsL4wFz1G1spacVjsqsb1eKz6oezwaBzK5ABQCrAQkcucXZXY",
  "key9": "4BPZrNZK5zEvXYkz52XMBdTuAxocmqG33RXp9QAirLcAKdxYeuCe9YZqgmxTomhnRu72gfdVCZf8WLDVati5N15Q",
  "key10": "2WATYm5aSKXru11TXz7ma4j8qxg63uDBXkYj6qaeYmh6Fhu1vwg1rhMsLYTsNrtBcS1Ku2xLyQp4gNdNe39ZWyP",
  "key11": "4oCmJkuQic5DrZy8cM4QhPDk4qwTjSmtRypNQZAv2wW1si2p8hxsDEke856DRY5iEsouMvZAyVL1rWNUJkUdjZcr",
  "key12": "YcCR5sZLTNHnLJcg7vtYR41bGmK4cPqEmkYuRbATyks9siqvG1ejAHYSWMypdMa5txqzUeRoh9ktmB4Hr9d9rYG",
  "key13": "2mMT1eUcUKKYtGFBGXbdD9md8XLDTAF8cfgYZTg3D7TEZDTQJVDsrDJQGeL7bK52NsGmVnmoqdyv2camirKzsF9s",
  "key14": "5Jk5r4AfmecipzEoR2Zo7u6vYPs65v41jGbzAgtBUGaUUAZYmMG3rk9DKwEZnq2GDKyxX35MXyaHru9TvGax9ZtT",
  "key15": "4QQgerGeo596TFtszMrE2h7AjWWpUSTZbqk1sqjLjYi5Enizh5B17HUZQBCQJQb3Erw2Lvm4agnUK6p73nkKp3hS",
  "key16": "2iSCcSCFS3ujw1xxu38TXYoZGFieyrZkVSmFjLRvaL4abrggL5zAbNguz3LTee5Leo346gNWwkNo2K8mcPKbucbR",
  "key17": "2M8h7itiTeFkWrVqfVB5o85aqpKovku9HzGMtPzpRb8oeSxVYfEpnTuU47b4gzwskGMqy6nbGYVYDELzLJQB2gN7",
  "key18": "25u7snTqU5sNGy5kuLCNiBd8doVVnfawUYArmBRSxk4vwZCBzPXZHxvhZboqanBEcpreMbtSAFW7V43Abp3qhQp7",
  "key19": "ud9waQrFhMvaWYun8DhE1JPpTjv4e1VTenU3GEZ9G41Ts6zMwJnBABB17PnkuUSpVeQ9tUfmwZnc3zifymq75e1",
  "key20": "3SNY9btU3jvLDJnxJUmbttN2tEAtWDjn7gwQWX1KeaBkSa8zMjEqwaUhjzmahAmi2nNoVNKCbcF7SryTDPww7rDR",
  "key21": "5Rcs6MiC2imw96sXXip9vX6eVJsaxsjfMKmNWgKK9YMQF2cKr2qrx66P6NiwZTfiz3mAUCwdHwmB1HXVtoeaFawc",
  "key22": "5wDFFF78XMRtgG2rEBrrTjY7w3FeGL7C1FFHUuVHrzfzY6Mznmk8AW5hU5T3qphCNrgSBnSnVFZZCJzbpCsbmwqh",
  "key23": "3CGKw2bJT2a65JjjA3TNsBAurxHWxs35uQTMibhEGTzSAdkSNh8mXxiD8GFPsVwLWChMMG8S6UJ31yAs4emB9pe8",
  "key24": "3sTCQCmpiG6r9ix44RvDZ4WvMuCXNTc5xrrXajG4VYnGxhmm6cGk3VbexqkJMFzTpWA5TCgZUTFPDWNJtMoXWaz9",
  "key25": "3v5PWwJQWprft8eD4mdZnVNqKDeuH4h3QyqVvfT11tmYnPacXKYBvoKwD3pYh6CeKTQNRhGrZTCEQgBTSFWgDC3p",
  "key26": "41LXV8CwuwwVh92dVdFXixhdRwnPV3jnEg9bSKgsYGjN5TW7pkrjmAGAGgqikogSgkMBbcTxeSEaAqxvBSoKofRg",
  "key27": "5jHCZgJWSQob48hHEKNXeiUZRvf2zwhrvdcnwu1Ec7GaUJiZHoHqKTT41vW8SBPFDC9u5y7ZayJ6EtVxpCHfYru",
  "key28": "4bKaQo2nFDpM1su4PUGjbT35jeNEV2aA1Saec8WzEASidnFcMNBumQBR9bzha54PQNMwkbe4KTgzD9TaZ145jHgf",
  "key29": "5rZwhutb9FRBXEyJFokoaGSz6baXYpCoC5FWrsqCGGKUKxvZgfyxcWqN8eXhTwYAUbtNYjFz3M1WkS4T5KyLrBJV",
  "key30": "2FuBExh58GB4HRJ1buUJbkVX7XkhgpMdNMy54YUMsLpcrwM3u7aLpq7NRwZZuqrFNJXVL23WSXq5pzKDdZRS3396",
  "key31": "sxJuhC2MxPFDCuFhKjKEHPT4XPFYTUR4nQPh4WXLb5KhNWYErKhtWGFJJPFZUJQUV5vdXdhLu4ef5aqUBdbFc8e",
  "key32": "nRTWQgbncp3MsXehNoYYe7A5gGTC1qByMDLGgPpLHtTuC3L1DsUjBCtcaZgE4fA93LYFQybrXr7Xi3biGDHgXJn",
  "key33": "yKwzx7j6RQJnzng1sAY3LRBjGxgyh3cum7d1z35X1UCoYQwhJoD5gusopc6pQe1aaMcbA6vDjRghjaT1PAxjtBu",
  "key34": "232JgJ8XabLmWc6kv6SNZacEmaj6mAQKKnaptR4TazTv3pi7mBzdesRo9mgHUizjjBnMMbqdKEiCQAdXnKg3yLuX",
  "key35": "4cx4KzCGArHLNuD5R5M45DyeZMqqR4Y8VVcWqeARfG4oyC7mCPJVaKxWHWxNmeLYyvSW2vBwC6bGmkhisRuEGoiE",
  "key36": "3t6TZPnuaDVJHbVCtBfFp2mAATUBXR7oS4XH8EkaeSd3prVUViMuCBmTU2Ly9GosZtpB1scGEa5b4HsAxQZw7n66",
  "key37": "5gkA17Spkv755M51yEPM8Qm3tPNGXAUWfE6kFSoZWRZ2ZsC8YuTgyqHY2SSefMBcUqZF6BoLUUAvYEFgPZNb9j5g",
  "key38": "5fTqqCjsL5BGyMms6VG4Z4dsHho7tYarBpqNVhsiWvy6Qdw9pqC6XzCThWsvL4y2xw7HeBPV3zkXnDw57z1iGGHX",
  "key39": "5h8tTSHbV2VcxkpppHJeNBbgs9tQrEsEqbR2yNUEaGbuLYxkPUTDRKExNHdGB51gfyAHyKQVV8yyYMifGD1K8ysv",
  "key40": "2iRWmvgRkFV7Ly79fELDFPf9CpBWabJbd3rm8tQcyYeSuZWv1gDChMwzGUKEfDK3GsSJ168nCgWc7cizxKssxDbb",
  "key41": "5mZp8xx3c9gudMQTVqTGaiXwFYk2QoPEhGgdHpAQTbJuBS3LTkQ8pC5mxXQZLTzT7fGZBmdyYoRpAh6ds7WSSdvy",
  "key42": "3BqZWymrskjEQxoaDvGVbXiGcLkkkE2S9HTGC1EoJdBzc3heXkAoowM8gw9q4e5UKRMcL9DNeGnoVz8nhhsQwfFb",
  "key43": "CcRi48jbYmfNr5cdP2ZwWjr58LnF76BhKBavDYMrX7RSxe9drZXVL1d5Je3JyfWmn4kJq3TjSngsLA4g3ryXsBH",
  "key44": "2QRGPZnYpdE494eJQiL8UoJ5Yhg8cPDJWjhCSFUWnWCMMF1FqWdPVmHGaizyZxXr2kszZ7TSjS6Y5NAMhvRoZkvX",
  "key45": "jAV4XGmuqVTJfc17dsveyTRnSUrZKG82Ca5dW98yi6v4qsX7diC11Fyyo97PqSi2StEs7hpchKLyg9UVBBBsi7a",
  "key46": "66uTCPHpCgRtEuLtccy4G4LURSYQu4hJLY8iR6VHdoptHghSuSZnDUSK6JmCNsme1ZRNMmnMTFLxtqpia8uHubkB",
  "key47": "58tif1PrZSRPnWipKBRiPbBeyKUXm6s76tUfjaezJCuP1bYLmTEieHzyW5jnZb5nHH1cZhxjPudz4WXn9CpJxhKu",
  "key48": "619PKyGrKmngo2j9kfsuSt3UAoyEMiKRJuLkLgUPpLFAbyDfK2nzugbojxofiJ2q611gq7MSaRJiS5jMdMSuVz6p"
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
