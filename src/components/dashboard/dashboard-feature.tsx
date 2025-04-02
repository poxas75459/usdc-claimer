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
    "2HF78aaFGpu4kzDcSfGGPwUE5T1ztddPaYCpdg8MtXRXWQDeWfaH2jiZPrAJaMtNcyNRkxZR9xqCJyGwRbFs8BUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHazGhbqysa7TZJ1H5DT4ePiqm22Q45W4SnwCLFtLQMjNUYZm2jQSKzzwM34euCzvhL4fRkjbBUEQmsaGXmdTsd",
  "key1": "2PcQqSoS6JrfeRfFuRGVhM6PatZE5jdXGN5oCDpNTZixJw7AQYvL7ems1J78pCJx5mxdyTNRzEgvCTBgKb4zcYmT",
  "key2": "4Je3Ct6x7FtS2w6tXYjRiAA1KnuXEkFys1tY9DnZ32BAo9uunQqURVL6NSMQ57u8oDGEFnxjCAVzmLbTyzSLM57m",
  "key3": "4b4Vv58DT4Z84MLLBQeEVU5ZwnmdnYjVKyDsDafWpNqG2vJvCcgUGGdFCKUHc71Km2X624oht95DNizkmciUxMEj",
  "key4": "55rGo1fyuJMiiFa4LLRFBdNYoEY1ZBW2VcT4k9tJ1p2VMn3Mz61AqgLnPswyMkSEKbMxMEPzs3QjEyDmG3CCRozx",
  "key5": "5hjn2rE6c9WQJa48T354JzYs8XmFrQWkrgecmUMJQxFiiiHfUVKDdQyqzVcDXhWYGsSNnTg7t8zFTmPXA7XoYgZt",
  "key6": "mmaajnCmto9XZ5mnV8YqxAuRASoXZLXZjPN3eHkFBHJvPFrzyENb6ZaofwVAnUPPqmHmHScUiBFKH4mGaukEAwT",
  "key7": "3RM3GSEZ7yYuryrt4qY2xdRQVEgDCFpAZB4tfRECWFWKGfmUbENMHAkreH8qMWwJ3tHTT1yooHrrEUtfdrHnsChJ",
  "key8": "qC22N9NC9xcBwZXBwSgt8ngpopNqX6pJD5RQuYRRLPTNcEMiBzALr3moZDPnY5yEiLqNRwf9pqPBb6TPQqEPR5W",
  "key9": "5RoG34tn8Y52P7iqnQdLR7Y8q4M9ExuNnXmiDFB72MNdYi4uq7vDw41gZHcomQtp4FHt8y1y1kYxBdj4EYRr3g9m",
  "key10": "2CGaJiTeyLRRbS9H591Gr4SjpF6rxu9pK6kRrbhenBU4bxcFcS4qePt5P8QJASKVBnhKE583YhqdQ6fqcK4P3LdA",
  "key11": "Ji5hBDB3TZxQjLbSR8CHaudA1CZ1rEvkKE33UP6cDpmeu9ZFi8hhHtzXF9hV5wLTRjjKus6zRFpkuBdZqx7Hk6i",
  "key12": "4242pxySdBHbtaz3MLFWD8e41wSg767BTdW2ovrB6XabhvnKq6xk9oGGUAj5UbsdPDvfPWFFbykJrjFk5ssFa7Tf",
  "key13": "3nE6UxMZq8cnbEnFNyUXVSfrjuPChMt55K874591RfdT1VaGr7UcEbv2agKbYPWcdQj7z5ViTrkY8rt88Ctmr6X3",
  "key14": "VCp8m1EekLaggSGtybwCJ9i3mep1Fy7WSTmqTXeUYkgQg6Jr5yBD2BKHHwbLqn5vG4no9FySczneaQLQLhJndbB",
  "key15": "52Mg1de5NMjdH4VfjemNQNNDanjv8akpYtgQFcA1ZPyTrZ7XywjjPY2K5ERRvrSW9VyyiwKT3YQ44evmmnGYP1Cu",
  "key16": "n8Fi3JdS5UPifHZwtvwbPPqkhAWpfjLR3wK8STZkcYzcKsp53Y6uhdJogC3fWHyB5AegfEHYxNkxWDdETNthgup",
  "key17": "4S2UAnoYKCeetDP9N4Nw3KfVL9f8X5GzJdfqE4D7jbpy28qMBxwFqWPNEb3dxAwQFfFxefKWmK51PZ8xXLqRFD2E",
  "key18": "5Krg4XVdSLQxjHMNS5WmXavoaeQK1h6EqmwbWCGL65uYvktRoyHxci5b4Up3Pwmh1MVc4MWKTtzvMKjuAgUhJmrb",
  "key19": "2bGkPGW3cBrdC8r8Zv9t48hb2dQnwjYzfay7Qe1zzxZZE8nEELFbXhbJvRQ9XjKb6V89d7GATgZsvvFNwk23993L",
  "key20": "47PQdg1j38rrrx6L4YxmbATaheLGxxzZTxqAYBSKN8tMv3dye3KoEHR9ReUbKq6h9dQ7EryecKVjif7HsTfjBUAf",
  "key21": "t25UuoHH9VHKWvi4JxVBa73SHzmSdWYbwo1Dw5H7cF1APnL9NmtyysBotiB7Vo2DFGt7uPrcoRsGfYg4UQxqkpz",
  "key22": "V5JLr5WJy48sVjhL1N56thhW4qxETszzduoNrzRKci6HdG1qXWGoqLriAYF3B2hw1uphtkSpo767buusKXVVw12",
  "key23": "5LMCjYb2zRrBvv4EKL2uUArnr7TAvKytfzZjndEXop8A4WEBtr5djPssDzVL6F2WS5ZzmA7RsYycKfoUeWoDigdd",
  "key24": "eoH64s1DynqfvskzsA6aHmL2xAeSmH53qAcEF1iZS8A3AMvWPtBdcfdwKQ7nJehpk2bjLmwEtUuR59h2Af1uqi3",
  "key25": "pcZnt4PnRE8QmWgZzqbQBvjd6icDLkQxdtWFhS1Kbo7kc2a5fepge91A9zybVJevbPc1mTFnb811fJmcr9JWPjy",
  "key26": "3AEnBDncTh6e6qz9pP5aMnwtYLDp2PBH8Zb5b1ZvbpFiMMAcH6LG2BGU6vX1VS4dKqei1BLryTM7nhYtCgYqzWeq",
  "key27": "2q3uzNdhQtCS3PDe6WpY77GW4MTgimAPcVPLzn3aDUNHiEWP8eyp6epiEAuuSAKDZ9zSpqrXdYb4oHDWmHqP87Qf",
  "key28": "67BuxfaMstaj8fxneSzVGSzLuox9c23rbikii9Rc17LvsdteQb27FZyWUp6Bhuv9aaoCkJ5uGsg5CAT1HmiBeqLo",
  "key29": "3LUaaMMqvZJmP8rT2czFCWVP36ddfLsq5kBnN3dkY8JzkYm3LuBvcZG48jDr4aDz21w79okwm2hEcDZbJmnnTZev",
  "key30": "5yaH1NVVVP7S6bqeY2wHPov3sjbL6nv3nsKXqhK7VCWT5a1pF8ZgnSCWHHJxTzJ3hncbHfx9RPH1xDxGZY73qTXg",
  "key31": "5DUt4VQWKP6F3UwFM3Q5Mq99v3FcuvauWnBhpcWnWqoCQ5HCQ1y9s56pdWKsbHYm6WG38avpJpcPZeDBnZP2K8Z9",
  "key32": "3uPZ7Wa8WMkEXwkdBzzCtGsRg74nW3Y8CXmNeztQx4tJySPKzCzgd414mzhxGa3gNQghjL2FF2rvEaVpwqL3PLGZ",
  "key33": "48k4nvdAf9Thc95EVHBBbCXoBt5QGVHqpQrFv5EHfUQwZFcaw2ChRV8ddL4Q2rZr1z64n7ps9jG77VkpH1w9py3r",
  "key34": "trZ6ipEqa8NNV2v4NDJzFbKuNRykvfYamZQPvrHNnjVziVsr8hKdNpwj2zKGWDe8aoHgaGVZeYcytiY6uAcWj45",
  "key35": "yCBpEiN6u6U1xtTgbdN4Vgv4Q2M2TFjxrYS6LqS9PAyPVC1CLX5VHdZokW7iC3FZv8LM5h4EmnoYjr2KBxGseuZ",
  "key36": "UPFDKqDtB7UuwfDDqoBfEdj4AE4KYQHU4c2QdnjFF4DdhXPYHceY6kULa51GFepCa1JXNgUdhJ9cB79jGWK6Qo6",
  "key37": "4EkzPhE9EHVuaC2FnjnPv6VxNVPKvb36u6sKjhcLSL3uspuaFjRYfDp8hGU6YXhZFkSbqq5TKeeoSdwW2UTkJNrA",
  "key38": "5r72uKFo4eXxMotik7fg53S57747hBRxNjHEJAsdZhAc2ySgYYfGDehPoPCJZp9RmD4QB4Lite9j1PiZL6pQGhvP",
  "key39": "42qugu12UXsUQBRDu66sdpapR2C8zoHnQ2BYnqU9gQFrHGC4MoyaWMVukvM9PgXmPvmTHb9g3hB4AyhuEpg8VvUv",
  "key40": "31avhAVc8sxyPj6BM6FPNwsCyqtt5FFVRMB65xwktL3BTfv7q1AYxJiskjd3s2nkGc2YmXNJJBRwNTTPmmj8q1xh",
  "key41": "iBgCfEFkmDnzcEbienoCEzNfB6nN8UsBWtNvG4ggxKb94pEZPUiNT2JY1rBa2rzPHQGfydJzUoNjQ8dVuJSt68D",
  "key42": "2fLN2E6VzSsefpij9QAHyHcFDdmCAedWpBoJY6MGwdjGEciDK7mmWbMAeb7u51o9tb3QGNQWzFTGBhcpN55Kg18c",
  "key43": "5PVD1bRjF6Gr6h5Cw7kRqpEwvyAECvmihzWASXAQ2Pfit2Tvzt5qKrMTcKwip7QFjy7TCYWz1KFo7kMZDYSpzHUR",
  "key44": "4Vs8YJPvSmxddY5bHUP3nWGHnHKAtAWmifR9G5MfbkbcjnxDr6WnNS1DPW2Hx56cswh995SzJwGoqdrN4R7Tav7n"
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
