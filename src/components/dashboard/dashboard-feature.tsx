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
    "3FGDJqgBeGVsWr5uRW916uFoFMCtMuMbrctQLmJzHKGFEqvyKAVCtv6WKtspdkKZKk5hZYYv83gAqZEDDXahhsXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTjGGNNFmmgdNB2Hohx3g82tDH4cvrpKxADycYoMzfQsNrPDJsvx2aAQLFDt5Ng6nU61DsCrMDajp91ebVsyWw6",
  "key1": "5ys2KNBM9YtMwHYzVSoedwdum4MUzbB6W7ZszP6NtXSbMPWTGszw2Jsu7y7WGGGPpoVkcdHo2E1UBYRku3gowXv3",
  "key2": "2gqLRYuL43i69nDxpFrSZ9w3waiMZDLd5LMhDkoTuhqKwD1LnwuUskHmoxiZwtgQnknxdvLgcMBAyUDJVotsVMPV",
  "key3": "3NGC2KSr2dpuQMEFxGfsUr9oT1CGFg3LWnLCcgS9oKLMdYxGZ4UTjbHvEzzvcCZ8Vb4124UCUsTkyo1iuPUcdM65",
  "key4": "568AH8gr3PS3keZrkv3mE5trqE1LDEFpqdAZW7JzAgRuy3TiFG3vCrheC5W57eDarCJU1RToMXM6qQ2cyt7NXG6r",
  "key5": "4vTJxGY6FwoeWsLpo3BbWyjhoHkxi27UrM3u3UPxfSBzLdhXhwG3pf27uuYDUASUJCWgqN8NX7fU8qb6ew1CBEf1",
  "key6": "4tVH4ZF18caRg9woWRB7rSjxnvNTX6VE1a1hrcwsv59H6Z7rBiArMca7VJx3nHjRD5AAYF2UcDHPeeF1iiz1kKKH",
  "key7": "5oSGFYaCB62GA1gvBn58CQ5NthJSkg7nPcBdLNvmoqu4iGURZoSgyhybJeoU5avboPtEMACKPu61ow6xxAG7raXE",
  "key8": "3Dqgr7svywKzJks5iihgHoBjrVYih8jcXstSXq8mx2KowUej28Ho493Gw8PRUg9ZKyoadNknF5YzRzDmL1xBADNy",
  "key9": "K1Pavmp4aq6STnkB5aTziwWVx6pBqGQDf15Pkmg3RLNeWFkVxxL6z2eQisfGk1TWV89ejhW6quDazzFAXD4mBsT",
  "key10": "5oAUih8TwFsJj1erRDJa8r7YgFnEWjFETJkGPLA5eVSCTAMaiAAZ6i65KcAKT2dDd262AY5rw1RrRsHJ1LEaTcXm",
  "key11": "2k1JdAE8M6va73vg8jetqCQdLvLkCwCK1mHkUEUyEhGUHUKPrB9AWSraCnLFmqhkxe54WNg3A9Pvm8MbybUtcQws",
  "key12": "4GzFAFYqNPvAwCzC6Z9594nxLFe95GFwnjCekbWccMfPqEiE5sKVniJFL7tQMCt2ahcUtmmzzP73aZJ9tPDsDbwg",
  "key13": "2YBfBroRpfNjk4zJRCLBTpXjAmPfWtDC2fV56uucW3Y5r7Sz7R8MhhWQXCRScG18DsDVJhjawP9rfL2Yvf5CpBSX",
  "key14": "4sQS4FQCQJ5kiW96MvmTQGtqrrU5Xemicgtueg9hrVwGWzZyTUd4X2uJczNb3N2xpiFiRifASv4CcMhfRAJ8RWJw",
  "key15": "4hbsXGJE23LNCJL5p8ybCQRfxCDi1B9XkBgueqeYNGTRjgCXhwCCTe9B43q55Vji4ehAtnGb7uakvrSP8qAFsWwf",
  "key16": "5NqtSAwADReKw4zp63fjea3U2oWCdYxmZpAfV7gxEjG4uR57oHJUfcKT4UginG3qJeUiHdLufhzzNH8Ewa42pVkR",
  "key17": "5e1zTVteDhFo9B1Vx9asWm8JKb6gLkcPEkytWgvq9BLD75UcJfM5XXUn4hMM7vejn8NZZmnMd5LBAjsseqtjyfEk",
  "key18": "2sJWLii2Q8ehj6aVK9rKtRuSBD7GyJekNAXoXXKx77DYB1MiZ1h3F8R2J7vnzpUgszgzDdqdggF8Qeem898eYV8r",
  "key19": "3UAP3yoF9cYjveQ32vtFEJzije8Ux8VPX95E2tdZPbsXdNU6ZDVGbTcbj7rBXBvFZ8rUDz2UkiA77Zj58UWrvjm7",
  "key20": "2Ln7SEbkANP8MGzWbSg4W5vqHRpT3W95f5rhk18NYnJbs3dhS1p3xMeh9cz5mB54LpijVFohitjJTACjTRwbZE5C",
  "key21": "9JSukPiaYjt4XXgoiJ3TASBZsHuz8rw2bV75FidJmBWr2KP8cdfpTnZT7H38eFAYKnev8W9Tja3ZtgjbgWvnYdF",
  "key22": "31h9abmcEa324qwbjJ6685c3Lq3e34jh1MT1kvjQwPdyFEK52GPjMgeL5pgKvShajsseHxroJ4wxgndGe67CAfY4",
  "key23": "41c4oEuZySto6Bs2xDrVtNu8971AnAeEuSpNq3TKRUo8392uA1i89dscuvtzHNcNVdNARju3jB6E9VaWbKRjeYeo",
  "key24": "3dEwD5nfuEKLC2Udey8SYUrKjjWxY6me5xxmmmq3LS6sdP7CjQjAxiSrhaghV7KRhUktiMN4ej24GNUNwxmwaWSd",
  "key25": "myfAuw3up1JZ7dBHQohE1XWEKEWDbjoyLCY5eGH2jZYEThARjQcPdGUb9Qnw1voH1bG1Uz5gmkFtHuzzZqN3zfJ",
  "key26": "5ZVXYUwothYQFvzSMp5BYSVJqa2rBAtKkXUXGdsFdLj8P2YJWXQmY6u2bWiagVKRYXWSRBMRajzaESAxjsYNpigK",
  "key27": "4Nm5do7JYLkYmPwrwtCSY2AC1aNCsGphUiecAfNEAZkxu91EBo4fEWme71cCuGtoQMWVQEamjoWEL8FKzsXz2hCb",
  "key28": "3LjPpdX6gPektbzrqZMtFpWfc3D6wEyE2v9AbqioLbRsYUcjkUWncziRFmz6QXPaav42YzrcEzDhrZZhy7sAQho2",
  "key29": "cnEdnuFHEbqhMgxgateK34tDiozxfruT6mSdZUvtaLzN4xqpH4EQk8d8wgzz8mYuAe6Jz91K5gk9wtvvLVxXSZd",
  "key30": "4rLUGGBP3jYWf4TzwiSPoUMv54ahzrv4SBKv9eTZmvt5k5r6N9s8sHozbvXrumfU7Jg3BLVJjfQABAD7swkGwYRf",
  "key31": "5jfxGZc12xRVv9X7oE7c8CyGj7E4QPsB8kn9pBWUwKNVxtq15sfN9kZWUwoYC5cobtEqopHopNc8XEZQboCrDchk",
  "key32": "24N6G4Q9Hj9Jiunai7paWUYjkomuSBaT2iEQhGKBukxMj3QNqLDpZ8buaAdYDUwTJcPKWNAK81XWmK19rN8PEDgm",
  "key33": "5ePdn1QMCZyzEi4CpqSHQURSqcYyo2EbQkErYnoEMVwizd7rVmMrjDc3LGtb5KgvcfD2DhLpF6zTvxLwq7tTWj53",
  "key34": "5cD42kU787eb2owG5TDrhFA1hew3o2xrVDVFuQkKyHBqEEajtWR7LSeV4FErK1yMe72qbNPvCDVaYRVnenTrFW13",
  "key35": "2SNTvFastccaKd1vzqmgq3kKqyt5QCuBpTpzwL9wKH3jZ6mfUXxBQkUrvfo5PLLYUAeXk9U4ighCzdt4soFU5eM8"
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
