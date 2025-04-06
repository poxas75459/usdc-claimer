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
    "pATTe9hvgg3UrXAj858P21Y8JHz2fmKuYWAhxaLsbLswgf5Wzbh6pqrX6VRknCxiVVz1TmvafhgxhgAwee2KpKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R2KuGBmrvo4fAJMAMRPMiDfGPAFrLA4PKTgactVCgrYwCA1Tgbx5UCmUZh2qJMXqqQvHebpHJbSgyS9u2Rm1xhK",
  "key1": "3ULZ7QeahW3NgGj8smRDPAPf11sT4oxTWkk4YpKaAfhLMLWirMGVnbkRSHuf8pcZfpok7Gimdib6Qnw8AykUYqjA",
  "key2": "5izhdN9TWnfAfXAcoxPvUovZ9YjenvtctWneDQspysvzarrYXsJUM3fRPzCZbt31cwzX5cz2paj4mEcnUURUuG5z",
  "key3": "5oXG1c42hduxFutYV3itmPb9mfxvHD8N62UyACwTw4EdvhKCA3JzG1uFspSZGyPU9DgWUhhjA3UsF7io13n7Ypb1",
  "key4": "2gUiUYDkSXAaNvjHazws4PwtwSr4au15ZRVC6iGmr4oXkjA25dSmbmAJoHjGRsSn4guYBGPZWQRfzyc37MWvwaKh",
  "key5": "t8Cj8Zh5ytgMMjq2uCnvdnMUuUfSknWMFJ4NMmYzVbZXdTgTxzkLwegSVDxEBE2sgTyE4hUusSLPsoGUgum9BoP",
  "key6": "3eED2dHEdHabHrJgXShLNmyLdh6Bek1rsYtedVbtQL3dH4tYrG4C9tQmcyHwRX1GoZwVmbSRLGgr8XbU5CcHZDQe",
  "key7": "4yk9RcCE3ruA4vYWsip9voFucjFb4Bqxmy8sa88oN7e78XvJwQ9rkFDWoUbHxQ1529anMPXRiKJdFsNXEEFoDsYF",
  "key8": "3NdKq6g4NYaESe1bQ8k7bt17CvLcqNfh5JhAT2NahyPqcY5EMeJzshHLob2pG2mAJvmrJCzdyCV148aF5p7Sy3Q9",
  "key9": "2GUtpWZrBbFBjwD2VLbig92vQFpSuBqg1PEYSDmUXhzTeELUsDWss8ipg1BzDVnTQU3DHcTKbFypoHASyrqEHdc1",
  "key10": "26W8AVKBNjP2UqYsijN1xkCRMyKavhqWfBXo5J5iuP1728kdqvx3MnYo5Z1T2mLynTR9BaPE3WY5mwRwdv5wsm7A",
  "key11": "4drxUH4S9SCQxRbaVe4dP1FuiwaJY6UC5Xj9MU2sXBXxSuxDQUwC4D2sJWq1fC2yCzkNDgD6cfu96uu81cSRJnQ7",
  "key12": "25CNZeYyMoksN2BaM5RGGUFqDTp53GeJR7Dy1se1crgLHer4Armu1BmLj31sfP6tXhjFa8J2fFEiKxTBDyGyC2Zh",
  "key13": "3ZRtdKuQBYW6nwYPrmQdSH65kzD1enYfUeLLfP9dKu4H7Gyfdpgdm5nq7eNqg2cFDeeQRm7P44nTtLbbPnvSoFYU",
  "key14": "DXhrCgbmHB6aN5kXKHQ9QfGoFfevkNq2aJfDB96xDZ7KZMN67wKRpMfSNz5njy3o4kZBSda1QoDoPdoA4jFMTXC",
  "key15": "4aVXtWNrLeGzrKviunkFMH4RtrLq1UvAWHSXyTiEjGU8zWpbDAmWVMrnLj5PeDtCxVDQSqQFHhBofPQtVam4MRwc",
  "key16": "5Tn4pkU628NAmJXLPGu7YBoc5FAQKxADetTedaFbLzaJgX8bBwvNfh7QYuPBMr7WtrVc2yKb7NgnMMcSm8eX6qKX",
  "key17": "5fuwAjaVRWCZ3wZHyWwNWu2m87hPuKUedwugRsRtuetyd3Lqbzjx3pwVstqH7342iYd53jCthqi1Fiu7qSbgGCyG",
  "key18": "5wNuHqSnNNuzCnTdmZa35xmesv67Pb1vBC9TQVxiry1kpSdF2sC6UwASqecyJq3p7Jep9LqdpqP5HNUdrNEfe2gA",
  "key19": "2fD5zMcvVsTcMxFaeAxKVcmQsGJDkZKiPMgv7FY9hRsEDrFAB59jdXBYjo7vAgQbEMENn1HZCB5cTPmnY97WvM8g",
  "key20": "3cAwhQ7BiqPaZczkDSw5fRYuSq6TYJhBPPHTHqg7mX5iiL4mrUuF5rrEwpjo5SaR8Sk5ncdoRWUfArZB9aXdcmhy",
  "key21": "3WVM3jinuXdcuhuT4rBCTtaLGJgCCTQvVPuYNGYEowh9161hw76C3kWeCwz5nnYMkzUibBJ33F9BQEn6nvReTg1n",
  "key22": "33ajyFVnBXvRfgYekpu2Tqg91dCPBwT1wTDeDzMLF5RbVu6E7kNUPHRVbXcnVxM2xpWNSyEigXG3hFxPVYh9cyw9",
  "key23": "5KN14fu6D5aBnrSibjxKGLxfwS7aU2D2KGNyvbJwnXQ4hjke6bxzCbtdnkrKpaCEMtkTFbEuZ16KY5JBsZacaGua",
  "key24": "3yK7zbixqCHTpWuHkTcPoTk9fRatL4K4Li9npRLPh1GaRWwG3Nzja9gVkXMxnRrFYRi3VDazLxZsmyRxK61eTeLA",
  "key25": "2284y38qy2eQq3nw4N9RBLat2ee9YkmoeQpXU6KkoJGi3wxyE3MLeP2vG6cMRgJrTaU9V3YSka923qdheasKM8AJ",
  "key26": "5nSy62iEqd9U13nAMYaSgReVnCcEtXBzAZTS437pQ64QKYhvcX3BdJSC67xCoPCiGDBAwaV4LvpzjQWNfDRHsTac"
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
