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
    "rHiyi3BZTejgX1vtiHVxMRrmBgHawYZPKjLFv3K1ZA9pCx3LCbugFhkRQkSoDGX2XH62SAQEVDGzgNmkTEkFujE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbPPmRT1uS4Cf6YHEeEiWWkAmsowjsCSYH1W7gnys29honug8VXFQiYYXscUbpNn2CAd6hEAksLEQCyRMn1dJVH",
  "key1": "4NhmeANPKMc7y9Nr7kzUqb39xPP8C1i8WmnPEPT3PUiGckcQLNcMWvsRqeo5uQP1LS8jvA9fhe9xWxp2kGwLUbyS",
  "key2": "JSWX5YUAvbxiM6cFAN8NW2chApBuW9TWuVFFXWDRzR5qzSf8ZyZbJFcffbuMeh3RNYVJKMKfUUTrfuPAokcMi34",
  "key3": "42DjXtkuPrYnqEui5Wh5GQ3YfpkazXSWFY2bcaeUeSx126gLzsWuFW9rWvbJWhQmSeBuHjczCJoqFCRq2FUuYDgJ",
  "key4": "5m9m6m2Yj5NYot5rbdQU9qh97ikNGtd3LceSCFqkLgDdg1jrR2UwEsik6dnHyP3zAKCyVg3r3ujiX5KYnT3uLPXS",
  "key5": "5ypK5T8CV1qahSuEGgKDGU7qi13e871WfegWKhczzRuU4re9K73TcJx1m4cZrPzqeq4WzH6tpRrh3BD6eP4huSi2",
  "key6": "23KYVcJjHtQtx6GJYTKZx87Qc8GnsoCGauGkmqPwro5343Pduk4MGWndNrBdDWpCR2Jo2RBQJ5y1p8pghKwtKZNU",
  "key7": "3rUETXZzcnuB3LMfgZqGdxednA7Vcx3shHGFACvB8nfLWPR327LQZr1iqsxrFyRy2ZDVHdY7YT68Hd4bHM2s2bvn",
  "key8": "2Ui6uzUrKRUMRUCntnH12pGNqCxv5mXh6pWtTefe63maMWdApXN6MVS2U5WoEXDAVKfGUZpbZHVHUqQN9HBBcc4Z",
  "key9": "xA4ySigSHwibZK1a7KhCnYU3MAggK5JfsDqoAwn8ty4riZvvNr1m68FScuiT2DyYH9JnckFm1AbrynX4ymWguR1",
  "key10": "w3jG8xrZRrpnPGiJUnGh1Gz8SrptidaneEJGTufkP1KD9rLvd6rbibXkNcDxsspXBsxLafeXFagLcBqptEvdsLo",
  "key11": "3owQUY5beYk2h6536YfUqE71sY2szksfWXiucsNLmuFveNw5PbtU4fPmauijdDpwP2Gxgsay6AKFic6GwMR5ow1A",
  "key12": "5dEbHV6FLWdbXiWoPCDvVYreXw8V1LVDrvpLn8sAeELfZrqqZPSjtZPXr4hrYEmJfBSz4jZEVvgRS3d3SKyShcJi",
  "key13": "3r3oLk4P88XDP5kX3yymFGqa8pwGegT7HShoJQSXbZtbU6wCdCDa7iA6nQvYeS6eJJrrUKEjmYsNGU9ZzGJWuHid",
  "key14": "2ELA5shEe4dqQBe7b2YzeVP4a2s9E5oSuXvaVoGnn6FDeepaLWzybPaj7M86wR66zij4q4Hp5rp5S5kqym2fuW4h",
  "key15": "571RPdacZrruimUPJKdkgnNVtVdGUtK2HxgMbQh8s5ZD1BPApni34M8NAuKoWLY1Tma422qNjzyZVyDtK1UgAX1s",
  "key16": "3WCYcozmLQTksJKQjvzQ3dQZcBi2gNwdsqagmfoDUgPxcr9u8p6LQerRQq5p8EmXmztfT7MbYpii15itqVGxaGME",
  "key17": "4WRSJCd2XFFWKMZ4mpstRXYumUvcxdFNy9wknb2sDZwgv9qscKuMETUZ4QUzKRdqGTbjfyo739wsA64n6NVg3U5",
  "key18": "3FRnFv27d4cGhtr79fhW1Heksr342iCpR5CTsGcF5zt3wgc5LVvHRqvYXayDwX4iu1fjJvnUmLJ8QM2JasghDqRf",
  "key19": "2zn7sTV6LVRPHkfunNUqfMMbiFv6QetJ4CDPyCdwWTvfqXS81CEiWc21TfECsFap2YVJX4EyowjBexMXqUY8AowW",
  "key20": "2G8xRzRRsa8qsPfRMCJc1bxktbTiMi1wRPJDPT9p8EP5djgdcvymrsRR44fng9JFsmy8hh7wHLiuhPhHYN5UPqfr",
  "key21": "29do5aMAdvngmQ4Ct7tThFySQsAXmnTCWB9Q6aAE2Z6PJtAXkEFiciTvfhJLw8piDD3wYumSeyvtiajwmB17rJxS",
  "key22": "4N4LReeA4zytEBAng7RPqP2npxmQiWQjCV2MB4JUG8iuCQeJvr8z9WdBYA21FiavTmoCZ8n82MQp59EeDgnbPMZv",
  "key23": "Kmg5g6h3FCGPrNsBckdZhQM7Li4ZHqSpivpBUe3FQVDMcL4odriwxAiRnxkYipWok4SHvuXPTGAxirFa6U7L9LM",
  "key24": "3caAAuDxR1UzgE3ZuWFMZnkfhfeengU8qUWv6T5CrhkHRAjf5VaDXpJ3G6WsgWE7BHrNsszn3KPPSTSFjgKRDKEt",
  "key25": "57McvCvjpDJ3z999ZZjcisoHChbLLLxd7TtXyuvfioNtkEdQVjPUDYSUpVhWSegRyeRrEaCW4NRKE85gV1TMoaVX",
  "key26": "3dmCuZz7hco3weKkNyDnFfATYke1eWumywaHMh34TagNsBDhe8j9NdiFaVhUBArQWsTx9VC2EzoB6XkQX1GiK429",
  "key27": "5BMy5revS9CruJ1XJ5yn4eZz7zXmMzmc26wUJox6qdzHW32tH22rkHaXSxrMKS2vjoD4B2FTXjx1whbx63iaN6kc"
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
