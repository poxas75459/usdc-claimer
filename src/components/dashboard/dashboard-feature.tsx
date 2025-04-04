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
    "2eAHHvGQNZmnPkB19WrSCHi3P7aZyj53zLqC2NggNXSCsoFGRzbBWp6hPf7gsDxEH2C8V92osnuozzoBDFNXdH9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QL9ciFdrFWDtNis2aSnqqy9LARj2fJ57QKmzmaxnVqBD1BUvoXzwP9LX2AYmJfwtGztG3nFwEo1NdYVDhgZUNHT",
  "key1": "mxgdwEXWs7NpdjdFcWQYj6vR21izN7Zqsev6HkCJK9QkiCrsu8XBquRcCsDimhkFL4HT4SW7YtSa63eMGZZrQMT",
  "key2": "3QSA8fzVThehyHQYD6zTnNWeDcbtjRQAL76dZRhepdJ4uVjUk6aHi2jgRDEendtYc97eAGPKFY3zKK9JF6Bdy724",
  "key3": "55jk28PEmchJstUjvSJv5F5w9TsKVYju45QmH8HKm9xLyVGXgX6jKjVhftrhJCycDUN4LaWx1BqKVreJg6bPpNAd",
  "key4": "54odQMF6kEdH9wUN38H843NEVPSqsLxhypAFcN5mvAaQXd6yWw1ss1kJN6b38GoUx1JSehyBW6ctJ8FkeBnFvheT",
  "key5": "5oLvHeQP9fDdaXBYiGr3o3Kts8td4MdM1YDt8WqP3QsczymURMj9jDA5giedkCAT4qSJVFYJa3A6sQxQPiMVE3SB",
  "key6": "PSFecLW5Whx5WyVEHFAyhWBCzBWyrERvoTibfRoSswcRxSUPJS4dAJiHm8pkXDr8pXc2AuHTpfQoKBhzChW9pu7",
  "key7": "PQw63ErQ7DDg9RkngtSV9NvXNbi1m7wRngNXEMmq1EE8xGnArnDL2XtkXy1anQcYPZ4j2Abch3o2V2dfTV2HK2r",
  "key8": "5GdZyq1QNyY1itzi6nP2s72RcgVgiR2wxSkVgT5ZPWnTmuH9XaG6SqcJffVTXgBqPVSZmZowNvSj828xzXJSH5he",
  "key9": "chVNGe1mQzsmrU2RsfwUCvi1Zu8Rfy12f6G8BGuHfrK7NAfFTxM49v9Ljv1451io95MVjvahRet6RnfaVnAW5Xf",
  "key10": "3HB7foCrJ1MDV6deg9dLbpKwPQvRHbzHS4WDeRjha2B34N85Pqe5MtXKYND4dyCwPFWQj8dbJuhQ2Eg5F7Mx96JP",
  "key11": "2B9qdhH7VqYHPsHuzE8h55gnRKxDptzvTEPMso72zt7KKhnHXhPph7uxhDxWvtguQ1z63tH7ic1EF8ijgWikMzkD",
  "key12": "39tTVoa8hUcugyDGxPfaYEBKnarWoTLwJBGLJCweaVB6TVmBwtcqxJ5727tn5YfSwC4u6nteNvXLC36otY5Z9TU7",
  "key13": "5yqEcNQAsraK6nwAxKR9xHfXZTaSYTWgn3HdZEcZMtuxdPXF63gh86HtR9ZJdFxeNTQ6PHD5HA2zPmfrYBnjWVtf",
  "key14": "3HFt36b66Pk7bNhXVCB66WUEzJwoTkEvxFVyNZfojXJqL3hz2V1BzL1VpUFYaUECnUmmi9VkYYkVLVPRhsiY2sKX",
  "key15": "3MnTRtkeUQgqWdL83oUVtHq67jMYpLU5RszGV6rMoUwpFni4ucDv3PbsrV4R4tkdYsXBFXhjsiPmwAegabLxWGCo",
  "key16": "53F6WMN2YtYEhkGpLmJWHSwWkCyHS8i5M8ctpjckW3vCENLM9L2MAP4svboARC8BPm9TWrbZGBVPqMKNuihGmjcZ",
  "key17": "26zefsHnkHgc2YgqoTDPY12pvNqLfrnwcVKEMN2FZdnXJuab5r3GYu6UDt324Mswxim6u9Tj91cyzpLBUyZ5t9Zh",
  "key18": "3sEhggWpVgXxBcmdQ6xzAw8QAf6mvGteEj7KUkviFNN6oMB982AAMvAHpMg8Nvb5bon3Hqhu2JgwkqPrXeP2JCi7",
  "key19": "wc5DVR42LPCiadrUWsmT4vTMfrCKGidxdPQ1nrjRgudQxFB7xBLkr8xK8PQXGhs1ksiPgHC7oi6x5rDUqL5WnDH",
  "key20": "3tjw8Lb6scpgk6QRNzXCaQjUifDRTkFLYQ8BGVL1CKAuoUAcMrnD24z4Ejefoh2WEyx3mv2eTsK6VnJuhavfp2yE",
  "key21": "3RteyDzPfZD2NTRp9hdJX7dtKmzovuKC5PQtsgzhE4ZqgYYmudDPzujm7MZZTJC23qakCmfRh4HuaSR7rGJcYnC8",
  "key22": "5r7ViAKkddnpzARqNdqCpWWqxwiD7LzBsokj1QHeoq4ZLiJnZEAS8ArPYouSEdW36YNwmGSgkEEnJjZ5Mqn9Eg8d",
  "key23": "67hfGEFNsEAjQDSz7jZRZ16GJW7hc4i7xDKhQn7ENW1QTnHoeLsiTzFdNJvsYeGMQyyph6RUnvcnHggYBKV9azv8",
  "key24": "3jVJrWjiBbZfdz1TaGv8XSo3kQG48uBTnnQn19mHbTyagqt2Sf6zkRvYuzcS5ukQLLMcfYmL7QsDS1UXXGyZdtig",
  "key25": "5x2FxJHxCNkMYynRHmdKEyXJ5D9Rw4z3VXGbQzz35QSJqmxWrZEMBwvWUa5AmU43RF94X2dYW73z4G8RGpREdjqo",
  "key26": "4qKSjZxbjvCv4jkjQp8Cq46XapfnbXntGLTZNiFBMCpoecQ8bx76pUGqMk3Zz3uG8WiEq4xET2oCZmWpouALziTc",
  "key27": "3swK34bLdaokmHsh1Soot6WWj2hZVZpsNeiRN1J5svpaxt6CzawRMbgLMCeyzbVwVcmRG9xakynUSWF4qUGNXDJe",
  "key28": "yatfi7Fp25akb9eZMGic3qJYb2GzzQ8hEDbdo5EockMZQaSbc1kEQpz1ff2E9JYBc9xkfFCDBGbucXakTWDcfth",
  "key29": "2pFaN69GNQY3GjzLBmsPoFEMq47JtLuNDvjY7PU6qRgPyX6CoiMwrdCVyguFvaJAHG9o1SW1Yd7v74iKgwYkv6CP",
  "key30": "5Xdobnjd14gHQi4DzyaMcRay56xeK465YdHtVavHier8a8fohhVHNaZJo5iYnaqgUjHf4Zqqd5Xu3GjxBvdNftMi",
  "key31": "3gRSiPkZpF5rpYiLuF9WKSrysFE33CcZi8xSbzsVwBMrP3dyiJKTC5qFynSpktHFaa3cNsdoiV8vxddBgJmfqZAX",
  "key32": "BCkHwhWbGJWGjUtdDzeCs7yM8krsdwMvYfhihcPMCAeGhetvqCsA1bs75W7jDrEa48FKDhhysjDWzpntUqw1jJB",
  "key33": "49ajDSCWM49FY3ASAGaE73XQB4Vy7kKHMA8Mmdkqx2bPCmMYY8rBrABdeGCLAViLheFa82gje7D2C8ZkzSS9RLwA",
  "key34": "248LCFwjoqR8ypEmHJYNDDeWML7W2nbRHdT9QfFLYo98r8VxZwBQxSpdgPt4TA2pmaZugweJaspitMiwgu8zBy3v",
  "key35": "2m3GnRNvwj4inhx3S3wzMpbsXUeuY8cxTbFnnHPgWTkHdWRkp3uv265zfUjDBApa2KgNTgm1Y4D2W6WfAE1STqGG",
  "key36": "2pRenGkVjfjbRXa1tQMn129BZv4rx62qJ8rSLSCo1EgjCJ1ta1CjKZ5A8jZGNDV3Kabzz7Aa2aDvV4RZP923mzHh",
  "key37": "2PGdZousRFjs5Kzuicw8iYKDdbzawhcbK7GXMpYst1ibcwf8qVTmeRdjab3tsv84qnT9uSQgdaxxaLkVaGN3Lzqh",
  "key38": "47pAQLYMEMH4BaKXd4PrybSDnmzBaUx3RPFUQT2h41Gf8h75RJkM5Pf9i8Xxg8yFfx1us1CKARL3PbeMzk5GXraS",
  "key39": "2T2PeYri6CzENM8NGVgBJ6dGTDhnmbvgpkvt32fTPvrUHFCAdDxr4yWX2FgLKbHHgFmN1v55sVQbRp7wnD3wGfCU",
  "key40": "55w7au9xfiv47KBFoA5SrkBaUKEhENnQuLCvc39ih8XLGuVEetPyff4x8an17iNdLoZankyQ5MyyFFkekHdmG1DU",
  "key41": "5esFJrS5LWbd3iXPS7b4T2h7bWthF3wJTiqLWEHGNzUCbDMVK2hfAdCowVSznbQnzMkXQNH9ByLp7L2EXzmppgMw",
  "key42": "5AzeJ5B8W6jLKjK4BxqoN1rUzjt8fwBTnNiRL7FZsQxAJfwxnFirjmi2jZTkzBugnY2pBvEFejkggfx8y9o1TkkP",
  "key43": "2ksmCzCfYDkGFCHKkHF7A6qRx1XRsBZjb6H8zVfiKYJfqTmcXq6zdXt9EwXjyXfLMpxsDXyK6jx7ex2QAZ1MJj12",
  "key44": "4k5SyoVsPxFXmwzMtoNztFBHA6DHFf1kpcaa7fzmCdkLnTgWuuHFfGBL9UtcdB5AipTMBjN5HwZjMYejffSPERYu",
  "key45": "3vVVeKD7KYjDjdgTA3PLxBLzxJaK2qm8wwSRq81ZRtDih912TzYhbU36QPJJ7q1KPRZzTDKooPu8jsqkAyYFtEaf"
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
