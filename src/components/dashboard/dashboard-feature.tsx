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
    "SvF63nfRDU2bL5G8sHCyfQL796UeudSLuuEHVDLogYYyrEkpwoAjFAFg7CHs5cJeLPSJsM7YrGxgsu8wJjDBQMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHZhg1UGCzWmVgdDRWk9FdyrZYa2ojgkb5ttApJU3VN4846q2dfhts6hjTZukZndjohZuAxhep1ookEZA4kRz7k",
  "key1": "4ES93w2dwgujTddqZ3EbmWKqhZN5cits5m8c1e5SfbehGCjaATiqdyaK2NxoyZyEtQXfeGxzjdCR3ytyxfrmGfyy",
  "key2": "XFudNujdYVzfCDvDRrh1RBrmRMHzJknVvzqcw3TcN9UU2FFW2SjrLkgpLMRAVZNCYwPUmX211bZqLX4gyenyVdc",
  "key3": "5B87PDfHGEzf9Qz2dGDDhQN3hmJGY7FQJDhUE1XEV1cS81kqXg4mp1VYfWXxozBaWDVET7d8DuGkYSZwScfeWi6R",
  "key4": "5D6JQ59cLT6njyLvtXBLRdydCuSYpJZm66XKpUBjZjv6PZRMPcYzf8yA5CwLxrv4i2NPHEBQ8wMYAcBZHQF9Lbds",
  "key5": "24Vozoah1Vuke5ruMMKjzAzhX99BjsVQ4zHxYCUSC7ZM42Z8KiwAR18MKpiqvCThFnF8P38oPMYyAUFcyrwWMvqK",
  "key6": "3hSqCB8pCJmjfdm75UPSwcNYjdYBn4TVQxM9hvossaaLctgkavstJLyPQEPe2icMkMqxWzqCbNshKJyFJ1G3AUFJ",
  "key7": "JhXdz53VMnhGuMeBvVyr5Wgforr8GG1HBPG5HQcdTYXGVtTmNjikc8VraXudCuYLzhn6tYDkg3KbQqccvmVLp7z",
  "key8": "P6muZgrjr3c4E9T8XgWCPHom5kz5uULkfe5a1a8PAHBu7TU2f6uf3FhwFHboAQFkvG7cJuMc5TUuwnUY3g3UhUc",
  "key9": "3NbMRFkvq5BCMcNfzHPQZUgr4pNDWipWFTZJSKaZUZ2YkHWsAuCB5YpD8ykhQX5UkaGoiSzfD9aHU8Qpc7j3skNM",
  "key10": "2HmjH3mr2yTkBULUXGeGtmbpwwHEtV7JLsRPvXnqyAPxSJje5NY7VUpmqVxDMKrfbXa3aJNwMkNrt9YXwsYdwuia",
  "key11": "2QQrwkaRW3zDYL48JqpRprgvtGFqjarhgfcMPMbBK4Gv5WUVHSgbsx3Cy8ZDGjA9HFUjiDrhd3apYvBZNGexnDGj",
  "key12": "3G1kexHsKQFQNCumxtAsK8gtkNsUezMqFSRQsnkHKyuWd6AWXFBHsjCdQePVV5N5q5URLi61rnMYmmNRsbBZXpEk",
  "key13": "cdkpBRTuxCn4rxuu8FgE8HVxmuX143V9zchUgmazEw71aKvEcQyjbUSfs8UmjT4Cc4mV3Hexntk8p83YdmP2xQh",
  "key14": "2GuXVVoM1t8zTkayCmVXNBFkbcPATKSaZpREMAA8N71EatmS2NvZFoRqcXjJ65qbcLG82wqsbDvjtTHkrTrrtYvw",
  "key15": "3JHog3dSN7Krco3LEdkxccbVECZ2mKbkRd7cXUEzNRs4eiBhbZxGWkHtmJj2XM2U5rRPx5KYsYUCNYmWmf821tLX",
  "key16": "3pLxo3VJprMenoaK3VsRVRYJxbVye2DTwC4x3i49QmPDgucm6RnyToqv2DZccMqzuxKcbvwpaNtuLYC6mQmwNxb4",
  "key17": "4gYvRjiyNKfGu2vSwcAJCn8BqeAYMsetcA2BRir4ESBASUa87usyAF5HVZ47t6SjUSxgS8M7RsJFLnDvL5WUHLjg",
  "key18": "2QqUkRh3mNuUuB3moMkyG3ic5myBNttFSGy8Jd7gcarbQSo3NX66m9eGoM6EcRpbsf7QykqeVV9hFcMaH7Eua5Hc",
  "key19": "3UCyepioM2mZfwEYv71bN7f8Lg6cZAQRELShZw2aeWEm7tD84gPfNSECwnjugaokgmjEJth7Zur95sdZVGtE8ktA",
  "key20": "48S3mEsnt5bQL4yPDjagjF7DTKe72haUbz5PDfVCCyVM86p69i6YyRz5sSBFdu86Q7amyQyfjQoGFsPuRZp4Mtjf",
  "key21": "2kzyWucTSq677kVK1L7YqH54PGkk8HADLmqiQnzXCsqRhs3tFbCQTjyFdfPP1gFhQj5KLDgCaRHE6U7awXpGvDcp",
  "key22": "SAfXzmGjGpcQM2iqV1YUAbwchTfiK9MWk3dFG1CSQdxGjzGYDKwC4WmTaMZWkJAihR4vA8SJAzXSUjA7APJGq9M",
  "key23": "3T9t7MG64XbQGXjTWFxR9p8shFM6mVFow9waQWo5LaVfQzY9oSajkDTLH89qLQvc7Su689CAaeHYZZhU8cQg7YA6",
  "key24": "fhbKQdf87cn16r8mfZZ2a5aTtQBiixEpvrNpho4YMqWbSW5WxWBpxrp9Fk1a4QPava2E2M8hzTNH2m3jt2sgoX1",
  "key25": "5rwZL3Y5DDpWYMha2nHv5f6fSS9Gr2Pr11p7HLWTBsKaKVrLJAx9VsHcs4rJKvVkTAEqjmE1YJEKfWhqYT8hU1Zy",
  "key26": "3afv1ZXkNsddZH7DLdnQTcsToiJ5917KaoPCvNqVNqkPJ1ewnka9f4ynGdAkjy954KsdRipFimdiL8QvyPuspykP",
  "key27": "4MSCet1UgKzFrYHcsKKgpDuspNFCHP4dfhFpckgNyqhv34HVUjSmLPL2nTYYrchBoXjUAULS7ut1hXNT5p6eABX2",
  "key28": "MnxVbc4K1iHiWBhfpfFURSLGZG8mRF6ib9NQiNyj8gUP67fA8VEhwE6ND75rTpD41o1KTKVirQmL3atzN9LUH38",
  "key29": "3WRTdYSpQ7tFtrzW6i5mLAUcaQMAW4yLVst1sXnGpjDqTGP2ed9G2kChfs9YQP1SGUSLYc6GiTxZar8GP78zDsbu",
  "key30": "3i6e1EgXpQZDFFJqwdBCn7WoL8fMWi1BRenPSLP1LFALtsQrxCrhXEughkouSXnteZtG8WwBRcpBCbj7qzEpV6N5",
  "key31": "DjxoxV5u7sf3DyuaY4shjX96njUSzyinkmDQK3s2VWCBnWHKAxowQAHELxdq9dGN4LkXjsQgBjdr7QJVSAxG4HS",
  "key32": "5Q8wajAwY9bztvBLY7ociBRXtPeQZR7Qcby3quESxVPCKX8cCZRhZpGkiJc8gHY2DMuWkEur3DLBnf8o1fhvVCEu",
  "key33": "EjDcXvmposXu5cnuUkgesEDnRUnwDnUaEUsjcRSjqANVV6FMyxNm1mLAVG779jzc7AjBoqtkooKUe66csnbsam5",
  "key34": "3utK9sX9xavYmsFeakyVA78dqRLE211VMeQkEN4NKMkSjhWPzzQY5UPGqD6LifzNiMoMSLtSJXDm4M9Wc7yb6xHo",
  "key35": "2EYMZXJezoHCni8iAFovztvwXoFtBJUVq5jKagns35A6xdNzshAiPeMoVPX2RsdpLXN95jnhVqufPKFXrC9CuGRG",
  "key36": "4HzJz9otfA2ydXmM1HwbBdNBVQQDqYq82XLe2ntenqh33kAbm9VkaPsGtWLRkivqQZb6axpM85TNeK7Zq1EHR1Fr",
  "key37": "4e4UTsGNVt8YdaKMxMk5ttjUoJ4tMGJSTWRQtK6XzxuihPXim9jmnFxYSv9MZ27V5WZ4YFAeFdPHxwDk7YQMM448",
  "key38": "5QkUpLtpV7w2PMxBpg5eXdXBYGfoWFd8EuAJVe1w5xaDf4ER5SoD9C6TdthN8Nj7kapgb8QY7dmceR53DgrJsufa",
  "key39": "25N4mfDTmJR4v5SUocMBYHyGudwn1GeL4js2yL7ddBCnG7vUm1Wwn2VVvQkNxQ91C5wzoiqMgJbyCv5yzuu4x2Md",
  "key40": "5jDMXbz3T6qDxhehNfXYMwzBypHYyMh9XCTmfK6VnU7Q5xvinNKjTJPL9Z6ZTwo1iwsbKxL6t3PgGzMyqDo1CnKC",
  "key41": "5nsvzmpECujUVJLSatHB5eiEMTnspnze3Fvja1U6oZmdKw1hSdrgQprdSoxq9k6mEGruwSpV1tDMnnSsesLWfcT8",
  "key42": "4kFn3RpKuMaWr6dSBB2mc5cb2guv7iT7H3DV7vNcMY8nEFxTadtwDxrTPeHjDLXb2W9FPGXNKiPepwspu7yrCj4e",
  "key43": "2FCyLKinMaVoBJy8qQ5LCnQAonYLpiCgcy14PmAePQHNDrWezq3gi1oxqjjVphf3FkAmaEdhj5vxaptcPgadziqo",
  "key44": "3bo6rqpsevhVbt39nzzWwzGB1vZH3tyWeLvTFwREURQtucVK6LkueYB3xcmaf7UmC6dvGSs2nKwPEHwpfoPVTqLj",
  "key45": "XN2xpcT7hsEXDmnq8WHBoFEEyYuFQZ6Kk2gTSRHTdMCpPFThws3Wgae2FGHzETmSWxbjEYN16hdG9EiFLLuz98c",
  "key46": "5smemJnS8gHe3RicNo9SpoR9vRJtY6W17xL4VnhwTC7frYxQXwWWAmd5VDBo3VrNUp7TDjKP2o9fVxsF82xMajZZ",
  "key47": "32kWYDZg3pbFacgkyorf88dgYk4oRjMXcM16QutnnyTkayLWDv5CmuQ9NpAxNVwnBtXmwPaRoKSC8xdfTDdJBKRH"
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
