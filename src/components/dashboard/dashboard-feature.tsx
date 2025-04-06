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
    "E7XBy4pm2iRAGefRZghMQ1xULYk3bRuEm9YcBpQa6dfLtZ6yEDNNfL5djQvLXbC65ppTM6C7vWSuivUCNv9eMbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WxobpkAkMM1kocvhaaBZQfNUztmxbUNKDfjgW485BfKgWuQU9XQ1Me6p3ixPNWbvDamCePxLpmUyYKLuPWf2jy6",
  "key1": "PbQmajJnUTwLBLCEBFNfuyodD39tfE81hHrxudo1RHX8rz9TRtXvaci7sx5mFZPf3LQveDWXm7t6YToM8Fa4idU",
  "key2": "4XXoJGbyfPxyyXjoVCzuRrP1154Z2Nroyw9wEvXCRb9eUs6yRDZv5jCFr3uRccxRyS3zZ5VoQpK3dQrDPQLFz8sM",
  "key3": "4xYWx4gJB9oVhmwwRegSczdCftPSXUH1doCY9Dutmtd7WEF9XRR8yxfbrXryDBvqraQNh4gb8UprUkSZtncsqob5",
  "key4": "4yuzD3uYxES4BeDYrMRxcqm5TrbTmJ1FVCCpXJzADdEJRn9N1AeWi3oM1jHywZ9fHAUgjPL8c11bZdXf9WwDQ4GF",
  "key5": "2eMGZYL4EeYFcKWkb8s4ZCjBvMakAk5qEv4qd31qU6ExqagJTwcgrkKLYyZePbC51kua5pkYpgWKNQNy8jeKtESy",
  "key6": "2L1c1e86DzMqcvRK81eNAbfsvSE25gtantEZhJFm7qiJUT69uU2uNb9GFT9W6TZF1LgqUhgCq3KCipM4HmZEVttj",
  "key7": "4DBFFCszyCp74gqPuiDiXT2N9t5D55aK7oZHP8hKVZqLMfsLbYeKSks5cGrqWTF9gnsjuGnjKnr3XwbAWW2i3XHn",
  "key8": "2ZfXRE3tuvZy9Yjb3cRBJ84sogLXqqqFjvBAipcADB9aPE7BjYdFyXjRUgvVhkYykh2owm9LrKriCF6g8mb9P4zD",
  "key9": "3YpxiT9iSddSbESANVMo8FuBZPDYgEyzje4tpuPh38n3fTg9yPofFqkLRRF1MPYTVgYZShVDTXHGybvcmYsuJ1xR",
  "key10": "4AKAkCWmhR2xLmxHPF8177TsqT4RFXn5hunSoXCLst7xoPGEVWgoZGiaXyV27tSJru4KcwJZnDBn8WwKQ4j9qkJg",
  "key11": "5qofLSK7f14HSG4w3UjYUp4Xs2SAsX1MsKTY9qbHEwzs2KCQ8B9CGQUJuMyjzd8j1XSFA7kwzWxMUFFZigs9VKd5",
  "key12": "3DMyEzi38YdzejCAmu6DCtasyJYYzqUimM8fStTwdbweNsz7iywsos4uJRkujw3jnrqjG9WzRbmRpSnyqBhLqP1c",
  "key13": "4mieU8Z3FUdGzwzzHPbXokHLhq9Y8MVVGdAmJTNivQXgj3T3yB9rGcahrCnrdoT7qTpEGE7ZpmCr3x9sZWLJ2h7G",
  "key14": "2PyE9VDPoamWW1Ymc9u3wTHzt66gmJ9ckWT2ygfLLP5qofCjd7QAbQn2kdpnXQd9TBwtDqDS2xB9TuM79sZtP51f",
  "key15": "3A2CtiqJxxdzokuwuA2a12U5p23D8BfuUaKWMFZoEvZHcZEzgqb9XHAkzQjETZ2f7Y6mEBszruqynxh3KFBycnRi",
  "key16": "3XBXKDcJ51ZJyq8zeZCFWzuKm6kzW8rqWwFHo51jb154GsuavdzHFL9sy68cTmx5JDtVv62a1zwVAjYw7SmKNEjp",
  "key17": "wJJ58JQX7kE6w19KhgEzVy6Aa38Pb5nGLUxWH9BRf3sy9hye5jsU4QQLU1FSsbh3jogPTPJ9MZmkSMnSECe9cFw",
  "key18": "3innsFED5upD95Vyo22x8oTTc8M3Tc2jv5egQk1zjZNyfCxHwTttpw9bjkMWaeKJGyfT1qCP2oLy31FHpZ8rQCE2",
  "key19": "NZZ514SveDgTtPN8Z1bTg1iDZY4XZGEGJTDVGSWK38d8MbP1xTrh6wGAg5PMLyvjWavpgLXC6gPGuJmESaSBic4",
  "key20": "2vR1UVsgMPUajaRqb9UgCTZCRXmSznqzjzpKoHE41B6EMaJ6zLntL5D3CbKzFBFEhEXTM2Vy4WY73gqCQ4bsFb4b",
  "key21": "3b8iVLHHwyzFbFpDePhhu5gdCojKfxk5GCZr1vunJtVN241GLbY8xWS7uWnxEjcS1TbYHNbjyGLd8JkLtsZw3Xy",
  "key22": "3HsNMirVdJfZWfPdfaQeQsreAUukRvi19g43vXsfQqEaQUr34ohWcJae2ADG1ZXsQyWPE34pujc2XBQYT6iSCxsx",
  "key23": "2NSmwKmd8UfHaP5d8VxpmPJZFnvsjKBv2Qmc9R8GRi23DLdqhbAaLPaWbCKYzKsio2iTv2yj8zSoSrbS3iUf8E8m",
  "key24": "58FE6aDyRDfBFgGuxqoEGvDBNrrqyUwhBbf15gSBmx7FmRY7xh6vmNc2eWHZsfK9kAaSfCEK6Q9DqxyrHtVVcR6P",
  "key25": "TUxo4m6vR4znfhCyDCmbSpyw7TsUZcDJ8CpN4dvmt8vNivPjfnbrq6KzNoYmrE7W1cYAYPu3Nz2NW4mZeLVM5wD",
  "key26": "3meSRDMXAUiGFAqWmEkdFALpYhU9v6PMQsa41makrAf5opGi56rYtnk4ExfFCi7BHK5EWM5ivzuP9cXbAyEtYfKU",
  "key27": "3MZX5NV9EBUiiMFpp79WsYtnHs7cFCZeoXrmY1k5UkB1UNjsXPt2berfrfuUpe1A5Jj8thLw4TnPj5193TiPPZ2q",
  "key28": "8b3bwgZEcFmdEU4itorXecUvd7QmDKnVwDTxJeuxWtbwytqXWhuwwrAEECQw6oHLeoexxr4drcEMvVKku3wtK6L",
  "key29": "2xiaUHgoAhwDbQi8NcxksCpTDfRh58JtwGSF9gMZEEs65RDuz5mb8q3H2CVFXLsaftWYw6XowLR3a8meWrHVxXpZ",
  "key30": "4Hr2ksp1ZA13uCK3SWjhtHJYMtA6uyhQbq66m8p9871PAkkgk2hATatXh1jpPdiLv1ix4MZxVRBNhnGnnwNBZhyc",
  "key31": "28aweam4dvt7g11pBDHXeuyXce4UHGAZsXNQtborVF1KBL5jwUMPFnKksPqvtHKwtqLJab3JLfXtaeuuAj9WmGrg",
  "key32": "xPVDpkdX3xn9C2DpAyfdSob4jfE7nhHcLPDmyY8RqBgE7PY8m8bShCDWaN5kqDXt54PmftRvfCTqFVBQTXj4YQi"
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
