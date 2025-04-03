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
    "3x7VGovcuWQ4Zb1hKSDMoAQc5P3BN3aMotPY95dgSY4L2oux2kMEkhsWutEwbqyujGoAJJYA4qSZtXtc8WPoEdJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L5i9LFi5azSPpdqFYrQCndjzT7zj2cYkHxafxa8Pt8EPhDofR5GZx1zjXN5aR8UrQJv5PzMGppuBzXmpy93ASU3",
  "key1": "2F1RuPMq6iRaEfNRmueYswkz34bWpEMhVud9kdMbVT8ERNvaDgFRfNZGtKKTsHxbWzDFBZK6j36SPx4sxd2eGE75",
  "key2": "5L6dL8cFnxhECP3ZVVTU6grjV253e4SJs19yVZi4UVH2LpsPyBey69Zw3GhHCAMqqaKtfFLdz5mMPEMC7d9XmTZb",
  "key3": "3T64qkBJyC3J2RiAiH95YpRRyTZ9445Dp4T4BBZSxMQarsZEcBLAdN7JsQsJGY3X1MZPLMMPFbGJQpsrs5DBLoZ1",
  "key4": "1XHKddkBkQdbGZYgwkQWDjGDhkVU7pbjRKgErfqj9UmzvptsuvAoPWhEQm9WZeQBugYiihinF7cTVnJgneQWiLw",
  "key5": "3KbnHGbJ81FQ9ZpnQgC4N5BRSzAiZsiN7cXazkGGc5Vg1fPLhWhRJqPMbEtRwSXPhC648StBzC1u3sRWDyngCZg2",
  "key6": "4YTazH72NydAvnpw61thhWTinsungBdSqUeZHJhvwD8m9Gpjpg6Ssz6ezGne5nH6TZ6BXdgGUyEKohGXx8FHHCn1",
  "key7": "5qTWw2TFcyHiyuvQ52yZ6FNNGuoyN3hAqcGkR6d7TCxkK6nvF4Nub76RMTLT4KpvkNRXM4gzaFCCD2dUxCxKM8Ss",
  "key8": "4Ek6vCyJ7f1qRbdFxis5XCySPiAFKFRBMKQ81ZWpgCkTR67JjPoB3facrDfCe5Hcw3t8g3iVZHkntPNt8yM3JM7s",
  "key9": "4fPNTBmiPCaXY4ZXGd66y6UCeVrfpKkkzsT81f2egsg9C4ewQn2gksmJRdXNCgYhG8TeNx3zc4gGGyWtDRNzZETo",
  "key10": "5rkZVqJkBQYGdMr8f4JmuE5aK9M9YHE984qu3UtCaedWhsfnP5qVk9NcfE6uo8mJrRUNh3VfFSA6ixAmuHvhMh6j",
  "key11": "4TK4LGBPotHhBue9RCT8RUL812LQrX4A7wvXeRH1Lmvsg8Nsug64ZyMAcHgAQPhV7giZmxvUTd3jLumtgGWGDF7D",
  "key12": "46gdhZsv6Zp2doba2k9P1atW5REhHWqQXvhKBZqTtzHYVCXfqAkviYUCELFcrhNM5pvrJdhWjnwu6jfLT2TAeoqL",
  "key13": "2b6VZXhMgxBGuhanLxS6u4qhLXXDPdF9q7xWvEYn34j2qAKGM3ztRPkpRjjhuvfiJQnPuxnuSJBod4UnLzqUHZ3w",
  "key14": "588598FCzqyV5MUXWcMBmqw9KybkxgQ6WNdpJWL9Q4wUBt7JJXu5W3hAEp3v3D9rfnVfiSmgsgczE8tNQc73A4Wi",
  "key15": "3jYWRsm9Kay7rVbwtxt8utcfnbeT1RoxNPm3nRzE8MiEbLazSwCGBw5Z3d51fafhVg5sKHKVCFJZ6gRJsKANr8ou",
  "key16": "27XUqTwDVgvXqmk394TSRR3BPeQcmbTxVotSAQNgvfu1ERoHP9LoxBiB62gL7zJJx9iWhKE3XhJ8gWzRb1pfEoze",
  "key17": "42csyPigAWaSVqmjquep1tKgfEwEoCLmMkw7aYP39Yz69u5zWqumtpuUDpz4youbUcnupxHt3Mot7HTV7kE3178L",
  "key18": "34sRKuc95h7fL3meErNipmuYGXRqRG18JtwYytzuZf3WMEB7o96egmEL8MYfE4F2A9iA5zYcPpTTYtRpoFD1vPL3",
  "key19": "3brbLXvNYtvBQwTyHN4FLRCv2kZ6LhfXzEsa6Rqkkgn1U8i2FRQbRfX7zKVB3nfzcCE1VC1oBpPaRdvEoJpC1g7n",
  "key20": "464VGb1CkqYnmX1hSPti2kjw9GiozFga1khPBXTRssqv4prtwpFamrKTEYhw6vDawBLn4hAF3MC6tBj57MFD7Hp3",
  "key21": "2fR18q8eiPTuj1QsVDxFU66Y9esEbXfPUtKbBHUDdVtSap2J7TagkNoJorWHxVd3Rc5LDQEaG1XzT4caE6VtNkgT",
  "key22": "5N3fUNHzVQhpTDbBJ86NCqmosp2MDjmWk2xzsSztLo2SK4gXq2LPE8YUSJ8WYdyfFeG6sEPQJDUVMETvsJH4r7Go",
  "key23": "5LnYq4W8j2hivoh6BFdUHjTykjTwVRfBg2zNfiGcQZV9uNKssMCx7SLkHWGdqUDA82pnXZkojLJYajrHGebTJVUn",
  "key24": "c3jFA4BrtXX9x6tSy2JjqnrJaB46jUr5MYRtSpQYv2PBQhGXrT5PFxAzeSzY89FHxhuJ8EP7moTwahkwqfsdUby",
  "key25": "4aYfDfeDa45hsLoEinY51ENiKQ3yu5s9MnEYfdNqH2VPam6jWoAMyd4YSTeXin2R6rnCcdajL4F6gTtuxpkVpfyu",
  "key26": "2LWCCzWKAAUzUfxiMrSKinH927Uv7nLwoDgXULVrccyrBvNfkHr31XpQGzKta53gh1z7FJgVfmZ4KCueDu9kFvw8",
  "key27": "4zYy6w3XPYtr1HBYwZi2XnyYxTNYxcGW16bq3PpWVAMJTTqoi9WgKQ9nXKXKSioJWoePRcXzvSoGGmB6iWLH8M2f",
  "key28": "3Biq54z8xRD2RvZqmF8f4FTD24BKcX1jaynvjmn2HwsWRvGkUJFtYxJKGDYgjNpWB3S51kQu4uYiBUKH8VdhUHLP",
  "key29": "4K62wREvhb9hy3ZYtdFUnRQvkUwiCKABFbZsv9xoJpH2FWLt4fbVzhbX4x3m9h65mgDMtpqHSncvfushyT5enQio",
  "key30": "azJxpqeg8ygpDkh5AqdtkkyetSLk94KbCx9LBh3h457xVgNNTenSLwssLdwwyaskBu1ixWsxDdvtBBGjFpn4pQr",
  "key31": "5mq58hUnGq1qH2fZEeC4DorNNyJaAGizxxxKrD26JcS8JyAn2uA2UokP1wSzDELH4vmbLrf1Hd4HZiyHCb1V1j8b",
  "key32": "4VvBhxp2jdmR14A8cH3f78X7BNcbWC91CfBArMapdbKiRmJgZ9AxanVkADmFY2rZxH2yK19pWcMDYzNRdA53G9S2",
  "key33": "L3EGBmVrvBxhcXp9FU9J913BK53HXYtxdH1P6G8KWJas7SHLMaZxx8za7ktCrrnprEnYy3pD9USavAT8LgdPar8",
  "key34": "4GFnuFeHNzYUrb1hJjs4j8abRR4H3B11rT1Bej4TAPVqS6NH4VJHjRCf4n52HTs9dkbkUdWhsgs2JZvMmq2yv4ca",
  "key35": "4vhcfXUn6ayXMv8EFkr3BKZ2mcMv16ur77ZxosKACDbK7vVFpMf5uNJyZA25sS1fmmJPcJBtRoutzGXszPztsdbw"
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
