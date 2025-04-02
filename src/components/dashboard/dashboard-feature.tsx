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
    "5kSdodiMRb2v9qevKEXv2JbASKWqXYGE9hUHPBJTTz5NwKFiCdgjHSkmJcr3KqfGKyie4iJZcJbwZYYBmwRQxoLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5968GmA9LTqSvQugbDMBhCfXhg4z1hdF4AN3d8iJiPPYqPD2bqjCwYwe1XeZXxZpXQhQKyte1fpuVnJw6bWHmH42",
  "key1": "2MSAPr1LbHeAY3jEWAdbSyA4ULPASLf9ub483YQRQs5iW18vFJMnS6spHFmuVzuPkZzqQmAB83LBijzE8zN282aw",
  "key2": "38T9aEegrFpRGywFea4mQ5RP8xWMg7GnxvseSB5BSyC8LSWGmmc2VSUVHyfayKkGPbREDkP4L8JUvRoYMCNg6L8E",
  "key3": "5NGnQgDL4Hg9ZRc8TbtDxQgKuqMHVDW6mATFTCHP7mR9NVSix9ACSJprGzyLN3835g7zq6Tdiy1hgeQnQiHwpxAw",
  "key4": "4bu42zEhSNDvtjaf58HNmmsEzYSioRBqyRkFu9NDikEp6SFdfczdGPQ8xrxLYkrFirbQpeUQsKcSGoP1m4omvY9v",
  "key5": "4JggyWz6zAkpMXYr2vHPhTcoNreJ27N4Ro5Sr3r4zsDNh94L5gRDmjN1jnWL8XLLXufmVWNZ8BsBDsveX8RZar4R",
  "key6": "F1P8qdM7hW6EMvVDxJF46ZjAWJi8i5hbR98wUSyfmyjoNfUeh7oGaPNJQegaNeTk2zHV9Nyw5aCZwoiJF6yqHYQ",
  "key7": "skK3cH2R6YM2kLxhWNSXWMy8xRxwgXkLEKXJMAxQ4C43bNB1aedVTywdJs8iDkiHnGoWYn4rsYBa3o6QC6rMKmL",
  "key8": "AbrTMrpnUDzD8LZf26JqB9rpBr14TSTf77GcQxZscR9Zet24Xr2x2BC8DK1z7qH47eoUzTeAMm5GFGqts6d5tEo",
  "key9": "5jKAVAdsacYb4qbmcyKe49JNMWKpP8UQS89UgyphT52wG9RziPs2ZF2i7hcb78ci8cgHhiD66fCPV5LRNkK1kZQ5",
  "key10": "3CdUvytCAnHRW5GLPzneGGDpvabWWF7xw93ogFajVswPnksBA63tkn9fwJoDibjqaQjrRYNvMxPcdVCT8C1VGjcD",
  "key11": "5hEm61xFShsXbZtymiXy6NzEoUPP2vEiJErcWU5RpykDu9Y3Q1q6a65czmLTsY2qYJnKoCe4RLg6G7oFDMsUnBDn",
  "key12": "2p2iRSdVQb51GqC6kqNVKtTsuBBPUpYz5LJhsuiN5oBPJH4shnQ54Uii6JjbGDS9V6g5HXGMZDMoLwKwyj2WPDGk",
  "key13": "443sso1cBUC6cM94fA1kjAGtbMmdvqMXMb7GhYYxKsiRcfwFC781ynCm4abr8dAm9mkXLNcZg4X7asnA5YZaEmHg",
  "key14": "4exnWGEWewg9fkG1DfU6pYuhXSP5AkQPQuj9njmNJG2jKRAyzrrMhDKjzXhrJceLwtfAqKpDFJjSVeXx7DcJn4ni",
  "key15": "5tzNMAxeyjsiiiH5UE7zmiej8HaqUVaPtJLzJ7QTJts3YwLNSLijAaThW1Ldex9GwgWL8V5MSGzqFmJhsKw4ts9H",
  "key16": "4uaw3j3wpYj41C1ZGhuDEAjHKhR2kvqQaDd6ixbmo2ENkyxCRfD87mbTy4FXj7DkmfgA9mq2fhaC8U9VbxLGab4t",
  "key17": "2Quv3wHM8wMCBafLAXdZwkp92e1nmFeAWKB68cJgbg7XqDbpb6QPYWNWWhfPuDZDQFvCKjQYsKifkc8N4ZHBnBK7",
  "key18": "L2PVCQdoWj3FwvVJox8seBxKysFQ6i6Az9Dezb2PMsiVrUUaDytzaNkLUMBJoBasyzWH3NZhWkAPkKine9g8uRv",
  "key19": "5xypDEXWRPnYXjT19TXEsUhWB4kTRTNaEeKDVqsF1nBM2KFG61Miv7AJUrr7vzGwZ31aymbXqP44jmCvYZ6b6ZF3",
  "key20": "2r8tA6mviLjRY7GrPMur355eDKnhg7eeiHRCtgMwtVNsizaoxqgTA4gXUMpChrvWGGiVPDpkJRacEWeAjmNjnVmE",
  "key21": "2LbHKgpdyD3HF81As9WEstNaerwEZ7cYd8SNKMnTj9ZTUVqeZTWE6Ee1CRxZsaxoxpQnpFvM1jSbJvFzkuMUQ4LC",
  "key22": "4uSoKwbnWVtYAYdP63spZWLso9BbssXNW12RAH9SYVzgHkrMYueej7g5Y1LuMCXCebipUv2ZtM87mWL7sApkTBra",
  "key23": "oFRzMRzaS1ByeKueQH9gPfgemmFoDuJaBJUfpJiZgGYXe5GhRjBni4JP6U2xuPsfApinuErtp5VGqUAV5zF9ij9",
  "key24": "3B746vV9qW4x4f91GUZUQjEgHKmLTe65utQ1aTJaLLs6vvopzwR82sdtJY7oct8ahNXhFPEkPSuUNnFnCxv34Dvc",
  "key25": "2R4e7KgxFRWuTQQt6xESYDtt1wB2o7S8T9RxJFN4AoxwqbsXMyf7CkDEDgBRzvJrfNsdcvhXNpqa7KPpVGDB9S5t",
  "key26": "LEyn6Jha3zVa8u8F7SHZi2ftbEJ9Jd5dFpMJxm1mJG3SnQQFUtoL9H9bfKDMW2K5AgJNNYGtxJ2kBEvjdxSirrz",
  "key27": "BZMxXrz5SeWY241pQ99vRJAtzZHtEdFWbNufi2hWK5jE4Cu6iRUESCMkg5dZcuJ89d1QsEhayAhHB8M8fdQvEa6",
  "key28": "2z9xLcN2g6j1rL9NVuD8S9kzoveM9UGzHYkHEWVmP3Ao1z7NGcMUjSu6uswqKykUVK223h8k2xf6SZn71FzqPsQa"
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
