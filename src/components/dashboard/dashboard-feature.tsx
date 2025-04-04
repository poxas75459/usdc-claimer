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
    "2G2puJM8zXbKski6NvKPYGxxSok9rHynGCSqHdXTDMmNkiG1CafcsUUYMRpu3UM94zMuX9ky34Jt891B91mn5PZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jP8VkCznVnt8z2jo2znj97wNvV1UUoMoFy2ViZUYtWG2PRKr4ynY5AdwQQNcNTV5AAUY8ETPdjXzaC5vrUXwgbU",
  "key1": "5YavaHkAzL3tcYfAW9cVHkMrAXRyQg9XEMNXMbEA4RJy6JBy1c7kvAsQDWnZxC8B9YGPVCVkXou8q1eD1VDzEr6Q",
  "key2": "4RiAMZaY8Fc6ktvJQNX7W9p5RT7RzANwx5zXnghDCk63ikNrWwGUCzn5gqHHpqazr8euX2ePGGCutvcPLfzL6JVG",
  "key3": "3zCcTv8LoX3LhaeFEgaybeQvRJzHjsXZCpAxUryjEeq64U3i2LwPQP9jSWYwuQ2BzxSLhPHY4LWiPUb5KZ9oE4gE",
  "key4": "mdky2K3hhnQ9ZsEgChjT7hnPuwe2sNiWM238rb8eZdfoe9U2TtCxym77yJLqtHyUW67hYchU9vDDgnK1xJNdHto",
  "key5": "36WtBnZq7Wm8nMUhXdMgxV9youFaG3VGtok1Wne3ZwgHzfXDbnRRYFF9hZxrE9gBJ2sWGmZk7D1LR2kZdtNs1M4G",
  "key6": "2npcLBDyPMHEhLshDtxJq2vdnG94bMsZNzU2g3vtnZipwisJUu4LJGwN9KSCcmWnEFvVMReh9kBxFe2H24gALn1x",
  "key7": "aC4MgfoWUzDzNWZ9iPsnhZDxQFo2Rhm8YBAUXZMgd6Ub9XPJ7rnuTNqhAxsQqYh1KKX4iMuqe244S7cPNumrLKD",
  "key8": "mUiHoh3V1D4N91TdNG5kmh5iCMV9mLEHMfzowDrjKmTRtiaA8gg4QEZkFjc8LS5H6ocrTn8Segb2uoXX8pG41Nr",
  "key9": "2JS2ag5bPfKs92gsNYShSc1LNe2RiSF1wwuZruDLbFVix9D3fm6JT85bDx8sM9VzL4rxdmwx3ANBfQkhyV6iRubv",
  "key10": "2joX4uqtMAdTcrc95NJFa1VyU7JtZDQFBsGxmp5Q6KNNukuuF1pgVt8s9p27oiQy4qXXybZsWykvnp68MQgSgcd4",
  "key11": "2pun4QGKQCHBLEGRwqxroo4kT3aK6K1VD7jCBjpCCvbfjZFBQwVpXZZucZFbKuVSNqL43v4caDFpCbyGZvWoJSSS",
  "key12": "2eknUuqV91YPqefDydBgNQi5m38X93FysXY9uvorrxxv5H3VZfMHymJE3j6CDTcVab137W7qeVdAvY3HSaX3Ptdm",
  "key13": "3LHRCTs9bmHeWqzRWmKRj5RanenjJi3MGmKBoEg6B6THMTpQdxHojyCzLparpxNT9MzkshY4q1QziUpTuV3KY6wr",
  "key14": "3uBu7bSNWXjXWCYd6Ss9ij3p6UVbG35arhn46ELosmYSN6JezYBtBUh7E5ccJmvCSXhi2FBcXXBtqCb3ThTqwaj8",
  "key15": "4VRTqzJee6rsDxEJffTrJga4kbyuA3QRBmURzgaUuNumYp2M2SwM8cLCxB9qQTQeCthzpWs86PaoYFxW7GnGFHMa",
  "key16": "TFH3ReFT8skDq6tF52ZaUPw8dvnFU8qDm9Zfzdf3dAALWTKmJs9ZUKWEkhuYj43aLVqdrGPPm5bMP6ynf92TUEX",
  "key17": "3Hv29avFHTw8wAEfM3wCxmujTRoTcKpMS2s6uSiLTADcPHQDmZzJX7BjNUPfyf9s3j2YASxutYz5D4npN9Zj2QqM",
  "key18": "4N1GCE5Skex411MbcvY2aBjV5PoFxWgvoj2grbkzSvhtWuExEVzfBXcviAeLMSsAsn7Ky37YHHV7yiYgJ1kf2aCJ",
  "key19": "9riqEC8dxUi4bRLt8ge12KZqc2tyAn31ocVxTx39hyz5acCSfZdXmMqFjEc2XSMok5dpj8jqwfZUcpcWwy6u1rg",
  "key20": "3cg4DL9yMzQR92mFztetKSHEtFSMHV7N9knXy4dMGdVENyyexo9GwWzMvtdCbJHdCmTRPbeCZpEjxzEdyraJRFT2",
  "key21": "38uzGzCGNtMDSJAdGqdywGtQciFEwxy5py1sGpDc6mDnDgpaEXZGbPkgvGuiSAbQCvxaYwaHkU1922NzZ2Wp464p",
  "key22": "2X8eULuXLKci2Mu9haNuiMHZBdRuNppxSSwxsf43obgTuqm1NCpAfQNnycUSMEY7mCAQ2p1CE3uuQUrGbw3WrUwe",
  "key23": "VXmgtwV4VCybZPrUSXCuACuA6vmHSiPR1qLhKFJUSrjdLqYY5ejzUX4ome2Vkmeivz4F7oApn87fnSd5rN5c8xh",
  "key24": "piaWaR7S7X1NNVAkUdAMaQqPSMACDYxE7J9sEbebJy9pyCz2GpDR5hDuZNTAPZWuqsgrVap9hoggNi9k99HAVYU",
  "key25": "5XTkHveeM2ct9jzRw85yEu8DnMucoA2VGZoRmgbAZJ8P1UvYRLUBtocVMM8mfJg4e9gCE5ecSPXCqFLgs9x6Vye3",
  "key26": "RPYjovJx8vbT5gFQDfGQdc4Nep32oti3hvnoXLUTDbuGQHGWBMYjEMwGL3ZvP99tM6Fk2cThg2jKZYtnvSRyJtn",
  "key27": "5hDJkhcZdaqNtJnCb8ysDv6hRJ558Sxfsa1oGNApgYsedj7e99s86htxiU19V8FEiGCLBs8RktMY4Ezdrc3Gnp2N",
  "key28": "47JFFcV8hntqPd5aYGRQKdEkNxTT7UdX7CuxM6VaXL26RBAnx3abktZhHFkdsMMsDnUCH7KUZTsNgwwBxirqZpH2",
  "key29": "8BUbxX82iGPdCGYSKG9EERmAsbk5rgyf9XHZq3ZH4SPzN1YrLVkA9gu96i1EcUNmPCdhDvxFM9q9uk75ri8zniB",
  "key30": "BBxryhdHEacyJBCrMadYdCfunivAUVx1qcaEMoPAqPuk7dtS5DK7t2gm2x6NswVZxZ7q8BDijgJ4PSNLQATcuZN",
  "key31": "42wv2okrQN9fMrc9DEgDMKKupqeTmKVuCbeoEDd858zN6vC8Zi18hhKh9oJ8nLwBeq6ajyehGA3wih2hi4XdJS8T",
  "key32": "2rXgbJA16Ba5cCKQyn3RF5EKs65uwTFhxD9URVV7JMwB5wKYqccxh4MFSHKHmCrgaNnbeoxhMBahDdJPiKXCCwNK",
  "key33": "5NGU8fTR85S3DoWdQDKid8ktwoR1vd1md3PBboH5um1pDc8QQqB17K22M7qDsDYEqTf3iucCKTi4P49zuP3yy4ap",
  "key34": "333ACgmWYAooY2SViLA7Bxy7aaUuB9EkdxWE99brHqbRWUv2X2qsdY8MQiZBeQc9dUJibUCFy24MEB2y3qyhNqUT",
  "key35": "54nEFQhVLo2tjZTndVSBUeACkFRpvp8b6fLBe47fA8rbNfu2pWrtSp19KJoKAcdx7cXoaTPguQkEY3NUWSi8xjg7"
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
