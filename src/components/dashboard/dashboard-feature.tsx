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
    "gFtkbTE1tsZzJZ5AmUq8etMsR75onXqEtL1M3FkGzWjw8f8EuJ8pjw8dWUhRPrAoqiLPYyZAUQN7pp5mg9TuD37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZf7fXuB3RmdzJfzNvYjqAJZ8QyHna7gLoLdKf52aAxatnJkXAuR9K1vUSaHhTBxVwZJtvgBetDwjc3fovK1T8b",
  "key1": "jXFceiybg6Ke75L8Jb1cKtDMp35EAn3ENYGvnHy1NDXzhsy1HWpyzrt9TaFTGJ8HnFWZdao7M5D6hQowgHs6mgM",
  "key2": "3tvMSFGJ1No8xYaqZEk2g6gVBim5X4RMGgXu7FbZG7AGkZf5oYmLAeU6qNY3HUUKhP9QEjx87nJMAN7v8Rvn1Kih",
  "key3": "2ZP21YvCHzvuVSbpdYvB5WehfiXHYPa6sbHyodBtUAtefzRpzkwCNz1PZEoYkCR1LykWhieDCFxqdPPRxKY4LeKv",
  "key4": "4TuxTMcnz2yyQjycDL6rb6CJEajwmQ2yWTs8BWypKET54hPHXPuvyTTEvtSWdw3tnftaGfBEKXzvjvaNuhDpQb4S",
  "key5": "54c3DPoYt7MqezHC2uRhwykcrKW39STVbMtwJF7ZMnV4Bx4DJYncJ7xBmYkBX1jHnRNY1uyJBBpjguGvxXp6ZF38",
  "key6": "25HTJ7WE8JVUQzf7Ci2HFZ2hWRMhp5caUWtYRNYVPxE2dPNU8JknLM5oUoPsJfJHgxG5hyD8JHeTUqnopdwKzMCM",
  "key7": "5ZxcVdqRo4mpPGfRaAUJCa8a82Z26EJUfWRV9YGfVc85dymj3325VLu498eVkjunGJF6v2fststirUbknEN1X6Ap",
  "key8": "5N78jT6QsDC4J6KvbyadVKzrJ6drPkrudvRHEz1rN5s1gXyw9toD5SH2ChLAZprzWFonNwEqFDmNfCTeRFc8dPAZ",
  "key9": "yg3XJR6AtLiCvRghdNayGBpJWjbFBxWfpGAvcJTsQT6awsy2ibB4kr8HorYsqH9xMtUrkw2WLCgeDk2WiNmbHTJ",
  "key10": "5CzCbF3VhgXPD2ymGwiuXL5Y1QzYG89dehMXFgLp3ixmHW5ZnJy35sdtE3kvEJvbmNCqoqpkbXx6jqwwrDmkDsjB",
  "key11": "FnbZurK7L824WyFczFuAo3xiQ5RQYDD1BrKNLhVx3A2Qgy6hbSbq6LoZ3pxxLQeS6njSh3xiGH3GjpptQyTke4j",
  "key12": "5cmMNTpnHZ7XBzrecSCdgedk2ZEyLu5cwGaGR7TQgnwnC6rRtbxDRoBdCkfUt4heAnnwZNvKa3TGU6DWcGSS6jHf",
  "key13": "4qvka37WQZ91Ye45qJnxR8o3BMBGEAL6kbq9Eie591wdjTbwHkHCVKarLtNLJs3fipsHhFe2fFQpZgKLg4gf92yo",
  "key14": "dQaHuo8DkSHrxxAEzj34dYXPMRKhk1RWGWXXZuBuVssfZjepShEmH1RfwyWdwDN8gVt7Ed6tUksfQgJwFibsbHr",
  "key15": "51xhgr4myUs7kUBv1RpNa6AUREVxL8w7xPTYmfVz33a881zBcZz8CK9ZVoQHcrjo1U3wsujtuxbGCWXzz9V8dJka",
  "key16": "2AAUTw5GHsk8iNo9edH4SXvnZygJXgEVW7hhs6qdCDC4LfS4mQKtghWF5YHK23dGsA4WcGFP5Z9M1VimfeJWQQCn",
  "key17": "5b1QtJbnXNe9zXHixP9YXsNvGJMSo7Bn1dA4rxyMjCSQT8UabpizfffLVGsY6BBa1oppnnhNrcgivvMR9emKZXTs",
  "key18": "32tA65nTYa6XAumvMV1PE4i4vmFSimLggDLVFBM4aBzu761Tx6bF6jfcjDLPLQR9hPvnbgnV2McovgRQwuiwtT3d",
  "key19": "3jVkkqmxGM9KgoJGAs9yr2CJb9HQ3Dge2ShxFbnW6AxbnSJJNLyPhehgMsiDeJkjpioUvtCcPakpP8U95kftvgzZ",
  "key20": "3mCZfyrMDWzfSeFEj9MTrrHTcrbWGtjSkHB3kPKV3fiGobU4Mcor9MRE7pyfeMPrtieRx9G8GsJv65qnAfAF6Dud",
  "key21": "2zvjcwsauqmoo6jyPop9jkfhjLpjYeCwuBWc16KKnY45gqXy2VmnxJFCm25hGPkNa1H9cKbyf44JNDua3XEYahmw",
  "key22": "3px9cMGwxRuP5NjfFcbLNZMknadYdrA4HWf28e3QLWVm988pk5E8F8kzCjZcuRA8g843eQriAaoPFus6RwVbEh7j",
  "key23": "3aAnhE4xYbJ8uBZvuaH29xGNw798UPRVQ9fgGVpnVt3PFasW7NbthyubeFhoKN7d3CQ55jSncKH3YRQe9NvcWnXZ",
  "key24": "Ke2eNSBGF8twVt54sXkgbrFjmsB7nRhfynEbND7REfBqPrqEvtEfJaVqwmYJQsqKRELr1PM9KyER54R9cMDyGnJ",
  "key25": "3zKKgGCRMcH7YK2nwXDZEAywYzmmiSHsYVPoNpqGciog7MhXz3kjkaxZP6G9jrj28RCgBWKTwD7stMTzX9shzgTY",
  "key26": "3B2RrWDPX268WDRPfRTUxucgGb9pTFne4vPmKuLwR1YemKLmqbw8aXLiGTkSrkxBabbvtXRLegxB1oPYri3XXMCy",
  "key27": "51rCZDWVev5nzBbhQQXU5bPHtxGftsTSJGGJWTbfTX3dH3NbhYgnbx6gx4xHXSiqjzTYEVtcAEfpsqRJBGh54acP",
  "key28": "2DfosVPNG4TG6utHkd5d6JXuByBtLjo6ovSrgJni4aFsA6ZxpJANvhAuTDNSwGyjxfm6zBZayUGSNduyxpVsSk4j",
  "key29": "4KW6gnbgh4BCNvDvzcMKNv5Udyh65ttiEDR7DU1mHBiarbGTRf3cziiVQt5UH2wzbG2NqYEAFka5shbrwb4Zm1rV",
  "key30": "xZj1PY8L76kX1jhyLtSTUsNNFyny2AX2aqw9YWBzj27F7u6JeAdjYSUgyEJ3UALZQm2XdnypcmX33DFz8XNFiK6",
  "key31": "8rnmBHzqLSqENahz6rVeWKqQkCn6N7DTT3ftgUCFUw9QYQX8XpT3BnjAqgfP5Fa77Dekj4h7Xf135sMf3KHLrqS",
  "key32": "XPB9977qG1Q7QKihfm6SJVzyU9T93TXBdYVufPa5tuB38RyQFiCJTUW2rW1CE1BTMTLtAkse3HtrjRunzMcMRB7",
  "key33": "4e3Sh73RytE7jCu7MvY8LJoGCshVcQdPcRMC345gLjXctHszpL11dEgFoT8HVjWRMTgLVA1D2RiL67T5uNxMP8o3",
  "key34": "65UgThd9faAzwuDpp6kWzhM58He6a7YL8m9rp6YhPLjM8j3dpfEeqyfmB2cjKPruMg8uguXMpv8XPvVDtnQdbTwX",
  "key35": "2f4rxBkaLGZwtx9jfbcAgHLYhqpm8TC2eiXNCTXFPyNYD2PkixXyepBYHXCLXYWQ7BZpjqZCHuDSeLm1MPR5cj7",
  "key36": "3przEeN2Kuaw4xpgq6yBPk4JVgpMf9hNAujTLHVgmppXVTJh7smyBVraBAJpg1sJATzMXhh8NcZjvrHF5AewCtQx",
  "key37": "5zxaguKVNbBEhfGFxa7FQTSaa2BtqnWgPgg8cYBmZEzDfiQ6GyBVe3bzoPXJ17t2AkvF8fzDBaoMyG5K5Ut9mCUp",
  "key38": "2YRFucFfLDZQdndsoRZ2A94tc7EbMjynCNkFBNhAwRNsJ1fRUdCoLN33ryLZQCumERcPUkCm8SBjudhJCWRmLDzW"
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
