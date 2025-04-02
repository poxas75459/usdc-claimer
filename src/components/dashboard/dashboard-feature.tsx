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
    "4tWwa9293SAmc3pqNaSZiKpqfYx1Vah7kmDUsbkEmeT9cRLtjWqovBcWoipakpUai2btPSJwZETkjgC6D8UYrQBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMBG2ieEkHJHC3h11XPwERCakEX66WoWokqVrxvZkt2iQ4BXqzp6VmRL6WTL51VWaMvHhwWZVBGfCeeJbv1rKG4",
  "key1": "4o4sQVqSTNtnMBmXqKfyoRj2mrBdAsCUW7HQ6oAKgZWZQg3AkjjjkWS3m4aKbLcRFjSkzFNxziHLZe3fXe9jir9E",
  "key2": "LUAuuMBEqn7eGowfAmaegRfXqwudxxk1mtbBeq6TQRaVu6SnHGrX3ECQqbYUoCsYw2bgT6ba6y3pjqntnrDD2FW",
  "key3": "2DqF9Xdopyk5WiH3vwwsCqfhPBziBJ7t9i5AnMocCKMVviVmGbgtkK47m2haChr4XxTfZGopgPg9xquRMZQ2nNc9",
  "key4": "3ir9XUYxfPL1guPUSn9zr2Nz9iC3scnZxg24bN71aDXURrH1aVLFtBaphAAsQfqPfA16HAdmW6PqEcCCQjp7yyAT",
  "key5": "MwQCdDWywnyTPqYR6Jn9UBszRwhzyHpdvF2CQzysJx8LK6EfKXxypwJffFzS8PFezTLsRSZZkzUcHvw4KJJC96A",
  "key6": "4oUSRWNcQNA4kNDtvHbB2rbJ3X8GX9SBv8vxQcgnWqZsPuzqmdcptCkG8M9sA7AXHfYmFMHHgNjxRtKTt5eSR13o",
  "key7": "4AnLF3rmkqXC4PM1kzvs2HLoPc2ux77NadVwmPMVpapU7nFvy21nYB53ALnfd13oxeK9ovj4eh6Czs8yfqUDGpXf",
  "key8": "xruyoZHpnCQystjgDEFnK6SBbiEmtsRRmL6tMrPXDVnrZcvdQMs9kGJ2gdfNQ8avUqa4XM6DrBVLdhzVHZCgaDo",
  "key9": "3Stdsc97hBQGmthURyPtM9kC4zf37iV76vtU6Wm9fi9KDaa7hozmAccGd6f6voiZWD5r4crCaLVMbqXjhWiQSQ58",
  "key10": "5kfSgx5rkbpDK3wXPFESGgaNb2v3BpH9C31d1yQw4qGChAHmpn5WbovcTexHXGi8xRiJPm9HevjMi3EiU4j5cc4Q",
  "key11": "24soXfkwoZHgGY9H7B83Jeu4jRjNQ1fthgtH6qopXPzycBnXQLgoQBqYxFMHvtgkh9Y5YcH4UjAbYFFTRgaBQGEJ",
  "key12": "46QPqjUCjzChNiYLaGbQHsR4b5G1FfoHhXvydkKVa7ztVGFiBQNKVyZRbj24DLe9gfxpdx4tVxT1b27EjmZduZoK",
  "key13": "2AJNfpQmDPyM83WfuCezqZJWCEzvzC95aoVZ67sLesxX62Usb9iGXrc8ysteL4BauiKanPGH8f7uq6Rzn3ge4TF2",
  "key14": "2r24DB9m7eX2KwgfwUuFUFJS4CFMBNRagCF3x3q3ZpwD6t3yMpb22P9xZek1Km4ndYDJkqNMc8ey5vojdPwHSs2v",
  "key15": "4zopEFS6gz72qiG584ACKNFZKSQQAvdy3G3g9cdaQyvrxB1tkRxX77j6TBPAmBijdNLAPU1x4Vh2hwPqFas6z8qU",
  "key16": "5b5AbMuDQPCyFbQyEyfQhT3Ex3tbgkvPrmDhP9km3wDqTcWVnBLCQyFpo7V6bnUDomqDpa4C3r4eBbPAK6ZPoAQ2",
  "key17": "3MoFMmFd2vERXJasawQA3PARxdBGG7QTjWkZNQZpwJxZcjoDzaKDV39WZuibG61HC8pu45JvFkYVzATuUAwTTEXR",
  "key18": "2Ztwb51PCty98CFSB8hk2M2KtfJyanMQVqi8Xxfwj9KyUsK54hs4FeZdz1X8t34urM5r9v2LUmaVq5f4bWVD1qoR",
  "key19": "3npno9EAFbMW9wW6mAFKEu8rokSzBAGmVSkKZaL1tFPwvakGLE9qoA12c1XrHnFj43MaxxiBect9zaReEM1pETmv",
  "key20": "3mVE5CALiEdsDi57FKH8Dhcpb6DzbWyh7kLSTCScmW811aS2Fp6BjKHbVWw68UVxmYcRU5EEiXwMjR8fFzTJzaTq",
  "key21": "2zrtcYvZkQnWH2Uj5MSPdnUi7abU5CqSoVsNKyjqWGXYRjgGHwa4vdJuUi2UdxHcPgyGNWRU58Ev1khPj3xBhTwb",
  "key22": "3d9tmWyPfyCa2Av8SVuoh4HbEBWauh7YXvPh7izTeJFyk1UEhrRTb6igy5vhdhYkP27iBchNPcMU9uWNTrWNG3SP",
  "key23": "66VxvtuV27DGcXNhnYjNR6j7SrxWPmDvf4LxFFLb9NASSkhVJUMfUuBaubffGxqR77Yw2FovjLHVRxopuZeSLUwk",
  "key24": "ptdSPiURRCHLyb8vuF4DiKjaZ8ujNTHkb8HokxNBRmXucHchi2ZbeCWwDFQCaMGkXoTfXVttXaTFEvyHSoCS8T5",
  "key25": "ET7QNLnTzmNrE68NgLFmRpVrqhEhUTjsLHR98Y96qSAtD7zkLx8TrwkWhAwqo8wLhPnadWrYeHXozqb77w6B1zu",
  "key26": "4BhkHv4mRrcTCGn6tGQMNks3fiwVdmxBzpJe9aBiS5qUAgPJwxyMtu1VSDV1ZTSRjAS9GxPefyqKbok8cNcZWZpo",
  "key27": "4HNvqNjghgvMyA6cjouDasB5p4hbYKGSPqFKzxbzYfdggGgU3uADSkVaAK4e2Fzcif3EZSnHXV3V1NSURAQ64Fnk",
  "key28": "66T6UhKuViECoTL6Y4NKmLmc927ZcJ8opdXCU4LKELJxwPw5aXYSBLcbEgkwBDNgYiBZyZ9RSYrSsMht2mLWYMZf",
  "key29": "3S1iRt4hv2rVTXRF4nZcxp1CPd65G4JwEqhJNb7owiZUVk8RF9ZGnxNW7Ns6p8jmoZrvPQV7njC8ohcEc1njzdUr",
  "key30": "2YniaoY3EtBsd8uHh5EjL9GsFs6sYPkY9SdRCRuMRboUCCQB7XpDEDxpQ8cFwXJUd894wTkSg6YeCrWv63snYsZU",
  "key31": "37HnnKrBCKFuSXjMmaFywEeNtTJMaXMrjZRVVJAb8T2YTf23qKyPwVwZFxpUsNjMetBSxdTX9x4Fc9K19wrWiUfA",
  "key32": "t6DdXsZsYhnNeEtrnhNsV8Y9P59ECjqtqywcFE18CqoCfauT7jgLB9pq8Dv91mxhfsKrFm7H8tkPehmrGF2KN1Q",
  "key33": "2p738LJiLNu1ZdFMaPGoMZjEV4M5nDA5JWKzPv47sEFNCLFVAjb3VrjCFiZ1oruYc22wBThcLu9pKDq2jKTF9n3p",
  "key34": "3nWtgW7RfzzUpLEVaX68phMXos1RY1gSXR3Wi5gR3oyq45pMBcyB4a1qjjJSHMSLbvskVRJ5X2a5w7YFry12rYg4",
  "key35": "5dEpxF89GJYE7dVyfBxFmPpSMk2QED5PYngwqtgjUvPf6r44wYn2LiMwzc1X6Gy6yLaJonWjUWTEisLfQ9JTgbaV",
  "key36": "41x7NKCJHoSGQjaXt5k3HELVoGRGUvo2XBWVPqhYYUxxizki56JEn5ngELo818vEEBgqoRnQHXR3gdLmuhtEAguP",
  "key37": "33fTLRTLZiSX2jqWBbeZsUTofzJLMbysdsdMbv47faWYfzwXnasraz9iWLHooyqLnxGxeKTA1k2LnzrTsMFzyTbv"
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
