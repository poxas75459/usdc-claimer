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
    "m7tnEfsuXuizGW6NdhiEkLF6EqeBcozVMn1rjRPaNUPSmaduSTCWfLuD9q938sLj9gp9AoMvh6i77qfNoZYjt4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBDjwc85JnHDGXXhCz6HgsoBpeoTwEL1JArBrMheif7Jx661aC5EhCSqxUTeStia6RgAR3HhKEUByXrGinXcbNr",
  "key1": "kE4qLQKLG4GEyMw2NCJJNtGdc8gmzZse4vaw8HcReZmzGoZUYLDDkCqUUpeDmsxN5ZJBubbEjJQuxJGTudv6SPp",
  "key2": "4SdwULnGbknx7VhsBzdYMJ3FaSEoGNMmF4VNTujifbehj2rvRFWW83Usj7jZR3f6D6avgCsg7BGvCiJx9RRs8nQt",
  "key3": "3MNGugn6enPQUVjbBemkuWtwZGSfvkvUxfzrqa5WDKBJ5bA9CWbRzvJCJqkXV9Biun7LYASpbU7Y8MzyEkuUA9kv",
  "key4": "3eQduSxrGsptVGtxgPBPmB4aVjvo7ymKCGbmPx7Cb8sSPXyWxdyBHHXsy2HFb3zm4XmoPmSdYukqy4VR5hMUp8V6",
  "key5": "XpYEUB19goUTmi3BxYu1Ld5LFb6yY4pwCxxKUgmfZw8YWZs5DT69pU3DVCANMUGzf1cghmCMsGsJi6y1hFKk6Gb",
  "key6": "37WVbtnnHoiUL5nszcAkiWbzrvDJMRgC5hd2gbeRkG96Yhn8kHsaED96xLVYJdMSXCbBhya9N4L4uKAj1ExJAnQv",
  "key7": "5fLGpv4XUaFoupRHRUYsYr9iK8vSjSa9hRj8WAepW1C4tcdF1RP5jnzbFGpFWAkNZNPJ21QSLjetsu9tXHTk3pB3",
  "key8": "5begaZCFBQbbES63uQPYyCpdvQvX2GUvAQGrKsxbyiUn14opkkzUhWidfD82cPJSHBwLP2WnXvJm6uBg42neVdpj",
  "key9": "E7ox6NPEKjCBLLPny1F2FqLEpmSENxmJ4Z4dn6tf8UYXVy7kZmvrk5vZ75Pp6Qu5tL2DGf6G848KP59xJVLu8Kd",
  "key10": "3Vs3jyN8yr9LTJzHFSwskPkybyLstpYoh9oeB2YRL11LbeH8cmKYXRytwzPXHZCa4kVQ5Lsu77m7aCJCoAMx3zAW",
  "key11": "2gWjhUdi7L8TW2v56bVvd9M4LvtZFvbFjdXF85hiNYpP98q9oTfEQoto87bYotbjAPjGAqA4D8rngQz9JPZMVahn",
  "key12": "3eux57vTeXUhXo5SA9KpmcTmrGuZJEbX7eCzU48QDdeuv1BjPjns9hiwGDKmqtBccHoqQY1YFgwL9atN4N5iLU1t",
  "key13": "4Sw9xSytdnsikpR92vUysYxL3uvBFXhDb9DcJhZJ7MtUCDCi28s6gUVR19vm5N2XViQ82jNHbLnqTA24bZdCnDjL",
  "key14": "5VFQZvbVnRSHyijd39JhZ1zzsh7e3rrrSNqVyWcCGZz8w3hPqYegcwM53gSMyFjtVYajjtQRRp29mwT8GySFGnJt",
  "key15": "25BKMcCW9QLvkorLBJsic37zhEa9KHV7eEWZ6NBst8XxNEXju2vqmfMmn3QF5phGkCbvoUWJcxcMmN9GHxzLTxU8",
  "key16": "2tzxxUwVoJSV4rNhqH9UnRXp7AWK6RiEopCo5D6sJ6GRZbqzFDkJxwkKSMkb3bm8GbUxv8hnucTyGkooV6PzsEWm",
  "key17": "66DfY7atijfVBu8cY1SaiypiWcAoefrG7nvEsFov62ymomKVmpQgAp2ovWUkxEx26omMEDZHdie1YWAGsW3dU5Qv",
  "key18": "5FNYSGU2L5oTBTZBSKvkfzGnytP2yssoGVYhethTiwFXiNQGCyf6JCTsNVTFtM8AMgZ58J1xU4wEA5fmjnyXFeDV",
  "key19": "4ww119ysLZfvLmFFBWMbVKPCpDEWdYDYG1dM3AAsP7eKXb12p5kBWY5NGH7Jr5mVC8NJs1rHwJ8vwirZRXfxx3yF",
  "key20": "CefUf2JwNr5qDEWteSGmRj9e5UQqWv2CS9tEJnTnkgSCSTWyx7raj628xf2MULbZJ3Dm6TnMZJZDQhovWmj4s29",
  "key21": "3nLzuARurvAaZa3BxULoGmz9b2CF84isyfM75XW9d6r8gSvPa19MAu3oJTK8YduVtoFWXrxv2EVS6xTZ4q2od68M",
  "key22": "4nUQNQ2erc56SKGgzAM7SfSK31PHXY4V441U2dRDYcY1fHYvF1XTQuGPTRXeMByhuTpetPVvBzXRhT2jVdwMnxZg",
  "key23": "2RF1fQZdrmNX632mwHAp5zKUiBLhpiC7w4irPkkH6TmmDHkPMic9MWirnDreUsTBtdiycnFzGg46okERksGt4djV",
  "key24": "HjEvuSBn9sZsWDMeZHcz1MnwepZu96hzhrZYgdxWwHTbuSEWMer6T6CSDeCvhQGhyr29xJ75RxGkzDXVjhhhfjH",
  "key25": "5AvNwtHKSuwvGXGxdE7o6VimnVXphHRhJ2aiL14JcesBk6wKb6ZQjKPr2k6VHXrpM7LzK6oqVYrkgKXHSyCZLPHX",
  "key26": "2vZoUEkmhWhksBw4a1qjKwmeZyQMhY9cgBFLJP1yHWUViGvvsa6ewtFPyJ9hqMF9oNMD85S6v7aABGPxehh4kf1d",
  "key27": "2mjnH4HruDmTT8s53537m7vdSy7iMsb5B56XBVW7L5CMBkVHgqu8Da4EBpwBfgPfUBrti41s4R1efaYE3iaiQVVM",
  "key28": "5nxoz56wxryyaf89P2dUjkKo942YFvWgK3UzNvoGLpXc7CTwy2ZacQgDytkV1U8Zw9h7aZAJ85eeXJaYNuqq1obL",
  "key29": "5vMmDnmP4QZFLSg1usfkKpByc9Ay9RhJ6gkJfhDjorPGLLr8o7K2JAGCEaRtJNe8vqJKE9WJezWjz9k3UAjvXzxB",
  "key30": "3omQ3VFPPXS9jabqtfHJFdHyMCqB6Pxc212jWw1gnMMCd4n6RfuvJKWuDgwXHkCpXw18Z1w1AKvXFvd4gLuEt6jD",
  "key31": "3ZrrV5r2Y1Y8rwEh4Jjo5uhdDRJQDZwQr4JDTAAh3p9CAWKUuVoQubJtfsxvUK8gxsnvHpDMR3DYa9hn1WDjCP4m",
  "key32": "28iWQGggQPhxsaBdC3AeXojphQ1tdtjSABUT8YeZk6tNzvg5yNXJh6nJynH7Lbm7db4tiDF379wxt9xcrGeweY2s",
  "key33": "3mfHbAGZFJVJ8kyr4qJLRsGPnF2c5D5taTKW3fTXgudScWUamta3xsRSEHK6pryjiwKxY7t3jDRC7nsTWSicLCqo",
  "key34": "2cGqMPAWPuv51wFkYmhzSK66pNQmGYQp1MsuXhuT41t2tEJ5RsupWnBef6ApxUJsUE8LE6VQTYWRfd4TLRpnp5Br",
  "key35": "4rPSBgXT59MmMZfknCYArYjKwhwgAV7kH4eMhBThQ88PTiEe2MAmzHJYcvaCKNVLkySgZ9m7nVDjWhg8NSSvVgsM",
  "key36": "Ni66aeyxepJEraapezRPfRMv6J4Mq9LHXmHmXaZXwdmcN3RTMmUqcEWtnqgg6eGvcwCLZZah5sCPDdspBY4u8CS",
  "key37": "3apex2FFeebSPsCCokC3b3imyn58wTX3szgYP8TTnoNAmSYuq396aK1Jr7V9fe9zGdd7zo9vyYKfQYw7gEE75sXq",
  "key38": "2HscfgPFPQQUhMC4cPTs2rHY9UovVCtc7VSzM4z9sjcBz6XzW4Wcnm6qesgn4Ntty2bHkWv1po7TWnho8gXkb4Yn",
  "key39": "Ad2tCnyTJtR7LdKpWBtqN8dawzLYgfpnnxnij9BpN6zmiHCn6mbewhnu8qfJzHdmuspNf2KCGnwyiAziM6Ymk8A",
  "key40": "32FsKkGqaqjGm7kktAESY7MrBP27jcvG43yHptFQc7GytEsGFhmULqTbkWrMb4SxxYdP7vr3ZVMrPEpz64nSTL5U"
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
