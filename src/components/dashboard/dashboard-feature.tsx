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
    "5mtWW6XcxWoYni1XCocXXvzhrAgGgqTanQjKqdwfS4RZSNyG7ALPMfWU8EkkyRUgGPpR8McmQsjg96twE69RMKmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fXgXiXgwY2ZdhbWcqFrnqJKZ7fbBD2vs188fqeGb2gbx2t6wPRZhLKeMnnTcrgdPSdSSsiGSRNqQcnqcGAWhSm",
  "key1": "4retSEvfiWGQGmBnuU8FbdU6cev7zSEVKeq52Q3oxpTSpWZJ1PAvDWPXckYRvoYXdWYvRE8ns92obThMR3X2ne3F",
  "key2": "3R8t4cQgGpaFYNgTiyVQY486r7349LnCeE1VGE1ZKD5Wks8sdueM2YvbyQKkZ32Xg64BUACHCncw58CJnDDXj6Vu",
  "key3": "ChhuBnu8wcyDH2xmeD5ztoGYbjm9KbfZveb5KXGPYGwDZPB4S1VvAJaGMw6RY3Ebahv8riY62qDuL54dKHuY4ss",
  "key4": "ZqexNmvfZizzagTSuqcYkGxUFpkYGBk2NHQJm3dUu7HGfCqZwi72XVKNXDa4P4yzTf7PGtrsKFfRujkNmpV7ETA",
  "key5": "3BNZMGYLns77tTH6TE2D6oTsFQ5XejGuiJVghDeTdd5mNDJG6xfMegiMSUu7N5Zw4GqQVysai8qRmxP2b2rkF6nd",
  "key6": "3RVUFx6GVTXyYEj45FjTdUWSdjKu3QWA84jw6KaywZrhkCeE7FzHwnejBa8NDyJNZCa9HBvxHzW1kUBLKNgHhsFE",
  "key7": "49VQBJn1Yz2UkCqduspbmKdPJ2bzBGx747jfZME67LUnaCTKqncrTM5sbcwfwxSNU1fCwcYjjJxuHNU7RkPEgk3m",
  "key8": "4iXUBNt8CbeVWEFDptojzTTJQy69YcX1CRYXmugeLzaQ52PbQewhUr1CvhSUMzHMN5p76qBaiLeMFogktm5dRMvc",
  "key9": "2v2mDcgqbSHMzsfeGWw8dvKDFBXRnrd7eDF1n8v5834vy74qeEm1dqkDw4GYoDXME7DguwSsqjLxRp3hanYDtgLF",
  "key10": "4yG3SrcAWj7shdf3i2eQwRjrGCdnn3A1NHZPSSRSGSdhi5EhMp1G3fMSvaGKbKQ2MNwiCb9MRXKuJFqgGqjjGsgn",
  "key11": "5JhZqPq77rh79YNsTj6LRhjF7bvQUNE9jUAsUgnFG3w7D5Mc5XsTCJdrXw33eJkWvuB2rvwGoABTsDpYuU4Tkv6N",
  "key12": "57RnyF77vgr3a1rHk6AAV5FVaSeceb5rGXH6ZRkJvX9T9NhWzCVatqT6Xg7p4a7fXhHT9fLLyDvGjt8MJ7qGSmd7",
  "key13": "47SDaEgVLCWCbxU5dQPR3xYuJN4fcyBotSoxf2JWPvPsHbKmfrRMkMEcAs4h8G9tFMacJyz9NP2neCPvHRqmuU4t",
  "key14": "5Gm4XddmUGh4MynAyNoG9HpCuG8FW13pwta98VmCkUyaVjWY5VojTict65WYAnRNScqvjSv5A46csBq7U7rk3QXx",
  "key15": "3FqZNBfCQryQPYPXzCRXkafdRiYWuFQibjSjew2GU92Qjh59S8PcdvWCBecfFSmeyiJWvotDTgRZDVT6MqjNGA37",
  "key16": "31i4rL5Qqskwi44pXLzPNsMW4K1eFjZ9KSvV56Q214MiUStko8eWy1usdJgPBBFqvweUxeMAq3V531rQrveksKES",
  "key17": "2obLMYfmQnND5UMcowAueMRy9wkCMEMaQJBHyTph7o7rLQha9gB8SFacvpqR3rgexm5CP4WgBkjofdHvsME95uFn",
  "key18": "4zFtXbjZ22jkUUMwbkyLT4XPBpNpzn5w6sZiuEBqtoj7K1GnG4R31iEDnLBbrggtEXHyudecZQRHaTk86vRVaLXG",
  "key19": "4eeDZie6auHmyw5kZV7M2GuUBYZgUMuyqSadNvVitYZQeZHmNG5wTfuxHFgcZVQ7EGyPN7e4b7oDniSv9aEcDAiE",
  "key20": "3pZHpccoj8xKscELCuYwytT6UYZKFHznAPW39fhmyzXsK1Y1s7udPPst14aj6EKpvtKm7sGiox2zuAtaPwnD3inJ",
  "key21": "3v6jXDzVdLbzwxDG7nisd5qFARGsZYnowgVoGX73nvZcgRZCcxeDXm5ifvFVTCymHgxjwzoh5cRneTy5pELNmHtk",
  "key22": "nt1rR9kak58pdj2jXmjUgXRPyV4XyXdz2Ei36DXd4ZvS1ZxKJUd4yy9k9vzfMmfqTGF2t49KC4VuKuxkZvYuX8W",
  "key23": "3DXzanzLSeQt1N4y1jSXadZW1gx2hz5GwSdG3iVfHw9tpW2p2FszgMr93ZCemQmKEkGURtdVvR5M7v7TgmRnYVv3",
  "key24": "3c6wnJCYMjArR4xETCY4JDUwfQutyW4G17VZdfPLSiXjze7q5cmiyeFPekzydPDEEM4WK3r5aQqVSsxcE3foaANj"
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
