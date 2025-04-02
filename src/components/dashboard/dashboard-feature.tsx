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
    "5dqNAc2sP253RMbUnGqtjmWKMfHospduEC1Ymgig7NS4MLENdZEgxjgtM9WzmCL93s1fBngigLZ7X5DYhPYrJn7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34i8GYjFXKmexZAeZPRY5R3xmDiC7JgA5ZMoocSP1Pw8NikxycNsTKkKfMPtmCgeNuPX6vMwaTURjNLX4ha5iZhZ",
  "key1": "5FfMnZgcyNtFvoST84NcgwYkWEcPBHuYGCeejwsNZgpNijeH12LhPYrkQYUU3KL3bAp4McFGD19Wd6Vb6yyR3Ca6",
  "key2": "BxjhHX6rQDokEojw5TXCA1Njx8XMtNeyZNGt47Kp3ZjZ1EFZLLMei1EBQYU19BiM7AY5mxbBc63iZdCnjmBAaef",
  "key3": "4b8bATEKrvFi6NzHWueYHbEGRazkLrCrtsoXh8DVmdjCdYo9hBMFA6JLnFQnypi3wavu9xpiBLMrLXaqRbigTru9",
  "key4": "2WTMxq1y4LRx3NrEsV68jZ4AcDcbahcnjipuqXeNF8TwiKvMDX2S4GyLYJiH1HeiQov6XQBZyccigbJ7JvZEMpkp",
  "key5": "3sFDXHbkF2Jje4wGbo4TbCoVoYkBsutYopmhqsmheqHjBzWvRA9XzCSm1hLs3q5Z8aRhGttqjmVeWZYRqJJTLuUP",
  "key6": "4tZP1EyNn2qGpPLN2AzxwMCQFajuZZjQasxKzVA2GjSWZBkccQqh9Ld6mr7KyAouaWphXy7Zr8MrsnEU4t5Kwgdn",
  "key7": "3udqPDMsyFJwsK5EDQNoetgyrXMv2LN1aYAWtx6LJENQSXPj1eb1S6sCKNDmpajcPp6ADvEPtLhK9DzouL9gRKgP",
  "key8": "2JC2FefBop65ErUGorxeXbGj29XgBzM1RAU7eLvXUXzBfn533xVRuaD4ghnPET4JiKogrE9DToRVaN24vZtAbVu",
  "key9": "4QsvsFxNiRTUoa5kLfRmFnpRsC9qoWtUSjMXYg5h3kzuoY23ovyGFEjhHqNZocxfs9s5QA313iSjLaT6fiQNo249",
  "key10": "3XCXrxWKbgCvRVhw5mrxpHZEWWjCcZ2dzez8G2m6m27Hano48uLwevcHRVNWfyBhw8WdyxdBJLSkbH6y7NCixd4H",
  "key11": "uTAmiY9QCm6RkFTAARVo36fqvyhu9d1q1C46tJ7PkZjuAS7PLf46aVe2423qTuHa3ueweJXXFyEZJrYrP91GvRu",
  "key12": "3RZNJM1V45AxAfb7ACMhW6HQJ8iwPnMkKFdau42p5NMxZiNC5zdsDzEWjVkYDWz8C44RGipJY9V3hwconcUbgCr8",
  "key13": "22rczmDxoCmyNnM4HKBBtwKG241BUNk8PBkuXgT5VEu4ydFjmcmF832w5tZL1ZK8nyrymZpfXrvKAq9yiBYb9s63",
  "key14": "5FsWmCfDPL6ug5ZLRYkVjS2532SkcvCUkDUA7RsufyaBso4a9XCcjFfdqFR2TxA99NYWsas7BMvCyUTBuhm7qqLW",
  "key15": "4XEsukWBzGN8XPVaARAyJJBWE2MZ46Y53M3oJnKpULyQQnSoWRTFwtpKdUxhaQ1q2kVg2jW3M8yEE59ESNKoPPT4",
  "key16": "3HB681mydi5Wg1tkneaVz5EzZi5NoELs64LbsV72hrEajxreYHZ3TFkQ7DeDHGo9zNSX61FNDNj5d5BBtvJK4w1m",
  "key17": "2pueMjJyVM4XK2sEacLjcNSrSBZAWBpRVT2UyV4unSuLuPRcoddHrcYw8BWLjmF5nx2qz7Q67kBPrrARTyEjo7ao",
  "key18": "5UxtUaEhG3MVQtYeU93bV99KHoPj5hBR1HBSK199JEE1AWNTg25XtifAHUYoYs512zj1wjapmUTEEDToB3EJ4dck",
  "key19": "rALmzisARHWcmwoz9CK1MxdEcBwJ5MZNDvKuKXSgEhM4Gh7N2TCdNdnSQVWKVNtL8Pqh1pkaCbeRd5MEw7yD11y",
  "key20": "T9nVMeFMrajtQEkufv8kQFtcB9Yd6k4Dgg1BAuZRueRJHzfVeNkhCgw9Rkfym6Ppf2EFnoGGK5crKqswiN9tkHb",
  "key21": "2vuS9G3DjqNbc1VXRM518KefVRNPGzk84xZUpmgJ4yxW57nHxGwg3DFttykkRQyMpwfAnKbPYY1RUvVBsiTneUHg",
  "key22": "2gTEXz3R3RC5XLc9e52S2CEJcXutaxpecr3oK3wnfToJHRYFohDiia54ZhcwenvtadyKfeNBDE4iDTV8Hj3b35TL",
  "key23": "5sWGWbyansxZLXwgSmXADunhxTZw6qjg355acwrCk8VzXqVNHNmxMrjY7dtmgkGEtU5so9vHVxmDR1RevMHVmrex",
  "key24": "12WoYFp7HLsV4gFEcnQytpLTxiZAE7oZjkc4GjmhM9uuduPEpYVphts9EdzsoJAauW7htUDe5q4ZX71Gm9VexS6",
  "key25": "3L8BLLz6LhUxzyjH8foChVR9xrLcWKScQDmNbnT7doCztidYpvbUPm2Vv7mzSGHni9fNqNxBvZ7xhGAUk9BQZXsX",
  "key26": "2xREvXSjcBDkEBXR3XecdYKsX4QLW3DV6jQA1jojijWjQYBuE8aJgG9DqKAoPbVU9gEAPHAjWDctwKQiuNr6v8M8",
  "key27": "3M2NKoqpcHUnGYicPvPf8UKk3VUGcANjRGagJLfw53edxJ23dsAHZnWmxYabbKkjqXez1CUWpdJa9mgmeLT5fUZw",
  "key28": "5MW4prZ2UNtnDDb8Z7NzyVW7EorqZWWN644ZcwsipEGZ8YkaL4GTFWHnZYFrTsqrtz76U9Ka1agR2oYa4jhyNpdV",
  "key29": "5GKjN4B4Rt7UP2ZEqvsBMjodk1BDGr8uR2zG7H66ouN49wj7jexkqsHENJfHNTG7oq5eSWJRWRHqgriQnhqgtp6f",
  "key30": "3tESDigCZAoFo7zLJU3LPmbEPvrqc7weLDEy7EZtNohK5MNcL5EBU3tR5EVjEfRZViGUcJhLCf1v4ZrYZoXjG25K",
  "key31": "4LLgUYyNDsyPGqFiSWGE258VohuyNdurn3MQebEgjkbTcfyM7NHaufYfQKkJMhrRpJTxzBBwm36GzTpbNkjSreJC",
  "key32": "AC1PKVheX9t5GVQT3NGCSYiLGvuUgQbAkCGWg3fxJbevhMRuBUK7wHLFWp9o8SfnVvTynCbL9Txvr6Trv6Z8swL",
  "key33": "33sez9QSp9vR2VP6E9LNPGmabDeAkL27v8zijX12TBz8KjCDzf2jLHnbStp1WxaecwYk4qLskp4FDDJhENKM1FnU",
  "key34": "5UEKG3hnXCguam6H5PAiGC2RSFhaNx3XUTYLMqDfFJEHiTtocsmrtX4a6zNWfFXH9K9z7WKgyNma3ppXGEFxb7uz",
  "key35": "YHL8gGcJPPN3UmXTq5bUeaB8YSkZ9uEpJ13v546fXp6DorMxNLvzJR9CNsPiXfMRyCU7sXBBcyTohD6tZ9iy1sJ",
  "key36": "3f147X2CZKaXfTvMjuFCmvyqPbebZZkrB75P4TKdwsMP6D2tFjY4HFNu2CSP1bWFYLfsZRUt81ZX5Qi6uxMKVHPF",
  "key37": "4PSADCKdFzF9JrS1CbyV2H2CeNqQkZTd5EUpzKft4eqMs2ZRQ62ehega7SwEfBCdiK7DY1PAif1YZK9pQPfoRZz5",
  "key38": "K75YriFcAkd79sidgRytXhoQyvmG2DW7dN2pRyVKx4TuRSsUaeLETXiqBZKUKFfP6aXmigP7qv4366XSS9U6vWb",
  "key39": "5bFUsYoqFYywiJKkHEENiXgnzUwbJyC3iTURSaW1CkwFWR8gx6XhoJTgt88bX91g6xnsppM5HenApkpUWDLC1sgp",
  "key40": "3TQ4byhWhinh3cCsYzoweVd2r4sZoD3Bvr6goW6GFBgZbdxMqpKqHPXDCZfQo1oPwuNFKkb7Qgx717ckSrn8PAQ2",
  "key41": "5ZHM1n4fuCPRq15G2scgMHVDwj5MWBse2RAHikM7BVkHExTQ6Kp8LtK5p2gPRHvhuf7zaB1eRqHiCBF3Hjrm23QN",
  "key42": "5gTjeVufkgg4kLPtKsZVVURbmFAJ4hkMcn6CRt8XVmMZWJHhNcYfwzpPVS2J7WZauLyhUMp3J7SjA8xESxXPS4XY",
  "key43": "414meq2KdVNRtc3WTBAcFsURjq4FKLsdccdcWisd9mB9AzMnz2iS4jLeBY3R2fs3X4kL4XvZzHB1qPcFabGmnBqo",
  "key44": "4vbbuBdCJYAvNJfv1LqUodYziit94SEkvyZWoaWup3kg1qTgocr4yhaHSTXjtWX7ZoiMLPHVQkfdqjnYPbx28VXR",
  "key45": "5EqRgQ34UBJZS66ntUEmViPNoYpTUGL993NUWHder8RPwMnj9VxycjdwoLHWGCQ4y5pzyNj1oV1CxcxciSPbajHg",
  "key46": "4EUS1cJvmxcU2WpyQTZsYTyxtpi6S9StxSNDehNnYReqWTzLfuxseLGCo4wQYeXyDu8m4QsQjH9iLUvYfWqtvvou",
  "key47": "2t2D35MTZ4MyLhGBv4e3CuUiqwTLkgSDKdNe4tQcaUDtf49jLCS9LrHUVR495UzmiMco2AzZWTvpBeuLWkKx4WNn",
  "key48": "3SfrbxLcJRyJ93KiQAUjvxbjRksbtWPJkthJRE9LXCpVWLL5E4tui4UQFZMir7D1eujq2eYXK42tAxmssCPiziWf",
  "key49": "2Tk1TpK1rSWcRqn1sAtehWobcGqyacxY8Jt1rrbdmUzaabigdFumVevQUmkU6P68LTJqpAe5oF9pZP92AckEii95"
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
