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
    "5RPFhSwRKQPYhid85hF9RgWVzAE7PnoGdaGKJPcUrfBzLf2skCqjJ9wpJNL1ZMwsDnzEm1YHCab99kWD7RvGPcHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cj9tMTzL5ir2kHq4efMjT4ZKDUYNCbF4QibuvU7HUCcpNQuW1Gxy9yirhooG5JebVGYmChHao4fYSPgtW1fyoEq",
  "key1": "4gJxoWsLdywR9wH5Uw9dnSYpYR8Hn2ty4D2odZz5yuWvLiE567PcL8Db1Ghocyg3pefqPAW5N51Qxhq4VFBhdvMT",
  "key2": "4BuAMetzKgc45oqnACY2NZ5TJGo29vGuaHQDTWUBNzZFwXMpmt6Pw2HrHkTMKCDkaC653CDogyEvcwHwRGni2ZDB",
  "key3": "5ukCcmCu6ykaf5rZPX7Q6iwdAUoGqjimLf4TK4gDTrkZiSgrBL71eMpJkELRiSuzjfcK44KdJaWgB8avwBuoNG7C",
  "key4": "DHWAUVkrEXoLLcuhtcRGQyCdv1iK1V3ZiZZUSHUVRX1xzFPnYNNAyEQE8kzLS2PdLDQiPr9Ddujh7XotRGv5kEe",
  "key5": "31fGdY6ZiNm8aS3vPbTvGBmo6ncptQofmZt8jmwpBE9z6p1t2TikVEsycCBW7mgfuRhJVPfiMg1xSNTZqACuCgk6",
  "key6": "3BTTJ2oGhSvdLQjeAs2E1685GvhmELHbt65tCwfE6WhWLcySiwCLY75un4Ui9dKcpmRBTwWkZPt2bduFRuVSwsS1",
  "key7": "n1usdnNJaksmD23cyPsUks92sVmEFhHFjnexhtpN5WRHGjPt5tGmoKGZkiAjc7Wvkxf7GncPG35P1zFGEuKkEYo",
  "key8": "5YrASUYUX71pKE1E3a7GgvjCPjDy9GHjNsyGx1HAvp5dbXMs79GrDw11ozRGwVYVLgL8WmiaucLThouPgew6kJPM",
  "key9": "2uMx57RgAs8fyvPCS42WWyY4fYd9rhB58CaRHCNnUtbPqRjXBrdt1o9sNw7RHWxCDGB4LCs1vQDYGScT3w4ffnWn",
  "key10": "szTgUqdRNkE2Zmpvws54zhJAQ7ZKhQ71EM6JWGu87aNVcm844Bh41pAwkyCYLFTU8HxJB3Pz9vVU4iKnHboCTM8",
  "key11": "2QHmuT1vjDn3aje73m3YLQ5xf91XpTvpALYrD9cuYpbJ8TckbH2vWoi5eBj4fi5MHoF4rTZR1SCHMioHvEijhymE",
  "key12": "KrypYPMuxDVUVFLx1zafKnNYFGFg1hf2e9pLMcjFKWuRwXN9RpYnabCzyh4GgC2UdN4UAcajn9Dj9Erb1yd4xMk",
  "key13": "EEJGU1AHK4YMFah8XVinoTa8hqon2E7wPtQLKJJ7X7AHqDc8tz7CL1Xw6xeUBNAFkxU6iiuwsd2QZcqP1CSkS5N",
  "key14": "2yhXcucESf9BZ39vWu5pLS9XaueWQZ36c5ShtVJrgSew5JvKgcxkBALX2CrA22ogYxGBYWEJ79zsnzy5TwvunipT",
  "key15": "2QX2mkrz2fkb8BYDCs2FUfvu7qpmeGP9YeWeQayMxJdFJSvJ6dzm1SMCYvLg6nTJ6HP1PgWWvXjhxqmNy4ftjPJR",
  "key16": "fvT81aGAxZ2Twn3QwgpcB8Hf7quDdomDshbBMFvZuzyKETESTUmmB6c8XBcpC8cuTtaPFyNz59aixadkGy9mGjH",
  "key17": "ekH1LL8cwg84TZqWG7tJP4MYzSbUCrkrSe89AgC9NYPjjhEi7EU14u1JqZgaFbSi8RQg3ZAouk4BNCXCVwrYS4Q",
  "key18": "3QgSy5c44C8ihCbvnasxRLd7UQX92aKn5qm8Lg8tWeLw735UW4JvAXA4N3fkqprDjWAa6VcUpxa1cthFrjcN1x3a",
  "key19": "BS25KUQGFcSrqwS6xz33q6AGPSYS4dkJWgNvkeDUAFYSQDWtV3QkPg9NxR5GreBGedas41BGoYBbBnY6MT4VKxq",
  "key20": "4Lzj8N5hdKmVZPxWvgssFUgPneYhadjsCZmZyVvwWiAbGtbwwauHSDis72FtKqX2JjN7xWTt4DfSqLvUd7PQj4mU",
  "key21": "3T2AG3hPDd6tYazuqe4PRa4WQmxAQWtejHJCoqpAp4Qoo5MG3zkyHiougMCKsPxP1cPiXxdzZbXxzqG5yqPJPrM7",
  "key22": "4jVXCbCEtAmmw588SA4G3Z3nNWWHmE8zBaiFJjobUNc7ep4AXKkqpXTXYx2ct3smSruLcVdsWsTGwSPV8Xa1iPFY",
  "key23": "kDZfa88PDhKQ9Vj9pDMgAKEifTYanNr19HmmvzJm5BLmpTCqMzfFh9tUW1ubgf5LveCzp6iZjspUtjwMkHhnCQK",
  "key24": "44PxvZZskJrmR3ubdH335DmWav5brEVZ636zLQnrmfQKTjVqn9kvnQtNFVwuaAkZScZN5SuDUUaRipyM6Gn3Er3e",
  "key25": "23Wd4UkdMmsU3ZSDY6VUZrec7GJwjpUzMwcfD4Bp9xM1DvWvMNVfp4LjsF3Mr4qPJkizWrU2KQLo4UyHq9P5e69h"
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
