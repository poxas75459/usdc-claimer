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
    "5iUvdWV8GHuR5JMtpuhEoaQiHxXhP9Q77vL2gBBL3UUamfRoVxpM8mK9Pe8V7DR9GUXe2vWDqCKDoLjjvgRWnjYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sE978VC7m7EFcBcAe95fE6LXai1J2ZaXcuuUYpfJdZz7ErdQ77ZutnfthLPkfQgjZeZoKMSb3WmdH9xjY723yFK",
  "key1": "5etiNNrLk3tzSBzPYyiLZxVmSYmPHLpYELx1TjPVDtYyZ4K23jSJ4yhBSrmVgeK3bK21uPayfAAV1GfZDxvQBK4p",
  "key2": "3BGHyEPXzawKv6xfCpApxuoP7ZJ2kj5qLUDi8ZpegE8VJanbRYgTHP91CYcfhGgMC1bfwbG7i1Ry3EdGup8UJrS4",
  "key3": "ZZAsKgz2NjHYiiiexKH8BZJcyDefqyMk9177f9cjxhYoYtH6hkahjyaMdcVSSVuMrxstPqF2dT2QV7Cz7z3hqkg",
  "key4": "57HHCGqyfYcu8DXLx8UxuzPX43PxxNuhts9xUjvRjarCbdwFp2sAjcWkLuKXSrywJiu1g6GQBputRhvBALDjMw5u",
  "key5": "JKgx63v1PzmuhfrrGrtHK5Cg1kQMQFnUZxegZgb1HWbG7Qe8KrSPNUN3pp7Qo13uwG1c8i9bbhhYr4QADj1NKHK",
  "key6": "2WG3bx3GSsFCyBatcTaGczrTmvVVmsJsmxyHApRL4qxADxBEFqgWiU1cCzda3eKxqdPZMYJkUKY7m7UqogcBDEWt",
  "key7": "4NWsGK243319EohZ4bbQYakGTsUSwpsWsE1UFH48HaQjPFsNx6TLDtC2h1BLXnSag2BB9wDXokgCGXyji9ppcRns",
  "key8": "5zxGkVGp8u4gJ9joVn5RFAUiSzs2dAp2s8fqHhReknkbyfHL1i3gmncjLcur3SFfQw5vjdmrQTMdtY4KdF5kh5kG",
  "key9": "iC98xCEcBiSU6msLBH3PmdHDE7m5xJTPLobWETJzsTyrENk1qgWzH8wuw3UrgYMATXmhQXoYp3AirLyvFJo9wwk",
  "key10": "3rwAXVZnubun6HeTa8kbj4uVDY7G3kZ7uTcVeZPRzcz1kJdQqUKcBiT6QXfYDTTZg6BzUgJEo9CdHCL8h6gpkt4u",
  "key11": "3UuSK8bkvnHoXiti3yBzRPVvfQ55cfjbaKWmbQe8Bso29FzkWF7ibN7RdW4L622ZneLiX6DoeeNMAfNux2BHfMza",
  "key12": "FQCJAZ45qhS18Vq1y2JURC4isnz2R5HBeTrG1BHc5uCXKJgRF3st1J3rt4mffNkQwVqW9WGqFyNVDK7jsmDUvZH",
  "key13": "2rBRVfqqSz3bUskRnQXqgCxa6uLYJRn2vZgmfJGfY9mr7v2Tx7Hu2UpAu8SmfhC1v1nQm3cPQrpszcBEA36RCFQf",
  "key14": "2dcJgr533k31eQhdgwdYyXxfnvwsiPcn92cMWubtL97n3dhgn7mBF5G4KWML6ckJeCfsRzXrFHwZaV9dv2QdtFMf",
  "key15": "3snwQzatNLFR1Psg5JEFMRzRTnbWMiQdNCvoedjJHgejuGFohEMGSiUiCFaZdyfk9SdBs595fKW6eNyfMrDrm5TM",
  "key16": "4znm1qxmWqgGD4kwtUQHxaa7EBKXmALn5F8NrPxVCpkMCXPbJDu3s7eB1ZrkZgbXWqNkoG9fN5pGRXghUQV6wycP",
  "key17": "24EdzkkeuVTwxoxQo57oCvoUpVrEYMz888AQNZ1CoWkoapcGHPXoVKF4cDANhhfUBB5by46sHWv84EcTEcpVtpnj",
  "key18": "3fhP4j6KUhaYUyiFV7VfgCQd1HejgkRv2EHzg9XX5tnrRnwoMhQW9qD6GbuoWYTG5rStsicexC1BFBNwzY1BR46W",
  "key19": "2UJUvvenQGM4emdpE7MxeLCMND64DWaKngnJiFC3QkDqGgVF8NTb8AZYrHuwmacZ4wrvdsvrz5Ei7qzk672d1Rqu",
  "key20": "wvidoRYhTpMDcZ2d5AhpWXCJNNqWtuMp7QJ97Bk7JDzgQ1VKANvBxJB6BfGzesDceJPnyADqFgBCSNTicg61jCJ",
  "key21": "3mrBq3DYp8gXL9bmKaWrM9t4DHrTeVrPwztAZ6YJ1dnFgpsR2L9RCSukuFR8E9EvmE7P1aXuMUF2YcPXiS4sLzDh",
  "key22": "5fG1gs7TFqT1jfhsembKF5iS5NaDNPiVgaRpsbKS8sg1GA4LXx5ejSPiaRjtvLZ6o7wa47Y6f7PDZFauaD8oS19T",
  "key23": "3BVKvn9xAZEeWWdZDmg9j7SRzBjqgL9oVLikabmNVVuCGKKWimZHpmST8PtGwbhzquEXF84F24oDMMchsn2Mxk3v",
  "key24": "3Y8hyTGeDnFTgVADv3eZHYg33L6RWRzo3V44HM64jKZhC498MxQi9XYwXBV6jHthnjqtMv1kjLmaymNeG2Hm7DyY",
  "key25": "GmhQkZohMyEhR44PLeyg2zrHivpALPir9QMkJy2xs8vNiEwC7M6xcD84dPf7FfN1sr5FUACCXxjAMVRVxc58qAx",
  "key26": "5kj7QZLAs5yGBbmqkogn6WB5L12nBmampB5YnVYdzYQkMxGdZs9dT6p5rWS4xJbjWiCw7j14U9Gat9Hjw1PbLgvp",
  "key27": "wUM7BHSvLMKZsQW7xQwkUa4empWeGWce9GY8rbYzzWsvmsffeq3yxLnWD9vTcnoStwYocty8hEkphjx6vEviGj8",
  "key28": "3dPXBD565D5x5ZDDdyUGsLfHkC7pVRdojmEGxgobim5uy9ikcM3nT4BFnyrzgV8Nd5XMzJvjJpHQRWNLrcTrjrBM",
  "key29": "4vSdc5nmpFsgN89VAZpbZQtKQWMUfwTMn2PhgXdxeMTS8RUMEmkt9FRsvbUWBYFC55WoVwuooX4mRKCMFvVHVJrG",
  "key30": "R7Gzv2uAdWXmqU2DRAcZFBbnhgQqkNQ2LvE1i4cVKcC2YPKctc5SYChyMRHAQWTa3Sqju6ozFirhFnCJHJN9VZA",
  "key31": "4bbWR3Xnocenu5PGbYwHm1s6YpoTKGyViSMLnjSmJUYMugWz5iPkgw3JRZQqTww1i5Ss2f3eSZ4vgBq34HewGdDk",
  "key32": "3gqAMZWTrnNkqc1pwZZ59pfRJ7oEYEFBZrT79nUi74qaXAMLiYQGy6Jy3dzdnuH6exp3zKZS5LGRA4RVrejyTnRH",
  "key33": "5XC5DcHWZNWawBAGU5z4Ju2cYNqgBowEpTw2dSWM77h6nDZssnj6nULRus1dpzqZqsxVHfFdLeqwcvFyZhZjFjA4",
  "key34": "2KqLxrjxtfDjbjNmjzYQRGDn7Pqa4F4r9XSLT7EZG7tqpGBzchQQmk4KpXYLbNfSoNrGu4TeUXsdzJ3htVjnvvFj",
  "key35": "5qScx19b9bMR8AMTw1weiLd9m5cC1hmaDaZH7J1H5FR18KjCTastV6krbDNbJCwtgmp99x1HmxF1m62NhGgDZx5c",
  "key36": "2FL15EEZpqyRYSwbCsTmQEmwazVU5SFv2pLEkQoSgTDrqLVLUZvffYLM2wNwrLRBM3xwyzXANvVoffDYgKfvsXiB",
  "key37": "5BVhXcnysEVTNsAndf8ZMgz6oHEfuXfXU7UsSTbm3bXau98Q5wgCocBtELZqPeqWU9GHRxUBPjiZPiVCfX6r1tcb",
  "key38": "5hDeD5HeZJTXoz2jssGBnTUdXHrdrcZ44bSDG6TS4maxNQrzjSF75sSGciifeXA4JBRqA1ZVrYVRz1EwqMnG4tTj",
  "key39": "2ntbRZxebtnXFrpQ5ELFkAmPUXMcqqgHB9X6BeoXGxYtiWTWkvZ1KhapKhmp7tsZoeDmpnScWDikLGw2iVuV5Uv9",
  "key40": "AaGQ8npSecZ35YGGXj6EWjT9kW2irhnAkyGkThgNniH2KgJ7LRv1JGMJmyZsT2irXN6y3sa542vXZ1VeZV5pGkU",
  "key41": "2kYL2twggwxGg6WftDnGUZMDCLzkxa5pdArasaAhgmg8HyCHa3iSxXXovqii12TCjtjQMaPuVhZmjxsRJXm8NR9S",
  "key42": "2FjqyMDn7YXUYQKH91WD7Udi2ozBQKuD1ZtqtGf6d9XBet4eTMKXEKQucrdi3jnUuBR35ubmBsjWqzVbTTh9RHSx",
  "key43": "5iUyxhuAyYJ4F27rtByudmDTGyR4ikFpLETzNvSCZGhThA7Y65YXRwG8zeKaU7gxjvBoSN2wQ4QSDoFLkADNdLSm",
  "key44": "xBUL3ed1o5zxakDdrmNxWytFjG9yKhswHzaYrz51ZAU6nqvYHqerdVi8ZFjxC4pKccRzb3PGuXNp9tcwM1L7o3x",
  "key45": "2Ex2XryrAsKjAEwJF7hoRR9xeK8QXVQFVcgRmPKkBPwjjCbWScW2BAaPH58Tx3mS7vXX424p6tNRAShaNwDfuFm5"
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
