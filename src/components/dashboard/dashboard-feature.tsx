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
    "3d3T4DkxrY1NYWMeaXgzTD7j2VGkmUVE2j6Hs2TzpimS9nrPoL1nvR9yBmao3i5bHZuGEmRVhXkyzFjQUXn8ez1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKNwKcprNuwYibRGCHUxmrv5svVEa9wStdwPED52NmjQbAPqRvAxBLWq9qjuYvSkLqsoWtQsKXgc3fftYUXSfvw",
  "key1": "4r58bkdD4r7mjmnk1GaDLnjTDKwfNUbvKua6ZR7QUissEXwUiY8N9dCUeDUqbt2p8NZWE9RMG6m1qNwN2vRzRQKu",
  "key2": "2ZTL8jXhUtu6B3dNj21Bf9Rcr3fFr1dUsMVZcxNhX8bAWNbf68vkHDs2kvHgnhJyNUvXu1xaN2bbQXp3cW3uqk5X",
  "key3": "35bcVLjxzyTe6ahsDKaKD2LDAtkqa7eWdhjyhfiShcPe1cYehNgbZSo7jcu45oJMiFMDhbpP7MqGRydtD5xW5F5f",
  "key4": "4649otGoRcPqk4c2bdkUrA6HRRbmnfRXM69vQkUvUb6qdoy3ugtzihNzimqcPDZ8oVvfod8pz1KUM39tWZP1fPDW",
  "key5": "3e68nH1YEAcDCzK61UK4vu9cbwMwSYDvZ67gxd1uevWHQ32e1GzjrNTBQzMKnTdV4F9PDu9tQ2cR8tHnW3MQMaAb",
  "key6": "5DfSapPSDdgnGF7BP1kwYm8g5WVsNbc1FMZXgqYvDGewYV8X7Zv2JxUYcAsfU4RxJCxpckwRDjyyoonRZF9Cotgo",
  "key7": "5VCyWuEcLenrKvKpCqMSip7z6dsQByB2P8VGGmAeWyt6JABCTeX9x1CJWpT96YW89a7vUTdtKimKGUFNLroTMJWn",
  "key8": "4ZQeizemmHAxy8L5m1WU2RoSW6F4tQy274YS9eUJwv9ZMNd4PXHrN8eJsmyHoAWKnjSarKG3MAE71pVDpjvnX6Rj",
  "key9": "4FZaC5Ki4iBAAHkAMRiGcED1ufxRQVsq9gwLTYwJo18n8GNVLHFcUbRqoMDmmssBoQuk2uybzejhNMwrJ3wbAUNu",
  "key10": "5M4iDV6gmsmp2j9eAyfK8dTFNQu2erj9xMr8DMJQJXonv7RSenbUbKcMkSiFeymSDE9zaEUBqqzZRU95gqGE6E2h",
  "key11": "5x7i44z4wXDWFGbBSGZNCsV17GPAWPsySg9Hs4UoN6N92oyDHcttVGdSPj22Dc8mSFv2vZM1ZgKoXp2Htk6hZrQT",
  "key12": "49fyVntV1QY98GKmYGzTHxfTSLX5ajvDXN8ncH3rEQH1a9jjfQGUqM6jFoQxdZQa8usWUp6VMMtNH4o8r8kgMVnn",
  "key13": "5rXXvMc4o3KQpXPussywCBUdMjHA5cMHCJemYNxeeHdfxUsUBisPJrDVwBuRrdkqLBqNugSqwtueEgqEU2kFChyE",
  "key14": "5rv5CNw1EQ2mRETW6o2XWkMrR4xGpfSa9d3QwMbinCopFMqYGqtKQdqFKiszTjs8yXMTt3UPCpPrtdhMWEY4XvKP",
  "key15": "3YCVqBxZH22xGrcoQ1841jczZ76kd4Fa9LPsqkPYGmHWGvP3cNNDVqYwen124hum9R8Q6pdM2kaTfqo4C2b34JoB",
  "key16": "3aXH9g7Eiqz4thCPTM83p3NymJ4okdn3j4Mao9SjdHyJ13k5EK2Ykjxz67EUMryU3E6eFmTwsZgEhajsbBaUqT42",
  "key17": "5UuS9u8sFqkn8oRLx9hQapFN4Uar2zzhV6JbHstywmitpMMRM9vEjsyHdu2Xbc8GsvbWyWA3tVVmp1x4mAYYxeN4",
  "key18": "3HA5ctdr5MYgaoqkY8L214UXHpHqFz529WBBKmqs9thh9p8ktUwrshz9cSBYynSoAdCwhzHxBqdt5Th1RixnXvP1",
  "key19": "4jV6MkTRxufLMu25cMVF998qVujqLgC1igtztjiVCf2t1cioLRcKAQq6oD4NXYnXDE2Lbbsbjy7C88ywHdTXLxCU",
  "key20": "5JgNQME4uyJixGmvyfGm1LNRThUuUgroMo1qRU9daRTUkc4w2PvYNpqgTNPGhXkk7qBmytG7q5v1szSFSZeg1nZN",
  "key21": "5eH9JYn7db6fhsaFFDHD1NUdgTEZYeEJ2NhuYFaz2KECwMGxvdAmobfjVKqPt8P5i9kTDJfg4fqm2LABVAwEF6DT",
  "key22": "4dkob1uKaXiJZwi2ZpFZmJeVaryWkcJ9gjw27jwi7bvqAhTKRCPSGJB1aMqgTvgfrRvZfZM81sucnAu8eNhZb94U",
  "key23": "2ERg5qCmgQXLJBRPN7PsuZBcS4KdSSLN8ZK5Dywosc8G6FjbKcF7xvkPF7oTDM8EM8PVN1W7DhSwqFk6Xjt6o1eF",
  "key24": "3UWvm7WYVVa4eaDY9Z9MNZyzcpPzkE8MX4TqufFJxvrRrU4bnQ5XnW7TY64AnSaqWZ5hQDDDJt5N7zHKakfHhim4",
  "key25": "z8LNJhk5qp8NkMFsXWsodFkjZzhjeUmBFyNr3MTfc8Bn5XKLczKsaAAQStcdUSeS8gMC5AqjRAETcFcoEbVLSTo",
  "key26": "5UJ7sqgiunmQkZnVzbyXnHa8uhJV9TQRgpBgt8F8aF2oVNPdcBDmnJDfHWDUDEctU5Eo5gpDi7RuaoNmtY5A6wuW",
  "key27": "GT1YWKH1JBEezF7GfcYymVdLswbja3b8DL4Nua45pxDmZMUGUQGK8NSjHSbLddwGDLGtmWsRgSbiw6XMxDmVQME",
  "key28": "3Wij8GCmu4dmkBsxRuPe7dmW5CztnPm2VB1APAacPEzVQAzzZdZxRzkb3YfF9LMtPwfhGgYvEHxuagUQoUh4ZDcT",
  "key29": "2VgKPgt9SDX5jDto3anspheaJm9UGCwnTY3jAJgoRGNEcaPZ5gddac8Kf9StBJs4RvL9p5b8uRXDd736rpJyEMgp",
  "key30": "3tYNd7pEzK3stKzNL8aaE8xfH5px166Hn9N1iXZBrE4p67wSNkL1mvK2YtTk2Dshu8tDmiCc44zAyQF6NcT8wZQe",
  "key31": "u5aJVJz9yyXRALxwA7hcmWVabUJqAVAkZUTr1ULS45QjgwjbQLRp8rDhPJ12khXc7HQyAPQ9D82YEfrzUZZ6sK8",
  "key32": "56tmQkHYWtLkPRhhkzptLMLCY2naPBBAUd2gAnhrBtbHzLgHrrFz8TMF47x5EqSmQLcxJVAjv4CtmS6Q3P4ePYL2",
  "key33": "5rEe6EfspeHHBbXGLhLGQT6yq3dNTCPErw5A3EDg34h81wrT7mPvVTQ1ka4QwbaBMBjpcDXsV4kRcCKd3AQM37Ze",
  "key34": "3YP8c5zhQW6SNrQKCFDDEumrsRCXTtThqrWGwAGEXsiwwCnoty2Ni5M7PB94HSvvMjYGxKkkFjJzhCCXULdW4mpr",
  "key35": "rFP1ehKH1euA8eg5fNFv91tYBpaW4dkUwruAgX4qnFUfF7CmwEY1W1kUHdTNFCTAu1ZJoa6QZuveC8VEUEmjUNY",
  "key36": "5Ufud5bcMfXdBF1qCqxMLRXroFbknYeUckMAqTHRyPPKtzsyFsEEGCF5Qym9BcTk2mfuFuQr7vH5GVkUUfC1EE5P",
  "key37": "2UGR1WqZka5vxVWyRUecf4BZ3RVm6eSAz5ATS4Q91aiSkFoNnGxqK7V6se8FCVFCxcprnEx1YBze9q3DqsTPyvsG",
  "key38": "3NApwUjCrVXMJsbgeGKVYAWKAMAJ7UcuFjqurNGRcmi3GPLKsRs2Ma1SdtM5wNsfMu5xXQHXYbJyJ6efH3caUT74",
  "key39": "2JqcfxRYH73K2p6Epx4Ba2QwRVaaaca9ZCMV81ezj1sBHScdKDNeFUwczQuSEzumhWju4zFkWPLZCqgGvEfsaCoq",
  "key40": "546WcR77WbMf6kkT8kPagATdLkPvVVRUfGg4pWajxXFVzKqfvCygN8762jCTk5pDGMJ3uUMwx9PwB7LT7uo8gjU5",
  "key41": "4mMdeJgm7ePiRs3iKkWQp2BtGXhYVGjv53dv9mSay2f6GLvFgh5mMcmFptD6eFTdN6B5aFJasKYmtQNZ8UirMe8H",
  "key42": "PmsM6y1QWK2u1iBRNCSgXBGNTTBe1w9FEKR4oWCDrgMNupK5MEfZ8eMinof5P3NVZrkkB3EahiXFzJnJte6Rehi",
  "key43": "YS3jrp7VwbGJ9iy6QB3YXe1s76BZhaVxw4uUfxo7ZhgctLq5tmrsbwJgxhKbFDnQv8kpGLmRVRgPXurwoYf6XGn"
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
