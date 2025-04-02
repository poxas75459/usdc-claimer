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
    "4YVGfYLDnERTkqV197fxZp5NWUwCjKoCRcDBUY3BQZfMDSvPiAsfGhYckgbZow7sW6NzWBgBVGN2voK3W5RgNV3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1219gJaiJ5j49cUWozwQrKePqLSxhnSjrX2v3tmQsjX82TyhS7iCJ5yXFGCkiDFdme782auoAdgzVEpK5znwfW8y",
  "key1": "vdxM6xMZJA5wStbbPpFcN3PhVhqGmJdC4e2jX1zBh3tKYYdPvM87HEoBf159LkkEkst2AQpQCmeyKjU2dPyVXea",
  "key2": "21Jx6EQECoKjGLcSABG3aRfqWQMjMFFpurT3z3kiGN5z45mhVE2up6jNLFkQJa8xdjvrsKSkirSKH3ivEc9hJDyq",
  "key3": "5osqcqaEH1G7tfabyXSB2Cepp5HVJdVEg2eGKY1E7MWunkb4PZyVBtCqozFpd23m692oY9cTNBFybLhGNkxHdq8s",
  "key4": "4VLEfzsAkqYagf9zoDXHYtKLyvrW5T6FZVQAASqabUWgCb9T4w82fUcZou4uLdNTLjLKZyTceUu7YUKLxbh3sGBS",
  "key5": "aQw1Rz2hoAz45eciiWs8AZsorNC5KR5Bz3DW1p6cvUuA4FyKxNUc9eDqzYroTfoxWBg2kGDPvj5B8QnxfAVc62T",
  "key6": "3YPB6911JLjWaURV2K66zJgqoMb3QMqgGQJ3GmT8Mf26JJdw6HT2ju8DyKRJ9p1uS6sonGkL5i8UzDn9QZBc3RCL",
  "key7": "5Cdinz23Lgm9ohmZB3hxQLkQp9VSEV3fZyetq8HfzS1fDm13CkERCHMv2W3RoERRewPwTkAdvhvLQsVhDvecMWqp",
  "key8": "5wsMqKyWaCmuwYfSiJjS24VpkWeFyYVsk4cM9rdASco4PmF3Jw5csEgQbvq8ECa4Xx3o7hc4d2S8pDzP9VRWZRj1",
  "key9": "HgGumTVNDzgPQcTzhkSEBv7zRhk29b7nn2Ej8yWeM1qr6S1cNEhaDZNFrkZ4BsaAh8VPZzHxhsR3EyyhDMNNtM9",
  "key10": "4xzufgwPNjzZqixLxsnBjs7g7vyJCztMkP46ZRERNTDg7Soi6Rf388CFGAYhAvE7ed7efz3GobKCPtjAaM6DcvWU",
  "key11": "5Um9c5G98aoAHXcvnh9yEcM5QQt5ENmwSYQv7mRVCcZ3WFfGEjjPefspYZERfVADbWt17f2oh8YZVtn3Mo9cffAw",
  "key12": "2MWmTD2FK4mTzHm8uzBTFGa6tm9x6yEYNKsRWB9TotMTXQfsKyRVMGVhmRPr9P5x2Qe89x3xUwmKvkKBoZmeAGHR",
  "key13": "32zDm946zNmE7YnLND96id3XAGNgnfp8LbNSytAAu1vbWNguVKL2yJotP7ARL5Umunyo9WvoPTxf7iznzWqkHVt3",
  "key14": "2K6USWVk8xwgBwQq4X3mv9T2SUFBJ4dmDsZoihVahEHaKaezKgf62kVnwUfBe9thsBMNsgUvtJespJRHoVfWSsK7",
  "key15": "5p9N4SBXQ7aJSR1nhpk5NUACM27gRng4EvmuYnnmhnXPeKhNYVCs9EpBhqD1LB3DNhcVgKkWQXyj9RAWecXZEhhX",
  "key16": "2XuNoyNo3HhJihZnqahaEPLUpCWqDRAszmQdoV98agLPaahK712Ddfyu441rCmjSEkcZPKybVz6JrLeF65ruzshQ",
  "key17": "3Tyvn9C1xxL3nBpkZEGNF5eVpTNWVW7bVfnVshzHej2NAMuWvSiV6GPcYtqYZBjLGKkYAzhMycWtg4Z6AXFBwWTc",
  "key18": "5Xkj9X7vosKWZe9fewfwKCTxqSUkCVjmSGNdvXsoNAbtPA8WUYyceRrHTxHK3gGNP96zZBJc8F3D3hNLrD5spo6D",
  "key19": "2jBcEPHoKrfjXyLgwh2e9Z7xupfaeZ2ukD9EEajsnDmJHmCKPphtGWQPUJinHBtywp5NLsPCxjWGsPWBBJtMX3nk",
  "key20": "5XywwX9RrLJV2VojQ9ce2AM5T9BniSzeRMruJ3Lynwu1qGCNs94LnYtywrSdvGabxRVHkBPbZ6wuBrhZwQVqvVLz",
  "key21": "6aUs2oX85ne6nriEwpZ3mWfYMeQk4hRSf4Vau6qQJfDMtmNhgphmf1nGhGbpd2vxszvyUXvNrHLUHr4L4dqWgf1",
  "key22": "RmdAaEVEmFuweRLn8geJt1Fmg8KVN4p4VqNfpQ19sE69innoJdtLGvk2ti9cEoQcVeSc4YYin6ShFnhYwrycnV5",
  "key23": "5kFA9vLmVkZdG9Zs69St8AxXBA1jYmocTsvLu98ra9fPXsh9jg5ukdxfVfHKqFpAkeGj91gRKn6GJS2Y7UKwMrWE",
  "key24": "3mBeefwbMvcjUiJv9EQmQ8pMFUnR62KmhL797DA9Gmxm1jCmnGovVCcfrvxkTPQHMcD1zNC25WZCccwTbQBNpDTz",
  "key25": "f7MtgbsLAgT8rYPVCkrjeHWDpuQfqZGjX3bdoctXY8N3cu6WPtHM7wvkS66pzSjCBUc4K4eEm7wTNjoe4mYXH7t",
  "key26": "64eiJX1aoc7iqKrQ1w8ryxbcdDqxvyS8V4a2xfVx1MNUdDQxDbKp4DdhpZxqWN2HizLgjewabU9W1vRMbAeZrxKi",
  "key27": "P1FLqs3YAv9DZGB3A3PRCTpTXBSwcb7poVyhNuHJ1edNPPyFpSAQw8qZgCz1o77P9aq4Sh8wNXNXfzWFHu8x5JA",
  "key28": "Z6KnA3MqbroSP6nTs2PyEdwfLdHyfSRaoTawhVrGsRykYQB5qoRKq131pdipvFFBBEAgKgyP1Lwi6GkibbdV9eT",
  "key29": "4Jhrs4NSWVEYAoPjeUjkqborzVUT7Qcns4CzZGsrBZe6Hi6AUnVJTBw5H65KTZdWzBXgwNgk1X1EzMCj8NkcaYqG"
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
