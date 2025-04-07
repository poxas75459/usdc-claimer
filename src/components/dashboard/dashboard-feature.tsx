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
    "4rrJy7Gju5sVPQhVM8nxPUiJE2uhs8u9mb3bVWB5MMbtgQ6Xzf7NGbbEWppvn2W4jFX9rqAt7ZBxvPdBhgheEbLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cN8MUPbXzzzi2wm6CRzm6haSqEm7WdvwYB8gTqLeZ7o7bkBECwQRfJZYKvP4ctyhNKmc1E3h4tCniVrwFq8nXUa",
  "key1": "wzyakj1QJ6be58NzeadukE58KQXSv6DxqrKJkf9ZSqYBceQaq9bKvMRwGGQSkGH1SJgdtocatmKN2uf8bBcfxR9",
  "key2": "4nxpg7q5uUQRWxLHH9CqikYKKde3syACNaS1wm1LgwXkpa3DFdPnpfBJXrqTzQLrxVxyK8fSCRV21BZM5RyuhueK",
  "key3": "5ijqPQpVxdSwavvTCWCzKmg1YHQZYX6ams17GHPtbDBwF6YJbALvsSE26DDyFsFkoVP5Z3jqxufHTZkfnwVPVkTR",
  "key4": "27T1Baamv1NjzCHNvrzs9Lap3rpkddcvVq8S1HAENrpHtop3or1ta7Y366aBRVAApEBWdpLadkv2RLZUSYxp4hpt",
  "key5": "3vxS5eDbr4ZouX4QmCYWDGYWXH1q6nAfxCtLb5qWFg7JKZRjhHJAE2EcvSNFniniKQfVusNjBt9NWT39dcGtJRGx",
  "key6": "4jY6yaDJzx7p3jgHRGSL5rNJF7xc5kGsYd7xPkoBnaH925xSGoU6tFH344yTMqzVCSyu9qif96RMTtWdXRC8kwxc",
  "key7": "2kgT69TY9y6z7Fzd12QN6ZE1XdxrP4EgvNDh48XTJWi8bYRudqYdDtetYDXMxzX96SbGdRkQVBSGKB9TF6ReH864",
  "key8": "SGMWH7hE7b9nEr9oLw5Jft5xnUHxuycdyVyrLy5oSNfQCMtaho4UpyGQ7z5XNVNo3AANhbeh1zfJK3JajXv3fNh",
  "key9": "UTWuut1YJh17YNCq5ag5vguUCxvXnWuX4PuSzrdujtFJVqzsDHC59nadBU7LEeg6bwtv38DCRSvkarkWqEkhcdN",
  "key10": "4y6myifRSJwEyqXH7zcAR3DqkF8WmizvQZLbJW3dbaVAVj4WXipNaYrZKcgiX4coSkTpnqNe8PgvZ6RBjjwYSAga",
  "key11": "fUFgcop3UxF8tBC1fLdDcKGDxwzcEfw2xtafXESRM3i4JxXVt2Ji2jbtZQxcHYzvazHNPQ925dBy9wB2e8xmuM5",
  "key12": "4JMSMTKowvmX6sGTPTDLpbWeh8SW7j4BaCDZT8gZoohZ6Jmp3xEHGBfsDCAeC4ddS4WKJQQFsqbytdbH3m73J1pB",
  "key13": "2TyzfkddjKUTSeA6cqjNs86U4hGjB5A732y2rv97ePaFaobGicDuE7XBjauUkiNJwCxJks5xvK3wAyLNW1GqfKtt",
  "key14": "bD2HaffZM7EdVkHgrs7NA7Yrq2Cnq8ZX2VqxdWd61SAqNfxa2DCRQbXRsu4aPFKJ7sUEPectpMjczTKhqtQ3Fxs",
  "key15": "3DzzPrfBTbJWL43gcwW6oUh4DTpAGR8MY5RiQ96brrCgDo8zn9C37iL7j7qVDWoVaAG2rUBu5fr11r6jVoaqS78K",
  "key16": "2FhJGjzbCRLmNqGwPUFvNYt7kc4qDWMUBHfQxvWZq1yXd2iEUsZXTn5sz9jduMCaF2bZdLHi1RXG29C7EHB2w5aG",
  "key17": "3Lji9tDPtEhyVZ9FFTjKKG26StDEDKDQojthePAHMAfMLAeeDMonHivkj25m7hviTZeHCetKDrEAT1pmnXBQha5W",
  "key18": "2KAe7mMVE4W7r8CvKYkBL1zPazogrvUSovJ8SzPiVkY6JEEZF5Lisj5mwtg5qXrENbpUkgBKneAbcLmzb7UAQcyE",
  "key19": "2MacRJVh4SRPrDJUtrjFHtByueZAmbHj3mdEefkVUQyrL3vuATzaFMgQh5DQCVt3qvfmTaiSVSP6BMFEgd2eS2Uh",
  "key20": "2X7QpAbvdJfyUyvAtx7kp4FmgopdJ54vzsUYWzkBrMAb48BwLXayniw52P6YJbTrnisnD3xC7w89HksaaDsEwMt9",
  "key21": "2muCmMrqQ7jiawGWjqKByJMywgSJLiSDNrtLTkkiqe5QWn6gQoZjMZ5wVTLct7kQSDXVeZFi8mFg9N56GDQWiMnA",
  "key22": "3tcsCP78ptEtLAahp3h6WVXhBjJVE8MwwM6jfSumw98fg5BtGWL2vYKLgvHBKS4Yw3C6UsLurAAvHfrrpYuv82eh",
  "key23": "3z5kARTzuKjMgdYkpLMXmAvfw7hP95aUShfLwDKJibjuPixaqV1zqZ8wSryvnxd912LKi35vNqB36Sp3Jkhzk284",
  "key24": "5TJMPcZJc8rWdgwQRoyoysnBWkXN4Trom2XNqwBTq4LTKmPFWWWgGQPURUyRSE3n84eaxqoTeU1rZAWK2QUZAmA8",
  "key25": "32F6EMAg1i8PC5TEkmFthepsgzxMFNJa6FJaDBn9f2qLi3y4YKsa3dYJKC5wa9uzqfQpMFGXFYe9kYSLVW61uTjH",
  "key26": "2th1YmFNkhoJbUcojt4M6GFxBi3U9UbwLw8ZJ4hPXs5eSC2nQVUPrUnJzS6zzWAQTqZJHLWaUKuWznqRjN76vdgP",
  "key27": "3ViEeYAoZhqPYS8f7BZWkNnNb3vBtfNsxz3g9V4ADejxqaMArshMeEXrK6prwGR5y6kG8opDkb9Q9AHvroNCFrZC",
  "key28": "2qqKQGcuS8PwwCibfxnQsoMUWDEDhmrEfjDZ5pqKWYoV1vnbmrCQNVtYwD8GSsJT6R4AaEWACm549uHrritban7x",
  "key29": "4RMYFtUVwUj8tJ5p1t8cui1NHfU4g1MQFccAUx15shXvWiTGutqdS2Zq6JDyrvbbxXzojNt6sytz1CnChfero5rK",
  "key30": "3ft6FrsDh3nc7tSCGU3jHZMkzmvVR7VrL6uY8JGFNVnKDvernZzUCXodCicfn93tqvE8kGay9CXnRemqE8AXcsKZ",
  "key31": "mc6UEfhcTMkqPsc2zLVzLDS19mwyckGsUNoLfX2ftx1ZzcN9xtCZDaLQbBLneiKKAsARCh8y3GJZCspive9Fk9B",
  "key32": "4MMXiYQdVa4pH3X51jTBLMc7359QjjdFYe8qBWW9ueCbNxrKvGFyPEuJzrmSkJCySXg7BFvMRWo9RTFAQbZ1A4B2",
  "key33": "4qEx3A9xi1Em4TikKjQUJfXHZzK47cnCWHk7giGe7zPSxKuyyJx9YUosEgBVJuDg2CXuBpV1PaK8nk8utRkCLc5z",
  "key34": "3aRYHfdjJ1r5P5Aeskm2XdzrpFL53LALwW1QnN3EuKhUQJ89tLjBHkXiynnCGiVYQVKLJeeC5fPYseFngiZRiNZp",
  "key35": "4PAPGa88nc6kRJTwxdwsCtVaXgiwWaBvoCGJfiR5cLC8AS7HJ9PA9F5jeKTc2UL2SEf9pntXyNYJLbfWVdfgVBZt",
  "key36": "3qPWQk6UJo4VWdLaAT8JsSkB3JeKwg48CGQfSUvYWUtdWp2HS1abTQ7X7TPVR9XnHcT2orywpRMaqxoTo1SZTzcs",
  "key37": "aysZ5QiPRofhQc6oFDsABoyYXW1PFXndf6yBDNsr3rcecEJXQYzc4pmUSLSZvgJ9DnroEYXtAnZ1p21T5R7u3bo",
  "key38": "4LsoZBCWmsvoNxoqotCrS9UAwura4zGASDe5sPGxf2NsuuztutgU6emzPuN5WWfsTiZM9cdbVeRQgdEdGUCAKEGV",
  "key39": "4mZ5EguRxvknjsPof8HRgMnVLqiJ1SWjk9k1Wwu5x8FetzNJAPP5hwMdSLy8gkewqoefbhnBDBfFgDuCd4GGGKq3",
  "key40": "afEHhjh6UX9jKN19yLQ2YNPmH6H67mU3CdaGTWX9bLeVWoHGWns7vxKNwpSJEdxAhtf1oB5fJexkZJ32PGpwXpR",
  "key41": "53iE2fFQioZDnvRq95vrKFxxAKvxMbAwAeysZjN6MEQ1Q2CEsbFfCQqim56Ko8R9BML5HuB3zxzaJDNrQv31x9Dc",
  "key42": "3jPGnpLTGkGqpzWGwgH2K7gVKPrRgssUeVCn3KQuxmt4QP1LuFhzY1uXPpBSUcyARcwd6xBhJhCyMEu1w3vaje5F",
  "key43": "341DZo9e32bXQ1kMmTgTrJn3zvtQpYSbgKQAimc3ZWWZB6qGYEzp6inwB32FUpoepguYWntuYNdn4VEbBytzekXy",
  "key44": "5HDin2PzLGpurVwyDy9VXnRG597mCdwYiriCr5Cnj7ufZJVezeDwk7ve5TKWMo4ZSy2CSfqu2MxsZgaCHG2VGywK",
  "key45": "355DvkZoRhTB6EroBtTtrx1oa9iyLNDB1NsQbTHqyNz1PTr1wjSjHqVeu7YSvV8PcCdAjRTtGijsUbuDQVpwLmzQ"
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
