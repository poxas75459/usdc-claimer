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
    "5i3iWbAHqJBfgXCoBzsLy8vdHFHmYVxwa7Qh1rLRKe5eKQLJ91ECw6qqAFCgH9JmPrL2JRhHNmgwBvSHKZZX43AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKs57j92pMmjbnARBF1xFiyCD4ZbJmrQZ96Y5nyiQZBrus37kJAkL5rNZ1UxR6TcSdQs17i1Ln95sCvqdBsmrSb",
  "key1": "4reU9EMZSNev6Ms9g8dP3XCMTQqsy3Xu9CwpVmwYuY5HA2YrTGemDRtMtxr73qbWNWkiDYg6geXeiu4mWcQPMf6D",
  "key2": "61wfp34P1moayGku51mEC4shmx59sDdPCshVw4Fbg9SnXtXeDRAauQDc6eNkY2FABAKsWniVBdJuaLf2hnyZ2KFG",
  "key3": "4Gqpcpb7878BhDVJy8eYAds5bXPpbyask3xezAozzdWsfMZpAgbiJMMLD5JiXPu6SMWMrPVxdomeNd5XVGUBvRXV",
  "key4": "5JBhaRQDEAGb9KwEKrVCrNQmztvVpm62sWB88iPAQTnDvDDongxzw1NTGQfurvmUHuKqcKWtMYCtrpSDNqN7Pir1",
  "key5": "gqn7wt2UogUZkyoHBiU2qbn9pCbKfTFNEuhRmsagbkzCoFAA61T1HGVdeyPtoTbapmtLGLx3FECpptCnShW7jKg",
  "key6": "3cwyQvLuA4nwnJjjpwGYKg4BxBHv1WAhn9Ep7PuwiK32HV1ErVATd7chiRDFAxvbwF6oKKTmnQB1JMmGVXzPNNoF",
  "key7": "4ELYrYannuvwWQ3QsJFy3KkR9TXKBsL5o8oGHMuoqHy8enYuDDG5nWn6eP3kb1W8D8iNGeHsVd4FzGq1AP6Y3RU1",
  "key8": "3swrMHf6gKGoUgb3eGTimpF25sueqro7BRNLAuDnhRn5SzoadHZTXRuZFiBB4dvSqGr9pf8AgBxYfeDpT4bRdwsk",
  "key9": "5WC1BLVgY3dRafGsS8sSzBAMLQP6gMxSFrGDu7nMzLMa6TUXNnJKfcKAKPnsvKe9d9p6YpZSrBtA9e6EH5Qr4YrL",
  "key10": "3bEULx9ipZZQwjLtTG8SGSoJpBGNbheX8hpVTgbi1dhF8iq1YQy1NK6kymiomtsyRnehAB6tgrRKaiMkhrqBocEY",
  "key11": "2AZrcsr1VV424FRWYHyQ5L4ajc55rHevHingMbNbq4TgMsVjreNqsxsDBWvsUadtqJMHzL6nDQc2ZCEHMh1nLC5P",
  "key12": "2WNsFzkuoGYszAg6Da5rjbXtYWpff2k72i6YQzoctzWR8MZtN26nggUfgMXfDBQtU93VxXYv5tjh6TSnhboxfbsa",
  "key13": "4YqUTnUjSh4HahDeubrw8ybLc2hFjjMv8gpEP7vDdThk7MgLsw5vN1oTqKFqfh1RB5t3dTm5eWP6HUmBjQiAfe5M",
  "key14": "3rxNGcT8Adik8wNdk4YdAiiURUTo1w34Q7GgBzBsBdyrCwbsJo3a2DiUV8QnBCdkWSxF2wabG7ZGEUnF8QexqqTy",
  "key15": "PwzPSBgqsXG9pyrxRJhL9rP1b6UKVMvisX4WZmXjKjzCiTEHU6kegwgxsCRac9Eoiv6Uiq48n5TmeLqHSRHzLXZ",
  "key16": "2fj4iXTngxDiPyyZpUm5h1bhQMDTi6oEGG6U28BmWBg5PG9Nes5hvpjipLJ996bqxZLG6aXv9eV2JbHEkfXjo7QZ",
  "key17": "4Lsue5Jj6STXhMrhDc3S8g28jCEvRgFEBDJiaMMafccXm2UdxARiAjtMNDLTd9bNNyJxUzc6RCtkB5PiAmxighQ2",
  "key18": "62czkfRAJ5Di4dBNiWbsNsM8jrshqGjPArn39jKjVRQodVoehjqShcwUUpwdDBZGFjqt8ZJPmHWwpMK3zrBdbDwJ",
  "key19": "5PYx9cNC65Y2C7DprAWCeCQ8GriB7yeTQN9fc3qtY19fRdBBMph9U8CtcowNfjsGqgxnX3Z5TD3ULTrRM1HKJWnE",
  "key20": "46GVqjM6mB1pkX6FwBNniRYRcse9T8nRw2sTK8DCKBk24QVUzRrfZszmFbrREhae8QEB4RGkKdRnAaDStvwu7zJZ",
  "key21": "2Q8Rj9oJLAyVUUKgtUTZsu9xPrr1P7p5QZaLrjMPsu25zfRE2DUd98cG8TgiNoKN7DK3hXcU4yAUFEKWzVAh2C76",
  "key22": "4gYe4BU8gESuFTcBWYHuBnioVrXLkJLzRaBfsHVHoxU9NJcbvuRGczRRU2uozb52r8QdYw6G4AFZh1rwqC8qBP4f",
  "key23": "gcHt8NgsFF9Ktv2sFRdnZSYbfw3ktWfV1pV9G19CS21M7HEfd7n4bB4Q6vwk3aJApj92Bbd5Wkep4AVBenEQnUH",
  "key24": "46Hp3uG71M3g615rpDBds4BKfMoaPp2aHvw7jjWzv2jDMsQ4aG7fEWNtQzWJGqTsqgVVB24FtTs3gLLtLutuPGqB",
  "key25": "xnp6iuzbJwVrDomEUmXk4tnix2y4xwS4YDChAygvjNXC66qAKn1XmoswymwVUrLZGvoTFQmAsFnkYRr1FZzjTzv",
  "key26": "2f3X7eTrnd5dBk8YwN8iXJueDyk6Aty5MV7ag7DYDRYFuhSMvZszxoZVV16TBKr6TbQvAWdPNXxkmwrhsfiiXWmU"
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
