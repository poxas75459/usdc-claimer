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
    "4gNjayUCTNcXbkoUVcNxr9SXE1NwsGf5aPKKJyRKmuR8u4hdbbKAUYXDn3B6NdLu1FqsUPDex5mhqhaGp8KFEAh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43KH9BTqtTGDTP6aFrritswYrCAwiejixDnZKbYW6dvC5kYX9x3h6TSm6ZwLQMCBbyceqTxK38dVngSkidfQNd9T",
  "key1": "65PFLFe8bcvHygyskau3exePr4BnGLuK8J2CnfduYKr7jpcu5wfyxJibCCMEQjqZVwzX7rtouRNTS74gjPEKxxFJ",
  "key2": "5u8AJZzeMXGQCzP367cK3AizaLpVXzBqpsjturPpJvScATj3zvKdbCEx8uMzqZomdBXAKSqLtMDJqufbGrBhQn2q",
  "key3": "4ZzjkfgceQV6f3V2F9XHU2uahjc1bLnoS1UPj4we6SQJmSFsQfzZP9skMMAVLJtJ3X6bwZjdNE8LjoaHW6wwMEQY",
  "key4": "2JHesmMQboV4V3x2nrUjS3jtvsj8myhg3CVWA5zQS6ZhvjQhw4ffCUrfq4crkhXWnPX9FRnxt1NsZtMamn1fqwxx",
  "key5": "59eBYpGHJDYFb3VXpM1KsYeDEpTTzYazZf3UyWyE9h6w3JbHqaK8CuR5EPyYkkedDWf17s5HBiXG57Vm27WuoDw9",
  "key6": "2JfFtm9vWaDYbU1MGm7cVjtbrWb754GxktwNQPLHixSKKLoTS3KzZojT3LSieJCTWK17gXcWTdNsVt5QwAGEm57M",
  "key7": "5NhLdQqacY3kbQxFxxowBh8Yg5zdia3CQpd2yLFsfPLxQ5m5KHPNsrU86Ez6MZqM7ANjVrEuBNv1Fh7Vso6sYfbd",
  "key8": "41D14iYQusdwE8eLtkQZo2gU5AtPYPHHmTfayQmw3uAsJyzPKv46L2pnCXsxKiDGfdfSiwBRDnixFvr69g8usrSq",
  "key9": "532EBBaMUvedRM4nSnuyFP1cXY7mE9K9yJHeLTmfWXGAaWeF8qNu37ktK6R9G3k2Qx3agrLHWeyuMnmaAFECQpHs",
  "key10": "3ZYw61ENznusRvsFELXGx9W8jjS5gXRHtgJfpeemiFGUC1229ionvi1YV4jTmMrbqCae3awhENcG8sUUmNA5pryy",
  "key11": "AHjZoVE5wdhUeEfFLbJxRLPt7KTAv1kj5rUePT4JRX46J3o9E1PSeuiUwDZt4vQWQWRvWwZLquYgHvmcv5VpcUU",
  "key12": "4Q243DYwxQt39vdVhnpXNnDST3jrMnqG1MAHFvY7D26iVXzsWWeLka5Vo4wEMfassgiEbgWV1DxqbPDncYjtJCfp",
  "key13": "29sKAJFJ1jai1HsAnDizS8bkP1jGRS6uNobs32VLTwgRTanikjJMcKJQisrHK2N7JDNfbqCkxVsRb9AqAB8q2Ggr",
  "key14": "37LG4Xo9AyV1bd9XyGscYNSWcMntnBjMa5XHEAJpfeUwk7tnjKiqsLjT8TXcR3pgp35znEAtFHrMaQnR4kBmFh7k",
  "key15": "4pJSQ6XoMD7ZgUQ6pgA9izgW26HKi3JPwLqqx3TtAuQudYGPaH8pmYvSvChPbngogzajPRwS6eSuiYEPt67tyCk9",
  "key16": "2guVwEwWiE6MPYERyDg1xq1fQqdycABq2Q6w8modNJmgkevX8BUYn4S6oRX8MwitqqjPYJWQfj8yWraBNLbVhSyf",
  "key17": "2Cv99ZrZ2sNLy3smj3DkLB2X1AmtKG9htkE6Yo1oqu8T6n6GoJrYnxJobihRG6nPvQRmeDfFZJNebGKBxpeq5XRR",
  "key18": "2L7vSRjHcSUWjEXoD47zwfGJjyprFrt5o7guqKYiM7r71Y9Q3WSQeEFFC9LGf9R6YtmyUQ8M3C8FTUKQ74RKkyoi",
  "key19": "3u3N9y274akpUaGwxt5cUtMgTxMTt5RCLLYfjt2kzWH7jNCbg5rJrsdpRXkSaQe2aG13LsYnz5NyhtJvxVwt4aLi",
  "key20": "35tPSUgbci12pfuyoCrYeaHNt4WyW85bFzh48dhU9TbhTCKkbAhm4e8iTWaJbFPHo6YjBVvJcZ4UP2oWt6UpbpxH",
  "key21": "3nMd338mpxG67aypzMosUSFWC2edwAncpqcqxB2jwM2z6dNL8anVpkzJ4r7oAMyTH6qPS3gZNEcVTpUttVuP9aj3",
  "key22": "Vu99m85VizYRiormnoj6arkGtqtMGQUeDLyrvETFdBuWSZDHmvmTRPTs6iidxfa626ZUUHnJJRKt23oyRFrm3iW",
  "key23": "38yd1QwVed68y3NTQVWs6cPaATgeyr6zaGWQoSjkpu8CPmjCzVbaWS73eKnzfisRWj5yw9cWPtTXBuW6PPUo78mD",
  "key24": "5jxgV7dmgAR9jgsxuZ39FTs3vkKF8iFYvXGQ9rYGR7syv5KgSbujHPdKrtwaV9Rmm56TFDcLTJgMCACdJYq1Y2UP",
  "key25": "mkFJ8WVdcWZDK2iWDZUrfwLtasAMW493iVgNXpNqatUtifAFuv1nhuEVLPmmcvZ1fFgMgoSW5fkJCbWnw2YqWp5",
  "key26": "4ApBCQhLeaBE2eokdNHQJbosSoHtPAoTta6fZ7FDkSRRn8r5D6EEvdJWnsJw6sdBkvCZvzSHW8r9LVnHLS7CfMzV",
  "key27": "xnGHhtrNyNG5AtdJQ9xgyKjMzvHWXh28HyFGLdgoXVKpZB9CxFtV4NFrEH2keSaLLipWDuEZCyAtr1up7xbwy3A",
  "key28": "2MBXnQv71rUyEpVytCruyAdnD2FHzLc51G8amwAbhhwA3sWVxP59zKgL72jAUfHoMjV5xQ1wfTv6sSSJe29zkiKu",
  "key29": "5y2JLZZGE2CmW6jSk9UJwZWkYwXYrF3th454u2QN3jNNCh2S8dLvGfpxBBLq3hWUrK9EodL8FYXQT9zvmxhkBUqp",
  "key30": "2zCFuwnbYbJB8VpSsUnphHyspJPFkhERzQHvjjwsjG6CEdm9e6qi2xrHwoiaAyHQNoXYMTxFYVzsvtPUwE1PzhJp",
  "key31": "2o9KERNdjY7MWUNho8MfSxZjGQjt8K3CMSWsLkUjZgt3YwoKgTUq9cPmBwRieogS1aw7Nasq6gPUPpFgaadbNXw5",
  "key32": "3qs6KTnTQ3H8vxsgm9WrFij1AJaQcscJacYjidFfGmgL4LuL7szNnNRBtosvsB1fYLWFvyjZpV9GUJiabGVJaKwF",
  "key33": "4pNQvyhARu9xTBaddeYSqYSGvB78Hs4DhKM3RCfrwfLXiYuw9MAdM49By9CbhU82JJ752FLYYK2Zc1Co2xrs1GKD"
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
