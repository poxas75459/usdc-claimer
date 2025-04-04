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
    "4eFvfgmk5C47AvJEu2BE7bySnQjsAyRiuwMCNwKf9yK7GPMRWRxCrKAzcXuPQJ5NkN8SDJWRKPdqDgDigQsm6Tt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRwM5rMfxcHC1gZWMRBkBZV39ZRxdoPdFWyshVQ7FF34J8n2XtkvNtwW1zvmJzPhFEhsUcBajDDzzU4VNbK3EUP",
  "key1": "4QBUajP1nzuz4Y6EcMpq87TikfNt8URyxCxcfNWmansD3zxYEcZAn7mZRuh1yih3igh1fS9b7Q4x83RmjeLg2VZN",
  "key2": "3CqXgwu3HseqdXZQqutH3NdKwSDRZhXwb5Gt47kHqm3MMXMGdbQod3zDaDW62oZGxHNYM2KZRnKiDAHGJz5xg2ha",
  "key3": "211n4mTYKS9SSEh6pJsZ5hnPNwqswGMVSMNXciGQSgBc6SmqARuU2dK8kcEnTpZQ91Z4mX4we2WQjkM2eo76X7xs",
  "key4": "5H1t1wGQVAsz11sdkPsfhLDkw7rjaEy8FPnuScsRCmajS8NZAXCx7gPPqEMw7pDmsFZ8pjhRTHuLZrsYrUA2p4jz",
  "key5": "3VQLoD9pjoULgzUtUuJxCLqeE5HeNZAjvtrbak8Q3sQmcm1sUREU4K365JCAvq4n2tUbuQFmSuv255hcpsgrnZgj",
  "key6": "2udBgtB5GASUQfPnSwiWicyUKENrVPB8H9sGrFXQPY9tuFZJgEz9ovGENLDJLG7Hc7JiqAQABxve8ZNLGQo2xJBA",
  "key7": "vpB2wMQf1oo6TkJuKkdbEJ3YGzm9KepsSitBeDZCStjLQaQX1NEEda7qzzPSg62tTtr8u38oKQaUTE9TsST1bCk",
  "key8": "31XF9LsRUiqtbRHGd3Rt8dEwj3WimFCFEoNbAm3CTsUGjfNL5zjectoyhFQae6ZXtixKLzX9YCXEvspdPzdT1dq6",
  "key9": "5TwNJLvj16CDSgRTet2egGFQwmYGKnFKjG92UpfiNZvmjUk6Dom9YXeSdybjneSigZAdaw5vMivumgCriTa6FPa6",
  "key10": "2YgvVuaHf9iUZpBunxtYp9Fs82U3E46jZMQXQdQSq4yyd1fVT4BAXyaALGJXePQ8goYbsACuZmWiJwUjVMzMgADT",
  "key11": "54wP3iZWBLtni38B2Zhd4iWHBJAhRSHhcsEf6rqdXQC5XuBFDdmeZNqWiwedq7awZFGekygvcvZ6Dra4fLGPZXy5",
  "key12": "2RtjwDRCAxarMzWpQo4BqDdDmuvKpu8b6CmvvGpCcaFpPm8vcPgdHrpvLTF2eQToEYvDCRrjhKuon3pW5VJbY89H",
  "key13": "21YzzgwMdaF7sJnsq8iYzdLZ6BKNyeN5S4uSnaPmXqxhX4Wvg1KoL1kjdHgLXSC7om51WLYyDitvqedFs3DBtJwA",
  "key14": "odage6njUiqr8JaEEuonugMw4fTdDy7BGWRAaRRYiPBZptxCp4Gh5cvwRqpAqBnLZ6xXoHAbgqPRtpKXnXppg74",
  "key15": "3hnqwcC7q5zSceG5Dnyz5SMqTEPQBJRzSY3wNqAs16hx6ioSxR3yBDahdMFyNkQ5NSM41qnrTduHSLQxzCD4DPn8",
  "key16": "2S2DY1k74zX7aEsZ2XjuAnzLYYYynqxieWVff8wcB7mviX7fkDzzZUq35GH6ct9Kc59yrRmexgdmU9PDwtfisJen",
  "key17": "5tRRdMjaUwmKXQtuFp3eJTNXvRHBs5UFuBAmRcmPUaN39HgUPdHMaQyHAizy1BaysNxCNr9e5bAUnxifT5e4oxsB",
  "key18": "2hfXVjwcr6cuSE3352x7NCvNYSAB2QjdnC17yUkuty2nJYTfBRzQCmNqTeT6E8pzQqyuHq8GERbgFjB93GKbJ8BV",
  "key19": "4FaGzvgmypFGWREohE2rHWfsTFGqchgDq5RPd5uJJEmQa5iyjvnPjcxqUaL47gMmeMvVrEwmFRzch4c85aChtdyn",
  "key20": "4kjc1boTMrdncrq9t1KwRggM2MDZsCijaKxRNGDZ7RCiwgEb1GzhA6t4DgLaQmKhnN1JL78pfXuo3YQiYWdKEjAZ",
  "key21": "57BwcC4qvrrjR6pCehNzqkfjodgu4ujSBshR5Mg1bPeuFQ7DxHHgXcqJduYmAH4nwWyKZBTApszQkSF4Xa9o1KvY",
  "key22": "nqB8LmewyhsgL69boWK1HhMA9bhF3uz7frdJK44hcPQdH5bNR9z6Gi1tcfTZ92aA1jZWpkdrGgqtzZkwWLFnqNq",
  "key23": "2hN9yYtG44d2XfruJfCQ2uGW4b5DnTBh3rMuMqZyJEHrekxfjvKiegYzzzCfGAgRJrdxSPGWYyizriquUJTa7yNG",
  "key24": "4nypH9MxzLdrA9FmoPGs2vuWd48ocUQBrSybKpHJobpqwZjGN55GkrGceytVLyvVkFjKZww1WY72LbGbvtMGDmb3",
  "key25": "4D5ihCX19FznvHSGKdvG9k4MP3fFhCskj4Mfg1AKVQWnzjQJ4cjhMgzQ6spsZvyaW2RP1HDEeYggQBRvuZZGuhsi",
  "key26": "4Djmq9wrWsHZkjT2P772g43P33vrBPLi7Apk5YuBtnDK3gFDsdhi2Zm6SLHigdWfshHeGGKkfj5c4QSK4ZC18y8n",
  "key27": "4KfuDZroGB2GcJzZyAxby8xXUsaB71QnS68HZbaZNEPC87RT78X7ZjFsDVxJJctKANcAHQx63XfbEqwwF3NGmoKF",
  "key28": "ZnWBrncrERZUxpfDZGgPg78QybyBu4RC8YFUjjrQYEK1qentaXfTNmRMGp8bHRqGMGL6sXprWYHofDfD5bPrb55",
  "key29": "5Qjg5aDmK2SA67m8EJgjvQDCbK7Sr2dGuXXPH2wtJgR8MA9Q6NAHEzfy89gi2wppboBVAS89gWnU2Y9g1P96jVz8",
  "key30": "VX6jufoYJtuT5AHjMx2yCqBarq3KdAyRo1yhVATG45sesYM55dxqz2Hxu9YonUV5eJgqrnTgkYowy2TvXVRecEA",
  "key31": "5Tb12qUohZS9a5fPJ5ZgNXaM2Xwhnx9cTLRYeKRroZBJLfHi43Ka8raFobeeQNAt1EszijA1ZRzrtF9PbycpuBUN",
  "key32": "uV2jmmG7JPE6fj2My2mnJ6ysViDCBKfUubsKhAqaRujahKfgzwfFDc3Kc7TJpsTNg3p8zQLVwGm8wuheYJvwK63",
  "key33": "2v1RuVT585KAt6dRUQKyeXvCeuHRPtdWNsgsutrUg8aDUmcKKFwxYjT7GA6C4bZFP138xEY2W3vcrHCAtM2E5bK"
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
