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
    "2dQNFGYsbWafPbv4BgpzKs9LBXcGmzhwhCoTyi4FMtNo93vFfM8M6X9bahrCLXeDYMt7B4UhHDHrNryk5whVN4bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTk1L7ZWh7t9gdUetpNHhHbbiXa158wfy5u5qWvZN6VQQSpcvZUegPusqUM14qc4jqrddTA4bDqwwmdjUQnQWss",
  "key1": "2hGv1E3Yq5qjWPdTi4RStzRcCmwKB4MnrDkWzKH6b3LMnzmJyECVecKCP6z75Rnp81AQ5PZvx83zsMGQ2d6nDsuL",
  "key2": "3u1DvXaMLJsLzh4ET6vZzS2F43P34sHMHcceLfwmiBRFGn7czvQzBi35KgLnL9iL6CuPvfUTpu3CoTH97hpNtU1E",
  "key3": "4k59pWgojQBGG7iXt9zPtpytSytXXXt4RipQK3NGxHTf1jZp81J9xLaKf5zR8957SFnYHWQauo5meuLYaqZfPtwM",
  "key4": "5yrYad8Sb6EN3ZFQK3sUx123Siufca8476HgawPFEEUZBknCxPNRepJsx269h19moNV1wAKLULjcS6tEYfHbVcbB",
  "key5": "4rgisf1ZPPZfA1iPrvgpmTXQ6PF3VbkBds7SpZZpMfW9R1uNYw6kVpo2nvuqukrytCG7i5f4CpjbwqvsSsMDgEJz",
  "key6": "2Yx7oyiAWPwuMDGdhME1kqgyUkvGnVs9foSkJ48vHBtbog9QvCxeZSQkgANmjkc6B9ro3fB9Xt4yeeGztdhCticP",
  "key7": "kkXVvYYcJh5gmAZ9yxeuD5qiA2wvW5pRxjP2WvPVmvJddkTVBA2DFTcVQVLJTVhpR8BvXAuEF6ZGLEfAM8euDDg",
  "key8": "5kQ89DXndS8tfoDn636fDxjVdt9TC7nZg6CRUFVV8NjRawDAEwvE4tkjbVGpBz5uhnfCvJiYCCTHYL348M2TJx2D",
  "key9": "3qwGAgaCuzKGDu3KzQ8kuyY6NvHsE69V2EYYo72V4gFfDCdgjdcdvmiSGMaZ6uYAe5pHwnJTJbSFpq7DNcxShyz7",
  "key10": "2rYKahgp4dfLofWAT3YbLAwG8vN2DToDd3ipR17TTdPBHxzGsjSCiiGJ7DXw4byb92xHYMUHnRs1EhM271UM5TB8",
  "key11": "4vHxamSESA2XUixnPW4EJCaZ6eUXSrMoHDDW954ZWzm1xAB9bnJmATLfqxT3K5DPLbDKV5JV9WyofD9HbzSdHjx1",
  "key12": "2ax87Q74F3aCDmHK3tTq5MjpcpNREjZ1eaVda4Aa7MZ7kWqr5P6KpyLCbRybLDTad41xL9an9fFnDXUbYDfBF97s",
  "key13": "36E1DBR7kDZqgRw64BZ7YqfRZV45K6w5VqT7DRfC77NwiuyMYHLbxHDhQo9r6GxZNJdqngC5im4kieuyX8YxJEuQ",
  "key14": "35rw5VMDoFbSpXQSm6Lr7oQ2CWQj1pc7FyruABRf5CETLTNByLtBcuK5v6zg8eQJFnWqm3XRZ9k2HZeUURjQEmSs",
  "key15": "4hRSY3pnXCR2Nrg49UeGH58YxW7tzMG9NZ3iEdqyysrEvNHWvuDhbQ7Sc5ffCZJ9GXB34YTu4AZaxJHwM7qrXgd7",
  "key16": "YDzpFZbi9QcGn5dB2qtfFA8VRgL8moKmZThTrk9Xsutpap4W8zp3xRVeMr5yDyeWJkeJNYpsXuuQYoLVTySsdoe",
  "key17": "h6ocxLTB5uqJU9wBDqGVFqaLGAsB6f2Do62zar3gavPpa7TkpPYkHdxE9TYY1gU8FfrKwwmtUe3KX6R3Ux9xmrg",
  "key18": "WkzVyehZzJ2xj46HJVB4WZKJdx8pTXtDmN9PPm3AWemUiLnkrFekfmJgYv16MSDwmarLzUP7wca1mqhQkxhE7W1",
  "key19": "3BVzvCDBaFzazZh4JLUnsaHVQrgWSH3UtZg7N6kaBwr2StsUn519TJs9UukhoXUrByQLoq7W5P1uZ5uWCWLSdWV8",
  "key20": "4uuccxqtnHNo7BpmV8firh3dag1euvDoYPMTcCJXQDt7REWAKCYQuL4ruSpQENa2xdc84NnYes32ZtVwToe6DUfm",
  "key21": "3i3Er3wmsC5V1xpFDfCHm4gdYVL7MNqJsPRAYjDDfabRy8MiVV2Lm4h5BQE8U4M1XZt1dJChfMs9oxowC6vaNK7a",
  "key22": "3my82KqsvXkHksRNWZZdK4AJ1CjgfUnQXXXocsvUqh1wkp1diAhsgbacM2NVzNGogvFtjAfMDTGPfC7TUYzZTs4k",
  "key23": "5wpxSyfns96cy2S8je1g3frb4USJHnRvMJdw28eVB9Bd5iVHsYfoyQCET6co693mvgxW7NFC4b65cCPniM9WBzCX",
  "key24": "4oBNRo9Bfx3xepS68FkyroR5WK25kZUgDG9t5ysN6ZRj1PiTVVC19zY48XAcHFJaYp4SCeWR3FBt1MKNRxC93kDr",
  "key25": "3RBjZH2weMqTnpWDNsu7ze9LMDYUBGCHXC6pbbH1LxDMMGoxY1dSrEdqEWc6Mp8nwE96tYmtsn1s85y2kvmBPuWG",
  "key26": "4LMEiRSEgK65YH5b88d6siyKWJDjUNctbXNQqJCUaTb6wGoowjY9J2HpAhNoogF4D6fTb9J1qmCfhXzLogiv8cVT",
  "key27": "3gtyZaWuEFbWLaNFxC8J2bvC2nttfgTSp9J8FTWrM7f9mDa9qXPe2SPrHXNySvPp8rAeLL9rDrnyZeUkoKMB9mMo",
  "key28": "cz9hFD487mJxGnvz1VptbizQAJ99wD3jsBXCHXhHfmHszdD946WBYnqEAGUfwLKxt29TiXaLty4ujsrqT5M8XFB",
  "key29": "2YUJ5KdHrqwTy6X3kayvuzo8cHnkG6JzSBracizJnW58X5ZPmHWxY9SR7zvmREEyweoFLevsexBf15Hb2YaysNim",
  "key30": "5f2bT9Ktj34BJV9n5v1NMDW9EX5NpGLWsiLwbbN1sRaHUhGicMikykkqnTsD52fSNnXv1FNP8VK2cHaYjkuiRwpv",
  "key31": "5pjJmuLbpa3h61incUMEhvbcLiMnVGEgodvZGNCCpgTey8xkU27ZFxc1UZSV1Myh1SqPETPwsfbd8Lnp3MFyUaaV",
  "key32": "qg6FirTVJjX84YpoR8UvU65AkvHcgrEpA5ZuQSfVgRHrRtZJNZd1usvD7ukHL1LZfH8G716Ja3WbPppD2EoiRjd",
  "key33": "3L8uKd8WZfmfjWsaGENy1CehU4554MmP7AmsnYZaYiXrDABYf9keZF2hPRDHequEcAkUaiW63nNUG7ZYmPDSAYZ2",
  "key34": "2f9HJmTLgYBS3NvQN314N1YB3dkVvAaAA8RUxWkx1Ce8uKyqZP4joFt3oPD5mY3s7Pomnz4T8xXnQ3vj5jEEfeqK",
  "key35": "E7TxWm8s9b6acp3PhLDscM7R3xt1FRtpqCGJmep6mvS9Umz64iADw4Dwebz6JsWKLDEYfrQ1BLqYj8QahK7btwX",
  "key36": "QAq5NmCqbeKoJFsazgzRiNizArHg5JuCmuaYNa6NsZ8ktCmzakvrvqJsMgD9WzBmQt6fJrVULqCQkMV6s2ZDs6V",
  "key37": "4F9oAuacTZ2exxfWecnLwshRCuv7td4tJZHg4rRwkF6SW3fByCiKLRAedCzJvvvZxe2ntTGVdXxPy9LQpmHiyCqU",
  "key38": "4NC6uB3nseD93778cuMhzL5GtJPWrkLpxRGC4Cb8UUVCuWoZbny3cUhYumTcNMzqDrXPA8HNKHRDrZQApa9cgxU9",
  "key39": "5oHm6sXEZZknn9iGJVGtotiRd2RviQWtzMcuPhaxmd2BAUHdA3e9bLWroRdavc9eXsB37gHdUProbooyysq3qNKT",
  "key40": "3h3VcBNCryTWrgnLoDFSDz3KTytXNAidt3ZWYs7ao2SFFJt9yW1pLVJ3PQj9bBwJtyoXW5AXxzwpsg2yZEfSSCcK",
  "key41": "3yVD7v2Xd5hjP1p7DVYnWqSeyUtSVN4vkUgnaSVLV8ryvS2WG3iWCW63yA1rxeJQX82rcizMDLzQtPYW6ffMAWyf",
  "key42": "4Ttb4om2MDvTWR7tZ8tG8WmETbYkbhAuGQ8VPNV1iD5aJDLKPL32wYhD4HfUyZB7oKZUJifHGx1yYBgc15V3TxM5",
  "key43": "4zP4iMgcjJPBp2BaAJ77uqdnCDCKV2QLmG79EtXUiP1HpFeVAPURZG5PtGUFXEgp2vS9BNuzkrTynQF1emjrSxoT",
  "key44": "2Ph6kyMacigUoFixYQ7PsJqpYvcTGy7Jvbj9rFFMx8uzK4iBtWftgJTatMbMAxKxk5Mqe2VAzLFmXsfHCQ67DqxP",
  "key45": "5qHo8KeGFJkrTEHpX1x96HuNacCDiwgY3fWnWgAkDsEShV8nFUN5TwjyYyvCwdyhuMZ7YkZWKFvcguMghyo4JdN8",
  "key46": "2LMchdMDJKsS6drRWehjeEpGZ1748Va8g9wBhLCEQfdFtXafD6P2mNkZXea1P7cicGs9xgqF7RfDrmabcw6YWZhQ",
  "key47": "3m5duBmCfW8m2Rov3Suwv3xYS97oW52MRBx25KXJXfLzRGPYk3Wa6eVC1faFyX4K2pXURLEmD3Bm7zWSWCsziA1Z",
  "key48": "5qAnXfQXPequYHnzh9KQsVAwTn2nfMiBC7s13NWr6iudHUsodFDMXA6Jx3YCXxSuVr3zEVCc2C155X243pbVShRS",
  "key49": "4dwxJMuXt1wFYyMKVpSxRnHLP8j4riW3bR9RWHt8gJHjTYJSEgpP6STtGPREXSfVBse3tu1hxBGnNvSRRNhHjTef"
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
