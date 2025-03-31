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
    "aF14eZyV4Wrm7375mwLL4An3x7a8inALLL4eNFY3iV5RBWUyk45DL4F7Z52jAUoDuKtQW1LgM7rY16jTVryMAQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owuHbjomAKi3TcHo77manWxSe27K86Q9TLhDpd7V9AZeYZ6kSopwfoEKDrxfzVkmPkCGVB1N7EwPBmRYpHauYZT",
  "key1": "5u9H15tGLZ4zpRqSEteuQFzmt4eFL68cSdbYND22AgDKC43ntLH87MmbiVMNeRabFp3ratJ241isoKE7jr1gRCJ",
  "key2": "3UjKY2cnmi6hbhVu93d3p8XUaXH1KmrsSchwJqCB9aNf4DdWVPMov95ouQEE1gw4uMn3RKAYoXXedfxdsWfLUaNY",
  "key3": "MtBiyUdfeSw76GEB2BLL8UHvde2HpyAieijfGKHyfwuCqrs1Ed6weWrmik8wNb1oBBepKmAT2EBLPABSSacogkf",
  "key4": "5SmxtEo4Qavmqu61gQ7fWs1jEfVrsUMKkJTJ5wQp4HNPFdz8yxuStoMBZzLdNQobENtZMyRP99u5v3XY1DQLroXV",
  "key5": "itw1vSpT2wkgsBFoooyAgRbGpDwbkXqz8NuYpwwPYtkT9V6G3KpHcG1ufZws21f59VFbgt36wzMXgXu8Qs2X5LA",
  "key6": "5gqDcCEMShytZs3c74TU57gkaYmBqAEKKxMw817oD2q3qKAUXNqrzpucDpceM9VNBYb2XF2Dmq5bNj8aaRuqMw7o",
  "key7": "4UdFhZSmY6x27y4LbYCqrvW8RFSeXfhchEia1xjQrGYayMEu6hDzbFRPCxEpfBcqquZnd6b8dQec8dTXufDy4HKj",
  "key8": "38SmLSMxd1PX7JZXNvHsnTP13XmrNs5qYp9w9GkyeS5EynUipz3syHFQvC2hZFhM7nKnBJP2nsBXte7poYYFc8ts",
  "key9": "2xLgTYJ8dd6CwHda14S5pXAQMFckHsWXrDhrbRuQFAbTiWYAKvwCTUVThLNmUyszk7NaTJ94rnL4mxFRKcG973Rv",
  "key10": "27CdZ1Dw1sWLGJhFpkVR1F7cbb48ZbtDQdPnc8PE8SRkgyc4qW8v6syBDr2YirsbfXbWn7K28ui3ou9HcmDA9cxP",
  "key11": "AAw3XwNAASwZngzfsZekknH5WYFKjy55mFMjLXiEz7219fygPHiPPWpRAg3g8zuKxFU5TxpzZLGK3zAhA5HKjXq",
  "key12": "TUJtAVULmVJ9gMC2ffPMzFZkYqfAyqbRP8Xrv5tJFBhzwxkiqy2ZNLi6c897XFpdFGqU3yD2kUwi73bqhgD7pea",
  "key13": "2WqT49z9Z8UpLxSu3GCsr5dpLwsNb9hvubaKuo6AoaMtn6vYzabZGEQuuJsd6TqPjnvwTULLa7cjbwpGnnBXRoSA",
  "key14": "365d9DVE6QDPSJJqA8PSXmcWvDHyT6w22npN8UXtz9WPYdqBb6dUYcKgYnjDqYuDJvJ6gaaRW6Lp9nrAGXEsQtWX",
  "key15": "4rRrjoW6hdnFdADVijoiHv8FjBkMYV4xXAwUyjSpwkKCVmGm1xWQ9uNGw1CSsashq2Yp8QBHfBAmQLuqRqLm5sEg",
  "key16": "4QuAsJzzrseYG2nQaMrJsDWAfYWkxZ88bCbbtDiuU469WBFoB2DnZtSA4VqMDYDxXrUAHrBjk2P5YxeoJ3hZJSq1",
  "key17": "2p2dh3c49qs31Zzh9EADnVkHdBhaJVHpgjoKaoJ1tEKLRU5rRTuKJw7NnNH8P9brguC3HKxVY7ivd29ysaYvK3Ks",
  "key18": "4Yb5TAm78wmttBYVEBoaa4bqbMdoDjvRQUBMT4EJvic28WXyqtT6i6EoPS64zFB2aohBfim5ygqMfSiuMjsnWDRU",
  "key19": "3FvCqCyGB5ZgXGEjJ87wqw8hfEyaVsFN3TLWHpUpgf1UrtweQiELsstB13Af5J4q5E8m1NYwRNMdN5p6a5uWi8MM",
  "key20": "2ZzqMFPVupNHpaoXRzbhNyxP8zvaCdu1DGQuodAutVp2SYXYHADNGRtW1eb77UhhUMbvG9Rppuaqa4hq1KfdtAff",
  "key21": "2yReH9dC22Zc9gxkR15X2wxmLf2LzXKMas9ShAZQkusUPsL4ocjCHnpGXpZJSJbfdvbr5MofVXRYb4WvRVxGCB9F",
  "key22": "2HNjWKC9TVQjECtybh7HC2vsv9zGX542RS7qDRGf4KZhKnW1QcCNfF9epfCrCtt1P8arNKa1u1spF9sGoLrqQ8jN",
  "key23": "5DMMk38GsFZx6DaFxrYktvRxzzZP8SnTh4cfFkVXkPAfQAZXm5j4EiVybbnPaBTt4r34QQyDS7XHXVRLJm4K21Nw",
  "key24": "63kVRXjoyt5NRTZCbDNT2RSqxMBs3TJfQMy6HQ8UbUUkatPCpVmrH4kmJTzSknFwu2KYhVUTcT5kF1UmY8DkGEt4",
  "key25": "5JtEo7YBidYGE2QRRMtQdfwBqdvC4kXagYoV6whTjUTHKq3Csa69NL3NzhDL3UJ1226KEMnbgXuq9sxxEk15FShA",
  "key26": "3C7DgtaPATv4NY1Fdp8Bd8Snc9Hcm6ub3EeEQTEDp9rgC5GtasB1JfaRrtyLz2zyaEWuQVeTM2LBKiAdna8Z24FZ",
  "key27": "26mpvT8KSbLgVwKfutjmoVYekVTowoR9YsddySPif1pDEraeHtYPDVgamr8Zwtq3QXvkPZwWBnCKh56XtrRDGDbT",
  "key28": "2AjouyqfQyBoQQaeZ1xeVYL4mLZNMaHAYGVLS1MnC4fKbhiV8ExCepQGWcHeSzdYK8Q7RW8ksfmD64P7wsxsC4Tb"
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
