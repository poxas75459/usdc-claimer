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
    "4j9GAqLpqVy2xottmHC6Ek312M4p3jGwtqN578dWETTgX4ueM6pdjibBeSKwM4CGLzkGuvxkkbU94hCmQJkLDttJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4HQeUcEq7tGyoDsUoHRffcceSuQXKKTyvf1552vzcBXpBAoyssGXEShZmeapGyxsu7UHBPHvQSguunM2RpyojR",
  "key1": "4y1fL2MSjxexzeZ363cMdgcsa6SNx5Rh6V9BUf59ctrDyEwarnTh3DTvg8ZUFzSaa6676tBNR5jqEGGMyewrMsCE",
  "key2": "4JgfQy1zn4rzgLe9DY1Cdf7fnYJHGXy5hgi4w4WykGqyffN2Kq41UY4S1TKgzhDw4TAdZuYbpzmXC7vj52vyDyzk",
  "key3": "44k2eXct9oCzK7oqAsRu4SPDMJxkxWAtzMzAPeeDpGB4WUxLmdzPGTnaBu9d9H9RmpWJ2yKn2xMZbkmbFhZisuRA",
  "key4": "34G7SyNczRaW682TSttAAWCSfmPsFZg9vFLLQ3LNe41Kfkw5x4wxj5mmLHJBuS1bwRRSsexN3Ph7j7MdQSqszL3H",
  "key5": "STznp5Ym1iUi6AZX3FJykdCxVnndqaAfvcXJeUNUWezDC9HNiRycrXiYofmGuFjJS1h6u7nXhcK1R4k9o5p5rcm",
  "key6": "5jzX2vJV7qgRaXTEUxoW5h3DMTEDreShdkH338cZEq6HZWEkuEZ3AJc8y5f6jqkuv6oA35Z5gi5rqp5fSUy9mNHn",
  "key7": "23ULwevY4hQfmB2wmEUZ86ZxAey7fo6JDgyeofGA5WUSPtWNL1HS9nv8mvA272FkhBfHt8thSSF438AXfQYNZ6nz",
  "key8": "4TGpuGs8VTrUSRMNxYTRruk9Nry9CB4cs4zsjDeb2qepdLYXpLgGg7naM4oxrKMfgaFwotrFUXDsshQSJ2BD7dfH",
  "key9": "4TJjSVfTdK6fhmTp8493d8xBFXJPXz49MeDv2HDL5AqM7bxUZpL4K4JhEfW4iSgAGcLHA7Z8NQoEg3PZH4KC4Yx2",
  "key10": "jcofYBjJx19xHMpLNRW7vHrq8i9drCVuyYr3YQthUhMXsM7WRzveGsT2Q4QdvoP9MErefdc7QG1fcjm4MjMowSj",
  "key11": "5mxzMcpnbGDRZBRGyUx4SNFk6zmhbff3KYuE3Wurs1nSVb16PCSz5NhZNQxcx51j4CwNaxUJSjjdQ9aZj1Z3rFiH",
  "key12": "2mCBFk3gCjchXrYBNxUjZ7HVw72Ftwx3YwtXVw743qjcFoyQ24VEXx4mdWWLBNjJYiG7SvjUxgacr4mJfc8fAzBZ",
  "key13": "2MvZHB56BLd97VV2axp88uLMHbhQuTtdK8MZ8E48Ke5Z2qZSjWswrPt8HAUvWB3BHeUu7bEi5NVWX9yQfF5CPo3h",
  "key14": "HnsA2u3s3rD24m5E3VGDLa54tQxSkipf1JS9zqdKbvt4tvXN6EqTSvNpSJCwodZNzth2fHfVyuU74S8ho4APGEz",
  "key15": "5aRbFWgXd6V6YTRY9yuzBbG7NfXgX5891EtQaoLTnPrA3wwKSUpZn7Uwc6g2hF5AQHn2frhdGrEPwgCrY97M5P1E",
  "key16": "3YzWL2FgcNSHGvEj3zDuXDzuWWNBGzkjmD2PCwKrrKkZp1GpufrY4k1jBXeEFHmM3TwaV5x9w5LTLPLdt6CxbNF6",
  "key17": "osNvxrmgQYuKbuy9NL6W32f8Sposgm97WJNZg5ARZ9HAU1tGG2qpdX5j8EbJsa9HhcNNLkm75v62AfEAqDbUcft",
  "key18": "4gnfVpfnqqBptH9UZqnkoEEQNnvVzV75X959PFe268nVC9HVnGzX61WGnJpDKi5AVEHt948Yp55Zm4NuyKPhPHfV",
  "key19": "2rbmprPSgzgyMyjZG5Xcjy8Qup3nPkbiqRwDvTaJwbUi9PhGxzUqkLdGyujjeX9vhmjZD7SaCxRpGxea8CbpwC2x",
  "key20": "2zTyJ4RPHyZyWHi92rDpGbbt83TwRmVbgVhsZFSVpnkbHM5kPv9WTV3baSLQiC2wdNSX1XUZaLhfSQz2WtppVkAR",
  "key21": "3aUUGvvNuXxdHf3KRvMd7Fyroq3wVnTBG5CtgGvvkzUkqHtZojpHxznqfRUCGH226DApnCcKv1HtkwVo3czWda1t",
  "key22": "2KFsUvNUg4nkdqCc8QyjWFKJod94oPA6KCRrEYxwd5WcgHjeiH4oDhn9HRKRQmJUg8eq6ukPkKtdZV7EuJ9W7nDE",
  "key23": "6bx52SfcuGzrw76mpeYnAfFVKoEKzhBZxqewW1SYJo7Z7f65Y2sC9aqrZfnh46vw1VBdnCEYsw8t1iqqYztk2z3",
  "key24": "5bh3YSvQTXMcYomTAqKbSJo74kktkSs1bm9MRqWzcDwWqMFRvH2GFZqCdnWbA4FnysDBjAdtFQxQTFQdJW6dt7jh"
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
