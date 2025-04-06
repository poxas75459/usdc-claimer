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
    "4jzD95NrggduVp8t8wkxDQjvsZhrBJJt2csnA6SYiQPSgH6os7FRrbNT5y8Uh3Nn4AbCWRTc6z2SqMbN3z4p9JJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7dH3BpaBZxJxdfkbD38TTKoiotQsp1ptpFy92cZ1gZpXRzLqLHehUSpqdeSnhQSvZBvwxtAcyq28sntaW1UzkRg",
  "key1": "ikZQBBFN7kQS6WUPFPkhDP33F1hdPEsH2G3QifD1KE76BCjYurUuc42jc1PjBdb1A3JjEkYgPNboiaRdB5vGbDu",
  "key2": "3XWp2xZHY6Qihr3XV7PSpWoReVtQEEE6D9og2ZFcSR68rK5ebFAJ38DTtxJ9PfPm7ubdzwaQQPrw8Q2DcGCAMKuN",
  "key3": "5RKL42UV1oboAQ95QH8DVp1d2nZKYcMPLL1ifH4m1p5o3Doih18JLSvWy6W9brNH2goLC7vb9ME4PR3AoCyktUhQ",
  "key4": "5A5FbGiYqip91ggQ5NYKomyZBXYpSMJXpYUonUnD79DzjUAexvngP7SJRXudbT9vE7NQ6Ro2xmAMWRvRdR6pze6H",
  "key5": "36ek6heQXfXF25gxhQbVkibVksfxNhRTwZJb2iWAvD7fjD197RCRcqz2g1ZUWKT2ZRXLMdz94xhHE7odS6o42e2e",
  "key6": "4xK872mfstYVk1c3sRrGBRK6U3orCMRE9ZLf4Gp4qKhNLC7A3MWkiWxqdVQbCE8U27coJZzAM7HWFyttEzLMumn2",
  "key7": "3dGFXh5eXSZFEyR4fGyLW7RUQ8qbKB1xo4bJifwReQfRTQgKea7PJDMFx1pS4VZrJtqqcpbLrJGZZzK2uK4piN56",
  "key8": "5yZRtvCzeK1RScm2E3EqjE5ZJHPwdwoBpkmz9NvsBzao4jBQVv4XzPdz4DVbUjdGQTTSPjgmiav2LcJAUtGjoLve",
  "key9": "35mdC5mibS1xkVm4Xf8qTT1C7KU8R9hsagJGCeu837UGmdaLHCM7ciCS5vx6rMtyam3cpWt4rYXtMd3W5NdgCyb7",
  "key10": "5xRUvvWLBuk5EvuLD4JieC2ztxSN5TPfH8XqyC8FSBnyoAc6gQCppB5RqB1nPQdkxXy72VnkWSyTwB46pNuRjQnG",
  "key11": "4juWy8rrHP6ZosqWoqzLEgtMmZuQQLMBWb1tLDshynLVPDmq9pE1JpWSBqQWQ7DJxT74MsyonavyS9NdGR2Hu4DT",
  "key12": "2JWzDWaYwHtE8YLZX2p5vpFMfnSiywfo5NitaB6K3PqzjwrZMB8ZJFu5kkZnYP22PhxVrBx1H65d1TsrJvNRc6ZG",
  "key13": "4ETdhoAanBR5f2eKZceNvTUaUCJHgtNuMaenCCnhnU6rfAjsmuhRVohXSLCCq1stQDq3RW1wqcRwDqK1wvR6yZ3e",
  "key14": "4vADuimJ4HK2DJ9TtWmF9NHvE6nLfTubp6p8ikYrcmuADquSteQDe7pRxzg8ccp8Hhi4a2nGqn7dNtyXPAWW24b1",
  "key15": "eHsFWn4YNovhnaNPjrteWNuyokAe6zRcUMRAqzgwPG83aYCF8gA6wwh2Pm92VsaVHuaiUoLcL1gcQbRNeKwoGHA",
  "key16": "4mdCm12JV9n6T8mDz5EdtCX6qedwEiCBVwHjHiSddmMMBbkT5NtCBETeVTWAX5eYAcDryuLwQocpUdtz7i2uaWWk",
  "key17": "3Xp1pTRojFR5SJKbAHGjvazPXNZVWj8wChHWWg25UZgTXdPieVFnPkcwND3gi4UdTMRa6p5HQS2zkWK3SD29i2cE",
  "key18": "4kGfU8wBAe5LnJc3Q2Z2neG4zTQTZ3ijfwAazJ4SFM3gq8JSi1QHbKXr5xsFgPVPiSt8oFDhPQwVwGMKQ85CFnCr",
  "key19": "62M2b6RC1xfEJfDc1RTdDNY9XUZKeYPEgJ9yo4w3zH6azoRjMJ5HJ82vWq1kRchy3JrXZFkJKS7v2wGAuKv9dAFA",
  "key20": "5eZDKivUpX13qfW8jjKdnzvaFrxvrePXpWY7xJB7NQZ6zr8dWr1UR4fH6B9NCe1YZwUABL7EDQxHcnvxhpFwhvNK",
  "key21": "3c8U5zRLurFvN1xBcfMoxZiEWBdn7RYA6YwoWYGq5bwtDfSNMkfwJ4YewKgFshHMwGmHY9hTnf6Kc5JGJTrYpXP9",
  "key22": "39XREXSg11BnNAth2XCnWoZpy7Diuvq1qnz7R2JEWqRZomNxi18iqReZaWNX2cFwGDBWvtSyuZvgECHsLLyPdJhz",
  "key23": "4fVeXjmGZf9RKVSNRPYZqHBzyRBA544NLef1Pfw1JNVmdxcj7dRFJs5a3ZQp6NkmFxSofcMFPghgo6ZPjqexFQ14",
  "key24": "5qYdzWatagocpdjJ7RM5MCdmyM2nuth5jkbEBe9cpCJjJuDRumriP8cXqycwyG6EPherEJf2HyzRjLpth2LqEkJ6",
  "key25": "3LrkU3Wf3tnF6FfKxeke8AQxnBnhE9WcYwbSjGJc4WXpGpHX1vYCCJWmoxVTsWWsrrRKGMqG7ZPBJQ8ZKUUTyQR6",
  "key26": "3dqmqYwug86dXyR7uSdQTMZKbCyr6xCPjtfqBmq2XozA2KCjFSypCttJGXUnrePf4xUasfoiz6qkfqQ7muBFSmeJ",
  "key27": "3adMVCv36REHW3aJMmG5vWJKU58fqieD6QYStYaKJhE7pTu4WsziGWHTCewUuE9jtZ3DJyNafC6oEeCK81uahoow",
  "key28": "5JQKnEQRa4xb2xbRK9br1TsWo2QR9v1Mo3UdyXpkPv4vrk5EBdPpWGKk89NHhzpnDynBQ8kXPxXkARTmfVMiZXqj",
  "key29": "3Q85x4XbyKbyKGSrtLddJNrJpLpo97SFf63SYaCXbcamUkxY9HtdKcNxNL9RV2Tw1PguoteFh95iEdjgGY83HxB5",
  "key30": "334hUzpCy879MVfAY2icHuussBj6eqD1faoHNhZa7vAJ5Arnort5gkAKMXXKH38864jjEUtBQZ7J18PQs3n3jWn4",
  "key31": "7rd3TNPLjNhhUhAKvrKCxmk3uYVGRoDKc36xiTpYqQSTVLjAcQL4RX2XicoHmg4X6nzyKAXazYvcgB1z68zgAyL",
  "key32": "2Tq2HcJVUe8Sq1FBL7RW5NrpW4sYqfcsVxDZXHNavonuTrZauB2ZRJQ7aDBr7SrnfFXScgg4MGwv5Y1Z8XauLjJ",
  "key33": "32ZwW7aNW64LNw4LJAUwC9LhYDMn72sCtQnd7orBHweUgSW2TSgnK2RgUv3TwjYgSoKBKwBEM45XFktzWYENNvg7",
  "key34": "hheypCze8HHsfyfbYTJ12fjwbhFJLUZjmPLwZkG63usktuRkxCBzRb33bBaa8cf9WDZZrag1JbLKzVz1u5eLH6s",
  "key35": "tWP98g3tSrj6YyVLbuf6E9pW9QmFGjjh5XmBUCi11rEFnpVePCsmLMcMBDk3c9QsiXwb215B91hYDLikxcSdyEH",
  "key36": "snMbxiJvf6HvyShShk78k3ryqsTBdPHKWFsNULgSyryVNbwbFAVGKxSYf77PkZ1844HxPqxzE3oVR4WkRHB9Vd8",
  "key37": "3mgTgtBkFEWXZFkgesoJCj1MeTEZgc3KFZNcAhoDZVX1GGCVYbeEsnGT67TtSYy83AtNpcVzoPFZHhX3WThRMkoH",
  "key38": "4Agv19P5U9yTapL42ZULvqCFqT9TVXFVynLzSwHFK6YixeuLN7c2NtdpsYPEVNtr1rS1xPzd4VVuJEFdRdgvfNks",
  "key39": "3j3nRM7vB7b4eA5p5KhKGsgv3T2jb2p7jyZ2A4kjrAuhNEFUDcXCu8kLje2tYGpBBBjGs6DGG652wwEmptVL4tpi",
  "key40": "98Zce9JbteYcCNdPjDdsVMHgTEKQLE5Ybjto6AJ18NH9jb3ctSvJKGBPPtB69t7eieFv3bJ8n4vhvQTETV5jZib",
  "key41": "3UvivyFL1YcAZyFBszAkp38ewAHBFHBG5SjvV7GCaBYfSJGACiaeFQkU7kiWguvpE9pt31ge3MmwYJeyo4HJeFgn",
  "key42": "2JnRKT5m6rfKumbQeQM2ktHEZFax43Wi2PXXJwjn4MDtsaKe6dKZuPPz6fecP7KV3uu6e4BEr4NA89FhKvZqV6CH",
  "key43": "3cjTbRfgZLDNHUvmvm6GHXKCu5dZQf1rM4zoRBLz1W7PSobb4Fg9vmMTn4DcJjzDbLfF3BeQW5vxNxTBZ8u44EwF"
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
