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
    "5Jz1jjVaHQesAeMkRiY2Wok9bZhffz5WNorLn7VuPPKQ6Wxe7W5c9Z2rU1JQeNNL9tFu3J3E7Sqnirf5gz98hqkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyhZm4BRwBi4BXKeGPdsdkzGW4BGja8pyD779YzfuNeQQM99uYDKk5RoYJboPYr2S6KsnmVxv38S4SJ8VGzkufc",
  "key1": "44c8d28XudLN76L1CMPT4NTqk6WiRtBtqdvV6FLK9V2c1QrnSSXbFFfSRqxdUTRPUo9TBwPke7kFE3KejrNqxxir",
  "key2": "4dejU6W234SPCQH6fght9TxdEnjAY2Pn48Mmd5Pgvrm4mvGTYHXQ3mcNnyZ2bn34b9MB9cexUSkGiSGYmgFERLav",
  "key3": "2mmi4HRMRqZxc48XWJ1GziSmxnASDnJsSnnS3p93k2cmUa1oZCJafbv5LXjMH6As1ER2yGg8QjwNoGyNWYBDmZbD",
  "key4": "59L61wWD4Z4wes3Xcij8oTLaqRgVo1MPPgXt7v5k49WJswYjV8ogkzdQxTJ5X9MR11ZaqjgxJQJkqcxyodTmMw5i",
  "key5": "9C2NR4BJBnJirS7sarUnRWCygS3CWyPM5TBn9UUSjHEe7yJ3PbENsEojC7UJYFBv8zcpoK3MgQAKaC6F3u9pdSV",
  "key6": "4gSTdtqMqAQjNexHqMt4QdevwR94AUtBXjfLg2tZLMmzKJdcyPxbyy9W4E8q9MQartWpLYuAUYZQRLB7hb73r3s1",
  "key7": "3CmJq4eXR9DrPsbRaEX7xLdGcGnUoWGGvgJEUar9NAGNuBcjS9WXGudfkia3hBeCG2fMjNM2vDvhNSJ1uzjkW1uz",
  "key8": "4hhC3j2XW7A51C19Q3eUxgKuiAJ46PsvTBhdtYdD5PzcBvVTamsA6rwjXbnYycm8pdLXSpkmc59vr8dpogCGDaoY",
  "key9": "3CWRF5eVKrSAbUw9JUXkoJKtgThzhQhoAoxToakuLdsuEyaGLDGc37CUohzZ8AgKCe3maPvYjCMhcj2RgNgHtFAw",
  "key10": "3Di5LjCFCg9NF8raMmuhSfQ8Mi4LHr5akevNVycYeNKaPC4rzNwNzTjQ9F2ctKqYwJ6UgVCEe73pr6FxCGLsmQb9",
  "key11": "4JfyHb22xXv64FRJ6vu7kTzF8BfvSmDbfVKhn46qR4ABPqmZHrsHF9PZTUFcpcm63MmaG3ZTN5BYfshF3jXquQmu",
  "key12": "3o5fkJjjGWMWNRZ8eQMf85Scbf6MXytR3DAgaNsZG4CedTooTp5kp2nCBSmEb9UuKjpJE6kvK3hsoTtDVKfqA5RX",
  "key13": "58BejXuM543vgcVR89GC97CCbENjR56pGtqaevigPJcTUC7FRwY4f9okCMfdggsfAUyK9jyDhBM7QZiFhMijzq73",
  "key14": "2PzAEF1dasdafdBhB7EmLeujxVNuhctB8NaZq7rZawnhUHFxgBQEymjXMop5JZgdyjn8tw1k4gLxawxgBcCenDr5",
  "key15": "5aJXR47GUZSFT7NbqiZKCGymjHqUwVorFzs1AHEkhziqq6Tz2DadUxZvWL1xkNtY9N5n2CQ5athWdKZkJ4qNoZeY",
  "key16": "4XNU3wgFQh83ZBcBHfHiUGP4soq4NDDtFAoXsUd6Ar8bVkdsCmaughoDogCYCjsuJWdmXEnsGZffnHVQfxT8CHoN",
  "key17": "4SdHoQBhkSHfAVMRMNazDuirBcysgop4XwJ5MiEuyYp8uqSCqjw9cdjvvHqJv4LisdZ32bGHTGUwpm3MvgbwpUxg",
  "key18": "2hNc8gMMfWUhoMQ1Xt3Q4as69qynunBLjF591sSDv4ngBCW9ExoWhC4dxj8vy3KefGxde93JS6Va65QeZ23CANQL",
  "key19": "3U12WxZyLiqi9nyzVLAcbXV357n7aSEpomKVTTXDQU52jywW9JRBSpVvevqofF4sZvBA1TDT9D8eA2fQnW4xyjgD",
  "key20": "3ongg8dUyFgYkSffEetq5TE5KkWdxdECQJVmZJ9VD6g2qdVTitKBari4bKSD3dWn6SthzyntDC2NiuCNNGHzeXeh",
  "key21": "5wkbmRZttSn2Y7mbrLr8bQibHPSFWTBiEBJuEghV7CGDoCz2MfyCbTe8N4pD2QSyCod2aTiWbuYAdF9rWzL6WhZu",
  "key22": "2VkSgs588Ve1kRNjEAFrmxpAZDgFzmxdyQFqecZHieqy4oNUgQQ7srczfXYi73M9bbsxBovBoUFWNLLaM5Uzjd88",
  "key23": "6DB8tBmTVbd4RCAmPB5fkU2HhjVdAQ17ApYFPTuqGKBVBawXRpgjtiEUrTjY3cBbJAH73e8DfXFLTJCYmV3nYG8",
  "key24": "14wfkA1zsR7KmHUMipdtGNUDr3bVKAwTqwuCp9xY5igjrAni4pFg5v3Z24ecoRNrQZqAr7c6JHjbnsuosqW5Ta6",
  "key25": "3vDhouXn25JTDQJ32FoXXFhofPzjvzTCVdKdUfXH2yzuHvZqn3biPvYmVEiWuhby8625XbAMPMae9jmJnVGhBFNr",
  "key26": "2HxxRxzegeC1VVLNGGa99C6hGw1BM98SEnQmqsD91h8cERgKyVfkhmYBNHrkrSuGviKZXnPdjr22h7c55MsiASTD",
  "key27": "58vB8kEQarewMZ1UowvvoEQZUddv3xCE5sjsuH8Yi7xLrmSakX4rCmYF6BMZs3y7EgGMkdMzg37jSNEx8WWR4Wpe",
  "key28": "3etGzjX18jBaRkVqc3wsTuMP5gc8ao1Wc99GwnaY7X75xQKrMAak7xwW3xqDPTwv9AYMKmyLJG2RdodQ4ikrQeoF",
  "key29": "44CvhCyyfr7vzPsoTLXEv77BHQgXvf5usfC6UKHWbqHPKLUrkGfrGkEFdjFvhwf35iC48KeRf8193LQPQYPwYNt9",
  "key30": "KJyn2F3g1qtEaqk9369Pxs9ymuh8JbjXej5rNrXMjt662zityeP1BBro9Qz55BqhUxMiE95ae42WNn1fxEAtQqW",
  "key31": "5UTLToApfQJR2PwTSQqJyQNWjaoaYJC3ukdyQaH87ioB1hxVTrkJQazHei6Hu1WSwCGw8LbyzuwrnsbPPr12vukR",
  "key32": "21313MrUfTjAkimQTYjeMTcQccmPKavjnCNES78XcU389S261sHejJBboeGQr4V27bJ9Qrsjvbo61zkZF17wW1b3",
  "key33": "3DracZfLAENCrLJvvYEgMaXqbfPwP68yG1jWrpr7GapnWNsHTWN2wiMZnXZYwyFrcW8nAEAGH27CBQrVTafwqe4h",
  "key34": "5S3WvfNMURAAvvFp9HV8LZ3U1DgBPio3eXYfyzc9kwv2FeZqGhGAYp25bQShPCKJtHwGYKZWyFV7rPNKPYKYh7ot",
  "key35": "qrqsEcskdidPZPNQDKgCvvdbdNm7FdyXNmfk9FPE5t9UWdaigA6JW7ghUQWV3gWVpMCHbrF48PmCtPXL97CpdFK",
  "key36": "4kV4BVJfhy7sKi8qwBL2HjZvZ94pVfCDgkaXjG7uGUTZwWx6FsWeBRbc7kZR64iJhHUC1pEaoNxXygr6CJFRUUCk",
  "key37": "2UVDjgR2FnCENX55fxSDQJxNCLuiFbpaAEoY4UMa82rQ8u5sDrQFm7eJSpPwSTwARRAoyJHfvjS4Ak1bC1Mxids",
  "key38": "52nV55dfBzhfkuBKQWnYKrqoVyg3cKs5kaEoHPPYV3kHseRs5yCSsnoPq3UGECCbQS2dLEoi5RgqrZP8s5EykhrJ",
  "key39": "3MioyPJeg7MYBzWwtmcfvLZkFc62wkChDtJ9fjfc5xbLHwWDjUpF8uZZD698UYqEwWoVrsnpL9cJrXhzXhM4mArx",
  "key40": "4LQEj2xBK3EVeWW7uULfedGCvTvNTQbbXsyebLKCxMg2Qw3BoJmWRtv1YfJrMDFAP1J4A88uhjBoN7y1pGQZSJ2F",
  "key41": "2pH9AbjHp4CW33cuXN1Bjbkv8Mj5TuiNxZ7maHVYyCR3ULWzvBVJdgQjrxaHPtKwW95vF5nqde269g3G8E7PKFW4",
  "key42": "3MtiTvTmdcVCGRkGjCtKkEkLMmhtCV5eNodKDwgRAREbE67RBKQit2fP4znMboRpQwZDhgHgbFd4NyCzLuhuhkKm",
  "key43": "34rKE6oGMMAyCFod77qE4R4A3V4vXRZ52MSuEShwq676YZyBzmNmVvW6ngyHyZhP4URt17viLHZWr2eB2jM3t8DQ",
  "key44": "3ipXbHa4pczcLWkWJZJPfW7HQ1NaCqfL2Uw8EWm7uUsUmhNzrtRLdaNZYoEivRc853G2iFv74tRHVsrbfCkPcBCr",
  "key45": "3pL5zgcrvdGsdEZE9F2GJAV7Ev4NGAnymJY9qVtWW4mt5UZjXF97PpDcPzDfj3NgXZ3isBmyYec4AMgwTYFDiXMi",
  "key46": "2p5py62XcgRGgncHPB27ENUmbVy59pQvtxACwRxGshuUxoGNUmG4nBgARMY2iGrPRmu6rVFYctNEpMDhdVvkZrTA",
  "key47": "EAjxvGxV1FBQ7NoBUomDCrDVQuYteNWGsVdP222W6gJCLa7gvohWCNizzRAJJab9c3osnZYWBp9Y8cCr4DsaUT7",
  "key48": "2Co7fxnRKYywghLvmGKkEpaHEiU5NkdbWZZPGydh56vusV2TBkqfmN45u1iiYeBLn4hnqh7X331EswCSS26wAazE",
  "key49": "bCKXF1oeJDmwV4TsfnhfZXrdgXA83BzQxmm9G8eaejEhzjD5oR5wyfUmuh6NTa8UQkKASNS7tY2zgWvc55sjd22"
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
