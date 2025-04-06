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
    "5Pf3BWxFR8YH9d7ZYtaYU2ERHTseNGEK9PFu6dGzGBz95Gx1KFUHktQYXSzfHhGZULsE1Nux5ctdSHAwgDh7zvDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLbbPgwNagDQZkom2ezCziHSH1hHUhREJcsAwNqyquhSZt1Bcy6JPdqJizr132YQ8tYQFxeA6WJPL3Z2gtnpmLi",
  "key1": "GL6B1jvqsrV2JZQyyKxiBUEJ3u67Rf8FuBTkYPCt2h11pTL144BXjZU2ptEoB8UytV4anM6a8EzQZQCrqogtvLn",
  "key2": "5QcpEhQraHHiVgw3G9gmMgpZHDxV5zMxyHAGWnDYDkSRYxJqY1y7BkCYqWJTyX4kg2kB72rt9Uzi2J6RaaVC32NZ",
  "key3": "3uCW4SZkqstUbc99AH54AWPGz3KFsZh3LsVdwRAkpJ7DKgpm6dbpV8VqaqhpeXRCUyQSrnQhV56Br1kR3tbTmZDT",
  "key4": "bWAvK5noipbvo4MDa3eTqF4jX7nQg64vQZNR16WKuWLzi45ZVPHZ9Bqz3jJ1s3SeCs3vryTjRDMHSF5zksXBm8F",
  "key5": "CDg3kRpkcyG54T7cgH1Z76DUX1J75Wm2kjPwdx3fdjABDotF74WnGk3bFp4zpjmttqoan2wW4G3vyAfypHqSWbG",
  "key6": "57tE2HHzxbFgVq9bpbdw2JwjaSfzRfNopfTRoVSRXG1yisck3mxeciu37rEQJQYsJD6XsmW1KpMe4jqdoo9YiUe2",
  "key7": "4yv7m1VxprhxYXV5AFtzSS6aimAgXJuxZjs4vSPkXbUUFQ2pcwek57j4nvQ1EhqELQWBMwfZxGgYLq9B5QkHXcg3",
  "key8": "31bm1agun7cqE7mc4BYCNKvtXr4PRLnSBQJ7bUvbDJHZgZVmtaE6nkHfCqrvjVw7sqkXZvadCcQFVTmqaA5Dgwha",
  "key9": "3NfoG5mwVFZsa96sghrkRWGKQRFZCvkWtMAHLMvt6Uxa6hX14xVnifUBHgMABJ67abM3z96by5TsLHQ2HNySmc1y",
  "key10": "5z6PLY1VGxDuNGHHA5cUfE7yt2SiaNtyJxVhEVfaadPo6128oe48p5TtnLzStC28km6bX2NSvZnq9qRGtRG1Vfo9",
  "key11": "3ANjFXveyyDuS32uTXiCAvo8Lw3yj4GdKfadF4Y27HXtE3QByE7vVnKMQjqX1L5Gs2YxSZ7R6miLfBFj46ujCfz6",
  "key12": "YHL1h1SczvaubH1DbAqbZvWibYgTzjrh5BviUExqBpSTNSfmBkehMNkg4XCTwiAWaxu7AMcY58397HLEXFEae9Q",
  "key13": "4BsntKQij7nv4arbdipAbZtS8oAu8VRRhbr4FHGuHx1yKGT4CBwoTy5QePzB42UhjiqiNpBw5PS9mHKMa8szmnyE",
  "key14": "2Ywy9pbyyytmdcqvfw87BBgddy7bqRdUipwiSmV3SKTj5R6zJzgPAaCoq6jtHZiCanfdH33SabJS75HkWpLWLzvV",
  "key15": "2gu3XYN48NT6Adrgq2MALAdqjd5FfGYFRgXk9vDqBksuUqy4QQkQzhTwpoiAgD7NwJjLt8ChMV7QeHTKbDnxnKra",
  "key16": "2fzrobea9tT6rX3BTXAgVVxbu5mCv1SYdbvR4xNoEAEA7yca8U1FERdDu9ti4A4ng13mkjXqtsAYecpYVciNaTV",
  "key17": "65abXt6cMN7kbvahF7KzsNmGSzwom7fsEtp5941atqwEjcb9TUzJgBA4dqdsgCXLUiXxcSP7akT3K583fEC1Rd6a",
  "key18": "5LDv26kxzfTFZFuB6u2WbdswJ8V1qawwYcid6T8N1sZLrHbb6mAY2KNikX4rWDRWS4Xdmd3QpEA1XtYiBayNgbm4",
  "key19": "2ZLASJNVhLMzqvzMzhjSFj2L7rRsf6FgimFuFJ2J1QRWUAPBoUMnpaDRNRcgy2NpKsunShFu41XrFPof9VNy3sq2",
  "key20": "41PqQ4R8eunmYCmGosZ2iwrNLKNJSLVMSzQgVNF8guCBsUQ4UyAjt8tZLWJx5rttBRM5gRzYQJNeBkk9PPgq5js9",
  "key21": "5GXB9vwGkZBRfvjzLGNRxdtseDQuQdBebnmt8cxn4SMud1oFNAYL2kfyDgvP8J2q6JxrvsTs5BC2SvXHdBKobvG8",
  "key22": "2TeMymcuroVovgoqUMHjVJe4ZfUuwNtsYTY7651p963worwhhn8RfrQHQ4feKbmfjX1kYyzZLUfb2u9MFw7EGEF8",
  "key23": "4FN95RPQWuGhRqzPR14VqJmw7gt2reJhYQozfnBbs5MHEfBLrEcvBNQpn8yczRCt8WDBQNyePgKCih3ZzmK5nxuX",
  "key24": "4LoyY6wjmhx2Zi8wwA3FqA8nTjmXsWHgbfKSE8Tuqcr8pze9v8WUEsp6tcvxdYCDMZAsfdtH8M4ZuzAEG1Ym6HXe",
  "key25": "3dJiXUXcWAAjr5YUdr6QaxKA4XpP71FpH7E7REd92YgdmfwNYRqHdn2NMtGa1GmAYy5U5PgxafwpnJEBNP8pfi2Y",
  "key26": "3KvoyRBRdKKvjyuwevwuA1LfruSb9NSufpRVQ24dLPWm7FNsy4ZZ9xtTEp6sB5mGo66An1i3YE2pz6Egk9SHGFvx",
  "key27": "5QLAr3mdgj2gd2UzrERQYyBRREtArRL3bzHCtSbgAoMbFkFJGU3MhTJP17BzzkVC8Gv2NYJjfNyiCV7nDUT1eksM",
  "key28": "mhxwVijCvUvYz1eXPgJ5jAEHqpnHMW7kpWANi4X19AkEPrUxiZ5dj6ugXFdoKKttjMiqJVGxBRFjC1KBcmikjTp"
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
