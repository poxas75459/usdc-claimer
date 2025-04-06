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
    "3KabnF6JWjSoQs8qAnknq3aT44oJyijrehnXofKVF4R1KjeAe2onpsiv6NyXRZj5SLCQ6ZPZxBkURKFVAQ3a2Gxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hbNLjd26VDXi74p76CcEpxiBAfTNP2EXEr5P2urmMaXbFfDq2vSnmEt8LWgiRA3ptiaVaTwHrcQuuGAs24vujdn",
  "key1": "44yw56s4s2UEvtePg6Y8UDPss6KXi5oiKky4euR8QKs4ncPrfC2NeTkPiyne3WdjrNcinVCQ1T32CQ6w1SyjdAdm",
  "key2": "2sNxQA6YGKi1B7G15ZtzkQh1u3ybqpKECkXCrz3uCcsVTVnPCd56n8bitL5tTkqNMtvRdEzkVrZJmG9dQrHYE1jM",
  "key3": "25pkk1WsnbbiaYBzVsQbBYZmKJPNfzMUQ4H94mTRcvNtYFgDEdpgqopJcCFHeEykxpRoMWdCjx8buH7sq1k7xaZr",
  "key4": "5FPuy1B8DdAguaMnaN89Mtu99rQ9kQdrh36cu7ow1Vo51hbdTeGBcetVJZQfDhuzSzrdxSweA5Zr769vpM4BvZw4",
  "key5": "4h4jzyy8PpjNiT3R3RLHjyrLHebBt1HKxpB2rcXM9XzQsrriPZ8Hydsh8k2qjgkhWfTqzNHMJctdyJXS7HTBbwCx",
  "key6": "4RdqsDgqUuWPgEJEfPqCWQoC36wXZNNetfxDxEvHKdKZ94sgCCeVe9FWUJXkTuuwW1a8YxHNCASrbat219iA6crj",
  "key7": "4GzbHExiz931Dvhz2k8uHnng4DyBUAF2ndkBfe6eyoC75TU5Sr4web13xDkE6dLsdvMuciw5UNFuRPv12eM6m9xj",
  "key8": "2gp4aPHofqSzdTm4CCVWBzz9aSGVveCUyAhkqAaviyEcCLeUMAsFPMcJr2Qx6UsTAyaLHvZGkPykaRkytyhQUM7G",
  "key9": "4TZQ7e6smrDGheBy1XECnGYTkzWSaintnrLmPSyt3r2zkqLr4kZPJgissmm2kWHfG3sVWuBsrwBYBY4Fjbf4viTk",
  "key10": "3ADsWrSKNg2M581zNChdKemneLKdgNjZz3rEW6uAjn3kR8dZoEuWfcMMYwZXDaxFjWbWDMUe3YHa7dsRNnNeMRC2",
  "key11": "5rbNtxJJxmJx85nJDjpc9tHu3ueR8vRPpe9FGtpJwSMfUWXzp2En2S2sAhs5GQ7mq73gJXGjJFt4MAzWJLopeAq2",
  "key12": "39PaJWiZqZze6hK7LwiWBMHdJv61L2YozY38Sjy1HgKcUvWGJhxPARuvfUpuQtHQ5Ynj8nzpAU1BCjuLTvQmQBTS",
  "key13": "3j2sDgxbsgqBHsmd3HjtP9fXnhMQGyf7AeUipHEBUBha63topEdyjux21rrCSYsWHVFoE5YyMM4MVDTW1ivSgwmv",
  "key14": "5utP4KwzZoA42zRpNVp9n4H6GWE3eXsidKhQJKzyHVAEHRqEa1VzTqpmUvsWifoyFWndBgdgk87RFqihoPFyHrdn",
  "key15": "J3Q6f75vePMBpzBCBwNF1to3XXbn4fXP1v88rKpGQ7rncN6kg8cnKQU5bB22G5S6iEFPbEWBetavfKJTQEB5YXU",
  "key16": "YJZhFDmicR2U4BkMYzpbXJdTE64qjwyt1skf87K6w9K8GgaiEyQFoGa1TskNqAYUJh1dtVLe13SpVkv9J2AgiVc",
  "key17": "36FhAynGQwu2wv9Y1W2PVQDQEDwN2Z3hcDEnc1QGksX52u6XgQQ7nLKN6tcCJAZpXneCQfVGwDyGnXxrY4y9HRsM",
  "key18": "mtz6nb5rapTJptsaR59gK9S8QevpTSxwNGn54c12Fqy5nu7ghitUTCcjgznTuSU6AbgBJrX2g57WmTRvDVzUCNn",
  "key19": "4AyxMGGtziqhcEcnauoo1nU2RbioiRvLYFbgUN32PDE43wP64vYCF2Q9iP9dQL3SX8LPq1fWauoFgi8VQLNkxBxm",
  "key20": "5QfFNY4TTiWoLXMUde8k6cxPEMLGMoM8tgSCoMAuaxiYEKKgU5YCjwqw1faP19tr4yDEbWddrfA2xxLp2X4RiSM",
  "key21": "3ftBMbWz26BshANG76rRFdCBH4a4i191Py8wz8PMSEiPzhoremQtJXssBhtp3HRdDB15Apoyph5A99xy6ZxpV71K",
  "key22": "xeaPNNpvRWBt8d9mrxMWG8ebxavYiQoauXogmPyheEJG7et2zRExC3KzRYssotqiE4V1B23JTyGuLgRzt44TAB7",
  "key23": "5PPk6jUUMYmTTmuzsWnTLUZ95b4EYhPGg7kK3TXfY4npsVasiBWnNTWhUQcjA9hfyWGtAF2AcZLJ1qoKGtJY9REP",
  "key24": "4r7e1AwLZcDoLU8FnDFpkFu4WdBsU1NcuA17djL1D5vYSFJZiQ2YZTrU41jGuoeTPjo9WsHJXSXby7ZadwFi3pyb",
  "key25": "4FuX5jVEEccdhDRyhGTpHMkdfcAmuQNANXTncWmXR8axviDbdKQxqMHPLPNeiGW57fE976CzJv8vijPeLi6h4yEZ",
  "key26": "3ULxrAAiuxopH9JBXNs1a6assM6fChqzygdru66QAuTfLAdJoXyTRS5j1PPcSknZmnTWwMR4Tpar53seV3T3q1ty",
  "key27": "4ucLNJDUzSrZRQxAvcPhW9ekg4J83bxQuNL7oEzUVwrrbjsf3jnsGHnjqKF82UqcckV5PC32BjjQ5VHiD1Aj2bsg",
  "key28": "BKZWmGRW6K4GVKw6HRyUnomtE3YP3kj8hbYzPuyGRfxdPHvQrTooSFx5twJLWuj7it8eQz8m38r3wVsKUt3J49Q",
  "key29": "4v53wjMf7irGWDqRVTBEdWEBYCsm6dngVqy7Z8oTFe4Fjn6PWqz7kE2HkcErJPinokhvsiBDsRqfqWqEi9kAEt35",
  "key30": "4HkXi9xPwG64mZzfptL9QW2uaiFrzZPbTWEaSwBhhNRvFrdQy9B3tEreuj2WHQth3jKkboo86vBUScBrhhhYzFe6"
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
