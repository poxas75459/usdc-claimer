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
    "2qBLvizwpRR2ht6YiBWgR3pxKMX3DXUHjRqfWu3GMeMfEzpdVXYNV8AjUrPUS9voAKVieiLfzcRnrKQuoymo764P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GkWMttpzqdnYm1yZcgtFKpYnLvC69sMjmJXGLzMbdeSKRXpwvzfHeLfark6tdiQDrbtZow11zbchGh8XLjkk5aU",
  "key1": "3Zs9GiULGUQ74HkSx3hU5nV7Vsy88uGjmhjXM9RwH2iSSeeoPm3UURrQ4jFtnogEYwBpTkpCtgt7Be5F8CxVEijb",
  "key2": "5bFBSCCC7ARb2oprMP5Pye2TW9B26hAeRh5zMf9me5rDwy1JKzR6F7ZuzChAhDz8wPsCF8hne9nsBv2uHRp3naxy",
  "key3": "46aKRJ1gLyLSKB9LEVDVuXLjJMJ9VgoqubteBzouysFHqxKcmF4u85eg1TTmgk9gFE27iQwM35dW9AqEybcuRLhK",
  "key4": "4X3CkrNpsa84sSJtEALQSv84LtYCLQttW1isk6X5msUSJvoNMRs5XtWFFiRQ8Ryy6LEbpiyYtdsMMh74QoBDXcnM",
  "key5": "2wzWMPcgDS6R8jJkzyUGZcbr2mBSPUsgsLUpoCa1A3vm8yjEUUqBD89jaGxiYguHDyrKTYQ7TvpcCvux93hZTSnj",
  "key6": "3z1KSAG9CG6uvxvRh7RZSBtJAD8hfhP7co4oRRPmDTUuheikf2VMT5TDjrfWBvetjwiUnB46XFjdArxtJZ4XkvYR",
  "key7": "2p8TDJw4U35Yka8pkNbm383RXWUcbo7fDj9fxANhp1eXtgGq6DGZfdbVhFaofAMrCqtsh5Pi9ia9WhCubn4EFPZZ",
  "key8": "4Ti24YSBHgaSWXDaonawNKybB25D3H5q68WVNVmef2stRowCN2bnbDMCAVKP3zHjEZ4GSsq1DhEzKu5pDsxedaMa",
  "key9": "3EAZfPjo9fioa8ULFTYrjinXKNsuLzFUqQ3bCywgNeanF1v68zTGQkcxBhrHsCbyE4H2t73KK9PhztBTr5Cji8F3",
  "key10": "3NdHTdAiv6hsLoXtWiy9PVrZaZibBxgxZo9xsmyCUexhrRWDK9TM2QLLjanNzg2dW7h5djVSTdDDhXK3PMqJJAxq",
  "key11": "3Lk3NBYAprjb1m4yU8q51588d5EkzSdP7oguQ5s7Yc9MSopzKeVryNHo3CHMDPnsoo8NtqcvPxY8aLZsseRofmB9",
  "key12": "ct6w8Dnk9n7cu8vB1xfAgFyRLcPvb3kWGw2y7RKv44uZ8QhoJrBS54wwFo38Rw6jqkNmnfTxSyfGw7zgvyAj4tM",
  "key13": "3aagzZ3GBhzsAFBC9wmkzVPBV6v6WYMQfWnMTMGXN8wPMpv8EE9zDB2foSDGBvmYYt21btgbv2vJJJezbhdSMMHV",
  "key14": "3B6Tpncq3wuYSPEFBYBdPtcy9oHHQ5JnU5zLouzLNHvphTT3G464zLVCDEpHZnoh5PwipPYRomF91c8uvB8tvdhY",
  "key15": "5hpZ2vtHeJyTNjn5Le5HpRXb9RL6FqUZVKqdve1XWoV3CPF8Mb7Yhzz3qnN1qFi317iKWTDXoxxDQ8Q3yQT9tnx9",
  "key16": "3rqt3Yji7VuUxgSXFTNqPXypYiGExjcHqytPhZf4D7t7iXbfz6BBKJLQiVPfqAwf3FAuEQcY82HG8EdsoUaSeVhS",
  "key17": "5E5uAnHaLSwBQNNHsXzaMvPjCJm9jcZFZkLzkts68P1AQnmewsd8PhPweWD17hKZAXNk73ezG12itQ5gk7CPJDhV",
  "key18": "5nBjHpkd7Hqo2vrG81yKHsJ9PthKmsAGfaQM9cZsARq7eVxX9zafTUUi5VvSY5rYNx1raVa4LgXoMuQ51SGqpMUY",
  "key19": "5kCVyuFwF74GBoTCmSM2LaViR6aEuB8fFFx39zBBceyQFPRWHAXTBVxy5NUvT4jVi33pNA9ivyD6T7JGrzfbERrR",
  "key20": "LF73ob77pA4ZUiTTiVXp48uWZ6CxmNiTYR3bKmc9MPGEb2Skf65vgFHJVhiJWzYjfaDK5b3VCLb4EsVPaQeuTEG",
  "key21": "4LBDZHygdAXxNNvniHFcR7yZTJaW5AUToB7H6RTZgB8bJYhHZy65mD4JcXsEYx7x3gnfwR2kZL2iFkwY7PP6Xs6Y",
  "key22": "3Uk3Zb9UG7AdZCJbKWyVCShdkn3eVPtyh9GXHDfpXKTfewmbgkZzDHtgvTRapiQRCFg8x9q2JfwjDPznLxD84fAy",
  "key23": "3mYXq2wqu3EQawGmGJyq77PHVe56y7aXSBp2t7qJ2m7d7Pn6G7hdQiYJB7a1rXBPXGrm8YWrMENGbbLPaTBosRxW",
  "key24": "4v6cag43LmRU3X9bffJ44LzR7RpUdtCveHtuEBiLtwgJW6w5aBkjvGyoXtWcRLC2FXxEF7R2nPfPyy5C4xyvhmYR",
  "key25": "2QDvCjudD9BkMTkQhoTfMSif68voe5WcMrsS9PdRhJU8C5neEKbLQwgsrUFX6YgvgxVxXLFSvLtVLToBb6QTN471",
  "key26": "4muNUaayyvqGw7xPpc4tVh25P6pkxTVsVpfpvCbxY3gxiij613MdWSXX2xjWq2b6qGTFfXEHVzLmDQctyD9ocyvV",
  "key27": "453J8t4XCqLMP8JwWjZQtPvwDZCCzF1iycoJrvt37hLaDgnkGu94HLde4WjR9MzKCR9U7gNkCZhdj9F91hzEt3es",
  "key28": "2djmTH2tuimXENyUpDrpb2BrxXgHE2nSfFM4hzkTBUkuwWH6njTqd52jZkH2Mq3cGD91mz5w3b2hv4aygmzgXp8c",
  "key29": "4tGY3EoRsk2fgembrFaKMncAQsSqpVQwVNkSWp7qnA6xnRs5ppuGbMRJ3WM9qN2hHQWSABSFb1Eg1Dew6zG2hvcS",
  "key30": "b4oeaKtcE3fS1ibkNCQbtL1u2Cmhe1mBSUZ6QSaQnxM4gsZwNkMTWbKmyrRzPJ5xgDwu58zxCcTHm9SMzgcnEdy",
  "key31": "35sWJTQgUXi1anU3aetujifGTLqWDdVSSEXy6tcf5CuD565Q6N88A1NoD5z3hWyVR4p7bw4m82pjYbD9m7Ktm6MY",
  "key32": "64jBqJ6R4eZ41S5dwFACNpBpE2wsAWqzRb9FuCCkaU3GJaivUyuHG1dJzSzsuSbg7rPodN5AKBGNno898d5saLsB",
  "key33": "48dxBsDjpFR7YDX5MLHsPEkxqHJCxcStxycVsWn7tmczWnNF7JvCJ72pv3wj8LjEqxmjo88TLUhE1JPEpHaeLL2i",
  "key34": "4bx9p78uFEAL6aMFsWBrMXZUJxsuPif4KgzA3qhiv2ReQPvDqiAZ9bYUiT1FX9SRrRghnYs9wZs68mTMaRboeAAh"
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
