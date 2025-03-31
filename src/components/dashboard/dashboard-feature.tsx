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
    "5UTKy1dJFXE1ifbw4upSds6DE6yGiQV9qs2YfeMmDd6p9yDj94odVJVTrRqTS5LiscaX7m2LeUC4FG2TB6k6Z2wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mmPLXMUdznXMbWmcPSfnmD76FSdAJAPUJaBGoduYBdeZpBKUc4D4B1zdj1ZZwuF24rAu3U8cjqf55HLBhYM5rq",
  "key1": "3ZC54GmTTAD1aK24WRJQ4jsx1bQyu776Tf6UWLY4cyqCcJkmQd9rDgAqjqVHjp331Waacp2MbXrz6cmBrKyGijYh",
  "key2": "4joHTFy5YwJnEDTzMvv6J6MWZinYMeVZ2mdEAorjoxJb9ejU1w9jXEFrRUtLjYQQxZSKz142BqHVSv6qHNU91MYe",
  "key3": "5XDuyyW3NYG614GsPmBC5DLR3pZn2Vb52YJenfyaz7csN1jhSdAnQXuksRnAuvzTF6ezDUkCey1ZucnuyBxGDAkH",
  "key4": "ihRQqN1mCxBmEpSaXHdCpEMeMpg9YynNGETx4hhzwVchvP4cwWVLCdCqPAU3srfJkUhgVv2DT6uBNubLL9sJJTV",
  "key5": "3Japs7NSAH8X74Pdq8yGr3aF5frAhMXBnqHeiDJdCdzxdZF9upNKjCJMFFuXagZvfMf7YvEaF2ubdJ4ZV1URrPKG",
  "key6": "4ur4yN4KUb6LT3xQDtiHVwtiycoJukAA8ze7HsQBM4ytN9RbCmKBRseaCvaU982FuEBDzjBK58DiAuAeFCKa18jf",
  "key7": "4xHoKJqejywfFCxg9S6fWcbnuZvqhvTpJza2sR7BLjRb2ngecoQUkSoPhA3wu6onNfuzT5eGGC1yuBcombxPMwv4",
  "key8": "3ZdDTvhhgbBWajAMsxih3v72Du23k9Jb6G1yLspyGP4BBaTQ2iXu4ukDgcL7j1gmp1h1EJgE6oppTk5PSh7QNJT2",
  "key9": "2dedHYG1k2dtSpeVsY5XYghsyW7A5PvsuFKhpQRiuY8exL2oBKzVi19fneZFji6Sc3eoEA6d4riTssbkX2q7oPm5",
  "key10": "41owy6fHQ9Q65pZ2FNRjpsGU89ubdcxa1hs1nzWZ2zNRKw8UcWoKLBoa6oWCTziD5FLQKWswHtfXhrrbg74ybcvj",
  "key11": "5z2tZZssPhppZpEfVMsgx7ak4PCFArd1oW5LaB4opqw86sJizQXYqpX5E9b81Z9wNahymNdyoZDAuLCAbjEqanrJ",
  "key12": "37vimo7oPVMhptzgNgwob9rD1ja4G2sLN7EtX4aQHGEadpmG7W6RbmcJaAbU8tU1dyWfjxqNC8YNc8TgsjhgVsqa",
  "key13": "41UsBPwHRChQiNuhS6KAghPvHi89bsAhC7XTCEUv266GhD52Yexm2A8YcLar981WT99coLtbjtWBXzaDkEyvXQQ8",
  "key14": "cpswQtnQRpQq4JUsr2iNfW79qaSgh8oboujxtoGMhsVZ7qM5393MLGq4FpDejo6Hm39ZNV3ZbtVJ1ep4Xv5SXEM",
  "key15": "2rGviqTVeDXzXNueKouKhCQuoiiJ69AqXHySMAG7pDguWLZfZyJn7xeswSvmjmtUTUs8TU3L6AEDAVcN6CiDALR9",
  "key16": "4PmNjDp51jhCJDZWXc9KRy1JEcDdTrhKRuU3VWpYs9zKFCmqKEJXepwgtYa3GZwbbzh9xaBd1urRrQHQdhw3d74Y",
  "key17": "2zXaUCwVkcBoPERQHriG9uJJ2Z1EuLfxQQKFC4P71f7dc4S3YFKdSBETkGxhq134MGo98ogUk2UyoxkjvTGNCadT",
  "key18": "3eXd5uavkoShkJMKjLbAhZfD1xS7fUbLWsXSFUtDYmBxT3kesarPMtUZqzX3FnsjkTz1JLbSaDV6VsiMzR7QFNwJ",
  "key19": "8U4CK7ktqYAJaaGb2XL6KoWbNaNvXTDFyWUof27idUGoFHkQb7TDpQynLyH6tTfbCjyptkaPBXYmTGb15buxFqc",
  "key20": "5fFCwtbAYKRfTVT4PCjyUST4yyitp8S9QBVKsCw6MN3tWBPwzc5JFWa3RtTM2jT4nRnswLUWC2nxtU3K5Pb1aKWZ",
  "key21": "5kDvKCXy5YvBWCcJXWJciQ6zoWvbETY6VgETXoke1G28eeRFwiwBoeA1jwFzF2Vw5G5CGWdYF9snwxinJGM4uw5q",
  "key22": "5cyrP4M3EM9N2mzG1iJzkfZ4GRjeeLBi1STSaMBjbU41Rp3DVSrRtaD41iwqxBUcFfczjvz5Mn3mubc6rt9xaP7H",
  "key23": "2MJ6PiW1xtuYnupwGNgAha59a4VoWECpBdPGcNErAdehFukocdFRyG2SXeA23fCFQh1vh82kFirPrJCWmJBpxC1o",
  "key24": "2Cmr38wd7LDb7dvv9vBKK9nkR95ufYdidH2rruENw5NomT2NGEPgfPoGPv1meuQJyzruApEei6CTfcoW2DqFtDJ3",
  "key25": "2k7REX1DPRpQm982WYKPzwN98EAx8ojJgxbcSsQyqMQ3vZ9VZZipeWEkovDdPSZfaiQvUTPTQvQH9yUUeczaTUJY",
  "key26": "4TDkC61MR8wcjJNh9FtYQUEQ3mM38PRMPsErGjzxztA1duYf8wvGHFjRGkatUrvcENnjS858wXQGkTJZ31TYko1C",
  "key27": "22xJZjphCw2T16LkSjWZizhcGJicPCjBa6xWJY4BzoP1ko3v3aKARJDnGgSzdB41SDi1RtMwoTvVU6XQPZU8ef5L",
  "key28": "3JuXSpaJa9yAGzZsmBbdUq2iXUvxW5QbgbCXkhqETk37qfXMgENDqCQRzgoxXYBJdnE4AxYg5j46wnYkceEmF6sS",
  "key29": "5Pxe9XpuECf6LCLoWGVwiRCgykVAuVhiMsddfQc7Uz45NCXVeVgXscn1okFrjpWr2DNKp8pacH524eLT4JwGXcx3",
  "key30": "3F6dpRYsJwGpGq29yE8BPBc3g57y5BKbJ2r5dawu3xc1wxCepZmn9xQkj1t84X7VSFjEHQcomTVNByu6bXA2PkJs",
  "key31": "V1fvmC255Uix3QLskq7fK3ecVVDP2HLLMKLBSCCrni5ThQu4PtYJ385h6h89f8QZA7vDWSmyTbNrmLkkau5mXeJ"
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
