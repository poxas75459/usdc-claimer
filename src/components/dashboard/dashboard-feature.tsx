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
    "3c19JhMACBmzh4MzBk5x9dHmzMXK2bfM3b3NWae6ZN1LQYFGU3H4paYtiCtaA1ePF5bYbYAv7zKDFbLBQP2jjHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmsqogs2ACXxvLicafvF1gJoCXoSfineGNm1MMMVcN3VMsYijT9EjfZGg9HXEut3rfR2vnUiNsd7u3xHExsNg4M",
  "key1": "2bivPXK7MppRdMHeHCxHEcupmeF3jXxw2vYQ6MhppMffhPbwf8pZTQiWM4DedmYY21wAbgD4dk3JvMyEV5RRVRHH",
  "key2": "KbpySUCVSit4M2dqe2LKagigGVbfRhDTvq4Dp3wGDji8avBGcDcWiQDz81hrjJKneoWvmKkqNTSFe5xDCkKfzU1",
  "key3": "vL4LTpqBRowGkwyabKvCZitH9aFu5fweWZCLRf7jtRMWHjTJTaec5qr5c3Be7bW5fEXU5pp8daMhnedtoTNYXmy",
  "key4": "vCzQTrajwwnKhiaGnb1mQJzwbHPLBwicXrxpAibFw6tNRr5bnpw1NNEJLnQGhDg5JqDJC7njQgnTLDzb7NGfQBU",
  "key5": "4k3XG6fTUptk1VjcEKHDQwoXGRNWBu8MAg6Puc83Zg43BrWWXFz7G7w8nP1BZKijyjLHH9Lm4FbBiRDeECsb4SQc",
  "key6": "5bjShKoWdTaJ2avYdDtBWFMhqGvqrZB57m6f1WCcURXRQQUci2wiTQ6khN89JvuGzAhDc9bEaqoaENuTCLP4bqnL",
  "key7": "2zxYWAFMg2q3ztFHwvua1ukbZFWkCW8sL29AznRX2agzhtC3AJ4iExFYk3ZmLpbYSpBmK2pJrNfxA8sA3D5iagna",
  "key8": "uNhC2xBWGaqgcUwZ8syN99QtCqb5J1k499NwdouwHCjdGrLxXuQBn5mnYfCHNMVYk2z2tvYG62foYVVFsSd12ws",
  "key9": "3SCRJdjT1NAHw2xgBvWKeCKfDhjoiexBQRSqM6JmKChoQsatFWynFoTMi1fyyV5uCQddTyhEiETBXHZdMTACdkAT",
  "key10": "54XFuQD7gUeHENW7skJSRhiECf7h3eLhzd7xNwFKVVurzQD6iRoVFWv6FKNvaB5BCVgeMSqTUT2ZUyfPHP7QaPY9",
  "key11": "4mB8cypvh9AcjRH3fVYayquvJF5NRtGe6SrYHRH9yHLhpyrqwFXfiHd5tYEjN7rLeCaR85hE5ssyNgQK587bNM9K",
  "key12": "2SHiWtZGNE1SJY9dRaSJNnM2azdWqHLcnUWS5zaHGKr6MfDhHvbyD8aTnJkxaZ8KaDz1cn7oSZLJJbasfAqfZ5p3",
  "key13": "37h9HjnquDMQS2kd5E66Ywzcq7xBKyVLY7QDqGDpszkYNjrHcVSLEfUGJAL6t8qmD4v5aDVeqzs5jjYAu7A3Xt9Y",
  "key14": "9svccCgEnPAV8XviZox1G6pSnvuQsCadBXJ7ZnGoSjxAZQDk1XnCHbck8Kcoma1DYYUVuqzYUFyQpqrxZqBewBi",
  "key15": "3C2pCFrTQUQwMvS4pVGtxQ7WvB7UtpEwWkgQSRnjvjifQJcWCRTV4WuTv4E2J8Mtq5gumzGm7xbky7YLxD3BYGXf",
  "key16": "ZNptbLbh9snHsSuBnWXepiJoynfDbbA5mEJZKkcDZu7SbcmxLdMNgaYzEnxBhc5DyZRAePxNsJ6gaJXN9LoXSdR",
  "key17": "624zqyTnJ6Zde7ws7AXGdSDLqgKPmfnF5WZXkZZXm8DfnouMjtPM29qSDyE2xx17G8SdE3imgBHHPny8Q9pt9M6p",
  "key18": "uunU9e1CBf7dGoX7awUPi8MVQwQZBV2v46HruRm4u1Nhhx4UMQVHdhSGfxpBrAGmbXmvgQ92A5Y2UzCiBFATeXe",
  "key19": "2QbP5g48gkCtWhBmSFhQAx8muzJcUszLqZQ7gQKvcqQbGT1fUPMUPsk9LxuLttg7neYkDkE9U8rQW7MurG3dcM3b",
  "key20": "3GbdLz8HDbSVzGr72695wNCu6kAB9DkxEVgWyWQsg3S5CziPNVZ5QEVmaPu7WGnjjKgqwu4KVEKWg15JnbUqhL31",
  "key21": "4wU3VxechQiYLvwMCnT6jVR4bGRiCzbRqsXvD824kG3naLZvMxGdXaTV7a62K8BGmWhZU8YSsPoSDz1BiCvTs3hB",
  "key22": "5CqPCeHkT7HUiGiFd1smBVtcH7EYAmFSmi7iFGuXCK18My9Vr1Nbf7y2hTHaf2Y7AAChXLZrg9CkYapZYRWS8dmx",
  "key23": "4uhVqG5xFrD5wojfw9ar432eGckFn7pdHX4G4QfztRSbT4VUKSaYk4AJ37da4Qts3Z3VKWv7KmK6wJ9P9rB5YTd1",
  "key24": "2LR3P5QQwvGnG3Ze6NxCJZtDZzHWxPsTXpEdzgxxRyHfCjzG1oyCMMF8L1e9k6xR66Z4CEu9ebasJTGwW8sqZw3D",
  "key25": "4yasrtZeujERccPujB1g6VW6zKc8ncn6ZZVEbJiNTjTsRE1EABr65nLKdYS7CDeNpjCmNdSvxMo7Nikkd52SnoHn",
  "key26": "4ja34fEqezTVZF7pM6mzF1Jv4Gw2cPzLzbmJUEj5FtkwFVDT3sSZvxZXor6JcDfM2ZPJr9rgmuwsUvM5yUnrL4EF",
  "key27": "QB25JCiXDzjY3gxnmbqtwytM6QxC6QkRyPy3pyQpgddvziN7QgkGMykEuqfUnTW9EjUAf11DpbaYL7pk6xfLXgR",
  "key28": "2BWuACo2zKcuzqAxSb3gLd4TXinaPsVn4bm9UKrMgi9PbbRwwMR1QYh53McNUoV2uEUa9BdnSwWKCixknUZi5HdR",
  "key29": "2BVu6tWuZF3JABQmSv75WWoEsg95PnjyXAd9Q4zfoNEoue9c6s4Zvte1fE9tYw2jvJSdY4S3yMivHacJBju2VqcS",
  "key30": "2B2DmUkFdJhrmWYto4kB8JnjzHeYSfWLQpRnyhe8eZevwaWuY2cbk5FYPiGwejFXNcJC5oNLZZvF1eeR1cDZBgtM",
  "key31": "a8BnS5yKLviv8hFrkVdLQDpNySHa61CobYudmhVHrBZSA2g61giBwoMVw1PFVRG6XpKiuSwbmUzxR5tUf9oSvmY",
  "key32": "41t15FbYkDggpapFmq1gjq9Ztc6pXbCgWkNoxEmAsG8jQ1ZRoq9ue1BAjyrDioSy6mVx5E4WbjJjBE3fYGNAueoP",
  "key33": "5NYPWKYZMUC5bAhUFkxnUQmsspuxu1u4EX6xfxL52XrEKvjU9JD13b1RDMyvjKLiFLDNg33K5FG5N8aFPfFAPRdo",
  "key34": "5eQ4Z3wo8Pctt3iZ2TUvaj2wuVd5vGbDrN612c5tzWiDDXj75a5HWgWFzqsXFtzhJUe1JiAbwkD3baZzfmqAPWjP",
  "key35": "35U7voH3ZrXzocpRMQ1FM2pvyVaLbAoUnyUzfzH8nsyBpWVYR45qaJVyixCivbY4boxvLiXbXbqtdjurCdqxRKKi",
  "key36": "2PMNBchFhudYHhPwkHxX4MYVyxPtfq5Sm6bTeqbo92bQnwTDB7LZD1WPMDB94ddam8c5mVPHnR8GQtv8ceTzuGFL",
  "key37": "31aFnK8fM5kFpP3fSzYcx2LVUtTnRqHFVWhHHaqedPEDULYAZCYRofaCq9sbhqKpF9Cm1TtAk7mFnbhpi2fs7cqR",
  "key38": "4V3cGPiWyhwodgfxuTuLFxFx7FYYQvYXgnuns1paAZPfK2maetMGyYCJVtd5EjLq9uLGNJDERFwFiFRH3UXQ4TRc",
  "key39": "uzkMRi6hLkkDjYZztuRFcbRHxGhuqDEw7rBPCV3T6UpBSTky6WqDS6bHe1VcYh3ywcCWJMAyVStQTKNgANcLPNy",
  "key40": "3jqBFeARWAgtjBBrWNrwudXP4BaBLVpJpZzcZbGCknAQS9ey5rYydd7WYx3oZVWkNAnomcgApM8oiExNGv15gpdL",
  "key41": "5ngAHM3bMJew64PnUWhs8mDRpuQgEDDTKWBQDLUanahNVjHj8VeRa7FiaD9BmNUr5AMhgLd5BDPUsjDs2jBNiZUY",
  "key42": "L1ZXiDotpkKGoK5mpJzE1Emet14Mg1c56AvJ6VCivSoUXQewjdsHcCkSPK813Xrsi6BHYSrbJQ3uCtkEhL4AbT9",
  "key43": "4NeEjrGsGUyMWQecHSWQFrSKKqMiQDhYAkkZPnkTqKUmZzBPtTmzU7vBr7319jfQt21973URK3qWRghUTseN21vZ",
  "key44": "5G377w6PMqqGTQyQdJcFxBn5sXcbRbAU7eNca7UeGxB1egpyUAygZKgNH7WXnubDfxviYyu3ZiBjxZVUQXEVFNx9",
  "key45": "2aTPrTSRNeKrv7ZKPZ1SAKmag7kfhtV7CMFjZLz6vniy8UAdcG6pP4DgVU2tRSnBa4sTUs2F3Biyhi4yDgmzUJAh",
  "key46": "Fo35q2hsUvocx7pjED6KNovD2fjhFyNfh8nvLiBF3WLjPpKCek9aApyVZN79Ytscx9TUUfoKHSjfWU3wGmvHwke",
  "key47": "5e918etARfEQBrcFXcESr1Xfd4PKhVjki2ML3Brn6MPdwJES6uCuPwFkBUvrP6NwmRoHe1Cd8EBPxXuJpSjsQ42B"
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
