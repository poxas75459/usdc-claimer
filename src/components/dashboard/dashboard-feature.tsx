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
    "33z1grHCPZemE6ZSQ8LFH4p6BeRMgybKiwZazK981ze1aZ38cxo6dPWSSquBFiQaAHEpLr2Nr4S2VXETbqPB2VfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxJPiDkdyokkYxoZHudrs8ki38rJKGUvoohDxHobtHFJ8KCnNGocuuwDu83WaoivQvj1zse8CTupRqyaa5cZXoX",
  "key1": "5QyMPmWCQxhrjdN3QuavVDUjjbDe9FBH466hxqQUTZg9kAjHRFW9z1V5AHgPqN5wsQtSDCu3PRK2g4K5fwzQRxEA",
  "key2": "zGzQWTd8Dn6d893h19fbEei6LsgcckrLGQW9Q84oBgpZD8BARtd6HYyFcyct859RtxJBDwZtFyWDWwmkGwRAyRr",
  "key3": "3ZFiyXQ7S19zdr5fGkygsWaQzgkGMBQa3D7DBGBcFJ588dM77EHitthbFgLnwpjupVbwYJ7XiTEqWmRNM4Yauq92",
  "key4": "3oHNoC4aZWGTzF2ZGkNnREe493FTLFsJNXK2q5CEdZHgX78bq32gNVh4ptMHUEp6bD2Yy2zDaBFz9fPeF2hMayue",
  "key5": "56AgysvTVZ2RmnjafUVrsADtDpUsLgyMwf2mPcVKzcLno8MjKmhjuXAubCeEpBJgLgfStYTb99424kxHYwDYSyyB",
  "key6": "3uVGwK9tSkwiCzaRkotTtaFwzfcXXz4FpZMg3o9JLY37WqWPz9X6eWzDdH3871GptQxo3TEhNQoP1W1rY4ayswEn",
  "key7": "AGYCnrbCtxXXaT8xmpvnrqPAXEGXkNZ5JuNdqoRVsd1MnitDqUzUUMjHE3eXGzeLiFdE11rEr51WiEhW2uXZJew",
  "key8": "uZnykJKSkDjTu8R5rgbDz3Ro1VpdAgXAP68gU1koXGUqJFXXD5MSdcfH8VqkhgcSYxLXjfL6qbf5Y3ydhEqHgyf",
  "key9": "BpapBzu7nxCyXfZWfceoEAPA5D3kkyRS77esDCmZieHm3fL6uFQUhy257EVYX51ZXrTooVQJ2urL1C775oK4wR6",
  "key10": "37axP48woPVHxELesyDpuSJSfBgVB5Sz688xTwuVr9ZoTLgEDXCMJNgU5axjU9fuhtMZuprufr5eMTmXKbWU5h32",
  "key11": "4TL83RFrdJeKSWv11Dp9F9LvWyonhrv5Rp4uu9kBSwQ8PQNLKoaavb8neoDpzfyeGHNhUR5iBWerFHU2eMctaCjt",
  "key12": "2Xp6wQ6PJWEhWdyMKGXzt1epShm5Rn3pB6MR7ebAoyna6Ta4TJQi1qRJRosr6Sx3HZ5ksijoZMNfEuLkjXjp6qPE",
  "key13": "4xmLk8ySQMSkGG4RzPBNdekrnbfgcgWLoUBS5msYfHmNdaaGRhbPkNwKJnQZRQtYUnPH4D7j4mjxAErdicZs5Uga",
  "key14": "5S9gqzn2m5HGSHfqEhEhWtDqyRsMqnDHHuWSoBmAVfhvm2CagVvn1h4w3MQghvHR79hjYkEcJqWNXQmngE1SRKeQ",
  "key15": "2QUnqEEr7npLHv1AjSPQ3NzLLw1qotFYKk3SzcUUfLvVbW7TVMqDAutWayH6w1hnvLEB8cvAFz5eFa1vHgxR9ijZ",
  "key16": "toSkd9fB3m4e5LoUCzTt7vryHdmebsqQnM2H6r33LEv4gr4ihVacca4Z8vcwRQ5gPf17hdH1VZDjUaGenfnQW56",
  "key17": "341sBeH5WQAfHHLhUj5GGdaMoTi6b9NWs7z3GDdDGKGPMAdPv1hLekr3W1XjNJCV6rmuxhNucWP2xjqtKy67CeKg",
  "key18": "2ogQhKvSd8oMXY1YpCvXJeqVs4cAHbDMbU3ANhCCQJZwKxpmkcd4BNLPhft1vzywyNCH23YDfPd1kq9RKBVdCDoy",
  "key19": "5K7fS5GC5AqATrP151nmJQo55t2KRjipPPzqFh1uWJFnJdEd29mRK83HAMMmX6YryVbZ7ruyy9Lf8hKvE5CRDFMi",
  "key20": "47qeJ352H9DMwxYp6FeSShEunXWGkFt3iqZKtCCUcYxZiysQbqymPNmMsmGWTH7cj8X3Tp5QugQtGae8srUoRkeJ",
  "key21": "w168uexmANgSxQFWKUJNeaAsfyi9apUMaFWRcBhruTbfDAdoiM83k4jYCmBkBacCMKq97AMNFtgqGNGDn378fWL",
  "key22": "3rxR4waquCw11hthkdG1oT7Ptg2AhCMCBHnFWLcdq1Ubw4ZYhQXpvbuZ4z5pjLTimMVHhMYhSoHEdxjVyWUBBBB8",
  "key23": "5RV8SqSuT6u3F2vqM6Y7WpFF3V57qnLziCmD2fiKpqqS8ci7bMRsu2ZFFCMCq5XdjaUmb4jFzMpGCdCymd2SfaJR",
  "key24": "2MWRynXFGyLfqtRWKB4Fwci1jMnirWpNLhtQUwU45ySMC84d1uz2YbPh48SFKRV1btYUNjiX7nqDNPPX9Bi6Dy2W",
  "key25": "2fWDb8WuGAgcamt6SK3Mk15x3iL4TACCy2ByC2yYRGG1zxQkSJtP9QwzAS8spZVgWDcXXsoDaRyPy2B6YQ4WoKux",
  "key26": "4Vzna9HpoyuhFTwvDRnYUSb1qhf8qJB7qSaJ28LvJZu3xwYkjorXnXzTbo8E9RY5j9GwgeiDGUw9QbfqQ3K9YW9t",
  "key27": "4Xof7xTb9eNVyAFNVdhN58ESXHNrdjpdpEot2HnkSG5tfXfbGq7gFFqrAcufcU9TzuAgFU9xh17PnU3fDkxbGQsT",
  "key28": "2PEQN7yTVSn3a3ozkF2tyVYafw6WNesKbYKVuCkrYoUHoVG1RvvUbNJYJ8TAPN28TFWKioMsqwyJNgP4KSiRaQb4",
  "key29": "3MjJf7gDfWgd8DqvTcyNAUMaxBTip9mv7gQtWHseLjoqjUsi7gbEY1wUQqmPxgYnKwhFwZ15RMugsgyyya6LnhvS",
  "key30": "4N1f6pSrjUH3TMKktBCv1iK7S3htDvasHmd7KASnEE4VDVxhiywoMzWq11M3jVFXho5CrY7K3iQJLFcCqSM128wC",
  "key31": "5wzyankQfhbQSYgTgd2RaerCBW4CtNgx71Q4UaFKfSMugdg5EhiGiYJ2ZeesroWmYPnrJkgYVp5qz3LvJV3717pL",
  "key32": "2Xfc1j7nWT3tCdYgw3LpwLBeRZNoUEX3p4n2HjMhZivNvUapb6cJnfovxnXYg3KdnZ15kcPCM1b1HtfyUwTJZvJL",
  "key33": "4bbUrUqwmZnhBDAu79rQ5dpMZs2K8k7Wo7NtGXQWhW2LuvxDUdfRVXhi38ivDasHQMmtFvZ3Anxrqcn6CBxHYQof",
  "key34": "idC6EKoVYkvfC3o511opXsRzbfLL4E1H1iVZjA1JGGMNFx48oV49gNTF5EqJCPKMCEi28ymCGqmcgbtLmxjX5TC",
  "key35": "6fuWMrc3d4A2VgK2NHFTzfWAJbvv3iF6SsQAHUdBvXgHt5cMDviTjjZn8hhGed9aWR8VxP9meikR5cL2bYyYNFf",
  "key36": "fmEYK5t4BtGwD4LUXMMbQ3ug3HMNnT357Z4ygeUfDhtDDBxBtawikT3bubH7kyH8wcCF6vHBYw9Tm53QBcMeEom",
  "key37": "5xbANf1f7pX8Sr8aEasnBGoaiCYx1CqktLcpyMtx1TKGmmWkdh5jgUqCXREPa2nc2VHFqTG4xuuB7LLACDwQrFwn",
  "key38": "278wpjX3281DJtdLpuENe5WZcb1znamAk1pTtBax5ffn3LkoQjkEAqUejA45Zer9M2tyBuQu2Edj2nGiBX4WsRp3",
  "key39": "4s2HgNmThvnu8ioVviv8e8ku1fKczPo5EiPb4ySqdvCv9S6U1yR6jMgM4oYeH7kRUAczwMxEcfo5yfdrL3c7JcWP"
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
