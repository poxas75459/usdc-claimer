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
    "5KeJC7CBtsLmMFnBDDLevNcNX8o6PsUQLxadgp7wHtiMQctaqBsDkwxRL9GetYHktc73rSoBLutfXEzw4wLL3sbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAVWBpkChoFDdpbwKxCvT15gBPgmEoYqjkn2gyC8yHi8tDk7UX5ruWqwduc3SGngw1PSXK157Y1EhcvMmqRp1or",
  "key1": "5mL71SADoXBYeW8KFKCk3bAqKogLoUbo8x71pDvLm93LWyQdzQEL8w8qpeQtzrR6MnHhoourLYegQZbk18fsecZE",
  "key2": "3RC6Szmqu2uxNo6Vhq2sA6AmMuNV8x5HcBZwiE47C2vhczSw2LvfiA34n18u28y6KEJ8bneBXS5J9fvPdVHN7xn1",
  "key3": "4qc8dMwiQhaxT62ECXz2tHgDnrvQnmzLoarAxVoiWLKRdLc7jHrRojF7Bbnn9ZAJ6j8Kp9zXpX4z5MHREKojbfRy",
  "key4": "AFugDtGGAT98JxdPUMnwXaDMLQ4FvZP2f1R3snTNE2wsCsDeJdFFCC2o2pLQxhRmymfpuZQZYqfxS3xw918Jvns",
  "key5": "txkdCSr8p84jyjzcKbwRdLnonJNJTzD1xc2c2BwRz59DmcSFUxokWwRuBZpdYMAascZzmEwLBwZYGVUPbdBaRAN",
  "key6": "5DHg2D9BHeteTAEZdrWHPH8HwEqJEQmyTW7cr3W7a58NWFLDGv3DcyGqyG8oRJrWVv3ZageZ7QzaHRTW6TL2WX1u",
  "key7": "3vHEEKpQ5Q4eKs2RNQcjbanSZ5wTHANmjRQzF6FzrWZ6UCsP8HJtqFcioyDwvuwMQGXRFPhQhfA8zeVRtEccJf3b",
  "key8": "yXhoTNrULRxQwDUH6Sy7jGzBWAKrDAtYUoHABZ2eyxKHLnUtNWqjCnFanPQe43JZgaYPKEefPKj25tecrUj6mAw",
  "key9": "3LLJ1HRtqWDsi2YmwGCeFrarpBCsZwjKPUewfDXNPPBgFNYYM5MfzHDGeVaYJUKwNrFDCMhNL94VyP5VDHk9GJoj",
  "key10": "4u2wecuGiH7pMyuF3QYtyzpdrNuwaiFxi6ie1hjiyj1VR94v8pCWqLhLoVf48wbSw2zGeavcgxTxMes6aHf5WkgL",
  "key11": "5bZX6oUheQdZ3j6h7nDUdWBHAff5yxr23KsZ8rxBovJLn4xyn4WdHyWC6UCTALypyAftcVSF2FC1ge9JtyjaSkaY",
  "key12": "2D2E175RmrL1KXNkMz3NQXTZLN3UGd65WqvCN5qpQf2bsEkq6o8DQjpLKb1kqHcYQXmu2b6Lo4t6Eta9wjDvBGKf",
  "key13": "2W3J9vcmPeE68YYTVwZhJq9QF6fX9skMu2Dj1P6M8XHVocY9qoQg4YMZVLZMRnQ5jMzNGc8ksvmAzbSdDVJqqCPs",
  "key14": "4hdz1YsWrSdFDSYHmBZFPUD6Xncg8MZK1xEc2Mco8YXtVsRLt1P7pTu6KfVjG5SmbBGCSCJUwADQJeghBybfh4cu",
  "key15": "59BzwQ98fywKcEYp7fW14GfnhuUUn5VoZWbdvXwWQRsamHf18o43vPVXchsjt1B48bJ8UCVp19ivtGH996ZsMsVv",
  "key16": "3jrDu139V7jgZxek2LzG6o6YNmsWEjGLy3VRvk2rtKY2wy5UfripLEKozMUoRYqLaMZq1XNKwj166ZZky9qiUhyV",
  "key17": "4vPNuzLnoZAX6RfSn127ZHDsV848Yq4zbU5syZAoRq4DuWFFiwxDUEtYU1k9WJ7hYXTb98AEdqD3jN2gwneAhXmz",
  "key18": "4MhUP88hdpiusAWPN2WSzGyzK9ScPjVqXt2qR1TCdj4YhpqtWVUyESto4BBCdscWRp3i4n9VSDfunFraitmXdGfR",
  "key19": "426ToSxrcKLuRXkN4ZAhTBeSW7xRsFGRkrVJoVwovjg2hF1VRjAx52iug31dxmNrVGZNmVQCwUUV39Th34BgmpgN",
  "key20": "635PriAirakxVM9pZ8Js7yRXpZTv4CSiFRHg5x6uZUZ51f79wo8JQRDVG1TzgDDJSP1ZyWVXWA3S9Hve8iQum45z",
  "key21": "5YH9ZtgZvAFZSEnKJmWvjzuMBNu9f6C7XEfnyS5NaA43Wwf6S93wxqXUY4MMf8G17SEPLtp1M1ekxh5fwmq69Vqn",
  "key22": "5BT9dAAjVoX71GuYTmzTqC4i6p6nbrLcAb6nTmuTXRcxcTiGGARJUMw6FMFoiS8iEnn5jry2848tWBSj1Tb7oLF6",
  "key23": "3ndjo3FFEHvszQUCxY56GHYW7x1nWA7k5GJn2i88dwkC5qK8eKiNgX1qajuQ9yYmh8ybYAncgWmw57cS7AYhALhK",
  "key24": "Lx33UF6evaxqoGwZG6xBxwbKRxLZBvaB22LQpwunCQs6WrCDTgMKtF49CF52tcNr8UWi3ecPnadGxZ6pTwfP3jt",
  "key25": "3V7XQa7AzuGmjyMQgbYuwCWGgRSWbKd6GyYZ2ZaN5sT2a8Y1qTDCTdeezxRXjoKrrA4accgafgk7xRngjpzDo61n",
  "key26": "5N9rJKSio1cjTiLVdYCfATmvUb3BhEZ6C5b2DXM6yEt8YUCPSE7M1FfPg3dXADSoLD5u9aLNjoqRNyYQAFkxyJgq",
  "key27": "4frAtpsDjY2DyXWdu3zTHVWuWH3PVfsUApqHBqtbFW2aavTC5PEFPrAkd7HXvMMqPXXzhnymmPtAgwQHxvPpUycD",
  "key28": "4vmNtgDcvJUJwera81REni4RmDNTURrX8RYvwRfJ6XT3zV4nnooFLRcM2vL6JzHVb7FMPVGDtiKUvxgf9vCShph8",
  "key29": "4BuP2VnDNvKje2kwmeV23rcXxME47Hgox5mJEMJeLX1fa4Fc6XHikiwDdQZ298pjNpSi1k3GnUrvKVBGwtMYQdUx",
  "key30": "4koRmwt74nUu26ahSHzn6HaGw9TnigkPHimst8Vcs4KpWbNZibZjNh5yAnf54A9jhDZnqVPpWAbm8zZ6fGPAuftC",
  "key31": "2eEhdSQyHB29Vr4hpTohrZoCjqb3Ev8zGNPexVNiPMWHaaoAbwzU6WY3PeUqCZcV6MVueUzHNJFYgSbGwzHTPqCG",
  "key32": "44eho9Uh8tvpHMMVFaWw6gbsdiED7VwzDTj3rjNtPyA5oDYBwrQQJTEpCSX9aRumGC8xu72pt7iyYMAbcNxjt6wy",
  "key33": "6aMCVL4akWrMgttCCpvJCXRZ8poXoUfRwtmtFt27uSswU5eLPyMAY71dRqbgtpTmicfphjqmzXV5fSq1hZ9BABk",
  "key34": "4BkbjZEYywhxVc5odR6BcWYcDjrZkGDAmwGrB3GLZjWywLwTsJLAJVxYqvhGk2m3pFVPRbgVGLCNJkwDXXjSe2pM",
  "key35": "3FGXTMev3UcvmYpCsPJ3PX3yame48KDyaNbHfCtd4f4CY23wmRx2TiFLR1V7rJsA3LjJ6oPgvaWhgFrhypYSR9Bs"
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
