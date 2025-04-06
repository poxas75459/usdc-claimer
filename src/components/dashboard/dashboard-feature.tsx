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
    "2WRcmku1oJ5YPQMDnCKqqxJEZUrzvHudi8aAz1KXeh9jqC3MYp4BTxnVFtvLVigB3S2F3sRKPS3WvMLJVQ42GsRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cR2RMg3EdyxZHEn59oRzsYdChSG9FVvKkrjDcQvgVcj8QLq4ctfQQ1Ukrsby84uzhAH5WuiWfvVusn9BPpkEggR",
  "key1": "2kBLCx6K2nE4jmuFamp8Yur7LTfXYajrReM2sSTf8uEqQmpXbzFUefDRcccDck3F2Xn47bTktPDaMdjzmjzUWafU",
  "key2": "HzF1LXHfSg1NWf6AL6ViifdrmrmbJmi1qiyhPMeYQS1FFfckHnrScMpekbxBU5DL2VLjJLTc8JHVADxztLjSHxp",
  "key3": "3hFE4SfgxWgRkNcmxY9VF9gBxTjEyfyC6dwyTQBUuWYCpd2ZbmvbS75JwkchSo5DEGopaUP94TmfoLMzJBfLMC9Y",
  "key4": "3E29hMnSfmvKdykc9pkpB4hoi18AsUR2wb3a6hkpsghrpjPUM3EXZEH9yj8e6VXd5dvaDg1RB3qRZnjyHAWmdzMN",
  "key5": "5vhVpKAeu88Ey2NjwtojseK9s57B1sNV5sBzB5iM3VYkHcYrUey37pZjVRpC2RRKKHQjia3hUDEh5iL27Rcuw9rm",
  "key6": "YhfwGmTs9ryPQmEPAg6QZQkYqHQitqxW5B5wgEQVXFydDattRenF8Fujk3bZ8weEsqjTkUxs6VCLwD7i9gZNuUC",
  "key7": "3UYR4SEtcJjw1mXaLjy5y1EtX7ZDEp8UYCmsfRL2nc4yxrjkeSMAT3swcnRBhsrUtBi67Mo3gui7U8ymbqTXdN2Q",
  "key8": "5dSSLxDPs5GFpBujXwqr8USrUMgETp4VYJyT1M4kTUNL4dZsyTrrmZpVPwuhykDAF7RUJiGJ5aH97bAPLFwqyKYi",
  "key9": "5rQivNGzoixiwKMQLLAn5yL5UeWxdr1nVtP2B9jknhc9ovWDEdtd8cxh9ZdtMbcqdZnwcHnjEX2XssG8WaedQE46",
  "key10": "3UUTmTSGxVGb4uAt6YoUrFBbqZbvXwFUdc2NRLd4WDFz1E4hjgfCrVENamiCzxDwQmxbmp5zDdwMq1VymLJ61kfY",
  "key11": "4QgVgWRneQC9WVaovir3aKE2LPyyHExdupVXgAUwEp1RnKgr2jrjPJM1gXZmhMb4VRxmxmwrkGPSQsgbLC5UUJNP",
  "key12": "52uCazH6KZ945VGu1QxZNrjrV5bVL1sH72fYTh5Dr4ZFTiftNeTn7Sbg7tQaoErB5eBp439ZojxWpfAVpzCeafQJ",
  "key13": "3J555zwuzFHE9A7rsHNeDtHpHCBPdFb84eBLy4rekxryxJ5nYqhsgzvSrBAvGorNmxgU1iX3JtBiQKuieXTJJV9j",
  "key14": "3auekmp1zYvEwf5mPos1AEDzmnAmJGUPWPYUnRykDgg5raorQQieD2Tycqtm84s9qnwXKYZ3mXdx4fKyTKURNiws",
  "key15": "5CuBs4fMszs8AM6RZkVtg4Ay4Gk2PUTHt4Sk3N3kfAHmoVuCHonVnwmSDTFwLEBiee2Ng9Kush3PRj1bWMQK7312",
  "key16": "49bQM7vhZbTkKC5PKNvtxJiQ5shNPNYnJYGLhDBUKBCpTbnNATnJxuULNB5MvbckNwhymTS1HdXxKy6FvSH22GVc",
  "key17": "2Hot97DVQLWnCW5Lmjd7NuJu8nby2CW2eEkwRYGZKhuGUt5AHbSVykNxyPZAxjYPZKe4u2ZDZiNoLsKhKzQZDUxv",
  "key18": "5W3hu6HYtd2SxLXjF3b7XBBimDd3mE17T7rZsqhhWKaqDDekJG1XrBh1f1scxgvpX6cefXLKPqz9xTLQywxKkWmU",
  "key19": "4Kfx2UFEbFPY6M2BKJ2UvDDsBKsVxXtpHruNMS7NiHAVQJcwnwD9JLWRLbfAeD1n8UDZ1Z1RHaHpMEXv8K1A1i4h",
  "key20": "5KgoaLfVyKc7GC2LCCMxhwuX61VvC3HgsBZZxSsuhStiyygvdJwP6RQ7uymCuNLKZ67M4UNzKauLHkjoDbikFLfT",
  "key21": "3rzTAkrSu2i6XRqvDbNv63HfXzd7RSBCK7u5XBuucyxGM33D7guAcp68WJM2VBthPg4opG7jPoQ919nneyV88vuh",
  "key22": "557W6pnzdoLEWJPrZqZkT51uL69fNZbwefMQY1Qpc5XgKLKb3bYuHTCzefSSgCJgDYWx32mQwobNq9sNqLtQfWED",
  "key23": "32mMTm9sykRkVMcQsayTbTdfTdwhcra2UmSo8MdssZ9zrqvgPAjsBX7tDKUjKNNcamupSvzYK9HrE3UxXaxPe6Rz",
  "key24": "5Vsz4EYyPGsEUVgknftRZtAf8ALtq3gkgpeYqshJNJyHv7sGdmcVxn2czYFiufFf4WpBwKSYCNEZ3SnuxRHh6Eag"
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
