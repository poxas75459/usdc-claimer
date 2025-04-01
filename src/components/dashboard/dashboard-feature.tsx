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
    "3j3Ai2r4mGfvn69UrspbHM3RfMu6jEU6NVFFcigBNN1yAcC2s8JE7d9P17GgPWP5BjjJZZ16jsRNC3CYrCkpRcjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKcssBX3wgfcz8Rmhp6AUiSFgjAr8mVsu1JxBUWHhYxgMHhc1Ly2GRwUyV55jnsM3zsJxED4fw8Sr1mdX8HE7mp",
  "key1": "3vBfAvi8G9kpKgrYc8juECeXai1HB8LcqrVeoiZZPzLvqmURFTUVssidWMwu3WUzNY6uqxXToxHSTaUy7o9GjY3V",
  "key2": "3Vp6iLezVP3WEMcnkGuSmzTwrPVpwMWHgbk7UfJu1Czjp9NH9EVMvNHsTcQXUPhbMU32z5iR7h5Nw3UuqrYXJtqH",
  "key3": "4qxhcLNNkkArwtGNyBckcRaks7dsviQDhLYaiezXqbshxSQvgdzdeE1dfFos9NeFPs6JvazK31NZEfymeCR9wEen",
  "key4": "3aDAbCxzh86bDoM8mBZskSxHGhsGRs5exRPzRpWbSvm1zgojw9dSNvZDFPYU9n85bDmz4EJaJqzFgb9ZnmZ6JRdK",
  "key5": "MHkwZdS8kpTkPzA1GYmDtVEQ5Rv1qe1N1FopvPEPrLt22ccW6KXYFMdcnUzWSWTs3TRCbV6FF9abFJfcEVcg4AV",
  "key6": "4DtDyBJCmJJVcnBjh8yj6KN25kxxuQhZuBTxHV3qMnVZS4naEY829Mcx7w3ApxXWAvzsdBxyt5LdmGpWTFu2fwk5",
  "key7": "53eFPX5H2GzUGuYN5tjS1nQiR4d9znDNBdh9tp4Y54dvjRC2KtVn8p55g3o25gh3xeKeJ7xC7SSFTvLHaJhi1Seq",
  "key8": "376UEfYXqWg9xTWGAKCMTVvvnJG9Liwc39CRH32g4SdNWGey7ifme844hrjJMQbczqGAvx5wuVVz6pHJvwwhrdtA",
  "key9": "5MqTnXRhsvHJLCzs5A2yuvxt3y9gBC7G42aFH1RtJ1ojUo3agNgZGQx3uuYN7uDx21geTxVCfGJjiYrSSRu7vgHR",
  "key10": "3uxmpqqHfpXhP3n3GH8pwgEaKNLTFYWHLw1UTN5fmWMXANQpzcs1f3N9XtTDgV7tiqyhDXmsoTYUuFFgSnv6FRGm",
  "key11": "5UpYxAzUNPYuHRygTCGF5pHv15vgt2tpS5Eibjpg9e1f4Dpe85mAk6GpcTgvsUy9Z4GtSnDqoncjDFRdGKmzj1LH",
  "key12": "67WD3pQ1oczG3FiMdyh5AV6Z44V2WL5ZPhSvfXT4vZUt88iDfbh8uQC516f6AxxuGER6Z1GPj5imw3fzRZDDRtJU",
  "key13": "473cxKRKFA5yrQEfMTd7TiBSJLMF9qpAzDYamt5rbYAMdsBosYN83ZeJq8oFXvpdNkYdaHu2P3ARAdhJ3q3VshX",
  "key14": "2qhJosNZyn9qTBXKmWzLogkKA4dFHExcgKXRrLg75QXkip9CCED3bmh6KZ1jAHDqj6hjRvFDRX3vgNgdZJZWhQ6L",
  "key15": "dBbabYmd3H2KN987gLmwafuNp9G3m1Z16Zuni6GPPe3qYNDrw7PwbfbMoR8XhAi2anUA2nc1SbVZu2A8D7T4Z4M",
  "key16": "4rFtd6n4SKZYWRhYdAgxCf1APqJU4J83aRrQ6LSa3F4pJ8jzBGHijZ7LoSG2qqLDjKtmEo5XXAbbCDdcHkbs9THq",
  "key17": "3giWmxX4AJqkrrBWa44xC3yYMieH1auSpgnyJANDv6srhQk8e8keQ4Mcrjo4xeyoVyDRrWRL5uuRw42PQeiotRcF",
  "key18": "5nwhPyhd8k7iWQuLUiAcaNTgezrh5tfdhD9dRuvrGi9ZvgmgehAdoZc1wJkrSPd7z4dUEKAKrkrZYYzy8aiTouXc",
  "key19": "2nwB8B7d2effAZcGJApJfkkUkkB7JLRPQLUovUYGsMqsPN4Tiqc91He7zRE9hn3tKvMuxFLci6H1RrLccq5n2Ttt",
  "key20": "5XNxaMqVUe3WDzsYNfpNBj2q8w46VJAPy6rFdw8gBhLy8Wp9au351is2sT9UgiZsVH5nAdhb7iEUqTxrDcc4zcir",
  "key21": "2ZbJZpv8QZPChojTpkfYpYKdF5kMGdRn7rqXGSe1NNHzsSvQEEMDHCTJyvFtrMyFi6kXrrYbDLSVo4tBrqY5MFZx",
  "key22": "2mPYPAuL8uXHPfe8Bm2sagu1iUz59uSN4J3xnZsAYn8jZy1H92zjsgpw5zbJjL4oAExNpUje18vmuRFoWyVSvVgN",
  "key23": "4RG71Rpc7v1yVTtj5VyRhfB5dtcnt1pGWqf6ab6bo1egKjvaSiAekpjiqS2EdyHVA16P7PNN8Q52zvho8UksPczu",
  "key24": "tuRdauH5NePam2eotL6EEi4S3Y9Unerxrivqqi26LGCR1oz2ojP7J9ifuZ3snv5FbFH7NxhSspdyEjRyRLGgqpZ",
  "key25": "5tAu3kxR7vrrTRARgryjytjATf2XicHapkHA8y1CaMJz8gXQzpTKRmJCjSRL46F2A2RBuzLwVS1FTbVhokbvEpsF",
  "key26": "2vwseiKsHhuVFmMz3ND2iGtiD8XBxgCzFk75kB1Q75ABgoD3WJAWJ1ef3AAorwwGzTKy6Ywa7v1NmJJrCkYFByP4",
  "key27": "2w13Y9Ut7g6E6KXrKgqDpnGQRGLsopbvSvTB4y8fD85emD4GQgSp6FuG4UB58ogHvkhhCfndsjgt6ZPE3ZdrAw7A",
  "key28": "3agYSK7X3dSQkWWkt5zBCPNQ1jnBMQK8VHqSzzDKDsjzvyyCGKniohhoARYr3aXyhoXfwqdYF42YJeazcmwmzSrS",
  "key29": "4Sd1JR7EhreD7nvmHrPR8H4g7djBeye71VBkYqGozPQg6fEnMioG35CxXiczRWciaMcCdZ31U7uzDc79ATxGa5B",
  "key30": "3iBVPe6zmrnqtgnwHH19QSVJ24kGH1e9Be13feus3U3v6w88rPqV1nAvn8zQBzLAucbuypReDmb9evtyToqW1s3a",
  "key31": "3AxVUYjwHgApfo8b1Xd9HBdGfntCfTx1LZC3DabVeVqNmLtAHLVLbPkzdvWhFVFN74dhXVfHrpVgA71mD1wVMrD8",
  "key32": "34mygUvqtQAheFLN31zjGvXctfhYUAf3mHQcckYuwxjeLiVEPnW5z6GqkBkF8iRizyNGiyo5pUKiCJDU38CSfGb7",
  "key33": "qfcFtnxxN8ApQienpSZHJkmyjtxrTKkESXNqoNbLN4wzoqGUmL4e7rsQGmfAHoGcfx8KpfEHi6iSdBQpTfjTe5i",
  "key34": "42Ndz3nszcmgZ6hMsYRXX3ps9TFUKkbJjAY6gwyYL4PfXNrXjS4VvDg7YPAdm4vt5ViXj7hakW7AJZZ3Lw9KNYcG",
  "key35": "2aipqgDhWPpZkP4HdTfaCUWwCD4zFATRQEJ5ePeoBvBbBZGbEqRZXADo3RkqEdyHNzbZyDSSyWPXumGKRKf6MBDa",
  "key36": "3fqed2Va2z2ZLBQURmcF94juxzi2awveQT5SXYmny8je7TMhmNXYjssYnSHEouTPbmBsVNBvT58CBWCErbvDPiyQ",
  "key37": "2GHxPSCR3SuFFbrVipMSoXodvrXGDK3CcXQuT6GHokEc1fLCLvBmYngUsEdLK57FmKe3xsFY9er7EnbzLsjTDC2B",
  "key38": "4DnR7nGZ1TZBBfSqpxfwuMJgNWPB7Dqy1urq5CRx6ucXZ6YGYXDMfhU8BWPo727ipTSbdNufT6Kq8dE5uNR9UCWi"
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
