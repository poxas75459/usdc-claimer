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
    "sNdJ5NxADemDaL1tqLbFs3wRHMxFzDdkraxeZsLCXY45T9cfUXNuxizhaoZXgBDDyEvdEXVHYRXUnzNCDsUJxzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMvrMJK5gQ2WdLsgisV9Ho9XURYkJmbDAomzgoZKWegM4TWe5Z4E6ZhquWBhTngBHs3Mbw7nQoRfNSBgVakHRHn",
  "key1": "25coYSw5jB8iRRjp6tgs2TKQvLJL1aRn3qDvpbBAVQWoLt1QVqpXS1bNRukbqc76VdPrX9B7XBnQEv4Cf9dWJkPA",
  "key2": "4dXj3L2VR54xVLzqWFg6uo2fLjXFv3JEqMstBvoRxowUX7Axrg3Jq5dVnZrkn6ipYuYXkethvCGbkkMtY5X6aTed",
  "key3": "336Z1aFDaJPGZaV5W766fcShgp6V9pSW5SDDSX6Zcuskw1jJ4fyQnuFQLdVxMRK2AFUcEMdQJdDuw4XE88Lcmt9z",
  "key4": "5mgEfso4aUqimwXAYVBgfUCxxmusnm6zc7raLVYGf3PBYYkTJrpxnZR5R7Tw8a98vnqKXLH7KN7Ua4Z3HGQYGnvf",
  "key5": "4U1JoSTqyFTLU26AYWowFZBezVhTV2GH2ktY3yJtYSnpaVBR8LfAV15zh6rNYoQ7HHrNCXRwrM57ZGrYhjB1QDdG",
  "key6": "4yo6JvnRQBkXdjA5fnFQZ14tWMke663tFgZ9QSX4TJvPtr43cgXog88czA6QMjXj5M9FWYx6jN6T9hDFKRDaL5L1",
  "key7": "emy3vgJqhm1xqVR7Zrf9NgbcXpLq4tWddKvxbv7HYJj7K7KzN6RLEhqQVgUAhwFc9qRAuxGTq5XNMtC3xLEYXVT",
  "key8": "5epwVoc3xdwMmY4ep7dMDckXECJQYf8pJWmPZRX3qVLHMAQL1iCqtGLSyZfp3ApVh9FgQCsNUDQy5cZsye78rgep",
  "key9": "4KpdgZ2nojeXuyvNnJA2KTxavGGDWTvxfRdBRnVY3e3ZdaCq5exh8VWJXpYvn6Cq7hWGzsi4NW8JPEtDmVttgyMD",
  "key10": "2QJ1EL8WTvjADDJ74ymxSq5ESoaaYGWrC2x3AoNYPjk9JmaVwcPqWfh8h8Qg4giqZwwSQGC857MR9zQ8HoL5FK4m",
  "key11": "67d4Txh7qUeUcaXFAFYVx7jxYTSWGaWMVPZ2sdkV9tBzJ4ySPpVemSBVZm6SLvjejZ7QhRZQQdjL6qDnEtuNrtuj",
  "key12": "5ZcYskdEjkwCn9VD4k3so8d7YU1JWuibpDpmQJvnBHTcAfrppKVtrQ88QwjW4FAXQbVvgqdJhRjQjQRM1Bzw8y1F",
  "key13": "4aT7JSYir2xuL2mE373TPTf6Vq6VgkD8GVhPDKGb88uM6C8T29KxsFbbEBbwEJGBfnZnm1MqFh9nXCi7nox8bsao",
  "key14": "esMK9L4Q96R5e12SA8Lb5roMZz1cYZeSbwCVoVpLmuFZaKSqMe2hZv8X8dJWV9RHRZcZW4SfZShNAKeJUFKwFv8",
  "key15": "ZpXCan8dvUp2Xixv5iZpNkNLKmhaabi1Xdcoqh2EFv9mqus6mk8cpK3bfVdW4nmAgV7Jvx6zwrmvKb2AqBvbHU9",
  "key16": "65vWkRkhk2RGYr7xAyvPSh3ejon2UU8ZtWtHLXtyJQgpPoc8p9JdvWnavphk6RWJrxRzSW5MXDjg96RNSNmjWeZY",
  "key17": "2MZPcJ26wA6xakxBwfcwPhY761Cm4p65NtUUsrDppy1fRxmLXAbr7dTJpMoUHC17MgNKBKXVimJKmoRQYemr1cyV",
  "key18": "ZiVB4uhVgtfKoqd6EZQTMaAAzuge9SPXk8zszJmKyzu2rYTchAmGfwcrATyfMwpBoLqtxfL6GdM8Hv6bvB8BqC8",
  "key19": "59WsA4GMFWUcXZzM3Q9Naz6UVfRJqZtsL7Djh5NDN5pexkZiE6HvLR3LyV94V2rS7PHnT5q4eyinkrn8Ha5eguka",
  "key20": "5yWSqV9Lizjk2y1EYehtgY1tcoZsCJCBPMrULd2qiHDXK8G56iovGRqY67Vcgdq9de4HD4v48bNHmQQUffdMSKQu",
  "key21": "3g11M7y3EAnt3fiuKNf7yd6JHk3ZyH1WkyKn3JwQy6AcCGGtbBjEpJMpPSaWskFBxQ8z3sFjMG2TzgcaKLf3NoZU",
  "key22": "3XcwzgRbmQTaf96CHBZUUZDpJpLHT9mHjok8FYdceidqbsJNoirWq3MVP4jjCzAmDsJ2LB44ZyXdw3GiU7Kd7wSR",
  "key23": "27AX5fP1YopgrUttNFS1awuewr8K5puwhY6LQjxUKRjLYbCVFL82UcmCDWR8Df7qUNm9BdF7uiv6JKsKmVU177SN",
  "key24": "ctAyvVaUD8WqENnpvN6jBTtJsXSuJC2ANfAC2sSbBnJnL9MzymkEXerfQrNuCqdgsTVXwMbSzeDxoBGPHorRxHK",
  "key25": "2toezcrpx4P7VmDPneRYhYkDKNLVvweXq5F6m4pAxmtvnGyAbdCmSr4B9RHSrk9BHsV1XxS7ocmh4scfhq1pmeVE",
  "key26": "56WuuXn8PPVNbLYSGpoJkXaDjXsEmb7PN9qD798Spjf62nLEDfaJTmEy2pCdeSgatNEajkh2thgE8QwEZFPvnBCE",
  "key27": "3jYaFJfnpv3185YHsSvMzNFokPbUxkUR1VFJypdtYoXUYzE7d62NaiZLkEKzw56sGFNE1qeKW7SJA3D1w9HQnxvU",
  "key28": "4JNZkTWZiyGdz6dSWyGG1ML4a8RDxB8KguX9JgTc1Vjyy5qxDjTV2bsMfNLycGG4H1mC3WJRUx9KgjnGJCtaMmuh",
  "key29": "2eenNLfzsVL8MrV182dX1qmUaYTpDfv6UyvEX3CG9UceErZRUm7yegMT78hoFrknnBz9ApdRiEHWjSKcoBjsK8qj",
  "key30": "3Rh8DVp5nkYMq3wouJVxabi4JgrYWGgoGVSZYtSiLE5oint1UWaYWpywHhTMNLy9Qi9GzwxNnViNSVhkkvpZc91R",
  "key31": "7jP84Y4nAwLnQbtCHidvv5GV4Li2G2W27f6Ukt2ocrtxv2TYP73sxSJs7SmUiEkKmD29dGnUbCvXD3CzAEn6JJm",
  "key32": "zAcFqDgiA1f8HRe1rDSfL76ike24mTYH858TxPKeXhnSLJWCMn8rqr43cHAxU59Zbe1a7v6p4nShyoZqQsEC8EA",
  "key33": "2vRjvZtbP5p3ar2qWM7PBjMVyK3qFyfgVZFEUHUCpjahH3Zu7vRKL8YjUWd5sJwKxNDt6NM6k1hN7EF1sdXfTzmd",
  "key34": "ih5nq7Jac3pchbdpNFaLaGYYctXLHxzQoadaiT95guv558JdTs8tfkTPbNDtDNQVijrA8KtJLRZYc3PsJw7ydmi",
  "key35": "5JPkkjV5h4HMUUwz4PSdRBzSacNooGXa4Gwxsxd8w7Krqy6JMiVQEjaU1EowkMyD2B8JhF3fgXY41VTrq2BHMuA4",
  "key36": "bULxTikMUufVBRNeANvyzdWHNb57czybrfD4s5X412uytmFdzcXdDQAYpmQpZikm3VReTsQ96SbJUUkKz8N2p6T",
  "key37": "56TkRKD2PBoqzpv7nQbkc2QYEfzUV4uHQSLDY1hCKzgvxdf3Kj4HjaMRu5kHYYGxXaRNiuT8NGdiPR6oycecSD7C",
  "key38": "4zBNhQUCMtuZraEYG7hE4tKDoApz4UAWCV6oyGJKxYsKBsmHU9DzXHVM7nS5FTGXPaeDhYGcBuSejHCTckWDHRzT",
  "key39": "4ixsA38rfbvbyFbRSW1cm5bykZPZ3m3VQUedGohU16hXSwYpLJVqHt7rDoj7ohqdp94jFA7WFPrhNKjbgD2c7uLK",
  "key40": "64e2aYj29mEr8jkQvvhzbLwPNqf1MZxQbghTxg1Yeopm47bTEr9NfHTJcRgxPjkbZ2SvoNrQXEE2CsYReL1fHfw2",
  "key41": "41BxTxrXNZU1pr1C9dBbghapNbYPV45F63RBXA2TBfEEkEGHKzg2w6FHEFbBoysNcKkMvydxQnurbxEy56rceGSD",
  "key42": "4qJSGKzQrdRifqyCGMSebz9EUP1SxZAVGnCBbd9kra6KziZzSKCHVCoM7JY3edVvY1tcPTA5u3tpW1fGqJBMWwxd",
  "key43": "XrpKb7rgT8WeTCeXsnCASf7PkqSnKCMFQwEGEyDBo3kgwLc6hW1H5mnYnMVLrLsN5ixormEyrSeastHofgJnimg",
  "key44": "4vGCgmTK2hvQUi3QB4NkL1eDh3cGCcTPxhSnBGwqDq3MydpBAKYadCNhDnJ9mKeYio7EqLWwLLtfdeoZXnLLciUY",
  "key45": "nF1eaJiFean76P1bcG8X48XsvAYE9F32fus1SqpgZ6qJzMmnqUvcx6bF5S3otRtg8dnPRAupz4WLXSBQQAwhtDu"
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
