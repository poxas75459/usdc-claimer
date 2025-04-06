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
    "5taQWRhQ93aDxz5Wpp1TEKJ6ps3zEVyktqoEH2hQr1yJgaMuihQyVyT16yj3vtrKKbuVhzTCNhNto24gmMW35QsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "87tLBnJQZ1nqDfABX3VxxTp3XZwqyNme1XPnkU4pQwFphXZQC8Cg2ybq1KBuZxzqT1m73nkYR8eBhFVXitbnP9w",
  "key1": "5BZSdyyrcah2Cj2qfqw8Yts61qui6FAKd712AyBfu4tvw8EzTq1CMGU4k7e3oVrp2JPfK2UYfF92VYNvdKjPihPK",
  "key2": "3qSydNNPyY41wvy63QJcCR9cRjV8AheVCH71XiRfckDMNY3z2keJaQ1Eq21Hx8tGRHPpELn22M5PHB1K8yPUSzV6",
  "key3": "21D8vH8YhvWS3SkJkZzRwt656muVFqrxXwQe9PriAQCR87d3wSNV4HqJxjkLeLsx1QsYUrZ3vcqVz7wCHREYYYcq",
  "key4": "4av5Gavktfyecrds5oKBPMmKdnPo9LmJmyzWvbU7AKGVP2AHhwZvdxc9pm94vuGiW4dCZp47EaCG7AK1mRv1Z4UU",
  "key5": "2uAqZgQwLXTr2YHdbzHDvJwg9oiQ8zSt8dxdzn1sGYkaM3G7g3PDGKEVcYLbcaJMT6F3U9kZBoZJLfMbA5RLEYFM",
  "key6": "39xhYbtBZ1qfQDc7xG9dg7rWcKyH1VJFnXQSF1E6AgzEAxztRXUBDyLVAJjN3wEN8B4X8TCinAGn24xrcnt4rjSD",
  "key7": "26Ad7LEN3pfuyNy8GGfDef39biL1tvRtWuGn47peYrkgmRxtRCUGd9Y4hdrd96fWDKiErEtqjw5hB26zTGAUU2M8",
  "key8": "3FnrhjKf4GBLym3k45SooysDuZTda9mAnJQfUA2dnpAXm1Hx9imcy5xphd4e6Yyqj96rvyQCFfRBchhLvt3nHtJS",
  "key9": "2FvCs4t5uaRNirYJXdbaiotg6eCtgTRHz9FdS4BTrwq7e1WaUdBn8oGmjRPbZCt7LRwDs1wpwjYRXh2kQYZBj3by",
  "key10": "to1qUXKvAsVkHDbQi9Zhf1S2iLYPPiVMjNSEJUG3r5AQciytUkyatSppHjiRh1bf3RDZuUbdTdhxgW9sqfnaPJJ",
  "key11": "49EuLaKVNavZ6mCQTJt6HpTiwHaj4U1iGTBA9f3CHTEmd9PyrNamkeZPupNvo9m7cGdTfvRLYH3hYsRdCt2je2Aj",
  "key12": "2ZKdugWUrQZbwudBjWM5NuDaagRZKAS5KgBbxUQFyTvKD9M1y1WLuT5un5TbdqgYRQ8XC6yLp8PVuSs9gT9JDb7B",
  "key13": "5vcEnCsP1TxA64n3tQnZqe7UDoDDVNY8c9HjytuxuEsdk1ctR2XfHVHhiAsinpL4J4HJGeogbrhDjPgntvEdLiM1",
  "key14": "2v4XPEA72VBqRK2umpETh6436sjToXc6N4zxcBDVFfWLq5m1RpAHYkmJvTURfCgCd8T1mSea2QcBNVK5msZub3s7",
  "key15": "2kmiFFXJ7hizdGJpLJ1DZwpDMJTgNcBFgxWSTYtnJrjz4t2jZ3vpwUatDSXitMpe4HGGDp7hU7cTCTEhoaSFL5JJ",
  "key16": "2YzwhQrT6J2P8x7UV3JZno5vyJ5t3eiDgX79MngCEYxTY28UYNbDum9HftM6mGe3NwHwxxGEPagWTmKG4PYegN2e",
  "key17": "3Z4yJYqtrn87o4iVve3arPS6WYFCiyzYNoNNsibGYzKR9P8y6iKSTzYCKmKjm6m4PMq2LjEXgg3n1eNtgd9Kp9yg",
  "key18": "3BkPEdYZBcNktZAbyT1o2DFQhaoXEm5ZiW5VEdbzXTUZ1Yh5nuB9VBbkNZwE4uWkGmzsQRoudNFofBRqJEjHioUH",
  "key19": "5eZRyWRDWEuoBTi8fJHe39A8FwBndJvBBAT5mpK6oQnVtkNVT1jcmCR8oN3GBY8YNMSuqubVoSj4TyN9gxFvh1Fd",
  "key20": "CPk41zYBBV8BgowNC9f6dQxeamEEw4rTKLLTC1WthtvbkwU7d1WF4vo4o9hnKkCqtErZhc8ETX7az8Xhc9iHpQK",
  "key21": "4vrfMpunggyv5wT4PqhmgBE8tTSDaP5ix32hqNg82hKPCMa2s7mgA2rXaoNfsDgknVNCrH2qRBkDQXLwBbHnx4Qk",
  "key22": "4xF4EaqxdD8qUZEnYiU2ngNFhnf3o5vymNRerXdLjeFP6CJixXBnv8RSu8xJh23DziYmEQKAjCfh1GTES3NoRXXZ",
  "key23": "5s52PRVgGZ6XXQvFWaB6ZHSEFQwAdwaRqwNh9WPkQxAVfkmdCBeKADLKv18K7T81RcBdhUXGfvcc78fzvhBUpj5f",
  "key24": "2675yjeMXs5x8NAvKAoLseNV2jTBt34LZjSLmHMm2njnLbcJLvsZdbNe84KzXEfNsRhsdU1ae7HCn2AqvmEAvpSu",
  "key25": "2H45DYqMGKJQhQSwWmuPzcANm5Mjno5WmhUkjid9DYze7KMWmsJGJRBAw9LSzCG2ip5DmvMNP5nN6oJdHL5gjgsF",
  "key26": "52ZRphuabPjD4yLPHfCj4yceEu1KCA9sZJkS2Zv1jD8vsmC2v1FwtYpiNUEfU6s6ZUYhctbVqfhh18qWVx5EFUHa",
  "key27": "5AoRpV3zRXsEaPfJX7mWj7ZLSTkKEuJhnYgUPunpb9kybB51y59bjSMzVLbBSuTjCkdEnMXh9SKAfYC9pXkAqX7E",
  "key28": "59Ge1BpRwaerGKBCzA8bXaJDXUTk3MT5bAUK5GH8cXDFDVgZ5kP5ADeaftAyLpZYWHi4Ysd1G1CyBjnsiDDZ2maP",
  "key29": "4duMF5K7Zd4tuju9ni4CLzGUJMU9NtTJEjVtZxPhhaMa1bWgFTGG81NBx6TovwLcf4Vd6MNXsneztHsuRCr1GKYh",
  "key30": "2UiJ4rTCcs9WZbHACKN197kXS1FVtJW3udAVgyCoUt5QTPdGegn675Y4b7eoXYWUdiLvVYDzcAwfxiSM2KEGYith",
  "key31": "9Go4zgSXxZE6QKHP5Gt1JqtiTcmLbzonRXQZieTbSEQJVC54HPYvUvybRvExfXpbjnfc7sfjbaiQguKEjknAmCU",
  "key32": "4XNmDxuFoHoKW3bFHPj4XWmT3VPfPVo8mcpUyRDemUk1cj6L6if3BejWv1yTceEd931Vs6ieTqBu8wxoHCYwfscw",
  "key33": "38UNDNtd3ioiVTYgtHJVQw4MEj7Ug8yqQ4UY8Zcw2PVbrABh65hbQjcFsf4vW42zeEd3vo87df1q6dv23u4ognm9",
  "key34": "eCiF5WW5okJbzJDoghnmdhdQ2dW5ettMiebEemxajNAGMkFDPPbxsCT75DQ9twNPi5tPKBb8UHushE6Y9myQasM",
  "key35": "21DqPj6yBuqTTNQXPMDXZ16XnhB2NTyg3Sedr9ayTV7itmqh7skAYLXboFfLDnJooYFgFtAZ6F7ttzegcLeBdXqM",
  "key36": "9JafkmSBdd43jMiUMeZMMgpAvyLFDQnpamo8Y2xwkQrRw8T48XYhvUue67VmKKE76WD6EjdAerL8oC8zip6syg8",
  "key37": "3omTWwWgfJdVYdS1CuBEQ5nSWHqUzZyRoXbx8dC5cdRA8zeZCgfu7uZocsyKaMJXpKKaCvo9YLbkUqhhGD8mQNBc",
  "key38": "5vYnvWpk1h5py8qsTu5Z5QK55gA9TqmapiQkmhWghdQQx6ZiZvn9s5kVfmdPRLDgb3dgii5N2Rt32quHPp84ginL",
  "key39": "5PwYVqdcEbbEdKfas8ZGzfC2ebTFXiWdroaUQUWagxt4C5EL4aFMdjFDgcUBtRh682MzKKKe4UnDNjUNGvJ6LoYd",
  "key40": "5dpQhugAM9dig4rWeiF4BjZmpZgsJbNLb6pUZjWCmMbqG2biCRHwwQCbMvffzbn4WHigjznT8VLasLCPATviWppA",
  "key41": "3CxCTkP628VuYXo6Tvcx3MHggKPvhqUJM8CaMEVXf7tB4ZZeCoeZjvE2XZpzyaZQotd46YVdhsSjaAsh484tTwmh",
  "key42": "26JMDLBiH4VZKgf35tqmYm1bT1P21jQzPsAU982M4pbr7kYDc5yg6XoNehe1JPjtD1yob3jnDqt4kWMhUEppPzV9",
  "key43": "4HeBVUQswSCPS5KH4r5D2p7ekvx1tKvrbDWERaRSa85CenfiKNLXemr1tXoy2N8ciYeF6TJ6xigYzYjLBxg5oiZf",
  "key44": "491A8QeKoMu8m6m5nbq7ydQmywSdRRzQUnRttwv7pQArcYVS7NmxoQCuNfLWDp23QqN8XMy15sqS3w3MRQfEnd2V",
  "key45": "3CsP8q4Pwtrv8k1mRXBxzZsBE7sAUuQHYF6mkQ7HY7VSHMdR6Qt7yEsubVpVCwjpKc5e4tzxJNeRhgaWVNox6iUZ",
  "key46": "43tKhfDm9gMiRRKEdDHV7HTit6nh1E8f5YhbVaqvHSuuxLbTUJqPwzEa7GyURWBXBHHtgp47TriZX2Nqc3Yhpovy"
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
