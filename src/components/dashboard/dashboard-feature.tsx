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
    "2VHigVLNYeLrw1ZrJVgh8zq3EjXTZ4HsR8bXdadBThNA3BH8TLQYeX9wqZ9zE1VVuk9o3x9GkNoKAeqBb7TVHG7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dopsf1ZtV6gcx5PiMMBebYKEFE1cHkvx2NrMhMRJPYY5HMLtojo34k3VStDQCiJnUuxahVTQQFfj42CYqu6ijB6",
  "key1": "4GtjhQNHGMehKagxT3ubUkGqvtLw47mT6GzMn121L3cKreLfbuxLHx9K5aVjaKyeQSGrEeARnxQw7Xewvotn6AN4",
  "key2": "24WJcprMcAvhmREhsBrw7LW5HdRQmmmCZgdCm645NqzgLrWJXtn6FeDN6KVE8iBPoNb6L6vpKxaoxHgmj6Efu5pN",
  "key3": "39d81q5ybUmtdC9tzLDqtK8xJ89KqztTg81MjjS5gHUmhAzPm4k1mEfjGkMMR1iotBPBhqnBnzFBbyRy3ssQRcw3",
  "key4": "36VGQxyreJ2bfy13a4r8uRTKbTU6nJbg3RG3KxnMKV6e7NktnWV2xwLi9vmGsKqJmUXk6Q8bgP334JyT1MLpwTnD",
  "key5": "2ZTgBWYx6aAjFaEtVjF7AoEjqhYDkfFmasnwtnHGBUryhHNZQQ3ub6RZHwG2uQoubE4KDF7TVhEu2YaAoAqs3iUU",
  "key6": "44SwVziRJwU6zPzkmUUfAoxKoE5RKhNk6JzhNAGSxYzvpJaBjS96ZP7zc1TLf2a1iu8BYFRFGRw7gPBc7XSiKK9z",
  "key7": "2HU4bm4tCLgFQxAirbybBnjmrbV6dWUrjLHjDxCoxRReq4sdsWpkdZ9RypgvQc4kT9WA5nruDUbRCxBRYwQDn6pb",
  "key8": "3pVVDQcFmxmmETCchCtYKHt7yHnReYtx5sQyKUvs4cz6rzFJYhCFNAHM6pfum3A8CR5rdkntJCU1iqpWEP9PLDZt",
  "key9": "29jGS44A1sEcc6tfpB9o9VDRuzerHzLDTCrAce7PQzEkpaUs6BoEAqBrPEPbUzToAbLtMC7t4urYD9RUQJvGupLy",
  "key10": "3ig1rV1P4rd3d6vwxDSNfGttbaT8H4abPhFsRuqZQnjDUjFx8BugGWL1dCseDUn5432EwDzcPmJjRMLNrmABfsYB",
  "key11": "5N2xCaiWwMLdSpbHTF1kkSH5BXoC3a7tRkCddTnp5WTZqeDyQZR9Yt34DjYh8Jiqo4wxYDS48NnATP6DXWvXWN1v",
  "key12": "5MN4aDxc6cDgCzdr1h9trvxSkjGjzosMBT8fHecJ48RuCrDMQe4FVoayDZYBmLuQTzMEgyQ4aryWbC3Y18tanniU",
  "key13": "24XXcWXzYYwt8DYpX7nH9QSP4esjTrEhX7Dh1fLmJd2KmbiptkvpGyiyxa1Cw53dx4aBrsimYbhoX7CghHFKbABo",
  "key14": "5VGrgsKis8U9oHQsX6yWDL1YB1rQMgAJUHiRcQorZGBa4vnRipahsjSpiKjwBvArYKENEg5uuRGtUGFeegqBfms8",
  "key15": "3p7vsjMiy8vVzXPrg1ZmrJgzjzSdZGEb1zScBWVSbUvJXPfDNBiSk39wLcx72EWdxiqbXc4kvSPzgePSjPYTFqKs",
  "key16": "hN94CYKvv2LyC8tZxHgwUEssX3aMs4bZXkcVcesoNuVWY92ESLEgBPEiLZp2xj11P4tP5VMkxg444KkKXFPGwu1",
  "key17": "4D31tfsNp677ff9YthxPqGTmo33YnPCyx7wcZvx5FXsQUmh7wvVZzxs9iaie6o5TnDiojnNEoMZ5L8Vf6yq5Gvjz",
  "key18": "CbWzekwgBJxiPAzZ8d7t2SwtVEtY8C79s59H8PiZLKNnEVdezTrhLMMwEXCzBSZ53TyuduKrXHgNMtT7GTKM74E",
  "key19": "5pA8cUi6WNUo48BPa8wXwh17Pvf7QEwuzse6HKd8WUnmhfg8fGf3VcptW8k7ijuuKy8JMHAAyiycnyJNx2WFmqSB",
  "key20": "3jpjfmRABt5GZQVVMgVip1pwfs1XCoD4jwCAfEtGjSxRC7VCd5S96mnWZiXf2xq7rv83d5inTCBuJYC7LCx9jpdf",
  "key21": "5a2JotZUvvaa6o58VvaCTQ4WRxMqTi8fTz1mbettj1t3dMDPnyv7XKiT8v2iX8aGpftfDc4mrXFgrGcrGo56nMWU",
  "key22": "bHG8digjM7ioipLWkUErEfVRJkNLRh1RudningQFvU3fQd7fkThMXkWF54uQ7oabAkca2MU5hZ5RrbhC3EnDKt7",
  "key23": "5ZvFop2acmDuGsz8w4NquFzLuXWP2fU4Qr27PoxktTGuoZrEQuZ1re5UrUTwpTddVMmC6AyNKomp5sWKiF7m5k7C",
  "key24": "3TDYCCJyuX4Xins8zAmoo7UjzDLJH4a4TWDVKs2WH6Rs6gS3K6HaNypsv687ejviopcEbNBBXD94dbzANm7D64gc",
  "key25": "2UL7E8J7MTaZ2imtnvnevvfP96JiZZy7hQZek4cKux9ckGEb1FuhBoFudtY8wdaqwDSJDjEufExkXduCKQxYSZRz",
  "key26": "3aYHNvHUzgcaJ4BnAqBWhVtYbwxj6n9dCv5s4PV3Q8Fayz7hezc7bXKZqwD6W3hnCcZ8Zsd3PgDk4hFyBRYSPQTH",
  "key27": "2K7z9beTtY14H3SDMxaz3iUSmxN9UjJh3HMwd9ddSdbmudpkVxAUJaCD1pRNHc1NHUzE9VPJoCxxg11anuGi5ZkM",
  "key28": "3FsybbPfsCacLtL5LTf32owF5bWau8dqRb24reHd6pnx6Fwhtz4FNgxHRzsh1YA3a2zTuG7iiN7oA37sSeT9tPaZ",
  "key29": "3SbKmgQP3Er5uv2msuSXwyQg6cX8KFbJuNbEqew19zu9rsJeRF33fJQgnzsNe5suunpEaaec31C4Pf2Dz3E5vP5M",
  "key30": "4FLHdCQTdvop3Arcybh1LFkspyBQ3Usb1oyfJVvB2xpfb9Dms2KPPtrnjZsCJjLtADmhrm3RSt2AkFwWPPbF94Ld",
  "key31": "4fNF9NJ4aJpuDX8BZ8U437VcbMAZwEPjxEtDqzFHPhi851o5tQ4AUD1bJrpBduChrrAH8dGruFPhqUbvKrEXvYnM",
  "key32": "6711ADo3E5WzHfKpc4Qo7utKvRnb7fZky5ZMDoakEz5FC5rTAWRNU8b2drT9ENxkKpzHdHNykfXkaJ11spdcGt34",
  "key33": "okCXjYq2W2BTEYKBVKpenFbFRahg2QodBQnjerew9u6WtHbHcGL3S4zGYrx7rTiARWWxCsSuHGoFuWJdphsjCn7",
  "key34": "3nr9vs4UpzHyCNNNVeFayRZKenbb1F6A49x8YdeF528VMXrLENB4M2DTHFn7gGzxVdfZNWBtKw5dNPu6wnw7xEE6"
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
