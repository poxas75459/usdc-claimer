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
    "KwcKdfLKrU89F4JHpVUmAZCUGxA3mbNMfWv8DAkADcJZf2DgTDt2vqGpKLcco9C5de6wMYNTuEBVka47Z5aU5hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzyzp7q1wxKm2fdY646r9HrzUbuKuDBcrj4BdKiMHrGBLokNR5Hri5QCa8P7LuvMTX1JtML8kGLqSynq2wfjVHX",
  "key1": "5v6zGF523hgxqf1G3hgdR6CP6etBMhb4UEGLEPUQNXmbu6HQ5PBYfBLtvSHHEcdRZ2nekoU8jUmgk3dwMVaxPndU",
  "key2": "3jeKpRgLyCCYRVq2DDaT7ZRX4Xb8Ng5PT9nvJQRyx67Ev826onoyngfZjXDKwvuSkcCds4bEmsfUNbwyW25Fq7PY",
  "key3": "37hs949uqSMWasFvSGL3f3wub3CWv9bAYKdLbPa3ha9F1pCHMyxRBtdtRXjVoKojj1bJ4dNyeFKb8BRbcqZLZ4TM",
  "key4": "Mdtok5sovD3NFJ35GqGPbENgpfngawMsqjoA3JQ7iQFP95wxgBVMoSWQUvsoFnPoMmsKKcmnnRuharhjT7wrWXm",
  "key5": "U8GL9Tu2kbiyA7xdxhz7pq2DqHKsJRBFVBAxHN42W3mWFRtSrQ4c3CTbmgN8o56RctFpDwiZAMQ9AvViG6WPDuF",
  "key6": "2cARa84AynFbsHEhBbVwXtyYKVGUuDkwMmbN46Sh8Q1VGNBUHYLmebHKPBStxqLcttPsSdXKZjRkvSeXm32o1WAr",
  "key7": "rtYCBbXR3reEGJZ6ZMiAcNQ8VmvMk4ftaaYtFVqvXgo3MqzAoRivqKGi7Zpzh5ubFQ55wFv1fzUVsNJYoHAWkke",
  "key8": "MTNJ5sjoTFxwi6hofgSm8neCdiLEVhLbXq9aSkBLcmEo71gXUjCFsWDCYcEQqvFJEyVsi6v15dPjfPbStfZqUQa",
  "key9": "2o5Vqs2FBC8daoTx6EZoK79kX8MHe8mNF22oZmt37JNK2oYauCcJRVgjy4ftatbn4MjBPzqbW3c5qCpEV3fYiMUn",
  "key10": "3NEiwJeUHLjfjhE9urbC1wGjSUMaXKtzyHJAvqUbw1nnF6UV7danwdDik98G9Y1fjgKKNqKmV1D2tgGFXUZVPTd8",
  "key11": "YCd2TmsuiEDMsErtEKcv6cdfm2FCvxUdYsq6ZsNdnJEBwndh7J7gepJrHZ6ayei8AMR168Q4TG4aMXUJfnrRyX2",
  "key12": "2nTUT636ZkLCNtrZjBNxZDc7PaUPBEHczVNc9Tcp6SnDMzRUvuSBZmjTc2dHX3yPhUkTDLXdwUwH1kcwnMxpkNc7",
  "key13": "675dvG7CqWhzeVEQ13UU9phwzFEA1KSYQBTTxGSDUgceGzChoUWoKND9BhHJqc2eruWbC5cc4n214BepEmkfAhK3",
  "key14": "4RCzMmZDtAbUjoir2bC7RwKoQgLj42QFiHmFctZz5mfCN4P77H1XZrPNvXXWaPcDBJLEkQsuMZrAtP6iA9Ey97Wi",
  "key15": "21VHpaiQtGuzVqTRU6yqDtvDbWsx39Tc2XuZNmLqvzRPf8SGvAqwmh39pxvMf18vnoTA8qqBeHXpCyuAJaeAsWLh",
  "key16": "5Npk3nH9EtaydZqjXLd9Q4FJuNcgvtXUA6RvxPo79vzinm2W67zmcqBSBv3cRdajGfmRMTazLYKraJJjR2PDj9wG",
  "key17": "5bGxjoXybaLW9Srjj9t6QMUbvHjaJRAtvR4vL2EVns8J9siskb6QzYtptTqFRrLErPm37qMwqDMo6U21tMgJvhmB",
  "key18": "ddCQFetaMcQ33isAD5RwZabmwNXVCvFoBigiu45fCViE3JtWpcoufHbqWsSJ9LRVA9RoSfxaCx5Qy24f3xSP764",
  "key19": "VTALRj11MaZWGGnroKtG5Q2cgdjow9rgLvXF8AMpmz7xXsBbDLgdFUqMoLpuiCQ52vPydT7agaUUJDAXFokp37X",
  "key20": "q4knpULXbQjrCpRjimRFWhjxZWU8sX74LQm4QPDotv44C7roqaT7Nwda3z1HggbSMkzmhH4y2EcoJAHoxQovTeM",
  "key21": "5iLzWvTbnXCsg1Fc3Fi5wQncc4zjdoqTcBga56DVMrCHY4d2G91dq6CSf5Ndk3uu3pXK4Dtd1nqwfF96UGDn4eXd",
  "key22": "2zhC8GmKRK9DxUkiah6pRs9cs3smmrwBWhSSTZ9Dk5u4Gv9keyto3T5ZU5UW2niVSpTDVCopRFujWymaNqJ9rQ5v",
  "key23": "5VQYup7gXA7M2vVy7Wj7TeEiiYY5epEgx7mKXUjCzZGPXSmdfgN5SP68qfwSAZ2GmXa9rDw96dYKvoNEm6B28aLq",
  "key24": "RrqH5F95wQUBe8Zj8YrLVYudYgkGuWfQidkZxvpEQ5fvqeUHwD6mSd5VJHhCuVyyCT4hA9WEubnNLYtY3Tm1HFo",
  "key25": "5xAMk2xSU5Xy6vF3ytvQvCruVRHSJP6srAurg3ymobDSvowmYcup7NBWNwLBw6G6WM5FoUi9NbX1cuQi7ZeDxMvw",
  "key26": "7nzJX1EYXMejLc8iEpggFzDdrPi9T73fLWdxW25U1xKVZTVXW538dVwMRLnYwsW3cZM4AzaaWrykXaDzdWnT7ns"
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
