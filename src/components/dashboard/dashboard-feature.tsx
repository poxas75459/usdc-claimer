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
    "4S1TnjDCQzHWvE9ytoVn1grNFutc4UKbbYHKq96KgeggJqSNfmhkVsPRVFazrss62SbN3dzjiJaGxPo6oYMP1voM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UkYYgX3knSTrCPAxEgZmEtq5BCp81foWWhaUtetUziKkPEgpejKNoVHXcsgxCcnmDjjWEekoJPGvkLS4j9aJw26",
  "key1": "3Q3kiNexD9KmkSGHMx8Ux8Q8JKZsa7E6fzAqnF2TwBtybUJm8BZJhueLeaxvqw9tGmp9EwvTMnGA2jayMRzme4pe",
  "key2": "5UNg8Gk2x8dXEA94c1bVTQ4emWmiYyvnpL9TK2MZrAmjCH7XvkuYX3Aiq3n3ExvmAczfeK4jwzbupKWuhCWhiF27",
  "key3": "2hmuaEDJRq3uv7t62sNrhcCBYrbtopxFT6L5dbgyLwHLsyZfid5bSRfe3fjNYXGZp36q1kEzSnXLpDrBtToCxLNR",
  "key4": "4isTxWrt2RNVybVmdQRK6SCqDNeicuBufJuT8W5eB8cB3Si64XkXSq7aksBQCaUg7bvL5HJpAjefxxQHL7L1oUHx",
  "key5": "EsZ5qCkSWUXb6k7eU3KpksjWC7xrWng8TU9yDotfMQbsKfoJRLG9E7qkoFvX6ViA1G2Se4ugg7TvbFRnhGef5QS",
  "key6": "3ZbTU9UrGi2X4oYRwAyQiaAAjb8YKeG8HmytPgPzxcT7TbwrApciTb7huLrBFJ3MXFwepXLB1a67BqRHQKEfyXT",
  "key7": "3e8gDXpbPd1SzAALoafXTpWsnj5QTcnnurXjxeAGy7fc37VpVjReAsBHi6NYajNggRMh3RBU8LJ4rYa8LeGyj4En",
  "key8": "3FP9aeU3rWMuiePJvaQ34LrR5u8HgDQkbUez2mAMe9544VDJsD7WjRrN19RFnUB1FMjkknLVdpzgQjrvMf4KQXPS",
  "key9": "sX2UQPQB2LzWJGxU49oR44wyNLavAusuV2hcYpRdwTSzZVb12BJqt5TXbjCmkZUdR1FVyuq4BZ1u9prSXDqdbhk",
  "key10": "5HrKZRdCAwDwNgMztes7UwMqL51bArJsHtakKTaepxuhVtxdyxgbHjca3rJWhmUkCz7gRYBrtWmbC1twRefg9LaX",
  "key11": "4WkwTa19dgnR8g5NFwj81KfYv6n5QPpkDifDJSh4ZgQLfviHwnCNztcwVv1o8Bu2U6kV7QHP2oTRrfL5g6dQMn6p",
  "key12": "4DTaCxfU7W3DZ5RUuE4YYzgZiTvQX7nntpb8ksfAFDawXNmCdmgLhFL6E8gpB4jSCw3KWD2MWVvNGUcMFdtHnqpN",
  "key13": "rXa8oVUg6VgCSr8UpyJeASpcQorbBjXNUCFGfxYePyUM6xtUUaDbM2AeSvVZL1rAc4CAirn26qyhRpm3pLfnHQm",
  "key14": "2ydhmxpoaDbw9bZ16WXd4kL8mpko5L8j9J3qeckpsMEaWV12EHPtrwaJEdJV1kiKURqg6Kaz9ChVRWdhmcNng7HC",
  "key15": "42DWn6Vd6iaHMMnSa18ASNDdufFLiH4XrNwLbhsJN7E4D66rAvK9tr8jjrp2GqmXZWJcna79BGwtiUWGMc2puwKB",
  "key16": "3Fhm8X1Rcq4k6J8C1piY8vrajMVMhDZmwYawcB3DNSxFxZ1n1HektuQcLciRqWzcd5dT7TFb6ukdbiWZg76nWPwR",
  "key17": "5URNgMwdTqYZAFBBy7zBQFjjT5GHEBsCRLtQhNaKPvAiVfMYCpUHTWmxcGiyuQLwAX1TjAUw2JnHSSY57Jbxa8o6",
  "key18": "3MPQL8iQgPLEC3H22ji8rFSfzg5M2EaYHe6bsbjhpJKj6fGL8f4qbJyZBZ2VRqYsRutC49YafsRuywKiHBy4AUEU",
  "key19": "6719vB4gJM1iC3BhLDMrbCyBbN5qbtNZ1zW2nfaJz97iJQ6hKtrGgLDty2HmHNUR49m4mzfRvi1ddjx5pLgnk7LK",
  "key20": "2GXnD7ophVZ4JSVPkRUKhoBkCHXp9Mu5wr1KTZB32xtGW9fY7PrmikGpAjGEH2w1j4eGS8abEDsHkbDAeraBqPd7",
  "key21": "65dRMHHJFd8719ZVnpdCTZHakN4UG87MBbLXo6C7zHD6GVkWBwXLH3p5GUmodewpojxwAxKnLAqidqagyeTrCFy",
  "key22": "2k1UcKCcfWRBkZZVqX6NofFrgMRbWCo5NxJg22LNhWfQY7V1aaBiPUfNBTv5UU3BmB6Lfaacab9Azrz51Sgr6e53",
  "key23": "2N2ycHdCKPKk6VybaYY3Toxb88XcMZQtRfzycy3r39jiypmgFxbJCM4LmF3x5N5QoZvdM2LGiejtTWmpNzjExN3w",
  "key24": "2M4r6QnW3P5QaRJaKhvSozFUSsx6WCw4Jejh3wNL4myCgEnwgptkn2UadqzEWZYjqbyABnJPxUMVEE9eR29oCBUx",
  "key25": "3Drcys7efenVkFyGLhhWgQnnbFa1cahnTX3tX2yZzKHCQoDvMgniXHoYvnF99AFvu8TBWv4XUrbdiEcn7KhyuWtG",
  "key26": "5a4G7or5ZtgHf9zvF9CXpW1ggXoFCEz7iS1QFst81UiYuiqngjW5FvC3ZZW1U7yZze44bFaSCAprRSYGxhNFgA8a",
  "key27": "N3zN5yyss2LPDvJpgM6KvhQvv5MG6XkJNUPMFz9RU4ion9pjH8VvH9rLoB1e9a91Uj2wAKNAJbB6rYDJQSHVjZm",
  "key28": "3h9FQaghv9CzowHfGefBV72qcDLx4Pi9TAQcTDsfqikYQC6GnUqKjnxP8mYVk1pobYWBmpL4XAxcxSk3i875xs9G",
  "key29": "2KpyrMBVmPQyxvTyC3ezF6ZJ8qvXSz8dxJQTHHjAQpVSsH9MeogX2BD8KAcYLuSRTyLXmBE7tPRM48XegPW8jQRJ",
  "key30": "5vj7rdpj1zhRxT9W6RZfZAtePv8RJfqhh17aSiT9FLdmsf3eyqy8jCgCz1AukJbeBFGBCqeFfRccyvqzbCBg3Sp7",
  "key31": "3KZahzC9AA84H7WfJjs2hCo3ZA6gw87h6h2H7QSSSXiG45Ci9RYvgG9jcQ51hXW56LVbEhSiKUMso2T75oc2c6NQ",
  "key32": "2FiQftwPgqU1LypnsKeELZUHhePpZguKG4gc8jG3hxJNaoWEUN2DyiJG1vTBNJeJ6HxiLEWeMMbJuP8BSf7PXn3w"
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
