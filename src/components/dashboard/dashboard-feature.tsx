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
    "21jJpYZAemuWq4wRd4e9dmJEvnF9x5HGXATSzvnTj2T7YmaKNPm43prFjEsGfy9u83tVQuXi7ChnyXhNMMQpyhwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZLdSA9jmMhVLEbjA3v6n5xEDMLt8X4dPGEq3PE62bUUL422Np9CPWN2XXihgfgKikw1bUwr9AGJZaM7Fw8htfc",
  "key1": "2jzvt7YFpZoP2fDCAB4cRvhq2MLy5wwD4tZhdo3w6CVETfeEFLVVTw8LGCQRsAcYmVyWCX7Rm9yGAhy8XcCTjeRa",
  "key2": "34JXqCdoFkNbvkCSHBzW8qyoaJVEY6omRtiuvMpV1QB4ADxU4cm1PFt15Tg9e41HAqU46VsaBuCkRWbdSvtoxVzh",
  "key3": "5XXFJhpaP4KvApXZFrTeioVvj4uWkzT3Ezr3MGv6As8mSdjM4jYNC3iL1qAL7icNXgwF2gFrT5N3ZD4X9GTwyoBC",
  "key4": "4Pt2qdFP4S2YwzkhKvXD8wtds4xzFNEgmwAiS39ixetGcApAzmFx1NwCLWm1MM3F7dCZo6d7fKSN1NLFGkfRvgYn",
  "key5": "46BKxGSeSycXW8T522opumfEAuwjMjD8yoPpqvgSrFHS9KvxSqpXe9hfbVWnfXhAC9SXTevB4DwmnT9SdCkd76cn",
  "key6": "4fYeiGaJRZmtxK3SEhouPsVpGJ6VCX7SoHFPfYQgugPtvHer3ShRRxJ8sTR3nb3ktPnLnjqneXCrosnJoc7L2s1M",
  "key7": "5wfrbx51T92bNwih34M53ART23et518FCVE8iMc1X23BpM7dKjbCjyN7VKkpN8X6LGWF7jf5RqAgVVMuFM8U3ba9",
  "key8": "2jqT6D8uWXenhU4kyXV4NZZ9MENF2zci3bfK4Ab3332LgXHPuiHCMMrCGTkirnZRoYcXBsRhSEM1uvZMf4sFsEXC",
  "key9": "3x4mKVpMX9m84XRLZBpUoJXkvxg5SHG1yoieLV65kKeJ4NoUpXG2UaXKNaxSPtWKppsgvPSuay8AbQq6inW6ivbg",
  "key10": "2DYSC4EJZG9YW5WAS7R1SYnyZ8M4RW86QpUrtNnjETj1cjGutEv16hTnG25t4pS41nsdnDU79TGD7KKjeE2cCCen",
  "key11": "5RCnLgbofNoWPgdsJiUAvM9vACmV9kV6pzunLm5xCs15Usru8bU9pqwzhp5Prs59MqLsiDsUSEJd7HyRRzEExL9G",
  "key12": "3PhdFsw4eh7Dg42Vd3vNBArHkm4FTacsqiaN4WFaQBXtP5KKmWepfy6QfdrwVSidLzRpzyEEc1ZWfiW78T9FPtEU",
  "key13": "2xev49AHR1amsRBkcDc4YRsPTtm2JAsQDyeYhwQbhkL5HCYDh8dUtqU95uNTr61utuZD36fMTKQFkoPCmfBVk8mT",
  "key14": "3E7UYeAYBiGgnpUa6fxy2mYhikfm68fomvmDV4hNtZf27nmFf4FV7AdrKiG7MomFRkYpzDXDPegFEZBfKVKsZpB8",
  "key15": "5Jk1BgPdn9y8w3pQZ21fy9CP1fEkYs21hahwCQLtJrCB6UdtuU2CxcmMRV3Vp2YXXDZDvAh5MX4DhUW5pjXJMJqb",
  "key16": "bXooRRCE9n31axPCa3jpu7YZvhJZ24sM6Sb7jKzZKjWqVNQqF2tj1NstanAX5yrKs1smGbYMqoT6ahrtWKn5wEa",
  "key17": "36c369BQGskUmojwQfSHDXf2VFEQQ4mfpv1qEXBoHby5oXpwCFkiHguPgL6AZgGFsSsRL5TBr7YN2Ce3gVeQSf5V",
  "key18": "4qeDxg5NPELyCygMKxmTh3vgCWKQdDxpuEwSNjUXat1jdqseDnXWZVgyXyoBetyVJigE3iirWCAWwNtd9QxLqeHf",
  "key19": "5EWL6iJjmhWebQz4vuWYVTLgCnE4wJCsnJkMx27zvJxJDveMaV4gZXXReNXrE8TcVoAwujT7Tsx5vkfUZPywjiug",
  "key20": "4qtDUS21cAnBVm2hg7Wu3pMk1oooFNS2j6zWkpgc2kDdftLWo4Q5bk5zdPxhLUTstQ38HZdAJppwQTE2xFZ3uJ2t",
  "key21": "4JmtxqRbQF7e9Mmf1d8FQ7oYBQPEUoQGkD1w9EMauM1Hhk2z7vfWbPyXVz8VxhF1h1uyFrZy4CTCbLbwuUG6a534",
  "key22": "4kyz2MrxGZ3zPh9AqUgRVtweAHWhjT3cf86otn4kJQmAXGuvBb1bSZLDTQopz1XaSJ4XrJ576k9cWzVEUzXNZGNF",
  "key23": "3dKn62G2a9RLGjUz3VEbDne7nJV8esX4KxiaHaowwtxvx4V6LX1xxyFVbHjQGpaz1mqhsoonCwSBVyvx1gqdqsaH",
  "key24": "i8jqUc4GUE6sgxkJbrZcfQtqNGsAegMYHF2LxhYon52rbeaG7CyEAxAssz1yd7SedtbuPezFfjdJ4g1W1ELhkKS",
  "key25": "3Tx9p8Mtb2ok6b7LsQBjByEwXSQs3rCKvvERwpv39gCooV7qgTgrUFcKinE8RJoneMo4RztLhizjEk5fqcDkUd9w",
  "key26": "5R77vjxgNmpfvPJoBdgBQzgy8qdPnvkmDeFscb346xANntYG3fVubA9Fe2TLrYmzT1fYdn6MGt5R4FxLJ7rqKTLG",
  "key27": "QVf3Bhkk6bUMtrQLNA2gt7D9HEAenSSamBeHPTmKzqCi8QiDTqHXLKU5fNWbSuqUB5ikx8Mkddc8sQdUddeFMKt",
  "key28": "5ccWdr7bCNAkFbMHdoksWPHR1xTHrD5BgccuzYbqpQsj23px7DTqaFRY4U5jiKP4cHeHRyYbUmg7gUEvVPXExZgx"
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
