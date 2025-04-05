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
    "3JFcWVEFbUHViccbh9W513bmZKmKUf5v8QR6UaRF66HSTSttbzBCFwnAetfD9VJZjhz5Mzt6JVmFPtN7k9bEWnfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qszLrg3AeyEraNpeMBWXB7Jxh3NURDieKDTrgzF87i1qBiEtGf3sExCbYQxCsFYaKdACrRKVgkfy3FBTGhd69G2",
  "key1": "vjNUVEDGsujEpR7EmCedEELMrbAzZrqoGcrMpQjWtXqdiQFCn273oBrfVbSwRPEuMXiyyHwg3ca5Mg2hiKpf23x",
  "key2": "3F2GTZSk2RMWp76MWQ4Uga9EspJgNdFVU97sUGyGcb4ovSkTdn5BFtyMeccCEzZnjDhsw12MK9CxMW9Ac3eX9mhu",
  "key3": "h6n1p8V4jQ5CzcJZ1zpugaJT6u1YdSp4d7HJARYYb9qG1ahLxv1TjnaFwB6SqTXoiHPxzVnnJC5rxtnLmdgjFiW",
  "key4": "5GzaVUEwVCoDcMAFt3fd3UAsc3HYWknvjochHJwBaDhedauwXGyJDsxJpQ2afiXaYBsXp6Tw1RcXFKLhSNim71io",
  "key5": "weVNVkzLEx3phgS4Tqnuj2cF3LiC4nSQGFhjpNfFRHAFA4jGKgxx42FryzC8yWS8KHCdARvPvGHjixkUvzyvtAn",
  "key6": "2FxsmYAoTYKNEt7TS1sESqMHwnGRCwtbiNnStyrtgP4ceD7KZDocNaBDHGEhrWHg3nmxu7BgRZ2i3oHKKJt4X4aZ",
  "key7": "4ZgAoAxivWcLsJ3MnNTDgPhDH7vFnizFLip9QZS54w5BiLJh8bK7msEfN58QFhP5ne16Q64ti4qtnecVzpQPB896",
  "key8": "224vMF36Twc88MCSCWui1SruarA6E8jdBCuzDN1x6B8fNxnx2CZs4Hv1LHbeh7XGQ1bqbh6YDEPB8zmtisPZhzWH",
  "key9": "5iwiWaUYv1ufA9iJSLs7AjcKxt8fnjzdgEH7PAJYMVs7PiphX8uWhhRZFRc2LrozKwwfBmsifVtue2hrsjWjL3Lh",
  "key10": "2bQVwVBdmNpjEpdfUJZSLY1pgwYeGBg9fKsodPyVqtpKX1ujiKCiSzbDWqn8a49YMQPQ8DMWVgFHKCVHqP7VEsZ7",
  "key11": "5yx8QR1qYfUyVGBcubay1A6eKsCB53CcYDH2T5g7tjXK3jb31xkCo5rHCkCuxhFqmmKA1T9d7CtkbYKjL4eU5vFo",
  "key12": "63JBCXKrft7W3BbFAbKJiGpcukoxsGTpH4KaMLgkQb97WJ9E31ZnXGPxsRUi84oEBf6RV5sYornQwdSZQKLEdSbA",
  "key13": "j9EpoDTpy51d3an8Wq7g9tCp2fiJCXMrWusNQkP3Bo422qZ1tZNADKjPXb7QPGL7NoyfBHmz5w6A1TtGgK8Lfpr",
  "key14": "4aP9nJRD258esjRFS7TRcaYXmQVXn31fmZyaPBRcP43RDqws9Q7Qi8jfjehxG9mEMTL3ooc6o97WJokmf2x8RtSi",
  "key15": "4W8XzW2Hk8GBrdPT6eAWQh6auurCS8bxsWJiXpL7EvcqTGszZNwEDmQ63RpXAqXwvgowdAj6yE5ViiL7ZZ73asPs",
  "key16": "4ipKLDXxmUFrRfFHsCekwPexd8vFAQAkR4hXC96Dv3m46yf76YJqFm1uVEdpfqv6etLDssrnK1zfkwu4DymrTmYr",
  "key17": "oK5tiCs7riiYQNNgJiNy3AKiRJNSBBXfBpFbMR8DRJF7DYzSgZ8tifdbCE14PpVgxS4AnDVijXMuA54FbGeTK85",
  "key18": "5Nc1czCQn1yv4Wh5KFKZWuVJV5B8S91YbpQymMdsaupm39Gzihz59ZerjG4TTvUav5UJo3UQC9u74omEL668ACNs",
  "key19": "2GAapEViTjRWCsS2ZGp2fDRAz6B87aV8FeSAgoLvHwXjYngdgS8d38kCsKF6T3TLbQWAdGADD7e6DZQEvzXa3TGT",
  "key20": "2zrh49gRQpTMxjDo9YYZs5HqZrYF41RoB3YZ2mHsr8KpqdGkZ4EKbnBsf6MCrPJ4aeEZSmiC56QdTrSdWvis51nu",
  "key21": "4bfj19C6gPKfJVXZ58ZD3djdS1hKzaYtTDFCMwDme4tp2jmgfH8RYJpjUnEtX1QG7j5Uu6ppuZvyHA2qpgLmeUYA",
  "key22": "4QD9bSXRQ4fK9eDb59JLK5CLvM5JidBruqcZGopUVJxCvd8ks6BVeMQp5EABM5wom6RC1S2ZVN7C2mHdgwwuaGmC",
  "key23": "3xL91r6et9bfubt3Nw8bP8ssXzvMUmfWqYrw575KuxwomJHxrTLF9voTB1FVfpL9ZTZ2fNPUag3VtHm1s4Es2YsV",
  "key24": "WCrtz7UbqyporZ9RjoJCRNFyk8hzkKSmSk4eCE8T6otuo348sjbZDGnbmvjSvppKCTxQJ5MgPP5vpfbqQUaz4fd",
  "key25": "334WSNtQNwitVxAqDWy5EhkKfhX17wjrXWcr9KnjCf5YKXr2vL5YsJFVPR2Zxh8kWnZuTF6WwaztfcVtjKCZVukf",
  "key26": "2Rfxo1fgyRh5bMv3Tkhij7ttP1WmMqVSmUj92obfteqfcwBiWbxRokvE3civrtRimdofA1bgqrHMU1RPpeq8jTkD",
  "key27": "4ESQhJD2KhQxCj1z6gDBPSVPxXZzCGa1i5NePttkiErz1b9f5MsJ5NnX51pkGZfVy38c5K9PHEYbrbv2WxgvLXQH",
  "key28": "5EyhpUaNWKDygo8rbtBZVRMiYNwvaEPBAAFW4xXzBDTDjSMtL4bJt7woNPqg9sZajg16iv2m7phFD8kn1yLNYT9p",
  "key29": "45gqooTJ9oUsYuWzE5F6jwDGtDu3tXaXCtAKn9KUVogabASb73Qd3NKjMVM49aTiJe5BzJYkUv1CH4ToNqZuMCGF",
  "key30": "4ChQoesA3G4QsjgttdEEX7QieVvw5S6u7wstqUxiFV2mkPo3HWVgmYeEC7wuhgCgQ3sK34paa8qTFXHn6kScn3xk",
  "key31": "36Ur75eEQc7tk2o4iSaVxMcPeymqX7aSGnA27rjkFDhYdHLca3rSLDLbtoBbctxyD7vJRKn7kwLBp8xEsHmzwk6R",
  "key32": "yN6F7P3QgYSzKfCgFeUhzjkk3dhunwMqucHeP9Uk9nwecyVwMYpJkxVLHeWdxFYuuFHqKWMaR6Fm2J5RRygyiWu",
  "key33": "5xiVCjb8UiXVZdHY18icDPSqyzQQfyAvDZYDP8koaczgKAHa7szPunNsWZxQRLUDq9pnbfPknk4fsneVRqHFkMSf",
  "key34": "5GxXtG9WEe6uhUqaiPWhE5zEL2obHgDegiZrSXN5a8EVqPx4h2sACWDPXDc54VJgZ5DgsrgseiJEd9SowovwZbFv",
  "key35": "44ehuzEEVDedT7PAWch7286WCenGS7GECZkF5dwqtbK8ZTjD7xA8g8gmHXBY2n6TRrdGQXsCx5LsXo5tzdWVVii1",
  "key36": "3EhUUhqFF1aP9fzVMAJ4hCVkUDK4d7cX9anw96L6om7s6yNtCs8XSBHzQYEr1vQnnELXj9KKqNyYR9PG4JAtKH9r",
  "key37": "LhYHoXkLrya1ujjizbHPzkC5ZpSKgKcqF5UtWCFgdbVc2E79eWrBMVKNtbYMiLqyezqCUUcRpGjKExthwyET6Ex",
  "key38": "38idVgAh5ENJH8AHd3W31C78w7fYUMrEh38yJYudhLtWHE7hsEhux4j4w3uQAGaW7krTDVz5FMCVgaqE83mBNQiz",
  "key39": "29x97R3GdmpLU7buAYqyUNwfUntAYo5P2gEsm1NyCoTjFYSyEws5aemxTGaBBjpLGwSygcn1NGYjSx4bB9xBUgDm",
  "key40": "xumn2JfhZHgoimLL6FbU62hrWeRx9yRHjwEUWrsvweoQbFXe21W2rjt8rzHCJFLaDCG5cdmCPRdD8DVJLGq3jh6",
  "key41": "3FomBU3GewZzBaFntwUDT2ggS7Cy1vnHzH7BWhRmx5fowdLkb1cTuTeQooPxy1paYp9KG4FmbfZj65wYMbDhot8f",
  "key42": "2EmNyuexdsyaoXE9NgmdzF3CU31MRf3i5oUDWgR9ttFS1X3cZFNm7MebVAwM59uR868fEnwFCzzqTvcaXCLfQY8p",
  "key43": "58BATi2DnLeryvpw6wGePVoqMna6Ha7WoZCwtUppTGVVAofq9WFTTPzG8qwdqaWKNZgaqBz74HFZPKctrphNBRwX",
  "key44": "3Fpy6RrqjTc2JGLfPPJA9LitxLBsQqWTjKwqjVNQLFPt6gMVJ7zFJMSR8fFTAzTWr9vWeBcvkJnLVjaV7kusYYgw",
  "key45": "3F2QqxHD5Nxh5fMuGBznQCgzzjmQwYxbcndNECsJ5Rf4aHFZWsUMANVsSJYMwj3o3bvBPETw4doGzr2BT1Euf2sD",
  "key46": "225iwUdiB1wh5zPvYwiqh2FPMtDh1HjEsfJNkvi87Mw5R8gHuz3pen16SHyox6bm6TAJKzTsJ18vCm38uAtCv3av",
  "key47": "5osTcqBppEyo4Gtox8SM5EbUxQAh2gR32zYmFn1eAVKUyiC4bRtjxJQDJcmdWFCp7BzARVaLHDhVmwymPSoaKu25",
  "key48": "52HZWdfEQm1gPX5ZgTt4BDrAXQBaENA86Y28sz1rBrktWqrRTuJ5dGKzCucYrwMrkNmBnwCbVtVTGZ8aZAKhZWeC",
  "key49": "3EGjYsbPXUwuXboK9TKRG3WFRns5QgWrrbhg6uNT2wFYZEeVCqWMiceFhD3XL8V2yuRRBs6fw3R7651zJNkiiCg6"
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
