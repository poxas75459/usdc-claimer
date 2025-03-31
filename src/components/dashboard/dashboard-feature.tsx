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
    "4GCVXPJqVv6iwsUHMYZzniBfK9pndSKAkJdrjxQRRSSC6bziksF45fm6WqykBaAuK6NcNBEMnS1W288QzEUd4922"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eTT12UY5sQVVEVaxdtVHC496aE5ZKoTMKnfnVUT6U2M5GhoWoxtpehcz5whmum3QQuhkAjEobbxJ8QGoEkVjbP",
  "key1": "4wxHswC4dpojD62qg4DewgKdGRVdkaUJ5TcPbX3y3o3fJBryZDzwQxtRM52ZMJr8E78E8ieDWA7ZsAREVaLHTYUz",
  "key2": "4osPmCmuqpMFmuyBrqwxXt27gTs4q1dwvrX8G5BN7yrsRBcNFZRHyentbL231xMnmfz9mSfoREu6EPSnrEiCspvr",
  "key3": "2Tm3f1KHcyh9CVL15WUyMopLDJYCqeYWow9P3RfxpbzTZP8rxmVVRBuBnPSqoGTQPbB4JdqXrDZFMeParb7yHQbj",
  "key4": "26bobPTMuG4jfY4vSaZBCmrkK37hamGiAHKmcJ9qE4ovH7nLZF65BfQmf3Ee86WFV4sAiDBSJNMLiBruHhJHBv9Z",
  "key5": "619abeiKjMaqaCuwhQtPaedPhzvxS1xMQwitrNB9yRNCH276oguo6NuTT6ijeLvboLSD6tCPrCZfJf82VS6LdaYj",
  "key6": "2ECppaWeGhjUXSmqbPLeDWC1vYjuo7vdWFKGrXuPjj5FHcNuY9wBBvkCHTtMn4vPD4X7F223A8Ny5SNZv95keHJc",
  "key7": "5sS7inxuAzybj5H12V2ULa8fowBKyHmhqh4nuefDx3pVS5aS6ai4ug1rbMuneit5iwqAnPHeYrAkeANfow1SJjV2",
  "key8": "2RQkLHWuq5J7FuYfWjgmEUQiM7NUD79FdxPKPS6YhcpQuGg3akPfTb46gDBbwWfmNC3TbokduQUc3QGqsLorSayy",
  "key9": "5vHcp7xYpU4mWBiTs6imCuvt1jAuubsgJLy9EBKMk5ccbpbaL3CbrLECYbBob4JCCoVrACMSkMKBrU1uwL2wvmWF",
  "key10": "23E3nvcKmJDWtUxf4yErdEw5U25ewc8X8KtBmfHjqcyU9GdG27EZhqYKyqix5BNw73wo9RHEj1tF58wxGXRbryKw",
  "key11": "5ysgqRMtZtoirQLSUg9WCAR8YXsRe2dvuyRPkaRbS9jTPqu9UyuLcHpgdA7g2DULkCWWFr4a5spbjAs6vBpsXuhh",
  "key12": "3jDaCKVJaUHFQ1v5EdAnqzCdAQshtuuxQ72BRAixn6jzkCSpu6ypKjuKh24K5UqXM2DFLBZS47USaR566rUNX1S8",
  "key13": "53DBdUNYpZSPh1J3pkVwUwHh1rVvWyB6M1noU6fU1uGa8Ho9Mny1xCPParfRkytoRjr8HEDVtdePwao4EvZbU7Dq",
  "key14": "2PFHVQu4qpNkEjq9DdWbLuVnzutK5kTm5xFDg23FYCzYfxJvM8AEap1B18rmjzXAaTzs1xfCDyXA8vyP8BCmRLjq",
  "key15": "2L5Cqf7UQRhp7Qf8gT4Dy48vthufzsUHcY56bAana7iqH3aBi5VG5AFgU11ifJYz4Mqe59VKj2QxGvjv2uCNBKuc",
  "key16": "4xxx6hs1HxjGbPXQVFnV4NLeXtnCVUGHpYryw6pN1WXB1uFVwn87CxoKQ1HCCyn5D5R9Gg6THzUApa8L6jEJCCdN",
  "key17": "KcydjAFGgjf6KskcUpYD1AwiLCcoSrhZeREhPUajtrsVxms4QL4N49jUWuk7YkGarfu2LC9R99K9qhJoXXyysvL",
  "key18": "5iHsAqzfnKsC56VuUH1kTtHHSPns9jy8i3Xb5jwghH72js5ZYqfynNXSzDyymt4xRDtGneWVcZwG2kf5mcZTQMWj",
  "key19": "5AoEJJiurZsR2JgawrP9Qf8z3fybEwW9s3vpSJBPt2vEErZhiFuKoUT5mENR6YDGVouTQr5zYgJfyNbEADszLDNc",
  "key20": "28r3WTLHxfgv15f5pzN8zVyLcXGHPfbnPP4gpUW8NkfyVcuUZSyRSPiUG6eu89pjCjKsgfkPzD6SjuLg2fcgXWZm",
  "key21": "5ZmvwtNsaXqwxvhorKwrJgGFfxQhsYedogLM41NT6RLn39PfvyNsnabG5Wy9RpHYa3EPYpoSmtDwyN3Eobw83q3k",
  "key22": "CKfPgtePJZGNNgFprfrB9U5qJ3nDtU6yE1iBUdkhZ1VXQYhrcmeDPDYgiiW7GHA4oHPQhLRiJAX886vHu8ixS1N",
  "key23": "3eyScvVkz3CCSgG7e3qHij4zdm4FxMbhuShT88sbqm1LZ1VJHv23L8mvvswKqjd6F7NY1rHUsRRXsqxrsBRrLHBw",
  "key24": "4kPXoqAizyn2uZbJsNz2q2aHD3Rw5bZusi9u6SuFfCY5WNhssTHkHwFSxnVoaBwsuzzGmw86rwYWAmteVgBmZMqR",
  "key25": "4Dh92rjacTWjqePZiVnYFRj4qjqczpjNyqMWPtj7pyQWEUK8p83Ef5uVyAk2qVHJ8nqU1o1y4tjvxEHvzPdjSRyq",
  "key26": "zcmYRdm7rfPsSJX6Ey16vYPCYxAJY1jZYteJQDq173Mx4BE4NkdyT9ToGRs86ypbnctc2qNbP7iStPLpxXPr71s",
  "key27": "3WUCyzzD8AvvDfnQ2PxmGnYyQ4msQKfFu8Xp1ejJTjt4qjaC6xYappvSXvKz6aYF62f4ijCar19DU4yAmJcq7X24",
  "key28": "2gU1EBaJunVtfx368vEMQfZ1mErfru7snteigVkyrVrrSvKKsqfQxu37n4VAwWtzUGuoWH6xMYY1CA8Bh5eTNBw2",
  "key29": "4yjkwsmycU7ScBvMbCPnbb39uwuComoFEECWCbeYYe1A1WX7eVeU4cUMkfbmx5oTYMUHgPH57oz1qEtHARtJF7qD",
  "key30": "kFC9uR8JPkvz8VTeBMUotKhuDXMKmMh1oj6r3UMwRqmjVQV3qT8ZfeHycXNXVqpw49UrYHjY53vsbNzQzk7wVtB",
  "key31": "MUzqjZSMBsfjWhu56DZsYrpd2oPihvLkkDGsotAWEaXayBA3DQCX3DtNQw98db24aayabiH1KHS9NusdXMuXSXq",
  "key32": "UNQn8y2orJEvdaBQ2g8zru684o3FGBgeJeKJpKyvz6PqU2Gma72EZ7T8YPeaM9WxvGH1xnGQDJ7GRrjxA6G5q9k",
  "key33": "5otNchsiQTMrBJ78zxj2rcsoAYG7EnY44TVxHHnfbXVpVPZsEUVt5t2e3EQhiG78Hjdr3n7yXR6NexwPXtQWNeUY",
  "key34": "67Fhffz9gTqjk8euxMM2eyhSXJzUgJi5eh46ghaAaxBgo87ZpKGKhSH8WnYquH4ip6XdHxdFs8LgdeBsGHqHuXvD",
  "key35": "512dMZobdA7eoMJkmsgAo1E5WgYCp7dudmGhAtZxLQhjyBA4McF6g8NB5NAE6nLFCXqHGxUqzn7xNfHiLnjMZKKW",
  "key36": "TW8y6ksgtM75V7DxkwUzjq9R4QUXtNqHJACTgSCjL1fDG9C4qCPye8Xom8nZyWD6Ce9fUvgAbSfHhtwq791Y4an",
  "key37": "3Sxry9CuJP6rSoa3CFrQ2PCZwdoEdwAzomoN4mz5tPC9YruVjBqQ9HFNKjmvgAssfkUtyHki8mAFkGrzukGWPP1n",
  "key38": "521GhoJE3bHwNBELkBx7tztTsxUa9y5NeowxHEa392nJACphCCcET1VoQktQZCDA37EDYp647kBy48dcceTohiNM",
  "key39": "27SGXwtMh5rj8hiWSZNxgZDZ1YcMaN2ZX7Qu8uL5LL6moHop4sDqHXcwphrMx1maYTKr1waDGbU1BxVnswYnaB7R"
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
