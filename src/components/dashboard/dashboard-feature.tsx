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
    "3pQmRv7v2N27Bxec4gpWjwcthWGqBEwGZMRMZmfD77gpEpb7kTcUwLkHQYKwnrHBSfZJrWuWn5rqi8e6kvo19hHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTPpM4Q8ikyq94D7sGkcRCSJHWafyRASiULR8cHBJiLATg3HbnNmyuLAtjzn2qYv6DEwJaG645rEKNA9WJvMf23",
  "key1": "42uf89TUs8ztBc12584zQv2kTmpjpRbam6fqQyo7yBPXjzLN6RmGrE1hFS2Jgenv2LHtNUi81UKmFKTapMPNLWMK",
  "key2": "BFJjaAUgNrRfnJdwauq3hQuQBMtGLDaVh4nc7iTJAdxJ82CLhWHv12ueBrW7SViPznwVwNRfPNTnmg873NrU3TF",
  "key3": "3fWWYMqwvKCCDKuaYPM4jZS1eXq4HY8ibDz5darVknKQ19EdgeF5sEwitmWHieDNGixevYmFh1N5NQpJy3pEZyXt",
  "key4": "4gvozAhc1dnLeyipP9gbJ7rJBy9V6XyD4rwVZDcuBA9XVpPpQcsCs3prV24uSYgK8Bcr7rrvDZE5ZdTaCTaMVaqA",
  "key5": "4RCELgjNQSVugVAw7fQceY5GB7w39bdpaMrm6HE5X3HSgR8eqFjRYBURPndLr7CdqmSZJ5r1TugNabygiigpjD9H",
  "key6": "2Q1PNX85VYDjZnUHGx57dgLZFqp7uU2anbykaksmCvFXibhDYrjrg9F2u2cDnXdDbdFax87JbBSanASRdHjjUThE",
  "key7": "5A9bE5eZWunyhS4NHYaPQ7jju6bvLMF79UQiDZM1TXajbBD8KssyLeDgdhnSCW85vYrYjaK8EztjugLrWYnEm94J",
  "key8": "3gj6vdrr8eA75mQ5xeWfR7VZMzeYyf2T5o9ZYAoPJpwoqxhVRs14hNQvbYcwE7uprAvFhMRV2CwS5HU7gzsmmHCG",
  "key9": "37jqNFbwDXUUtxxzQrt1QJbGTmXGnm1bUF5t3Jy9EgyPMA2frH6eYPrehr6qnXtso5DQeqmMoZPRECA3Q96HS3HF",
  "key10": "1cPNCRD8NmuputBirmYjzd1kivHpkxYe9uRy6tDnHb3gBJmxbZ3K2Enh7TVmgdwkgEKwbxYCc7vtBEcPGhptE5y",
  "key11": "63j13YxAsQL7sxkLhR7iJE5DVUqhx4Xxd4KXr1QPM6quQhvhZCSL2nzxm226Pa8BSRDfkyrTRPye9WPAQVMuDPy5",
  "key12": "477modVz7D5adKXJMmyYhQLSY8yV5X1dUm9aHNCNYzAdHjDJ3mSN54dDHsLHErgSHpVQ7s7J76kCRfP1tG4WRgmG",
  "key13": "2mbzAULHgmMGWwgb6MXGarwQhZuHw1P12f3EkrVUBPLvUzBMYC4vooB89FhFL3Ri5KJAYg594zf9bkrpDxW8tt8E",
  "key14": "4fabUkRXLsncXEv5StfF3d6qRuXo3sJ3pQ4hHnecnMf5eg5zZeASE8av1yjk2ox4uUxDVNN41FxAiqekgLZ2xNVC",
  "key15": "5mgkNah2g8LPTPgPWfyHCEYLgg483hzqXGRu87JUdAXcs6vi2HG52m7J32ZB36p2Xave2Ya2jQ2C9PvFiUbB2wXY",
  "key16": "4y64V8qs18UyeakzJw4Sg6BwE4B3gXWuDouQi6QLAqnVyZseGsLrDaHVLevmu4p5NUYUbhugPaVVK2L6UX8jNPx6",
  "key17": "AaeXScF6VM5dgGtcYzSk1FU12ZbjMeWN3a55ckMdKwkRVktZp6gTdXabQFLCYND1bzLDQHo43w9zdbvzEoHPww1",
  "key18": "5WaDoeW2WD4sKMU5wHA6J8zHDi1CtAW2hxQR4Zn1G3264STxiMMF6LPX9E9FDQajvMjaU7RLGhSsawZ5rRCfFAcW",
  "key19": "3svP1PbKGEPdJmpmPZzjFV3fCUUsov7tn1hBHdzDac6NQquPbiAxg5L2zgdbMyx7nZafsamdHiwQnohS3jveRekn",
  "key20": "4ArenV7dnirk4AT9NepPrwDPf5v8khY9GAqrzUi3HqQpjjA8NY5hjRzqQdLJMRPfVZ8eEnK1hwhodaKZarduSwUS",
  "key21": "67mCnsbLSU3Wbs5L1VWhTduFFihVSqogRB3yoJLeKWvEKruQjVoiPPsS9gEJG32C6SLXPCJcr2JiJHS8E5otcZF6",
  "key22": "3ANYhFkXf7twmJ3pWUf2mEGvJ2y3TdD35H1Nroczp7cSLubAis9woDD1oZ1duc6mKYPK6F2ixBPXiuEfVkDhtZKz",
  "key23": "2sADrwMbWgigRsY3ZQrA7xTQvtwBif8bSm2cU2EAy1eWewAPJgMDujRVUvev9mSmvGCkYXPepxrFTkGCvzVuHRDJ",
  "key24": "1VJr1Pe1FymMdwefLGXoA3a5M79Y6q3VvXFi2ZhhoWQZKUYVa6Vgt9ivZtRiM2qeU8eVcCPK6guCAFb34SdXNTc",
  "key25": "25pKqCL3YEigbtY4QVgGM1ozGzmQPbjKrb88rDEgLvuiXcnHMHR8ZyqkwAMV6NVgVicgaQaSrvpL2r6zCA8ckxtW",
  "key26": "3nEJwMbw45DMCNzZJs9JJD4Tuin5Y7wwgo3eqCDhMx5ao4p3ATaYnX5b4e4UkA8ciNzDP9i9TuVUefkyb1dGafDd",
  "key27": "3Ejs5gNG8jhhA4PEPJSMWfh1VT26kvjTxLXpy46AKSJWgE41gWP72Xd6sT4pJYCBA8iaNeHv9Gh6RPs64eZsUs95",
  "key28": "ZSzYkUbc1fgBh4fGKzMMQCVMvrvWKEPdc1Nx36uWuTqyoXygHv5dRdHVJvmTBMSAk9KzMTsbXTtpaQXebAoubNN",
  "key29": "4DGF2so7gdmRToz6AVCq3EZ8kUVGkJR5nbUEYxwoGwCpiMrNeEeEvqpXjZDJnLi46to5jS55s1D9FxZwWQgQmU2F",
  "key30": "2KFBnavmXbZDpH6Ldi3fThy5htJaRGJpRdtpxb5qYFi7e4K8tHSbLgoKi5KZipDC3E8vze2zEGxjWaz5ZatEk7Ec",
  "key31": "2YJmo8ryehXW4bqrPyj9RCiNQN73FAueRFfZEY9M8BB1TPLdhymExgZm7YpAjaZQoVjMmP22vattAALojYW8Jt64",
  "key32": "4f3ap2N35B5FSEWG62cXAMQB8pE7umMd27gRHmui93w5baQb6U4Uwmwc6RkWrghYFZRQToiLmJuUQrQgdmFXkZjU",
  "key33": "4y3hStUEvuV55yGGtT6VcuMuKSkhhPwSoVksLs2hgCWdWwuZyQy8Y6banijiXRum1yFrekZczWyAVm5VvonsfmPr",
  "key34": "2TSzLfkE12WSnbHttyvc21NxU1Ao4QpVhb9VDPjKCJJ3zRkXdhy6VCUoUTLx9kXXjxJ6ZbE6To9CHTgM9oGy9YzH",
  "key35": "DMFjb8VtqT67VhLNrQCAaBSgLNQy2mZgv3rueABMctsyAzmL3z3K4G3BYSHkbjmPhquXk6tm67wWA2gFgJ4ENeL",
  "key36": "5e2sw6anWCzLMMReAUxfurGfxAUcmpho4vpX46S2aMLALfCH72MCRrTA16EzNp37UNpzRQwUTLr9KtwCsUoMxAvs",
  "key37": "5L5YcPDiuzppLLDZRqupevVM7BKmbw1GA3E9VMGdMiAtQWPfuDDmXoQbHbTkE3dANtix4ZSbYJ4w1GjjsdzuX4QD",
  "key38": "4F1Z29RzZkjNhXPKh56UZUPqoB6nKJZa6vzWtdY4bPCioU5CnS5cgQwEPRqxweP15zBFw8CPVrLLFo3vv3Y3Mnae",
  "key39": "2aDpzSdYZF6KurJ1KYiHRQ9VwJzbqPuhQtxLyuANKq29VNzgHTTyS4funMLR3Atz43LQmJ3yXj1nCDbjkUMif5n",
  "key40": "5CPuhZwjq2uQWPP1YdpM9EktJDA3r1Qhz5uzfD8RPMiSVcwhFQBt7BSozNEuLYiD7Nm1ywHdbVAu1LMEFnSk9wo5",
  "key41": "rayn6a58z77qVhKmQA2Jz4Lw3K9MSxswhKsaGDC8H7CRKa4wLpTSbXE11zXX65zHbGsKUoCHw3pyR7ZCLsi5dHR",
  "key42": "4bdpo7FCG1Ud5vLx4QvkSTwE1T3xwEuwHX8LpRSz2NB8SaUzwUNx2SKTxRqf6e3DPm4UC13c9vNqWQz9LbKMsoPE",
  "key43": "48eovNejcLgXsdeTnqR5a3dRvoddXnUhxELpRLxZQZHWUKHpxpocL54wecYzp8K7GAdpzxH3vnhaQXSuHR5Cmpq5",
  "key44": "JikZfUf7cjju5HBDcuFkGQNqJbvPPpDmm9pnT3xCE1zx2epyfgHxCP6qoHZJCgWdFRv342KbCwtmcEtQztS6Fc1",
  "key45": "3PUakWHaTBtUhTo5MFUBbHV7SAaDm1QJVh7cnmf3GJUprsmXATpk9PycosbBUAqnHa1FxtCqVwENUP14smnzhpa",
  "key46": "5TukHMhT5sfpy187GqBR4t7jYx35b2KPWEERJuHyVEW3DBo7GAcaqM7ZeH1U7ixt3kUPUC6VJkwVeKH6X7cDuYeq",
  "key47": "2Rfrn78vTNNGRHDoecZS1yg25AdZoBwcb6djw1mTmxYJNTVBKhyF7C4S1jkM2dhoiPLiF9EGxy9ro6opYw58YUkM",
  "key48": "3gWnupyNRYmu9Mr1TppuiPTfWXk93ZnmEY8v7upJmRgzVQ7HRa2wo9d6YGARZPCPQUCDmg153gMgnoPLp8GEwXTB",
  "key49": "4dQkFydeUUB9t98rcpF6UXki1rUNC43avjhT3ooqi3bye21gZLDKJ4i4bb4xmNy7wBKDZT5tcJKoyHdmCpi6uEkZ"
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
