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
    "2Dyq6rWKN3iR1cQ3yAcYznhYrbGkXYxbZkEiQLGLAcEmaRSWD56qGTCWbP5vGxf8m1ihGCDo1qtz3DZAqCNQ8iZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2opd9Pa18rgXWcriSkTsyFiwswcUqToDMk9a698DmpWtVvEquvuWcpswt4p4wbUq4CCVNuDtZEfHAUjYyhDeFknv",
  "key1": "3p8B6ZYC5onXv8qK3HquS5yXYjK2X5ixLNJg26TjySrRVNnXmNm8aTE3uLbqpv716k4kVcvUNUBCqVnoRmBBMe8D",
  "key2": "3otJRfT4jURYMJ5gizNkB5NkCegxe8F1QMejArx7cDMDcGJSKw7w81ayPcGkALXvueaP74DSab3fgXDRKoJHLvbV",
  "key3": "2yuc97mFphSArLBC9YKTnEo89kJpXH7PuxgvDZwqJYimZufkRav3EW2sDb3ErGpyw9fKCGUPXbJLiTX2AU6JZpLu",
  "key4": "DxHUGskGbS2qtnxREhe9LT628MG2Y1Sytixs41g4B33RdCqxUkt6ZgsV6cAZHgifJ2rKJwqMgeKCgocMwtFfsiR",
  "key5": "rhEtMWnGAaD56EfvGtytbr8vaNbkPPzup29cuLCNtqzyqUvRG8V6HK3cDVfH8syVhLWnUiEhG3CtmJjY3Ty19R6",
  "key6": "rnYj19Dmshs2P82UkpyzddAtvTQbCbSyS8Z3X676Y6wQYHHugCq8VnQbmgxfxVkjix3thumf5SWhz9Jmk5UfmXA",
  "key7": "55M68oEoD9zZQYKL4UcXNZ6jUQNoDiArLMuzckJdpNctNoBQxa4fwtob6LrRNybWz6DnVGvU6eHgSBYtUGWx6sJ4",
  "key8": "2K6NzUNHZBD7pM2m3HB9ZBdqJ5jqVwNdLzUBkfPiNybhMpPWSoyAoMxivSe95yUWZeRFC8Z9GivBo4XBb9dqbJHR",
  "key9": "z5X2WcgLF2eq5GhddmtJeeAaDzE5ewACUTWCybXYhD3M9Cov43zZJeaEjo6GDP8p2aeuk4GDJVbz3i1FURTSvTJ",
  "key10": "3wXY4XsjwUunpeUcSTZkTXypLZyTxefTNaLDQE9eB2WRv4oPc7jyMivFE3woMWkZwJx9ffpWsDGrFY6m96riWUE2",
  "key11": "4c3JDcXdofzztki9bf78Yk2SCYSLDyFgX74CycuiHU4qaZoccfHd2WjXUDZ3GF6KjeB5apG76UDpjdaofLS13WJ2",
  "key12": "2qrWoGK5197RB4X6ZiiwakkXF8dDcoSduk5oSRdynUDMZLjjs6YEXpddsahJQcYXvNwSbWTMLBszu9kfkUM6HuUE",
  "key13": "2R3jHHWYBpbbC9TyVTsdu2UTVcCyjN1BueUVEUaqPrtewfMpzo9fuefXJdPB49FovSW5HiKJiqut8nSexhTv2YPB",
  "key14": "xjasfEJ7JAyLTobCN4a2pEgPpfNxV2MrVadVwzwJ8b3hR6rRCjKLJNK2ZNchtY29RpKpXGMEBatLWwMGYLAPaqi",
  "key15": "muS2hPXC5mShgqtCU5tByLpGFwCfDMdAvPE7nfLNSCRQ5guzXAfQdEjSi9Y1b5VoeiWXXswsC7vP1bydew1sRic",
  "key16": "arLHZjrm7rCFG2iDCz7Bu1REMN1FeyUKZ1hVg331wY1d8k4vUqoqe5DCjnQCkyyM1Z7GUNXGoGPDX4DGjJ1raVL",
  "key17": "4hSZHe9b2QckkeT1NNKR5KMhLTqSiDTAyPvpzvgUBLZcdrXczTjm8qyVTuVMXYW6Pc2FQzFtzmWaijpQLSgfXaJG",
  "key18": "W3v4XXfFUJ6BtDqngU4CZhsqfAnrJwRbjReAP4aV2Ai1S2HvuPSi9CYjBWn5QtzrVQRkTQRueG3QpKiGs7nyoXG",
  "key19": "4LbVKqGAmU8ZhmDLfJguiRCADxv43M58AXnMJGsB77TSUJh275PQHAR6rnSosBTaxx913N2VdCkq8mh6k2et86P2",
  "key20": "4GoQUcQkxLpkwGXy5uv8uaT8W4LWfNBkEtbErXpwXq9XRuentUQLyf3NAZZg9vvzEBuXqw6R68i8u6uXy5zxwNMX",
  "key21": "5YJMLsbWrbfVvSA5yo5DGoyREH3agFuu3uaRdJRitBzphyCbmF4pgpnrcms5nAfRMuhCoYvrzuMP5ZQxTBHLVhGx",
  "key22": "5mKrbsUEZQsfZHFmGnjgXZDT4LtoKxjSkUBhdyDKjxJCfoNKY2qVaCDezk3XNEPsizE2D4mtgCLTSuDiRN8bQisB",
  "key23": "2Y5k9XEJhscs5nPaCEfHcTAbH7CxAQjURnZ4umTgfZjXCGSEpBzcH64K97FnJmALb8gJt939CSAycmuhNzpvnUZ1",
  "key24": "M9ATe7Y1w2XDSZVS5MytUwEdocSP6GDWP3iVe6soDFAEZk97KMBpvoLs4bg21A3yXBjFXtQMuQwHAWc11yYn4B2",
  "key25": "2DQkE2Ni3YY9rhDvmd3Xjcf8WGDhUvEUrkPYPotwR5Hk2tC3pNE5J8gSxUHJRuxvwxr7jC4A5grYRj8JH58awvKs",
  "key26": "bTeAXRc9MsGor6BuGZp5qfv9Bgs9CeJzuJ76HU3AoobHJ84T3XmBgSaWE4ek6hav5PXCRsnfDuD4FtAVqiqxeVk",
  "key27": "5KLzvEKxLm4be6y9StdJpUywTQJuQHQZS8hJwE5hdLr3zaGRB8dUG3DHPRbKh2DBUWjRgZ7SHZudJdjbRBWFmUWu",
  "key28": "3CpMpS8NnXpdL9Duf2XBAphqxbp1uySYBucXHH5X8hg6ddX6Xauny3ZDDVMXTih92aBYfXzUXnJMCw9Bjzz4PLeH",
  "key29": "4oLGH2vfUhZyiRLbBkHvSxtbNu8dNBV6A7WRsSmEzdN6azFaS4h3x5BYikoRszDTgSaCRUMFWuDS55LPet9fVeim",
  "key30": "3v4T9g8RmLUPQ5EkwS2gKwTc7LiRd6kiGUxgiM1jwmVQREFJn3dXVFTFoZDtWTBfPrSjgY81dfRGEVpMUUkCsSD3",
  "key31": "4xCTtLDt2PFXLpo3fPex6aRJcE1tY8mHM64z3SVdp4barCt5mSo8WqdFdFbQiNguFFkEFe4bqBjCm6v8vMAMkktq",
  "key32": "3u6voQg4GDLEjig1QdkEHBXo7vVQnVf4izZQB4skzqUGM7t55hTAiojcZwLgC4c3WpRRLs1Rm6nr9vrCFn5gHik8",
  "key33": "g2m11j8FcsoAKYRQ11LVTXTSHk89emefxeK64hJrHvm1rfvrwxSdJsLjfV8eBu6EkRcYo4tbNdS5Nd2WGBWNMEN",
  "key34": "5b27LTtnBn7tJw6uSdS5tjwHwSs6fvi91Pe8Pvjpm8We5XsKYsU74tYze41j8WTjD88ECfDZTmZgP3kQgFu87e9a",
  "key35": "4NakFqJfqwBKLCw5Mmf33DPiYcYKHRRxPYJS9w6wLk2gMWEY6a6Xvjsz1pcDyHxPLeXqNn9ji6cJUcXhcc4VnYEK",
  "key36": "2dZ7Lb2J6CsRDWFTHenYXzAZ1aoJQYxKHvQ7yMZCHeK7aJqK4YGHavvsPR2VHAiyGLGArsRXTp7WZBwuTsdhe95S",
  "key37": "5mksxM67DzbTWw1wVHCDcn9xGAJjoRiZLTRBpwDLQXcqCY7DgNu1BP28Y3q6omub6Er3s56LStAEATM9qxEanWzo",
  "key38": "Z5rPAKRZ7Y36wwK1qn2V6KZ6iWNcRwKZGSh9df7rtkNPQiUAQGmeCGBk3maL2uxQC18qrisTKGuTPF6Ct8c4KaT",
  "key39": "7u9BQsRRf6Hp9mu3rDVtb9vWdfCBcr8J62KYddR13PiSdFZvP5zHqNr8mcRvDnhgEA7bHwtwr7RvxfrYbvLifQr",
  "key40": "2VBTn3zeYJGYhTY8NYnzNevVzcnaVBpaQpU4KazBW89LidDKJRXZAUB5BXsjfYykZxJi1DcpgZ1ZkvQKbKNqzfJc",
  "key41": "GJziC6tyNHz1U2GBW88gyE6JHbDzhzhhxpmtRP1GeuxLgB9S7YHeRZ6pVYDFFR9esUJJg95oS9Pd5SZBzH93zAP",
  "key42": "5muWBDAgnp8gGAc5z5jW8pEJpJVwevP34K2xeubyX6vEYwsYBNnTeXZDnud7LRzxn9gpXDt3h36BMda6sV21zRaD",
  "key43": "4FPBw8LzqLdPWokZEpkSCitrxJh8jrJPPJWVAZPNG5ZVFce25ztZzQX1WiknBhrhnUAmvLNcpWDDKa25tNKnE3Qb",
  "key44": "4cTdJJuUvG3SJ6GirwfJusbwnQ52CsHLPSjTNVEhriFvHjJkmuM9faGKhbVsbUKhMXYMxYYftmWaXsxaTfG7uU4i",
  "key45": "m2yYPW8G5hkp73ATvgJMGHuTnjTYaEv5xVMFN7mE6pWbSfVk3hqV46ey9hAyfSpGdkSp3U5s7fd853GU6BGi79h",
  "key46": "3Vm9NMN8zWYHu8BFtf5xNs4KNW4cZXcdPzh5RcuY58F7usCkJKiHEj428zDXSUxYYcq53wUmfyGnJCmGvypUQ6QG",
  "key47": "5mXfFw2XBhQEtyjUGp3Peu76sSB1NzBVsctMoZn4bUn7J9P4UEoMGGsm4DYhS1dG4fwBdvVAJwp8x9EK6ZVfQZMN",
  "key48": "3g35ogPfDJzCuKtdSEH8AibH2zzopZfKJeKmKogZVRpAwLtHMqCsgfxfVEWh21cXspvxMX9g9JXfwVKqPxVrU2o6"
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
