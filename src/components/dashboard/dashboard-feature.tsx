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
    "5tk2rSPuhEQzbZjVfSWRzQ17LAscvMmbHRkfJUYmeuxx659Z3hLwzuDxR4JV5WWcoTHbPxSprXErPABYvf4Qdtg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55BEvdxDSQsbi1pFZvsZooCSCkb9HjCRWn4nx9DxUVRf8F1k2Dof36fmiPY6zc9cvQnJRdsJ7x35Fvhfr2Dpqx1",
  "key1": "5UPuoR8okw9PhWfaXT5TtqqFiuUBJak8uwPFeBQuiamfSf3SRAvD5WKTduxPZWBki9aLmas9gAagoesGBJpASuBj",
  "key2": "5tZFbd57zJkew5EX63tcL9NiXiXxdMkDDJXP5EGPA7iANYeCMU77tJSkSrheyLKL5RZYQF284PfhPE4S4hML6YAQ",
  "key3": "3W97VjqsZW2GoX9saH66AUdt8gA5gBLajXELLwWEL4gnibf5R5yZi6nNz2RZvqgFNVewtB5HYmri9evSutnJamou",
  "key4": "4EB1tXZbymrdWLPYmNh1oc3KWeNuJh7NHKv8JY1df8LgAyKzy5R6BL75BsHiPdcQXFqForjYESFoZsaSDDdUcDMH",
  "key5": "4QUFzyJppm5rHRV8H2vskv6o6o7R4yTUbBjavpJiF8BX73RapY8W5B4oSfsNEwiTTJYQDCQVuqKduwbojv6aaPvQ",
  "key6": "nJdPWW7USq7H6VYaX5aofgGHJoHspQZtpYDGBpUr5b6ZoTs9D3Pndu9AWibvXvBdH7Q7oDr3aTs5zWJe4acny5y",
  "key7": "5kTgwnyf1uH2KXSUA7CBCueu1vYEAJAYzZtcGPCLedFUAHTR24QQxhBWjgoKsc2BXZMaWo5ri3vjWiV5iZxziqmZ",
  "key8": "6CRdZJs7uY4zysWLhyP7UiFSnZsokM7xEBDJ5iGD5HZVNFPpjcx44qXArU97UWABmeNDbDyU4i2GEiGQfQegcPh",
  "key9": "43NXrTh5aQyo5o74RJ43ZyQJBd3Ra1yi9zd56ZdaHrmpuT2avxVXy2Bem3uAyWdSqCy3gikwJC7henXgu2CqngyU",
  "key10": "2M6hzzMtn7Uesbqx5ofWd5kWJ65kGJeRMojiFPpnDteXUKJsMkhUq15PhN1mzp6wcFofx7WiiNGZTEhdPjMrSk5m",
  "key11": "7DmNAyQ5wKPQMF2mEUnHj2hFwAH4K32tGF6YPXzeUXqLPCsQsQEy3UuQd3D2gbpEhbpusVy7LD82w7ssAyCX8Hg",
  "key12": "5knAVqNfDzqQqcArZxtw5s4CHTkq8qeuKMLZApLnUutUguRhUwJWVWUR7oNiLXStrLjjX2Xi9P9gfxLRTSsGbpyR",
  "key13": "5p8CsJtuS6FaPXAcVgymD1sKmC3rNrSmqg18YBF4BBND5f7odu87Pv8h9c2yQo8VTx8arigSVE8ZsgMgfRzHn4kW",
  "key14": "zD3yZyY2NmGbKmaw3XzSJDqqLEkp9cjpq68yFd3jGjV8PP6epRMK9y4ztmnvLNQQvtiJ41oNPpB5Woqgog5uhwC",
  "key15": "33j9kJ2F9XcAMiAZ8ta3HXtgK17vvshb9X8XSE6MoVUT8m1D7toGXxEeg649QpR8tTfhGowhGHzdTGcv6jzdBMqh",
  "key16": "2Zi9iNQEFiGA8EtTbNT9YDJ1XZD1Xb4ZpyHP652MzDC3FLcXxEFiAMGikZMEvgFDEr2sL1F3QhiQfmUPLprsmkuD",
  "key17": "64GDRKAv9FKi6wNyQz6mRLfQcauJWgitF1CuPxvjfXgjCAW4ChxUTQ1NqobJvVgXeWdfLh4e4tMLeiBdVSG3aSkQ",
  "key18": "41BSVKm9iCwV9K3K6ELrWN2CmfABrkqoYedwEQVxXsWh4hM956kuKjXoqWx6oq7XjC64KRSjKmsgiaMY95gwUkec",
  "key19": "3mKi8nXxpRYwmabjATaaFUo6oMmKpLfdZKX2aqgwob99ASgXj98wyn3nYbUuUJzMRzVqCVo66FzXdJHfLRYaUB67",
  "key20": "2DwNrnL1XsnVuN88f29x9RfjPn1ddWEThPJrCmD6F71ix8WVkrSDbLfkiU951bjJou8Jx3PfjAeM3zmojB4Dwkrf",
  "key21": "5J5m3WZm1AfhSAZCn62DST8SNexJgJn6FYYHQ6DsXJbPNG4hgSquLNmqbuvjTknxBfCQoUshag1k6HkBQAY9Ssbm",
  "key22": "4N5pAGMZwsUhgNJZan9WFjrV7rPQe1bQyyioV41K3mPR9iW7XK2M4XxnZjDfaw7kH5hkdDmNHcM1SaiVdVPKxG1C",
  "key23": "45KtonfCwTfaLQS7ue7V3BwP3nYefDurqwEciRGCaE7Q939Zhj3ts2yDRwi9TyasvZs5UpYkCgJrh2GF7JY7MNeu",
  "key24": "4rhXg2No2b7tmP9qDMSJWEn15wrqERswQSJC6ZDtpNbzwcD5LTbMcp22MnydVvRv4XVoU7cykAdKLxou5TK3HPKd",
  "key25": "Abq1RwYKwMqdw14ZaAaL7VxhsQGNjTtCu2N8THA46Td7hvvsN2gWvBXzgRRvwBW6x9T37jaVgvGXwzjk1qwoneK",
  "key26": "aJ3cn4QmcdV6AMKPpeVFPzj98ztMRJzo28YimyBpEV5MmDfzN5JDzSEbxEhPB5LrZweKBQLdc8X3pyqW95gZSMi",
  "key27": "3oB9kvEnkTwFaozGhpj33b1gGMfMNydVMwrhXNyjU75NoYRcQ6ETpMyPAfHbGpBL6pRKw2TV8s7bJwnk3dmRGQeo",
  "key28": "3Zf5DG53NVZNgNqCvX4E2BNYgX6EZQu1osVSdZksQCmG2TKopkFupFiJDrVSwYdPCisnL7spPTKRSQBjrtuUz1cZ"
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
