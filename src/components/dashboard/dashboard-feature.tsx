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
    "3WJXPXMrU8qskBeEygBwcRxSfG5YKrA7QzFWJ1fwKqRzDzL8YBjGqkGfsoHtCfAu4BFfKjuHjTdKvpYxajpuccK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWAGTTvQk1PbESTF5gotyhaugpuLcTiSNWs1HQuGUYVEAoysjxTHU8fgz7h5KKenGPQGzfgCDVvfL67ocoRx3mB",
  "key1": "4hGRMCAobLiMMgyQ7HpUz3S7nAtzGgU66jQ8LbSyF5dY884UtrAh9Xxa79TbgVsqFNaYFGPZn7WbddhSh2KWM5Cf",
  "key2": "5eErQerYQow5oPv7LAwv31fdrjphA5HhtcgWLTz9rWhWA6x4NLDafHk7eMzGqCbJkS9wsQEJ2Xs1bNzciGT2bNtC",
  "key3": "3hmByxBXwhdWMoxvng21c2dATk3oCxfnSXPPJWJo4qgLhncqnNA6Z8qY67krd4owx4WFYi41vmzhsfuGbhXWMqYi",
  "key4": "2Mtb2p6Qss4YQ3XjyMCFUatokrzifGsT5ZhpbMaw7HdoRT3eL67vnAg7PJzxQQ4X714GgmDA6nVb7riuSgHsaKWU",
  "key5": "2uVVBdrPLG5zRgmXJ1xNYYM7Ad2VprrbujNKhGR8uTaxJcSE7RzMNJxvg9dgGtFEQ3e639yRrHj2bmhK5D27s48X",
  "key6": "bfQ88RQZ76dHNQzaHvxpDibMiCXLPzte89orNnV2MQCFdB4FEvjV6Mv4bwhKfMdR6czWg86fed21yo9T7D3h87d",
  "key7": "W4LMwv5FfupUaAoC55bQUnd3Aq59SbyiutrUYKx1rSnYynvfdwLkWiqm6inhJ29TDVRa66aHL8q9r6N8fG4HKU8",
  "key8": "2WKy1YCNpcm4EWnX34GDoEggjtqXMy1hyKot7TRJPD71FRFgWVFAtFpNF2jUxk5PFuJWywQTCYobPfqBbaaJRjMo",
  "key9": "2ASQaQnPr29mdddfozyrLxgFZdS2GbyvqrGRSPv9cmdeuksqnXWnZasCZuVJcueuZjYYsbJNAwunTik6ZUKZp5Y5",
  "key10": "vP7VuLYPsBuDxtNeZUABCFaKaZQpr9iBW7mxpGejgfjJ3veuE8kmmdcMFU7D5XfedmGstu3D4UfcRehJLj3kWUX",
  "key11": "kqpHFJH4ThJeCXwbzeefx1XMnztFHg85fFD2sLiYPfYPPi9ebdBS46ThvKLjACbzUWhfdpND3FGZ52xZ7BAztWR",
  "key12": "5HQEoWz5iHAzjLYXDuzaLT8bCLNh3937UgFDFGQTuPKQWyZ6rx3uorXa1JLQ478qWAwVQGE81jYcZU63vmCbUgxJ",
  "key13": "bWEzfUUT4wyKj1tKPCv6m1QZLnRQn18YTNJsEp6VmXNfmaUMDzPW9u1gNMLCcVinHKuBVu3i1VTV4BdWBu6mYCZ",
  "key14": "2Dj7zRpntWF5vXfEcCddAa3HECn176sAqNUyVJuvYP34EYjKDoE4gaiq438LGKbZ1GfhJD7ZBSU2vbPD6Xvs3fLD",
  "key15": "2Vz7wB1ViCrifDxvw2EfEacc7CyKf8UcYVrTDceDfuiZ73KdFf7XknCzZ9iWDBttt6gkUsw371xZqp28f7hg2ZYa",
  "key16": "36wah6JXRqbh7nqgJKktotytrByCAbuHQXfTYCCFERcAJgEYmb5x6B2VMgoA8KwAgEH6Qcup5jnZ64iUGoVtaE6Q",
  "key17": "57YAeEGwZyrAD42HMKi3daH5J3xVMz1f2z9iepmL12R4igi14ZKvmB9czWha7Zgu5hnSwU6o5jkRM8kt1KEMszyY",
  "key18": "2gNUVjgvhnXd62CNBMGVXNUERHY8UsgZgNgBxDBicbDQhtFaa5fkXXSUuJpDUdhavY49BFzrUKMtDAgxuQCWCEAM",
  "key19": "4tXCyer6YyA71GyJnQmAujUprU29Q77xyRnSN1LDnZK4D3PeWLGtBq7xgtREqkoeShgKwjRR89gzeCLepg1wFxHo",
  "key20": "4pvH37wx8BU6tfe315dHnV4Yk3DhKD5eu6EyRVFU8SwfoBDLojEwrp491ZFvhhKfp3iikLfw1jBV1bqhRbzeGbTu",
  "key21": "AEL7Zw2VSDbfNjzms8bUW8niHk6Kx7EsGM8cHNuNjVycgfUykcSpjKbvKeyDSnBiCUzW16u1cY4MYPb9Dbs5kye",
  "key22": "XxuknE47t5ccmNWbJPosufd1q2StCoNbPGHi4LTsSmew6uMmqfsTjKR4xi7w3mTYFERUq83jSaQGCFp2QPQsHWR",
  "key23": "5AAHwAsg6aGx9Q4ntduPR7K3ZbjwGi121sAZouumPdVUoGwmVxsDBJcDU2Xin7411pxA3Si5DPbu8DoL2dzCRp9T",
  "key24": "5CQUzjpppXAPxZdryacc9EcpikSjvX9QHaHR35WNuy3uPbkmja4e3XiKL65xE3XU5XN2qWNqWbh6Lvvw4CJj5GbE",
  "key25": "1QPP9YJcX2CxtawPERXhy4Av2nrM9A2pXAmfUsYv56BRM4i5X3vWHV8AXPRrt9KcL9LkRZfXAceqijpKkWHGfYP",
  "key26": "2X1myhrtTtZ778Mjfnmn87Y6SLPiD4APyt327K114zn27aSYEqijuX5qzDbrvALM5DESwSYAcnJGRwn13pEF6rNh",
  "key27": "Y3iDtNg6Te1Mc8ptT72bNiVUjNNMcfm2x74mPkFXMQ55CT72GnSmr597fxfxYuUoxxP9eYG3sB4vb5TonS9kdct",
  "key28": "3ZwqUzFHTEV7TQnGgPokVUduLPZfHAuFWiqrmFkvW2QxJxJrrJYeT68zgSHqvPQao5P7XXidodmyCwky95AhhwMM"
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
