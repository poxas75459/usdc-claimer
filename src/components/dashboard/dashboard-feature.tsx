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
    "5PN1GBqWWGUQyGhMMYcFCQMqyV74WQy51G7MViQUYnBDy8nuZe5QCBe65Er8Zd5GvrKc9XZ426NcXcZ5R5ArGHgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dssxQ38LCdWBQxi9U5nvfv2767bstqzJX6qZKGokeoJ4XENnvdbB4BLZ59PETBjMzNYA5ZVCn8hTetEbLpBMdLp",
  "key1": "eCZtx7WPdCfyEQiW3Abd5ZLRVtCqEhrbU3QvZabGaRfDNNpGvZNh8SmnYeN9Ko2FFvMvRy3JHML5xNc8y4R1XGH",
  "key2": "2N2ZUDWz5DhBcPgZZM5D4GB6H3irUPt3B2LJtsFuGe6kL7uVDLHEqXGNepWU5MHzJFBk5seqsgkwKTGKrCY5GQ8V",
  "key3": "4pxk1WTc2VLuodbP2ZEkRT99wW2gbWqc7EADSrfudy1M38iuWW7x6ETwns2H1nJJ2BuBbfqc4zsqSKmbeqobvfzS",
  "key4": "4fGJm5puEYgwZCPk7WzKENzhm6boYrmyRbF2b6ZXD1eP9NnH3JmoA3nexJ88XXLMf9A2osHJhA1KAqSC8Y7SfryZ",
  "key5": "4G3TENFfPzE2xdJa2rA3i2s2s3gnBLP7N2JYEWj5Js8ya5B7nvSpE7gWUCL5RXS5hjpTsXp5hkdA28JohpMMdhGg",
  "key6": "4vgYdzj1SuVQVWDPhz36nyBUy8guAourFYY3dhSVhiVFcBSMphfzRL9HQW1HqKbGz1cM3fN2mJS3nykF8Y637czq",
  "key7": "5mwCrR3BUevX2CsW9u8pLwCGQ3fBk12zKAAUGJyd3SmfbSanumDWHyLJZPQb3f8Te77pYfFxpM8crrs7TbQnQQcE",
  "key8": "4AnyQWmn8UuQis9oYedPoRuZtHkG8ZZW3cA8MYCrvvBfemxSRRpq26uS5gU6pY6h1k7r7yc5WdQhGKAjGgz8FEd4",
  "key9": "3RcVHoS7aKfzTdYJrAb4neMQWN6YGiygBbDt3HHGzj4kgHxPsjtZJs7SUSTYaii1X9xRKQTexGZk93BmemDfi7S3",
  "key10": "44YMiJrBftGpwkdxtveiVTVVE9ze9acBFPiZK73uNHbAqSnChztQHTaXbM6aN9qymTABKU7YcLH8KFEo1hv67Y7J",
  "key11": "2c2drVWhE3kAtpAF9kSHGjJ9of59nVAhcEuCTLacAWpGT2o6DKbRRAUoSsuxc9boRmJhssFVYCV4jo67edrurpm7",
  "key12": "3E1e1XXhBPf1QTzqDdTqVLP8YPvb5SEveShZweBk1BufbZKTrsjiHJB2y8AtvX4s4XNkKB7ipU1qcEfnzG54bvEv",
  "key13": "3AG5TS67hfjJWTrCE8Ri7ArnCR4eoTgWzGYrzH3pufNathNGU4w6W4ph9CxFC3SMi3UBCseT4HWkVfwG6SVLNg8u",
  "key14": "4sisxgzR5J7FsN375Gd5ExxuALnUVSmGrZcpDrrWZf262y1rMP7YaYfu5EwVjxzuVBjut7LDsWx13F1b5vwVMVLm",
  "key15": "3dMjJCord7yys8RESpomnhpQ4BNmWMGipEx6x2FD6hSp7uaC2uB3d6n2EfKSExUwdZWKHTTbYoaNFDpbHBTAEWaC",
  "key16": "3AcHB345r7RL32jzVQzSQe5YfAFXqG1dT3tGdEq1KpswqS8oiVjB6h1mT5X9nMxSsXHs4QyYTourms31yLmpaQvW",
  "key17": "RQW4phEac4JW5L81WJH6JVYqFerCia4gsfoVhSTVL1KqYAuiCzbW7q84J1ZGhFqKnYXed1QFPL4vuR8FSC3LuJU",
  "key18": "45tVumfiQzhYErERES6Qn7VSn1NkRqSGHUH86j1mXpavL19UAnkYpYxCXbpyK5dccbjGYDA7a7sFyKERR5K1Wg8B",
  "key19": "26iU2MngHpqqfigC2dx1qwRCd2414JAMeJGkkeMTmTKJn4om1U8vWDkC9Cjhe9uvoWSkMf6vCaQyZxNVKtnmfa4H",
  "key20": "4PiwRWy9iYPhgiJXmDQkcuRhYvehUZYVkMd5fMEhwZpMT87a4QZRpZJovwtkc5k8HN979MGpNjXY9MyzC9CuEsZP",
  "key21": "JLKTATs1iAezcxc7Cz6GwAwmQs9Md8g1jpEfChoMfsYWiqu9xudtR3Wp5p5D4XLYQ36wMmV4ALfGs4NbbDHiEQX",
  "key22": "57F5pjNr1FQHwXzTMigKxFGuAh9gTvMftYsVStaGwAdvGFqfjzDSQTomg2VMEv7rFGzA5RcV8dnHjwrPrfcSce9V",
  "key23": "4hDCp9kX2ha2Je3AJVRo4KxNa4r8tqDNA2jNhkTMY4Yq5Zfo6T9rUEJyvNqWMMmQui9QjEEbW3NaoFjrAUyN4tG9",
  "key24": "3AwuSsnbbm77yJFNYs5nY2mXehXYrJs9pNNbue31UkVJVxQDC3wi57bkMV88grYc6SpDNGvaQrWeqfyxxdguxJ9d",
  "key25": "5u6T5gZH5P8s2z6XdGnvemPbTPUXSfgZxJjiLEBu2Yzzr82TepmPgRkTj9sEYirFYvaiFur61kxXcSa2FMCECFyJ",
  "key26": "4TbyvccQX9A8rn9ZAz4Vwnp2rGDNT1irZb4XKQVqF3ZoXG8kBEZkUK84uRctReZV28m6gjAFo3U9RMA1jw2AKbt5",
  "key27": "4cmPVReRYnTZF2wUKG79KZnxqGiaXrQGbG9i8msYVHkUYGJLAnwtgxchAsZbJCpHo9Dun26BtwYY7Mt7L9fUwkbZ",
  "key28": "5A7swaLTHzV22JgXMHYzNce714djVb7tb5dcqm7hMJbi68hg22JezoRSfxCTrPqFUeR7UrMAyWggNZk24zBk7itD",
  "key29": "5fYEdePV7wQu9nx4EypcXVpMFzigNpfz29kYuZVsKo3xZjnrNDLwTmNRvHPW91HEXmjzbTBHXrhJVavZti3vrikL",
  "key30": "4f8apVB2yjTypae9MuFQXSZ2WuYgRmfCQXWoBziMozooNvwqqLoBDSzq2ngfiJmRkEc3zDVuCkNTczYaUpBCM3hq"
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
