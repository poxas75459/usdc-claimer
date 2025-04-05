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
    "32dKQBWg2CQ4rhgY1TFcRzyu9eUnQTL23z3YQP2YyUXRvwxWQsRzQgX2JZX7znwnrnLtTSdRcvMG54vhAi9u4b4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hBscojqwjqksnEm98xdikaSafNxDkWKayM1d6gE1skq4mjuwaFbWEYxmvga3Xs6AEaeFpXMAyuYP1MUNXKgn4D",
  "key1": "3UGtXaYrbgJxbxCKy3hoPrVo5xxBkUpyENUyrEGEhJQUzjYAeoyZYsEjTPRRuoAiv2WjNEHdWWTTZqkUZ4rMabYn",
  "key2": "2h7jV1Af1HfUtHGGmWGHNVDffPL8H5ZJJijMhuZa11gAwH1XYVoHMoWQSHkUrgMMDysjWSaV3yYTQgXgn3pYj229",
  "key3": "5qnj34efn6NqcTWf26CLbPdkXGA85G2wQLDE6LiYUCCAXjVjyJA6iGNComPeZg4UY1y2wQ9JFkChT8dtSS8z5q5y",
  "key4": "4FGDwnDPqoXpCHEsqAzje38b1sRFSfBWRYpG8Eg4h8zGVUBjn7yb9BjXYPzXy9x5jCyT743Wj3qRTm34mxpcwLUw",
  "key5": "gyR9BBAzXFDfcWMcoMSyZ11jKEZYn9BhzqvMqGwhhSoyMRvJgBiEfKQ2DtzhAbtUqqvvBeEKa1VjJrfTLCVUKZa",
  "key6": "3b3qbUUyGEw7wPapmFHSLJK6g6x8FeRdksyKGKgL6fjTkTdbo29k4KXRwvwEwsjbbpzd9aNPwMgckZ89b2Y2Nus6",
  "key7": "4F7NXYa7BtQYcBVMogNAHjam4zVsSFnc9u4y3sZNYCMxDrhhzSEnpX7BCsEy9NUsjmbxGjE8KGiRrBWKb9jLA5Dz",
  "key8": "2KkUfT1EnhcrCNDrvpsAecKcvPh7GnDaE9yLTg3Ugbq9iXjswADaQ4mHyPGeJDeFLihj9kwotwXf7KALPEn4UvcD",
  "key9": "2zoabvmj5cuejGPo5oJuMBoYCz41rMtDcoDyhGDoGEKHLDyuniEBxrU7yqh8crSKNt4F36BueZCcLR1t8GdAMR2N",
  "key10": "4q5ekJCq8iZj55CHpSH4ungb28yFL9xHUewoZVS7X6tD4wStCaknUrtYHKFs5WXEgjD1AWkvCw5z59YF131z8zeH",
  "key11": "PiRdbTWpxEk8KrpyHSNosPs4f3iHq1xGjacXAaMpLiXH1kpJ4o1twvDv9DFFYed2Ee7vMDkUu6qyvD2axGUdXnF",
  "key12": "2sq8vDndC96WMQ8Bw2ofKGJ8nHErjWieEzgwRq9qR92xUPNUszmmT2UU9m52UgLwY1EQUEZC6RCRrrGNY8zBpEi1",
  "key13": "2MNcCrQxheRBuayFAtCZ667Ht2b84zNC4KKP2Kqbjh2mrVT89vcfLudjw2eCCd8sWz3djh711vaPgor6SxFtxnmb",
  "key14": "46XvxA9hNrMYViuS33AhyHWJHUGRZS4u54aG4LtdfCWJ9v2QXvDLkbSioDU1SKq5ZL3q5uED89JunHiRSCDdy3Bw",
  "key15": "3fuJVZ3v1teVMxkTWfGHj9HRsv5zdzF31XmkpMwBcrdXcVHkqGGHZNet631MjUGRjvjcTQSzaAP97RRPh9grt9iW",
  "key16": "5TXfX9veu9kCQWHGNq7sd64pi5S9T4CFVhce62PU9SM2WhnqGdDcQ3snfdizUahLpyQx71WB28yxaHsLzrJb9BHY",
  "key17": "5o5Xxgufgby8gXxpbUKtUNiMAXxrkeiqRpUnxkoHjYLMq8c3hWbsXu5niaYCXZ5HodEh6bL1rCwc2pZsNTaCWtCD",
  "key18": "2cQyxpdtTwozbkiEq9weg8ymnoiUXuSm3Wq1G4R7mo48atxLL4RCXRsGjEpdaQ3moWRcU9bQuo4zRut5FoUFhXod",
  "key19": "2rbsEpih5rZ8Eg3AoNsXeaJ3rY4b8KYfrVKywEqfccfaANiiyeEmumTboguRbLSidN8jjcjMtayrhHxr6yMBJUew",
  "key20": "5mKVnQdqHiccerqZn3kkSHBN1MFw8USMnJwufexvjsX9kwx1j1HJRRTBHam8QwWzkvEMnG6LH5dEutk4iWNEbCLU",
  "key21": "5LNHpUU4UxLNW3x3ZswPhaDfwtKWA3Nkfe45qa8pWFBP9eHsmj5odafg38DDcBp1UqpinneeSL521YGi4PyDWxmi",
  "key22": "5k4DpXfTDaU4ojfmyUN1tJXU3QqgvfcLZkbpv65M3FvAwuzzLyNf2bEgxoHJmumT4TSePWns4tqnv9o2LN6ZX4Mk",
  "key23": "2PN6td4vLYHc9GhG9hcVjtKuzWLyrPdRuyqruiJCLaVB63DuHFdWkE2ittRnZ6Fi1nEctigkFECam343Zpr7sxZQ",
  "key24": "3cCx1dAwgtxYqbwLYabZhwhhAJBLFyb63EzHbFKAkUEuCgS57zbnGcs5oLuhtRHKdk2PTpimPWDdxKKDDawjVqBB",
  "key25": "3NLdsGt4JYkR1MDcD1F52w2DYSdKN1uJ6bN549FnyLA2LDsqAvnzNMHiXJXPuWtBJvPyeo7Ju1JD6Prf9iaMx2aK",
  "key26": "33DpTxcnkasA3HD6yAPVVNiWnNQLuZG9d67Nt31mXGYxQDUNB1vXTPEYamjD4oGE7VnodVLZ65tscevKpUQRZSsX",
  "key27": "39HYHDqcn9XWhSKpxZBvrv8HYLbZP1vdKYshNUCC9KwTEh8xWmxYrWjKD19198xgJ99xXKFt4pXk6Jy72JKGShQ7"
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
