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
    "549dLNZYfAQJcF3FqyKhqJjSzBnxADKeeDADRvoCExsjqYUVX1qiAx1FxC58kMWtUX92ykaBEtDFHFpFcVpky9Uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkbqS3TZ4s9WzVWygxEghz5QsMJhhBLb4qeb2e4xiWjjwvA5dCavhMTSApFfroUre7Z2iJ2in1AibyyKdYWoKJ2",
  "key1": "3RAWaM58HJzrEx6tY5uW5YkXWnNKwM9pTUYpBVY86boYuazGHpFHaP5KCsKmVYGXL9Hw4WBKppZzbGS3cpbUCrC8",
  "key2": "2MzG5xLA5itLpRwGhj45JtEonopeERi2WKF4Z62BcisPC9StSav8hEnSfs2tkcKV4oD74fcUbMtQDWYL7qSKejvs",
  "key3": "2DQLrj8uzKTQh62S3VUSTiTMn9CGUfAmM9oVxYckr1gzbRripxFP2kkQChc7W1LSStE4WvZwrV5QDqetMSCjfT6S",
  "key4": "DZ69ynSgRg47c4VWhCUAXags9h8Bc9WpiXE5Y8p7dUrBJsi3pqGS9vF16s7ZS2uDK53qByJn7cm9B33nVTyjuqB",
  "key5": "5F1CeDK2fTAkzjBWADaqQAroAeEmxN2jpxNXT2mPKyro2PJ7s3nV7xXYNAv3egMm2m1zpTyHJcuv3H1VXbsR47ax",
  "key6": "5v6uduuXZ2JDVmC2BbAWhXCLEAcpobGk7aCge1z9Ac6HR35HFSeBxpX6B5ZbJ7vnveVvfa4PG4fch9Y4b2EP3gsC",
  "key7": "UzpzuW2YQW7LjnLvVojr6f9PreWTRL4HzTzoTX9vbgQ1jww9aiVB42usERVwYwUS1WURU49Sc1dHx3X4FdGi6g9",
  "key8": "5P2JvRCynhSc1utnDkq8NQMPHraH8zUevsc29g6iSDVKq8r8zawGuqvRZj93S799XWNx7EQb6X2w3MKCoJkJLHSR",
  "key9": "2vRwgXdYWwjx6ThxY7P3og38D8h5S7rLvUb7F86yLHoFz3w58UY8BZBr52CmWtgzyWRdcibMEwhX5UGXz6y62VTN",
  "key10": "5HJgyNkp4NzPnDTiD8eYhWBL7gJbTTcyL8x1PoaFg2j3BqrtUkAdtZUZj6MsvFKdcJxwnQmZBHkkqWsd2jcnWftK",
  "key11": "3qou1wWpLAvB8qM72anJAhH9J5evK7gYXPMR3yYLutt53cnGkpeT3AxgTkz4ZW6Nh89zDAdzMRuefbu19qhqWacm",
  "key12": "WtywFn6wE779mGxPGPt6NSS5b4NADaS3xCvG3DzvdR2SVnNZC7K2EvLV8DmTJCzK9mXP9VUEsrA8aPRkgGoKhNn",
  "key13": "QVo8bb7wo7SgyHtoH15yNU7z7MFUncHp9iDxDk2vaoKkSdaGfkPEsEUc8eTiWJ8iWqEyMnSNd961CDaGbbbYY5M",
  "key14": "3QM7J4reRHbkhax1zg74spJYZ3sboB7twhz298qhwb1rgiqn1VXqMzM7BGfvNwXjyFvYkZuPfPb8u1ZjgvPArVnd",
  "key15": "5eSDD2Z88M8iLkgeSe1mtgukn9QYAYM3QUQWDsor2aCsvDoqRnh86NXs2GNxsvu76ZfdX4TckHyFrjVWaES6oNke",
  "key16": "4X61nMgM5w3BD9cKFxgmQkJ8tHGokiyLNhitTA9TkysfwXkgoj7V5mhS9AiNSiBCzqo75PnA7bZcgPBB8kNzBqyS",
  "key17": "311AqriecaKjXyHrQANSE4T8PptryYBYS2uJyBquAYkZTf1qDQmJYNCu4vxpv73pGbZACeaXpAf9pfGidksWYGiQ",
  "key18": "27Hcbhf1mVaibq3JVAN1yTSCboTiuEiTSBKkzimrVNzkYUu4JHwL7yNs46SraHFzBLq91XbLCjJ3fQTybudWBiH5",
  "key19": "bJncao31KCEcZwA1KJ6C2mZFPz6trx3HdY9nV2fbgj2ZXbxXk7efivNyVcgwjM83zP3QDapEyGQpYQFMVcmrDWw",
  "key20": "5edNzzU44B3NyuCGpzjBzfutrYvnMnBXkNdze7n7Gf1mhAQYxL7kDm449djmajBF3zxjscHW6mLp6JqSbqDkhHRd",
  "key21": "w1m9Lxi53NdxuyfFzLWBrp7xJU1LbQLcDARJKEXV8dZggryLTzx9fEiim926W7GmfAbACGrboBQwUgomjvcdBZk",
  "key22": "29idmgSwDUhjjALUbvzbf4hxdU8mfpzwrgT4dhnLqrmkwFdJF89oath2RL8hbWVjbVzMqCGzA491Z4JmtdvUPY8z",
  "key23": "2rj3fxw2VUWvKd1NEMCsC4abJrN4icfRAFrH7XzjAyg4jBGvifzQfrJ6YVZfY4AtpwbjGZnm86Rvr3pcGKLucHxi",
  "key24": "66KzLf741pU5yGUABx6H7T8CMunZ4ULfezuaogmvWL51DgtchTB5ozutr4LHzpvDzpbiUuTcd8fVKqCzwaP2n2K4",
  "key25": "4sH9MJSSmxJ3dBEcs4so2rMgLDhkpbfM7BsRPXEzMmsyuWy2NfakcvT4ddet56D9ps4ZJ95ryMS6YnveyadQnWnZ",
  "key26": "5stauf1DkEnRQ8773pVk23crNgmycY43rXnuy6dxbDDKMDKxtgw8c7KHcEVyto3YCNSzL9nZ4XMfhCvxfvXtzWoW",
  "key27": "bdhhCt8MCdzntyZBCx8fYbvEugwqPi7jL1SS7SfytnKSHvXhcxjGSgUM1mC89FJvRcd5WFyPGNgM5CDVtA1m2Tf",
  "key28": "4dYdMfX8soL8T3619X2YKaWVAc7ZZE94n5969QQBPMhH8SV5rxU94hZo4UPwhkjQuDHpNTeZoXFjQbi7dLCeJ7AB",
  "key29": "RtGKeWaC2SF5GwgKxs2WojaqS3WPJEz9LRfD9QmY2Av4DtsUNio4LLQrXKpB85CoY3yHkoyCk7sw3TEThbKViD6",
  "key30": "3bBWWeFSV315WvPoY3LtpAneZRREvBQbYfYu78kVD4YnYmmBLpD4fxG8f5MBCVgPUSWzBWj6eEcsD24Uf7oPZsYR",
  "key31": "4fUfmS7ScFKzGKKjSE1F6XNC7eahAWgwNaCgpDEv4gs2b58yXyGSKus65Hf2hvf1qD9GBCyb9Xus5w2e5MB6PQBB",
  "key32": "1Fm1vqgByRGp9rrZxUsWT24zCyx2D9qEyZgN8xxm5f3eWpDjfugo4GbHd9XvBhSRPpCnMJC7uDaWFy7S5mLF1G9",
  "key33": "5m7YCVYSmY5ENGfJmVkQiK281ThJGfoViPJJnfT5dUZx3SB3RYw5JqG12UrA18T8UQpLdFTbfvXd55sBg5WJgVLi",
  "key34": "2SXXSkb1JBMcv7So3aBAPtYhrMoB6ZCd3FmUr5YER9xVoWrVgSkCxQYwpYuCANc9eLfrXsq5WGQBDdhrwpsXh6RC",
  "key35": "Btzsng1oeGNvQeNhyARXpwc74Cuo71C1v7za23gR5ojbAA7Rsi72XRYkxHeEYuGpXzm44TqntHqdcpCaDMpjS59",
  "key36": "4NbfpFJh1bHQZ7YED5yUG4SKcbWgZtmmXjFjENt9S9fWYabMJ3JxSmiR6SQKt8c9zS2RyMPLhEoqvJfcGPauCVw4",
  "key37": "4bPv4imrfLJJ8Afka4UrZrDxpAR1hBao68eadKsmwRuihfN4XkzBnveWpXySmRdPCkLzPMVSFsMQzz7RWn9778Br",
  "key38": "3ANiJxJDtZbJFunxa63Q4evwxKuBeMW4ivWMj5eDusnHvM51X6fj6No22nAEWdmM7NmWSqsHHUWW2eb9dB2aJsp2",
  "key39": "4UPNkhujcuU7e3Qpux7KiAsUMLH2op9HXk2ZEqKSzzzRuP7cXGEyDqXMnnPTuyWcVPrKgqCEWzrwwMi7VHUEzEPM",
  "key40": "4R5xm2hHe5WweLhSQ31oqxuntaCoDDpKYBmgXmA8XLQPjYcgWFNugUDe5WxRo2MEwvEmB1tjWEpL3ieZNyGLBC2c",
  "key41": "5Y8cQk8tEAi8xRoqso4n49nq5RgYrtMCaUWJ56a2jCw2zy9FT6FXu2GA6e4AeGsp9Ni1vefQsmCf82atdudhPmQk",
  "key42": "672X1za4xU4d1GhweE7nJMxbw8rQE28n4wLTW7JV9j9VQAyHALqW5YA5nExufL3TpUfLF9To55mwFxXsMgncWSYx",
  "key43": "3mVNSU6y3aNfvWt8hDvzWwoutaF6PrLqAhSVoWsYYUU2DLyBH1mtrFFP8X7WScPTa5Movddhi13wV2zGP8rUS27m"
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
