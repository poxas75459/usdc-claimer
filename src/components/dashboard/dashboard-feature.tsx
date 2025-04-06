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
    "54pyrQXt9fjrks6F1Fpjp3aeWFM3867cKQcAPk5WFrYFRtXE8v3dutDjKKypmiEqR3juhAPtdk8rXm82cTvu1AXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bc2VPCA2FzRGXhurAgTRjcMMu6iFE32RExWybc9q1yBh2ZFNc2uoDgLwJRCV8tsyDGMGGpNLaS6gSijH8n5JKtJ",
  "key1": "5mRa6EMPQtSVJKX9yHzsoG4zSap4oy1y14ikP7TuZrF9eNpSnVs5J8p2s6aWyMJZd6FJmGKWxzGNhD3QtaDPvCar",
  "key2": "51fb6hxGFDgfF1AYbErKjj4DsZqCeGj9VxZd6mSVbuXEnEi8Dj2DHidVf6k2DdQk3QZjcEs42PqfvXJpQcFuxiJE",
  "key3": "4p3hYMDvofobadt5ACX9aQ9SGrHi6FJ1ERck5r8LAXmeFL5Fn18LswNQpS7T5Axbn8FkbwzDXmcEyZmfB6NJcYEg",
  "key4": "oQPjygb5JuH3ahfARbJ5vRWfWCHNUnHy7APQHwmKSW6MvQuo4c74MiDY16JhP69g5eKgfgRQ7VnAiNumkTpVfU2",
  "key5": "2jijvKWmUVCii3MZQY96Rge5VURPwPEbWzfh4XzUJjwMUdHgDdw8GnpW2U1JyPkae9Km1CxiaA2mTFskiYDF1EfT",
  "key6": "UVAp3riVD7B829PfbTbCNJEsqtjuchDyumKquNgqUxkwQ5pNxoF2ynZtLqDvW7hph8UAJ61Us3PS6wj5pYCP2ht",
  "key7": "3kJSmnBh7aREYw1emoF9qjieRENLKnpSCDZsnnMice1xC478oRy89tXDdtbGixG1kXBSnfw4V3JYrLHyGsPCmurd",
  "key8": "2oqEFYLhYQsttgxSxRgHjiZaKHtKwWES4UE447j413bTFsWTyJd7W38t2vJiii3Xf6R8vAL2Wu78KnC1tk3vRNSc",
  "key9": "5NJmobm3JPefrPadwCkpFnqTkn86ZFJyrV4bGmE5FXzTNcNisGoW3cghfX5Zxy3tUdb6bVWAnXnTAk7oDPLJ9pAM",
  "key10": "2VZccMuf4BRhoCQLKrB3g8y6cZ2rGctqP1THRENRmQHbxAEmaaPV4EcemAnCNxAUjrinJ9hMEFvQpTpJEG2XhNi5",
  "key11": "2JbvFXQHcg2faE3MLJUbtjADxmUg2wr732rQmKLJBLrwFU8a8aJN2aARY7mw7ceZB4NNZ3Zrp9MQwDPY3u94q3VW",
  "key12": "2RN5U117DjTkGFmJ12xNBRZNxgA14HwaM8rS5gq2C4Gw844hvLJgwcgr8Ho3rMso1m63szgfksRcrZdT21kZD6sA",
  "key13": "5qSX3wJW9ZE4yXgaXwdjsMRbHXfBmogMRaApVjWVFe1hWM2PFeKJdsFQs3Aj8CEMF1uCs6DNVhVp2aV8jy95keMY",
  "key14": "2CJRUy1pYBYFhdz95ZNKC2wrbo2fPKB3iP9AQwF7YJSfMiwy2TS5JFF2ujPQdFYDnBnEj3u1T39uoZ4v35tBKjhM",
  "key15": "3U9xigz9u8qDqbPfSF93ieYHqXdzh5ABazCWbAAwwrShLJrSK56rU6a3ZfUhKry1uThF5dqqLFqWi3Ffgnvhzomi",
  "key16": "5RZyPCSUzcMj3CSK8rtmdzE1afwUpntx5S9EJ5byBZWqfR7CTStVXJWFEo44U8Ui9KzPVVCUcn8nLx34ADVuSgaQ",
  "key17": "55Y6JKrSzgzD9fHoL8EZ7T6pWfZtaM4kGKxY3ShFqDBxnCmyPfrdSzhEjfBg5mQPvhz3WRUFuTAuZMKxxdtvDJpn",
  "key18": "2HtRYgp8Tr3aDmqMW9PXb3n7JcGA89z5FeSYj8HwqVEXXDKwRfBqPZZgzFjfabfoXubn9n377Tbg61RSHX5tQX8z",
  "key19": "2zHDPRErT6WHu23V1vxrUZzQLyo7rfQnoHEh62peigydc37n8yrd1NaSBZQgLTedWa2jBKWJN3nK3gC6aw5fbjYp",
  "key20": "3FBv3yXgyaxe6DUUzJsvUDR3RCx2HxNW8aU9CZRJHDcqCwvZFNY1KG7RQMFEnizX67Sy58Yf5g7UjcfgDwYTRtJJ",
  "key21": "j1g54b2W3388TpeHiHrxx6HJiRW9avnDHgCSphNrwYk5ygDdBHRzsCt5HPfjWDsVFmWR29DwvavBFACvWcks7Fa",
  "key22": "4bi9vSBzuF2xRkbDBiw352MPUUV43fCk2R7YAHwkVvAUYb1SXRQ1WDizoa5baGxZ4iTVRbPkvR2S27vM9WB786B5",
  "key23": "5ynLq23dXJrE7VyCRczawXmXWMKdYtuUDhJZRULR7bZkCd9oLY73m64C79xHkqwg93EQjiH5NQtjyo3f49v686Xu",
  "key24": "2huwo48RZELydmift8EjnwKh1RGMons2Qk33x4zRUryW84KgBrGS8ArstR6c4asYyNJHEqUi5as4XV4r1gnFAaPG",
  "key25": "5oszrBoRqByi5J39V668kxcb4ty2sScGHRarRPef1rYJrrzeiepjiiuxfmor9rmz3PSMTNMNaoECA1XahYKQpb3w",
  "key26": "54EnHCeRnGfSRfPaRsD57QWMDMWohdLw8nb7XmEokSm5jGjje1MSN7EvbYKqMTNRfm1KPRMwTwWBQzhxaRVFqCYb",
  "key27": "2qV2zR4gmgkNabEMebv1kr4ZSxuBWLARtQP57fK8y8BvAYKeXiNvQRQpuqtU8DPgSg3Mq2Vvk4ejPsGMm9kKmgFz",
  "key28": "4qZYjwjWXAiRRCg3Xs8vh4QyuSSRiVLvstPcC632Ud8LpmJ3Hhtr8ds8pD2Ma841ovcaz8n53hYTyrnFpKWEkHkj",
  "key29": "4mfrxV4tNYAg8AfFaApXreGGpXfC4uBAqikUx8YoeTRCDFnLKh4PyKmuQENg49ectFo32w3NMGVxHPSP2Drcc5h5",
  "key30": "2a3vTD7CpiXhzuyGFafKVYhskNGniRCaJH8SySJ86T5JjgxKmMV8hNVXuHhu7rChmbsG9ALt47Pgtpv232ECeSMj"
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
