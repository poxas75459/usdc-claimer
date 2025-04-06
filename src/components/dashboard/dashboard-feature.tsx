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
    "52iDQvWvamPYo16qsADFpbDR479kb5gfb9rQekzryPzAda6xtDqUme6ezjWpbuAj2eia7SeYG6D3crdE7621Qioh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ahhGArLiaFsf7F4iuAPKV1pxMBH2nwQTzpDzmqP8TBcSRkVPqctirfnppAHpRnFMaYu44nsrzoor6Hx7QvQHn7",
  "key1": "rQxxQgy9dH3QbEn8NbzYgvS8k1a1VxuHcaDWNVjrf7oEqHX2rwBhida7z42qru9ktaKSUMeJReTdnrW948hqSaS",
  "key2": "4piSusgMMiS9wHRnrGpH6NenzQqcBB6BGBTnd89dfVVRLX67KvygmvLX4RMnWDYRZc2MJME2GV5ksY6CLq8XbyJ4",
  "key3": "Yz7Gv4xLaB3oKJYeGbKJ5nMmY2oJn6WZcvNsevdz16Sz7MT8PVArZbEqEm9Z9pdKKn4KauBM1seNvCcmLBSK1KQ",
  "key4": "2mCVEw5vQiSF4co8U8td9TVmEU2emGyphDQr39s64YFL1F3WkEybjdHcyfXzpeSmHX3Z7oCgmCYWNTp3kuuq2Uj2",
  "key5": "xPCNSh54fsWY7FDHNxcfmYz5rwgkWxyNzUioaDTRi3qE1Dhr6h6ZxU32c5UEyYxT2drDmJmfQxL3rdiHrpSspJY",
  "key6": "ir1UbczaT8nYugQpFufpu2TrkyoXGNq1rHgqAa3PrFCVXWHRNif1PifoGg9E9oV8hMjYoyoCqbKgWKfqFQgTVYD",
  "key7": "4RijwjZgAzbCZcUGX2m4FYcsFSFjTgcfK9Bu2biZi8Yyyt7RtXbEVHNav9RLqcTRWFa1kEZn9ZqY6G5FbLNj7vp5",
  "key8": "2Locoz8jhih7sFr57omGqB25JsFRLdutQ1G92F9mjAAFamuHYrgnHgZqmMKpbBLYfMA4HMFjKVbN5A2bBUvLirm4",
  "key9": "3ECBR3fasYGspqqx1FeeL4dK2SBhEnhzatMRdyXaboX81Ck61dUw7gEuAJZe41dLUP7LxHggdBwyNWmbi3tEkuJP",
  "key10": "2ZoKRYmhwqnFSGZ92zKvt4Buxcvf4TMkCmLayUAoQMM1wchdER7jM567Tt2nFCebfvm5F7suYtdNuvTHABNcsx8L",
  "key11": "5Bzs6XZEdEj1D5pgaPWjJfXEdGt9kQ8mzRvvYE3XK9ufUkEDTdDvWuJYxBHzFPBPgWdWEyMprUj9BF7guuMGpVex",
  "key12": "fm2u3e5B3QyXkXw1bP2wJEqzY59s8xtX2NdVZvC4uvvmSbT94nGWzFypBkEyiu57g9i9XQuAnvf4FcoxZzhkd6V",
  "key13": "49BeVbkPpQbcyKty3dZwJ31yYWpV1X43tfyZ5eDon8NE12PcWMPa6Dman5ToiPNwQdCa6DgKruiyKFK1xZGmgomy",
  "key14": "5hVKgWqg7MEjv8md9RbME3X7DPrEpDvpewcgaLa4upGbd8wKCuiWTVkc9LqohGjrFrMGR9SNpX1AkB8nGLatBXbn",
  "key15": "4mDLThZd9U2FRqG4kEQ1VgySErPxwMWgqkQ2fHD3eYT5VRjrdKQfqzDTGkJ4XYLbhtXeoCr9P67Bz6CKQbmfHD4n",
  "key16": "4AU1uphfuG8P7SxdoH9FYw1rhodS8nLGoXBW2A57fZGdiaGeVEHwKgizapYxTaXhfdWDvEZHu5tr14MYKM6gfotH",
  "key17": "4VcaCHppsSEMgfhExCATn4DQzxg8hdiKFaABYSMrdBuf3oV8NQPbfBDYonQimuXg9MvXRSNeEnvtSWPrW9aDamaD",
  "key18": "5YYeH5TAxNvzaNfkbBaH6kKQNi5SRh8stdX4zpvq9XR3suX4gvLrp3AZ4TDHtoYeTuMzofqLhXgdMYASxzub1g9N",
  "key19": "4mB97FZmVB1otBgCn9KLhCmKgYsmEppe2wCuJ2coSnvdWW5vzN7mtjLXkhRXSoADhUKFk1Q8voxzVwwpFhFJFaPk",
  "key20": "32zVVeebNMUkhAbYyLgU5znW9GrW61aCBZfi2hRYAu129thN3FQSuwdvTt7hVNgGznLMn4QDANUus5NQuf1Zdko8",
  "key21": "2VBzPcqSJHhfm8mJ4b1yWaYhr7UqJvpnsuCBiiUK4SXKZm4P6hLUj7FedBNb12EDvdHQ98Eh9SeX4MsnEd7s8oFr",
  "key22": "2hnopHRaixpKYyHuwhp98Kx3oU6WwMZKqgXSUmcbKA4n3nfKC49BvBaKcF7AVAGuPadftDf32KUWysfjHu5THi32",
  "key23": "GB4drvXinaBHd1NybnmZ9siVd5cN36VEiE5tEKARKxDUtmXgw7ZQXYXMKPH53DJv6eLMtsmx1HhXeaAeT1XL6E4",
  "key24": "2kkUB1Bp8eUfco7pLg7pExNLZBePkaDqBXjS2KezGrugur9F1Rh4JiLkRY2YN5EhgtRzwDgYFBGjg2imFidcGNcH",
  "key25": "3AvajBzJok4PsfjLkek1fhXjMvTvm83rvK9uoCHphNpE5eNgSdzqPzCVjPf3RmLeVskBUCmYuYoLLgkshv6j1xhP",
  "key26": "37oD3QxMzawkTZ98ceKze5xfWWovYLhVvAFc6AeCpEss9Whbpm6UYQtnjMHMivGc3h42ZUyDw8x7yWKqh7uik8Aa",
  "key27": "66dDycg6ZKG6UpcWZU9J9Z7xdQG9c2mgivTt9K5wzgDcnEu7sUS5eYLFEpGQLEDzsGULotqcArUNCFMbPWdFfpNU",
  "key28": "2Ei4QiFYd44PSgfECqUUX3aAMgySkuiRAVpwDzHTc681pQz2AxuroSBbs5AVEwpafcg8QQuFfUVeunQwZ8rCH4Ge",
  "key29": "2KMtLwfsEvLnTDNXwJig4VGoYbXRck3pvwU4PVXS18hmY3sRWzdVCw8pr3XjcPSEw3FocHbQHdYHacpKJa9eqqp2",
  "key30": "44dMxzmDsXF9hrubUALuJXQP3kEpUqdjxw6VnrTe8qmAn6Y9oCEVpH1dhiTNZzSmc8HmpfAq8cF9ujzX2LaLcGS1",
  "key31": "3NJmrFGWhrBiRhxcEPwQ1dzSCDBk3mKrZjJ2C8cpabrVreobv5M5y1EvZacabby8EMh1xf2mV6MdQkCrBKUo9fgB",
  "key32": "47Pg3ALZLRyyitxnk4U2FqPRKFQ2W2c7dcj1KZJrk9cCo2rkPqE14EbLy3HXk522WXoDw88A2ftA1u9Pu3QHbcu6",
  "key33": "4cctm1odPHnvspqTSFEemCEkUvSVsRvmDQ4QiFPMeWAxVrbXAKxVSq9gTU9Uxo4dpFCoXDUzT3t49m9TjsidE2EY",
  "key34": "26HmkLGCXJjgpnmxJyZhD6msxg3UCdK4gLYNmQzPFVaMrJGeRwxXqkLAWkRXENwxU4TeUs97Km9ik8bjQDNkTWxd",
  "key35": "4j7uqytkPAxkciYLyxodE39dabxoh7r4yLnr8SSwEtE611YejaBCJCHN3h315PFHJbXsrpae2MBhbuNLAG8WjS6w",
  "key36": "2KNMm2QFCdvos1tc3xdXq5uYMGJjE58B4tm44RjeFozzMnyBzmC6GH9zSsWxP76P6mDRPCxfbtCe31RQXErD71mB",
  "key37": "M81ZW7BCirjBCbYrbRAdv69KK7ctZTPSqhwEra796etgxrB6Z9JLFgdthNMoN6uUnCwrSD93XsJxjN7xadLfh8L",
  "key38": "2kKNePv9yFR3NH5EHz7jTjTDunjAzDqxrVGBsN3QdnXjr4rNc5jUgC1AvyzYmpvDFAqb4HhkQG43dreJkWXNCfG2",
  "key39": "4yB9wktVqybCkYu8WKSXL38SZS2rJFrtXbbrK3CrpXQ7DsX3kZWUY77kigDZEaSkreF4WcSHpAnzuTyS8w3gDtVK"
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
