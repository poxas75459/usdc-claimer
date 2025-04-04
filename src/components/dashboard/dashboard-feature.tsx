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
    "65poy52ztzSkrPUeMsWHY5ZUHQZQwrzfNafNfihCBqAaMTfMJFe8kmffHkeSZzrA2Rhbmw5w1WuP7XtjZMEHxaVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woC6WV3SRHEsHeQ538Vp3cbKJgnZhXDMEgwn258xQgTFQkcXmgHpdvip9B9oe668jLzCNAAy8mFhznLvz4JsFNs",
  "key1": "2oYZkhWqfDYbiKqKuqHq7f8S3uCrBq3RpRhmP8tdJBFjp16AbZvfo4jRSVKB2FmJYCBmMABGWiN6Mbr2oLB3bSCT",
  "key2": "2u564PXbGken84NernqrQ1iWWy4ocjFhEsRiNAciY5reaipQ2czjQej8fgW6o3nb1u68JvTrPkDtVekuM1ku8znx",
  "key3": "2GgeNwoggVtHNpBv77rFqnJEzCRj3BUrnFAFK7Tb2s4spz84F9AazxZ6g9g2VHWfodkBdRihEcx4ekinisGxJvuo",
  "key4": "2DjvK7Z6dBwXEapeaP9yvX47A9ve4EPsnE1b8DGrpRCsyWNKmwJbZRb1j3G8e1ruZptsQgPs47TsP2haHPNyo7mk",
  "key5": "4ywDQid9hEt99wZAHPGKixMwyfJjVateXnYA3n7h5wb5m2RLXVp6X2KDf8g3e7PNLPDjtjaw9kMwRwB9pmdYNZte",
  "key6": "4dS9cGVfDHRoJ38eDqV58vJmA97UWAZtGcj8SCjtX8JHpRkkB38pmzhYYzGPELiZSbXUiRYrtoV2cMM4ErVfjjxp",
  "key7": "3ZM7t1JZRXVjaM66YbgA3MygT7yfuy5sHxNtNhcDAsRH3mXAr5Dbt3K9ZB8vv3bJAVSL3xxvHzK6nNTnqD89LtBR",
  "key8": "mxermzEkJWn3uryqN2SBA8vrggWCPnT5smM8pTKAEx7b45DutYtjiCCdUwh2JHTwTNkNG1YHXw2X3W158WLjpiB",
  "key9": "3dpZ9eHNqLvnptVkDD4ceCirT3SizEhrFLt1D2pugsrjBEgeZiN8yeCCsDdt8J6ryDzSebkV5r4M2nvNcTjmKZgP",
  "key10": "3Nw5HASFNssEY4faynB66GS46q44DAXki6Z1CBU2fyoY1UQQHombk1CNktQdvhSykGwsfKU3ECae7karK3HgTCvy",
  "key11": "2TpJcpWXRf7D8jGVSU5zSqYZtmWsTwMtt28FEFibRjLQxkCuFjoLMecY3dP3vk2nqYZmhBFFEDgcg4KmSevyvBGr",
  "key12": "3sMqor1sdpq2BMqEmUUNPRhB7ck66QJGVhXYXrHUv33Ke9PsSjVEz1Lt6Qb1QhPQiarpW81tv8ip6DnN5QwEc2vQ",
  "key13": "2x64iu3RtD212NdD8HBxhJYVoErhFNK5rJJPjBgq2a13TM2ptNRGr1TJCYeoNpwHM3sQ2biTXLyRuBMv83x551nt",
  "key14": "2RvA73fDrRUBNHLM9h8fPqjcQe8twxkUYDWqUEjfLdfvb6uv72QP4CXdBNmiwdC41uiwxctNykdYXw9jdg3A82Ht",
  "key15": "5NZtue6AhwJmgS4N2pRXvrApywk2eibWbicqx1tAk7xEHhkMwFNbqdG8687a8QXtmAexEQY47SQr6tUDNGhQfPTR",
  "key16": "5Keimz3ARcHASgRfjEfPbeuVMPs5bKapvgF3mbW6FvueWCgqrY6ig1cmFm3kZKGVEBEQHsKjs7cpLbaroXMXkZPb",
  "key17": "yoijQtqeYVjxqchMnRTPexoPzi9b5fAMMmLsBPBSVrfdFqKMivR98UDEyfZFxSMSLCmAWoedRWmQyRogPe4oeFU",
  "key18": "HxiWxxHYaBA4inaw57Zer296sKnd5p842FTrdc99WLZtLJWXxWgjDp5MpBhdZLUUjkZJzWDDDmzhwzgcikyPxA1",
  "key19": "7Ct9m1D6rcxhHPg4qdnWK9CSfA7jiZFwtVGDFuKwrBeiPVZwrFaXaUepsu8VzKGLkZYtEM9ATAeU3kJutyMN8sN",
  "key20": "5BhDmpDMjJkXEbB4uArkN5cBVbKfsKBhCV4KzBAKBpZMNfNdTz8Xtd7oTo6kuTCLtKJyZzQ2PH2t8PwvQUNb67py",
  "key21": "2tZRs45ixMN1TB3sYPb54vBCj7ZDtVgP7uFuhkcsMSiLXhHJQ6NkeqKMX9bAK8R9ecotSoaEbWYkWYfbS2fJufak",
  "key22": "5pJhDbTNzUTHHPscSMNhrkBDCNDMhiBP8tnpfoy1BzaVFifFhtzJjUftmfMgeUjBwJZyQ83HdoTLR6DxwJPpsSCi",
  "key23": "FNpu7Me8ZGCYGS7KHo1MphjD4XTwiExspr7PYPS8dLsHpGGXgnmkh9SLyBmRtncHRZqVXotRWHvcGqETMNyBWVU",
  "key24": "22mkv5DpkMPh58K1bfjaXrS6gjvb7G1Hry6j2J7vdrPcPB2SK2vBFscYK64gbC1ZyNJUyWJfBcrs5Vv41JiJ88zh",
  "key25": "2xcgweL53frSw5oZ6NQXtTzRWXyNUorRqUFLHEikTUtwW6xEen79reAmzkHW6gZbz7t8u5Xb9ABnZXxsgcS9aBcL",
  "key26": "3GwYJjuzr3KvmJ923BXsVRm8v1wqQzTcdzw4cwDK8Nv6iKzxNCr8Y1BVAX8Y5csN4jiyvKKaAE26WqokZXZbaWq3",
  "key27": "5W3Z1odhvW35Jkv5N2EJeeT8zBvGAYfe7TQMf78izP42fnmRbqRx5dXjfjJBhTpaCe4sryYFJynM34NADfPpox67",
  "key28": "45aJRgptVCim5SpenMFL3Rjh87XpXJH6XjC4y89PLd2BVr5duAFDBoirhGqqAe77u7qLeuw7EpfFzSVrewvMJtjY",
  "key29": "4QYJRcaqT9rtxBJ9YRggriMYmCUmxnPtLneZ35svMSR2a63Fuz5nCF9Tn6WK1BZ6qJE6B2XY53n5Azd9Dfxd6NoG",
  "key30": "ZZMg3PHs3pFyK1xocLNGBGfx4N5U1shoQBN45tqBRYwWRofs1dsFGmYL89CN5RqApASb8gTkZfWJpAsrULPoyQC",
  "key31": "DS8ciTYcETJBvt46gPQKLxC21FoUmaTeennEmYmShi6Rc4zdciqCzba2vmMKdEMVa1zGmcAU5HCNXdN1kBcs5Lr",
  "key32": "36Zydk72dSW3ouzgiMomnj5aiEV8ZPGeFCSknmkdgXNKAuXTjhmEpCp4wbJCufwDrytwgNGNuVkGwRq4DXcGT99R",
  "key33": "3Ung6L9NGamGrdPtkv7SF1ExxovBuVXnL8WdPcahJ3fayieRsXMpUh187hNkzaTnTGgG5Yiv59GmyM64BTMGtqRw",
  "key34": "3HxRaJxFq4LGPbiMNyfynj35KGyEUWXE1HYkA2hHNZyNP1K1J7XnPGMgoH2DBidGaeRqgmxpV3ZHJz6sGyi38Ew2",
  "key35": "5eEkpGBeQwvnTf4DrDb9EAxjCtAiGQYKmB1BQSBNAXAk38cDntzSx22o6M6ebXHhVJW5sdQUpx677KzAeC4mEHXr",
  "key36": "2PAC7eTgrMZsWifdamxgyCht8DVssar98bQHhwstRamoqhYiQ1x1ehFzxk55XYQRrz2285VDjzM4W4UzBjxknwYz",
  "key37": "9Kjh3BmgLMBo865SDNecujDHEqCeR1h6BEuVvET4xdh1pUihgjcmx3i37xCPFwHADT2wiq8V2b22Li5rhtLfsb2",
  "key38": "5oGGSh2uckU6dC93XM4qeW8JnPNyr5FVkvd8dA2BREzY68paR7La1yiXg89M5PtmbYwwY4mz7YJ9SJnQHZQKASHx",
  "key39": "2CLZoN776REbpnWoSvGt6npSLrDjV3is4L5un1asthfR1kP59dHoZNHiko5NYDJ8KY3PLY257dskHVkY4qto5zVX",
  "key40": "5YoVDsjDYGEeGDWQQGRxhHk1gAeLtnseUCSeHkQ9AczisL9Q1Ta1u4f7c4UhtAZXPjXkcMtCkHRYdiBykVQgoGuE",
  "key41": "489WHqkP7Wkc8bZMPMK8NF7pj8Cz3mQES3dSs5831C9NZMKZ2MpGr5EPG9ENLecRyC2BncKxTMmyKAx4QSFHJ7Dt",
  "key42": "2F3nQgcDaJRegzzjVe5ngr3j6RZGFB6vJd71rmsQMPdUKZpD1nW63tx4mB2sB9fQqouhqPcCmvtVgPoM9ChARtc9",
  "key43": "DUmSBLBp6oVNuxhokAJVxBnWgvGbcxjyJvJgPMRCWt41RL71fSNheyFR3Admr565HjMUg3FJ4yGfgdXyymzoAv6",
  "key44": "3d1PrPR6A9221owVGpwFAgf6am1pwSPeCtWWL76HPdRo5SDhsAJLg6Wad5faWFqjhnDhPxjCXvqofp5eH5KAni9M",
  "key45": "343FUP3TY9SUWzkuNDVaixXSzXGJpQVnJdNVxVvwB8C8tBbAKhegDesM52uwuFY6XQPKeENSvThBk2NTWppm5PWi",
  "key46": "cH8tLebkFAcrieaWS2GqmWSBhCXmgjsDJ3sZzhadQrAYNJR6imusX3nNPTArT6xqZJYhDowEkgHWtjxRzQvkCo4",
  "key47": "2eNTt7TpPt9YhEX2HtKtKJUvjgPZ4FnD2nmjMnZzvPiWva6jzG8xdxg7i3EVAAFcsPK1jdTdLDAbjnZaujcN1ukm"
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
