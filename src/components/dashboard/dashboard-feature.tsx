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
    "4x8MipKPve6SebbbgzDbYg4Jq4Aw9KybvptHrkQvzUqwgoRYTkp9xy56ATpAaLNnq4NqRiGZv4A2eV6882K2qZDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9rRqGgBiG6sAngussvhMTuEPNHJ8hCDvxnrwc7vMc792YJxwVvs1TSoeaNtofauC9daP5g4BQQHGHZyhDJNcEk",
  "key1": "3qfmTySRAB2dMP4ZZ3GsYyzK1kgLr1ZhJedwYhwPAj6B9tKR4dq67DmZQcwqyoUk6dKEMvieCAvuuamCXVnbGn55",
  "key2": "2G1HnEGz2DsvjYYUAEvSnu8AV4EXxaKJM8WpKAgNze2Tt8QqjTjeoQDE9cb9GJuHizBH5c51x1XfPfWSULjkXjis",
  "key3": "23fwyARq3vS9oULuPz7bbHp1LywYQDGjqBzDr2Xj2o2Yb4sL33ZDz3tEDVnZUxKGrcYJpFBVXjTnfd42TdShdjUn",
  "key4": "2Rumh7zJ8uWG9bieCRq5Lk2piBb6p2CtMDivqdPXzNGDetrZ8Vr3cKvahKHi9TgcSZACD26PVGxJ6UE6jWVmhAis",
  "key5": "HduxStYpkmYfsVSBiGfFqTyPF3kFWwkGVXp6nvwXJsuGCzAqnb5PjxgCKLQaMKucgEnZSxejBXjxaTWGZeUQVz7",
  "key6": "22eER7u9HkbAHHssgSrTgjPRHo2L24uJ9HtGdnJu86uY6csfvUWqohTgArw7vcGXRdWZSo2oun13NenYkDZQsZuB",
  "key7": "2sh87nQdGgye15qxVDmg5YHgW41qpDFBdYGusRiDxVx1xfC26U1tXFZxRs1aYAikiJWzuSu7NmZtcQGfNdhN7FEU",
  "key8": "4sppB7HBBdwmnRqjgeTKGTK8gwSCHgfKvRDRBQVnbjtdCZ31NyULzTcL691tUgNG8dfXCkee9xVBk8pfKtLs9mCQ",
  "key9": "3TL2Esc8FfKTdhiBwLjof3fQ4PXRRym5goRNF69oQLTG7ce4PFXwK22rkQ4ewDR11As4yRdchyNEeBRejo5a4EkM",
  "key10": "59YTX6mPNhXUUfrmk3Ed3RDeybJesfnN79R2oLxboE9cZtxjLuGnNH32oSjAAt7oLvSooRva8xMj6SXmWomavvyx",
  "key11": "3M5vMPbFD8GqardCFDonqqBNXMYp4QtKQkFtAJduEjubAdiJ52HV8xjWsToZY3sHsTgjU1vCma6T8kf14VJugxPZ",
  "key12": "5ZmPxBYD3soPoJhaDp5zMMgjM8L8PiNQxEWHxyUtEQHKp2eGYNAjPLRZa4UXnS2KVZ1Zwa1NZgPmJTki2WubMnxE",
  "key13": "4M6zXA6oCKvZ2uBPAhNVNZZQpeFy6PzdwW61ZHPhDqjasApZv595HUiNdpdkVMKfeWq84WSZAi2xV3hBK9BrTCMt",
  "key14": "AZArqy75wWH7DJxtxKnrhp1PswyTjMvVjpotg2sht3FTFDau95GpU7rCFeyEBStQYLW6oWzLSipvBjDrmTt6rX1",
  "key15": "5iZqdxuV6aDjoZLaLup3eTCZyTaipeSXuEhmGK5B4yR5ZPayJfyCge7oYoodWVNm8twJ3o5AuNBZ1E8pDrkC4KpR",
  "key16": "3LcM6RqwqPjgNorS4xCx9rmUKEpDwfs5LQtXV92FjqSxUH2Ui8QDE2QtJ1HQF7pUSFMgYFcohE8HSEff6KpsyZT7",
  "key17": "2KFZDii7ZohfbpduJ8gzBYV1b6tNNbCk3kKTwe94pmiYo8BgrTkKRcX632j48V3ooa1R2TZKkph3PmD3rUMeZh32",
  "key18": "2QxTDiy16ZTKcTndq3YfyFZvwbsVUW37kdUymAe5szJPo8EMP5uA3n4z7uyDyBk9Jz6KPMzRcnEEuPLghyozChWi",
  "key19": "63T64nqEPLqaTdhP2jz3J3ufKKAAobyot8LLSBayq8WpH28QcKGHPXUMw9wLFHtFXnkcDybExySiQoR7R24YY3Yd",
  "key20": "4SViVy1AxeqQrJpvA18Uvn3W22Uhs8hFumnfme2SDZUemB4iz4qfSqEHwt9JMGQLWw7ccMi2Jkri62orGkMXUMLg",
  "key21": "2qKGxi5HEmsSACr3sLck4b6ksYwA8d9TzinHf3gcWDexwuSzjvCZVG4jhddqrwogwBzNMxMe8L2uvtBXu2f6iEFA",
  "key22": "4KFgPvXk7Jik1LEXzukqUiPHYy8Dz1d8bUKxLbPqLD3ch7XSG5y1v4Ub3i6jbToLkf6qnSJGoVgJqGhhDcUtSVHu",
  "key23": "dyPFseQv1sxLxk1j5XQPjRuKahHvRUtzz9GvahxK25f4BFbc2KrxNqYnT1AveDSy8B7v65U6c6ac7DddQfEgYa9",
  "key24": "5sXnGgBVVtpX7soj4BALkeqJwxdzcXd2QmkN2XXDQZGfNWANDgDanEVSGCC6HKqS1aQpb1o4goEA4a14eRV4QvZa"
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
