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
    "2PLjei6RGaAwJKidhTZwpGeWSDLWyitt6rzeY3GqufNh3u53n7QBYk354jpa8hgciia1f3UPm3xa2LuTRRPTzFPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRSioUn4KGCqVzWXvfdjReJJMsJtemsYhpUypA7TXQdx4sn5QvMCso9XHfV7YwthhCtG77Z518iwSjnu6uXmHmi",
  "key1": "2PHR4vLHtUx9J4eFwKch8DmtjV1ebuGytob9CtDr6TpQoA4ntoPCthKWbwacyWnRByk5Sbfd633v8EJKdAnbxjtT",
  "key2": "5zTosop8nQt3NENPF3YU7QCj6uQ7iwkr13e3rYGV1pStcBGAw6Ghphax2SM81uRPWADjdDbK3DsXXfHy6ytpuwVT",
  "key3": "5K9CGAPp4c8vD9byawXLx2zAoWs8NLnn3i4RJbxLgqHapdFdbMPRtz8S8rTYnP941NBwgoK6GeLya3RTQFBcfMW9",
  "key4": "AoLsG2E5aj5HiCAzMD5Dusv82KTxf5zG2npfbpQXUurCPbpEPG7CFLYABD18VLw7QqvDG6jQsE7kRvhC9WPvxeD",
  "key5": "5YXN7TUcW91Jfv9oonTpRqwzo5Brd89qe6hSdyAMkBS5uSQGrSeXWrH7w61TNrXPdA2Ruq5Riy9yM8XhDmsBue4F",
  "key6": "azYqhMqLrPfw5YRwX7eMrMhgp8GBtwwL5ZCdTkU1ExEWpeJ2zNS9mgP2cqkvq9U3gxdM2FLHXEWugCkg8LrjBK7",
  "key7": "4jtoyyita8t7TtfWdJrHxc4QKQjE2pE8mDrFgAGqtKgMfsDhzy82SMH4YvndkLaSqSJbpMC1GX3iK5HstDQzPeGm",
  "key8": "ykhciZspxy2tPMioQRTfhS4hrdY9tzdy8RuNz1UsjqcKtGBUUMBFBwq3yLcvegJHwYVTDSHmx2tkKGsyj7R2A9v",
  "key9": "3aLxNiksH9VUqDqjVg4VvSEegG2BazY8rb1ihkQNQoLXrWdA4mxe7RBsxm7yFBALEHEjYSvwxzcgmcdmThKT7xhS",
  "key10": "4r5Uc8RX3ehQKuktd8owkuTUShtVBBLuP1jFR4xmob5CCFYU5qEX7Yq2GSjBqtLPoesEu8FyuE6sc1qpmwujMJ2G",
  "key11": "krPNZW5UFBKoB7kXF9jYM98x6GCx9DDfdg6y3ewk83UNzqUVUXxfSuZJmtgB8eU7dizfNEknnvtA8ZjbYEbDWoY",
  "key12": "4URMEUwYqPfqEzofek2ndEoX3K55v564V9r5rsUzrwho4ECiChqmq6wcR3anHf9S1whJkKxiUy54ixZSogFoKQgE",
  "key13": "5nJ4eQDHAArnd6vacg7NWWipMSA6f97cHUJEYZpqVRVbiRjmXDafuXB1PAaPd5fi7CjPSQUZ3LcY2BkFkaDEb8PE",
  "key14": "u1M8KM58xQ8JQ9QrWPyaBBEaD73m9WiZSKQ4y2CAJmE5cHy8zDXAP1wBB47cwiEQ1B4qx678mBVK8LbBYG884mv",
  "key15": "3YzjZ4fpV1FEfwb2mUNyh2t6hZAZ2fHhbkqQTuntAGyifhwWEHbmxF4KvqTLwxzbNXZTi1QZczcc3uj72fdDGLp6",
  "key16": "3uThjbfL2UjZeBrZKJsxP1VQKLQK96zfyAa3jo53DCGDL8MDiL1VGQUTkm8dvrhNattWcmdfiGGcmPYWsEAMmXp5",
  "key17": "QwJj35Rm2kuSDSwhovZ2iaxSWEaRtL3ViBnRhwhrevvu8XRsmXeTiAtMtLPGWvN89Fe5wdmJKLpWnU162hxvNQU",
  "key18": "2CDpxFXCSzKYJSjcPSufhv2jJvdx1GhsjbtyPWVkg5Sq2mDThbqbc8nu6szCRyra1tghvZLoVAaXtq2tzNsvSWdC",
  "key19": "4fr1ffaR8htg5gTEiuWgP8xFRALFL185eNzYevnYfpRUjtTmoReX1R8z2syuUeJjmUngpdgR3QQkLDcAeToiAwHr",
  "key20": "4jw3F7EDDvyW7D3UgF4EtNjgsjUBrPmBU6V6HwXjdbKRSVFkftxYVfc5NzJR3RxgEr2g4ryWrDZhzgNfHXruugMx",
  "key21": "47zd1ukX9gfZkCyDDK6EZi6jSK6YzMMgxjVkeMYRGKiH9m57WZjAq5pDKUbm9HDqaVU7XCVxsmAeyUPYN6op9BZZ",
  "key22": "4e3Qni7J1tukQRtPHR8Ycu9wDzpG6ExcEUi9LkTvXtuYs5kW9jxtuFsN9f24EDVuF5M11t21T9dxPf8h5mSuiWeZ",
  "key23": "6YxnVj2s1U1qsMy5cqisLDEpb4XCn3fcBUVUufuyRsoJur99VKd1KoXTsvhgnN9Y2Crd6Uik8DewkpUSfdsqe94",
  "key24": "4uq5gLoj3FdaRikd1um2vMXZz7rXW6Jj4tBeSVqVzaYyRVtwgDMyvCrxtXw98CZJTCSesajf8tb1i4475ZkZaJLC",
  "key25": "L1gijJkNsvfAgwzkF3y8uF4w2AvogjsTLPA83fgG5fsPoKb6amekNPvJRhsJuE4ppttRFuxAUMfnZWMyQDWVGcD",
  "key26": "5guYqUxjsRmb1pbxVzZrmsSLu71bSmZntwaRqvUD5o2tVL7dJuCofG9jTxJpeHSaUqgscjruU7MKQYrL4tXGdQg7",
  "key27": "2RLjfdrRcfQ1uRdsPre1Msu4FbekuLeTY1GchB4LbcfxZ77eucTEMd9Byqg9KtXphBrt91w6B7c81cCEEDm2GHkj",
  "key28": "cnwMbN49yKhTpqMpq9Fpps3dm274GaGnUt1jxpSJMJdFUvc23PjSW79D9f3Bqr78Z96ncuN8CkcgPhutaczEvkz",
  "key29": "5tVt5CqjKTGACdJMMwuDVtifChkzBFrWJV26s4QgY8Mthpte2UWsCaogkwfM43cn2nV17tNN8chy7d7o2YFCwYFm",
  "key30": "61AqbyhPh4HcY5NHHnpHDVWpup5XN8UcUVjFZkwHWVtzj6Dynp1w83FbMYBjxKdJGuzAMXny6EXJpZ8se2GAJLkA",
  "key31": "2oH2GQNTMFVosK2SvqAU23hyJqtoW9pf2NGdZ6RBsA9dDEfgJtEFPqWQWdrrS9YiM4Vsk5eMkiXZcT2J1gaEaZYf",
  "key32": "6pU6HBUMRdL7pecAQF66Joed4xuVprFfz3hr7RaJmtvLgf2vYdu9Tbn2MGp9SLoSGqNDP1PmRRRjcDWdT7f5y9p",
  "key33": "eWszCnyxP8w7c76316FBQbhW6F4FqTvh3BEkBpcUMDQAuemhntDrzfVdbxTvbAYoTw4tYwMrGN2VtQ2kg5vrWSj",
  "key34": "3rmvxVit5WnT13LDtWR4jTaqjgVnWP5Jx6Z7ABKhRrFV1RjKsEE44jKhMsECoLatGGD4Uji9i6vWfJVT3LML2KEQ",
  "key35": "5Ym3evx3MQScdF2Z4eXPjfVKhzcMYnuv5rvqbRpuAM2ExcXjuQ57yqMArhiQrkL9beKMA6n8XXPZpzvR2rMGLjxD",
  "key36": "xDdx89yXuD7e3JLAQjwYqauNgpCTDF7asHGSPqT79UdvAXqejB4Mw7Jxb1nDKub7rwgtxTr5iQeBZB523LBshyy",
  "key37": "3dQ2xD6MccHixuZEp9YVhLDMtVfcozytfuK3WDrTqt77QAzocfbxCkdkmE9LHASDCn6HmURYYammMayBLUX8iNfd",
  "key38": "5HfmtBWREDi1hT4skbWuEZj566eVchKso2dS89RB5GbMDiWykoZE5RifU59bMuLNPFSCZFz5PAZx983zwbBjVjc9",
  "key39": "642Fy3oUJ4971ffKyGyfgj3nFNitrH1GbX1iN14AvpdSAr7anbT156d9azjMB8RQCmSbaBEaPHmz4PJsE5v2tnGM",
  "key40": "27VPvvZWby3D4tETB3ZDcbe9oDBRpRJunYXAMYpZA7Yi8VvyZDGzouskDX6sN2BzhAVNXap1GZ8V56x71NAofXCL",
  "key41": "5U8XpVnJXGJRLwKq8BV9qPypWPHjQTtqeNv7oTo2KMNncJxFcBpE1yVg4oyZdDpcYbHj4FAdg23JHEVGiVXqSqo3"
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
