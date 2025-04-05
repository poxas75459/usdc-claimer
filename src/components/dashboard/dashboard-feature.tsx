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
    "v9S7LD1FW6vinFU4eCbxx2fw9HgZK86eVfjtdVdjEL4FUR9xzxLPH5sZYBPjAo1tkyP52zzi7WWgBtcULWcgVd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q31Mjss19gTZxp8sqjQV3mCaeuXdsTpNHrPMTym5Sxh379DbPiVwQid7deRuKPfnxjypMer79mvLbsDnQUUvHfX",
  "key1": "2xHr8Xth2LehwVcqb3eoqN63fMQH9uJpxuRNPLh9HNMqQfT2fpFmprXKRHkdXKA3fpNPRXHH1mMmddYwQwTVxSCF",
  "key2": "261QhaTyeR9AUup8VtYEueWTxZNaCh8Haf9nmGFypXSJM6TERe2PejJfuB1Av8tHY8zKYhKmmAAGin2zweL6CvCq",
  "key3": "3uoRZiCTmTrDS7JenjDpHKtedMYMyAgjzKVzBZJrn7nkRJevisTty4dmLUmuesLWn6sy29EgpKehAV63k3JkDsKA",
  "key4": "5ehDLspc1pBqcTF2EsfwfNpAiVGLkCtuQp88VEt7dc6wvXTBRKq8DySeWnrZ3qgv5CreNo78AGqCRtD8TQS6aEaV",
  "key5": "2HLbYJTLkc7tLsW1nYzBXM2oCiiUeb1d35WXqLuswHM8BAhuL9YGqNdjU2hP3BgnQvxWH1AZr7RBQd6ZQTBMetW2",
  "key6": "3ymWbvNqFyvXN3X7ZWAP6s6McNCCe9RbTd9oTGjsVx3QvRYemF4S8Qs7S2NYmC4NM9XoLYnypfPT9jjcxaxHTV9",
  "key7": "5pi8muQv35az88PPhdKrN7fADwAEH7WGoJ4t2JFm1YKuDy1javT6JBfSLL7dDVZSsm5Dp4jPEcH9wSB3rQAANsB",
  "key8": "uHRyomptvQAYzBmH1gaouspaKeu6t3GeXXJYvkNhEzcLW6LHfhtyFrBDMjhq2Zfg2LScdiy1n7bKWx4oE1PP1Nc",
  "key9": "5G9Gc1XBf5fk7Y3fv7Hi5NzU35S975rkGzzLzgRHwzTdi5W3jbZasGVrkTkqtBP8gVYcnQ15mrXSXQ65WswpxQVP",
  "key10": "UMhhK1tkYMcoypF4D7RLjJpfaaUEznRT4GMH5RfoZeBvGPWtcdsPtx82P5Ap9Kb6SB4azj9B664CrENxFVw8eRK",
  "key11": "3DryrWa6zXBYpePcPGz5aQ6q5nR4FDK4Bk9KGjXuYuuNuWruigBMehP9v5HXg2p2jjiVQ4LZR29Squ8AUXuDSViY",
  "key12": "5bETjgXq8uajpXLnkrTCuCLtNMhgic3JqcEE1WdJYWqio3xkuhFoW4oUV59MLnBcuCYxDHNewTv8udY8bQojn3uX",
  "key13": "2j7pccFCTY9hYR8toXVNDMjfD7rhdRenYGixQA5CkimWn9jJtdvVpTmhRbWoFcJpvDwjmA3cwvoLhwxcRZCkycgK",
  "key14": "3B6keNuopsVY2gPCAY7aHjL7fxYwnQ6E7j4kPEvjQDWsMkXTgb6pLGJLb2f6M1NgM1YQJn5KVVf6bZeYM95tAVgR",
  "key15": "4GYvW9AWwgNdJ3fPSJHFzi6c3kktJpnjDG8f4pmomEycMKBLNuSSDzAxSyGaX4neN5zHgCqRYuQjrkYiUQEdqvcr",
  "key16": "2Qzy1yHEiBTtJrcLwszswXacsE47ac8zwVTMFTBEMRJ8LpKwvoT7G9F54ySVBFc8RouexayZCTJ12j2wePWrJPiT",
  "key17": "4La93pXPVqhL7DktGXoVGBGrqpJLnXAGyMWa1U9UVdCbqDXpTRm9v9h8Gs4x5paAZ4sZRMmXMbqQNbVw6qqTRkME",
  "key18": "33SH1bZCK3gbwwVzWpbMp4STaqoeHemuDbZhjQ7GUmC1mrW3hp2L38hZnb4rvLxo9qkR4GmpWPyB81XLDezAo3p7",
  "key19": "2tnmgPw49avdGPF9m1TaZuYbeRcoeF9v24GzmAXahMUcBTsffFnMNGfVebYMtJeHD3BaADAuViLcxRjq29Wqfzt3",
  "key20": "2r7H66WkjUNjjU4fA88bHUAEdV3JDc3csD18HUZDwhgtidRm7gWyANL4DQjbHgwRLgygdkxfaPbcwHKRRKgB6Prx",
  "key21": "461pH1gAmNS8UFuJBekEXMmNv4AA49z4jyURHRRNMMvYTUsPBHoQSG7gk91aCxF4ntqGSumT8SN1Bpo1iX7N8DHw",
  "key22": "5vBT7iyYL91Mafumk9EshVp8aFEs6ga9wFMCmvEtzN5MvytZKHbmy2YhGdieim5u55RPMZ74xhEXvJ1durToMuSn",
  "key23": "4FYCHcjhBPqWKtLAtpv13JrPtxPHVQqUgpnD7XZERZ6UmJXqQejBTYPo2GfKLSiSfJ8WJ2BuQCpfSkJTHBW1US7Q",
  "key24": "5ikGyjLtXXgKrkbBhx7aFpDMvucN7LF3eGBT9K4cCjsUJaWhdCwWbuQ2JLUBHSVvYpaaaftNtZtgwS5MDHfZuwyv",
  "key25": "EEiD43S26Sq85RQkAMHbVNhtFrNENgUisZ4aLrRzw5FTsCFuRzfXRRiKBoQpis1TqP2RVj2wE1JwXsqpCHz75NJ",
  "key26": "4XCfyvDLqr3iZC4WEapZRDrD8EgcZK14nczHHYaow5ysZfGGcdUAZvdY1XBhzX7KYedKWjTG9GrUsiMb3EULrnrg",
  "key27": "281r7ps7YwtYMtAebrCdN5eMG19SD1KkRTScUXN5TW8piNMKy6aXiJnxZSXkspn4wnJd4amQjFA8hM2CtTjHKtpQ"
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
