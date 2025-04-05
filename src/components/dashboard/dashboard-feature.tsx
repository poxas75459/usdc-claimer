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
    "32iWCM4ynFiUeawpidfQyFz4CUnFtjQjNsfCtUzKRLP6NKM7V29RUatjDAqCd8Vq2oonhRpFjoP6QaRyqb5ihL7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqgnTTFfXehJ38MX69CRJ56SDhiuNUWPt3yRCTAGa4Jp63JCjzTmfnxrdJqtFGyMY6BkJnhQP9GKxFEkRxAz5xa",
  "key1": "5e8QQfhE5G5VYbLSnjkRNjH8pcHqomLvVdVAVp1sUkz2pssNcSbXbthQZBDTomuBV7VF5U1jK9vo9kji6z2YuoHa",
  "key2": "4jsReYiaMx74g6AYYwipJypH8cyGEC76BnvNJuzLwVhVBu4N4aKc7D8TBVbtxyv84GmH1eoyF63uBoVbaCSzBYYT",
  "key3": "5XjWPyXeV64jB627jF7QenH6ZXWJLfzg6iBdXp7DQENkx2wKAon9JyTk7QwNYrHWnReqLVsLnwRjWPjEctWnHM3s",
  "key4": "5fkWibymhRdKGYBqJrnh37EDdxasfaufgjbUogx6jSQwJCj7NC4CzHvMSStRNaMSspTvy2bVSQwdgFPqWsJLYLmP",
  "key5": "2Hdv7Nr3v3nBjgac5EbPdmm7arEFbnuQXTr4StQMdKaMXsfGCv9yqf3QAkH1LC5LFmKqTCS4NnA7mQPvZFEwGjNt",
  "key6": "67T6HUr8hCGA58fu5XthVwpMvU1sCtfbcT8mbaRejJftz8KtmVntCwJQfKM73M2GbdXWsjUr8GYRm8cL2ajFYYyb",
  "key7": "5v3htGbNnFqFUeQKnPDsZ4H43HavtNAKrLJgnwKoN4k3A9wqEythgC4NaG95xW7FkVmEzAU4mnr7pCuCESfDcm2C",
  "key8": "4ihKaAG8VbxegpGR8wRdiC4roJTUd4xZzae9gissxsyBZApFzLmeshbsdBekbsdiugUoF6MFnjo5Yrpkaddyrozp",
  "key9": "2NYmdgmt8ppNxR1AsQTF3U2BpkScqmUe66qHJMJyio3QZKvUSgCTXN282N7DHQixtME4jQPtNWyyRhRdG3d9DMit",
  "key10": "vdofYxEvq8D3c7gdn8QjzwnTfKoUFtA2wwmEMPDZXp5n9YJeE3nKon8TfxVGfXMJAUKJotKkkZmmJgAxdCM3qoh",
  "key11": "ge8uZk1gYNqE1UVnGaM3NSnSpN11xUSZotXw6o8fkWXAG9SPfq9wvn2gDehRhErFDRXrTm1YqCJgbQ5gHnjrPQ6",
  "key12": "41xwxNvTFdy6SoLcTqLPRyDPmRViWpUaHynwXgPKfmgKqZ8rojjfUZAaSANrnB7GSifLwG9kJt2j7mcahqYtf9ah",
  "key13": "4ep689uESURqcdUBF7E3GceSihgivXkQXzCjH5APapUYsYjeyRENZXoL2SPu4WDgnAL2uiLgxxDp1CJN9ALVXKEj",
  "key14": "3ZA6NPTjcCvoLsbKEWVM1PJW4gZnNorT8o3AZa5a1aycHY2oDKRJnMU2iZNXAEsyJkaCngfo247t3TFrpKBBc7ME",
  "key15": "4tjM7ftCw6G66hf58psMvNRhC1mdVp3iJ7ddFQnLLiEsKt7ZjRUkr8ne1JKvsJsiNTCtV4zEKCkVqz2PCoUUYSx6",
  "key16": "3tnsbmrNxVsUCsJSSY4FoBq7TdsCDXms34HpHnPxkQ4FyTzCBVLaQaWyHXhWmw6N4VA71o4DW9qyDsJKHrMagyY2",
  "key17": "5NV7aSLq6sRWQim4UwXxVjUuhAFRR6Mpgc9GSnwzwZizEke2vhGdovz9x58j92L9qwPU8Qz6gRd7V3ezRqV8ENNm",
  "key18": "21NpwTNLnRAmmDRm2UDzWyjcAmPNpNEry88BNCpaK6Xe7WfSy86CTfw2m27b1UR7ejZUAAzcf2fs7uPqzxiTZQh7",
  "key19": "2qageAAc5vJAQkpm12JSX4BVNWgM5HHN2RWfD1FJmUh2mzVCYZtKDoTQLJtixsFJD25Yb97Y5YEUriQLLXyspizw",
  "key20": "2cNMHhifqSUYUKkjun1ZZq8o5Aw3TQyowkXHh9YBrMdzh22eJkdgwps6v9rMxtcCRxpxBh23HypNuctBVNQ7ARVG",
  "key21": "4bkvESALmX9kG9GzRkgUcviBL15wQszCsS4QzSmeQM8uTSTvbwPtNiFcKAn6ESXcSbD5EyfxLsojN73fcmSFKnX2",
  "key22": "ispoPrAPrLSsFxk9b7VDJZFsuPm2NTrQDyPWuHhvhpqsAoiCpFwvPZUEcJhWmkQ6RAp3YWd1Sc5N75eCSUherX7",
  "key23": "3SMWHveJdPY3u77UbyAqVPXnjLdEdaLFWHFNuzsSA5mUjk8g2EhmdqDGzdffNFSTkfUz5s5JTHrBKwyZaeo6x8W6",
  "key24": "3ZHa92hfpEKEhA6vxiopNVLYfzB66JTGN6EEKN5pNNGUy7hwQCmMybsLfUvHiucEoJ1Q5SP7oqTapTk7jtQYrmzP",
  "key25": "5Ky792ffS6ctxBFWQkFXh947CmYrhPAuECKSY7Dr1ypK3UXgErfcXPsH2aXEmEvyBnUDJqqtxQ3avH5zxeSeTkWJ",
  "key26": "4x7ykY45XuSS62rSwHUMu5Y9RNNbK569SHey6KxXMnEN7n3URX2nhofe9Zmap2a9MWa7gVeK3RAZJn3rbHua5oAL",
  "key27": "45MR3nuJKeBo4XWBvrLfUYtpXCwbZhraafag5syRZBeJMFVN2KJM8wxJaNTw6NAyxYXjfndKVYhWJ2HhJFiFGiFm",
  "key28": "3VD9otxxCAAtW5ttDTdEdCN5wmaDBJXokxdigQHnX27WSHQ2QSXDiYzTKwLmkk5MZBsZ8xMNaZwBbt75CJdHaMQm",
  "key29": "VR5v8dr3JsJ28qjgdNAuzNbFTtojqkz7HCBJkZdy8zCRK5ZwNvHvxdXUdeRJS7DJq63EfCwJnd8rggXrpKKMNAC",
  "key30": "AH1eTrX511Hx6NHPih12cdTew6zLd6eKBgQt5ieQanqfoHftUKxMgDXAno4H59f3b9FpCYYoFrVRcwaiQo9ADNX",
  "key31": "5viLvEVRapYQEMTmCk4giaeokSY3tFwP5yjeMYMJz8otfReii2vi1iQaYhfL54DA3awvavX3WhgkJ1sDJcN9CatR",
  "key32": "4xqPo2ZW2bpE3YDxh5Coqt29q8TdVM4Tka4x6wvqECKZW8j2Hb5A4MycC6EboX77hskTPSYZ5MwbQCR1smMEgVAy",
  "key33": "4HL7WKBUYWsRFMBDAZTEjBfxTsrKhksETiSKhxBEo4CdHH1Gdz6wzDSNJ2iJDkptfzinQgovxo3uft4drjR7LT7M",
  "key34": "4EdCLKexSRwAcq4pYed69Dno9SmPJSyFhQBdDfWSJsTfURPSFqrhZ6QdhYoX5rpSxAB3qywBYQWrR4omxcdd5fpB",
  "key35": "25ELzRbo5TmpTsjAric5TM4k5ueUJE1gXZMmbi6PqowihmPCgyWkVVCPxq33nHtssHWVJYnaz9EFwMjhqzkLsvtS",
  "key36": "5xtVGU2GHpVJ3gPhiMRD9FxqQtM33xoKgLxn1P8dLrLw3UxPzf4SMRboztBWLFH8gXca52GNow7zbEFAfBbZJEpk",
  "key37": "qAF3yF8Y3zo98xi3q2iZrxqo8fwFjBu5yq6iw4LfB8LtbQVT9Jo2Joc4F9YYTjgfQGBQ1Xrgxji1Q1R6SiTanc5",
  "key38": "34K8Y8CcuiPBrApoaz5dRhSpahiCBE9iZpD8hUsHZsK1NTuSZsQbwrF95ybRLLFey3ZW8MbqzvdtSTfp4HGwZNS7",
  "key39": "9tiVMNBXbdcvjQtoHRBm3ibTjE2zaktAgsRYXEsz4sRmeyHNveZ28qh3KhFveL7oHh9ZYTfzb8Ti2Yg6iBe4Chp",
  "key40": "4druEZecEekYKrnMeYsqkSkqaLFQ8nKvwrYAPC34ziXojKXr1ee8QsdJdqbrasPRo4MBTGEajHGPU7Zi3abArrh8",
  "key41": "5XDmfNFWgLNsDdu6UthF9oyKhpStFvk54Y6A9wnRMzmcxGUuuyVzbY6pfoQcVPHW1sNsmXkffVvZpmKP9wf2MSFH",
  "key42": "5eMoQQBp2KshTDwVZHBQXy4983nttPeaujfd3VxSF4fgsBPMs9pdtNGwfndv7ECzkany6QXihTyM3mNR3ZN28RkF",
  "key43": "mmZFqz51aJ5Lk2yh8eMSYUyLwtkKbDp1CfDM1nrkUxKEvKfvjx7M9Bqy42c2yvn67C5mSKrc4Z6rgWycbu66CRC",
  "key44": "4KBYQHXxVtVKWumdBaFtEHgYk9z1iBTBS9CRwhScvEA23z2ZV66Mm9PQULbcfEsuX7E1Vt2Yx11dHugn58h45Bd6",
  "key45": "5AqKkTeaqV9fZ6iDe9waWvxXXWWJAdoG4vwERMQd7hVVRfvKNqBNZeDf8JeffSXwaYiY9kCpJhKKBf1q2owdCpbc",
  "key46": "5boGtQk9SxPutoJiAVSuHvs7nv5hsEevy7wG6dxwJiyWaLf9edpR6KarYuC4Hcdbv84fnwCGNizQ3w1ZBtGTh1Yq",
  "key47": "57L8gbx9uu3AjgkEQzX2TMELnyfq5dGtFD63AUJrsgSYCu4knKfkgX7haFumacJyRvGACpqF6CMdJwRwNj6v51W5",
  "key48": "2Bvz28UUj9jKsBbSZbg5jFQNTKwvFHz5h48zP7LEt4uCGoAV8G6RvLuzVNWkBQNoZ8tFEGsmGcikkYTk7o2AND6m",
  "key49": "31wN1omhcy3ffbikhEqQRrkthnw76TRQyuSm5zwuyDagJ5gLxPqmChMB69aoDt5czMdYmvdLX85UdtvbTCDgFfu1"
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
