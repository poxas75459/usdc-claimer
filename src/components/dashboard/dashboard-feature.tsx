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
    "4EPe6nN2ome16joE42kS8ncYEgYqUF16k8wnRjZL6Z5zcektPcjfFZEA1utgkjQnxQNDQDRUFnepK5EkJ3LynQm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bd3B6zKrySnh8aWLjU1rhTMdsuB9FCbmw7jbT1cUnEjjLCFhXLZH8zH7SB39K4TQRCuSmp6XdR4euz63ZYFrmxd",
  "key1": "3m5zeH9yMxVqD7wtMTAB5MmetimECYndFNiJTxWJnD4BgR89gcpu6QVsaCpANjsmjpGTt2RzGub4XfcJsmQMiTDy",
  "key2": "4z8oiewdEpmsCaGf34oRqrWr8BvhaBbvMHmXtpUERoUFsVNJUqBRMiBPbRvvHWXfMuN9uVsPXdZsnBFwvtXXbqup",
  "key3": "qwEc2Yqrbtz4Xk25bsY1tb1LQu5MUEgtHdxDLEvQEW1NqqppCC4KZ3noXrgr8Z3YYboiNbLBsjzDPHi3R72kG3m",
  "key4": "25645Y956oehegyPxvwE7B4ucz2r8aeW4SWZ6DXKD8wrzeKWtZBt83jh6SvYWjD8oGpMgYh5vLYpNs5K454PY3KK",
  "key5": "pvPEDxngq1GkGC3ogzJRxBaATKQpjbwDvd2C1NhDqo96F7uvUJffzagYaB7DU99UvzVyiXf5XRhHhmHHAy3wyge",
  "key6": "4cvXziUaPHcg6pMYQ57eTvRnEAxAjbzkjpDZ7xWmoBAeP3iu2NgVQhYPUN1G55Woqv83Jn5adDTWERaSafbvHMtL",
  "key7": "5MmYardGghU6xTctRkWmGZ9FNYaMikhALsqRgTbVtA1C1etpB5uDErdQs21s2kmD2G9hRzQREhsQN2xPLxJY2pgW",
  "key8": "5Xu2DL4QscUhu5WF225gxf3bXwU3sSt9Mr1ZBgSiLPdPnPoHYUZthguFBfM9exECALSNnDsJrH1mAsrhPjxyRwvq",
  "key9": "2dBrGXpGjPGYKs5U8N1FVWX6VeUK5zT8seAi8A536M8PuGdaZePH7cPkMiCghCYUzLSpLC8TgEq2iHtAkktz3pE5",
  "key10": "NdtJHgufxDyqEtzS5BACu8q8PoWbi6UpPYwjjYtsMeN6i3EabXkkNufbkfqYfAU3DCvcMg9p8KkscTzp7ssxirj",
  "key11": "4wrArX42G8wgygZnJMRHbiELrtvw38NbsRRLyLfhU5FrDrQXhf9ATdJu17dy9iMRa4axeDpyRKTNmdMt82U6DiQz",
  "key12": "2cbothYMaMkbZJB9KEfwHdiHFr1iHpm25NxcJcmgwr9shaxg3CjUY3CfCBv4gawd8EcTJnF52NrE6F9CD7DZ4tje",
  "key13": "3BcuvLAeBVxGXkpmu69aP6ZCRei5NLERWYZ9EX4fPd5FgCyT2cLEjydkDrJKVPGoHx31TzSpbw7EG45a4bWpXkE9",
  "key14": "4Xo1pMoH42UQigtinyk9cbx4K8ZeteAD8WLndCwkL2oUKpzJWHmuhg9M2fJAtTnqRrNww9ccxWQNbCeBJJA7Ls1f",
  "key15": "Q4hKj9BmXhCCZatfqE7iEKppuozXmpwWHqQ8ryrvgxNpxfYVgrEwSQJ7Zk6avSdZBBvmoebkeupioDA9XPazGh1",
  "key16": "5Es2ZaKmbcWuUYiCqRXEivU8d9qisxDCEqrn1tSWurRB1GpzExQYMkjjPrgKFsGQYEpdTa69WZWQ3zYDEWiGdT56",
  "key17": "466RJrPtiJPaqBaj8HMxzcihVxyeueJYPC6xHLmP7UYkB4RQQCeaqwZYuphoiwrgnEPLc3a5M856V4qGo5Gnsimr",
  "key18": "3Hb4TdX34BtXFGobCsGzcdiaeXUHhYrfEukrH59XnmAVd5gUDmp9mcAopc9tq7k8w3H1xA4Ur49riMKhxiuokNhp",
  "key19": "57CpPjx3iN1YWvvqWCtApoUuwRERWWo9LynMRfcAPhEbUfoig9zdRJF4VT4Ds5mVhKV4gWyHsxeht2jiikqdxt9Q",
  "key20": "3YwLPEQtabLdjVkEYzAjdF59rNKyBwoscd1pKQBwE9xcMcz8Yjyv9oyz8JcveTTKzojzDVHSoZhfmN4nLUyNEiKq",
  "key21": "2gCJRRAdL47sjeJBNShnPQ31NpTFG5jbgfbGDGnHS7CiV9mRRQDhnHrPqtjWJHi98JquJMWNzQ8hsSnEMznSV539",
  "key22": "4YY1KUhKGcpvPBx6JMN91QkQELUfnf34JVm1QP9iGVtvR4NnryEWYZU4vZLmVGSRft6M5GfGpR6ydn96n4vgALso",
  "key23": "4y8FMQYs9qmboY9vQD8h8TkD4d7BzpjkmiozPgBj2TEqxJXWbwgBV1CNhQHWemsnEHBoYPYGEoqHezNsXBjKTovY",
  "key24": "4C48tNG55oGjRPLexh121WZUvWJ3JTr9v1WuxW4dw6bokriuNdZTgKQFm16SJZYU39pvnkE9Ndf4f5JrGU7aZ5hG"
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
