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
    "3vQ7rHYHRGYhQJcFV74t6kiVu9YbTxvDkuWTPLdri8A4x35qVEiyoL5wpUq1yL8NaqbFcTvSfQq2vpRSy2LqdcNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzzsicMJeGxmk97XHuZXk4sx2dsQUUMdsPDtzVCQC97UtVi3SMMrcMQSko93y7ormCTJGdCqUg2SGdBWZ5r8S9K",
  "key1": "4mxDXPyV6dgAd4C39LT1avPc3ggPCUYF8PyMCn7xjGwYAX7EktdUN1pAEuKf5wMpxcuEcsdwFDET2R86rPu4F3Yd",
  "key2": "2UTJGLLgNJoUKcbX1u8MPRCnePH2QfaiHK4vHzf1f9GnyZEn7qRTKD1pWsso7HqzacrYNyyGsWMYCGRMzXMxuntY",
  "key3": "4sfATWnrJRtAha7mu1ztYrsRWXL4JTD5i5avhW1caYDsf3XWHTFm8wS6q76Uhd7CAeZZ3gtzLxjK8a3QrvYowp9Z",
  "key4": "5UDQD9CTepXgL8Ki2jyosZhge12u8jRCZA5npxyms6cUe743UMxxC98Cog2Wx2Ns1JNmhthmjS78aCmtmSh3exkC",
  "key5": "3xCX9A3oBP9hE4438Cv5NE5FK1jXydXRdDuTRNuh8yFrKNGxR5DbMpo38U6nzgttQcKZhVyYqPTZdAoko6fwxTyn",
  "key6": "3pUxGv5DTRRjA7v9qv5HUAaWWCbUyDavqSG7oTBxQimun6msQEdtXcnwhQ1h2i1uJxJouD7tPbcRhWsX46j53z1q",
  "key7": "4usQCwQkYqV8qV2VoUKJt46JacS8RHrYjTJMZoQK5pnEKH1wJhVYBsZpqcSGaYtKRaVpAdqaftMDgJ2iQjMXu1Tp",
  "key8": "5Y1Vr3e8SnZke7No7BsFopS969n4tNWKQmnLGFst139XgK976ruLqhBPNgW53LtqyENw35AQfGFrZWq24tEG4C6a",
  "key9": "3LTnBpEYHcy1J2iT5SKt8Kcx4x6zKMPig8aRAhViXAnUiRACfwqAgNWWQH1BYWWYhn3dPjJffEyp7DY1QvbPujwy",
  "key10": "5UsYTfk3ZdJVHnUXn9eVfuw8NmYRgqyNkvnpFdYgPJEAnVYEy6qNy1hcByxbiJQP9FRAccopamKsGWko5s9NXHdy",
  "key11": "5HXToSGVyrB4SFVwyGqibuJD7bLnSSXtbsX1tFV3ZCqA2V4hFA8YLCeX77t5jzX566BFQc7hwLvUgpRtfHc1VhV6",
  "key12": "2Sh4cKh3TXxMZq8mVkfgt4737nfY72VWoThPemTHwSVuvdyrpLviJXLr5jerd1x8dTM7CusNvgLA21caTTFF2du8",
  "key13": "3Dp9DZvsrJJ6w1QnsHfJrHuDovR5r6prMpmiCYE4AmYb65VTFwDno61aQ6a5Ef3dynNvSbX9tPWju7XJyB913dKu",
  "key14": "5mjswjQxev9MjW5hAWSY96RWTT4JdZCdffLeJqKr5j6G4nG7UdmB46rPwWWk5rxjSVYopNx8wHUzu2i2LRb4xKjj",
  "key15": "2nJAbQvTYS3sgxaq9f7pf1C9hzRK95uxgXoiZj11cGfLj35UDrknTt52Csq4azJHoxgvKRRyMNQ7yS32F3dwkkik",
  "key16": "5HXgX32qDvL8EjsxpEix4wVGahanNk1XifUhqV7KYq6UX8TiM8iZDn15efPBtjnuXWJGyBMzxgqGWWTcRzGu9BMf",
  "key17": "PA4P5UEBEPVZtRN9P619pQ8W1XQBZNN4QVxXE8CW2s8HRU5rRQJfEaaF68eT8MJvYJRYC5qt9B2fvQWgP6gBzzX",
  "key18": "63pfmC7kQZvNuXvZG6b5ebeLkXRzQ2eKqQhGHxz6pFp1RKCVjuLh59HDbCunBsDEaUxs6k5wyXRjxJgcf4EgS2sA",
  "key19": "2jZkNYrWAzScE5XPefHnrLjRc2wtdFW6QbaqxeAy1SS2vmTZhMb2nf3RYQQcXjw8CDcJFakcfbWG9CKvsEabWpoL",
  "key20": "4G2Q7aqmSJ7YFBQyAi4zpE9bdVEwjtXAyTWWjNJ1QUJWNuzHX1Y5aZA3Lf3jFwyBDcBgeT1JBWoRtEPg3AdAu5H2",
  "key21": "5JfSN4SxUVz93okArUnQ6taQvVLbk2815TbFX6qe3tiFNeAvXcVCfyU8HDpK392B6ZWSdFCaU4dZCnYs87Q2m2xc",
  "key22": "2jDRsDBF8jGB9dQeutZkdZM2udLYPLZBgH8fQQAvnLZqAynsdLN5ataQvSSuCa2S4X2ChckjwcbW4nnQ2zHKtCGr",
  "key23": "ob2c3cGue2rLD2Vmr2LTfE4H9M5pY5nDaLR2Qv6suc8yLuh8fchHxtbHGEaRdwd5zcVShP2X6yeSF4dmS6ko67x",
  "key24": "2cLkFHL5enRX9BZAWq7weUnGhp9czyYgyTTjkRfhRggvdq5k6w546MnBNAfKnnW5UkEWbmiyHXi2YyNs4whCAU6j",
  "key25": "VhSpxWMWYZCam64fHMqq2fsjvL3scL1VhVFGPpwA8TWS6jGs6qS4Zo6j6LrfdtYcZSL7AJaDmFEjr29Nf3XAC8K",
  "key26": "3so1ZnuXyJjqCh2CyZZ8oN8WqMUdw43Mm9MjsfUMEhFJKT97WypUGriKiTGRWjbAr5yMn21GaJEd3GaCfP5ttLLk",
  "key27": "2Bi6ZgkVdeSdB9eJrNqdfMs1g2fb6foRWz1ERbHjkhCXQUoVfQwsSNAtudo436rsSk1U7mvVkzQ5xzVuQDHPCrrD",
  "key28": "5ArjVLy3nr3PWo8SNxE2pf3JJxEkbjJqZqi8LTVz2yQpm76pjeKzh8GPBHZapq7rv45csta4HV76AjwCxCmHHd5w",
  "key29": "5pr4cAWSBRJ5zGphoBnZsvLP6bVt58eaTQqnXmdBUynCQ353G7hc4XADmFgUELCW9drJ2rEUeXvtBxvnZE5e6BjG",
  "key30": "5Fmc2DBLAGebxb7tiHNb7sdAs25GfCvF7aBoRb2CXA8TKti16TfaTXeX6s8dYM2ytiK3xkdz2UZYQLMQcpC6tncZ",
  "key31": "38QNKM3REwsLv6dFGDe5AZaGiAfkcnEiJXeKQGF4SCerLEG6MTGhynSVwrzdCsrCej2vt9FJXsTfkj8LnwccPB8N",
  "key32": "5RywekcFnPVMW2T9L2TWwt3bf53inGKgfCbf8hRHmUD8ao6PTSRBoJ7EgnGXJ1wWFDkjnRNKhBooRuwg1AFkHNs6",
  "key33": "5JTxPRWFgyuBPxmU6WApmSKmrDR5GKhtB1UmPBZQ3KyT1peHfWVT88HBHdrcjuRDFYVWnRvj2iPZKeZjBYZcE9Fg",
  "key34": "26JPGwPzL4hbqsTzxyip27EpbzsxiXc7Pxmih7ZrBwfMkafXAhGSLS5uJddnHoXgeBBBKjV7dVGrHYEQhowXQ5LF",
  "key35": "53sHBMZDr9SwS2y4bXg2cUDC8r5i6WXfk87wALJqhUYkS43a1kWjQj1bDRwaNFUq832ro9eZv9HsADGWP3yAs1kR",
  "key36": "51LGhsosa8AjwVZ2igMtfZsyXPLhDeQKKQHZmcEpd1afCtCAFWzM99tC5UNT3SJ2CMK75jm3Y66psxJv7Fmcrr4F",
  "key37": "5QbpeBzBdRobg4FDroqbMajPfuhnFx7C3PHbMBmKwrCb4aEyymFeKYn9W59pjFf1R3MNrLoLvGeXJuurvj3z9XFd",
  "key38": "2C9mPH2rhkhf6M1py4wCLgsz2UiuG24mTRZZdKkE5ZHnqz5GrXwiQ8Bcyq174hFNFfamq1aGXgcnFQaoKAzkwUmD",
  "key39": "3gbaTx7TDELyT9k8XMnvZjRdpU6Xs4AqmfACe7GxWUsZsMMuGJJ4Hw6VbW7RP8Qk8HP2wg6sxmnkuSWbL8xwAkc2",
  "key40": "1yRrYHPB9iTS9jAj7GVtgsvCvBbMpt7bXCXhKnSxTn1y6iXmxaPQGkvuzqbVUWrd3HEJiB3oysgmCAHK7EKkTvM",
  "key41": "632zfd5ENMCFU5S6FSsAG6hdgFT5Jdiu5cwwGRYRhKCQ7kUQhMibYwD4dZvL2dVCUZqq8m3s6WuPS5u3Ht2p4ZdY",
  "key42": "4xUv57xWXpYzLVUfxx3gzZYmv679MuuMUTbSFrtnka93ZYNtivhgmhax3bADCDdAv5Fv8LaQGBGPktHyi1uFh3tn",
  "key43": "31ExJaUcpn37aCzBFKtmfQcH9TcH8nxk8xxEpUw4o6P6UotjeHA1y3KLw8U4DUHosAehYejfjpMLXm6kGfFv4mdr"
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
