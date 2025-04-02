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
    "5B4LwBR4iMQ8b1zPGhcxMqWhAYU4AtcFoVj76Gfkt1Ymb17yu3VZsgHjhtV2hX3Zj1y1B8nRHmU4tUkS4G9w1yKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mza9oXbgoJ3SuoeR977n3qstYGUDCtNKVU6nxdJikAoczX3v2ThURwKLbuce3HVS2erRP9bZqgv2Yh4CwbTnh2e",
  "key1": "2om2EiJCdnCnAuZj6r1kzRRZmY2LsZxSXVdTFfmdBZDX2Wh2uX7TpR7coyi49t8TAm8A7H9hEQdD4dHGSog3yUaw",
  "key2": "DUx6K9nUrQak88Q5sx35CoKYjWdruSxNuCkqZadie5TBCWwcojoRyks3JqesMTo7HcaT4qhVz33hJDge5iJsCoq",
  "key3": "4118FJ7JsTcSYnwSPhHmdKCRU1odJUneiTKJm58GtaHzK3niY3FLVetKSrbLd3QSDbBsNwnu75o8x8wLNxxvoaYw",
  "key4": "3mftBoWYQECeCRT74dQcottRbhCKuAFw5kdeLJ3BAmDvEGFykqBA4yWuNUUJTgpHBYjuX7hoFSfVnF1xqVgUfS3R",
  "key5": "5kUPtByuNg91FfWYzvzLrdxdRzsgB3iMMT7a1UQbensg6E2Bh2XKL7JuRS77wefvZUGtkq2waX2NRhxQbi9AE4pe",
  "key6": "3CyTb9ij4nK8FNt6Hiq2d6ECdp3eoFie1Ua1HtMpQru5fUqWGVJM5c8Up4fDtP4ys3YNqiCqHLFTZaiKe4T7c3g7",
  "key7": "5nYwQuRe98y8Hf8CXcCWU39L212wVUBKt2Xh2VdSpNncV3stMaoFDGXreTfeXYNLk1386sS11SuxYk27hjfPnovu",
  "key8": "3LtSeD4PoPnGBgFeLTdpQWsfgG9B6PvZdQMnWkReaTueDnghaoBHjN6BPHc9TfcMmjFi1Ve723gqiTHao4YtD71m",
  "key9": "5tn7sXK9cJwi65r9Yhs2D2KSnQyC34qunzAGBcZQMZADP1RMDNzBekvTJHcBy8ccjawBi5XJ1zLtKzZCMXBuu6ad",
  "key10": "5wBf5jYZAVbtAQER9sEHmsNUwMRfbTK8P8hS6LDzrXqR6d4RtL4XuNnb4ya335nLhvZKs3jTicreEcackD65aYfU",
  "key11": "4YZ6rpN3v3dX2F5mXdDSMxNS1y2br2vWQUFXkrnBGWKtnhC29J5TswHh9u16rKedxKXA3rq7FbaC3WLbTbBecdTE",
  "key12": "3CvvJH7yvAowg9RsRhDpzcwvdiyxumdD5SMoiRicaAueR2wbpRD2Z4HWxH8k1xtv8AkFEBuqeh4BczpTs25SEnVJ",
  "key13": "5QjsztNm6YUXYX5Sq9idHRzHHc3XqM8voTkooMKiFdpG8QdJAr5V8JeGafj7AFqw8FnVNa9R7p28UWcxJtYdMFXA",
  "key14": "2UQiS2iEjuWMaT26GEf9HFtWSP1mwPPeJyRBJdxXt84bhhjXHpsXKAZepqNtzS1cT65zFchqsCJ2bdKd7adP8KBQ",
  "key15": "5sQvzB7c9LSHkz3GvEt4tRGvPzgvMjzAJJxnT33bvbT2o7FNWavFwp2EDSY1M8GAs2X7bNx8ag6Ep1hcqnfthfvY",
  "key16": "x29LdET3um4Dy6XZYBe8MdixrRY3kKsDbxLNgwxPMtXv6bpnkGGCtykGaQnFoytf1auUL3U4yuCQvwW3D5aom7R",
  "key17": "2HqRxT1tpZAjJYRpTeEgjzb3nwp2AXfEiSg2zWgmrSUd6zfx769e2EHei29bxjE3GyZWiZMt3GAs33fCojLyAUez",
  "key18": "36ApAciv7xXb7Ef4Z9jF6oCJFHKpstYdFia69xfKSZxZvuGnd6UEpmU4ho2sofEN33uSfHKLnJ1kEDZtpqnZDAHQ",
  "key19": "3fPsBQH17rkXgVsHzEPsagSefbV26mq9mh4R9nYM42QhVUWHKEb84wiMfwaGmsEzMhNXZTvsFCgAJJgDWWQxQL86",
  "key20": "wAd2n6G81t4RAB7WvDSzpptQRCSkKsofq5W8L7qZoKEDjKsdKte6Fs9XJ664WYJRfEAjcAKyhmQPRComdv9ufmD",
  "key21": "5movu8tDXi6P3reortxZcqkvUsY5vk6waWhdad79cmfNDpRLJoUHKKMNAgoi3rJBnbtpHBHFDtuNmf9hiPdUBJxc",
  "key22": "2wstmeWmkLTFnGB2Agf9BXYN99aN8zET827ykzF3xCMqwbqehXkSX2XcFd8M1LEvAc7NNcu9o3ytKtLjXAHNvBiP",
  "key23": "fdHX6YWgG3SoS4YXx5jr3MfpuMqoGGELbd5qxekG6VhEdkQpYGXTN75PLWPyxEfKnRNxzguM1Nxv1qzsg3bgfoP",
  "key24": "5dx8A5oDJU5TYYATncigxCK9vWEvJCFqCkWnWswiaCuN4SPxyaUGNLUFf2dmnpmLRA7yi8QBWv4qfMJkT2gGY613",
  "key25": "39i7M9CTcGbNfSeym26rQoQv6ugrJuxUE6KwPTR9V311ABBGr2C2cRQcJPD9jQMyhrQQ3pHwhevTLqTBeh4qA814",
  "key26": "4B8P3GfUgpkZzv6hMP6RmemuXGY56R38F8ADoFMXTjhDXF5KnRUNq6Rj2t9iiztuRyyBpxyjsqqEvtiJYj6do7my",
  "key27": "5jBCZLbHoFi7n1eXSYSy2tcBMQnDiM8DxeCsNpntiSwf8kZYp1Q22BKxa9m2VgbjWYTQeFvrCLjRyTHabkz6NJx4",
  "key28": "4sv7B9mwGFYHMgTVLzBPCPXUWuUb5Kdqy1vsrWTvB9N1oJPmWhX9NXte2X8z3htCMWHsoLr2wQijbP1teM9MF912",
  "key29": "2xuY4J3DdrffK5hZmdHJVmqiyiUX1pANYAtNkcWd7KoYjCtidryhzKALTkKG72GduDXiQwf5pQhSbzsU1dxnDN2W",
  "key30": "2MDENrmh6M1PgdJeAwDUwpFLZg9WaPMii9x9QXGVqXepZtoxKmvYXM5DPBNXuokC9BstpwJfRkuaTxUswdFtq5qB"
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
