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
    "2QwsYQkYbP9aU9ZGqeq4JCKPAi7T87UYR1McncRzAvzkZTafpWJRDGkZaq3eNsLjKaFG3kNxEHLsgxm8VGXnQvFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7kSgwRxTqeoioaPoUXdFXLs1ip9UjeWQUA1qrcJMM4egPtiYDkvTwK9soddrL3kedn58Y11dvSLVeYYReAmVWm",
  "key1": "2HFgcatF1nXGP5ghBfhhq1jLDrZ6HGxtetuuEy6jAk23ibiDFPeB4m9m31EUXXzQNSEGMAUPuvHcoztR5H5dDAc4",
  "key2": "yWbr9iRNeCiTmM5WJ1cnSUE37gdPJSUxRwgnb1gBjPknrYg9WAvwwYg3zHohNhbJQZv3BSfLqr69uBYijpetxHb",
  "key3": "d83hgmPdS83iFYQxeKv3VdXwoaiKFUAHb4b1qNAzpPouGKEiTPVvP8HcdrSRGWSUrZ3oS6RHQmKFx4VBcmZCF51",
  "key4": "5CUJXSwEt69zZNpFmWisbZKyMzK3bzG5Pe2i4UisifSQehc3WWaPow1Rox1Q5ftQ46S4r5peu93onJ7kSH1BGPMo",
  "key5": "4KXSxu3zn9n8e6iNAc6xsD4pwqGz75VeLSXbQABnRbLMXSTGEyLprA6KcRBdYidMC4GLcUDC8bTh3av9VgQZDgC1",
  "key6": "4XyXR3BWN4dYnBXGTQnSM6VR2X2oruexguzwWqBfFPwXp1UWEdgZfD89fRM51nFSjkxX6jW7koWoPAWmXgfM926x",
  "key7": "34G2fpLHXMexUjMaJPpMMgCSBxVY4NApRECVEnKCaK2K1WPmCMfgn6exM5igBqG7Kd8wGc2iS7h72qUidUiKJvSG",
  "key8": "5c2L2M5tyz8CTxkWkLDL5o9Q7kqPmD8hgtobX7k5e1n4G9GGSwBzo8GMeQduxM25bLeaw9K7nbqiXBhqxzGVX3zE",
  "key9": "AYwW4rHR9X8MQbtjcrnKULoMBcGwb3h3oMxW2rTK5b5SQLfSqpVBRejs8n5F1264WmPLN8BuacMBgRE9YcdATTK",
  "key10": "3TY9XMU6SKnMtZuqH3Pd2akwdV6p7FQezct5tgzDEu8pzB5D3yoby9Fqk8NhXndP89r1ekJ46f92fnmcBRigUm2Q",
  "key11": "4UX3YuMGN7tPM1H3vxtjUiQDDNvuFEbErzWsHTG3KdeGxacPpZ9TZGa4KJzpg7G4m2UyADmVjKnmZ6ZJx8Lddo4G",
  "key12": "33dMmUQF36ZGddzWKys3THZQhUvrhed85nECBP3spqKDs26SJcGeSZtRrGkSMkSAz4LpkDSDE4pj15M1mh37ViTa",
  "key13": "4ytJ2GaTr3e3BrNtBiFBj77Yhyqj7tqyFZBAWH9zsHFR84P8U2T6cVRCLRfPLc8umjsx4sFMf1dZ6odE69KRDujt",
  "key14": "3kvPrVu2zyRyyAVdzfNKFTUGucUDUrY8mEbuaBgCShChHFSPB3eMTxPyCBoPhs2sG1V5CrunDKGjh98MYy4rTmBo",
  "key15": "3W76LbRN96KorPmDSum1wWtD6nTL646rE8czkAgV4nSw7KkUPW3PqbfJ3PWvrPgKfGBhASH3is2GzG6EQpy6Cfu",
  "key16": "LFpUbtZ1iEbuiHo4kMDRGwqR1QGMGmH7xKStSV2WnvKpFN6s7MW4BTjkL2tS8V5TRRA2P36pDJLAxHYFG1BzdNz",
  "key17": "5fN3pKJFrLWNPN7R3QaU3ybAwV2P4Qun9x5pkHr7mxdZUca6xYKb49u1pDpnFLz4rJJQNd9KDAXrSCdSabd3Jgg3",
  "key18": "4ebTmrCqwvh1Vqktt5E4CB2wXNddwuJYAsjKvdcq9tgYnPWaWGXJ879ATg5PimeFVkEnzeAhSwZuQJaa4T3G6C9b",
  "key19": "5fih88jWD88Ww4cUZaUhvz91AeYLMnergpgdEz9AJAVeBQNsUX3tkU3neQdSgNR6qkWyJWAaGphaaqJZtTbXiJqc",
  "key20": "5fXP1gYzKcsjqqLPQJpVEDhPpREaDa5wCdEgQRfZdueDj8HzVaD75CqcodhemrQoSRvXVeNNZvmrLLGvWTQDESjw",
  "key21": "28KsUrJa53J4kjyUPcXB5JKLWxGxybVoZvSVFvNQkMavKZ2HxjqZaGi7gZtGQtKCF3yjK69t9gpqx1LjwZsEtXyD",
  "key22": "42mYsQKzYoVc7GLXvsf88TYhBUcmWuLdyL92QEzEVWns5Yph8HRCaoSb4aYYJ3a9eHKmzeJGqwyBUA7Hz584R5KZ",
  "key23": "4o7GGdHfjkHoVKZLu6yDbTeimSsawukKWyeCMuf1aeuAp5hVxKukGbbXGQ4rdWNdqHDCirs9PwoFQUbJ9uwPSquS",
  "key24": "n9cQQAkUziUSVhPmfizoNEfYvpux1eZAvRyR7HGLuxqmjx3GMQdrGkHTdJgmah8E28dVspcVvvMCVnRAeKzpD1Y",
  "key25": "zHJ9kKTc8KpWKgfvEsHm6pJ6opbFNHLMTvXVdv2kkKGHPox6ojkrni7qBGsxG7UX2vzifFpR2up8E7qnu5RK5X3",
  "key26": "37UcxqY192woKuv7NUzSMKfUWZajTTu3JSvikZA1PYdYPWufaDzt7s8hY8rE741Csusb6K3UoKKH3W8YWYEDm7oR",
  "key27": "53mncaxQMZtLfVMSsmwAHNnVczj8a8XoEGCaBySypMRKh6EdB2xHgPYwwWeQLbWKzXk8AdDLwhm4Grvc96sTBxnZ",
  "key28": "5M58wsmTZAq3xQLj6s7R759M9xZwDqtxRHthtZPEERTgEH1wrcvv1PNgkiEtcsVKM48jD6Cpac1Df2JyUjBNuLqs",
  "key29": "SnkuQiG99X4EXtFzGaAKZtywNBUkykTQ8zfbwjHPzDrroe5B9kEABFf8Hf8mkXYp9qrFUQ3bSd4noa47ag33iaf",
  "key30": "5g7yfrEwM6XsfpiBVCHSqekhWfvnA9NwdRMS1J8s5tdP1sRTdBKWBHzyRocnTbvrH99DakNNix9M8rUYyCqNWbTh",
  "key31": "4L363HC5hMXf2X9tyPCXMyc1DhpgMR6Q38smATrXFREVacVfYFPH4jW9QUi6kku7sHXyoqePTaZeusMZVGbctkEt",
  "key32": "5Dm9Td7oXYSTXzDP7VccrgsRZoCpfbCjUYwNoGQoMn1TbEzVanrQ8EzFuW5fbH5tu9G7Bm3udBT9uhy4o9RWJeiv",
  "key33": "5ekRyem72rFvRtNZuzdSePV2N6mEjgZSf3WmQLwaw7viz7ZDTszvsgGVRU9WMHSjAE93TQA3zBNNMWkMFmKhNLzb",
  "key34": "3aSfXsSFC5GaJDDVg9mvAJvhKBN2iMU4qiAfULD9RVzbeQ35f3G4XD2iJHYJmt87kZKXnyuguM2Nm6B6QQ56TzFW",
  "key35": "42qqKpzmXwPbThoGocmuBomhx9G4iUZVZrkQzPjPku5SZA7b4xkL76uzuMR4WAxN9bvkBTey4vxMwJquxw3Gfmnq",
  "key36": "4HCmr2RR5QmD8CiWoFMyXb1YiEFtubgyinheimC8sxGydFZkXRogs9cEtut6HGdoARD8ssrA51VzJr1TNeiCBKa7",
  "key37": "5rzUGmPEyVQK9D72561QKRKqyv5GY3hiL6pN1Evyi9yb3QeTeufPcg8HWiPfYqsWf4zcvw4k8qP4E67mRstnerwo",
  "key38": "41Ss7wrfTRcgKACMXKWw3t7TeJeU7PRqSbkVGQzwQYewqYUa6GKthvqcRkxbbPxVsf99CvaqCbMFmpi3aSZVq1tV",
  "key39": "2GdAZWtPNcoD4TJdv85x2HCXLEzNVw7xPnMQkvYrPKAkZT2S8cFAH3kWubXrZcU7dgUfKWV2SWAyRKKoWRWyKXEm",
  "key40": "StUPeaSTCzPNm6MfZhJwf8ocjsHKaZZ2LM4yUzVtZ9sBVbuAzASdmBV7oKPhQU8tEEtXiQsL3u7MQVBt1UxsZE8",
  "key41": "KMvPNGxUp5x9avbWfRXUUDEKqfr8zSEyZdopa8UvFbiLS59KTyfxusmuUELeRMUbpbCGwqwJUY3MCJQtJGp86KL",
  "key42": "3Zz41w8HJTKCyuJipAWKU16zDUZmiZR2G4t78eEQ6xH43AjoPjzFxD7HGVMkX3A5RkPN529z595xFTkKBBW1SbKh",
  "key43": "54zk44NeAxjHDvc7fuGnHcaQH5NFTTGjMBbjpqCt7XWVa7DDYYwcRAq88NXHkifxuWjHK3SA559nQCqW1rkBSm3o",
  "key44": "eCZxkjP3jbHiNJDfPsqkyTchVqzC3XfSccoZzkp7TuLVssPokESysuupao3cAWsyjjv5xXK449pV17E9FgRaRu1",
  "key45": "3njd8kqMFWkQ77rsmg7v49Cy9z6ywnTjWNXt4iPyfkd3Hg26UVYcz78kzQrLx731rjCsJoEUpL44Jh6f91yNCc2S"
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
