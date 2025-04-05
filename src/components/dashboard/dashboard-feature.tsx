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
    "47njzgCyV9qytwN8TMU7XjEeZAJ8c3yL913P9HX6WzLtiDL5LixTa2J7Ktp9gVoJiVZ3VAH43dc4S42VDboPhkoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evuJ4Winvb5vzE2Y7J9VTCSab2YxYV9Z3QEcBZBfmcoytBg7uu331sjAsvhXhJ1CMj5LW7hzwxfpSTSk44NLP6e",
  "key1": "2FURrYkoWZkVhQ17Dhr15i7zVTmzCcG2YB1SKDacoPSLqp4bShfciegoTKe4cS5dUy5QSgPK7XLZgYZoS4pN8cNs",
  "key2": "4i3gp6KA1EM8xTNMVkV843gVGofecoHdYtcsXso9Na8QiYsRfAcupHcnPzeaBVbMW63pDy1LEiJhPLJSqeNGNfYX",
  "key3": "VSe7yHKNyDUCGNGGYVKK7UH6Lojsht1HvrNx6ivnU7aDXrVPVFmb3aCrGvp6JaLfzAm83dMUoXaGe1zp13ubBW3",
  "key4": "2qbFEpbxxLErpkAtdtdkjDYxhSvxiinUKwR1EU3vBaTTBbVwHajhRuAXCSezqvPyzHaYKnTcSVzvCbzSrfUUvRdn",
  "key5": "kuKJyRDaxuMYNngRkZYWPW739xVV7Qb9q41Gz4Ym8N69WZCpAhVotGoxiiVshmggAuV3P5smGPbp8ok2Wo77uPW",
  "key6": "316w3m9tzGFUFyq3pdSpGVtxW9hnH8LhtQHgLXQePpDu4HnEQbxwNHoTFYyr3ERHMfGJASAfCZGd5EdXi9ZMkqt3",
  "key7": "2Mwytwrh2A4HzYLuWFodK1fP2DjYPPn5gXGXp1EVuVVxX6Rv1f44JnFJQrvSTaJmgRDtXESA2wqr9o9bzcwkJKWy",
  "key8": "5ioh1HegTemrrQySwx9wup6w3a8gwQFQcgwmszzoTKcRjjyC8Nx49ireDZA4RKNWNx3xonuhgz18ij3xmx3HmBVG",
  "key9": "4Rrg3moHAhwCSYKayWx3uwxKw9fAGKnyguFFyAU4Vap2Er8ZfJqTjNuy8GX228E6KnPYoXHviRovF8mNUhWXfY56",
  "key10": "4LkgqPwF8GRDDX2kVP2ZjHTU8E2YJYqerGchLHXoL7uyEv4N9TTjzdd9YMxgSufkJJwkoMBEwNQLVkggZGLrJpjh",
  "key11": "5FVuKoiHcNd8G8YddZKLXLVbZKvwmJxGUGC428wjizPw3Pq9dq3AAP53vNnnwKabEyXAEndBcBKsJhEK1Untkhmi",
  "key12": "Pjoz5d2AiFciMdr15Qjd49Wn4ivm6oUnmqeNPFRXwrvUHNMvF8fGK2EibLNWcEuGSvKwYxr72CkjTpooND1D3bU",
  "key13": "32jWCkBmqMdgXwCxrhCskrcGrfxHeLLpnfRAtec7JHpgcwrD6CSMjch74o6HQrEPZRBAVng3NvmjLPXQ7KG62ax7",
  "key14": "2d8gqfQH5np81xWEKjVcpAbJoLVX7VGMSN4Xar6hpXr3zu7pBhtPJPBhrinmhaeHVocWoQx61gCJR2VWpwrwuPt3",
  "key15": "47EMqSezUECc3PbbYveojDJGoVVXxBSGS8sxBaaKhzxeuP4GiqvB8zqp28PN9jFTMhUkR3Qigps6U4nLrMiZeqbF",
  "key16": "3JnQk2V48rvRBgnknyaKWTAFGdZMKW4E4gCkD2w1nQtApkEmQbp9p4kRgcskiusuWjXFJc4T326mfyTriprxYHq",
  "key17": "33RGRdjs2xC7UhzY91Uk6A7jGQFBwxZXvDuK8znMjeT7b7qLHUndZWXDJ4REwxxGeGKvA25PPa9fVigvf2fE2jHy",
  "key18": "3cXckJXoP98kYAiV3z1EVwaqFquEjQEieE5RGWVPZoafQBiDerfmPXaAEmE9Drk2cXCk2xWkPugqWGyKtepewci8",
  "key19": "yR3kU5W2BfEyairGagme64GJJuz7SHoxoNDKgb8gFu8ZGvDQpJV3KzmhE2StRGiMAeJdiuPcF98wrRPxLzFqirQ",
  "key20": "2NfToYTQ6Msqxur1Ujka2mYRefNGYDqtC6mPBBWCaJFyG5rPr9g9YUWU5Q52wmV2B5JxpJd1pciM5Vvnp225vhbG",
  "key21": "4REg6kp6EuJFHdFxZmtoJh1Qfkpc2gu4WKaxfxucM9hmy8YSMjUho9fsj5fBYsRCdy9fF3wrpvk5Qx5A8aXe5P7P",
  "key22": "crfKRqPmj9PLL18sutaFG7YdP6eyhkgSFrG3PuUBjaWCayReuPtwrtAEEFj2na3faLevwcf3sQMeVxMV2TauuVm",
  "key23": "45Bi4RAaQ5X4KN2TKm7sTRpiZXAu7ej9k6LSZirHnPYWzN6tj3J8DUrJfDqFYqY6sZnUdcbQjwo9EjU1WgdyaBhV",
  "key24": "3J39h9WM1W2aPP7NQgpnbvE8z4KDxYf9Rby4fAwfNqo3juTEx13DHGonh6c4KTyF7Zw3CHs952DoYCmN1kHTCWa8",
  "key25": "3cRAXyyV65z9ofAjmaThVvZTTT2BKiThP8TAU9BotG6zFjsCiKehS8FLTDcofB7pzsk7Uo2XmrjDjYCnmnNzpV16",
  "key26": "542gPkqCB2JsJpUDPyRXP3NoR59mo2Gu4NkGEW8EsbLoEmZkciGvRCugUZ3rSG1zQcK3y1YG6DsjLk3BKU4d7GJV",
  "key27": "BiokRheuQdiP8tymCLkSMDMjWYJXKu7PQau25NfUNNABYPy5Q6NPc3g4rosAsBukjkvWzkRaUUhy5t8MrawDMQa",
  "key28": "22LzhRxEdF85pVAgeAjNnyS86s8FcQH2QRisc1yk17joFMsYfBgwDJWcD4cL2XTXss2mn9XPpsCTi7Cxxeg9tQ5m",
  "key29": "2Rd7sDh6jtuEriSALWLjNEkShyLqXZ5r2jntdxrdVEtjYWw8tgg9eLJaxa32RAvm2r3WhtEgJx8PBpysNVCDJXih",
  "key30": "2CE8PHwKS8MY1zLQ16E1oVWjAue3YSW3micgYYxjLoDsRqJvJ3Dcfs4eYkwqHNvFfnJ9XGsxqNH8V8ueLpMsNF4A",
  "key31": "xU3URKYKfSjBGmu8QDArmFEcJPbRSMdnumsZvzCy4NvqoNEpDTpwunVX9NfC73TJ8vZSGRnQRLcz9xRfUkbMq9K",
  "key32": "qp1fPrzC4Nh9Sg4Zi98kVmzHtEC9coth16LuJ5w1uwrNBbKBPqhvzVBFcbf1Qv6paz2S1A4ijZF1CvJpRQAxNRm"
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
