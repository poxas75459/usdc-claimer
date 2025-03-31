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
    "2sMFiKady84nuCu27JGV3QmJQDNtzf2UWkMGLAZkfjVfA8QdXJoG2H2paML5FGGzdawwgY9h5WDM369FaC1APGdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bZZdERGWRoHYqBe9vSFtfAKVcwC2hAeVvgUSHFKZ3GeeeyBRtSCkFUMW8HnEHjUkbqrsyw5ZgfCrqHujhD8r4y",
  "key1": "5uRmJ1VnGsaH4LD4t3EYtmjbDZUw7KGgaAtVWEpCPniDvcV4UhHeFL4tUCg8NNphz7sVYbkGBfY2BuJDYWF5Z2rd",
  "key2": "4Kr33pNnub2eZrpM8DPakz7cqy9wsbhUGbEPWdL5FKHQe2rKEjDYERkHeWq4gJRbMEQpGv7GyJ1AKWnQbPTihfi6",
  "key3": "4u2ACL12y6QxXTdsuNhzJodQBvCyBLfnYFXcSsrVwUz7XVAqpc9HDg6Xh7Hihbqz75AQEF96gXgjvmUbpm3LXKi2",
  "key4": "4uwRLRJK8o1jrTqMFJYdJGVnv9UKcfLn2qZxeDPrr6dd1jBs7a95UvFipV1oWEFfEtBg8z4ihfhs28ku7u4LUFN1",
  "key5": "3cw5fDuowTW58uFgBohkpyjASXsCaKYsmHpkb73hDwFi6VVo3Nv3CcwqpLft2Nw93n7PM7ymJk2EDKSnXeH6oP39",
  "key6": "v8SaooWhPRZB6Xo95GmYBatunLNHm9X3bJi3aY3DJJiHfJ8oM4YBvY9bYXAXdJuMyiN9HaDbfCQjR9m8XScvARz",
  "key7": "3Ehbt6irtrRMPU3x4EXa4u4Je635XvUZ9X8VCMYPEMxKFutsaPB5wMyS9cdByqrTC2f432ZiTWML3yHVSueQEhuS",
  "key8": "f9Wb4ksCDLDjL8kyTRuSEunsLqLWdBpFet7ivYjranK9thbUFh2ZLEjEzndd3ENSNqZGBCGsMfkvWtqzSb96ndh",
  "key9": "2ZHT3yFedHyhWEeU1J6DL7NxEkCqT6mzQW1p1Zvi9tfVXwaD8t5wvFFZ3G6qscZnMkLuRDNmWxJzvZDhyaPEwwwi",
  "key10": "5g9gyKHYBGEdp85sro1svAJkqgjai7dvoz2YbxqUY7oqm9HBuM7t8aEaNKpaGFUX7NCgGWkAmwCsGrtRzsqqbE7J",
  "key11": "4njzJDis1iN3Hi6xEALtUHqFLHM9FYzswK31hCxi9umQLJV7qA5RAbMMd1mnffnS9UtEF2tzjknHMRg6PsPodCdL",
  "key12": "LpZMPceQkzUc8gArfaMhEEF86xqoGoKP2wqUX7LGYtWWYRcZWxgbssWWo9yeXQEviDbUzXwnMYzTkgLBShEitWc",
  "key13": "98VuQ8jjySpHTsfW3TU8TgBf88VQ2u6D5f9iftVF5gSrAoSCFUYLmJjMCyUEV1MgjpLHochxGBfBBghBdBSb77W",
  "key14": "4AmS1MhLUKSgmamsrfnKTR68tyQRaWrzcGS45dqY6gdwVkiwqK8hps8Hip1uc9VQKJg2LCeQafNZtatDiarghXS1",
  "key15": "33qW4RwW8RJee2N9mbJ5eYZwNSZaKZphwmaK57Z5gzwRriHc4zqCnGXTxTbAxZnVx9Xrvd83ckS6W5LP3r6wtKVe",
  "key16": "4cm4CKzjWbY9Qg1oHP9BD3cVxVPsCe8p4cA8Lp3qZvUV8DmRU67TWRMaUY3cxdNvht7q2nxJvnycDZdSYSK26kpv",
  "key17": "3avFpDmXQVrWPykfiAATaHbh3JD5BLM7CNaYk1L8XaYzMXKK8QhN16bXzmaHGWmrvUiGYnNLC5PmWwXCDRVmhmkF",
  "key18": "39Tr7PZy5Ygd7c1RUTnEfpaw9DnRfio3UX8kDma89jkoGdU7ipsonm1NWcy4pmjDL9PLmLBpQ4NqhsvhNV2tFmxE",
  "key19": "2cbfR4GbyCcKcg1fZdPKGZgqU55VeohXW9FSvfj4mGztqXaXQRkY34oJ3ynjLGVMJHU8GQFesobAEdScnMLXxkoj",
  "key20": "4Wrw4zQyQzKrWYf9TuenvK3a9DVfFpENKaNYf9pkU3vKn8Fqp987T5MSZLf6rMgXHbeTuBF4ofpkt6HnA3gGMpTQ",
  "key21": "57PM6ycsFqa13yQRQPXYMMcdvpCTLihr6GardA9GpwttcRXAAFdX1HjxgaTMvSPZ6bqSEM9MK6xrNcBNP8zH3sJc",
  "key22": "642XyxEG7h27gqQgG5TP54S861ukR7DTh49e57roomznzPoPcSprGccbjRujdJqaXh5H5DDMGk3mAdFBPXnmMZB6",
  "key23": "3crof2gLnjpYwooGpSHrWpcXWi16uxRncF2XBy4DTgWffzuaXu2EwAhzMLRJDpKY3JsZ4e9cgByFe1fsv4CKSxLp",
  "key24": "3m4ntReY84z7GQQyoVyZt7SCDSXmTM3oJewhoxQKdaEfopBr1HSrfgbqwD3N3tuhAc959cJ3w3WwbdxpNtBbjKUT",
  "key25": "4NiYbToK6x3S832HsQGSqFmfSUWwpQdT8bSgDYH9cwXVtiAhWVGS6bg6oiAH5uG28cwF1phm9ivaLXbjU9QSoi1L"
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
