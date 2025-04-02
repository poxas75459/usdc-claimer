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
    "5YAXqB8wPTNgFHZy6myVdDcPVVYHHjLzHVA2xjffo5QQmrBn5j5f1dJhLKa9Jm8SMwiDG9wKrFyWDdrRCVBWU6rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndpgZf1rVYMGMsfTPawoSm4z5bRhfFiL9FFTw5WtQTgfZpsgzVp6rwjr4Q7SkuSsvxpJvhFWqRBgY5i3TEieYCR",
  "key1": "56YwDsk4aM5tigT13c9y8c3Y4zc9rKBQizZHTaVFqBN4CLhTC5yEyDeUs9URgvG7mvfE8gKg4tdxmLnPhZKaYCSt",
  "key2": "2Nma3Wqhk4CRRHiarqqFVNmABtEeAcXiuX8iwWrPrFVixVL4vx9hDZTF1F8yqPnqSeoQ4ynrrpRn52SZwEiDmHEe",
  "key3": "2M5oGAsScgWNCQ2FC7c2Nb4Srx4zvyexP2aCHaroKok3ymevfUn8fMea4Ff8LU9D5GUcFSf89XjzoDhAeAmjyX3J",
  "key4": "2Uk8bVoM3yUhAzWHmoYBTWw8oWNrvuCcRdCoZKEbsJKH9RH2CJ7ifybwDgDf3UqSG6x2sFJLeDUH4cw6hUA7HWPs",
  "key5": "48mWTcBuYQ4TCCdMVgQ1k7mX5VsLvoEmnmZZ9QL9FZhK6qB2Cu1vqjBrkP6Y7mtPLnLuomjzdcCBigfCgV3jQ4gh",
  "key6": "3nTTsbyuT6oLubxMgoA9YbD29KsN7fMGnYkutTRbwWnA6u7y2aTpj5nT3MWuWuLjX9DNSga4ptATuFiBjuRaCuin",
  "key7": "62DknBsDAGYXSYFLJ6Rt5GcXY4bnj13Ky15NByVMgPqEPnaQ2nSrzT4wcvjSurjSCF81ph7vZGA3pDCGwxx9Pf8B",
  "key8": "26gfukDuLQDiijimAoD7jqmaGauz16shSvMyS62Hv7nLawVznDUgVNk3con9XDhacHaFRCzfEQC8anUVb74Ph7MV",
  "key9": "2C6S9ddrPYLR8Hv7kBx18JaoxxCuCr47BMZixWUDYFz9cJMuMKGmZCfNx4NaLEKvLSwwNzE8magQsNMTH9roEvxp",
  "key10": "4D2hnrk3LxpSJqgxjjH6EixKRDQ7ZodA7vm2JWVLr6iVhf2L9Fx4BbAhWbNVXaqZtg9W5qFJNdHFHekwdkYR7cCu",
  "key11": "47BUzAYxUMnYTzHhLeYEm1Dbbezf2xepZ9wP4taqX7qZWDvmGdkqetd5CmnU6EYhwTfaZ2dMZP1HCsm1wrPZfZpN",
  "key12": "wCrPwVxZNbtwGTVA3fLmdTJm1wREuGa9eabnaUuiFKkofhZb99oLimTviziZH9u9eRk2wTSXB8S5W5y7TNMUfSD",
  "key13": "3LnxwXCdJhHRSmWqJAaPDBTwNxrypXe74CAqLSbcCxqXuVatNxEgQN8ASjphRuirMsYBcETdK7rj27ZA9eyJSwbd",
  "key14": "xdG2HVRsZFyMx8Q4ES89ZYH8nM2mq7khDULt5hECXp19nH4Up62jhE2uTvtwLPeQLk2akKRCmUHXb8nJrs8n6Vz",
  "key15": "arjnkif5hv8EzTwKkfAxdq71EqgxTMYW7Hmy258zMw1xcCodzDAC9tqDAMG8Qd5MusSx98YoZ7CnAXgNUGhviZk",
  "key16": "3aVsC8otaGViw8DhqPXetHqQ1aqzLrrQuUN84YC6gN35UMGQZbSQT1YSa9e7TJoe3EFVxDs1bD9xr8dQMaFggexi",
  "key17": "364HsUaTLtBoo3pb3Q5gc5M8X62fLLgaXcXTvJPrVmXar4ghJtwAPekUZvnJaiq9eMBCgtsALmz5FiwQTa77bQBW",
  "key18": "4ovnk1GiVMpPM4xwoB63dPZ61bdsRJeP9bniYjivkdYXyKxzLDaiys69fRVdkabuKJGMg4SZ7xgDV3p3qyx9fSzY",
  "key19": "4p9Chjxd54wY6jCUtsTbCrHdKgwiGWtTuVNHoao7iFFq4a2LPvgPtaccNRoCnxbJGAwVogGEKXMR2tMxbzsX6NvE",
  "key20": "5yiA5MvPo3gfzi1V6vNwAmYSFKbFnbfUYYpJjmUYY21mXfZxr73djrKqbYRYpMWGY9x1p4t577SfDFFU4FfjUyK4",
  "key21": "2M8NwXURcXRJMvEkGqwjtNZ8qq91CHdJh3DrDuMrJ8PsMmaejZcXFSu7SxAENU2SFuor4MU8Tk5hXeivezq3Z5QT",
  "key22": "5dTNsCDJNYcW632bXMEvRc2BzPDGCMqfjNXMdc3vb9Sez5eojtSNNMaTpjnHYM9vAQCTso46eRiNf5RqK6Px8Ha2",
  "key23": "djsAWihoW7trhiRE4auZKrF3WHFTkrAmNdwBT3eVqntKUPEHetBjKfYxLjWcofdcSggPe49XLeCHm3ybmyqWsS8",
  "key24": "5Mccn5i5i3SL3YAMzsN8TuZc6EULp313rT5QJSC8UcpZFkkGpN4TYCQzjAWKgxYKVA4g5oTk13g4uwwe4W6TNv7x",
  "key25": "9H2yjaqF36q3QgCtfvQUkCMpVoXWuWTED3gFcFBm4H3iR9xwZAGqXTHkhbzW7D5uJNY1kshVFRrQp1SHTvPBkqL",
  "key26": "61uN5SDsR8ap7pwsjGmD9tWnwyPKVkPammZRxsejVDLGYB1HeNrMCuowShEbGa7eUozMpcsUSLMiUXgM2J1TsV4D",
  "key27": "3puUqwxbth8fVpe35KMQYPqoqYiaP3a2syH56dqxoCvKzThvmQQxBC4ckSJnAdoZk6yMHtLJtCZmNVhdrft6iU1Q",
  "key28": "3RWZjKbvwoJWE7i8KkHy3hw3ETGt9kyJwzcVPgixQ5gMqpt8D7WPTCjHrYNGHgRCQ8Yap9BKCHtBbS9HawggT1UH"
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
