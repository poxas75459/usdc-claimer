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
    "3ZNZSkRFnazLbESXihngocCJeNwPFRqAc6W6jEHTsGmgmnTrmeCTY7n9tGuUujdpKdFRQyLfn7xbk8bWNYBsoWgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diqRsXnKFNaymjstjXwCDW4d73gVNyfksJtk2s4QVsRwRyAabLx9iqFMG7sQbHD1vpH6G3zNUxmiBa5KEsWj8ws",
  "key1": "5B13JPaixrc4sdDtpaenz8PbqNqyRuSqbnhYFHBAxAcpH3DVFnJiko4isqg7e8SdHS28aFb1KrrRRm2xuGREd7zD",
  "key2": "2C5GC2ztLgwCYyM3AJ39CMi9W8k48fXCgsueSV9c2jDWoPc9DTFMJWb47Xc5r88MtyqBuqS27uPc1zYvcJ46Svmm",
  "key3": "8M63vrnVAWFtG5bceARwejPk87KaZdAhmk1oxtP8GtGfNNnJAdowxmBBd6T8RRnwxx6XrzmGMmtvVfRyJh8xygt",
  "key4": "dBJnTtXfqEByf25Uhzbw48hqhMFsE19FnJTF1PmZ86BBJR25mFQhMMmeF8UPE5j255VeD6Vs7bAYQrYgho3ecQt",
  "key5": "4xZxKNASoyVLjEBwk54ZDdyX5DHsFTfCmsxvdmFRTirp6vJ5MUPqCBtdKiv54agrGnfj3XxPiJ7Mm3eaM5itVPXK",
  "key6": "2xsBmxK17H2nKfMdiTUUfSjYPfcxkwYucn639r7siBHGzmrPaqZutKihbw3ULHyCrovUJM5YvwK952LQeSgcB4ai",
  "key7": "49XWCUWzW7LYwd5DkgfXhKdZdLfHEWovizmGKtnvsJx9nDd3bgsRtC4GquRJTQtsWCfsLhATNQkgLHdh2yTUK91n",
  "key8": "2QB4tudorgsZcE3aMq1e9QHx5qrT5FCpZESJLK7dXDnCQRTxreTVPyZwBzpo73xzQ27tKuiFEk1oF7mXqVJhE7Qk",
  "key9": "5h5NnyF4U3iC1f9UjzW4Qo6oqFcXHshQVs59C632fYUHECYMo81FKba6wGeuYZUd84vq59Uio3fAD1LpgJkZ2LhB",
  "key10": "2p22rVaA7aeCCuCnnv1Ehi1KPFHEGVJPPkyUnXmqmkpTMkbdffNGi26QttXJZSqX5fe7C7T5VyHoWq29rZtH6A9u",
  "key11": "38KhXVZ9Dcyuf9SgiEfPnfSEngUNwrCPqTMFG6ui8GV1cRDTM56EsxoTZQCBNwcHfDft5xpFMt5GEbhJqvbd8cwG",
  "key12": "2WviN41sQTVSppTgJ9E32rYe4QmuZxWGzWg5GTAmb5k7KH7raHbV79T7d3ScZPe4e2KzL689wrbD1K7LNurixmAU",
  "key13": "RDAZzc54ngGQ98fgdpb32DFE3P8WmAcRMmVUVCKypEHGKomCtZ16zsfRP31qtUBc3fn321cK5gwo499ivcovj52",
  "key14": "3SPxQCSuqmJ88mYXTU98iMEg8PgVE4UwPdMyFc5xwNYWNFBK3B73dsneDSgx1brABp4CsFyFMRTXGxqayKubBWCw",
  "key15": "qZWNAqhxeXU34H3XyWmgtDeiWttqSAd8i8ZyNGbCmjH9DCSWtvdQQi5jgbY8P1BcS7B5cpvJWgBDciewywjq2c4",
  "key16": "4RqRJwkfbW946UqUoQC3yvyMcHzPyaVb1sc68swyAj7KUoYf1BpjhBhhnVmKKYSVkkB5Boor1QV8AuTKrYSTbxMA",
  "key17": "sNucotiouRdw7CzMjmMBsJUiHZr1ouuP28JWarHVWJqxBnva2TBeSScdJt8vwbR7ac1Knc5QQjAtyvFqvZGqXZS",
  "key18": "2EuYzui4gUoBxPc57QCKoZijA33HZ78Dg92Fh2oh1jbNWEWuqyu4fQtQ8d1DNQqMysw1ruSvDJjJbwJcBrFV4cE8",
  "key19": "58pVJGeT427775c6CpZH4BhrRqLy1JESBvwM2tJyQTSGHfCkKNQt1dbw8szLC4NkGnLT51EQp9nd31r76qoMTG75",
  "key20": "gKpGibcJBnp6DAkh2az7EuqkGeRXi2pN65LeXXdKD7rR7PRaKiQzjnkBAhY8CfeLrpsqixPJt6ifmosQZ11Eov1",
  "key21": "2wqF7erRuYAdVEMuJLVRvgUCgxEU5F7a231iRNoUXKjfJAmUzWoJTmHuEeERVb3pVxCLwqRhhpTghXcww9QYEMzS",
  "key22": "3K7hD7LbayTqAHeFodyjUh32CQ5t8qShXEa6bahDwuSzrWr7sLKSfgJJX4X7Y3RQ7UKaq3wC7fLnF93GW6xLkj8o",
  "key23": "2g2QaVtSMKuG9rY1BuyL3FKFT78WYLDU2KZGnUAALH66aNPUsbRSzEvRuiyDyPm7eMxLph2ENBx5pJQMtP5hZ7vC",
  "key24": "4mEBSW3Jf2pfy2G1aS3nA8NHzamK7PGMtYGd36aNAw8FNijfWZ8AxZ9uudiSCAbkwGLkGS2AW7QGikmXLwH4nbtw",
  "key25": "5isPJ81qepD3DxM6obKhiyy9aQcsBuTWN1SYZrqfo3jDbECot2Zzq9w1Kj4pcPGyJDDmQUyrtUyQnGqw4JYpVioW",
  "key26": "3LCC5395bM7p5cw5NVtGaZVajxwskvUvXZFrFDhcF3J6Wve8LqL4dCeLuGjWs1bWBkRZa5d7sTLjodidwNLs8eVo",
  "key27": "5dCLxu3kv7qBFD7ZESVKH2BBcCMteywz5FTGURz46KUC5ZpaXS8Qzfip3snpHHKAo17SCCXpZSmKS6oXMiDt1STr",
  "key28": "66dN1EwCYvob6UzoBc7A7fekhdRnVPi5eyzTpxBb6wVFnVKtYAej4GJ1KJB8wTWCrt1PGy1rai1Pyf2BUfizzsy5",
  "key29": "36GgvogfjFbNeFw4Sj4RoFRTknpm3MUVnthMrBgUJZ6v62uYLMaLEeYCPNSynHY6kgAedasjAsE5ntnbyPiWxRZV",
  "key30": "28W76cUMZ8jwyWkb2vm4V2TN7HBRyWwmxHzZ1jgBtJwDuxzJcf1KvRsu4mgTnCcYRrqDypiDJRgdkjADCxt7UUeN",
  "key31": "3iFM8yWC6LGHa8w38j3nKnGyNPU8idVM6QJxynZcqxWgs9Zp49ky6pLDHBvS489doCXyPbKsvDju62wxXULMWWiE",
  "key32": "4xipsVtgACVVeYt6WddWbZPcyRLdXPpx63vzwaRpufUosfgeRTPHSWfzJAbSUpcoqXnC5fGXuGbz32T8agzwDmuu",
  "key33": "WT7RkQGu72QKXuv7nyeo6DDooxVzJLno6XtMEs6FpKjURo4R8DbNCPZiuJ6gTX9CueFzLiSv5dY941nTxTW3jz5",
  "key34": "29gF5MhLJkMaz7MJjbb3E6v7qGMEv2CKmdEqb6J9xv43fmYN5QeeBpCwRv6Z8UR6wxBWBbJzuH6sycZKNmiQE7uj",
  "key35": "3Ew1GMfnR1KwDdQTxcwiUjikBxfLP2dsWZbLPXv7Lu1XqDushWkG6RDs7R6p1o2Xb75p9Yv6KA7Na4r8HP7tRbjW"
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
