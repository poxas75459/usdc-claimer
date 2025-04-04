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
    "4Q6a2NEauwPHjgo4WwfxvhGpSUAAmBCQc1RZjZ2DHopBCz9YvGmQNQE7KbJNu5QcrN8j4X1jYNHPn8PrZJVRrcSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mptF333rsvfxdPixxi4A9gusDzWF8CB7RCxZTL5H4jKdVXttRhEFdmqbwBSFypLZVz1CB2upZA2MDaBGeF5dYjc",
  "key1": "SAmpHv32Zv2mqSckdNmCZSdAFWLEaYYK79yqQsqPpg32xcLJB8UDaTYVkJ7K9qaDSy2Qq4aFHvQ1mrPsQShBAqk",
  "key2": "29onsKW9Lmj2LixE23kA7JT2aDwQn2E7cAqYxYCVqpcWMkiP6WgrwbzX8kWhTa3yfE9CMfRHq5w1Hst3oB8Gru1v",
  "key3": "5vFLfj13kqyfVjZye8iXqmk2Rnd35enbhPDp1M4hjJVYLyATHciqQAX2DZEnTgjio4cZFLJ6BFVtcuAU2tE7V9iT",
  "key4": "3YWq5n3LWV9MQ1ngj9sX53iAu8aRfgRvXWeS5csRY36fLpkR2bnqQKhqcd1MEWzUu53yspsVf47AFWuGjiXeS7zW",
  "key5": "2qTcAFvxXyun6h1mu9FUkAsroRx5QTvPEpyx9G9ok5Rfr9jZJ4jgAvmJbRX18Pf16RbigRZzUbKsFfd5Ep9mKabD",
  "key6": "JGkBHZ6rX17NgV371z5tyV5M7ooVtYieMsBrogzPR9mM2YVMA4dzb4quLQ8TK5kLYgLLojzXrRRKrsefiZBNRz9",
  "key7": "62xdJcdyEK7h8MzMXT4TwmcgxQtVs3yGF9PJ5waBMV7joA6cd9yonGjkSvpVVeg82PTP5hcurGZKqQ3JNFDXT3xY",
  "key8": "bexrJKdSPsb5rXdF1qvfMEiDU3kC3z5Cw65eNE13BvQX95WcKg8uMYdAj6CiLKWB1hTD59tW9pGDrBwr3n35fQ1",
  "key9": "66bKedUe1Dfvx7gdrKbA4MyvPrf1aMexRJHfz5YgH67gdhDkKmfWcC2VapMDy2XxokC1c5tS4cVkpjVCGskx2mVi",
  "key10": "2qHE8ByjaXiQGs4Zmpzbfprxg2FkpdTmEepygYGB1SuVs51CLEE3jGz85ZeUHZLREsRPf9U3Y2ViCbUVm2MoyWso",
  "key11": "2acAuJnxaeyfmKtCFaLTw3NtB64Qd5t4bEdmEsYNhRVWRnaioyiyTvw7p3bevSs46yQQYWRNzsVhHz2HCbimAm87",
  "key12": "4s83D9eeLbj4RpBWoVHmVHRZ9MgdTgqiPU3cTmWms22jZTgGCb862cXUCNDjiFFegVt99Fg4g9FW3Pw34xhDMXbJ",
  "key13": "2vLz1pegtFWhft31pd2ATbWKCxiNP12d9cKwDTYrEXk7KLAsqGNvZ26ryTZzxpKATdZ2r7SP4VVQs2E8aZmpCA2D",
  "key14": "4A9r2rK1ZeiaJjrE3bDdgvW2XBngdpJ9ytk6TWdsMJLNiwoKC7RPE2CxAupbkvyfg4MaLVdazck74fDk2qr9KWCx",
  "key15": "2D9jaNGfBfAUwgmsGwUNFJtAybaFC81hcb3HknegHEX7cGLoQ6HeTwbj79ptNMGTBLT1DVHcHXLeq1L9zmHmXcRD",
  "key16": "447sKWNgku4pLkcL8LzDp8tcgRaGmf9Fec1KtqkVXJxh3mwDyQ3JSKGtwzu1VZrrGYRGWLGUc1bocFmN22Lb4SY8",
  "key17": "28Pdsjnb5rs1huhc4prpa6c3jw6ujEs54kkrHCqeJZDFdnmRd1XMxJdWkP7kqZR1ZmC9eeQE1AtHdyNgJwDCx1B2",
  "key18": "Zsocj56uH92mX3H7RgYXGur4F1XBUjwtsJXDvEuHPua3SbmsCaE9q2y5MuuwD34J9jr5qVeHmPuXqLg8N4jFcu6",
  "key19": "5sffAiPDt3tPuyc1ktT2tqnyz8XzS2w17e7C5MSi71ETDKkLskQDfr7bfwTBEZ4ed5mwyp46VGmiYARKmFyUYAyv",
  "key20": "2337duNvwaw6oJjqmjjvz53Ukf5LRbhqGS3aazWGjJYcjP234o4qzvkHeScTt1939EDZwKpHSQhA6uE8sopy5Yho",
  "key21": "4gL3TH4ifNi2Ufv3QK65YYEYoZJjMJuSk3UP4jhLSHS4D2TFUWmkc9dtUbEvFh93z5EDNjTUhgsjSP22jGe7Xq91",
  "key22": "2WQ2zyiSGy6x23wHECT8aPSmcaJcQDQGP21zmUGCuZFKUXpadyFZQhvhKJctjDnVfTz7QsJYLVmWovvnBuoiywd8",
  "key23": "5k3PmkUoCzHVq6tWrx5pYzN8q2C9Ggmv9mErNPuP9i2fMZmrMEpB5cS6BjMT67cX9Ey3axw2h6EeBg8LZ5yHA2Hf",
  "key24": "3HQUrgmrnxJF1gQWe2qVzSCM8ZpxPj7iinKGJn1WYxjmRzJk1ZNqymTWHV1Vsr4t3QWWrPN7KYUwjpJyHXQcCkNG",
  "key25": "5KujFRwnc2yjsZFd2XoLbyayd5bxAmMC8z6Lep5xzEZHG33Vu5SPoVrT5m7y1aJRvosxtDGBD7Z7KjmMAajDTLMe",
  "key26": "2rY68k3hjqFZdCX8S1zW7HV3xDQxF6oA3bVdiZ4N6nS3nBh2ikEysKzE63Qs7YxDQRGctVXGfEgt65SvvMqoUeyD",
  "key27": "2Jsn2GHkNBx7muYocvrUVTMVniTLk1fNpDEijfQ8cCk6zRPwKNKssH1ocqXjQbDQi1mcYYNNTXaRhbJX7DiueaNF",
  "key28": "2TjdRzrp293p4ay2wXcPfibKdk7UuTE2bZ7LpZjy3J2B2LWhoLByTiSmc5GDpStKvRKP9tYSaFm7T1W4vJjkbZod"
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
