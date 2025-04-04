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
    "2oCkyo8vpdFULa3qEPX9xSngMKSnPYwvXHSWqFjAvubR3kYdxxjqJ4dgSBD9BEiZcRdxUKTmQ5y3xXC8hR7HzMhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BA2kZmYh1A8xqYV6iJg5jJDthQGEpjbaBze2QD7eD9wi3cqXL187UobqEvtc7eBPtudVxEwioUVuCgDvxqVXr65",
  "key1": "3wb1cQ7HKZyaNNYg3xL5CTfxaM74b6Qxa87JghWBSSeNjptiiRoZkHSGZSWW8mPAdDkc6GExWFRFSMhGzPt9R5JQ",
  "key2": "3SamHrctmLEWWECHqnFBa6rrCjojuM5ziMqSeWqPZXcoNnS9Ep4doxbVkcHfwkotoTsYrKRsyWs3K5XSZs8enxyK",
  "key3": "7edZwL7CBqhptD381wtYgcvW45jRG62hr7huMmQuZr7k3TQPvp6vtpakAdrLYTYxqJkNfttdHeNPh2csUfj71v7",
  "key4": "Qeit1RYgodyFr9vuvF8nt7ArsgtzBUxssCqq8pSJNDGoZQa8f5tUiKV4yDCrxyZ24aa2ibefxh2k5Duwi5kr137",
  "key5": "3Q5utGNUbvYiUEHUpMy6PipY9mvJeT7DNWBsWuxmn4MfPBKgQ4JtdCXZHsX84eAxVwtSvpqKUqGTb3SYKvdYYtkX",
  "key6": "35cCVY8nmNCdKFhDNbigUQncNZQroHFkyjrH1YpHYqE7p8UVkiTLQgCpKec7xbXUxEgNDVodBeHoEt4BBosb3DQa",
  "key7": "64VocCLLKao8W8z2mPNY4hKSASF3o8RC3b75bsnKaVHxBGCpYGWiDxv7QJXmoFQfgGgJWLPzY2hammuktrxaBNBd",
  "key8": "5VdEMJpFgjtibJwhxeE7xQezPWK6Do7a7csiguwCKkcAWc3oy2EQr1Dy6zoxi8k1XzohhUnrL4fcfn8DPcPDCmSk",
  "key9": "2BxX5yXWHDH5bhQHLxGiXkorR57QuGx5ZPbdU4T5wvbBt7mDfWGsyiRhhBUirfDwExEXhykDkwxymeHbMBrtzdSG",
  "key10": "2ahq7AF2AQefHUevQbajBbxgLyWyWDn2cjMDjz8W6NQ95fg1RWrEkPRLhhKFmK4PM3nyp61epJ4kKArrg1ZTf3PS",
  "key11": "4ExvevH6mjcNQWyAfmh3uLXsmmeeD6vp7ResCxK2R8PgiZNgUZvyV5kkgQaK4GrZNx2m2S4TvqYc5y3gNNW6pRCh",
  "key12": "3JFXvXYxVrL4a3RgXPzNcA9eNJNqeKfz2mafc1G6rWCA32W57si2emR9ETxRrGRmqbZwg1YGGoUcNo8kgMCTZ6dk",
  "key13": "2PaCYdYd4RVFxj4Fngy9J8fC67WSi7YmYHCZPBQ5w4HCVYgQGN5ocKPAYvYyGHmJqe1SPPLQBnVdXU8AAxosrkNt",
  "key14": "2fPBBR7hEqKLNkXugpGRPMWQBbAhAgjAnaoKzHLmJndAMm1HMNnLFnfddsdRzLzLLjjFTPL4CskFQCHvKFFcRMzr",
  "key15": "RuaoMrAHfWHabznb5pHUy5BXEMpsUDWFS2jXMcF2DHDSo9qpUYSnJ7K5y43nV1PfgXq3V11cyMoiHtV8A5QAgz2",
  "key16": "3whcrtXBq9DfDdrW7GEAYo2vaNqz1jpZwZC3K7zstDjkg2cP764Ria3VRgVSQweahPmreCwZ32vZS7fGNSdVbAgW",
  "key17": "ZSFc5qnTnXJtiCNmfs4W85N1SJbZUjjmtEwBLBTSTB6Hmjk7FQdxJsnEc8T92eon3ZcDVHmVtWVfzvzgJsTE8BP",
  "key18": "3bomjiFAMVpxhF1pRtgkwX6HojDxuFAogvT1kGVYsmTKCawDdQBizET1MVBqmjnXfCUXat3mtsQSPZD1sWD7REsC",
  "key19": "3CkcWCVggZoda32CJE1W5N2KYXbVP1Wz9jWF6Ynp2phzL4ujJL7rhytG4QiTTak7ocGmVtjyMewrrmrWjhiRbyCF",
  "key20": "3QoHV19Uq1EjdA1GoDFi8Snx4SzUVhCm6W7GLU59KrRpuRtVrCSErc2jdqkUeMNC1HtKQis9dPZQXCtmoSUGQi8S",
  "key21": "5MhcqX7xaSc1sVip2qth26c7SFWemHrY8oLRJU5yVQ8a9vooRHukqk93XUJMnoJhBDayYa3CXx4J27moA8LhtcQ8",
  "key22": "49gQyhFa7XeYSiJX5GjW7WPeKtH87ACDK3tViYTN1MHLA9EFrw3nnYVuFfMnDqZqfqiMkHHRqpxfE4SYap64sRQQ",
  "key23": "3KgQsSfNAdJ7uRo4VB5JAjAPetgxmfFxE3tSiUYuyFfjoxEC99jDYfWyLc8x5Skn8oyHFCVVzuSkig6E9SDLTT1W",
  "key24": "4AUKVm2i8PxGQwqCvinCoek7TQ4v7Mgp5Rw1hHE4bekWXaMxmfoDeTQNKPoKLs8fhrSYCJWqLN7Z6XJGcXJToyHy",
  "key25": "5oVKqbQjkU4fWzQEgwZNdNutFC35KN3oBsDa9Was9q65BDsFzSrpHq5AUY4ULRfeN34MLATLmrwGUFxSuAo3qbiq",
  "key26": "3Bi3yqbJh35GUd2RLiqqr8RBFLgeajH3a4HLy5Y6cKWUL1fxeLUNpKCdKT9U7Em73fRjrA7163r4AAPZ4UQNHqhF",
  "key27": "petJHbGaoiHQkNzVFHBAP53t8e95zMg5ska7x8rkzVUrHeh6PcPW3zdm5oHCarjFkrPRQe8YKoP5aiax54qiyQq",
  "key28": "xPYQLnt9XFaKKTQUfdGtoCVgN2aXmNR4Pkg2qHRV4crPFfzsyneD6WvpKE8z4t3iz8oFFiSvAmqVBoZK7q2A1pF",
  "key29": "4JXxvRr1CrEZXb3hzedAejskRtBPtKmsDzVqL6Vj9w6tpAFq6D7ydtVgD5kYwFAKMSnD8EPKvxEybK94PtdS1Hwz",
  "key30": "2Q3i55iKBgXJFkZimnd6ayum91RbzVbQ3RY1uqQbB1BsuD78WX83HLaN262cTzx64CxLPrPcZGmXGk7x3fmpL5ru",
  "key31": "3FrGCaHgBk32vjzRGA7p2cSqKShcNEAneZBZxYckfPWSALh1cu7RThQTpmgSwwARcZ3P9bHda1nm8bytbkQjBT8w",
  "key32": "2itjpE9nv7W4q8mnmaRd6dUyQKzKy9ZjitjJqq4HsPpBsKLX2ejgiRthcRQAeMzuytmfV143wkjk33GuywhxR7HA"
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
