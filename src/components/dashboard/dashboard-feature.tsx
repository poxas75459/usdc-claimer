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
    "3MmXSQBEtPn2LpYk8fya1ZfnbA8e6i7X2SHE7gk9kUrBvT4BCVp5LdY9oo7FHHdQ57CNzaX2pDRbzxv7AfM8xGtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QW8sPpdqJRURnxVFuvfqGqSdWoUoQRQqu8AG7CghQQP8u9MMX2x2ZwfkNq9utYRXbwdirU4NmYeGAMvG94DNnwe",
  "key1": "A4sEhMaWENA9o9gHGahgLzfhoRUNxcysKpVx99x5fe3jHzas7YwZKq9Eu11wAw4P9HwzFSQEZMb1n7NYPRpbDie",
  "key2": "2E5Huk5tb7SMagYRC7DpsyopjH5rD8UoJGBcyqFKaoeYCAS7wtd3d2F5qVPRogazVYD32USYAhVtihDH5qc2YSyX",
  "key3": "5c8sBWLdk7QyryCcHuUtDgWMmt7FYrHdu3d18Qgb3W24NaA6KzUNAQ7zAU3y9YTno7DDDFqiB7CsDw5b54gi5M3z",
  "key4": "5JHc1XRJQEQ7jXJzNjQbL9WCFN5R4hoSSpdvbtNm4jBx5oDyiNRFXdCA1dRwhCdPL65xTt5KM8ZxeNqHX9qC58ML",
  "key5": "4gqxPv6zMQVEC4uQDThbX8CasEbSY1que7Y94gcvi1fm4QE9aNUHy2ZBAYjdA6nzEtpcYWvrWCFvomzizdCxHYe6",
  "key6": "2hLFqeccqgNLKDVmZ1WadKkD3Z9GCA3fBjSpyjCD5v6KFxNSjP8a71MCfBXToGeLemRy1BFUYGcMfqMMn5BqcWau",
  "key7": "5uBVzit9xqvWKDw2bSfVQGmV2ccHjvVScCQQrpEH7Ynyd3XdmQDs7nAm5v7MvUTCPjoEnuN7QuJ3XuygUt1uiyXs",
  "key8": "4B7hxErWmFFzPYMr3QfwjZK1Qie28m8NaM41d586wxfedx2KpbPP3Mi1h2grMg2zYNuTFXVXZxeft5F5XQ3kyVhR",
  "key9": "3NH3XroN6SbKWFDzT6D5GiNv4gxUiXHx8eq5QmTQFe2Xgqm9YJZzrc3enoXcPmXQKZBQCnFvJHKehxJuLE6bELZU",
  "key10": "36NqsCFSHR3cx7TWyGGQnrMJgKZsv96G9JLoMk71rVrrZgJWFLih9ofCa5eNXBKT2uE1CXV4vdhtBCoZD1dxeG5Z",
  "key11": "Tf3ZQqnqa5vtGEEahD2K3XBCQGmJfMpaXNxLtxBbvcYv37iMwoQSGHSpYGNj2ej6H8B9LPLW2NSvyrhB3RyXy34",
  "key12": "2LA26U2c9PveaDQhoDENPgVBkTC55yvEQVU8Cwq6QcS5Xyo5Gfqa5Abj2qCyUkMBSZ1G4ESPbaG6FgbVK5Lvcy5g",
  "key13": "4FZAZJUFcz6CWCMqj3LrFo1e24ewWUvW2HwR1AzwxqnQqpkBBPyJcHw783fQNfQDweTNH5CjWShFHwqkwCze2U2A",
  "key14": "3rtUJqMrcxvn2B8k92hqjKaCaD5o9XeAo9qqLbRCQXLoBipByin6ao6n18KmZdtJY4X9nGaaPs2wNPBccykUsYSg",
  "key15": "5bVhXfVjTk7gbE2JxTEjoYh1XpVkJLsLgHkhgLu5dZGB8PwziMSUJf4ajdjTx8oFMa4FyV2e3Pdk3m4ttxw19W6T",
  "key16": "3FsJJvcwa913LFXBFDsMHUaQ6eFqqEBxMEaMr1ZzLUt6JSvVDFcvZVWEBEhxMrfFq4KcmUtLgbAKMJPLYm3mLUG2",
  "key17": "5QL753EHc7XJfGcUxipxVLbJiX922oXXKYvwbo2UBBHsx1CibunSxRpJ3cuXu2AezUzxdmcmFhetogtjnxoQLLcn",
  "key18": "2jpgMad2Y1Qy4vUBHKc14o8naEdm7wB8vcGDWM3KjffwoQTAji4y3MjzBuEm26DxJZfspH5Tv21UMZ3rGiphbhPg",
  "key19": "2DwAFrUCWJUWCqgEezR4oc8cJSKHHdFJ1gpGyj5yJkq8gNVWwTXXpX9QVbjVrx15iL4xhDuPkSz1SoMbqtzNUyuj",
  "key20": "2BxV1AprYCQWWw8BBxRpq3WNLhoeckPtw9MWXyCZ1mhnsdAxkN5aFnXgB8qJ62kEes742x2sjYGNwyHp6SRr7ZtW",
  "key21": "2AK59TiYj4XmiDWhRX9mhPszteMcKpEb8YzEFB2h9wcVXenWZYdW8rE8mNW9fguQ9jCzxVkiidSmZpxp3QRxT3Wf",
  "key22": "3KC6sitLb6qx3o3N6nFsYMaANxMLDLvu8y1d4uHCKg4HXR4r4gZF9xNhpUKA5b7xX4VJXKw3GiS1PgshYheL4sGY",
  "key23": "4GsAt4ojjdKP7TL9s8NyxF3KKuHS7cdL41j2K4Vt8rEDjfP1hikvrKYZ2UenWi4dKJw7Pwhv99Bf23MBDX6QRA7j",
  "key24": "36fCbSik2aYKL9Ddjyn1F8sbVmCGELWnPzx9x5pXY55ajSHTm19rFsS2kn85fFzgsKYtEeBgtdFZnWb7HNy9yrXz",
  "key25": "v95vLrpx7ZCFADwmUPPZgrUf9woBcjHqFLSV9uXXmKTXuwnRnuvAQoSqrEVLNBgV2i1hWfj6zuY1nAaEWPJehFR",
  "key26": "2A9C5UX3QxnbB2icH1Vfmxa6TkhdYPwTBm6fFJkfmZRA94NSTy7aHTQrk28hxdV8QuMm6ATHpZM9SwpZZiQUugdb",
  "key27": "4wjuw668kjy2DapEMERuPSw5cK6WJy11SzvpkQWDhwyWhRYqjq8aUAef61rAn3nEN3HH8H1ojEGiZ2MBxMB7JfWZ",
  "key28": "2hnPhw37CnCbYxMbFtnDFsNPDoGnxrj6PRpRU4BpWoWp5cwkvqPV31kywKGG1WrtJrqh62QYiCoAd9wQmHr2oW7w",
  "key29": "3aWku1mmjqieCG6JiFjjYXXswTaDSA3GtNizCTDfX1PKz8gb8aJ1WeguzrJ2oPfUWeqLbbVzYeajvGnMhoU4JDcK",
  "key30": "2XPeAK98cY4a7iKAWGHKEcmVvG8LGG2eGHYeom28VHbY8n1xTfNHw53d7WH9beqGDF3gos4EG2VZD9pqvbjXF6A7",
  "key31": "55YdHR6V8FF3XxJ6seDSWQ7TN3hJhHJj6ZrwbHoiy3pwbqYHfhGSgGPygRo8ZZeyxYrSDwGHm8TEzh2LDrfmwLRs",
  "key32": "4RxSf9vcBf5MVS8DkXiTjwx8ijv3KmviNKwUrrmMXEscBR21ZvPhduoA4cwJBRiLkY2jYrbhdQ7L2jYyTJN1WY92",
  "key33": "tMk9JqgeB5unhGMhx1JZZFQqvp9pnDU6JMW4FiWQVH9cR94vhEQDe42pku4z2S2vh4e3yN5pk7giPUdDVjrvq7s",
  "key34": "5ec9N4foHrsYNahLm8PfMi4oa83yDRyDoLWXbKwxkBBA81FEwj64gZWnEbckEJkYdfKWejimHAzptm1DitKLiJDm",
  "key35": "4k4T5FnST9UhkJpMmhXMNt12FXrNPEQhxpkQ7SE3QRHoGxFo3BVRTfUdNStUNbuKU2AmABw6z3fLfdaJSGJYXgLe",
  "key36": "3EkYEXxU9ZrKz9s26oiJCLPT1P8Lw3kz1PrWnSmBZfZRX8U5g387p4v8Y7TRUwZAPZGY82JkTdkbshRjwJtyg1h2",
  "key37": "4MbNKrgHJoZhjmLAqrGnmvj6kBfMpCqcLjuuRvDvfvSk3AcE5aAuTxMJkvh48jtVsLYTnmpCTiMcBtCSZieKaaAS"
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
