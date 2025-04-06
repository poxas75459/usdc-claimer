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
    "3dTdRJqnh1gtuf81yi75EsMfUhKUSDvySv57Vqp9sttbCxHFytft8Mu1eCKe6nGeLRCxbNpMr7jPXEXm7E3hZeBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E9mMUim9tETp18X2CtUWStd1Hj5Hak8mFrCSQ24rBWdEV76qHMWDRUs9KP2jYDMSXxaRWwZ6rTWk3QpBPETNijV",
  "key1": "4fB7UtPayJxmkNM94QJ9C2BRGhdThfuYmws5kbu8Ma5tZsXoMr4r4C7aaXqjGAxQzw5ChhBtsE829efuxFy8jCtC",
  "key2": "3vRYjMfJ83EJ7wiVt8mKFCRKAoMeGaot3LebEBb4naeXtgfebLXuR5PRUa7K3SySzyc1DAoGPmQvArs77fV4yh8b",
  "key3": "q1kwsiMX8DXDK6j8aku28ic9mCT1eos6KsMB7fFBizrDPHzdg1pyQ3AjD1wTDtRyRX8w3CpWfaR6RLc9Ha9Byfu",
  "key4": "4euU5937ynMhsqgzP8M99ffawqmmSngHzGXLke68nQjFpNvjtn4E7tK3u5KmbJzbdMB6adTekEXyR33t46bd9x2B",
  "key5": "49HGfGqCiZZbnS62XeHxA2scv5dL3sVzS8zR8hMh7knEP2Udr94pQkZgWKrczS3Ep3mwfq9MbYnpPPNpU5CzmcH7",
  "key6": "4RUppA9CutA9QQhFDzMKgEyiEu6x8c4DfNxL6WDfxiCqw7DGFj3bWBWgG5utMXMm5rCswBP5ZrPbDW3JzHvFMJWh",
  "key7": "4yspcizF49FLJiGMpKNrhynhHivtTDRF9hLWkR1KFSnKxWcLzsYs4dvxYnXyB2A8Dfy9b2sKXBzzFaP2dD5Qpc8D",
  "key8": "4sTHCiLuMEePDbpmjtoPaWbtt2N2XsExfA8SRRU3KmQLKtwZNWUHfk8PTCka2D8Vj8SAgi1CrzGmfSPW4poEWeeM",
  "key9": "2tnizKJ8KPNVsvCvmnGh4zioRRRrzVj9m2K67foL48PB8PnnSqLHY9echwhFfXtH2RGtTJ8Rz7NCactuFVMwBWbY",
  "key10": "tcMyX4dpMD2S18RNUbcr8LRAJVda5QqJbnAFxEK2Xh1ocVsrWsqGc2AsQ9f6mCXBnrQN9MUZAVwQPDAg7ZYKZJr",
  "key11": "2WRpCJuF4YeHXFV4MGWyy7MnEz3pYeW9gEnV41pog7rFrm16pzRBZ1oMbCp85TwnU8VzVyjboSP7REt5JDBFaE2g",
  "key12": "2hJ3C7Ldz916r5QerXWhGXP8a7hvkqn5ma1oGTG3oZ8zW6geW8vmgmvKK4TTwdSeNEqWDxu2gmxiXd5s5E76abuG",
  "key13": "KrqcZNroUdwUUhd1Q41taBjU2g2QX4bdy4S6Fi6sF9vy7XdJ9NcgcRxHgBNG3RUQvoqnnGuGTSZ2BHEP6pA8aDL",
  "key14": "4GUoyhTDGuqVnmo8pN9cN37QuTN76D3kcuz45BtHTRcAv2koVNc9JitD2N41eZaKw3h6B17RFEdgm17fYKMPEBdo",
  "key15": "4PJCpRv1HLFA9F2NZXjmHbYbvWvmqYFYzW6m4coa44F9PsmPovW6ECRpYSFoACCaeiY8kVwMHc7mT2MUuSgdePFy",
  "key16": "2FXeoMVPtM3zpzL3g8kCpVTAU4EqvfnecXu45f4aJF35viNht57uuj2UrxADYXWkxY1mL2pDPM15S9Fmb7LxKiLo",
  "key17": "2v8a6ecFkDWhPs2Gftvk4rx9LVysJ9H5BSMnokMqH2oYMyNZkpQCbfVEcACoEc19ptPLuKk7zNKhUxXv2V8VP8ob",
  "key18": "eEUZjgHdBZTvZ7W4Ux9AwKhst22obAeu2pmeY1mECkf9yrs7qE5BuVNV3S6inVbYCgg6qTA7H1Wdw7aT9rhgeG3",
  "key19": "5ZTe5CR6Fe8nvLNnGvRfm41HhDiTUL4opTTJJsJfgJ6P2Pba64AVSbiCw5yzqviBjKWNkQ7izGvXWayN2rZvmDSU",
  "key20": "2uNvxFaSXZUboYwQ1HAh9VqyZ9KREqAA1fdiUoUiQEYVLngkqEZwUNXEiRWBgCW4LhYMXGMgDVteWHarQAy24BGz",
  "key21": "24mMJySe9ofeLPGwZwWfjdkU7Da6yt9KUFQkUUSHcYaEvXififUGvzHjVBzMKWSJrPd5Wp3GGH1wTQ7ievDbGy8R",
  "key22": "3YJo6FAiiK9Vq9oMrHz2ACqpa8hL3pNmzDz1isXMD6mtYnv1FD9oxPVW5tKJFRG6o3YErG7gmtucQ8tvyspwDwig",
  "key23": "2Z7Xfj7MehQv2yRfYC147edFYVLY2Z4oL3C73CzsfQaCUymmSMZ5234rgwbFfR8R27i1kEhhF7KSSiSkZVrLr1si",
  "key24": "3Rw8Z1cXzTEZiBka6U8RJMM3X2KtHHyiu62TaPtr1UdWYrPLATjuK93CVuVQuWx9GsWzbLYM3csViwFsLi3XMUT1",
  "key25": "49Mj78oUT7LyKcXwGJFkCHL3wkNBinkDP23DUHa1ks7kmMQVZ7Hz2kuXy1q1DzebP24hpgpVbod5KMk6R39icq9v",
  "key26": "2yZsTnchuUyvfKCECGDD9s535XWwnBGXKKoRJBVKC7iZn9f9FthyxDg63uaEqhkPwcvbJgy2YGYcvJy3H6AouYJZ",
  "key27": "mJkvRWJFDH7nSr8USDoQKSwNRaqGaq1TgNgyBwjNcvDSJwkiCYQXgWXV6y5hj4ePj9NEdy1Gu5VYbpitD6G4r2Q",
  "key28": "5PwWSwCgcFqrojvdQe9qZEjfhJ56sooS9cn3VkyYtCinoAJ8HzpbfW6nUg2p9ERvqmUTzceyZtxjwyeBqtS4HYUq",
  "key29": "yH7nVcFN5vSyxwputTBWTw6DgwGJgZR96LACP841xi9zh4r7BckpEBAzA9SnATotfsmHnWFv2wNSaTkxC892cR5",
  "key30": "2sqpaBPA74JduoA83h8Q1efDNTFvdVKMU34KwwuzFjpPVFkq3kSjQKu7fowW38hppmSZFXkeamAEeUTWzDSNZ9v1",
  "key31": "52vhABgiJpyAE4iRSdnbBmQZyGbXBSDfichN5EGsgiMQu491tHEPjrRpVDpqeWGvcKVdTUh9AdKhsmpMQh2GcL7D",
  "key32": "4ZnYpqBFfn5tk6NebdXaW6LdJNd3F7LDeFRTvidkfdG7VgPJC5gF8iqihvUGRhHUcum2a9zsyVPKdurNdHgC2fUn",
  "key33": "5tGEsDPKkn3S2ANmSrk1vcKKq4geB34wXrgViogM81oZHFADMLKzRh8X9XjzFJXzMCZKcFniM92UPigVPpWBjjYb",
  "key34": "3KhhoxnZJDzZtRqdEZFBc3vPnVB3Qcapp19ckTQMkUWRCoudnNGrumvXWp9codBxkDP6FHPD4aD7YjjxqQuMsB1d",
  "key35": "3Zq74eqCQEsyX44uVAovd57foovdGAW2EYvbkACRSB2FrFJSy9eFzpUmpCnEMoY4vUfPfuPnqwpMaAP43xwo62UP",
  "key36": "3m5fFgpWvAneELRpETsDp8K4idYrpE7aTzbgc1is4yeJ5LwhTzqyWvwy64RthvQ4KBKQAJwCDGujwu7Qs37j9hBv",
  "key37": "66j3GrKh22aTBCHuCFs1a9qnXpRmCd8JtbLbiFKmeNRUW4Vkoa6vAJWWGZtdgFj64fahnYRhbFAdnHqRjLSVhrBJ",
  "key38": "2Z6FUf7noxapufpRgsaaHPJwYt6DB5r9zDQFmDhQaCmxPZcUc7X5JERiarGAxAkDbxsBBrzVb9sWmBtebgYXi7AF",
  "key39": "2V6ijn71mUWWYsFtMCSxWuf6jdycscKyKyDmPSQvrfi3pASEbhx1cV2qrqS3uuvEt259JZodQq3FKydrq7PY49b",
  "key40": "2nPHYAZFbDXduX7XVxrnwvrHj3dBHSsHqXngFdufV937v8CqHci1j6gqqu1fGcXk9KL424KV8X52wFWncg7iehmC",
  "key41": "2sDWcZxib2zDUtnBfjVUhmMMgmrvRoSfugsKVKxoK9vrbivyvk3nHxxTFQCQMy3fnKPEfkBCPGD8HumEBGskertP"
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
