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
    "4i2ftky4r58eKxCPjJvd2F7hfdje6uubnNchNY8qKjxqVGCZGiaacKez9TNd91xZiMB26w8hG1DGibmD3jEHj4qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pxt8zXvdfFrQ99fNn3KNRZY1MzQfx1D6xtsGWDNBw5ejxWxtu9Qh4VRzbbRrYHGP6pDPYQsr22wr3Md3YEzuWGN",
  "key1": "4K3UaRUg8Mo1mtFnvNAjy5NoceZvLo2DvZ3KxBsq41QHZURfA55pSNXaEtu2gDLrEzQMij1VdWFo6oKGRee6J1Dc",
  "key2": "3CrSvKCq5oAMh4xuNcs9RdA4iSaAGHf3ujoPH1qLP97sziPZvDD1VAeLLB6FmycZ1cjtxhj9HsyheTBLiee3Gid8",
  "key3": "3tyCc1sHvSvFcz1CJoAmMdqAjbx4e7qqRKZ72vM8wniDxAypa5gTopiXAMNdhkp1m7MPds86svBbX3dYUKJ6B7Uj",
  "key4": "2LYVxsk86cKLNmie1fwwhAHB3n6coLGKn6ZVE5eYN7dZRwY2D8tfRWGtd4gYbZFmpEqu5y2CAAvk7bUAFaNosZ4F",
  "key5": "32PkxexYQYfjtVb4wQNWBqfofFZX8Pj1Z81Sk2qkxCzN58ydmeaT56sRpd7z62xYZMs7ysajf4ictjDPVqDXySPi",
  "key6": "5sFFGrzxUqgkLRE4yTVV4YsVCxgrkUJde8A1Q5RotFtt5ifYvEqwEMU8goCh4Jy9yzHkYBPfHLMHtD5FhLkHXFM5",
  "key7": "4GtHNzmVm8hqWauu8XLkEHj4tXDcUQoRu83Naz15zGnjtNFSJcw4KwcW7nzZ28Q2Kxu3LZpa6Hj7YN3Ht4vRhX2m",
  "key8": "2uN27sUc8DYS9wdGCdwsithsLdhBmhBbpPRhXcGxS7HnCac4B8d7RxGpPktNaeU3Fou8YVTG6pcR7EXp4MqJb7HZ",
  "key9": "4MHRhHzrLtNhEWrkKcFZUysVrZQY15NsujxpKQNqCRCoJM887uTTU5mdHrrTat3Mu7t99pkZpwYp8M5sx2tpq5Cd",
  "key10": "5s41g1V8rUWxWjUKyZTZc3eyVyEgZ1Hjcmjxb7jj7xtTB1AE28QarCJegkoLUbZbhX3Gn6DXDHzVoS7HvAfUWWfb",
  "key11": "3rHYn2KtSzug9m6R8dLr8LaH7ENGv6PC1HdZmKBdQBdZSwEkqvWy3C6AAN8HcBD4Z9YqTJwYt2Nn3fMwm7Nwovw4",
  "key12": "2i8vJcqRcrDLBSE22Qm78XvLUznxWn2BRRh7TH4LAhzapQguYxPRnWRCwTZbf9cWsWutAfm31A3kQCdVNvCHUuhJ",
  "key13": "2cwQ9j3Mog7JJLpS4cuVfdE12ub8CSarj54fseukWwAWxcfwTHXh4hdeUHPyMYpQf9ckYd2yD81hFzc5K6emHkn4",
  "key14": "5jRm661XqM5WUN9cy1T74g3VkMxZwDwq9N8Ky81vruFvn9beU6PDpZomnTLpQpEpmKLSZWJs7M5gk53rboLr9zp",
  "key15": "3DwP7CkEcDPNYh5fkWQCFzwJXCGKHV9boz8ZhJtYVtLXact9PzHdKWTfmc86ac9QNPTQFhZp8B4B5Q7recnFyFMx",
  "key16": "4YFvNLAi6FdkmKo9hvZ4FfhAsypF9z5ettVJHVbnjfPU3hDRVqYxWtJHo79k4WfRgf6PYsdqVLWGepBqnP7zyVvA",
  "key17": "2d5J1UrK2H4DHgj43CHDo9cepLYkfmZRXDsY4kE57jsNzUm9DK9tuLHNvPzDDnfCy6EFznEpNPaPNTJwXmER8tTD",
  "key18": "nziXqLjcbyhiAQsEgpfRA54HzML4B8P9GcTDT2Ks5biBvx9hBkpt8zW3hvz9TEitJHagfPhJbZVUfSpKu3A1Mvk",
  "key19": "41CVdDPj5mLjHGPbay1enRhWgFa9JDjQTGZt9FDt8wco89zsYfYe5gUnT9tibzWqeNEBMFPKxMsT5PcvEqyTqUzr",
  "key20": "2eig9CH7kjiu9ih8MaBB1xoFZpfzEQSFzijLYK1SqGMLK58gKobYJWFLZt7h8DiZXCZYdVqLj5Tpp7e3NhTtWxcE",
  "key21": "4MkJJLMTXcxHdNC8YhGNFjmBWCBtDDrypMZTA2C1hzrg7TgDFWgAfDskeC4saFEExX86g5VpAKrKHU3DiCR2jpZ",
  "key22": "669hEPyxX7uD4v6qU52k56YqNdXVDUfmPCBkq6iGYXgpR3mtv6Uxc1YUwsbNXxMLSKFTDJz46fMJB3k8Y5oRvqp",
  "key23": "5PxtVPxp4KwSBSBoDeepCJKCjDKfgzmxedUhJYSmvH6CwqoDL1inUgB1ryhFbd8ub3mXE5XL51UpaHgnAFvcpeLP",
  "key24": "5FCcrVxea6JFU6FP936ZmWSfteo666AwEZwkJ55yjYFu2feoWF3ipuQ4wQ6VPCUtsmbj7CUCjdDJ6goMxQDM7aky",
  "key25": "zd53QryamutPsG5D9pHHuaFqRBb44wHxG3NDj6rNx3xRKgPNYhAVi5taqcHoD4bUVqvfAXuC1dvhede8javsi9y",
  "key26": "5Bj8YvCWYX4Hn3fJR1Fv87cduE9BPP8p7xKZSsHH2EWD2VpsabGABq8bnYhcFSBeMfabCsyqHPheLVB9JnyoV84P",
  "key27": "3na85knXXffunkWvtQ2LNxtPPHpBEwZC3wNx91L424R1MnZBfoSeYJL2FSbDyMpNuzF12rpgWUnZ2Lb6TgZg6pbB",
  "key28": "4CMDHhdnZPKKVyAyoY4TKAXZ5j5qAGsr4C1YDTBKr5ajuvQWUbtgpNtH4scH21enfNdxGczE1sReXMp3E5HLxJfP",
  "key29": "2HPNH3Zx4hYJEFAmZPKM2pksXQedrHZ5hgcuzv2QcGYLVPWNaU1AXTkbKUduspKfMKDbo6gUet822yALoP5j3A3X",
  "key30": "2gCuQygHmQ4ZfVgaLAfTtJy6k6QnaCYsNDoqEiZP39XoU7wJYYtjVtaox5eFn785GhuJMhteaGsuSAHhErv2vE3b",
  "key31": "5ndCkVPhDhXx4SNfsht6rmtjZ67Dup1NrEoaSd3ZT62HKnRoKmtQRtqb16MNBhbxP5o1wFEFBCZc1eot9uiVRVg6",
  "key32": "5wLDEVjd3k3PYPkLw97zf4kJgL6pmYioU7qfpe99wTEwbGNRmz1Ku2KuNELDbxNVh1HCi6VSWPttptLibJZcsn2E",
  "key33": "383iiQY8dZx3E99BrtyM3ykaXtbzxbzpVSnHMhvM7fdDrSrWjoVQDg5HTonYgwtC5PJMPwsebVvpEgo4U8VW9m8R",
  "key34": "53CJS7vYQ1ur5oG71nyCjmgMfnJqKP4DqGQrvttwiwvbErAWn8RsrBAMesMXimGRg2xKV3Lz86e95aE3xzBEfW5",
  "key35": "27fMNfWRKLnNNnidbudw89t5j5pBz6MJ6d9zivoR3Ux8yHAceLDFPQ3uidhFFEpjSAcPNPhyrguTUAivfjzgHCwP",
  "key36": "2ghKskyToR6tKFo4DU9ghxArafRT4caTqAWg5KoyHNWCQ2panRoApGtMa85c4WSpmQHFabMPazSa7pWnYBgLgU7d",
  "key37": "5bXys6bAq87YAVjLfo7s8LzQgrZXZ3nNWKSSR6aF4btKbDLgQBcSwTFfv7YB98HNCNKSBDTEYUGDSEGTDJnRTK96",
  "key38": "CH7JTsJzdnT2oZPWKvPRp1RA9Ti2MsdmsvV3hCQzZDcsFWL6QPRnhQ93Y9yPC8gocH1tuA5pw2NU5NJM85b1SyW",
  "key39": "3TXRdHGYCUXuFkofgtouf8Q9K3tTdtTpwXFPE4svFR9WDFz4zxtmr2u58D6mWrr9YbbVLetHLhr78FCJ3BaFWWV9",
  "key40": "4Sjaw29C5Zb5e7UAocWW9bPPv1oNPUmWRSHFkKBUBaXH19wu9eNPtnYhvH5mAUxMcXEZWBV6cUGJb7doAXE5Yrmn",
  "key41": "4b7GP9y2UDcTFMya6ySp4gVwtum68DP5tqHo9GFsjbJDSgyNZPS643uuBghHndcGVuodQKxKyyhBTHh6BcQM5fsQ"
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
