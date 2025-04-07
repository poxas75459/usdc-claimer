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
    "2dGYhi6RxGXSRV1gN5aTDKPJnDEXLGSAtcyVp8Zi6jPNZkFpzGkLogmZin1s5WvM22ffKW118dZrsqhUTRTffs4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRLmM8MepCGKVPddk5XmPj13iygAiumUaEw629mrZ9Rb7TXNuAyRhbCRqBfuJ6oxvH65PH9KsQFnnUFMHnjgb6T",
  "key1": "VwRyFbEx8r7Zbv9ALZ7eiv5GaXsnmwMaeV3zq6QmRGddeKBy7BPLPigKJHUv56C3aLrGNHQheqhybTsoaJUsMu9",
  "key2": "42TZF4n74iKBDC8rNyxNdtVs5bwpgxfaFeC2N5oP2otjaWRaf2MwdFAVfw34ahDU8kvUWqKqcpHzuugNvJNgsUWa",
  "key3": "5SrHtahWPRFrUf9vMHD38hi6zqEYgwm2ev58mgffZWMxjKUQshoNsioNnrXC5FEfrcnxPfjPNW9YwVq8Jq5bw2p",
  "key4": "XFLC3bKBGTD2Uz2CzJRtUzweCD58v6ZbUxVfWjK5S3411YXyagJpNXD7fqCaUdDJKFPCRXKrQSWJd2VsjEJuU6V",
  "key5": "4PsoQhj6bDi9f6tRNz4KTbeMUUmxxdZP3AWwjPtFEUdctete1jUF4J5rGZefRRWyJbQpM8wBuLasyc3RABXw4hHc",
  "key6": "3oJMpjcFjkvYd7QAdxJ62xtYeL8Gp9v1k1Je5uNWsN7b9YaWtA7os2A35nQbpBX58r8C7KRTLJRWmDrCwYMxLJbZ",
  "key7": "3j7vyrvMHsHKf8YnQwzcEnkFzkGa66rzxob5uYBdNVsPytzrFbzZFyC3aStdETHbQpuPPCArap5iPwsQKrnRtvey",
  "key8": "2iRvScWHCBN3T9KbkDj4bbeTdeFVtmhLdu1y8RoEfDVCrVfu5QYP5Keb2DgTE69tRuAKTJCjNrQCNq89XwXsAQT2",
  "key9": "7omokeoUphcC17mFMxM6Ta3rRJ7diBRKmEJsHJ49PVyZasXMeGDvyx9MrFSBDgRdb9uBZbmSYzw1L4esLY43pU9",
  "key10": "ifTrNBubfHGLA8eAsqfRQFS6rZ1GYRWGwKotcUnW1DQ6v1qK94CwEBaSCKMu8YJ469Yq4JUM3wnL4E6BoJ8YUpu",
  "key11": "3kxUCHynTtDCmcTTgKFZR4TyabiUZW9BAQvK5LnQe9ZrLSqgzGgvy28mwQ5fc4qs6WoXxCxpBveLqFbirmgkcGFT",
  "key12": "4tU6jzpKJb92jwKvE6KQpCWUByJegZzpGKjVimhHw4JuLu6RLixN7PwNs8Hib7SzTFoJSkjZyGrX2AAirQug8zeR",
  "key13": "3jmbGfjuFkzWnt1B9i5iMeKjMeDdpEHKLuLwtDtCQsxjYuibzMVS8R9bQxHo6hkfVSWPaZke18mAsDWLGnf8Vmbj",
  "key14": "2V2CrKd5FwGbBMTxfUk1Aar2hiAtSrruAxYQbVXrk8HtCEwTBwHCr7QqFTdCcP9wZGrY4QU9ebSPdsyytYjDrK6i",
  "key15": "5xVAY7YTVckTq6bDYzgUsE4Kjx6zDKbr2TAMrJ2XFvjUkKLdA19iVRmAAiPtM3dXjmFJjCv4ujvu4mLxDtasizFu",
  "key16": "VHGGDyW6ak16AkjpAfytD1Gcui1KKV3gY3Fg8LioLLHAgZEhFrUitrHfkiMiVfnonpufUWUDHFmyZPStdYk1vUA",
  "key17": "4eYBT3r3MuoLWSwSu1gsEg5ZzrQiz1LEuwnUQso3hFN3okwgTWmtpirjTUaBBoWonHbR9bMPNpbL5YFzcgomYGFg",
  "key18": "5mBE8n5HhXNUt18SyZm5wWapBBBkjuNPKnifRkuWpd2rE3PeEAhsZUe8VzLqRrvzauhF2LNAHs2npUpqHTqSnHgr",
  "key19": "t5bcGNDKNSh5Y3zKRAjA72yJV2YpPvjLiXkPNCJq7BCMTCrF41px8SWaUqDFMnTEpAAvXpeLzNLncCzR7Rrug37",
  "key20": "58da9UocAqcqRPH54JN6orHjhqAX1rzJD4Xu4UecVkf5qSFw1PYmzSp7opaJsYZHmaV7jpjJ7EfapjwFh5JR7d4e",
  "key21": "2xrdsb5EN3LPZijCf7cbz6Fa9or3acTWtaWj8SdHe4LFWpvx2tfm3ypVDmYFs7bUFUL9zq7yXqs6dadH8iUMTL2A",
  "key22": "2kcrcGNMq1ktw1rjpJED81MpphQUKpbMFFNXD6j3UeNUaYKGDP28fe9Z6zZoqryqqi2ZAp6iztKeEnKbFYVGekhM",
  "key23": "2ggBPbr8UztYQqTJZWz12dBxYMcPeRvSLVyAZ3VX2vpyt99cNuzx93zwbMcGcpCNwvqETyhr7xrs5c6nwBAcERmR",
  "key24": "3rscUP3yhYxcJ7nHB7gDG1PdezCQrc2MdeuseVSbDRdrN9fotq1QT6RYrktBBUm39GAYkvhcrajA2qsMjy5Wr9gT",
  "key25": "2jkSeNbjEA81FMMM12Vp873DDCmnAQHCmz46xbgmjpvUAU445Jf5r1rJctsGkyhhfPGnmihYWVgFHxieDsqrbK1b",
  "key26": "pY7EokSMohYEbkL8RHiN6ihuKvDvSHwcRptqJKjHP4a55Pda358LgWeXux77tHi7ppAcW9EXy56UMthPm8h6EiB",
  "key27": "BNZ4uRBhKXfP99n28qVsR54QpQrEKudS2SmE7mvwqJC9hw61RpGWvXFJ5nQd37XKMTLKT7nHGe4G92HSQxK7R6G",
  "key28": "2i2p6gKLA2hGmmmBTnXBuBqRtjrE5NcEAzsCurzavks2PYrNcEVk32B2UjPbc4HnWHdsnNvEqFD1tCAZbDeLLY7V"
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
