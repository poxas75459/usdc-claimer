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
    "3bJRT8Gm9CAXFiLxh7vtSH464RZ1LjWU4utELBXckD512C1NWsPdrG2nJ2B3GhmRojZswmCXVavHwpgnjtEzYwZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5USQi2vurT7niX7w1efrHLfJg3pHD9zxsZFA5Q6RtKERF6xoh7CvEoRF1ajjfN1M7T6811qU6cSkXFpop391iu",
  "key1": "2fWfvzpqQFiyYhiJa3amaF2TCwpizpSFj5F3WurTeg8Z3eH5CGc2DXR4bbwpqqNmDAnU6WCETBFrwtmo8cuBo188",
  "key2": "3JXhzVLLWXa7SbZnZVk7eGWaazQQ5Q8JPW5MJrugSuUfiHG6mERZgkWZUACq7f7mwKrA9sxhnEuwBbJBzwXnX7iX",
  "key3": "3eyND1zfC1dBtDBnb1EsVfVWUzqg4Uh3sQVwDf2TKAybzFKSCinG67f8we1nZgSTtE2enLzGNFb7n2ovqWx19mk8",
  "key4": "CtL2xpT45SDNcRQQE6b8z4shwMrsR5pYmfao35jGEAWPTLaKA71owEB1WGvXPZF4Sng1nWtzckmqG5v5dDvmaZc",
  "key5": "Ccdou94AcKgbvjVfr5PhLXaC2WsUrr3vbt2uANoNNvBoUvt5osZxRmUcUA2MSB7FYzqYhTmiGv4PMhmhPAjJL2K",
  "key6": "5k4AqWDRjH5R2Tw33T5LhiCjHKs6aBPK4rhkzrFm58WUqB1eay59NfCxxcTqJCnTZ5hmoQVSqNhHzLMdFmzKdJi",
  "key7": "2F9BWk2uqt72bXmGRYodZVNW9hXYwitSGUvvEbH65XB8DfFp26xUhkE2HgdP8yeVmU27ujvyYnTeSabtwGg7zvWd",
  "key8": "5nBrCjNLAbtfMCeaG732eMuP1Wf91hrwwQxGzcLx3uFaFXsTTVXSbFeKLjpJM7Pnb4FzXkTPwavcxrry8MwBjfhd",
  "key9": "5B3x15dra9Xg9t2PEDHxBJt48oFtTP6QtU5hTGcsVe9JejaPXVizpjQrXkh1B3CYK3f3XUEuraAeuoFa46dnfhzC",
  "key10": "33TKRFDvtSt3gaMgnHBUTTFJxze5gpTesNXDgL6X8Hag32vZ3iEAS5CbAXUaF8PNt7jRHgLKhchhggiUig21RG72",
  "key11": "4uhwXvyGAtbK7UH6Jjx9C9emzpTnVTjwQfHyEMsbzqiRrwUCtcfKNj5yiyTwUuM7jKj4Sg9mF8svwwwVdgQFyNeG",
  "key12": "3nXkzdK7x2TZSjwxhfxJi2ReVmoBbqYTUWjE2i5EYXjCarstmMrZRCLJ9g5hrEcUMagahQsN9821wnn8rfmpf9TL",
  "key13": "2gX7ggJC3L49Q8SYz9fi6UjjSxeZnEpn1h79D8cq6s5Ginq29E8ppHfQfS4wJMy2g6kLeVnvmUo9nUSTk9KfsDCA",
  "key14": "36TE1GmRZEYuiJnKQn4hAUwFnw2m9ZfNXX9qZMdaFqvxFcY2R3cpuj5tKbcxY4da8rEpSnExNSEzYijYNqe2v4FB",
  "key15": "2wjDgWw2sJuMxiN1kwdNSgXNvUQpAdXL9nCteUz6PfcxncUEPPuUrmfQQ1TBX74nqWDXWfB8Z2CXFxFy5X11G3nD",
  "key16": "4RykNEHXegtcU8o4aQHjcB58vJWe1fWRAwUfExKFw84sA6Ei184ptDA1MV9c4pTYjdJB89yqfxzCXXV9MZmvfsCf",
  "key17": "51qF81by8VVYeieDe3SP4pdX5zj81F5XQBpxLXRPL1PkVkUbsmPX3fYv9yuvCnG98c5LF2oRUHmGsfiCMPDnLiqH",
  "key18": "3Afv1y1gqL4iwGpTdPGY1C962Fi7uDUMrrQQQrBPSfhMoB3ggNwi8hBnQkVeuqnaR8Gr6Y3odRjndiYzyAJYdzXK",
  "key19": "jvZLpK1oDVLCLVgEDqdCiwhzkaNkNxXMwoaGbXi9Y5qQBasw4Rv6GmSb7Tnqx7Gb3fKfVb4BBqRpGHnjMVnJWyo",
  "key20": "5F5KMcGdYNxybtkavkrDf4wpU6m18xvnwnfX2usXJn975usaBGvyPdk9L5WV8JRKP7Jb1t5qtTACtmcNCqryhFeR",
  "key21": "32dG95styvAuH7hV5qjCuvGXzL7FP8cC6bT1DWJbekTvLatCci7bZtoaZZjqxsQYwuaQzHnJpfKyMkxYyudZ9yqK",
  "key22": "3vDCHd14hWVmtgqJcEzjPsDe8JTsvfJrJf7VhUkCvbX3Sjk34LBAHHuEGsuVefLzd8QjkJ6CKeeuFkDSr6yag2iA",
  "key23": "32E5aFp6Xb26DWALs6Q1Z7Xch6XLLUVSNaCBgTeD3Q7AtNfxifiXekJwheEFpCT4T3eWN3G22MdymzFXxnoCEqry",
  "key24": "3RCP9nHAetsDnockbbcX6Kep7ERfArRt3z4LbEksj9R7fw7mPimYVwt2n8ttGbfDUj4Eay6jA1e57eNHt5sRc1Bc",
  "key25": "2BbuXr1yJrzCV5g78Q6K5dxFMcquZbftiAtAFZYbf4CReVKzFG6e9XrKN8nnGxNzvVT3kEYSSN4jKXpUa2v45AqF",
  "key26": "2snfPyvTJ5aWb6bfNsP9rxj9rW4vYyNiQ7jkoJfjhvfFRfvNWqG3WP4x5uPWmWuEdRCuX9vpsnFPBvXsTXGApb5d",
  "key27": "4K9FYUm1tfKAgJa7WJxvsD5XgHf2kCFbcnjdPtA3aK6yHR5wHaMX1RmWBdJZR9FmcYt1CcwL63i54pUuAQCCQEQj",
  "key28": "25WGnsqT4T5JmvtaesNTjCACoyc8mBnPSGTiko5iEL5DotMY9rYh8oTo5v3r1xiBpjCGtadzVBEKtj4fpTdsdkNr",
  "key29": "3esf7zBsh6rSy4ZFqsBMWaAUZzSve2J7W3CifEGc9ExTsb1QoYQunH4rTEhnJvcyCmqimCVG8R35VcFEVTpqwp8k"
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
