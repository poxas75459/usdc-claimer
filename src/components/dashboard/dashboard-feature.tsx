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
    "5NrHpuDwSSk419d71S4Xr9AbmC5tx3ZuDZkPziQpQh6faRpqSrHBhAj8Y19h861EbKgMzFvUVaPQ6bQ8xdqe8cKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jrbMRi5aauowBjUiAMMPykW2wrggrBY3nuSm4Ai8gqmwVZ1TyAH93M9N3tixGYLEm5GY1KD2PZM7PPUKtcn9aL",
  "key1": "2ksTSh44m4seTeeCNunAgsrSUDmwcyUSJxcWSLZ4n5uPKP8Zcs63TUXawRAb4SHiT2TAeCfGqLgtGG8k7vrhNdz9",
  "key2": "5fM5SmCznAxswPS2bS4eNP6S8dEVmmaw5jjUyBEXrZ2eJEPsPCimB4whugyYiaU2y2yD1xcsQR4wzjgeCn1qHmpn",
  "key3": "2aAWB4emdJDf3PuwKDWt1kZNXdpwpthSTUBLpYuMvBBXf8Zsqrt6VMQ5eisCQabC3cxHatg3ggkvVkoMz4gQwqTx",
  "key4": "QRmsF2PGaTGdhc4WoXgLmARTzdyLXmVuQw9kWvzPY5voSrBpaWBkDDULLJKZvqPAMeWUEftkMZWofyPvnGfBQLz",
  "key5": "65cohATycmg4t7eYbhcHmgvctrQnMJfDQ8MyLMMGaGqdVzC97c25qyijs6WA7BQcJtbU4cEBZap62jik9Y4SkXim",
  "key6": "jG5bpxepekeRn8hCBbSp9gaJbadDPSpp3FqPwV9SsT4164yX11eSrsmBcLzAKGBcRAKFwxLiueavKpYAtoNXAeM",
  "key7": "2G2LVwxyVdxM4uK9Fdb4fn7Ej3PxdXiUqDrFrxeWTs1hedwDN5ozy39k7x1ss64VxV6igU8FhFTT3x6os3QaRqzN",
  "key8": "5c21kb7GtCswMWdUxHM2pjugkBoEYbJDmQA84d1jHut1bq79V3ciMqfc9mfYUz9JjyfYaWi6NvPzwpHgEDaMzkp2",
  "key9": "5i5zs3BCdbWyRvhrYS1bf8Zn7oy5sJrnPBRu1UrSfGV29ZzkoY6dqmrgbb4Kfvb2qHsM8QuY8YnmWHgZm82mjbQd",
  "key10": "9uSiY6mYfD13AhpU2oYkkHoWeVFWJTq4wEf8iu8WQvSqhGW9Yp3r6inJMNEvCnamGg7YbihGoGZTUqPWfB6sjHc",
  "key11": "4ZkauiyAnrHChgngue4SsBh8e6WCKknAzFN6rLvEf9ecRny5eNtQJ24V68NYsxLS1SSiRDt9XpFGAfa4qXkAaQ6m",
  "key12": "4D2fF25v7VCvhAN1tiD9FVMQeUo7M3rtq5t4mqMTm3QczUzoFwjM1TDWYmyPQy5QcPumsDmgWRcLkNkY8xhZKhnK",
  "key13": "3w2H3Cjhk7bPNmvPjqC5E249PWM8jGTJ9YVzsFWvX6SE5XSQkmHjN8sbmZVf4ULbPQ6eyxYoaxedzfG1HqT3qG3r",
  "key14": "4LTfBYYzFLZgiK3PQrWm9KGncZo6DNdE6JevnKHFHWWTRAedb2knwmG9VWi6bWV8rKith7JEwP8Gc9DrjVMAi9vV",
  "key15": "2k8GenYkugJuzvuUbNm273DtzCpabDTDiQrR3rDmNt8kAbLgbZV6vRBCCxtF3aYLsdN1pk9aoVCy815v4vdRit6c",
  "key16": "3Jrk6SyhCVD9gZ2mU4qcBJvMU17vFR5zKGCkXQErAyUMiAQ8iKBEzv1MBkv6uGsMN6BorMqz5ZSoYQXVPshsnh8C",
  "key17": "36Pjdm4xQu5cHGP9HmGiXCMpE9kpqD6h9qKYiGSwqMVTXWdYUqErqHbrNf83CZj8SyREGmcx7ViCFm83mpinVqwK",
  "key18": "bqiUUKhSmZyNXeYZf6tww7HZLKCn27y4Wab3rLCqwy5oFcubHbrnqTe2Yt5xbmyNEsTeKWHAxG6rsyjDuX8U5vm",
  "key19": "4e53vZG2kdhyWng2aoaTfEMiwufepLSN8YjPHKoxVfTSRa7EnLrG1Nuy1ZYJXKDE9oXrXJvXLwmhzphnw5qVr6zx",
  "key20": "5avBGVCLdzjwvD63zu2jxmCKY3zEcpEzB1ZEbZU5HvUboYijaoDHquwRbsApwQws1PtkQB4NMEX3wnG9HzZqQf99",
  "key21": "4QAQTqq1RxwFQiknB7qDscZpTBEUvX4MmANTqF8fLkTrxh2ZCrFtKHTSfG3dLHYVtZQP2BHHWeeYGTk14of8VQtY",
  "key22": "5YrzjaGGQQwAvwBm13Bf3ogByWmqjWaU33CeYZobZbj2j11onCAwswx5YZbuj6nJ16rsHniU9KWEv7AvMnUYP3k1",
  "key23": "5pnp6nXje3KAGudkYXfMZAPT565Zd2Uf1LErYymKEvCQwgJxvMxiHf4i4R9g7wRt3iTpwAUSr5PpQ9E79TAS4MwG",
  "key24": "4mgkM8aCuHpgPMsMTEWzuUuP2ZsRaTC5SR3zbAkorgTyq1N7TR3jMSyPqyhJ7CSEqhgtKdyesNBDLqRaqyjFp5Pp",
  "key25": "2ceecgDvowdCNAKMepsCX6u2Sq9Haho9nBakidy4FSgzwL6ZMLyEooSnq4NFNQL93kbusFy466JkQyEcV8AcAwXS",
  "key26": "5sG6ngTn2giATAeYX8xAp5q6oich3PUVEVoRP5cdmXrYjKmUqTWQFD1tQyWyjRnYZqVw1BBSS8D9TwteojjE8kVM",
  "key27": "VD9ixfZGEJWRrc4Y2tJivH9hpVTWEmMHuuYcraRmfNvZyMCKCdUwFLMPc2GPBGZp7vvFccCKSvKtEtYWM74DbsT",
  "key28": "5GhqeRq3Sg3s1eCwuAdNtVRL173sUtKsFVJxJ9DX4ryPkiEd6ZxtEsruBenHpLJTMSXx2FPwbDoHc4MCVxsbqeWh",
  "key29": "2cxN3qVtetjBo1PXkJ13qu8wsdkp4wHWEvoBFGeV1iicxLmCWhGMARyRK9ZJw9C3TTwoUEpsYp3PYw1TbMTA4FJC",
  "key30": "RBMYNYKbDnXCXpiBHhigiMHcc5atLiAYhQT1h7EqH5CAGTb4b2FQWdiXbx8uP9m3jQRNqABvn5zBdszzqTTECmh",
  "key31": "3NQxydkaU7zqxmvTSu6GGZxPmzPrMyJRfN3zDMLVuZamgVnCVpWyahQYzrtws3ANroRAbeFyPAS29pgWD8MQp2Po",
  "key32": "32Xrft7hCDHeJa3a4rPY6Q1j74vetafgfPju3E1DhtKDnZMcjkvF4ivE8hd7osapG2BLvAzHdDgmUfGdT1vtwNAg",
  "key33": "4xppxvtEXgChGfZ46kjo3Sgf8Y7qiFhdBG4N92uEBqtJnnsQKkrhA9iKJQgR7y4Q6ErWsVuNUkj1mgnKDocX614q",
  "key34": "5w1TkehLNBxbSm4QAH4gr89cLgQ1k597BYXNtpj1hTXVGpojACmPqEt6g1B1ZNaKrxwBuSs7QCFDiDDqyuwZ29kr",
  "key35": "5dnwi9ngWToYhmne25YLiwhg59GPSow3zNa8rRy6981wXypdo4ZdTXntXu4pNoSTULfbXLeZsBdTyw16dSfAM8k6",
  "key36": "4yERewnajkEeFCtJ5iXnWMwtoL1cxY6oiup5ZDXw7sVUNrnbXFFek8NWTKBJFLetWUcsUQmbwFvnvncJCvw54Ewe",
  "key37": "uCnDRs599TtspPiiMNN8Lw1sKNKGswcyLcC4cqunTRC4GfjnKASxHNivNngSRuQafnp2SVsVJvha3c9YDNErWht",
  "key38": "63rKgas5WFQLT6JuUFdMZmaftTwLoNdRV6RonXDfC2Zfs6n8weotWaWubA4ej8FPmEUGjFT5aG3NiDKWzvURMgtm",
  "key39": "4cRUYoL7EduxJvwE78T6WZGNqoFhkHoAwQKXn4o6KbaibFNSumEG5km9sP9H91KRKhJRqTRQdFdTmhV1M7es9Hw1",
  "key40": "5oqtZ3iGMx3LxWRev9cDfzV1pTzjzTKuAZYMbwtqB5EEW1BV99EggvYfpMmzf7aUXqBE98Nzy9V6JwLPfM7WNvjM",
  "key41": "2giXiCfXGfzXnPi6Q2MrQkSyMmZXhbqYf6zej17cAtTFwuQebkJ73th417g6LqsCPiZ8xsSuCQZwXaPwsSycBnWQ",
  "key42": "3pyMdVC7LuQVzB5oGJtBCHfVJipZeErKn3PvwnsfK14UMTJryfU5DHub84JDKSa6xL4fMQ4NbVunrNHzjQ13F8Hm",
  "key43": "27zjKQiupmeaWyT4HEzvae8xmug5oKFDQTZpjxFvijFe3vrKpLdKDGyYwGikNiMQfYCUFHjHcLdvEzHMinxmqgBE"
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
