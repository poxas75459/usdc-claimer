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
    "3ufxxZCT1juJWySPYgfy9o1RyvpbR9zB4JJtKGg5uS8qkTjkCBpC9qzndke6um47nSSYnMNyt6HwXPhopNHRd3K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8TmMLNU7EVkaGNrKRLybdREXvviW4FUPYoQfMzPDLWstf3E9mprqJJpdiVGn52jjxwvp3rvVze56meanzrBn9x",
  "key1": "4kfgmQ4ejq6b21bi5b4iECavpKGeVdfCSSTizr7s3o1qxVc86ki7tMRcopjJtZSbhN6qypWAvNrNog4H55FXxoU8",
  "key2": "iVKnk32wf2tWC1EL9qfDhpzvEC6djPw1FTh79GHzBGhoWQHKRR8ZZLmsZHdEVi4kbeLMjd6S7e5ric6z8YyfeW1",
  "key3": "5oq3HH5kHAYrrrdToyszHLVX3LVNShM6aEkLHTjJ5E5pCszbcrVGofp2Md7a5J2pa6MfoMXQ7DN33aDrUVssk6Ac",
  "key4": "3oUnCYXx672j1txk4hRzfhdKQxVoxhgbEGt1BtP9GLfQUyjr5N5PhE3MaJdQC6WrSCf1vp4jm61sUdHNywkXkCUD",
  "key5": "3meVMJ2zw8orCQ7mJV9f4cG4yM5WvJN3fcYoA5QYmFmevGs5nq7RijDmYLvJvGkmgK3sx7EVJGK3MSgRWevwkx3u",
  "key6": "2aewGLnz8W8ehwpWEWwS2BitqzRmwpZSFR1pXzvbQPwBDnwGft2GoFPK6qiJeLDfEihqRGayRmXeo68hegV4CGhq",
  "key7": "5Kx2fYjqVwzRk4cfytkbhgtSAzM9cVriVwDgjkzSry2VtkKGQ7w7DeiwaRUYFKgUuYDxLY5uASw9b6FX95QeDLH",
  "key8": "62jrEnQcGwJBQupPoRbiz8f4njeUY3puqstgiV5QPMfXAXHSffaNsN5JzdErpWYeBNwpfshAz3Xs6HyL652YFCLy",
  "key9": "3vzXNSmu9AJw1gdZTK8V5EavnNQGDAjtQKsTV5pCErg5C1RGx8p9wRyZvsYMA2eBkiXKR9ubX4kxSGQjwDvtd2vj",
  "key10": "5XpkBdF3fih2iuvuoBwYksbMoDRHGzqKd1ZwyDcJsNoMxKfppbbEGSMYBcm4GKusE17jsPBUiFxQusA834hSCPcm",
  "key11": "VygYTVSBnPByt4eoAdmUWTjqM6uZysY5o7ws58FLGTC6F5asssp2ocpp7bAtzw1m1AijwYXUy8iGAA6QjAhjCgc",
  "key12": "5KBd5gtUpCT4J9UxB8mt4hAEJQ3rjkdCrnzibY12zts7hTf2VCGMZDJEDLLoW5NQ2ynZv2ZNGbm2hrutNF51dRuz",
  "key13": "64ZdHnw9bpsK49peLwFe835jEiAW93yP9jUnfUrbiSvqpnj4LurUnHuMZsmJXrPF3bCEjC6LpmnXNanKpiWK25DJ",
  "key14": "3ZtUMoWubZvGE5eHbs2w9aSkVKM6VgrPRmzwjp7ugcRBGtkM59pVoDqDkHR8rpzskqKgWQJJo1uzcGTwHB48ZrUL",
  "key15": "4jYUERTsQkeUsr6DFcU3kZTw9bfjRWE3vAg8qeedY1kEKQQwacTa4Cv3gheKu32pUSpLDUa1Xdgp1qxinDNgWb2n",
  "key16": "47GSd1piBifKXV5WFKLTU7ztdPtunqHBvipDugthRErPJa7uoqrAKGUpzEU8j9pRMZHe9txh3jQBVcQ27YQobGGj",
  "key17": "3qWi5bp4BviqGQpUfhfGHWVCrJjwTEnMGZ71cGju86AYubiVVp8tkVC8yxB2nv1bVPqozATQJmHXYVBqzUvw8QsD",
  "key18": "52YFRUtaxKRnt5xtKAbXLVVT9tT7vidoHJJvQNeM6kviBxggdKhQCQit4widKVCdj16zhYvJ1AVPotUHTTyMzdGh",
  "key19": "4z7du4mBEhEeG3fNUZAwKej9xDvnFBtSja3rBseXRyPTiNL3AReMqt25b99xeQ6KZBYrpCGZ3EprtFxx7zVSS33B",
  "key20": "73ukXp3jKtoqKLTw6Uow9TmDgZtu58SuZw4EGSjSk9rddzuPLkZorKtekWsCbzV6EUyM66HmkkBXwf3UtZU82HR",
  "key21": "3J7JEG6ZYyW1f4zpSpayNP2XRJSzAiS64QEAQxxYhoLTbGrjcwFLrcAcUejM9juMFgviYiutftZ3F59orxf4JbAg",
  "key22": "EaQp4BpvUZrAuydD9aFxmP1so3VmrWcStuneXQtY2UBy95FAg7x49ftJmkcHW8nFgHrjxM2gbj4nyu9gGA9zxpG",
  "key23": "2ATYQeZ49a8uSNNh75zPZagBJCGP2J2UhPDH8iZHS7K8FjQ6biFje3paGYRAgUjUhfE4q4bSKMAYoQPkgU4jXcTo",
  "key24": "12vn4W11oSP8S7jQM2iw1C6NC5nK47mPLow3HS7VCCyzkZ2fc69ZbUg6hNicV3nQf4pCKg5aihNgCm3vzEgHxxi",
  "key25": "4h68u8tEnzbBj8x5wNUzi6Ncthg9REebmZM5MYRPCAh3XrvewfCztwdpUfkg49mq1j7NW8A7AiJWgTQTqdtre7Yk",
  "key26": "4nn9bTNq25knJQSjWoLTEfe8etNtAKB8oZ1ZzduerdpHhLMZMLNKHZhqUJTg4kkpZq1CuedCeXtiR4cmov1ei2Ah",
  "key27": "22PnuvY7o17cUDFbXaWQZvt3Cbd7VqdUaCkSHCgKBuqAQwsFRy6mTEGa8hbK4WF6MwhVKveAAGUB3yr7ovWkgSwQ"
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
