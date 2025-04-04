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
    "4peJxH5zzXMjSBXzUw6vKDP3juNtt34xYedfXe2NUmZxqkxq5ttA6Tr45Ud3jsY4LGi2d8b94TWuRELoRv44rZKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFXaP4xRpSJC5hbzJkRhwQ7LHBTWFbK7YDQxoTmRmUtcT8qSnU4upPySEk2xUpjNYMfxjtZGx6Ec2mzCTfihmPD",
  "key1": "51EimsDN7FxZBoNkKQptrLqHAovM8FQCo3FUdMNXRcAUDQ3Hrp6dRAkTWvggoG1KTokxFshoA1ysNpNTg2w5MqH3",
  "key2": "3q8ixfdpXXVt45eE4X22D5d44t7hYsrGo8wjSbx4B5YnHLmf7rWvCsfUTEtHxT513Fa3TMh8y3SZyBSfxE5kBPuR",
  "key3": "38oKLgpVBTN9nun36E9LASp4ETXAxms27QARHou1AXFKbkJ1qiLQH7YupfzrSV5seVX5cVfF99kynVybCDguwxA2",
  "key4": "5xD13MKWdmRG24qvsAn93HkTyLDTFjMzu1REwfmhw9dJWnuwShWwAPUpWBRhqruvtaL3TvhycaKVhGFzSa838DSW",
  "key5": "8Ax6UDRQKoEyEh6rPqjPTQ1QYnpyN9R6TS6RnVfwEHC4XV7ZiZz9BuEEq4kaZQX8bdvUSS4JHA5ViFiPaXaniKp",
  "key6": "3nTDWQWhcmqnFeJHRneHVefhSXgWvYK5oe9NJYRX3F3scW7kErzGZG8hpzaZ3swcXJuGahNQbkr2fQjsgAMFVwgu",
  "key7": "5cXpSQPBVacP7VMohc4cGuZUiUbGjCATk7K2jF3RWnU3TJRtPfg5Xf6DnU3KGZiNLYXgRsqgEJBbwebwAaB2sX8r",
  "key8": "4A8sCWkMR7wN9i1FQFT6zUKdePz1oEyFQAZx2iBmtvQHCrnVg22Lmpfz6vmfqt7VQf2PyWCN6WErAgdUyvQ2ABRz",
  "key9": "3TZESaDkeECX2mMEDdiGuKqMH4mRavCzY3UT7xRx4G9JkortySKPmk8UBsUsP6n6685GWKVpVdaYqg2bz7WmNwBW",
  "key10": "4s9WkosRwyCGK8mitCd83xDs8keKv2hvS8vXpqkMAdsdL8xUR5qwhnhvaCLcjM6K9mVAkd86x1RBdnq4ERYnJeTP",
  "key11": "38Wrbzjvq8yAigfvHdMe9NuNRcEbSFq9Zp3mWod8bnMxA5RZ1deQgJ3qrxyFjqyWhZiRj3Xt1KHd9Mbe7Y6ejYQN",
  "key12": "39LpCF9HeQ3c5ppqoR5fj4YRHBJXhiZjq9HC4K5CeebNqFamwUrmVeyxS3CgVd6Vmk7WWbh3LtRyyVEvPCAnJHZf",
  "key13": "2LuJv4QKvuP94dZkvAvA17C6SLZPkTCEsrnBWkegeyRVcv7BFmQH6GFiijvsmb82ZYFHZJxGRQgkAFoSdSUL64hg",
  "key14": "2nxCQwoeN28KgjhpDmqsyrpx3udrKcTarDrR32ivir2mk2kymaJqUotuJ5jwKpaLQP8R9yHB5ABTCLvtT8ri8d5p",
  "key15": "4NKxKWwuchT87XDh9rizNvgMvfvuQhi9QbgCDmHjENiqEBAgMLFadnfB3vF8GfrWTjTNvaoK5sMGKntSZpGA5NoU",
  "key16": "64hNWrQQE27SX975UMQRbq59wx1eSNNXMVSUYDZmS1Gms5CvdP776oadSfWB5gz6SgFUGTFsXMQP9WGaYsKZSJLn",
  "key17": "2PcQLAcL9FXV19jEYss6P9RDB9GDJqCfafFVmcPGuAYuo3iFBQ4csa3t5EqcjnUtCqxHoZtoybwke8ux3SSZtitk",
  "key18": "5jbiKhgaECELs3An5zG6cQ799nH88qviCCmdg4MXDB5prHKvQX9e31q9mqBfumKcYvGkU2qbmwXZnS6GrVDGUmTo",
  "key19": "3x8exjhqZY7DThRdzmTRmMB1xaU7xPe3PdQk1nb2ee9tTvDtV4Di13WxAPWWV5F3pCsQKz6vvQgSPzMrjYepYVDy",
  "key20": "26EQn32TdS9KKLAu4bgNUmueGr3F51RDQoM7Gz6FP2DKYH1uReYfyFweNKt6nWrNotCnaRixQ8FjhprrqsDUTGRJ",
  "key21": "ZGi2tcGLkEoqizYJGKLmLMHExyMM9GhkQSGDweBnTSRZULA5ypimZnoRV9BedHzCCfrXS2mf1gWNKbWVdc2JCbE",
  "key22": "3U1VupcrkHVej1Kpf9J7EvZ4P8xhUU15mKNEuZgNoUFPTPdryYMn8a5XTJGDhfLQ9Rp3Uu8Kc9Bp9fEbxVD5cMSf",
  "key23": "umxZpJj7qwudzQUoCyGZJqpXDcyuP8PNDWj6peBjZKpSehsLKT4VyjjLNh4VCWCFQc7gDVbsUP2zozv8yhzUfCF",
  "key24": "JCnZCKFa1xT2Zu8PYaCzWtdkPsgkE4aRJYSGdYfchULfvUfdhpJz6sM1F9YF4Aw1JrhQUdgk3j9Z2KLWAFHDSuN",
  "key25": "YXij3BWwVmmK3Kdbg5qnhL2jrDiagmerhAkG541vswquDYYj8pL56b14wPZpAcp6C4KbtDzFJA24HKHBVwounXb",
  "key26": "vZp8M5nzAxsApz6aS1DUSU9y2W2Bbaiwq1SVdHQGBzuXHiNtig2zKs77rWjZe7CfnQE1GgAcNetxweD1ZLsVUxz",
  "key27": "3A4n6JHvhL8H1PQK1bwv4KeAX2kqd4z9f7UeHMZSwKaq7Jw5b9a1hgk6m1hePzBrFZVmsCNs3xrHzsVd7NHx3pz",
  "key28": "2jZw4hXh3NbqcJXtpw9zU4yN3woLRTsrPCkXKynspDRStCmrf2chGHpgHjoJQG8xa2LphK3CXucUKbEjUBHYpkHX",
  "key29": "3TaFFHnsG1FPUDH1jC2pW5HG1gP6yf8RYxkXfusQh9xmvGtg1Zb5TwsP6VcmawC4peWUBC5NGADyLWZqDN7KLS4X",
  "key30": "UAAPkBr9srwNGJf3QyumUsTpYgni4dwwHH97JFF1bky1bUdFV8kvdx2bKq5VRAyFPzdrP8SQ5rERg5nVacT436K",
  "key31": "2zGB2VZLoP1zdVvhJomjo9e8qazavXh63Nvj9dXgqDxtkDK5ZM726UuijuA9BNx8gAVWMsp9H2cbuAnCFiuSFgMT",
  "key32": "5QRYq3W6moZuNzJTpGC814M8YyU9XMuBA7cZBkSzeKkwFWtwXwEu691BS2pbySsSWF8C2bxioUqqZKnSgFJqFHup",
  "key33": "5WYLVNyRcqyod9HTJvzqhpHML1C4zH67xMovzdE1U2fVigZx9oddjfYGRQFhnuPEU9U1goa5Lv7hSexjhY9v4qkd",
  "key34": "5yZJ7L4nB6zHmYVqL1pAEaWe3dh5A4oG1rMwzGWprGxg5cfCRG8TGhZ1Rn1soyEto2tYydzKhAPSa9Hq3S3SzzST",
  "key35": "45tuGzQHSYfhadpfZBABRrrphi8EJAq2zpxC7XcyVEzsPDYiWKB1CZUQYuCx9ubTTzBLKdk43VSG3JsX13mWbux",
  "key36": "67LiAo5ruMtdv1rbmaPcxF6eiBjMZa1rqYeGqMouZ1FuQxbsDfUj54HYtkNMkmoKdUKTahi4mWDwxs9VGu9LvHhe"
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
