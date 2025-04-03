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
    "5kwmXcDEhWwskrvkqtgyJ58d3U6hdv4AQcccqn4SZZwYfCVKYoNqSKKRkGGgnZF79soF6HW6uEXmwGEMtmWcESV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NRDhmYoDuBHcBrCRWHLUru9wdUPwtUfDNA6HA3cG5oeHu7Hij3faBWapeBEuHRJBNrtFnhxcxdCb2mU7LRKfpd",
  "key1": "3SSXD2Jao7g8uoLou94d4MfkEkkKSCYDNxBKNwJN9L4v8vShdvpcNKXthJrbLGLYkRLHoqDM3jetyc7AeeMX2TW1",
  "key2": "qZp64GrkBmGkGCM9Cj3GFHh8kKyGftWwrcaqbZAsjTHAsXxJx6aRx9A4ghYALQdU8Cgu4DrDvHUvvkDzRcvWPgj",
  "key3": "4tCaYHkqW1VbArE3EC5MqcLy9XtU4C4qeL35w4cQRv1jZ5bhjraNt2bVmA78CsvGvNRvSQnKyYikFqUPmXThsoqN",
  "key4": "4wMZjpXTYApj7f4LUSPtm9VrUauHuLHHrjZnmRuzXcTTYAm2jDK8H1TmJN9BGB44hQqAzhdB3WHnCiRWQ6aj5ubs",
  "key5": "4gz7mZ6XdXPcCJui66trsVGkBzZ9Xq9vyapxzWoz2ijRvNiZq5w1dwecxn22zCrseM9TyHBofWkw9Jwu2HkFBRWV",
  "key6": "4S6zk2TD7QT9TBGBeWW8QUtJdGSzzaFd1oTeW5UGUEKkjgTyAzXKHFr94DJDA3gHdKjFNcXwY3dkrzk3XuG65Ewv",
  "key7": "meAHgSTyt2JrGchxJmqypT7S2HvfNw531JsKsH3QrJiKMNvtAHq85ZB3ZxFnTgiNxoDfNEFuTpgu9v8URc6Rjke",
  "key8": "yZ1KPv5QQStZFJMyUi5H3GNm4jYh4kYDS37mN5WPKKqxYH9N6ECvBwtgMMBUDtHJRoeBV91DVQhtRisoW9GNV87",
  "key9": "2yXz5iwbTEu7eEbUa5Uk6vPQ4AyTPdPiMvL6bgpGBk6HNVcWLSM5i21yLByFb8ripZkJq5XRGErKMcpq4qPyqQKU",
  "key10": "5yh25aTVHriwsHir7vXKf8vhKJba5sk3qohqedRH71zeLK3mh1oVc7rECM7LPz4SufLbeQeghGf6sHaVcn3Snf9n",
  "key11": "5RRpDdbZkAbqU6sCxZGxcPGPFUt2g8Ne44pddBRPcwXaT5mNn7pN2VjSoraMB3FFNBGAASrsqyWwUGCQRRT8BVnm",
  "key12": "2omu8c3agVxh77zR7KqGdoaC2sKaKmuaiLdWQs5WyTEX9WW9nhzQ9EZRd8heRnzsVku1AXvhere7KSRKyqb1rDd8",
  "key13": "6gWN6x1gtcjsNSQ8G11s2Nbx5j3G3hgrKqVnkxjvozghc5Jn27AzeBJrUr94hXaqnJ1nSeP2pTGiv8QvXhJrReW",
  "key14": "45estipQgd4ZT7TBp1nPSA2QGffwTCStT1PyUMR9V4vPnatkvrEiZcYmh55tWdi1wKuULWtJAMv8W8T7g3TBvAj",
  "key15": "285pjmQ9JKoJ4ZJcLZ8cY6vQhAGhsyuaAiQCnwazUYWt7zKTLNeoPvGifWgqoC8XnFA6WPgt51TBve8nyJnAZfqv",
  "key16": "yi6nEjvcL55tsuT36QLKRAH62zz5AZhTonLdxzpeBN34d9my28vuP7mFt2ncdWveLEn1z9FqRZUkkTcVhFramjf",
  "key17": "3QMfrNTDXCXYtTfBeXYt9UgMRZGYXKqJT6NkdZhWqqEc4tLdPdwmc4urWZx5s7N2dpm24Ar4hCxisbuKmEBMXMmv",
  "key18": "5xRWsXmL2yFzgctKPm7A1aTLZiZXfcBMtYNX1Pm9MVXxcdWLp1F4uMyQ8ZxY3uKs2yitPtYFZouoiuXSUjgePEFj",
  "key19": "qwTYu7e7JxGtfPjmexVYCVTfkDTud23NH5PrmUCqe3B8ADmZMXB2PdASq1n9jyAGi2EnTfhvFxh18G1sMQibJac",
  "key20": "kNdSGJa7xzYJMDxS3KdAf4MhV1DAgV2izEddUgpfJJizzxLFtqnTUyXiRV621TCpPBGWG9t9w16RvL8T3Fa1Hny",
  "key21": "5gJQfDSzuDnbnScCSEFjk5EHKBFVTF7ptj1r4jL7FfCBF9tvynEF2abmPtgxMnhLthTX9qBKC3q9mPeF5pNpNGkV",
  "key22": "3QfQifjVLyGrsGoZoJqMAoQa5Fw4p7Va1biPFvtHSESwP6ByCCQzkUEMthwrpuQToregyt36bGtDDErkBs75t8hg",
  "key23": "5TLqicWZUCvdJrxoUee4RoVDY4QP5LaWgRomaWRrHtcwvTTje74tk9qi6spq29P1zVcFBYvm556f5i7s8qLiWJfx",
  "key24": "36XUGYub7v3jZpjYB7LVjvDTmBrQmD3LNsgmdcW817ikdEu5RtiNJsz4Kp7oyjiGGy5nF7afAuB3hjLm6ozmgTcF",
  "key25": "52DsoUAycPGbkXmU6vVxkbMm1VxssbyarAanY1P9CcCizdAqUoyooJyqLSHPQfj6euevh8gmyx2iu9Ycshh5FmdX",
  "key26": "3QVvVMCERcqkRQSjAMseNnMBj7fbY7U2Z3BtGK1SAxLWWQjqf1uU12D3JGkQoeX3taojf4pMCbdkzzWhmza7DsUx"
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
