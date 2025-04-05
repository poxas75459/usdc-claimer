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
    "3B6XBYLsXnoLz7LpFVfq1nYiUMxQpsYiwS48FtNgLTiud5wfEmBpuEzPa5wsYM4nk3tcNBGpiMdJstkEVj573XFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GntSC1RrW1ovb6vTi9n1Kzq8RHGiQpXuocQWXruzHMvAKgNvM9PeXFiP9Lbzp2MHkgNqHbboBCr92vmeEt59JBy",
  "key1": "3sap1rNiuE3ptPmKvUd5DfugtD3khKRA5F1u7DVE4KhuTkc4EdZveyFW2iRpcfAQaBTRb1kgmtdk74zqovS8LQf9",
  "key2": "53wCxvbC2NKCx2NVkr2uERnVe2iLwDqB2vtx9PJjxR2adAX2E9g3eEqZogPgVAQCMECceA916mzLLdZr4XA4tzs6",
  "key3": "3SwqmCKfU8xwoVnBt2FVoEBni5wosmjYVjpiUMhvF3qe8Bs2ZqdBrtwLKHtbUXPbiywB9HFYjc32HeD7nrdaCet6",
  "key4": "5QimhwjuoXsWaJT3KEh9zR5xoMDdu4S6PuiT33qYnR3bayUpdVNgGJ7WbTM1aVja2SawRtqd4rVdJCFS7pZkxBBq",
  "key5": "3wkXCVpRKg7tpHBKTtKk79eZiyvSTGov4dhkcFPnNHdsxc2v9qM7YFMKmdVsxowojyqk293u1yQ3XXBV4pdPTGnM",
  "key6": "3sJnNJzGTZ9HKzKJpgLBoA3mrwAXTHcZEaQNArNZy56UMctR6XwaicSQisUuJApvMpvJpoAWAmtzaxH4S9SDFEvd",
  "key7": "64VgR2vmLidxgwQGNEoD3SfuTXUwzv1s86WhzDqTZA4toPEZiEwJojV2kZdufNT9myEyBdqsRmENcc8FwXF6imLf",
  "key8": "2Qv8qT7Mh2iqR7pY5hiVP9wW7GGfjZtZLJTaddaZwGBU5EfRFnmXEi96MqfxmngmxcuEqEhRDLusLyEGGZGyhYKy",
  "key9": "8sbGx2CTQ55WKJnoeYozmXaKmd46LfcqwATuaRqNzWzLP6BvJZ7UFx4p3Lp71sLptDCFFwcWUkU5mqQ9GDjY1GV",
  "key10": "32Nbym9BGeNR5ot1UFMJgfxhrAwXD4mj1eoM1nfKNzTGCvdM61mAug9zsbGS46q3MxUtHdyQw5C9Exy94f8B1PZo",
  "key11": "X4zasL8Loc66MMydXcmhrPDPdpQQEs7MsVkYE4ZkQcfHJtJvpLabiAZ7khoEecD73pvYs4Gcbn32oVCWAtGq72o",
  "key12": "z8GhdkwwbxBYet9KoYQQNLZsZEBKP8ZxqU1vNSmiccs5pKKTSUHYzx3a1Kzp2gPh7wQWV4ALVHktKEzErpqnM1q",
  "key13": "3F7SEtr8L6z871ygjGcdtd7mFTwqMHnCnWT7ceErJXhiCeBw6EcTxn1cSt6eLHBcc92wj7oEbjzHgvyPKUoCo7dB",
  "key14": "ZLXd7d7r5UBgupm6L6P4URQ1TmR1UmfKg881BhKt6LpHTBngkQiAXJJfA1NdWgNU8TsZkrmW8CdPENjCMaHjFkC",
  "key15": "4dhtJq5HyZ9jA6tgFZkqesb6AgjNvXv4tUkfqj34UZBrJck6r26DAwdo9bzB4Fh8uwpD9zfknrKvJKvbxkyMU6KT",
  "key16": "s4RzypgUQqwyUrCTpVodCpbDUMxERVoTGQU3wwPhxFP1YaQfxFBTkaa4TcnAUvcstVDqgoCmuuRbyG8yrwTYsiK",
  "key17": "JBS8fCY1taYHwKjjHsLCUK8u3P31hvQahyFkv8nzMQ1WxtGg5zBuzVMw9BRg1VThWsxLKnLXhiqU4k75u4nRt2s",
  "key18": "4QYDY2Eg3i4SgkgnHXShMQBGSzDsGRhVpD5jcnuJorX8yjmzHL2uGLT3EDHJRjmmsWgXGdL5D8tejsR7NRYtgiiT",
  "key19": "3AbVhU7u7saxU9mHgrWFwbth4stnM7XhPLeKfJEu8XrxFiSKbawKgRejnnSHBYd1cJC1QgVS1QQAEKavzXjyuNFi",
  "key20": "4kdb1uwqCy6CK48unkzCkvSAPAr8BNhywcHVDaagf5qS3zUHYrxkUWK47FnhKHqE9mTfqAf6dJD5mBxDSWrG3GmN",
  "key21": "5siUbZcvem7ADfKYMBdBARsDYMEphp6wWR3N3ZHZ8NyJDh6TzJd84DY4sqbNdNGaLKwmTiEhob9WXVSi4CSqhb8S",
  "key22": "4AmqRtWiheeaMUZi5XB1WhA8Qo328sGLaTit4pKosPoaF7aYQMfrcQngGzT3tsnHwakaMRBojtmvRTR8HGcJEzoS",
  "key23": "3GbDxCTCDPZD1qVMaw1EGq9CRYQNbLAWBZ9cX7wgHFCWyN1ohgkMoMKDE4nofrT3SgPoXyasUV2v98B2tYfjqYTX",
  "key24": "5DH1qcvSNyKHQPJTGo2kVoJEBNACvAvNbFfWCB8Hcki8uPXrrLktvCUQoikFZJzHon4bu9W5H2DLC6zBgZRUSEN",
  "key25": "4xvzuXqj52UQwUwknGS32zH6Pjrf7N8CthuYezaLtyKakpaEi66NbdzGJjsso4CLkdimcaFFibScWci7MP3Cq6yX",
  "key26": "ZBjTpW4Z4FYvEhA6vbXqrEYo6GmP5nQZ4Se6VmsPWdJysWcHaZj4hVFaVTHp8PgeMhwSc3r43QmHUp6Q1d38dCp",
  "key27": "3ZABhncW3auyWefjezaueKxTfywt3Jf4UAPgyERjhbxVU875mLySrw9j4Xj4J2FBGJVHdBKnnGEPCSPURHbQuR3B",
  "key28": "5ob18Ke6se3Me1PES46T6vqzdLvpNexG3BD4SjJGcEtv63oQfwCtp8qQvsSY8dNeLvGFLBen86GfJVkPujBpWnP9",
  "key29": "416LZ6G5sUmyFFPth59K6FgGxexYandR5ca14Bf6rx1HfDJVNX4hirrh1PMGVoXDwWk314E22FdecymziYbMLNXG",
  "key30": "5FB2vNwXaWwxvctcWVCcqGoy7DnnnBUKbzkx4kWfzM68eRLEVXG3Picgqz1ik6cyTVAbicZuXQLHxWqPMWkDFm2Y",
  "key31": "3MTrz4LovhrkZ83HocXE6ts2LSkGw3YMeRGxwD7DyMuRs3YRmiVGEPMR6TL3bxrcxb5y3GSPXDyyE5uEJpoV2fhf",
  "key32": "4dZ3zLL1QTLMMBjBQWu1gvY3GnXRPp5NdRSmc1C9Yw8FtptBig69o3LdAW68EerL4hucT7GEHar9bqKGb15YrA39",
  "key33": "4LvyMECYWWLT6s873PfrMYLjphwtc7uTRCPfJxxQ1LPGUf4FNvPsuSpsBLMib62NeALmh7nwgn4CsGWBEyabzUjn",
  "key34": "jZJvC5YZRwxpA2LuQwvFcZMQ3EoTGSyGYG4TbPi5K1JpehK24MdgG9tyuf5GD6CvscWpocFqzrq5ssLZNkKi6hm",
  "key35": "5o71MBLg3ahsMkRiGqjr82GwGgcprqNSzy9hh6ta9jMkgLKV6v5wi7SVCb3jXibwHwUjQik9iqSbx6cu3ADXBmVA",
  "key36": "3WZc38DEAgAGszrcSGWza94g95tXsBBsupNHKTZT2m5dquwpEnnEcPVrMYhx1KaJme8ZdiYcZLUq26wJTLive2FL",
  "key37": "5MeRzs7jx3Ru6F97G8nLmZFN28F7WxLjv4EeyjhLtiWckLpsz7LygJCNnKpsp22oY3voEo68Q1QuGiUodLZQN96M",
  "key38": "5xvD2tpgAZHQCzZQDnv77ZwaAZDpAPGDdGVHaZryzia1wYqA7KpjuC7jgqw3Q3G5QMw35X2UNGPcyvSsF48kfPLB",
  "key39": "4uyss68KjxJVH1bjksN11865ZuPcm8Zytuz6HE7s4Bs89RaTWSWYp3UHc1gozYSU2Tx7zxBJoyJpaQjsY24nM1sG",
  "key40": "pVpmUs6eoP3mqsFZQ6xEdDvWUJgwYgudFCwgxeShQ5mUoHbJnqNjhsDqjecZnoskbs1dBjK1z83uEvt3NoKnEAj",
  "key41": "27c8W6zAksGJ4FSucaoY7hqk6bC5EeWqQsUqHByWJ4kJ83wmFbAAEn9w4dbr6bT2kdL3VrgDnDpyMYRHyAV7Ltcv",
  "key42": "TtkvTfJhhibfL1MYyNdL1Zc3TPrK8x9pMQJsyP7VMD4VLGYHbTGr1LnQkXjhN3awT3xg5jRiXyPyLKKEdq3rzQ4",
  "key43": "4Smb5g9NjQaAYYtPFyBh2Zs8zyeWEiguFFGXdg5eAM3oAVafxHqNWLRiWW9XDormooqHwtkGqqt9BRhGoqXtWp2y",
  "key44": "3E2sKjn4zsjUXoW7Ef5ZFXcMuetCpjhzCSmMtDER1mkusZAvxgYzTJF4zWvTgpiPXnVFTqNcgGYezXjkjESXLdA4"
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
