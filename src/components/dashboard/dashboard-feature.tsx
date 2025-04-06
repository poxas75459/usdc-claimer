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
    "8KU2bUVRNYeN4zqbn8h3XA8368JXW5VKiGTbbkf3n3B7XTipfDjvZBYHNsgNE8GAadKgwxeN7vyvPi4JTye1hjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riPwFpaLFCCEMC1jv4yxekfBAQFq42GB42ZCWPSAwnbAemSovDapomcAnD6jezmRmduJ8hmXuJUsdzFEuz1hHwU",
  "key1": "tE3SCfopZmGJhPqfUgYPFx4TsAS3tA22RkwBTM7qFbK42ajHXxURjd1msUD7tiyhNtmFHRKmxgujecX62nnLqFM",
  "key2": "Vw13jk2Yhu8Ykd1XxfAuC2Y2xUTfpPZbxCK2cjt3Nz2eUmfJXiPMXqeoL2DBio8t3oGBf7ChfET8gnFSrc91o1Z",
  "key3": "yCK1NfEDwzk2ka1Xp2ASttHhjKJnkmVftwaHqNMYKsF8jGbKEje5uAgdmLF2cCXcqHjbsc2i2QmqpN5Fac6Vb4Y",
  "key4": "5FPDubGfu6jkCJDHCyQqzJLbzDMtP8zjEcPhDoRD4qogReCFSCRrU4UTGhJXfGKMWtWsCNgY4LPZ56YZMRCpLXHp",
  "key5": "3nKXtRhVyzpz3oghiKhop7s4puZ5BpynsCeQw6QbmgV4nt7hFaqKM8rAR8iaA2ZLNNikJsgc6xsF6sZwqX6ekMQK",
  "key6": "2TjNhrzDP9AQzMDUA4J1m3YbohYCC4dE6jFmSDup9oGPXjtP4ZXasPmRj6W668opEjqTbm5yMjUCnKdETzyVpP7A",
  "key7": "3nQzZqnUvRm9pCJWB2FZnEmEZQUnY4JooPEfFusJroHLbEZfCfh6rkj3dqgsqYzwEAFDce6QN24eFPkkWkpoCAKL",
  "key8": "4AWQgLP52oR9pMboKYy639xT646GCa6cdbSoNVgXaSq77WnWrazWLKYN53EfQZf9mTdB2SVLtWM4xuMNnReE8eKu",
  "key9": "PEh87ZyEAonuNd2pSREkDGjXB8Lg2d839sJVvLb75G9Lizmf3x9L4J3pPRkDhxp65sKGYGBPvwPgvHYfZGirdpd",
  "key10": "4sjpYyxtaPZsZgUYKxBqtms46B2oiSuZ6vmuzqDuWMT4pxi4fF2gjSd7hVARYNA75etcjas5XQvVKu3TPptM8uTy",
  "key11": "DPogkwW9WuMBQinSnzmXeyUC7qduLqVrooLCxLfbescKLtwAXhd4b1eDWhhT1yMFFfJUmE7eXVCY3jiUpLkvVxs",
  "key12": "4T1QGwg3iRK9zMibSCoyq8JnLW2HJceBJ8S5gEDt6hHSYuGStwoqh97P4Em8Jjdx6PpZGKkazcTDt1rQQ86zQquP",
  "key13": "53RGowd6hzyfkmN6dvnPwmL1L1Jrbw6anvRNXs1oojS91h7fPsSDGcjk8S6oApjqbkH9BwmztAEEdQWd5JJwr5A",
  "key14": "3Y4NT2GiZUYRFKYUqdbZx3ZMk6Z3DVFbRajs4tqdEdaxwF8BrfpbJiU9TmGDqy1q7hJhQQ5EFACEBV9KN9T9Djuf",
  "key15": "2fT5Sj7HTehvT1snyCt5t8qCpLisMxJvf3BUFezXRxUjaXTroUdzWJF1HrjH2XioPUix586yWdEnU5PEZfE2XVGD",
  "key16": "GpdgBEa7hpbFvaNNWuHqv5xpVbmyzYRmwZ9FE2DLF9jAs9mVq5mVgZdi5rWoCjuX91si4tuYXuNUJs6Y7ZVBNGm",
  "key17": "36BzzrkytebLAFGSP2jZE24o5jjaYibp9uHoxxdHWKbpRdgKgPapZTqqorM3crC4w21rZPA3nL6TU2BsirwtBNMs",
  "key18": "32Trbq2SyePdZ6kjXXniy2HaAYVLdhBTw8wp6Np7jodQJV9gPBwbbdXQRND2c7C5r9uvhmZiSDoWYE6ap6mzEPzJ",
  "key19": "GQgKQf2BpKGxztMiYTD2yMeT8tMb4mS9o1HZCQu7RQr13UjT4GBBBKDrmK5FNLQq68qfeWTyjBg4g3PDjnQ9um2",
  "key20": "27iJ8fkAtctkCyhcfSuGKAdm7xNGibMzoajzdep3jQKvhBqbbZUsVJVMVrPxsif49R2D7sn6mffRxBJpz4hcKBnL",
  "key21": "5CvkTMQtHEMZ2xTMLdRtNWDiDS6nt2HzBULP5sdtpKtwPMMMM6RX4rGfcbu8Y7yeEXjuCwevp1rBzF6twGBW1VEz",
  "key22": "3EgKxbk5MppgzWiSwdmqE2BYx3DodXPB2Ds3793Ut9kH97N8jSwf5tWhzMP6XxEfhd1wS3c3A5cZwYRj3ZuHARS8",
  "key23": "5Vh592gdLtkuAFLJJpaxJSTxZANz4ihWsX8riTS3VZKP8sgVckopp1eYjDcjwuM4eBqQSR5zJLiEhEiyduyP5W4y",
  "key24": "3bx4qkatTHVrsE7y5zMMTQthXThkGSDCSoEaZ9uMsnjzy17YujaZLWcKX2fprHJ4RUkRqbeTinwHLgBqEZGRi1gR",
  "key25": "PFNFsCEpPNASwxqritzZpY4PVfVytrEehM6r7ioWYp87wfkQR5pm13FdH3mk9d3J8kG4imA1gQEfghB3PTgyJ2U",
  "key26": "5BD9gASrL9ffFdRHK4egGiUAWeGBtX7RwkRtXPiqafXzc3sJViUbGNhAXSKqB478WmmBRmvmpPtDYScBcrNGbQY2",
  "key27": "3Fo6U8FdxEGKNPFBatWyLMvpkmdP6XDHoxfxWRVtCFVtKQsiB9p3guu5aHU9o9um64K2uLcjRnEcQdA1E2ugmfn3",
  "key28": "2yYQg5wi6FVEh8ioGTTSXBMGjJ6z2Cafj7dtmQG38rBmsRmzsF6VypxkxoDkrxV97QGxzdjoSrHH7oiwEXyGGUpU",
  "key29": "2eeah1EJdhCMvfgRLKZNt8atpAyxE5rAEjN3fkkLwn6iCjiYHzoLG3ujFn1ho4j1tGAoFHPrVydXAJVVdXj9QkN1",
  "key30": "53aPSVBMfLLXmSHhZtEDM9jptuFRgEJiTAhhg3Umqmakv7r4NBNpUgPg1bfoiTEXz4T9VhYKeDKPm9q6Qn96bDHQ",
  "key31": "2SCi8j4E1hXEdv6DQhnhuMPSeyzXmX44jXNEH3QEvKTnYuT9KgZVht2Z29uFwkjU5XCi25pAaf9sQLPkYogcRxes",
  "key32": "5Aqqi7r8BXSdDPWVNqKV7vRLfKvLNVPcJWTM4Dv9ypQ81EiEu2FfCBp6yRV3dNhVzNffVCMGacQSp4a8VDBcqZDQ",
  "key33": "2Er4eiLXTydVVifzvYoBa4FFnMvgrLqLMp7cReCj5NFE2hJi8eeXppU8n2gruoCLHrPcqQrvmc8BVrWzm8N1sARs",
  "key34": "5kEefHALxYzkcd5bSGkw3AamaLFhXRVBYCkksGXyet1SVEd5uTvPc1sDHf7ou8UXn3tWiTpCvpTZu4QvbDNJgLLc",
  "key35": "4fwisQFSsB7zY8GeUAHJPL2SZDcHzFTLTxgdfvoyR3VDbDk4mjqufZyVUpVRb7VPtNaV6MQdVTy8GgGSMHa78y69",
  "key36": "MzUyjt2YukxJT28oMTGtJv7it9shxQjUrcmQ2g53uBWRXkUH7hmz9BDTWp9yB7Rs2JDMH5b5Rx2ParZUDHn9fhi",
  "key37": "5stJQaDh6uqojvcGAh7tPtCvzGtsZsX6Gkm9Nd3pgcGqSpdVNzppCajTfe41SQDGMj2FNU1baCt7oxKLmF5EuLGA",
  "key38": "3yGzNDm9Vw6uiq2xYev7WhJTXrrhNHpHcUEzWr9gpbj2dhdubZMKPt8CqgMZ9FdbPP1dzcm7AQRtGAFAjmPkAzJv",
  "key39": "2dYkruY8EGwgTuzRn2qYYJBPK1DJDRBys5H5eEpDkovCZRmG6rRnqtiTZkisJayhHUeGFmVDf1Wzy3MF9bMyn2ZV",
  "key40": "28wEMjfVgSUxy8H4hwncfcCSVBzhiEwX7D5XhaSZN6AprDUgmb6ocNFUTmNM2KMF1GWD36cvJQwA5CHNmRn4vRHQ"
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
