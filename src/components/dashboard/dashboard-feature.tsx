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
    "2UjaBWzjo1AmDEDJJJxGMX7xoq6Vnbz5kDkWNY2cmKBXvGbLMwdrayzYd4ttJAbpSSNV1wVE3QTncU1o6uXPuRcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCef23dwCabPp4hRVRJmpLjXJP6pQjXNkwWZJgzvXY6RRySZB5z27MCaiyvcMFJ7SfLvBKzrK87j6QykUPHoYKp",
  "key1": "4sE4B2K4UDi5Lm935o5xCBUTfg1ehQLfkmbENs8Co7qCEce1ntiEe1o6axBFo3tnYzeoQVK7GWm5wCXmgoXrF11c",
  "key2": "cdxgn8uQwfa5gTxbc4BqiBbneEaPEsjPiETeLvkHFsEcmiTHna3ngNwZMvy4Aqzh24yNqxcakxEYNo6STzvyJMA",
  "key3": "5jiMsZrrSa4orrqqJAo7rYX8p513Sx8zNW7cQ918BsjjvPuAgzsY3iEJN8h3iFo86tEKbHcymDZd9ryDw5ZFvido",
  "key4": "4igYFFNxhCZyUZgaTnFtKtAgEF9JaPxjqEjZkADb96k5CdbQH2Y2hnpdweDB4tC9dsmrs8d6dxfsdeh79ZzwBZF2",
  "key5": "39wY3VEzPnkv7qfJkXPAhyb9q9FnCCEyLfnUr9385toKisPgvsGFutYNg9j1AUKy5Wvjjdz4WnQsGcMfjrAW9Lu8",
  "key6": "5XG84j8BjZkXXVVyhcEDAzxrsMLzi5NSfXCVyEn3eQDFW6RQ39rbaV95iSLmqVdtyhWHzDETSKiogtVsYgWryrDZ",
  "key7": "2KdPYM7Qc2VVKnsnQ3VVEA5U7jdxk6empWPZTDNmQfCVF1R9EqD9WX7tESHqbAQvoh5g6by9RYu7UCwCQwsx5MoH",
  "key8": "6teZzspvyFDV6CmS1xDHrtwkW8YKLT8SwjF3YK5kkCVr7Yq7JYkYAdgfy1e5i2uWvoiTQRt1jzQNqNRuhmQhp7g",
  "key9": "2DZQFd1LTuyxPyjoHzib7sbYBGbeo7uS4GdTpFJEAA7z1Dsbr1PPtMMM8D3G81wohidHBJVBu2ASH8zrELMJRCk3",
  "key10": "5XRa2MZrjupVmmTETCQy221anX2Qzuy4siWDumRWE6U9VBaB2NBGJPrFh8Hbfj4jumsvtWk4WhqPz5QPAA7HbHtU",
  "key11": "5FbbqJvZaMaKPPAG8i6ZqgxsGNh219G6UD15vAsfYM9QMrcJJjURduk7LnHdTYER2DRBqEXpH9X3sY65Fbjc7ATY",
  "key12": "3bMw1dYdadD1WcbqXus95mqARvNFPVUwdsGoPTTufTdGNzQbtNPHqgSEGdBFuhuXTa8h4FwzVPnzKzcbng2bLNzs",
  "key13": "5QLDffJ2WKdn7U9n4eqt2Jc9Lxq4Rh9pB5tasSvMzzjnKyavPfx3Wev6hWwBUFZm4GvMYVne672GDDUUpnYqvuCq",
  "key14": "C11eUg3SJaGK7qsfoYwNG4DJia67BkxyZY1N5XLSjEcNm5i238V8didADPtjCPkvVcUfywgjwdmgJ5DKau8ZDaX",
  "key15": "3tdzvi66CPKEUqqiPdZU6EC9ctvH2V3h2H965dehuPQ6sqm2T4c3btaCihYTJNxvRHkYjGPhdLNJ7efiYhWsEit9",
  "key16": "2nMmWqFoEA5Exp6EtJSWpU2w88qLsC2PL5X3J6WGkwoe3cnR84vYjXGCvP7Z4a9CqfrEwwgrXpgkktC8j7cEuEVN",
  "key17": "3ZxqAZjAJx6YAB2Gw3iu2AnJaDwQx8ZKKmzSdbRvtfhMDmCZD7hYqShxZWRmqcGdxeNY94Uttcuo9b83KUMhZXBD",
  "key18": "3jNJwBfdEisMEAvyzdWPth6sAtWPPVRTJxfuXYuW3dE81ZsYiSDZn2FUqfod2feG4iy81vrEtxPeDaAimxeeJ9uu",
  "key19": "2Tc8YfC2pGiemRzJtJeboapDAArYeRznA6ERZD4XocRNqJup9CyNTP7S3kwXiK6NPpyf7ra3Bje9sUHDsT6E6kex",
  "key20": "2SC31T72yfrzkMGKfwbwpWjgNwu3Q8BvKJJ4QJZ8ruQ74BXUKErackCynt5CAeVyqs6hRrNtgUQWnzVjKmaPcgC9",
  "key21": "3NquXEZcTPqeTyDAw3pZmuq8XN6TDWiASoCgkXJtR7jdQrXsyvAaBqGoDH9bFc87FTB2M45SWBfSDDPRJ2FZcX3p",
  "key22": "4bAyNgSwrP4pE7r6NbzReZoMJcpnB1Mgwrk4Sp9hDrPnZCZW8EcxZWoaAEA4k4NoNF17PjpTkdC3YUMFA6gvfpmL",
  "key23": "32CPNiYUiYT48EG2RJxm9RHZcB4x6u3xNKuNmj58wV5qQcisxGA6ca36E2vk8DR5WVjX6ceB9cadAmyC6t1FJicc",
  "key24": "CoQdW6ZGmgaC5EpxZxmB5ca3tYEg2zATSbzrgXSHWgEyQKJXzbKEc2a2wZMBSZ3s3Wx6Y2s98u4D8Pyii5dPzF8",
  "key25": "3HyALjH12nUwjzw6UTusGhyNHqyngimamAmwkmPD4QhmpZd1VZcVJbimyvJa4YRXqiWrqpaSEQUTp5dSdmq5Jfq5",
  "key26": "2ZKWjqF8xCfwjwZZXk8eSQxDTa4rPwnffNbruVxmRjaMzxaN4TdFuLqqmAhHXC93YVYbZS13QDvowgS3LfxJ5FT1",
  "key27": "5Vyj8PtxEPa8WrT6PDL89mM5ywacVMAE8jk6QGb2z8Pb4moPdCzZN8ESYQXi27mo9kCvAqzLrDLMdSHSwKE15ipk",
  "key28": "44WYZQtALU1YF9H1NhVNEdKoNBRduP6CrYfvKrRecSyqHXeCQzaPLYBKGGCY2TN52M6rwwTMbtDJ1HFvxpm1RxCb",
  "key29": "3J2gAAvnP8jFsS1AbJFSJqjUJuAU8DqqXSN1iKAiCd5RnYrw3FVRokHDDgAFN9JybAw6foQfDgaAo84sm7m6o2tQ",
  "key30": "4Yhm1hajNJ3KGJmJ7jbDQcucLchBavnqmpm38bmUUrKSmcmXJ8oTWMnKRWmmDTRL4aKw3QwmuLMqUPDuiW7gvbxd",
  "key31": "6zxMtag3PZsPFxPAHjn3EDpN2LCUC2xvVoFCGfQp5DQ2kaRYnwHxBYHnNxZ96YABo3ZbyGz5jTByzrXUU8bdTcs"
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
