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
    "4JsmyZHLFgarZJC8SM2zxtA5v3pyBEiC6KUkyBbpj5sMi5EbWhtVBQR837qBcSCr4mn6dt9hfw2LDntJ4Yboam9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fb1RBLu3rYR7VMNCXZe8xQuPDr85mQprk1jqFmtLGeYWZ5vzocRJ3jMoMgdwpgTtsnVUaRE1VWrzCJ4WMWHjBf3",
  "key1": "4uACXt9Vz2XJVRMnnPoXPyedyHTSg555ZDC6XLS8bF7hQQcxKvJDUvGKTPc3JP587Mt5pSDNZzkjphsCEgcQVShT",
  "key2": "5vk9pGWCHHSWZSQpbTKBoTQ6DfsENybjPsGRN323aEPpXLhgqWpTwZYZdQibkx7nJznad1t2QoWZz5D5FxSQ1bhy",
  "key3": "2UTGJ3iVGXoMz1gtW7PELNtBNvKg2ZrH8NpEU9xGu7KHaySb9zU6fLjDR7stRwwKcvLQxZymPh45KtDpMMimUXYs",
  "key4": "65wXyNPfdThmcp4h3Nabn6L5Cv3CxJD5m8Swh4PA7rhJx2SCrW82jGF1422aJNmrmENjdPsjiP8HoYJEmDjvLN7T",
  "key5": "2zHAdsaEs329WBJGFk5hgFbQZHENN3Act6ULxV7dWq5XDgDCJdAK6vS3JZznmvfBS95hnvwe7zVmXRjUkW7g8bQs",
  "key6": "2dECqEHXHp2syNxSvDzETtonPPB7dww5SSRryGV2bdz3RFGheDVB3F83ZEhupRZ8XefMcJuGmuUg2Xw8MJPxLYwp",
  "key7": "5eWPbXPjga9XcfF68MS66qjaEkB7D8RWu1RXE9bvXKjjsq1tEZoGPYjWLFbm3N8W8cM9gBHT9GRG86Q6PsQiFKET",
  "key8": "4LhnySomc7DnxpweiZmWvnxMsgbkJzuAmCxechW4Z98gZPDduiesnfKWMcodrMFiYAdgh2SuF4w27rYLAgeDQqF3",
  "key9": "3tfetpfSoGFJgsEVmNDYEVC8vuWM6zfvdBJ8aXBp2PGSFoGsBb81zU85tTmERcJADdyCfYxAKoYNoJTNY1kYs9eR",
  "key10": "QFTwqe8ZrxmeFQKr6JJePNf1uYfaXc7erUBbuNqvPjGXn6NWqGdRftqaX8hkbsUiew6mY9TXPNYb3CsR5gdVrb7",
  "key11": "whcEKczp64zEuUhxia8cimwpAMJJaT188dBPju3Z6ZXZTR8Y2vzJohPp49L61YiA5qt1y66sWALkKRZNwwjC4FU",
  "key12": "5FJtBfUjWXPnfUf9i7CxsJob52YEkFGxuTTcjwELeemWvt2D6dTmEkkSQ2f52qKXUq9YkBcnSFEmmjhZHaCK4DCh",
  "key13": "AfQ8w3bWMJKDZC6BiMpaVHdgTQJGSQXwtT2wAE4pX9Bmd9oBCQsjrRcATw8ZUBxRvfBokip3GGEBqXqdtKU1YLx",
  "key14": "2x84CDdCkMW9gNXb57Xpnten92bhUncYvqwWqKWjVhoo3GTrvM2sRC5XZW4uS9ACfvJWgHsAgpgYV5UFaHTJmaQv",
  "key15": "2whrTBc2C9jJ9XcyczSDxjxjzmFBzP3jxpnGWzDmSnkJVpxk1DRVb5XHCwxRcgHtmfThbABkiNrnUZ9bXkwfgzNb",
  "key16": "5evN88pgV1Pngm3zy1JxHVAbPPYRFs96rxepFaFYci9FbRyWJZ2tWnX9378nSvTF9qjWTpU9zt3nADjzciCyxDiJ",
  "key17": "3HHPAtYPXzEoHY42d7zdskyCo4tvUaqWVFeiAESf5jxKRdWGAoisziNL8NA7rFzWmMfKYrU7rLYsqUQ7iPieK4Jy",
  "key18": "4kPnttt8U5kiLjwQdKxvQejRyezxNWJU2MmacaWyhYnF4HSGci32br2Rri8A5bJNRvQz2vzm1zHthyXxJ45wDf3D",
  "key19": "5J7vhY5pCCrF1htxVYRnZ16oyZN3CRofwBrrDpSPEU7rQFwkYMQSHhTYpJ6v4SKKqWaHXSbRQsJFrdxymtSgwDwD",
  "key20": "4Z6YqW1Yk4ZqUPiw5NCcwR4eaG6v2P34YewFshPjCUhnocqpphtwQPs9j3WvzQiMYXV6frPnKAKWeS2wAFZFPQSR",
  "key21": "2WZMhemW4X6WVwyaYe1J8ydcHczWkrgPGJNFosxMF9p1ksGGmhU8tJuNVAZxhdCd3Dt9CwkwtDMbantgYVYXs68f",
  "key22": "5Bzmo7HcdALohQYy5fmZEsmhZjHnFbhM7PLFhBg4PTr5EQFxzFMWKaK81WeVJHAvTWdUQNPD52GTRsdxdmNz2ozq",
  "key23": "3nqGbGCcm2eqF8ZrKWNTjtqzC4dnemNNDeEFREv6UF1mYDoKYFZER3V5QqXL7aTorg82JZm3SC6EYFCWU1macKmt",
  "key24": "rHvJJUrCv65Ebju1ZRtX65hfTzN217RZxK2JsWzHLPCg4eprs33gsG55wX2KcCu53CfLUhnLWQdtmH1etnwwbMH",
  "key25": "4hdCgW2YHY6RGK3LcwvwWRHA1nqoSEyqtZMgkwcjiwmgftxasZuLB221g85urEDEuftr33i2iBwDT6CzzYYHr5Up",
  "key26": "4cdoKW5EDq6VXgF59w7GzjbjWZ6aeJQoj373ZXEBWozWkAmngHRVyiSfbT4Jsoiw5ZwgHH5Sho3n9DEqwJ4MqsmV",
  "key27": "3xz3Ms8cLhucQUJ5btydEsC8GPp79QudgdMVp5xPu4q2f82kVRMy5hbSnm9rpVWjDbWc6HtQhUozfqRbeFZuSJHk",
  "key28": "4JhYmoNWU1mGJWTDror1EEUNV5uMcVLmBiD1LsM1yiFakntYvtLZJ3HCn8Fa76kmzahJt5ChxjxZYVQUNvSjtCYn",
  "key29": "2utgho73ixissNCSu1qksBg6Lk81JnsCf6FxQ2cPrh44Kg8mXt6LBihthZPpbRCaHxXVUQzYdVSNwYw5mnyqKN7Z",
  "key30": "4Hg7BTmAhNaXe9di6UgpHxSnFxUTAQQiehMZ8toL4JLtYzi9XfKAyV8YxuJpBUDvzLCrtKKGpU3WVa7KBWy6bsAZ",
  "key31": "2vmQ1UJtdxVZYFhq4L2uki7F2Tdf94dUNnSAa84ZZFCqo5Cqc3iHE1YJmqMcXWD7SS17cc9k3EWZMkS6aax4UauQ",
  "key32": "53cK8QKLarqe5T92CYuSVyk5j2gX6TLR9LowkVe9FwpcC34bAWHbLyMPp6WAJ52gvJBVQAZhgX4LaRrVENq7hgBM",
  "key33": "49GUNmuEebcavdChvBJiomzB3xyV4Yg2CY1Ak74qjwpeM7QdUA4bpmpjWJGxyn7Wooikjuro2MJPu4fgQgbsxGvP",
  "key34": "3zK5qTiKDxc3oSgQptyg9WWwadstHB9UEPKW2aPg5yFWyduz94Q7Zug5vcZvHD4rsR6QVdechHoGRV2JS5T2yzSL",
  "key35": "m5EKwcmXpL6ZVkUYt41Vx5gvcdExQt9FDkk9XJ3LjEAYjRTjoFWzxGx2ysQz5CnYLVnz1qaJVne38qdn5ytUHXD",
  "key36": "NZ2tKFNh4tNM7FbUvcMhvpPmXHqT68dzt1cwBQVcUyacz4Ew2CCyRSYT4TNaa9MByi1SPK9JbexLGQwtVKXhuAe",
  "key37": "Dq8r6vU1rvQuUSVj3xpAYM53Ko1HqrFtyv2haML1SmNmw2yMbHAuE2AJcdzEaFXvAXCZRCrgec5mskvZfDRkL7Y",
  "key38": "jnvoDSjnWCy9tewfcSryvdU2iirvu8KgRwDeW8EJqxyCUBDQR8uG7RGQH2aMr8a3jYqhbEn8JXSjUExsjktM531",
  "key39": "3VpTTBmoYfBack2buHJA3AsZuuiC95NtBDHXyG92dhXyfpLYzHwvm14NmJwqXRKbpeRBCW5GSkT4nCx9UibtxLXA",
  "key40": "Us8AfYG6LCkBMt6ErDD1HUAsf7N3D2ZHyoQfM6mkkuhWnmgKumNqEhQKP2SguMs3JDSNGsuHPTo5H9mafJ1CVUF",
  "key41": "55XkNKfKL9AAdZTw27G4SWb7cjanfqJGyusHyhHKWfCTLHLn2nhaY73wJ66jJcmdXYfXoKUJwu3hYUi2mp33W7vm",
  "key42": "Pi6852QhgYFtajhDeJR4fShkDNhENNvcpr5tghLLJJfU8d3Cs5MpBpfmdWtKRv5NgXJhrrTGSh5ZkxobZgLVkPq",
  "key43": "4PZsmtQ2xnJngJ6tAvjS5rzAzsrfqExAuXvSjPcZWt6qoyzBeHwWz6Qxhq8DCKL6HEfECf1Kk6qd1vvKXpr5gj8k",
  "key44": "2DMgBY27EVkv9B5Es213XLK3HDqf6GxfwtU387h59pBcKg5MtszquqiY9uBJAmUrLX51aW5XT8MXfJoEjZqiUnym"
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
