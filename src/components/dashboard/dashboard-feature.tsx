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
    "5gDkfwSuCSSKZahm8SNQw19XDL1GUsCRL4oVqLnC5pfjPGonFCJBx8jUb9M2ghj4QWkbdTB8EsMYGqJs3zrJPTno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBVhcvtsBxJx5UCbtT87Zfmm8mMc9axYDB5Y4KDVq45J2XcwTZW7eb8nnPEchSPFeDcwKTBATygff2WQNbqtYs3",
  "key1": "2ienYi1crsWkJ6S5xprcVp2SUSFT8W1qR12uBSZHpkNdF7eXp2MNo9vDcmSHQnpWTXC9PtW5CFE37X5Bggrgj1DG",
  "key2": "52cXtQ8aiD415G8LBfBDo91ftyLoQjbCzM9HeBW6N8Xv4gb8ZpKo5JAJoohapM4323V6XX2r5TnW4jXGJfv6Xufu",
  "key3": "wusknruFiRiCqPjHpwHSNCJ4di7cQxdyx2iK2B7j1vL3tNXcFcgf3VFEPhwWXWMBRH7dC1fyfTKdnSG7vhA9Moc",
  "key4": "5RwwENqQBciRfTrfxE2jL313U2eN3PNvnpBTxUsjACMsvGM1kR3FK1XCFZQYM6Y4nxXx79r3NZxNq5nbPSsfDAEW",
  "key5": "4gHMcGq2fwBNKbGZ7PNyJJTWTVvman5LHYetcausZ2P5xukeawpFagHRuJ3os5dwX3HCJUFfa9m9NJvCTNigiR3U",
  "key6": "21Urbtc34NrcaVntsVtS7yCyKu7rZcdbsJZo4CaWBTPutwrTrRNXMc8ZcwvTPniXpKcJwr3a4MqdTGcLePJxPoPk",
  "key7": "2YdRgxR6ooZ1CZhyyk7ycu5vjiQGn6mLKm3qCPPK6VNTNaQoAQQFdw7Ae49QckhPKKvqcbhBfB8rwd3VRVA3jiwh",
  "key8": "5NfaVCjz32GQCkukHQh9sGKyEBXrfeZLGMQHVBRr3jRjqzvnchJZHj93ZDgzY6bj9kFLyPHKDAnfS14SKEqsvjG2",
  "key9": "4UpJnHKZHQRcSr9YVMemc4qPa1ML9exbYNPk52G4ZCoyBGEeeeoyckzccJorgXHhLbh5Eg28g3SP8EUCs1Zh7pXG",
  "key10": "4pdjR2QcZou5iDR1zN5ymYgwvV9cAh1NW1gjYdyekBtUuKEQRJMe4piAiTYUNmtEMhNuY3cvar2mtS6ArHeNcVGD",
  "key11": "5akWeGCbaMV3aUSkscio8k28aiw5fGtnzhbJvd2bYjhYyLqZjoasTyLYgjdde9CHPGCiCvmRtdGAa9N37vN69kCR",
  "key12": "Ly1RTH1vaVVLRRKFkhWy1tMbndZWTAnJ7BGnd6rR7zgHKMPR3xCUDF3Z5oeTPhkV7Rm6gpT42hWkADUwE5wjXEq",
  "key13": "2SwREam1hsVkET1W3WjpucHs4YtKP8rCNDg9JBFJ1zns9ALG7qRGDwzGSC8EsCqoYC3BVC65yRRF6mwnW6nCfh2p",
  "key14": "5Pxhtc374v9yyVfCz7jeAnMUL5owviLsYQjzkgX4yqHRmB1fCLGQn37isaYEGHAVqRTMVu6vN3WMFvG6n6WS1JTE",
  "key15": "5AxFDn8rbztEAs3YZ1aupjcYNySRoYBBQgSnh4zgwZzT3NP8MYNFVyQELmjTSybvRZrmAqpCsqbaeJ8RXpfBUvFU",
  "key16": "omfgrixv9vkwwUvZeAjfwgUM5ktgZpqimq24aeKDvKpsiaF62M3ask4afyvztu9dCnRLYrDxMBHpYZjDFMPQWkd",
  "key17": "5WQVgc5YBsQeLHWdVVZWmtFdq4i35Lp79kDsfxcafqrPLuarVAm648DC3vz73NAzjFfrWrHVD1icSkZWejAxnxcD",
  "key18": "3UivGKH1DDsYdKmqHckCyoLF3q7SxvCNqhi8jvZDkXpoU2KJguXnUp9eJ5aJiQbj29gw4VY3KwZg2mLP5RxFXA51",
  "key19": "64cdrua9cJxdgQRqqLArhn2B7PqsCa9GsKTbt8jjXHb9Wc8jVnfZR3FybRmkje72LvNLEqFUqc2kq7QZPe2foCf7",
  "key20": "3EwQVTv5eYTjQQXUYVRktbjSvSt6vy5q8JMcBTcvUSKvoc4WWHL8PeZ6Hw3fnQmgwkk7cHLidf4m6zjfz1jZDXt1",
  "key21": "HDGX9BvByvhDzKtmxP8Bq3NAGD55iAEJizXeoDyvduT4WqtND9CTAoCoUpgV9mRG9jZkXbJD2xsUvd95zHcNT8v",
  "key22": "368iLv5Essm2af2HrADptf7bykAWKq6HtDrAzxAZCfZN6LafHcSaJcuL17MuqVjny3g8iBPjb1jGXeP2QsbYZXEL",
  "key23": "uKARebMQX1AG1QwZzrNY51sBcGm9QpqCgEAAaGhHcTVWxHPfbnzocN6dPNFbEnqTkRZcDPEgGUxePQPHc6fpjFd",
  "key24": "i2ysUStZm3mqfa5KNUr63Dw7YTHYq9GC3uKsGK5Z2iMKGwgwhjQ9PRaMhakVHD82imSb3Ts65QyUBufx4rCywtp",
  "key25": "48tgeFLhVVihYDD6ti1mBUnAKp3QDKGhsQLJdw6BRMxHuxa9UDrEmB4tkpy4jeNKURYDibAbKwNJUhUNocrKvJYw"
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
