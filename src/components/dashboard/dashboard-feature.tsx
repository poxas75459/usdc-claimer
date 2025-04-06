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
    "2zqQG6ciHPwrYRGQEapr363vCmJhu1YWgKeKvC765MLDGikGfgZ6ef4bDmjcPUcBGNZfFSUoJrn7XobsnLDMFccv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zAompjBpAVN3f9s5riMBqyU3yG8vm8n9NCp2omhjXKhJi4QDf286QD8xSSBbtWewo2h14A5nsvjrq3yP27EeZt",
  "key1": "3WvehXC91XabkTLfyQ2ssXxrjW1qeFSQPV73V8RcTZ885mopqLUGruRctgHETAzHGnPLpzWqssWGCTzXnH2zCJbV",
  "key2": "2Lqi2EVhj6MWWi6mpBoDC326P1QN44RTWvpktWTRjHAEH4FSQGhpUqCVtD3PR2t4uq7oh4yzj6Pr3JPpmPnqaGnf",
  "key3": "27BetTGdtzWjYFqdXCrrsm6jhj8pkfpTnL8kxc4118S9rwD1euHMESH4Ukp9FZphW6ew9Symc2xHawDHtsK871zS",
  "key4": "2BcqnQLtg3rQxuaahDQNXXizMtB8LrW2ubXTr5GARrWuhZS9nMUskcy3L2oMb9ixP8oPhniiTKhz7iK6vBTccdQk",
  "key5": "3wXP7N1cREKZWDsY8PqHz1r8KuCHnSttJ2UbZuP8ADfSEW3Yi2p2SjazzAfkcrPFmMpurzSrXMh12FQEuuqKcQgq",
  "key6": "5TXwumX15rvFawWXai4Vv4b9nh5RNx9GZ8TwcdoWmx3mwBNTvw38JnEoYHW7tsojt7McQwHpSXDBNC1gJ7RkH8h",
  "key7": "3y3g2xGbCbmywt1kU3B3Bk1z2MweWNE5a3eJ2i5Wnz4TDEqXt1qmdnCi4JRKUZ2pcXKZRggR33yHQEtdmHcPSULf",
  "key8": "BN1mT2Lrd2ShSS5G7rDA16cjNbjj5S6zPtEHE9G4HoqVNANp6nCfvAkqfqferC6oexYrVzE4Y1hRTsxKbjh6bfT",
  "key9": "5vjChnW1gmNErQqhU9nqxuFLYDoZo5smyjbSxgEiYSQ8NvSDPqDHE51PAjfTuQfCAnw9ett68h9qq8nuzQurvMaF",
  "key10": "2pzsLx5PqWN4Zb7qUCv86SAarZxckW1reYYD2BqRYUe6urSXgHZjUKNn474iY9UJ5UQ4D5ZArAR6vYtsjJMSLHiy",
  "key11": "2dT5MZAhZyJbXKt56WqjXWFqTKnYqSa1i1tE4WpreXLjD7tcWgMyTa1ozHVb3B5ALi1tFx8rmGMHWcSmHQV94hhu",
  "key12": "4hv7zc35Ec7FJ2nnJ7jWZAJiNZMZwsQpe4uw7AXEm8L9bPEyjd25ZY8eXsjfLjTEtBVwZ3zr9hdkjGk8rPmrhkva",
  "key13": "28m4F3EgaaYXhei4vd9NoT8LfEaL22g2yXZvbQZojUxGWnjVw5vfzMHNkAR98qiVWVpx24tz4MFmMx6dEY693bXj",
  "key14": "gEtVStinenCsodBPZbHBtCnQCA31hib7TQePBiy46hV1ZGXD7VBUtb6e9HTskj4huQZENLHzRjaGE345X5vwaeU",
  "key15": "4QkT5z2cetUHTqA2DEEtt88bx3ERQQcVHcM82CBVAtQbcJFmcXSHNSSMVA69q6hYd4sXzqsNvxCsi6mYxG8GkWAz",
  "key16": "3ysL7R2YMh5iMfdQN286HHQrjzKuXGzeW4mJeBPE3vfuyTxoMPacGrBhcTx9gcwtbzn1skaaj7if2JZWCTNwYbut",
  "key17": "5KkvMtqLD131C5pHsPTfdWjn6YGpSvWsYwRMHWfbTqBaNmQnRwNzRZsT7Qo8p1WcDRJvSUkgUq1T3tmjfApToGEr",
  "key18": "3URnwEQ3bZMs7RN9iyEB4sqq2q3BdZaxqA4qDbWXWFYMUer7eb9K5y9r3PMK7YZMqf8z5h1dLamRezQbYhHZeqR3",
  "key19": "2kfpNN2pGRKMGeYiLm5fhdR4K4VPx4jwCLdYTEW8kRve2R9yaNErxgMjEx9RUd1cQ6nN6hhQtgvH4bQVrh69Z4A9",
  "key20": "5ckzUKvViFVQpAgH58roxNMxortnirdxjjfaT73mSjVuBJMKRt9CXzDc3ctAAjGUEv2AsfcFEB9smYzWcA7SC4UN",
  "key21": "3jt6Qmpa9yEewuLShN3ZDo7rS1bdt6JZPPKEpD3tabQffxAJAFb44nREzCovJn8RhJjUC3akjCAuJ2drzJ1CTwSm",
  "key22": "herpjiE989VANmGEVD7BanDGhbY2ekLnhixywepQ8LqJhXFzRtydWPzsacv5fJfg3MirVN15BcJxe81tMDh6kRz",
  "key23": "LcukN8huuwDrdUBq2HUPu9DZE5eoEG5w4UJxAF6XtAWB5sS1ZWM4bTAkfF1QwVHqBtf5MUtmEEYSdTrU22wNRfC",
  "key24": "5VZGYdXjXUeCS4PFJRRtBUHEtCcFv52LjFzS75zSb3eewyP7pcxhhCwtL4ZhmqPKEPGiwwZy1zEYbzdQwaeBxTz3",
  "key25": "WepeQeqsT9T4zFj7a9XysSFqUWian47A711ZdsVsDdoY5EMAD8HuyhrJhQYojBNBxGoUrBFSisQHwBtKAPuHSF8",
  "key26": "P7onHxPZtWdJXPkSL9qR2AfwWxPButCLWbEqv6gSzLjGq7AqhfKtCC2dvfnqPuoZoP1dkjDY8BmRhuVpR9K1d3g",
  "key27": "2nZroyTRZyHhsVX24wNvtqwdZnywjL3oFqQRNrDJEBCBSGqQ1MdursP6A1WXQz5EMdEr7aMUXdu4Xu1niseG1oXp",
  "key28": "2MwZyMiFcidciHM9digea7MtS2tv2J8mcYrTB18zWrXdq5TqWA7pRmTzBK3uTDUUKWBpBFo73aMPoy8hZBesBuqU",
  "key29": "3TpNkndtbwSeBeiE7xzBqCVs81tjxzxSDzH4AdS9E1GK56S4noi1NC3rxQCm2odHmSanCCiDsri5oB6b6QbGhgLm",
  "key30": "5SHZkUcr5RwZmLjjgr4BTsxvm4Pbkj8vhxqVpfNajyFCS4Qr8ZjZxb89yj2k41cqhEms6tju6KRRntcAFA1Embjt",
  "key31": "5nE2nRRs6mB3pKwxr7J8DwTLNZ2o2QK7H9mpMRPzxGCghdAHdHsy1uPLKfwSXo7ZJCJcBLXJiA5x4jXtBJF1Scx4"
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
