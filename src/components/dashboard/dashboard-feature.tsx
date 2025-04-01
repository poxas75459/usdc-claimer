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
    "ueSeKZpx6ZQYCmWtBEye3izYb1tYWMQQmKU4zvUQkvfXQyfEULAN2yGVmEjK8s4xLTpCt2gBWHtepQv37aD6MnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRL2rd1EErMDLJpV26uxX5QetWvo1y1F7DgzSPau1Fi15ce5Rr6tUAChq9aDL8dRj9bvLsG8tdhpWtWftNHs1bU",
  "key1": "4zvFZkexrvB2VDpi9xvnJWopNnTG1y5JwiS173AN2jux1qTi7BkJ1EpsvGr8V7RgeFyk3Ui3R28FGyS7pEMKXQL",
  "key2": "4jUoUCjyxkamkMVusKYHMT2yerA2fTLCqDHz5WW65C4ypLruu7qaex1HmJv8PzGNgGe7iH5rmfk9ifTaLEwZxv1D",
  "key3": "34BVv1MkBn2dLGEqh5p4kt6SSbqUk47Mf2ro4QfGh96PccwB2tmSuF8pD7pGeM527tpEEX5yPiXFZYW9sa4S3d3j",
  "key4": "53CP4ivMgAZvK9XwfJ6er9yiVjuFMhcT9inMkmx3mGzCJe1FLRmkxKptnL1p1iSW5H3EbUmezvHrxFNKomuCHTwG",
  "key5": "2qjH8ZPTyhczkT5YyZJTECFd2qS9pmCpzkr2iDYxWMP5fFv7icEMvNn5yxL5pTF9xQdWCAtRYTJv5XNj44yN7Bb8",
  "key6": "3mvT6YgPB26co37z5yjeSqUcWwFj2aowCoR9Aya9tqYn3Xbhg2yq8yUch21h8BzyNQdxT1HaZC3URG8UXc39ZL4t",
  "key7": "4b9WohNmqBk27BUwL7y71mAfePPzCDFRADoVt1364agQXEggLBKg1WRNWeybEaQuSSrrRXQZPhq9gBJzHUj2p8z3",
  "key8": "5bS51w8P62KwyGr9vdMVMkPBhzkQEGiTFxsPrk7gCLds8kCjB1yrbGKcWiJoStokjBrzRVtiGtbvYbp5JrhAqYqX",
  "key9": "2CHki5ztGK814ZtByhsopxss2LzRppZwzPLRGtgXr3DY4Th6ieatr9rCDfzttaAmVLLcCSQQzah6vCEp841i89W",
  "key10": "5RArmuezj95eQEq3hQAjaSYumsm5DDAb47fdHbQTPQ4gbeLSvWttFqNFydbe1DcSBNM4AGuaPf8n74HL6SBnXV45",
  "key11": "3Fan6PdtyzXrZkMSVh1AiuSMJEhFfGM6aDW5PaszpwAE2Asr6mg7oCkvcYnwhuKb3iLAHs4nBZZ2Zo2Fy4Ty1UUB",
  "key12": "2KRP5y9n7pM2HmaFNL2z5nsxQpMDbiVVumZ3x3PsBSfcRTVv39qZ2mXG6iKdAbk9oZnfUbZSxQ3oYtPoP4tULfhk",
  "key13": "57CuX9f5513f1SGg8h2Fp6ofBnXNgu2EKSFPXwwG3YJ4bNvinCPHfXfibRnVCmJbeYiJWcdg9nZiTYga1mkWiGG1",
  "key14": "66kqWBHoFZ6cNUgjZUFvieWfmnvKr2Gr2HsiA8DiqcUSRY1KP7hCLVAA9MgdXzpKXx8jhHSc4TLfdsx1Ys6cnEsj",
  "key15": "5xmHAYYHqe3yAdbKtJQL9pVb5K9PCAg1kG2SxDE1rezjWp2q5qB863xoVtwUstDc9xMqKRg6s5hwCsnsYvZ8fzUL",
  "key16": "7pYR1HCWv7oeHXuv7tuz4VEBrr21fqnGtTnShwMH9Hv9NgX62xcwECXriiPP27pUkEv2DQZr6xoTpGsWsSVeBG4",
  "key17": "4aeCvacKZKRpJiLKscLUZqZVybsG7Ma6eQCVPeUqbvt4rsLabEfX7AMpoPhrEDT8QG9Nt1pjBuTU4D3DuU5VgEPz",
  "key18": "jJ6U2hx1CUpmLCjvryJ4TSGc65hK7WnQyygeVhimVuPvAi1MykziWx1viEfnPX1qtzGm6T3bQERgL6osnMiHaib",
  "key19": "2bDVDZiqMZx2kQ15hFYYYPLDbjVR2Tf5sixrnf5nkpQW1wiTdEmDW27tJ24wcWev6g51qL7KTNogxn847HYeR4pM",
  "key20": "2b4MuswMX3oHgTd26ttpFaEKmUqm7gGgmyq1sZnDrqrvZ2wsnBLjG5onfowCvNVrzKvQVW4gbGbt2xzGrHii5hKG",
  "key21": "63JUJCDiZHoNJd95X87TWsH1eFRgYmd9kFLL1K9z46L3x3TnjxsUJ34A9ATC1fuZ7Sd9Dmq63LrwZvvwBLCMVcWv",
  "key22": "5dtBGHnKiKzcmavkFhdN947JgR39ndEsbuJFPLRpU3USQZVNyRgbpP3Q9pBvqNvaCahDPgC2d1uNCCSjKorMVSDs",
  "key23": "3L9D1JxjhMKNCe4HtYA7WnFxAaK4WjyBppTsoeVvrKhNYDS4Hu4ygcuP6H4uFFBkyJZjakYiBm42zWysNivuANZt",
  "key24": "5caSKwKHfjb2gbeDRv4rY1XCyJhqKNd2XuguAVtwBeVKwNvy2JGRQ9KWsWsjARVn2MMotLZjSx45mBmK7x5rwahx",
  "key25": "2gyZiPEcshVK6yqzGDXz7rNaj1b5VBa9xUpTdB5ANnFq1tBcJbosWeQcF4SVGJADFtPpbMeVjVr3yRhs75Axv2sj",
  "key26": "4Mtprxz6o35SCfYYYnVbpQvAHpDWWSw2RfosEe9CpWtAhBMgKyrJ3KAcQ6eh9Jf5waWHHFbFoCFz7XjN3AfU9iR4",
  "key27": "2bEAz8MbWp5Hs1GR3uMX3Pjy9cXYPJtWv612aSSC3jZ5e43pxCyRJUgVWMowAkz6Q94REcx2P2ce7vnys4Rfj9ke",
  "key28": "4r6u7MzG9eGtfuLmG6SZ9u6o8SMjj4yeaGPqu6zCFHXWABu34vdd68BzZaSb9VwWFKYFzMYzATiYBRgmvgoYEoSz",
  "key29": "3vbHjNzT69HBZmgqUdbdyYEqCixr5xYGVsXNKPchEgNAwccYwig1NALPNwHfc5B8W4GqTU6pRW8D28U39FDGwBXx",
  "key30": "4uPAKAutydSiaGL59G9F28M54F19kHUwxLZ5WPerYHDyUdWcQG8KtU1N7UkVirNW3GpGdXz4QzCL6Kf9v7ViCwkt",
  "key31": "5cACwQB4bXCELvgkVXD64q1pDNDAzk8DnjTSdyQwfJGTV2uHZjKBVVm4DjAoRRZYrR8U3m9Mjeie3CtwYHMhE8Ym",
  "key32": "2fwQe69kp8i4LoLuLLqLA72aKnGpVHy5JNYk4ijQudgaGN1bppwaQpcMHcpvMZaY6K49c8ANbFbSn1My4XPYV34T",
  "key33": "5BHprVz3rmMvYrAFaqueu1pMqKkah8ePUxpZ1LpubVbBJG57wus9y8y8MNDd5UvbDrA2kPM6tNL6JqWXPy9yPG48",
  "key34": "2og1je53ZBwxLvyfXDDVfSdPiUGVVgXA4UT1zLFPHFQ9U2RemX8v7SfDMh2gDGCvU1WjmMsU1Q87JTJUzw9y8BQh",
  "key35": "5pc1tyWfG29ZjeGfd9iDokQkfm1XM1hXJLuFxPEiHQfPAfVbEFxznEehregGVK9QcpsCG9va4cZC5ofMXg8C5WJ4",
  "key36": "31b3dCx492SqnBQiNNa2hyjL41SQSegXF8baZcFwymKG8YCGzyP41e2FDabp1KQbd9AmQJTqMLKvtDhbzZgjTipL",
  "key37": "3qucjxi4SMjJvyQwyU9QESH2N5LSyz4eAFrtYaWX9zFH7mbf6RivcXq9Ry6oDw2kaZQHbnwUU8mdQqR4xdngqohU",
  "key38": "3xjBumG8Pv3jti4gE967ymoFpzd3B2cB99uK8TGZNcvzg8jYsMSBUAJF8cEfA1P5AdCMaLmNZsUvzHUHUo9cgrHi",
  "key39": "5fhupFmpws6juBAEaS7HDARWtJjxWAxzK7URjyY8rzJwZEMR3rSar452fdBrpaU69Y7BXb3Y7E4JFWWSbBRD8J5u",
  "key40": "5B6PuVdgRBDS66UTJm9LT2Vbr3nF8T9XLYgShMYbWNijnz5MjAvVFC4PtHAwnnY53JBN1agu4K7955BBZvkFZ3dP"
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
