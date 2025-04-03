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
    "MveRyXHJ16VspNMhhDRWHUD9hLuqHu55G7ARhEgzSfWVsLRkCM4KD3KWvk7qCQ4R9yRWFkgsRga2gEhLtKU8tD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52m6uJxbJXyfbXFhVu53ybuPjKay32kmJCNH1fVuuFeLjiUE6iCULtY3VLyey6FHrVXPiZ4edFiWP8v9V2Q22egc",
  "key1": "tqEvTu5RN3VGJTxE2hPhHU8vRbVmEsWCwhkNBor88rkM7EW6724gRg3i2y3WHzMoycC2JNexe3KPr9UU1u2UNtp",
  "key2": "gtTVVM8XuzgkoyzHJXQCkzXtKBtL5G5eEGEbwtwkSeoNKRos3z5hjKan1VCRQMTSw1fsbrZ1kLLCbw1BN2RZVq6",
  "key3": "3ENAG3m3VwSf3CCZCxDdmwNh1AR7vezXdxzXRjyt1Wp5X2ryFCjeBUhozYyT7kV2V9rsM9sZAySZWLSjqtaEwQZz",
  "key4": "2chqJNJVvg9TGacZgGQxjqyWB3LPzYLPZioghXDeiBnKXxYRtaiYfZPMk7vmrP1kua4UTQM3bYWUyDrVTTMoSMr9",
  "key5": "4WXWyCQAtaKvTKH8nM82nCVw3G4sbFDGhiC9WyL9TmfAdddcH9pkQMqUpCDVjnaLQtTenRLFATCk7YaTgDHd3UQi",
  "key6": "549oNkzbvPanoTdRH636vXbts6bXhwtwNQEW3omcznftkV11ygXy96NasTxugccPt4RkeEH59EjAVDZwH4na7hBH",
  "key7": "4zVx2Ts4i2UANHnsk4vspsf5zi9Kpb2qYn1bqqJw8RHz5HH6x86NumRDdv26AKQE6DSBXZuQDez1UUBeje9a7F9s",
  "key8": "3NJvL74KyVpRMEmYDoqK9rAtq4kMsdS7Q7MtBshXGi2sLsJVNuLacx6aPpjL8K9ayYY3pjXmhFPp1Hf2wBTjGakr",
  "key9": "2ZNXfQpQz5SSpUSW82eKv4jokyQ8bNsqUWiiVpuMgpAivAUFs2nJsWGXmQGWq7KshbaqpG217zQkqd7Sst8iaJyb",
  "key10": "5BaWKWN6p9jH6YBroSCkisYhbFBAHRvXbXYYQKhcqRjV6syNwUE4cFBgF1c7PGrcLuoFu7k5S478jKs55jDbeMeW",
  "key11": "y6GZwcaUWy4GRa2mcUyHKVDAQSb6CCJwmsYd2zczTisXCteMtjZ2z3ixhVBcD7RZLKV5ex7LkfRWj4EQyBnTCPR",
  "key12": "1s5hssKMmvmpwpaNDa4hge1FrW4ufzfNSmHqfrzijVdmCyNb5pv2ASyvKMsWJBvCM9F1grh4q6pLpbnfyMRjfpR",
  "key13": "3UfYz8tHxFrpp4GYEakp16CxCUfBgMt7nZX66chLifuy8EqWk4c2tCS8DmvnhCUsGPgqQyW6j3ReXo2uzNBMLkDp",
  "key14": "32VL7Y7neQAexCeGHs1vBsrrYSwDFQFvxJ7LLHL6Np2HmBAmwf1rEKtXLqUvBQkJoJF1YW51DmeuvMXtZyfRQrGD",
  "key15": "3ffGsF22QLEexEh9ZkvR4eGUryohrz7SMM57QDRG6HQhLmNcjgDFjo9HNG1Psw6DhNqguVsACebCWF8rXxBmtxQk",
  "key16": "4Y5648XfWSQrJVagPVdmZ9YNMuKV4XinFZ3ZARv9JwKF9b5wgWqytEPZzb6Mdw1ed1tJ1XqLatDMgz5LAEg1RGWX",
  "key17": "4tbjhLgTv9oCVvwfBNGN2eH3mRkVhHoQdEc5EQmVW2qZkgrz9JLf86x7bRPmJNdMmCXsrqcaCPVt2YwULKQw2cXw",
  "key18": "2e8WdCtFZj2vf53hFmJD2t8Zajh3ffERAFKHF9EA3arE45REPAta4nU7deC4cm55EFRZ1joQfcQsZotF7M4JpgqE",
  "key19": "5Kv2MpeqNUpnmiLdhteXpwhV33EhJ1b5cF1QARg2sZhnN1XkYoaCgtWkCEYu7YXDxJHR3N5QQVpZNirECbJD4Vju",
  "key20": "4SXig3AjSXmQcFPo3M7GPuzBrtdNQMp4ege5c5HagWidiyTGqKy6qZsYCp5uxtso4AEe8sBrDV2ef5vWdXCuedM7",
  "key21": "7AYEkaRGdBwgwsbFC4gSndhc6QfQDCNw2esxD8DxwBaR9oVAnJKjQJYXiZUqzg2UjCRieY46a2JWCCYRgjG9U2w",
  "key22": "4KCr5Cq18XnNZGmV6J4c7UWnrQuH2bkStDnun4yVcQaJ85buMBpyo1h5t6pk1bnQkXij4tAdsrVkZBaq9y2qShLG",
  "key23": "KL3BJqdrK8xaNH7yteHC7vAKpFho4YdHUw97NjsCQ9j6ckBzmheYBAn6LVwggJRTRcB4m6S6eU89ecEdD9AGz2w",
  "key24": "4zFn3jPeDM5m6btBVsdGMvr6CZhBG2tYsE5PyPzLXkuyBw6Wwf8gkBqJVAuEQKjzLFs66vXS3SQb9MfMKNM7L6fv",
  "key25": "43mfLeNSJYpVCQMYnbk7pyg9kt6U1ExsKWbFegFBEEzf7Hx92j1SFT5edm62Qf7Jn3VekdetAb5CoyCa1PP3xMrq",
  "key26": "2y9GU2wZ5DkjbnBbtd8QeL6iZ86JDosgJFdSu8FyPhq4cHQAXrvubHqKi3YjaR6dQ4HucSDdejoh2eECymcnLVnK",
  "key27": "2Q3APQstvdMsaL4v5yuuuhshtAw6ocVcBVTwym6GUuyKKvzKt9zCUY3Rss6UfLRm2Wah4r67C1358Vv9c4CevVzE",
  "key28": "4yunEDMtK4PxHXmA2c1m4xye8bLNZHZosMxSr3nik6dzkPpZtGwZXgZi4oHMn7UhZgJnJ66579s3ZJoqAYfoKb2f",
  "key29": "5MENDZKzvYvH6jxmuUxy78rrZW28apqvXzyHddDnWYsdFUmnWkFYSQUXvmDTSiLKDn986PwxmK9RxFm17J1jKENa",
  "key30": "5sbzZ9u3keXxXiRz5KXu6bhEMgM7qNbTMBcDyyqVJM771MXZJk5jgbaKThaKhyjj4XoGPyVLn1nLXXrd6jPtEHGD",
  "key31": "61cowuLzW6jf6k3DCNMcdqF1vAGoMLHo5J1Hzp9GZJeTirLLfdMtdT7zygc5xKFbpor1ENQ316nokUFAsJe6uBDN",
  "key32": "3J18MLTFT19L7Fz4pKKTj1djVEhqQykzkaS5qr4fFEak4oT1m69tairw8sbA1XegMaN8ZNgAckTF7851m2yrAeZT",
  "key33": "2Duy5eZj4kEReKwWjaKHaMpURT2KZ936Lfe9p9WSuyZCBRy8u4CrgGaBtDTi11um95Pz4qQaPq4KdJ7y32zVBejr"
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
