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
    "cvGBLX3svMW9Y4xrTk1bU5P5ewG1CiFHGq4UZSHSVQxmL1cVX2yUbttetiyJWrazG7VauVxS28cLymgfZJb1v7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaqNgdqBoNF5QQv4VGHNgwKddUstQQGZXP9JLURWBFRs6KTDaYv9UXxenT95wNM5EwRGrudkeWTg4x51h7xxw4u",
  "key1": "3aSnw7yZ6SXkrhpQ7aVxW6uWCuUKb2eNaUxpbmugJGmCEYBtV15R99dYRdZMSbczDnqs5M2uBLdPfoRLWSRijrjC",
  "key2": "3CPPVNZMVhUDtx9wqYPYt2zMtJPhD1P5d57Xw78Etd9A6HoUscufqy341bPwC2CNy9D9Yr5HokAPWk1mxNbDvk2h",
  "key3": "61TjBtDVddauAB5x9N9r6GdqZjjY3k1ckbZ3nWFDsKAG54X1sZLPFBWsQntXurs6eKyGeZLrabZtfXdykiBxH2Vf",
  "key4": "2r4h9itRhSwV3LDupDetozrZLkZPvaQzUiGisV9CACnZjQJW3PoYVpAs7EZFpqa2GYedryNRfUiNfwbq6UwBrzdo",
  "key5": "1rocHy52akbJudYjfonn1sek5xL7qVK1siwrbCHZb5rixbxbGeYJZvQoj4u47vHRETChW7AvdDdfsTQpL4i4St7",
  "key6": "6H41sWYhq6haCoiaYoJPFR1yVhY8CBTQVrvmwByZ69LM6tSLRnh4FzjoXVZ5gNhz94g5CUXBqZQnYKPTaFeoVGd",
  "key7": "4vsPWesvFmjoNP6b2zZByPNX6hq65wbSLU9DyW5aDfCxZUkiuMgZ36LBZgFywQ2ECbWSk5zpaVVpVYKK3dGwivW7",
  "key8": "2u4vDAAPWLKe1rH7SaGDwX4oZVfL9WjBoph1E3mNpBokUz2RTFC8j49qLX3p3jiLu61hNSKD36UdirpDvGZJSvd4",
  "key9": "5p2Ga3DyjyQVzfLv692t4VVG2kV2oTYigtDTE5nQFEVorcrgnKsQWuz8EFjQjZpoEQP1D2ur4u5meAowcUVBXvCR",
  "key10": "4v7cWYgXeVNj9WVDKRpjzJkYs6t72RYB3XteYHDXM8zc4Du4PJa21GGG16xRwKY9nzkHqCSnL2LS9RLWcaUDUL7x",
  "key11": "Rpfz92LFKJgbyfA7yRhyEamJ94m574kNAMzp56FudT9TG1E4mMyTgnM5uUyVB5AwLCTVe6aeAJ1NtdWuoZTtfNR",
  "key12": "3dfMKD2xE3qDZcH983BeFoEYdYt6qoHcCfQPR4ZKFrKr5M65oNGVsQKhFtPRvU1bg5wofrB9caCmkx2j4BfvZ881",
  "key13": "vjYEkTAqW2Svu4Tf9bDafZSKwqofr9eJeV1TcCZQJtvYjkLeL8xN5d1b9Sx3y3ceZr2EizjMyfK7Ma21bPKhvVs",
  "key14": "3okLzAYup9mgzcVQ7rJCfWUCCfcPkBv8x5hC7ed8SrkrTUfGNWiHa1WFc6RyBUfvCh36fEAHZue8QTXMFPi4y4Pm",
  "key15": "5Yj3A5BEb3jrvRPDJqAiofMvTCyc2o4YBm1qAhCc45Zb5YJUhiKLztXsW99Fq566BbHdSrcFdW7oHL3xiivVPr7g",
  "key16": "4BzVwtSi67iaaf5HVT9WuVdj7bSXjJHsrRgQFdMDiKopWwUT3zncD22A2RRDkvmqtBabj3JJpssRkpfMccwtqXiF",
  "key17": "iPdEknRm9rcn614TLuToCuYWwNSNbyTf5P4FHronT7TnX3Hnx3oUm98yBsPByga3xDwwj9HsxvrS727ifkaGZ2j",
  "key18": "4KQ9BztGqg1bB5cFJc4gtdGjK3j3s7N5UnhkduTkwrZWwvTJb4bwRvrrDh1mWzUzG2zDTfjqJzwz6nB8sMokuPnE",
  "key19": "33mygjFiXxxvhVKyefTuT9FeizsZFv62qNDpS4E6LZkc7cM5eAeXKaXZMLES5pXtRKFJiEAfckob8QMoiLSM6Zzw",
  "key20": "23JgsZQJAN48Pab89KyE7ZpDLSnc9gpDeCM8LDbjykLJYv8Kg21U42ZhHYh7QDKi8GFj9jeWmPJs5hwLtmyP5y8c",
  "key21": "Z398VRnfPotRHCYJzm6Q4xQDBY8UaKJui2cVG3SGFxXazSBJVyFDkt8P8yeYUPtSarcQxxA8eMBMBYeXRtSbRjj",
  "key22": "3PKAtZ8KfNQM4fJi1ritQv9Gn3QPjQT6NVicsAaWaGFRk1ueqMmTE9thV9bW8Cg2SQYFs1nzVzLtgXTLQFExWNfv",
  "key23": "2RZhPKtnyLzBexTaDcY3dJBJSNhPvMQy8CjaL6upkkbcZeXeoUuo6FTHNhYJTWx7NsTUFSo4XZDxBdQefCFuPaAr",
  "key24": "25mBbooWeWp9zw3aejjrcVsyR2ARt3QawPsjgN3vKvmkb19vZRKWTpZUuGRgMJEkXTo3qV4q3qojuQerVZjvJNAG",
  "key25": "fMVBdZrEyCvGDrtJX96692aEmSbKpo5xGtB7vQppB11xy5j9vQNL3NNeXdUnhrXNYskdRcvJmA9i158yy7e6eR1",
  "key26": "4i7HQ7YB2HhVpQ6nqjY374hsaKhkhZjcZAX7pop7VnNuQSEsVTPxLYuZKygH1uqaMfHYcxJKa25kezk7v1Qja2j3"
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
