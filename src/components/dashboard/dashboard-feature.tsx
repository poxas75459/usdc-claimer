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
    "5ZdvZiXxPfz8Q6cUktminLgP3boWVcoauT2UKz84Wgbgi2Wucyu2vM3yh9C34N7nz2eRKp2TsWbU3UBpf1ZUiFyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjqsniaZrAWFWa34kc9hWdB9rRheTyZTBFRFD41dsbLhHryR5MpnHizT9b94EfFKfsEpLru2d5htunhhP5zDpER",
  "key1": "61RiDvjM35b8ii6ExWpAud4hnye6AqUVjLidASnJjpuTdC8uJCEPMZ2ggcjERwPciWK8pXkG7cX8GyKrot7vTqkp",
  "key2": "65Brnijp1ivTNMh5jbgaRybk15bsg6QQbbdcxfMVKyT9BUfqSyN18B622G99XZfruNY3xCVSD8mpBNCKV1H1dAuz",
  "key3": "zXfA2W1FvLkpZP87suBCBLQGs5d3TMYtr5Kivr2UqZgkH5f81thowYskhLjXZWRSp3PwBD8NmBpbB7QYGgcmiYR",
  "key4": "Xqmme3bNePUMRC5U84f9Ro9ZmvXxuUUANTCqHgtoqUPesczVGknxP81U6EPkV5aQzWqUpWzoSTG3A1PtTCpt52V",
  "key5": "Pfpu4P6GtsJteYF817Co5ghN81k9wBt15mdCA9BVdbe1Y96hC4zbVpfVzHrVCf3rFjPnijcBTYsvX98GaTVACmM",
  "key6": "PHjCeEqYFCdeso2oy2nMB1j9ieeMAwqvXpWrRUqbyZ4QwnpsNzMZVfCv7F28zTBd4qazs5gWvmWSRLhBmNWkzHE",
  "key7": "3rhxZwidbxXkUz3x3u9ParJTasF5NCbZhWyxGEFovjMMh9W6BEykkL61LV9JJ4SCRi4FVLMN27p6jbedhQoYekmJ",
  "key8": "26QuHVYn6VYCmuB6tbmWBp7ytkW1N847gA3f9LkJzLRxRNLGSrHwhDKEX2pC6mnZVWhVrwAkzYBfPivrYEXo5H29",
  "key9": "jBuXALpSGdmzd96uvC3XooJtePKzuG9F5X8ZfKB3NFiDzTwXfbUdGRfQG26vsuBzACA2XjKf5pRQzqoh1GoHuWc",
  "key10": "2bXeHvqXmvLmGsW1jfaah5QRNWbgBYtxUi4Kz8HNE928Hch4s9qcm6DZtNvBaxMHshdYRhAnHrpnbMUaj2iZN9Mo",
  "key11": "4eKHB3q9UWe48REvFEJKnvFHqagjUg5iHj9UUgxhhrrLtQG2F4nk2CA8cgT3mjw5NqsFnWKRNbEVEphKRHNj9jHA",
  "key12": "5JQDw9E8ubXwFeMdgstrUeH9HKMkbZssSrryqoPTjyobG9Jo2Dh4UoXNSwGVDMLqzwJYaXvris4hHVV8fiNU6Chh",
  "key13": "5WcgHiUUm34zohiiJa1yGnsLNaHD6QrJFdK7ZwVtaL3ntroprss1cbeANUErk5d84Sc9QNBAERjmL7uPG1kd4rrN",
  "key14": "4jniHkhQGN2y2DF6UkoM4pkEcQGBqGdDuJM2oMiUgrGfwsXsVnJLNHNRzKpVM4umgzrSaq7JRU5Qahb3XyVdNnky",
  "key15": "3F3hBkv9MmStsJXftWbTHrWtGfyZ77zLmb2QiKR6n2yb3cCm5R7aLUScBybUvkFmqnLnk7ENKGo2tv4Ma1hMLuFm",
  "key16": "2wrcdqFST8sjrPWQrupfzafXtdkNF9mKLHkXPsbE34NiLXEpQ5ERdXDtd7rr4wgfpedAAARLN6HXV4jgNXLUFWAS",
  "key17": "4MtEZw14VydeuLAicQ5enwi5DPCVgsacMYFvtHXhwC3VHH41Es6mJYL4jCKZwmr7ttjUJ7KnF5Ey3URWvbtLNphc",
  "key18": "caJdqj6wg8aU992moyqYUA5FfBVwqgnQLbMgstjGYR1hgb8GrXJkM2ouujfqEo7cTLewiN1DBRNphmQnBcoazpF",
  "key19": "36Epud18DK3deiCKWeVYRnbjC9h4MHpw2rfEGzsE7hciq5BV58UqUepex4rZ6PMQiJ4rSz6ACKj2nY4BDyPifcZy",
  "key20": "2CpuMYiGDcuPs1rd17SHAFYNGAm95tWLUB4CvHxWq12QBtFevtZ5oMDPskUTeca1C6VhpfczJD89tU1jt1f5d1w",
  "key21": "3i3JWssBPvb6w6hryUvbntKd75FiDXJLLNvzoyxUuwJsvRU8FwuCc3GGG77TdLLKkjnNFUZqM5N5mMdvuSps8SLB",
  "key22": "91y7s8nWkn8uk8tXEQLdJ9ZeLYfAedPfnm4PFS3oLkdUVoGQEjsUq4Np623Wxk2MJW8vZFsskxJEUcpGBWokQKE",
  "key23": "3GtmfKn7Ed1c8pY3nuZRibGCikssBpPXbDVT5pUKZmHpF9fg1Mbnj1ioMjrSUsDYkkERTb7mGzTDypqatPFZA3fj",
  "key24": "4JkXXk2cJ5Z2eNuZgFYgCWYfjZiRWDLpEnzyZH1gsVRfks7sSuqvXLKtSQkpwdQbioJoTFjTUz5WgL7VnACRxXZX",
  "key25": "2gm5f1XzNKtKQX8VgMrqvqJkNg1hykvzUqEVwkeoDrgSEXb4c6jA94vi7vR9vNoC5ncf5hJXC2vbq2mvjknJAMA2"
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
