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
    "3SP2dgTWHzVEAq5yYTmSHbZVXvtmd1A9sLmBW5UwuEBPdHabB7qWTyvc8PxCWyCP85xXaL18N88h1LCU7a3fPa6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmGSZKstMdV5xzC3V2esucErfDYP72SxaFbuiwLeHgS2qA3NwHZMxfxi2KfbnkFpw2ZSfCWTiV9NPfYSMWxkGsG",
  "key1": "4L7d9yhx15ykJ32wNYXrWT9UJdPSXx1Rt83xn6soj8o9AWTkfRvCwZ7iq9ZErKFMRoKiP2PBhvMizqwK9zRrfHsP",
  "key2": "xEx75AjbaSJJJGGRJcGMrdguae8pPnkEwEtFbot5DwRbTBBp5sWuTgGytR13PF9S3yUQWu8i4CbNKRfpzqPXpsi",
  "key3": "2w4XjxPdi3BWndG1jHnPuyCZZg5AnzxcWjv8JQEgvsNhP9QrpDGmFANrqe7nsLiGhPXGKUiu7Jjqvm1xfPP9DKV5",
  "key4": "21DHnhgShghuexrda8ksX3dnrj7TGVDVErYZfRMi6PCsFXd1aUFVL6LV5K3F6XDf4xXPJN1jYJFq3ms5KQvHDojg",
  "key5": "2FB8cvSLdKoo9JQbfpp4JSRKpAzGwSujDnyZ3446deVkh2eAZmdfbBjhZCt7Qp9fALRB7NjD2QNizCoiRRtHWRjK",
  "key6": "59ooYk34oLHE697cDVSYRBMaq1skof1BjcGoMPKVDMvrUvPgr7EzyvYxpZBQcmTLcZZnj2Y6tSJWdSUZR7MEUfjE",
  "key7": "3DpyrGvrbDRUN8M1ip8SJyhnpU8aACeMsvKW6HXMJyxC7naeNwZ7ZUQnNRH5og6dZd7VWYDcj3vAsuUVM9JYcQip",
  "key8": "5wSv7psTBvrqbmfWkxX8HJRijB9AgxA7SKSnN4RKiN3pCygDXpmAFpr5DZb3ybGq1Y2m3NnFGADwTMABSCqBht4C",
  "key9": "2Rx66j4hNvpCDskTkEuL19AH3VgYdFaDcg5zfHCrEpFRWxMrLL91Nn2CGjv65eGc4pWp9pBTZbxF3XozHA7WfM1L",
  "key10": "619WZPUT8jCyQ9rDHQdQCQCYX8KEWWpQikzZvy8SgPVw2k83gwdZJQTBDAEpyZEBG9efVDgv6Z6r2WPAK9AjLMM8",
  "key11": "3pGsWfqNtbZ91VnsLjgBoQrBgeDd6idsoaA9ECUc3co4ZQXfcK5u6HjwbhcNFv63ZZCGhHnMSLGfmKqm5FxaVF5n",
  "key12": "SCQiphmWPczq53KTEg92ruTwjnNv3N96S7FvG8JeHZv2W3cP6gNRpxge3z1ZWPrxawTFsj3udKLAhVXkXZhYT1r",
  "key13": "3LKM3zZV6jsakdQCwsY9htLa1WhAQdAnRtW9PS6mgtN6EGV7bRrX8Rny4vUxqWLbfioK5LirxNekcA9xAQS3jgwU",
  "key14": "5jzkktTDWmToMW35bcHXr6Lm7ct9jv35nk82ZAFGoeRb8UZwfEDeoCRhiEfkeo1XcjoAvY88wEyhGSE4u8Qyi96W",
  "key15": "2QtukLTzNeR21SECHnZgJAnGVpmLMEeq4xDqDP8EPuoxcfGGQzzDXykQXUuLrEbs2XyL22qejQXTyiwMw4sGXt8f",
  "key16": "3CgYSmzQRm18rY2yzoLjAJhWrda3UTQHV8GJLHDGXSF2gPF8fgoeewGUWeTp2wfbtw9U57MXyEaXWn36keX8NcF8",
  "key17": "Bu2z1BY21XBNYuUu31camjqf6AiEh5FkvRysTPp16ExCumBc22FK79KkczrjpxyyK44QAfeXmTA4epd2d8WqJut",
  "key18": "3RS7nZnR4SW5JMWfrWXNgix9WVTiVVX3PtwPWLjYs2gQNJtz1CKimAd2ph3BwyVsyc4xpqW28ZQEvtEBEyj2PJdM",
  "key19": "4j2Ga9bL5ZvcjafafFuy4B4vtYAE7bKGbBwH6N7Vqnw1qYuaDrKQCn7449VcEv8yUMi3K1MJW9GM3fMuckL4WLPh",
  "key20": "5QewxcBts46ySQtsS3mUR7RJiAuHPCpvQ441A9yrU7cvhtupQV3QqSkVqbEsmyHmQHR1bDYSk6UiBP9Jsfd1ZVJC",
  "key21": "2PX8VBCgKVxtwFSMpHAVD5L119Z1YCFftEhP27bTDD57aqN2HmSdwJZjDrHZFDSqDSZzidZE2x4v1ifkN4msJqsy",
  "key22": "46eFAiin3Agc844Vw69QS7kV5bp7k3nPFMHtK7NgfBnbcgP94VpsFw73Cpi1dEu6Sc8QyVtox7SaD4ezT6vgf5Rv",
  "key23": "2LnPDKqBya5rQNJHGjRUez58uVvjj9koNCQiEnePSwqDWEVaWBkfpnVGknmL18wQFCqXGFL73ynd87TbSkYEsMK9",
  "key24": "v6H47iJWJ3bjGjCTy3eMJrjQ8BgkMELj9q7KyMCe45LEazrPcCwcoXthguoLS592dy2oQr59J3c7mkZe1XBbqYE",
  "key25": "gf2vMYxVAp1ccj8PfqWFdz8ueGcruLNKak536zc2PjG4nVSadHEZkVJ1MM9DUHR7JyRxSAuwabMyAWvMZ9NcLyL",
  "key26": "3HHpV9Axk58Vw9ga9qipRTF234a93bBj1NuCvi28tFxszN3343SCRstJiaUcyAK6ahx77jDsurzwdfKgwMGWcCm5",
  "key27": "5t2i3AZNGB4motD8CPeFHWYf2syLbyyT2BKgZTBnAUPCMiY8CQe3RJghmpcAXPpMCRbCzRYo5uP3ia1e59mccqH2",
  "key28": "55QnU99FwitTwCL3mXkPEvLbBaBQfFFfm7ua2fQ1mpCsyH2VgaZYbU2fKqt55QvD1NQGf5BmcSyk4rUhoFLkHjjK",
  "key29": "3YQFzug7e3nuPCNpc6u4KizgUuqSnAtgRP8VDFrAbbF1wTGeV6tmFANFYdyjgEtcE1juNN3WB7rjUxcGZ4rQixAc",
  "key30": "3MKtCbFCQCJJhffXWVFUFBg8mfqJ38G3kXLBrHM33ZjfZq3uNSZsNQqreYYbUNPZ1d76xS9393urDxafSmGTL7J9",
  "key31": "ynoWg9PaTNw7gJ5Ysnxr7QwFbwYwaTF9Pu1CEBgEFQHRKUUshoaYPyHhgHwTVW4g1HwgnpwKmFjSWAW13cBEZUq",
  "key32": "3Qxc7ggn7ozXCAvhXD6u3sZzGo46CGHN2r5vSAjBJMnFptuwkfk8rcD5C2vSJtqQgJPJoiAvn7JdoXkv9HXSX2rV",
  "key33": "4gtf5ERch4mnTWMoF4W54arBa69MWuboUPzuGHDFnbVBQWJzgVoFs8VSSiJwoCkPcTxVMf1H9MdTQ8q9ZzRukNBL",
  "key34": "6zVA2pcKhMMLaP1e7aB92RTecpSG7iPPb6gxK9gBBNqQjT64oxtYHqQcKukfFapM5Gqh61zNPrMRzy4XBYLbhUp",
  "key35": "4NNfgoozHCznvphTkya1gzHAHXyvv3cVVyTr1yJ98Zv7JzqVUjACFB4BdpwjKLK2uygSQapPKgm3eKjRuDT9iWtE",
  "key36": "gworzPyYnK4xcADV7Tz27nGLWoS17QHBuHK2YhEXv2xDpGvPNYAT7Udbaxh8WHLRwXHX8rpJZuPHKUxNg3jw8T3",
  "key37": "3fNn5WcPoUF2LGbJNPYRNkUfFuiTEupv4ix9H5Fue2ErWtvjZmKGJXdFeMBdvkEfCQp1h2SvMBjCA9Zw3Dg795Dx",
  "key38": "bWQe1W6dPDysHgZYc2KPNgtCq9GZhbddS8P3jut2WoduvmXWTWAW47u6bsDwyaG9xr7H43FkpyA75oBpfQD8mYc",
  "key39": "5vAB74xNL9bWvNzcJvrwTTyvvxV4FB3WfXSd81EFesogC5tqDg6n1Jacn336zyaxifbDoWeeCAQgiKvCBbcRRHFm",
  "key40": "5uGZSYy1TXa6AXzH7K89fDUMJNaTGWo7sjdYCm9i2pnQ9SjDRbAh2vmZZZMH9kfhGAjnrzJmYrWMBsunaQf87MfU",
  "key41": "2ZVW5iANe14XYxccVYJL6CqyRa1yHKzWswuPyB6iTgPWazyP87cqZzAtfdKZ73E9a1KpfiCPeatfYaxtmHwrLHdd",
  "key42": "2dSsp3N7ngchaMAJLx23AgvAf3y3R1RYd2t4PeYpLbKDRqxfjGYqzHiNVkdRDHxxYWDhWL36QoTcdqkdMJKPHWgY",
  "key43": "hZTpHJpWQVS7KhGU1pAsi8omTrLVmeSY7ekiHumgVVAwYehuqtDkAVWKKjCjD1ZF6H3gU2Hb6KYjUQVCEE7V3jC",
  "key44": "2jsZgwYbhjLVjp9uoPqv5hBkhnax412iHjrC1KNFeA3Sv1vYcvUPw3xTjr2pmtbnfqwCJoDFVM3AUTjgLjJeL2D2",
  "key45": "2ZycWBtmvcMEM2ws7HEX9ucv8UhzT1FGQjK6yU7Uh9fMACy3Uv2iMoFuLP9RZVuVbnVoS4XZeFb9pLAfCwVRSvdF",
  "key46": "4Hc3nZUU1iiVqv637ikkEqZneBU6VnJaKkZCNeZVQyMXFs5Wi9citq9G24jCvBDo91tzccm4SrbN9wiwQzEj9zmu",
  "key47": "5HzKcRqvCf1QyvNBkzN8zAnUTgiATV4zwcwd5phYoKHjKemHgEDFZJHeAdBB5h7NLvbJzUFPpFQ47h1S2hnrdXm4",
  "key48": "HaDKHnma72pvb2kTT8gMV2XWu24SnSy9ihq4FWK9vx1tHnrzrbmsLkpsrzAui2tDH3tikkqu3YDJsJzVnSNeASn",
  "key49": "MpZ5WYJva2T31dUZ2azJYCyjjDDsjrXm5BVuBE9UqBya439DNbh2jUMwPTxvk17eundtW2XJcKrpdL8dZoRHo6J"
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
