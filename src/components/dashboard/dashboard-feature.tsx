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
    "5T8goUJPuVDLL55b5fW2UxDvkaBJLv9LPD6kbcu6WwA238VFCzLrt8Rm6ZKa4VL4fRUoogjqVT4Wjz43Wi7tNr5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEDUrMqdXyuip9sMked8Jy6hNgSaERKyxmrgC5Kgpo7ErfKF88VhX4mKsCWRhJwQgehw29qPaCTiUGSPaYE2ZFB",
  "key1": "2unLDTjVdZvgfwvzSnzirQS7QqoUmPTxCGuExMszGaA6RBdBMtKCx4XFM7wrvCsjaJv8MafHKiJEUMK5sKYDbEKL",
  "key2": "49rsaYYQnxr68pCZWj9mdNCbQYp2dJuHgCWov7N6CDVZoGVFMw1HBwWmqTPFRdaREgJbZyhnJHPwNJqcHcK9Brbn",
  "key3": "5jKq5smwtTBw4qQQnUbGWEYQhYgxgcdrbfb6WrtGzUy2FTadkaWAuh8u229EZmTuoMSpoStJYN99NRNrXtRwgHbB",
  "key4": "43fSvo7GsSxUdC9QH8HUZvM36YUjxA3TtsAMozHGTXaUhwayYE6ZcJWRHh82Q574BkLECbxV3SC6zyxeMRBriQi7",
  "key5": "31HhyHXRFMgptjQeiKKUqzc76qv8GY2uTyGD16HitMbtMwqAgvsUoq37hXU17UPsXuiifNptQGAJz5pNFd4d2hfm",
  "key6": "4hGKy33hfAje6XM6oh1xHWnj5LgWuMHqQy9A1QwuhrUKEe6v38LPxNA8DsQamJnn1sXEhfDzFuNU43T5mh7DY7Ew",
  "key7": "D4nEmWbVRyRfYRQqXJY51dFZzF2sV62o7Y4h7iH5XUfkJAdXKfsEKSnr2FYNHNnWxALN792RF48iW4uuejB4cyW",
  "key8": "4wbawAwNy6rRk85PHLByze1F9BqkTXFoWWQyQeKocdANvesXbSvp4kA8Z8bRGC9H27BT9RCKm4V9aqnrJ9Q27ZQd",
  "key9": "2g9jxSX3JsU4dREPvbUoeWaPYvSdtR22bTxsvLtuezyMmCQKXeJ7qnTFbNwnQw7jAz6Pw91hEGh4KPTBJ3T2nego",
  "key10": "54uvKKBN7yDbJRxfQj7veRjC9yUu9aSrSYVwjUiXX9LyP11Us3VcLnqrKmFgoAK1eTNPFYqj2NTo8hmFMBGwT6qS",
  "key11": "2nVc1rC2YZggkCEvQDiwEXToD41gaYmAp9NtmZQy5GQ4ULeeTQwTP6oaqEiVJcgiJvvcL8bfUdVZb2yY5NCqK73T",
  "key12": "2W9DCfvntZk1GmDbMXxejnh1gtLAusgDYTi9Ck16shJ55rrE27PdQHiDQ1JABJg3Si6eZGr4uahUryaRdbtLZ5fc",
  "key13": "Cv8uuqCtPGiiP4LFdJdmMDf979p8onVwEzp9yDjr2gBi5ZHq3voyV12wKzFccc6KZGrTNyAW6Tdanio6YNG7KH6",
  "key14": "5VyUiywbQKnfsesxGYRvKgXgdZw2ghKwQcUYeMDH8krKLnUe1L9zKF3ER35oNdbT5iMkbVvVS8hdTZWwFJDWpgdB",
  "key15": "3riDwN7C4XPLBo5D4ABAqhfU8DJDXt5B66Ur9yveAxjWwY23RrpzvQJQqYPsY3deDtfuqjtMKp41611dXpZ5WQQ",
  "key16": "vQzTzUvDeqoGMLPoarBU3BJp79SN4ad9eV4Q6wGare3aXdJnz6teHp1m1apJaDgEMB5FEjkwDYRtFfpBVYn6XFU",
  "key17": "JzrSjJy6j9JZZqcxRmwKBy5EBS9Pk88JAedc2FDkpn7tghsKMgZQnfGid25sx6RSRLS6rs5WeFp6ZUcjnPAu5YN",
  "key18": "2KhMjS2JQUfBPpU2EC5pJnrhwVms9ZVyHH3q7zrF8EkUZXesbnVEQZQqHuRqD3ow8PnQutMnVfW5JBnq5Dc6R3Tg",
  "key19": "48zDbc3i9XU81hrUvngCWtBrwmDoW5phqVerUpEGjwimfqqtEfACGb6vuxxLutJRv53cGrUvSwUoH6JxstAKjGyk",
  "key20": "2zGa7DeEoYeM7WxvBvRsCkpDYu8BWaGRzwngeojeA3yS2d9Y9VYqDomKaCJsnJ9zRLqkGhGzcgZVczqzEcVMNhFB",
  "key21": "5uYcPDnAa6BfDTeonPH2t9N5CLcpYcsmfDTzNXALUwHUR3Gu3DNFn43WTJU7itRaNkQrcuqcyLZEtDHSFMGgCMpc",
  "key22": "5zVTGEMsL5V3RKFXXohr31umwd4sXBncD4A5xLWXujG3Uc4yMnY7fe8NdAddkGmwSfqVDoWzxyUbZ52zzex5CpRu",
  "key23": "4UgyVaFcfE1TsYkVocLyyyBFqvs3QHmvr6dKuvQJkG34r9Votdas3M4AKxraKubkoqxZfvHgMdXvxWFR41ScMmP7",
  "key24": "skEk7BmGctF4PFcAN9FZfgKQ37VMzkJKbfm5x1BmDmrUiJTg5ucskPSgRQvqtGTxBYmY5eCFpDtwoe5qShevH7c",
  "key25": "5G4QAPyaHrym1B3mVyqGhMgbbhQv1EJt9djA2djd1gntSCuam6ea6pirF6tijcTiSKfjmFKEnXQNb7pVpYVHzZq5",
  "key26": "3DBdMkXHcW7yVzqagrtA5TR7ygTw6fhhi6AYsbS84CtvaFW7vTNfXhciHHb3pQDZM5p6k295CnzX6sxxEMZtLtau",
  "key27": "3FHoRbqDuJFtEYoXVVjLqcqDMyaaPt5FMui9rZG1csED3obpyTLRLsGPaEi3kBv4WZj7Po6JPTTKLGGReGLpXUFL",
  "key28": "4qY6jh2ZPsq1gwzy86JVbRmzVPes5U8bjBkDDTkmtFoUjADNfghAAYkfo1sXzVVMj2wiU4axz5sftGtPpsqSjHFa",
  "key29": "567GU5tEEh6xor8sh6qdkbATTWtsmXqbQZCq2nf1U6Q3s6aZhSKuRQtSdauyVy1KFv1H59HFQdnpRdSBY9uqmhYy",
  "key30": "3UMUY23wDJVXbkPsJ8LiDk7k8KuYb3GK9xNudYwRbAJwTX4p5TbvUs4V3iHed4thPDxdgXTGTGzdYxhJL9Lx6BKU",
  "key31": "5RujmavCXwQenvM6pbBBYkVWdL6uFPGTAHhvDhcZaXBS9w6kDzEJNgVXv5sVydNM9FVHpyxJp9AFApw5fAV536Yb"
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
