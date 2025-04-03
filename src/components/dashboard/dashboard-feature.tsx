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
    "46F2a4hDGGSpirBNiZ2ZbEdC3oqNWYr7rJeQeHwr7s1rWd8MWZGBEDee1jw1gx8RvzXgxFagaFCKcmXman3WiPJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFozHGabDptL2DiTwnkC9sYgvhP3jj9pEMnQdrBj1QCawb7SGXjsPgCHo7r8oAUBwATEW6J4uHWEUgTfuTLMCvv",
  "key1": "5N5SyodnsDP1yiAgbRiYD5Hy6jWQEGBdbn7VPiG1X1TgfureiRomiREbtchm5WN3RwSzA54XFsfw6smtt9uYKwWG",
  "key2": "2xVEk2EXFpj8kbaBVvpL9MFPFjy6jBGEUnhr2hBUHbTe1CzvxLwAD3yNwLGjqxiSJkH7EG5qEkSrFgX1e1d48dbU",
  "key3": "3JDsYxrqrGpNeEDRfqCv51TFhCZr1D3nHzn77vNq86yKh8MkB51nyP2NwLLdur45PSf6oLgEb4mmmFUF56PXZg3X",
  "key4": "v1bjXSQkWCvcSiDUa6Gg1kC5wBBWqMQrgv7CWjwszimJA1RSbSv42JTnh7fQx1qVPmzhRtPh32u9yvdwAEFLyiz",
  "key5": "5GsffSHqMBAuEApwPMfh4BownKHynASyYzCtAN1yFMQGm4ejjfvCEureT9MLa28m8zbqE7VT6pQqbi5z9s2DY12x",
  "key6": "5yFet7oV72aAJdXMH8RHkso9GT4iBEPe3XoH1kVexkirdZ26on7VmKYC3vGU7SeCxRqR5ut4MFqmXFeQBXAx86vN",
  "key7": "sTgDQ9Npdx7WaBcWJsHsBUfRHEEPaYJPGLLEDigj5JjdWnqeVgc8LfPTaPgasyQ5xMvB4AMqGd8NBWhEkyjGgbf",
  "key8": "5XiRDWMNpHXPQwYDX7Sm34mTtWi4VBcGYcpdf5e727uVt1Hsh19Ty5y5pkkfXnshCGomtwxEjZgPBjMREZ6rQjBF",
  "key9": "2e3rKxVnCcJufu72hRyv8U3qxuTUJsnSejpaXqBF9yo47Bihe565HcyXV38vV6Hrz1JDRd2udY5emAHCqiWCUcq",
  "key10": "nbMbir3XKzJ8kpihbNFuiWbimGpGXiWELYc9bT7NpyfKQS2PiuRx4RaY3u4fvYLv13A1UwXcWGePKeWbMVF9dYF",
  "key11": "e2asoRbWVzUreDwPtiaH74texbPMzSWkiTYx3fMU5MrgrqQbtsE1HaocD4UiBMAMGmi97Eo8wf5KVsmhZma9YQm",
  "key12": "2e2viFXZr7L3oiVZbDvUQotDwb2vRHmSfMe6d5pyJZYLz2qDTQJ6QEvLhUKbALNW6xdMnPk2UjPXeWU9sjxXk12c",
  "key13": "5Vvs8zrR3LQQ2fPBvUy3wMQSJVCk2nCoBvd85YWwfdGMnyQx174B5n9MUkUfm5rmv4qYmTWcsqUQCZzpG2SJskk6",
  "key14": "292u3siAFj2e3Rdm2BDmU9DzewcNWxicWjAaxrq4ux2qhZ7kKCeG1ucokdjgLKiXnzhpsGtBxWMkN5QZCz5XS2nP",
  "key15": "55Zcn2CTZ1kYDehm34i8mSJigBeHHscqmRAT925Cwg7JFsEARwR891DpXWjSJcxgQvcdqVh8i2jPtdEZeZxjw1m",
  "key16": "67inCPHEWy9FSBVwWyJxWf4bmNU7N8FYV4FehEKQ4m5gz6DLZUnzo854LrS3GQawZpLvraJDUTV5riBiS3JEysF4",
  "key17": "371Xum5vnZZjbg7f7UM8FM6Tvy1mRpMntWvt878onsug5U93NGKSvPkUVDLBnZNVuBwu9m6BWNijcVf9EXpSjGWg",
  "key18": "2RCZq4qVoPfphBpEUuxJxpjvTr19uvmNLKYNxA5HF6WkGWPpMadhzndq8jovvojBqSkhnrhnU4JxPQmFug6T623Q",
  "key19": "3MXghLmyX8oCydewD6veWHXB7Kp6UfRMfDQLekcDpJpJYzwqmivPRyWCVUveV9bPvoW5LfGr82f9htnhdWF6MqRk",
  "key20": "qzX1mWsYyf2GfBDEEx7ZW1Ke17vvSx69eZt38FeqJvuvCjuLeb6wuh2n7We1AgE94qmRzJ9RtpqQLsrZPR1sNy8",
  "key21": "4D5BU4p14SRmkmQ2R7z8re6uLMH77y4ygtG2HBJeTrjimwgRNPgMN7nq6UNPtTEw3g4EMGNoasR3F6FmoQwdG1rB",
  "key22": "4iR5VWKkQ9UCfjQawAmSE1bhw2eZKegFeGxb5KcwoyKPv75d2DB683LFwPTebSw2dKUMYmsF2ASRydntirqhQHGC",
  "key23": "WXa5A1qEfqcewF8MxrSDdZ3npEPqvVEg89768oVgm2ffSjJ6CtUyWNmCLZBwBeUMbs3ZFEPiMdqGKpeWGs1P7YL",
  "key24": "4o6vik6fT23DoZfeZct85KB7WCyxqffP6aZGuXTQSTdxqhKiSaz5wxSVWerKy7W1o4vDpt2dT1MeUDYACuZdHkfL",
  "key25": "3o91uSCJp1mcHoe4dxvFztRTVcxyEhkYRLd2QtLBcEPDMGgfiuPKuq2oHhmksYDgmrQ3gEE4YzXcb4zVnWyAgVjr",
  "key26": "2YZsDd5dNcXY8gy5KuAVupJWekwJJPLmGZE8cJsoifBqAzmcTaAWMpxGkvX8DFw4sMztqHUZwKw4o9YSAgjCXEjs",
  "key27": "5ESpHNfngSXQ7rdLUG1wZP4L43qx5x312r2bBGfgEkJHcxiP1ronbZ1DMBsREbRBUezeWrbBTRSPd2szBXwnS2No",
  "key28": "4ChRoPcSGDXekHbxvagRnygQ773i2XVqrEM54iijajBiutJ3SbC3doXnrK5LDN6aLnzCp6BzQrLzgYQThDqNRdk3",
  "key29": "38osfmFwbKtAZoXVDQYD9hgPkPT6SaRZ3hGRyMmPw7kyhHRnf2JPrMpbAvmu14Dw5CnFgLP5WsudMcbwsBYuGYjC",
  "key30": "X74JkNAXJXJrAovrLF5cKWGZ8oM4R91fYXEzQYqhQ4Fe21J69pYksEfHxhoZVXuC4RFq3FhLuJLp1HpG85D24Kv",
  "key31": "5xsAuiuh5JTFe4jzLhdJascwbtKVBbZou3LmWXd94D1VGjyRsoZGyh6Hqj12xbvSFpf9w1YsHNeSkRxijwK45b6z",
  "key32": "2SAVJhobHwbdynxYzJiMBtwQB6rSareDRYG72egtFoWGG6hD31HkCLBmUtS1sw5Mj6KxLGMck43VEm4krNaPFLAt",
  "key33": "2awWb1CkJ9Q4vhEonKRahLxjJSzkekFHdxxxLD7TW52tkn6ENBSwSf99VmFM8RivQZfVfRhqdFr4KPqLXb56iEYP",
  "key34": "4YHYRjzStSYTXcoZK9yCTGiowzfxvmCWXtfyJwxQe7cNfqHbcYMQCzBkuRwnCeFkG5c6aVT21dU37UbKcgsvkghw",
  "key35": "5VVCy98NK1tNdoabxuxhHL2eSpEUFw43pv6h5z8pJbvvKsv4hJnRcne7sFCA23vBkzrdFe86B2LNRpiqn76yxta7",
  "key36": "4K4bbo7ZqeNADkT38uQo8YaqUpAWi74v4u5KU24pnYsVBkAPEpQzctZoHx1tWEH8rh934pSLUgka7T8kdkWW7UUG",
  "key37": "5y59oNZDyJyKHLbi5yfGx1w29JgToEAnYzzdSuX6sRVo6RsREbvGhBoqjtgjFJPmq4q8WMWrYr6gLFL88zy3rdFJ",
  "key38": "39c8XsjQzmcrfPte31wRN19HBrpyfoJE44CnNW2LbFgPnMAeGZDjoXEcvbRLBUJ7WvTNuzdjqLJkVrNC2vCrm1hF",
  "key39": "4EULB1SjrcrAJ3E1Yg38BpRkptKh49J3mTkZZMgWM7dcUKvcSGTiFenUR2bnvZP9i9yRqKNxAcZno1qzTxeaz7Gt"
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
