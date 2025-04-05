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
    "wEVmKvoV9bvg46XW5kXqyZELSPyne5URQQQYdFEJ2aaCKSYg77YrQEdXhh14ckPT2BPXiB6ChGdN91QeiBAnTza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y28mguum1MZwbHHW2HRqmqEHtN3bjB3Mid1Kx93mtBA19iNW3JRAXuZBFXvFGoRv5KUKJaaFDAGyQUibB1Sf7vg",
  "key1": "4MZZWaokGnLdKiKRHVQHghoc2fcQojvU9h1N5LpmUKk66fxDunRob63TAeSGxLWSg96Dbb6MgxtvSVMxfgW9QK9A",
  "key2": "4DxxPCjV26kQf6bnnkMG1jjcovwvMju79Tgthc7TuNJ8VkYN3CSuxx1PkXDmvhSYMzaN7465vSdPUhYsbuAp6kPF",
  "key3": "3Facp5zkAqFB6HeJDCbrse9RUYU6dRykgKxoTo3Yz1mYwYJWhLAVxwHSL6QEvJ7MLVY9hNRwegnQ12Te3F54ZVCo",
  "key4": "cEpcvbfdJytQhj2beqpGSnJYvhWsf95h8SZ8FMtgN1jwEdVE8gGwVTPKwmPYqVJkhgfU11F8VjCqmKtYiVYExqx",
  "key5": "5grvgLggxwF7kbnUZPHjJmutcCSrwumqdSVZ99C9d6raawQAD3rUHqGeP7hF7Y9HrykV26f9fZzwmPk5W2Rc2GY2",
  "key6": "4F4NSg7skc3mk5CcditpcR1ppK63GFgNnYPkRWYJEgHSnCb5NWTaKFEBa4eNrCDbjt2EVbRxn6hnzVDkFApxS8Pn",
  "key7": "5BN5nAPsB3KAKBoyG8GtqPbbWmxvgR1gYVzE6u9C334njjdz1pNReeYpynMeCE5fNqN5e3en7WHSzsdusQEUtvre",
  "key8": "51b2J9DwwFdgjd6X2yV9RqJjKAY2hqkmHXxWeRT2UDXrsqGcuKoar1FQmd3XpRkRdiw3bwyseFaX9yxMprAbJC1s",
  "key9": "2vCmr2CFWuaEmVuK3PzUDpgRtB2PeG9Nr4wuggNsq8iFEf3gvsmhWhq6c1u3h8gq9wvPL86KRNoTbx5TuMRM9ccD",
  "key10": "3LWsrhc6VnodtjGHGBjrgMJuRxo431GCG4CjqftWQX51pkqPStPL68X78a81DQCq2Ydk2D7T3g2tT6zP5qMjDvve",
  "key11": "5SixsMyTGtZoWEuQNQQbx6tZEBg4V7XWgDeh5mRqUnMr19nU32qKc1KcKdRCt6Fwfn9jEXtUERFi61TdP2M1qzSE",
  "key12": "2FT5WTGzGgbo7Xe1dN9RUGH4ZEJBnpYmYmnYT9Kg1A14A15bN65aSf6zSkEwvv2z4X4kkUchviwyMRuL4zuQzrnZ",
  "key13": "2191WK6x52xZo7xt7sKZodJJUimRiD4zK7dKKvvv761HffbASF782r1hAvigA2Dwg3fMcsUbmmgNZTZGoYLtHQog",
  "key14": "29fKbvAFK5ZwYrzZHvWPnnqJmk5pYrsCCHBKs2qu2691n2rexZt3ZCBBZuTVTgjDhvUu5hdj2e9J8CU4pbZtPz1t",
  "key15": "Yf7iPGk1kLF8zHwootBBU8ffvPUW9uYjtSyg8cXvocNhgcrv4pYjoHgzRQELektujZBYDknEqEU2gcPwoc27sAo",
  "key16": "2vpZxepp1SKkM7rMrCRCPbz1FCxG8LVyUgy48moFKiqorjyT2iYnk5trPjGAE4adgkvLRcEnaHLuFJzkWvb6SgJU",
  "key17": "4BiuZu5XhQJ54JJPrGbT3bkXTtBXt7iZogKU5skeD2QpFU1jER3u33ArmdVJphDDT7DytthvkfaRSsdx6idur9tg",
  "key18": "3dssyaU7SMUWc167GK8EgTxBgcs7zKX7G7aUYYAZPepNh7u9xtTp6Wsk3tQKX9rB54JZjtx96FToAfdMPnkKouC5",
  "key19": "2AthYbSdPbez3yjzJ3uWt7UJpu1a6Yw1LDDUtorpSnyV6S2MyyaV5DVnEjxGeqREwiU88j92yT9QyX26pWLNJVRr",
  "key20": "3HP4KAHrWNp4gq8sXvfePMzBemXSmwpdpNYBfYTey7vMYuPN9SBi49gfdKCaR7o7WEsPBBGy7hT98HUiBGhMTZra",
  "key21": "35JweXsmPcTA6KGqHovMsdfLrMVbFj2ksgxgEWKxqW9SeLdiNpHvW1PHJeC9eWhgCt4jm3NgFPQxJjpr9ZxyyZUV",
  "key22": "G7p3ecxoSNRQ7EmPr96qE4m6g5uLDJ5gRtivekp5dm4TkDE5N91giCgGL4K9iJzRYXT64rVBYzLC9WbT1KL91nu",
  "key23": "Dec4uXc2xJcMECYcaD1Df7YxoRXXnAeA7gyWeN4zbjrLn1jYDKcy9RN6DxZoLpcY31FHbfAmwb3Vg2HsPwEtEci",
  "key24": "oqH8Zm7kUzHqWSGDpKXQzwTyGsCFeRh4uTTtMcet9CLFv3wyEoz4hwbjuwYWN97uney7Zy4XNLdxhHqt23Q5cwk",
  "key25": "819d3Th7afoLnpt9Bb6ZvE7zttdmL4VYb7BMDYpAe7vtCHUApY3CPRpX531ZkzbEQY19tXj5Dfa4acG9E3t8AHG",
  "key26": "4DS366wVhLczu2EvFoT1FfwBFhYxqTsBPUpKeRW2E4iNaFV2urBwyEMZvFqSokMf9B3KAzrMX7bTTExF4X4N5Gpr",
  "key27": "Wq9MQGntPq3HMTRfsA3X9E4rf2PFFBJwGzACZVs1ozypKTB7Gw841fiXtYU63j3qQu9FSx6175LJpQhwCDDdvfE",
  "key28": "2huYDMi2s2kHwPGfwGE8Ecu9U5ihbej4QtydQLLc1kEDmx4RDFxkvEnwLmAh4qP7FLs63rGQqrTxjYx7xFvbSdxx",
  "key29": "3UoKeWJ1A5Bqyb6fTjQPxLfBZSw7tD2CeWGQz8YeYq2aQSCxuFXcggmteTwpstkuiBcPYVYwt8EG21kCvGqDeCUG",
  "key30": "4vsrd4cseWxJLUQeWAWuPjgyrx1ccSh3f8nrXKaEfj14pNx6eMV1J7PjAqX2rzE8869m9vhcPFNpsC5vbLCBnu1s",
  "key31": "3AgjkFoiFTctJNxWsr3M4N5hvu6sLotwPBHUrSUR6LRWdm3gt8hpQzFP4BTVtzTAFFaaznJ9fvWdE1wjZPukCgHt",
  "key32": "3Yq6D9ZEx8WhhysfHAYRRbuqd5a1PA3RC7RtrWNbK6AEEvgnUsXDeAowJ2rXs3kJov64LVWqpcM7UR1uJpYKMvT6",
  "key33": "5KxKYWxBUuwwSRoJxvGUSWe2R5VSFPjFqxQMLEbPPXbuKGFKiKRYEQ55PfEbfGRXg13aW916YmxQnCwQvbnV83GH",
  "key34": "J2W6vy3pLazHMUi6H3mUS7WY6R2pbrYFQ9V76Z8PtTSXtqdboAH1ZUKpQBYaeZseQFvrPV7s77tKbB7wYiZ7uSu",
  "key35": "4j1SpUAosizWxqM4GYvZrFVPRxPpMwJgdsBnLvu9xiaNvHSdmcCdqGWuYDVmVEgzrHb7nfnbwdnpa3pTHKrUQNqZ",
  "key36": "3kfkY4ZjiDYT9L3jV2BWv3YrgfFQsZcu3DxnJe86hvHi66QSm6J3hdjLcY6kA7uE8KdhUZNN11cZHUVE7kHZidpc",
  "key37": "2A11LhkSyzTUx4WDFH9YsH9hFDnP8GiC6jNRBTJJXUgHTeLq7rqTdD4Q9c3sAj1kCqCrnppvueMVykohq7kPYmM3",
  "key38": "odqXpBb5vifAC5q7t4VNr4dFofFv3SeMjG3dQhFJMRbjnvLGXuxsjZiWz2rreAFx7WB3XnUsTcpxkeauVXBrJFn",
  "key39": "nHt5AVJnVRqfw9MQw1kcTFGz6fwZpBZNhLtUdeXYrMxKtiLRvqsLRAaS2u38zaeZ8Z3hYVhx3uVMpnZ9VWjXJKz",
  "key40": "AyvGAdxpk9qi6Qryx4aQjRgfZb9nwU7SkVhMaf476hzoPWEVFsUN4B9Txkb76tRC3MGmx8mbSTb223xmh9BYNZu",
  "key41": "5xvb6r684ptM5LHa1RtKUC5ahGxT8fc4UegSVr5LHDECZW49XKs7wejEJdLne8tQonPPkKmyJ8aLdAmriQJEHsja",
  "key42": "FLxaUeoVwZKG34DajMU8wbmgQCYHegdQSQAA8a4qRVVPY6qk7uqwKj5XEdoYBWiXC12KtDAzby5Zgmjg6zMobNy",
  "key43": "31wQEWStUrZCtpA9N8x1PVQzxqsUC1BBUUMAEmVNxzDY8brt6ArvWZU2KH431LFnSDVT1qDBmsY36d6ZTG6vH9dD",
  "key44": "4YQ9MMPWEJGdhfiLaTJvevbRUii4HuGnuDVds6JwCYjxqNZMq7kJFpHdebiEBVwszSqCMA33QD8VT4REBzZuYD8g",
  "key45": "2YBHZNXEXzAYgW3PTZov5gerR6cU4uuDhQvRrghVpJfYx4F8HaHBPV7JAoc6cPQAzLpi8pwVu3rjQ536MpPEM31Q"
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
