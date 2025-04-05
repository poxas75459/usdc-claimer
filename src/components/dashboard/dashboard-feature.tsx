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
    "5Ci4FD5TfxLBSLFWHHeZgH5Lnf2h42vVJczaiYPbTEsD32UyTinxb8nStbMzpFnQq5vx4ZRtn8W1D2G79enxZ5Xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhDFpTFCdkBZtGVJcNTtKnncxfZwcrWsqoKzSffS5okVTFnyCSiUvm2uASe6f5WwqKmzAK9HF5azcdRMuRkDXXc",
  "key1": "5hUwtrFvBzLKCyXdb8aq1m23PtLaUposphEecNyRMSY66ggsnPTapxSSyLyhdtLakGN7HEMTeHeZ69HUckPUY7d",
  "key2": "quy328e2R1akNqjEhdbEnzwadW5uWtUas5oZDhyNfL1AaaVHXP5o6EVbSUaqwie2xSg3jHk3ZcombcKvrroDZtn",
  "key3": "4fMjJ9HNyxUox85d3XBbeswwzLHL5ebaM9AHMiq6yHM51nM2KhshrHUSW2fdCYiQcsqdE11yBacgSq66BHEAjSw8",
  "key4": "5KhhT3JmPzEM9wEQFgtr5WJZXo3hVLhEi1YWVCbCNdaz6QfcJhxKzjj4zXbhsbfVqcxefSnrssUD7Ur23LZL7c6Y",
  "key5": "2KhJjmM2jFqdTeRuxr52vqKxcNoUGA5sfZ56juHwA8TqiTLE84C8axKqQshGKet9P1MxZWgJWSjrjoi1rSANp7ne",
  "key6": "4V36htGBYp3j9R3wCrAZ4bYCBHhnMnXSw8A24Y1GQQ8FCy4vJLej5EYv23riScN5Tdx2erKRMyFmn1NuEQySe946",
  "key7": "5pRyvDEuVnxTkiCN7WQN2WhExJYEBW3T55M9asAjg8gDmqy8SucPYSrCwvXdrcHLfc7HFJY373UCNLaHjp3x9SQP",
  "key8": "4MZrq8UgyDoBfYkLKZJj6hF1wLVTbd528LAEJ5z7SaRpDZZ8LnvQt6QTxPjnu7cRQRuUmiiyptXdFZxsztJZ8kLM",
  "key9": "5FD2mRHwo3cHak4QnoqzXrHGdLtPeGwTQZmycV6hDCNakx6C2xhpESAntWB1jmmjsSyY7K3pNB6NZnmyuQCndspT",
  "key10": "4hDFehR48YuQx92uX2ZfuNGdTLD7MYVrVpL3JyTfQxqSKwSf9LSe5kHJR7BBFmhMLJhwR6Kd3HYYVVDp64cUWcVx",
  "key11": "3ViVAdgMiQczTPYmMMo3H9VwFyn6wqsW5vyYTKS5qtsRo1zehvZ21eQgx26ALF1SQqjMLW4Q7MvtGsw9FW1oWwVc",
  "key12": "5dxkQ9F78cbrWcCdcgfiQY6rJtTk9o41msNVsZrMSWwzH85eVesgEoTs8bnDDA6JexnUy2jNoVqFESQmjJ1vZAuc",
  "key13": "5AhkWBnvMn8fNu6g4guLigf666u62jp2XmTrcu6ZTiJMfZTGpvcqX7mfV43VVGeCdvMbxqJHYxjoUPwurXUk5iHt",
  "key14": "RgvFpPQ823gSSjm2xYHwQ3JgqkuwYFwnmbE4ahzy9zNDE9kzvAs8Zk3Kdptz43kF9cQM7qXwMNtfrKhux7DGXBY",
  "key15": "2wN7SjP6GyWEvjH56FPgeS21YW4v7b7MHaKUxyY3LHAPey8ppgR3cPK1DXXsALwV6Aa27mRaL6jzxXjfWsKsjcCY",
  "key16": "4CuTBSHDRujZtWFmpEZ1owjK9pX5AxQiVWjGCguqsC93iZzAXfD5PtHcZ7RnxVSXyUFADv2Y8FQKa5xpQHKhEhv1",
  "key17": "4MXBKEK46XPF1768HiwCoacHhCQv63L3mRQ65qtWDnwW12YcdXBbdqPgAyZRwZbhy57YJ6xvjYguZEWKTsJ9Ev8A",
  "key18": "4frjU4WWuNVJ8XLM5C4W4VPSpAxSUuPV5Bcv8JTy8nJKD7kcpGGrMgtHRQ9eERH3CDp4urV52FeobLvgfKg1bw7H",
  "key19": "4HVuVXpPnxytWYUvQGT43U6ddXqcMdfDvkTDTBohg1hpAdvoJxPmzaq9Dv8H1EPJ8id87oU16awxVMnZrVqUEjPj",
  "key20": "5SvChyg6QG5MNcPYPX7zasyJF9ew25fg4CQYohDtanJc4f4hTfb1qZXSAs7vqDbrkiF5ay7WJZLsgJphRfGtv6qf",
  "key21": "gGhErtuAfCuWjBKqi5dJSgy9kxAaAVSeVnhmQkJpdp2qLt7XvrwMK45GUA7LSd21W7q7toBLENwcpvoQSbepRbU",
  "key22": "35KrhSduLBVfsvjVPX1zMCqSGYb2TZVVwtDJ4BT4s7rav6dwFLSoYKJkRk3cdy8dKxEcUcrjfb1Jy5W2gVnZmUqh",
  "key23": "3D32SvFhH37SH3Ys3xjjZJQd9UsY18vg4mnyEuioFrdj6cyN7Xx48tpa688WkMKBSp88XRB7rwGh5djmtk5FvkDC",
  "key24": "1i2fExPup6MzMrNCQU7rZ25LK8NrPoKaQpbV9r5Q6zgERM1hNtbipjDAwrhJLtC1P3sNLZ1GfWqYNgcFe23pwQA",
  "key25": "2bBphLPFTEM6dzPSyWXAaVVGYZZJBWqwxty6cT5JqjrLodkdj69YTpUvhYd1F94SwqhLaHb4CEgJNRD45NMwLPX1",
  "key26": "33dUvJ94E25V1Vf7NCjyhB3gw3meynB7hpzGg1uj7krSrf3c4jnpui7jqFSi4Ye9N6XLqrE5MPuUe5E6p5XiUvLF",
  "key27": "2jhwueb9GiVoQQWUWD7J5q7vckCFauYg5uGR3FKPRv2daCU5XKib4b2XYechGs9FzATncFkZyt2MBAsvbKT9CxiB",
  "key28": "2ZW8byCqzsNXtG3Jm4in5C7C54LfvW8WzYBjGLbawNPUd1pwHc3ouSXzXgF9qmEyTi2seSWjsMroYDYLVSdrkGNw"
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
