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
    "zkEDzqQkvhoLzT3rghY8i9hHLVJwpgUybNLvA5rnZa7o43RTuB57RocaD1V9V4Y419PM9vyntyzCzV8YUJwQCWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DM2bKwPgyGP3yy51WkjjrMefAbXLfENZ1zEiiySkFNK9B55CEEf7PaMEBtCZCxWWUVoEYDEgaa3FuSup7kbU3gH",
  "key1": "5JUguwTRsiHTebQHhkBPuo2RYHsSNd837vkmrEPWae1M17y33hTUWkZdKXeUDV3aBqpLF6bVFZqGpxUkmNRtanjJ",
  "key2": "3jTaQL98c1Pjc3t4AySoz9UxGiaVNCFeN3X9rBNUJYn88dCZwjJELFx6uB1G4WyHQh4QrUVbCVMvM1HMcLbpBQ6D",
  "key3": "59pCzcQNASiLo9gykfhCQZZ4pyUcZv9qCLygY3RRyNYcpUvWuNxGrvdgAXF9azPGEc4ELY4n8jju4FqP3KZous2d",
  "key4": "Fzakuix77oTgAtG7fewHcY9X7iWUDbVXts5YNWFx5KJnrojzWjjjpLbSHzMWeJTPBouBTpMMVW7Xbtz1xnh5C88",
  "key5": "Mer5LNU4qGaiSHgBzBu3HxyXuYvyfnr14BL3nNStEd6KBWQWWb3KksmYNYB5ZkeyRYNWpXrJrcr8UVcMxMpR8UR",
  "key6": "62PT1zhr22BiDPFnu9ptCmxUPfo9tGgepQR9HgjEK6dEVQikGqVjHeZ4LjZqPMcnP5xsKxMFVjAc4PiMJSWwbWQA",
  "key7": "cPtYxQiXvC9ZpXxecc67vRdfUTdTG6JUJBnbshCbmR5bWCtNvscGiCt7c7xp7obyZ5Q6bLyo5UzxWopuhpftTaW",
  "key8": "jQzqajDNgHqmyfApaF1EdbRHUewshAZz4GMtu9zfRzpgSGQ1t8BKSbJPHS4wXys5n2PsyQ5N9EPoCMRNzKpoKMe",
  "key9": "5MDDQXpAPtURLk5iu1N89Bu7my8JhXMFvjLdEj1owcDVm29Q6yY42GMTBq2FByd539KYnbmGhsnpyEP6wZE5D7Hj",
  "key10": "4JtNyTnypiUJJfgncGBThfiXKgqFemygfJjLash9jN84D1zWLb8x4GTp7MSC8GNRAL9y4fzZSiocUgVqmxKHN2Kj",
  "key11": "6nSCEMT2eTaxTBjnUJE6mmXhJoXWyibAMSKHEDXryzrSaNaeiap6aKb7bkEHHWre54kWZpH4DiYXKpqbrou7AkM",
  "key12": "2vy2T9pvYBHypodcybHYorfNn5tSRZDqBFNAmga7ibtJ2ps5cdzTHxd2AStaPa9Jxe7uBpu2fYjS8hb99C8DVsbY",
  "key13": "5NLiVwRH6hTidcko3ZqyC82rKtF6sTVX4ridDwEJ7nQF4kXWPKVFJ21GAV2LU6qFowGvECMqyEmqin4A8a4yMGiW",
  "key14": "5KfzcAScNgcpATnpaj7FDnGWQDgBQr7mNGaQNzNzh8mjReP6b85iPh6KFWvpvXUvxz2pkTD9X5WWUC3Fk7fTMiU2",
  "key15": "5HwKjcDN25NEn2t9pHFK4zTLjTxWXNyJ66ZtRyFpLL1wnaY2CjZwREDt9Ac2rFcz9nzcBZjQjbszDwMScbg9Ywz7",
  "key16": "3wbRRP2SyyadhGBjkckVzc3r9rADkDdHQcukyRNEmqEZ1nuZv1BCfzYMNDWfprEDqqkU4w11kbqChk9sBVLEBg3S",
  "key17": "4Rj9ZCwsjhYsgYbLZoqCrBJivKksPz9svGTDZz6ftWvPPUd5B8NK7ir3Zimk8fLEAwonwz1i7eC6HYn6y4HpMEmk",
  "key18": "4dPfqRepE5k85e34yunodF6SLKMyN5SwLHzFNHLmN5u1y1RjWjXvgMy3CfxjABez8nKEfzbtbCqrF1K3f5VjmmB4",
  "key19": "5TtdKJ3mFMHhg87DMwsiGqdvntvjYabZizUCYcFESVtnGV4am4W7tWJmuTzCDCjF5MPy7n91CH6Ni6Hc9n7yACGi",
  "key20": "4NkAPZFxUM9uzLBxdvfRwZZscvzsR5vehBTLSBPHLA1V3YXX7SwRyqkcVPigog3R1qEM5JZQEeHT8AFkfYmSS2dq",
  "key21": "2j1vpc2QfvfidS65icRytSpu3VoTshqRFMxs9WpzoB5b9KkbW5YLHT6EAAD1toHNyR23zfzbPfoC16Xc6yL59H6r",
  "key22": "4i3QLMU46k23sWH3TACdaQ3PxPCRraQor3yfbpyVvFU67w5MTY6JXEcP7gy1mwVqxb3HCn6xA3HNZPMmGYW9wDky",
  "key23": "4zb6iyLUiDLChsxp8DtCMXELD2d3MQLbsd6Fs7GfZFFWyEineVBTY611cNKyT8RihZ5EN6JaWAUVLAFKcmyk6Btj",
  "key24": "4x11nG9LupfdCcuRvK5L4q3q3sihF7q6Zrn8YgtFsRVWKmi7KQ9rkptfwKGWAuYDRuMfDogcdU5AVyZdUjcgmpxS",
  "key25": "qF3BDYe6NfbwvHXVVzgpzANXxA6BzExCmrHb4qL4gvZENFXQeQohfBybaDugHgG9uyV4wXA6Tn7vG4Q93qyfWy2",
  "key26": "4BvCLRZ3fscUzTHofz9DzJ4ZTFpwUkVC7o45QeKvKgEn1A1qkhyXXntptkpVk5RYWpniyUpeXHvCTmQnFsmBfpqF",
  "key27": "5BhoYZsYy6PjAyD4uLEv5JfGpgnZpy9pcALNx39qZib1A4jzScwT511f8mq7GJTGUMsHEXgoao1TzBJMPERkkVbj",
  "key28": "3dL6kcYAYyLv9RPi5YtgsvS9bFPaHSoJW4kHAMWfzhoBE9KpLNMKRQWtDHXjNswmrBK5ugvN4egN42kuDmw6aCfJ",
  "key29": "2ru6WBwvpqE7KZpdxi2NKv2CzfzSbPr2oF5QvEPLE5Pzf3pAKZib3UwuYtn8JecgXRs1uarr6eGcuYTmDbdK7UcL",
  "key30": "55Ukd1RdUNhQSJJ6s9EkkXK35ViuvCxudW76G8Ck2LayvmqQxy5AfYsr8hhhwK6sFooMHxzPKwE8oN9ektVzNJkH"
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
