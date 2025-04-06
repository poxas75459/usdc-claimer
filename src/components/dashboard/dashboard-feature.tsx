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
    "3oAPeC3GfyBGoNfbki8EgbPQgfKhsgqYbQsUrdh7M1SX1vqFhE2WieiKEabikxVgxzzgSMf3zg64o1FxMEgrLd4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDX8t5mo5d4aMvYQGfDo7QiBUPLnZ8UFUuJaRekQK7C4ULG4kesrrY54rEcFbEvWH4ckHTR1wMqPiHHhGB2K4SA",
  "key1": "4Mr4RLoH8inn2ygTnvJyP3yiHuYp8k2x2pePbD4gN53Rt5Es6G7ksU1qAykUBwWpfbQEaNE7wuvUPSyk6UKj8VKG",
  "key2": "4SECmVprpE6NXPQG7UxW5rFWEJiVwcgVkN5JNMA6nqVGeevZzWcwDxCLLonu9eJ5cmiu4jqGcs4FPscrLbchYbsW",
  "key3": "2ffo1fxp3Sc8jr8tMDGZCbrS3LyQVeEz2eVhhPwSn4vYS3JBD61DYzQ8pnGyKotiFBF8B8z8ia5xbZCPsiXoJc5m",
  "key4": "2eHVwNEdnMoyqLi3mmePvsFHrzvWCLfzNvDMvA1HKwFtf4yUMNw5HFNuVzvLwqh6CikAwNP2hXdqiZaZornX52WK",
  "key5": "5XmwrKrvTosRjeJ8HBRjaTnrD4LFFjC4Sc7nkXwwndzChGy9Wsbj5tYnyV6RjyTv3f8WK4y6ZV3byH9Eo6U6CFiy",
  "key6": "22ioA423aEWoWW5af63Uc13pt2gptjwtLTaT5iyC4cbXXF8SzXAMhmHrc3FkrZ2eXHd6rmrtZWiY9FPqXcHEUFCv",
  "key7": "5Hqjuq6RTqsAqShamPwHphzrjfhrVdSFRnFoYAZ4oiAwjJw5t1BLdozwAGjsS4VfheMtACYyL6nQJ4gQg1qdKy7T",
  "key8": "66VvA1tbuCmQccZKScXWjTDFWVE67zzzMPKzh5wr6RB9mZqspdMKxu4CCMxbd9cZQuvgf21ioy8N9M5y2df9nT67",
  "key9": "5m1bCTkUbrSQckZZxhYDf8dPZFbJ6oAExUHbNUKSrzjKxrNnLGtkYo1HNkxp4LSgm12Kz8kfdGs1Wxa6jZHixrGJ",
  "key10": "5wRWZc7Eu2nsNF6miakuzmSW6ug9u3XBBwt8vqM3HDKCwdn3jyBHbH4oXCdWanhNV1Wab8rb12FdebwEkfBTyea4",
  "key11": "3SFQrcigdgnxZhkcNP8kP8xAW3CfoujFjN4YrQ5GLQn3mYFHQfCXM1JHnzjwk3Nb9tJhMgZbtraqAJ5suZNp2ik6",
  "key12": "3c8JNTpAQijN88kybSHt5qrXuqVK54JJuhDNajZZ46mGPCi7k9xsNKe7BP6j5nPoDB7yyozPgkV4Gyth3NoLWUok",
  "key13": "31JPEteUfyz1NdFt2MrewFarUypfraGrUHd47JeeX1BWgR711Re72hNqgf3unM6C3QocWyH3UPhHn7xmUC23Bdm4",
  "key14": "4Qb9sGcZPnNCoHwv18EM2hF8GrqfnMtu7ewuvYxfAbn6xTXd4FzgchNYU5oNs1SoJKj3Qk6TUWuh3xnRoH3Vi5WQ",
  "key15": "5dM7FQMvLPDrcedPC74E4DSQSU9aEEktdofsLnNDaM7tEfdnarsmqY9LuGmuxxS4f4wsQb6UY6aNoV7e13tY3MGL",
  "key16": "53Z1yErTuMhY2R9nHbmkv4TQycCEdvuhRACNsS5JrKss1Fo6tfDLPRC4dD3gXGXPFr7nzu7tk9RLQ6ryh5e8xP7k",
  "key17": "2MiFob9fGMSJWvSbP83U3rBbC6cEBz2LyWbM8EKY3c8aXjy8EK9ze1Akho4C1fDax8tbapE6KsLQv37B1u3YwMNW",
  "key18": "5JnrcBrSxRVX6bgTwq9owKPW5BJCLSbdq4KGgNR6GtdmS7BxTqPxpCM7hxcuvrn5hXvPxk2q8UsVLt4nGHzA5LYj",
  "key19": "62JvVkTjfvFrV4rSdvU2ickQ5B1K8ASpGmtQ4et18o8HpW3DTjvvcdFv3TbvX74afA8TM5nVBMqLsrm4Esosupvy",
  "key20": "4qf5ZAaQF5YzvkZRVzomrTzLYLpgNsemzhob3fRPvvfJHa3MhcKLyHgHAVEW1zfvqTe4oRmavfBP7LcH4aPacmRz",
  "key21": "2EUVfGFwpVMcUWCFduduaSLPC4xjWuCeES1qUNBXxHSR3fHYYEBcxtpsUUtATKXzNCw1fL5kGSTfGEXu9q2E6eET",
  "key22": "bnT88bmHFdcMvUDjR827mcR8PeNU2Z9hkd6AoxqwHjitWQmuqJjA6a1E2aSQPJ7dAE7Gp3mWhCWqH7ExSrtF92U",
  "key23": "2QTLfATfXHBGK2C4ttYKBKSB7rwz2kVZzs3uHnMnCt4bNRX9MH54oUqResDGV7MwSPT5dTU1PYvEvruR2r7Tmq86",
  "key24": "3mmtwehJAKRLxvjxEKq9aiujXBzHsMtjn9XD4HyGq8BExifrPq8zJQeW1Vxbc5EcpqDmQnf9ZwnY1zKVWP7G8qad",
  "key25": "4yDMidiAxKBL6qTGy737D1wUAU2hW4HoQBpYtatvnpkoL3BNd6rSXxgMUQ4mG3BsEHWjfe5Zzsh5tkPX8w4eEaEn",
  "key26": "282rUxfQF8SkYUHQdFZ5zHDuKMfWK4kxTDquNLzf1EvhRTGtgRC2RCAf1J2vTaPY5mbb6T9RzrsDCvoh9uef9m65",
  "key27": "3U3isjWXoMhKFiAU6tn6SuoJWBhgnbmLPSWk9Cmd1bx5gHG7Nje8JZMCGog2CwNC4JTXUP5kpYiNhrZ8iMTpREUo",
  "key28": "5QkMQXwpjitt8JnmiwreaMBf2wNSbM299SBQTrx3JcwsY4L6aoXyNq8ohNwebgRJ1Em3KxgT2xwG5pMxeSRthRh6"
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
