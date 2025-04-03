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
    "4tWgy9gZ2VzuBTc5ismm2Mv7AWnzYi3c3VdN3EG3DH126Vn1wwgpXNpkdQ293cpeD57pte3kaaZHwG7rrozEJtKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3793hKqjShFzfyvKYF8n7MVn4TGiVjj2zMg15hHZQ4khnvxtx7LMn6UTiJujQT3gYATSh6iUsnQcjamZGufBPqg2",
  "key1": "6ChTmU8YKT3EXp1oae5qY6Do9VrWSLXF3HdrZqH19Vx61zWd4PK6omyLmmiujcsXegzqB8WnwrAEvkVFJVLfoHV",
  "key2": "5VQmcrzzFtdsrYxjBs7JsdQxLystYX48WDFoyhhbfEeyimH5g2mC5Av7ASX4iUL2G9rq8g9AsP12pWCjpHZze3WL",
  "key3": "3Y4jUu7WCr5bSDKDHxTYzNtk8huPuTeVXKiv1hfDubDA5n5crp8m6y6TLL2aNPqhx5Hg9XFvQro6mehwBVwFePQ3",
  "key4": "2P9v2qJdh1Vc28c2TCnuerkLGuhasRAmo8WWXkitnU2RYLrZKWjm129Bqosnu6CpcHt6tW275B5mehNxx9UpaA3h",
  "key5": "2RADaE3E4dL4zMVSYvD4WJrEiQnKvxgTtcmTajqFoFqAgM4gswaqAgui42WkCZYAr6WmnYMW4BQPDF8EDUpFjUr6",
  "key6": "5YkfqXJMtHMa6pwBxB8aooJVvC8JZVHJNmPdWXgYieB9d3q5cK8Cwa5F91p9jECf5quMSvKdpJwffSTqmKacimgu",
  "key7": "4Hpk4UnLWhcQE5dFKVAoshuJ7w5T713ujBhPXmsmJvLm45Jvp8NxX3Gk5nA2Lg4dsmHkqY6NCnxfPz4CkxqaPUdR",
  "key8": "2AaPCebEnBTohX8n9ZAiv8CBSKZT6ZZLukExNYSDK83AtHi3STDJGFun9LCPSpwokGu3YFLvPP2K7a8uNNCREDPj",
  "key9": "3KpxEYxV8rDzUvqMmyaLqCfhgEn6N3mzur4YDaLSorL1hi3DL8iZ39SFDqDNQAbev5oL717Vm25JmoiZkkEcStYz",
  "key10": "3yAiXxQuPLoZ2YmLkTfVjzEbGycNc4d46yBMApgWmvNe953Z7s8gfjhwQ9SHEBM7SxfBWRgYMbtWQAQUaX4dpZa9",
  "key11": "RzvqFnQn5XqhzK9Ee9GRVnXhh36r7QMEfjPK6fxvztZLN8jx788esH5cNKJgFV2sebzNxZCQ4qqsmcKWHtfezpF",
  "key12": "PPm6pVSDZd8MQG3HT8p5HnPShXnqVbERqirFXFCQw9hEiDC7TRBWopLK686eYLgaSKSwYmsLi1ZBfRxt3SAWGAe",
  "key13": "2P7Bwy5GGo2GrS1Lnpktdni1X3Mo8EaRdkucLkyBqbX8F1FECEpUZ47yWqC1dhXmGsuDxPPREV6dHbpqoJ1buwds",
  "key14": "tsfcMdMoUqSLxxMPwtU8PNiExzNW5fyYNZofHC4peLg5tFGPnk7C3XA3EmHbbdue6SF395me8TNnYFNpvZGX391",
  "key15": "5gCjChoguukGuAtAhkM19FULfYnd5yuU1yfsRy2oBqPpjs7d4guakhoQ19T6Z8B9zEC6xiFgT4gGdy98tM9GqTQP",
  "key16": "2bqZ9GDfBa4Ya22o97Fkn6YEnVyGhN7M6sDedKknewjq6rLq26AMUTshfySxpVFDJUfx8d3th7KsTBGmNpMKDDNA",
  "key17": "5YAvAASfjsyLBERKm9vhi6tHaeMJ4Ej2AbbQuuTQntRjXziPrdqeG3ZQBoSDvUQCz7PVLjtAK94YKnoUqkBtc96w",
  "key18": "2FYSLmdVGP2j4UDD9NHd2ffsePEnay5rfv7y76HNs8KbvFWoL7FREYU2wVpRvHdBGxQ6kU7iGxnayeLSizSxfBse",
  "key19": "RMdxoZyj8QhkMx1upLHvpSeK1yNADdBsRVPwJFcDVigvTycjgrp6Mn4GrLDCU3QcGX7qiE6v1q2i9UQjeBY6vj4",
  "key20": "2PD4g7fMWpuuNr4zHZJNFyxCweS55JpzKvEXHPiRPQc8Dc3t8Py58V9jo3d4nXAPsyKpVo9yUFpBKsVcAzTzyfEY",
  "key21": "5WbrnM1kZejrKdvWUGByupRgWGGzU6DLGyaCDodugsbFmESA9q1tVqPd5MWR5TqN4evUtn5cSUec6Z2KS7osWdCH",
  "key22": "3f173K5h81XJjJmQwZkkczTSArrvoBPz2pGu33wc41gUFhTG5vh79dzTFjmWPokVB2WZD1486K7p8zd995Srcvnv",
  "key23": "4szrvPdzKNdK7YadTmMBRRcVqneUzA7JQYhRB5H6Fx9MNNc97JkmJjzfkbWC8Q2H6MYnsVrqGQca5nhFVg8UgPxf",
  "key24": "3ciJRoeMjxERYKHpYSFtD8DFe6PkNsjfBY4sy6Te1jcvDUnbhp5F6Gpteg4oaazTZghmtB6boAmAvcuNj8pfyPxr",
  "key25": "31Jzm18nGjG7ESx2XgmD7gEnPNxMsEhY77YfVmEiSLVAyFvTab52dfYD97GUUEMLkm547L7bCabiok5jXKTAvtCa",
  "key26": "CThSPWKvU62iV9C7xQxyoE9BvqP34Z2HtcCnSSCZUidrq6kGQphSbGEQtc3TtwdC8xjj6kcx7Zrx5swavAigB3W"
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
