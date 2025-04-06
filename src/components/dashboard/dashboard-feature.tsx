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
    "5gehbNXu1nCvy5kkGyips8TgaJeMLM8U8nU9ouz3qmdWTjPK7DCDBQTwtP7nouswVN1FHukTdsSYgCsbWEAeyFM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KXMXxrEECo7mxJ8Db558sto4E8NPP5GQLGcPQKxQ7ba4JRb8kYpsZLMBAxZPwALQoJfE2HB9uZ6RFoWnPSCtCj",
  "key1": "35USqnF9MnnuT3jfeWpWhqVjEWSnz1EZmUUN3gXGsTnRZSnAPpnYZ5ySF7FteEN2fjypi9oYG3cGgvxdLcD2MhNc",
  "key2": "5ehg8qJ9BXp3HMGHZjBms1vxEzXKXg5MFLYrfHiNfQ4U6vwSMStnDdQtpqQavx7Sf98TMdg4t3gJkjpz89NK6vzy",
  "key3": "4kThSa1jXzaBZRDNbW5Xnib8QuZDtT96RnobjtpdMvweP3gM7TYABvjroZk4J8nediWoSZUGa41ciuSLSJRnbXRe",
  "key4": "3djKb1c9U9HfWH6ZDci2yqYcfsUsJE9NU5QVqTfoaDvbvd6ABVxJpNxMLd2HB8sFkvZQ88Rodh1y3bXbiUoo2pAC",
  "key5": "2HLGiDwHuQ4BaCX1yVwWQ8mebWkeEaExs3GXAGAexiffXRvZ7wh49s1zmsVGrmFnimij8tsvab7MwtAG8mjjALui",
  "key6": "5xnD65mctctXE46LJvEZjP85JUPu3MgXKfBkZvCQjkpT6Hn9M4PS2scTBUyZUPkuQ5uehX3VR6tGxAbMR4YVMKof",
  "key7": "tzMFvoy1wNhYxr6r9xg62tQyPRJ1xsC2nFiFtzXg2N4osp7Fi9VzyQWGmrbppSaafmY5k26RpAFZ535Cq5Yya5U",
  "key8": "3F4mJbu7gd99Px159SmP41iDfdgikFkukFnDveWjdtbGfdGRFXpkwYtyshL1maqnU57snjjDmYd4h3rtsKYB3JBe",
  "key9": "5HzW8wuNKLFihjrCRtAY6LDnnpAtyEUDCRUDBSxsNm81g7voS3fZMYGJobqaKepjtBD1w5aNC3g6LxbnKJD5xXdx",
  "key10": "BiyyCFv82JK1ReNWabqtuTAxGvPMp2buTAr9csQtaXtn6WLtrMCatFRAQefEeENEgHuz882MRKjNDHmdxgb6Dti",
  "key11": "oZJqvndMfqkL9oeGFsYb1jxZGrgo6QvqUNA2P6sywkMbYqqnXQjmuHs2TbAxuMGzWHgVDA4bzGmvYUjjnQYdE9c",
  "key12": "3z6vsxfSMoMpCPnhegf2ESPgkFSyTGcDAbuot3EadzEA5P9WiJprYE9A3VijXMdHTuXbtu21ei91f8h9F11FAskZ",
  "key13": "5C58F6Pix5XXb7p2s3utsdpJDrgPbZV3AJr797KVJv4oM3Jndit38ZfVWxzh5UBxwdUgFVF5iGP5scNAZ3BtY9sY",
  "key14": "5BPK6kzwc6re12XrVGCPH2SD5BwuFcTKkyHYGmcavztk9TNU629K8zryu4e9nZY8roxqA7mMdUNtxAQH8bxZDNd7",
  "key15": "27vtMgHyQV6tisBocHCX8ZYbKctddfpgF7JNyAxvtweBvsQr6fxjupNVaNHRQNwNdXQU4REMGuSSGr3qFWr98thC",
  "key16": "3LdUxegetPuPLgymJzQoYiuAE71xmRxbE1kNehbEBuPUcvwtkSCat57AtVR6QH76oPx6ByPf9SetFDy2uKPEUyiG",
  "key17": "dM9bzoT8ZvAoYxrTP2VdzYz3dVax3Z1JqBPF7Kdeou4Ckn9GGfLQfguzwYvNBTFqM5qhhAdyGMd48LWL317PDiF",
  "key18": "3jLXV4ztQJFB9XYn58x5sX8zPhKieKZAg9hwhmVpBcb8fL9C78cLJcaGqLbmpjPArTrVqdt8fsZAMngBQLTPEHHN",
  "key19": "3Smf5Vd66iARC7srzb7mvYk15vQMCrejkh5MDoWbQ9nQ2BfKyUzWnVyhpSzn5i1Fv5W9TFWHTQoXax3wMukLqvhk",
  "key20": "V8vqpHRpRpARARPVBd9ycJvWcqJiRhzcxFtdvNt6qsRDHRCYyseB2tDnZdvoorNd6qaGEzwbC5YHtWB72E56Wwc",
  "key21": "46XekhG8sxqXxFvMWkcRCqNJDtHrnPJqNepUt7nQu9GNELvHSn6gaCA1a1qezMWomADutufnaw8Z2UWV5gCpwNFM",
  "key22": "XFVUnBogRnKAazKhEVR4UqWjm3Uyp6qM4vSJyMGzvEx9GeP16zqM1RxegAr8bYhuXtSFE6sZ5L5J8H7auNAaevJ",
  "key23": "2SGDGC3PcKZetcdm4e5iP3B2cf7AEhKYFyPsFzwFKGwFRaxLuLuAEkwKgFMyFxWfeSPqkHRoabysF5oe8UGL8Gdy",
  "key24": "u89yRinB7uXAKQ1MPi63y1XcD5Zf1y9qN9YEqnDgGHJkZMcWyPqGuVQCSKWgTJsUMMX9KW2gVxBbMUdprAntxEH",
  "key25": "2CVAAcmFW5zCJ9U2DSkpG7vrWRzpX98XmS3wDDCfJEczxHhuxbZiRHQPAz4g96xZoA4MZrBbgTxi3drPPtaszBq4",
  "key26": "5om1Kda7BzT8vF6iYXsevknhCK5C5PXMxG37W9fwiSMDd6vbMb4PH5ZAnr7NjPtY5iz68J8oURWGZyCveRWU3Brq"
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
