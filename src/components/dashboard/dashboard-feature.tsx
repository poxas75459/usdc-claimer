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
    "51ZnBa9KBmA9awhynGybW49Pb9QfVfWnfNj8GMmrdXkXBxkRAP7qsnBymtHvB8C9nFrDpadRZeTH7SJAJbHatAFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3TzZ3AgxDQJePHAvsj6tYLwDu5uvtqJhqGwZWMqPLEcePRX3S7YiexJegDW1jYNaKB5jBuLmufXYQzU8EgFfSP",
  "key1": "35Lz5D1u5V3RGeDEdv7oGnNXuRhKHy6s3ptWF6TLFcWiwqWz6k6zpYEPs1vQfQBBqDAeoALLXLgL8mKTih6kbxMJ",
  "key2": "2FBQcYuPyG8tZkQ6mnkgcq2uWUrDc3Mfen3QicRznxCAWBMzjZpDoNopfdF4T7rzxRrpxeHLX7KzAM1JRpGLR18z",
  "key3": "2Lvp2r1nqACchrAdxFs6fbAhehRyBRe9kdVFyhf7eBzHqWLPkLEGTwook9DMLJ9C5yQo7ucgB8KU1NvdUwYpmnhM",
  "key4": "2CRDu9JPigom5KFCpdZ5bAkQKHmgvsZ7LxZ7AGhHqtP7fB5vvz167zhuaDrnCeC3TCdfbPH4xVA8Mj1NRBG7oea3",
  "key5": "56a3BJNrZg8qow4DwxKeJ29VwazzGoGYzcfkEHWfxFuuJo35ZeQ3NMxE8sX48EmQQoJiGJYUtsrZtags4SWGAKMy",
  "key6": "65MS6ywL75C67xG7sVuhRXknf3n2UseVrydwqQiz8963sH9d9LQUn2sjCagt9VFepnX7XzMsVy4bq6aeuLCp1raa",
  "key7": "4aR2rZmj529t4mAxQv4RoZbAdWG72DHFfD4SJdNZTjN7eWJxMZw7i2eE2iqJSXxH44xESh8uPt95QYwkiwbN1hvB",
  "key8": "5es47zD7q5ZbyUyikmJ1pE1faY7sgw1mYqbapGaGQHmHhNzaNze2reE3fqKJW8Ur2efpJmSJAbaAdN9jNRiseBU5",
  "key9": "4UBep5ytcEa3VkcySmHAjiJ8YH5dr9eve9pibcEbkWAQaZGMmNnmnDr1ZtLqC482QYVavJeuEv8qmewrwJg3MJK8",
  "key10": "2qcrhisAEavChKftaZNVRjZiNUrQqKpw2K4Y1tFUSZG7y7rKfWKxHV1i2yoawZQrPpB1nd523es9XByggA2nzCKT",
  "key11": "4BxcdPQUcqiAkLR9A7DfXhKEsiv5P5z5YYdNgf5J55WBM86NCbVWLUfrgbRPdU8bGEbvoTbcCK6RUtn2tCtPS8GU",
  "key12": "49eaqYqn8r9cCd6w5MeX3NFxpbbgBJoHXADsaeuRKEcwYbo8bG4SJTKdFRvTGmkdwDhpazRo4oMdcvUQzEFqrh5S",
  "key13": "5hTrtY7k54wnioX9fnuLUenHixHh5gXKfbVcUgqbo6SdiToVYoXEZ2MAZbF6eP2Z8cCeTyaMtGVMxyeSGvUHAiUS",
  "key14": "4siKhDe9qRv5FieWCXmnkNPF3b3vLMvvjYwCrS32v8wcDbGrSWP7KQgeJzHNy65JejbFnpx8mE9SD9iBybVhFxBj",
  "key15": "4NT6Q1w8KyuDimzE6UTR4PKeGVNvfxQMW6grkKGPPzGkm3UYhcBZ8Fwcr9F77gxFAYRdPNh3aEfLaDWUtptfDMHX",
  "key16": "4G3EqiPyxjRemD3CvcKkKwyc6bdX53dthU7WT9ydtwuY6aLtZTq4eVAJjjW2wSYhHrRWjQ5P8FNLZn4sJtSq9ZYe",
  "key17": "23SKDCtN7nnbWUFLjAnSwrseDstgA27XZCzNrDUZZWv22Kre3YxMaKQyT8X6u4hFyvEbWGcKKtdKbZYBG8iU3YTY",
  "key18": "643381NzcezBzn4sv4HVFHrGCBKddovxY8A4b8FZx2Mnh6z3tkTJyCh9eYenuRfkUaJYT1J1uKdvFUtMwpsQGWvv",
  "key19": "62qyxH7wmdA5uMADVtjQRypWsGWz8f4Zy29uELh44LQWkQnJzBnkipLgJd1LcsjYZKji41GaJj5anHxNAwrT47ie",
  "key20": "2Rkbaeara5uAJwSkoT6hCAqJ3f5WE2UUzWGTctdpzVwHF2ELTjpeQ5nCsKTcewdFGJ1sfBVroZPSpAARNRfVyNGc",
  "key21": "64jgaeMCwgLgmVt3w64Y1WrD7ba9JesgK1S5nW4EfThiNxmMBrNZXCQu6GX7A5TBtFvKaBBVNjJVbJugHVpf98wa",
  "key22": "5agtBLvzt5U1Y62kvbGHEdtZ7sKvqaRMQxnWZ2qMSHupPARnSpWz2SV6tDL75VbdtykF6QaHGuRH211uWpHrW6zH",
  "key23": "4zJM6mDH7mAUFDyNtxvZnSwMQynGH7bRGg6q9FC12MJaVDJzu7HQnBkU2974Cdz6Psi8scswmfW3rzLdYkC9aHHq",
  "key24": "4XKuDRWUMU1SwDscLp51Z2o8Qsn9TnbGVyvpcgSDziyDYRboDXfPZ6SuQPc1pwQawcA7tTwuxjDhDjBEGrE3AwVT",
  "key25": "4rVYz11a5bd6p95gwJz6rWZXXdLtravDyXshirhoDqQj5unYN8yP3HE1fFExz1wvFaEZF986dP3sVBDhxZQTgcMU",
  "key26": "3QuJD55AfZgeXfYSih5vHG1zknhuvFT2TZ6GgiPEaXSQeFqk8aShYVwyc91sF3w6WEG34rSGU4VhNoAtyv1syYLj",
  "key27": "4ijigdwaSYRDjk18E1EsbJjbNYoke543QgvbW4PKhYqaAV2KKH4bVGHRoa32J9oJoLT4GSvMQWZDd1MmMQs4QRh2",
  "key28": "5Y5amBkunRaMvdu8gsGCdEmbXAyjLHSXCcjwEJuZN6CtehtTLH86XHQ8zVCaveUJdXzPTumGQrX25hdDnqgBSoFP",
  "key29": "2YMvxNA1t78MiPNbQkm5kNXd7Gko9XLHTsZu6G7S1QkfmPZB86PvGbR5W2iSwSJGgnrYKgKmz5wQfSojbBVZ3VZw",
  "key30": "4Xe4rEAqzM8BbRzNxYH43e1X8VZc1etMPfK2ZsEbZiVnBexDAPr8n9S6Mw4nPwgELB7H2LCW1SHfyvqFGSLr66Gb"
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
