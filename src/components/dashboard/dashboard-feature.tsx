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
    "2wVrdqpsLieQwWAcb99pucnuoqVXiYbNejibyCdXaj4BJKuMnQgBPrX9A9uWxrysfbfda6KtKBbmq8sRQh1X4rna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CcAbA8pLtBWJ38tjNQvkdJYDFC4SUzeifbHNcANxb8SaB7MCJsctc1ZUAF2TKhgiaa1ykKj5Txijuyi2mk3WkpF",
  "key1": "3tUYJd5Zy6NeH95a4uzppK3V53ESeQCeSZ3TesJJBSWfsVJwoGmVgpskV4nTLQEsHorefkptfC6QEkDYsTEfdaJh",
  "key2": "4unSeXu2T9VvcqWA7xPiSScrmuzuXiGVhwp6evmY7YNsoKL4JU7xvuHJMywbn7JwH8feLp7yHHMRSoZ8Kt1D8LY7",
  "key3": "2VwP1cFLG8BUrr9Kir3NBdb7ytjwRFWypC8WedMByaQQxTXruw9r4Rmd6SRjBrVG7cJakgMiQsZtreKEsDfoptAN",
  "key4": "2eZj6cVpogKyXZnsHv8PPnQGY35ADHKGyzvr5kj1KrDnGk4tiFYzxvpxb3ndyBKvmPceZqAU8ntrEeBeSoUrej34",
  "key5": "4i5osQvbsSPC3C5QfYHjWXsEaDdeYhhZtUxE791DJU1nySeBoijz6J4njCyHVLLBdPnuGtKrUKAH8X3b9Dd4vF4w",
  "key6": "66nmCJWbfq1q9Ex5e7FbP2dGPMKRCiZc4Tp5mtNws36kHCLRZ1vAiAAqDSxzSX29ogfhyCrQEu6DNjY8KvZu8Qez",
  "key7": "3W2Lc9EwqxCH87dHG9rApkrEDCw9iKnovpcerY51PeVoyQsQYPTDBuqgrZSfr68auTo9c6VR9mqcCj66KSxaS2W4",
  "key8": "37GSpHNJZLAgUrsRSjod9coGm7hzXJ4XkjTEMdP32FR7EFXsK5GDPCFKtMN3HTdYnFGNWQsnxrw9kF9EBtRNkoZ5",
  "key9": "579zaoAGWxSAi6XKpSB5cYCEVEuinSV9KwY9TinVFxonBp6FaF143H7zMXVMigY2WNPTrecUtdLaqvqRtPJCNvy3",
  "key10": "4mzGweuWTPW3aTFvRhiXh5oRKyHPZaZQSzFZN3BP17ho44Qu7UWN9ktRcatgThU3Vb3m2KFrBoNxcQ7skpHiv3To",
  "key11": "3wYetTB38Qrog4wbsjUGs6VvM7Ut1Q4i1LbwnsqWsGuxwM5TdzdEW8bGErQPeU5utofey1kti4gcjRfKYDbNaw4F",
  "key12": "45cx5miQvDJjsFRNEk5PV1dopwcPGicPj3nbeGvwBtdPPfZ5hN67DnfkVWY4zq1Diyk7J8H2YNBdyxNpEBNGubsm",
  "key13": "41Q65FJQvjDYbU1tcv1jZQzFNfLnGPW7XQ3JKBRsaQzv7jpERC6zG5GEf7onLaPexuTZyNmxhrqbS55khvdLGRAL",
  "key14": "4EyEFuLdx4omr1K1hdQH4Ktarv3cY2Fn7YRYAK5hKKDZ7Dq9XqjFLhehM9iuFVMNnopAgv1GtAosESeoR9wgvTRq",
  "key15": "5QLD9HvQBbmPuQgY3AyEHWawASA271NuBMrBpWxCQDygm1zmMRuNsmTgiWK2QsB3TrV9qk6hkBWMgLFX829YBqTJ",
  "key16": "3D8YPUrZgJvSUX2jKPnpuo6vJ8VrFsJJaa5MncT4xJgz2Mi7bkZaCpw9w9XQRPFxjR64rorWSg5DtvMrVdoLakrV",
  "key17": "4UitkHYjYJopk7TtktQ4tGvPBdoUi74JGfr8zrZbqG1zXiAnCJWTvgZ5YGAqUrRXJCsKQLMQuioUX11eE2Qors4N",
  "key18": "4sakjmhr1UTr9vjSUwg1A8t3scXacugfWBtwXp97yYqyczDuKVbgjNZxEj4fY8MPB5zjhUjyC93J7Ki4Z3aSvexC",
  "key19": "2VqQFsbowoZ7sTg98Qmen4FpsuSz3b4tXHGz6CiSc4fhUbULjS5xNG8Rpc9w1dtwMTxfgFyhrweZehGTZaVxpZDC",
  "key20": "ShFCVqJSu89v2ZSBTtEantAcSKZUnDYMfMMnWnTpuc74oY4crqTHqQUpZVpwJcQwjT8SEAKuiG3yzMLgCTcUfT3",
  "key21": "1WiZx49xr7v1fk8EbrYbgacEXSkGGGSSRR6hfjJCzvBDpkKMbMz7jWu8ZJKtZqsyodFccygawqtV8wvsm5Cb4WP",
  "key22": "R1RaGYuXdrBhExownQ6XHNo9bYRvRtSH8L2Jc4ENJCS3bnsuevVJePMkzFgwA1MT8ygJSko2qjDKVbSVnUpKwQe",
  "key23": "2TENxtuyMtYB63JzUrJx6vpL61Wb2PZ5Tqm8GqkdiqCam6RcuwVhCPZZvDZiCSJpfuG5cWnHgpp729sJEwQmvEke",
  "key24": "2w9v6xB2dhJJsmW4YkzNQ3QdbF1Nhr2srx61Sy6EGqHHYK42rNBqf5nTXr1bHEexuU9NfFzXG7n6a4kBdpyUegc",
  "key25": "3LFDhXskEdPihHZKvXu9zrzmKig7QzH9XaropNUVdVPpBzy7735q2tHrfkyS54tMXaCCsvt1fPxFoaJXQERxH6Pi"
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
