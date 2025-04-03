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
    "3J9eMAK9hEAjdsMn1cAjLJcsMviiCKrpeLwSawTPCj2gFeZeYe99rEe1t4VKTcJADsnQggsxdwUzb4yJ9XEaM51d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SawnDN44mGCrDUHoLrRoreECph232MnbZXXm8xP14yi7qKwiQgJDLhgxDnG7FoCh6KjbzvADj2iCJXrnGqNdZMN",
  "key1": "2Cj4Nhdu8VmtgwSX8yYerg7g7kt5aFHGMqUX22qJTsYiifjXCXmP3CqN5a7ERqjhK6myfarmKAsVYENmxyQEwzKZ",
  "key2": "4DVdygmH6hXMkatdrQkgQQMrftMQyVm7seqAfZe7XxbxtDdX2AGxERK3URkpQKiNU3zoPG8GjUzTW4JRvePQAiW5",
  "key3": "4F5FueuVdbXSXq4u4VXVqFW1DtpNsDVLHEjyqt58AjpcCjab2xWoXPHWPDiBCm79pLfXCsAGpQHpcH5CfWVKJzkp",
  "key4": "4VyWRkrkti69jZdehfFFUFyDSoZTsR9gdj9VkQ82u4D82xm1BMGrYLgLkWK6mGUa9JMBNLt89sUyVyrqDFa9Capb",
  "key5": "23aFSoiqiRgortULte1NbvWfaw5JnURk1UNU1ToTrpYJKtEHRSVBJRWF5xaNfLVTEefEumD8S9nmBwiqPkHqvrBH",
  "key6": "36XHoxn1NrHyeEyF2MMoz98xzKmk4ySkniPrukPEaXtSTxh7DSfYMBy5pokBTndYVLBn6eUGDa72BMkuQDeBPsrh",
  "key7": "4TL7UsNa8TVzoQafzhsXKSL6wxaKVvGEAiVsg2NnxSXYHazZJswdBm8ScomjMuEfUySUECj46irminZDFu7DiQiv",
  "key8": "2nYhGoPzw6ou7iJUtoM3hoRAo2btqfPTzeYxu6ppYFa7BxnmcwX4Q62GvKCrCYQyU66vh1GBtAib2WcjHkgs99e4",
  "key9": "4oBfzggjNh2bU5zusUjHnCpWtRx4xwtjoAbdTRNpdYvd5rAvn3emu71qSUtf9Pp4MpzZAGinx3VXJGg6RGs6eCDd",
  "key10": "4UK7xWCWrDKePEMgs9aDgW5CrBTyNEHwQ7TuuSapfoVowmrtLG3XCi6w8vd4DttMySpyQSRPcQrAeFQu4Cg2hYHu",
  "key11": "Nz5Yav3QDyVKv29nZ7NLo3DUTP8TAS3BxZy5QXTUZhL2rduY9XpTRmKf4Yh7wSD5ovu5bFbNFR2Ws3ZTFBmhi12",
  "key12": "jkwePnJ2ySnLhMVEBMyFvv5jVfd1qoVcQa2FoDX5rXSQctzEsBqCfvZWuBFrmnh5auH7c8pePMDu5JbpVdHs6oB",
  "key13": "3K5tS3ArfDneTk8JN9CFKE2hx7Ja4vjxk42CgofKJA2TqBy6BuwuvQtZc6r4gdQueenr7jnfBRbvYTd2t5Jhpkpb",
  "key14": "3h15U1udUzKPTbNCSZ2e7ciXu9eAtCTjEL4LmLgRvpmc4w7MXM7jY8JkX4thJ56wTSrT1tDmh6aR1LCG29Y9uKNd",
  "key15": "2hmTCAgjxn5pio996N3ud9aTZvR2NgSvoZGgqwfYTp3bkU6bgYiQpZUq3nH6fUi6xWhYa21atTYTCMDjdh5msGWN",
  "key16": "2EZ5SmgzBaKdWu8Ue1Q9GyjHtzQEgbwwWS1P9y9r1uEsgGBPmjXgHdR75KLWWLsVsWko6DZW9NPoBMcukjYKs46i",
  "key17": "5ZPN2jfdC27PPn1kT6Se51FrEomtPZ6c3hT37vmUZhNn9x57mwkDCie7DRNcNr3ThcrFc33NBQv7ZYQWAh3CwAXT",
  "key18": "35D2nXot3gQoFShtUQWD2TZqrrUZg4bfmXXviXpADhipWvuktNnzkeQmh4SqVDNv6bMmtJPwmRmPsSFh3SD1xvb2",
  "key19": "26XMizDkHa8i7Jmc84CZKPVTe2ueD9pXEdeDmg6d46Lcgc6ZF1bsc7aXUHJuqZYGzpE7TCuVvLANJGBQs7R23zzU",
  "key20": "2Z2Wn7z1XADyL8vR7go1k9TCxtsL3BtVWbKzqUMNbzM7nvBwLZJeT3buRHE4uRZcPYou7bT7UYrJNAzFSNG9mcKS",
  "key21": "4BSSiz9VnF5GHcD5RYGMGrkUsWDQB1qESmjM7RWLyemNgiGw6zfBHbePWFLzQFxWCX47WhA6XBCnr9wa5yvGJbwT",
  "key22": "3ejsw6UWphk7EjVHiUEPkLZ7GzYvE4vFFe2tBBht8UXJpieKNyCjL2XJP4P7t5VruSJ8V3Z7FQVqCgQDA8yYeEwB",
  "key23": "e4xVMRyg9G9sMFHtnF1jKd3w5Zfvv9wVHWAeKPuh6prtXQYR6qJHs1mBHRHv7tDMytrYJuEb5d8gfvRdRRk3tCC",
  "key24": "32wg88hDshFZkwq8L2yHaeeeafnAUmSgXaftb23mefs2vcbwEvT7RTn82WGL4pzpWbW9uMewBN3rSMHEEHmeC24M",
  "key25": "5so41QEkThAtN14MWJHh6rsbPknJjizdeK64rdsG7E2gV7abWDkSHRS9fbpfjCsQkQzhh3AbdBy7AfzEUEu8sako",
  "key26": "J7oZbDtwEooC2WngFxUCzira6zx6fggyyMEaS31UiwP1Kc1fiEYsyQYo8CC6NTjD1c3GFrQqakuDCCk21NbomJf",
  "key27": "65TPBSYvRLYCd9361xVYWsBEN7g9nqr2N4VbpbUwH3AyHzo5ZoTb12B6krw2w7j6wwovW6jNQ5YnS4weRDADdiPC"
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
