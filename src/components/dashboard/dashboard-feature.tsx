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
    "4NDW6pT1XQ9FSxUC1TYHg1T62KEe2QRboVf9RWsMMgbX1sWCJjdEMx9BG9TDEBDDF5Ei9wmVrjiYvfwD99QvKUVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wx7GNPW8Rcdxisctf8wwebpEepv1xzasTmSdFP721vjvJELHS5otaiZEYsJLuJGSLftXEiKm7QibyGeEzYpDuPX",
  "key1": "2pgoLK2UfsRneLjTWyz4gbUaUqK2tLvW1HHdiuAXF2MTYqKnYsYdwfENiKX9ddu4DxWQnfwE9bhNZAvjcNeZTfAL",
  "key2": "sFh9DnMBAHCQxBr4QeXCpT84vhypzPbjtPXL16tc6pmAr2CX55Zaocs2mLCPAuYs2xHdaXccidd7MobtbMLzT7P",
  "key3": "2uQQwSoiPSBBSmKPRSujicxe5nGPZ4sTj8H7gSyLBXxQW3KNxKxwpZVHUjUpwrEypm9vBeR9uiWp9CAV59Pq59XY",
  "key4": "MpbbCKb3vodQHmSYytCo4y8izq638geftsKmA3etmnbBV9pKYXgT28nPNz4ZPjFjoTgrsSN2L28mJq8pXaPWkbN",
  "key5": "2CTfQ7XTpnDFLEqLCNofVRmYUqrtf9uYMhsmsKpgBwuzZtosuhZvBpjNL3xHhQCn7TT4uyBQ5nMhnTKqBcTUpA8c",
  "key6": "4d3m68niJY4hU5J7kU8Bbq7Pn3HSuHtR11wyubtxDh2Qzm5NyngxxLQ7rHy3o9rSmopxfS13XxRENntZKdwfptr",
  "key7": "2HEja77gCik5dwnsf45PTBnEo3TTaWuvLkE4CjMMqqANVUhQuLxc648ymXxSayYMN4jLuvwEqNhzkKKe47qL26fL",
  "key8": "3oJTkxisZRr6aJ5wGmBPDNn62fCpNzSiDsTu32mX86ypXU7cDWwcMPaZFQJZZLXxarkyTYW115uL1sLxeZAqWPgY",
  "key9": "2iWz9ARaLDQnAUMt8yrifikYjfwKhko7ffo9RewSWB5ZR9eQcwn57ZCwWxEeX7MTo19sGCQkaJXJgt3jtKm9PBty",
  "key10": "5CYgU1kzHtxG5CLbkK2FZRzNBU6AVMUkbRHFJDPZUkJmF8rf6YBUoWn2FGuyJBzAkwsLWe9JWcfkQ4ivPxDNRjXH",
  "key11": "2z1s2jEAkZss5vrZ3dK7ddLjtF462ajCwMLZaWHFoLdut2E1wUdDZz87rVDzCbipN3LTe7Zj9SD1UsrEy6znVrDC",
  "key12": "4vopeMfwZRpQsZ3n19LLEKv5YFHRLq5mv3aW5pJLJQLhVYNkDPkLNJMnSQbJesPcKMb7yBgzzdLTMExJSKAjG21q",
  "key13": "5DG4Nvfhs1jXaGHD7Y3wVTMrbV1y4hbcgEeBkjzvnh5U8P8dY8GPya4CmvAEm4ptprxs69dZ5ZdBxhG5Zyo3YEJU",
  "key14": "45Bx9KvQYRzFpiQfV2iM8Frjp5iPCJfi7p3m2WkvM1omwW22VPPYWcLc6vHQ7wmpcwWeeTTZbppP8qZxoh9uwU96",
  "key15": "4e5CBHFcVNH6Suni36DDTDfWQ2ccRfzi8Fwt2cgTpRLuQfBKVuts3LBYGrnVxBJjPgHh1wQD3UsHcBffy6tstHng",
  "key16": "5hdcHPcMACyJswHEWhpQkFKHkxabrfuapoQ9gbPr55BRmxCTaxkrdXdYT3n8gVF6GaBEqPz1BW4cpn6c4qG7kDBV",
  "key17": "2V4XrX5F6H1NfGDUVqSW9fTKVU8VJHcMpoV3BvPNsGkrQt29iU2XTGLKp1eRaRxnUVYQazKuRytPZeZe1QL3vrcR",
  "key18": "4weXf4uojrTj5WNDDCjh8ja2eVsdnUs95dBTZJkUaMeRs2desr23rkhFajXmzt7q5e8SNm7LbhYxA2RbzcMqTq4o",
  "key19": "3XV1v12bWaXhCHXS6cjeXQ2vF76AwXmZ8Y7QcX4e4sZgEv7SsaHczF7jMnr15N53UF8aFnQMieWTwjwn7Hn23XEY",
  "key20": "4MWobeXyKPutAvCbynzeqyo7qhVacMDBXo3RBMfoJL7KkNYcKLEypaxP1jY8q8GFWRwnwX8hUK5KfJ7Vm51DxaYd",
  "key21": "5KDuBcj85JCD41h4fGQVGqw8UqHjoBdbGxqirm3Rr79ymNsTzoRBfLh58YSWs29ZTkwpfAy3yCKyKhtY53BZJ9Sb",
  "key22": "4oncj365GmA5pnkBCtJ8kgRqSgmio4vMU3kH7GPWNye1T72LbVTYAoWqJ6M7SZXENTWfNB3CBehLnd7DB5aWWgag",
  "key23": "4NNwt64uzZm9pxU5xeMRKHkdpT3DPT3DaxKkBEDaLknker8T86E3Mg1GpdDgpSSduEBJpjtJAD61bUJ8QEUb4y4g",
  "key24": "5pYbfcvgAGuAD1KYFXMEcmTs6kQcSg7jmfSjcQQpYaQpSgd5HuQBNKbhVQ2cnfmJ1UvbvQz65EgeGtt6ZJBJgRXq",
  "key25": "2CNCnrCrrYLm61eq6GG1qGMQAtVSUA1Cv4UsuqtkY7cyn89R2BNun4DUE3Nh69jbp4sK3zTkt64N6woT5EkFMVJC",
  "key26": "2Q3VyETj4EYyXnpquNNNidDARvNUghnSshJ7hDPm7zJigkDdwU5udagNwGtvAsJMAcSNw3RytHPrcPkziEwhvaPv",
  "key27": "2AL5ip91KJMvEVG7ETysHvs5rQLJxrwptpM89r64RkpXsPJZLMCD1hGdTWpcjLziCuLqQWyFc4dEBmxXUj3jQ9tR",
  "key28": "3pCXN7SwaL2LdY7JjB7dV7ecVHT4YbzEN9bt13xojQR4MwfEUr8ypyqViZhgZKmNbnMncnzmQXEgaV5Y1Ji6xxsg",
  "key29": "5zskjqb9zu94movkGMBdHM5FtYQoUkxytQGuccqahxu9B6JCUiSotven6TqMxoSLVBTSvRz5SsduHkXWenN8LrSj",
  "key30": "4wTHAGfXL72AMfuHBiSAH4BCQhzLg6VdM4yipPdcF83M413C6VRcF5PXrYTJs8XftUgQS8C6X5WJrb3jmyzaSc3X",
  "key31": "38Pt1bm7fSGWhwGBkRjSuhWJkzTTKrmTTznHhrV7gYk8dQNtJf4RZLJMqJ1ZYyVZowp641bpefSDvvqhfuDvP9PV"
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
