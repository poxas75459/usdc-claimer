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
    "3TRTCkSWKh44HYLw7nVw5jYeL6W5FQzYBKgwVaG1ozgvvDVx4kc6XaKCq1v5fCNN7cpw1WjEHEC6dnsseTyWTdRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uABHzaTyDnbvj66sirmobaUSLYDTJGuNCCajXgQsvSV2ajJsLBwXuohDg6xYLUsdBttHFrRq4zfNJ7ssP9MAnNB",
  "key1": "4RoXaFxwnxgEhq6XHFwRf8g1BDDijtmKeWWRGvgEsi36zA2uu83486vVgpEvCt316Dhq9GJhaaH8ZHLddbDtQMGG",
  "key2": "3ALF4HymSZHGouxUgwsRwbSnsb9QGipy71wBU56QUEfSHPALJhdKxQqxnpWKWda9xCBMp3t3JRUqUBYpPCudVbu2",
  "key3": "3emyuuf16Z9xEw4TJvfgehXhG11t14bFPoK4J6ErAmTTr3i5wa6J6NxPtaJB6ib7mhLWv6qbvSmyLcbzRo5aicNN",
  "key4": "3qDHQKqUYuLkML5Mgyg8Hx8VdBdNGt1EhZMDsiF9D6b8Ww3kxYL2e4cXiX549T2qjCo7pbmwPFUEKKHPATftcRy3",
  "key5": "2dRJics5K4gxxggDzG5hyUkBw5jLrvgiAqEPMwdBEJydkjS7SH324cyrfVxqUongFvQsDwANgCTXjBgV9b8rvpZn",
  "key6": "3w2WFe7pXx7hbHghtFfsrD5PzarM4UCVnmp47F4zK3DBuDoP2xTeujZfyiHEqR4ZdpHipWbxt16maj8veQcJ63Fc",
  "key7": "36x395gLnX37wvDjQY2BA16q3oGQkeMwt8oYy8Vu8PvPR5vb4UwCMzu6xmBusVQfLRabi8veQAbwagVBdjAhhmc9",
  "key8": "2hnQZdTTqefSeEM1HpgzLtHtTKEsXyB43WBciw3tzWGAwxxvNm4N7NKpTVJq1LPdXke5ZsGoPCggGFFbwS3cPdiX",
  "key9": "2hdMtjDSy7SMFaghJyfGEY2LTnEWRWEgZHJTvAfjgzEYBprVjnHSXv3avZg3Gu4KmJfxjCBsfWTgcTxXRK6rXjEh",
  "key10": "21rRyMFWpb89S25o4uQjZAu9qKZyNp6c1ZQDLj5QCEvz6kLY63E4L89M3YLThvHkCmXYonb3Up44g258Yrn68FJ8",
  "key11": "3XLoaSJm493qvv6qyCJXbPJrbQkzPaeAji2Aq7XHEENdCG42r8bheoWnLX3BZvNUd1rrG5K89daDoHSCvzKW6Nho",
  "key12": "YiEdy1BVyFZgX8LLkUqnmv12bvZfKd3TtZcPY1gtGLUMCQGkrJkoCcSJeKE5nbbGvjQoTWGU8Lqg8jFv2pQSH4F",
  "key13": "4LUfp2Mde5dZSw7cAC44Wk1TBphewPxRhzmEv8ejmPudowvwNXxET7zTXT15akNE6vXHfYZYv1gPqwDnGdoiUG4z",
  "key14": "3h713oPfHKxWu1iG9Qxz21jouKS7TZwW2TuSPvx4vuMWkqm4RUTpdywLTQVqu1qZ9CLfjdQgBERqr17LbVSuwWcr",
  "key15": "36K1WE8VbTyk4C8jGnTmKHsSCVtDU9oQu9R6X9FtTUWDiwHbxZfdM8uLRhpPJ1A9GyTTdh8BXAMepjeg75BeyaCC",
  "key16": "31CpJZ2o6ZLfjYWKceFmergamh19HLeAArfMhgp7azvs2KpgdCK7C1he8qH1VLqJvcx9sY88S4J35xC7tirCoCP6",
  "key17": "2p8KWkSdXr6P41BLLVcbLSgfArEKz62mkKpucz7PeXU9xzN8VupTBz6VuuQQJr6k6D3BK8CjV1uifvHEhrTXtXsR",
  "key18": "2R9Jk7S6iyeGsq1UaGwyiLprdhM5USm462giAevQ7Lh8beCVtYFgzsa45tahtc9ZCBspoHAG7Xue7v7XkQh7E7C4",
  "key19": "5RR5tiysbZArejADwcUfg4MDassKh8z2ZVye5KvMkYbE17VQjzEtGpT2XnYKwgABvjMg7PfVedFhYYjqnCr8S59G",
  "key20": "PJemEgH11c7e83FEvUTBShLhKV8w1JxBakrEJdgBiVkbQd9HAyFfi5o63uhf93X4XdDt4PJrx2TFkdfVghKajzL",
  "key21": "4WMpY7YeSjModuhyJGbafuN21PgG3JN1N6Y8gbNjVFH12SfD7vPFHURyZcnHbbP4vV7Acs4RLgFYqssAS9S7ofs7",
  "key22": "QgDm8ZSk4qG2Q9uKNvpvfQ9dCjr923ffMFGkXCh26JXNGxwYSbR45MGN6mZ1RoXiPporHSH7zqsU3UJJwDVwzM5",
  "key23": "49GUfTBuULeMeyNg6zvvtV4wRM3LeRqmWEpAjn2ZprQZhkugzXFHVACagHVNcKvk6a19gtbwpNUmaUT2wF1AjGp5",
  "key24": "aQHHRS9JmhFVmzLeb7DYd5P9xQtSzMpN6iXeuUEagATe51Zu5G2sBVekWXknRRDD3M37zPhs12Ciek33A97NzuK",
  "key25": "4cTCs1JYiCNXvqwZ9wcTf5Pqc4Qqj4FgYoYcwVxkJ9ZSnLfCpRTtPM9jkfzfuRpcTqA5SFDxBuBtpbx2EXKRnhTv",
  "key26": "5uxa4vX1v4AX3ZLHtf9UwF2bTQG6FmnCvqKgGbM1WgSu1J843FtZhp2aYAnnZVhHDkimZaNwGE6xif7w2vTsbCdP",
  "key27": "2WnGt663P697cizMHAeaa3dQ4yEWsMPBuncsF1fK74uXw9JKEsKm8fnsyAHahek3ohRbBkBe6r3AJRZjRLVWjnsR",
  "key28": "3a3HQXLL4pYFtoqVyoDtXbTmT8wWA4HSmUbbJ5KwXxEtQDnWt6k7B3m9698emoffcLhmJJojhrZyNP27QYcNXKVA",
  "key29": "26NUEavai11ThvcKMXwE3CqT4N35Jro247QyMMZNWmAYQCuEZKaidUTCXcyLyDh4MKhV3B4RiT1r3HoGmGBqqhx3",
  "key30": "4hEmuccLQc5NvurQ1uddNFRFaTtRmjg5Pzedm2d6AimNSegWj5PkFKSXWT4JirbThx1p7U9qQbe5sxx3jZXoDhRN",
  "key31": "2FJ1qYgmRqCAytCa1c2rJ7U1AFy2uyR79m85X2yvc88iHNuKevSoSyaEuBkuWkpguv2o9YgbxWZTVYUanx4u2vX4",
  "key32": "pVcwGVaUA8K1vRi1LQ5dPkvJuGnVte6NbTfL5kXgL3NkJ3vk3jeA52vyXkw6q1kCR119iDWMhtptXkzHuMb9rrY",
  "key33": "2fMt5JpTgYCsuLGgA81cWitDPmJsvGXv9EadhBT5DrAw6pBJcpfsW4XHMrstBrSyCYtt61HSdHasy4Fmj1DmRjfQ",
  "key34": "5USoQWNmAHZb8ehBS2Yy3RtcyLLVAxCc92RQAVnhGJZeeDQy2TBt3AkKuXcvVh6fwDFSCD7eDbrj5bFHgszZRoqa",
  "key35": "5gg4oXDuDFeczGmK5ZHwu7VA51VXALyxotph6YvpgH5GoATWKsHtGttUC9BBMqw44bfVtYgV53ehtmWVH4bJBYTf"
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
