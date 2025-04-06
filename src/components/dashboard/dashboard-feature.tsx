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
    "29DXsF989c15FYaqG1zYezTpipRKz1myUCiPmZzpRjJ7Gtiu1yUD4UpsA28wejDtpNVjENxTfAE23EgR8M7kF3HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeYvTw276nVyzSjb3R1zGa7nuRrh4eyBrWY2cX6oXH7kMNVunKNyJVD4rVYeA5A1nSxghVe8MuvCvsHDQEW9gd2",
  "key1": "2mwZughHUgiLUtPH8yAdQrhD9axfzgofczLLEAM6HfgRhGTvaHYLFhCTV4VmKcEJ2WuLNWWv7n4cHPAfRjRtpkDN",
  "key2": "2j92nY3UEWe8HsUJ2Ui9CkWifLLedB4ptXgZG2AykhP5d47iuNaP4tckzy371MAYvfTLAxCW8RRT9GWgSVmNacyE",
  "key3": "4A8sDTv1cUXNMKw1PL1uDyx6ZkgaCpFeYNxBEie5HNdNxcw5r4T7PGyyhdzgoR4E2JFCbA3yRDZgf4GdoVzvTPDJ",
  "key4": "66o2bfJBvWAokuFVQZH7oUWvmoyWncjLa9jAx94ms681EHxkWmcNgE1RkqXEqQnTHF7NFaerBjjbx73fQ9HWr1cE",
  "key5": "4mQJxcAPSyb4BqQ5oVMHUzCKTFRiQu8EMM8rKvvJM6DqFLL86zUENjbr7DNzXbewgKM6hjMK4z7tHDYB54T84SUc",
  "key6": "4cLe7zGxQ3FUMRJ2cpeacsPh3CU7pCgQyM1sCHy9zxw1Qujn3E8hULbnKHZQzWpFRGmeSUzwo6ETyV7Td8TBANnT",
  "key7": "45kruZHtsi6F3mtmybPBfJrbhAeSE6zS8zNBmmEfnRxyg6zFvLY3QPjCP1rVHzDU5H6CLCMdNcycXi2BWEfR7UPy",
  "key8": "5QhjhZhsJparuKxDkCwZ8WonpzymwzF2N7g41KgURQjLGGo1kpLQFVfxYCmbouJh3p6MJydzAd3NgoJj7DgbX9Kc",
  "key9": "i4W4RoF3bSLGu5e2zj6YgaX7QWuuHQjJLiwxyDfT1ScrqsSTn2Dr2JmsB3gq9UzQz4NAQo3fUiWbEzMpF1ned5E",
  "key10": "LzzEHj8gs4dv2ZDBwQ4vjcoJ6vPDARweoVMrdp2CuQ17RRiLtK2hjGFv1fjoEQkJXrbhtUJGTuNPwkCiDAYBcwQ",
  "key11": "2QFsMcbDVN5edV8LFiH1XBfcFaxRadvFq1y6ffQXamprLhpVt7zJNPSypoaCsdCu6jbAfuikbFJGNtSrWhwheCyh",
  "key12": "WKmSvtwPVgwTDFG8WdKBLb5bH6Kv7DctYsV8FeZuPvE6Ky1X6nQsEA8b4V1Vmh3pT6YqL4ndYKPVexws25GHFGQ",
  "key13": "x9Qc8Yyu7A8y2LcpsQEfnmzeNaPyChzZztSghLchi22TwiwvvMrZTUZnMQmiSv2ERujbWHdkyhQVgDuV2Scv8N7",
  "key14": "2ybBew5vz7beGFhgs8vg4dBPiocXE99fMXyS9feLPuf9BRDsDnbTWUF9TtB3vdCmMQ5M2uFjaq6ooTM93op8MiKV",
  "key15": "3vE5uzNB9qwiP7KVtgC9g998NCe2WXsv8zMQBYKCByYBDHnZcKXmcYPVNqHuy6yhTthLM4jAND4CS1S6RGWhZDSd",
  "key16": "aQGNmhQpfifkX95pgQrKyoktMCqBL8VWJuZqKzJ8PaU1aEepewxTJGWiXvaK8w13sjSYC6Qdu3XAeB8Gve9kX1r",
  "key17": "4R2qMamrqXaQYmikjbY4b1iyUzwtqxGnSrRdXiHE9PzQ1qu2GeSRA2DoLVKpP1Y4AFyQkpSaEMn6fUn9iFmezcBK",
  "key18": "3iLutLtonTQYFUwzSB7YF1kXFT6PBZU3Wn79xAvKwVuigqzz5pdyGSWFMp5W4DnWyKkJXRkNNcps1aEVnF5Mkv9R",
  "key19": "4WMF8XtYXrH2rEBZKEKw17aiBNaCSKbS7oiuigucSPxvhpJRydD7HLe4UVjj7L6soPX4MY3MnZ6pandHYpvnVCA2",
  "key20": "5VpjWoAcp2U6fURpGohoQuNQ8FDnUhBMt8qdkn1cxUxfVAmH2ULXaXo44XxsEHEuAwfJuaLn2sxDKbUgCHa4F99w",
  "key21": "4nHkKBp1gfkQNgKEvfcyWSWUHvRQN2PLY52dzXbcwoB1cd3NGvCd7KNRd9GqmkhgstM7CPZmz7z1XrXUFyAt9TSg",
  "key22": "2TCkcg5oxz3SXuamQWfNhwrQ9MmGENiD6xsCqC5BuHcsFq16iyoL5YzJ4nv1KCJCNQoJuubuSKnP5SUg1i9hQaeo",
  "key23": "58zGBRAvZudYUVwf7eLf8ZQ9iavnPi7yRzowB6nuqQajABen9imozyvWFZhS3R9feFUS3r1jcUbETRjwBBbMVQwg",
  "key24": "3sE6KWTyZjfzU92ngRpE5yRfpj5NsjU9tErNuMvauTYacvg5kdXrtnNob3dkqbW5GrGtLsDRiv7fLcUXW2c5EjeF",
  "key25": "4pwXa8UKSbRBY32cXmy1Xp8gBKhWUZCPR2c7cQ8Q81o6gZ3TRnQ7q1aeYCBUkiSowsCCiC8UTJiqnj6T6WC2aXDd",
  "key26": "2Yh2aWQiAiWPpQ7T4BTcpQrggpjhj3tskxV3znZSi7usF9E5qsscLGCp2NLZTYcwWGu4fV28qBaDN6wXvvRhZ7zg",
  "key27": "2wVME3Fz6JpfkUTZSHMgEgaWUQGH3QJ647orV7xryKUBJ8MRw2rGKCUdwtzCZaLc4fPUmWjWWkKFgcvt4vMzS1c6",
  "key28": "ANZSAZU6xbMAn6d6vxaVeSDcYMXUTLMaVz4VpdzSe77cLnSGjgUpgYctY59mUfFcGh89VcZbLQJ2VYbKpucov6Z",
  "key29": "26e1XKUXxwRN1FVhyZSWYudxFTcWdGvcZgCrx8ZVj37ruwh5pkmgfU125ZFb59H37LjNur7LwBugbPG3Dy7jr1Ti",
  "key30": "bhA6krX6XBnrQqdAttJfM7U8EuJu4q2xnkYVXv5TvHtfABKQ7Nc1KWPWczm5SrZCiyMdn4hUgmmReQW8m3fm7GV",
  "key31": "3AKUYJAfuKQakMzXyTSewNZbkVgDogg34LGM2Q8A49dKsfxtkLH5i6W5W5Za5ZYkfrke155LiEvBaP41BGAi4Nuc",
  "key32": "NF8qZmfak2qeeHSUDg8MFbNRoxWUKdVxf5W5rcci5TYQD1eT6iUuY5UygTRpVW36KZbjNoZdsDAPF9tGbti2Av2"
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
