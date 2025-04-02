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
    "4j36VjXhcoh2WoMMtTaNFg5MSMhLcnwLQNdPqYy88NNuhxickCcuy6hnogXZnnPbViEDHz78GNhnPsPxPZcgnEBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiBPppksg6EHmzcVK9b8AmHiMbmxszEq8RKoz2jvpNRqnYyUs7KDzkUfJWL8iB2a5M8A3QVWDPNPDU848J1shF5",
  "key1": "5cNvnqcg7dLijKXvxXtWkqs3kJqfn22FU2qrRQXY8ZmayXxoC8aEVxJG3aTdeydAN4p3dLdNPPdMjGMsUu17taDx",
  "key2": "3vtpNwScdGaQkANE6bXhTCLvjEwDh7wjSNy7QYkW55FCQd1Ptz1rFfhSz6U55WiVzZvVintWwVx3H27BWk9iVTUW",
  "key3": "fpmuV3gaXLBzczD6Q3rXVCFdHwy5dytA1MvGvAi6NT4Fw8pAaRpd4q1Qexc1Kg8h6RzbJHMAz2i59MPgmnhYrg3",
  "key4": "jrGBDuXDesFviKEkWM9PGGDeHQdA7dQviB7WfWahDqenBwuJnYsR2dwkdANHHySEiXgocVdWSGgUszFNB64za8G",
  "key5": "2wnjfZdirV33t6Y2WGLhizGZQb3jM45XaDGYFwfJnDusUqjS2htxxscndiNx6aR2RScwxHSWYKMKbkyLZzaPFqWm",
  "key6": "3V54VJeQx8ZFHvhMwZBM9xA2Xetah5MwBiorSiHByaCKRn8drscUraMJZAiPJTToUvVdTqALcCF62VZtHmd6wtD1",
  "key7": "49DSZGRFkvAjbSeBXMysD3gtjosWmTJ5t1KEDqXN21mihmputMsdvDRmE6srNjrf5SiAULdCyYKo4yCsXSUULKUc",
  "key8": "tiFJRCmd5eCSbcGTkL7KZCtkuJ5PE76oXNwm96C7uq3GhaPREYTptrC2xMMVKvrrWnczmbWkDHtUok6p4Rz2o1T",
  "key9": "oprFEVxfxBxN9xgTwnvHKepEFATCg2FDwg7dgbiWoGGETi7iUBE8fBCxpUqUZpMTYRq6DUzSHUyrArH6jmNZiS2",
  "key10": "5hiaAmcDAZF4ydAV6hpTkkq1rjabxwbNzePmoS7Vot5v9Gjm6yV3LSU3VHtwewaps6CQgRiAimDUvkQyYfzngL2Y",
  "key11": "3S1o7isu6fB4gPbHTcmfCS5ziAxeTdo8sHt9gVSobFu1qg29y8y3PxpubH8uJZWC1D1qLoWN52iuK3jJgMZuUTD",
  "key12": "UmvB6BJzQ6psXRk6eRobq11zxN1b1q1RumJ4BsdgrCAX3uxd5bmpYLz6b2YScCJDSLPvxqCcpkrHDDqBsGqzAAr",
  "key13": "5nxM99w6SVDwsgEbyumbF4F8mjVWDSGfgYxeCP1X7g5evuoS2TNEinSihnSJucvLMyRyw4CdBP6jfbvKLk3n9yha",
  "key14": "2PbbB38T9DFZ8kQuTi95BembXZ1hdBS1SvcoCJiQgCkcBFgdMMorDcHFL3CDCZhXftaTkHKxtkBVtooa8wb9tdsZ",
  "key15": "2kJQMEds9b1Lj1fETbzX98pqgZWfNWHo9wMNvuQG4MSKpMvsnKKPjcuVTEqSTFugCwvXykGFHLWJvhudNGDZCuNU",
  "key16": "5ndZSiymoL9feFb8PVVCvDxXfizMzmiTPV4cZe7E7e1EChtEy4KyvxeX8UpXMXZc9tLBEkQa7yvPhMmLraqLMkck",
  "key17": "2GPvHxpQGMiVx4S287Zx2xoMWGHhgs3kABCLkZv2hnqPDmLLmkRFxS1uRMb8xUfbehA9tX3ogv6jUCKzHBDcL9cS",
  "key18": "623YQGMyfBwLU4hsg66xzD7L1VwGrMCqkwbw3xAe2cm8GXpUKES25GbB6nx75HuSuFL4AgcQM88AdigFrTck3uck",
  "key19": "3F9QX5uVYk2fas2sEuT66gsgKEZvdr1HVty4H6nLYQgJe7afA8f4rgwUjhgt53fqJWeEaBLjBJNCDdSQGyKEowQt",
  "key20": "5x8JrWGDp4XXSz4z3BcKcpmaYmi4SzEmy98cdY7ejgyuSDscDSXwLitLP4phYMEgBC2rVUMsStiWZs3NuLtztcmr",
  "key21": "67j4TJxZ3WMbPNcRxqQFzoCxKZPs9Vp3vygiwAut4PhD6gAhDquK2UBNhFByK9MnCVLWT9noQrBRMB62GGjnNLkN",
  "key22": "vYEaxZdDdCXAnco8rtLn93KhenG98Dan2m75xFA8wNo6W86Mde42LsnxUjBpfdajt6b6JjfBWDVvUeA1uzyMeod",
  "key23": "JpssZiUFpG76tCfiaWb88L99Gji6E1KkRmxPSh54VAheRJZE1rFdAZfcb74Rpm6fUacH4QbuJa5JTUiX3LTf9AW",
  "key24": "4Sv6Hn5Y8891PNkqvV2vzPeEBRjk4oASqiwFttvoXngrLc9wgAN4B1oJP59Vn2ZRvDZLtoiFKYo87xtWhMm6UHGX"
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
