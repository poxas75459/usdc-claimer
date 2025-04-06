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
    "4BGZRLh4UDErpSXAM4aHv1zsNrZSPn9QZTS8XqRd57EUXLV7mrtwDhQ4HiCrAdfDdo3ZNdABM3EyMxyat9dhK4Q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiYXpdYzELa2anypxL1RW1z7W8zndvrSxE2UcxTvefJBJ8Weu8AYJxyxBhMdWy8MbpmJ8dpQ5navVUQD4ERGanU",
  "key1": "4c75kbs9oZMT4NXMT7rGpisNYPtQKKUZZssSnfSCFRvXXQMxfn6LebeSRb4TcdPPf2rRRV3iX3P5AMRVCSXoc6vw",
  "key2": "2MMc4okCxK6N78UM3FnpRDRZruxx6rNfX5pEkTtcadjbF3iEhhNWsqYKRU7DzocS78uSWa5iT6bn6VxAW15rfzpx",
  "key3": "487UtHsoZCPBn1W2ncBm8xN6HBhKP5feZNXaqBzybGSNbfrjPmoUaQA5bMETx4j1MeupX68wnXMFH3N4BwqVNSkN",
  "key4": "65Y5zXLH9kkc8ZyLgP5iyFifSWY4ASzvqsSR3oQancSdjfTdXqDK1byY6zsDKEdpnH6oxDQfZv8GPWAtHZT5MPqy",
  "key5": "5DnMvgBCkigB7VH7QX95vXW59VceA9k9TsNvhVwN8fNPxkniYoPjx9QiFqTqojQJQSqtgqiaN5QR33FYqqLywQay",
  "key6": "5etFgoRW2DWwEpT2G9Wd3xsUfetX8Y8etqi2CpYdkidELPBTPXHXVvnZ8LTQGHggLuyp68Q8LMBSMJHmW3xEKzaw",
  "key7": "23j2cwULsLdFbz8CUzdtMrRbCx4DQbKK2cC8s8WZAj28j6U3muJf6Yj6NBVWwzXhLGZRJKAwfcFgPziuUFR8nLfP",
  "key8": "vcsmCLwiA19qC3aYpJigdBJMjpshTjSo1XvSzqUuyGz9cBsnT9j8ptm9wYvuftLYtydzTQhQGGHF6KHX5Hucxh7",
  "key9": "5wUMUMm17nq8rSqtZ1P8MV847PmbDvRxNKB628qYiSFW44VzEEv1bKP6ToWReEdrwXM1jY6CDTqbTbjyegGgWxtK",
  "key10": "3XdCuyYiZ5AyFMKwjRkWYuqjfqu1DhLtFCZkx8smuRgAQ7NS9stFXT6vySy2P1FSvPfr1qfG2ikfBV3Fjt2ACyBY",
  "key11": "5Rcbb8XjaBc25X7hQrD5EMqzCzDiXVdzuxwTTYdizAsHVBySBixmMe3k58oLW31rdU4Q7Kh38oLBCw2skFaiwQVM",
  "key12": "3wXSRDvtezrM3FihEhC3Z8wBjdD85eepqfQSPKR8yg2PQ3EvwJWxFknfmnyHoTuU3ZiVU5ugezpznaz4LzbDBwMb",
  "key13": "5bvqW52pW54bke8FGX7jytzfGACmzWrdJ85teM41qNbgybNqUkdW3qEt2MnHb39v3bXUzuWbkjcPx9khr4zsQGUW",
  "key14": "2Y5juuWXa6iw8V2Y4nDhwYU6HUQXR4L27a13xw694dLBYWDGYrBvMziwRoApr6Qubgdvg5rQwV34AydyH7zm8T4v",
  "key15": "osvS6TRXKHrY8rmyxLSxRE5VRkp1bFbnsyh2SLfC4pg7LSU8jKyVQ4zY9vqbFYibRCpP5Kme7Gcngytr7K5rMwj",
  "key16": "2jo18aNhfSjjrGk8691SsuzKBbBkaLfVe3D77TGdDARd4m81Zc8UU1iTuGzaUSSTMBp7BY2UKpJwFZWtqgzLDYmK",
  "key17": "4fVTKH176QiJcmnxmGfvKNuH2g4GjtgzDLZD4i4nsQbAiudSkj6aPLDraox438gnad3jXkH6EZFtVgH3fHCq99G4",
  "key18": "3QTPWbqwP5ZSs7NDh5DCWdKRBU3HQ7xW5y1JAacWUXCfmz6rarH5WBv2Wroe96wfrmdrUuUAFzzbshYW8NQgbW5L",
  "key19": "2tRqep3H54QUk9y3Gt3GE5f3z3jMzRNLinzmVp6maSkEXxgfrZFBJfSjyUWouyjGYyF4W34q1Sv9PJTUMKLrr9K7",
  "key20": "2Ku4kpJTi2TwmdZs6A1mtX7cCLMMKd8Wuii2qZYZT7nUkDSXEDZyNS2TpZAGW9f7HScWTAvvZMHcphUSxsAz5d7G",
  "key21": "NanvgNKeRGewnqaM3Boa9631qgJmVEFwCTLhoTYrtTm4h2u8Jtc4vtg2jsikpheoNH5gx14M3zVjcqXAhsSmNCT",
  "key22": "49ab6yTPdGtuK1ipxRQRrnx4BjTwx7yybbRcFmHezBJWqmmruKY3dcL8WxSDe8gnegkqpsqj9a9WxiYnDEHpHfgb",
  "key23": "2HzFuL4qFH2TNiCyEaNB1qgVjAbhqGEVWgneAUZqmceJYXVgWEqrkx9EgPXjD75TdqczAzezb4Ve2S72beM4GrH1",
  "key24": "5zmnxveDZSTZKxpKjdH87ediKmDznf7vPw6hSGicWYPb9VG6snrTk7EeV826S3BpxSLjTFPGPvQDtB4mTGhwK7me",
  "key25": "4d6w1R3TS2jCWQkmvtsLxZLR32iX26hurrgr7pA9bLFCmc7JRFFx8aGQnZmCwq9kLM72v4cY1a5BqNXndG4ZTxQs",
  "key26": "3ZdPeX59uQWSmHE7u2Lqj3igYLkb5frxVz5V7NkyQssJp1m7b4ktxiNuqf9nJsmpvbsviemjCEpLXYDndmMtvw7G",
  "key27": "5tk4kjnZ1jekT6KtKGyzwydtDADsM2bVc1i8qAYp1cnU6TVwqC65mc9vMRfUgtiTHShgWhB47a7SzAZgQ6s9jL5m",
  "key28": "33fV3oyGHM1NKJLbbe8GDvgD7AtBtWc9uqKA6ryYun69rHWw6AzDMEjhV4aiHro5ipSrgoUHaeyUJ31rNssM1zM4",
  "key29": "5Dq4kqCjTwhDnykkU9ooxzubWJsyaqdkcxNC8ApAAjBRB3M4CHdBFP3AfHNkyDdDPFPXVJKDmHY2FtAEiPrGsL11",
  "key30": "mc8EvR4LeaAYtJ5Ma5HL36Q7gwV9vQFMG7goRtuePH8gZPGnwFYmfyPShHS8KBi5hmduejCtkmFe5nRqKQAHpaa",
  "key31": "3m7yu2pxqDHcrsde5aE1MpMrE5oGZx46koUb4VqJxpCSxHM2umpukYnALx5gQum42JeR226dut29UCYY2isZxQaV",
  "key32": "y3tWatqqGxUcVDq6tNh5gN7oQ55EhUycefRqKbAYJpsgTa7EmEZD8f5gRxc9H1bsaUB6d5ARhRYm1fsqop9fnL8",
  "key33": "3wmUy2f8D4bEH1kkPuHbdanjN5o5LwYMDF5duqgahj3RAGcQDPH8gxKubUwXqdCEcuoGve92GYB5CVcQA3HoK9Bs",
  "key34": "2a4pWGn561FamNwKmRC4nq2GNtTNxxGBDoxzmX3tN7b4NPfpwrCo7xTUp8TKs6pb4ce4ye3Lo4dSUJVp2KuPJqpV",
  "key35": "5H2b9ByW5fNTee5WcvyfjWSo8JgxResiUDRxWiArJR74C2XSFyUz7Qus217D3sHRx2ozDeDttRcM7gKQrWULrBbN",
  "key36": "2JwCZtqEqboawHJvZJSBj5bFXtwVqiPTxuEfauYTvmvDwz1A8AaWTg9DoLgkZvqHFsMaixoyDkYFwh27h6FzMETB",
  "key37": "aheExTgWssTGcrLiVnivN6twZMfXHJHHg28F9jcHkN4fUP25Gv3gQUaQbeKaGMzK6uJNe4RVAMuW5p6ZK5ydwUo",
  "key38": "2kg1fwyM8Q1bwKjw2iCT7MmAkfexRoUgRLNLaYCyzM1LT8ANJYL77M6ZDCWAETwzCwjhzhB6tEJioe8MNdCYQBXB",
  "key39": "4i98hmnqNkh7G8DiwwSLKGPtMEjthxeeo9UPcNCjNsuPdd8ZFPrn7oTqCE5PZ64QxJ6AHQUufUB2ZQZrxh7vd9NB",
  "key40": "4jR5eQT1TtFBKp59Cre8bAaKDzk6BEZ1PqoJUKCp7YSHifPtLJ7PhejPv22ct2DktYWkjh6yeWyLo9Ws1A3sThbo",
  "key41": "3B3sDK2Zb5QhsBK6QApwXL2cLgjo6iLhScaZ7Ji1uqb2XqhGHMJmZihTdYswpH8mrhGp6oddzis8jkz5sytXpiUB",
  "key42": "55HNNrbSL1Pso854Xw2JNNPzfmNQp3jxM2XQyW9tEzXUwwe6PTTJ7HgMbxvvsy3xWLR6J11ExBLv7FhxiYMEBCZr",
  "key43": "3njMB3yodh6BQgPVBPUHq3tXxh9nSpYnT58x5BgQrFktkxsUjVMDvUj3pWAeZGfjW9aQbJ7T7SnA88cWvkSED56s",
  "key44": "21G4nVp8gAnHxBAzMeCz3PqYTDjzLq2rMrkoP1NWwDRSG2By4rKS6m4CzEip3oZ6w117J6w2geGxZJrEibV2wqyy",
  "key45": "5nvk5wwpCwpawp7n6kJuQRZAJ9kbah2eyd5AFBB32NVSXpFom8gHzjUcbESB2vnctHbjkwFXP59wEHyzkMJyQm65",
  "key46": "5Tm79EdAg9DmpJr7TY2KF9bjkrZHUYPwD2dg1xPRo8mQi1RA6LPZamJELWkqkYJ29f5ZM4PxQySEst8fzzwGmQxS",
  "key47": "nSDnx41icVdEYzEwNUHsoedFY5iVt6BZM9jHzUp7Wq3syJm83K5BMUB3J7pnc6TX5YfCuhNNmkawRX95K1D59BC",
  "key48": "YU2F1Po1Catd7coWFM4e25LpnE6a9xUw8Ryy3ZzNKRLd4vjJSJ3kDzQ9uWD8tbabsmNfQSSTfNYkLdFkhfGCWkn"
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
