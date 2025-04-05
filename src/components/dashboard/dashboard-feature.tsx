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
    "4xsFmrbtkCRrhzVTRw7RjGZknKuirKLeyfgm9GA43dUpt8zP9GHkHdbLK5tc93xAokVchGobZFSm1eKfRUMM4kkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8qgdBeXDku5rhicmhoMPjYUXRUktF7KP9A6Dc8JQKtt3sMkyXPEWEwkW7w4qyizU9VeXSgBgp492T98VpTSvj4",
  "key1": "236X7VD6mxyNVJdYoryen2XxemjUpCWXQqvDbkc7UFmnP41Dgxc14aEELhsNijZfBzJ9Y575vNyUh9Fam8AT5vTD",
  "key2": "36fC57NUKtUGERMqP7YGCBBJqSwVrU8MrDrevkUKpN32kreQzfJXfa2k1eXzwN7hypVELHBuGDmS91GzBp6HN3qp",
  "key3": "s23GTQd8b45kLMX56Vvoh8x4tdWQkSKvdun5XnQiegpXFofM5s5EAUhAJ8zYDN4xQSMBhhSLr6ujviEc4Vrwg2d",
  "key4": "4cAw1DGsTWCfQfyca2iDJMiLz2tVnJNPTwzyQQyVDC3Qoe5dcxxf8DSGorXad2NaTTBKdf5v9joTCxEbAPBiTAcQ",
  "key5": "2TavSByQRDewn3DE7SLJDkGHH1ZoTL7YigQzMoXcewumvd8edGLyqjtTATNWgqUt3dszTvfH5sEE3L9SQA6SCLup",
  "key6": "47MXswMMqwSxZFkvyEhy1hFpEtyDXyZ9gctYFAYQmuPUVm6goAHinPvGaD7hxqMLBhhpa76W8eNAax2V5RREyYGQ",
  "key7": "5FqFpXDmGcenZxWmFiTiG3vZGBgPAPYYW8BXAzXTt3vjWgTZibKFWD3KJXzZdYS1szQwdiZe8MvKb7etpJiPBZqX",
  "key8": "5SvR1UVjkCZvYEq45hymawn3gT7jm9hVkZEne9rjtgorpBistN2koHmDQW1J8NwvbVAo1sg3bymyXzsdSSvztjtg",
  "key9": "2RBhnv73GZDtfBYKpPPbs5Z5RaAgEgjqxi979ycEPvaAYHsAkxzcw45JJuimZbnuK36tz3zqB6siXYrFGJsPrywe",
  "key10": "5JXRUXA9BbXukFmoEEhU69kSBAmPizzABgKSWkycJTkJibRa95wf1rViN5TmYoEtojxxEe6SFV25CaDoRDZN3Qru",
  "key11": "5R15Vbb4PsSJmGsu5EF1NSrKuGnTeoPXfDZ4UoVymetRK7DwfRXGKp1J9xF7YRhRzjudh2Qv3L6PCGe5gdq2ZKmc",
  "key12": "2KCALZrHmgnwX2vo2JiF3rzo8DsW2YR8d1MzoXbBLcqCMto9pwknnyY3oN6ZCp6JekXQxWpZUvcpTTDispCYnrXK",
  "key13": "4K1gTWjxGcxTcKGJ1fuHhnKQKuE6qCfrBTv2EHzGDcJAKTLWs838UYYhqjELVqWpd9iz4LhsKy55jsZuZNHSNEdr",
  "key14": "44DFaw2NyoGknbWj6SWjbFjrdDVtbxf8wU2DZuyomzTaD7abX17dfj3VukkfDen1bUuohyxV56ydeE4p6Vi4ztQC",
  "key15": "5RMrzTZWvb6mYs6bmXe6jWxQtDzV9tZv6Qqy4p7844hs7vffDofEYLkjCUcFFkp3WaSAapCjcfmqzUPp4USLcMoa",
  "key16": "3LWFKRi1x4Xg5rtTM8gKxkT7yyfMyGVWb8ZF9KWETBRZWT3LjnD8Q1H2xPRQtL5hLeVKMmTpGV3HVYwLLxTX2oGD",
  "key17": "3JsCNfyLzEAvXRAfNaA9TSe2pWJCn89CM471MxF4449am2DfVAngMXFejhxHzP6HboVCaUY22r9XNYv4HLAdEa62",
  "key18": "5eo7m6aXN25uM6JBDZSorFW4X1M3Yo3aHWWnYtEgSHvRdZ7H1KBRNgHnj3WLn1vcJbGR6XAtvnbJJ2kTa6ePsR8e",
  "key19": "3ZGaEEkcMWLds8yWryQX5Y1aXCcQBSBMRPFbk4Cd2B2JauSDwWSwfScckk1TBgLk47hmS9i3tiBzW7mxa8USRNi6",
  "key20": "hffXrkaBFPgnLwhy37SWzW5p77rCugs8Y8XdJozCwYxDsiWd1u9L9C15wHFh7Z3ve88urb56hJWWvd7Dw9P3uJA",
  "key21": "4d3HPRv9saua3DigFFPyWiXVQ3XiQKGp1WokWco62KqvauWRF6XaQks89uWkg1StupDffU7NJW2ugKxs3yrfJKmM",
  "key22": "4yFFCqE4KV3gkJ1Pcj3rfVRxBAarRRmrSQkD8UUprFiD74bTSD8HLkunw548nHbKXeXVgLxYezwPAUDzbF34L7Zy",
  "key23": "iVQBQfDd72HEMLMX6VpFf6dviC7namLjddhy7vNdkCVynxqHzryg4TXbyJPxNrm1ZwLGyBHRWNHkR3dRutiDiPs",
  "key24": "3gZDgpixV4vBfw8xFeXSpEuHhjEjgzZwHsCJ9M9soabLKvDz2LBhmSKHpYDExtvwaeYDMVjwTHystHGR5Vh4ki5k",
  "key25": "3ssigWG33xPyZpMots2Tj6WaRJyU5sqBFEsVZw5zwsUxa8FNmJcQwK4eyvZYJSNUJWgKTgSPGyJXE2qEk7oqxL8c",
  "key26": "4t1Vx6tiyt6hHHzTSZ79jeeYkf2gFaFW7YEbM6x1ERTJjALuJCwFbuR9DEs5AxDgqvqyR5TnqXCUAwXdhiMa1SdX",
  "key27": "5d4h3aivCrcSJUxWPiTuxjdepisDDAaWq7Ve5WLCfikcsoq4irvCigYXmgiJHXHGMUXxv5VaoWc3eTUtjLc8bvVq"
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
