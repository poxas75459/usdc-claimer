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
    "2Yzoci7sjYhFnLPTmdwoYcE18tj9bPXr5AnMc4ujv9bxudcrKfd9daJN8kn2yPreNvc6myCEBdJjjED13r9sDwaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ien2416DVo5z2epA1A5k1xngcGsLL8tgddsxtprxAUTd8fxRfgoze7z1y46beupGqwDyo7ubUuZzBH3PDG5YD6",
  "key1": "2fh4khwH6G4PRSPU7rmPsubjVmoxPvUiPs9RB7xA2zG37DTdX1nfL9ypcms7jviU5FdY6YuGLt4JMvMjLeZ2Mq43",
  "key2": "4d72FePfZ2c39bo5nbjzHDpdH8QZA5BiehemjAwTxZ241X3iwBcH2mFxaPDLQYsi2FF3e2dZEQcjxRmPHMpCE1T8",
  "key3": "BxbRCgjvco57cgzZZEUMfH1x3BjQNNhyBdo1YSRuMmgsQFHbV5NTCnRsSHupE6NkdjFqWsiVif77GWf7MVYpoZG",
  "key4": "4fakfnsk941y7C4rHhaPcouhFNY71vNwH66MEKKUkiujYUYoGcEZzL7Jup8GNSTToYZLnzM2Zm59RNcrQdiMzxuW",
  "key5": "58Dc85FrG5FNvdPjLHDNrrmRkrvAy1497V1QNDkxTiXL4UKGkcZwf7Bujc6Ap2ymvGCMVe85tNsLHrhkc5FAWHW6",
  "key6": "3ANNBQ71VVjEptVQLHg6J14fZggy1L8UED6k39DogrumvGYZCyG373gixbYsQhQt4mEzuYgHLJkz2JTmZWPYnpmU",
  "key7": "2NAfrKvmQr7YNvVkhhBtpwq57T5wNqJ3v6AmtwkSkcLb7mERzqL6DyPE8GNmowTuCKmYt92JuBTNyjZYudqy64BH",
  "key8": "4yRekwpgKjip1rFpbkeR7Um9AQNsHsYrTYfQTo6BDFQ7Zi1hp9525SRrH8nEr6iQnWii6gv61PnZs2mFoh9YRvwD",
  "key9": "4kZJ8Q9mTcUAfdAsLvcdiHMy8G8HjTz9BXhjXeTfrHU8TDhNxsNACsT3s2tTbB5tXPXN2gQdp7VNQs4ifb4CRfBU",
  "key10": "5Ap9yRcS9T9x6bi2Ki2YspcrSzTVTLvhV5HJeUKSVPVgWbwF1zXateAMWSPU14cLyxsHdGYMPLqfiEJHJuE19p6A",
  "key11": "3pLDyoptLoDbtxzsbFmeVqWCKs9VEVLD9Sb8pWF6ADtyNm7wPZLagYQ4FpPaiUzkPyQM8L5cTwafH7usnNWM8p4E",
  "key12": "2Mwc6CQ5kEN7DW2gwvxv1LPBQCxAsRPVBMZZJycC7o6MSqmH4C5ZJ6BpasE1ukUooogZDRbcv7Dh5FzTD6ygvGDD",
  "key13": "5ZvpVmxpFVYgPCRnmRHy3YBJZu8RQZC1hdJxHTB7xiAmYrsCgMvm9EKa2zcvAPTRGBb7H5SGatHWWppQcacxWZB9",
  "key14": "5iupH3JoxaAwZf9F5fjnStC33R8Dmb6Px5LNQgCYmVLGtCsJUofsMc356CiqNfwrEVw5Jvk84gMc2Wwo7zvzS9u5",
  "key15": "4cre35b61SfGdCW2fV7u6SHAw2YYGc2N8vS9g5pxuwKsQtXHbsdYMxEH4vNrGDR6ftzSMfF4Haq7CFTP6Edfg1nR",
  "key16": "4g4ydJshmMbtrVi65j7FoDpTNgBZDfx6FjuDLWQ17Sjb2Pg5F71hnqHbzHZSRuMa24P3ecv2BVV8ugSSRwQUHox7",
  "key17": "5VqPwtBinzXW9mSyuUBgJDdFh6vCLqN2TMYF7tuFKWD6bzD7gp7o5ZangynKcXAzQKeFYR2wRLoEr1FeRUtBfHqq",
  "key18": "3fVQBPjeoapZB59oj78FQE5aKrMMVyAPPfHktJSZPU7c6CJDLhH6gnVLNKggZbVjLcDqzyosFdjtqxsHJQfZ4efm",
  "key19": "4r1aECDvUwGSM2rT9WhBSn4dNnPw3iZPx9dicQv8pz1fA19BPtMM2UctqkSWALNzDnkVrtQ2F1EMZyUoYfT2j7E5",
  "key20": "3ESuAWim1DijdLwiuXEYD8N2dspPPfdjDFo2zAcTSbCKCNe4CfkLpxFmq6gmE16MseTMMeeRqsAPSu4XVuyekV9N",
  "key21": "3EZshqJNv4xVD2CrQmz5VcxiVh1fDbUU7xwTSDnJL688xMY8XaBvfNiyaF6tkGu91icqZjGJipPV11TPTp7hiqA7",
  "key22": "Gf1pRbyRWacnU4wEC8fhCjHv3dfMK9sqFCqvnqD9fkQDgUx7QWqE2suv4atfxcp2eFcKsyRKB8L96tTzydVKqNH",
  "key23": "5RvFmK7Urd9DnCMQkt7P7JbtyQRQYkDYnQjq8eknaXMgyhDSbc7u5upZ6uapsfUBMhJ97MDG3ENzCY7A8CP86zqj",
  "key24": "DoXYyqhRP1e4YeUKBYeuHdKrcJT5bh2b7LkYRmBoYjubsFp5Rb8CLnwZkqRzAgdFW65Ka4VdQeDg76xb2vJhdQ4",
  "key25": "2Xp79dN9H379Ts87yaKfWGJHDBhwWAMAzQJg6hVyXfJUbrmLjrRR1pHUAVk3BHijih5St4pYsPME1uHMcAcY4tFN",
  "key26": "4cxGzspWGPau3gZ8hxk5HDNG7zUrGBw7u65er4yQQkWu7JP1b8NnPakkYkbDSzQFSKRcdK1js44RcW8k6sZDCJCa"
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
