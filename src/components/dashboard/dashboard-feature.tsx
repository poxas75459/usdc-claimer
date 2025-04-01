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
    "391rZzxx6fY21squ2KchnbD6WadUDxsDAFFvueysLM6WuoUaxb7Z9eQ2e3pQGT23xofFCHLPcTZyi4tFC7u7hLDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvzwjMHXzjKqYhniMzsWtFHW5ricVF4jmohCLEL33vXHdkHkRQFsZXhkpzMVvYhgxgkK2aMxoY8QqaF9V4nBTWe",
  "key1": "4UgN728V1gdpKFgCHkuCdM9uHmj23nMktLvxQGqJ95XCsX6f61zmuQempKQSCSvTdakhZM6zcYckuBrLZYJC512E",
  "key2": "2YZAyQyyZGrZA4xuSVRHCLsiZmntb2ZTLTVoVwSQK4WYjBfmGrZyRdVUSsfjvNKGPt8pKLKw7AX1Tfwc4rJxaaRF",
  "key3": "3v1P74XfQeykukMz4HweVv3V9UTnJAermYGfRL39e7o8wER7ViE8Cmr5XhE1KbYTXcCu7vYfh7wwBoTUWaPYZVgc",
  "key4": "4xMejPwmN595kwwNNsTe3k9xRTeAR9Ytmipyef1x59PBHEvhZwE1q8h1samZZ7FzwiB1FzZhwDTcArguekPZsobs",
  "key5": "4nvnSnt7qhuaAvcAxYbEqHvzYoaU81qSoJ33ttKkHDtQRUQ1iNa7b8CdXarCYv8UHVT2f1LCkWp9ct2pHi5ZZdDy",
  "key6": "YxJEdDtm9W5h43wPRm3XRBkookaqo9CPdrAqK9grTx2mFgbStfdNNNfargs3o6vbQsiqUfzTzztVMpMNSWQ5uiw",
  "key7": "5jB9utnuHMF4tyzrqV3Bui8N1DW2XyFccFbvX9a81gH8uM74xeBBpsm8tVxxctZyYPWB34xbFbcYDy23G8KCFmBn",
  "key8": "oreoVUpP4zbDDaeVTdK95fDQoThD6nLFpWXxz52ycKeiHTAR2kzArYsbqKvJox5zXJebEku8f7NKnbyoy2cdUUd",
  "key9": "4KcDBscbrR9zX3khxxsEGqcsaxuJzYymFwAGrNaqc4JREaCSfFQWGNZnYgKsbYfdbKPEugPGbQTnuTABcQc16yCL",
  "key10": "5MgygA25gtwrtszDBBLRMV9hKkYFYzqWN2Fd1mxpVifYskafjvG26wnyEUWY1MeAFpB5556E8qfkERNKXknb3oi7",
  "key11": "38AwbhvpkdZsizrUp2zAZ6LZ6i8qFFMt7YJMi2M7zq7T2YeL1AQkzXXxQTUBQK7rdGdxUUNp3wAQofpyESkeM8yX",
  "key12": "cMh4wisVCtabjeVSZ5wMTwuYavgKjicV8fgqvSAeemwpkADuo32vxrxp9yhMbvDQ8LvZ8EqiyXK5RBkkaaDXhWA",
  "key13": "392xoL5L3TLKPKfhvC8NJNNfTi6XB9XNQmmJx3Qy2nR1Q96pXnp38jJ5Jvwh2nFpE76MHFwX3BndxKNzWk8HTv3i",
  "key14": "ELJ9FjAXZwExxdj6gMrsWLAZvewG4t4oVaZMuVK6thFF4GiujZNyEBkFWpxzddj5ev3qQAGihFjKjzJuoBWByZh",
  "key15": "3V7GqaWgtFsEx4TmTwCCMJAxWYwz2ts1MF93t6fwBhiAPR6iws43MPi4mC3UFZCcFZSteaysjFP3nZNVVMeqcUgv",
  "key16": "2V6X71wgorts6NPFYEu6tYU4ZZiaWeY2xeWwhVTJXsxMuuXtvhJRiu2gcuQL2nQcax153KWneJSEodFGiAAVjVv9",
  "key17": "2rQknSumFJsYxn6BprQTruK2VXk96jSTeUVcTwyoaiU1CLsX5WvTH2Cm8adYyySZzXkFMLkWxuHgZaxZ1gfF192N",
  "key18": "3qEfDpYM7qJ41J9ChQZh9rKRZJzj7627erSFP446hRMKDdjc3nhnNspBGD6Ky12KrWUbKh47fySZmxiwViBS2cKv",
  "key19": "3wRLzkAZW38454w4Vf4hnkWXWHi4X5jwmA8LdkuPTzwncV5WiEwamTSC6nsdgoTBan3C2KNvZ48ULpGj3fJ6RBNp",
  "key20": "49nojQ6y2XHsXWLsRTThyg3sfL8SUJZ2VddSfT4JemT5CeEiG9ebtfWgbEphC5b3i2CgCGsiHUBsc7zBiyzDMmXE",
  "key21": "63cj8fSoi4kHnqDtpGRwEB2uSwbgzWex1JSPwW6AN9h3Nc3Y7XDiBRCMvNzbKA3CYk3ocB4rx4QhoLeqn5pLd2hR",
  "key22": "4D4EU5hcXoa79ztZJMj4ovvfEGParbZj4QLJFzUxYUvGu8PzbZQFrtX24Lxc5CBLqojkyeCmiJ6gXKU2JR3m9jQ7",
  "key23": "3WiC2q8VH29hzeg3c8YYi1we2dfn1QA8qWBtFiQ818P6pNYjYRZ9SNxeURg62QGzkeDZi849j7CBr5vKHBq8Jtex",
  "key24": "612ihApz3diBxi8hFFBi68Gjkb1MboGdts4tEVnrukEpGkyChg2APY4JrCeb3iFKAKiAZ9wY8QnaC5Qq31T32AuW",
  "key25": "666cPji2Lhep3uBniv1C9vrPqReXcmUiScwasdC3R6yxRa22sCffMkwehZR1xH4CMcSPpg64tybSouWz1CWS4QP",
  "key26": "5yGZjVzy1JtNorn4TpiorejhCTe6A98FKPx3j6MeoG4EkrBKUgAUzaGJfCPGoUMgzMTfzDx6pw6HoKVjqLY6ionn",
  "key27": "597FM2Ac9tVuoq2qGiEFqhJW5oNGDAbuPmp4eVnnk1wohVmyPigim8mMzF29Z34JfbQdWmF4o7fGd2c9f76s2Pjo",
  "key28": "4DjpR9G2UEtmNCoGXxNoiWeaeE9PPiqp61buvQzwwB5GCN25wvsaS9wxgZM2C83C2KgVEmzmbENKhj7QhuAB8kgU",
  "key29": "56HBj3WBpBxvujn6jFjvLWpKzD7Cgu2V2NSTV93RP3DwXoPiVVnGE5WkELNNCsJhz3SfLdPgayPVF8YFCYuiVGXY",
  "key30": "39TpNwTHqsH6Mx4CUSAsMEd1vKEQGTL81KP8cL3wgjNghCmw1vaijN8Hfp9mtWmWNPEHd9Mznf5CzAbkegfNUfn9",
  "key31": "4pZ2jy6bfyGJ8xZ4EzHrDCHdQ6SXC6iUqg2KiS68bABTZGWMrfQfA78jURNecyL2owTagwCaxpvKnpi2Pb7NexxH",
  "key32": "MxyRFNBMnFLVDuksmscBKXUNSrk8PWVLZmtGH2sqK7U3Qx27Fka5ucoouywaAi2gHNi7qtdAP5MDdSyoPmM9gir",
  "key33": "qF3GtXRcShGjt2y11chAjyvtWb5b4Pwb1HV7dxphoozmwFwHQpzNySCH69xhsxpWSFS4QXzExzDB4kb1TJBn5Rc",
  "key34": "2878D6PeKu5wtiRvdFLhN1cLNzXB5NfNPmFjziHkQDouNCvb5ng2tuNrTvb9DzTR8YjYHHUbWBhyJLRtpCKvAzXa",
  "key35": "4kKdMgLbkcXr4c3u4YF9r3jwLny1XNBehQ8nEsmvchgK3anxhcQRBtya2BERBp1nPNTrR1AhcdyHhzsp93NJLgBj",
  "key36": "HNkg4umxTrpEU1gqHFVbf6gmKCAK9NTJUnyWFayjQNVy13Maighj4eyNAaANBJBSyMf7LYt9f2c78NXUn8pdG1L",
  "key37": "2yZVsEgugosE1CnFTXaMh1uvK11CokCTGUp1vFLoiH6hmommyg4zwYv2FwSUUduVc3B39bK22V54Qmco9VzJho4Z",
  "key38": "5kkiQyqRJR8no8gsrhzQNhhbZBXYenxzCS7QY3Ces8jrnoYDuyxyWCT8y2c74mW1sHL2Jx9BiqVhPvRVqA8Z6kzu",
  "key39": "4n9wnCj6vM7bzYpaYRRtNXX2naPB8b56mHX3rwtW14593LBZdE54eLAFcrZSvZmLzejC3zHovg2XBvhab5k45CtT",
  "key40": "3tR2PfSnbgzKtt765sHjYRBw5duGnxsGX9FoTaJwtRc2AWFSqznVvkDD9bcPT8csmaSkuJf4XRNncGHkCZNnGsZe",
  "key41": "2MiPDvfVoT6HDjcwm5QVJPcZc8YG17ENkL5W4qraZMeUVcNErXNWtdammEsuQzJ6LsEu5SGNun8LYGgSrhPehwK9",
  "key42": "4J9DnjRKYrec9ZhRDUrRRsgZtbCVHKLx6eHWfmAQwnunhiNfBveTaUyq4ZTzbVkZMNWQydEeFbwFPcEuwojfMB2D"
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
