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
    "2rdTfyVjV98F8r9FXeLKZCmgvsDFF6rdWbUrDLM4rgh4S6nMWcrquhFQvWEoYGazCXjFFZXssLpp8J1uoTPZpbMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbqBcHn4X14997592X5rfiMk6Bn5xF6RDN1BEB3kghRgoHprbuv7jcBore51mCChRaHxk5TudXmUvqURACM9JzE",
  "key1": "5jWG8HFZFPVk3mqzS51QG4U8Tr2UgNVAFXf74wsDsLH8HrPuEo4QYPBbmW2GnoR6zCxhXRJuFaH7abYvnhUszsfF",
  "key2": "fz6BYfFDS8ykQmUanL3s29JgMtzn7ckZNRQJNaT1HV1eekMzhSxh7zcBKdYieXB13RDr9fUZ1WejXvvcu3McWsh",
  "key3": "2HvzMJ3htDoy1zvFDDhZeEAW9rnthDY7RGL748fDUf2664bJVczkBetT2obCfz43atHtejfJUwsgUo6GjZAiQ9FF",
  "key4": "5QymTFtkMNf1s8DhU5tEbjfU9DoyDYDYXFYsdmhb6srzDocDjLJvMHn4LWqLcmnC1R6pi3LY1aAzYhJFKCLTSFBs",
  "key5": "5AZu6bUhZeUu2dy8E5bfPtqDBwuwrxfefJGpsmZ3icTGbK9rf1PFsDpHMtsHexrHJMP9jkMJzqYbyVAy1oS4kaTL",
  "key6": "633K5noiN5Sdtcm7NkD6mFdsXJz4ciD2M26y31xdabEvJRrzXDwELZ6T1d1eSKQWZA8TA2LsUe2PchQNsnjERU66",
  "key7": "44StNEYTHcKmXdmG7kTG1GoRoa8FrXuwfJe2TtArpJUbCS6WPX8XMz8VNsjuS7otjfLjccptiDwH9uajecLpK9ob",
  "key8": "3AvYPvdQtUW4qcoWmu9GFyrkGQNNMWE6JeJEeXsJHgJB1y9HtFMM8vrj5H74TiN99cgNe3dwqMRhFVCfkYA8w485",
  "key9": "5AXFMi42Xh9NFfywVszYND2jUYy1zN3sTbHaToNgh1YuwPSD7QVjoHZYopA5gmPPGvF9MXfEBiqQhcUA4v6L3TKv",
  "key10": "24UxCR478LJNjGyy3iATFZRGr6oLsEnp3amxQ9YBSqKbSDJTYN84XxXmLSFzN9taqs46M6k2bkNyzcWXep9ji3XQ",
  "key11": "4aUqR2tyiGL9tkuPFQH7fY3RAtz1hoE4q3GwUhUVqSeFPWovokMxRbyS72Tkpctfio3HjfsB2QDkHNqerJx24J2x",
  "key12": "mQnbcPxBEAxVbWMQiYY6nhLsUXuEHkESN91MVziAjEySaiAmpKMarRvuUXU7KEugRW4gjY1fkYewjHEj5rHPGLL",
  "key13": "M3We5VJeWfw65vQXHmpV5iNwgD96k2n1LQdqhhVM8xDgNhCH1hw3fCcyK3r8y76ncdiQQwjqpjACVeJudSEBY93",
  "key14": "2SWm8SbRdUQG1ZGje48GbsXfY6rTLUWXA6sDiPWfN6Asb3VacXZsbSEX7jBrHukkX9zSFDC1BUVZ7uY2cESXDwUP",
  "key15": "34Tvh1zCcH4X39N7KMyRaYKkUEATwkGcY2Dfz9spBg4ETvYqCj4u5brezPr53PbgR8uydpNkLiP84Cj5BMCQXHZu",
  "key16": "Z7j7ETPYHfiVbjNrJXHwtc6GEcNASN1ZS5wdQXkMTpSRppML7QcVW5s7itKoMENqdHisieS4LamcHFYJjuC3BxA",
  "key17": "62LatBFPZ4esSk1v5YEJzetE6HPL3WsH9PwaKnK1pfXYiu1Qd1cCioqhBGNdHb8oWspGLv1o8cNF56k6NWdixuM2",
  "key18": "39SafAfJHtVYvC4d2dtUD1SmT81kC9fipeYUTTfBrFLspFwpvEiBkfqvS3cWzqqJKL61HGEkrZWn3XDdA5tDv9T2",
  "key19": "3p8ASTjbR3fgxHy4iWWGgukP3VAHeqoiPK6XL9zcpFkJDhL8gr5aSA2CVJeEuo8hgFK2V9V68upunC8iEsW3oB4a",
  "key20": "3UGzNa5PptDrEpqaMfrWfaybZX2q8zVwTSjvWoqPnRFov2JT1qYq9ZQQnduoaS3xRahcVynLBViASeS581u3yeeP",
  "key21": "4zuE2sQZ8vCorh9uB6qGUYhmYBpEUm9MT5hEVPFnmSRU5afq85Dt7FfPAtB3jY16WfrnQiP36EyC2cqafFfprQnb",
  "key22": "fMMiRsEzR8DQB3Dm9136pj3moqusTaSyMFsnouNaGrMZWsdhavjYLSHw54LUsPFcHWWDG9rZ2NA6ZSwjq2e6UbK",
  "key23": "66Fvo3BhxJ535VijzVqf7u7a3aQgkpXMGY8RAtrEzJGUprJQN8CmMQSfC88zTE4mRKjeA4gWKCy1K6BLW9rK6gXJ",
  "key24": "2scQ6uUDqGFBK6SqzF2rdd76nmjn9kFTq4o2rAvMwCtvzLudvvNSzpFNA6hvcUMbkK3yVf4PfoppDB7Pm8aTUfrx",
  "key25": "BW9QKhouoD9a7FFUYQjqFvLpDRBZR94ch9jCMcYb5MJqY5eC3zccx2QFBg1tmm9fyR7P6mAGauZaV8n6rXmY1oA",
  "key26": "4VgNh3mG5fNMfsu4HcX7wuoFB8htbkRwQZZCmPh3kvzWumKY49pUyXQ1jTrqou5niXC95bGS7Y86VJx26Le5RswU",
  "key27": "CE7ktBhMpReKMmRaFHVeuUpJg2vTbe9AabYSX8b6p85arZvAcym8DBsVnXger732Cp7QTXhhoSFpbugd39ndLGM",
  "key28": "2JGzy71SpTt6qtjMgJXJPHuSkg2UEpwkFDo8NTc5JB5WU1PTqo8jNd6dNW8r48oKS4WGyWDhQLz9ajgKUA9d7tA9",
  "key29": "5DhhNkVqrihvyBkWze7gYRcwUr691aaocai1HzogPwfqBaNPFGQ4edEFGDQivFyyLEPkrdtyCYPn9qYvZPED7dWi",
  "key30": "4HvBZasBN935rxGaXBhHekJprdym8ERtdzWyQ5PzMsND1FZUmeAEN8fobdGmMSTv4WYHHF1MKsSYEFbQzf8XBbRs"
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
