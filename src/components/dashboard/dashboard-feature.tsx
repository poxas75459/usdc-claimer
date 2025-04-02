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
    "2TyaCaRMMn1XmbyMDQin5MQpSczKc7a5xpRtnfN9Ckhq3r9ZBKHRVGXXpAdpnWv9PnwaGBHG7kLiG6igiZyUUD6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5Dvpgd3oi8ka5S8hAjrwmCnLNQpse619QM9sUWMeUu1bZU55qCHaeEhXgTmedW259JSiT8Y4d8gsbdZ47KNzXX",
  "key1": "34nWhpqeivfh9XKzg9Km9PVqgkro48rXEG2c31eqTU1zbEGtuCeUrxEtuHGeQxNBaBEgybM6nq7DekELY7MVqVsm",
  "key2": "qDauUmmuksBqoGFf81nhpq9guV3Rsh2dcpcawdtvkHEikpgDXKpSp5Z6CSBTa7E1AcrNVksPvpjeAppwpxP8wTr",
  "key3": "5iTRPa6x4yjJBuf4v6bsin92Bsbf9brkJwtEsdj13aqaKVMDSMReEAaVa3CUVQsZApRXX1gme2m9sFUo1do4mSaR",
  "key4": "4eSZK77RsAEH8oakJmjWVFV2xxQQjvmKotxrpHUNVioWQg5viBrZ75QPBQjQMrzhoMpVTxmKsCtBvtAKyW8AM1Tg",
  "key5": "R7xoyzKsxe7TzrMQr8VMoBZGWRSDm6ssRSN7aDezcZtWLt4p8g1mwPv7rBkfpxhDKVyAJpzg57TRpRQtMiMusHD",
  "key6": "3Zf2kfArRMMpe4ghRHkZMQJyfcyg1QgcEPGoJAHB71o9FWMdowvjCZhrSaTQodKaZjVP9saWepDccGZc8R6oUHkA",
  "key7": "BXNijoE1n7hMJMZRGCJzj6c7SnRJxuetfBRxJcRhECrrGZUCi76sHGCUYTdVzgBeHw8XBiHHYHGp7wT4NypSmrm",
  "key8": "jhVRFA7L5qTnzPXzeUgDjNs2wm84jqepQHBw8fE5nZHMyDhtgiGfNPeWnT1ZkuZruG8TCTUXkNPFQGxdZR8pX5Q",
  "key9": "3LuMhZBjAJxLLDuY3QjBkJssSia4j56QmNtyojT4x9aRDKrC5Ar5pfH2vxYXTgRGoEAnrxNiQ7sbvxssgk1GSgcA",
  "key10": "3ihYAfaDVScjr7i6fHqnYdvs9ccBAkJCsZdVvz3VHdSJqwsM7hjJeCJQqg6X5R29No6hyE6xLCwr5nNFjVAGJsc4",
  "key11": "4i4FxGZzpxon2Y9VmE9nDrnQdP4LdPtZYkbW2Xj8UfCBfTAHBTmNvzk8fWzbMwyPiLTGtUkjQ2j31yYUHLX3jaHM",
  "key12": "2w2v8sp4egWx7NGJ84YYxoAHLSg4VmqYgveebogBWXbb3FAV63tMAerdK7Mk1Lf28Rmi6s9oAydq9Z9QwdGEoUHj",
  "key13": "67jNiHjRUBBgkCtPbbTSB8emCftcyT5aDBBjfmNHhH6kFBGvFnFqczQGXR1EBx1UFw4tw7hi4ukqEGYB1ZcZa7Ez",
  "key14": "4X2ZTTCNuYJLVjFbqvi6bmtDEAGPkTiCKaDDcrUoz9hL6A15AzrG4sNLXBMrAX7oUjvuSpU1cChR8dXTv2viRUn1",
  "key15": "3ad7HNxBTAtTqyoHM5mH9DHcCZvM75mysbji7fr2bKh7sJ1kocr75JpbAyhARMtnqneS6BSvtun2iAuJpnZ5x9hW",
  "key16": "3XcpbRvd5zUMyYT5bNN3HNQDRtdDnz7bBqvZ45q8QJzEqfLbDJaJUFcqQz24JBZ8pLjrof3mfFz4V1GkbAdf4jVm",
  "key17": "5snFVr9znTkLUmanfnpanenbC54YVXjaKPN7cAA7QAJVG8ZKPRajLCLjGE1NbZUJxqWpo53w6pWcfXPjQk8LEMvp",
  "key18": "CvEb8Vfz8MYToBjognGcxacTmehHpo7uTSQcHjNUsy96xM5G8wA5PL6CuPXDqbXiFZomqs1EGwA6k22Wjwv5T3m",
  "key19": "5vW3HqNbPNoPLKJLH4dBbz6gUyVPWBQN8Yjjd3U8HW8gwaisN5J7YxDVku5kgjCsSMSC7BhRSpvQrrnP1vrRbQZs",
  "key20": "4jHLZH9isgBdL16AJegyfujBYPw5kL4iSwr7nQtUaGCdeKYB1VswCytem23ZogSFCtM1U5CTDyBXxuVjoUBzgeMb",
  "key21": "2c6DmFpbQjjcSSf8KAFmNDBEQJU5g3BEc82buUXyh8itf6FSMbWLcFuBhAeAzqSmwvffyt6UcLZPS6L3avdoE29S",
  "key22": "3VzrzT2VUs3XMTc4effB8946BtPBcjWREKYGj1paMKKFWWVmBfvAmHqSr7y9v6qYvS8sYxxuGhSQZacMaBkwwr8T",
  "key23": "5ELmXSeqfv5RbyMMwWii8nYsj7SVZVYZu3AX4VRrKf24r8xV42RUeJdF2eoxEtcTwUaH8Khn8E9o2c4MT7yb1WSw",
  "key24": "2kj5TB19efvpGb8j3Y2UY6rMgse2pRyvydrkknBTfWbRrzm6ppn6cJ9wkPUdyxSrQrKQQ7bDoT7PTcba2jP5dNRQ",
  "key25": "umgbsSoVfXdnGxSEVPsLPZVVxB8g1m1AhHvVmriZKKHpdMsASSBJAYfRmbRk9E72Led43a3XEkWRPwzf7P6ZEzE",
  "key26": "VJdh1rqwoTDvc7Bzdh5duZQyUjTfn3AsGLDhWCKtFPQw7C2xGru9UYNs3R9wFRF7jiFxNL2ioAjPTupUiZ3vgxX",
  "key27": "oCWXyzAnHQcaAQiDhxxxDoRm3aeGXsctc5SdG128XmGcy7mbaVKw14ozS97uNfUR87prcJqE54B4knKaUss5DRP",
  "key28": "4iMVJEe7J4rUXR6gbN13GqX6t1RtL7haX5DzusfquWMNUv6iVCV6Bp6nzQaEd3r4tvb4KVzc2Avz67hg3D9kXbcd",
  "key29": "YAa63Meh1feRqkH3pGcyepp5QTBXMHQJCv7LQZjCzUrpxBB4W1uDRSsGWgokUw5UDzKKWjjU2uLLMkyFJn3Cqq8",
  "key30": "4drPqtNSqCADefyPKdgn61oeV6zis1nNZtRG3Ce4ULAMuUbdpB1fCAqqLw8J8YZDJWJzHMSLYd387Sj7hcxPSNmu",
  "key31": "jZVuzJdSdTwwRQpQzB8f4uEEUG39aj6sk4Vkisn73CqrtDAH4KZuLTnpy9257bxQqSLMzvxDkNLYJqeqNmTkTB6",
  "key32": "49p7Rxs8kkU854YU6D4ZK1chLX6r8mSduQDqxYFheMVWkEsnY27c5vAJZntYUY5591N5DXeNy66gqRMzg1u7VdgU",
  "key33": "3xieuB3PTqJspxhU5b8f7iWqEmhYRm6Ge5oKzb7YW7DnvMLhzM41voyjqWrmJs6Q1TMXy1hneRYwQLVUNYqKqRTU"
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
