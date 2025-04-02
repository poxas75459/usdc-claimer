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
    "3iurqXjgyG6XqiJhKqpNXz4j8sipmzNMhhR9T6iVgM1HcmxYmHZ2kwJrpohwDs86XxN6rWTxXYBGVyY3wANPAE8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R146ak885uEn85nXFX3TGK27X2VdieoxZSD6N8k9fGfWy39BJTEazUtQbMghztXJ5XPUaYDi1Lhp4nJjNP3LDdD",
  "key1": "54K3Vf4ABy3RPg1J6QLyuUC7ZDExdjiUXfMPGPPWBfXBvGCziLpKhLqUxC6yR8SxoqGySdaJT4drk7s8VGBWNVJL",
  "key2": "4qLfwwS7DBtoqogmHsr9zX6CBgYiYvEBBRk4Fo2Qrm3ucAehdyed326kCiUgP5GwKZ9wgNbGWqTmGyuLyK1Y6f7P",
  "key3": "3jvwQVz2MTZH8ZVaiGCEPAjLMuongVM9VruoGEAspXwnoN2Bm6z53VFEaiXtFe6LHrZ24MdFikcBN9JzfcmKn8W9",
  "key4": "3o3bt68C8k2Wbj3DwMaGVNJduSbBXdbtPawTAZZLSwLt4ArZFLzK1oaL1annZhagQxaUDQ9kGSdXPNqeAeoy2U8z",
  "key5": "472rSqvBhxkdWEXoii4BUavTNTeMD2SPF47uZGW6ftzYS59eADu61auXr5hXgJ9fPPhtLRNqe9iDdnEM23bz5pRa",
  "key6": "4tXbHzTfFr8L2k6YL8Pa4kzx9EpKEWLZQXFTzck4FGVgmpxHDaDCSjkedbqmpBbhYbdzfo3zmD4kNJxBVuv9uPNs",
  "key7": "2mvEFncxhiqAz6N3uajfYda8MYDM8J3hHoofWLidqxYKrFtKLVDTR36M9pPcEr3UhGS2pBfVYgqZykXgvV2Z4fL4",
  "key8": "akcom3Heym4MCLWoVKRBsTLK2W11gREctrzvp6dxn6GSBjWmA9JYp4oYc3rozvwJUXmvTLVeknTTYJ4Eauz8qPa",
  "key9": "uVUihjLBcSkeyiETZmCwuaWYTjUtCktTcz56D9X4vQSP4NVcKBQWD6k31wKwvt5s8gxcPDTjXevS6cZPTdFg9x6",
  "key10": "a58qyAe1Q8ecJKJEW5KFGMQiXjuWMJMcT4DaUA9G1gqCJC8CHTL39JanxrekT9EkMPYDwg5ygktJptTnrfjaUgK",
  "key11": "9BRrGBSYXcs8J8i9D9DZ8ZzxUncLbwXoURXWmQwDX4jxrDymmWrzXUFmbPJMGpkHpPhRxi2SR2zyuFN5qAWBBmc",
  "key12": "4V8HpN6CAtKgXtTc1vpigWoFeNvhNemUtwkdGcTdP2oenxtvaT5Y8FPz5oy2ef24XutBPWRhjj3HRqVn2GhofqyK",
  "key13": "3ienc9d6G8DXDWnu28nRLrt86L6LLeR9vc3fQv6QgprofccX9imKukEhtnDJcWnLWttrHSW9i4Xg9rEybgvkgr1M",
  "key14": "3B92QCpVsQJZQMkspNnw7wdjQmeZjn6xXMs97XGDxGYDZtSB6KTu44CGbXbcom5WoR2sSRHTqQnj6KZSfHuwfNKP",
  "key15": "44M9rYbz9vFn4Zah5dAnRebig79fnruzhcwyk8F7tW6zUvwzCKkbg34PvvDtK6TJcsHiQHs3MG9ZrDfG1MqCuTXA",
  "key16": "4P6GcsWUw9bAHAxorP2kjG9FNg3DVtHgzYw2SfUGNWYfhafJDwTMuJ9zZeVbTkSeBzoCbSYXugtCDdRUrTLcEgDU",
  "key17": "2k8zVCBEwmtRGd2uGgupMDHofgAVkjAoC7un3rBjXYpdm5mgZDksMFaeGGFHCrJt4Spba6nnoz5YarnRndyBy9hg",
  "key18": "2buWux5iRkvAW4pRXjcmx1xTVgmnn7CFKC2YYQs9qg24HtWuCHRZWBMhcEPwrSN5HbqQhnLq8oa8j22TvmWZoZvM",
  "key19": "datBiusRaVDNmibUTMPFD63EYL7Fzz9KkTWRqga3pvA7pfYQuH69JaXRsZ7RURtQQBgDHVzGWyq23g2iozURzg5",
  "key20": "5hLmqwc7c5AsW1GkkEzMUTTX9E3odCnbX4XfpDUshQAZkCTFD7nrtTaqPEokSLzYAE25pfu2uG165HNGMJL9ipvq",
  "key21": "2x4e767ZuiF9uKiLj7972aoKPTaxrfP8MNxbudj6fMysyb5GF9dMNvCX79YVBu4Kokux36jcKPqsFd5krKbfxCZt",
  "key22": "3SEHQDsRu4PYnGXCdkCUo54vndzGkQjmDoT86bn1B1YnFTmAxr3JGkCevAYRRzHV8yRQx9HoVe5ug5WjcLWjjwPi",
  "key23": "5ZYgAZBjPEb1f5HAxWMGWErbA3x8NjewEHRGmgc5mVdKyjXKgMrH9oNjApJyBW93tWPAPeLYA27dQwd3nK23Yoh7",
  "key24": "3tooRxboFh54Rou1rFBwvJWhiSHsvqucKqjsoo3x5UzuxVKfMYVEdhkFVi82jZNQgFdQ18gA468gQ5mebiMTAyYY",
  "key25": "5Q8kPyCNyWtEjko1nQJKQTrnTLAVY6hNRK3DarVnnv3aVrsKQfjCKVvCFV7vgUwfkn4vgVe9AupZiqKWezAVXbu",
  "key26": "4VPUyAyrXv2xASrP2VD79brBXSHtc6pWhUtzWeAwbGv9jXvoyr9ekxr8GL4DXrxxdeqmUsyR5CT1cJ7ZAheTt5YY"
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
