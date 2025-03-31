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
    "32Fk9731ATj6i9Y35uAs9sruoNVLzk75adyNDPKaE2QMqhPBouSuPgUPbJivKgpqWxcBY5envswCrK44TZ3yfZ6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pqm4XtcKsq2cbmMkMY5xgrEEgxJkMoYcQ5QwXtFMhQ3kRAng2wsbsVdiLZPGRKog7ueviTYr5u79FinvBqH4YWS",
  "key1": "4XweZrtAsAKVfxMyExgDsgMiGdyizGSkm6jSZN8SzJRYe8M6SNyNfqTwh7CGU6ubzFV88R8X5vrJE6pMj75Q12E2",
  "key2": "4yBh7vpemdoPEgL14H38xyBo9dM4DukLocqA3ShzExNRXpemyVeBrMxQ7DSpsUuvy5Tx2tNtqr4C3ZdYsJg7b4ki",
  "key3": "3ah5bqETtXEPYcSBArdjfZKJ77tsVVqncqQfBJZeyfb96LNrxXfSZ7dckGX8PPkxkUqWHNr4GpBVdfPRqYGKJkZx",
  "key4": "3qWjpM341MCrEKWFo9LWqZLwnfC9mkvVv8d3BSFXtdjDJcBA8sPaWVgTGughEABbZAqQpVUgjHZLNH57oStfbHX1",
  "key5": "5VBC8npdU3XWHQnc8ExfU5fY5Fy4LDf1E77twBvDwEHrnNAgh1ReSxLcpAYBkc41xNgWajCEDmPZFUKBWdGvqPj2",
  "key6": "4HEDmpgEuoB4XZDowpY9GqFUhSxG8G5PLL3KtHmu6UmSoFiimzWGi4DdXuveCVXPegjzHG8yyFTX5xSxS7UGhDwL",
  "key7": "5dDi2eKhxRweQVKE1vv2AwaPNv91KdGZVc8YpzyrQbfGAuNgb8bDJf8HidLxA7Whm2vk3y3a6j3qA5fzbqtFaQQW",
  "key8": "sEFdfagfwdWd2aDv441re31RJQtXLp69bFfkKfVDpjTcsHw7eSrTtEDDSuPd4Zwzs8m3oUeZTBDJyhNicxfhExV",
  "key9": "3ghEQscaJSMSFE5RCJFBgqM5hUxSmdfLAzBJjNkeXtXiFKUvypNZ6hEjjXsViySGEefXCjY8qwrfTvxgtz6bQ5mc",
  "key10": "2PXess9RabGkg9Mhhp3w4gxKcRcCryxx85bmENpWzwPSgUw2SjjFVTHzULvBn5ARfj34Q98f1nDQ2MH9KdzXmGVy",
  "key11": "4EHf1m6RLzMixLArLMmYRd7QojaGLLVMc9PR47Qx8DJrvPNffLScGVp2mB3X26cvXKQ7KofTLS8FhnsZq9X1QJve",
  "key12": "Dy2qNmymsZzde4GabaXXfpFAT16HZngTFVuEXpUcc2cuNoKxWKdC2iZAuTrsQGJd2wb1YzS6C5fMJqrNUKuRyUx",
  "key13": "tntLqDGZ1kwforZRxG2Fg9pQEh6W2ZN9idxQktP9xH1XjFLRRzRUkzNCX7v68c7hkiTG6ZDJ36ymmh3dvnoSsDW",
  "key14": "42vyMWGNwbovxPg45Kq5dqCR8enyVQBhbmpUsEPjYQNBVU2XtpZrqsxeGZW7vVVJkJQV1snqM6VBhjwqgPsnrZk6",
  "key15": "GXKuZGvhv2EWmP4LYtNmwfZdj2yt1bvqa618YnLkjSaCWqY2dYowyB5eSg1cSrULKaunCNm6eKYdMY7mEN2svnq",
  "key16": "dAmFbchKgyWpZLu8SNa4E724zAX6vtR4RmCLVEXccGEatoXc1HEpA7iEHAKuaHTMHngeUHvz4C3uk6PznxJexrm",
  "key17": "4aBeTexuZJoMnsyeRiyYyrCacDJhzuP7PojSKiq2o2ddQa4QeaprGk3yocS1ap1snwSEmFtdqDyzjemzGqGQy6F1",
  "key18": "4mNYNWeB1bA7pZw1e2F42UaD2DSp74YV1b9qvqYXzBfge1NTXHCaWDzthv8FjVVvbV37KU1vK9yUW2bCQ9Fg2FPy",
  "key19": "5XjcUkahtTUr6gAQCsCzYHPexRqZjZi3Bwppz81KnxR9iKuLURmkAvmVTA7p5g5jBTvSGuW84GXuTLAKu3QweeoB",
  "key20": "25WeGGx3xEbMgZMFNQa34h5kcdEjZG13DpZ54bUTX6MtJ9gUb7jmUmPfEvrWeWnAwWHof76tNu9qTgJwyAjajwiu",
  "key21": "5JounWYp9tYFyV8CKnRDGhwx7gFWgUJWDBYTWnaGVQHJQQCLgusrafSAD9cgBSE5YVQf1LJEKcAtdhdkfSbKtupz",
  "key22": "5SoKfmXfRF4Zm6UEWSTsTt8qxrenVg5kpL1TpfvLw6BjhzR25FQCQfzcbHAAbrafYKeSSRnS1D6P3Xe9Fa5qVBxi",
  "key23": "2jzr4kzinPmfGEcHaXX4cNp2fmENteaoP4nvoD79DLC3FXeY8JekR9tixBiN7sWK1FqirosaA4KnGYwMJPvbKb8Q",
  "key24": "44xuTXFoWmunfXQTCYdpA6dQHcj49toF3pn6RVWmg9SFGgb7zmAPT9THYmpNZryBAcemoCxFTXivARcm4DedsuXA",
  "key25": "4trLmkb3PENeTY8iwiCNot7JninM8vVCWxc3Bcchhv5s8Tt6ED23Zkkh4aj3u7S5LezAZ3LsesBjwyzegLYNn4vv",
  "key26": "3jY8ZNa5ETtzW9pRMjJec3fq2GDFvjagsoBx1ZDfRm5U9QHoKSdB44gNir9mmsSZmH5NwmqmiU4YVau1UbhPaf5c",
  "key27": "4adSbkoNnSGfGFV9szA3xLaxHrx95LA8oJPToeSzFcvaSeWpBk8pAkDdj8M1heYBA8gnZLM8sAvFRzrtannsoTzQ",
  "key28": "3yBCb6tTz41rRtDSU9aeDbGnZAuLNUqo2BAQ4eyyDu1iGu68QjDb11XkkEMwzfkWN1uitnCZBo3X3K7vRYB894Pt",
  "key29": "ha4UmfP7qZM6uoAysH1QzTYiScioZT2Bc9qSuHZbHFpHWBqeFJKbeVKsNUhLxcDMorXF31Sj8NfgPzhS2UUC3A2",
  "key30": "h8xhA7nVWVVpVmL8rd3aYRsRyR8fvq9Dj2Xn7yVGht6pUVG4ENHbkERCc99U372Gtgzhn3RvuYpRKBVoKBkfbj2",
  "key31": "4xgxxVHyqvP1T6u5iw7jWMChpQdVxjZrchR3iaLipJGzgM5xeaBBLYdxzgT4GhMEiMJs95P1hUFyBVmmXfRYDdbS",
  "key32": "56JYbT59UTmNfwkJ3tvrbPNDtjZ6vQ3ydya79cvZZpSFCjQLQng9rwZw7iTfqdwEhWW4eKhLyR1HBHiQwqns38Gp"
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
