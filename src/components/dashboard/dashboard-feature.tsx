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
    "3WHpQoN9gAHHAgQc2Pv865eddSdFxy4pmVsb3TZQZSXL49AVTz1oZ2WuJf8emyF7mJgPbsRsHJAVGY1iKDBEfvdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wz2SGJdLyqpisiABNTiEYysLbWZo5JKkWvehhKKa2T5pyyWY3LRGU29ACNCRevrUyM32aNeRnnwy9dgSmP3b75g",
  "key1": "5QivNPNqpr8Si5qpLnHVqBEzwpohoXY7GADeNzTSQLS1DVBHbVVGhfywxdkcdAKs6DzbMBrRL6D9XkrtjNeaVs1h",
  "key2": "4iDEMf65FJWBdLcoP3oMFbYMxn2jtJ3hLymNcwKJbRKTKZ5k1Uv7WE5FJswehmK9wWrAoiSZXY17UihHpu2QovJ",
  "key3": "28oYuSEPbnc19UoBcmG6XMx2fyqaKaQjFkthnJXMZ1MkCCjR9qrW8F639WukASUwb3jPbADJEiZ2Qozg4xpF9mmP",
  "key4": "5Q1Sziaz15hveXXkvTr1WPWqyTS2QGrhafq2fAag1dgMZPApaGWDcEvSNNAhiCduX4714ntqG36yXJvUXNQ6BXke",
  "key5": "4UyXBNxdMV5CL4YLJ7kL1eujPhkNpGP1LvGQFnw5waAXZEPiRoiLB3UtMMHX7G3288HYUQFyN6UNbami9wZFgj47",
  "key6": "kRXC1YWgEgmpXCHGVUvjmWEyKcHcEkotCQNmyLUoTiUURGzD4DvsdmZMPgUZ2GQLCPtpu7E4FMirxvnAypw6F7M",
  "key7": "57C4fU1WCScP5STUZyf4xUKJdQgGmnK6dAVbxuBge4SeDvJn3chRTNo1cdsHP9BfZ9vWaDHWJpJPms2CRbceYP96",
  "key8": "5idQPWSrwirFeZrFSXMDULCSEhTGkFzE59XA7jE9mVfVxSw4ysZMYYiztdDSdpUpxPHghN8CoVkcSJDF6KMCJb8L",
  "key9": "2cj37q2RR4Fgp7tuT8MK5A1TzR528vKyyjjfrPxes7pf758sC4oP5UxKVM5hN2RqHjwbxEf8r6S3xxrJmaNABaAz",
  "key10": "4z7Nr3CXb3pJj2WxjWK4K6NE3PqCdbEVyEW9xALh2kUEQZJAi9g9sW7evERMjNCjUsmhnH4bPDbdzXNvk4HKHaSe",
  "key11": "5VDqMxomvKsk8kH4mV9GE5gPjkbxBK1uouiM1nFUArXQQJpyp4LCRbV7ADBiJUyCBQ3VV9yVsnqwyzMAknB9V4R7",
  "key12": "54r99DXD5nwbWtrcGT32gpAzApVx2asdUVdxFNNDHTwH2mCEpp7fuJ2Moe43SGpE2DiYpVYGtzfGumGHLAxT1FuL",
  "key13": "62kJUUjZ8qNqf9CmH53V2DYCoLncLZqztdW6ttRg6NrncKZYQt6nm6Wh8CgGeRFVMsyDUa7q3hmCPAmX1Jsh1yX",
  "key14": "2RbYHZTtJM4rBUCbiz48b8W1xECit24hGYKjfV3R1Ztm89zMbmCQVGM5XLK6S9bEmGUCuF6XwgkKHLnrgu2N6Ufa",
  "key15": "57hLipQxVTZ6JKGDpnHxbmj8kzWjB6nNYoYwSdeo77pRHUQ9nSNiASPVT3JmAYWfH9w68e4MGBosREvcjaJkKmra",
  "key16": "MBBYs3wfdMcdNGpQioxcmzfFk8bF66QujvE3X8vzKfQEmvwMpgiZtKig7x9tXTidVMhAJ4ZpP5W9fC5aRWDEGGX",
  "key17": "4VeyWMGarF4w2dF1uoJ4NZi64cg9dAMzmgLoXgkvy1x5ZNtw5WwqBPun8kU2Kszgy4ciK9HpaPmNsSx8MvJfs5fJ",
  "key18": "2kUSPTs5sX6VGWLYkieHn9RzPuKsyMy8EucAuifCj7iC55yeaXYUqSbQ9Ft1S7e8ekYd3XdrJz6XQPdzEV9Cfv3a",
  "key19": "3EQ2PN9cRn3yhSpUuyDUi1ESsANbVth5RViVfVRFy2kp5XnHwk9KUej13HUH9G4qJzuWH2Jj6oNFKSQ14daMMF4n",
  "key20": "cLU2U1bGgGArnPGByzb6Awe23dMdaHYWFatXYqMYTvJGNAgq88kVtbf82a5mq14NGDBecX4YGHMESZLExN7phQP",
  "key21": "GZ53YaapT7YkAQn48oUaGzv2BXoLMQ4pJrLpL1dNxpwvoUMRFMbEhGMuqfySPBh1NSHahnfQMx9mbwcLrSTX3Jb",
  "key22": "Rbrm6Hwg6KXupFPGyu4wbxguicdkuy7rNGJ5iNhmXYse9W9DhGHPharYHck5biwFX8EXnQksXqMCDsN2wK8fqZe",
  "key23": "2X1G3ckquNJwux7Fu9YAdNC7XHMfDht45ZvxyafFisRWkGxEd7hJf2Ma4D9cZa8ErHkdNfgDNMRoKgcW5rj8CTU3",
  "key24": "3GDedrgUjsGEiffiAPBrMrvFFhegxt8UiifmNVu9ZBH8qHkPo3UmXtbihd5zD378m5vQh9FqFF4eChwbXW4T8nAj",
  "key25": "4rQ2XzYGofL6RcL9heXBk1B3vt8ZFfCsmhzUfPmecgTm2bHS5QCLPBStHftp7FHdFkXnLMNFZbNjzhniUysix6vT",
  "key26": "5G7scNon7CiKNEULXw1WgqWXaG2pNPBLpjbvnw9STqUawMQ2cEG2S7aJD29RBomvTnSutKu2XvRjv58HqnCBaida",
  "key27": "2f5m8qQAFVC1jRbCUn24x6Em3UVPbZy1ppXZ6rnHTKDZn1ye9uu23RcSxzUsdx9YJ3kbLXwbtdpuA9qLbAc9Fpu6",
  "key28": "5pDbLY5RED4t6L2165RM3jrnD8LnKH2qSbP2sBezbcR57EbQ9XbU1UPneuworxHgeSKFDBhDELATquRfdVNwtXhH",
  "key29": "2YqKf7uxvVSCHUnDcc3aCT2gVnTjDfp9RmBEguWjQqHHeQyfFAB3XDc1ZaUYMRZ1i748jmy7EPDb5fmf1Vwrw949",
  "key30": "4pfQLxLQnBE4252opyJaA8EmStdAJS6SZ2JgSaeCaaoksnqLtcxuUrCYR341swWdTjE5t6Sw1QuscdSxykexAd3M",
  "key31": "28CFcvdw2C82UXcd7NwpkYoQGkRmpxCChjptt62c3WYz3dK7D5tKWDoceKMG5gzUkUxHgXdTrp46j2x4gasgxQ89",
  "key32": "2htwCtcUHPTmDj4c66bkiXjAMMBy45hSEJq72J7v24SuEDqM754NCXDUphU9i7PD7HQWCKN3WWPDxu3ujLj6ZtG8",
  "key33": "4MFpaB4py6JNZD459h4TjzQarE4Lzo7vaPvCfxVVsUQ1FCK5JFEdbftxjy64rwceSv2Zw1ech5WfqAbNMYYKrWbr",
  "key34": "4Ksd9yVwte4kMntzkZNezdsKdkrAV1Ucb1iv4unLhAEHa9nyfsERsnx4U1J1xeUrLDuznGqm3GdMGq7LJvbNKce5",
  "key35": "21KdLUSNrxvU6C7hAxNAEpM48a1RMknFTpsif4b8faPcdb2UYDcLjhCisZsqkPYCJ5w6AVKCTw4K7x4jtQLiGUPL",
  "key36": "3yGVpaiWVK9uiKpL5kZWAea4Y6zAVNvPLTm2qQVMeALQZLoFARpansLagsx8S9xAWeYR8qZ8bGwiRy93Uc9ebMZ1",
  "key37": "4XxhqAHsLmToW2y65SeTKznXZmwY4d6NDBUdq47eBeddYcReyphThjxFw7CEtTf1YLf2ErKtKKwqzdSNAyfoL4ZN",
  "key38": "6x55qJZCgCWGPXogrkVPdZrgL81kTJbu8Q3yo4ZVzBVtPrgba1YzC7wu7V5ZCGn6Z9DeK393D96aksoyiooYd1R",
  "key39": "4uCkbQxFJY29AHjKgiCCREHiWDcUsGgPMS8ZeByQ2vaA64axMmzqiWMDhWE1SrYpaAfm6X4BasRbsdPSKJsHHwB4",
  "key40": "61jdgBp3Vv94ki3Ags8BDgx3X1UFDRkzbww12BzD7iExLjzEdBtJ8gqnZFHyUc1aCb1qG7mz16F6Cc44pivqxVKG",
  "key41": "f6zb9QfKEzdRV6rJ8GvGP8rie1aY9gtefdaoXwE1mLcVVKL8on8J4Ynz4UDGSXQ77Kf4XPRJQemaa3QWzKtwJ31",
  "key42": "272qSdp5PNFHbEbq69ujtsftykK7DqtcSeUM3Guo45Lf1PW3E5RfPTJtzsnxhcX892DTWRtHcJBcesiW2ohtVSNT",
  "key43": "2j46imznHAQsqJPXTDc1UBQCw8zjXdHtg9MRnWQRceaKbUa1FP8qNkUBwwc5yuWwb9XsDbSdGoaRuYnfDgAv7cUA",
  "key44": "obgU251HuM4WHhXCFfnw4aDEJRhVNqMJc2xae8Jzdn5kX8aBAzvjjnbATGZSKqw4QotA1VU5Q8P1HL413YsACM2",
  "key45": "5X1Ykg8ViLf8crVfjtWXSXoiHJRr4VfXRMEqhyfzimXnLLPR1dnrDY4fDhSFwqybMXuVwKwQNpJLN1PPRv1pDKnU",
  "key46": "2t9R9n4CKpvPjPZcmLZiE5JxoXUf3USCoTDJj9Tx4U2DXXFE6iV37kX8Hd4y3cmAh21A5AAuYi9kxYbuXukNhgTN",
  "key47": "41JNHLbh1xBGKnTuVAFpwREhwvQHrt2oYCqax8UmJXaEAtBMHLnDw89UdKAJLQgmd3PQ1TCkjDX2KuScq4yu1VLY",
  "key48": "5NF1sa9bYLZvQTMjWUERFv1iePRyZ5fkFtPRk5juuSbRtB2DqCHwrRmzrTQ4mZs7ZGQKAfzfLdZAMcL1gVnCadDe"
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
