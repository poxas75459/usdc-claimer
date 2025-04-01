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
    "5K9XoUje4PmZez6PxbeQ88vEKDKyVDyfjpMr2S4yS46fEU1TSZsQBgWLXGeshjhWur28WB46RLRPat2pxz6FARbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZhcTWCXa6jFv5Tii7ZXzyjMEhRxEezmRTDwzEfLc2VCiSzVTB3UarEZH4FtTHXM6n8N4df7L7YywSgxjuo4Zuj",
  "key1": "2jwAogLXwk7aTaXXJFB4YsG2cLee3bpayBUBK13SYUcMZFdcADsAnWjj5kpyyF8xuzs6qUpdJfuBXUQ8UN9j6zGn",
  "key2": "3QRRYR4uzY4wHUgD5bDG1qM2t7UtDGwwRjjwkJhBybAJKQPcTmNEThWURzMDzEtRjK5MKQyvkmh54qcwANEy3SGT",
  "key3": "526uYythwdXw7hT7MLZh7c3qvyV5agudxza48heAZXWtGaGJGAfCWbmuzJWi28D6EZ7HogPBxWVD4ARka7fY66HA",
  "key4": "2PDPfGnWzieis7TR8ySKnWfNmqXbDGnerwJbcTe4WR7wjUpyuGp6wwNYn7u2JnJomAPmMAHHQu3Ew6WoDr44Anpv",
  "key5": "4Vx1KgoZY4gqAiNRTkU3uL7msMseqGj6xypKvtLi1UhDFQ3eDqCq58a1ny5sP6Y4gGHYgmS3TTXaydnjr1bQKAnM",
  "key6": "4mRN59xMVgUWpjNYf1Mv131FNWN63pRqAZdDT2oEnGsE5ZQkMevhR4WkgdRyRBrsbtyPNLLoDqnwT5NwZS3brnZt",
  "key7": "43owSEamtmtjKGxMFczr6UtHAfPVE2gLP4bjjdXJSthR2AcYrG4vhuZX7wQMngnAfQzFNUPt3rm89LbQxgNpnEaZ",
  "key8": "veG8zo96MH3rzVhJPfmQaiJhXc5pmPZUBUHwQjDdZKkVJpyA6jGhL8Ex8iV7jW3wQDPEJsN8ABZLu6EfsWGKRpp",
  "key9": "2wHRyZYh1MAwbGd4M7USuACetgN6SymuwJswJ8ofbikvmKbY2JmHgd97QaEc7kMa7A4JsZVFSyCPAoZdFfVuMeGp",
  "key10": "3iDf4c6rvEtpf3J3zxW4bmjrpxsmNH4Cg4WLPTfQevbUsjaw5NRxjAYSqMVHi6Gc4knje3cx5LrDW5vgZCYyESuH",
  "key11": "3jLQ8CC2mvke3dyYGQwTvfxDdFsLPLXBwFJEfko9RoDwUtJn6WTz2TpuF9YwA8VB9a9WVCi2oDvyB1QfYBvsHceU",
  "key12": "5wVk5o1FBgW6DquQ1bszB5W2rDsgT7Hy1PY5Guo9n7vdDVAfXpdRfwQxWT13VGjaXShp51K5Qd5MXBBoGhW76mCc",
  "key13": "Qk93cYZGTFvZp8v9RP2DL365aNGWeKGUfNcxqvgiAgVF3XorkgDu7QwZdzHxY9Uxn8YAWsaNYJfY9X88T589XYy",
  "key14": "2pA2TmJLGtHHmzMj146Q1N2nSiwgEu8RT1Le3N1eHBjiHuNZQ6xsuGSKerqqm5tP5A9KWggUcAYsAqF5YHRMUDgp",
  "key15": "37snSPSv7yDcgEmTsLNp3VqXWMYLZqEupRnSz3a8tFtHCrySifejBPzX449Jz8SwjKPiGM1fgWQLaRCTVmD5PNVT",
  "key16": "5fJoeinsQu8zDBos2kLVQYVygiH7uC2ZB8wopenCreAJUhUSfLwRgKYXaDz8F54eKT6sZYepac5jCfzqULWJva7i",
  "key17": "N9hSjwpgT4Gj5dDjUF5nBm2S3Vat4ibGBcV6EeoqiDNB8NQ9SWxuKiXYg9UodYKwXbT5Zw7qU4cxdJoKnUkUxSA",
  "key18": "2Hxzc2Nink2JvrJ55v9ij4hUG4DzZdz3NxPEpEUT9s12jFKhANa2i1Tv7hn5A1Ew3PbteEeA1GSrJBX6XyG8iw4M",
  "key19": "4Xs61gB6LUdzVW8WfNCMagCuB4eg7n8feYCmCkF7jfQUf3bqRg1Xnb6LLvXgsWSBs84z6TCgXV4QZHR8wtcCrftC",
  "key20": "4CbQfNtupVXhfeDiZArmQV48BZ2mfT3UNyhTXpMyH4UdekQJ2fDaezWQAXCQJvXeWN5A3aefkRkUWTxYKTLMp3qs",
  "key21": "7rB11UEhkUrtCnq5ajtE5u8mMMEM2u1LDKH1gzR3fhyZzrgUKWpKFNUAAkPLfZY7r14zdbCDfAqzJ3eBJpvTy7C",
  "key22": "4DDRP38sexjqppiLphXvD11Xy6q6XpWYA3YPWdxcAg4MjY2w2wocMpiJj24BcNZZsBR7SGortXuhzSCq71ChUZeD",
  "key23": "23RtGT5LPe346hHES8Jg2Eas8nJNMX39uK4T7pDCJSjkruPZwFwG29waK9uwwDrb477MDjT936CQ4WJ7gvMMUYEy",
  "key24": "35GQkLakgf6iPwYdJ4vRSBq5qpqG1zYbuBMNo3vcupGTqP8nURC167q19xZ8KL5VZk39by33mBXCSbUg9y3shkfS",
  "key25": "4ig7asJip76Bpyh8VrfcY2fC7oqBCkF4SeCmijHEn6dxSLs3j6qzSathHBPSQWBg16mVM13ttPM2pWGjmuDYSAc3",
  "key26": "2ggFBu77Py8556sZZhdsSpcq5UNAC7JzwHrHKCcsb26EqSquxetX6KFjvEpb761uhm9N8jHhyZeTWwLG2PS3nXTU",
  "key27": "2RZ2HCqPuZUWPdyRzasFPYUMQzqUigNRdJoVLq7bZgSdeyaFs4eQPK4FWckBqDnTGQKCM2ZWq8cTAw36vgzStoun",
  "key28": "4yo3AHtn7D8bNEyLbstgZwoiFWq9Cs8QgU6wpfYzSvnYrZ9BKJJc3GtRqCd3kP9HL26XyoJQDwuoiHvkip1Hj2Vh",
  "key29": "4rYFbx4f5fSxZV8uGCGgACLF2VX9zxqpUtPh4DhV87sVdupvJhmM1d3J1SxRCSeB3NcAyxYZ2MLcodQwKFa9UgmB",
  "key30": "5i1kVXTVrj8KQbsJFqbyvazbhcjLmZrNenDhyzvk2CwSnb1gxn1aaniPR6ijohpaKZ8GzCaMhR1LtT15Dq5zHecr",
  "key31": "2KUbwHhFcV3JaY8CM2EAnT4hkUhLKg2h3myQ7nH5mD8ko9LpoqNiqSfYV3Pgh4m32JzxDzPNHmGvV6buTxGMpjts",
  "key32": "63ngYVjBXajhg2Rarjs5AtARja7hbVg9hViLok4vPppo3bWPs9xuyfwxRqSXxNVgf2EbZcFZanZMqsMDrh3by5aP",
  "key33": "3XhWa6r6AbUnmssvKuAmmgs9sLitFNWoGszcXvu1oLtSgU7iuWsgAVrzmLHAtmxBT7K7DWLk6JuC3TXcbVY3cGRN",
  "key34": "2EBqLLqECFQFSLiYr83hkzjNKPmAo8tQatjzEtCx8PtaNQhNj6uJEhFTehrFJtYg9LWSdD2azu9wfkF4wdU9w8S",
  "key35": "QFunR1YsSuXePkokuXdzEoEgEXw7wPh6daEHd5DUbKbGQm8SNx2nr9VwVMcEbq8xCM1FMThPSzpXjaSKNXj4K2B",
  "key36": "5Xs1xgH41zZoxkD1JkwLhF24MbiVWiYciHpziVgEDWBrv3JpbCNwS9j8Z8HfGeXZnrihRAm14pXnpNizrJy3gPZL",
  "key37": "56S9ZxtfFz9xpChoS1xAQGXtxaQHm5chwquC5kuUHrmw4M4se2hrGYHnNxiyTMJsTLPM2RM6wCxqezX8kat6ADJN",
  "key38": "3C9Yc5YVAuxhSUGYfkaieRVh1e14LsB9KKuENGU1FZ7miXi74YSQzB1hqyk9HxAXERz7veHurn9q84nvERmb83vA"
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
