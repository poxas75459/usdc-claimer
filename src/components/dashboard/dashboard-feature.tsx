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
    "2tjgJ3iPjfR2MGWqvCPQqEyayNcRardyTWQqeaBxQ6fkku9CYombzYcvutxRW75sHEtyBGDXndV6aQYwecwfrM8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfXyk7KEedwewFKRTbuoau1ksX6BXXQD2o8R17s8P9jsRKmWCK5Z5Yr84nSAv7TmEdXg6GAToqx1mLrNneFcbCn",
  "key1": "2JKT6ZeosB3svNdSBw6fRznjDgh3wqzpDUYGQno5WYZ9B4rLD2T4myMVvQwEWk1LDJCJnoFS5HsZK5SdgaDx4Uie",
  "key2": "2PrRqvC2g6CZr9VfNuSGUXnVxo6hs3ee9vrieXg6ja7bpVyoZADm4LNMtVmBA3Z5Hsji8VgtwF7pFAXERNKaffsn",
  "key3": "66WbUbiBTqTbLTkRw8GBXVVpkrJ33KgtJPH4dpboXtRS4WQWUHyy8Ht71SHNBHhNoz4UDxX8Qp2Hhnt2BkA8vFXz",
  "key4": "WBZtUTAAawTN6KLtqJP791avme9kMVWo3LuzGQug4btEAvPSG4hcwp8H2VeF6nVNguFfFp1Jk9eWNkTJzdG6FiB",
  "key5": "34WZ1jF4K6FXG1yyThLHCujvLQN1CYMDmWiYAy1gDvak6CM8Aq9MgHTjmnJPbb9jKS2MJkb5js1uJ8UqRHSYNkri",
  "key6": "3vmeZ8VHXAmxMjN2XLzzoCxk81qDWjC6zNvqgccwG92kLkWKUDYBFTur5eqcDqW8tqGa3n9c1byQFscSsRGG2y6Y",
  "key7": "4gRc8AK3VavTRWPCbs32fZRv4Lh7Ps8SMn8qkoUN7nm4LibHSyrDu6bbNgGSZk15ioh3XWDsN97PGfuaXe3iTZQK",
  "key8": "m1ZttEBSSdw5a7jYS6PEhffBWRn8jsk5Bkz4GdZkgqB5MBW5A4A6q3yW2SLp3AReV7hZJsYzwGQ7jiw5rEmjeaK",
  "key9": "5oRtd8QLUYK2jRK4sXGPxeSFPkHrmiTEgfJ5F4s17tG2vjm5acYjMZU1AouvimXPY6fRs9xypTegWQKBXqbn4H6S",
  "key10": "356xTuAszCnxfW71vzzfGCvc6XgKAi22cUKj4PornJkQLTwJQmGkEYpmseBCMRaXqoZ5r5FCTaTzYfYJXtsTgG9L",
  "key11": "nbNib2kBZttqbNsLDn8bQuMFdeoXmXguv9LWBQXdjURZJUXrdSVzLFA7UiDDysJNtmd4zGPXrihNThzrdgWRCdV",
  "key12": "3j7Yapq3LUpwA46DxUAAKt97ps2QwEroQ78ANR8VMG3KwVC7G6ac4NDgbufCcEFx2HCZdFhxknDvmxXPaDpgLVFW",
  "key13": "52mqZzbYd4N6pPfg3NZhPMoEQMMAugQfRbkauTiGPtmwUTqbWKcACAcQ8o7AFiLmJM9Q3mXbqPUPeE7hsHgn1qpA",
  "key14": "4NW8XBmwjLm77NjNqU881Nt3GTHoaATt7932tESKBypixJdXmUnBe2RZmhKQVTmw9v79YcZ27cKLGv7NjoNayXU5",
  "key15": "2P7LsExetcSXzaDedMZ8mJpPVbNPQDVjpVdXFz2foVDK8PXVTr8AxbN1Aro9pMofLhmUyzgbJN9Hd356b4s2oM1e",
  "key16": "37opBB4PUTf4j8mDARTKRLuSjKZxu7yXyEzR9bEzStRM3rucSQ7eLL97Frb6vNoXP94M6njVSwPa9TV2d8NHNsm1",
  "key17": "5c3BbpCPMSuZAKbF79bwdwstshibVqP9URcnEDE6kab2RzUwqMoKtBUoSKtWr9danBLBxBSRmoQtcPzDY1g9cyb9",
  "key18": "JLD4iaAmuWyW6dCCnuwiLKV6f2JHKmhNYdiWCaD3fGqMpR1DW9peWWXPBBs9fMUsRqvq9HjzfgbHzNB88EgJ2RH",
  "key19": "fx3DCHaKtqiVtbYiYtkdnQQtScdZAWZGYL7aLLPepDoXPMeeDWNfsP4gqVdZ9VSmafmRykiSQEN1MeXPNWkmkLa",
  "key20": "5Xg8DhFD3JzFCdsAWMu8nZTXTW1VHZetWFsSubMJ3QHKzoeJANv6iJ42HiFx6noAkGXBtwDGooNc5sPJjtmjrUip",
  "key21": "5piQiXUpamxarrgqLe3ZhPeNpzz15T8jTPhhiGyfWBqFwSrmdq58ogiNDSnR2g4o9fjpNLBA9ZsNVVWtWTJEdYTG",
  "key22": "5DG6iqLdBftzTYu4LrhtCeg3fjDavLcogPujtVRLpRZPescVZ84RLUmC1Kw7WYEFqU9ZwV7e6kiATB6zKP8MsjQf",
  "key23": "49YymUW4jNt4uSvpYgvyRQUWgBoeMLcpEsjo7QtYUu1kwUfjjJbmJGpL4x2DY3r98vrPyoctov8A2NYJL8psydAz",
  "key24": "66ziD3yKdFobK1T6iHc4J2FbfVMArwUwhP1c6MsFV2Gxg38t3iV3NV7gFJkjef9hLCBQ8AHPqBaDyJ457AsEHsVe",
  "key25": "3MZZaaSMgmjTEF4o4r9KpmmTo8wgKSnTQVGZnG5kstUkSwqs5rmXMdAa82PBad151DSTpxfbBY6fmPr6ydMcK93S",
  "key26": "3Ec4LSGZTr5pmcRhQauXjmv5uYLoRyHMmRSNr8MiKQDrwLzbD1KKo2G1qRMkGwLRp1AjGbb9PuDqcJyXL3zQYDGn",
  "key27": "5XpBV85VuZoSShZi1e1yXrEdvLHRhdmXXfEAtV83S7i9enhFu1DjCepEvuoE42m7VekfUbT5ArkKSD6nm5Ct4kGN",
  "key28": "4LG4SMdiLq2zDFwZbFfD69cMfokmDTxjxMFdZmd7dSTfeqUkr8nsdkY58BPXxSCYRhdm9EGv44CGpvuG8Xa9E9bT",
  "key29": "4DPhnFYbKuJ9C9Q943ogpwv1NaXGE3yBdcoJk5UNvA3LPs5vapkdVvXbupu6hfLvZBAdFBiTgDrB8Wv8RFaeEU3f",
  "key30": "U9yiKTg5uPPnrzwrcmEiMg7gWB6XXWc6sj6bLyZWGmBTCdW7Vi4fSLQd8zouQFrQh4GFvcMhSJEpuhhfdweS2Vf",
  "key31": "5SWUNDazNqjevU4WpS5FEdWFUCWRfyzYzg9wfbDXXnUSaoY1mytHwsacsQNRw2YK4MmUjQSHHvR9wPnLJbnurxcp",
  "key32": "2VX85WpfuTHxt5tzpKDY2WF4sJfWc3eSxVF4w2GiGoxpnx9nTS4MQjDBynPADRhyYuW9e4yzccMeAz6eE5ix8Csf",
  "key33": "5PrbEMpSx9aeycP6H6meBnPv5dMVX3N14dAs3Sfwterkaw6JDrZD4QueFuhr5WtHyi1TnVajBacBXzkAd3mskxeZ",
  "key34": "2dKJpYzYX5Rsft4gDsAB18mjRaZpf7BC6TyzF2UjJ39sFpfmCuERB7uLyzvb6ng8RC2PHqP26xGuVMDHMMzDstQo",
  "key35": "4rxFbDAfPozgzoZbf9Wt82Hz1rGi8BoNa9Cd71xN4synWnHBPbhhYksAEFmxikz6GBHvoQU2kXhJxQVcEHeVH31n",
  "key36": "hUFNYLJ5BtEhmvNrtkshpoBCZajtqcBszn7G3mE3QnwucQmvqtP7sT9gipdmZECDkXwA1Cx3r9wKKf4858WdSEq",
  "key37": "26CPtRdHnwLuuyAM9VGgSTvfkKcYtRQfz29UraR7fjPAsJjcLVAPWqcTvJmDTLWNQwvQxq54PMhJB7nYgUBT9nC8",
  "key38": "2zsunvaUPukXHELd4Y2iiFF32nvKaMRjJRtyXmPcyDbBdfFiDahw8dHHfZLCsfejGnJTRMQ5iSmXtSXRznDqKEcD",
  "key39": "4iRd2t5WrNeT9pvccXxc3t7z8KJdhAJv6c6UTbLZftWSHHmrjyYKVtQxQrN9GC322Ruo4go9rAuvMZsqVWJE3vkx",
  "key40": "4YP8HW2sEBNm9RAdVd1r5BYMDURjdCCNEvPpmtcG8fDo6PXySijpz7VNcxbJDrpTKXPFKcMaqf6MKegbDM7GwUsE",
  "key41": "3KtxEDeqX6iVVsLgVmqHtTXZaceftNiF421zfwuYVDKVHDg6E37cNp3G1hcgdT7M4ZndUq5uBnugRLFjcP9nyfuw"
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
