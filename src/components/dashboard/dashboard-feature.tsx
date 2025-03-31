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
    "3M2aJFEikcZkw3xQnEt4imHkeFLVKgBJ7ooKSSLYPZrnbMDQtSa3UXQhrVp8bu18j3foCya9K7wJF9UhTz5jnMh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqRiC3FbVaZQMPP4sv6MeCdJXSJDAtmgWiMAixW9yLcdRxKVBLRMT15HPizVpPvVJcy1FDpEHK2PxtR5W5AJLFH",
  "key1": "QYH6jNJs1PmBncvuwvA8padGyF4AAnTjVa1Hkr8uf48ArPGdmrKz5N82MnnuY4gGbWHqe1MPXNctxWxapjQVVqz",
  "key2": "3XBtPBzHygCFi5VLpW97aEaESRXMx4YoiEkEHcQPttnqUStuRV6b7SpqUty4snaAgpoqH6aCSEftWK5CRBKMadc6",
  "key3": "25dwyrab7CenvgSm8Hk9oWm5ZZM3V8bfXLaV9aVidagnLBZhmzfoHZkK8D1pRy995CPUyfv5vBmkKvsSwFNXkfZk",
  "key4": "2hjW1EqLjtgSSYZzyGLnxyWFeXTmgWsdVDj18yZ2hDT524h8gkpfghqTYkoDvxrAkNN7CGfSMSXgA9ircMhExYo7",
  "key5": "dQAbuaWXdKTgWQ6ppVVcT5mTX84HZS7qK8EbYUdt6FFKFa5Gqg9w35mGSGLHnWi2aKgazUWgfK1mcACDqi3t9uG",
  "key6": "3FAVi8b8ASZCuVKe1cRKwjZxT26xnH21CYMACwB2Rya7MAJhx1dNfk9wu2E33JTRCp6HfcyR849Sjg5oc5Mf9zu9",
  "key7": "2EB7KFazjFZvMsWQFJ4AjVqGN34hTPCjAqb9bYmPSUMbtxCNZfdaruSaMtpzBQ5CgTPfBwyTEjB98aP1rmaYSfc9",
  "key8": "28tPTZwTd1Pp7MR3Gq2L9UfvhexutH6dnC2299mYhESEsAys1Y3qYHX19KYbSkxzkKnS4WgaacqBTKRjBHCUyPK5",
  "key9": "4Qdp6pi9zRnGcnyrgiPsQuVVHFrFVPrY32cko2zhDEBZEjQ8vqQ6RrRKhwRRHmN5J98Y9c7UHTvzncXqMovkGDQm",
  "key10": "2n58Fh8Li1oBwm3dnkiykXgaAij7nXspoaf8SEwWd7ZX3KoZEHHgGa1cVcmUUT6SbS5c73Ku8tU4kEKEmC3NHVpn",
  "key11": "TsZJ327edYrHE8m1YDgdJn9L5b15cqb6Njek5W9frxG1PkY2awTU9HgZMXKS98pNSiztp5z1CQihKEP8JuSCx75",
  "key12": "3gXrLhQ2kTRPLEyV6fjJbWPYyk3gcwTkY3cHZakETaDUbGNmw36V1Wq58qGZJd5k5c9QWZNT2c41K5C2v41tfHV6",
  "key13": "3NrkTLmYd3zyfjPSS4v2SFCRLTJb5U31Xxd43G3THk97oBo85maMDMVkp6CH4vU33j86ZzGpDogFExYBZyHRaSkF",
  "key14": "35r6wzjUMnQLhdHrAZVhw7CfoKznZEooTjcqrhhRbiTJ3aTUUbsX5WNBFCKCd1H2WfE739RCTxWUtmHHNM1vGoQ4",
  "key15": "DzezWFyyWr3qgtrgvsFuBWTF51EhYwJNWk9Na1aCRraDD6FTwmAY3vB73VGsAceCZ7Rc9LhK2YTCfWS8xKqTUpS",
  "key16": "37DBghL4hfpqkRxARkzZFv6G2nxBS6muSfZKsv81o6JD1ky1jB9LeCTBRXp4N4Na5abDrkru5fBhJw7WhF7f5BP5",
  "key17": "4zQJyVJbGoxrRjtNYcDsF939ZSE7jaBxQSA7vS2V2CXVUeZ8FXxg5f5XUPPgbcjFtp9cEGPNW3xCSHZ2fks63uKi",
  "key18": "3D85ZGhxLbK28Z7zqFG2vd9dvjmiuWXCKNKmeALRRrj82sD4gEjxuNdGkbQpXZU5JcDwpNupJeRntBy77JRY7K8Z",
  "key19": "3UGk6su1rmkuNvbQPmMyHxdqY8zyqNNkPSr4NsLRAnL13A3KRbxAAUuKBs6ej8yddNtsCqujQpLDvugDPCh6ek2p",
  "key20": "4qE1CDjcxF7nVFHxqdJqVGgpQy7L5hkqQeytGFu4UfX3Z8iwcCBwPti159Lj7dr2NE4EuwCvtzJZpoNSrjmk4wcf",
  "key21": "GN3Reew4qFkYbkYsxDqyk6siqmJV6xBGqnUdr87sKiTVEosWPETBLEsdtHYYeGBLLkPVp4wteMsY7Xp4BWfdA5a",
  "key22": "VaZLS4M8es7X1KZ7VUCxr3nQc2kuYaV3qtRugii8onLM5TT8tKUXJrmE5cH83qU5R8iu2z45VFMK9ZKu4EVR6Qa",
  "key23": "5p4fCcqZR2iwr6xUWdikPBkpHhkGFfRjXB3ead5j36N1LvjZW2afEZQDJ5jNXNvgqedJFs9DFeFvYTkJoEJDRn9L",
  "key24": "Bvh3njtJeqXj1vuCFMdzLkyFWWursxKXAdzpzg1CYzfTaG2o7y6CUJWFXqV8JYdQPCcKTfzcfCzSUKrAzgtn618",
  "key25": "4JA5PUcDnDn2kRD6s7fcxmj6rLGZsaQ5dCWdp1MAt4WM8JkUbyB6oLdA8eaVxQCgK5a8G6St4gk7yA1YC9UwC5zv",
  "key26": "5effrDegGhFg6kRYUERxyszfLexZQ7KWyPuyAP9hmuQEW1CE4PYaLgHKr4Kp2N1gcgnM24qW7UA9qdx1rWrFZRAJ",
  "key27": "618t3bYXQemJL8xTMsp1hiyZ2hyhgB334Lf7yhzsJKRC9QywauXyJbLvaU3jniN8JcM7LuznmrE5HJ88GnF5DyP2",
  "key28": "3viEMVTcQ2X5T5Mz39MQguduRvohEjdqCZBNhqg8BWZwVxYaeb3rxGJA7vANtwuGtbfmgqw1C72pdRgAXU5McBeJ",
  "key29": "i5WP3UzZw9kcT432gDG7A5GnZYaeDXp8MsuNREZ63c2YtsZthAkg3nzLV3QAybvsf7Xqi25L7fyrhSQRcv8X9kz",
  "key30": "5VXS1ArXrz42DmzpskYMTmGj4NLe38Z9Pcb4GQnKNm29Wc48hjtgjcopPWfNbB9uBEtfeVTRu9sP7rHtCZp9ebfJ"
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
