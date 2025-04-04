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
    "3WGV7Nb8KswBJxiukj6mxwpikHFx6oeeGEiB6JgBn5LMAQowGsSYepshgJDkrnfyXLC8V4F5Wh7pWSCpSoxbGDLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7cZRUiYN6xAq5bTeJgrexiNGiksTkGq2VkFpDfL4RE9zTWxz17SMydh7z4BCh7sDt4n6YwQuL2QL8ov7ZpGkZG",
  "key1": "5tG5m2wGFbQcr66wba7sFNrgcsELtZxK8vDh77Sxd5y1ff7tk4LmVU8keaoRW6tuibLo9v7jiU5EBjvxUCJQ3ZzG",
  "key2": "2FfwGQk9WGRPvXZ4eCr2dpKagvaYakhmJcq57YDymeAuTXpeezx9T6eiLoRPrpksNrbKciKsUHSEFtR2cne19LJG",
  "key3": "4DpZPsaZdtMp74mrLy7i7TmRmjBfjUreTvFNoYsyDPJr9wiGLvGyGefXveFXftjFcUQCgeCSf8gmUg6EPwxPy6uu",
  "key4": "2HwxzeWeCCMctMSt3PGiBxvzFMjxbEjfwTJKHwQ7CTARPkfZm6SyLsbpN7VAqX8r8r9Mj78eMxMcCPo6NraQkFc7",
  "key5": "2pM7TGe1Fm9hyADrYh2SNcUj6SsiTAJNcyLxnERHiSDv84warb5SMYRkiQZSicVVr4rP9GQRB91DgryeXSMbzQgb",
  "key6": "31DTBZCHWS9QSipf3xGXc6AuqhA7VGNUAKSZUeaUnHvtdPRYfXKnoUkKW5ktykV5nPYwbvwQir6vA8ofX3wLH44J",
  "key7": "4Pr2gowuTqbDqUPmCtRJ7iPUAh8KbVqSCXVKYqPMwvyfbGpD6qfxcfGuMFbdBSDSbVLm1bnJNUg3SVP1UteQEZzA",
  "key8": "4RJPnnYDQouBD9wBQagQ1EXZrBKc6VtU8Y4MpRuQDv6H2cXF4sSUAkUvX2iChyt2oCnVRS8pXFH9f6pu3BVwcqBN",
  "key9": "4NfzHFtKwk8kNtTTXuzccBRCay4zBvpK7xPySrrGXBKVeSqYzrbwV6wPJ7mt8PmvwzfaZvNB1NWLsPdFQtS6pbes",
  "key10": "2yqqoH4bPSXFxmTpDH97BYyyhayWVhbwamPmuWNvaK6RQUZNPym934TwgAEoTmUskgQwxshbp3rESmrA7SSRDTub",
  "key11": "4MQ2ki1Q296NWFtuQTgqC6jozS4JnSyxLeZUuEV4nsrCvxvehFT4KZ673krkqYR4TQTbYtWh2i4oCYHitGQwn918",
  "key12": "55DyGJrc1c3pQhECbdWGe1Wh9JqaTMkRT9nGsnfZ2y5i45a4SWqF1DCxgmAHT6GaatpikDwaESyxi5HL125WxhSw",
  "key13": "4cQKfva47R928QhZaZ4KjM6fFaAnW92Uc91SeVMaBetG5N2L9NV6yvmpbJY94sFpRPVqpfK8QXknd15ggjwM47ej",
  "key14": "5dMuyQJGCLaUH6n1KUDWoZAzyGcdzKv2NTjb5wLbH6LaPkGVape5PVHcH6pd5anaYGrX98LjKj8xiptF1Y4SCM9v",
  "key15": "33usTecCANzapqXpvXp7DYqmvPGk3eQto3SpDUjMvn2rjhG84ovSeodd36TSF7rPqqfBLMvDumGLTzPLzNc4TmKF",
  "key16": "3PvwbEzCiPFVfDkYahg3nd2EuZqpXN4xRKHVZq9fTN9wJASK9K6ybQNLzPBEvV9cYSRVCCWoLNUREBrtAQrFbJR4",
  "key17": "2WyGN7RLVdiV2JQR9RbHhQgTmqLApM3eDUPob2pY382QtpiSbEWD5WMwdYEuEhdNddRVcyG9QPLZ5fwPMHaioJu4",
  "key18": "5eeUGPANpHvKectTZdCqvBcJJJ4XJYMiDFMWiguRvxSD4DAEPLtwv9FiGVkhmK4o1BWFUBsGGyCCAbTQftEoPJvZ",
  "key19": "2ofKti4HfRLjWKmHRBHLmSBcpgd95nNQynoAoi2Tq1diYkiMumRYcYMQYm191SgqH3k4uyKwdEL7B2usRWkX1i1v",
  "key20": "2NGtvfDgUuhNndBYdot71QQHmHss11nV1ULJu7dsyoGBo6HYj2GwMFpd7SHbsbw9p2MqH5bXrv5pFVox7cQaxTAF",
  "key21": "5sDpzHRRrFPM45phXw1z5EgSrkVLfScwb2SK2cWrxW42CYSbTDvWaaFjrhx6n1MomgxteweRSoWAkmc4yNB73LFu",
  "key22": "4ryLReu8nrBRvXziBdjRUAQuedwseoMe9PgFxHZB1svQcSdaF3uZTbNo8bRXo6yarYjYMkQXK4SadLcjQnCtCxMZ",
  "key23": "2WjQ5xH9BcLhecSeYSza5Z5f7wFDfZ8yxsocv6hch3RRwWYiDhE3ytrMdCQwavmXXxynEHeo7F9YAr7hMuZeiJUi",
  "key24": "4TGgUVJdbaQihqXGZGNMQxDaWxKfbLFRDkFouEeB47e6Pi4x1CmkjZbH5TYasntqvvm3cTyWU16UsFXED8TAFhBq",
  "key25": "2kAyG9udjJxapxT85AuAWEgPi2UYFoznaHdeCPPGJWbjRVhNMhvpQTpmywRnEaaTfVVd5iAqgexVT6VKEFFfNMv2"
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
