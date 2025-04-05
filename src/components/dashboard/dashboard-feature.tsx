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
    "4pvouq1nimZV9jDMQX2y3s8q37kCDPF4X1EJjr5J1ySEykYym4PUwEFWVWBwCTAzqE4XAXNYV7HbwjeAznaMHMDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64zvRzR5Bt3mNTTraZihiBgwt3La8McNWhuQkWSbLoLRTXet8DBnx94ofixgNVN4j5wzwLUDkM4s4EyHPTRWxkZA",
  "key1": "5Hu1b2xL3FxeW9cHsADxfLy2eNHzaphtb4dv3qHyaUnMvHKorVF2DxfnQsZtENBfsnseHa2pY5QSX62a8Uz4BfXU",
  "key2": "5bqQbVzUAEK8bA9FJHoP5xHE7MBpN1AygVv82m77iUF3NPDPwueTsG4Dzi6NkC8QX31yCHxoXom945CvDNyJ9pZ1",
  "key3": "U5PpzuFRD5onVLghNtGDLe19PW8UeAgYz4kaXNdCj7FVTGQL18wuaQftncjFPf68LUR9R4Tt2uspvMfbCV36UJ9",
  "key4": "5LrwTkmKbSa8jmCbihNg5q79xxkP5FWgYbdwxCk8tufuuH5xhvSWwTwYZiot5Ddg13y5bhyb423NcFNGgMQcETEb",
  "key5": "kwKfYKRmuASpKsRaapAy2SFw2jXzFQza38EDByC5GUxqUwDGnTCGRfZzXDgpPGBUhKe3wEiThBhi6xYXetfsx46",
  "key6": "PtpAvZWHyfk8anX8MVGuiXXXrD4bMfy1btyHCdrUnDcBa85D4nyr9t5TvXuZ8rfkVMYJXn4K1pDk5xd6GeSoJXS",
  "key7": "2VAhYoGmTZ6QvbVDj3KmQrxnxQHqkWKPhk3qrYTBkXLjtokuCt7uXfNk76B1yqcnkWs5haKCzmBCZPstS1zwA5Rh",
  "key8": "4PKGHCBSYnzNWjVYicu9wic1J3i43RHuZYJ5GMhiynzzQGABw6voo6amGjgSWyCsMF9Pdsy5tAJJ6BqQ1nMrnAVx",
  "key9": "XjLqM2WtuqW5tDzwZ5Uui519YC8gm2eixYbKwVuJ4GD8Ri1e9HofHma35WjmVzQTk2SfYUjoxFDuUs4NN7nRshY",
  "key10": "25oYPDX6uBajTcKMZR2CtHSh3zsj6Hxgna1aAcmnWzArkeqD6gUQDKZtP256zPsTsw1UHkcwxbJCbjogrs3n2Lwv",
  "key11": "4WG7AoZZbcZJem2Qgupg8rpy8EB6QBvwToA4vA94ivS45Yy4dLo9JnQE1nwfNM9Ggm6fRVqZjwFv5aX51uiPRTP4",
  "key12": "4bsZnENB7TLM11xbj5qECSJ7cvT3MDEZft3HfHaGSCSKgEaApKyqJqXF8g6cSXVuhNsUWdkVgH6bCqTiYCCohCRM",
  "key13": "4FjPJSQpu12nG41ia7Jkf622fbbysmhcryU34V3JbCfGrPCqBfimDcTznVhTt1o5SvMDQBB95y37BnTjQmizfNjy",
  "key14": "3ND6N48ykBCoKQtYEkqmBEuGWzPBLLYebPkkNNYcxjL3PBEoUdvcak5n9Z5DQFDf7feBYLzdb6z7QUkAZoZVSQ5m",
  "key15": "4XhS1g9MC32daeCGkJQMQQuHQB9gQqpAJt61VujxhPNijmPc7g4Qn4Evvpq4gERqxfzJAsoiPkBjAFCmYjVseAgS",
  "key16": "6SJxKbnnoien1bGEeiafyYj7UqF72xxU3RXQGkD3uQ5MR8CFp8cCKTcvMWfDdkALJ61PuS3Yz1DE8Nji1te6nw8",
  "key17": "5nSucujnncRq7uepB8waxHZHnfAQ9PqCi2UHiLuYyKWRBwtMPYfJt4n42e5YYJQPdvLc8x1HRZccDGYaKnerszRM",
  "key18": "44jjwAvEq8iSPfy62QkmYZCPXbKu3yGa6BuHx6MqDbx5U7YFRze7qgC8FBApeqdEjQoSvKXq1z7bP1kW6vpgkTVB",
  "key19": "5iMcvryvmNW1j6hudzBURDjKCEvLQjoCKaxAr2xXkUtmF2LxXwfmtC3fjmj21GV68EKj2ctgyi8oLLAJ5gEHQbUo",
  "key20": "2jwZ9TY8JYMnBRwUgtzgSujE11WdL2uKGtZ4j16fqS7JbCtqmJFpRtvqatMWXuXktBditT5ZoUVDt73G4A85ZBA",
  "key21": "end5RUjrCaUmjx4Du49cXQ8pdELumZnLYaYHfRRoirHpNEJLpWpHPzEtmLWnyzm9T64WjZ2jUAA2gXatpfinMDb",
  "key22": "35ZSgBKacbGupiqJyv3hX1P7FMBAeHyrBSqrGaZvct8jhCm4uHoN4Ud5tH1ac4V1EGWijfzf5XE2QJ9MVhwvuRnT",
  "key23": "2D4vhc6NHsLECKDtNpqwyedK7S8eFApBobFoZG53sVhkswW9dz6b7j25rs6AgHbmw5n3s8Rk1cgoPFp1zz2PhB49",
  "key24": "2RjeprtDPTHey2PiXSHsXQeSG6xuyZmvHcyQ5jkQvPYssK5ghME1c2P6zqnZXj6NpiGTb4g2emxwV7gcyKHq5jQ6",
  "key25": "5ircS4NxPHXHErRZd1AV9m7VaktxWTZSrj9nYRaYZvxHisEFBDBWt4mAwQzovNdpYW6pdT44hLuxDCpoG37YYZ83",
  "key26": "YnidtTkuA8uMTM7dcZD9kzWHQYYtdeDNkUQypG8m47PuPGpQda9srJJjH93HLQCb9Disr8SozVN6Sx2A9bocyKs",
  "key27": "2VCkELjU6NqAbkNUM1DPZvguHmKqDeS7pjYdwMKXL1FbzQRMvno73p7qqm99EEtbX1T1ubkZwGhU2YTY8PMfCfgU",
  "key28": "5zgdBg867g1Ka96fLt4iF4w9TbDLFArH8UcXuNW54AtHzQ2TFsYFhZQ1S5YBFaCBFdKun4pa9ikRzvuwMPS9q3ra",
  "key29": "2kgrBZ2uHXYeFEw6yfA2cEVxQYuBPAxSVLbLidnDGsBNamDSGNiPxZ4SVKYuS3RxaS8LbZdC6acAXBYn4JCEz2b9",
  "key30": "3P1MYCq5sqrSc5REzNJqfJpcnQ1UJhnXVUsP2MQcbASvEQu46cSDQLivnZfaGZqfiLym327dkhP9MimwNEoXRhWF",
  "key31": "51T3e3PpBNw6vZFFVMDutJPqctL1XTX6kBYNUEhPE3fJvwfuNcwpWe1XS56ugDJK6CBqKhSo21JhtySitYn71FM9"
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
