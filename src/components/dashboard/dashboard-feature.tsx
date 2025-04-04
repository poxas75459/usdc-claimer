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
    "2283kjtU4rKTGgLhbnDSHtXYysdQfVNq1Fh6UTgaZDauoPcg7vBK1aP493oAdLV8xAv3UGM1SG1uDUn1sBQWHYku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YzQ6Jyrj3oxUBEmc7WmUwpP33mqGYEppWEgFCqtckKqseL2WgZbrngD7oTqXhCMqqBYEvXmp1gp994CdUWhGpw",
  "key1": "5sZbiLQEtYpDWHeQCMxB6MbzeE7WUiAe86w1MWFnbGJDqWTz8W9kwH8PSQ12B39qGCixKgtUURk29V55votVucwN",
  "key2": "3XeJ38Wm4j9QcBRn2NL4Tbibj19ixyGUKPoA1K4CiAGsuFkuAL276hZMevw4wjiE9ZFGuADXxi79DVG3J7adkdtL",
  "key3": "2uzDDTFPhhdKpge26SPagVV5y8SUqBRh9xKf33oPoD9DVv7HVKMecMqLN4YQFwcVA2d2xvtDBgKuWm7FCBMNxNeE",
  "key4": "3kYzm6M3bzoUtCAAscymuZGBwDPCJCGWTipdoYsdVUqxo49ocaanxqmhif8BPTzaQBax3dv4JRNkwme9s9mSH2cY",
  "key5": "2xU4EDsbTM6f65MXGtNfG1DB4XSHuuSkCRfcnm8DaqMMb1oMYHEcr8MhkvgGAKsmCWCpLmbLfdgKECyRTWkfWK1Q",
  "key6": "3XSSRh2xQVZyzFLnvur1Hkh7rLQ1NQv6V9grWDyVT6kSbeqkYbi9i7pyYruEDPxPEr74jdewzmZb6tLWDFcSUNbz",
  "key7": "24VKEvmXW4TqfddmFkDwKquQbNewgg7BoxGNX88Hi5yBcNUypT7hENVDhtuJJmy3yoCnf6Z85YN54azCAXrzytsB",
  "key8": "3qdieRe6HsMZJ4yGdAzQkqnj55dkUx1L46w6wTFyv3jH77MxU3tkVR9UBPUJQuYWcLMiWmGykik8yZbeGr1kG2vj",
  "key9": "2d1pQfueuZuJtVinZnk4h2J5zeLfSXzR46RCUGbQqA6fYi31PGmoMzbKjEHfBxKSDsWjGqMdETiDc96RTmX3CioV",
  "key10": "3eaEfVU5xasyFZfY6Nn4w9X2xTSshUt75eerVE3XZ6AumqZ8NKCZY6GRKyNkm2xA9NbAUEQcdJYkoL7zM4yKd82n",
  "key11": "58zMHRQi4xjYkCMtyG6vAo1QA8MkgbBxeZwhBRxbh1UDWrxMkfUfXJvth2LtXHceqrx1Kn24TSjgUVvtEioG9RVu",
  "key12": "56vW4xuHWDPoxQXUP6Con3DzegXyso4UPrGsC6pDej6He2Z84cwpdhx5yru5WWnPg6nbnVNMQPX9dKvz2RqB6EcJ",
  "key13": "3fZe8zNgpM2QpJooYYTDpi84CmKXt1Pi89CceTii1LqrMmH45vhc2sXipdGSUFhHASbadA6SZDJqZf6vz7bL9J8T",
  "key14": "Kxstv4XTEwZy2tuJTzJ6cH2Xa5Ui9zJRiFSFHsgoB1DBSDWnGss7XESqMhCG42vdrYvUdrMR9PFAkWM2Do1ASsh",
  "key15": "769UmDvCSGXPdKksPXpTMgEbCWFondyd3mqMY5uYS2QRpPzVzsJgxkdw54XxfdjJjkdA9JheQJYLAJee7eUxD2o",
  "key16": "swmDrQd9CReVLxFNqCdrgCL39sgDz3sKmYQUbJ37Ny8EVUSV7a2eVdqnTvnQjgauU8ziYKXsHipxHPLyzWRwesm",
  "key17": "4RfE7RHbGhF6bQT6yAVuLiJriWSr6bAAGUv16Zw3SGitHNXKgWoNidrUph68pFLDx86BZrKcEUzQ3TaqtU9rfETo",
  "key18": "3qbi9Pq3A6c7YYqwsJM7dMe3HjtXgfVGQ4iwTVvkZsVy5tRm1NdUi5S2JRMPVyWdTx8udme9zKaAaKcvtnVZj2cD",
  "key19": "42HjMHVGTcdFpTm2sdKPofYWcWb7E7QiS3D38rk5MQQDUVRtPxcRvuMQoMxsEBFcBX1NMGPixpunJ2Gb1u3vEo5N",
  "key20": "4TVHgefMhEHYEm8Up4GdivkrJTuYyuaFbvpHmbsZtvcwFkJwg9RdUd2Umv92y8YU9CgKkWSTR4Z9oafkHBFWPSPP",
  "key21": "gM6rQUpwHqXaCqSvzeXRYWX5ZYshYp7g4zMhNeQeDrVRpYLNC85zeXEFANCgaWT9te1o9bZvzRSW2vohMm9NXkV",
  "key22": "4gESCN7M5LCsgdVxuVfuHdSdT1uvP5JtPPfom1U4H9ZNjjmd4noKRTxNJWJiah8azBN6idwyVp7HEkWPb64LGc2y",
  "key23": "51kPW1g5KExgNqaeLjrSj6Vx6bHELk4JMVRCwyZBJ3LXnRxE9EBzzPSY6tHY1ePp5KjBTxJdtos8MU8vdghAFKML",
  "key24": "duhii1V4cifwwg7baLxRi4wvSUo2yi1UsoJDe6BPRAqgGSqKoZxtBAag5H7LKA6CdEJKZAvY8kpAnjP88rqbZDL",
  "key25": "4Bpb3wWZLyHiLBCSBUnTrE2GvaEkWXDfhHU2UKEqCdLcKeWA3o6mqT9grWRsgmAzNTr4QCSDQo3G94pvFVzcvhRi",
  "key26": "61nJ6dqwPCkA7NWj7XAkYWVa5mmYdcWCKMZHQqviBLUrdkqNQhDfGE7adUZLhc2wYeG357E5PB3EMCBtNKEH36b9",
  "key27": "3CnUL2pLKhduxDx86tLVER6sosJvWg3geY5iooovyh71G33SNQ4XVzLmqxEF2eqLnUdHYDSMNgZWzE9Jzni4zeff",
  "key28": "3Fb8PiArkjvDvtPiVatx6uuqKbcGh5xytyn2bCQyaqYiGSxTELmcQFBaAHATv5vg7gyZjsAVybdpCPeeiMaqQj2B",
  "key29": "4tjwKkBmBtta136uRguV4mCrBY2ngi6LZYJxWmyUYfnRiXZzimp1Vofvg6SuNSLJ1zspEkv6WXMqGDyzactn6XX9",
  "key30": "5sVwoEfWQwU6Db1Du76QxG5rk4dWv1cztXJo94enydzCyfUwqB9wYuiNMeEzEGRqqmuk9nTTCxjZbAKXPE2RTpSQ",
  "key31": "36iXQXUYuLeoRE826ZuF6wKxMmDpTdLYZtKMxk7KWWP3CHxz5J4mWSRevMm1oDpCDhTgxcErNNr1DVD8gc8v6vs",
  "key32": "319dDogWCfjNupiHzTq4xwwVMfXxxZL4SnZ58LB2mhznMhs6DckGAy9oSmgSSwfGgy8R37L47W35FVj8JupXi7VN",
  "key33": "5gAdzukp2ovZL973hS9tcGZaUTdpeRKoBd86H5nfaDmorsk6DirmNu54fdJ4MpvBsvVSwtz7zW8s2TqyskeqiJNM",
  "key34": "pvdtH73kpbpxHJj3wSqXntRdqCegMyeiW3D6xBEhjGQTi28vChDTYCPKEVphTnWpNrSN4q6Qh9zmAzLywmCgj6N",
  "key35": "4J3NKvsBohkhXwJ7Hh3HGgz67X2hh3aKem59ryD2gjFtVC5KfKPhw6nc5N4EWjQhFgcNEs3va9cutyRN7D97E911",
  "key36": "5Nz9gD8SGyyozXFDZwkYcfBRVZT8CZF9XPQx1SzKMbJGmSHWuGvbdhTa7tBRCxPhWJDxeAYMpzkLHbLvMC67V58G",
  "key37": "RingamM8eLbMCa7jLk9RHrpYC4JG5s5g9DE38XgxA9jg2y64T49RRhDf3fFdwq6mfwdZBbKb6jAZ2SEesLixZ8Z",
  "key38": "4q9qjhwFj9bFtGAzH59qmXSL8fbi82BapnRQcd9dk5koP6zz5Cw9Sx8KWnCZPoEWU8yFXnDQMrz33g7xKP1KoVE8",
  "key39": "2hy7cdcsVsZpsuMmboLhvZ3Xa7moVUGzUdtgoKwWFUSGtRjr2kkyEsN5MSrqDDntUUv9Yzg4qkFApPd8BFbZoMyb",
  "key40": "YhAVhmxPy3vXuSs8g3XP6BLA9X7xF6FWKVkUhqoRHndJMvyoFbEGGQe13FFMPyhhJr82ecUiDnwKjv2V6ssRcSK"
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
