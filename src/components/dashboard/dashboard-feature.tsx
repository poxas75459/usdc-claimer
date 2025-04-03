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
    "kG9DNzGtKPbjqZSYnuEHhxg6LTdqcmQcN7seih5CBh114AKBtuWR1Z6RjktYLrjfCwGSzvQvaPoJyB99ja9FJpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjHrT5sHXe2FWAEh3hphQkRkCKaFvtvCuouCtiCu86fyr8uk9VbDumD67sVYxbbezBqxj9qeLoz48VefMp6KJsf",
  "key1": "4uNRUtF4LrtoyPLh19DSRe6qw8jE6vgYgZqcB8KPJsYR6jpHtuzBiCmRskF6nLU5wTEaboq7hi2SaQer9Uz2titN",
  "key2": "3NvDMtG7jthbbVZ4Zhv3rYmcekjoGbKePNMuacqRLgeSSNtzFYGaau1ZTT9Qohp9R8ZiLtM38b4Q1U4D9GKct6C",
  "key3": "3XEDVtKxxUtKGkYukesXVWJtooUKmuPpsM216gVR2BM6hFM6gkSgtHFscFctQFobiUab1GWUopfVM8A77fva1iNk",
  "key4": "WNjvA5ak8vKpatmBV8XitDbMcmKh48mCYGFERY6UHsMqxJjuZirZiKLw9HwXn61JjsSgLsJcWaFZqgpFRWWxWfY",
  "key5": "45MKAVGuFkUjSfySBTyck4WmrcvtRVVq3ifXK6rpvgLEwjrV2aQybPGPmdF66JjmG12ZhKuRQ8AncUicgGAbLs6b",
  "key6": "34qsTSte3QrgVgg9CvnZzNefWzo3CUJQi3j9PgassQSYCE6HWJsyn9j9zfKvXKgmbDgMwCKDWTbYdPKuPUcLR1PQ",
  "key7": "53r2LKkKpmuJTQZHxF68RFknzDz2ntXcuRFUeqD6jsX3TCS3zEQ94WbUYYruzQ9pFepPNxK2Yj1SejtQQdFKVW2",
  "key8": "iUsDLwKWqvU57f9dSsmxVVfsphPbSyRf5GA893pH3oFGHhrw7Um95nfFJR5g2NcLuQrvMLGHFsA26kNs3FA3ben",
  "key9": "3aeujHRAnsD2Xak1srECtK7aKfAj4VDFyniZ7sPkFU1iehMSvmoHB9UzmNMRzGsQcTe7CLJUMfGwDkPg1Ahjp3Ey",
  "key10": "5fxgshoxvoUjQ5kLFyKrQGYfsSTeqoXWxqQT1bE3xRMxuquqxaUEZQYHd5Cm5SxpjvQXLnatjuebxeiE7T5XdsGQ",
  "key11": "oK1ap43V8iNTj9GciXAHquur88cy1c4TJbHUHBTbFbRm5KSpkFJT5d4cGmnyQ8wh1QmZ8Qib18s9gZupdR4Kf8k",
  "key12": "kU457UAQRAJinaRTLJB7ofNFTZy8tRpDwH2noPHz7n2B9Jfc4qsrXYng7QtQb6jW7wyU6hqP45dtTa2ScHu2RDA",
  "key13": "23gxZJ2LKMtnSHQMq3crihGqUo8urJh1duGEZBf3Qs79cqZXveLUqNvjwMQVusjVfmVE2EobC3MjPxZxGyMtVh5o",
  "key14": "5dLGnWfNqymD2ZNSyLLJnfc6ygFAkW8LjMqEWv8JQmTMen3Eu6aNmYN5PU1kVX6iMCZuCn33YKuedh68Q1yXAEXC",
  "key15": "xJf7whd1KwReKNHXB6pqxMpse2nmpg84sL9SPtVFmNbXHG7bdyovpj3B3PZqWAmUmtK6JCFNQ1Lu9C4toAUm6RQ",
  "key16": "4ZWQAgNnkEBoRWjh2VSXW1uJHCY6nEArUy6QuzA5dJrh3k79jrnM3Cj9M4a7Uic1ZdnxjKiqH6mCLMbz6SCUGiv6",
  "key17": "3BVGKgrN2qg4HwmUD8TN5GEoUvLyZqK9DHtwBqKYSDANCogCmwzb6Ma4oonYANWbu1jJamc19yot6GY4Km3WN6G",
  "key18": "4CyXbk1k5vE8ZpbbmTCsUEiGsMxDob3SU16bvacmwWCEhtCRJrPugdPRUKjLmPfWQtx2cwsUn5D2FrFzFBjtthPt",
  "key19": "652rM7h6NJkAnusSK7Ep7vNNeAm2Ztd2SoB3ejBkN4C2huvkbWsaGpC3hp3mBzh64owiV3rSrXAdaBQjQ45SjMYE",
  "key20": "3eBZjSvQqsHiwo8fx44W48PSYbY6MkuHyGyRDvHuwDcb5877Ek51Hm15KYobsAiRNWaVbnGF5zGsLFrU9pFcUJeP",
  "key21": "5v44F4sLF8LnvmXuEvnMLNn9QH8mtwMFUkwimiTEjREa2DgDWemc4bj3qZ1TTU1xbpEXhEGnLyEemLEYJtB31yyD",
  "key22": "37TCbbWChAdcZjx5eG6nDC7Ho4qhtzAk7BTWFrTDjRWBs2WYUaPf8vGh24kkXMyUqkAAKUmXvSqkappfESTxUosU",
  "key23": "4dhp86oUFwuy26MotUJp2d5PVU1paKEqSJSLSoP6BAYThv3Xv42DxE9VpVacqkZrzLanvxFq96yJCCpXq56sZqLH",
  "key24": "2WKW2oGChmQut2aUuZYEqUa42u1afG8c9xRc9jCcBHjtpq99WHiG27bV7pS2THDsruDM3d2p6gr2q8kuqbC3ps41"
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
