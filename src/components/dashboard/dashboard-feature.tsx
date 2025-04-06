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
    "3EFY9pL6yVxVerFPR8X3onmpbCNQnkReawf9F5kHXnywxuZWpWmYCoF1JPikZhNg22PKaGU2WnJC64J3eab1xUv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfjHscbxaY4jNyo4s9eT27reGG2kVRMxFHRwZL1e5LBTojvitcY9vWwxWPJi2jN5DDHU9v1HK4ZMTM6n9kLAVg5",
  "key1": "2hEPcNY52VWFQovjkdFaELbx5TAncQmyFk49sGctXNfs176pbMP4MwHNdg3888VCGxRcbyTouGPucv5JEsZ5YTpT",
  "key2": "3FY4FMmoVRATMjaEvJbFN17RZ1oaESHmXKgUkFU12cn6BdqexbAgbcD3ckRBjcRdRtwhW3hw3Mw1nokXn3m6J7wN",
  "key3": "4AqkkX4PL1oKYf8T8LGZXk8FDBpqFhxEP4c6Qz1By5eBRGqZ6jj9ddZGCENoVg2NzzKtP3TmXk6aDMVL4Ae6aguG",
  "key4": "2H9KS9fbwermxpzgdQzbhXukYSxvS4igx6LhcuFqgj8zCjksEhEHeSZ29y5Muc7vxm9wYo8m4zKEneHxZVGuUtpx",
  "key5": "3RgxLRmgBdm4qJPwksoxcub1z76r1MYmKghsbQFzy8fvzcXYSXyCyEfDeJ5jSEsUKzdCX8DGwmwSwBkvZ8KFoemH",
  "key6": "47cJgeH93zSim3xi4jrfc5BBQrbTQKKwMiwL6rnM1CchH1SmSGgxWXsp2iukJox8ySJ2iG2LrZn2jmra2S8fYv1o",
  "key7": "2GtNsmCdssKRbEzyNP9ZopZWFYzMsS17nb7uBpzpvihApmFktKXbpKwp4sop313rqaBMiyuLsQo3G3bSW63W9FtE",
  "key8": "5Yk3Cyj2mjZKAyQTmKZU8nufuF4AQTshHtj8dwzhivitjnKkEc72rP8GvKG8wK8L2BZTt9JG7hrDCedPeqyvpyGv",
  "key9": "41AfyGp7pe89CEw7XFxcrapk49rasEENSbPgcTUCSgNELrizaZYKqeBzT8WUhVpFjb7JC1RnchxqJLzGt3UgmbAz",
  "key10": "41Xb38yM9tjFZeJs6WTNfqoaSsv4mTCXZNUa4sZqXtM7Jje6UXTEZG2re8TrakvemuYv6aQV6e1E1frbPHXs9aqo",
  "key11": "w8Bdfd9y2zgk4CPRE2fouvY5VUqa1Lczc7JrnHvnKK2eZ1c3kD45YzzrnUruH6bfoeWeVsqHthUT2cpiCCtSjjQ",
  "key12": "2dS4YAao3whfgWJFFLTsqf4XTZ9RDcC7cHUQqfykJfErALby5VAkxBoDGrGJq6gQqKJpm9ZY9QEXtHL5ExAe6GuQ",
  "key13": "4bB6KqWcLg4MaJEddW7yxbbubZ4sT664k9G9JwiXB8VLvg53dS85EBb1o3yN9K7XZkNTP5VdGjvv3DXAJ8Nibops",
  "key14": "3MiiGkjvyA3VrVBHQuEAsdmZWDkdpckvgaXyiDUdTWMEnYPXumtA5epA7PZCLERU6iXdMKhLCa5LZEfWKYURNZDG",
  "key15": "5mVpTbcgk79SCr7QSBAxoKW3w73DEKHgbPZpimyMEUvnWDXqXUgEaLrEXVEML4EByWxFnPvCgSmPyyetuGV2z5jx",
  "key16": "63t9PF8UeXwTxq4uTJVTZg526m3h6ixkLAJueFBQWMfopQscqRbNhwafgjmiKvKqdg7u8HZEynzk3YGfPAjRFxUk",
  "key17": "27Vvn1U24av9P2icqAiqLQ6Y4QDccqNmRqXErFUod21VW8MByoWcKQ9tRUuuKi7jqkrb62oTiRJW3H5gDYk6hNtF",
  "key18": "2er8rnCfDH158gQTvm1UWDTgQfxpK26fd7YPSbxEQbYXK5mcDHpraAgUSHkrSppZQs1rv67Q5nNdXVv5Zne347EV",
  "key19": "51h1f9KCJS2x4HhWXYgiL4xc11qL34Hs233ugKhbko4nCxZe4jVFvdpx23fJ8LKkCpWd2Ms2W2x4g2cFU8cShhL7",
  "key20": "3yV6JHPQJecdCaoxPzQCXSKGFrRKpjKE3NaNYRWm99muuMjfRLHg1ssDRWE19oRWddtbU2Qh8g8JQ4e3cKMPZe7L",
  "key21": "2PEP3XTzatXzFFNHE8BpknTSS7d2DUaUzDrJPqPXhpTEJzy6XxMqW8AUcEnN39dKBiuoTmFfK3RwkCRFmigTEjgA",
  "key22": "2HiZcHtU9CX3EVowV3oKWMD84eo2MrM9NPeKwj5hw7zzhfMvGAf6g5uQW4fFz6B2X7RjodpwM8FvRWMwkZLtbt4J",
  "key23": "NZeEH1cNn8v2UZv3UR34pbLHYqtYrs1pxCq4fvhmk1tswPoUgDir8gcsPvxJhSjA2cMmQjPyz1AtY3jttVn1vGy",
  "key24": "32MRmEAPbfBBVxgzfaY1oNbeawMcdn7CMhf5FQhf3hMY9ELsjRtNHYMVwjp6UGLnGNMVEZdwB7Fd3gEsxd3YxQ5d"
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
