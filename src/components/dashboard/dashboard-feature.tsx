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
    "odqrTvV4tE9XXaRiMScu44G42sT95RArYgwQooCtcqU7XtJZzRs8bXtqFJMKP9obaF6taufFugcuzty5aMUCMx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4491opeTTRRyjohTtSTXMx7baPrHbTEMtdiCDPEwAS9HZTWmuVz1VncysgDUNSrEN7t3bzeE7PVa26g1o3MEaq1n",
  "key1": "4CJ9rhR1t2Maxs9vRgAZ2meDcnKkULUT2gQkXhHGr86GD21vwCmtEVj1mi6zputBzggK7Dep8hcfoARXi9ZjHw2e",
  "key2": "5RB4PChfzBua9kj9EEHS8icxE9TFVwXndSSLzmWQhYkr4ysFZLGirHj2f1vUwuM9SMmMn3HvyWUmHwsHV5W3nVND",
  "key3": "4TLDueTsS7LrpeUkb45SBdsNS7ib45ZhdGu7Yut2Po1J2hiS7n6vYQhsRFCNepRSvgSQEyE66WB5QPLu18zVqDjB",
  "key4": "4oKFomW2s2NXK68W8PS2wWfQHQ6Km5youfJZ9TwNcwHn7PsAoTC69qg8JZPssntYoAhWtYbYhKXs1cozstvJrahb",
  "key5": "2CF5oWtYdXc8n2rkMbiEwS4hu9XCnkWWFcK8ruE8onTRsS84ArDq3HvLW7TtXpscmsqUF4XDzuyK8KhV64fxZpaD",
  "key6": "3LS8Fp65B7rnZBKj8N59aTkZZLc3jDiFF9ejxRa9zhujMd6JGyKZ1reMygyw6EqwJuUFcJTGL9Aj43mn1afCCbyD",
  "key7": "2yQkYDgqMP6G2wnFK55DGHvMeWhBkZViJNjsCSRWMcd9zkNcoauWZ3uCsShE1CwJ7iAfQSwqJoCD6e6fC8yLsYUB",
  "key8": "3HhJmDsKsBApHszy5FNCN7siTvnbAr7c29QZunskQqJdYUPvz78pzovTPZwv81stUgLbJYnm4ffjLCs7efEoZXCo",
  "key9": "4N2oM8PdVGZkaF8nvHjfUHehjJ8JYp6AfE2BQPbpnihJKE984S2gGFEtg7HxLLhj9TrTzVhMC9nnFtMVSJzVXid9",
  "key10": "jfo7r9EqD9T1NPMWMkcajAkGFMHpsdNiohqm45mMdRHYDsM38SCvyPEXXBU446q5GQE6Cvq9sinoLDhb4b2eEqN",
  "key11": "5qkEA8v11qfWfeuoQyRTXHV5WaVQh6a1oLkzq6JfEhzYpYCJjN3uZ9d1Z3JKujfGkN2oVNSSLzs4XdLahN7gkDGA",
  "key12": "55j7PT7mcnsL8mCqWCphnzzUGcdkGsds4GCazCMynWEL8j6KLF1RxryXvCbTG7j4axjz3szjTuN21dXXPq1ggr64",
  "key13": "4mqGwjYDjCqMQh8xGoknQeDf7snXUVYWDdyiAo1EV8zjVUcLDK8nMoxDh7zDnAARQ8UNfEFXFu7JBLNR3sKWBtm3",
  "key14": "618x4sqQKnkvmaEmNbpSfMe79XngH1pmUqxLao4VGk4WqqBjNFuDaCF9vy4t171seENcjYgTmUSuWHNjLHYQQpN6",
  "key15": "4bABvYEPWf7DGuUWNFfLdjd5Lh9pDUHenDNm9Lo9NM3DqJDsHnVSUbtMsXBgC7yAFsLKEfyhdGzH9GSvYZx4UqTT",
  "key16": "43eq8mVqAczrWDXQSpws2Mo5EgjLn8howtEKsW7umxnAVwg8jMazc4Z9KBR8gaftHiwuQDEax2asKRaCBqvCxbxk",
  "key17": "5Uft7xHvxTVGoKRZm9kEA2yXZVy51ZGAEpKWZT3UXeeZ6wkWKihWPhqmeLzMWXkNYidqwemx29ymYvtwXyciHfXH",
  "key18": "3jvFnqAVs9dEGeMunMcm6xbpRMpvvQwduZygRfmgR7CL3RWKZQvN4NRZWdxpRTFKsZWdKrTnHpEH6DRsjaWctP2C",
  "key19": "2xMMDintSdUtZYgLrs8vwkV1MHqSn1HkBdQb19gYRSRqXERKAFqmAsgGx59DuSx4wbc4SjqSBJkMD4h41Z7LhBQ5",
  "key20": "2n3Ri2SWMTEmvVLkN3SHxaEj9KizTP6PFocCxhWnyRzNan8LHypKokSBRcxmwVA4LUaJ6RhnzDAJ3pCAmH2CTXAT",
  "key21": "2GNYoRrvZo778q7j4SdutJw1Z8wzf5KVRLTVeW5qMkLE17CJG8cvyMxwwM3gjMycwcKycT94j28iCF5yS1dPExXb",
  "key22": "3HkZ1S69iL2jzmStGmxMYCuGQVLyQRCTsMGP1wqTbKCreqJvW3H8ZvFJKR3JDMaM9SHfPt9yYVdzsD3jf5D3nTuK",
  "key23": "2jzNTX7WjbA6PAXK1djp56HZMbpy4gKz9hixL5Hjgy4SYADkmf2jAS7H3oh3315pB4DfQvz5NhfutViwokvituCz",
  "key24": "5kfpYkxHZ1ZG9oFwQRjkzhudttmEFYokPwnKg66nXZCQ4KJagbEEs2nCVCE3zMjHVfunUHLEax7JWuPeJh5XH2JP",
  "key25": "q8V5pisVnb46Muha9hK3W6wNwwFDF2GjEBBnxLqfH5BnfGBoU2gg42KQMw9LdsLLVBg1M9B2kU53adSayvGbTmH",
  "key26": "H8jRySywvmCSzUDGbZWERMohaXsxu12SmZq7zsYuU9Art93dzsmXTqW9M8AJNfmpi8ZRAhywHVvwAfbgNT4sYqk",
  "key27": "3UdHCeqTvWwQUZqJCLaTv4zAKoX34RxmS3Qy32dkXR74MYWhjHeAzf3DeMymBAtf4qmCDXc3Bugi4LZu7zXjVJuW",
  "key28": "4cnaLcWDwkKXXicVnNf28UfFUxJizZSkx474dheJs8iSucprdJ5FZwZDWQFHvZmAgePxmuF926usm9iET4Wfz2kU",
  "key29": "3nQ67w5nY1UiAxEPtEwkxKATJDgSNdkFPZcACY4aLuFYWY8nYmSG46J3rMGZDccGTkGGEePFJrfLjt4NroTQEcvx",
  "key30": "2xbv6UsbDShHJmcHhgw5ndNs3wUPXNyiXwyTpdXHudntbr3TG6areCin954UMxpu4fMeBCQxCyGmyHaEgVCdRTZA",
  "key31": "67D6SqHpTskMcg5thxfDrzGEvnwmuLaCafLJBW5aMKaUYhpxAWpE8F4qQ1gvSVjY9ENiJLvfanHQRikHxrq2RbT4",
  "key32": "46QRmPBrTLGChNLXTjQy82L9HES3b1VwRSRzhYi2v2NKdZUFCQf4m32kSpNpqBcK4u4WKXyLEajV6gswSfRAE64r",
  "key33": "5wb2Akfsxko31ib667tybZCab2tmgcjKRSMo1EYULSBdjbEH7VErKq5fHDHtFpShT4aGx9yLr5UuEr3srUh5zLM5",
  "key34": "4Vhi7Bkhom7sdX334TT3EsCEZ27JrMJwgcLd6wWCiLKw88pyaoBtRJvTNrJqCk3RvNvThMNF8U4enhyQXHQxnfaS",
  "key35": "4orZKD8DYQUS6RhWE9F1UuFCMx1BADU53xkSvuFpcbhd3SPryBLH3QnRoLBVRQLcR8VKjPpQ1xzMchdAcRRieTsh",
  "key36": "5ARVEuPWgrJwWcMDEQmKZF7q2AzwDRN4ikZpkVHLw5EaXm1KZY74XjpF62WgPnBsaGNQFi7RnZaA4w6L7pdZT4Bd",
  "key37": "3ayXbgqb2EugzbCaS1BGvVGgD5BeviWXXR7fSezkBcd3iwmBaHN3qkN8yGjbQ1ToZPmfpPKVobjYAirVJ6p3yhKs"
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
