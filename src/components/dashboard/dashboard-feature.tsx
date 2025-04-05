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
    "3KFRZRRxsfd7eskz1xM5Cpz96ocUme37PZSzsbAmgbH3tyDs7JwuypkJeFRiQAsTngPayvdkE3SdUrS8ByjdAKYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283wHyNexDxAQXu94anLNS4rnz9kbf24nfMjSSXVChN9vt9HencKhqmmmeW1Lfpzr8xHLZSytfdTFu8e2fGQWmZX",
  "key1": "638seDhoyVpGMb3Ny2ZxNshMhtRpPkVTPGmvAWzC9Z2N6Z2rZfrsdv3Y2CZ1LxYBfmt4ft1P9TvotWSPUY9Ja9Mq",
  "key2": "2NgzyEsHpn1vsvdP4AEiDnSmLdTwYkMrAwh9JRxRaFcyxxghVmrZAxhEVLCMrQCxsHtHNqWX19K1Bf2bhYc9yQmg",
  "key3": "3yK5e64Q3GMXWaX59avYLqZDpRbm4BaHrFBBhhCmaYWs2mQaPbjG8CCgvk3gbGZYxgMdq8Jq6kPugr81PiipWEGN",
  "key4": "EE9P8BLnNEWyvQruoTHqV3hEJiNinGWgipsoJSN6XLHLmDik48KBaj2kTahtrLSo16TTd1UaQ1syfgfoSDjtXGq",
  "key5": "2rLE1rArXBuKRfCHPtE4homv9apdTkn5k7QfaBEG8mGZKXVJYfGj4y4PpTmaiUnE6huM33iGiZdteFrrCrqcBiqx",
  "key6": "22aiAS74qNNhM8jroMcx6Pp41NhiK6baXmrxMx1FMsqi8BhcFp4mHBDb2sWZ6NiB1nCa1UbpM9oZjHygHZocJPJ1",
  "key7": "5NCN3nVJUK2vqGdaKFESumHv5xv1qyyGsiWMdM44JRPnBPfj6qS4bJs1yjvYFnkzPaCrpj5wrsWWTNbVid8xJcVa",
  "key8": "5CpGAjBdNYAG8B5LgsduY9adCy7jikqdHaCuDoPDfNvyS3Efu6x1B9Q3MV6eNMe3suFqe4Md1AKYbVcT2AfrzHMj",
  "key9": "32Do2C859S57aEdwuHhoe2B3JtrGajzkFNZQULh11iQPJBgnPeWNcyyg7rRozDtPLXcB87xggNioWiokrtGetcbf",
  "key10": "AvxBUDRD88dHyzzXCFAzD8TcRTUYF1pXaz87Zx7vfwVCxCXkJbwrBDoenCnRNboQpSuVGrze3gV29wmEkAFo164",
  "key11": "5eAFc9UyGScfGYZivN71UBZ9gHRUg3QvTXVKKxBrzJVjWm1jQvfRgKKZ9GCYmzFoFEa1SEbmaty1APgHpC639tMx",
  "key12": "3LK7348vFJFn799jJkgYEZxChK3WVeoyaxvjWz6wWYtNeGGJG7c8gBH8dnhAQMQHbCHSNDhEXJ2Bzw3FuMHMGPnE",
  "key13": "2smznxmCYc5X7AFy4h8AXCRqfZuZeiJHXnLeE5tZowWjFZpn8M45aQeu89sDk7WMSvAMn1xdXARbxY4RMNuT3jGY",
  "key14": "56AkBYRpEsxW7iCYZhpRrWcZvJvxPwpvPTUmcF36LxEAPDdCSjpkAzsLa5etXMzNPK8Dc4wg1d8WMDnhRabuhuDb",
  "key15": "a5AAmMZtUq94p1UTuo8Pwu6dzkkaWBbxmSjd1c88CAD7JXJVr2QBJ1hFEip1i7AJZxxcKFSfKN4cDedCduGarcw",
  "key16": "5SMqKuzpUwNMMfYZmWa43cEUnw3AmzmG5PtPPmYDFKm1fNjmR9MhKXci9GjnihUT7fzgy7BSprqtv1VcvYMawiyw",
  "key17": "3Ba1tWYqKfoyFnJ7Gttx1NsiqCKbUypg81honNzBLRT6mxXWbkRZ3GqtZjoE438crAdDqdww563WkU53RuCpwMAg",
  "key18": "3TKhJhGTjsmcx83d5YoVxtm99iP54Msd7FpZuyK54P8TnepNvVcJK7qgPsYkns1i5fiLgR2NT8woHPYGGHcfA8ZT",
  "key19": "5jwY5uFmywkTYauSMPiBFbPfsjD2wpjJL7khMrZytBhbSrYbaTt7JVYUtmVhLWUeLW2B9gadXF6jZ6uTKYi7vtNd",
  "key20": "Nsq1fkCs7utgH45vTmKXj7DRiSiA6rCsHpQtDfSzrJMMXQ4PpoTrSBENwhzK3oB6TMaZEfDk92MQCh1YvrFFb3B",
  "key21": "5ERkuEH6TFPJ17yLQn3cFcAQXPW4xu93ZDvWf8gxcVaXZM89fpEwJZT7BNcWgXp5Pq8N1GQahKMirK2aVep7zJwb",
  "key22": "5Zsn1YZiLgc1Suqf7K8i4Ggq3FvqfVVcoEo1iocEJiDdmY4DoWvU3fg9kDyWAC1B4Wb7NCmGzTfDQoNEShVbVm4Z",
  "key23": "WcSkb1pEBcPEuYtQ7HYWUnWEzFc4rtaAcQb18hCiaEVWQ7LDdRCCQc6HzAicVUeBoct7qYEjVTWrEYPHiczWwmb",
  "key24": "5vubfLT51uft9C5KWYJz9wjxeq7o2XPa4VTwtgpT5naqZEaK1V1u1ZzchKo1viivnCWiyzifkXBaBQxRW3e9VRpq",
  "key25": "DAXZifFZMnAXxjDBfeEdFtEbUcvKJKS2zD1FVh4i6pGxTypA2WHM31KnJSLstyxSdsKgta9z866VdDZ15of8jkB",
  "key26": "Dncr9wgmPANUkiXxEzbp9sA5VDV1LXe9jcGkcuzAMEDUP76EzSNEDtyoKWwgVpRA6xKDWQdVq7fNUn5pffjvc1f",
  "key27": "2XQfuh5BiZvhdMLdzDzi8N8fAsvbpv2d1hckLdqR9A9nCxnnL2JqbsZgqCqR57Y1EGan7yYtxP5zNoxsU5aXSE69",
  "key28": "5W7tDbjAQjTmp7Yi3BN94BYti8Q6ngYwDH3fb6hmxmnhvMDMHbpJM1QWcGnw48LvWRJinTPv21Dqc6pCc6zFgj1H",
  "key29": "52LCUV5ToNd2Yh3xLy8QtNoMo5Ku5DHhWqHiEwyixkJicm4dNFjPztxzbiC4itfQ7XEPM14mnCnKtHnVaDPyV4DG",
  "key30": "K3xS69jYJbCF56eUYP8dacBgaDisiLGwuCzCigoRR1Yz26FT3LWKkWerBw5efHZEDhr3W2Py615GMAfvpNdkd39",
  "key31": "56FVKVvh6uMvRm3ru5WP6pge6hxTHUwDZvmpqNgVmpsUKJTkd6nSSjxEHSH8ZhT1x7W3x7hhEgZiQVQjLCYBSjuv",
  "key32": "4fHRLB1UNdH5zMeohQyPCTb6htnZqy5wwHv7MYXxqknbrAWwDKDLmLHapb77WtELtG5zNvTSM8mHfvZSv6aE6Yeg",
  "key33": "24ykGnTSHzTE3d5QXDYz4tV9ur1ajbt5RYpBTHfJxwwVzdRFyEw5owfvASayRgRYJeTHAQGRMTuAuaUWCmHvzobj",
  "key34": "2VwiRi9x87T98A7uzGfoTshngTHmsQcBdZ8ipZL6bf6HAWf1U8sUb68rC7GXteBKyUtRtipt72J4ATwCCXh8FC7K",
  "key35": "bhBmNhbKJ8pwv3XdBzaBhV5HYX9sP2rL6R6kn4CgEFqs8Yh8Y2aoTKVaJNowWR4zCUQYQnrBddDk6zUPiQZ8n5A",
  "key36": "2er62oQ5fJkzocJFPhCgx11NynNUpfYijKMbQZywbmvDGCB7u9YVKUe86YB8XLHJZ3T6GXRqN1UsYUZybBSLX3Vs"
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
