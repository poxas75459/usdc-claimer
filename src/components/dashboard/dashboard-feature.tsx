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
    "4iDAjZmFKZuyZqqp1ZqXix4VwwwwnV2Qoh9cUka62GTi4R5aEjX2UooicyoNmf7qbXeCkc4Z8RDhpzGxkh9eDHCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k11RHTGk3oVLe2z2UNBYoCuygn8HHPYEmgZXZwEZcQWqDFcYyiizYLAKkHXcgFH9CSSk7b1YryjYAScv1qSHqM",
  "key1": "2bbRpuew9k2ZjeycLY7xwTNxL7YSMxBW8x5nXxM9N8FqtKVyXVkspH24BJKt5dBnyCpd2qmNc8EgnnpLDcMBk63p",
  "key2": "5v4PJqfkK7iBjLj7YaCkjskvd8Mfmivd91UEFMXMMKH8f2uh84JcU5nT9tGgLqCTpwabzJFYPShB2Sqh21jGFzSh",
  "key3": "LwKshLg7mtCxQyw6D9jGS8yUwxEm8oD4k8KXR4Xuww1PvsR4A3CgS6RUvqw6XzhZq8F3JdGN4Lj5tHGUm9oBhQh",
  "key4": "67NDTZF7FS3yhs7kAAoKPzevoH5W3cWkNywvqJnZgYEqSKKCMBBqtRtR8BkbxtntH3JEqs7onyw64N847D2rAQ1y",
  "key5": "SETFR3qjva31feyVQZiV5cqEV8TAdvnwyC4bhF19yezYqKm9eSP5nsGMd46Sk9FWePQjJAT6jvaQLLKHXo5tEZm",
  "key6": "4LQLLeo5cGwjxyLzYGcXuxePPpWRuzrLhCk4eLKHYYpeaamWpjwK8gkR6yvNRuPbb7ffFETZ66nBFaWrFovdVyQt",
  "key7": "X8bRUjTEKRxYR8gx7sVyZ828de1FmgSM44gNA4xHfzyAfzzvzVZ2Sge7jK8K1JF3bJ8SVEoFrs2dduott77aDRy",
  "key8": "3j8FLLvDAqGEb5JF7WxnnomY2V5BEg6L3ZivyijNkuxm836qRNq5BZ1sXzPph2phQWDT9UQa1DNSSE3pGZcnfQRx",
  "key9": "4kUBrFbFr7HVCCPYdUbgoEoKY9qEq5egLwkbVuR252aosRwMQ1oMyYes6XfmPEqACpvAP4RhHwxhEgiDi9FBmGL4",
  "key10": "3fteecnfRroMtACrF5hvyj7b65YEfB6RPwFdJBowSXkTiJAJ4PUfDCPGB4fBVeUodfTUPeb2eUn9aHxRZ5E8vcGr",
  "key11": "63WzYqqD6e7y25sFY2iEnz5xiKRvkNf7N51wrtLASaWGRYHBxe8BDa94n4mq27HN1njXXFWbEzfdVNoCCUB4NdqW",
  "key12": "sVe8Dga3v3ExjfCNgm2ZoEkMmD61E71UAtc5aMyt2FcNbi6sPv5nPWSCzLGa7UWr1D9NRDN66rJFJNuRyPjZk4s",
  "key13": "2Xoo4yEBujXs6XCkPbTWoiWgJE6dMbJ5kxP1NUqhHs4Cd5kKkptKizdmuEG3mWg66HetxjmrsFpBcVaAMsgeciiW",
  "key14": "5i748fXbBpYmEyahhgfjhgsZF5tXWP9U3hXQNRwaCSqEqSwmQQr1SH3iRDEoukS2qeC1gwbptYn2TgGu79zHPwNp",
  "key15": "5AJZSPeSaWDJ3b9DXVaMV2dh5gfKUaqT6aH3uapWy1csLoGjpPAoyX3DAAgZC85BeMdxFLYM3WeWGD84atuDT1PG",
  "key16": "2BVpvh1wcTUsvUyHynim5JtSmWe47jhikaSmK6hBrqfus5ceKMhWrQRZ4RqumfmyQuxNuPhXXexjoRdyftjFa7H6",
  "key17": "2jmd7jqfRE6t5eHQQzPKURqoPHBw73R3GN3gVarnJrADqN2dctBBUT2KYfUAEMt5AzTyTa7b4kB8TtbkBM9jUJYs",
  "key18": "4iS4SVcJrPWvh4RAcorzuZG9ZXdGjFGQzDwd5bQKCgAnhh1w5s1CC17zUVC17gB9azHUyvNmM5nbmECa6k2SEV9s",
  "key19": "67b3DCod964Lz7U7x4VgEG3Qa4MK6bMgFjFTbFWDdAwxAvJT43KjUx2TdZLQX4kUbto9MiZbziu6it3BBfW83wam",
  "key20": "RJ5TVr72iY6GjUt5U8vowx1RRyuXYP4dfbJtxKDB1w3JrrQqDFZQbHFAk3F5ZbpSyLq9uBfHB68zxb7Kc5Jc9TV",
  "key21": "5DWLWPa99hjVZsFJMBJwSZ1JteMvGw2qGQrHpNkDS3zy7fiRC8oMR8zEsA4xcnoiDpE374y2P579eSumctSKVosw",
  "key22": "2GTpdz6Bsu84HhswJn1MF4bPZDgpjPiBahAXPyH1unacRNuyDLZya9MktiJXorNYJs14MCXvWrVyoCXqbGpCGvUx",
  "key23": "ZqPCiKruxFsEbuuzr68Byp9qZg6dRHRaW2SQMuQZZ4BmXUUtmzBYbL35P4unJTiZSX9QoxETLKpsiM9r6a3qeyY",
  "key24": "5U83mE5AG86W1RKegUA4rVXE9AeogqyuUUWYr3jj9EZ3xJqoKiV3vm5yG1Yz626DDWXbMwJ5ncuwSu94vx5cwvHX",
  "key25": "LRUhGPMuHYnRSRhLwAwoC5hHq28L1aKVbrZTbx1gYFgt9Fqf9PGeC2GDwCJiS4BWXqvskaJnVAqAGwtXSkTcWPz",
  "key26": "526BzPSAr3puP4ai8RzcWXVyeqXnGg5nxf5GXXsVMgbGXZV9FuSJuX6UuAmgTS2ak99BrUbYMSWrKcBQ2c3J4M4o",
  "key27": "22wuHQHgm5jwrBWWGw1Z4DF6o7Vgu561qE3zQxkjxVgTxPKiPQCJCD3p7LK5b9dFJF5wP9Eq8HKD2dZMWzPWa1Yr",
  "key28": "2kJ8iUGzJXUUQDwEBrF9sbEkassFFFGJQaGkacdpGhqi2rtH89PV9dAg6tn7HCxqo3uxnGovXYEjZXEGEa5WFCsM",
  "key29": "3VM5Wj4dnatiRwxaydBuBMZyZF9pYi4eEAZrSn7r3uktU1FAy3b5DYHFnUupF9MWskr43AKWnPgw8ZcPGoPEaodY"
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
