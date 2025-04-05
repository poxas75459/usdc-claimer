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
    "49c9mwHk3cbHpcp1W6vU9hHwvf3dcCWSCMRNwtvF9cjaSU3fKpC3LQ5KjUujXHpTcfiQfqK7XG4mn2bVHwDbxHxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QniENFy7PJWSqk88LV6d5AWvt8xmNmz4efDetLKFVN4QijTFR8mx57xBgMRtnyq9pCoPKbEZUA7j9dpnusNgEpF",
  "key1": "E2g4JRaatsKnN5YB7r3iXZgvP6Bu54ZDGzjcikBrqbaUBMUi5mySejHdju2gULiUsSTjAEFmfpGFcAmZHZdAWHT",
  "key2": "23bmLbx5v5h88JUsoa47U8Zjx4qKo9ZZrBz73C4Fqc6yBNboUK6Luxqjx1FDmnhauofHSo6U6pgyBb5id1AQXhtT",
  "key3": "u9nG1piGZnkcGHcKeb9oR2pgMztPrFAKZ8LHbJpwFmmsKwsDKzw1rBxfj3ED2NT8opTh1SGoaukU6qN1oH3rX5m",
  "key4": "JPYDbKcGsiV7Pm355sVJD3Wn3GH212Z24rAVqNc3fbypDaCdWT3ujC4V9brMcA9tKGRkB2HMpq9eqwj2E6DunCo",
  "key5": "3q6xHWJK7LRDervWMbGy9CNboaxztRg6pHUgJLXCMs8zamwDMzMxQZA2z7R17hxo54FfQfNFPr7E8TegqZy6tLdV",
  "key6": "4m22aW9sVr5HwuzbE1DUXo8uqaL6DZwUU1FCZR7gmXygNJhesPaJazpFTGxyGBpks5PpiFaJsqPqAaLsZFUULSxp",
  "key7": "65PVirCChpEHtPsNi5ajP94hunC27V7k5sEGP6PnfQCqNVYtAVfzv9XxDsVEuiTzSw31R1jhTLbViXT4JpewXos",
  "key8": "5bn6cQarjB33QFamBD8oz8SSBiCqro9zBRE8KpGHaEnFWCJMex9NZaLJebK8ijXe5ijSUnPTkuiDE94JR4mMr2Jn",
  "key9": "4B5hKXgHv4j1Wov5VTnbBRS5kYUqQw97vXG96pwR4RLaeoPKR8qzsyNenGKSrmLk5oBKGM9yeaZhKkXjfiLjEsRD",
  "key10": "8kEQXqgc2j8CN3L1HL9PXe5e3XEj1CBJanAeECMvxLTzk623wkFKy9jqWWvnu1yPWZkrch5QibTsZ4iKfc9g1mw",
  "key11": "5mVHKFys3ozA6eZEaBUGaCYT5ytfP9eTwZiHrikronVCAFBynRHt7CrKAtR2fJ7DyP71WmL7oDs18rxHQqok5GV7",
  "key12": "2oqGv4Ud82D8M6iHjTmJR9iR4brWbtri3yXJjL6Pmm1J4h8XkBLhbe3RuhrmLkWYgRzae14zwNZFkG8BPivztc65",
  "key13": "4XhS15MjVtzqs7eQvuDYn128MUZPAwHdz9h65LbVaQmURy9oiDbA8BxdqA6UajCotYYFLRuf7YQ6uTHphYgQc9BZ",
  "key14": "4oFzqLgkBpLJ1hMLMEr4LM6tFA63L447jK8zcnNgBinY3g3cwAtUviTJZUaSJhZXxR3cjTqKavcZcj9byhEjgHSd",
  "key15": "jaDZDdM9VnpYM5itV8WW5zaGm1WfhnkMdcyZN4K8bAcccnmsFHGWNSCqgnJP4maktPK1YNxWV8UUe1vM6o3Lva8",
  "key16": "4z2iod6hpnLSNoYju4nn88gsuQJuyiNW3n3Kf94FDCAecbkn9sw1Jex9KU6at8J7Dz91fvfq3Afdik5uziRarThH",
  "key17": "3iqk3rhSpJeDL79yJ9UJbZ4bSNPme6ar7LfkeqciPdP4x4KukkPs385BN5jNAKANhfqguUu9j7yYFqk3b9Tk4VXK",
  "key18": "3UCxijvwn138di86TshjvUcRDbuchXqv1vRegze6JimfALUenr6hXHqEcjGJ3v72oGDHKTXwESwaNNYtvZcJ7jPy",
  "key19": "4pixPy8E63CbnF8NqiS91LCZaLhYoejWUBzwxAcrZkdkNiDDbW61ihkxpVpFfSiNftXcZtkz6XwEsUbM3SNP8Y5s",
  "key20": "4ZRLQ1F2nqCJbxmaf8qqNHcyCKUV9ZYiMWs8asyR9E2DV4bt1JUC6LGNhohb99PqJaNRoQwwbbvi54YjjQN3aGi1",
  "key21": "4G6yS6yDWxRSi5oNnTZupfBXWHRCqQbQxt8i1z1Ja13QyUAZMqJdxgeNNNDWjrVw9ZWbJbrBPNE9bed2yU99GDec",
  "key22": "4pvmUDXbtYfTGf8vztMwHbUJ3FEG64RysjenC1jQaS18HTBEVK288gkPVQ8teui126DGz3akCEcWbZCZqq79xpWB",
  "key23": "4SepJo5czJjjWYJSB66SajvB7rjR7aanP41JM5pWpDRL9oxeNyymwvEA57P45xXb2bULLnrB2LNyQ1La2zspgPFs",
  "key24": "5om3wHuLYXNQ9aDsyYaj5tZgsH16UFajBNfjGsFEQ6c3sqtypAQr7K2PjgmY3ovYFf7oJMbh9gp3AkUUw3rdrjod",
  "key25": "4TKL6yb8fWX9DkRQ4SZ6eZsD6kyoipzBe8QaM4se5NVYcKdxvJWQ6rSR1jU6EU9rQWMYbWyH6zfMwzUgKhHvEEkR",
  "key26": "4sYf4bC4XV4km9kDcSy1sBHMeviBEbamHRxiDvH7vrSNMtEFbaTDfnacpAfEX6B5K84vVy7StZEpgProcmrLJnBN",
  "key27": "4PgojTxbmjUHjDdf9aQVDQoewFXPFhbVQCZRWRtVBkEJEXK59T4gnq11arHtTiqJLxKMD5Vhzpajx2p1M5gbi2jz",
  "key28": "4dxEy4kaCsqnhZLmngc2zEc4eBZmDtvBQAQnv2syBJa1WwHVsiVZVF4caTRYUn8JejgwUZuUaqgXBNy9QetHaWLj",
  "key29": "fkVypBjJBsw5E33NBW2C7M1DuNDV7fW9rsB8FwvR5CaHMSycauWFST5zsGX6UZWss91zCBKqGtahH5JvFoHeURi",
  "key30": "4iQXDVoEgzHuZY1sg74JofWCAoLTvM7QnjpKFn7D3QonRMHmFJpzLBMdsjY831etYh81aQHwf5J22UgZMjbAhbmr"
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
