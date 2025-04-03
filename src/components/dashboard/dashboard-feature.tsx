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
    "4K6jvFXALivKxPKCs7wvBNjiNFUApy9DmjpY3jvrYA32vNmpbU54jjx3uJcEY9az7TiT6CiyrJwGQWPtjqkc7EPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCGQcNo7YmxLCuaU5wnJJLQCLjkWzXjL4eBhLRBc4oQwnRpEPs6doYYYKGUoXCRejyGwSZmK5Zix1HHzzZ22AZD",
  "key1": "47SWCf9z928gWXVbjnmRSoAgoCFGyVunx5dgr1HbRsxWmM9C55dXaauyVPLe3VCGWEkgy4d9udqXpaa3yQM5UMiD",
  "key2": "3U12nZrbuas1RkXBigWxWgLu4NJigJtLrTmb9qD8jzZfkVb8qUP8GAwqB5c8s7jyeMYEC1bD4e7ejgbT3eJcCTng",
  "key3": "3FZUbfBraBTNig4c34j8JAZSGrKHnSihK93SEgkCaHbWPnGYpJeX4eVoDSkzBodHQCUG3vsEv5WqqLK8fercB55Z",
  "key4": "hk3Nhr3LQUPBzhnkqrenUQCM7jHUkZP3n1W7YP1UtYGrvLRJUH1yaLDQyjoNSdqZhrTfqXaS9zVNuGKbjvHBL1P",
  "key5": "3MjkjM8bj9iGs2N8QWYN3iFQDENYpurPvqbYhVZaJR6UgzSnWv4g3dU4Ck77gG8KsK9twGGMykp1EjtUbUUszkAr",
  "key6": "2zzivcdqFvTE64AoUqGQpnZaHa879gzmnAoar77gs7yW1gu9yLabdXPSRzZA646pXhUDYdvf1ouFD9hdHeDKmnSC",
  "key7": "4j5UNNBoweppjmksyTrW4HxGSUggkSr2MpYaNWiV9jxzCuQ9LqnixJ2hUTjC22i5JobnvsZtiTi3asSu3kzb63GM",
  "key8": "4WBTJuLWuDe3DaC4fWJSmcjfdw6SxNAfT1D4W3D1E5V847dFkNsLMcLXnzLgcM3xQ64JYmJkuW6TzHTt25CbfDsP",
  "key9": "5F4oeAQ9YrHLsS4uTc4j3Ae9UW8LL4MAufrbQhmo4wTN7KVLacA2PFrvLF4n35NuWbgy7sksZ2eH1tyfcbMnxdru",
  "key10": "2dPtmqzr2EVZGBUGmNh2AHH1rsdbiEq85bk5PtSmPn6NTDuxTotYP8GPP84fEUMeL9HF6grW3BRP1y8ABR2tSUXg",
  "key11": "TakUfSeYfgYkhJn8Nc4Y4ifYcnaWkxRXsJJBGHd2A1b1EgmW4DJYHncAoDxtLdqgJGisjCxRNfd8RghmgDm2xMH",
  "key12": "62wpkrpirhQd5yVE61ddALrYcazrwhJAinCd8Bm1Drfke2SbAes8AcxpcPFy6hq9P3jSGLDCLXu4jf8PshMbM2fr",
  "key13": "sVN1FwPzmZuZKPeZ5swQnsDJBqxmqj7c3s1vjQ1h934Miuo7HXcgLufcwdEzB4raZFmLfhR4Djoh2McJFJgj6t3",
  "key14": "4J8nAVzJ3CRQGpZAHqJCKHbAgMVMfLQCZJ86rf1m4zpK97vMXX1WzEYasQY2ht1Etuj6PvfPhumrUTv4LuVkXxUH",
  "key15": "5PKFKz7PVuvR8ffBHqMnZWnhtjodGwzzAYc38b5TbtsJUU2UcGTSihEQp4w7PYrSwTEyDVcGJxU2yk9qvYKRSfgD",
  "key16": "2BrzS8dFnLNZRB3RStDcjWaWb94vCeL7XXJXaztMw8ArsZtn2Gc4cofGGJ5PXuq5ZeE223RKTn17ehNysesso8XP",
  "key17": "2WyRVLWNF1hg61WHx194QfbSHo45kJonJqBBuWpm5wCGRpRiGKxFJimcZzYpqfoiarHVHKxMcEkfjPtGUpXqsFJp",
  "key18": "U6D2XtxCPeg2rxrY9XSpmDJP18jEb6RHS8akEwZku5vCR6zwPeUYJfMiHYw6UzSrxJ9z6Sgc8PQD3KjgErBHSwR",
  "key19": "Ej3anPJ3giVaJ24pKhV7JZ2UEMF2Ct3e4oq3RsCxArtBcpWtqYZg6memk4YNc1KXBwbYEhf3b7YiJHKq5MAuL9s",
  "key20": "3G7n8thM6PBTZCdEER9Q41ughhn7DoE7NTBY13oCcVKuKVXPJC9UmC7sMXX9zR6C1o8E3Vqe8HLYUGwQRgE99Xi3",
  "key21": "3o6VEmVEfDLAWhMLphnuDRYZJKAfYGsiaBFDVovUw8UJQxqJaPmJaceqCa4hPjABdDkNJz9RaPb6kSRaYjtPiX6c",
  "key22": "4oqxaSz6Gh3QRrCU1jbnkWyauaYWiAu8uNnqwxXA9R56jHQmHHkuSYur9NbipwCmVa3jXer1RhvpmSX1uz1Kx2nR",
  "key23": "4TrdkokEFFH1uuVmu1MSChBcS5xCbsgCrQv5jPWceaAbcon5zms6obtqS7cMut5CRuVjDuxWQRpRmjn7PMyyDxoZ",
  "key24": "42e9vMsZwKL7RGsntN8hSEAwTxHBC87mf9Lg1xGZqHDMNT2Gb64pMyzAewLZJD9BwaE9nUw6M4VpMebcdYG9Xd1u",
  "key25": "3KBD6eJcWMHCx4R8B7tgt9Vk5gW49Rgu7HKqXaJzHo2QyrdyKK1Ka3kDLwXbxy1Tky8fuDtuaQ4W9haRfCtJJoUY",
  "key26": "7y6s8GKewyKc9StL1P5PwSZCF3ELhG1sxMHRHK3P2nU98P2EEFWsFdNHVDErCYGChAvABkiNkerF2W93TRvM3zb",
  "key27": "3NvsVMeqyhQiM4osWtUxJtBiUMMPoLb86mbyZiMwcN9nnco2r3DQqixURxCctuLw5SDegjHBLYUxzta3nL5s7BEW",
  "key28": "4Fko8NjWZpj8HU14czjn2u6vxpzzbRauESnURMhttcAnWXzrgYbDr9d2Xvhbk6vCUjWYSkpctDXXjGraGR6d6mzS",
  "key29": "5WDQLE4G16xhWmXQ6thLNBZgFSwCW2oNXX3YEt3AdzGykd5XuYaGs5b7Nbi39A1v1hNyEb3jj7g7QF1vgXPzTXHU"
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
