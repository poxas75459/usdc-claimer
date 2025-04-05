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
    "3VwWoyGdvAniSdCZCvn9VveKcoVn3tWqE7tw662KTa15ZzyvPKobu2gFjNmhNqVesdjZ4m91M3Vx2uBj1iwuPFM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9pGobEjSDv6q9iBDU3qrLRUkYSkxHxY4yWhDpz1xHKcSHFxxyDS3KPo4pNZorwiGEpZ7efydWecYpAUEq9T3u5",
  "key1": "4ZLbDKPb8tcJyk5iYLoCcoaUt3hTBKWRNTWM3sPmSQwhhfLcLCbJmYKkuW6yZgvnLvKB7jvPXvKP3csGPgVXH2jY",
  "key2": "BzJ4FCHgtXJZsQ8nwkYFftQGRaKrkr2A7PahGPZReoYVKFJAKVzAKzwpNg6kjGRcCAsRuMrYSKo64tTUyJp3zD4",
  "key3": "3LZ2k75XDJaB4UFMv7fQH1wUNdxG83Ap7S3SegW23hhcuvHUrUdGNGXyfE88cfrRrvUme2FZNnRPvZxUpysQ4SMZ",
  "key4": "47Z78LP5yqbaEnE2TUpvVbfeJCmQg5xqUbtacmh95FDmvZ6AJi1BZX17SP2Kq26sqfV2QWc5DhMhx6gK3v7XivZt",
  "key5": "FSDJVEmokbKSGRqQHF7HEtERueWnQTYXnukz77krwjvXWthXmxoC6vFb9ZvBZSfGcQEaaLbPh6f1MPYQ4PfZeQD",
  "key6": "42DzFhWzK5j3MGuUVAYefZYuCJz5fBiMHtDN7yea5QKppANSVQptBXQRq94udrUSVrbb2DxvtyTysJirfmF5VwWM",
  "key7": "4wr27M439nKbkSrUWQFk2eb6tW7HfKVhxLmLTR51oNqk91c3sxSMFYHadEghZyR7pYRSSTX38QmGATFsLvRWbxxD",
  "key8": "2KTWtzbDpKQ99G5Ma7X2bSKLVELjnUEmPpYunpwMkvQWmgAL2g9yspt8DyV7DtqerS9r2n8RfcMEgmATCxv2uSAL",
  "key9": "5TmM443s9u9F1nS1fAW4iJR6nkQTG16jLWJ65ZSh3BcHWP34Ub3ZfBZdiD1VKLS44uTwrWoo2EyiVwv3zYyAqoGq",
  "key10": "2yo1CFAkoRvMQXxMQ7HppvAPmtneVqWKCehrY1yFFjtKMbd5T4nWqaRMwcJKoDsBSiaTaH5ysyXA3QXkJqYfCTGM",
  "key11": "3d2tCFJeFQz9varX9b4CyC4Y4n8GzySENcCnmgmzZakK4cX8rCRhznZmuNYzX1R1kD81CZuC6gPB7YAos2j4NuHu",
  "key12": "2fpF6Fs7EYAxLp1cFtpuySTdHDr4RP6tX9n8jVFaiUDguUmy7SeiWStAnsv24VVepxzf93vEMboebkUvj7Z3JUQA",
  "key13": "48kJHjTZbjuHnPxeFVDP7915YTPTWDCLkKG7PdGVQbgZCbrZ6AxXYTfYtHqSCmf8gUPiFngFxkjGphMMaQNwCiSa",
  "key14": "2PDehVzvBiPo99RDX9VSBYzAgbfWBbEQYiPfzaKkgcd5PobNxgFtqEwJkuPYeUeSFaYbyRAZCqY1xpmiJH9gRPA5",
  "key15": "KNpBXz4iBQgkeCifmw2XczzLftDvjhf26pXtJL9imyK4m63a8zM53Uq42gTyUoxEaW1jxjA48UpyZUewi4BYVnf",
  "key16": "559pWbxUMfrLCVLoG8DmR5jA8Q6UWDMt5HsSUr12JtxzHeTagsDGpWuZEY9XcLiEqsuwgpmUnLw7HkAbHQ8LRgo5",
  "key17": "4WbUiQ94HpduJ1PvMvC4yn3TCQRRpycFf4LgrnfEKAE1t7N9PQrqgZp78uepqhTg6QFuoQBhsY4iKdCqZNyZR8QH",
  "key18": "41ZqbknW2ey66kiDxhb2L1ptjzocnCaFZGracozz34y5nQtGRrPzg6bGXi1UMHfshkATKeFoPera8j7LnMb8nJzx",
  "key19": "4fhcy2xSn7GstWx1nfYLrsUkZxbpqjukxXKCu8jc5ZwGFjryUmmxphKhMbCwATNRzaSfQCDf8coq4Bh938jB5DRU",
  "key20": "4417EPSWhwqDRAn7qRcuxEC6aGRqj2WMq8REerwJur8aw3cUs8b4cN5QAtBtbgcCg2ERBKAcFEHdmVRrAfaXbtXu",
  "key21": "2uRqFwMCnvPDj1zDH5zUoPmcx3QtEYopZhXtwXvmmFJRQUDzFopG2aCr6CDipPK4b1Ba9uvLWsnBRcXb76yznGGS",
  "key22": "49VRr687Q32VMfuuiuPejsvPnDWvEXEQZ7MUQUtnJYoGmNLRT9NZnkt1TARpVJC1seEHFVCuPPs1ubN6KK3XYKcr",
  "key23": "63sw2B8bsh9jRZbqyYY899jRVQG2pzFm5Ai1LbaxxERS8PAJNDLC4Da6eyEyoGJRztdTtRQEkcdQwrmgmwjy3H2f",
  "key24": "44DbBdW28bss4PHZgPxVbPGZofXpC6dLqHUGemuCLGdvox5b5z5f1tGrwVsGpgMix3h5BGEKJEMkmti38QoZH68S",
  "key25": "o1TE6cEn4JsjkMGuv5grJQBnBqMcwGEg2AriKYPUgp1CtbtJh24sjLCdU43MkMZxptg4Gi9867Mx35tiV2YeaG3",
  "key26": "56SWgXVMUH9zcdtUqvHj52rcTXm2Hu7VKiwPskDvYfxV1v9V9zJWp8PPEEXU3hzJCZPTukbLt7gNMuAhgtudR7L7",
  "key27": "5VRrqNfehusGaTKcXKVe8ogwhfAoTBTpYwuEwENu6NLTLKSQg2AiXjpNaKjpuDRyHDc6XWye1FZWW1XYyjupK64h",
  "key28": "nZHcX6hUN5YEMehRFD5MTjrMXK6naYpcWYQafcbszvFvVAtEnQ147pH4YJwumgW1xWEYYvhiK1ozhSDFKrpmeJj",
  "key29": "5AgXDAT3bw3U18PmV719q3CtYdLzotR2VBaQpTGBdqbjdUgnYjzd8JA5ctE9637ztkYkufHxiJeFtdfuPRdivFKE",
  "key30": "2ZxPvFwaX1y8KaWJC6ukuxfL996WnVwykqWybgTtzgj1jP641hq4iTSwzjmmLkbgnLCiJ4VForz99x3PAWJoCSpo",
  "key31": "vcjfk8FJXWrSvqkm4p9bEej7WTsnk5nGnzrEDE1pBSBXJKCgfsEtce8msSzJmJpKYgPa5raPz6L168aijzvF3tM",
  "key32": "hED35PrLuSY4JxCfJbeBbJcbk9KCdAtrDoi9LzQ8jc7JdLUz4aB8H3MkQWAncM2RXczMAJmr85mRthubjfSJiSF",
  "key33": "4cRuRBJzhrmryzsaRtrAMT8nReV3ACMgD8ZXnkssD2GWzDpNwReQUpuqURwQ1BptZMSUojP4sunzqHRSyZ7kJreg",
  "key34": "35XN8NTxao4pwBKQjDLX22f5DHHt3KGPfxgx6v1bBgswnCjqfStN711GedxbZLwzLEYsorxe8jPXJb5KHtxogYNs",
  "key35": "crsicSKD9hbc3x2qS8njnjCiTLKVC2THRgUKtRNG7vVkk7JpmanP14PSyiAhggHUNtX7zbGJDv8wxvfSnAv4ZUZ",
  "key36": "5n2meio2h8dfikjjaF7veKXCK13e6AZdMFTfCHq2n9pd6xFr3yWA8CgiVSBPQtsKG6rVmShAK82CqcKjPggrkeaG",
  "key37": "xE86jjofJyT9eWGLCea2PZkAqP95yfycjetbaanGKYpfA3qqNW51qM29Z6QzdqqGYhNxjodr8m4hsM81UWsK91S",
  "key38": "5Vsafzz2Sjouv4EVi2U2EetuDeZ2zFxfWPGJmZJYiWKQi9M94tR5tA2xMhqvfwTDnvTf5RL1o8aA1Fuguiccmfjx",
  "key39": "NhNnrb95dHJyP3aLsC2abgeLrTgv7o9Th8Yg5Y2PVFND7kD5m2JBbVSffnVyUwXzNoESZAhW4pnar54QyKabQH2",
  "key40": "587drQQnniCszwAfDVpoThtTj9wcfCkwHh5NBXDe51EtRdkBd93fCBtX7oDUPW4VFT8NCKtcYZEXEQetSGH66kfm",
  "key41": "2iPP6vPvvog6Hz1cHJjt6eomRF4ksiYCNvRBygZJavJtaAKAatRAFmiAaUFNR5enLAZGUftKqXxs4TsPc4f9gtY6",
  "key42": "5APdFJqcKUbQxcMiUo5RK2ipDkCtsvNYRho3fc4A1r3PpxHfQV2jEHjhu2MmiGP1P7wUAwJzi2RUKBgSw1gwgUGn"
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
