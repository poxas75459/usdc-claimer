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
    "5f6ABg8wyy65KJEiAnoP8SqjM2ThPugGoWsdUKJPy36a4xk2awkHbFkYtZS34HBMtc4zLLYXbYzmr9CMWuMhJBfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8BsU4bhTY28D4WVurQssJcFt2zoRY6BSLYkMK5exT1p2DikiaBWXBdu3SWCZvA7mZEGKRdHEWzi7ky7Bs9DZGiM",
  "key1": "3Lv3cwoimkCAzZcTSkJmFP9C8JuF4uihXRfFJpDLt4jmQ7dK3tjty1uLVjWdoJqwv3XrNUQ1QwM2rSZbt3USAZDe",
  "key2": "2h92ZdzP2RGbadUoheoRyYzUoYTMszRaezcHrQXi8Xfm5ZVgHQZD6ko4uvxsBvHoagnMJZ3yYenSvJaY6UCtjuDw",
  "key3": "39QbyMCsTcLM3CzwEVPEBQCA3puKhx8F2YT8ut5W1NH5dMBaLPEfKDf63sp9NSJiJU5QMR9e6cjZKDctVrqdBcmx",
  "key4": "2i5ALPXELdZ8unCAvAxC3WrMDMe87p33WkXCxsuqhNMTKfTBuQbVp8EbDrbGMHbGPuDcVpe4rxPB9f16BeSvemBW",
  "key5": "4tpksF3PfXHpUyPyXHm4YJGLuLBiFgvT31kybYSdAEHsBNEogvrcqkrSbiYdYxYWCE2HNyaPEqFzqC5eQTdmePn8",
  "key6": "12A5hp76bdgBKqn8Yt6P7HCAkfTka7HGUcPpKePT6enTQirJQK1c2fqzBJWi9trxdS18Gr2cutxkXMUDAuqzp4b9",
  "key7": "4hMUMGwWgR5QayL6stCkhDV4hgZZYbcmHABmqYGxxmtJGwDGtu273CuvE7czaXVGcDhEzYviUDpvW9aF11wFbVo7",
  "key8": "34ar92q3MdgbKqFZS1L9JX1GdC43mo6Lxsc8BpMaHzfsZdxHs7wfaTWFMbWTLUKc3U5V5nogb2Lfvau5bWTQSoVS",
  "key9": "2tCH5RAydTEVdQJfZ2TeMZC88T6rayKQ8S8J7WdJxJpQKTHKcw3Nq3BLPwd9omTbb5vjT8UjtN5H81GY3yFWb2tV",
  "key10": "4KAag8zYhoz7JgW164RADjDKXRufMeZSXXEk8bJKos9YDrXmiK7UAzZV4eQnwNwZGJgZAZKYzyQSxdkGaiMhZtvR",
  "key11": "48rZEREcVPG9uewaaLfiJ5vEAuiHy2Uhks1LA8CSxKrXGZpEybpb9aFYAAtW64wSP8BwYhkJXHPKznBuyYx1A2F3",
  "key12": "52oSVAg9cyBg4TgmdHFu8cHYYG5n2TuBkPXLY6YHB64TL7C8poNJKbS1eHwMbB9JdzznSeq9cysfTpFzVNE5rXCX",
  "key13": "mutdhf1m9kN44LixDiVhsF15TFD6ZAXjaT2mU6ucc6oGgqWzn4qcscBqKzQwofXD2Jpdovb6TCMLXPZTXMRDHMv",
  "key14": "2SToNGB6KGi8X1SahpDA2P7hgNSY6PkcnobKDMyGE6nuxMG9PevhwEfvEZXueDQhYk88CD516JjYkw7r277eEw18",
  "key15": "4wfMqk1pbkQvPyPxjQ6Pk6oT3MCc7ebskVrtHVd48kMfvUJZG5CPy3UjYtekjJH1dXyQ6xstx7Rbc4kZFGtytmvy",
  "key16": "5eaFWdwsFrM2X8UxeTw7dSQLbe7xiP5zJUewhK7CbBkRgkXNC6e8jYpAjpFayWXTqDfrk4jyX1LsKERS8TiTbmpX",
  "key17": "2vrpX2hWSWcmM8GNwssx5jZWD75XSAaELZ7qMJuSqiurRqNkc6MSbHJPRx3s6j1YrQCeZ6RvnG6QqtqLob5GqaAy",
  "key18": "2xGLL268dxAKemPGXy815CWfNf6SPkSZmNYwgQYmyy4YnqXfC9hDzqUi1qf4occ61YZkDx1b8aPtFqN2tDiFxB76",
  "key19": "4mbcDZbmdUzVsKxUGBYGhqpfGmgjwtBNj34zbXTRe1ndmvtHxU8C22nnFc7nMdwkzDxyLbqgyNB5asNeJ3Czi9Nr",
  "key20": "QKUDEjd3pBVgr6jn2WMWMb2AAAH3zrcVda1TKiR14KV2mqjZv5uFNdjHPr7Drg1iEyfWL1sqPnPBci7DBYxwH71",
  "key21": "4PEn6qRv2enbYFv6iKVMniQcg5MtyVXXi8mXCgiArE2BLwumWWcgcqn5UXZo4abnGwjSKE2gYG8KFPKtFhVG7xxM",
  "key22": "3J21CeTneEuF2D8KhhHqk1SyucehPCj7Y1PrhHPBX8aNu1M2W4BGBWbV2LPfFzfjBhKCz3ZhgVgNkPxbpBxoZs8b",
  "key23": "3ZStb667jkQ1x77R4PqHqshhhmytJA5wffFGhin94XswtPMWQbeks7bUpUsSRhYTzaZKekLwL6gPmnQfJGWmzSDe",
  "key24": "4HyU89oUzCfwUeZuE2zm3c58JWGbgtKLcpxRcsHspxbdaox1tbAAKQH5XVUo4e8yecjXiqAiHuoGbSNciRsfjQL1",
  "key25": "5r2aEPWSz2tjJULryrqvtZyx8s2ze96J5WRLuQNWNvb4a81W1j56u2tjWsB1xxHsbvZgUo8KWLjSN9UdhzcJH6eu",
  "key26": "5cCaGh1wajp4dSqokwDaXaLD9jF1KJSzxS8WNp5H3usDZf6EuaD6gduT6FNgvYVb3Uw1hGFuEkiWgW2hpkhigoBK",
  "key27": "4HLz21TH6Z2ozih94aHxwDX6PaBaHpDaonki4t96vgfPRcY4iTQ21p3CgUuNvZiW3e9Y6E3uPj6fDENyd7v13Z15",
  "key28": "2N1fUc1jSGfFJs1HeQn46PLZMr4hj7ipfva2VQsRKnYjJETLXo5aCHfCKUGkHEYKkFa3fWdRQkdAdnvJs9heYvch",
  "key29": "3t3VUNKSKbhaJYbZLNUFv62keU9rRMosg9TvEMkqe99PBNEy8F2QAe9Vh8sB2wkfCgobRjYgBzaGaZ8j67ry4dNc",
  "key30": "53FjQ691Xbx9w3Gj9RDv7LSZuuFTTg45d1MhCmoGf2NNCAotFcRYfZrjM19a3xJf4dpPqj93o9wbXyTwEfxRJufM",
  "key31": "4TE3zd1cTZavCejvCC1TwNSrJnTQvQCtM9BeDvfnko2P5HqXB5HVQifauU798AZmwroFyUEkGdGMf8A5H2ZsZfZ2"
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
