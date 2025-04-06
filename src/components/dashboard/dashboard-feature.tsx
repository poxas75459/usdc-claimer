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
    "5CRKPhiwBUVGakYYDnW2XU3FUjKkf1YrcLKk6KBzWYyuc3FRAjmbvYuL6oZB4nftZmPqP495ZLLpxjj9AKWw7XUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Atm55uN6GHQCFmG4VeMhEFoTL67iqxjZ4raBcEg8BF1NB3L42YBJur4SkVj62jtLyvso5KcGAXa8iwBqmScqU6",
  "key1": "3QJsppSK4D1rXeTxvqBHQwyC2FTY4mRFKDeqpLwYPfeGjaffugrKtizXdAFAfjA3Cxars1HVbYWwMy98vMj6zcvn",
  "key2": "3MVHdv1wVHV6Egw9hzfW8hX7dL1f3jpWcHgSc29MBtMNCnMDGEL4ZXPtvLF4EJiwxgH4hhFN4uXLYjqR9WtMDFf1",
  "key3": "2DJJaXweZ9e9uKAVZNu7gyWRYHB7LytsUspUWEKootBfQ7MRGvWaf51p2yV44sCdPjqA7teg1g4yPHHhekhNsuXY",
  "key4": "26Z3gt6o1FWEgXVjUK3aDQEWXiv8tLQsbLYEoxkzkkZaKXvn2tRLogTW6DTpeuphnpCDPuSp14ShquSJUrTf38q2",
  "key5": "2ryj7JNZeAxWXht9L5rQw4b48qywyeQPuBLED1u4MTwCTCwh7uMKSAv3xWPnenYe2rMThmUhfyemugyLrkFsQhzp",
  "key6": "2FGyeB3xjMHc3oFweAju2FF8TYiZGtgdmNeX7nHXvFM998hZ97FiP97A6NztRAdfyw3RCRbfbFEqb4LRyAk5TgRK",
  "key7": "4ZEo9KUSLvwK26FiuF7Z4RaJ81XWezFjo4aMTEwUMadXf6eAv9P5u8N3kHEHcH5dNnuf1Qo5SJxpTfKcF6NiWpY8",
  "key8": "5faKiBp1hgyxCQjpHfp5HTRA7bRMpVpMRrQzeaiKbmJGy7zj2gxThYiyEUwcSsCHpcziKTeFK7j8hseTvzBb3NtJ",
  "key9": "XEeYhVmZvT8wVpLpUpusqjKZGb3qvjtSrRwL1T23XNvD3QVex5BVUiz7rMsKDdg6g76gQL3ajdraURYzZNVLxHX",
  "key10": "3ZibnCV2PkPoZbXQPdnQXbbe9SLgWWHQNrbbP7LoWLebJH77EQmFKuAhNamHqw9uxUQLS1PeiT5tDaUNkLe1ZTyB",
  "key11": "4J7Tp5WgBE81f8Tbw1kxo4mKFDzJ1AmfoYTrdd381wooPzHTvSXqZTP1CH3bUEpHEapbnCyUs6kZRC6q9GKgtf7v",
  "key12": "23Qa2qY1Bq7tmy8L67PU2cwP61xF6e9XRLkNXD4AmDGVtMstQhdrB4h4S3qNdrPCuCshAZgpXTmzj8UnPWwRve1s",
  "key13": "3eM662KR39ejSEwYLbc7SeQ4rbJKznxxZ2mVNiw8Sb48Kr3Vg5vtLnGovP5CNct1forCsNxj63x9jd4i6Qx7yDMn",
  "key14": "Rui35PrrS6vPBDDfHPSrADfmPKrMpyJnGy9dRmrHy2cDSirsxerJYNHntaBy2a99FAG3xnX8pZhCTNzS61YQuh9",
  "key15": "5uwBn3gcUma69xqUxEzJkmo4AdfWFKNwWnFBdCU2wgB7oNcqR6jBoPhCYQTehenuujKbPk92ciF676fJj6WbGU3D",
  "key16": "3gK74MRpJmAoo8f9zy658m3X19b6rxRAzcpq6tpFvthNRQv4TAoAxPFh3d9nJ355p1rcVxa3BAxqnQYDbDed9dxk",
  "key17": "2FXJzGixW6GtJy4hC3YoTthXXyKApYUpPDQFbv2WvNR1vMf9FpR7XdLxo74QJwhgZyNTsUT2XQaxQhPbenJDhNfV",
  "key18": "5s88pwEEuNSdyMBProqtLAeSVCTxC5BRVumdeK5XFnjAcy6pXzh5qGdCtgj9Grz5TNPhswm5e7bgqBVCEiLH7dDD",
  "key19": "52HofYCbTxvwhp6nxcppHrtgkQaLWbfTWHFhg1vsHNJsaFVYEnzBAMabmsmKRm8LbrC4fcQTeJ7WeMexbNzVLLNF",
  "key20": "5C5WerpVW7f1J1jNZCppsiLTD5gnq9EuPujcWxiD9EZfi2CzjqgYzgFjXbr8JeXfT8E6d6TJnJmwvue5hdfswCMF",
  "key21": "27nd4xQWEQau7eFqkfVKvka2TwhsTBZvtyinpdrzqgEVf5gPHjQQbgVMHWztTrs2u3PUM7GL7yWb4waeEL9WDgsC",
  "key22": "3chzp117E4g37yJJovpCX6jTnK2rnrHQirvDk5mChuYGL3ViQnf17N3yF38BAM1MboNZKDq4WoLGkihRUMvuvSyS",
  "key23": "1S3J48tbWFUnrAxxHQ27XBuDkgtZDnwMRNpCfMgyEb1dnxcpFkxyc6PMtQDwVGEmc5vxRyrWfDRGnrVGwsWvU4p",
  "key24": "hX4j4FsMHSr6usEUMPRSA6WLW37iUaS8T49Crs6usHApCYQDi2UHASeCRc316Vy4c8wW9jDJeas5H5y2i4PiQH7",
  "key25": "3R64YS5Z7JSnPkQdxbwBFwf3SSPtrGUsvyUWd2MPUhBtj6XKSydrXDj79qGsipmq4aDXpSa24KKP7znXG1HTjBc",
  "key26": "2JjDDr91k41cQRpCTwrcjgPN3B4WWpA2Z7wUkec4UDM3jsFveJngvYXuVJKqc5k5DK4c5UBeks1SN6TLpB9He5ce",
  "key27": "4sN6S5SaFFYkgUSGneykxdzL8zXTsE3GxpWnfrii5qEf1HF6V72KMQ7TxhsWU5reYW2yZ7Q7zPq4U78dkwAoJy82",
  "key28": "5u8Ef2UxACU52Kzr3KG9yGpXWgEHL6JPCkXGhuPHBaJN4YJK3L3MUPKwJwk9Gh8hScx6sXvW7N8YrxGnzJ5B4aVC",
  "key29": "b2ozwGst5wGFeTHqb2gZaKbETKqKtEkLUJsgBpTgSaboBdsM1TL4Ji6g4eRrQohNuV9bqpBPWoZYEZSVpQGb76d",
  "key30": "4ruN6wDdaG53dii7StG4coApWY5khQzzV5Gzc3iCdBX1wpZG3v52FDkTWMpAFRP1fhYBGC4NHwcFYBjyoVb1Px1R",
  "key31": "2kmWe5dzohdLehZC2EqDPsD9p391nte7A2hUjtLCeGUSJku5ihYXqhWLLgzhr3BXiAdEeVT3ssUCbXeLnQfuCRvB",
  "key32": "45Fgtm9oENBtGqKQ5HUYGYbznx9JMhbNh7a6rxoa3ZKMMax38ky59gGTPTWyJGipv5ptHsDEhd24oMy7FUM4tPD3",
  "key33": "2sDGTsmEjMX4uyZbmgN4pzEqzhfbyHJJ2Gw5SEWngXeNwYisJyp8LFFCWHKAQdKuc6A64zqvjgt5TRm58rBo4P3M",
  "key34": "3W5TGPKNzv6jdyfLhGSNZXpyoVJBW8LQUEXnoKN9hGVinSdJgTdw3hhKqCLD4XHCyMCYuiFThesNjqguYxbaD7rV",
  "key35": "5q6EyGdhC2LZw1diuse1DbsmKNnSMDBPuFhGCjtKrs6yR8dyP9pnVag13hHCCS5YTyMdQbKeMYSTUz33xNpzEV1r"
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
