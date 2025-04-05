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
    "4pA1Rpk7FziF939bcsKEfR18MrpBznXzDtdezYzK1XxAucLCQF75NTpLJdPuTkR6PhzodUqxkoAioVX4dSFZYnGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhBmHxUUzdix5MCcYTkk9zBifMxRYoSsGykhPfikoND6knYErAUooXu3qH8GmXEENgMfwsiXqFkQG896r1b61Ej",
  "key1": "5KAVjnvHo1B9ACVjcFEnxPpsUoyNxhCweWdL9oCserjMFXtC6EqGbG2jHHzFHZkj3woJ9K3YJ3iyTcuhKsqEexZu",
  "key2": "4vFSGazN4x2vNiDCj5zun6QAmNNJJLETZbhrLiCr3hUCz2Zavcd1xFg19agoJ8PNzGvdRwXtY4ehD6SWwaJHFNAa",
  "key3": "3eaGTKKweNYkHPaNFgzK94onmHfxWkkKbYgwoxT4cNfguyxMb6pAM4NVeu58c9ncYP37aDw9SGDE7VfpQDWW3hzC",
  "key4": "3BWXLHc77LJdaJuJvRjRGKmqqsLwJwhUqbEnk7o7dXrBChvWVij1NMeL3CArDDtoUCinjycriFrPUY2sQEJEBrK3",
  "key5": "56w7faT3REHTgJfEJ5QGq4vuvPjjEXQhXseAqEstQ4c3BEzYa73u372MqwsqUPUYcxsqYR1SLoFVFdZde9FeExCZ",
  "key6": "5vNeAa9y4yhZTPAyJeBqkSFreH7okFg1C48uWnApSwXQGfdffhiQt7ArH6av8MwD98N89sVgZzArKs5cWN4zovJW",
  "key7": "66o3sitRpcSofwct5eXT8H8Aonf9uP4oZv79pj7cg8f7AH7jgCoEKE3P7ibN26xijXsA2hrQWQzMJhFRAncjTETn",
  "key8": "5u2MAmTidSWvU6KPkjKQou6y7YCAwfkj2PfquMxKXFwtnzZhPg26VaxUaAtGHWfWhdF86QzwehfNgm24w4WzPm4v",
  "key9": "3LSZFH445SDY1enwYtpWFA2WEqyc8AqnCFtEq5Bbe6SJySDJ2CurEvM5UUEyohwJD9zAshRnA4CdaqQ5Lsp8ZpBs",
  "key10": "5jyshr1Ya3V6XbuHymzKteV1tE9g9Gpr3HLGUA1ojxyyDKPx4CUBV6fF61Cs52cfYf6QxzBhby5yJaC5w37yBP7",
  "key11": "3QxgYC9PvD9XvJqDhGKVjvNJoysVrVkxot8SN1LLMzUTappvxW995WR8HK7QA9itU1WhDBw97n4tTTknK9uXmoxH",
  "key12": "2DALBozFYtQYgSNwxBswdBHQ2r2usRJaTZExSZz3Mq2wspym1xHoq2hG6UJ7cdy74RHcwUdjMDAsnobKnHiK9DUy",
  "key13": "22yTjh57rWKk9roK7r84ApS2QXtRMSm1zvAQMoXRfbEr58vnbtTB2hnk6HV4fQk1Zqi9KmTFzMCmTbFgemAcDxEY",
  "key14": "2PHtrsN16rD5BQKJkuhPtYR2Jggq1vMVVynuzL7StBHGQmuCUG3CqaiERAX4LxVLHo77CveNCQ6dBnjk9cccSJXo",
  "key15": "49EcySAdtHhSRCPYXnAzbeXEkV3hteAWuUbeF8sJFRjjqLH7x6XT5u5rHnQKKKx1zED7GU3GdrNnXx4oCze8npUD",
  "key16": "XiYY4i9kVoxyZjk6iKrnPjUDYiyUBmSi1d5Ap6WarWpKDUno7oFp37BWbpsDbweJ1rfb1Z1CpB9BVgacSDLH1tJ",
  "key17": "szGV1HLBGYi1MzuXo8gDdcTNSWXWi92pxdg7uUUvQhycL7cyB2czzXWyU3K1LN8SPQPn3fXwQ1L3udrwPSZFWkb",
  "key18": "2mvDXrmFREDWpXTvqLXsz7mVFe1tAvtcBZFkBkNjL6hSrRXshSJLPxbwfNiztWRvfnJjaYyCa5eyKLyKeDWSg9VX",
  "key19": "VDvjfuwcV2QPphzB7obNAMuLzAaJVMNKYbCaS5MRcvrUATt469tiMi24wQEnm4Xt3zoe7xUGk8E6pVyn8zinCBw",
  "key20": "nGwqhew6og6QfTyDi2QuZnFc26J9N557vF4UAqkKhGnpFqGxtgGXHkPZaVJ9PUUNa37uEFbFn5XBZ4Nn5MinEFp",
  "key21": "5713avBAuz7j95ffBzuFtMh5Xk1wwfzngCmH6MuEpnMgnxv9np6wjFFVGhi5BRbMvkW8v61pDxcoaibUFy3mQeTb",
  "key22": "BV43xxKH2phN1KCyzcm3FsxiD2aLnEYHwwMVhGZq2j7tC747T4iiJJVLWh4YRXJP51MbdsvajzuWZJy1m9zkvui",
  "key23": "37SytSFVfEat7iFZrTSED8gp7CufA8hvNVpZSF25jNP3Pdh1XkxVDC8ih54h8kXK5uYeDgC4zReJZQpuj5YpRARw",
  "key24": "4b8FNrSduJPp6WLpBL8TB8pLyakkYNYqR8GHAdVwo5AiTNmkbiXBVLMKxXdEUdJw23ghRXWwsV6bgvbvpDxf1wec",
  "key25": "MddJnRZw54rfmEGRYf1E9BEXXWL91Z7aeWWkp8tP2euYrPEDJFWMQivfB1Kut5QXJ4J8bcwRmnJGGdVdxWpfhsh",
  "key26": "4cXCrz5u7a6MsQYusb88jRuymg19ybrDXjxPLRPHNEaivrRVaJYzVU6AS4gBkWQgrE36L4SPK8Uw5Wcfo9USTWRZ",
  "key27": "2FizCat7k9WKNWUStaagwfKayepNGzvLq4bXoBCzGbz5NRiKsv2woKuSgirXc6M7b5kCNxQV3rABvrepp6cAeoZU",
  "key28": "ojk9BArGCUtw1YRL2caqg8DV2vCCc8AbcpBmgowbXp8Rk91EpCmhJiY2sVsHCsLngs5gmpjQAkFhqRSTKY7P9oX",
  "key29": "4rA69xf8zXwAGP2f353XmDTrUCtnwJa6dyoJvGrQMTNVaEKwHGHeU2yHiZUwbvvggveobwxJjXFtZu2hbmWn4pvB",
  "key30": "xqQQ5AzxzmS43pQJTp3ddKN8MiLtt1YLAiYrqdSW2g8EQid44PhwUhXHThvYk8C63wczz83o8Utwp1MRrVg8zDD",
  "key31": "3jv7dtM7mw7Dxg4DADGJCnXm5cmXNQbMregtuy1RzsedE1jJmLYFZ6Vw7xcaqh57gi2xLha9gELJSr5S3U2zzizY",
  "key32": "36zhCSYfaKQAi9181o67hkaFqTJ4G4iCakRmi54afMgMKbhkbi2YvCPE6QjjCDJtgiBRX4PVidhHoREaLeVjkE5x",
  "key33": "5kmeZseQqzrEFpNabPMo8iKJbH9vFH3EEHn8rbeiPgBPgSALjgCWoBPpfVYNmaF5N5x4an2RBvTLhfACevW72AJS",
  "key34": "5Wd7iDcWfiudZ5VGsZvQoLs6TWXkJbFt18erPXxkRSpqwcztsRC7rkT14MGvvvfx54ASer5Kz9eYRavyb1M8wNNP"
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
