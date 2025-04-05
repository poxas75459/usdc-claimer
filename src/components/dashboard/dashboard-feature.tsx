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
    "4Y33wbnUTFPkZnZ93ZTMmSyf3N4UjyNFG55QQHtCzoNmox8SGD9z3u6HdCNpwLraoy9HntNw8xRYtit9EtzRiWSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WX1xFEJzREGG351wXswHHNjVQ6TvWrCdhq3oCPCjMrNN8gMF5nxHmTyvQXvwFD1nEEWTpGjGhRfg9rp44vBbGWA",
  "key1": "2qDUpV7x17KkfaCb1YuHBHu4WVhGoHwqbR1mQmz8d3Zb2mmjbhkhk37P5fEmpd8XQ1MjnJgcDFg3mHwCQoHHL11k",
  "key2": "5UZTDH1xwhg8SSPgQjY3zkCLUtK489vhXZfdmqWYhnuPeo9LZvdvqXaosyZx5Adjcoy5NGnSfBdYCtsxmPVvEkh",
  "key3": "248rhD1Tneo1AB2GegxxK4CuGJDZBwA8b2r35ArrnmCA5EdSpEokYSN3hfbfYX2TrdhekZpticrkY4oaSic8FBwm",
  "key4": "3dLUQqkKujsQHqE3sixHh3kQitJErEThYUKPqpko6YzyYSADJgb27iXSwSRzU5AV46MVcdX6vc4KTAiiCUrjrk2Y",
  "key5": "iDgr8WY2Grneh8u29JEDW3LRzL4bw56T3J16ycPRNMEehkFBFtZp9DxphxZrsgtCb3ZvuMzQqVp6zckfV7iiJr2",
  "key6": "5DkdfWaWWpA7PTg5RpUdJhDbaTGnh2ig3qseUcUziHSsjDuv9oeSYwes17Kf9uxsj3kY9J5JRjhUjRJPeWGBRgur",
  "key7": "5osoohNLYK5xc8UZM2M7o7i76S4Y2jXHF6LPKKGgZvYYQLVkMHFBMu7RcLhFiKJJ9dHDrsJbw46SyCRwfdAVb1nG",
  "key8": "4B1VtUP9VtNgKq9a9hUbBcx5iFSGFYqjZVRkLNo99JCfjBbQKEShoyJUFUWVifjywkAhGRBFRrcdh4mAvYMusjYg",
  "key9": "4tdy6td1Mcu99GSN7QB9WuXtdZNF25ACvAjQ2UjQS4kgxcGhgepWC3UZEszipSJswKFTgad3TUjEXSqDNv9w7jwS",
  "key10": "vw5BgBr8LmuYNgHD9s5ch4cbFzPvBrGTKEaSPNouMSyTdphc4w37MnGUuTHXZCUCenTcohevVw7b4kECVeZoRor",
  "key11": "4uEMSXvRK4j6tzv5YG2cTwCniga9J5ikNWE5xq3kZqLEHo4Fm8vQNYmpvvhjEaMHaDG1QJ8ekfDVucnmPeFu895Q",
  "key12": "541hSYc8xLthNeHczj6hKFrawWjMysQTpfsUwP3p8ZMMx9L8rXC6sztsLAzu4LsHCUoTmTwbRA5FWyXfS7a6LtxN",
  "key13": "4pf3Tcw9siorf5YJL2f4pZfs4AY3Z33QaZVUFVdjTj1vrULR2of7K46D9RaXAErdRVfq1uHvPW58RGdt9EnyNmXj",
  "key14": "5e2K89J5rYRn1FT3YATRYekJ4WwmxnzQfoBxKSLmsnjHGb7dWqKFB9J4LboH72XUEwvkXKf5g8kJDs6nTy7Lr2b8",
  "key15": "4De9JSwpWNLaGRfFufMtYj77PrmV73pyigQyG26XfcgEvYnCFQhMoDMiCs7NvLqUF28Tu2wKRyQWMh3vw6Ki2Xwa",
  "key16": "5PaPbfnTcddRdy8hVbAhuZFGmrJH8G5jGTkEYugRoBP51vJbooTGH2EebQATajbxuz71a5hD2KYj8KHxZFdk7dgP",
  "key17": "3umrEkWSs1BLhf8zSt964g38tJoXUYbjwrdtUE8sfNMo4mK6HWWXiEPgMm7Tnsd5c3gXzu27KA2jDtpwL6zsiDQT",
  "key18": "3ErRKAU4wSjh3KFTSF6Figw3yc7qF39iCGBbjZYcGvUPx6ZC4zRUSM84DeDR2xXYiewW7r3wrfZ1m4Dq48XC6oNn",
  "key19": "66Y6oa5WsSGmgFtxUUGJetSZnCUTgbJQFrQHKuivFnafueBu7Nk92kwNfJwWdyUt6fuNpXvi7rjLozohcHVta3pX",
  "key20": "599KL7URu6tPkj7QCQvZV3MWYaMUWMsEDRvch8nerugcQ5vxS8TDNgSMK5QEv1jrt6BGFPidmgpuGeHNH2FncB8x",
  "key21": "5Wqmu17VgaupTnicz1iiGrRGStQAFVuotcCjMhvvq2wHLEUj4rdJPBSkqCqJ4Voj8RSjUFVcUZrnPXHfmmh8RkJF",
  "key22": "4XC6dMtdDtKm1pRAiWnPxcwpAMcwc2oGCxx9imrtcakMDw6ptUbaCSjd1hXbth1XWinTKPiNxQo215W9Ch8gk22H",
  "key23": "5UX83X762d3PHA8FDiEDaeQ79WjjLYk6WMsXqzmb2W19U2LGqyWhJ1CKArPuADMuKQYfJBJjUYS3vp5nPxxf2Lcc",
  "key24": "5sDzxmZGB3XCBjZozmmZKHyEJAHaGbn84Ukr9wVgpV2jsgkytmQEUTTar4KQF85c2GN8mTyCSWBDbFBg5gHhVBtS",
  "key25": "Gkap542rcWea9HdeW9w3LZe8Pysu9PMkUXBPGGSfWKvZpnJf1q3iBZicCyaqDmKzgRkABCfv3CDP2prc6w7ASEN",
  "key26": "BzV38NuvWRphryvTvEzcdZsxYVZFD3GwUE5ALoRfUGF968MbsnePRuz4ig5XfF6kZYV3hAaEYB8M5NoSRHgsGgW",
  "key27": "o6od8ZJ8U8DUEKdYw93LFyo2t2DWEwZd6DWs2GQUbxAWajTCdoJ6rV1B7cij6rTDJt8TUu6FpgRgonWPxV3dBRZ",
  "key28": "4ZRfchwCqXYzzsQ2nxXjWvg3qDMhf7kfFwWgjmfYKn2GUQmfh1G596BzDLj68J9cxRet3Je5EhwtHYHkvNH21gaG",
  "key29": "AqKPEwHXV4qJdsTYwHCakAEUo8bvHbm8yzZXHMMxpa3sT6rXS1rs56y3EuYmc9kkuGHPenKA9XMZa257MaD3Zy1",
  "key30": "3haahULjDKSAvFHMVzKUSZJr15fQGBm9QGCUFETQh1YkVGWqponfWX8F3TznDTYHEcaGpjccgbwHYjH3tUYoUowQ",
  "key31": "SN2TQ7Uyc3d3NP4iEcUChz4oW3gywgkSgnyWKpFPJC7Fbx2q8kXVBKpZtgqh3JTiPupTXCWkTBe5rh2LfP4vKPq",
  "key32": "3WDBTuZG7KZXFSm2yg7ZjbMGp2H1PfFF7JVwrmuRrjJ3BdpNoixiEjCmpz56gFuwzR9HauNVzmTjhfAnFTJrWdmX",
  "key33": "3mpWRm1hm9ZV7SzqWX41wMdxD8iQQyqMvfCav3HiMrQAt1MGQC821FG313AEErjQQ8cL5KJx28uRFhm3EjDaPxCF",
  "key34": "4Z9ZDQEZhzfNH45eXXoEwLDwzHSmS7JnivrumEe6NFY1qbeQdaEnMK7qUoGS5GFfPcFCBodi85pKRKa5vjCurErG",
  "key35": "3tUfPyHYpYwRPHyGoTgmkbuk7iCRCajbu6NndtnT8Phev1pdv5SDbmyEiDfba43nSR1CCUJwFfbc7zx3AbCYEz9a",
  "key36": "95oKkpT1xvQPod2Agrbj2YBEuvDDwMs5w7icScDf8VocRNg31bgL4Uwd1uQABh18v8MBKoRp6BJTsLMERfc3nDg",
  "key37": "32njXdAtLYmEh4GyCNKA2UYA5rNciNs7cCHGoq5sHg8QNFdppFevcjNiVsQsd6uco8Rw7C5TQkDRSjeBXU6RACGM",
  "key38": "dobvh235TnfbLyJwHif3G8TEXihqzxWgUsgszrBNUkTM26Vu7Zzbwom6NKDSnrAqJejrioZRX4MBtHw1NdLWyvA",
  "key39": "5xqYAhcF8TEXZF2agEzJrNSVQroTEFEG9C2M66jV6TQSEsNovgBjtSCqd7NXgf5HzKo5bKyeMiVYpgfxjU8Dibi",
  "key40": "2WtyivTiVKK3nN4oJgbQHiFrrY2XybW77jxRfs11PaEoAfJ3BVWqceLXPUKnLvWMFhMrM1XBqagS8Tj9Hjb63Kb",
  "key41": "28xqV2XP51oRJdtkHcwt8pLZzM8NSWYDy6SrxzAGd3pFhsw2hqt5F9YLSCmMnZhAQZrSv3SZxkB1cjdXbH3jf74H",
  "key42": "5SpRE4LWmYMUTyrJJZsr3xG7A1Lf5whpazmSVcnC24x4oDNTvVuQv6EZCv13amzmnMQnkJVkDo7GKQdKDWt7bReo",
  "key43": "5Cd8fvfKzzKZccjsQrpbFaJpNu1ArCyADKgQSxufJrWkHbCZPxqYNnP5RfgnLs243bCpybqYauFdfNr9Q6gMtV3w",
  "key44": "2ebC9BngNEWD7B54wuFgbi2SJr5MYf4x7qqCeNmisdxj2XgqZaifbSwV3FNqvjdcL1n8jkELdR9vyAHZSmjnuqfm",
  "key45": "5NQ2SKRti5JqfvUiteEmfixgc1LHXL9ee24YZq9igGhg5jsXGrfvTghuWXx6G1aWG4PfhaMn9JEW9q7cdyxJH4Vr"
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
