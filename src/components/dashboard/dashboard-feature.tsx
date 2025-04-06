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
    "2Wr5iaZJ8oSm1ypz9tSc3RB64ZaqQQkeF8P7EWKok9TbkmV794rKnTxZmSwth3ntSUueifCgN3x6H8fPQKJ4CKJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGv7WDQA3W41GtUXCx2omepe2dfos3Yi4bsEVfCLtFpUudQ8yhraE25Vqr4c71JjNvcVGkZ7DSbYoeEF442RAF6",
  "key1": "2joLzDiWQWiEsKnH4KpdzrJWHN1UTVpcAqxm6kqQ4vNVpao5hz6dYsC3SDLbJXZwVbJgamz6jLVffkHSK5GLkVzt",
  "key2": "62twBFZ2Nb7hW41gw92pLF2P18TtoPDcVcokp1MuNMqs6n9KN3R4jcn8ybspwZs8Z68TcegMaUWNX8DX23deUYsR",
  "key3": "2duSMBWJBuTEbWoEE7uEYim1ZEMdU87ph17XcNvuSYhJqU1TPT3c9MY5zv6xo121Dqyrs6sgywNMoJhrYjPyxRrF",
  "key4": "5KbW1QCNVnFLsQNfXSmVSBYAh8Tt8fBLdvHVGiDJgr6DiMDZAq1SEG5bDYdmbRWbeq4CbidqGoQMkAzmRmpCBJyo",
  "key5": "5J1uqHYWk5MGak9vi1HSe2otG9NAAVZfqvMU8W4LiZz3XSZAw5y3bNH33FPL6oDWM8ANvxMzdsfBfhV3frwMVmZi",
  "key6": "4nnCJS6ouN24EJKEviuw43iHtmUPUeonS7EEdLz8EtFL9NitPAWogAhVrK2dbRpqeRWyWLrqVo2KMLEtHfETzKim",
  "key7": "3NWAQkHuZ64DkyEgqje2tA4qpG3QBtKJSQe6PpPfXBQeR8TwQKrE3LwKEDTC4dJ4vCcn5ghkEAeYJVbpxmut5csE",
  "key8": "2KdGiJW8Gi9SAV3PeQzkoVZg6qZZbzT6SDexcWSgzrUWqqRRTdSonhuhXNuSgaQeHp1rosNKij3gQVKiyXv3iRH6",
  "key9": "3hS6QdLU4sBLBSNaQeaU9ABfRjx7EkymWQ636LsqoECWgpvgmwWvwfnzyrjgz8Bq6QNoAcD7X39mfB4eB5K1Y5y8",
  "key10": "835nwsYm4eoj63f3fe3xj46KjwLnny1GcXzvanruH3gWEGnEuY4NjVV9dny65CHj3BZsHMUHHoSB3j3Hy6Fchrw",
  "key11": "5HGV6kVkpCXQjNrvobywtK5fECEWj1ve2ntbkBNJ3SyZNV4qSt2wY1uNETd7FcguT3HohSacFstJp9LuCyhucqBr",
  "key12": "2H1qRdvevvSMh9aBB3WotwsbTrKmN6bzYbJXrZpA2XFVuLBr6Gs1EHj8xD3UMNPJ8QDRu1MEsGdJ4sdg2BB7jcqp",
  "key13": "mC9sEnHfzuEVPWqyxPBfEvNA1PmZExJth33EhsLtsus9u9nVfjsfWduFBy4Gi4pktVUSvV3DEVqFeA5UeZFH4Nj",
  "key14": "5bKb2go6NyBcyvBwFEuLgMRUCr6gDYDHfGFKbia21MXZz91x62gL9zjb1rqKRTSfyxa8ijFVoZnjpx3GYZcQ8ksh",
  "key15": "5DwrMzMgj7Y4nKxmTLbsqFNr9qLAAHdFEVGGJAQQoWqvBut5P1t79mRxpUKgGqoK119SByDN2YtMjbg7vK1up9Qm",
  "key16": "4H5KkTgXSjw3U2V2GQCMH9nHBdjELvPq7GKTqSMtMYKpbopyLqTqMV86YSohmjDpdvVpqgsFrhS5cF8um2sKa5Eb",
  "key17": "x9fzvM7ct6yaaCtmUm1Gn7SMNjfP4x5XaMaaGBxQGFWzUctdPAj1cn3yFYzbosupptADjYb8bmKCi9GdahuLPtQ",
  "key18": "7Zh3beJK4nWhYjeuc2f71ESNp8peac5ehz46iu9XqM8gNsEHUiZ3z9ARepTngTgZeVRf7Co8vktoD79kTzyj14v",
  "key19": "djFctp47zQr34RLwWHHA9Rui4t65z97bk2DHKPh6wykaSCWHBNnfGaSTVmGa65as1Yw7PRkKubbjXvpJtHUf1cG",
  "key20": "3yfFRHXaVXBVFfFhaAJZjxfbPuXe56cAxWuk1qLAN1R2Ty1y7MLZrAj8WvB6uF1xkoDtskweA74ULUMma32dVvg7",
  "key21": "3yDdxvoN9RZNRgi9DYqoMhq9tmub34mKCNaeMKt2DSQnJPR8YVTinYL1BA6xULHZQFAmAHxccpPGvrKzruF2Ggjb",
  "key22": "4c27obJBQL8Jx1N1pBTrZP81hDnSPzDQaQ5aF47BBpqweMhvjrUBkKZdk3SKpCyzosafu92R5K6uVU54j8J1kfeU",
  "key23": "29hSwkQBK5GXdYzPsWbF63FitqvZchc342CSgWiysinXkfWSpTPa5jvP9PJguBGDCoLuQoWnYBpQLxLQfYo6t7AV",
  "key24": "5aPcFcftQsTTq4BeW3BnXyFrhzjLHNJ5qaD4WqK1z4M9ZZAYUfkwbjiRFkqbu1wRtdxU8bsCPRVWSmWMcnSfzH7i",
  "key25": "3vvEUZ9uQobKm4ZCUxEzXQQMFPFNkjTA1CrXEpGqusuzXRHygh7xQRzRukbwXbo1zzLFdFPK9zptcGajn5eXP19q",
  "key26": "5npLGbeTBBJGCjN7ERASkJ1puYAuKXuwgz8WZyBhr7gWj8TJF9gzB1iyHft6GGedzXNrHh2AyPo8QyCCfUC6eL2A",
  "key27": "4ZKo91zt9WqGrRFjeqJVpj4SiAaedJx5JuSEfUsZMCpoJFzYzgXAnxi9c22i5gTLVjCbTo1pXTyY2WBdzEk7jL2y",
  "key28": "5BrsLdBzbWUztAn6f59z8GQVtSer478cHEUUrcCbengb8oUFihyB2farF6BMp5MXcyfUqG6Qq3JFFKEX9CLyi9jY",
  "key29": "FXGB4EMkVFyRk6sgwzjVZmp7PsdKsPjuBy3CTpScyycYTaUS6BQKLwGYYJrARLCKbzFDzkDoFjp69sNmzXVCzmm",
  "key30": "4CTs9YsPtsY1azs1H9DkoWmVgNoW5gU9koAhnJUEScJRAn8ZzNe1wYpNU7e4zaQHjePcar3SmwaPdgEvXHofAGcp",
  "key31": "4eGyCNkMTgrpRT2UXVTtgkXz6qiBXAHwPqi2DgsMRCyMyU5XVJdkEQvsbieYJ318TR6yYPJ9aeiXXUbyDjnPtP69",
  "key32": "3hZjNJiaezRTBxnMUgbpXsbr36cxvFMaFm9ZtezjBpg695vk6LETqRFmgQ7EhWeTR9eszPTf63k3nPqyrReqvpqc",
  "key33": "5zS9GKRWQmvq5ehWyofYBWfMMmyZ8ftbR9BjW84kewJBiUYr2wm6BVjM97cFTsx67LpBP9UYg5biMiwirzSqEWkt"
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
