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
    "2Xu6QgGXNBpjU9KdbVX33izDMJJ3LdPSmT4adP7smUu693Anv4jHVQvvNjTcry8JGVLtG8LYkzkqaeHoGXGeRQ8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Levvh1EgDNpbnTcVmuSyNdWG1Nk2gu7aGF8dc3SPdgCf97mEXbuU9LcvEyhGRy1NxkTpfErt1xbGiPn1MGp1Jbd",
  "key1": "4HdvVMfisk6J8zc8keswFVF4seURu38U4ESkBo6sbzAnZsV3LYvjTzCTAh23o6wPZ8bgwERiVV1GCoyygKTBoJAx",
  "key2": "2LNjFZnzEa9SsfDoAaRhxFrDhKMFxHs76sCrf1qcgjSacGAZy2jQHW6WyvpvpneQdztR9Hr9FZQeSNRL9yvrVuEW",
  "key3": "4qJRgChugbUiAMR9wq6Dmf8MPT3BUgrqVhLvMWeM9HBKbq5MCFDufAqz6vHimqjrEpGbrkm1PUPcpBy9o86KyySp",
  "key4": "5XvzMUMgAbxdna4DYL8XwNcJzxhxBDd6QiNbJMSyu43PMK94x9wRvYsUHmWAFm6JjpY528fiJ5hL7S5koCniJXcX",
  "key5": "QoHdW6LfmR6mbWUtjaudhSnMRpTiA64A4zJUJEjEQKxjTNBA6FfDP1BdoBb9fPw2GScqoENVKTwsHUrrqDY9LQk",
  "key6": "47eMN3YDrb3yY6Gs6PnJvBLswXHNFZq7dxvMKdDdh7mQLmkFBJMpEsED9j5SC3aWdhCjica34PzLoEXEVNsfNK6Z",
  "key7": "T4vsfde1656U4KCf5UmPysgxfQN9SnWbjnbWAzWZeaKQV5aFVTRP618s7Pdv2QzdrXC8gNoNa61VwRripTGAtgr",
  "key8": "3rv7BfbTvD6YD18EdUmCwkfSUhBddkgBiC4p42RH1NneVktT9RBJEWoFu1upAr7j1GmreAoQBuoGWtcjXy9Y75zG",
  "key9": "5zDCvmWp4Vsqz84EeqfLE1hknAtLsHWzCpyBN6Eryo7jNpK84ZzkgE5nKVV5UZAN81mAP6dRJJ7Pyt8aGTh4VFet",
  "key10": "Se7vcjBeEQof1DxhpMRCBzgskUEoNZxUYom2tonFzcPA9JwyzzhAto6rVkJPygz5GNz47v96n9cBFcZ956pzdVk",
  "key11": "5hC4uUxUAoS1Qxq9nXyunZtaPi5Yn3k2vxhX2m3YKjjfZN2ZUkMYJC4f7VrccJvqgjFL4nih5rAz842qeLBJ6MSU",
  "key12": "3n97DK6smzn989zuiJX7GPFrqmj4NDHjpkXDy26Vkr5nPGJ1oQUdmRNcRXCqyNVGJartTNL5xVyaWrZVRTXZbaSy",
  "key13": "46hKL7gZ3CHTE8T7THX9fj89yvTBg5BD3WuRqzHLwUaFw4UwaLNe4XwtsBfXCZAyHvWiSonq3RJ3CqdwDkTCkoKp",
  "key14": "4YrKVwq3Cu1UTBNjW9ZXRGWNkSga7XMmRjBPJGP9mk8eC5mmWvWfXgLcua2xmf6bvv7abx3EPPPGz9M63bRKcf2e",
  "key15": "aoKLN7C6bL6Rn6MthA2JyDH2uqAahEPgocmCQUnmf6SzEuzHDNRi4XYk5WTBNyUEeumHnjMMRuzbnBkApGR3JEX",
  "key16": "4Rcst6peZGo8yxHeA7MwYAL5ce2HXdtNuAottiN5CN8d3eRZ2wbsoSWLBScRmLmJ5waZB7mRvTxU8gpASSxH3ET6",
  "key17": "5LE8kZrEHavoq3DFyVH1UhQmeZdDkU75j4aNAqD9qsES8BsZ3RaBPFAiDwNG98HWNFPacE28PW6aqVYMQNHXkNds",
  "key18": "2LJiw8XBdkmMSxvzj2r9Tn4MucBPa7kbGTX9eCoX2qRGYUm8ayjpWaNxv2yMkjTfPDbTWiSYP4qwy6mKLCVvGJv3",
  "key19": "5L283EcyLbDytFBBcy2VS2nyivbfiK4veA3X9fje4muF3nMqwR17BKd8R43J33YEjZ1XrCFVbE4BXw23Jub69aZx",
  "key20": "5Es3GJRQsmZkbRM6MuMeQDKTy2B9z4KGiB1GDJmYUg9qcKDXGEWZYqt1uUnm8zphj3JgAEVVW1H9h3VCq4xrVmq8",
  "key21": "3V7XmxbXVjhK8grS3Swq33cdD3NjL4tpPYbhJUZ69bbKhYf4RDpjMDspuQU5dwWiNecg3qtsTJQRgqappXA69aW3",
  "key22": "3chKCYoZNcxbUsVh1QSMAmbJfs2abByj4R1DzmkeHsUiLCRgjueaBqVPKa51DyPCzXycSKK2ra73yCtxmRg53Hug",
  "key23": "482nE4oBhckHY8baPCfZPPhbRX86y6JzrGE81aR7EW2ooaAqDFXhka2aS9JqZgJJCH2mFBmuU7kRSu8Kpy96ceju",
  "key24": "4SoabBe82yH5nB3ubAoP4q2nge1WUxN8JGfBFj7NYhbyaCWYspkTxAKrGwENW1M71Ztb1FQGRyNGGtqaJPGNjGN5",
  "key25": "48Ws7jU37rsfmQAreVnYNQJkqjhbybQXs95sX37wCN7FUVkSWR6bQyvv1ETXYFgsDjoi2nR2BDGZK7x5izPXSKUx",
  "key26": "2Az5CamwpCQsx5YNqqXLu11j7mh1F9GZbByNtRQtEbbkRq7LiWXzFc5PyGWTExxNas8kaCtyQLNKntfPgLZto7nY",
  "key27": "HZf3q4pxUZgXWS14YXuQsphsijntVGagFRQCwdnNLr3MbG5NAsFLuw9omLiEumJChA9RTpFWVdDQ6RhFStkYGRz",
  "key28": "tSjwnedZwkkh8BXS8TedACGZCZZZPN6h6WbLagMzKzJTVg6iEHSeP19B5CLJJcDZeP3Km6FwU8moPm1hJYFRVmB",
  "key29": "wF87AfnAAxdetVuWQ8UCkEJBzZkNSF6KrBtb5UhJx3VwjmGy1uAAuYzCbF89KRsHZsFZHSBPCg53XRJq15Lzaqf",
  "key30": "52mS6mjMd9TdfghX8wENQ6hZbfy5WYUVrAmn6X1JLEebZ9QcoWrEtE8m7oa3r29srg3aKeQDnhTWodAzDqsWsyrY",
  "key31": "3qruwc2A8QFopLZHMoN7Mw71deGErCmCjxZtmH4vGwqTNWhcKQWFv8bZY7eV1Hr4u7gw5HWmNVTjTWmcrPjLkR6V",
  "key32": "m4TGhQ5vfsCiqa6ckx6jUpsFRigykpytKbyER9zTezboXPgSPgb38cMTgH42hJDpRm8bY5jMEDDeUaXxpBSBYeS",
  "key33": "6P1Ukvp5CgvtDgokf1GGx36J6EH8kNMdqezCkY1GvSaevS6gM8BkHCirBdP6aB3yDyK3Q7wGA5U7BxexuCHwW41",
  "key34": "3FDMwvCggi5ytXtwDNf3xgrF2tCarR6ivqXK6mMyrYhqS3GffHyMJPiQXqyNE9Y3fHdeVsaXdKkpAMMUnPvhvLD3",
  "key35": "EAB5aZvsULkZKx7UoZyn7xUK672TxGAn2ferWHmjMv96EVpSvtRGp9BhEWFGiy4oMAyuzBZ33A4ep9Dgcq2nTiq",
  "key36": "33etq43Tf961bgEr1SuRC3PjNgJ8dr1rELEgLzTy46AytogdBobxF1X4HiUpPe3yCENuJfFGUQ9eUDuaCZNWrJsf",
  "key37": "2CD8KJmB7oVC7DdX5Va5kjYRJ3Fezjn12TpuxfHVu7THEzKQnyNDixAoPYHcw5aydgP82NatkV7n4zyFkfjebdBy",
  "key38": "3sdnY4CSqRU5DEgj764fsvGhkdbkuqRiQX5r57CXvg9ekmEHF2kGLgLztVyEyDhmFsdsUPNLBM4dibVEfFgdRHu1",
  "key39": "3oQPMTzu6XbFpWh9xNpfvonRYBadCBmUYkbtSbZ1eVZLgpV4Kazgrit33pCULg4TFDzaE3hCCVy9gvzkztsNFRP9",
  "key40": "54VNLGRMQHZCCY66H8bT3CBvKH44H4WH92rxKof6sLfDfgeKYMDUE6fgnnPke7XAhSspxo1isAPjemWcY4s9mWjA",
  "key41": "4yUEbbjPmzCmASGvtg7TQNjLoMRnjgKVDDqytvG9N7n7i5Jj9HwZaaVUv5tFDtVkfAVaPW8jCf1roUahzL4iZJf9",
  "key42": "2MabYCdmVYGv4TmNta6dD8aAjmxEjdbJ5NveZaJ3HnkLX6PPEHwWEHveo2v1suEspQYH19Qe3LTAdqCx3oEwS4FL",
  "key43": "3SUHzg1Vgn5xdmc9er3viPnfLQtabZgVkcPiiB2jrs6dpAwTCbbDaz8tGvD3LqACnZzoAaDPsvoj1c2FnjiuRCN1",
  "key44": "4fJc7z1o4FS5311Dwvxi2zdsXMfbwq4FkZ5ovTGPHrxeKhjiN72ZyASj4cmF9Wgu1kARBNERJVLZAxax4oTzCxec"
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
