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
    "53EF1dAQMJMqt6rnbiaw2UE2cJT1WpwmE6GrthJHWY1rYX75yXhUiFWMtAJYJamwJcPCckgWc4m19hTdRUn4g1Fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVYQuhDvmmTTbvGko42ThnH1jyuyYUvKSiXdE2HaKgcMeE5CVbHGU4bxGQTSrMfv8ioedyxrVweAPPC3cW84nn9",
  "key1": "5PXiWKWZgptqvPjkv3iHZgJddS49s6XMKufJNgzvvkjfLFmTRTHGqzHydmfZ3PVAPVaYzBX3xceqvqne6QN9eXUe",
  "key2": "3pFmMVDrHPX5sgBzi3siRpzFgpYCsECgrVHsdmoLjAtDucds6gzGbwkALAcNDSBN8WmhBewzDpXKeP6DGm6Kp9d",
  "key3": "3opGaDsbCq7JgnDsm9KvPxajh1nN1QsSMWPfddeVSsBor2XoJhUSCgoTsrviLQGNzBgX7bYYCS3o9VhrMrjbN2i5",
  "key4": "zcXQkie7WNVxZguDfB9oyZPQgmpAveMBXUTAov2wAryZMZNBLqYEzuAyogxrAujWU2SY6XjH6KfATCeWxXh6q3p",
  "key5": "kHCLekYQptTPRJYteH81ig6wSGekZisSAKTh9A5pHFiR1cxXCHmchdKwZr5kTuKpD1rj8Mipi7Kheek5mej35mk",
  "key6": "5THBYZvoHwudqBfPbxiZV8VozJ8pnMEKwvzMqg1ebohgiZamF5PBGi1x29gPJvgts4wPU4oQ6sAgLSpvfP1HLdwz",
  "key7": "4ZXB8GP1M6GykT78x4gDqRZBn9Aq8B1Hk1PRSCHHfbUP8KsUUXQg3JsqGgpNxzQKUg9opXcAJqME5hYDuNLUhgrz",
  "key8": "3LukB5n1om8AoEBW71oGzffyyutDeXw6Y7vsdYPBTLWN6cSwNwo7z4n36JjsPpB8znWXcJ8YuBZgDJ18H4PGqSZ6",
  "key9": "5vXb9AKqdTu6DqnEUGgJELMEBxc9pKAdBSVBbvyXPbw6VfFSggddJjwnXprUmR1uvKtYgXe29CT6E1P7W29wPsDG",
  "key10": "5yH294f3vzFHMfUCiyTQDYnJMNvzfTzvhAPKHtt5UGETAyLrQyEjsBUDsh9XUcjrEgqPNBb9LzfJtZ7CoCYy2Zg",
  "key11": "iP5f6CGHYneDKp6joCVPmwbMPn2U74WSecmduMogChKqH7gL7Fx1JVUCxBAePce2stEDkfnaaozFrtbQNr3F7F2",
  "key12": "5d9wzZXP4qBQGJn111c2aqxaavpF6RcN2BnPQgUag7Mj3WFZVBS85TrKDsc6iXmQ3VPFLN7tnXy3ttdzdyBo8Dwz",
  "key13": "2iKJZNAMLxqt2gVb4VixVXJCxQWkE8gwoT4My17npN8Y5jfWejFTGkrVUSPUzHft7TEkjQBGbMjphGCycn6JHZ6f",
  "key14": "2yAVCkAqEoKjMWb4cyoD3EdG5xsSsnyEHEwFT4JZTjPxs5JjMs7jU6ipKwbTRFr45xcyTcPhpLdjuM5REAdodi7j",
  "key15": "5X8c4sA3rvyF7MGqe3NM5fHY8FuC8GyCi6q5zWgXoNTC7rUSbNLBFZyuqNtFkpVM8WAQYgRvQwymWeqSvFy9Genj",
  "key16": "51tTynVjdf55vjRiP7DyHLtnjXGLMBCt8JyQLQPhPwJE5RvJhEzwEQ5H6jgduioGfRPTYEqiiXS5Fa5mQtRTGZKi",
  "key17": "3g8KRisCjiRhZJ5N1PYsHtpFppwPFmEi3SwJEvEmCxYXQmmGVEycYwC112mj4j8qehNybre9PUDWscBnesUP18cF",
  "key18": "63ZBaWmuJbBHAA4Yd5eYFTD8a427AJYTeCmTHubSk2ja8NWYzWW4D3TH9eRofHTUng1AwNEQAHd42Y4Hybz7rhBg",
  "key19": "NM7k1fh25yrXxPC6jPo2N3CxymfneAvg5t3SW9bztGnGoDQQRPP4cACu1o2sZpoZ2n2CXAbGFK4TPJqsXQtqTd6",
  "key20": "2RQpfXgZ6u9m5nV51e21tBpFEBA278yEKjRN3EL9wuU5YkRLwCGw5xgGAaqsBVmxHPEzD9DCE9zcafyYJNrz9UTX",
  "key21": "39XBzmtm8rFRwPzkg9ENrn3sL7L8U8qHwTnGisrDLt5BkBb56Bcsq4kdQh7QRSXum9yCQcLPUoMFB9Cmvq8rgy6K",
  "key22": "2qLoDpK43X7nW4wRzWAvLitVfWQwZaA9nLq8wM41uVUz2ar9p9t5JeFG8WjEtHEnkYiJCTYmk1eCdVWx5b2bWRgd",
  "key23": "4iCUq5mBo8rTzFc1HxoniEE7rVwjEdM5es77xLzSeA9UqBAQyAEePGESabPFFjqjY5PdqrK3UTaQMrMx6aAuU773",
  "key24": "YtytAeCSHSzVQqGzRAgJ7bwV8wSfBqWM12CK3gHknjyd3V8qj7EqmLy7aSPJ4cGnQVLSVZjA3nQf8Stm7N2Ch6H",
  "key25": "4V8rYuHEpPCkXBUWcVreJ7ZbPgN8HS75STeMwutepWFnKpHJXNQGAe3UkDvPiJ6ZeeVKc7MJcXUPLVqu3KZ5w1Br",
  "key26": "5CtgUZZqy4oSeo2APS1TyzHk33MkSc91ajSjAjWXBYgvSmQzHEGohiN7T1YvnPS7BVRttLifZtuNxdeBQMWe2EH4",
  "key27": "4V8eCdqLuNHgCCNGBYU3KcimwREo4FVHWUS1EfyQ3CNinWuhmpvWk3QyKgdCfNx2jhpzCkWgCN6rmg7k4uBP4BPj",
  "key28": "25TZhpaKSdpsXP9JyjoQdJG5op7ry9b9xExt1mpLW6zm6qzQTFqY8BJJd1Vn2kTLfq9uSYr7wj1QNMMVgoUxFbBh"
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
