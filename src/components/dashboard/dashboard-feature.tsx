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
    "3mZsX8s9c11VdndNZga7aFPTXh3i48b2mFBE9JSS3uoeUiyUsoxfhAmNukueSUdDao4wQS5hiyKebXjQGFKX5CSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45yhjyX1kHL29U6KdkKxkxDwmm1VnVDVvxqwCvdwTDVhwwkpKfNQC5X4XPPUWkZ8BFugXFjVyzfQhdtwXTFbYA1F",
  "key1": "5CNuPMDmcnpdzUFdLhpFSGhJ2eBEbDTLrNfuX8u9RMZzE3UELG3GDSwBcGxxgmiCqJnoKKuBRFjLAe4im9mTEDz1",
  "key2": "2qnXzXsYdnoL7Zv54NBUPwKWNs2JJb8JoUwbxWRzKT8YCoHx6WYPQ9bHuzwwy5njrteQWFSC2jfat7t3EbLJFVtB",
  "key3": "fZkda3yU3WWP3thmBmUMdkbvSFjvUHqKR98jAg8sEVLzVraHysY6ScEs3odoW6woRuo5Mi5mpmDXiBfZQy5kWGr",
  "key4": "3LNTn82fVzdJTjTW8oHkDtovuHYe8hJLGeXHAgvZ15n4EXcVBFG9K14VF59utYnx8yAaek2ut9jjQd4FXxKTopqc",
  "key5": "8oYzR5ynXUXQAqdeLYZBwD9Mp9soDL42XmjBBqQiLM81ubX9BLAYUYcMbziyXHgum6YTrcm4k9xaYyd7v9LoxDw",
  "key6": "4KGrHGrtb3DdCLdjYUTiiJiNymniP1UkzJWJ7a5pwMKBUx5nPD8AuV1CPx7JeRhwPavLjCAWv8jjxTGjckz19zjv",
  "key7": "3mqFZPoNJhASBShmyAvB9tySVw6pa9vTT81DBWQR4r5Sv5KNzHeLQGnnfHknu45u8Y4agz3EyMuQ6x3qFwzqZ8cL",
  "key8": "2bAWBKmqqiBHSn3TSB6zCuxp3BvCi8foNYbKtvVKBNYZAHK2CmazwCXJ16Yq1HC55xLvt1mgEqgEyams6P9LYxLe",
  "key9": "3MrNgKSEbZWeBejicJU4jdfn3NDjNjwHENuQyfPXmRW1SpCFmmwUeCeh8avtnWaFHe6k6uGn2CNUTpg5wWhxR9vT",
  "key10": "tKqrWbGUD4sNuH8kqf7F9wBa2JR2svoREQttGjhfy3NtCYEMDXuqTymsaRwwegqJcKkXeeegnG9PsTgb7nQ1y7Q",
  "key11": "57FdgTZqUi7ELDzHafGvDR7gAhjyvSHT7K1ZES48bz7FsmmkSwCQpcWdCH4WuMqAft29HGvpnGiY4fUPvqf4PMvB",
  "key12": "3JBs9baGwxa2YtC2biKxUUqDmEwQ6WHc3rhKfvaiw74vtADnSrDBXVmpYzk64KZWhKzWW5bS5PymZcPsXt5d99qv",
  "key13": "2qfHaDzUbYuFuDBsG3qGkPzosd44LjMHZFWWExvRBoMBCWRXeTbqt1HYa17BbZnbDEPfNdKsVGfUizkaY33eB9NL",
  "key14": "5GSBbTTz7XBmtyNeSxwENE6yakJa55JKWJYSL1c4nu2jdo1onJCcRTGSNpwHYLDyZECq4yHUcciN2j2dxtaArTTj",
  "key15": "2z9ojqZBSFVrdGSY7Jn9pui3ohi2KkFPgkJYzKyTZakLyNNDRLG4FbFWV8NyXcL57GaipZ5DfAsa6n6k1sNZsitU",
  "key16": "noX8TKHTpsiTJ3ShSesYTjT8xiZZRdZKBfxNrDRjeGpADaSz9HXiwxYdzybii3EN1J4R4FBWPXwn9NFZEkkJZkF",
  "key17": "3J6gTa8hwVM9hiRgzkF51VGCKYL7VttRTrfJyQhwQLJpdQ5n2BepgfGYf8u9zAsNrc4not14zsLyQ5EEXtw2Fc1w",
  "key18": "4BgRmSKYUJoZTBKofXeJdxkKKKRVLiQsEuYhboXdVNoW3JjpTDyfiNT18odTEuu4KXJAtqGQujyAmx7WwVR6vG9b",
  "key19": "5W8SsNDvBrQ5emBtp6c9fUzUUo99Sjs62mjysQmnzfJ9V3f8FNgrJpzzYyLjL15rVzAbfxo6YPSwSDEjHC2PZx3p",
  "key20": "4zhFpAc6FAkoVhVKiFFfySFBMvPbYEZXx119UmSXe9hsveyAY425MKCfvaURr3ZndJhSzauXp8zwvNM9AoEb3xb5",
  "key21": "27DPDYNNdMN1T8hjHRNzsxhtBnEgd9nkk8RbganSqeLvjNbEkgRCYDrqBdhpxahhcZwz5kh1GzzhFoRaHNohqyLh",
  "key22": "42kwjBCpTx1BUYaCuiA6AryQvNv5zdLTJDrG7Kjnd6HSPgodE5BVVqJjmG7nFjKoY5MDwP1sfV4UguiDoBXU9hQF",
  "key23": "MWzorDzmpac8WthrmKqHbZUU4RuxnvSQjVnbMExsEDqZcTYRfff5WDGSPzzke9vvEMdanLVX4zDnTWJDAdwtMqs",
  "key24": "3GQ6598KvH2HPsJL1zVsQcTnLLh37wWWcBmPJYRcGGoRjyDJ5vWutKe2mpDWXS6UNwbgzwqUwjnphpjrEGzJwNke",
  "key25": "46ozYiyAJFYsRYFYv4Pr6R9T8koHGxVD3mBfhzLwS9ghQdaFVLwPRpr4JmzyFKq7xCFqvGscSHDQbMyGQVa7b51V",
  "key26": "4i8gqam5hbsYbrg7vDobVmWwLYAKbrSKvcQqpbcCh5GL8q8jfHTzQFKihqYmhzCtrKNDWy9wsKNjcpHc6S6SJU9P",
  "key27": "3HHznSs3qTzxsCjx1xLcCZc4YW7aL7Jp3VaMVdkw75zWrzUZvxTwN3hfteb7MZNNAUc2rQiNknsHkieJzzYmB6mz",
  "key28": "4kJA1yUVykwdTXRS7bwPKqLKRZATH2QmjsHnEcqigjkZHCv8m5JgYmcoQ3eHBxzGP8M7h7Hrowk1x4Pffv9VNfkp",
  "key29": "4FA6F5ib7vAMdchHnzfaFaSoGK3ickkWJwK18kQ3XpCTfTbMYp9kVqwqHohkRwjeJggmFJBrKKZFGBRooLvBKxAN",
  "key30": "JTcaGbZBBchPJiNrq1s8NH4hrev1H9ZL35m7zAHaeejYgGTcp3ZL9FjfE11h3DPd3gveUj4J83DL5vRdg3k8Zzf",
  "key31": "4pE8cz3ZJVJuzegea4tp6gxv48eVMJHvztm3rDYarY8QSR7VpBrA1i6KzswD7npR2oAcYLVzGHEspCDU2BrTRuHE",
  "key32": "4Rhb61S6aGL5WLouKPYTDHkhDPM112fdNLrvtwVk4Bko4E6KqvSXJ2jXbJvrGJZdTrGuWRfWjkWi4aSaTmj5vWyL",
  "key33": "526gDZVgZ2BMgvq9KT1rsbrAowQARV7k4VEDa5aPdtT5BqYMZqiQzTBE3PwKDGGaYCnwvN21AgfpF98eCYQPitrt"
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
