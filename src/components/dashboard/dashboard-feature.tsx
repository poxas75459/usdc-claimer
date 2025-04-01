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
    "2tsSz9JPGSoU3k7zVAgzTkWb7PiqqUMw5a3YgVh3hXMKfR5ZNuAJVN1Rrzsh1qZLTz6Ug5qQ6JYHAaDYRSTEfm1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NLATbn5f9ArxTv4QFs2wV3mFWy7uS2srax2nt6Yj7EsYDWDE4NX7NHVc7AQEroTmTt66WXwz2Vrt7RDjrhKgTR",
  "key1": "2KLaGQTkthgyCxbiM1q48UiLCs4rwWvaYhbD6NezBjMyXpwCRjzxiD5g8DiRYgeAt4zapAtmjysSCxY6PNHbqKhm",
  "key2": "26FEkHQbAM4hEUWa4tnMUEg3g34moWHsZQQxAQGg9shwGwDbDuuLHzFGvqvrX3y54S7DGPLkZB4DYZkHwDffi4YD",
  "key3": "42Bg62GWvykzVwSYgGaGYLf6mhHjn1ypcD5pur9i2MmoPYz2F9YBv5XFTKVTN39k3NNKzwBCsvMMSpuej5a3G4Vy",
  "key4": "5GvEUfpyM1HRRXhANNWjKZMrcA968Br6DfCZfTUEPcLaS6Jp8E64NJgLTHDQzpDaziw32v7mYY2Dw6EaMJVrTe1H",
  "key5": "2SH4rrR3EezZx7gfeE8rD2oU4Y5Sssh7jh8CPD7pNDaJTZEmJPTA5o7bKPsoFWGMJXthD6GEneuKEuQ7DMaxGfkN",
  "key6": "3nojTZrRKg41eVSAeXSti1DX239NnckG5K1HXSCm3NU9fh4PagFmdbJUeQtJRgs48VZFAqRbHABNtBfXYoewGdND",
  "key7": "63bc1Bs8KfpczMyhECMLXExdriL7JNDAFcxfL13zW3eCQaJ1BuJRLS15WYuWPc4JrQcgosdswwM4APK6apB6xPiW",
  "key8": "2iecZrEbNQ31BTk3hhH9vbGBnkXf4k1Ejo1U4NuGJCWHkViuD4GTme81g96fkSqGipTz62CE86Faf2iQiD3mRcnu",
  "key9": "5Q4k7KYM7Po7qGsuE8fbUEezUjuk3QfsnFYvm1xXktDGFHyT1eya1R9eNvYv7mj2RVgqbgv6YXM4TxxA4o2MyvrL",
  "key10": "5p8R4UjPi1BqkDYWkysnFeNAqFJLa8HNxRg7CdyJu73qVjiALgmNKWZkMLmDTn27a373fHmt3Vzezi8eC39D6b3K",
  "key11": "5SEAEatZkZa2A9tcVpK8WFCf75KAWc5hQjGbvKmZDTQpfNZeViuAVT6toMMR6fMnPT4WGbdQqjDJoR1i1AEPYZFP",
  "key12": "2DWDCJ3L3XZe2rHvNn5HW3FwjSEF8KWmywCep5K8YYJjKUcrGUA4yuDUNhnaqgN5njSNdJ145aa5JB4BLTZHNvW",
  "key13": "27P7Sb1iUn1mqCruVz1fzvmY7p5sECrMNCwD8WCTGZ7umiAUCYVG4ETMAPxdMEWuByNwAactdB3pURuCGvR8Pa3Y",
  "key14": "658u2wFxn3zTvvve22Se8zaPN4MyQ4qNgoJ3Jv3aSWL6znEH9sM4MhhRe4ehSgW9YNeF9mKo5k8Py3edfJn5JQtj",
  "key15": "5WDC2Pvk4VvjdvLwMNNKU7rAEVQ3fA8VZFEAfBxwH1DjwBGZUQLdrMKj5zk3NX5FHrqTEP4xi3tFiw1vpdGd8U36",
  "key16": "Us7QccwWtZYrXxKRxdmAu3HhTmqCxfVofgVDcC9yPYs7w2yvb7H5FLZwC34TVntFd3qFxsJNUTTkSRfZPBtm42L",
  "key17": "2YHB8hMyQ6Z9doaUAHoiFePXraDs3J22boPJdUHsM1R8incAcUmfStLH9gyHgkzDGNUA5jRJKaCed9qTW8mE5toa",
  "key18": "3TrytUBx8X9NwVyPPFXTSF2d1KqUfox9ULTHRuJX3gg6e1Br1EkkFgrNqazor6G9adRNUZnxjA4u1Gpcst2Ad5BM",
  "key19": "4dF6ZkgRkJeKTHSY7Ux5xywH8XZdfNu2xVZn5q9SL2B4nRTJxp4zNK82hPYuC3VbnWFZxi76VT8UJpQ5yPUwgWcy",
  "key20": "y7iZv5ZxJ5bBNaQzahSwSqN7LE8XqR6LyaV8kAszx2jD2EKn2tExUPY5DZM7KFEyayNwJuWFH6CvHFt55Emme9G",
  "key21": "31xQZrr7b762EcyknPnpP6VNb8nJFgmgxLRWgdqHL6YhHTmv6ZkNwqYquWPHmBkGk4eCJR3HRdQ4BJxQP4Vna4fa",
  "key22": "VfgTsJELbWGL4Eju5PYmbutWnwb15VwfguzLFDYP2VGw2q8S7zGmXB3ZRsMKqH7XXuNXwjn3i9BBCv7emwXpDDs",
  "key23": "5sPBhrUqR7o82nivZb6kxF4ZM2YpWG3w4w1ZZj2VpG2VRcBxASp74P4ae87cbBfkrifLjhUoMaXZk5EC8cDhMZN8",
  "key24": "2yw3aYHZfshZAnKjqJwdUyranhrnonFoVJg7SeoXtc3WeoSib7EzHGWCAuM1r7frDo86nGLkqL6fUrsChHWU8BTe",
  "key25": "4WNFg2xW5NgEUXyEMmPLptfphYmn4FQMpvpfn3D3hmk3Se6jsMquEfDdH7nXBtXharP25LvkzNC5cQtHsNG1byQZ",
  "key26": "22NedZnrWjFgDH8PTinFAhcj6Qo8E9xogXCFWzBCaxcr4XJmixhqhNtxe2mLGL1WrUatQ394gUtXU8m8pPcUKRLA",
  "key27": "2C9kLnC2Phjed1df9jx8we4KrBsNTxpuECcVvpNpNZe5mvzAcqRbmyE3Jx57WvuwUwNyWYVamGquXudN3ZVg1iDz",
  "key28": "2Q5RYUeTygsieQ1XuNKVobmsMV9qUEKzVwTeEhtXp9pM4jxyXUyhzDeNrMpw6DT8Jt6dojQRuXDWMGD3sNqRFSCd",
  "key29": "21uzFBhk749mjitHrCxxAKcfnBBMmCJdbnkdJyzPVmw6iqtstYP6noTirepB6us4HH27dWnu46CmdaS6gMC8zPRT",
  "key30": "p11J8hKHaFuiBDvfh6Pj3sEpwQetd6FdTC3EemPuXKKL872K4ttizedXXrrUifDkVXiwzdeoQjcF6CkR14KBK6h",
  "key31": "4HiXgdeHwJEU2NuxgKe3DTVA463SwNTunq8ZnbuBsUSy5T3T5a2XHZ4NCGuH4p9a136ZzaDsNK4ZzdjdsJ3BCXZP",
  "key32": "SBLhSKfi23jG1jpBhpuksoedhEBzHeNGDSkiyyvJedUWNLdp24zsaXzDVEtn9W9Ln9XEkLFuJEtYkET394H4e6Y",
  "key33": "4bPtov6CuhPcuhJFwc2DHE25UmRPyUsPVHyuNjKKqJTYPPCxPgiuhFuZLkY4aQYzseqQr6JNbgoAyz3NvqUPWTfR",
  "key34": "66vvFxozj7bHhqxjbAeiX7SQTcEu3T8mjHmKkbNmAQTppz7jwSwzSAGDou13s489mM9Kp61mtBABHJ5LZZQfVcEA",
  "key35": "5EXVdoDWgQjciHAd53zighmztZnZPHBrsCU1rPdm1kEi36KH9Zqsp6uXMTi7ZrAmW4myjwCDHwu9LBhJZMFaLY4t",
  "key36": "49tY7i5MuBPTHPFEJ8XGRQJtMQS7jG1uLzPsFHCjdEWVDTFwdZ31JLkHMqSNxemWbZzTLovpb1WSKGjkxzcVboqV",
  "key37": "4sqhuC361FWpaHLYcaasZZmLsZeV7tT3EAtuFfuxBQWuGAaQ717JMEZee1ccqaH4iro6czBPRtvSuNYbxMFS75bd",
  "key38": "3auwh9z62VmjF5oi951rnY9knEVLdKyeev6By5gyE7Wh6AchKcd2DPLa6qtgcDuh9sQp5PLExRT8V13LXfcfnQiH",
  "key39": "45D2QXUMHVF75pw1xTab3exEe1oAkkjWH9361D1QkGaHuH4RWGhFvUVyP3zAuR1Qtqqm987E2QVEeUzLqRg5kXqe",
  "key40": "RcAUL9nPwwwxEHAifjMpuzkqx2FQFkk1UJ6hu9Kkexiv3aCEGUYZ3QFJj7vno7Xq6ygFve9Agz3crKwDddFW9N8",
  "key41": "5cg2fk6fFqKepdQe6WXqZcBJ4ASGKrdJZQrNhbvwXxmmi4LgkHANdEst8b8ZzfM5Jpy5ngAFdQQKvy6MTEpk6n3h",
  "key42": "D6nL24w5BZ443qCUzwEJE2yESANeFi5MC6X3NZHZecrqxeHniq3JDg1hkrK68oaFamYa45N54zv1pkEWAXgN3G2",
  "key43": "4TbqchWXgzpBQs79Z1dGtzdVXjwQFpP4v1KtTaZbn1mH4172osdvcVh1XA1hubKHeojUGG5knzUjzCCTG8adYZGu",
  "key44": "e4DPE88FNHQh7aVRC1LjG85WxAuzVxZVf8SV9CDzAjik6Rus9pZAcXnqWrUnyB94fGW9ABAxw8tHyR2LHQvrV3K",
  "key45": "57iNRQa85iQ8grTZ32ZVsaDDED8VmVnMJmtubrQj1uadLXcH8SMmg9ECd2MsZwmUfEAMtzJDProKapsJazfS3jmy",
  "key46": "5y3gG4YpfVkU6PXHnzC4Qg7B7J3gdhMFM5n3tdjExDMAGuWJPmyBhde1ejL7Pkc2g98iQfnZajirD6NWD8rG9u1x"
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
