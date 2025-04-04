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
    "3cqwrR3EWTKRsLjrXc6CsV9LchRunwXk6TL2WAhABqs2FVG9zjTXhTyfUarCLYsUV9cWaAEJKNs4LBENvXqAVqnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CqJhmLVHRjExhx74R23DG6b89mF3bnKpmXPeRVs2aAvEHA5DwtF4a3VLvdpi7Su3ioMrBgnPXUioyuZaTff4nf",
  "key1": "2CHaJFsTZGoz4oR1bwPyjoGAPEbUjwnjZN7Nf7jXxda8n83b6rAJHeyCZJ5n9pcKqo9atnARcdqVYcpbi5CegsGb",
  "key2": "5iTaxHeAoTxtLCX2Mxb67TnQyQUipgJssQJu97oWEpYJTgAY7QErEnFr7GAvNfUc7oXa7h6Pq9f555NJ4ir4ktjU",
  "key3": "5hBQXTvJtMffQF4CwMfXWTP7Kqu4x49u3auDwK2kRE7TKJbnHL3zhRCJjXZPnEQWaNjhnnYBpoBBAkLGL3pEVCKa",
  "key4": "43Sw6H4eoE8ozL454JSJ9UtdarDhir1QF9P7xX7QpAJ1whqJ6ZT4q1SupegMRCwjqfiep2ESfVyRih5DNNkBRobo",
  "key5": "2A1X7GBLyF7j9tt1b9t7bmR92eXKwcmRoZjxtrdjuMqVXqESp8NG52pGy34ckVDyVYmiRYwDsgWeeXv1vF2YxazV",
  "key6": "5Twy4uhkFXL9SFFsWMjy87yYrmEwj1QfoPdGjC8ZqNVqYH1yRYbgDUTxKC351XWP9ZUBn6AHcTNL2nsN7hbkigUq",
  "key7": "4aQr8Tee1wBu2NEFkig8HxVf96wWgwLjQDrDFkCkwHPV7pLsbsYb2CUCiUzijSHLcGW4R36xt3a3WBXK3k3mPf5y",
  "key8": "wbczm7hU5UFDuuDDmPjF2UWajEhy1QNUyubZkNLpvdj4iYjp1FKbRgeTgBLc11n8rPuNFNqV9d81R4XCAi42xtV",
  "key9": "5JsjCkA84e4nJ8Atkmnbt9Cj1s2CnLdiR4GrQdFccrgwyD3tytaAQ3G7PcbyZh6UMtFFP7FegHCyigQKNuJNh5LE",
  "key10": "3NVMFwHcuPPwhd6RE9tycLgRAyTmpBn3PZb36jcrQ1r21SVznLXGGiYjovtKGc6KmyL63b4VnFAb9jS21rAZyrL1",
  "key11": "5Zpet97XLwUKC3Nyp3wkdkYtfGRxa8tA2NptCp8yFg4ce8rKvHT2xtXLd4JZMF2AKHiWxMPYBsRD6GT3N9DsyX3G",
  "key12": "EAeMZGnntR47izwe2QnZzQ6jx3B5RFFSbVxNLHa2tQ4622ay2PrqZgizE3V1qYV2WqNyFQDCydXrRotpKG4r68f",
  "key13": "4ovRtntPqtA3oHa1Xfvca4VAawg4m8HVtkDQsWhjZQj7Q5pRnRUx1a6aFgfBMRa8FsRKpfFDAtbAHXanGUET82cE",
  "key14": "5h5CTBpxin4FURi2VFUvAq8es3vSxwP8UyWwCBKfQqSonax4n2vQagtaxY2Z5z98JUu3o3HbWb8z4eyfLUin11em",
  "key15": "58jwkDovdJqxq8k6xQbuWUWP4QPZSWHzdziKw51mr4w1fAyU3Y3i5cC8yTkhbosmmgni6FxWDXDuWqKn6mJNsfj",
  "key16": "3ZsobiDLBD3ALYp77yuWiHHo8KzTPrePJ283izgfTz4XAVUcUCXjm5MwcHuVpdQm9pgNbe5mc7UBzW344LMiMoo2",
  "key17": "2uV7njd3Vnt4UjBAvVX5RGR9sehr7yDdNe8GWNQjgfQ31mAuy51nx9NsTsQYJjWzbQ3c4G8NuCTzUnA19J3xnxPi",
  "key18": "W6BcTWnCXNBdrir6Ln2kpJi2i2Xxd1krJ98PHrNAoUpH7LeU7n4BLx7RBY12sTZAsFkFjzd1V9HU8a3t77ecFtk",
  "key19": "4S8gU9rLgTMR5kSometVuZMyntWyP8d8a86AmqCy4wEvYSYS3uknL46SWhmwppw74XGrCpMcyUNYiiZio9WqehJU",
  "key20": "48LvGWeHt4QPhjyi7ba1NJ2BtXJSEGfaJdz9hmnYUgUtqFWKxyMSQLxojgHoPWv4Qa6iPUeJEZXDF8pPUiJrLmCA",
  "key21": "X2cTEXgZiHodm2MtUcHxy7qAhTt43eU4aHEkWJ1PZRaFCwK58eDEL6zRnFnxrXLdXB7gp8X1zexutWaXFAAm6fJ",
  "key22": "3xtfPtuFRkM7DCTwCKJGngtSc4ctxCafpVcdd5oEnSvTQbfQCbR5RsTF9sVBoomJD3dxGvse2aFx52chmtxKMLua",
  "key23": "2V9GJdbCwLNAchRsB4gbM6jpoEnxJM4wXUDWfBSupbPaNnuzeoK6YFom1qy7Ystp5qLj1tuh3ME9aYiwmjZ6PZSx",
  "key24": "493dGN9kQDxrKM2HpPdKtY6eTbfjv11mDr3csFa8Eo4LPBrCgQd94gQjTA3QxLYH9oNQjZN6v8LyZ171d8HbfTv4",
  "key25": "2XdaitYLB2WEpnjMJuw5Fqv8XxtmXNvbK5MupLpWpqtt3KNuSjXeCXUioWs97bWqZHPbntDYzjFYpPukdcMJgL5P",
  "key26": "3ec6tFQ4HKWgrEQj9gixriPS7xfcZykTxKCnboiYd8fCSmYLTRDaghWQgUntFNcHGu2mjy9iyoVvQJJccJ43upCY",
  "key27": "3Hg5aFFq6XNhG1vwouNKfPy2xoUdFVTHuvjHjdZ4689fUie8hFgVighcsMSjCAtaosQLMup34EhJFemzMGdszuC9",
  "key28": "4wjQ94Hxop7g3iqTSAacZJQGAocB2yYSekpiSdE5b65Rz6vnfsMd6KGWoPYuEaejKZVCuCvk7r77s9veVqzLeSVX",
  "key29": "5Pnx6Yzh3zuCjvgFUymbnS2Srn4oMY5KZaETNz2C9NRaDDuEVbDeuPWBPGmf7Wf9yGKLWhEtfqVe4XJ4iCzjmB2M",
  "key30": "5dNfpoz1zSYPbmotTYW21Qjt6mXzyUhaxkU6bYS4DmK5u5uxDRL157H1nGsqL1TuQHn9wg3ZYxwe9egAoTLCdt84",
  "key31": "zkaPYupMU5KJhN1aSCWJMvac7WPbYLtgmzJFrPugRLxGPQEkB4SwBZv8r3yVe3uLJTiq58QRG4S6ZVyVTxPK1Qh",
  "key32": "5PeWjtZ5KSeWM6a6poLd8LRkWDSUtvDdsFKc9rH8VRt6MWt7GvfPT9mWx8BBMy13KNHwGDSkYPKBfmaSArJqKnoN",
  "key33": "QmULiokXoiEFYBCPouQZGuaVA6RkoTv3C3uGENVWGDmqiSzYnBWcQuPtSRGjvrRscLjsRAZiiTstwfJdW4GZ4dW",
  "key34": "5VxhyCh2hYPiceL7aho1NdPMEBzKxUcFyjHY5XHe4YqzfSvRg6DjXhqf4n1jEttrKXXQXyQfG362hgC1w67nmtTZ",
  "key35": "uiyqyzEp8EMcq5QNg7aQCSeVzhq3QcsqfXpAb2Bqq891hoQ9GLGBM92JPYCiZ9N2pWy3VFFYj5kDgPChs4BdcLW",
  "key36": "ZuUdVW1kriHmWP5vP6kQX7DhWyqStLu7oaBz9VzovkGzF6jfnweMsKT9KdBVUupBH1GbB9EJUVRYWSL9F95U2XF",
  "key37": "5TxsY1eLMMBNeZj3UnitsXHb8rj8Ny9VbjxdH43ChgpeqAuJNHf2r4Vxb4khnLvLtKFKb1KW8hJB97PCMRmZ7KUi",
  "key38": "XgTcmgxs2JsiY4SfQhpy3CpmmpR3DPFW1DzkSQ4nX4xq9sF8VYTeNNyTJkdz7w2JNYeDVmizsevhcQxZ6CMvDoM",
  "key39": "4R4XjWNmdweHf6ZARi6Vrg7ogVpKiH2FYYSXdW2w7ShTEXg6V91g5h4fgoR3QYXCGLmsdZRTGKbDhsb6zR72LY2c",
  "key40": "38FjUvJ95m6TdkEbmTye6HuXy8jA8hMkfJqhtHoR18pgdkwPPgxKbDfFnLTdRLjLDJn2jQnbcgrJ2wzWYxXpo7Hg",
  "key41": "qt2KJCbYx4GFFC5j1697xqMcQysiZ2w1pCNZEheWGGzBPBsoywDKUETkntJAXnfxx1V9AyQRQjCKvTnNQKeyhLw",
  "key42": "3SgjsZ5qxSgWnJnoGFNVDu27bpX6w7BmLh7R8hrEem3gEUzKYXSP1DbMDVXLpqyvaVGT1DvzHEnWrymiyyur5Dzs",
  "key43": "J3KZ4vx6kxhKGfar3X7ZYMPwYgXpLuuhKr5hnqCZjEvjZggnTkACNiydn8g2Sg9viGjm8fP93PUJinLATwy8cer"
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
