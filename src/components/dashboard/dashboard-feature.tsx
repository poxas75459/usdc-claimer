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
    "5BgF6VymnF6dm2SwT5cQSbckmYMLZCyuNQoQtNCu7LCPCrF6eN2BrM1KCzVcvevoSvQB4x8MWHuqCiTfTbpQXVwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MpmwTSujYHGr9hqyaWk2T2GPgyTno9izkRN6dSZENRcnt9F49gUuH1xaCThEMCTEVMszZG2SZcA8BhqbKNqmAk",
  "key1": "EZXHG5g5o7mr8zJ9EMs7mp5fpaezc9eEqSHFAvQZLGpVujYifsZ8mf9JFMRHFmE8jAUh9PcxAJYytecRaJ2jwxj",
  "key2": "21zuhCBLugcWbwcB5p8Ruu4tcZLLZafUtme3FXh2t5rVwp1SiBKXBdcwycmfSExy9URx8bGDvCXndmRALnfahpGq",
  "key3": "2D19NxbMvnd1igiPczCZoC7i1KQQSrem4dfamA1yUxNm8w4mbT4qnBDCKiRomfUcHhbayY2gizZNJq5USZBH8L39",
  "key4": "RqQcfv3jA1S1Mm6JPgBFF7yZHnQkCLitu14vr9WJ7PJEYJgjx2WNDmw8pBBfSq1QgjCJ1qDHGTuyipfGznkbTY3",
  "key5": "5oamX4NQBrP3R4feD21Ufh3CuMqcEtB32S1kTxYSGVqRvu2jCk2r38GFTGcwh2cvXwAgMYgTL8Sz7f9WAkQfBn4j",
  "key6": "4ecpyoC7w3DahvnKoHzmZaoXcFDdABxMXawZMnLzH2YRMsbqi9stx6i2GyVsKDHYvgZTSmriCKQvTNZRWJMd1PNG",
  "key7": "3B2UZFxz8uH5FZ6xvus8bg5YLFkN7MURKH5rDHTyC3k8Jo5rMQME2jURia5Vi8nNWR9gE2T6HN34CaRaqENvd6JJ",
  "key8": "3fScpHMWeRbUExyAx3unSUyRBPwNLy1YYprkzfL2dc3oCLcGTMJBq9Mc72TAMnyXYPnkzWvZ5bmon4PvMupdn4Jb",
  "key9": "5MNoQod1FG9qNThEvrDonzK9LkNJcXFe8wGaUKCGVzCeUDaqtQhVKGKVz5WLHVAG2qVP7bAN5NPgNhZQTg9HBvgy",
  "key10": "5yR4vK8JDui3xk4My8XFzfKa8Xp8RpWJLeWtibq1CLACpN6vX81R7nXtMpDQYioetC4gL5EuWaVrbsCub7E5oa4F",
  "key11": "3jxRQhPW2nYPcy9ZReAogeo9aL8nmqsEVDwuE1Z5VQMkLdN27k5gY1GGgEi743aD7pAfMhZEhHhWcCHNweS1y8jv",
  "key12": "3PLNsc3LQ4ET1KvtN3LoaGYGE1u6nccGttKqLHzkeZinXsbYytHJFzNX2LmT5CwsHfUn4qpr8dd9zwHQfxw76QbS",
  "key13": "25Pik3DykcQJBh11BAywNp7jkhifEWeJyrUdoaUPJhXFLtJwHUcR6BEetCvRGgfTsrrMVMZj7AGWvj7CxvQaafks",
  "key14": "3YvpCHN6TQB4agooQbNSSCaXjWjmgZce1SmVva6WP6P72qeHqw58ARWKMQMtErqEJoytm5Qco8f395FTkYv5bACJ",
  "key15": "2xaKKp44FgJqhjpt8DBs1UJcnB66oTfniVXwiZqKVyrdEPbRbrBVtB4sPvdGT6QsyQai1emFG1VbEbGjoNC5UYtg",
  "key16": "3P8D1k8v5aZ8zbRkJJV4PoiDCrKYveNg7GzcDveiwD9oM81ppzQbfEsPa1KgxK8L1K5D4DfFxH5qi6Eb12ipnQpS",
  "key17": "3NwAFVgG2jNnP5otD5CRS4G6NijEB3wbFq5S9BDi1kyaDRvKqmQAxXYehdwHLX6kWf2CYPovMysJc1AYBx5pd228",
  "key18": "4ofbn1i9zQFmLByckWyQ1fpqgazNrfVbMnFPMSmzGiAtkTtbJPYY16VpjpLknuvjZh9bHwa79dheg2YkNpkHp129",
  "key19": "3ivRmp6HSojXcPzZBg3ph72VN1cGdHcerQdb4inbTFY1mw6FBK1ng2G9pu23FqKjSNsMWUioEe2m4pbH2gUBTaN6",
  "key20": "SRQy7FfnCuvny9ncTZdrrmSpMSd63F44pjZCEPZwQmwYVbjhWZE5ZgCGZimQFiujiui1VWSjxxwCsd7t6jnPmYF",
  "key21": "2pNzmGPvXBPNZTFr5na1MuTwCj5hDbVRUSnNsLTksXUUH8jR9un6ds1DM5SR4XiaL33LFnGubpRhPff2QnjQHaNt",
  "key22": "5XNb5HyoAXfQYTwrAJ1SvbWjjvqrVdXJ6pmHxrHCkWy1ycF5MwKYPnv3YPrHAdbmkS8BGAfHkpiKxxpTTyZhUH85",
  "key23": "21jXTEKLLEXAqTLagSyoEu83xFCKBFYAemZ4H5KDZm7VGsxonX8ykn3no2z5LZxC2yxWyTTUTq1b5nLUDczuo31K",
  "key24": "PTkHW4hvDKBjmdtiHNYFvw4Aq9UwWFZTLrGvvDaYLaaSaNY9tXmSRGRwWbgR1aDBGD3JahizDJ9VtSU7pmLoNKW",
  "key25": "29nszrDEhcSqRoWJSY6SZznH7ZXfxBHErbZPtnKYFc2vLQ6hBQDXWNK1hR1aCNbu7mHcmQuTdpeFSdF2c7uSg85W",
  "key26": "3mfzXbTRxF6rR6EXW5XkmmPYVfF6EgfEmfUJXx6BWkETSwHCVNa6TPHvaMaUEaR3cVzrJa2HqDYQvR3K6YmUo3PL",
  "key27": "5SJz29DRHd2148BcRGTXUPXpdrDQ59nEqQd2WhjC6nnkvXidL1jZRBvaxhgHWyMMEfNEFyNYindARipE4maEMas1",
  "key28": "9RLREFNE4piSGA7NjUYJ6F62k6vk8wnGzVMUc5wetM6kLa4MHQG7vCTGEiznNSa6LkT8z2MCQi7q92Tf8KddZc7",
  "key29": "2w36c23BPy3d1txGRd98fuNZCY5iMcHzyGbyQbqnqUzhycEFcRx7aKq9CpUwXicZfWZcbCo6kfkpG76RZowZuxsq",
  "key30": "4ewWwk84HfFu9tMWPER9rkir9nwJEsyanC2ySkAWMJoeoAVZ7tHr41goxANtMn8sv4va2yontZyp82XdWzqf7rX2",
  "key31": "28ZLRzgN3g8EqCQSUu8G9ut5ShzHoAdkG2ofsqJpXhj8WeJixWusyskGPt7Sjirf6Ykkt959B1RGsDijD4dewHJw",
  "key32": "5jceQcDSg4o4MyV2D7CHrJs5BGNCXpc6NbQinHTw4KCP7yH7M4CW2GhxKnPVj7YF8uy7rCLTrbbZrsZo3TC2c5N5",
  "key33": "4MjYYwaPfEVciAaFTcP8t1AC1W3V9zqN7vKMsVeMG3xoiXF5dAgcBfKr1QYmJ1J6XLysRN4xTTDYHCh9ud328CuY",
  "key34": "3LU38nsZuM5w6mraiLMyQaYLQim232VVD6jwpn51MTh93mnsKEJkNFq3jc5eBpD3sNeu99ay1y8TG1xrUvjbYksw",
  "key35": "u6i6FXzf7AapieDyPXceNapKofnkZwNN9uUaVh9ogdP9gWhw3JvMdNsbPqfuHAAwxC9FssUbi7FyVW5iRBPsuV5",
  "key36": "4bxFhmBse2F1kQSrAwTLDfWaYMxG6M8JM7cBFDic2RZgUUUhrdDBES3hWS6po61UYjFdhVQan9ord1L5KuSGScaq",
  "key37": "4fm5dN7b9HN4KN1XuMpM3GPRxbCoyVmW7AceyN9nPgzpacsBUJuyXv9ZF2Traf4XWkS3yYA5k3yY4C2cdfDTKLqA",
  "key38": "2GU6WyNYNAU9WWy7NVi4NvtB7YnZaRp937zo8LdkAFYnDST6zeYZRyo6y2jCDmFrUfM4c1p2mC58AXny57zaxMps",
  "key39": "3ckiaqDeCAUq5VbHQUDiB6ChMbnfW7h3r23mK1BKSDqU2NqurLXy6jtrFFjoy94mDWvHYvWdNwQE4hXavTSHrSoK"
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
