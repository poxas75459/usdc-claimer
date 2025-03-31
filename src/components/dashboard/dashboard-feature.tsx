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
    "2FU15PmMcvdkm5n2Kwr7tauWf4itANwjqLYLUX5yU6NKm1RHcsupcsxHrBXoByVBHiZdNzi9UUALzUCbvEPKwtT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUbJSSMtXXXDnbXkrz2VgyaTzpMsTpvQdmembuywsUKf4uUsmjoQhgiS8hberUSdPuXAdZjp5VmkCexxSJgzJqd",
  "key1": "3NNuuDGMiYr2CqhmSx7k4iakZoUdRWZYdocezjFX7iMU6tjaA6vSkVzYV2QYerLhRtiJYxCZ5R3fQ8zQy8VYX7uf",
  "key2": "2M4Qn6pBzLVeoc7WDbNYxYMoZFT9EbLwW4HURMgZ1C2HxuqvBGoRGjRxG8Krw2YdFFVU8k2d2AFG6yNAZj639NKc",
  "key3": "415FUvoAQemtiir1WmM3wbpqASZvRZbzFBm97KJT4uvvNVzzpWM4tpBpSpmjAuS6iqEoDebSAQDR5DP1NG1mN5HJ",
  "key4": "3ojr5WV7KKbTu57gCCp3wUgBo38eRtfpSC99JV6Tqt1cYBZfNG2JwZAMUU3n3umfxsZ1TvghtbpZy5HJT3SLctjE",
  "key5": "4qT1vRDWYFsb2qqpxamnLnuqjfsxEYNy25kBHkY5ZKCdnDNffN8DafroEb4Lf5dwn6pwh3igaifau7AM22rg8NbM",
  "key6": "2oowh1R9ZgHanSsBkNhqkvgoWw8gnwK2rHAN3dtUCx9X57kLpDfv4toYPmMNXP1GkQhWuf9EtHDmjXyX4LJgfzA1",
  "key7": "Ewa76FK2rKfvGZdcaFr2J6m1frP1RKMAUqTrf3apSLuEsFA9o4L6zNWpeZPdvRADhwsfkYhNtyZ5YcLMVXw1A9f",
  "key8": "2WX9PTfmkFZNnV4Q4hW9zLxw3gfUgoi4f1sdZuVuapAJ38tA712R7TMxWjxw8EvpsLkSqnYCoFKwUzKBjhjUrWwg",
  "key9": "5J5At2y11ripdSnwhpWgdPGDoymFxJ8QQoXg52sRT7GYYem6hrfd7BU7x1PCqtkTBeUZQXaZK3qPv6Do7Tyi62G4",
  "key10": "4ujBkr6Yu7G79HfxgHzmZ4ouHjaaa947PiCdKRHL2GAojuRhhP4uNCgrYL2wWqJmvydfjDTYW5VGdqW2etASycX9",
  "key11": "pAc5DzsQzNYeYwgczDgBcmP9bsFJNi4tQCrJMLX6F7nGhSiSeNBCeeU8Q6mE4NsbXunRYJ9usepUC3Ab1NLaNcm",
  "key12": "42CgqegrML5fvQNoBvJrcR3tr6F48pCyiRFfvGjfU5ScfdvxHhj6QmnrPTjKLdG5KHDQeDQdHRcDqHYsy9gJQmiK",
  "key13": "2iQ2KFwt1HjtgrvkzhP3TMmTzGmXYBqtZSu5yFaK2bBPsWAhgJAn3bywYQuBrCN5pwKfBUm4YBg6B1JjKqQ2PV8y",
  "key14": "3YGnoXH5n4cHS8BJhyvfgbpXgvZcUFmpthVC3UZfhU5fLWswyJ21LVtWfL73XpKD4vEPRGrm9pKJKQDR3CRJ4Ayo",
  "key15": "wHe4i4EEEDETUfxXqCRZXWdSMcZ6uNurs17Z4AMq89kwgB6Lut93vHgwf6j13Y217bhxTd2GMbfDWAE1V6U3PXc",
  "key16": "2xkymZuFHUWZEoMBQNa9NdysiAtt5TEnR8mx2jnoe7LemD12YgngwZyLAWDg1pUFcXjqw6iPrr6i3PPETvZbrFMb",
  "key17": "5F3iLxtEH2KbD2kmt2617dZubtArLEdeMSwcjdGemCYfKcYycVEjpLwDvYidtn6EcxrsUCaTnBEc4m7KemXAgXSZ",
  "key18": "2oqq7mMoHD8CtFMD7aGPq5SWfAMwgiqtpZaG8tAQUSTiahTiYAQ7DpGuuCNi4aMU3HLb4yqkqps6H8y6q4nLEYed",
  "key19": "2Yeuk1ZjzHXLL5gBFGJukLGvvzKP8faVew27NHZpjssgrtiCWP1Qzdeh6kntwzZb9N9YbvGjucnCK9t9vJid7Ujs",
  "key20": "2oKqay3yafrM9EhN5NN3atucbap5gTDAiPqg3bw9KUBtH1fh1oW4XSZDr5UxF7sepMTcLmrWjVR8fq31ZCXUv9Au",
  "key21": "38fjN34nw5GnFXYZTn48wUqxNAYqShAH8UFCnSbBLqotRvNUUp12Cai9uMtuvNJcZK3rCBviiU8ethuwW2qHGWym",
  "key22": "z8QYxA2MZ1pgJjPy33wnBeZKbjbRVQP3ssxoLbvUn9rfwwp5ZnZ1FpNHMYHWHxLspKCdPkFGdMJ6hpVBw2H5LMq",
  "key23": "oRgKeXNAQ1j1QUk5ri4E9NVdfFpRWRYKFGMUfExxoZEJinj7FaqnJBWT6p7brQucQG6r5Q4S4FU3MBd2vA2wj4h",
  "key24": "5PVwvfvpQLq23qK8PPMFw3eNx2Wv2bYk4oerxdjhVTwA84k1LyNjRswQaPoheT1t8FjchkouDpx1XhBTP35rAA47",
  "key25": "2N6uahdBsGXDYLizzMXRgY3TPCfBsNcwv9nUdVEL6Kg22amTMKpJpUyAXE9s8oaS6HGXLGev6hiXrCN2pbN2pL8z",
  "key26": "4L5Uqv9kKdRhsYzhfCsFv3CfNTJaco48RDJD9pUtd6mtFVw8KyvVVCMQjHawuoAV75J3VfgU4c4dnCcKtRxQ5YQK",
  "key27": "4bG1Yo7rfdLE1ecMDMX6cNQ62avnXhzoLGre4ygBwzdvv1oLxUASifox5Zzfgc6HobGucWoeqm3Qo3aUhU9SkVjv",
  "key28": "2G2gHMWr49LNNPvXk22b8A5iPoe2FE6N6Wdq5ae8rzLaXDMerau3g7UkczW28uUrHgJeiZVC6ywm5wgzFMNJa7LU"
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
