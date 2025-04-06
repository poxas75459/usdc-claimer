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
    "3Xa6KZtGiyaxNUQBQeSvYphNFSCcyBhntfwmBrmhF3E1EJstqpWEqGUs2J7jaAVL1kvWPuHdQRaYmdijATnkLtpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2tYdn2L1Zbf1tJjs52ijPZ47gyxrF4beVHRpK6SztzGF1KnwThtXvJFUqZYFMmacKGp6KZxQwLTBuWWkFo4947",
  "key1": "66Y2ZzDL27HLgBi4vk6yMaJyiZ8wRmqdXTq5eT5BnkE27gTLz51vSk541i6AFqtrnyuQKtH2ydwFEXkMiRwrHZfZ",
  "key2": "3N1dmNXaQd9n7twosPs9pLwXgBEXBRLKLyGYis8o5P24tXqBZ39njZM3zxPENwUax31HqUGmbEe8JWn6YzKd4SLY",
  "key3": "4aDFio8opesH571guEjFLKfc7phtvN2epi1oe4QgKt5yaR8WRQyDh4ARHgQ7AMdRhybvS1Eu9MXE3h7fqgqJ3nDn",
  "key4": "3g6WBTMTwqcFEoXRuArgwUnJnVv4RcJrGN8RS3en6tApukamFpRdHaEoKQXaXxRbu47eD1qsxsHL4XSwE6xXMPbL",
  "key5": "3B4GqURhbcv9so5XLktWCNhEkorjE8VMMiZjLQnuhR14YRLiof8vCvZ4MMrwXX6177Xe1xKWB9mAKkfM72W93DE3",
  "key6": "62FADT5PAf5P946kmgf4acP71N8iZYioatcFAGspFJrzZQ66Ee7WdtASSbDe3fg5FAreoj4LPQD3xNLzpAXMkko2",
  "key7": "2wXxaM3Nd6R4niZhnSJfjimfHc4aF19cTpKQGKfMgTijUP54qcjZhKjpUMWTMD71NqpXriusTqdLBtuzSG6J62HZ",
  "key8": "b5TpMGrgfuc3vh9PuNijjpMUD7KemdDUCzaRJvoNJKSHRgqYRFyZrS9kV6sYGaSL9j4gjkW8ADxcTHJWZY1sQoN",
  "key9": "RWdYfxDMmxRBzCYQC7pHtWtqKT2Xz7PvwxmmPbvUxas2LWFEVDz1AYHQir67uAK1yeV26zKw2PrUN5Ft2Y2xN2B",
  "key10": "5rQVVbz3stRrjP2LdcAzKpdRUY9mY1ydjeSt9q6YyqMivHUZCijM5LpJRMeP2BpCJ5MAkpfzomP9RysTnFkXrkTt",
  "key11": "2MRnWDJL13KTtzqYYUZKbpSxfmf8tBA5ytcnagRthCutNfAaYba1FK28KzQ4KyEyKR5tiLSxHLbYNqaA1wWcbVLx",
  "key12": "5hnRUBDTrTEWphgjmrKVV3rwswUZJEV27CMYzSCdnm2oS2jyzwarmXBuev1gFuQdAeqsVP9Z1dBZ7dCJ2jfXKMPd",
  "key13": "56tjdps95HMc21e5zRFTF7QzXkB2T3NMZ7hYCuZuko7FQ792pxASciMWVgXMTrfaCnMNdfK2j6iAadkHxbbpNQD9",
  "key14": "vJL4PeyQfRxmDRCP48J27UzMm5Mw6GKpVnN9xB7K44eXkFY3SrQX6aAUfzh5wKxyFieFnkCNbCEchQuRimTe5Ke",
  "key15": "WV4fno85r5kf66mCs4ZWF1kxivVymCNLdrnGXmptwEaEqa515oA18GAfBCYd4heLQZJaBTnXUF4JZXywhYnY8wG",
  "key16": "KDHM4YeRbNpzVwgRHY8wpT5R5EUKprdJvmnWgidNrBHgWZKpU63kJgFA3UXBq5JN9fG3d1wbUsWtfPsxQ4Z7cxi",
  "key17": "UoGM3kup4gKge9LSVJQmtnxgQmg57rQ7zTnEc26hbZHAeqkzCBa3fkw54A77KbF42EYSPMuTtfaQGD4QC83Fxmw",
  "key18": "46mEs3Nj6EKNYXLhDQFqGHRNzSJspsCtbAPQ3gbFFktNvJvcQ6zLPzer5jmMXUiHgUp9iT1eFKr5Mgo1k5mf9QKz",
  "key19": "4bBZfWJbDSR8qggiC4HpaCWENZ5F9DcNWx3qxCM83ofzRSbU2s3e7gWZgoGe5iF8xHSkUyPz2Q4n6qZEDVoBk4fE",
  "key20": "37XZBtAuU5bQftRdoWqNsaSrfFv1q9p42SKmd4sytiAe7xSqqmmygCuY3gQrZ9mnbwGB7ztALT6F4RFKsxuMZpiK",
  "key21": "61qDM37zcCsAzzUrCuM3moux5o1UiBic4rQU4KXRoHrkuwfo1TdoJSKDk5AHLPGohtzuMA9SM7yLQ6noDsY4gqdD",
  "key22": "5ekycP4T8rAnCo4bazxSwHVM7TzG2CiT8Dt86pvThZudhGFoGRSKJKdKJAG2ESr4c8SqEwB6Bbc61kH2E91mjQbt",
  "key23": "Kg4KLzLfdrU6FHc2ggmh9eeunZPNWMey2HLrpdf58XxZ2cqEW3u6qZmSdTQ7hnqSuC4YErBsbi1a29jmg52KQ46",
  "key24": "2B1714ZQwhcsWp3SYqtm6YrzTYzrH1noiPyW3jU4NmwdmTrrzTdrSQGqKzKvBrRecptW4MWTtarJv48wmWWZ6Qxa",
  "key25": "26XAZ8YeAodEYjNonzdhnzR5tCEVhRaWTwSoDHwaRyCRRy4XZe8PhMxWMvg8WbuZ58VeNVU7o5TAivFzK82XXwLv",
  "key26": "2aDaNhQbPNWuXe9i8QLRBxtkjEqgyEp3khJwezUaUJzWuBaCkQD2R3moRewQF81cur9KzjBCfdkxBGZQeRi2U85D",
  "key27": "2td7JB64MKwUh6hogyEBVnoQBUZhCRoUaFJ3tcVHx8PahDUxHvXkufktxGLEuTLxks57oiERgdwKoAHgbWVp7qFm",
  "key28": "cpfjsdLiLHwM6YG3uQkZMymiXZP9hCCQAUSkY77DaH5HZ3KEYgFmoE5qrgpNDsK4DLAbQXqCMxdEck7RA7FAeVp",
  "key29": "54MBSTuMQFMH1zmvAWU1p8KwfDxsaQgSBEzH8ZvkMQCzKKs6UTZpugMq7CYGqS9aKM3b6iFB3cNtgUFqYsoYeEMk",
  "key30": "2jgnJFFMJK3mr6mTX2T4USxoM8R2Q8J8ugGBjY95bsH52LVgZtHifwv2THyksU5f4zt8UN5bwvJo9qvEoKUjMZNq",
  "key31": "3EafPLpTS4PDJtxdZwnMuMp9RCqLG1YyHEM3xQh2PBJfEJ9MczNRiKuo1YmA9dJuRvMfSPNhHTZdza6Rkph8NAxa",
  "key32": "36SJ7PtjUGPYNSVkG4ocTWeZfmzq9DafFxcdkoY11AaGQADi3CgHn8BuhpZHKYjrJzyV9DqVmPtkrc7cdcdNDXxN",
  "key33": "31C9MQU1jtS6PhVCiMnELMLEd8zsnr6nFxXSJo5wgwwKAYX3Mnee2jFkbhnpzYQnNea7T5eqYMuJHsYx48kabwJJ",
  "key34": "2JvkqDEaSUF76wimcgGRen425LKUEA66BB1hakfe9tKtRpgN2MFKAkZwntQxYh1z92PCTq6nu3R9tcR9qMwQJppW"
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
