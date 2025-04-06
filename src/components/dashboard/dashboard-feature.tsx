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
    "2onkAVyuxciwQFZFZMCDrJSbRcpjMf978J6TU7wZ2o88zd4Rjwjh9EwgEK13kRyteShK354FMLx3h6vnBZjHJCru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebwMRNQSrDfsWpRUoPT7LPpuG5RotQGKQ5FWsZMsxyoBrVjPwmZkTRCTrRgNmLuceSzCMaiYWSd32mKNwTMS8ec",
  "key1": "2NUb2mVAuwnzxJqgm7bJcvGYx2XKhSBcr51JwrugkoMamSdikgQkwLSiGMGktwWj4Wpzm9q7N2cDSVVfy6bXRNQ",
  "key2": "2LycnLHUnP4qeTiuDHFCNjLUoK1Wi3nMeaAda7Fy7jKGTxsbeSs7hP1ifCv67BUM1GnEe5KbTSiNEUZkrWtX4HzB",
  "key3": "4f52YT7qo6Wdbf2s27fXpZefGBomt97HAT363ZVUZnyaaidfhmAcQLjPd5KS7aZoMPEXEAs7WqjyCTegevCZx7E3",
  "key4": "DMqyTCUd6Pr4dBwp8ejTmkNCQBZEjwo8Gk2ozCYmYa6vAHTmjW6SZhfxUHBgs8HhQwBsPoUXyHMCcDenyiawtuU",
  "key5": "zBxXwua8x6am1zfdZeWYkziJtFYCaiLMUdFp44QoEoWHJPUg8Vzhq4ASqP6PhKTzv6Wif1myRhAhuDPXfauiuT1",
  "key6": "5Co63hRPn59zmW18YrozxKL3Z2cZ4CrChD745XMGah4E1bKFeQkibWxS5KjpfZLbbiMMjS93qNKvEZAsgbMY3rGF",
  "key7": "5ch3JitvGpqeK629Hgj5vhFWh87HNjFjhiYCyZrdN4K43gmz4RfxTS6w33RQbR2ZqWeyRDYGqFPk5gGPuyDLuc8P",
  "key8": "3QAAvAvGGwVDfH3Bgs8MNirxuPC9b9d5aFqRhmv9JhSVutXupgEWCy3Fqfy35t6NdVjiv5FBgvx5dvuziAW7oR1Y",
  "key9": "5KSx74bEga4jS541Kt2uvyJDom3Lk1VU5nRMswjL7oVxdEJXoEQTH9GBHSURbhuzz41QenLEyj2Z7fh8vPsXsJwn",
  "key10": "5Snp31CCqZfyNHuBgXggH5Henux6APoMd6E6PjBtT4vvja5FqRTGoZXBmebw4maFwZ8tSUqpNqCoQCwKZzVHWXmv",
  "key11": "364gJgbXCZeHPC858ZJ3yXUCYFNgs7p4kfCbJkyXa5oeAFS5aTpk1sTBuggxidWuJzz5zSSfEnFo1m9mAVWAxJ8A",
  "key12": "5Tv3iny9d1ZibgGX2hGDUGEn86dkiYwM9acSC5sEJYZMXU2sRkSRUbJM6Gd7SbBGsBpAbAQovy6zdCdSZxWsQiaB",
  "key13": "5kzpGggjpWBPDqpKemzHRpcudGuy8Y29HbdLp5v6zhLD1cECYu6caCSDpK8WvH2fWgs3JJmNvkQSa85WFQBdEG26",
  "key14": "5ZDfVBdY5dEGaqewpQVseCjiq3xByEtmzkQLEhc3TCLFgbGeZRuz48A5XUA9VM6PM6XadQkzrZwMNxhNWx4L13Ri",
  "key15": "9bmgFQUJmFZUUgbR8d3ioPaEnYzRzAPZM1tDrFJYQRu2KarAVVDDKzs5LBUjY6Roc5aBYU6kM8ieLvTeHQwfgoa",
  "key16": "4FSy2dusprPaaZsSJ9r8umdQNj6JqKL8HhYBUunE4b3hitbGjvkw5ZZzzLGMneTs2R6VmnWWShJw2KQtBiY24tFZ",
  "key17": "2RDSW9SydgMA1MAoKz8DZKcmf465ZQH8xf2FgCYHCRkfwkPhZmcDvFYmp62SCJivwT4rhsHJMb5rEXMVU3Pjf1HN",
  "key18": "3hRn9M82PR6nTHUkuYBTxdCkEoWoXup8F813m5Uf5aYfnBswXhBfvyiZ2CxUBeUuhT71PrS7mPGzvpgHxZVXvsj2",
  "key19": "29hjxgknAz92ZbD3gQJFeYugAizNd9qEMUSGRDhceVWTDgqSZ841x8eKb7dHsRAuqTqv47PxGFesXpd5V3LWyRqR",
  "key20": "5kVPiSNzCxrmwRw4mavvda7vCtgs8xNpwRB5VSFn2AbtPqTtNsELBkyAEgWxUpfqpAD14nAMzKNXEfMJZ74P4qhA",
  "key21": "39KCY7AAvRvKWL3axYVFh8HtD9aSvfNq4iHrMgLkng67TjEDq2BnDdZqZzucbQtGSjg2yW4KZarHKATShdhDny9v",
  "key22": "5NArRG1JmfpTJiNU5mD6Xnp8ufNMqbVhcvsywyZ1S2CKxpUydg6ygqjctHCZ8eeuNkM4FrY78k3orQKovgd4CS7e",
  "key23": "2gPq7gyc9YzrbZ3LAdqTMikbzm5ancEaWCU6nNFXwsKiuDGUYUC6E1WyXbT5nQY1Mjizns9k1zyNL6G4iBcrBYiN",
  "key24": "215FGeeR25aWtZ7EtJU8ngGfFDQUwBjKndFvNQbiYFK8MrCe9H3rFYUcF7V8zXqx14EEamt4Y5KgnB4auPCmv4Ju",
  "key25": "5HBrEji7qEBz7whKoDB84YmZRPTWUpDwL2Jnk58rNQc5YprMezCn3wjhVqVTyG68iKC6332K7tAuHFhz13uppSt3",
  "key26": "9LvEEbFGoCFABrtAzrdS4WUiZ7Beopv6SMz6vwC5Lha2NW7VKvoS47znm9LZ75jxmNL29tAQ59LsXdpwSxnTYSi",
  "key27": "3VhGse8R6PM3BJK3U7gzWWuFwpXMc8m973S5g8xdCDgZt11GGaq4Yaz1hR4pmJgQzJkGb7g6Tkb7AfEUpWT6QsU2",
  "key28": "3yW8p97DopwdUxUtL4L8csNJnKTYyrxon8TEzEy1RGqnrrFiibaboH9uPgJy7GJXmFH65NKcHt2VLJ5XcoLwBmnh",
  "key29": "LbGbn6YKDM33eSxKa5MeRfCv8Y23keGMNU7hvYn6ipMgGXS96qJaWxQx9i1hyYaoNCXntbdJ2YvEP49vSG5fhER",
  "key30": "4Q1CNUEWor54diTarbsA6vPcCw1w5SxB2J1n5cv36QE4ux97PEMYUm3vDCka1CakD7GRE8NWh8U2p7WmtnSMb8Mx",
  "key31": "3HYH6mkS938PdmFz7KensDhUB77NZ9Kw6ezXeJ49JxE5kXASKrsTD1nj1tVFE6HDF5jE6kCmr6pCAjj1WuN3iQib",
  "key32": "4nagg9tmcFBn8YGFUjfBZDPToZELcU6iZk1Gj6ma14wEq4RRyDsXN97F7nzmncnY8XKpJS8rAGCb7XwLCutYabre",
  "key33": "4WbbuZJf3ZPvfQ94RZRuaW4W4sKpznkmZEq4z8iaJpjpsN7cX1cpVFYzpqLLjZMPf596AhfFGx4bHXxqQdTD8czp",
  "key34": "3M1gC3REEDHGdENx3XG7na3xef7XVpoXpYfMGizbfgU3Hxf5NJJDkRQHJCoAw2DM6NMTYtTMKCLRCTAiVG9WCmAZ",
  "key35": "23tCb6YAPtaGBSYCcDqiDiYSyHNYzpDszAD1DNAxT7vDNuhnRU7Ma75hyxB54Hdu8De7QgAdUZdSpWEa7QBaAKNu"
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
