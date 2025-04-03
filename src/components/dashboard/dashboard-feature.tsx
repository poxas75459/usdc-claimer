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
    "5W7xES6HmxF6QggP9EvzSkmUxxGWX45PXNe6eihhSYxjdfKXQng7crXEwrUrmmYNXeCPZg9JYtwWFhf4tUYYHTg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ttxFFBL8mPMSzQwxxDNEQVjvXnTo93fiwp8jkL2vhVWySJ2HeTs7oxxtceYrH5XA1HBr9Fdaq1LXzw7mN1vfWk",
  "key1": "4Xy8BYLo1JNJjg9EKyxX8CFtAgVTH5uVtUemNduNZR2fhe7JHGxWCRJtSkK2ZdtfodF4TPdpBHmzbznzedkdugXm",
  "key2": "KrWw4qCjxP2hKfwGyS3miJrT4wTTRtaYiF4NSvDg2GqHVdiMgP6ZFJpBKWFmXydd9iFbs9B4hBHRyJadY5aU7Lh",
  "key3": "2sMgnnrhcDKGurLTKg6BDBRgEcGBgNnUUL9Ujb5dtUTF1F5K4FhPG7zxxrKaDNsT3JebkmXdQvuDxBFehyTse4fM",
  "key4": "5LtmXGDp8VVXdgADnArEQK7xGizeNLTt8DhMopv587GscAWwCYVHCJuBoo3FtNH8w82DRxaiwZWjqe3VrXwwPsmp",
  "key5": "2UfsEZDRZJVngddXAUgM9igEuoeXeNDo2yY8dm1G6wxHJBkbQMWpBTbKbSavrNbDBMhLRzqAhiCuJbaqjcgY88VU",
  "key6": "3w3b9zBNYmUTjueMPUmQPfM2chGcKtBvMjCBFZYenMqBkeMWAv2mVLRaeLxsZkNpvMfq9GceiekXsAqbqSGoDACn",
  "key7": "2Fc5nxtzfDWrH6LiXKkWqnETLHsbYivMhGm12rtHTg7hLWJt4VHqGTjZax3xx8HvrGhhjt9TA9JWoYxzjhp5MrBt",
  "key8": "5xWtj8rgGQLHFmvj99cCARfwUhaxMEuW9hTXt32mg673kmrkfG4NkehEu4gXxyrsJYzZL3A3i2YSxe3n61TRpzXY",
  "key9": "5T26vWLosogD4BJAXqqdAooZAy5xUy5uzZB5mPBP5QG1qHaJMYpG3bS3gP2TMGiGMNsye3ZeMq6FpEfsRgTxr48a",
  "key10": "2W23TgDFEMHWW39mdS65WSgDL2b3ks7rQBs2LReR1zCasB6qEnVUQfdiQG11hBpekXsPS1iJPagMoLm7gVViGGA8",
  "key11": "3eJ5dLbByLdWZ13iwvr6kqRKAUi1p68grYM5d6jjxaw7peXPdGzA111apkYZJnUo1M9XJV7yHx1Ub7mG3WYM35LA",
  "key12": "Wpsuw6RVcdmqMcG2bpW4hipMVaZeRGSyCcQ8V3ygBecqEVPawxRUYPjHd4753TqVb78Bdxhh3fLW6S3s9HUmG2R",
  "key13": "42ejrpiA156egzLeeprgK8nGuVxvh9aPRMHnBGQFSyBTL9H24ShANDYLZN9n1ZGpWncfnYWfHse99QTfA2qFaAFL",
  "key14": "3E1V9M9WdXmWtKf7vWazpAbS8aN95bNua6MDG1tE2LvyHJwifrEq7yPabQkMEV1k7e8B9QvDKf1khMGfGKWsZas8",
  "key15": "DQP2oFC3bv4STvt2KcSEwiLdCi1YGHx3rSWqfCN74R5xSECUs6N1TKaLL2vxezN9aTmr5f6LGjWPRXQb4tSYJLB",
  "key16": "2ttVHY43U4vyiiqMQYZHuW3m2arVT98SWkAFzddms2qocUPj84s9CXvj5QAycAT6gze6HZLvW5nRvVK9LGTsvd8J",
  "key17": "41iSQQzZ6sYczDd3dANQMM5f5KpHcdQEQPztTwLyaBUjk7dcf8ejRkqjbCj3p8GcgKC6dzByzKd7FM4wYnocN75U",
  "key18": "Z8r7EjpGYrZVcRDb3jqqNmUJMcUq3KW4podYNwPcv4ztoKZBy6ewKhXfrgRPTGQQiNdVxkuqM6w539hX5GjY5L7",
  "key19": "5uHuPEVf7AtRDCjks51uU4o9X5846djNvavUkQTrWcKt6hsTQgHvbtjAkcX2wy5PCzvF38TcnVHSbjsdUsDDuiM4",
  "key20": "F262bG7eMCxfgtEjNySP31bZQQkQushFLDRV82yR3QQ9Ecfpwon4p8wrDo4Q432JTzm8nr3qnDwv8TEFZaGxqAh",
  "key21": "2cKwkH4wd9BAPsAUbLdvxcH4iu672tQh8HQhCD3PLc4t5xs79syb2xV4piJJgfSeg7hxXTmyJMea2iTJshk9KUX",
  "key22": "63VEx9aFXhYW25s15oCyuXzwqfihq7HD28bz2RNVeci4UgihadYeDZe1TWVjPkdzeY3aogigSZkfCP1hjFqLe1Fi",
  "key23": "3LqFDLdeSGnnUqyABMfmo2rVrzxhFMUkCUUcqnYMZsp2D8e48RHjSqRzRGwMzWd2EqjQePw1jM5UMKu7HoFqUCNp",
  "key24": "621fBwZe7Cmpz2AuNREdnP5PwtcVwjDoPS6UbdnkLqf73a14YtPMngL5FQV4RHCUHB6MxoLuUrkkNNdCYtFUG88y",
  "key25": "5DDMAbbQLRyngntbFCVuoUKoWRjTAjnkeBpqcD5MsycQQU4kLLupkzjNCk7vPEKVAhRHwf2SAzik2eyJ3tf3dsrL",
  "key26": "2B9TPEaURAGpBWDELoMfobA9nvzFNNjZL9kUDtuhGs7nU2KS7ZmYq5z4HMcsT52MDTkaVo2Rj3awHPi8XqbLTmw",
  "key27": "cUJCJi4Ft2PpQdensdYB1u5CN6apKFayUM4hnBJjaMfMSixQxiyEGzNxEj8gidC9zRGFWqMHH2YDWL22dDN3Y22",
  "key28": "444cLx2Uzfq1VvH4etrV9LLcXGzCT46KduS2zEwqQi3gPJRhgz46gi66EXYi7NPUe8ixKDopw64FhfYJhKkawHRr",
  "key29": "38aZu39EbC3dKafq6d9N9k8KhKzMV7xrDRJURevWx9SpubyDhgqfk81GhjBa1dg18qHSifkSPHdaXR82wsZE1gEK",
  "key30": "4LaxGxivgr7wQguK3bLSm4iwkoP3YpRVcC7KTNa4vokwrEVneyHupK2VSSWYCAjSZG4c3cfKLfZp7caGzju9ATec",
  "key31": "3sc8dvxmEz668EekeqaaiXsn3iPL2UyiSDtENZH3dDMbksQMXASh5zfxEkobc9Jw81TjTvJEswQyHKpnq6Fd16x1",
  "key32": "337W4LJo7fraTHEx85vRP9FatH5aw8yTHrwwfRauQLbqXhoL7iTZfeirygg9K85TCwryzLuc5BQzz9wCVkNs6LUP",
  "key33": "3mY1CjRT2XUwopqmLRzp2h4BDUdkvCFMqfBR2LFPxMTsqZiAKde7y6zxUcvp8J8S7x9QM1CwukyvgSpUDe3DXaNi",
  "key34": "2BDcjtStDhFzzWMRnYA5tPgiGgidPkjS4HexcaVTCPoSBFnqTjk8zuJkXdUpAwVcLh4CkfofTB56UYBQNUTjyfks",
  "key35": "ghvNFGnZxGujgJ4GBnCNjHBQGbjfGWd5in4xgkReRTY1Ya8Yiva1DkekWFhM3kZYnJo9YB3cYBDRx4RhYxJtq6x",
  "key36": "4sEzNZqDWN5LXQmzBKPcLhFBfpqYJo9zAGSKHBbR5hvnEyQ5VdFrSSWVRYFs3bT59QJiLzB5J6YABagoUKUs9mmE",
  "key37": "36yeKMvg6VRZ8JRPxMuwZKL32kToEfKaoBGR3uFkEtBunuLtoXbyRqzbLtxagUFimCj6CxrTjtZ23xqqUFrSUQ7q",
  "key38": "4zHMPtQWA7mHEREJmaBFnuBjXFrxvdpVaWWFdJtNeR82pNbW46iYNrZ8W8D3VcAchgfdwejYZAxAf6Swt3onNHZa",
  "key39": "4iLUJoJDo6EnNdBT7dmj4P9ipRPucvdc8pZWsEct6cxMJiGsNXYyRS5oNEis29Eg7TbYpDYyJfR9AQtiWJUYdusY"
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
