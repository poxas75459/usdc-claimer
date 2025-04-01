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
    "2Tc2RBvvUeeSkH9hhBCz4YsH9r7jiQodTJbXP4YAafuxeqfiEkC183F7NKmGo2MmTjDziunvXHma8zzvKYefzNX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZWDLDMYqqujSptZdNoZ2rrZ1EdrPKeLKjV3r25jnXThxh2465NkCtxzdqgacW3erHkW62PkEwDMxpd2XSA7vSn",
  "key1": "8yAYddGU3g155vigd1YqRr77gvwcSqf6z2jgRUorpm37yNtUsfqqwmzR8286Fi5U6ZXzD9z6brMVsnCurvqndDm",
  "key2": "3EnGAYpybUGbWReiug7BQ1VrXqGTjqyvJbU3MFGTQm5rzCCr26BaDcPXQwbgJqz8XMEDe6HV8QN4iBypNQ9csC7N",
  "key3": "4ZF2ggjJhrhVeJKMSRpGPeCNdLkKxHKXQUdqzWC54L9bixELdUbUWo2a6PS3eNGRybyr41xUW1rf8rrDzzT8jpW9",
  "key4": "5UGJZ9wctFJYp9JPjwofDfSCE3Wr97ZK6kxu5FSWgybo9hpFcndpsQuTgWiVbecLFvZHQDqKGiB8HA4dgociHbQo",
  "key5": "3rySMhqUF8WRZ132hgHveMxQZJbdqbiTPXBd59yAtJiks3LPAGWwA4RsQUZEwZQeY68otxof1gpqyZttz7tghnCQ",
  "key6": "26ejmwVUaxuGy2SFtVAw4n9jJ3gjw3dusxUULQndjPr9XQxiaFrpGb3EvPGCHr14Vajv3vReii9T3SFP8Xu1mUM2",
  "key7": "4TWFx8cDHbdBgEeyP91XTugP1EGiatTj776x3R2srzGUeWZqcsVJNU4MChse6yoB63yGfKQ8tGVz2mq1mVnmL83K",
  "key8": "2UPMcLmk45Ef4gWxrGpSViy1ox9aEBm6DeGg6eP9Pp7tTLSF1yyHnom9dpuKKrAAf9qKnRu3VrQygVH17gnZGjic",
  "key9": "5xLjv1pT7TWyrtEktxeZCcy73Bb7CX24Sz1Phm5sThuTQckFqTAxVJt71bTtLpEAo7ExVPNqnZjRM1VhREPPcbLd",
  "key10": "SyNvtnS7zonoZy9RtEFjqYW6TsXoSiYvSxCYcrL5hw6fHmSiAcevPs1iDwM3tu4U8hBL8kFGAWeQoE8xjUHPDTo",
  "key11": "2o2ZY5iMpLncnBEAXjw5ycRX1n6qvuV712BortHCNZJUTQrN3etbojc4dTNqwwphGhXh57VvbECH62AZEP867gPy",
  "key12": "4tPctASKvqCHY4kZtuRYbbeNJ9EWQrzMSnUZMTDEE2f2cfHMGbFn2hCZP1sWN3DYcnmbvct9dT5ynkkdJYGcoggp",
  "key13": "5ikZot1fQmBemNydUfBsBpwYhZzYs2N1VKS3JM8iYRwFTjvNaL4Wt2ui8bXwdui7hoDhm9RGTmgnnfeByqzqq8Nm",
  "key14": "3mX5qe6ihZtdvMRELyhDkUo6uUCNHvE9WmADBgkwpgeaSJQQbdqX23asucu5JANvez5PcHHatRxXBeej1KPEwnwr",
  "key15": "59oo6srJPK8A9zHPoKuWMeA7shneRfDTpVwWGPhtHJxCPHo63Ksdur8amfnTHyo4QubRABwcAtfK4ctTFA3Ge15u",
  "key16": "2dMdE6S98BLVhBujT4souacqj5EQoJEdj3r3aFUQkE2ya6A8CHvHXd79aKmiFC9a2r8upejeyDmz3sctSetG5V1K",
  "key17": "58MsCbgU3xmks1UY3PbXAFFX6gCUHTs6EugEDCHAWrXKonUKsUh3c1bnTU9ZtNEfEqt2TbYM5jAHwUjLzexFtZSQ",
  "key18": "5XVAFN4nLw5rjjA67924MajRNZX7zXXxxyrVqxykohP9aFFpU4PwXKWPKDcdWiGgGimeecajNeWXhhqmGbZkhU44",
  "key19": "2Eb51GQmzN3TLQETWud2yLdYbpF2wp8sahynEWLsZnmQX3NtaySyKZVFZCdHdygfaBsCWSRJLP8WxeDDRxc6CBK6",
  "key20": "3Bn28jaQWRWx7Q3iSb8U7mY61Bc6KwXqBrq3ACUfqUeaZPxMDZ5wn5EXCG5qLk8CpXqyE5vyM6UdPvQYgrXKDvFf",
  "key21": "3r5i5x1hxzCQSGueywpxNz7T3buK8yUfQcYpRmG92MdBAkJ5RC4jsWXL4i7Qdu4HfnNBJmiDNopBCopqpBKEfj5W",
  "key22": "4JXt7PfgQBKaERtnm8oKGEysjRqXVmLZftyTnX9NKYQbVRWbW8bcQp3YR3QQg3muz4n2JBdbUCBmrDxaEppag2Wq",
  "key23": "4RNe41Hmvm9D2eZgu4JmQ6XwhB4cDvkqvpZi3qHK8hkdWJEhcmXgc6SDZSEo2mEtZuoJPEs6U95P2VmBzefTrV1s",
  "key24": "TPqQGnfXK723Mfmk8z7D9xawPjTKAEi14Kyk2kzNTRfujAGvT9ytT7txt9iTNXmbDzJU76UwVo3jh34FTjLr7hR",
  "key25": "3ZjFWNFJUSpppiAw5dDzknzQTN4saCDjjMkkbN9VVUYX4uku9pnUFP45qT1sKpD7hN7HCgUSKx7YK5kusXP74Ja7",
  "key26": "4m4vvVzu6VbfKSwyuvnNjZ9yfH6FhKYp3AqjyeBgxBN9Jm5DHnJdJYAFqZz83zEMp9GPA6JdBUAaUcePPKFLhmsg",
  "key27": "5otykUdQH5zidEm9tZ3TZYqcxmQDPmWwee87nbeCjL6UGtVC4jrqpNhWEYZyaHsoZ96dTkjNv1Mu1A9JwAmzxb3E",
  "key28": "jeqacJai2ZKbeQv2mNZXyacEj9K837GTDxS6mEQRgKPFR7odiVnZ7TRcbMSYiEvdsns1cFuwF5rkt3CUGiDqGdo",
  "key29": "5QyjwgwUsv4dvqpeTaWDkzB1QyPvkkZmeDzB9hJYoAW2puPoSfgAU8RhtH4MBdkTiDae364TqpNYkiN2a8QmuVnQ",
  "key30": "5XmgoEe1wxC6opj7WfAex8XSwpjdpb4RbNoL5pdeeAAPeZLTVr48YjASqHnRSnJibyu9jGTKFfgs35j7LWs3z4n7",
  "key31": "3RgkUmQmVFYkG5GkRmWBijYZYrvdEY3LhXSpKi6pjttZfz2HUyBgsz2ssR1ZGMGCmJPKSDPHsKVEKWsk7ANseEZc",
  "key32": "durNzBeDvyETQU5VJwuGicAQJJbJsJRtkdqTzyPB5RJANuYH7oqtjq1AMTwj3pn293vyoWRCvn7kYXAYpgi66Zp",
  "key33": "3cKEzAobLRmUYhywdDJHCGZanKUiu72cY8YzENJheM3fVVdZXegEWYY27heUBkPpTb9DxdWUHmYWriSSQJawDN8i",
  "key34": "529Jvr8tpRfVGpeacfs3wdamjU9ikn77jbtFaj2hV4eJHkc25L3MKwRcFaU94GBjNfE6mJHdWjDgxTMCWfLAXx3N",
  "key35": "5bmiYZ36XLtURK1zDRsUBVWa1gxNBopN2uRXzqC1fmgFDxbjV21nMhYvHa1opuhxJ2Fw6ahGtuU49SQcgN6B2ZEo",
  "key36": "5vkNCp4iNSxgqoT8fPur1DUgYtybtrUUNu2ub8tXSWNnvhZoB2QW7j3AZpkeRuEPbxbkSRe8C8RBX5xUbCwYonR1",
  "key37": "5cP3rP9XWztnQfbC8H39kVgZRb7Q9V17Gapn4bAYrzXVe2cYt4PFifAGxjXLdmKUryrnQkrer8XyK58QayyiZeiP",
  "key38": "3ssCmkeBVbkVHnL27y81oBZYxQZaPXAcEKvTnv4T3pJtK8bXBqiesEkUPp9vHPbxy7pXbtEkPA2iyF5mchi6RjLD",
  "key39": "2nN2erBC7AGAcS57r66KFARuFpmHRk7u3HVsroa7eijGg4SvMQ7dkCbRmhpwSFqYUYyaco9e2hkBQcWYpNoAGvjV"
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
