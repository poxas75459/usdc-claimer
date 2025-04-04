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
    "3s1B7SqyHvrVfbkN63DQiGHfr33nzEzzsX6mQMTkAsLe9sTF5MewHzuADbYz7acC5UahfXWqWZ6ik46PDXQXsJC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CWctQy6qY7mwjdxSbjrQ5y42mFwWKTFURy6SAsNkjdw6F4zvaKg35EEY8Yi9hXZ5J4BkfHjZPfHEqGaqKC6wYTH",
  "key1": "3ZfDGxkaYZvoJfxBt9F8JGUgf3PFaCnq7HAura9nFs24jLvYJv4Q6n4ysubJpNKCsKmsC7QjWkESC7xGAaNxnMHq",
  "key2": "48nynKNArhAikC6mgE6LeYRpPUn5vUQRTwjkhhnkf8cE2rXmZAPSNJsG4xzwGxBZdR4fBbT9fbkXG8TravCKtp9g",
  "key3": "QkwBaoCMgzgE3ArFR1x6ERwfrKqRbLqznAk2QuKU2ck1ZJvShwmmMZ9FgyFoLkZVCcsXKVFLnVLyyVzdd7NaKzu",
  "key4": "Zbj9yyThRTUQERuL77htoNBbvd293m4XCEyQPdVvC57UNaZizusrjwpeRvQHe6Y4KCuNJbikp3FvfX7V1VsrNT5",
  "key5": "218cPQUxzjWnL6xWo6uXuYRcq1M2oBSQntiBzKzWmPyvkdGgn5UsNw7PYrSu6ro41d9EimL4HMjSHERbCDKGECZh",
  "key6": "Tuczvwkdi8iPZ8hnQZAHyvJEJFM6ATHU2wfik47bPKxfdRtPUZiaEWuXkUFw6s8woEoBcasDy9MLSkW4erhxkvX",
  "key7": "VT49f1Xn5jpNqQMZrHYkPQvximCQ2eSCzdgdwLXHmnNc1v1tGhiCWykiqMG1EmcdWHGcTLPkbCETRVsFNQwkWqx",
  "key8": "ZRRdgA5WpuQfAbNVu3x8CHRE3XUSxpfjxz4ytEbNBpE6d3ETs8pq6GA1t26CpwjtX8ztvyyFRyab4R3TUsnLMD4",
  "key9": "Vkm7RgCcE9F3ijbNLMdWaAFJLUWcpQ2ceMCdCc3EwFqNvHuaEwkxWLys3MkEojayXwZ8mWKpR2e6bv3rPN8VMoL",
  "key10": "wq5u2ANvNyYqEA2TgQZtrVGq4iiwapSvDadyzVk3ymBFdM6mKcwUcR2UasvjRdsB7VmkkxA9VeLVbbFneaQ81nH",
  "key11": "5ZPJH6LJmfhdTZHcK4z3Wt9pydrjpYfBFpRdUe3FueyaGLupbsEebbQv21y95cboYS1uWN7ymxEgVVFq7HUynSmT",
  "key12": "5MXTBEADFrnnKLoCZeab3VGSPdRSPofY5zR4aCumURafwXyU3kmxzbzvZE5LrLMjJHCT7UFHMD3jkTBYQdNPYs5g",
  "key13": "4rRyNFyURwftn2mBpiA9fAQRaH2d5wvBsjKFGajSQnnbYSjjA1jKvx6bARgKjKNCDhc1X8Tur3cNF37dJyxVPGGx",
  "key14": "47fDoL3aPV7rDe1J7VCfA9B4tqzAeV4ZeqrUcg5UXmdy8PgxSjM9EALozkw6ziR7ruEDQQ8dFk3STnzjQKEwbz8R",
  "key15": "3EpboWKcqnpq73GX2n7RRTojvmF5pWRtfaEy3X8ZLqokqjWH2kb8UbNwU4CFzmq6dXvoiEsYNkKsKGvmZutY2dVP",
  "key16": "3RK2cdNKmeGZUHLBw72QqqadUoDSWvdKwKW6Fu6abGrkXLxtbEwydfBZwFWxYP3z3vSYZWEX22trEBVKeLb98zQw",
  "key17": "28tgYtkoCLdUtcst6cLP8pvSH8ysBTHbsarSSzGU1Hy3KwzNu4VSTiT9GbTyZNkXm9UzfcUfxUJ5mhCu47oG4Ta6",
  "key18": "3NFowLKusyPiPHfiq72etPSM5LbtfkHa3arESnk4oNGzXkaSX55jqSkxWZSuLGHWSGkq6guKfMjoDuT19QQeatTM",
  "key19": "5Sr1Db7KurUbG1GnzaDXz6wquSEU5gg5W7Ms4eVf3eqCDEykkfAX5PJMS9DGBpcRhmoQpj9JLGHwygcfmonULxux",
  "key20": "4oJSMcvPK3w2CYoWLiCKdczWDpMXB6muPZdNoFC3pKfxdtpPNqyD2GEk9AHkrXS5Qe4suXibwb6WoyvyCfvRA4Gz",
  "key21": "3AGNh3dhXqQvBCDDLkaiWGAp8Gng8mbb887Gm2RFqCijoHxiMhcChKv5b12VEntjxd2cDdKUHUKEokkG8kcxwhXF",
  "key22": "5ghFa3KWvpb1MgcZmhrUNCq6PLDmgXtZp4BLm9LcyMDGH6A1VmFdfUV177kys46mYyvZEpbHYi8w9aWTSWjc98yb",
  "key23": "5D9inYLepPwtqDhw4HUNbgyRSX81J6YWTwGuFxzAWfBCAtYRDtcAzCuUL5Mw5vbXPFGqPZwafV2FSnwtYmBb5QJV",
  "key24": "64BzWQ3xmgdghq835fF3vvjQaqPfNbWmmmoefMhYyvri4r7f9bbboFH8CVcRFBYFwJNjhCdhPMoQMs3uS9TC4q9A",
  "key25": "3Vt6GTd9B35XRTJSzaHAkGE5Z5iiz9QA6RY9Fc9hpwerpGxfYCVKrUufNqJUmB372RBchDDd3mLvh8MsuQEY18sn",
  "key26": "51eWV5BxLdzuB5or9ms358CVSRKqxqZ5qfRyjW6CZ2DPPPaQcV9KJH7oEYYmGmkAvS5vNW9j9ZMYjNsPcbQbY25K",
  "key27": "32vMA8Hd5pGjVfgVfJuWJrLpkQCdAFuhgzCi1ANx1GB3uMXEKBzdbMZpNQFX2iyAd6rbpYHNoCn959vXkR5YZ9Yf",
  "key28": "pVZSYpzf3PCVES7pZAQ6LePnHkVEocY7rwH2fyKEWpyorzvBhkSUVFHuQ9Xd7xiSiVTGpN9Qf9RYrXTavRJwXs1",
  "key29": "4Z51qX7tTnKVoNd7WqVV3aMqKYFwbiKpmu54ppm4Boehpa4JSXBS4zE3767GGk8E5DNxY2hnacWJidhAUDHXcK4e",
  "key30": "2vUFWkfu1UMwv6KSECB7QAY6GeLs6ae9utF4pnAhavya8dTWQYKBXRYHbof6h7QWWTYwPirJ59fHMxvanLhTmkSJ"
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
