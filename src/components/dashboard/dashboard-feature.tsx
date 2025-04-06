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
    "725ZuqDkSkUQoHR1sFsRvMHn4g6sbUz8DkvRjQ1oNg41GegNHTSpkpNxjZ2jtX7nrbHnkofHoRKGEmuM8zDsn8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buVnsWTatdiRdNrdCiq2ZhvQWXYjP2r4rKpo58Lp8EW2JFGfNcakp1SMpvc7zoegkbKA7fadBTcU2yeKCsZorFr",
  "key1": "4ou9b3LmnPb388amKQtgAqrMBoMuscYGswPCanEteNJo3bqsnLgs3rmTGS5e2diLDcwNXWgt2Smo4WJMbUd5fsHF",
  "key2": "HzQRkmHxaBeXWoA953oNoMsatSvytjq84V6sE9BFZ2v3UGY56iSK2WWHDbzjAgyuLVqHvYVHxxsaxaWZ5Eu14Qw",
  "key3": "5vJtY2W2ZvS7F5xBwzgaykrmLyK13ujDFhC7cay1dzMf1k4QVkUZ2nZ6hY64mLfYJ9qdY7xCwRqTjpx5qeg5XT9g",
  "key4": "3mjxn4dAf9CZe9sbPeyqxvhED2AfKDjAmWUp6hw66WEtdjNWuZmA45nLSxYw84FjJJd3unVWqn1mHrVJGAXr5U3W",
  "key5": "39H4PGZq9KFYyQdZkjTRsWQUk42QrccgjCQBAXHhSmmNRmMgNgguNdo1NCGMPAdUxVnRfhZdkULpfasUCYG8admf",
  "key6": "47aabeHzNqoF2MrkfuV4Ghpc44VqtM3r3bpCXzJ3PAZuxJLZNCrADavsH5PR7S6rw8aRpfCR44jxnCEKrSUJgB5p",
  "key7": "28JAZSxCnQcjCttSgSyf2PZCUKt5yf8U2obH1qohjK2brVZHa2u3HSWfZAbzsHiro3dVf5WuDrEFUsjv2aCUujUs",
  "key8": "FnrEXoUVTWQ2HhyzrHadHqZfbAj1Ph9ntC2We3Tpp9WYTFTv7yQGLMMLawQhea3iPy6pBaBbFPLNMWAcBp9BGNH",
  "key9": "5hkaZF3SuzKQrZe8WZL4nCgQUMNhrPNxe5NWpVTSKaz5WawPcBbm1V6vNuQYVtyLktMzpp3DwJnrrQcacEKvCmwW",
  "key10": "5ikq6rZEs7cA4upZrFCBLtW7L5uZCWwR4pK11b3SWq7HC995RTv6xXokZ1ad1bbzzUeDvq5T5xgcYkmaFKSoeTzQ",
  "key11": "4hdefsZgpbdTcsaxqTHKTJ8Cxx4q2VW2a2GkSzbvY1jAA9b61hwv7Lcq4LrZgFL6Whjwx9GtXvW4RqYkLU3VEKXG",
  "key12": "5VSMK5iT8dJrTt9hHrm33D3qBiyTjEEUXKFwJVgEzks1P4ypFQzUPGTAQegpcXtu44b6vracumKvFHDughxeJ12i",
  "key13": "WoJ6uFrBwZcyMXkttuLA2ggX1cfLYstHTQ7MbBrc5XptSzCoedBj593bZixLyxgMdLeD5joxJZCUse7F8MiQPhJ",
  "key14": "43UZcXx4kU8HiWBHLbTSKBomqdZnvkvCAqgUjno9h5W4DN7DJSwhmDerYuKZsJqKHujNjV2p725VP9eD5oRVV6Jd",
  "key15": "CmuyQkBHg9HCfqSPySEqvPmKe1uswgkbCTX2QiaMSFyKQx5wmPcug1oZDY7xAjXWzSBdRFnGBvq2SBwyjRfNCuM",
  "key16": "5Y3sKMuceBZ5aRcVhCzwVJaXNiFWk7jkr5EU2h72px2aZejfwFPdSDW7KWB7CSWm1d29T9T7qKvGvVz8NZqoxv6J",
  "key17": "62kS42uPkvaYeo7UV9yCRkBL4KkNYpGp68C4qvbUMSYvfEDi6qkx78ziRvngrW7xyoJNa2wL7kULFoX4jTwGajtw",
  "key18": "4zND1P9rZtkqfXeqsmVTQ5u9o7bQSqy6g9dZMVCsCxkcepnCDSXKtjjDidxLHG1CRwgLQ5dW98C1CV7Bq7AP5W88",
  "key19": "2fDgvs4Zy6RbW4CeuPRMjG3YPo2qPQGbTJzsLU6LMAUPJKqWDkM78Qmij1Y2NNy1SFtkExymZnFUa7kMufyUShoB",
  "key20": "3ZBYLgCPXoCsj3Jn3jvpqgxDZwjh8jAZ5DWeMNkUX5CQLFG7vLgNvXNWi2zu5gbenTWumPSajBPYzpvKPs4n1eJj",
  "key21": "4UM7VsqmRf3zVxv96jETvTA6inQJ9LR3w1Xhsj2p2DqEQQHPq1nMNSKTLdFPDzb1446SBgPtWGnobJJjp2LUS3ZV",
  "key22": "2h7dukqnFmtajiSk5wibXQRcv8Mxzdt8gGLxk7kVHCFcTGFkGWAGMcHsHsG1GBEMonj7AUc1KbRD3EFhuoedhihN",
  "key23": "55sqf57u1Nwcurahp8peZByMDmbKxMgsbDcsCXhUW9CUijXG78xj4Cgj4j5GpVhBG4PcK7eXMo3YikT272VMiVCj",
  "key24": "5dSTJs5s1XeqjAWVcJ3zUVaK5qvPAsdaSW4UiGsxcp6tDEZ3hSrZpzCvsnkyvFjYRbYwyLQENKESRiW9MBtMqmSV"
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
