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
    "Mog1sTvBbtPK4sTvHBEg8ieUpTmFBsefK91rigqwfyJN6mGLpdMu2SrGXp6y3hAeLWuDK4mdr3nSH2VmAM63sqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKnZWa2E8XpvyRsozpD7tgjQfHJ51nSnRDcbTAka2cmA8ZUB8LHEmwfV7kXoFKrvrzdRL5HtqQ1WjNSTPaPXNGZ",
  "key1": "2ecTHPc9tADXtsiKWYvnaZcQB6EMtULxsixFwd56fvKev6e6nNB5aDr4Hzyg5pakJYEHoSXHVXP7vkxtLT1PW8MQ",
  "key2": "2BdtgR9dovfhbCW61e7FaRe8pva8pM1sDXQfQLDmqhnypnHQ5Z1L8t6SCEo3cqqCv2HjasKjrwfK7GLdYnrLbUg1",
  "key3": "2u9HP1BU3FLkhZiprtR9zFwHyS1H65i15eGEBPGQLWRJP3fGkURUFpDFu8iqkvSay1QAu3AQGRcD78dKcLxWbopS",
  "key4": "4rEpv1zgVR4pFtV2jDzvh2kayysTErwVAYJtLWnXrcMk9tjhXGx2yCwm7Yd5WvmVv97Q8KqFgPRQFGqQzoEnfZcs",
  "key5": "4FfY8rEB9gFR6YTDC1UAZWdFtFF9egjdtvW6fRhQM8vF5nfSD2UpVyctrMkRdtxQYNkfPGxs5GHscKoyCt77X4tf",
  "key6": "2cz6dLvAiupozVgFBN8UNK4JMaFTfYj2ew8NpVvex17ictashQERzBVvbdnM4r8BsVgj78qWWJA8YorxJcqcERZa",
  "key7": "ar79EdhFAgQXDuXsTQRJYNsj8wMTJuT6W1GYkmrWHpXwu3WV6MS9eG26iC3tDfQAXHuM2mPB9U51Lz9bTDhQtAS",
  "key8": "2d1cShSf11NqmBZQniyidgxsAyUngtjxXswc8xSfMCJPiNAW3Qi8Q2dhygtnW7aTLaj4QE3wiebT26npng2e4vkF",
  "key9": "3XfCsrbaEqnegZqVzM5rbiW2AJsTd7uA5HtTv64NM39Zfp2LvnNu8AN52DXpYMjVvbD2KeSUiRGwTALYg954gpjN",
  "key10": "4exL2NKxtRL5zRfJW6rvY8MtobceGw9AyYGor8NGrw7MUFvnLEDFVDsrVmtE2KdsFfstHXAjnuo5jrGEXy1kXTn2",
  "key11": "38TaZm9ptX9H5z3HYfPfALPdc2RVwNFzhjk6RggQ4arRj4C4EF9ABzhsymQMpiYZSEPjAwiq9So2rfLV4JWGrjG",
  "key12": "4tgvoBp8cd4BNL8Hum3uKxnDtB2nYnXeo9aB39TnAxgyZDM7m7A7u3XtJXY8vyCNhXaayCBhrzw7hTB7Z1CM9duu",
  "key13": "2yD23fmu44Wfj838fY87ABR75Wv7sMzNENmCoPCzie7kNJ7BuviTUgn7F13HjhxAK9GBxw3fBsh5Rj7n4feVpw6j",
  "key14": "2gPDwZdNXAkh3L3p3Vrb96q14JXdnUBFnmD1gAR74sLatsZ4jd7J4SNRkmM5nzFixoEWgB27aoCpJ5o9BgPobNYj",
  "key15": "2DGKA14dj3QhVWBsTUpgwR4xAPudnts5CtJdTxH5xzavPMrxkgPZsPT7y4JNb8x6qUZhmLJReybFufpGfM6jaobB",
  "key16": "3icdxCEh6shhiu5pa2bvq1MnJK2gGV9hHhtog53mZ3NGjd9w1XE9i5btFKyMCbY79WrfsDYkZaC8S3AP9JZ25vDc",
  "key17": "cE4JRmg2DSbtDGp1vcGeLMvi92faAw4CUuMWBAMisbhoSMANKWu7kww3wBncepupU28fvycvqEvTVACKr2HnCFX",
  "key18": "4RTSueo32VNCWPwuWt4DE3Q9Pc6zG5ZQQZtUdCh3n97r8EQDXXfjFE4wJwPaQ2UoJQB15nbomTfRxV7ftLzSMLWw",
  "key19": "xxHrf7uhQMooN8DHEFczB6n7o3Mc88TKZTP9j1gA226SoXtT3BKgKg2gyCD6RBcS2GiwowjCCCbBZsqZJDJqaUf",
  "key20": "2fybuuvtx3mna1oyBxbz7RxiizemUagZyE3iZ717LmYRosNnJn447WEexHpZApJAaWRVHEQLThvbFiwLHkKgToc5",
  "key21": "2CJAvs1ZEePp7jkvm5bWSZE7W785xSePkoTaVvQhY5NGbyKD5S5iUW6oNcawTG44FBBicfG7iD6ZmowU1yHB4na3",
  "key22": "5uKqzPLgMNLBUGGkwhdkB9FoGcwGKFRdukZqF9rAMQkVCE9Mky8H44Xwor4cRY46BbWMWJhpwgeSuCosSzDLjFDN",
  "key23": "2vAs8T4TVPL3QoUrZ9avU41F7Ktgqt8sR4gCjBSueo3kUGYyk7rCjnfdLkafR4XFTpBCa2mkhqdygGTCYaZKMXov",
  "key24": "4kPhBqJpeWEszeXpvx2J6ckv1Mqoyvu3pLcJgncYSqPQ9u8nCuXjcyoXvWpyXMdLXrzariQm5bEGgP5LG8dPLJfU",
  "key25": "21wTWo22DkjHXWZdPkseoVm9CLUSPiinmM1ESfnM2NBkT16eGnCzRB34edwXFuRWJGHXmzupG19Yd8kdYjJkAPqv",
  "key26": "2aDMAWTvmycMPEvwS3BLRykzdjgW3ozCGFxz1J1jdUFrvkoAPmJUwNYxcWbEs5oJnKgz1xVy6BQJJzkR9WHMTJiZ",
  "key27": "2gVC6o9kDE9Coma573hMmcg4zbtt1rJCyQJgKKB5FkEBkbHMpY8CpNyd37kmVJReRMHu7Ti438ZsYPPDENrczcD1",
  "key28": "2zKseDHchevWcHXDRWDRRFZjGHVJfoahFgaUisiqAtN1ztv1b7iySPmA4wQ3oko4LCPQBENoSaWaPnyRKj9kq7ZT",
  "key29": "2rSQLiEA15QKAqX4JLVLyZa4NWs2SRjzHvsB3u614bjnSWQo9X6LJ7zJxbTRjg1gGcTLf5WL1J9N14rSWvhHU5xV"
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
