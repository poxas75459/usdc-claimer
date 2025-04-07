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
    "2dqgdpGTsNdySpzrvCyR3QAVEE4UwF4dhJEn3kJPyPqF9t7FAWhKe382dNoAjDhwDFGrMEZisAsx46275m2f3JU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKpDcvhiw7DexDKS9PeZEwM2FJdrWyNg2hV6oo1zuq8opxk9qp3twsVQ115xUecfRiZRvy9FXNyuqyUPgmcXWfp",
  "key1": "5Djt5KLJYbeRuWPZo8FwF3jGTMftec7W9bWZwyjErC3151R5xaHm81PvYMKCN9gv9vkyuJoKjEAnPwyUqRxAXzob",
  "key2": "8TEkswyzH14veeXfuLC4ALsEdVVuSoqd1vLi1qghoRr72J1XqXHhd8Ya8SbiBF1mayeZicxgKN2rm6gqZy84DcR",
  "key3": "59zLfUEeLUn6kWjgYe7o1BveBreSX6e414mJcqL9G5jVkK1YwEPgJzATqxFqBfpzYk1ML2SS7jgzVWDYbirXiRbv",
  "key4": "3zLcCXymbGETcF7ZwgnTthhbd8pr5UM3AkdogJpo3hwegJg8c2QArgv4SXwonDKAmMEyXctQJ57nmDyK17cdLVXM",
  "key5": "84Si8HjmyFQVYejipqqPz7JCJAJZdmyqcZjxxpNqYmCGgqp4YN5u684bLG5ivFy44AEJPBbbFewdbim4LYRfMqX",
  "key6": "Dtx4h3RgCx3DQn18i1QwtQ87A7aAwFnXcnqHwNQcTbxbopmZoUMpB1BHP7bx8crBVCRBFANRMZfiAXVZWQ1pZri",
  "key7": "DY3i6Mntpw39R7Ft13ngBsoU4tkV1StBzxCxAfxL6T5oaAtuzrvVWUZDWAp5yx5Z3R3H69YbBbcYz6ivBAvM99Z",
  "key8": "5F4qq4LHcf2FXJfGMtZBBBZU52faT1SAy8nGzMrnxv2Wzc1ofvxfyquTfZUzB8G2NR1sG4cerykG2bUBffSa5xsd",
  "key9": "4pnMrWbfeU6k9nFVvym3SmPjAuVsM38dw7a6KMkv7kcMcTWBLsMKheA6p8TYFXpT1v3K9wNBDu8YEQF2zrReGikV",
  "key10": "254fxNjXa4rRJjZjfknBPn9PKd17r5vhXMzP3QZvgaMdFiD2mjeZp33KBwdtcYBFbVidhTJAyH2CZHfQtC4uH7jU",
  "key11": "48CpmqBKvLG5SQyh3b84s4D38UdnUtsFq6JJYhkLGf5XPuCoP4ekBV1yua3nz6ZwbK7iiw8Wmk5fhyBT3YbgxH85",
  "key12": "5Mg7JUov2YnnzjcfTWRxXai53XDHtGMY1AsB2nnLnWsCpagYsCTKjFJf5DdrzJ4qCzVgjx5ZJY8xvvqcZkh9W8te",
  "key13": "5yk9EMfWN5zwE6bX1C7u1DTutWzP87nCW1RdxE17rUzueDDj3DLTvgb1eqb5LBpWAauFUjFXmxmtxq4ovZiJwHL9",
  "key14": "2a8vRUsVsg9noSCZghBYeR82J5aMmZFkD24FHTorP2nEEWjW1zdJTKqrKChej24VXr2kooiYDqwUfcYfzh8junpS",
  "key15": "2XxsExQY3mK45Rfofs28SVq86vdJk55VxdJ8aCgEdyvUJ7PQjMge1XnyxEi1oaNT7z8KG1yE43RZAgqqUT33PQUC",
  "key16": "46wvgMxkpqW1uPb1immnGdemKhWxEoCujePfqEnNnEfEHrwkGw33ecPXZ4WvNeLp6it21Z5qHsMFuWb4dDFWyKS8",
  "key17": "5ZVMJqrgkuVgcdZqMcbTrm6YTWMLhJKMFnD3m7r6t2YbU6dcbFZHXDpfY5Txp6t79hNEMaqxdrxBq8E6QqTUQLx",
  "key18": "WazqHNRxAfvwDrxEgvfXWGU67eAqnkNmNC88qzyt1tzwb4tE9dT1qqsU513HwdBmiagDcqsVWRP4b7MGcohRCi4",
  "key19": "2DacGnYTYoVJjS1xzt1AcfcPYKeZ8dLmKySSrgbRvnEU4dbdgrJd2RwLVeskBhUoz2fciKYDN8BrbXgWN3uYnE5J",
  "key20": "4bvJwhK78WpiiLqtXGwKWaJH8aLHZKsYJza5qmjRBLhCuntiKUhBt5BHJu2A4VtFpqqYDFBVSG9hLm8NGyCErLgF",
  "key21": "59B7XwnxBmyvrGMRXwYiSH1nNscEdXXyAzFjmyavSjEkTSyWN415pWroJkXbgLH569E573vUx6Xv8zwpfFbLrgTF",
  "key22": "3a6ojbDsBmhbDnshbCfUa2Dgpd5sXTrpBc6XFFRJqn9GyKvWeJPJKmp1fPumyXbkJBt87Psaw2EwWLrVGez4tq97",
  "key23": "4w7X7iCwpUPHqSi2ju3DJYN4Wzf4Dx8hwLsEsqHQ1qsxu2jN4AnoeEuS1cTMU6JCiEXA8nYLNA1iHGwCCKZAcc5C",
  "key24": "5xVXxRuyJ1MQuZvsuHNwNGqjRS22DciyY5xgQ6XoGok7D9JunHPiG4Fpje1h7uCqr4S5TSHerkirv9qLbSNsgfYo",
  "key25": "2JeeZ61TEz2iYQdnneVd7hAxZiphg5Wwhmapz4N2AHj8dWzfGJQatDaX1kebVSCQiZ4LGW8kBt5adNC3FpVXHpif",
  "key26": "3nQYbyATdTqG6VNHACtV7oS6qPEkod5BcZVhkiFdDf3p3MPhKZKvVjFUENVYZSguMaKzNALAEZfHyr6aWtznLiMw",
  "key27": "5mfR22oWD5SU25xdpsVQHPymrJkAAULXcSY1UrJ5aKanG1V2aN9m9EdwCPGkh7bRgYa9fzNJ1Nvb6Sf8Qxd89SqF",
  "key28": "26gG2Zw3Ju9LFkqgoD8YN17U4Q9dK5VguR42B9X2xzp4JAFebeY7nexRgHW1wWERAvMuuSUwyZQcXMM6UAL64Any",
  "key29": "297zpHmS3Jak5VCLsfr4SK6S8qz34zpCphvHrd2haGXguWKs8zhiefsPU2aiLSusmvhb9GQJFK4XNMPbeAQL8ps5",
  "key30": "5t3mFsj84tHCfXiESyu3gTMupQ21ed3A8eh9Bar9gBtHkANyPg9TiBNrvWKb3BmSJc46vKyhPFwVy3U7jsppMhM",
  "key31": "2ouPDV9uD2eq9W5SRD9zj5XhCC2KBc3j3AwQBGbvZdWQNkBf6yiR6oCysRJ1TLXL1vL54iqWSM7kUxfXtik9fFk8"
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
