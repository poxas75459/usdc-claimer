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
    "3RHo7qncut1qNE45NMh6aQASL3FFqjVoPtbecvRJGfBaqGEQEWcTdZSddBAoNHyjMTX4dvXd62Hya9xCbM1CjK7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bDJiVQdY186436ctWL6Bdi9ktqYxgQyH5CHzUXgmu9pkz4XfkWKT8mQs5x3hNJTdyhyLKXW4dnM7iY72FY2Tr3",
  "key1": "3e2XxJgrb9nJ5neC6jEhegCKu2Hr8QM2S6sdK18bLqbZTgyCk4xcd2hKdjkjBK3EX9Lk2aZv3vxU2YFHxW8WYv5s",
  "key2": "2Hm4aHSWyKKBjZjBJPUNgXcZAgDUv5vFF2715apD585rNgQJqqyeBFvisDaSPWVhWedd8HRbzxwCHEf5mysBgfdY",
  "key3": "2hbkVCdrjibD9CYPT3c6B1WcVgeSaJjvTycYXvVGqxAjzvdHuAdi6cXCkYBFfoc9tcokBNZoRav2PgJPwT5jSBu2",
  "key4": "2nTLA2dPwAsVBJkYA4UaiUDRsC3n8p5U65M6Q3gSMb5ZpR7Gs7A5X93Hq36a15ygtp8mF4qbAvhZp8zN8Qm9NHHz",
  "key5": "2iDxMS1a7MHtt5MT5W9Yp4LDeriNUmExvfgef6BPwNrtGNzrEg453Hr24TAYfPn9NzE2nUgHshzq11FBHRwqh2WB",
  "key6": "LmXQswYJPQMEuCD3ARu7KrjBShP3ekmU1zVqDquC9yrtFnbeY1Z4NGNK91Uq5EifDX1t8SatUA1DPwxzwLfna25",
  "key7": "3wGwGLZx4HGV8gxCYZSLyyiC5CGciGTWYft1zusCR8CdZbxwBKV9oY2uU2i6CCh6LyAj6CbV39XH5xcRDXBsVjAd",
  "key8": "P3yD9mNDedUR1EksKRnnGEXQoHUqao1LLN65etw8yPZRpuauoW2TXm3HZs5HdLc3W36pubSPpdQ9J6aGMxb47Wp",
  "key9": "5cDbKoLFmG1NLUmFhZZDCPsqgLRvWT63wk7FW4VV68afJGK4yHe5hRGeEBJo5YzomM5NCZNGesJLN94KzRVM9F9F",
  "key10": "5RXkfE1wm6GRnF72bERtR4kqrzhH6jqzs3isSur58J6XCi1HDWrzXwPXmL4WsxNFUHtEp2msdu853q4BAxLsrNjA",
  "key11": "5t9big8Fn2e9HFWjraRS1zYaUU3oShQR6foBuKjWcPAejb9UDEbtoFsSU8UEGwf44Pc2FtiBF4JUYTwBRFNvgq92",
  "key12": "3HLAx5XV4QZMGLP1uPTxGUWEvD5HWFRXaKqCNjkgqxA36MkXdyTXFDin8TeDRFRygP4stdEceNgH6UgwML226WKe",
  "key13": "24zh4nGigZv5Z9ZLVxQfvkJhxSSNEVMEhGSR4oc3F8CYBsgAJ4X8VWMVWJAi2dJTmNd1ZQ1LBxXMcXMnaR9oMqek",
  "key14": "26Rm8ESmKFTxXhWTr8NnTEAhADd3nx8RfzXzP79wBRUpjro1T5jT5gZReHHxqUB4isvkgXD7qjHAuQ4JfbxyKTVs",
  "key15": "xmkR8GsoEKK6NJXd4Hi1TqTPUiBPkWi9aHrkLxvcE9avamqRJC5XexcZtyaud2q12KGLxeMCmRrwjHEN32SPRTL",
  "key16": "31xdppKHbhfcmg2opsoXhGyx97RNPf6B727kjAaUeGuLUpCEf6FbgiDxWs8aAT2naZUZxotjSkX5YrfgjQpaUQ86",
  "key17": "2LpuApfXzV447PN6TctJnSigJpzWADS1x8Z4hxkbuyBcCLJCDTi58ofdjhzCTPx6PS7EkdP7fFyNSNN1rFi2wGPf",
  "key18": "dgHiXYmXWnS52AaPNLHJKNePgkRv4tGmfBtRhn3niSVnMhAPhsjuSoN53SiTkDfojT2wF7STkpX1JeiWp5WsCUM",
  "key19": "5WYwqAzirbaNdnREhueNdisD7jz1hV75DcDV1jxoo4A7hYUvkUfuJVTCkVnTvUUCMXenUGnwFx477FWfdtUfdEcu",
  "key20": "4Qhiw2cFdR8Ked3Hwho552wqubbs9HxGY35j9euAt3zSq9vCcR55vcbMtCN3JuWv7LqjLqtb1vekUGhbC9PHGXE4",
  "key21": "2VYn6uMbt8pk8yGmZtDJ94eujxgpVFo1ygLNikpXxdqBnFavKHD1YNc6xdqZ8rtNrZY5aR2bPVWB8W3awsgKjk5u",
  "key22": "2ojMDtQ2tMXBc4X3H1HVKPp7pbLFbDxPc16YPV6VUYYbWqyXdrnFaY5mpBfceKUhXiMn7CcfYJPjQGbeqokNmQmr",
  "key23": "2NkyqxH7Qw6JmGJ2mnqtTb2QJLV39wMmAR7Gt7TMLxQQ3y1GfYEVD3a9DNTdEsQHpkq7BqXgjgoXeFF8uQR9NVBD",
  "key24": "uJm7d2U7fcagmp5Ep15gqG8CuRJsUgtFrJqjbNijMQHY2ArJ5NNH22WfZYJrCyQsFQ6cDsuFfBeCyTwa8wNtmQH",
  "key25": "43SyxRjfTSnw56BLNpmNKTg8wDPHjwEtdn1g5bdNopX9z1haJzAvMLE44EMuaoyFVPwfjavFLF6jmtHNpRUdZCHA",
  "key26": "2J62EFSozDydEYEJXSwpXActZD17Xz5F8BXu1KaGqEA7m7a5AYHd48CxGAtUj8E4JzRRe6FNivD8sdSyPK9q2C6u",
  "key27": "qaGMQARUSaoQbqMi7XWst6McyWFHvFmVwtWBBmJzA5Ag1eQbrRmj57nSNEHeFWK7oYLsFuAaNpKF694jMGfGyRC",
  "key28": "3hddjPXx1vRjLKv4usBP7Stu7uBENVKFthqVt2Q1WcvLkZdurUHPVZK7BCyetuugxQevVn3LZjcDSsagmYKeiQqn",
  "key29": "38qfZFRYPLu49UCX6ogmL4r3YZdA1mDCzGd2C57uWDMUg7WbEfzUYRJ4uKSHBbgym3JVWsAsmSvhM2zrsHGfV71r",
  "key30": "3aZXKUVCBHhoZ54ExGYW64vdsjV2EGVPG9z1iqCzmKz82VSYCHY2pd61kwNC9Zy4MyChWqbyxnyANPVXrdihLkdQ"
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
