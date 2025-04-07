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
    "QHYgJ35iU7TimjYgoUrTt95imCjqymYxg3eydaHYTecDahuAUUZGqhaoHJRv8VQx7DSfThyGPEabDNdErZmt1Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P6ksQ69K7PkaR7CQvHHCzMUBYBFnr9nupKWwHA83PaFgQtPiDooaAX9j4UBCqHEixj2RcUpynzJBePDU1oSsGsh",
  "key1": "2DsewqANBN8EoZTAJgPYSTgYs3GM1U28LE2rDRQJU4LiKmNWpyhLV3kGUwLrN5jTApPjVeZmR67Gh6Reh1zJkwBQ",
  "key2": "2yC9L1GbS1FNppfBk5MFAfAiP4UxCywEHQRHdbaQkQ2dPQSM6261uxJ6emNA6FkheEBQcwwkEm8vQEHo6tczTRyc",
  "key3": "3D9bGyaAsm52H3WcybtaaxoAnSu1peQ7G2kJb2wUn5WhfuNkv34sG1x9o3eJpFqWX6HHFV7a7mfT8hDhH5Cr5owe",
  "key4": "2n1GnrusqrdUQ9eXBwLghUQ8k7khwuPzQTfz8NoT5S2PQgM5s7gH3pkjfctk7GLJCyDqBBBT1fp5KNiJ4soxNqVN",
  "key5": "5qFHCtdrAUaB14GDqjvGK2XRb37AoA1JwRnTLRXfdyuDZ7KuBXkfF7hWiYwpzhYqYtPk4qKFHN3UUAm9wibRRmP1",
  "key6": "32EjH1WPeMzZRQdwF9mjA4tcDRkD2Ev6io9qUzaGJQs5TJZq7ThCvhAXuh7i46AxjB65m12zaKYh2hVQE9Lu2faJ",
  "key7": "2fjcDYuB8kT7dTu5D5BoDCAd7rHWEUNPBUEhgmt92MtF9QEY2EVrfKUmaRokJJU2b27jwrjbrmTNFJ7RJaFK4wiQ",
  "key8": "2RstPkeebfiEVGLVaSMgfv6bExqYfEFtjE5HyFGUNXwSE7o7gwATiL1Yy5Veg23YVpo2NtqhJYwmZc72qw5B4kUk",
  "key9": "3cB1xZ2X5xEkdbXqVm4gL1eYUejXc52DfPLx4h46YuUdCwDnBKbavdgCh4dSQrGCq8eRwjuiD6DtTJ76xwwpkgFu",
  "key10": "3K14GnW5P2u6PtDhKdeY5DsxUmrQLbYnV5rXNwYVyi2GHpLEhoP9bcSiSghcL3mnyYcMC4MZE9DtKT4HvbeWy7sH",
  "key11": "4jJNBVApnNUwZhtyXfdivezhoCwf8tDdnU7mzz5U4QkggLERb6zqU6zJopDa7GJsAJbFWku7jrCLv3VMRGgYfvMu",
  "key12": "2FyU2hcv1Ybi8gK83uzAWvYbx1HG99Mo8bi3Cc59ViQUJmsoZuHaG5UNC6Tro3XgaGdDYa1mM94RFhMEctF6GBws",
  "key13": "3jkDNbHKYFf5bjzZAPjUgAXDJfYuEXcvbU3suGxw6AtErpKPtaSfoJBSMkdtKQCqz9f7vgZ5A7EqrcztYMVpHBfC",
  "key14": "3Jn6stQAaLn5pdsFT6n8qPphUftWK8cdMuVVXrfagZ3Eo59apCzZ8rc1XQa7t3Gmj8L1iXw9aMgj5NsCMT1Gmps7",
  "key15": "3oBWXdhAspshjdo7ZAaPAbm7xg7fGtYS1LfFQ1mK8DsVqwTUFFZ3azwTa1cjRiDo1aMfiVJV1LXTnkXc13yzdxHa",
  "key16": "2DeoGt54mTe7KfnWGRFYnvwcCUheB3Mnah3UyC6gpAKEc7cCktne8yf7egbML2g4zt7ysVorv4Jb4nt9bQVP3DuT",
  "key17": "3HTxRuMjRmSfw5SFsrZdGNnK57HGyBeFrTbijgscheLjHzXcBugMozWG3rgg8rb7XpcdYQaXKArKQDW8kSVu4sxx",
  "key18": "2d5qtikWiS2TQY4vX5iRLjqf33y9yrRgwLWmgb3aEPnteoJLTCjYL31DgkkpbXagef6mksJ6kk9eX3B4U7XgsK7z",
  "key19": "5opwGYpXmj7uWjWjTNnx159WxgbyM2rPFzdrte2D1tevMRqDj4hXEBnkxEwLLKogBGh7dnDGV9RkPniRrKebLkX2",
  "key20": "66AWfeU6E8kBQ5hSACVPQHSNsYCMEMVPRm1L3TeurXCw5ZriHW2Gahozxoowm6y7U12XKnywLdU8dK66oqyEkwsf",
  "key21": "56VEUmEewQCLAEQjWgBrTbCb87FRiMeHUbL1ehiSaDY6JN5KrYBsMu5DMbF13xktYhTavjXYDY9kxHBekwXD5tNM",
  "key22": "52owXQu7hiMRyVZMZGk9HgNX7VpZFATH1qxUH2aha2239ASt7QtafWPYuQ3ZwiqAv6icd5weATJr1ghFBx4RPd2T",
  "key23": "44T4YTJsqa5Qm2SPdWrptcU5iBYJWuSBnCuRPc7sjUJ4SM3VsbmLsZ9XFF69UdVSAN6qp2UotX6ETDcgiuFfMSE9",
  "key24": "5HuiifaS142soqCNe8q7kLUB4PxqrfRb1fEhd23LLLHMGRUBBGKaVBeWHwawio1m8PDQtWHV1xacL4j45tv4mMUd"
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
