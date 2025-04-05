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
    "ZKjkb5Tr5eWqb4Rq931RmQvLPRazMsNeC9vAa8D57CBkVDPjSc6NbXBPeHGbwu2ZY3nRtXdVoW1jjE67mLN5WLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pf8NukUdzo2ETewWa3HeXQTrojd4s1zUf2KFng2HDPDnAkhBZxWFon2C97tJrumoyWWRcjdYCDJPVbzX5vz6Mi6",
  "key1": "3McKTh77NJKW3rsx3wEjX2VAZkX96ZYAhqSrCTm2PNNBrAekvSJc3jmnxJB5B64FdAmGLJevbgv97nmRE2iHG8bp",
  "key2": "UcqbT8C11fqyoMWZAsKWr3sSJj5mJqwW4ynrqBBCDq18WhfcNbidtGuPCTNoo1VPswnJAN1mGnWdfP27kgH5wSR",
  "key3": "3NgZzeDgW3N2opHgnCdLkbBLKJx4Ctj4VtAqyf6kvFawBtfaeKmAv5qcwDvieFb1LNTRjeWF4c3qaPJmEULi3iPz",
  "key4": "3C1d1v97W76d1TqYGdGRangyVZXcJY2sYi2U5d5hbxv1csqaT5bSy688PXcFuX5499vaM4DMbwVWWUzLzEZ2zn92",
  "key5": "Xbh75gTiX3HUy2iE4T1QX9fggY8t1SG3YgFWUwUXeHnpG8Wdbq9GGfvF2tM2J8PhB7bLMZCbzjr2NKzqecgYZ3J",
  "key6": "4YdvKFTRuREPanEaYwdbCzkdZtsVX1u91rKVYRFRmmwbtvKTmSQKDFadGgi7dUKfYfyx5KjeTGomLpJcT51jvHG1",
  "key7": "y3PsyhZxZm6aBUAMzDwWEZUnWd856GGGhFfudpYCMM71CTXRZwgtU3FE98BwRPmbPxpg1uffWEpHpZaRkoTcABE",
  "key8": "58e1JxBezG6T4Yzgy3T7aNSEbdNebzYpnxiNN43SgjC4dK8wbVfFJpZV4L9xuKhS6NgCFJU9V7RXZo5FGsL3vq7w",
  "key9": "4u2Ssk337PnmzPWk94om4ZKqdhfSkPfRmAzo35GUSqurbT5hgpLogyLqmHND7iYihudHCAgg6gPhBt86TgLa71jh",
  "key10": "2oeqFwBEB76fuJcKGk5VmTbjX2W7qMA4UmbnsNqJXwPdQF6uDvTiJn35ZdcAW9jw4HUKQ42Z9BMkLZejxicB5UD2",
  "key11": "tZTRR9Fe183EksAUrTdoam21JVnZ8GE3U4ftV1EsoQypSATpjCCp1aCG3cg65CYcchUmygAAp5gMxtyd5gnZksq",
  "key12": "4uegtYXETiFQXsEPLdPqD3wABaBd9ts6kLzTPmAZs7D6RNc91SqYhNGKq4vvwTjr7XQ5eytwDrQD37MJFEDvDQeP",
  "key13": "2qmgweL8V1S8176VE4G2vuDnucYzcTyxXWb9ESArfZd6p5tGZw6q9MzEhdWZ6jRVjtkjMkLehQXkrBULgq7vqjUY",
  "key14": "5aiwLq9dhnc6NAP6DMEpsLF2LtpaY9YN1Rb7udds44JtE97fqyamTrsZz7A1SpJz5Tsv9DD1E5y5n4gh5cbmFCto",
  "key15": "45yJdBwwzd3a5ddecPZMFdGLq5AUNPkDBRzT4KoAmNL8i9GbboSQM2ggC67iu79rTS45uTa8owHvxPk5vKnKDeio",
  "key16": "5TkfBZxn2abk9pK4ovrKXhNzP6e8xBY4DEee4QknjadcmMc8y7XgVZfHHTdJoBsqs5JJpE8j3FeyxhiFTBj1QQVH",
  "key17": "4avDYPd26wHpoZrrSUSDbtJyZmsUcLkQ7BZnEeY31KfbpiS8Xh7uZ9nxVwq6dTMvmByA7LtHM2VJDQFLkLSdR3Y6",
  "key18": "5LRUGo33piADXQYvUzfwsfg9C9eHwcgZiYvptb7YwmvRWATFk5vfVkKwtPgmh4cHFcwGstux7q8aqdFnPAwG5Nm7",
  "key19": "4ebmRJiZen6gaZxRsoYugeKPzxRLwQB6Qh4d5jSQKBsayVk89xVq1KaBXbNxUdikYzbYpiRGhbytGrtqtcDruEKs",
  "key20": "4TdFh3i8Nsdi6NEQn83pHm9ZHdW8mdvC9USZ8RhQLZouvcux3xySmB4Mv1figeT8HDSTdXJ7cZx4wUcXMGRQdMww",
  "key21": "5atD1fQAczMj9tcfS6M9ctLhvNmxDgLUnMCDKqTxnKZQ46ax3XXMnJAEMD18HjkdQYCMgZnJcjUcUyD9w2D2uLFN",
  "key22": "411hi4MWawU8cmypAuGfiRnEbgrYeVtDL1rYnaztGbTxqaprhj2wmqZVL9SzNydWCmRNp4btvsumd1N1GzyFSiS3",
  "key23": "5MxvztK5av2PHuMbSgzpFXy76E59mo5ycRbMjQqqGmY1S2Ded2zzmDnEN1F69TpQNcqCM7Ey2XikgpvpUjxqY8H4",
  "key24": "4bBCXaXc8AbxNuVzoe4kNGpT1y3zqaMDngYxMGMWTCiRHbBH6xhQ7HLDht8rA3LJ5xsF9oVJz31r6TLWwbwPMZrQ",
  "key25": "63tkYbWHigQ28j5WjcbsAn1AXorcU8c2ptVUJpbWacz2Y29YSbMkJXJHdKrdBvUiDTEfemCP4cnM8d5J5nZK5jkA"
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
