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
    "YGFbzkSTyKXP4GsctLcZNXV33JCFPAgddBJABFKsM6nYfgBCFAEiy51TR5dLcsqaMaZG71fFv2sv6GiWUdHTcQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHrRtL4zzyVw2FFEZ8bVYHBGbQVb4Ctcm1JpTR6RQ5hTmsxXxQSXsqcscoxaxCDvdxxxeSJNPbqPSqCE5N5a6vp",
  "key1": "2foP4dbcKEJE3sfbqUrW6Bhhp5H7AN5zuES7t21pYWn7WnopHeCHxtWQb2nv6d4W3E4Jouh9KCajyA7CQCW333dP",
  "key2": "4AcSvheb2gV1aPgwuyj2okxhXZDJ9WBWhV2zr5tnXFri7r5C4jM614KqHHPCPTqHQFqQ9zy8YLd2VdsjZp4vQYdV",
  "key3": "5QSnbDEFSYQSVwJ1EmXT26S6XmerLXJuduimXo3MkvD4j5Grcti3Samjj97U95Mp8mLbNKZu5ebBzywNy2ZBhGrx",
  "key4": "4zWbNDE2xkhHAj9F4HVKEfYitkfFe4igtNchaCHcodamVYwV8UeDQ4Jt9TmWV2v2sEgEQhm6TcxgvwUdtz2rez9v",
  "key5": "aBsGnpKTbokwPQFuLQijgY5fQ8ShExYiCNr9qx2YJxyqbX9BMBW4Lfwe7fBTfFE2MC5oFcKpiiMC4MRDrAZmgW7",
  "key6": "5DL9H91mw4HboRvLoqFA2wFGYYYtsgSJWB7twm7Bn53wXjNWcG8jTRmjqEnaQBgihkP19qBH1RnPPzajeATZ2w5F",
  "key7": "5iZ3Qqq3YJdkz2CdyR5BKbLRh8CKWou9KYdnun9Ae5oJmfNuAed5oWbyzHMVSytbV9GAHexa6W24Y1aQQJF5eQrJ",
  "key8": "4TAUhH3bUhgetbzdxNmgkmSiWabGo4xrF2yWbs16z2LkqXH8WxJFLT548saP5gYqg5ufSDXoFhs4oHsJHkEg7DX",
  "key9": "4nwm4U6hQCY27bMs7dQz1cCQZbRT7Kr5sTFEF1xtWWjoVJfRAweWCmr4QXNWGUJ1LTcgU4VGQxLVBs7xsySxdbZm",
  "key10": "3QRJVsoYgpjUxXRV9oJ69NM1thECu6uaWv2FtuuhMUDTbduG5Uv9evDgUAz9GypD1PKNPabxud1NvJRyqKg9zX4F",
  "key11": "2Zk9FfeJdXu58pv2AtQ4YhtftTB6wtjCpR2EWyrg5gooKo3TA7RWXNQWypaB6bcxLYL4Yp3q52XQccRkQqnhCaGc",
  "key12": "4cQK8u9A7QgVfnBVVdJ4Ukxf3ovQTxCeXi5qq6xnEEfzMfGrU39yZfnSWNHnqXNR4sL5v3d7q8VGMEqWfcsqDc2b",
  "key13": "2dCBPTrxzgib5ELL64kv6W84ZbGPrvDNTVS5on5RBDGYKC12shvfaxn8VhLQUCcFKBiYBZnwjp35EzLpw1heRos2",
  "key14": "WoeidTZuVkf9RBUYKBNzdaxUqHRYFVxyPEuybvr3GcKv3RUtk2maUxpzpnYb3EqWymd5SAuSJ6yxhGc3eeXm7qG",
  "key15": "2W7TpVs6YojSPcx4HuwK1FTgRGEEcwg4N2iiTc7aiu23aas3eazCC4cfAtJzmDuTGNcvfaoDunMCqoC3bRnWkwq",
  "key16": "5wP7PLekj3rFKb936U4QppRkPL4CNuiSGioVfk41gbYWpb8wq1QwP69oASp2itjPBNtfnWFy5uX8HrbWHeJVzQYz",
  "key17": "67iPz8UWjxdUmDcEwbuW2GN6M3SZeCmhvGLFTJrEc8kJX4bBVyh3516EqofpRXBEJggCBwKp31kyhdnpQDW6nCur",
  "key18": "4ZNZKZ31zYfoiNW7zJoUZYyyQJuu3uTGC1mJ4xrTXFKmBSV33brY2P4SDJSEbgYJiqMc1jE6ea2KkpW4A1bTpjo2",
  "key19": "2jLjpePpyoB9MJuLE3XrwC3vtJCmdGu6Cr94rdyMZeUUdkMfBuWXtGRxasLX8YSKaK1YjBtG8doE7rAFrR5Ukghc",
  "key20": "3BDhz4AdQk6WdDf4vys5tzJ8JSAawaCncaj57X7EcFf39Zv2QheM7dFjAgLF9A9UxC6WtDLSb3cwTabVLUQdtKQy",
  "key21": "67gxhZLkjri2n5ih97SkLLmeAPm3FxnBsLaHVon4wN2Ae2KCL8vhJ5Xu8sYB1qyvyhJ3BYD8ZTchRYRrTEKyTGE",
  "key22": "F2UqS7Pz4qHWvUGCWYLWraVeq6rxCXE2bRZJ6gbr7yCbSKJL7xqimp37FiJb9AzCHGYGRR21kE965PuzJgQmrGY",
  "key23": "5HHW5HRrQyuN7ykrE39vH6hBFvvmQRtJdJHxpDfgZ1SzkUKEojNCLzYZuzkXLSc441XHUs95MmRpN7Dbpc56Y1pf",
  "key24": "5VE9PCCafJn3Qa5b8F1Apb4CPxSyRJi9JB5QqZnMsRwK3kxeBGXk1FQL54erZLYHdw8oBpdR12FVrspHedZXBfji",
  "key25": "p3ckgmCvTBqWNSPsxFkgKD1FVqcS5NswdHBxezJ3W3XqNQUFjZFjXnZiYsEn4yhfh33ScmrcMWFKxwKgv4iB8ag",
  "key26": "42xryF2tKAXvUgJ3E2uuWMw8tZcqmrqVWdLSYkPUWHtTL8Le8XmyJbbK2YJpivrh3eiZ28uV5NuGxELq2uJ9nLoG",
  "key27": "ZNPZUfy6ZgevgKJRSeWzwrmXHtY5SMWDN1HLraoPf68mCRftFhHXU4kjuwuYMa5kqZ13xCKodoJ7TJfxn3AcKmX",
  "key28": "4RDnmLh4EuKSwTTQLcoVp5Wbz215S5ouhsMfPemMNvshw6TnaP5o8MEjdUEG9Ziz962PMKJ9vVVQmMa8RsUS3rf2"
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
