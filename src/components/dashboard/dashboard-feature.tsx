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
    "4ZsFTLPNa7c4Xb8D9UkrsD8KD46ZiJin2N8NC5jf6yiUi56qxdHLEfLpXP9ahDhYhbCwJT1EGrgUk2P9zQZFAj1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kvX5mCTRXS3Un6JN4YL5FASewq3qMbXwac8VNnqfrrZSZ2bqPVFgrYTULCVgtnZdGgDgA56PZ2JPXKbZwyh3gf",
  "key1": "53BWQyyJ72byEH9CyCBtrUkWbRP59Sk1dtC3BzzkNS8ATgG8r2NYtheAqb643LLSQQc4CtUjQBZgAzi4u9ijoszx",
  "key2": "228rub7GxYhW9KWJ51jJr2irVAdzCzHcfwY8cgMTmhr5ZbtkNC3gHTFS4cKdpHVozRzH4ibGrKn1VjE8deuF8W5J",
  "key3": "47ykSP4GGaRUDcnK9V6xoN1QPqf7HP6aTAFiekxMh2em5ASNUXv4pkJ7HZ6r7mdEVJyBGGhjWqUhqir8J8U3J7dz",
  "key4": "RLGAZRLnHwGiMT1ttadRzFGET6Whnc2SiG8PcqN4DdLACz9AqLCSuvPwtyBQCRABXrosMhfHskHgiTp1LcRY8rE",
  "key5": "5qAVCpaQRX8epj9eoFR4JsvAAk3qGY6m1MMfMSKY93qJekytjrCdabe27NQEZTkqz4FySjefc3U1NGWuiX7K8yRd",
  "key6": "2JBRSczQMGyJC6KcrUrgyPDtVVqfWSLmycBLK3RJBpxpDkaW6e782cH4G6aNTzr85DPo5oXXHqR7Xj8sRyaXhdPj",
  "key7": "5cXmVeSwsUQLUZFPxBqnLpsfTrwDCZ9gHsQhNaWAptH45FZRBk8V7XSsWthuahjf8c7XjWwk1fifZUdKaQFZEKZi",
  "key8": "fRDSxHdY2Ah7pBZShcuz7fuKSb3HEATev1eDvq7vXHQ5vbnu2C2yVd883htDoTmP8szgFwv4yZ4BpAnA9nb3MVg",
  "key9": "41nLX9i7hCJPhRSwekrVunDvbiW36ZDBzKbNXwknUyRLyhXi1kC74uRvm1zRkPVVF69z5apUoqKXvJxgjTTN4y8x",
  "key10": "ZZWjRrfAt4dXUwaV3KuXRouqKsDuAP4KwBUdLbtJgisyEcBWXqVkig2QU8bR7HeNUTro1HKuteJupdQAZmTW2da",
  "key11": "58xhMVsoLHBDxDBvWsumsaoouSak5UvPNbvk3o38VrGkwza33L9DFashhp76JwXrBYWTJcJ7gnsRn7M2oQ2xnq5T",
  "key12": "37LCG4TYw6r5CeU5SYQuoGEKZ8MNnTXsECbzwUv4HiMnypGKvwgRnXAMkdpqt6uHo28aKsKXfACQnWzradobuSzz",
  "key13": "5v6N1y3qKBRLvuujcWEYPYwuUNdMru2BXKfUBoL4DArBu6Qau6q3tBaopxgcMyydneKk59JXXNCW9WZmynQ9mpi7",
  "key14": "4QLyK2GtxzhUyoaPZA5ZR7PeFAoSpewcyd6fiqxC4B6KDHyUc5QcfKim7xL5Q3GySwRF69eJGodSu8oEJzFmxEZT",
  "key15": "3jMDRTJXaZr4RN5bFi3xeyquojXRVdLC9f8pBceeqn211MTprqcdCwU8WU6e4cTfg9CfbD9fe64RoTLhcu2wtGpH",
  "key16": "3YzuVoKnSJ2wvnpxG2VDUrvnyTwzHLSxjU8W7JYpXwZ8iE26dKMPpZYSw3G6n1hbbPhVLrH5BYv3huNKJNrxBhBc",
  "key17": "Qza4w6kvGxByGHYX5xsuZDsJPqmZhKBd6Anx97CgjVpfLCu91GSQFeovDvJkaap54dpE72hMFztXxwoohT6zsJz",
  "key18": "d9xvuthYfiw34Tn7cwTPEkPjxhL1c65XGtiM3RXiAHC3VjNAvbpyEx2678iUKy7iMfejZMNKbtEqnracAQn7pWh",
  "key19": "5EH9ySAasp45wcEwszWKSr7uknCubBpXc1syMKjp3rDWaaBsw253eU9tyUJSnctuLzEq1oo9YRGe3PXv6TXf9rsL",
  "key20": "5zM44FmQ58xrV6CJmgmwXS4SRaaCAQ8ttjGCErP7KoJXQ34MmhswEPj5fxYGdmj112XLMEvn5Y7vtawGv9Tv4Yc9",
  "key21": "4V27oLcEwQLgTequknty9FGTMscQzw5U961jwAXhossrAk8j3PKb7nnJYAmjfJ8SyevQiRi2WghvUAsCs2k4VjVG",
  "key22": "4bcY94w7XTctyT3kxDFjxhinTbx9kATSNeTR9LBGMepsKErZi9AF6bCeBqB7jSsFzD7CSvapwJsq4DRj8nbXf5nw",
  "key23": "3s37bpCrJZeB2dc5LGANffYBMzkfn23g3iqqadwuJHCDvQ18Zg3w5nnCLCgs3WXkF39qxZJAFowFgkBhaFvKVTJo",
  "key24": "7f1WbtVXKndqNep7a9Cu9rh8MUqtN6upDcMDEpy15fJ652gkTYTUoqe48LNK2T6nfxzLJ9DxwdToqwEXC5Abidp",
  "key25": "1TZWQ4pwL48SL9XNBLysupp58Hkw84o11y2oLJAWGJ9hgCqHzgjHqo34ixV7qqpfEHEyeFUDEdzUVGAeYgkTEUH",
  "key26": "5ysjsPNYFMfeMBh6Fq5dtgJ1WnsjdzgCpxU3kjgWnw71J5oGhnj2FYPvoxhdsmqzN1d4QtYVBjQj4nrqcSvLVGED",
  "key27": "5pUE1WAMQrgVM7eV9E9ncDesfjsdesQLyTomyGZYme9N9T2oPh2dGtvwoELc42TcoaSkKzx8rnZUcP8GY2qQW1yY",
  "key28": "YvKrPtHZUkLWTHpF9hck5DvJkLPDeiNRaH9Z3mzoMJHmKxxGkXtysunvqqwdLxr5p3Kc6fPpsyGnpizEUXvMCMP",
  "key29": "53Sv97k3bzNDxaSbMUyewgQuaDuyedxzfJ8pXF59giUfKqqoJZcpnZoWt2XC79zDMYTz38iveiNHSkYm22qLok5u",
  "key30": "5HKx6b1STi2MMFUmAmf9EZ8DdrvEEq9J7cdWZ6hKygByp4LjUu3KSFwwwM2Hr69WcqcKShrTBkEcCxPeXgqsk5nf",
  "key31": "5XVyAXEkfxtRdmhDHN1H3CEmFjquPJiEgMEw1BX5LmacWk1F2ZPU5d98hpNy1pPHYe12LQvRHbcpYRDTV6rs3Fj1",
  "key32": "3pLtKaFgnVQ6gTcev3AE6viR4aoUV79NEtYoQ4LSQAYUNYJU3TaawxWXGVjApowBLKUkAzPJUgeN5CAip6KtyjoX",
  "key33": "2QFNGQZwerHsB2U7xq5eguDF4wYf6Gx3GYgvxQzuEXrxKUCrY5aoAqMM4Ra4hPrwgCyxtfKeF47svbECVygBbVZZ",
  "key34": "3gNiaePokPSewvu5uJNmdyRzAu3qGBGCFrQgYTSTPK9ZWenrC8dteMj9pACUVHgMY4rSmw9csuQjxSdR2JSa2DeR",
  "key35": "5dTUNh1ig9aKHtiyb2MigQuwqo51RoSd7Ufork5uCXZpsaufttNMgQ6tUnVg2k7tKuUXWwRjg96b7CCm6ey67JmQ",
  "key36": "4hPF4uMuQ4nhB4BHQ9P8yd89DMiK1gMTjr8zai3HBdLbfETXxu9rZupZ5AZvdEqL43VGMZsimKSYEMUZTSiUkVNv",
  "key37": "4YqXVQBMVGTVRMbu7wzw25y9dcKw6WtNvzbpHrC97hLKqJXdV2ffr6sQejkHiWAERgehy5Ftw6hpCDoxugFA6hpn",
  "key38": "3N7armzsBbe9mgzmdVPoXy1muy9RbcEC7Mu4TBscxP94xbsQKa8qruF1WxZgqtCS6jhNVSY11iW3CQpRiijKtWuC",
  "key39": "CV4y1zw4CDcB8cKKFzdd2JMGJeeZykiRqncVFTaXAdyipZ88iRjLhNjPdQ9Gai6GXdkGZAqRGgjqoyDQdCTzeiP",
  "key40": "57RPxF2KxKVMgo1MouoPXcA5zoJzRDA6rhCrnyi5J59p5V3U9sBDLvb6wNKkLzYDAUpppxsjnBSe6qddBmGyCsYW",
  "key41": "2uBFt3dTYa1VTedNS1xuk49EtwQQpp3eGBxhEkdCNqs4JVc4ocBX7CojX2Dzvu6oTmuGY6DpEUKMDcFQJKYZayse",
  "key42": "5LLHcyDJPj8vcAaoz1o36EpRYeHXKaY8L9G98bhKmtp8LRJidemM7cxMoPhJr1L3GYj6M566guE5Z2DE1TixyfPw",
  "key43": "4mhUVMwte4RTunMoCkU52gZPy2Rnzn18ME5Puk8JH5T2RksmC3jBSqP4sz5oJgbbrLW45cYC5mSKSwCWHEeh2JJa",
  "key44": "2Gb5m9NqsLJfPoPyDiJphJMaVpdXiTciQeERN63kL5ReHB1vyJJBvmwJ8twzu7cdRK4VtmmTRdnaLoyxSYQnsDuq"
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
