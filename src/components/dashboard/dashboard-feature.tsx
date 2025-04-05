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
    "2dJWCfLAFQDU7Dqui1jmM9NsR5arRWeiWa2a6t5D1EthMYfnfq35GhsByLpEqT7F6dr1LgwYEGx2RS9BnZNrGWhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRtyEe9DCJ1jRQkrb6bAL7zvzvSsPN2KjYrzVRAuVk1jhBjGf5JD7gAzeFcSPvKFNJ5RDZzPf6KnCnDhqjs6HKf",
  "key1": "5bbZDJduPafYa87NG6wDA8xKzkYGCVrGWNmBYAJcxf7x8iNnm5dt86qhbUiXJ1yhZRgfevzgAHJzq6NZ9vQndfPz",
  "key2": "2T8dTKJK5tnDawV3vSC5DYSMAKmgbSXtee5xjgvxWLQKwZ9isz2JkCKV3qGn8kBrZZY278KK4aHZZQB9yHsAWAfU",
  "key3": "4Bc5ZkEbkTfzJTuThXtXqMTKtxsVYBkUQ1ZANum7EKEBVhhfHzPYWottk4RMQgyWxcYpSJbuk4MvHKPqeer1L8gV",
  "key4": "4GBJCoYG6iE8BeBJXbUVcptxYP2FPX7bLHFQgGPTAdEWMCP9QavCeX4jYonNCnLDF298ZruAW4i8oyGgGjFQmPWL",
  "key5": "3mkQGK43WFWaQ7JCs5NYdeehwVxmoMhgGjboi6EQMNcAEGZoc9whadTJghh9K7cbFbaNKCGBY4fQ1uuCiU7tiD3H",
  "key6": "4Cwkn4pYYUXMKRkWzNoRuujLHPw8M4SsVjmkB72LrYqEDNzogysscKc22XaL2KnDvPfkedRFBX27JriFGJyFM5pY",
  "key7": "hCifeBW2fi7ry5ithCh6nMXHZRhPwq1sGEQV6wceW3o14S3jsVLCvkGT6tHDqpkcdtyHJMvtx9UurjDENe9Hqzw",
  "key8": "42ErNbTp8eC533JL8GEa8YC9J6iDcb7dHuosZFrEzom8d94WBmmzPDNmEFS58ReUmaEF5vT26tjXCWnSBgeouEkU",
  "key9": "o86DQtEvgiYSgLpGNtbgWy3rDwA6SS6ZyRwUs6nNEq4YVNECMM7DRfbvYcyV48t1Rf4QPBdt3KFnpSHaLNWCRYK",
  "key10": "5wWBtc28TLkyH9FJPCtFEtZy4hLMBMv5pjfnjEWr9X3fh4HtHAsZ99VFXzphe1EYtCgCm3DPDNf3qnNQcTiQ3fTK",
  "key11": "VkHaRdpEP14n1vWMfyeDVXfi8seqJTSnqmAkWVQugyBa4vXuaLggiWS9tnQFisKzRhwxvLe9nSb2hSpbfDMVrhT",
  "key12": "3nt7i9LmF9g4bnHCWiLvwrUPSQWgHtk4TNmefPbCrEVA78d74xptqDeXS4cdgRv46MRTfAmd1hsxXoHxY3GKFNRV",
  "key13": "2a1AN7VVTpp4R4QPJuzX5K2TgV15dEp8EdF1N6gtDCiB3vxdDV2uy14GzWWc7qq3UjUzPHcabchKPeNzHyDMRrjg",
  "key14": "3k56mjqmS8jGHnFKYPpVYVyvDAzdu2GdfHiGt6HgJWstTNTJwWkgkC4B2P76ob1Yx2DBKeMdCFpZ5s6V2h88YQFR",
  "key15": "5Sa6hnedJLJwZ7vMcvbfPCB47n2o4pe6exSVjefLp3b9s3azfNwr4Zt6dKsZe34eBnpMsoYkidcNMzYSgA3ncrQ7",
  "key16": "4A6WWX5tn2gAadCYmpV5Bz8bDdG6o6nrj5vH1U2hcUTM2GQvS7ucHJavDDG1DLNM6a1EciKQ5tUjNMoppGQ7SocG",
  "key17": "2GwF8YyATRJyJqR1NWpjsYWq9fa7hqtDaaNR7zA8G7Qoaw4VBsremDYYjmBeBhNPfJPhBs1yTL73GVFsefuY8yaL",
  "key18": "5gvyaqtXNEXW8hLPzXdv4qhw6U88fd2M14vGURkzpksvUpsWzcqrQ94FoKkGf2BgFPDc11WQDmw5rvbeEt5i9GLP",
  "key19": "4kmpxvZiaWUZWWtSTDVsLGb6fo6Ftoxg99skraqriLHSYzk6KpLNUkPnejPsAMQsnc8mDX1Mdk6piTFsFjEegmUg",
  "key20": "3EHqmaRzv7adY6pYKLgTkBCK1fgSPRBNqhuyPa3QKAZBRC7tow1khgWaqdpcsGWjVyWCgbqMwvo2G31nv3KwVQ9b",
  "key21": "5Ac8rPLy2q9h5EwMF7UXRsc45kEi2xm4Ez971G4Qpsy2umPCeqrWrMYGDo9K1PTh47rL2ZLg5wTLxh8rPJT53hRj",
  "key22": "2zBfukgswHGujn2fQmuqKttw29hMEASY34FCAQNMS2oUtvpg4cTnoiP9RHmafjt4DvtVvCKHawuFDhGVAPZyhgmb",
  "key23": "4hbmJWxcahavYLyZurbgfqY99SzhUo6qcgC2qRbi4rRJNtLufWz3TA1dX9axFPyzyLe29iwVqgP4sRbDKKDyVmzt",
  "key24": "3QaXLkBkiUuwWFm8C1QqCdsmbGVxPAjt1gRB82seSJkXvkd2pn3jYiBL5pvVGazKxpYMxqUUkJX8vbcWPJznk1eU",
  "key25": "MATAdJxteeCVaAW9UMbvYJk2zMMzGCwBknU2qYb17oF1mF3gToNUUUKraUnYeqvkcPtmycP2U2GjJUy8LDPqLzv",
  "key26": "A6iEJfaR5DNERyRpNVCVe9q4z5UwMUtLfTTjQRkHorXrwX6dju9uTXaqg8CEtWzE2dpnDGTZKAdJmZ9Tsvcj59y",
  "key27": "3XDXjF7pbNvtFPyhtRQhLW4EDX9LH8TjrpjvUX3tB4fm9ArcXG8CPrV8fvwv9nj9wHjegn4tMYxPwKtBKDCf53FZ",
  "key28": "3ohfFYTSvQT99wbABZ1YYJgdweYWUuiny5bJAkZ1jGjmQf45X6i2kDYgjhfhdi9LdEx8TnThJ3jf5ssEYUVy67DS",
  "key29": "5RYVDvgMxxcHu3KKBZ2wiHs2BNRjgYxshKttUs2nunkEmcbhrrXL2WsqF25K6qxJfL8icD9vkWA2e8cAtFr3rW9z"
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
