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
    "XdKMY6DR43JLt3cUSLYme8qNzf1qkBnt3DDyRheJ1M8ppxRdDkXEfogo9F3F5bQoRC6WW6dTqh7rfpHKSByFEim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdfFLzEmSumbLf9MBvPPtoLHG4ViX4TnewRsNDCPVDbiGuFTtavSV3pwkqq4F9LLkr4ArSpRDzKxRrZR2Gh2fuh",
  "key1": "5xu4k5zSYP4wF3FJEekLUQzk5XjkfqeRwZtuLjgn5auPCbUVJot2Z4mMCsRBdt6EW1nnDEKW196GGjMSKJeHJgTo",
  "key2": "4KC9Hotp567GmaS6oEDfeL1fr95E6TyqZNh95863QzJMdjgzhPArPnnvooh4r1KJyXkV5VbTGSMAvAUEFMAmLyEp",
  "key3": "38Hzw5ETi6dCPyhD8a4ks3SQKYy18f7DqGCKdqrSDbpp68JRHvyqwLuHeqywXQJ6SQWw7ex9EY8TkP1JdTdHbxw4",
  "key4": "sTfoEzQhNUMLL1bUCvMB2pZg2jLk1Trj8Fr4EDq7yAvs5ZhAGw61VkzZprHsNA9tNr7ARpCTDsc395veaPrxShf",
  "key5": "37NMW1xLrpxKhwhaZbZDLM5oUaduHmZrXjPSuhccqPReSMjDtb1DhBziWdF321w5RLkoo1pptVC83aizfHGLp7yH",
  "key6": "1NoHLcS8ifS3J12HcLAhQRQQy6DxgZg4sAcMUqAps4a7xBHgsHvm1wmimAMz65RS1eN3YBQF1wabPFASaditoCE",
  "key7": "5MLe9ukb4MaoZVvQCQaQT3mRy42mvLQnTT8rG8d5YdmZQFVwnpkq5uy2oMkzsCmY9Fz8BivcZraqCTBLRcsHVRTM",
  "key8": "pCkm1g9er18ST7DjBaAShd6cMefNTM8QYw8wNGkbYpjRTGdHBobeGDJBABn5PeQAjwJuQU5XatM776w8dmtyPWW",
  "key9": "3Yk97BFnuwH2m6U5uQKmTVrnDDbmn1VAcvTcMD3se25Y5GA66qJ2ybpc3xGvZxyBtnebmYKKUKVsfUZvE2LVX8yT",
  "key10": "5ksPEmES8W2FmvAo14QoZTNvnNeBgzDnmJt33PaAThEsNCeP3TePf1JZEkt3WvtZEQUvf8PuR8emdhBNnbPhwkBi",
  "key11": "222S56rHVGLMNJPHgy7eCDs3Fnhx6JPout1wR9m5xyJHdjW354qtZDf4ZKG97348oadnyG6dsmGS281iTQWRfEUz",
  "key12": "2oSi9dhMpeGPqCuFmjdy3dAutm9bJCyp83oaWCh8XQ52WQqn2fE2jNfrXsW89jjbzUHeRxwSkJTyXCF8hhauwdRs",
  "key13": "HdB5xDwkq3wBrf9Ni92PAtWsz9fHMx1kohkfjsV7ZvU9stYYAitejGve5tSvVKVK5QvgjGQkiwcjmETcEMeebTG",
  "key14": "cYJwDPYn62io4TDJx5FPm5oG3UNn8cnMFRicj7Wu46P5iQHeZfTUz9hi3AgGpDcRo72NDX78XnGUYBhLhQqBzf3",
  "key15": "5FB7RV1VzGpVCxk5grignuhEa5vKZa8NcG48TzuUXUrZdUjBYAQjbmbQD8yhMhiDGExRHbF36zBL8jnio7QK5AnQ",
  "key16": "4XWEAeMw1CyybojnMfFqmE6shjgSv2kDUoNfc1whcwoQQtpLfp4zEmMiQuaoGpsoaiocsTerqs4cD7sAt1MPiChf",
  "key17": "5auYDDfaEcRPZ13tZSCGfhGk4hADSX8qeQP9JtLQmkAy9tjaRJWSNzLKULRktSdKosC2w48uKoEvkmfh47Tqpy6o",
  "key18": "3dRJpRXmPBFjQKKb4H88AGoQRUAkLWqW89EAmvVNW9NH3pZMTbpJiup8X5CkG1FNc2dWhdZCdzx77bETJxAGVQzw",
  "key19": "2UYhTBUo44w3MdV9iAB6JnL1tdxquND1LBmsreHxxUJGikEBHDbCRjefYQAqWpbw6sEZ76QnFLwiSqoU2noLx9nW",
  "key20": "3N6RTmrDcSVqGj2m3oWWrAP1VgfQcvxCqiMiKez1VVAXDJA4ZvGpDzjZn5Gn4zqMP2P6wL1oHkC8uMgnPDAyTJGT",
  "key21": "uTD65Pz5BJi271nLdcjBbuZbrcCbWRfU8VboWcZtu3jsD9Wo51CV3TF9SGnkAi8CFX7ADgEwHNeLUusc9n5F4wD",
  "key22": "5dAoxmSpk9BJTetcT1MMQXbEgituhx94GQs88wmJdbrL45K3FgCe8LJJeTuTG9nNS912w5nQyzswgQUKgVV41GTc",
  "key23": "E8Uxw6wyrkwECxWguJmFm8uJiroMkfW9kbFHfNniBaZBB1hYYsFMmhx4zCQrZcwDJtVUtjCUeey5R35TvDrh9C3",
  "key24": "3JPZjZ8ZgadtgYXhrBggDrgQP3xW3exxUEir4yJvQPsPaUS7hUFBQChrSCLPrUYtgA8DgXiB8UcSzL4Vfa1qQhnB",
  "key25": "59uivyigarNwWzm3dGhr6UnueorRdiPFYFHUfF5vTvC6zunrghVL9ruH7yeUcNkYH2NDPEYFuVL1qNV17n1NPGTq",
  "key26": "53aykBojLVJSRuknCtxJ7CrqDgzCYij3okp1XJSyrzPNcjgcqNhbsKJFy29q7taVspvjtRhX9Q1nb6YcgSNjKr9k",
  "key27": "5GTjBz6bPHmqoeoygaxE1QdJjmVAAazRZSYWqVPEn6jT5gyJ4vp7ghQUFkuoYRriwJNeAzWzA6RqKCfkkpnp4W2v",
  "key28": "39b1zrQhrrnZnhVga9SJSweDdnTG4qaRohieJz1FK3LwAE3PiWz9wykUHhqkRGPhrNoFrrAiYL1QELZTxSK5qtWN",
  "key29": "2wjJVfH2HFc3Mi8fFzQAbUse5TqnW7FxbaADq4dgT5wxVLGaLoGa2jAxReGQ89kiEXC7hmU4EpJuoSY1WtV5wsxr",
  "key30": "3m2vmUTufFmXYPeDhKgkipmx5aSYbEf8oGqbsnaa2MywHkg1bzcKaWGi5CFhgX1CUjEBiRMezFjQjf2YT85XEFFS",
  "key31": "45SPGEN1eg6RCZcUL5PnUbQgtupvtrZisnN91nbQLZ3K5XRKVShtVfXRTVgJn1UiPdKE6RX1UoVvJVdVjuQTsDSy",
  "key32": "2GzZJEbaR5ZSHMdA5JbEFfb7mocyNyF5CV4J2chKoMVrD5JUwZkDD3KLB1wu4DETYEgqQfPMAbaFg8RT1R856pC3",
  "key33": "2u8ikQeFcjRCCV8ni3P3fuPZdMFagvLsJ1YaV7763YeH2ddPvCLgAZFrbMsH7qbj21qF9Go8SqVSo7P3re8SSVeg",
  "key34": "648McQeeKTRGgj2wsCyXyw8oXZNsrPZAnJqB1WqP4LGojqUkdBXqjxiXCVbYk3YsZmB9A8rhsrby5xp7sYWKLtTN",
  "key35": "uXEMdYFDiFfZRo5cwy9CSC7fHDXUWhPCkttFouLZYbMa3PeiZhnr5Vyk4kFyfxyQGqa2xGzZokzrLyDgmi3coPM",
  "key36": "3AMacB8MPDmRyzxYQUYyNKdVgpTyG3CRxzaCnHi1Vi74yASoem927REvXMEqQsnPBz1BSfmXs1r6TjmBXFY8qKNL",
  "key37": "22hZkeZ9eTBbyFLZ23hySFjArnNXPtb26muHwjAK9LgGKbPR9byDWcSX8GVc2bksXegK2mv5YD73CzAYF32vHwWS",
  "key38": "eLAZderADepyPc7Hiog2mw3XRoPHDyt3vKfy38G4N1RuMNiHzmxhHESJsk5HrEdnR3YUUKKXDEiEzu3p6PXbDRg",
  "key39": "41p9aegnNP8LoT9MzpVMnfrCYEWv91S3tW3ZdxTzue2uRGUcTCMXaJ8KisEg6iDze6FZCht365HSWgLocmeDyoD3",
  "key40": "29LgsfFHnvDc33eFiGuodDmpX9BM3AYS4mfYVe2DWs4XEAY6eoovpCRtFZKKTaGQQxvfwUDbPYc49dQctNVXFHQn",
  "key41": "2DH9G7PsoZcxpAYFXbJWuggjtDSi4Pn23NAZUJYLExFiBwTmGqEJB9FsRSJPASuDpLSCbFy63Ya9CFcNyguMmXwD",
  "key42": "4r8LzifmyRmN5UGpymWonoLbTyAavchbVBeLesF1zh6LRoVxMg6wDJrL2uPFLCngu7fTjn6bTmV4SGyvbiZgtr1X",
  "key43": "4TYJvxZr2xsLvvKpd6VYcr3XAnbhNnSZEz6iRDfppEUbw1wwEHT6fakFBeWK1vTZTouUiAnToYiDfgk254YXt31s",
  "key44": "58yzERsaY1LHNfmG9BrwxXpcCXBEpJrFhUMHr94VmrZERcdn3hSbcrBRkaHsueAqkwkx2yHnBcgd43qJg9JyQ4RT",
  "key45": "3Fop26nWDe7QYMNNRUCTBgKffN2GztKeLcky34ZvyYnjWVsbftLY8YsYue7nCgeJvmD5NXHCh4eSkjbuo7csR89f",
  "key46": "3QwNkPUjAiMNHHRX4HDwzgDFfMoR5myJTmuAUfJConLpCkfiajpn5Yh6epexqnDHqE24SNKsxsoS56yzMzQYmHet",
  "key47": "2oWoC5RbdUFNcmueb7KJgPih2gmXBun7AUu1uEc443daU4VkJPBenmgFbkv9rdn2xfAD31CyAXX7asfkXffbsq9q"
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
