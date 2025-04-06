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
    "2AfWWSSEDGg43xKpZygQfz5piBHMKyPZSKSKNAXrgad21RMtBEqKNLjFGpbmnj7AWgHVbEDusnTdygckgsXj4ayW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fn7cwsGGNM1U3UXGGjLF79szTss3WDRP3GjBV1Rz8pHSbS2TQFWm21KCUn6q8vqT7foKcR7QGMqBrcFb2QqmEiC",
  "key1": "5g8Nr8mRg6myoNxAjD8khDjSoBKjnLLtrUjW7wgHXY7zQrs15nGnzSTi19DUyGySPBXE3doqmpnC7DHNJkUiFWCw",
  "key2": "3enfsXTmTQvaEQuNcSCEtd8acXpXkxjDzNENqjpYEP7Art5FSDircPLMk1YujBNJh6CDhm439N5N53VqyZbATAmf",
  "key3": "2LpgaCcb5pwAHXFKNWYEfYAcDkY9HKrTnpJ8DbSAm7ZZMZ3uVDPmF6UsKj8nMivypUo1vvZgTwib6vAuRUZwQRBq",
  "key4": "5nL8fYN57heRaAXn1GU19sX3jb5P8137AtKhYD9BcJDdgHPG2vNXRGiZovsiM4ahCDh2d2UBejXnuE7S4uM7GcfV",
  "key5": "2nv4wCv4bk57D2Kqo89jCn83WsMof3nN1gjJWYp3uaS1wfqSLWVqsdHSHfWa6EScrNR3KWvPsJsL111LVDKhpR7f",
  "key6": "57SzR1HuXEyLeiU1j2Gb6XjuikfXs9YS4QC6PshXRkpRoi6QihMcmbE2iMfhDZG3s536B2prasaTEca5AuFGJqqh",
  "key7": "2S1paqqs6wGWyACA3SE1Eqz2GYHMHwjc6YXSyAVjNb3UsDRgZvPa959fwNUm9g2bb3QToqQbaYkKxMpcPqgBnwEx",
  "key8": "3zcN3Ypq3Xza47RZGXK9mBKbqcipYKEsE81fXhmvmHpVh1xgUKMFr61XjHUZsoWVLNZ5zSZqv6m7UZEK9uU2kFw2",
  "key9": "5NQXbkaStNNviowoZip953Sy5wAMUyULgXRR3FZVP4QeuKYuqatpHQcg1JB8oHf5tbRxXSSWzSU1XEdb86w3mf2n",
  "key10": "iMXgNLPPHMcTMZT2ikgU4RwHCnbkbNP9HGV6XRPxnhPruSuoS69GR5odnUB6C9iZmDB83mn2jWav2X4xg4kWuw6",
  "key11": "2AUPowoko1T4sXfVoJVBFXJbWoypyNegaXz9zVCxribajL8trhrq4rJyhEzKVk4LioGZa8yZp8aXRAj6yhmAn2gn",
  "key12": "iHt34PFFcgakvQjPp54MY78YQuYL66xmD9NQ8G6oqp1dCURdU6eQxW3tKSQuHjLZpv1zFp7gk92tjGY4caTS2W7",
  "key13": "64am8uAJtmrYPbyEEnTbCMUW34yECFUW1bz8PVPCrFofCx5kkdMBvSeWHxMBB4PPSXwNQ7Qeem1wLtTvooABr3iX",
  "key14": "35AVcg1U2ujnnM1BzYoGxYGTZ2BNd2EZQm3VCygeZwL5R2c8GVZwB5xVZhexwqQUKFTFYxWvGrydY4ts5PtJdcwr",
  "key15": "2KHGFgK5U9356PdW5oVET54hgUe3qqYosUiEDz4VzPuELkZUHGTEX24PZkXRnj4XWHodQkx7jcwYPL34C5BstdA8",
  "key16": "b2AHagdJNWhAuiZ3vbyCW2hARXJxtyoQVgWYrD7mtR52P6iwXNDLxExw4ANTc9L5hkVKY6z84XEZ5nSnEbKb4Nx",
  "key17": "3buiJjFZfqbS5gTjuGmYfL35murpeK7g61XAWt5MsMZLZP8nZtUJvLokgU3iVNP1gvpHeG3eMPBWeaXQJbpfaEJ4",
  "key18": "3yeZWa9j2tvgg2pgm81gXUAAgkCJGPE2TdSWmSesy6528L2qfD5cLL9zhfsRyAEgCHv9gM1VhCTJFrjPDEi9AX6z",
  "key19": "5rENySTZsEjPdiz9DML2oLY72GGGxt9XMCgCMkskq5R7f55p1gmmid5hZDdHgiZ5j6puYniTniaWARghyggoUDg5",
  "key20": "3hJUmZYMhXTh28gtk5gZXAxDDhrFiYDZgWdRdoPUpegNhMwHh9EKsnJuGkGSRWXTWqLUQs74iMT3PhMcGUrvt7SJ",
  "key21": "4wsrsDnzxmuEMe9wkCcDVA4t4jYSKz3yn8esNMLJXPJCq7SQELA4AU9uHt9dmmecS4FMv52WpTfK1uBhkCZdrRyZ",
  "key22": "5us1VZbvRF9nyDPsRVM7EPYZDJ4apxRACYpUcVPMznGQyy2PP8Ff5a3cUih66pgnvu9V2Pd3S17FC1BXBxQ5GEAM",
  "key23": "2J8xJJD9Y2shii6GAajMoKxu3p6W4XG6bX6vRsuuxG729EfkLjktgMNs9jAjEhSnhL38TCFnhPeRFNcSX2pFd9ux",
  "key24": "5yr497V8XxsNMuJbftcr5SLtRbywSTw7YVZXJCW9Hr45wGYH499dbYbRBjksEJn6FuXp5PKmqhMaCcRvghfVSXAT",
  "key25": "2sYkR864AApU1TuHGxoqfCrq2r8Xq5bacawiJbM7SC4wL6TZYiyBgiMpKfewY7GCMaMe1C3UT4TfWFURoeoGnLZC",
  "key26": "3vMHsYr36zyYnJCN6zKN5NDCBdu3zUmDVA5soJbPSsNWYMZyhQZF4oBcQEigwGvLqUC8H2owLkX8vshqkz9X9U6d",
  "key27": "5BTN8UubkA2ZrSD13WZCSihRgC7TBumPr4Y95J5LKutDXhoxSoBVvKDx3EWbRXMDTS3x3qTiXJvz6y8Ya6yPGLJ4",
  "key28": "331U8MK51vBNHduMTmBRhJuye5WU1RqySNQ9zuKJyZDccBNcE7htcGfUyWct5bdJsLY551teQcV8JMgBZTa4rJ9a",
  "key29": "5EMYDapZXLAnjqwnamEdJ2MthDFJKx9MtMMWQVngAgN4ygEuyHCupQfqWRaHNKxfQQXHYrh8XeQhPmi7TzqeSjZd",
  "key30": "5gc8WSXzrfubAe6Be23ABZzZWdNsQu9n7eyvDpBx6SPz6a8pxUAPNgPUEc9tqSYT6pJzAZSpCmJ4Ty6vxyJ8EP81",
  "key31": "63R2weE9LHrjN2F4yjVrkNHV9eGfAYJ2eDCPTN6xXGdbPqnEXsJ327RrCRbSzzzDXYc9F57DG8iJ356wTnvcvW7n",
  "key32": "EE6S4XpLTgJLyuCUp64UpzbR2YcoCbNXw8ZWzcobYA9D2MieT3hVLW6QfCKC2kMsh7UJxk1VqZ1quathf7USZkg",
  "key33": "3rQC5MCB2EZfSkqucz8S2T3XFh5Qxqz3gcY9uxoqMaMiQ2KdWzqAn85qmysph6fA1qaqZtM93J7z6U3U6Av7q5ch"
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
