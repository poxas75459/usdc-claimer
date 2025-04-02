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
    "4ciVavq8gJyCqs2orj4BuUnU6y6U2jMuJjJPUUYu9j5d6L8BpRfvDgg5wDL4jQMiFteWg9QyM4SHuLddfUAbbRPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzKApFBKTVBZZ4VFpgungggGCM5z3LrV9JubpjT4N28cSW1UW383kjRRLeKqEFRm6MCtssScSYJ7UrNDQpWjnB8",
  "key1": "3A7zJjQNrtS32ZYrsH7ivnjmANkkLSBNCwz9geGfzw5AoLxNt6a9mque8uRZqjEP4djUWkh791g9rmgB6aERAyFc",
  "key2": "2k5mtHaiJcgK86i5zpT1TRbPkym9kNYN9ifSuQCAexrzfNE4V66z7QqKHLnc1sSBKSVKcV267LT4SibZ7qgXNQBb",
  "key3": "uuE4wUFfGwUxEEMVuacscqRUwfrW3S2335isMHkrZAoc2PUj1CJYrDAy6epd6qBdD6Ubo84ZAkb7QdEoRDQ5TjF",
  "key4": "3vR77bsZ5uZjKdWQnrub82qDq7NkgWB2Qc5zuWef3wKqVMaiPLvYTkQtRk6CcMd9V1F6NyDu9r5TjWKE4tu1Wqxv",
  "key5": "3XSL21Uamk34t4jfvMiqxSg5WJV59R3WWboiq7aM3wZ5HJwk9BeucL9M87estK4kfrouxMDqUWJPJwNkmiQhSat1",
  "key6": "2JvuX6Hgvw41AWwH1y443Va5HD6GtQPAkR9MMi97ACas8UVKRrkxHvBCK1zLEZquQmQKVLYxhwWgMBKmwWkbdNm9",
  "key7": "3qZ17pDxhVqMWvQfmb4GzsQX4V2FXrjtqCoSKZahWyma9esr9Kg7ijNSZMh5j2TseeVp4X4aW2Uae9NkZZ1LnHN2",
  "key8": "25jyGbvEWxf2N3YrjNFR3N5ZaRU2YJn6L3ysSuJgh3UgGMV5NPQx1yFf5ciwfiACZH1Lz9ysJg3XUEJNyA5tFGvv",
  "key9": "3YWknjBNw6BwXM23bYFt7sJHzKShYT5yEyoYmV2LimBZeNDSbd2ZNoxshW5pkjkk5KD6Vk42g8sG88jL3cmzoeDF",
  "key10": "2b7zWPnReAwy1hNya4wxcipE2vGAX1kgCmz3d3tognDkDTjjX5Znt1ynmzzMLzJNuxoTRt5cH3R3b1jhNp8kfWpi",
  "key11": "5gypzmTfvt7daMF8EBNihsurq9B29c875APgPQKF4R12rh9oneLqJiRh6EYxFoY3QcQ7VeDbyibs4nXT2BCZyFLd",
  "key12": "5w5eSmdDAwqxG5kgPZemkTcCM2Fr8eUdrz9YEQQaRA3FGsi6uSDe7DCq43jqRHtL7pkf1Mu6GPoKD48WMgxvoYPF",
  "key13": "2fNojYwHe6ixxoszKWt8vNmRerFbNpHWovjKJRthZYKNFJTssTWw7MH9rQzs6H3FcvVEG6qg51iE7vyM12D3mB2U",
  "key14": "3vdeTjUeRYcYbngYsdP6hKLcdx3r6SnWrRcNL5xvKGb4bE4MVWZtH1CFGbXZJvG2dWzp72JkRUWhpfVeGssZ6kuD",
  "key15": "2rxNDWddHihZPMUPLvDM4tTqBrSwDG9r3H2auwrnNsWV1ozashknunJs9Sqs1uco2nVMSZUpDCLHxupmdorvHVSo",
  "key16": "6bt9hxg3e5MaVgPbFMmy2GqzmvJSA826Vvc2Y6EoBPooXGkcogKBq6PHGutHnkJBAkqNf5BtP9cYqCMLdB1G4Lv",
  "key17": "3YoVzLgL6muG2fVrmzDaD1QBv7BuzApCxAQgQ4Q67cs2M4SwM6n5xMbZq4DempZyyDPfK17EqTLR6zeKdLGTAtZo",
  "key18": "wXZJNDGDov3LumigQ4uz3mbHZuuggRTS7RWuGH8BpvEaiHEBcLLMNyTvFAZriGvLbVCHZ38SVQT3xKXWZsprfzE",
  "key19": "59sdvqEcYaaeqo9HxFjDguxs3aYpjb8Ctqc2asXedBrAbRgjJooeNPC7bTmbx2uSYUpcXcZ7ttrc9eFZqq7im59x",
  "key20": "2j8KLx7fuz4gXfeZWhdtfL1z43dE6vjuhPzsqddYXE8qhejRaQMx6hxwMnhCqutEpV2EtHKUSi6YFc6SNEVuKM22",
  "key21": "5sW5C4cKH4vMtdXYz6Z9oYED1UuaRFN82yJ2McNxP3GSUamVAVmg2oQL4Bv2jSR84iB5Tqmd7qcNEmS5LXany4EU",
  "key22": "4iyKBVeTr1Bvd4KZgXWmiC66eLfb2ahocP3hdjvi4P2mvM8s7VAA1vKU13Z1myuHXBVntTo2DLQGwxX3phytZqPN",
  "key23": "2Mh4XguztnDp3jmsNgbtq4L7RmYo5aBZGKmz3Bze95WdWLQdn3dmcNVsf2ff6QTnSEsKX73oQJWvPbGZa5zNBDAP",
  "key24": "2fdenvcsMVKsKnT6TXGkUfoArNuiA5YrPWC1VyzfzAZ9HFwp3G3fY1c8yypeqphCFo7bVpfunWdgKs86yeu1bbNL",
  "key25": "4WLh5FGjxTkUkJEANq8tCojGuLqSh5dpHubHdLRQSLJv2H8AS8iMi6FAcow6sHJfDzyB9UeZsswwufw2eKNT3V4W",
  "key26": "5gyMuuKGLdbDcumWaGhatu8xLJHt6XtPfGytGByc7jY8vQtTeic3epj8L6HNPYKfNGNwutBkidMBMUcH9TjpP1hg",
  "key27": "2gsHYBkyTR7KFic3MnHYcEEEo5DARVXV6RkQ8vGqK1gcfPiP6E1uCVxZvrMmq8MVEr6YUoZKvAfLqugWBmCiZLqr",
  "key28": "2F5N8HUcYLiUjH7do1Sn3hMYzwCA1CQiG5BKtcoB3KzAWRR4WCWm3srdiHfUsD8TjEUS5eHBZ9xLY4TsqJ4LHJZp",
  "key29": "2eboMt3gYYiMR3vpYXNDxSL3x2wfL4h11W55sYcW4CWuFztCzJci2L8d3ma3NEiL6N1YjM61u9F5UN3YEc9jQ8xT",
  "key30": "4C9VbbsLYud3dfokZuH3N7hpiwYPHvbjFdgwKcuBcWuNVPvnnw4gvygySvNdBKNErHJegV6nBJ2QKfVpJiL3Bs4o",
  "key31": "2P9pQzfoSLMyTmvpg3KQ8WBejJPPqiy8dW2Ed2DKtHh61iqvwXgsM5cry1vuMAdw9CHMPxV9a8TUetZAmyjnH1dx",
  "key32": "4HRoTazggLekHhTHXYRwDTxxBmrCvYMoc6LK85ujYvizq9BipV41eGe8vHopEX5WRuN4mH1Dg1EGkPZzLWvZU2ax",
  "key33": "3THn61tmVB9AJMpMFLXunDHNDopSewsMH8J72aami6cpK12ajpdvvJuMYc5Rkq7W1GjvgC8FPUvi4YatVax6DHxj",
  "key34": "5knmAVzViuGnLZHaxJ4noK1SopMwvK9q8RuY8hFNA8TYetzKe1BRCaXzkFX6qp5hwp6zW677aMX1UynSaymfqCaq",
  "key35": "4jFPeamfruSMPFUQkzqnFDVjcHcE5Eh6AMVPYrkQgAJEojiXYKDxfZ7DYeTQQoJ5vA8wSSjK5TcoVyXmV8uRUa8D",
  "key36": "KjvWYaZHgTgc6dZz3DE3qGGidQWoYWpDMPVUJxxnnSZmpAVX6g6cgmH5P6VDFVyUQxYiAeU7a2wkun4uB7kKbTa",
  "key37": "KFYkubW9kjPETv1utjzFBUxQmU5mUaGw1F6hKhmVxJs45kxWGFfGs4Cby7krNWKPh4GGtVwUazx7FSmrZKGnDBG",
  "key38": "38F96BNXxHARpcfNGMnFPfNu2UzoaNL8GDZdvkiuRL8UoAGDMNeX4sUBue13vHw8XcwgvuS9SXyd4g9xcCu3UGM4",
  "key39": "yKesBeV8JXM9oggwSuhSAbWkxEBPav1YaaZ5o8vL1NSjJf4ApuHb9YR51LrSWPJjnAeFae2YfMLMZpT64Fm9sxh",
  "key40": "2xxC22nuEkwAPLQU7LtC33LXWzjKVKxfqdEiMJsaLenWpyLJgdeKKhZCAaJ7ZgjbWeSxqHP37LghYnaEJs8BAf37",
  "key41": "2FAoDAUpTk6YYrYxAcq1mmhn56VaRF8iESnh3p6GggU8LdmLnc9YhXaXC8hRmi376Mio2D5k33DNRf8gynn8PEax",
  "key42": "5EdmABTzALkc6n9C7RwTQavbrKwYdBtnCqxL43pnP9JHLVwtX6uuTr3KLMHtRvEi2t5YMcX4B1toQykHvLxgPDJM",
  "key43": "3rkm3JEKbPg1Kp16cLtijK7JxopfViraQvBv6RAv3YhToxG6YTogXAKStvhi6GpVLrw9cMDa9JaEd1WB93A75gEi",
  "key44": "4FsaeZACA4a1Gx76S47xVz97Brii9XMMKAbwRDRGSU8v6xZVrbxxE2YgcmYSNzM3KqLWiMi5BSQy2G4EipezQoyv",
  "key45": "3ctWdZqt5WvycpLUqLKmGH8SbzBvWHnmFB58WLjhtz9g8iv8UjGXDddMWWEbXDLNsfcUsz8So61yBVDDQF3GghPy",
  "key46": "5zbTHm3WixHBCxUPzyo4F5GBVA5DcuANKq33m9xWEwQu1YVCUzeVVN4Zj83zCJCBPij5GX7QkwDvU5Yhd2BEDLRq",
  "key47": "1cLoJQ3yMRR4Rx8fVLdeuVVi1Ac9Y7iQ1r4qwq78ShiLLMEtQPYQKMth86Z2VSxh3k3uSMn6dpBQfvm5vPuz4Ms",
  "key48": "io9AsNTWdqs18nkyRXH5HEsrkV3QEBRHSxCPXmpbDYNUSSZMoUp2dD9Aiqs8kDHh1AjgfjURrAJ3hhDxXSCSYQS"
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
