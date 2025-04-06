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
    "3DTyhXr3Wofu9afZHuqoghVyTe645ozPWWr2bfbyf28FD5aF8Gw2hmhfQNp5K6M7eBHHGeSWBK2KEbxPC37bAvgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M9eS65YZ5Yj79VBv4GNNk5CiT2FS71k1QeGPhjCm6u3Xomv6aJ1wZzP4FD1oFhpeN2qpMbi8t15iaAu3Peq1PTG",
  "key1": "2U3xnyhdqKVviqeHuvosGVKDFCe7feFbCPrZ3Jo951GL9HeTz4rdrQKzX486J7EHbkKD9VXXXTGJ2DKVGXkQ5xRU",
  "key2": "5d2KjUNsgDz1kpcy7U77cVWRP9TW2GZaYKSR5YSHPLSRJJtQSnxZQYikgtF1oycZrAPzRUFLxtQBNLuiWsKcNRdh",
  "key3": "2XKHwV68FQUffrXt6Jp1LNY8asd5mL9BP1HHrs9YGdw3W358DcZCaEVwYnkgiWgjde1siuHL93eJHz17cKv2MfF9",
  "key4": "4yyRqvNiJvCPxqwYMi1KJCkqCQrhikJAKtxe6rtsQPEVyvGAdByrxXZvtn12ocJqMoDJZvDbdkA943ThfxmpvwbH",
  "key5": "3ku6be4d55jnyikPThVqZfWBXKjjy1j464RV3b2jKS4mEeQ9pu1mpRX2bv5h1nzkNCfCC3pQp5DL3acrofxrApYn",
  "key6": "3stki7b7s1WKmqfDjdvQ9NVFF5QkAg6JNFictorbh8jGPmWDqQrG4WneXYTVHsUC2s1qLfwXkrZ6HX3VjLWeCBVA",
  "key7": "nRYwbo6GCzbmoRRm3ibk6uCRTwiN6pdbYLKKpDNLQ9q13PaHwKjKmNuNeHm7mbbvHDD1z2EGFK31JMcjkZhXjps",
  "key8": "4LMr41Tf3KSXHrQuJUCkQVh6KJaVaKUy1AVDrGo6xCewP5NnanSnqtwp5yFjyJ98mkgpFZ8ZawTiQx3Sd5ZeCXf8",
  "key9": "5sJiYDnVJXQqFLp4wk4mfnUiZ7tTxNhTZfKAaVXzbmHz9Xz3uTGGC8fNacuLvsQNhL8mwAbpLNGNMVJdkuQXUnNo",
  "key10": "31P4HeZSBJRfFaCUw84cP3oe2nR2HEw5AYJjGHqGzCRxBq85HU8zZDyTFwd3VCFR3MzozpfAjmkhpD4GLKUdETAb",
  "key11": "4VxN7i9ANNetrQAjitQYZosa6nqUj2z9ng4RRx6TbHeYP78TNvUWtf6c2BBrAzLnk1LkLTZz1cN3DMH96kAfQ8v5",
  "key12": "3znykcCamjMXC1ZoznP9go66igYMJgTjpWvfTXhmaGzBuvjaWcEqch8buujSCvLdEG2c2FEXziwTcHRPngLmQa8C",
  "key13": "2yVbsHf6Fi8gJ3UY5s57AGvuDUhDQJc6QXEWWyYPXdtpGWy4xePqgNL7dBQA58BJYF4zb6kv6H9dPDkJUakXaq4B",
  "key14": "46VrZQRZ4ao7nhCciNnMDLKBDFsXGMhjT6xyAVMURUJTSZHZJgfW9gL4gsQYZ4s2Yga5SKNJDBDX4qjjS2nLqEwQ",
  "key15": "3H7kqdSZHCLJoRXA5rYuVmDbKzawk3Gy1d7eceTyGbPRQ8mnippjTw4rQo4wusxKWPhZWUa31M8D6XYsb1Z1G6Z8",
  "key16": "4TxTE3FFsCDdi27KkDL2Vo91A1hCLxMtLpRhmDNwd5K5T5wNbJXnbnpzuqDVEXn1DLUfTGb8iT7woEXRXSx4UpDc",
  "key17": "5tkQKoHaxfQTM6sZSeJcZwTsufDNBFZMZ88Q14Kc9DoYs6G2YqFKe4ve6ppw9x8WGGHpMjz4ru1xQ39gV7EHiGmQ",
  "key18": "4g2kcGKqZwx1BDi7c42LMoBtCgzH9sBsSYNPFDsEBWWDytSfY7CGJdrcHzap1pMPXW7aEqk9a39jwrKLmjqeHYeh",
  "key19": "3mpVMBU3tER2gPtqPtFaARNxJuGmb8TAy8fn1txxU8yPq6adgdsD3J7agY1GA6E5dVC8rCTpJV5UdppJu1J8iHjQ",
  "key20": "4nisBRAt8pzycKgWtHYCSyCpomw5CYh7pmJpfhodGeq4N2zhRv4zKPybUrTq5mKnGodR2SxJRuroyBTHwUfrHCU9",
  "key21": "TBoLtjmLjuydMsdJx7FcR5nPnp9nD2qXaoz5yC4K2PYecctFF8xnJSZ76j3DTy2gJtDM2LpPCeLfAS4iaigyYid",
  "key22": "3VFhkAkBJorw732T8WqYP1BCKGEUyuoeQkwVXUzUYyGuijb6CAZdSwfDvRTKDMdLFceusbQmptNQ4Z3kJ7DRXuft",
  "key23": "6c5Rx3aAJBfXCYggc2WdvdejXS444sY2zQKDUDQZPfd6pbGQMGUZgjTupG71YbfrkeJ3ZiX2or8vZVtKULYot5j",
  "key24": "5NCvxipepTdjWmMyoyvhpP43ps7xE9oaPZ8VfGTpps2atNswP5wYp4Gr1c54rCKEXkLEfC51FKuC1bL62g3ufZ9f",
  "key25": "33T5eD9P6eSb9MbynXod3ZQKLbMCAJATXCW7rwgbitSSpoDzR4eXHvmQiLACZZzPKCovzn9Du9iCK29nAF5oSQ2b",
  "key26": "35FyzuJ1DoYXrcEf3QyT4Y4zChpG8LHztTJZcbWvVRLgPREU2sJ3kToeSj4UJEURMakAZ7xsM6C7KCLwBrVG52GD",
  "key27": "4xxQkCzkyzq4GH3sN244avAuE9BLmezYJUC6NK2Knm59zQKQcXDoqYieKt542SKbJcRSZy8bHi6G4H2BBBqxLQBm",
  "key28": "3wiPqMsKvFVkqv2CArH8ZqPDH4Rb91QDWTnVPxtgPN6n1TbwofrKV2bD4Z7KJU8QGGcbWiufPVBryyAoS9XkDNsY",
  "key29": "25q6MocqUmVVCS7zKK1PxTF8AhgsfAMuFEM3aogUqrXmU7dLyqkSUWpQr9WzWCexky5GfVPxpJNfSJKtJMFuQ6qz",
  "key30": "3T9bw5anyVwHYo55H19NApsy11zUeCBpkKNhuqszhhqi4nxr3oLr5cj1VVdbU5wGW5FYjdfSzoi2NVkxbxyuR5B2",
  "key31": "3rB6njXxhktXbihts5RGouMJry23tzMm6wzLZABh1sA1NJ4Edab5H2RMw2pk7Zx2w2BKjRfkfut6M8vJYQePjVHn",
  "key32": "3DEj9hPDqKtC8RphigcWMwEHbYLsrZxghzyZz1AXP1rc4nna4PPgbzPkVVrD7F4HqhUxZLPSpNfSDYxLBnFD3XFr",
  "key33": "5VkchHUnGjqkFnoeH2S26bF6CcTngDkuMdugdtRq196qQaKDgVhAGb7hDyBMuPobAXwtDFfa8FMXePH65Mr3ycmz",
  "key34": "3eCRKe9TMAqaqeUZ22su7X8z2f1coGusvS2wqVKQNtrXmXvjkqT1mZWBmUcxm61c339N1nGc9CVrRe49tUAkZJ61",
  "key35": "fzSgAJS1fAGxNce3QtBv7PLs9ekXscvzEHLeVEQfC37WBvBoqv24Z26bmYbbAfkSdaWcadVSuYqRN78LZ2k3TsT",
  "key36": "5P36LCZPYSmviPscUv4bNS9CuEca5PQkNjZvKfUyaM4CoteYmfWgeeC5teMZDm2b3jgd3vumQd6JYQbcT7sGc7Wq",
  "key37": "33fDvrCPnTdws7Wf2vc7gGjzpoFqiv6wi1HEuM8G6W2qEDfnW4H33g3QAkUXBpSkRJ5iWr9us7Q4eexxTpMeR8Tf",
  "key38": "5G7tJemnxnso1U1Uh8kVVbGn3V9MbhU4jgniDpB7AMm1eAZU8PCMTTAJFmxgWGvBaa38B5XNSek6xMgKpd1Y3eoh",
  "key39": "2mffpLeFSECJWhAQDKrdwzYv8WtdXWYQWWfUzexGT86pS9PQkY4mFSF5LeNL2indy6brifXtyKcmhDSXm9XeGuuf",
  "key40": "2jficT7TMSDRQ7NNYHTgXEMWpgwXgyQPa7Nw5oVjqHfmTCCDEnJMAfLWy77VxSaQPufYDJwDbEmuMKb2Q9wyyANr",
  "key41": "64vb6wAnLTFFWWiHyLeUaRFrAL5wzraQk1Po9RsyNUsq5zhc7qqsZ5PkcaYDHAxDLiawZ3TwPQqhicdS8FA732nJ",
  "key42": "5jtgvuYjQzF2cjNUj611ok6dsCM2nCrg3D2CvYoBJ8q6rpNaV3U7wyBpZXZt1FuUwdegCbJ48U6ctXzdXbXHZc2X",
  "key43": "2ebFzeAEzzKvbvEc7ARJ7NkrKF4yuueAyJ9vhPxz664kKhnp7VASEVXFhMaJtkmz761RVwzv8mXxAX4XGQrgzpg7",
  "key44": "2DpuDi55CEg7zeeKNedRxjhq7ZvJmT8YmcoxthoaiAWDV7okFzA9Jeea3J7tFq5PzG9iFqucKSxapKmNhFT2jmgy"
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
