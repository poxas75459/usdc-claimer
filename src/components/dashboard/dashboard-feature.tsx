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
    "4gTM2rsAthSKKsHeJSKK5sinwv3UNiWtEnqo2utAPvCLHrUSDPKerkUMvNj3mi4ptTqBYTWFC9u37CqjXdVCZjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYCiQkKMTFbZLB6g8m4ip4howRBjdmNa8rCXaQefBDq7rnaqnwkgU5kXZf7bvUSatMxGEaLMkYRPoSFau9W9jMS",
  "key1": "5MbWeSkJpvjQHeoy4RqKbriFjfvZFBTBrDWBXmJ1kikxoBiRxZgCQVgNrrhCDjGgbCa72soTkJNjqNJAgmpcytRZ",
  "key2": "v8K5Ja2fxZpH7rEuuwnMExMg5QKSCMCkZ96HbwnRQGNA1ZRYTvqmyzqAb2Bx65LKW4y7wLiCpVfcgN5zyqqm5M5",
  "key3": "3YCoi8vAEUDSJFN8t6HMg6AFQEVTagXZM6evcbRGALMSW7VfTEaK3zNHKXWRhhL9gHErmkwddeAx12M2hsDEvnHG",
  "key4": "5wnaWAKre4VZccokqiESSprHYNUpVtXxG8icVHJmsExknKJwttAhS1YKoP4aeBffsyBNouBYyNoozv2DeoJqdKvk",
  "key5": "RijPZzMZehveMfaYA7vDWDpy6r1A5si11CyPcRUjPwSydrUB2PvK3u81tUBYq997U4M1UnYfKi87KbqXzftq35n",
  "key6": "3R6vWTLZhamLzVaBpFemZZonJD4CposfF6jrCC3J5gsZJz3emT8tWWqrB7W14EnkSKDhzxeVzdkRCMgdq9u6vjNh",
  "key7": "4EAaC6HEc3QsnWv9ixjvnmfDkN56LCUexC8PrUTPcTXmWpWvad9sViNj7Ws7SVAzvBDshzowTAqDEcoaFXKcNVVA",
  "key8": "2RhByuKSe1rtq7S6afhNMZF9vLbFtcJHbTSJi4pMxTCtRuCJQJMZy5N6Hq8uVh67dL6MDPgxjHn3W4vVu2HXs2Zj",
  "key9": "2TH3NQHrQ8zvBrbX9dWLdcCbg2gzFDRSboNKfaySgtjMB5jtBxUwkNabynH8P2ajJmscLxoiSsgqFe7qzfwDQ4oz",
  "key10": "5T67xfXgYEXxY4LgPSjjCtkN2hGeLpuFYUSjeUkvDyXgquUGffbh2zE5LnWkS3KceTALdkU43UUsRvje69BU6oBu",
  "key11": "zJ9HGuQDTKim7iZqLZrFce9Zu7xxEosB38tJ6xxmwomzBqjUWvWLYrbv33XSmHdxkUvqsQo5E9o9zNUvCyZPurf",
  "key12": "47xRdXc4g5mWD1AMLTh8Qi29W5wwhYh8dHmEzYFozqfpX7ae1ug8q8jdLnZR1vjNH53m3bbWNtGkumb2aBrjAGPr",
  "key13": "3YARn1MqASroytWfsNqjD9v3VDVtpxVmH7XYbXPKGzu4cfnCkGDsg2rse8Y8dixizfbqwGJTKPnXb8fE3fz2Moks",
  "key14": "2iRKdv93xYAVoL6p82Q9wucz7fQb542jGUF3RJtpEiViUJKXTV9NQGnt9D6nieerGgXCPaVtxEEVrhEXwGxzuo5Y",
  "key15": "RKBbA5Pk2pXrYbcfVXZA2NrXqUHV7FhUFLHs2Tq8XzkieCSGACqkez6DPqzZHdBK9qJQuN3R9Uj1fWJU9mGH1Ro",
  "key16": "onn97CMSyWDSjf9wXvWcAQ3SWNDLmNucDb1QU5aFGRjau96Cray61xTmVGeBFKFDjoDkLhZ93T9UFoYiSBkF1ju",
  "key17": "5Vf8FnATcE7UpGPbHxpS3uAsi3cwXREkozuAEumNAYiZ8gE4g739SxASix4bXGpH5Sfygv2k7qUTmSD9mdHTYZLh",
  "key18": "2ScNMNR97EAgi9pMLfcboj3YQYDyXyD1qrjSsTmmiPBAxXoEBU4n4ZUCRLVEkGRaoQPyTQEXsgvRAvGc93vCAdFr",
  "key19": "4Fzhd4yZrxiEkSE8BtNnHyDu34uZCZwud1W8pxwyN2dtb2wjouyVQFwDSrwZ2YudnGN2hqjieG4yokVsCTjVZid3",
  "key20": "4knJ6nqDQGCjXU5b9CzqjovwFPGHw6DBAuAyD2JxcJj7acmjknMYjz2xX12AgxQNZTp91WsLmoXwZyWAY9GRXgjm",
  "key21": "4wsqQVJs5pT8gbNc8r6hVknopMQoNdPwPZwCJxcDb4bNCGGcSLUyPMcGvR7yhVrMT3GLrTyX9J8fnfCVuz8Qc4Wi",
  "key22": "4UesvgeJCFybbbjHntEUw2CTMx9zBmZXmv18KKTVq4FcoocCudpdDXZEp9cpChfv5FCceBv6dw8iR5aJyD78toAA",
  "key23": "5yfH2ijG512fsKm4cU1uyP1xGRuQmTsz33ys5qPfFJwcXW2hqsDakm12SBKMKmj5EVSmXyqyWwqtGVMV3WPWzp8p",
  "key24": "47BcgR5zJV852DS55A5EySit2Soc5P5EBHfrDpkhPwcJ5EJhpcsGYwJpTN4gVcXzddK1NEdmTms4vA9DUBp17Hy3",
  "key25": "4kcURPF1TKC19e2HxArD3NckZUiNKbLLUEbGtJaGhYgHU8WxfjzSGTp4dRSpm7fQ1xHwG4BMNa9BWFk7M9CkxCea",
  "key26": "4yMwrm6xroqkwzWPt3i8X62k3dcDDSkN132HX5FoNonsKfXET2dad6KXjvw5pKptZmTGgEiauyBuMYU9SkSEKESb",
  "key27": "5CGydAsxuTLJUWFA4SkFiWB1msYLGyeJdKR5kzAXLYjGruwuzN5c1BeKLNhEk5UhjCDWZukchcz7keT1WShH3Ae",
  "key28": "G5ZybYQyE8JWdUaEeF7YspNNrQdSKn1WmK5dRbpra7gjfNVStRpXK1KX7zGZdMuu3VwK1TamVE3XB8o3ZbcvbTY",
  "key29": "5v7ZGSYWquZGWk9eXgpmVsEFXJti6WnQXSSQwuqCifEpJDxAdSHY7cA1zFBGCbxoCgEnegZu6Qz9rhRb5Ft6WW6f",
  "key30": "4u6N3EbWDvyacjavgzvPSAvRCi9xUGg25Wp2mzhWpxeKhUXRimYZhxTGc9hbjjqn3mgpqvMN1tmkRMCTixc8R3SM",
  "key31": "ceNF2WLrYS5RhifJa3u776XAZBLSqWMtiiwNs1Rw3eTU3pyeWCExsdYoFZkDUe4mLdBMWhJYLXawrFxdfoiapGg",
  "key32": "5UQCcHkanaQZu83w5yTZE6SGh1J6nDZqcgoeqNoLob3zc4dEqB1MWxSLNBydcSePXyLoS4mcmPJ3C9cqztn1e2d6",
  "key33": "32M8sfzZkShLoa6uepgLFqBb8SGf3pQ4khRJxyyKGJdAW3mJFP9CQGc7dbb3ziC9bsjTQ1VqDKQq9XK4y72WmBNv",
  "key34": "5EEyRoMTHgE3T3DwQU4EEv57CGDZw1jY7mHGYcCAZuC397oPAP716s8wRgxbK8cbFQPhN6X6y5zuBLzJeUUWFm2H",
  "key35": "2woWAux1MgCok2bWayhJPSP9AAmXi6UCYBxSRwLNuL3usr8pwD9afSH9v5qUgje5ouNYgKFpJK892y3cD9hPPXwV",
  "key36": "5oj74szMjjFSaYmTiwPGYKdnPu87P1ZTVFctJrP5ywCsyFSaFKvyoaWZ8YZEEAeKL93bb64Mfe3NST6iKpach8Nk",
  "key37": "4eQ7WfqnjdjEYHJ44BBwpVrEeUvNoDkLCkyhiVtgE9u5ezU4reYpq5vaiPKMApNbUTzSeQiod1ZeNAoeRjXQf91w",
  "key38": "qhNuNUrFnNHNsAdwoZ9eyuxa1ZAt8UATAv1fDedZALLBsh1jV9gFdHSaMt2p4XpeLCaTs3DYcDF5SV9B5qqH6gf",
  "key39": "27dSb1veGUiWSuofWVZYec2oyxn9Kko7UWeFA64xoGWRtdHAfaowayX3ZSN9as1Z5hQH11Jeg3jWGk2AXm2fhYnb",
  "key40": "F6A2PwqB7tQFUw7vcEA5JPQLAobmWsmyBEjK2De7kxxg74zDVLUtqKggn3Kuw4PdF46ZPighaKbns4FLom3Cb8S",
  "key41": "334ZdtMxXkfSDqZVa8NUWvct1mhv5znPwxNp4Pth5ZecF3vYfYA37ExMn4vk45jPDLjT1SCwbLX1txNyR1UF167x",
  "key42": "2sxgFd1ck5xZ6z4chuuVNNohT11xSE6NN1uhfDVe9T3N7SY4pgtZsaejrA6zLzW8bEwqxG24b1JF42vBmPfcK4UG"
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
