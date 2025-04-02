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
    "3zvGJ7kyZWEBGkuVpDXKyneyHaoZ3GU1JdoMu9iAptgJG72sUw7kPeoq1GDR3XAmciUwyhA8bBqwnTiwGrp4tJtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7i3ZEvDG6Bvt81zfEK7Wft3cwZW7FtJbZVbBMAtXbzBKqy6zKJHARQrCFX8YeW3Aj45vsdo4mUMsEZYoeDvfCM",
  "key1": "HSbjp6BHMPNjWdMnCQMuuzzbW6mHVZUXjBT8yS6GQiGkpyfAwpRSSaKULGUafr3UmL7f4t5Wu78nKc5X1rHcHNL",
  "key2": "5V9K1bkMqBaPFiR2Jem3E81Pu3D7SzHxdWtHPERbme8E32HF8vUfoMbZQFc4sEo5EAzvu7qyeVeaY8nAbY6hBDLv",
  "key3": "39WUTKr5yF4FFzx5Vkxjd327VNRF96YFkX8uUA39sd42p1apsBBH4RW2FrNsRtyuSkLg2qVi21oqLFptzAcPrhLU",
  "key4": "5yw5W4XY9WPRYXW44mCcFoH9NH39XHhq3dtrudVebWKYZYN7SALtWHVgux4CUEYHz6D1VnqPrYkXMU1jMuyKjVRd",
  "key5": "9MNyRF385wJgRu8RZo47UEv9NAUNzNQrMTVopmmqd41n3BEJuNh6GRYytS8JEccRoqaeSrf1PUoTmm1mhudQyMC",
  "key6": "2B5Apn8BjfQbn8aRp11bifMtaYFP5gyJ475VzJt8RNTkvHVUoS34EbBAwm1DibPMKr3ntJacTV9ChjtNyWfPJHJF",
  "key7": "2kj3ftnpTSnbyokDPfSCPxdbkT3vgUfLM3ndQyKkT1QtF9FkHkS3rKJosFxRUsE2wkjFqtmixdh3RQVfAviSXLaL",
  "key8": "57YrY9acrRJmbdrCA24EqvAPYrqZYwMaViMqDueXg2S5f41P3eKv9uPhhV5aExeuSeT4BunWraAcSuaQdhUHoTfN",
  "key9": "4ANCPUP2dnHYGeMD22MJtFnguGfJ9v7tbu79s5adYULzw71fXGSqaCBj2yoVJNyxEEkQ4bdqcqSih4sjNuwr7Un3",
  "key10": "BcjrVqepyakrF24ZQ1BZphejuPXrcn1NVAT4gGi1XG8rUrVoN4ppSj6SKhA4k7E9LzSRnCRAQMD2iJox1t1LpJk",
  "key11": "2ZPsLjm4bLar5nKbgdr3ieYQqb2KgnUpWPa2u37zhshBYTZX3J1VDuzZsQgt2Y8BK7yVPpDtpc6bwZgcHLbnZKW",
  "key12": "67PSxVsjGT4R7Lte7AHQro2NhWyM4VNBGZGU8Mi9ftJfpDQQAfAr67BD7tfKpXeKVsH54ckMCayUj9DmV5r5b76D",
  "key13": "2pVcxRCnp1MMjLdSqh2kn9ZmHEM3eide1Xc3z6EXVyCm21ecccf1nbHwsXL5HsFrDRwDCikhMBqZVNrraQcs2ueG",
  "key14": "2zTWQCcoJnpjFSbQFrz425CRJUrVvN1nqqU5Rc35AMro7U6Rr886so5DcJgudfK6XBaLqGtS9YRwdgHcRNRh4d7v",
  "key15": "3VfgPkmZP3RqMVsZnF9oPiHrYvPRRGfcfHMwJQCpgHc7mKZSzUXy4Y6LzH3U48PQHiqKx1JwNteADFN7o3dmUiTV",
  "key16": "3XsDWL7xo1QGBEh4o6SCxZe1XSYcNBA2Wi87qX3FBuAui4nW3VkPkEgZSQazBexJ8JroHHGBAsr2EyuA6J2twRR4",
  "key17": "4QEazFeoizuaKnGF7LXx1RYYxvWN6ZrXScz2VtukY1jjSqA6iWjKCEAR1oT75KAhG8zuaXbNDoTT3MUhkNXBCWdA",
  "key18": "3CS6qCvF4hqELM165byeT5HKQ1pFEBCwAQKiQqR2q8Wqp6EKEtQiAVSdhcbNWQKmefeYgzvHakttDcWQ5CR4bfra",
  "key19": "bcKff4dQBVwGwY9GCNF23fvMdXRQatGbqniJTn1a5HGvWMT4DwBdUknsAfZxFSWKfQux48auucwEtSVt3zHc61e",
  "key20": "3znxqpMGZC75tLp9B4ebpWuYNmhikBYPVhsbh2Zd2SbcLgXY3D9xVfZfH4NrCb2S17EPGY1dihhnQjU9m1PW8wgm",
  "key21": "39iUsny45wbWZjk18ckYM1GXp4qWi3G5DgSP2qcABomnCG64JudKtM7wgFkuijKCAdzt7dp4V9tUQ15uj44NbUJk",
  "key22": "M4D8P2YMYFvw2fTiAxUEYDjDi2hbbPRJtZ8VKCiVqQ99AtY4KSn4CDjiS2LdK7ZeFgTB7bTXHcGnxZvnWo4Q22k",
  "key23": "5S3Anzd5CD1Crir5tiWX2B6VCYnsz5tJM5BaGzdxKAuPHGQvkcXEiFyqTEK11UL1onq1W8wkSBqiQzqyY99ujAfE",
  "key24": "2Ffbt6nRMgA2na9eZgaxXNfgpB1GPhBXwaD3ujdb8zt7RfZug6SYFvDDUzRYBkJLkkMQWsYkTwiXB1PtJVAJQNzQ",
  "key25": "58vH5ukrUpnhnracdp4tSfyhd1Yy6nmiy3TSppYmwTorJ3Bfc62ayVLscVH3cnPhP5s36hTSSh8hQ9y6Eq1ngBb1",
  "key26": "2ewbrMLwJ4kCyukRuXPj4vLxnUQPytXp3ZSKK7UwhviEqPuoFiPkRNyePTBMLRcKz4sypZUhR3RAzrqSDM5NrGHk",
  "key27": "oNfiXSteZ89FvwLAf6CG7aZehfa2MnmdCNgZXbbSMjUy9Co7QrhGySTTuWLqMrfKNojTTnzqQDPMi4M2SDSrCYr",
  "key28": "5ThMjbKv3ywexXzMrdtWJYTwryBDy2uwLHX7vQyXiiTf9cuKv5FFyVnpLfZmR6sHkghmhUxEHD59UKdRmM4dLASe",
  "key29": "3g1UoV1w3ohbUMm3ixwAafmhbY7D5eEmVZy4K64k9L2wiu8uu9FDAexXDppWBqCCD3QzXVkErCQB8dECR7XX6iz3",
  "key30": "36ABnCjF8rNi4q2FpAwPzH7d59v4Jpwx54oUWNMYKhE1iE91XAhwJvh8pRxgVBzXZYGNE1t13q2qaQbnt4NHgqxU",
  "key31": "2mRh7XEgQ7QiJPAHWyDm3PCjKqhnusnavpKUe8REqC9ZYwMpaYPMjaptSW67T383E5mXSZMGWQisX2WWZAyxLBQ2",
  "key32": "53PH4JLgvBUdZq3kwj2HLwkJbrsK6MsrGDR9xrQgc3wYwoNby6Nh7Hc8gxL18gzWDZ2mqrq5BkJoPo469ZZfEz4e",
  "key33": "5gmmxwzeaCUCpr4scWhUQ2GceR5w2VYehppu9oGJSSweWSjkmbaK3t25LB7MiB4SM8vqKduMME6rhFCKAGqrKsTs"
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
