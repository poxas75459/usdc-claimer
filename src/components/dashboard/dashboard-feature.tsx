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
    "4mRX8ERABAPXpQgqYo5rAdWWRxA4tCndnHoXLukVMGoRkprnpsRG9PkmUpCBZPw644UcvV8CpAS2EkNBuxnVGfy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ngmUBXRxZXQQzwu3ke3e9SbTq4b5h3vEuXY6fTX3E8zavq1oj78pDiuuZdk1wk1Gezxo5wB18YDGCxnDNV4zzev",
  "key1": "EF3dSfaVjxZyUBK1MZySh1n6vw32kYP7U8HCxYaZnZisQGRaztRmGhr7TdHZQEPiCsCrdmmegX4Lm9KvjoVmoEe",
  "key2": "LvcXDSSq94s8sXdGKSPhEPiqnDKsYatrt5AN3CKxRov9suuqqGpGuJk1rW5hqegFDuxAqdgTd2o2krTeMMtgAFT",
  "key3": "nvQM6XtYtCVGcjBqAcmZaUgPhc6TBKcjAHMo6uTsXRie7JbdqNTwvvSi8aeF64pKDZi1XB3eM6oFjibF79NmFNX",
  "key4": "tw799ZDdyXWo2UgEpDRq8q8tLrV1ovxHP8Mts9pqg72LvgLdExCAQQ2nkHGzayeJegFD6jsdTRkD5YtkqogsMdS",
  "key5": "2J7rEFqXmYbfCY4EQGWzLkHnd8k6DgMT3vAdwq4KU4LMnJrtYb7roEq97tFsnD57ex2zAMFUGwSMgXoACosmLGbq",
  "key6": "4DW1euxaXrjkQhnwPF7DpYTipLEvZVLVzMvADadWGKGeGcAQ8rYJnCSpfTCNToT2wWUGjXbkyG41dL7wNRrJLGDN",
  "key7": "61YGwmsvACxskNzqjsMs4gfXKFfdVfCjiFX1JCauGjxPkJvF3xPqwXGzHZLvAa6tR8MuMkbSwxc2jd7wu9V1a3p3",
  "key8": "3prqwZV1NeZF53QFGiRcC3Ctma469fAZZeoUpHyrbFeGFqcGT6LJgzRsGHbrmKyndRya9jtWrbEyPGYVTBcZnSLY",
  "key9": "2PyaVPMz7swohgKb7idDjRHQmLGchRWsWZs8ZAgp1HG5WKE1JL1r7Jk7GzKQUVZyc48x7SHgtxNygToYWzZ74sm6",
  "key10": "439G6m2vkMDCW1JPndg6WnCqw3GYwxwH6DE54oHLYRZReVEdWpmtZPExRr19rU5bCZM2mU1mkwTYwaa4Z3J3fkER",
  "key11": "2S66LZdJMiwXTFenfujQ4K4yHFUuozX9k43YSEdnyyDGSJApffkp2SfftfjQntYG9oRRh8vz9MS3Ae8VSnQbGdaP",
  "key12": "5Kukn8REC7s6GfwA2Za8Bk9bzzWEC33TaauoEcowLu5mPLwbMbfttbafeZJbW938HjUTkkGveJk9dCRxpb3dHxRh",
  "key13": "5fPxJNSVjcEv8NdLniDtFFF7P3qrU9xcnMvWTSpj3LpLpUkPrcmHEyrEvT9vaG11smtrj9WbFGXxGCmJbEDhoHos",
  "key14": "3rgxGYuCXuQVPX6nrsv3A3b3rr5ZYX4xjQwwms5HbnyfMbJaUxa45eUSDfEmtddSmCeWxAdZKbE91gxeBMvs9FAh",
  "key15": "4xQXDRstFKUXdgf6skRhJKqwCZ7KeDYT9XnNrRbG4TVnJy19CUzmTQtE94T77D9jkB47FW7emDveYAAajE6vSuSC",
  "key16": "5N7cjS1b1LCzVzowUUPkq5rh5Rz5TAS2jeSXHi7CirPRgxXhtJeErNWHdvRtq7wpnGGRhU8xudP8YZ5MfTXX5hZe",
  "key17": "3qj3tYWiBgHdCWrk5DBKWLGH2p6ZQbUirtbXFTP5b7iToQ6QMof4YRUqXSu17YQJVdNGS1fkkFfEme7WvHiyBEz2",
  "key18": "4k4kQyuBuVun6mxFrLn2K5CEs4cimLHFQNJKqnhLqc2aQidnuG9aauzn6QwTEVJgnkByj9KwLfo28LrTVjWKLqpi",
  "key19": "4z2V6yQXMn2wqV17TrT51KmKWFxD9SEjBDCxSkL1NVK3XZeuafiWw1oXfZpvgu39NV6G9P5Vzh9KJf5w2zvbPHEz",
  "key20": "51iVf1MbhQgVpno44RS3vjTqTupxr54uNVGmBvcZF1bpgrVWEqNA8bBh1HkhMfGkgALy7qzPpveFE8dkWYT8PqRd",
  "key21": "3dh5Rso5HCTkNtGxPv6BVrUDo9ZPPmBSb4Ntn2u7cZKgNaA4yovU5hAMSTAPiSt11JbmWhMJ7XD2TBt3dom3nK4U",
  "key22": "BDmuhQ7WqSRKEZdrgBgX72HxUPutfmnu5pDNfEDUfBtBfR9Wicn3EUg6ZGLoZKazUnaFFcVPqRb838rKXp9J67e",
  "key23": "4SrJzy91iuSxyFwzq4dkBakf6CDKNVwQ6Bht6Fw51m7BomtLU8gQ5wyu66ouG9tCAPxZJuFYSmRboUb5YKYbeyeM",
  "key24": "5L8MLUhivWZ96fQaeoupgi2QKsDbaDKXcJf14nETXPDMkGsxwBEyJ3TPNd7j2FPP2FonaXqWmSZRXAqtKexdYqtk",
  "key25": "3hN6QNvVNVJ2KdViMPZpe45fJgxcDggfzMxhLAsVJuhCZpkba4xJEng1VEVfYAiFKeqzU3pHQfRjKPAcpYBpbPnD",
  "key26": "4dBxLTEe4r6dAKKcKU35dCmCS6vbTyKHKANtkUWuwTJCtrqm2foWu1MHSaiLE3UT1sbHSE7ePwjrMhpYP4pTBbkj",
  "key27": "5cvjSr3VyQVpyDCYBpd4tqWiB1cRxrd7PZfsxfYtc1oL9hg5XxZie4RKggzxrbF8GqR9YrzvBYJxKzQ2GoTEtspn",
  "key28": "3oAQey2ujaqXA8qJxh21UDzPAMcTNwWGyAgBKQR9Py57E1WWxAdABWBrpc4Jn3GK2iyWvrpHeD9TGVoPSz5jy6Hz",
  "key29": "4AGzUS2kpV8ePN7F7oGxXbfSu7MbDpFmg1bbUWCzCxJNwGLFAbxG2ZjSdxqw7kXtZ93u9rghzchUeXFSyasoSGh4",
  "key30": "6RXtwgeV78EUctyNr4Ud4M1QkZX6uDH9AuJfNKjSu7vUJhW5VZkUNy2Whi3SvoNyGZn75zHYouS5t4A2ALWc4qt",
  "key31": "Ggj4vqVeNBbXhktnqAvpFCdxizeXZGgf3D43Rub8hN4RCMvKF3KMMWgcfatyUze59XMMKUNJDsUCop7JCHnoVyW",
  "key32": "4kdPDJFyUcfrBN2FbKSdD3s9Fr33A7nspoqWZLMGTerfSG2xHQJjqqW4tLwzRc4ZxSoqc7hM78ZiUz5XowVJ39xy",
  "key33": "3SZQdgCVpLuijoaFzhpmcYfeMYyJQY99WtJQL3QJLrTNvX3yCmMJPk3zsyWQ3ePaamhgoCigusMhM5Jcmup9R3bt",
  "key34": "5jPvhvNnWEVF8EvuqFVoZPJKwpZCvMswHTciHrBzLobKNXPPh7uhgKKpunYmDjb6n77vZZ67oKwwgm7A7VjbPm7Q",
  "key35": "2nQe4Nv1CFuSHzXGzhxqryQtpKNR89znbmrZy8MEAggEmLrKKTQBSpXAUWhT49SfbqHjboz3TjWEkTeBoDDfESG",
  "key36": "W8bGztVm4qADvY5xg6LAD9y3fWp1T54T6Q33PGubJyoqDwy1PLCteWdxFAd7FYPoSYVUZaQRfwe15WXEtYSGiAB",
  "key37": "3K7QvNB7d5fit94qg4Nttod3MpRL3Yt6TAE6RMR3frDNyys4kawmaSCAp1Vg3d4U4mjET7ANDqYYQWjCs8gJ9AQV",
  "key38": "4oAio8uwdC69RcHHVF3QrvkQvchLTRCzjEoDjGe6Zy8sY3ce61ygznyRBJE58Cn9caEpNKSYujsz9Z8ii9t6wVgm",
  "key39": "5ZC8c2WJcLVjSm5wh3kHnD9rtgXxJxJ6Nm1ZHF6GRq4NmComdHmhLMLJGrj72DstrcZCRuk7SuQQxgyVeC6kXNfT",
  "key40": "3Qndua3VnjYtz7vpXsZUKevkoxd7eWcbyzp7sjmBPzfXcrmRphW1KWYLve3PDUoJofFVnP7DyC2qeEjw3RHxhFFf",
  "key41": "5uTBahpmNqh1s1Jqb7yNT9CjQ7ihjmXfkZkwhLg5HLn5UJxw4Jmt9QEGioCckUQZ4QEBLwP6XKaHf5vc7YxGvGXk",
  "key42": "5ajXUWQLMCQGnqMmcXamXpsEf4e2moq9NMkpwkWFSkchyy7RryzFRAZpKAUX9wbLZaCXPEr4YYuyTVp8X49PgR4V",
  "key43": "2NtjhUvz6RCgMw8bADaiWGhq9u44vRBPgFN4SCqx4yLpMbXitMBnw1bDaTYT9L4h5VBB6QKwLsaBcZ4fHV5QLMBm",
  "key44": "HmVipU2vyjDiE61hfuzwWSmwnNasde4DYtiuxerrtKeCAzc9SgddvGR7vPsqS1nx2t4bCFS3TcHZeno2XGFLKv4",
  "key45": "5Zy2y7Q3v6yeE8tM8Ga4i3DcbMwVdLzH9PGQFzueqTug43DTVtzaZbThgqaxC3CHTsdQC7D8XDMBVXUARxnuBhAH",
  "key46": "4ZEoNHqGkgdbDaUYfGFqAypG9kTNoaXCfhmrF3KvEqdknVctWzXx3WxZoSCY67vfEQRA496XL2YTWKjposBQ9hDd"
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
