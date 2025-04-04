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
    "53qeBCDkGm4hKVd2WbuUzBj5dRe4pZRmt43HEpbjzjPBbz9qku5r6oehPLcuzFAUxc4igXxT2vKxEzHerEbH2kww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hBXXhiaQJU6U3LZ1KVzZLL5EaNZg8NBbeecp9HCtfFq7yNNfvP9kv4HBNBCuFtT6DXwJ89JEcbMTAA3mCFJUEsV",
  "key1": "2TkSFYUCnemz8Bx2STApqV6n16JGmUEXdbCi1Jr2tdJcu6CBCcyzqL8V79mwudryjMu6Fp1ZYmQgwJBL6bGj9hLx",
  "key2": "38VR1ojMjhptZr4m7PCsMETJyqFqwre5ryeJXD24Q5GMEiJeDaPURSgW5oCnYNcn5tHoV1xM3oWPXaXsJ9b6n6sk",
  "key3": "WePu6ZZzc2nYdWo4Mv839gVXdxqukuwoyR8FdK52hWfULrnh4bFYivwXiKZjz5UNYAjFkCkxXLHCtqSk5Db6t3A",
  "key4": "3j4vUkV6oEKPaV3P5tkQ7KzmRYRCdTtceoJQs7PCU9rcqLADXNEZbqCPvWDaERP5AiV5XispVWt9PJ3Z84uHNZCn",
  "key5": "5Y5DaDzDBhghvHcf3XziwsWba5physNYJQofSe4Rcqryzyzkqctmk6PpKkgMaDy34Piqn88AejnF4LLFtQDKvCsQ",
  "key6": "MQ9XrGE6CeLfGZyS6u8fZWHB3Rk6TkMaup8wUsHDuP8fftSYswGWxgydADac1kZ7sUo1hLnaPMpD8DrwXCfLCf5",
  "key7": "3ezFqWvbgdV3pZXk1ynFrig7MXHdDrgHiH6B9co5Er69fYVxmNpv9DVNg9CUMsfs8Rhoh3tVfAmANeZkEy5YHAow",
  "key8": "JrzadyHVPuDxP8QgVVrgekCMUeSJYFj1Nxuh921kpJE2msgjp2PpABemFq2vMQPvpeRjmjUkKvARAfCnXZ2LjZ6",
  "key9": "517KxPfJEDiE1RUTxpqkn86CL5tjbXu3NBs1iuJfViyxJTEHJvWvkYT25xiUBhXzBvMi8odTLxX43EUPsdt2Bx5N",
  "key10": "3UWUmmaiU4v4nS9cFMSJFk4ZTwJWq8zjRCceatwUENyX1jrgKnJx4yPp9oY1ZAPz3VuG5M6afcjsCHqDNroFn8o7",
  "key11": "3nLATn41KW5Tun4BDV7U28DBBLz7tHuLZxZMAwznY51CN8j1x7Td8N9Dxyh1J9H9TSJDzNYx2m3UkhgkD694drVg",
  "key12": "5saFfc3UxAw2Z2VSWfGNnKBNbjf9vYozvinTg7NKGNi7LdcTJC24jKTXpLKGvRUVdKbf2BFa9PGdKvNyeVbqBAYC",
  "key13": "3d1Bp5MDVEoLsfhimCJ8aZ5QZ4j57CDuL3ECsTfhqS4GkaYmfak9hmHig9nRkcNzRq5GkEKDt4QZFrLEX2QQxtQr",
  "key14": "51cuYFV5RYkHa7oWbq2Kb1ySB5Q9XsqXEqRj2wGBU7vSPqNKz5y1Xa2J12Bv82KNZmR3BiyMafkb9HXRWcrKnxzE",
  "key15": "4qe86C924NPwKYnDGiEQZtRBhgcXQYYx6sjpsY2ep64AGau2AQDQwt3tdyVqSWYTdXQXKzwWaNPhaaj7PyH5qCB1",
  "key16": "b3s4KfVhxa5rKZasou6WMYxpg9kvrbCVJ2HnWbVsjtf7iJ3ukcEM6QMpD3Hwwdo6tx11ndieteZWH5ezyjvTRs8",
  "key17": "2A75PrqaeKFKy5f2LBXACeLxbdzZRWvLVf8euDJCB81bvdfn3Yse48uyF2nYCdHAiTVRUBuCsrvmhoEExFE1bpBY",
  "key18": "2TKAkzRZXvDPeJiKgcKVVwFXZvooHbRgpncXACvQhHnS9yqHnZ9hgpbWKyeQ9T9r47LyEYCY5KhJJEA7V1GhaSZV",
  "key19": "K6FKoj4jLh97w22JXTbsKA9ix9L2KuqhuRNJ3SJ1fSpLcaNwHYj8E1qCJhzLN3DAYM3RoMhRgEdDpzQf7i82bgZ",
  "key20": "5echyHTP5MaKGgm86QpVdeWpsHGgXJ9jZaKjRr1ye9zbDaGaAqRqAiLa7JwnNupsnrQHn8z8ucuC2TJSDdhkC5nQ",
  "key21": "5UD2mcWXBRBxiyirFQPFbryiFSguxQP8Zp2mNtgCmCVhrsWCz844xaf8Y2ynBXcipjZvujgWHGK8CSd6iV9pYj1k",
  "key22": "ZaazgjRm5ofVjUGGGo9GjbiFRLeF3ML9HQyNeoKdpbV8xmsKb3Y26kncTAja2zDStaNBZ5CXXxf5TvDCazVjm3B",
  "key23": "e3Jaty72NyFtdUzrhgH75by8HNhWtw8AnKtCjxe27re4AP2FPPNHNEDhTTY2vJTfY8D91H8hvkEqmajrw4a1sj7",
  "key24": "2JGVRzCSrHZpTftso7eJ4atrKHqLC7i6YbL3yuA2tsNZ5m1gLgeWJsjghiBsgXHzWYosjQck4sYvptsv4ZodVKUL",
  "key25": "C8Ktjnn7xLRM8cDirRCMSfojxCpUKsxywYvBQfxMVPjZN3MnhnxHytjg32oeWpEJT3FYYgDBzTnKCj9hEfoigvk",
  "key26": "3jg7xSToAnybxJT7hRiNyXPGKZewKRhhRKqvMFfJjPWAh4Sc5s65kJHcL5FHxMQZ4kG5WQQdf8TrKnmFwEQZfjpP",
  "key27": "55uWr4yUwabbUyCpwJpoGr75VhKpP2GaYRJf693XkDj93Sib97byee4W8ASpNjd6YLChoFuPojZ94YDbJVTEfm4U",
  "key28": "2wFkGH35RYitDWcGNk9qecMC4aX1bzu1jXYbp2CaZD5ButQAJBiLk9XXR4mTRmmoa7PmLaBttESJTFAkLad7LjXW"
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
