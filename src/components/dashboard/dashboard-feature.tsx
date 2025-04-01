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
    "4SFcRoSFCvbuYUxN7i7F3Cc2NSD1zgtP3TapTRj8ktRsGzo6o7ehxMfoXYSozw9A4DymSHeBVpLFqoz8vi3xy8Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PR13V5jkoSjwQUPommrWh78kLa9NypuLDCC5bqiPnRrm3WTEosRRND9YYPuQyBw4AtYKYgquYzKLxVAb9PPpfGa",
  "key1": "2arqX21Dak7rvgeQHCARKhGrDCtjLYyY9sxCK3pHMztCkAzBUVNUWpbfr2ZkRJufJd9DAoGH9j55iUTtajE7tthp",
  "key2": "f5DQ4jnnKFJYDuW6fBmWpYvaC9Vnj8uJiF9r24uz8ygKnJC41EdAh1VBVB62qLMkUNVyUAR1FLfsyoKoRRUy3mM",
  "key3": "o264WtLAnUauSqx1Pq6mbniS3uoE6NFAnNDMMu82BAwczcDxhUez5RrwCJqxyhbL1K8WUFWwSWm9XLdQrE3ydDS",
  "key4": "5NrHUAYnXDLiU1sRam8P6o2nmbixwtFovtDwKECALMa9N1YC189YbGQRWApQqeGkXfFtdQtseCoq6AfHKZJWB9Ao",
  "key5": "4XxVhwNAHrsJ6xMk7B2aqewe3rM1YUMwco9BouPkU6gASmVgsmQA6LNUWgE5F9Lx15DrUeA8tKqiQWcv7yb2wFX1",
  "key6": "KdzZNtMw7Y9tm7j1UENFm36j4EP5fjYH2aLSDpBf5WuCsQHZmjjunRUnrCFvAAevX3aSywMemZfh525BQY3NCyy",
  "key7": "3po2YciF87cHhbqG2twyTednKSk6wLB6SwXNKPL4LTyQ5GpQfrNGAJmrkZb1yJ54ijHzLUMFQ48qSqci5MsXwDcN",
  "key8": "44eznaR2C1MXTKziQRuwAHF6oV25BqjkJTzr4UXG9vQDokb12z7ipJUVeQzoxJGXM2Tf6awNbxPTs1i1wmbwRJSu",
  "key9": "5v1ezAznyp7G9qnpYhHqQim6ngB11UV57S8wuSaqYFpS1QfcbwUAvvGgCmYgEAzRAbB77DnLc4uDPsQcnA1nGqcD",
  "key10": "4bXhD6YTi1EXNhKbXs9azBPAixEh4Kj3k2jY5a33G5z64PZjahDKj75gx1Twbi4jD3HH54xsTuieYZwzHdBKpLxQ",
  "key11": "45T3Y6PWsxgPc4k8TfonaJcs2XErds4ZxPQWZFCEEvrcrGR8MHTQwFhKuwm3dSRJaXx8UceNcMDS9ABsRxfwv6EV",
  "key12": "53YF9tN6ZTqPzjrg5aa5ZZegs28jx3wD2C9oxzPmYuWh6R4LH9PRywni55CndeskuFvKdaKdgwvyMzrPMzGYcAwX",
  "key13": "2h1DS9EAhnqkwsKqf1B5kWM136u2iCibgjaSzqzioPYefPAYhZWpakwx4qURp2QW1m44T4JhnSQZtsomMtXszAbA",
  "key14": "2wehJaP7Bp5vVc2mgumjtk38ZjaZ9QKX4WdTJxNNkm9kg1NuUYLb3hQr6EmUiDbXhoYoJMm2x49QmF6VWeFJebRD",
  "key15": "5h13MbcaunoQymxRooF4KUNNBKWxgekggHyP5kaPkgpchtG31iaV3vnoENAVpgnrswqnopNWoEuJB4XYuim1PS2o",
  "key16": "5ABKhu8aMcGfB8UKrQSTtajC96HjCfGNZJ3W9DBtM1e1xiYdZdgk9YyP2Y2EHTz79jX8TRAkjJpTfsc9uq9Ptj4k",
  "key17": "5N2SikEE3ffLBfpua7rnvZZL8RRCExHPjePyn4ZtR1j9YxrB9rfPzuqUPDgH2Ko5CeEK9QqtyMK8h4MoAZ5D9eLy",
  "key18": "3xyb8ea8aSDyyvPUivZoxVfmT2uv6fRt7r55Eeie7ctQG2P9y47GTTbb5UKNhsJ2chrRwASgZKaKwDSJqjPK4hbT",
  "key19": "3pfeqQ2CUow1hTozcapqnPp24bi7ZX8V9rfNNsLg5XVubDUq61C2dhDSNnMeZb6nBALbejhg4zUtrnDRakxPrQTf",
  "key20": "4sxX7ukq7HeQqLZdrGK3yHcrMPAbbbWo7ZBCWek8rPcheqafA1EiYakuKNTfrdLSWHFZdtVMyJ7QXbEdzHGiZQ5b",
  "key21": "3nivUiiCkPwbY3k46mLhTdp4iJcAarNEYLxPeAHJwrFzgPCrGFjQxmVpetBWtwFiPtVou4rGpqYMHGfV2f3cbSQm",
  "key22": "54fExvYEJ3GK6kycVxCxZjYwzfZMcixHUiog8ufWkHRJDM6V7KnrjWbSFKmMWxdtiDi1qYfMGxc6b9fvMHEegGbo",
  "key23": "pPuTmi5fJWd6fJ1XByjNp9i426aRaG4Paic8WsL1LdXc1QChsEhTtVQxCVnPPcpAiS9vogdEsnobmTPT13LfJBE",
  "key24": "EFX741Fuba4ku2hGRAd9rrGoF61NasRi1gCoAF97mQpjagJzDz9atfJdMdCdeE4VegRB7MDWkv59Vhwv82mTuo8",
  "key25": "m9fx4vzvSvYKQKYEsyMybSVZ3umN8cYrQduKAcQwgv2kyMWKZx4oy4LenQYSDnon35azz2GU7csRKf5FjTo79oC",
  "key26": "4C3ZfkXNS9KCHRXYUTxzFaxLJ9BNGeJg4YFT8egLVLAf2vZzfNoP3R2o71bp6FX1u59yWxZyxHABy1JoLzkzJ2xe",
  "key27": "4yKUxhAMHyfjrvSDnctpBVJP1gwHucCZuCahwYWErev9aDzho5ceCTZvxVzdueCsTJXWQNbaBMxeH8QsRXSmhAnN",
  "key28": "4od7CGh9WgnsdQ5MmJ2PKprnjqLToCbn9PP6KqYsrnQxMX4H9Wh7s56TdqZmCfgC4DqPaH9dumK2tK96B2HWDcH1"
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
