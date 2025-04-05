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
    "4VgWpB1yGgAdCubi3qUbaSRujtus2ocTKVjcbDTUGx8fz1RcP6wzCp8UpVsZAzY9YNpx1AcTus9zyAPhj53tdex8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U19Cy9TDJRwyu2tSDLzaRLPEmcjf5UBnCNPgHkh1P48j1hqe5U2DTSokk5qW15Vet7EFRmnnXo172Wtgw5Fk9J1",
  "key1": "29ukfSYqYTQMcDxBqQngspGf6crF89Qt2sib8SBcHwJRRy86P92vHKdGBEjxp5bXBBBVvQkEkj87uAFUMBqPfHNm",
  "key2": "5gzmvALWPSTXGVjeX8bFU3R5EFMAHnR8cihucFoaZG2QSjsRCZhdsAuxHitKrNJ3rGX6Q1F1zNv9jdciUSrghUhi",
  "key3": "2WAWottsBEHRB2qGRFETC3eF6RoYRQCUrPw3a8YjeH7eiads5DbCBpWd9zQUGHiKBUid6pmqVdXHNBE27eAAik6F",
  "key4": "3L394DmxXc4XE7EmzschFS2PN9noVS5tycadGNhuj9JiamZwBDgPpPmBJ1su9e1JwNSWjfDaanVcVXJEnnAf8HJw",
  "key5": "5GGzkpq1YhZsEeEhA8yMzttCPsortsxaH5kQXFeT58qCk46rWj8Gn2f6GCM36rNZ92aR6bRW5q6ded522a6gPyr9",
  "key6": "2rRtryh9mPczaQ78sqWuDoCcJLnXJTpxZjAjNkY4dN6fddPjML8igvkgMFtbUcFkQPFxBzpcNTMLanDCfdRoumyA",
  "key7": "3EbVUrFze1CuB3vniAZfLUG5VsQpVPSdzCsQgwSHYy4jz8kcrTrsFZG2KSWUBhWSGhrJ3VAKenHDqfuPtmfbzPCE",
  "key8": "KWYuVArBFbfY3wXUDgEkEG2ApzPbrHHDaq8xFekE554UUiUbxyTatWaRkfo7jj2U2ozmqrT72hDyFMRXP9qc9ko",
  "key9": "5rAFCiWhhgkn9kNzrmQjFbe5XyDuzYKi3bZFk6ZTm4KcXnchWDiBXAmR7wbZSGeZBJna2sQ8jizx3THRRV6bKxkc",
  "key10": "2rVkZ6tiRzTMEMLbMnAkck8gfTbhnoSuKXyNmQAurJtXsR7Ne1EHTYTWNDdEj5qAQsd2u4YREcTkN5TA8WprW7kq",
  "key11": "1ddoW7QGHiSzXgc5D31zQA2mPMBibsBRuef8JrbjPudFcAHggoUfQnYDK97FkiQguzdcQQVCVLKtGXtNYvfFVCR",
  "key12": "QKHcu8vEJZUM5dLUeRKdtRFFcLM2ABZQpMM39NrEqhFi2VhJRagwNtpAVSTzECx1U6nyRDz8E6GVVzb5Yvw2UJM",
  "key13": "jB66u43WdEeYEzrV8MLhmLnzUjLeUHjwoTyuNjs25Hpd6Pad7WviG4iXJBDyiE6DY93P95ip7m9qfDoNYf6vLWr",
  "key14": "5wjrthEvfSeBRyM51AAzc3sLdmpS7yUxnVS5c4RBpke9tQuwHiBa3FfrxtvYxcm4U4Wr8E4kiCY9Zapdv23McLm",
  "key15": "48RxAFXwKKkyA4Ehp66SKCETTHLZ3QdSk2KPVvqdrMjTZ13LD5Cg6iZ8vQy3ZEzLAj1BuPn3WhHZ5VfVDFCeXykJ",
  "key16": "4AdxbYxqEEWQ4Qg1yhDGKymiFYirpjftWPX72jSUicJJCAXKbwEEPXnE6SCM7UeaiJnvYfPa5ExS9K5i2ZbTSJ2P",
  "key17": "5vBsih1rT1ruyAUAfhA2wPSABeu89NJAbnhANAft2RaqR31AS1qX6ZtCZbfRGoCtq48GFhpVhsDEYGbZLvy8PDYW",
  "key18": "4HzW4byWejvqypuMijoTmi5i2mqetRpetkxd9t26uZq9WFhpAHZexNTC7PJXvgigVu6Jc9zWRozki797xDLYmMyz",
  "key19": "3c5rZY2TBafAdTNo1v4452oGamK9w8mC6GgRyQsEkTxJMUhfxJU8VEAKXaYTDHVozoCem2uTbZhZuxNLg9NqUbKd",
  "key20": "tvjDHNhuaBi6QUbRj8cqZ7Gmd7dNiH3XYGtd4GeyLDQ84KUH6xfiifB8J21oZGtfj113zu727aHcPATvbGGiCEz",
  "key21": "58KTkoR6Q7HXK4qzA6YBMRRL9KqcPrR5YBmxG47TNy6ecFJXDKNWoWyA4mhoLTxHm8npCuTxDoozGnGwgdfXk8CB",
  "key22": "4KbqiJofcWQiFeAFgtwj4nkn6UoqQ11FFbEzkLQKhUDq47JWeNCcjjqS3zBgPgtiodgfxqyw8Rz8c2mKmB7Netrg",
  "key23": "2jimBpRB2oHGKULyXytR9fjUM4hPa9SSGs85xFpQFRAn1zJckxu9R988h1tnWHS8Vv7LEJdKNX7Re9YiSgcgepWG",
  "key24": "opADQUoWkc8Z5uRgKH93udqQVA3bUFgZ9VcirjzzPT1BY2c6xEt3jqsUteDq6cBEdnPw1CWiiNmJqDieBfGx6Lf",
  "key25": "3ojYFbAf2Zdy1msgidwvDXX1TUUtRqbGEQna4MdTWraoCyhmuoxDjpoDVpNKiForLVE9mJ6rnpkvpz5oMVCpaQt9",
  "key26": "3j4EhJcedW1p1xzpTgd763MzE8gQo8Jv1o7naXMhtNe96Sx3worvCVwLDahTbsAZAggujsR3QxipQqyK5DeYjfee",
  "key27": "2Fn13qVykweER5MN5uWpdozS3hN7uR2xhChSYFa5HJJoz2nZqKDiWRBHmPZPSsznQPfK268d4XChRaKVmBrRtnCY",
  "key28": "2apEDAQCYXF9wkdofamEEj98dCrETKC63A3swKzCjUriGUpV81WxUffdhiDGby4qGhwEJGJLuZDKbZTUpA3FKY3P",
  "key29": "3FMdpQipeCJdyPu8fwzkBB1NVsU1kcEq9BWdXkkshbCzJQykjaiXyax4Kw84e9p2nzBZ3G7yMJcZ6CDbu66rKfKu",
  "key30": "2BdUHhktah9XxWEJSX5Kq85fjVV64krsC9dUroWCk5NeKjSd9wc5NjCuJ7Pk25uC8XZRbzshyGYtJqV8w7osgZbH",
  "key31": "3kfsRfBXEErrKveW7W9MKDdktPbptfA18sQj9oib3HMNPRg4Zc4KhU7BHVhRkMYsW5biHPnf8htoibpxstMi8zRQ",
  "key32": "5GUs9T5EMMdgLoFFZ5rmqfjuknTtZNxAAQcMUrM29DUKcc3JvVMYDqF4BiuZHXPpJoGaC85nUvzrBSWaZyRTXdtw",
  "key33": "dd62HdYK1BZV6iijYJg1SkkZGcfMXtghomJQV867eMJzQxJMEboGshDFZsTHMVEBVQpU9oijNj7JxsqdvHQcqBT",
  "key34": "2pmgr61mYVyDcJBUVnoobkxSqheUP5Kb5ap5oCheR93oH8dHv9V1NfbcjoozT5SwGDY7WfD1Ff2wXuMZEnydQei2",
  "key35": "5Fw5xzKzGeSqeBSxK9Dave3PzR375h22U13FU1igwZMN9iL1HM9oF9oiegTCD34ks5PFMs7uScxWfRPcKBYAAR2A"
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
