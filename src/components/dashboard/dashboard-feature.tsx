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
    "ezccni1zPjyvHaC8spPVVkC847w9Ybmc5Ce24JwnM1C2DKNZrN4fkbzBPFmYmVRuMk9ddszdLhQzxe89ozf5r4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51acotrWMcR9NwDyYNaHPjVVhkXMDsPj5A9TT1vDBYh87f6vJTvf6DnVZ4fk2sMiLE3PyjuK2xvb7tJ2r6chWZQK",
  "key1": "x7FTrjt3x8i3VNz4uZfmQsw4dmEH5ZhaiheqR2nAg8ZpssCNVoHMSMZkYRmQ8RoqRQ7Y4C8SXNf7rn1YxqSMysc",
  "key2": "48XTq86PbFwfCKR3UCSp7jWvEVQsv6uVZG3Qf3kggoPri22GAJ36Ey2KkWTmc8UtdkSiTX8xabMUdeVBdZVvAKac",
  "key3": "3Y65bGwAoLmXxLhHpM2f7ucoNZf2vURNwznruzUuASRo3uvUP4m4dEYEJHwCHPS8MKZJ1QvGQjMWsc1gZaidwyoj",
  "key4": "cgWjCaUWfZrMzYviMs1USA7htaBeDqyfhrQc4pjoqgEUc6QzAWaunD4JkPDoqmcmkBgDc1BBRXGfdGtV9bPk8pG",
  "key5": "4mkU3BBcv67bLNHqJtgZwQM9sez1Za2Y6iqoHPP63HNVBY6tdW74t2H2zPgWf6GPBW7JFhGphg45yF7bTAXH9tef",
  "key6": "2Vf4DNjzxUaPq91kJCUgLoYqDwsZk9hGUFMtZAgvpVvqUSmSuTH2DhjcFu6HXjV39E27Z365s3YsADfzEgzj6LuH",
  "key7": "3NK3iUD5gfB1251AwNxYbRJGqqxw8ifSXgHMtFbktanZ2FFB2U67A727YU9U8j7FmJak6NEfMNiFFNJh56VFUqdt",
  "key8": "4RAFhoqfuK36B6dmg2qb7HNNKwZHocs94zoDvHmSrctb8rgJHEF1v6Vntyia3mzr6o6XSpvJfB4Z1MLa1Fie9XQE",
  "key9": "7LxEFe1vhBpb6R1hJm2CtExxwSyPJ1ubiMxcLD8fnFRzFhmdXmLpeZp2Fw7Z2kRWEYF6dCT3SZk2E5WHkdpqMeh",
  "key10": "28kvddLiqfSspwbJjAucZNbu4xEP9TBMmX4oMFDkr31NG1bFpbgFjmt9MbPHDi3EiZqUFAjqHLwHqa9qkCJDSBXf",
  "key11": "HS23tZjZejkpMmVQmPvgpoxBH792ppkdmtYLBMbUAf8fbahdU4kTM8zSYUop8Z7CA7SCenB3r7za5Z54ajR6fUm",
  "key12": "434WRGxNJAAaWrreysqbt1PE5M2dSrh8afNN5XFvK1PQGom5opyLLR72m7rEz7WzM6ua9F68vymxoyLekk6ZXzsB",
  "key13": "22sWCfAFXrq1XYRmtWEev9NoLNkdPWcJHSvhgcGcvk3juRegGgNriKPNj3WscYUvqFmJpWQhtzGPKynjoGMTxvMj",
  "key14": "2SXcqKfeHH5Mz92TKPC3AGSauovU8wyVxQQYGnp6oGZYzPC2MVH2DadmKGLwnrbanMtXBbHCcUTLSs7SdcunAuQR",
  "key15": "4gacaP2CGFXfjNwfoyUud9kWZcRxH6Z3T8TFQNtk6LL6dV1RrHLUHDmimwzsQKf2XPCQE4G14XAyKRYVUYfRgjCE",
  "key16": "2cZ1Jga4aUkZnviMcBJa993acM5Lm3EmwBaUpe9LG7qeJKGP9u9XueHiqk6hHuTbvko2SWwW7kRzS4Y2effQEDQc",
  "key17": "2ZjoorvgBqQh3Nh46kC5fG7cFDoarR6igTahLo1qwMxigFFiqGD67jm486AA4e9w1w9n6REamvrfw4Sg8wKTeGQW",
  "key18": "3oAkaTZn7JjcSiyHPnRbz5yzD8dw5oYFzJVhcNRFqwwxmfXpbdnWnXVUiy1iUjjLX8LDiHjx45VHwpS9gPGahdby",
  "key19": "22pHXV5fCU1d3uucTdNG7b37qFpcvLWuiXjFR7pEv5W81kJwq9eJTRX4xfYu5t3We8rAwf6bgTCPrBaL9KGFi2ay",
  "key20": "5Z7WRQybSjPNzaeHx619UcskTTTfVDNCmGAqRGkQ5GsLNowkQVBnWUJaxK8jrti77qPwHJP46aoHHwyGwFA7Bxkw",
  "key21": "3LqRzoRZXJRmhctsW4DTN2cjps2b7sAZgPzAUaRvBx77H68VrSjbUkvujqVcfECQe2mZvpDPsLPdXxTasGjxPkrH",
  "key22": "3g6eAdXKvdjqtJApZq7Q48bc5LEehyDeXxEAajGBwuS7aZJXdhLZ332v7vYpYHBSWCafcLrHnw7zYRPsjhfZyBhe",
  "key23": "5zMixB4DyTxTrJv8hZ8jdWA4As76FAeUgHZv3KFGbHEayBbkYNzHYTguDvNg1usHd3EBiW6PcmDAbKy6QDCceQk4",
  "key24": "4QjDDQenzeFWcvTjyQ4Ji2c8HCtVZsMx7z1PAY99Gnmyq5AqfBTmkU2vT6grTWob59D9KTvAJGDSSjymiLFLr71G",
  "key25": "3NhB1ydFQsDR25xJa3QDXu4ZtEXC9oJPyFpEnJHKw2xWP1wrkVUcD65FLioGKmSH7VJ8HKeW46P6VU4rgU6FeMPd",
  "key26": "4N5DvG8UF8scQF4tFaNkwyFs8cPzmHjhzB2NntGTt2gpxLke9tXLgxDfkRBpapeD2uDrGJc6SxSV9Mc86zgtSfeH",
  "key27": "2qTevvx2gVE5UHjuUueJs9bHnN2XvWqAp2hFq8aZ51vdcpobs8XhVdfUdUHjbsKi4ZWiQMRPiQnfhdaaDwXgLxBk",
  "key28": "37iXLSCES8UgzSjNVgWeWMJznEznVD28xYsrCbmqgAKx3jEYja6mDPMmM42uKKqsZ3KHvQamGEXSaLvPUYGYJHeJ",
  "key29": "2pax7Vu6vVQsm2mdDcK7vk7m9fR9ReZmVnjERofWPFCsH51FmeMTtYFAX25VcwvsbAdurVj78XG5iewUyPwb1Ri8",
  "key30": "34NWYMcN4iszajLQmaUPdK9rhrBbGBveoLxEvRy4Pr8YB2fc2ReTvDor5X29U6frXNg6CsfDr46hEhHLVRuwbWTN"
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
