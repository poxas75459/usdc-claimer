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
    "F7D1vLN3taDWNRMQv8muW37tPcYdy2H6jc2Khnevqvc3oEFmMGPcPogpT8Ejh2AAw2whSRQpWefHSxqDakfxRhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uuvRJ8bEAvjj8Luk2P8vopdvRvR91pgKxrGk7AnHdCShoyogvDHrupkju64DYisiipFuD5Rn4i9ZuAhmuqHSumr",
  "key1": "33muxW9uLuQa52rfoK557vkqEKZyGsxPj1ycT51MGY2ERjFzw9y3XSioJMpbg5t3FPNShY5WGBjQCZHBn1AFRrbY",
  "key2": "2j46xAHMqHABbiBAfRo3WJ3pokSsCw7YsDbR4CCER4mkhBxGXEA4DeQwPKbzz7rNRLR2xogmAMu1eHCqUWNHGP5k",
  "key3": "2FVv2Hs3VjdL6tmteCJS9NvuBTrBtG49PD8NmQ7nm3hYSAvfXyjrdaikYST1NbKrMmemo5pEMKumWkc17G8DiPRo",
  "key4": "29CGfRX22LGHuwuDbkgsoX2on94g1TvG4WUkajvps7z3hyNe5HL66iyDVJuxyoVyhEPTf7KUifrdVHxChCVbHFcv",
  "key5": "5eRyPFLvMMzznC8MVDWCX3DoVp91X8XQez2i92Lg6zJkYWjzKuJAHtmeA4FVWQHo8hhpacbSEx3Ka7v7hSCxnrJf",
  "key6": "tXUWeW1Bs2T37pndtSyQxTEiAwP8GHKDwk2yfpN4CfYviwheoCByCGcPNxb3wsJ8PCYubydTAoiBN66J1h2oVvg",
  "key7": "2ngsdHj1MKZFdS4eremAe4rXJfQKRwsCfqXKnXhRNYz62EHqfH1rQwAStbXbCZKS9vYSZJa8KnA69CC6C2e6Cu3R",
  "key8": "33U6vyq3AbvqL1MFZ8quWH2V51b9ZKkjS6qMCskR82rSCfPDVhaGi3XscAMfSAx7Z1Fcs2MYTJwy93P6MtVRcey8",
  "key9": "4SbD4BoQX3waPfTffvJsYmFHtZDL6NPUvurXUMNP3mGiET7gi6AnBVqEhsajTd2D9gca4C1hfZRcPDSWVuuXsp1v",
  "key10": "3XBGmJ2iTupectUyRvgJKWU8DoobEorHa33oo2YJP99tBGec27PT1UobzYvTKZfZ973Eya11jNqSUykX9vZztDHx",
  "key11": "3N56JtTFRhjcu9rhcVuBP3c1H5cjYmuNJ6w6DBZgqA5GVj71mqQY6aig2kp3zjEfQcBHY7aJqvkAnj2s3k21kwvy",
  "key12": "8K1VZbBEngdey2YuBnZX1o9PzECpYvT9hqjuQL9e8rAF1i3UzP4YPCchKxFySnZZ3LW6X2UvaiVARrGhamNdUpN",
  "key13": "5SzXNcDFU1t8XsP8NmwWAQM7Y6P8AraCH9aJkvjkKy5e9Ca1YBvigFcJS6Gr2roro68hUr8cmurVmHYVTVjwSmmF",
  "key14": "5n4bgaJvAvzHkT7w1AqaquzETfojA3suTLaj4h8YEyao3k1LwFFUH7LLa8Y6q7RNyeRAEDdiBET8ikKWxCbjRqmE",
  "key15": "2ePtQoT1EHPyvod3jMzixaQDPnLVAdu6uEhB17q1hBZuAUtDdz2YTE6QT3nEkZQGYuT3JYfF2zLRtfqj33YZTj7b",
  "key16": "LoXmk1xFYz3u82AevB4BCWV2dayrgmxBv3orhVfDroNapTmtdZkqmSC6RfVo3TvuuLqiWLyrgcU4EtCztKed9qj",
  "key17": "4V6m2wM8h67yB5HVs9fW84HyUXEsNRdGhQ7MDRDMZkozZGvApk339BVU3wN37RkHYdT2QuhzyZxT4ZzLoxkSrgaz",
  "key18": "jbFcWzgHYMKyeu9ZueDzccg9V2nUyFLZvM3Erg5hGdVzdoV1y9mf5cGLz8L18DM4eEYpRL2hguoio9RJZFp9VZ6",
  "key19": "3yiW1pV91ie4iuMdhDAxxak7Yu6dFxPCr9hHThg9uFtz9mhhHx2Fh6xY1sjAtXcSZXZNRvehKJKq7KDogNZXFpcA",
  "key20": "3oHHrrm8CYjHqBBbeLbC15GDJJMWFuodqrpikbnsc9Zxe74uhNKWcPgCGKZckGbi6MMsurcPkpWawuBE67azHDSV",
  "key21": "NVtsfmSxWuyxBFEHP11EiMKcijCzwUGJfFe9byGhkRuowu3wvgw9HM5NNBfeFvaAn7MP3SK7EEeiYxYTgYxPbw5",
  "key22": "zeJHMEPVbgHzBAHCDBZG6yktgk799spGjc2zdAssESzqh1LLpXqfsSgdrojoqVx7z3v6dD7akbBBkpHQoNaGPFk",
  "key23": "nmXPCNXx4fFMwQ9ufTXS2GYbBCuFW3FP6N1BingrwAZhA3a5UTgt5t46SFk29oXJs8sUwTHmiNC8yagSfhNn1Gm",
  "key24": "4M1u3Vv6reTjW58HuQ9Ct2YKNdLPm3Mjwixj3Yp1V9ukjZ1hpipHcRj9WrgKVta6xn91onxMdiEUahffCxqi582x",
  "key25": "dUNQ7c4ZCvjxmyUa5YJuuJAmUCyw8fegN87Fz1D1TZWfdAvyqrqN6jYJREV2CRQ8oULEbk6fUHnFmyHccjgLHyZ",
  "key26": "3TByJTicxJ7jdZFDyB6BcT5nDftM8nTvNkU8aADYidW8vtsgt8bKFk9WegGTGH11bVLmSFrSo4txZu8SnPp41UFD"
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
