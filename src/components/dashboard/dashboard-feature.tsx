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
    "zk9k4iRaPrABXNHXJo41kwPpYuSxCd7YDACjaMfNtoHJkGW5S1CW76eWCFhhuXEBRMDUoBG5KDAZkaVUhDT4TVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNSMrbgUK9vqZLzhBPb8YpDWZL5e4wBwJz1BB22YHdgcvi2b9sdTfT2wXL94vVrB5XVGbPR7RWN2fo9HW9qTWNA",
  "key1": "2iGXc6FYPwD5LZNrk6b7kmihhGeAhnxuKazkXpfW8heQhGhftXhYiaCcaHt7b4RkMAkWtXpm6ys6iyA6TZFBk8W3",
  "key2": "4PATtTzUZMCfJNSLwmLFu4epLFigXXH8auCkxH3uZmc3yoECEJLsfNNvd19NGVywfSaQbX9861RNM5XULHkK1ouP",
  "key3": "4nj4T32kxbxHAsUwb5xUeDWSiAqyaUn5VGZn4da5ZmDQjiuuLHHXBuS65hhZfALG8M4k61GGgmY6FbW6Tv1Snj7V",
  "key4": "3V9A3Szdo9XzvmaJGAV3VDFUTAmqhBgJ2RKNu28WPCVBFR6pb6ymQE6Y925UarD1UFhMsQToUAkEhUvW5yLc1q7C",
  "key5": "2wbvrnxEYuUyyuKFr2fmQ8fmefnJxp5m2P3kyRnWvfTx2GTEVic2M3Ct9MvWNKD9eWeACbRe6GCeB4u2dFtxuq1z",
  "key6": "4nXTnDs5h4UD6v5thsVrquYhsBxdYVpCqjMx6X85Spd4QPzVB3kMY4C33kX9SWgg58xviBXJPC84e5d6M3BQzbnF",
  "key7": "3BHhzy2ztRYxghVXuXumxK7nhWkYNnnDD82qLSwHxKuNFYQ2NCsGb5wvUWRLdANPQQkekhn8odUFi64j1QafkKaB",
  "key8": "3gz85NyBuM3T8EMJ1m2YXbXNvR9ELQ5Tb8FZC4JGkoHJyA7u71YgPgWivzyqUFJhs3YigbfMV3zdDj3CR7hZUdXa",
  "key9": "3nZQtJYShW2unPHBigwBoceYv3tKC3jjGY7Dse4YQ6E8HcoYZyb1SQEmxos7zyd7z8hHhd4m32B2E8SDQRRE8Eo4",
  "key10": "5eYyrQCwxDoZZSj3my8TwucRRK4hfjxfV16Nzva8GE95XFgFtdRynN6o7RFXWCVcZUBE28TjccQS6w4TrGmGy9n5",
  "key11": "3dGdRrdCYmej8ioyfneYzaFeC9Rd9GVv2eiYHdsQkwQLhiMLXdZNwZoUPvXu4bTHSEUFagrpwn9EM3bP1GsbC6TN",
  "key12": "5SDUAA8LvZYeAtXJSkG8rZ1gaw9Wg62hj2TGaWr5y6mz5rqMpFsj8fKwhBPKGjvrHYyiEL6P4wTP9Ly14TYXUvvn",
  "key13": "RLgXeYrqF4YtpPnXq9LHj1gkunPysxVxW5ppiTkynMov7KY6gfJ2HaUvsF3oQiR77NkzfqAz3R6p6crpWM291ZV",
  "key14": "4tN7EUyGfxbGZiKAPK7j3fCKmQJ5XUW5yjrV5dgjmUaBV62ACazYyNVa29pH4ALqi4X8oJAynxdjtbbsFQWa9Skt",
  "key15": "4btjHCY9xYZSUs4ADicMehjoosMiKqRjS3H5v9oXL9JizsuB8daZ7u6r2rF4NEiSuWK2EHAQWKAu6R4YfDanQgeN",
  "key16": "27MfdRRCTkZeU9cYB7pfDXFdQRwrBfovZnbE35SLeGSBKkrTHCfxXx8uLHCEFpAkYuoHnBMnG3JFcRBpBRikKSWB",
  "key17": "4pMVJLbHnuRNJnAochonbgUhJtkgYwuPyBW1piqYEETAv6hvLwcVZ6K3e1hTn5VLES4gGiZ1VjvmPQ632KR7nU45",
  "key18": "4QfhZbWb1DSUE9ETcMPPMVeZUcLJvCJAq7FfJqRBgT2canWR4aBfJm13t3PabZuKAcBqBNfMLwWM3ja7qH58GqdJ",
  "key19": "5HD75be3CQ2q21y2CNY5bHyeD9kSEvYiC78t168mYmBQbgFqHT8CKsw33SrmJimatfdpZQLKEra5EBnZWCpEhHmm",
  "key20": "58M78nmkM2wLMrt3aMWMjjt939ny9SB6CNFY9FHJV94D5bXVTuXmcfzVGRX4wiDxZLAkFQNnpY17pTEo2brWBAQX",
  "key21": "4NGG7s1d5qzKRpbQexeyCZ9fujSC2nf1UBazPvhbh4Ndv38WaMgr8ppzXMTSPSfkfxcxFkoXnQo9Lj4tGEvPFuSB",
  "key22": "K4Gy4AQ4SPrwgJAd6ZrnYbA1q7jrs1ySYsgSxEEYTdeFUz987k3HNPN6reAqpnTkMJAPWNthCzmC7oqrQbQUKva",
  "key23": "2TBKCgfwtABj2vcbViKhvxRTGWpf3Ay2zzcJaKDfF4cMXYQj5k3T7wp4kpZGT5W4v5qhNYJKSAYc8jRGebR3rwor",
  "key24": "3q6QjP4zmVG3HEu7mNb4y2A5JG1Adbd87Zq8pxFsbwuqB6ykAaVN2nsdrrpNY8sjf9n6mzQyr8opwyTmxRuFwF53",
  "key25": "43XKJ7wyvXHTUNXkDDnpcekW3jprE5nuwoZvqRV4pKwyRYTj6AaN3ykRUtrtZdeDGhJ8A4EswmfNgvtTpKiuiqV6",
  "key26": "2o2awnyFvoPVZ2pQhtCVagYo2LS6eDoS3HETbp6ZUW2jjNZoWCCfZgwyWYopXbGPvaSn3a2RduQYeoDe9NxRmafS"
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
