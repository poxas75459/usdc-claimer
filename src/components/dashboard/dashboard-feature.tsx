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
    "5jzg8aN4JnL8EAHmHU9fiTPp5kAuLNrwRzPz8Hq2iKkPgbaoMxN95MfwY6y9eokJXwVmELf5cKxLWQeuEMpe11AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuLjkV8DzbSqY1X3tAHk6JNRggVYwxYF4xyjJLjCwtmWfsAj4As3x8jh8p6X5KjgD1rQDpBQyhD6TAEBX9eCf4k",
  "key1": "Qr5Q4va9vX9CdvUUuCncdPxxNNCSD2iGn8V4kD6mqDMFmCQm4uuCbGw77jkZfdGGNB78p47GLx2HA4pQ4sjxTY7",
  "key2": "38ZZ5Z7AvwcvM3DWJZqeaybHGv2GNF73i3DSoBPLwWdGWPrCxqUVA6nC91QNX9x5Mwobh9FdQpS6r17a7LhM4kS5",
  "key3": "56BfwfarVaCPdmswYALypY5MSuRf8EL1sm2rJhE3m14JZDBs1imcZvADU3Tm8ZegJUiTVhwmyR8kELsKQxvGpLbf",
  "key4": "d2X1T9sfGJqzf72PsrsrKQgaFK4mMWANcWu8NxDraGf6BV8x2yy6DwDV2o7xjyoxhUftYKcvCriuoX8sdU6RX5i",
  "key5": "2EuxY9Cak9G9zG8siGR8zc9LZceDjU6PbFZuuYxi3EURysUQz2gsMW6nU4BqKDVSQW4i1v9vjYSeUdfHcWbe529Q",
  "key6": "536EjuG4H6CNkujx8u2Vt75dYPzfBy78tsTS8yBgnWnJvbykS6iQZVMwzbpjiQFDZeVcpxFPPjxNfAmuHQMtrwpD",
  "key7": "4i48hT5t2FcuzGp58njprXWb6EcET8YLNbpmGJHecrqVrhb7YgrADxqsX7r3UPrSDr7SYosGjTpzAm7nHcsiu2st",
  "key8": "31GotL3XQas4BR6GXthxN9k8zvYYFy7Uqg5yocqqzckiHfdhakDPBFHsHZC3H9FQAC73GneBLGzLtzF1QcyZbv4Z",
  "key9": "rRAMmCMkDV8ivvABREPWwW3V3Bk891tS1f9UXKHS99PSZ2RrSwvXp5px6aHQdSabZ2GGcLgewyjTu2hjRfDLRMn",
  "key10": "2HBkZaWPRxL3SNtgtM5ku5SzcGExboZ1zkpKmN4jJNnVDQ8J4JWo7L9SpCJxYE1Vop2KePZMHv74wqd2M3xMEwjm",
  "key11": "3K14SWTrogSs3C2XizdF2D9vXrYqDafcycyRQmzqnz1Y1x2bzfQF6ACf76ZYMME8jm87BCvrqz3xCYn3Fso9eGay",
  "key12": "35ekSjV5BczLcvFjg1R7CesmCxxZE5BvhxC7KPM4J1nT59weBKpTdBKZpBBvcQbvPjoJV46z44EspbzeihbMK6QP",
  "key13": "2zrT8sNtprQ6kHWgBiBv4jgc75vTcY4u1ASg2QvWFd5uAmBYsRkBwU6wmNBMyV9LETXpcc4TAGb7a8VyqwAKPSqK",
  "key14": "5KceroqzKkbLHX2YHL76gG8EweT4yk498FUxUJtefEzDAb2Bm1NPvafWeSeceft5vHhxpm7bLiEJa7FCBm8DTPPA",
  "key15": "cLGK1QZgFQ3QEuPQ265VHtqsskpo4NXCbWHZzVUNPNUx7JkhVC8ZtKQMDUYv5DXV7Ffw1cLNYS4GgSgUMVD1hds",
  "key16": "2rTMo1wG5HMwUnZA62yPatEcjkxQbJFR2JGE1Ubbb1YpZ8P62P9GzZFouPBbaisMGkbmXJeUdFFkhoKBw1FGU9PE",
  "key17": "5v2JRgj9riVmsu5aVm5nYg8t79YPN3rWgAQFTwo8EHAbHNqcwkcMAVQwQjZpfKqWBE3r2yG15gAxiXxFJQyzUfYi",
  "key18": "3tNkBoMPxkzBsekNNwUBEu3yuBXVeXjZdk42NjuDEGFohvbttC64LtFr2gabnT9SvNNNoXYaKtMdXkqZJsZ4K1C8",
  "key19": "5oL6Mc4CVWbaspLwUFpMPg6PR3r7uK6r6zLZ8cqW2zXELKWtotrjRKHCXYPyRyGqxTYYZsCC1MdVY1Gnge6fuppo",
  "key20": "287WkrHTHCqjCiJaNBJoL6rws1BoNSbcv7eqkjw4TkBiqgvc17cX1wZecU74Qm4h1DLu25KAJXT3DaUjWZREKAYe",
  "key21": "31KJtapDmwDRbNSYuFCVGdcF9V5e23Ut7xBNqs4h4QK3yXew3arLmhPAdXsKz4rKaEnvtRkzoMvpUDZLXK94pNRe",
  "key22": "3e5Xe7xvZnKVzz7kZQDEjA4wjEBoLLoBWw5Lef6rhmDkoVWgmLCHpKx67F6HMpuEVSsVonUAiPhQThcQrtE8kh4y",
  "key23": "h1H4f12VCvcJv9KwuP1bENWGyzyyFVzdEai2xGoVy3ZfSm8BgP4LhThUuxtGSgP8enBYW84dcV9K7NEN7WrNR7C",
  "key24": "2ihtgTkai4QhD8oQeoqLpUqmVG8qNZ1vxEkZwkuRjcebLpyWUh3yikCLTKGKFgRPAx2Cn16AQazTHZhPSB9ahbc6",
  "key25": "3MFVagftTaSxMbmpeLLrjTQhHwEg9ST2VSNdJDo2t7avbkq5px7Bg7XdfFdf35oUwqwW4rrqratF2ihTggVy1Pi6",
  "key26": "32MUPSEdkrYtTrkaZYiYz7Dz1p81Ry2rW6DoWJsfkyZ1yFneqkrbgFSsNC6Jftev8XzewyWsoBA56LKYDGuH3SAk",
  "key27": "3McNbioSuQ9FT1RYNA7RgSVTBmDmeNjwEEL5Yc6erzwMju7Sh4pXtENkucYRY8qDLXeJNwMmurfYbhey7K86tsH7",
  "key28": "2v3FaDqDSZbCv7DZ6waye97zwtUah7KsZijWAb79VUqS1qTCXNYT1xftjvq81d2kvNn46riLQoVXJKRrXNG8G31D",
  "key29": "3pX5haj6hegtsCwCbUBaXeBZGqhdraEE9FPXWWaeb2JVknKYNNk5AkZKeHAMTvagFDRB62RiCoRD8zZgWAmZpKRu",
  "key30": "2w9AKZkG7ePgYVgwagYuKpjZFvAZUiyfybcE2ggzKS7TwhXzMx7dTHGYmGt6z3ie9aqpww1HiSnUCcM7o7y3n5cU",
  "key31": "5iFUfkJL6L8W2E4L5F2GjwV7VyCzTC1Uar5pi4y5gGtS62PeS3HfFaDsqyeSBFfawtAtwfe29fKt793QemAbnz29"
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
