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
    "ZLBt1CcERiyz3YE9VpP6d6DUwYfvhLutAaj7SAtUhgVGx3w2Nz9MBAYD4HbupqVgPFS81eZsxps9UzjKoD16ezm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "525wchDCPJtJwHveKfmJSR2ttottL1g3axXRfj2QCzS64zKcMNSNqczJpW3bJ4mnGWfoWxjyk17kAxKNLWiN6A8p",
  "key1": "B2CmhrDpqMfmeNCd9v6vJomZSatZfAzpFomsxy1kFAWtVimq4d6BuBsv3ys9FqpunvoJ9AY38xk12hxEjX55aZt",
  "key2": "52LDive9KNF4n2Quxjm1ZVZXZ6acB9pnSaJCsxRj3Zae2MFtVCVSUJrUHnkfYCT5kBWTdRRKTHsGBaLyH5V93wTC",
  "key3": "3z7UHaQwPpLod1UkcABSW1xeMF68UYX35BW1YpRNYKeZvimKERirJHcm97S86A8WLeRt1Xd9DaNp3jDLBiPdSeSd",
  "key4": "pyJSjxe9Brc2Knd3j9m1aSbvccPa7kTgHh9kneLvrrCT4o6U8hDnJ1iEk7d3Ni5DAdKdymuefgWu96ncFfvK2rz",
  "key5": "4giUEYudU3YUPTWTGeXfcBX283AJ426H9BWEQoindAysYFGjwFMzYdizGSjHZYTGq7BQmbuhN1JxEiLvx7aPrXwV",
  "key6": "12A4y1HQX18mGuZTT9oRjfbJ95yck4PEii2zWAkfhpDx6W9NHp654znUekxRZ1zCShqri4a4jpb3HhoHUzrQKx3m",
  "key7": "5bRk2q92em7dXLynivKVMaiNWoq8GxGJpcfCLHVqKWDocW7aXKcbjRzdkBKk23GfvCfm34YifNaE7iqKGZ2L3q3p",
  "key8": "5NJZFRM4xvb9P3swLC1BG1h7kHWn6Ub6B2kEbbWnXuMMVo74usXPoLFsb3ExhGQ5dwBc6wX8AohoMLveYNPujVtG",
  "key9": "5NZ4PBQucMoayGcVU61QMLzjqByfxhzVtFQ3TEtAMxDULWUaYuJuKPWVq3Z4Zn7h4YEViPcdEc3Ft7ZZdSpU8pkC",
  "key10": "5fiWK7gedpWYgX6MMfJqHVib2Pwf6QqxViTN1u7vgYAj9uT55sRYhVKNjJCGLjA43Qp45MR6hQojpUuAhrT7FdCo",
  "key11": "2ht7NaGxzqPotv2HrkmFwsGoc1s8KA8sDCeK3LTkwVb92fRJmnYxP8r5vkik6p9rzZGPaXpvE8s8kJ4gLv3k7rWG",
  "key12": "4WXTGTZYvbnUnWaHprBLDZSgfW1i1oNsKMaCTbZ62AYAQG7K24YRMayxdso9zNAkhwkqKmvGCffm8vb9rppXCmFj",
  "key13": "2ND8CuSFd9e33FdmFK2Hd2wsM4TQxoKE3nWVpJfS6NDUhqGRnBFNoLD97yXEpqpgbDQN17Lmy1EycRZj9RrdxZME",
  "key14": "4AsxgbS3QJ5b6ECZzDB3dk3wgMaZun2t2XKzXknbMQFVZY7N7y3Bs3Qo3dk6HYzPJZBnxBS5yHjGq3hxdg8ZJo1R",
  "key15": "2fRVUiFBUkBJ6ZXdZobqo91kuCXLCjQKyR6254Hv5QBUXcNT7LiwygTv3jDo6vYYhCq53BxZR3xA4iqGMcq7Cqq5",
  "key16": "3VLZJWddGU4zzpzFshM3kvUjugoLJwwRXLMxYexaRxE1UHfbaQtmxH4yHcB9cjE5pwgCtSoAJvAtNbNYS7McV6oA",
  "key17": "hVTwfgzCZtwXE1iLA6JNnQ9zLMRvR6GrbpypUGFzokdJHRFwLtNnoLBaRCym2RnFk1pUDU3C6feVqXiq3LLzsnR",
  "key18": "4BMjR7pLhSYHL7wqaQ6CGxUiddUc1ojH19v4JvqAbyKsadTrZYq1eMia6rkiuMEUpjgy6n3zBsHbyMhUPnAnyHTy",
  "key19": "3YZQae1Ksp2eozvvwhwCoyhqXNrqUEnHXSef5R5iNwmVR65N34QJPySDV99ox5REabwhGhGRVyohYHF1WRAEvxRg",
  "key20": "3ekkQk9PVr5M6VWF5dS6aD6GAv9GDE26WB3ke9KyusEtu96FNzK2DYdEuwYc22MvR52HZujZ2eZXLQNnFmNhvnDc",
  "key21": "4iV5m3hvaxPMpu6bNAFhQnDrD8HzjvKNu17FLrKVTvHbQSkeHo31yRERNCs5Q7yZjw2Lr9QNhWeihzNtnvTscLX8",
  "key22": "i4uUFQWBnbiwqxGtEgmu2vHECVcvLfu6impLhaRYQBpFumUFM9Q2P36XvemaUwRG68USRC9Vtwyj7dYWZxP1QsL",
  "key23": "4oYicL66YFPJ7MvkTn3gzgN7ku5W3LYVqYY67zXCALWC4uxqJBSJiXm5vG7Lk3EDxhDB1vd5q6d4pPTMt6GEhwQL",
  "key24": "3LVcPX93pS4bhZRj6ng2wC7hixATAXKFpHrCEN9vtd8Ltf2cBUc45TFJvpxWRPPttCUzV9RSCchj5d2b7af1VJLg"
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
