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
    "3ZDpqq57KjHY7cnoW8HRgzAxMkpE3AFa83PSSpqryPr6KiGLEupA9Y38fywVdmvbhFmvu7brXsN5nggANuwCFfPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhTfSA2E231SBCD7narhuUiL1SfVvFhnXqSK7z7kfwQMujV1kerjAJEKs8sz3SJiZePTVBXziG2xp8gAwPVzVEb",
  "key1": "4jnnUfadJXmjYgmBodfRcpzYJXiW6t5q6eRke4pMxQZM1NZxUCLo2g1GqLDvqoeDDFiDSB567jsWu6GYtkUimSDG",
  "key2": "5mkcsuFrf3YXi3Xt6vo4WuHSnKcFKccDT5J3ZD7My5zS5QaACJDnF5RRdZ9wh8F2PFjEVABvWn7BEVqHtCoPcYNR",
  "key3": "5D9sP4AJaG3enfKEvhPgoF4Cyqjy3HFTRXwk8KgMTuu925A39WEh6d2UzMrVPmMNnsEqCjG2LQqUqgg2AyHuRo16",
  "key4": "2XuK8yXVhWau87HqrgdqzNWbdRoMriiTyf6J2j95Th53W6bxL5JCN68tG4Go5N9MdHCsrfuavFVXwrG3NxKgpxPf",
  "key5": "3hm6bx4m99NTg78C6HYoQh2zVnXmAppTE4vryhwDRz5S77v8ifNcBon2eLvYQzYJ9kTeB2xztepxKyur4mtLnafc",
  "key6": "4s6igG5K7DirCmza1Drc18Cby5HveKjrv8MDUrhWmY32gDQiYpzXFGakVA18iRuyoGgf7YRjgUCeV8DLsYR5bwnD",
  "key7": "3TYpRZ5Xkg9uLQgy5BjoK79JnVwW7gM9Q5DReiy7qnoUS5hMCb9DAqesVsVzXZhUWfR8BFGKQquUYoUqVcL7k71g",
  "key8": "5CxEaLnqn9Vq5Qpc4hdQNBqGMziKBiR5k1Tt6eyvgcUu5NghTQpdnhuT4jPqJgcXKaPUmgby4d2sPKAPQVxrvLbp",
  "key9": "PiSUHPKg6zCUvERHt7sULXySWDk7mhe1BeDgQiwTMtyKed2Ny7DiCc3pRHbTX3K5y8yLLfrMqVXQkgC8sY9rddw",
  "key10": "5gJmzeM5WH8m4NU3r1T5dzMjQ2wfaSwPssKrQ7es5NW43jVQZcmPam2aHbhDZpp1saK5TBTNx7JS6Y53ueDjR7we",
  "key11": "5gzxfyjeCDXwWfzbW6kZRNcDbPxQWigvig42yharYjvkTtrFoosuYoV2PfYpmJ5z6jrzdjsHrEh6A77o2ZQS4vXu",
  "key12": "hJHVrLzzFEwHqeNM1TiHsHC26HWtbEHaSjEQMyf1ZY4fjBWR3Gqphx5RMCSK279D3tpc9HzDUjwfxVyyakj7g7C",
  "key13": "3p2LWS8iyCiZr4QxdyCXVF7oLoVHtcQ2hkSBGQLziWP6CZwXnUgKhNjnVy2gAXYvroHue5z79JBNAdc4S9EDbzsq",
  "key14": "4KduzAEzXNTX4ASoD3YTsRF9Yto3fJhDYX9YqeQvBKpUdqBoFU59TTAhxhh7csvgDr1ZhYwRyq87td8SfezbdUrv",
  "key15": "4dAmQz9MGtKMwJNC1uCjcZg9BjyJdJLi3KasUZSzoSSEkbqsn8uMEdG8XfxXayjqMKFkob1qNDYKqfVA22tfRg4j",
  "key16": "8Fnto9AozqhNm4LQNuuCb2eQCLKp1PACoUiUPAV7Yi6vitKGr4WBiECcdAJ9P8XiKQNqorriLiZhNngZB9RQ9De",
  "key17": "22BYeYEMRTygc1g2Becsf8wQ6o2iteNBKRdzvHpb5uZGwEBd72yBU2S2d79PwgQmvmyX7U3A626a4gYuewFU9Yxz",
  "key18": "5fXKPDaRTSDdVL88zuobneCJDhg98No4Zn7PfG33RSYbhT5EJyLg5KBuj9HgMa6dy9Zwumf3GGpvS32NjJqHAUkt",
  "key19": "28fk5DwcAaFpUBc5pRrQgom4DNJQcdxK9coE8epWebQRscBQaAUW3BRvGvGqFMqnEfQkjBEE6nD3fbC6huhGQc9f",
  "key20": "5yP6GDwJe13rAc3LJQtUkEfrtuzygirdjTY1BKDMG4hRYSr3Tz7NFDtbz5xyLNzS4LHTp5K6X95bPy2gkbEjLDXo",
  "key21": "2cbvhcq2HbVkocKNkrHGhv98Td2QXFaXYDyDHuFU8Vr58mdKLZLsW8EbUC3vUBYtVg6vfUXrRGEzuRLhFL5WfkNT",
  "key22": "Eb8A729SuCfHnkospaHXFDpjUuTcebYKjW3qVwjVU4EsxJZTtUmMPHy9kCn4qBCtGBpPgAhpS1LB8o9yXEvt7gH",
  "key23": "3hdoR6eKAqTznfwVbyT72gR2tubH6Rt9hCHKz6LHN7uh1AnXtyC3wYwmaWRfjAHvYp4HB9W2NV5drTEUTXJrinas",
  "key24": "LsZajQeXQtAN1E6TAU32zGgvAHjvVhc18P4aVBRZiNXMENh9KB2mw9D49X2eBfxu636ucXN1vzXCCk9mf2nQSGS"
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
