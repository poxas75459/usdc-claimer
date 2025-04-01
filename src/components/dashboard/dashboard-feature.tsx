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
    "5tg1eWLa4sdFFkutYThU8hwY2zcUuNBMqCQU3TotUkiEUUbqJ1h4jL2XdRiY3sZ86hmLoveZMxu2vX1cgeJYLKae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2uoF6n9x1DCrmFzjMSGQ6bYjsAFbyENSrwe5nXvZQ6HuHNuU5NLL7ngDT91YLwXFgZh8uwZ1cbwNKweoM2j5MP",
  "key1": "3jzEJtLqDMCjNjdwbG5KZpa6nNuzZnyvdCJSYUypmNiAzy71x7YSYBG6ikcRRyXB6t4S4kLXYtdQwKStJerWZ3vs",
  "key2": "3TF5yAJLTaxRKohojW7iGeWJxtEfH95ERa45nbPUyY9m1coAzfn3TXGW9wCmjMwaVWpEuXU6NypJAVTj3BSr75r5",
  "key3": "HQAQAQjcGo7iughWNs7inTMuuvAUYmY3R1qgzQ2spZJiMBJA18ZEtC9dLiwYCiKQ1ayAGhCSytdkTjAQ5JF8V1e",
  "key4": "47JGeHoBcemAUhVNcupYm8wHLySd43b8hx458TRCTcWKWHH9rky9ADsXwrETCsbD2jqSVYSvp7bboTdcXxBQsp8J",
  "key5": "35Hgj6VTrPYtBcH23qp7mhXSugeK46aZJwybP4tZwbS9rAcMnQmkJeYniz6p2TEXiU1dptGQMV1cUYt53DMd31YX",
  "key6": "375are8Stq75NvpvxmZGVCeH1JEVy1DGviXzrVNgmZSimaXtGf86w3hJaXVxo6rsK7cuinuXAz8NsSex5HjFa5v5",
  "key7": "2PbNzbSSu1Nq4iHDYTQuiBXsLsciXbHrhdXEQrXr7bqjmHsTjN3L4KbMgCoLiV57zxAK248qyDHZMrNcbZcVVh9n",
  "key8": "3k63hgug8SPzkiCPT4cUDkc54ut3L1yANw7whFav9BDNatyySTLgywRKLjtZoqGwMRNPDSqGN2FRrsaWSnsJsu5r",
  "key9": "r6bGeAFCffbEMwaDaVYwQ7aTdw3UpX8FAHFJM4Ce5Qx38hBk2w61bDPq2CVXn5Ykf58vn3CEjzmcHdw1Mo2SGEa",
  "key10": "an5L6RyfxEaKTVz461uHbQ1AgUUnxnjPm16SLpjdhcmDNtzWoXb1gn7ojNgSgrCqLD8BgPGJQi7dFrq1orCKoAd",
  "key11": "4qsbP9S8aixNF4zWsA8EZrUersZ8PtaAH57JXPeD5UsPsHwjjG75cBRhUVRTtBeZLYoodiynMhZunCBnNBPdipgX",
  "key12": "2yzRoBVNJiUekUjbv6SDPjHjN8u8xByUp4PTbrw21woPio71u4yDBQXmX2J58SMS7zF8v6sUQ2B1CWFtduWdqk87",
  "key13": "4FfF9PpMfMwmQmPUtdKdHLfYruaVUrGxekqofL12Yurmi2x8FWzGhkNehgfyHfPS5CW9haNTXNLQhDESzSqvcste",
  "key14": "4fybVSfdXyh8qPXHcPFm1SBUVFCmBR3LERBx2q8nXw1CNxNEbcrEhh1V1Y2y6gSkaymUzdrCd6hQzDJVS547mUiM",
  "key15": "4ZE89TFidMPn6myWZ7x4b14xbF9sVvfeVKZmL2ZqJqDzgW8ZBNS43UxMUGPoCpNzv3W5EhKQShQFo3RkJacZV8e1",
  "key16": "5VpfEVWY5i53kJWi7pCRc9WmJptcgGXnKUVypAMpGw2gDPKkxV6n2r5fw7Fc1c37U5oeVnve49gyB3R9kxr9WePo",
  "key17": "5grWkJZjCbkWDi5fULwfQx1oPNgVfeWyvewMuj77VBqyvrWDuWCTHfji8SrkGGVQZ3tU6bdwkkDSD8aWYgCCz1eW",
  "key18": "3AndHf6VcYHwyFfsaG2aE4qcxzX2QJ5Gf76q4M5umdadqFjjaweofZq3haaKAYeRZBQf3uY6USDMrrGyYqNGYJqd",
  "key19": "3JJHXNi7kmrP2qBVa8iKA7xKWrUT82DWMfQMzKVNzrZjvUzLHTK7j5JfgozaZv5SuRanZVemrWz5DjNCUpDncQ1G",
  "key20": "ZbzS9ntuncZUzA3XXmbjCB5XGRdEgsRdYofCUJD6aKL9AJFmCwms39kx81tmqSc1gJBXpApCgvR1tfjss9141yW",
  "key21": "4QN62hM5cXZtQEepF2Ckie7aJ4RmYGJrkZuZhXVry1YFYWcqPk22x3xCGE3Zvu8pZKz3mKP3N68suS5TFEje4Nn1",
  "key22": "5FrGgQ1qFdHnxk26e74AxS7ZX7mkX7DNKWsr7UniqgZxagriipqZaehfcDiRaSir53HNoL6uyK1kKWsff1a5u8Ey",
  "key23": "3p7Dc71jw2v6EjwHZFjg9Aj5yvDbBwBUhkKKoTMfb33MWFR5PabRwey2KjA33f425eaJ8VoV4xUbkN2LgFfuK5Yg",
  "key24": "3j3wG9SaLG4nLaAs5SBtwUvmFaoW1gNrtBLZ6auAuhEEzNo3XfAN3JckeoJoxex5SGbbyFRCigqxkR2kLnfoqZc3",
  "key25": "54JgUHyNQEeTcsbxZNyroUSGZphxLZ1Sobuu1LBMnUqtAU4wub8KYbMy3iL9f4nAKoc7yEvaXdQ7s2WSARiNZz6k",
  "key26": "3DLHoowtCf2DLcxyJRmbMGsv124cdfMEgR4zAGBfmwSuHgwdFsdYusnnu4TJtqGLkZm7GD3yaRZ5farrQ6TXP5u4"
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
