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
    "4qJXC3pU8nJpDfrtswuPuXKquCpxqXFmY1RtrHV3Vp7wf7MZQcQmLvUQkq5nt48gZkZBGpBb5ZL9JpqRwap3FXr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4adZVdAhPksVKR5TzRvCMMLqXVGc4Ai5ENqhdoPdqf3nYFEJGmyStsooRk4aUdi7cxct4nj46uQimF3Rs4wWLs",
  "key1": "36mj4hYfkEPTkay1J9YjsYBn4zWC3iA8dVNUsW9NRP3DQXvJUcDVhR6LVHXFEqJQcsgHJM1Fqw3t8h1EpF7YnYpm",
  "key2": "5TZ95KvsZaUGmHoVLQCTqYmNhEdCwBxHFYmevPLsr2S3zpYoU6gv81jLR11dujDYtTJj4Ui6Zc77pknBao31hevX",
  "key3": "4AvPS7Xd6WhtAZMxmQkrvLPhQvkbK56JgMxTpU7Qq3kU7QMpFUBVwUBenzxjPnEDDY5TwGMasEumYU9hrVjYFKn5",
  "key4": "2QTU2JBZxGbVhwdaTx12ujKeehYfuE2MEMFzo4xekQKjwuc7sDGKUBQZSYvsfkQ9BAuRCubzWQD1KcJY4enMb8ZN",
  "key5": "5qtiFyu2hxirkuxeHRsaH2afBzSyA3PaQsPyh2sbFB6evDWsYW8fTBLXL2m7sskcyktJDerMU5LsG5uwqGkkPHqy",
  "key6": "2oi3MXuKjvkRhJbQBSU2e9EewHroigvypYpMwPqLAL72kT25vc4ZZSTxyCNEMeby8mbQnyNQxQHxX6oXc56UsUQS",
  "key7": "67ZqUuURNr4kxgJDXHmxxBo3BkqtptKfYFPCCnbS1g364oDn18MVpH8iZ5DsUAWi18tEHaim4ntXr8Ev8z7Ca8iG",
  "key8": "5TrxGJMj8QEkhjp8fUAarZBqpxFBeG4VphxbJSCJYL3kiCkkyiXSmFNWozLPbP7beuNVBKafeneNtC4zuq6yjAPT",
  "key9": "5Gwo9mPvVbNQ2ZJ1z2dgbchUr4UcHPefKP4ijreJ3zN4Mw2kNi33DH51ZE6k1Fqsde7aXwfP6QTgAub7ZE39rDBJ",
  "key10": "3zQWaRdVXDyNP4tATJ6VezwQiXDL6LgdvKRqwYz2J88SmoCuCdCLyXDMZQbDJQpZD7BpkjgUJfjt3qAiKwjUQ7yh",
  "key11": "4XHz9NU1DzbHthdtKey2pihXfLkTuzqWxDimNkktrM9wnAn2hQ4K2SpnEUiJS4bJoGL2MhGWjKoR6jsuKxYDvr7s",
  "key12": "216Fh8L7D3kMEV5RLNLUvdmSnV46deszqH72PoqrydBgPfP9pGV4ZAcZoZaNUuTtRi7my22qd4ZzqJYHhmqDFLqu",
  "key13": "2M7Az26afLrwJM3Ka4gjenneycXpchiB4autX71A7WZxkjDAxDjBE1uDXu4QGSSvP11k2JberEWpTQH8fcozEqj3",
  "key14": "Ft6CfhNxrgPDCjYvEud7aFQk3mPzjJN3XkquMrrzf1t9FJuNy3aRtpHN948gAxyD3Gi6LxMKedkYYoJ5AKAPLWh",
  "key15": "3j41Go14waLGxT78JfWwdU5ymFyzAihK4UHPY24G7N5db7aA8FyGMVmBmGz2Fh8H26H4DWSCsZ7PFaHw8WDDXaUN",
  "key16": "3trugxGJNkcGYguyx5Ltakri8bEY2VcsmcA2TafqEsiFFThS7kUZ1DLNCk2yRjgG5WMtQ8s5ZN5tnhbopyZf83u8",
  "key17": "vuqyu2E8BnHWA2XaHYGdhVmxgFbqBoo1oRe4UJKoZg3DNk9iF27fKUe4xHYGyWDxu7Jj1wWPRZkP2gjzLQdTppb",
  "key18": "qrSm9wBdzyvWTaAoCWdFmquiupEZSjPbYGfi9JYZpwqu5YuyjZtHiaN7RZZUkXtmbEuNdAQEoZyswTnD15a6Dpi",
  "key19": "4tYWq3DLLGvq5kLB4sCJyWgAQZHB6XNDzW4EPG8mSeAuzmZUU6HYbTkRTRQac66KNtA1DLaAhXgquRPmQJDque3L",
  "key20": "4PnBX1hwdtQSEaPLNxXENozfp6a33HejA3CTLfvBfkUN99txDfkGMnHnqWvh8EXju7znYVsEPXvkhT8b3uvUkqjg",
  "key21": "46nczBeGWf37FFPP3fANQMqKkVHLwnbxFq6nASTy7m9E3uBrVHeRxcTAw6YnF3bzUXmH8RN6LKrcbH8avFRSUGmX",
  "key22": "3ZSq9v5j71WnBe4kTvRx6hqrKSkBbx7XYF5iSBadLAebSamPMWK1YyXHACpTo2fb68seLT4ewJN2YYEYUq8phVND",
  "key23": "3ShdCaxsyw6VawJLDujvczXjuDrvdAGGpVK4bfee63hR1eaRaG7j5xBdPWd7W1cHCHYMXmib46Wmdrc3tWn9HNX6",
  "key24": "3YDeHY6jvyx5icE2xnTEo6xMpUvfmk9fNMDuUvPsCUGPAR9Tz6pcmbYRLE6LGtQ6bMVx812iAUuREu7xjQp9BzYV",
  "key25": "3t967qC25hsGSjT5T9KmTJqV7enG74tgKFz12YJif24Lhxp8nYUa51dnUSBsBLZt423rKqKWV73T7YmqF4igX7S9",
  "key26": "5Dju272D4HDsjAFdsLHNKa3rWAHPEmhBkS4R9e8YB2bCefFCbeEU8kCNVKAo6VeQKCwxzHGvVCkxKRWy2AnarDm1",
  "key27": "5MfV5ryK7KD2gxCHryy8V6D3UANcFzyBu9d3i4jit6iexKXwvCfR16hqv7exoPaHUJwF2khiwk8d8DJttu8QGjYh",
  "key28": "31ACoKCpv6KYtDRWbffXAVMJN8518CP4NJAbWZMwMjQaihiGwviayd6L1bnAcmERSjmECnyFR1A4aSHxvu1fkXV7",
  "key29": "2mFkF3vT1EToeNjd1LwZucii9ZhTSNdpDzEH7cZxMrvkxvgvmKZXG9zoEQDd5pKQfcpEkTeBVY3XY8uGJs13XTe5",
  "key30": "5ET8UeHMS1NLuu3y6uJh1wvtDaFsuRpSFMCJd8yaGc5dUQQbfgbKnpLrpyCWHeq3MdZnfGimpqp2koTefL5hqfFR",
  "key31": "2yVXtskfWKMUt2GNwDjvHt71aTeTNJY7RF1TKuCHrMBzBwZf9M25PGrvQZiFMH7MiGggiptgHNCdMtmx1sTo9WYj",
  "key32": "ghPXGNniXcgzsTShkQ4XnkhMtYZLDAC4V8t2hhE2DB1gDPzuqAk4LhYH1FDpf3MN1hYBq8iPZ3U6Wmc5KbQYFxN",
  "key33": "5yZtXmsbVeB7wwquAfEi2DN7u54ycvnU75fwQXBLrcawke1HTjGZFdHesXGPCQwiNaKJG84p9ZZ68ScTh6URSV4S",
  "key34": "2Qwnj6kU5zS4vtFwzVEt74Me39zH7Uim1o9DkpDGzd28ibjSSHGy294iokeRp3VLSzXdg259mBUA8i4ygJ8ZE94j",
  "key35": "2aG6A8u3S5RWAMTHBbEbAui3SxH1aqGZ389LC7FnPuXGnVtvbfYaBAicrcTZkjQNgaCwzacMhPXJS5qhcwBjn2D3",
  "key36": "468x3VP8fApJaRJtxePAiXovuxW3eEQ9mqxLcVeGahvyDEJRLMJ2kMfSjFqaVaXdrgkcA2ZjyY34iseUAayPbPZR",
  "key37": "55wgWTQeHy4PsFVcSUX3BB2QdwAFTA9ThLHYvMmAMXvFbCNTsKkGghUU6z3z2cZL2Sa74dKDJMsc2nyr3Fz5gYhn",
  "key38": "5noeXBYsP3j7EQAyqtqDZuzrgTmBqthSP9kGm9GEuh11p1WSN2M1fsP9KxWog9u89twaYRTxkfJY2TsNGUbsj9GV",
  "key39": "27MGWbZG2aJXWF8UuvUvU9dKCTFpVFRrL7mGsui53xzw1aTQr9HF5S583ji23tKJjYLhNAYUX7nFNpwp5XXzTYiU",
  "key40": "4cFpFCByaYRdwHW5ZT6mKehDqREKbw6DDaWXGq2YYAvxP14i35MQnnDHcKGgM8oCAeQCkNVrXmph8nnu49a1FPrn",
  "key41": "Eh3bkAVKU226srySW2zNJ5gktzZZwfNqhBDTiRGPPM7y1Mj99Z8SwpXciUEdnBgE4QqpufLhZBPBSy3WFXxH1He",
  "key42": "4X7QtiNF2Rj1vwgiqTBjBg5tbJDTAd6DGsikYiiv86LCoTYWx5diTX26TvTbgVGk6PFR3xCuvMwB4gGFC3gff7NZ",
  "key43": "y9t5x5VBtCvxfw8zrWrr3zjVfjdk6EH1yNFCx7AXZpQsKazJzcwtZQy6XnAjJetzc5HwyUUz7iuXWebkjFvKVn4",
  "key44": "vZN3zpFZocrXoUaQNVBNjTJFW5wZ4zRg4sR4SidHtXVYsmee7V39AQ1e53Wve95ZwBYYE4nTXWLvMNyoemwFAue",
  "key45": "5wBvV8vLdPsk7Vf39xjoUn82MnUQSvcimZRGioce9aqmvSqNmRaXaxZVMWfbxD8kbfcpiGfi3kBfmgSGDHjqAvn4"
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
