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
    "4vaUZtfmikqZjYCf2zbBGkmyYwmUeoc631Wr9TZZ87nzBeGCvhmPWa1LntGZ4XTxtkX7MFtZTPiikaFbKSDLcU2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAmoxUThdCExZcATqkQXJE2o1Jg9PmBfugc1sd4oCWuBJgdVo4K3ZDA3fG3mTzvFRmyxB5JUtpAAZkXSpsLtx3D",
  "key1": "3Jn8M6CpUSE48ECy1ESjx5VaEyjgegVTPMDNhp74RrBW1YatLsoL8p88zYGfFYnhRBUc5WcstKp2jUA1uzDedScm",
  "key2": "5ggCsxhWsdqhFfyzdm73TPh6ZCc7ZtCEBhdeQxr4bXoQdJ1CaYgbvHaXzA8rWcn4FFQNAJfrGcshYkcZubCKb6MF",
  "key3": "3b9Y2zZuVaXyKsHtKQEiHEXrMMMoSm1aqgSskPGoCHmafsBqLMxRTTfZFvYMPAGQBHXp2Gv1ttmUYhdfS1JHLUe4",
  "key4": "5VCYNqe6UsbLGvtzT3c6ykyHcoR6veSqbx5pHCmUvkNgXQCrMqQyzoXAaNsU9oMfpELxTEtFdap4y5cJ7281MtgE",
  "key5": "5TgA5rUq32qpqR5Ev4hd1iBbwLD4n4E5YPXLYWu6rFCFShP7ttEFfmQHNfYmFnYasiwJcR9vfdaD1wFGcQMBFeuw",
  "key6": "3XDZ22BkV247JLCWz5JFbHNh4j2JkedfpjjNN62HU8PGAMn2DaArjdwoL8MW6tTm24VrsbakirrdidFQTiwVdV3i",
  "key7": "TbxeoukVqNR39AcohA6Fbk87sWdmoPTt27YjU5uxkH2nyzxCP23qiPLkQahU9XYvUQfb7bAre2LHUkc7c2ocpC8",
  "key8": "4fZ1YxPNRmZRSoBZekHYkEU5JQ6tuy8ypPKKvihi5p2FF9jVgKXRrHJCWJ5eiEjfJPKFjy9ieaJd8LSXtu6A77oe",
  "key9": "2t3z5YCxrWAascFzebmfYcK1cMxWBUAr7avQEDR27es4jsPjuiAQcSesx4PnoLMHX7LWvLo3L4tpExsqa8FfQ26R",
  "key10": "25TceM938oYNWyK4X26cmCaw2hRBDTdy82mJWrTpxwfQhpy6nY4K7vGDh2d381quZcQvhryEmz4hmYgz2VZ1qvXw",
  "key11": "52qMXJAvbk6HeqNFgBrUtjaYc48CDvEUeYrjzyXWrokSSJS9fb2hMgamwgW3u9BLP8ycuaLR3UVocX58sWmPTxZz",
  "key12": "2q9Qmxs2RojyMjYq2WQQVpRtkWekQfH1AvMsuCcxnVWnWxUtA8hnDDABGkiTzggTexj9gyUKeunnroX2tdoNUK12",
  "key13": "2aTXBByeoc1rroHBWossb8Z5mchjFbQXZZAmNHGV9bjuuNYre8STkm84whzoSe7VD9JwtuVecPpd3tmAMW5YZyuw",
  "key14": "2mG5xvK72T6L7fh7x2WX1yust4bpvYA161yuVn5rpiZKEaEqcmv1fQoqihAYcqwo1YdiYFDRYnKPxtqqWWAs9uFZ",
  "key15": "vJZh8paSde4WEGHjWG2ZTYufre9wEDx4vdtLob9yqL6Z8pCoe4D65JR5DcPhg6Xms8SkFbGage8FnYHi5tTFXV6",
  "key16": "33MVptiPbgsqthFUf3bswnPJUTsH911MNfkYkmndDHgaJDGMN3CxbarWoHNmPHMprnpsiPwjwp4AwTPcuaAXrSri",
  "key17": "ZzCgD7kDZYW6wfjkxLgnZFuPWXG7JjzjRaf2GE9V3veer5zLrLG6sZJ5DbnoUNhY4rFiSkRiePRTJAUqtEDzhdV",
  "key18": "4o1qCYw89dDFsHCcSp3iw95zMzmH55QTQyoqtaCtQd3XhmDqmKhT8jCghbkVygXpzYvCSzpFx36emaLVfPs56rpZ",
  "key19": "2svjAJQBS1gftuKf8SpxN5Wgbmf2efjNLBPpPtuqVminq6zSpQiMAgr9DU3VfX2gCxTgV5pycVjUJtTesRBxtEVu",
  "key20": "32jA1kQX5K5fhvt3aLmZJvdciobUf16YxsFJNXFJSfM6PG5RNzDbHSgNfwpiPqNSp6Hhnk1pvUSaztiyp57pP5AF",
  "key21": "4bzRmCecCT6RFXcSLRonTipSoep8Lxqhpd54dxLJofc8YTkrYvWzvEwo8raFcuifhHDp5QUNkTBgndyjpgg9G3nC",
  "key22": "2Fg7VnjiHDRstyrCfxXMeTjn93KoySryNRTNuLbNdPcLAULYSiuhGBYvtNHAMRRckoaKCWn1wKB4X7Scc1XycF2d",
  "key23": "5g6smcsiywJZy47vUzsyHjX9bFPZRBrKNH1u1h4iDhZ3kmApmT1WTpdPyFQXhSZEHgzd7imWTVXNZi2evb9kPLxu",
  "key24": "3yNGLRmGmWCbTtKp6yqwjm9GPyncEj1AJy1xtYdmCT6bJ9KELNtRsYTNfQNj9FQCLYVQd4ir5CcXPhtHrwbZU9Zc",
  "key25": "5PfYqEm3TV54ok4daKJCtBSthwDAxTrac8akgxzmxe7bFkS7NL2HDSEFtKHTAxckG389GaJG8888VL3XrL113hKw",
  "key26": "4kxyCWVurGzyErXxFfSfgaRsYDw1AmhSzPXUYc9cXhWaLYDhvXwJ5xgfhLwAQ6Jnwv2wjUVCUJWqkzrNpqHSZUuY",
  "key27": "3knSuyjqVF5dkoSdWPrfpALqDG871GQgbqyKUrSpBiS9EnHPpT9juXtQU2nR9BF7pptwiDdwzq74QQNieUoMCF9j",
  "key28": "3tztqVczY66a5TboyuoRLJBRtqw9u47T1KM8aiivKX7CivDSxwtwCET4mBU9NRjahU9PuSpGiDkXFqNfWZ1Umuiv",
  "key29": "3qtHFgopnmGui562hTizQkzRtGfvSbMAm7nuMcdNKHgsVVXzz5zTmXuHQ5dbvQ3QQ77xyvbzhxa3MG1ZReqLHGpG",
  "key30": "2wJw8kckpJeughZPjT9uX8JHppntx5mJhG4qDpkovD2xjYwz67DKbXWFEdDhaZsA2PL9MinBaV16hfja33efx9pY",
  "key31": "39TFCkjyXfu47dGzwCBBHVAk32iF4T84DWyEi9e2FTd84iaFRDnKTLAyW4AY7NhUm73v1vZKHwXGkm2W6CMTFVFb",
  "key32": "2fr5WFy1d2URXJsUrRbYtrw9Ypo8gKKUi9Cd7tMzT5dGgPzFLRVaZSjeMt5dXrrG9JX6JNhqaXAgtQzgAkjD4ULk",
  "key33": "3m74QMGbQP7au3BcfZ5LRZYpku6TahArayMz4d8T8W1rghG45gKAfWez3FiWMPcbSxd5BbUv6WQajKqPA8TNTMmG",
  "key34": "hNopuYNCzs5qXyeWLPkrYgKnqn9uZ6AxTAHCea7KPannPrc73DQWQdUZhqjpuTahecwBBgArZ3xERLWaNg3Vyjz",
  "key35": "53CTqpxyWKobYiAWJNMbjZy565hd59zRKNArV2mv6WPiemiKKKPA664RjfXHez2GV8BnqC34BvpnbR4rRExAJiB3",
  "key36": "uUTKX1p3jrq2iz6gwUfwUYog9v9Hnad2StQp1zYwXYqVRXjwGY4nTWfh9A2c8fEd1rWYyiWna6GWwMBQWj4e39R"
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
