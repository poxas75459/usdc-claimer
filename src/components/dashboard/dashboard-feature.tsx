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
    "yJEuLV6ubhTnFp9TApis67hMzzZ4z1BC4WcyzEEm4yE7ps7mrCyEuHMVLqad717pEitzejwumTyFy2wxsA9bTDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9c6WYdRCXBrvnqWYFoFXAmytmHw8Wj2ZHKh977RJtyp8tYE2txY1LE1wDaZvQGTKsVCUa7VcqRZAZdRVRGAUpNH",
  "key1": "3BdnRVPXAzdEzk13VFR2CCqJVn2VfAe5kxiXhkZGGvPqZkdpYtMKo5bmccy24mMSbCPaK8Sv1ezupRRumYJRUqTD",
  "key2": "2EgZ8FZXfVcwVLPz8ConERY2RxMQLTU9dfTgXhtuKeSu8Jte14bzN7du15F7hSKK63dAEH1XWDhxVYc4gKs6M47u",
  "key3": "5oTQUo2cVEPZdmNEXJpBA916temfpSnPKJgvZkNy9QGATehCpnBFTJLctDfYpq7f6ico692qSfgCxe2RkKbFbtND",
  "key4": "3Uvd3ZyPVQeiWzwbVRiuBohNYidTqaT9UF6qe1xShWNr9c7h752SHot7qko6FMCmiestz5Mj1sUNbnDETT9wte6E",
  "key5": "3SM8nKxiabsDxKtVu6ubwzAZNBiuJ8Ru9pVphKo3wf9DBiJdo1eqvZGwxcE2SznfsBjpTvdrihAFg2nHcSFNxejy",
  "key6": "2PoH4rqY1VqnEfY6Tn8hrnLNTqRbXRyv241vs3PJ13gakYPh55fkUF6LoosMk3z6mGiDM9y71WgkMB7bUc3Ae2MS",
  "key7": "4ucLmdhN1gQKmLa4GdAkc7p5iFsXzXBedgKfkznQVfdbx3QvbV1iEqCHmF5uSvwK2zLE3WCtyK1dWxaNrFFPkmAB",
  "key8": "VsBYa2Eu57QKif29h2CAZT6sCre1Thkg6Xz9HrThS9CoaQZDa59bTvZXoYP4LH424gEtkVmPLuZB4VewLrst4Yr",
  "key9": "5BjAaYB5sdZNLKD2PUUCi2KrjLVKx61zzP7AkXiegvCWB5R45jC3Gbz3rnU6nz856XPi684EvRkvKfr8ug8LdkEA",
  "key10": "GqdTbf9SR1T81WfYLUZAcFPWoUze1YstX4FEL35SHwFkQ2dHezHQVnMLjSuWV8Nna8Y6KXgrtk8SZ2ia7pvVZMe",
  "key11": "2ncvF1rhu2CGm95cF1pQ4RysoUAm2cXen5rciZbPg75UizfRvhXdTcD2Btg4jp9ZhgK4U5Fp2cB7dCLWCuj3JYWU",
  "key12": "4YZ9LnmfZiSmbZYryQna8AyEPGLKoWMKXqMnP3ydqxkUJkg9DMnoM8rtYz7Cu4NbJ9K5BCcCTDitdYmps5LaWKYP",
  "key13": "4uXfPosC8wjMpv2mRRrep4YGi45LguidDjaAp2zfUB1GqwKdfUHAduuduH3fASBbhQ5WQJfbrciyivGhSyStWNpN",
  "key14": "DLSpTCEM3V74BAxT51zm5LhyXu4mp2VM7Whr4c7Lv8WcXKNdyve4zfaaguvb2guASWthHFrzKoxU3yP2bLmjmn5",
  "key15": "5zDzQ6FpTvqWiiUHhQQnwjQcwBVoiFEnGyVJXPh2kouLVEVckzqJ1yhTGPG6bYVV7svermd6EzPtZs8JNHhDyCcU",
  "key16": "dNQFC2KfSpRHVyuLhWytTKsvBbtUBTBWNcq1ahSq6587TxjuAdagSMvNjspNvTAraMiqaY8CY1kGoKyv7dBTepy",
  "key17": "2z8FdwU3rpBU7B7roc4g9R9mnLzj3AAzJobNGqrSP2s2HrdEyYjcamwnDMjmLknnPN5eAoLWoZ4J7Z62tnrefS13",
  "key18": "2WaDa4KHwxdEjaB4RCBNt95udM8rMAXbipNjyHKB37nXCL6KVgJndWZAp15VcQREZY5Hfos57LXytfY9A3yKPjSi",
  "key19": "Dtjnu2hKPim8ZozCwK8SHgDv1ZLYVxZMSZoDGwPaFzZzadoweYrRkXaoiFZVvhWCcwkhnKFtvQzbBgPXUUh1yHq",
  "key20": "5Eo1rrchZqHZGrsMd5hpA34YNWqQRaRk9T3CYPMUJaLDaqNHnbjDug7nkSCn8ea5eory4E2P23nooFHfgLg4kNEf",
  "key21": "3T4YadZ4qzV1XQfd7PuoGHweqy65RR5bZGPs5AdfpdyrYfQfy72pY2k3uDJCnhoo7nHH1NrHisEBurqBqHJQqEMv",
  "key22": "29jDVRzZ51yGdRDwWkcyjXBRfdn4TCM6xTckR8LpoPR6cMQR9tYxQG8wC9nncvxzv676B19yXSxQt6478VLvB6Tb",
  "key23": "4pbMUQr6uV63x96JyqNd15dM6FnXdKiK7m5U9vyZigUBHPeh4FP2cpzczMzCMBwEn6FqN9d4qYdqF5a3DefaFKGH",
  "key24": "4JQV3f9uduhvGE4PJgX7HZ3dFJyDrvkp9J511ufhMTCB6iLNPeXEVwC7dEYywC54MVrc92ShmPEPJBrW755XQ238"
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
