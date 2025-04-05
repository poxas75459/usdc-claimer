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
    "4jHwpAYzwd55EW177H9BsetHB1q5sRqueRSpGiQ2c7agpKDVe9rPB8ZKcQXa3uXtYXZgcgQQ64nbgFWtybd7xRpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmeZFvuaWkAZnd3ex8r6J7JnjMZZ4zZ7oso6YVh7ezPwsKReG693XuvVMnmkbGeLDsGqdSzXRvXDZfzJLHo9P8m",
  "key1": "4ZgjzfZ4kjFrzQ55hYUFSMNPhDW6koqkiHm79KXQAry4XxxdbWcD74MPcz27w7mEjbiTnDHZfcVGp5U43ZDidKqN",
  "key2": "3P4MZCgGLQ4HmtT3eKVygoTRe9tR6bXcm25wAXpLcHNXrEDFkzqTgq9KuyPMsE8BBfw9t8fV69hJaR8gWmmxCaQP",
  "key3": "Um8884BrQjKZyfjVNKzZ6Chq4UB2AhohV4ZcysQ3dMGVJ4CoKDwAakaAkteotqY2gMTHccuYtR9WiJzF3SZLgg7",
  "key4": "4f37UsXDfitoE2XZQnY5uvn1GxknFgjdXZ69bh92UEJwJEyTq9eQCU68d8qG3jyfTcNYpwTfeWNmNbWzCUzwgdvd",
  "key5": "4a4fY6MwZ7w5ZAeTBfj8c5unFFfpnK3tDe3XXdaojQxW54UcGWRXmDS4sb2hpHK3nG7SQpv7ChtrVwNNWJHNE3G",
  "key6": "5xroiH7WZ7mRGxfNEvhStj2RCy5VZe28TR74hu99tcEKzUjdzUMLAzUsVaepzarLPkFQ1zfKgWoyEKv7AGPsce93",
  "key7": "2scpJeScbuThKTKq97UMbpcQLXKDsc4zTypPtcMJpMEHwRo5p9s97JuqzDLMe23RQTfDHUUFzJnprxAXWvi5Semj",
  "key8": "2EsuiN6moLWsgTG6UH5yoc5veYeqnjekzKUv3H8nxbd5EyXYnsF74SXVcL5Zb9AAVDZKvuRbfmM9dZAA3PQ9caxX",
  "key9": "5HrpwdA7RJopn1bFKHydTDff4foZsfr3pqnJjAW6qt35dWMM5WhBdmFgunrurJ7RP5yJxesvt2w5WsvGGEFzQRAq",
  "key10": "3BkfCZKTPNJ7s8eFGVD9ySBAPiwNj7zwC6cTHSvRjAzHtzTu84YqtWAAT1Z77ys9rKLjAMYEPiaXri3xyT6NwdZN",
  "key11": "XKYZnrgNk8sKSf8DjM7raceC8rWLYAA1ftGsfkzuyVBJVnpp3zKbR67rA59nCJxbYLuomuBJpj2xHZ288NEnN3i",
  "key12": "5KPq4raLy3iYN3Jt5seXa7K8i9QXzX74oww3fv9Hn4PoDLRnrafkQvbH1uPg65QRtfWks18Vvwi8svhqqjiiqSKW",
  "key13": "BVuP36KX1iDzFgQ6kfdTVb76b93taKc15QpRnNpjHt6uC4z5NQmkNPV8wmvo27Uy7rYrCBsf2x3HeUjvvVit7xK",
  "key14": "4ysMJjDreT3YG8HGL7tWkQ79yECveUZ9Wo4ybc1iKne74CydWrb8eJ9BGG3NBQVcjh6mTbCGxoLszZGBpDqtLCR6",
  "key15": "4ou4VRveNx2mVZLLDbrGxRqqnEq1JKaKx8ukFAJKSDkPbqGgwC2U49Gsdq9PDm5pgAoGx5DGeYWRcxVWHgjeTDWi",
  "key16": "57rAaYosgFNp5vqDuxFwbCRpg6qdTsXNSW5CvjiFkRAEb39LLqHNJ52bUfBSPs1QJmPQxGepXtdwHC2vArdQ5N3F",
  "key17": "3iVJJZgNuTN5VD3m89xeBaZq2vZ7948XVQV8GENuRiSyFLCHcRsoWiL39yassiS9B8rM1dNaw5eXPJnrx2iG6k4F",
  "key18": "2saohHrz1Hgt7DsseuwfScw9wHKQtWyYMTB6k5tNCq7yqj35bCmAmPj9RYBvnTeMfLdgJN9G23mCKQEtKfBusuXc",
  "key19": "4PUmtdV9u9Q3Xuv6TPCmvdVH7y46pD61t1FFyA2JaDVRDYvd1RX4hu9X6HQVA64ADvjiXe5aKaczFa2qSyvTHzAu",
  "key20": "5Vdb1ArSR3yefYiNXJghBWW2UeUptxA5ndPZs3qMfbNtZQ2ZT5kyzUd1NVBik7KiPcGUSAP62xyoxGF538FtMiw8",
  "key21": "5qHq9iSaHdPa6KoGFcMVebdV14sStQYG3LccThGTN96M9UyEmMCqMBMbCkQd1mmZ2NAkADbubgS4AncHh2QonrPm",
  "key22": "icVVZuF2ydV8QvLismQ6EAdXEhVGo5VMwKqRecPckPuHSuCkLFZSVBwUfJgfw2fiVeKp89CbDffD3VeJ1JRNLED",
  "key23": "2PWAAmmPcYWrF8VXdDYRTZENvE7p5h1HJfZMcvQPmz6Arng6BL3LDCgSQJa1hZUCeEpQtWTyNEdbHmgWg6XLPDEw",
  "key24": "4ytDJeVWhYyhZxnGVS4yjxhLBAN4cMLzdvstpC1nrXy6pqcS7EahUYh9rsChbNodqwbAkRrJF5csZCkLTedSWxqw",
  "key25": "3bTAKibwM4JvZKVAwpge69t9WEq4y9Su9JdvnnPSuUFEurYdQA6U6qvQn8YAjuxwpJYfkh2fNiLMRWz2bPQeZ9Se",
  "key26": "5aUFyhRuMDedtsM4UV33oBDnG9R6P3DYNDkS2WZZZARo1ix69cynJX5dhe4a2jetnZ3YurbgZq268JwxGu3WRx7Z",
  "key27": "5REzZKTRT6FVmjDCGEm1wP1cUHk7wQyKVvzLzmF6hoGqgW83dzrdxHd79ruFrfNtKN2hTN1fKK9ATKKXDL2RdNhy",
  "key28": "5TFYc93Rvv2oyRzHU21Ch4TQm2ibePVZDHAW44PGDHQhfZmLk4m2c1LzHBjQhKPnKSpwcJHSU8xvVxo2htnq1KXb",
  "key29": "5grn5C5V59XtDvYzdNLYZXquQpXYxW8QqgdajwvsReHVeP2hNdETNYgV7qUQpaj2hpAtkQkgoPTpoXPssJf3nEiT",
  "key30": "5qv12iDphsx25vrswrqA8XusCXhhnmePKpGXspn8E3G17Piirfk42VDbMyvWfGVKaWAtL6ANWpNupMyZQm5URNg1",
  "key31": "4XecRogx55zzgX8zEPzqZJqqc556uG8UiaH2HiyUggcMN2rTAcQC2QomxTWhyk9nuxCVP5EGs5JKoqT31YcxTKXs",
  "key32": "4ThFkeb1243cNs49CzyJoprSz8d8TdExZtEUNTrcfgP16GeUqHKr1Rgnz6hb2dG7Zu9s4HxxTCMNEsq2NKDTjaoX"
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
