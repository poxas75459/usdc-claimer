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
    "yUDQcAYUVJqFRmE2KVce3vpNvQtqrDAi9hidgLxAp1LzRDXJBvdZAjp29Arp8im4sq7HLYhGfeQyYJUtidHgPG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqYUhfyRZestPuimpAyCstsqn3jVRSPgjKBsJUuMhRvPAi9nhd4hF2HHs3LwaNtDVCXfdd2qz94xzt6suNdrjLL",
  "key1": "3Hno1iKh4CATn4Ss6p7x9YhyewspUcetAJrvt7NAZYVnCVygFJdqhctDv2qBsyaxVPNTW331mDhT82hXrAKf76sL",
  "key2": "5ENYtXdTj83fcrfvBACxsmFSi3UTVotmQvy3DxwSU5qYqvXnJCZVW4ExjP3q1ZR5EwxjN37g6eHHtGPsMoYFN8k2",
  "key3": "nUumBDp5NURRV2qa2Gxx1mLMbKDByDWpDxthhqpSsXjjD87dsR3m4rAiW7W8HojwUfPJsgouj52QYGL3ddqEM3X",
  "key4": "44qRVHCtbTw6QMjH5rLpJ3cPfG3M4hjEJLWqwa36qCspBp9ZpJXhUVbXdeC7CxSfKnMf2KABMZVKY46ZBdWituQy",
  "key5": "2eTk6hLEb8RMtpxCKE8bdrysTdPx2qbpuhMsBNKupyBdfmq2TbsaN3xrdQqynPXQEStwKsyRZkvy1U5yBgTvEYN7",
  "key6": "3KL5a5J6Ryqtab4egy7AxMBAfqMGmK5GMRWN3mD8vPCrGEpdY6fSqJpsJL4bGpKm2YjgeKvEo9ZhTdhR6bnV8KXz",
  "key7": "5ryaSWY65uUhkqepy9PuzxqB8X16i85TjQHnu49RkE7XBckQR5T75EQ5EHpEtHVYJQpPVZAcrpAa89fsPJWtT4wP",
  "key8": "5u5UrsMZwNRgzDvFceHDdMREt2Zh7ShFHLuvS5VSkuJu6ajeSJMAGNEZqi8hyzPKxAnjXBe6Spfwi7k8FzEWP1ct",
  "key9": "5Jerag4hgtVjr1XeTYcUXMbgN2bVT69QW9k19qFMGWUD4DmUoi4Tysfs4eWqJDGvGH3CZim2TF5XcxDEXpuJwH7x",
  "key10": "65at3KbDgTCJ755HZRtp1T9SPdzr9dUbAr7B3UVGvyG2CqHrH5ggyp32cPWz2w3GVSRU1UPCGeSyvTUBQcABFH2q",
  "key11": "5D4ipu2gaH6NkWR9g6ckQxz2UZNSaj2zoooCBrnfqpiEDX8G7BZEcW2Ba89L8fnnxdNcyy6QgeSbw1GQktkmB6zo",
  "key12": "RFpQMqLnA4kKZ4ELsoWb4F7DZo8FtR1aUeZtRd1rVsdvKGSeCjMDzEaA1EMKG93K2UpLcViGgrsvvu7MCVfstP1",
  "key13": "5xa31NP5RRDk9E3pcVra334ZHTmtymuErVc5FZxXJW8FskxcepLHuFeerYT1yPUSWb52ibk2KJ9aWG87fDxicrjy",
  "key14": "3xeg2JsTwCK5fquATiWn5cndX2eEckmiBrWkmmKds1kT5s5xqs8VETMoG2BXn7mj8F5pqjUPA6GQzMEQ5emTvDZV",
  "key15": "3WBnjxqSseMw4RF7UmjsNWZ5Bnk4nA8G63egNMhHAymySu18FWYzA6utXN2aWwyP73dpNk4Qt29e8PJrFQHXyQ2b",
  "key16": "ebwGJv6QYZqP69q8g47KMCkzGze2H449j4AxsBMpXVGmfdEjzE5NFWHuz7Egr2paHyLrnJ3REL1tFt2rsdDQqZK",
  "key17": "kyoayiYv1Cn6fgJQDSNoAtdZWaXaaRULHYGLS6h8c7DTa5YqYc79eTvzoBcSVmfEnCLy82dB5ixqA5RgDR3ZkDZ",
  "key18": "wQ5Vow6drEcE6jkivuebZsPycN1h3KHiWfSVm7hGepoths1cqQGDr63HA4Tptf1fz6UaFMRzfTGUb9DZH6bCQ62",
  "key19": "3XkMQNfneQRg4wXJkjKPnBmFWjz3ZW3fLZLR5v78Ro1WCvMope5qsnKdoAyyVp69qRm2MjcpbqYPwmxatdZKAY7u",
  "key20": "4zawphj9Z1Ko6kouH8Sx6ejF2E1R2fyN1ZKmrTMEpfFvDjzGjS8CitrbVUVZPGBW22MoXTBhpcMLqDhGsaym1Yes",
  "key21": "3EKzeFFN9TXxQ1sbByrK7kN4uqFDFEt9F1HGe4S8uSjfXJvS6SUujb74ruCs67rXoWUkEBQ1oxBEezn6ghMdvYmp",
  "key22": "2oFedGciLDZE61o8Lt8mPuLDQZrZULj3DVKTuXPjf1n5GP1wXmDm16fp1DPsYpqtBKfzoZntDovh6w6KRZxahig8",
  "key23": "5kzRwgNWREXkVDSZaLg54siGq2PqVWgtr3ywD1VDwAr1EZwTF6mkPwyJdiLe47cZzeK5j37jN2wPgGocYWRUqs7X",
  "key24": "5JERdwy6fcfTccDSCcAf9juXmBbCxD3FEVCtdxgPvton34emKrrShhRF1akvvF5tp6dUuRUFShRsKFWvVZtkLg6o",
  "key25": "5ngb12UhGjUAc7Ycfw5Qd696eWbmgkfz5RFB8u6nRS8uxAVwKCmUrsiCs7XPQYQhGAtWXj1CfPaFtCqiNqdSxnGu",
  "key26": "2Yoz9MBPvHt8PuKtwMoAYQtHd5Qn4p39QWBMPfwap4PAt2EUEEGzPt1dU6MtANFvFW6NTG7XqHCLpBeB8bchDr98",
  "key27": "2KorxwE97ucDSyzCGWm1p5po4CvVn8kv1tcT1113NnZj8RRSTxUFXQhprnFRK5Uq4KQWp9i7RAiSEiRtszRSTD2G",
  "key28": "4gaLGgatH13XqMw6MRwNANdx7GMTAiPTrQwjcXQiVWQqj1bwgtFQT4QYuEQ2cEbKqzHBtd6o6Y8P9fcgwM22EmsU",
  "key29": "3FPHiwCEqw9a1W1TK8XvjsGvK62m2tGUEjLmbhYbYmFGs1SUqJPjSb7DF3FCyB2ame6YnQNuq2JPtgYXYNjheWjy",
  "key30": "4MqC2f6A8NsFTYjSbXAJjBdbPnDBG7KYf1U6kUEGmkEf8BX5urhPh52EqRqFoQ38eQEFQWLLeKkP9zkGeZ65RJn8",
  "key31": "2MjaDsQEfBgHmtUjot3xcW5RrwGbuU3oH3ffzhg9ekCJRqzMQJ4Y9Wysp8Qsy2GPP1QDcJsLGMxurgUS4ua9uCAh"
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
