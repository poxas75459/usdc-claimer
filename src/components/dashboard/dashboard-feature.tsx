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
    "3FoTgAuiC9WTF7G5FrSUWP9hfuFJth36Ntv4pbUvdXQe2683mKTERwvwj7cARsBYYGhEs9Q4VAXkGtydifGJPesG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w47q8XBmYKGW7tmyk78BimpPfMxBd6yYRKX5L8FDwfmkjdWV4PympJaQdd1k6Tg77YQ88nZ41VHVzGR9q6QRSbv",
  "key1": "3Zs58iA6xH8kuF2N8P1HxXhBu3TFkW3xZKn27BUC8WwEK2atibDedt7SSCqWA45NoMKTpY4N39gTMzQHNL6su2gu",
  "key2": "49pms3dpB77Cu8wiHoyYGVteEZoyq6pm36GJYSbe9BcHDXyRSCAprPkBHiyjztYbmVHAagN18dqqZVmeT6nmqXag",
  "key3": "5zvBWEESJCG11d4sszH2f2BrmcXkJZnQkwRhnCf8DauPEFJCFHkZkdhSbSEadtKcVYfNLA2dLTkPfWyv64h1H2T8",
  "key4": "59vUSRVuifEwUwbTncQa4kqUs5Hx1gqVzzv6b5f4KCU84duSF9jEaJ6PAJ46QmG5GNQ6Pq7HcbuCN4tZjnKum831",
  "key5": "4b8aUfvtC38A2JrwhjLsvKPi3BFz3RitnfPTbawUzb6HP2HcwkwTvzybJiZ7XWpc5U1aDQhomEv5wekxkPfXc9Ny",
  "key6": "AtBkaLE3nsr2bTkG3yyr1VQpP32LjtVivw46HULCuBp7qQ2c9ydM3oNCw5xcGMB3Q4oLNEuDJgeCtYMxKhvE9Rc",
  "key7": "2QjgLspV6Jut1eFXP7xw8kKwhLxXWjrQ59rNZx5pVM3DjmNtJcrkchqzvVoD2tujH1JJh2PubUcmGZ9hcG4VrKZW",
  "key8": "2APhymhirE2XYKYY8v5ceu3xVGLCga6TnrmeBEwDZzkZvryBEZnB8s8nJhJ26hjNiVMXq8ar1jPMTnvSMz6rPgo5",
  "key9": "2ap8TuHbWy1Mq3KiJdyo6cyJ3VGUW7mw73d5tEUGmCnmG3GCCxD1DBQNjf1gcHx69jzRvs5dtYLpuHYpE2s5A2mR",
  "key10": "4WBi9e37v8LMwRteUdStijSgStX8RYJW2p1HcBn9vMC2nvTszd8JQbmZkGdSQWzy13a2hFnrVeryzqvpb23XtUYe",
  "key11": "6V4XwSzwrEYoncJvsZubMqT2GJNqkREcvLB3B5tusXq2WpQqed5iFHzT7xMHxhHf5dEWARNv6EHrq6UfMvX2scp",
  "key12": "kvse6E6KtoBApnXMpq92T77qu8CH57u4h9iwu1WEL6TccucEvr1iCbxTZnKVLXTGPvm9JpAywV6uT4bwfdop9XH",
  "key13": "2M6q8kUsVSrsVprLNwRHDQ9ez56KuwDWzmU68J6XZP2SpPrLrrkRKJ6BAfzzBE5tP3RePbSfkh4ZDpR4D3wcQzPt",
  "key14": "5Ue5N42SQf2vQeyM2MyCsMwP3zciFLgPZRwxbndZvdet7Pga616NVRDfVWkpCm9F3dEFgcysPvWejVNCQcrYs9dU",
  "key15": "2Yauo3bYASZyPEpys5johqs7gVkFRSCZAHgCMPWnNZhjCS15uHbA45B7a2rkNjkUXm71yFVojNEdnwcu9ePQ5vUv",
  "key16": "TEAZz2BSBh6wbE1ae3GMwRA7zgLD6pj7Pz8kZ465AKSKJeChYwi6yjcqfAPwfp6dtjZzicj9JGhVGmEQmB2W7W1",
  "key17": "BDZDuFCShU6jHFLoUxjfYQyh9b154BXVLVsSvhNDZM4TAgSG6j2ZR5UFsPSckQZ8yynWTEfGFB1h6YQpqMCZz5h",
  "key18": "2WbFMDBU3VXvD4ty5TfgKiNWKNCHtD4xkP4hTo66L8X18cAjxjmiMc3w4vJLEP6f3asXJs2qqKCUJexoTSqEnHj1",
  "key19": "4nm1bGTvRDansz5UfaFT2DT6Rd9shWSiTqBDkZodd2vG3GfBGfPQgE262YntuDxLPBP6D6W1nHratdsmH3U5YL78",
  "key20": "455jUSHZ7omeUpxofFsviTd5WKCS3EXYXrUYHmpsHdnYLG9oTdf3kXx2c3QzH4XW3za6R1nWbJg1jijQHnuNrf4V",
  "key21": "2kfhVHuhw7pibMeoyN2csK3gCmsQPVR9tnjkDbXg2xWdPfK1VSqDjoZV5NhZWgEYuTHnCsrR9psaE3tQEMMhwMFx",
  "key22": "5b4VNmkG7rcrUpAjKsdHANJ5S9MTdWKWhs3kFFAu9eRHtMqGdDfqsLzvLSFAU9ZL39jTtffpxcdLcbjysSXeZ6Zd",
  "key23": "2VwNPPzxhowj6jnWpbA7saWT21FvX7nsCXGKcntjtGBDZUcNN2fVLctfZrXPiPGHfzWvSutPigEqx9bPu2iHNdYh",
  "key24": "5GgNDdzxw6WzvDveYYkdRt254pK81sFiuxy23jJ3g9rZS8EtJa4nWu4kspn1rzYnnX5PrgSFLYhfvxRMd6jdrstr",
  "key25": "5qsNG2eNxbeiPrNXHjUW4xpjPYdv2T6Rnyz2GF938xzojb7WQCFR14ngNYKazKJ7ZXTSG2PTkFdq94uFujKPAAZV",
  "key26": "5FbZMUEM1Lm7oGSTuLZj6ZvpFSEgRuQyRapRYH2sk9M9VuknwTvXF2KrMTbf32VvmfjtNfo8soE1Wt441Wrc9e5F",
  "key27": "5MyhzCW4UW9pAHHbUQagE7WdWTemQ4fWWqYUXLheZre4zYb3q17dFL8NaxfYzcLv1ja3bmpik7kDjYLzeuket26v",
  "key28": "4wjZbiVPBwA4Dwky9DKSqZeVD1vSG7v4YrvM8amDxktfUse1Q8W1hZNeqv8phUaGPXpUBjFyM5EFTo3Cyno5QsnQ",
  "key29": "3ovb3y4aqziaU8embsjuBFvGKUbVdeWhDzQ31LS4MY6ojfrRsFRpCVwnLQLhrSQkY6CiHH2jc3v6CUktC4m64bhK",
  "key30": "4SrSSrLgRx6uSZpTz4D5u722T9KKfZYuB3LTwEy8Y3WCLrBG1UDgiL8DwkwBrNFeUXvt87Rai3URntPApubGqwcJ",
  "key31": "3QUEv59U9VF6qTzWS4BAAbZRVj5rq6HHHnq4J5V5kh9DpKVz6wmncu3cum64BknaMmwY59F811pCJ6hgr8m6A3PN",
  "key32": "65uSYcBMJGdMbZPV3x1MGXFE5qc33fDnGXARzrWi5pSP2QBus8nRTQHBeJkVk9SZ1vjfpYKP7PstuDWVUCRYsQXh",
  "key33": "3p49gA2j4CYBvSbSujDYuJvfCHA5hYmj55Du3npjPizrUrpkf3ryRy4AcY39MSdxV8D6zw9s3NbKpjEHCxkftW5b",
  "key34": "4g5s9nZeQmfrZvNyGhbwf2FvTRmNA6xVyAeFE8SvGhfQRwpgyUDKYeRpSyzveW9gJbZKhaDqg2s1RmbuWpntccWU",
  "key35": "59Nza2SxiuR3EEWGxiUFCygw9K66r63t2VQnQKkLgo65JVJ2nFyDchxS8nzaFfopyBLbQkC1kGYgJoetzTNw3uxs"
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
