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
    "2gy8a1zqpMvH9yjCvCjdy3Saiaak9qA3NzNoqFDHeqJnjnEFQpaoRpxK87DFGwZGMtorxMDLQQ4W5L8SUANMn4Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LswJcCnueF3hzhPmpHKYtCkJuJPRhNMiddyPoNSUQRYtZRDwvb7eyf7YYrGAthTqXohKreqXdsbSF2UefhHPCcq",
  "key1": "3S4XEbT8HfGtYNxJu2LYEPspEBT8k1QDNC3ocqdusMDT6x22MpMAd5dKk1bBteNdzwo4JiLiL9qVuJwTTZ6mBze7",
  "key2": "4fifCZWTgWyos83zKiGKYRgErCj4TKWhTPcQeuTC8KLzoSMFECTcPNWKGknFQdGua8MXJNTg3pnbDimnLJDHPRVx",
  "key3": "3iiTRfmFfG1CUZbzr1oBL5f7CshSZMf74Hr8g1vv95Errid7Ug8P67iHHU6u8bm6yKqyH2q6UQRstJs21YdP9YUa",
  "key4": "4QRFFJNoGg75v75thqfZgZUg1GbctphSRKvf4nPJnP9PmXMDfngPftqK1N63L1FG3HUqDghwdQa1oCCt7Vr3ao5v",
  "key5": "3umzgDfv53ofzWjB6dnkkwGmbjZDvrbzkWfyJ7uHWsCVp5C6Lo98DFCde7kP1eQgmZbEHbLzYqeE7tPVDJJKidaG",
  "key6": "65wNnBKH4cE3AZUnMXVKfTLSuGFH9UbMBpui6Bzi85mGP1Ge4ERw2CMh2uBthrbnegx1ppn7FK4VXCaY38us5ZJw",
  "key7": "4VFp56p4GV7EDS3cMbQ1xLYjaaDnZJj3EirkUvgB8V4fdmmSZMxirSLF9q8tYs37RikusxvTmBPyKJ6R7nV7A1M",
  "key8": "57skzCaeT2uhDkVLDekGJLMhJwisJTRk191RwebutXWCFo6P564Wuvy1rjQLhS26fWzoCPLBo6ricnCMRxWaDFAy",
  "key9": "5NF6SufJdTrKK19H9YLwrXeWdDrzPUFEGvKzgpnoAezuDWDbnfVBQjU2nwGTbdDq5FACfdev5gRu3sLfo8cdyBiz",
  "key10": "5nSM8Tc4G1SeYFMMBXB1w9XS7ihN4jvznBDcHYKkycEgnd8oSg51uzfJkg66QQcBZzqB628ygaVSpRGyD2DxSiXY",
  "key11": "65Mrmde1TM51FayHhLvKyWa95qeE5iesMsoKXVsnQHYpDcmAXKyWsxykrhtCtMXsysm7rPHzHDR9GHS9NgDcMWJ6",
  "key12": "2kKcuSTiQcmGpRJqaWk2aC2mK8EBovnXwJ6A1GEZAQRf7sgj63XHrFCGG7WAqiL4Afq6hdgK87X2wvvf2XqxtpaS",
  "key13": "zZynzyizQo21E4Qg8d3tofwiKkZFDyVeUrCZg5aie3tDVtouUb5YSJ7NgyGuBkD7aQhMUGchG1PV1kyKDe74Spw",
  "key14": "35Kjvw6TngwFJf4edhWKxQcRwnUgio9Q54YwU7EFGmU78wgEaCvW3ThtvF2Cf5cLWTEriDGivV94sRmH2QKm9ZnV",
  "key15": "3CAV9pKexchTKKLEXdF8pZLQubaUK7iZz1aHqUL3fgz2Cq2NqTCj32zNXd4yT3MxZzqRfzUUWnFBgZAMAgbhYEu5",
  "key16": "3C4a6pQRYH3HFXojpLQEewVyUUJM2fadrrrL3u1CSvqYvJFy5oowakVwvpWH3Vj7MLnsgV4NLR5fxNt7BoDdNNEq",
  "key17": "4ZPPo7vr1dDs16cYkLEoaC4EsgRjjD1rDM9PBGq2uh2WLjALJTGjcnnv2m5is8DaDbyRekQDn72P4Yg9APXVrA5f",
  "key18": "2kszbbkqRJW1SPuf9cM5YgXgGELnzvW1QL4oVBqP7NygqQt8NgdjFA6v2hQ3yYuHmtC39TChCrysTrffW2QDMrNr",
  "key19": "4f7hpcL6J7MczrDo7radsG2MDyTwzk4SUXTEM62c6R3nmxuTWwePD3PSHsUUf6e8aRWdxwKeNG86B9yGkNQGJofG",
  "key20": "5Qmn2kptxd6tPTWkyK9M4EtDuXfoyXwq5q5XgsEZu2P7b1x7H4DhLQDcEHJADiRePCqtfj4Sv5vrSeqYwyADQmpU",
  "key21": "2YoJVqSV1ff5sq9JwHNseytM3mt8U14ncYvfkYE2DJRWfyRmHbLPbdKz9PeurUpeJoYfgDmFGCreTQ5Muo2UFjyK",
  "key22": "xJMbRShzkeeCYTpYuMykURFmsWqnUMK3PKSgF8kSv1BF4fQtL9iTRqJenPkWwMxhGwGsopNb4QW13cY9sZvgPDb",
  "key23": "LoQsFRFNKpwyvbYrPqmB1CHZvHKAoH9Nt6C2ag7hbEQDcEnnBKM5WzxKLk11M8CmpKbMpEC1a89jqFLuYFirvHh",
  "key24": "4hm22x7frVecyz2JAHvAnMtB4Q9KAWVBWLnhQ9ZFNAy1iMLX3bm6ECXbHfSJY5kLmbiooAkR3irJyAZMCMibnTMM",
  "key25": "2dGMFaUtwoGtYQvfagYbGfqrTBPzSezVdww2Xhye5GZwW3XPTyU1Hr5fRWoVMshN8KQj76ktJLzeeTDNTU6rRF4U",
  "key26": "5kSteDRoR1osc2d6Z2QGjfweqQBfcvahuw8qkLLJYMNHahsk3uXEaFZAimcyp28NAuQctJNyPaWoREZBR7F5VCnu",
  "key27": "ACwD5uJFoEimwm2S6LJP7Z6Tud3GNjCCDNSPg2LZktHh9SnBF3KysW2d8BAk1v1PnvRUNasFdgtFjpyzxK1GjtX",
  "key28": "b3G4aSn97UqtW2mcUHuRKP2uHwvk8abxbSGCNbeykiFhcC46vEUfyegvW8jLykurqTirNAeeQmnt1yJ24yQq5Qi",
  "key29": "4GjJfp4q7GZkRPKV2wMv93Hm1jLQQdhHDV2arG1PPVJsB7UAwFNqKnAKAjViNz9PYh1uzdu5pPUeKcaLeK9VS9bB",
  "key30": "4FNdaD2mfTQCHQihQvrpctPofM1ZDYe1zyQamyPyGLZRB89x5Y4LHJ9RLenPNJKuQyxH9PcEF2NVSfUSQFjk2uHt",
  "key31": "3YRphKhVn4nz6rS2gkV5aMyxFsxpEQ2DAwfMo1maDpQYJcDXq5rQA9PbhZbpmriGR6vtPhs7Mkg3uo7myATGhTM3",
  "key32": "3CC2wBFs6Xyp1JmhbpKENokD7ByGsNuhYZzdCvE6n6ywbHBpvanpSg9S3hPaRdbEuH83N8QgKfHUMcJiGRnhgxUa",
  "key33": "4NdtikAQGUWTn3gNwSQ6sLe5B2G5XZBxx4GVipNDGoyoagxrsUjtZTFsKeRLBb1pFS9CNWDBh1NpGP1xkHRbkCrS",
  "key34": "2QcQtekZyuPsAhhXTssrnFnf87k2kMonCaG15Yh3JFdr9meZbmHw9GK96t5okTcc4itHWr7zpzV3oBmRECWzrDCa",
  "key35": "35EZvhdzg2gB7mneTxdP6ZPi8Zts9kseDF3RScDC1TPqiaWAwfaKQGD6jcQqyBmBvykC8gFdhDeo351hCG61Hoab",
  "key36": "4bRsm42H3WotkBDbMUntC1XcCJ4uZk3wGSnqvBoRcHr5SXoHDY6RJxkHgyBfuXpiffszcsWCM9K8oYTUvKp3tHve",
  "key37": "2dHY1feDqVPTbs5SgDQtUpSWQVgBtynJFg9vCD7c9tTdVQ9io5QsXaYJU2yu98aSKA6QjBuu9BvPPY4PaGKRNTsd",
  "key38": "49LsGCSna6Cbsif3UogrDy9CpTkVzwLNN6FkwdxTRZVXwaJWHaGiJjwpVEKkiRZEPk1pnpReqK5qBNVAoFRhjvND",
  "key39": "4gki3by9sszjkdM3uGFaRsUkjUVdvSRF5Z5bzoLz59GtxDM8YcUiZVELnP6YTj9UKRYtzzBvHTk67qjcDYkTq3Kw",
  "key40": "452GiDcsymrmciUyjtjBBaH3je988jDbjKKGnfxxbzcoXMW1WCfZHV4nEKJiqLnCdqCg6cBkzqL3wjQE2gxSZJah",
  "key41": "3ka65s5a2exMVLrgTctmuwGi3aJT4cxqAbTr8tqwSr7T9jCz2VUktVfcK1GQESsnZYqYS1j2c8Yk4NP4A7Ge9T9L",
  "key42": "Cx1uFjdDVsLZoV3rUDCr5NEzo4Y7xMWL1DtTqZxW45CYESwRU8t43QDtqCL4hxsVSQDWQCJmsuL5JW1W85aqhSG",
  "key43": "YrxyMU9dyoS8SwjePTmmTtMsy61MZ4KEpqg6JjZ55hxyibV6Ff37zEzrYrZYWiGd3T7oFuESShYVxBJ8UEQJfNg",
  "key44": "5494QR2DWfXMd2LgQLZVV9LEgKH5nEXC8wo3WJXnUDCfrcB66CodRfa1EugcBtLtiD27CKrosjMqhTrGQENcCG4A",
  "key45": "3FLJe7SxqRadbrVTgzswvnkcYhbpiqMNKDjjoSs4WAjvS4HbvzxX58CqraY631wXBskxuuz8DpC6hYxW3m27LmNe"
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
