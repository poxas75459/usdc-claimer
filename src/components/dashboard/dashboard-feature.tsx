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
    "2Up4Rutt6RRL1A1p9V5BTZEwsPheBs12DRVqVgx1SpFjxFiZT2eY84C48oj1yaS83PZHhM6RqsVarTxMPd6AE7e9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdjGqt9o8u93jY4LUMh9jaEcjWC2BPhdYC2NmHd4NyHrNMyfQ2aRRSD1oDzFA9WTFEQVNJ4rXACjSgHKGGnWf3V",
  "key1": "jpF7wqtxePe5wnKCwJD3CLHqmER4BULjFpyFmWw6rnnUBKE6Nde5V3T6kDYCzciRNs4bNrzChZMFYczvi8ts9sE",
  "key2": "qBn31zM3PTDKXZ3gASc4bcrqp8sxs5jMeoft2ExkZv6No3adSP8UkGPyUuuKBbGXCnnwn7BLyKDUJLzddUtXtAH",
  "key3": "5g6BnwXPtj9ViioP3sS64PWvAWGxisRw2VTJ8ME4ZMm62NNCpof4v8QM23eWiPvTVto2NYXUnhqVpwvkSGyBfdCv",
  "key4": "3mGZpAhrGSvh3jKnimATDWCa6bXXZwvhuqSvQivvgt8CEfL8j1jBbKfyYnHqqNT92LivLC12m3DNBBWnDqaBbk43",
  "key5": "4QyhZLFykkAKVfPQ5KnG2kx1VuebkUANDBKCZZoSHM3niL9fc7tBhYZCRt8N62N9S7DYe7aTrViNpB7XtHA9sfoe",
  "key6": "3cnfCPP1ZDUAAJ3JnuqEbHwxc3rJr9jvmkRMdWUAtHN86upWX8Lhi2SCYxLL4Z2CzywArokqxkcSpcieyWng4uKf",
  "key7": "2jMxJKbL7mqFumdeNbAguoU7baEpKvBvpnC4HBsEwNoqb4rFGgRe7xnWTRo8UKQLCLPCfmnHVJDht634rrTtQGLr",
  "key8": "uGHEUVoVDkLNm85mjpWrxqXtUDrWAmCwscAfvFi74uGZro1UPPQedc1VnYQptvVyiANTv1sNdPuE5pcphgeSPRK",
  "key9": "A9BmnHYgjGoUAtXp5m3emxFXBzuya9uF7zQPUuGKEFL6ws7AMuZX1bNirLuM74ToPBwoJJME45mMbyhzSjJgqaC",
  "key10": "4JKA4KTEfkUXHPkHaKus1iKEiySrvDF9R3fiAxuTJd8V58n23TyscxMmnWY6cz45677DKhwmsF3C9fauEiCqspk1",
  "key11": "5ZVsPUC1vz6cuSryzpKV8RQePSY1bnF6Knw8UHV3dX6MKJJ5KkpPdpGZ9xYKJLBDyRTy5biQ4Z5DFNCYcQY763NC",
  "key12": "3vgyG4CQXBYyrNBXxRHRTD4nFaa4T2E4UAboS6oStmn7HUKCJWeGzjgHeN4LbWNngbQ5NxTC6gC6cEEaisMjj4Wu",
  "key13": "4T3w3a6Ug7j55D58dsrSi8Bsax4WbC8RXctQonLqT4vU87xQAx4JmAozyq8yFSmVgUE1ZP4JBUMwVa3TNCFD4z5g",
  "key14": "jgEEigc8CRur5RRAJkUKVLefz2xohs6WDVsTjyyvTruDfqdFNEY9NfVWdBoiQidBbny92Mb6r56rkXwuPCkV12a",
  "key15": "2VgQZ9A49uWcvqS1LaKgmogkchqhMpaS8ZGbKBGkCmQEzWx4PT3fnX9hGwxRmXPWTaJAVvXgNHcid8S6oNcsSaWS",
  "key16": "2o2Mvwu6zG1k9PToGjXYCgtozTb9tghUkjBM7UpbmXHZo82NG7MztKQnH3b7mhuykBywRzhcPyM8qHbXMc49xCTj",
  "key17": "UJnXrJp84qX6uhB6ndmTXAHQ83DRJp2wfqw7t1gV6QHUZjnGX7NKFvAaHrtscpfNtN1ZuTwfC2HTa5eSxJxDCTZ",
  "key18": "5537d1znbxtXkRpr5PLwby6Dr3bYH8sU75ebhmwqAD946tyVNF15EUVjVefoQjRpYyrwyNMUxD6Dy8SNaZ4s8nSN",
  "key19": "3nwnkqeaBuAFN68AxVDSUSTs4fh3Q8SzG2dc8V6ievX6nFuENf1DsFBe72HXLMAE1x8fxdSRNsrPwHJw7dFFa8SQ",
  "key20": "zk63qQGSbrkj3QHLJCxEvAHviMbaM2vdrfgC6wkUGeLE7N3z8qjt8pyyuzdqyVYruBGS9k89zUJr4yErq7Gjq44",
  "key21": "5XXv3CkZY7eECuSaPFyyfAqbmRLEiitz1ssHwzzP7uyByhkGoyvFootE3JskRueehcRFLv4yneACS5dCJUhD5ZSK",
  "key22": "5CsEZzX2HuDYoXHwfSduoVBvoreche9Ps1bv8AAqhM434avy5iis8aa4Zf5s5MhrnKRhE3K8DJUGRZ1rPMMdnZ9g",
  "key23": "t8hFMpt74WSrEKKrqXvUBfcaMtf1FWW9sx9Mc2f448m2j9dk7qJ5uHztFeTxfYB11tAkrBYN5rqhLXhRrbYZMhT",
  "key24": "47Yw4hJRhH9C1L7zKMJCx6c9BTEN8ms3etR86Ws68F34VFnt3zkQZ7Pa79pNdfbwyis7X4AR4AfucWT7XoQSEeKF",
  "key25": "2spYSYxqqw7oS5VSmNHU9FZseM4wfWk1Gg6Fsr3kU8ACZ2byaqnK2KPiSZJPeR1DcEMepHXzdtM78uD3CwW75PGm",
  "key26": "YaewwG6HEiPYmj3e7dKoS1TTziFjqPgS62Lq5jGWPuoT5vwpZdYnjdr19BKfD5H4WGHTUwfVCiqLfYtc7t5BQvY",
  "key27": "49F8dSJiZrs9hjU7oGZ8wGXFsTczVoY7DsaBYJWks35X3sTMAkXJviJBLtrVGq8cXudAJbLxzyQjgjPAPhCKs3Ht",
  "key28": "45CGL9UmNzXac8oDe8b2GXHFsDVWNRytWxCmgyaV2NxLUWjurjf6t22rjtmPdBcf5HdNcP8KXMRJdVD55xHHjsSC",
  "key29": "ERh5XoaDm2CxfaQTfcbHfpttf9F6WDYByjLsbXGMgPwgComn6Xse4hLbvmimXTU1iY5BrRW5EiRdASstai63DXL",
  "key30": "Mnp1DvieXyfTrEWthK57q3ztqX1Ki9uHDsqJCBMrGWTde2Yq411LJnsPrw3ztc2AH39tRUxcsPzYsZhg15RoBgc",
  "key31": "ywyQzhEm3tmHPfcGGEydhDKLk8epMj491fn1TMuAVUGGi1tYNu7LuqdKtkufzAuyMgP1XWfwoHrHj8m38EYyPvi",
  "key32": "5HCEGMBPK9fUuRyEYHNwz8EECqHVsYxjAhcpZtGtnKbTxp8o6FTFcFKGWgotUcggJnGR4tUkLx9p4cJ87EADKrEF",
  "key33": "48tsMTsfK6CDcLPwRqFdH8wU4AH5Y7cKGbQDBkcZef8H6DhZeGKP3SrBtQJtcBy3je3BAYvAocdUfofC5CQypVx3",
  "key34": "5wWAPtikq43NbBt9VcXyT6d85Bss1sLXtjLWeGGYfkmkB6XNnrbf5fYGNkbRiE9JuhYBBoAJhjh48VLutEy3scJX",
  "key35": "2Hb8VuJCL8b24vhcRTZDeXafAXQ2CiRP73Gx4edPzzoKst9LjkGaydsj4St5CFSdzy4KVevVzuk2rbjCHsd63x66",
  "key36": "341AXibvzscS3EhVqykMyiiRqWR2pfcX2Mknfa4jA3aXFFBid93tmkAU65EDrUhozRC6Wdhh793seHAxxaUcbM2w",
  "key37": "55QCTAfRXVGZ7xh9AwAtKYJDn3e3ALpvXRVaYidHAYZESRs3LmpyWEeFGqrSKjVMQZPQkCeNqxha4ei3DtHqemCH",
  "key38": "3UYcK2D53MtSPfRYNPmrgxPRAY3DDm34NcSMMpURpxd5UFu6uq5ph9GExsPpk5KyVd8soqsCLcCkxdYrvEpjwDtD",
  "key39": "46FEDnKLuJqgDLnfHD2TL9x2HQsMTCcGpWPu4gb6NHn9PH3VW1WKjgKKS3E9BLKNP1pv4NvmCMZW5wcRMSP3ZYgq",
  "key40": "2JckwCmTA7CX54rRteZCbarTyT21D3ZCMtAk75Bbbt3XmSWHm132LdqpccWme3T815jL7CL4RqHKhKF5xpakHxjh",
  "key41": "SR7SQ9VH7JhL3XMzkFo4jn8QADLmmaRKZBcw66vnELwyRG9goKmuRamjeUfoNUVJ1dbSaxHNxU54R4LBU1JvJRt",
  "key42": "4gvH9VLdyzWdqPgTLD27fUPPnrQYYduUQBH1UDDwNseBi4GCjqtrM9ModPYMS5ATazKdfmvNELY9Du2vq2fiezHw"
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
