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
    "4VpJpgDGsiXeHmRMXs86TZLTYqr5GQxghwaEv4EXaX2X69XDDWgKsGp5FJpnRL5Br16zDnC9Sxrdh7zc2jaG2bab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oyupaeuzN7fjd73R65trCcKUtDj5VeFzByc1w2zcTGpU6EgkHD5NR8RN8s4NyQpTxJhy5KDxmRMMoNe6SQpt5NN",
  "key1": "3WPYHvQVzs1auXHtS2Jm1aAyVo6Lv5xipcf4xUrZQEtzotfnBmtgJrFF3iuwQsu3gdkKSVi5nr1wkKqtF3Ykewej",
  "key2": "3a7VMcybzKgxwtJeHsjuMA6e73uLAbzSp39JiwCHdru3wiub9DZ6iYcPb2CjS1njGYvsXScdQqSjVt9fh4qukm5i",
  "key3": "4pwaDgLvTdmKmSv7Z8X3scBdB2ePRhrtVEQKsSrP4kyeqMLHtvXJGJ5oZJJQN1gfH1Fduap8CbBuDS515PRuXkJ1",
  "key4": "3XFkMAHNRMcG47VoRBqGr6Ta6HqogwqQ9XWQKa7zervKgmp4RMzN9VY29u2QMM6yqfJqy2k62JNd4suFojmTRoXE",
  "key5": "3hEAjhm9trDAiZg8LpcDoTDTJ19TbS9672stmEhFTxGER3bCYsUEThX19oWchXHmtSJQECPH41oR8finBGp8MFvm",
  "key6": "cd2gKnn5TycFJPe4oP8ECmHAVSgqarx6BCzu715XdCWh2EAg29CgwHHsFgaoeujDFeZSYqUSuXkAQUG4wqJXPyC",
  "key7": "3TJPDmBE7WMBEyze3AJB4QaAsEsMm456SCUoTLVndxzJTsWM1tv7gWDjKvKqNpSm8bTV9fMpDsrH1Xj9jF2SeuYS",
  "key8": "3JVpBbDC9QZupwLGfehLEFU2JydEQPEy3JGnDKTsCj77pwwYt1n7zjdpoNpcqyd5ir2iKowbYy2EBQvRxKHgGJKs",
  "key9": "4hp2rk53oYwUm8jrMiGNi7rYkBaDdmTHZVGCHSR9wu3W5YdTDG2Sbx9JsUHz7n8XtxzgogTaF67iHonKcZ8esNaq",
  "key10": "4zMssQrtFLcL8DNPYzk4g5WGmirQgmFD1qBC9pR7qpUnENrXhu8E2hwMHXyHBJa2LtrjbZEgQqG5CJ7YiZRZRy9R",
  "key11": "zGzckFkuHRJfi7KwVN5AZWPaF8TTVJYRwBqSz6zceFvoJsBxogvETFY3eEGPN2BoCQXKpiL9vputy4HW9Ug6ftS",
  "key12": "2zgbxptWxsz6tuhZenrbSiYsGJ5Dbnf19w2HEwLHZvugmtLpBmfsvoFhaLJYsNCN23fGmG6vAwaPSodjtRydocUf",
  "key13": "2QmhToQC8apfE5DwJMgDEKidnqVeTN6PnmSKYizo3rWVqVY9WxkErMF1dALFvEqe4SXR5Vu8dEZTo8AUZPFRQwJw",
  "key14": "L7U1oTJio4n2SJ7dvEbtwiGZrUmajwroZrYtPSvZtpi29XgnLzn2XsycAA3gSFPVecU2gKKzM1Gk1kLGCBZ97fD",
  "key15": "rX8qV4LnNGmAPFdjsGC1ovJdcb97Fuugwyghv5jmUiVFyswNNTFpz1yLpRma42gsg6PSR6nWS7x9n6kwXbAVCJz",
  "key16": "QGWGaMHe1renBWHqjvybK9pJYvw8tKKH8XsG6rb4ZrDicRTn6JbRNt3Sno581qPH6Gxpob424bG9rqqsRkH2cjS",
  "key17": "2wpHfRRd3dxHCtQdHcXYjeoM4hBZoNvhQNY2MQ2dgb6CWcUsV8HqmWhH9yfm3qXm1NF1xC1EhEdwbfKGeBD8nF5Q",
  "key18": "3xaFHLVugD7bMp7RYLvHtM2Kt15GkNfJd58FBSPsxrar1AjnPgRVXp3vbhME9PBMuLLBfj6RBUyeYRt8ZSM59N7f",
  "key19": "3h8HGpoH5HdXZbZuM5qpqiETEKhkNYEtjKyfQTmT7J2hjEoFEmUkfz6PjUkoFFZRo4DMT6yEBXgQdCFKdY42mWRy",
  "key20": "3ZgexDZVnJY6jr9ntNvq4DxN1718VWipCpkGtD6FEip3kzMZ9z9SGZmLf7iSW52sNbwuNDv2Y6L7k4VChwyquMZM",
  "key21": "4Cb1M9bo8H4oGqEciLr45uyfBFBsATvP5n5JbjA4SspeGmhBKnAS8AVewC8VtDj6Wv1E8DcMphaqcKGk73Y29ydC",
  "key22": "4e6JxFBN2Pz9RLfVxqQeshgGXzDZMJALBC8ithDNN9Sq4VxzSmVvZbyAheWt4aHHobc4eqtfzRb52nvv7ps7N4zN",
  "key23": "RQtECSpxNKfpyDEJXFvQsErLe727QNvoaTJJVVuyCppcY7AHov14sgkvdq3xqKwNjcBJ8QFu6XMBFFhqURLLBkL",
  "key24": "35Z1EzLNRbL6waMHGn1WgXBrd1GAW2dKa7HZUxcFKubsUvi9JiiEtAffSpxc7LSWXtHhPGW2Uhs2Gn7Q3iZchMs4",
  "key25": "4h5n3vP6b1A3R2HEiLP7xPY2hMT55c9rfS8aviksd2UtgMVFePwmEsYY3ZFkxemHYMmmCpHmusBxKNGGbPr68xDH",
  "key26": "4EU22NFUzqtYEB99fxk7ubEMEotzVfSMDicLcJEeYix9UtgwwdUCffxfp3R8CP1hpuW6BKhUpjT5sE1XfjtEK9hW",
  "key27": "5ftfsbtm28NSB7wneteg9tivoAeU2TbAGLt62nTfK8vCR4q4MnH2Wia9MMvwqvsyWEjoj9aVuxJDgvXm1noqYcvZ",
  "key28": "369fFS6wbbG4HQH2i4JqWzkSj4QUS3bvgtmUyc4JFkQQxRFnJdLGufywRDsszkL9TRU3jipLPLbGBHZFS6XmYRXq",
  "key29": "59QtnQih9tvzXgracNFzkBPRC3fyzYZZCCiR2bbRwwGSYthygx1MTg7zNadKEH8DZB2qd44BYzfGJt5CCYggrvn1",
  "key30": "kFMUayuCAUpzPPe33XQPHG2tapHBWaQ24UFVE9Jsyk7WZRd63sgkxuRQrQNnWnPHLF1Cv78hUvv8VbRXY2Kv67g",
  "key31": "SfxrMcpRDG1LWaja9AkcX1U874C7f2h81L5bhxYpfHTi3s5WHDsxWGmJcHYtDPZaCXzRJHa3PuXWtai3qx94TxJ",
  "key32": "3irBZycMrqHSc8RWR4PUA6Ds2VhimV86SnK4NWEoN1XjBKaT2iQhtGEn75thcaCRM8QtBMU6EXxWxUzN6WqFwrMJ",
  "key33": "i514c3H8bsky7tfSNhmh9niymnWwfzjSsNVYqYgfZ9RHn3P9XyVVodYSrn8tcvaVPF2FzsNzNLRFzZjsjXJKyt5",
  "key34": "4CYge6FuWjrnXp2g9xyJSAky6uGeGPsdrLfVWyXwqNFNLyd3qNxt3yTJydoKPNoccWj2529SSXegPxVYaSpK7Ni7",
  "key35": "4kr8RkaTViguAeyXijdPcsSvNfsQ7ffxd7Fpe1DzGNAtkxeR6ikpM87Cv7HckRSokRbXLdp32n7A4MQTzmywUBB1",
  "key36": "3LNwCKK3v2hq5uQYGDLWCHV2HP9R8CiXCEZksHvrPQbHhnEC2r23JZNmNNhRG6LJSjtFBZry9GU9y64bib9x2Rab",
  "key37": "3m2PDK8YBGuB6Xqke2TwGVs4pFyqq9E7Gpz4N8vCnzGfxxxTcMnkvbrpP9tNvUJuKertxfEH9Fuirnn4omtfHhLZ",
  "key38": "3oJhfWGL9DwUDBdd6djbWVtTm6ScxcEKjukWjTLGvqKndsXahXvCgrxHBqtrhDe6CNAhsm6Kryv9G1GESzBMTa1y",
  "key39": "47FpH8yXNjbcvFNx3htmyTv62sJVo9C7P8ttsiRN7krj4rFMJ1vbyj8ajtzRRQfXzEtWS6rzeuLmjhp5jHexqPvg",
  "key40": "PgEpkNkVmfTmztUcHbw4dkNbQe3L2Z7ynHRT65EfRa2XuBvhGcuFw4bptuVU5ySjVpF1Ghrvy3gJTXPZ4ZTtEP1",
  "key41": "2DW7RjGC2QRGM3nNWf7vnz3z19EeDMd5tEEcNjYXpfecGv2o8JiVMcQUgx4ZgRSYoAxSrBr5gYRduiL5hm3aQnvW",
  "key42": "2kUpQiPMxEYXT3uFjVAJnR6LxJcj1q8PGeMhuGnN15puKVJhJUL8tyv46zW9nP3cDZ4PZ9wk2RQ4oDFUzpQRh2dN",
  "key43": "mCTGG96JeMubN6Wm69WMJ7QmUEV7npJB1oCSfKFbc3UPtfUVNpspu5t7W65HE8ZFYVLFxamQsPrBXyQSj98Tgvy",
  "key44": "53ox57imVDdA8xuqfEDmhm77sR4ex6aZKRJUprpnV1i64wwb6MHJGbc9X3Zv3DwsFBqWxms3EakPRJmYUh9sB69w",
  "key45": "3TUQh9ahQ1A5umZuEAWuf85AfjnX387DF6b7GTFnKnhoRzunH2RGtCRsFhDC1XxsSahPRwKV9qYFoujvWVuFTYvk",
  "key46": "4HXYcz72hdWYB8Vxk1kKXXSmGfHVCTUfH9hNnSRbxboYATyGV5viYdeCrr3jUxuV6djzBwzUR9c4QBqnJ62zaWds",
  "key47": "5itaxajbsMBLXDNooMTPq9bgtxociNaVsyQ6Y5XY4VyKxLjDBPz9XQTmaX5kNXLFhfTfzst1MmaNYtXYZbZN7Jpy"
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
