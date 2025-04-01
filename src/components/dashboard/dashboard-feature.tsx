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
    "2PQeyMGjrwJat4d9PcMRjnsKnrg3HitmgBGKAyVA34MrHjdn2M2fZifZf6ZMo5aK2Gb6guMZBE4N6h6dbo5gJaAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DsCwJuidszLtuKusTTTcFQDfUwzuev7UixQmmgZy8K6w3LAGehxEiGWNTdLyQaihCDaWi5BF7e3wK6YbxQDCBUS",
  "key1": "2arYs666ErPGbhT9183YyQoSCK8ErURRU1TupW6ZNsY1aQexTyG4qKm5KJ8a532J2FAs8erPADdRhpJio5Qf33oa",
  "key2": "KsoxwLJ515vaM3URFCZ5G12fWddNi9YxCnudW7SBYb7jpdbe5DsSt6UtvmjwNooA3aradDz7orndU1wNaPQPYhM",
  "key3": "2UFvLPwHsZxpZK25DJtB6r7PaqxTfpgciR9L1QK5L4LGW3NGBLwWWhTDLwzmE5UDEVcWixHQLT1xqckSitUdm3FF",
  "key4": "5KKw6jkqbT4VGh7aAUx6R68DPckf1KZnUzvwdpjifie8GVyHKXH7oW3muLVXkd52pcbGsTCzZ6FGRjLWmywtkZSy",
  "key5": "337Wyj6sq1tRDp9S8SJnNuHaMhPreveE7KY4i2Z9UnDs6e7VFdiJRhb1MBy5KoyEQSVW6Q3PZCKLfaXXvueNkiUM",
  "key6": "rU8Ce7xFFN7KrWYgao9qNxyQnZiUZHEwGgxZ3u7roYJEAVienmX9Mr2J4E7mEXk35LnYTrUDjL1g1bTFgpkfN1N",
  "key7": "2SJ3bPojGjCnf8m2AWsFEnJEFbvUEECa1j65P96kh1b93pr1MxMsYAyZV39eaEgoPBpPZu8Q4Kx1A3Wj6sTJ2YpJ",
  "key8": "4EW7p4iiaLT5EqmWiU6sBmHqa9SSkgJfNDesN9WNH9oL9wTVWoP5vBzY8qavc7kdryDVmnSWtBtuxM11Powc6r3c",
  "key9": "4wASe5YhZsYRqTPN36MxXiEEk6yg68TBsg5ZabkHpRfuHcN2bgApRb3DsDo8NQQSUiE5oeCaCqQwzkceGN4mYWR1",
  "key10": "3PTftJF8vBkcn5azxvJsPewMnfmC1A8GwZaEWRKhsMiGBTrxk9dJAr1eWWJwCcmtYjXwTBKbhdekQ2t72X4JtAjy",
  "key11": "5cPiUV2h5Euqc56KK2TgT8jvjNiDUeFSxuSjJLV7yPshbLYbc8rQXBSxBmWDsXG5cihdKRhgjAqLY12eQYo1esUm",
  "key12": "2W8Yqywp3h8byqrky97JFNuu3g7ctqCyAJeF9rKbWR9EVejqAZbxG2kx3b75VB54xf7ykMgzdmGGxwpsvWVY3zs7",
  "key13": "3udBBiEAoMY6rZL88d9i1EDiDJ4pNTjCnggH2i7mfbBcnqYY9htMcMd9grRnqmAU6opG9oCbauSZJLaYT2xnjDYC",
  "key14": "2ykRQbHcQDHUdrMXk67bQXKmSAQGWty2nEZg9jk9CpXwxmMwZkBbaTrdS9Z6ta5YhiP8t6TF32Muo8GiWaziqVuV",
  "key15": "4ykKf6pa89j486jEWvbDcnNJXqKzi1nr6ARvuTBquaSibaTW5hKxUYJyG8PQAKobTdEsfQ7Yu1DcbhMST1EfeK4H",
  "key16": "5Fm5Ezi2kmEhAZNkh2VCBpnxTVTniFZLiAJr8ZCtQ1zbqHe1SXT9tCxomHqBvqSDmKNM5beGSw3g9Jp6emZ6fyE7",
  "key17": "2j4vQAZ4Lr8rJJjzWcjusjutLCEQXrVvrXDpTAYRu7tSHZL7m3KkTFV613iMTBJjkRRWrpdogMC2q6QbrANvgBeg",
  "key18": "3oBjxVFFdxkHezEmrQAz84r5x8SJheXgFEWh2dJHEPgXAg1D55DmfV45aqT8XWuq8JESPrpFj7K5mYFZimfLxvVT",
  "key19": "5FWb6TUBXsyEhQ8SRoz5y9fNsTmC9XucrFg6Bgz73CrThegFvBLgjXi7KeAMWreaAoAjfABycirNsWaXd9PUyLvg",
  "key20": "3gA9vu6acohoWBt3naYLkbq8E5YNCWTwcgKs4n7quAoMbqgnzy5RAhXDsB7eSKXnDkkqvqowDdh4HiyoMfyuzoub",
  "key21": "2kASpemLU5MUvSDJEtfe5wbXgeJAtb1XEHYtK9DPWDsihQqf6DxUWzUfGg5YrgSuExP9nuH9YNzMZh8aJuYf3YiX",
  "key22": "thb2cVxMTb8So61H9dgS9cgTbkrwPcEJNzFaQvqFHXzwkHC79rYfehKwRKKqKhwVEZDGKVkn31HJgvWPPTTwWHb",
  "key23": "WKF9Uwih3LoaZkh87mTH4hF832L3dnftqGnBkY413BJbz9tFLDXG22V34DvDt9jxQnrJnqZq5GHX55yk7qyhFig",
  "key24": "56d2wRNFoQbbPbvvbUyBTu8ZGyZB7kp2WKJ6k38siHDm6njwUfkUDrxTjDhuJDLR8dX7uA1rHKSUwcKNFWJcToam",
  "key25": "hmRzF2mDq1Nf7ecjkRqmrMYkJMRXtHmCbZ3iaUUVYrSQh7uzSGkmuLZ7nA9bwPKUxeat7NHH2SPRhEnMn82pxw3",
  "key26": "5xWQLJbUkf8iRzkYLVFpPsvUFcorGXFiT16NkV1J1ChkHtXnobGfrSG1wJd9BfMgWwHqN2XqHarCP9kwuzFbhmSV"
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
