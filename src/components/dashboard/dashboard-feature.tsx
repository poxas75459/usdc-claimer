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
    "4zsz4KVhev539BBHKQ6No9h63yYUmNK9s8pj9BuV5PktdDBGq2Z29mudMj6KapQfVpLqB7SRTvzoAB1MR6WsQv9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtUXvVZo2noJMWDgKTmEuVqjuRjmBn6UHLsd3mGG8LoW9irpaFeYbiuLNbFpYqndkaqz2WJ7MgyxK13XYJowwCk",
  "key1": "wRv4dW7edYqJfdPqRrzAQNsKWG2Ayn25KtHVVMYNEqSUNYLGCCrWXc4L7NqUe8tNVYUdsdythr9NFdbs1WjZuf4",
  "key2": "5ooC2EPi3FoaVApg3e1hGSmBDqJhGoj4Yspnm7qZDvQaH2PH43TnMdJ58SnpGmnMuLieHtqDhzwd2FfuKmSqGks5",
  "key3": "dnMoc9awyrEovNvxeR2PEga4ztHcgu21bgJTEKG1hssEsPTiqdnyzebifCRw6uqoMyTwtJtxHrPmWdRbX8swgw3",
  "key4": "5gTfoAYaoA9nN4ZAC5VmWzMPhiLyXyBXMQbcf1iNd1E1oUKujsGxJyGMWWNw9NeeWaAnVaBd6Meg4aQf2wycUt6v",
  "key5": "5oJ2pro5UphVE1xn18gMNm5wPAonWCuRuWbLNxYdQFt9AASwrwQTKCUX1kRtEEtPWLKyQBDAtcVr3DDxobBzvuB4",
  "key6": "4jULga8aeSqzvLc2ERaxSwnUCzE4RQPkAPri7SFFffBWgURDoMmukMvbuF7iXUL5PwiF6tsV39jyGcoPPrBkupH1",
  "key7": "VkidP7Jq6obkJ4x8MPt5FajNZe1i6AogpP4Pogdh7dfmgNFfDU3VAsz6GrKeV3uJFVhyZKW19kPW8aTV5ZVTpCv",
  "key8": "2BW6zKYg33Jk2HyNekbK9SxetJ6cZcR7Eynf3LAkNdCHeM4ycBFkVThTAyPAAKsE6pLTP65S9AhkiTzW9XzZJ7D6",
  "key9": "5QG86MD7xYaz1kC5fXFgfj6iBWXPMggQvB5pAVwL9xKXtvQwNCBUmxWPgAz6bDM9iKY99LqGuy48QdyRovfxPig9",
  "key10": "34FeWDPrCGHVh9ELh4pWXjkukfF9GZXngYNRecTAHCkcBdBws6mJxSaJfjCtHfxn5wZA6d2hcPFVUdmUzFqL4F3v",
  "key11": "3nVjkEsXmMey4zw8fEXShhAg3ZsNnCfxkEPtoSWaA33XtawtuZJFi17CrGKJyKahcfXHrWccSiP4NmZDd4AvByp3",
  "key12": "3n37SG32iB8WTRP8f2UqMHeSWVMturrrHFmFNwCYpjSEzrmjHN6FXATbyCqqAxCL5h8wWF2Q8qiPcJqRjtzKQBeC",
  "key13": "2nt1wrqMY2AUxNdTYw34tb4pierxHcfyiTNZ5s9QUcLDSCUhq3GwhHCDQLPzMgh9uQjZntKftYyjuvgrkTLWumNn",
  "key14": "2dAkwU4p8GDBxXKUV3WGeT2foJZJmvMhLTrxidK5rYuvVZmbsDcXatyKAmyGLTbQu1aAtxv9r6Jb1CguAaGHUigC",
  "key15": "2kAB4JzrSLZZkYCmvcGk5J3h563gPfsUphuyKNbCRFU7vcZ9XhxSUwpFKiKLchQAxoxNmvExA5ebpgk12viC6Avy",
  "key16": "3LFMDYTZw5EeNkqeQqYy8RMoGmWTsfbiFmK2fU4LJrFDnUaGqpnrvzPsEFMY5bGxGAsST3gmYJzaeoD1CLuP1pTR",
  "key17": "5EoKcZ2j5gDocH7HdPhSHEtcBsb32WM1NjntLhTS6X4QqrM6fXiPJxs2GvBCokuYkuFZbNbmAPupCWyHdXpJHdWo",
  "key18": "jNoXnLyMSAREaYEC1Krsi52arFxQ68C3wgNHT4wwjNnMcTY8CRKKnDeeZa42g9FCFPVY9LyHdL2WwRTHXJ9NWKF",
  "key19": "22jQDBB6mTWx4gcAu4xwR9yA6gng232VjAmEP3oiLw7jBzaBPLfWZpeoHG2ADvGeU5VxHYqNJA9CGhRMgPkaj7TH",
  "key20": "5QV98ynbZTuKmpufbs17ThA5VWRiHaTQURyMG8mM1AAr3GWFjbKfcYPFrco6YtBvPCr3ocZ2oF6Pd1oKk4mejrKN",
  "key21": "5w6nYRzgb8GVMpWoL8tQovQAKc14eDs4CroY9a2FGAyPzfFbkWC4spejjBMsigVNHXXjNbMQu1F76u8vyetmugTu",
  "key22": "SXZEkkAK5jatHnXXKCdgyM29Bk2E1NJxnamMGtPzidXHZMtdv6M4JpAPK1nx6nUMPtgyk1mPD1PVq461JZwFUhR",
  "key23": "4VpBapvWCAzvEPqArwd4BF3hHv2VMhj6sukJ3W7Y7YJYNT2GDPDgFKj8jfrP7mAGgMUPfK2v3uiAHrtPzn1AAHe6",
  "key24": "4DNxZpCMTqcvqg2dJBm8SW4TzJV2y4uSDsmy8eFtm8GhencTfxKGP9vr3nDizwydVgnXeSCPca5VMQLE6KvZFAKq",
  "key25": "dKFVix1sDgesrW9Wsjd4SoNR69wrLusL2UBjThu9dZeLQ5QGWgUNkPMhvRoynz2NpHxiLdpd9TVNM6pTUMqjtJ6",
  "key26": "2pBYsyAQWBLe1YKrFH8ip2qT8nRzfQMNoZrpK3P4tQUvj5dvGC15XNRR4n3sDYdgXHbf2jfSRAcABFnU8VbsoJDN",
  "key27": "3F2ZaqMe5LUiHbmLi9yzDU6wUg8L1YVjKJzexoqFyGxWviGAy7KTBAS55zACbVFB1u3mQfZAuVBMXQAWi6ES8MVv",
  "key28": "2CaFLzMjxJmzoAgGYbCWZy5MZk1YUgfrZR2gxneNgPsZx8cfpqtHiTLkTDgrMSys71QmLFtL4gZGZo3s2o9dXtb5",
  "key29": "2FAA1ANeHU9RFK9s6dE1VytU4XPen8piUmD7gu9ZVqHtxqYHsoxLomMAB8Bf1KtzNX9ridopmi9jyPPT1wq7CQZs",
  "key30": "w6PhYXYcV7mcgbCtTKpQsgNtaAGbuivCk4gg8cYAir9A2PresP7jc1WK9cDHbBy7SzuZCe5Erjf1Lih4TTm2Uxs",
  "key31": "5He1ug3ebN7bhXFrZvZhB8aimdCmLyobftfyQ56N8xnud1nADQBBVk5kmtr996f9GsKCa6JcYodHpbqAmhJVzCMG",
  "key32": "45UkUT72DsR2vjjqnU7fv4UxKtvoXUFbxqa8QXBk7Dq4hhJAGkt1QtgFv2xmikBeorfogqXmDv5WrDNRh1XKWfGJ",
  "key33": "yhW6M43gihmEGrqSRQsbCPPSmrMCgJLSS8gH27XNPadAo8Y8ZRtfSt4z4BnLyUz4NbSqtTfUD1HRp1qtDr7Spt1",
  "key34": "2PWk5ercfmf98roWYHCd2QFdPqhzS852LScVCqgpKVrhWXDtQEtFdNeAtqcN9L3RgKK9eXtCxfyKdyxHcZ8ubfRp",
  "key35": "2iVLb5ihECgQMeyT7cUHxxwhPHJtnF9JWxbmrsSgmBSN29AUikLMLjmM1ryPb7JRstzD2uXZ6DcW9ycdus4aRunf"
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
