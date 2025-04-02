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
    "38nvrYsat3PtBMDWNMei3b1iy6W4NSD2Yhc9JM9M6zvcqVth9vLHryEaBrY9bmmV6ri2FfkNAkHtztW8QXFmYuKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wn9oC87jg6yn8PrR2rK216TBaXfPDmn7eVaEydDoQsCBnNvrFxuZqNymG4dx9urqP6Wcof3QvmNAUCRxpFpSY2",
  "key1": "4VSFnMMsnm1FwxyeUgh8BWv2DjgDjeM1Uz1Gc8LMusH8oUQTid6fqBF6TUWqXUNycgVtbc71EKzSLSTzqVhpsgLY",
  "key2": "2NK3gE1RAGPDMHCMk1hq3jJsLKaabkw3Qh8XDRJfbVUthXeNddDSKHqq7oQXsgsRGHFWuAea7DVABjMDFcGwVNga",
  "key3": "x2KoYXjqfkBf6sgTtEx51ytYsjJvTPXYDK6dFeLfUCFUtPXN85Bp1dnWzNQdcLJnhVuYCiwtyir5MrmZuphqivq",
  "key4": "bRLTcchJdZkPQJpypcKk2X9KhswKDhvQrK1A47gstZcNPgGkuwWLE6Eo2NJEWeusi8VFLjbkbN84PaVfDhWvfy1",
  "key5": "35pK2qh1F1UUDWMX7NouZHW2Hu5scs6tWdcdFrxjD2adDKHc9useVQciMTGC43Rx1kMYPDtkYc21GKdoRyMcGLRq",
  "key6": "287WxVa2jUeZJQkDUo5XHKJ9DZYWmTvHX2NAHaAWLk8NSF47qAzjB6wTAy784WLyJD4Mzeu5nRs8tYXrw7vZcHyT",
  "key7": "8kUx2mXnrc7rHjWEEzGNw9BNmLughLuGY7CYZwYXoRbadCuyUgncy8tzusQzvzBf7ugBvzKeiSoLD58Umb5N1Nm",
  "key8": "4rbhcDKAn4dNg72A485QRRVm46AWUfePCm6NuXVQt3ReFycVU9aoxB6BAnLjsBc4PLY8jTrCR6ebRrYYUnTXKdwh",
  "key9": "kuse3DymBsjTYhXRtweaDoaP4os9QrX1sZHNZvERmSp1RZNe38RMQe82VTUHfobDU7fmd4vPvk19J1fjYTRZ1UM",
  "key10": "3KKZ2PXLgAc9YLqNb5NSczGHw6rz9Xy7TQAKcwk7ztTgyjLSJQiuEt1DGYpxZn17rW71V75W8c7kFnDcTQzKX8uY",
  "key11": "21f1ZXVPwatnyvrxB4vGVhhiZAySdLyFCV2iirYTFTmVznTU8qHcYmkPuxKCjf1LDk4DTFRE3Lr9cRbAgMwBGDYq",
  "key12": "3cGsiuivafMXUpyUh13ZxG6fcVR5LYcXf9n1Yewnjtp89Zu3B54o79g6EYF26PPkqz1145EzHWzJEyhYXb5XZDrU",
  "key13": "24d4sCPhPiz26SAZoGzTVYyKcFbSEjSd5hzSvZwRfyGCwjyGvknYaBQ45pmY4YSaDsgTMSvPEd1e39hGRAv2YT4v",
  "key14": "TznjBeuyDPu7gAYGc52SVDWVbcHMvJzzrHSvujPbbZ4c78diBxptxYq19xgqNQx1eABLfT2LR9L7Kba9kzD9X11",
  "key15": "5G4nyTrDausBuYt3qCP7ZV628kHtcKz9mKnCimqZgoiBhow5zBHt54PG6ZuV75bSefGomVwAZwFxX5rwkRDeJhpM",
  "key16": "42UR14WVDbXdWBqegXr2YhopduAjeFivzp3dDKp4m2YgftSkLMW7zFt7BjRuUFRvq8vVSM1KbAKVsJt9vL88U3F5",
  "key17": "2cik6TAQftxDt716gR8EkAd1cYxZ3gH6K4oS8eC7g3HTbeW1bHRHJFriDpuGxnNgEiqcJMGG1pkgBtByBdkdna37",
  "key18": "5UtDM9R9wSDC1cQmbKwcgf43eKYo5oFfPMZJ9gcSwpYAvMsrAQgv58MNYH4kWfE54fD8VxytFHECZ6mmtTn6NqPq",
  "key19": "VMQmPfSH2TuLhTY1v1y1Q1Vdpnh7LqrALEpwBxQUcMQJGF2LnUMEaBxZp41atTuFukZtCEYkghg9LLv1t5LpAVR",
  "key20": "5dP85qpnY9Wscgm25NjbyqVWw4s4QqJr44rRxNcuXhsH9cayGTrku7tjaXypN3EbR3JkqrRWubQS2AjQdGqTXsxa",
  "key21": "xkiyJ7jbtTHd4YmLrzaf9ekMLKQojYChVy4jeFqWU6YznrB4rY2TpKXx1qAZMqyuKNGS6nekJ3X6Y3BFGhaobsB",
  "key22": "226uiv7o6qsDMSET4KnUALW4MVdFKt5pHVG4xs5VoXsnkNMY6ersmamkpAF5bXNhUTbDC44CXJUWzz7Tn2AXZmSn",
  "key23": "4cR2qf6znoPYrBBH4gDV5sZyCeiqwxF1xCUBYFpsrmSoaxYURggPsvSm7n7Ascf9MwnxizGLL8HxmRzBRnPawRAk",
  "key24": "9Pe8XuKT8NBcEvayDvqS7pxsA9R16avbrd35z9JcuDCuLk5cpTtY2MQLb9KaeuykP2CguVJfT2zgeBcg6SNaKsZ",
  "key25": "4n7GZpk5iy5iAqwXJLfQLy4TGA3x7mDPMwHstujbBaZRXzqLvBqdkoMVJZnPsJNEDFp9Ncut3Mb88YdqUhWGFnn6",
  "key26": "2yEjYpbfC2s3Gsmw6nCRrq9KWtam8Ksez6UPjc7Mh7yf8JDboYTJESg2wyTSP1M8hS9mEahYEqbotcRA4gQuEMqY",
  "key27": "2936VGPgmTTgm7usyWsF9Yb4ZjY23NjdEZwBsaitujy9adWWKgK7NqqK7wqSAvnxWvJgYGsbi4Zowgspf44X44Ug"
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
