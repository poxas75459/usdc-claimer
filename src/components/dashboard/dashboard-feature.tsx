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
    "5hL1NMpMSHacWVdV6eH2iyXC9t8SkodqKaFHFpBjzqKStY39JdARTSexN8rbepK5YFwaYoNAg2MPcipV8QkyhFBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dUx1tt1V7HouxenJiu1jq2ajT8BqAkzfxeMv9tpX6dFa8AKGn2648kyBU2AAFu83vsfZr762jstJhvF5dMfNLk",
  "key1": "byemxrwzBCnZ9A6jTX8t1fqSpxCRUeDB1QQrAYvPSDyyKobDDubPaFDPDapDyqV9B9uASgqf8s1WeMh6XTmWosx",
  "key2": "2v5YdNMNx9Ku9x99xrVSXSKdpKBaVpqo26UuWaB9E3MP16iEE75S3mzkNgoz3pv5yy5rx58qZT2662fb94y761pA",
  "key3": "4aAjPCzG19P378pysLek4tLR1WPW2Z8ucmo9y8N9sqHWp8SC7gxXBaxQ5XiLCvmr9EuJpFiDqeDd2GDLdvU66KYq",
  "key4": "5nNjX7dqGEgepabjGvcwMq8JyR4ULNdy4kZC2q4pCr6sK3wt5DHM2h7LfaNEkStMjK9oTF6FSBN9q2BbzNGsaH59",
  "key5": "3R5SpiCcCfhhPhjouszTaniVVv1xGDEmdwZJNmmM7dDtpPwmdEBxVd8KfsjETuB6yfXcAx54j7DoZWUQ8CF9eQmR",
  "key6": "4ZweTuRrec4q7ent5G8an7WDMWFmKXaDEcQ5CDth3bqUUaq6DUPEarNrSJtcsKrTz6MQ36rhrSvw4QCfLVZF8d5v",
  "key7": "4RTFy9CZsd4AygtmrmujfqtDkRbVo2TMcg1SK6aZPD3mTrbPc6Dxv3U5UVjE2jhf9PjkPwxrFgB1TBv62tq3rgCi",
  "key8": "imCcuQwCGJ5qaaEC3VrNoBKFB2yWuFNaQ6Gedit7RibyZ32WuspcRvZKvGiNo9tbdumDGfqjFcPVLiK2au7qS1y",
  "key9": "3Jpkc8JBn5TUzUvHWfaixpT1VtmdLeBVDPSQTmRkzyAx6t2tmkVMqvfdyRXpNCn8ipRKVD9aR5vBHBZCHdAKzgrP",
  "key10": "3mwXDrHUMM7GX4q3m6wE3UwJg4QAyYS2ySE2Tm1m2xeVgV17EFTqYWZEgmcKSpAUzaHqFrwwydGYBwa4YsqJkN9K",
  "key11": "3LaDVnNupTMLvHALLaDNMWH4MRKXC6REm1KjPiXF2doURPRwbZoYSkHq5XsnLdH7fzTA7CxE8z7EYYysF8KmqxAR",
  "key12": "2Gwu4Xx1RurYyzY2TMgpL7s9fu868Rvf1Zg6JQNm1xCPBkqMPmjQ4Apmiv6NVUtA2nHuttwGPJm62kt33Xu4RpRn",
  "key13": "3P9Qgao743kbdpz5xdP4Xz5K33s5vVTEV4t5BFya1jik3ynress9ETtjXffrPGUr8yLFWZL3Ain53c1ErqsCvpcF",
  "key14": "31Y11vrCGkoC8h4uVqNR8EHAJtPaXzaSMpThxj6TugK6fDwgYHU94SWbkoZbjiFTc8uLaCuopUr3k2EQDu3VFcJ9",
  "key15": "mP7hDFAyVTTPU2V8iS868PfkGmXGNtPMqvE2y3QF9Mbs233RqB4m3ZC4QLQ7SjwboeiaD8Fdf6kHLfiADw4kyFF",
  "key16": "2EDWnShbNGnDLokgQnkFtdFj7973xBZPWftMsuBqSk9vQ3jJqRYnGagN86gTmGXTNnSeVHoi3mi86FMnt89h8LY7",
  "key17": "MiV6ZHxHfiDdixj6iZKapPKz3HWVa2HF7UuDD9mZeWzkYHXPtkTugrdjtRrJJRPGFSWVLB38iGvDnnQexoCs3g9",
  "key18": "4SRHXvD74cANhNJaggSZhmaWVWMawDXskAjcsJLdW1EYahXnikMANztFKJVoHHTiWDXtwBCZ7SVS3fQPoQaJbRE7",
  "key19": "4gnXN7ByQLJG4nbp8MKFrZVprQKqat6YvoaLmDwniaGXtLi5yApFiokZaz3H5u1z4XUND4ZM7GXcXVbR2B4ft3tP",
  "key20": "5k52e1Q9dRBYvoqNQzDngpPnWf8NRaH83RdsQL8JoLTBK5Zk9e6U8R3BbaDwr6M1s636rxZVWhDkdjaLtUbLTFvV",
  "key21": "5UK8ucbrN7kga7hPY9g6P5YHcmDB95dS7wDQzuJiY9PiMNnxagoS9x7i8odjRMMBRvE63p5vmMxAa6RvJgysyyo6",
  "key22": "2CM6zAFzKFRUNqgAFoWXPo2CPWLrGqxzedJ3kauwPFgJQzkCvNgP8V1Trdmt8oLZMLxwZCHzGi2xVwgtA9BA8x6L",
  "key23": "3iKxzQtJghtUyZkHVR5LCe9EDodhU9FR6xGMhar8pT5joaDJhvpa8bZvrhtHugVpr2Pf37fNcZ4FuQaUuq1Hdp9",
  "key24": "4khjQuRVM3bqWSumWPaz2eASrc64qSMwbcvoCYJCShah1mqE7XFMaRW25HGyBCrCwu473jnWcX36YbTyLcVDHAvN",
  "key25": "3TBscfjFappxR8bvgyfxXE54RmQPCcQbVko1xx84zbWhVc5vbwVMZkKERpMozWcBPiX24cagQR4ANrcWEU5fPZuu",
  "key26": "4W82gfxsYxyHWwy5yuEsTznsZPurp67dutGpJRjLzMWLwSeUkYhMArvnt3H153wEKusPA5nqJXQVKAF1voxPmpxq",
  "key27": "4N3egN9WWZ8UPHmqD9dsdYfN9FQb3Euv663jdT3PFeXEbhpfedHVuxQdT6APs37nRu3YPL7bv23rF3uvHjVGPxNn",
  "key28": "2cVwsXCor7cEc8ZVxWmKippNpqMwPDxvKUSYnZsju927m7gwZdScK9aqkEcN13fUE7Yb858mbxxviXmZZd9ou4W6",
  "key29": "3KZoF7biUVKTrX4kwmBdq78yctoUNjnnSALHCD3M2nkJLAwmbrTgATFnq6K1kKY6JDEvbEwWeEUSYsjUjPjWUYTK",
  "key30": "3fTjEggp7dEpMege9rmRXTJwxiQ8wC8SjeUwid2t9UZyk4Zc2ZMLwRaVLf7j3Lz5hcnFEF3quMQZw6Ni4GJnTG6B",
  "key31": "4toenEmYRpGik67nYytA8Y9xN2trRJTPrCh664Goqr82XcwgNGKfEt6kpWt3Lh9eiA8mNyr8kcJZnCBvxpZqDkXy",
  "key32": "2Cq7eZ2LyzH3TpVdue3KFgcAVZS23FAD2mVcBSxFxAwSxwbMnuTs6vetkN6spMEp7skNBbS74vw9haDs7YXUJ47c",
  "key33": "3ASDYyryVxc2EEHLx3KKZ2EQuuHZ3sZaBGyDb2zE2d9sUezRmunq4DgmPbvwwQF9HSeQTiQSYJRZwBw2Dv2N9jyf",
  "key34": "3GgcCCnK2EF7yMGzZ4MdQHqCaZ38ndXf2MwE2H8fvtNwPSKJRntzy5nLRXZXN53XVBP1BcwBbuUDMreZiT4K6KFg",
  "key35": "3x7cDwNVzmbJeVvoeSHCLTmYtEDNJfboaWjTsGwwiuBSd7SVaGDnxPsqrmzYab4b2EE8hp9NA8gmAB9dxvBHMmGk",
  "key36": "YbduBw3XgQw3ZDYE8gAcE5erFBdyQA2g1q9o1u2a4dyppUVfTisP7gCCVpudJefUsaKaPB62CnNC1bmTdqkLSe7",
  "key37": "5AMfH3dvGzQroLrN8EKQxeRPYJGUGd3TgvRcdWtbkcUMcS9dZS1XCefB6v8TvE9LkDs672vg2os8TL35FHfL1rY3",
  "key38": "2t7UXeSoCLx24wyu3yjHfJgDzKHCAVgQA3EX9sP2WB8FCrrmMPHzeAFw8G19bTCD6RFyHCcFbcZWnTb9vdaAZcY8",
  "key39": "3QPjPfjgc6tRSaUkTd5CAsixRcq2K93axAycRUAhM8ru6LQtQa9pjMu4okoXY7M85JnvPL1WM4Xs51AiSvc2XRkH",
  "key40": "2j4VKeyBg3yoEsXemZBiUXUorh9A9xVzPtv2rg1HxNa5xcYSHTDwpJjRDZBYckDmpJzJdpfBQWQYHpwAU9QezYv3",
  "key41": "3VLvkm3CXpb9kB83YdPzg3QMJN4i5Gf5qPuhhvSoxiapFnFtQsQ88V6FqpA2ogbmXj43gV9Ahs6o7WBAzQzeXdGT",
  "key42": "5WArKCjBuv26SxpRR7HrTkHKdUC7M6aj2Q4HSMFwhZnVXc4RManiiuMD5oxkqcHHJHJ8v716jigsjUGtixBA3hJr",
  "key43": "5h5aYD7SGk2nwHXJbUrCvbqeBcqff72a8BfETHbRaGDqzGLnVTVXa1gGht4EQ8gj66RrTL3QeB21sutM3NmWewTK",
  "key44": "2rsZMQoQoEGnQo2GQHwAGEWGwYoW7gGQuESm3YXHQ4brnD4VKaxPUDTR18LiViWhVT32UHLR2R6fkMWaKZ9T8hrS",
  "key45": "5V5UGJQRf7oR1LiAZFEqrsN4fymXrxDQe5YwGM1GuvJM3LnWc58vh13Q4XqU7GhfoRa2KpbVaUPJ3CbP9CUjCyLk",
  "key46": "4dF5aiCvhUYVP4jmXidF5bEQt2UVcPUcbsGgqx2gEv6TiDuMAhTGAwnxvJzptkgTY5c6Dv8y791nS4RTGBUFhQUx",
  "key47": "4CZn9kEBA38HjkmDFbfEggqFp39MVSuHWKjXW8ecUueHMRgAnmsCCgiof4FQeCj5QAZJY8SZv9MkXDRJfPWggsZ5",
  "key48": "PUQXY6v1csZDEK93Zpj6F3s7dGzLKxfChK7CyiqQW4hDdzPxRxZfEvhcpBWLmWcJoGPV7yCpbLgF1StBPy8QWk9"
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
