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
    "3WQRr9Wg9BUQPfK4Hcr9F6LJwnWYuLqSs454oiwC7S8uUn8GNra1odQAEMBXATs2q1y2y95B9ZPUEMYSdqWpztoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hiH3NYWbfGqFdU8keAJDHs7SjwFsJo2nLjXfw2RRHuZVohmoSWAngGAbRpPuKTb2kCmgEj2NJEjLAZWP9fG4tJR",
  "key1": "3rCR4AttNeh6wi27574e9ZnDefe7oco6c16gUaReLTRTbM1DJxMLnFKwBuDQS7RKdDkjLv6k94GKzzFrrkPmSUbQ",
  "key2": "HPL36ZWYwTZeLFQ4YMvPiKwnE46gtg3ayXZFN1hjEx91zTwXYoWWH7EKnfmsQzdK89SwoXz2eUW4FQYKJWL7tBX",
  "key3": "2JP64BtRFVC3qWmpZUA7N43EgWjLNkR5KZcu34XMmtF1hYtJLik9MR2FjL5cQQc83T7MfyioaAjho8Ee9RTWFUtn",
  "key4": "54cMrYiSj51b8SAQNrtkQ6YaLVM3ejcEnfUErYpm4hJ4FYVe8KH9dhcBgin96FFyTPD7NKuSfHYpUF6TmPijwoRf",
  "key5": "2jUrtrpo1KWgYzGg2wkXbrUYToohSMBMTYjMCPaFYUU2AqdHcmnNYV8bnNGMdePBcvA9hFhsHWr5dpzoB4SH7TPk",
  "key6": "3LE44XXbhNEvWdgNLDD8N1UkVpf8sYUNAD1rEtqhSqhuhNEg76NPs4bMBihvHpJjZtWEjoXYythv2KEVs7Ba5kZL",
  "key7": "4ZfM6PXsM6sh3R6dGhM5eZxtmYJvu4uV5cffmigXyUAETaRhcsGpTnC3Ld49br1CGbCgWmTy9CUhVnYPSn2hhkQh",
  "key8": "2Ao4Gi2UGzNkqVicJwUYWFA9uH7ZY1Aqe9k5oN8E9CfogN38yzwxzgimAio43oJgY6JcbUZ2keRx2Con9kwvkegt",
  "key9": "GzvJtsHpLiEd4MamWVoqZ3CEZcBJW24Finseqpjh5f9yFs6ZujSSrcWRCguZU6uLppAoNSjwcSiAMC6QyyKDLUs",
  "key10": "5S9VaCHY1zRArgWUnAbnKS8z7f3f3vY3MJYsHzNm63AXmnA9qmE9wxV3Tcx6GAbUokayoxFfcRCmP4d97cQ3GDg2",
  "key11": "5E6DQx3GxcDmH8mRYRTStvtRSSPU82BUkFKCvK9d11BRWmCp79VXLFPXDPome14EyNWBXKo6NjdBcPEox9ikT4qm",
  "key12": "3LgZ66psNAs9RusMSPHRiYRokSBX66TpC1hZ3woR5LHQt7CSnwRc6Pc19bnQno73rJGGmkfPv91jemcVrXaskLxB",
  "key13": "23z8X2BgSBjwwjG4euA8pfTCobxzbUGMLaroz1rBcwTQpYWbttguUreyayV3kEpSnpfLitApsopgBgJxZN5MAz7x",
  "key14": "5S8TUvZSGy84sGaP7gwBGHWc2JxZajSYoLAvH9F3LXPqcdE4FiPeRnJ7HTg8CgMZfnCxRTu2c4WTrPTJq3H3ZDRu",
  "key15": "XjQSvhMzy9bgfxZcZ7NZwhZY5FZpe9bUiFc7dk7hygT8oFVGM1YZZt4TDPe93naREFtXoyd35uw8ZfW9LB4PJ1C",
  "key16": "2uGRtVbshqb9xWmiPZY4BEaZPgLLsCz5jYDKgaLkZMYhxWxvXecaNVKGJ2H1XmPqkMDWRuoBnZjrjFjmUjsUz2VQ",
  "key17": "37euaPsKG2zDTbPrYHfqVSf5erNRfN3x1YFVLeu3Cyb53StW7RXKVtCNwUeBzVZMUZ5FSt6wheMJRkzvaWuJktfj",
  "key18": "5jqG8NTWGssu8a3KkUdiT8F2LYmjTbGsumgPuzwKbGjn4Rj7KoiZNToPMbX7J1gEqmTowW2MgpAb21zktGgJuG6B",
  "key19": "4tQhq8fLCt7ciVdJdLwawfgZM2uXNWAbDsVAwTCCK8fSNqBy1qmahd8tRHuX12QvaqMd4JoFA4hPuTZX1XtQ7fL9",
  "key20": "4XEahSFGGLRdQyVAZ2ydCZ3pXxurbtfWAqGqXq53yf4eibfavYK1Hw2dsd35Vr4NoSmcUJHEPH3UzCxpbXcafbPX",
  "key21": "54DVcBojrywzgVRSvwaWaqZY6oLkeNmyjkkx4Ei5KC5gHHfJ6zHpZtDkaUjV61QdgTUFsmh9pHDnSGEjkSbTz5wo",
  "key22": "5eENsPTz2CS6PfpER55K8PGa5LRf4PXVCc1NVYtAfmm8Wvk6vEZ81zTFiL3BvS92BgkFGqELCZEN1NjtPPxRpM7X",
  "key23": "ynucius75rX6aWYqS3R4obvj1jm2Ribr4VB1UWnKJSFQwKu4gfnzAhN3hDZUhoDZk99JahoTKu3LH5rmZ7o5M66",
  "key24": "4CNKwSnaQbqYKLdVt9mDHsNMMMBUmtZuiDuhzXiVg2NEBNzCtGnhsyWCSpTMJNh4Y7bkL5PinViwzUbtJxvwFJun",
  "key25": "2nBm8nwFs44gf3vzNTsrCACLx8NoUukUUqF5nBgmX8znkExPhG3f9izyrQ7PRmxi9GELyfuCThnuFd91m6apAzzj",
  "key26": "5mLYRndsaoLZ15qn9cLov9A3xaHtEnDUPZ1KcMoBLDiAcPm8jVdksKEj9F59wmDtDSL3mpLaZoAAEGVNi73WyyFt"
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
