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
    "4p2NZbboUHD4gqYU47TsXjGVepXvcuL539ahSUSPFLyUaJ7ys62rXvpxy45XNka12L7BjnNyS1iYJfQ67u5RbqwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAJuiZDBZdmVJBzcgTeaMEwz57QS5pwH9NKmBxhM64zBYTFWwGXHMzJUuDQvH1fuQTzUUgpBxhU21QZMzMfUEL",
  "key1": "2TnXRHXgg6JuJjTdUGFqWWXwyaDmanJqJqd6mVrm6jsEs2CzekzT3L7XK8EztBC5Kx3Yey3kQuXioCg9Lba1uW3q",
  "key2": "2nxxY5N88eQ7nqdez33Hhzn5sNxtKuBGKSeSbEkJReS7bqB9jN7DakDXkBcCCFSpmETFpYpY7MK8DWC64YwHyMjF",
  "key3": "2Z1iXxuq9jXLMNqEusQWmM9qPBpxGDAqgfh2GLKpGELzn8xnhiFDZ4oLQrjbjBJYDzHJhU5dBcmbr26p1Lx2ejNX",
  "key4": "3Z415dscc8W2j8JXikkKwLk6FBAL8VkPeNC7Hz1tCRkQSDazgDMqHjCuVfe4YKg4bH2j1sFsMdyrSxnymydg4CPP",
  "key5": "31Wj5zgiDzkPLu397xuBnDWAEEbJ9w9QxXq2YGAeizj8aJexceZMXkGEJfZRBgRTJn4V4fVeSpwRNFJGJoM71Agk",
  "key6": "5bjdG8AQe9NNSTftyVqtBfkJagDowA6MqjhQDNNkR7YDeSHT4RrotfJFg6hNTtess8jo9iY2oVmsBG1sRdCW918x",
  "key7": "5yKnPq4ZDjwTDhH4BK37WYTQZeNNFqXQHhSEuQJocPVHkJb81awPR4RTDzPAW996M6Mo2vt3SiQKfLqWtP4HAr8y",
  "key8": "3bqq53zgLMnPfNKi4TNV3jZDgyQybAUp27FJNZw9u2XnsLP6WbcT93ai86PRh7J7YV82tY9X7QQhwXH2NvKrbVvq",
  "key9": "4vRjZ8Ukhwnh3AhEZFgnGfz3qULDmBjySyNzzTeuimQhgLgqsEsVuho5pStjjCfd6SByHmpEEYgHzd7WUbniaYuZ",
  "key10": "2wVg9vshyfBTKA48Facs5nTsUXN9S4a62RmTKJh7Mac7xR5JFPgskDT5KukbjSsQborz4S4M25dj8WVpLDuM2ryN",
  "key11": "Q256KmvSr4GFYmWcZ8v2qNYnGE5H8Ctv3eoTc8d6jCSk9ZuVA4kSFwRVmpN7FuzZ9t9DWYjDvA1V9A4KfNZK9HR",
  "key12": "VkgJfRvaFquX639TTAgE2PGRZW4j4qmEFyE3qJrhm9Xd35kVfHLn4DBqNxuJh4Bjvs97UsBgXFXE9wBxrB2mvih",
  "key13": "wtcuHDhihgKTWXyiDV66RPRwrC2W7ArUeJaAdUKxiwsDDV4SaKYkxDYNQPiPoinzjEDjT2DFECzUHj1kYcyZZ12",
  "key14": "5UJnf8PitHhjEoTZUfip2DRG8XwAajfqd7AgzVfWiq6SUVeuNdnJ33QGZqZwM4ri1STtDvoVZwxpt1BX91KYV4S6",
  "key15": "2g83DLHGdJeUmEU8JkKmVXwjgj73b2Gk6SW4azoVNPXaGYfVW6JBYTBsJUZJgBiCYvEAorJECtKNPHj9nsk5wjyj",
  "key16": "hQSqNotXwx4rMJkWrmWj5FxTg9e5CRJCzWAyTh6p7RaQzNco4ZXkXyWZ9H2QUo1ErwZwBkPWQ19GpAR6A2AdgfR",
  "key17": "3CbAszcjLdHLogXYe94tacWGd7QeJh4wFsefqmedzqkZD4BaCVp4ATj4ChbQAzK5oRmxSFC6Y9UiJ1h9hsVXJDek",
  "key18": "4kTrz8T8DwBkGkEMUwKePqpeJdV8i7ERcxX71ce7aB7F6QaHhe1iPkv3UEHDrBmAuGQ1oJ2kQRus7HTvkLoUSue7",
  "key19": "5BLY8Q9kpGs7ze4DgeD2Nd3CSqKxcii46vAqgchjt4jNhr1cbbMJmxpgN3wjBNoejuiiKcFJGHbEpq7r7r1DNakU",
  "key20": "5pd9rEMYzieCiw6oLXP9u9S9xESmLkDD2VThJSAXLXbgEz3YpcWej7g4X7normdtRpuFUztHzTsQYZnKxuPpo6iF",
  "key21": "xaavjnRyMHncgwpHgiAdP4Xsup4j3Rop3ph4ChGpSD6bEnTHaSvwZijUJinBbi2AuUDSBngtwCoxVJD2zn5f9wJ",
  "key22": "2M7DrJwo8SDmQZRztFfaLLS7vCDmDunekbDJwcS1ZZSVsVw8fUTtbUeW1d3zb36sN7TCKjKtoxdP7dRnx4kZf1LA",
  "key23": "5DaWJPSnDGi4yWeKWnTxpahhBkCiBDegny1NT3h7qj9vbjpH3TdRwge2LYiVd1QjgUxUvELrGPqeHzsf9KGNTZnq",
  "key24": "41GmjZ6CHM59X6xzVphM6nEunALgvibQLHKSrkarQetnpfVoUqJpq6zaR2skW8fLwsn9rD9yzCwLUDW7AVtgAaKu",
  "key25": "2YPwu5dZBseMUteR9okYJS3Lksoj7AVTsFLnTkaiMCEzt95awPhnv2Xj1dKGRSVyULmrazumHso6L16twd2oUx3F",
  "key26": "5sdmLhZTeA2Ymi8vPMW5M3DdiLnr8N8LTJraHSfWV9TEMFLHTAjKcW9SMg8cmoJBLiDdJYFx9kgTNE1NT7F7q2W7",
  "key27": "4AexLq9gBew35b7wEYQ371r6soiHnKy6zhPFpi4uoyC5gVt9kjLzACTgW4WcTyzhp6KKLzbsvo9XGKbX8RstfhQt",
  "key28": "25PaAYgKdjHQp4kceiwumYwvRymx8hSkMGYqrAiqDBnz4anGnzh8tui42X2kxVKE4H4bRdT2MVEqikTrVfxRUA4Y"
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
