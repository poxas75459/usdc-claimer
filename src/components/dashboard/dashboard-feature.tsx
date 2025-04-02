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
    "5eUSBZAgcXGRGrEkA41ohccTnue1FXdLtB5GJY15i1TFAYd7ALK9rA6FHrbuU5kuUqDwhqM4uDDriF4cjJgh5H3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeH5SoGSKxhQPKamKNA1nNZA6K55NY2KdKJHPcHb3cWVh5btJ1Y497sHyJbjyjbHManQpbUfQUMypj8xpnGgycK",
  "key1": "5C7fj4DEvK934QZKEcc5xd6ZChJvLMsjPT7ds2ikVrNdsiu4q53XKMhqpheCFVHXww9grQ5vrQ9s9QPKzSAiD1LB",
  "key2": "3J3Kod4kbfC5nCLxKXhDeDTQch7PdRf8ZkuTexAQZu21tYBqz7q24PSwkd6FZc9AwQP5cg6DMp5RNVvzVfA3AHSH",
  "key3": "3v6kabRZUHyc5nHdCqThmrNvnFdbbXSnWc8pcNHcdLaHbgwJH9mYCe66tAwzhYi7gjpivXCsTEbgEjEKofxzK6dH",
  "key4": "21VdkHBDHtpaHrvsWC2CC8SnRWyxHEBftQ2opLDvN5MMeB5sNKkHgHpTQbEBpQBPc6MMmHz5vADeq14ugFUTgYnq",
  "key5": "3ACwWfhGZCS4FdkRSM321f7zJurWkJySvkerMb2PkAUR23LjvHiqfHj8xxWbTbE6fdZx9hwpiSgqoq84Cz5FeQzw",
  "key6": "588bUWEYSwbTWRDt1ZfnL6ndKpHuYBxKjxpATbhFghEVAwgGbu6nhvoWnrZ67MvcAxsLY3EKU5CMERCsHQwYW21p",
  "key7": "5KVN7ZjwHcqPvFotSR3XDtzBVcDyEAXtu7rhU76ibLZzD9cCk6zyESRo3HvYXQhyW8dspXRtisXtNP15ypXa4PoQ",
  "key8": "AYJ5rEw3Xxetnr7riEiTmm717yRWE8Vm2ek2NQW2nymjvcmGC78mnjoUsjRTURRT4fG14KHFEJ7BsaYCnK5Ekr1",
  "key9": "5QS42Q367BgivPm2w1y4wy19QHYyjB6RmCV2Do9wPmpAJh4Gye5sE8ujTVCzo1YS8FQnAPm4h56eafvkDuqygnAx",
  "key10": "4Uxjx8brWLhjHt6JwMDy2z2dwq6fFiBwkTN7pvCw6s6hEP2XzSw7hz97poTkujvHR3Bm2R8exJ33BXduhZqR1Q3H",
  "key11": "5T6bXApgpbCqCRErpK6KovJ98Q5FCSox1YJHYU6EDAThnA61aoUKY6ddrnfp15b7BCdDTErX4kbpzJC6Wyvj6QDb",
  "key12": "aKBX5BNFFggGnVXAGWLo18tnmuXupA3P72NQcGc4ZVe2DmtYbzezsFWm3DK4nbiM5ENai8sdDGr8NQUMKnJ4DZC",
  "key13": "3jPnyJEqEWS9xcp5E8xus2tgoEh2W3Ah1ybJaSHCFvkFShEGiPDJfbjbmeqoNX5XLZJEB27eHiZ4Z5kNihpL3uie",
  "key14": "4EUS45BuasehChyYeWoV8ED8MiRiC34EngBEvuU3vojBsLpdxUsaJpRH4RBtmz1KAPYHDvgSzPsGZY8AFvsuCVjY",
  "key15": "3MpNcfmvNScasdQYfBxUL5ZhhUhmjFqkRvifuBPzd4kZ1GQGPHPvMNeepbD1UfffarqW54tXMMm8sxqZ1NYkn6hV",
  "key16": "65d63P3ZpQf23XdQAhN3Uq1bDmGpLCF539CkSo1WBYvco4D6v5YsovJugJBRSHjoNUhQSWj8sgRTuMA63GLDA7SS",
  "key17": "3s4eiDPEgvEy7M57Bhroiberz9h6gSa8DgiT6A71sxX54KKVaYmSD4M23i8X5kCdvmy9vH7U6kScnesQmCbQAozH",
  "key18": "2Qz8QDitWkeFBdzuue9vSGjbGEYTPiJzsifkx4i1CWyged1smKLCNjktGJwPDTUxi9rDCWYyLehViATCvBNm9UPh",
  "key19": "2muEPzNHmdagZCyUrjMSbiNUg89XawJPETT7FkxuPJCtVWYgxaXWpi7gQEPi5oSVzCi7vbUhvAV8zKXqgbNEXrrQ",
  "key20": "32QeuGrEiqqPNnLmtWtcZdRMj3N4CfN2Gd7xNJ1MNG7ymCm3T6ijZm2YR7TsGHoxs11TEZBPh7NmRXmVc6SKCU3u",
  "key21": "4fXaJ2cnMDswbfiBSc6uVi5RkHAhNgkRi3r2QDGqDGnJ6Htg8br4qEqy5fSZ8mix9d5CxGqaU9KM5C7FtSrkeuyF",
  "key22": "5m3QtNGe34kfQ4So9kkDA1ec29HAi2Y6svLN7wUYoNYqoqXodMd9G3FjnenwJqEqBpRfUKT13tBr1YvJuCE32oTp",
  "key23": "3rFyAFcg1Kk4QaUD53ngbHa5VVQXckLsCgd8Ff1z2nDsnmvGA7gJbFRMVHtqbYDDHXJz8kLg5YUqGBxJHpb6UKfH",
  "key24": "237QK45639tmm9prPWaTyfwhwogWveRFBtMSsWg9cFLaxB5nqYS6JhuoxBbbZMHEbFeRLyWH6SRZN1obXzUN1WR9",
  "key25": "4GUKkPmehb54jm6ATmZ3AzQMcB7nn2hp1fQaSkEf1GzVSusLJUnMHeFp7aFQMxKCk3dd1ssyp8Z19GUsV1wJTWWD",
  "key26": "2yEUCwqKfVYGb769EkebfLt2mgqgnVzK4mWmt2DK5bbGtbLsppXe4PJffhwHC1H4BWxhrXUavTxg7tnKEcgtcYDG",
  "key27": "45UfdpxJiy2RCiNFE5yjCW2rbX4JApqPi9mRTDXSi6V8YaKPT5Cw3ypmVAaosJdGGwBej3rhsKMEBPPfWomiqddU",
  "key28": "5s59jjejShKAJb2eR1bAiwBcCFsVrSnYtx9nYKbd9tKnt3wrVTFxVZbnUt67Tr954MGnoF78HcdkfmtBcGV5HkyG",
  "key29": "3yWwoVtVNLBWYQsPFRWVTtkLsJUTURcrAG5gg6gGT3bpdEyUVGuKqreLTpvTUvU8P38JNTcgwhamXxWmNXLUbBvd",
  "key30": "54PLJfMDiTTgsWsHz9tRTAA76bE5cpNwmEWwL6gV2JyvyPnMsHJSF6NUPH15YkcYriRM6LzkdxhpNu8XGxFeB65K",
  "key31": "yZcGd4t1ChpicVwM2gEc4KuKk9fZyzut961iCZpNtRYtLux7j1hTes4P6u8pYcq6ymjBaWvi2CY9hS8RM8E8VBR",
  "key32": "oKKmwMWe5WYemSVYBFVVcPp57QTpZ2sEEaPHUGM7DSwhHaqPDYGseHUsVmzQC2rEFrVGPzHUdhrefXDNFfpzYbo",
  "key33": "48dFSCdpcYL5vtgzBhdPsd6NtTGPT2LDUz9ibjbh6qusPKP58ejaKE1pmtKRHS2o9HsU6ZW7HyiNNuA4JAbgp1bz",
  "key34": "JwyALBZ8rMNGRLRmUEx5LDLR7qdCvpcK8Anen9v5ehtGQWFPnMmgCw9YwU1h4S2jY45NxExD8CF3d2yttqdh6f9",
  "key35": "2mwWt4Bkhp9Z3h5YUzCBKZoJpdYNeNEHDP9j55T74bRo1RjCXcjDd6YR3VPbA2eN7qzEFYegXSWwqQzSQEoXvC7M"
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
