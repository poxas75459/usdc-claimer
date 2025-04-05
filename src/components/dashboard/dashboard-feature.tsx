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
    "5jUEDiBAKt5gtviAyC6SBXKbaQUHcJTZZ2by8sTt5wrFcEWFJ4zoVRfymtmakjm2H9QHnrs6tccbtFK9YKkkbmNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38mzXPPLArJFJUCoJkiAzs8FZfiQ1Pg3qvrqKnFuS9faqmzMCx9iwKRRp9epPJ3JssqdXU9MWQki4q3ZqQKPz4iW",
  "key1": "3RLzw4vAYMnMa9dYixTjhAk8UkgCKKBpdi96JBtCuYBVehYT8nsALUejtU9yWrGrCSu71L2xemDEv2m58UFakC4t",
  "key2": "4cTvuYddD72KCDihFmyN98mDHGsYo7A6g3rJ1dHo41Q9gKxmB25iVsJWVh2knvSaH7gDARFNCSGmSSgATcR1DXWa",
  "key3": "57abHZ2pTcBWSgfhudYNrYERxE1cCMxtK73axtex1p8NdsECv8huppaeGQRP879SfBNTinei8dNYpWLaYJpj6Kt8",
  "key4": "55bvAEcvL8od4Xfwo5xuzibmvCvhELJ1ZHzBotAW6cptZKf8vEana7rwHVw3FuVDe8xif7WEtvLMttiBtScDP5Mr",
  "key5": "3wSUytsvDMfwFicxxyNq2GJZ7LgcudFLzoTk2xndX2RLezZeTZNwFQPZTgTVb6BMYyZfJxcmqCGZCPeh9QtmCHAi",
  "key6": "4V1nz1dvDn3n8TXQHRTV4igyLSmbbzXfyAPcfoAPGAz913qYxQ9AEHy8iwkzLh6W7Utk2VyQdX1L5jcXmtMEsLra",
  "key7": "xkFJp9Sa3CR7FhoT12MchLNgWUray61Q4gjYjST6euMHFeA9MkRgYRtzPKuWC68B46qyQLgHwzFg1VTo33iPpj2",
  "key8": "53RvpfUXy9Tpra6i2GT8738kiujKBagugGRM1KcLZ7a74cnou6LN46o49hRJeufKhNLYWUMeCEtikfT5U8DnF51r",
  "key9": "3W4LsJDUEUThx7RFLWteCecQz3oF6mwZHy9qv3h1QVWPCzRkqEYjQ52x3R6GCxdKVaRedi7p355uriAyTheVBhTX",
  "key10": "5i9ub5X1XERMN5fdSy9obfVfiKbLUQWFoGf4RbrvtUyA87k93iqQazA6k7ekm1JEqjgdHeHfmVJpcNXPteseJBAd",
  "key11": "5jrq9pYBS8V6hLzPJw7sCoySdSyXLBVDRwofGYqGyQ6ds4YmfZrLWwLGkL3JfzGUZhN2Yp3o8htkm3WT7QJfjgwp",
  "key12": "CSUyhDCQUxWrEGDoEkwJWLMEu87m74F8eKGtUgfVebCrYefFoTy7Yr7nTNzVLaxiif9AMV8g7RkZTyWncrrgDzq",
  "key13": "3Yhz5UWSdbjEaX9DZwUnDDxG3THspk3VuZsW4GYQBXa424tCsMiq9KtxuKMfLHS5fPGEbWDkFA4JTFDVRzJR9hoB",
  "key14": "2qaiePerTnVSaJGiAdtfu4mK9uipComeqCpm3s1SwaHFMFHpXYCVgZMNn8AZ9Wj4cr8d6u5tVguF7GegasR4MWLC",
  "key15": "TQ9qg1g6zas8EXjgEHyTAfSW2SeciJBe8d7uTpjALKuFdsd2BzAXRScJgqgaotkUYrJduHKUbXxkgzyu3JpJRNg",
  "key16": "59dDy5cUzwC8AvZHdhuoeNvKmm56b4LTo7ckqQGXrSeW18VAhJGQRdUJBirDqSRPgcwneVyn8ZPthJPtS7grykH2",
  "key17": "5kjR8VppGDcvB2SZtFTnkjMxeZVK2n1vYvQRQsMiuEYucg9Kw4S38P3eBZzFJoNvNbPvAz17SseLi183SF3GyMJV",
  "key18": "R5WhqeAoWXk2KoojGv9wVdx7v21fyptyDGgnHXp1BRvuQ2anBkBo5vunEMHWDFo4Dk7ZqmqTKhU8MuZGZuRVQyp",
  "key19": "2rTX8aHNWSHugitLJea9PMP5Xfsg4veX7kZuknqV6aJEcDFR1RPeLgUgt6Q8GkgRPBwSRA8jB9X5xLQGP4Ghh2Zp",
  "key20": "5nr3p31qwV6VeX1QGbEknbgUnEoNeqsPXLghou3qY31CodBHdy2VBnjCfXRWM13xWsPhNXi6xnfpNB6PBE4sb6Bx",
  "key21": "5wvoAukcRrqUGvMcj5F1WJZgSQx2Gwcr4CytgmS7mcNaG98tNGPz986W7e8Cr6r6jXYvuPSxk9ApxtB7tQ9Mx8S1",
  "key22": "4PwVheGxn8S8X7ThSyJ6US5ynxPb8u4KtVC6L5ziQuZ1vo1S9VX7sKi7K3Y97zhWDWEBDziS6HS8mEGJPRHdFAjB",
  "key23": "8hVBqifMaFgsDUfkWebH1EFvKLCBTZZtLpq7ji1zAGoNi8zgxykeAeP3wKP9fW2bEYzNjVh4L6DS2RtTa3VnebW",
  "key24": "2cci1PUVZvcEU4JbixKUi42H6kiV3TRfRtpe94xgQBijRRLJ9Ym6B4gSb9L9NmwRKCFxndTxbCQ9VXdahciU22s7"
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
