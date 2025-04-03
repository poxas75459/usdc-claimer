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
    "g3FkEXTPFeDeD4eB1sPRBhBRepr2WKJzGGZz4fjNMZCynLECdf5nySVTRBzvfx7wA3KQbzLjwqe7QE7JD7kTCoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAyJPYMqgE4hrnjT3hr1PhMTTjB7vm1bVHw6gfibtx7PercmWW5MH863U7yk25fHnby52Y9otBvDdpwCq99Jeww",
  "key1": "491mxD7ShgYHBp12nP7puqzygknrpRt7adL5oNg4qAGK7xioHUV6Ha2qvDxeNKYyArXJny3VkUNLo3gcSDjvFVhZ",
  "key2": "2DSdcdbguP3xXtRqTT5wrMDJBV9Nk25RVsgEsWn2bRsXSnqSHpJcoxZ9H4Wv41tYnrXSNm2u6pNzwAbDikpmVEDj",
  "key3": "2CdFhDR9cV81FeRQU4adK8MwMHwbgXHkVGzAoK6thy2AooRL6TqdrbKQ7qUJG66k6MrLhL8cazJuBg7Ae2PMENJu",
  "key4": "4jDfK3t4pUcGaLoTYE6UCx3RxooarSnCdnNC388HycNMcYY2J4v7Z5UkvfNq4juUWsyY1pEQTjvAx3k5Pe6QggQV",
  "key5": "jPEZ6YHF9EzVv6q49euAMhV5xiYGdrU1GUrjUWUv1ZVGqMdVjwkmZaZdP1QZYwnv3tU5U2jW1CUVsURdDghCMyy",
  "key6": "2ZHDhYqaNh5jke7CZBobePSUGQmFXYd5io6NCXDw7jd1asi9mn9s9qeQTnd2gyTMoEYnuvaQvHtW7qpEbeeKgtzP",
  "key7": "26ZPgVjsN7rFYiDv39nGaFhRJJZqjwv3PYQ7peecPTvy2mJeCZEBD7NbMJvU1Nv5rpcgUW2d35Y5WZc9YNCV2XVh",
  "key8": "5sdYYzZmhxTZUPXRX3m31Upj9LNY9i4rYrww4hdXhgLNCMcFwDj2sRF8zyHPEKBNXdTPt3gEmbK55a19B5JbCqTH",
  "key9": "4yj2iBNdHZVfhmKe7JaZpkAFrVmQiDBC15VNSxwrALHmQBS8RkejJD3RpLiUDwGKgfhSMvKF5RbCp1T9YSjwfUfA",
  "key10": "3eCzKkv2RsB7dpymCiEjKqsnfgkDUtDMgs8bfuSJ4GAa64fw7pERdgjhqZ18w88jjENSBGRWfpzUNdQn1hKid4mr",
  "key11": "2h5gigfSe8Rwm8J3Z5PHSEaNdGY4YHu2kj5xEYwwebcQx8cA3tkDxTyGXjvDDrPitf7o83kxKzXjD2z3A6e1obGS",
  "key12": "YrLND7B1xfcF5pApQvNbxXFe6GPT2HVW1xttZLPavyryxh2wXffq6E9ihHH8KdvntHNVpF7iuh8ZUR3neKyrKUz",
  "key13": "PYez9u1fbJaAS9QeLGXDVSbrGWiszeUipzzFmeRad2JvpfjEoryF3Mo3mNmpMdiEi1b2GSx4njguL2HD25TLBja",
  "key14": "CW1yKRPi1avTybcC7ZDB9eEFHmSveBxDAqCvxQaVuWhcT8WUTBBm3zNrmy6CBAmPmYRJKhynCRw6NiqanFhajvz",
  "key15": "wk9sjtczPqm7wMrzKagtW3vFhd6fCTRXVg7GaELFhwfH8dePTLfrNRpyu6apU2PLPxJ2WFjq8WrFw8hWV6S9amV",
  "key16": "5nbwZKihCqpFmJKZjixNgsb37JeuTKK1563aLwYuCEdmmtqerPeDpoGv3m7XU22cEsZboXfHoEyxV2uZGnDbmCgt",
  "key17": "5EQnJUYSFhhrXVqd9mr3cJUPf15cwAvYE6qkF76bAiFP2foi2bPLd73hUgj3tWNYgxpFCHKoCHPmYeiRUtiCXze9",
  "key18": "27dd7pHkK3DNVZbPsrzH24EBprxYW59UwCWArFHxpXiNtpmV9EjtjmcK5vVPxPVzrv4AhhtuYqGE1m5xJbiMGgnX",
  "key19": "4txuD93V9d7JHTwNcyi5QAqjXCiemUf4hpZdwabqfyN31tXm5MrgXrLCipFV76uZQoCpCKE5YtjH4vrYKgKuqAb3",
  "key20": "2ZT4CYoZvGtGHHeahuByxNoK5BVPxUPCFt7VhTkAPN4VjkVUx8bth6gmm5hHQtPdwpt8iz4tTJgcAHPksTr37THS",
  "key21": "4Uw8kagsQP765buW1mU7wHvRJrGnWtReNyfd9XaRU7a1ysoEs68iGLHjjNjUwANZ2qXiFRhmcK1eYorfbg65ZhkQ",
  "key22": "4yw84L3N1nSq1JR2XFxY8eTkdYk1VQcq4joaV9ZLyhuu4AJNoRAHzkPSzMSE7WYeNCiqRuumoLYMe4KRysf1MCSW",
  "key23": "2x1LMpKtZpCfiKpgEmjACNJ3C1Z4L1hqnPdcPAS1T9wVjjozrechEqx76qFDXN7hspFcYGdTFxhWweeuH5XbXZk3",
  "key24": "4Kbqtk9CfhwmzKU3Sh5fMam2Gp3HYCqAZ1VLAm19NMJuXd1Xtm3PvVDR8vE8g6FPyUn3ey3CK1A23wqtiw5NzLtk",
  "key25": "3yCaVthrggYpr5TdvzXmENpjATLjizFz2gFhpgw8oVdzy92Wx8WBdVCJnKeXJTVZ7HRyPCYvx46ybXc5LSgU7paY",
  "key26": "2FFqKsBivZD3RjaYm8XtYC7meghT8brDroRArNo1pCfx31QJUvNSnqbGnnKhCKRiXXhCTkWtHh9H6zKmfCRohv1i",
  "key27": "66F5eXxmTq1in4gBjvnkK7eRnpX9MqiGketi6KwhxsdggrgyHKpVzHmyQR9WSugFHrXAVYn2f3vcNRGrWzFwN2RZ",
  "key28": "5UaJvMRNdQvf4UhhMBUQby39McueAVL3LCBUo56a6vBDQrhtLJ2vsNDzUmcfKFNbzw29LATdzCmRAJxdUYXCFNMo",
  "key29": "nhZWtJTNvcuKFbUbVQNWecJkgdJWhBsnwB4f2bLZnPsLNmSsFdrgas9bvoTVcrycAbUykLZmkTqzfjmasTZnVE8",
  "key30": "66qWKYRo84XTpxxqjvW12zkkhEyuj5JTrmFAgY6eTx15npj2GgBkVZtvZrYdi2TndnfrwBxbQEzZTeFdBv1VFfXw",
  "key31": "3vrGLFqE9jhSrbbXyackkZcuK9cgLfKx28m3vWQ6VXN5oADFYHRZcx5HvpsMGtCcS7bz8WUz8T43QyBKRiBc9aRa",
  "key32": "58zvyK9mYxU4RkQTP9af4KEuiweoTx9fZbnSRmDXm4wvkP2kc5JpH6Z6EfxmDhaekALxhL3QpY4iauZ826uW7ESx",
  "key33": "3roHCWmZkpYf7PV672B7oingD5SHjauTeLXYNBuSz9xZkW5AAeCAKveFsoCzWnCZa2if7928gXbLv5n7cCi4u5wz",
  "key34": "5zb8uCxzj2GtAcXZssym41f3nJYe3PXZaErQvuMVjr4rRiydbusGzKjsFTT2jksH6yfRJqaY4nHWiHnnVqKRu2g3",
  "key35": "33i6XbsnCce6x9EifWHpw8Kqt9BxrkEypoDe6UPnqiVosvsUdENfPySgPgXsKEpNs9nGBhe2Kg4DEom2pyiX3LaQ",
  "key36": "ZA1rGXrMgGAxQ4Avwf5WbkNcUPKXD7fPHeBYDWFBA2HphpYjQd8STZJaFHoKRcrhvACrY8PEnLvRLf4tGyMMgEF"
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
