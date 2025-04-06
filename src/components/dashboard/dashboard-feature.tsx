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
    "5NzgmevovzWFShjga7jQqB4T5LnAGuoHgKez23DuANA8H2vU4CC615kyzG9WLpVEnnG7mFKRbt7cqQjADKnbRtKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gaj6Ht5NjJyGTbdHvUp28xjVYXamPuj8iverLfnUzJNcEbFYegV4ku7z196DCgkRXNjBFT5vSsArcXRK3jYtqV",
  "key1": "3XnwsmEkHRQecEq8T6xgieJVPVfjrTmL8cYKFBPsNe7AwWSrmupATcvU2oWSn8cGPQo3bifaGQFaYiwaouLPLXqr",
  "key2": "5rcRohmyo93Z3X8h4M6QSmmc9UwuELY72Bqr283VAdRizEKwHwWS13JCXcmkiLajMhRBtuVch9HwFRdx3f2KMPER",
  "key3": "2QQGSxoQHc3RWow1tT1nx1HasAafK5XozRWeiZnyEbWLXXNmUYTpNtXc4za3aSjdS4EUWReZ53t5JBZ62jF4wXdy",
  "key4": "2zE9vDMtvWdGBtS8zYCDE8E9NSkD5m9UQFZeGC8TnNZY8CMrP5JCig1275NbtPHJ6mdJoQwvUiu7Nobk2pfK4TVh",
  "key5": "2PW8n4tXpzzwhVr8BQNg2BH51bz4ZgGA9FfbFvfrUrNAXfuQvsaEiigZSkKFa8FGujzw7MSq8rDY5fuC3DemXtpZ",
  "key6": "wAjzX4ctSgEg65ogURH9Zg67g9P9xvaoPo8gURJyoPGnHLwM3KQKUAEtFTWqQ6StxKadaQRcH7So9hyXA1CER2f",
  "key7": "3kGh47D1RP2XV9yN8ratjcwnsZcyYVV9uNddBCyRGvotxjdpxU6G7H8fqx3qvMcL95jQMct7GCAHubf7KLRmpTSJ",
  "key8": "5etnd19pVeNsGhw5MK1iQi9oYVy7xT7o5ffK4E82QwxBDFKuKMJc62USGEMxa8y8w8w4CyCdcNnH64nRNnNd31hf",
  "key9": "5R88TPy8vmvEH5HutJjfHCXESgxZxJ46bSn5Lit9vV4bqAfcoqWRSZTrJbbNqVXmfoabvX5CT2LQYEAcxvdaEv6r",
  "key10": "TJCxHQyu9vSUCjNYf2foU5t3cb7UwM6EKNvxFoVQheqDvBL8bFv7VLeKQfbAwxFWtN4eTEmEPrvyj9yCVC4jCGk",
  "key11": "5FGMHBdNLRy2pfAFsgAhERenU1WXtDectsM7ggYzygbjmVqnjaoumYBwEFTXc2qM42zKkNjmZt8zJPUR8YMakCTr",
  "key12": "2QzssVq7ESJY1de5ubZ7e4mwGC4bP6rEufPSBAfk7mUeeMkmfhN2tT57aGi86duEvGkGRywsLigTTG8DGLxCcRgf",
  "key13": "42nocgnhdvJ7vng6uM9TPd5nogQrb69R1RqEwphpAe7gjQiJswEQXKAtZSriqRHMyHEN6EjuCXSDucikUd8qDbhj",
  "key14": "8mo6hoKV1hf5Aie5M81oYG7CbywgGogLWzqHqNFvc59qCwVrWBb6nRYoyX2ZspC3nhvFAXzAqfNLCx17M1zikBg",
  "key15": "25bXqWCCjKfSPi9dFc5HEJWuRyy3b5rvntDVNW4qa25a66eirPscuSyudjLRPNZg4Q9QK23wnRKTNocYp3pdG91E",
  "key16": "3e4EGATw8JgouhYNPysN8ZBCyvFxXE2QT5yvYGi9ADXAfhELzCjhJhp51vLksy3Kk8snDX86Tzudm3X2Tjwuqgrn",
  "key17": "34YSpf4VdbkGppL8QkDeH6BA8EU5Wv2ygF6g5rB1urCa133JickaQtRYGvo7zR1YBf7uiVGyGcjEWRte1nq3CYpL",
  "key18": "4YXv2LECT8P8b7KvfcajDP7Cd61wQmBAqdyAqJbMZJBH9RQ2jQwJaayQqHKzigHEFvzJksKG66TP73N3UhjoBMUn",
  "key19": "3uoHJvHLgAdw2nP7hMUXNzowpraMz8B9JYNyx8STGkGsq6rSfpgC2GKxeCWCN8WD8syPkrdBbStEo12Z4nf8fS6Q",
  "key20": "5FCKo1NpykPu2uRmg9k5W2V9wLrNvFBuMrjRFLX1V28xJm3nS1H5QDPzWpzn2sUMiYBHLV1NyAC7MmtSrL81C9Eg",
  "key21": "5ciuKcPA65jqftCvye8ZaHWG6VAwWM3Z9HgVtjaNo6vzypVCdw78sebkp9kQWVdA7BM6ewFPKGrrJBC3S23VKdBf",
  "key22": "35f6Jv23GLghztu1ktaWAw6cPPNS8RZaXVVBiLCVS8f32uR35BKjjsx23Dm2kcCcRS3ccsE5xG5aSYsHWq6jNZvs",
  "key23": "557Bo3Sfppk7Gq5x9s4CJA4qXABJdYxvnsVtaHM572evtXrKfHrtqteNzEYMQgmtpWnHger2qhxr4hehmNvSxCj2",
  "key24": "jZLWVddUqQb4d9sy4vRcauvoT68A2D5FqkkKzHWmhEDprcNVXPruefqVDG8fxWK9tRjQQ3nq1wfrhWi1GJBFgny",
  "key25": "2isFQAWFzYZ7ycJ3EYoBUfBEBHeYcLwHBfjRT1t8cR2BoJKa6SFnFwNqT9VK5BKeGDi53VoN2hWY2279sQBR6GZA",
  "key26": "4TuxMHrT7yqGuDjhk1y3EAnJZYrevaLbWpyV7awGL8rw4A8doEPWDd1wKpcYwiHhAqiuYahQnx4sBkc8xxdfS9BV",
  "key27": "4mvuwhdnfcKzbLacBqhyZ7DZe76txapDZ1pszrkfAyrTiQ7W9BoRABdy7CrKpCUMZHquSyW6zUBbdTkSp2SmJZEE",
  "key28": "3P9rqW8RwyCCAYMNdW9iAEckAifhjhsEbd7jt3qEsVmxBWWkTLmQgDpAHsAPTy24wcZupn2y5d1ePoBNttU33Y4H",
  "key29": "5pBDc9SJYkbCzRL6pdc3r12w6gKxeoViktcL1JbCiU11KvZz7BQQidLjHAHHay6TyLfBHHpGnvn8NqEWNj1PkDKk",
  "key30": "4qpregYQvu11eXia9v2gvbKL2Ub35xi2muEVXHrCuR3keHsnRYsaVyqz8FFACszWKqkAtS8APfYPZgUJ4yFzpJNE"
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
