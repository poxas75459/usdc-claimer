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
    "4u82bt8CcpW3CeCuWsadczdHQZz55phRzuk9SMDGVCtrzxn3hvNXCjc7iirWstv3bSnZSiczUtjG1eGTjSdHjeJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHSytQ9fkvzzcbgegcPfFjcdPXfm1nup7wthzCfw7jHtgQoxovQZNjHMFogExmnAbSUJ8XaFzbo2SsSJ9hofdpS",
  "key1": "4a48dCdW8pM9s8QaCFchbsdttdVeCMDaBtPUnzF7fPfSxE8dfph6TuDU9YnnSSnGLuXhaZrH1kLZ3vnBFb5LaVjk",
  "key2": "3p8tpcvPyH4SXGjLD8UV25X2pGdm4eFfJ3PyoBzFAce7ZNfiFyYNTFyEvLkP1G35GdMAyNr3ht3fT4aMMo1vvkao",
  "key3": "5MXd9zk6N2fvPLeVvaQjY2TiYskq4dyxZbmbtHxoqiHPnYEkTE5UHXK1xFjVgpZ9tyRy7HgfgSXVbp1Uyzah7WJM",
  "key4": "3iu9HN3r9ue42u93JTydUCgAUxWz5E3KuxkWfjCjnTpJf67JPqM12B2Js2e89uTBeaHXiM5oe8u8hNAYeTaftSwV",
  "key5": "4o6J6tpwgnss79ZwNJHcwJwvBHrppiy2ophfkHG7QPhvaNv2KTRay2qoQBBGFseQYHCUv2tCVLV5DNjNerqS8GJU",
  "key6": "5EM1UV5fGAeY1kzmKEXRQwnAYQeE6VBdQKCkVqtqBKiA8yQCrZqWGXaeHm2EEoa5DvfUnwhrirSEGqYgm19yhiGR",
  "key7": "4eiieAVy3ktS4ZyB8bBYR2NwHxf3ytWMmR4HQCptaheru9B85vW9ub9GPjnCm2VBh1skk9brXdWqieKXaoPFSH2D",
  "key8": "4Smot48JHeMf1vLrBLAqz5HphUws4h1TrMe9VAKCxkDk2KJjmnLtqyMJXVPxKzGUFT14LLkgEM9EhE8mYuEQGX2C",
  "key9": "4xo6RGjBACipistE452vkN83UMUs8Dfv4JKkipzQQQ4Rc5FVrGpFWycY5Lbis5cASx23RHNhcdsg5GkHu6WKqYv7",
  "key10": "4DKdyyMnJixv2JKsJw8EpEYTECqwQpZuysmgwKddwFuR6AiaWXvfkEtND6AtkRZUsVK9v9ZFrNz4NZpfdg8DKwmv",
  "key11": "5cSFFX3dqd7ENhtxmNGouUVJRwprs27cNZmmP9R9iNUL2HpMyqfN31N5Kr8HS7FhzCdzsTJtdUG3qDFQuj98QjgZ",
  "key12": "29AwQd3ujinUhFinDKwEWC5SKxvAKsHZ1STeijD1ypEcvampwJNSDus24fsxNoQ2C8Q4VwZEL6ZB4aTkoCiLW9zL",
  "key13": "335hs97UrQxszikbnJh3z6gTsuz4LeKgV7EZKehV2xY38F2BD5ayyoL9oCzTKcTf3sQtYSt4d1ZyjgSiu17xBymj",
  "key14": "3vGhLVBmXqHrapJECbuYJSkxWncxfPg8A1qSqRDyjqSYJ7fBX8GHZ7QnVfsMRhrgxAyHbgSiVuNZ1L4zT7LKRRxf",
  "key15": "3qKxAqs1n5EYMb8PELwrwy9uLvo7Emdnxq2xMDkM2fJPoTtLXQuRt3hqSYGjfVyUzuVznHfM8TtAeuhnBwZJtj9m",
  "key16": "5kUfZLb8cNNxMCTKn8HhydAxSSq7v1aJjgotB8tWEXtsdWxuBjWLZsGb2peaA1sTEarppyqca3RFhvdgASaZ7YQX",
  "key17": "5YnqJ3Zy8RdzX28HQcmTwQgrj24wpFeW6aEzsqb6xpNWK33o2NHCFgTg9qK9T2eHj7FjiJqsGRL1GqWQRiU36ydg",
  "key18": "w7nLPZgXTNV41opPXiauvorfL3CwQLXHCuh4JywKz98ta84s6vPCBUhD2RDUns3yy2RQkEHiodRkfYfdVFym8HQ",
  "key19": "4LwQaY6uBNaQ7CyNM5KNd8VZ6eSNGpGHZcC6afyd492SBifshsKdnkYTfaQHqMkmz6eY56nu7TuyHMTFXkSqLYaR",
  "key20": "3SQcrf2NfZ69z2mKbhHm2DDjRPyhS6Lvm3vmhdHZKCxu29gzA2uvS8pdYZTB1empKLHTiC3bdgFYhpxnnAJbsSBJ",
  "key21": "5GptsaDTJs6VA5wJjh5okDXzC5mFraGqKsqVCdSW2pKBrCVnHhtPd6b2CuDUYUto8b9JHXasdzP2tRKaNMccpNzq",
  "key22": "5BZiRmJsw4GwBupA2p1qUmR4JyYfogBLmkb4xPukCRc4zYJQy3Apu2Hn77zGePN2FyHJshtJnDQ8vXM41k9EhLfG",
  "key23": "7CfWXEJGfwkEdkvhW7anNvTSFAT5RGngMLtVw9tF4zLPWD2TXzMnseXCo2qHxQLTtLVqrZCUhSugQhXUiBC5CZd",
  "key24": "4ayF8tWxvEaVTsbEvXTydnaJSKrVesQtQhJSRUR75USG3DZAnjeJwKRV6dHuDChi9AL46jLfkRhra94YBcVh8yhw",
  "key25": "62a9DCvmcjT8HR5yVhQkJtexFfVzt6cedvpnJViFMd571beoKYScNz3NoHQ4kKyr7knn4oKqq9ooVQQCaRiYC2Gg",
  "key26": "5cev4c4BHAXGbeZE41i8Deodno6N4H7jBfaKQwHdPXhqMhi6SxYFdF5rTDca2rzWh6BAiDQjkWH8KEESUNmzTsx1",
  "key27": "2eeFQSWVrGSLUe2N2xYF13HUxQXfBt1YAPR4rcz1sMyn37HtrjbwHi36aAep7DXsS4kks8HNdnPDaf8MFzpcndA4",
  "key28": "4kBWcfr6R2XkoTLVHuVgTZ4JwjaCXnvRmWKxFAnytSjU1W2Q5u8WCgvXEHEN14eBCR5SGp2KB4Trwm1uQYVhY5JC",
  "key29": "2jTs6xwiUUbqAX1EGif4LcnpEshkewrGw6MhNRs6h2pcxEkRoctoXFEK99bY9sp5yx7FZkeud8x9aX46xufg4h88",
  "key30": "4ykZD7rhtaVb99ud8EyiJdWkFxPDtKF3waqHAaEvHi5MuwpBiaP4aTbp2f9mjjp2qkvQEZEgXBvmh6aLSmUnTkUh",
  "key31": "3RH9sMDgkMnY4W7fwpwMhcYDDxafi65Y8UFvyirSfPbLnegXZZb3Hw5itN2s1hohKijx52U1vfxC1w2k548L4gMk",
  "key32": "3WTx4f81mRNrT16Y3gadmSuWkrBLtGDEthvY9mdx5mH6NDkpoG7t7G9Ug91wB9nDAHLFmxWs6WSEzitS6MuvGyAH",
  "key33": "5NX9LEziYRn5ZFYbMLQiwD5ARqmNrd7qwZnyH651oCoCStapvuRkYYzhQB29SpwXQtzGxhha2fA7gtASAbjc8sSZ",
  "key34": "4G4fChiKALhrKRywfbZxTxFNfEL63CSFNxF5rkU8WJp3WmCKdxEvs5bpJcLQSGSLzRP5h5Vq6HexbM9EE9YcFvAF",
  "key35": "42oYPqhhbPkhmLNQetVyrgj2owptWXrb38yK5S8c5gMcBpZtQzqSxSFUJTY7VztHdpmJQFibqicPR5bBabbxHfsV",
  "key36": "5G1mnvJijBYHduTvmAoveMXpYLGdPY3Z7GWfC5KogyB48QRrtAf1Duw2t4mLZQvnHwXLPHw5nd1zgw4G9BbRHdoY",
  "key37": "3rX1VAHDQazaeKMxs4DFdzbyh69PEopdZHbev8R1EhhXnoXm6oKqVrhnPNjmewM4zsYh2DaEFLUXiUVFS15oqqPM",
  "key38": "2f8NpKbJ8X8aMM5MvnNLBpYacNpgYZj5HTbAtB32gwScepymqFnutaq5HnAaNaAKVsDoLRVzgChFPyyps6ceCCMm",
  "key39": "5PYf2nuszNGhLu5mYbSs9axgbu3ymTz6gua5teUKn6KfAztop5VMTcnVYcmtyEiFyyWEHmeVVGT6yndF1snCKEyY",
  "key40": "5mYqu6Y3rmF4hhfCRV4Xqrjn1qwp5u2GHY6s6hyPeXHejTkAALTt4PT3tPz8hukW2GqrvRArcWqoTMaGvoVSQsu",
  "key41": "43pMKm9JbgnAZq8ZTNKuN9ouUstzvNctKMgdzHt2serZ2tt8989fUHU2UQzi5sfZKth58XZ3UsFPgUVpHH7qn2bs",
  "key42": "32UNYtzRkwuMqE3hP1eAz4yuNpXTVFUcKwkzpuUdBSm93PvyXC82G1ghP3dUW8qs2Js31rLFF5L7hHwhvMWkNFhR",
  "key43": "3cFBVNt8D8eJDWnjYEs7VX3tpfyjud5Ssw2boN2YQhNYXsAE59Qd5fZmxnNGZ1MrKEz5E6MkNKiS5wQcbxaU22v2",
  "key44": "4bWxRUDMBsFyQLp6CCjPu2suF6mGt6KM51ZJbuwjve1grGimNvjc9NzhZStGegcusDYd6hGWDo9gQCp1bVHdkhiV"
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
