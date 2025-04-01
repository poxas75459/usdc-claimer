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
    "4yGZxTWp1rsHq9pWc6e6Q6AoytKEVNMz2mE7gfizuEaZYhf66YRXL7Mj9nbUZis68RwBgh8fzBxxe85Xeb7VKBJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b1VnNW4sdXJs9xWiWYg7boQTHFwzNb3kaaeRRYT8yGMjRDZe2atcWV7NW5Z525KX5sus3hQadpqdRrvqKQjASDA",
  "key1": "nJdBdobYUL1SbbfsnzMpBXiynzAECLTE44VspWgtQSdh9Yn2sXF6RtvfZzNMSGHG5Do5mEmXpfD8PiWF9kuDuR7",
  "key2": "44UiBpizJhxKNoNpeYTE8gUMbStvt4RpAbSkPR7TWUGW7gJqkYFRSgThoELWEpibS6ccRwaYNr8TGBcXHn5fvN8j",
  "key3": "25AV6JDe2oYsXJYRZ7DJnVFfWLoLWt2jdnWPyqRZYZ26YYixEZ7TQBzVws3N59UBVV64RtSaFsucqUSdSmx8iQ56",
  "key4": "5TddFSdWA9PT6p8GbmKBtnwkY917XYs89sw1eU3AHiWuEMKEh1FH4CuyRc7KTvRdXy9Fi14UwNUZhZAcbSJHJRFz",
  "key5": "5YEY4DdqFjdGJjQNEoxarZM33yYpvSsH8RXs5nxc7JNoNnUfRGaXZWHi21oEn178qhtpLMiCeQpumK79PxFxGFmz",
  "key6": "5UYNsHWKdhZKPqkevSDzbPTMkck2KfqYRpbvY1A3H5gJKc3LBEbyX9GEaxNij7N5JoYEX3LQj1WUBUftbuD4PCyK",
  "key7": "4RxMPoX3J6FDgUoh15Yc2gc9YmekvHTY7aywzbS1TGQo6uVee9tR7LcLA1szAxEdnRzLXPur7joCZT11wgmr6Fur",
  "key8": "3zLksNsSAgYFqFkfRVvCmqrYy8UoCh1QweDurz7z6Y58E52UFfDMTg1QUTw8U2RKLypoqpAXGVa58Bh2Wq7hTYfj",
  "key9": "3jvsMDYM4CWWRRKFZH8weKG2yBN9aHnyYhRtR1KvZkE6NW34sC3gBMAS9mDiuKNMVsLEVTs3dY1yNoruSz9w1X29",
  "key10": "31Kz23Kk9wmZm6wjUZE2abnW7PLrMs6LGU2jq1fFG4tdhdZhq3rdjqMHJsBwYbe9FE66G7f4TunuTU9BDwM9QSZb",
  "key11": "3DZPX2ZFnumGUoazmLsjmLAjfrSEzM6N2KXKsWRebZ2Dy4o9DbL8Fp7HQWNtnH1ApMWahKrP1JbwBczc8Bxdpp4A",
  "key12": "59hVTZHSQ9SvwmwgAhU9pSRNxpyey4tKA9WafAQQgd6SA2hLkCK3WdVBr7pzuRY3oLfYVkRjDF7YQMKJbnNK5tVi",
  "key13": "57Bm2aWSG6LaY1aj3oQHsji6AZEBehGYYorZ8JCMyVoNBkR46dscEPzaGNB8hFG2bGDriz3vUN8a8NRud2cLeAuB",
  "key14": "4FeyXgaofxaRKBaMjAXUGHANJno1sRnBZQMxtQPsdFr54a1odVu99y9QSkdxngrW7MK2FV8sfTVxFG2mLxKYdDQB",
  "key15": "3ibxpsmABiouYdy6mdeE3P2ChwAeHfPpgv6hXXLvmMfdqrRC8wJisMnKYZiDomSeZNA6T668QQDiekKYdA2yyj4D",
  "key16": "yer6D2rtTHGuK9MTHep4zwdr3xz4X94g84Xs1kSFpehGENwuoDUn1iWui97Ys12C96YSCXRm6PCecJm6aaF1KyT",
  "key17": "3YtMnzPWc36v4pTmbS2eTuB2iNqRhYEgDxg6UrYnabv1KBBxYDmMd8uoJP9qZxNLYXsVDRBVFg74V8yp2FBwoT9t",
  "key18": "2ogvrSk2Nn2HYdTr3k7yLSBuxGcH2vsTHtt2LseUnhh6eFKD9u6Zkw3FfB5hknGfqeK5J1BUKhBz8sRuhh5eTbtf",
  "key19": "2Kvt9EN8aDHUhMdoeSgzWxjDZdTLNdWhGptk7CzurTni1o8PHSJf4knrtW6TirnDPAdCkdtDHcK4fM1kLxkttaBD",
  "key20": "XFV6HAbvhJj2TPLHsYUzQKkymVR5P1L9czEaC5Z7We9EL3REtDbbpvDYUJdLJTtCS2v1NvV2N2fWYTTWTHFMnsa",
  "key21": "55djwR5pprfLswE7WmEivzZyuoczjfBAUd6avxZiBpXN9t8WB1dBD3QLv5ZWx3AcDwPZFN78cKCkHu7KUfACR3rg",
  "key22": "2nCgU4jtLsWYC2KEsjS6bERZZnUDKiGF6VavN8XeVqCWCcVdym2BduJ21rG5popDxoRKXXe5QEaDNb8m9RkdQTHm",
  "key23": "34iPVyxsha2nTudWBrVKvjp4sjXpuAj3bWG9nJsbEvnLZDua9Rjjy9NrZ17q4zhjLzyYsdVqBMqu4DCi33sFcwt1",
  "key24": "64F8kw9KUWhuywQNodPf8gZV634igJctB4PQ2jmzDCYfff83k79u9Zn4ucpxXpPiAiZTr6smZomtAmnEgwmuotDN",
  "key25": "45da9TfCxXck3QaN6aTceJBYVwJmEtWP7pxiHTnDsJbaBt9eycjucaCsxaBYR8tkRdZxnrBvL9GU2jQ99vdPqKBJ",
  "key26": "3bKGp4GyBKTdPTUZdXKghR5VZt88Hkk9zeBr99GwXKzbRweEfaXLA6Ct1hpmLccbNZXvVNM8RqSxc254qRYuxGMc",
  "key27": "2eEqKjE28xmEjKnT2ftj1aYvncLUyJKag3KUXhfJr3Cg5nF1QGaPV4pAHa78FMW46S6zhiHMTHY8VrqkvD6ch5mC",
  "key28": "641HfLtDQjhyWgmhkgFPLvhR1MACPHP7a4zo6i2eZBepZtCHCdMvxDQMGM37hHQh1rYi8P2NgRKqB4GQmj9D6ryz",
  "key29": "5YHM29CSX9H9ar6gFFyJh5Kf3zWdChiYEcCnF58NRGSyKpYEbXLh9bd8knXKqJUV8KZwUNVLyJwUmjFsg1cAHMBR",
  "key30": "49WS26ms1roHjaMARst7KxHW2rPWk8HTaAq4w94zEtyzBfwhrr6yikukqJ8EnMLchDTSnspNXRBrgnTcWRLvjTGK"
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
