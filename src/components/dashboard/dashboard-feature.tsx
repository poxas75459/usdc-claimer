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
    "5ZgC1r4BaoSdomWe4vvTPxrHEyW7W233x1h8tu2xd1xvQ1nvrd6CVPnM39TsHbLDuqxgEES4gpmtb4DTs7JPoqHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R94dWmojRxyxzSE8GP4Rh1JAmUMV17kU9wnc1qjt6stC8L1H51sjgwgAsoHPDjis11naQUcKxn4xNb2RoY6CQh7",
  "key1": "5hrTHqzwMmsGSnEttWcvXp6KH1d8nazChNuc1GE8Y8gctyumBDr6A9hq9TQ6c4dCMHnMwBG5QWZDxNTQD6E83DaG",
  "key2": "2f33NYuHNJcSqr4NFYqx3on3LBFf6dzCzpD9ufEHehJpB2E1qz4cjZnQqSiYKxdjGzy4YoxXPMTffmSnxdfhUW2f",
  "key3": "5UNruEu7dCmvsWn3rppbzk4qJZUB7mD7616FY3jjx9a7HJe1r1HMh9xnvuRHEDKdmFLr4mgyBcDMbti3ywbAa8aH",
  "key4": "5MBVAsTqupTcSPMDFjtaHdbXakjHPAbAYEsnyYsvZ4ewMTmri8S7MrV2PVyi27x4oPLJzWvqruQFs6V6pZGnWwVe",
  "key5": "4BdXmMmfMTujgLNYY9vcFRGgGMx8zc68SFoLjCjSKM1N4qo95GEpx9JnkTrNhRSiABXtAHbhSFfJcx6FPhSgGFFL",
  "key6": "33J35K7h7eoGnF2CgXtZ865HDGGio719tMA4i6YT5MuRbzz2EYfqf4FBjZSerVgrhixJoawdGJkfAXoF54fxxFJz",
  "key7": "2HBSHFNjY5nZZp7Nf8F1QVV1qyuR8bcA5jqnKm933mkdM7KiHTDD55jyTfA1hhMaEhCm1vMhDkg6td8aoBo8PQMs",
  "key8": "5kAMHBVzWLTnDA9du7dybrombgi69EbyeHV2KzCZ5umEBskfBmh1pAU9NkfPedZ9mZ6UXyZ6DT3PtQ1LoENos2kC",
  "key9": "2Cb5Ek1FjCGTRS4FjhdWVFUmzF6dQK1WBG4AWsS6ViVSZuaE11Unagn8tRWwwBK4tfZqBWRKgWZ5yp5xuDsCh4Pd",
  "key10": "2jBUtLTZTYLSaV6C45JvTeFBLzkGN6SP7GP1Sees2NCXASUPeiM8Fe7YaGn43aq2JttSHfGGTou27kekKLgGqXS3",
  "key11": "5jCsu4Gz5KbBi5ZpaMo549bxFoQpPiMYbowiB3tLqK2VduLEzKv2sfbwty63uWv45vk192WHVRLtcAX7ThCFzzHU",
  "key12": "5FGZgXwDUcDEYhJ4WEQJy2pFWHfUJGnxvNP7Fm18orWDyy3ajvkDgT8J4BCQGbLWYaYXjraDtk5eL7QosHEzYiRs",
  "key13": "2YSdzzzBM7Jw6cyvbH26KwCYea5oZLL6Q5jidGBfvXk9X15vxnqg4AaNLdiYHkxuiqoZ8c7KGensnkhut6muNxRM",
  "key14": "MczpAw1Vz3RGzCMGbwg1Tmbpj9efL42mdh9wRcKCGfTQD1Mx3JmmYHfGAEXZYNxvNRAtJQQ1BhYbjqmzRr3Xgdi",
  "key15": "46YMaufjjVfTobDP4ZMcLJmj3FdrU1NygNYWWbJgPLfWsA5rqnbKm2bVusw76a6VUzvMsKkhrTpMZxFjfXRa9F7m",
  "key16": "5sCJgBT6Pr3u7rEx2ijemxY6SmtqzBWRo8zdLFJ9p2Et1gTrgn9Mh3P23Gwbg7X3Db2Lb2Y96eiMkmyFVU3wQJD8",
  "key17": "3EuV57n7ZDA3eMv4EAMhaTbtGSmk4kbXQYs9j76Pw987bjqgZeGdq2Yx1zLDGzuS11y3mait9755CfABuaoFCUvE",
  "key18": "3G8uzUizvgaqTPnYjcRewcjek5dgs8YGuqepDpxLnqdXjEd9GAGs3aUiptYqAuc1pLuTs13KiFJ99xhzar1fYNvr",
  "key19": "2RYMauAWmQJDrxBbEAYncTyqMGHbw7fBU1STJPhUECHCqqTe7hy1tzsrJ16rmeeXJBD39iUgmBGG3sT7LEqiJwHF",
  "key20": "2hzogiPudhfRoGrhrYE4LmHeseBRinQGAmoGJfDR5DLSi8YXiAtNstB1XsTJiE6TTiKZKx2vwUVZf95L41UtEUoh",
  "key21": "5YLKHSjvC4g6u8z6wBF9PHYsVpqR8himzSVJM91acLgeckSb7PnEA6EhAwTswGNmLRACXfs4KUsG2MQC3xdhFhYw",
  "key22": "RyhcaXTksxwFhvxo5XA37nMYKJXHE6gV9eM7Nyffpxq4qYmsCzNELx3fDe189XWsUQXU2SpgEUsBU3jV2zngJk8",
  "key23": "KzWrzqyYbMftmDpPxoXptb5gN6L4B93BDG5NewEs1Cb2q4yAiM2njYFvTE9wQLkmodMAE4t2ZZTX7kSNSqVJnJf",
  "key24": "3gGR6JTFnro6LV4aneWuiq9oeKfqnRqVNs22Gqfo96DmB9m5NMoYTNcqdieyRuF7Cf2rSB9zE37mqm5n5dpDvvwx",
  "key25": "2Q1sSLW6F7B5VtYGKzVkva9vFe1f7EZjHDKqQ1XxHgHT8WQsJ8Nar8RqvAg7eFwkkjSUW6RwcDWAyt8J9XJedezk",
  "key26": "2wUfn74AxwSVczAT4oEC8WyayFhDjc9KAs2umAmUoJWneYLEjqxrdp29s2n5TwPAxijU6N1VjURCth2tJ2i2E3TF",
  "key27": "3SwJbV9R8qXx6gj1rsUBedqv8U8PkwRewbNckJEnxy1eEVUaKnACDEGY95FSGiqmLzRD68vNpbYfiqw2rF21BB8v",
  "key28": "5uNvdJ6TAMnEFHUjLfBp5uACBZKEPTgFBf8vLdLsBSDA2BZr67ryxcfbzRW2J921orvggGLN8sJykwvs1fXf3C8J",
  "key29": "4CWRdoDDbWY7qJWfvqQ6CXGVAtdMyFwf3BYVGABeEzNihwbPTZ8FyGXKbMmtxicejALyhFxdzQ1RByhVQsCpECYp",
  "key30": "5wMp11LhW15KYo2EdecMFAHx7Z4FYUUMCBjpbxnxRRiL4rkPjUDVpRuHBy2APDAmPjVBjxFmJ7VRrmAqnfN3e8m7",
  "key31": "3MqhpRJuvpKcrSGafrRnNyiWPo4tNEC6inJjoNRWPw949nRRXQjvwSaRd5HsrEBhujsk2d4YwHH7qDRgKVoKYxXe",
  "key32": "9CMDVgDGLCyoooXeDHJgAfvhyxi3MMtPcWied7gfxdVDHy9z1SQZ8rtycL4t9psZiRh64bgyH5qqMMdFBcw1v68",
  "key33": "555hJBLMnMWuSom2KYEsbdFdoWaDDRcbvYpGFNsmenaJ8vxfHgTkjCYpjdCxApU7Fp8faBUSRADv1BJTFHyQ6SNm",
  "key34": "2uEgfaJXBxgY4wTnCbAZhZmFbYCk5VAk1wKfc7x89rpXMpQjvkNc6CtFZxajFDSq2phZPRjX5U8Ged9QZDWwMPRz"
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
