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
    "5v9QNvhZkbEy4pvJiHY5BcQ1KJLKKF2ddDUwkxgrpgssQh6WEBc82t3tzE8jXBvnHc7huq8GVPEuLnUfxg4RHQCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K6VAk1wZR49u1sGdwYTaAPh8PAcKrCKcZpbBbxboYBxPkdR5fzZJp8ixNchbVnHbZVrj32dNHV3MfxxWZ3SYgzz",
  "key1": "QLwW5sx6LA8GqcD5hsAcd8TB8vtuiFYvE9Ep7bkz7tjrVhh93QHLsC4hCNeYuHy6bCKrJZRmAcY4PjM9grbDncg",
  "key2": "5dhaj46bfSvexSgtK5GgKevZR8dG1B29Diw1tLET8CnEZNv1kzBEpXqo2wNxaeivfUmQ8dXdh1NjohdvmzuWMK6E",
  "key3": "44bUqoHRBNNFbEoSusGwgezqpPZBFhNW8bJ451nZZ9KCkGPsqrBKiDjyTfSTkT37R9FBAcy5gaEq6QEKKfCfeQpN",
  "key4": "4rxP8DK7z7dPWr5om41aQNETxwSX9FypARwJmHGNB3VojweRmPxGFe2v6Y3rhUX8HKWzthzFMiNi3u319JrqKTiA",
  "key5": "nBQ2zHTsjz9PLdS76pLMsdkFnYE1HeppFbT5CpgxZLShEtorBcHZPCu5vQuDk5FqVkTKrRuBCyzJdVENTjYYVDH",
  "key6": "51zGmkjvacV1LGC4QvbTA12CpATvdUkTFC1ZQystdMk12ymvgDJWmFPkkEnqxmfBwXc1TbGJaJ9BSWKWZhN6t6mG",
  "key7": "3iievmcUvFrRwHNqjsSApy2eBjpbwopHCRnzEDYHYiTaPLEGVMNWfnL4N5DiYXFxBSG8M4dcCNEDjEyyh3UeyBQq",
  "key8": "5zwaE96ue1d2ESfN2mG3nc5QhgvEF68Y83bYfw1ZbCYphNRpXJTbc7jnA1QDy45m3TxxcFVrvFxv7e7essKfP2et",
  "key9": "Tj6h8YMGyR38dWHfBz4j5gn2BzMnNDygernwTyB97ABSQgWbuP3kuF8X95HzoFEx9vGKBaRBD1tFfRLLnSStBr8",
  "key10": "2bHSQQHLNd14JS1xDHtyR7GkR3jB3BDi35JCgzukNoAkVsoyLP78Cm9trYm3H7umyXpGu3UF6BMAnKNUNH92yrxS",
  "key11": "3c7uwXYvitDYZHgnKmctq3sgXBaFPTrB42zV3vmVZnjpQVuZ18PcDFHFPN6PoDeXBczRnBksR6pFGrDus6rtki1e",
  "key12": "27auwYBrBYDeaCYzCtG6mW7MLfk3NmtW2SAuvkVS51iEhwi4FA7qatKGEy17FVWHq8k9F4JTkCCzwVdFcgWPWpq6",
  "key13": "9AC7TDziVx4yuUgkBeNo1vV8rxBEmRySeu14hWMMQgPQqhf9F3my6aMrqCozem5QfBxjbQoXXmmLDB82C7YbuRn",
  "key14": "3TcmXKhmf75Zb1PM4N8f9CfwWF7Wa3sYwSM1r6Fi4MQd7RdxzxoQc1R8prpju6doifqqyyyirDQibjcFCMxcb33g",
  "key15": "ocd6goLBNhdAbnGbd6sUVS5iL3nQa1JgcNLVioNy9YXxp29whJ2zjNujUTbJtoULAf9zBiDqZMnmu9L8n8kTDMg",
  "key16": "2F6T3mmRyThZk4RZwhPR7z2Tg2wvQkL6FPAJuN2xtpvBHju6fwCN1Rt8qHQa7fQkmLb8VA2pf8DgreHCddKjbGjY",
  "key17": "4pnEPkmE6L9xkNNrzfmFqcUGiyrgJQdsi3uBSLf9yYrupb9gjETm863SK9mCxeAoQkBM1o9aVCNwBFBooeuUTJ5T",
  "key18": "2QJQv5WxaWMwxgfCDVirSbfiVGzTKxR6qiHHzFhpKDo3K4qRXsMMxxhNnWAf9niJKb21jKwj61mcywRmozCGZs5C",
  "key19": "3d5JhjoLxcJYdbWUXp2gfr3GpneVRiiFchLs5BPPgWzZQ14StxheDHkVXP7hP3rT62cz38sWpvr7TxHiZ7CagZTf",
  "key20": "3yp4NHgoFCz5vhDMsrB6njaoKQk7afd9Wkb3VHBhAjXuJo2owPTcZjtJtc8PGPamXE3RF3TzR5A6uLQfXJE6L9Pp",
  "key21": "5jmns22DSLAUrAWZvfvWdrfDU4PyemGCS7m6kaEQiYznaLZmQmHC86sJ82ED5uiYzRxXTeP9ENxqyh7pDX45kQZ6",
  "key22": "4VRkKgUJGka9tDcHpGDgXtMAaoUBBMnmfKrLVznA4GqJz4NCd2f5UbVCw1Ebc5FJnPCLSwM7XUeJzuKcKGo9WWwv",
  "key23": "3JrsjA6NeGXYujKcvFqjpNupSXyiaXP9xJuzt3u3ZXKpmXMan6dwiS6JWqLzHj3WULavTqJ1erELLZzrorggFdtq",
  "key24": "5dErdu4NFeDPdLLanZ6samEZaBYiWk5CZYBzeFM5zcfJ7qjf7RLYzgWTPXe5bqyh7GCXHy8aQCHAk4rusyN2BN4E",
  "key25": "CVXs4uk2rjuipo8CEg2ECdQ6D6MpQ4JEWA5yhgAUqjgDtkMhgxrLdkPwh6xZbfafEcne1ygCFUUtdJ2p5Cjqr7f",
  "key26": "snmt65uiezBdcg9MYi5a44RZF8J57apc4uAa17YHozaD98GextcdYosNfyc8y6MPwYRnUMDSojAoW7X3uYmu1UG",
  "key27": "5HPvLPm9jGHjoEPHUn8i7iKaDNYDPBbbC9RTtwnQkYQfehRZ67wvDk4BjcHfgcTGZLtgAV92kyDFCFAaTwb9f5FE",
  "key28": "5efzKHJuaBzAmLwHEmqkZhqmGCBcKzhFSqRDC9khojjMTkhqeRnytzSFJ4F3JQH28XCJK6sDvtFkF4FzAK7axMSy",
  "key29": "4U8ArGAu3B7YUpBkoKNqdGaf5PruY4Fz2bae9pYxdCU6Wa3MNUv6ZMkcoMEEwkrU1aVaSPho6PnhBCVjbDEJ3S9k",
  "key30": "389oaEynwSi75Hfqg9bNQLVm7UjwcMwJvtneXDVr3kcpNurJZwh5i4bjctAZB9oPHdD9kh7oHy5j5C9hag8akRzU",
  "key31": "3DobSU4LqugbYb4Fs3MrtppwiLh6ttpGGNVKbzsvn2QLEt42C63d816bzM6nXWCoUrfdesfSuGNifZctJYb4Pt1D",
  "key32": "3s7XgdEYkgzE6xmPChnX5cmLCAZT3EHPkBkoRYNefbnQPvuo6N3EXn8hRopZkHdi9RNXG1MrUKmWkKCBHuDewf9L",
  "key33": "5DeWnBndG3WJ76mtusYy4o4UGkm6yJRxXeJgQ3GzbnFccx9mo27C28h1FkV7ftJkHgc9U1DSTHPUsSa2P4jsTFwn",
  "key34": "44oU8MJ7cD85iT24sBbE6BbhLkCgWWuwhEGuzY6ymzNsLx4kCTrx6ePPH6J4BwpkCzLEjxQupMgmW14NhgECovqB",
  "key35": "4CEgdTTkWJWLj7kDmGRPk7Xkt24m48mES4249vFsW1VTvdrduXvWmBoN2SNjncZsQJrbpRHcekz48asykKVYzuXp",
  "key36": "5v2A5JnKbfgH7PUTciXZxZt5CdzYQwa94HjMaBTUtYvipWN1inJH3VNo9BZ4BBqw3uYnCsCRS5dtbqdawwTnMDhk",
  "key37": "4anw3ENEYmxJgWTUSo8ivpWGTR6R6wYw5t4kZpo2ExcnV5FFAWsW1BwjMgnEsN1UY67vXb3gaa2sAZoFTy3wvgqS",
  "key38": "DjQjEGnwQMv62hgivmWiDa12u9f6ctK7J5jRrow2qeDaPPnTbkD5YsRWwEkTS1h3k97vZ8kahts3VURHbkFTu4N",
  "key39": "2RgBm6iNqTEqKNQDNquy2oN2vhwuqnNoJN9dHAsHJcU7MxqgjRyaHKdK6GByW8172Ph4w9YiX88raShtN4Uej1o3"
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
