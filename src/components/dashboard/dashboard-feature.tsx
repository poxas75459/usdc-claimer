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
    "5dJpYyWVMehzKkon6AVprc5StZ7dofuxyFea1qqVnV6nKXhXCSFrCfStiSEK8EjpVmZBeyu3MZDSmWwLwxmNZusP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NCgieFW5Yp9zm2QXxumTZRn4cWht2XT3HGfch3dxncVu1s49WtxiuczvqCFJTGo8nEhLnvSaend63XgmaXZguA2",
  "key1": "S78CeqZanL8n1c4t4LhCs6obLBbmtBZ59gxkb8h1dL74fbZVZuBZSuednCVK2X9k2bbjVZcHtFDWK5Pd3LxzdfS",
  "key2": "5u3E38sGZgp4z4aL6knqcFdBy5R7DJL3ifXgzC3TP64N7RF4b691cc3758AYDHuL6kktvsaUEkeLQquiTM513RHR",
  "key3": "65G1FoYgTp9EVXCoDDzudbYmTyaebaEm38j7F9ir1Zaz4BGFNRSWsJgSefgx6HQCyjkkGvef3rQiinobaBXJopwL",
  "key4": "4ZkLeajSdW46UBzmdVM2P3ULah7DYLc474hunTQ1jDqEZzmaX6m2V9KK37Cnmtk853VfySuRBo17ebZ8fKMDxEgn",
  "key5": "4ZrhHFTsVUhC23Rk48vrdpVepXENtRgiGBouWZqzdxodg9C9zYSNzWPaiaX1jrhEaTPeaVeuEZFVHvNcA1zxDp4o",
  "key6": "4UcvKu7Zf757zFQ79QqWeCokYzxgqJpGdTEhZNvCkDekjptXnUW1CHUSG1w9nvHq446N8mjEhdxQFTfRoKqjwGKs",
  "key7": "nxb7GPgVmyBAA2YheySk9V5dxLmUfLxbSCCXPPaeZgoyN7Dp2egZDy89D5LQ44dJUJGqabeJLEz8vQKP1XyNbsP",
  "key8": "C6UU1fEGsnfXwg1VFfGiccVPDLLwiz2mt1XwftFTmhTQeW3wRrk3L7afSwoaEa9sA2VUo6PDGQwHo3LwKX5z229",
  "key9": "58Q4qVyLydCPY9umftPKwNotmVrRUqESHH2KWNGs1FSBzhzeS2ECPUM93zrDrCDQjzrUg5pBRG2KxE4FRocb8qb7",
  "key10": "2J5k5GfAv7xtJ9LLV9mGSxmT8FNLQUEWJM2ZSuvXzaro8SU4pkBdfy5BEXhfVyWZmLzE6tPg6JXEGVmU96zmttyP",
  "key11": "22stKzqm5YwETqTugQ8AZ8HkBsvRbddq8ifERGw1tzEmnDxGHt44LFToX1qSRv6HGXJWuSREFiDXrjzoYQJviYHk",
  "key12": "5QKT9XwGcCNSf2AKYiCaL2FJkSjfVYK8aPQfZvAw3g6Z1sky8rgnD63fq4UvpdmvuBugWvZ7txwooQHFVxchw4B1",
  "key13": "M8mda6dAkUe7iSfisGv9kehpk1w2jR2avDAricSC9bJmyHMNS9x4RGerog9xtwCcQ14fRGZRXaozft1CBVdN452",
  "key14": "3MkQZjtUTC8bUtonrmPeAkhRV2ZNv96Fst3YthZ5V389EuUSQPz5byxc3sry8PeTeys22HQMEqL4UyokPyubE8pV",
  "key15": "mJFm6WAwcT6LziZMvoiBtY4HRF6iJMJHS862cGwGbr7dGtf14vtzmqVboBTis81VCrrCk8ChuzaHhSgHVWdUdVN",
  "key16": "2eyUWBK8Dx17tbXfiCAhW6oD3TPZWjxwFbzCDvwJPHAUa684BLeywLQf3Q1rD1E8vDXGQVUkfabaE1XFCQcHBZ9D",
  "key17": "2SU9SW38UJR1q9wyYrTL15f2MyqkNvWzuPgv1HSsoTShv9dezHfdS6o2uKxdtuYAu1RFe54H9Z39yeKdKrJf3brc",
  "key18": "41oF15AnJGCya3F7NAXQQjMFgJuK3zBSGZt2fhpnZpwM4eZk7Jk7ijqjWH3JyPqVKRWkWxR2FZHLseCF9hubuEyi",
  "key19": "bGHyd62qLcQ5yoA9M9K4boVfgLWuATsLzRP12X5ReCEdZP48EUdzCL5qsEJrwmsaN7nosKVNBeSqEgEwmZ287LV",
  "key20": "bBBQDVYYpc2kusYWU3BtKvWtmF95rFadXHmSiMV6Hin6pYp58aUbHpkTFbvhXjJ7L7z2RnCEmkEqLkQmBgAiPwN",
  "key21": "3ERktzgcfGJqQ7UuEwfkhagi3oU6tP1afkLVwnsurNngAjHG2N7RvGpG8Xe6o2HvNtBFhvc1sUqXzZrgh4zizeQ1",
  "key22": "5wtQVMmEHjvDq9Si5RiwsBBnUN5VPiSbCxfdy5JNrhmGmHA9AmG81GuQxRFEtvhWS6wnm4oV4TGQrDpZbFdS3XWR",
  "key23": "62VoPDqATtJVqQH5AUzQJVZkstpqRzLVcP2cEcFuXB4zzibrzRTznxtNd8MMhuBM1tj4crAN4z1BCZr7iBpFLk2j",
  "key24": "2dzZLuvQGxMHAeZMTcaSLSHXT5ZqfQpLMrteXDPFygwHoLhqfc6PjdTaC9YnTpjKJNRRTxfo7TqdeCt85fGjEeTS",
  "key25": "3KAw78XoRMcvfanfYjBFvZckZ6PWDwYCpNqT18Yftye3TPwChVwbEMKLZGWQ996jVxMqVJZd8cMQxLwX3PL1Kk1o",
  "key26": "4HEWkVAnS48J85q3ipKbuS4WX45hRP7SN8FYzoSg3SeopWSYmTmHZoQKbsczatUcjr2JJKSwsWnhTPd9RAPrPJs"
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
