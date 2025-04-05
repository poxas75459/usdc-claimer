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
    "21vKD4fPhM4ujGSXsM5d931ojEyq15ggVF33vWGfqdFWjex7z6PCrxjGENUeG8nsD3mSHmqYMGS2mninFwYv1PK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCfyKzkW8mKvyDLoe8QX3BPkrFWgLiARQhAL8a6WbvFTnsiUcP9duNAW1G7dPiz986bT4pnviKiWSpdPf2v3gyB",
  "key1": "2KRSVJZuMQnNrjiaXEqGkUGhDeKFXUi1Wiu11AUZpMfYGobQjbP3hwvmPGpiadH8fkZcv2Vsrg3EgbAb1Q53hfcu",
  "key2": "4AKLFfoEt6GwATYfzpZK1wGVjTgvLzHm99q3QDcjxMLgANwV2ffnAvAbVd6Ms3DDYFmCERRKzfUZu2WZ9K7z39uf",
  "key3": "2Krha2LVvM8EijcCTVaK1AG7gxcJrmrJBkcQsAV41Ztj1WL3U1qnUSmWaBwfpMymu4vBWTbLX3aFccNtroKZf1tH",
  "key4": "2LocpHaKBF2tK4t9L7ewo66aquqSSWShf5xMSoRh7p11Zz5RWiExRpET5y3NcXtKdCJyreEpLSEB1WmY659EG3Zz",
  "key5": "5AzuR3a3ib4AE59R9j6HhfExTHsFwFif8BEenM1YUHfNBGpQZjiXWmWy4mkzfn78yjD2p6TUGDAUUMX2youkDb2Y",
  "key6": "3BDgLX7AEhTyBqJG3f1HJTnr7f4pEiy1t9J6p5yFUGDkj92gJ9J7PXvUfrRh4eESvrJGs6RGE4z5QA1F52euxXqn",
  "key7": "3sSmvWkuZbXh5oo4HvUDdjJcixWtfAGFXxEK4dJDx3fKyUbWsgrkHwuY1pwo2d6MdRc9SfkJynnWiha8tpD1kTQe",
  "key8": "5if5FDXoSY3WKipk6F38QmcY7EvoAMABMbMC1gSmGKRYaoThPLcXo6YENfzXaq6ewkmyHx23rFvatNaosZkTXuy4",
  "key9": "3C6rptQsAfkaap8XReq2SRcazbCeLtiSX8S8Wa8ELC6gsts5L3nUzRrjiVzYBUDAT5Tjooxe3ZXda8HU9fYq1bf3",
  "key10": "4DgohNnBK1m1Pe3HJ6YqRzb1vt9MA3atMetjLS1n61762XaynaFHbEF9CdeXCxGm15S9547fUyieqC8kDNrMAt4S",
  "key11": "5kcwcFRvnbsgKWz66YV4q7eKunHomnu7fDNCnHawAowsPSidKTGA333EGAaZXcx5WYZRfVpbYWxKpX7eqYedC2kU",
  "key12": "5fBNdqg9w1VVeYQ8DZn6ga699hRCciyFET1gzzfX8qZyKU3XcEW8bkaPMa8CoUGbJA6LcKB2frXVJiXn5qk8zQnH",
  "key13": "4BJZ3fpkUWuoyXa7k5Zvh9Doedqhped2MkpGuLjnYYr2iUjugCrLE7mV3vdQPDjpwDQk2vAL4DFU3ApEgZtvAU1X",
  "key14": "33EXu6upxN8nbphG11yS9vCE5M2M6GWDd6x8mpTnqRU3AqbKdjcN1ZeHUy6G4FoGL3Jnmr6ojkDPoAjbS4SJ2xaN",
  "key15": "3J2Po6bWLtmR2kanM4QCtYbQ2HT5PB44d768KXKRUHGDQR4fVhEYDvLQq845qjSbFDVqkU7xr4ks2t24eTfJ2A3e",
  "key16": "5pLZepo4YXdjocJ1o72KUvwi9CwxQBqAxbzQH6MygihY89jNZSnMYswApYwMULBFx99kYeWzCQrdaj8ZLBrvgKu3",
  "key17": "22ut4xb6xB9EGyScenkDPMFg6AmxiTQ9a39i1Av4uG8XC5ZoHKPr26zTC84hj4qJn2Uic8E2p8vuoroeronB21kn",
  "key18": "5B8r4USiECEaW9VGjEnZWPYaxvRNr3i8dxfMU7LzfMiJBNbHf4jJPBfCVi2L1ST2cXtKsy4eBy4dayUvoGEPzuyL",
  "key19": "3cHEgQY3H3qZTB7RFpk2YKfPk4HvivueVQB7YGdTTLvxrHw1btV4vHiNZEaB7AcmiPnZN4EiZJnHLDeFbVgFZQ6Z",
  "key20": "3p69xzgrgBQjgZ9j1J1nZ2AsdBBvfc8FRWkv8kfaCk4DmRjGsD1TShfS7VSNCwwhbi6Lr1D11mxF8MXXXFy2uG5L",
  "key21": "4zJAvvo6d8C5RkwcumhFn3nH2KYvW8D3X32yqr5orsNDr9NUEHDkZcVZhBc1MNYCPxatPZ9M7Nw9fLPHStPNCgAr",
  "key22": "hMvgijxU3jpqjRS4KmvEcDQuvf591zt9gTFRdzm58PVr5ge8CbnhQZeZHRvSBbHcB1t4AwycSZmfu6PsViBvx8b",
  "key23": "x1i6iNrjcTrfKwYd6wkkipNiXsaiCG8dm8PXS8Fqtax3rrtRPXwbA3V8qUCC4MNv3xgErniRQ2QJTvvdaACWLBL",
  "key24": "25FPkzXwnqH5ioCs4ymWrR8McfXM7E1pgyono7J9nFkCmdKbDx3hA9MZyTcwmVPAMBzG6fEDY1WW7MwUr39HkWUo",
  "key25": "62TfLmk2Jg31XHXeACJbpcZtYmCgP6t3jxjfxAfQutZRdk4sYTZXJ5iXJHVghdapm8v6CzBt6wFXPufjmSxBbScd",
  "key26": "53AdEQSamACahYUnvyb7LF95tiW22zeG3fynQX1xrvksaUtFzr5bAMxL4YyEUCS9XN4jUKYMsbwGpATYi5KNj5H7",
  "key27": "5Uzu3ghM3ZjmhewN1tPztQKWSfqrvPTMeaYyKtPB1ptoTaZqA2aGPuuiMjVb4JnmKU2sM3jkwDn5dNgoZBCYMoPw",
  "key28": "3sa2dWYbs64ptwVKqYR34sfPtTB9KKwk5zHFPpruULQ3zpoXRGLTb9otTyBCr4wdR1XGM61NL8TkZEQpE28xELH7",
  "key29": "4RNwPvu6VHtqnCti1FQsXNyTqR77TABzNzijFQE7KKDybrrKVToLHeSeqLdGvcswsCpXMRYVCkWafmAeK3BSzH65",
  "key30": "4W5NzdobqCgR5a5ctU5XxpCbdHMbbm65um7ZuBqHWRWcBNnAf8zjJEF1LZRNGASygh9Vx6LbikusyPwvyMhuQRcT",
  "key31": "437y2ib2LVJBjxZ4mVteZ9PmH1FcNwKHt2nNPoSN4fw6yn8phhxVPuoivdqwgzNXW9oxLCZtNzdLdHHKJf2scosg",
  "key32": "3jyZsoYVhL4Yhwba4gzAyrtJ4MGzAwMneYdCihQSidou7oCScCeBmWW3oPFbQN4dU22pPRVJgqDpVubuLZjYLoLp",
  "key33": "2bBkz3oyUEHuihnk1pMiUEVSowmT1wifdzbbHAk2sKcKSxL2vmCGwYqQpuygyNFvtdkogsYRW9mAH4ToeqeFFSR5",
  "key34": "2wWPJa7YZpmT8Ppv7Lt9eAgjv8q7YhoYyN24XWQdiYTeuah7q6KDzJ9PFP94acfuSdGqiFZrZjo2t8BSvsVyF4HH",
  "key35": "5tdbKfPLnvvzqez9PAwsEpaiGh56LrTWq2zfD9tdDc7Q6187e32vkqgxZc33h35hPot32C53NLTKagogPcMoUaQG",
  "key36": "3knUGXvgwN3mZNbh49FcYMPzDou6sLZsLrMYX4gWnft5kPxJqNkRLn65jPUXNXunxCTdgF1YMEJS1tqzwGzdiJWW",
  "key37": "3FAsBxNheiTYwYCVXdYQv6iGzd8Ywez8xoZKXTHTfALybeZSAStEMXo534nMu4mFy1WhT33xDfEM96Cm9kiKm4e2",
  "key38": "38E8TmbBtzvb7h3qYESc5VtySkfnGEaaJYtNbwGMWrpponSSGm3h93a6SbXeY8LPkveEZHj8ZTrUmNXHP5FPfnAw",
  "key39": "27NFUNib8pKWrmgy7vrqEJ4gYexA2UP78smzwj9CrYtFsTzRVKtsqXnCYouSTHJkNcJ4AfKHqBFyjsFRKpDt7SmJ",
  "key40": "sH5p3LUGG77o1ohX2xm42McGBKKarwWtzrZfSbNVBG44dSeARk82PGdoaJY6iJz4zR3nti7SJw3nd7ULeh8NEJ7",
  "key41": "3FD8BJ4kuxTkESw4mxUiUoCKc6zgof6JhtAdMpquQM4owqCoE19ghDNjw4g2vGs1cSnxYWzuYnVStcuBMFv337Jk",
  "key42": "3MzFQdm8zcpNHgWhv5R6TafBzedN9TLfSGwszVhN41sYxZ8F4GbRindBAob5CKEiAdRzTV7e2sU3gaUZ5U423nNF",
  "key43": "8RrYUcoPDcXzPyGJoXiK2xYArmN3sQhphfv6KUYPbgZXAhWsrVYGms56Y761GjSzR75SaqC4obkcY2DB8rtX5Bq",
  "key44": "4aYoqufh7DmCR87gh78t2qAjQKQSw8dW7HCgbXkjJybzZCCHsFUUtNecu2EVEyEQvAMsAJw9nGdiV1bKNA9jGNSR",
  "key45": "5zf4faED3iDTvghc5vtLeVbB4uqNoEZvwGTaaq3qC1dNHtfJZgvXSbhEok9G6xULT7miMb8UJMeZ2xv356Vd4qKg",
  "key46": "5fsxHSETF2Y5A9TfjFQjioviyHioeV1fTfiorahwmJiRbXo4ArT2CjC7ivUWzkuLZqTsGRxfTxgPzcQzHBZhYnEr",
  "key47": "2sZpLRkZVZ5cGibZwrgGPVNVbsJrDsAxouXzs88b9nXzT1VZso8TLgXQkrcMsPfV6ty74HnBKg5UeCLB32Zx1Vxc",
  "key48": "4bhsyhdRqQ4CGNoqWhzFPhgEDMDbxJKXBNosCwYohrsemodViNQQWZXy3F9Gm3J59uEQ7mDYC8VjXhnrdwnEiHEQ",
  "key49": "EpUpXTiwnExUJidN5WZrUSN6fCj2DC8Vs3XuidFHyBuHSBAbEbfV8g56bxJ3UTabdiQBuruq5Vd8zjsTGkRQ6mX"
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
