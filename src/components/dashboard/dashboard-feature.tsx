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
    "dedwCRbEqzRHYVEZmaGfmp2F2vj4tzMpFRrH4CWfEMgWhkFewBqYndzSEzZUzK3BeVetwEf2FD2vng4s1PTK1Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjpJiQpjkyX3qAnV1GtqZrLccZFHxBDjgmKnDjpqrb1tTUtR4Ac11SP4z1sQFGFWQkZe2q1WWV9NFbk8pqj6tFJ",
  "key1": "3iCK9JqAxYZBTkPZqtEV5SoEtcjM2ATECFgMh9gDBtUD6ij3kAxdB5wUeLUKT5Q8UhYUaHDB4JivX4JzGzU7FmhH",
  "key2": "62oFzKo2e8p3n2mGCg8XcGEkqHgx6PpPM2JTBSeXNQdr8rRZsAz2Eq1EfRvXtqz2oDex6vLik9G141jfgNnRTsyo",
  "key3": "3T5ReSmgVC8sNjvCcFZFWWoVrJrARuoJsJWMbL72WXFfMeT1S2zSBjnCxCSDRSMYQCvFj3HvYhAWdpAyAocZtjof",
  "key4": "4vVQHjrbqYSvEUgjN1aiBQEQhqr9iUu33sc3ySYgDwspFsv9vLLWKR4fyxba6C3CQRtwD46hWN3BPNV2u8daYXws",
  "key5": "fX7ErWxqXpC9sJVa5ssD9NRZDGKmcB4Zk8hW4S3awME97LUGghjjybP9RLvdkG1TdguJhfDCWUEraEEkX43ywQY",
  "key6": "3mQXDBtjF6DUosMWw2SAmaSWUJv99Y1RC5Tne7BouXKxBdB9yyFb38j6GbTuim4ND165FG3LqmNTQNASXq5b41a1",
  "key7": "3tcUXqY7CASqypEraVnEqyZkpWvRjUW9PXr3fpQmZcf7VHSUdinFMnuZfLr3Bdb1DFqM88AKF7Ynq6cWmBNFrzcZ",
  "key8": "5qz5kB7saDaCbGXUvM8FsGvjPPA4q3rKWjiDU24XTJkhDe8LZTK8nECqtarpGR3xow8A4e3cvpimqBkxnLHnnyH1",
  "key9": "ovyTnrAMfJ16gkJDmc4A5t89tbGbHBnyAC8JW2L1kTYj76YWVdnwgPFUKZQnB6idGjb5S5CZRbFShNXthHqzZkB",
  "key10": "3meW7iFfFffuBf8omwT3RceTtX1NRDdVK6dpGQSckALJWZLH1snBWdET41L27dC3KRR5w7SMwWfmMz7weDzJW9bD",
  "key11": "4uZh7DhXY54AGdsmm24wCE3vFuxqURqPusWEkm1YarPZmgm829p634Xgnzci9Kh5ozvaq6UtqkrCpauT7oA3MiJG",
  "key12": "2nJdXFnGtqmBSToRrgRwDAcm8zUtG4sRU2vCnqNnCwqhkEzx9gvo4T17cdj4Z5uLq4Qq8PxiTnPyiGe995iAq5Ks",
  "key13": "41gCWMW5TqhMhAYCC1GfGM5Yvsnt19kfSnVE8ARgweQc9V1UQ98PnnAPFSpC8zuDRrxE6nsEx5qPcprUvLMdD5zK",
  "key14": "7ujGmzwHvypu6T1S8E8itoNmwrrWPfBXpSJhdyvnjVoFYczbiPENQitf3x79dkok6h6SBftU7NX9h47MSbohazB",
  "key15": "uwicPZu8roc8z2ZwAm9LxiZtdF4ZGyKc2RjHASL7xR4oj2b8dJQgtccN3xkF3hsoRJKdumaXaV1YW96jQvS5WzB",
  "key16": "4dasJCtTqhz4As8MSbrZZg9NsuS3unUgsiJ7kJUPA96Xr6XxwttAG8dsQLYM3YxadqvBCjGKtZr3XqJJUaq7YFyM",
  "key17": "4D1fSEoWD13SsjJNUy29rsJkGvx4hbgRGZeMsMAz8cYSe3xwhatpBGjozq7E5DgBYdqM1wSXgSUe8pziCCKDZJLq",
  "key18": "2iC8k1APrdsFj38icB1ra3bxrPNbzqT4mUvrFe5RgJYqPet1BxWoXnYmzgyvR95XiR4R9gamS2gKu2HSqG7LJz87",
  "key19": "27KuxfzCBvSUTcqVfwrnR3wGXfjBgWVJ1ys2mMgDw38n372NpkAnJPEdMYEHD8v1iLvR7kLgAFmMNCpqvTPnCU4d",
  "key20": "2wi6M6972MX2FDwcXuTTYrRjUoGtS8g9WvR4jpsVNHg88VnTwJvvBqUjY9sfFkGgFzKQcotrZv2bmrHUX4ggPTEQ",
  "key21": "4RqiJdfpNG6DSTzWy41awSghKrmPAuRKAdGMYVZfmvNzqnYtvQf1FQqgib8ynSN4zoeYcYNzDZsSLUFqZJkyWThE",
  "key22": "4sEaEXQt5q6w6CGTHWbFSqGU4sBREqEkV5kAx8yRNycKa5JgjaCfSzK3q6p8o5Ss1KkvKvk91qi1rQkK1fXDmgKa",
  "key23": "rGuGxPemsdNe3KfgZrQJGj9JmVBBCU6EAJE6J5XYdB4NJfTjsbfXnGs6HdYeDuAXFDLjWXpz6gU5Xg27S1Ds7BD",
  "key24": "Fij1sErvQALGs2HdPBFhEoA3KyfbSfwRQXyi3aPT116EmzjwbeVPGpC4dbqu52Zt9bBAQ9yKPsY5Ut8EnfcDJGK",
  "key25": "6SSmx2sjuz7PcHF2jEr98S8dz6FW7cwu25E4frCs5DwaweU6kP8ocxoUBJYh1S3MDYMAupxF2wduScvRiPLpDCS"
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
