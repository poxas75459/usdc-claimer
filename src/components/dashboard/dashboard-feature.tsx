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
    "53e4NRLXPPuFDV4BdSE44RRQFXowhzAcJT2VZ5YDTjcjMbDS1p71DrBMVePv78FY6c6T4BTky9v4wQ3g4UT2pNUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwoMrNLgTir7ssRXEw6wrbBzies8hSmPEREpyCH92JPQp1qmRdV8iik7Um363vC8z1Go9Ni5rRuueghUcokKz12",
  "key1": "3NXZC5qoQhwLwtfZdzFE3vqNbRUsYPNkcKNYKhn6zSFZWDB8v6yjy7k3r5YTt78gexjyijjW1SzPPWuLcdJSZF6w",
  "key2": "2veE5DL3Xq4vrmwLtR98Eq57DvcHQjYWsbqe944eypUyrwe7uiyky7McSe3hoMr3knskH1LFoT4GQRV8bXvSjn2T",
  "key3": "MLMT8xFeaV9Z4Hv5Sc8BnDScKcBdquqmSKZRxSkKE2HpWqXDTQ448CJMkddo1CSrJF7BWWa6dPF87mbzJ7V7f32",
  "key4": "AefSRwwbMaHZKFA9ntqVs5fZ2YhHACxEKAphfKjgCVRN1zMZUDVecDaqdaCHGw5gAsn4v7TQDhexcAjqm6LSzKG",
  "key5": "5RDuNf9A97dBcj5FspMxiu8nMiyjiSycF5FLRJPy5qd257tyTygJi3uzMoCfxUy53jcry6yWEwy5yz61aF2LYJCf",
  "key6": "4SVFLcVXkTBHfCzyfQRvZrvjz5PHTkfxJefGuHFndFgUvj8D3KrrarHkAgkfAz4ZYdDbHSmVYegfudCGna2KMNdQ",
  "key7": "4t7NcTPjXyMuDHm7VktNRc67kz8HcxyVEgKf88NXoKAGSNFitkaudYDef5j2ZkmSkzZgkivPKpzvrfH3BDX94vMR",
  "key8": "5bkdULkybYEBaQHvF61Ni89xuDt4hEAtkb93an6jHqmQE44BZmo5e8WFxzbgVrqdaanRFfQiSgqe9LciDGRvm8w1",
  "key9": "4KkAYMQvZdYrJaJ5TGt4Ju9626PcSNzFHML8aYip5h562ynz8Lqm9Tp5R2rcxqtyghUs7AM7piSheeg7yhewCiLV",
  "key10": "5yhYmwcW6kg13whsro5bymPWC1ViKCPqFLXnKxisBHxAD8isXZmwK1pFSivKfgFYeBEsgRLjcj2Fb2kDBMkzrtd9",
  "key11": "3LrAyMfnYLmchLLjjLd7EsSSjpKL5XhM5jKMqJZjSJ1PHc18T3UcorgqdMrN37aMWq5PsxMTa1ZgWD7Bk4L4nZAL",
  "key12": "5RwVsKPHLzhquPZXsEWfJ22ESGJWGFbPVBgNozs6Si5ERjFsgZGuehGpp2NM1sVtaidUuzDZJDDFGjwZxzQi4yDJ",
  "key13": "5QRWdZkVqsqE5poGZCu7vQh85AQV8iGYPFKkiXrNvarpMxgu6X61HY6xiaz3AWsqJXNzLsZs5N7qhXjNPGoe8Wmu",
  "key14": "3X7f9XL4UPr9QMcaqZ6VwY1KBVJRWUtvmjRJ4adz18YwrmvdFb9Td2BwjiD54KUTmKhRAQP2qZzWDATCAscXBE6X",
  "key15": "WnkDzqCyG9Ma6EHNxnzKDW5kTwWgmem659v4EY4usFUmuutnVyCbZxNDhTTcQYMwNXQgwc4dugpKbK9mWTN74Us",
  "key16": "64TXHb3r5EggqxgSMk9dcBhdxG5DDPMtkDDU8bf1W7xCbNuZQWjMvk8psS8xxtqmY5f7A51TASHPrTnM32UkNuv9",
  "key17": "26MRe7hKyxZ6az2ZHPoDT5MoQ8WWnZptxCUcHvydK65PbfVjnsFHcNYqcARYimAVB2o1vPogqgVQxGebh4wuXjcv",
  "key18": "5xsnmRrPSkjSHbDfvQb6H2zyxg8kmWoakzujzbnFxoWdjZ93tvzV8mAsTZEH7A9rftDgPb2zLwey3j8jp8bbAEcP",
  "key19": "5PvUW2FXh6dtER6PmmvVU3hofTkY1ToUbqDrhfFSWDrA6oxKbVDxUz72wYvFUbGcZ5fpKzcbArXXx6ENr6VJ7KZn",
  "key20": "5a1YMmXtevmrk9WUMCKatw5ZnGPtT4ckgBujviUYVGDh5SE7EhrERdhsW5DubZ58sJKosHsuaCN2vNvG6G3dcgvH",
  "key21": "5jaE9MJNJtUKqb2shzdu7TKrdvBAgedma1R9Y58CLvT4bZRL3jq9pLqx9329G7F4NP4fNatTSSVk3A4qTTnPoSPa",
  "key22": "yCmYTF2Rrekop4gg8unhCmMuuBCi49X6VdiXjyoe7xH1hZ6q6frYJ2HnG1oCAaSHigszfohFQnrgwhUv32UNq41",
  "key23": "37zjyU3mbXA76at3mQ4Rt9K1j67UJkKmwxs92X4V2PzjvK4GgXurgDC3yqJK3UfYSWTuyJfpKwoymqCtQeWeZSQz",
  "key24": "FVBsoz7iHntVLGSLggJLSafgYQbfHqujUTwpAqw33r3KXfHLXBnWRmGM82rD5p5QB4UsL4atBThPdtDNnxe3hFR"
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
