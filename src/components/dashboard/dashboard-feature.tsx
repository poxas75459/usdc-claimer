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
    "5z8He2EGhkhw8KTRCUHEN3YnoPUszauSaCLLkWeFZ1jkMJfGGVuiCW6KksgaSNa1JBrrXZ93GsJSM7wNG1zETCiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fwCAtMEt9J11pPq2vJpDct7Pa96CmMhpT5b8mLPJHEMjmaXGK59X9YniwTuHpregs8BHDGAy8AJNYHu1dhEc4UW",
  "key1": "xdQD3qRqEPP5FvQxDW2KGsvmRVGzQdb5fioAKxDjJdbCAWQxecLFqiXSXSVDvfRnsYV9JpkK5VdfqQrsnC5RZJz",
  "key2": "5jh6pARYSPMASyFjYT2XkayUfp1PJBsUndPH99fRW4jcRWQeGdcf8xKoipvS3qVonLh3vCgcwdo3WQqjfcDvYkMT",
  "key3": "5VmXuxhdL6yD9SXK9inrxMExaJ1Hy4Mx2841BvLmnFKTrZo6KzWEhVscp21XKaf78xeUbdc3eEEyydnrLspPNRcg",
  "key4": "3GcQES89x8JgpjwihxnecvRUbc9d1Y2FpJro39d61G6MBupeEudS4FaxWGthjDbnsWwM6DWjMgaoCZ8HaWK2b1b4",
  "key5": "2giu6pGn38FonFRD1AA59HnoHXvDrpmTrN1kANuW3ztCV9f2MSb77Dy4teJEZVt2a8Wpop8pTkVu9eFej76rhp87",
  "key6": "5YUkaNNvqW2QozD2nNuiDCJP28aj6UN5rJ6xi45jt2pE82MHPF2wwKnXLVWbFMiV6pQ3MwiTdBBxXBy512AnjSNN",
  "key7": "4MEoEEgBuMmUr78VHb64n8sTHebrKvaM8LCzMUkdsNwbuKbqiHb8vdRhXshJzx9ybEt4dqYAVx7ssJUDJWYkGmPs",
  "key8": "3fqezN5dMsWM3nyzFjQbZhuF6rCy9p2pDL2RZNk5xfboWseEicSDu5qWEUB9et6u967KaMbCug9L43LUzkQroL6C",
  "key9": "4kkp3ohWchfyE2C21foLjspz45h41qwywEydqoEv2GPzXitk4K8EVz5VPhDScvYt7BVtHwKDp3Tqcbmfkvkf9wab",
  "key10": "64D31nA4vFoTcwRqFByXbj2mZ7hVz9TcJknxz64u4R7pfjTj9owPSeP91jMLNYnZPw3dGvekd8tbid5JbQJMYBVZ",
  "key11": "4Upoa6vKJuuGwHV3zUGBXkiSJ9YHhjK9x1nj7tF3DKAcb6GKPHZaf9bPTpYUqtr7kdUWMywmMaSgxrkL5Tq9eSq8",
  "key12": "DFf7xbhZhUrnvZzqGG4BzJT64cre5QM4cHHhqLcXUb1KAonKxmF6hLqwW65tJRvVxtEr5SYYLGxnCZRUVeCYRwy",
  "key13": "pCyUf83EB6aQpQzzfuCttP1735MkMps3HnjDj1FYfZCJ6M8gUsT1UKPPa7w8kxaoma63yEgeux3z17CFTJbUiwg",
  "key14": "3b7z9QpFb3oAmBTdVSh6TTW7YGsdVapRCjpb2MacX7JLHVZE8vx9gBZRPq4dtfVf26rq43YWGcN7ERpAuEfDditf",
  "key15": "2zf3VmXGYHARwpyKZAA5k9my3Y1b9WVBgGKFh7TPa6eHRNFQWotQL2fBRGAAYRE1EJDUwsM8PHSNNE2NUfPSvDka",
  "key16": "pk2kwhckdtbHayZLqPAGggLtYWusPx9oe4yQMuWvx4DHfZJSKr9M6rURKcaDNBRXK3z8emo99sUGEa4WHpho3v9",
  "key17": "3FyhCYjtrbFT1UYrMTCPpQx2cD7HnJU7ExGS4y3LSyAjEAHzTD6QKoLrdsSzah9YBkkYA8KFNCU2FXGMgWzVx1uK",
  "key18": "5PA2SBJofePxUwSMYzQC5wJ18UUmoWXfe1D5MKJvcsZ7DojgAugG8KjN2viC4gJUfayKxARBWS2ggNenHQXs1BZ2",
  "key19": "5ATMHj3o2DN1mbkmcPrcBL83JFEiXmB3kY7iCEJQcAMzShHLR2QKfaWLQL93baYf3TkuaDNf6mNUrnustnxDbZvJ",
  "key20": "4XeHWX4a6mz2Ls8fiNwEzDWb86bfP8X6zVrKAg5vaLKJHVPP3XiPbXswh4rbWgXU22x5PJdCxc5me9EjgWhDjSKY",
  "key21": "5hm1EhNNAQNBQZAvix4hW7qXXV7csUmFqtoAPEJZVVnxQzAQ9nGQxn6jPYkgbNu74J8HKyvJ3K3JGH63XkJ8Tkjz",
  "key22": "5zrVawYwRsbfDYgAqR1JV8SmjdpAM9HV8oWBEMNy3Z23y2j26YK8QFyA1MvPiAqS1pNo7m7Kkf54sLHfTxJqiacv",
  "key23": "5XiuksshEHfG4ehhqs5BTEgJ19mjP53TvX35vSVfkDvwM4Xpy2GSKH2m8KAZJUmzeHUst166saTxvEDuHnac2Kcq",
  "key24": "4PanEDrdK2aUrDMSCTwVdNm4zjzsEZxDDDszr2PwpaAHDi6fYPS7pSajgesQB9imgeTicTrEUUFweVbLZbUqGk4R",
  "key25": "5Pivx3qbcb5Ezp5v6gYJ4jMncgP1WyiaLLaxBdZ58hrDizC9AqjQSRUJvxuhc8f3pe69h1vuXxSHvkKEZ2t5kmif"
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
