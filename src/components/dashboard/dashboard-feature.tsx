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
    "5M9ck67NBUVZhPZAKKAu1F4UwGsBxgy6iBU2ud6QfVfXaWVvqM1ycpVwxZvpHb25hJcPZVBZpurUFzDmqGNXtMYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44cV6SrcEgEodnKtSpqZVgkPCYnU5dmGXEwpsoBE8zPCj3TdMrU7Vq7yYicddb6vMbNXQk7g3GDwM9G87E448CDv",
  "key1": "4gCqaPznBciZMZadrTXNrZZwauraAEuJ7HwUWCuJ6u1fi65GPPAZJfjatEgSnd77NxayCoR53eFN8FEGGVfQAofd",
  "key2": "3vXdtL3XqWCsnZGQ8DQ4kn1eV69pb5bdHMBuhYvAQtLY6vhaeycfEwSnTowRo4zXKkxac57CgA8SFCRcjfnpzfHt",
  "key3": "433Ntz8hFhpcVjeD54BccNV8zFRu4r8156bXyGTkGN9UeNq32F3kT6hjFkvhctuxAWCWki1hkGS7Vd6NZ4UF3c1a",
  "key4": "3FFfZV8Ydo7fKEh5bMKCuD8CSjUbuLYmiEexjq14aVGexR1Qef954R1QXXS2odYXNQTRhBzbmsRtv3LLQ4o3FDSU",
  "key5": "4zJE3t3qKf12PDUA1VBAA87uTfynThvCNjC8zvPFEuUUnKPqPKXqiur5X4Tg1dCsboqt7Jxm2yzVkdScCt3K7Df8",
  "key6": "3tYZL1MrGAeUcrfiV438UxRKL2rQH6wBQtsep59PER3PzGcCGs9PsbE2Q4HrGdv4XBbcWcStFkaBPm7TLAVqcn4h",
  "key7": "3ukK3RLNtueFRZSNSycQX9vPDPUUmsa1y2jauE2i863jQYk9rVX2Do9M9NMkvQJDpTJtPpJTRny2WaRzFZ81QcLt",
  "key8": "2Ww64eRvW9H8eCbk1B32QaA8AxyHoYXYfs2XFo5gYF4DxKTeXt61TUvcJXZNRnGJHoMviaijqmswpB8dzzvxY698",
  "key9": "3KfSh78sAjN1stdhgpBh2nTJbWLmf3cW5cKwJoGxMQmCEdpLaAe8ArKVPjwchVZRFXCpdwNopCr1y5it45kBGk6g",
  "key10": "j4av5MD2zLgUaYysBdVDiG8LGHc4ZPw1ngXkjFceM4Qr5ij8KD97bAyXk69HT5TsCDejL5Vro7fdWNVT9c7WR9q",
  "key11": "2FjnMotqGFFm232PVFoMSHyTYnXB1fxjhDw3Aoy4Uj7LmB5GgksvdgbggSxZw1nvVcTFZxq3j18tXf98zUZ2Jze7",
  "key12": "QhRhiAZQGG5PqcEWaLFXjyTrpMe74Q8zJcfyXPjMrZJBcoYh6rhJo2KFTTFBbDL4n52NAg7EoyZ6s43tnQj9yH7",
  "key13": "3SwVxwVP31FSnfyPjQiSKtJxTV2FQN7C6gWtFPTnxJQ6vdjTUcGVKeS7bwuS8wYhmSvC5tYGLaxDYw5cvzq5d8PB",
  "key14": "GtfRVgZLSJJsLGZ1VYJDXidhdX5wefUPr16vjgc1xLzUL8RQ8VyWPwxcwKpFaae9iearcNxnB6BzLQS3ATtXmXZ",
  "key15": "5x7uPs5or2wTrVgazfp6TotWT8Wyq8atFr7R86tM4N4kTmvXeHVA7xyZM2aohWRCpfbYk7MGPGeYK5wUg8ZF8B3",
  "key16": "5eghyvPCtMERhRtif7ak2yzxoWncsNJELCeYjvN5eNps1ArsiGijadZ9WeMJ1CWzgreQZCGDyg95rixjwG9HkwfS",
  "key17": "45GrnEhJw8NAPXcGADjN1wnDKYyuM1Y8co9cCymDd5JraBePoSB3nGwLNgbxWN9kra7KAoxwdmGqL8yWaR4eWq1G",
  "key18": "377QRi8jGhR8mTXBpJQHEfghd5aSL3QJFLsc5wPWukeQaFqVW68ptZRLnsiYQVLAQ3aba6HC1nbNjf8jBeXx6hxM",
  "key19": "T2KjuWezHuGLKNHf1otgf739bMmXQu9iWPauU9YDEqKsss8SMFAXqG1uV3SnDKrCPci7o4WqcNzyTFZQQRy8EZw",
  "key20": "5aJkT9y4troVTsCeMzxLZhxGiTvnh5nAmBCLaxtVGmxiJP7WWPWcbJaSksRf6ZefZGp6dHonEsYpUzkhepoEQmDr",
  "key21": "54DyRnzDYJHhY9tpjH3w5XFWGYNdHjcwzTSShEEqBwcsU9hgxti8kz2N87SX8NNcEG1fCebLWUZPufZSgHNe2VnA",
  "key22": "2xpw7VFMmkh6oWCVseNPfKSKPtXRZf94wyUMGjjj3cuUpK2vUKEhxYPXwQwETZxGkgpvB88EebNV2hMAcs12VJgc",
  "key23": "2DQCxAxRef24av7AALSJJHmmMd7GiTs1XLMWtBZ7jWq2EzmGWLgiLQDQkpGmW1pDC1a9oXhWzqopMwXAvM2ERMN6",
  "key24": "61DoW3CgwQSRL84sUzDLm7ozFxxZ3haN7R15Pw7NYpNsgYjct6LPcHxPbiZ8QLSHY5DDHzCNz5HvYT5BBM9vDb7h",
  "key25": "2e3Vpp7Qh1ctUjiVEJCHyiy6ysa9fgDnminSuw3b4XR6Rjj9cjzeaho579woquWh23td7j9WreC2QmNBD7SULdN3",
  "key26": "3nz22sZi4XnVaVbFHzR6Frnk9dugaj7eeSXM1xhoiJshPukXmrTcCFKoPJh7KA5qGyTZ2WFNsxF8tB5TtxVhFw1w",
  "key27": "4zxFAvnkEJQrLrkNWiQdrPGJdkG8nFTFbtxEtPWSGVbBUfboqjwVSJUByCB1KYWe2sn6YGUHHK9Q5CbhDjUxQNT3",
  "key28": "d1EpzvnWzEyoa2N1pSjpzEj9LZWJpNVXvsQA86PvuygRa75X4Tbxv3E4hLnjzH95cLW3wPuRhkmJPgMjxhhBJHH",
  "key29": "2mbzEedtJAJnGu5YheLMNVV8FAenFcd5aScYnUzFC1anU6ZQKN5tVJNrU44Cjav4Thja4tBrz5gVYdvtfrwE9GsW",
  "key30": "58xajUN1SgJmgeaV1eSAk8mmEMuuPmTe7xMLBJrkxFCP6V2hc3aPzRGCrqozHNpVDnN1YZnnaAAzk7jZfNVwGa9T",
  "key31": "2gL6KmBmjtCXY4ayqKN3WUGAQsprpWie3SMcgVrobAxwwKZqQoCYyUGRxwBBK2uiUoh8AXAWpsk5qPdKjz8LXS1L",
  "key32": "2fcA9SeohNP87HsQeXBKT9t2ukV99mwGAe2kXgx47xey2xWdmSTTNPMPcSEyX4z44fAyT8CtxbVsTMWMZZzYHZH2",
  "key33": "3aq6PPvSJXX13cJb8ACRmfD8aSGQJX2iNCwFVRXtnbR4jyvexHfhyfwhAGD3uJAnj1Aqsqd3jsXjY4tyuhXK1qZd",
  "key34": "2LmRw1UCz1ssr5L4VWDXFZvMLfNhSQSSiKKX6BE3TgaYPgs5q9MRNw2yvKvuNkG2KYTHoBYiDpBngcFJ6zzwgKTH"
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
