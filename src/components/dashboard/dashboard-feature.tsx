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
    "2kDqTYmT5mVxH1miDTKeVqrSidsydkAfY1j2rCEX3AFH1JrXCDfM9WXSkquwkVjdpRYUsSZJrN1zZsupJmuCGVt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NT1MyQjFGdKvXRjz7J48fzoZMZaTjiNLysbMycGVbsmQUiQCLDfW3qWvU1faEY8mRieaS8NKm43K1gQj29WQvuu",
  "key1": "5XuEofk42v3A6F95DNc5LK4ux5f7nJfgmwY6EtKTvLvWQ3WF2LwiaSBho4mYBhRKC8ks1Z1bogkSsgAT8ZtuuEVn",
  "key2": "395ws47QohyzrdgiUdcZXoDM1p9rxWaiSNJYFsM5ZL769j3X8GGcYHGZNQ9eUZenn9TmQr2yKohJBVKGwkVKUviu",
  "key3": "2dnyvUQmKTkLqpCNmmWHotz3fxDPi96HksVtdr4eY8bLE2WKYZawZ7xYGCLjW7iLPVS2kqCdgcTM2GEcV1xknQMN",
  "key4": "39krDeEEuzJPJCXvfPCeQasczMSwiscbHBnV9EhSu7f4ZXrmWzVDSzWayLQhh3R15SiUEwvrcLZkf42TjdujWpVu",
  "key5": "5TuDAPwCwBCCnWw7ABeGUi3zHH5dWP5zsQiMoeiA58rWUaEcV3Nogq7AUGwjiwhRwq7KRzAXhuV682otVzYhsDvK",
  "key6": "4iP6wCpsks4otatYprDznb1PBt2Ukg5iGvy9qjtiB4T6paAqjrt54BT78KFMDdgLUQueeQuY4AaB8xPPs5TkWP2J",
  "key7": "2zS2CegdykmaMsGVJ5X2UuExMpo3c13PeLqZ9TnzaCkWUxXbDTsp6Ex5rYGG87TNGPvoRC4UFS6LpUKcSRWT1gyn",
  "key8": "5TnRE89fXcdqTrNdF44DArCtRdZfefxgk5ksbhoDygHKpGHDNwuTYVV4jRhUvaZPfXXJtRoSUEdVZxZLdbBHiZPV",
  "key9": "5SPMd42kFLNMYzwoFBu56wTw4snBrEMDavTid73icWLrgRth73W1RVqVtY42kycjTMPH4xQhfUb14xkVhQmk4d71",
  "key10": "5Xw5ij1oysmvvgkDYSsyv3qWUTx3mQnJMC4AsvwBb3r9hJXq6nGRvVgp8XJDSh14Z9rwEGf2yVj28qBnrJq9Mcik",
  "key11": "5BGUkwkDsi6C3Ai988YWwKMrbqkENjU8PdkWhoAmxMouLiZX2F9gEyAYj6YDXTuZXaNUJ5j8N62jYj5J37xfu1cv",
  "key12": "2EwD3oYhN29oEb3CbLMCCPBZc7uYAyaRatq7JrnyeinMz4WNdcstpiAfdxTkTXheo2NpNgKegAkuG3q5959NKcF3",
  "key13": "3cjm6e32jYpkjsYHjvfqkCtFeahUfAeefw5REiPjirefJxsH19w7NiYNUCvAA1zNKHU8gBFMZUhiZRXKjFHL3BQ",
  "key14": "3xP8abWq4kgkA3121my2Aya3NYzqns8ebbiFdtPziV2XftZvwYdK7zbPhrUc1oVo6kjdVhM8uNUSkXZG2cxUcmPh",
  "key15": "4JdYc6CWvt7cW2VCPVyu4C3JbREFwDc12FhtaTRbGfSp9mkyUgqRzaASXZ3wZUAgvp72rzyWADcoy2YPwG73tgTc",
  "key16": "3QuiNwUuqxDTcRcyxmswqvLKu2WMAncPSNLuEvru6CutazdRY9CuBnPdWrzPPQTrPoiQYWLP24dx8XFEk3Gv5mLZ",
  "key17": "4NCbBmFfTxLhx8gFTGkuECTuJ7T7N1MmKxsVTp9VJg8rWgkDGpocKbLigH14PZAqLJWafod5PBrE8ckWGjHf6CT9",
  "key18": "FcQ98ahSVqPdvgWRvSTg7wqSFNGdXqGdmpDN1qjPRyMgBK3cnRgNG9yir3nyVkEhvLXcC1sZTTxWExWyuW1bNq1",
  "key19": "3oHb7XVDXxYnYTSb5S83jTYbRdhhb7XtwiTt2pRYK4FvHu4H3a8T9BmtPLmKY9DuAQxqrvzh1SL3uhr4tHAqZnQt",
  "key20": "4Go8bZ13TYEzJryKezJLDqiUVuocm7ubMnNNjJAgMXGNAhuoYpwZrC7qU5bXzxChxXePJoD7PZcmaHMXd139FXXV",
  "key21": "5pHqGRXA8b26UiecpnsU3qkT9F2S94DPWeBpWGTP6VTUYdtGr8YYJS9tQPqxcdxhm6ozj8sGdehwTabBZ5modHJ6",
  "key22": "5fgsHE3mHTCcQdRLessVoFj2GhHVtk7JFkT35B3WWk7XpuTeU93n3MJjHxtwAbFRNj4Qv81A6RtSVhso796dCnLe",
  "key23": "3RPrrgbqVpEpfg3ob1jMSNBw18q9r11Y8n3Pu8ABiCbesDx62Y7ETSxQQNvwNtk9vzjrwZTaEBoxKSZmMKuUtBKr",
  "key24": "4APLRGr1t1eQ3NYzQBJCvPDDNXwcFifFk8TYAU5mCvEPaDZgC7fo1gV3ooC8oYw2Y48QpNwRrTHeLQMJPdobLWhr",
  "key25": "2fhbSG9FDaXq6FcQELPrXkyxHdbCNjL5c18F1uUbfEbXa2Rpi6GagKJwbBj84VZRSzYNj5X3h9H3aF2yqV16ixz6",
  "key26": "62o4Z3e5xz6sDu4xAruMwTZbTVreJ2izfnUGmGXcQjrVg89BP28UkR8Y91mnxrBVpmKyCZfrpFPFTekD9vTw7aW2",
  "key27": "FwtVkMSNJ7oKM2dEpPTCvDN9NYKQN9NMGDUBwpFBAoB1NMfPEMqAo8TtMcigzvEavVHexSMQc5KMujNerxTwmv9",
  "key28": "3VjZd9cZHeS5gSTr9yeCpoZje5PM8oQpDFsDPBPsTh6ZDEeUGvKLEd2suPjcc6sz8YhJ7k2WGXCwHBURfJpNThha",
  "key29": "3buzcbLc6Uaqq4V4TiQy1YZGoUMaSchmt1E1j52Hyfz46Bc9kvrRGFnstXAqWL1S4hYq8HHrMpEtyhF3t2QFnt9b",
  "key30": "3ZtoRXEEgPrcj6BsK6SqSQK5aeorFE53qr4bFVM3LfGN81THwiKv2S2s8dRBKQKok1NBaMz3hFWLexDeH1yWCmk8",
  "key31": "437d7L9mP6akQc3AGR6dHuRsjvJnyZ1dXZMZoLffo3soc2NEm5ktWAa95cmDa2WpY1udtyApE9FPwwUcNwKSEMGc"
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
