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
    "4D84Ye1KKYyeTkFAg19gdRbjLcf1YWTYNDDwkbTScdVRT89yAM4zuqFSbMAXfy3jrnNsMtjATjCMSW5HPXCzpLVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13xhc5FbrF3A2SGm8YbbQkn6gZZGzXfEoRLdDJiFRGEL2EXj2zYTEmHdLxcFEhjcuJE96ybgAGxHTw49dLpjNUE",
  "key1": "HukrYTYdnAMnxDZ5xcqGHNZTHGuu53Nd5BUM25SC5U3oHRdhx5sp5B35rfq9BKFRiMuQ1HVrJ7tDHXULkvxdSjv",
  "key2": "5cs93zCw3GPiJJ1vuUsWaskUAz4nWZYUdWLhq5JFeyyfxz2oL6ay5Y2d6Zp5rbEQ5zGUNGCkptqea2vu2yhU95r",
  "key3": "4AEFZf3QRQs3UA54ga3EiNEzMeFw1zkP1GdSgcH5CGJ5SGQncXF3GchFHL2iAbJvUKx1gPhY99p5wbCn8Tp2xGqs",
  "key4": "3nKJpbVPyfYV9srpVkJeCseU8uC2wawMSFMs8wafdiCjGu3JqKYvrgDPv2Hx6mhrYZMuVmWN89dGcDy3srb1ukvf",
  "key5": "ddsHx7TiWqsYVQAMkrcEPBEvREgc5C34PFTNMovx6LJHNmXcxSL6FmVP1ffQjVpWESw7Phrpj2u1b6tQxVhiN41",
  "key6": "3oshhYezvm4Jk3CMCbaeRCynxyjrLFQhrGvfrXezFWTR2PnTZasB4YLSv8SNXKPwmEe71cyeR8z8EYunGArvyj2z",
  "key7": "Xj2LEJQjVfjU5rhiiDCq9CsicWAFryg3sjduhig7oxvsKtKFmHBaGjEoPvkNRpLU2ArJxkUgR7DVxGvN8D131xs",
  "key8": "2JiFNViQmw1BYSC2CqKqEGExNjxkwhM4JNj3DEsf5v6hpYF6tsgKRJf1GkVBbJ3J7adUMCbPE4Lo9tJSfQ4P442x",
  "key9": "2o73fxrApfTbZcvx5jZtMXv3KCQYkdnYj1Cpfa434VTHSsAZgnpsFCAQE7MryEb7ymRxMfGRg9qUepBTueriQ1Dw",
  "key10": "36hi5gcAf9uJoytjzLsuAKomd9FdL4VkQSL8JihDZcKnn4LWZxEsc1mTPGh4bCtxZY3XafVNT3ieaLp427p3XmEZ",
  "key11": "3aTpJzJnRKfqrxaQ9rEcT5GFu8Zo5pZuz2qG6AoniqDEe28A2PZimabjEw9E1vs5xTUQEjXFMPC16Hhv1phRFeYF",
  "key12": "XuKfCZtHJSU1m52ewSqwySokkRxc6yLTK9ZJuoF36vhwkaBQpVpkFmHh7f13BuNtxJ2Y1wMqf6BGzTAsjn88Mex",
  "key13": "5xRJKpu8PsN2xg5H6Z7YBo6ToLecLTAZU7J33aFYU5mNK4BJTaECR3XSiWePHobRYZnJkjnTQM5mxmuhdHoZWB96",
  "key14": "2owrwA7tmLdjxM2kzx65QkiTgNuadzQmPayqNSU4QGt3niS81EkpovhEgc25b3mmngNuhLLF5dHGxBZSxDU345ig",
  "key15": "4uCkXVCo8c6TNYqJheKRQkDYPBWAssZK3Htt7xEUWZVctEHM7PhTkbi4KXLWyFAwKrWwKG8px2229gGfi1QEwTN6",
  "key16": "3oQft6uEWGZqs5ytSaQUsCyctm5F6j3i2eXZxMYDFsyEeoqRE6SSuEeJXTArJ1mbF6EyBqftYrb4a2ntKB5zmiLr",
  "key17": "2BX5ir87bKwRHD82Wd5rHxsLZGd6TmHrvcqTYNjco5JHjkCHKixf1HDQrPBUfw39SHaK7vohvVa1XUatf2wD3X6T",
  "key18": "4tBWpb4b4mntHB4ZkB9WD93tcZZKx71caxmitct6BNMTNdyxvP9fFZwT35MALfV8eCVfSCes6xvt25TCXHHeBKLS",
  "key19": "55X8igPwgzk8FKGvQvsZJnkXQL2pFnnQYQrctHdQBkWXRC4B8MKWps63ZHuvQouU2DaUbhoiTTryJ24LKS7ho2F7",
  "key20": "44f4C3FpUokdkVWJVzHYmcCEmrcnteBBeofDj8GVYSGk74cDAu5BH6E2eeMc62JLuaGQjeMtxtxWFpbsHG56SJxv",
  "key21": "3gEswy9zGYNW4HSo3jj6BwP4reH1bJg37tKCQMycX3Q99Z8BbMWRHGdz4a5aviZFhN2oSTsH1SM6MSzMipTwwEXu",
  "key22": "476SixC6LnVxf85kppAz6Rkv9t9Nyrf8h1PBHftHke6EvgkbWjA4frRrfvNTR1fiauKHSp1ofertQfpTi5QdpsJP",
  "key23": "31zmFEQZPGSg45r1K1mUx8rTVGBNmnUuLeAGkCUmNNhGmqzyffjLQU83asD1P9CeFPAJcASUqYWAP2L6sFfmZuXr",
  "key24": "5m3DBmhD8QDJ8wC7C9FyhgkYZfnkyb1XUbXDWjAQV7qGKrWwEKAXtDUMWJBLfQyLMaqxhPdGH2AjF4HhT7Hj1PZe",
  "key25": "24TB9dmGieZFTigVN4NUCUtnb4rk4Eij3b5Nduef6eAdTJnHTMwZgWKZ5RnqD2eY4outiQJm3MpL7FbpdZXD2rGa"
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
