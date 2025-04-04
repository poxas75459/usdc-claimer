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
    "5A57EchoNdi8bMLubrf2o8Yk5fiKH23vKQjGMWH8jjyAY5GtKbSexdkgSuVSunP4B913UFUzCPuPgb4Jp2u6spm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTMmVCmRKBxGR1Pk8raZv5md5KqKUQQQhuVqtMSLeJuk8QEGqbniRET8doDKRSdNmp1MKzLc2AHVwymTSAoBMXE",
  "key1": "52QPoqJUGpZfjrmLczvpAEA2jY8hRHVCuBEhXS2kmWqDyiYu1KCpBCVoQfM9kjzauiPmE7bQZ9gb8NGVsK5bey3K",
  "key2": "32ynEhFX37XNzDW2rV287C3BSKy19NHs2yLZEvPjhihf7rsCJQkMW8jHX4N7Pb5dRVHXnFNRKqauCHZGunuVrpNm",
  "key3": "2i3Fd3JV26mrCvn76VrikvCez27GWZgNC1K9o4yiqeeT7zuHSvhkXStRvA2yrsbUzToqzJgvkDfUCoXDh51XFYjX",
  "key4": "2R7Yx1zHunwUi7toBf5qGU37PogyBpK59BsbnnVq2MgRxaAmg8bLpwBycRLpDgpViX5KUNKoBFRYMy7fRPWXcgJP",
  "key5": "53VxcQnQeTi9QGVq1QWNZDfMqZ2wxNQcEtaKaQhKDTZEqA1HDd9tZvcj9hQWWx1dTorZZxT6kpFES8CXQwgRaF62",
  "key6": "3Ph6xwwpKJzhzhGWEpoNKrNgHjq7kYLexPeWJKrAW5dTm1Kw59r11L6CrgRp4rkiCd8qLeGkzeDgwzCFpZGbjsAX",
  "key7": "54XNFKsZhP3BZCSpmap4REdeKUWD8yVoNvjP4ssQWBsCuhxfHdUJK1cE5xTq6NH9etyzTwpnChDEhbHCcGaoj1Wz",
  "key8": "5UtiVztftN1goLfR1nJ5m6MtGCQfurL67rHhVcH1AtZYArTbvDoQ8CqoQKET8cQcn2GwNWu2NfQta1NY7eXut7KQ",
  "key9": "nQm8duhGKiUbkaRGtusVjKsNJT7D1ebHWcoMS5FacDf1fH2SAwV5AYnmb6Wodps1K7nk8vP6NNNwiso1885mDBf",
  "key10": "3xbQhRupzGpQw4aNvhu9YMDsQ4273UYTxohyjRaYpKzvyXaq2r7S7T3AFJGSSSm6pZiseKphMLYkmzg9bdiW8eKQ",
  "key11": "5mG6ZEoQFsYypkzaoX5janQt5DxMFuX6GeEnrsCd1v2b9179HqFgpMd1Xsn4JEVmzDMF6vwN3VpgmTLRvYGcMDUz",
  "key12": "5sz5Zn7jubVnW1RtisxYrFpx1vdZmMHUk7iCfpUubpfDELyVHMvXcazqaMBLFf9FnLeaWw2tVAeEdeRzMuwFGtC6",
  "key13": "5FrH5n5Qvtpm3rpfT4BaNiJPpRG7iup9JpRUJ5VQF9bryyZcZEMu1kNeQJFeUbGD131HPD6DRCLzYr8ASKPwJRrS",
  "key14": "2ZhBm6YsD2r23MjerXURWy2tbMSjyH5ei6mhyVrYTXDg4XfdbrtL4LaJxM3b9UiSA7w6HxXbAAyiJMHHZRebHQrb",
  "key15": "3hz3DksP2My2YDQVJYNPMgARH5qPP5d7hhxRvrJjreDoCovpx6FyMiVgg5gz6Cwmsevxnov4yp4mgUHmXKv5NPCv",
  "key16": "3nD7aTwjp5MBh373WjVVKiecy6eFFBbWBMasquVbw1p5cgi5jhoN3odErEferGUU6JhLgsXds2S2KXaWGSXP94Y4",
  "key17": "fWuwn8t1P5ZsTa7oUzx43p5MrExzNfVBbeCUsxXhFUaHa812V1wvRoojiiYLcPqQL5g9MJX9KGFSzq67oo9u3jX",
  "key18": "3yqsH69QvKPzUkVgNqjM4fANHiYxkJcRsGPSnmGjHbCsxEwvBThdNhUnui6uzyTjdTGABHxbd94J9Ft84egz1oUG",
  "key19": "5tgD2Mjq8SwwZ9435VkU3xQgSkauUo5TxsRcdcGP5degjDYw76T2cwqah76iPjVBLXMfN5ps1R1mMKb2cCMAUyyV",
  "key20": "ZrYaaiWtD1YSp6Fn7tDqSDRtBMZxN8PRWHemfWamrSwHgQgJPUKK31tAsJV4uuKTJJFGRzqG9QXJDL77FiCi7cp",
  "key21": "2RsbgkL3P9jjUXfekqcP6S8NHfahNV7rMSMQSMTSuFZh1KJFcQzF5cFyKyqdpVuZnxpkjL9aNxY3NtpEjSVfvVwH",
  "key22": "VbAsAAzrH5wezKgNbQA3x3Trtip2AUWePWQQ9SwiQkda1UJUYQoGRjMYHsgVw9DvrTyktyjb2QtE1L46nJs3HGQ",
  "key23": "4TNaakzAf7GshCPJdLnV81FZqL4noexUc4Cer9XrjgqJMnj1gobXjBX4kU5sDf3bnwjrUegu4C9xfPzwtbxcUsMt",
  "key24": "3yVQxqqHGUW3kHwfuKJfdzeXhp47bBHogomg7shCV9SiapuK2gyGRkyS67ZbXTtDFqo75C4ChYBRY1wHYWgoxxUJ",
  "key25": "3ddMaw8R5cMSFkLr18azWyAMbrJR8JpvegetcbG82Ye6Gggf2i2UrzAHWGiP5rKMZqJbKBzYbgggMU88noBTFRnN",
  "key26": "37jx2YxTikcd5qTFSMC8rmugAhhxRkzMs41YN7ewPagivY2v5M7CQUuNoZfRdga4HnhjQ59VF57KAubXFZL2rdKw",
  "key27": "3442PrJ792vYvaU3mQuXP5brQNxiQbC2QH39nzScjYkvNdR1ak4hW956c7XPkqgJbu1mnoPzAPzMBzd1xMCPLuqr",
  "key28": "4iLURf2b239Q7VmZCvyDion6HecQZNojyVkmhqTqixVszohwJ4cLVABNgFxPM6HGbUETm44XfMh1zCsHJADs2zxo",
  "key29": "4aXEWFyNwjVVbkUM71cXjDgQ4Kzk4oZPM6pW63HjMNG9Lg1b5ndPp3YXb599v61onxu5cx6B5hCuPT3U8iDj6yks",
  "key30": "3XYPLBvky4RXweyDJ7VGeFCZ3qBBwV6rM4enYZMsm3kspWiFBiLA9PXLi8Sfe8KrYs9SRc3CFV3ukZNwWuL9oYgP",
  "key31": "3eKBy3TbjkYpPX1MamaDsLCWbydf2xLiBTRtxSQnfmxEs27aiAjezwHsk6em9RjYwrzMBJzTC3oRvYYJhin99Wk",
  "key32": "3ZJGN1JJN1P7KWDFiBq9WFun8AB5h5ffFyouNkPCi57sQJQeJhqmUbaEZJ5fYguP1bCfnvjpztUC9xdKbPztvNJx",
  "key33": "4AkjxgHaqhR9CUVbobssyXkqRKPmZ7r71L8qzbiX4gJfqc2gFYGGZobupFVJNT2BP8JpWtE3VSsMS9cYnAvttdAK",
  "key34": "5xtcdy57ioKhviSyvoZD847Y387Jqx3nFPxipqf2jZ9Ped13WzZm7QiRufBPvSc4YHRJaH2HvHuHkio4Mj7TgQPJ",
  "key35": "2RMWGqQKZJpKQLK64JCeaA9VkFNRsEGDgSgH1xPgLpANfgnuHSYB4tH5EhHCf9e3FDXwuv1n5eHu5TSXQNzj2CxB",
  "key36": "27wTMEKgo7fVphCmhXYtPAknfxe8ns3pum52XaTLshhPgswuxbKjhk1Apm8qH7jrky7CiMJmEMXLvcX2JzinheSd",
  "key37": "3YazddJzqZWHSZAmzjK6UzeT215Sak5GqkLfj8AJaTkZABRFQANbXZ1xtQAAVzcH5qvEWptk2reFSyNegqXVupxM",
  "key38": "389sKTobgdRcA8f4FvXzpasnVsa2KianLQaikQNu6krf3Hfbd4Kas6wteWReV2inz1Y3LRaT6EGcPxwv16LXgaoQ",
  "key39": "4z4ARweBoqKCoF1cdrtZgfzf4TRw1TiSxM3Kg5oxGPCtdJtYyX2UWnTRM1YPtrwVXpXzR5LCCoeCS52rk3LK62U5",
  "key40": "2aFv4T6XvHEr1fkPuqxzg3cVE7djf3wV81qFejfB6csxDVgkWYYP3pLcy4Nn4ykJFeWPUXXaEY5LyJSJDvS6ukuM",
  "key41": "3JGEuZFMM4bocXjVfg9RqsDvmhXZ9hCjqNPc1KxvLywKGDJGHTVq1cWbeRCY867wZqKbrKufsLiVcbwUvbkfAJMb",
  "key42": "2sV9APWar8Vg6YTXcsHbf2NQRJHFEwHsPX5AcLFPVhJj9oXmcZLPySE2KsyRK3RfTsvNW85EPd45eaA8uz8rKFFJ",
  "key43": "4kyYxzWU9gumASd2QJpbqpQWSa2mNkbn3im8QJonGpe7z6AVZ8i2gHwRyLBRQkpcnQNzexyJhR7fcM2UqhGzY2p9",
  "key44": "2FkJJqueNpKNomsmFnh1r1KH1BnjLbwXdrEAs1zEW7nLHQo9pEavPA3JTdvy5FSXH2yYHnxW3ondT68DqoKBqcud",
  "key45": "4onp6JKMfJUaYXME4pR2wN1UjsMG2jnkLSv9FVXAmQUPKrNauQRU7zebvWdBroNaCQTsho7stbjuQNcJUA8Vudfv"
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
