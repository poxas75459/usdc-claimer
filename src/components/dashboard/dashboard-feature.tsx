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
    "qFYCH7F1GWWmVXVyxiuUYV6Gnp9mbuWTHbMDzJ2DRjHAsQi8qg2ekLuBfUBqWVD5PXK7vddkxRJWUrRmqJ4WX54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9f7bDZLW2q9eZPGasWvDsNgiNmQZa28L4ADZCMZET7j9XsdsssYQzhfHoyjW8zMp7YUxrWmg8cmsccQHgQav6q",
  "key1": "v3SFh4ESdncqwfnSAE2eHwqyjTUrtA9zAa7xUR8uLQCNcPJ9xF5GrBRbkmu3Grf4H74MECRXvE6QMrxfDkoWu8F",
  "key2": "5MX2c9p6JSPW2YRPUhENJpYXhMYp6zwrBPGkrkJcyKoa9fPasQRCy31RYvLWzcvCnM8gPKYADZnuGuQQFZHbs2rq",
  "key3": "67J7uh8XzuvfJFpmi1YqqRrMJ3hncN9aTHKNXRYChTnacTfTxbPiYpoxghTVPQBV3RFdZEbNATq4gfsxWtJKcurV",
  "key4": "4ZJiRXJbU2gKqtwBqbdoRp4N7oZ7uX1pX3Z4X2T86WYbA2VWC5RziXduYHAjhnvLQV6xppL4HeizDdrAtNf9nefU",
  "key5": "62XLRW4SHErYFMvfEt4LEfZW2t4QrFaXXMZoeHneacxmBHfua3C1zmhz1aKXxtDh9nWXdyQhLmg8TX1bh8uKAdbZ",
  "key6": "5npn7TowSokQL9w1TEAPPBjrgZFjqysr79kn7hQV9fzYk3vt7VrUwXnnepeHZj9XmVNBhNBVNddr9NTf9EFY9NWT",
  "key7": "3jDNHTXXhfnjJ5TETn5pLn7HQ1SV7w8wFwr4shT388w6RYEMSfNgDKCvuruc6Zqw5Hihr9wst3TCAed4m7cjii7h",
  "key8": "wWVgw2WBAn3s8iumTsx5smTvRTkbD1rbYSRFqHExhqmkuMXQzb9ho2DURwTNbVp1bnJ1JipU84eSGRtmYnyWut9",
  "key9": "2SFq3z39Mmqkn3VqrdMjNiBzicjLs6thvLXnqQyoDNXv4ZksVwNQmwmtzC4xZJ3izc8oZT8o12QpRGhWLYVqvFbb",
  "key10": "39iy6ozj3bXWmciAK5uHouxxKdjQDAqzuZ1xwLKQTiDyAxeLWZv6UGHiMo7u9LSA6r8vQhXdKfQ6sebWQyA4iz35",
  "key11": "4iuKmt1n2tqT9ZXguhdKBp48btUa26o6Sbj96f3yE4STADxFjzqMcBU543FS9zemsebjRPSjAvUTE2pWapQ5Tuo",
  "key12": "5RnyAZxcAHaQPNw8ax8AX3VAYoWn5vqHuMQ1NFPgZteHAX372s7pNCzUckZASVnsosJDDGze7a4ZeEiSM9vFPjx7",
  "key13": "4DC4q9t1KzA81UkHeJGyJUe3n6uDw7zA6xBKpC3jXTFsdFYyfCVA5VWZDcfTXsMLAPNmiUdXSspgP2fG5QretEi4",
  "key14": "4oHzkq2innwfWDPpom9ZfVu9w98UfpaDL37KS8ZAztLyQDEKcsN2PzD6xqb8SfME6FrdU4zpGmSCWPB6i9FEjJU8",
  "key15": "4t7CK8UR1rb2469gWjuKWPKzMNLtagTWudrJUZ88BNeJMJZ7dCXgtchH13CJeNu8gv9FAfpywqkQLtExWbWKbmWq",
  "key16": "5QhE25k1fV8wvqMYvJg8yYd2jCMa6uubrEjX95zbiWBYcfVd8Lg8exdoeTCbeFBzMuVQNjbpFnQe9e7bTsX5DwjF",
  "key17": "3gmuHFELUnjCoz7RMP3Tvw3cJxEd8nk2cc9hwg8M6QU5xWJeDwDb1pqsSeovHJqKow5usnGwwVZFo2KhqUj3akRm",
  "key18": "5p1qAvaZsnjenp7RDNeiYzQ62GHDwuRpxdgtYQuVm3Mem2UL6AM9wJa3ga8bhxVzkXNPXw4sdePk6mHJTxpkPesC",
  "key19": "31Y243k8xQnGpj7Hn1WAy6yGEe6RBPXYoFF6xcf2k48T7CjLZ7H35P7TDQgZ1rTxJttGjviRTNDZUt8qL3JhEvab",
  "key20": "4Du1JpQYiaVkaZvfUgZ3Pt8GgzK6i9WxHwAV2BqWWFn1owXsi8Q2s9zhnYhviaTUgbDt1k7Rbmxz9yexGyoPVnJT",
  "key21": "F1AjWwpCDBNNTzn7aUF7Kbe4hCifpGQeV3cujQd7PRTQN3QkBkbqsHGPMSt6KZo9ypfMRL11ttmXN2VdyCGtUuL",
  "key22": "2KT3akC3BBJgADpeGqHvL9qA2xmnSEirSfrpsF8qgcqMxntHYmfkJMYYozmWFb2WxNwMsw32gpvW5v396ZB4sktx",
  "key23": "4fKdnSWAFMR4X7Hpi41MXb5NiZoqnnbKda6m8xCRnooa7XQv6bmA5UjYpsT1ypXYh7VCbvv9QqVxFoQg6vcuPypB",
  "key24": "2HUjQfez7UTJGzD2WhZDX8bNtvzkM3bM8zeMBHNrtJPVA9R2iYzKdx4ZJe1HQegaUDMpQc4wubpepHAtjGR1B973",
  "key25": "5vMtHysLa1ZF7uLgstk2xEmSbAZXYD1ccgnaZ2pKRyVvqapKXMzJksUT9cCfYny7WS9eXi4tqqMeWGMJS1Kg7yth",
  "key26": "2XWKrPWs3mrbN77zNY7cr8sMe6Gra7RnGPwuU8VhfvEz6xbE4AqvrN3EkPPW6zmHn632DwH1B4pGyrytsM5WbsY2",
  "key27": "5Tw7tRZBffZGER66RBrZwyKkYEN2v4mcyVkWKnKEo6s4ivfabc44vg5zsLpAMAjafCpv62YBHkJ463U4ouan3Lde",
  "key28": "3ug5BjPyjCKveJEZSUgmurQjsWcqtcrNhu48BfoXZd7WNE99DtzQ1LHHMAB9EYpyhUmjoKbTw9zrzWcnnSYsQRiy",
  "key29": "5PyZpYCWd8FQkkJTBN9aSjWcToE6PU9ZB5i6UaQmVASD9ZSYgvReEY3yZPRE8gLbBLJjKE8xqU3HoKDiSCRGwtNT",
  "key30": "2p8jtqm98wdHJjvAS4C5dp8QutS5p16U2j77tiXLcn3iM3HBMPt4KyBHaXmCLqVVsFcEjT3mjTsega16N3Y9qr6X",
  "key31": "24hwFRm3rryZbmFpCytJh4eoPRVzthB69UgWozVyPPMPuac5eTSctdMYtnU1oAf856hY5KY4u5VUFDwPpQZ9a17x",
  "key32": "5vGH5KBLoaZqeB7wFGPeECvLg45VdRtz5Y6qyri5nwNUBqzKjS3AeLf4N5q5ZqSkm2B3kFDnqjJG7odEoiarAfoN",
  "key33": "25Pe9AC3V6eWTeWTKEWymPwWjMWcooWxCyhxhDY7mGG7qKAbLRVZyxWNA1QjdSzFroV6cMzAnxjb4k8gXr2sn2Mt",
  "key34": "2vmLK2C5brk2mpAgbkgxekeddHefiJHqT1hphBE9c9hSAXByS9fCQaRY7gw3MGiHQaeB95iguGJCeKiNPtHidvZT",
  "key35": "5NkBev97exuoL6oMCSUPjTbdt9QsDs1arG4tjD65dhUXxRsYZvqaXUq1LC14hrC6bpTevbeGbh8sCZNypYs4e6w9",
  "key36": "4vvvm9E7zgBTExZ7uTTLLW9GFWxgDgKnqQP18UcpoomEutxWtA4KUaHBcbv98od3VePATxcfnXNKGvKaN1DgaGBG",
  "key37": "63pj8pUH7Prsnmvr1cWGerQPWsbs1EJ32jSRE7pjPvuLQz1HGzqhK37gamqMeKnFCzu7zPeAHcTGpfrc1f7zXQdf",
  "key38": "7rxGvzSVtq5PjmdnwiVEqeNFYPuY8rS2e4xBDKVVXPsBMe161QELcXFLmDT7dpQxbRBn8uDVkv1gQbA1kfNTodS",
  "key39": "5WXBw3FhLJVCWxRHk8HFiAig3yrbmwHCPYHiSStZtwwbbhR1cNRffXJQzZFeVx7PKhiMgcb11VvmcZFGKoveE48h",
  "key40": "22h9VWafuvoyDCLQpTXyfGPhmW5yrtNe4jwLAvxPuhLg3J2Ex1k35xQpkwAKHaXxpVtRJzSWHkbd4WFb6WX42M7t",
  "key41": "4LN6WR9NmsZR4uCFibkNkKQ9dBRdRHFhFRRpmi38DZDGcCEmKbkJ79ZfC63jvkpEVHgD64hhtx9fGXdAPu1JvV5b",
  "key42": "5gVrjWvEdW6R2MzfiAJ3guUwokBhtVVcW99KCXR5uS1G9Uxb24ogu64K7Cd3a6XTxZCD6Xtt2Fa7oTQ5m8Fqm8mm",
  "key43": "3jnkWY7goCEWq5prFeq5Tws9wv8tYE597bx7co8c1EnLFHGhXCmM9hqpjLcD4NgdcyM12KjQnyvsLGWCTn9t3eKU",
  "key44": "36jn49bFgDSekKxzBtp7BS3UjwZp6Yemm1xWjyhwMAvY6qecYxTEML7ztbuByB2zwBaEeY4yZt4Y6EcnVEJeY9iH",
  "key45": "4WutZAC6HhbBxEUyQQwtKsBjprxvcHEjeYwjjBHyX7R43xSxJE8rXXMiHMfCZKLRzgSPZufvosabPiTUbsLy2Ys6",
  "key46": "2rAkwqbTXbDCEQZjRfBHMBiZiBN6jcTUYAK3d4PveK3MMm91jtCzMjjBtv3CeD8bDwhEvDPVEtkTcxvVYfGB5H4n"
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
