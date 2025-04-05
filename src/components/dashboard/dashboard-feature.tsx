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
    "2aVymjg68SypGZTjKUEFTYB5kFZAdyzP3K75XQKh4DYnwvuKZtCeGnB67aAgT8KRCwHjhgFM5gZsTjgHcTR44v65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XFeXE94d199EUG6sV3itEPH7xz8fBSeVvKFhzxucri5ctV2xG553uuPM81my8mgYbPkBUE5ihGdGvk2DS8zWyq",
  "key1": "mnREGyhNoPEvSPWN8CdbPXwh6iR3DcqpM6LYiFfLbXHfepwBiXgeoC3G2MXGHqW6LVQxJ7heVyqtvcKVbFkTaHF",
  "key2": "eRfMVavZGgNnQ8xaFLwvHY64UouZF9GF4TDs6uuP2jFLVqfxFKC4X3oEykbugN9QpwyBBWX3eqfW6aiuSN5n3pH",
  "key3": "aNLWZERnjXy6dpJ3h9MxfDRuLeHT7kGi5UK8QFKA7UTcmg1AwbMfkuGkCNVmipjn5dgEwv3KqUb8p8GM8wuKrJd",
  "key4": "299FRmMvSyhUa9kbHFn85mQDUAZxjqyunwgU4Unt3VtJvGvMqLsKBwzr6oN36aqLGpuJL1uEDcNfciigsf8QKtpY",
  "key5": "3hhL8s2q5USb5wLL7MYz8WvTijEhbV1uV3E7WaWEB3T9nKkCLXyDrJEvCvRxxks136K1Zaxa8r53JAMnctKHjhhr",
  "key6": "3vB8rBq17opMvduqc8StF1ELanmDmK9Uxg1GgtFetqeFyoRH8YyNgeopQKRhjj4MwZ7pbX7X4jddkiP8QwKXra6h",
  "key7": "47jZyGGLEWCsZ9rxjpBVKV5gojz9nhwRKJcijDuDLGDPQ8DCyNCKNaE2PN3wAPc2ZTkLS3b9HEwcdGi2W67rF5x8",
  "key8": "4EjUsYDMhbKRNf6qQirgzdQp5VEbRZbmA4GcfGTJefuYVDYVsarfjsGuQWsM4ijx43pucKbE3BzxrjDw8qAKpPnb",
  "key9": "4HMK8BktJFpwVpXhbprELRjYjVGYqwVhJT3bD2MzKu5utnZ37PbPzyPb73svNDttVnVtMUrC2BNYk5Hfequg2idn",
  "key10": "4qznHUok4AKkVdafB4TBrYyBcUo6szJaNvRxFJnZeFPWGiqnVY9jHramMhMfGUGQm9g4okMQSyKcoNATuYcWvYt1",
  "key11": "5V5U37TBfBs6GG3MRgVtTS5bovMP7MopPpAdmf5YpYYkEPWR76ZwbVRQy84ENWAvmWwND8kqRQZ7ntqkjBRXvZmZ",
  "key12": "W1weLeaJadS8Xma5XaYe2sxtwWmD3Uq8NV4tAgdy6g39E8qRtXcXLMW5TwNHGULnLPHmMM6x2zNiPKhPLGh29Nw",
  "key13": "3eshAkjta4Ty8ixPXUwQXpFnnVnpaofBbif3w4SYJLjz4hjBZxHefCG5MAZb2MdUeev4B1Kyw31AX6HEUg4ExuCb",
  "key14": "5gn5N8LkwU6ncb1HtQgzhJaXkQhwR8t6jwXpqrvYmVJA4JdVJmyiADf1CbK9DTcTkNGfZtx3USx6jrf2nGFDci55",
  "key15": "2U3fqSZba6PLYvKdSZXPgTxgodNJQXWfLVo7o8AMRcavmmdYQ7M8hE4AZd7cVEpDcE7fALwnUUymWNU9817d32v9",
  "key16": "8cF3pDXKJ2gY57Fsx5ggUEMbqJNhKmczr1SqLegJkgJUzywvKGtbfgKLzxeEx8cHGRTDCKi4Sc4EGkm3Lq56Sff",
  "key17": "itt2Yw37W3ueUkc5acZmckuLyRmdD2QvrhCWL8x7YUD13B3CxPidMDBoL5B2AUY7iFWnbbNQo2g6JQnSe62A6yV",
  "key18": "HJi6m8hisbchQzm7eZbbqEkbKRoSCjAaNstzpHnv4oD1qUesufgWrUVNsxE6DhXAWe8qnbUcf7Ywojm7FewibqB",
  "key19": "4uCHbucqUh4B7Xc9oAdDoyGNH8zWczUaq3gMwnN4AN1aLTXBfns7qCq3e9SJycopbGe6KETaZ6a9hqH4F6faWEs",
  "key20": "4MtPauChZvVMak5hRMstQF56NoydnpP6CzZRFi76BWhwBKRJfUeiNJ4jGywPzvSJyn1FyzH1GXaicFErSaFbX9fE",
  "key21": "Lwoa4EAnw8woVNLLmAnCwWQTvcJBvsoK7N8PwshLyWndCMkvcH5yPHJw7tkkJuy43wnyV4fKsbBKn4XZ87RVq96",
  "key22": "U7EWzrSgBVYrE1CDKRzBn4pdDUsahtPAa3qcMxpa4bXQXHLtyiKRMmy2a8PwQuFyswp3cZGwLUPF2QK4EdrVbFE",
  "key23": "dd6fxFz59CzCLoS5sQMVdNMgockVioqsyzAGsUv7ebbD9CwSA53LJuh4Ly6NkSAkrMxoJnLqXq1cMQtuxs2MXaT",
  "key24": "3aWYRzpgV7LPxz4MFuxxD3Jnn6Ws7TeTP4a7B4Tq7Xp4F2rJ9FYamiL8HmpBNZPgimcTXQLg4fi1XbK9c4feUNhv",
  "key25": "37o2rkwYdyFzQsMNP4adaDNyxNtzKiEdHGQ684J2aJPuuYLrtDUsf8g3y9GNpTfdE3vxCZK1xU4ZK2H5oUFRVC38",
  "key26": "2dMkBTDrpMBUSGYTZjFcG1awfCXLPyXruKqYCE5LyFu7QWmyuTqHiNC1iC9Y3PDx1zDCZCbm1Ah9vtKh4tdXxmPz",
  "key27": "ZEF3aYEzh9Ev9nfxra68J4Jw8GD6uah6USq4BpdNmkc8HYq6aWUM1CU5GBKziqHoe8fevz1YtWSwP2JrjWRQmo4",
  "key28": "3zPLoBTmBVTp2Y1EeDoaqF6fsqovXcVQ3QKojYqnVyn28bwdtVi3M7VC4tj1sv7DU2sqSX1qAjvetWn8qWjRbKQr",
  "key29": "4j7z3qSQzkTYs7xumWjnGmDrwpBGFqornEDtKNWJQ4abCX2eqjKyZxSLJcESwNHuLooHwM19t6tAhjhyrpbACvMo",
  "key30": "3Ruj81mFZLAfmuErakqzBDDyFekc7FjAUkPkRkNsPPqWKd7vdjRCfX8P8F7WMewFhVJ414JthSkKuupsMSpxLPwm",
  "key31": "2CedQB5X7hm6RBVVRfBV4osrPGnwLFvoj43uzntjmQHU263FiJgpAuVn4KBZ4xnH2T2kpUKqPbk6oS6z3QkRmGMh",
  "key32": "4C4JVu6pJb2pCxJGGMfQXFUAocsbNRBxzzGgybsVe8TNvbY5HFHQ6dM26koGTtNTSSc5Fj8FocDNczomFHozKeHt"
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
