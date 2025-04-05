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
    "4MpZd8kkU3kqTqgKKWD5cNKaxcHU548xByFugvp1HnLyVh6Mw4GQ92rWk8Yaeg3eRDYVPnS6TRBfEZQ9Sngx6szh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aut1o6gjkDEQEDGM1uVYqrKvEDYw1yYAdEaVQUykmjd6BPHf2bGGPAvqfGazRsBsjn9GQzMgPgqq1MEGm3M8mLD",
  "key1": "4GjZGkPpuNWqASUimWRbj5ysjstu9v2u1UC1qU4N4YTzXP1JrRLArnYDKsoiPfBrBqbUR8EWRNAiyrXyAAWP1tJG",
  "key2": "31BMi9hqYaAFrzMZk86ZMqh88kxAo7EG7WdYFx56DVuAwLE42V9QvtCXjdzPWwKUXfroCuxoc5YNeWKZb1ZU4qK8",
  "key3": "24a2Cb2ZUkSAsvrgoSJ1ofQizDQxJYcmBrQ47jvwLzZs4o3aLyGqLGzti3hyav57a7dA1Tos3wPdYDHLUyku6m6f",
  "key4": "5ZSTRTaFrxizJugUFHCqpTGgP3WJ5xyW3nZ6DxVkDaGyErJR2bVdEVgZF6prDekH1Hs28uognXKkPHrK5waEdvM7",
  "key5": "2cr5ALjGUkv7z84vwG97mzAMnJn7HxiNt9i3BFaTaTkYjzM5RpPkrzgJEUFoQrkVZq8aJqH6qRMzqdAspmviJr6t",
  "key6": "5J8ZysAZVwZv1awNhygg8ZZuvTJ33i21pdndL32M3G54tH4Kb1GnL2ovJeGKeFt7xHcYiHxD2ygQhfb7z4YiMWVL",
  "key7": "43ormzBh8tJS7ss9UTZjrYAVYZb3csXPZ37Pn16fUA6zjUisaxVdhwSMS6vmfxErjEQ48Xp7PgUhA163iaUwgQAQ",
  "key8": "vnpJ3S7i6LQGFsnYr3ou2hfmjiEFDfs3KHMDTMaPor3fdG6pyvtdG9osuGqPc3zeT9RM2yNUZbRwo4qTBSuCuxo",
  "key9": "5AtaNcmGT43kpzWBYGnbCa2a95hmbm1koJy8Kj59ZmgcqSe56hZL2FmDy3BqUuiU8ET2iCokdqPqJP9S5hQKndTH",
  "key10": "4f3FL5hLAsG5suDT4TNx8qiWrJfMMqHwgScPvxRfHgjav7xjLsifbmfyFAjw3NbQWMmvaZWH3gP2EUVWq4u5YdaQ",
  "key11": "5tgq8wamYSMFwgkXdLE6kNmmCV2hiqFXhLUp4WaxLXB1LL3nTLEpcdxQuZeCouZfdb6PpkimbCUH9t8qJ5s9NDCs",
  "key12": "37w1MtkHCFMNiu4SWyjgD6HZE9kAhqBXzNxpYJoRFkTUyLjgQVF67fA7dpdBX8ZAH6NPvLtuYB4dYUFFuk4mD6g",
  "key13": "2x61ZstD6xBxRYdrye2Guzbbh7Fek2gKQ2PDWLjsRzKnssy6gSQgKbitsNP4S8kzCNWu28FjRCAPEFWqbDHatkvE",
  "key14": "3Q5symP8uSvva23Jye8kEEdtpocKPNDmkMs2ZEG7GTCZFyd7qgvdhregA1ZQhbrvP3zXRTJVJoLQXpc1Sw9GhzYM",
  "key15": "42FLJcWbxW3SV9b6YvbWXVuCTjRDG64PPwxdRFS2Nwbq37Tjnp21nGt4tBwLVN9y1FD3WMqDe26iCsZA3ZM6pGeK",
  "key16": "2RybEXMq8AuS4bCtMKdfApDzF1MUmM8WFiP7nSof26DEeHBegQMgYLJHTRgUsBd8Wm18RmiroC6CEHccgyfnEcEb",
  "key17": "4pg7Rj2GUUaw9SmBJStv6i2s17fkphXXE1pfG69Y9pWqzX8M2djQa7VY5zkdZhgHd2pEu9vjKmRHYbXyV4tqWKqF",
  "key18": "4fRrFVbYWkzNt2j2nhtAjao7qMqX9XtAKdVEBfnfzs6B96dzedH4kxsKbd3JTxrYZqzcVi7MNWhBZfUec8Har9v6",
  "key19": "3hrLtN7ZAjM1AUtvtnenJ9Vgmp7iZ9FRwrb6ZDHWXzoEwYYX4C7FnjxQ3VgweMncioN9QtRYgjmHKYpf3Wu6tA6Y",
  "key20": "2Xmt5XwS7AxQxi3y6UA1v3y9b1oQHFS61zXqJDwZYL7eV3TTJVa7qb2b7XihPxNATWgXtoRfFEqKCbKvFgiDHaDT",
  "key21": "3YE93dV7vgzgZnaY4JfHbhJ3VwHK2cEdT9Gj9zQ11nBUEcDaFZxPwMReghBLRioxz3iLkKYMiegUHKVoUZbBb2ss",
  "key22": "4kSCFcc7sXTXzFAJtwT7NzhsgFf4ykK3asmdhky5PcUaqq1VsCMDGQ6to1EQmvMcMjjdgDXjCrrqHkjmBYAx9d4T",
  "key23": "2GUxq5zDK61PsDxS2y1qgTr61L3NAhLXNFy28PeQu8oNxV8iovacFpneFcvUn8RLwDuFzeRE2VDZW19jxkhpP5je",
  "key24": "274KgNs5epyFEGwgnPiVNW3rd5JYJmxKKnuwH4UpffgVYX8VbJjJ9RWddm3fTcNkxptsYtnFAob1p6kYfeGfJ1qw",
  "key25": "yoio6zqZZHvWkCNP4xxJkAPiez9o45gKg9JjYjmYLaBbK5EHJEi7ryXSJFnzBfwCLy892xfijGiwEFQub1tjaQV",
  "key26": "2fJNyCDkWEZ75Ri6454uUFyhAZm5SYNZFVEwDwBZXkYwmHF9GgBTqubEBptYWuuw72jKHefwTLRiNa7FkDEPLa6m",
  "key27": "2oPBsf9ZR5GG7D6FhTcVVBvxk2LpYYkTeVxfe17cJddNHMCtgy4LE4iQkDJrtjPnJtvU6hmMtczwTcr2ixPdFbRX",
  "key28": "2KSM8roqwr8nqPTUHjkm8nm465SmtxcubpQCuwmMBQP8xYhrknt1MD89gbpKwqna1sRcgrdQhicKMMDdkqQmK3rC",
  "key29": "5LALAYAMosDwyMHdTQnUdkkL3HvRLTS19cf5WthXEVwHiCZj5WsQyhDfWYJ1StogSA9ba43rRte3vaPNNwJKGqeX",
  "key30": "65cxR2Lgk3rmYc9Sb8KRaRC2p6gdeUxVDECraCMa2vudCjkP96xhJv1odJm2UDmER8ocZ8H8fch1KaNTsXGLt9XT",
  "key31": "4pn7AojG5XPqkW8C3vtp7UoDJ98hrRbBY5Jy9LHTvzi3TxHnnAx5wGi5noBvKUi2QjfgehHbod3q1KdDidMf4v5W",
  "key32": "5cNbeBAgZrYLv4cDhCTDXwiinArXg7ZR9oCcjDC4u9usUKyZimznX2WUAK4f7hywqgev3HhCEd2rGZaje2yrhLDs",
  "key33": "2hi8KXP8WmLA7xzyLEbCXoH7K9LnC5dYEsesiHJDmcwyoKbVfpHCuKNHTyfEWJjSFcFfFRmWLcKg1bwH3ATXSmBQ",
  "key34": "4oeS7EX9AnC4vtCRairnHmv8kegEUC6nwztbEgQac5Sjabt1YkeTrjKof4aYC4N8k5hB9St7d3j3FWrjYSRvgw3W",
  "key35": "3knuAihFX1GrWC7SuDrWDSniG1bfRZz87DjsCw3DQjBJ2D5ca29sE9hpL8bdXHget8PgFUjFTBqynxGp8TGKQeCV",
  "key36": "5Drba1rz7aGjCZzRAU2fNiiRLCSjH83pbHwhQNHADuZovBcZXrmR7FNt3oNxJLuH2DQ6yq4ABbRhmV2Tc5N1eHWK",
  "key37": "4nd5kmVD8mhs1BxmGfGAYZCX2xBkMyBApXQu6Luv7av3r44qi8rFZaTD1RBVdif2YxWzwaiS7QXWX4K2GQomg89Y",
  "key38": "54cV7sdbvEcdEFS96KoSrMPMfFmjPoEpe2gmwFpVc4PS76P7wZJcYcEP6t6eCRSjsjZEiWVM9K3VtB1TXbpJHhCx",
  "key39": "34WAqgdr4AHfyeqG3zX4BUBoo8xMpYHax759LTvCwb5P3E2CJcaLdimUaHR9ZniokkkkefCLg2fc6fD8qQW1C9mn",
  "key40": "2283vrmG8vJCe7Nvxj1A8ord4iHVLxDm9r2uNzEJ46PTWmT3HuapUembZTzuEioAdSDtjZUwYsAmWorLZSgX83yR",
  "key41": "sm4pfajRz2KT7mnt9KT4KUj5SyhPKW4i87c8UuMG9wTBqktxTQjdGpwJdNh7VnX5Rrngw6VXSzjzDZzNwmrjYTz"
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
