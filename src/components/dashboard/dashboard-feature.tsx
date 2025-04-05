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
    "43V7632KM3EAYFsVxCPD4LAew6L7NDrqiKbwwgb7FKRXLyxn8pkAprtoLibL56RfWr8YQ2HzdjiQvenrRJuYLooR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JSwft88YGR2BikUFgWTZ5Gggq6o44bBf8dazWTSaLyLQNJxVGuwjQELNwzHFSon383LmFsGDv13jvg6U5D6jZ9",
  "key1": "63NRqyzJ1Qjca5Zn9PcKo7Q85eGNyPY5KXhDfEo1BxgQPNG869wFexYBjd8xmESbko8qopucoX6B6qeW6RydrkAA",
  "key2": "3jdyoQugSquwAvCA3sYy8mjVNoDGK5V47kdBrEbuFwrQUUaGsvL6uhmvBrd8eMZLo8fqPzhttwt4bpSrR6ZA43Qm",
  "key3": "3juZX8NgH9LrzF9oUxZMnavTK3HtYqAkQXhyR3PixKmzLYqgqamFjASXKXBnY6E2cocNnaKmHMtbLc8ioKGPMDcE",
  "key4": "EwfCsNYiY9nYEQ6jrkQijNx8TqnkHnQKbxEuwEaHJ2HwYJVnrRYESM4LKLQdYh9AxS2dgX8S192ezvhQULDeaHj",
  "key5": "RLP2sNHQ9mdNnYqDHJVdL1PumD3B5ZMVnAkSGSUPkdFDFSfzgDC58L9n9PJTh9xydmthq4C8KY9XDRM4xQZrnGR",
  "key6": "5W76319kVfZizHtpxQFYSaWMwhHXYNv6xbWoHGvyZ2U8s7KPrv6Lzz6awo79WzzWfHLQpJp1jY9Cxs28qV9qujCw",
  "key7": "2GZYhaRzQoKYeZBZRJRWArLdZe5XeD7aQEw6mgFfhNht4hUq4MDZZWhZoxtKxtdvofRqwXirz7UxDUFvNfn45GHw",
  "key8": "YSD5m9jeBqHHBuR1KgdZN996U9bWvRnUspVStwhFqmcybQrk3f69QwZZVL4RB7iP9cZ9nnnc9kBnNBwUETVDAcm",
  "key9": "2TvxWwcUbJwzhNcL2v7juyhQjxM9DjZ6UnnqRDUxr5j9n8QvZLPkQcaZvv4ZpbeTD7VbuBUutd7TV2GWem8SXcUu",
  "key10": "2JytQmehVbBGKFPom5eK4LW4Jyhkb8NrVMj89NHZu4fdCDxVaNk1kH8SXGHgvGKFENpEqbo9M124omFuKo6ya7Zg",
  "key11": "3XfvQNDyPH1UjnpRQUdqB77EG3KKnQa5rvSvjEAVgzJ75Baw8D6W9EHNc48YhFaR4ZCTeT1GXF1vBzEY7yPG85iG",
  "key12": "ct7jSuqZHtT7q14VXuoqpuYkBkbHsPu4QK5dwBsVqLqMvDU1UZ25YzdeBjrFDYDkvYRibRZxLx9YxTHQrFaMjXA",
  "key13": "3srHS8xS5Cf8YEXLbuyBUenAjonV2oBWCwkQT27qsZfE6GpX3aYmzfz8Sty3Dm1SA1qtZRZqGvziSrL4ZCLSg7PT",
  "key14": "2Y9MSmkv2KSxz2JwmqRQ9HNC6wjZZEg73ZBirnczRCkuffKa9spKU8PgwN2pFrMXQJGAyqA59mcNjLx6mnzzAY5H",
  "key15": "4ofc3ev56hnFiTFnqec5vkXXgV1VKptvkUyubdGJSdRBAXFG84g8u23g7ckJ88QLtFtJYm2mqa6NvxMZnJr1nHN9",
  "key16": "5CXy8JkXzzijxnRQxdjKbqfps95NMvkAbbsJ9fH1G2RKJud7Z8W5xJqSdKMGV7YJaTVux1HpDHqVRaP6A6NSwX6a",
  "key17": "3Vpdy3RQcVrdyCK3md23JiAca9FYV74tbWzQbw36YSQWx7H7rx3DNUkGDFeFetsNSqPwWUCDVq8iAGPETmmgCyWU",
  "key18": "a3nXRmCfvSkw2QoVb5ZhpLTsfzvnQbWiiETBPYH6DKBpW7v3TbBgc61Gh2uQJbUyppM6GDAY9zP2Nx9pQQauLrd",
  "key19": "2hiu44k6cc1aG5V2URajamdKvoLp9eQh8cAaTA6QvStZVJRxtiTghp1fndm5BMjgAPrXdjGNCSUk8WdERm9pe11H",
  "key20": "4s1xdbf58aE3q57jt992xBMARR8WiM7usNic6GtyX9uFNCUccGdVfhxD4oScFmRLcnBdCZD553TU5BRpzurgePgz",
  "key21": "2P6zhY11WnLeLGzxz2xprGrVCD27Xsm3xuSGaghwC9BcwoMXPNLkrYJBDYiy6jkmHbqFge8gqiHxxXngN8Z6MuQZ",
  "key22": "4Pnga7C8bsYANBsxKvdUGnPMzNoiLri58CZrjmUNgQGavTpk913aAXi7PwhGHJvDhVNLsAqJggAjTHqtpmNuHwo",
  "key23": "5DXq9gWuYdNvjcmkVvHFTRNNJ9hyrkXLUbjSBvzA7AcsVkGjHYPgqi8Y7KPJiLUrFqgek9csytD8dnDsit73octw",
  "key24": "39sdvXgxDc7PpTVB7GnzrBLV6JeAiHPBDxKjRd2KhFxySeYhVpwuR73w1FqhjAeZ871pFz1hZxyhaQ17c6aVvLn7",
  "key25": "48SdsMQAVfaeqDULgrs452bAxHGEcYjNCFSuaJ5Ksrdj1RCvkvePJgdwUsyAaJTi8ZEQW3gJ8pRgeda6FAYQfG6X",
  "key26": "4DkAPu2qrxKPAkJ8KqEG7EFYAfw322nhP5a5aKsfoZtkrA2XnTD6Esp6ym7YvnHUBUmzuoJBfMMyiSC64swEnVUM",
  "key27": "3efH9EE3FZgQCaq8MCnequkj5xhjvKVmHA7xEXZb5fCAXgjaacsKbZPpYKGbBx3C8FkiBdpJ9osiLyd4RXsr6zLc",
  "key28": "5NfuDfk6oDhPrmm6pvK3LJvuG7hNVRr5s6yozabKbwjrU4Pt9EfymVS9XGZgYYQWTqbvqukRYaS6QckyekJjnoCS",
  "key29": "3bUKwxcrQihmJ13wxV3Qfic9bk26Egv4UknCgayYLPoApshJr7YmzYxdJz6gzBG6oARYxmGBvXqGhFKh3eS8AL91",
  "key30": "4g8awdSLfz1hcHgPaxDKj1EbFSqpd4Pj2FF5EwF3sst9dE7FsSGtJ4XSEEukL2KJ5uGgEhF3iiFP7gWncPuEsAoK",
  "key31": "32V41XuN4TvoVFWopx9veYu2BpgtLNMywrFTYYi14R7Lab8nR9Pp6CTGXHxuw5DUuEwcUpScrhPGzi3tuWAaGd2P"
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
