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
    "57rZ1Vsc2UictSeRmKsMS5pur6hcF8xTiXd1aG4MPV28tZU9XqbqBeMmn5JuaPeKPpu5GiQu93kG3KwVgeojjthw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5PdfjF2Mupx9xDVBYB1APHbJ11JXesQzBH9BmGYGAgo2uQTdkixwPMHaiLYYJByVWeECB2Gnt9PHx6v4ndgznt",
  "key1": "jwVRqAhkng98UaFW2Axuihv37q8p3ycJDGSCcG4pZe68tg6tTDZH56f6kKtjDnqyUWi3XU3QkDsJmu5p3Vw7gst",
  "key2": "267kBeRzRT2wQPVwuWnhYjqktvVaKEgL3ugU6ncqinkRqatAgbGbBLBQ5tsU2HKczoVWj9CokoCH3x1W8e16P17J",
  "key3": "5B7mmtfmu2NcDGzqvYnqrJLDfnMxx7qG2BNCJsGmbJ2Z81XruwC2ZhacLk1nkg3dddDxi7krrFpMP49Ew6QMutJq",
  "key4": "5oUxDZxuqN2Afws3AcCF7jDfbYWQnae2ssWDG4878n8JpHi2FkecqoDdmg8Au3BKGuttcfQQh5pgBy9nBgRS8gK4",
  "key5": "KmET8neYuRwyC47GWYXGNRCCSh9JAtDMALRk6fZbSZidc1fvxAQtZMsT3kr1KF4rCJbNcRdVMDUPBSnr9XYiksh",
  "key6": "5EJuH3eCF6Lz9J6UNg4Rhg46TLA6UDvq4DwdsjthRb4nf84pA3S267ZpZ8bDtd2hrafe3i1AyWFADCuwgM4Nfh2C",
  "key7": "3xSxcw8N7BR3tqyGe78wDGxkTiEVP3X2LaVbjCtQL2gcHTpRj2SiY7Sm3wVFzaqh5XM36j7zaBghBwK6qwdbi7pJ",
  "key8": "5fNYE64MtMmPUHViZaeGMsFJ7JizYKJAPCYAK6EZZQ6unDTsQFRCyt8d9K6FSNvgKvSYP7D7u423ZiEitEG7Up7y",
  "key9": "55Nooy2328jPXY94r6Mz2GbRnt7iow7asfUrFVr5HzQA64bgH25v2kJ7v72LE4BMT2qrvpN8C4tvFgduWQrQUwiL",
  "key10": "3mGyuCeobZLynKy8RfVacsYL3Kv3RwRhsdGc33xEzp6eaJWTWsUaeU7fE2pNmFxDGNbCQbny5PH725YR4hNGf4jW",
  "key11": "4RXgRbvwTw2ZNrUpDpTV5WMtYfTxxoFKHNcb7PNhYBr4c235GBf8HFCVAgrvrC2iatKzffcVC1swDafMHiJpQsEB",
  "key12": "66KyLNtMBJUTkwRDBquw3MN8wkUTkjXLJaAD4BYpXANK7isHrBHWV1UmPD4ivMxsXEYMgGbA1ekk1Gu16DaTyUz3",
  "key13": "gYJT6h3mA8VKUG3C56ijjPZJG34EEuPXpPrWzH1Yyw2u7Ej6PX2un5zPiAHv6CPYkLhqsj9rBas9A99Qy1Az7Jh",
  "key14": "4kYDmiEZySxbHNompch2GzAgXMvBqqEmpktPaC9dq4tnvphEDxMGCykjqUH83DmJceJS285AMqMvhRQ4pnKV3Goc",
  "key15": "cKRt8ZJvcvVHS26wUx1y1qYay2jzdZu8MEFysA981MtpLL9NcGeMDcWARiA5kjJ9zLyvD75K1yjC9GiMf9twRRX",
  "key16": "4emiiMfUvyFprZFU9fprE4HdxAPTr2oUbsUbK76w1ChUYKdTksLQDwjd78rwna8QsNgCVttTaPKQtFanqQy94fYE",
  "key17": "2t9xWnkiqkmmAmAMtBqSmZmj4YXKS6f6AWGGs1vLh9RtfTuD7AKD9DQdPsTtVXTFMXN1UGXfhWuS54hCE5sEMxd4",
  "key18": "3yHFWupZ4M4bHDaUWmDKUMAJ6UmWB59dzEDju1qufXC13jqMt9zokDcqwSGH6mPNtgQGE2TALBn5wXZ6JHyvwDrZ",
  "key19": "67kTn1xWqokFx7tzgdEvWUvHmqxW9XGeuVF6yNkcbYzgPidoaGbbCeyUW9a2F6k1p1A6UpwA3pibL4NAhyLGPkUC",
  "key20": "4m1rvc545h9YnV5XBHge1uyBsYtYwDUdnX57DvzSZB9ZZvbo5giVYkFiT9K9eJjM8tHGZpzHC56Sik3p7DtRZax1",
  "key21": "38zJt9irf5vABpu4DesTzPPasrgAWY6pgfCpaDB5E1oBQRS1Rhb25TD2cACsw5kUFpyEZZRqG7KvcvXXQKiRenB4",
  "key22": "3p7NYwvaoJ7xchZDLksveVLuEmvSWxXikYBGF9amMHAfFm4qBobAnjFTzxuNF5XVTx2jFRjMMk943brfrtyF9QB9",
  "key23": "9PVWQvQcbszvfwvbFXVCX5rMAiEBGQvGAk9ZxAcs672UNrdPipGEzukaUXnJn26Vvqsdimgmr5BBKBhpGkPHBqs",
  "key24": "5hZfe4Z86HCpH87h45pMeAo2aaET7d4rcZpZ5ofGibRoz1wAqYE8joqMzWXt9k8EopsPNgbcrURRXPf31MyA63eG",
  "key25": "67jLKGf87dtcEU8vkRyqrfPn5CKVfxvUCt87c4AxrmN4abizTgTE1vnYVhbsn451doveDuZiCZTNzu8Re3zTDkMK",
  "key26": "287gk7maunQwgNBgyBTM5Syxw7QWK1DJ9TBNmv358zuFkTF9ZhGvRTMUVToxLQFWhFay9JT4oPsbx4zo3jaYaV5X",
  "key27": "5aDCNbmWJFmGBQjB9f6Y6jNWFF3nmpzFekUKBevzyhMwQ54Nhw9mJ7urL9o6whbCk1i11rgXjinA9BRpQ9WL1UWo",
  "key28": "3unDtbLky14a1zW2ZpJUVULq7Ny6i4KYsHuyRdwxWhzC1n9JxxjRA8JUB8dfczwJNzForHVRPsGp8yw5d6SaQDwJ",
  "key29": "4NuSMZ9WsANd2ycEgtAS2YafYUQQyMXYpSrWdeRVf8x98JAjCHDmy3k6rmEyghWgeAgZPagdoQsTkiQQZUMsyFZ6",
  "key30": "3mKHB1JbxPS2uLndGpYsxvhARJyTntGGa6nJDaNsmRvn25vfuQF6QjAHUFdzgNVE7dWfXi1qKBjMoBrdDUj2vCDh",
  "key31": "2z9Top5GdADhp9xn44QB1bgfkEfVkd3E8eWAzVba4g339eEAqnEsofv8QxHV6qHL7ZFsvCrCKiAh8S9gQrcYUAcD",
  "key32": "5M7shgj26entxextQeujaKamiwEjpoXTuSFjuXK15jCFJF5E3UpZfwiV5MSQc1pXV1n8EpczqwhvbpFV5npu4wvc",
  "key33": "3su8qKGHu9AfF3bMHPw9vRPHgLcCCPJ1fQkN5dmAxAupoWczG6g183gydvSfsHS4gLPsjXT2MhygjWStkgBhJsGH",
  "key34": "3g8x2EhwGESv5196y1HWwoUjDose1cFtovUY1dzBueQirs2Y4QniVBxL9u9vKZcZLknmUg2JEd9U82b9FrYDAnvM",
  "key35": "5ivPCxH1J3DfmjcAHJWZgQrwnB2EAbb4Ly9cLtceaWBD3mxxrDSeVVJscX11BFJkMivXZSDCzoY3NPUKpuuUcBWC"
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
