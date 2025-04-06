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
    "4d6csqnj4RUfj3LykpfCJPUxMLW7QUfo8icGghUdWctknWGwtRsfx83Vm9Mzib2pWQEZQns3y9DrHknFhd5CQAWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DZXqLxRrMcMVEVnCAiHRe19YmTjMzN2UmpBB782AQF6QhAuGZ493cXmLUhsGa1dCRJrJrfDizGkoZt93dfffqXB",
  "key1": "4nQhahFxT1shhztHp9WcPc2VFZhAKtDEni2aDecL1G91eqLg37t9tkGh4QqbbnagPLApU3bpSTi1cdry7Zg84E7V",
  "key2": "3hd5TZggAoNxDKyVczZX8frkc4YxPoArQ4ffpWQSQKikhSRJy1W9hW4G5rFexxz13wiDG1KzYerQyPmucAPuQwiz",
  "key3": "3hgQJj52kmxZHDQEwEupG4V3nmRMwyELnnoX2M31jy2Mos7xPMcP9saRvboYYGJVL7fankkfE8GKQPS5f1HitPpd",
  "key4": "5ywSy2k7LsNsaTHwQ3KUS5AUvRybraQk8qg9BPBPVo3TDLcjyfLXjMHk2ggrD56SfVXyp69YDQGqDmiMStDTbnKX",
  "key5": "5eqFkQDQBrRSLti41nAx6nH6sUM2uL1QJNrTDadzAU6hitTKkn1HrALTb8cHX5BHxwMAjAX8awipcBcVXSTbcvSQ",
  "key6": "HAi2qkwmp17nDGBPH8XbLZki8raELMovrzzjpfD5hqsaE3MtWZ2Hp7BRNKLJp7PpeALqjskKPq7QQwQsvun3Yrb",
  "key7": "3bXAqSEYXib3ipynJhiE27ECU1CGrxBtYQNQaZvLAzVq4o7U7unT32h1WHZmZxq1mbw3spBoFZKmEcNhNzm18PRA",
  "key8": "6epvvVX1deMdCjHvU1UFQ9gUM5HaVNjxVLo8pxQ67VZmKQaqkjaZ7XyRfeqwoTK9NEY8xEFHdyTNM1ahqFyhWj3",
  "key9": "2cLofox4bvbu52mLNmcXCijtvwXV8sKyReDokfo1NVBWj21pb5iJFZpotVquNepk5HVotPLDbA5C6cKArHCkCz6y",
  "key10": "2hrWms6YBDdixoES2LSkpX7p6eTAELFDnc8xS7NggPBU2rJmennVezQH6p3ocuYzu4D1nRZZtABSe2y4B5frDtPN",
  "key11": "6mLfJndpLxRjTD4pTZofcHya1cv7jsaRHVRQfmV5zn1PA6shUinAqLWLn1PUqJhHzQBEDLkbH4R2YWUSVSg1nNd",
  "key12": "5s2Gh27gqv8LFP2GspFZn9bkoGBHhay7fiiSXLDqBKN1HFqSdMRfHVsYioz1zEupCwagTwQXf4Z6KtrQbr6Qk1Ad",
  "key13": "3CFxb1tUSqkt5dXQCjxRYE4wmSQb2ZWK62qJUKLSvJPmURwbwDPoBoQaQz4ng2AARSkmmjRgUWoU89UDMiFcbitH",
  "key14": "38NNm9Pi3Yop3xnys7Htkbn4PXLEXdyurqKN4ySRiZyzkXY3HVePvy8m85kvN5iBeZ3uuMKG11EkBL9oTYbNB6Ai",
  "key15": "3abLv4WX39rtWR1sndxYZwsYFodQsCYwEgarHzmUyBTbb6bzPMGMywpc4aKRgCYUYpHo1KuXk8g3LW6QqgKEA2fE",
  "key16": "2J5VqT3NAhwTkfufzRNhcU517FNZ8GPAqt4L5mJASr6YW1LHz4ZKehRjQc4sK7jXcwEtmkzhBFWt79herkhfHZDh",
  "key17": "37fdTagUgaesNUKuEf5cwghStCKxV3XUahZEmYXiasrbkZywvktgi6AEB48xBJ97BK2MtQRh1GxyBgVuY51fcZRN",
  "key18": "2aj9rWXK6bqAE9CjFG9RCDBUHLjvAuRXSa9a4iazjirfsRoao2HGfFy4eFpGUrWm8VB5mCD47ujDb6uLjGodpnzM",
  "key19": "5boSpjs1wnd5WUNuFv2pDembUD3REHvGPMSp7m33X8WZRg7YPdgEJPUsC3MfHksgXMJUjd3TUNQtGadCDzBVDTRM",
  "key20": "3ajFdKRooYPb9NkHw2v5PTDQAdtu7i8qNRGNQBsc4bqLTQmp82pHECRbecQSViaX6hsK47cA35jjRePXhXnw3Pec",
  "key21": "2uFoiZvmKbbrquYzma1CsYrAyYFedVTQiRY5SEScMDyAUUVayRdeo8ZnFYJmodKKvJNv1oyi1JR5QdVNM8aabKSe",
  "key22": "5VuFSz761y5WdimUYwbFhtwCEnnYCaPSMA6T1a3YupsbKLZMJg4JCQ725wx5q8LTEHkB7hg1AVgMBow5SD1YSaMn",
  "key23": "UMzssxA8XvL4SRHGvgKYo5FcXNsf8DHSMTpMTnbLXc3qFNpepAPf71LwG8pUsMzP4DMeDswkVawzB5vzbR4pdb8",
  "key24": "3QeYKXHSfz4D3PFbLaB8jTxquxeEv3pFtaZ5tR6DcANvtxc7ctPuWk7XQse7hcZqYqAEbGz3MH36xCv8gJNcRFKy",
  "key25": "4CsHH31fePbjiHhzjZjnf2Yxsbs2UWqX7Zsvqo8iWFPWRGzRCyxiNjnk5BPHbfjAHLXoC5NQrwiPtcdkmJPoL8hT",
  "key26": "5diiQMuV5XGB7vogXt9sD4AjrVb4qLrSD7fJQtghaW9Yd8Y6miC2CdADUF4rwXa8m1qcxQGECp5Gp8yDGU1YyuJ9",
  "key27": "2B3VFF5vpEETsz1UWrfQ3hpbGm4rFHNNRjzTy2K7JGTjco8kLmUQhYB8dpuqefuSXLzKDFh1A4AM3HmouJ7bzpPF",
  "key28": "5DnTdye1CzVVycvXJt7n6VxmjVy9pyRXVZdP4kftZ7BWV57HgRdCZ8DQPhWV49PAf39svxUW9mhwb8vPGhavq6QB",
  "key29": "5fE4kqnaKBxMxaNC9e7CvfvW3gmhdoFXzyUYHQfkxAPmoEVt6VUpVDH6tw8ZyYvZPxwNfAutCfmBFKL4EUrpzkjF",
  "key30": "3UF9AooAgAgvCMqNnLhpr8LUHCGRRoASFKoLajGHUzEo6nhTZ69z5ESVLVN1xmyfd4qjp4AzjmkmEYm6cpQaEbsK",
  "key31": "1wTxeW3XujDL1fzBgE4ZHJBU1cfzQiSuBJtMEWbLERYBvdP8ZHeNeE9HpnbVDSWSascHdEWqwD1BuxvL6ymRE9r",
  "key32": "2hMtuVhuVjpaUt9uumXcyPECTb8oog4Lu6iGiUp8nck4RoocntwyHJTxHn5Fc8ziREZDp6nFKfRtLxHPND1ynokC",
  "key33": "3Hy6GSUTu9QoQvN3ZKTdLV7F7nNFCaVoNNUpEGjdgTBV9Dbw5joJ7AN3tpVfbTn2d1HFQcTqVLeRjv8cyNoQVzSq"
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
