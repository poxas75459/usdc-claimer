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
    "5vCr2d4cgJm7j9b4Sp2nEaDGqzTbd8BEK9dL1PQnwAWnmrRmzbUhnQyrRyRvQLJs7S2gSaV9uvZGwGyfcYAj3D2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYTurYY4oBSg7BJWG18NZSNnBywRbnvCbTBoj1FQW8Fk1bq8uKeNpvhvrxrwhU6eWz7qU5DFyoDJrbZbxK2gzEF",
  "key1": "2xynGwqq3abLTqxQiXbCrpf3Q17bGbhpAvJ5GbdBCdHEpP1f1yaFE2TMG3sVbR1Qr42VPbX6RLjo15UihS5MdiJH",
  "key2": "5MHKHegmefp7k5p3SDFTB1moHhe7VU7hcHtvfdZpgai3ARZTFf5oQdQuCFfYhj6m4WSJfomgxPvtJ41TtTW3Ve3z",
  "key3": "3TAcNydYZQKz7F7N4ajfajSQ6UffBKXBWPdYYGmAJZT8QJbXJsoq9sP38XGdEQTozsnXVUwB29WFE8esoHds8iuh",
  "key4": "2b8AQQoxYKT3tmajE3wGtdMaiyLgxwXHJ7MVMnscvvmCTpqSZaEYXq9ySL5wPTusMNJw77eCJKdqV38Jr7R7DBaT",
  "key5": "2nmzap6kpzSXKxMrVTxxre8bTCHNuvMxnU3DKiQpYLHtQp8Xm9F7syDqqwokz9S8xZTF2N8zNkP4M8t2wUGjHKUj",
  "key6": "4Cjx8tX4jJQzSuJbsGJYzyKqsjsd7dXvbUnhnoucTfqB2rAuX8ybJfESheeR8eKAJGnvE4dMsGsNQecyYLNYA7zT",
  "key7": "5YYH8pV2mUxaEF5YWVNST9AREoGtoPDxCeYWn9JCP7U8o5DVhRC39AAdCP7NdAa6F2cpfQdsNdEjVdkc82LRuae8",
  "key8": "5LcyHBV2b4xLXrftc2wWzxtUp2zVgUjPiawUszS1oJcyqHVsMz1JvA2A2jbk1E4Q4fi7wnGxgcCB5yuMtLKmNJYU",
  "key9": "5aaCUC3i8wzVa74Wut5fzXCipKwuwAadw1LMb6DxtcHQ9koJ1LwTFjapJCPpKYQQmvMfPVBumVdsCZmsYVffFANd",
  "key10": "42q63rwginZoccJnu34nA75xfmMNx5qVDPy4dJvwetuF5mEoNpJ2RWTbdYP5J5EP7eXvjU4sFhzJQuEwLmS3thrh",
  "key11": "2ih9wLNAQ3r6ppbonWRchqu8yaEeTGRTXs3YBwPhQ5sYMUXKTtcgzSisRYSVgmQbfM77SAzzzLBBrjwmjLS11tQa",
  "key12": "5u74utjF4CKMdWXR6b71wZ8nL7P5Z7kZWuyMHV4EDaDQoH9fiFuVtwtiH65fS9TtK231b9fFgaM4isXkPVfMF5ij",
  "key13": "uPYdirTcvDAs4pPJE3jRimAiyhHuhqg3skZBUckAMkjweVmobJdQKAcszS6XW9fGgn1NLNZH3MxZjNWEoB2S1r5",
  "key14": "4WygwtkaCCaf6EC1YaZo3WcNK1p62rRBj29VNDkVMmix7X6H8APq4xd75DvMW1sBVh8QpzZPfvBxqFFpf3NwY4kc",
  "key15": "2zFx1LeafzBNi4qwzZ18gZh64U3FgwAkeBQBYADXd8dMvAC37tCMsUrSmy8yXxAd3ax8ssh3YPasB6xcu1dpetcU",
  "key16": "48c5im2CdKEJNUDCMeADKZaux1qia2KH7Mg9qNHDfYh4aremAnf9q9p3wezchfhfwAvES4HN2wj9ArMp6UmiSUhq",
  "key17": "2CfZBv3eCiVkXeD8NmnuyK7oBQbm9fvU9QD7z92h2VwqGe3UVmRH6kZS4gV9immYHAgTvAuG3wuGaWWSMfYFMrJx",
  "key18": "4WTsDKZSTqzpLKQ19UX9Brn4VxiUbNPp9wT3r7u2Az6s2JHb9X78Lhf1RWf7S3tFYSF6ChE11mXs9D7vbaYM7Qsq",
  "key19": "DzY5TaAtBFucinuaZsqGhoanULePq2gkViMeHu2ZZuBcLJhBVdNbzgrh8KZS2TnDm51W6QDyfJX7ZebfbGSAQB1",
  "key20": "LgtE66AxkS4ehBtCipRYogazgRrLMZ2GuYDTJN22M29cAMTCudoHyf1noWjku8QDRZcKYoZJTzEuCe2x5rZejbB",
  "key21": "4FbhWDHGGpfj1eHpgQ6WQEbq2NEC46kfPY3DTFLBVQFi5jR39zAS8NdL2Jp3uCsd4ksa66Y6twcHLmdWkDsSx4EG",
  "key22": "2H9xXKmPcTTzF6WNKAtJMYqtzpgwuZaxVA2fQ7yLFuqwz9en4wAfCssyj8Bq1jCEVctr5cms3RxEEhAQiLVFEi1T",
  "key23": "47HEuC1B8v7TsmMjHWtjMXXF4zUnVjgJdcv1nZhTV8VsWHDHMo7jtQwh5vz11KiZ5vnMccvzkqbxxmoVu3Ndb6bG",
  "key24": "3PphREpXNrRe6ayPYtK2LxxUeqkihBUw9GohepGDVMHmkLppCVuBC8iE8fW2HbkLkumwsozJnRunqrgkgkXamB8Y",
  "key25": "4dRq791fFD83VXX5pqmqbmX6t589ohCcgg9KaSdgi8ft3uFg7UhP4YaueqmEG7CuWfeUCxKo3FXEsXADmbGt2oAR",
  "key26": "59Qw1GfSmEAYWsT9KR4KcccW6Yy2r3s6ovgnroySQTnGuCJ1W3oi6stVBaWeGoY7dGZuE3x2kbY2Tj73iM3TBt7e",
  "key27": "2iXeYJZzh9q7mcL3e2QjLam5Soy8Ki3ifv3HiyU1Qu6W4NigKKZ5fgNx3G5aijLhikUjhWpAUP4BNijWkB9KrYX5",
  "key28": "23mR9zRozb6QRSHapfYoidKjHxMNbtDcZ3pnVUKfnK19jjbHRFh3aVKfAVbBjAQywo4FVKeQWUUdjEnpUPuSJDQY",
  "key29": "2YHMLacPB9Qo9GcgfY4heEPHgZ8UTxFTbPYjdVm5K897Rqda3FuyBVLxfBCqXpJcTYviXNbkWTooSXUPBDtBFonS",
  "key30": "2stPAtwXwdsjCApvCa6mCdH31bbJj2vJqDvqgQ8NsJPpsawVkBrKAygCucD3F3ybfM4Fs39EZWF8jWb8EwBzYWsz",
  "key31": "5kMHYBYxosWBY11wzg4ACokt2ofqNitHKdX1DSDT6e3xE7YNka3iTRk2YoiVp12GGRB7GZqzzF9Sxin42Me1BEEZ",
  "key32": "3SwWHhD7DH6xJp5AfwQwb7QFMoHKYF1MgKmnRLyQhshpjS8vKYMRsjZ8KuoZxDJ7qkiQLabZCmCyXdcZPdTp1RyQ",
  "key33": "2voyqHbkjVYgaGpL7y15s7PpNiPhmxuqHqTdVBJmMi9m8CxsNNxXEne9Yz1VoEXeqbD7oh1dwKtYJVpL8mnUDHk1",
  "key34": "dxdmif96qaUvCygk8YA8hQVArzWhJvX32ncuvufLsjE8AusKS8qnHujc1vN5s9t3Usmj97fr6MGiVkpdMr7jRPc",
  "key35": "21PVccjxu1zxKPuGb87oQ629Qk5HqRtcoCdNWcQtzRpvPjThg42gpb9uLKrVHe22o4A6BGPH9C415aCvKLHSkDjr",
  "key36": "65NCR55A27Aeq4iZPiB85HvtYmoCadtD9NkoivDfiWPt3Waf1vpsYjnFkpRgoraZufSgypQfdCQdXcGMFvKWyEM8",
  "key37": "AANViNLwD87yupGn92rTDAXKU2uL3jquwGVE3MkBrFiEPikv3QXwmhyUBX3SvpPiN1CCvpMG72P2FZkYmatp5G3",
  "key38": "5PWNQHS7LHVWKY7r2XAdWE4sJedKbzcSsxz8APkq9W3VpYj5sdnKgG57HK84Jy9fVF9DUA3DCNK51imm3P7NPkd7",
  "key39": "56ZfDaZYmtdKYtLi6y5WpXUgmRk7Ewik9R4BoWmPQtzpto43SmkpTk2X2VU1Yor3jHbssTaKZxnZ3keuC1RNj8Vi",
  "key40": "2ThccSM8hdpxCw9nEGHU7aSV4G8HuUWayc2U5KV3m6s3Qou1gfYRrVV8mK2YEWRhpxQEPqZGzdPx69TVeMhjLryv",
  "key41": "2NyC1ZyKdBcC3NnrVg9vBkb7iGzh6GY8LrH5AAhFS6uexMbijDx1hLAYcZCApfp3py5iXTogq26Rvr1quEMABtPF",
  "key42": "5dxLPPzKPEFTj34npxWaduMGf9gg3ifYVgxwa5ibUXPzejC7MPULFcMEH8wvd3nV9fyLpqWeHYFP9EfgaE2x9hLh",
  "key43": "4BKUCU7urbu7jLWzjQLzuSPTG7XrnH7FnkQ8sfJZnDx46dQ4i8yApDpHwtggDF4dRqcNZP5vom8PB4WWohViKhP2",
  "key44": "276Wnp2JcG8bG4WpEmJairD9oooW3wW5YKSuUcquDr4iEkRmzuxzwurSUA9XpKrgRfgYSbVoG8MTtSveMU9j6UV3",
  "key45": "4qRe8TrZFpVsRhx4SEdCRS6Hzn5xRgVEKgmXnnD1BwuZMtMwdh6ypQp7BJHLabLE3cAT7DJrc5Kx3E2Dd862Rb4Z",
  "key46": "56kLzNmBTY8Ms8A6fnvDZcyBaCrtA1rLE5RCgV53FkT3HxiougMp31cXq1CdMqTDkLT8Ecgcg9Jk6Q4aQ21qM9B6"
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
