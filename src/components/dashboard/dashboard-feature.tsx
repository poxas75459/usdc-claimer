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
    "4R5Q6gXJe37JbD6XVmzwYyHWGAHS9C9CP4Lr5Ew6jM262UreLGfeyC2UcLD8Nx3kgDuHH1kPaf5J9R1XKkG6C3Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6c4r1iAPqLmjKZgUh4hzrhYoNaiw1hk7GBqZhPEWnaGwDsrrv3XZG9FERgphYYmQhpfWE3DaYVMA4mPDo5yk7P",
  "key1": "4vHi2kFJ82Lt6C5idkRK1b9seDcPjqB5LpgmoEJznMb4C8Wcn22NSbVVFdDUMjmLe7W1Yt62tKYxAnaScg2i6axG",
  "key2": "5YPaEmZaZzUmjBoFj85oFkpNtbpqUXyk9FvuanvTAKounQ4TkpbTpGRSBa8GtVSUgJtWiyy8g8HBeXu1HAk59HVs",
  "key3": "eV4Gu4AKfkz1JJkgbkGMMy4VVYzRNH4pZQZzkcYzkMWw8UksHXJGS2jquYAwHkwwe6MSxft8FDNydbq7dGTDVJz",
  "key4": "61w84TPbG3Enz5iLHGVPxZ5jGzhjfG9kJmEb4HzJGDBeKAQfFiwUfcJnTxeoHfvuJeU5Z9n2hAyAEHFL7dT4Qfu8",
  "key5": "3B2zPBZT5SeQwJG5smj9TGoYkM2xzzg9CCi9J9bnHjA2jxWAPqykN49gpwNCKihLq8aNCDe4wExJNLtQAXCdKa2s",
  "key6": "3Kcgva3fCeozJ4uU52TUUAoNy8JXCBNNecb2LmJjRh1Rfiy9NuHD16p9JjR5Sj3GiT1zVPqKZAbr2zwLZJWRwePS",
  "key7": "59UyFYATTqWWbZG91Hi24kyNaN8u2jhxkQaWsFgYjvK3E68KPHxLtRL6bHiJ4iaDPnvG8aBp1jU3GyApjvtA7Eze",
  "key8": "3Szx5y8jzR2wujeG81BDeR95fNKRTRfCiRcD9oPB1eUjnH8Sjsgu4aYWk6aUrnsjummWT8NRHNUtFuZaiyUAQpFH",
  "key9": "5qevkQjUprVx1MqtWLAKVxEkK5QTck15DWYJXxcB8fEEj7wTQW2fL3WVP2AFYjDKFX55G1VfJ1bM65gYnXyryy22",
  "key10": "35oZ1P9MfoKbYn58hMXbQSr2r9BxDn5ZpvcMf8bsbtDcH6HMcZn5jM1YBX2rPvc2SBUAxykWp5bSgoHdGsZ9cumy",
  "key11": "5k3u2ew3hZTf9b6b433Lnsppz1M1FAqPyFCQuTw7HfdsZgsiT2A4PgKWhxiNFVoPWTQPsFqvrjsi3vTcGnSyXNXg",
  "key12": "GJ9iC47p31HB6AKfAi9WpkgStZRtAiCstvJaumZSYVm8WU2couAVnAK4DsKWChyVM3bQuNajGHwQX9kdKSuCJib",
  "key13": "3kW8VpeZoae3bRdLkATKezCGNdxmoS3FzNUzdTBqBnzJFq6gBwoWPrXg5AvuC8R85H7cLjAtkNUPHnTk5nU7kzYB",
  "key14": "33ewhfwSFBJgzgKgpbXnRBobgw3CQJHkDogYiEpoBdkjCirUDuQKVgw7rYDdYJ2HqLEtdxcFELxZaHt15cBSYK9t",
  "key15": "3WqVixi5iZYXrjYHUgKCmg8ygE8CNLJR7ZKN5hQieF48mUcSYypoTn3p5hFoxvmxE3G1Q3Pz9S9QVbqRN87fzPDo",
  "key16": "5fYQz6yZGyayA8ipPQWzyjwKDfBKESwfPfbwAwGyTTHCam5YYgqafwYGHMFM9M3iHM4PHF8bapT2ZwRHiofZ8pce",
  "key17": "4b1GrDLWi9TuY7ZjMV1w7zRZ6dZhiarYJGAitvZCAfXSNKxQALeYLvcPAG8dHNvBHLxCs6AqUPZK7xVP9TQWTNP4",
  "key18": "4rHM5xVEjLNxauXZ46AqQVk4oprK7qpLz5PxxFYx6xBzVyZZJA8HxgUbz1oj7B17BsXVrZ2ENjfSFbiN4zBXigFo",
  "key19": "5E2W3FVagHxVKzmQvw2Y4jxQEWPf3XvbvzLXtALjmHmEmMcSPbPvpjRu6aqogiZN9WccQVRVvZrY2W5fSH5ndEGN",
  "key20": "2ixDn5ANtFnqW5yrG5ETgncKHZdKhC9391fJoxW37EAiLjnKAnxpLRWj4oWssLdtciqbjbgM9U89Qdh8E1TShnzp",
  "key21": "61VD16Hcxa7jzHR3wSokojyraEcjo254cTZ8YWFUJNbDM6NUAye7W3p3oem5sKNR5DhFVPDLima8N8qa6kBY1WyY",
  "key22": "37yfXhRxdmyYCdV5TxTjc2HUXAPFPNckaEoyhuwyQQA4iYEhSajacucXvkYwK5BkzUsk8kouFedqFyWtr1VDgfG7",
  "key23": "67mwDZdRQbwnrBtBwS6eTi6615hJo5KFjQQzWoGSUTFyfYpmHbpguEpEf1VGXoaHyteQA4D8DZyzhBHSt4UFffKQ",
  "key24": "2g3UsofJeTwQunokbcXgz7AfjdvGKFR5ErWrxJKXhH5cnkrQAeDvTsJZddxTk1rKVMT4tnbHF7aVx9rXWWaiZdDA",
  "key25": "3cPnJrY8RgQcqogcu9XJrSewuNbpTyxHQb4PiA9sAVtXwohyHs9h9JKVJGMULjzxDfxH4wjCkQaPi44PKx2Grd61",
  "key26": "2dAbZhpgdPXNFxB463cTtt3imGwnpJhadDBw6vdSRmtXxxgoxGP4sSFQWrbg9AAke8SbmR8AQfcwHvD4BRsUzpKn",
  "key27": "28J5gNqpZEThne2p2yaonK9WDoGutZdaAG26oCxuSTnefxncTpare2kGabPqQN2EsDQwZ7h3Bx4tp5Qbomwmgsgb",
  "key28": "4khyZgJiJA4uvMT8qMZzcdhDCGEiM8Xys9fWou76zZSvqToxhGdA4iLWjZGpbekxrg6mFHyCocCaLyXhsafMxpWW",
  "key29": "r3F8U7gVDrgN5TqqEBzVxdmW4fBFYrLU4cb5Njhcuw9TtBCEcb6fokq4jSjtz9TFSRcoN6vFDhDTqzTX4osSgwT"
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
