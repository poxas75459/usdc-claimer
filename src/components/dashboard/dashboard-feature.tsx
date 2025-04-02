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
    "5oE7NY8TWWdjnQKcDcPZN9kpWkL9s6jsRwS8j1qWxsmrGSH6UHkiFzaB5CkWmTPHpL26yUCMvgQVaRM9o4NdE9kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iyTu1UKa2mfTAY9gpwSxGQFX8So2x2u6ubfFKTk1uuFeNquiBy1Ujp4RagaTqDPer85fzkt1Jb1pBBUKT458mD",
  "key1": "armP5sPB8j7gDb69SDBRf7KHSqwRN8eQsBLGdFJPWjrs9HmHXXkNjttFweReswtKV79pfD9dY55RU75RV82HwDx",
  "key2": "2v5hEeErcvSBFf53wb3MEVnnkBRjSVYSK31vjXBbZdMFV9s5FC2LdY2HTdpa9VQQSEuacybUTqnvXFZfHrTDKqoJ",
  "key3": "s5vaAjWXDiKpdRvHjDKA9CE415SWKy7GLeDZrZyyE95otQkZ2Trhc5QMMTv4g8tLEYympvAoiCW24WkeZ7FQGid",
  "key4": "4J9UpScv6HcsaPkKmGQj51udDvvkAPSeQ8gt29R25KpYw83wgUBQGpPNG14H8YyovheofBUwXTLWLhp83xxS9pQc",
  "key5": "3WLxtEDNpqDhjraTSqwxzLwYFhq6VvyEDpu72HN3ZNv7zLSFzSZhK2MPn4Z61X85QHFd9b6BssVDUVpi2vUH3FMG",
  "key6": "5F9X4vtug6QkJjwX4mvsVKaefsB7BvRW4kgeNPiDNZXm8iBFGtjuKGWLk4P3fbD9hkxJMyJREHprrmWn9saXhQKP",
  "key7": "mavWZPi6EepieLso3rrRUdjpAe9UBqUqUuur3BgrAG1SjvMXLAcXvzfpG3NZE9jYh9ngPkHjA6hRNfoE4ZABEGq",
  "key8": "25tiV8NjqzFvEXZepznAduxtnhucGWdVRSpYVVQUYtyyM1sgqJMuQ6HTqnPE8B1zfvay3No8H7ioDyqR1bPCCZjw",
  "key9": "5NwRpMsLTzuNWWRXurVJCFk5fgRKTj8nwSEjHfDk46dF6w7hZhKaYgMVsMaxhFrDYkdfJDiZ3ZWrQecDBwQCdPi2",
  "key10": "22UXRon5CA5X7oEV6eQwXPqEx5kHbLxaniuoddxs1tw8ghhdYJGWzfE1ADS35fWrQVhsR4rnTisTzn2or8YsFpER",
  "key11": "3SwZ7EvHPfeUibJcUCeiBBxomSVrMXWfaCJgHYFP1XJiWuyKoCM9RuutgR6iLsZ2FGNboJqckoqmYZBGSUKaQh2v",
  "key12": "5FahNwqqQYMNzLqScXv6BBMB1NBdFGMkXGgGz3HghfXFTKCqaf1gRbDMpfCT13UuDBM2t5NNLJogVfo17Bi72fo8",
  "key13": "28TvJQXH1v1WjEWHc2u9C4AzDNALmVdeja6B74Z4JLtF2fdafSZBrrRwYKu6SKZVCKCrxupmjxACNRVFGgzidQHb",
  "key14": "5PJdeJPSt9dLasFodgZ863eL6b49TiDD7xZYVadrmdVLnByUpGzTk3pFBEcS69vBQYg3UweyyV3A4AyuQxN4MeVo",
  "key15": "gVUQKd5ycmT9vwUJKfW1SWgiWqRxvVXkgWewMjPJrtR6wQ6cCp83DTEc4MwmN7x3EXCd3YLZc5gpmQXA8n3yEbh",
  "key16": "329tx2MaAepfgSC6PgfncgvpKFBs3Z1ce2kymdj18kBtyxXtUUagoCWY1oX3VZLuHiYapTQiMGjmgN8LBUSLBnje",
  "key17": "4tRA475DMR4jaahi29MUpnyvajhuB9JsbTaRdU4NFaJcB9QbyhHNP86Cnz48SVd7YWymMTKrMnB8JGyPAKR5X9cB",
  "key18": "2aygQWnzpMs5hNzaLfnHoqW6mdUV4yBB3TrKomGqeKqdWfLtEjTsoRWqQ89gAxsaNrnyMtrUuJTBTxJNPbE3eXWA",
  "key19": "32Yj1yWj9hQzmwbHpAeJDbdhstkRojVeYyLzUA7RktJmHTkmSCY5sUTCNXDToMFNUtphMS8uRHeJsi6psrS7ERDF",
  "key20": "FdYZNKjYDsKJs9EEmZbxcyHYnCdeBfkew6vSDDKdPydtkJ6ezJVbHLmdTFysJ2WqyNSRbEJMsZK6Rvwq9BVTWmZ",
  "key21": "jRMEFVtq4jijPMN9DR2LPnhq3UKuyStouDRvfPjSrHXXLFshvuAV8suoYzwzkG3rZKNugZfJqHRCBtecDqmU45H",
  "key22": "2qa5GjB8WFfPZZAasy9ERUUHb8bx9kN18RB5KGDiSa4fxG8r8ke453t1sbMt64DwwvaebiM2ZygQ6wurn5m6pLu8",
  "key23": "5NyU7tzYXUZJZC25p5rmpAp9NgUNZ6s5JtfT2kbJmxpQRhspi7etf6Hw5vnLhocnmbUt3GTmXE1N3Jck8zea7xp8",
  "key24": "2sshS9VtsZhZEpS7iYQEuH6uoPo73yZ8EPN4ZXFsi9JnN3iNu8oC2Wmb4N8FuMpW4zJD2KzUepd63etsQZ7Rxg5M",
  "key25": "32amVN349w4TESc8uA6vcSw6hR3tbiXhZztYfbQFuYuF6TR9r9SN2prgZE5CEWQdV1qafNZibswoniLQtQCTYMvq"
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
