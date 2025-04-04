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
    "5QB9Uou8h45ghqF9E4y7nSvaEVVzrszg2NnKgbARgNAQp7Rhjuk2WBThwM6s5hrjMRJwgxJTVGRJAEDMMmWk4zQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwHgzSSqpChkdk9iKNwqAZbbvNQUkjqCRDkgNWhxaGvimMrdSKE3MqvCy4EzraQZB87Pwu6UTkmpkeor5N6pV8q",
  "key1": "2dXXZa7iZZ2A15qbx51mk43YzGFcgK4QSkkrXQSZ46bNcZHDgPFMXxoeJvjsd2rhkjYRRjMaUjWSwi3HX8gJicNZ",
  "key2": "2WuYxQmtC6wKdvZcxRHza1PUeJ3ndqyxWmtYea3pTGjvgYtbQhXnw1z11BrB4geQ9poWnhBX664B3sgcW9CxjEcb",
  "key3": "5ZC2TkM4dMAR6b9BFVcvY8sfvFN15Zo89xexyUT7jKPdZ5JxJbNtgqiEzA3BfexYzG6ywZtY123cR19ko41Lvwto",
  "key4": "V2AGWuEEPyh54GRLw4wwTykd1xYvBMAqMAAvhumdcRxKhjdWT5a7FNEZLsmEkHbDsoMt7eikKbhpXMQnGGdd4QX",
  "key5": "4nrfRHQro95mVFWH4d6QDCNZTsM7XQboMVex3LycBp4vkUNbijMqf92Cpf14pptkjS2pNgp6EG2bdyRwXYYeqi5r",
  "key6": "5hzLUXt5zatp9ZrTiuMcQaU986eT8SYJo7egNgUL69BmJVkjDxhUEEduufR8zQcCRGDCufSkdF9jL3UwoUihwphz",
  "key7": "26b3BeL4E8ckuC7yCeQgQ1zKjyHVVYT5pE9Rf1Qwte4yy37u1wSMPqad4NPKL76zuLfLx462k9Gg23o51Uj5XgeR",
  "key8": "4NiZnex1bQb3mwipsFQE8BVveJ1iAavMp3PJZqb8kQXeuXLDrWfLRcWa58vxnFJ6JLpj3b14hVdrRjTEqkymk6Sm",
  "key9": "4kf3WAH6ULsnyD4ag7p5SN8FVtbLGCJopz5AupBYdQc1idmNCmTCXjpiCB7RRTXfpFVeB4SMGJ3RkdwWJFJTRcFZ",
  "key10": "24rhsFFJfwvxkEn14KK8cSGVVJ3fygskP8qK9ax1K2zMtF2nFJTCSTr51WpySN9ooToiytGedED8rJwt2qoygzgb",
  "key11": "3F9UuqDTCShdKUSxJnWENCZ9yE83oJA4K9iwMmAB3RCJ7NFpXgVZE4gDgho8sFHCdGhSVVW7hQaK2qkZRDNMR454",
  "key12": "3HBZ2QJBjZg2VjH8Qsgkgs59Jcbg7UK5k97MiJEUC8g7feLy3ujpEskHCAwJKerezwRSYY6ZKSS8pNmVrL3Dz6ib",
  "key13": "1WVn4RJ4AZtwzGiPN2z7ZT4CikEk2XkEVvT2t7JYueDJdtBqNqPgu2zdNe1DZbStGpZpfX4rPZZaYvtBQnCC6nc",
  "key14": "2TpFpAJJp2q2jQR2z41mSuZZAovV1nx3KVECo3ERJyCa1YtqzdAdjDXCp5r6d4qiZLgZV8HizPkqZ7szPdgfvJoF",
  "key15": "3NpAePBHEWHR1c5bEcsvCFheN3SCxc8xiiEx9saSE5XAxRjptC2VejbgWzb6uQ92wFu7fyCiSDzGNnryiDQpMiwB",
  "key16": "2prEPuusVNSXZVVh49u4c2kdJo2a19wjdeaeXcmwmzstyVHFmkAfEnPCtca2N5VrdGkWgsbX17kTkiAfUvukKDy6",
  "key17": "2WTRedt6RJDAE62LwAdHCKweoTYU4wxUVPjNbxWr1G7Uc7kBvvit69SbD9VYhDVVeq1YadwRaMJKCC3THcrJnjd7",
  "key18": "3hK65DM1FwzZVj3pUmFSG3q4T2SFeedftLbi5Hz4hENTYS8Hbk37fXJXFUpCbwk8AZD7uimJnYXt15yory3GREkQ",
  "key19": "5YaZwX5r64HpHRZtMMtuojXj3NAnTFDA963GPSqAC26E96Q5iswYzuikQvXu5YAM1tC9tmba5J1PTkdhCupbM2h4",
  "key20": "2M3ZkXf3t53Q88gFvJdsGt2ZXt1AvTJHM5gUR2woDWZpv8yS6FpPh4JALWtnoG8G4t4SNmw5ig6YVmHr1FSJgBF2",
  "key21": "54YCjhvCddsaGox39JNFxFhSRkRxQrxmEuSXMwSi8P1U1KGRyNdJJcyL6QcLY5BTtwCniVCXfwT6YnfVBoXDeH2f",
  "key22": "vyY9BtdHGv5sEtwRktZQFJgDEuDVowz7kCVJqLdh7bb3DBW4jaXH4TMhcXRVQW9LrvvxEixV5rRQmXQAQeDTUyT",
  "key23": "3Fz8mdtgr8ybzbmFoNdJFynsGAQrjKm4rw196rdC7LApLLbEqgxqM4AKQueCpmQKb2AZ9zjLF5hGNeErqim6DNt9",
  "key24": "2FaDKVu9h3hzn5Md1imYZECe2mG4VsDVFKyp4t9uhBv8GspaMHmqYsVZZobk14u4MvwHPcrcTcpvF1BrxYmgpQ9b",
  "key25": "3FqxjjZwDETAVVmuhwHd7yG2GHzYY8mZG8pWAGfxR1TkWMTEr8whpZMhTKwCTiZCAMmqF77Lbox5mjFhWxcs6o5o",
  "key26": "29GXuXhxHxnCK97JS7hAdd4k162bN6ymHPNcWSDKDgpzhUeha8GwQq52qyEyH4NbAsvHUtdC25GHmQH48J6n3gZQ",
  "key27": "5kw7r1D8RM5YMdW6prWQ7ofMP387UcFUoQYaeqVPmXKUt3cDzBYNn1Xv5X3gGA9J7gQgarKqZZhaR3hMhp3es6z",
  "key28": "61uacAC5h9iHeFdKsGUKPRi6JPrAVeFaTwsukytzwoj9WxCehQcqzShUu6Be7PquNAB6iZAqjRpLuWkRrFUVqbQ8",
  "key29": "2u3NMUY4x3gc5gcJvAJ4oZ3qfavoAKij5bJ38bMtxr4Ykr8ULbvgHaUpggn2wMNjvo9MkRfh58qgqEGv2qXdp84e",
  "key30": "2Fq81A3j6R7FAGa4STMwpvb7yhFLUAi5bdGCZRpwAKGsNfjkGE97BSNCcfrFe3rD8fyCyyp67xLagBq9PQicBJZk",
  "key31": "42f5eAeUMF9R1hMqmFUS6Mkpu1E7qarfQPqoDmkJwfsN8JujsKQ2Dua5TrTEgZt6nfmpkio3t6ejW7mx4gim9FXh",
  "key32": "29zjXofUCgCjxWv4CmEfhFpFshA6mvZcZjfnWypLJr8EBh367eGD9Kdi2hPBvhmxRumK4h3tNSf5gEVnjU2J3GTC",
  "key33": "3piXMDcJ4mm6pv5BwrEFWAoJwPBanrkggkrRNP61z5FTRMfpWUinXbnDoRaS4zUJrcHasWqHMUhcuvhEWjav8YwX"
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
