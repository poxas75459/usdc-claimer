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
    "MnFvzAt1sNAANNbFMTGi1KTnP33dvF8TKPfn7sCFG7GnnemxJoV3o1QVrLeKn4eoabEUQaXU9fdWU38AhtG6t9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjQQWVDXnmsdPM76WYUN4Ar9s5oWTus8TxkikMDA73ZRbe2Lp2C9SyRC2JB213nYHFaEFvTT9vpwwRS6QurNt23",
  "key1": "4XBDj3Qu4wnVMGu4kMaoAwSUYnJDxGxT4bwzRQ8ENyefbmvDHj113PXQQCxmhgU3jQMcoecyuLc6gnhRNKaAGt8j",
  "key2": "4qfVB1wptbPXDqMKeoj72w4rCDTHZJdS1G7kd9XNbAPp9H5CPFRLRJbrQr9mqxFttu6YAhdMCdtYdxBE96jt5QTe",
  "key3": "GejwhTXY4NmouhEh8tUpWcQ9Yyz6T3g8mQczuCJHjzSdDjxLvShsU5rSRabcf1uL7GxaQCNYfracZm3HxRGmqHA",
  "key4": "59nDXC2bc2uF1yFxKAY1WJkQTDEWv8hHU3p31j74TdruTgDXQpxmJ46bbFQXXGqF1fBDr5MBtBdF6DfZNFiUUQ6U",
  "key5": "qG4LZta1aovHuKxSTZujB73KQSmm2GM8frVZTVTd9576FWui4kxy5x5aZVr7eDk3esG7u1xqW36UbnZcP7gD5Pa",
  "key6": "2gjjHTf4Q2LFTwYvuorQeZdSXGcUCCHZAZP9D2MiKdGu7QN5c1e1xTheeH5EiRqKbj59b8RL7fHCDKH3rVEQPzKM",
  "key7": "2qeEQkfkWnTZeST13RHrTnRmrWCRuBo8eZZcAkBig7BWp32wEEsqzUrU8SaFLEefYKYAqU3WKRkuhEZfsH6ShrLV",
  "key8": "5ubqyNxu24HTvb2ocEbYcEiPxBXhd6WJuSSPUuvDGrx7j6i8yhJp5Rvga4cagLy2hK6P286jKtPpyLGyAF86rKwu",
  "key9": "2kpp56Tj1DPenBGcDy9nPHLuinZxAjBpmqULPZc7opCW2VqK66d8HAK91kBsZdgJmgbW2GcV8xMeHFV8vvS8fBYs",
  "key10": "4kxvVKxu6DYJaDAg1rvLJGL9VgyXU2W3MZYtQPxRXsziFK9MozHXMgGm6jkoqK1hMpPP3gNeTU7mhJsrcdUmXgCS",
  "key11": "XWohkzRZo7PRL2gN8VaysUNEJDeshvH2qZruQoPSAFMQkPbU5sm2h5ubGYcyfACeQx38KFKqoCbJYAtRSRx6YJW",
  "key12": "3mXT719qHdrVRUG5ZBLKnYELgJ3egWwnU1FwZABukxkYFqFmoHLbQtLzPm3VZcaMZt1sz821aFuqiqfCAi26J2ry",
  "key13": "VwJsdMeVLc12RkwremJ5QUVAcYVoH11oHLRtp6xd2GnyiauGRgqQK5AhNG8TmLm7t8AwuxRkS2Cx4Ko5JZdXiLZ",
  "key14": "24wVxXW5MB7MPr8Nusu638iPXq3wP2UicHVnKi9MwJL5um2fXaz1exBSPzqiktpCroWZwSLxqYRnqqKnfhw5essK",
  "key15": "pVy3zE6HhwtPAb3qgbC9R6Kd1PJYSZuxR8fUzbDkyvG39H5vDmmyNWT7ga53aR7kXEFjmhizEQabhZgCNFVytRD",
  "key16": "4uFBQ9Qdu3iuJRz2zBLUvkRWPpWvGsiZVMFE8pCzbtu3SYZuy6jLrsGAaeRCCoLekYVhncLSPbxzeKyhA9eax699",
  "key17": "2UxYQqLmpzhiYFEzJJkWY2HmvDjYH7gpDVfnKU3p5B1uX4tNYW76jtvrEMFG4ZcsfhEEPasxNdnURDZJpgApAxgk",
  "key18": "51mBy5RV8WBnirmnAM1WXzufuzC4Bh8fpGYHnsR1SG1gEHSvKHUoR1u6zjVa5pnpbjK46HW3ZTzJWbyLxUJ1waTB",
  "key19": "2QT1JVzisDsQDk5XvxwbUxJWmMVSDdEJQj6nqFtbicGcd62YPK5rx4fdKywawRLEmzuJpco1tug9mvZ8wMsFLV9n",
  "key20": "5vziNFnFZa4pgVeCtUW1YfFfxDBFcF6NnUT9W27wje8aEtZwN14aox7MT3WYsLEdeE9JMqeg1DDtjuci7iHH1fph",
  "key21": "5wpZ5U4EFXgSZ8H4pprX9dz58ry3nAdFfpcKCBtU7Lsm6n8N5rLmhkHBKMQnuZnwpuXvhbfYjJpWPpeJGRxX5hW6",
  "key22": "66b6ELiULhXtsvsZEbw9t7Hf9sSTyruqWVU9UApAZFwtnjLMaUx3pmZNrVyXiRjweU8X4QcsRhpJaUm74kjv33AK",
  "key23": "54jwhTkNG5Kq46HgSw8MMdFHjrh1Xie5Xs5RD8oRpT9XiXAsth5fnREamYPqmzy9z7T4kNF8TAPxEctePoEC9gmo",
  "key24": "2hJLhK3ypSg6Bq78djFeChtntdiUJ354CjGARcTYStdMutBy62y5cFB9GrhwpxE52W6Trq784D3htiMeYf8FhaaK",
  "key25": "2EySqL1REmE8e6hQMnDLWUignLeExgohi7fxtjpxFsSUywe5sFekcapct5Lwz6aRwYpGdfwFxNDGG6UXQPQmkeoK",
  "key26": "41RKfNgarsioK16Ywpga5PWj6ZgoZ8QRhMyUS3BPPKd4QdEzPZbqnBBmMAwvnCeQJJLZY9Q1npnuxZn3bJRyFDkF",
  "key27": "2MiCYfZtPWn2ikqsKgMHz98zjVYH3xesqsLCyVTLXrUK1D4sJNcx3mRfzkUm9K29oLEhNL1G8QePrVLUWyu6Rw9i"
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
