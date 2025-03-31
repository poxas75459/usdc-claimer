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
    "2cPens95BmaCdDfPPap1LSvUjoPWz5Q1RyBVmBzFHq875mzZSfRY4fkw3bur3Kiw1feD3CntSV33W7ANCbLdpKvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhkxt5bzAaav7KPDgUQrR1aWJCVpaSUz3qhMjdH539wcoDqEBNkL4mn3S24fSHYh6UvjiVN7zTzov4vk2fpXAhe",
  "key1": "HTQaWzhS7QTCF73axMGYgvwEX1zvchZWoGaGp2eyzPhJ6Ftodjd3CnqpzKFijbMCWFUUDJZm9jMVSSzncGZXDQM",
  "key2": "4EndnQcjKRWBFtPAenCxUNo2TPYRK7VWUceod3YRhz9hAEKtuhQRHMxqDoDqpEcZQBQA5TJrrYGkZLKCCKp3xdEv",
  "key3": "4mnhyspXSwsspzgrZuCBB2sxgp6dUxPuYQyyNMjgxypfc8q3c6fedtpfXCgR6XKZatPetx3kEgEFevku7ghZQhn5",
  "key4": "hwjmyyU3afFU13FJYQSuzSegiswBxcBM2sxREP1zz2QJcsFPpbN4UVfxkxu1RgayyWK7PV1CauVsYnQ8vanUSzt",
  "key5": "36BU7uVfMT511tUzTd6aw6LncN7p3ELQg5Jm2b4w77HwB5oxDveCquQsEt9cp2wJLPznCXUtVsKtQ2kXXPNbAtXe",
  "key6": "3KdikQasQDPf2MqQoxpNGVjigXjLdd6aRRuY2Cfv9PTHyqCGSr9Tzub1a8cDGWPL5Uc7m3ewNttTDrgBy94w6EBx",
  "key7": "3FhtjBJp2jzxtqfPKMkMpsAFraQY8AGzEDhsrLNCY1s2gyceQtoswPvQTZZgDujqinjQbYMFsQievLp7b1uz3gR8",
  "key8": "yeLHuhrkBgjdzSnSASSMCpT3C2mcfaehdLGEc4byu2Qdotc3L5xM7aUBg4BKFX3CmxG8Mr2Yy5uak3ufyrMMDHM",
  "key9": "3RWUiV4cNUzXFuC2EQb7vU6b2zTCbnV4Xm2q9s2MUJY56UhqUsZxxLaTZFZo7PenFUuB64FyWeTHAPQCWXg5AYt7",
  "key10": "4fHE5iLNgYw43PTs5Q5BocjFW19Hdjc5vi5AzBDbey9tX7gKFeuBcADoKX1FAXbq7xH8L3R2sByALG5aENEhi2T8",
  "key11": "5tYPMXDcpAHcjxU4Hn5znUKAgZqxMq2jqRKcv672oD9ciyqnBB4YL7G54dx6UZVkHos81ZoDNnRtSzZ6v6MCKAvA",
  "key12": "2gSRsGicNd3SX7UTqQ1QFJKdZpEVGmMGCxTZPLNnsJypQWomSQfHnH814T3CBu3dWWgaoUhTNK72Hnqy5pToV21o",
  "key13": "SgtbzLMdUQCJrEM7aq945yrERcD2QFFhaL3RH2KU2N5rF8Lq6oCZu7Vi5aWsuChscAPrck2sD3FhRFVRid28PEW",
  "key14": "61DidXdYzK7Yo71VvTHUAnWbY85Gpj4mPvsirqM7mH3rovUv589zLgRU76dAzrX1FjJ4KDJ4Ujw7Wm2imgBcZquH",
  "key15": "7BbdKjxC8xf7t2dvyeGm9GbyPekSb86BaR6NnMhY3EmuDX3WaHbh5aF1FpnmPfqNambVyQUWknmx277V9xxUdcm",
  "key16": "2bd6N89EPV3RrQL8Q2gJBLvvGhxFecahmQAatvAHS1QxowJjjCPF8nRz8yw4Jcqixyscd2XxnNWa5eR6cwe72k2h",
  "key17": "4z3stcoymEdJ6tyQGVSqPma1b1gLk5BtiCXbW4yszfMx7J3azyLHtvYqDsuRLZYGsHHTrePaScpPJadchKWFZhND",
  "key18": "4CxyidtzwAW15apzqsn2nfPqbRuDjvXk3xpCA8DJ5Nor2hwfr9ndtri4mQc5657d72begDU694f448bqYMaiV35s",
  "key19": "51kSXAHv4gmYnDN8ZiMnXk8jrFSvUXs1GRkCuWC5bafmJxNMdZmEd8MsuufLjZ2XPgH9xjAXPoCyrhJsiYiWbiMg",
  "key20": "3CLKYYT1UxfmAyfN3fheDkdqSUTQByAtCQ1GPgQWBCg67ovzNGX8tjmWdNPYCVixJ4iF7qcQM6F5x7YxY6ofMJUK",
  "key21": "3gh5Dt7Z1yLFQT2uMJLeZKkwpKGNSRNjC73ZoWWKYvGE8SpVByLzZGLmnva7WqMZzk8u9Lw3LoFvBgRcfJTYHkbj",
  "key22": "2SxFoGjppG6bFDUvXJFJimBQK7vYz8tved5Ea7YhxaAQguat3NZLfdqXipfk63ZDBJjdhzc5BFRxPMpF2pdCq7uc",
  "key23": "zYfjDBdYMG3BBButNQS72N7quaNy3vqnrQ52eMaVDmdVL6eAmFdD9gVujz4n8QPioVjjarYDn1Ji3uk6xNV63RD",
  "key24": "5zBT3vXerR81dQXfYnGJBZq1juXjT1WE71soeoHh75fdV1QrSw4yLwi2fDyJ6sEh5hmJRQgYzkquEeZx3HnrQBWZ",
  "key25": "4DPUErF1D9tZSL6ieBUthU7miEyaJGzzns5bRmLaZFThhFKfA4ZTPBYqkqPbM1F9bdVvU52iPw3fa18M6tngrQpU",
  "key26": "5ftYUzEYEBbkQCkrwkpKKRHx6RuyJC68wXeLDJLN1URZjFqjUjxy318yfdsh3Q2zNkzHycLbPt6wweiXq7mjb96U",
  "key27": "3LQF5HsRe63z6Ce4zf6PqNF9eNwHKd4Qv4ePtHtCdo26ye8QnCxkXRMYZtsEgDdMhGnAwY4fdsFnKKTRhyGqGEkB",
  "key28": "3pauaFM7vE47YWnG5ptgpk7eM3tzhQUTNuA9qVBhqDd1x6hSH6Bpk74F2xiJRTbQ5m3eNiuZDHdKDA3DgTDDkypP",
  "key29": "4yub4FDhs51DC12626WPGSe4qt8ySckxEBpezG9ShkXbYSroiyuKbKMvRWHo9bM8ZLbyp4CsYu9TZR5qEqt2U7iT"
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
