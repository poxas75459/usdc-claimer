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
    "4pW4V5x5qW3LE9uFJUHgg6NS1PV7nGpjoBQoF4qorKZMWjQ4vmo8ogSQBDUyDVktfFFZQdFgxdZPRGNYZ4ch595h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYU4x7GAA8QwWtFmejdffRruYbbSW2RmGDAzmraqMGFV6p3bXfZmfQcHR48GfRzLHrpDqeQAgdp4wNzKZTifHwg",
  "key1": "5GmXBmfesMm4g6a2xtqou2wU7g1gGrW4KpiYrpTjkwXQCTNXCTQCAqPbYuakd1D3Ag5QC3cHSYy9ViQDoCjb3P71",
  "key2": "4bLFzjxf2S33wCoay2hry5bXZcb1Q33pMiaSsghp4h78GNyjQqMis5MSBjoyWtRfWGVR54BzjHDPuT32MKDjPcfh",
  "key3": "4iU2Gc74YGTbgJXBBGvie6HyYiHqwDWwUNdHqU2AoxuBvwt7g3ydMvHzNEwDutQ8oov2ukLoXGgfD3L8Vo5yq7z4",
  "key4": "3CKQCc4b1Yw83jxdEV1yPX8b2hpP4AXoDZUPi2dCBuKhjweVtj6gZVResmf5sD38v7RgzngRWt4LGTc3LzHZPb6v",
  "key5": "5n6FBde57uBeDTUpTxTVPz8LvRTLkzuadUAc2f6rqiB6ang5EADe758WxCz4hJrH86baANeXk3LcFyZYKwr1fSSh",
  "key6": "5LY8hNaWHRAty8YSGSP96hMcdKdh4c4REn74T43SGbkahCxBPX9QJwdKaFFZ2qbjUgh1PjdhGsEhwftKGUTW3wLx",
  "key7": "3yzyYiqyFh5U1GhvmA3749JyDVh8HuSk9kYVu9b1KoWp5FcxSznFYwH6g1Upy1beAysuP8XczFNH2pGC64cZsM5g",
  "key8": "5AVByQc6LLiVvakRg6dZ27oorBHrwdX8zsN6p9u9TENNvr4LUrWmDhAwJpYbeGvsRWwoHwntMuiVwtS4n4B8Ly5Z",
  "key9": "3a1uA4iq5HfDY5FKpP3N9NorivH9ACssUvHigo5CxwSBQX95TTQokVeJYsohhSLCpuvzYWVrLkvfaj2saULokadn",
  "key10": "61ckjwjUxrnc38UCehK6ZDkU68KQzkGaPYR1bnPNBpBQB1L9u7HNDAdsomhX5LaTiucZHnwzPyubsqQypMjCSnm8",
  "key11": "fuTrfzvNKwcV1C7oswSEQcQvysNDhN4e12NjC4DFPqTrN1VJk987cucXUwtjSv9H61zzH8haBL5tisnD4NCh22Q",
  "key12": "4SM32AZ32toEi8KTMpCkCSS9ghRvraofeXgyqAxRBSAbtPdwJPc67iJehYDagHoDpVHCSedk5micDhPzNXoVios4",
  "key13": "24a8WWbZM4GP3EAerEnCx44Y3DHxvNK9X2Xb5R2eUxFR2yuVHuZxDWX5XAq97CwvDJxMzXthfZkMjLHymBkPUbxP",
  "key14": "2uzQLWLNCC1LUEZLXbMY9pxjqppv9zujpRzvLsrspYKCu2EyjxFpUf8Xi3urCzCz9CQesb7jvK3iQRgjgNN2KhPs",
  "key15": "JpLPKVzqZPkdJxZCR89SR5CxHFfJfJTEKv1zYtm3KjobcNYb6Bd2iuK6kwLd1tsR5YdZDfLjbfytRg6VVCN9FCw",
  "key16": "2EiHTpQFD1eNDDf2oFUmk4Ut2pacqYFF63sLtE3NXZVJVyDDvnvuJnHgrra9NJsYjD6w8pa3ydr5CqQUDK8ksQY",
  "key17": "3ovmKYzPeJHCgH8sfdxHSPZdpFmuUpz3ktnLSHb3Sn5y7GwyZi3Yx6FqXjAWNo46qiQQ19MVJvA8PkpgriykAisb",
  "key18": "5jRTCC8YpPCg2PbKpemh7T5qpSjYeL7p79vLzx4QzGbfaNDPvQjpnU5b1MTB9XhVTBc1RzbpQ1B27uuz9d3nYohv",
  "key19": "28S1VumZ2utXXjUgwxgdoKDfTXXFCBjFJ8uZ7QxQtM4eyxp8Y9LaJaEguGe9i4Xh7Bf1sv2XG68ZorPz8owJgAVi",
  "key20": "5Lm1W75ozy7RAi2oHVmg5gc4GTraxBRzFpZWWuhEMrVp8VbmkPVR9K1GmC9MveENDoHDKNzZCrny5rUpYVwa41gE",
  "key21": "2BJnd9tQD4W5uZst1MfWjUjKkbqjRwMsFgMwxwEsNNqNtrQSU1fy16d4y8D4S7FbP3icnB8Ky5o9gaBmRGtkrpWd",
  "key22": "4cv5XSVtEH4CeyfCstQLwT5hi3H9mYE68j9nPTDWNweo8wLHUujG9XcGSESY5YsVvBoFUuoREehN1JYUFwoVsvRS",
  "key23": "vHywnFKkDxfkAvGYqnsAjxLmtmgysUEjvtQWoRipncZsowgmWY3HhY5k9H6xcsRJjrkVjsakddJDJTdqjXkYqow",
  "key24": "5nbQrknqnRJDWu64sj7AiSTtQHb2VmUbrgMULQkRUzPXRtRY3r5pQx2RqBd2BomQr3T39NTqG6ESuNAaDuT3v3cN",
  "key25": "37xz4wV6qt2cMWdGi5txCkUtjEAqFpXPU946SN4oyeRdbF92895vDyeXEaaeEFgUHEbUG4Dh35KAVV8MFHzZ4nGS",
  "key26": "abzWP4GpKG766ZUkfGLNt4oQH43gXE1yD6X9dkgTZkPbXTxJzk4k8Y1TJRghLji64xXpaGNoR8gisDkBJdbW5oE",
  "key27": "5ySvwzzqabD2TQsUwvo9XSGZ4Yn7kxC86RbZcK8oVE8BJvjhmmh7sK9tLUpbnKL39ocnbQVpvUKXi7ojBznsxPmS",
  "key28": "36fReBMc2s9gUKTsoCWvZ94xciGGkXgpNBUjXe9GA5769CLc26K3pHtFeZc7EDL7BmNa3feFDxXHunrSVpVAcAEX",
  "key29": "3CHmCMtpNufSCu3FySYydF1jLsXhz2vRZioqJTKWqdTEJFTBfJu7WRT1BKtH5ZnKzWskBrg42pAT5P9NhS5GU41S",
  "key30": "5yvJuWm7KMceTKCikTH8RWBycjiqhsQJb27AbPbjA9zqnMqRnxkJKqSUZxa427wcu1CUVAQo9aAohumfE47xv8rZ",
  "key31": "TRthgJtKbQMjETtp9n57NLG2mJ9YeMaDydnPgtRWApRtJvkaDraTw85BSuupMJijGC1eddj687VsvzHCRS3D6HH",
  "key32": "XaBhQZV24AAcYeBdeZ1Hzd3QQUfNWn1CKcRbt8ScKVtX7eprZNg72HQLjbABqzvZQn6KJsL6PVZGSsKhPQw8kRR"
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
