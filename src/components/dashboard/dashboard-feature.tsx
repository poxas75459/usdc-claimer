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
    "vtrQs7QAJCwzd4omkfKNvfnqYNnsiihCX7KTyKiZ2kbMSJjcmQcJoPvpC6DPioTdDnjfeVa6zbk2P4n7HBCUa2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8yS7w7NCb4cx4Kitpj2eYE6EeFj8yX3CZ4788n9HVH2Q7TLzuvGAXSKVrHFewu1WW6cMjgNYV1aQwp3J8cUp93",
  "key1": "5WrnAyKfL4KR4hnkEgpFQCGvGMvP4o7ZPosNxZJXPSYmEgTXWWVPrJ6M4RwuSu4WnPYzbxCbhrafycf5xEZ62WzF",
  "key2": "5c8oSbfHsiMpwXuvy6t7QwpV1UTo2E6wFPZpeJP9oBnKU1rG3Gs7bFSavdKdwRWDQJ2zxkcHveEFrt2bSfYDrrPy",
  "key3": "4c1ydYpazPAWs8x8XGDuEsuBzQTuKUM2MzikaUjzU5jWeuwwt1RMopTZ4CLxFQpEag3f9WqJcWybZBXiWK75rbzR",
  "key4": "5PdrmUuKmj6kZB6Kndm3cKQAV57Raddg2uYHGkkfpqFzX9DY4ondvuM9qRtmTSkwRFpxYxhttHoBnPrVMgrdH1t6",
  "key5": "5QJchdE97yxqzcV5kbAncnv5PsiMuA5C5HR7eyQZfsqjwujH1Hdxn2vSYpYQy3rqdgcKumgEapxvY3XKfNguo3q1",
  "key6": "5nKKfPcAKqGpJFa24FQ73DopqXSKQgdt4V8PibFsdTPvx251YDMdSeEV3YXMciE7pw8fLeWUXV4KJTaTWXTsT7hD",
  "key7": "4DEgSC5x9xmdj278S23BaP8PUjRkBE17m3UMf22uMrxzA25w36As9dJpaTSyvxaXH2AJxdB11HCKrhv5UvGpxksL",
  "key8": "5EnQCE73fzdZZwpnHapQm1YAvMfo2S4RJSG91C1HqV534Gg5Civrd3vNNpTGcGLA96gN6aDV8AoHasVkcwi2StPX",
  "key9": "3t9ZX4pnLoPer58w5fCtR85fUurSMg4wVJe92ZNS8jU9pA9Jd9y9JV9PromZVeid3yUSgieNT7CfSnfiLvTvvnaG",
  "key10": "67Xs2ffG5NxwAeZbiVCjGkVEVhFucrEcafXh8NUgminJwhauQvzBFLyh3i95vbqBpuD7Htpf2SzcgMJVjY7uRqKA",
  "key11": "48n7deWTXZ6EC7cRANaaj5r7ZNeGec4L27FpKfadBiBu7PkVZXmzXWBPfX5X11GTHKykkN1xzG1tFE57dSKRdBfw",
  "key12": "5AtZUbsZuYWfKQcci1VSDLbzS3mpiTrLF2kVgDAqNth7EW3riuYzgxQwyuf9AyTBhmf5fn3MZkibFdLbUtUbbSRc",
  "key13": "2vM73ATJ6Qt2zaqidEFj12hr1CwaQPACTB7TTEzmpvszod41Y61tXuGRoUAR2uYqx8EfC2ukSXE93yorQgSECVq3",
  "key14": "59yGabfthyh77ZmyouRmQBvythu6NTuirbx3S6T56KDHqiaXx1hrSJb5xV5eAMSNGHXpPrzE5af5bqncu3dCQMLN",
  "key15": "4TAknRrJd7uEwGCNzGQijvWPjveqQqKa8v3yr1URtmeTRto5sSM1MEpicKZGFUvN9P8Lc16DF45RaFq9rMe3KAiS",
  "key16": "21qnBaLheGrAGsempAnnBMpPkF7kaUihUffsP8D3xva5SWzaJqr5G8gurjkADLhHRiUi8YBsTfLXCyt5GNTZPPRc",
  "key17": "3a8PRYXZJN4RqsNpNVQ5uy1TSs4jMtcb1uq3aFCjVFhWPiEDGgHd5Uyaq7kJtmgiZasisNSMLhJuCqc2bX9VBbuU",
  "key18": "4T4ffRQG7YtBFm8aK98891FcW5QqByekefHM7UQxTUoP28wdW7ferxvgZYUTA1rVvkxQnkCnGvY7xfNvkrwKKHDC",
  "key19": "57f2zndWDRYgYzkbGQ4zbNBSUuYTdWvgMRNUirN5nBqWZNRJSN3ZkMKYSYQCUQmunhKiKjAGbUDmBcT495EPDEnn",
  "key20": "2LLfTtpJfshpcMGHxRkRU2eFH2wh9WJj6mGFqgq4vGNpNm2Xo7RZfsU1b7EEKiPDzhzngPk2AdYgQwAQPswvu3mb",
  "key21": "5By6d9d97wAkRYxkP4JaAkKWWqkRPqJv8M6xxGptGb5Jmx5p1JUHHhB6aWbLpzVfomnoqszSfQmMCd2Wnf28UpA4",
  "key22": "QsBoUCZLDhrK4Ff9GuJtYtWEWit7UHaP5yBaBYbM6nxPKAByaVsSdiwHAQNwatcFTfrCHnp2kwBM7KX1SgTnK46",
  "key23": "5k1SUnFiY2mpFnMyXDVzXvHJwWEQ1VQj5Eo18VPga4Lqc3GTYMbC7yYMTVwnHq6DSupKwpNBUCBz9eNwS8AGysoB",
  "key24": "4rNJZTbESuwWN7G3Fncc5qLYxi8rL7iaMdJCWU9TukP93cXDrCEfGpSL3sTrRx48yQfJ5vs7hK8vrmAZr8LodFHB",
  "key25": "293QYy8RfPjFeCkVV2cwDbh8oVWVTePgxrihuQWUW7uuebEJZ55WokZfVp5Tat4Wht4VuwqYeDNzvfjb4m2rcRrY",
  "key26": "3ApsNFWRaxwPoJvT8pdJrRMuNjU9V92dKbkJCReyAstfamL91BMbhLhvUKQ3muPWDFtYoWkvE1QaZaJGEma9LQd8",
  "key27": "a6U2b9BRYXAVrMCgtvFedY5yf2YPLqokeWDjtThyw8fKp54iE961o9F8trSsPEoM8Ka54p66qRHv3xzQcF3r2C3",
  "key28": "3uLxE2CSDLgqArUnWann6HmZhRTa7Tho2ekRJcpjFYeSrfdi43GFWksrizjQdHYkY94iR8ymzvT6d9HC2JygsUWe",
  "key29": "s4uBxukg3RXHay9m5QN8K5aySwUmEwaBvxPthwvpxtiMPUKh2KHyohrfgp1U441D56if695VeAQUGrbeXqtAGLi",
  "key30": "3GrpBdqHXGzDEDnpcWK731jWLq4ytP958hLT6swjQiymKvLfzCiJuzUQfPGWDgQNCEM5tdHfSAKDRe6nP54NfsyG",
  "key31": "457U8T4cQAnFiEjDZDobBEnzhAku72jyNxXQTj3hQhCT6mMQReCLYpyWad7vmBjgugDThs2AqjACEwd9mL6CzVrK",
  "key32": "3W9jcN6F6khHuTQwb3z5qFe6oY87tNLfgBchNA1H67Qpfcr28nfNNvNv1GkVhRJPW6to1b4VegA8h2idVYP63ZBC"
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
