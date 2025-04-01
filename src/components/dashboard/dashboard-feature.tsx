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
    "WyMNUUH3gPA84GdsKVGBoMSfXvvPk1bYeZNZ8CpxrmYx3Njm9orgUcxavSXKZ8j9BAakWcAjyjK5qJDzPhLk9jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNgZkFgwLCpuLDhjxe81nDdaRn66vRX369Ua4fySUzmfpHvMbS7ap2os98qG5AzNMfXWef5Pp7RWmNPntyeBBs4",
  "key1": "5VqXpNVSW1Fodfg71VPJjvKtrVeBMYEymrvN2nZ1hqL5BwJaxjMmSdAxyJ2PgdyhvMzCjovDMvzfTFwZSJAVUVkB",
  "key2": "5EFMkBnrGehXMB18FcucjnrV4RFGcGUWKq4BAc8AxQ2U6tyxqX59fMsLyUaEur44XctvkXS1g1GTcs4uZYHv5sDb",
  "key3": "5MLMVxZywoQfQD2xzMDh6e5tujYj21Qy3iWaxM13RWkiAg9561XwnS7DuWutV45VTuotV5dzygNKLGZBf7999Var",
  "key4": "129h8MkF2TBcz9Rpwg1AzRXFyqtfe5Uyx8ngWAkk4z3tXdqAsrbbrXPUHoxfTjY2P6KRe8r7qo2riPZUe7ECC6tD",
  "key5": "3kNZWjwy918BD5cah4C8sKtfWzPn7K131FDBtZXfBTfHkfcokWvkf6uYvr4uFEsk7vHPoUSkKJ1pyL5Tvm9LrBMj",
  "key6": "5ejRj9GoGyLgBWN2xKWnbRTFBZj73J16FSaigKtamF1A9gogePWRbvNwCN7dpFAyDqDe5H8ZubtmdGz8JLFPoZAh",
  "key7": "7XjQSxYiiW5M1uxYefFk8NwijnkztagCeATZZEdqGxNeFLTjGJTdUadXrhu4Rk7iYfPU7kkmUR2ouaUrNViDnzX",
  "key8": "foYMXoGwo1FTchTpgJHqEnSDMZrdTD3pCD2Ebkjdvx7SufrSnYV1n4QT1XwYhJAkoeAd7gKygTbmxDMQbTG1fr6",
  "key9": "38SVoxnVNuh4s4PqsRZWaEr1hTr3bCj5eEEKioZgCQrq7PMT6rStQ88DwjceT6u21Ztsz428fqYex5J5mR8QLmes",
  "key10": "2Zkd2dNW8Co54fJgsm5ezfLpEX3s2TcVJbP2Hev3FLFZ76vHH1VHx21NA4iurMi5JZUJ4C3sTKyCP63rtpKHsMEt",
  "key11": "593Qzb4TNxpmxbR3g4LmYibpvDQ2HfyxXSY38bubnmoif6VBieE2HxpNcv3jjy648QpWxL8EReHuKmZEAHVWeJgH",
  "key12": "7pvjgHwzwYf1BV14smSvnpoKS4UCSN6bdgZim2RZyfk2cuCvGJyXaxK3Z7cNHW96GWhLa1XA3wNP21yNQtfcYjR",
  "key13": "2Zv9fNmkBtDwXmpAk5WKQ11YiBwbwLq4CToPTjCucfypiiv741g7G3zpDEQKnqjTAYbP6zCf6WP2FpU4VBKFDX7P",
  "key14": "5UKPQPCLTBqWkvKWnBDT1htnu19WkMFbBzLL1jDKr2Cv9grMbEU6gSJsbdsuHewsE4MiFb9PJ1pt6dpRr79bWfJs",
  "key15": "2tbXLq3g6PXCku91VnYMn3CRbwECj2XCJyhNL8EzU2M5AajKrWcRRWQxSxRC2QFDR6K6oxvrHdi2yMYsYvgJiCaT",
  "key16": "2XrchkaYKY5CmdnhJrHw72FrGSs2J5Sxdf5DpphQaAon2hZESTyUVbfyimvJXoMT6o9sbUFSYSie6KsRLwfeRyaj",
  "key17": "GHFkBEwbT9YWGLMpJuA8QUtgsHk7nVgAUGxMY4rjHLvJzQTKj4nh5pzuCn8Lpk2bWYzFhNhg7Bwswt97RmxwmWx",
  "key18": "4ApcCPMp5H56AcmmNtrvtXpYXx4dszBqJuMDQc8F31z9C2512nzTtrChPFK8cF1EJSL9TDxWom5Rk79mF8v6BCyo",
  "key19": "3sacakry3Eo2gyjTiyStu8BgZ6KiYpyUpy9rTCkRKv6Njw4FcxBC45WsJ5VYbHTKAkXKTy3YsaJfFYrVGyFy2Rnr",
  "key20": "2FZ8ZikPc79KTigdLqERURMRvyg5Y4YpPAu96dcyKR1iwAXafDS9wcuEjnvQYFQmYXg3424rKLBfE4TQ5iuPY4eX",
  "key21": "j8LTR6AsYaYWXeXDYAM74uZk6igoYGJVp9WcfJLS77NGwY9kU3Wc4zndLFAUbzSW2FKMHQrqprU57aYzRnM1Yur",
  "key22": "5bR1H1MJ6TX4g9oKaXzcTu4niYjMu11Q8FLv2sLn4krihA4YKhVWFihUau3xabwmxMDUwJx6zbReU93eHHt5aDe5",
  "key23": "AmhhWQGubsdurMQNn5oyqrTTGc1vrHdgvt53Y1sc5seK1SaKb88hYr8JuqrStGBNf2SYFMV6i3azPd9v4RFtQDR",
  "key24": "3YZptsdURk4tCZKh3d4egnZoWjhodHTCShSJADJGnJ55UtLXFA36qgKihMkPicFScDj4y5GFjmTXAAXxcimTaFeo"
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
