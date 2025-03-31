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
    "4oWMgMDPkqqVdhX3JfyqHFX5C9BryZogUBg13JxmpdTu23ZN95f5TdtdxxuB6seRkLLhXdXWEkr9KrTj7MRkhBM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5DXkNfWsYF29ZoebJVG15f74PVhphUm9fe5XqEXB9U61Z7mtdmbADCnbPF8HfMCYtxsaWVvPutMqBv3rbMHUAS",
  "key1": "4a5obeK9cUNGUVvLLiFuYqi5gNrPEPCnrfH7dypvkFJesXapcpmVyi1Fh8HYSSTdwXuKnTQxXvkZDjWHa3JjVZ6n",
  "key2": "43XDyN2DKBnmSa7dWJhu6PzKD8J1sdBu7pRyHYyZ4wWCFXZKNz4gV6jHpSAc4q1oS1f2J3nPLkJVpQTKcnfKnLKs",
  "key3": "A9HD35VX6jd6JM5c9Cs7NJZARtTf8UMtyc4KjFG8PPzsgG3Am29yjwj42NfoUoCetU1XxuxVUCkobg9mhLUNMD7",
  "key4": "62jaNDWN3R6B26hLxw5Zds5JFW7M3yoDCiJipaMEk32ngXCZAuUPuRcJLUnmWXKWseELnzGRtGiEdR7TkLbCwfi6",
  "key5": "2LoJYSRM9CCcpXRS8gtkMpSdFm11KsgMSf1pGp7cNf9qoAVW3qK9s6BBvVQo2muMPgXEJkRJ9qNufmm4yZ5j8v3s",
  "key6": "4DEU9BrXAhQGH4QEeKrW4HZXic3JWDQmPycfkDLhUfTNgDSBPVw2sJfy3Z3m5Y9vM27DdgdUty8qRRKPB3GD4HNC",
  "key7": "ZoskZ2sTFQ9qo65D5xpNHBdv4tvpqkCrd96u3TJ3B1sP32mo3gazHcunDnon4a67WnGskeQUZsRrWWdGzsiUFk4",
  "key8": "5DHXY9JDFGzwSm47xxyshdZVkx9wSmpaiaNpAQNAK1qX41sqAHrWBTttfCKG7BnpFGBwVVCw6FSq4UGZeTkw7FLi",
  "key9": "4gYn54KEgT18gx1yx5UT4isuVVHbi4xLB2ty26BHBRSnCi5fLCRVFrx3ACZx9U9BupUSM6kfDUd3LmtZ5AZYgm3g",
  "key10": "35UEZ4C8yP2XbeLdrDbL6fcz1ddMTuPaEz7f3GfEDa4rMDzNMMredX5JSyw1Fu6Z4FTsZtZUD9NrXSwSM2qeGSN5",
  "key11": "4vH2Uzrq66scehk2TnS8E3qg7fWicxxZEbTirbKDN2PFXSn8gnCRxrFVFTH786zrFo2ZPQYh4koroBTeRcEgVN6A",
  "key12": "53m76WVqfSwtUDzQHmjVcqySkyC79B6Rk5uUhsM7SVysk8eyaxjpTP55gkBkhSBS82vPT93BipQRWf5R3KHznGFr",
  "key13": "2D66anVytgtL3ivL1VgrD1JF7JadcA3pfMwRtrQU8UShpedzi8TkSuVrUMCEddSzjJXiFTeosZ25FbbgEehCsD4Y",
  "key14": "3dmzXxeq66gJCkrLu8Bm8taF17X31c2yuFU3e33Rgtz2D2qv4xCBpYKBPKxJ47WEuTxu3UbMHxvBkKYRbNcxDK16",
  "key15": "32KNAyn3HbKZc2ssB4juFnWpjLpK4HwbtPUggBFJVf9ntT1zzVhpJCcggMH63kLLGULHmuASvJgpYyWBFfsYZjej",
  "key16": "3k8z6TxWYjdjQjvVPVEKt4Yr8PhDKNko8PPy8CDComTCq4qe13EpbrV9pCFQgCJgrViiesin9pzZpgQYNzLEUozM",
  "key17": "567hFMuSqDh1zxGVfyRsw8NxN5zFfm4FfUL6phUxJap46KusBUYFXDcpZ6Ubi3PJwsEXwLbk6B7GcRvqVRvfvSM1",
  "key18": "qj3vdr4BVG6o5WEkJYucmry4dq41Rko7dtXsJiw7hQq29Pq4HUMpDUxV7fonZNZecZPMH7hMJ9Yd4gCWqW4bu4T",
  "key19": "3EpDugLUXxZj2nK5dFkhnBdrMc9sogsMehoKaNSfMn88J4frYsVkHDCzPdt75YqPCEVAuYzi1mdX3kgPHwKPt2Rt",
  "key20": "2wq5mHjQR6GFFMQgQPKwvpruXrNhwx3jwPbSarE5PZ3UijUJAWhj7cRhLe2BoSA5rvHpUEmwXuSdaXBGwnqWb44v",
  "key21": "5XebbK2CpNobNTp7c1qACbosBB96qQzQpuZqZpmVRD7vfa6J6vGJiZU7SqM4A1THYtK8JjcBvSkKN9aE49KV5t6g",
  "key22": "4uZZGb1iPx5mVMfdJr4RiywPrPD1gV7PW3znMdarxTj5pT1vYScNYbH3MDf9SUi8n9JN3446gAM4m5pvGjSw42BG",
  "key23": "4VPyvtM5Eqyih3oGz4FGB2Dcw6nHEJZQrMjfkV6zQisduXVuEA9qyDPyhUSd6geKCqkrNZ7eJwRzsWPHAQ7t763s",
  "key24": "43rCU18d1D5zNXUQoU7gz7yYXxMjsGiXwfHg3iNaEWAfUA1wY3Rs8eucpGChHUFmd52wGBnz2KM7K3HyU6KjzAH3",
  "key25": "67fRj5jHj9GmaK6qTZmzGrKynMrUydEMNpjdrEHZuQxUHWP3T2E2P4QpZsZPJDVKfZQuXgL7Po4p4u9CCmhFxVeM",
  "key26": "NUgWsNjEdXyssBmBsXy1g7KRdFLyGpZVUpnTW778bkWHgwkhhUspMohEfsVSMZZskJiW6mKdRUyQCPNSCUAsNng",
  "key27": "3Fr3e5HPwvVnch6setGD7qWDpjpRShmSSPYwGLidYj4KiHuVxNR7P4KpY88ZxmmSv1bRduH3zMfP7qQcyZPhTaNF",
  "key28": "V5BXNevBY6VcMN2f4AtKq8VtSMPM1932DaqebKbGpg6b5tKwdSDtE4PyZ45Ede4cdZVomhg2moLvkvsY3kpEkGn",
  "key29": "3bSckteYudHeMDCmHdUoUcgsGcRvM2r6rJnVkp3KJu1wvgVgHasGUZV2P5T3kox7SiUinVi1FjN6WC6JmVTUQWk",
  "key30": "3e8gobWizfFtjMUirBYxXCxojH5vLrUTfcM1iLnFsp6hfUQNkJYQ4Pr1bqf22fom9eRUAC1GtV4FFHTLeNhEFC1U",
  "key31": "ZeS9EAwpwizAn1yJZunFn1LURPndnFvRN9CRNGQZMGmbi7YY8QviebcoZG2iQs9WS2UbXB33wukHLybtEu2HpKe",
  "key32": "46BdrHG4zEi7dzUb7spgj6HugPsfu1jhc6tKBbZjzh8MEnVhUdmwoWZVgCeh8Go5P5a7knmC5B9sinbqCdiqTdJ7",
  "key33": "jTaQaqW3eJeiWBNpT8CY1ZKmTYAT4aPeqpyfeZwaXu7YvETXTZQA4wDVHSZ9DTuSYKC3vwxY2sfVf7nbG84JUQs",
  "key34": "5aVox7Tg6kWDvE1uj8DmWZqy24nrbhsGheVXz1TVzVC8ft4eYH3A8zGHJa66ktaPLRc8uDVrR8zgVaEBpTzwMkws",
  "key35": "3W1pnrPd992JKtsUVbambNgTJi4RfMZL6mVqmq9mUi8TqFKd8VFshdCj3B83CDoeG7XxtdXNkDFLYvUZNKTMM1m",
  "key36": "4DmNDYqGN6U55FH2HTnVcG3ct6q7vTcNA9c6uuTGqAjvYeFhkModUkSfJeBhhTxNsrLrt8KgMTaHyWtv9HDUjqxa",
  "key37": "2XrzMeh3Q42Hwa1NCLwBpdREEhV42tx3ArY3neu1jDQKsuTMVa7QPTZsDNLxsby9boPoTz4Q71NoLiZeDMJXLXsr",
  "key38": "4VzenNuWg2h934CdcMhKh7Hagh63b7SfFBsHbnU5bEF98nQ6VW3yNyVjWBniLazPagkeTMPXBmqU5zwRD3HGDEKp",
  "key39": "4it3d1Nwya8x8zJQ6JChmgdbqGMkXMV6hoX2Vh5VAowt9fsusNpbPGyb4nkqYNL2bCbNqQd1yf3A5FJkWSMwjaX",
  "key40": "3G6HZHztGbDtpg5zCb38wBdiDyiJWrqGafirzeRhQxJbUcuWcMhRxcLkdzABGcaMWgKRHGbHHZmbUh8C3WATUFpB",
  "key41": "3NQAsYFMFwUttiZRahT8R4wb3GfqogFggwet28Y2rMK7NLaPi2c25Z3jVChCsDAZs53PxKHz85839JgwSWXj3ykK",
  "key42": "2xU78rSegWeyKdNHmxYJUtJhrumGPzdd24x4XFmSBQPrwZQZU3iFe1HdfPZLCSHrCzqWJyFi9GHu6UWzcssnMBHJ",
  "key43": "55aNzWDoA1HLWmERhiL7mj3Sqh9Xu4AucALbmk9mbSPKyyoam9NC6FxJe9A35bJiYe2xV7ZvvrFqdtFs8sCTEVgy",
  "key44": "37nuHHzw9UVUqTmWSxYTmU8szCbMm1RbcKNqQsWxXUxEYBFivkwEbYpgQX7xXi5YZCjSqyRFcsmnmxvPWrGVH17A",
  "key45": "37EbgMM1f9mBsAxV6UpQx5kJdSkQcMD65qZ6sRu3CiBJSab4sni4rTEEgNU4gWePUxeiN3VXv3yf5Q88wCpLpkam"
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
