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
    "3HGbH7Z3R5GE3KWPwNzqbsxvAR8RGTMJuR3PySFAVfGaxQhvfUmLFceYvZo41oXLsogBT1qXs35j79s87YQGVC4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NN6MRCEnneqVfLvTpUPrBkVua9C8HUjEnKrLkjND7p9eMdCDoUpD66RsC9gcwgDKK9exQJd61LSULuSMaBHR58v",
  "key1": "4FLNH8aHgmkk41RAch87JhZ68TBRrmsZRsUBDN1uko5zPVbV8M3t2KGZyfmuJd7svAbzuzXSXt34c6EyxR5NhYzu",
  "key2": "5DqqAsXvUCHesQBpmXUdmNoc3uaBvTemyJxnpQLAAuQNqphRYEmxxcHcjrPUnpSffmSrxLG4FCYRbL7Ycf7YAm1L",
  "key3": "29L5anwrUX5VWNwC5yRMPhR8N8YJsCc5vxFnRxrtaZoGRCzdtp8FeZWsyCuRosingTgNzfq9DFXgmDH8mL7iNvuC",
  "key4": "4GFZqU52ozFSJLXmb6MrdL8PUgujzuuTTXYHhiwrMWzW5Jsdwhwi8ifof9LSaVks9kTHi2PYaMSJPxKYLGFA5PYd",
  "key5": "2i1DEGNSryVs8gGPzr7t5HdzdDyiRRKTHsCcpMDEkjEswq4tVh2fr6VebE6XDVTCXfJoVkhri9VPTYkwrzmoJ2yN",
  "key6": "2WSBbhrKjCkjVq3c12JyoqTtBPqsc8LwmxvhvMYGkksn7xnDkyXtRB7D5rjegpZnE5JWq9GvrAyGVY6auvFhvhb3",
  "key7": "4vGGZGeM8zKhCMb3b7ULP55aaTSLYL9qeCLRDAuaRuHoMsBrrsu5yt7biwSVGAVuzQ8HF6sRX8T1HEj81YQ4FZvM",
  "key8": "vVoUZkpUMZZLZcxrpuYNEX2zP4ZHDfeRbhFs38eKdtqasjRA27YrsxCiadRz8U2Ziy1shFBDNP6nyGJQwSsAzdT",
  "key9": "2SLZrYG22E5toTtBs85ziLX22CDGmPm22bRwQc3jnZKssmY4WeZXTy1s2UtJA95V3rvW6FArDKkJ7BTwyBnjLDr",
  "key10": "3Xn3V7PnLZcKDfMdtWbuYGM8CFFyTzgFRh2p1HXBBxf2dxznkGvYQYTZ3rKQrQqgxQGntM13NBtExCq5G5S9BPpJ",
  "key11": "PBL4Qb5MWEi9PHHBnWeBkhrbhzE7MrAhrQXJ7kZ5mQa4StrHboKLyjgU91BHMgufYibPT1M9UPH8Ycb2VBDSGBL",
  "key12": "gw46sp1LB9NNGeoeFcR9JTx2Pdh5W84k1Rb3QoNaUaJ9ztUGfWxZkixC9YrTrVifvwVx7QGz2XdMJxC8eHcs633",
  "key13": "zeXnTu83qLpzh8RZE5W2iWp8QiyjUgLY7gRsyNvfjXYLYFyt1GfjhAn8ZXKCRXFPa6tLBKnDeLnqRkmPGbwSMcv",
  "key14": "4iJw4ErZA5DgQcebECCFNyCJAKLKrgo1yk1i8ogyyfUbg2UPAam94fCsRTj2Ua3na3CoxyT8ks4ggZiiKQ7jHjkN",
  "key15": "5QdcDmygX33PyDdt3jaoerroxcEo3RFhnueKdVAc2zc6dViChg8oZYTK4NopmaNsHiKvwf4JMckvfjWsbBmtr9sm",
  "key16": "61YwZkeipUaL333qn2eAcn7954vkooNpaMkFzsTLSGxZdduqPp6Md4c83ReLwPi2tZrRfcZitervKsz441id7a72",
  "key17": "v8fF75JxoMJEpHKx7BmVjeLqV8qZ72Ebs1YGRmYvFoEWFnCXnS3ZD98khsv6Zigc8zmF2DewF1pum3y4kWAWyfY",
  "key18": "2CbS27Nazn11p3kzkvLenPsSpz6ffSmz17cES7hr8mRn9xxpW7WLSxBKsEjDZwn2TGxKK8bZf5mi5GpMANaUSLZi",
  "key19": "2zEcfArg3ru1SfLvuXnMN77QuZmeFFiWQboycX3FNkpi5uhhKMxn7FdD1uNnMyBawPTFbij7TJUFS9utWDvFF6N9",
  "key20": "3BWTSu5W9BXxYNv512N8SW1YnQxkC9EP8d1A61EbYDnAENjUx7Dqvv2zNB1bzbK8Ka3xqbmbf1KAZqsQoEw9Z2gG",
  "key21": "3kp4H32jRD5dbsdDLSrPoAY3Aoomg5rkKAUrRpSV9jJA3EHxqyvW25mmtycmNReiU7QSfrdYqAiF4z4S2obADCT2",
  "key22": "q76Gcn1cm3wuqZJ62dvUyK62d7oWEQ8sgTcY5oMQn6osXNoRuMQVvjRTWkWxdb2wP6L4teXd5Ey6hvgVZXdwNLu",
  "key23": "Nu2LZ4cyLVw9GHUV82fBEbZnST8umu5oiCDwBqB8Lo9q3dCTK8ZfMUySU2qT3HRdZLHAGJgtHhrL4L5ZDft5WKC",
  "key24": "4coZAbnmMtfxiQVdfMpndGz45icfGB3LimEHC49u62S1XxqSPuDeVtQUsaarHA8sEjjQbmVvucTEGZeTH6dNrn8e",
  "key25": "121MV7KuWech6UPG7kuDbaEy1E8gsg6vh34Pi4Fxf4jDVRJhhwWFW63SrYLkgEW8XiP4k2Kx4MSYXa8Ucx8d6bUK",
  "key26": "4kqGr666Bmfa5W54eENDAzjwDkV5QRysCECnpcFZNazRezxoKVsJ4xyrYGyLwnTVVquLZCQXpDWzAVRiWjeGRxcD",
  "key27": "5U83q2Vy7ZX9tbvBevf4HN9VbQBSK3z7vTfpXizfDmRWVMACHkjKqmtMzQLfUxXqrzRHUePfZxsZuidUyK3qEyPj",
  "key28": "4oSoRmwy31ybNNin5r9hBdLtZyruanJqZJpV8WTcZ4Bie3pNo4FyFbvJCGUWGGxDC5x51jPtrS57c8LBKzcYN3Ea",
  "key29": "4cMhaVoGSLjZWeGn7kT7pSmA1Umw9sG63eJPVbQbWdZgFMtmN8R2yswrFBk6bcbQaEJG7CE1tmUGhG9mGQChjW2F",
  "key30": "TaYhFKYtL4471Fn9E4AYFFBCMYJc5W14CvpTzAbGPPeUY5DvArcnUpzhLTj3y5Ey2wLCvqtgQy4urvWGTGMufDi",
  "key31": "4HEVpEVvxFfVvtt6rk7NKwS6s3JfXGoQe6CgYKb5kk92dS6eqHYFUvRxHTDXZQr1WBekRBAYd6A4JCMTThdcFZa8",
  "key32": "3Zw3npNXF7J1ZzUx7wdwiaSxxZxgdF2MaRPQeiAPTzuPb4SSYNfruSotPVWBse2JodQqRjvhhBN91ekfkzqsd88i",
  "key33": "53CiKuer63pNUqjgqRgoiN95PxQLXbZUh2Phburj2TwV5z3Av7tn8EL3jHj1S5cf2mm3FkBQvwtzvmFUbkhwDys",
  "key34": "4aeUEnyB2C1e85HaNnCHBVaQsewp6TScP5Vs2pSJqXKYMAThnhLSacREoq6wsbDy8SoZ4Gm4Xv9jfJVq91KLnr7D",
  "key35": "58LAUwCSDrJ15WK4z5VHbzx7cyJe8hCsbWH7CHXmH4dQyXza6UmNJ2nX1q6amTBFwooxaTbBw9M2xMkSAsEWT78P",
  "key36": "3nZY86qcoJNSFMrCY4yytkd6gfLkpoU22qPLq6MF8KFAHgS2qf4QxJLGBedTY4z3FXaoWAtjSKy6i97nxfgPukGd"
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
