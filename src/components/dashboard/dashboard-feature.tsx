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
    "3DgpsAZkqvxwaKcYox1DGJEEEhJACWEi8HRnD8fcMfecnHfgrZK2krCpPqnP8cKHf8tTdMv79yKV1aXp6u9Y7czv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhY6GYNMN8hw93g8sTeGoTNYzzxd2EqqMd7n9Fn4zLjyzsVQD2ovgeit5naC4eZheFmYrMWuXMuRsFon3fPDfEQ",
  "key1": "2ToMqoi6yQ61w1sRzrqZJmh8srNg9oiZj1KrtPwoTVhJSdCPRN9ntzw7C4EwySaVbJH2hgtQn2Gdq9VwCU5Geuvj",
  "key2": "2smfeHmE1KBhUEmhswdFVFnjndryEVv7cm5Ymw7vot1EHkzG45GhjJEtAQysMoYRobu1sVWHpFoRXDiF6NH66B7L",
  "key3": "pyDtjhcco437gHcnznDkiAyAfBMFcojJurSiSLSLRfDX6TwuaVU5YosfinxoeDmMyYj5LTuiG1jhVhFxWp9YqDm",
  "key4": "2fg59hYungLkGBdKxm1pjVbS6tEGgYaw2eVLmcCoMAmSrcRKJ4Z8PvdJZnm2muHymZ3TgHaKwFFXot2RxPDiXGty",
  "key5": "3TRy7G8wr1s9L75wbk2XFZRiYSLAqjWPNpaNQEso9qHjFCXZ2Pd79Enfphk8CuDNnfxvEDzHMRXkvhrwQrLQb8kB",
  "key6": "4ZkjVHBBPhRk6dgCftWz8xLQzh2hB92siA1UtVDH837DhiRWZTWyotgYNcEg4usTmSz6bcDo4cwqnZyzV9erB9x9",
  "key7": "2GKvka5LXMH7fnz9gJQRTuG3zLCfL7XokzQGUsZhbxZGmBS9AqdqxsNhkrxihgCFyTbMs9c5Ry8Eguo4mHjSXzwb",
  "key8": "4kT6HJGGj5EK8FZbrSwLXHPs7bjPZkLxw66Fx8k9so5RNBkWWKkzuhFF6HCNVkuDPwnagT8JfTD5pB9vXCtfv53u",
  "key9": "2oWEvYFNX8PcUEAzA57T5LsRXYreA61yB4tdTeDYKbQ3Sei7yLsu648HbUZEt4PJxjSnGyrp4gDfFpefEPMrMqzC",
  "key10": "2uSZc8LjfgEUDiCnjg72ozEQaQsXiYARYGnf4JPQ2fM8WS2v4ZFPGy5qtTxcJJrv3bghqb4npqHZkarX3QYNnXXE",
  "key11": "NZ32UHAovp8TTHDA6wiwpo9qgeos5tFJBF7zgRMpP74AbaPxi8pB8nwszK8trztYhjUJRDdz9kKis7e5oThjKBL",
  "key12": "2fHer4iD2nxrgkPncAuWWZRFdGU8TcdLZAwqNAzsJ4phTobycYzCQmiEzxi5co2jn5oVdpw9e3tYAHM1jBzCWkmU",
  "key13": "32nYT12UiA1n2zRQ8cJSix7cv49NkvWoXNoEhNP4tsJeCgjNA2x2DqqZDPH4YyJApA4eQksU6N9TfjLihbgUmY3A",
  "key14": "47E2mk2D89oKpy2EjfPL5ousRyRdJx92pkYUKeRQLve5g6nh7sbJckdg9haNN3zknxyon9s8GA6RPZdZFPEe4APh",
  "key15": "5eUSAHY7D6AHqFQ3L6MGyzGbdGDRjLfTiTdYqQjkMR92ZZis8BtcCbwBD8tLcJsCZRrgYJmdq4NanY4mKhk963L1",
  "key16": "2wwfwErJ9dDyJ1oiyYEEQoG8QJK1SoBMpwKtFvxpG4KZKNdG8UzwkT9QV2FEtPmJUSrZASq1Yzbd2EzZ6sL2oN97",
  "key17": "1Fo1tfkVJEHbCRXfnbD6XfJUhgcGHN9NH7cUYv5dSvJ2SsDGBgu2GMy6Js4SdSXSp8TfRkNYep3kDMpS4Aw1Nju",
  "key18": "25RCHncFYJojBYzj9iwuvdFxwqM7Qd36JGPtCcY6cu17W8xXfByJxhBj2w4DurPbuqPy2LDaEFYn8FzdCa4AxuEK",
  "key19": "5c19zJChf26ihnyL79Wu276ZsxbjfouL2QAwPpTFsnUegTQFmMtaq5bhh92s2Qox8xt8eRAn7WYXF5od4wGXwHjy",
  "key20": "2YCeoJovKsmEay9bXfi8H85SaMcvvGxzVUvSsCYyiPhvkmD96ftnzZubhxjHcTgSrH7M1ffBERehTLPJ2pswTsk1",
  "key21": "3x3U4hWjMSaDHMRnNr9tHzps8CQYgpwEcJVspNv3bk2GUT63h7gpCyCk3EM9d1FQ73AAMQdaLRQiySWK4eauhunB",
  "key22": "3Vz4AvLCs9EXcSWyXy1FY6RMyfH7cJMNggScZ7jerpNcyAV52cWhzwCGDih5KTnGXHzGdnGNf5L2WufAoctezkfe",
  "key23": "4d8egYm1WyVAUZUzwVaKBNziF1tDdxHVhmQ7xqihiyCRN8yJRYwhUKY1QZ8DuNCj68ioGKo7LQgXpPWiPY6K1Uq2",
  "key24": "5nrvDQjtriDmZpCxgTcb1G8x8zF9eZXfxNgVGQT2zZ78NSSf3p3yewguhXsDMKy9HjJMoV6wa7LNukBEmUF8yKkd",
  "key25": "3wqeVzfL8k5myh5yUSuw2fzgtx7CjEj4p9HMhJxLG2XoRw7pMwPsJGRmabbvLiXEiHr7GD7aWEuoFJB99r6BGshm",
  "key26": "ZkoDZcDB8fXLTf3hUYKSMqomKuxw1edcD8vESrJNMFMk9hWdgVj2VGbNnBye4Jmib8UYPT81dQSpDzKwtLJroTH",
  "key27": "2ur2wArgCSs8SSVCe4LShzAvcUQVegTzZijTxnPLLTe6UhEJmreAaUwbgyv1XQXsdSeqioAdpxbxmKhKJCzgfU7a",
  "key28": "43Z1z8hMD4JbwCgVBU9PdEwuvJeVSKTkrsngSJAujbhY6MKCJhnyxNr15G8pisM6ewTqL1otDLgkxDWmUvph7tT4",
  "key29": "2dtFYbnc1pE2s8EZajLWxhRPFdXjWHUEYcqDnD25VrCnuR5PEVTnpkprxxgkNUhVqRmxG1nF7TMaMd49N9D8sX4A",
  "key30": "2irvg8yucPTpoFv72MGxdagPM5PJhaVWEXkchmKie2oSHjpd26XGrJq94LHhwjPtcUhFtw8KRmbKeZtAWVdJ6po2",
  "key31": "57jEroVutLZreUY4bgXd3AJ2EWa4XymJ6vkAQx7jiiLD8hd56wDe8BPb7Me8tRpikqdN6SRvAzHMAkGkeKaZzwSA",
  "key32": "3Eewp8X91j6aLniKo3RjuEZK2ozosDWJKXoY6j4SNdvuPDjzAJ3NHnuqytvafSYiQMdr68fR2tgRrq2zBReFb1dS"
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
