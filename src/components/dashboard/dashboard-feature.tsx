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
    "4mwQAv5h6B6iDmjJPyJ39LKprnCpgQ89LTonm4zV6RsfZ1radmiwU86p5FXQUo9KQVFQTePUcmr3CWYNcqsdod7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321qb5CSuxcqiww8NWVyKEVrhLyzaynPd2didXVKR7zKBDiDHGiUkcFrP2poU6xZAftLgcFESgTLmeew3UUqeLsE",
  "key1": "4nNTr88LXDCGeevmnVr29vPRM6q51sF7AhRWV11hg95k4wJqQVrfsLCP72nEs6nynn8S9Fy2RFMRLqhoJyHLGX6U",
  "key2": "2QKWQ16r93LGLZLC2gqukKeYhU9VoJGVLTcFWHfo2SkqRbYTaFLB35onYM8WTQSZv7Xz1KKHQ8N7fxiyZuAmE897",
  "key3": "2zp13BLF2JLWgy3E1oo743Bu2aEfqYx13e7F9xVQxHNJwHFyyQBfA6zUK1NyEzDmvtxvpiCpDhvHout1KhzJdpEQ",
  "key4": "58SCUCxX3tunazLhtQVSF7nKKFzyL9Aa5yVmTSqzHCCmSUNUp9VkY9ST7bWjJ5PmHA7jFAoubMWu7551NPzBnqDx",
  "key5": "4Sb6f3R9JM4AK9SKiheZ1SxGs6c9MS4TnHabcGEncdfo6uB1g1VpB57oDa6xt6hDpnKGcfiTRCBN4hGwtdy2Bwpm",
  "key6": "3WMCckgfqsZxhtAE2ai7tJyYg8sLLoPUaEHEv8HRwmPLn6AeY3PGZUTyhwmGHMQz4VcREYYxDEfKav2h9sn6Xm7t",
  "key7": "4iSavex4sN3ZuMUBAfSMKdfKHLHxqYUBQQDMd8P85PZvRU9euXGL7buk5yQ6Cwri9U2YMoLR8ULqLhjfAMcXDMTm",
  "key8": "3f9QyYGWw8o9TDmtFDKo4dUpfq2Ueww5hobK1suVRurZGQznQkuQHZnYnpfMRLud8CSUUgdAREWb6wQjE96uovDr",
  "key9": "4648UUL6pqq9rRayQwyZrQYoGYrAJ7BmA1mFdfbKBysoJjxxjQAddEyvH16nLntY1Cddno7u64sj4Cmuc2BLKuhm",
  "key10": "T1K8tfSGFiA3cYdxWtqHxYrqGuXXwoPUTFCzkgDAH7qSHWY3b99pTd4f5MWHHmTSDkpDNA5kbGD7cB2XKF6wWr5",
  "key11": "2NxBnAuReKEa4XgCdFn5yjdPwu77Bk9i1hDYirNCQuTqgsAbKzPwZCmGuukqRdbsxAbADoMKcnierVc3mKFBh4AD",
  "key12": "4kvtbHCRa1amw3vvyDtc9CqAaU1Nz4yYGmKPSThzKg3i3EzV6AQetTbaMmU29GKmoMEn56PYsMWSoV8faHa8AQMy",
  "key13": "2NCuwmnfRxpuZbYM6arxcFGJZSfKFNh4Zxt5DL3zWuK8xBr4123QGuyJj6eYMTcVQS4fQZ91WfYPn2wvRFdn2GMk",
  "key14": "5NEnuDy8XLfEHSPjboGEXcRnXpbWKEo4ruAJexQedyZzNLHC8hx1pNaodKdiefRPZMtDutE6aNsa78qrdaJaoJyH",
  "key15": "4hoQjHFfohynMmgTTJeNbTQTSbhE6ccB5HYWjAdppYcRNSkY4S3o7zbFHVWMyTCH5nfEFhiGx2fQ2x5AYFghYm9d",
  "key16": "3uuGGjtgiQ4iFPUk9do2cP5toyz8i2jvrzvBgHGwagYtNaakyndrU6FH1arvwXJx48L1zNQjxqcRT9N3iv6yHnKH",
  "key17": "4T4iRmv1PEaPQKh7uf3DXamicUpCmM1Z91cjVMTVkxHfRfEQZ8DFt1v1JBgJ6u6uPjhwhFsRKo46cWDz4SkpahL7",
  "key18": "fcwntteLdMF9kXBCUkoNXvYZwdq8wLFm6r7qrB86AjgddLW48jAjV7gkdouppCaFDL9RbWLubrRD9yV2H79HQvN",
  "key19": "4dUr84PxNT7yT7TfXU6PSauEEy59SruU62bh7CeWk4HJ5T9Z5eS18oxq4DMuUN4c4NjLnRNv39NxHpHAa7C7cysP",
  "key20": "F3A75LVTRKqGb1n8YSEvANwApbbdXAiu4vM2KvxhpAjpRbRfdzUUxCEuwzEgcWMReKYvScJEC43fyLmfnhfDvNE",
  "key21": "4t3KqgQPn1nnk6QyNKeekCzGZdFgtSJo13uPFYLtYG2GiVngTZQi8jSTxDduPt9LzUdq3YerV7xW9J7XP8YvH74A",
  "key22": "FMKkoAA4xs5Dix7jKVTWAZx3HbBNgoQ83DNHKm4bMM2fzdFjeGLNw1uLCRphzZRuDdPnegzqhjsGjXTZDETPXmK",
  "key23": "4symLZfmrvE8StHt47y2BhEBRoxB8trZL1KrNWJUwUKi987UE4DnVYEyY1oF5ABbh8gMzt9CdtUfqUo3g1Kc1Vh7",
  "key24": "3Nx729M2SF5vKq5zkkRGHy39QFCGZgVEhxX5ozC4A38Xbni8P8wJo5MUZaAGoL6zuThAfSAwU7Eokju5UmvLVe7n",
  "key25": "58HhmivvUP3yQH9ZENJYnXjBCAS5GHtgFqs5DKWYG2SKSop3PeXi4XmLYv5XZxd56cgoW42LZ29aRV39e3oB1y89",
  "key26": "wgQZikBS4Lc1AG27czGWcygEecov3UaXhB5sc5BnTfA5UgfraFj5bVVzZboezHvoiTx2Yssr8ghhpYAa11xyqQ9",
  "key27": "5yphTDNdQtmH9ps8susGoxdCUyNrPf3kPQqwAV43emCiNw4upBMLrnRs6BKh9zoHGTuBwwuJSp72yWSErqgGkn5N"
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
