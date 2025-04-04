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
    "5J8H8usFdvAMLDhQCGbtTgEvRCBJxa9C5PLA9ERtMvbn7fEmjDLW5qEyzKQeYqMyeK7BifN8FyvDEYxWH5izG3PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7rnLTXZpLkrSDvR7k5hdYrAbqbCEm3qPc5bSVi9uMw4uVyhDsRJGqgGRvP36JgZYhyMmJf4q4EoSzNyE6wt4Kc",
  "key1": "P7o2EfDtGfDNNaQLt5kyAYpCA5w3Fibe5WDrDY8wN3oeVWst7vSKowqMg1YkurUWSubgqwevdBRrLo5Nx3HT7yE",
  "key2": "58d4qSWWweMg1tuN8MmJK5SKf8pSosVwkJGREvph1f8iMbZe6MN9RtoMuHjtzzDgsUoq8ssqRmNmGe3LvsK6eqzo",
  "key3": "2HmCm1vsB22gkhRE57KmoCBDqZgA5iWfFNGhgq1puEKmVfPKDfoE7fzabMbKvj5bajSurVJUch2XW3HvnSoyZFat",
  "key4": "67MEf4oKKrEoN5w8TbVRS6af5J5rtAW41TPA61DDRbr3ATBRCKC5wZuXmLQiVntoxAvCYZX9FysgEyFQqBRAriMX",
  "key5": "5AeEweDJ9PLkGJTcWBU6sYah3Z5DBWVPWSHBQvezoEHyuD8JE33ggA7srTYfbaiLotW3MPb6LmHg9uFLGDzqZo78",
  "key6": "537AHqUknp9uGLHjTrPtEHArbn3GYJ6YVmxExRq4GnPqF9Wy5JW7UcRAbhD8AD2esUYBmvRPvnzqpKceggGQvXiu",
  "key7": "4S1X4yBb4uh7vqvC62gcfHJbnkKZxXHM4TLmRYQUXRXjzBbYZdX3k7zvq8nwCo1pBEipYEkJAt8Z3Zk6wH3oPUMV",
  "key8": "4CfrPw9gdSpLMYSQYx1fqs8PQ1pQMfq7vYn92u5b3xZjs3Jw5FLwT1zXDDsiTb3jnvru4ksLyQC2nsY7PE9vMHq7",
  "key9": "3eRpEDksr4HLvfuooPV7jnWdHUDNb7zBfwx2iaGGq1kbDwhnqbHK64pHsnJWjthYFNK9j2Hr95JWFjNWc2N7qGzC",
  "key10": "4Xf99M9hG6C8e8RfsyeJJkovKi7Ay6hQd92Rp7mJSVDUWKt8rXw25CgKvgk9t8B7PiZ6GJ3uqxmPpyuCqe6oWW6Z",
  "key11": "2KgXwKUSarniaex8zjmVijgUSFJSsLgJHsECTAFJmDD1kX56s9SNWsJJCYjwJ8CJ84Y121v7FGDqawnttMbZ5Nia",
  "key12": "3zt8iDYYWU7RYuUeycM5wHriS4JrehAGESYj9Q21ZbtJsryWraqmHf2ZTHQ4fHbAQSs3UfTFtK5YzJ7N5rz2BBWk",
  "key13": "3JkpqhTbmDUQHVCsgvrX2G1rm7rCStS1GiJ6MGnjmfnSAwdvomP8Sxmv2ZPhPaegbhYtin1yUotPdXn3JJXt67w4",
  "key14": "3Az8oEX4zYsE5Bjpo12sEoAvr2dthpDJwfv4x7TttpJANS7tDs2dKG17MH3CxKWZiZxw3Lp5smFaqSu2kbxinCcL",
  "key15": "5BzVUGDV7uMRJcguh7T8KkbBPiW1yxo2p27PxmfsKuci2aE6L7u8RVshVuxZCNNymXpV5PN1Sbcymqrx2Xpco41F",
  "key16": "5Fzw31VJeiYT8pzhpFn34AqqEZKV1YLSW8BkSx9CQ1AxNneQgMfFfvi3XKzXFfoTjC39k6uUra6U1A4iUJ4V2ePn",
  "key17": "3mSeRNs1BUmbdYWVNhpbTcKwsZpBxprbBkfYq4bMdqcs1k37C9MKM1pFo8wCBnRXr8LMoTWpBykmDvwwzxgZ713j",
  "key18": "3qRSXk5wedmLSS2YA2LtoV74emceB86mxzr3yL7d5H8EAdu3LDKVcjat466RgURDsPtSDWaunhjBuXNBiq9xWxE",
  "key19": "56ZS5A1BVMWqx1b7N1bVuyg4EkVjcZFfvbNPY7iPjwgn1b7wBH4HheVSxMyAeqTvN8wsYG5qzKWPe83MvGtnsBJz",
  "key20": "4eNfhwc2q8Kk8pVppvJ4zjW7a2F9y2HmXNxSZK3JLxzTxXcWNMPWUBVoDTqTTGs4SCwUC6kFrPvi2nZPtXLDr1T7",
  "key21": "62pzYPsbPgwy9cfwg81vorhBpfphpeBty5MhLCFnWHaKyVK8bUR5VCRR4raLHSsf5cXzaKVHf2TwSkrS1C37Fey9",
  "key22": "KqvevPV8bk94jZq6otW17LdQfc8nujShxKjmXESbYAqb9dhBzCSkuzRe9XANSQaPxw6aSNskXQSj9kkW93UxY15",
  "key23": "24y69r8CfDfYZ5U1MKoBqsEuS5ZNbtwBrqZAfBbWjFDRMTvJmBD5a4w4hkcjs9PGRwViGddWKfeCadZnKjU92t9z",
  "key24": "23FM4WDakrSXax6yTw5CtZzXXkWAUn6CQB2vf8Kf7dtjBExK3RbXFEj1bYprMvoGCtMGpNq3G8AS9fYF6av9BpSC",
  "key25": "3QAjr93nWsnWQG4VCueZGVqZ5drJRWqVSG4ZyXkhgCou9rLNK1zQKknvFMRxRcXAj4PPuj1HGQMkP5UUEZ1uwFfe",
  "key26": "2eya1eTvUCTTxdAymjbx2YuDqknwUfm2EsYvpz4iTn7beaJ6VQNrmjJgNdZEFULUZtEzTPCE8qPths3NCbYs1YMv",
  "key27": "5ZaReUYZWk3X4kpLnKPzMNiMWLxCGLvExMLGnPtSEqGoX6xJ6fGgU6dEP7riEqtufuhCsAihPR3q2aB9ym66oC26",
  "key28": "4yahgTCWwywM4wrvEnNKYqamS8h4TKcEQ35U9Z7UmVVPTpkSni4UnbHdseSzZdfG1NxQ8pXk3FwVMyHWJsZY3Kge",
  "key29": "5pb9BnCKJSNzx2iC252fhQDk3wPwY65qWjkX1vcw3jpGQKj1vHorwBgX25A5x9rg5zdyPmdHLncsvt39rGGgyK5S",
  "key30": "33UyvPMNFgcwLfF6jHgg1buQpuTDLEYvKWdb8w56Bkr5ZNwSzczuHZrxxgThJyGBJDPL1W3uCuZ8vcW85y9vbjni",
  "key31": "5T1AaSTbuaEYoaHd9wFvGfRooagMbWV8JdLwx2RmYaaLeZF3GwFeZtHUd5muF6eFnBgffQUEhf1DueViB5fWBCNM",
  "key32": "3oZqbrXEJYVbp2QpPvtnDMCP63muGRevuBsci4TpviigMTiSazdnKUyvKPJ8eB31Q61v2GUcKQiCvhjaHPH9Y9WN",
  "key33": "55mFPbQ3N78yfT5PMdyhouYetTkDgm3ffNytb7fERm57fXRRj1NZ5e9MTugtXGJgTGVqSWrxJNRwTE9aTGVzHD6G",
  "key34": "t2CjMYa7oGD9L8tVeJZegfUbcYFhEykh2GJkdYZePL3L7VaTaYRZoTA7UqJ26yFNvbuxTtaGWUxbjofe63wSC48",
  "key35": "rVFHctAjT5pxrhj1oM2AHTDxauP6ZZbi5PsD1fFxpQ1Ve6jNeEoCSdKYzpSMdgFwwb4aWK4ZyeuymsX4iRjbEgD",
  "key36": "4grUJ8ZbRoYCdtBkJhYH7R9MDyuYSVwDDkB7PoNk7QohUGoFAbUT9VLtYF2tLSPS76turKJWidwTqTUN1rgTUuXe",
  "key37": "3cb4NcLMqVjgBXnbaeG1YLhVXMFA4S8sqzKjCoFUvUJRJUwLwinmjp6S3X6qYFCTWmYvrnqcr8kL9bjgWdcra2qY",
  "key38": "4W5EceAPVjerE551Y3SttUSUuZPLbGDo2du2UVcrJdLtDrgHrZm9PsXNam5AZjCHBWJxM9bUC4v7qdLkXmhqhTjk",
  "key39": "3d12TUpvacmVxGzHcW2TC61U6VRTmnfy1ZbSpkjsa92EkdWovZhgkBZ68Z4KAzbPvENKeLfhiaAYiVT9GLZHDwbp",
  "key40": "WZukrC2au6ZFRAeRB4sG9fx4SnVkohMBK8JtUFwXNxejToRu4q6rubaHu9gP9BD1CNh1BccwS527TarU7Hq8k3b",
  "key41": "3sphXDjsMBWnRZ6brB9F3aUdV8nZamQwPE1ZUmaYAbJpU9HGPwkP69M26gEjbBL7YGxvsJaotTE7HWKTc8Zsj832",
  "key42": "5p8VMC3PhC7DbeacMzVRuPoX18F5znm3JWrh8GkJEZqFWtpYNMj1oppvqM83dw2q7iRGequWwoyyA9smhkEx9FPZ",
  "key43": "EZZs8Dhdp366qHGgH4JhBxEpk5pDdt5KMWoKP3hhdnMsEWMfxvH44CXaoVLZ75ThD1Z1XhB94h4WwELXGa9APvq"
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
