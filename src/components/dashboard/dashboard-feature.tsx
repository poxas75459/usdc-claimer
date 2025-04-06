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
    "2ukoxDeQKSmy4aDB9XRQzyKK4Y75mgEEp6Kpmk1gK5QnZH69PhMroCq6RpNcB18MYyoMES9EscnfAtAGJCFRRTfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6HpDC1LbvDf4Tiw1gJmPSvoRprDbqTgdB6JLegvNFPCKzxne7Bu743KN2awnVff8ZuAWvzcPd5n9BhA84xbGcv",
  "key1": "5T2iNBXRK5MqatNE9iwYoMEdux5S93tARMQ5jnEPSZ5euR2Mcvav549C7yaiRUHu6wGFedcbJpoEA5nSVLhSG1TK",
  "key2": "3NLdXhCvXmTgXtd3b8LFx1zpJ8ZaVwTcC6yHPcGwo2KuYLiU68uPtrWpAzA8phknrWz5HwNNYW1kJWB2AdoqKo1D",
  "key3": "SiCVXmUu68zGFDyvWceGDN2ukp9XxWML1txjfS5CgJ3241HLiBCAqUZ1aEg7Qh6HbLe5nUCSCUWET7PP19QCJnU",
  "key4": "qCBrfqP8Nc8fW86b37TmtUK1uNQLRULAqNY2doLdutgryb49J2eTVN7uKqFEQiJPfuZEJQTrJisAjYJTvogZk27",
  "key5": "5KmTy4qduApYJihfdb2SSS1689ftBrhFyavn9qZx3N2FjWNXZNY16LiLi4eNxSWixhPCpiL3YCacobhufMsSn8Kt",
  "key6": "2D8mYZRDHDoKF7LEKy8gLy7DQp8x4hpGV58TLMHWc16CeKWiAmmtuAANmQaLzk26yMbSbumnRDJjQBsME21brEPf",
  "key7": "UeYocvbZ3NLPaBLc1LHSU1qcTFW6JjmF3nFShcYawR4qfCoyvZ23qFw9XYcVU8iuLEdpgNsjeMKwbyypbiLHr2S",
  "key8": "G9ZcBqg3nNM1hGhyYkeUCTCkMdqNWzarMcAFZYc3nYRcDy32ZqFNFhoc92UpBSwAzNvd3325m6WbWLTCVdUuiqC",
  "key9": "3C1jHmFiHSZP4homm1aiBEbFZPyEgvCU39gjTMUbVheRUSkefDBvTmGfck6KsQSZAWTGLNiptNZxwtn45i1fyzbx",
  "key10": "ZdhECZvzYJTohjVVVodrtm6rEQAt5zejFX5uKNHo7VbHdCm3Mf8dXgDP8sgkhXwsC8V9DZZ9M3sqHCmfVCqcShV",
  "key11": "2ZnjpruGZxXqy1MdcdFL9vdL81SPg3JQGmfVNTRxkhzNaAt9QHpoajJLrAnVKR7YTd2dRJEWVep8EVhr8EWAtoss",
  "key12": "4bY7DALhx224zjDDtVnKVh6YootWFdirM6J97n88opshbL3654wC92uPwFA42UTDGusM1R74nhums5SZUCt8VWB1",
  "key13": "2H5f6bvvtbrnv3Yx837hGKwuXNHsdtw7y1Pmt3s9eLamvbxfoYoELd9kQS8S6z5A5QyvxwYw5xUjWE3dGUdiZbPT",
  "key14": "2rPZodh3BXUrkAWdfcJdoCArkKrbL6hsf8bxK1DzkXnejLSHad1yx9kukdSTGBdwHqAfXkADAMCTm8JY1uEtAhnn",
  "key15": "2qYkQqzPu33eqDjZuSmgu9EfdezJ2VKffmzaVcLzw11Z8tQTFwUDgB2knfpGjUVTaz7WmjiSun64h9asKp8xLN2m",
  "key16": "2Rmp23grvmCbmMkmuXUpEz7p4dAy71XrsUTKLuJbu92oQwEnh1Cpd8Wyv3UwZKXDnrcCoDnJFzSVVyj7xqvGYKyx",
  "key17": "5EmF7XNWxcWo5zKkP3wzZU3SCXVSud1dVvi8MKgqcKPyDjMmQ67Kd9JJuHaJXqUD1dxMYNKPdFHuQN3X4P1rVJNr",
  "key18": "HM6i8X7QXSUSBxrWEb44EtFLpWk97AL38VH3PZuAiobVKevJ7VdKL8RGoYkmkK76Pj8LMpHqtmT8kpwXJyTVkJv",
  "key19": "4iwtLgJfvh3unrjvzhyUBsWbGgDq1aEED5AhiV4Myd8VYzwXjUVuKBF2HPJ1EWg9W1S4yfoY5fZemazTUEoH5Axw",
  "key20": "2yGmK2jPtUA1Kxs1EXHNJvAGZ8wrY7hjyzmq23zPZ5o8PXq2WuZbhZR7MpahD9W1YhvEKFk9NwmXNGYsy9dNtxyS",
  "key21": "2qfi5AW64i5WbdroWzxmGKnACzzFCpwXNDHhntiXvjwEVzwecHfuX1jyUbmEqWFiAQWUnHSqkWA1pNM1envmVAF",
  "key22": "3yyF6FfVigHE3DErbWNtTbfBbCoTyj5QCBPSN3dq6wyRsr1GTmNJZ6E5xLrKDn2ofSpT2FrRa2zDT2mqymaTVkJg",
  "key23": "5bZeJQHxjuLCY3xzZ1u36SkpFLa4HJUkhnidN3miEPrcrpk9QGxkMfSBQTgCXnohrMBuCqdLa2NWTPCi3agZzHaA",
  "key24": "3j7T4BNk6hh2yT1sCBBdVtwt2n2xShroXvjoLsM9t483Mjx4UnU1QfRnbAuTF8Lmgv4Ha4WpHHpQH4vKi7gBzzLM",
  "key25": "5Zx2vLGitBTjL7mY5DFffG5YGANjr9NFy7By8ncGm5CnycV9EXvnrYZC1gcK8uCUGwdwfhSyD5EKekRSSb4vYrtW",
  "key26": "4QJGZosWiTRKncuGTvVgQP1HxwgADtopEUn5XQMyQ3NHVo9pXEjULUCsQPkiqwb89SD7zua7EBZh3bf7YMq3Pj8y"
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
