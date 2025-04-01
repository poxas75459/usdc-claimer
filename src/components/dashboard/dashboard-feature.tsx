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
    "3A2qkRvoLBHYpYT3smHQzztLDdvuVwXydgnctu1FR3f3hVbwNwBLvx3cJoRzLrerqkYFbDiwSW8TbCLymwaTRojq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfkUF8KRb1gMLwfx96ZzhBxpU5t2AoUEPF6tJ3ZLMGiwxC4S1w66xA2o2cuqqRkqC6RKBwLw89ikc87Q2Q8X6Fj",
  "key1": "3Qy9sWR7iEkMruvjyaxnJQ6BxZgT4rH54RGNRxeWwSiUmo3ZUWhjwJfw22GLqQqiDx6MY3NwLnuBMwzj2H64dXTx",
  "key2": "2cCnHhycybAw9r7uA145xmuwdQsPQXVnY21jkqgN9jYBuGb4gFTquMgN45bXnGexUbdsus32WZTwFdnKzp7vg57x",
  "key3": "2Gp2z6z5FGR2hDDDiDFoE2xKuhgQGHGUk6dtLZGP4Bog7sge7hsDrafoNs7JFB1wFEaJapWXZEjdkgbytb9dv815",
  "key4": "2NeUG8QDS2d3hXCu68tvmKgAx4vq4eaNuqT1BttXLgpU4gaynL7AkJqfG7MMNryaoXJdceZXq5bprcYsErPqEEEE",
  "key5": "253gT6joxxu38qnBKH9337ak5M3Du6wBshcj6D91DcXtYE1CuqNSu3Z1BPPKiGeiG6kyKqQn9TDKLTJpMaYjeX5k",
  "key6": "5yscGRt5VK4WQ91XJ6Mzv7zLgvRjdrYCJQ2kUFe8bBwzoBYvyj63zcNDestZaSs7pwvo2JBA8hJ4YA447jagoib6",
  "key7": "vh7mn4QvuZ9mHQvvkQqxTAtGFX2Lrh1isLyrj3R1ZtiXrdYsN8J3WP455LizhWsqNRexRtbQgxBhmvMQMS3KoPz",
  "key8": "tjKDqpXLZk5MPeNWYDiozucuVGuAEjwXpMbATuWQdgYqUw8adLByG9zTTAmksqRKHeRM7p2G8LeQf3XuaToYGmW",
  "key9": "3HDaVUXrYjiMw82eMf1ZG9XtwRQmHcAob9MKgbSGrCtTS8iCA1XQ8mNTdc14vdUNXAAUCz7rwFT4SRbXeEsZkcNV",
  "key10": "uii2zPL9uJEvQdxAPabttFw96BwNJmsBEWMNGrgit4gGhmPgaiL3msuFTPo148a424ejzVsaNprW7AvXVGzTjDG",
  "key11": "5XSs3XproQVq4XRDHiC82pqP2dmmHZQGtsrDkx5wXwGxaLRZKSWsFLTbgmUTVPr57hbbVPNtyvhrwG2XLhJbib7n",
  "key12": "3mtYsChCeSsHXbdMsuA9e7gCCxjWE1Lac1E5hM7cZRJVcabVXWMZ9VnvFWvu33ZVEPEzXZgDNjUkcpKae8tdi4mb",
  "key13": "3KZxndhK8CVvxwrWzRoxVGTzQRQP9nmNfh9ZRRMP82kyhQgApxkEoFzHXDD1LZo9D8WqZsQaNbTrLLr3Q4LRcNg2",
  "key14": "3pXGKCnrTJBAqvzCX5yRNP8d3GNVbaWh3nLZKaqhNpAV5tQyggy1TNPwPu3vWvyfz1wXFRFswfd9ndeKGcgdzDM6",
  "key15": "MTjuonbhMcxHbANdgo2yyRayUZBwtRPuVG1fSUx6am3Eo1ozd6sJ5fpyAtt8kVxw59WDMmYJV8R9BwyGq2Auzhw",
  "key16": "4CfFZHLHuPceNzrP8eRrEVU7QThKiEP5BeBsbytR3oxx3QVq5gc5zRNWL4epmnoKFzXYfKzJTMgeFqWruDZSUGZn",
  "key17": "3NYWyzvZP2pyhtz73xNwWHTgydxNsH4CkdtJ7Y2oJw34Sn12FWvgdgvJw88nTpaSej9Fc41h6TomVhQAZz8tEPJt",
  "key18": "5WC5exTHH4EJxoqYPsAY14vhVFhUYfhvudDjnj6yRmfJmctGribATNG1AnGTk2bvNee55dyXmfs3U7fuiKy9jzy3",
  "key19": "2dmcUCTBEF3bsHtzHZYWZyA1vUd7Yd2jj8hezVzSwzmUFjPQLNhNrBU9bteXHUfuFRdtxz9dQvdniwp1Z1KQNJdq",
  "key20": "3gxTNZDTusAG5F81wjpQUvtWikgBXQgATmv4hig9K1nwCdFKgWyAVYo2woMT3czcX3afMNV1Kdex8m4zz4MRpC5P",
  "key21": "3CEhLPC1UTP2uNT9J7AkbyoXpR3S1FUR2t7uSRJP7Ej8FbsuDxx7XDmmiE8pPao8xR5zXU1NeZihmbeDSE44cbXU",
  "key22": "5WzKYW4UXFMj3NMZCGmKVVstWBi9HwR5NAab4vxj6KPeBCfb8ziFejqDtC2dhMuQ2YwDrwgGxemdXRe2EBrzeAa3",
  "key23": "2HFhE3Wo4eGveEq8PDSYLibUX89Vhrssb92o6oeWAU6FB9GqJU66dGaorSZErU11MduLhYQK8hJdBLBLK9u7fpFm",
  "key24": "4BQsF24eUuYTgjBhVWfzJfYw1c1EzMg4J78RCd8HmoBP6ATU31HCkFJfqeoXPW1SLMVkRNbRAKqX5RjKgbajgGt",
  "key25": "2oVKHjw2PQxX1wguLft8ef5ttxFMJikNGgqiGUBeBHrnkPC6EZrJgcjE65WhbhGsvhxRZve7LmpGTLnjxkFUnXPs",
  "key26": "Gkp4GhXPVSB4Zi4ZwJmqEqNYEryVeUwoSuhSt28i2yGf24u5fmh9dTCKuyFx4qiQxzKZZUPTyHpCra5b7mecNTT",
  "key27": "5bU1bhWycZXcW1BSdrT7ReGzeSKyWiciot9WGz19NW7GUZ8UPmgLaMn1L66bTM45JMrgBr46Gg5YeXRX8ar37UzE",
  "key28": "472BRFGWhfCPyD2wEDnNYnPr9M7mKrh9H4dzzmSjpd1WCjHJbZuGJZmkqZW9LvMfqF3tdJEMGoSCrmrNKEjnGjSk",
  "key29": "3kkn5tmgvxR15T27xxj9hMWXENje28yqHJ1UQ4VzfyNYChnwGQhNVXYJfhWGEamzcJDzijFg7tyLoMU7hNNXcpyN",
  "key30": "5yMzuYbH7KB7VCPRXCrJe8AHCDWNqGfbhyBkxsWaSrCSeD7mkztAq4Fqac499SzNyJWX8HPkH8Top5jneaw66vts"
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
