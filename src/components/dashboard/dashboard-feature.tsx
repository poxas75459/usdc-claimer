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
    "4yZCtkWCR1s73KgqowmW4UBuUq17zZEtuknAXLkshx1msZi93bW8Yz2dZcBVeW7BaENjnHSCRpPUCnjdGFThdaJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asivZRCpZtodFUarePJhbhdtV6pxG1cPT1QmaDAi4caGoKZz8XSjfveevUqwrvQwFknE6ADmVstSCPQRyiazWKR",
  "key1": "2mV2fMApvUaBWm1ardzZdWLhqDznKfJTknkr1C1NV2TAwe1Dqii1TTRxqKjrCPtomoHK9Tvc1WYtRyqJKBrgdnq1",
  "key2": "4TbPBvEs5aB2nE15i8SGzVjKvv6YQysifnEejnUG3rT3aRNeRP3vAfRES98kKzxZxPVpJ5rgtUr7buD6eBuVcQhG",
  "key3": "5A8pwDNu2Ab25CVkYh86NweKQ2EkitW2wtLZLJjTcAGpvmPhriim1Jw7AMqtgDfjTbkjrp28rysp3t1toY3Lk5nc",
  "key4": "4unkTePjToGUmFPqmu9a9jMynUrq6exmLt79JVSaDMv1qyCGF6KU71gwttaHqu4aEsDfb8XoJhbLoccpJQ3TNCwz",
  "key5": "4uDH9PvVgsS81NKdpvyZKHjf4cDMH9THYegTescd92Cx7z9FBH44772KiNJ5pkYhU6Gb3tusX9yjiQwEJfKm9naG",
  "key6": "5eTvt4nEjbp3Th3x9e5kti57H2AkA7VZCdguxd4GX8tv9JMuSEV2m76GzLzKm3H71t7f7WiXPVkmKAd7Lb5sm5oW",
  "key7": "2SjhfDvYuWHFLyj3TXWfPZfczhWMwt1fJ45LFppz7aApi8X9MM5B9xpWupy6oEnHqtNCFg9y1DgMQtZCWVDUUDMv",
  "key8": "5GxRvqces38XkXq64J8MTDjU9WrFK1FhT6vhkQtsAZcyjsxjJAUgWbDx6XxtemhLsYXWEydHKsY4JUQNptag5NAU",
  "key9": "3xBoSoJe2b1yqcX7rNk2XZmCQDfmNJG1dg2twBGXu3kzTJRp17Ja7Txfuc9aGHcb5Jgy4Ccfn7nCmdJKBVVb66aM",
  "key10": "3pgaTMDqBcjZbSkvFAiRtsdi31skmAmaYfiiZJ7CSAD6AikTHknWBpkDwgtfyJvywK53QnvMit54PzB3f96uUoEE",
  "key11": "67JJoQ5edkvCAQBjCEEwk5K3irXMoCEtFwQE9ENffBV8nZ5Z4qqokJdBj28w7dfZRcif7XEf1eTWoPW45Xjb88qL",
  "key12": "2XRCjgxgBJKDw4asqTrKatPy5XzrVbjcyxLCCkhmKQmNUow4BYzTeVg4rnnbZHpvPNru3pCkKouZYijrEikDmUWd",
  "key13": "2KSD2PgsbzkW851raicAjAj4pi7gVtpQqCGRGdnTjLP1EMZCzcWMc4DyuaqqheCTXTekVDUmXq1mh2uZ5pnu7qod",
  "key14": "3NNrAAvpPK1XCh771rD3hyweF13W7xB9wzn7jHEjtBiguwgub9raBZdTRb8gU4sxptdacvvFss981HhMCyfPb7i8",
  "key15": "3MXxetbGVDjHwq3oyowbvpXPB4CXawFinRwBKHVJfx8bi6ySPqTS8omud6swsKPF1htFb3boLPC33hZiSNggvoFG",
  "key16": "4bqrUfT9RfM5QCutWA4GbLtuUnBU16tPYtJwa2ABMDy7gCAdtFnioZmPunMkhBNQLgQS1M3Am7PYs45tko6AqyJA",
  "key17": "4tPMXbFxWvBezUQGj8eRQm9rnRbDtboR4Y5vgGJjgGMzHZKSmWWHdVcetd4H16rZzkGcRsY8q4hiwmQC5e5B44XD",
  "key18": "JbuKJEsyMT2KtYfZrg273dKNdv1LAFY4uzRRvhDiLvrPs4ojZvE7HQ9LhzUHnCPDQQfhLE3ALozVCPQzUWrDbde",
  "key19": "2dCxkWKLmLGUVBPceze3zoFEoLqLngB4DvAqYRpgb9hRZqf8dghUt4L9zRe85f1i7Zt2nz6zFXNiEStMnYhYz36B",
  "key20": "zyiSi4VR3vrUPeVsa6YxMa7yoDYFdbpvUWjFg27TbUwaAW83Y5WJ65A7HMTTf7Rmm8c4w7tCs9EGaUz5suCSCCM",
  "key21": "2T4ZcRpDLexy3FVsx3tGSsaxerxv2bayKTmqoKRvG95cfp4ahy7bzVkP2vdTCDfn9kGA6p7D2J2GsPyQ8uBw5wwV",
  "key22": "3rdaQgZir9jFbGJxainQkVtazjtWv2s1uhCAwYAeSRhhMo2R2DvBfB4PzRxoZ8Be5jwir8nH3m2maSbNQiEMnW6P",
  "key23": "49NZA4BgwqK2bazmpR66tCUvETYENwQAhaKvM9asadtpiMk2XN5Z8BgRK4FH8pwibZJvdbjj87u6ouuCUxgWgExH",
  "key24": "4nKYvxJMgYm3u7KppE1f3pYqUNZ42jYidW8YZizFyu25ayBwGbJNdjkUHbGxryLF6JGeCpsCBRpKkrchGYuhfgow",
  "key25": "4DZRumHHAYc5A4MmkrGhFv4PGrcHcmENPZcKUGFkxSNfPKZUoy9DER8dRZN4c7BS1D8vU2oBmSeqsxZhtpZmzwHx",
  "key26": "3SyePow5jbNBB7Z5puDHF38vT1NMHjTdgFcvvThBWzd9tPwCCjBxJjpybAPYkd2bEBqJGcxeRFEmvVz5Q9gsJ1Ha",
  "key27": "5pW78K6pDqhGdfrfKFb8ZxPHpuXAP7ixL2X2r29PGzqNAVcBycrjfQLqDM1kgzAmnUukUnd3adAFE2PFW6p67HmR",
  "key28": "41sm3mrAeyqNfCKMfPMYfUg2oMcPPa44CsPJSGNWhEYT6Kj5t6qTxpTuv6txs5pdXK9Pmm7zUaQPMj7gLmSvoQ3D",
  "key29": "5XgW4wtYAcPpYvFkSBMRup3uqPA2mCgAuK2SFg5p82XzRcDvtiKHy51AcQ5C5eNEj7c3cDWaqnAj39fEXz5M5RHk",
  "key30": "5fVUa8rcKEbY4MYfabrxSg2A4DgSVWUaN5sHfLKJZFencr2ZsHzeHFvx9rgJH6vm5LF7ZBJB9rj2rdc8PmvW6J8A",
  "key31": "5xTuAhppZn2xMEBaeoPDnbyLc8kSSVFLuT6NER3jk68BkxYuVpQEZ7UARKZVpJUc6PFw6s4fwtUzW8gCjdHuW4at"
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
