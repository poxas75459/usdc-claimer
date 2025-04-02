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
    "3fNeV13NTWohsP5BA74VHRBe4LoJgdPZ6KUeA319wcaJ1okHyqvnzt8cEQj4jpNh9sUtAnJRTpGBey61CA3vkX2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFWTawGcvYmu2gss4SDLXe2w5kW8x7Di5HYBAqNeoeK16YqGZpqGTFrxFkkWyPrKzpJ7LBctFwD3tZt6KUCRhGu",
  "key1": "4TcStpfWdFYqPs9N8g2j2qfZKonjndxe2e4K7sVityHeRXKt4PSnYpakb6RPp5BwGJALUMFhFPEYcUnsa4wLu9vC",
  "key2": "cuCqYERNWhpVhcXpsk5RhSew6RZCGGwSiuMfL6yfEDQxDS65Na5FtNqeXUrUDwFXzVuLrtZbHWJ8LeEq9ZfbwLE",
  "key3": "4wLvNfLhiECWtFXCyuJ5UtMZLZsqZkyUbAvf3K9BUZ8ETevSpukrx1wTkiS2q9BNrwB4MtqMDkqQbByjrT7N5zTq",
  "key4": "26KCoHgx8fEyGJeFkMA3xa5i6hAiWF9qycLNYgNKRaaSBQoDCGuUBB57xCDS38qrg9Jz1M8nPak61KwyN747Rrfs",
  "key5": "3pzhVEoQ4d9GPFZdhn9HSYbtgrNbhwMRz2PaHDPZpaUmL49E3D58jGXTMoeJeYnJTNYGjQCSeyC9bChcNK7cR4fa",
  "key6": "321AAt9n66oXApB5FDKKk4owqET1JgWdLPg3NR2zGs59ynxnBXNnJwbayREc1AMAhG1XpgAXXomMWxW5chVJxNa2",
  "key7": "PcVmvxVQcjJtaonU7mjuueykZHu5Cg4APJnfEoSHL8KEJXqDZQCQfHRTC7caPQyNnmxA7HSBF6vCGWsF2NovQbH",
  "key8": "3N9E1Y6xFEBQ2zXiey5wA5QgEt4NxqSfJqgCbYtMKictfAqkvoKSfQNG933bx5SPnFu4BGGeyvtK8cgqgCWt7q5V",
  "key9": "2eRHarhAqtTT8Ani2uYiTPaZJDo4jLAomD1ffnp6FiFdihpDryxuLLGYeXUE7Th42Ur1B4wUrXEusWKdDcvaQPRr",
  "key10": "257qiJFxVVwjwkNBNpSPsaTbQCUAUYn96Vv9bp9rVWhyJeZygcSbVi9vZDgmv5gjkQkekZB7W2UnPppchrfQfPmL",
  "key11": "TEQHuUrJGwYv6MMhjG5zqPDYb9m6ntfm8BEaSt6qLMXTRGGWNYFj2ALS6wqXqfuDqV2XbdhtYcFXNY6ouZzWfp1",
  "key12": "4uLFKer89Fz1ousk4AxKaJj3hWMFexohRAwpDWgDe935x35xrqT9BHzK7enJRBkBnhGJ3JY7jBpLoLgML7NSbYey",
  "key13": "4yU9o5m3NABnJbG7Su1hiznbjWw6PSWi4Von7MoNDSpZfWgMD5vceYaDUMcrLVmiTgf49MhReMFiBxAu4doZSVjm",
  "key14": "3C9kBLmSYzNU5Fz9JxPoVDAVktWEy1LhP5aHjgkFr3XaGuXnbgioPLPdiADCLAbSAGS7ts7rSddQE156quhsiHce",
  "key15": "yJ6EEa32QoVsvvbkPmGCyoLgyE14hJad7x9FZR2eRXMKuctmeB6AjoV9qXg4sdiXCAXCXxUDW2SBVAXVWHXgXUg",
  "key16": "WiKtidzeFQnzS9gkCwqgKSHaqzSGSagGvSMu4PjMEU6TiYmco1qSthZw3NxEmqdpqVBLrP2eHfSxV63fuVZ9Qti",
  "key17": "3LERJ66rANy8QBWmrT4txngGfwYkVFgt2vKC1WLDKUp42eAomNxpVy61cWLotzccKnWPopJ28VE6weS7xhGNcv2Z",
  "key18": "2VZS3444LEspnRFoBKQcwcxWKgubhCV1UQCfpiG8Teg2TjmvWb3wvnMoLnbqpxz2niaf8VJjY35RP3yxKTPLxxJy",
  "key19": "1KbGcPqcZjMG9QjiBAXCkBspooo3yrU6AfCuAqZsmGmjYEZStjwm1YQ4hKNwpP4q6ek9gbgneJC6nmQVzWYWYhL",
  "key20": "1237wsq5vgX1rdJ7D15xdirZ4BBcgqpGeBX8Cq2VefNkgt8SzH4yKuGusanH9RoJjzXmZR296NsDFygW8nNuwhdm",
  "key21": "3atHk7nLGnXNtcbzNjLYKWzov7Er3T79N3cKpzWVFoyDiahouJiwKL94S3GerPhKmSf8MssdRmQHDJxiGqj2VyF4",
  "key22": "m59F5auZNjqe3J4Xo9sXqQkdCew3FJYMomSZQhp6yJDrh2vhN2ZTo7fabkoP65uiLH7Sx7WE8JGVcUZoNWc68z2",
  "key23": "51BxC9bWJKd2U7GxtiZnnh2jFfgNZYSbbDqCpVgUP1HK5qhAi7ZzofxJtQm2cn1ngSGiWfu5Um2zpkz3AeqgdA73",
  "key24": "bW6MAEg6i1G6SgDXqFDAbsRxcpj8kRCxPyewrFsx7DQpJwNztSoka1nF6trsTPDU17b499PEbAHnU6T9Nfe3ZFR",
  "key25": "5pzp6kVgdKeVSRpbe9W1Jg41uZoGuFummtCkCvk4r6DM3Wnu7BztQHhQdKgkbYnvUVLLi9bNHyUvjxBKgELgdqFg",
  "key26": "2B5LQjtPk3BnDW6fUMuLi2dKk4cez9sn9zrJf41GzbF3gupxpFqoZ6qjTrw6sj1mBASQAw7mnxLK7Vc9Wb4ijbTC",
  "key27": "FaJ5LWQgZeBrvkzZhkpq5LkMvrYipXQ3VoDwLspFooz9XminYkyrNhftZ797YfXMNBBhxGxkfGiLUuLHDhx84TK",
  "key28": "4qtRWrN9wuTbejgeeTgmNW5C71M97WgwiqLRKzQRwJWxCtjRdPrZ1ro4ZzwoZEVadqJx2Gs88NoBW5236icpTZXF",
  "key29": "gKMokcuPjvA7fKEX9NpkEE6WJENoUqnvq2zfx7R234fzT2wUqXVqvVvg7Y13yNCVgNxE361RDa6L1ShFG6kFCjX",
  "key30": "2f7dhk4ccK26ujpa2j4wXku7pskMbL6J8oMempaGYTC3ruaDf8tyukFUG8B3pqbUjFKE1SpWZUqySqmx8eWg5gct"
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
