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
    "5SQr9t5FuZQrNBXisgZ2jnjM94K6sHe61deqxRbs5AkKuoWiwsQ9L43X3W9y43rLkkxZpTXyqNbmUMmENbGZ1j13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEeVmDH4yZzY72ZTBpMN7bUwSfWm3E57Js6yD6Ag7xt8QKdFi1fyYAZMsVPTsfKCHdG6ohpMZwaZ4snQrXhMS8Y",
  "key1": "D5dYCtg3ZAdfb761e7o83Tv6qa3KjNDyX6evqz1c5EUU7KoBzjXktjAbPHR9jwg54DKBta745qCwwkJQhUKRfhZ",
  "key2": "47JWc8Gb7Tb7VFKLqZNQ9CVwkxXSTe2Z9knMUkMndALRj3bwE7YNjhqiEQSTYfYQZj4tyeDzbzd1UEBd6uEVSR4",
  "key3": "4CRzhzqdeChUJQQRnPMRjrkq91unw1o6qBaXyJCKkdoZTxc917dKV2GqpbbKL1WuQAfqYAQ4p1kDpngyXTGLXQy",
  "key4": "vyxk7AKXA9pAW588ivCKvyarH7jMUw4B1UbFQM961PR2bNvvruRsRAFE78AZyhfd896ZdQBjn1PAxx1SfFKapNM",
  "key5": "65ZymAz3gi9EzYrEMtFkYwouDF2v65q9HFVgLigivJ7wBNwT2GkoH4KpEoU1i1VT2yobbCPkkDBGi8Q3VuwjYzYt",
  "key6": "5Vbz1SqASoML73CDKPocsgL67QrfewbeFf9B9xk4FTMrMSf7fGmzRBxQFcWTkiMC2FQkdQneRPmCuXybZLyyTxSB",
  "key7": "4XLGB89tFdfz8WdPv67oUxysZaqeV6Th5aBWyFpeRW6NZWFs9qUrNMefdD9WREmKsn2RbPZJe9FRBcBfqxfwFqfm",
  "key8": "3soRhn7Fi862v2F89h7CsXLXPWVAwXxBT377Xh7uUvW2PQkfC6YY36xNfALbSqwpjVSQbXMgRyyZpjzxbn6E2x7s",
  "key9": "Hw8dwhikQUYCWMHkCniGK5sC9BijMCMMkd3axBoHz7FkmVVBcS9V65RyxdN8bPZr4m9KPQNMqziDGdcpZgMShWk",
  "key10": "2K95AkDo7WXFbM5pCDTc3xXgg3tLiHBgoWMY4K5pKvjtjgumKG6zwnfpQdJNWPD3ENaD58GGgis2ZFNvmZ8eP56x",
  "key11": "6uH6A7vxg2PJYHsa49u2SWD1FhC9SJc4aXavujn3k3HpbvDofbGT8Hm8JGoMf1i66Qd5Luzg4SwcL4fS5xNx4Pp",
  "key12": "6TrvKGGyoqc1KZgGGsuqzzsgsPBfBFUeTFGmNHpZJnGLEurkGSTc4kRPAqxtWW8M2i77DdBvBpGnJBVCBh7nrLR",
  "key13": "5ioodUTYgjYuHhkk1PuW7hy3KypsnNAs6uH4oMa4rryhA7jYgAKKcD8AeMhZtRF7Qzmb4Y9z4UWtb2oq1ALgyqru",
  "key14": "3XDLGZVrRiWiAFGAhFutbVxyHBNXbiUChoQzY5DWKd12Kir4XVmw7L38Q7zcGpK5e7Z8N4h5QX51HYVehrgkHReX",
  "key15": "4UQa6rfNFh2xCLKj1LALQCrE7nETwu9iX2LDyAKN3yt1rYeQbNbS4QKJrpLngMQ9QPj4J6rAWN1DF9aT8YR5h6FL",
  "key16": "aKdyJTeJ1Q66RsQGSNADZbYdKuYQWq82JaTUN3X6D6G2ZDm8x8pghpvviJGVykfd5EtgbUMKV73ggsG9dpkAeqe",
  "key17": "26V3LUUSNV4VwqHkVkjzjDZ9KW3QHapRawKX1akpaJm8Qod2dFuE4Qb2hAhNTgc6QZZXDwnzs7z5tcD144yeZNv8",
  "key18": "4imiopeL4V8uq39bwfiMstKdbbEJJmqfeXr6SH4Do3GSQU3BN1kpk5rBafi2FnLS6gmWVHpQCGhcs4R1fnyKe26B",
  "key19": "3Jx1XvVZ933VGb48RNi3MiDXrCP2izydfpUwNdUx18hyfeNY4yqF5chM4DmLNcsajdhVD92ZWSfXDJ15izrsm3r3",
  "key20": "64Fmj2VDYKhnaSJ93rkaTT5q9C3rbqXjVrC8KW4dbG7kZBidYCAuBoVMBGiB2u5eDW5QKNHK3u68qUZWjjY7asGM",
  "key21": "4JUdRNgdJBohUagf2kK5BhZdAGgcvV8x9sz2xDxMN7pfPhjvKJx5HLtPpvyDozxWd4jAtGsjHXAtF5gQo8qQmPNL",
  "key22": "4jA3EjRrKzxy5z6hLvKcsvGwsYr1KpNYQygXr69XdX2JSj9pgEB69RFVPQKiifFkqxkfLWKig6sBXbWcZNSgamUd",
  "key23": "3z2ocwC2WwW8V1evv7LebVbDZpV1ZjzazpGnfazVjxwULaGf6mgGid5D9TaFRaBHMzwAtzjQJiWWCe2fvLy6dQrU",
  "key24": "2MMK919Pjmf5pFYZAa4hKE4Wbhj6Hi3QuUgX358ewnKSBHwszCz1nasc6UB2trykD9wR7bwdbcUQLBWjr5eNf1WY",
  "key25": "5ERqTRhu9zzznXQVzMrkdsBGm2VT2Yfw6z9QbsveTDztUghtPu7Vjz8j262QRbqGsRqU4K7Szw8m8kA6EKApfvMg",
  "key26": "4KYpPdaEFnoSyTzmNDprUkwE59WZXSHMqYxRhzRTmSWBWwLQGfPEixcpJVvAZVqnW5xXFeZ2rKWF2RSu9DXcq3iJ",
  "key27": "4YmCmy6F8riczzfnbAp8GjAiipw3BtHQm6ga96w7yBGjsk8iuYnNek981Lc21Pkkz6H5Uf2M7ZaVebepe9khDiPc",
  "key28": "2yW57UDTZqRn6NmzUtD2qaN1kJ11ytrUBgdn9UEHVzL87gs7i7svbKzBrbhJXaDUmdkSKoTRN9xxTkj3rY1LnfyG",
  "key29": "eDsK91TDuXBAQ3pzXrXeavvpwXcMD7XTDuYvPd7y5inveiuaTdbvBMX42Z4KUAMBg67ktwAMKTKgsFysJvi5n5Y",
  "key30": "51e3pXsjreuSuGfwtoZJ9E5BrHvpxFVAaEacPeaU5CEx3froKVWHwowxvvhzeGb8J2iZe9fWFWvfYrxNkQjwYQ1V",
  "key31": "4m552tjFp3bF5NDbYnACo2mp73UGnpSo9QSb8k73cRrLNQaKC5Uw4HPrYzCPPsfVr1UisHePeodkBkx4xSaKfbkf"
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
