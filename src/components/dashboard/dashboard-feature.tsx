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
    "5Yi2BUCC6KQvGuowdp1LnsCRZLpc9Wx6NYjM6d9v29KE5BsHUG7aduXQRUfKLgsHgRP1KTP96UShKUVH4c1kUfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4FRy79C1yqwy5s6MguFW13R49WTEMWupMNzY4b4qgJtnJc8Nb45w3TUy8Cfvmydos5sGF2d8aeHaUWEyARwewy",
  "key1": "4twJjEVRbJ3HNiJhReCoMaYD3vsP2enWkFYZBsQWvixqbqj2rTBcfZ7YtF2h5wY3mDM6wJpCQjcdNoqrWmNxGh28",
  "key2": "5pkgDnZiCHHmv1LNR8FcQuLgCHE8PwmaYLKNCUNBtaVjL3B9up7DjN82x1yMVABJdNd1m2oFbkKbPs7Q8MCZEjVK",
  "key3": "EkwyaEaafrxPyFKnxmeP5CA7G7P6axdx32Q2jPovvbuHmACazgBS71nTDPE5heVP34rPyThYa5YZ3z7XuXBZRH6",
  "key4": "5d3Mcwj4GtbP1YhkQcvrPMURGcqaqGGNL5atdH7prjGRGLo9WUcU3yiB9sAWhQksuRqmbPinXSWWamPeGVEqR2hZ",
  "key5": "4s2UMzacb3owgUHo3qLeKGeQ6bzqUQ7PQUqnNeXQ67nmVmSmM3ir4uK4pwNaQCbfzjqNdaeSHnmn6vP3zCHmPLmb",
  "key6": "5P2qSjbDNiwBUfZfDZBJETGpMztArCaFa63i8tcoG363U6tLvL84pjvDtdQbzPURHc1pSJvEpvKjKEaxACGue42z",
  "key7": "2MbsvF5Q2sNPRiht8JuYpvdQmdy3MiMf4tm1qRGVqGCMhR5guGT4rr5yBfozfyqivrQ9NXp5f7sJ3rRfX45AcEHw",
  "key8": "3FYSz76unUkbT6sWjUtgu4oFjvUx5DF5b5xT7ttspcfYWxPFBhh5qmUqM291jBHTApa2vp4DJoinpidKazyVLRX5",
  "key9": "hpkvGNN9hzvyiofmCK1GBdCHXTR7UWiWXtd8UWZqYdGe53Wz4MpwhYhS5CvBCHki5nS9ZDXmoLsYpH7PDSnrGGT",
  "key10": "4g2C5e7RefGEie9er3grwFpdh6vc7eG49BcRh3VcFP2EioPNipZvjtn8u1E6jAoTfhdmsrjVsFkEvN1tK1sPoE36",
  "key11": "4VRmYuR8ss6KcM2F8nMpKcr8hErVywixNvJJw6FhN8P8neBZkvzgAQFfeDJaiJpu7anoMRKsaCvTGbhLeGxZfayt",
  "key12": "3VdmUB8Lnv46p6Sos9HVP5SNrZ7q2GrHiFyQLumTeNdPVqN5i6ZrFrbCte4qDSSGQkCfb54yNhQdwHPDrvHT1qax",
  "key13": "2SGPRMcME5oAL7dRX81XqFcza3V7MzNKsSy9Socx2SSdiiFrtfJRVtM43hYSBUuJ97p5LCTNQCx8NbRgsfDPL9GU",
  "key14": "3VWmtGtxn8tKHvVqZg2aCRZZFXYSqaMqBfZtVG958As9EbBRyc7RefkSx8RNP7vCZSGq9traee8NBTC68EtoKRz",
  "key15": "aAJfegHSUs6GyYPZRW8bjrDFr3o2cNjeRZdJiSxFm4yyqRrnfWCjLJmjcFt79YR5uNFC9pGFye6LfbftWx1BMpd",
  "key16": "65tcPYTzWA9jH8Ch1v1V13ncmDAnnq9UCgXrFieqnu9Ce7zvWFpxfr7938CB2bE6G3Cnistf7wBbfJeuC4FVX7SY",
  "key17": "w85FVv3dT8Er7Q95TnH9zBLSQCuQwNCQQPnxgBCy3EnHtWjKTZaSNBHWCRbVKu5HB9koADChng4ZrVQroH2hJHQ",
  "key18": "g9j49FvNpKvYdBgXynngrPfnFsKzvM8T68iRkhRokR8Ny8D5xd1urmHmGNogM1PYBJKa8xcEReiXimDNrDyJbys",
  "key19": "4rudGYMzUD4rh6S7c229PMZBwy8tqrBc1CPfz1mNFrvjkpixqd41tyGdRnSY4Qe7kmzpC9QHQzTDwthunpiC5Gww",
  "key20": "5ENSgXngPCjmirwhetZsvJDnGXKAHZF3MZgEDxBfFVnZHdiboM9tVpFEKsmyHEe6rrVZ89Y5aZXc7heMYapfU3yh",
  "key21": "4pBBQ2sJf2CJUa3jt1tSVZGUXT5aZETu5tbBhmxhB6LwopCmTCMnXJBNSSbi5Wny664aS7QacVpWCizwAThqZuiu",
  "key22": "3i3jp9zbbfG3CgPtQNphnT3EeBLbEhPCh6b3JCSsEDCt4xvhKAzq11tUeEH21LWnWzt9DNmPnTAuaRwq1HcJDx7j",
  "key23": "23cUjwUTqaTwcRHK85f62s89siU2nq6xryaQ8ZE4TxyphG7SpFpD4dcv6Bady8Y2QFUwPUGDkfA2kLCQTdU2WRdw",
  "key24": "4crhUqbefYLsRqvYqEs42AgaTRZAZr8zNoh4LjVtA4EZuztiDDG5C8ZZmqUK35ytFhyMUNB5Hnpe8zV7rmM7n4o2",
  "key25": "4SidxdyiRyGzEnjh3DN1X63rvuv3PDEJAmB94GmEACiJSWrbZxAmU5Sk6Ad1tvDiZB8EVovcRee64yr8TFsFeGff",
  "key26": "vS4Xzm7y9zXZBYJr4br2Q4tHmiwQmc6FhEBkDLcGRgnAkt3HKazRSqPqcQXQB9gq3tsSjnit6onAZCF6QBwBHtJ",
  "key27": "3MYDffDJoTHMcbUTMQEVPGdoDBNKrrpSRWNGQfNbxKYnusAWfoqjFCQC6zTsr9AHBhxMRFhgYiW895SE1YAQ8S2Y",
  "key28": "3PZRK2BDMywdgwAx4vfSfvgnuKmSNHp9qzjRzqReUxt4E4zMPAAafFdgYEURfgSa4RLPektei9rbUkWyRiBojGou",
  "key29": "3gj8p5H5Ax8nCEPLr5HrMhAu9YxF9gqTjvdSzEVx2Wz8gLxu2XK94JTJBNsF7uozg3KxfbrpeBB3UmFwH66Qwms9",
  "key30": "5v4EZbzjgZxkwsrMxuj3KQY83ozXVuS38Q6DWgx8jfvDkLLAjsEQhkLKdad94Wq3zFwffYxCY8VQGJssoAfw6qsx",
  "key31": "47TtrqBtQhUbkZW8xn1XfTJJ6rmsNAPwruLLMHe5kmd5ida1AmF88eLxP5bPcbDtSvQabQtQtCCGdrj8Avv16wY7",
  "key32": "3hAcbpCZ2mV1VgwZLD8qKfvDiYQR1KjfzPUz2GjmewVVgYM9AXv9Tmrj39dq1YYtK3wSdGPeeihNe8ZjkUpzCUL2"
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
