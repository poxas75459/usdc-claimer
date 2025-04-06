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
    "5zxcoxuJGug599j3pytdqM4NzqELQ2SmhMmkDCR24VkPGntmAkVyz4zncF2tfKMGmQc6n6bi9UsR3qzUpGXMGxzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtRjhYf6cXpL4jUFoePXSwdDsxwGxYTF7wD16cFhDENnJXwSaANtMYq4E1yqiVMHZDSJZrt3JAxEoiCabQ7Ahpq",
  "key1": "63L1KVUtdXF3urBR19mV7qMUCEhNU2E3kgFPp1gF6GKTxWqKFVjRvhUgL7LodEAuewuPnnmgLhqVXYRH3GSsyJPf",
  "key2": "5R6kMcGPMMyYrR49EoTYbReS9EphoiKRZ5xp9sJrHpxFYr9JQtNGaoEzdBqU6rofGzrh5DsNf8WSbXMExpFp8xVK",
  "key3": "4B3L5yMspbPaMJmPNAVk1SNDeSiRn8Aazbmbq82dEEbLxq3ayEUiHWLd9G5hEC4XhjB28QWNUjUcnBh4mkaSuL5Y",
  "key4": "2gTwnJV7MVVz1bhtrxKvVSSiCSesovx7uv6PkEFEqKKigk28aBiGS9ri14FZQkVUBBZneMguqRJNQT7Fyr2FXjft",
  "key5": "2CnngFp8zsBuYV332jdSVT4fcdJ9XKsc3qJZ3oymc9PkRxxvNaL5TddkBRArnGNdTzKPq6CQppvUG5eV29c5rufR",
  "key6": "47mWkhdDpB97o5H6SWa3fXVnknaksgchMWo1ngDkQde3fAPh9Kp7mRqEZxBf5vCjZ3AdLijA1Wd6Q8PCZ5jy6JMk",
  "key7": "35NBwiSH46GmsXggfWwDkpkoWK31UtRsbpCKL9gScrisTY7YciyW8GXp4SdjTRaPBMXsABqHN4Vzv7v4mMMkjFUD",
  "key8": "bXYvmK3Ssh5VjUKvbvbeVDRC2GLmrW9hg42Viv7h5xzfFWy9yHbXpFMqQ9dxFsK6jHSdGFhS5Qr6B2p3KcLvxed",
  "key9": "2Z2Qf226wYfygP1rAGC2sSuGMQmMnd3fr7dJv8qrd2kfMthnAWjrG2fJutxHt4ctcZUHzmXn5ykMrTa3A6wiCHQK",
  "key10": "5pFTd6p5B4BJLEzYyJUtXnSDJdiPqYjVmmq2KWWW63jqUM5rbwhR9XmfhauCWPrVviXM1Rat75Bqeh9sYqrDywj3",
  "key11": "4jVa6zoJm7ZC9jLe5LpbXhGFMRmGx8cEkA5y2QFXRyqVdkgCRSAtTeXbjKtwCFdXkeTmG19iSJpGEtfLuPYDL2TP",
  "key12": "3KM1FwmRjwPjPECSVBpdMo4Qd8mDiqp5yhzhJvv31CXEAbsuXnf5EumHvEiTr9zMmHwbDsyjMqkRpXnR5w9t1oiU",
  "key13": "2jfH1DKhgmzKsLpaLaEp2ms3CwnoX2dWbA3fYU4jkBgBavQnATeXkKLzjpUqJZkzJvWs7aH2C5hqDH9aDNNKXG6r",
  "key14": "3qUmiQXyBPv1NRYVjPmXpcFxZ9gEczYjpjPGsEk8CAKwyE2LEwWH6w7pBSaDtvZBjTh6x65EDuf4vKFgsVghiL84",
  "key15": "63ow8SXykBGPMso4A47EqLKJCtmFVAQi2uq7DhtEhAm4WEcY2gLmURQVagEthmjbnUMKwgr8nJ43KkxtKWkEexMn",
  "key16": "3LBepbM7d3w8Jq1QxSJCG9tHPFvqSyFX5MGVrUwzy8sY2kzk4KpiASD5hLVGQCC788XN2hcDsFQHsZJZ27PYfJLn",
  "key17": "2TboTgaF27rnHjHy1HQd9c1pcPnwqoAHpxVxjBbdmqahMfWL1yNB1aMcKbG9vVjWuv1mB6w7n6sxLxYo2AQ6GXnF",
  "key18": "67y3pHQbLut67VjwXJaPj9T81rwWDgcmKYzXZKKvrGMxzafavLJaCjGX2Bx4ecp1pgKVQtjREEWRRXP4xwBZfb7",
  "key19": "4EhKDYSgYTfh1oB45tARQyzq2rPc2MKPdyeG63EY2r1YnKHL1FT46LtVxUWkv8gmQJkFw7paqxbV5ek8bqQdy57A",
  "key20": "2yceMEmsqS6bro7m5tmQjtZwgxSfrmREMwFwJbTHRhZv3Q2aG225qRMj9h7qy6jQDMqfyiKyEJA6B5ZbMJV6Jfha",
  "key21": "3Uk4FRjcFo8iBZj56WB3WXdVaSJDfkeP8Xrxfwu1UqSiun3ViXsh1dpKTsE8nuWLrbiruD9ETiUBcngmAJh1SFes",
  "key22": "4oGvUXkyBcu9M1wETTQpkkakBQjg7dGwvPPXQXcVW4veZzzBhU96ejHG1z5yBt7TGHWHBEjcTbJFUi7rccX9EaXQ",
  "key23": "3PCfqaLfM4Z57EaoEhbCeYYhWcngwg8PK32DhEzCUSo9R7q9NTnZYzR5Rn6BHEyDBsp7dxxCo3dBSZwbSc3zmjHd",
  "key24": "36wUofLhBgavnHQQrPFKendb3VCvGkQh4tbHSCW1rngfffDEtnDzFoikgoQnJWvVR6JnzoCSsJ25Px5fLN3WG6ec",
  "key25": "rYL9YxCibJAsfbTns1ag1tSvUfHPrqikimR6kzCrv7Si4Qjjr8ZrBUfoReJ9PrPYBiiAJMv8JTTAX1wZTvU5MHn",
  "key26": "3KZnsxoAH784hEUUdmc9Fs78ViKsGH1U4mQYQB9b14LpED6aoR4YAumHJfaRAUppAeb9JQiShEgPT3JfCsRKSMN4",
  "key27": "2uydYAqa5L3WmGbCNaZNhAhkjKAmm3shcCxZT29shNt3chuqgWXrAV5L3aLDWkQs1h6i3gbDyPnx1APWkNuoH6wG",
  "key28": "3McPe56RW1MtY8WdqwUSmmLiWweLsipbkmMsNccw1HjcGcLfbzqjEAtdXn29Df82BrBpkFwm8x5bPyfpT8eisLGH",
  "key29": "4gdUc5TsN8cghnyKzPHsEz8NVKrTqNsmPTn7VaSQmLZeWbGZbS7CavVLiQQ9J6Ai9ZLZsE5MjpJy9pwE7FNcwhDR"
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
