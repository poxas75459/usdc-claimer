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
    "3ETyT8SAZEWpxfb2obHNfRK7pqXJSmjVJEHaULDEHc1GuwPqF1dd4FY8EpfDGaj9Qg4j6cbgupAdwCmHSb3g5rpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFFSXvVrU3MngEWk55v2bTmZ1DxyJGFjgtWAUfh2dBW6s41jGd1rgWdeDbFQDjbGsuefGKv7zX5iPGMSXEpthTW",
  "key1": "4KJCDh8DxBDD2Kxu24EHuedep9yBAFUiynv1K9zqfAHVMffbupwduPpP5Mnv7kya5QBDTeRezh6SvDxKVwSwGBSy",
  "key2": "2uW1pYevMM8JXjHUbGhvxGYZf3YBnZXbcwAsgEQXb4CqGUFX6n2eTr51D9NhmmgMLC4GxHccXZVf1eVoiZViGMsm",
  "key3": "3rMWiue7obHWy5wWcMkmLWWeFQCcm2neX3t6UhvmYqTaHQa2oPx4KwFTq3uifBzZ9orprq1G4ezAeWQWQy3GQ9ab",
  "key4": "2JDqcXDYJNvt19oni9Dd8SjAE2XevPArKHvEUx7BwyESfo1WMyZ4RdtDUUJmaMxBqRiQPdiarRHvB2dzojXUbXao",
  "key5": "2Vrq19STQXTvih7L7wMZvkyfoXY9rYosSDsBqCcV41q9pzUKhNSjGRRCwvtgzpWijVYjgSeBga42CL5RgBhgggWK",
  "key6": "5RksTxLyPRDbWQ31kAWp8RqfRaXo4QJF58WyzW81d2rYAgKu6B6ej5FpdfkuBWoYuNQ8y4DqSct53BfthhJws4z5",
  "key7": "5coWim1dEFP3pjsPwVPuEPugTtH5a1ukEQycKDopC4Lx6PBdp5LGuDRCRDimX9eYaj4wYUsQk2arB5cQ2bc9HTFa",
  "key8": "3eJQy69YgBD3UC62DM7nbe7dXu1gZvHcGc9zVLb2ATTfczsfnB8n94q26DkoWthzsRM9BQPKTGXu46DYA8iCDzMF",
  "key9": "5MLJJEZPZBgPEpuMFh85y5UJdsPTKroRR7i52QXjohE29Y3LBz5qEeHzZQEAN8pPyEPzDxGoWMiXtAoGUwZeNfr2",
  "key10": "2an81zGLdQ9ANRgCzaTCkkYLjEzjoeeDbpyLfz7R8tUaijcy4bU3nkTKY3WhxThkrZzoUF26QKkbpMSzmYxPTxSA",
  "key11": "4LZdyuKTT7xYCiDCLydvgeVXAEqgofiwhZBv3ErfwfYte5a8QNo27tTytmmWnCH6ZVViomePQdhNUzb9SzHvBHLC",
  "key12": "G77P26VprguB8ZQ4Sp1Eeo3yLQBxmWRviJDw5eD7aTKTRYk9NosSA4MjDZ3KJxYhipFHjFSxabUQorzPH3mktGn",
  "key13": "2bU9QgmndMEXS4CZLiXzSv9jnn9kwkDLD2aaYj1oAhzqoTFXaymSYd7BqUyxXZ5QuKb2vEi3oXzT9BJQNw6FsLWQ",
  "key14": "5HVddMDZnY7bEbcuojLeaWmNqSeENsmBrAL7dv1vaf41Xnjnjuj8xpJUgomvDPn2RTkX6uHMnD8JUVGyudRhHHGv",
  "key15": "3sPfC8kL4RRfiuXvrVaSXqFdrm2gsksPLN9AnYkkR5VNSZV7xDA65bcanCPUW2jvFf21Do5ysj1effkag7sfvv19",
  "key16": "3oyPQFcBEUXQTGXqTZzgmCPSDktZQ2V9o5afsVAyrxVqQbbKF3nttS7c565jH9RmRqAh3vQg371CaP1X7n3unrHA",
  "key17": "3Da5QuD8yLCdS38TNuqXnR5uLD4UiDyc1eAUitjqYw3mNdZ1fWCmTFxUSy1ubGrEuPCt6HUQadrqik48w5WsR4EL",
  "key18": "4XcMezBfxCwAEsT4MMYEVoWPauQDVa9biE4sHKPTTd8YkGfdS68dpLX2VVM3XKJKr6xmyYXZjUyqEp9PzaYk7s6f",
  "key19": "3JWyA3CAK1aSCrAEW555UTEfd5yscfZtFkiZd4gxardZvcLbT3WXhP6QoDBd175JXhsuN2KPAxtESG5xZELR5NaD",
  "key20": "31xcJTx2Hr8rfQdbTHebcpGRs836nsCWFeFd2kW64qmadUbfei1W8HR1pyzFGd56yTrR1K2wAVfuvfeTbzL6cUCz",
  "key21": "3zBNoj34iqyMB59R6fgj29GfxAzkoyNYrpqbHm7UZnc9WdxE8WmENKkMpzEVHZXdJYA58uK9TDAF2YHrbphbymXL",
  "key22": "5xsXze41wDqE1Haretrd2KAsgKXTFvenGpGnwAvUCbnwL1ykJznuP4iYJpWL29UfWZKZQ9wuNsE4NkEWLgihXdJ9",
  "key23": "2FM5MosXsumG5vhipP6c7o9BoQH4ausjQxfZ7UvanKJ2tfK4Ww56x4zpP98SeHoCZmghgR5QbKwGyokqyfjBQGKQ",
  "key24": "2nsXFVNYpMH1ccJZsqKrxyFBVbee1djW3ie9pKFozNq9tCVaUVkVkNRUrpNgzn6v9WJ21QX6vf6mbRMf97qkLKY",
  "key25": "5y6DSfPvTKd8c947EPsL9ZEX995b4EGuHhaBZqDHUnZE8M7SChGbPHEqkQUJbEH2NumKv2K1ZZEbpPZ4k98ejMUX",
  "key26": "5UjkiTURHeA1pdyzqrhqHFxxf9piUoVNLjAUvhr8KwvEt8JFRGevWXEwx1wryiZ5Ko2bpeXpB2CWZBYDR8P1vdr4",
  "key27": "29LSZW6ErZRegmMZWZxZhCsuJLjxuCknb1hRtfgMJuKpebdBubHpvydguabSs137wk5s16wPJzhpBRNoMH9P7n5a",
  "key28": "v1VWJdRTuUDbpbTHr9wYVn1DR5TFb5HZwNDdbejSNP82k4z99XF3r5P6gq9LU9Fzj9X5Z38LWbtSdxdFLAqxsWq",
  "key29": "5VaZCqSztEousoicjFgXuxByD4ftj39WwqwWnz7xNeA9kihDXEPDxe2kAWKUzGhyrxfpNUo7pGuTFZjhKggjqUb9",
  "key30": "21WiKm3jh92LaqYKLLcnGn261jVtTKMYfwQKEZ528gTuZcAaSCin98mc1RpENVnyHNFangxM1QtH7CHtdrU6bebS",
  "key31": "NDkr83rVZCo49Byaai2ddjV6k73ju6FAHqoNDrPuKBjjGgeQX6ti6A5GrqvQMGwmaYboeQCH491ogoRdXmScinv",
  "key32": "55h6PywMCZ8M33HSdutGDiEhTKbxkGmFeGVWs9QWftjuS9q6pqjdG4nNAkU9Y576ssFTEgqVdt5U8DcaJj2JkP9s",
  "key33": "3tvC1C9kwXipxszjTMEYbnoA7qvMbfUrmbiFQHJ6WPnFKYsXvKAYDLqKDMnfHcEKapqjgAf3BfksmXo5WSJ6dg11",
  "key34": "2KjY5irQadGrKbQv49cjnyYGs2cBVEXvL1v4xPeqCu4Exa4NSZEC6BLzg9RXcisvvo3ajeQ72EmfY5DgXhw9ggKD",
  "key35": "2dfLKXX6Yk4WEcxWCfwZWyeuJdbWor9ZZxbVfket7ycVP1uXKWZSCsbsPsqWMPNxZZ4KprBqVoq1pNqW1DrZB8p6",
  "key36": "2JwibUrXvFzU9wzFkduer5xHb9RGcgUQ2R1fPQfSTc6unLcX7kNiefcwR9bbsVUK7n8Kgh7NNXzh4u3mHZqpoTtC"
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
