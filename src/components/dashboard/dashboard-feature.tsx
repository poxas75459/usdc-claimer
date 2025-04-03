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
    "58SDtFsQ6H3PMvaFieHPamDqLVF2De34zRZhbsFAoXqMiDz9rZeuoGTbcpZ8jD7i64srFqpWG9csaFFazrzBq1Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lt73SyFtsF8kidmJaXU4tR9E7pQFnCNjkwdFyDtRy6tCFB44UGnDgfZFzrFxPp6NcJ6i3t9TH1yrUUvWNouyG8x",
  "key1": "5Tnkwo83WCg9XaPAsQ4fn6idVVfNDphJCPeKqWeMLAcyhQfAXy5nQ3VZRP2jYfw6fV7CCWiWyoV5CPDGSceNY4Ha",
  "key2": "2TmB6JzmkD84NTTWWywCFxP2Jr2an53etqbQ7P4cuaqxx7jczmt7xKV2rPin87B2DneJxb6m8yqHtwvDVSXzVYiW",
  "key3": "3QRk4RA8ovNKLQH2fvF3ZWuwvG8Ygv9JNfHQUfFupTPbeXahv6d59Xr44r2b8HCj6ZWB1pPAaMbx1YeoYMEpvWHr",
  "key4": "62R2WEVFrYkPdLgPFCEe6nZJGD1kKs1SVTkgMWPg61GmVUsVQ7vUtk8Uht3HZwPKgnCZuTDrra2Kz1FfmMJvBt6z",
  "key5": "4QwiDPhhv7LTTMbsjmXx7Tb8vWG4tHYTbJ1FfSKtNcR7c9pLDQrpjf61LDWKtPv93fc2tqVPvJkcRboPwCMYEdiW",
  "key6": "Nr8SoWX91sYttccXP7CJkXKXMmyy4Cjub8MjCjpyfdjV3P6BSKnxRkp8asGoRFrzgLcBkHLenJcm5EZ17RzHvcW",
  "key7": "43gSPb78SxCy1UNpDGLmnyq9VfZZCCHvah6ARtDwBGyQ256PCwWAFSBTeeggvZaroBSHM3sgJePm2DMSxvswtvTb",
  "key8": "32uE8ceN8fDcXJgE9HwiBgXcAG8n1k3DhN4KcEY32GR4uNqQQe9KidttyboTqoSgNfxUUBapJtmTCHUcDpjpkstY",
  "key9": "4T8kjsc4DFgDWHmQ9GcGR3BLsajuVc9s5WMUAFNdqHtnukQNcN7YCM8D2w5VupnR2amhWYvBx1fpQwztfmwpueeo",
  "key10": "5x5EvB2X71VBuz7uwsrMbHShVxrvfbiRdrmLNXXtDeBnH6Sk4bfFTNDe5zY98Ghjzy8dDXZ7gttJYHoNqwBngscM",
  "key11": "55Yitiuknmgvs62APnTaPrFebgiiZb7wYM828wMuobXfsbpdUXZRp7b67P4RyUN3i1fRJDekH4PVa1QjS2ZMZoAo",
  "key12": "5ERf6yn7J7FS8Nq3NPejcKAPKYVyTxwXXDNsddTj36LPysD4NgeeoNDxFxzbjdhhe7kEkyXeRaekwx5ztv8C3Uxd",
  "key13": "5eK6m2qFXLbLLAXCejc1zuUWfmENzXALCNjzW34ezRj2H73rXBWqiHmyQunrxFRqPwG1fMTfP7HxCsMgV2dVCTPS",
  "key14": "fJT7mbQhh3GAyQWKmvd6pKpp44kRyeBaaNyG9EsJKjao92MM7t7NVpscSsqev1AymVmMGB8tb4NC7TddEjKttrb",
  "key15": "2h65cgwMcTmjkqrXDsEstitDQDnfYdakdDLaZctStgRSiQqudftN6pecrKNX1HFTes4tvd9fboPbM7WYk5mX21sZ",
  "key16": "vYDQ3pJQMducCp33XKdYVGrmtiVgb3qAeoMyGgJL1JSd8nV6uZhDUC27t2mV1XqoC9XcfSbHtut41UPz4jfCXBo",
  "key17": "u9Fg3SsFUaDgQS3c9iyzspJdJDDrUHRcp74Sky9Hsxxmafww63rK89qdmim93F5ZRPo3VerfEtUAhKEZNki73ix",
  "key18": "3aEximxCN6g32SZiCcBEJCX6FT4MrPUYi2Djg88jRLXhNTwAqHTfJMSbdiA4hxeHrc4MFEYpiHviuGr4GpFWkWEw",
  "key19": "5CwDWEnh8hjTJLSFTS1SQxcqfwyHWDAtahqiK4TEyerTvMYitRn4VmtgmViKdPVJbckJFP8Yuu5yudT2ARmx3BWJ",
  "key20": "45hrHdkHogefgDiLr5ddhTaDbCT9CAHhiQdBp5A2TXBDXkkLU5rJupnphEY9ipAJ4DK8apnvipzPQcWLo1oDBWcr",
  "key21": "2XoBzoUaf9GNDZkfqLmynUvFM4UbRMuEvWrbSkG2ccYDpZnrv6tyiXH9hzcrscmqiWroF8Brb4RifCFwmTK8CwN3",
  "key22": "sjwDnbdpX7BxXqaUBgnDADHmkWNAgoMimD1Qf8vEQXxyc2eYi3RqRAMuWxmvvZKZWHUvKbJWApt9PUi233n2FoL",
  "key23": "2hobvADoxDobsFULTDghUWKdHWrpxFrnehpfF7pbDW9K5racoSJ8whT8d65qoG8YpweiSkPGjU4xgvfaNiZhAoKy",
  "key24": "5XvQFY96vH9Ls1ykiJuzAZLCPrTB1PLGDK5Zeot35WBsyen5ocEgfNiVPVJRasP4dJhdqWFMT2R4XAXbrtTdY8jY",
  "key25": "2bsE1od9VCKJ4DeRdCxvbBikdgvdo15X3b78EWe8DBG4ZFRhJKBe3etBkmJFnNrg9ET9Ho7LSJoa6rGWoCHNun2Q",
  "key26": "4VmAxWSrF7V4bwvLzgv1enEypqhQzvhgkSUYfDTZCMSR1pA7f3VFpiRCnnKVdLL3CKU6HEEKpqHBSYv2Mhi4AdjV",
  "key27": "5DLhZEQFWJ7EULw7gfYx221hZhn1268GcDx6Fcam4EV5iBcgadwggkTTz16KRqsppiTHvg3rnWFRm8PeS7FoC8D",
  "key28": "618pCfcdEW8mrQfuaRmPsma1mdkjRp2obxwRsRXc6J9ajZ1JfoFy93f2ZLCpxYfKNe7EeDHjPMM8Wr1rUELK9ACU",
  "key29": "3zKv8gKDhKcusc3ox7VWTLTxRbBHtWJpYDisMwDT3trKFmrzaF26BfCZDi1rq9DdWM6CEKnkwePah2cLZjo7wTFQ",
  "key30": "61Cz91QZDX4abqbJkzE7qthjPcNWptHhE4ZDb5u2b2R5bad35WesbYUaUbSoMkoQ5dNYEm8VEfsAxRU4LS57XvGJ",
  "key31": "5Bd7NqSC667Z7e97igPj8ycF9jsjQkWx9bBXoYZsssp8j8zGNRjf38q2NAdH6DABUVRqvnMAyjhecfZSKydcUXxU",
  "key32": "2drPDp37APt5QskhfH7wmj3wHBf2j5kfZmwmrKZsNbbEpfpNh5C1aeqYqMMLXxLx4UxcEE7A6fBiaHgpVAVsyLnn",
  "key33": "2tN1bAGefTNQQufudjpYnGKGgwBJ4ywzy5KdbL1i8rrZUhbDzVVyo7X8YiLVt1NGnmNiZnBCtjQQrEpgNpVsA3Tk",
  "key34": "5Sefh7uaMQhiVitssx8DVCy5LhbQ6Zg6L6ufQNccZXQQ6yFzgECWEmPVCqfb6BECeoJqMtHGJXctPjs9TiktAkJ",
  "key35": "8VcxDVKFUd1rHY1dMgeWfmc6znsEe2j8R4QGNRJ36r2xGyQbvbRMLVkX5kiooTKngWCsdQVftQqJQDQAdGAPx7Y",
  "key36": "56uqqDr22u1SEbuSst94NZ5vnKRwTNPfznzgTEzceEnWvWPsTapMaHzV2yum5dfkXUxp5FyR6YNYM54SsqbdxeX4",
  "key37": "2GXzg7ewD8FQxaqqb74cy9Rr91Daf96CcC7y8kPcPMG6pYbPok7gnKzDXnM9ToFsvfrJig2Zh8t96nyyStA5pA4F"
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
