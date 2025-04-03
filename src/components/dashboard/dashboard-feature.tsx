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
    "4mPgHKsAmZiTHaJh7kkLtj4xMRVjKRQMW3p3AkGeGJy8X9BKKh2kkCrnKroX8RZ5pFQc1cEbJazeySVu8uiQc1K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gs1UPb1ZgfCUrRv1sjQXnwJsWmTbQeqUkWdaE5reu6V4oS7U35GtVK9up8kNFNWK3pqF6fFGgLVmonZW9hwEdZ8",
  "key1": "4LCnmcVggPUbCzeGHgzveyQ7wqw5ct5ztquPSeJDpkkB5GgEvzGhyfhiekCS3utdfQ45MYsD33bT2N26x8ubgHqC",
  "key2": "2Q49cRVunhU71MSEsnN2qC3MxF6DtVSvLek4u7CH82KipMzaYo4Fh1ZvgCxir5e6CenhqqtSu28uCiZfdTQhF8mz",
  "key3": "P7VjW9W5mzsx24yUS6ZyuzNmHRyhWS3ZddMmu88tRvpap5MLDUQxF2yuZ9xRPcQYQQkRf9wCEgNojdVDdoBrhNP",
  "key4": "4CMYuTKpJLNRnqKWEy2Mq6JrWJtRtQKdB4MQEtBT1zvzvoZkCGRAavXhaCVnobtBaZvzQ3eV7NDjcMM4WENAA4Uk",
  "key5": "646PVXesgzPyHZyKmt8yzcwa82azkyDwF8e2ZCSRoYefRqTJVfBwLwkzRKvzjSMgzW7nudYYTepZ2GZ6iXiJ6TqR",
  "key6": "hNG7qHLa4DG6kpRiFRwbXZxSDKAMvc7PGA5kzQ51Rm4FmZaMLvYkbS6zreBM7SwDSZrERNRoqakfbVCcSKJ2zCT",
  "key7": "5LLizpCTf1KhC45hT5okZ2e6ojPvCdzayQWyRcAAQPU2PMAsSMBHnFhNE4JzkDDzo5NUouG5CUCMG4ouGKkKBq5S",
  "key8": "4p8B97Se5HCMh9DN8LPRi5pherjJR578wdh9TRrUoMDXMGPb3RpJu3KCNbjtKcFGJeyh9RSCNbBqKTNrRwj7VRMK",
  "key9": "2ewXJDCvf3umJG7GFdc2CAX51Lx1awuN6MFVTFrQqMnEN74qf71wCXGHLoiCkgMWbpmaVfZLvyHfJwqna63Jo1s7",
  "key10": "3jv4hAeyox3HVVGWHdiMMsHPvirdrY24QgWXY5u72cowfdRNgrwX9fkeiLmMiML3MYbFZqt2cJVCi36pLonDtyiK",
  "key11": "2CfTzfVBMTczxJiv5e4p9n651fqUgzwTVAxJEkU7wfWYWKhiqzxtC895Rc9gS6tUJxNqXGjdCJqF8Xx593uEyHrK",
  "key12": "66cfWtypF9HPNQAT7oMhGeq5USFmnY6TyBpYwLLhjro2mb8fFzoj8EKeJehvNtaVp8tQy4YmURCRWLQc5WcjZviZ",
  "key13": "4HaYdvt48Mf7WWgULX9BBZzQBYYE55gXsNvdz2tx1L5ogU6acvXFJJXTZP6NyJbAVpRULWvj1rByAnRa91sRmygB",
  "key14": "5kY2bcaTdv6K73LE8xD2LSGfYAMGeYp8xdrdFYaHezrVftScgMudiaZLVCvNPsfszGai5GEscPfjDf5SXpexHb4h",
  "key15": "4QGqv8jeKZpXp81M61B8Yh5R3QVRQks4fZ3wyZDxv9n17HnGPFNg9PK457Ub3QTy97rDfXMNezPsuAyGbsxbvpTR",
  "key16": "2bJFHe3y1Dxyx4NHN18BMMus2sHSD4eyq24SpDrEijYfNbbmm8ksQK5cc5jCh44uyvwcfL2ow19DbbDWaSn2oCWg",
  "key17": "499BSBxA33eSFEW7HnyKjCPpbhmz9oHW9UemdYuCrCtK9yxifZxyCH7T1Lmay615tjntQpTBwAjUPnCEnL88x1rN",
  "key18": "3EYeHk19xE5w6576dZm5S5tJjegjntGRnHVqwhAT6nCi18C7NW4y34KXqatwrGAHzeqd5THCKmtvQmRB8pruKkyQ",
  "key19": "3k5zSPBypVkmtiLPhK2DRJwSWksgxHTWXu36brGNSa7U4xZkcVBZ7CBmf1VcR7DfQyJmJJ8SP8Pe2mpqSksiMVX9",
  "key20": "Ara79BeSLFVfByrSzuJy8jujQTVJ1bAbWELknF47Z7rLpJxVFfp7y4YrYhjmqLmj8dQ5NwbJcbQJAc2Lpd7FtQ7",
  "key21": "3MZ6cAyYJ4ELfHtWc7w6QE6ZtKN2B7gid7KFXUhMYtoRuyBoz5ATsMZb4ckRfbcLTD486QGSsfSBDfzFYv416odz",
  "key22": "tAUJmTj6E8Hxa7y8t7uWMZ5b9hYxu3GCVHVRddnqitbk6CS8TzGPgEKe7PWrnQ8SyZVxTdKqkrX7nwVJ9L14qE7",
  "key23": "2KJkzujPCBTuAUYj6Ciays8o69ccnbAk753rPmQiBR7XebJGqtQh3ZxG7KDAmhYANpKJwHDULgfYAxnh2jvjWEcw",
  "key24": "37preYV3pp7x3irPAwVbd2KFrPE4S2GCQU9rKZnRVbBr5cFqYvYCrPQBa1STKo674jVYYynNvNs5NUZJCQ4QXWD2",
  "key25": "3nBUkAdFVCNDLTbiyEo3xK5BMzbTjdho8ANV6k5Bg2r3ju3PyaQ3hUuj9HV5ki4s9PjNCKheV5QaRcjXoLeypUgo",
  "key26": "5nAHe9bqDVETity734KtBePiqfiG1Z3dCmmWyHKbsdcakVqnih89DpteL97cGW6DAiqZQyCoFp2vKQ8vy3SRVWwD",
  "key27": "BhhaWwPBEtgiCiZAcRwZYuM7eJQHzagNQNubN7jPPqs4U2X4a2iSWhgFMwmXbHQFfbDanFEovC7B5GjBTrtFYu9",
  "key28": "4F1Mf463iso3DCxiSvipSVSofbr1c7auCShpEyT89Zn1Q7uA6orXxNdesLr9cjtPDMC4FVfbQK3HqAXfRycqNj4C",
  "key29": "db89DQVfpkUuxfTaqVG7A7nNpXUsbFYktfbbcuRVYs2NvAEvXck7P1ih8C4U5DzWMKPJLHwYCq1eaBPvXFBZXaW",
  "key30": "5FvoEHMbrNGFyZ7sxSx7eGWBTkuWdCzpTnr6tLV92EVPQyAnt453kWWvETT4PwBxuxQN3EHUbHyvWUGecXEmZDBf",
  "key31": "3FUarP9jeVxXL1hnm3gAFpWZiUFVGR5qqCihpdgx6MRFVKsgjGVpjyqq96TWS4WGGj27QaZJcDiXGTUMgueD4e3n"
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
