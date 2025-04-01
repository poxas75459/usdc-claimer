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
    "2r5Bkrp1gwNCLmhYRCx7YmLGJehwhQ9VDNBzbM9eCRFN96ihtNH5qc7iJnWMafvXKi1DUTpzpY2U5sKacPmzv1Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Yv4YsE9KBZgzUXWNfSALzhCRjnXspK492v9erSVjp67xbaYsMDy9yjYM7EbzZaoLZGjogDE3ukAQydBf4Dp1mG",
  "key1": "pZCTXA42NQcWAvSSa4CE81hU6fVXt2uzaawkgBLmn2yoG6BB8h5PrE2WxCAcmc4WCBYxbTsCyVzKXB4RYsBhDK1",
  "key2": "3SySK5ZYBmzuhQHTeqfbPANEvQNccM8UQ62AtT9YvnAcWsAN3xdj7MooXWLAtkxD6sa5RfeVYqXynMNBWWNiFFMt",
  "key3": "2G2xyZFXt4YzuvtzDP35ueRX4uZQxB8M3FyJsGcdDHpLDE1vJYWNQzHmq7G32zZV1mk4FUHKEJp33bmvmsXa3FxH",
  "key4": "5Zugfw5MQoUpGp37daMBTWHThyNdsXLNzi8n8quZAej9CSr2cyoV3yb2VQgVdXbpBAJns3MGyexJXAxQ3M6cGxkS",
  "key5": "45P8kzASunuwNg3n4tujZTtKgDv64CWnRePhfzf9aYCEhXyoAzw6jjXW8okwn7sdri23mfw1jWUMctC2JuTREVe8",
  "key6": "2D42SetRXFTSwogeYnfAsuBcrv7M9sNhu5HFyBvQWHtujASEZqVPFfRSvveNouBqo6zzcY3JZMhLsxM8YxZuNN7n",
  "key7": "JCjrw7vsRQEzerxpoWPZfRBuxCF9JSTGxt36VP9hNLztsbVUASPPbVzWyMvTap8dmmxtkEB1evXYEh2vDoB2hZY",
  "key8": "5kyY4mo4axDCvNo4gCDt8pL4iCxJVpDywRMjmhQxWPLiFkAiL5xY6mfLnC4CqdfA7RB6o6vD8Uvmq53XdAigMZ9d",
  "key9": "3Q9yD1qu912P8PnFTXxojKcN1uKqT4wwD11iKxd6zuU64FkF2zHt2FS3kkWY6gEFF85VTSzsanA2oeyR1pUfroKq",
  "key10": "2TadjEH6wcAncPBA51obmT64iRfkVsJWkuAB9WdzCgrT1Up4Zaxh3hPveUBJrsMAhLsLQ89UzwvJPCiJSL1pTVoU",
  "key11": "4DWkm36YLzPKY4uBxEoUvgNKTozR6daHRhGtvH1qVvFRBw9AC9vRar1zCoWUeqETWMXW12MYXPQYAPwnmJn7caTW",
  "key12": "25Wm4JfoEP3cYBJm77dgGeCw5aJgTHs13XqhHWNngwQekjVCSWH7Qq1MvAcutinjXBSwLL1m8QAtRhs66Afvb4ei",
  "key13": "twJFiBfM9zFW8iRnJLgRUmzCVCEUSSTepk59A8vEjshmZs7bnWiBNNzQxR7awnHrvGXW4AFo4MaQWFmsqQgL1pC",
  "key14": "2SZovpaSe8x9axg2BKHv8BHzNNQted9DYhnusdpf4SBcBGAJC1S1WN9fzXNns44bNM1TGnRsa8md3oBGWu91Bi8x",
  "key15": "2R6g8iLKsx1NRQ52jGMSKwPivcrNthtT9uvzA9h6Nt7ZYqnA9STUYeBKmcy4o9cwifSEcuhof5LcZDiT5x97zCZ",
  "key16": "2ufCwGRMGQfTwUzcyQHPF5LgPorPJSEo6U2oGJS61sipA6tkkHCAAyeSpymunkNr2ifGvMYWdyV8ZZnrpXvFY6Nq",
  "key17": "4QJSSNDiFa3QMidiyQEnUsSNiogs8xLnigx6EfstRvshLhdYztjVvRPVKWbctYPYzEJFRaLZyx1afQTzzLxrqq6A",
  "key18": "31FyZPP1B4Jn5CjWKf1SF6h1WVFW96F8qNdhihPkDbyFe2PkcyRedP2FsZgqM895MdJyLKEKsp2YkQHp4naRFxWH",
  "key19": "66jxaY9cLVhfJdPgxuRiGKukK1EWup5xBKr6iHsGPutsBUJbZ3z7U2tjr9JVbSjJMukqfSaY8sJrSuq9CUhDm6Bd",
  "key20": "4yztiLM9BkCEZEF5eCc1QA7VCNrCU6kdmznuNRDtzmomGbePxXfLYoQL98Qu3J2w8RwvRvm3NxdYDit2tXqY6qQk",
  "key21": "3n3nsQfKW4zjqP5UhriYpbhj2UQ1nfNRfy8QuX81Y2gWVc7B44tmicJoXiwF2pg8ydKztaqyR9v2VzGz9q2GcA3M",
  "key22": "2FvFs9M2zbFvYPoyefKAvai1qxLnLWShV2v9jU3LJwDUyu3Y4MCXXPYj5ubfRrZAj3qKeqqxwqeZmVveb8zJgU88",
  "key23": "5Jxtz8g2etzDrz5vW7ZSG1Rtp88Ekavh8LGQmpwEg7CHc5ozi9xbAYR9JrsBvs9nWCssJKth7He8fy3NVRs7j3ZD",
  "key24": "4MzQctPmcdN9TFYvq4dAAUJRP7WKYkSYSH5TPnNUw7mf3pCi6ch7yLLRiro53KxzrUiTWWJmpTtusA1LTU9EpGrA",
  "key25": "24CbCpGhoxDxR5kKZ9bp97qE2LjKR8B3hNAzeSvxsCi1z3f61ySYe2VRU8vYTrXc2C14U24cDuZQX7yViNYE2nuS",
  "key26": "44GhNYvkSF1ikZFyEDG3m7AX2v8Wg6MXHq7fwT7zNv3EnETybbjbmUimR39xTKs8FFX9eZCJiAibVMbsa7QjUJ1b",
  "key27": "5mNvQZvxX4qPsDA7e4kRjDYEfCNSNehWJiSV7367qigMjbG9EgQKmwP6YVVtSYwjXvUTCwPaGWCcNGFgt9bcbBwi",
  "key28": "4FWsUgPVydsFk1pCuY3N5jfpHtNPcZ6MTNiSdg5J8QecnEJsNGFgADC85kxmdphi4U9KFjzPnS3G8VZc9h8Y86LS",
  "key29": "457R5MKfYtSxn3DpePxmEg5VLfGKLSrjabpLnT8nFv44EYVDpHs9xTYTRdSVMXrtaPYJSRcSNeyKFu4GnNgSA2hf",
  "key30": "56xuY1Fd1mWuiJjECMQwyhMzkQXKszgEdUWeETLc1AQ6Zm9AEPCTKCL5P479umu1WtgCnm41AEGRqeW6zJTR8gzq",
  "key31": "2rqeh8oBwCKEQQfVXcVJt93QB5nXM2pcYZ2Lguqf4Cp8eAX3MwoCUgC6BCisxCXbLpotMpZVGz8imFRqTeRydUPA",
  "key32": "uqnEfQKjf4QtWkYZuReu1PheE7rYjuW5mHBMjkgXBibaq679sXBZcMF2CoenU6JzMYiCNzprk1eZTFqdYeycweN",
  "key33": "YejkR1CDgQAzEfmakEJb5jdjYqVx9vNF9uA3vnjxkNstmkRdHoX5p3tRo4v6zT8LNsAmzFuNwWQ4tS7kCL89NvH",
  "key34": "Y1bQSnGaTDY9RuqBRvMyhojhrZAmgg4fjttqAwkUbyUQpcoen26bdpeoytxTKRLymQAzVX95MTSUbec46tmJEhe",
  "key35": "3w92tBcE8SgJT8goBHAAYiPfMagikGtUqXbv2E5PkkysuXgor6KThds8WeQsPXtsDyLfWPGyAVoaRiZvTW5wqXzJ",
  "key36": "29SLGapvkhTHgTSQjsBqp2PkBfLL9EYULYC5sEsLVkcr3pa6oz3pJmKDrds4WvUVvRgGRaLchxvU5VfKre54yLT1",
  "key37": "8iqVfcheYQt9VJk1yhCPL3DDxaUG9QT2AJwEWpWoDu6K6MuWXHra3xVmJiFmoUuZqPq7i52D4niM1CYcAAoR6ZG",
  "key38": "4gEswB9y4kDqu2LnLTDx63hv3j3vyMqqJj4fvGyPQoLhW6vcsxNoxy8mJwpoU8y9niTzrWjLSPkLgNSoF5ogYtQF",
  "key39": "55tehKKMfsgoUNRdnhqqiakUvMmrqYpjXtWMgTLk2JHLiNDowew5i6yy4neL513FNgwpZTrPSUJAfufJmvFTyExY"
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
