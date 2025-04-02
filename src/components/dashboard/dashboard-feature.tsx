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
    "2Y3QcWGZRwUb6j3GKzfzPoNpjjseTEiedzadxteNhsUkLa1AwdTxhgpzR8bh48cpRNt3FdHfGeA93AQZse4bsduc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jF4xeurXE189Uk4QV91a3qqXkVBw1wutmRYhDDt8YAqvnFAX7YAd5nDKT6wbku1UCW6SX4a54ww38E1fvBmP1oP",
  "key1": "5ADwroGXZZ6BdDFT53bhRBk4ZjKRpfeP5u4JodJDbhywiiWGSUEhLSuQM8hD4Wa3RDBUGA5HX8iAfH34xT5HJUGL",
  "key2": "26Qwi8gVyWpnNMgqhjS5GnPMMcNruijhhgS9rDzzNKJ8ExJ9coN2FEtgLh74c2Vz3rsxvREhqZwtPw8pnqgUP1QF",
  "key3": "44hW3oujvFrfdwHhDfhQkXdjoy3DcjADSD4xCeudXDfqXceVTymnmrJKNKRR7kkDNUynXp5VRwDZZVrpUvrWi3rn",
  "key4": "4dzsvXQbTPWNStjBSwH8UesNvCmXNfyiwdDLzzB8XTm13hXdves44bN7SJq6RrZjPQ4TAhvifHwwAS4RS3YPH5ei",
  "key5": "2AmbfmZh6fdKusq6Qtv2VqeS7pGf34AquqVeWkrMxxWeXs5MLJ2BGZEA8Hum3YrpQrhnrNVa88VQT4exayt6cxjB",
  "key6": "4HX4Hm3GQiHcgwZZsi4dma265ybf1n9CJRYVgjEGDrQ5r4B3qNAkaAVgJ3DuW4DauSZN9Vn3v9on23RVRwjvcq3N",
  "key7": "2oeS8W7UxDqxCWXx8E3SfWEAXFtCu8JM7266gB3W1qAKCuPcdUGYFtSp4vQmuYJicht5ChfNJuU4dZ7FUSfe3rpZ",
  "key8": "34KcVK1c6phYp2kTGGWKF3JfME7FcPUBP5c4fHqjQfNbimMacPaMSWLCefaSpf5TfRZ7YpMheHS1twpNp7N1BvsP",
  "key9": "3UKifGp6HMNFhyU8RG4autruA4vBzvQcgBv6q6wuC8qLSYKcpGGhNR1QxaPGY3qEsWfkyQ4spYDgPu7XWej3Vk9o",
  "key10": "2gUNuk1dQfwkiCaA92GkAMG5jKYSrdJ3KJgCv62ewx735yvNJBAvhH2z1KyqbjEnTx5d429uk4H6J2uJAS3GtmJ5",
  "key11": "3vommhCrqNSJepXdfWu3GmjuJ7QyJcyqvyZg9WrRHy2XFRBm4gSLz4acdtMiYeJUVVuNyntu3kiLATsNLesagvDW",
  "key12": "5d7rfpbUpEa8KxKypY3phjy4f7Xzkw17szzmdU9XPg7bRQhGRYut277iLJP783Rhbcmo5UNoa9WdbcrUm93fyZmo",
  "key13": "4KetHDugEX8QCebeAJGSyeowfRLxUFoz5EoAAsRad4nw8JkqNGUhLGNb4nUK4Q6i22KxjXr64Y9tXugGgAHFTBGp",
  "key14": "Sv4EWbkVq3QrsNLaJNAwYHZkW6CgUqw1EkgxBj4LfaXYmv4enGuc5SGHqJHw5hdhqcQX9ntJHeSLuP8j6hsiJ4j",
  "key15": "YsMDw7nCatc6rAHFmEFmjbXJENMztZ3eqKTjYi4okKwPeCG9zYe7D1s4GTHAzUVz3jT4v5kgRNR49YyyifpPPar",
  "key16": "4SB8jFPmZCguf2e45hXUxVqXtCxv7bEhGMRVbTfa6QNQgGAE3x4VcvFt5wqjoXPCw4vrbbDJN2bBTqyJTFTvwakG",
  "key17": "3EfaWjVcW7M95jquGF4CKtrX3usBfWMB5ujXs2EKo53fSCmxoeyZ58CaYDdMQQhtU897RQiScHsWHfg1dcUd2ZmL",
  "key18": "5WDwP92UAqEDtw68FuHyzRmj6k8DvMbN2zpjh49uf6UBcYJNzxYEzo6Y5KxEi9312EszQPBYM4seh5ddN4bjtCc5",
  "key19": "n5dLyjsiwVgwr9YfnnyiqsBKpJg6oTWNMtonJg9ehjDyCo6Sou7Wc76wquvne6y31jfumaTPmPLGPa7Zyr37648",
  "key20": "2G8wABqQDjCATqQAmU326sP8vEkYduudz1wXEqqLjJUryaN7Zxs8P4iaUZ2NFGRVamomTTs9tyL4oGRrBo9k4TBh",
  "key21": "535zy68KSd4Jatcbszm5Rq8BnKhAvEmQSFFfkrxzdx1zsRyEzgd5cS2iWod1GxPAZR4opDy2PtCeRATZgJwkSEak",
  "key22": "4BnLvvxbYQ5jCm7sBtALmkUrBDTKfHwSyXam15CWU2CUSh9eLq4n2oJndm4BUMDDAsQgUpj98azSfZHqTBiWuywn",
  "key23": "5EfzALozdjVy3pMqNJKkErSS36yRJpgMoLjLEQMhjL5aPvLCbepbbNNLQamsVRb9VVajcqYHoBdjMim1sk3UPRhS",
  "key24": "4itE2nWMLnYWPfHb3Nkg9fNN4JBG7Kkaq6t6a8pctJD1oUhQ9V1ST6UnXfpwHxHbj5XnBZgdHrwmmbg1DoNQz4fp",
  "key25": "4HpmJi8K5Qv2GPz9zuC8wqVTkd7XokKhY2mD7BhUtRsT4gEiHYs1XPT1nrGEdcmLsxvy5pd3LnMrN3PidADFRpHT",
  "key26": "3GBBBXK78DMzJ5tT3TV6ewaNRpf8XmFM4t1rSVT7BnqWwSAWWKpAwVZNeLAJtKLruCwFCiLdD7HgJYEibeZh46ns",
  "key27": "5TtE6HBZZ9hCMwsbNmaR8RezxfyJ71KuRyqSUvzLkQhaFoDKL7anr26yVMreTRaDh8oqTASVmj2Lnnbr2MQU2cLZ",
  "key28": "zF7Ns7PHf9CiZFHEri9X4C4ndLPRyHNUm9j1X78bdX2JjepbLtbnArnFoqjqbyDj5HqRr42JLiJGEDXWCMT4f8Q",
  "key29": "szTZyJogLfmpuFWzYeKWUQ7kJq9cNHutUVLpLaURYjTcawkF4sgtNuGPwA6HmGnutCjG1kaE5i3oTnEZoXAdDuM",
  "key30": "4AhkesnJSQvncTQArtafQNNqH2thmGrVqogw76jbEncLQJrSGrqpR42W8xL78pxwFh41CMcvaK816uzcGEooJt6Y",
  "key31": "4Az38vpPgB7PGdVtZFcQHbfonPvMwHkBLcYQraGUS4zhCAVVVhpoBF83cJrB7f2tGT4cHVts75YWVD2CngiG8iMU",
  "key32": "2B4XrEPsUqUcCyFhcDB2hi67YZ5KnPiQh2nGz5QhTg9zm7wkjzGG4jXmof6MALpwe1p2rEehS3sRCPVFsh1wH9NV",
  "key33": "3XBkpTWYgehwz6maXLugsgSFpckMebRL1ogKVW2EnSezUm3X3WDDpmVRngjNDDkXXCSBFqeabq9vAuGW5U9aFqYJ"
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
