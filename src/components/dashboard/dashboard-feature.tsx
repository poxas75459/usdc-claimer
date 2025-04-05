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
    "4Q9f1g2JiHW8M1EhYfGBfvdGMARi3zi9EEaCgybx3WvCoijHvft6JTv8RSuh1nyzQSJVfd9bijuGVGa86pAd5KN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sW8uwDXruzwpNp25UHgc2Gybzs9RXwarUBVKwzZ15tmSJtAoQ7d5u4HdS1gKTB1utpUHZSY9GK9rRdXcJBCXRYo",
  "key1": "5e342kstegweAxE8TBhqPVcECfE8v1q2vtUmb7msYupr8PEgexMuN2wbKbEdU8YTppZkRDjeNc1vrgss3VDCGFRT",
  "key2": "4rp2sAD3vg7U4Rb9vdmDxrDs8Hvm2VwhifRiuGMoXqgdjfzQDEQWpVeggPkFNREMR4yGEgtbeUnZDy4GRp2mZMhT",
  "key3": "3dJoAZwTKZvE9qpHkrG8tqHzHPLHE7jw58wQExypThCTLjopsmFyedPg9w1JBcYovAeBthpp2asMhwUBTXcvzX7G",
  "key4": "vEX4BXHpTXX54epzGsZzvqCNpo7kKYh4g5xPi15iWF8TZ8XCBoanQdwxPBLWKUce5ooearBEtazmHq4D4MjmcER",
  "key5": "4eMgdGnXnA9hSTKRKEJNehuHUsvDM5VNQqE1g6arYnkATjnqSC9NqFxfAR4ug2gLmiDRz3UreYtLxkLcV6FUxBCF",
  "key6": "4r8YjY1nQJg3xs9TMCAKNf2RX6MmdiSZ4VRinVJgBz3LWeunMPndyGvcVZXsHM4TWbsEH129jZarqbbcRicRKrtY",
  "key7": "3SiSdoqHV21QjPEaNrXguDUJWgb4dpuFeh41iGV4GcKMKC9SXj3kMVdkVAeoZn4B4qpahmdAsD6kSbprfY1H6JcH",
  "key8": "4TjsHWsj7RWDVYX1PiioAxQYpwdWZDBUgQoWk5rKV3rGiF6Kj9AWV1i8itWEsCKSr2eTe8qdmotbyGjvWTRb3MGJ",
  "key9": "3Y1kYAbQjT5YkHdRAQL7rVD68VfwKnyuh2okZaG2NnMaTUHbSbjdq14p2FYybpZhXFTraXXucDoMfwc4FcHYmwqU",
  "key10": "4wzrbDEnhE2K35Heu82N6uridxcvnW69sXAURyntYUr7xjYT2oGQ9SeWPVMitfKZm6ANsnCV9WfED4a5NBGB3zkW",
  "key11": "3AJZ9XR6UxWFKPDhqsbGV5w7UciMsdth4E9FbxDu6PkKUqJewQA5uuUr36niskxbqbuJJtfF4SQrtsLbAZKSBqbf",
  "key12": "2jsmakxKTYPxc2mFhA6aZ4ieGEDQHCjyg3j2yQ5viQ6sDfpNvYMuivNHBT3Ut7iw5jQFcemarxkjtnUsxXTcfckv",
  "key13": "jrhV2bEYjxuYyyp5dmHNbkR2k1u1jDb2Ed5h5Doe8ZzQq8vPHXyxVPuHL6TJQ8Q1K6tG9fgMNm4t8UBSvh3xa1n",
  "key14": "3dKDK2VTEN1y8VUMp7pDZ2XnuUHZYHkHN6paziKpz9xxgXeEHuPhmBrRsonSrBwhux52L6SGZtALhSuUrWBU6siS",
  "key15": "5sDATvKTnsQuv8t34XEoubQ9vK5uffwXbq1Vjeo2MSCCZd3L1DxFftnj7RAyEVyyVWAauZyYcTKpzyU66moY9xps",
  "key16": "2Yeaf62wzH6b9GEUhJrwMSJkpJbGgR6Xq2BFzrbwzhoouqxDXBJcWPosbwKPe8T66aFMDPM91VFTWkbqit2Nd2rT",
  "key17": "AB3fvbtSitsNafyG7nmnJUUKwnooWWwvgvd8tjB9qwQPENRAESQkDCFZ9pLAQsjr6J6BjND4bBwZpJrehaK7WjK",
  "key18": "52QRLzmq68irPDqVnwpRUEmKziAfJa4vUeWjVys7DycHPRWd6hVr5VFH5tvB4v9xiQAL2gmkQE4uAjp2cYQFy8i6",
  "key19": "WaK7puJhqEVKvWHrzDksbqvaLfZLXGYCpndvVgVCHmTbeGUbdYusRTgE8Gt9eaSzDjPujsFH3Vmkxng2wBEyeDk",
  "key20": "4AMnkTZjjgpqVPBKKWYcDGcHn8ViZTFKp3WSn7aF7eJXkYr7MmeHFc1aKiMyCBH2bKSJ3h7gPPG5Q5QBAWJKNpcU",
  "key21": "2z3yAZ1w4L9cANn6QbqgVFtGC5ig7YZGJisn27dLpKqNR4JJowUs1wz68nFn2gLmA8PZ961TpMuiuUpeMD1TaBRV",
  "key22": "4Q52g1whGbTrSNkWEf46BS9jBMhd89WUhpjjEcx2JRseVndVS2bY9CASAhurhdZNdNKEgGZKzzTtgTmqmRD8JnUG",
  "key23": "2mzXNtBGMPG3dkVVs43QT2aHB8BnjRAuZBysCXNshK5DtNtfqMhhx8KWf1U3hxeFK22ex5BJ5cyFHYxAL7FVsJBt",
  "key24": "uPDBEW86zBPGdFx3LNctGQkkpWTbzra6ouuw8Yi85pVWPAeN8ZackW4YUh5oaXuTPYqsaMoRTaNLyqKkaAF8q6z",
  "key25": "sFj4XsVrAUmVcYhcaFaTawrRAuKTtm3owLRCikXLRsANPPRmLczpRbjT8JcGDh7z3rmXMPw28AmgMB16Hx3QLAf",
  "key26": "4HWfYHeLBANiB1G5vBGkT8BVHdTzmLJyYPwDLYCdHuVBSACmqMJgr6ShoTf2ZF84DnrDwJbaGaBtfgYHzHjLAtmL",
  "key27": "3MAcSEjwYr13DjzDohfFr4149fyejLEmQ71wmvUYTX7KZf4eRX2nBvgoHhxJYEBbSkxXMKCCM8ui8X7L5EKstkt8",
  "key28": "4cfvVrgR5skc89VazsP42nE2byNWFDKAYqXvWwc6zVCkazFKmRdEPGjGdMoLn9ps3EVVubuYnAQbwsgsuv5fL841",
  "key29": "2q2zUbeiGuWWXLFpBNdcZpGN2VvYLn2CBe9MWLxP24LhpGueoSAmhp81UVm2UBH6iF1GHStStUxBuM9c75VhEFqN",
  "key30": "3eN41jj45w9KXYGJSrGsnRdVEpSQfmgsxt28VZbYkJYeqRErJRpDZp7QzvCtprJH4V2xjc6v7U77jXxsMcNLbBZR",
  "key31": "6X9FedCGNyChVJrpkGhaVWDSKZG22BLcqLmshGSzxXshhjgtejEjhmfSaHe3R3QKE8xWxVVPq8Ho8S846crDx7S",
  "key32": "BLHwmK75ieDf5V47zDKxUsnVGY4zuJGBR7kvw6wLBw5Q1nuXjhmyUAHdsUUnqHMYs3zDEotAHsawFWaDYSkR3DM",
  "key33": "2qsANQHz6Gwf8PSW2LytSYUasb3FBLnBfZ1J5jLDQHKSvGw4dYupJKECXz16KDYMWjr4VKw58mC8FsPguqS9PWcy",
  "key34": "bbEornF5Eeid72BMbG43HY4SfcBG8WtqdXqodxbGtkop1hiQsL2ErBpBziGUyYK9MHwmCsfVXRNR6wYqzn5EzVi",
  "key35": "2R22EyYTaetBHrpiqYBVgorAGo6kbFhTSYoyPHvGxXGndbNVrT4e4VJwnRiaGehzJpsr3XRZjbp86ofZk9vdNi3u",
  "key36": "3W99ZQSazXr5uzFyHueD7FEHN1yqdrzdboJ7TbgdFxgsejYBdg6nBQSNotNbGZTKtDbtVXhvRcLvKU7y3LgEhBRY",
  "key37": "LSg6MPZK5yPYQktwUYVq3HjRa6YVFA9xqKtFnwBQzm74su5VcigFcJ9eCKgnVajKB84oTtdQsQHvGasPvfrkStd",
  "key38": "JLWykGb4DceQi98MiZN3n4314Rgorr44FMEbazAccTyF2HJYdBRvTaugRXrWvkyNqCVyjXVJ6kgPPt3vEg9gS1P",
  "key39": "4xPkRzXpAKdVaenApyHEmZSYBBp5g1cmFSApepPpbTYLcrVa15bqPSsUssJJimEcbQQkauEdwpVFryabvHXbfKz5",
  "key40": "4sRh4QmNA1p5f474fmp6dLN6X7madVkvc2octU4hM6j4NhvCcEekeDQT3o9YfVB2qT4rHWnAVH47EoeBHtCrcEC1",
  "key41": "4ZKHR6Gc7m9md9rocoGEcgX8b3C1ZFMRZTBFZVPsSk37HBTYXKNiTuYczemEeP5XTU3rJpBBkVPYkjyWNa856f71",
  "key42": "4ymGfeaZzeatYQZKd5898gn2nKpHZuUnvtkMrs6wiKLjhE7s9MSrAP3E21rbutPF9kQeuNXWAHwgmkoYGQL8Vht2",
  "key43": "4X3ARoSRTKx6SD9RQogjARZKxfGJAqeYPUXeVz1pRSdfWABJz9GZcqTW8G5VisLUdTov4VF4ZRcKpJroHnHVVNZw",
  "key44": "5cdrdi7pTWxkGsthBWLrqPTVearJUqZzyAyheRkoerHQcFBCcKsbah5Ue9inbQAh7VV3YQz3uvkXgwHVfhdqHyYX",
  "key45": "2VFqbbChMro5KzPXoC1dcrdBkZCSeVMzyRQot15AxfnVVCsa3iJAG8KSVcVwmhhgUJBBryiy3A5PLeeQRtzLrsGK",
  "key46": "27FHpfgKhxL5Gj1WMUG4j14MgRcukkopnmundZRqASur7voGRXavR9bxD4W9HFhNXec9u7GBmkeegG4VsfUYn7Zj",
  "key47": "5NgWkG2EGFdShAQS879KmpnyuzcxGBpFmYN77iQqN7EXUcqAvVdcZh1fho1gXs75M8xdyQXXytEja4k5e3FdE9Rm"
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
