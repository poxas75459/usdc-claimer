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
    "5eCh2X5iZTkAmKZwHChz6kQob4CunPuSzpN3FKcsRVYXFgC5QCfWdiFkRCHMkxpLqgE9D1FxVyDqWMq8LRdZ2Car"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PeaiHhrsfEfocTnk8HBxUoYvcf7jcUQ5fUB6fxV1ezaUYB1nKvF3vcJd94VexcNmoDuLSFqDu6JcHa8jVyTRt5R",
  "key1": "4g5goF9aXetNZbFa2PsYqmeWLJBj4Nk3HWfGMeikjt1tGzfDiHB6gqRvggHX3x6XTuTZsB3VVwK4ttL9VA8MvWT6",
  "key2": "a26NdJe4CfaN2bJNnqdCgEwszQZAqDdBTn7RusaPWCztK6pXZDsAEUvzRmazw6WPjbt92iWNB6NF5J5TH3xtVrm",
  "key3": "VMDST1ud2kHHpp3gKYf7D2v3WJzgQLTaQL6LX9ue4h89u8Hn9TGjns83DPxc84768MjpRTygDtA9FEbG8BCHfuq",
  "key4": "5rQQFv4nNzAQ834Jpi3faQMuytpYdyT1gtH4dfyBb6kZbCDrZXqbBuHh9ZWQhPbHfJ5zfrFcoQ6AAcXrcJE386Qg",
  "key5": "2rqCkAVjtAmGjVeygt2yYuL3Kwk7DLuRfkxpT3bUQZSSB5ifi2v7oxUFqGQ48p8msrWVnRdbeTAxXeNvGfq7tBQ2",
  "key6": "2euQYBDz8ZPFtiFK68AYRoyxB1UmTzSQ6mnZsbuSBGYwjgtmQiXZE2diYqcSixgdMJp6gVF48csfLfN8rmGPc4HF",
  "key7": "21kDuLAoXLYsnERF1Yv8pNYSPPCj6nJtw3wy3h6tDM8VDbK7XTauUMm4SBnhaM8EY6NJu3rZ1WWUv98mWKeZFs4D",
  "key8": "3xZptFH44fsUFnsP4nDBsyiEzU7eoskYu8SDCoRaFziFRZESZg5cS9scXfK72ZSzwfHnbYr9rvQjpHZS4Mw55Sa6",
  "key9": "24iX8CZSdgYGqaRrpB8GBTaLmUoqwMUqAVDFq7U1vX78PjriudJKMneWY95UGJ7fTA3VpvQUBSFVcX8nRuPe2dby",
  "key10": "4BZYDGEUPMmDn9LA5gvsm2Zbtmg9qd1BQ26LFeqkfmYd2kAQtKJCfjShEH2fTtgZH2BQAMFgnXA9Ahz3HTtZkQKx",
  "key11": "52pAgkcqmg1rr7drKJRNGq2q1nTfSLGMKw93ezywQyeqMTTjsbze87DqTYs8epn6jv4h89TekLSNVhuCYPhScryR",
  "key12": "5dvB34i7MWnRMmNatKsdQRmcLkyEe6P9LamR4BHFRJCvjQGG4kVGsJ7PWf2pP3DxwY4wsiNBTJ2p444WqQHi7js6",
  "key13": "3Tzmp2myk4iP1gD1yQhMvk1qZB8SjLdSEZcW53FiD2y9XCouAxkayRbTxL2ydhA1E97b7bPQQeA6hfzkBgohYm4G",
  "key14": "4BYK7bEJbJbQbghsmb2n9h7jv6e3ZuaquhH7QCSr3QQcPe24id5jPBjDMbw5SUrAFJuzfBUSVh3xkhFzW6nymp1T",
  "key15": "38u9RtcsxTueZnAHUDgCsUUwuxsaB3VPK28dFV4PChBS6s5DjGipL2mHSNHHAUaNJuSCr4VbwBv4WCSg4NiiuERB",
  "key16": "5mgkP5NqU7u2E8QUokQCYnzX3Fq4qikDSUmnHdjQFE7Hr3wVYPveVLkiidNYYGi8RRbwM5c2eQuXADKXqEPgGFAR",
  "key17": "5eEESC8FxJi6V9nWBAJCqkDv9hFnfZFPzBRnEPGRVFGEX1nRaCSYB7n9fZQASH6Xz2xYggH9uuqcydB9BugksFmB",
  "key18": "4yMNzfMeMttTxLjHYpGN4sodtu1t75AQMUCFLv2LyVoW2pNJvLCpRrZptAnwcctTekzJuuv3wwpdEPz271Uu9cfp",
  "key19": "3uauVTJgtnpG2uBDooL4unmLQXMSeajbuPsLC8qDgm1vXGGHiqAtfxv4FBdPWvjn2uhRrf1kB6kvXXJi7GeyEhpn",
  "key20": "2v8WucYvvzmyFYkvgRqibhyL8B981g8vSo7La6PDwKVfQBAgq3ZRDqwp8BsbuJyNniLyv2o3gFGLhL5v7rNDJ98B",
  "key21": "67qenbkYzB2aXW2noHtHYT8AJ2ZMRea8t4oqWjeA66vTccBGgX36YrQy2B2UXqAb8LnSW1BkpYxypKCcZrA9VY3h",
  "key22": "2wvzDipGdpDdepPSVBr8TqsJzk4v3JhK5E7vTrdEFgAQbNDfNF7VA33LEUS1x6qBx1drpvsG5miqabALzuA43krF",
  "key23": "25W1YbmRgUVQD6UP9NakWWyxjBtEYQjSUiJ4GBsFtYFdqP5U4bJz1kBBXQ3VPXXVYUu66ZaxwVQqJUowQMqMtPn3",
  "key24": "5BHqETeULWmiZRt1Yfzrcf1rxxBwA3ugmGnqA5zENTJbPhhfvPgoQMaTXFkNV9ZE98aTr6TkrMVFNpDNFfF8RGQf",
  "key25": "2kmfXiUUChxvjDy7MsrxfFxzFGAFBYsBbD31cGwkLNh64BmhnWaozVBQ3dgpY7XCUv5haC3QqL3cVjh7wd7o36Mn",
  "key26": "3xzT5NGaLBB7Bdw7JHXfWzJo5FC13v1id9ebzEtA5CJfs1VJ42kGUxQmykn576rYBvKHELRZMmeHBobYuWQpSaCh",
  "key27": "2G3mAL7w148d1ZhDV4vWync3VHJAxgGUHF641yg7AiRkPK7TgEUFWac6SsAenXgD6ZMbYTCicf7HPS2TSh6o2i41",
  "key28": "4f4t7ogqoTcpkEuRGcsvwDCv6WoS7rnZcuuez9dtd4GbdtCgG2TUCiGamJ2PChwqeFu1BqAV9w2ey2yso6sppBNL",
  "key29": "4DUeQMfHNbSza9zqF7GiVSHFon8vEmd768VTPBLyNib47T8CKGRcSigGpMr37mzy4Xf4enLWWB1NdiRXeKkimdyQ",
  "key30": "5hWqPGAn3bFiGZaBgRJVWEYLKHfryogzALQ3BLZqFBwVvg32May83VhDGvdR2zNhayYD6Ae7Kf1AV1FceunC74xf",
  "key31": "5EVDb2dFfB9q6TP1hEarEYGHemjGnKTXD3MPTEQuyVY7rArcu71yz9G3ytQwhxEbyEZ1hnApVLeBjyFyatRZyPHZ",
  "key32": "z4yxocjEx3XobqM7EsdvEfmnPwcfXbLHXzFkF1xEUJNFZwj35nD39UM64CYN3RMkHAvK1q2DL4HUW52gZxTi3T3",
  "key33": "5j96LGMzRRGFLrFHPrP9GaHjLAaw5KtsFmtD4gd3JjA8QY7WsPAGb3kafFDrECAFBgt1MN8BqqNcft6KkBV14Mg",
  "key34": "3ccZzLYbVuy22zpi5eSwTSkwq3GRmAWbdxuMgJFajcbGUqGNKJGkufGGgi4FjbjUv5uWbGCdZe7FUYoNCMccTn2T",
  "key35": "2aj8d8LsiKyr6PVsAWWxYVpdsbMzmxw1LrVtUshc4nWVkWW9kbzCbUfqFc7j4KWoDuQcAusUdvap3tjdsG2dvdPx"
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
