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
    "2xyBSdQNhMt6RAGf44mypmps3oH4Vk8HpJ1aRxgw1YmeXshrpeWGQUkGXkfhbLSF7TezkC8C5Q51ikhn5bBfb9zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Df75LYEXK82tp2Sg3amVSjYqVSpLaW37QwWhsu7ugyYJceGANwenRCgkpwTeUGPDozdUxhDYYPG1zjPeGMCZs9N",
  "key1": "29yDhEoUxm3fqNst87FVgWmc8jnsEKbjhVLE6TbkuXktehjGeEfk9nm7afCgQc6tBZeeZziRhHrawusKv4dmXQ3r",
  "key2": "4NKe4unThe6yYb7fwhQLK79nGmfJSFRB8KyLwRc1h5C9xS9cxNAC6oGDhkPi5oHSVKgGVKcNj8p8e5sFYJia94Zn",
  "key3": "5BQzBKwWNmBMAF5WSDZtjnJUMjgqXKVv563ftZKfm8Y4RYhosga7pyDVxjhRJkpjaKdhJFqxShYA37fPrCtiSTtD",
  "key4": "3Gv7fkEfcRUsXi5ufkXT8tDvRjCFoBrPS9nWUiqvzppJwctxJYNAd56qoLHMWkXLDsbWDZnSnb3QM2XdjLEBbhNS",
  "key5": "hRz37j8KCijXtw6VBLa7VFAVuw7f6SyAJZi9A5JXJwsHR2pPXWc6cn1NU2QyijmueRVRtTMgajbQNt2EiDT6ihi",
  "key6": "4c8FBUe6N1z5ptj4zNVgS8qFDV2SMgVWwFXrsnUzefaJJKCkTLdxin9ipFmZvSnH9H5yuGxWwu52hHYhr9KQdSpB",
  "key7": "FrVAHcWKdPz69A66RNA1BaXFeduJpFiBbBHNAbVnjV2BbXmQuaGU8mFtJaq1WhKBvg7nVEoBFaMsUB9K52MAQuT",
  "key8": "2JC9kYJy2FQyAU7cKxeowgGKcRkYpcx72zrFR4XbLo4WrWxfLTi2ve3VfwQVagTenrGDDk4JRBK5n9FMxetN47YP",
  "key9": "3yqXaEZwAir1tw1bzQw9eZJkhSzy1dawPfnMNM3nnQbWF8o8XQ6yZNZn186HaUxGFPtRgbJqywkpJ4aYZgctpBUn",
  "key10": "5ZWTPQtUWDi9RiqfQx1z7tvV9LyTWjhU6MLZdexKpovYgjEsLs6xdGnA2XhTkuvo8sQNDFqiGPaGkGfpZHaDCSAy",
  "key11": "2GHae4aKhiemnvptdoxZc8C3eiVmWyX1VgizSYgDeP2bbF78yyP5haN6vtyznptZy7p8HgkhCm8Y61bjmrFJvxk8",
  "key12": "Y7RTf6iFzpZhRx8WyLrGTy7jpkRFsWDEM1infqA3qx7SziuR67VWcLVfcduAqPbjob4XXY7D411KfkpLgHKF5WP",
  "key13": "2raE4DE96A4xCVVh3s1PA1AyLDQS75FWogLobnoCvtPEbwb68ntStZe6nFBLb1ie1hbZu879AQUaAPiJu8NBJShW",
  "key14": "3ceL3N1be5ZDVbPXkLU3rCXrDuESAVomxRKGKP9PPZazo8Z4bdn4to2LjzprtqzdhaSU3kZpCEtrqjkoiy7YWZaW",
  "key15": "5b3a3CvXb6hRMzHtHeyVoxVSye27noXwpjzZKQ7Cegq82so6chCf9V5WXPgVFWZvxACuk32fQ67jJo8xaqQGDr4r",
  "key16": "3My2YmEexTUeuKtiSapA8BcQbwe4moC799Pgm25J6qNL7UbpfgcvZWoJfhQ6yguponDV6546xEgNwTxBctA5uBBC",
  "key17": "59mF1ctVvSWMNpbXGXG2oBXccsbUUSUzDH681rQdbNUqphTG75uJ97nrtqieL1pTCf7jCsVQw6NSntNaVWJVzG3G",
  "key18": "3vKANbREmbWEzbrsVshfwV5NtmTcDF8A9KdUb2r3jxgx75YxkQBTqjYFQxXYk5EP4cTrLgMQWyrMAu91sNzeLttx",
  "key19": "3SefXtKZWbTziqQAbD3NE6pvAC6Fx9wnvc15RQSm4y1VvzzsMZo4w8Lk6XhyB92d3dY3H3FuaAQvoq8QEeMWndus",
  "key20": "56ht1q2CphpySLdhYG5p9zekrMMuQdZSxjYzDa2XfYiTQT1givUgYthdEP2UYXBZNBxBBAcxHGJrwNUXToZKRbab",
  "key21": "2cPJL7AegXACcgtKsKhTsXTUbKqCN1iazq63NjNKUvxpJUH36mUzVP2GNFGQgz7yAanbScyvUxP63CMPVfMU8SCQ",
  "key22": "67StgyDfLTb8aV2Xm3DRYibX4AELS4s5d7rRbNrmFTgg6WN2XHwKUuTUsBTYwnvyyqNHDGANBNMVqozfeso4vwwp",
  "key23": "2HrcGM9k9qhNGoavLeiGrfhopTCsaYr7Xyp98vSe6zDjro6A8AQVsapaswRbXrNBVXqkdz3Vka8zXCjwe9fLLSij",
  "key24": "3j13mp9nqu8HSHdh96Lb9WDwXA8a785SBFT2DZFycmYK9ZiGMurCyP1BzFHVsjo1wYfZaokvUEryhChwYHx3ZBfV",
  "key25": "5zyRmC113UNrW6HVTLUuDcfZuJVCGoua9WJmzWWt2tf7R2pDBeapriKg9NH64GqjaiCTegN4VaLE47jxZ5vot8mL",
  "key26": "3K5HeSerXUygbKb1QAinJ1xJwQDeYFvFkeSJPEjvs6z9tcrGzVNzLJB1MqX9FEL6RPqFV6qFkBUdtFwksXey1ceB",
  "key27": "4nLM4k6xcXn51ooFMNrDxSJJStpbBfFKDSzcKHPLcf9S12vRBPDBxqMMQNH1aTfb3Ps9n4JwA6HBSmsfVoyDV9Mo",
  "key28": "3xKJHK8xzXqAUutH8WjZgAwFewAqfVjTsqBvu8ZmUaCHLTbxjhWx4AsupZQzGCBrPhP39ZjsLTwCoU9FC6eGLCDj",
  "key29": "LxFJdr188HDmdenzhJW1p9oZpMgTbAbPeussZPHv2jJ3vXbyNvG7oGUEcczkCFzVGLMeVYom1b9ziHkYJJiQWGa",
  "key30": "4FcNLrVBdZ3cHSEQsE78GCGTwKSKGFBvK7snmCxiRgacMMEgNvuiHJUZifVAVGTCRC72PNbvWBXHTsz5VaFiMZzf",
  "key31": "3GV8ACRopXS2gcAPjLtBLwXChaS1YoFxCnvE5q8o4Wa2NrxmXZYh9N7xrkJsFY3JKXsYCmbKcWS15tJAq21TN45m",
  "key32": "3RaY7Xf4BnAw3coiwND4rP5Df2YgJMRtUZsb4bSyuZRM5z3ixRcmvYRivMT3UQpkqd7CfNHhzYWt1kQiipfGarfo",
  "key33": "2TPM4mQQHTQvXRKTAyBhF26VrUMxcGjPFLpYgpa9xhze3N2RRU7DHWrvRnAKWXupAqEayY4yL8B5b6Krheua1ka",
  "key34": "5peqtvMWCt8DWn6Taf9PNwz5bomtdiGDSNMLZy1kLifLwX1REJvdLGMNaoeCb76SE9d5SFR8bKpuJHJgQehfZ2sf",
  "key35": "2GfkXRRVCCdL6VRbrDHjo6wCZaEwUbdMgrNbdqn6bcEXwfyeTVZ65dZRy1Gk8JFWCJc3f2TBPQx2RdP3YQEgSqWs",
  "key36": "gXgq7MhNhpvFDgSahz3cFVJtfBH45w3BPfWSjpEp1Cdi775TyADXxaJcFUFStVZytCxPvEAzwXkPJwSDVM7Ln8M"
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
