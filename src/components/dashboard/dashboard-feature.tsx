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
    "3otntHdUHxyeBVXfDvKkBPSCUk47wsfjzyM4sVM6N7zVjGB2QctY1LDbsjGobDkvb8H51JxrbFLxAJ3FTAbuNpp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvRZujX8CWsoSgvqzG2oZnXruLc9nRPB9V7bjG8FBXXTkvfBC2m8Dh941H2sQ9EPNqWmWVWaSPSSTmsGX5hcExc",
  "key1": "25F6AaAFw2hMzUANTcafNxsnibMVwdHMusrcKa5917fv918SZN2D1VutWxFsHf9Lm76Gqze7FpC72aCDrPpH4j1g",
  "key2": "62hgSDY38qf5RCHUev8oE6z3EeYN6KexbiHzndEmkB6Svaa6spoHn3NNZjTxx7pwNxxe8zHVLqzXwaMHRVQSVPeC",
  "key3": "3DMT8yoX1N2nYqVdvG3o1EgcEMR6HiKw8cQvEmrMusuw8N8QkMuEYxcsvCpYZB8dQiXxTFAHppx5nX5ZKnAzh63R",
  "key4": "4mwNjDbuLiKjD6i4HXviBfChQ1v7kTgz9vNCgDGWpgq1dBBT53qs6jNQycGaAoT8p4hTqty49sBQT9ExVbcXm7Bu",
  "key5": "ask2DXwRQvvUKcBRU856RadB27WKS9MoVYuN7UdG4Xx2h8H8eeKfr7s81YH37JkvDY1Hw5RUeHTH7hGzfuo9qmg",
  "key6": "3zjZnnwTSp24A7tPKm8q386DPcrhffj8zo4bdHVehd3yU2Ghpyp4CfBn2HJvRgx2WrDk6a8p1Quk5LLBp1pKV3em",
  "key7": "5mLcmbLL8T4bRXtjwwMbigfqtG1XZpabADAy9MycnQ24ejMp56WzQ6aLaBP34YM7jGkXVPDGov9HPnWj7ParoXTW",
  "key8": "5bcgsteNzCPxSWnywBD28KPnS4q5g62jsecyKQyRL7bwEuveJqfj2hmU2k6dYkwsqA6B6h4jLpfy6fmGndGyo8UC",
  "key9": "k9HMJWCerDJSegn9vezVA3yX9cM6FegGJ8FPgDNgBXQxBxkxsJsmegtawvCbw21soXJxMDtZLgPKcGJiBxFifK1",
  "key10": "XUnRmgH6ZTke4c8DJAYXr9ZJE2YhcfqXdu5wWDyH27xnaMkvrSA5ZUyxca62ermcKkk6M3krYZgk3eF25GJ76xQ",
  "key11": "jZba7B7C7io3R9AMbWYCLnJsX39i5iTahhmKXCtwVemFmdSGUXjKe5kzPUZd8JyvjLunjaPbwYYiuPzY1SpEETC",
  "key12": "2keY5ndDfGSpF1r3427KY7EaqDfKnDfTf7fVyJGtxWkWY1utou4Kd4mSQX7hyLEPD6UKGssSZqQnRFkJiaZ6iY61",
  "key13": "3P1cQiEvrST3qzEajEX8yTsjxqA3w3jsrtx2XhRACHdW99KpPMezn6zobQVq9quMyugsHPRPUtZcMRv2EYaq97AS",
  "key14": "2WP6UtTzrXNrSekxo1GTidiQPgsNmr3p2nus7oaPntUicxkjzigMNLt5Zku9gHLYEWyiUoosTgE6tSFdorazQHtJ",
  "key15": "5rgawujJ7HyohR2PwGMuUjhxybjYA8T6JWpCCX5xAyFwpSbH7GW3wtgwGQCYgiNGYbgLSQRTB9g1Wo2rPS9ieSTQ",
  "key16": "5MMdBRrmYHMdTdkPesTLn3vE9yXaMdCb9TD5gN4vNH5GVpQk7543KYF3wNCPYibYzBL85qpbxZTrN7ANjQdrcTxx",
  "key17": "4wBUNT5GjdzYrZ9CC1QwUSZoLwBrtCSkyHzDeHVgnZw5hNAVpGqWJcyvWx4qb2s5EyGN1ixd25vB9tgKKDbn1qKg",
  "key18": "3WTWuLc9g6ApeW8GJsDRHbtRpAjgA47M2kVfvVmuQbut9V3Ns7D5guPiw6HEk2Eqz4h2ymhH7e8YHQVu9WUzKMDy",
  "key19": "3YqJqw1Sceqwbxcym7bxd7x7vKQYSZi9X6ZBj3YhzC3FX12QEzSiw8xrfDUJgWsdX2cXxdSqPnuduvDPK8gLhMEP",
  "key20": "4yt9g3SjDeVWoszmgGypt2CGGuu8o1ZUJZcygEPnSNTXwwR3wRAyXVx6knSEWptSowb7ZrjPZ3P2bWaZWYY3ZzL3",
  "key21": "5WVHNxu41byR2nAXWzVCrW4sQvFHRDtPQNg8LugShCpEUnma7Sm4LqTrmomUeMSQk4VZuH8e7VPooYaWrRrskWdW",
  "key22": "2K1B4bmdJovMByKkKayrc5YdM5GYdWZvRfb8N5KUx2UHeiPpfiQHykGfEif3Hay8ST5K4zCnNcCuRTarkczGGPZ1",
  "key23": "5CdWzGdKfBxqjLKN6BR8Pr1LLSjL8QDVB1NrQs5hpMgdD4wyqAstrP2jS2a959Ak2sud51CoBapSD5nFeDmN66US",
  "key24": "4Yof9HX5uVj66MDJkYujr3BWnU6h2rzULf7Tox8YMY3v4RtqKdUwPr4f4ut8sPTmYPavvrcMMze2TfzhKiNWyfZA",
  "key25": "5NbSE6CGzn24PPVmfDdnvAgjQbe8edJ2sh3kFPk7LkLrfqh5jByVrSBraMWTpczUpBqE9p9D4fpXFweYzZu9amXd",
  "key26": "4LNUPS8r7pREDbtWrkAtqh1iJJccYCD6BsDqQD5r9D4hK3v3HQvo3yk2WUGzXiuNeggc53x371A1HbxSq5KgmJ1C",
  "key27": "4vfZddx92EWm6qJj1PNHYmajQSgK3q6fegqUV7cuZc6apRKDabfHKFLBJVhxU8pverudMwPtpqYZX6jsfE6k2d6q",
  "key28": "2pq5oKsREHDs6Lm2XZkKyW9vZv1hR1pCLXsQ7NfyA1d1Dfciv2AkTX7Zg81L6vFMYvWGfETPRDWZFegkmuPK5Fqm"
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
