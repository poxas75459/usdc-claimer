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
    "41vLW2LUcYRVTS1fjJhxJgRpp9wDUDBrbvsfXPjVcd3u8jEhU5wLzePD1MHn9FyZQ3hQMppBrsuC1PAukpBXGJbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9bm2GfWtUksfeBdyDRd1CkDs2WZCDTpTg56G323Ku3KNe5aDDtWQntLdnMkXjqm6q9yA7JDYrkocXYNJxzBk1s",
  "key1": "4H1hEMHKoKYFZxa6vpZs2zhrnCzLjCRuRWM63MW59qdcYEhYg6CbXnHu42MB9uMGakzC12ssQnujDFcucaD1TFs3",
  "key2": "4SCJewNvCJrHiBi9zv48THmsHay1c4rHNDvg1juWHZS9bcuFMtfRZKEZJXp5dKELTDMLbQ5VUhLN5kCtZ2P6EKAa",
  "key3": "5L7NiLkaiHeZuyTcrA1spyBF9G4voa7N2eBqEjHQ9YLTuME4NqFp1Rv9ozbssGnrEU8A4K7Ls8WG4hB2UPHcCTWm",
  "key4": "2b7om2yBB9LgLG4A1SxDjbDZY4d79vADG8nB46t4BQYNcuCKTJMKhvawRBNq8PEswBHGh983s6C4ideokovrcFpc",
  "key5": "5212D5Yd2XjSgQM9RTsikjoACLuTyeDL11eGr4QwEre4e2r13rTswYgvsPuuSGDFHF18Aov8DrTRoQhG8JWgC2cm",
  "key6": "4PS8g5EWuSoNfhh1w1iGDc8URTYTo5kjvqrz4a7SNdfqfg5CT4Rh7wZtHv8U9AHMcn3UKQAcBSE9CaQdC3ZC3gdi",
  "key7": "5ZCwoGJ747BXALhy22eoaAG4XGLnnvxLW4LTbhQvSWE8WTa61P9noHpPCsG5LjsVeiLDbGHBcQJwtQ29zH2eePPz",
  "key8": "2CXF1VmGzPNhggSqWNbsTdqYwQYgdcGS8vBucFmMsU1q4DC5TpiGgHY9BGDWRXL7J8mdtTcRnuCPeNwxDBQrC6Ad",
  "key9": "5BC2ZZjg9MX9fs4povmScAk6DbAfjqsacL1ry8tAz3MXhxY6gwobpiV2AeWvTq5N5Y6BuiMZA7uy5RAz7U7aR6dZ",
  "key10": "4tEp24dMXyLgsxLYWncg9PCzYqxJ3Mmkf7dduFpEvRDG1j34GhgCGSNZfW4JsSyiSAg7iDydTLnRPyk2JobDL7rJ",
  "key11": "HjAaVh2wYLNAnptDApnFhDaXBHauCNtkgP6kBtXw3fh7gW3d7U2n3yEbh2YF7jyDEENYR5vp46bwnxh7vXFiauu",
  "key12": "3VSMcfUPMJyrCoAuhb5Lqj8KD51hKHwt4yT4GFXRC4Agur7offVJ2XvuWo3TNGs9atsb1scMBZeANjGwsW5iDKV5",
  "key13": "374vvcViaWwhke1FwesoQQ9KagtT5FfyJGYX4EWZN3LUUdLAQntkRAHmkbKgDpqyKTZGi4sR4jVUCyBduXE4GLnq",
  "key14": "4uQoo5ACMHsEsf97ruYgAYGEwtRrynGgHDifHmc6ojGzeHJNr4Y9SV2wk8CeagKQduAWPK1dqJFWbrdPhadcCK2P",
  "key15": "54ozCFk9a6J63u7fdJrobqNxP3JMLw3fUCrGN6hSaCnzSVgpE9RbmeAAnFr5cKZuuxJReVbNLiA97yBp4Y4ue46x",
  "key16": "braLwzhAZe1ctwFGxPwPvHGNsqdWjqdNvoYzpLRX1yFKuKMqPV4JFY25yCuvZNbRjzh3iMJjGzT1PRhH63K6Uqv",
  "key17": "22PZcXGmXKGgXj6ZPLMP9YcJu2vvuQnGf6Jrmr8Z1NbPXAcangssBAg8aHS9WJW1kVW3MWiKozg1xPpH6BpeGL9e",
  "key18": "QUuLi8CxBubh2ab67tRvvkwKZnnSegGVRHr77Cs52NopSKfCyydDg6cZi3kg4UKqfbS2Wb7E55Ys8mGoKB4YUXL",
  "key19": "2Mu7NkfRJNNjK3KSuaLvtV8LrfoNTpsQBaWgKBieEAWao8gMBn2xa4YycinJ5sQTdSZdtFXy8y5vJwPF2BWwJRaZ",
  "key20": "35Syd9dpHppB3Pj2mGVraGUpbzvJwywf8qqtb1pyLEDPo674733bvQHv5fbSm2hFiGrGvBcJGV4oyBZJAGRk3anX",
  "key21": "57XewbwS2fZFDD4rbRAAg2VsFZiY2hsgfH8DKsaUKM9BAdPH7MsbmkQtXXkQtw5pdKBkfeiUqm52FoaCqGm14g8q",
  "key22": "5SDxXEgy1R52SndxQCwEPaxcQtBMkv92bkX5A7cC53tbpHD86bqCtjWAcVx79KDsqG7oQZAuBViC2zMdQGKG2gxb",
  "key23": "4JsvVGdRmbXZDxwtBftr17HM14hBuzt1X9cbMtRAJ5hxhFXJLzj3xc8rWv8PKJ6rBwAmsJKScR76jW5DpzGMRFv3",
  "key24": "2jEwxiw2Ku4hp2ii3jhnqUzcYhbJUaQrj4o1mL6wm28KumRnfAYqidsnWVtVcKfDbmmZLogSDym2nik9vfP91KWM",
  "key25": "3s8yDNZUvMVaduTvW2Z4njJBYNoxCUEmgKVjv1WWhwbQpdSZ1TiStH6QZ9yeob9q6oh87Gsu1yqm8Je9tL2B57eM"
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
