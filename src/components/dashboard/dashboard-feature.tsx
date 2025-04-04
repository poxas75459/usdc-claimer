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
    "4WS7HqoDsBK3NEyeCUh1rhUEU3LfgCj2eCJCz7MEi4DaptCSGx4vDRK9Cpmtsn8Hih1D12EatwgGcKKS2WagY5mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "88ev2csT6huxNQMTK5yLAZYyPugrM8bnf9W9Jb3M8enak17wBUNHmXFfmjWr2FFdiogZr8NVxjvD93eusYGg8QB",
  "key1": "22VX3HPGQ4fn88ECMYSYk9piVnQfm3wpaYaG6oDzMVxqNvVXa2bVFEwXX9xQxxqvA2D7xMTbqHoJvp5bWesrvsgY",
  "key2": "3wbs5zV5NdvaP5kYPycar2kqVQAwixud2c42t4HuSe3H3qjRVi7hREh5ijGU5uWAzKHrG2PXY9ynhY1Q9qESZLUC",
  "key3": "367v6TWqmtA7pdZiqCUQ1QQYJ1dVHPzLSyvgQdTx8vUQ8gp1VTnQRiZGMusc8JybZnQLGawdXkMKJgLhY5xGEMMV",
  "key4": "uxFp42Epe8P38GbBXMRPRtdvY64WNLLwESSFgLSYbKCy3LKsgrqNkT9VGnwkujiTGPd9t87CnSsCryYfVNjNE3b",
  "key5": "2wBsc87mvCFWYGzfug4XUvbimbUzF4yWmNGGabV2rPvfP5TjJN1nTgtCkbvRFUrF53G2ZSoDQRpaRKD74ybR8QK2",
  "key6": "CeuWfXJLSqnVLEV7EiJ2uBhj8QZnP7xe1QcPeLWr2PYozuPSK78wjocQgUJHykLBSRmCMtfsnkvUcemwkYwtDaR",
  "key7": "3EY443LjcP4QXyhy5Ak1cLpD3yDhgot8V1VFg5HbYoppZ52wUH7t99WFoZ5vzR2u9kQoZHaZ1TGnZjCEewcQQk2C",
  "key8": "3y1EsNUsSMuYJ4LfzKrMVkVeFUYs5zG82QSunAhjgLXdz73pEcbuwpnxN9yKSk3sw31fi2Wi15Fn1qTao1yHXqPR",
  "key9": "2JyT65U8UhkhAy1NT2zpW9i9D2KbZhqCg8J9rQL3D2L9pWJjfuaEPPr5nPZB7NaZehGGfQEgDxKNxQ17QmFPEDnu",
  "key10": "2FhJ18s7iUM9gPZd3i6TQKYtpj7Gc7gTXBFvSw57HKqGJzyHCsmmgru4K5rs3qPfUBH6FxXLAGUprZvtQGguS8Bw",
  "key11": "3spCC5sVtiQ7E36B7dnmi2BdxMcy8pVhWrKDUnA73b4SM7NaNNvJG31eRqp8973aKmqtqPNjpp4dyAvchxDAZqo9",
  "key12": "2tRse8hoseVaEfYLA7P73Hm3r2WPPGv2U3jTbdBdPBBVMwgvbwXub9qwyMXP3gheTkVActsFDQKmZ2MRC6Y4iLCV",
  "key13": "uiAWzUuxDdVBsiuPez8az7mLM47e8QxgDjHmUbC9Z72ay8bgYbLUwrx4ENevqq5ZDpbjDyfqjuxeuDH4ouHu6Ti",
  "key14": "2uSVeaHAE4tT8SJ3KNQpN73JBkGX95rYatPs7KvdySBugPbRc2bLyKk3vAbUxFdSUN8aAgc7xrREvrsnr8y8qARY",
  "key15": "xmMvNhntgPwnRXNW5yjaK72C5SUufqZkf6YkLUn2y6FtEtc2Hx3qrtqMLiZthySDxLpV5Fh8HmKgPXkwinnm47P",
  "key16": "42z1U8YtXg8rn96YMTjk8oj7eDmS8K98jgguCJhHa38uuYRVVUt8TsvmTZEvvv7oFqKdMt1cASaBHgAieBRpS6Eh",
  "key17": "2pqSskPSEJrXhYnmftkXc4WTypv3anB7LTvJraFm3jedz65Af48ARQnEXV9xyHgCWP7bgpiBvtARCnoLaSQw6j8c",
  "key18": "2oSiNW7LDyDgz52E6vhE46DydwWbiPZwh4pQejw74T2HyZXp1KPT4goRRBefwZXePYAx351xFagMGxWoa2gm9pxy",
  "key19": "5otKAhoRsNHAXUg7Np2DVqSpEAWR9auEkTinyC1ShBDrDKsNe5oDXTBZgVoSpRCNcYx9SJxmcgJWoj7Au5U8cnWZ",
  "key20": "PQog6TTGrmKC4XgyKXcrm24jD8MNFoW4bfnytSjMVwYB5PnRE5WXyVTiuf4g66HNX236NA6r6KR9qAokp6PC8sJ",
  "key21": "58HhJCBmymbic4C6VWKAGH1wTLoA9f7pzfw4K7L4nzC5GbdYy6zBBuAuc1i8g18C1BC7so9p38aqZAjuSdg6pm8q",
  "key22": "67PJ6L3Z9NdACgw61YkGq5A6ih4SKFdMfWCHNB3tUiArX15nwDcFwMVUPqz1YJMYMbRvGkaTtGz2Vox7UPf36J5A",
  "key23": "3Yaj6jahL1uc35gT65NVK3nffxAsGb9UweW58wBz8mXBDCpZPoamK2pTm5mVvhngH7KgMP6vpKhXmUQkXjHs5WZu",
  "key24": "33eU2XZ2oMnrnmjBq2YAuCZZsLHwkts4pFGWTUgynibdzrjmmX8AKB7dQaXkReddH2Nr1dwN8zHCYgV4dGMSY57x",
  "key25": "4NiGfoN8Z9r1ZcsHbeH6uYD5GPoqFeDVWczBq6obn3rtwmohvdd5HayREzyyABv9wiSAtXbKB3n6BFketQ35ZnhJ",
  "key26": "3osExHQ55FoMkXuQVfJYFDmFNLvQUpB7VHpg6VinfhRjbyqrbZodKyy2DmMFPCCngGHuoWbtNoVatNZo5ztujBfF",
  "key27": "gKtsfPBGvvZVf5FKyjW7vLSNA9tzJMqceMvp5AnCHva6rCBNv1cDgAvP38m9336hRimBe6D8xn3tuCzLAkz68wp",
  "key28": "3b2y43ADNsrF2h4BnDc55zoJaXfRf9T4FTFapTGVtKkrEB9zbA52NgE5uTdkQKreKVpXGH4ytyYG9zH8Q9UcJUcQ",
  "key29": "2eWEXRDf9wixKTEJ7hbqKMThERkx2h9o1xcQSeKct3aitnE74SdGDLiKVtDUjEVNtZUq6js4wmNdFQ8oZAgNG6sf",
  "key30": "2gRMm4NabJRyzBmGHJCcUQ8HknnqmRgT4zh1PtBRhoKDFboCxF75U51otVVTFffXqAtr3MzQmMiSD2C77rLgv5Ra",
  "key31": "3hEoiuW6Hu9D6ztPn5v2HTfiSE4QdDrnAtvUB9EW1SkhBZjfcgSJ8n42jvfzoRPaJhToJ32rdh6QBYT3gDyTGddS",
  "key32": "4yKeGyp2UEPP53qxqgFeEXwPYFvwSQ12f7kRVL6kzAUJL7nc76DqHkEj1iW9P86wnP4SdMobfyN1CzXtuiSdjDsa",
  "key33": "2E28Shkt6Exyh6dwQpuEJtc1tMQbJexPd4FBfbjzoQuqDaJXyS7vhu4EGEZ8qfZCdmmwnP6ARHNx5AryvGY7Wrdm",
  "key34": "2DPUcauJ8oQvxgimt7YdHq1FUFkGv3GUqaM2h2cXkWsXxW2Di6e3XXfF7kLhVbjTZVCRDaJmNHe1Aa4AXcspQKiD",
  "key35": "3TVcbAX7GpRtk2VfkAVTBj3h8dJ43qT5rC5ZRTZYppEWLRCsuKuQJAGHdwcw9oXE6tn52KFaNQZko758Ryu6pCWL",
  "key36": "631xw7dF972m3poFGvNWPFzUdVzydkdGa2YXDz3x5p9jSDosMWRa2Sih2Ta8R3Tgmh5w29XPKtf7jZUC3Lnd3RNu",
  "key37": "47FJdYmFaSWxJhQumdmLXqf3dd687oPPJtbvrVsfbAmouYvAWyGUMj1ff8KH3iPv5rnsWUz4ZUutgG6Hn78YsJFk",
  "key38": "3CmEYVM8Lqo3ocgYVGSZ98KeMKFzpFkY4wByRbcZR2vqjmhthuKA1v7myyw1bLNj615m5HxDeiEyvYiNaMF9SH4",
  "key39": "4HniwdkJ6k3GpsQomBQyrf81BAv8Lvyq3yUgwcPsNxiAbdxst1hRywimX7vup4RaTB2LQ8mipBVbp97bf3g2F6FZ",
  "key40": "2NwJSRhggk8ukRUt1eWCdDnHSHKqHEJ8ftDs5UQ44krSdgKnjwh9Zd92aasMXftnmPiB8QdtEiNUwenWBbuZL6oE",
  "key41": "xihhuN7Gsr7BzngrLRyWMrwaexdoBZf49iVd1qByahmCERRmb6MEBPqMn1AUNe5Q6WqTmEfANhH8A69kCkRc1gF",
  "key42": "4RmXKs31q8sWNkhoQevwVT2UgwfDvZSsMZCFPd6LZUuHrApVr8xMktUWhuzqsUw6vuHZ52P3CtfFAAZSvVSsULsn",
  "key43": "3rDacd59gY3cgiaFhG4AELg4fwU8VdZSxPU95w7FnKF5gco11MjqqP3V7hWB2SKA4Vi3K4eBLkXnEZWZtz1R3DNR",
  "key44": "2sezrb152amcSQuUxgB3JkwwVzvMwazr3RgMHDehC5amyjDWLEEYLnexkzXdbQSNz5wx1ZhQiy1XUpB2w8ZHUhww",
  "key45": "55LvX4Ggj2mpA9t2DQWNQn1j3pNhzetjQ7cM965muCyCiV4VJMdBJzesMrcofG9m9dXd1aAjWZvsTYyShzZpWrTj",
  "key46": "L7z2L8Qe94cJak3A6C6Jj5fzhN2agz5Zj2n1fykzbUA9ixVmi2qCzYEGWhMa6X2J2k5qSSktdkRsmLYmpnJ2gGx",
  "key47": "5kHZV6cURu5SVjuarF5Sw3XW1Df77n6eywZ4JvwPK51Ym4Z8VYL8MYEpMVUuPEkJebAz32R2bzavvzZxeLrcpvHY",
  "key48": "21gv2u4hZEzKTuKZ5tLneeFaurnBNVkrvczqY6ueEGzCmNYi5KBW9rBYusD2b3YmGcbwU3UdPvnpdZcgm2Cue7FF",
  "key49": "4eHUSBH7LoR63w6XVCe1eixwG2TKB4J2TbXoSUhFA4avFwvc6BUus8UyZDrvqAXbNfzFqVmjfRL1C6Rxi3LLLsTJ"
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
