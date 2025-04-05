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
    "3Bh8KbVARTfoKUvL55EV2pL4F9yKUJZpuQKKp3vLbZFDJNkMVcEyMyPqUYBnV85joVNU8ZogxfSGmVbzEN1Csm84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdMKCZp2jvxdbtUP29AeQcCEAfdHiv1crrRStEVJEMK6Xdg3CXH2hmBgBPbdkUMyyshde99FPeSNgMLPNTJMoGD",
  "key1": "3fM57WeYiFBDmYYabPgGRufSnPQd8x3LNJJTkRGHJBLwqDLTLYG6WMJzJ1hJjB575jKhoaGbR4rRetynrvXhxfWP",
  "key2": "Az9RyKyYpHmETiRHcemU9eytSpXkYoTdwJX8m7hnjt9Lq5qwZSabQoGZC8DDheGz4465HFMoSkwZ6Qe4zaPxfcL",
  "key3": "4oJeSF3fYFAZW9gu3hED71Fv3KTkF7a5CnaeWvdFj2L8N6Rezi3r3xhA7Gh1SQ2669bfMax8Estv55vmWDycDDA1",
  "key4": "57xCyzHsvC53Lk4pW65LcQoRJf4RiqEEfenkRueGhpwZgVsRoh1ypfsRYsBJmJwCuooqXPtkqxzXGquU6fqBMbL6",
  "key5": "4X3cU94VcHFknGQoXJE5qiXaifx6KjtY7r3eHfQaY1Pc1xst8MufcpayDokMDiVtwmuGLwN8SoicFyhEY7Mg2RC6",
  "key6": "2cbHtNqXzj2P7x2M5piMs6oh15Nmh4viCahZyD8yLTfrabsigXNFD6bbkhbQAKu88VmTgfGDdRg9dR3tCVmnQD4",
  "key7": "CDbxc94yZPY5CtjA6GfxxADEmaEkhpCn1eyyjgPDw53p14SrQbAYoDSMcMwWfdDrgcMJJhw5D5b2axrmjnvasfJ",
  "key8": "44PtR1PLaHW7eVfeKi1faN6wnUemAMDDRmGBa7qoAw1YW3CNmjprZzpnPExWvximErJ74DnrengCgqrzarR3TgKP",
  "key9": "3TjJjPp2gLmseLKMmkvGTbGVUD8TyMugmBDj59DaYiChJZM4P91EczaxCsRuqsYP8Zu9TzcfXwCJ19Tgve1ZHWxW",
  "key10": "MkptYN1sSLHhVMtMYfBGrDvBkLzXMAQURatdcEZQ2aYGf6wBbmQakmhCiWvi9naQajGKRpk6aMv1qg6Xiu4J3yc",
  "key11": "2BCQj8UA6WEBVNWwi8fxvGspvaj7TaY3RLrfcRZ7D1w7FETz4wigUAWdNgbN9L5gj1StWrfWUqD7mUSod25JqpTj",
  "key12": "4VMhUnsZZXFoypD1vu6TaTRos76mLuaRswsDraJP5xnfzHqRWSqDRpbhw5kcL735oWeXR5TDjyVoxu2zUCtLLruF",
  "key13": "4vbWcv4HwcM7qoYzx4CCVVC2dNA3qnCRPjtheZdbk51uZhiGsb2oagbaizG6jntx1GWABmMGLMgf6m2UE3ehrgoW",
  "key14": "5dAXZd5BMChbesH6HvCPbrwmWy7MJqpWjgH645UdGAqYgem5f871DkLse7ntM4apTp515DLGq8pUVgXfc286hkQ8",
  "key15": "5m6btDgA5WUnC7DHN1hmfTEMTnfLy1FVaW9YkMwG3w5tPq7cp7RBmNo5vMoc2iyUFPZ36sA88zpJc4zkgR3nijgS",
  "key16": "2s1UhCmFmYh1kiMzpcouj6hh7Ajjw7DAxq6cLLVH5ZjowG7dytWjfKHzGV4cr2bhWBoCDQtMx6bAvBMgvuhkznkH",
  "key17": "4SVxVcMfeMzg5oxtTbmBXCP8t39hPrW41gLGq9znxXNzNZh4fMmyZ1ejekiiRz2FfUfv25AZgTRPcW4WMPomsgYm",
  "key18": "5iDFKWrdVxQgi2EdnmrkhuVq5qkSQU1pSziQEgHbBnZSRLQCBwwWosK6RVkQkzbYgW7F6YNkSRWpfazZRVnxzhk7",
  "key19": "2iUhw5Xd4h4AoS6tFYuLMxdzP4sjPLNBdT4mrLxxYrkX86nor1w3CxERuUQY8ycUNG5i8dywmmJ9K5GT856v8ums",
  "key20": "89eqGWdphpL15fVmMGCqHc2xXpu3cqmdtkrkiXCYTyayaw3Bjj4ynNk1TvfmhMvLE5XaHa5F61ZWL29x1czR9fi",
  "key21": "5MXCH6MdtUP1T2LajH6v8xDaooSDVJeBHxXVdrZ5Hh3BioZ8QeukJpgKMxvK88cihsH5Azsfd9pTyY4R1CMdBc1n",
  "key22": "3jbfksJzxUXfpw6j7yoymkEyX5TZViixqRz1RMaMDodeqXxX1tSDRcZrgnQvRKgT36zZCsqDDonJrQxoAvdDKLtV",
  "key23": "2613eWcu4xyczDNJi54BmRqimrKAp5EDupSRmK9USjaWtN1r7XMoRmrAiaDMQNcSnDfmB4P16WCNyUBkSmAgr3g5",
  "key24": "2sebE4SAd7SYK7itqP7gycU1qY9jFiDgEfVrShP18t8irrH18SpbJaxs9q9oaTd72qPJdmQ7dFsc8Rkr7izupRRk"
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
