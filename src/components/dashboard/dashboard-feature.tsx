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
    "4PaL5FzSrkUMD4q84vsxF5rFFReU6ELZmjbcNDgJjbC6KrL5FHM2cajuTNJA5c1q5n2U4LZeg6WsgxEwG7YDN3nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epydx9Q3WimgcR3pnHQ2hUBoquRMjAZPFtib2jLtBvhpSBVRYcTyHPk1v7xeEd6myBVB9CHcWt7668NwjMdUFuA",
  "key1": "RKizQoZjkuPViUoYLsL3WELBypUSypJgMcg7ajAqNfdXHjuS1ztZWCyA1xjK1RpyeviZnSGTJTSr3TNSWL6cnKt",
  "key2": "4BvsDEU9k4ytAdNFbYWSggTDWbj8aZB8mAKPunp4CE5C2o4WUyRL2XJycuQxznCoHZ3f7JB9wSQ9mBHM7gAN2uJA",
  "key3": "5ryqdD11YJL7Ntz7nUJEy6stoyysg4xQYYf1v5m5tCtHEwLxsa8DfDet2UWCvV9q7VkJsAnNokBpmhkh1vKUK89L",
  "key4": "3j1FQ7V517YMweKH5mJdas3hTYgzDePjojaFBKv3aVRsRG6j6cgwXcutm6ow9AG9onaA4zhMQPWxWzTJjFoBE4wh",
  "key5": "cYa4F9gMPyR5S2dLiqJFa7XqcpqCFNz3teMMnp3X5tzKByox1xyEqvsusSAHJwFT9KQQ6cYUw2x7tc4AtHrNL42",
  "key6": "2raqDCBy2BypREiqkhsHBikn6ET1tEA83n7CzXBtEqJXobXf6KgRtLKADb8UdVCSHorvPrD5uZEUBSZmVAYNjoGL",
  "key7": "XxaiQTZadJN3MZ5xHTjotv97N6aZFt563TfXJcWb1at65hAG6Mgk512szE5GNVwCfia1nweU8LQ3cREB6KodmFr",
  "key8": "5vFPcwxTWdykttEx7BwFc4XMEjvZQuJDm8D1gySvZK6po1tpxDgjy27Vr1LsLcQSBkXw4RWMrf5wRrQBQBztw7Gp",
  "key9": "hpDq95xFJtM3hUY75NBSF8brvGcZo1rseyLoE5NsRMkL93BKvxHkF3uYM6nwVaY1GntBRyihhQT839kFRp3w3gv",
  "key10": "4hgbqcbNX9pvyUs3WGDjucZQ1iX25NDBE6xGCbbCcusWhLHtDj8ByhDTvZjUP1Da15pNUhx9Ws7QsD5fnFHiLmYw",
  "key11": "5hVWL118V6883Ua64AUoaEoPm9Kex2uAsD92y7xRdqverFapSmeTtAuLcxsNwxwChb9CTXHN5FKQv4ULL1kDThdS",
  "key12": "4Vqp4qGPKBH4putPaAYprAFTuEmmuiPv7JS4xebRmW9U446hCNr6EQ8FjYMjpFVR7HdJKm5mBBr8VDrYd9VvwobW",
  "key13": "3UTnksZKBEsQEE6QhoTESaaV4beFMUx8jUzDBFeSBfvm59LD8AT4UBbwY7LK4DAhjEgGWrRvV9TTuLGv9qSMGM62",
  "key14": "5yqhVMpjwdemxY181tEgy2LLFLjRZWUE4cjhj3JwpZevLPB2NErgfvKPDTPqYPM34pvG6PM6jH3pgi6YRazbcoAU",
  "key15": "4mEscMDyaDDywsgPGdq6FCAptpJPdjejNBZR1smnt1hxoMDcGSxbbcD7PyqXZxiRTz28T6DwmZSC6NsAAq75kbix",
  "key16": "2r5seVnqThV9xzJPk76vdDQERSHXyq6p4a4KWSphgQXghMBxVsjQZtCQJfYSZ6KBNaH5HrT8MEvdUxs9EZgoMYGY",
  "key17": "2knpmKu5g8Pbe8UCRR4A7QUpgMxLGVrozeuyZ7vYPy3EgdVgy98arPcFKWzEsrUzBoW8cPHyy5u7zcPY2MEKWYoC",
  "key18": "5MTNUijDjJH82MNtV3SKdUWEKKmzgV9J8LCs3KNJPkPnpwiL3VciZbXgp2jq8roE1xDgnxuA91Udc5yFHcnDfsNZ",
  "key19": "kkWwTNo6bgSBa65jw69sabKUxrgcv4mZE3DNjvSwcQJRcQJQk81vK4niKU7Mt8ek9t69d7kamsaFSU5JPSNPRn5",
  "key20": "5KxtoUtVxqNBJmNnEnrc4UEL4vRc9rVJvJDznb2cSZij2BXuki8wbfxmtGhVbWuWWM8KGBzJ98uxe6UDPbrf5CSa",
  "key21": "5YbUFufQ8SaA3UwRGRgMjUpvStQjUTfinwaZrmu7USp5QTEaJpx99opJA5i2B5zSpBEELefFRsGVZ7u8bb61UTD5",
  "key22": "2nDjs5fvG7eNEVfGV3ufSX4xZYwz27uusnfAvdmFPxhKZPoewE8mM5W4V86d8Ga1eR4TaEu6NTqtv2YdM1tahnNr",
  "key23": "5znuHPPf2CsEK8fWXargHTbsoRFPU7WLnZUKWEojpje5m1fDcqpGAeZPWouVJLeacsyUn57EvRQCKgX9oEHMsA1s",
  "key24": "T8ZCzz5JVesfi4AbCzsCkE8RZDFvcfFrDqq8Bd2YEQQjJYRH1xs4nZLTLtYLJDQajEZXP1DJK1XsE8tDGVbBeas",
  "key25": "4755pp5yXZFeUohGbP3KNFEp6Qjf7SaHdTiuHUGhwqZpCssuPRRZqWRRZKjcZDF2VDLhe66SUEW1DMi4rASEz9Ma",
  "key26": "3KUYYYNcPCMPrt1xsT1FAC7U42agH6sdfzMkjgqCVRaGHin3Tb81Vk8hyRC3fuMN6FLLDoG7goVqeoq3r2DgKHge",
  "key27": "2N3qAv6SwbTtvFRwNRtDAAgDgcfKqsNynRwvWBAmRbvssub2uLSULEEBCoX7Hqy2RTW2ZtDp4FXEwcyZjb6A5ayZ",
  "key28": "66J2TXYAoiaXQxyFq5mLE9DL4M7LCJ3LHCzBoK3Puyeo2C1XpPVSiFmHboFMiGTSZ6oikF7i5S3cWvcTRBHFaD1i",
  "key29": "51gSHqJtMKSWbuMBikRM6p2rz9iYy8RR5rZhkZ7VKwsAoptpwCjaTnw5WX2hZgxfPDU7oQqCUc4m7EvSknTK3y5B",
  "key30": "5LawpNDpAXQrQEqRpUraDPXK7ntGAUz9Uq2MHmFf4GDvLoX2cgaqMFcVRGeNRHgykWWmb385Zhg4f9YeqZrK7ga1",
  "key31": "4jYcVR3piizxM1dKZasMTmdFo3RZJG9zF5s6XKJCjZqtea3ifemL6EKkDx32kke9PR5rWR4UP6WA89pzpJkLP2eA",
  "key32": "2h1rGkAabV8M2b7jv37Tz8DV6uFkXZBNPHRHwcF5FJWmoA2k2rpYumqh37pWcVxYSjQ3meTFtnw2BsnbfWd9cFbN"
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
