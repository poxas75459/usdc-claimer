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
    "2uaJcS25Y1j25w2rz5tyVH5Fy2J9qaS6wJaNhU13ZWYs8SMS3eV6ZFbTQkdPssfJfeug1a4k9ubVwtAfMD1DTsJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceYUqcFUGYfaEnAexxvfoyzyFCNmxUNeJGVjoXufJVv7cosPRkKDCctDeuvaoLTAmcBAhZYK9xQAHcABdAfeAkY",
  "key1": "5fACyD9RP7hv5swbcEwdprkBjms9uunt2XZaBBpeAFBPVr4j94dQJXTMH8SMADTD7peB2X45Vm8B8Q5gGXSMfoa5",
  "key2": "KK1zjBhS3pVvpeDM45JzM1ZjLQN6QxYCncyYksQ2nXsPJXTDFjXTMBNdar9vBS2eeHBfGYAQ9sCMnKc3umcEKZn",
  "key3": "5nV82jTVgm5zkq5qBTNK5sU877y5Afep5zsp8Ysetc5Zkf2pEEJmM8RPQsrUfmnUWoGTUjggaxFXFoWbEL1kF3jC",
  "key4": "YyJpaKuC6rutzEExvSQshP5ZEYgrHhTDfzhJj4EcmUA1EkHw8vFEnrajSGC3gogU9HWWa23YYnHvqehjFDcVae9",
  "key5": "uaskPr3rFQycjeRxkH9ALToXW8HSABg3hDXBH1MmTwcutaLqd7oHYVTxLxmGVfEse3ptHTZPBK6kTLSDcFjgskJ",
  "key6": "UZmFZbXZaektdJbfc8AUcTsQGKJdDUWxAXqwHnNydN5L7xfeGu3Jm6sLzqDyFhC4enZhKx2JVbkg8ECfRh78SX3",
  "key7": "5pmLkFWxatfVg5yx58jVYfNseRWWmJEG77PAqjEDJQgPZaejrb8292FLf9p1Xk5fyrRjSeEWaeuFvMFb2n3dTrj6",
  "key8": "Y1NDQdwA7JwfVF4FfVQ3WWJha8WJhZnZmDaNmaiLcq8WRFqgFpDkh1jPhksV2Y1T5CAwoDdvzNuC5gPoC2xLHoP",
  "key9": "2rukxMkpLydQVNtH424sn2DJBWV6hy1f1r51dkLszuQnvuwNQ3CTiFUoxjhJtQFN2mKQhxBLz2F38dockNLFdSyi",
  "key10": "5nzH3UmiwrFGBkFRkwisjcuK6EPWJRQ2kyWeXXZVpvgg3tApJLbEJZSW2gbAKdUCepnE8CRM4k3iX84JDMGNWf9U",
  "key11": "22yL5GaUaNcJaMG9rWpZW6xM1pQaVeZ7ZdJPTnBrowyiXep3WoDtpiCCrmSLCqrWboCsqR9JXtK588WixF6VywNE",
  "key12": "42YrdAnyZazbZLAhMKcddHLBMzmDLWTe82FhHreQddNt1Lf1Wz2JsKdwpsFbsjgqActp3FcHgHDDc6awcLACavXh",
  "key13": "4b9xbFv1CMHcrPu2wBX8yYTK1LAMcbcG8jszRXYSRoQeeU5hN3ArnmimtYrmm53qJTvHND8pKV5jBgVeQEseteUx",
  "key14": "4MnqU2kMUyM4dubRniCFYTevLbg6dW46YzA14rzUyehtzfDZoVdaLgGGKUhSvNQoasf6rMkeVM8QSv3LeEfrHob8",
  "key15": "2qj4Jyof8nzfd7irFUHwipmmSb48yEvSgXX9yiufVDexMB7gkSGqpPDLoAaio8hSCTZbdBVrFPBjp3gLfEPG4Nkh",
  "key16": "5jTahRT42mynDoRVK7zbREnkEN35qm61x7H6QB3xLYqLwtndZK2N7uZDSqzryHT4k6yAyhstYoxSfeSfdakKaetx",
  "key17": "5oJKXHLc8q8ufhed5FonVir2yzXks7dtPfQhW2zzCWKfjrJvyH7q3HKwSoZqbpuP5Wa2e5WjVbJEwCuHFBuchKum",
  "key18": "5or56ze25X1hDNeD7EFW1owMGK2zRQYHzwQv3p1pMDNRkKChS2Dwcztca5y8LtqSCE47HXNNfszt5V3rtqyGfec5",
  "key19": "2ARJJye54Fkt5eEJKwty2HCbH7jsaZwYWCpXR5rDzL7WK9t2exTFpsMZzegmFf263DYqzv8WfXosTnETQBqPf9sm",
  "key20": "2kW7H6aXiVYt4AToUJ5noiehkjTp6cGd33sLzmALrMCYRXxpybp3pAX2UyhnoNDyG6nvJe7UCVJ7KuVVQL8h9Pkp",
  "key21": "454pHg1tzXjzD65q2cBYaZyp3XuF19QLF9Jy9p86JZLbe4LoDSnSw5PTMoNJ4D1DVLTaapTpZJ3YKzpLuxg99Doy",
  "key22": "3BnSkCkxdgmUh9e29S7pqziRBEfWT3XsRaivHYt2d4VRjd6AyVyQZzbwUtpBug8TLHxCSc4TtX3ZxDioP3gK8TJF",
  "key23": "4i9HKsuA2emMjCLTdSRsDEquozXesg1R2ExoprHb5Q4Pj1btBn6J7H6uagbneH123EwcgfK65PKmPQs4kc5gneY5",
  "key24": "5fvC5w1EQn8t4di7CRcXphAqkP392NzXfeR93t4UgmsftV4UHG5gAXVHmfAKizPSiskYwTbP4cd2X9ZX6N5LBqcw",
  "key25": "2hSYanFNiB5uJdJf8ypNYGVNu24bPbLEw9EBNGKtT9ssXZstXAqsXUkC1Q7Ee8iyi4hMDJFVocdA5kmDwKZTGZTh"
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
