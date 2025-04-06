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
    "4SS3mFxhfupGGmwxGtcnV44PK44bznZk7W7s856UTo19Y2vzQisbPA2np5VPjggJBjb2ss3cuuJazT1hRLPgppkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Nr6sJxdzfhJCzh9qRs6sPmsFygWe9FigrBtzbyq6SoGRSzakpgs1ekfvSiJ9WLCdx8V9XnGEDeNnwM4m2EQU16",
  "key1": "2uF56KxuJ1msZQz4gT5wxd6hGgD581WZsvvCw2MUQVV5bZV2xav6bzd6r5BGesckg3NMdwp9oKfq3wLypwDbWSTu",
  "key2": "28RGCvR5eyvYDpzEtYEZfqJtDfYS8YnPjwBjszFXURUqeP7KaihAT2JLUiknMUQLXaVaAvMNrLzCAhnFj25wNo8j",
  "key3": "2vyHqLxKGakhfA96fLAGNDccmLFx563DmcW96dRBq3mWAw5h3foBqrh1c8qRJCdAopxP3bDzmAj8ptv1h6DjADxw",
  "key4": "4kxvkRqDEzQVYQ6J6TrT2hekyFrY1q2oiCMdEFkPmk52hdgBSLnjMeKbtkRerrhdM2tDPPTjEvyuqUFip7Wu2qed",
  "key5": "BbBN59nNHzdG6ZEFZprq1W5WZ4Tyr5oaeDMXBaCmz2tt98UFMju44Dt2mrA281sL8mvHBkpon6yQfswPq4xhtc1",
  "key6": "2nr1cZkJy1EEiLPAiTj37RkquRsvwSb9UnioChhQQEsN9PL8Yh9hhd1dc5EDGtxgg3Waoo6pD7CW8zM15iDZ7phS",
  "key7": "3aJDU1Qwi9oA6TidMstF8ii4yJZE4vHv3fHfm67tNp51nD6Yodb5cNVhasG6Jv9QY6ZB7zvBjZP3p43cZAdU81Z9",
  "key8": "LwKaXZQrQWWAvWjcW6bqu1KMEJi4ofvkhfkEPHsKDVx1bC3MbcaAEePG5VBc337YsBULMS4zoYNgHedN1SAGQDg",
  "key9": "HhNasB74Foo78iq4phL3D4Ki53mE8bNQSU1XZvj5wSb4X4FLCr2LVKtYmxrJAwFXSfZkZMpDRt7zkdrh1mioszm",
  "key10": "3fqf2US1W3zAoLqta5kDhHuR4hp1Ci3ts2A3HXc9tYz9nDQi931ZM8ZBbANdRaaRqqrRmdhCC3kfQhGTK1Z2VqTu",
  "key11": "SzcAAXhWJSUKLYkEkuiDKMhA1cRELQRghRRCLpMqYFgxyqUCfuznrj76LRbJ6ZBRMjjz5L4qnt2XXwfw6ZUGM72",
  "key12": "GvNgLpY6ns2TkQzhS59cPfDhQqXpEQHoBgBe4WtWcHxpzna3qD8DDkHHNbE3HSH918WS6JoL6gB7JRy7KuvTmmp",
  "key13": "2zVsjxza5JUwSvLYEmVuQkyJYCqzcgXt6nmGnwKjG1mPrTxVTh61TVqBqJLfSxXrLwwW3Kz1M8SsDaB6zV8z8rM9",
  "key14": "2ghdBBUogVogcHimFLxDm4f9MMnC6ZvAqBJfik7JXgUg4QJTuh4KrZbPYzDVhrGQoVqk2ivMb7TCsTwo1oFP4JnX",
  "key15": "3dRgecmKJhyeiqbBuRqAtaD31AeyYNhY3osoHWrrV9M5GeV6tcndpmqkPdLeKMQ8V45fPxL6dtLiKA63WD8MSDR8",
  "key16": "2AWY9ZRZ3k2UsJbPn2hK5BKEJMKFAMtZMfZKtFvwtKCkfrCK8mrfHxo3VBLKpYzwt7tZHvA7FTibr64JBhkk64ba",
  "key17": "4agrHthtAcRkK95GsjyoBMkMDZo1hVpWnkiRKd7oWRrsr8N64XJsMw2hdCZDHnEVi288FFJaXzNz3Do6MdJr6rYG",
  "key18": "5tCDmaGKkrUkAHPqKUyWA9UoaVevwMEUcRXAQfYBH3WHJc2bXYZ2dVdu4Ddt45gJbFvG1VjQnt2pNU3owuZ1KKni",
  "key19": "4YhPEZLZg4UPxr8ZNyda2MWGePCVH1mZJUBjuCKpuWf8bDscDYyaKFVyhwg2qdpy5nMhyG6sEpCqnkGJ4EVxbRMv",
  "key20": "gWFjXgaAFsXqgDqwvfxaMCNMntHMH4EznNqEB2WpwgsqbVoKG7zHntv5YJrAmbMf5bekxjV8ah3x5jEJFhBz8Gm",
  "key21": "5kxsMDYcpdmNKXRjKXNJ1jaeGFrKaLMUzDKszzxyrfzKU5vxbmaV9t9bhL5UVSm2GjpGEyJJt1mY5txniCwMWmns",
  "key22": "2Jukr9zxPA17ucaUeLXK2XCnHnyXrud5vVb8yM1RrXS52JfQ6bZU2rdmz5185BSQBQ8f3xonJgKycrD6tec3dJko",
  "key23": "5HzSBCpSWJHXXqYt7TcHJTnwmBrkMERcjPR8q5if6WGKM58yz5FpfSpQjiYSWodt8kTXkzaDdms4JU11uzpMeXSq",
  "key24": "LhYiLmDf3ujxrWSv7kD4buVwAeBcVwu1ocpntSu9pR4PExwEQ9va1NuFc3D3ZLHps3Neo3ivGaygUwzz1J5eM41",
  "key25": "jQeKjGbLsrMBw2Qdsy9ninEVH4dKHy1NkyduaX7SvNYbwJLT3NuX1U8qYvQ4msMBj1yhEHnAVeopGKf38D5vzd8",
  "key26": "dXDFWjt2GKTgKzU6BcHdKhEFZVPKXs2YPFd3w8W2BNErvwdDfvkzgKWxYRj5HBv7pay8GqQwnxdWp4V8tqsipKx",
  "key27": "4HiJPPmYNTJHL999ipZmWaSgox6zDn8ms88WukAVQdsQKU6jCJZhgUR6u7Vru1AbQ2aqRzsUfZiFHnJBPx1VMCyt",
  "key28": "5SuBBx3c279uweQboHPAWHd9BYCiGtHDmRh1gkyULyVVgg5z9fxPrvw38HWZwx2GkEeR4bqfy7C8UaDW32TumM8",
  "key29": "xz1pZGkVYxKhGTrqL5iBRSk5v5gvHyhYCd2rhuNwntGKcqc6sFmL5DsXVsAyPwSd7bi3wjsZfuB35nc5T8keNbf",
  "key30": "3yzHvphDSLsw9UV9U6KfVcTbUC9exsboS1QhzCsf7i1K3KX1ZyKBLGMR5sQH8uMyzFGyRrCMQteqsszgTXGZWrS1",
  "key31": "aGtsmD8WRPkgpwkXT3P7JbZGhtd3uwAAMR3zMsSEF3iXGuGdHNHYEEhtgexhDZuCEQNDUGSrrmccebe161UNDJW",
  "key32": "5yedpegVromtxbYGRGfotnT5N4DUhtatzNPDRW9Qsm5N2GfnjCCbwaG9LnsAaFr553USfBTGf6XLjanPzuAMrpJH",
  "key33": "62ajgg39V3S6DiYRGW22H4SpsE9tnbEXdiZYbGUTKQZVg1BSyt7xR77B6neaDoE7M9FVrMdawGcfrToyZLB6HcxX",
  "key34": "4SFSpYngdfWVinLBKmXBvdEyZGzTi9AsYragGNBvmw2nVL8UHMHpvDN5NTHdt5HKHaTG1FxZYHAYEyRkH8NaSSCL",
  "key35": "D7834LZij2888C77MVgrqtGTAi1L1rrVPHGzWfue4KmbumKt6wxtzUa7n5dHqa3dkrv4eFDtLPgk4f27v8fXbfQ",
  "key36": "45w3Bt8oA9aForqNmiog52C57DQCmPjHnfQ21y5ezNRzd759PJe2f6WKUg35xo9ai1iF34jBLqBQqR3WEmQSt8Jk"
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
